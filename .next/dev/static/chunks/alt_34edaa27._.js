(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/alt/src/app/add-venue/step-6-booking/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step6Booking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'date-fns'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function dateToISO(d) {
    return d.toISOString().slice(0, 10);
}
function Step6Booking() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(204);
    if ($[0] !== "16ed15079fcf579f7441fabd3ed671b2e50e09c78e2313518def8d314a95048d") {
        for(let $i = 0; $i < 204; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "16ed15079fcf579f7441fabd3ed671b2e50e09c78e2313518def8d314a95048d";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== params) {
        t0 = params.get("id");
        $[1] = params;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const listingId = t0;
    const service = params.get("service");
    const today = new Date();
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(dateToISO(today));
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(dateToISO(addDays(today, 1)));
    const [excludeMode, setExcludeMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const [excludedDates, setExcludedDates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const defaultUnit = service === "venue" ? "night" : "gig";
    const [unit, setUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultUnit);
    const [pricePerUnit, setPricePerUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5000);
    const [priceSlider, setPriceSlider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(pricePerUnit);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const [discounts, setDiscounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[5] !== endDate || $[6] !== startDate) {
        bb0: {
            const s = new Date(startDate);
            const e = new Date(endDate);
            if (s > e) {
                let t4;
                if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
                    t4 = [];
                    $[8] = t4;
                } else {
                    t4 = $[8];
                }
                t3 = t4;
                break bb0;
            }
            t3 = eachDayOfInterval({
                start: s,
                end: e
            }).map(_Step6BookingAnonymous);
        }
        $[5] = endDate;
        $[6] = startDate;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const dateRangeDays = t3;
    const effectiveUnits = Math.max(0, dateRangeDays.length - excludedDates.length);
    let t4;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = function toggleExcluded(dateISO) {
            setExcludedDates({
                "Step6Booking[toggleExcluded > setExcludedDates()]": (prev)=>prev.some({
                        "Step6Booking[toggleExcluded > setExcludedDates() > prev.some()]": (d_1)=>d_1 === dateISO
                    }["Step6Booking[toggleExcluded > setExcludedDates() > prev.some()]"]) ? prev.filter({
                        "Step6Booking[toggleExcluded > setExcludedDates() > prev.filter()]": (d_0)=>d_0 !== dateISO
                    }["Step6Booking[toggleExcluded > setExcludedDates() > prev.filter()]"]) : [
                        ...prev,
                        dateISO
                    ]
            }["Step6Booking[toggleExcluded > setExcludedDates()]"]);
        };
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const toggleExcluded = t4;
    const [discUnits, setDiscUnits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(3);
    const [discPercent, setDiscPercent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    let t5;
    if ($[10] !== discPercent || $[11] !== discUnits) {
        t5 = function addDiscount() {
            setDiscounts({
                "Step6Booking[addDiscount > setDiscounts()]": (prev_0)=>[
                        ...prev_0,
                        {
                            min_units: discUnits,
                            percent: discPercent
                        }
                    ]
            }["Step6Booking[addDiscount > setDiscounts()]"]);
        };
        $[10] = discPercent;
        $[11] = discUnits;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const addDiscount = t5;
    let t6;
    if ($[13] !== discounts || $[14] !== effectiveUnits) {
        t6 = function computeDiscount(subtotal) {
            const applicable = discounts.filter({
                "Step6Booking[computeDiscount > discounts.filter()]": (d_2)=>effectiveUnits >= d_2.min_units
            }["Step6Booking[computeDiscount > discounts.filter()]"]);
            if (applicable.length === 0) {
                return 0;
            }
            const top = Math.max(...applicable.map(_Step6BookingComputeDiscountApplicableMap));
            return subtotal * top / 100;
        };
        $[13] = discounts;
        $[14] = effectiveUnits;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    const computeDiscount = t6;
    let t7;
    if ($[16] !== discounts || $[17] !== endDate || $[18] !== excludedDates || $[19] !== listingId || $[20] !== pricePerUnit || $[21] !== router || $[22] !== startDate || $[23] !== unit) {
        t7 = function handleNext() {
            if (!startDate || !endDate) {
                return alert("Choose start and end date.");
            }
            if (new Date(startDate) > new Date(endDate)) {
                return alert("Start date must be before end date.");
            }
            const query = new URLSearchParams({
                id: listingId ?? "",
                unit,
                pricePerUnit: String(pricePerUnit),
                startDate,
                endDate,
                excludedDates: excludedDates.join(","),
                discounts: JSON.stringify(discounts)
            }).toString();
            router.push(`/add-venue/step-8-summary?${query}`);
        };
        $[16] = discounts;
        $[17] = endDate;
        $[18] = excludedDates;
        $[19] = listingId;
        $[20] = pricePerUnit;
        $[21] = router;
        $[22] = startDate;
        $[23] = unit;
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    const handleNext = t7;
    const subtotal_0 = effectiveUnits * pricePerUnit;
    let commission;
    let serviceFee;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    let t20;
    let t21;
    let t22;
    let t8;
    let t9;
    let total;
    if ($[25] !== addDiscount || $[26] !== computeDiscount || $[27] !== dateRangeDays || $[28] !== discPercent || $[29] !== discUnits || $[30] !== discounts || $[31] !== effectiveUnits || $[32] !== endDate || $[33] !== excludeMode || $[34] !== excludedDates || $[35] !== pricePerUnit || $[36] !== priceSlider || $[37] !== setStartDate || $[38] !== startDate || $[39] !== subtotal_0 || $[40] !== unit) {
        const discountAmount = computeDiscount(subtotal_0);
        const afterDiscount = subtotal_0 - discountAmount;
        const t23 = afterDiscount * 0.05;
        let t24;
        if ($[59] !== t23) {
            t24 = t23.toFixed(2);
            $[59] = t23;
            $[60] = t24;
        } else {
            t24 = $[60];
        }
        commission = +t24;
        const t25 = (afterDiscount + commission) * 0.01;
        let t26;
        if ($[61] !== t25) {
            t26 = t25.toFixed(2);
            $[61] = t25;
            $[62] = t26;
        } else {
            t26 = $[62];
        }
        serviceFee = +t26;
        const t27 = afterDiscount + commission + serviceFee;
        let t28;
        if ($[63] !== t27) {
            t28 = t27.toFixed(2);
            $[63] = t27;
            $[64] = t28;
        } else {
            t28 = $[64];
        }
        total = +t28;
        t22 = "min-h-screen p-6 bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] text-white";
        t15 = "max-w-4xl mx-auto bg-[#07102a]/80 p-6 rounded-xl border border-zinc-800";
        if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-4",
                children: "Booking & Availability"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 225,
                columnNumber: 13
            }, this);
            $[65] = t16;
        } else {
            t16 = $[65];
        }
        let t29;
        if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-zinc-300",
                children: "Start date"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 232,
                columnNumber: 13
            }, this);
            $[66] = t29;
        } else {
            t29 = $[66];
        }
        let t30;
        if ($[67] !== setStartDate) {
            t30 = ({
                "Step6Booking[<input>.onChange]": (e_0)=>setStartDate(e_0.target.value)
            })["Step6Booking[<input>.onChange]"];
            $[67] = setStartDate;
            $[68] = t30;
        } else {
            t30 = $[68];
        }
        let t31;
        if ($[69] !== startDate || $[70] !== t30) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block",
                children: [
                    t29,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: startDate,
                        onChange: t30,
                        className: "mt-2 p-2 rounded bg-zinc-900"
                    }, void 0, false, {
                        fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                        lineNumber: 249,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 249,
                columnNumber: 13
            }, this);
            $[69] = startDate;
            $[70] = t30;
            $[71] = t31;
        } else {
            t31 = $[71];
        }
        let t32;
        if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-zinc-300",
                children: "End date"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 258,
                columnNumber: 13
            }, this);
            $[72] = t32;
        } else {
            t32 = $[72];
        }
        let t33;
        if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
            t33 = ({
                "Step6Booking[<input>.onChange]": (e_1)=>setEndDate(e_1.target.value)
            })["Step6Booking[<input>.onChange]"];
            $[73] = t33;
        } else {
            t33 = $[73];
        }
        let t34;
        if ($[74] !== endDate) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block",
                children: [
                    t32,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: endDate,
                        onChange: t33,
                        className: "mt-2 p-2 rounded bg-zinc-900"
                    }, void 0, false, {
                        fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                        lineNumber: 274,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 274,
                columnNumber: 13
            }, this);
            $[74] = endDate;
            $[75] = t34;
        } else {
            t34 = $[75];
        }
        if ($[76] !== t31 || $[77] !== t34) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                children: [
                    t31,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 281,
                columnNumber: 13
            }, this);
            $[76] = t31;
            $[77] = t34;
            $[78] = t17;
        } else {
            t17 = $[78];
        }
        let t35;
        if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
            t35 = ({
                "Step6Booking[<input>.onChange]": (e_2)=>setExcludeMode(e_2.target.checked)
            })["Step6Booking[<input>.onChange]"];
            $[79] = t35;
        } else {
            t35 = $[79];
        }
        let t36;
        if ($[80] !== excludeMode) {
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                checked: excludeMode,
                onChange: t35
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 299,
                columnNumber: 13
            }, this);
            $[80] = excludeMode;
            $[81] = t36;
        } else {
            t36 = $[81];
        }
        let t37;
        if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-zinc-300",
                children: "Exclude specific dates within range"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 307,
                columnNumber: 13
            }, this);
            $[82] = t37;
        } else {
            t37 = $[82];
        }
        if ($[83] !== t36) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "inline-flex items-center gap-2",
                    children: [
                        t36,
                        t37
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                    lineNumber: 313,
                    columnNumber: 35
                }, this)
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 313,
                columnNumber: 13
            }, this);
            $[83] = t36;
            $[84] = t18;
        } else {
            t18 = $[84];
        }
        let t38;
        if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-zinc-300 mb-2",
                children: "Selected dates"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 321,
                columnNumber: 13
            }, this);
            $[85] = t38;
        } else {
            t38 = $[85];
        }
        let t39;
        if ($[86] !== dateRangeDays || $[87] !== excludeMode || $[88] !== excludedDates) {
            let t40;
            if ($[90] !== excludeMode || $[91] !== excludedDates) {
                t40 = ({
                    "Step6Booking[dateRangeDays.map()]": (d_4)=>{
                        const isExcluded = excludedDates.includes(d_4);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: !excludeMode,
                            onClick: {
                                "Step6Booking[dateRangeDays.map() > <button>.onClick]": ()=>toggleExcluded(d_4)
                            }["Step6Booking[dateRangeDays.map() > <button>.onClick]"],
                            className: `px-3 py-1 rounded-md ${isExcluded ? "bg-red-600/80" : "bg-blue-600/80"}`,
                            children: format(new Date(d_4), "dd MMM")
                        }, d_4, false, {
                            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                            lineNumber: 333,
                            columnNumber: 20
                        }, this);
                    }
                })["Step6Booking[dateRangeDays.map()]"];
                $[90] = excludeMode;
                $[91] = excludedDates;
                $[92] = t40;
            } else {
                t40 = $[92];
            }
            t39 = dateRangeDays.map(t40);
            $[86] = dateRangeDays;
            $[87] = excludeMode;
            $[88] = excludedDates;
            $[89] = t39;
        } else {
            t39 = $[89];
        }
        if ($[93] !== t39) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    t38,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: t39
                    }, void 0, false, {
                        fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                        lineNumber: 353,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 353,
                columnNumber: 13
            }, this);
            $[93] = t39;
            $[94] = t19;
        } else {
            t19 = $[94];
        }
        let t40;
        if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
            t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm text-zinc-300",
                children: "Unit"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 361,
                columnNumber: 13
            }, this);
            $[95] = t40;
        } else {
            t40 = $[95];
        }
        let t41;
        if ($[96] === Symbol.for("react.memo_cache_sentinel")) {
            t41 = ({
                "Step6Booking[<select>.onChange]": (e_3)=>setUnit(e_3.target.value)
            })["Step6Booking[<select>.onChange]"];
            $[96] = t41;
        } else {
            t41 = $[96];
        }
        let t42;
        let t43;
        let t44;
        if ($[97] === Symbol.for("react.memo_cache_sentinel")) {
            t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "night",
                children: "Per night"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 379,
                columnNumber: 13
            }, this);
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "hour",
                children: "Per hour"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 380,
                columnNumber: 13
            }, this);
            t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "gig",
                children: "Per gig"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 381,
                columnNumber: 13
            }, this);
            $[97] = t42;
            $[98] = t43;
            $[99] = t44;
        } else {
            t42 = $[97];
            t43 = $[98];
            t44 = $[99];
        }
        let t45;
        let t46;
        if ($[100] !== unit) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t40,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: unit,
                        onChange: t41,
                        className: "mt-2 p-2 rounded bg-zinc-900",
                        children: [
                            t42,
                            t43,
                            t44
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                        lineNumber: 393,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 393,
                columnNumber: 13
            }, this);
            t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm text-zinc-300",
                children: [
                    "Price per ",
                    unit
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 394,
                columnNumber: 13
            }, this);
            $[100] = unit;
            $[101] = t45;
            $[102] = t46;
        } else {
            t45 = $[101];
            t46 = $[102];
        }
        let t47;
        if ($[103] === Symbol.for("react.memo_cache_sentinel")) {
            t47 = ({
                "Step6Booking[<input>.onChange]": (e_4)=>{
                    setPricePerUnit(Number(e_4.target.value));
                    setPriceSlider(Number(e_4.target.value));
                }
            })["Step6Booking[<input>.onChange]"];
            $[103] = t47;
        } else {
            t47 = $[103];
        }
        let t48;
        if ($[104] !== pricePerUnit) {
            t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                value: pricePerUnit,
                onChange: t47,
                className: "mt-2 p-2 rounded bg-zinc-900"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 416,
                columnNumber: 13
            }, this);
            $[104] = pricePerUnit;
            $[105] = t48;
        } else {
            t48 = $[105];
        }
        let t49;
        if ($[106] !== t46 || $[107] !== t48) {
            t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t46,
                    t48
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 424,
                columnNumber: 13
            }, this);
            $[106] = t46;
            $[107] = t48;
            $[108] = t49;
        } else {
            t49 = $[108];
        }
        let t50;
        if ($[109] === Symbol.for("react.memo_cache_sentinel")) {
            t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm text-zinc-300",
                children: "Adjust price"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 433,
                columnNumber: 13
            }, this);
            $[109] = t50;
        } else {
            t50 = $[109];
        }
        let t51;
        if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
            t51 = ({
                "Step6Booking[<input>.onChange]": (e_5)=>{
                    setPriceSlider(Number(e_5.target.value));
                    setPricePerUnit(Number(e_5.target.value));
                }
            })["Step6Booking[<input>.onChange]"];
            $[110] = t51;
        } else {
            t51 = $[110];
        }
        let t52;
        if ($[111] !== priceSlider) {
            t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: "0",
                max: "200000",
                value: priceSlider,
                onChange: t51,
                className: "mt-3 w-full"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 452,
                columnNumber: 13
            }, this);
            $[111] = priceSlider;
            $[112] = t52;
        } else {
            t52 = $[112];
        }
        let t53;
        if ($[113] !== pricePerUnit) {
            t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-zinc-400 mt-1",
                children: [
                    "₹",
                    pricePerUnit
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 460,
                columnNumber: 13
            }, this);
            $[113] = pricePerUnit;
            $[114] = t53;
        } else {
            t53 = $[114];
        }
        let t54;
        if ($[115] !== t52 || $[116] !== t53) {
            t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t50,
                    t52,
                    t53
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 468,
                columnNumber: 13
            }, this);
            $[115] = t52;
            $[116] = t53;
            $[117] = t54;
        } else {
            t54 = $[117];
        }
        if ($[118] !== t45 || $[119] !== t49 || $[120] !== t54) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 grid grid-cols-1 md:grid-cols-3 gap-4",
                children: [
                    t45,
                    t49,
                    t54
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 476,
                columnNumber: 13
            }, this);
            $[118] = t45;
            $[119] = t49;
            $[120] = t54;
            $[121] = t20;
        } else {
            t20 = $[121];
        }
        let t55;
        if ($[122] === Symbol.for("react.memo_cache_sentinel")) {
            t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold mb-2",
                children: "Discounts"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 486,
                columnNumber: 13
            }, this);
            $[122] = t55;
        } else {
            t55 = $[122];
        }
        let t56;
        if ($[123] === Symbol.for("react.memo_cache_sentinel")) {
            t56 = ({
                "Step6Booking[<input>.onChange]": (e_6)=>setDiscUnits(Number(e_6.target.value))
            })["Step6Booking[<input>.onChange]"];
            $[123] = t56;
        } else {
            t56 = $[123];
        }
        let t57;
        if ($[124] !== discUnits) {
            t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                value: discUnits,
                onChange: t56,
                className: "p-2 rounded bg-zinc-900"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 502,
                columnNumber: 13
            }, this);
            $[124] = discUnits;
            $[125] = t57;
        } else {
            t57 = $[125];
        }
        let t58;
        if ($[126] === Symbol.for("react.memo_cache_sentinel")) {
            t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-zinc-300",
                children: "units →"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 510,
                columnNumber: 13
            }, this);
            $[126] = t58;
        } else {
            t58 = $[126];
        }
        let t59;
        if ($[127] === Symbol.for("react.memo_cache_sentinel")) {
            t59 = ({
                "Step6Booking[<input>.onChange]": (e_7)=>setDiscPercent(Number(e_7.target.value))
            })["Step6Booking[<input>.onChange]"];
            $[127] = t59;
        } else {
            t59 = $[127];
        }
        let t60;
        if ($[128] !== discPercent) {
            t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                value: discPercent,
                onChange: t59,
                className: "p-2 rounded bg-zinc-900"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 526,
                columnNumber: 13
            }, this);
            $[128] = discPercent;
            $[129] = t60;
        } else {
            t60 = $[129];
        }
        let t61;
        if ($[130] === Symbol.for("react.memo_cache_sentinel")) {
            t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-zinc-300",
                children: "%"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 534,
                columnNumber: 13
            }, this);
            $[130] = t61;
        } else {
            t61 = $[130];
        }
        let t62;
        if ($[131] !== addDiscount) {
            t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: addDiscount,
                className: "ml-2 px-3 py-1 bg-green-600 rounded",
                children: "Add"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 541,
                columnNumber: 13
            }, this);
            $[131] = addDiscount;
            $[132] = t62;
        } else {
            t62 = $[132];
        }
        let t63;
        if ($[133] !== t57 || $[134] !== t60 || $[135] !== t62) {
            t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 items-center mb-2",
                children: [
                    t57,
                    t58,
                    t60,
                    t61,
                    t62
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 549,
                columnNumber: 13
            }, this);
            $[133] = t57;
            $[134] = t60;
            $[135] = t62;
            $[136] = t63;
        } else {
            t63 = $[136];
        }
        let t64;
        if ($[137] === Symbol.for("react.memo_cache_sentinel")) {
            t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                className: "text-zinc-400",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: "Min units"
                        }, void 0, false, {
                            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                            lineNumber: 559,
                            columnNumber: 50
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: "Discount %"
                        }, void 0, false, {
                            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                            lineNumber: 559,
                            columnNumber: 68
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                    lineNumber: 559,
                    columnNumber: 46
                }, this)
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 559,
                columnNumber: 13
            }, this);
            $[137] = t64;
        } else {
            t64 = $[137];
        }
        let t65;
        if ($[138] !== discounts) {
            t65 = discounts.map(_Step6BookingDiscountsMap);
            $[138] = discounts;
            $[139] = t65;
        } else {
            t65 = $[139];
        }
        let t66;
        if ($[140] !== t65) {
            t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-900 p-3 rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm",
                    children: [
                        t64,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: t65
                        }, void 0, false, {
                            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                            lineNumber: 574,
                            columnNumber: 93
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                    lineNumber: 574,
                    columnNumber: 54
                }, this)
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 574,
                columnNumber: 13
            }, this);
            $[140] = t65;
            $[141] = t66;
        } else {
            t66 = $[141];
        }
        if ($[142] !== t63 || $[143] !== t66) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    t55,
                    t63,
                    t66
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 581,
                columnNumber: 13
            }, this);
            $[142] = t63;
            $[143] = t66;
            $[144] = t21;
        } else {
            t21 = $[144];
        }
        t12 = "mb-6 bg-[#021028] p-4 rounded";
        let t67;
        if ($[145] === Symbol.for("react.memo_cache_sentinel")) {
            t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Units"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 591,
                columnNumber: 13
            }, this);
            $[145] = t67;
        } else {
            t67 = $[145];
        }
        if ($[146] !== effectiveUnits) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    t67,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: effectiveUnits
                    }, void 0, false, {
                        fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                        lineNumber: 597,
                        columnNumber: 56
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 597,
                columnNumber: 13
            }, this);
            $[146] = effectiveUnits;
            $[147] = t13;
        } else {
            t13 = $[147];
        }
        let t68;
        if ($[148] === Symbol.for("react.memo_cache_sentinel")) {
            t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Subtotal"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 605,
                columnNumber: 13
            }, this);
            $[148] = t68;
        } else {
            t68 = $[148];
        }
        let t69;
        if ($[149] !== subtotal_0) {
            t69 = subtotal_0.toFixed(2);
            $[149] = subtotal_0;
            $[150] = t69;
        } else {
            t69 = $[150];
        }
        if ($[151] !== t69) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between",
                children: [
                    t68,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "₹",
                            t69
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                        lineNumber: 619,
                        columnNumber: 56
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 619,
                columnNumber: 13
            }, this);
            $[151] = t69;
            $[152] = t14;
        } else {
            t14 = $[152];
        }
        t10 = "flex justify-between";
        if ($[153] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Discount"
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 627,
                columnNumber: 13
            }, this);
            $[153] = t11;
        } else {
            t11 = $[153];
        }
        t8 = "- \u20B9";
        t9 = discountAmount.toFixed(2);
        $[25] = addDiscount;
        $[26] = computeDiscount;
        $[27] = dateRangeDays;
        $[28] = discPercent;
        $[29] = discUnits;
        $[30] = discounts;
        $[31] = effectiveUnits;
        $[32] = endDate;
        $[33] = excludeMode;
        $[34] = excludedDates;
        $[35] = pricePerUnit;
        $[36] = priceSlider;
        $[37] = setStartDate;
        $[38] = startDate;
        $[39] = subtotal_0;
        $[40] = unit;
        $[41] = commission;
        $[42] = serviceFee;
        $[43] = t10;
        $[44] = t11;
        $[45] = t12;
        $[46] = t13;
        $[47] = t14;
        $[48] = t15;
        $[49] = t16;
        $[50] = t17;
        $[51] = t18;
        $[52] = t19;
        $[53] = t20;
        $[54] = t21;
        $[55] = t22;
        $[56] = t8;
        $[57] = t9;
        $[58] = total;
    } else {
        commission = $[41];
        serviceFee = $[42];
        t10 = $[43];
        t11 = $[44];
        t12 = $[45];
        t13 = $[46];
        t14 = $[47];
        t15 = $[48];
        t16 = $[49];
        t17 = $[50];
        t18 = $[51];
        t19 = $[52];
        t20 = $[53];
        t21 = $[54];
        t22 = $[55];
        t8 = $[56];
        t9 = $[57];
        total = $[58];
    }
    let t23;
    if ($[154] !== t8 || $[155] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 690,
            columnNumber: 11
        }, this);
        $[154] = t8;
        $[155] = t9;
        $[156] = t23;
    } else {
        t23 = $[156];
    }
    let t24;
    if ($[157] !== t10 || $[158] !== t11 || $[159] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 699,
            columnNumber: 11
        }, this);
        $[157] = t10;
        $[158] = t11;
        $[159] = t23;
        $[160] = t24;
    } else {
        t24 = $[160];
    }
    let t25;
    if ($[161] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Commission (5%)"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 709,
            columnNumber: 11
        }, this);
        $[161] = t25;
    } else {
        t25 = $[161];
    }
    let t26;
    if ($[162] !== commission) {
        t26 = commission.toFixed(2);
        $[162] = commission;
        $[163] = t26;
    } else {
        t26 = $[163];
    }
    let t27;
    if ($[164] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        "₹",
                        t26
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                    lineNumber: 724,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 724,
            columnNumber: 11
        }, this);
        $[164] = t26;
        $[165] = t27;
    } else {
        t27 = $[165];
    }
    let t28;
    if ($[166] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Service fee (1%)"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 732,
            columnNumber: 11
        }, this);
        $[166] = t28;
    } else {
        t28 = $[166];
    }
    let t29;
    if ($[167] !== serviceFee) {
        t29 = serviceFee.toFixed(2);
        $[167] = serviceFee;
        $[168] = t29;
    } else {
        t29 = $[168];
    }
    let t30;
    if ($[169] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        "₹",
                        t29
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                    lineNumber: 747,
                    columnNumber: 54
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 747,
            columnNumber: 11
        }, this);
        $[169] = t29;
        $[170] = t30;
    } else {
        t30 = $[170];
    }
    let t31;
    if ($[171] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Total"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 755,
            columnNumber: 11
        }, this);
        $[171] = t31;
    } else {
        t31 = $[171];
    }
    let t32;
    if ($[172] !== total) {
        t32 = total.toFixed(2);
        $[172] = total;
        $[173] = t32;
    } else {
        t32 = $[173];
    }
    let t33;
    if ($[174] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between font-bold text-lg",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        "₹",
                        t32
                    ]
                }, void 0, true, {
                    fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                    lineNumber: 770,
                    columnNumber: 72
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 770,
            columnNumber: 11
        }, this);
        $[174] = t32;
        $[175] = t33;
    } else {
        t33 = $[175];
    }
    let t34;
    if ($[176] !== t12 || $[177] !== t13 || $[178] !== t14 || $[179] !== t24 || $[180] !== t27 || $[181] !== t30 || $[182] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t13,
                t14,
                t24,
                t27,
                t30,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 778,
            columnNumber: 11
        }, this);
        $[176] = t12;
        $[177] = t13;
        $[178] = t14;
        $[179] = t24;
        $[180] = t27;
        $[181] = t30;
        $[182] = t33;
        $[183] = t34;
    } else {
        t34 = $[183];
    }
    let t35;
    if ($[184] !== handleNext) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "px-4 py-2 bg-blue-600 rounded-md",
            onClick: handleNext,
            children: "Next: Summary"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 792,
            columnNumber: 11
        }, this);
        $[184] = handleNext;
        $[185] = t35;
    } else {
        t35 = $[185];
    }
    let t36;
    if ($[186] !== router) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "px-4 py-2 bg-zinc-700 rounded-md",
            onClick: {
                "Step6Booking[<button>.onClick]": ()=>router.back()
            }["Step6Booking[<button>.onClick]"],
            children: "Back"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 800,
            columnNumber: 11
        }, this);
        $[186] = router;
        $[187] = t36;
    } else {
        t36 = $[187];
    }
    let t37;
    if ($[188] !== t35 || $[189] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-2",
            children: [
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 810,
            columnNumber: 11
        }, this);
        $[188] = t35;
        $[189] = t36;
        $[190] = t37;
    } else {
        t37 = $[190];
    }
    let t38;
    if ($[191] !== t15 || $[192] !== t16 || $[193] !== t17 || $[194] !== t18 || $[195] !== t19 || $[196] !== t20 || $[197] !== t21 || $[198] !== t34 || $[199] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t15,
            children: [
                t16,
                t17,
                t18,
                t19,
                t20,
                t21,
                t34,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 819,
            columnNumber: 11
        }, this);
        $[191] = t15;
        $[192] = t16;
        $[193] = t17;
        $[194] = t18;
        $[195] = t19;
        $[196] = t20;
        $[197] = t21;
        $[198] = t34;
        $[199] = t37;
        $[200] = t38;
    } else {
        t38 = $[200];
    }
    let t39;
    if ($[201] !== t22 || $[202] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t22,
            children: t38
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
            lineNumber: 835,
            columnNumber: 11
        }, this);
        $[201] = t22;
        $[202] = t38;
        $[203] = t39;
    } else {
        t39 = $[203];
    }
    return t39;
}
_s(Step6Booking, "zOOQoOHHNWkKZZlC3U17g0JSwCc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Step6Booking;
function _Step6BookingDiscountsMap(d_5, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: d_5.min_units
            }, void 0, false, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 845,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: [
                    d_5.percent,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
                lineNumber: 845,
                columnNumber: 46
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/alt/src/app/add-venue/step-6-booking/page.tsx",
        lineNumber: 845,
        columnNumber: 10
    }, this);
}
function _Step6BookingComputeDiscountApplicableMap(d_3) {
    return d_3.percent;
}
function _Step6BookingAnonymous(d) {
    return dateToISO(d);
}
var _c;
__turbopack_context__.k.register(_c, "Step6Booking");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alt/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/alt/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/alt/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/alt/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/alt/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=alt_34edaa27._.js.map