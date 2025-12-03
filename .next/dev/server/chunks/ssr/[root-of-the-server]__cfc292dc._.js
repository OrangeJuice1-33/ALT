module.exports = [
"[project]/alt/src/app/favicon.ico.mjs { IMAGE => \"[project]/alt/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/alt/src/app/favicon.ico.mjs { IMAGE => \"[project]/alt/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/alt/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/alt/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/alt/src/app/top-rated/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/sampleListings.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const img = (i)=>`https://picsum.photos/seed/alt${i}/1200/800`;
const sample = [];
// Regions for major cities
const REGION_MAP = {
    Mumbai: [
        "Bandra",
        "Andheri",
        "Juhu",
        "Lower Parel",
        "Colaba",
        "Powai"
    ],
    Delhi: [
        "Vasant Vihar",
        "Greater Kailash",
        "Hauz Khas",
        "Saket",
        "Dwarka"
    ],
    Bengaluru: [
        "Koramangala",
        "Indiranagar",
        "Whitefield",
        "HSR Layout"
    ],
    Chennai: [
        "T Nagar",
        "Velachery",
        "Anna Nagar",
        "Besant Nagar"
    ],
    Goa: [
        "Calangute",
        "Candolim",
        "Baga",
        "Anjuna"
    ],
    Pune: [
        "Koregaon Park",
        "Baner",
        "Kothrud",
        "Viman Nagar"
    ]
};
// Amenities pool
const AMENITIES = [
    "Parking",
    "Power Backup",
    "Indoor",
    "Outdoor",
    "Sound System",
    "CCTV",
    "Security Staff",
    "WiFi",
    "Rooftop",
    "Swimming Pool",
    "Air Conditioning",
    "Garden",
    "Dining Area",
    "Stage Lighting",
    "Music System"
];
// helper to generate random amenities
function pickAmenities(count = 5) {
    const shuffled = [
        ...AMENITIES
    ].sort(()=>Math.random() - 0.5);
    return shuffled.slice(0, count);
}
// helper to push listing
const pushListing = (i, category, subtype, city)=>{
    const regions = REGION_MAP[city] || [
        "Central"
    ];
    const region = regions[Math.floor(Math.random() * regions.length)];
    sample.push({
        id: `${category.toLowerCase()}-${i}`,
        name: `${subtype} ${category} ${i}`,
        category,
        subtype,
        city,
        region,
        description: `A beautiful ${subtype.toLowerCase()} perfect for private events and gatherings. Well-maintained, secure and with great service.`,
        pricePerNight: 15000 + i * 220 % 9000,
        capacity: 40 + i * 7 % 180,
        images: [
            img(i * 3 + 1),
            img(i * 3 + 2),
            img(i * 3 + 3)
        ],
        features: [
            "Parking",
            "Indoor",
            "Outdoor",
            "Sound System"
        ].slice(0, i % 4 + 1),
        amenities: pickAmenities(i % 6 + 4),
        bookingsCount: Math.floor(Math.random() * 500),
        avgRating: parseFloat((3 + Math.random() * 2).toFixed(1)),
        reviewsCount: Math.floor(Math.random() * 200) // NEW
    });
};
// create ~30 entries
const subtypesVenue = [
    "Farmhouse",
    "Villa",
    "Penthouse",
    "Studio",
    "Apartment"
];
const subtypesDecorator = [
    "Floral",
    "Luxury",
    "Minimal",
    "Boho",
    "Theme"
];
const subtypesCaterer = [
    "Indian",
    "Italian",
    "Asian",
    "Continental",
    "Street Food"
];
const subtypesDJ = [
    "House",
    "Hip-Hop",
    "EDM",
    "Bollywood",
    "Mixed"
];
const subtypesPhotog = [
    "Candid",
    "Cinematic",
    "Drone",
    "Fashion",
    "Event"
];
const CITIES = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Chennai",
    "Goa",
    "Pune"
];
let id = 1;
for(let i = 0; i < 6; i++){
    pushListing(id++, "Venue", subtypesVenue[i % subtypesVenue.length], CITIES[i % CITIES.length]);
    pushListing(id++, "Decorator", subtypesDecorator[i % subtypesDecorator.length], CITIES[i % CITIES.length]);
    pushListing(id++, "Caterer", subtypesCaterer[i % subtypesCaterer.length], CITIES[i % CITIES.length]);
    pushListing(id++, "DJ", subtypesDJ[i % subtypesDJ.length], CITIES[i % CITIES.length]);
    pushListing(id++, "Photographer", subtypesPhotog[i % subtypesPhotog.length], CITIES[i % CITIES.length]);
}
// extra 5 venues
for(let j = 0; j < 5; j++){
    pushListing(id++, "Venue", subtypesVenue[j % subtypesVenue.length], CITIES[j % CITIES.length]);
}
const __TURBOPACK__default__export__ = sample;
}),
"[project]/alt/src/app/top-rated/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/alt/src/app/top-rated/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cfc292dc._.js.map