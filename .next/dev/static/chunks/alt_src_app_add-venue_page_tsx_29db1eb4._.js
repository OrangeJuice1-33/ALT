(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/alt/src/app/add-venue/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddVenuePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SERVICES = [
    {
        name: "Venue",
        subtypes: [
            "Farmhouse",
            "Villa",
            "Banquet Hall",
            "Penthouse",
            "Studio",
            "Apartment",
            "Outdoor Lawn"
        ]
    },
    {
        name: "Decorators",
        subtypes: [
            "Traditional",
            "Modern",
            "Minimal",
            "Royal Theme",
            "Floral Theme",
            "Bollywood Theme"
        ]
    },
    {
        name: "Caterers",
        subtypes: [
            "Indian",
            "Italian",
            "Asian",
            "Mexican",
            "Continental",
            "Fusion",
            "BBQ"
        ]
    },
    {
        name: "DJs",
        subtypes: [
            "All-Mix",
            "House Music",
            "Sufi",
            "Hip-Hop",
            "Pop",
            "EDM",
            "Bollywood"
        ]
    },
    {
        name: "Photographers",
        subtypes: [
            "Wedding",
            "Portfolio",
            "Candid",
            "Studio",
            "Documentary",
            "Lifestyle"
        ]
    }
];
function AddVenuePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "7418bb8cade5401a622bf14d8cb3e8e5c3672d6ed8fe80c1835bdecf48296e06") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7418bb8cade5401a622bf14d8cb3e8e5c3672d6ed8fe80c1835bdecf48296e06";
    }
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold mb-10",
            children: "Add Your Venue / Service"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/page.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-lg",
            children: "Type of Service"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/page.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            list: "service-list",
            placeholder: "Search or select",
            className: "w-full bg-zinc-900 border border-zinc-700 rounded-md p-3",
            onChange: {
                "AddVenuePage[<input>.onChange]": (e)=>setSelected(e.target.value)
            }["AddVenuePage[<input>.onChange]"]
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/page.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-xl space-y-4",
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                    id: "service-list",
                    children: SERVICES.map(_AddVenuePageSERVICESMap)
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/add-venue/page.tsx",
                    lineNumber: 55,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/page.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== selected) {
        t4 = selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-xl space-y-3 mt-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block text-lg",
                    children: "Service Subtype"
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/add-venue/page.tsx",
                    lineNumber: 62,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "w-full bg-zinc-900 border border-zinc-700 rounded-md p-3",
                    children: SERVICES.find({
                        "AddVenuePage[SERVICES.find()]": (s_0)=>s_0.name === selected
                    }["AddVenuePage[SERVICES.find()]"])?.subtypes.map(_AddVenuePageAnonymous)
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/add-venue/page.tsx",
                    lineNumber: 62,
                    columnNumber: 126
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/page.tsx",
            lineNumber: 62,
            columnNumber: 22
        }, this);
        $[5] = selected;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== selected) {
        t5 = selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold",
            onClick: _AddVenuePageButtonOnClick,
            children: "Continue →"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/page.tsx",
            lineNumber: 72,
            columnNumber: 22
        }, this);
        $[7] = selected;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t4 || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen px-6 py-24 bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white flex flex-col items-center",
            children: [
                t0,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/page.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
}
_s(AddVenuePage, "PVKrpNrydW4BpnDEq9OT3cVmCk4=");
_c = AddVenuePage;
function _AddVenuePageButtonOnClick() {
    return window.location.href = "/add-venue/details";
}
function _AddVenuePageAnonymous(sub) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        children: sub
    }, sub, false, {
        fileName: "[project]/alt/src/app/add-venue/page.tsx",
        lineNumber: 93,
        columnNumber: 10
    }, this);
}
function _AddVenuePageSERVICESMap(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: s.name
    }, s.name, false, {
        fileName: "[project]/alt/src/app/add-venue/page.tsx",
        lineNumber: 96,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "AddVenuePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=alt_src_app_add-venue_page_tsx_29db1eb4._.js.map