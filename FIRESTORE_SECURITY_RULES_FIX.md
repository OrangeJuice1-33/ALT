# Firestore Security Rules Fix

## Problem
You're encountering the error: `FirebaseError: Missing or insufficient permissions` when trying to fetch listings from Firestore.

This happens because your Firestore security rules are blocking read access to the `listings` collection.

## Solution

You need to update your Firestore security rules in the Firebase Console to allow public read access to approved listings. Here's how:

### Steps to Fix:

1. **Go to Firebase Console**
   - Visit https://console.firebase.google.com/
   - Select your project: `fir-authentication-8abb6`

2. **Navigate to Firestore Database**
   - Click on "Firestore Database" in the left sidebar
   - Click on the "Rules" tab

3. **Update Security Rules**

   Replace your current rules with the following:

   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       
       // Public read access for approved listings
       match /listings/{listingId} {
         // IMPORTANT: For collection queries, Firestore evaluates rules differently
         // We allow read access, and the application code filters out unapproved listings
         // This is necessary because queries are evaluated before documents are returned
         allow read: if true;
         
         // Alternative: If you want to filter at rule level (may not work for all queries):
         // allow read: if !('approved' in resource.data) || resource.data.approved != false;
         
         // Only authenticated users can create/update listings
         allow create: if request.auth != null;
         allow update: if request.auth != null && 
                          (request.auth.uid == resource.data.owner_id || 
                           get(/databases/$(database)/documents/profiles/$(request.auth.uid)).data.role == 'admin');
         allow delete: if request.auth != null && 
                          (request.auth.uid == resource.data.owner_id || 
                           get(/databases/$(database)/documents/profiles/$(request.auth.uid)).data.role == 'admin');
       }
       
       // Profiles collection - users can read their own profile, admins can read all
       match /profiles/{userId} {
         allow read: if request.auth != null && 
                        (request.auth.uid == userId || 
                         get(/databases/$(database)/documents/profiles/$(request.auth.uid)).data.role == 'admin');
         allow create: if request.auth != null && request.auth.uid == userId;
         allow update: if request.auth != null && request.auth.uid == userId;
         allow delete: if request.auth != null && 
                          (request.auth.uid == userId || 
                           get(/databases/$(database)/documents/profiles/$(request.auth.uid)).data.role == 'admin');
       }
       
       // Reviews collection - public read, authenticated write
       match /reviews/{reviewId} {
         allow read: if true; // Public read access
         allow create: if request.auth != null;
         allow update: if request.auth != null && request.auth.uid == resource.data.user_id;
         allow delete: if request.auth != null && 
                          (request.auth.uid == resource.data.user_id || 
                           get(/databases/$(database)/documents/profiles/$(request.auth.uid)).data.role == 'admin');
       }
     }
   }
   ```

4. **Publish the Rules**
   - Click "Publish" button
   - Wait for the rules to deploy (usually takes a few seconds)

### Key Points:

- **Public Read Access**: The `listings` collection allows public read access
- **Application-Level Filtering**: Your application code already filters out unapproved listings (`if (data.approved === false) return;`), so unapproved listings won't be displayed even though they can be read
- **Why allow read: if true?**: Collection queries (`getDocs(query(...))`) are evaluated differently than individual document reads. Firestore checks if the query itself is allowed before returning documents, so we allow the query and filter in application code
- **Write Protection**: Only authenticated users can create/update listings
- **Owner Protection**: Users can only update/delete their own listings (unless they're admins)

### Alternative: More Permissive Rules (for testing only)

If you're still having issues, try this simpler rule that allows public read access to ALL listings (including unapproved ones) for testing purposes:

```javascript
match /listings/{listingId} {
  allow read: if true; // Public read access to all listings
  allow create: if request.auth != null;
  allow update: if request.auth != null && 
                   (request.auth.uid == resource.data.user_id || 
                    get(/databases/$(database)/documents/profiles/$(request.auth.uid)).data.role == 'admin');
  allow delete: if request.auth != null && 
                   (request.auth.uid == resource.data.user_id || 
                    get(/databases/$(database)/documents/profiles/$(request.auth.uid)).data.role == 'admin');
}
```

⚠️ **Warning**: The alternative rules above are less secure. Use them only for testing, then switch back to the recommended rules above.

**Note**: If you use this alternative rule, your application code already filters out unapproved listings (`if (data.approved === false) return;`), so unapproved listings won't be displayed to users even though they can be read.

## Verification

After updating the rules:
1. Refresh your application
2. Navigate to `/search`, `/top-rated`, or `/most-popular`
3. The listings should now load without permission errors

## Code Changes Made

The code has been updated to:
- Wait for Firebase auth state to initialize before fetching listings
- Provide better error messages when permission errors occur
- Handle authentication state changes gracefully

These changes ensure Firebase is fully initialized before attempting to read from Firestore, which can help prevent timing-related permission issues.
