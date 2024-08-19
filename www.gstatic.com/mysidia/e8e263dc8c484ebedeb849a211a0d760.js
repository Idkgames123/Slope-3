(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m = this || self;

    function aa(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = m, f = 0; f < c.length; f++)
                if (d = d[c[f]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    };

    function ba(a) {
        a = a.o;
        const b = encodeURIComponent;
        let c = "";
        a.platform && (c += "&uap=" + b(a.platform));
        a.platformVersion && (c += "&uapv=" + b(a.platformVersion));
        a.uaFullVersion && (c += "&uafv=" + b(a.uaFullVersion));
        a.architecture && (c += "&uaa=" + b(a.architecture));
        a.model && (c += "&uam=" + b(a.model));
        a.bitness && (c += "&uab=" + b(a.bitness));
        a.fullVersionList && (c += "&uafvl=" + b(a.fullVersionList.map(d => b(d.brand) + ";" + b(d.version)).join("|")));
        typeof a.wow64 !== "undefined" && (c += "&uaw=" + Number(a.wow64));
        return c
    }

    function ca(a, b) {
        return a.g ? a.m.slice(0, a.g.index) + b + a.m.slice(a.g.index) : a.m + b
    }

    function da(a, b = 0) {
        let c = "&act=1&ri=1";
        b == 1 && (c = "&act=1&ri=24");
        a.h && a.o && (c += ba(a));
        return ca(a, c)
    }

    function ea(a, b) {
        return a.h && a.i || a.l ? b == 1 ? a.h ? a.i : ca(a, "&dct=1") : b == 2 ? ca(a, "&ri=2") : ca(a, "&ri=16") : a.m
    }
    var fa = class {
        constructor({
            url: a,
            Y: b
        }) {
            this.m = a;
            this.o = b;
            b = /[?&]dsh=1(&|$)/.test(a);
            this.h = !b && /[?&]ae=1(&|$)/.test(a);
            this.l = !b && /[?&]ae=2(&|$)/.test(a);
            this.g = /[?&]adurl=([^&]*)/.exec(a);
            this.A = !b && /[?&]aspm=1(&|$)/.test(a);
            if (this.g && this.g[1]) {
                let c;
                try {
                    c = decodeURIComponent(this.g[1])
                } catch (d) {
                    c = null
                }
                this.i = c
            }
        }
    };

    function ha(a, b) {
        a: {
            const c = a.length,
                d = typeof a === "string" ? a.split("") : a;
            for (let f = 0; f < c; f++)
                if (f in d && b.call(void 0, d[f], f, a)) {
                    b = f;
                    break a
                }
            b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    };

    function ia(a) {
        let b = 0;
        for (const c in a) b++
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var q = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        ka = new q("about:invalid#zClosurez");
    class la {
        constructor(a) {
            this.fa = a
        }
    }

    function r(a) {
        return new la(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const ma = new la(a => /^[^:]*([/?#]|$)/.test(a));
    var na = r("http"),
        oa = r("https"),
        pa = r("ftp"),
        qa = r("mailto"),
        sa = r("intent"),
        ta = r("market"),
        ua = r("itms"),
        va = r("itms-appss");
    const wa = [r("data"), na, oa, qa, pa, ma];

    function xa(a, b = wa) {
        if (a instanceof q) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof la && d.fa(a)) return new q(a)
        }
    }

    function ya(a, b = wa) {
        return xa(a, b) || ka
    }
    var za = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Aa(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function Ba(a) {
        m.setTimeout(() => {
            throw a;
        }, 0)
    };
    var Ca = aa(610401301, !1),
        Da = aa(645172343, aa(1, !1));
    var Ea;
    const Fa = m.navigator;
    Ea = Fa ? Fa.userAgentData || null : null;

    function Ga(a) {
        return Ca ? Ea ? Ea.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function t(a) {
        var b;
        a: {
            if (b = m.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function v() {
        return Ca ? !!Ea && Ea.brands.length > 0 : !1
    }

    function Ha() {
        return v() ? Ga("Chromium") : (t("Chrome") || t("CriOS")) && !(v() ? 0 : t("Edge")) || t("Silk")
    };

    function Ia() {
        return t("iPhone") && !t("iPod") && !t("iPad")
    };

    function Ka(a) {
        Ka[" "](a);
        return a
    }
    Ka[" "] = function() {};
    var La = Ia(),
        Ma = t("iPad");
    var Na = Ia() || t("iPod"),
        Oa = t("iPad");
    !t("Android") || Ha();
    Ha();
    t("Safari") && (Ha() || (v() ? 0 : t("Coast")) || (v() ? 0 : t("Opera")) || (v() ? 0 : t("Edge")) || (v() ? Ga("Microsoft Edge") : t("Edg/")) || v() && Ga("Opera"));
    var Pa = {},
        Qa = null;
    let Ra;

    function Sa() {
        const a = Error();
        Aa(a, "incident");
        Ba(a)
    }

    function Ta(a) {
        a = Error(a);
        Aa(a, "warning");
        return a
    };

    function w(a) {
        return Array.prototype.slice.call(a)
    };
    var x = Symbol(),
        Ua = Symbol(),
        Va = Symbol();

    function y(a) {
        a[x] |= 34;
        return a
    }

    function Wa(a, b) {
        b[x] = (a | 0) & -14591
    }

    function Xa(a, b) {
        b[x] = (a | 34) & -14557
    };
    var Ya = {},
        Za = {};

    function $a(a) {
        return !(!a || typeof a !== "object" || a.ha !== Za)
    }

    function ab(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function bb(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[x] | 0) & 1 ? !0 : !1
    }
    var cb;
    const db = [];
    db[x] = 55;
    cb = Object.freeze(db);

    function eb(a) {
        if (a & 2) throw Error();
    }
    class fb {
        constructor(a, b, c) {
            this.i = 0;
            this.g = a;
            this.h = b;
            this.l = c
        }
        next() {
            if (this.i < this.g.length) {
                const a = this.g[this.i++];
                return {
                    done: !1,
                    value: this.h ? this.h.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new fb(this.g, this.h, this.l)
        }
    }
    var gb = Object.freeze({}),
        ib = Object.freeze({}),
        jb = Object.freeze({});

    function kb(a) {
        if (!Number.isFinite(a)) throw Ta("enum");
        return a | 0
    }

    function lb(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function B(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function nb(a, b, c, d) {
        if (a != null && typeof a === "object" && a.D === Ya) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? (a = b[Ua]) ? b = a : (a = new b, y(a.j), b = b[Ua] = a) : b = new b : b = void 0, b;
        let f = c = a[x] | 0;
        f === 0 && (f |= d & 32);
        f |= d & 2;
        f !== c && (a[x] = f);
        return new b(a)
    }

    function ob(a, b, c) {
        if (b) {
            if (typeof a !== "string") throw Error();
            return a
        }
        let d;
        return (d = B(a)) != null ? d : c ? "" : void 0
    };

    function pb(a) {
        var b = qb(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        if (rb === void 0)
            if (typeof Proxy !== "function") rb = null;
            else try {
                rb = Proxy.toString().indexOf("[native code]") !== -1 ? Proxy : null
            } catch (c) {
                rb = null
            }
        b = rb;
        if (!b) return a;
        b = new b(a, {
            set(c, d, f) {
                sb();
                c[d] = f;
                return !0
            }
        });
        wb(a, b);
        return b
    }

    function sb() {
        Sa()
    }
    let xb = void 0,
        yb = void 0;

    function qb(a) {
        let b;
        return (b = xb) == null ? void 0 : b.get(a)
    }

    function wb(a, b) {
        (xb || (xb = new WeakMap)).set(a, b);
        (yb || (yb = new WeakMap)).set(b, a)
    }
    let rb = void 0;
    let zb;
    const Ab = {},
        Bb = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function Cb(a) {
        return a
    }

    function Db(a) {
        if (a.s & 2) throw Error("Cannot mutate an immutable Map");
    }
    var D = class extends Bb {
        constructor(a, b, c = Cb, d = Cb) {
            super();
            let f = a[x] | 0;
            f |= 64;
            this.s = a[x] = f;
            this.B = b;
            this.v = c;
            this.J = this.B ? Eb : d;
            for (let e = 0; e < a.length; e++) {
                const h = a[e],
                    g = c(h[0], !1, !0);
                let k = h[1];
                b ? k === void 0 && (k = null) : k = d(h[1], !1, !0, void 0, void 0, f);
                super.set(g, k)
            }
        }
        X(a = Fb) {
            if (this.size !== 0) return this.G(a)
        }
        G(a = Fb) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            Db(this);
            super.clear()
        }
        delete(a) {
            Db(this);
            return super.delete(this.v(a, !0, !1))
        }
        entries() {
            var a = this.V();
            return new fb(a, Gb, this)
        }
        keys() {
            return this.ga()
        }
        values() {
            var a = this.V();
            return new fb(a, D.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            Db(this);
            a = this.v(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.J(b, !0, !0, this.B, !1, this.s))
        }
        has(a) {
            return super.has(this.v(a, !1, !1))
        }
        get(a) {
            a = this.v(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.B;
                return c ? (c = this.J(b, !1, !0, c, this.ea, this.s),
                    c !== b && super.set(a, c), c) : b
            }
        }
        V() {
            return Array.from(super.keys())
        }
        ga() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    D.prototype.toJSON = void 0;
    D.prototype.ha = Za;

    function Eb(a, b, c, d, f, e) {
        a = nb(a, d, c, e);
        f && (a = Hb(a));
        return a
    }

    function Fb(a) {
        return a
    }

    function Gb(a) {
        return [a, this.get(a)]
    }
    let Ib;

    function Jb() {
        return Ib || (Ib = new D(y([]), void 0, void 0, void 0, Ab))
    };

    function Kb(a, b) {
        return Lb(b)
    }

    function Lb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (bb(a)) return
                    } else {
                        if (a != null && a instanceof Uint8Array) {
                            let b = "",
                                c = 0;
                            const d = a.length - 10240;
                            for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                            return btoa(b)
                        }
                        if (a instanceof D) return a.X()
                    }
        }
        return a
    };

    function Mb(a, b, c) {
        a = w(a);
        var d = a.length;
        const f = b & 256 ? a[d - 1] : void 0;
        d += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (f) {
            b = a[b] = {};
            for (const e in f) b[e] = c(f[e])
        }
        return a
    }

    function Nb(a, b, c, d, f) {
        if (a != null) {
            if (Array.isArray(a)) a = bb(a) ? void 0 : f && (a[x] | 0) & 2 ? a : Ob(a, b, c, d !== void 0, f);
            else if (ab(a)) {
                const e = {};
                for (let h in a) e[h] = Nb(a[h], b, c, d, f);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Ob(a, b, c, d, f) {
        const e = d || c ? a[x] | 0 : 0;
        d = d ? !!(e & 32) : void 0;
        a = w(a);
        for (let h = 0; h < a.length; h++) a[h] = Nb(a[h], b, c, d, f);
        c && c(e, a);
        return a
    }

    function Pb(a) {
        return Nb(a, Qb, void 0, void 0, !1)
    }

    function Qb(a) {
        return a.D === Ya ? a.toJSON() : a instanceof D ? a.X(Pb) : Lb(a)
    };

    function Rb(a, b, c = Xa) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[x] = (d | 34) & -12293, a) : Ob(a, Rb, d & 4 ? Xa : c, !0, !0)
            }
            a.D === Ya ? (c = a.j, d = c[x], a = d & 2 ? a : Sb(a, c, d, !0)) : a instanceof D && !(a.s & 2) && (c = y(a.G(Rb)), a = new D(c, a.B, a.v, a.J));
            return a
        }
    }

    function Tb(a) {
        const b = a.j;
        return Sb(a, b, b[x], !1)
    }

    function Sb(a, b, c, d) {
        a = a.constructor;
        zb = b = Ub(b, c, d);
        b = new a(b);
        zb = void 0;
        return b
    }

    function Ub(a, b, c) {
        const d = c || b & 2 ? Xa : Wa,
            f = !!(b & 32);
        a = Mb(a, b, e => Rb(e, f, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function Hb(a) {
        const b = a.j,
            c = b[x];
        return c & 2 ? Sb(a, b, c, !1) : a
    };

    function E(a, b) {
        a = a.j;
        return F(a, a[x], b)
    }

    function Vb(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function F(a, b, c, d) {
        if (c === -1) return null;
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], d != null)) {
                if (Vb(a, b, f, c) && Va != null) {
                    var h;
                    a = (h = Ra) != null ? h : Ra = {};
                    h = a[Va] || 0;
                    h >= 4 || (a[Va] = h + 1, Sa())
                }
                return d
            }
            return Vb(a, b, f, c)
        }
    }

    function Wb(a, b, c) {
        const d = a.j;
        let f = d[x];
        eb(f);
        G(d, f, b, c);
        return a
    }

    function G(a, b, c, d, f) {
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e || f && !Da) {
            let h = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (d == null) return h;
                f = a[e + (+!!(b & 512) - 1)] = {};
                h |= 256
            }
            f[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            h !== b && (a[x] = h);
            return h
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function H(a, b, c) {
        return Xb(a, b, c) !== void 0
    }

    function Yb(a, b, c) {
        a = F(a, b, c);
        return Array.isArray(a) ? a : cb
    }

    function Zb(a, b) {
        a === 0 && (a = I(a, b));
        return a | 1
    }

    function J(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function $b(a, b, c, d, f, e) {
        const h = b & 2;
        a: {
            var g = c,
                k = b & 2;c = !1;
            if (g == null) {
                if (k) {
                    a = Jb();
                    break a
                }
                g = []
            } else if (g.constructor === D) {
                if ((g.s & 2) == 0 || k) {
                    a = g;
                    break a
                }
                g = g.G()
            } else Array.isArray(g) ? c = !!((g[x] | 0) & 2) : g = [];
            if (k) {
                if (!g.length) {
                    a = Jb();
                    break a
                }
                c || (c = !0, y(g))
            } else if (c) {
                c = !1;
                k = w(g);
                for (g = 0; g < k.length; g++) {
                    const l = k[g] = w(k[g]);
                    Array.isArray(l[1]) && (l[1] = y(l[1]))
                }
                g = k
            }
            c || ((g[x] | 0) & 64 ? g[x] &= -33 : 32 & b && (g[x] |= 32));e = new D(g, f, ob, e);G(a, b, d, e, !1);a = e
        }!h && f && (a.ea = !0);
        return a
    }

    function ac(a, b) {
        a = a.j;
        const c = a[x];
        return $b(a, c, F(a, c, b), b, void 0, ob)
    }

    function bc(a) {
        var b = cc;
        a = a.j;
        const c = a[x];
        return $b(a, c, F(a, c, 1), 1, b)
    }

    function Xb(a, b, c) {
        a = a.j;
        let d = a[x];
        const f = F(a, d, c, !1);
        b = nb(f, b, !1, d);
        b !== f && b != null && G(a, d, c, b, !1);
        return b
    }

    function K(a, b, c) {
        b = Xb(a, b, c);
        if (b == null) return b;
        a = a.j;
        let d = a[x];
        if (!(d & 2)) {
            const f = Hb(b);
            f !== b && (b = f, G(a, d, c, b, !1))
        }
        return b
    }

    function I(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function dc(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function N(a, b) {
        return a != null ? a : b
    }

    function ec(a, b) {
        a = E(a, b);
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function O(a, b, c = !1) {
        a = E(a, b);
        return N(a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0, c)
    }

    function P(a, b) {
        return N(B(E(a, b)), "")
    }

    function Q(a, b, c = 0) {
        return N(ec(a, b), c)
    }

    function fc(a, b) {
        var c = void 0 === gb ? 2 : 4;
        const d = a.j;
        a = d[x];
        const f = 2 & a ? 1 : c;
        c = Yb(d, a, b);
        var e = c[x] | 0;
        if (!(4 & e)) {
            if (4 & e || Object.isFrozen(c)) c = w(c), e = I(e, a), a = G(d, a, b, c);
            var h = 0;
            let k = 0;
            for (; h < c.length; h++) {
                const l = B(c[h]);
                l != null && (c[k++] = l)
            }
            k < h && (c.length = k);
            e = Zb(e, a);
            e = (e | 20) & -4097;
            e &= -8193;
            c[x] = e;
            2 & e && Object.freeze(c)
        }
        let g;
        f === 1 || f === 4 && 32 & e ? J(e) || (b = e, e |= 2, e !== b && (c[x] = e), Object.freeze(c)) : (h = f !== 5 ? !1 : !!(32 & e) || J(e) || !!qb(c), (f === 2 || h) && J(e) && (c = w(c), e = I(e, a), e = dc(e, a, !1), c[x] = e, a = G(d, a, b, c)), J(e) ||
            (b = e, e = dc(e, a, !1), e !== b && (c[x] = e)), h && (g = pb(c)));
        return g || c
    }

    function gc(a, b, c) {
        if (c != null && typeof c !== "boolean") throw a = typeof c, Error(`Expected boolean but got ${a!="object"?a:c?Array.isArray(c)?"array":a:"null"}: ${c}`);
        return Wb(a, b, c)
    }

    function hc(a, b, c) {
        if (c != null) {
            if (typeof c !== "number") throw Ta("int32");
            if (!Number.isFinite(c)) throw Ta("int32");
            c |= 0
        }
        Wb(a, b, c)
    }

    function R(a, b, c) {
        if (c != null && typeof c !== "string") throw Error();
        return Wb(a, b, c)
    }

    function ic(a, b, c) {
        Wb(a, b, c == null ? c : kb(c))
    };
    let S;

    function jc(a) {
        try {
            return S = !0, JSON.stringify(kc(a), Kb)
        } finally {
            S = !1
        }
    }
    var T = class {
        constructor(a) {
            a: {
                a == null && (a = zb);zb = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[x] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, ab(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[x] = b
            }
            this.j = a
        }
        toJSON() {
            return kc(this)
        }
    };
    T.prototype.D = Ya;
    T.prototype.toString = function() {
        try {
            return S = !0, kc(this).toString()
        } finally {
            S = !1
        }
    };

    function kc(a) {
        a = S ? a.j : Ob(a.j, Qb, void 0, void 0, !1); {
            var b = !S;
            let l = a.length;
            if (l) {
                var c = a[l - 1],
                    d = ab(c);
                d ? l-- : c = void 0;
                var f = a;
                if (d) {
                    b: {
                        var e = c;
                        var h = {};d = !1;
                        if (e)
                            for (var g in e) {
                                if (isNaN(+g)) {
                                    h[g] = e[g];
                                    continue
                                }
                                let n = e[g];
                                Array.isArray(n) && (bb(n) || $a(n) && n.size === 0) && (n = null);
                                n == null && (d = !0);
                                n != null && (h[g] = n)
                            }
                        if (d) {
                            for (let n in h) break b;
                            h = null
                        } else h = e
                    }
                    e = h == null ? c != null : h !== c
                }
                for (; l > 0; l--) {
                    g = f[l - 1];
                    if (!(g == null || bb(g) || $a(g) && g.size === 0)) break;
                    var k = !0
                }
                if (f !== a || e || k) {
                    if (!b) f = Array.prototype.slice.call(f,
                        0, l);
                    else if (k || e || h) f.length = l;
                    h && f.push(h)
                }
                k = f
            } else k = a
        }
        return k
    };
    var lc = class extends T {};
    var mc = class extends T {
        constructor() {
            super()
        }
    };
    var nc = class extends T {};
    var oc = class extends T {};
    var pc = class extends T {
        u() {
            return P(this, 3)
        }
        W(a) {
            gc(this, 5, a)
        }
    };
    var U = class extends T {
        u() {
            return P(this, 1)
        }
        W(a) {
            gc(this, 2, a)
        }
    };
    var qc = class extends T {};

    function rc(a) {
        var b = a.j,
            c = b[x];
        a = c;
        var d = !(2 & c),
            f = void 0 === gb ? 2 : 4;
        f = (c = !!(2 & a)) ? 1 : f;
        d && (d = !c);
        c = Yb(b, a, 7);
        var e = c[x] | 0,
            h = !!(4 & e);
        if (!h) {
            e = Zb(e, a);
            var g = c,
                k = a,
                l = !!(2 & e);
            l && (k |= 2);
            let p = !l,
                u = !0,
                z = 0,
                A = 0;
            for (; z < g.length; z++) {
                const C = nb(g[z], pc, !1, k);
                if (C instanceof pc) {
                    if (!l) {
                        const Y = !!((C.j[x] | 0) & 2);
                        p && (p = !Y);
                        u && (u = Y)
                    }
                    g[A++] = C
                }
            }
            A < z && (g.length = A);
            e |= 4;
            e = u ? e | 16 : e & -17;
            e = p ? e | 8 : e & -9;
            g[x] = e;
            l && Object.freeze(g)
        }
        if (d && !(8 & e || !c.length && (f === 1 || f === 4 && 32 & e))) {
            J(e) && (c = w(c), e = I(e, a), a = G(b, a, 7, c));
            d = c;
            g = e;
            for (e =
                0; e < d.length; e++) k = d[e], l = Hb(k), k !== l && (d[e] = l);
            g |= 8;
            g = d.length ? g & -17 : g | 16;
            e = d[x] = g
        }
        let n;
        f === 1 || f === 4 && 32 & e ? J(e) || (a = e, e |= !c.length || 16 & e && (!h || 32 & e) ? 2 : 2048, e !== a && (c[x] = e), Object.freeze(c)) : (h = f !== 5 ? !1 : !!(32 & e) || J(e) || !!qb(c), (f === 2 || h) && J(e) && (c = w(c), e = I(e, a), e = dc(e, a, !1), c[x] = e, a = G(b, a, 7, c)), J(e) || (b = e, e = dc(e, a, !1), e !== b && (c[x] = e)), h && (n = pb(c)));
        return n || c
    }
    var cc = class extends T {};
    var sc = class extends T {};
    var tc = class extends T {};
    var uc = class extends T {
        constructor() {
            super()
        }
    };

    function vc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var wc = {
            capture: !0
        },
        xc = {
            passive: !0
        },
        yc = vc(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                m.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function zc(a) {
        return a ? a.passive && yc() ? a : a.capture || !1 : !1
    }

    function V(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, zc(d))
    };

    function Ac(a, b) {
        if (b instanceof q)
            if (b instanceof q) b = b.g;
            else throw Error("");
        else b = za.test(b) ? b : void 0;
        a.href = b === void 0 ? ka.toString() : b
    };
    var Bc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Cc(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Cc(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    }

    function Dc(a, b, c, d) {
        for (var f = c.length;
            (b = a.indexOf(c, b)) >= 0 && b < d;) {
            var e = a.charCodeAt(b - 1);
            if (e == 38 || e == 63)
                if (e = a.charCodeAt(b + f), !e || e == 61 || e == 38 || e == 35) return b;
            b += f + 1
        }
        return -1
    }
    var Ec = /#|$/;

    function Fc(a, b) {
        var c = a.search(Ec),
            d = Dc(a, 0, b, c);
        if (d < 0) return null;
        var f = a.indexOf("&", d);
        if (f < 0 || f > c) f = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, f !== -1 ? f : 0).replace(/\+/g, " "))
    }
    var Gc = /[?&]($|#)/;

    function Hc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var Ic = a => {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    let Jc = [];
    const Kc = () => {
        const a = Jc;
        Jc = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var Pc = a => {
            Jc.push(a);
            Jc.length == 1 && (window.Promise ? Promise.resolve().then(Kc) : window.setImmediate ? setImmediate(Kc) : setTimeout(Kc, 0))
        },
        Qc = a => {
            var b = W;
            b.readyState === "complete" || b.readyState === "interactive" ? Pc(a) : b.addEventListener("DOMContentLoaded", a)
        },
        Rc = a => {
            var b = window;
            b.document.readyState === "complete" ? Pc(a) : b.addEventListener("load", a)
        };

    function Sc(a = document) {
        return a.createElement("img")
    };

    function Tc(a, b, c = null, d = !1) {
        Uc(a, b, c, d)
    }

    function Uc(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Sc(a.document);
        if (c || d) {
            const e = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const g = Array.prototype.indexOf.call(h, f, void 0);
                    g >= 0 && Array.prototype.splice.call(h, g, 1)
                }
                f.removeEventListener && f.removeEventListener("load", e, zc());
                f.removeEventListener && f.removeEventListener("error", e, zc())
            };
            V(f, "load", e);
            V(f, "error", e)
        }
        f.src = b;
        a.google_image_requests.push(f)
    };
    let Vc = 0;

    function Wc(a) {
        return (a = Xc(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function Xc(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function Yc(a) {
        if (!(Math.random() > .01)) {
            var b = Xc(a, document.currentScript);
            a = `https://${b&&b.getAttribute("data-jc-rcd")==="true"?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${Wc(a)}&sample=${.01}`;
            b = window;
            var c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : Tc(b, a, void 0, !1)
        }
    };
    var W = document,
        Zc = window;
    const $c = [na, oa, qa, pa, ma, ta, ua, sa, va];

    function ad(a, b) {
        if (a instanceof q) return a;
        const c = ya(a, $c);
        c === ka && b(a);
        return c
    }

    function bd(a) {
        var b = `${Zc.location.protocol==="http:"?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return c => {
            c = {
                id: "unsafeurl",
                ctx: a,
                url: c
            };
            var d = [];
            for (f in c) Cc(f, c[f], d);
            var f = d.join("&");
            if (f) {
                c = b.indexOf("#");
                c < 0 && (c = b.length);
                d = b.indexOf("?");
                if (d < 0 || d > c) {
                    d = c;
                    var e = ""
                } else e = b.substring(d + 1, c);
                c = [b.slice(0, d), e, b.slice(c)];
                d = c[1];
                c[1] = f ? d ? d + "&" + f : f : d;
                f = c[0] + (c[1] ? "?" + c[1] : "") + c[2]
            } else f = b;
            navigator.sendBeacon && navigator.sendBeacon(f, "")
        }
    };
    var cd = a => {
        var b = W;
        try {
            return b.querySelectorAll("*[" + a + "]")
        } catch (c) {
            return []
        }
    };
    var dd = class {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const ed = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var fd = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        gd = class {
            constructor(a, b) {
                this.url = a;
                this.U = !!b;
                this.depth = null
            }
        };
    let hd = null;

    function id() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function jd() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    var kd = class {
        constructor(a, b) {
            var c = jd() || id();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const X = m.performance,
        ld = !!(X && X.mark && X.measure && X.clearMarks),
        md = vc(() => {
            var a;
            if (a = ld) {
                var b;
                if (hd === null) {
                    hd = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (hd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = hd;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function nd(a) {
        a && X && md() && (X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class od {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = md() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new kd(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            X && md() && X.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (jd() || id()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                X && md() && X.mark(b);
                !this.g ||
                    this.h.length > 2048 || this.h.push(a)
            }
        }
    };

    function pd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function qd(a, b, c, d, f) {
        const e = [];
        Hc(a, function(h, g) {
            (h = rd(h, b, c, d, f)) && e.push(g + "=" + h)
        });
        return e.join(b)
    }

    function rd(a, b, c, d, f) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const e = [];
                for (let h = 0; h < a.length; h++) e.push(rd(a[h], b, c, d + 1, f));
                return e.join(c[d])
            }
        } else if (typeof a == "object") return f = f || 0, f < 2 ? encodeURIComponent(qd(a, b, c, d, f + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function sd(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function td(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = sd(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(e, h) {
            return e - h
        });
        b = null;
        let f = "";
        for (let e = 0; e < a.g.length; e++) {
            const h = a.g[e],
                g = a.h[h];
            for (let k = 0; k < g.length; k++) {
                if (!d) {
                    b = b == null ? h : b;
                    break
                }
                let l = qd(g[k], a.i, ",$");
                if (l) {
                    l = f + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        f = a.i;
                        break
                    }
                    b = b == null ? h : b
                }
            }
        }
        a = "";
        b != null && (a = f + "trn=" + b);
        return c + a
    }
    class ud {
        constructor() {
            this.i = "&";
            this.h = {};
            this.l = 0;
            this.g = []
        }
    };

    function vd(a) {
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

    function wd(a, b, c) {
        let d, f;
        try {
            a.g && a.g.g ? (f = a.g.start(b.toString(), 3), d = c(), a.g.end(f)) : d = c()
        } catch (e) {
            c = !0;
            try {
                nd(f), c = a.m(b, new dd(e, {
                    message: vd(e)
                }), void 0, void 0)
            } catch (h) {
                a.l(217, h)
            }
            if (c) {
                let h, g;
                (h = window.console) == null || (g = h.error) == null || g.call(h, e)
            } else throw e;
        }
        return d
    }

    function xd(a, b) {
        var c = yd;
        return (...d) => wd(c, a, () => b.apply(void 0, d))
    }
    var Bd = class {
        constructor(a = null) {
            this.pinger = zd;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.l
        }
        l(a, b, c, d, f) {
            f = f || "jserror";
            let e;
            try {
                const M = new ud;
                var h = M;
                h.g.push(1);
                h.h[1] = pd("context", a);
                b.error && b.meta && b.id || (b = new dd(b, {
                    message: vd(b)
                }));
                if (b.msg) {
                    h = M;
                    var g = b.msg.substring(0, 512);
                    h.g.push(2);
                    h.h[2] = pd("msg", g)
                }
                var k = b.meta || {};
                b = k;
                if (this.h) try {
                    this.h(b)
                } catch (L) {}
                if (d) try {
                    d(b)
                } catch (L) {}
                d = M;
                k = [k];
                d.g.push(3);
                d.h[3] = k;
                d = m;
                k = [];
                let Ja;
                b = null;
                do {
                    var l = d;
                    try {
                        var n;
                        if (n = !!l && l.location.href != null) b: {
                            try {
                                Ka(l.foo);
                                n = !0;
                                break b
                            } catch (L) {}
                            n = !1
                        }
                        var p = n
                    } catch (L) {
                        p = !1
                    }
                    p ? (Ja = l.location.href, b = l.document && l.document.referrer || null) : (Ja = b, b = null);
                    k.push(new gd(Ja || ""));
                    try {
                        d = l.parent
                    } catch (L) {
                        d = null
                    }
                } while (d && l != d);
                for (let L = 0, Lc = k.length - 1; L <= Lc; ++L) k[L].depth = Lc - L;
                l = m;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (p = 1; p < k.length; ++p) {
                        var u = k[p];
                        u.url || (u.url = l.location.ancestorOrigins[p - 1] || "", u.U = !0)
                    }
                var z = k;
                let tb = new gd(m.location.href, !1);
                l = null;
                const ub = z.length -
                    1;
                for (u = ub; u >= 0; --u) {
                    var A = z[u];
                    !l && ed.test(A.url) && (l = A);
                    if (A.url && !A.U) {
                        tb = A;
                        break
                    }
                }
                A = null;
                const Zd = z.length && z[ub].url;
                tb.depth != 0 && Zd && (A = z[ub]);
                e = new fd(tb, A);
                if (e.h) {
                    z = M;
                    var C = e.h.url || "";
                    z.g.push(4);
                    z.h[4] = pd("top", C)
                }
                var Y = {
                    url: e.g.url || ""
                };
                if (e.g.url) {
                    var vb = e.g.url.match(Bc),
                        ra = vb[1],
                        Mc = vb[3],
                        Nc = vb[4];
                    C = "";
                    ra && (C += ra + ":");
                    Mc && (C += "//", C += Mc, Nc && (C += ":" + Nc));
                    var Oc = C
                } else Oc = "";
                ra = M;
                Y = [Y, {
                    url: Oc
                }];
                ra.g.push(5);
                ra.h[5] = Y;
                Ad(this.pinger, f, M, this.i, c)
            } catch (M) {
                try {
                    Ad(this.pinger, f, {
                        context: "ecmserr",
                        rctx: a,
                        msg: vd(M),
                        url: e && e.g.url
                    }, this.i, c)
                } catch (Ja) {}
            }
            return !0
        }
    };
    class Cd {};

    function Ad(a, b, c, d = !1, f) {
        if ((d ? a.g : Math.random()) < (f || .01)) try {
            let e;
            c instanceof ud ? e = c : (e = new ud, Hc(c, (g, k) => {
                var l = e;
                const n = l.l++;
                g = pd(k, g);
                l.g.push(n);
                l.h[n] = g
            }));
            const h = td(e, "/pagead/gen_204?id=" + b + "&");
            h && Tc(m, h)
        } catch (e) {}
    }

    function Dd() {
        var a = zd,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Ed {
        constructor() {
            this.g = Math.random()
        }
    };
    let zd, yd;
    const Z = new od;
    var Fd = () => {
        window.google_measure_js_timing || (Z.g = !1, Z.h != Z.i.google_js_reporting_queue && (md() && Array.prototype.forEach.call(Z.h, nd, void 0), Z.h.length = 0))
    };
    (a => {
        zd = a != null ? a : new Ed;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Dd();
        yd = new Bd(Z);
        yd.h = b => {
            const c = Vc;
            c !== 0 && (b.jc = String(c), b.shv = Wc(c))
        };
        yd.i = !0;
        window.document.readyState == "complete" ? Fd() : Z.g && V(window, "load", () => {
            Fd()
        })
    })();
    var Gd = (a, b) => xd(a, b),
        Hd = (a, b) => {
            var c = Cd;
            var d = "T";
            c.T && c.hasOwnProperty(d) || (d = new c, c.T = d);
            c = [];
            !b.eid && c.length && (b.eid = c.toString());
            Ad(zd, a, b, !0)
        };

    function Id(a = window) {
        return a
    };
    ia({
        ta: 0,
        sa: 1,
        pa: 2,
        ka: 3,
        qa: 4,
        la: 5,
        ra: 6,
        na: 7,
        oa: 8,
        ia: 9,
        ma: 10,
        ua: 11
    });
    ia({
        wa: 0,
        xa: 1,
        va: 2
    });

    function Jd(a) {
        var b = new Kd,
            c = b.j;
        const d = c[x] | 0;
        eb(b.j[x]);
        var f = d & 2;
        b = F(c, d, 1, !1);
        Array.isArray(b) || (b = cb);
        const e = !!(d & 32);
        let h = b[x] | 0;
        h === 0 && e && !f ? (h |= 33, b[x] = h) : h & 1 || (h |= 1, b[x] = h);
        if (f) h & 2 || y(b), Object.freeze(b);
        else if (2 & h || 2048 & h) b = w(b), f = 1, e && (f |= 32), b[x] = f, G(c, d, 1, b, !1);
        c = b;
        if (Array.isArray(a))
            for (var g = 0; g < a.length; g++) c.push(kb(a[g]));
        else
            for (g of a) c.push(kb(g))
    }
    var Kd = class extends T {
        constructor() {
            super()
        }
    };
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    Jd([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16, 19, 20, 21]);
    Jd([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 18, 19, 20, 21]);
    Jd([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 17, 18, 19, 20, 21]);
    new Kd;
    var Ld = (a, b) => {
            b = P(a, 2) || b;
            if (!b) return "";
            if (O(a, 13)) return b;
            const c = /[?&]adurl=([^&]+)/.exec(b);
            if (!c) return b;
            const d = [b.slice(0, c.index + 1)];
            ac(a, 4).forEach((f, e) => {
                d.push(encodeURIComponent(e) + "=" + encodeURIComponent(f) + "&")
            });
            d.push(b.slice(c.index + 1));
            return d.join("")
        },
        Md = (a, b = []) => {
            b = b.length > 0 ? b : cd("data-asoch-targets");
            a = bc(a);
            const c = [];
            for (let g = 0; g < b.length; ++g) {
                var d = b[g].getAttribute("data-asoch-targets"),
                    f = d.split(","),
                    e = !0;
                for (let k of f)
                    if (!a.has(k)) {
                        e = !1;
                        break
                    }
                if (e) {
                    e = a.get(f[0]);
                    for (d = 1; d < f.length; ++d) {
                        var h = a.get(f[d]);
                        e = kc(Tb(e));
                        h = kc(h);
                        const k = Math.max(e.length, h.length);
                        for (let l = 0; l < k; ++l) e[l] == null && (e[l] = h[l]);
                        e = new cc(e)
                    }
                    f = ac(e, 4);
                    ec(e, 5) != null && f.set("nb", Q(e, 5, 0).toString());
                    c.push({
                        element: b[g],
                        data: e
                    })
                } else Hd("gdn-asoch", {
                    type: 1,
                    data: d
                })
            }
            return c
        },
        Pd = (a, b, c, d) => {
            c = Ld(b, c);
            if (c.length !== 0) {
                var f = d === 609;
                if (Fc(c, "ase") === "2" && d !== 1087) {
                    var e;
                    const h = !((e = W.featurePolicy) == null || !e.allowedFeatures().includes("attribution-reporting"));
                    e = f ? 4 : h ? 6 : 5;
                    let g = "";
                    f || h &&
                        !Nd(c) ? (c = Od(c, "nis", e.toString()), a.setAttribute("attributionsrc", g)) : h && Nd(c) && (g = Od(da(new fa({
                            url: c
                        })), "nis", e.toString()), a.setAttribute("attributionsrc", g))
                }
                f && H(b, lc, 24) && (f = K(b, lc, 24), a.setAttribute("attributionDestination", P(f, 2)), a.setAttribute("attributionSourceNonce", P(f, 1)));
                Ac(a, ad(c, bd(d)));
                a.target || (a.target = B(E(b, 11)) != null ? P(b, 11) : "_top")
            }
        },
        Qd = a => {
            for (const b of a)
                if (a = b.data, b.element.tagName == "A" && !O(a, 1)) {
                    const c = b.element;
                    Pd(c, a, c.href, 609)
                }
        },
        Rd = (a, b, c) => {
            b = encodeURIComponent(b);
            const d = encodeURIComponent(c);
            c = new RegExp("[?&]" + b + "=([^&]+)");
            const f = c.exec(a);
            b = b + "=" + d;
            return f ? a.replace(c, f[0].charAt(0) + b) : a.replace("?", "?" + b + "&")
        },
        Nd = a => !/[?&]dsh=1(&|$)/.test(a) && /[?&]ae=1(&|$)/.test(a),
        Sd = a => {
            const b = m.oneAfmaInstance;
            if (b)
                for (const c of a)
                    if ((a = c.data) && H(a, qc, 8)) {
                        const d = P(K(a, qc, 8), 4);
                        if (d) {
                            b.fetchAppStoreOverlay(d, void 0, P(K(a, qc, 8), 6));
                            break
                        }
                    }
        },
        Td = (a, b = 500) => {
            const c = [],
                d = [];
            for (var f of a)(a = f.data) && H(a, U, 12) && (d.push(K(a, U, 12)), c.push(K(a, U, 12).u()));
            f = (e, h) => {
                if (h)
                    for (const g of d) h[g.u()] && g.W(!0)
            };
            a = m.oneAfmaInstance;
            for (const e of c) {
                let h;
                (h = a) == null || h.canOpenAndroidApp(e, f, () => {}, b)
            }
        },
        Vd = (a, b, c, d) => {
            if (!b || !H(b, qc, 8)) return !1;
            const f = K(b, qc, 8);
            let e = P(f, 2);
            ac(b, 10).forEach((g, k) => {
                e = Rd(e, k, g)
            });
            Ud(b) && O(b, 15) && !/[?&]label=/.test(c) && (c = Od(c, "label", "deep_link_fallback"));
            const h = g => d.openStoreOverlay(g, void 0, P(f, 6));
            return d.redirectForStoreU2({
                clickUrl: c,
                trackingUrl: P(f, 3),
                finalUrl: e,
                pingFunc: O(b, 13) ? d.httpTrack : d.click,
                openFunc: (a == null ? 0 : O(a,
                    1)) ? h : d.openIntentOrNativeApp,
                isExternalClickUrl: O(b, 13)
            })
        },
        Wd = (a, b, c, d) => {
            c && c.startsWith("intent:") ? d.openIntentOrNativeApp(c) : a ? b ? d.openBrowser(c) : d.openChromeCustomTab(c) : d.openSystemBrowser(c, {
                useFirstPackage: !0,
                useRunningProcess: !0
            })
        },
        Yd = (a, b, c, d, f, e, h, g = !1, k = !1) => {
            const l = O(f, 15);
            if (!k && l && B(E(f, 22)) != null) Wd(c, d, P(f, 22), h);
            else {
                var n = Nd(e);
                if (a && b && (!l || !n && !k) && (e = Xd(e, h.click, !0), g && (f == null ? 0 : O(f, 21, !1)))) return;
                Wd(c, d, e, h)
            }
        },
        Xd = (a, b = null, c = !1) => {
            if (b !== null) {
                const f = new fa({
                    url: a
                });
                if (f.h &&
                    f.i || f.l) {
                    if (f.l && c) {
                        a = da(f);
                        var d = encodeURIComponent("ase");
                        c = encodeURIComponent("3");
                        d = new RegExp("[?&]" + d + "=([^&]+)", "g");
                        let e = 0;
                        const h = [];
                        for (let g = d.exec(a); g !== null;) {
                            if (g[1] == c) {
                                let k = g[0].charAt(0) == "?" ? 1 : 0;
                                h.push(a.slice(e, g.index + k));
                                e = g.index + g[0].length + k
                            }
                            g = d.exec(a)
                        }
                        h.push(a.slice(e));
                        b(h.join(""))
                    } else b(da(f));
                    return ea(f, 1)
                }
            } else return {
                    Y: b
                } = {}, b = new fa({
                    url: a,
                    Y: b
                }), b.h && b.i || b.l ? b.A ? (fetch(da(b, 1), {
                    method: "GET",
                    keepalive: !0,
                    mode: "no-cors",
                    redirect: "follow"
                }), b = ea(b, 1)) : b = navigator.sendBeacon ?
                navigator.sendBeacon(da(b, 0), "") ? ea(b, 1) : ea(b, 2) : ea(b, 0) : b = a, b;
            return a
        },
        $d = (a, b = !0) => {
            b && Zc.fetch ? Zc.fetch(a, {
                method: "GET",
                keepalive: !0,
                mode: "no-cors"
            }).then(c => {
                c.ok || Tc(Zc, a)
            }) : Tc(Zc, a)
        },
        Od = (a, b, c) => {
            b = encodeURIComponent(String(b));
            c = encodeURIComponent(String(c));
            return a.replace("?", "?" + b + "=" + c + "&")
        },
        Ud = a => {
            for (const b of rc(a))
                if (Q(b, 1, 0) === 3 && P(b, 2)) return !0;
            return !1
        };
    var ae = (a, b) => a && (a = a.match(b + "=([^&]+)")) && a.length == 2 ? a[1] : "";
    var be = class extends T {
        constructor() {
            super()
        }
    };

    function ce(a, b) {
        return R(a, 2, b)
    }

    function de(a, b) {
        return R(a, 3, b)
    }

    function ee(a, b) {
        return R(a, 4, b)
    }

    function fe(a, b) {
        return R(a, 5, b)
    }

    function ge(a, b) {
        return R(a, 9, b)
    }

    function he(a, b) {
        {
            const n = a.j;
            let p = n[x];
            eb(p);
            if (b == null) G(n, p, 10);
            else {
                var c = b,
                    d;
                b = ((d = yb) == null ? void 0 : d.get(c)) || c;
                c = d = b[x] | 0;
                var f = !!(2 & d) || !!(2048 & d),
                    e = f || Object.isFrozen(b),
                    h;
                if (h = !e) h = void 0 === jb || void 0 !== ib;
                var g = !0,
                    k = !0;
                for (let u = 0; u < b.length; u++) {
                    var l = b[u];
                    f || (l = !!((l.j[x] | 0) & 2), g && (g = !l), k && (k = l))
                }
                f || (d |= 5, d = g ? d | 8 : d & -9, d = k ? d | 16 : d & -17);
                if (h || e && d !== c) b = w(b), c = 0, d = I(d, p), d = dc(d, p, !0);
                d !== c && (b[x] = d);
                G(n, p, 10, b)
            }
        }
        return a
    }

    function ie(a, b) {
        return gc(a, 11, b)
    }

    function je(a, b) {
        return R(a, 1, b)
    }

    function ke(a, b) {
        return gc(a, 7, b)
    }
    var le = class extends T {
        constructor() {
            super()
        }
    };
    const me = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function ne(a) {
        let b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function oe(a) {
        let b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function pe() {
        var a = window;
        if (!oe(a)) return null;
        const b = ne(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(me).then(c => {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function qe(a) {
        let b;
        return ie(he(fe(ce(je(ee(ke(ge(de(new le, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(c => {
            var d = new be;
            d = R(d, 1, c.brand);
            return R(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function re() {
        let a, b;
        return (b = (a = pe()) == null ? void 0 : a.then(c => qe(c))) != null ? b : null
    };

    function se(a) {
        for (const b of a)
            if (b.element.tagName == "A") {
                a = b.element;
                const c = b.data;
                B(E(c, 2)) == null && R(c, 2, a.href)
            }
    }

    function te(a, b) {
        return ha(a, c => c.element === b)
    }

    function ue(a) {
        Qc(Gd(556, () => {
            new ve(a || {})
        }))
    }

    function we(a, b) {
        if (!b.defaultPrevented || a.H === b) {
            for (var c, d, f = b.target;
                (!c || !d) && f;) {
                d || f.tagName != "A" || (d = f);
                var e = f.hasAttribute("data-asoch-targets"),
                    h = f.hasAttribute("data-asoch-fixed-value");
                if (!c)
                    if (h) c = new cc(JSON.parse(f.getAttribute("data-asoch-fixed-value")) || []);
                    else if (f.tagName == "A" || e)
                    if (e = e && f.getAttribute("data-asoch-is-dynamic") === "true" ? Md(a.h, [f]) : a.g, e = te(e, f)) c = e.data;
                f = f.parentElement
            }
            f = c && !O(c, 1);
            if (a.C && a.l && b.defaultPrevented) xe(a, b, d, f ? c : a.l);
            else {
                if (f) {
                    if (!a.C && b.defaultPrevented) {
                        xe(a,
                            b, d, c);
                        return
                    }
                    e = c;
                    for (var g of fc(e, 6)) $d(g)
                }
                a.K && f && O(c, 21, !1) && (Ic(b), (g = c) && P(g, 2) && (e = Rd(P(g, 2), "ae", "1"), R(g, 2, e)));
                if (d && f) {
                    c = f ? c : null;
                    (g = te(a.g, d)) ? g = g.data: (g = new cc, R(g, 2, d.href), R(g, 11, d.target || "_top"), a.g.push({
                        element: d,
                        data: g
                    }));
                    Pd(d, c || g, P(g, 2), 557);
                    ye(a, b, d, c);
                    for (var k of fc(a.h, 17)) g = W.body, f = {}, typeof window.CustomEvent === "function" ? e = new CustomEvent(k, f) : (e = document.createEvent("CustomEvent"), e.initCustomEvent(k, !!f.bubbles, !!f.cancelable, f.detail)), g.dispatchEvent(e);
                    if (c == null ?
                        0 : B(E(c, 19)) != null) {
                        k = new mc;
                        ec(c, 5) != null ? (g = k, f = Q(c, 5, 0), ic(g, 1, f)) : (g = ae(d.href, "nb"), g != "" && ic(k, 1, +g));
                        g = ae(d.href, "nx");
                        g != "" && hc(k, 2, +g);
                        g = ae(d.href, "ny");
                        g != "" && hc(k, 3, +g);
                        g = ae(d.href, "bg");
                        g != "" && R(k, 4, g);
                        g = ae(d.href, "nm");
                        g != "" && hc(k, 5, +g);
                        g = ae(d.href, "mb");
                        g != "" && hc(k, 6, +g);
                        g = d.href;
                        f = g.search(Ec);
                        e = 0;
                        for (var l = [];
                            (h = Dc(g, e, "bg", f)) >= 0;) l.push(g.substring(e, h)), e = Math.min(g.indexOf("&", h) + 1 || f, f);
                        l.push(g.slice(e));
                        g = l.join("").replace(Gc, "$1");
                        Ac(d, ad(g, bd(1211)));
                        e = P(c, 19);
                        g = lb(E(c, 20)) !=
                            null ? N(lb(E(c, 20)), 0) : null;
                        h = jc(k);
                        k = a.o;
                        f = Id(m);
                        l = new uc;
                        e = R(l, 1, e);
                        e = R(e, 4, h);
                        e = R(e, 10, Date.now().toString());
                        g !== null && hc(e, 2, g);
                        k !== null && R(e, 3, k);
                        ic(e, 9, 7);
                        var n;
                        f == null || (n = f.fence) == null || n.setReportEventDataForAutomaticBeacons({
                            eventType: "reserved.top_navigation_start",
                            eventData: JSON.stringify(e),
                            destination: ["buyer"],
                            once: !0
                        });
                        var p;
                        f == null || (p = f.fence) == null || p.reportEvent({
                            eventType: "click",
                            destination: ["component-seller"]
                        })
                    }
                    O(a.h, 16) || a.N ? ze(a, b, d, c) : (n = "", (p = m.oneAfmaInstance) && (n = p.appendClickSignals(d.href)),
                        Ae(a, b, d, c, n))
                }
            }
        }
    }

    function xe(a, b, c, d) {
        if (a.H === b && a.I) {
            const e = new oc(a.I),
                h = P(d, 9);
            var f = "";
            switch (Q(e, 4, 1)) {
                case 2:
                    if (N(lb(E(e, 2)), 0)) f = "blocked_fast_click";
                    else if (P(e, 1) || P(e, 7)) f = "blocked_border_click";
                    break;
                case 3:
                    f = W;
                    f = f.getElementById ? f.getElementById("common_15click_anchor") : null;
                    const g = window;
                    if (typeof g.copfcChm === "function" && f) {
                        d = Tb(d);
                        ic(d, 5, 12);
                        ac(d, 4).set("nb", (12).toString());
                        const k = te(a.g, f);
                        k ? k.data = d : a.g.push({
                            element: f,
                            data: d
                        });
                        !a.S && c && (ye(a, b, c, d), R(d, 2, c.href));
                        g.copfcChm(b, Ld(d, f.href), null,
                            H(e, nc, 10) ? jc(K(e, nc, 10)) : null);
                        a.S && ye(a, b, f, d)
                    }
                    f = "onepointfiveclick_first_click"
            }
            h && f && (c = h + "&label=" + f, f === "onepointfiveclick_first_click" && (c += "&ccx=" + b.clientX + "&ccy=" + b.clientY), $d(c, !1));
            Yc(a.O)
        }
    }

    function ye(a, b, c, d) {
        if (!O(d, 13)) {
            var f = c.href;
            var e = /[?&]adurl=([^&]+)/.exec(f);
            f = e ? [f.slice(0, e.index), f.slice(e.index)] : [f, ""];
            for (Ac(c, ad(f[0], bd(557))); !c.id;)
                if (e = "asoch-id-" + (Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36)), !W.getElementById(e)) {
                    c.id = e;
                    break
                }
            e = c.id;
            typeof window.xy === "function" && window.xy(b, c, W.body);
            typeof window.mb === "function" && window.mb(c);
            typeof window.bgz === "function" && window.bgz(e);
            typeof window.ja ===
                "function" && window.ja(e, d ? Q(d, 5, 0) : 0);
            typeof window.vti === "function" && window.vti(c);
            a.i && typeof window.ss === "function" && (a.R ? window.ss(e, 1, a.i) : window.ss(a.i, 1));
            f.length > 0 && (a = a.o.length > 0 && (d == null || B(E(d, 19)) == null) ? c.href + "&uach=" + encodeURIComponent(a.o) + f[1] : c.href + f[1], Ac(c, ad(a, bd(557))))
        }
    }
    async function ze(a, b, c, d) {
        let f = "";
        var e = m.oneAfmaInstance;
        if (e && (b.preventDefault(), f = await e.appendClickSignalsAsync(c.href) || "", a.N)) {
            if (a.aa) return;
            if (e = await e.getNativeClickMeta()) {
                if (e.customClickGestureEligible) return;
                f = Od(f, "nas", e.encodedNas)
            }
        }
        Ae(a, b, c, d, f)
    }

    function Ae(a, b, c, d, f) {
        a.M++;
        a.A < 0 && (a.A = Date.now());
        const e = O(a.h, 2),
            h = e && Date.now() - a.P > 300,
            g = m.oneAfmaInstance;
        g ? (Ic(b), (() => {
            var k = O(d, 13) ? f : g.logScionEventAndAddParam(f);
            if (!a.F && d && H(d, U, 12)) {
                var l = K(d, U, 12).u();
                var n = "";
                if (rc(d).length > 0)
                    for (const p of rc(d)) n += P(p, 2) + " " + p.u() + " ";
                O(K(d, U, 12), 2) ? (g.click(k), g.openAndroidApp(l), l = !0) : l = !1
            } else l = !1;
            l || Vd(a.m, d, k, g) || Yd(e, h, a.ca, a.F, d, k, g, a.K, a.ba)
        })()) : (b = window, a.Z && b.pawsig && typeof b.pawsig.clk === "function" ? (Hd("paw_sigs", {
            msg: "click",
            count: a.M.toString(),
            elapsed: (Date.now() - a.A).toString()
        }), b.pawsig.clk(c)) : h && (b = c.getAttribute("attributionsrc") != null && Fc(c.getAttribute("attributionsrc"), "nis") === "6" ? Xd(c.href, () => {}) : Xd(c.href), b !== c.href && Ac(c, ad(b, bd(599)))));
        h && (a.P = Date.now());
        Yc(a.O)
    }
    var ve = class {
        constructor(a) {
            this.F = Na || La || Oa || Ma;
            var b = cd("data-asoch-meta");
            if (b.length !== 1) Hd("gdn-asoch", {
                type: 2,
                data: b.length
            });
            else {
                this.O = 70;
                this.h = new sc(JSON.parse(b[0].getAttribute("data-asoch-meta")) || []);
                this.L = a["extra-meta"] ? new sc(JSON.parse(a["extra-meta"])) : null;
                this.N = a["is-fsn"] === "true";
                this.aa = a["is-tap-disabled-for-fsn"] === "true";
                this.m = a["ios-store-overlay-config"] ? new tc(JSON.parse(a["ios-store-overlay-config"])) : null;
                this.ca = a["use-cct-over-browser"] === "true";
                this.S = a["correct-redirect-url-for-och-15-click"] ===
                    "true";
                this.ba = a["spitzer-use-click-url-for-fallback"] === "true";
                this.C = a["default-msg-in-och"] === "true";
                this.Z = a["enable-paw"] === "true";
                this.K = a["allow-redirection-muted-in-och"] === "true";
                this.o = "";
                b = re();
                b != null && b.then(d => {
                    var f = jc(d);
                    d = [];
                    for (var e = 0, h = 0; h < f.length; h++) {
                        var g = f.charCodeAt(h);
                        g > 255 && (d[e++] = g & 255, g >>= 8);
                        d[e++] = g
                    }
                    f = 3;
                    f === void 0 && (f = 0);
                    if (!Qa)
                        for (Qa = {}, e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], g = 0; g < 5; g++) {
                            var k = e.concat(h[g].split(""));
                            Pa[g] = k;
                            for (var l = 0; l < k.length; l++) {
                                var n = k[l];
                                Qa[n] === void 0 && (Qa[n] = l)
                            }
                        }
                    f = Pa[f];
                    e = Array(Math.floor(d.length / 3));
                    h = f[64] || "";
                    for (g = k = 0; k < d.length - 2; k += 3) {
                        var p = d[k],
                            u = d[k + 1];
                        n = d[k + 2];
                        l = f[p >> 2];
                        p = f[(p & 3) << 4 | u >> 4];
                        u = f[(u & 15) << 2 | n >> 6];
                        n = f[n & 63];
                        e[g++] = l + p + u + n
                    }
                    l = 0;
                    n = h;
                    switch (d.length - k) {
                        case 2:
                            l = d[k + 1], n = f[(l & 15) << 2] || h;
                        case 1:
                            d = d[k], e[g] = f[d >> 2] + f[(d & 3) << 4 | l >> 4] + n + h
                    }
                    this.o = e.join("")
                });
                this.g = Md(this.h);
                this.C && (this.l = null, bc(this.h).forEach(d => {
                    this.l != null || B(E(d, 2)) == null || B(E(d, 9)) == null || O(d,
                        13) || (this.l = d)
                }));
                this.da = Number(a["deeplink-and-android-app-validation-timeout"]) || 500;
                this.P = -Infinity;
                this.A = this.M = 0;
                this.i = P(this.h, 5) || "";
                this.R = O(this.h, 11);
                this.L && (this.R = O(this.L, 11));
                this.I = this.H = null;
                O(this.h, 3) || (Qd(this.g), gc(this.h, 3, !0));
                se(this.g);
                a = m.oneAfmaInstance;
                !this.F && a && Td(this.g, this.da);
                var c;
                if (a && ((c = this.m) == null ? 0 : O(c, 2))) switch (c = () => {
                    const d = N(lb(E(this.m, 4)), 0);
                    d > 0 ? m.setTimeout(() => {
                        Sd(this.g)
                    }, d) : Sd(this.g)
                }, Q(this.m, 3, 0)) {
                    case 1:
                        a.runOnOnShowEvent(c);
                        break;
                    case 2:
                        Rc(c);
                        break;
                    default:
                        Sd(this.g)
                }
                V(W, "click", Gd(557, d => {
                    we(this, d)
                }), wc);
                V(W, "auxclick", Gd(557, d => {
                    d.button === 1 && we(this, d)
                }), wc);
                this.i && typeof window.ss === "function" && V(W.body, "mouseover", Gd(626, () => {
                    window.ss(this.i, 0)
                }), xc);
                typeof window.ivti === "function" && window.ivti(W.body);
                c = window;
                c.googqscp && typeof c.googqscp.registerCallback === "function" && c.googqscp.registerCallback((d, f) => {
                    this.H = d;
                    this.I = f
                })
            }
        }
    };
    var Be = Gd(555, a => ue(a));
    Vc = 70;
    const Ce = Xc(70, document.currentScript);
    if (Ce == null) throw Error("JSC not found 70");
    const De = {},
        Ee = Ce.attributes;
    for (let a = Ee.length - 1; a >= 0; a--) {
        const b = Ee[a].name;
        b.indexOf("data-jcp-") === 0 && (De[b.substring(9)] = Ee[a].value)
    }
    Be(De);
}).call(this);