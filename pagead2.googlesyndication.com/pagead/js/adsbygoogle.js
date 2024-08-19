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
    var n = this || self;

    function ja(a, b) {
        var c = ka("CLOSURE_FLAGS");
        a = c && c[a];
        return a != null ? a : b
    }

    function ka(a) {
        a = a.split(".");
        for (var b = n, c = 0; c < a.length; c++)
            if (b = b[a[c]], b == null) return null;
        return b
    }

    function la(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function ma(a) {
        return Object.prototype.hasOwnProperty.call(a, na) && a[na] || (a[na] = ++oa)
    }
    var na = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        oa = 0;

    function pa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function qa(a, b, c) {
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

    function ra(a, b, c) {
        ra = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? pa : qa;
        return ra.apply(null, arguments)
    }

    function sa(a, b, c) {
        a = a.split(".");
        c = c || n;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function ta(a) {
        return a
    };
    let ua = (new Date).getTime();

    function va(a) {
        n.setTimeout(() => {
            throw a;
        }, 0)
    };

    function wa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function xa(a, b) {
        let c = 0;
        a = wa(String(a)).split(".");
        b = wa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; c == 0 && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (e[0].length == 0 && f[0].length == 0) break;
                c = ya(e[1].length == 0 ? 0 : parseInt(e[1], 10), f[1].length == 0 ? 0 : parseInt(f[1], 10)) || ya(e[2].length == 0, f[2].length == 0) || ya(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (c == 0)
        }
        return c
    }

    function ya(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var za = ja(610401301, !1),
        Aa = ja(645172343, ja(1, !0));

    function Ba() {
        var a = n.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ca;
    const Da = n.navigator;
    Ca = Da ? Da.userAgentData || null : null;

    function Ea(a) {
        return za ? Ca ? Ca.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function q(a) {
        return Ba().indexOf(a) != -1
    };

    function Fa() {
        return za ? !!Ca && Ca.brands.length > 0 : !1
    }

    function Ga() {
        return Fa() ? !1 : q("Trident") || q("MSIE")
    }

    function Ha() {
        return Fa() ? Ea("Microsoft Edge") : q("Edg/")
    }

    function Ia() {
        !q("Safari") || Ja() || (Fa() ? 0 : q("Coast")) || (Fa() ? 0 : q("Opera")) || (Fa() ? 0 : q("Edge")) || Ha() || Fa() && Ea("Opera")
    }

    function Ja() {
        return Fa() ? Ea("Chromium") : (q("Chrome") || q("CriOS")) && !(Fa() ? 0 : q("Edge")) || q("Silk")
    }

    function Ka(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function La() {
        var a = Ba();
        if (Ga()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), c[1] == "7.0")
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Ka(b);
        return (Fa() ? 0 : q("Opera")) ? a(["Version",
            "Opera"
        ]) : (Fa() ? 0 : q("Edge")) ? a(["Edge"]) : Ha() ? a(["Edg"]) : q("Silk") ? a(["Silk"]) : Ja() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ma(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Na(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = typeof a === "string" ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Oa(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Pa(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Qa(a, b) {
        a: {
            var c = a.length;
            const d = typeof a === "string" ? a.split("") : a;
            for (--c; c >= 0; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }

    function Ra(a, b) {
        return Ma(a, b) >= 0
    }

    function Sa(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Ta(a) {
        Ta[" "](a);
        return a
    }
    Ta[" "] = function() {};
    var Ua = Ga();
    !q("Android") || Ja();
    Ja();
    Ia();
    var Va = null;

    function Wa(a) {
        var b = [];
        Xa(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Xa(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = Va[l];
                if (m != null) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Za();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (h === 64 && e === -1) break;
            b(e << 2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
        }
    }

    function Za() {
        if (!Va) {
            Va = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    Va[f] === void 0 && (Va[f] = e)
                }
        }
    };
    let $a = 0,
        ab = 0;

    function bb(a) {
        const b = a >>> 0;
        $a = b;
        ab = (a - b) / 4294967296 >>> 0
    }

    function cb(a) {
        if (a < 0) {
            bb(-a);
            a = $a;
            var b = ab;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            $a = c >>> 0;
            ab = d >>> 0
        } else bb(a)
    }

    function db() {
        var a = $a,
            b = ab;
        if (b & 2147483648) var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else b >>>= 0, a >>>= 0, b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    };

    function eb(a) {
        return Array.prototype.slice.call(a)
    };
    var u = Symbol(),
        fb = Symbol(),
        gb = Symbol(),
        jb = Symbol(),
        kb = Symbol(),
        lb = Symbol();

    function mb(a) {
        a[u] |= 32;
        return a
    }

    function nb(a, b) {
        b[u] = (a | 0) & -14591
    }

    function ob(a, b) {
        b[u] = (a | 34) & -14557
    };
    var pb = {},
        qb = {};

    function rb(a) {
        return !(!a || typeof a !== "object" || a.g !== qb)
    }

    function sb(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function tb(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[u] | 0) & 1 ? !0 : !1
    }
    var ub;
    const vb = [];
    vb[u] = 55;
    ub = Object.freeze(vb);

    function wb(a) {
        if (a & 2) throw Error();
    }
    var xb = Object.freeze({});
    Object.freeze({});
    var yb = Object.freeze({});

    function zb(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let Ab, Bb;

    function Cb(a) {
        if (Bb) throw Error("");
        Bb = b => {
            n.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function Db(a) {
        if (Bb) try {
            Bb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function Eb() {
        const a = Error();
        zb(a, "incident");
        Bb ? Db(a) : va(a)
    }

    function Fb(a) {
        a = Error(a);
        zb(a, "warning");
        Db(a);
        return a
    }

    function Gb(a, b) {
        if (b != null) {
            var c;
            a == null ? c = Ab ? ? (Ab = {}) : c = a.constructor;
            a = c[b] || 0;
            a >= 4 || (c[b] = a + 1, Eb())
        }
    };

    function Hb(a, b) {
        const c = Ib;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function Jb(a) {
        a.lc = !0;
        return a
    }
    let Ib = void 0;
    const Kb = Jb(a => a !== null && a !== void 0);
    var Lb = Jb(a => typeof a === "number"),
        Mb = Jb(a => typeof a === "string"),
        Nb = Jb(a => a === void 0);
    var Qb = Jb(a => a >= Ob && a <= Pb);
    const Ob = BigInt(Number.MIN_SAFE_INTEGER),
        Pb = BigInt(Number.MAX_SAFE_INTEGER);

    function Rb(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };

    function Sb(a) {
        if (a != null && typeof a !== "boolean") {
            var b = typeof a;
            throw Error(`Expected boolean but got ${b!="object"?b:a?Array.isArray(a)?"array":b:"null"}: ${a}`);
        }
        return a
    }
    const Tb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Ub(a) {
        const b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return Number.isFinite(a)
        }
        return b !== "string" ? !1 : Tb.test(a)
    }

    function v(a) {
        if (a != null) {
            if (!Number.isFinite(a)) throw Fb("enum");
            a |= 0
        }
        return a
    }

    function Vb(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Wb(a) {
        if (typeof a !== "number") throw Fb("int32");
        if (!Number.isFinite(a)) throw Fb("int32");
        return a | 0
    }

    function Xb(a) {
        return a == null ? a : Wb(a)
    }

    function Yb(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Zb(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function ac(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function bc(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            cb(a);
            var b = $a,
                c = ab;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function cc(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        ac(a) || (a.length < 16 ? cb(Number(a)) : (a = BigInt(a), $a = Number(a & BigInt(4294967295)) >>> 0, ab = Number(a >> BigInt(32) & BigInt(4294967295))), a = db());
        return a
    }

    function dc(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function ec(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function fc(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function gc(a, b, c, d) {
        if (a != null && typeof a === "object" && a.pa === pb) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? hc(b) : new b : void 0;
        let e = c = a[u] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[u] = e);
        return new b(a)
    }

    function hc(a) {
        var b = a[fb];
        if (b) return b;
        b = new a;
        var c = b.C;
        c[u] |= 34;
        return a[fb] = b
    };
    let ic;

    function jc(a, b) {
        ic = b;
        a = new a(b);
        ic = void 0;
        return a
    };

    function kc(a, b) {
        return lc(b)
    }

    function lc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (tb(a)) return
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

    function mc(a, b, c) {
        a = eb(a);
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

    function nc(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = tb(a) ? void 0 : e && (a[u] | 0) & 2 ? a : oc(a, b, c, d !== void 0, e);
            else if (sb(a)) {
                const f = {};
                for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = nc(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function oc(a, b, c, d, e) {
        const f = d || c ? a[u] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = eb(a);
        for (let g = 0; g < a.length; g++) a[g] = nc(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function pc(a) {
        return a.pa === pb ? a.toJSON() : a != null && a instanceof Uint8Array ? new Uint8Array(a) : a
    }

    function qc(a) {
        return a.pa === pb ? a.toJSON() : lc(a)
    }
    var rc = typeof structuredClone != "undefined" ? structuredClone : a => oc(a, pc, void 0, void 0, !1);

    function sc(a, b, c = ob) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[u] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[u] = (d | 34) & -12293, a) : oc(a, sc, d & 4 ? ob : c, !0, !0)
            }
            a.pa === pb && (c = a.C, d = c[u], a = d & 2 ? a : jc(a.constructor, tc(c, d, !0)));
            return a
        }
    }

    function tc(a, b, c) {
        const d = c || b & 2 ? ob : nb,
            e = !!(b & 32);
        a = mc(a, b, f => sc(f, e, d));
        a[u] = a[u] | 32 | (c ? 2 : 0);
        return a
    }

    function uc(a) {
        const b = a.C,
            c = b[u];
        return c & 2 ? jc(a.constructor, tc(b, c, !1)) : a
    };

    function vc(a) {
        var b = wc ? .get(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        if (xc === void 0)
            if (typeof Proxy !== "function") xc = null;
            else try {
                xc = Proxy.toString().indexOf("[native code]") !== -1 ? Proxy : null
            } catch {
                xc = null
            }
        b = xc;
        if (!b) return a;
        b = new b(a, {
            set(c, d, e) {
                yc();
                c[d] = e;
                return !0
            }
        });
        zc(a, b);
        return b
    }

    function yc() {
        Eb()
    }
    let wc = void 0,
        Ac = void 0;

    function zc(a, b) {
        (wc || (wc = new WeakMap)).set(a, b);
        (Ac || (Ac = new WeakMap)).set(b, a)
    }
    let xc = void 0;

    function Bc(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[kb] = (a.constructor[kb] | 0) + 1) < 5 && Eb();
        return c === 0 ? !1 : !(c & b)
    }

    function Cc(a, b) {
        a = a.C;
        return Dc(a, a[u], b)
    }

    function Ec(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Dc(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Ec(a, b, e, c) && Gb(void 0, gb), d) : Ec(a, b, e, c)
        }
    }

    function y(a, b, c) {
        const d = a.C;
        let e = d[u];
        wb(e);
        z(d, e, b, c);
        return a
    }

    function z(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Aa) {
            let g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[u] = g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Fc(a, b, c) {
        return Gc(a, b, c, !1) !== void 0
    }

    function A(a) {
        return a === xb ? 2 : 5
    }

    function Hc(a, b, c, d) {
        const e = a.C;
        var f = e[u];
        const g = 2 & f ? 1 : d;
        d = Ic(e, f, b);
        var h = d[u] | 0;
        if (Bc(a, h, void 0, !1)) {
            if (4 & h || Object.isFrozen(d)) d = eb(d), h = Jc(h, f), f = z(e, f, b, d);
            let l = a = 0;
            for (; a < d.length; a++) {
                const m = c(d[a]);
                m != null && (d[l++] = m)
            }
            l < a && (d.length = l);
            h = Kc(h, f);
            h = (h | 20) & -4097;
            h &= -8193;
            d[u] = h;
            2 & h && Object.freeze(d)
        }
        let k;
        g === 1 || g === 4 && 32 & h ? Lc(h) || (f = h, h |= 2, h !== f && (d[u] = h), Object.freeze(d)) : (c = g !== 5 ? !1 : !!(32 & h) || Lc(h) || !!wc ? .get(d), (g === 2 || c) && Lc(h) && (d = eb(d), h = Jc(h, f), h = Mc(h, f, !1), d[u] = h, f = z(e, f, b, d)),
            Lc(h) || (b = h, h = Mc(h, f, !1), h !== b && (d[u] = h)), c && (k = vc(d)));
        return k || d
    }

    function Ic(a, b, c) {
        a = Dc(a, b, c);
        return Array.isArray(a) ? a : ub
    }

    function Kc(a, b) {
        a === 0 && (a = Jc(a, b));
        return a | 1
    }

    function Lc(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Nc(a, b, c, d) {
        const e = a.C;
        let f = e[u];
        wb(f);
        if (c == null) return z(e, f, b), a;
        c = Ac ? .get(c) || c;
        let g = c[u] | 0,
            h = g;
        var k = !!(2 & g) || Object.isFrozen(c);
        const l = !k && (void 0 === yb || !1);
        if (Bc(a, g))
            for (g = 21, k && (c = eb(c), h = 0, g = Jc(g, f), g = Mc(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = eb(c), h = 0, g = Jc(g, f), g = Mc(g, f, !0));
        g !== h && (c[u] = g);
        z(e, f, b, c);
        return a
    }

    function B(a, b, c, d) {
        const e = a.C;
        let f = e[u];
        wb(f);
        z(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function Oc(a, b) {
        var c = a.C,
            d = c[u] | 0;
        wb(a.C[u]);
        var e = d & 2;
        a = Dc(c, d, 4, !1);
        Array.isArray(a) || (a = ub);
        const f = !!(d & 32);
        let g = a[u] | 0;
        g === 0 && f && !e ? (g |= 33, a[u] = g) : g & 1 || (g |= 1, a[u] = g);
        if (e) g & 2 || (a[u] |= 34), Object.freeze(a);
        else if (2 & g || 2048 & g) a = eb(a), e = 1, f && (e |= 32), a[u] = e, z(c, d, 4, a, !1);
        c = a;
        d = c[u] | 0;
        d = (4 & d ? 4096 & d ? 4096 : 8192 & d ? 8192 : 0 : void 0) ? ? 0;
        if (Array.isArray(b))
            for (var h = 0; h < b.length; h++) c.push(dc(b[h], d));
        else
            for (h of b) c.push(dc(h, d))
    }

    function Pc(a, b, c, d) {
        const e = a.C;
        var f = e[u];
        wb(f);
        if (d == null) {
            var g = Qc(e);
            if (Rc(g, e, f, c) === b) g.set(c, 0);
            else return a
        } else {
            g = Qc(e);
            const h = Rc(g, e, f, c);
            h !== b && (h && (f = z(e, f, h)), g.set(c, b))
        }
        z(e, f, b, d);
        return a
    }

    function Sc(a, b, c) {
        return Tc(a, b) === c ? c : -1
    }

    function Tc(a, b) {
        a = a.C;
        return Rc(Qc(a), a, a[u], b)
    }

    function Qc(a) {
        return a[jb] ? ? (a[jb] = new Map)
    }

    function Rc(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            Dc(b, c, g) != null && (e !== 0 && (c = z(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function Uc(a, b, c) {
        a = a.C;
        let d = a[u];
        wb(d);
        const e = Dc(a, d, c);
        b = uc(gc(e, b, !0, d));
        e !== b && z(a, d, c, b);
        return b
    }

    function Gc(a, b, c, d) {
        a = a.C;
        let e = a[u];
        const f = Dc(a, e, c, d);
        b = gc(f, b, !1, e);
        b !== f && b != null && z(a, e, c, b, d);
        return b
    }

    function Vc(a) {
        var b = Xc;
        return (a = Gc(a, b, 4, !1)) ? a : hc(b)
    }

    function D(a, b, c) {
        b = Gc(a, b, c, !1);
        if (b == null) return b;
        a = a.C;
        let d = a[u];
        if (!(d & 2)) {
            const e = uc(b);
            e !== b && (b = e, z(a, d, c, b, !1))
        }
        return b
    }

    function E(a, b, c, d) {
        const e = a.C;
        var f = e[u];
        a = f;
        var g = !(2 & f),
            h = !!(2 & a);
        f = h ? 1 : d;
        g && (g = !h);
        d = Ic(e, a, c);
        var k = d[u] | 0;
        h = !!(4 & k);
        if (!h) {
            k = Kc(k, a);
            var l = d,
                m = a;
            const r = !!(2 & k);
            r && (m |= 2);
            let x = !r,
                t = !0,
                w = 0,
                L = 0;
            for (; w < l.length; w++) {
                const C = gc(l[w], b, !1, m);
                if (C instanceof b) {
                    if (!r) {
                        const hb = !!((C.C[u] | 0) & 2);
                        x && (x = !hb);
                        t && (t = hb)
                    }
                    l[L++] = C
                }
            }
            L < w && (l.length = L);
            k |= 4;
            k = t ? k | 16 : k & -17;
            k = x ? k | 8 : k & -9;
            l[u] = k;
            r && Object.freeze(l)
        }
        if (g && !(8 & k || !d.length && (f === 1 || f === 4 && 32 & k))) {
            Lc(k) && (d = eb(d), k = Jc(k, a), a = z(e, a, c, d));
            b = d;
            g = k;
            for (l = 0; l < b.length; l++) k = b[l], m = uc(k), k !== m && (b[l] = m);
            g |= 8;
            g = b.length ? g & -17 : g | 16;
            k = b[u] = g
        }
        let p;
        f === 1 || f === 4 && 32 & k ? Lc(k) || (c = k, k |= !d.length || 16 & k && (!h || 32 & k) ? 2 : 2048, k !== c && (d[u] = k), Object.freeze(d)) : (h = f !== 5 ? !1 : !!(32 & k) || Lc(k) || !!wc ? .get(d), (f === 2 || h) && Lc(k) && (d = eb(d), k = Jc(k, a), k = Mc(k, a, !1), d[u] = k, a = z(e, a, c, d)), Lc(k) || (c = k, k = Mc(k, a, !1), k !== c && (d[u] = k)), h && (p = vc(d)));
        return p || d
    }

    function Yc(a, b, c) {
        c == null && (c = void 0);
        return y(a, b, c)
    }

    function Zc(a, b, c, d) {
        d == null && (d = void 0);
        return Pc(a, b, c, d)
    }

    function $c(a, b, c) {
        const d = a.C;
        let e = d[u];
        wb(e);
        if (c == null) return z(d, e, b), a;
        c = Ac ? .get(c) || c;
        let f = c[u] | 0,
            g = f;
        const h = !!(2 & f) || !!(2048 & f),
            k = h || Object.isFrozen(c),
            l = !k && (void 0 === yb || !1);
        let m = !0,
            p = !0;
        for (let x = 0; x < c.length; x++) {
            var r = c[x];
            h || (r = !!((r.C[u] | 0) & 2), m && (m = !r), p && (p = r))
        }
        h || (f |= 5, f = m ? f | 8 : f & -9, f = p ? f | 16 : f & -17);
        if (l || k && f !== g) c = eb(c), g = 0, f = Jc(f, e), f = Mc(f, e, !0);
        f !== g && (c[u] = f);
        z(d, e, b, c);
        return a
    }

    function Jc(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function Mc(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function ad(a, b) {
        a = Cc(a, b);
        a != null && (typeof a === "bigint" ? Qb(a) ? a = Number(a) : (a = BigInt.asIntN(64, a), a = Qb(a) ? Number(a) : String(a)) : a = Ub(a) ? typeof a === "number" ? bc(a) : cc(a) : void 0);
        return a
    }

    function bd(a, b) {
        return a ? ? b
    }

    function cd(a, b) {
        a = Cc(a, b);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }

    function dd(a, b) {
        return Yb(Cc(a, b))
    }

    function F(a, b) {
        return fc(Cc(a, b))
    }

    function G(a, b) {
        return Vb(Cc(a, b))
    }

    function H(a, b, c = !1) {
        return bd(cd(a, b), c)
    }

    function ed(a, b) {
        return bd(dd(a, b), 0)
    }

    function fd(a, b) {
        return bd(ad(a, b), 0)
    }

    function gd(a, b) {
        a = a.C;
        let c = a[u];
        const d = Dc(a, c, b);
        var e = d == null || typeof d === "number" ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
        e != null && e !== d && z(a, c, b, e);
        return e ? ? 0
    }

    function I(a, b) {
        return bd(F(a, b), "")
    }

    function J(a, b) {
        return bd(G(a, b), 0)
    }

    function hd(a, b, c) {
        return Hc(a, b, fc, c)
    }

    function id(a, b, c) {
        return J(a, Sc(a, c, b))
    }

    function jd(a, b, c, d) {
        return D(a, b, Sc(a, d, c))
    }

    function kd(a) {
        a = F(a, 4);
        return a == null ? void 0 : a
    }

    function K(a, b, c) {
        if (c != null) a: {
            if (!Ub(c)) throw Fb("int64");
            switch (typeof c) {
                case "string":
                    c = cc(c);
                    break a;
                case "bigint":
                    c = BigInt.asIntN(64, c);
                    if (Mb(c)) {
                        if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(c)) throw Error(String(c));
                    } else if (Lb(c) && !Number.isSafeInteger(c)) throw Error(String(c));
                    c = BigInt(c);
                    break a;
                default:
                    c = bc(c)
            }
        }
        return B(a, b, c, "0")
    }

    function ld(a, b) {
        var c = performance.now();
        if (c != null && typeof c !== "number") throw Error(`Value of float/double field must be a number, found ${typeof c}: ${c}`);
        B(a, b, c, 0)
    }

    function md(a, b, c) {
        return B(a, b, ec(c), "")
    };
    let nd;
    var M = class {
        constructor(a) {
            a: {
                a == null && (a = ic);ic = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[u] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, sb(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[u] = b
            }
            this.C = a
        }
        toJSON() {
            return od(this)
        }
        A() {
            try {
                return nd = !0, JSON.stringify(od(this), kc)
            } finally {
                nd = !1
            }
        }
    };
    M.prototype.pa = pb;

    function od(a) {
        a = nd ? a.C : oc(a.C, qc, void 0, void 0, !1); {
            var b = !nd;
            let l = a.length;
            if (l) {
                var c = a[l - 1],
                    d = sb(c);
                d ? l-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var f = c;
                        var g = {};d = !1;
                        if (f)
                            for (var h in f) {
                                if (!Object.prototype.hasOwnProperty.call(f, h)) continue;
                                if (isNaN(+h)) {
                                    g[h] = f[h];
                                    continue
                                }
                                let m = f[h];
                                Array.isArray(m) && (tb(m) || rb(m) && m.size === 0) && (m = null);
                                m == null && (d = !0);
                                m != null && (g[h] = m)
                            }
                        if (d) {
                            for (let m in g) break b;
                            g = null
                        } else g = f
                    }
                    f = g == null ? c != null : g !== c
                }
                for (; l > 0; l--) {
                    h = e[l - 1];
                    if (!(h == null || tb(h) || rb(h) && h.size === 0)) break;
                    var k = !0
                }
                if (e !== a || f || k) {
                    if (!b) e = Array.prototype.slice.call(e, 0, l);
                    else if (k || f || g) e.length = l;
                    g && e.push(g)
                }
                k = e
            } else k = a
        }
        return k
    }

    function pd(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[u] |= 128;
        return jc(a, mb(b))
    };

    function qd(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = jc(a, mb(b))
            }
            return b
        }
    };
    var rd = class extends M {};
    var sd = class extends M {};

    function td(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function ud(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function vd(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function wd(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function xd(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function yd(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function zd(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Ad(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Bd(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    var Cd;
    var Dd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function Ed(a) {
        return a instanceof Dd && a.constructor === Dd ? a.g : "type_error:TrustedResourceUrl"
    }
    var Fd = {};

    function Gd(a) {
        if (Cd === void 0) {
            var b = null;
            var c = n.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ta,
                        createScript: ta,
                        createScriptURL: ta
                    })
                } catch (d) {
                    n.console && n.console.error(d.message)
                }
                Cd = b
            } else Cd = b
        }
        a = (b = Cd) ? b.createScriptURL(a) : a;
        return new Dd(a, Fd)
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Hd(a) {
        const b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            params: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }

    function Id(a, ...b) {
        if (b.length === 0) return Gd(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Gd(c)
    }

    function Jd(a, b) {
        a = Hd(Ed(a).toString());
        let c = a.params,
            d = c.length ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                h !== null && h !== void 0 && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Gd(a.path + c + a.hash)
    };

    function Kd(a, b) {
        this.width = a;
        this.height = b
    }
    Kd.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    Kd.prototype.isEmpty = function() {
        return !(this.width * this.height)
    };
    Kd.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Kd.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Kd.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    Kd.prototype.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function Ld(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Md(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Nd(a) {
        this.g = a || n.document || document
    }
    Nd.prototype.contains = function(a, b) {
        return a && b ? a == b || a.contains(b) : !1
    };

    function Od() {
        return za && Ca ? Ca.mobile : !Pd() && (q("iPod") || q("iPhone") || q("Android") || q("IEMobile"))
    }

    function Pd() {
        return za && Ca ? !Ca.mobile && (q("iPad") || q("Android") || q("Silk")) : q("iPad") || q("Android") && !q("Mobile") || q("Silk")
    };
    var Qd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Rd = /#|$/;

    function Sd(a, b) {
        var c = a.search(Rd);
        a: {
            var d = 0;
            for (var e = b.length;
                (d = a.indexOf(b, d)) >= 0 && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (f == 38 || f == 63)
                    if (f = a.charCodeAt(d + e), !f || f == 61 || f == 38 || f == 35) break a;
                d += e + 1
            }
            d = -1
        }
        if (d < 0) return null;
        e = a.indexOf("&", d);
        if (e < 0 || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    };

    function Td(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null) a: {
                try {
                    Ta(a.foo);
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

    function Ud(a) {
        return Td(a.top) ? a.top : null
    }

    function Vd(a, b) {
        const c = Wd("SCRIPT", a);
        c.src = Ed(b);
        (void 0) ? .mc || (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Xd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Yd() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Zd(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function $d(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var ae = /^([0-9.]+)px$/,
        be = /^(-?[0-9.]{1,30})$/;

    function ce(a) {
        if (!be.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function de(a) {
        return (a = ae.exec(a)) ? +a[1] : null
    }
    var ee = ud(() => Od() ? 2 : Pd() ? 1 : 0),
        fe = a => {
            Zd({
                display: "none"
            }, (b, c) => {
                a.style.setProperty(c, b, "important")
            })
        };
    let ge = [];
    const he = () => {
        const a = ge;
        ge = [];
        for (const b of a) try {
            b()
        } catch {}
    };

    function ie() {
        var a = N(je).A(ke.g, ke.defaultValue),
            b = O.document;
        if (a.length && b.head)
            for (const c of a) c && b.head && (a = Wd("META"), b.head.appendChild(a), a.httpEquiv = "origin-trial", a.content = c)
    }
    var me = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        ne = a => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: me(),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        pe = a => {
            var b = oe;
            b.readyState === "complete" || b.readyState === "interactive" ? (ge.push(a), ge.length == 1 && (window.Promise ? Promise.resolve().then(he) : window.setImmediate ? setImmediate(he) : setTimeout(he, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function Wd(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function qe(a, b, c = null, d = !1, e = !1) {
        re(a, b, c, d, e)
    }

    function re(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Wd("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = Ma(h, f);
                    k >= 0 && Array.prototype.splice.call(h, k, 1)
                }
                xd(f, "load", g);
                xd(f, "error", g)
            };
            wd(f, "load", g);
            wd(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var te = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Zd(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            se(c)
        },
        se = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : qe(b, a, void 0, !1, !1)
        };
    var oe = document,
        O = window;

    function ue(a) {
        this.g = a || {
            cookie: ""
        }
    }
    ue.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        typeof c === "object" && (h = c.nc, g = c.oc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.zb);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h : "")
    };
    ue.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = wa(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    ue.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    ue.prototype.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = wa(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; c >= 0; c--) a = b[c], this.get(a), this.set(a, "", {
            zb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function ve(a, b = window) {
        if (H(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function we(a = window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    };
    let xe = null;
    var ye = (a, b = []) => {
        let c = !1;
        n.google_logging_queue || (c = !0, n.google_logging_queue = []);
        n.google_logging_queue.push([a, b]);
        if (a = c) {
            if (xe == null) {
                xe = !1;
                try {
                    const d = Ud(n);
                    d && d.location.hash.indexOf("google_logging") !== -1 && (xe = !0);
                    we(n) ? .getItem("google_logging") && (xe = !0)
                } catch (d) {}
            }
            a = xe
        }
        a && Vd(n.document, Id `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function ze(a = n) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Ae(a = ze()) {
        return a ? Td(a.master) ? a.master : null : null
    };
    var Be = a => {
            a = Ae(ze(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        Ce = a => {
            a = a.google_unique_id;
            return typeof a === "number" ? a : 0
        },
        De = a => {
            if (!a) return "";
            a = a.toLowerCase();
            a.substring(0, 3) != "ca-" && (a = "ca-" + a);
            return a
        };
    var Ee = class {
            constructor(a, b) {
                this.error = a;
                this.context = b.context;
                this.msg = b.message || "";
                this.id = b.id || "jserror";
                this.meta = {}
            }
        },
        Fe = a => !!(a.error && a.meta && a.id);
    const Ge = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var He = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        Ie = class {
            constructor(a, b, c) {
                this.url = a;
                this.l = b;
                this.ab = !!c;
                this.depth = null
            }
        };
    let Je = null;

    function Ke() {
        if (Je === null) {
            Je = "";
            try {
                let a = "";
                try {
                    a = n.top.location.hash
                } catch (b) {
                    a = n.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Je = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Je
    };

    function Le() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Me() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    var Ne = class {
        constructor(a, b) {
            var c = Me() || Le();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Oe = n.performance,
        Pe = !!(Oe && Oe.mark && Oe.measure && Oe.clearMarks),
        Qe = ud(() => {
            var a;
            if (a = Pe) a = Ke(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function Re(a) {
        a && Oe && Qe() && (Oe.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Oe.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Se(a) {
        a.g = !1;
        if (a.i != a.j.google_js_reporting_queue) {
            if (Qe()) {
                var b = a.i;
                const c = b.length;
                b = typeof b === "string" ? b.split("") : b;
                for (let d = 0; d < c; d++) d in b && Re.call(void 0, b[d])
            }
            a.i.length = 0
        }
    }
    class Te {
        constructor(a) {
            this.i = [];
            this.j = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Qe() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Ne(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Oe && Qe() && Oe.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (Me() || Le()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Oe && Qe() && Oe.mark(b);
                !this.g || this.i.length >
                    2048 || this.i.push(a)
            }
        }
    };

    function Ue(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Ve(a, b, c, d, e) {
        const f = [];
        Zd(a, function(g, h) {
            (g = We(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function We(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(We(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(Ve(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Xe(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Ye(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Xe(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.i[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let l = Ve(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
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
    class Ze {
        constructor() {
            this.j = "&";
            this.i = {};
            this.u = 0;
            this.g = []
        }
    };

    function $e(a) {
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
    var bf = class {
        constructor(a, b, c = null) {
            this.B = a;
            this.D = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.A = this.R
        }
        ib(a) {
            this.A = a
        }
        Fa(a) {
            this.g = a
        }
        u(a) {
            this.j = a
        }
        ga(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.D;
                try {
                    Re(e), b = this.A(a, new Ee(f, {
                        message: $e(f)
                    }), void 0, c)
                } catch (g) {
                    this.R(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        ra(a, b) {
            return (...c) => this.ga(a, () => b.apply(void 0, c))
        }
        R(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const Ya = new Ze;
                var g = Ya;
                g.g.push(1);
                g.i[1] = Ue("context", a);
                Fe(b) || (b = new Ee(b, {
                    message: $e(b)
                }));
                if (b.msg) {
                    g = Ya;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.i[2] = Ue("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g) try {
                    this.g(b)
                } catch (ib) {}
                if (d) try {
                    d(b)
                } catch (ib) {}
                d = Ya;
                k = [k];
                d.g.push(3);
                d.i[3] = k;
                d = n;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (Td(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new Ie(m || "", l));
                    try {
                        d = l.parent
                    } catch (ib) {
                        d = null
                    }
                } while (d && l != d);
                for (let ib = 0, Ag = k.length - 1; ib <= Ag; ++ib) k[ib].depth =
                    Ag - ib;
                l = n;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var p = k[m];
                        p.url || (p.url = l.location.ancestorOrigins[m - 1] || "", p.ab = !0)
                    }
                var r = k;
                let Wc = new Ie(n.location.href, n, !1);
                l = null;
                const le = r.length - 1;
                for (p = le; p >= 0; --p) {
                    var x = r[p];
                    !l && Ge.test(x.url) && (l = x);
                    if (x.url && !x.ab) {
                        Wc = x;
                        break
                    }
                }
                x = null;
                const ok = r.length && r[le].url;
                Wc.depth != 0 && ok && (x = r[le]);
                f = new He(Wc, x);
                if (f.i) {
                    r = Ya;
                    var t = f.i.url || "";
                    r.g.push(4);
                    r.i[4] = Ue("top", t)
                }
                var w = {
                    url: f.g.url ||
                        ""
                };
                if (f.g.url) {
                    var L = f.g.url.match(Qd),
                        C = L[1],
                        hb = L[3],
                        $b = L[4];
                    t = "";
                    C && (t += C + ":");
                    hb && (t += "//", t += hb, $b && (t += ":" + $b));
                    var Bg = t
                } else Bg = "";
                C = Ya;
                w = [w, {
                    url: Bg
                }];
                C.g.push(5);
                C.i[5] = w;
                af(this.B, e, Ya, this.j, c)
            } catch (Ya) {
                try {
                    af(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: $e(Ya),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (Wc) {}
            }
            return this.D
        }
        ca(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.R(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    var cf = class extends M {
            constructor() {
                super()
            }
        },
        df = [2, 3, 4];
    var ef = class extends M {},
        ff = [3, 4, 5],
        gf = [6, 7];
    var hf = class extends M {
            constructor() {
                super()
            }
        },
        jf = [4, 5];

    function kf(a, b) {
        var c = E(a, ef, 2, A());
        if (!c.length) return lf(a, b);
        a = J(a, 1);
        if (a === 1) return c = kf(c[0], b), c.success ? {
            success: !0,
            value: !c.value
        } : c;
        c = Oa(c, d => kf(d, b));
        switch (a) {
            case 2:
                return c.find(d => d.success && !d.value) ? ? c.find(d => !d.success) ? ? {
                    success: !0,
                    value: !0
                };
            case 3:
                return c.find(d => d.success && d.value) ? ? c.find(d => !d.success) ? ? {
                    success: !0,
                    value: !1
                };
            default:
                return {
                    success: !1,
                    N: 3
                }
        }
    }

    function lf(a, b) {
        var c = Tc(a, ff);
        a: {
            switch (c) {
                case 3:
                    var d = id(a, 3, ff);
                    break a;
                case 4:
                    d = id(a, 4, ff);
                    break a;
                case 5:
                    d = id(a, 5, ff);
                    break a
            }
            d = void 0
        }
        if (!d) return {
            success: !1,
            N: 2
        };
        b = (b = b[c]) && b[d];
        if (!b) return {
            success: !1,
            property: d,
            fa: c,
            N: 1
        };
        let e;
        try {
            var f = hd(a, 8, A());
            e = b(...f)
        } catch (g) {
            return {
                success: !1,
                property: d,
                fa: c,
                N: 2
            }
        }
        f = J(a, 1);
        if (f === 4) return {
            success: !0,
            value: !!e
        };
        if (f === 5) return {
            success: !0,
            value: e != null
        };
        if (f === 12) a = I(a, Sc(a, gf, 7));
        else a: {
            switch (c) {
                case 4:
                    a = gd(a, Sc(a, gf, 6));
                    break a;
                case 5:
                    a = I(a,
                        Sc(a, gf, 7));
                    break a
            }
            a = void 0
        }
        if (a == null) return {
            success: !1,
            property: d,
            fa: c,
            N: 3
        };
        if (f === 6) return {
            success: !0,
            value: e === a
        };
        if (f === 9) return {
            success: !0,
            value: e != null && xa(String(e), a) === 0
        };
        if (e == null) return {
            success: !1,
            property: d,
            fa: c,
            N: 4
        };
        switch (f) {
            case 7:
                c = e < a;
                break;
            case 8:
                c = e > a;
                break;
            case 12:
                c = Mb(a) && Mb(e) && (new RegExp(a)).test(e);
                break;
            case 10:
                c = e != null && xa(String(e), a) === -1;
                break;
            case 11:
                c = e != null && xa(String(e), a) === 1;
                break;
            default:
                return {
                    success: !1,
                    N: 3
                }
        }
        return {
            success: !0,
            value: c
        }
    }

    function mf(a, b) {
        return a ? b ? kf(a, b) : {
            success: !1,
            N: 1
        } : {
            success: !0,
            value: !0
        }
    };
    var Xc = class extends M {};
    var nf = class extends M {
        getValue() {
            return D(this, Xc, 2)
        }
    };
    var of = class extends M {}, pf = qd( of ), qf = [1, 2, 3, 6, 7, 8];
    var rf = class extends M {
        constructor() {
            super()
        }
    };

    function sf(a, b) {
        try {
            const c = d => [{
                [d.Ga]: d.Da
            }];
            return JSON.stringify([a.filter(d => d.oa).map(c), od(b), a.filter(d => !d.oa).map(c)])
        } catch (c) {
            return tf(c, b), ""
        }
    }

    function tf(a, b) {
        try {
            te({
                m: $e(a instanceof Error ? a : Error(String(a))),
                b: J(b, 1) || null,
                v: I(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var uf = class {
        constructor(a, b) {
            var c = new rf;
            a = B(c, 1, v(a), 0);
            b = md(a, 2, b);
            a = b.C;
            c = a[u];
            this.j = c & 2 ? b : jc(b.constructor, tc(a, c, !0))
        }
    };
    var vf = class extends M {
        constructor() {
            super()
        }
    };
    var wf = class extends M {
        constructor() {
            super()
        }
        getValue() {
            return J(this, 1)
        }
    };
    var xf = class extends M {
        constructor() {
            super()
        }
        getWidth() {
            Gb(this, lb);
            return fd(this, 1)
        }
        getHeight() {
            Gb(this, lb);
            return fd(this, 2)
        }
    };
    var yf = class extends M {
        constructor() {
            super()
        }
        getContentUrl() {
            return I(this, 4)
        }
    };
    var zf = class extends M {};

    function Af(a) {
        return Uc(a, zf, 3)
    }
    var Bf = class extends M {};

    function Cf(a, b) {
        return md(a, 1, b)
    }
    var Df = class extends M {
        constructor() {
            super()
        }
        getContentUrl() {
            return I(this, 1)
        }
    };
    var Ef = class extends M {};

    function Ff(a) {
        var b = new Gf;
        return B(b, 1, v(a), 0)
    }
    var Gf = class extends M {
        constructor() {
            super()
        }
    };
    var Hf = class extends M {
            constructor() {
                super()
            }
        },
        If = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14];
    var Jf = class extends M {
        constructor() {
            super()
        }
    };

    function Kf(a, b) {
        return B(a, 1, v(b), 0)
    }

    function Lf(a, b) {
        return B(a, 2, v(b), 0)
    }
    var Mf = class extends M {
        constructor() {
            super()
        }
    };
    var Nf = class extends M {
            constructor() {
                super()
            }
        },
        Of = [1, 2];

    function Pf(a, b) {
        return Yc(a, 1, b)
    }

    function Qf(a, b) {
        return $c(a, 2, b)
    }

    function Rf(a, b) {
        return Nc(a, 4, b, Wb)
    }

    function Sf(a, b) {
        return $c(a, 5, b)
    }

    function Tf(a, b) {
        return B(a, 6, v(b), 0)
    }
    var Uf = class extends M {
        constructor() {
            super()
        }
    };
    var Vf = class extends M {
            constructor() {
                super()
            }
        },
        Wf = [1, 2, 3, 4, 6];
    var Xf = class extends M {
        constructor() {
            super()
        }
    };

    function Yf(a) {
        var b = new Zf;
        return Zc(b, 4, $f, a)
    }
    var Zf = class extends M {
            constructor() {
                super()
            }
            getTagSessionCorrelator() {
                Gb(this, lb);
                return fd(this, 2)
            }
        },
        $f = [4, 5, 7, 8, 9];
    var ag = class extends M {
        constructor() {
            super()
        }
    };
    var bg = class extends M {
        constructor() {
            super()
        }
    };
    var cg = class extends M {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            Gb(this, lb);
            return fd(this, 1)
        }
    };
    var dg = class extends M {
            constructor() {
                super()
            }
        },
        eg = [4, 6];
    class fg extends uf {
        constructor() {
            super(...arguments)
        }
    }

    function gg(a, ...b) {
        hg(a, ...b.map(c => ({
            oa: !0,
            Ga: 3,
            Da: od(c)
        })))
    }

    function ig(a, ...b) {
        hg(a, ...b.map(c => ({
            oa: !0,
            Ga: 4,
            Da: od(c)
        })))
    }

    function jg(a, ...b) {
        hg(a, ...b.map(c => ({
            oa: !0,
            Ga: 7,
            Da: od(c)
        })))
    }
    var kg = class extends fg {};
    var lg = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function hg(a, ...b) {
        try {
            a.D && sf(a.g.concat(b), a.j).length >= 65536 && mg(a), a.u && !a.A && (a.A = !0, ng(a.u, () => {
                mg(a)
            })), a.g.push(...b), a.g.length >= a.B && mg(a), a.g.length && a.i === null && (a.i = setTimeout(() => {
                mg(a)
            }, a.I))
        } catch (c) {
            tf(c, a.j)
        }
    }

    function mg(a) {
        a.i !== null && (clearTimeout(a.i), a.i = null);
        if (a.g.length) {
            var b = sf(a.g, a.j);
            a.H("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var og = class extends kg {
            constructor(a, b, c, d, e, f) {
                super(a, b);
                this.H = lg;
                this.I = c;
                this.B = d;
                this.D = e;
                this.u = f;
                this.g = [];
                this.i = null;
                this.A = !1
            }
        },
        pg = class extends og {
            constructor(a, b, c = 1E3, d = 100, e = !1, f) {
                super(a, b, c, d, e && !0, f)
            }
        };

    function qg(a, b) {
        var c = Date.now();
        c = Number.isFinite(c) ? Math.round(c) : 0;
        b = K(b, 1, c);
        c = ne(window);
        b = K(b, 2, c);
        return K(b, 6, a.A)
    }

    function rg(a, b, c, d, e, f) {
        if (a.j) {
            var g = Lf(Kf(new Mf, b), c);
            b = Tf(Qf(Pf(Sf(Rf(new Uf, d), e), g), a.g.slice()), f);
            b = Yf(b);
            ig(a.i, qg(a, b));
            if (f === 1 || f === 3 || f === 4 && !a.g.some(h => J(h, 1) === J(g, 1) && J(h, 2) === c)) a.g.push(g), a.g.length > 100 && a.g.shift()
        }
    }

    function sg(a, b, c, d) {
        if (a.j) {
            var e = new Jf;
            b = y(e, 1, Xb(b));
            c = y(b, 2, Xb(c));
            d = y(c, 3, v(d));
            c = new Zf;
            d = Zc(c, 8, $f, d);
            ig(a.i, qg(a, d))
        }
    }

    function tg(a, b, c, d, e) {
        if (a.j) {
            var f = new hf;
            b = Yc(f, 1, b);
            c = y(b, 2, v(c));
            d = y(c, 3, Xb(d));
            if (e.fa === void 0) Pc(d, 4, jf, v(e.N));
            else switch (e.fa) {
                case 3:
                    c = new cf;
                    c = Pc(c, 2, df, v(e.property));
                    e = y(c, 1, v(e.N));
                    Zc(d, 5, jf, e);
                    break;
                case 4:
                    c = new cf;
                    c = Pc(c, 3, df, v(e.property));
                    e = y(c, 1, v(e.N));
                    Zc(d, 5, jf, e);
                    break;
                case 5:
                    c = new cf, c = Pc(c, 4, df, v(e.property)), e = y(c, 1, v(e.N)), Zc(d, 5, jf, e)
            }
            e = new Zf;
            e = Zc(e, 9, $f, d);
            ig(a.i, qg(a, e))
        }
    }
    var ug = class {
        constructor(a, b, c, d = new pg(6, "unknown", b)) {
            this.A = a;
            this.u = c;
            this.i = d;
            this.g = [];
            this.j = a > 0 && Yd() < 1 / a
        }
    };
    var N = a => {
        var b = "Ca";
        if (a.Ca && a.hasOwnProperty(b)) return a.Ca;
        b = new a;
        return a.Ca = b
    };
    var vg = class {
        constructor() {
            this.M = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    };
    var wg = /^true$/.test("false");

    function xg(a, b) {
        switch (b) {
            case 1:
                return id(a, 1, qf);
            case 2:
                return id(a, 2, qf);
            case 3:
                return id(a, 3, qf);
            case 6:
                return id(a, 6, qf);
            case 8:
                return id(a, 8, qf);
            default:
                return null
        }
    }

    function yg(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return H(a, 1);
            case 7:
                return I(a, 3);
            case 2:
                return gd(a, 2);
            case 3:
                return I(a, 3);
            case 6:
                return hd(a, 4, A());
            case 8:
                return hd(a, 4, A());
            default:
                return null
        }
    }
    const zg = ud(() => {
        if (!wg) return {};
        try {
            var a = window;
            try {
                var b = a.sessionStorage
            } catch {
                b = null
            }
            if (b = b ? .getItem("GGDFSSK")) return JSON.parse(b)
        } catch {}
        return {}
    });

    function Cg(a, b, c, d = 0) {
        N(Dg).j[d] = N(Dg).j[d] ? .add(b) ? ? (new Set).add(b);
        const e = zg();
        if (e[b] != null) return e[b];
        b = Eg(d)[b];
        if (!b) return c;
        b = pf(JSON.stringify(b));
        b = Fg(b);
        a = yg(b, a);
        return a != null ? a : c
    }

    function Fg(a) {
        const b = N(vg).M;
        if (b && Tc(a, qf) !== 8) {
            const c = Qa(E(a, nf, 5, A()), d => {
                d = mf(D(d, ef, 1), b);
                return d.success && d.value
            });
            if (c) return c.getValue() ? ? null
        }
        return D(a, Xc, 4) ? ? null
    }
    class Dg {
        constructor() {
            this.i = {};
            this.u = [];
            this.j = {};
            this.g = new Map
        }
    }

    function Gg(a, b = !1, c) {
        return !!Cg(1, a, b, c)
    }

    function Hg(a, b = 0, c) {
        a = Number(Cg(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Ig(a, b = "", c) {
        a = Cg(3, a, b, c);
        return typeof a === "string" ? a : b
    }

    function Jg(a, b = [], c) {
        a = Cg(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Kg(a, b = [], c) {
        a = Cg(8, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Eg(a) {
        return N(Dg).i[a] || (N(Dg).i[a] = {})
    }

    function Lg(a, b) {
        const c = Eg(b);
        Zd(a, (d, e) => {
            if (c[e]) {
                const g = pf(JSON.stringify(d));
                if (G(g, Sc(g, qf, 8)) != null) {
                    var f = pf(JSON.stringify(c[e]));
                    d = Uc(g, Xc, 4);
                    f = hd(Vc(f), 4, A());
                    Oc(d, f)
                }
                c[e] = od(g)
            } else c[e] = d
        })
    }

    function Mg(a, b, c, d, e = !1) {
        var f = [],
            g = [];
        for (const p of b) {
            b = Eg(p);
            for (const r of a) {
                var h = Tc(r, qf);
                const x = xg(r, h);
                if (x) {
                    a: {
                        var k = x;
                        var l = h,
                            m = N(Dg).g.get(p) ? .get(x) ? .slice(0) ? ? [];
                        const t = new Vf;
                        switch (l) {
                            case 1:
                                Pc(t, 1, Wf, v(k));
                                break;
                            case 2:
                                Pc(t, 2, Wf, v(k));
                                break;
                            case 3:
                                Pc(t, 3, Wf, v(k));
                                break;
                            case 6:
                                Pc(t, 4, Wf, v(k));
                                break;
                            case 8:
                                Pc(t, 6, Wf, v(k));
                                break;
                            default:
                                k = void 0;
                                break a
                        }
                        Nc(t, 5, m, Wb);k = t
                    }
                    k && N(Dg).j[p] ? .has(x) && f.push(k);h === 8 && b[x] ? (k = pf(JSON.stringify(b[x])), h = Uc(r, Xc, 4), k = hd(Vc(k), 4, A()), Oc(h, k)) :
                    k && N(Dg).g.get(p) ? .has(x) && g.push(k);e || (h = x, k = p, l = d, m = N(Dg), m.g.has(k) || m.g.set(k, new Map), m.g.get(k).has(h) || m.g.get(k).set(h, []), l && m.g.get(k).get(h).push(l));b[x] = od(r)
                }
            }
        }
        if (f.length || g.length) a = d ? ? void 0, c.j && c.u && (d = new Xf, f = $c(d, 2, f), g = $c(f, 3, g), a && B(g, 1, Xb(a), 0), f = new Zf, g = Zc(f, 7, $f, g), ig(c.i, qg(c, g)))
    }

    function Ng(a, b) {
        b = Eg(b);
        for (const c of a) {
            a = pf(JSON.stringify(c));
            const d = Tc(a, qf);
            (a = xg(a, d)) && (b[a] || (b[a] = c))
        }
    }

    function Og() {
        return Object.keys(N(Dg).i).map(a => Number(a))
    }

    function Pg(a) {
        N(Dg).u.includes(a) || Lg(Eg(4), a)
    };

    function P(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function Qg(a, b, c) {
        return b[a] || c
    }

    function Rg(a) {
        P(5, Gg, a);
        P(6, Hg, a);
        P(7, Ig, a);
        P(8, Jg, a);
        P(17, Kg, a);
        P(13, Ng, a);
        P(15, Pg, a)
    }

    function Sg(a) {
        P(4, b => {
            N(vg).M = b
        }, a);
        P(9, (b, c) => {
            var d = N(vg);
            d.M[3][b] == null && (d.M[3][b] = c)
        }, a);
        P(10, (b, c) => {
            var d = N(vg);
            d.M[4][b] == null && (d.M[4][b] = c)
        }, a);
        P(11, (b, c) => {
            var d = N(vg);
            d.M[5][b] == null && (d.M[5][b] = c)
        }, a);
        P(14, b => {
            var c = N(vg);
            for (const d of [3, 4, 5]) Object.assign(c.M[d], b[d])
        }, a)
    }

    function Tg(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Ug(a, b, c) {
        a.j = Qg(1, b, () => {});
        a.u = (d, e) => Qg(2, b, () => [])(d, c, e);
        a.g = () => Qg(3, b, () => [])(c);
        a.i = d => {
            Qg(16, b, () => {})(d, c)
        }
    }
    class Vg {
        j() {}
        i() {}
        u() {
            return []
        }
        g() {
            return []
        }
    };

    function af(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Ze ? f = c : (f = new Ze, Zd(c, (h, k) => {
                var l = f;
                const m = l.u++;
                h = Ue(k, h);
                l.g.push(m);
                l.i[m] = h
            }));
            const g = Ye(f, "/pagead/gen_204?id=" + b + "&");
            g && qe(n, g)
        } catch (f) {}
    }

    function Wg(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Xg {
        constructor() {
            this.g = Math.random()
        }
    };
    let Yg, Zg;
    const $g = new Te(window);
    (a => {
        Yg = a ? ? new Xg;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Wg(Yg, window.google_srt);
        Zg = new bf(Yg, !0, $g);
        Zg.Fa(() => {});
        Zg.u(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || Se($g) : $g.g && wd(window, "load", () => {
            window.google_measure_js_timing || Se($g)
        })
    })();
    var ah = {
        Ub: 0,
        Tb: 1,
        Qb: 2,
        Lb: 3,
        Rb: 4,
        Mb: 5,
        Sb: 6,
        Ob: 7,
        Pb: 8,
        Kb: 9,
        Nb: 10,
        Vb: 11
    };
    var bh = {
        Xb: 0,
        Yb: 1,
        Wb: 2
    };

    function ch(a) {
        if (a.g != 0) throw Error("Already resolved/rejected.");
    }
    var fh = class {
        constructor() {
            this.i = new dh(this);
            this.g = 0
        }
        resolve(a) {
            ch(this);
            this.g = 1;
            this.u = a;
            eh(this.i)
        }
        reject(a) {
            ch(this);
            this.g = 2;
            this.j = a;
            eh(this.i)
        }
    };

    function eh(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.g.u);
                break;
            case 2:
                a.j && a.j(a.g.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var dh = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.i) throw Error("Then functions already set.");
            this.i = a;
            this.j = b;
            eh(this)
        }
    };
    const gh = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new gh(Na(this.g, a))
        }
        apply(a) {
            return new gh(a(this.g.slice(0)))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new gh(b)
        }
    };

    function hh(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const jh = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = ih(a);
            this.g[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = ih(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function ih(a) {
        return a instanceof Object ? String(ma(a)) : a + ""
    };

    function kh(a) {
        return new lh({
            value: a
        }, null)
    }

    function mh(a) {
        return new lh(null, a)
    }

    function nh(a) {
        try {
            return kh(a())
        } catch (b) {
            return mh(b)
        }
    }

    function oh(a) {
        return a.g != null ? a.getValue() : null
    }

    function ph(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function qh(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class lh {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()), a instanceof lh ? a : kh(a)) : this
        }
    };
    const rh = class {
        constructor(a) {
            this.g = new jh;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return this.g.g[ih(a)] !== void 0
        }
    };
    class sh {
        constructor() {
            this.g = new jh
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new rh, this.g.set(a, c));
            c.add(b)
        }
    };
    var Q = class extends M {
        getId() {
            return F(this, 3)
        }
    };
    class th {
        constructor({
            ob: a,
            Zb: b,
            kc: c,
            Cb: d
        }) {
            this.g = b;
            this.u = new gh(a || []);
            this.j = d;
            this.i = c
        }
    };
    const vh = a => {
            const b = [],
                c = a.u;
            c && c.g.length && b.push({
                aa: "a",
                ea: uh(c)
            });
            a.g != null && b.push({
                aa: "as",
                ea: a.g
            });
            a.i != null && b.push({
                aa: "i",
                ea: String(a.i)
            });
            a.j != null && b.push({
                aa: "rp",
                ea: String(a.j)
            });
            b.sort(function(d, e) {
                return d.aa.localeCompare(e.aa)
            });
            b.unshift({
                aa: "t",
                ea: "aa"
            });
            return b
        },
        uh = a => {
            a = a.g.slice(0).map(wh);
            a = JSON.stringify(a);
            return $d(a)
        },
        wh = a => {
            const b = {};
            F(a, 7) != null && (b.q = F(a, 7));
            dd(a, 2) != null && (b.o = dd(a, 2));
            dd(a, 5) != null && (b.p = dd(a, 5));
            return b
        };
    var xh = class extends M {
        setLocation(a) {
            return y(this, 1, v(a))
        }
    };

    function yh(a) {
        const b = [].slice.call(arguments).filter(td(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Xa || []);
            d = Object.assign(d, e.hb)
        });
        return new zh(c, d)
    }

    function Ah(a) {
        switch (a) {
            case 1:
                return new zh(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new zh(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new zh(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new zh(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Bh(a) {
        if (a == null) var b = null;
        else {
            var c = vh(a);
            a = [];
            for (b of c) c = String(b.ea), a.push(b.aa + "." + (c.length <= 20 ? c : c.slice(0, 19) + "_"));
            b = new zh(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class zh {
        constructor(a, b) {
            this.Xa = a;
            this.hb = b
        }
    };
    const Ch = new zh(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var Dh = qd(class extends M {});
    var Eh = class extends M {};
    var Fh = class extends M {};
    var Gh = class extends M {};
    var Hh = class extends M {};
    var Ih = class extends M {
        constructor() {
            super()
        }
    };

    function Jh(a) {
        if (a.nodeType != 1) var b = !1;
        else if (b = a.tagName == "INS") a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };
    var R = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        S = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Kh = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var Lh = new R(1333),
        Mh = new S(1359),
        Nh = new S(1358),
        Oh = new R(1360),
        Ph = new S(1357),
        Qh = new R(1322, !0),
        Rh = new R(1345),
        Sh = new R(1355, !0),
        Th = new R(1332),
        Uh = new S(1130, 100),
        Vh = new S(1340, .2),
        Wh = new S(1338, .3),
        Xh = new S(1336, 1.2),
        Yh = new S(1339, .3),
        Zh = new R(1337),
        $h = new class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        }(14),
        ai = new R(1342),
        bi = new R(1344),
        ci = new S(1343, 300),
        di = new R(316),
        ei = new R(1207, !0),
        fi = new R(313),
        gi = new R(369),
        hi = new R(1318, !0),
        ii = new R(217),
        ji = new R(626390500),
        ki = new Kh(627094447,
            "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30 34".split(" ")),
        li = new S(643258048),
        mi = new S(643258049),
        ni = new S(579884443, .7),
        oi = new Kh(641845510, ["33"]),
        pi = new R(622128248, !0),
        qi = new Kh(635821288, ["30_19"]),
        ri = new Kh(636146137, ["30_6"]),
        si = new R(579884441, !0),
        ti = new Kh(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30 34".split(" ")),
        ui = new S(579884442, .7),
        vi = new S(658370512),
        wi = new R(626062008),
        xi = new R(643258050),
        yi = new R(506914611),
        zi = new R(626062007),
        Ai = new R(1120),
        Bi = new R(661251189),
        Ci = new S(1079, 5),
        Di = new R(10009, !0),
        Ei = new R(10013),
        ke = new class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        }(1934, ["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
            "A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0/9AORwCSapUO/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
        ]),
        Fi = new R(84);
    var je = class {
        constructor() {
            const a = {};
            this.i = (b, c) => a[b] != null ? a[b] : c;
            this.u = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.j = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.B = () => {}
        }
    };

    function T(a) {
        return N(je).i(a.g, a.defaultValue)
    }

    function U(a) {
        return N(je).u(a.g, a.defaultValue)
    }

    function Gi(a) {
        return N(je).j(a.g, a.defaultValue)
    };

    function Hi(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && d.nodeType == 8;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Jh(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Ii(a, b) {
        const c = e => {
                e = Ji(e);
                return e == null ? !1 : 0 < e
            },
            d = e => {
                e = Ji(e);
                return e == null ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: Ki(a.previousSibling, c),
                    ka: e => Ki(e.previousSibling, c),
                    qa: 0
                };
            case 2:
                return {
                    init: Ki(a.lastChild, c),
                    ka: e => Ki(e.previousSibling, c),
                    qa: 0
                };
            case 3:
                return {
                    init: Ki(a.nextSibling, d),
                    ka: e => Ki(e.nextSibling, d),
                    qa: 3
                };
            case 1:
                return {
                    init: Ki(a.firstChild, d),
                    ka: e => Ki(e.nextSibling, d),
                    qa: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Ji(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Ki(a, b) {
        return a && b(a) ? a : null
    };
    var Li = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Mi = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function Ni(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function Oi(a) {
        return Ni(a).clientWidth ? ? void 0
    };

    function Pi(a, b) {
        do {
            const c = Xd(a, b);
            if (c && c.position == "fixed") return !1
        } while (a = a.parentElement);
        return !0
    };

    function Qi(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = de(a[c[e]]);
                d = d === null ? null : Math.round(d);
                d != null && (b[f] = d)
            }
        }
    }

    function Ri(a, b) {
        return !((be.test(b.google_ad_width) || ae.test(a.style.width)) && (be.test(b.google_ad_height) || ae.test(a.style.height)))
    }

    function Si(a, b) {
        return (a = Ti(a, b)) ? a.y : 0
    }

    function Ti(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }

    function Ui(a, b, c, d, e) {
        if (a !== a.top) return Ud(a) ? 3 : 16;
        if (!(Oi(a) < 488)) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        const f = Oi(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = e.google_full_width_responsive !== "true") a: {
                c = b.parentElement;
                for (b = Oi(a); c; c = c.parentElement)
                    if ((d = Xd(c, a)) && (e = de(d.width)) && !(e >= b) && d.overflow !== "visible") {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function Vi(a, b, c, d) {
        const e = Ui(b, c, a, U(Yh), d);
        e !== !0 ? a = e : d.google_full_width_responsive === "true" || Pi(c, b) ? (b = Oi(b), a = b - a, a = b && a >= 0 ? !0 : b ? a < -10 ? 11 : a < 0 ? 14 : 12 : 10) : a = 9;
        return a
    }

    function Wi(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function Xi(a, b) {
        if (b.nodeType === 3) return /\S/.test(b.data);
        if (b.nodeType === 1) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            let c;
            try {
                c = Xd(b, a)
            } catch (d) {}
            return !c || c.display !== "none" && !(c.position === "absolute" && (c.visibility === "hidden" || c.visibility === "collapse"))
        }
        return !1
    }

    function Yi(a, b, c) {
        a = Ti(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function Zi(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = Xd(c, a)) ? c.direction : "" : "";
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            Wi(b, c, "0px");
            d.width = `${Oi(a)}px`;
            if (Yi(a, b, c) !== 0) {
                Wi(b, c, "0px");
                var e = Yi(a, b, c);
                Wi(b, c, `${-1*e}px`);
                a = Yi(a, b, c);
                a !== 0 && a !== e && Wi(b, c, `${e/(a-e)*e}px`)
            }
            d.zIndex = "30"
        }
    };
    var $i = class {
        constructor(a, b) {
            this.Z = a;
            this.j = b
        }
        height() {
            return this.j
        }
        g(a) {
            return a > U(ci) && this.j > 300 ? this.Z : Math.min(1200, Math.round(a))
        }
        i() {}
    };
    var aj = (a, b, c) => {
            let d;
            return a.style && !!a.style[c] && de(a.style[c]) || (d = Xd(a, b)) && !!d[c] && de(d[c]) || null
        },
        bj = (a, b) => {
            let c;
            return a.style && a.style.zIndex || (c = Xd(a, b)) && c.zIndex || null
        },
        cj = a => b => b.Z <= a,
        fj = (a, b, c, d) => {
            const e = a && dj(c, b),
                f = ej(b, d);
            return g => !(e && g.height() >= f)
        },
        gj = a => b => b.height() <= a,
        dj = (a, b) => Si(a, b) < Ni(b).clientHeight - 100,
        hj = (a, b) => {
            var c = aj(b, a, "height");
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = aj(b, a, "height");
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style &&
                de(b.style.height)) && (c = Math.min(c, d)), (d = aj(b, a, "maxHeight")) && (c = Math.min(c, d)); while (b.parentElement && (b = b.parentElement) && b.tagName !== "HTML");
            return c
        };
    const ej = (a, b) => {
        const c = Ce(a) === 0;
        return b && c ? Math.max(250, 2 * Ni(a).clientHeight / 3) : 250
    };
    var ij = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_ad_start_delay_hint: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0,
        google_overlays: !0,
        google_privacy_treatments: !0,
        google_special_category_data: !0,
        google_ad_intent_query: !0,
        google_ad_intent_qetid: !0,
        google_ad_intent_eids: !0
    };
    const jj = RegExp("(^| )adsbygoogle($| )");

    function kj(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Ld(d.property);
            a[e] = d.value
        }
    };
    var lj = class extends M {
        g() {
            return cd(this, 23)
        }
    };
    var mj = class extends M {
        g() {
            return ad(this, 1)
        }
    };
    var nj = class extends M {};
    var oj = class extends M {};
    var pj = class extends M {};
    var qj = class extends M {};
    var rj = class extends M {
            getName() {
                return F(this, 4)
            }
        },
        sj = [1, 2, 3];
    var tj = class extends M {};
    var uj = class extends M {};
    var wj = class extends M {
            g() {
                return jd(this, uj, 2, vj)
            }
        },
        vj = [1, 2];
    var xj = class extends M {
        g() {
            return D(this, wj, 3)
        }
    };
    var yj = class extends M {},
        zj = qd(yj);

    function Aj(a) {
        var b = [];
        hh(a.getElementsByTagName("p"), function(c) {
            Bj(c) >= 100 && b.push(c)
        });
        return b
    }

    function Bj(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        hh(a.childNodes, function(c) {
            b += Bj(c)
        });
        return b
    }

    function Cj(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Dj(a, b) {
        if (a.g == null) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }

    function Ej(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.u)
        } catch (g) {}
        if (!c.length) return [];
        b = Sa(c);
        b = Dj(a, b);
        typeof a.i === "number" && (c = a.i, c < 0 && (c += b.length), b = c >= 0 && c < b.length ? [b[c]] : []);
        if (typeof a.j === "number") {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Aj(b[d]),
                    f = a.j;
                f < 0 && (f += e.length);
                f >= 0 && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const Fj = class {
        constructor(a, b, c, d) {
            this.u = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.u,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    class Gj {
        constructor() {
            var a = Id `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.j = !1;
            this.A = Math.random();
            this.i = this.R;
            this.B = a
        }
        Fa(a) {
            this.g = a
        }
        u(a) {
            this.j = a
        }
        ib(a) {
            this.i = a
        }
        R(a, b, c = .01, d, e = "jserror") {
            if ((this.j ? this.A : Math.random()) > c) return !1;
            Fe(b) || (b = new Ee(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            n.google_js_errors = n.google_js_errors || [];
            n.google_js_errors.push(b);
            n.error_rep_loaded || (Vd(n.document, this.B), n.error_rep_loaded = !0);
            return !1
        }
        ga(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.i(a, d, .01, c, "jserror")) throw d;
            }
        }
        ra(a, b) {
            return (...c) => this.ga(a, () => b.apply(void 0, c))
        }
        ca(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.R(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    const Hj = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var Ij = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = typeof queueMicrotask !== "undefined";
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = Me();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (m) {
                    l = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && Hj({
                        label: a.toString(),
                        value: h,
                        duration: (Me() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        Jj = (a, b) => Ij(a, b, (c, d) => {
            (new Gj).R(c, d)
        }, void 0, !1);

    function Kj(a, b, c) {
        return Ij(a, b, void 0, c, !0).apply()
    }

    function Lj(a) {
        if (!a) return null;
        var b = F(a, 7);
        if (F(a, 1) || a.getId() || hd(a, 4, A()).length > 0) {
            var c = F(a, 3),
                d = F(a, 1),
                e = hd(a, 4, A(xb));
            b = dd(a, 2);
            var f = dd(a, 5);
            a = Mj(G(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Cj(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Cj(e[c]);
            b = (e = g) ? new Fj(e, b, f, a) : null
        } else b = b ? new Fj(b, dd(a, 2), dd(a, 5), Mj(G(a, 6))) : null;
        return b
    }
    var Nj = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Mj(a) {
        return a == null ? a : Nj[a]
    }
    var Oj = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Pj(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Qj(a) {
        a = Pj(a);
        return a.optimization = a.optimization || {}
    };
    var Rj = a => {
        switch (G(a, 8)) {
            case 1:
            case 2:
                if (a == null) var b = null;
                else b = D(a, Q, 1), b == null ? b = null : (a = G(a, 2), b = a == null ? null : new th({
                    ob: [b],
                    Cb: a
                }));
                return b != null ? kh(b) : mh(Error("Missing dimension when creating placement id"));
            case 3:
                return mh(Error("Missing dimension when creating placement id"));
            default:
                return mh(Error("Invalid type: " + G(a, 8)))
        }
    };
    var Sj = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Tj(a, b) {
        const c = new sh,
            d = new rh;
        b.forEach(e => {
            if (jd(e, pj, 1, sj)) {
                e = jd(e, pj, 1, sj);
                if (D(e, Eh, 1) && D(D(e, Eh, 1), Q, 1) && D(e, Eh, 2) && D(D(e, Eh, 2), Q, 1)) {
                    const g = Uj(a, D(D(e, Eh, 1), Q, 1)),
                        h = Uj(a, D(D(e, Eh, 2), Q, 1));
                    if (g && h)
                        for (var f of Sj({
                                anchor: g,
                                position: G(D(e, Eh, 1), 2)
                            }, {
                                anchor: h,
                                position: G(D(e, Eh, 2), 2)
                            })) c.set(ma(f.anchor), f.position)
                }
                D(e, Eh, 3) && D(D(e, Eh, 3), Q, 1) && (f = Uj(a, D(D(e, Eh, 3), Q, 1))) && c.set(ma(f), G(D(e, Eh, 3), 2))
            } else jd(e, qj, 2, sj) ? Vj(a, jd(e, qj, 2, sj), c) : jd(e, oj, 3, sj) && Wj(a, jd(e, oj, 3, sj), d)
        });
        return new Xj(c,
            d)
    }
    class Xj {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const Vj = (a, b, c) => {
            D(b, Eh, 2) ? (b = D(b, Eh, 2), (a = Uj(a, D(b, Q, 1))) && c.set(ma(a), G(b, 2))) : D(b, Q, 1) && (a = Yj(a, D(b, Q, 1))) && a.forEach(d => {
                d = ma(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Wj = (a, b, c) => {
            D(b, Q, 1) && (a = Yj(a, D(b, Q, 1))) && a.forEach(d => {
                c.add(ma(d))
            })
        },
        Uj = (a, b) => (a = Yj(a, b)) && a.length > 0 ? a[0] : null,
        Yj = (a, b) => (b = Lj(b)) ? Ej(b, a) : null;
    var V = class extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, V) : this.stack = Error().stack || ""
        }
    };
    let Zj, W;
    const ak = new Te(n);
    var bk = a => {
        a != null && (n.google_measure_js_timing = a);
        n.google_measure_js_timing || Se(ak)
    };
    ((a, b = !0) => {
        Zj = a || new Xg;
        typeof n.google_srt !== "number" && (n.google_srt = Math.random());
        Wg(Zj, n.google_srt);
        W = new bf(Zj, b, ak);
        W.u(!0);
        n.document.readyState == "complete" ? bk() : ak.g && wd(n, "load", () => {
            bk()
        })
    })();
    var ck = (a, b, c) => W.ga(a, b, c),
        dk = (a, b, c) => {
            const d = N(Vg).g();
            !b.eid && d.length && (b.eid = d.toString());
            af(Zj, a, b, !0, c)
        },
        ek = (a, b) => {
            W.ca(a, b)
        },
        fk = (a, b, c, d) => (Fe(b) ? b.msg || $e(b.error) : $e(b)).indexOf("TagError") === 0 ? ((Fe(b) ? b.error : b).pbr = !0, !1) : W.R(a, b, c, d);
    var gk = class {
        constructor() {
            this.g = me();
            this.i = 0
        }
    };

    function hk(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (ik(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function jk(a) {
        a = kk(a);
        return a.has("all") || a.has("after")
    }

    function lk(a) {
        a = kk(a);
        return a.has("all") || a.has("before")
    }

    function kk(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function ik(a) {
        const b = kk(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var mk = class {
        constructor() {
            this.g = new Set;
            this.i = new gk
        }
    };

    function nk(a, b) {
        if (!a) return !1;
        a = Xd(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function pk(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function qk(a) {
        return !!a.nextSibling || !!a.parentNode && qk(a.parentNode)
    };

    function rk(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    const sk = a => {
        const b = rk(a);
        return b ? Na(Oa(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
    };
    var tk = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };

    function uk(a, b) {
        if (a.u) return !0;
        a.u = !0;
        const c = E(a.j, Gh, 1, A());
        a.i = 0;
        const d = vk(a.H);
        var e = a.g;
        var f;
        try {
            var g = (f = e.localStorage.getItem("google_ama_settings")) ? Dh(f) : null
        } catch (p) {
            g = null
        }
        f = g !== null && H(g, 2, !1);
        g = Pj(e);
        f && (g.eatf = !0, ye(7, [!0, 0, !1]));
        b: {
            var h = {
                    wb: !1,
                    xb: !1
                },
                k = Sa(e.document.querySelectorAll(".google-auto-placed"));
            const p = Sa(e.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
                r = Sa(e.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            var l = (sk(e) ||
                Sa(e.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Sa(e.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const x = Sa(e.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                t = Sa(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                w = Sa(e.document.querySelectorAll("div.googlepublisherpluginad")),
                L = Sa(e.document.querySelectorAll("html > ins.adsbygoogle"));
            let C = [].concat(Sa(e.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Sa(e.document.querySelectorAll("body ins.adsbygoogle")));f = [];
            for (const [hb, $b] of [
                    [h.ec, k],
                    [h.wb, p],
                    [h.ic, r],
                    [h.fc, l],
                    [h.jc, x],
                    [h.dc, t],
                    [h.hc, w],
                    [h.xb, L]
                ]) hb === !1 ? f = f.concat($b) : C = C.concat($b);h = tk(C);f = tk(f);
            h = h.slice(0);
            for (m of f)
                for (f = 0; f < h.length; f++)(m.contains(h[f]) || h[f].contains(m)) && h.splice(f, 1);
            var m = h;e = Ni(e).clientHeight;
            for (f = 0; f < m.length; f++)
                if (!(m[f].getBoundingClientRect().top > e)) {
                    e = !0;
                    break b
                }
            e = !1
        }
        e = e ? g.eatfAbg = !0 : !1;
        if (e) return !0;
        e = new rh([2]);
        for (g = 0; g < c.length; g++) {
            m = a;
            h = c[g];
            f = g;
            l = b;
            if (D(h, xh, 4) && e.contains(G(D(h, xh, 4), 1)) && G(h, 8) === 1 && wk(h, d)) {
                m.i++;
                if (l = xk(m, h, l, d)) k = Pj(m.g), k.numAutoAdsPlaced || (k.numAutoAdsPlaced = 0), D(h, Q, 1) && dd(D(h, Q, 1), 5) != null && (k.numPostPlacementsPlaced ? k.numPostPlacementsPlaced++ :
                    k.numPostPlacementsPlaced = 1), k.placed == null && (k.placed = []), k.numAutoAdsPlaced++, k.placed.push({
                    index: f,
                    element: l.ia
                }), ye(7, [!1, m.i, !0]);
                m = l
            } else m = null;
            if (m) return !0
        }
        ye(7, [!1, a.i, !1]);
        return !1
    }

    function xk(a, b, c, d) {
        if (!wk(b, d) || G(b, 8) != 1) return null;
        d = D(b, Q, 1);
        if (!d) return null;
        d = Lj(d);
        if (!d) return null;
        d = Ej(d, a.g.document);
        if (d.length == 0) return null;
        d = d[0];
        var e = G(b, 2);
        e = Oj[e];
        e = e === void 0 ? null : e;
        var f;
        if (!(f = e == null)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = nk(pk(d), f);
                        break a;
                    case 3:
                        f = nk(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = nk(g ? g.nodeType == 1 ? g : pk(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && e == 2 && !qk(d))) c = e == 1 || e == 2 ? d : d.parentNode,
            c = !(c && !Jh(c) && c.offsetWidth <= 0);f = !c
        }
        if (!(c = f)) {
            c = a.B;
            f = G(b, 2);
            g =
                c.i;
            var h = ma(d);
            g = g.g.get(h);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(ma(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(ma(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.D;
            g = G(b, 2);
            a: switch (g) {
                case 1:
                    f = jk(d.previousElementSibling) || lk(d);
                    break a;
                case 4:
                    f = jk(d) || lk(d.nextElementSibling);
                    break a;
                case 2:
                    f = lk(d.firstElementChild);
                    break a;
                case 3:
                    f = jk(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + g);
            }
            g =
                hk(c, d, g);
            c = c.i;
            dk("ama_exclusion_zone", {
                typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
                cor: c.g,
                num: c.i++,
                dvc: ee()
            }, .1);
            c = f || g
        }
        if (c) return null;
        f = D(b, Fh, 3);
        c = {};
        f && (c.lb = F(f, 1), c.Va = F(f, 2), c.sb = !!cd(f, 3));
        f = D(b, xh, 4) && G(D(b, xh, 4), 2) ? G(D(b, xh, 4), 2) : null;
        f = Ah(f);
        g = dd(b, 12) != null ? dd(b, 12) : null;
        g = g == null ? null : new zh(null, {
            google_ml_rank: g
        });
        b = yk(a, b);
        b = yh(a.A, f, g, b);
        f = a.g;
        a = a.I;
        h = f.document;
        var k = c.sb || !1;
        g = Md((new Nd(h)).g, "DIV");
        const l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        c.Bb && kj(k, c.Bb);
        h = Md((new Nd(h)).g, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.lb && (k.marginTop = c.lb);
        c.Va && (k.marginBottom = c.Va);
        c.nb && kj(k, c.nb);
        g.appendChild(h);
        c = {
            Aa: g,
            ia: h
        };
        c.ia.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Xa) c.Aa.className = h.join(" ");
        h = c.ia;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = c.Aa;
                if (T(fi)) {
                    {
                        const w = Ii(d, e);
                        if (w.init) {
                            var p =
                                w.init;
                            for (d = p; d = w.ka(d);) p = d;
                            var r = {
                                anchor: p,
                                position: w.qa
                            }
                        } else r = {
                            anchor: d,
                            position: e
                        }
                    }
                    m["google-ama-order-assurance"] = 0;
                    Hi(m, r.anchor, r.position)
                } else Hi(m, d, e);
                b: {
                    var x = c.ia;x.dataset.adsbygoogleStatus = "reserved";x.className += " adsbygoogle-noablate";m = {
                        element: x
                    };
                    var t = b && b.hb;
                    if (x.hasAttribute("data-pub-vars")) {
                        try {
                            t = JSON.parse(x.getAttribute("data-pub-vars"))
                        } catch (w) {
                            break b
                        }
                        x.removeAttribute("data-pub-vars")
                    }
                    t && (m.params = t);
                    (f.adsbygoogle = f.adsbygoogle || []).push(m)
                }
            } catch (w) {
                (x = c.Aa) && x.parentNode &&
                    (t = x.parentNode, t.removeChild(x), Jh(t) && (t.style.display = t.getAttribute("data-init-display") || "none"));
                x = !1;
                break a
            }
            x = !0
        }
        return x ? c : null
    }

    function yk(a, b) {
        return oh(qh(Rj(b).map(Bh), c => {
            Pj(a.g).exception = c
        }))
    }
    const zk = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.I = b;
            this.j = c;
            this.A = e || null;
            (this.H = d) ? (a = a.document, d = E(d, rj, 5, A(xb)), d = Tj(a, d)) : d = Tj(a.document, []);
            this.B = d;
            this.D = new mk;
            this.i = 0;
            this.u = !1
        }
    };

    function vk(a) {
        const b = {};
        a && Hc(a, 6, Vb, A()).forEach(c => {
            b[c] = !0
        });
        return b
    }

    function wk(a, b) {
        return a && Fc(a, xh, 4) && b[G(D(a, xh, 4), 2)] ? !1 : !0
    };
    var Ak = qd(class extends M {});

    function Bk(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? nh(() => Ak(c)) : kh(null)
    };

    function Ck() {
        if (Dk) return Dk;
        var a = Ae() || window;
        const b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? Dk = b : a.google_persistent_state_async = Dk = new Ek
    }

    function Fk(a, b, c) {
        b = Gk[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function Hk(a, b, c) {
        return Fk(a, b, () => c)
    }

    function Ik(a, b, c) {
        a.S[Gk[b] || `google_ps_${b}`] = c
    }

    function Jk(a, b) {
        Ik(a, 38, b)
    }
    var Ek = class {
            constructor() {
                this.S = {}
            }
        },
        Dk = null;
    const Gk = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function Kk(a) {
        var b = new Lk;
        return y(b, 5, Sb(a))
    }
    var Lk = class extends M {
        constructor() {
            super()
        }
    };

    function Mk() {
        this.A = this.A;
        this.i = this.i
    }
    Mk.prototype.A = !1;
    Mk.prototype.dispose = function() {
        this.A || (this.A = !0, this.D())
    };
    Mk.prototype[ha(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function Nk(a, b) {
        a.A ? b() : (a.i || (a.i = []), a.i.push(b))
    }
    Mk.prototype.D = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };
    const Ok = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function Pk(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = Ok(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (te({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function Qk(a) {
        if (a.g) return a.g;
        a: {
            let d = a.j;
            for (let e = 0; e < 50; ++e) {
                try {
                    var b = !(!d.frames || !d.frames.__tcfapiLocator)
                } catch {
                    b = !1
                }
                if (b) {
                    b = d;
                    break a
                }
                b: {
                    try {
                        const f = d.parent;
                        if (f && f != d) {
                            var c = f;
                            break b
                        }
                    } catch {}
                    c = null
                }
                if (!(d = c)) break
            }
            b = null
        }
        a.g = b;
        return a.g
    }

    function Rk(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if (Qk(a)) {
            Sk(a);
            const e = ++a.W;
            a.B[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function Sk(a) {
        a.u || (a.u = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.B[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, wd(a.j, "message", a.u))
    }
    class Tk extends Mk {
        constructor(a) {
            var b = {};
            super();
            this.j = a;
            this.g = null;
            this.B = {};
            this.W = 0;
            this.I = b.kb ? ? 500;
            this.H = b.ac ? ? !1;
            this.u = null
        }
        D() {
            this.B = {};
            this.u && (xd(this.j, "message", this.u), delete this.u);
            delete this.B;
            delete this.j;
            delete this.g;
            super.D()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.H
            };
            const c = vd(() => a(b));
            let d = 0;
            this.I !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.I));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Ok(b),
                    b.internalBlockOnErrors = this.H, g && b.internalErrorState === 0 || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Rk(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Rk(this, "removeEventListener", null, a.listenerId)
        }
    };
    var Yk = ({
            l: a,
            X: b,
            kb: c,
            rb: d,
            la: e = !1,
            ma: f = !1
        }) => {
            b = Uk({
                l: a,
                X: b,
                la: e,
                ma: f
            });
            b.g != null || b.i.message != "tcunav" ? d(b) : Vk(a, c).then(g => g.map(Wk)).then(g => g.map(h => Xk(a, h))).then(d)
        },
        Uk = ({
            l: a,
            X: b,
            la: c = !1,
            ma: d = !1
        }) => {
            if (!Zk({
                    l: a,
                    X: b,
                    la: c,
                    ma: d
                })) return Xk(a, Kk(!0));
            b = Ck();
            return (b = Hk(b, 24)) ? Xk(a, Wk(b)) : mh(Error("tcunav"))
        };

    function Zk({
        l: a,
        X: b,
        la: c,
        ma: d
    }) {
        if (d = !d) d = new Tk(a), d = typeof d.j.__tcfapi === "function" || Qk(d) != null;
        if (!d) {
            if (c = !c) {
                if (b) {
                    a = Bk(a);
                    if (a.g != null)
                        if ((a = a.getValue()) && G(a, 1) != null) b: switch (a = G(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else W.R(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function Vk(a, b) {
        return Promise.race([$k(), al(a, b)])
    }

    function $k() {
        return (new Promise(a => {
            var b = Ck();
            a = {
                resolve: a
            };
            const c = Hk(b, 25, []);
            c.push(a);
            Ik(b, 25, c)
        })).then(bl)
    }

    function al(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, mh(Error("tcto")))
        })
    }

    function bl(a) {
        return a ? kh(a) : mh(Error("tcnull"))
    }

    function Wk(a) {
        var b = {};
        if (Pk(a))
            if (a.gdprApplies === !1) a = !0;
            else if (a.tcString === "tcunavailable") a = !b.Za;
        else if ((b.Za || a.gdprApplies !== void 0 || b.bc) && (b.Za || typeof a.tcString === "string" && a.tcString.length)) {
            b: {
                if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], b !== void 0)) {
                    b = b["755"];
                    break b
                }
                b = void 0
            }
            b === 0 ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && a.publisherCC === "CH" ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
        }
        else a = !0;
        else a = !1;
        return Kk(a)
    }

    function Xk(a, b) {
        return (a = ve(b, a)) ? kh(a) : mh(Error("unav"))
    };
    var cl = class extends M {};
    var dl = class extends M {};
    var el = class extends M {
        g() {
            return D(this, cl, 2)
        }
        i() {
            return D(this, dl, 3)
        }
    };
    const fl = class {
        constructor(a) {
            this.exception = a
        }
    };

    function gl(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.g;
            Pj(e.g);
            E(e.j, Gh, 1, A());
            d.call(c, new fl(b))
        } catch (f) {
            a.i.reject(f)
        }
    }
    var hl = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
        start() {
            this.u()
        }
        u() {
            try {
                switch (this.j.document.readyState) {
                    case "complete":
                    case "interactive":
                        uk(this.g, !0);
                        gl(this);
                        break;
                    default:
                        uk(this.g, !1) ? gl(this) : this.j.setTimeout(ra(this.u, this), 100)
                }
            } catch (a) {
                gl(this, a)
            }
        }
    };
    var il = class extends M {
        constructor() {
            super()
        }
        getVersion() {
            return ed(this, 2)
        }
    };

    function jl(a) {
        return Wa(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function kl(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function ll(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function ml(a) {
        var b = jl(a),
            c = kl(b.slice(0, 6));
        a = kl(b.slice(6, 12));
        var d = new il;
        c = B(d, 1, Xb(c), 0);
        a = B(c, 2, Xb(a), 0);
        b = b.slice(12);
        c = kl(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (e.length === 0) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = kl(e[0]) === 0;
            e = e.slice(1);
            var g = nl(e, b),
                h = d.length === 0 ? 0 : d[d.length - 1];
            h = ll(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = nl(e, b);
                g = ll(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return Nc(a, 3, d, Wb)
    }

    function nl(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var ol = "a".charCodeAt(),
        pl = Ad(ah),
        ql = Ad(bh);

    function rl() {
        var a = new sl;
        return K(a, 1, 0)
    }

    function tl(a) {
        var b = Number;
        var c = Cc(a, 1),
            d = typeof c;
        c != null && (d === "bigint" ? c = String(BigInt.asIntN(64, c)) : Ub(c) ? d === "string" ? c = cc(c) : (c = Math.trunc(c), Number.isSafeInteger(c) ? c = String(c) : (d = String(c), ac(d) ? c = d : (cb(c), c = db()))) : c = void 0);
        b = b(c ? ? "0");
        a = ed(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var sl = class extends M {};

    function ul(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function vl(a) {
        let b = ul(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!ul(a, 1) === !0,
                e = ul(a, 16);
            if (d)
                for (d = ul(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function wl(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (ul(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function xl(a) {
        const b = ul(a, 16);
        return !!ul(a, 1) === !0 ? (a = vl(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : wl(a, b)
    }
    class yl {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var Al = a => {
        try {
            var b = Wa(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new yl(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = ul(c, 12);
            b.cmpVersion = ul(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = ul(c, 6);
            b.isServiceSpecific = !!ul(c, 1);
            b.useNonStandardStacks = !!ul(c, 1);
            b.specialFeatureOptins = zl(wl(c, 12, ql), ql);
            b.purpose = {
                consents: zl(wl(c, 24, pl), pl),
                legitimateInterests: zl(wl(c, 24, pl), pl)
            };
            b.purposeOneTreatment = !!ul(c, 1);
            b.publisherCC = String.fromCharCode(ol + ul(c, 6)) + String.fromCharCode(ol +
                ul(c, 6));
            b.vendor = {
                consents: zl(xl(c), null),
                legitimateInterests: zl(xl(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const zl = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };

    function Bl() {
        return "m202408130101"
    };
    var Cl = new R(203);
    var Dl = class extends M {
        g() {
            return F(this, 2) != null
        }
    };
    var El = class extends M {
        g() {
            return F(this, 2) != null
        }
    };
    var Fl = class extends M {};
    var Gl = qd(class extends M {});

    function Hl(a) {
        a = Il(a);
        try {
            var b = a ? Gl(a) : null
        } catch (c) {
            b = null
        }
        return b ? D(b, Fl, 4) || null : null
    }

    function Il(a) {
        a = (new ue(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };
    Ad(ah).map(a => Number(a));
    Ad(bh).map(a => Number(a));

    function Jl(a) {
        a.__tcfapiPostMessageReady || Kl(new Ll(a))
    }

    function Kl(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.l.__tcfapi)(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = e.command === "removeEventListener" ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.l.addEventListener("message", a.g);
        a.l.__tcfapiPostMessageReady = !0
    }
    var Ll = class {
        constructor(a) {
            this.l = a
        }
    };

    function Ml(a) {
        a.__uspapiPostMessageReady || Nl(new Ol(a))
    }

    function Nl(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.l.__uspapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.l.addEventListener("message", a.g);
        a.l.__uspapiPostMessageReady = !0
    }
    var Ol = class {
        constructor(a) {
            this.l = a;
            this.g = null
        }
    };
    var Pl = class extends M {};
    var Ql = qd(class extends M {
        g() {
            return F(this, 1) != null
        }
    });

    function Rl(a, b, c) {
        function d(p) {
            if (p.length < 10) return null;
            var r = h(p.slice(0, 4));
            r = k(r);
            p = h(p.slice(6, 10));
            p = l(p);
            return "1" + r + p + "N"
        }

        function e(p) {
            if (p.length < 10) return null;
            var r = h(p.slice(0, 6));
            r = k(r);
            p = h(p.slice(6, 10));
            p = l(p);
            return "1" + r + p + "N"
        }

        function f(p) {
            if (p.length < 12) return null;
            var r = h(p.slice(0, 6));
            r = k(r);
            p = h(p.slice(8, 12));
            p = l(p);
            return "1" + r + p + "N"
        }

        function g(p) {
            if (p.length < 18) return null;
            var r = h(p.slice(0, 8));
            r = k(r);
            p = h(p.slice(12, 18));
            p = l(p);
            return "1" + r + p + "N"
        }

        function h(p) {
            const r = [];
            let x = 0;
            for (let t = 0; t < p.length / 2; t++) r.push(kl(p.slice(x, x + 2))), x += 2;
            return r
        }

        function k(p) {
            return p.every(r => r === 1) ? "Y" : "N"
        }

        function l(p) {
            return p.some(r => r === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = jl(a[0]);
        const m = kl(a.slice(0, 6));
        a = a.slice(6);
        if (m !== 1) return null;
        switch (b) {
            case 8:
                return d(a);
            case 10:
            case 12:
            case 9:
                return e(a);
            case 11:
                return f(a);
            case 7:
                return c ? g(a) : null;
            default:
                return null
        }
    };

    function Sl(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Wd("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };

    function Tl() {
        var a = T(Sh);
        O !== O.top || O.__uspapi || O.frames.__uspapiLocator || (a = new Ul(a), Vl(a), Wl(a))
    }

    function Vl(a) {
        !a.i || a.l.__uspapi || a.l.frames.__uspapiLocator || (a.l.__uspapiManager = "fc", Sl(a.l, "__uspapiLocator"), sa("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && d({
                version: 1,
                uspString: a.i
            }, !0)
        }, a.l), Ml(a.l))
    }

    function Wl(a) {
        !a.tcString || a.l.__tcfapi || a.l.frames.__tcfapiLocator || (a.l.__tcfapiManager = "fc", Sl(a.l, "__tcfapiLocator"), a.l.__tcfapiEventListeners = a.l.__tcfapiEventListeners || [], sa("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else switch (c = a.l.__tcfapiEventListeners, b) {
                    case "ping":
                        d({
                            gdprApplies: !0,
                            cmpLoaded: !0,
                            cmpStatus: "loaded",
                            displayStatus: "disabled",
                            apiVersion: "2.2",
                            cmpVersion: 2,
                            cmpId: 300
                        });
                        break;
                    case "addEventListener":
                        b = c.push(d) - 1;
                        a.tcString ? (e = Al(a.tcString),
                            e.addtlConsent = a.g != null ? a.g : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
                        d(b, !0);
                        break;
                    case "removeEventListener":
                        e !== void 0 && c[e] ? (c[e] = null, d(!0)) : d(!1);
                        break;
                    case "getInAppTCData":
                    case "getVendorList":
                        d(null, !1);
                        break;
                    case "getTCData":
                        d(null, !1)
                }
        }, a.l), Jl(a.l))
    }

    function Xl(a, b) {
        if (!b ? .g() || I(b, 1).length === 0 || E(b, Pl, 2, A()).length === 0) return null;
        const c = I(b, 1);
        let d;
        try {
            var e = ml(c.split("~")[0]);
            d = c.includes("~") ? c.split("~").slice(1) : []
        } catch (f) {
            return null
        }
        b = E(b, Pl, 2, A()).reduce((f, g) => fd(Yl(f), 1) > fd(Yl(g), 1) ? f : g);
        e = Hc(e, 3, Yb, A()).indexOf(ed(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: Rl(d[e], ed(b, 1), a.j),
            za: tl(Yl(b))
        }
    }

    function Zl(a) {
        a = a.find(b => b && J(b, 1) === 13);
        if (a ? .g()) try {
            return Ql(I(a, 2))
        } catch (b) {}
        return null
    }

    function Yl(a) {
        return Fc(a, sl, 2) ? D(a, sl, 2) : rl()
    }
    var Ul = class {
        constructor(a) {
            var b = O;
            this.l = b;
            this.j = a;
            a = Il(this.l.document);
            try {
                var c = a ? Gl(a) : null
            } catch (e) {
                c = null
            }(a = c) ? (c = D(a, El, 5) || null, a = E(a, Dl, 7, A()), a = Zl(a ? ? []), c = {
                Wa: c,
                Ya: a
            }) : c = {
                Wa: null,
                Ya: null
            };
            a = c;
            c = Xl(this, a.Ya);
            a = a.Wa;
            if (a ? .g() && I(a, 2).length !== 0) {
                var d = Fc(a, sl, 1) ? D(a, sl, 1) : rl();
                a = {
                    uspString: I(a, 2),
                    za: tl(d)
                }
            } else a = null;
            this.i = a && c ? c.za > a.za ? c.uspString : a.uspString : a ? a.uspString : c ? c.uspString : null;
            this.tcString = (c = Hl(b.document)) && F(c, 1) != null ? I(c, 1) : null;
            this.g = (b = Hl(b.document)) && F(b,
                2) != null ? I(b, 2) : null
        }
    };
    const $l = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function am(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        dk("ama", b, .01)
    }

    function bm(a) {
        const b = {};
        Zd($l, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function cm(a) {
        const b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function dm(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function em(a) {
        a = Hc(a, 2, Vb, A());
        if (!a) return !1;
        for (let b = 0; b < a.length; b++)
            if (a[b] == 1) return !0;
        return !1
    }

    function fm(a, b) {
        a = dm(cm(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = $d(a),
            d = gm(a);
        return b.find(e => {
            if (Fc(e, nj, 7)) {
                var f = D(e, nj, 7);
                f = Zb(Cc(f, 1))
            } else f = Zb(Cc(e, 1));
            e = Fc(e, nj, 7) ? G(D(e, nj, 7), 2) : 2;
            if (typeof f !== "number") return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function gm(a) {
        const b = {};
        for (;;) {
            b[$d(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var hm = class extends M {
        g() {
            return D(this, el, 2)
        }
        i() {
            return H(this, 3)
        }
    };
    var im = class extends M {
        g() {
            return hd(this, 1, A())
        }
        i() {
            return D(this, hm, 2)
        }
        j() {
            return I(this, 4)
        }
        u() {
            return J(this, 5)
        }
    };
    var jm = class extends M {
        getId() {
            return ed(this, 1)
        }
    };

    function km(a) {
        return E(a, jm, 2, A())
    }
    var lm = class extends M {};
    var mm = class extends M {};
    var nm = class extends M {
        g() {
            return fd(this, 2)
        }
        i() {
            return fd(this, 4)
        }
        j() {
            return H(this, 3)
        }
    };
    var om = class extends M {};
    var qm = class extends M {
            i() {
                return jd(this, hm, 13, pm)
            }
            u() {
                return Gc(this, hm, Sc(this, pm, 13)) !== void 0
            }
            g() {
                return jd(this, im, 14, pm)
            }
            j() {
                return Gc(this, im, Sc(this, pm, 14)) !== void 0
            }
        },
        pm = [13, 14];
    let rm = void 0;

    function sm(a) {
        Hb(rm, Nb);
        rm = a
    };

    function X(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function tm(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ua: !0,
            Hb: b,
            xa: a.ablation_viewport_offset
        } : null
    }

    function um(a) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = 1
    }

    function vm(a) {
        X(O).allow_second_reactive_tag = a
    }

    function wm() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function xm(a) {
        return X(a) ? .head_tag_slot_vars ? .google_ad_host ? ? ym(a)
    }

    function ym(a) {
        return a.document ? .querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null
    };
    const zm = [2, 7, 1];
    var Cm = (a, b, c = "", d = null) => b === 1 && Am(c, d) ? !0 : Bm(a, c, e => Pa(E(e, rd, 2, A()), f => G(f, 1) === b)),
        Am = (a, b) => b ? b.u() ? H(b.i(), 1) : b.j() && a !== "" && b.g().g().length === 1 && b.g().g()[0] === a ? H(b.g().i(), 1) : !1 : !1,
        Dm = (a, b) => {
            b = ed(b, 18);
            b !== -1 && (a.tmod = b)
        },
        Fm = a => {
            const b = Ud(O) || O;
            return Em(b, a) ? !0 : Bm(O, "", c => Pa(Hc(c, 3, Vb, A()), d => d === a))
        };

    function Em(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Ra(a.split(","), b.toString())
    }

    function Bm(a, b, c) {
        a = Ud(a) || a;
        const d = Gm(a);
        b && (b = De(String(b)));
        return zd(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function Gm(a) {
        a = Hm(a);
        const b = {};
        Zd(a, (c, d) => {
            try {
                const e = new sd(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var Hm = a => {
        Hb(rm, Kb);
        a = Uk({
            l: a,
            X: rm
        });
        return a.g != null ? Im(a.getValue()) : {}
    };

    function Im(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : yd(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function Jm(a) {
        dk("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const Km = a => {
            dk("overlay_settings_from_ppabg", {
                p_s: a
            }, .01)
        },
        Lm = (a, b) => {
            if (xm(n)) return zm;
            if (b ? .u()) {
                var c = I(b.i(), 9);
                b = b ? .i() ? .g() ? .i();
                if (!a || c != a || !b) return zm;
                Km(!1);
                return Hc(b, 3, Vb, A(xb))
            }
            if (b ? .j()) {
                c = b ? .g() ? .g();
                if (!c || c.length !== 1 || !a || c[0] !== a || I(b, 17) != n.location.host) return zm;
                a = b ? .g() ? .i() ? .g() ? .i();
                if (!a) return zm;
                Km(!0);
                return Hc(a, 3, Vb, A(xb))
            }
            return zm
        };
    var Mm = (a, b) => {
        const c = [];
        a = Lm(a, b);
        a.includes(1) || c.push(1);
        a.includes(2) || c.push(2);
        a.includes(7) || c.push(7);
        return c
    };

    function Nm(a, b, c, d) {
        Om(new Pm(a, b, c, d))
    }

    function Om(a) {
        qh(ph(Uk({
            l: a.l,
            X: H(a.g, 6)
        }), b => {
            Qm(a, b, !0)
        }), () => {
            Rm(a)
        })
    }

    function Qm(a, b, c) {
        qh(ph(Sm(b), d => {
            Tm("ok");
            a.i(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.l;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                am(d, {
                    lserr: 1
                })
            }
            c ? Rm(a) : a.i(null, null)
        })
    }

    function Rm(a) {
        qh(ph(Um(a), b => {
            a.i(b, {
                fromPABGSettings: !0
            })
        }), () => {
            Vm(a)
        })
    }

    function Sm(a) {
        if (T(di)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? zj(b) : null
        } catch (d) {
            c = null
        }
        return (a = (a = c) ? (D(a, mj, 3) ? .g() ? ? 0) > Date.now() ? a : null : null) ? kh(a) : mh(Error("invlocst"))
    }

    function Um(a) {
        if (xm(a.l) && !H(a.g, 22)) return mh(Error("invtag"));
        a: {
            var b = a.l;
            var c = a.j;a = a.g;
            if (a ? .u())(b = a ? .i() ? .g() ? .g()) && (E(b, Gh, 1, A()).length > 0 || T(ei) && E(b, Hh, 3, A()).length > 0) ? Jm(!1) : b = null;
            else {
                if (a ? .j()) {
                    const d = a ? .g() ? .g(),
                        e = a ? .g() ? .i() ? .g() ? .g();
                    if (d && d.length === 1 && d[0] === c && e && (E(e, Gh, 1, A()).length > 0 || T(ei) && E(e, Hh, 3, A()).length > 0) && I(a, 17) === b.location.host) {
                        Jm(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new yj, a = E(b, Gh, 1, A()), c = $c(c, 1, a), a = E(b, tj, 2, A()), c = $c(c, 7, a), T(ei) && E(b, Hh, 3, A()).length > 0 && (a =
            new Ih, b = E(b, Hh, 3, A()), b = $c(a, 1, b), Yc(c, 6, b)), b = kh(c)) : b = mh(Error("invtag"));
        return b
    }

    function Vm(a) {
        Yk({
            l: a.l,
            X: H(a.g, 6),
            kb: 50,
            rb: b => {
                Wm(a, b)
            }
        })
    }

    function Wm(a, b) {
        qh(ph(b, c => {
            Qm(a, c, !1)
        }), c => {
            Tm(c.message);
            a.i(null, null)
        })
    }

    function Tm(a) {
        dk("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class Pm {
        constructor(a, b, c, d) {
            this.l = a;
            this.g = b;
            this.j = c;
            this.i = d
        }
    };
    var Xm = (a, b, c, d) => {
        try {
            const e = fm(a, E(c, tj, 7, A()));
            if (e && em(e)) {
                if (kd(e)) {
                    const g = new zh(null, {
                        google_package: kd(e)
                    });
                    d = yh(d, g)
                }
                const f = new zk(a, b, c, e, d);
                Kj(1E3, () => {
                    var g = new fh;
                    (new hl(a, f, g)).start();
                    return g.i
                }, a).then(() => {
                    am(a, {
                        atf: 1
                    })
                }, g => {
                    (a.google_ama_state = a.google_ama_state || {}).exception = g;
                    am(a, {
                        atf: 0
                    })
                })
            }
        } catch (e) {
            am(a, {
                atf: -1
            })
        }
    };

    function Ym(a) {
        return a.length ? a.join("~") : void 0
    };

    function Zm(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = $m(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function $m(a) {
        let b = "";
        Zd(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };
    Ua || Ia();

    function an() {
        const a = {};
        N(je).g($h.g, $h.defaultValue) && (a.bust = N(je).g($h.g, $h.defaultValue));
        var b = Ck();
        b = Hk(b, 38, "");
        b !== "" && (a.sbust = b);
        return a
    };
    class bn {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function cn() {
        const {
            promise: a,
            resolve: b
        } = new bn;
        return {
            promise: a,
            resolve: b
        }
    };

    function dn(a = () => {}) {
        n.google_llp || (n.google_llp = {});
        const b = n.google_llp;
        let c = b[7];
        if (c) return c;
        c = cn();
        b[7] = c;
        a();
        return c
    }

    function en(a) {
        return dn(() => {
            Vd(n.document, a)
        }).promise
    };

    function fn(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map), a.google_reactive_ads_global_state.sideRailMutationCallbacks ==
            null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = [])) : a.google_reactive_ads_global_state = new gn;
        return a.google_reactive_ads_global_state
    }
    class gn {
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
            this.floatingAdsStacking = new hn;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.sideRailMutationCallbacks = [];
            this.clickTriggeredInterstitialMayBeDisplayed = !1
        }
    }
    var hn = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var jn = a => {
        if (n.google_apltlad || a.google_ad_intent_query) return null;
        var b = a.google_loader_used !== "sd" && T(hi) && (n.top == n ? 0 : Td(n.top) ? 1 : 2) === 1;
        if (n !== n.top && !b || !a.google_ad_client) return null;
        n.google_apltlad = !0;
        b = {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.google_ad_client
        };
        const c = b.enable_page_level_ads;
        Zd(a, (d, e) => {
            ij[e] && e !== "google_ad_client" && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        c.easpi = T(Ai);
        c.asro = T(yi);
        c.aihb = T(ji);
        c.ailel = Ym(Gi(ti));
        c.aiael = Ym(Gi(ki));
        c.aifxl = Ym(Gi(qi));
        c.aiixl =
            Ym(Gi(ri));
        T(si) && (c.slmct = U(ui), c.samct = U(ni));
        T(pi) || (c.aiict = !0, c.aicel = Ym(Gi(oi)));
        T(wi) && (c.aipaq = !0);
        T(zi) && (c.aigda = !0);
        U(li) && (c.aiapm = U(li));
        U(mi) && (c.aiapmi = U(mi));
        T(xi) && (c.aiombap = !0);
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };

    function kn(a, b) {
        X(O).ama_ran_on_page || Kj(1001, () => {
            ln(new mn(a, b))
        }, n)
    }

    function ln(a) {
        Nm(a.l, a.i, a.g.google_ad_client || "", (b, c) => {
            var d = a.l,
                e = a.g;
            X(O).ama_ran_on_page || b && nn(d, e, b, c)
        })
    }
    class mn {
        constructor(a, b) {
            this.l = n;
            this.g = a;
            this.i = b
        }
    }

    function nn(a, b, c, d) {
        d && (Pj(a).configSourceInAbg = d);
        Fc(c, xj, 24) && (d = Qj(a), d.availableAbg = !0, d.ablationFromStorage = !!D(c, xj, 24) ? .g() ? .g());
        if (la(b.enable_page_level_ads) && b.enable_page_level_ads.google_pgb_reactive === 7) {
            if (!fm(a, E(c, tj, 7, A()))) {
                dk("amaait", {
                    value: "true"
                });
                return
            }
            dk("amaait", {
                value: "false"
            })
        }
        X(O).ama_ran_on_page = !0;
        D(c, lj, 15) ? .g() && (X(a).enable_overlap_observer = !0);
        D(c, xj, 24) ? .g() ? .g() && (Qj(a).ablatingThisPageview = !0, um(a));
        ye(3, [od(c)]);
        const e = b.google_ad_client || "";
        b = bm(la(b.enable_page_level_ads) ?
            b.enable_page_level_ads : {});
        const f = yh(Ch, new zh(null, b));
        ck(782, () => {
            Xm(a, e, c, f)
        })
    };

    function on(a, b) {
        a = a.document;
        for (var c = void 0, d = 0; !c || a.getElementById(c + "_host");) c = "aswift_" + d++;
        a = c;
        c = Number(b.google_ad_width || 0);
        b = Number(b.google_ad_height || 0);
        d = document.createElement("div");
        d.id = a + "_host";
        const e = d.style;
        e.border = "none";
        e.height = `${b}px`;
        e.width = `${c}px`;
        e.margin = "0px";
        e.padding = "0px";
        e.position = "relative";
        e.visibility = "visible";
        e.backgroundColor = "transparent";
        e.display = "inline-block";
        return {
            vb: a,
            Jb: d
        }
    };

    function pn({
        ya: a,
        Ea: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function qn(a) {
        return a.google_ad_client ? String(a.google_ad_client) : X(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client") ? ? ""
    };
    var rn = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function sn(a, b) {
        if (b == 15) {
            if (a >= 728) return 728;
            if (a >= 468) return 468
        } else if (b == 90) {
            if (a >= 200) return 200;
            if (a >= 180) return 180;
            if (a >= 160) return 160;
            if (a >= 120) return 120
        }
        return null
    };
    var tn = class extends M {
        constructor() {
            super()
        }
        getVersion() {
            return I(this, 2)
        }
    };

    function un(a, b) {
        return y(a, 2, ec(b))
    }

    function vn(a, b) {
        return y(a, 3, ec(b))
    }

    function wn(a, b) {
        return y(a, 4, ec(b))
    }

    function xn(a, b) {
        return y(a, 5, ec(b))
    }

    function yn(a, b) {
        return y(a, 9, ec(b))
    }

    function zn(a, b) {
        return $c(a, 10, b)
    }

    function An(a, b) {
        return y(a, 11, Sb(b))
    }

    function Bn(a, b) {
        return y(a, 1, ec(b))
    }

    function Cn(a, b) {
        return y(a, 7, Sb(b))
    }
    var Dn = class extends M {
        constructor() {
            super()
        }
    };
    const En = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Fn() {
        var a = O;
        if (typeof a.navigator ? .userAgentData ? .getHighEntropyValues !== "function") return null;
        const b = a.google_tag_data ? ? (a.google_tag_data = {});
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(En).then(c => {
            b.uach ? ? (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function Gn(a) {
        return An(zn(xn(un(Bn(wn(Cn(yn(vn(new Dn, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList ? .map(b => {
            var c = new tn;
            c = y(c, 1, ec(b.brand));
            return y(c, 2, ec(b.version))
        }) || []), a.wow64 || !1)
    }

    function Hn() {
        return Fn() ? .then(a => Gn(a)) ? ? null
    };

    function In(a, b) {
        b.google_ad_host || (a = ym(a)) && (b.google_ad_host = a)
    }

    function Jn(a, b, c = "") {
        O.google_sa_queue || (O.google_sa_queue = [], O.google_process_slots = W.ra(215, () => {
            Kn(O.google_sa_queue)
        }), a = Ln(c, a, b), Vd(O.document, a))
    }

    function Kn(a) {
        const b = a.shift();
        typeof b === "function" && W.ga(216, b);
        a.length && n.setTimeout(W.ra(215, () => {
            Kn(a)
        }), 0)
    }

    function Mn(a, b) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? b() : a.google_sa_queue.push(b)
    }

    function Ln(a, b, c) {
        var d = O;
        b = H(c, 4) ? b.Db : b.Eb;
        a: {
            if (H(c, 4)) {
                if (a = a || qn(d)) {
                    d = {
                        client: T(Qh) ? De(a) : a,
                        plah: d.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            d = {}
        }
        d = { ...d,
            ...an()
        };
        return Jd(b, new Map(Object.entries(d)))
    }

    function Nn(a, b, c, d) {
        const {
            vb: e,
            Jb: f
        } = on(a, b);
        c.appendChild(f);
        On(a, c, b);
        c = b.google_start_time ? ? ua;
        const g = (new Date).getTime();
        b.google_lrv = pn({
            ya: Bl(),
            Ea: I(d, 2)
        });
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        Mn(a, () => {
            var h = f;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), h == null) throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                innerInsElement: h
            })) && W.ca(911,
                h)
        })
    }

    function On(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || d !== "html" && d != null || (e = `${f}x${g}`);
        T(Ei) && (c.google_reactive_ad_format === 10 ? e = "interstitial" : c.google_reactive_ad_format === 11 && (e = "rewarded"));
        d = !c.google_ad_slot || c.google_override_format || !rn[c.google_ad_width + "x" + c.google_ad_height] && c.google_loader_used === "aa";
        e = e && d ? e.toLowerCase() : "";
        c.google_ad_format = e;
        if (typeof c.google_reactive_sra_index !== "number" || !c.google_ad_unit_key) {
            e = [c.google_ad_slot,
                c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && f < 25; g = g.parentNode, ++f) g.nodeType === 9 ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = $d(e.join(":")).toString();
            e = [];
            for (d = 0; b && d < 25; ++d) {
                f = (f = b.nodeType !== 9 && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let k = 0;
                        for (let l = 0; l < h.length; ++l) {
                            const m =
                                h[l];
                            if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                                if (b === m) {
                                    g = "." + k;
                                    break a
                                }++k
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a) try {
                let h = a.parent;
                for (d = 0; h && h !== a && d < 25; ++d) {
                    const k = h.frames;
                    for (f = 0; f < k.length; ++f)
                        if (a === k[f]) {
                            e.push(f);
                            break
                        }
                    a = h;
                    h = a.parent
                }
            } catch (h) {}
            c.google_ad_dom_fingerprint = $d(b + e.join()).toString()
        }
    }

    function Pn() {
        var a = Ud(n);
        a && (a = fn(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Qn() {
        const a = Hn();
        a != null && a.then(b => {
            O.google_user_agent_client_hint = b.A()
        });
        ie()
    };

    function Rn(a) {
        return b => !!(b.ha & a)
    }
    class Y extends $i {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.ha = c;
            this.u = d
        }
        sa() {
            return this.ha
        }
        i(a, b, c) {
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    };
    const Sn = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        Tn = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        Un = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function Vn(a) {
        var b = 0;
        a.O && b++;
        a.J && b++;
        a.K && b++;
        if (b < 3) return {
            V: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.O.split(",");
        const c = a.K.split(",");
        a = a.J.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            V: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (b.length > 2) return {
            V: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || f === 0) return {
                V: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || f === 0) return {
                V: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            K: d,
            J: e,
            eb: b
        }
    }

    function Wn(a) {
        return a >= 1200 ? {
            width: 1200,
            height: 600
        } : a >= 850 ? {
            width: a,
            height: Math.floor(a * .5)
        } : a >= 550 ? {
            width: a,
            height: Math.floor(a * .6)
        } : a >= 468 ? {
            width: a,
            height: Math.floor(a * .7)
        } : {
            width: a,
            height: Math.floor(a * 3.44)
        }
    }

    function Xn(a, b, c, d) {
        b = Math.floor(((a - 8 * b - 8) / b * Sn[d] + Tn[d]) * c + 8 * c + 8);
        return a > 1500 ? {
            width: 0,
            height: 0,
            Fb: `Calculated slot width is too large: ${a}`
        } : b > 1500 ? {
            width: 0,
            height: 0,
            Fb: `Calculated slot height is too large: ${b}`
        } : {
            width: a,
            height: b
        }
    }

    function Yn(a, b) {
        const c = a - 8 - 8;
        --b;
        return {
            width: a,
            height: Math.floor(c / 1.91 + 70) + Math.floor((c * Sn.mobile_banner_image_sidebyside + Tn.mobile_banner_image_sidebyside) * b + 8 * b + 8)
        }
    };
    const Zn = Ta("script");
    class $n {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, l = null, m = null, p = null) {
            this.B = a;
            this.da = b;
            this.ha = c;
            this.g = d;
            this.W = e;
            this.i = f;
            this.j = g;
            this.D = h;
            this.H = k;
            this.u = l;
            this.A = m;
            this.I = p
        }
        size() {
            return this.da
        }
    };
    const ao = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var bo = class extends $i {
        g(a) {
            return Math.min(1200, Math.max(this.Z, Math.round(a)))
        }
    };

    function co(a, b) {
        eo(a, b);
        if (b.google_content_recommendation_ui_type === "pedestal") return new $n(9, new bo(a, Math.floor(a * b.google_phwr)));
        if (T(Oh)) {
            var c = Od();
            var d = U(Ph);
            var e = U(Nh),
                f = U(Mh);
            a < 468 ? c ? (a = Yn(a, d), d = {
                U: a.width,
                T: a.height,
                J: 1,
                K: d,
                O: "mobile_banner_image_sidebyside"
            }) : (a = Xn(a, 1, d, "image_sidebyside"), d = {
                U: a.width,
                T: a.height,
                J: 1,
                K: d,
                O: "image_sidebyside"
            }) : (d = Wn(a), e === 1 && (d.height = Math.floor(d.height * .5)), d = {
                U: d.width,
                T: d.height,
                J: f,
                K: e,
                O: "image_stacked"
            })
        } else d = Od(), a < 468 ? d ? (d = Yn(a, 12), d = {
            U: d.width,
            T: d.height,
            J: 1,
            K: 12,
            O: "mobile_banner_image_sidebyside"
        }) : (d = Wn(a), d = {
            U: d.width,
            T: d.height,
            J: 1,
            K: 13,
            O: "image_sidebyside"
        }) : (d = Wn(a), d = {
            U: d.width,
            T: d.height,
            J: 4,
            K: 2,
            O: "image_stacked"
        });
        fo(b, d);
        return new $n(9, new bo(d.U, d.T))
    }

    function go(a, b) {
        eo(a, b); {
            const f = Vn({
                K: b.google_content_recommendation_rows_num,
                J: b.google_content_recommendation_columns_num,
                O: b.google_content_recommendation_ui_type
            });
            if (f.V) a = {
                U: 0,
                T: 0,
                J: 0,
                K: 0,
                O: "image_stacked",
                V: f.V
            };
            else {
                var c = f.eb.length === 2 && a >= 468 ? 1 : 0;
                var d = f.eb[c];
                d = d.indexOf("pub_control_") === 0 ? d : "pub_control_" + d;
                var e = Un[d];
                let g = f.J[c];
                for (; a / g < e && g > 1;) g--;
                e = g;
                c = f.K[c];
                a = Xn(a, e, c, d);
                a = {
                    U: a.width,
                    T: a.height,
                    J: e,
                    K: c,
                    O: d
                }
            }
        }
        if (a.V) throw new V(a.V);
        fo(b, a);
        return new $n(9, new bo(a.U, a.T))
    }

    function eo(a, b) {
        if (a <= 0) throw new V(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
    }

    function fo(a, b) {
        a.google_content_recommendation_ui_type = b.O;
        a.google_content_recommendation_columns_num = b.J;
        a.google_content_recommendation_rows_num = b.K
    };
    var ho = class extends $i {
        g() {
            return this.Z
        }
        i(a, b, c) {
            Zi(a, c);
            c.style.height = `${this.height()}px`;
            b.rpe = !0
        }
    };
    const io = {
        "image-top": a => a <= 600 ? 284 + (a - 250) * .414 : 429,
        "image-middle": a => a <= 500 ? 196 - (a - 250) * .13 : 164 + (a - 500) * .2,
        "image-side": a => a <= 500 ? 205 - (a - 250) * .28 : 134 + (a - 500) * .21,
        "text-only": a => a <= 500 ? 187 - .228 * (a - 250) : 130,
        "in-article": a => a <= 420 ? a / 1.2 : a <= 460 ? a / 1.91 + 130 : a <= 800 ? a / 4 : 200
    };
    var jo = class extends $i {
        g() {
            return Math.min(1200, this.Z)
        }
    };

    function ko(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if (f === "in-article") {
            var g = a;
            if (e.google_full_width_responsive === "false") a = g;
            else if (a = Ui(b, c, g, U(Vh), e), a !== !0) e.gfwrnwer = a, a = g;
            else if (a = Oi(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (let h = 0; h < 100 && g.parentElement; ++h) {
                            const k = g.parentElement.childNodes;
                            for (let l = 0; l < k.length; ++l) {
                                const m = k[l];
                                if (m !== g && Xi(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Zi(b, c)
                }
            else a = g;
            else a =
                g
        }
        if (a < 250) throw new V("Fluid responsive ads must be at least 250px wide: " + `availableWidth=${a}`);
        a = Math.min(1200, Math.floor(a));
        if (d && f !== "in-article") {
            f = Math.ceil(d);
            if (f < 50) throw new V("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            return new $n(11, new $i(a, f))
        }
        if (f !== "in-article" && (d = e.google_ad_layout_key)) {
            f = `${d}`;
            c = Math.pow(10, 3);
            if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
            else b = null;
            if (!b) throw new V(`Invalid data-ad-layout-key value: ${f}`);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(c * 1E3 - -725 + 10);
            if (isNaN(f)) throw new V(`Invalid height: height=${f}`);
            if (f < 50) throw new V("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            if (f > 1200) throw new V("Fluid responsive ads must be at most 1200px tall: " + `height=${f}`);
            return new $n(11, new $i(a, f))
        }
        d = io[f];
        if (!d) throw new V("Invalid data-ad-layout value: " + f);
        c = dj(c, b);
        b = Oi(b);
        b = f !== "in-article" || c || a !== b ? Math.ceil(d(a)) : Math.ceil(d(a) * 1.25);
        return new $n(11, f === "in-article" ? new jo(a, b) : new $i(a, b))
    };

    function lo(a) {
        return b => {
            for (let c = a.length - 1; c >= 0; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function mo(a, b) {
        var c = no.slice(0);
        const d = c.length;
        let e = null;
        for (let f = 0; f < d; ++f) {
            const g = c[f];
            if (a(g)) {
                if (b == null || b(g)) return g;
                e === null && (e = g)
            }
        }
        return e
    };
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        no = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];

    function oo(a, b, c, d, e) {
        e.google_full_width_responsive == "false" ? c = {
            F: a,
            G: 1
        } : b === "autorelaxed" && e.google_full_width_responsive || po(b) || e.google_ad_resize ? (b = Vi(a, c, d, e), c = b !== !0 ? {
            F: a,
            G: b
        } : {
            F: Oi(c) || a,
            G: !0
        }) : c = {
            F: a,
            G: 2
        };
        const {
            F: f,
            G: g
        } = c;
        return g !== !0 ? {
            F: a,
            G: g
        } : d.parentElement ? {
            F: f,
            G: g
        } : {
            F: a,
            G: g
        }
    }

    function qo(a, b, c, d, e) {
        const {
            F: f,
            G: g
        } = ck(247, () => oo(a, b, c, d, e));
        var h = g === !0;
        const k = de(d.style.width),
            l = de(d.style.height),
            {
                ba: m,
                Y: p,
                sa: r,
                bb: x
            } = ro(f, b, c, d, e, h);
        h = so(b, r);
        var t;
        const w = (t = aj(d, c, "marginLeft")) ? `${t}px` : "",
            L = (t = aj(d, c, "marginRight")) ? `${t}px` : "";
        t = bj(d, c) || "";
        return new $n(h, m, r, null, x, g, p, w, L, l, k, t)
    }

    function po(a) {
        return a === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function ro(a, b, c, d, e, f) {
        b = to(c, a, b);
        let g;
        var h = !1;
        let k = !1;
        var l = Oi(c) < 488;
        if (l) {
            g = Pi(d, c);
            var m = dj(d, c);
            h = !m && g;
            k = m && g
        }
        m = [cj(a), Rn(b)];
        T(ai) || m.push(fj(l, c, d, k));
        e.google_max_responsive_height != null && m.push(gj(e.google_max_responsive_height));
        l = [t => !t.u];
        if (h || k) h = hj(c, d), l.push(gj(h));
        const p = mo(lo(m), lo(l));
        if (!p) throw new V(`No slot size for availableWidth=${a}`);
        const {
            ba: r,
            Y: x
        } = ck(248, () => {
            var t;
            a: if (f) {
                if (e.gfwrnh && (t = de(e.gfwrnh))) {
                    t = {
                        ba: new ho(a, t),
                        Y: !0
                    };
                    break a
                }
                t = U(Xh);
                t = t > 0 ? a / t : a / 1.2;
                if (e.google_resizing_allowed || e.google_full_width_responsive == "true") var w = Infinity;
                else {
                    w = d;
                    let C = Infinity;
                    do {
                        var L = aj(w, c, "height");
                        L && (C = Math.min(C, L));
                        (L = aj(w, c, "maxHeight")) && (C = Math.min(C, L))
                    } while (w.parentElement && (w = w.parentElement) && w.tagName !== "HTML");
                    w = C
                }!(T(Zh) && w <= t * 2) && (w = Math.min(t, w), w < t * .5 || w < 100) && (w = t);
                t = {
                    ba: new ho(a, Math.floor(w)),
                    Y: w < t ? 102 : !0
                }
            } else t = {
                ba: p,
                Y: 100
            };
            return t
        });
        return e.google_ad_layout === "in-article" && uo(c) ? {
            ba: vo(a, c, d, r, e),
            Y: !1,
            sa: b,
            bb: g
        } : {
            ba: r,
            Y: x,
            sa: b,
            bb: g
        }
    }

    function so(a, b) {
        if (a === "auto") return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8;
            default:
                throw Error("bad mask");
        }
    }

    function to(a, b, c) {
        if (c === "auto") c = Math.min(1200, Oi(a)), b = b / c <= .25 ? 4 : 3;
        else {
            b = 0;
            for (const d in Li) c.indexOf(d) !== -1 && (b |= Li[d])
        }
        return b
    }

    function vo(a, b, c, d, e) {
        const f = e.google_ad_height || aj(c, b, "height");
        b = ko(a, b, c, f, e).size();
        return b.Z * b.height() > a * d.height() ? new Y(b.Z, b.height(), 1) : d
    }

    function uo(a) {
        return T(Lh) || a.location && a.location.hash === "#hffwroe2etoq"
    };

    function wo(a, b, c, d, e) {
        var f;
        (f = Oi(b)) ? Oi(b) < 488 ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Zi(b, c), f = {
            F: f,
            G: !0
        }) : f = {
            F: a,
            G: 5
        } : f = {
            F: a,
            G: 4
        }: f = {
            F: a,
            G: 10
        };
        const {
            F: g,
            G: h
        } = f;
        if (h !== !0 || a === g) return new $n(12, new $i(a, d), null, null, !0, h, 100);
        const {
            ba: k,
            Y: l,
            sa: m
        } = ro(g, "auto", b, c, e, !0);
        return new $n(1, k, m, 2, !0, h, l)
    };
    var yo = (a, b) => {
            var c = b.google_ad_format;
            if (c === "autorelaxed") {
                a: {
                    if (b.google_content_recommendation_ui_type !== "pedestal")
                        for (const d of ao)
                            if (b[d] != null) {
                                a = !0;
                                break a
                            }
                    a = !1
                }
                return a ? 9 : 5
            }
            if (po(c)) return 1;
            if (c === "link") return 4;
            if (c === "fluid") {
                if (c = b.google_ad_layout === "in-article") c = T(Th) || a.location && (a.location.hash == "#hffwroe2etop" || a.location.hash == "#hffwroe2etoq");
                return c ? (xo(b), 1) : 8
            }
            if (b.google_reactive_ad_format === 27) return xo(b), 1
        },
        Ao = (a, b, c, d, e = !1) => {
            var f = b.offsetWidth || (c.google_ad_resize ||
                e) && aj(b, d, "width") || c.google_ad_width || 0;
            a === 4 && (c.google_ad_format = "auto", a = 1);
            e = (e = zo(a, f, b, c, d)) ? e : qo(f, c.google_ad_format, d, b, c);
            e.size().i(d, c, b);
            e.ha != null && (c.google_responsive_formats = e.ha);
            e.W != null && (c.google_safe_for_responsive_override = e.W);
            e.i != null && (e.i === !0 ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = e.i));
            e.j != null && e.j !== !0 && (c.gfwrnher = e.j);
            d = e.A || c.google_ad_width;
            d != null && (c.google_resizing_width = d);
            d = e.u || c.google_ad_height;
            d != null && (c.google_resizing_height = d);
            d = e.size().g(f);
            const g = e.size().height();
            c.google_ad_width = d;
            c.google_ad_height = g;
            var h = e.size();
            f = h.g(f) + "x" + h.height();
            c.google_ad_format = f;
            c.google_responsive_auto_format = e.B;
            e.g != null && (c.armr = e.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            e.i === !0 && (c.gfwrnh = e.size().height() + "px");
            e.D != null && (c.gfwroml = e.D);
            e.H != null && (c.gfwromr = e.H);
            e.u != null && (c.gfwroh = e.u);
            e.A != null && (c.gfwrow = e.A);
            e.I != null && (c.gfwroz = e.I);
            f = Ud(window) || window;
            Zm(f.location, "google_responsive_dummy_ad") && (Ra([1, 2, 3, 4, 5, 6, 7, 8], e.B) || e.g === 1) && e.g !== 2 && (f = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${Zn}>window.top.postMessage('${f}', '*'); 
          </${Zn}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`);
            a != 1 && (a = e.size().height(), b.style.height = a + "px")
        };
    const zo = (a, b, c, d, e) => {
            const f = d.google_ad_height || aj(c, e, "height");
            switch (a) {
                case 5:
                    const {
                        F: g,
                        G: h
                    } = ck(247, () => oo(b, d.google_ad_format, e, c, d));
                    h === !0 && b != g && Zi(e, c);
                    h === !0 ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return co(g, d);
                case 9:
                    return go(b, d);
                case 8:
                    return ko(b, e, c, f, d);
                case 10:
                    return wo(b, e, c, f, d)
            }
        },
        xo = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function Bo(a, b) {
        a.google_resizing_allowed = !0;
        a.ovlp = !0;
        a.google_ad_format = "auto";
        a.iaaso = !0;
        a.armr = b
    };

    function Co(a, b) {
        var c = Ud(b);
        if (c) {
            c = Oi(c);
            const d = Xd(a, b) || {},
                e = d.direction;
            if (d.width === "0px" && d.cssFloat !== "none") return -1;
            if (e === "ltr" && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if (e === "rtl" && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function Do(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            default:
                return b
        }
    }

    function Eo(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = Sd(c, "client");
            d && (b.google_ad_client = Do("google_ad_client", d));
            (c = Sd(c, "host")) && (b.google_ad_host = Do("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = wa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Do(f, e.value), e !== null && (b[f] = e))
            }
        }
    }

    function Fo(a) {
        if (a = ze(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Go(a, b, c, d) {
        Eo(a, b);
        if (c.document && c.document.body && !yo(c, b) && !b.google_reactive_ad_format && !b.google_ad_intent_query) {
            var e = parseInt(a.style.width, 10),
                f = Co(a, c);
            if (f > 0 && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!rn[e + "x" + g];
                let h = f;
                if (e) {
                    const k = sn(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new V("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                Bo(b, 4)
            }
        }
        if (T(Rh) ||
            Oi(c) < 488) {
            f = Ud(c) || c;
            g = a.offsetWidth || aj(a, c, "width") || b.google_ad_width || 0;
            e = b.google_ad_client;
            if (d = Zm(f.location, "google_responsive_slot_preview") || T(ii) || Cm(f, 1, e, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || yo(c, b) || Ri(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = Xd(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Ra(["static", "relative"], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    if (!T(bi) && (d = U(Wh), d = Ui(c, a, g, d, b), d !== !0)) {
                        b.gfwrnwer = d;
                        d = !1;
                        break b
                    }
                    d = c === c.top ? !0 : !1
                }
            d ? (Bo(b, 1), d = !0) :
                d = !1
        } else d = !1;
        if (g = yo(c, b)) Ao(g, a, b, c, d);
        else {
            if (Ri(a, b)) {
                if (d = Xd(a, c)) a.style.width = d.width, a.style.height = d.height, Qi(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Fo(c)
            } else Qi(a.style, b);
            c.location && c.location.hash === "#gfwmrp" || b.google_responsive_auto_format === 12 && b.google_full_width_responsive === "true" ? Ao(10, a, b, c, !1) : Math.random() < .01 && b.google_responsive_auto_format ===
                12 && (a = Vi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), a !== !0 ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Ho(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && Td(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function ng(a, b, c = 0) {
        a.g.size > 0 || Io(a);
        c = Math.min(Math.max(0, c), 9);
        const d = a.g.get(c);
        d ? d.push(b) : a.g.set(c, [b])
    }

    function Jo(a, b, c, d) {
        wd(b, c, d);
        Nk(a, () => xd(b, c, d))
    }

    function Ko(a, b) {
        a.j !== 1 && (a.j = 1, a.g.size > 0 && Lo(a, b))
    }

    function Io(a) {
        a.l.document.visibilityState ? Jo(a, a.l.document, "visibilitychange", b => {
            a.l.document.visibilityState === "hidden" && Ko(a, b);
            a.l.document.visibilityState === "visible" && (a.j = 0)
        }) : "onpagehide" in a.l ? (Jo(a, a.l, "pagehide", b => {
            Ko(a, b)
        }), Jo(a, a.l, "pageshow", () => {
            a.j = 0
        })) : Jo(a, a.l, "beforeunload", b => {
            Ko(a, b)
        })
    }

    function Lo(a, b) {
        for (let c = 9; c >= 0; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var Mo = class extends Mk {
        constructor(a) {
            super();
            this.l = a;
            this.j = 0;
            this.g = new Map
        }
    };
    async function No(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function Oo(a) {
        const b = a.g.pc;
        return b !== null && b !== 0 ? b : a.g.pc = ne(a.l)
    }

    function Po(a) {
        const b = a.g.wpc;
        return b !== null && b !== "" ? b : a.g.wpc = qn(a.l)
    }

    function Qo(a, b) {
        var c = new Hf;
        var d = Oo(a);
        c = K(c, 1, d);
        d = Po(a);
        c = md(c, 2, d);
        c = K(c, 3, a.g.sd);
        return K(c, 7, Math.round(b || a.l.performance.now()))
    }
    async function Ro(a) {
        await No(a.l, () => !(!Oo(a) || !Po(a)))
    }

    function So(a) {
        var b = N(To);
        if (b.j) {
            var c = b.B;
            a(c);
            b.g.psi = od(c)
        }
    }

    function Uo(a) {
        ng(a.u, () => {
            var b = Qo(a);
            b = Zc(b, 12, If, a.D);
            a.j && !a.g.le.includes(3) && (a.g.le.push(3), jg(a.i, b))
        }, 9)
    }

    function Vo(a) {
        const b = Cf(new Df, a.A);
        ng(a.u, () => {
            Yc(b, 2, a.B);
            K(b, 3, a.g.tar);
            var c = a.i;
            var d = Qo(a);
            d = Zc(d, 8, If, b);
            jg(c, d)
        }, 9)
    }
    async function Wo(a) {
        var b = N(To);
        if (b.j && !b.g.le.includes(1)) {
            b.g.le.push(1);
            var c = b.l.performance.now();
            await Ro(b);
            var d = new yf;
            a = B(d, 5, Sb(a), !1);
            d = new xf;
            d = K(d, 1, Ni(b.l).scrollWidth);
            d = K(d, 2, Ni(b.l).scrollHeight);
            a = Yc(a, 2, d);
            d = new xf;
            var e = Oi(b.l);
            d = K(d, 1, e);
            d = K(d, 2, Ni(b.l).clientHeight);
            a = Yc(a, 1, d);
            a = md(a, 4, b.A);
            d = Ho(b.l);
            d !== 0 && (e = new wf, d = y(e, 1, v(d)), Yc(a, 3, d));
            d = b.i;
            c = Qo(b, c);
            c = Zc(c, 4, If, a);
            jg(d, c);
            Uo(b);
            Vo(b)
        }
    }
    async function Xo(a, b, c) {
        if (a.j && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.l.performance.now();
            await Ro(a);
            var e = a.i;
            a = Qo(a, d);
            d = new vf;
            b = B(d, 1, v(b), 0);
            c = Nc(b, 2, c, Wb);
            c = Zc(a, 9, If, c);
            jg(e, c)
        }
    }
    async function Yo(a, b) {
        await Ro(a);
        var c = a.i;
        a = Qo(a);
        a = K(a, 3, 1);
        b = Zc(a, 10, If, b);
        jg(c, b)
    }
    var To = class {
        constructor(a, b) {
            this.l = Ae() || window;
            this.u = b ? ? new Mo(this.l);
            this.i = a ? ? new pg(2, Bl(), 100, 100, !0, this.u);
            this.g = Fk(Ck(), 33, () => {
                const c = U(Uh),
                    d = c > 0 && Yd() < 1 / c,
                    e = U(vi);
                return {
                    sd: c,
                    ssp: d,
                    sds: e,
                    ssps: e > 0 && Yd() < 1 / e,
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
        get j() {
            return this.g.ssp
        }
        get A() {
            return this.g.cu
        }
        set A(a) {
            this.g.cu = a
        }
        get B() {
            return ck(1178, () => pd(Bf, rc(this.g.psi || []))) || new Bf
        }
        get D() {
            return ck(1227, () => pd(Ef, rc(this.g.cc || []))) || new Ef
        }
    };

    function Zo() {
        var a = window;
        return n.google_adtest === "on" || n.google_adbreak_test === "on" || a.location.host.endsWith("h5games.usercontent.goog") || a.location.host === "gamesnacks.com" ? a.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && b > 0) || [] : []
    };

    function $o(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function ap(a) {
        var b = O.document;
        if (b.currentScript) return $o(b.currentScript, a);
        for (const c of b.scripts)
            if ($o(c, a) === 0) return 0;
        return 1
    };

    function bp(a, b) {
        return {
            [3]: {
                [55]: () => a === 0,
                [23]: c => Cm(O, Number(c)),
                [24]: c => Fm(Number(c)),
                [61]: () => H(b, 6),
                [63]: () => H(b, 6) || I(b, 8) === ".google.ch"
            },
            [4]: {},
            [5]: {
                [6]: () => I(b, 15)
            }
        }
    };

    function cp(a = n) {
        return a.ggeac || (a.ggeac = {})
    };

    function dp(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function ep(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function fp(a, b = navigator) {
        try {
            return !!b.protectedAudience ? .queryFeatureSupport ? .(a)
        } catch (c) {
            return !1
        }
    };

    function gp(a, b) {
        try {
            const d = a.split(".");
            a = n;
            let e = 0,
                f;
            for (; a != null && e < d.length; e++) f = a, a = a[d[e]], typeof a === "function" && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch {}
    }
    var hp = {
        [3]: {
            [8]: a => {
                try {
                    return ka(a) != null
                } catch {}
            },
            [9]: a => {
                try {
                    var b = ka(a)
                } catch {
                    return
                }
                if (a = typeof b === "function") b = b && b.toString && b.toString(), a = typeof b === "string" && b.indexOf("[native code]") != -1;
                return a
            },
            [10]: () => window === window.top,
            [6]: a => Ra(N(Vg).g(), Number(a)),
            [27]: a => {
                a = gp(a, "boolean");
                return a !== void 0 ? a : void 0
            },
            [60]: a => {
                try {
                    return !!n.document.querySelector(a)
                } catch {}
            },
            [80]: a => {
                try {
                    return !!n.matchMedia(a).matches
                } catch {}
            },
            [69]: a => dp(a, n.document),
            [70]: a => ep(a, n.document),
            [79]: a => fp(a,
                n.navigator)
        },
        [4]: {
            [3]: () => ee(),
            [6]: a => {
                a = gp(a, "number");
                return a !== void 0 ? a : void 0
            }
        },
        [5]: {
            [2]: () => window.location.href,
            [3]: () => {
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            },
            [4]: a => {
                a = gp(a, "string");
                return a !== void 0 ? a : void 0
            }
        }
    };

    function ip(a, b) {
        const c = new Map;
        for (const [f, g] of a[1].entries()) {
            var d = f,
                e = g;
            const {
                jb: h,
                fb: k,
                gb: l
            } = e[e.length - 1];
            c.set(d, h + k * l)
        }
        for (const f of b)
            for (const g of E(f, lm, 2, A()))
                if (km(g).length !== 0) {
                    b = bd(Zb(Cc(g, 8)), 0);
                    !J(g, 4) || J(g, 13) || J(g, 14) || (b = c.get(J(g, 4)) ? ? 0, d = bd(Zb(Cc(g, 1)), 0) * km(g).length, c.set(J(g, 4), b + d));
                    d = [];
                    for (e = 0; e < km(g).length; e++) {
                        const h = {
                            jb: b,
                            fb: bd(Zb(Cc(g, 1)), 0),
                            gb: km(g).length,
                            Ab: e,
                            ja: J(f, 1),
                            ta: g,
                            P: km(g)[e]
                        };
                        d.push(h)
                    }
                    jp(a[2], J(g, 10), d) || jp(a[1], J(g, 4), d) || jp(a[0], km(g)[0].getId(),
                        d)
                }
        return a
    }

    function jp(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        a.get(b).push(...c);
        return !0
    };

    function kp(a = Yd()) {
        return b => $d(`${b} + ${a}`) % 1E3
    };
    const lp = [12, 13, 20];

    function mp(a, b) {
        var c = N(vg).M;
        const d = mf(D(b.ta, ef, 3), c);
        if (!d.success) return tg(a.L, D(b.ta, ef, 3), b.ja, b.P.getId(), d), !1;
        if (!d.value) return !1;
        c = mf(D(b.P, ef, 3), c);
        return c.success ? c.value ? !0 : !1 : (tg(a.L, D(b.P, ef, 3), b.ja, b.P.getId(), c), !1)
    }

    function np(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        a.includes(b) || a.push(b)
    }

    function op(a, b, c, d) {
        const e = [];
        var f;
        if (f = b !== 9) a.u[b] ? f = !0 : (a.u[b] = !0, f = !1);
        if (f) return rg(a.L, b, c, e, [], 4), e;
        f = lp.includes(b);
        const g = [],
            h = [];
        for (const p of [0, 1, 2])
            for (const [r, x] of a.na[p].entries()) {
                var k = r,
                    l = x;
                const t = new Nf;
                var m = l.filter(w => w.ja === b && a.i[w.P.getId()] && mp(a, w));
                if (m.length)
                    for (const w of m) h.push(w.P);
                else if (!a.Ba && (p === 2 ? (m = d[1], Pc(t, 2, Of, v(k))) : m = d[0], k = m ? .(String(k)) ? ? (p === 2 && J(l[0].ta, 11) === 1 ? void 0 : d[0](String(k))), k !== void 0)) {
                    for (const w of l) {
                        if (w.ja !== b) continue;
                        l =
                            k - w.jb;
                        m = w.fb;
                        const L = w.gb,
                            C = w.Ab;
                        l < 0 || l >= m * L || l % L !== C || !mp(a, w) || (l = J(w.ta, 13), l !== 0 && l !== void 0 && (m = a.j[String(l)], m !== void 0 && m !== w.P.getId() ? sg(a.L, a.j[String(l)], w.P.getId(), l) : a.j[String(l)] = w.P.getId()), h.push(w.P))
                    }
                    Tc(t, Of) !== 0 && (B(t, 3, Xb(k), 0), g.push(t))
                }
            }
        for (const p of h) d = p.getId(), e.push(d), np(a, d, f ? 4 : c), Mg(E(p, of , 2, A()), f ? Og() : [c], a.L, d);
        rg(a.L, b, c, e, g, 1);
        return e
    }

    function pp(a, b) {
        b = b.map(c => new mm(c)).filter(c => !lp.includes(J(c, 1)));
        a.na = ip(a.na, b)
    }

    function qp(a, b) {
        P(1, c => {
            a.i[c] = !0
        }, b);
        P(2, (c, d, e) => op(a, c, d, e), b);
        P(3, c => (a.g[c] || []).concat(a.g[4]), b);
        P(12, c => void pp(a, c), b);
        P(16, (c, d) => void np(a, c, d), b)
    }
    var rp = class {
        constructor(a, b, c, {
            Ba: d = !1,
            qc: e = []
        } = {}) {
            this.na = a;
            this.L = c;
            this.u = {};
            this.Ba = d;
            this.g = {
                [b]: [],
                [4]: []
            };
            this.i = {};
            this.j = {};
            if (a = Ke()) {
                a = a.split(",") || [];
                for (const f of a)(a = Number(f)) && (this.i[a] = !0)
            }
            for (const f of e) this.i[f] = !0
        }
    };

    function sp(a, b) {
        a.g = Qg(14, b, () => {})
    }
    class tp {
        constructor() {
            this.g = () => {}
        }
    }

    function up(a) {
        N(tp).g(a)
    };

    function vp({
        ub: a,
        M: b,
        config: c,
        pb: d = cp(),
        qb: e = 0,
        L: f = new ug(D(a, nm, 5) ? .g() ? ? 0, D(a, nm, 5) ? .i() ? ? 0, D(a, nm, 5) ? .j() ? ? !1),
        na: g = ip({
            [0]: new Map,
            [1]: new Map,
            [2]: new Map
        }, E(a, mm, 2, A(xb)))
    }) {
        d.hasOwnProperty("init-done") ? (Qg(12, d, () => {})(E(a, mm, 2, A()).map(h => od(h))), Qg(13, d, () => {})(E(a, of , 1, A()).map(h => od(h)), e), b && Qg(14, d, () => {})(b), wp(e, d)) : (qp(new rp(g, e, f, c), d), Rg(d), Sg(d), Tg(d), wp(e, d), Mg(E(a, of , 1, A(xb)), [e], f, void 0, !0), wg = wg || !(!c || !c.yb), up(hp), b && up(b))
    }

    function wp(a, b = cp()) {
        Ug(N(Vg), b, a);
        xp(b, a);
        sp(N(tp), b);
        N(je).B()
    }

    function xp(a, b) {
        const c = N(je);
        c.i = (d, e) => Qg(5, a, () => !1)(d, e, b);
        c.u = (d, e) => Qg(6, a, () => 0)(d, e, b);
        c.g = (d, e) => Qg(7, a, () => "")(d, e, b);
        c.A = (d, e) => Qg(8, a, () => [])(d, e, b);
        c.j = (d, e) => Qg(17, a, () => [])(d, e, b);
        c.B = () => {
            Qg(15, a, () => {})(b)
        }
    };

    function yp(a, b) {
        b = {
            [0]: kp(ne(b).toString())
        };
        b = N(Vg).u(a, b);
        Zg.ca(1085, Xo(N(To), a, b))
    }

    function zp(a, b, c) {
        var d = X(a);
        if (d.plle) wp(1, cp(a));
        else {
            d.plle = !0;
            d = D(b, om, 12);
            var e = H(b, 9);
            vp({
                ub: d,
                M: bp(c, b),
                config: {
                    Ba: e && !!a.google_disable_experiments,
                    yb: e
                },
                pb: cp(a),
                qb: 1
            });
            if (c = I(b, 15)) c = Number(c), N(Vg).j(c);
            for (const f of Hc(b, 19, Yb, A())) N(Vg).i(f);
            yp(12, a);
            yp(10, a);
            a = Ud(a) || a;
            Zm(a.location, "google_mc_lab") && N(Vg).i(44738307);
            Zm(a.location, "google_auto_storify_swipeable") && N(Vg).i(44773747);
            Zm(a.location, "google_auto_storify_scrollable") && N(Vg).i(44773746)
        }
    };

    function Ap(a, b) {
        a.Fa(c => {
            c.shv = String(b);
            c.mjsv = pn({
                ya: Bl(),
                Ea: b
            });
            const d = N(Vg).g(),
                e = Zo();
            c.eid = d.concat(e).join(",")
        })
    };
    var Bp = class extends M {
        constructor() {
            super()
        }
    };
    var Cp = class extends M {
        constructor() {
            super()
        }
    };

    function Dp(a) {
        const b = new Cp;
        var c = new Bp;
        a = ed(a, 1);
        c = y(c, 1, Xb(a));
        Yc(b, 1, c);
        return b
    };
    var Ep = {
        google_pause_ad_requests: !0,
        google_user_agent_client_hint: !0
    };

    function Fp(a) {
        var b = W;
        try {
            return Hb(a, Mb), new qm(JSON.parse(a))
        } catch (c) {
            b.R(838, c instanceof Error ? c : Error(String(c)))
        }
        return new qm
    };

    function Gp(a, b) {
        if (H(b, 22)) return 7;
        if (H(b, 16)) return 6;
        var c = b.g() ? .j();
        const d = b.g() ? .u() ? ? 0;
        c = c === a;
        switch (d) {
            case 1:
                return c ? 9 : 8;
            case 2:
                return c ? 11 : 10;
            case 3:
                return c ? 13 : 12
        }
        b = b.g() ? .g() ? ? [];
        return b.length === 0 ? 1 : b.length === 1 ? a === b[0] ? 3 : 2 : b.includes(a) ? 5 : 4
    }

    function Hp(a, b, c) {
        b.google_loader_used !== "sd" && (b.abgtt = Gp(a, c))
    };
    var Ip = () => {
        var a = O;
        try {
            var b = (a || window).document,
                c = b.compatMode == "CSS1Compat" ? b.documentElement : b.body;
            return (new Kd(c.clientWidth, c.clientHeight)).round()
        } catch (d) {
            return new Kd(-12245933, -12245933)
        }
    };
    var Jp = a => {
        wd(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || c.googMsgType !== "sc-cnf" || a(c, b)
        })
    };

    function Kp(a, b) {
        return b == null ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function Lp(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function Mp() {
        const a = new Set,
            b = rk();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function Np(a) {
        a = a.id;
        return a != null && (Mp().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function Op(a, b, c) {
        if (!a.sources) return !1;
        switch (Pp(a)) {
            case 2:
                const d = Qp(a);
                if (d) return c.some(f => Rp(d, f));
                break;
            case 1:
                const e = Sp(a);
                if (e) return b.some(f => Rp(e, f))
        }
        return !1
    }

    function Pp(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Sp(a) {
        return Tp(a, b => b.currentRect)
    }

    function Qp(a) {
        return Tp(a, b => b.previousRect)
    }

    function Tp(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Rp(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : 100 * c * a / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }

    function Up() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(Np),
            b = [...Mp()].map(c => document.getElementById(c)).filter(c => c !== null);
        Vp = window.scrollX;
        Wp = window.scrollY;
        return Xp = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function Yp() {
        var a = new Zp;
        if (T(Cl)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                a.mb.tb && b.push("event");
                for (const c of b) b = {
                    type: c,
                    buffered: !0
                }, c === "event" && (b.durationThreshold = 40), $p(a).observe(b);
                aq(a)
            }
        }
    }

    function bq(a, b) {
        const c = Vp !== window.scrollX || Wp !== window.scrollY ? [] : Xp,
            d = Up();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                cq(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Ma = Math.floor(b.renderTime || b.loadTime);
                a.La = b.size;
                break;
            case "first-input":
                b = e;
                a.Ia = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ja = !0;
                a.g.some(f => f.entries.some(g => e.duration === g.duration && e.startTime === g.startTime)) || dq(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.B +=
                    b;
                a.I = Math.max(a.I, b);
                a.va += 1;
                break;
            case "event":
                dq(a, e);
                break;
            default:
                Rb(b, void 0)
        }
    }

    function $p(a) {
        a.L || (a.L = new PerformanceObserver(Jj(640, b => {
            bq(a, b)
        })));
        return a.L
    }

    function aq(a) {
        const b = Jj(641, () => {
                var d = document;
                (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) === 2 && eq(a)
            }),
            c = Jj(641, () => void eq(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.Ha = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            $p(a).disconnect()
        }
    }

    function eq(a) {
        if (!a.Pa) {
            a.Pa = !0;
            $p(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Lp("cls", a.D), b += Lp("mls", a.W), b += Kp("nls", a.ua), window.LayoutShiftAttribution && (b += Lp("cas", a.A), b += Kp("nas", a.Oa), b += Lp("was", a.Ta)), b += Lp("wls", a.wa), b += Lp("tls", a.Sa));
            window.LargestContentfulPaint && (b += Kp("lcp", a.Ma), b += Kp("lcps", a.La));
            window.PerformanceEventTiming && a.Ja && (b += Kp("fid", a.Ia));
            window.PerformanceLongTaskTiming && (b += Kp("cbt", a.B),
                b += Kp("mbt", a.I), b += Kp("nlt", a.va));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) Np(c) && d++;
            b += Kp("nif", d);
            b += Kp("ifi", Ce(window));
            c = N(Vg).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${n===n.top?1:0}`;
            b += a.Ra ? `&${"qqid"}=${encodeURIComponent(a.Ra)}` : Kp("pvsid", ne(n));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.L ? a.Ka : performance.interactionCount || 0) / 50));
            c >= 0 && (c = a.g[c].latency, c >= 0 && (b += Kp("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.Ha()
        }
    }

    function cq(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.D += Number(b.value);
            Number(b.value) > a.W && (a.W = Number(b.value));
            a.ua += 1;
            if (c = Op(b, c, d)) a.A += b.value, a.Oa++;
            if (b.startTime - a.Na > 5E3 || b.startTime - a.Qa > 1E3) a.Na = b.startTime, a.i = 0, a.j = 0;
            a.Qa = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.wa && (a.wa = a.i, a.Ta = a.j, a.Sa = b.startTime + b.duration)
        }
    }

    function dq(a, b) {
        fq(a, b);
        const c = a.g[a.g.length - 1],
            d = a.H[b.interactionId];
        if (d || a.g.length < 10 || b.duration > c.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
            id: b.interactionId,
            latency: b.duration,
            entries: [b]
        }, a.H[b.id] = b, a.g.push(b)), a.g.sort((e, f) => f.latency - e.latency), a.g.splice(10).forEach(e => {
            delete a.H[e.id]
        })
    }

    function fq(a, b) {
        b.interactionId && (a.da = Math.min(a.da, b.interactionId), a.u = Math.max(a.u, b.interactionId), a.Ka = a.u ? (a.u - a.da) / 7 + 1 : 0)
    }
    var Zp = class {
            constructor() {
                this.j = this.i = this.ua = this.W = this.D = 0;
                this.Qa = this.Na = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.H = {};
                this.Ka = 0;
                this.da = Infinity;
                this.Ia = this.La = this.Ma = this.Oa = this.Ta = this.A = this.Sa = this.wa = this.u = 0;
                this.Ja = !1;
                this.va = this.I = this.B = 0;
                this.L = null;
                this.Pa = !1;
                this.Ha = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.Ra = a ? a.getAttribute("data-google-query-id") : null;
                this.mb = {
                    tb: !0
                }
            }
        },
        Vp, Wp, Xp = [];
    let gq = null;
    const hq = [],
        iq = new Map;
    let jq = -1;

    function kq(a) {
        return jj.test(a.className) && a.dataset.adsbygoogleStatus !== "done"
    }

    function lq(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        mq(a, b, c)
    }

    function mq(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Go);
        var e = b.google_reactive_ads_config;
        e || Go(a, b, d, c);
        In(d, b);
        if (!nq(a, b, d)) {
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(O).page_contains_reactive_tag && !X(O).allow_second_reactive_tag) {
                    if (e.pltais) {
                        vm(!1);
                        return
                    }
                    throw new V("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(O).page_contains_reactive_tag = !0;
                vm(e.google_pgb_reactive === 7)
            }
            b.google_unique_id = Be(d);
            Zd(Ep, (f, g) => {
                b[g] = b[g] || d[g]
            });
            b.google_loader_used !== "sd" && (b.google_loader_used =
                "aa");
            b.google_reactive_tag_first = (X(O).first_tag_on_page || 0) === 1;
            ck(164, () => {
                Nn(d, b, a, c)
            })
        }
    }

    function nq(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = typeof a.className === "string" && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = tm(c);
        if (f && f.Ua && b.google_adtest !== "on" && !e) {
            e = Si(a, c);
            const g = Ni(c).clientHeight;
            e = g === 0 ? null : e / g;
            if (!f.xa || f.xa && (e || 0) >= f.xa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = ma(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), f.Hb === "slot" && (ce(a.getAttribute("width")) !==
                null && a.setAttribute("width", "0"), ce(a.getAttribute("height")) !== null && a.setAttribute("height", "0"), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Xd(a, c)) && f.display === "none" && !(b.google_adtest === "on" || b.google_reactive_ad_format > 0 || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = b.google_pgb_reactive == null || b.google_pgb_reactive === 3;
        return b.google_reactive_ad_format !== 1 && b.google_reactive_ad_format !==
            8 || !a ? !1 : (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function oq(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (kq(c) && c.dataset.adsbygoogleStatus !== "reserved" && (!a || e.id === a)) return e
        }
        return null
    }

    function pq(a, b, c) {
        if (a && "shift" in a) {
            So(e => {
                gd(Af(e), 2) || (e = Af(e), ld(e, 2))
            });
            for (var d = 20; a.length > 0 && d > 0;) {
                try {
                    qq(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }--d
            }
        }
    }

    function rq() {
        const a = Wd("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        fe(a);
        return a
    }

    function sq(a, b) {
        const c = {},
            d = Mm(a.google_ad_client, b);
        Zd(Mi, (g, h) => {
            a.enable_page_level_ads === !1 ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        });
        la(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = rq();
        oe.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(O).pause_ad_requests;
        Hp(tq(a) || qn(O), f, b);
        lq(e, f, b);
        So(g => {
            gd(Af(g), 6) || (g = Af(g), ld(g, 6))
        })
    }

    function uq(a, b) {
        fn(n).wasPlaTagProcessed = !0;
        const c = () => {
                sq(a, b)
            },
            d = n.document;
        if (d.body || d.readyState === "complete" || d.readyState === "interactive") sq(a, b);
        else {
            const e = vd(W.ra(191, c));
            wd(d, "DOMContentLoaded", e);
            n.MutationObserver != null && (new n.MutationObserver((f, g) => {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function qq(a, b, c) {
        const d = {};
        ck(165, () => {
            vq(a, d, b, c)
        }, e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function wq(a) {
        delete a.google_checked_head;
        Zd(a, (b, c) => {
            ij[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), n.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        })
    }

    function xq(a, b) {
        var c = O.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || O.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars) yq(c);
            else {
                So(g => {
                    g = Af(g);
                    B(g, 7, Sb(!0), !1)
                });
                var e = {};
                Eo(c, e);
                wq(e);
                var f = Bd(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                e.google_ad_intent_query &&
                    (c.enable_ad_intent_display_ads = !0);
                e.google_overlays === "bottom" && (c.overlays = {
                    bottom: !0
                });
                delete e.google_overlays;
                O.adsbygoogle || (O.adsbygoogle = []);
                d = O.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.i() ? .i() ? zq(f, a) : Jp(() => {
                    zq(f, a)
                })
            }
        }
    }

    function yq(a) {
        const b = X(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Sd(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new V("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function Aq(a) {
        if (typeof a === "object" && a != null) {
            if (typeof a.type === "string") return 2;
            if (typeof a.sound === "string" || typeof a.preloadAdBreaks === "string") return 3
        }
        return 0
    }

    function vq(a, b, c, d) {
        if (a == null) throw new V("push() called with no parameters.");
        So(f => {
            gd(Af(f), 3) || (f = Af(f), ld(f, 3))
        });
        d.j() && Bq(a, d.g().g(), I(d, 2));
        var e = Aq(a);
        if (e !== 0)
            if (d = wm(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = ua), gq == null) Cq(a), hq.push(a);
            else if (e === 3) {
            const f = gq;
            ck(787, () => {
                f.handleAdConfig(a)
            })
        } else ek(730, gq.handleAdBreak(a));
        else {
            ua = (new Date).getTime();
            Jn(c, d, tq(a));
            Dq();
            a: {
                if (!a.enable_ad_intent_display_ads &&
                    a.enable_page_level_ads != void 0) {
                    if (typeof a.google_ad_client === "string") {
                        e = !0;
                        break a
                    }
                    throw new V("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) So(f => {
                gd(Af(f), 4) || (f = Af(f), ld(f, 4))
            }), Eq(a, d);
            else if ((e = a.params) && Zd(e, (f, g) => {
                    b[g] = f
                }), b.google_ad_output === "js") console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                Hp(tq(a) || qn(O), b, d);
                e = (c = !!b.google_wrap_fullscreen_ad) ?
                    Fq() : Gq(a.element);
                c && (c = Ip(), b.google_ad_height = c.height, b.google_ad_width = c.width, b.fsapi = !0);
                Eo(e, b);
                c = X(n).head_tag_slot_vars || {};
                Zd(c, (f, g) => {
                    b.hasOwnProperty(g) || (b[g] = f)
                });
                if (e.hasAttribute("data-require-head") && !X(n).head_tag_slot_vars) throw new V("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new V("Ad client is missing from the slot.");
                if (c = (X(O).first_tag_on_page ||
                        0) === 0 && jn(b)) So(f => {
                    gd(Af(f), 5) || (f = Af(f), ld(f, 5))
                }), Hq(c);
                (X(O).first_tag_on_page || 0) === 0 && (X(O).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(O).pause_ad_requests;
                lq(e, b, d)
            }
        }
    }
    let Iq = !1;

    function Bq(a, b, c) {
        Iq || (Iq = !0, a = tq(a) || qn(O), dk("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function tq(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Dq() {
        if (T(gi)) {
            const a = tm(O);
            a && a.Ua || um(O)
        }
    }

    function Hq(a) {
        pe(() => {
            fn(n).wasPlaTagProcessed || n.adsbygoogle && n.adsbygoogle.push(a)
        })
    }

    function Eq(a, b) {
        (X(O).first_tag_on_page || 0) === 0 && (X(O).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(n);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        kn(a, b);
        uq(a, b)
    }

    function Fq() {
        const a = rq();
        a.dataset.adsbygoogleStatus = "reserved";
        oe.documentElement.appendChild(a);
        return a
    }

    function Gq(a) {
        if (a) {
            if (!kq(a) && (a.id ? a = oq(a.id) : a = null, !a)) throw new V("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new V("'element' is not a good DOM element.");
        } else if (a = oq(), !a) throw new V("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Jq(a) {
        a = {
            value: `${H(a,16)}`,
            host_v: `${H(a,22)}`,
            frequency: .01
        };
        dk("new_abg_tag", a, .01)
    }

    function Kq(a) {
        var b = Ck();
        Ik(b, 26, !!Number(a))
    }

    function Lq(a) {
        Number(a) ? X(O).pause_ad_requests = !0 : (X(O).pause_ad_requests = !1, a = () => {
            if (!X(O).pause_ad_requests) {
                var b = {};
                let c;
                typeof window.CustomEvent === "function" ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                O.dispatchEvent(c)
            }
        }, n.setTimeout(a, 0), n.setTimeout(a, 1E3))
    }

    function Mq(a) {
        a && a.call && typeof a === "function" && window.setTimeout(a, 0)
    }

    function zq(a, b) {
        b = en(Jd(b.Gb, new Map(Object.entries(an())))).then(c => {
            gq == null && (c.init(a), gq = c, Nq(c))
        });
        W.ca(723, b);
        b.finally(() => {
            hq.length = 0;
            dk("slotcar", {
                event: "api_ld",
                time: Date.now() - ua,
                time_pr: Date.now() - jq
            });
            T(Di) && Yo(N(To), Ff(23))
        })
    }

    function Nq(a) {
        for (const [c, d] of iq) {
            var b = c;
            const e = d;
            e !== -1 && (n.clearTimeout(e), iq.delete(b))
        }
        for (b = 0; b < hq.length; b++) {
            if (iq.has(b)) continue;
            const c = hq[b],
                d = Aq(c);
            ck(723, () => {
                if (d === 3) a.handleAdConfig(c);
                else if (d === 2) {
                    var e = a.handleAdBreakBeforeReady(c);
                    W.ca(730, e)
                }
            })
        }
    }

    function Cq(a) {
        var b = hq.length;
        if (Aq(a) === 2 && a.type === "preroll" && a.adBreakDone != null) {
            var c = a.adBreakDone;
            jq === -1 && (jq = Date.now());
            var d = n.setTimeout(() => {
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), iq.set(b, -1), dk("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    }), T(Di) && Yo(N(To), Ff(22))
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }, U(Ci) * 1E3);
            iq.set(b, d)
        }
    };
    (function(a, b, c, d = () => {}) {
        W.ib(fk);
        ck(166, () => {
            const e = new pg(2, a);
            try {
                Cb(m => {
                    var p = new dg;
                    var r = new cg;
                    try {
                        var x = ne(window);
                        K(r, 1, x)
                    } catch (C) {}
                    try {
                        var t = N(Vg).g();
                        Nc(r, 2, t, Wb)
                    } catch (C) {}
                    try {
                        md(r, 3, window.document.URL)
                    } catch (C) {}
                    p = Yc(p, 2, r);
                    r = new bg;
                    r = B(r, 1, v(1191), 0);
                    try {
                        var w = Mb(m ? .name) ? m.name : "Unknown error";
                        md(r, 2, w)
                    } catch (C) {}
                    try {
                        var L = Mb(m ? .message) ? m.message : `Caught ${m}`;
                        md(r, 3, L)
                    } catch (C) {}
                    try {
                        const C = Mb(m ? .stack) ? m.stack : Error().stack;
                        C && Nc(r, 4, C.split(/\n\s*/), dc)
                    } catch (C) {}
                    m = Yc(p, 1, r);
                    w = new ag;
                    try {
                        md(w, 1, Bl())
                    } catch {}
                    Zc(m, 6, eg, w);
                    K(m, 5, 1);
                    gg(e, m)
                })
            } catch (m) {}
            const f = Fp(b);
            var g;
            T(Bi) && (g = Dp(f));
            Ap(W, I(f, 2));
            sm(H(f, 6));
            Jk(Ck(), I(f, 24));
            d();
            ye(16, [1, od(f)]);
            var h = Ae(ze(O)) || O,
                k = pn({
                    ya: a,
                    Ea: I(f, 2)
                });
            const l = c(k, f);
            k = O.document.currentScript === null ? 1 : ap(l.Ib);
            Dm(h, f);
            zp(h, f, k);
            So(m => {
                var p = ed(m, 1) + 1;
                B(m, 1, Xb(p), 0);
                O.top === O && (p = ed(m, 2) + 1, B(m, 2, Xb(p), 0));
                gd(Af(m), 1) || (m = Af(m), ld(m, 1))
            });
            ek(1086, Wo(k === 0));
            if (!Ga() || xa(La(), 11) >= 0) {
                bk(T(Fi));
                Qn();
                Tl();
                try {
                    Yp()
                } catch {}
                Pn();
                xq(l, f);
                h =
                    window;
                k = h.adsbygoogle;
                if (!k || !k.loaded) {
                    Jq(f);
                    g = {
                        push: m => {
                            qq(m, l, f)
                        },
                        loaded: !0,
                        pageState: T(Bi) ? g ? .A() : void 0
                    };
                    try {
                        Object.defineProperty(g, "requestNonPersonalizedAds", {
                            set: Kq
                        }), Object.defineProperty(g, "pauseAdRequests", {
                            set: Lq
                        }), Object.defineProperty(g, "onload", {
                            set: Mq
                        })
                    } catch {}
                    if (k)
                        for (const m of ["requestNonPersonalizedAds", "pauseAdRequests"]) k[m] !== void 0 && (g[m] = k[m]);
                    pq(k, l, f);
                    h.adsbygoogle = g;
                    k && (g.onload = k.onload)
                }
            }
        })
    })(Bl(), typeof sttc === "undefined" ? void 0 : sttc, function(a, b) {
        b = ed(b, 1) > 2012 ? `_fy${ed(b, 
1)}` : "";
        Id `data:text/javascript,//show_ads_impl_preview.js`;
        return {
            Gb: Id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${b}.js`,
            Eb: Id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${b}.js`,
            Db: Id `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${b}.js`,
            Ib: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20240814\",\"r20190131\",null,null,null,null,null,null,null,null,[[[1321,null,null,[1]],[null,661029237,null,[null,0.1]],[null,619278254,null,[null,10]],[1325,null,null,[1]],[1310,null,null,[1]],[1322,null,null,[1]],[1355,null,null,[1]],[1308,null,null,[1]],[1351,null,null,[1]],[null,1130,null,[null,100]],[null,1340,null,[null,0.2]],[null,1338,null,[null,0.3]],[1331,null,null,[1]],[1352,null,null,[1]],[1330,null,null,[1]],[null,1336,null,[null,1.2]],[null,1339,null,[null,0.3]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[null,1224,null,[null,0.01]],[null,1346,null,[null,6]],[null,1347,null,[null,3]],[null,1343,null,[null,300]],[1320,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1323,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[1267,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1300,null,null,[1]],[null,null,null,[null,null,null,[\"en\",\"de\"]],null,1273],[1223,null,null,[1]],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[1318,null,null,[1]],[null,1072,null,[null,0.75]],[null,1364,null,[null,300]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"24\",\"30\",\"34\"]],null,null,null,627094447],[null,579884443,null,[null,0.7]],[null,null,null,[null,null,null,[\"33\"]],null,null,null,641845510],[622128248,null,null,[1]],[null,null,589752731,[null,null,\"#FFFFFF\"]],[null,null,589752730,[null,null,\"#1A73E8\"]],[null,null,null,[null,null,null,[\"30_19\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"30_6\"]],null,null,null,636146137],[579884441,null,null,[1]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"24\",\"30\",\"34\"]],null,null,null,627094446],[null,579884442,null,[null,0.7]],[657249372,null,null,[1]],[null,626062006,null,[null,670]],[655991266,null,null,[1]],[658722541,null,null,[1]],[null,618163195,null,[null,15000]],[null,624950166,null,[null,15000]],[null,623405755,null,[null,300]],[null,508040914,null,[null,100]],[null,547455356,null,[null,49]],[null,650548030,null,[null,5]],[null,650548032,null,[null,300]],[null,650548031,null,[null,2]],[null,655966487,null,[null,300]],[null,655966486,null,[null,250]],[null,561668774,null,[null,0.1]],[null,469675170,null,[null,60000]],[570863962,null,null,[1]],[null,null,570879859,[null,null,\"control_1\\\\.\\\\d\"]],[null,570863961,null,[null,50]],[570879858,null,null,[1]],[570804360,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[10010,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[10009,null,null,[1]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[555237685,null,null,[1]],[45460956,null,null,[]],[45414947,null,null,[1]],[null,472785970,null,[null,500]],[595827158,null,null,[1]],[45618987,null,null,[1]],[null,550718588,null,[null,250]],[null,624290870,null,[null,50]],[null,629793592,null,[null,0.8]],[null,null,null,[null,null,null,[\"AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A9uiHDzQFAhqALUhTgTYJcz9XrGH2y0\/9AORwCSapUO\/f7Uh7ysIzyszNkuWDLqNYg8446Uj48XIstBW1qv\/wAQAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A9R+gkZL3TWq+Z7RJ2L0c7ZN7FZD5z4mHmVvjrPitg\/EMz9P3j5d3W7Vw5ZR9jtJGmWKltM4BO3smNzpCgwYuwwAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3Mjc4MjcxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31083552],[44776368]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31084127],[31084128]]],[10,[[31085910],[31085911,[[1290,null,null,[1]]]]]],[1000,[[31086175,[[null,null,14,[null,null,\"31086175\"]]],[6,null,null,null,6,null,\"31086175\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31086176,[[null,null,14,[null,null,\"31086176\"]]],[6,null,null,null,6,null,\"31086176\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31086219,[[null,null,14,[null,null,\"31086219\"]]],[6,null,null,null,6,null,\"31086219\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31086220,[[null,null,14,[null,null,\"31086220\"]]],[6,null,null,null,6,null,\"31086220\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[10,[[31086225],[31086226,[[614048763,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[50,[[42532523],[42532524,[[1300,null,null,[]]]]]],[null,[[42532525],[42532526]]],[1,[[42532741],[42532742,[[1260,null,null,[1]],[null,1263,null,[null,16]],[null,1323,null,[null,50]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532743,[[1260,null,null,[1]],[null,1263,null,[null,13]],[null,1323,null,[null,180]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532744,[[1260,null,null,[1]],[null,1263,null,[null,11]],[null,1323,null,[null,350]],[1291,null,null,[1]],[1266,null,null,[1]]]],[42532745,[[1260,null,null,[1]],[null,1263,null,[null,10]],[null,1323,null,[null,420]],[1291,null,null,[1]],[1266,null,null,[1]]]]]],[null,[[42532746],[42532747],[42532748],[42532749],[42532750]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[200,[[44795921],[44795922,[[1222,null,null,[1]]]],[44798934,[[1222,null,null,[1]]]]]],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[10,[[95330276],[95330278,[[null,1336,null,[null,1]]]],[95330279,[[null,1336,null,[null,0.8]]]],[95332928,[[null,1336,null,[null,0.5]]]]]],[50,[[95331687,[[null,null,null,[null,null,null,[\"95331691\"]],null,null,null,630330362]]],[95331688,[[566279275,null,null,[1]],[null,null,null,[null,null,null,[\"95331692\"]],null,null,null,630330362]]],[95331689,[[566279276,null,null,[1]],[null,null,null,[null,null,null,[\"95331693\"]],null,null,null,630330362]]],[95331690,[[566279275,null,null,[1]],[566279276,null,null,[1]],[null,561668774,null,[]],[null,null,null,[null,null,null,[\"95331694\"]],null,null,null,630330362]]]],[4,null,55]],[50,[[95331832],[95331833,[[1342,null,null,[1]]]]]],[10,[[95332584],[95332585,[[null,1343,null,[null,600]]]],[95332586,[[null,1343,null,[null,900]]]],[95332587,[[null,1343,null,[null,1200]]]]]],[10,[[95332589],[95332590,[[1344,null,null,[1]]]]]],[10,[[95332923],[95332924,[[null,1338,null,[null,0.8]]]],[95332925,[[null,1339,null,[null,0.8]]]],[95332926,[[null,1340,null,[null,0.8]]]],[95332927,[[null,1340,null,[null,0.8]],[null,1338,null,[null,0.8]],[null,1339,null,[null,0.8]]]]]],[10,[[95333409],[95333410,[[null,1346,null,[null,-1]],[null,1347,null,[null,-1]]]],[95333411,[[null,1346,null,[null,3]],[null,1347,null,[null,1]]]],[95333412,[[null,1346,null,[null,8]],[null,1347,null,[null,5]]]]]],[399,[[95334516,[[null,null,null,[null,null,null,[\"95334518\"]],null,null,null,630330362]]],[95334517,[[626390500,null,null,[1]],[null,null,null,[null,null,null,[\"95334519\"]],null,null,null,630330362]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"bjsvp14\\\\.space\/|bjsvp15\\\\.space\/|buzzfun\\\\.me\/|buzzsight\\\\.co\/|couponpac\\\\.com\/|darada\\\\.co\/|diggfun\\\\.co\/|dreamsnest\\\\.com\/|games2kings\\\\.com\/|gegen-hartz\\\\.de\/|indiaimagine\\\\.com\/|pepigame\\\\.com\/|postfunny\\\\.com\/|testname\\\\.me\/|yashbharat\\\\.com\/\"]]]],[166,[[95334524,[[null,null,null,[null,null,null,[\"95334530\"]],null,null,null,630330362]]],[95334525,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_15\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334531\"]],null,null,null,630330362]]],[95334526,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_9\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334532\"]],null,null,null,630330362]]],[95334527,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_8\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334533\"]],null,null,null,630330362]]],[95334528,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_4\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334534\"]],null,null,null,630330362]]],[95334529,[[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"27_14\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"27_3\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"27\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334535\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]],[333,[[95334828,[[null,null,null,[null,null,null,[\"95334831\"]],null,null,null,630330362]]],[95334829,[[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"32_18\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"32_9\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334832\"]],null,null,null,630330362]]],[95334830,[[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"32_7\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"32_9\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"32\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95334833\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]],[10,[[95335245,[[null,null,null,[null,null,null,[\"95335250\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335246,[[626062008,null,null,[1]],[null,null,null,[null,null,null,[\"95335251\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335247,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95335252\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95335247\",\"95335252\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[10,[[95335248,[[null,null,null,[null,null,null,[\"95335253\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335249,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95335254\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95335249\",\"95335254\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95340662,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95340663\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95340662\",\"95340663\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[1,[[95336911,null,[4,null,8,null,null,null,null,[\"IntersectionObserver\"]]],[95336912,null,[4,null,8,null,null,null,null,[\"IntersectionObserver\"]]],[95336913,[[1361,null,null,[1]]],[4,null,8,null,null,null,null,[\"IntersectionObserver\"]]],[95336914,null,[4,null,8,null,null,null,null,[\"IntersectionObserver\"]]],[95336915,[[1361,null,null,[1]]],[4,null,8,null,null,null,null,[\"IntersectionObserver\"]]]]],[10,[[95337195],[95337196,[[1354,null,null,[1]]]]],null,126],[10,[[95337197,null,[12,null,null,null,2,null,\".+\\\\.h5games.usercontent.goog.*\"]],[95337198,[[1354,null,null,[1]]],[12,null,null,null,2,null,\".+\\\\.h5games.usercontent.goog.*\"]]],null,126],[10,[[95337496],[95337497,[[1356,null,null,[1]]]]]],[10,[[95337584],[95337585,[[1350,null,null,[1]]]]]],[10,[[95337586],[95337587]]],[333,[[95337868,[[null,null,null,[null,null,null,[\"95337871\"]],null,null,null,630330362]]],[95337869,[[null,null,null,[null,null,null,[\"29\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"29_18\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"29_5\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"29\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95337872\"]],null,null,null,630330362]]],[95337870,[[null,null,null,[null,null,null,[\"29\"]],null,null,null,627094447],[null,null,null,[null,null,null,[\"29_5\"]],null,null,null,636146137],[null,null,null,[null,null,null,[\"29\"]],null,null,null,627094446],[null,null,null,[null,null,null,[\"95337873\"]],null,null,null,630330362]]]],[2,[[4,null,55]]]],[10,[[95337874],[95337875]]],[100,[[95338226,[[null,null,null,[null,null,null,[\"95338230\"]],null,null,null,630330362]]],[95338227,[[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95338231\"]],null,null,null,630330362]]],[95338228,[[null,643258048,null,[null,0.41421]],[null,643258049,null,[null,0.44357]],[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95338232\"]],null,null,null,630330362]]],[95338229,[[null,643258048,null,[null,0.46927]],[null,643258049,null,[null,0.48129]],[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95338233\"]],null,null,null,630330362]]]],[4,null,55]],[10,[[95338242],[95338243,[[1318,null,null,[]]]]]],[10,[[95339860,[[null,null,null,[null,null,null,[\"95339862\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95339861,[[626062008,null,null,[1]],[655991266,null,null,[]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95339863\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95339861\",\"95339863\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[1,[[95340230,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95340232\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95340230\",\"95340232\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95340231,[[626062008,null,null,[1]],[626062007,null,null,[1]],[658722541,null,null,[]],[null,null,null,[null,null,null,[\"95340233\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95340231\",\"95340233\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[50,[[95340752,[[null,null,null,[null,null,null,[\"95340755\"]],null,null,null,630330362]]],[95340753,[[null,null,622128249,[null,null,\"#FFFFFF\"]],[null,null,622128250,[null,null,\"#1A73E8\"]],[622128248,null,null,[]],[636570127,null,null,[1]],[null,652486359,null,[null,1]],[null,null,null,[null,null,null,[\"95340756\"]],null,null,null,630330362]]],[95340754,[[622128248,null,null,[]],[636570127,null,null,[1]],[null,null,null,[null,null,null,[\"95340757\"]],null,null,null,630330362]]]],[4,null,55]]]],[17,[[10,[[31084487],[31084488]],null,null,null,null,32,null,null,142,1],[50,[[95338262,[[null,650548030,null,[null,4]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339245\"]],null,null,null,630330362]]],[95338263,[[null,508040914,null,[null,200]],[null,650548030,null,[null,4]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339246\"]],null,null,null,630330362]]],[95339220,[[null,null,null,[null,null,null,[\"95339234\"]],null,null,null,630330362]]],[95339221,[[null,650548030,null,[null,2]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339235\"]],null,null,null,630330362]]],[95339222,[[null,508040914,null,[null,200]],[null,650548030,null,[null,2]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339236\"]],null,null,null,630330362]]],[95339223,[[null,508040914,null,[null,300]],[null,650548030,null,[null,2]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339237\"]],null,null,null,630330362]]],[95339224,[[null,508040914,null,[null,400]],[null,650548030,null,[null,2]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339238\"]],null,null,null,630330362]]],[95339225,[[null,508040914,null,[null,500]],[null,650548030,null,[null,2]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339239\"]],null,null,null,630330362]]],[95339226,[[null,650548030,null,[null,3]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339240\"]],null,null,null,630330362]]],[95339227,[[null,508040914,null,[null,200]],[null,650548030,null,[null,3]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339241\"]],null,null,null,630330362]]],[95339228,[[null,508040914,null,[null,300]],[null,650548030,null,[null,3]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339242\"]],null,null,null,630330362]]],[95339229,[[null,508040914,null,[null,400]],[null,650548030,null,[null,3]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339243\"]],null,null,null,630330362]]],[95339230,[[null,508040914,null,[null,500]],[null,650548030,null,[null,3]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339244\"]],null,null,null,630330362]]],[95339231,[[null,508040914,null,[null,300]],[null,650548030,null,[null,4]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339247\"]],null,null,null,630330362]]],[95339232,[[null,508040914,null,[null,400]],[null,650548030,null,[null,4]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339248\"]],null,null,null,630330362]]],[95339233,[[null,508040914,null,[null,500]],[null,650548030,null,[null,4]],[null,650548031,null,[null,1]],[null,null,null,[null,null,null,[\"95339249\"]],null,null,null,630330362]]]],[4,null,55]]]],[11,[[100,[[31086139],[31086140],[31086141],[31086142]],null,122,null,null,null,null,null,null,null,null,null,4],[null,[[95339678],[95339679]],null,127,null,null,null,null,null,null,null,null,null,3],[50,[[95340284],[95340285,[[null,624290870,null,[]]]]],null,120]]]],null,null,[null,1000,1,1000]],[null,[null,[[[[null,0,null,null,null,null,\"DIV.dark-header-frame\\u003eDIV.container-fluid\\u003eDIV.slope3com.dark-header-content\"],4,[\"10px\",\"10px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"BODY\\u003eDIV.slope3com.container-fluid.play-game-box\"],1,[\"10px\",\"10px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"DIV.dark-header-content\"],4,[\"10px\",\"10px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"DIV.dark-panel-container\"],1,[\"10px\",\"10px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"DIV.dark-panel-body-content\"],4,[\"20px\",\"10px\",1],[2],null,null,null,1]],[[null,[1,3,2],null,\"6950634009\",null,null,[0,2],null,null,[0.5,null,1]]],[[[null,null,null,null,null,null,\"DIV.game-content\"],[null,null,null,null,null,null,\"P\"],null,[null,null,null,null,null,null,\"H2,H3,LI,P\"]],[[null,null,null,null,null,null,\"DIV.main-panel-content\"],[null,null,null,null,null,null,\"P,UL\"],null,[null,null,null,null,null,null,\"H1,H2,H3,IMG,LI,P\"]],[[null,0,null,null,null,null,\"DIV.main-panel-content\\u003eUL\"],[null,null,null,null,null,null,\"LI\"],null,[null,null,null,null,null,null,\"LI\"]],[[null,null,null,null,null,null,\"DIV.game-content\\u003eUL\"],[null,null,null,null,null,null,\"LI\"],null,[null,null,null,null,null,null,\"LI\"]],[[null,1,null,null,null,null,\"DIV.main-panel-content\\u003eUL\"],[null,null,null,null,null,null,\"LI\"],null,[null,null,null,null,null,null,\"LI\"]]]],[null,null,[1,2]]],1,null,null,null,null,null,\"ca-pub-4017755729799438\"],null,\"31086175\",1,\"slope3.com\",2065269139,[44759876,44759927,44759842]]");