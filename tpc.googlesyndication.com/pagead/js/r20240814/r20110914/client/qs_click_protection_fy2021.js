(function() {
    'use strict';
    var aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this);

    function da(a, b) {
        if (b) a: {
            var c = ca;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && aa(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    da("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    });
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n = this || self;

    function ea(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = n, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function ka(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function p(a, b, c) {
        p = ka;
        return p.apply(null, arguments)
    }

    function la(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.N = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.O = function(d, e, g) {
            for (var f = Array(arguments.length - 2), h = 2; h < arguments.length; h++) f[h - 2] = arguments[h];
            return b.prototype[e].apply(d, f)
        }
    };

    function ma(a) {
        n.setTimeout(() => {
            throw a;
        }, 0)
    };
    var na = ea(610401301, !1),
        oa = ea(645172343, ea(1, !0));
    var r;
    const pa = n.navigator;
    r = pa ? pa.userAgentData || null : null;

    function qa(a) {
        return na ? r ? r.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function t(a) {
        var b;
        a: {
            if (b = n.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function u() {
        return na ? !!r && r.brands.length > 0 : !1
    }

    function ra() {
        return u() ? qa("Chromium") : (t("Chrome") || t("CriOS")) && !(u() ? 0 : t("Edge")) || t("Silk")
    };

    function x(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    !t("Android") || ra();
    ra();
    t("Safari") && (ra() || (u() ? 0 : t("Coast")) || (u() ? 0 : t("Opera")) || (u() ? 0 : t("Edge")) || (u() ? qa("Microsoft Edge") : t("Edg/")) || u() && qa("Opera"));
    let sa;

    function ta() {
        const a = Error();
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "incident";
        return a
    };
    var y = Symbol(),
        ua = Symbol();

    function va(a, b) {
        b[y] = (a | 0) & -14591
    }

    function wa(a, b) {
        b[y] = (a | 34) & -14557
    };
    var z = {},
        xa = {};

    function ya(a) {
        return !(!a || typeof a !== "object" || a.g !== xa)
    }

    function za(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function B(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[y] | 0) & 1 ? !0 : !1
    }
    var Aa;
    const Da = [];
    Da[y] = 55;
    Aa = Object.freeze(Da);
    var Ea = Object.freeze({});

    function Fa(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Ga(a, b, c) {
        if (a != null && typeof a === "object" && a.G === z) return a;
        if (Array.isArray(a)) {
            var d = a[y] | 0,
                e = d;
            e === 0 && (e |= c & 32);
            e |= c & 2;
            e !== d && (a[y] = e);
            return new b(a)
        }
    };

    function Ha(a) {
        var b = C ? .get(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        if (D === void 0)
            if (typeof Proxy !== "function") D = null;
            else try {
                D = Proxy.toString().indexOf("[native code]") !== -1 ? Proxy : null
            } catch {
                D = null
            }
        b = D;
        if (!b) return a;
        b = new b(a, {
            set(c, d, e) {
                Ia();
                c[d] = e;
                return !0
            }
        });
        Ja(a, b);
        return b
    }

    function Ia() {
        const a = ta();
        ma(a)
    }
    let C = void 0,
        Ka = void 0;

    function Ja(a, b) {
        (C || (C = new WeakMap)).set(a, b);
        (Ka || (Ka = new WeakMap)).set(b, a)
    }
    let D = void 0;
    let E;

    function La(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (B(a)) return
                    } else if (a != null && a instanceof Uint8Array) {
                    let b = "",
                        c = 0;
                    const d = a.length - 10240;
                    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    };

    function Ma(a, b, c) {
        a = Array.prototype.slice.call(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const g in e) b[g] = c(e[g])
        }
        return a
    }

    function Na(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = B(a) ? void 0 : e && (a[y] | 0) & 2 ? a : Oa(a, b, c, d !== void 0, e);
            else if (za(a)) {
                const g = {};
                for (let f in a) g[f] = Na(a[f], b, c, d, e);
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Oa(a, b, c, d, e) {
        const g = d || c ? a[y] | 0 : 0;
        d = d ? !!(g & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let f = 0; f < a.length; f++) a[f] = Na(a[f], b, c, d, e);
        c && c(g, a);
        return a
    }

    function Pa(a) {
        return a.G === z ? a.toJSON() : La(a)
    };

    function Qa(a, b, c = wa) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[y] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[y] = (d | 34) & -12293, a) : Oa(a, Qa, d & 4 ? wa : c, !0, !0)
            }
            a.G === z && (c = a.m, d = c[y], a = d & 2 ? a : Ra(a, c, d, !0));
            return a
        }
    }

    function Ra(a, b, c, d) {
        a = a.constructor;
        E = b = Sa(b, c, d);
        b = new a(b);
        E = void 0;
        return b
    }

    function Sa(a, b, c) {
        const d = c || b & 2 ? wa : va,
            e = !!(b & 32);
        a = Ma(a, b, g => Qa(g, e, d));
        a[y] = a[y] | 32 | (c ? 2 : 0);
        return a
    }

    function Ta(a) {
        const b = a.m,
            c = b[y];
        return c & 2 ? Ra(a, b, c, !1) : a
    };

    function F(a, b) {
        a = a.m;
        return Ua(a, a[y], b)
    }

    function Va(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Ua(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var g = a.length;
            return d && b & 256 && (d = a[g - 1][c], d != null) ? (Va(a, b, e, c) && ua != null && (a = sa ? ? (sa = {}), b = a[ua] || 0, b >= 4 || (a[ua] = b + 1, a = ta(), ma(a))), d) : Va(a, b, e, c)
        }
    }

    function I(a, b, c, d) {
        const e = b >> 14 & 1023 || 536870912;
        if (1 >= e || d && !oa) {
            let g = b;
            if (b & 256) d = a[a.length - 1];
            else {
                if (c == null) return g;
                d = a[e + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            d[1] = c;
            1 < e && (a[1 + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[y] = g);
            return g
        }
        a[1 + (+!!(b & 512) - 1)] = c;
        b & 256 && (a = a[a.length - 1], 1 in a && delete a[1]);
        return b
    }

    function J(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Wa(a) {
        var b = Xa,
            c = a.m,
            d = c[y],
            e = Ua(c, d, 1, !1);
        b = Ga(e, b, d);
        b !== e && b != null && I(c, d, b, !1);
        c = b;
        if (c == null) return c;
        a = a.m;
        d = a[y];
        d & 2 || (e = Ta(c), e !== c && (c = e, I(a, d, c, !1)));
        return c
    }

    function Ya(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function K(a, b) {
        a = F(a, b);
        return (a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0) ? ? !1
    }

    function L(a, b) {
        return Fa(F(a, b)) ? ? 0
    }

    function M(a) {
        a = F(a, 1);
        return (a == null || typeof a === "string" ? a : void 0) ? ? ""
    }

    function N(a, b) {
        a = F(a, b);
        return (a == null ? a : Number.isFinite(a) ? a | 0 : void 0) ? ? 1
    };
    let Za;
    var O = class {
        constructor(a) {
            a: {
                a == null && (a = E);E = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[y] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, za(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[y] = b
            }
            this.m = a
        }
        toJSON() {
            return $a(this)
        }
    };
    O.prototype.G = z;
    O.prototype.toString = function() {
        try {
            return Za = !0, $a(this).toString()
        } finally {
            Za = !1
        }
    };

    function $a(a) {
        a = Za ? a.m : Oa(a.m, Pa, void 0, void 0, !1); {
            var b = !Za;
            let l = a.length;
            if (l) {
                var c = a[l - 1],
                    d = za(c);
                d ? l-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var g = c;
                        var f = {};d = !1;
                        if (g)
                            for (var h in g) {
                                if (isNaN(+h)) {
                                    f[h] = g[h];
                                    continue
                                }
                                let m = g[h];
                                Array.isArray(m) && (B(m) || ya(m) && m.size === 0) && (m = null);
                                m == null && (d = !0);
                                m != null && (f[h] = m)
                            }
                        if (d) {
                            for (let m in f) break b;
                            f = null
                        } else f = g
                    }
                    g = f == null ? c != null : f !== c
                }
                for (; l > 0; l--) {
                    h = e[l - 1];
                    if (!(h == null || B(h) || ya(h) && h.size === 0)) break;
                    var k = !0
                }
                if (e !== a || g || k) {
                    if (!b) e = Array.prototype.slice.call(e,
                        0, l);
                    else if (k || g || f) e.length = l;
                    f && e.push(f)
                }
                k = e
            } else k = a
        }
        return k
    };
    var ab = class extends O {};

    function bb(a) {
        var b;
        void 0 === Ea ? b = 2 : b = 5;
        a = a.m;
        var c = a[y],
            d = c,
            e = !(2 & c),
            g = !!(2 & d);
        c = g ? 1 : b;
        e && (e = !g);
        b = Ua(a, d, 1);
        b = Array.isArray(b) ? b : Aa;
        var f = b[y] | 0;
        g = !!(4 & f);
        if (!g) {
            var h = f;
            h === 0 && (h = Ya(h, d));
            f = b;
            h |= 1;
            var k = d,
                l = !!(2 & h);
            l && (k |= 2);
            let q = !l,
                v = !0,
                G = 0,
                w = 0;
            for (; G < f.length; G++) {
                const H = Ga(f[G], ab, k);
                if (H instanceof ab) {
                    if (!l) {
                        const A = !!((H.m[y] | 0) & 2);
                        q && (q = !A);
                        v && (v = A)
                    }
                    f[w++] = H
                }
            }
            w < G && (f.length = w);
            h |= 4;
            h = v ? h | 16 : h & -17;
            h = q ? h | 8 : h & -9;
            f[y] = h;
            l && Object.freeze(f);
            f = h
        }
        if (e && !(8 & f || !b.length && (c === 1 || c === 4 && 32 & f))) {
            J(f) &&
                (b = Array.prototype.slice.call(b), f = Ya(f, d), d = I(a, d, b));
            e = b;
            for (h = 0; h < e.length; h++) k = e[h], l = Ta(k), k !== l && (e[h] = l);
            f |= 8;
            f = e.length ? f & -17 : f | 16;
            e[y] = f
        }
        let m;
        c === 1 || c === 4 && 32 & f ? J(f) || (a = f, d = !!(32 & f), f |= !b.length || 16 & f && (!g || d) ? 2 : 2048, f !== a && (b[y] = f), Object.freeze(b)) : (g = c !== 5 ? !1 : !!(32 & f) || J(f) || !!C ? .get(b), (c === 2 || g) && J(f) && (b = Array.prototype.slice.call(b), c = f = Ya(f, d), f = c &= -33, b[y] = f, d = I(a, d, b)), J(f) || (d = a = f, f = d &= -33, f !== a && (b[y] = f)), g && (m = Ha(b)));
        return m || b
    }
    var Xa = class extends O {};
    var cb = class extends O {};

    function db() {}

    function eb(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var fb = {
            capture: !0
        },
        gb = {
            passive: !0
        },
        hb = eb(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                n.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function ib(a) {
        return a ? a.passive && hb() ? a : a.capture || !1 : !1
    }

    function P(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, ib(d))
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var jb = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        kb = new jb("about:invalid#zClosurez");
    class lb {
        constructor(a) {
            this.M = a
        }
    }

    function Q(a) {
        return new lb(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const mb = new lb(a => /^[^:]*([/?#]|$)/.test(a));
    var nb = Q("http"),
        ob = Q("https"),
        pb = Q("ftp"),
        qb = Q("mailto");
    const rb = [Q("data"), nb, ob, qb, pb, mb];

    function sb(a = rb) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof lb && c.M("#")) return new jb("#")
        }
    }

    function tb(a = rb) {
        return sb(a) || kb
    }
    var ub = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function vb(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) vb(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    };

    function wb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    let xb = [];
    const yb = () => {
        const a = xb;
        xb = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var zb = a => {
        var b = R;
        b.readyState === "complete" || b.readyState === "interactive" ? (xb.push(a), xb.length == 1 && (window.Promise ? Promise.resolve().then(yb) : window.setImmediate ? setImmediate(yb) : setTimeout(yb, 0))) : b.addEventListener("DOMContentLoaded", a)
    };

    function Ab(a = document) {
        return a.createElement("img")
    };

    function Bb(a, b, c = null, d = !1) {
        Cb(a, b, c, d)
    }

    function Cb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Ab(a.document);
        if (c || d) {
            const g = f => {
                c && c(f);
                if (d) {
                    f = a.google_image_requests;
                    var h = Array.prototype.indexOf.call(f, e, void 0);
                    h >= 0 && Array.prototype.splice.call(f, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", g, ib());
                e.removeEventListener && e.removeEventListener("error", g, ib())
            };
            P(e, "load", g);
            P(e, "error", g)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };

    function Db(a = null) {
        return a && a.getAttribute("data-jc") === "23" ? a : document.querySelector('[data-jc="23"]')
    }

    function Eb() {
        if (!(Math.random() > .01)) {
            var a = Db(document.currentScript);
            a = a && a.getAttribute("data-jc-rcd") === "true" ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com";
            var b = (b = Db(document.currentScript)) && b.getAttribute("data-jc-version") || "unknown";
            a = `https://${a}/pagead/gen_204?id=jca&jc=${23}&version=${b}&sample=${.01}`;
            b = window;
            var c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : Bb(b, a, void 0, !1)
        }
    };
    var R = document,
        S = window;
    var Fb = (a = []) => {
        n.google_logging_queue || (n.google_logging_queue = []);
        n.google_logging_queue.push([12, a])
    };
    const Gb = [nb, ob, qb, pb, mb, Q("market"), Q("itms"), Q("intent"), Q("itms-appss")];

    function Hb() {
        var a = `${S.location.protocol==="http:"?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return b => {
            b = {
                id: "unsafeurl",
                ctx: 625,
                url: b
            };
            var c = [];
            for (d in b) vb(d, b[d], c);
            var d = c.join("&");
            if (d) {
                b = a.indexOf("#");
                b < 0 && (b = a.length);
                c = a.indexOf("?");
                if (c < 0 || c > b) {
                    c = b;
                    var e = ""
                } else e = a.substring(c + 1, b);
                b = [a.slice(0, c), e, a.slice(b)];
                c = b[1];
                b[1] = d ? c ? c + "&" + d : d : c;
                d = b[0] + (b[1] ? "?" + b[1] : "") + b[2]
            } else d = a;
            navigator.sendBeacon && navigator.sendBeacon(d, "")
        }
    };
    var Ib = () => {
            var a = R;
            try {
                return a.querySelectorAll("*[data-ifc]")
            } catch (b) {
                return []
            }
        },
        Jb = (a, b) => {
            a && wb(b, (c, d) => {
                a.style[d] = c
            })
        },
        Kb = a => {
            var b = R.body;
            const c = document.createDocumentFragment(),
                d = a.length;
            for (let e = 0; e < d; ++e) c.appendChild(a[e]);
            b.appendChild(c)
        };
    let Lb = null;

    function Mb() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Nb() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    var Ob = class {
        constructor(a, b) {
            var c = Nb() || Mb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const T = n.performance,
        Pb = !!(T && T.mark && T.measure && T.clearMarks),
        U = eb(() => {
            var a;
            if (a = Pb) {
                var b;
                if (Lb === null) {
                    Lb = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && (Lb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Lb;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function Qb(a) {
        a && T && U() && (T.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), T.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Rb {
        constructor() {
            var a = window;
            this.g = [];
            this.i = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.h = U() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.h) return null;
            a = new Ob(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            T && U() && T.mark(b);
            return a
        }
        end(a) {
            if (this.h && typeof a.value === "number") {
                a.duration = (Nb() || Mb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                T && U() && T.mark(b);
                !this.h || this.g.length >
                    2048 || this.g.push(a)
            }
        }
    };

    function Sb(a, b, c, d, e) {
        const g = [];
        wb(a, function(f, h) {
            (f = Tb(f, b, c, d, e)) && g.push(h + "=" + f)
        });
        return g.join(b)
    }

    function Tb(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const g = [];
                for (let f = 0; f < a.length; f++) g.push(Tb(a[f], b, c, d + 1, e));
                return g.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(Sb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Ub(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Vb(a) {
        let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=fccs&",
            c = Ub(a) - 24;
        if (c < 0) return "";
        a.g.sort(function(g, f) {
            return g - f
        });
        let d = null,
            e = "";
        for (let g = 0; g < a.g.length; g++) {
            const f = a.g[g],
                h = a.h[f];
            for (let k = 0; k < h.length; k++) {
                if (!c) {
                    d = d == null ? f : d;
                    break
                }
                let l = Sb(h[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (c >= l.length) {
                        c -= l.length;
                        b += l;
                        e = a.i;
                        break
                    }
                    d = d == null ? f : d
                }
            }
        }
        a = "";
        d != null && (a = e + "trn=" + d);
        return b + a
    }
    class Wb {
        constructor() {
            this.i = "&";
            this.h = {};
            this.l = 0;
            this.g = []
        }
    };
    class Xb {};

    function Yb() {
        var a = Zb,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }

    function $b(a) {
        if (Zb.g < 1) try {
            let b;
            a instanceof Wb ? b = a : (b = new Wb, wb(a, (d, e) => {
                var g = b;
                const f = g.l++,
                    h = {};
                h[e] = d;
                d = [h];
                g.g.push(f);
                g.h[f] = d
            }));
            const c = Vb(b);
            c && Bb(n, c)
        } catch (b) {}
    }
    class ac {
        constructor() {
            this.g = Math.random()
        }
    };
    let Zb;
    const V = new Rb;
    var bc = () => {
        window.google_measure_js_timing || (V.h = !1, V.g != V.i.google_js_reporting_queue && (U() && x(V.g, Qb), V.g.length = 0))
    };
    (a => {
        Zb = a ? ? new ac;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Yb();
        window.document.readyState == "complete" ? bc() : V.h && P(window, "load", () => {
            bc()
        })
    })();
    var cc = a => {
        P(S, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || c.googMsgType !== "ig" || a(c, b)
        })
    };

    function W() {
        this.h = this.h;
        this.i = this.i
    }
    W.prototype.h = !1;
    W.prototype.dispose = function() {
        this.h || (this.h = !0, this.l())
    };
    W.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    W.prototype.l = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };

    function X(a, b, c) {
        W.call(this);
        this.o = a;
        this.C = b || 0;
        this.s = c;
        this.v = p(this.A, this)
    }
    la(X, W);
    X.prototype.g = 0;
    X.prototype.l = function() {
        X.N.l.call(this);
        this.isActive() && n.clearTimeout(this.g);
        this.g = 0;
        delete this.o;
        delete this.s
    };
    X.prototype.start = function(a) {
        this.isActive() && n.clearTimeout(this.g);
        this.g = 0;
        var b = this.v;
        a = a !== void 0 ? a : this.C;
        if (typeof b !== "function")
            if (b && typeof b.handleEvent == "function") b = p(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.g = Number(a) > 2147483647 ? -1 : n.setTimeout(b, a || 0)
    };
    X.prototype.isActive = function() {
        return this.g != 0
    };
    X.prototype.A = function() {
        this.g = 0;
        this.o && this.o.call(this.s)
    };
    const dc = {
            display: "inline-block",
            position: "absolute"
        },
        ec = {
            display: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
        },
        Y = (a, b) => {
            a && (a.style.display = b ? "inline-block" : "none")
        };

    function fc(a = "") {
        const b = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        a && (a = a.split(","), a.length === 4 && a.reduce((c, d) => c && !isNaN(+d), !0) && ([b.top, b.right, b.bottom, b.left] = a.map(c => +c)));
        return b
    }

    function gc(a, b, c = 2147483647) {
        const d = R.createElement("div");
        Jb(d, { ...dc,
            "z-index": String(c),
            ...b
        });
        K(a.data, 10) && P(d, "click", db);
        if (K(a.data, 11)) {
            a = R.createElement("a");
            b = Hb();
            c = tb(Gb);
            c === kb && b("#");
            b = c;
            if (b instanceof jb)
                if (b instanceof jb) b = b.g;
                else throw Error("");
            else b = ub.test(b) ? b : void 0;
            a.href = b === void 0 ? kb.toString() : b;
            a.appendChild(d);
            return a
        }
        return d
    }

    function hc(a, b) {
        switch (N(b.j, 5)) {
            case 2:
                S.AFMA_Communicator ? .addEventListener ? .("onshow", () => {
                    Z(a, b)
                });
                break;
            case 10:
                P(S, "i-creative-view", () => {
                    Z(a, b)
                });
                break;
            case 4:
                P(R, "DOMContentLoaded", () => {
                    Z(a, b)
                });
                break;
            case 8:
                cc(c => {
                    c.rr && Z(a, b)
                });
                break;
            case 9:
                if ("IntersectionObserver" in S) {
                    const c = new IntersectionObserver(d => {
                        for (const e of d)
                            if (e.intersectionRatio > 0) {
                                Z(a, b);
                                break
                            }
                    });
                    c.observe(R.body);
                    a.L.push(c)
                }
                break;
            case 11:
                S.AFMA_Communicator ? .addEventListener ? .("onAdVisibilityChanged", () => {
                    Z(a, b)
                })
        }
    }

    function ic(a, b) {
        b = fc(b);
        const c = L(a.data, 9);
        a.l = [{
            width: "100%",
            height: b.top + c + "px",
            top: -c + "px",
            left: "0"
        }, {
            width: b.right + c + "px",
            height: "100%",
            top: "0",
            right: -c + "px"
        }, {
            width: "100%",
            height: b.bottom + c + "px",
            bottom: -c + "px",
            left: "0"
        }, {
            width: b.left + c + "px",
            height: "100%",
            top: "0",
            left: -c + "px"
        }].map(d => gc(a, d, 9019))
    }

    function jc(a) {
        var b = 0;
        for (const d of a.K) {
            const e = d.j,
                g = a.A[N(e, 5)];
            d.u || g === void 0 || (b = Math.max(b, g + L(e, 2)))
        }
        a.o && a.o.dispose();
        b -= Date.now();
        const c = a.h;
        b > 0 ? (Y(c, !0), a.o = new X(() => {
            Y(c, !1)
        }, b), a.o.start()) : Y(c, !1)
    }

    function Z(a, b) {
        if (!b.u) {
            var c = N(b.j, 5);
            a.A[c] = Date.now();
            K(b.j, 9) && (a.K.push(b), jc(a))
        }
    }

    function kc(a, b, c) {
        if (!a.g || !a.v || b.timeStamp - a.g.timeStamp >= 300) return !1;
        const d = new Map;
        x(a.v.changedTouches, e => {
            d.set(e.identifier, {
                x: e.clientX,
                y: e.clientY
            })
        });
        b = L(c.j, 11) || 10;
        for (const e of a.g.changedTouches)
            if (a = d.get(e.identifier), !a || Math.abs(a.x - e.clientX) > b || Math.abs(a.y - e.clientY) > b) return !0;
        return !1
    }
    var mc = class {
        constructor() {
            var a = lc;
            this.l = [];
            this.o = this.h = null;
            this.K = [];
            this.data = null;
            this.C = [];
            this.i = [];
            this.s = [];
            this.A = {};
            this.L = [];
            this.v = this.g = null;
            this.H = "";
            this.I = a["send-fccs"] === "true";
            this.H = a.qid || ""
        }
        init(a) {
            Fb([a]);
            this.data = new cb(a);
            a = Wa(this.data);
            x(bb(a), g => {
                this.s.push({
                    D: 0,
                    u: !1,
                    F: 0,
                    j: g,
                    B: -1
                })
            });
            this.i = Ib();
            let b = !1;
            a = this.i.length;
            for (let g = 0; g < a; ++g) {
                var c = new Xa(JSON.parse(this.i[g].getAttribute("data-ifc") || "[]"));
                x(bb(c), f => {
                    this.s.push({
                        D: 0,
                        u: !1,
                        F: 0,
                        j: f,
                        B: g
                    });
                    N(f, 4) ===
                        1 && (b = !0)
                })
            }
            c = a = !1;
            let d = K(this.data, 12);
            for (var e of this.s) {
                const g = e.j;
                L(g, 2) > 0 && N(g, 5) > 0 ? (!this.h && K(g, 9) && (this.h = gc(this, ec)), hc(this, e)) : M(g) && K(g, 9) && ic(this, M(g));
                M(g) && (a = !0);
                L(g, 11) > 0 && (c = !0);
                K(g, 12) && (d = !0)
            }
            e = [];
            this.h && e.push(this.h);
            !b && e.push(...this.l);
            R.body && Kb(e);
            K(this.data, 13) && zb(() => {
                const g = R.body.querySelectorAll(".amp-fcp, .amp-bcp");
                for (let h = 0; h < g.length; ++h) {
                    var f = (f = g[h]) ? S.getComputedStyle(f).getPropertyValue("position") : void 0;
                    f === "absolute" && Y(g[h], !1)
                }
            });
            P(R, "click",
                g => {
                    if (this.I) {
                        var f = {
                            cx: g.clientX,
                            cy: g.clientY,
                            et: Date.now(),
                            qid: this.H
                        };
                        var h = Xb;
                        var k = "J";
                        h.J && h.hasOwnProperty(k) || (k = new h, h.J = k);
                        h = [];
                        !f.eid && h.length && (f.eid = h.toString());
                        $b(f);
                        this.I = !1
                    }
                    if (g.isTrusted === !1 && K(this.data, 15)) g.preventDefault ? g.preventDefault() : g.returnValue = !1, g.stopImmediatePropagation(), Eb();
                    else {
                        f = -1;
                        h = [];
                        for (var l of this.s) {
                            k = l.B;
                            var m = k !== -1;
                            if (!(L(l.j, 3) <= f || l.u || m && h[k] === !1)) {
                                var q = !m || h[k] || this.i[k].contains(g.target);
                                m && q && (h[k] = !0);
                                if (k = q)
                                    if (k = g, m = l.j, L(m, 2) > 0 &&
                                        N(m, 5) > 0) k = this.A[N(m, 5)], k = k !== void 0 && Date.now() < k + L(m, 2);
                                    else if (M(m)) {
                                    {
                                        m = (l.B >= 0 ? this.i[l.B] : R.body).getBoundingClientRect();
                                        q = Number;
                                        var v = (v = R.body) ? S.getComputedStyle(v).getPropertyValue("zoom") : void 0;
                                        const A = q(v || "1"),
                                            [qc, rc] = [k.clientX, k.clientY],
                                            [fa, ha, Ba, Ca] = [qc / A - m.left, rc / A - m.top, m.width, m.height];
                                        if (!(Ba > 0 && Ca > 0) || isNaN(fa) || isNaN(ha) || fa < 0 || ha < 0) k = !1;
                                        else {
                                            q = fc(M(l.j));
                                            v = !(fa >= q.left && Ba - fa > q.right && ha >= q.top && Ca - ha > q.bottom);
                                            var G = K(l.j, 12);
                                            if (this.g && (K(this.data, 12) || G) && k.timeStamp -
                                                this.g.timeStamp < 300) {
                                                k = this.g.changedTouches[0];
                                                const [ia, ja] = [k.clientX / A - m.left, k.clientY / A - m.top];
                                                !isNaN(ia) && !isNaN(ja) && ia >= 0 && ja >= 0 && (v = (v = K(this.data, 16) || G ? v : !1) || !(ia >= q.left && Ba - ia > q.right && ja >= q.top && Ca - ja > q.bottom))
                                            }
                                            k = v
                                        }
                                    }
                                } else k = L(m, 11) > 0 ? kc(this, k, l) : !0;
                                if (k) {
                                    var w = l;
                                    f = L(l.j, 3)
                                }
                            }
                        }
                        if (w) switch (l = w.j, N(l, 4)) {
                            case 2:
                            case 3:
                                g.preventDefault ? g.preventDefault() : g.returnValue = !1;
                                f = Date.now();
                                f - w.F > 500 && (w.F = f, ++w.D);
                                f = w.j;
                                if (L(f, 8) && w.D >= L(f, 8))
                                    if (w.u = !0, this.h && L(f, 2) > 0) jc(this);
                                    else if (this.l.length >
                                    0 && M(f))
                                    for (var H of this.l) Y(H, !1);
                                Eb();
                                H = $a(l);
                                for (const A of this.C) A(g, H)
                        }
                    }
                }, fb);
            c && P(R, "touchstart", g => {
                this.v = g
            }, gb);
            (a && d || c) && P(R, "touchend", g => {
                this.g = g
            }, gb)
        }
        registerCallback(a) {
            this.C.push(a)
        }
    };
    const nc = Db(document.currentScript);
    if (nc == null) throw Error("JSC not found 23");
    var lc;
    const oc = {},
        pc = nc.attributes;
    for (let a = pc.length - 1; a >= 0; a--) {
        const b = pc[a].name;
        b.indexOf("data-jcp-") === 0 && (oc[b.substring(9)] = pc[a].value)
    }
    lc = oc;
    const sc = window;
    sc.googqscp = new mc;
    lc["init-data"] && sc.googqscp.init(JSON.parse(lc["init-data"]));
}).call(this);