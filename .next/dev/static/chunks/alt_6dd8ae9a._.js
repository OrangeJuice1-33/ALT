(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/alt/src/app/add-venue/details/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Step2VenueDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Step2VenueDetails() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(63);
    if ($[0] !== "a3a7375e7bcd302fb150b858f33655d2647804830376de412fac1ffcf81df714") {
        for(let $i = 0; $i < 63; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a3a7375e7bcd302fb150b858f33655d2647804830376de412fac1ffcf81df714";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    let t0;
    if ($[1] !== params) {
        t0 = params.get("service");
        $[1] = params;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const selectedService = t0;
    let t1;
    if ($[3] !== params) {
        t1 = params.get("category");
        $[3] = params;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const selectedCategory = t1;
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [address1, setAddress1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [address2, setAddress2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [country, setCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [pincode, setPincode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [googlePin, setGooglePin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t2;
    if ($[5] !== address1 || $[6] !== address2 || $[7] !== city || $[8] !== country || $[9] !== googlePin || $[10] !== name || $[11] !== pincode || $[12] !== router || $[13] !== selectedCategory || $[14] !== selectedService || $[15] !== state) {
        t2 = function handleNext(e) {
            e.preventDefault();
            router.push("/add-venue/description?" + `service=${selectedService}` + `&category=${selectedCategory}` + `&name=${encodeURIComponent(name)}` + `&address1=${encodeURIComponent(address1)}` + `&address2=${encodeURIComponent(address2)}` + `&country=${encodeURIComponent(country)}` + `&state=${encodeURIComponent(state)}` + `&city=${encodeURIComponent(city)}` + `&pincode=${encodeURIComponent(pincode)}` + `&googlePin=${encodeURIComponent(googlePin)}`);
        };
        $[5] = address1;
        $[6] = address2;
        $[7] = city;
        $[8] = country;
        $[9] = googlePin;
        $[10] = name;
        $[11] = pincode;
        $[12] = router;
        $[13] = selectedCategory;
        $[14] = selectedService;
        $[15] = state;
        $[16] = t2;
    } else {
        t2 = $[16];
    }
    const handleNext = t2;
    let t3;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold mb-8 text-center",
            children: "Venue Details"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[17] = t3;
    } else {
        t3 = $[17];
    }
    let t4;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm mb-2 text-zinc-300",
            children: "Name of venue / service"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[18] = t4;
    } else {
        t4 = $[18];
    }
    let t5;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ({
            "Step2VenueDetails[<input>.onChange]": (e_0)=>setName(e_0.target.value)
        })["Step2VenueDetails[<input>.onChange]"];
        $[19] = t5;
    } else {
        t5 = $[19];
    }
    let t6;
    if ($[20] !== name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "w-full bg-zinc-900 rounded-md border border-zinc-700 p-3",
                    placeholder: "Ex: Club Alpha, Royal Decorators, Bombay Catering Co.",
                    value: name,
                    onChange: t5,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
                    lineNumber: 89,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[20] = name;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    let t7;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm mb-2 text-zinc-300",
            children: "Address Line 1"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    let t8;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "Step2VenueDetails[<input>.onChange]": (e_1)=>setAddress1(e_1.target.value)
        })["Step2VenueDetails[<input>.onChange]"];
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== address1) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "w-full bg-zinc-900 rounded-md border border-zinc-700 p-3",
                    placeholder: "Street / Building / Locality",
                    value: address1,
                    onChange: t8,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
                    lineNumber: 113,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[24] = address1;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm mb-2 text-zinc-300",
            children: "Address Line 2 (optional)"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "Step2VenueDetails[<input>.onChange]": (e_2)=>setAddress2(e_2.target.value)
        })["Step2VenueDetails[<input>.onChange]"];
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== address2) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "w-full bg-zinc-900 rounded-md border border-zinc-700 p-3",
                    placeholder: "Landmark / Area (optional)",
                    value: address2,
                    onChange: t11
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
                    lineNumber: 137,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[28] = address2;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm mb-2 text-zinc-300",
            children: "Country"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "Step2VenueDetails[<input>.onChange]": (e_3)=>setCountry(e_3.target.value)
        })["Step2VenueDetails[<input>.onChange]"];
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] !== country) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "w-full bg-zinc-900 rounded-md border border-zinc-700 p-3",
                    placeholder: "India",
                    value: country,
                    onChange: t14,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
                    lineNumber: 161,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[32] = country;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm mb-2 text-zinc-300",
            children: "State"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "Step2VenueDetails[<input>.onChange]": (e_4)=>setState(e_4.target.value)
        })["Step2VenueDetails[<input>.onChange]"];
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== state) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "w-full bg-zinc-900 rounded-md border border-zinc-700 p-3",
                    placeholder: "Ex: Maharashtra",
                    value: state,
                    onChange: t17,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
                    lineNumber: 185,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[36] = state;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm mb-2 text-zinc-300",
            children: "City"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[38] = t19;
    } else {
        t19 = $[38];
    }
    let t20;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = ({
            "Step2VenueDetails[<input>.onChange]": (e_5)=>setCity(e_5.target.value)
        })["Step2VenueDetails[<input>.onChange]"];
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    let t21;
    if ($[40] !== city) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "w-full bg-zinc-900 rounded-md border border-zinc-700 p-3",
                    placeholder: "Ex: Mumbai",
                    value: city,
                    onChange: t20,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
                    lineNumber: 209,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[40] = city;
        $[41] = t21;
    } else {
        t21 = $[41];
    }
    let t22;
    if ($[42] !== t18 || $[43] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[42] = t18;
        $[43] = t21;
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    let t23;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm mb-2 text-zinc-300",
            children: "Pincode"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 226,
            columnNumber: 11
        }, this);
        $[45] = t23;
    } else {
        t23 = $[45];
    }
    let t24;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = ({
            "Step2VenueDetails[<input>.onChange]": (e_6)=>setPincode(e_6.target.value)
        })["Step2VenueDetails[<input>.onChange]"];
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] !== pincode) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "w-full bg-zinc-900 rounded-md border border-zinc-700 p-3",
                    placeholder: "Ex: 400001",
                    value: pincode,
                    onChange: t24,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
                    lineNumber: 242,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[47] = pincode;
        $[48] = t25;
    } else {
        t25 = $[48];
    }
    let t26;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block text-sm mb-2 text-zinc-300",
            children: "Google Maps Pin URL (optional)"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[49] = t26;
    } else {
        t26 = $[49];
    }
    let t27;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = ({
            "Step2VenueDetails[<input>.onChange]": (e_7)=>setGooglePin(e_7.target.value)
        })["Step2VenueDetails[<input>.onChange]"];
        $[50] = t27;
    } else {
        t27 = $[50];
    }
    let t28;
    if ($[51] !== googlePin) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "w-full bg-zinc-900 rounded-md border border-zinc-700 p-3",
                    placeholder: "Paste Google Maps link if available",
                    value: googlePin,
                    onChange: t27
                }, void 0, false, {
                    fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
                    lineNumber: 266,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[51] = googlePin;
        $[52] = t28;
    } else {
        t28 = $[52];
    }
    let t29;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "mt-6 w-full bg-blue-600 hover:bg-blue-700 rounded-md p-3 text-lg font-semibold transition",
            children: "Next →"
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 274,
            columnNumber: 11
        }, this);
        $[53] = t29;
    } else {
        t29 = $[53];
    }
    let t30;
    if ($[54] !== handleNext || $[55] !== t12 || $[56] !== t15 || $[57] !== t22 || $[58] !== t25 || $[59] !== t28 || $[60] !== t6 || $[61] !== t9) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#07102a_0%,#03031a_60%)] p-6 text-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl bg-[#07102a]/80 border border-zinc-800 rounded-xl p-8 shadow-xl",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleNext,
                        className: "space-y-6",
                        children: [
                            t6,
                            t9,
                            t12,
                            t15,
                            t22,
                            t25,
                            t28,
                            t29
                        ]
                    }, void 0, true, {
                        fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
                        lineNumber: 281,
                        columnNumber: 255
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
                lineNumber: 281,
                columnNumber: 153
            }, this)
        }, void 0, false, {
            fileName: "[project]/alt/src/app/add-venue/details/page.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[54] = handleNext;
        $[55] = t12;
        $[56] = t15;
        $[57] = t22;
        $[58] = t25;
        $[59] = t28;
        $[60] = t6;
        $[61] = t9;
        $[62] = t30;
    } else {
        t30 = $[62];
    }
    return t30;
}
_s(Step2VenueDetails, "SXsvmMT8hADwyKjkzss7vAZm6XM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Step2VenueDetails;
var _c;
__turbopack_context__.k.register(_c, "Step2VenueDetails");
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

//# sourceMappingURL=alt_6dd8ae9a._.js.map