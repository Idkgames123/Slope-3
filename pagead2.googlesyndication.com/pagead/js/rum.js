(function() {
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this),
        ea = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        p = {},
        fa = {};

    function r(a, b, c) {
        if (!c || a != null) {
            c = fa[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function u(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in p ? f = p : f = da;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ea && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? ba(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (fa[d] === void 0 && (a = Math.random() * 1E9 >>> 0, fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, fa[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    u("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    u("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    }, "es6");

    function ha(a) {
        a = {
            next: a
        };
        a[r(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function ia(a) {
        return a.raw = a
    }

    function v(a) {
        var b = typeof p.Symbol != "undefined" && r(p.Symbol, "iterator") && a[r(p.Symbol, "iterator")];
        if (b) return b.call(a);
        if (typeof a.length == "number") return {
            next: aa(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }

    function la(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var ma = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        pa;
    if (ea && typeof Object.setPrototypeOf == "function") pa = Object.setPrototypeOf;
    else {
        var qa;
        a: {
            var ra = {
                    a: !0
                },
                sa = {};
            try {
                sa.__proto__ = ra;
                qa = sa.a;
                break a
            } catch (a) {}
            qa = !1
        }
        pa = qa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ta = pa;

    function y(a, b) {
        a.prototype = ma(b.prototype);
        a.prototype.constructor = a;
        if (ta) ta(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Ja = b.prototype
    }

    function ua() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    u("WeakMap", function(a) {
        function b(g) {
            this.g = (f += Math.random() + 1).toString();
            if (g) {
                g = v(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return h === "object" && g !== null || h === "function"
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        l = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (l.get(g) != 2 || l.get(h) != 3) return !1;
                    l.delete(g);
                    l.set(h, 4);
                    return !l.has(g) && l.get(h) == 4
                } catch (k) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!la(g, e)) {
                var l = new c;
                ba(g, e, {
                    value: l
                })
            }
            if (!la(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.g] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && la(g, e) ? g[e][this.g] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && la(g, e) && la(g[e], this.g)
        };
        b.prototype.delete = function(g) {
            return d(g) && la(g, e) && la(g[e], this.g) ? delete g[e][this.g] : !1
        };
        return b
    }, "es6");
    u("Map", function(a) {
        function b() {
            var h = {};
            return h.D = h.next = h.head = h
        }

        function c(h, l) {
            var k = h[1];
            return ha(function() {
                if (k) {
                    for (; k.head != h[1];) k = k.D;
                    for (; k.next != k.head;) return k = k.next, {
                        done: !1,
                        value: l(k)
                    };
                    k = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, l) {
            var k = l && typeof l;
            k == "object" || k == "function" ? f.has(l) ? k = f.get(l) : (k = "" + ++g, f.set(l, k)) : k = "p_" + l;
            var m = h[0][k];
            if (m && la(h[0], k))
                for (h = 0; h < m.length; h++) {
                    var n = m[h];
                    if (l !== l && n.key !== n.key || l === n.key) return {
                        id: k,
                        list: m,
                        index: h,
                        o: n
                    }
                }
            return {
                id: k,
                list: m,
                index: -1,
                o: void 0
            }
        }

        function e(h) {
            this[0] = {};
            this[1] = b();
            this.size = 0;
            if (h) {
                h = v(h);
                for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        }
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        l = new a(v([
                            [h, "s"]
                        ]));
                    if (l.get(h) != "s" || l.size != 1 || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || l.size != 2) return !1;
                    var k = l.entries(),
                        m = k.next();
                    if (m.done || m.value[0] != h || m.value[1] != "s") return !1;
                    m = k.next();
                    return m.done || m.value[0].x !=
                        4 || m.value[1] != "t" || !k.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, l) {
            h = h === 0 ? 0 : h;
            var k = d(this, h);
            k.list || (k.list = this[0][k.id] = []);
            k.o ? k.o.value = l : (k.o = {
                next: this[1],
                D: this[1].D,
                head: this[1],
                key: h,
                value: l
            }, k.list.push(k.o), this[1].D.next = k.o, this[1].D = k.o, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.o && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.o.D.next = h.o.next, h.o.next.D = h.o.D, h.o.head =
                null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].D = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).o
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).o) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, l) {
            for (var k = this.entries(), m; !(m = k.next()).done;) m =
                m.value, h.call(l, m[1], m[0], this)
        };
        e.prototype[r(p.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");
    u("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    u("Number.MIN_SAFE_INTEGER", function() {
        return -9007199254740991
    }, "es6");
    u("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    }, "es6");
    u("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return r(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    u("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return r(Number, "isInteger").call(Number, b) && Math.abs(b) <= r(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    u("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    }, "es6");
    u("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === "number" && isNaN(b)
        }
    }, "es6");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var z = this || self;

    function va(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = z, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function wa(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function xa(a) {
        return a
    };
    var ya;
    var za, Aa = typeof String.prototype.isWellFormed === "function",
        Ba = typeof TextEncoder !== "undefined";

    function Ca(a) {
        var b = !1;
        b = b === void 0 ? !1 : b;
        if (Ba) {
            if (b && (Aa ? !a.isWellFormed() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))) throw Error("Found an unpaired surrogate");
            a = (za || (za = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (f < 128) d[c++] = f;
                else {
                    if (f < 2048) d[c++] = f >> 6 | 192;
                    else {
                        if (f >= 55296 && f <= 57343) {
                            if (f <= 56319 && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (g >= 56320 && g <= 57343) {
                                    f = (f - 55296) * 1024 + g - 56320 +
                                        65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };

    function Da(a) {
        z.setTimeout(function() {
            throw a;
        }, 0)
    };

    function Ea(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    var Fa = va(610401301, !1),
        Ga = va(645172343, va(1, !0)),
        Ia = va(660014094, !1);

    function Ja() {
        var a = z.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ka, La = z.navigator;
    Ka = La ? La.userAgentData || null : null;

    function Ma(a) {
        return Fa ? Ka ? Ka.brands.some(function(b) {
            return (b = b.brand) && b.indexOf(a) != -1
        }) : !1 : !1
    }

    function A(a) {
        return Ja().indexOf(a) != -1
    };

    function Na() {
        return Fa ? !!Ka && Ka.brands.length > 0 : !1
    }

    function Oa() {
        return Na() ? Ma("Chromium") : (A("Chrome") || A("CriOS")) && !(Na() ? 0 : A("Edge")) || A("Silk")
    };

    function Pa(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Qa(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ra(a, b) {
        for (var c = a.length, d = [], e = 0, f = typeof a === "string" ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ta(a, b) {
        for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ua(a, b) {
        a: {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }

    function Va(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c],
                e = wa(d);
            if (e == "array" || e == "object" && typeof d.length == "number") {
                e = a.length || 0;
                var f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function Wa(a, b) {
        a.sort(b || Xa)
    }

    function Xa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };

    function Ya(a) {
        Ya[" "](a);
        return a
    }
    Ya[" "] = function() {};
    var Za = Na() ? !1 : A("Trident") || A("MSIE"),
        $a = A("Gecko") && !(Ja().toLowerCase().indexOf("webkit") != -1 && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        ab = Ja().toLowerCase().indexOf("webkit") != -1 && !A("Edge");
    !A("Android") || Oa();
    Oa();
    var bb = A("Safari") && !(Oa() || (Na() ? 0 : A("Coast")) || (Na() ? 0 : A("Opera")) || (Na() ? 0 : A("Edge")) || (Na() ? Ma("Microsoft Edge") : A("Edg/")) || (Na() ? Ma("Opera") : A("OPR")) || A("Firefox") || A("FxiOS") || A("Silk") || A("Android")) && !(A("iPhone") && !A("iPod") && !A("iPad") || A("iPad") || A("iPod"));
    var cb = {},
        db = null,
        eb = $a || ab || !bb && typeof z.atob == "function";

    function fb(a, b) {
        b === void 0 && (b = 0);
        ib();
        b = cb[b];
        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                l = a[e + 2],
                k = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | l >> 6];
            l = b[l & 63];
            c[f++] = k + g + h + l
        }
        k = 0;
        l = d;
        switch (a.length - e) {
            case 2:
                k = a[e + 1], l = b[(k & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | k >> 4] + l + d
        }
        return c.join("")
    }

    function jb(a) {
        if (eb) return z.atob(a);
        var b = "";
        kb(a, function(c) {
            b += String.fromCharCode(c)
        });
        return b
    }

    function kb(a, b) {
        function c(l) {
            for (; d < a.length;) {
                var k = a.charAt(d++),
                    m = db[k];
                if (m != null) return m;
                if (!/^[\s\xa0]*$/.test(k)) throw Error("Unknown base64 encoding at char: " + k);
            }
            return l
        }
        ib();
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

    function ib() {
        if (!db) {
            db = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                var d = a.concat(b[c].split(""));
                cb[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    db[f] === void 0 && (db[f] = e)
                }
            }
        }
    };
    var lb = typeof Uint8Array !== "undefined",
        mb = !Za && typeof btoa === "function";

    function nb(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var qb;

    function rb() {
        var a = Error();
        nb(a, "incident");
        Da(a)
    }

    function sb(a) {
        a = Error(a);
        nb(a, "warning");
        return a
    }

    function tb(a, b) {
        if (b != null) {
            if (a == null) {
                var c;
                a = (c = qb) != null ? c : qb = {}
            } else a = a.constructor;
            c = a[b] || 0;
            c >= 4 || (a[b] = c + 1, rb())
        }
    };

    function ub() {
        return typeof BigInt === "function"
    };

    function vb(a) {
        return Array.prototype.slice.call(a)
    };
    var wb = typeof p.Symbol === "function" && typeof(0, p.Symbol)() === "symbol";

    function xb(a) {
        return typeof p.Symbol === "function" && typeof(0, p.Symbol)() === "symbol" ? (0, p.Symbol)() : a
    }
    var yb = xb(),
        zb = xb("2ex"),
        Ab = xb("1oa"),
        Bb = xb("0dg"),
        Cb = xb("64big");
    var Db = wb ? function(a, b) {
            a[yb] |= b
        } : function(a, b) {
            a.g !== void 0 ? a.g |= b : Object.defineProperties(a, {
                g: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        Eb = wb ? function(a, b) {
            a[yb] &= ~b
        } : function(a, b) {
            a.g !== void 0 && (a.g &= ~b)
        },
        F = wb ? function(a) {
            return a[yb] | 0
        } : function(a) {
            return a.g | 0
        },
        G = wb ? function(a) {
            return a[yb]
        } : function(a) {
            return a.g
        },
        J = wb ? function(a, b) {
            a[yb] = b
        } : function(a, b) {
            a.g !== void 0 ? a.g = b : Object.defineProperties(a, {
                g: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };

    function Fb(a, b) {
        J(b, (a | 0) & -14591)
    }

    function Gb(a, b) {
        J(b, (a | 34) & -14557)
    };
    var Hb = {},
        Ib = {};

    function Jb(a) {
        return !(!a || typeof a !== "object" || a.g !== Ib)
    }

    function Kb(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Lb(a) {
        return !Array.isArray(a) || a.length ? !1 : F(a) & 1 ? !0 : !1
    }
    var Mb, Nb = [];
    J(Nb, 55);
    Mb = Object.freeze(Nb);

    function Ob(a) {
        if (a & 2) throw Error();
    }
    var Pb = Object.freeze({});
    Object.freeze({});
    var Qb = Object.freeze({});
    var K = 0,
        L = 0;

    function Rb(a) {
        var b = a >>> 0;
        K = b;
        L = (a - b) / 4294967296 >>> 0
    }

    function Sb(a) {
        if (a < 0) {
            Rb(-a);
            var b = v(Tb(K, L));
            a = b.next().value;
            b = b.next().value;
            K = a >>> 0;
            L = b >>> 0
        } else Rb(a)
    }

    function Ub(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151) var c = "" + (4294967296 * b + a);
        else ub() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), c = b + Vb(c) + Vb(a));
        return c
    }

    function Vb(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function Wb() {
        var a = K,
            b = L;
        b & 2147483648 ? ub() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = v(Tb(a, b)), a = b.next().value, b = b.next().value, a = "-" + Ub(a, b)) : a = Ub(a, b);
        return a
    }

    function Xb(a) {
        if (a.length < 16) Sb(Number(a));
        else if (ub()) a = BigInt(a), K = Number(a & BigInt(4294967295)) >>> 0, L = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +(a[0] === "-");
            L = K = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), L *= 1E6, K = K * 1E6 + d, K >= 4294967296 && (L += r(Math, "trunc").call(Math, K / 4294967296), L >>>= 0, K >>>= 0);
            b && (b = v(Tb(K, L)), a = b.next().value, b = b.next().value, K = a, L = b)
        }
    }

    function Tb(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };

    function Yb(a) {
        a.Ia = !0;
        return a
    };
    var Zb = Yb(function(a) {
            return typeof a === "number"
        }),
        $b = Yb(function(a) {
            return typeof a === "string"
        }),
        ac = Yb(function(a) {
            return typeof a === "boolean"
        });
    var bc = typeof z.BigInt === "function" && typeof z.BigInt(0) === "bigint";

    function cc(a) {
        var b = a;
        if ($b(b)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b)) throw Error(String(b));
        } else if (Zb(b) && !r(Number, "isSafeInteger").call(Number, b)) throw Error(String(b));
        return bc ? BigInt(a) : a = ac(a) ? a ? "1" : "0" : $b(a) ? a.trim() || "0" : String(a)
    }
    var ic = Yb(function(a) {
            return bc ? a >= dc && a <= ec : a[0] === "-" ? fc(a, gc) : fc(a, hc)
        }),
        gc = r(Number, "MIN_SAFE_INTEGER").toString(),
        dc = bc ? BigInt(r(Number, "MIN_SAFE_INTEGER")) : void 0,
        hc = r(Number, "MAX_SAFE_INTEGER").toString(),
        ec = bc ? BigInt(r(Number, "MAX_SAFE_INTEGER")) : void 0;

    function fc(a, b) {
        if (a.length > b.length) return !1;
        if (a.length < b.length || a === b) return !0;
        for (var c = 0; c < a.length; c++) {
            var d = a[c],
                e = b[c];
            if (d > e) return !1;
            if (d < e) return !0
        }
    };

    function jc(a) {
        if (a != null && typeof a !== "boolean") throw Error("Expected boolean but got " + wa(a) + ": " + a);
        return a
    }

    function kc(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    var lc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function mc(a) {
        var b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return r(Number, "isFinite").call(Number, a)
        }
        return b !== "string" ? !1 : lc.test(a)
    }

    function nc(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return r(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    }

    function oc(a) {
        var b = 0;
        b = b === void 0 ? 0 : b;
        if (!mc(a)) throw sb("int64");
        var c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case "string":
                        return pc(a);
                    case "bigint":
                        return String(BigInt.asIntN(64, a));
                    default:
                        return a = r(Math, "trunc").call(Math, a), r(Number, "isSafeInteger").call(Number, a) ? a = String(a) : (b = String(a), qc(b) ? a = b : (Sb(a), a = Wb())), a
                }
            case 8192:
                switch (c) {
                    case "string":
                        return b = r(Math, "trunc").call(Math, Number(a)), r(Number, "isSafeInteger").call(Number, b) ? a = cc(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0,
                            b)), a = ub() ? cc(BigInt.asIntN(64, BigInt(a))) : cc(rc(a))), a;
                    case "bigint":
                        return cc(BigInt.asIntN(64, a));
                    default:
                        return cc(sc(a))
                }
            case 0:
                switch (c) {
                    case "string":
                        return pc(a);
                    case "bigint":
                        return cc(BigInt.asIntN(64, a));
                    default:
                        return sc(a)
                }
            default:
                throw Error("Unknown format requested type for int64");
        }
    }

    function qc(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function rc(a) {
        if (qc(a)) return a;
        Xb(a);
        return Wb()
    }

    function sc(a) {
        a = r(Math, "trunc").call(Math, a);
        if (!r(Number, "isSafeInteger").call(Number, a)) {
            Sb(a);
            var b = K,
                c = L;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function pc(a) {
        var b = r(Math, "trunc").call(Math, Number(a));
        if (r(Number, "isSafeInteger").call(Number, b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        return rc(a)
    }

    function tc(a) {
        if (a == null) return a;
        var b = typeof a;
        if (b === "bigint") return String(BigInt.asIntN(64, a));
        if (mc(a)) {
            if (b === "string") return pc(a);
            if (b === "number") return sc(a)
        }
    }

    function uc(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function vc(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function wc(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function xc(a, b, c) {
        if (a != null && typeof a === "object" && a.P === Hb) return a;
        if (Array.isArray(a)) {
            var d = F(a),
                e = d;
            e === 0 && (e |= c & 32);
            e |= c & 2;
            e !== d && J(a, e);
            return new b(a)
        }
    };

    function yc(a) {
        var b = zc(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        if (Ac === void 0)
            if (typeof Proxy !== "function") Ac = null;
            else try {
                Ac = Proxy.toString().indexOf("[native code]") !== -1 ? Proxy : null
            } catch (c) {
                Ac = null
            }
        b = Ac;
        if (!b) return a;
        b = new b(a, {
            set: function(c, d, e) {
                Bc();
                c[d] = e;
                return !0
            }
        });
        Cc(a, b);
        return b
    }

    function Bc() {
        rb()
    }
    var Dc = void 0,
        Ec = void 0;

    function zc(a) {
        var b;
        return (b = Dc) == null ? void 0 : b.get(a)
    }

    function Fc(a) {
        var b;
        return ((b = Ec) == null ? void 0 : b.get(a)) || a
    }

    function Cc(a, b) {
        (Dc || (Dc = new p.WeakMap)).set(a, b);
        (Ec || (Ec = new p.WeakMap)).set(b, a)
    }
    var Ac = void 0;
    var Gc, Hc, Ic;

    function Jc(a) {
        switch (typeof a) {
            case "boolean":
                return Hc || (Hc = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? Ic || (Ic = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    }

    function M(a, b, c) {
        a == null && (a = Gc);
        Gc = void 0;
        if (a == null) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            d = F(a);
            if (d & 2048) throw Error("farr");
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (Kb(c[f])) {
                        d |= 256;
                        b = f - (+!!(d & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        d = d & -16760833 | (b & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, e - (+!!(d & 512) - 1));
                    if (b > 1024) throw Error("spvt");
                    d = d & -16760833 | (b & 1023) <<
                        14
                }
            }
        }
        J(a, d);
        return a
    };

    function Kc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Lb(a)) return
                    } else if (lb && a != null && a instanceof Uint8Array) {
                    if (mb) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else a = fb(a);
                    return a
                }
        }
        return a
    };

    function Lc(a, b, c) {
        a = vb(a);
        var d = a.length,
            e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function Mc(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Lb(a) ? void 0 : e && F(a) & 2 ? a : Nc(a, b, c, d !== void 0, e);
            else if (Kb(a)) {
                var f = {},
                    g;
                for (g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Mc(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Nc(a, b, c, d, e) {
        var f = d || c ? F(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = vb(a);
        for (var g = 0; g < a.length; g++) a[g] = Mc(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Oc(a) {
        return a.P === Hb ? a.toJSON() : Kc(a)
    };

    function Pc(a, b, c) {
        c = c === void 0 ? Gb : c;
        if (a != null) {
            if (lb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = F(a);
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (J(a, (d | 34) & -12293), a) : Nc(a, Pc, d & 4 ? Gb : c, !0, !0)
            }
            a.P === Hb && (c = a.j, d = G(c), a = d & 2 ? a : Qc(a, c, d, !0));
            return a
        }
    }

    function Qc(a, b, c, d) {
        a = a.constructor;
        Gc = b = Rc(b, c, d);
        b = new a(b);
        Gc = void 0;
        return b
    }

    function Rc(a, b, c) {
        var d = c || b & 2 ? Gb : Fb,
            e = !!(b & 32);
        a = Lc(a, b, function(f) {
            return Pc(f, e, d)
        });
        Db(a, 32 | (c ? 2 : 0));
        return a
    }

    function Sc(a) {
        var b = a.j,
            c = G(b);
        return c & 2 ? Qc(a, b, c, !1) : a
    };

    function Tc(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[Bb] = (a.constructor[Bb] | 0) + 1) < 5 && rb();
        return c === 0 ? !1 : !(c & b)
    }

    function Uc(a, b) {
        a = a.j;
        return Vc(a, G(a), b)
    }

    function Wc(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Vc(a, b, c, d) {
        if (c === -1) return null;
        var e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Wc(a, b, e, c) && tb(void 0, zb), d) : Wc(a, b, e, c)
        }
    }

    function N(a, b, c, d, e) {
        var f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Ga) {
            var g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && J(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Xc(a, b, c) {
        a = Vc(a, b, c);
        return Array.isArray(a) ? a : Mb
    }

    function Yc(a, b) {
        a === 0 && (a = Zc(a, b));
        return a | 1
    }

    function $c(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function O(a, b, c, d) {
        var e = a.j,
            f = G(e);
        Ob(f);
        N(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function ad(a, b) {
        var c = G(a);
        Ob(c);
        var d = c & 2,
            e = Vc(a, c, 1);
        Array.isArray(e) || (e = Mb);
        var f = !!(c & 32),
            g = F(e);
        g === 0 && f && !d ? (g |= 33, J(e, g)) : g & 1 || (g |= 1, J(e, g));
        if (d) g & 2 || Db(e, 34), Object.freeze(e);
        else if (2 & g || 2048 & g) e = vb(e), d = 1, f && (d |= 32), J(e, d), N(a, c, 1, e);
        a = e;
        b = uc(b);
        a.push(b)
    }

    function bd(a) {
        if (wb) {
            var b;
            return (b = a[Ab]) != null ? b : a[Ab] = new p.Map
        }
        if (Ab in a) return a[Ab];
        b = new p.Map;
        Object.defineProperty(a, Ab, {
            value: b
        });
        return b
    }

    function cd(a, b, c) {
        var d = dd,
            e = a.get(d);
        if (e != null) return e;
        for (var f = e = 0; f < d.length; f++) {
            var g = d[f];
            Vc(b, c, g) != null && (e !== 0 && (c = N(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function ed(a, b, c) {
        var d = d === void 0 ? !1 : d;
        var e = a.j;
        var f = G(e),
            g = Vc(e, f, c, d);
        b = xc(g, b, f);
        b !== g && b != null && N(e, f, c, b, d);
        e = b;
        if (e == null) return e;
        a = a.j;
        f = G(a);
        f & 2 || (g = Sc(e), g !== e && (e = g, N(a, f, c, e, d)));
        return e
    }

    function fd(a, b, c) {
        c == null && (c = void 0);
        a = a.j;
        var d = G(a);
        Ob(d);
        N(a, d, b, c)
    }

    function Zc(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function gd(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function hd(a, b, c, d) {
        a = a.j;
        var e = G(a);
        Ob(e);
        var f, g, h = !!(2 & e),
            l = h ? 1 : 2;
        g && (g = !h);
        h = Xc(a, e, b);
        var k = F(h),
            m = !!(4 & k);
        if (!m) {
            k = Yc(k, e);
            var n = h,
                q = e,
                x = !!(2 & k);
            x && (q |= 2);
            for (var B = !x, H = !0, E = 0, ja = 0; E < n.length; E++) {
                var U = xc(n[E], c, q);
                if (U instanceof c) {
                    if (!x) {
                        var ka = !!(F(U.j) & 2);
                        B && (B = !ka);
                        H && (H = ka)
                    }
                    n[ja++] = U
                }
            }
            ja < E && (n.length = ja);
            k |= 4;
            k = H ? k | 16 : k & -17;
            k = B ? k | 8 : k & -9;
            J(n, k);
            x && Object.freeze(n)
        }
        if (g && !(8 & k || !h.length && (l === 1 || l === 4 && 32 & k))) {
            $c(k) && (h = vb(h), k = Zc(k, e), e = N(a, e, b, h));
            g = h;
            n = k;
            for (k = 0; k < g.length; k++) q =
                g[k], x = Sc(q), q !== x && (g[k] = x);
            n |= 8;
            n = g.length ? n & -17 : n | 16;
            J(g, n);
            k = n
        }
        l === 1 || l === 4 && 32 & k ? $c(k) || (b = k, k |= !h.length || 16 & k && (!m || 32 & k) ? 2 : 2048, k !== b && J(h, k), Object.freeze(h)) : (m = l !== 5 ? !1 : !!(32 & k) || $c(k) || !!zc(h), (l === 2 || m) && $c(k) && (h = vb(h), k = Zc(k, e), k = gd(k, e, !0), J(h, k), e = N(a, e, b, h)), $c(k) || (b = k, k = gd(k, e, !0), k !== b && J(h, k)), m && (f = yc(h)));
        f = f || h;
        c = d != null ? d : new c;
        f.push(c);
        F(c.j) & 2 ? Eb(f, 8) : Eb(f, 16)
    }

    function P(a, b) {
        var c = c === void 0 ? !1 : c;
        a = kc(Uc(a, b));
        return a != null ? a : c
    }

    function id(a) {
        var b = b === void 0 ? 0 : b;
        a = nc(Uc(a, 3));
        return a != null ? a : b
    }

    function jd(a) {
        var b = b === void 0 ? 0 : b;
        a = Uc(a, 1);
        a != null && (typeof a === "bigint" ? ic(a) ? a = Number(a) : (a = BigInt.asIntN(64, a), a = ic(a) ? Number(a) : String(a)) : a = mc(a) ? typeof a === "number" ? sc(a) : pc(a) : void 0);
        return a != null ? a : b
    }

    function kd(a, b) {
        var c = c === void 0 ? "" : c;
        a = wc(Uc(a, b));
        return a != null ? a : c
    }

    function ld(a, b) {
        var c = 0;
        c = c === void 0 ? 0 : c;
        a = Uc(a, b);
        a = a == null ? a : r(Number, "isFinite").call(Number, a) ? a | 0 : void 0;
        return a != null ? a : c
    }

    function Q(a, b, c) {
        c = c == null ? c : oc(c);
        return O(a, b, c, "0")
    }

    function md(a, b, c) {
        if (c != null) {
            if (!r(Number, "isFinite").call(Number, c)) throw sb("enum");
            c |= 0
        }
        return O(a, b, c, 0)
    };
    var nd;

    function R(a, b, c) {
        this.j = M(a, b, c)
    }
    R.prototype.toJSON = function() {
        return od(this)
    };
    R.prototype.P = Hb;
    R.prototype.toString = function() {
        try {
            return nd = !0, od(this).toString()
        } finally {
            nd = !1
        }
    };

    function od(a) {
        a = nd ? a.j : Nc(a.j, Oc, void 0, void 0, !1);
        var b = !nd,
            c = a.length;
        if (c) {
            var d = a[c - 1],
                e = Kb(d);
            e ? c-- : d = void 0;
            var f = a;
            if (e) {
                b: {
                    var g = d;
                    var h = {};e = !1;
                    if (g)
                        for (var l in g)
                            if (Object.prototype.hasOwnProperty.call(g, l))
                                if (isNaN(+l)) h[l] = g[l];
                                else {
                                    var k = g[l];
                                    Array.isArray(k) && (Lb(k) || Jb(k) && k.size === 0) && (k = null);
                                    k == null && (e = !0);
                                    k != null && (h[l] = k)
                                }
                    if (e) {
                        for (var m in h) break b;
                        h = null
                    } else h = g
                }
                g = h == null ? d != null : h !== d
            }
            for (; c > 0; c--) {
                l = f[c - 1];
                if (!(l == null || Lb(l) || Jb(l) && l.size === 0)) break;
                var n = !0
            }
            if (f !==
                a || g || n) {
                if (!b) f = Array.prototype.slice.call(f, 0, c);
                else if (n || g || h) f.length = c;
                h && f.push(h)
            }
            n = f
        } else n = a;
        return n
    };

    function pd(a, b) {
        this.h = a >>> 0;
        this.g = b >>> 0
    }

    function qd(a) {
        if (!a) return rd || (rd = new pd(0, 0));
        if (!/^-?\d+$/.test(a)) return null;
        Xb(a);
        return new pd(K, L)
    }
    var rd;

    function sd() {
        this.g = []
    }
    sd.prototype.length = function() {
        return this.g.length
    };
    sd.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };

    function td(a, b, c) {
        for (; c > 0 || b > 127;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
        a.g.push(b)
    }

    function ud(a, b) {
        for (; b > 127;) a.g.push(b & 127 | 128), b >>>= 7;
        a.g.push(b)
    }

    function vd(a, b) {
        if (b >= 0) ud(a, b);
        else {
            for (var c = 0; c < 9; c++) a.g.push(b & 127 | 128), b >>= 7;
            a.g.push(1)
        }
    };

    function wd() {
        this.i = [];
        this.h = 0;
        this.g = new sd
    }

    function xd(a, b) {
        b.length !== 0 && (a.i.push(b), a.h += b.length)
    }

    function yd(a, b) {
        ud(a.g, b * 8 + 2);
        b = a.g.end();
        xd(a, b);
        b.push(a.h);
        return b
    }

    function zd(a, b) {
        var c = b.pop();
        for (c = a.h + a.g.length() - c; c > 127;) b.push(c & 127 | 128), c >>>= 7, a.h++;
        b.push(c);
        a.h++
    }

    function Ad(a, b, c) {
        ud(a.g, b * 8 + 2);
        ud(a.g, c.length);
        xd(a, a.g.end());
        xd(a, c)
    };

    function S(a, b) {
        this.g = a;
        this.Y = b
    };

    function Bd(a, b) {
        if (Array.isArray(b)) {
            var c = F(b);
            if (c & 4) return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                f != null && (b[e++] = f)
            }
            e < d && (b.length = e);
            J(b, (c | 5) & -12289);
            c & 2 && Object.freeze(b);
            return b
        }
    }
    var Cd = (0, p.Symbol)();

    function Dd(a, b, c) {
        a[b] = c
    }
    var Ed = (0, p.Symbol)();

    function Fd(a) {
        var b = a[Ed];
        if (!b) {
            var c = Gd(a);
            b = function(d, e) {
                return Hd(d, e, c)
            };
            a[Ed] = b
        }
        return b
    }
    var Id = (0, p.Symbol)();

    function Jd(a) {
        return a.g
    }

    function Kd(a, b) {
        var c, d, e = a.g;
        return function(f, g, h) {
            return e(f, g, h, d || (d = Gd(b).g), c || (c = Fd(b)))
        }
    }

    function Gd(a) {
        var b = a[Id];
        if (b) return b;
        b = a[Id] = {};
        var c = Jd,
            d = Kd;
        var e = e === void 0 ? Dd : e;
        b.g = Jc(a[0]);
        var f = 0,
            g = a[++f];
        g && g.constructor === Object && (b.O = g, g = a[++f], typeof g === "function" && (b.i = g, b.h = a[++f], g = a[++f]));
        for (var h = {}; Array.isArray(g) && typeof g[0] === "number" && g[0] > 0;) {
            for (var l = 0; l < g.length; l++) h[g[l]] = g;
            g = a[++f]
        }
        for (l = 1; g !== void 0;) {
            typeof g === "number" && (l += g, g = a[++f]);
            var k = void 0;
            if (g instanceof S) var m = g;
            else m = Ld, f--;
            if (m.Y) {
                g = a[++f];
                k = a;
                var n = f;
                typeof g == "function" && (g = g(), k[n] = g);
                k =
                    g
            }
            g = a[++f];
            n = l + 1;
            typeof g === "number" && g < 0 && (n -= g, g = a[++f]);
            for (; l < n; l++) {
                var q = h[l];
                e(b, l, k ? d(m, k, q) : c(m, q))
            }
        }
        Md in a && Cd in a && Id in a && (a.length = 0);
        return b
    }
    var Md = (0, p.Symbol)();

    function Nd(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.O) {
            var d = c[b];
            if (d) {
                d = Array.isArray(d) ? d[0] instanceof S ? d : [Od, d] : [d, void 0];
                var e = d[0].g;
                d = d[1];
                var f;
                c = (f = c.g) == null ? void 0 : f[b];
                if (!Ia || c) {
                    if (d) {
                        var g = Fd(d),
                            h = Gd(d).g;
                        c = (f = a.h) ? f(h, g) : function(l, k, m) {
                            return e(l, k, m, h, g)
                        }
                    } else c = e;
                    return a[b] = c
                }
            }
        }
    }

    function Hd(a, b, c) {
        for (var d = G(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var l = a[h];
            if (l != null) {
                var k = h - e,
                    m = Nd(c, k);
                if (m) {
                    var n = c.O,
                        q = void 0,
                        x = void 0,
                        B = void 0;
                    (q = n) == null || !q[k] || ((x = n) == null ? 0 : (B = x.g) == null ? 0 : B[k]) || Pd++ < 5 && rb();
                    m(b, l, k)
                }
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var H in a) Object.prototype.hasOwnProperty.call(a, H) && (d = +H, !r(Number, "isNaN").call(Number, d) && (e = a[H], e != null && (f = Nd(c, d)))) && (g = c.O, k = l = h = void 0, (h = g) == null || !h[d] || ((l = g) == null ? 0 : (k = l.g) == null ? 0 : k[d]) || Pd++ < 5 &&
                rb(), f(b, e, d))
        }
    }
    var Pd = 0;

    function Qd(a, b, c, d, e) {
        b = b instanceof R ? b.j : Array.isArray(b) ? M(b, d[0], d[1]) : void 0;
        b != null && (c = yd(a, c), e(b, a), zd(a, c))
    }
    var Rd = new S(function(a, b, c) {
            b = tc(b);
            b != null && (typeof b === "string" && qd(b), b != null && (ud(a.g, c * 8), typeof b === "number" ? (a = a.g, Sb(b), td(a, K, L)) : (c = qd(b), td(a.g, c.h, c.g))))
        }, !1),
        Sd;
    Sd = new S(function(a, b, c) {
        b = Bd(nc, b);
        if (b != null && b.length) {
            c = yd(a, c);
            for (var d = 0; d < b.length; d++) vd(a.g, b[d]);
            zd(a, c)
        }
    }, !1);
    var Td = new S(function(a, b, c) {
            b = nc(b);
            b != null && b != null && (ud(a.g, c * 8), vd(a.g, b))
        }, !1),
        Ud = new S(function(a, b, c) {
            b = kc(b);
            b != null && (ud(a.g, c * 8), a.g.g.push(b ? 1 : 0))
        }, !1),
        Vd;
    Vd = new S(function(a, b, c) {
        b = Bd(wc, b);
        if (b != null)
            for (var d = 0; d < b.length; d++) {
                var e = a,
                    f = c,
                    g = b[d];
                g != null && Ad(e, f, Ca(g))
            }
    }, !1);
    var Wd = new S(function(a, b, c) {
            b = wc(b);
            b != null && Ad(a, c, Ca(b))
        }, !1),
        Od = new S(Qd, !0),
        Ld = new S(Qd, !0),
        Xd;
    Xd = new S(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Qd(a, b[f], c, d, e)
    }, !0);
    var Yd = new S(Qd, !0),
        Zd = new S(function(a, b, c) {
            b = nc(b);
            b != null && (b = parseInt(b, 10), ud(a.g, c * 8), vd(a.g, b))
        }, !1);

    function T(a) {
        return function() {
            var b = new wd;
            Hd(this.j, b, Gd(a));
            xd(b, b.g.end());
            for (var c = new Uint8Array(b.h), d = b.i, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.i = [c];
            return c
        }
    };

    function $d(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function ae(a) {
        function b() {
            d = z.setTimeout(c, 1E3);
            var g = f;
            f = [];
            a.apply(void 0, g)
        }

        function c() {
            d = 0;
            e && (e = !1, b())
        }
        var d = 0,
            e = !1,
            f = [];
        return function(g) {
            f = arguments;
            d ? e = !0 : b()
        }
    };
    var be = $d(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            z.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function ce(a) {
        return a ? a.passive && be() ? a : a.capture || !1 : !1
    }

    function de(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, ce(d))
    }

    function ee(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, ce())
    };

    function fe(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    }

    function ge(a) {
        for (var b in a) delete a[b]
    };
    var he;

    function ie(a) {
        this.g = a
    }
    ie.prototype.toString = function() {
        return this.g + ""
    };
    var je = {};

    function ke(a) {
        if (he === void 0) {
            var b = null;
            var c = z.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: xa,
                        createScript: xa,
                        createScriptURL: xa
                    })
                } catch (d) {
                    z.console && z.console.error(d.message)
                }
                he = b
            } else he = b
        }
        a = (b = he) ? b.createScriptURL(a) : a;
        return new ie(a, je)
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function le(a) {
        var b = ua.apply(1, arguments);
        if (b.length === 0) return ke(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return ke(c)
    };

    function me(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function ne(a) {
        return me.apply(null, arguments) / arguments.length
    };

    function oe(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    oe.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    oe.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    oe.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function pe(a, b) {
        this.width = a;
        this.height = b
    }
    pe.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    pe.prototype.isEmpty = function() {
        return !(this.width * this.height)
    };
    pe.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    pe.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    pe.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function qe(a, b) {
        for (; a && a.nodeType != 1;) a = b ? a.nextSibling : a.previousSibling;
        return a
    }

    function re(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }

    function se(a) {
        var b = te;
        a && (a = a.parentNode);
        for (var c = 0; a && c <= 6;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function ue(a) {
        this.g = a || z.document || document
    }
    ue.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var ve = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function we(a) {
        return a ? decodeURI(a) : a
    };

    function xe(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null) a: {
                try {
                    Ya(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function ye(a) {
        return xe(a.top) ? a.top : null
    }

    function ze(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Ae(a, b) {
        return fe(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    }

    function Be(a) {
        var b = a.length;
        if (b == 0) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }

    function Ce(a) {
        a = a && a.toString && a.toString();
        return typeof a === "string" && a.indexOf("[native code]") != -1
    }

    function De(a, b) {
        b = b === void 0 ? document : b;
        return b.createElement(String(a).toLowerCase())
    };

    function Ee(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = De("IMG", a.document);
        c.src = b;
        a.google_image_requests.push(c)
    };

    function Fe(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }
    Fe.prototype.contains = function(a) {
        return a instanceof oe ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Fe.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Fe.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Fe.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Ge = void 0;
    Ge = Ge === void 0 ? z : Ge;
    var He = Ge.context || Ge.AMP_CONTEXT_DATA;
    if (!He) try {
        He = Ge.parent.context || Ge.parent.AMP_CONTEXT_DATA
    } catch (a) {}
    var Ie, Je, Ke = !!(((Ie = He) == null ? 0 : Ie.pageViewId) && ((Je = He) == null ? 0 : Je.canonicalUrl) && He) && z != z.top;

    function Le(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Me(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = ab && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = Le(a), new pe(a.right - a.left, a.bottom - a.top)) : new pe(b, c)
    };

    function Ne(a, b) {
        var c = c === void 0 ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Oe = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function Pe(a, b) {
        this.g = a;
        this.h = b
    }

    function Qe(a, b) {
        this.url = a;
        this.W = !!b;
        this.depth = null
    };
    var Re = null;

    function Se() {
        var a = a === void 0 ? z : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Te() {
        var a = a === void 0 ? z : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Ue(a, b, c, d) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = d === void 0 ? 0 : d;
        this.taskId = this.slotId = void 0;
        this.uniqueId = Math.random()
    };
    var Ve = z.performance,
        We = !!(Ve && Ve.mark && Ve.measure && Ve.clearMarks),
        Xe = $d(function() {
            var a;
            if (a = We) {
                var b;
                if (Re === null) {
                    Re = "";
                    try {
                        a = "";
                        try {
                            a = z.top.location.hash
                        } catch (c) {
                            a = z.location.hash
                        }
                        a && (Re = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Re;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function Ye(a, b) {
        this.m = [];
        this.g = b || z;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.m = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.h = Xe() || (c != null ? c : Math.random() < a)
    }
    Ye.prototype.F = function() {
        this.h = !1;
        this.m != this.g.google_js_reporting_queue && (Xe() && Qa(this.m, Ze), this.m.length = 0)
    };
    Ye.prototype.H = function(a) {
        !this.h || this.m.length > 2048 || this.m.push(a)
    };

    function Ze(a) {
        a && Ve && Xe() && (Ve.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Ve.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }

    function $e(a, b, c, d, e) {
        a.h && a.H(new Ue(b, c, d, e === void 0 ? 0 : e))
    }
    Ye.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new Ue(a, b, Te() || Se());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Ve && Xe() && Ve.mark(b);
        return a
    };
    Ye.prototype.end = function(a) {
        if (this.h && typeof a.value === "number") {
            a.duration = (Te() || Se()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Ve && Xe() && Ve.mark(b);
            this.H(a)
        }
    };

    function af(a, b) {
        if (a.h) {
            var c = a.start("243", 3);
            try {
                b()
            } catch (d) {
                throw Ze(c), d;
            }
            a.end(c)
        } else b()
    };

    function bf() {
        this.i = "&";
        this.h = {};
        this.l = 0;
        this.g = []
    }

    function cf(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function df(a, b, c, d, e) {
        var f = [];
        ze(a, function(g, h) {
            (g = ef(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function ef(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(ef(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(df(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ff(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = gf(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(m, n) {
            return m - n
        });
        b = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], l = 0; l < h.length; l++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                var k = df(h[l], a.i, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.i;
                        break
                    }
                    b = b == null ? g : b
                }
            }
        a = "";
        b != null && (a = e + "trn=" + b);
        return c + a
    }

    function gf(a) {
        var b = 1,
            c;
        for (c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    };

    function hf() {
        var a = jf;
        this.m = kf;
        this.h = a === void 0 ? null : a;
        this.i = null;
        this.l = !1;
        this.F = this.g
    }
    hf.prototype.A = function(a) {
        this.i = a
    };
    hf.prototype.B = function(a) {
        this.l = a
    };
    hf.prototype.J = function(a, b) {
        try {
            if (this.h && this.h.h) {
                var c = this.h.start(a.toString(), 3);
                var d = b();
                this.h.end(c)
            } else d = b()
        } catch (g) {
            b = !0;
            try {
                Ze(c), b = this.F(a, new Ne(g, {
                    message: lf(g)
                }), void 0, void 0)
            } catch (h) {
                this.g(217, h)
            }
            if (b) {
                var e, f;
                (e = window.console) == null || (f = e.error) == null || f.call(e, g)
            } else throw g;
        }
        return d
    };
    hf.prototype.X = function(a, b) {
        var c = this;
        return function() {
            var d = ua.apply(0, arguments);
            return c.J(a, function() {
                return b.apply(void 0, d)
            })
        }
    };
    hf.prototype.g = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new bf;
            f.g.push(1);
            f.h[1] = cf("context", a);
            b.error && b.meta && b.id || (b = new Ne(b, {
                message: lf(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.g.push(2);
                f.h[2] = cf("msg", g)
            }
            var h = b.meta || {};
            if (this.i) try {
                this.i(h)
            } catch (t) {}
            if (d) try {
                d(h)
            } catch (t) {}
            b = [h];
            f.g.push(3);
            f.h[3] = b;
            d = z;
            b = [];
            g = null;
            do {
                var l = d;
                if (xe(l)) {
                    var k = l.location.href;
                    g = l.document && l.document.referrer || null
                } else k = g, g = null;
                b.push(new Qe(k || ""));
                try {
                    d = l.parent
                } catch (t) {
                    d = null
                }
            } while (d &&
                l != d);
            k = 0;
            for (var m = b.length - 1; k <= m; ++k) b[k].depth = m - k;
            l = z;
            if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var n = b[m];
                    n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.W = !0)
                }
            var q = new Qe(z.location.href, !1);
            l = null;
            var x = b.length - 1;
            for (n = x; n >= 0; --n) {
                var B = b[n];
                !l && Oe.test(B.url) && (l = B);
                if (B.url && !B.W) {
                    q = B;
                    break
                }
            }
            B = null;
            var H = b.length && b[x].url;
            q.depth != 0 && H && (B = b[x]);
            var E = new Pe(q, B);
            if (E.h) {
                var ja = E.h.url || "";
                f.g.push(4);
                f.h[4] = cf("top",
                    ja)
            }
            var U = {
                url: E.g.url || ""
            };
            if (E.g.url) {
                var ka = E.g.url.match(ve),
                    gb = ka[1],
                    na = ka[3],
                    oa = ka[4];
                q = "";
                gb && (q += gb + ":");
                na && (q += "//", q += na, oa && (q += ":" + oa));
                var hb = q
            } else hb = "";
            U = [U, {
                url: hb
            }];
            f.g.push(5);
            f.h[5] = U;
            mf(this.m, e, f, this.l, c)
        } catch (t) {
            try {
                mf(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: lf(t),
                    url: E && E.g.url
                }, this.l, c)
            } catch (I) {}
        }
        return !0
    };

    function lf(a) {
        var b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack) a: {
            a = a.stack;
            var c = b;
            try {
                a.indexOf(c) == -1 && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n");
                break a
            } catch (e) {
                b = c;
                break a
            }
            b = void 0
        }
        return b
    };

    function nf() {};

    function of () {
        this.g = Math.random()
    }

    function rf() {
        var a = kf,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }

    function mf(a, b, c, d, e) {
        if (((d === void 0 ? 0 : d) ? a.g : Math.random()) < (e || .01)) try {
            if (c instanceof bf) var f = c;
            else f = new bf, ze(c, function(h, l) {
                var k = f,
                    m = k.l++;
                h = cf(l, h);
                k.g.push(m);
                k.h[m] = h
            });
            var g = ff(f, "/pagead/gen_204?id=" + b + "&");
            g && Ee(z, g)
        } catch (h) {}
    };
    var kf, sf, jf = new Ye(1, window);
    (function(a) {
        kf = a != null ? a : new of ;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        rf();
        sf = new hf;
        sf.A(function() {});
        sf.B(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || jf.F() : jf.h && de(window, "load", function() {
            window.google_measure_js_timing || jf.F()
        })
    })();

    function tf(a, b) {
        return sf.X(a, b)
    };

    function uf(a) {
        this.j = M(a)
    }
    y(uf, R);
    var vf = [0, Zd, -1, Wd, -2, Ud];
    uf.prototype.u = T(vf);

    function wf(a) {
        this.j = M(a)
    }
    y(wf, R);
    var xf = [0, Zd, Xd, vf];
    wf.prototype.u = T(xf);

    function yf(a) {
        this.j = M(a)
    }
    y(yf, R);
    yf.prototype.getName = function() {
        return kd(this, 1)
    };
    var dd = [5];
    var zf = [0, dd, Wd, Zd, Rd, -1, Yd, xf];
    yf.prototype.u = T(zf);

    function Af(a) {
        this.j = M(a)
    }
    y(Af, R);
    Af.prototype.u = T([0, Xd, zf]);
    var Bf = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function Cf() {
        var a = a === void 0 ? "jserror" : a;
        var b = b === void 0 ? .01 : b;
        var c = c === void 0 ? le(Bf) : c;
        this.m = a;
        this.h = null;
        this.i = !1;
        this.H = Math.random();
        this.l = b;
        this.F = this.g;
        this.G = c
    }
    Cf.prototype.A = function(a) {
        this.h = a
    };
    Cf.prototype.B = function(a) {
        this.i = a
    };
    Cf.prototype.g = function(a, b, c, d, e) {
        c = c === void 0 ? this.l : c;
        e = e === void 0 ? this.m : e;
        if ((this.i ? this.H : Math.random()) > c) return !1;
        b.error && b.meta && b.id || (b = new Ne(b, {
            context: a,
            id: e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        z.google_js_errors = z.google_js_errors || [];
        z.google_js_errors.push(b);
        if (!z.error_rep_loaded) {
            b = z.document;
            a = De("SCRIPT", b);
            c = this.G;
            a.src = c instanceof ie && c.constructor === ie ? c.g : "type_error:TrustedResourceUrl";
            var f, g;
            (f = (c = (g = (f = (a.ownerDocument && a.ownerDocument.defaultView ||
                window).document).querySelector) == null ? void 0 : g.call(f, "script[nonce]")) ? c.nonce || c.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", f);
            (f = b.getElementsByTagName("script")[0]) && f.parentNode && f.parentNode.insertBefore(a, f);
            z.error_rep_loaded = !0
        }
        return !1
    };
    Cf.prototype.J = function(a, b) {
        try {
            return b()
        } catch (c) {
            if (!this.F(a, c, this.l, void 0, this.m)) throw c;
        }
    };
    Cf.prototype.X = function(a, b) {
        var c = this;
        return function() {
            var d = ua.apply(0, arguments);
            return c.J(a, function() {
                return b.apply(void 0, d)
            })
        }
    };

    function Df(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };

    function Ef(a) {
        this.j = M(a)
    }
    y(Ef, R);

    function Ff(a) {
        var b;
        void 0 === Pb ? b = 2 : b = 5;
        var c = a.j,
            d = G(c),
            e = 2 & d ? 1 : b;
        b = Xc(c, d, 15);
        var f = F(b);
        if (Tc(a, f, void 0, !1)) {
            if (4 & f || Object.isFrozen(b)) b = vb(b), f = Zc(f, d), d = N(c, d, 15, b);
            for (var g = a = 0; a < b.length; a++) {
                var h = nc(b[a]);
                h != null && (b[g++] = h)
            }
            g < a && (b.length = g);
            f = Yc(f, d);
            f = (f | 20) & -4097;
            f &= -8193;
            J(b, f);
            2 & f && Object.freeze(b)
        }
        var l;
        e === 1 || e === 4 && 32 & f ? $c(f) || (d = f, f |= 2, f !== d && J(b, f), Object.freeze(b)) : (a = e !== 5 ? !1 : !!(32 & f) || $c(f) || !!zc(b), (e === 2 || a) && $c(f) && (b = vb(b), f = Zc(f, d), f = gd(f, d, !1), J(b, f), d = N(c, d, 15, b)),
            $c(f) || (c = f, f = gd(f, d, !1), f !== c && J(b, f)), a && (l = yc(b)));
        return l || b
    };
    var Gf = [0, Ud, -1, Td, Ud, -1, 1, Ud, -3, 1, Ud, -2, Sd, Ud, 1, Ud, -1];
    Ef.prototype.u = T(Gf);

    function Hf(a) {
        this.j = M(a)
    }
    y(Hf, R);
    Hf.prototype.getCorrelator = function() {
        tb(this, Cb);
        return jd(this)
    };
    Hf.prototype.setCorrelator = function(a) {
        return Q(this, 1, a)
    };
    var If = [0, Rd, Zd, Wd, -2, Rd];
    Hf.prototype.u = T(If);

    function Jf(a) {
        this.j = M(a)
    }
    y(Jf, R);
    Jf.prototype.u = T([0, If, Gf]);

    function Kf(a) {
        return a._google_rum_ns_ = a._google_rum_ns_ || {}
    }

    function Lf(a) {
        a = Kf(a);
        return a.pq = a.pq || []
    };

    function Mf() {
        if (!z._google_rum_ns_) return !1;
        var a = Kf(z);
        return !(!a.raf || !a.ric)
    }

    function Nf() {
        var a = Kf(z);
        a.raf = a.raf || [];
        a.ric = a.ric || [];
        return {
            pa: a.raf,
            qa: a.ric
        }
    };

    function Of(a, b, c) {
        ze(b, function(d, e) {
            var f = c && c[e];
            !d && d !== 0 || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0))
        });
        return a
    }

    function Pf(a, b, c, d, e, f, g, h) {
        function l() {
            var m = ua.apply(0, arguments)[0],
                n = m[0];
            m = m[1];
            var q = n.length + m.length + 2;
            k.l + k.i + q > 8E3 && Qf(k);
            k.L.push([n, m]);
            k.i += q;
            k.l + k.i >= 6E3 && Qf(k);
            return 0
        }
        f = f === void 0 ? Infinity : f;
        g = g === void 0 ? !1 : g;
        Ye.call(this, a, h);
        var k = this;
        this.Z = b;
        this.domain = c;
        this.path = d;
        this.aa = e;
        this.G = 0;
        this.A = {};
        this.M = {};
        this.K = [];
        this.B = {};
        this.i = 0;
        this.L = [];
        this.S = f;
        a = this.g.navigator;
        this.R = !(this.domain !== "csi.gstatic.com" || !a || !a.sendBeacon);
        this.g.performance && this.g.performance.now ||
            V(this, "dat", 1);
        a && a.deviceMemory && V(this, "dmc", a.deviceMemory);
        this.g === this.g.top && V(this, "top", 1);
        this.ba = !g;
        this.T = function() {
            k.g.setTimeout(function() {
                Qf(k)
            }, 1100)
        };
        this.U = function() {
            V(k, "uet", 2);
            for (var m = v(k.K), n = m.next(); !n.done; n = m.next()) {
                n = n.value;
                try {
                    n()
                } catch (x) {}
            }
            m = k.g;
            var q = q === void 0 ? {} : q;
            typeof window.CustomEvent === "function" ? n = new CustomEvent("rum_blp", q) : (n = document.createEvent("CustomEvent"), n.initCustomEvent("rum_blp", !!q.bubbles, !!q.cancelable, q.detail));
            m.dispatchEvent(n);
            Qf(k);
            k.A.uet != null && (k.l -= k.A.uet.length + 5, delete k.A.uet)
        };
        this.N = ae(function() {
            Qf(k)
        });
        this.ca = function() {
            var m = k.g.document;
            (m.hidden != null ? m.hidden : m.mozHidden != null ? m.mozHidden : m.webkitHidden != null && m.webkitHidden) && k.N()
        };
        this.I = this.g.setTimeout(function() {
            Qf(k)
        }, 5E3);
        this.l = b.length + c.length + d.length + e.length + 3;
        Qa(this.m, function(m) {
            Rf(k, m)
        });
        b = Lf(this.g);
        Qa(b, function(m) {
            return l(m)
        });
        b.length = 0;
        b.push = l;
        V(this, "puid", (this.G + 1).toString(36) + "~" + Date.now().toString(36));
        Sf(this)
    }
    y(Pf, Ye);

    function Tf(a, b) {
        a.K.push(b)
    }

    function Sf(a) {
        a.g.document.readyState === "complete" ? a.g.setTimeout(function() {
            Qf(a)
        }, 0) : de(a.g, "load", a.T);
        var b = Df(a.g.document);
        typeof b !== "undefined" && de(a.g, b, a.ca);
        de(a.g, "pagehide", a.U)
    }

    function V(a, b, c) {
        c = String(c);
        a.l = a.A[b] != null ? a.l + (c.length - a.A[b].length) : a.l + (b.length + c.length + 2);
        a.A[b] = c
    }

    function Uf(a, b) {
        var c = "ec=" + b;
        a.M[c] || (Vf(a, "ec", b, !1), c.length < 1E3 && (a.M[c] = !0))
    }

    function Vf(a, b, c, d, e) {
        e = e === void 0 ? "" : e;
        var f = a.B[b] == null ? b.length + c.length + 2 : d ? c.length + (e === void 0 ? "" : e).length : c.length - a.B[b].length;
        a.l + a.i + f > 8E3 && (Qf(a), f = b.length + c.length + 2);
        a.B[b] = d && a.B[b] != null ? a.B[b] + ((e === void 0 ? "" : e) + c) : c;
        a.i += f;
        a.l + a.i >= 6E3 && Qf(a)
    }

    function Qf(a) {
        if (a.h && a.ba) {
            try {
                a.i && (a.sendBeacon(a.B), a.G === a.S && a.F())
            } catch (b) {
                (new Cf).g(358, b)
            }
            a.B = {};
            a.i = 0;
            a.m.length = 0;
            a.g.clearTimeout(a.I);
            a.I = 0
        }
    }

    function Wf(a, b) {
        var c = a.Z + "//" + a.domain + a.path + a.aa,
            d = {};
        c = Of(c, a.A, d);
        c = Of(c, b, d);
        b = a.g;
        b.google_timing_params && (c = Of(c, b.google_timing_params, d), b.google_timing_params = void 0);
        Qa(a.L, function(e) {
            var f = v(e);
            e = f.next().value;
            f = f.next().value;
            var g = {};
            c = Of(c, (g[e] = f, g))
        });
        a.L.length = 0;
        return c
    }
    Pf.prototype.sendBeacon = function(a) {
        this.G++;
        a = Wf(this, a);
        var b = !1;
        try {
            b = !!(this.R && this.g.navigator && this.g.navigator.sendBeacon(a, null))
        } catch (c) {
            this.R = !1
        }
        b || Ee(this.g, a);
        V(this, "puid", (this.G + 1).toString(36) + "~" + Date.now().toString(36))
    };

    function Xf(a, b, c, d, e) {
        Vf(a, "met." + b, c, d === void 0 ? !1 : d, e === void 0 ? "~" : e)
    }

    function Yf(a, b) {
        var c = "" + a;
        ze(b, function(d, e) {
            d != null && (c += "." + e + "_" + d)
        });
        return c
    }

    function Zf(a, b, c) {
        c = Yf(b, c);
        var d = {};
        b = (d["met." + b] = c, d);
        a.sendBeacon(b)
    }

    function Rf(a, b) {
        var c = "met." + b.type,
            d = typeof b.value === "number" ? Math.round(b.value).toString(36) : b.value,
            e = Math.round(b.duration);
        b = b.label + (b.slotId != null ? "_" + b.slotId : "") + ("." + d) + (e > 0 ? "_" + e.toString(36) : "") + (b.taskId != null ? "__" + Math.round(b.taskId).toString(36) : "");
        Vf(a, c, b, !0, "~")
    }
    Pf.prototype.H = function(a) {
        this.h && this.G < this.S && (Ye.prototype.H.call(this, a), Rf(this, a))
    };
    Pf.prototype.F = function() {
        Ye.prototype.F.call(this);
        this.g.clearTimeout(this.I);
        this.i = this.I = 0;
        this.B = {};
        ge(this.M);
        ge(this.A);
        ee(this.g, "load", this.T);
        ee(this.g, "pagehide", this.U)
    };
    var $f = {
            self: 1,
            "same-origin-ancestor": 2,
            "same-origin-descendant": 3,
            "same-origin": 4,
            "cross-origin-ancestor": 5,
            "cross-origin-descendant": 6,
            "cross-origin-unreachable": 7,
            "multiple-contexts": 8
        },
        ag = {
            script: 1,
            layout: 2
        },
        bg = {
            iframe: 1,
            embed: 2,
            object: 3
        };

    function cg(a) {
        var b = new wf;
        md(b, 1, $f[a.name]);
        Qa(a.attribution, function(c) {
            var d = new uf;
            md(d, 1, ag[c.name]);
            md(d, 2, bg[c.containerType]);
            typeof c.containerId === "string" && O(d, 6, jc(c.containerId.lastIndexOf("google_ads_iframe", 0) == 0), !1);
            hd(b, 2, uf, d)
        });
        return b
    }

    function dg(a, b) {
        b = fb(b.u(), 4);
        var c = {};
        Zf(a, 6, (c[1] = b, c))
    }

    function eg(a, b) {
        if (b.PerformanceLongTaskTiming && b.PerformanceObserver) {
            var c = 0;
            (new b.PerformanceObserver(tf(246, function(d, e) {
                var f = new Af;
                Qa(d.getEntries(), function(g) {
                    var h = new yf;
                    Q(h, 3, Math.round(g.startTime));
                    Q(h, 4, Math.round(g.duration));
                    g = cg(g);
                    g == null && (g = void 0);
                    a: {
                        var l = h.j,
                            k = G(l);Ob(k);
                        if (g == null) {
                            var m = bd(l);
                            if (cd(m, l, k) === 5) m.set(dd, 0);
                            else break a
                        } else {
                            m = bd(l);
                            var n = cd(m, l, k);
                            n !== 5 && (n && (k = N(l, k, n)), m.set(dd, 5))
                        }
                        N(l, k, 5, g)
                    }
                    hd(f, 1, yf, h)
                });
                dg(a, f);
                ++c >= 10 && e.disconnect()
            }))).observe({
                type: "longtask",
                buffered: !0
            })
        }
    };

    function fg(a) {
        this.j = M(a)
    }
    y(fg, R);
    var gg = [0, Wd, Rd];
    fg.prototype.u = T(gg);

    function hg(a) {
        this.j = M(a)
    }
    y(hg, R);
    hg.prototype.u = T([0, Wd, Ud, Xd, gg, Rd]);

    function ig(a) {
        var b = z;
        b = b === void 0 ? z : b;
        this.l = a;
        this.g = b;
        this.h = 0;
        var c;
        this.i = ((c = this.g.navigator) == null ? void 0 : c.sendBeacon) != null
    }

    function jg(a, b, c) {
        c = c === void 0 ? 0 : c;
        var d = a.g !== a.g.top,
            e = b.slice(a.h);
        b = e.splice(0, 250 - a.h);
        if (d && a.i && b) {
            d = new hg;
            d = O(d, 1, vc(a.l), "");
            e = O(d, 2, jc(!!e.length), !1);
            d = b;
            var f = e.j,
                g = G(f);
            Ob(g);
            if (d == null) N(f, g, 3);
            else {
                d = Fc(d);
                for (var h = F(d), l = h, k = !!(2 & h) || !!(2048 & h), m = k || Object.isFrozen(d), n = !m && (void 0 === Qb || !1), q = !0, x = !0, B = 0; B < d.length; B++) {
                    var H = d[B];
                    k || (H = !!(F(H.j) & 2), q && (q = !H), x && (x = H))
                }
                k || (h |= 5, h = q ? h | 8 : h & -9, h = x ? h | 16 : h & -17);
                if (n || m && h !== l) d = vb(d), l = 0, h = Zc(h, g), h = gd(h, g, !0);
                h !== l && J(d, h);
                N(f, g, 3,
                    d)
            }
            c = Q(e, 4, c);
            c = fb(c.u(), 4);
            try {
                var E;
                a.i && ((E = a.g.navigator) == null || E.sendBeacon("https://pagead2.googlesyndication.com/pagead/gen_204?id=urind", c))
            } catch (ja) {
                a.i = !1
            }
            a.h += b.length
        }
    };

    function kg(a) {
        var b = a.position;
        a = a.timestamp;
        return Math.round(b).toString(36) + "." + Math.round(a).toString(36)
    }

    function lg(a) {
        var b = this;
        this.i = -1;
        this.l = -Infinity;
        this.g = [];
        this.h = a;
        this.m = 0;
        this.B = tf(456, function() {
            return mg(b)
        });
        this.A = function() {
            return ng(b)
        }
    }
    lg.prototype.install = function() {
        z.performance && (mg(this), de(z, "scroll", this.B, {
            passive: !0
        }), Tf(this.h, this.A))
    };

    function mg(a) {
        var b = z.pageYOffset || 0,
            c = Te() || 0;
        if (Math.abs(b - a.i) > 100 || c - a.l > 200) a.i = b, a.l = c, a.g.push({
            position: b,
            timestamp: c
        }) >= 400 && (ng(a), a.m >= 8 && (ee(z, "scroll", a.B), b = a.h.K, a = Pa(b, a.A), a >= 0 && Array.prototype.splice.call(b, a, 1)))
    }

    function ng(a) {
        a.g.length && (Xf(a.h, 12, Ta(a.g, kg).join("~")), a.g = [], a.m++)
    };

    function og(a) {
        var b;
        a = ((b = a === void 0 ? null : a) != null ? b : window).googletag;
        return (a == null ? 0 : a.apiReady) ? a : void 0
    };

    function pg(a) {
        var b = og(a);
        return b ? Ra(Ta(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return c != null
        }) : null
    }

    function qg(a, b) {
        a = a.document.querySelectorAll(b);
        b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            a = c
        } else a = [];
        return a
    }

    function rg(a) {
        var b = [];
        a = v(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };

    function sg(a) {
        a = a.document;
        var b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function tg(a) {
        var b;
        return (b = sg(a).clientWidth) != null ? b : void 0
    };

    function ug(a, b) {
        this.i = a;
        this.g = b;
        this.h = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
    }

    function vg(a, b) {
        var c = (Fa && Ka ? Ka.mobile : !(Fa && Ka ? !Ka.mobile && (A("iPad") || A("Android") || A("Silk")) : A("iPad") || A("Android") && !A("Mobile") || A("Silk")) && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))) && !(tg(a.i) >= 900),
            d = Ra([], function(e) {
                return Pa(a.h, e) >= 0
            }).join(",");
        return {
            wpc: "",
            su: b,
            eid: d,
            doc: a.g.la,
            pg_h: W(a.g.xa),
            pg_w: W(a.g.za),
            pg_hs: W(a.g.ya),
            c: W(a.g.sa),
            aa_c: W(a.g.fa),
            av_h: W(a.g.ha),
            av_w: W(a.g.ia),
            av_a: W(a.g.ga),
            s: W(a.g.wa),
            all_s: W(a.g.va),
            b: W(a.g.ua),
            all_b: W(a.g.ta),
            d: W(a.g.ka),
            all_d: W(a.g.ja),
            ard: W(a.g.ea),
            all_ard: W(a.g.da),
            pd_h: W(a.g.Aa),
            dt: c ? "m" : "d"
        }
    }

    function wg(a) {
        return ne.apply(null, Ra(a, function(b) {
            return b > 0
        })) || null
    }

    function xg(a, b) {
        return a <= 0 ? null : me.apply(null, b) / a
    }

    function yg(a) {
        for (var b = Infinity, c = 0; c < a.length - 1; c++)
            for (var d = c + 1; d < a.length; d++) {
                var e = a[c],
                    f = a[d];
                e = Math.max(Math.max(0, e.left - f.right, f.left - e.right), Math.max(0, e.top - f.bottom, f.top - e.bottom));
                e > 0 && (b = Math.min(e, b))
            }
        return b !== Infinity ? b : null
    }

    function W(a) {
        return a == null ? null : r(Number, "isInteger").call(Number, a) ? a.toString() : a.toFixed(3)
    };

    function zg(a, b) {
        var c = navigator;
        c = c.getBattery && c.getBattery();
        c != null && c.then ? c.then(function(d) {
            var e = d.level,
                f = d.charging;
            setTimeout(function() {
                b(e * 100 | 0, d.level * 100 | 0, f || d.charging)
            }, a)
        }) : b()
    };
    var Ag = /^.+\.((googlesyndication|googletagservices)\.com|doubleclick\.net)$/,
        Bg = /^(aswift_\d+|google_ads_iframe_.+)$/,
        Cg = /^div-gpt-ad-.+$/,
        Dg = ["ZGl2LnRhYm9vbGE=", "ZGl2Lk9VVEJSQUlO"];

    function Eg(a) {
        if (!a) return "";
        var b = Math.floor(Math.random() * a.length);
        return b.toString(36) + encodeURIComponent(a.charAt(b)) + "." + Be(a).toString(36)
    }

    function Fg(a) {
        return (a = we(Ea(a).match(ve)[3] || null)) ? a.toLowerCase() : ""
    }

    function Gg(a) {
        return a.offsetWidth >= 10 && a.offsetHeight >= 10
    }

    function te(a) {
        return a && a.nodeType === 1 && a.nodeName === "DIV" ? Cg.test(a.id) || a.hasAttribute("data-google-query-id") : !1
    }

    function Hg(a) {
        var b = [];
        if (!a.body) return b;
        var c = a.body;
        a = c.getElementsByTagName("script");
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e],
                g = f.src;
            g && (f = (f.nextElementSibling !== void 0 ? f.nextElementSibling : qe(f.nextSibling, !0)) || f.parentElement || null) && f.nodeName === "DIV" && Gg(f) && (g = Fg(g)) && !Ag.test(g) && b.push(new Ig(f, g))
        }
        if (!c.querySelectorAll) return b;
        Qa(Dg, function(h) {
            for (var l = c.querySelectorAll(jb(h)), k = l.length, m = 0; m < k; m++) {
                var n = l[m];
                Gg(n) && b.push(new Ig(n, h))
            }
        });
        return b
    }

    function Ig(a, b, c) {
        this.id = b;
        this.g = c === void 0 ? null : c;
        var d = re(a);
        b = new oe(0, 0);
        if (a != (d ? re(d) : document).documentElement) {
            c = Le(a);
            var e = (d ? new ue(re(d)) : ya || (ya = new ue)).g;
            d = e.scrollingElement ? e.scrollingElement : ab || e.compatMode != "CSS1Compat" ? e.body || e.documentElement : e.documentElement;
            e = e.defaultView;
            d = new oe(e.pageXOffset || d.scrollLeft, e.pageYOffset || d.scrollTop);
            b.x = c.left + d.x;
            b.y = c.top + d.y
        }
        b: {
            c = re(a);
            if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                c =
                    c.display || c.getPropertyValue("display") || "";
                break b
            }
            c = ""
        }
        c || (c = a.currentStyle ? a.currentStyle.display : null);
        if ((c || a.style && a.style.display) != "none") a = Me(a);
        else {
            c = a.style;
            d = c.display;
            e = c.visibility;
            var f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = Me(a);
            c.display = d;
            c.position = f;
            c.visibility = e
        }
        a = new Fe(b.x, b.y, a.width, a.height);
        this.top = a.top;
        this.left = a.left;
        this.width = a.width;
        this.height = a.height
    }

    function Jg(a) {
        a = ye(a);
        if (!a) return null;
        var b = a.document;
        a = Hg(b);
        var c = [];
        Va(c, b.getElementsByTagName("iframe"));
        for (b = 0; b < Math.min(c.length, 50); b++) {
            var d = c[b],
                e = d.src ? Ea(d.src) : "",
                f = d.id || d.name || "";
            if (!Bg.test(f)) try {
                var g = d.contentDocument || d.contentWindow.document;
                if (e && d.src !== "about:blank") Va(a, Hg(g)), Va(c, g.getElementsByTagName("iframe"));
                else {
                    var h = null,
                        l = d.previousElementSibling !== void 0 ? d.previousElementSibling : qe(d.previousSibling, !1);
                    if (l && l.nodeName === "SCRIPT" && l.src) {
                        var k = Fg(l.src);
                        h = Ag.test(k) ? null : k
                    }((h = h || f) || !se(d)) && Gg(d) && a.push(new Ig(d, h))
                }
            } catch (n) {
                h = Fg(e), e = (e = we(e.match(ve)[5] || null)) && e.charAt(0) === "/" ? e.split("/", 2)[1] : "", Gg(d) && !Ag.test(h) && a.push(new Ig(d, h || f, e))
            }
        }
        Wa(a, function(n, q) {
            return n.top !== q.top ? n.top - q.top : n.left - q.left
        });
        var m = null;
        return Ra(a, function(n) {
            if (m != null && n.top + n.height <= m.top + m.height && n.left + n.width <= m.left + m.width) return !1;
            m = n;
            return !0
        })
    };
    var Kg = !1;

    function Lg(a, b, c) {
        function d(m) {
            Kg && (b.push(m - f), f = m, k && (c.push(g || 0), h || (g = 0, h = k(l))), e(d))
        }
        if (!Kg) {
            Kg = !0;
            var e = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
            if (Ce(e)) {
                var f, g, h, l, k = a.requestIdleCallback;
                k && (l = function(m) {
                    g = m.timeRemaining();
                    h = 0
                });
                e(function(m) {
                    f = m;
                    k && (h = k(l));
                    e(d)
                })
            }
        }
    };

    function Mg(a) {
        var b = 0,
            c = 0,
            d, e, f;
        a = (f = (d = a.performance) == null ? void 0 : (e = d.getEntriesByType) == null ? void 0 : e.call(d, "paint")) != null ? f : [];
        d = v(a);
        for (e = d.next(); !e.done; e = d.next()) switch (e = e.value, f = e.startTime, e.name) {
            case "first-paint":
                b = f;
                break;
            case "first-contentful-paint":
                c = f
        }
        return {
            oa: b,
            na: c
        }
    };

    function Ng(a) {
        this.j = M(a)
    }
    y(Ng, R);
    var Og = [0, Vd, Rd, Zd];
    Ng.prototype.u = T(Og);

    function Pg(a) {
        this.j = M(a)
    }
    y(Pg, R);
    Pg.prototype.u = T([0, Zd, -2, Rd, -16, Og, Ud, Zd, Rd, Ud]);

    function Qg(a) {
        return new RegExp("/pagead/js/(r\\d+|dev)/r\\d+/(.*/)?" + a + "(_fy20\\d\\d)?\\.js")
    }
    var Y = {},
        Rg = {},
        Z = {},
        Sg = {},
        Tg = {},
        Ug = {},
        Vg = {},
        Wg = {},
        Xg = {},
        Yg = {},
        Zg = {},
        $g = {},
        ah = [{
            C: RegExp("^https?://((tpc|pagead2)\\.googlesyndication\\.com|static\\.googleadsserving\\.cn)/pagead/"),
            resources: (Y[1] = /adsbygoogle\.js/, Y[2] = /show_ads\.js/, Y[3] = /show_ads_impl(_with_ama)?(_fy20\d\d)?\.js/, Y[21] = /js\/r\d+\/r\d+\/osd\.js/, Y[22] = /\/osd\.js/, Y[7] = /activeview\/osd_listener\.js/, Y[8] = /lidar\.js/, Y[4] = /imgad\?id=/, Y[24] = /js\/(r\d+|dev)\/r\d+\/rum\.js/, Y[25] = /js\/rum\.js/, Y[33] = /\/pagead\/adview\?ai=/, Y[61] = /\/pagead\/managed\/js\/config_2_5__\d+\.json\?domain=/,
                Y[62] = /\/pagead\/managed\/js\/config_12_5__\d+\.json\?domain=/, Y[60] = /\/pagead\/ppub_config/, Y[67] = /pagead\/managed\/js\/gpt\/m\d+\/pubads_impl(_fy\d+)?\.js/, Y[10] = Qg("m_js_controller"), Y[9] = Qg("abg_lite"), Y[65] = Qg("spam_signals_bundle"), Y[66] = Qg("bgl"), Y[30] = Qg("window_focus"), Y[75] = Qg("interstitial_ad_frame"), Y[76] = Qg("fullscreen_api_adapter"), Y),
            v: 28
        }, {
            C: /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com\//,
            resources: (Rg[4] = /pageadimg(\/imgad)?\?id=/, Rg[23] = /(daca_images\/)?simgad\/\d+/, Rg[29] =
                /icore_images\/\d+/, Rg[11] = /pub-config\/r\d+\/ca-pub-\d+\.js/, Rg[16] = /\/safeframe\/\d+-\d+-\d+\/html\/container\.html/, Rg[17] = /\/safeframe\/\d+-\d+-\d+\/js\/ext\.js/, Rg[31] = /\/sadbundle\//, Rg[32] = /(\/pcs)?\/activeview\?(xai|avi)=/, Rg[80] = /\/tag\/js\/gpt\.js/, Rg),
            v: 39
        }, {
            C: /^https?:\/\/\w+\.g\.doubleclick\.net/,
            resources: (Z[59] = /\/tag\/js\/gpt\.js/, Z[14] = /\/gpt\/pubads_impl_\d+\.js/, Z[67] = /pagead\/managed\/js\/gpt\/m\d+\/pubads_impl(_fy\d+)?\.js/, Z[43] = /\/gpt\/pubads_impl_core_\d+\.js/, Z[15] = /\/gampad\/ads\?/,
                Z[34] = /\/pcs\/view\?xai=/, Z[36] = /^https?:\/\/cm\.g\./, Z[5] = /pagead\/ads\?/, Z[12] = /pagead\/html\/.*\/zrt_lookup\.html/, Z[33] = /\/pagead\/adview\?ai=/, Z[61] = /\/pagead\/managed\/js\/config_2_5__\d+\.json\?domain=/, Z[62] = /\/pagead\/managed\/js\/config_12_5__\d+\.json\?domain=/, Z[60] = /\/pagead\/ppub_config/, Z[70] = /\/td\/sts/, Z[71] = /\/td\/sjs/, Z[72] = /\/td\/bts/, Z[73] = /\/td\/bjs/, Z[74] = /\/td\/adfetch\/gda\?/, Z),
            v: 40
        }, {
            C: /^https?:\/\/www\.googletagservices\.com/,
            resources: (Sg[13] = /\/tag\/js\/gpt\.js/, Sg[37] =
                /\/dcmads\.js/, Sg[38] = /\/dcm\/impl_v\d+\.js/, Sg[77] = /\/activeview\/js\/current\/rx_lidar\.js/, Sg[81] = /\/activeview\/js\/current\/ufs_web_display\.js/, Sg),
            v: 42
        }, {
            C: /^https?:\/\/fonts\.googleapis\.com\/css/,
            resources: (Tg[18] = /[?&]family=/, Tg),
            v: 27
        }, {
            C: /^https?:\/\/fonts\.gstatic\.com/,
            resources: (Ug[19] = /\/s\//, Ug[20] = /\/l\//, Ug),
            v: 27
        }, {
            C: /^https:\/\/[\w.]+.2mdn.net/,
            resources: (Vg[31] = /\/sadbundle\//, Vg),
            v: 41
        }, {
            C: /^https:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}/,
            resources: (Wg[46] = /\/adsid\/integrator\.json/,
                Wg[47] = /\/adsid\/integrator\.js/, Wg[48] = /\/adsid\/integrator\.sync\.js/, Wg),
            v: 45
        }, {
            C: /^https?:\/\/cdn\.ampproject\.org/,
            resources: (Xg[49] = /\/rtv\/\d{15,20}\/amp4ads-host-v0\.js\b/, Xg[50] = /\.org\/amp4ads-host-v0\.js\b/, Xg),
            v: 51
        }, {
            C: /^https?:\/\/imasdk.googleapis.com/,
            resources: (Yg[54] = /js\/sdkloader\/ima3.js/, Yg[55] = /js\/core\/bridge3.*html/, Yg[56] = /js\/sdkloader\/loader.js/, Yg[57] = /js\/sdkloader\/vpaid_adapter.js/, Yg),
            v: 58
        }, {
            C: /^https?:\/\/fundingchoicesmessages\.google\.com/,
            resources: (Zg[64] = /\/i\/.*\?ers=\d.*/,
                Zg),
            v: 63
        }, {
            C: /^https?:\/\/.*\.googlevideo\.com/,
            resources: ($g[78] = /\/videoplayback/, $g),
            v: 79
        }, {
            C: /./,
            resources: {},
            v: 27
        }],
        bh = {},
        ch = [{
            C: /^https?:\/\//,
            resources: (bh[26] = function(a) {
                return Ke && !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(a)
            }, bh),
            v: 27
        }];

    function dh(a) {
        switch (a) {
            case "audio":
                return 15;
            case "beacon":
                return 1;
            case "css":
                return 2;
            case "fetch":
                return 4;
            case "iframe":
                return 5;
            case "img":
                return 6;
            case "link":
                return 7;
            case "navigation":
                return 8;
            case "object":
                return 9;
            case "script":
                return 10;
            case "subdocument":
                return 11;
            case "svg":
                return 12;
            case "track":
                return 16;
            case "video":
                return 14;
            case "xmlhttprequest":
                return 13;
            default:
                return 0
        }
    }
    var eh = {
            woff: 1,
            woff2: 2,
            eot: 3,
            ttf: 4
        },
        fh = /^https?:\/\/[^/?#]*\b(google(adservices|tag(manager|services)|apis|usercontent|syndication|video)?|doubleclick|gstatic|2mdn|cdn.ampproject)\./,
        gh = {},
        hh = (gh[1] = !0, gh[4] = !0, gh[13] = !0, gh);

    function ih(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        var e = fh.test(a) ? 1 : 0,
            f = e != 1,
            g = Ua(f ? ch : ah, function(h) {
                return h.C.test(a)
            });
        if (!g) return null;
        g = Ae(g.resources, function(h) {
            return typeof h === "function" ? h(a) : h.test(a)
        }) || g.v;
        return !g || f && b != 2 && hh[c] && (!d || c != 13) ? null : {
            ma: e,
            id: parseInt(g, 10)
        }
    }

    function jh(a, b, c, d, e, f) {
        var g = dh(a.initiatorType),
            h = ih((f === void 0 ? "" : f) || a.name, d, g, e);
        if (h) {
            d = b.push;
            f = h.id;
            h = h.ma;
            var l = new Pg;
            l = md(l, 1, f);
            l = md(l, 3, h);
            g = md(l, 2, g);
            g = Q(g, 4, Math.round(a.startTime));
            g = Q(g, 7, Math.round(a.duration));
            l = a.name;
            try {
                if (e) {
                    e = 125;
                    var k = /[\?#;]/.exec(l);
                    k && k.index != -1 && k.index < e && (e = k.index);
                    Q(g, 24, Be(l.substr(0, e)))
                }
            } catch (x) {}
            if (h == 1 || f == 26) {
                k = Q(g, 5, Math.round(a.fetchStart));
                Q(k, 6, Math.round(a.responseEnd));
                b: {
                    e = a.name;f = ld(g, 1);k = new Ng;
                    switch (f) {
                        case 18:
                            if (e = e.match(/[?&]family=([^&]+)/))
                                if (e =
                                    z.decodeURIComponent(e[1]).split("|"), f = k.j, h = G(f), Ob(h), e == null) N(f, h, 1);
                                else {
                                    e = Fc(e);
                                    var m = l = F(e),
                                        n = !!(2 & l) || Object.isFrozen(e),
                                        q = !n && (void 0 === Qb || !1);
                                    if (Tc(k, l))
                                        for (l = 21, n && (e = vb(e), m = 0, l = Zc(l, h), l = gd(l, h, !0)), n = 0; n < e.length; n++) e[n] = uc(e[n]);
                                    q && (e = vb(e), m = 0, l = Zc(l, h), l = gd(l, h, !0));
                                    l !== m && J(e, l);
                                    N(f, h, 1, e)
                                }
                            break;
                        case 19:
                            if (e = e.match(/\/s\/(\w+)\/v(\d+)\/[^.\/]+\.(\w+)$/)) f = z.parseInt(e[2], 10), f = Q(k, 2, f), f = md(f, 3, eh[e[3]] || 0), ad(f.j, e[1]);
                            break;
                        case 20:
                            (f = e.match(/[?&]skey=([^&]+)/)) && ad(k.j, f[1]);
                            if (e = e.match(/[?&]v=v(\d+)/)) e = z.parseInt(e[1], 10), Q(k, 2, e);
                            break;
                        default:
                            break b
                    }
                    fd(g, 21, k)
                }
                a.responseStart && (O(g, 22, jc(!0), !1), a.domainLookupStart != a.domainLookupEnd && (k = Q(g, 8, Math.round(a.domainLookupStart)), Q(k, 9, Math.round(a.domainLookupEnd))), a.connectStart != a.connectEnd && (k = Q(g, 10, Math.round(a.connectStart)), Q(k, 11, Math.round(a.connectEnd)), a.secureConnectionStart && Q(g, 12, Math.round(a.secureConnectionStart))), k = Q(g, 13, Math.round(a.requestStart)), Q(k, 14, Math.round(a.responseStart)), a.transferSize !==
                    void 0 && (k = Q(g, 15, a.transferSize), k = Q(k, 17, a.decodedBodySize || 0), Q(k, 16, a.encodedBodySize || 0), a.transferSize > 0 ? md(g, 23, a.transferSize > (a.encodedBodySize || 0) ? 3 : 2) : md(g, 23, 1)), a.redirectStart && (k = Q(g, 18, Math.round(a.redirectStart)), Q(k, 19, Math.round(a.redirectEnd))), c && window.performance.timing && Q(g, 20, c))
            }
            d.call(b, g)
        }
    }

    function kh(a) {
        return a.performance && a.performance.timing && a != z && z.performance != null && z.performance.timing != null ? a.performance.timing.navigationStart - z.performance.timing.navigationStart : 0
    }

    function lh(a, b, c, d, e) {
        if (d && d.length) {
            var f = [],
                g = !1;
            d = v(d);
            for (var h = d.next(); !h.done; h = d.next()) h = h.value, h.entryType === "resource" ? jh(h, f, kh(b), c, e) : h.entryType !== "navigation" || g || (jh(h, f, kh(b), c, e, b.location ? b.location.href : ""), g = !0);
            b = Ta(f, function(l) {
                return fb(l.u(), 4)
            }).join("~");
            Xf(a, 7, b, !0)
        }
    }

    function mh(a) {
        return Ta(a.performance && a.performance.getEntriesByType ? a.performance.getEntriesByType("resource") : [], function(b) {
            var c = (b && b.name || "").replace(/\?.*$/, ""),
                d = new fg;
            c = O(d, 1, vc(c), "");
            return Q(c, 2, b.startTime)
        })
    };

    function nh(a) {
        this.j = M(a)
    }
    y(nh, R);
    nh.prototype.u = T([0, Rd, Zd]);
    var oh = window == window.top ? 32 : 16,
        ph = {
            unloadEventStart: 2,
            unloadEventEnd: 3,
            redirectStart: 4,
            redirectEnd: 5,
            fetchStart: 6,
            domainLookupStart: 7,
            domainLookupEnd: 8,
            connectStart: 9,
            connectEnd: 10,
            secureConnectionStart: 11,
            requestStart: 12,
            responseStart: 13,
            responseEnd: 14,
            domLoading: 15,
            domInteractive: 16,
            domContentLoadedEventStart: 17,
            domContentLoadedEventEnd: 18,
            domComplete: 19,
            loadEventStart: 20,
            loadEventEnd: 21
        };

    function qh(a) {
        return (a = ed(a, Hf, 1)) ? ld(a, 2) : 0
    }

    function rh(a) {
        var b = ed(a, Ef, 2);
        b || (b = new Ef, fd(a, 2, b));
        qh(a) == 2 && (a = O(b, 7, jc(!0), !1), a = O(a, 9, jc(!0), !1), O(a, 10, jc(!0), !1));
        return b
    }

    function sh(a, b) {
        ld(b, 2) !== 2 || Kf(z).chp || V(a, "chm", 1);
        jd(b) && V(a, "c", jd(b));
        kd(b, 5) && V(a, "e", kd(b, 5));
        V(a, "ctx", ld(b, 2));
        V(a, "gqid", kd(b, 3));
        V(a, "qqid", kd(b, 4))
    }

    function th(a) {
        var b = new Jf(z.google_rum_config || null),
            c = rh(b),
            d = Ff(c),
            e = ed(b, Hf, 1) || new Hf;
        d.length && O(e, 5, vc(d.join()), "");
        sh(a, e);
        d = new ig(kd(e, 4));
        if (e = z.google_js_reporting_queue) {
            var f = function(g) {
                a.H(g);
                Ze(g)
            };
            e.push = f;
            Qa(e, f);
            e.length = 0
        }
        Tf(a, function() {
            var g = Te();
            g && $e(a, "24", 1, g, 0)
        });
        uh(z, a, b, c, d);
        qh(b) === 2 && vh() && uh(z.parent, a, b, c, d)
    }

    function vh() {
        var a = z.parent;
        return xe(a) && a !== a.top && a.document.querySelector("iframe#ad_iframe") != null
    }

    function uh(a, b, c, d, e) {
        (P(d, 12) || P(d, 9) && Math.random() < .1) && eg(b, a);
        var f = qh(c),
            g = null;
        if (P(d, 7) && a.PerformanceObserver) {
            g = new a.PerformanceObserver(function(h) {
                lh(b, a, f, h == null ? void 0 : h.getEntries(), P(d, 13))
            });
            try {
                try {
                    g.observe({
                        type: "resource",
                        buffered: !0
                    }), g.observe({
                        type: "navigation",
                        buffered: !0
                    })
                } catch (h) {
                    g.observe({
                        entryTypes: ["resource", "navigation"]
                    })
                }
                Tf(b, function() {
                    var h, l;
                    lh(b, a, f, (l = (h = g).takeRecords) == null ? void 0 : l.call(h), P(d, 13))
                });
                f == 1 && wh(a, b, d, f, g)
            } catch (h) {}
        }
        Tf(b, function() {
            if (P(d,
                    18) && P(d, 19)) {
                var h;
                jg(e, mh(a), (h = Te()) != null ? h : 0)
            } else P(d, 18) && jg(e, mh(a))
        });
        a == a.top && P(d, 14) && (new lg(b)).install();
        xh(b, a, d, f, g, e)
    }

    function xh(a, b, c, d, e, f) {
        var g = tf(113, function() {
            P(c, 10) && yh(a, b);
            zh(a, b);
            Ah(a, b, c, d, e, f);
            if (d == 1 && P(c, 16)) {
                var h = sg(b);
                h = h.scrollHeight === sg(b).clientHeight ? h.offsetHeight : h.scrollHeight;
                var l = sg(b).scrollWidth,
                    k = sg(b).scrollHeight,
                    m = "unknown";
                b && b.document && b.document.readyState && (m = b.document.readyState);
                var n = b.pageYOffset === void 0 ? (b.document.documentElement || b.document.body.parentNode || b.document.body).scrollTop : b.pageYOffset,
                    q = [],
                    x = [],
                    B = [],
                    H = [],
                    E = [],
                    ja = [],
                    U = [],
                    ka = 0,
                    gb = 0,
                    na = Infinity,
                    oa = Infinity,
                    hb = null,
                    t = {
                        ra: !1
                    },
                    I = qg(b, ".google-auto-placed"),
                    w = qg(b, "ins.adsbygoogle[data-anchor-status]"),
                    C = qg(b, "ins.adsbygoogle[data-ad-format=autorelaxed]");
                var Ha = (pg(b) || qg(b, "div[id^=div-gpt-ad]")).concat(qg(b, "iframe[id^=google_ads_iframe]"));
                var Ch = qg(b, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
                    Dh = qg(b, "ins.adsbygoogle-ablated-ad-slot"),
                    Eh = qg(b, "div.googlepublisherpluginad"),
                    Fh = qg(b, "html > ins.adsbygoogle"),
                    D = [].concat(qg(b, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), qg(b, "body ins.adsbygoogle")),
                    X = [];
                t = v([
                    [t.Ca, I],
                    [t.ra, w],
                    [t.Fa, C],
                    [t.Da, Ha],
                    [t.Ga, Ch],
                    [t.Ba, Dh],
                    [t.Ea, Eh],
                    [t.Ha, Fh]
                ]);
                for (I = t.next(); !I.done; I = t.next()) w = v(I.value), I = w.next().value, w = w.next().value, I === !1 ? X = X.concat(w) : D = D.concat(w);
                D = rg(D);
                t = rg(X);
                X = D.slice(0);
                D = v(t);
                for (t = D.next(); !t.done; t = D.next())
                    for (t = t.value,
                        I = 0; I < X.length; I++)(t.contains(X[I]) || X[I].contains(t)) && X.splice(I, 1);
                X = v(X);
                for (D = X.next(); !D.done; D = X.next()) {
                    D = D.value;
                    t = D.getBoundingClientRect();
                    I = h - (t.bottom + n);
                    if (D.className && D.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                        w = D.getAttribute("google_element_uid");
                        C = b.google_sv_map;
                        if (!w || !C || !C[w]) continue;
                        a: {
                            w = C[w];C = Number(w.google_ad_width);Ha = Number(w.google_ad_height);
                            if (!(C > 0 && Ha > 0)) {
                                b: {
                                    try {
                                        var ob = String(w.google_ad_format);
                                        if (ob && ob.match) {
                                            var pb = ob.match(/(\d+)x(\d+)/i);
                                            if (pb) {
                                                var pf =
                                                    parseInt(pb[1], 10),
                                                    qf = parseInt(pb[2], 10);
                                                if (pf > 0 && qf > 0) {
                                                    var Sa = {
                                                        width: pf,
                                                        height: qf
                                                    };
                                                    break b
                                                }
                                            }
                                        }
                                    } catch (Lh) {}
                                    Sa = null
                                }
                                if (!Sa) {
                                    w = null;
                                    break a
                                }
                                C = C > 0 ? C : Sa.width;Ha = Ha > 0 ? Ha : Sa.height
                            }
                            w = {
                                width: C,
                                height: Ha
                            }
                        }
                        w = (C = w) ? C.height : 0;
                        C = C ? C.width : 0
                    } else if (w = t.bottom - t.top, C = t.right - t.left, w <= 1 || C <= 1) continue;
                    q.push(w);
                    B.push(C);
                    H.push(w * C);
                    D.className && D.className.indexOf("google-auto-placed") != -1 ? (gb += 1, D.className && D.className.indexOf("pedestal_container") != -1 && (hb = w)) : (na = Math.min(na, I), ja.push(t), ka += 1, x.push(w),
                        E.push(w * C));
                    oa = Math.min(oa, I);
                    U.push(t)
                }
                na = na === Infinity ? null : na;
                oa = oa === Infinity ? null : oa;
                Sa = yg(ja);
                U = yg(U);
                x = xg(h, x);
                ob = xg(h, q);
                E = xg(h * l, E);
                pb = xg(h * l, H);
                h = new ug(b, {
                    la: m,
                    xa: h,
                    za: l,
                    ya: k,
                    sa: ka,
                    fa: gb,
                    ha: wg(q),
                    ia: wg(B),
                    ga: wg(H),
                    wa: Sa,
                    va: U,
                    ua: na,
                    ta: oa,
                    ka: x,
                    ja: ob,
                    ea: E,
                    da: pb,
                    Aa: hb
                });
                h = vg(h, b.location.hostname);
                l = "V";
                nf.V && nf.hasOwnProperty(l) || (l = new nf, nf.V = l);
                l = [];
                !h.eid && l.length && (h.eid = l.toString());
                mf(kf, "ama_stats", h, !0, 1)
            }
        });
        b.document.readyState != "complete" ? de(b, "load", function() {
            b.setTimeout(g,
                0)
        }) : g()
    }

    function zh(a, b) {
        var c = b.google_rum_values || Kf(b).rv;
        b.google_rum_values = void 0;
        Kf(b).rv = void 0;
        if (c && !(c.dt < 0) && (b = b.performance && b.performance.timing)) {
            var d = c.dt - b.navigationStart;
            ze(c, function(e, f) {
                if (e != -1 && typeof e === "number") {
                    switch (f) {
                        case "dt":
                            e = d;
                            break;
                        case "bdt":
                            e = d - e;
                            break;
                        default:
                            e = d + e
                    }
                    $e(a, f, 4, e)
                }
            })
        }
    }

    function Ah(a, b, c, d, e, f) {
        P(c, 1) && Bh(a, b);
        P(c, 2) && id(c) > 0 && Gh(a, id(c));
        P(c, 7) && Hh(a, b, c, d, e);
        P(c, 8) && Math.random() < .1 && af(a, function() {
            return Ih(a, b)
        });
        P(c, 18) && jg(f, mh(b))
    }

    function Hh(a, b, c, d, e) {
        var f;
        lh(a, b, d, (f = e.takeRecords) == null ? void 0 : f.call(e), P(c, 13))
    }

    function Jh(a, b, c) {
        var d = Te();
        if (d && (b.length || c.length)) {
            var e = {};
            d = (e[3] = d.toString(36), e);
            b.length && (d[1] = Ta(b, function(f) {
                f = Math.min(Math.max(f, 0), 4095);
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_." [f >> 6] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_." [f & 63]
            }).join(""));
            c.length && (d[2] = Ta(c, function(f) {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_." [Math.min(Math.max(f, 0), 63) | 0]
            }).join(""));
            Xf(a, 5, Yf(5, d), !0, ".")
        }
    }

    function Kh(a) {
        if (Mf()) {
            var b = Nf(),
                c = b.pa,
                d = b.qa,
                e = tf(400, function() {
                    c.length || d.length ? (Jh(a, c, d), c.length = 0, d.length = 0, z.setTimeout(e, 1E4)) : (c.push = function() {
                        return 0
                    }, d.push = function() {
                        return 0
                    })
                });
            z.setTimeout(e, 1E4)
        }
    }

    function Bh(a, b) {
        var c = [],
            d = [];
        Lg(b, c, d);
        b.setTimeout(tf(400, function() {
            Kg = !1;
            Jh(a, c, d)
        }), 1E4)
    }

    function Gh(a, b) {
        zg(b, function(c, d, e) {
            if (c != null && d != null && e != null) {
                var f = {};
                f[1] = b;
                f[2] = c;
                f[3] = d;
                f[4] = e;
                Zf(a, 8, f)
            }
        })
    }

    function yh(a, b) {
        var c = b.performance && b.performance.timing;
        if (c) {
            var d = c.navigationStart;
            d > 0 && ($e(a, "1", 1, d), ze(ph, function(f, g) {
                g = c[g];
                g > 0 && $e(a, String(f), 1, g - d)
            }));
            var e = Mg(b);
            b = e.oa;
            e = e.na;
            b && $e(a, "22", 1, b);
            e && $e(a, "23", 1, e)
        }
    }

    function Ih(a, b) {
        if (b = Jg(b)) 10 < b.length && (b.length = 10), Uf(a, Ta(b, function(c) {
            var d = Eg(c.id) + (c.g ? "_" + Eg(c.g) : ""),
                e = Math.floor(c.top).toString(36),
                f = Math.floor(c.left).toString(36),
                g = Math.floor(c.width).toString(36);
            c = Math.floor(c.height).toString(36);
            return d + "_" + e + "_" + f + "_" + g + "_" + c
        }).join("~"))
    }

    function wh(a, b, c, d, e) {
        var f = Df(a.document);
        f && de(a, f, function() {
            var g = Te();
            if (g) {
                var h = a.document;
                h = h.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[h.visibilityState || h.webkitVisibilityState || h.mozVisibilityState || ""] || 0;
                if (h == 1 || h == 2) {
                    var l = new nh;
                    g = Q(l, 1, Math.round(g));
                    g = md(g, 2, h);
                    g = fb(g.u(), 4);
                    if (P(c, 7)) {
                        var k;
                        lh(b, a, d, (k = e.takeRecords) == null ? void 0 : k.call(e), P(c, 13))
                    }
                    $e(b, "1", 11, g);
                    h == 2 && typeof b.N === "function" && b.N()
                }
            }
        })
    };
    sf.J(112, function() {
        var a = new Pf(1, "https:", "csi.gstatic.com", "/csi?v=2&s=pagead&action=", "csi_pagead", oh);
        a.h = !0;
        th(a);
        Kh(a)
    });
}).call(this);