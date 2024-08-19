(function(sttc) {
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
    var ca = ba(this),
        da = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ea = {},
        fa = {};

    function ha(a, b, c) {
        if (!c || a != null) {
            c = fa[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function ia(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ea ? f = ea : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? aa(ea, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (fa[d] === void 0 && (a = Math.random() * 1E9 >>> 0, fa[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, fa[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ia("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var k = this || self;

    function ja(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = k, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function ka(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function la(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ma(a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function na(a, b, c) {
        na = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? la : ma;
        return na.apply(null, arguments)
    }

    function oa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function pa(a, b) {
        a = a.split(".");
        var c = k || k;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function qa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Y = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.mb = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function ra(a) {
        return a
    };
    var sa;

    function ta(a) {
        k.setTimeout(() => {
            throw a;
        }, 0)
    };
    var ua = /&/g,
        wa = /</g,
        xa = />/g,
        ya = /"/g,
        za = /'/g,
        Aa = /\x00/g,
        Ba = /[\x00&<>"']/;
    var Ca = ja(610401301, !1),
        Da = ja(645172343, ja(1, !0));

    function Ea() {
        var a = k.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var n;
    const Fa = k.navigator;
    n = Fa ? Fa.userAgentData || null : null;

    function Ga(a) {
        return Ca ? n ? n.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function p(a) {
        return Ea().indexOf(a) != -1
    };

    function r() {
        return Ca ? !!n && n.brands.length > 0 : !1
    }

    function Ha() {
        return r() ? !1 : p("Trident") || p("MSIE")
    }

    function Ia() {
        return r() ? Ga("Chromium") : (p("Chrome") || p("CriOS")) && !(r() ? 0 : p("Edge")) || p("Silk")
    };

    function Ja(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ka(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function La(a, b) {
        var c = a.length;
        const d = typeof a === "string" ? a.split("") : a;
        for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Ma(a, b) {
        b = Ja(a, b);
        let c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Na(a, b) {
        let c = 0;
        La(a, function(d, e) {
            b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++
        })
    };

    function Oa(a) {
        Oa[" "](a);
        return a
    }
    Oa[" "] = function() {};
    var Pa = Ha(),
        Qa = p("Gecko") && !(Ea().toLowerCase().indexOf("webkit") != -1 && !p("Edge")) && !(p("Trident") || p("MSIE")) && !p("Edge"),
        Ra = Ea().toLowerCase().indexOf("webkit") != -1 && !p("Edge");
    !p("Android") || Ia();
    Ia();
    p("Safari") && (Ia() || (r() ? 0 : p("Coast")) || (r() ? 0 : p("Opera")) || (r() ? 0 : p("Edge")) || (r() ? Ga("Microsoft Edge") : p("Edg/")) || r() && Ga("Opera"));
    let Sa = 0,
        Ta = 0;

    function Ua(a) {
        const b = a >>> 0;
        Sa = b;
        Ta = (a - b) / 4294967296 >>> 0
    }

    function Va(a) {
        if (a < 0) {
            Ua(-a);
            a = Sa;
            var b = Ta;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            Sa = c >>> 0;
            Ta = d >>> 0
        } else Ua(a)
    };

    function Xa(a) {
        return Array.prototype.slice.call(a)
    };
    var t = Symbol(),
        Ya = Symbol(),
        Za = Symbol();

    function $a(a, b) {
        b[t] = (a | 34) & -14557
    };
    var ab = {},
        bb = {};

    function cb(a) {
        return !(!a || typeof a !== "object" || a.g !== bb)
    }

    function db(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function eb(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[t] | 0) & 1 ? !0 : !1
    }
    var fb;
    const gb = [];
    gb[t] = 55;
    fb = Object.freeze(gb);

    function hb(a) {
        if (a & 2) throw Error();
    }
    Object.freeze({});
    var ib = Object.freeze({});

    function jb(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let kb, lb;

    function mb(a) {
        if (lb) throw Error("");
        lb = b => {
            k.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function nb(a) {
        if (lb) try {
            lb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function ob(a) {
        a = Error(a);
        jb(a, "warning");
        nb(a);
        return a
    };

    function pb(a, b) {
        const c = qb;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function rb(a) {
        a.ob = !0;
        return a
    }
    let qb = void 0;
    var sb = rb(a => typeof a === "number"),
        tb = rb(a => typeof a === "string"),
        ub = rb(a => a === void 0);

    function vb(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    const wb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function xb(a) {
        if (!Number.isFinite(a)) throw ob("enum");
        return a | 0
    }

    function yb(a) {
        if (typeof a !== "number") throw ob("int32");
        if (!Number.isFinite(a)) throw ob("int32");
        return a | 0
    }

    function zb(a) {
        if (a == null) var b = a;
        else a: {
            b: {
                var c = typeof a;
                switch (c) {
                    case "bigint":
                        c = !0;
                        break b;
                    case "number":
                        c = Number.isFinite(a);
                        break b
                }
                c = c !== "string" ? !1 : wb.test(a)
            }
            if (!c) throw ob("int64");
            switch (typeof a) {
                case "string":
                    c = Math.trunc(Number(a));
                    Number.isSafeInteger(c) ? b = String(c) : (c = a.indexOf("."), c !== -1 && (a = a.substring(0, c)), (a[0] === "-" ? a.length < 20 || a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 || a.length === 19 && Number(a.substring(0, 6)) < 922337) ? b = a : (a.length < 16 ? Va(Number(a)) : (a = BigInt(a),
                        Sa = Number(a & BigInt(4294967295)) >>> 0, Ta = Number(a >> BigInt(32) & BigInt(4294967295))), a = Sa, c = Ta, c & 2147483648 ? b = "" + (BigInt(c | 0) << BigInt(32) | BigInt(a >>> 0)) : (c >>>= 0, a >>>= 0, c <= 2097151 ? b = "" + (4294967296 * c + a) : b = "" + (BigInt(c) << BigInt(32) | BigInt(a)))));
                    break a;
                case "bigint":
                    b = BigInt.asIntN(64, a);
                    if (tb(b)) {
                        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
                    } else if (sb(b) && !Number.isSafeInteger(b)) throw Error(String(b));
                    b = BigInt(b);
                    break a;
                default:
                    if (b = Math.trunc(a), !Number.isSafeInteger(b)) {
                        Va(b);
                        a =
                            Sa;
                        c = Ta;
                        if (b = c & 2147483648) a = ~a + 1 >>> 0, c = ~c >>> 0, a == 0 && (c = c + 1 >>> 0);
                        a = c * 4294967296 + (a >>> 0);
                        b = b ? -a : a
                    }
            }
        }
        return b
    }

    function Ab(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function Bb(a) {
        return a == null || typeof a === "string" ? a : void 0
    };
    let Cb;

    function Db(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (eb(a)) return
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

    function Eb(a, b, c) {
        a = Xa(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function Fb(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = eb(a) ? void 0 : e && (a[t] | 0) & 2 ? a : Jb(a, b, c, d !== void 0, e);
            else if (db(a)) {
                const f = {};
                for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Fb(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Jb(a, b, c, d, e) {
        const f = d || c ? a[t] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Xa(a);
        for (let g = 0; g < a.length; g++) a[g] = Fb(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Kb(a) {
        return a.Ga === ab ? a.toJSON() : Db(a)
    };

    function Lb(a, b, c = $a) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[t] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[t] = (d | 34) & -12293, a) : Jb(a, Lb, d & 4 ? $a : c, !0, !0)
            }
            a.Ga === ab && (c = a.G, d = c[t], a = d & 2 ? a : Mb(a, c, d));
            return a
        }
    }

    function Mb(a, b, c) {
        a = a.constructor;
        Cb = b = Nb(b, c);
        b = new a(b);
        Cb = void 0;
        return b
    }

    function Nb(a, b) {
        const c = !!(b & 32);
        a = Eb(a, b, d => Lb(d, c, $a));
        a[t] |= 34;
        return a
    };

    function Ob(a, b) {
        a = a.G;
        return Pb(a, a[t], b)
    }

    function Qb(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Pb(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Qb(a, b, e, c) && Ya != null && (a = kb ? ? (kb = {}), b = a[Ya] || 0, b >= 4 || (a[Ya] = b + 1, a = Error(), jb(a, "incident"), lb ? nb(a) : ta(a))), d) : Qb(a, b, e, c)
        }
    }

    function u(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Da) {
            let g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[t] = g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Rb(a, b, c, d) {
        a = a.G;
        let e = a[t];
        hb(e);
        if (c == null) u(a, e, b);
        else {
            c = (void 0) ? .get(c) || c;
            var f = c[t] | 0,
                g = f,
                h = !!(2 & f) || Object.isFrozen(c),
                l = !h && (void 0 === ib || !1);
            if (!(4 & f))
                for (f = 21, h && (c = Xa(c), g = 0, f = Sb(f, e), f = Tb(f, e)), h = 0; h < c.length; h++) c[h] = d(c[h]);
            l && (c = Xa(c), g = 0, f = Sb(f, e), f = Tb(f, e));
            f !== g && (c[t] = f);
            u(a, e, b, c)
        }
    }

    function v(a, b, c, d) {
        const e = a.G;
        let f = e[t];
        hb(f);
        u(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function Ub(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            Pb(b, c, g) != null && (e !== 0 && (c = u(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function Vb(a, b, c) {
        c == null && (c = void 0);
        const d = a.G;
        let e = d[t];
        hb(e);
        u(d, e, b, c);
        return a
    }

    function Wb(a, b, c, d) {
        d == null && (d = void 0);
        a: {
            const g = a.G;
            var e = g[t];hb(e);
            if (d == null) {
                var f = g[Za] ? ? (g[Za] = new Map);
                if (Ub(f, g, e, c) === b) f.set(c, 0);
                else break a
            } else {
                f = g;
                const h = f[Za] ? ? (f[Za] = new Map),
                    l = Ub(h, f, e, c);
                l !== b && (l && (e = u(f, e, l)), h.set(c, b))
            }
            u(g, e, b, d)
        }
        return a
    }

    function Sb(a, b) {
        a = 2 & b ? a | 2 : a & -3;
        return (a | 32) & -2049
    }

    function Tb(a, b) {
        32 & b || (a &= -33);
        return a
    }

    function Xb(a, b) {
        return a ? ? b
    }

    function w(a, b, c) {
        if (c != null && typeof c !== "string") throw Error();
        return v(a, b, c, "")
    };
    var x = class {
        constructor(a) {
            a: {
                a == null && (a = Cb);Cb = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[t] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, db(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[t] = b
            }
            this.G = a
        }
        toJSON() {
            return Yb(this)
        }
    };
    x.prototype.Ga = ab;

    function Yb(a) {
        a = Jb(a.G, Kb, void 0, void 0, !1); {
            let h = a.length;
            if (h) {
                var b = a[h - 1],
                    c = db(b);
                c ? h-- : b = void 0;
                if (c) {
                    b: {
                        var d = b;
                        var e = {};c = !1;
                        if (d)
                            for (var f in d) {
                                if (!Object.prototype.hasOwnProperty.call(d, f)) continue;
                                if (isNaN(+f)) {
                                    e[f] = d[f];
                                    continue
                                }
                                let l = d[f];
                                Array.isArray(l) && (eb(l) || cb(l) && l.size === 0) && (l = null);
                                l == null && (c = !0);
                                l != null && (e[f] = l)
                            }
                        if (c) {
                            for (let l in e) break b;
                            e = null
                        } else e = d
                    }
                    d = e == null ? b != null : e !== b
                }
                for (var g; h > 0; h--) {
                    f = a[h - 1];
                    if (!(f == null || eb(f) || cb(f) && f.size === 0)) break;
                    g = !0
                }
                if (a !== a ||
                    d || g) {
                    if (g || d || e) a.length = h;
                    e && a.push(e)
                }
            }
        }
        return a
    };

    function Zb(a, b) {
        this.g = a === $b && b || "";
        this.j = ac
    }
    Zb.prototype.toString = function() {
        return this.g
    };

    function bc(a) {
        return a instanceof Zb && a.constructor === Zb && a.j === ac ? a.g : "type_error:Const"
    }
    var ac = {},
        $b = {};

    function cc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function dc(a) {
        let b = 0;
        return function(c) {
            k.clearTimeout(b);
            const d = arguments;
            b = k.setTimeout(function() {
                a.apply(void 0, d)
            }, 100)
        }
    };

    function y(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function ec(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function fc(a, b, c) {
        for (const d in a) b.call(c, a[d], d, a)
    }

    function gc(a) {
        let b = 0;
        for (const c in a) b++
    }

    function hc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const ic = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function jc(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < ic.length; f++) c = ic[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var kc;

    function lc() {
        if (kc === void 0) {
            var a = null,
                b = k.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ra,
                        createScript: ra,
                        createScriptURL: ra
                    })
                } catch (c) {
                    k.console && k.console.error(c.message)
                }
                kc = a
            } else kc = a
        }
        return kc
    };
    var mc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function nc(a) {
        return a instanceof mc && a.constructor === mc ? a.g : "type_error:TrustedResourceUrl"
    }
    var oc = {};

    function pc(a) {
        const b = lc();
        a = b ? b.createScriptURL(a) : a;
        return new mc(a, oc)
    };
    const qc = {};

    function rc(a) {
        return a instanceof sc && a.constructor === sc ? a.g : "type_error:SafeStyleSheet"
    }
    class sc {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };
    const tc = {};

    function uc(a) {
        return a instanceof z && a.constructor === z ? a.g : "type_error:SafeHtml"
    }

    function vc(a) {
        a instanceof z || (a = String(a), Ba.test(a) && (a.indexOf("&") != -1 && (a = a.replace(ua, "&amp;")), a.indexOf("<") != -1 && (a = a.replace(wa, "&lt;")), a.indexOf(">") != -1 && (a = a.replace(xa, "&gt;")), a.indexOf('"') != -1 && (a = a.replace(ya, "&quot;")), a.indexOf("'") != -1 && (a = a.replace(za, "&#39;")), a.indexOf("\x00") != -1 && (a = a.replace(Aa, "&#0;"))), a = wc(a));
        return a
    }

    function wc(a) {
        const b = lc();
        a = b ? b.createHTML(a) : a;
        return new z(a, tc)
    }
    class z {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    var xc = new z(k.trustedTypes && k.trustedTypes.emptyHTML || "", tc);
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function yc(a) {
        return new sc(a[0], qc)
    };

    function zc(a) {
        const b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            params: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }

    function Ac(a, b) {
        a = zc(nc(a).toString());
        let c = a.params,
            d = c.length ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                h !== null && h !== void 0 && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return pc(a.path + c + a.hash)
    };
    var Bc = cc(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = uc(xc);
        return !b.parentElement
    });

    function Cc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Dc(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Ec(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Fc(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }

    function Gc() {
        this.g = k.document || document
    };

    function Hc() {
        return Ca && n ? n.mobile : !Ic() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"))
    }

    function Ic() {
        return Ca && n ? !n.mobile && (p("iPad") || p("Android") || p("Silk")) : p("iPad") || p("Android") && !p("Mobile") || p("Silk")
    };
    var Jc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Kc(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null) a: {
                try {
                    Oa(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function Lc() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Mc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Nc(a) {
        const b = [];
        Mc(a, function(c) {
            b.push(c)
        });
        return b
    }
    var Oc = cc(() => Hc() ? 2 : Ic() ? 1 : 0),
        Pc = (a, b) => {
            Mc(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Rc = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = Qc(a.style.cssText), Mc(a, b)
        },
        Qc = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Ka((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        Sc = a => {
            const b = /!\s*important/i;
            Rc(a, (c, d) => {
                b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
            })
        };
    let Tc = [];
    const Uc = () => {
        const a = Tc;
        Tc = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Vc = a => {
            Tc.push(a);
            Tc.length == 1 && (window.Promise ? Promise.resolve().then(Uc) : window.setImmediate ? setImmediate(Uc) : setTimeout(Uc, 0))
        },
        Wc = a => {
            if (typeof a.goog_pvsid !== "number") try {
                var b = Object,
                    c = b.defineProperty,
                    d = Math.random;
                var e = Math.floor(d() * 2 ** 52);
                c.call(b, a, "goog_pvsid", {
                    value: e,
                    configurable: !1
                })
            } catch (f) {}
            return Number(a.goog_pvsid) || -1
        },
        Xc = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function Yc(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var Zc = a => {
        if (Ia() && Hc()) {
            var b = Kc(a.top) ? a.top : null;
            if (b) {
                a = Oc() === 0;
                var c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                    d = b.innerWidth;
                b = b.outerWidth;
                if (d === 0) a = 1;
                else {
                    var e = Math.round((b / d + Number.EPSILON) * 100) / 100;
                    a = e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
                }
            } else a = 1
        } else a = 1;
        return a
    };

    function $c(a, b, c = null, d = !1, e = !1) {
        ad(a, b, c, d, e)
    }

    function ad(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Yc("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && Ma(a.google_image_requests, f);
                ec(f, "load", g);
                ec(f, "error", g)
            };
            y(f, "load", g);
            y(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var cd = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=rcs_internal";
            Mc(a, (c, d) => {
                if (c || c === 0) b += `&${d}=${encodeURIComponent(""+c)}`
            });
            bd(b)
        },
        bd = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : $c(b, a, void 0, !1, !1)
        };

    function dd() {
        var a = k.context || k.AMP_CONTEXT_DATA;
        if (!a) try {
            a = k.parent.context || k.parent.AMP_CONTEXT_DATA
        } catch {}
        return (a = a ? .pageViewId && a ? .canonicalUrl ? a : null) ? Kc(a.master) ? a.master : null : null
    };

    function A(a, b, c) {
        if (typeof b === "string")(b = ed(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = ed(c, d);
                f && (c.style[f] = e)
            }
    }
    var fd = {};

    function ed(a, b) {
        var c = fd[b];
        if (!c) {
            var d = Cc(b);
            c = d;
            a.style[d] === void 0 && (d = (Ra ? "Webkit" : Qa ? "Moz" : Pa ? "ms" : null) + Dc(d), a.style[d] !== void 0 && (c = d));
            fd[b] = c
        }
        return c
    };
    var gd = class {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const hd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var id = class {
            constructor(a, b) {
                this.g = a;
                this.j = b
            }
        },
        jd = class {
            constructor(a, b) {
                this.url = a;
                this.Da = !!b;
                this.depth = null
            }
        };
    let kd = null;

    function ld() {
        const a = k.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function md() {
        const a = k.performance;
        return a && a.now ? a.now() : null
    };
    var nd = class {
        constructor(a, b) {
            var c = md() || ld();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const B = k.performance,
        od = !!(B && B.mark && B.measure && B.clearMarks),
        pd = cc(() => {
            var a;
            if (a = od) {
                var b;
                if (kd === null) {
                    kd = "";
                    try {
                        a = "";
                        try {
                            a = k.top.location.hash
                        } catch (c) {
                            a = k.location.hash
                        }
                        a && (kd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = kd;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function qd(a) {
        a && B && pd() && (B.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), B.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function rd(a) {
        a.g = !1;
        a.j != a.i.google_js_reporting_queue && (pd() && Ka(a.j, qd), a.j.length = 0)
    }
    class sd {
        constructor(a) {
            this.j = [];
            this.i = a || k;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.j = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = pd() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new nd(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            B && pd() && B.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (md() || ld()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                B && pd() && B.mark(b);
                !this.g || this.j.length >
                    2048 || this.j.push(a)
            }
        }
    };

    function xd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function yd(a, b, c, d, e) {
        const f = [];
        Mc(a, function(g, h) {
            (g = zd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function zd(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(zd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(yd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Ad(a) {
        let b = 1;
        for (const c in a.j) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Bd(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Ad(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.j[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let m = yd(h[l], a.i, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.i;
                        break
                    }
                    b = b == null ? g : b
                }
            }
        }
        a = "";
        b != null && (a = e + "trn=" + b);
        return c + a
    }
    class Cd {
        constructor() {
            this.i = "&";
            this.j = {};
            this.u = 0;
            this.g = []
        }
    };

    function Dd(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack) a: {
            a = a.stack;
            var c = b;
            try {
                a.indexOf(c) == -1 && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n");
                break a
            } catch (d) {
                b = c;
                break a
            }
            b = void 0
        }
        return b
    }

    function Ed(a, b) {
        a.i = b
    }

    function Fd(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = a.l;
            try {
                qd(e), c = a.o(b, new gd(f, {
                    message: Dd(f)
                }), void 0, void 0)
            } catch (g) {
                a.sa(217, g)
            }
            if (c) window.console ? .error ? .(f);
            else throw f;
        }
        return d
    }

    function Gd(a, b) {
        var c = C;
        return (...d) => Fd(c, a, () => b.apply(void 0, d))
    }
    var Id = class {
        constructor(a, b, c = null) {
            this.u = a;
            this.l = b;
            this.g = c;
            this.i = null;
            this.j = !1;
            this.o = this.sa
        }
        sa(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const N = new Cd;
                var g = N;
                g.g.push(1);
                g.j[1] = xd("context", a);
                b.error && b.meta && b.id || (b = new gd(b, {
                    message: Dd(b)
                }));
                if (b.msg) {
                    g = N;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.j[2] = xd("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.i) try {
                    this.i(b)
                } catch (V) {}
                if (d) try {
                    d(b)
                } catch (V) {}
                d = N;
                l = [l];
                d.g.push(3);
                d.j[3] = l;
                d = k;
                l = [];
                b = null;
                do {
                    var m = d;
                    if (Kc(m)) {
                        var q = m.location.href;
                        b = m.document &&
                            m.document.referrer || null
                    } else q = b, b = null;
                    l.push(new jd(q || ""));
                    try {
                        d = m.parent
                    } catch (V) {
                        d = null
                    }
                } while (d && m != d);
                for (let V = 0, td = l.length - 1; V <= td; ++V) l[V].depth = td - V;
                m = k;
                if (m.location && m.location.ancestorOrigins && m.location.ancestorOrigins.length == l.length - 1)
                    for (q = 1; q < l.length; ++q) {
                        var W = l[q];
                        W.url || (W.url = m.location.ancestorOrigins[q - 1] || "", W.Da = !0)
                    }
                var O = l;
                let Wa = new jd(k.location.href, !1);
                m = null;
                const Gb = O.length - 1;
                for (W = Gb; W >= 0; --W) {
                    var P = O[W];
                    !m && hd.test(P.url) && (m = P);
                    if (P.url && !P.Da) {
                        Wa = P;
                        break
                    }
                }
                P =
                    null;
                const Ff = O.length && O[Gb].url;
                Wa.depth != 0 && Ff && (P = O[Gb]);
                f = new id(Wa, P);
                if (f.j) {
                    O = N;
                    var X = f.j.url || "";
                    O.g.push(4);
                    O.j[4] = xd("top", X)
                }
                var Hb = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var Ib = f.g.url.match(Jc),
                        va = Ib[1],
                        ud = Ib[3],
                        vd = Ib[4];
                    X = "";
                    va && (X += va + ":");
                    ud && (X += "//", X += ud, vd && (X += ":" + vd));
                    var wd = X
                } else wd = "";
                va = N;
                Hb = [Hb, {
                    url: wd
                }];
                va.g.push(5);
                va.j[5] = Hb;
                Hd(this.u, e, N, this.j, c)
            } catch (N) {
                try {
                    Hd(this.u, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Dd(N),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (Wa) {}
            }
            return this.l
        }
    };
    var Jd = class extends x {
        constructor() {
            super()
        }
    };

    function Kd(a, b) {
        try {
            const c = d => [{
                [d.Ia]: d.Fa
            }];
            return JSON.stringify([a.filter(d => d.ra).map(c), Yb(b), a.filter(d => !d.ra).map(c)])
        } catch (c) {
            return Ld(c, b), ""
        }
    }

    function Ld(a, b) {
        try {
            var c = Dd(a instanceof Error ? a : Error(String(a))),
                d = Ob(b, 1);
            var e = d == null ? d : Number.isFinite(d) ? d | 0 : void 0;
            cd({
                m: c,
                b: (e ? ? 0) || null,
                v: Xb(Bb(Ob(b, 2)), "") || null
            })
        } catch (f) {}
    }
    var Md = class {
        constructor(a, b) {
            var c = new Jd;
            a = v(c, 1, a == null ? a : xb(a), 0);
            b = w(a, 2, b);
            a = b.G;
            c = a[t];
            this.i = c & 2 ? b : Mb(b, a, c)
        }
    };
    var Nd = class extends x {
        constructor() {
            super()
        }
        L(a) {
            return v(this, 2, a == null ? a : xb(a), 0)
        }
    };
    var Od = class extends x {
            constructor() {
                super()
            }
        },
        Pd = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14];
    var Qd = class extends x {
        constructor() {
            super()
        }
    };
    var Rd = class extends x {
        constructor() {
            super()
        }
    };
    var Sd = class extends x {
        constructor() {
            super()
        }
    };
    var Td = class extends x {
            constructor() {
                super()
            }
        },
        Ud = [4, 6];
    class Vd extends Md {
        constructor() {
            super(...arguments)
        }
    }

    function Wd(a, ...b) {
        Xd(a, ...b.map(c => ({
            ra: !0,
            Ia: 3,
            Fa: Yb(c)
        })))
    }

    function Yd(a, ...b) {
        Xd(a, ...b.map(c => ({
            ra: !0,
            Ia: 7,
            Fa: Yb(c)
        })))
    }
    var Zd = class extends Vd {};
    var $d = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Xd(a, ...b) {
        try {
            a.A && Kd(a.g.concat(b), a.i).length >= 65536 && ae(a), a.u && !a.l && (a.l = !0, be(a.u, () => {
                ae(a)
            })), a.g.push(...b), a.g.length >= a.o && ae(a), a.g.length && a.j === null && (a.j = setTimeout(() => {
                ae(a)
            }, a.C))
        } catch (c) {
            Ld(c, a.i)
        }
    }

    function ae(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = Kd(a.g, a.i);
            a.H("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var de = class extends Zd {
            constructor(a, b, c, d) {
                super(2, ce());
                this.H = $d;
                this.C = a;
                this.o = b;
                this.A = c;
                this.u = d;
                this.g = [];
                this.j = null;
                this.l = !1
            }
        },
        ee = class extends de {
            constructor(a = 1E3, b = 100, c = !1, d) {
                super(a, b, c && !0, d)
            }
        };
    var D = a => {
        var b = "pa";
        if (a.pa && a.hasOwnProperty(b)) return a.pa;
        b = new a;
        return a.pa = b
    };

    function E(a, b, c) {
        return b[a] || c
    };

    function fe(a, b) {
        a.g = () => E(3, b, () => [])(1)
    }
    class ge {
        g() {
            return []
        }
    };

    function Hd(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Cd ? f = c : (f = new Cd, Mc(c, (h, l) => {
                var m = f;
                const q = m.u++;
                h = xd(l, h);
                m.g.push(q);
                m.j[q] = h
            }));
            const g = Bd(f, "/pagead/gen_204?id=" + b + "&");
            g && $c(k, g)
        } catch (f) {}
    }

    function he(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class ie {
        constructor() {
            this.g = Math.random()
        }
    };
    let je, ke;
    const le = new sd(window);
    (a => {
        je = a ? ? new ie;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        he(je, window.google_srt);
        ke = new Id(je, !0, le);
        Ed(ke, () => {});
        ke.j = !0;
        window.document.readyState == "complete" ? window.google_measure_js_timing || rd(le) : le.g && y(window, "load", () => {
            window.google_measure_js_timing || rd(le)
        })
    })();
    let me, C;
    const ne = new sd(k);
    ((a, b = !0) => {
        me = a || new ie;
        typeof k.google_srt !== "number" && (k.google_srt = Math.random());
        he(me, k.google_srt);
        C = new Id(me, b, ne);
        C.j = !0;
        k.document.readyState == "complete" ? k.google_measure_js_timing || rd(ne) : ne.g && y(k, "load", () => {
            k.google_measure_js_timing || rd(ne)
        })
    })();
    var F = (a, b) => Gd(a, b);

    function oe(a) {
        if (pe) var b = pe;
        else {
            var c = dd() || window;
            b = c.google_persistent_state_async;
            b = b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? pe = b : c.google_persistent_state_async = pe = new qe
        }
        c = re[33] || "google_ps_33";
        b = b.S;
        const d = b[c];
        return d === void 0 ? (b[c] = a(), b[c]) : d
    }
    var qe = class {
            constructor() {
                this.S = {}
            }
        },
        pe = null;
    const re = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function se(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };

    function G() {
        this.u = this.u;
        this.H = this.H
    }
    G.prototype.u = !1;
    G.prototype.dispose = function() {
        this.u || (this.u = !0, this.j())
    };
    G.prototype[ha(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function H(a, b) {
        a.u ? b() : (a.H || (a.H = []), a.H.push(b))
    }
    G.prototype.j = function() {
        if (this.H)
            for (; this.H.length;) this.H.shift()()
    };
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    gc({
        hb: 0,
        gb: 1,
        bb: 2,
        Wa: 3,
        eb: 4,
        Xa: 5,
        fb: 6,
        Za: 7,
        ab: 8,
        Va: 9,
        Ya: 10,
        ib: 11
    });
    gc({
        kb: 0,
        lb: 1,
        jb: 2
    });

    function ce() {
        return "m202408130101"
    };
    var I = class {
        constructor(a, b = 0) {
            this.g = a;
            this.defaultValue = b
        }
    };
    var te = new I(1130, 100),
        ue = new I(658370512),
        ve = new I(1085, 5),
        we = new I(63, 30),
        xe = new I(1080, 5),
        ye = new I(1027, 10),
        ze = new I(57, 120),
        Ae = new I(1050, 30),
        Be = new I(58, 120),
        Ce = new class {
            constructor(a, b = !1) {
                this.defaultValue = b
            }
        }(10005, !0),
        De = new I(550718588, 250);

    function Ee(a) {
        var b = new Fe,
            c = b.G;
        const d = c[t] | 0;
        hb(b.G[t]);
        var e = d & 2;
        b = Pb(c, d, 1, !1);
        Array.isArray(b) || (b = fb);
        const f = !!(d & 32);
        let g = b[t] | 0;
        g === 0 && f && !e ? (g |= 33, b[t] = g) : g & 1 || (g |= 1, b[t] = g);
        if (e) g & 2 || (b[t] |= 34), Object.freeze(b);
        else if (2 & g || 2048 & g) b = Xa(b), e = 1, f && (e |= 32), b[t] = e, u(c, d, 1, b, !1);
        c = b;
        if (Array.isArray(a))
            for (var h = 0; h < a.length; h++) c.push(xb(a[h]));
        else
            for (h of a) c.push(xb(h))
    }
    var Fe = class extends x {
        constructor() {
            super()
        }
    };
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var Ge = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    class He {
        constructor(a) {
            for (var b = Array(36), c = 0, d, e = 0; e < 36; e++) e == 8 || e == 13 || e == 18 || e == 23 ? b[e] = "-" : e == 14 ? b[e] = "4" : (c <= 2 && (c = 33554432 + Math.random() * 16777216 | 0), d = c & 15, c >>= 4, b[e] = Ge[e == 19 ? d & 3 | 8 : d]);
            this.uuid = b.join("");
            this.callback = a
        }
    }

    function Ie(a) {
        const b = k.imalib_globalCallbacks || new Map,
            c = b.get("AFMA_updateActiveView") || [];
        if (c.length === 0 && k.AFMA_updateActiveView) {
            const d = new He(k.AFMA_updateActiveView);
            c.push(d);
            k.AFMA_updateActiveView = void 0
        }
        k.AFMA_updateActiveView || (k.AFMA_updateActiveView = function() {
            const d = b.get("AFMA_updateActiveView");
            for (const e of d) e.callback.apply(null, arguments)
        });
        a = new He(a);
        c.push(a);
        b.set("AFMA_updateActiveView", c);
        k.imalib_globalCallbacks = b;
        return a.uuid
    }

    function Je(a) {
        if (k.AFMA_updateActiveView) {
            var b = k.imalib_globalCallbacks;
            if (b) {
                var c = b.get("AFMA_updateActiveView");
                if (c) {
                    var d = c.findIndex(e => e.uuid === a);
                    d !== -1 && (c.splice(d, 1), c.length === 0 && (k.AFMA_updateActiveView = void 0), b.set("AFMA_updateActiveView", c), k.imalib_globalCallbacks = b)
                }
            }
        }
    };
    Ee([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16, 19, 20, 21]);
    Ee([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 18, 19, 20, 21]);
    Ee([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 17, 18, 19, 20, 21]);
    new Fe;
    var Ke = (k.navigator ? k.navigator.userAgent : "").indexOf("Android") != -1;

    function J(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = !1
    }
    J.prototype.j = function() {
        this.defaultPrevented = !0
    };
    var K = class {
            constructor(a, b) {
                this.messageName = a;
                this.parameters = b || {}
            }
        },
        Le = class extends J {
            constructor(a, b) {
                super(a.messageName, b);
                this.params = a.parameters || {}
            }
        };

    function Me(a, {
        data: b,
        source: c
    }) {
        if (c && b) {
            var d = a.i,
                e = b.messageName;
            b = b.parameters;
            if (a.u) switch (e) {
                case "mraid_loaded":
                    e = b.is_top_win;
                    e === !1 && (a.l = !0, a.j = Ie(f => {
                        a.u && Ne(a, new K("update_activeview_action", f))
                    }), d.indexOf(c) === -1 && (d.push(c), typeof c.postMessage !== "undefined" && c.postMessage(new K("mraid_env_obj", window.MRAID_ENV), "*")));
                    break;
                case "start_tracking_action":
                    a.g == 0 && window.AFMA_SendMessage("trackActiveViewUnit");
                    a.g += 1;
                    break;
                case "stop_tracking_action":
                    --a.g;
                    a.g == 0 && (window.AFMA_SendMessage("untrackActiveViewUnit", {
                        hashCode: b.hashCode
                    }), a.j && (Je(a.j), a.j = null));
                    break;
                case "register_iframe_window_action":
                    e = b.is_top_win;
                    e === !1 && d.indexOf(c) === -1 && d.push(c);
                    break;
                case "receive_message_action":
                    b.messageName == "disableMraidOpen" && window.AFMA_ReceiveMessage(b.messageName, b.parameters)
            } else switch (e) {
                case "mraid_env_obj":
                    window.MRAID_ENV = b;
                    break;
                case "update_activeview_action":
                    window.AFMA_updateActiveView && window.AFMA_updateActiveView(b);
                    break;
                case "receive_message_action":
                    window.AFMA_ReceiveMessage(b.messageName,
                        b.parameters)
            }
        }
    }

    function Ne(a, b) {
        a.i.forEach(c => c.postMessage(b, "*"))
    }
    class Oe {
        constructor() {
            this.i = [];
            this.u = window === window.top;
            this.l = !1;
            this.g = 0;
            this.j = null;
            typeof window.addEventListener !== "undefined" && window.addEventListener("message", a => Me(this, a))
        }
    };

    function Pe(a) {
        var b = pc("gmsg://mobileads.google.com/" + a.messageName);
        return Ac(b, new Map(Object.entries(a.parameters)))
    };

    function Qe(a, b) {
        J.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.i = null;
        a && this.init(a, b)
    }
    qa(Qe, J);
    Qe.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.g = b;
        b = a.relatedTarget;
        b || (c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement));
        this.relatedTarget = b;
        d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ? a.clientX : a.pageX, this.clientY = a.clientY !==
            void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = a.pointerType;
        this.state = a.state;
        this.i = a;
        a.defaultPrevented && Qe.Y.j.call(this)
    };
    Qe.prototype.j = function() {
        Qe.Y.j.call(this);
        var a = this.i;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var Re = "closure_listenable_" + (Math.random() * 1E6 | 0);
    var Se = 0;

    function Te(a, b, c, d, e) {
        this.listener = a;
        this.proxy = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ca = e;
        this.key = ++Se;
        this.W = this.Z = !1
    }

    function Ue(a) {
        a.W = !0;
        a.listener = null;
        a.proxy = null;
        a.src = null;
        a.ca = null
    };

    function Ve(a) {
        this.src = a;
        this.g = {};
        this.j = 0
    }
    Ve.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.j++);
        var g = We(a, b, d, e);
        g > -1 ? (b = a[g], c || (b.Z = !1)) : (b = new Te(b, this.src, f, !!d, e), b.Z = c, a.push(b));
        return b
    };

    function Xe(a, b, c, d, e) {
        b = b.toString();
        if (b in a.g) {
            var f = a.g[b];
            c = We(f, c, d, e);
            c > -1 && (Ue(f[c]), Array.prototype.splice.call(f, c, 1), f.length == 0 && (delete a.g[b], a.j--))
        }
    }

    function Ye(a, b) {
        var c = b.type;
        c in a.g && Ma(a.g[c], b) && (Ue(b), a.g[c].length == 0 && (delete a.g[c], a.j--))
    }

    function We(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.W && f.listener == b && f.capture == !!c && f.ca == d) return e
        }
        return -1
    };
    var Ze = "closure_lm_" + (Math.random() * 1E6 | 0),
        $e = {},
        af = 0;

    function bf(a, b, c, d, e) {
        if (d && d.once) return cf(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) bf(a, b[f], c, d, e);
            return null
        }
        c = df(c);
        return a && a[Re] ? a.listen(b, c, ka(d) ? !!d.capture : !!d, e) : ef(a, b, c, !1, d, e)
    }

    function ef(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = ka(e) ? !!e.capture : !!e,
            h = ff(a);
        h || (a[Ze] = h = new Ve(a));
        c = h.add(b, c, d, g, f);
        if (c.proxy) return c;
        d = gf();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) e === void 0 && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(hf(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        af++;
        return c
    }

    function gf() {
        function a(c) {
            return b.call(a.src, a.listener, c)
        }
        const b = jf;
        return a
    }

    function cf(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) cf(a, b[f], c, d, e);
            return null
        }
        c = df(c);
        return a && a[Re] ? a.g.add(String(b), c, !0, ka(d) ? !!d.capture : !!d, e) : ef(a, b, c, !0, d, e)
    }

    function kf(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) kf(a, b[f], c, d, e);
        else(d = ka(d) ? !!d.capture : !!d, c = df(c), a && a[Re]) ? Xe(a.g, String(b), c, d, e) : a && (a = ff(a)) && (b = a.g[b.toString()], a = -1, b && (a = We(b, c, d, e)), (c = a > -1 ? b[a] : null) && lf(c))
    }

    function lf(a) {
        if (typeof a !== "number" && a && !a.W) {
            var b = a.src;
            if (b && b[Re]) Ye(b.g, a);
            else {
                var c = a.type,
                    d = a.proxy;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(hf(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                af--;
                (c = ff(b)) ? (Ye(c, a), c.j == 0 && (c.src = null, b[Ze] = null)) : Ue(a)
            }
        }
    }

    function hf(a) {
        return a in $e ? $e[a] : $e[a] = "on" + a
    }

    function jf(a, b) {
        if (a.W) a = !0;
        else {
            b = new Qe(b, this);
            var c = a.listener,
                d = a.ca || a.src;
            a.Z && lf(a);
            a = c.call(d, b)
        }
        return a
    }

    function ff(a) {
        a = a[Ze];
        return a instanceof Ve ? a : null
    }
    var mf = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0);

    function df(a) {
        if (typeof a === "function") return a;
        a[mf] || (a[mf] = function(b) {
            return a.handleEvent(b)
        });
        return a[mf]
    };

    function nf(a) {
        G.call(this);
        this.i = a;
        this.g = {}
    }
    qa(nf, G);
    var of = [];
    nf.prototype.listen = function(a, b, c, d) {
        Array.isArray(b) || (b && ( of [0] = b.toString()), b = of );
        for (var e = 0; e < b.length; e++) {
            var f = bf(a, b[e], c || this.handleEvent, d || !1, this.i || this);
            if (!f) break;
            this.g[f.key] = f
        }
        return this
    };

    function pf(a) {
        fc(a.g, function(b, c) {
            this.g.hasOwnProperty(c) && lf(b)
        }, a);
        a.g = {}
    }
    nf.prototype.j = function() {
        nf.Y.j.call(this);
        pf(this)
    };
    nf.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function L() {
        G.call(this);
        this.g = new Ve(this);
        this.I = this;
        this.A = null
    }
    qa(L, G);
    L.prototype[Re] = !0;
    L.prototype.addEventListener = function(a, b, c, d) {
        bf(this, a, b, c, d)
    };
    L.prototype.removeEventListener = function(a, b, c, d) {
        kf(this, a, b, c, d)
    };

    function qf(a, b) {
        var c, d = a.A;
        if (d)
            for (c = []; d; d = d.A) c.push(d);
        a = a.I;
        d = b.type || b;
        if (typeof b === "string") b = new J(b, a);
        else if (b instanceof J) b.target = b.target || a;
        else {
            var e = b;
            b = new J(d, a);
            jc(b, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; f >= 0; f--) {
                var g = b.g = c[f];
                e = rf(g, d, !0, b) && e
            }
        g = b.g = a;
        e = rf(g, d, !0, b) && e;
        e = rf(g, d, !1, b) && e;
        if (c)
            for (f = 0; f < c.length; f++) g = b.g = c[f], e = rf(g, d, !1, b) && e
    }
    L.prototype.j = function() {
        L.Y.j.call(this);
        if (this.g) {
            var a = this.g,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, Ue(d[e]);
                delete a.g[c];
                a.j--
            }
        }
        this.A = null
    };
    L.prototype.listen = function(a, b, c, d) {
        return this.g.add(String(a), b, !1, c, d)
    };

    function rf(a, b, c, d) {
        b = a.g.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.W && g.capture == c) {
                var h = g.listener,
                    l = g.ca || g.src;
                g.Z && Ye(a.g, g);
                e = h.call(l, d) !== !1 && e
            }
        }
        return e && !d.defaultPrevented
    };

    function M(a, b) {
        L.call(this);
        this.o = a || 1;
        this.l = b || k;
        this.C = na(this.J, this);
        this.D = Date.now()
    }
    qa(M, L);
    M.prototype.enabled = !1;
    M.prototype.i = null;
    M.prototype.J = function() {
        if (this.enabled) {
            const a = Date.now() - this.D;
            a > 0 && a < this.o * .8 ? this.i = this.l.setTimeout(this.C, this.o - a) : (this.i && (this.l.clearTimeout(this.i), this.i = null), qf(this, "tick"), this.enabled && (sf(this), this.start()))
        }
    };
    M.prototype.start = function() {
        this.enabled = !0;
        this.i || (this.i = this.l.setTimeout(this.C, this.o), this.D = Date.now())
    };

    function sf(a) {
        a.enabled = !1;
        a.i && (a.l.clearTimeout(a.i), a.i = null)
    }
    M.prototype.j = function() {
        M.Y.j.call(this);
        sf(this);
        delete this.l
    };

    function tf() {
        if (window.googleJsEnvironment && (window.googleJsEnvironment.environment == "rhino" || window.googleJsEnvironment.environment == "jscore")) return new uf;
        if (Ke && window.googleAdsJsInterface && "notify" in window.googleAdsJsInterface) try {
            return window.googleAdsJsInterface.notify("gmsg://mobileads.google.com/noop"), new uf
        } catch (a) {} else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.gadGMSGHandler) return new vf;
        return new wf
    }

    function xf() {
        yf || (yf = tf());
        return yf
    }
    var yf = null,
        zf = class extends G {};

    function Af(a) {
        const b = hc(a.parameters);
        b["google.afma.Notify_dt"] = (new Date).getTime();
        return Pe(new K(a.messageName, b)).toString()
    }
    var Bf = class extends zf {
            constructor(a) {
                super();
                this.A = a;
                this.o = [];
                this.l = new M(1);
                this.C = new nf(this);
                this.C.listen(this.l, "tick", this.D)
            }
            sendMessage(a) {
                this.o.push(a);
                this.l.enabled || (a = this.o.shift(), this.A(a), this.l.start())
            }
            D() {
                const a = this.o.shift();
                a ? this.A(a) : sf(this.l)
            }
        },
        wf = class extends Bf {
            constructor() {
                super(a => {
                    var b = this.g[this.i];
                    b || (b = Ec(document, "IFRAME"), b.id = "afma-notify-" + (new Date).getTime(), b.style.display = "none", this.g[this.i] = b);
                    this.i = (this.i + 1) % 25;
                    const c = hc(a.parameters);
                    c["google.afma.Notify_dt"] = (new Date).getTime();
                    var d = b;
                    a = Pe(new K(a.messageName, c));
                    d.src = nc(a).toString();
                    b.parentNode || document.body.appendChild(b)
                });
                this.g = [];
                this.i = 0
            }
            j() {
                this.g.forEach(Fc);
                this.g = [];
                super.j()
            }
        },
        uf = class extends zf {
            sendMessage(a) {
                a = Af(a);
                window.googleAdsJsInterface && window.googleAdsJsInterface.notify && (window.googleAdsJsInterface.notify(a), window.googleAdsJsInterface.DEBUG && console.log(a))
            }
        },
        vf = class extends zf {
            sendMessage(a) {
                a = Af(a);
                window.webkit && window.webkit.messageHandlers &&
                    window.webkit.messageHandlers.gadGMSGHandler && window.webkit.messageHandlers.gadGMSGHandler.postMessage(a)
            }
        };
    var Df = class extends L {
        constructor() {
            super();
            this.l = xf();
            this.l = xf();
            H(this, oa(se, this.l));
            this.i = {};
            this.o = new Oe
        }
        sendMessage(a, b) {
            let c;
            typeof a === "string" ? c = new K(a, b) : a instanceof K && (c = a);
            document.readyState == "loading" ? cf(k, "DOMContentLoaded", () => this.l.sendMessage(c), !1, this) : this.l.sendMessage(c)
        }
        receiveMessage(a, b) {
            if (this.shouldForwardMessageToIframe()) this.forwardMessage(new K("receive_message_action", new K(a, b)));
            else {
                const c = document.getElementById("ad_iframe");
                c != void 0 && c.contentWindow !=
                    void 0 && c.contentWindow.AFMA_ReceiveMessage != void 0 && c.contentWindow.AFMA_ReceiveMessage(a, b)
            }
            a == "onshow" && document.readyState == "loading" ? cf(k, "DOMContentLoaded", () => Cf(a, b ? ? void 0)) : qf(this, new Le(new K(a, b), this))
        }
        addObserver(a, b, c) {
            const d = e => void c.call(b, e.type, e.params);
            this.listen(a, d);
            this.i[a] || (this.i[a] = {});
            this.i[a][b] = d
        }
        removeObserver(a, b) {
            this.i[a] && this.i[a][b] && (Xe(this.g, String(a), this.i[a][b]), delete this.i[a][b])
        }
        shouldForwardMessageToIframe() {
            return this.o.l
        }
        forwardMessage(a) {
            Ne(this.o,
                a)
        }
    };

    function Q(a, b) {
        k.AFMA_Communicator ? k.AFMA_Communicator.sendMessage(a, b) : Ef(a, b)
    }

    function Ef(a, b) {
        document.readyState == "loading" ? (a = na(Ef, null, a, b), cf(k, "DOMContentLoaded", a, !1)) : (a = new K(a, b), xf().sendMessage(a))
    }

    function Cf(a, b) {
        k.AFMA_Communicator.receiveMessage(a, b)
    }

    function Gf(a, b, c, d) {
        k.AFMA_Communicator.removeEventListener(a, b, c, d)
    }

    function Hf(a, b, c, d) {
        k.AFMA_Communicator.addEventListener(a, b, c, d)
    }

    function If(a, b, c) {
        k.AFMA_Communicator.addObserver(a, b, c)
    }

    function Jf(a, b) {
        k.AFMA_Communicator.removeObserver(a, b)
    }
    k.AFMA_Communicator || (pa("AFMA_AddEventListener", Hf), pa("AFMA_RemoveEventListener", Gf), pa("AFMA_AddObserver", If), pa("AFMA_RemoveObserver", Jf), pa("AFMA_ReceiveMessage", Cf), pa("AFMA_SendMessage", Q), k.AFMA_Communicator = new Df);
    var Kf = class {
        constructor(a) {
            this.g = a;
            Hf("h5adsEvent", b => void this.g(b))
        }
        na(a, b) {
            Q("h5ads", {
                obj_id: a,
                action: "create_interstitial_ad",
                ad_unit: b
            })
        }
        oa(a, b) {
            Q("h5ads", {
                obj_id: a,
                ad_unit: b,
                action: "create_rewarded_ad"
            })
        }
        dispose(a) {
            Q("h5ads", {
                obj_id: a,
                action: "dispose"
            })
        }
    };
    class R {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function Lf(a) {
        a.extras === void 0 && (a.extras = {});
        a.extras.highfive = "1";
        return encodeURIComponent(JSON.stringify(a))
    }
    class Mf extends G {
        constructor(a, b) {
            super();
            this.id = a;
            this.g = b
        }
        load(a, b) {
            this.u || (this.listener = b, b = this.id, a = Lf(a), Q("h5ads", {
                obj_id: b,
                action: "load_interstitial_ad",
                ad_request: a
            }))
        }
        show() {
            if (!this.u) {
                if (this.listener == null) throw Error("load must be called before show");
                Q("h5ads", {
                    obj_id: this.id,
                    action: "show_interstitial_ad"
                })
            }
        }
        j() {
            this.g.u.dispose(this.id);
            super.j()
        }
    }
    class Nf extends G {
        constructor(a, b) {
            super();
            this.id = a;
            this.g = b
        }
        load(a, b) {
            this.u || (this.listener = b, b = this.id, a = Lf(a), Q("h5ads", {
                obj_id: b,
                action: "load_rewarded_ad",
                ad_request: a
            }))
        }
        show() {
            if (!this.u) {
                if (this.listener == null) throw Error("load must be called before show");
                Q("h5ads", {
                    obj_id: this.id,
                    action: "show_rewarded_ad"
                })
            }
        }
        j() {
            this.g.u.dispose(this.id);
            super.j()
        }
    }

    function Of(a) {
        const b = a.l;
        a.l += 1;
        return b
    }
    var Pf = class {
        constructor() {
            this.l = 0;
            this.ads = new Map;
            this.g = new Map;
            this.i = new R;
            this.j = 0;
            this.u = new Kf(a => {
                a = a.params;
                switch (a.eventCategory) {
                    case "initialize":
                        this.ads.clear();
                        this.g.clear();
                        this.j = 3;
                        this.i.resolve(this);
                        break;
                    case "creation":
                        var b = a.objectId;
                        switch (a.event) {
                            case "nativeObjectCreated":
                                if (a = this.g.get(b)) this.g.delete(b), this.ads.set(b, a.ad), a.M.resolve(a.ad);
                                return;
                            case "nativeObjectNotCreated":
                                if (a = this.g.get(b)) this.g.delete(b), a.ad.dispose(), a.M.reject(Error("Native object not created"));
                                return;
                            default:
                                return
                        }
                    case "interstitial":
                        if ((b = this.ads.get(a.objectId)) && b instanceof Mf && b.listener) switch (a.event) {
                            case "onAdLoaded":
                                b.listener.P ? .(b);
                                break;
                            case "onAdFailedToLoad":
                                b.listener.O ? .(b, a.errorCode);
                                break;
                            case "onAdOpened":
                                b.listener.Qa ? .(b);
                                break;
                            case "onAdClicked":
                                b.listener.pb ? .(b);
                                break;
                            case "onAdClosed":
                                b.listener.K ? .(b);
                                break;
                            case "onNativeAdObjectNotAvailable":
                                b.listener.R ? .(b)
                        }
                        break;
                    case "rewarded":
                        if ((b = this.ads.get(a.objectId)) && b instanceof Nf && b.listener) switch (a.event) {
                            case "onRewardedAdLoaded":
                                b.listener.P ? .(b);
                                break;
                            case "onRewardedAdFailedToLoad":
                                b.listener.O ? .(b, a.errorCode);
                                break;
                            case "onRewardedAdOpened":
                                b.listener.Qa ? .(b);
                                break;
                            case "onRewardedAdFailedToShow":
                                b.listener.Pa ? .(b, a.errorCode);
                                break;
                            case "onUserEarnedReward":
                                b.listener.Ra ? .(b);
                                break;
                            case "onRewardedAdClosed":
                                b.listener.K ? .(b);
                                break;
                            case "onNativeAdObjectNotAvailable":
                                b.listener.R ? .(b)
                        }
                }
            })
        }
        connect() {
            switch (this.j) {
                case 3:
                    return Promise.resolve(this);
                case 1:
                    return this.i.promise;
                default:
                    return this.j = 1, this.i = new R, Q("h5ads", {
                            action: "initialize"
                        }),
                        setTimeout(() => {
                            this.j !== 3 && (this.j = 2, this.i.reject(Error("GmaBridge could not connect to SDK after 10000 ms.")))
                        }, 1E4), this.i.promise
            }
        }
        na(a) {
            if (this.j !== 3) return Promise.reject(Error("GmaBridge is not connected"));
            const b = Of(this),
                c = new R;
            this.g.set(b, {
                M: c,
                ad: new Mf(b, this)
            });
            this.u.na(b, a);
            return c.promise
        }
        oa(a) {
            if (this.j !== 3) return Promise.reject(Error("GmaBridge is not connected"));
            const b = Of(this),
                c = new R;
            this.g.set(b, {
                M: c,
                ad: new Nf(b, this)
            });
            this.u.oa(b, a);
            return c.promise
        }
    };
    let Qf = null;
    var Rf = {},
        Sf = {};

    function Tf() {
        throw Error("Do not instantiate directly");
    }
    Tf.prototype.Ba = null;
    Tf.prototype.toString = function() {
        return this.fa
    };
    Tf.prototype.ta = function() {
        if (this.aa !== Rf) throw Error("Sanitized content was not of kind HTML.");
        return wc(this.toString())
    };

    function Uf() {
        Tf.call(this)
    }
    qa(Uf, Tf);
    Uf.prototype.aa = Rf;

    function Vf(a) {
        if (a != null) switch (a.Ba) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }
    var S = function(a) {
        function b(c) {
            this.fa = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.Ba = d);
            return c
        }
    }(Uf);

    function Wf(a) {
        return Xf(String(a), () => "").replace(Yf, "&lt;")
    }
    const Zf = RegExp.prototype.hasOwnProperty("sticky"),
        $f = new RegExp((Zf ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", Zf ? "gy" : "g");

    function Xf(a, b) {
        const c = [],
            d = a.length;
        let e = 0,
            f = [],
            g, h, l = 0;
        for (; l < d;) {
            switch (e) {
                case 0:
                    var m = a.indexOf("<", l);
                    if (m < 0) {
                        if (c.length === 0) return a;
                        c.push(a.substring(l));
                        l = d
                    } else c.push(a.substring(l, m)), h = m, l = m + 1, Zf ? ($f.lastIndex = l, m = $f.exec(a)) : ($f.lastIndex = 0, m = $f.exec(a.substring(l))), m ? (f = ["<", m[0]], g = m[1], e = 1, l += m[0].length) : c.push("<");
                    break;
                case 1:
                    m = a.charAt(l++);
                    switch (m) {
                        case "'":
                        case '"':
                            let q = a.indexOf(m, l);
                            q < 0 ? l = d : (f.push(m, a.substring(l, q + 1)), l = q + 1);
                            break;
                        case ">":
                            f.push(m);
                            c.push(b(f.join(""),
                                g));
                            e = 0;
                            f = [];
                            h = g = null;
                            break;
                        default:
                            f.push(m)
                    }
                    break;
                default:
                    throw Error();
            }
            e === 1 && l >= d && (l = h + 1, c.push("<"), e = 0, f = [], h = g = null)
        }
        return c.join("")
    }

    function ag(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function T(a) {
        return a != null && a.aa === Rf ? String(Wf(a.fa)).replace(bg, cg) : String(a).replace(dg, cg)
    }

    function U(a) {
        a != null && a.aa === Sf ? a = ag(a.fa) : a == null ? a = "" : a instanceof sc ? a = ag(rc(a)) : (a = String(a), a = eg.test(a) ? a : "zSoyz");
        return a
    }
    const fg = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function cg(a) {
        return fg[a]
    }
    const dg = /[\x00\x22\x26\x27\x3c\x3e]/g,
        bg = /[\x00\x22\x27\x3c\x3e]/g,
        eg = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        gg =
        /^[a-zA-Z0-9+\/_-]+={0,2}$/,
        Yf = /</g;
    var hg = class extends x {};
    let ig = void 0;

    function jg(a) {
        pb(ig, ub);
        ig = a
    };
    var kg = class {
        constructor() {
            const a = {};
            this.i = (b, c) => a[b] != null ? a[b] : c;
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? a[b] : c;
            this.o = (b, c) => a[b] != null ? a[b] : c;
            this.u = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.g = () => {}
        }
    };

    function Y(a) {
        return D(kg).j(a.g, a.defaultValue)
    };
    class lg {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new mg;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.sideRailMutationCallbacks = [];
            this.clickTriggeredInterstitialMayBeDisplayed = !1
        }
    }
    var mg = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function ng(a) {
        const b = og(a);
        Ka(a.g.maxZIndexListeners, c => c(b))
    }

    function og(a) {
        a = Nc(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class pg {
        constructor(a) {
            a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map), a.google_reactive_ads_global_state.sideRailMutationCallbacks ==
                null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = [])) : a.google_reactive_ads_global_state = new lg;
            this.g = a.google_reactive_ads_global_state.floatingAdsStacking
        }
        addListener(a) {
            this.g.maxZIndexListeners.push(a);
            a(og(this))
        }
        removeListener(a) {
            Na(this.g.maxZIndexListeners, b => b === a)
        }
    }
    class qg {
        constructor(a) {
            this.j = a;
            this.g = null
        }
    };

    function rg(a) {
        const b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Ka(Object.keys(b), c => {
            var d = a.style[Cc(c)];
            (typeof d !==
                "undefined" ? d : a.style[ed(a, c)]) || A(a, c, b[c])
        });
        Sc(a)
    };
    const sg = (a, b) => {
        const c = Yc("STYLE", a);
        c.textContent = rc(yc `* { pointer-events: none; }`);
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    };
    var ug = (a, b, c) => {
        if (!a.body) return null;
        const d = new tg;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && sg(b.document, e);
            A(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.i,
                position: d.u,
                top: d.l
            });
            b.scrollTo(0, d.j)
        }
    };
    class tg {
        constructor() {
            this.g = this.l = this.u = this.i = null;
            this.j = 0
        }
        apply(a, b) {
            this.i = a.body.style.overflow;
            this.u = a.body.style.position;
            this.l = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.j = b.pageYOffset === void 0 ? (b.document.documentElement || b.document.body.parentNode || b.document.body).scrollTop : b.pageYOffset;
            A(a.body, "top", -this.j + "px")
        }
    };

    function vg(a, b) {
        var c;
        if (!a.i)
            for (a.i = [], c = a.g.parentElement; c;) {
                a.i.push(c);
                if (a.I(c)) break;
                c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null
            }
        c = a.i.slice();
        let d, e;
        for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    }
    var wg = class extends G {
        constructor(a, b, c) {
            super();
            this.g = a;
            this.T = b;
            this.C = c;
            this.i = null;
            H(this, () => this.i = null)
        }
        I(a) {
            return this.C === a
        }
    };

    function xg(a, b) {
        const c = a.C;
        if (c)
            if (b) {
                b = a.D;
                if (b.g == null) {
                    var d = b.j;
                    const e = d.g.nextRestrictionId++;
                    d.g.maxZIndexRestrictions[e] = 2147483646;
                    ng(d);
                    b.g = e
                }
                Pc(c, {
                    display: "block"
                });
                a.A.body && !a.l && (a.l = ug(a.A, a.T, a.N));
                c.setAttribute("tabindex", "0");
                c.setAttribute("aria-hidden", "false");
                a.A.body.setAttribute("aria-hidden", "true")
            } else b = a.D, b.g != null && (d = b.j, delete d.g.maxZIndexRestrictions[b.g], ng(d), b.g = null), Pc(c, {
                    display: "none"
                }), a.l && (a.l(), a.l = null), a.A.body.setAttribute("aria-hidden", "false"),
                c.setAttribute("aria-hidden", "true")
    }

    function yg(a) {
        xg(a, !1);
        const b = a.C;
        if (b) {
            var c = zg(a.J);
            vg(a, d => {
                Pc(d, c);
                rg(d)
            });
            a.g.setAttribute("width", "");
            a.g.setAttribute("height", "");
            A(a.g, c);
            A(a.g, Ag);
            A(b, Bg);
            A(b, {
                background: "transparent"
            });
            Pc(b, {
                display: "none",
                position: "fixed"
            });
            rg(b);
            rg(a.g);
            Zc(a.J) <= 1 || (A(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }), Sc(b))
        }
    }
    class Cg extends wg {
        constructor(a, b) {
            var c = window,
                d = Y(De);
            super(a, c, b);
            this.l = null;
            this.A = c.document;
            this.N = d;
            a = new pg(c);
            this.D = new qg(a);
            this.J = c
        }
        o() {
            xg(this, !1)
        }
    }

    function zg(a) {
        a = Zc(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    }
    var Bg = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        Ag = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var Dg = class extends Cg {
        constructor(a, b) {
            super(a, b);
            yg(this)
        }
        I(a) {
            a.classList ? a = a.classList.contains("adsbygoogle") : (a = a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], a = Ja(a, "adsbygoogle") >= 0);
            return a
        }
    };

    function Eg() {
        const a = window.google_ad_modifications = window.google_ad_modifications || {};
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function be(a, b) {
        a.i.size > 0 || Fg(a);
        const c = a.i.get(0);
        c ? c.push(b) : a.i.set(0, [b])
    }

    function Gg(a, b, c, d) {
        y(b, c, d);
        H(a, () => ec(b, c, d))
    }

    function Hg(a, b) {
        a.state !== 1 && (a.state = 1, a.i.size > 0 && Ig(a, b))
    }

    function Fg(a) {
        a.g.document.visibilityState ? Gg(a, a.g.document, "visibilitychange", b => {
            a.g.document.visibilityState === "hidden" && Hg(a, b);
            a.g.document.visibilityState === "visible" && (a.state = 0)
        }) : "onpagehide" in a.g ? (Gg(a, a.g, "pagehide", b => {
            Hg(a, b)
        }), Gg(a, a.g, "pageshow", () => {
            a.state = 0
        })) : Gg(a, a.g, "beforeunload", b => {
            Hg(a, b)
        })
    }

    function Ig(a, b) {
        for (let c = 9; c >= 0; c--) a.i.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var Jg = class extends G {
        constructor(a) {
            super();
            this.g = a;
            this.state = 0;
            this.i = new Map
        }
    };
    async function Kg(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function Lg(a) {
        const b = a.state.pc;
        return b !== null && b !== 0 ? b : a.state.pc = Wc(a.g)
    }

    function Mg(a) {
        var b = a.state.wpc;
        if (b === null || b === "") b = a.state, a = a.g, a = a.google_ad_client ? String(a.google_ad_client) : (a.google_ad_modifications = a.google_ad_modifications || {}).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client") ? ? "", b = b.wpc = a;
        return b
    }
    async function Ng(a) {
        await Kg(a.g, () => !(!Lg(a) || !Mg(a)))
    }
    async function Og(a, b) {
        await Ng(a);
        var c = a.i;
        var d = new Od;
        var e = Lg(a);
        d = v(d, 1, zb(e), "0");
        e = Mg(a);
        d = w(d, 2, e);
        d = v(d, 3, zb(a.state.sd), "0");
        a = v(d, 7, zb(Math.round(a.g.performance.now())), "0");
        a = v(a, 3, zb(1), "0");
        b = Wb(a, 10, Pd, b);
        Yd(c, b)
    }
    var Pg = class {
        constructor(a, b) {
            this.g = dd() || window;
            this.j = b ? ? new Jg(this.g);
            this.i = a ? ? new ee(100, 100, !0, this.j);
            this.state = oe(() => {
                const c = Y(te),
                    d = c > 0 && Lc() < 1 / c,
                    e = Y(ue);
                return {
                    sd: c,
                    ssp: d,
                    sds: e,
                    ssps: e > 0 && Lc() < 1 / e,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            })
        }
    };

    function Qg(a) {
        var b = window;
        return a.google_adtest === "on" || a.google_adbreak_test === "on" || b.location.host.endsWith("h5games.usercontent.goog") || b.location.host === "gamesnacks.com" ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && c > 0) || [] : []
    };
    class Rg {};

    function Sg() {
        var a = k.ggeac || (k.ggeac = {});
        fe(D(ge), a);
        Tg(a);
        D(Rg);
        D(kg).g()
    }

    function Tg(a) {
        const b = D(kg);
        b.i = (c, d) => E(5, a, () => !1)(c, d, 1);
        b.j = (c, d) => E(6, a, () => 0)(c, d, 1);
        b.l = (c, d) => E(7, a, () => "")(c, d, 1);
        b.o = (c, d) => E(8, a, () => [])(c, d, 1);
        b.u = (c, d) => E(17, a, () => [])(c, d, 1);
        b.g = () => {
            E(15, a, () => {})(1)
        }
    };

    function Ug(a) {
        const b = D(ge).g();
        a = Qg(a);
        return b.concat(a).join(",")
    };

    function Vg({
        Ma: a,
        Ta: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function Wg(a, b) {
        Ed(a, c => {
            c.shv = String(b);
            c.mjsv = Vg({
                Ma: ce(),
                Ta: b
            });
            c.eid = Ug(k)
        })
    };
    var Xg = typeof sttc === "undefined" ? void 0 : sttc;

    function Yg() {
        var a = C;
        try {
            return pb(Xg, tb), new hg(JSON.parse(Xg))
        } catch (b) {
            a.sa(838, b instanceof Error ? b : Error(String(b)))
        }
        return new hg
    };
    var Zg = class extends G {
            j() {
                this.disposeAd();
                super.j()
            }
        },
        $g = class extends G {
            constructor(a) {
                super();
                this.callback = a
            }
        },
        ah = class extends G {
            constructor(a) {
                super();
                this.F = a;
                this.g = new Set
            }
            fetch(a) {
                const b = new $g(a.callback);
                this.g.add(b);
                this.F.fetch({ ...a,
                    callback: c => {
                        b.u ? c && c.dispose() : b.callback(c);
                        this.g.delete(b)
                    }
                })
            }
            j() {
                for (const a of this.g.values()) a.dispose();
                this.g.clear();
                super.j()
            }
        };
    var bh = class {
        constructor(a) {
            var b = ce();
            this.Sa = 1;
            this.La = a;
            this.Na = b;
            this.Ja = "unset"
        }
        da(a) {
            this.Ja = a
        }
        X(a) {
            this.U = a.Ca;
            this.V = a.Ha
        }
        L(a) {
            this.F = a
        }
        B(a, b = {}) {
            b.event = a;
            b.client = this.Ja;
            b.bow_v = this.La;
            b.js_v = this.Na;
            b.fetcher = this.F ? .toString() ? ? "unset";
            this.U && (b.admb_iid = this.U);
            this.V && (b.admb_rid = this.V);
            a = this.Sa;
            const c = D(ge).g();
            !b.eid && c.length && (b.eid = c.toString());
            Hd(me, "slotcar", b, !0, a)
        }
    };
    var ch = class extends Zg {
        constructor(a, b, c, d) {
            super();
            this.ad = a;
            this.l = b;
            this.o = c;
            this.i = d;
            this.g = null;
            this.A = this.C = !1;
            this.D = !0
        }
        show(a) {
            this.g = a;
            if (this.D && this.A) this.ad.show();
            else if (this.A) this.K();
            else throw Error("Tried to show AdMobAd before it finished loading.");
        }
        disposeAd() {
            this.ad.dispose()
        }
        P() {
            this.A = !0;
            this.o(this)
        }
        O() {
            this.o(null);
            this.dispose()
        }
        R() {
            this.i.B("admb_na");
            this.g ? this.K() : this.D = !1
        }
    };

    function dh(a) {
        return {
            P: F(849, () => {
                a.P()
            }),
            O: F(850, () => {
                a.O()
            }),
            K: F(851, () => {
                a.K()
            }),
            R: F(854, () => {
                a.R()
            })
        }
    }
    var eh = class extends ch {
        constructor(a, b, c, d) {
            super(a, b, c, d);
            this.ad = a;
            this.l = b;
            this.o = c;
            this.i = d
        }
        request() {
            this.ad.load(this.l, dh(this))
        }
        K() {
            (0, this.g)(1)
        }
    };

    function fh(a) {
        return {
            P: F(849, () => {
                a.P()
            }),
            O: F(850, () => {
                a.O()
            }),
            Pa: F(855, () => {
                a.i.B("admb_rfs");
                (0, a.g)(2)
            }),
            Ra: F(852, () => {
                a.C = !0
            }),
            K: F(853, () => {
                a.K()
            }),
            R: F(854, () => {
                a.R()
            })
        }
    }
    var gh = class extends ch {
        constructor(a, b, c, d) {
            super(a, b, c, d);
            this.ad = a;
            this.l = b;
            this.o = c;
            this.i = d
        }
        request() {
            this.ad.load(this.l, fh(this))
        }
        K() {
            this.C ? (0, this.g)(3) : (0, this.g)(2)
        }
    };

    function hh(a, b) {
        const c = a.g.google_adbreak_test === "on";
        switch (b) {
            case 1:
                return c ? "ca-app-pub-3940256099942544/1033173712" : a.g.google_admob_interstitial_slot;
            case 2:
                return c ? "ca-app-pub-3940256099942544/5224354917" : a.g.google_admob_rewarded_slot;
            default:
                throw Error(`Unknown ad type ${b}`);
        }
    }

    function ih(a, b, c) {
        a.l.error(`Unable to fetch ad: '${b}' is missing from tag.`);
        c(null)
    }

    function jh(a) {
        Fd(C, 850, () => {
            a(null)
        })
    }
    var kh = class {
        constructor(a, b, c, d) {
            this.i = a;
            this.g = b;
            this.l = c;
            this.j = d;
            this.u = Wc(window).toString()
        }
        fetch(a) {
            const b = {
                isTestDevice: !1,
                httpTimeoutMillis: Y(we) * 1E3
            };
            var c = this.g.google_tag_for_child_directed_treatment;
            if (c === "0" || c === "1") b.tagForChildDirectedTreatment = c === "1";
            c = this.g.google_tag_for_under_age_of_consent;
            if (c === "0" || c === "1") b.tagForUnderAgeOfConsent = c === "1";
            c = this.g.google_max_ad_content_rating;
            typeof c === "string" && (b.maxAdContentRating = c);
            b.extras ? ? (b.extras = {});
            b.extras.muted = a.Ea ||
                a.type === 2 ? "0" : "1";
            this.u && (b.extras.pvsid = this.u);
            c = Ug(this.g);
            c.length && (b.extras.slotcar_eids = c);
            c = hh(this, a.type);
            a.type === 1 ? typeof c !== "string" ? ih(this, "data-admob-interstitial-slot", a.callback) : this.i.na(c).then(d => {
                (new eh(d, b, a.callback, this.j)).request()
            }).catch(() => {
                jh(a.callback)
            }) : typeof c !== "string" ? ih(this, "data-admob-rewarded-slot", a.callback) : this.i.oa(c).then(d => {
                (new gh(d, b, a.callback, this.j)).request()
            }).catch(() => {
                jh(a.callback)
            })
        }
    };
    const lh = {
            [1]: 10,
            [2]: 11
        },
        mh = {
            closed: 1,
            granted: 3,
            cancelled: 2,
            error: 4
        };
    var oh = class {
            constructor() {
                this.g = window
            }
            fetch(a) {
                this.g.adsbygoogle.push({
                    params: {
                        google_reactive_ad_format: lh[a.type],
                        google_wrap_fullscreen_ad: !0,
                        google_video_play_muted: a.type !== 2 && !a.Ea,
                        google_acr: b => {
                            a.callback(b ? new nh(b) : null)
                        }
                    }
                })
            }
        },
        nh = class extends Zg {
            constructor(a) {
                super();
                this.ad = a
            }
            show(a) {
                this.ad.show(b => {
                    a(mh[b])
                })
            }
            disposeAd() {
                this.ad.disposeAd()
            }
        };
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    const ph = {};

    function qh() {
        return S('<ins class="adsbygoogle" style="width:100% !important;height:100% !important;" id="fake-interstitial-ins"><iframe style="overflow:hidden;" width="100%" height="100%" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" scrolling="no" src="about:blank" id="aswift-fake"></iframe></ins>')
    }

    function rh() {
        return S('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style="fill:#f5f5f5" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>')
    }

    function sh(a) {
        const b = a.Oa;
        a = a.Ua;
        return S('<div class="dialog-wrapper" style="width: 100%; height: 100%; position: absolute; top: 0;"><div class="close-confirmation-dialog" id="close-confirmation-dialog" style="width: ' + T(U(Math.floor(a * .78))) + 'px"><div class="confirmation-title" style="font-size: ' + T(U(Math.floor(b * .031))) + "px; margin-top: " + T(U(Math.floor(b * .0375))) + "px; margin-left: " + T(U(Math.floor(a * .066))) + "px; margin-right: " + T(U(Math.floor(a * .066))) + 'px;">Close Ad?</div><div class="confirmation-message" style="font-size: ' +
            T(U(Math.floor(b * .025))) + "px; margin-bottom: " + T(U(Math.floor(b * .0375))) + "px; margin-top: " + T(U(Math.floor(b * .0375))) + "px; margin-left: " + T(U(Math.floor(a * .066))) + "px; margin-right: " + T(U(Math.floor(a * .066))) + 'px;">You will lose your reward</div><div class="confirmation-buttons" style="font-size: ' + T(U(Math.floor(b * .0218))) + "px; line-height: " + T(U(Math.floor(b * .05625))) + "px; margin-right: " + T(U(Math.floor(b * .0125))) + "px; margin-bottom: " + T(U(Math.floor(b * .0125))) + 'px;"><div class="close-ad-button" id="close-ad-button" style="padding-left: ' +
            T(U(Math.floor(a * .044))) + "px; padding-right: " + T(U(Math.floor(a * .044))) + 'px;">CLOSE</div><div class="resume-ad-button" id="resume-ad-button" style="padding-left: ' + T(U(Math.floor(a * .044))) + "px; padding-right: " + T(U(Math.floor(a * .044))) + 'px;">RESUME</div></div></div></div>')
    };
    pc(bc(new Zb($b, "about:blank")));
    pc(bc(new Zb($b, "javascript:undefined")));

    function th(a, b, c) {
        a = a.g;
        c = b(c || ph, {});
        b = a || sa || (sa = new Gc);
        if (c && c.g) b = c.g();
        else {
            b = Ec(b.g, "DIV");
            b: if (ka(c)) {
                if (c.ta && (c = c.ta(), c instanceof z)) break b;
                c = vc("zSoyz")
            } else c = vc(String(c));
            a = c;
            c = b;
            if (Bc())
                for (; c.lastChild;) c.removeChild(c.lastChild);
            c.innerHTML = uc(a)
        }
        b.childNodes.length == 1 && (c = b.firstChild, c.nodeType == 1 && (b = c));
        return b
    }
    class uh {
        constructor() {
            this.g = sa || (sa = new Gc)
        }
        render(a, b) {
            a = a(b || {}, {});
            return String(a)
        }
    };

    function vh(a, b) {
        if (a.contentDocument || a.contentWindow) b(a);
        else {
            const c = () => {
                b(a);
                ec(a, "load", c)
            };
            y(a, "load", c)
        }
    }
    async function wh(a) {
        if (a.g == null) throw Error("Tried to show ad before initialized.");
        const b = new R;
        var c = a.g.g,
            d = Math.min(Number(c.clientWidth), Number(c.clientHeight));
        let e = Math.max(Number(c.clientWidth), Number(c.clientHeight));
        xh(a) && (d *= .5, e *= .5);
        c = c.contentDocument;
        a = c.body.appendChild(th(a.C, sh, {
            Ua: d,
            Oa: e
        }));
        d = a.querySelector(".resume-ad-button");
        y(a.querySelector(".close-ad-button"), "click", () => {
            b.resolve(0)
        });
        y(d, "click", () => {
            b.resolve(1)
        });
        d = await b.promise;
        c.body.removeChild(a);
        return d ===
            0
    }

    function xh(a) {
        if (a.g == null) throw Error("Tried to show ad before initialized.");
        a = a.g.g;
        return Number(a.clientWidth) > 1E3 || Number(a.clientHeight) > 1E3
    }
    var yh = class extends Zg {
            constructor(a, b) {
                super();
                this.A = b;
                this.C = new uh;
                this.i = 10;
                this.o = !1;
                this.l = th(this.C, qh);
                this.l.dataset["slotcar" + (b === 1 ? "Interstitial" : "Rewarded")] = "true";
                document.documentElement.appendChild(this.l);
                vh(this.l.firstChild, c => {
                    var d = {};
                    var e = this.A === 2 ? "Rewarded ad example" : "Interstitial ad example";
                    var f = this.A;
                    (d = d && d.nb) ? (d = String(d), d = gg.test(d) ? d : "zSoyz", d = ' nonce="' + T(d) + '"') : d = "";
                    d = "<!DOCTYPE html><html><head>" + S("\n  <style" + d + '>\n    body {\n      padding: 0;\n      margin: 0;\n      background-color: #262626;\n    }\n    .container {\n      width: 100vw;\n      height: 92vh;\n      display: flex;\n      flex-direction: column;\n    }\n    .container .creative {\n      background-color: white;\n      border-style: solid;\n      border-width: thin;\n      border-color:#bdc1c6;\n      height: 250px;\n      margin: 20vh auto auto auto;\n      overflow: hidden;\n      padding: 0;\n      width: 300px;\n    }\n    .header-panel {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 20px;\n      background-color: #424242;\n      border: 1px solid transparent;\n      border-radius: 4px;\n      height: 8vh;\n      color: #f5f5f5;\n      font-family: "Google Sans",Roboto,Arial,sans-serif;\n      font-size: 20px;\n      line-height: 8vh;\n    }\n    .dismiss-button {\n      display: flex;\n      flex-direction: row;\n      height: inherit;\n      align-items: center;\n      padding-right: 4%;\n      cursor: pointer;\n      position: absolute;\n      right: 0;\n    }\n    .count-down-container {\n      display: inline-flex;\n      flex: auto;\n    }\n    .adContainer {\n      display: flex;\n      flex-direction: row;\n      width: 100%;\n      height: 100%;\n      text-align: left;\n      margin: 0;\n    }\n    .adContainer .logo {\n      align-self: center;\n      width: 40px;\n      margin: 0 24px;\n      height: 40px;\n    }\n    .adContainer .logo IMG {\n      height: 40px;\n      width: 40px;\n    }\n    .adContainer .text {\n      margin: auto auto auto 0;\n    }\n    .adContainer .button {\n      align-self: center;\n      height: 100%;\n      max-height: 48px;\n      /* This gives a perceived margin of 32px, due to the margins within the button SVGs. */\n      margin-right: 30px;\n    }\n    .adContainer .button-inner {\n      max-height: 48px;\n      height: 100%;\n    }\n    .adContainer .button-inner SVG {\n      height: 100%;\n      width: auto;\n    }\n    .adText {\n      font-family: "Google Sans",Roboto,Arial,sans-serif;\n      font-size: 18px;\n      font-weight: normal;\n      line-height: 18px;\n      color: #202124;\n      margin-bottom: 4px;\n    }\n    .nativeIframeMessage .text {\n      padding: 0 10px;\n    }\n    .creative a {\n      text-decoration: none;\n    }\n\n    @media (max-height: 44px),\n        (max-height: 150px) and (max-width: 210px) {\n      .adContainer .logo {\n        display: none;\n      }\n      .adContainer .text {\n        margin-left: 5px;\n      }\n    }\n    @media (max-height: 110px) and (max-width: 330px) {\n      .adText {\n        font-size: 13px;\n        line-height: 13px;\n        margin-bottom: 2px;\n      }\n    }\n    @media (max-height: 38px) {\n      .adText {\n        font-size: 17px;\n        line-height: 17px;\n        margin-bottom: 0;\n      }\n    }\n    @media (max-height: 20px) {\n      .adText {\n        font-size: 12px;\n        line-height: 12px;\n        margin-bottom: 0;\n      }\n    }\n\n    /* Vertically stacked assets in cases where creative is not a distictly\n       horizontal rectangle shape */\n    @media (min-height: 240px),\n        (max-width: 65px) and (min-height: 50px),\n        (max-width: 130px) and (min-height: 100px),\n        (max-width: 195px) and (min-height: 150px),\n        (max-width: 260px) and (min-height: 200px) {\n      .adContainer .logo {\n        display: initial;\n      }\n      .adContainer .text {\n        margin-left: 0;\n      }\n      .adContainer {\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n      }\n      .adContainer .logo {\n        margin: 40px auto 24px auto;\n      }\n      .adContainer .text {\n        margin: 0 auto auto auto;\n      }\n      .adContainer .text .adText{\n        margin-bottom: 8px;\n      }\n      .adContainer .button {\n        margin: auto auto 32px auto;\n      }\n      @media (max-height: 200px) {\n        .adContainer .logo {\n          display: none;\n        }\n        .adContainer .text {\n          margin: 10px auto auto auto;\n        }\n      }\n    }\n\n    .x-button {\n      display: flex;\n      align-items: center;\n    }\n\n    .dialog-wrapper {\n      background: rgba(0, 0, 0, .4);\n      height: 100%;\n      left: 0;\n      opacity: 1;\n      pointer-events: auto;\n      position: fixed;\n      top: 0;\n      transition: opacity .15s ease-out;\n      -webkit-transition: opacity .15s ease-out;\n      width: 100%;\n      will-change: opacity;\n      z-index: 2147483647;\n    }\n\n    .close-confirmation-dialog {\n      background: #fff;\n      box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14),\n        0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);\n      font-family: Roboto, sans-serif;\n      left: 50%;\n      position: fixed;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      -webkit-transform: translate(-50%, -50%);\n    }\n\n    .confirmation-title {\n      color: #000;\n    }\n\n    .confirmation-message {\n      color: #757575;\n    }\n\n    .confirmation-buttons {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n\n      -webkit-box-pack: flex-end;\n      -webkit-justify-content: flex-end;\n      justify-content: flex-end;\n    }\n\n    .close-ad-button,\n    .resume-ad-button {\n      color: #fff;\n      cursor: pointer;\n      font-weight: 500;\n      text-align: center;\n\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n    }\n\n    .close-ad-button {\n      color: #3e82f7;\n    }\n\n    .resume-ad-button {\n      background: #3e82f7;\n      border-radius: 2px;\n      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .24);\n    }\n  </style>\n  ') +
                        '</head><body><div class="header-panel">';
                    f !== 2 && (d += "Ad");
                    d += '<div class="dismiss-button" id="dismiss-button">' + (f === 2 ? '<div class="count-down-container" id="count-down-container"><div id="count-down"><div class="count-down-text" id="count-down-text"></div></div><div class="x-button" id="close-button" style="padding-left: 5px;">' + rh() + "</div></div>" : "") + '<div class="x-button" id="dismiss-button-element">' + rh() + '</div></div></div><div class="container"><div class="creative">' + S('<div style="position:relative;float:right;top:1px;right:1px;width:15px;height:15px;"><svg style="fill:#00aecd;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 15"><circle cx="6" cy="6" r="0.67"></circle><path d="M4.2,11.3Q3.3,11.8,3.3,10.75L3.3,4.1Q3.3,3.1,4.3,3.5L10.4,7.0Q12.0,7.5,10.4,8.0L6.65,10.0L6.65,7.75a0.65,0.65,0,1,0,-1.3,0L5.35,10.75a0.9,0.9,0,0,0,1.3,0.8L12.7,8.2Q13.7,7.5,12.7,6.7L3.3,1.6Q2.2,1.3,1.8,2.5L1.8,12.5Q2.2,13.9,3.3,13.3L4.8,12.5A0.3,0.3,0,1,0,4.2,11.3Z"></path></svg></div>') +
                        '<a target="_blank" href="https://developers.google.com/ad-placement"><div class="adContainer"><div class="logo">' + S('<img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTVweCIgaGVpZ2h0PSI1NnB4IiB2aWV3Qm94PSIwIDAgNTUgNTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sb2dvX2dvb2dsZWdfNDhkcDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJNMl92MiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjAyYV9hdXRvX2FkcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQxNy4wMDAwMDAsIC03MDUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJtb2JpbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3OC4wMDAwMDAsIDE2NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNi4wMDAwMDAsIDc0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHUC1hZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuMDAwMDAwLCA0NDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJsb2dvX2dvb2dsZWdfNDhkcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuMDAwMDAwLCAyMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01NC44OCwyOC42MzYzNjM2IEM1NC44OCwyNi42NTA5MDkxIDU0LjcwMTgxODIsMjQuNzQxODE4MiA1NC4zNzA5MDkxLDIyLjkwOTA5MDkgTDI4LDIyLjkwOTA5MDkgTDI4LDMzLjc0IEw0My4wNjkwOTA5LDMzLjc0IEM0Mi40MiwzNy4yNCA0MC40NDcyNzI3LDQwLjIwNTQ1NDUgMzcuNDgxODE4Miw0Mi4xOTA5MDkxIEwzNy40ODE4MTgyLDQ5LjIxNjM2MzYgTDQ2LjUzMDkwOTEsNDkuMjE2MzYzNiBDNTEuODI1NDU0NSw0NC4zNDE4MTgyIDU0Ljg4LDM3LjE2MzYzNjQgNTQuODgsMjguNjM2MzYzNiBaIiBpZD0iU2hhcGUiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI4LDU2IEMzNS41Niw1NiA0MS44OTgxODE4LDUzLjQ5MjcyNzMgNDYuNTMwOTA5MSw0OS4yMTYzNjM2IEwzNy40ODE4MTgyLDQyLjE5MDkwOTEgQzM0Ljk3NDU0NTUsNDMuODcwOTA5MSAzMS43NjcyNzI3LDQ0Ljg2MzYzNjQgMjgsNDQuODYzNjM2NCBDMjAuNzA3MjcyNyw0NC44NjM2MzY0IDE0LjUzNDU0NTUsMzkuOTM4MTgxOCAxMi4zMzI3MjczLDMzLjMyIEwyLjk3ODE4MTgyLDMzLjMyIEwyLjk3ODE4MTgyLDQwLjU3NDU0NTUgQzcuNTg1NDU0NTUsNDkuNzI1NDU0NSAxNy4wNTQ1NDU1LDU2IDI4LDU2IFoiIGlkPSJTaGFwZSIgZmlsbD0iIzM0QTg1MyIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMzMyNzI3MywzMy4zMiBDMTEuNzcyNzI3MywzMS42NCAxMS40NTQ1NDU1LDI5Ljg0NTQ1NDUgMTEuNDU0NTQ1NSwyOCBDMTEuNDU0NTQ1NSwyNi4xNTQ1NDU1IDExLjc3MjcyNzMsMjQuMzYgMTIuMzMyNzI3MywyMi42OCBMMTIuMzMyNzI3MywxNS40MjU0NTQ1IEwyLjk3ODE4MTgyLDE1LjQyNTQ1NDUgQzEuMDgxODE4MTgsMTkuMjA1NDU0NSAwLDIzLjQ4MTgxODIgMCwyOCBDMCwzMi41MTgxODE4IDEuMDgxODE4MTgsMzYuNzk0NTQ1NSAyLjk3ODE4MTgyLDQwLjU3NDU0NTUgTDEyLjMzMjcyNzMsMzMuMzIgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOCwxMS4xMzYzNjM2IEMzMi4xMTA5MDkxLDExLjEzNjM2MzYgMzUuODAxODE4MiwxMi41NDkwOTA5IDM4LjcwMzYzNjQsMTUuMzIzNjM2NCBMNDYuNzM0NTQ1NSw3LjI5MjcyNzI3IEM0MS44ODU0NTQ1LDIuNzc0NTQ1NDUgMzUuNTQ3MjcyNywwIDI4LDAgQzE3LjA1NDU0NTUsMCA3LjU4NTQ1NDU1LDYuMjc0NTQ1NDUgMi45NzgxODE4MiwxNS40MjU0NTQ1IEwxMi4zMzI3MjczLDIyLjY4IEMxNC41MzQ1NDU1LDE2LjA2MTgxODIgMjAuNzA3MjcyNywxMS4xMzYzNjM2IDI4LDExLjEzNjM2MzYgWiIgaWQ9IlNoYXBlIiBmaWxsPSIjRUE0MzM1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSIwIDAgNTYgMCA1NiA1NiAwIDU2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="/>') +
                        '</div><div class="text"><div class="adText">' + (e != null && e.aa === Rf ? e : e instanceof z ? S(uc(e).toString()) : S(String(String(e)).replace(dg, cg), Vf(e))) + "</div></div></div></a></div></div></body></html>";
                    e = S(d).ta();
                    f = c.contentDocument || c.contentWindow.document;
                    f.open();
                    f.write(uc(e));
                    f.close();
                    this.g = new Dg(c, this.l);
                    a(this)
                })
            }
            show(a) {
                if (this.g == null) throw Error("Tried to show ad before initialized.");
                const b = this.g.g.contentDocument,
                    c = b.getElementById("dismiss-button");
                xg(this.g, !0);
                if (this.A === 2) {
                    const d =
                        c.querySelector("#dismiss-button-element");
                    d.style.display = "none";
                    const e = async () => {
                        if (this.g == null) throw Error("Failure on rewarded example: Could not find ad frame.");
                        this.o = !0;
                        await wh(this) ? (this.g.o(), y(c, "click", e), a(2)) : this.o = !1
                    };
                    y(c, "click", e);
                    this.i = Y(ye);
                    const f = this.i < 0;
                    this.o = !1;
                    const g = b.getElementById("count-down-container"),
                        h = g.querySelector("#count-down-text");
                    h.innerText = `Reward in ${this.i} seconds`;
                    f || (this.D = setInterval(() => {
                        this.o || (--this.i, h.innerText = `Reward in ${this.i} seconds`);
                        if (this.i === 0) {
                            g.style.display = "none";
                            d.style.display = "";
                            clearInterval(this.D);
                            const l = async () => {
                                if (this.g == null) throw Error("Failure on rewarded example: Could not find ad frame.");
                                this.g.o();
                                ec(c, "click", l);
                                a(3)
                            };
                            y(c, "click", l);
                            ec(c, "click", e)
                        }
                    }, 1E3))
                } else y(c, "click", () => {
                    if (this.g == null) throw Error("Failure on rewarded example: Could not find ad frame.");
                    this.g.o();
                    a(1)
                })
            }
            disposeAd() {
                this.g ? .o();
                Fc(this.l)
            }
        },
        zh = class {
            fetch(a) {
                new yh(a.callback, a.type)
            }
        };
    var Ah = class {
            constructor() {
                this.g = D(Pg);
                this.j = (new Map).set("inv_plcnf", 1).set("inv_adcnf", 2).set("adbr_cl", 3).set("adbr_noad", 4).set("adbr_nousitr", 5).set("adbr_usrint", 6).set("adbr_naf", 7).set("adbr_pgad", 8).set("adbr_pgaatd", 9).set("adbr_tepgai", 10).set("adcf_cl", 11).set("adcf_afni", 29).set("adcf_pgad", 13).set("adcf_pgaatd", 14).set("prf_suc", 15).set("prf_fail", 16).set("admb_na", 17).set("admb_rfs", 18).set("admb_fetfail", 19).set("lgc_fld", 20).set("pr_rr", 21).set("pr_to", 22).set("api_ld", 23).set("admb_tm",
                    24).set("adbr_dn", 25).set("dbl_init", 26).set("sess_m", 27).set("ad_cls", 28);
                this.i = (new Map).set("admob", 1).set("adsense", 2)
            }
            da() {}
            X(a) {
                this.U = a.Ca;
                this.V = a.Ha
            }
            L(a) {
                this.F = this.i.get(a) ? ? 0
            }
            async B(a) {
                var b = new Nd;
                a = this.j.get(a) ? ? 0;
                b = v(b, 1, a == null ? a : xb(a), 0).L(this.F);
                this.U && w(b, 3, this.U);
                this.V && w(b, 4, this.V);
                await Og(this.g, b)
            }
        },
        Bh = class {
            constructor(a) {
                this.ma = new Ah;
                this.ba = a
            }
            da(a) {
                this.ba.da(a)
            }
            X(a) {
                this.ma.X(a);
                this.ba.X(a)
            }
            L(a) {
                this.ma.L(a);
                this.ba.L(a)
            }
            async B(a, b = {}) {
                await this.ma.B(a, b);
                this.ba.B(a, b)
            }
        };
    const Ch = "click mousedown mouseup touchstart touchend pointerdown pointerup keydown keyup scroll".split(" ");
    var Dh = class extends G {
        constructor() {
            var a = window;
            super();
            this.g = 0;
            const b = () => {
                this.g = Date.now()
            };
            for (const c of Ch) a.document.documentElement.addEventListener(c, b, {
                capture: !0
            });
            H(this, () => {
                for (const c of Ch) a.document.documentElement.removeEventListener(c, b, {
                    capture: !0
                })
            })
        }
    };
    const Eh = new Set(["auto", "on"]),
        Fh = new Set(["on", "off"]),
        Gh = new Set("start pause next browse reward preroll".split(" ")),
        Hh = new Map([
            ["start", "interstitial"],
            ["pause", "interstitial"],
            ["next", "interstitial"],
            ["browse", "interstitial"],
            ["reward", "reward"],
            ["preroll", "preroll"]
        ]),
        Ih = new Map([
            ["interstitial", ["type"]],
            ["reward", ["type", "beforeReward", "adDismissed", "adViewed"]],
            ["preroll", ["type", "adBreakDone"]]
        ]),
        Jh = new Map([
            ["interstitial", ["beforeReward", "adDismissed", "adViewed"]],
            ["reward", []],
            ["preroll", ["afterAd", "beforeReward", "adDismissed", "adViewed"]]
        ]),
        Kh = "beforeAd afterAd beforeReward adDismissed adViewed adBreakDone".split(" "),
        Lh = new Map([
            ["beforeBreak", "beforeAd"],
            ["afterBreak", "afterAd"],
            ["adComplete", "adViewed"]
        ]);

    function Mh(a, b) {
        let c = !1;
        const d = f => {
            c = !0;
            b.error(`Invalid ad config: ${f}.`)
        };
        if (a.preloadAdBreaks != null && !Eh.has(a.preloadAdBreaks)) {
            var e = Array.from(Eh).map(f => `'${f}'`).join(", ");
            d(`'preloadAdBreaks' must be one of [${e}]`)
        }
        a.sound == null || Fh.has(a.sound) || (e = Array.from(Fh).map(f => `'${f}'`).join(", "), d(`'sound' must be one of [${e}]`));
        a.onReady != null && typeof a.onReady !== "function" && d("'onReady' must be a function");
        return !c
    }

    function Nh(a, b, c) {
        for (const [d, e] of Lh) {
            const f = d,
                g = e;
            if (f in a) {
                c.B("lgc_fld", {
                    field: f
                });
                if (g in a) return b.error(`Invalid placement config: '${f}' has been renamed to ${g}. Cannot pass both fields. Please use ${g} only.`), !1;
                b.warn(`Placement config: '${f}' has been renamed to '${g}'. Please update your code.`);
                a[g] = a[f];
                delete a[f]
            }
        }
        return !0
    }

    function Oh(a, b, c) {
        let d = !1;
        const e = h => {
            d = !0;
            b.error(`Invalid placement config: ${h}.`)
        };
        a = Object.assign({}, a);
        if (!Nh(a, b, c)) return {
            qa: !1,
            ua: a
        };
        if (!Gh.has(a.type)) {
            var f = Array.from(Gh).map(h => `'${h}'`).join(", ");
            e(`'type' must be one of [${f}]`);
            return {
                qa: !d,
                ua: a
            }
        }
        c = Hh.get(a.type);
        const g = Ih.get(c).filter(h => !(h in a));
        g.length > 0 && e("missing required properties " + g.map(h => `'${h}'`).join(", "));
        c = Jh.get(c).filter(h => h in a);
        c.length > 0 && e("the following properties are not used for the given ad type: " +
            c.map(h => `'${h}'`).join(", "));
        for (f of Kh) f in a && typeof a[f] !== "function" && e(`'${f}' must be a function`);
        return {
            qa: !d,
            ua: a
        }
    };
    class Ph extends G {
        constructor(a, b) {
            super();
            this.M = new R;
            this.g = !1;
            this.timeout = setTimeout(F(726, () => {
                b()
            }), a * 1E3)
        }
        get promise() {
            return this.M.promise
        }
        resolve(a) {
            this.u || (this.g = !0, this.M.resolve(a))
        }
        reject(a) {
            this.u || (this.g = !0, this.M.reject(a))
        }
        j() {
            clearTimeout(this.timeout)
        }
    }

    function Qh(a, b) {
        if (a = a.google_adbreak_test) switch (a) {
            case "on":
                return new zh;
            case "adsense":
                break;
            default:
                throw b.error(`Unsupported data-adbreak-test value '${a}. Supported values: '${"on"}'.`), Error("unsupported test mode");
        }
        return new oh
    }

    function Rh(a) {
        return ["google_admob_interstitial_slot", "google_admob_rewarded_slot"].some(b => typeof Sh(b, a) === "string")
    }

    function Sh(a, b) {
        if (b[a] && typeof b[a] === "string") return String(b[a])
    }

    function Th(a, b, c) {
        Qf == null && (Qf = new Pf);
        return Qf.connect().then(d => new kh(d, a, b, c))
    }

    function Uh(a) {
        if (typeof a !== "string") return -1;
        a = /^(\d+)s$/.exec(a);
        return a == null ? -1 : Number(a[1])
    }

    function Vh(a, b) {
        window.addEventListener("onpagehide" in self ? "pagehide" : "unload", F(938, () => {
            if (b.first_slotcar_request_processing_time) {
                var c = Date.now();
                a.g.B("sess_m", {
                    igsl: c - b.first_slotcar_request_processing_time,
                    afh: String(b.ad_frequency_hint),
                    niab: Number(b.number_of_interstitial_ad_breaks),
                    nias: Number(b.number_of_interstitial_ads_shown),
                    opsl: c - b.adsbygoogle_execution_start_time
                })
            }
        }))
    }

    function Wh(a, b) {
        const c = b.google_admob_ads_only;
        typeof c === "string" && (c === "on" ? Rh(b) ? a.ja = !0 : a.l.error("Cannot set data-admob-ads-only without providing at least one AdMob ad slot id.") : a.l.error(`Unsupported data-admob-ads-only value '${c}'. Supported value: 'on'.`))
    }

    function Xh(a) {
        return a.va ? "adbreaktest" : a.C ? "admob" : "adsense"
    }

    function Yh(a) {
        if (!a.J || a.Aa) {
            if (!a.xa && a.o.preloadAdBreaks)
                for (var b of [1, 2])
                    if (!a.i.has(b) && !a.D.has(b)) return;
            for (a.xa = !0; a.ka.length > 0;) b = a.ka.pop(), Zh(a, "onReady", b)
        }
    }

    function $h(a, b) {
        b = b.google_ad_frequency_hint;
        const c = Y(ze);
        if (typeof b !== "string") return c;
        const d = /^(\d+)s$/.exec(b);
        return d == null ? (a.l.error(`Invalid data-ad-frequency-hint value: '${b}'. It must be in format 'Xs' where X is a number.`), c) : Math.max(Y(Ae), Number(d[1]))
    }

    function ai(a, b) {
        !a.ja || a.C ? b() : a.g.B("adcf_afni")
    }

    function bi(a, b, c, d = !0) {
        const e = a.i.get(b);
        e && (e.dispose(), ci(a, b, 10, c), d && a.i.delete(b))
    }

    function di(a, b) {
        return a.A.has(b) && !a.A.get(b).g
    }

    function ci(a, b, c, d) {
        if (di(a, b)) throw Error("already scheduled");
        c = new Ph(c, () => {
            ei(a, b, d)
        });
        a.A.set(b, c);
        return c
    }

    function Zh(a, b, c) {
        Vc(() => {
            fi(a, b, c)
        })
    }

    function Z(a, b, c, d) {
        const e = {
            breakType: b.type,
            breakFormat: c === 2 ? "reward" : b.type === "preroll" ? "preroll" : "interstitial",
            breakStatus: d
        };
        b.name && (e.breakName = b.name);
        a.g.B("adbr_dn", {
            breakType: e.breakType,
            breakFormat: e.breakFormat,
            breakStatus: e.breakStatus,
            breakName: e.breakName ? ? ""
        });
        const f = b.adBreakDone;
        f != null && Zh(a, "adBreakDone", () => {
            f(e)
        })
    }
    async function gi(a, b, c) {
        if (a.ha) return a.g.B("pr_rr"), Z(a, b, c, "frequencyCapped"), !1;
        a.ha = !0;
        a.J && await a.ea;
        var d = di(a, c) ? a.A.get(c) : ci(a, c, 0, 2);
        d = await Promise.race([d.promise, Xc(Y(xe) * 1E3, 2)]);
        return d === 1 ? (a.g.B("adbr_noad"), Z(a, b, c, "noAdPreloaded"), !1) : d === 2 ? (a.g.B("pr_to", {
            source: "slotcar"
        }), Z(a, b, c, "timeout"), !1) : !0
    }
    async function hi(a, b) {
        const c = new R;
        a.wa = c;
        fi(a, "beforeReward", () => {
            b.beforeReward(() => {
                c.resolve(0)
            })
        });
        return await c.promise === 0
    }

    function fi(a, b, c) {
        if (c) try {
            c()
        } catch (d) {
            return a.l.error(`'${b}' callback threw an error:`, d), !1
        }
        return !0
    }

    function ii(a, b, c, d, e) {
        const f = a.Ka.get(c),
            g = b ? 1 : -1,
            h = f.length > 0 ? f[f.length - 1] : 0;
        Math.sign(h) === g ? f[f.length - 1] = h + g : f.push(g);
        a.g.B(b ? "prf_suc" : "prf_fail", {
            type: c,
            src: d,
            stats: f.join(","),
            timing: Date.now() - e
        })
    }

    function ei(a, b, c) {
        const d = Date.now();
        a.F.fetch({
            type: b,
            Ea: a.o.sound === "on",
            callback: e => {
                a.D.delete(b);
                const f = a.A.get(b);
                e ? (f.resolve(0), a.i.set(b, e), H(e, () => {
                    a.i.delete(b)
                })) : (f.resolve(1), a.D.add(b), ci(a, b, Y(Be), 5));
                ii(a, e != null, b, c, d);
                c !== 1 && c !== 7 || Yh(a)
            }
        })
    }
    var ji = class extends G {
        constructor(a, b) {
            super();
            this.l = a;
            this.g = b;
            this.F = null;
            this.T = "";
            this.ha = this.J = this.xa = this.va = !1;
            this.ga = 0;
            this.I = !1;
            this.wa = null;
            this.ka = [];
            this.N = window.innerWidth;
            this.la = window.innerHeight;
            this.ja = this.Aa = this.C = !1;
            this.ia = 0;
            this.ea = Promise.resolve();
            this.ya = 0;
            this.o = {
                sound: "on"
            };
            this.i = new Map;
            this.A = new Map;
            this.za = new Dh;
            this.D = new Set;
            this.Ka = new Map([
                [1, []],
                [2, []]
            ]);
            H(this, oa(se, this.za))
        }
        init(a) {
            this.T = String(a.google_ad_client);
            if (this.F != null) this.g.B("dbl_init", {
                ad_client: this.T
            });
            else {
                var b = Eg();
                b.in_game_session_length = 0;
                b.number_of_interstitial_ad_breaks = 0;
                b.number_of_interstitial_ads_shown = 0;
                b.ad_frequency_hint = a.google_ad_frequency_hint ? String(a.google_ad_frequency_hint) : "";
                Vh(this, b);
                b = navigator.userAgent;
                var c = RegExp("\\bwv\\b");
                this.J = b.includes("Android") && c.test(b);
                a.google_adbreak_test === "on" && (this.va = !0);
                Wh(this, a);
                this.g.da(this.T);
                this.F = new ah(Qh(a, this.l));
                this.g.L(Xh(this));
                if (Rh(a)) {
                    this.g.X({
                        Ca: Sh("google_admob_interstitial_slot", a),
                        Ha: Sh("google_admob_rewarded_slot", a)
                    });
                    const e = Date.now();
                    b = Th(a, this.l, this.g).then(f => {
                        this.F != null && this.F.dispose();
                        this.F = new ah(f);
                        this.C = !0;
                        this.g.L(Xh(this));
                        for (const g of [1, 2])
                            if ((f = this.i.get(g)) || di(this, g)) f ? (f.dispose(), this.i.delete(g)) : (this.A.get(g).dispose(), this.A.delete(g)), ci(this, g, 0, 7)
                    }).catch(f => {
                        this.g.B("admb_fetfail", {
                            error: f
                        })
                    }).finally(() => {
                        this.g.B("admb_tm", {
                            timing: Date.now() - e
                        })
                    });
                    this.J && (this.ea = Promise.race([b, Xc(Y(ve) * 1E3)]), this.ea.finally(() => {
                        this.Aa = !0;
                        Yh(this)
                    }))
                }
                this.ga =
                    $h(this, a);
                this.ia = Uh(a.google_ad_start_delay_hint);
                this.N = window.innerWidth;
                this.la = window.innerHeight;
                var d = dc(F(791, () => {
                    if (this.N !== window.innerWidth || this.la !== window.innerHeight)
                        if (!this.C || this.N !== window.innerWidth) {
                            for (const e of this.i.keys()) bi(this, e, 4, !1);
                            this.i.clear();
                            this.N = window.innerWidth;
                            this.la = window.innerHeight
                        }
                }));
                window.addEventListener("resize", d);
                H(this, () => {
                    window.removeEventListener("resize", d)
                });
                this.ya = Date.now()
            }
        }
        handleAdConfig(a) {
            Mh(a, this.l) ? (this.g.B("adcf_cl", {
                    preloadAdBreaks: a.preloadAdBreaks ||
                        "",
                    sound: a.sound || "",
                    onReady: a.onReady ? "true" : "false"
                }), a.sound && this.o.sound !== a.sound && (this.o.sound = a.sound, ai(this, () => {
                    bi(this, 1, 6)
                })), a.preloadAdBreaks && !this.o.preloadAdBreaks ? ai(this, () => {
                    this.o.preloadAdBreaks = a.preloadAdBreaks;
                    if (this.o.preloadAdBreaks === "on")
                        for (const b of [1, 2]) this.i.has(b) || di(this, b) || ci(this, b, 0, 1)
                }) : a.preloadAdBreaks && this.o.preloadAdBreaks && this.l.error("'adConfig' was already called to set 'preloadAdBreaks' with value " + `'${this.o.preloadAdBreaks}'`), a.onReady &&
                (this.ka.push(a.onReady), Yh(this))) : this.g.B("inv_adcnf")
        }
        async handleAdBreak(a, b) {
            if (!this.ja || this.C)
                if (a = Oh(a, this.l, this.g), a.qa) {
                    var c = a.ua,
                        d = c.type === "reward" ? 2 : 1;
                    if (d !== 1 || this.ia <= 0 || Date.now() - this.ya > this.ia * 1E3) {
                        a = Eg();
                        d === 1 && a.number_of_interstitial_ad_breaks++;
                        var e = c.type === "preroll";
                        this.g.B("adbr_cl", {
                            type: c.type,
                            name: c.name || "",
                            frequency_cap: d === 2 ? 0 : this.ga,
                            last_intr: Date.now() - this.za.g
                        });
                        if (b && !e) Z(this, c, d, "notReady");
                        else if (d === 2 && this.wa ? .resolve(1), this.i.get(d) || !e || await gi(this,
                                c, d)) {
                            var f = this.i.get(d);
                            if (f)
                                if (d !== 2 || await hi(this, c))
                                    if (this.I) this.l.error("Cannot show ad while another ad is already visible."), Z(this, c, d, "frequencyCapped");
                                    else if (fi(this, "beforeAd", c.beforeAd)) {
                                this.I = !0;
                                d === 1 && a.number_of_interstitial_ads_shown++;
                                this.ha = !0;
                                var g = Date.now(),
                                    h = l => {
                                        this.I = !1;
                                        l === 2 || d === 2 && l === 4 ? Zh(this, "adDismissed", c.adDismissed) : l === 3 && Zh(this, "adViewed", c.adViewed);
                                        Zh(this, "afterAd", c.afterAd);
                                        d === 1 ? Z(this, c, d, "viewed") : Z(this, c, d, l === 4 ? "other" : l === 2 ? "dismissed" : "viewed");
                                        l !== 4 && (f.dispose(), ci(this, d, d === 2 ? 0 : this.ga, 3));
                                        this.g.B("ad_cls", {
                                            result: l,
                                            adType: d,
                                            dur: Date.now() - g
                                        })
                                    };
                                H(f, () => {
                                    this.I && h(4)
                                });
                                f.show(h)
                            } else Zh(this, "afterAd", c.afterAd), Z(this, c, d, "error");
                            else Z(this, c, d, "ignored");
                            else di(this, d) ? (this.g.B("adbr_noad"), Z(this, c, d, this.D.has(d) ? "other" : "frequencyCapped")) : (ci(this, d, 0, 2), Z(this, c, d, "noAdPreloaded"))
                        }
                    } else this.g.B("adbr_tepgai")
                } else this.g.B("inv_plcnf");
            else this.g.B("adbr_naf")
        }
        handleAdBreakBeforeReady(a) {
            return this.handleAdBreak(a, !0)
        }
        j() {
            for (const a of this.A.values()) a.dispose();
            this.A.clear();
            for (const a of this.i.values()) a.dispose();
            this.i.clear();
            this.F && this.F.dispose();
            super.j()
        }
    };

    function ki(a) {
        {
            k.google_llp || (k.google_llp = {});
            var b = k.google_llp;
            let c = b[7];
            if (!c) {
                const {
                    promise: d,
                    resolve: e
                } = new R;
                c = {
                    promise: d,
                    resolve: e
                };
                b[7] = c
            }
            b = c
        }
        b.resolve(a)
    };
    Fd(C, 723, () => {
        const a = new ee;
        try {
            mb(d => {
                var e = new Td;
                var f = new Sd;
                try {
                    var g = Wc(window);
                    v(f, 1, zb(g), "0")
                } catch (q) {}
                try {
                    var h = D(ge).g();
                    Rb(f, 2, h, yb)
                } catch (q) {}
                try {
                    w(f, 3, window.document.URL)
                } catch (q) {}
                e = Vb(e, 2, f);
                f = new Rd;
                f = v(f, 1, xb(1196), 0);
                try {
                    var l = tb(d ? .name) ? d.name : "Unknown error";
                    w(f, 2, l)
                } catch (q) {}
                try {
                    var m = tb(d ? .message) ? d.message : `Caught ${d}`;
                    w(f, 3, m)
                } catch (q) {}
                try {
                    const q = tb(d ? .stack) ? d.stack : Error().stack;
                    q && Rb(f, 4, q.split(/\n\s*/), Ab)
                } catch (q) {}
                d = Vb(e, 1, f);
                l = new Qd;
                try {
                    w(l, 1, ce())
                } catch {}
                Wb(d,
                    6, Ud, l);
                v(d, 5, zb(1), "0");
                Wd(a, d)
            })
        } catch (d) {}
        var b = Yg();
        Wg(C, Xb(Bb(Ob(b, 2)), ""));
        jg(Xb(vb(Ob(b, 6)), !1));
        Sg();
        b = new bh(Xb(Bb(Ob(b, 2)), ""));
        b = Ce ? new Bh(b) : b;
        const c = {
            error(...d) {
                console.error("[Ad Placement API]", ...d)
            },
            warn(...d) {
                console.warn("[Ad Placement API]", ...d)
            }
        };
        Ha() ? c.warn("Internet Explorer is not supported.") : ki(new ji(c, b))
    });
}).call(this, "[2021,\"r20240814\",\"r20110914\"]");