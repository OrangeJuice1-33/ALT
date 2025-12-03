(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/alt/src/components/magic/Spotlight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spotlight",
    ()=>Spotlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Spotlight(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "52d6edb9e01a46e3388a2c0b23e00c841a18e781467783d75fc2a269bfd68870") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "52d6edb9e01a46e3388a2c0b23e00c841a18e781467783d75fc2a269bfd68870";
    }
    const { className } = t0;
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            0,
            300
        ];
        t2 = [
            0,
            1
        ];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(x, t1, t2);
    let t3;
    let t4;
    if ($[3] !== x || $[4] !== y) {
        t3 = ({
            "Spotlight[useEffect()]": ()=>{
                const move = {
                    "Spotlight[useEffect() > move]": (e)=>{
                        x.set(e.clientX);
                        y.set(e.clientY);
                    }
                }["Spotlight[useEffect() > move]"];
                window.addEventListener("mousemove", move);
                return ()=>window.removeEventListener("mousemove", move);
            }
        })["Spotlight[useEffect()]"];
        t4 = [
            x,
            y
        ];
        $[3] = x;
        $[4] = y;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    const t5 = `pointer-events-none fixed inset-0 z-10 ${className}`;
    let t6;
    if ($[7] !== x) {
        t6 = x.get();
        $[7] = x;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== y) {
        t7 = y.get();
        $[9] = y;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    const t8 = `radial-gradient(600px circle at ${t6}px ${t7}px, rgba(255,255,255,0.08), transparent)`;
    let t9;
    if ($[11] !== opacity || $[12] !== t8) {
        t9 = {
            background: t8,
            opacity
        };
        $[11] = opacity;
        $[12] = t8;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t5 || $[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            "aria-hidden": "true",
            className: t5,
            style: t9
        }, void 0, false, {
            fileName: "[project]/alt/src/components/magic/Spotlight.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, this);
        $[14] = t5;
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    return t10;
}
_s(Spotlight, "g1SyUz4MyL/URTW2THOaC+8+9JU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Spotlight;
var _c;
__turbopack_context__.k.register(_c, "Spotlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alt/src/components/magic/AuroraBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuroraBackground",
    ()=>AuroraBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function AuroraBackground(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "2844620e03289fc1dd413106cdabfcd7859e3ce7e7a109885903e3dae9768bd4") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2844620e03289fc1dd413106cdabfcd7859e3ce7e7a109885903e3dae9768bd4";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `absolute inset-0 pointer-events-none overflow-hidden ${className}`;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            "aria-hidden": true,
            className: "absolute -top-40 -left-40 w-[900px] h-[600px] rounded-full blur-3xl opacity-40",
            style: {
                background: "radial-gradient(closest-side, rgba(99,102,241,0.30), rgba(99,102,241,0.06) 40%, transparent 60%)"
            },
            animate: {
                x: [
                    0,
                    60,
                    0
                ],
                y: [
                    0,
                    -30,
                    0
                ],
                opacity: [
                    0.35,
                    0.5,
                    0.35
                ]
            },
            transition: {
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }, void 0, false, {
            fileName: "[project]/alt/src/components/magic/AuroraBackground.tsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    let t4;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            "aria-hidden": true,
            className: "absolute -bottom-44 -right-56 w-[700px] h-[500px] rounded-full blur-3xl opacity-30",
            style: {
                background: "radial-gradient(closest-side, rgba(34,197,94,0.20), rgba(34,197,94,0.04) 40%, transparent 60%)"
            },
            animate: {
                x: [
                    0,
                    -50,
                    0
                ],
                y: [
                    0,
                    30,
                    0
                ],
                opacity: [
                    0.3,
                    0.45,
                    0.3
                ]
            },
            transition: {
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
            }
        }, void 0, false, {
            fileName: "[project]/alt/src/components/magic/AuroraBackground.tsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    let t5;
    if ($[3] !== t2) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/components/magic/AuroraBackground.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t5;
    } else {
        t5 = $[4];
    }
    return t5;
}
_c = AuroraBackground;
var _c;
__turbopack_context__.k.register(_c, "AuroraBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alt/src/components/magic/BentoGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BentoGrid",
    ()=>BentoGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06
        }
    }
};
const item = {
    hidden: {
        opacity: 0,
        y: 18,
        scale: 0.98
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.45,
            ease: [
                0.2,
                0.8,
                0.2,
                1
            ]
        }
    }
};
function BentoGrid(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "46dfad432f9dfa15a59722390243b6585cab8e25875ce886cb662ce0031b6fc1") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "46dfad432f9dfa15a59722390243b6585cab8e25875ce886cb662ce0031b6fc1";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            once: true,
            amount: 0.2
        };
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== className) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", className);
        $[2] = className;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== children) {
        t4 = __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, _BentoGridReactChildrenMap);
        $[4] = children;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t3 || $[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: "hidden",
            whileInView: "show",
            viewport: t2,
            variants: container,
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/alt/src/components/magic/BentoGrid.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
}
_c = BentoGrid;
function _BentoGridReactChildrenMap(child, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: item,
        className: "w-full",
        children: child
    }, i, false, {
        fileName: "[project]/alt/src/components/magic/BentoGrid.tsx",
        lineNumber: 82,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "BentoGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alt/src/components/magic/HoverGlowCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoverGlowCard",
    ()=>HoverGlowCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function HoverGlowCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "139d8304cf71772002380dbd0e593dad78d164ed14c130320d38fbb84d0c8896") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "139d8304cf71772002380dbd0e593dad78d164ed14c130320d38fbb84d0c8896";
    }
    const { children, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            scale: 1.02
        };
        t3 = {
            type: "spring",
            stiffness: 260,
            damping: 22
        };
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    let t4;
    if ($[3] !== className) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-xl p-6 bg-zinc-900 border border-zinc-800 overflow-hidden", className);
        $[3] = className;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none",
            style: {
                background: "linear-gradient(120deg, rgba(99,102,241,0.06), rgba(34,197,94,0.04) 45%, transparent 60%)",
                mixBlendMode: "screen"
            }
        }, void 0, false, {
            fileName: "[project]/alt/src/components/magic/HoverGlowCard.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== children) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10",
            children: children
        }, void 0, false, {
            fileName: "[project]/alt/src/components/magic/HoverGlowCard.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t4 || $[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t2,
            transition: t3,
            className: t4,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/components/magic/HoverGlowCard.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    return t7;
}
_c = HoverGlowCard;
var _c;
__turbopack_context__.k.register(_c, "HoverGlowCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alt/src/components/magic/TextReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextReveal",
    ()=>TextReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function TextReveal(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "14bcea6354b8711a8d0edd6cc6f1819b80da0874ba0b7d0b43210a471aa45a48") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "14bcea6354b8711a8d0edd6cc6f1819b80da0874ba0b7d0b43210a471aa45a48";
    }
    const { text, className } = t0;
    let T0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== className || $[2] !== text) {
        const words = text.split(" ");
        t6 = `overflow-hidden ${className}`;
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
        if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = {
                y: "100%"
            };
            t2 = {
                y: "0%"
            };
            $[10] = t1;
            $[11] = t2;
        } else {
            t1 = $[10];
            t2 = $[11];
        }
        if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = {
                duration: 0.8,
                ease: [
                    0.25,
                    1,
                    0.5,
                    1
                ]
            };
            $[12] = t3;
        } else {
            t3 = $[12];
        }
        t4 = "inline-block";
        t5 = words.map(_TextRevealWordsMap);
        $[1] = className;
        $[2] = text;
        $[3] = T0;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
    } else {
        T0 = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
    }
    let t7;
    if ($[13] !== T0 || $[14] !== t1 || $[15] !== t2 || $[16] !== t3 || $[17] !== t4 || $[18] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            initial: t1,
            animate: t2,
            transition: t3,
            className: t4,
            children: t5
        }, void 0, false, {
            fileName: "[project]/alt/src/components/magic/TextReveal.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[13] = T0;
        $[14] = t1;
        $[15] = t2;
        $[16] = t3;
        $[17] = t4;
        $[18] = t5;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t6 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/alt/src/components/magic/TextReveal.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[20] = t6;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    return t8;
}
_c = TextReveal;
function _TextRevealWordsMap(word, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "mr-2 inline-block",
        children: word
    }, i, false, {
        fileName: "[project]/alt/src/components/magic/TextReveal.tsx",
        lineNumber: 95,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TextReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alt/src/components/magic/FloatingElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingElement",
    ()=>FloatingElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function FloatingElement(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "6123de1eae1c99955304a750b9462e269b17bbb4365b99db6c78896ebf6fbe41") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6123de1eae1c99955304a750b9462e269b17bbb4365b99db6c78896ebf6fbe41";
    }
    const { children, className: t1, amplitude: t2, duration: t3 } = t0;
    const className = t1 === undefined ? "" : t1;
    const amplitude = t2 === undefined ? 8 : t2;
    const duration = t3 === undefined ? 6 : t3;
    const t4 = -amplitude;
    let t5;
    if ($[1] !== amplitude || $[2] !== t4) {
        t5 = {
            y: [
                0,
                t4,
                0,
                amplitude,
                0
            ]
        };
        $[1] = amplitude;
        $[2] = t4;
        $[3] = t5;
    } else {
        t5 = $[3];
    }
    let t6;
    if ($[4] !== duration) {
        t6 = {
            duration,
            repeat: Infinity,
            ease: "easeInOut"
        };
        $[4] = duration;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    if ($[6] !== children || $[7] !== className || $[8] !== t5 || $[9] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            "aria-hidden": true,
            className: className,
            animate: t5,
            transition: t6,
            children: children
        }, void 0, false, {
            fileName: "[project]/alt/src/components/magic/FloatingElement.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[6] = children;
        $[7] = className;
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    return t7;
}
_c = FloatingElement;
var _c;
__turbopack_context__.k.register(_c, "FloatingElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alt/src/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$Spotlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/components/magic/Spotlight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$AuroraBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/components/magic/AuroraBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$BentoGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/components/magic/BentoGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$HoverGlowCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/components/magic/HoverGlowCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$TextReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/components/magic/TextReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$FloatingElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/components/magic/FloatingElement.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function DashboardPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "486f26e8fee0d453e33c5f33b1d698d2d488b677ff36a5f507873047906879d8") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "486f26e8fee0d453e33c5f33b1d698d2d488b677ff36a5f507873047906879d8";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$AuroraBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuroraBackground"], {}, void 0, false, {
            fileName: "[project]/alt/src/app/dashboard/page.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$Spotlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spotlight"], {}, void 0, false, {
            fileName: "[project]/alt/src/app/dashboard/page.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$TextReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextReveal"], {
            text: "Welcome to ALT Dashboard",
            className: "text-4xl font-bold mb-6"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/dashboard/page.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-[600px] overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_top_left,_#0a0f24_0%,_#000814_50%,_#000000_100%)] p-10",
            children: [
                t0,
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 max-w-4xl mx-auto",
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$BentoGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BentoGrid"], {
                            className: "mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$HoverGlowCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverGlowCard"], {
                                    children: "Training Stats"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/dashboard/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 253
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$HoverGlowCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverGlowCard"], {
                                    children: "Performance"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/dashboard/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 298
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$HoverGlowCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverGlowCard"], {
                                    children: "Attendance"
                                }, void 0, false, {
                                    fileName: "[project]/alt/src/app/dashboard/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 340
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/alt/src/app/dashboard/page.tsx",
                            lineNumber: 38,
                            columnNumber: 224
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/dashboard/page.tsx",
                    lineNumber: 38,
                    columnNumber: 171
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$components$2f$magic$2f$FloatingElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingElement"], {
                    className: "absolute -right-10 top-24 w-32 h-32 rounded-full bg-zinc-800/50 blur-xl"
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/dashboard/page.tsx",
                    lineNumber: 38,
                    columnNumber: 399
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/dashboard/page.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=alt_src_3e96c6f1._.js.map