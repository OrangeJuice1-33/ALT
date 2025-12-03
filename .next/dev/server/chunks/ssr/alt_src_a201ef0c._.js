module.exports = [
"[project]/alt/src/data/sampleListings.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/sampleListings.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const img = (i)=>`https://picsum.photos/seed/alt${i}/1200/800`;
// ----------- REGIONS FOR FILTER -------------
const REGIONS = {
    Mumbai: [
        "Bandra",
        "Andheri",
        "Colaba",
        "Powai",
        "Juhu",
        "Lower Parel"
    ],
    Delhi: [
        "GK",
        "Vasant Kunj",
        "Dwarka",
        "Hauz Khas",
        "Saket"
    ],
    Bengaluru: [
        "Indiranagar",
        "Koramangala",
        "Whitefield",
        "MG Road"
    ],
    Chennai: [
        "T Nagar",
        "Velachery",
        "Anna Nagar",
        "Besant Nagar"
    ],
    Goa: [
        "Baga",
        "Candolim",
        "Anjuna",
        "Calangute"
    ],
    Pune: [
        "Koregaon Park",
        "Baner",
        "Viman Nagar",
        "Kalyani Nagar"
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
    "Security",
    "Stage",
    "Lighting",
    "Tables",
    "Chairs",
    "Restrooms"
];
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function randomRegion(city) {
    const arr = REGIONS[city] || [
        "Central"
    ];
    return arr[Math.floor(Math.random() * arr.length)];
}
const sample = [];
// ----------- HELPERS TO CREATE DATA ----------
function pushListing(i, category, subtype, city) {
    sample.push({
        id: `${category.toLowerCase()}-${i}`,
        name: `${subtype} ${category} ${i}`,
        category,
        subtype,
        city,
        region: randomRegion(city),
        description: `A beautiful ${subtype.toLowerCase()} perfect for private events, gatherings and celebrations. Well-maintained, premium service and great ambiance.`,
        pricePerNight: 15000 + i * 200 % 8000,
        capacity: 50 + i * 5 % 200,
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
        amenities: [
            ...AMENITIES
        ].sort(()=>0.5 - Math.random()).slice(0, 5),
        // POPULARITY + RATING
        bookingsCount: random(20, 500),
        popularity_score: random(10, 500),
        avg_rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
        reviewsCount: random(5, 200)
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
    "Rooftop"
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
// ----------- GENERATE ~35 LISTINGS ----------
let idCounter = 1;
const cities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Chennai",
    "Goa",
    "Pune"
];
for(let i = 0; i < 6; i++){
    pushListing(idCounter++, "Venue", subtypesVenue[i % subtypesVenue.length], cities[i]);
    pushListing(idCounter++, "Decorator", subtypesDecorator[i % subtypesDecorator.length], cities[i]);
    pushListing(idCounter++, "Caterer", subtypesCaterer[i % subtypesCaterer.length], cities[i]);
    pushListing(idCounter++, "DJ", subtypesDJ[i % subtypesDJ.length], cities[i]);
    pushListing(idCounter++, "Photographer", subtypesPhotog[i % subtypesPhotog.length], cities[i]);
}
// add 7 more venues
for(let j = 0; j < 7; j++){
    pushListing(idCounter++, "Venue", subtypesVenue[j % subtypesVenue.length], cities[j % cities.length]);
}
const __TURBOPACK__default__export__ = sample;
}),
"[project]/alt/src/components/FilterBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/FilterBar.tsx
__turbopack_context__.s([
    "AMENITIES_MASTER",
    ()=>AMENITIES_MASTER,
    "CATEGORIES",
    ()=>CATEGORIES,
    "SUBTYPES",
    ()=>SUBTYPES,
    "default",
    ()=>FilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const SUBTYPES = [
    "Farmhouse",
    "Villa",
    "Penthouse",
    "Studio",
    "Apartment",
    "Banquet Hall",
    "Rooftop"
];
const CATEGORIES = [
    "Venue",
    "Decorator",
    "Caterer",
    "DJ",
    "Photographer"
];
const AMENITIES_MASTER = [
    "Swimming Pool",
    "Gym",
    "AC",
    "Heater",
    "Projector",
    "Stage",
    "Sound System",
    "Parking",
    "Backup Power",
    "WiFi",
    "Catering Available",
    "In-house Staff",
    "Outdoor Space",
    "Indoor Space",
    "Bridal Room",
    "Dressing Room",
    "Green Room",
    "Shower",
    "Toilets",
    "Changing Area",
    "Furniture Provided",
    "Tables",
    "Chairs",
    "Lighting",
    "Security"
];
function FilterBar({ category, setCategory, subtype, setSubtype, city, setCity, startDateStr, endDateStr, setStartDateStr, setEndDateStr, onReset, onApply, stars, setStars, bookingsMin, setBookingsMin, priceMax, setPriceMax, amenities, setAmenities, region, setRegion }) {
    // region options for Delhi, Mumbai, Bangalore (we'll provide Mumbai + Delhi as requested)
    const REGION_MAP = {
        "Mumbai": [
            "South Mumbai",
            "Bandra",
            "Juhu",
            "Andheri",
            "Bandra Kurla Complex",
            "Powai"
        ],
        "Delhi": [
            "Greater Kailash",
            "Vasant Kunj",
            "Connaught Place",
            "Saket",
            "Dwarka"
        ],
        "Bengaluru": [
            "Koramangala",
            "Indiranagar",
            "Whitefield",
            "MG Road"
        ]
    };
    const showRegions = REGION_MAP[city] ?? [];
    // amenities search
    const [amenityQuery, setAmenityQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const amenityCandidates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!amenityQuery) return AMENITIES_MASTER;
        return AMENITIES_MASTER.filter((a)=>a.toLowerCase().includes(amenityQuery.toLowerCase()));
    }, [
        amenityQuery
    ]);
    function toggleAmenity(item) {
        if (amenities.includes(item)) setAmenities(amenities.filter((a)=>a !== item));
        else setAmenities([
            ...amenities,
            item
        ]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full rounded-md bg-[#07162f]/60 border border-zinc-800 p-4 mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: category,
                            onChange: (e)=>{
                                setCategory(e.target.value);
                                setSubtype("");
                            },
                            className: "bg-zinc-900 p-2 rounded-md border border-zinc-700",
                            children: CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: c,
                                    children: c
                                }, c, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 76,
                                    columnNumber: 34
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "City (e.g. Mumbai)",
                            value: city,
                            onChange: (e)=>setCity(e.target.value),
                            className: "bg-zinc-900 p-2 rounded-md border border-zinc-700 flex-1"
                        }, void 0, false, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-zinc-400 text-sm",
                                    children: "From"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: startDateStr,
                                    onChange: (e)=>setStartDateStr(e.target.value),
                                    className: "bg-zinc-900 p-2 rounded-md border border-zinc-700"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-zinc-400 text-sm",
                                    children: "To"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: endDateStr,
                                    onChange: (e)=>setEndDateStr(e.target.value),
                                    className: "bg-zinc-900 p-2 rounded-md border border-zinc-700"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-zinc-300 text-sm mr-2",
                                    children: "Subtype"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSubtype(""),
                                            className: `px-3 py-1 rounded-md ${subtype === "" ? "bg-blue-600" : "bg-zinc-800"}`,
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this),
                                        SUBTYPES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSubtype(s),
                                                className: `px-3 py-1 rounded-md ${subtype === s ? "bg-emerald-600" : "bg-zinc-800"}`,
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/alt/src/components/FilterBar.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex gap-2 items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: region,
                                onChange: (e)=>setRegion(e.target.value),
                                className: "bg-zinc-900 p-2 rounded-md border border-zinc-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Any region"
                                    }, void 0, false, {
                                        fileName: "[project]/alt/src/components/FilterBar.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    showRegions.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: r,
                                            children: r
                                        }, r, false, {
                                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                                            lineNumber: 104,
                                            columnNumber: 37
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alt/src/components/FilterBar.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-zinc-900 p-3 rounded-md border border-zinc-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-zinc-300 mb-2",
                                    children: "Min bookings (slider)"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: 0,
                                    max: 1000,
                                    value: bookingsMin,
                                    onChange: (e)=>setBookingsMin(Number(e.target.value))
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-zinc-400 mt-2",
                                    children: [
                                        bookingsMin,
                                        "+ bookings"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-zinc-900 p-3 rounded-md border border-zinc-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-zinc-300 mb-2",
                                    children: "Max price (₹)"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: 0,
                                    max: 200000,
                                    step: 500,
                                    value: priceMax,
                                    onChange: (e)=>setPriceMax(Number(e.target.value))
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-zinc-400 mt-2",
                                    children: [
                                        "Up to ₹",
                                        priceMax
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-zinc-900 p-3 rounded-md border border-zinc-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-zinc-300 mb-2",
                                    children: "Minimum stars"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        0,
                                        1,
                                        2,
                                        3,
                                        4,
                                        5
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setStars(s),
                                            className: `px-2 py-1 rounded ${stars === s ? "bg-amber-500 text-black" : "bg-zinc-800"}`,
                                            children: [
                                                s,
                                                "★"
                                            ]
                                        }, s, true, {
                                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                                            lineNumber: 127,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-zinc-300",
                                    children: "Amenities"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-zinc-400",
                                    children: "Search & pick"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: amenityQuery,
                                onChange: (e)=>setAmenityQuery(e.target.value),
                                placeholder: "Search amenities",
                                className: "bg-zinc-900 p-2 rounded-md border border-zinc-700 w-full"
                            }, void 0, false, {
                                fileName: "[project]/alt/src/components/FilterBar.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-6 gap-2",
                            children: amenityCandidates.map((a)=>{
                                const active = amenities.includes(a);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleAmenity(a),
                                    className: `text-sm p-2 rounded-md text-left ${active ? "bg-emerald-600" : "bg-zinc-800"}`,
                                    children: [
                                        a,
                                        active ? " ✓" : ""
                                    ]
                                }, a, true, {
                                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                                    lineNumber: 148,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 justify-end pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                // reset defaults
                                setCategory("Venue");
                                setSubtype("");
                                setCity("");
                                setRegion("");
                                setStartDateStr("");
                                setEndDateStr("");
                                setStars(0);
                                setBookingsMin(0);
                                setPriceMax(200000);
                                setAmenities([]);
                                if (onReset) onReset();
                            },
                            className: "px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700",
                            children: "Reset"
                        }, void 0, false, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onApply && onApply(),
                            className: "px-4 py-2 rounded-md bg-blue-600",
                            children: "Apply filters"
                        }, void 0, false, {
                            fileName: "[project]/alt/src/components/FilterBar.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/components/FilterBar.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/components/FilterBar.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/alt/src/components/FilterBar.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/alt/src/app/top-rated/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopRatedPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$data$2f$sampleListings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/data/sampleListings.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$FilterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/components/FilterBar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function TopRatedPage() {
    // Filter states
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Venue");
    const [subtype, setSubtype] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [region, setRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [startDateStr, setStartDateStr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [endDateStr, setEndDateStr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [bookingsMin, setBookingsMin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [priceMax, setPriceMax] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(200000);
    const [amenities, setAmenities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$data$2f$sampleListings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((l)=>{
            if (category && l.category !== category) return false;
            if (subtype && l.subtype !== subtype) return false;
            if (city && l.city.toLowerCase() !== city.toLowerCase()) return false;
            if (region && l.region !== region) return false;
            if (stars && l.rating < stars) return false;
            if (bookingsMin && l.bookingsCount < bookingsMin) return false;
            if (priceMax && l.pricePerNight > priceMax) return false;
            // amenities must include all selected
            for (let a of amenities){
                if (!l.amenities.includes(a)) return false;
            }
            return true;
        });
    }, [
        category,
        subtype,
        city,
        region,
        stars,
        bookingsMin,
        priceMax,
        amenities
    ]);
    const sorted = [
        ...filtered
    ].sort((a, b)=>b.rating - a.rating);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold mb-6",
                    children: "⭐ Top Rated"
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$FilterBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    category: category,
                    setCategory: setCategory,
                    subtype: subtype,
                    setSubtype: setSubtype,
                    city: city,
                    setCity: setCity,
                    region: region,
                    setRegion: setRegion,
                    startDateStr: startDateStr,
                    endDateStr: endDateStr,
                    setStartDateStr: setStartDateStr,
                    setEndDateStr: setEndDateStr,
                    stars: stars,
                    setStars: setStars,
                    bookingsMin: bookingsMin,
                    setBookingsMin: setBookingsMin,
                    priceMax: priceMax,
                    setPriceMax: setPriceMax,
                    amenities: amenities,
                    setAmenities: setAmenities
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-zinc-400 text-sm mb-4",
                    children: [
                        sorted.length,
                        " results"
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: sorted.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/search/${item.id}`,
                            className: "group block rounded-xl bg-[#07162f]/60 border border-zinc-800 overflow-hidden hover:scale-[1.01] transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-48",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.images[0],
                                            className: "w-full h-full object-cover brightness-90 group-hover:brightness-110 transition"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-3 top-3 bg-black/50 text-xs px-2 py-1 rounded",
                                            children: item.subtype
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-3 top-3 bg-black/50 text-xs px-2 py-1 rounded",
                                            children: [
                                                "⭐ ",
                                                item.rating
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-zinc-400 mt-1 line-clamp-2",
                                            children: item.description
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex justify-between text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-300",
                                                    children: [
                                                        item.city,
                                                        " • ",
                                                        item.region
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: [
                                                        "₹",
                                                        item.pricePerNight
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/top-rated/page.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/alt/src/app/top-rated/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=alt_src_a201ef0c._.js.map