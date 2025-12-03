(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/alt/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const letterVariants = {
    hiddenLeft: {
        opacity: 0,
        x: -120
    },
    hiddenBottom: {
        opacity: 0,
        y: 120
    },
    hiddenRight: {
        opacity: 0,
        x: 120
    },
    visible: (i)=>({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                delay: 0.2 + i * 0.15,
                duration: 0.7,
                ease: [
                    0.23,
                    1,
                    0.32,
                    1
                ]
            }
        })
};
function HomePage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "7678c6c5916afe4b34c70f5c2d140ce492e523b2ed5ad17341d8d2bc7c6cc60c") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7678c6c5916afe4b34c70f5c2d140ce492e523b2ed5ad17341d8d2bc7c6cc60c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4 md:gap-6 items-end justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    custom: 0,
                    initial: "hiddenLeft",
                    animate: "visible",
                    variants: letterVariants,
                    className: "text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-[0_0_35px_rgba(56,189,248,0.9)]",
                    children: "A"
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 40,
                    columnNumber: 72
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    custom: 1,
                    initial: "hiddenBottom",
                    animate: "visible",
                    variants: letterVariants,
                    className: "text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-[0_0_35px_rgba(52,211,153,0.9)]",
                    children: "L"
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 40,
                    columnNumber: 280
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    custom: 2,
                    initial: "hiddenRight",
                    animate: "visible",
                    variants: letterVariants,
                    className: "text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-[0_0_35px_rgba(251,191,36,0.9)]",
                    children: "T"
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 40,
                    columnNumber: 490
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mb-6 md:mb-8",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-70",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-40 h-40 md:w-60 md:h-60 bg-[radial-gradient(circle,rgba(59,130,246,0.7)_0%,transparent_60%)] mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/alt/src/app/page.tsx",
                        lineNumber: 47,
                        columnNumber: 133
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            opacity: 0,
            y: 20
        };
        t3 = {
            opacity: 0.95,
            y: 0
        };
        t4 = {
            delay: 0.6,
            duration: 0.7
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            initial: t2,
            animate: t3,
            transition: t4,
            className: "text-lg md:text-2xl text-zinc-200 mb-3 md:mb-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block mb-1 text-zinc-300",
                    children: "The future of booking."
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 78,
                    columnNumber: 121
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block font-semibold text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-emerald-300 to-amber-300",
                    children: "Book your experience."
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 78,
                    columnNumber: 193
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    let t8;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            opacity: 0,
            scale: 0.9
        };
        t7 = {
            opacity: 1,
            scale: 1
        };
        t8 = {
            delay: 0.9,
            duration: 0.5
        };
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
    } else {
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/search",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                initial: t6,
                animate: t7,
                transition: t8,
                className: "mt-4 inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-linear-to-r from-sky-500 via-emerald-400 to-amber-300 text-black font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition",
                children: [
                    "Book your experience ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/alt/src/app/page.tsx",
                        lineNumber: 110,
                        columnNumber: 338
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/page.tsx",
                lineNumber: 110,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 110,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 max-w-xl text-xs md:text-sm text-zinc-400",
            children: "Discover venues, decorators, caterers, DJs and photographers on one seamless platform."
        }, void 0, false, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Scroll to see what’s new"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-16 flex flex-col items-center text-center",
            children: [
                t1,
                t5,
                t9,
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 flex flex-col items-center gap-2 text-xs text-zinc-500",
                    children: [
                        t11,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px h-10 bg-linear-to-b from-zinc-500/60 to-transparent relative overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-x-0 top-0 h-6 bg-linear-to-b from-white/70 to-transparent",
                                animate: {
                                    y: [
                                        0,
                                        32
                                    ]
                                },
                                transition: {
                                    repeat: Infinity,
                                    duration: 1.4
                                }
                            }, void 0, false, {
                                fileName: "[project]/alt/src/app/page.tsx",
                                lineNumber: 127,
                                columnNumber: 314
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/alt/src/app/page.tsx",
                            lineNumber: 127,
                            columnNumber: 215
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 127,
                    columnNumber: 132
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl md:text-2xl font-semibold",
                            children: "Tailored for you"
                        }, void 0, false, {
                            fileName: "[project]/alt/src/app/page.tsx",
                            lineNumber: 139,
                            columnNumber: 105
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-zinc-400 mt-1",
                            children: "A quick snapshot of what's happening on ALT right now."
                        }, void 0, false, {
                            fileName: "[project]/alt/src/app/page.tsx",
                            lineNumber: 139,
                            columnNumber: 176
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 139,
                    columnNumber: 100
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-4 py-1.5 rounded-full border border-zinc-700 text-xs text-zinc-200 hover:border-zinc-400 hover:text-white transition",
                    children: "Refresh updates"
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 139,
                    columnNumber: 282
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs uppercase tracking-wide text-amber-300",
                    children: "For you"
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 146,
                    columnNumber: 82
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-zinc-100 mt-1",
                    children: "Weekends are filling up fast — lock in a venue now."
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 146,
                    columnNumber: 161
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs uppercase tracking-wide text-sky-300",
                    children: "Popular this week"
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 153,
                    columnNumber: 82
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-zinc-100 mt-1",
                    children: "Rooftop & poolside venues are trending now."
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 153,
                    columnNumber: 169
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex-1",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "border-t border-white/10 bg-black/40",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto px-4 py-10 md:py-14",
                        children: [
                            t13,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 md:grid-cols-3",
                                children: [
                                    t14,
                                    t15,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs uppercase tracking-wide text-emerald-300",
                                                children: "Host with ALT"
                                            }, void 0, false, {
                                                fileName: "[project]/alt/src/app/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 283
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-zinc-100 mt-1",
                                                children: "List once. Sync everywhere. Bookings made easy."
                                            }, void 0, false, {
                                                fileName: "[project]/alt/src/app/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 370
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/add-venue",
                                                className: "mt-2 inline-flex text-xs text-emerald-300 underline hover:text-emerald-200",
                                                children: "Add your venue →"
                                            }, void 0, false, {
                                                fileName: "[project]/alt/src/app/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 463
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/alt/src/app/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 212
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alt/src/app/page.tsx",
                                lineNumber: 160,
                                columnNumber: 159
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alt/src/app/page.tsx",
                        lineNumber: 160,
                        columnNumber: 99
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 160,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "© 2035 ALT. All rights reserved."
        }, void 0, false, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[radial-gradient(circle_at_top_left,#0b1027_0%,#050316_45%,black_100%)] text-white flex flex-col",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "border-t border-white/10 bg-black/80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-[11px] text-zinc-400",
                        children: [
                            t17,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-zinc-200",
                                        children: "Terms"
                                    }, void 0, false, {
                                        fileName: "[project]/alt/src/app/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 362
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-zinc-200",
                                        children: "Privacy"
                                    }, void 0, false, {
                                        fileName: "[project]/alt/src/app/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 416
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-zinc-200",
                                        children: "Contact"
                                    }, void 0, false, {
                                        fileName: "[project]/alt/src/app/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 472
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/alt/src/app/page.tsx",
                                lineNumber: 174,
                                columnNumber: 334
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alt/src/app/page.tsx",
                        lineNumber: 174,
                        columnNumber: 203
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/page.tsx",
                    lineNumber: 174,
                    columnNumber: 146
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/page.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    return t18;
}
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=alt_src_app_page_tsx_9bb60a29._.js.map