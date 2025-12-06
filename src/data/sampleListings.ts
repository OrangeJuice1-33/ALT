// src/data/sampleListings.ts

export type Listing = {
  rating: number; // duplicate of avg_rating for convenience
  id: string;
  name: string;
  category: "Venue" | "Decorator" | "Caterer" | "DJ" | "Photographer";
  subtype: string;

  city: string;
  region: string;

  description: string;

  pricePerNight: number;
  pricePerUnit?: number;
  capacity?: number;

  images: string[];
  features: string[];
  amenities: string[];

  // ⭐ New fields
  bookingsCount: number;
  popularity_score: number;
  avg_rating: number; // 0–5 stars
  reviewsCount: number;
};

const img = (i: number) =>
  `https://picsum.photos/seed/alt${i}/1200/800`;

// ----------- REGIONS FOR FILTER -------------
const REGIONS: Record<string, string[]> = {
  Mumbai: ["Bandra", "Andheri", "Colaba", "Powai", "Juhu", "Lower Parel"],
  Delhi: ["GK", "Vasant Kunj", "Dwarka", "Hauz Khas", "Saket"],
  Bengaluru: ["Indiranagar", "Koramangala", "Whitefield", "MG Road"],
  Chennai: ["T Nagar", "Velachery", "Anna Nagar", "Besant Nagar"],
  Goa: ["Baga", "Candolim", "Anjuna", "Calangute"],
  Pune: ["Koregaon Park", "Baner", "Viman Nagar", "Kalyani Nagar"],
};

const AMENITIES = [
  "Parking",
  "Power Backup",
  "Indoor",
  "Outdoor",
  "Sound System",
  "WiFi",
  "Air Conditioning",
  "Security",
  "Stage",
  "Lighting",
  "Tables",
  "Chairs",
  "Restrooms",
];

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomRegion(city: string) {
  const arr = REGIONS[city] || ["Central"];
  return arr[Math.floor(Math.random() * arr.length)];
}

const sample: Listing[] = [];

// ----------- HELPERS TO CREATE DATA ----------
function pushListing(
  i: number,
  category: Listing["category"],
  subtype: string,
  city: string
) {
  const avg = parseFloat((Math.random() * 2 + 3).toFixed(1)); // 3.0 – 5.0

  sample.push({
    id: `${category.toLowerCase()}-${i}`,
    name: `${subtype} ${category} ${i}`,
    category,
    subtype,
    city,
    region: randomRegion(city),

    description: `A beautiful ${subtype.toLowerCase()} perfect for private events, gatherings and celebrations. Well-maintained, premium service and great ambiance.`,

    pricePerNight: 15000 + ((i * 200) % 8000),
    capacity: 50 + ((i * 5) % 200),

    images: [img(i * 3 + 1), img(i * 3 + 2), img(i * 3 + 3)],

    features: ["Indoor", "Outdoor", "Parking", "Security"],

    amenities: [...AMENITIES]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5),

    // POPULARITY + RATING
    bookingsCount: random(20, 500),
    popularity_score: random(10, 500),
    avg_rating: avg,
    rating: avg, // keep in sync with avg_rating
    reviewsCount: random(5, 200),
  });
}

// ----------- SUBTYPES -------------
const subtypesVenue = [
  "Farmhouse",
  "Villa",
  "Penthouse",
  "Studio",
  "Apartment",
  "Banquet Hall",
  "Rooftop",
];

const subtypesDecorator = [
  "Floral Decor",
  "Luxury Decor",
  "Minimal Decor",
  "Boho Decor",
  "Theme Decor",
];

const subtypesCaterer = [
  "Indian Cuisine",
  "Italian",
  "Asian Fusion",
  "Continental",
  "Street Food",
];

const subtypesDJ = ["House", "Hip-Hop", "EDM", "Bollywood", "Mixed"];

const subtypesPhotog = ["Candid", "Cinematic", "Drone", "Fashion", "Event"];

// ----------- GENERATE ~35 LISTINGS ----------
let idCounter = 1;
const cities = ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Goa", "Pune"];

for (let i = 0; i < 6; i++) {
  pushListing(
    idCounter++,
    "Venue",
    subtypesVenue[i % subtypesVenue.length],
    cities[i]
  );
  pushListing(
    idCounter++,
    "Decorator",
    subtypesDecorator[i % subtypesDecorator.length],
    cities[i]
  );
  pushListing(
    idCounter++,
    "Caterer",
    subtypesCaterer[i % subtypesCaterer.length],
    cities[i]
  );
  pushListing(
    idCounter++,
    "DJ",
    subtypesDJ[i % subtypesDJ.length],
    cities[i]
  );
  pushListing(
    idCounter++,
    "Photographer",
    subtypesPhotog[i % subtypesPhotog.length],
    cities[i]
  );
}

// add 7 more venues
for (let j = 0; j < 7; j++) {
  pushListing(
    idCounter++,
    "Venue",
    subtypesVenue[j % subtypesVenue.length],
    cities[j % cities.length]
  );
}

export default sample;