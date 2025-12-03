module.exports = [
"[project]/alt/src/data/sampleListings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/sampleListings.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const img = (i)=>`https://picsum.photos/seed/alt${i}/1200/800`;
const REGIONS = {
    Mumbai: [
        "Bandra",
        "Andheri",
        "Colaba",
        "Powai"
    ],
    Delhi: [
        "GK",
        "Vasant Kunj",
        "Dwarka",
        "Hauz Khas"
    ],
    Bengaluru: [
        "Indiranagar",
        "Koramangala",
        "Whitefield"
    ],
    Chennai: [
        "T Nagar",
        "Velachery",
        "Anna Nagar"
    ],
    Goa: [
        "Baga",
        "Candolim",
        "Anjuna"
    ],
    Pune: [
        "Koregaon Park",
        "Baner",
        "Viman Nagar"
    ]
};
const AMENITIES = [
    "Parking",
    "Power Backup",
    "Indoor",
    "Outdoor",
    "Sound System",
    "WiFi",
    "Air Conditioning",
    "Security"
];
const sample = [];
function randomRegion(city) {
    const arr = REGIONS[city] || [
        "Central"
    ];
    return arr[Math.floor(Math.random() * arr.length)];
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function pushListing(i, category, subtype, city) {
    sample.push({
        id: `${category.toLowerCase()}-${i}`,
        name: `${subtype} ${category} ${i}`,
        category,
        subtype,
        city,
        region: randomRegion(city),
        description: `A beautiful ${subtype.toLowerCase()} perfect for private events and gatherings. Well-maintained, secure and with great service.`,
        pricePerNight: 15000 + i * 200 % 8000,
        capacity: 50 + i * 5 % 150,
        images: [
            img(i * 3 + 1),
            img(i * 3 + 2),
            img(i * 3 + 3)
        ],
        features: [
            "Indoor",
            "Outdoor",
            "Parking",
            "Security"
        ],
        // take 4 random amenities
        amenities: AMENITIES.sort(()=>0.5 - Math.random()).slice(0, 4),
        // popularity / ratings
        bookingsCount: random(10, 500),
        popularity_score: random(10, 500),
        avg_rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
        reviewsCount: random(3, 200)
    });
}
const subtypesVenue = [
    "Farmhouse",
    "Villa",
    "Penthouse",
    "Studio",
    "Apartment"
];
const subtypesDecorator = [
    "Floral Decor",
    "Luxury Decor",
    "Minimal Decor",
    "Boho Decor",
    "Theme Decor"
];
const subtypesCaterer = [
    "Indian Cuisine",
    "Italian",
    "Asian Fusion",
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
let id = 1;
const cities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Chennai",
    "Goa",
    "Pune"
];
for(let i = 0; i < 6; i++){
    pushListing(id++, "Venue", subtypesVenue[i % subtypesVenue.length], cities[i]);
    pushListing(id++, "Decorator", subtypesDecorator[i % subtypesDecorator.length], cities[i]);
    pushListing(id++, "Caterer", subtypesCaterer[i % subtypesCaterer.length], cities[i]);
    pushListing(id++, "DJ", subtypesDJ[i % subtypesDJ.length], cities[i]);
    pushListing(id++, "Photographer", subtypesPhotog[i % subtypesPhotog.length], cities[i]);
}
// Add extra venues to reach ~30
for(let j = 0; j < 5; j++){
    pushListing(id++, "Venue", subtypesVenue[j % subtypesVenue.length], cities[j]);
}
const __TURBOPACK__default__export__ = sample;
}),
"[project]/alt/src/app/top-rated/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopRatedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$data$2f$sampleListings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/data/sampleListings.ts [app-ssr] (ecmascript)");
"use client";
;
;
function TopRatedPage() {
    // Sort highest rated first
    const sorted = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$data$2f$sampleListings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    ].sort((a, b)=>b.avg_rating - a.avg_rating);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 text-white min-h-screen bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "⭐ Top Rated Venues"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/top-rated/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: sorted.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#07162f]/70 border border-zinc-800 rounded-xl p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.images[0],
                                alt: item.name,
                                className: "w-full h-40 object-cover rounded-md mb-3"
                            }, void 0, false, {
                                fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-emerald-400 mt-1",
                                children: [
                                    "⭐ ",
                                    item.avg_rating.toFixed(1),
                                    "/5"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-400 mt-2 line-clamp-2",
                                children: item.description
                            }, void 0, false, {
                                fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/alt/src/app/top-rated/page.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/alt/src/app/top-rated/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/alt/src/app/top-rated/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/alt/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/alt/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=alt_d9cbd4d8._.js.map