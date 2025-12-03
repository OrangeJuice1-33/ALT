(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/alt/src/data/sampleListings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alt/src/app/search/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/search/[id]/page.tsx
__turbopack_context__.s([
    "default",
    ()=>ListingDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$data$2f$sampleListings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/data/sampleListings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/date-fns/eachDayOfInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/alt/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ListingDetail({ params }) {
    _s();
    const id = params.id;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const listing = __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$data$2f$sampleListings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].find((s)=>s.id === id);
    if (!listing) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 text-white",
        children: "Listing not found"
    }, void 0, false, {
        fileName: "[project]/alt/src/app/search/[id]/page.tsx",
        lineNumber: 18,
        columnNumber: 24
    }, this);
    const [start, setStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [end, setEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [excluded, setExcluded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [discounts, setDiscounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [discountDays, setDiscountDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [discountPct, setDiscountPct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const nights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListingDetail.useMemo[nights]": ()=>{
            if (!start || !end) return 0;
            const s_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(start);
            const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(end);
            const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(e, s_0);
            return diff > 0 ? diff : 0;
        }
    }["ListingDetail.useMemo[nights]"], [
        start,
        end
    ]);
    const selectedDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListingDetail.useMemo[selectedDays]": ()=>{
            if (!start || !end) return [];
            const s_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(start);
            const e_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(end);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachDayOfInterval"])({
                start: s_1,
                end: e_0
            }).map({
                "ListingDetail.useMemo[selectedDays]": (d)=>d.toISOString().slice(0, 10)
            }["ListingDetail.useMemo[selectedDays]"]);
        }
    }["ListingDetail.useMemo[selectedDays]"], [
        start,
        end
    ]);
    // apply excludes
    const finalDays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListingDetail.useMemo[finalDays]": ()=>{
            if (!selectedDays.length) return [];
            return selectedDays.filter({
                "ListingDetail.useMemo[finalDays]": (d_0)=>!excluded.includes(d_0)
            }["ListingDetail.useMemo[finalDays]"]);
        }
    }["ListingDetail.useMemo[finalDays]"], [
        selectedDays,
        excluded
    ]);
    const subtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListingDetail.useMemo[subtotal]": ()=>{
            if (!finalDays.length) return 0;
            return finalDays.length * listing.pricePerNight;
        }
    }["ListingDetail.useMemo[subtotal]"], [
        finalDays,
        listing
    ]);
    const discountAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListingDetail.useMemo[discountAmount]": ()=>{
            if (!discounts.length || subtotal === 0) return 0;
            // apply simple rule: for any discount where days >= X, apply pct on subtotal
            let totalDisc = 0;
            discounts.forEach({
                "ListingDetail.useMemo[discountAmount]": (d_1)=>{
                    if (finalDays.length >= d_1.days) totalDisc += d_1.pct / 100 * subtotal;
                }
            }["ListingDetail.useMemo[discountAmount]"]);
            return Math.round(totalDisc);
        }
    }["ListingDetail.useMemo[discountAmount]"], [
        discounts,
        finalDays,
        subtotal
    ]);
    const commission = Math.round(0.05 * (subtotal - discountAmount)); // 5%
    const serviceFee = Math.round(0.01 * (subtotal - discountAmount)); // 1%
    const total = Math.max(0, subtotal - discountAmount + commission + serviceFee);
    function toggleExclude(day) {
        setExcluded((prev)=>prev.includes(day) ? prev.filter((x)=>x !== day) : [
                ...prev,
                day
            ]);
    }
    function addDiscount() {
        const days = parseInt(discountDays || "0", 10);
        const pct = parseFloat(discountPct || "0");
        if (!days || !pct) {
            alert("Enter valid days and percent");
            return;
        }
        setDiscounts((prev_0)=>[
                ...prev_0,
                {
                    days,
                    pct
                }
            ]);
        setDiscountDays("");
        setDiscountPct("");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-2 bg-[#07162f]/60 rounded-xl p-6 border border-zinc-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold",
                            children: listing.name
                        }, void 0, false, {
                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-zinc-400 mt-2",
                            children: [
                                listing.subtype,
                                " • ",
                                listing.city,
                                " • ",
                                listing.capacity,
                                " pax"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: listing.images[0],
                                alt: "",
                                className: "w-full h-64 object-cover rounded-md"
                            }, void 0, false, {
                                fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-300",
                                    children: listing.description
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold mb-2",
                                            children: "Features"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: listing.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-2 py-1 bg-zinc-800 rounded text-sm",
                                                    children: f
                                                }, f, false, {
                                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 44
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold mb-2",
                                            children: "Gallery"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: listing.images.map((im, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: im,
                                                    className: "w-full h-32 object-cover rounded",
                                                    alt: ""
                                                }, i, false, {
                                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 48
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#07162f]/60 rounded-xl p-6 border border-zinc-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-zinc-300 text-sm",
                                        children: "Price"
                                    }, void 0, false, {
                                        fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl font-bold",
                                        children: [
                                            "₹",
                                            listing.pricePerNight,
                                            " / night"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-zinc-300",
                                    children: "Start date"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: start,
                                    onChange: (e_1)=>setStart(e_1.target.value),
                                    className: "w-full mt-2 p-2 bg-zinc-900 rounded border border-zinc-700"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-zinc-300",
                                    children: "End date"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: end,
                                    onChange: (e_2)=>setEnd(e_2.target.value),
                                    className: "w-full mt-2 p-2 bg-zinc-900 rounded border border-zinc-700"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-zinc-300",
                                    children: "Exclude specific dates (click to toggle)"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 max-h-28 overflow-auto space-y-2",
                                    children: selectedDays.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-zinc-500 text-sm",
                                        children: "Pick start & end to manage excludes"
                                    }, void 0, false, {
                                        fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 44
                                    }, this) : selectedDays.map((d_2)=>{
                                        const disabled = excluded.includes(d_2);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between bg-zinc-900 p-2 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(d_2), "dd MMM yyyy")
                                                }, void 0, false, {
                                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleExclude(d_2),
                                                    className: `px-2 py-1 rounded ${disabled ? "bg-red-600" : "bg-emerald-600"}`,
                                                    children: disabled ? "Excluded (click to include)" : "Include/Exclude"
                                                }, void 0, false, {
                                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, d_2, true, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 22
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold",
                                    children: "Discounts (add custom)"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "days (e.g. 5)",
                                            value: discountDays,
                                            onChange: (e_3)=>setDiscountDays(e_3.target.value),
                                            className: "p-2 bg-zinc-900 rounded border border-zinc-700 w-1/3"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "% (e.g. 10)",
                                            value: discountPct,
                                            onChange: (e_4)=>setDiscountPct(e_4.target.value),
                                            className: "p-2 bg-zinc-900 rounded border border-zinc-700 w-1/3"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: addDiscount,
                                            className: "px-3 py-2 bg-blue-600 rounded",
                                            children: "Add"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 space-y-2",
                                    children: discounts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-zinc-500 text-sm",
                                        children: "No discounts added"
                                    }, void 0, false, {
                                        fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 41
                                    }, this) : discounts.map((d_3, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between bg-zinc-900 p-2 rounded",
                                            children: [
                                                d_3.days,
                                                " days → ",
                                                d_3.pct,
                                                "%"
                                            ]
                                        }, i_0, true, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 135
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 border-t border-zinc-800 pt-4 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-zinc-400",
                                            children: "Nights"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 51
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: finalDays.length
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 94
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-zinc-400",
                                            children: "Subtotal"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 51
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "₹",
                                                subtotal
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 96
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-zinc-400",
                                            children: "Discount"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 51
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "-₹",
                                                discountAmount
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 96
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-zinc-400",
                                            children: "Commission (5%)"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 51
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "₹",
                                                commission
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 162,
                                            columnNumber: 103
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-zinc-400",
                                            children: "Service fee (1%)"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 51
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "₹",
                                                serviceFee
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 104
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mt-2 font-bold text-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: "Total"
                                        }, void 0, false, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 74
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                "₹",
                                                total
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 90
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    disabled: finalDays.length === 0,
                                    className: "mt-4 w-full bg-emerald-600 py-2 rounded",
                                    children: "Proceed to Checkout"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/search/[id]/page.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/search/[id]/page.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/alt/src/app/search/[id]/page.tsx",
        lineNumber: 83,
        columnNumber: 10
    }, this);
}
_s(ListingDetail, "OxQSoBFfupZ5LjM+1A3i+D4ABRQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ListingDetail;
var _c;
__turbopack_context__.k.register(_c, "ListingDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=alt_src_7b4e67d7._.js.map