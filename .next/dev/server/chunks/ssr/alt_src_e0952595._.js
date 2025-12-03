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
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$data$2f$sampleListings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/data/sampleListings.ts [app-ssr] (ecmascript)");
"use client";
;
;
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
function TopRatedPage() {
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Venue");
    const [subtype, setSubtype] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // ⭐ Compute ratings safely (fallback = 4.0 stars)
    const withRatings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$data$2f$sampleListings$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map((item)=>({
                ...item,
                avg_rating: item.avg_rating ?? 4.0
            }));
    }, []);
    // ⭐ Filtered results
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return withRatings.filter((l)=>{
            if (category && l.category !== category) return false;
            if (subtype && l.subtype !== subtype) return false;
            if (city && !l.city.toLowerCase().includes(city.toLowerCase())) return false;
            if (query && !(l.name.toLowerCase().includes(query.toLowerCase()) || l.description.toLowerCase().includes(query.toLowerCase()))) return false;
            return true;
        });
    }, [
        category,
        subtype,
        city,
        query,
        withRatings
    ]);
    // ⭐ Sorted by rating DESC (best first)
    const sorted = [
        ...filtered
    ].sort((a, b)=>b.avg_rating - a.avg_rating);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 rounded-md bg-[#07162f]/60 border border-zinc-800 p-4",
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
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 36
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    placeholder: "City",
                                    value: city,
                                    onChange: (e)=>setCity(e.target.value),
                                    className: "bg-zinc-900 p-2 rounded-md border border-zinc-700 flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    placeholder: "Search...",
                                    value: query,
                                    onChange: (e)=>setQuery(e.target.value),
                                    className: "bg-zinc-900 p-2 rounded-md border border-zinc-700 flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setQuery("");
                                        setCity("");
                                        setSubtype("");
                                    },
                                    className: "px-4 py-2 bg-zinc-800 rounded-md border border-zinc-700",
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-zinc-300 text-sm mb-2",
                                    children: "Subtype"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                    lineNumber: 89,
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
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        SUBTYPES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSubtype(s),
                                                className: `px-3 py-1 rounded-md ${subtype === s ? "bg-emerald-600" : "bg-zinc-800"}`,
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-4",
                    children: "⭐ Top Rated"
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-400 mb-4",
                    children: [
                        sorted.length,
                        " results"
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: sorted.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/search/${l.id}`,
                            className: "group block bg-[#07162f]/60 rounded-xl overflow-hidden border border-zinc-800 hover:scale-[1.01] transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-44",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: l.images[0],
                                            alt: l.name,
                                            className: "w-full h-full object-cover brightness-90 group-hover:brightness-110 transition"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-3 top-3 bg-black/40 px-2 py-1 rounded text-xs",
                                            children: l.subtype
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-3 top-3 bg-black/40 px-2 py-1 rounded text-xs",
                                            children: l.city
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold",
                                            children: l.name
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-zinc-400 mt-2 line-clamp-2",
                                            children: l.description
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-yellow-400",
                                                    children: [
                                                        l.avg_rating.toFixed(1),
                                                        " ★"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-lg font-bold",
                                                    children: [
                                                        "₹",
                                                        l.pricePerNight
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, l.id, true, {
                            fileName: "[project]/alt/src/app/top-rated/page.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/top-rated/page.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/top-rated/page.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/alt/src/app/top-rated/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=alt_src_e0952595._.js.map