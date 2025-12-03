(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/alt/src/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/supabase/client.ts
__turbopack_context__.s([
    "supabaseBrowser",
    ()=>supabaseBrowser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/alt/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/alt/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
"use client";
;
const supabaseBrowser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://tehrsokyvxsblrgxfhhu.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlaHJzb2t5dnhzYmxyZ3hmaGh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2NjExMDIsImV4cCI6MjA3OTIzNzEwMn0.8kcB1GUzjCZY5E9fh5WSIOlKZdKzLfGWPg1fLYJrY3Y"));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/alt/src/components/AuthListener.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/AuthListener.tsx
__turbopack_context__.s([
    "default",
    ()=>AuthListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/alt/src/lib/supabase/client.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AuthListener() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "2c5fd1d6dccf2aa622686d5dcbb7c2aaae6b6930ac6b61dedf1b83da4ae4e929") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2c5fd1d6dccf2aa622686d5dcbb7c2aaae6b6930ac6b61dedf1b83da4ae4e929";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    let t1;
    if ($[1] !== router) {
        t0 = ({
            "AuthListener[useEffect()]": ()=>{
                const { data: sub } = __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseBrowser"].auth.onAuthStateChange({
                    "AuthListener[useEffect() > supabaseBrowser.auth.onAuthStateChange()]": async (event, session)=>{
                        if (event === "SIGNED_IN") {
                            const token = session?.access_token;
                            if (token) {
                                document.cookie = `sb-access-token=${token}; path=/; max-age=3600`;
                            }
                            const user = session?.user;
                            if (!user) {
                                return;
                            }
                            const { data: profile } = await __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseBrowser"].from("profiles").select("id").eq("id", user.id).maybeSingle();
                            if (!profile) {
                                router.push("/auth/complete-profile");
                            } else {
                                router.push("/dashboard");
                            }
                        }
                        if (event === "SIGNED_OUT") {
                            document.cookie = "sb-access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                            router.push("/auth");
                        }
                    }
                }["AuthListener[useEffect() > supabaseBrowser.auth.onAuthStateChange()]"]);
                return ()=>{
                    sub.subscription.unsubscribe();
                };
            }
        })["AuthListener[useEffect()]"];
        t1 = [
            router
        ];
        $[1] = router;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    return null;
}
_s(AuthListener, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$alt$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthListener;
var _c;
__turbopack_context__.k.register(_c, "AuthListener");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=alt_src_9f58caec._.js.map