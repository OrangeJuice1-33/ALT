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
"[project]/alt/src/data/sampleListings.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/sampleListings.ts
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const img = (i)=>`https://picsum.photos/seed/alt${i}/1200/800`;
const sample = [];
// helper to push repeats
const pushListing = (i, category, subtype, city)=>{
    sample.push({
        id: `${category.toLowerCase()}-${i}`,
        name: `${subtype} ${category} ${i}`,
        category,
        subtype,
        city,
        description: `A beautiful ${subtype.toLowerCase()} perfect for private events and gatherings. Well-maintained, secure and with great service.`,
        pricePerNight: 15000 + i * 200 % 8000,
        capacity: 50 + i * 5 % 150,
        images: [
            img(i * 3 + 1),
            img(i * 3 + 2),
            img(i * 3 + 3)
        ],
        features: [
            "Parking",
            "Power Backup",
            "Indoor",
            "Outdoor",
            "Sound System"
        ].slice(0, 4)
    });
};
// create roughly 30 entries, 6 categories x 5 entries
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
for(let i = 0; i < 6; i++){
    pushListing(id++, "Venue", subtypesVenue[i % subtypesVenue.length], [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Chennai",
        "Goa",
        "Pune"
    ][i % 6]);
    pushListing(id++, "Decorator", subtypesDecorator[i % subtypesDecorator.length], [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Chennai",
        "Goa",
        "Pune"
    ][i % 6]);
    pushListing(id++, "Caterer", subtypesCaterer[i % subtypesCaterer.length], [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Chennai",
        "Goa",
        "Pune"
    ][i % 6]);
    pushListing(id++, "DJ", subtypesDJ[i % subtypesDJ.length], [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Chennai",
        "Goa",
        "Pune"
    ][i % 6]);
    pushListing(id++, "Photographer", subtypesPhotog[i % subtypesPhotog.length], [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Chennai",
        "Goa",
        "Pune"
    ][i % 6]);
}
// additional to reach ~30
for(let j = 0; j < 5; j++){
    pushListing(id++, "Venue", subtypesVenue[j % subtypesVenue.length], [
        "Mumbai",
        "Delhi",
        "Bengaluru",
        "Chennai",
        "Goa"
    ][j % 5]);
}
const __TURBOPACK__default__export__ = sample;
}),
"[project]/alt/src/app/top-rated/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopRated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$data$2f$sampleListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/data/sampleListings.ts [app-rsc] (ecmascript)");
;
;
function TopRated() {
    const sorted = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$data$2f$sampleListings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    ].sort((a, b)=>b.average_rating - a.average_rating);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-4",
                children: "⭐ Top Rated Venues"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/top-rated/page.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: sorted.map((venue)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#07102a] p-4 rounded-xl border border-zinc-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: venue.name
                            }, void 0, false, {
                                fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                lineNumber: 13,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-yellow-400",
                                children: [
                                    "⭐ ",
                                    venue.average_rating.toFixed(1)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400",
                                children: [
                                    venue.review_count,
                                    " reviews"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alt/src/app/top-rated/page.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this)
                        ]
                    }, venue.id, true, {
                        fileName: "[project]/alt/src/app/top-rated/page.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/alt/src/app/top-rated/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/alt/src/app/top-rated/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/alt/src/app/top-rated/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/alt/src/app/top-rated/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__69081cab._.js.map