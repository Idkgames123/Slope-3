(function() {
    var n, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("a");
        },
        da =
        ca(this),
        p = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    p("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.qg = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.qg
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("b");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    p("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    p("Symbol.asyncIterator", function(a) {
        return a ? a : Symbol("Symbol.asyncIterator")
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        fa = function(a) {
            return a.raw = a
        },
        ha = function(a, b) {
            a.raw = b;
            return a
        },
        u = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error("c`" + String(a));
        },
        w = function(a) {
            if (!(a instanceof Array)) {
                a = u(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ia = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a,
                b)
        },
        ja = typeof Object.assign == "function" ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ia(d, e) && (a[e] = d[e])
            }
            return a
        };
    p("Object.assign", function(a) {
        return a || ja
    });
    var ka = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        la;
    if (typeof Object.setPrototypeOf == "function") la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var na = {
                    a: !0
                },
                oa = {};
            try {
                oa.__proto__ = na;
                ma = oa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError("d`" + a);
            return a
        } : null
    }
    var qa = la,
        y = function(a, b) {
            a.prototype = ka(b.prototype);
            a.prototype.constructor = a;
            if (qa) qa(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.oi = b.prototype
        },
        ra = function() {
            this.hc = !1;
            this.Ya = null;
            this.ub = void 0;
            this.N = 1;
            this.Da = this.bb = 0;
            this.Id = this.aa = null
        };
    ra.prototype.La = function() {
        if (this.hc) throw new TypeError("f");
        this.hc = !0
    };
    ra.prototype.oc = function(a) {
        this.ub = a
    };
    ra.prototype.vc = function(a) {
        this.aa = {
            ff: a,
            zf: !0
        };
        this.N = this.bb || this.Da
    };
    ra.prototype.return = function(a) {
        this.aa = {
            return: a
        };
        this.N = this.Da
    };
    var sa = function(a, b, c) {
        a.N = c;
        return {
            value: b
        }
    };
    ra.prototype.ib = function(a) {
        this.N = a
    };
    var ta = function(a, b, c, d) {
            d ? a.Id[d] = a.aa : a.Id = [a.aa];
            a.bb = b || 0;
            a.Da = c || 0
        },
        ua = function(a, b, c) {
            c = a.Id.splice(c || 0)[0];
            (c = a.aa = a.aa || c) ? c.zf ? a.N = a.bb || a.Da : c.ib != void 0 && a.Da < c.ib ? (a.N = c.ib, a.aa = null) : a.N = a.Da: a.N = b
        };
    ra.prototype.forIn = function(a) {
        return new va(a)
    };
    var va = function(a) {
            this.Of = [];
            for (var b in a) this.Of.push(b);
            this.Of.reverse()
        },
        wa = function(a) {
            this.o = new ra;
            this.Wh = a
        };
    wa.prototype.oc = function(a) {
        this.o.La();
        if (this.o.Ya) return xa(this, this.o.Ya.next, a, this.o.oc);
        this.o.oc(a);
        return ya(this)
    };
    var za = function(a, b) {
        a.o.La();
        var c = a.o.Ya;
        if (c) return xa(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.o.return);
        a.o.return(b);
        return ya(a)
    };
    wa.prototype.vc = function(a) {
        this.o.La();
        if (this.o.Ya) return xa(this, this.o.Ya["throw"], a, this.o.oc);
        this.o.vc(a);
        return ya(this)
    };
    var xa = function(a, b, c, d) {
            try {
                var e = b.call(a.o.Ya, c);
                if (!(e instanceof Object)) throw new TypeError("e`" + e);
                if (!e.done) return a.o.hc = !1, e;
                var f = e.value
            } catch (g) {
                return a.o.Ya = null, a.o.vc(g), ya(a)
            }
            a.o.Ya = null;
            d.call(a.o, f);
            return ya(a)
        },
        ya = function(a) {
            for (; a.o.N;) try {
                var b = a.Wh(a.o);
                if (b) return a.o.hc = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.o.ub = void 0, a.o.vc(c)
            }
            a.o.hc = !1;
            if (a.o.aa) {
                b = a.o.aa;
                a.o.aa = null;
                if (b.zf) throw b.ff;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        Aa = function(a) {
            this.next =
                function(b) {
                    return a.oc(b)
                };
            this.throw = function(b) {
                return a.vc(b)
            };
            this.return = function(b) {
                return za(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        Ba = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        Ca = function(a) {
            return Ba(new Aa(new wa(a)))
        },
        Da = function(a) {
            this[Symbol.asyncIterator] = function() {
                return this
            };
            this[Symbol.iterator] = function() {
                return a
            };
            this.next = function(b) {
                return Promise.resolve(a.next(b))
            };
            this["throw"] = function(b) {
                return new Promise(function(c, d) {
                    var e = a["throw"];
                    e !== void 0 ? c(e.call(a, b)) : (c = a["return"], c !== void 0 && c.call(a), d(new TypeError("g")))
                })
            };
            a["return"] !== void 0 && (this["return"] = function(b) {
                return Promise.resolve(a["return"](b))
            })
        },
        B = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    p("Promise", function(a) {
        function b() {
            this.Na = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.Qe = function(g) {
            if (this.Na == null) {
                this.Na = [];
                var h = this;
                this.Re(function() {
                    h.Qg()
                })
            }
            this.Na.push(g)
        };
        var d = da.setTimeout;
        b.prototype.Re = function(g) {
            d(g, 0)
        };
        b.prototype.Qg = function() {
            for (; this.Na && this.Na.length;) {
                var g = this.Na;
                this.Na = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.zg(l)
                    }
                }
            }
            this.Na = null
        };
        b.prototype.zg = function(g) {
            this.Re(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.Pb = 0;
            this.tc = void 0;
            this.Jb = [];
            this.Cf = !1;
            var h = this.Cd();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.Cd = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.fi),
                reject: g(this.me)
            }
        };
        e.prototype.fi = function(g) {
            if (g === this) this.me(new TypeError("h"));
            else if (g instanceof e) this.ii(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = g != null;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.ei(g) : this.jf(g)
            }
        };
        e.prototype.ei = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.me(k);
                return
            }
            typeof h == "function" ? this.ji(h, g) : this.jf(g)
        };
        e.prototype.me = function(g) {
            this.Vf(2, g)
        };
        e.prototype.jf = function(g) {
            this.Vf(1, g)
        };
        e.prototype.Vf = function(g, h) {
            if (this.Pb != 0) throw Error("i`" + g + "`" + h + "`" + this.Pb);
            this.Pb = g;
            this.tc = h;
            this.Pb === 2 && this.gi();
            this.Rg()
        };
        e.prototype.gi = function() {
            var g = this;
            d(function() {
                if (g.Ih()) {
                    var h = da.console;
                    typeof h !== "undefined" && h.error(g.tc)
                }
            }, 1)
        };
        e.prototype.Ih = function() {
            if (this.Cf) return !1;
            var g = da.CustomEvent,
                h = da.Event,
                k = da.dispatchEvent;
            if (typeof k === "undefined") return !0;
            typeof g === "function" ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : typeof h === "function" ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.tc;
            return k(g)
        };
        e.prototype.Rg = function() {
            if (this.Jb != null) {
                for (var g = 0; g < this.Jb.length; ++g) f.Qe(this.Jb[g]);
                this.Jb = null
            }
        };
        var f = new b;
        e.prototype.ii = function(g) {
            var h =
                this.Cd();
            g.Gc(h.resolve, h.reject)
        };
        e.prototype.ji = function(g, h) {
            var k = this.Cd();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(t, r) {
                return typeof t == "function" ? function(x) {
                    try {
                        l(t(x))
                    } catch (v) {
                        m(v)
                    }
                } : r
            }
            var l, m, q = new e(function(t, r) {
                l = t;
                m = r
            });
            this.Gc(k(g, l), k(h, m));
            return q
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Gc = function(g, h) {
            function k() {
                switch (l.Pb) {
                    case 1:
                        g(l.tc);
                        break;
                    case 2:
                        h(l.tc);
                        break;
                    default:
                        throw Error("j`" +
                            l.Pb);
                }
            }
            var l = this;
            this.Jb == null ? f.Qe(k) : this.Jb.push(k);
            this.Cf = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = u(g), m = l.next(); !m.done; m = l.next()) c(m.value).Gc(h, k)
            })
        };
        e.all = function(g) {
            var h = u(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function q(x) {
                    return function(v) {
                        t[x] = v;
                        r--;
                        r == 0 && l(t)
                    }
                }
                var t = [],
                    r = 0;
                do t.push(void 0), r++, c(k.value).Gc(q(t.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    p("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    });
    p("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ia(b, d) && c.push(b[d]);
            return c
        }
    });
    var Ea = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    p("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ea(this, function(b) {
                return b
            })
        }
    });
    p("WeakMap", function(a) {
        function b() {}

        function c(k) {
            var l = typeof k;
            return l === "object" && k !== null || l === "function"
        }

        function d(k) {
            if (!ia(k, f)) {
                var l = new b;
                ba(k, f, {
                    value: l
                })
            }
        }

        function e(k) {
            var l = Object[k];
            l && (Object[k] = function(m) {
                if (m instanceof b) return m;
                Object.isExtensible(m) && d(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (m.get(k) != 2 || m.get(l) != 3) return !1;
                    m.delete(k);
                    m.set(l, 4);
                    return !m.has(k) && m.get(l) == 4
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) {
                this.cc = (g += Math.random() + 1).toString();
                if (k) {
                    k = u(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        h.prototype.set = function(k, l) {
            if (!c(k)) throw Error("k");
            d(k);
            if (!ia(k, f)) throw Error("l`" + k);
            k[f][this.cc] = l;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && ia(k, f) ? k[f][this.cc] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && ia(k, f) && ia(k[f], this.cc)
        };
        h.prototype.delete = function(k) {
            return c(k) &&
                ia(k, f) && ia(k[f], this.cc) ? delete k[f][this.cc] : !1
        };
        return h
    });
    p("Map", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if (k.get(h) != "s" || k.size != 1 || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || k.size != 2) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || m.value[1] != "s") return !1;
                    m = l.next();
                    return m.done || m.value[0].x != 4 || m.value[1] != "t" || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] =
                    f();
                this.size = 0;
                if (h) {
                    h = u(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.S ? l.S.value = k : (l.S = {
                next: this[1],
                Ja: this[1].Ja,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.S), this[1].Ja.next = l.S, this[1].Ja = l.S, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.S && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.S.Ja.next = h.S.next, h.S.next.Ja = h.S.Ja,
                h.S.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Ja = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).S
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).S) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(),
                    m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                l == "object" || l == "function" ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h[0][l];
                if (m && ia(h[0], l))
                    for (h = 0; h < m.length; h++) {
                        var q = m[h];
                        if (k !== k && q.key !== q.key || k === q.key) return {
                            id: l,
                            list: m,
                            index: h,
                            S: q
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    S: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return ea(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.Ja;
                        for (; l.next != l.head;) return l =
                            l.next, {
                                done: !1,
                                value: k(l)
                            };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Ja = h.next = h.head = h
            },
            g = 0;
        return c
    });
    p("Set", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                            x: 4
                        }) != d || d.size != 2) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.va = new Map;
            if (c) {
                c =
                    u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.va.size
        };
        b.prototype.add = function(c) {
            c = c === 0 ? 0 : c;
            this.va.set(c, c);
            this.size = this.va.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.va.delete(c);
            this.size = this.va.size;
            return c
        };
        b.prototype.clear = function() {
            this.va.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.va.has(c)
        };
        b.prototype.entries = function() {
            return this.va.entries()
        };
        b.prototype.values = function() {
            return this.va.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.va.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    var Fa = function(a, b, c) {
        if (a == null) throw new TypeError("m`" + c);
        if (b instanceof RegExp) throw new TypeError("n`" + c);
        return a + ""
    };
    p("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ea(this, function(b, c) {
                return [b, c]
            })
        }
    });
    p("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Fa(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    p("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    });
    p("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Fa(this, null, "repeat");
            if (b < 0 || b > 1342177279) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    p("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    p("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    p("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return Fa(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    });
    p("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    p("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    p("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    p("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    p("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    });
    p("Math.log2", function(a) {
        return a ? a : function(b) {
            return Math.log(b) / Math.LN2
        }
    });
    p("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            };
            var e = [],
                f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
            if (typeof f == "function") {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    p("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ia(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    p("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ea(this, function(b, c) {
                return c
            })
        }
    });
    p("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === "number" && isNaN(b)
        }
    });
    p("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            c < 0 && (c = Math.max(0, e + c));
            if (d == null || d > e) d = e;
            d = Number(d);
            d < 0 && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    var Ga = function(a) {
        return a ? a : Array.prototype.fill
    };
    p("Int8Array.prototype.fill", Ga);
    p("Uint8Array.prototype.fill", Ga);
    p("Uint8ClampedArray.prototype.fill", Ga);
    p("Int16Array.prototype.fill", Ga);
    p("Uint16Array.prototype.fill", Ga);
    p("Int32Array.prototype.fill", Ga);
    p("Uint32Array.prototype.fill", Ga);
    p("Float32Array.prototype.fill", Ga);
    p("Float64Array.prototype.fill", Ga);
    p("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Fa(this, null, "padStart");
            b -= d.length;
            c = c !== void 0 ? String(c) : " ";
            return (b > 0 && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    });
    p("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = b === void 0 ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && b > 0 ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Ha = this || self,
        Ia = function(a, b) {
            a: {
                var c = ["CLOSURE_FLAGS"];
                for (var d = Ha, e = 0; e < c.length; e++)
                    if (d = d[c[e]], d == null) {
                        c = null;
                        break a
                    }
                c = d
            }
            a = c && c[a];
            return a != null ? a : b
        },
        Ja = function(a) {
            var b = typeof a;
            return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        Ka = function(a) {
            var b = Ja(a);
            return b == "array" || b == "object" && typeof a.length == "number"
        },
        La = function(a) {
            var b = typeof a;
            return b == "object" && a != null || b == "function"
        },
        Qa = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.oi = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.hj = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        Ra = function(a) {
            return a
        };
    var Sa = function() {
        this.dg = 0
    };
    Sa.prototype.Qb = function(a, b) {
        var c = this;
        return function() {
            var d = B.apply(0, arguments);
            c.dg = a;
            return b.apply(null, w(d))
        }
    };
    var Ta = function() {
            var a = {};
            this.xa = (a[3] = [], a[2] = [], a[1] = [], a);
            this.Zd = !1
        },
        Va = function(a, b, c) {
            var d = Ua(a, c);
            a.xa[c].push(b);
            d && a.xa[c].length === 1 && a.flush()
        },
        Ua = function(a, b) {
            return Object.keys(a.xa).map(function(c) {
                return Number(c)
            }).filter(function(c) {
                return !isNaN(c) && c > b
            }).every(function(c) {
                return a.xa[c].length === 0
            })
        };
    Ta.prototype.flush = function() {
        if (!this.Zd) {
            this.Zd = !0;
            try {
                for (; Object.values(this.xa).some(function(a) {
                        return a.length > 0
                    });) Wa(this, 3), Wa(this, 2), Wa(this, 1)
            } catch (a) {
                throw Object.values(this.xa).forEach(function(b) {
                    return void b.splice(0, b.length)
                }), a;
            } finally {
                this.Zd = !1
            }
        }
    };
    var Wa = function(a, b) {
        for (; Ua(a, b) && a.xa[b].length > 0;) a.xa[b][0](), a.xa[b].shift()
    };
    da.Object.defineProperties(Ta.prototype, {
        Rf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Object.values(this.xa).some(function(a) {
                    return a.length > 0
                })
            }
        }
    });
    var Xa = function(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };

    function Ya(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ya);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    Qa(Ya, Error);
    Ya.prototype.name = "CustomError";
    var Za;

    function $a(a, b) {
        var c = Ya.call;
        a = a.split("%s");
        for (var d = "", e = a.length - 1, f = 0; f < e; f++) d += a[f] + (f < b.length ? b[f] : "%s");
        c.call(Ya, this, d + a[e])
    }
    Qa($a, Ya);
    $a.prototype.name = "AssertionError";

    function ab(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new $a("" + e, f || []);
    }
    var E = function(a, b, c) {
            a || ab("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        bb = function(a, b, c) {
            a == null && ab("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        cb = function(a, b) {
            throw new $a("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        db = function(a, b, c) {
            typeof a !== "number" && ab("Expected number but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        eb = function(a, b, c) {
            typeof a !== "string" && ab("Expected string but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        fb = function(a, b, c) {
            typeof a !== "function" && ab("Expected function but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        gb = function(a, b, c) {
            La(a) || ab("Expected object but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        ib = function(a, b, c) {
            Array.isArray(a) || ab("Expected array but got %s: %s.", [Ja(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        kb = function(a, b, c, d) {
            a instanceof b || ab("Expected instanceof %s but got %s.", [jb(b), jb(a)], c, Array.prototype.slice.call(arguments, 3));
            return a
        };

    function jb(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : a === null ? "null" : typeof a
    };
    var lb;
    var pb = function(a, b) {
        if (b !== nb) throw Error("o");
        this.Nf = a
    };
    pb.prototype.toString = function() {
        return this.Nf + ""
    };
    var nb = {},
        qb = function(a) {
            if (lb === void 0) {
                var b = null;
                var c = Ha.trustedTypes;
                if (c && c.createPolicy) try {
                    b = c.createPolicy("goog#html", {
                        createHTML: Ra,
                        createScript: Ra,
                        createScriptURL: Ra
                    })
                } catch (d) {
                    Ha.console && Ha.console.error(d.message)
                }
                lb = b
            }
            a = (b = lb) ? b.createScriptURL(a) : a;
            return new pb(a, nb)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var rb = fa([""]),
        sb = ha(["\x00"], ["\\0"]),
        tb = ha(["\n"], ["\\n"]),
        ub = ha(["\x00"], ["\\u0000"]),
        vb = fa([""]),
        wb = ha(["\x00"], ["\\0"]),
        xb = ha(["\n"], ["\\n"]),
        yb = ha(["\x00"], ["\\u0000"]);

    function zb(a) {
        return Object.isFrozen(a) && Object.isFrozen(a.raw)
    }

    function Ab(a) {
        return a.toString().indexOf("`") === -1
    }
    var Bb = Ab(function(a) {
            return a(rb)
        }) || Ab(function(a) {
            return a(sb)
        }) || Ab(function(a) {
            return a(tb)
        }) || Ab(function(a) {
            return a(ub)
        }),
        Cb = zb(vb) && zb(wb) && zb(xb) && zb(yb);
    var Db = {};

    function Fb() {
        if (Db !== Db) throw Error("q");
    };
    var Gb = function(a) {
        Fb();
        this.Vh = a
    };
    Gb.prototype.toString = function() {
        return this.Vh
    };
    new Gb("about:blank");
    new Gb("about:invalid#zClosurez");
    var Hb = [],
        Ib = function(a) {
            console.warn("r`" + a)
        };
    Hb.indexOf(Ib) === -1 && Hb.push(Ib);
    var Jb = Array.prototype.forEach ? function(a, b) {
            E(a.length != null);
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        Kb = Array.prototype.map ? function(a, b) {
            E(a.length != null);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Lb = Array.prototype.some ? function(a, b) {
            E(a.length !=
                null);
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function Mb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Nb(a) {
        var b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ob(a, b, c) {
        if (!Ka(a) || !Ka(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || Pb;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return !1;
        return !0
    }

    function Pb(a, b) {
        return a === b
    }

    function Qb(a, b) {
        return Mb.apply([], Kb(a, b))
    };
    var Rb = function() {
        Fb();
        this.Th = ""
    };
    Rb.prototype.toString = function() {
        return this.Th
    };
    var Sb = function() {
        Fb();
        this.Uh = ""
    };
    Sb.prototype.toString = function() {
        return this.Uh
    };
    new Rb;
    new Sb;
    var Vb = {},
        Wb = function() {
            var a = Ha.trustedTypes && Ha.trustedTypes.emptyHTML || "";
            if (Vb !== Vb) throw Error("s");
            this.Sh = a
        };
    Wb.prototype.toString = function() {
        return this.Sh.toString()
    };
    new Wb;
    var Xb = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var Yb = function(a, b) {
        this.name = a;
        this.value = b
    };
    Yb.prototype.toString = function() {
        return this.name
    };
    var Zb = new Yb("OFF", Infinity),
        $b = new Yb("WARNING", 900),
        ac = new Yb("INFO", 800),
        bc = new Yb("CONFIG", 700),
        cc = function() {
            this.Hc = 0;
            this.clear()
        },
        dc;
    cc.prototype.clear = function() {
        this.C = Array(this.Hc);
        this.Xe = -1;
        this.Af = !1
    };
    var ec = function(a, b, c) {
        this.reset(a || Zb, b, c, void 0, void 0)
    };
    ec.prototype.reset = function(a, b, c, d) {
        d || Date.now();
        this.Hh = b
    };
    ec.prototype.getMessage = function() {
        return this.Hh
    };
    var fc = function(a, b) {
            this.level = null;
            this.ah = [];
            this.parent = (b === void 0 ? null : b) || null;
            this.children = [];
            this.yh = {
                Ea: function() {
                    return a
                }
            }
        },
        gc = function(a) {
            if (a.level) return a.level;
            if (a.parent) return gc(a.parent);
            cb("Root logger has no level set.");
            return Zb
        },
        hc = function(a, b) {
            for (; a;) a.ah.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        ic = function() {
            this.entries = {};
            var a = new fc("");
            a.level = bc;
            this.entries[""] = a
        },
        jc, kc = function(a, b, c) {
            var d = a.entries[b];
            if (d) return c !== void 0 && (d.level = c), d;
            d = b.lastIndexOf(".");
            d = b.slice(0, Math.max(d, 0));
            d = kc(a, d);
            var e = new fc(b, d);
            a.entries[b] = e;
            d.children.push(e);
            c !== void 0 && (e.level = c);
            return e
        },
        lc = function() {
            jc || (jc = new ic);
            return jc
        },
        nc = function(a) {
            var b = mc;
            if (b) {
                var c = a,
                    d = $b;
                if (a = b)
                    if (a = b && d) {
                        a = d.value;
                        var e = b ? gc(kc(lc(), b.Ea())) : Zb;
                        a = a >= e.value
                    }
                if (a) {
                    d = d || Zb;
                    a = kc(lc(), b.Ea());
                    typeof c === "function" && (c = c());
                    dc || (dc = new cc);
                    e = dc;
                    b = b.Ea();
                    if (e.Hc > 0) {
                        var f = (e.Xe + 1) % e.Hc;
                        e.Xe = f;
                        e.Af ? (e = e.C[f], e.reset(d, c, b), b = e) : (e.Af = f == e.Hc - 1, b = e.C[f] = new ec(d, c, b))
                    } else b = new ec(d,
                        c, b);
                    hc(a, b)
                }
            }
        };
    var oc = function() {
        this.names = new Map
    };
    oc.prototype.Ea = function(a) {
        var b = this.names.get(a);
        if (b) return b;
        var c;
        b = (c = a.description) != null ? c : Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36);
        this.names.set(a, b);
        return b
    };
    /*


     Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
         http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    function qc(a) {
        a = a(function(b) {
            b.name = b.constructor.name;
            b.stack = Error().stack
        });
        a.prototype = Object.create(Error.prototype);
        return a.prototype.constructor = a
    };
    var rc = qc(function(a) {
        return function(b) {
            a(this);
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b
        }
    });

    function sc(a, b) {
        a && (b = a.indexOf(b), 0 <= b && a.splice(b, 1))
    };

    function G(a) {
        return typeof a === "function"
    };
    var tc = function(a) {
        this.ih = a;
        this.closed = !1;
        this.Sb = this.wb = null
    };
    n = tc.prototype;
    n.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.wb;
            if (Array.isArray(a))
                for (var b = u(a), c = b.next(); !c.done; c = b.next()) c.value.remove(this);
            else a == null || a.remove(this);
            b = this.ih;
            if (G(b)) try {
                b()
            } catch (f) {
                var d = f instanceof rc ? f.errors : [f]
            }
            var e = this.Sb;
            if (e)
                for (this.Sb = null, b = u(e), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    try {
                        G(c) ? c() : c.unsubscribe()
                    } catch (f) {
                        c = void 0, d = (c = d) != null ? c : [], f instanceof rc ? d = [].concat(w(d), w(f.errors)) : d.push(f)
                    }
                }
            if (d) throw new rc(d);
        }
    };
    n.add = function(a) {
        if (a && a !== this)
            if (this.closed) G(a) ? a() : a.unsubscribe();
            else {
                if (a instanceof tc) {
                    if (a.closed || a.tg(this)) return;
                    a.sg(this)
                }
                var b;
                (this.Sb = (b = this.Sb) != null ? b : []).push(a)
            }
    };
    n.tg = function(a) {
        var b = this.wb;
        return b === a || Array.isArray(b) && b.includes(a)
    };
    n.sg = function(a) {
        var b = this.wb;
        this.wb = Array.isArray(b) ? (b.push(a), b) : b ? [b, a] : a
    };
    n.ug = function(a) {
        var b = this.wb;
        b === a ? this.wb = null : Array.isArray(b) && sc(b, a)
    };
    n.remove = function(a) {
        var b = this.Sb;
        b && sc(b, a);
        a instanceof tc && a.ug(this)
    };
    var uc = new tc;
    uc.closed = !0;
    tc.EMPTY = uc;

    function vc(a) {
        return a instanceof tc || a && "closed" in a && G(a.remove) && G(a.add) && G(a.unsubscribe)
    };

    function wc() {};

    function xc(a) {
        setTimeout(function() {
            throw a;
        })
    };
    var yc = function(a) {
        tc.call(this);
        this.L = !1;
        this.destination = a instanceof yc ? a : new zc(!a || G(a) ? {
            next: a != null ? a : void 0
        } : a);
        vc(a) && a.add(this)
    };
    y(yc, tc);
    yc.EMPTY = tc.EMPTY;
    yc.create = function(a, b, c) {
        return new Ac(a, b, c)
    };
    n = yc.prototype;
    n.next = function(a) {
        this.L || this.pd(a)
    };
    n.error = function(a) {
        this.L || (this.L = !0, this.Le(a))
    };
    n.complete = function() {
        this.L || (this.L = !0, this.Ac())
    };
    n.unsubscribe = function() {
        this.closed || (this.L = !0, tc.prototype.unsubscribe.call(this))
    };
    n.pd = function(a) {
        this.destination.next(a)
    };
    n.Le = function(a) {
        this.destination.error(a);
        this.unsubscribe()
    };
    n.Ac = function() {
        this.destination.complete();
        this.unsubscribe()
    };
    var zc = function(a) {
        this.he = a
    };
    zc.prototype.next = function(a) {
        var b = this.he;
        if (b.next) try {
            b.next(a)
        } catch (c) {
            xc(c)
        }
    };
    zc.prototype.error = function(a) {
        var b = this.he;
        if (b.error) try {
            b.error(a)
        } catch (c) {
            xc(c)
        } else xc(a)
    };
    zc.prototype.complete = function() {
        var a = this.he;
        if (a.complete) try {
            a.complete()
        } catch (b) {
            xc(b)
        }
    };
    var Ac = function(a, b, c) {
        yc.call(this);
        this.destination = new zc(G(a) || !a ? {
            next: a != null ? a : void 0,
            error: b != null ? b : void 0,
            complete: c != null ? c : void 0
        } : a)
    };
    y(Ac, yc);
    Ac.EMPTY = yc.EMPTY;
    Ac.create = yc.create;
    var Bc = typeof Symbol === "function" && Symbol.observable || "@@observable";

    function Cc(a) {
        return a
    };

    function H() {
        return Dc(B.apply(0, arguments))
    }

    function Dc(a) {
        return a.length === 0 ? Cc : a.length === 1 ? a[0] : function(b) {
            return a.reduce(function(c, d) {
                return d(c)
            }, b)
        }
    };
    var I = function(a) {
        a && (this.ya = a)
    };
    n = I.prototype;
    n.kb = function(a) {
        var b = new I;
        b.source = this;
        b.operator = a;
        return b
    };
    n.subscribe = function(a, b, c) {
        a = a && a instanceof yc || a && G(a.next) && G(a.error) && G(a.complete) && vc(a) ? a : new Ac(a, b, c);
        b = this.operator;
        c = this.source;
        a.add(b ? b.call(a, c) : c ? this.ya(a) : this.rd(a));
        return a
    };
    n.rd = function(a) {
        try {
            return this.ya(a)
        } catch (e) {
            var b;
            a: {
                for (b = a; b;) {
                    var c = b.destination,
                        d = b.L;
                    if (b.closed || d) {
                        b = !1;
                        break a
                    }
                    b = c && c instanceof yc ? c : null
                }
                b = !0
            }
            b ? a.error(e) : xc(e)
        }
    };
    n.forEach = function(a, b) {
        var c = this;
        b = Ec(b);
        return new b(function(d, e) {
            var f = c.subscribe(function(g) {
                try {
                    a(g)
                } catch (h) {
                    e(h), f == null || f.unsubscribe()
                }
            }, e, d)
        })
    };
    n.ya = function(a) {
        var b;
        return (b = this.source) == null ? void 0 : b.subscribe(a)
    };
    I.prototype[Bc] = function() {
        return this
    };
    I.prototype.g = function() {
        var a = B.apply(0, arguments);
        return a.length ? Dc(a)(this) : this
    };
    I.create = function(a) {
        return new I(a)
    };

    function Ec(a) {
        var b;
        return (b = a != null ? a : void 0) != null ? b : Promise
    };
    var Fc = qc(function(a) {
        return function() {
            a(this);
            this.message = "object unsubscribed"
        }
    });
    var J = function() {
        this.Ib = [];
        this.Qc = this.L = this.closed = !1;
        this.ve = null
    };
    y(J, I);
    n = J.prototype;
    n.kb = function(a) {
        var b = new Gc(this, this);
        b.operator = a;
        return b
    };
    n.Za = function() {
        if (this.closed) throw new Fc;
    };
    n.next = function(a) {
        this.Za();
        if (!this.L) {
            var b = this.Ib.slice();
            b = u(b);
            for (var c = b.next(); !c.done; c = b.next()) c.value.next(a)
        }
    };
    n.error = function(a) {
        this.Za();
        if (!this.L) {
            this.Qc = this.L = !0;
            this.ve = a;
            for (var b = this.Ib; b.length;) b.shift().error(a)
        }
    };
    n.complete = function() {
        this.Za();
        if (!this.L) {
            this.L = !0;
            for (var a = this.Ib; a.length;) a.shift().complete()
        }
    };
    n.unsubscribe = function() {
        this.L = this.closed = !0;
        this.Ib = null
    };
    n.rd = function(a) {
        this.Za();
        return I.prototype.rd.call(this, a)
    };
    n.ya = function(a) {
        this.Za();
        this.Ke(a);
        return this.Ne(a)
    };
    n.Ne = function(a) {
        var b = this,
            c = this.L,
            d = this.Ib;
        return this.Qc || c ? tc.EMPTY : (d.push(a), new tc(function() {
            return sc(b.Ib, a)
        }))
    };
    n.Ke = function(a) {
        var b = this.ve,
            c = this.L;
        this.Qc ? a.error(b) : c && a.complete()
    };
    n.P = function() {
        var a = new I;
        a.source = this;
        return a
    };
    J.create = function(a, b) {
        return new Gc(a, b)
    };
    var Gc = function(a, b) {
        J.call(this);
        this.destination = a;
        this.source = b
    };
    y(Gc, J);
    Gc.create = J.create;
    Gc.prototype.next = function(a) {
        var b, c;
        (b = this.destination) == null || (c = b.next) == null || c.call(b, a)
    };
    Gc.prototype.error = function(a) {
        var b, c;
        (b = this.destination) == null || (c = b.error) == null || c.call(b, a)
    };
    Gc.prototype.complete = function() {
        var a, b;
        (a = this.destination) == null || (b = a.complete) == null || b.call(a)
    };
    Gc.prototype.ya = function(a) {
        var b, c;
        return (c = (b = this.source) == null ? void 0 : b.subscribe(a)) != null ? c : tc.EMPTY
    };
    var Hc = function(a) {
        J.call(this);
        this.sd = a
    };
    y(Hc, J);
    Hc.create = J.create;
    Hc.prototype.ya = function(a) {
        var b = J.prototype.ya.call(this, a);
        !b.closed && a.next(this.sd);
        return b
    };
    Hc.prototype.getValue = function() {
        var a = this.ve,
            b = this.sd;
        if (this.Qc) throw a;
        this.Za();
        return b
    };
    Hc.prototype.next = function(a) {
        J.prototype.next.call(this, this.sd = a)
    };
    da.Object.defineProperties(Hc.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.getValue()
            }
        }
    });
    var Ic = new I(function(a) {
        return a.complete()
    });

    function Jc(a, b) {
        return new I(function(c) {
            var d = 0;
            return b.A(function() {
                d === a.length ? c.complete() : (c.next(a[d++]), c.closed || this.A())
            })
        })
    };

    function Kc(a, b) {
        if (!a) throw Error("t");
        return new I(function(c) {
            var d = new tc;
            d.add(b.A(function() {
                var e = a[Symbol.asyncIterator]();
                d.add(b.A(function() {
                    var f = this;
                    e.next().then(function(g) {
                        g.done ? c.complete() : (c.next(g.value), f.A())
                    })
                }))
            }));
            return d
        })
    };
    var Lc = typeof Symbol === "function" && Symbol.iterator ? Symbol.iterator : "@@iterator";

    function Mc(a, b, c) {
        b = b.A(function() {
            try {
                c.call(this)
            } catch (d) {
                a.error(d)
            }
        }, 0);
        a.add(b)
    };

    function Nc(a, b) {
        return new I(function(c) {
            var d;
            c.add(b.A(function() {
                d = a[Lc]();
                Mc(c, b, function() {
                    var e = d.next(),
                        f = e.value;
                    e.done ? c.complete() : (c.next(f), this.A())
                })
            }));
            return function() {
                var e;
                return G((e = d) == null ? void 0 : e.return) && d.return()
            }
        })
    };

    function Oc(a, b) {
        return new I(function(c) {
            var d = new tc;
            d.add(b.A(function() {
                var e = a[Bc]();
                d.add(e.subscribe({
                    next: function(f) {
                        d.add(b.A(function() {
                            return c.next(f)
                        }))
                    },
                    error: function(f) {
                        d.add(b.A(function() {
                            return c.error(f)
                        }))
                    },
                    complete: function() {
                        d.add(b.A(function() {
                            return c.complete()
                        }))
                    }
                }))
            }));
            return d
        })
    };

    function Pc(a, b) {
        return new I(function(c) {
            return b.A(function() {
                return a.then(function(d) {
                    c.add(b.A(function() {
                        c.next(d);
                        c.add(b.A(function() {
                            return c.complete()
                        }))
                    }))
                }, function(d) {
                    c.add(b.A(function() {
                        return c.error(d)
                    }))
                })
            })
        })
    };
    var Qc = function(a) {
        return a && typeof a.length === "number" && typeof a !== "function"
    };

    function Rc(a) {
        return new TypeError("u`" + (a !== null && typeof a === "object" ? "an invalid object" : "'" + a + "'"))
    };

    function Sc(a, b) {
        if (a != null) {
            if (G(a[Bc])) return Oc(a, b);
            if (Qc(a)) return Jc(a, b);
            if (G(a == null ? void 0 : a.then)) return Pc(a, b);
            if (Symbol.asyncIterator && G(a == null ? void 0 : a[Symbol.asyncIterator])) return Kc(a, b);
            if (G(a == null ? void 0 : a[Lc])) return Nc(a, b)
        }
        throw Rc(a);
    };

    function Vc(a, b) {
        return b ? Sc(a, b) : Wc(a)
    }

    function Wc(a) {
        if (a instanceof I) return a;
        if (a != null) {
            if (G(a[Bc])) return Xc(a);
            if (Qc(a)) return Yc(a);
            if (G(a == null ? void 0 : a.then)) return Zc(a);
            if (Symbol.asyncIterator && G(a == null ? void 0 : a[Symbol.asyncIterator])) return $c(a);
            if (G(a == null ? void 0 : a[Lc])) return ad(a)
        }
        throw Rc(a);
    }

    function Xc(a) {
        return new I(function(b) {
            var c = a[Bc]();
            if (G(c.subscribe)) return c.subscribe(b);
            throw new TypeError("v");
        })
    }

    function Yc(a) {
        return new I(function(b) {
            for (var c = 0; c < a.length && !b.closed; c++) b.next(a[c]);
            b.complete()
        })
    }

    function Zc(a) {
        return new I(function(b) {
            a.then(function(c) {
                b.closed || (b.next(c), b.complete())
            }, function(c) {
                return b.error(c)
            }).then(null, xc)
        })
    }

    function ad(a) {
        return new I(function(b) {
            for (var c = a[Lc](); !b.closed;) {
                var d = c.next(),
                    e = d.value;
                d.done ? b.complete() : b.next(e)
            }
            return function() {
                return G(c == null ? void 0 : c.return) && c.return()
            }
        })
    }

    function $c(a) {
        return new I(function(b) {
            bd(a, b).catch(function(c) {
                return b.error(c)
            })
        })
    }

    function bd(a, b) {
        var c, d, e, f, g, h;
        return Ca(function(k) {
            switch (k.N) {
                case 1:
                    k.bb = 2;
                    k.Da = 3;
                    var l = a[Symbol.asyncIterator];
                    f = l !== void 0 ? l.call(a) : new Da(u(a));
                case 5:
                    return sa(k, f.next(), 8);
                case 8:
                    d = k.ub;
                    if (d.done) {
                        k.ib(3);
                        break
                    }
                    g = d.value;
                    b.next(g);
                    k.ib(5);
                    break;
                case 3:
                    ta(k);
                    k.bb = 0;
                    k.Da = 9;
                    if (!d || d.done || !(e = f.return)) {
                        k.ib(9);
                        break
                    }
                    return sa(k, e.call(f), 9);
                case 9:
                    ta(k, 0, 0, 1);
                    if (c) throw c.error;
                    ua(k, 10, 1);
                    break;
                case 10:
                    ua(k, 4);
                    break;
                case 2:
                    k.bb = 0;
                    l = k.aa.ff;
                    k.aa = null;
                    h = l;
                    c = {
                        error: h
                    };
                    k.ib(3);
                    break;
                case 4:
                    b.complete(),
                        k.N = 0
            }
        })
    };

    function cd(a, b) {
        return b ? Jc(a, b) : Yc(a)
    };

    function dd(a) {
        return G(a[a.length - 1]) ? a.pop() : void 0
    }

    function ed(a) {
        var b = a[a.length - 1];
        return b && G(b.A) ? a.pop() : void 0
    };

    function K() {
        var a = B.apply(0, arguments),
            b = ed(a);
        return b ? Jc(a, b) : cd(a)
    };

    function fd(a) {
        var b = G(a) ? a : function() {
            return a
        };
        return new I(function(c) {
            return c.error(b())
        })
    };
    var gd = {
        now: function() {
            return (gd.Lg || Date).now()
        },
        Lg: void 0
    };
    var hd = function(a, b, c) {
        a = a === void 0 ? Infinity : a;
        b = b === void 0 ? Infinity : b;
        c = c === void 0 ? gd : c;
        J.call(this);
        this.bufferSize = a;
        this.lg = b;
        this.eg = c;
        this.buffer = [];
        this.Td = b === Infinity;
        this.bufferSize = Math.max(1, a);
        this.lg = Math.max(1, b)
    };
    y(hd, J);
    hd.create = J.create;
    hd.prototype.next = function(a) {
        var b = this.buffer,
            c = this.Td,
            d = this.eg,
            e = this.lg;
        this.L || (b.push(a), !c && b.push(d.now() + e));
        id(this);
        J.prototype.next.call(this, a)
    };
    hd.prototype.ya = function(a) {
        this.Za();
        id(this);
        for (var b = this.Ne(a), c = this.Td, d = this.buffer.slice(), e = 0; e < d.length && !a.closed; e += c ? 1 : 2) a.next(d[e]);
        this.Ke(a);
        return b
    };
    var id = function(a) {
        var b = a.bufferSize,
            c = a.eg,
            d = a.buffer;
        a = a.Td;
        var e = (a ? 1 : 2) * b;
        b < Infinity && e < d.length && d.splice(0, d.length - e);
        if (!a) {
            b = c.now();
            c = 0;
            for (a = 1; a < d.length && d[a] <= b; a += 2) c = a;
            c && d.splice(0, c + 1)
        }
    };
    var kd = function(a, b) {
        b = b === void 0 ? jd : b;
        this.rg = a;
        this.now = b
    };
    kd.prototype.A = function(a, b, c) {
        b = b === void 0 ? 0 : b;
        return (new this.rg(this, a)).A(c, b)
    };
    var jd = gd.now;
    var ld = qc(function(a) {
        return function() {
            a(this);
            this.message = "no elements in sequence"
        }
    });

    function md(a) {
        return new Promise(function(b, c) {
            var d = new tc;
            d.add(a.subscribe({
                next: function(e) {
                    b(e);
                    d.unsubscribe()
                },
                error: c,
                complete: function() {
                    c(new ld)
                }
            }))
        })
    };
    var L = function(a, b, c, d, e) {
        yc.call(this, a);
        this.Oh = e;
        b && (this.pd = function(f) {
            try {
                b(f)
            } catch (g) {
                this.error(g)
            }
        });
        c && (this.Le = function(f) {
            try {
                c(f)
            } catch (g) {
                this.destination.error(g)
            }
            this.unsubscribe()
        });
        d && (this.Ac = function() {
            try {
                d()
            } catch (f) {
                this.destination.error(f)
            }
            this.unsubscribe()
        })
    };
    y(L, yc);
    L.EMPTY = yc.EMPTY;
    L.create = yc.create;
    L.prototype.unsubscribe = function() {
        var a;
        this.closed || (a = this.Oh) != null && a.call(this);
        yc.prototype.unsubscribe.call(this)
    };

    function M(a) {
        return function(b) {
            if (G(b == null ? void 0 : b.kb)) return b.kb(function(c) {
                try {
                    return a(c, this)
                } catch (d) {
                    this.error(d)
                }
            });
            throw new TypeError("w");
        }
    };

    function nd() {
        return M(function(a, b) {
            var c = null;
            a.Bc++;
            var d = new L(b, void 0, void 0, void 0, function() {
                if (!a || a.Bc <= 0 || 0 < --a.Bc) c = null;
                else {
                    var e = a.vb,
                        f = c;
                    c = null;
                    !e || f && e !== f || e.unsubscribe();
                    b.unsubscribe()
                }
            });
            a.subscribe(d);
            d.closed || (c = a.connect())
        })
    };
    var od = function(a, b) {
        this.source = a;
        this.Yf = b;
        this.Cc = null;
        this.Bc = 0;
        this.vb = null
    };
    y(od, I);
    od.create = I.create;
    od.prototype.ya = function(a) {
        return pd(this).subscribe(a)
    };
    var pd = function(a) {
        var b = a.Cc;
        if (!b || b.L) a.Cc = a.Yf();
        return a.Cc
    };
    od.prototype.qd = function() {
        this.Bc = 0;
        var a = this.vb;
        this.Cc = this.vb = null;
        a == null || a.unsubscribe()
    };
    od.prototype.connect = function() {
        var a = this,
            b = this.vb;
        if (!b) {
            b = this.vb = new tc;
            var c = pd(this);
            b.add(this.source.subscribe(new L(c, void 0, function(d) {
                a.qd();
                c.error(d)
            }, function() {
                a.qd();
                c.complete()
            }, function() {
                return a.qd()
            })));
            b.closed && (this.vb = null, b = tc.EMPTY)
        }
        return b
    };

    function N(a) {
        return M(function(b, c) {
            var d = 0;
            b.subscribe(new L(c, function(e) {
                c.next(a.call(void 0, e, d++))
            }))
        })
    };
    var qd = Array.isArray;

    function rd(a) {
        return N(function(b) {
            return qd(b) ? a.apply(null, w(b)) : a(b)
        })
    };
    var sd = Array.isArray,
        td = Object,
        ud = td.getPrototypeOf,
        vd = td.prototype,
        wd = td.keys;

    function xd(a) {
        if (a.length === 1) {
            var b = a[0];
            if (sd(b)) return {
                args: b,
                keys: null
            };
            if (b && typeof b === "object" && ud(b) === vd) return a = wd(b), {
                args: a.map(function(c) {
                    return b[c]
                }),
                keys: a
            }
        }
        return {
            args: a,
            keys: null
        }
    };

    function P() {
        var a = B.apply(0, arguments),
            b = ed(a),
            c = dd(a);
        a = xd(a);
        var d = a.args,
            e = a.keys;
        if (d.length === 0) return Vc([], b);
        b = new I(yd(d, b, e ? function(f) {
            for (var g = {}, h = 0; h < f.length; h++) g[e[h]] = f[h];
            return g
        } : Cc));
        return c ? b.g(rd(c)) : b
    }
    var zd = function(a, b, c) {
        yc.call(this, a);
        this.pd = b;
        this.li = c
    };
    y(zd, yc);
    zd.EMPTY = yc.EMPTY;
    zd.create = yc.create;
    zd.prototype.Ac = function() {
        this.li() ? yc.prototype.Ac.call(this) : this.unsubscribe()
    };

    function yd(a, b, c) {
        c = c === void 0 ? Cc : c;
        return function(d) {
            Ad(b, function() {
                for (var e = a.length, f = Array(e), g = e, h = a.map(function() {
                        return !1
                    }), k = !0, l = {
                        fb: 0
                    }; l.fb < e; l = {
                        fb: l.fb
                    }, l.fb++) Ad(b, function(m) {
                    return function() {
                        Vc(a[m.fb], b).subscribe(new zd(d, function(q) {
                            f[m.fb] = q;
                            k && (h[m.fb] = !0, k = !h.every(Cc));
                            k || d.next(c(f.slice()))
                        }, function() {
                            return --g === 0
                        }))
                    }
                }(l), d)
            }, d)
        }
    }

    function Ad(a, b, c) {
        a ? c.add(a.A(b)) : b()
    };

    function Bd(a, b, c, d) {
        var e = [],
            f = 0,
            g = 0,
            h = !1,
            k = function(l) {
                f++;
                Wc(c(l, g++)).subscribe(new L(b, function(m) {
                    b.next(m)
                }, void 0, function() {
                    for (f--; e.length && f < d;) k(e.shift());
                    !h || e.length || f || b.complete()
                }))
            };
        a.subscribe(new L(b, function(l) {
            return f < d ? k(l) : e.push(l)
        }, void 0, function() {
            h = !0;
            !h || e.length || f || b.complete()
        }));
        return function() {
            e = null
        }
    };

    function Cd(a, b) {
        var c = c === void 0 ? Infinity : c;
        if (G(b)) return function(d) {
            return d.g(Cd(function(e, f) {
                return Wc(a(e, f)).g(N(function(g, h) {
                    return b(e, g, f, h)
                }))
            }, c))
        };
        typeof b === "number" && (c = b);
        return M(function(d, e) {
            return Bd(d, e, a, c)
        })
    };

    function Dd(a) {
        a = a === void 0 ? Infinity : a;
        return Cd(Cc, a)
    };

    function Ed() {
        var a = B.apply(0, arguments);
        return Dd(1)(cd(a, ed(a)))
    };

    function Fd(a, b, c) {
        if (G(c)) {
            var d = c;
            c = void 0
        }
        return d ? Fd(a, b, c).g(rd(d)) : new I(function(e) {
            var f = function() {
                var g = B.apply(0, arguments);
                return e.next(g.length > 1 ? g : g[0])
            };
            if (G(a.addEventListener) && G(a.removeEventListener)) return a.addEventListener(b, f, c),
                function() {
                    return a.removeEventListener(b, f, c)
                };
            if (G(a.Lh) && G(a.Kh)) return a.Lh(b, f),
                function() {
                    return a.Kh(b, f)
                };
            if (G(a.addListener) && G(a.removeListener)) return a.addListener(b, f),
                function() {
                    return a.removeListener(b, f)
                };
            if (Qc(a)) return Cd(function(g) {
                return Fd(g,
                    b, c)
            })(cd(a)).subscribe(e);
            e.error(new TypeError("x"))
        })
    };
    var Gd = function() {
        tc.call(this)
    };
    y(Gd, tc);
    Gd.EMPTY = tc.EMPTY;
    Gd.prototype.A = function() {
        return this
    };
    var Hd = function(a, b) {
        return setInterval.apply(null, [a, b].concat(w(B.apply(2, arguments))))
    };
    var Id = function(a, b) {
        tc.call(this);
        this.scheduler = a;
        this.Ee = b;
        this.pending = !1
    };
    y(Id, Gd);
    Id.EMPTY = Gd.EMPTY;
    Id.prototype.A = function(a, b) {
        b = b === void 0 ? 0 : b;
        if (this.closed) return this;
        this.state = a;
        a = this.id;
        var c = this.scheduler;
        a != null && (this.id = Jd(this, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.pe(c, this.id, b);
        return this
    };
    Id.prototype.pe = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        return Hd(a.flush.bind(a, this), c)
    };
    var Jd = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        if (c != null && a.delay === c && a.pending === !1) return b;
        clearInterval(b)
    };
    Id.prototype.execute = function(a, b) {
        if (this.closed) return Error("y");
        this.pending = !1;
        if (a = this.Me(a, b)) return a;
        this.pending === !1 && this.id != null && (this.id = Jd(this, this.id, null))
    };
    Id.prototype.Me = function(a) {
        var b = !1,
            c = void 0;
        try {
            this.Ee(a)
        } catch (d) {
            b = !0, c = !!d && d || Error(d)
        }
        if (b) return this.unsubscribe(), c
    };
    Id.prototype.unsubscribe = function() {
        if (!this.closed) {
            var a = this.id,
                b = this.scheduler.actions;
            this.Ee = this.state = this.scheduler = null;
            this.pending = !1;
            sc(b, this);
            a != null && (this.id = Jd(this, a, null));
            this.delay = null;
            Gd.prototype.unsubscribe.call(this)
        }
    };
    var Kd = function(a, b) {
        b = b === void 0 ? jd : b;
        kd.call(this, a, b);
        this.actions = [];
        this.active = !1
    };
    y(Kd, kd);
    Kd.prototype.flush = function(a) {
        var b = this.actions;
        if (this.active) b.push(a);
        else {
            var c;
            this.active = !0;
            do
                if (c = a.execute(a.state, a.delay)) break; while (a = b.shift());
            this.active = !1;
            if (c) {
                for (; a = b.shift();) a.unsubscribe();
                throw c;
            }
        }
    };

    function Ld() {
        var a = B.apply(0, arguments),
            b = ed(a);
        var c = typeof a[a.length - 1] === "number" ? a.pop() : Infinity;
        return a.length ? a.length === 1 ? Wc(a[0]) : Dd(c)(cd(a, b)) : Ic
    };
    var Md = new I(wc);
    var Nd = Array.isArray;

    function Od(a) {
        return a.length === 1 && Nd(a[0]) ? a[0] : a
    };

    function Pd() {
        var a = B.apply(0, arguments);
        a = Od(a);
        return M(function(b, c) {
            var d = [b].concat(w(a)),
                e = function() {
                    if (!c.closed)
                        if (d.length > 0) {
                            try {
                                var f = Wc(d.shift())
                            } catch (h) {
                                e();
                                return
                            }
                            var g = new L(c, void 0, wc, wc);
                            c.add(f.subscribe(g));
                            g.add(e)
                        } else c.complete()
                };
            e()
        })
    };

    function Q(a) {
        return M(function(b, c) {
            var d = 0;
            b.subscribe(new L(c, function(e) {
                return a.call(void 0, e, d++) && c.next(e)
            }))
        })
    };

    function Qd() {
        var a = B.apply(0, arguments);
        a = Od(a);
        return a.length === 1 ? Wc(a[0]) : new I(Rd(a))
    }

    function Rd(a) {
        return function(b) {
            for (var c = [], d = {
                    Bb: 0
                }; c && !b.closed && d.Bb < a.length; d = {
                    Bb: d.Bb
                }, d.Bb++) c.push(Wc(a[d.Bb]).subscribe(new L(b, function(e) {
                return function(f) {
                    if (c) {
                        for (var g = 0; g < c.length; g++) g !== e.Bb && c[g].unsubscribe();
                        c = null
                    }
                    b.next(f)
                }
            }(d))))
        }
    };

    function Sd() {
        var a = B.apply(0, arguments),
            b = dd(a);
        a = Od(a);
        return a.length ? new I(function(c) {
            var d = a.map(function() {
                    return []
                }),
                e = a.map(function() {
                    return !1
                });
            c.add(function() {
                d = e = null
            });
            for (var f = {
                    Ta: 0
                }; !c.closed && f.Ta < a.length; f = {
                    Ta: f.Ta
                }, f.Ta++) Wc(a[f.Ta]).subscribe(new L(c, function(g) {
                    return function(h) {
                        d[g.Ta].push(h);
                        d.every(function(k) {
                            return k.length
                        }) && (h = d.map(function(k) {
                            return k.shift()
                        }), c.next(b ? b.apply(null, w(h)) : h), d.some(function(k, l) {
                            return !k.length && e[l]
                        }) && c.complete())
                    }
                }(f), void 0,
                function(g) {
                    return function() {
                        e[g.Ta] = !0;
                        !d[g.Ta].length && c.complete()
                    }
                }(f)));
            return function() {
                d = e = null
            }
        }) : Ic
    };
    qc(function(a) {
        return function(b) {
            b = b === void 0 ? null : b;
            a(this);
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = b
        }
    });
    var Td = function(a, b) {
        Id.call(this, a, b);
        this.scheduler = a;
        this.Ee = b
    };
    y(Td, Id);
    Td.EMPTY = Id.EMPTY;
    Td.prototype.A = function(a, b) {
        b = b === void 0 ? 0 : b;
        if (b > 0) return Id.prototype.A.call(this, a, b);
        this.delay = b;
        this.state = a;
        this.scheduler.flush(this);
        return this
    };
    Td.prototype.execute = function(a, b) {
        return b > 0 || this.closed ? Id.prototype.execute.call(this, a, b) : this.Me(a, b)
    };
    Td.prototype.pe = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        return c != null && c > 0 || c == null && this.delay > 0 ? Id.prototype.pe.call(this, a, b, c) : a.flush(this)
    };
    var Ud = function() {
        Kd.apply(this, arguments)
    };
    y(Ud, Kd);
    var Vd = new Ud(Td);
    qc(function(a) {
        return function() {
            a(this);
            this.message = "argument out of range"
        }
    });
    qc(function(a) {
        return function(b) {
            a(this);
            this.message = b
        }
    });
    qc(function(a) {
        return function(b) {
            a(this);
            this.message = b
        }
    });
    var Wd = function() {
        this.B = new Sa;
        this.h = new Ta;
        this.mh = Symbol();
        this.Zb = new oc
    };
    Wd.prototype.Ld = function() {
        return Md
    };
    var Xd = function(a, b) {
        a.Ba !== null && a.Ba.next(b)
    };
    da.Object.defineProperties(Wd.prototype, {
        qb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.mh
            }
        }
    });
    var $d = function(a, b) {
        b = Error.call(this, b ? a + ": " + b : String(a));
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.code = a;
        this.__proto__ = $d.prototype;
        this.name = String(a)
    };
    y($d, Error);
    var ae = function(a) {
        $d.call(this, 1E3, 'sfr:"' + a + '"');
        this.Ch = a;
        this.__proto__ = ae.prototype
    };
    y(ae, $d);
    var be = function() {
        $d.call(this, 1003);
        this.__proto__ = be.prototype
    };
    y(be, $d);
    var ce = function() {
        $d.call(this, 1009);
        this.__proto__ = ce.prototype
    };
    y(ce, $d);
    var de = function() {
        $d.call(this, 1011);
        this.__proto__ = de.prototype
    };
    y(de, $d);
    var ee = function() {
        $d.call(this, 1007);
        this.__proto__ = be.prototype
    };
    y(ee, $d);
    var fe = function() {
        $d.call(this, 1008);
        this.__proto__ = be.prototype
    };
    y(fe, $d);
    var ge = function() {
        $d.call(this, 1001);
        this.__proto__ = ge.prototype
    };
    y(ge, $d);
    var he = function(a) {
        $d.call(this, 1004, String(a));
        this.jh = a;
        this.__proto__ = he.prototype
    };
    y(he, $d);
    var je = function(a) {
        $d.call(this, 1010, a);
        this.__proto__ = ie.prototype
    };
    y(je, $d);
    var ie = function(a) {
        $d.call(this, 1005, a);
        this.__proto__ = ie.prototype
    };
    y(ie, $d);
    var ke = function(a) {
        var b = B.apply(1, arguments),
            c = this;
        this.Kb = [];
        this.Kb.push(a);
        b.forEach(function(d) {
            c.Kb.push(d)
        })
    };
    ke.prototype.F = function(a) {
        return this.Kb.some(function(b) {
            return b.F(a)
        })
    };
    ke.prototype.G = function(a, b) {
        for (var c = 0; c < this.Kb.length; c++)
            if (this.Kb[c].F(b)) return this.Kb[c].G(a, b);
        throw new ce;
    };

    function le(a) {
        var b, c, d;
        return !!a && typeof a.active === "boolean" && typeof((b = a.clock) == null ? void 0 : b.now) === "function" && ((c = a.clock) == null ? void 0 : c.timeline) !== void 0 && !((d = a.u) == null || !d.timestamp) && typeof a.ca === "function" && typeof a.da === "function" && typeof a.ja === "function" && typeof a.map === "function" && typeof a.oa === "function"
    };
    var me = Symbol("time-origin"),
        ne = Symbol("date"),
        oe = function(a, b) {
            this.value = a;
            this.timeline = b
        },
        pe = function(a, b) {
            if (b.timeline !== a.timeline) throw new ee;
        },
        qe = function(a, b) {
            pe(a, b);
            return a.value - b.value
        };
    n = oe.prototype;
    n.equals = function(a) {
        return qe(this, a) === 0
    };
    n.maximum = function(a) {
        pe(this, a);
        return this.value >= a.value ? this : a
    };
    n.round = function() {
        return new oe(Math.round(this.value), this.timeline)
    };
    n.add = function(a) {
        return new oe(this.value + a, this.timeline)
    };
    n.toString = function() {
        return String(this.value)
    };

    function re(a) {
        function b(c) {
            return typeof c === "boolean" || typeof c === "string" || typeof c === "number" || c === void 0 || c === null
        }
        return b(a) ? !0 : Array.isArray(a) ? a.every(b) : typeof a === "object" ? Object.keys(a).every(function(c) {
            return typeof c === "string"
        }) && Object.values(a).every(function(c) {
            return Array.isArray(c) ? c.every(b) : b(c)
        }) : !1
    }

    function se(a) {
        if (re(a)) return a;
        if (le(a)) return {
            u: {
                value: se(a.u.value),
                timestamp: qe(a.u.timestamp, new oe(0, a.u.timestamp.timeline))
            },
            active: a.active
        };
        try {
            return JSON.parse(JSON.stringify(a))
        } catch (b) {}
        return String(a)
    };
    var te = {
        Ei: "app",
        dj: "web"
    };
    var ue = ["sessionStart", "sessionError", "sessionFinish"],
        ve = function(a, b) {
            this.Y = a;
            this.kd = b;
            this.ready = !1;
            this.mb = [];
            this.Tf = function() {};
            this.jg = function() {};
            this.kf = function() {};
            this.sf = function() {};
            this.dd = function() {}
        },
        we = function(a, b) {
            a.Tf = b
        },
        xe = function(a, b) {
            a.jg = b
        },
        ye = function(a, b) {
            a.kf = b
        },
        ze = function(a, b) {
            a.sf = b
        },
        Ae = function(a, b) {
            a.dd = b;
            a.dd(a.mb.length)
        },
        Fe = function(a) {
            for (var b = u("geometryChange impression loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(" ")),
                    c = b.next(); !c.done; c = b.next()) a.Y.addEventListener(c.value, function(d) {
                Be(a, d)
            });
            Ce(a.Y, function(d) {
                d.type !== "sessionStart" && Be(a, d)
            }, a.kd);
            Ce(a.Y, function(d) {
                d.type === "sessionStart" && (Be(a, d), De(a), Ee(a))
            }, a.kd)
        },
        Be = function(a, b) {
            a.mb.push(b);
            a.dd(a.mb.length);
            Ee(a)
        },
        Ee = function(a) {
            if (a.ready)
                for (; a.mb.length > 0;) {
                    var b = a.mb.pop();
                    b !== void 0 && (b.type === "geometryChange" ? a.kf(b) : b.type === "impression" ? a.sf(b) : ue.includes(b.type) ? a.Tf(b) : a.jg(b));
                    a.dd(a.mb.length)
                }
        },
        De = function(a) {
            a.ready || (a.ready = !0,
                a.mb.sort(function(b, c) {
                    return c.timestamp - b.timestamp
                }))
        };

    function Ge(a) {
        return M(function(b, c) {
            var d = null,
                e = !1,
                f;
            d = b.subscribe(new L(c, void 0, function(g) {
                f = Wc(a(g, Ge(a)(b)));
                d ? (d.unsubscribe(), d = null, f.subscribe(c)) : e = !0
            }));
            e && (d.unsubscribe(), d = null, f.subscribe(c))
        })
    };

    function He(a, b, c) {
        return function(d, e) {
            var f = c,
                g = b,
                h = 0;
            d.subscribe(new L(e, function(k) {
                var l = h++;
                g = f ? a(g, k, l) : (f = !0, k);
                e.next(g)
            }, void 0, void 0))
        }
    };

    function Ie() {
        var a = B.apply(0, arguments),
            b = dd(a);
        return b ? H(Ie.apply(null, w(a)), rd(b)) : M(function(c, d) {
            yd([c].concat(w(Od(a))))(d)
        })
    }

    function Je() {
        return Ie.apply(null, w(B.apply(0, arguments)))
    };

    function Ke(a) {
        a = a === void 0 ? null : a;
        return M(function(b, c) {
            var d = !1;
            b.subscribe(new L(c, function(e) {
                d = !0;
                c.next(e)
            }, void 0, function() {
                d || c.next(a);
                c.complete()
            }))
        })
    };

    function Le() {
        return M(function(a, b) {
            a.subscribe(new L(b, wc))
        })
    };

    function Me(a) {
        return a <= 0 ? function() {
            return Ic
        } : M(function(b, c) {
            var d = 0;
            b.subscribe(new L(c, function(e) {
                ++d <= a && (c.next(e), a <= d && c.complete())
            }))
        })
    };

    function Ne(a) {
        return M(function(b, c) {
            var d = 0,
                e = !1,
                f = 0;
            b.subscribe(new L(c, function(g) {
                var h = !1,
                    k = function() {
                        c.next(g);
                        var m;
                        (m = l) == null || m.unsubscribe();
                        h || (f--, h = !0, e && !f && c.complete())
                    },
                    l = new L(c, k, void 0, k);
                f++;
                a(g, d++).subscribe(l)
            }, void 0, function() {
                (e = !0, !f) && c.complete()
            }))
        })
    };

    function Oe(a) {
        return M(function(b, c) {
            var d = new Set;
            b.subscribe(new L(c, function(e) {
                var f = a ? a(e) : e;
                d.has(f) || (d.add(f), c.next(e))
            }))
        })
    };

    function S(a) {
        var b = b === void 0 ? Cc : b;
        var c;
        a = (c = a) != null ? c : Pe;
        return M(function(d, e) {
            var f, g = !0;
            d.subscribe(new L(e, function(h) {
                var k = b(h);
                if (g || !a(f, k)) g = !1, f = k, e.next(h)
            }))
        })
    }

    function Pe(a, b) {
        return a === b
    };

    function Qe(a) {
        a = a === void 0 ? Re : a;
        return M(function(b, c) {
            var d = !1;
            b.subscribe(new L(c, function(e) {
                d = !0;
                c.next(e)
            }, void 0, function() {
                return d ? c.complete() : c.error(a())
            }))
        })
    }

    function Re() {
        return new ld
    };

    function Se() {
        var a = B.apply(0, arguments);
        return function(b) {
            return Ed(b, K.apply(null, w(a)))
        }
    };

    function Te(a) {
        return M(function(b, c) {
            b.subscribe(new L(c, function(d) {
                a.call(void 0, d, 0, b) || (c.next(!1), c.complete())
            }, void 0, function() {
                c.next(!0);
                c.complete()
            }))
        })
    };

    function Ue() {
        return M(function(a, b) {
            var c = [];
            a.subscribe(new L(b, function(d) {
                c.push(d);
                1 < c.length && c.shift()
            }, void 0, function() {
                for (; c.length;) b.next(c.shift());
                b.complete();
                c = null
            }))
        })
    };

    function Ve(a, b) {
        var c = arguments.length >= 2;
        return function(d) {
            return d.g(a ? Q(function(e, f) {
                return a(e, f, d)
            }) : Cc, Ue(), c ? Ke(b) : Qe(function() {
                return new ld
            }))
        }
    };

    function We(a) {
        return M(function(b, c) {
            b.subscribe(new L(c, function() {
                return c.next(a)
            }))
        })
    };

    function Xe(a) {
        var b = G(a) ? a : function() {
            return a
        };
        return G() ? M(function(c, d) {
            var e = b();
            (void 0)(e).subscribe(d).add(c.subscribe(e))
        }) : function(c) {
            var d = new od(c, b);
            G(c == null ? void 0 : c.kb) && (d.kb = c.kb);
            d.source = c;
            d.Yf = b;
            return d
        }
    };

    function Ye(a) {
        var b = new hd(a, void 0, void 0);
        return function(c) {
            return Xe(function() {
                return b
            })(c)
        }
    };

    function Ze() {
        var a = a === void 0 ? Infinity : a;
        return a <= 0 ? function() {
            return Ic
        } : M(function(b, c) {
            var d = 0,
                e, f = function() {
                    var g = !1;
                    e = b.subscribe(new L(c, void 0, void 0, function() {
                        ++d < a ? e ? (e.unsubscribe(), e = null, f()) : g = !0 : c.complete()
                    }));
                    g && (e.unsubscribe(), e = null, f())
                };
            f()
        })
    };

    function $e(a, b) {
        return M(He(a, b, arguments.length >= 2))
    };

    function af() {
        return new J
    }

    function bf() {
        return function(a) {
            return nd()(Xe(af)(a))
        }
    };

    function T() {
        var a = B.apply(0, arguments),
            b = ed(a);
        return M(function(c, d) {
            (b ? Ed(a, c, b) : Ed(a, c)).subscribe(d)
        })
    };

    function cf() {
        var a = a === void 0 ? 0 : a;
        return M(function(b, c) {
            c.add(Vd.A(function() {
                return b.subscribe(c)
            }, a))
        })
    };

    function U(a) {
        return M(function(b, c) {
            var d = null,
                e = 0,
                f = !1;
            b.subscribe(new L(c, function(g) {
                var h;
                (h = d) == null || h.unsubscribe();
                h = e++;
                Wc(a(g, h)).subscribe(d = new L(c, function(k) {
                    return c.next(k)
                }, void 0, function() {
                    d = null;
                    f && !d && c.complete()
                }))
            }, void 0, function() {
                (f = !0, !d) && c.complete()
            }))
        })
    };

    function df(a, b) {
        b = b === void 0 ? !1 : b;
        return M(function(c, d) {
            var e = 0;
            c.subscribe(new L(d, function(f) {
                var g = a(f, e++);
                (g || b) && d.next(f);
                !g && d.complete()
            }))
        })
    };

    function ef(a, b, c) {
        var d = G(a) || b || c ? {
            next: a,
            error: b,
            complete: c
        } : a;
        return d ? M(function(e, f) {
            e.subscribe(new L(f, function(g) {
                var h;
                (h = d.next) == null || h.call(d, g);
                f.next(g)
            }, function(g) {
                var h;
                (h = d.error) == null || h.call(d, g);
                f.error(g)
            }, function() {
                var g;
                (g = d.complete) == null || g.call(d);
                f.complete()
            }))
        }) : Cc
    };

    function ff() {
        var a = B.apply(0, arguments),
            b = dd(a);
        return M(function(c, d) {
            for (var e = a.length, f = Array(e), g = a.map(function() {
                    return !1
                }), h = !1, k = {
                    Ua: 0
                }; k.Ua < e; k = {
                    Ua: k.Ua
                }, k.Ua++) {
                var l = a[k.Ua],
                    m = void 0;
                try {
                    m = Wc(l)
                } catch (q) {
                    d.error(q);
                    return
                }
                m.subscribe(new L(d, function(q) {
                    return function(t) {
                        f[q.Ua] = t;
                        h || g[q.Ua] || (g[q.Ua] = !0, (h = g.every(Cc)) && (g = null))
                    }
                }(k), void 0, wc))
            }
            c.subscribe(new L(d, function(q) {
                h && (q = [q].concat(w(f)), d.next(b ? b.apply(null, w(q)) : q))
            }))
        })
    };
    var gf = function(a) {
        this.Y = a
    };
    gf.prototype.F = function(a) {
        return (a == null ? 0 : a.Tb) ? !0 : (a == null ? void 0 : a.ha) === "POST" || (a == null ? 0 : a.eb) || (a == null ? 0 : a.Lc) ? !1 : this.Y.F()
    };
    gf.prototype.ping = function() {
        var a = this,
            b = K.apply(null, w(B.apply(0, arguments))).g(Cd(function(c) {
                return hf(a, c)
            }), Te(function(c) {
                return c
            }), Ye(1));
        b.connect();
        return b
    };
    var hf = function(a, b) {
        var c = new hd(1);
        jf(a.Y, b, function() {
            c.next(!0);
            c.complete()
        }, function() {
            c.next(!1);
            c.complete()
        });
        return c
    };
    gf.prototype.cd = function(a, b, c) {
        this.ping.apply(this, w(B.apply(3, arguments)))
    };

    function kf(a, b) {
        var c = !1;
        return new I(function(d) {
            var e = a.setTimeout(function() {
                c = !0;
                d.next(!0);
                d.complete()
            }, b);
            return function() {
                c || a.clearTimeout(e)
            }
        })
    };
    var lf = function(a) {
        this.Y = a;
        this.timeline = ne
    };
    n = lf.prototype;
    n.setTimeout = function(a, b) {
        return Number(this.Y.setTimeout(function() {
            return a()
        }, b))
    };
    n.clearTimeout = function(a) {
        this.Y.clearTimeout(a)
    };
    n.now = function() {
        return new oe(Date.now(), this.timeline)
    };
    n.interval = function(a, b) {
        var c = this.Ga(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.Ga = function(a) {
        return kf(this, a).g(Ze(), $e(function(b) {
            return b + 1
        }, -1))
    };
    n.ba = function() {
        return !0
    };
    var mf = function(a, b) {
        this.context = a;
        this.Lb = b
    };
    mf.prototype.F = function(a) {
        return this.Lb.F(a)
    };
    mf.prototype.G = function(a, b) {
        if (!this.F(b)) throw new ce;
        return new nf(this.context, this.Lb, b != null ? b : void 0, a)
    };
    var nf = function(a, b, c, d) {
        var e = this;
        this.Lb = b;
        this.properties = c;
        this.url = d;
        this.Vc = !0;
        this.eb = new Map;
        this.body = void 0;
        var f;
        this.method = (f = c == null ? void 0 : c.ha) != null ? f : "GET";
        this.Ag = a.Ld().subscribe(function() {
            e.sendNow()
        })
    };
    nf.prototype.deactivate = function() {
        this.Vc = !1
    };
    nf.prototype.sendNow = function() {
        if (this.Vc)
            if (this.Ag.unsubscribe(), this.Lb.F(this.properties)) try {
                if (this.eb.size > 0 || this.body !== void 0) {
                    var a, b;
                    this.Lb.cd((a = this.properties) != null ? a : {}, this.eb, (b = this.body) != null ? b : "", this.url)
                } else this.Lb.ping(this.url);
                this.Vc = !1
            } catch (c) {} else this.Vc = !1
    };
    var pf = function(a, b, c, d, e, f) {
            this.mode = a;
            this.j = b;
            this.setTime = c;
            this.sc = d;
            this.si = e;
            this.Eg = f;
            this.za = !1;
            this.id = this.mode === 0 ? of (this) : 0
        },
        of = function(a) {
            return a.j.setTimeout(function() {
                qf(a)
            }, a.sc)
        },
        rf = function(a, b) {
            var c = qe(b, a.setTime);
            c >= a.sc ? qf(a) : (a.setTime = b, a.sc -= c)
        },
        qf = function(a) {
            try {
                a.si(a.setTime.add(a.sc))
            } finally {
                a.za = !0, a.Eg()
            }
        };
    pf.prototype.Ae = function(a, b) {
        this.za || (this.mode === 1 && a === 1 ? rf(this, b) : this.mode === 1 && a === 0 ? (this.mode = a, rf(this, this.j.now()), this.za || (this.id = of (this))) : this.mode === 0 && a === 1 && (this.mode = a, this.clear(), rf(this, b)))
    };
    pf.prototype.clear = function() {
        this.za || this.j.clearTimeout(this.id)
    };
    var sf = function(a) {
        this.Mc = a;
        this.kh = this.mode = 0;
        this.Eb = {};
        this.timeline = a.timeline;
        this.jb = a.now()
    };
    n = sf.prototype;
    n.Ae = function(a, b) {
        this.mode = a;
        pe(this.jb, b);
        this.jb = b;
        Object.values(this.Eb).forEach(function(c) {
            return void c.Ae(a, b)
        })
    };
    n.now = function() {
        return this.mode === 1 ? this.jb : this.Mc.now()
    };
    n.setTimeout = function(a, b) {
        var c = this,
            d = ++this.kh,
            e = this.mode === 1 ? this.jb : this.Mc.now();
        this.Eb[d] = new pf(this.mode, this.Mc, e, b, function(f) {
            var g = c.jb;
            c.mode === 1 && (c.jb = f);
            a();
            c.jb = g
        }, function() {
            delete c.Eb[d]
        });
        return d
    };
    n.clearTimeout = function(a) {
        this.Eb[a] && (this.Eb[a].clear(), delete this.Eb[a])
    };
    n.interval = function() {
        throw Error("z");
    };
    n.Ga = function() {
        throw Error("A");
    };
    n.ba = function() {
        return this.Mc.ba()
    };

    function tf(a, b) {
        var c = new sf(a);
        a = b.subscribe(function(d) {
            c.Ae(d.value ? 1 : 0, d.timestamp)
        });
        return {
            j: c,
            oj: a
        }
    };

    function uf(a) {
        var b = Object.assign({}, a);
        delete b.timestamp;
        return {
            timestamp: new oe(a.timestamp, ne),
            value: b
        }
    };

    function vf(a) {
        return a !== void 0 && typeof a.x === "number" && typeof a.y === "number" && typeof a.width === "number" && typeof a.height === "number"
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function wf(a) {
        var b = B.apply(1, arguments),
            c = b.length;
        if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !Bb && a === a.raw || !(Bb && !Cb || zb(a)) || c + 1 !== a.length) throw new TypeError("p");
        if (b.length === 0) return qb(a[0]);
        c = a[0].toLowerCase();
        if (/^data:/.test(c)) throw Error("H");
        if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
            var d = c.indexOf("//") + 2;
            var e = c.indexOf("/", d);
            if (e <= d) throw Error("B");
            d = c.substring(d, e);
            if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("C");
            if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("D");
            if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("E");
            d = !0
        } else d = !1;
        if (!d)
            if (/^\//.test(c))
                if (c === "/" || c.length > 1 && c[1] !== "/" && c[1] !== "\\") d = !0;
                else throw Error("G");
        else d = !1;
        if (!(d = d || RegExp("^[^:\\s\\\\/]+/").test(c)))
            if (/^about:blank/.test(c)) {
                if (c !== "about:blank" && !/^about:blank#/.test(c)) throw Error("F");
                d = !0
            } else d = !1;
        if (!d) throw Error("I");
        c = a[0];
        for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return qb(c)
    };
    var xf = fa(["https://www.googleadservices.com/pagead/managed/js/activeview/", "/reach_worklet.html"]),
        yf = fa(["./reach_worklet.js"]),
        zf = fa(["./reach_worklet.js"]),
        Af = fa(["./reach_worklet.html"]),
        Bf = fa(["./reach_worklet.js"]),
        Cf = fa(["./reach_worklet.js"]);

    function Df(a) {
        var b = {};
        return b[0] = wf(xf, a), b[1] = wf(yf), b[2] = wf(zf), b
    }
    wf(Af);
    wf(Bf);
    wf(Cf);
    var Ff = function(a, b, c, d) {
        c = c === void 0 ? null : c;
        d = d === void 0 ? Df("current") : d;
        Wd.call(this);
        this.Y = a;
        this.kd = b;
        this.Ba = c;
        this.Xf = d;
        this.Wa = null;
        this.se = new hd(3);
        this.se.g(Q(function(e) {
            return e.value.type === "sessionStart"
        }));
        this.hi = this.se.g(Q(function(e) {
            return e.value.type === "sessionFinish"
        }));
        this.tf = new hd(1);
        this.yi = new hd;
        this.lf = new hd(10);
        this.H = new mf(this, new gf(a));
        this.sh = this.Y.F();
        this.j = Ef(this, new lf(this.Y))
    };
    y(Ff, Wd);
    var Gf = function(a) {
        a.Wa !== null && Fe(a.Wa)
    };
    Ff.prototype.validate = function() {
        return this.sh
    };
    var Ef = function(a, b) {
        a.Wa = new ve(a.Y, a.kd);
        var c = new hd;
        we(a.Wa, function(f) {
            f = uf(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.se.next(f)
        });
        ye(a.Wa, function(f) {
            if (f === void 0) var g = !1;
            else {
                g = f.data;
                var h;
                (h = g === void 0) || (h = g.viewport, h = h === void 0 || h !== void 0 && typeof h.width === "number" && typeof h.height === "number");
                h ? (g = g.adView, g = g !== void 0 && typeof g.percentageInView === "number" && (g.geometry === void 0 || vf(g.geometry)) && (g.onScreenGeometry === void 0 || vf(g.onScreenGeometry))) : g = !1
            }
            g ? (f = uf(f), c.next({
                timestamp: f.timestamp,
                value: !0
            }), a.lf.next(f)) : .01 >= Math.random() && (f = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&name=invalid_geo&context=1092&msg=" + JSON.stringify(f), a.H.G(f).sendNow())
        });
        xe(a.Wa, function(f) {
            f = uf(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.yi.next(f)
        });
        ze(a.Wa, function(f) {
            f = uf(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.tf.next(f)
        });
        var d = 0;
        Ae(a.Wa, function(f) {
            d += f;
            d > 0 && f === 0 && c.next({
                timestamp: a.j.now(),
                value: !1
            })
        });
        var e = c.g(df(function(f) {
            return f.value
        }, !0));
        return tf(b,
            e).j
    };
    da.Object.defineProperties(Ff.prototype, {
        global: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Hf
            }
        }
    });
    var Hf = {};

    function If(a, b) {
        if (!b) throw Error("J`" + a);
        if (typeof b !== "string" && !(b instanceof String)) throw Error("K`" + a);
        if (b.trim() === "") throw Error("L`" + a);
    }

    function Jf(a) {
        if (!a) throw Error("O`functionToExecute");
    }

    function Kf(a, b) {
        if (b == null) throw Error("M`" + a);
        if (typeof b !== "number" || isNaN(b)) throw Error("N`" + a);
        if (b < 0) throw Error("P`" + a);
    };

    function Lf() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.4.10-google_20240110")
    }

    function Mf() {
        for (var a = ["1", "4", "10"], b = ["1", "0", "3"], c = 0; c < 3; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var Nf = function(a, b, c, d) {
            this.rf = a;
            this.method = b;
            this.version = c;
            this.args = d
        },
        Of = function(a) {
            return !!a && a.omid_message_guid !== void 0 && a.omid_message_method !== void 0 && a.omid_message_version !== void 0 && typeof a.omid_message_guid === "string" && typeof a.omid_message_method === "string" && typeof a.omid_message_version === "string" && (a.omid_message_args === void 0 || a.omid_message_args !== void 0)
        },
        Pf = function(a) {
            return new Nf(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        };
    Nf.prototype.Xa = function() {
        var a = {};
        a = (a.omid_message_guid = this.rf, a.omid_message_method = this.method, a.omid_message_version = this.version, a);
        this.args !== void 0 && (a.omid_message_args = this.args);
        return a
    };
    var Qf = function(a) {
        this.hd = a
    };
    Qf.prototype.Xa = function() {
        return JSON.stringify(void 0)
    };

    function Rf(a, b) {
        try {
            return a.frames && !!a.frames[b]
        } catch (c) {
            return !1
        }
    }
    var Sf = function(a) {
            return ["omid_v1_present", "omid_v1_present_web", "omid_v1_present_app"].some(function(b) {
                return Rf(a, b)
            })
        },
        Tf = function(a) {
            for (var b = u(Object.values(te)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = {};
                d = (d.app = "omid_v1_present_app", d.web = "omid_v1_present_web", d)[c];
                if (Rf(a, d)) return c
            }
            return null
        };

    function Uf(a, b) {
        return a && (a[b] || (a[b] = {}))
    };

    function Vf() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = Math.random() * 16 | 0;
            return a === "y" ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function Wf() {
        var a = B.apply(0, arguments);
        Xf(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(w(a))));
        }, function() {
            return console.error.apply(console, w(a))
        })
    }

    function Xf(a, b) {
        typeof jasmine !== "undefined" && jasmine ? a() : typeof console !== "undefined" && console && console.error && b()
    };
    var Yf = function() {
        if (typeof omidGlobal !== "undefined" && omidGlobal) return omidGlobal;
        if (typeof global !== "undefined" && global) return global;
        if (typeof window !== "undefined" && window) return window;
        if (typeof globalThis !== "undefined" && globalThis) return globalThis;
        var a = Function("return this")();
        if (a) return a;
        throw Error("Q");
    }();
    var Zf = function(a) {
        this.hd = a;
        this.handleExportedMessage = Zf.prototype.Yg.bind(this)
    };
    y(Zf, Qf);
    Zf.prototype.sendMessage = function(a, b) {
        b = b === void 0 ? this.hd : b;
        if (!b) throw Error("R");
        b.handleExportedMessage(a.Xa(), this)
    };
    Zf.prototype.Yg = function(a, b) {
        if (Of(a) && this.onMessage) this.onMessage(Pf(a), b)
    };

    function $f(a) {
        return a != null && typeof a.top !== "undefined" && a.top != null
    }

    function ag(a) {
        if (a === Yf) return !1;
        try {
            if (typeof a.location.hostname === "undefined") return !0
        } catch (b) {
            return !0
        }
        return !1
    }

    function bg() {
        var a;
        typeof a === "undefined" && typeof window !== "undefined" && window && (a = window);
        return $f(a) ? a : Yf
    };
    var cg = function(a, b) {
        this.hd = b = b === void 0 ? Yf : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if (typeof d.data === "object") {
                var e = d.data;
                if (Of(e) && d.source && c.onMessage) c.onMessage(Pf(e), d.source)
            }
        })
    };
    y(cg, Qf);
    cg.prototype.sendMessage = function(a, b) {
        b = b === void 0 ? this.hd : b;
        if (!b) throw Error("R");
        b.postMessage(a.Xa(), "*")
    };
    var dg = ["omid", "v1_VerificationServiceCommunication"],
        eg = ["omidVerificationProperties", "serviceWindow"];

    function fg(a, b) {
        return b.reduce(function(c, d) {
            return c && c[d]
        }, a)
    };
    var gg = function(a) {
        if (!a) {
            a = bg();
            var b = b === void 0 ? Sf : b;
            var c = [],
                d = fg(a, eg);
            d && c.push(d);
            c.push($f(a) ? a.top : Yf);
            a: {
                c = u(c);
                for (var e = c.next(); !e.done; e = c.next()) {
                    b: {
                        d = a;e = e.value;
                        var f = b;
                        if (!ag(e)) try {
                            var g = fg(e, dg);
                            if (g) {
                                var h = new Zf(g);
                                break b
                            }
                        } catch (k) {}
                        h = f(e) ? new cg(d, e) : null
                    }
                    if (d = h) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
        }
        if (this.Xb = a) this.Xb.onMessage = this.Zg.bind(this);
        else if (b = (b = Yf.omid3p) && typeof b.registerSessionObserver === "function" && typeof b.addEventListener === "function" ? b : null) this.pc = b;
        this.ai = this.bi =
            0;
        this.xd = {};
        this.Qd = [];
        this.fc = (b = Yf.omidVerificationProperties) ? b.injectionId : void 0
    };
    gg.prototype.F = function() {
        var a = bg();
        var b = (b = Yf.omidVerificationProperties) && b.injectionSource ? b.injectionSource : void 0;
        return (b || Tf(a) || Tf($f(a) ? a.top : Yf)) !== "web" || this.fc ? !(!this.Xb && !this.pc) : !1
    };
    var Ce = function(a, b, c) {
        Jf(b);
        a.pc ? a.pc.registerSessionObserver(b, c, a.fc) : a.Ob("addSessionListener", b, c, a.fc)
    };
    gg.prototype.addEventListener = function(a, b) {
        If("eventType", a);
        Jf(b);
        this.pc ? this.pc.addEventListener(a, b, this.fc) : this.Ob("addEventListener", b, a, this.fc)
    };
    var jf = function(a, b, c, d) {
            If("url", b);
            Yf.document && Yf.document.createElement ? hg(a, b, c, d) : a.Ob("sendUrl", function(e) {
                e && c ? c() : !e && d && d()
            }, b)
        },
        hg = function(a, b, c, d) {
            var e = Yf.document.createElement("img");
            a.Qd.push(e);
            var f = function(g) {
                var h = a.Qd.indexOf(e);
                h >= 0 && a.Qd.splice(h, 1);
                g && g()
            };
            e.addEventListener("load", f.bind(a, c));
            e.addEventListener("error", f.bind(a, d));
            e.src = b
        };
    gg.prototype.setTimeout = function(a, b) {
        Jf(a);
        Kf("timeInMillis", b);
        if (ig()) return Yf.setTimeout(a, b);
        var c = this.bi++;
        this.Ob("setTimeout", a, c, b);
        return c
    };
    gg.prototype.clearTimeout = function(a) {
        Kf("timeoutId", a);
        ig() ? Yf.clearTimeout(a) : this.Sf("clearTimeout", a)
    };
    gg.prototype.setInterval = function(a, b) {
        Jf(a);
        Kf("timeInMillis", b);
        if (jg()) return Yf.setInterval(a, b);
        var c = this.ai++;
        this.Ob("setInterval", a, c, b);
        return c
    };
    gg.prototype.clearInterval = function(a) {
        Kf("intervalId", a);
        jg() ? Yf.clearInterval(a) : this.Sf("clearInterval", a)
    };
    var ig = function() {
            return typeof Yf.setTimeout === "function" && typeof Yf.clearTimeout === "function"
        },
        jg = function() {
            return typeof Yf.setInterval === "function" && typeof Yf.clearInterval === "function"
        };
    gg.prototype.Zg = function(a) {
        var b = a.method,
            c = a.rf;
        a = a.args;
        if (b === "response" && this.xd[c]) {
            var d = Lf() && Mf() ? a ? a : [] : a && typeof a === "string" ? JSON.parse(a) : [];
            this.xd[c].apply(this, d)
        }
        b === "error" && window.console && Wf(a)
    };
    gg.prototype.Sf = function(a) {
        this.Ob.apply(this, [a, null].concat(w(B.apply(1, arguments))))
    };
    gg.prototype.Ob = function(a, b) {
        var c = B.apply(2, arguments);
        if (this.Xb) {
            var d = Vf();
            b && (this.xd[d] = b);
            var e = "VerificationService." + a;
            c = Lf() && Mf() ? c : JSON.stringify(c);
            this.Xb.sendMessage(new Nf(d, e, "1.4.10-google_20240110", c))
        }
    };
    var kg = void 0;
    if (kg = kg === void 0 ? typeof omidExports === "undefined" ? null : omidExports : kg) {
        var lg = ["OmidVerificationClient"];
        lg.slice(0, lg.length - 1).reduce(Uf, kg)[lg[lg.length - 1]] = gg
    };

    function mg(a, b) {
        return function(c) {
            return new I(function(d) {
                return c.subscribe(function(e) {
                    a.Qb(b, function() {
                        d.next(e)
                    })()
                }, function(e) {
                    a.Qb(b, function() {
                        d.error(e)
                    })()
                }, function() {
                    a.Qb(b, function() {
                        d.complete()
                    })()
                })
            })
        }
    };
    var og = function() {
        for (var a = u(B.apply(0, arguments)), b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.ba()) {
                this.j = b;
                return
            }
        this.j = new ng
    };
    n = og.prototype;
    n.ba = function() {
        return this.j.ba()
    };
    n.now = function() {
        return this.j.now()
    };
    n.setTimeout = function(a, b) {
        return this.j.setTimeout(a, b)
    };
    n.clearTimeout = function(a) {
        this.j.clearTimeout(a)
    };
    n.interval = function(a, b) {
        var c = this.Ga(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.Ga = function(a) {
        return this.j.Ga(a)
    };
    da.Object.defineProperties(og.prototype, {
        timeline: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.timeline
            }
        }
    });
    var ng = function() {
        this.timeline = Symbol()
    };
    n = ng.prototype;
    n.ba = function() {
        return !1
    };
    n.now = function() {
        return new oe(0, this.timeline)
    };
    n.setTimeout = function() {
        return 0
    };
    n.clearTimeout = function() {};
    n.interval = function() {
        return function() {}
    };
    n.Ga = function() {
        return Md
    };
    var pg = function(a, b) {
        this.K = a;
        this.B = b
    };
    n = pg.prototype;
    n.setTimeout = function(a, b) {
        return this.K.setTimeout(this.B.Qb(734, a), b)
    };
    n.clearTimeout = function(a) {
        this.K.clearTimeout(a)
    };
    n.interval = function(a, b) {
        var c = this.Ga(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.Ga = function(a) {
        var b = this;
        return new I(function(c) {
            var d = 0,
                e = b.K.setInterval(function() {
                    c.next(d++)
                }, a);
            return function() {
                b.K.clearInterval(e)
            }
        })
    };
    n.ba = function() {
        return !!this.K.clearTimeout && "setTimeout" in this.K && "setInterval" in this.K && !!this.K.clearInterval
    };
    var qg = function(a, b) {
        pg.call(this, a, b);
        this.timeline = ne
    };
    y(qg, pg);
    qg.prototype.now = function() {
        return new oe(this.K.Date.now(), this.timeline)
    };
    qg.prototype.ba = function() {
        return !!this.K.Date && !!this.K.Date.now && pg.prototype.ba.call(this)
    };
    var rg = function(a, b) {
        pg.call(this, a, b);
        this.timeline = me
    };
    y(rg, pg);
    rg.prototype.now = function() {
        return new oe(this.K.performance.now(), this.timeline)
    };
    rg.prototype.ba = function() {
        return !!this.K.performance && !!this.K.performance.now && pg.prototype.ba.call(this)
    };

    function sg(a) {
        a = a.global;
        if (a.fetchLater) return a.fetchLater.bind(a)
    }

    function tg(a) {
        var b, c, d = (b = a.global) == null ? void 0 : (c = b.document) == null ? void 0 : c.createElement("meta");
        if (d) try {
            return d.httpEquiv = "origin-trial", d.content = "AxjhRadLCARYRJawRjMjq4U8V8okQvSnrBIJWdMajuEkN3/DfVAcLcFhMVrUWnOXagwlI8dQD84FwJDGj9ohqAYAAABveyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJGZXRjaExhdGVyQVBJIiwiZXhwaXJ5IjoxNzI1NDA3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", a.global.document.head.append(d), d
        } catch (e) {}
    }
    var vg = function(a) {
            this.context = a;
            ug === void 0 && (ug = tg(a))
        },
        ug;
    vg.prototype.F = function(a) {
        return sg(this.context) !== void 0 && !(a == null || !a.bf) && !wg(this.context) && !(a == null ? 0 : a.Tb) && !(a == null ? 0 : a.eb) && !(a == null ? 0 : a.Lc)
    };
    vg.prototype.G = function(a, b) {
        if (!this.F(b)) throw new ce;
        return new xg(this.context, a, b)
    };
    var xg = function(a, b, c) {
            this.context = a;
            this.properties = c;
            this.sb = b;
            var d;
            this.ha = (d = c == null ? void 0 : c.ha) != null ? d : "GET";
            a = sg(this.context);
            if (a === void 0) throw Error();
            this.fetchLater = a;
            yg(this, this.jc())
        },
        yg = function(a, b) {
            a.Oa && a.Oa.activated || (a.Ub = new AbortController, a.Oa = a.fetchLater(b, {
                method: a.ha,
                cache: "no-cache",
                mode: "no-cors",
                signal: a.Ub.signal,
                activateAfter: 96E4
            }))
        };
    xg.prototype.jc = function() {
        var a = this.sb;
        return (a.slice(-1)[0] === "&" ? a : a + "&") + "flapi=1"
    };
    xg.prototype.deactivate = function() {
        this.Oa && !this.Oa.activated && this.Ub && (this.Ub.abort(), this.Oa = void 0)
    };
    xg.prototype.sendNow = function() {};
    da.Object.defineProperties(xg.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.sb
            },
            set: function(a) {
                this.sb = a;
                a = this.jc();
                this.Oa && this.Oa.activated || !this.Ub || (this.Ub.abort(), this.Oa = void 0);
                yg(this, a)
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ha
            }
        }
    });
    var zg = function(a) {
        this.context = a
    };
    zg.prototype.F = function() {
        return !wg(this.context) && !!this.context.global.fetch
    };
    zg.prototype.ping = function() {
        var a = this;
        return Ld.apply(null, w(B.apply(0, arguments).map(function(b) {
            return Vc(a.context.global.fetch(b, {
                method: "GET",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors"
            })).g(N(function(c) {
                return c.status === 200
            }))
        }))).g(Te(function(b) {
            return b
        }), Ve())
    };
    zg.prototype.cd = function(a, b, c) {
        for (var d = B.apply(3, arguments), e = this, f = new Headers, g = u(b.entries()), h = g.next(); !h.done; h = g.next()) {
            var k = u(h.value);
            h = k.next().value;
            k = k.next().value;
            f.set(h, k)
        }
        var l, m = (l = a.keepAlive) != null ? l : !1;
        Ld.apply(null, w(d.map(function(q) {
            return Vc(e.context.global.fetch(q, Object.assign({}, {
                method: String(a.ha),
                cache: "no-cache"
            }, m ? {
                keepalive: !0
            } : {}, {
                mode: "no-cors",
                headers: f,
                body: c
            }))).g(N(function(t) {
                return t.status === 200
            }))
        }))).g(Te(function(q) {
            return q
        }), Ve())
    };
    var Ag = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var Bg = function(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    };
    n = Bg.prototype;
    n.clone = function() {
        return new Bg(this.x, this.y)
    };
    n.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    n.equals = function(a) {
        return a instanceof Bg && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    n.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    n.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    n.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    n.translate = function(a, b) {
        a instanceof Bg ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), typeof b === "number" && (this.y += b));
        return this
    };
    n.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };
    var Cg = function(a, b) {
        this.width = a;
        this.height = b
    };
    n = Cg.prototype;
    n.clone = function() {
        return new Cg(this.width, this.height)
    };
    n.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    n.aspectRatio = function() {
        return this.width / this.height
    };
    n.isEmpty = function() {
        return !(this.width * this.height)
    };
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    n.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };
    var Dg = Ia(1, !0),
        Eg = Ia(610401301, !1);
    Ia(899588437, !1);
    Ia(188588736, !0);
    Ia(641353869, !0);
    Ia(644029907, Dg);
    Ia(1822726157, Dg);
    Ia(661449076, !1);
    var Fg = Ia(645172343, Dg);
    Ia(651175828, !0);
    Ia(653718497, Dg);
    var Gg = Ia(660014094, !0);
    Ia(2147483644, !1);
    Ia(2147483645, !0);
    Ia(2147483646, Dg);
    Ia(2147483647, !0);

    function Hg() {
        var a = Ha.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ig, Jg = Ha.navigator;
    Ig = Jg ? Jg.userAgentData || null : null;

    function Kg(a) {
        return Eg ? Ig ? Ig.brands.some(function(b) {
            return (b = b.brand) && b.indexOf(a) != -1
        }) : !1 : !1
    }

    function V(a) {
        return Hg().indexOf(a) != -1
    };

    function Lg() {
        return Eg ? !!Ig && Ig.brands.length > 0 : !1
    }

    function Mg() {
        return Lg() ? !1 : V("Opera")
    }

    function Ng() {
        return Lg() ? !1 : V("Trident") || V("MSIE")
    }

    function Og() {
        return V("Firefox") || V("FxiOS")
    }

    function Pg() {
        return V("Safari") && !(Qg() || (Lg() ? 0 : V("Coast")) || Mg() || (Lg() ? 0 : V("Edge")) || (Lg() ? Kg("Microsoft Edge") : V("Edg/")) || (Lg() ? Kg("Opera") : V("OPR")) || Og() || V("Silk") || V("Android"))
    }

    function Qg() {
        return Lg() ? Kg("Chromium") : (V("Chrome") || V("CriOS")) && !(Lg() ? 0 : V("Edge")) || V("Silk")
    }

    function Rg() {
        return V("Android") && !(Qg() || Og() || Mg() || V("Silk"))
    }

    function Sg() {
        var a = Hg();
        if (Ng()) {
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
        } else a = "";
        return a
    }

    function Tg() {
        if (Lg()) {
            var a = Ig.brands.find(function(b) {
                return b.brand === "Internet Explorer"
            });
            if (!a || !a.version) return NaN;
            a = a.version.split(".")
        } else {
            a = Sg();
            if (a === "") return NaN;
            a = a.split(".")
        }
        return a.length === 0 ? NaN : Number(a[0])
    };

    function Ug() {
        return Eg ? !!Ig && !!Ig.platform : !1
    }

    function Vg() {
        return V("iPhone") && !V("iPod") && !V("iPad")
    }

    function Wg() {
        Vg() || V("iPad") || V("iPod")
    };
    var Xg = function(a) {
        Xg[" "](a);
        return a
    };
    Xg[" "] = function() {};
    var Yg = function(a, b) {
        try {
            return Xg(a[b]), !0
        } catch (c) {}
        return !1
    };
    Mg();
    var Zg = Ng();
    V("Edge");
    var $g = V("Gecko") && !(Xa(Hg(), "WebKit") && !V("Edge")) && !(V("Trident") || V("MSIE")) && !V("Edge"),
        ah = Xa(Hg(), "WebKit") && !V("Edge");
    ah && V("Mobile");
    Ug() || V("Macintosh");
    Ug() || V("Windows");
    (Ug() ? Ig.platform === "Linux" : V("Linux")) || Ug() || V("CrOS");
    Ug() || V("Android");
    Vg();
    V("iPad");
    V("iPod");
    Wg();
    Xa(Hg(), "KaiOS");
    var dh = function(a) {
            return a ? new bh(ch(a)) : Za || (Za = new bh)
        },
        eh = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : ah || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
            a = a.defaultView;
            return new Bg(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        fh = function(a, b, c) {
            function d(h) {
                h && b.appendChild(typeof h === "string" ? a.createTextNode(h) : h)
            }
            for (var e = 1; e < c.length; e++) {
                var f = c[e];
                if (!Ka(f) || La(f) && f.nodeType > 0) d(f);
                else {
                    a: {
                        if (f && typeof f.length == "number") {
                            if (La(f)) {
                                var g =
                                    typeof f.item == "function" || typeof f.item == "string";
                                break a
                            }
                            if (typeof f === "function") {
                                g = typeof f.item == "function";
                                break a
                            }
                        }
                        g = !1
                    }
                    Jb(g ? Nb(f) : f, d)
                }
            }
        },
        ch = function(a) {
            E(a, "Node cannot be null or undefined.");
            return a.nodeType == 9 ? a : a.ownerDocument || a.document
        },
        gh = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                E(a.name != "parentNode");
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        bh = function(a) {
            this.ac = a || Ha.document || document
        };
    n = bh.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.ac).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.ac;
        a = String(a);
        b.contentType === "application/xhtml+xml" && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.ac.createTextNode(String(a))
    };
    n.appendChild = function(a, b) {
        E(a != null && b != null, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    n.append = function(a, b) {
        fh(ch(a), a, arguments)
    };
    n.canHaveChildren = function(a) {
        if (a.nodeType != 1) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    n.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    n.isElement = function(a) {
        return La(a) && a.nodeType == 1
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var ih = function() {
            return Eg && Ig ? Ig.mobile : !hh() && (V("iPod") || V("iPhone") || V("Android") || V("IEMobile"))
        },
        hh = function() {
            return Eg && Ig ? !Ig.mobile && (V("iPad") || V("Android") || V("Silk")) : V("iPad") || V("Android") && !V("Mobile") || V("Silk")
        };
    var jh = function(a) {
        try {
            return !!a && a.location.href != null && Yg(a, "foo")
        } catch (b) {
            return !1
        }
    };
    var kh = function(a) {
        this.context = a
    };
    kh.prototype.F = function(a) {
        return (a == null ? 0 : a.Tb) || (a == null ? void 0 : a.ha) === "POST" || (a == null ? 0 : a.eb) || (a == null ? 0 : a.Lc) || (a == null ? 0 : a.keepAlive) ? !1 : !wg(this.context)
    };
    kh.prototype.ping = function() {
        var a = this;
        return K(B.apply(0, arguments).map(function(b) {
            try {
                var c = a.context.global;
                c.google_image_requests || (c.google_image_requests = []);
                var d = c.document;
                d = d === void 0 ? document : d;
                var e = d.createElement("img");
                e.src = b;
                c.google_image_requests.push(e);
                return !0
            } catch (f) {
                return !1
            }
        }).every(function(b) {
            return b
        }))
    };
    kh.prototype.cd = function(a, b, c) {
        this.ping.apply(this, w(B.apply(3, arguments)))
    };

    function lh(a) {
        a = a.global;
        if (a.PendingGetBeacon) return a.PendingGetBeacon
    }
    var mh = function(a) {
        this.context = a
    };
    mh.prototype.F = function(a) {
        return nh && !wg(this.context) && lh(this.context) !== void 0 && !(a == null ? 0 : a.Tb) && (a == null ? void 0 : a.ha) !== "POST" && !(a == null ? 0 : a.eb) && !(a == null ? 0 : a.Lc)
    };
    mh.prototype.G = function(a, b) {
        if (!this.F(b)) throw new ce;
        return new oh(this.context, a)
    };
    var nh = !1,
        oh = function(a, b) {
            this.context = a;
            this.sb = b;
            a = lh(this.context);
            if (a === void 0) throw Error();
            this.Fe = new a(this.jc(), {})
        };
    oh.prototype.jc = function() {
        var a = this.sb;
        return (a.slice(-1)[0] === "&" ? a : a + "&") + "pbapi=1"
    };
    oh.prototype.deactivate = function() {
        this.Fe.deactivate()
    };
    oh.prototype.sendNow = function() {
        this.Fe.sendNow()
    };
    da.Object.defineProperties(oh.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.sb
            },
            set: function(a) {
                this.sb = a;
                this.Fe.setURL(this.jc())
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "GET"
            },
            set: function(a) {
                if (a !== "GET") throw new ce;
            }
        }
    });
    var ph = function(a) {
        this.context = a
    };
    ph.prototype.F = function(a) {
        if ((a == null ? 0 : a.Tb) || (a == null ? void 0 : a.ha) === "GET" || (a == null ? 0 : a.eb) || (a == null ? 0 : a.Lc) || (a == null ? 0 : a.keepAlive)) return !1;
        var b;
        return !wg(this.context) && ((b = this.context.global.navigator) == null ? void 0 : b.sendBeacon) !== void 0
    };
    ph.prototype.ping = function() {
        var a = this;
        return K(B.apply(0, arguments).map(function(b) {
            var c;
            return (c = a.context.global.navigator) == null ? void 0 : c.sendBeacon(b)
        }).every(function(b) {
            return b
        }))
    };
    ph.prototype.cd = function(a, b, c) {
        this.ping.apply(this, w(B.apply(3, arguments)))
    };

    function qh(a) {
        return function(b) {
            return b.g(rh(a, Xe(new J)))
        }
    }

    function W(a, b) {
        return function(c) {
            return c.g(rh(a, Ye(b)))
        }
    }

    function rh(a, b) {
        function c(d) {
            return new I(function(e) {
                return d.subscribe(function(f) {
                    Va(a, function() {
                        return void e.next(f)
                    }, 3)
                }, function(f) {
                    Va(a, function() {
                        return void e.error(f)
                    }, 3)
                }, function() {
                    Va(a, function() {
                        return void e.complete()
                    }, 3)
                })
            })
        }
        return H(c, cf(), b, nd(), c)
    };
    var Y = function(a) {
        this.value = a
    };
    Y.prototype.P = function(a) {
        return K(this.value).g(W(a, 1))
    };
    var sh = new Y(!1);

    function th(a) {
        Ha.setTimeout(function() {
            throw a;
        }, 0)
    };
    Og();
    Vg() || V("iPod");
    V("iPad");
    Rg();
    Qg();
    Pg() && Wg();
    var uh = {},
        vh = null,
        wh = $g || ah || typeof Ha.btoa == "function",
        yh = function(a) {
            var b;
            E(Ka(a), "encodeByteArray takes an array as a parameter");
            b === void 0 && (b = 0);
            xh();
            b = uh[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = "" + l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        Ah = function(a) {
            var b =
                a.length,
                c = b * 3 / 4;
            c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            zh(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        zh = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = vh[l];
                    if (m != null) return m;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("T`" + l);
                }
                return k
            }
            xh();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (h === 64 && e === -1) break;
                b(e << 2 | f >> 4);
                g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
            }
        },
        xh = function() {
            if (!vh) {
                vh = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                    var d = a.concat(b[c].split(""));
                    uh[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e],
                            g = vh[f];
                        g === void 0 ? vh[f] = e : E(g === e)
                    }
                }
            }
        };

    function Bh(a) {
        var b = Ch(a);
        return b === null ? new Y(null) : b.g(N(function(c) {
            c = c.Xa();
            if (wh) c = Ha.btoa(c);
            else {
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    if (g > 255) throw Error("S");
                    d[e++] = g
                }
                c = yh(d)
            }
            return c
        }), Me(1), W(a.h, 1))
    };

    function Dh(a) {
        var b = b === void 0 ? {} : b;
        if (typeof Event === "function") return new Event(a, b);
        if (typeof document !== "undefined") {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
            return c
        }
        throw Error();
    };
    var Eh = function(a) {
        this.value = a;
        this.ne = new J
    };
    Eh.prototype.release = function() {
        this.ne.next();
        this.ne.complete();
        this.value = void 0
    };
    da.Object.defineProperties(Eh.prototype, {
        i: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.value
            }
        },
        released: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ne
            }
        }
    });
    var Fh = ["FRAME", "IMG", "IFRAME"],
        Gh = /^[01](px)?$/,
        Hh = function() {
            this.uh = this.Oe = this.Mf = this.We = !1
        },
        Ih = function() {
            var a = new Hh;
            a.We = !0;
            a.Mf = !0;
            return a
        };

    function Jh(a) {
        return typeof a === "string" ? document.getElementById(a) : a
    }

    function Kh(a, b) {
        b = b === void 0 ? !1 : b;
        if (a.tagName === "IMG") {
            if (a.complete && (!a.naturalWidth || !a.naturalHeight)) return !0;
            var c;
            if (b && ((c = a.style) == null ? void 0 : c.display) === "none") return !0
        }
        var d, e;
        return Gh.test((d = a.getAttribute("width")) != null ? d : "") && Gh.test((e = a.getAttribute("height")) != null ? e : "")
    }

    function Lh(a, b) {
        if (a.tagName === "IMG") return a.naturalWidth && a.naturalHeight ? !0 : !1;
        try {
            if (a.readyState) var c = a.readyState;
            else {
                var d, e;
                c = (d = a.contentWindow) == null ? void 0 : (e = d.document) == null ? void 0 : e.readyState
            }
            return c === "complete"
        } catch (f) {
            return b === void 0 ? !1 : b
        }
    }

    function Mh(a) {
        a || (a = function(b, c, d) {
            b.addEventListener(c, d)
        });
        return a
    }

    function Nh(a, b) {
        var c = Ih();
        c = c === void 0 ? new Hh : c;
        if (a = Jh(a)) {
            var d = Mh(d);
            for (var e = !1, f = function(A) {
                    e || (e = !0, b(A))
                }, g, h = 2, k = 0; k < Fh.length; ++k)
                if (Fh[k] === a.tagName) {
                    h = 3;
                    g = [a];
                    break
                }
            g || (g = a.querySelectorAll(Fh.join(",")));
            var l = 0,
                m = 0,
                q = !c.Oe,
                t = a = !1;
            k = {};
            for (var r = 0; r < g.length; k = {
                    Wc: void 0
                }, r++) {
                var x = g[r];
                if (!Kh(x, c.Oe))
                    if (k.Wc = x.tagName === "IMG", Lh(x, c.We)) a = !0, k.Wc && (q = !0);
                    else {
                        l++;
                        var v = function(A) {
                            return function(C) {
                                l--;
                                !l && q && f(h);
                                A.Wc && (C = C && C.type === "error", m--, C || (q = !0), !m && t && q && f(h))
                            }
                        }(k);
                        d(x, "load", v);
                        k.Wc && (m++, d(x, "error", v))
                    }
            }
            m === 0 && (q = !0);
            g = null;
            g = Ha.document.readyState === "complete";
            if (c.uh && g) {
                if (m > 0) {
                    t = !0;
                    return
                }
                h = 5
            } else if (l === 0 && !a && g) h = 5;
            else if (l || !a) {
                d(Ha, "load", function() {
                    !c.Mf || !m && q ? f(4) : t = !0
                });
                return
            }
            f(h)
        }
    };

    function Oh(a, b, c) {
        if (a)
            for (var d = 0; a != null && d < 500 && !c(a); ++d) a = b(a)
    }

    function Ph(a, b) {
        Oh(a, function(c) {
            try {
                return c === c.parent ? null : c.parent
            } catch (d) {}
            return null
        }, b)
    }

    function Qh(a, b) {
        if (a.tagName == "IFRAME") b(a);
        else {
            a = a.querySelectorAll("IFRAME");
            for (var c = 0; c < a.length && !b(a[c]); ++c);
        }
    }

    function Rh(a) {
        return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null
    }

    function Sh(a, b, c) {
        try {
            var d = JSON.parse(c.data)
        } catch (g) {}
        if (typeof d === "object" && d && d.type === "creativeLoad") {
            var e = Rh(a);
            if (c.source && e) {
                var f;
                Ph(c.source, function(g) {
                    try {
                        if (g.parent === e) return f = g, !0
                    } catch (h) {}
                });
                f && Qh(a, function(g) {
                    if (g.contentWindow === f) return b(d), !0
                })
            }
        }
    }

    function Th(a) {
        return typeof a === "string" ? document.getElementById(a) : a
    }
    var Uh = function(a, b) {
        var c = Th(a);
        if (c)
            if (c.onCreativeLoad) c.onCreativeLoad(b);
            else {
                var d = b ? [b] : [],
                    e = function(f) {
                        for (var g = 0; g < d.length; ++g) try {
                            d[g](1, f)
                        } catch (h) {}
                        d = {
                            push: function(h) {
                                h(1, f)
                            }
                        }
                    };
                c.onCreativeLoad = function(f) {
                    d.push(f)
                };
                c.setAttribute("data-creative-load-listener", "");
                c.addEventListener("creativeLoad", function(f) {
                    e(f.detail)
                });
                Ha.addEventListener("message", function(f) {
                    Sh(c, e, f)
                })
            }
    };
    var Vh = function(a, b) {
            var c = this;
            this.global = a;
            this.ad = b;
            this.Ph = this.document ? Ld(K(!0), Fd(this.document, "visibilitychange")).g(mg(this.ad.B, 748), N(function() {
                return c.document ? c.document.visibilityState : "visible"
            }), S()) : K("visible");
            this.Mh = this.document ? Fd(this.document, "DOMContentLoaded").g(mg(this.ad.B, 739), Me(1)) : K(Dh("DOMContentLoaded"))
        },
        Yh = function(a) {
            return a.document ? a.document.readyState : "complete"
        },
        Zh = function(a) {
            return a.document !== null && a.document.visibilityState !== void 0
        };
    Vh.prototype.querySelector = function(a) {
        return this.document ? this.document.querySelector(a) : null
    };
    Vh.prototype.querySelectorAll = function(a) {
        return this.document ? Nb(this.document.querySelectorAll(a)) : []
    };
    var $h = function(a) {
        return a.document !== null && typeof a.document.elementFromPoint === "function"
    };
    Vh.prototype.elementFromPoint = function(a, b) {
        if (!this.document || !$h(this)) return null;
        a = this.document.elementFromPoint(a, b);
        return a === null ? null : new Eh(a)
    };
    var ai = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            if (b.i === void 0 || !a.document) return K(b).g(mg(a.ad.B, 749));
            var d = new hd(1),
                e = function() {
                    d.next(b)
                };
            c || Uh(b.i, e);
            Nh(b.i, e);
            return d.g(mg(a.ad.B, 749), Me(1))
        },
        bi = function(a, b) {
            a = a.document;
            if (!a) return K(!1);
            var c = Ld(K(null), Fd(a, "DOMContentLoaded", {
                    once: !0
                }), Fd(a, "load", {
                    once: !0
                })),
                d = new Eh({
                    document: a,
                    element: b
                });
            return c.g(N(function() {
                if (!d.i) return !1;
                var e = d.i,
                    f = e.document;
                e = e.element;
                var g, h, k = (h = (g = f.body) != null ? g : f.children[0]) != null ? h : f;
                try {
                    k.appendChild(e),
                        d.release()
                } catch (l) {}
                return !d.i
            }), Q(function(e) {
                return e
            }), Me(1), Ke(!1), ef({
                complete: function() {
                    return void d.release()
                }
            }))
        },
        ci = function(a, b, c) {
            var d, e, f;
            return Ca(function(g) {
                if (g.N == 1) {
                    d = a.global.document.createElement("iframe");
                    e = new Promise(function(k) {
                        d.onload = k;
                        d.onerror = k
                    });
                    if (b instanceof pb && b.constructor === pb) var h = b.Nf;
                    else cb("expected object of type TrustedResourceUrl, got '%s' of type %s", b, Ja(b)), h = "type_error:TrustedResourceUrl";
                    d.src = h.toString();
                    return sa(g, md(bi(a, d)), 2)
                }
                if (g.N !=
                    3) {
                    if (!g.ub) return g.return();
                    d.style.display = "none";
                    return sa(g, e, 3)
                }
                f = d.contentWindow;
                if (!f) return g.return();
                f.postMessage(c, "*");
                return g.return(d)
            })
        };
    da.Object.defineProperties(Vh.prototype, {
        document: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Yg(this.global, "document") ? this.global.document || null : null
            }
        }
    });
    var di = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };

    function ei(a, b) {
        return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height
    }

    function fi(a, b) {
        return {
            left: Math.max(a.left, b.left),
            top: Math.max(a.top, b.top),
            width: Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)),
            height: Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top))
        }
    }

    function gi(a, b) {
        return {
            left: Math.round(a.left + b.x),
            top: Math.round(a.top + b.y),
            width: a.width,
            height: a.height
        }
    };
    var hi = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    n = hi.prototype;
    n.Md = function() {
        return this.right - this.left
    };
    n.Kd = function() {
        return this.bottom - this.top
    };
    n.clone = function() {
        return new hi(this.top, this.right, this.bottom, this.left)
    };
    n.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    n.contains = function(a) {
        return this && a ? a instanceof hi ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    n.expand = function(a, b, c, d) {
        La(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    n.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    n.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    n.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    n.translate = function(a, b) {
        a instanceof Bg ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (db(a), this.left += a, this.right += a, typeof b === "number" && (this.top += b, this.bottom += b));
        return this
    };
    n.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function ii(a, b) {
        if (a) throw Error("U");
        b.push(65533)
    }

    function ji(a, b) {
        b = String.fromCharCode.apply(null, b);
        return a == null ? b : a + b
    }
    var ki = void 0,
        li, mi, ni = typeof TextDecoder !== "undefined",
        oi, pi = typeof String.prototype.isWellFormed === "function",
        qi = typeof TextEncoder !== "undefined";
    var ri = typeof Uint8Array !== "undefined",
        si = !Zg && typeof btoa === "function";

    function ti(a) {
        if (!si) return yh(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    var ui = /[-_.]/g,
        vi = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function wi(a) {
        return vi[a] || ""
    }

    function xi(a) {
        if (!si) return Ah(a);
        var b = a;
        ui.test(b) && (b = b.replace(ui, wi));
        try {
            var c = atob(b)
        } catch (d) {
            throw Error("W`" + a + "`" + d);
        }
        a = new Uint8Array(c.length);
        for (b = 0; b < c.length; b++) a[b] = c.charCodeAt(b);
        return a
    }
    var yi = {};
    var zi, Bi = function(a, b) {
        if (b !== yi) throw Error("X");
        this.zc = a;
        if (a != null && a.length === 0) throw Error("Y");
        this.dontPassByteStringToStructuredClone = Ai
    };
    Bi.prototype.isEmpty = function() {
        return this.zc == null
    };

    function Ai() {};

    function Ci(a) {
        kb(a, Bi);
        if (yi !== yi) throw Error("X");
        var b = a.zc;
        b == null || ri && b != null && b instanceof Uint8Array || (typeof b === "string" ? b = xi(b) : (cb("Cannot coerce to Uint8Array: " + Ja(b)), b = null));
        return (b == null ? b : a.zc = b) || new Uint8Array(0)
    };

    function Di(a) {
        if (typeof a === "string") return {
            buffer: xi(a),
            gb: !1
        };
        if (Array.isArray(a)) return {
            buffer: new Uint8Array(a),
            gb: !1
        };
        if (a.constructor === Uint8Array) return {
            buffer: a,
            gb: !1
        };
        if (a.constructor === ArrayBuffer) return {
            buffer: new Uint8Array(a),
            gb: !1
        };
        if (a.constructor === Bi) return {
            buffer: Ci(a),
            gb: !0
        };
        if (a instanceof Uint8Array) return {
            buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
            gb: !1
        };
        throw Error("ha");
    };
    var Ei = typeof Uint8Array.prototype.slice === "function",
        Fi = 0,
        Gi = 0,
        Hi;

    function Ii(a) {
        var b = a >>> 0;
        Fi = b;
        Gi = (a - b) / 4294967296 >>> 0
    }

    function Ji(a) {
        if (a < 0) {
            Ii(0 - a);
            var b = u(Ki());
            a = b.next().value;
            b = b.next().value;
            Fi = a >>> 0;
            Gi = b >>> 0
        } else Ii(a)
    }

    function Li(a) {
        E(a <= 8);
        return Hi || (Hi = new DataView(new ArrayBuffer(8)))
    }

    function Mi() {
        var a = Fi,
            b = Gi;
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151) var c = "" + (4294967296 * b + a);
        else typeof BigInt === "function" ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), E(b), c = b + Ni(c) + Ni(a));
        return c
    }

    function Ni(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function Oi(a) {
        E(a.length > 0);
        if (a.length < 16) Ji(Number(a));
        else if (typeof BigInt === "function") a = BigInt(a), Fi = Number(a & BigInt(4294967295)) >>> 0, Gi = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            E(a.length > 0);
            var b = +(a[0] === "-");
            Gi = Fi = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Gi *= 1E6, Fi = Fi * 1E6 + d, Fi >= 4294967296 && (Gi += Math.trunc(Fi / 4294967296), Gi >>>= 0, Fi >>>= 0);
            b && (b = u(Ki()), a = b.next().value, b = b.next().value, Fi = a, Gi = b)
        }
    }

    function Ki() {
        var a = Fi,
            b = Gi;
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    var Pi = function(a, b) {
        this.sa = null;
        this.wd = !1;
        this.I = this.ta = this.La = 0;
        this.dc(a, void 0, void 0, b)
    };
    n = Pi.prototype;
    n.dc = function(a, b, c, d) {
        d = d === void 0 ? {} : d;
        this.Fc = d.Fc === void 0 ? !1 : d.Fc;
        a && (a = Di(a), this.sa = a.buffer, this.wd = a.gb, this.La = b || 0, this.ta = c !== void 0 ? this.La + c : this.sa.length, this.I = this.La)
    };
    n.hf = function() {
        this.clear();
        Qi.length < 100 && Qi.push(this)
    };
    n.clear = function() {
        this.sa = null;
        this.wd = !1;
        this.I = this.ta = this.La = 0;
        this.Fc = !1
    };
    n.setEnd = function(a) {
        this.ta = a
    };
    n.reset = function() {
        this.I = this.La
    };
    n.U = function() {
        return this.I
    };
    n.advance = function(a) {
        Ri(this, this.I + a)
    };
    var Si = function(a) {
            var b = 0,
                c = 0,
                d = 0,
                e = a.sa,
                f = a.I;
            do {
                var g = e[f++];
                b |= (g & 127) << d;
                d += 7
            } while (d < 32 && g & 128);
            d > 32 && (c |= (g & 127) >> 4);
            for (d = 3; d < 32 && g & 128; d += 7) g = e[f++], c |= (g & 127) << d;
            Ri(a, f);
            if (g < 128) return (c >>> 0) * 4294967296 + (b >>> 0 >>> 0);
            throw Error("ea");
        },
        Ri = function(a, b) {
            a.I = b;
            if (b > a.ta) throw Error("fa`" + b + "`" + a.ta);
        },
        Ti = function(a) {
            var b = a.sa,
                c = a.I,
                d = b[c++],
                e = d & 127;
            if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 &&
                    b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw Error("ea");
            Ri(a, c);
            return e
        },
        Ui = function(a) {
            return Ti(a) >>> 0
        },
        Vi = function(a) {
            return Si(a)
        },
        Wi = function(a) {
            var b = a.sa,
                c = a.I,
                d = b[c + 0],
                e = b[c + 1],
                f = b[c + 2];
            b = b[c + 3];
            a.advance(4);
            return (d << 0 | e << 8 | f << 16 | b << 24) >>> 0
        },
        Xi = function(a) {
            for (var b = 0, c = a.I, d = c + 10, e = a.sa; c < d;) {
                var f = e[c++];
                b |= f;
                if ((f & 128) === 0) return Ri(a, c), !!(b & 127)
            }
            throw Error("ea");
        },
        Yi = function(a) {
            return Ti(a)
        },
        Zi = function(a, b) {
            if (b < 0) throw Error("ga`" + b);
            var c = a.I,
                d = c + b;
            if (d > a.ta) throw Error("fa`" +
                (a.ta - c) + "`" + b);
            a.I = d;
            return c
        };
    Pi.prototype.Pf = function(a, b) {
        var c = Zi(this, a),
            d = E(this.sa);
        if (ni) {
            var e;
            b ? (e = li) || (e = li = new TextDecoder("utf-8", {
                fatal: !0
            })) : (e = mi) || (e = mi = new TextDecoder("utf-8", {
                fatal: !1
            }));
            var f = c + a;
            d = c === 0 && f === d.length ? d : d.subarray(c, f);
            try {
                var g = e.decode(d)
            } catch (m) {
                if (b) {
                    if (ki === void 0) {
                        try {
                            e.decode(new Uint8Array([128]))
                        } catch (q) {}
                        try {
                            e.decode(new Uint8Array([97])), ki = !0
                        } catch (q) {
                            ki = !1
                        }
                    }
                    b = !ki
                }
                b && (li = void 0);
                throw m;
            }
        } else {
            a = c + a;
            g = [];
            for (var h = null, k, l; c < a;) k = d[c++], k < 128 ? g.push(k) : k < 224 ? c >= a ? ii(b, g) : (l =
                d[c++], k < 194 || (l & 192) !== 128 ? (c--, ii(b, g)) : (k = (k & 31) << 6 | l & 63, E(k >= 128 && k <= 2047), g.push(k))) : k < 240 ? c >= a - 1 ? ii(b, g) : (l = d[c++], (l & 192) !== 128 || k === 224 && l < 160 || k === 237 && l >= 160 || ((e = d[c++]) & 192) !== 128 ? (c--, ii(b, g)) : (k = (k & 15) << 12 | (l & 63) << 6 | e & 63, E(k >= 2048 && k <= 65535), E(k < 55296 || k > 57343), g.push(k))) : k <= 244 ? c >= a - 2 ? ii(b, g) : (l = d[c++], (l & 192) !== 128 || (k << 28) + (l - 144) >> 30 !== 0 || ((e = d[c++]) & 192) !== 128 || ((f = d[c++]) & 192) !== 128 ? (c--, ii(b, g)) : (k = (k & 7) << 18 | (l & 63) << 12 | (e & 63) << 6 | f & 63, E(k >= 65536 && k <= 1114111), k -= 65536, g.push((k >>
                10 & 1023) + 55296, (k & 1023) + 56320))) : ii(b, g), g.length >= 8192 && (h = ji(h, g), g.length = 0);
            E(c === a, "expected " + c + " === " + a);
            g = ji(h, g)
        }
        return g
    };
    Pi.prototype.le = function(a) {
        if (a == 0) return zi || (zi = new Bi(null, yi));
        var b = Zi(this, a);
        if (this.Fc && this.wd) b = this.sa.subarray(b, b + a);
        else {
            var c = E(this.sa);
            a = b + a;
            b = b === a ? new Uint8Array(0) : Ei ? c.slice(b, a) : new Uint8Array(c.subarray(b, a))
        }
        kb(b, Uint8Array);
        return b.length == 0 ? zi || (zi = new Bi(null, yi)) : new Bi(b, yi)
    };
    var Qi = [];
    E(!0);
    var aj = function(a, b) {
            if (Qi.length) {
                var c = Qi.pop();
                c.dc(a, void 0, void 0, b);
                a = c
            } else a = new Pi(a, b);
            this.l = a;
            this.Ca = this.l.U();
            this.m = this.wa = this.Hb = -1;
            $i(this, b)
        },
        $i = function(a, b) {
            b = b === void 0 ? {} : b;
            a.Fd = b.Fd === void 0 ? !1 : b.Fd
        };
    aj.prototype.hf = function() {
        this.l.clear();
        this.m = this.Hb = this.wa = -1;
        bj.length < 100 && bj.push(this)
    };
    aj.prototype.U = function() {
        return this.l.U()
    };
    aj.prototype.reset = function() {
        this.l.reset();
        this.Ca = this.l.U();
        this.m = this.Hb = this.wa = -1
    };
    aj.prototype.advance = function(a) {
        this.l.advance(a)
    };
    var cj = function(a) {
            var b = a.l;
            if (b.I == b.ta) return !1;
            a.wa !== -1 && (b = a.l.U(), a.l.I = a.Ca, Ui(a.l), a.m === 4 || a.m === 3 ? E(b === a.l.U(), "Expected to not advance the cursor.  Group tags do not have values.") : E(b > a.l.U(), "Expected to read the field, did you forget to call a read or skip method?"), a.l.I = b);
            a.Ca = a.l.U();
            b = Ui(a.l);
            var c = b >>> 3,
                d = b & 7;
            if (!(d >= 0 && d <= 5)) throw Error("$`" + d + "`" + a.Ca);
            if (c < 1) throw Error("aa`" + c + "`" + a.Ca);
            a.wa = b;
            a.Hb = c;
            a.m = d;
            return !0
        },
        ej = function(a) {
            if (a.m != 2) cb("Invalid wire type for skipDelimitedField"),
                dj(a);
            else {
                var b = Ui(a.l);
                a.l.advance(b)
            }
        },
        dj = function(a) {
            switch (a.m) {
                case 0:
                    a.m != 0 ? (cb("Invalid wire type for skipVarintField"), dj(a)) : Xi(a.l);
                    break;
                case 1:
                    E(a.m === 1);
                    a.l.advance(8);
                    break;
                case 2:
                    ej(a);
                    break;
                case 5:
                    E(a.m === 5);
                    a.l.advance(4);
                    break;
                case 3:
                    var b = a.Hb;
                    do {
                        if (!cj(a)) throw Error("ca");
                        if (a.m == 4) {
                            if (a.Hb != b) throw Error("da");
                            break
                        }
                        dj(a)
                    } while (1);
                    break;
                default:
                    throw Error("$`" + a.m + "`" + a.Ca);
            }
        },
        gj = function(a) {
            var b = a.Ca;
            dj(a);
            return fj(a, b)
        },
        fj = function(a, b) {
            if (!a.Fd) {
                var c = a.l.U();
                a.l.I = b;
                b = a.l.le(c - b);
                E(c == a.l.U());
                return b
            }
        },
        hj = function(a, b, c) {
            E(a.m == 2);
            var d = a.l.ta,
                e = Ui(a.l),
                f = a.l.U() + e,
                g = f - d;
            g <= 0 && (a.l.setEnd(f), c(b, a, void 0, void 0, void 0), g = f - a.l.U());
            if (g) throw Error("Z`" + e + "`" + (e - g));
            a.l.I = f;
            a.l.setEnd(d)
        },
        jj = function(a, b) {
            E(a.wa === 11);
            for (var c = 0, d = 0; cj(a) && a.m != 4;) a.wa !== 16 || c ? a.wa !== 26 || d ? dj(a) : c ? (d = -1, hj(a, c, b)) : (d = a.Ca, ej(a)) : (c = ij(a), d && (E(d > 0), a.wa = -1, a.m = -1, a.l.I = d, d = 0));
            if (a.wa !== 12 || !d || !c) throw Error("ba");
        },
        kj = function(a) {
            E(a.m == 0);
            return Ti(a.l)
        },
        ij = function(a) {
            E(a.m ==
                0);
            return Ui(a.l)
        },
        lj = function(a) {
            E(a.m == 0);
            return Si(a.l)
        },
        mj = function(a) {
            E(a.m == 0);
            return Ti(a.l)
        };
    aj.prototype.Pf = function() {
        return nj(this)
    };
    var nj = function(a) {
        E(a.m == 2);
        var b = Ui(a.l);
        return a.l.Pf(b, !0)
    };
    aj.prototype.le = function() {
        E(this.m == 2);
        var a = Ui(this.l);
        return this.l.le(a)
    };
    var oj = function(a, b, c) {
            E(a.m == 2);
            var d = Ui(a.l);
            for (d = a.l.U() + d; a.l.U() < d;) c.push(b(a.l))
        },
        bj = [];

    function pj(a) {
        return Array.prototype.slice.call(a)
    };
    var qj = typeof Symbol === "function" && typeof Symbol() === "symbol";

    function rj(a, b) {
        return typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol(a) : b
    }
    var sj = rj("INTERNAL_ARRAY_STATE"),
        tj = rj("defaultInstance", "0di");
    E(Math.round(Math.log2(Math.max.apply(Math, w(Object.values({
        Ui: 1,
        Si: 2,
        Ri: 4,
        Yi: 8,
        Xi: 16,
        Wi: 32,
        Fi: 64,
        bj: 128,
        Qi: 256,
        Pi: 512,
        Ti: 1024,
        Ji: 2048,
        aj: 4096,
        Ki: 8192
    }))))) === 13);

    function uj(a) {
        E((a & 16777215) == a)
    }
    var vj = qj ? function(a, b) {
            uj(b);
            ib(a, "state is only maintained on arrays.");
            a[sj] |= b
        } : function(a, b) {
            uj(b);
            ib(a, "state is only maintained on arrays.");
            a.ma !== void 0 ? a.ma |= b : Object.defineProperties(a, {
                ma: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        wj = qj ? function(a, b) {
            uj(b);
            ib(a, "state is only maintained on arrays.");
            a[sj] &= ~b
        } : function(a, b) {
            uj(b);
            ib(a, "state is only maintained on arrays.");
            a.ma !== void 0 && (a.ma &= ~b)
        },
        xj = Object.getOwnPropertyDescriptor(Array.prototype, "th");
    Object.defineProperties(Array.prototype, {
        th: {
            get: function() {
                function a(e, f) {
                    e & b && c.push(f)
                }
                var b = Z(this),
                    c = [];
                a(1, "IS_REPEATED_FIELD");
                a(2, "IS_IMMUTABLE_ARRAY");
                a(4, "IS_API_FORMATTED");
                a(4096, "STRING_FORMATTED");
                a(8192, "GBIGINT_FORMATTED");
                a(8, "ONLY_MUTABLE_VALUES");
                a(32, "MUTABLE_REFERENCES_ARE_OWNED");
                a(64, "CONSTRUCTED");
                a(128, "TRANSFERRED");
                a(256, "HAS_SPARSE_OBJECT");
                a(512, "HAS_MESSAGE_ID");
                a(2048, "FROZEN_ARRAY");
                var d = b >> 14 & 1023 || 536870912;
                d !== 536870912 && c.push("pivot: " + d);
                d = c.join(",");
                return xj ?
                    xj.get.call(this) + "|" + d : d
            },
            configurable: !0,
            enumerable: !1
        }
    });
    var Z = qj ? function(a) {
        ib(a, "state is only maintained on arrays.");
        return a[sj] | 0
    } : function(a) {
        ib(a, "state is only maintained on arrays.");
        return a.ma | 0
    };

    function yj(a, b) {
        E(b & 64, "state for messages must be constructed");
        E((b & 5) === 0, "state for messages should not contain repeated field state");
        var c = b >> 14 & 1023 || 536870912,
            d = a.length;
        E(c + zj(b) >= d - 1, "pivot %s is pointing at an index earlier than the last index of the array, length: %s", c, d);
        b & 512 && E(typeof a[0] === "string", "arrays with a message_id bit must have a string in the first position, got: %s", a[0]);
        a = d ? a[d - 1] : void 0;
        E((a != null && typeof a === "object" && a.constructor === Object) === !!(b & 256), "arraystate and array disagree on sparseObject presence")
    }
    var Aj = qj ? function(a) {
            ib(a, "state is only maintained on arrays.");
            var b = a[sj];
            yj(a, b);
            return b
        } : function(a) {
            ib(a, "state is only maintained on arrays.");
            var b = a.ma;
            yj(a, b);
            return b
        },
        Bj = qj ? function(a, b) {
            ib(a, "state is only maintained on arrays.");
            uj(b);
            a[sj] = b
        } : function(a, b) {
            ib(a, "state is only maintained on arrays.");
            uj(b);
            a.ma !== void 0 ? a.ma = b : Object.defineProperties(a, {
                ma: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };

    function Cj(a) {
        return !!(Z(a) & 2)
    }

    function Dj(a, b) {
        Bj(b, (a | 0) & -14591)
    }

    function Ej(a, b) {
        Bj(b, (a | 34) & -14557)
    }

    function Fj(a, b) {
        db(b);
        E(b > 0 && b <= 1023 || 536870912 === b);
        return a & -16760833 | (b & 1023) << 14
    }

    function zj(a) {
        return +!!(a & 512) - 1
    };
    var Gj, Hj = {};

    function Ij(a) {
        var b = a.Eh === Hj;
        E(!Gj || b === a instanceof Gj);
        return b
    }
    var Jj = {};

    function Kj(a) {
        var b = !(!a || typeof a !== "object" || a.mj !== Jj);
        E(b === a instanceof Map);
        return b && kb(a, Map).size === 0
    }

    function Lj(a, b) {
        db(a);
        E(a > 0);
        E(b === 0 || b === -1);
        return a + b
    }

    function Mj(a, b) {
        db(a);
        E(a >= 0);
        E(b === 0 || b === -1);
        return a - b
    }

    function Nj(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Oj(a) {
        return !Array.isArray(a) || a.length ? !1 : Z(a) & 1 ? !0 : !1
    }
    var Pj, Qj = [];
    Bj(Qj, 55);
    Pj = Object.freeze(Qj);

    function Rj(a) {
        if (a & 2) throw Error("ia");
    }

    function Sj() {}
    var Tj;

    function Uj(a, b) {
        ib(a);
        if (b) {
            Tj || (Tj = Symbol("unknownBinaryFields"));
            var c = a[Tj];
            c ? c.push(b) : a[Tj] = [b]
        }
    }

    function Vj(a, b) {
        ib(a);
        ib(b);
        (b = Tj ? ib(b)[Tj] : void 0) && (a[Tj] = pj(b))
    }
    var Wj;

    function Xj(a, b) {
        var c = Z(ib(a));
        b || E(!(c & 2 && c & 4 || c & 2048) || Object.isFrozen(a));
        b = !!(c & 8);
        c = !!(c & 16 && c & 32);
        if (b || c) {
            var d, e, f;
            a.forEach(function(g) {
                Array.isArray(g) ? f = !0 : g && Ij(g) && (Cj(g.s) ? e = !0 : d = !0)
            });
            f && E(!e && !d);
            c && E(!f && !d);
            b && E(!f && !e)
        }
        Yj(a)
    }

    function Yj(a) {
        var b = Z(a),
            c = b & 4,
            d = (4096 & b ? 1 : 0) + (8192 & b ? 1 : 0);
        E(c && d <= 1 || !c && d === 0, "Expected at most 1 type-specific formatting bit, but got " + d + " with state: " + b);
        if (4096 & Z(a))
            for (b = 0; b < a.length; b++) typeof a[b] !== "string" && cb("Unexpected element of type " + typeof a[b] + " in string formatted repeated 64-bit int field")
    }
    var Zj = Object.freeze({}),
        ak = Object.freeze({}),
        bk = Object.freeze({});

    function ck(a) {
        a = Error(a);
        Xb(a, "incident");
        th(a)
    }

    function dk(a) {
        a = Error(a);
        Xb(a, "warning");
        return a
    };

    function ek(a, b) {
        b = b === void 0 ? new Set : b;
        if (b.has(a)) return "(Recursive reference)";
        switch (typeof a) {
            case "object":
                if (a) {
                    var c = Object.getPrototypeOf(a);
                    switch (c) {
                        case Map.prototype:
                        case Set.prototype:
                        case Array.prototype:
                            b.add(a);
                            var d = "[" + Array.from(a, function(e) {
                                return ek(e, b)
                            }).join(", ") + "]";
                            b.delete(a);
                            c !== Array.prototype && (d = fk(c.constructor) + "(" + d + ")");
                            return d;
                        case Object.prototype:
                            return b.add(a), c = "{" + Object.entries(a).map(function(e) {
                                var f = u(e);
                                e = f.next().value;
                                f = f.next().value;
                                return e +
                                    ": " + ek(f, b)
                            }).join(", ") + "}", b.delete(a), c;
                        default:
                            return d = "Object", c && c.constructor && (d = fk(c.constructor)), typeof a.toString === "function" && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
                    }
                }
                break;
            case "function":
                return "function " + fk(a);
            case "number":
                if (!Number.isFinite(a)) return String(a);
                break;
            case "bigint":
                return a.toString(10) + "n";
            case "symbol":
                return a.toString()
        }
        return JSON.stringify(a)
    }

    function fk(a) {
        var b = a.displayName;
        return b && typeof b === "string" || (b = a.name) && typeof b === "string" ? b : (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)"
    };

    function gk(a, b) {
        a.lj = !0;
        a.qf = typeof b === "function" ? b : function() {
            return b
        };
        return a
    }

    function hk(a, b, c) {
        var d = a(b, c);
        d || ik(c, function() {
            var e = "";
            e.length > 0 && (e += ": ");
            return e + "Expected " + a.qf().trim() + ", got " + ek(b)
        });
        return d
    }

    function ik(a, b) {
        a == null || a.push((typeof b === "function" ? b() : b).trim())
    }

    function jk(a) {
        return typeof a === "function" ? a() : a
    }

    function kk() {
        throw Error(B.apply(0, arguments).map(jk).filter(Boolean).join("\n").trim().replace(/:$/, ""));
    };

    function lk() {
        var a = Error;
        return gk(function(b) {
            return b instanceof a
        }, function() {
            return fk(a)
        })
    };

    function mk(a) {
        if (a == null || typeof a === "number") return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a)
    }

    function nk(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function ok(a) {
        if (typeof a !== "boolean") throw Error("ja`" + Ja(a) + "`" + a);
        return a
    }

    function pk(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    var qk = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function rk(a) {
        var b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return Number.isFinite(a)
        }
        return b !== "string" ? !1 : qk.test(a)
    }

    function sk(a) {
        if (!Number.isFinite(a)) throw a = "Expected enum as finite number but got " + Ja(a) + ": " + a, dk(a);
        return a | 0
    }

    function tk(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function uk(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function vk(a) {
        return "Expected uint32 as finite number but got " + Ja(a) + ": " + a
    }

    function wk(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function xk(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function yk(a) {
        E(a < 0 || !(0 < a && a < Number.MAX_SAFE_INTEGER));
        E(Number.isInteger(a));
        if (a < 0) {
            Ji(a);
            var b = Mi();
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (xk(String(a))) return a;
        Ji(a);
        return Gi * 4294967296 + (Fi >>> 0)
    }

    function zk(a) {
        if (a == null) return a;
        var b = typeof a;
        if (b === "bigint") return String(BigInt.asUintN(64, a));
        if (rk(a)) {
            if (b === "string") return E(rk(a)), E(!0), b = Math.trunc(Number(a)), Number.isSafeInteger(b) && b >= 0 ? a = String(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), E(a.indexOf(".") === -1), xk(a) || (Oi(a), a = Mi())), a;
            if (b === "number") return E(rk(a)), E(!0), a = Math.trunc(a), a >= 0 && Number.isSafeInteger(a) ? a : yk(a)
        }
    }

    function Ak(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function Bk(a, b, c) {
        if (a != null && typeof a === "object" && Ij(a)) return a;
        if (Array.isArray(a)) {
            var d = Z(a),
                e = d;
            e === 0 && (e |= c & 32);
            e |= c & 2;
            e !== d && Bj(a, e);
            return new b(a)
        }
    };
    var Ck = function() {
        throw Error("ma");
    };
    if (typeof Symbol != "undefined" && typeof Symbol.hasInstance != "undefined") {
        var Dk = function() {
                throw Error("na");
            },
            Ek = {};
        Object.defineProperties(Ck, (Ek[Symbol.hasInstance] = {
            value: Dk,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }, Ek));
        E(Ck[Symbol.hasInstance] === Dk, "defineProperties did not work: was it monkey-patched?")
    };
    var Fk;

    function Gk(a, b) {
        E(!!(Z(b) & 32));
        Fk = b;
        a = new a(b);
        Fk = void 0;
        return a
    }
    var Hk, Ik;

    function Jk(a) {
        switch (typeof a) {
            case "boolean":
                return Hk || (Hk = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? Ik || (Ik = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return ib(a), E(a.length === 2 || a.length === 3 && a[2] === !0), E(a[0] == null || typeof a[0] === "number" && a[0] >= 0), E(a[1] == null || typeof a[1] === "string"), a
        }
    }

    function Kk(a, b) {
        ib(b);
        return Lk(a, b[0], b[1])
    }

    function Lk(a, b, c) {
        a == null && (a = Fk);
        Fk = void 0;
        if (a != null)
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                Array.isArray(e) && Xj(e)
            }
        if (a == null) e = 96, c ? (a = [c], e |= 512) : a = [], b && (e = Fj(e, b));
        else {
            if (!Array.isArray(a)) throw Error("oa`" + JSON.stringify(a) + "`" + Ja(a));
            if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a)) throw Error("pa");
            e = Z(a);
            if (e & 2048) throw Error("qa");
            if (e & 64) return yj(a, e), a;
            e |= 64;
            if (c && (e |= 512, c !== a[0])) throw Error("ra`" + c + "`" + JSON.stringify(a[0]) + "`" + Ja(a[0]));
            a: {
                d = a;c = e;
                if (e = d.length) {
                    var f =
                        e - 1;
                    if (Nj(d[f])) {
                        c |= 256;
                        b = Mj(f, zj(c));
                        if (b >= 1024) throw Error("sa`" + b);
                        e = Fj(c, b);
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, Mj(e, zj(c)));
                    if (b > 1024) throw Error("ta`" + e);
                    e = Fj(c, b)
                } else e = c
            }
        }
        Bj(a, e);
        E(e & 64);
        return a
    };

    function Mk(a, b) {
        return Nk(b)
    }

    function Nk(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Oj(a)) return
                    } else {
                        if (ri && a != null && a instanceof Uint8Array) return ti(a);
                        if (a instanceof Bi) {
                            var b = a.zc;
                            return b == null ? "" : typeof b === "string" ? b : a.zc = ti(b)
                        }
                    }
        }
        return a
    };

    function Ok(a, b, c) {
        var d = pj(a),
            e = d.length,
            f = b & 256 ? d[e - 1] : void 0;
        e += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
        if (f) {
            b = d[b] = {};
            for (var g in f) E(!isNaN(g), "should not have non-numeric keys in sparse objects after a constructor is called."), b[g] = c(f[g])
        }
        Vj(d, a);
        return d
    }

    function Pk(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Oj(a) ? void 0 : e && Z(a) & 2 ? a : Qk(a, b, c, d !== void 0, e);
            else if (Nj(a)) {
                var f = {},
                    g;
                for (g in a) f[g] = Pk(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Qk(a, b, c, d, e) {
        var f = d || c ? Z(a) : 0;
        d = d ? !!(f & 32) : void 0;
        for (var g = pj(a), h = 0; h < g.length; h++) g[h] = Pk(g[h], b, c, d, e);
        c && (Vj(g, a), c(f, g));
        return g
    }

    function Rk(a) {
        return Ij(a) ? a.toJSON() : Nk(a)
    };

    function Sk(a, b, c) {
        c = c === void 0 ? Ej : c;
        if (a != null) {
            if (ri && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = Z(a);
                if (d & 2) return a;
                Xj(a);
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (Bj(a, (d | 34) & -12293), a) : Qk(a, Sk, d & 4 ? Ej : c, !0, !0)
            }
            Ij(a) && (E(Ij(a)), c = a.s, d = Aj(c), a = d & 2 ? a : Gk(a.constructor, Tk(c, d, !0)));
            return a
        }
    }

    function Tk(a, b, c) {
        var d = c || b & 2 ? Ej : Dj,
            e = !!(b & 32);
        a = Ok(a, b, function(f) {
            return Sk(f, e, d)
        });
        vj(a, 32 | (c ? 2 : 0));
        return a
    }

    function Uk(a) {
        var b = a.s,
            c = Aj(b);
        return c & 2 ? Gk(a.constructor, Tk(b, c, !1)) : a
    };
    var Zk = function(a) {
        var b = Vk(a);
        if (b) return b;
        if (Wk === void 0)
            if (typeof Proxy !== "function") Wk = null;
            else try {
                Wk = Proxy.toString().indexOf("[native code]") !== -1 ? Proxy : null
            } catch (d) {
                Wk = null
            }
        b = Wk;
        if (!b) return a;
        var c = Error().stack;
        b = new b(a, {
            set: function(d, e, f) {
                Xk(c);
                d[e] = f;
                return !0
            }
        });
        Yk(a, b);
        return b
    };

    function Xk(a) {
        ck("Warning: Forbidden array mutation. This will be a hard error in the future, please fix. See go/jspb-api-gotchas#readonly-repeated-fields.\nArray origin at " + a + "\nMutation at " + Error().stack + "\n...")
    }
    var $k = void 0,
        al = void 0,
        Vk = function(a) {
            var b;
            return (b = $k) == null ? void 0 : b.get(a)
        };

    function Yk(a, b) {
        ($k || ($k = new WeakMap)).set(a, b);
        (al || (al = new WeakMap)).set(b, a)
    }
    var Wk = void 0;
    var cl = function(a, b) {
        a = a.s;
        return bl(a, Aj(a), b)
    };

    function dl(a, b, c, d) {
        b = Lj(d, zj(b));
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }
    var bl = function(a, b, c, d) {
            if (c === -1) return null;
            var e = b >> 14 & 1023 || 536870912;
            if (c >= e) {
                if (b & 256) return a[a.length - 1][c]
            } else {
                var f = a.length;
                if (d && b & 256 && (d = a[f - 1][c], d != null)) {
                    if (dl(a, b, e, c)) throw Error("ua`" + c);
                    return d
                }
                return dl(a, b, e, c)
            }
        },
        fl = function(a, b, c) {
            var d = a.s,
                e = Aj(d);
            Rj(e);
            el(d, e, b, c);
            return a
        };

    function el(a, b, c, d, e) {
        E(!Nj(d), "Invalid object passed to a setter");
        var f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Fg) {
            E(f !== 536870912);
            e = b;
            if (b & 256) var g = a[a.length - 1];
            else {
                if (d == null) return e;
                g = Lj(f, zj(b));
                E(g >= a.length && Number.isInteger(g) && g < 4294967295, "Expected sparseObjectIndex (%s) to be >= %s and a valid array index", g, a.length);
                g = a[g] = {};
                e |= 256
            }
            g[c] = d;
            c < f && (a[Lj(c, zj(b))] = void 0);
            e !== b && Bj(a, e);
            return e
        }
        a[Lj(c, zj(b))] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }
    var hl = function(a, b, c, d) {
        return gl(a, b, c, d === void 0 ? !1 : d) !== void 0
    };

    function il(a, b) {
        if (!a) return a;
        E(Cj(b) ? Cj(a.s) : !0);
        return a
    }

    function jl(a, b, c, d) {
        c = c === void 0 ? !1 : c;
        d = d === void 0 ? !1 : d;
        Xj(a, c);
        E(!!(Z(a) & 1));
        c || (d || E(Object.isFrozen(a) || !(Z(a) & 32)), E(Cj(b) ? Object.isFrozen(a) : !0));
        return a
    }

    function kl(a, b, c, d, e) {
        E((d & 3) === d);
        var f = b & 2,
            g = bl(a, b, c, e);
        Array.isArray(g) || (g = Pj);
        var h = !(d & 2);
        d = !(d & 1);
        var k = !!(b & 32),
            l = Z(g);
        l !== 0 || !k || f || h ? l & 1 || (l |= 1, Bj(g, l)) : (l |= 33, Bj(g, l));
        f ? (a = !1, l & 2 || (vj(g, 34), a = !!(4 & l)), (d || a) && Object.freeze(g)) : (f = !!(2 & l) || !!(2048 & l), d && f ? (g = pj(g), d = 1, k && !h && (d |= 32), Bj(g, d), el(a, b, c, g, e)) : h && l & 32 && !f && wj(g, 32));
        return g
    }
    var ll = function(a, b) {
        var c = c === void 0 ? !1 : c;
        return jl(kl(a, Aj(a), b, 2, c), a, !1, !0)
    };

    function ml(a, b, c, d) {
        var e = void 0;
        a = a.s;
        var f = Aj(a),
            g = 2 & f ? 1 : d;
        e = !!e;
        d = nl(a, f, b);
        var h = Z(d);
        Yj(d);
        if (!(4 & h)) {
            if (4 & h || Object.isFrozen(d)) d = pj(d), h = ol(h, f), f = el(a, f, b, d);
            for (var k = 0, l = 0; k < d.length; k++) {
                var m = c(d[k]);
                m != null && (d[l++] = m)
            }
            l < k && (d.length = l);
            h = pl(h, f);
            h = (h | 20) & -4097;
            h &= -8193;
            Bj(d, h);
            2 & h && Object.freeze(d)
        }
        var q;
        g === 1 || g === 4 && 32 & h ? ql(h) || (b = h, h |= 2, h !== b && Bj(d, h), Object.freeze(d)) : (c = g !== 5 ? !1 : !!(32 & h) || ql(h) || !!Vk(d), (g === 2 || c) && ql(h) && (d = pj(d), h = ol(h, f), h = rl(h, f, e), Bj(d, h), f = el(a, f, b, d)), ql(h) ||
            (b = h, h = rl(h, f, e), h !== b && Bj(d, h)), c && (q = Zk(d)));
        Yj(d);
        e || jl(d, a, !1, e);
        return q || d
    }

    function nl(a, b, c) {
        a = bl(a, b, c);
        return Array.isArray(a) ? a : Pj
    }

    function pl(a, b) {
        a === 0 && (a = ol(a, b));
        return a | 1
    }

    function ql(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    var sl = function(a, b, c, d) {
        var e = Aj(a),
            f = bl(a, e, c, d);
        if (f != null && Ij(f)) return b = Uk(f), b !== f && el(a, e, c, b, d), b.s;
        if (Array.isArray(f)) {
            var g = Z(f);
            g = g & 2 ? Tk(f, g, !1) : f;
            g = Kk(g, b)
        } else g = Kk(void 0, b);
        g !== f && el(a, e, c, g, d);
        return g
    };

    function gl(a, b, c, d) {
        a = a.s;
        var e = Aj(a),
            f = bl(a, e, c, d);
        b = Bk(f, b, e);
        b !== f && b != null && el(a, e, c, b, d);
        return il(b, a)
    }
    var ul = function(a) {
            var b = tl;
            (a = gl(a, b, 2, !1)) ? b = a: (a = b[tj]) ? b = a : (a = new b, vj(a.s, 34), b = b[tj] = a);
            return b
        },
        vl = function(a, b, c) {
            var d = d === void 0 ? !1 : d;
            b = gl(a, b, c, d);
            if (b == null) return b;
            a = a.s;
            var e = Aj(a);
            if (!(e & 2)) {
                var f = Uk(b);
                f !== b && (b = f, el(a, e, c, b, d))
            }
            return il(b, a)
        },
        xl = function(a) {
            var b = wl;
            a = a.s;
            var c = Aj(a),
                d;
            var e = !!e;
            d && (d = !(2 & c));
            var f = nl(a, c, 10),
                g = Z(f),
                h = !!(4 & g);
            if (!h) {
                g = pl(g, c);
                var k = f,
                    l = c,
                    m;
                (m = !!(2 & g)) && (l |= 2);
                for (var q = !m, t = !0, r = 0, x = 0; r < k.length; r++) {
                    var v = Bk(k[r], b, l);
                    if (v instanceof b) {
                        if (!m) {
                            var A =
                                Cj(v.s);
                            q && (q = !A);
                            t && (t = A)
                        }
                        k[x++] = v
                    }
                }
                x < r && (k.length = x);
                g |= 4;
                g = t ? g | 16 : g & -17;
                g = q ? g | 8 : g & -9;
                Bj(k, g);
                m && Object.freeze(k)
            }
            if (d && !(8 & g) && f.length) {
                ql(g) && (f = pj(f), g = ol(g, c), el(a, c, 10, f));
                b = f;
                d = g;
                for (c = 0; c < b.length; c++) k = b[c], g = Uk(k), k !== g && (b[c] = g);
                d |= 8;
                d = b.length ? d & -17 : d | 16;
                Bj(b, d);
                g = d
            }
            ql(g) || (b = g, g |= !f.length || 16 & g && (!h || 32 & g) ? 2 : 2048, g !== b && Bj(f, g), Object.freeze(f));
            if (!e) {
                e = f;
                h = !1;
                h = h === void 0 ? !1 : h;
                b = Cj(a);
                d = Cj(e);
                c = Object.isFrozen(e) && d;
                jl(e, a, h);
                if (b || d) h ? E(d) : E(c);
                E(!!(Z(e) & 4));
                if (d && e.length)
                    for (h =
                        0; h < 1; h++) il(e[h], a)
            }
            return f
        };

    function ol(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function rl(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function yl(a, b) {
        return a != null ? a : b
    }
    var zl = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            return yl(pk(cl(a, b)), c)
        },
        Al = function(a, b) {
            var c = c === void 0 ? 0 : c;
            return yl(uk(cl(a, b)), c)
        },
        Bl = function(a) {
            var b = b === void 0 ? "" : b;
            return yl(Ak(cl(a, 2)), b)
        },
        Cl = function(a) {
            a = pk(cl(a, 5));
            return a == null ? void 0 : a
        },
        Dl = function(a, b) {
            a = Ak(cl(a, b));
            return a == null ? void 0 : a
        },
        El = function(a, b) {
            if (b != null) {
                if (typeof b !== "number") throw dk(vk(b));
                if (!Number.isFinite(b)) throw dk(vk(b));
                b >>>= 0
            }
            fl(a, 1, b)
        },
        Fl = function(a, b, c) {
            if (c != null && typeof c !== "string") throw Error("ka`" + c + "`" +
                Ja(c));
            return fl(a, b, c)
        };
    if (typeof Proxy !== "undefined") {
        var Hl = Gl;
        new Proxy({}, {
            getPrototypeOf: Hl,
            setPrototypeOf: Hl,
            isExtensible: Hl,
            preventExtensions: Hl,
            getOwnPropertyDescriptor: Hl,
            defineProperty: Hl,
            has: Hl,
            get: Hl,
            set: Hl,
            deleteProperty: Hl,
            apply: Hl,
            construct: Hl
        })
    }

    function Gl() {
        throw Error("va");
    };
    var Il, Jl = function(a, b, c) {
        kb(this, Jl, "The message constructor should only be used by subclasses");
        E(this.constructor !== Jl, "Message is an abstract class and cannot be directly constructed");
        this.s = Lk(a, b, c);
        this.preventPassingToStructuredClone = Sj
    };
    n = Jl.prototype;
    n.toJSON = function() {
        return Kl(this)
    };
    n.Xa = function() {
        E(!0);
        try {
            return Il = !0, E(Il && !0), JSON.stringify(Kl(this), Mk)
        } finally {
            Il = !1
        }
    };
    n.getExtension = function(a) {
        kb(this, a.Tg);
        var b = kb(this, Jl);
        b = a.xb ? a.ae ? a.bc(b, a.xb, a.zb, void 0 === Zj ? 2 : 4, !0) : a.bc(b, a.xb, a.zb, !0) : a.ae ? a.bc(b, a.zb, void 0 === Zj ? 2 : 4, !0) : a.bc(b, a.zb, a.defaultValue, !0);
        return a.kj && b == null ? a.defaultValue : b
    };
    n.hasExtension = function(a) {
        E(!a.ae, "repeated extensions don't support hasExtension");
        if (a.xb) a = hl(this, a.xb, a.zb, !0);
        else {
            E(!a.ae, "repeated extensions don't support getExtensionOrUndefined");
            kb(this, a.Tg);
            var b = kb(this, Jl);
            a = a.xb ? a.bc(b, a.xb, a.zb, !0) : a.bc(b, a.zb, null, !0);
            a = (a === null ? void 0 : a) !== void 0
        }
        return a
    };
    n.clone = function() {
        var a = kb(this, Jl);
        E(Ij(a));
        var b = a.s,
            c = Aj(b);
        return Gk(a.constructor, Tk(b, c, !1))
    };
    n.gb = function() {
        return Cj(this.s)
    };
    Gj = Jl;
    Jl.prototype.Eh = Hj;
    Jl.prototype.toString = function() {
        try {
            return Il = !0, Kl(this).toString()
        } finally {
            Il = !1
        }
    };

    function Kl(a) {
        if (Il) var b = a.s;
        else b = a.s, ib(b), b = Qk(b, Rk, void 0, void 0, !1);
        var c = !Il,
            d = Aj(c ? a.s : b);
        if (a = b.length) {
            var e = b[a - 1],
                f = Nj(e);
            f ? a-- : e = void 0;
            var g = zj(d),
                h = Mj(a, g),
                k = (d = Fg && !(d & 512) && h !== h) ? Array.prototype.slice.call(b, 0, a) : b;
            if (f || d) {
                b: {
                    var l = k;
                    var m = e;f = {};
                    var q = !1;
                    if (d)
                        for (var t = Math.max(0, h + g); t < l.length; t++) {
                            var r = l[t],
                                x = Mj(t, g);
                            r == null || Oj(r) || Kj(r) || (l[t] = void 0, f[x] = r, q = !0)
                        }
                    if (m)
                        for (var v in m)
                            if (t = +v, isNaN(t)) f[v] = m[v];
                            else if (r = m[v], Array.isArray(r) && (Oj(r) || Kj(r)) && (r = null), r ==
                        null && (q = !0), d && t < h) {
                        q = !0;
                        r = Lj(t, g);
                        for (x = l.length; x <= r; x++) l.push(void 0);
                        l[r] = m[t]
                    } else r != null && (f[v] = r);
                    if (q) {
                        for (var A in f) {
                            m = f;
                            break b
                        }
                        m = null
                    }
                }
                l = m == null ? e != null : m !== e
            }
            d && (a = k.length);
            for (; a > 0; a--) {
                v = a - 1;
                A = k[v];
                Mj(v, g);
                if (A != null && !Oj(A) && !Kj(A)) break;
                var C = !0
            }
            if (k !== b || l || C) {
                if (!d && !c) k = Array.prototype.slice.call(k, 0, a);
                else if (C || l || m) k.length = a;
                m && k.push(m)
            }
            C = k
        } else C = b;
        return C
    };
    var Ll = function(a, b) {
            this.vh = a >>> 0;
            this.eh = b >>> 0
        },
        Nl = function(a) {
            if (!a) return Ml || (Ml = new Ll(0, 0));
            if (!/^\d+$/.test(a)) return null;
            Oi(a);
            return new Ll(Fi, Gi)
        },
        Ml;
    var Ol = function() {
        this.C = []
    };
    Ol.prototype.length = function() {
        return this.C.length
    };
    Ol.prototype.end = function() {
        var a = this.C;
        this.C = [];
        return a
    };
    Ol.prototype.md = function(a, b) {
        E(a == Math.floor(a));
        E(b == Math.floor(b));
        E(a >= 0 && a < 4294967296);
        for (E(b >= 0 && b < 4294967296); b > 0 || a > 127;) this.C.push(a & 127 | 128), a = (a >>> 7 | b << 25) >>> 0, b >>>= 7;
        this.C.push(a)
    };
    var Pl = function(a, b) {
            E(b == Math.floor(b));
            for (E(b >= 0 && b < 4294967296); b > 127;) a.C.push(b & 127 | 128), b >>>= 7;
            a.C.push(b)
        },
        Ql = function(a, b) {
            E(b == Math.floor(b));
            E(b >= -2147483648 && b < 2147483648);
            if (b >= 0) Pl(a, b);
            else {
                for (var c = 0; c < 9; c++) a.C.push(b & 127 | 128), b >>= 7;
                a.C.push(1)
            }
        };
    n = Ol.prototype;
    n.tb = function(a) {
        E(a == Math.floor(a));
        E(a >= 0 && a < 4294967296);
        this.C.push(a >>> 0 & 255);
        this.C.push(a >>> 8 & 255);
        this.C.push(a >>> 16 & 255);
        this.C.push(a >>> 24 & 255)
    };
    n.ng = function(a) {
        E(a == Math.floor(a));
        E(a >= 0 && a < 1.8446744073709552E19);
        Ii(a);
        this.tb(Fi);
        this.tb(Gi)
    };
    n.mg = function(a) {
        E(a == Math.floor(a));
        E(a >= -2147483648 && a < 2147483648);
        this.C.push(a >>> 0 & 255);
        this.C.push(a >>> 8 & 255);
        this.C.push(a >>> 16 & 255);
        this.C.push(a >>> 24 & 255)
    };
    n.Je = function(a) {
        E(a == Infinity || a == -Infinity || isNaN(a) || typeof a === "number" && a >= -3.4028234663852886E38 && a <= 3.4028234663852886E38);
        var b = Li(4);
        b.setFloat32(0, +a, !0);
        Gi = 0;
        Fi = b.getUint32(0, !0);
        this.tb(Fi)
    };
    n.He = function(a) {
        E(typeof a === "number" || a === "Infinity" || a === "-Infinity" || a === "NaN");
        var b = Li(8);
        b.setFloat64(0, +a, !0);
        Fi = b.getUint32(0, !0);
        Gi = b.getUint32(4, !0);
        this.tb(Fi);
        this.tb(Gi)
    };
    n.Ge = function(a) {
        E(typeof a === "boolean" || typeof a === "number");
        this.C.push(a ? 1 : 0)
    };
    n.Ie = function(a) {
        E(a == Math.floor(a));
        E(a >= -2147483648 && a < 2147483648);
        Ql(this, a)
    };
    var Rl = function() {
            this.vd = [];
            this.rb = 0;
            this.J = new Ol
        },
        Sl = function(a, b) {
            b.length !== 0 && (a.vd.push(b), a.rb += b.length)
        },
        Ul = function(a, b) {
            Tl(a, b, 2);
            b = a.J.end();
            Sl(a, b);
            b.push(a.rb);
            return b
        },
        Vl = function(a, b) {
            var c = b.pop();
            c = a.rb + a.J.length() - c;
            for (E(c >= 0); c > 127;) b.push(c & 127 | 128), c >>>= 7, a.rb++;
            b.push(c);
            a.rb++
        },
        Tl = function(a, b, c) {
            E(b >= 1 && b == Math.floor(b));
            Pl(a.J, b * 8 + c)
        },
        Wl = function(a, b, c) {
            c != null && (Tl(a, b, 0), typeof c === "number" ? (a = a.J, E(c == Math.floor(c)), E(c >= 0 && c < 1.8446744073709552E19), Ji(c), a.md(Fi,
                Gi)) : (c = Nl(c), a.J.md(c.vh, c.eh)))
        };
    n = Rl.prototype;
    n.mg = function(a, b) {
        b != null && (Xl(a, b, b >= -2147483648 && b < 2147483648), b != null && (am(a, b), Tl(this, a, 0), Ql(this.J, b)))
    };
    n.tb = function(a, b) {
        b != null && (Xl(a, b, b >= 0 && b < 4294967296), b != null && (Tl(this, a, 0), Pl(this.J, b)))
    };
    n.ng = function(a, b) {
        b != null && (Xl(a, b, typeof b === "string" && Nl(b) || typeof b === "number" && b >= 0 && b < 1.8446744073709552E19), Wl(this, a, b))
    };
    n.Je = function(a, b) {
        b != null && (Tl(this, a, 5), this.J.Je(b))
    };
    n.He = function(a, b) {
        b != null && (Tl(this, a, 1), this.J.He(b))
    };
    n.Ge = function(a, b) {
        b != null && (Xl(a, b, typeof b === "boolean" || typeof b === "number"), Tl(this, a, 0), this.J.Ge(b))
    };
    n.Ie = function(a, b) {
        b != null && (b = parseInt(b, 10), am(a, b), Tl(this, a, 0), Ql(this.J, b))
    };
    n.md = function(a, b) {
        Tl(this, a, 0);
        this.J.md(b)
    };

    function am(a, b) {
        Xl(a, b, b === Math.floor(b));
        Xl(a, b, b >= -2147483648 && b < 2147483648)
    }

    function Xl(a, b, c) {
        c || cb("for [" + b + "] at [" + a + "]")
    };
    var bm = function(a, b, c, d) {
        this.nd = a;
        this.od = b;
        this.pg = c;
        this.og = d
    };

    function cm(a) {
        return Array.isArray(a) ? a[0] instanceof bm ? (E(a.length === 2), dm(a[1]), a) : [em, dm(a)] : [kb(a, bm), void 0]
    }
    var hm = function(a, b, c) {
            ib(a);
            for (var d = c.yb, e = {}; cj(b) && b.m != 4; e = {
                    ze: void 0
                })
                if (b.wa === 11) {
                    var f = b.Ca;
                    e.ze = !1;
                    jj(b, function(g) {
                        return function(h, k) {
                            var l = c[h];
                            if (!l) {
                                var m = d[h];
                                if (m) {
                                    l = dm(m);
                                    var q = fm(l),
                                        t = gm(l).lb;
                                    l = c[h] = function(r, x, v) {
                                        return q(sl(x, t, v, !0), r)
                                    }
                                }
                            }
                            l ? l(k, a, h) : (g.ze = !0, k.l.I = k.l.ta)
                        }
                    }(e));
                    e.ze && Uj(a, fj(b, f))
                } else Uj(a, gj(b))
        },
        jm = function(a, b) {
            return function(c, d, e) {
                d = im(d, a);
                d != null && (Tl(c, 1, 3), Tl(c, 2, 0), Ql(c.J, e), e = Ul(c, 3), b(d, c), Vl(c, e), Tl(c, 1, 4))
            }
        };

    function km(a, b, c) {
        if (Array.isArray(b)) {
            var d = Z(b);
            if (d & 4) return b;
            for (var e = 0, f = 0; e < b.length; e++) {
                var g = a(b[e]);
                g != null && (b[f++] = g)
            }
            f < e && (b.length = f);
            c && (Bj(b, (d | 5) & -12289), d & 2 && Object.freeze(b));
            return b
        }
    }

    function im(a, b) {
        return a instanceof Jl ? a.s : Array.isArray(a) ? Kk(a, b) : void 0
    }
    var lm = Symbol("deserializeBinaryFromReaderCache");

    function fm(a) {
        var b = a[lm];
        if (!b) {
            var c = mm(a),
                d = gm(a),
                e = d.Ye;
            b = e ? function(f, g) {
                return e(f, g, d)
            } : function(f, g) {
                for (; cj(g) && g.m != 4;) {
                    var h = g.Hb,
                        k = d[h],
                        l = !k,
                        m = !1;
                    if (!k) {
                        var q = d.yb;
                        if (q) {
                            var t = q[h];
                            if (t) {
                                var r = void 0;
                                m = (r = q.qe) == null ? void 0 : r[h];
                                (!Gg || m) && (q = nm(t)) && (k = d[h] = q)
                            }
                        }
                    }
                    k && k(g, f, h) || Uj(f, gj(g));
                    l && k && !m && om(h)
                }
                c === pm || c === qm || c.Qh || (f[Wj || (Wj = Symbol("JSPB_COMPARISON_TYPE_INFO"))] = c)
            };
            a[lm] = b
        }
        return b
    }

    function nm(a) {
        a = cm(a);
        var b = kb(a[0], bm).nd;
        if (a = a[1]) {
            dm(a);
            var c = fm(a),
                d = gm(E(a)).lb;
            return function(e, f, g) {
                return b(e, f, g, d, c)
            }
        }
        return b
    }
    var rm = function() {},
        pm, qm, sm = Symbol("comparisonTypeInfoCache");

    function tm(a, b, c) {
        var d = c[1];
        if (d) {
            var e = d[sm];
            var f = e ? e.lb : E(Jk(d[0]));
            a[b] = e != null ? e : d
        }
        f && f === Hk ? (a = a.Ff || (a.Ff = new Set), kb(a, Set).add(b)) : c[0] && (a = a.Qf || (a.Qf = new Set), kb(a, Set).add(b))
    }

    function um(a, b) {
        return [a.pg, !b || b[0] > 0 ? void 0 : b]
    }

    function mm(a) {
        var b = a[sm];
        if (b) return b;
        b = vm(a, a[sm] = new rm, um, um, tm);
        if (!b.yb && !b.Qf && !b.Ff) {
            var c = !0,
                d;
            for (d in b) isNaN(d) || (c = !1);
            c ? (E(Jk(a[0])) === Hk ? qm ? b = qm : (b = new rm, b.lb = ib(Jk(!0)), b = qm = b) : b = pm || (pm = new rm), b = a[sm] = b) : b.Qh = !0
        }
        return b
    }

    function dm(a) {
        ib(a);
        var b;
        if (!(b = wm in a || xm in a) && (b = a.length > 0)) {
            b = a[0];
            var c = Jk(b);
            c != null && c !== b && (a[0] = c);
            b = c != null
        }
        E(b);
        return a
    }

    function ym(a, b, c) {
        a[b] = c
    }

    function zm(a) {
        return Array.isArray(a) && typeof a[0] === "number" && a[0] > 0
    }

    function vm(a, b, c, d, e) {
        e = e === void 0 ? ym : e;
        b.lb = E(Jk(a[0]));
        var f = 0,
            g = a[++f];
        g && g.constructor === Object && (b.yb = g, g = a[++f], typeof g === "function" && (b.Ye = g, b.Ef = fb(a[++f]), E(b.Ye === hm), E(b.Ef === jm), g = a[++f]));
        for (var h = {}; zm(g);) {
            for (var k = 0; k < g.length; k++) h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; g !== void 0;) {
            typeof g === "number" && (E(g > 0), k += g, g = a[++f]);
            var l = void 0;
            if (g instanceof bm) var m = g;
            else m = Am, f--;
            if (m.og) {
                g = a[++f];
                l = a;
                var q = f;
                typeof g == "function" && (E(g.length === 0), g = g(), l[q] = g);
                dm(g);
                l = g
            }
            g = a[++f];
            q = k + 1;
            typeof g ===
                "number" && g < 0 && (q -= g, g = a[++f]);
            for (; k < q; k++) {
                var t = h[k];
                e(b, k, l ? d(m, l, t) : c(m, t))
            }
        }
        return b
    }
    var Bm = Symbol("serializeBinaryToWriterCache");

    function Cm(a) {
        var b = a[Bm];
        if (!b) {
            var c = Dm(a);
            b = function(d, e) {
                return Em(d, e, c)
            };
            a[Bm] = b
        }
        return b
    }
    var xm = Symbol("serializerFnCache");

    function Fm(a) {
        return a.od
    }

    function Gm(a, b) {
        var c, d, e = a.od;
        return function(f, g, h) {
            return e(f, g, h, d || (d = Dm(b).lb), c || (c = Cm(b)))
        }
    }

    function Dm(a) {
        var b = a[xm];
        if (b) return b;
        b = vm(a, a[xm] = {}, Fm, Gm);
        Hm(a);
        return b
    }
    var wm = Symbol("deserializerFnCache");

    function Im(a, b) {
        var c = a.nd;
        return b ? function(d, e, f) {
            return c(d, e, f, b)
        } : c
    }

    function Jm(a, b, c) {
        var d = a.nd,
            e, f;
        return function(g, h, k) {
            return d(g, h, k, f || (f = gm(b).lb), e || (e = fm(b)), c)
        }
    }

    function gm(a) {
        var b = a[wm];
        if (b) return b;
        mm(a);
        b = vm(a, a[wm] = {}, Im, Jm);
        Hm(a);
        return b
    }

    function Hm(a) {
        wm in a && sm in a && xm in a && (a.length = 0)
    }

    function Km(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.yb) {
            var d = c[b];
            if (d) {
                d = cm(d);
                var e = kb(d[0], bm).od;
                d = d[1];
                var f;
                c = (f = c.qe) == null ? void 0 : f[b];
                if (!Gg || c) {
                    if (d) {
                        dm(d);
                        var g = Cm(d),
                            h = Dm(d).lb;
                        c = (f = a.Ef) ? f(h, g) : function(k, l, m) {
                            return e(k, l, m, h, g)
                        }
                    } else c = e;
                    return a[b] = c
                }
            }
        }
    }

    function Em(a, b, c) {
        for (var d = Aj(a), e = zj(d), f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (k != null) {
                var l = Mj(h, e),
                    m = Km(c, l);
                if (m) {
                    var q = c.yb,
                        t = void 0,
                        r = void 0,
                        x = void 0;
                    (t = q) == null || !t[l] || ((r = q) == null ? 0 : (x = r.qe) == null ? 0 : x[l]) || om(l);
                    m(b, k, l)
                }
            }
        }
        if (d & 256) {
            d = a[f - 1];
            for (var v in d)
                if (e = +v, !Number.isNaN(e) && (f = d[v], f != null && (g = Km(c, e)))) h = c.yb, m = l = k = void 0, (k = h) == null || !k[e] || ((l = h) == null ? 0 : (m = l.qe) == null ? 0 : m[e]) || om(e), g(b, f, e)
        }
        if (a = Tj ? ib(a)[Tj] : void 0)
            for (Sl(b, b.J.end()), c = 0; c < a.length; c++) Sl(b,
                Ci(a[c]))
    }

    function Lm(a, b) {
        return new bm(a, b, !1, !1)
    }

    function Mm(a, b) {
        return new bm(a, b, !0, !1)
    }

    function Nm(a, b, c) {
        el(a, Aj(a), b, c)
    }
    var Om = 0;

    function om(a) {
        Om++ < 5 && ck("binary extension " + a + " accessed via indirect require")
    }

    function Pm(a, b, c, d, e) {
        b = im(b, d);
        b != null && (c = Ul(a, c), e(b, a), Vl(a, c))
    }
    var Qm = Lm(function(a, b, c) {
            if (a.m !== 1) return !1;
            E(a.m == 1);
            var d = a.l;
            a = Wi(d);
            var e = Wi(d);
            d = (e >> 31) * 2 + 1;
            var f = e >>> 20 & 2047;
            a = 4294967296 * (e & 1048575) + a;
            Nm(b, c, f == 2047 ? a ? NaN : d * Infinity : f == 0 ? d * Math.pow(2, -1074) * a : d * Math.pow(2, f - 1075) * (a + 4503599627370496));
            return !0
        }, function(a, b, c) {
            a.He(c, mk(b))
        }),
        Rm = Lm(function(a, b, c) {
                if (a.m !== 5) return !1;
                E(a.m == 5);
                var d = Wi(a.l);
                a = (d >> 31) * 2 + 1;
                var e = d >>> 23 & 255;
                d &= 8388607;
                Nm(b, c, e == 255 ? d ? NaN : a * Infinity : e == 0 ? a * Math.pow(2, -149) * d : a * Math.pow(2, e - 150) * (d + Math.pow(2, 23)));
                return !0
            },
            function(a, b, c) {
                a.Je(c, mk(b))
            }),
        Sm = Lm(function(a, b, c) {
            if (a.m !== 0) return !1;
            Nm(b, c, lj(a));
            return !0
        }, function(a, b, c) {
            a.ng(c, zk(b))
        }),
        Tm = Mm(function(a, b, c) {
            if (a.m !== 0 && a.m !== 2) return !1;
            b = ll(b, c);
            a.m == 2 ? oj(a, Vi, b) : b.push(lj(a));
            return !0
        }, function(a, b, c) {
            b = km(zk, b, !1);
            if (b != null)
                for (var d = 0; d < b.length; d++) Wl(a, c, b[d])
        }),
        Um = Lm(function(a, b, c) {
            if (a.m !== 0) return !1;
            Nm(b, c, kj(a));
            return !0
        }, function(a, b, c) {
            a.mg(c, uk(b))
        }),
        Vm = Mm(function(a, b, c) {
            if (a.m !== 0 && a.m !== 2) return !1;
            b = ll(b, c);
            a.m == 2 ? oj(a, Ti, b) : b.push(kj(a));
            return !0
        }, function(a, b, c) {
            b = km(uk, b, !0);
            if (b != null)
                for (var d = 0; d < b.length; d++) {
                    var e = a,
                        f = c,
                        g = b[d];
                    g != null && (am(f, g), Tl(e, f, 0), Ql(e.J, g))
                }
        }),
        Wm = Lm(function(a, b, c) {
            if (a.m !== 0) return !1;
            E(a.m == 0);
            a = Xi(a.l);
            Nm(b, c, a);
            return !0
        }, function(a, b, c) {
            a.Ge(c, pk(b))
        }),
        Xm = Lm(function(a, b, c) {
            if (a.m !== 2) return !1;
            Nm(b, c, nj(a));
            return !0
        }, function(a, b, c) {
            b = Ak(b);
            if (b != null) {
                var d = !0;
                d = d === void 0 ? !1 : d;
                eb(b);
                if (qi) {
                    if (d && (pi ? !b.isWellFormed() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b))) throw Error("V");
                    b = (oi || (oi = new TextEncoder)).encode(b)
                } else {
                    for (var e = 0, f = new Uint8Array(3 * b.length), g = 0; g < b.length; g++) {
                        var h = b.charCodeAt(g);
                        if (h < 128) f[e++] = h;
                        else {
                            if (h < 2048) f[e++] = h >> 6 | 192;
                            else {
                                E(h < 65536);
                                if (h >= 55296 && h <= 57343) {
                                    if (h <= 56319 && g < b.length) {
                                        var k = b.charCodeAt(++g);
                                        if (k >= 56320 && k <= 57343) {
                                            h = (h - 55296) * 1024 + k - 56320 + 65536;
                                            f[e++] = h >> 18 | 240;
                                            f[e++] = h >> 12 & 63 | 128;
                                            f[e++] = h >> 6 & 63 | 128;
                                            f[e++] = h & 63 | 128;
                                            continue
                                        } else g--
                                    }
                                    if (d) throw Error("V");
                                    h = 65533
                                }
                                f[e++] = h >> 12 | 224;
                                f[e++] = h >> 6 & 63 | 128
                            }
                            f[e++] = h & 63 | 128
                        }
                    }
                    b = e === f.length ?
                        f : f.subarray(0, e)
                }
                Tl(a, c, 2);
                Pl(a.J, b.length);
                Sl(a, a.J.end());
                Sl(a, b)
            }
        }),
        em = new bm(function(a, b, c, d, e) {
            if (a.m !== 2) return !1;
            hj(a, sl(b, d, c, !0), e);
            return !0
        }, Pm, !1, !0),
        Am = new bm(function(a, b, c, d, e) {
            if (a.m !== 2) return !1;
            hj(a, sl(b, d, c), e);
            return !0
        }, Pm, !1, !0),
        Ym;
    Ym = new bm(function(a, b, c, d, e) {
        if (a.m !== 2) return !1;
        d = Kk(void 0, d);
        var f = Aj(b);
        Rj(f);
        var g = kl(b, f, c, 3);
        f = Aj(b);
        if (Z(g) & 4) {
            g = pj(g);
            var h = Z(g);
            Bj(g, (h | 1) & -2079);
            el(b, f, c, g)
        }
        g.push(d);
        hj(a, d, e);
        return !0
    }, function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Pm(a, b[f], c, d, e)
    }, !0, !0);
    var Zm = Lm(function(a, b, c) {
            if (a.m !== 0) return !1;
            Nm(b, c, ij(a));
            return !0
        }, function(a, b, c) {
            a.tb(c, wk(b))
        }),
        $m = Mm(function(a, b, c) {
            if (a.m !== 0 && a.m !== 2) return !1;
            b = ll(b, c);
            a.m == 2 ? oj(a, Ui, b) : b.push(ij(a));
            return !0
        }, function(a, b, c) {
            b = km(wk, b, !0);
            if (b != null && b.length) {
                c = Ul(a, c);
                for (var d = 0; d < b.length; d++) Pl(a.J, b[d]);
                Vl(a, c)
            }
        }),
        an = Lm(function(a, b, c) {
            if (a.m !== 0) return !1;
            Nm(b, c, mj(a));
            return !0
        }, function(a, b, c) {
            a.Ie(c, uk(b))
        }),
        bn = Mm(function(a, b, c) {
            if (a.m !== 0 && a.m !== 2) return !1;
            b = ll(b, c);
            a.m == 2 ? oj(a, Yi, b) : b.push(mj(a));
            return !0
        }, function(a, b, c) {
            b = km(uk, b, !0);
            if (b != null)
                for (var d = 0; d < b.length; d++) a.Ie(c, b[d])
        });

    function cn(a) {
        if (a instanceof Jl) return a.constructor.na
    };
    (function() {
        var a = Ha.jspbGetTypeName;
        Ha.jspbGetTypeName = a ? function(b) {
            return a(b) || cn(b)
        } : cn
    })();
    var dn = Jl;

    function en(a) {
        return function() {
            var b = new Rl;
            Em(kb(this, Jl).s, b, Dm(a));
            Sl(b, b.J.end());
            for (var c = new Uint8Array(b.rb), d = b.vd, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            E(f == c.length);
            b.vd = [c];
            return c
        }
    };
    var wl = function(a) {
        dn.call(this, a)
    };
    y(wl, dn);
    wl.prototype.pf = function() {
        return Bl(this)
    };
    wl.na = "wireless.mdl.UserAgentClientHints.BrandAndVersion";
    var fn = [0, Xm, -1];
    wl.prototype.pa = en(fn);
    var gn = function(a) {
        dn.call(this, a)
    };
    y(gn, dn);
    var hn = function(a, b) {
            return Fl(a, 2, b)
        },
        jn = function(a, b) {
            return Fl(a, 3, b)
        },
        kn = function(a, b) {
            return Fl(a, 4, b)
        },
        ln = function(a, b) {
            return Fl(a, 5, b)
        },
        mn = function(a, b) {
            return Fl(a, 9, b)
        },
        nn = function(a, b) {
            var c = wl,
                d = a.s,
                e = Aj(d);
            Rj(e);
            if (b == null) el(d, e, 10);
            else {
                var f = b;
                var g = b = ((g = al) == null ? void 0 : g.get(f)) || f;
                if (!Array.isArray(g)) throw a = "Expected array but got " + Ja(g) + ": " + g, dk(a);
                f = g = Z(b);
                var h = !!(2 & g) || !!(2048 & g);
                E(!h || Object.isFrozen(b));
                var k = h || Object.isFrozen(b),
                    l;
                if (l = !k) l = void 0 === bk || void 0 !== ak;
                for (var m = !0, q = !0, t = 0; t < b.length; t++) {
                    var r = b[t],
                        x = r,
                        v = bb(c);
                    if (!(x instanceof v)) throw Error("la`" + nk(v) + "`" + (x && nk(x.constructor)));
                    h || (r = Cj(r.s), m && (m = !r), q && (q = r))
                }
                h || (g |= 5, g = m ? g | 8 : g & -9, g = q ? g | 16 : g & -17);
                if (l || k && g !== f) b = pj(b), f = 0, g = ol(g, e), g = rl(g, e, !0);
                g !== f && Bj(b, g);
                Xj(b);
                el(d, e, 10, b)
            }
            return a
        },
        on = function(a, b) {
            return fl(a, 11, b == null ? b : ok(b))
        },
        pn = function(a, b) {
            return Fl(a, 1, b)
        },
        qn = function(a, b) {
            return fl(a, 7, b == null ? b : ok(b))
        };
    gn.na = "wireless.mdl.UserAgentClientHints";
    gn.prototype.pa = en([0, Xm, -4, Ym, fn, Wm, an, Xm, Ym, fn, Wm]);
    var rn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function sn(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function tn(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function un(a) {
        if (!tn(a)) return null;
        var b = sn(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(rn).then(function(c) {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function vn(a) {
        var b;
        return on(nn(ln(hn(pn(kn(qn(mn(jn(new gn, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(function(c) {
            var d = new wl;
            d = Fl(d, 1, c.brand);
            return Fl(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function wn(a) {
        var b, c;
        return (c = (b = un(a)) == null ? void 0 : b.then(function(d) {
            return vn(d)
        })) != null ? c : null
    };
    var xn = function(a, b, c, d) {
        a = a === void 0 ? window : a;
        b = b === void 0 ? null : b;
        c = c === void 0 ? new Sa : c;
        d = d === void 0 ? Df("current") : d;
        Wd.call(this);
        this.global = a;
        this.Ba = b;
        this.B = c;
        this.Xf = d;
        this.Lf = Fd(this.global, "pagehide").g(mg(this.B, 941));
        this.Kf = Fd(this.global, "load").g(mg(this.B, 738), Me(1));
        this.Nh = Fd(this.global, "resize").g(mg(this.B, 741));
        this.onMessage = Fd(this.global, "message").g(mg(this.B, 740));
        this.document = new Vh(this.global, this);
        this.j = new og(new rg(this.K, this.B), new qg(this.K, this.B));
        this.H = new ke(new vg(this),
            new mh(this), new mf(this, new zg(this)), new mf(this, new ph(this)), new mf(this, new kh(this)))
    };
    y(xn, Wd);
    var wg = function(a) {
        var b = a.global;
        return !!a.global.HTMLFencedFrameElement && !!b.fence && typeof b.fence.reportEvent === "function"
    };
    xn.prototype.Mb = function(a) {
        wg(this) && this.global.fence.reportEvent(a)
    };
    xn.prototype.Ld = function() {
        return this.Lf.g(mg(this.B, 942), W(this.h, 1), N(function() {}))
    };
    var yn = function(a) {
            var b = new xn(a.global.top, a.Ba);
            b.H = a.H;
            return b
        },
        zn = function(a, b) {
            b.start();
            return Fd(b, "message").g(mg(a.B, 740))
        };
    xn.prototype.postMessage = function(a, b, c) {
        c = c === void 0 ? [] : c;
        this.global.postMessage(a, b, c)
    };
    xn.prototype.Md = function() {
        return jh(this.global) ? this.global.width : 0
    };
    xn.prototype.Kd = function() {
        return jh(this.global) ? this.global.height : 0
    };
    var An = function(a, b) {
        try {
            a: {
                var c = a.global,
                    d = hh() || ih();
                try {
                    b && (c = c.top);
                    a = c;
                    b && a !== null && a != a.top && (a = a.top);
                    try {
                        if (d === void 0 ? 0 : d) var e = (new Cg(a.innerWidth, a.innerHeight)).round();
                        else {
                            var f = (a || window).document,
                                g = f.compatMode == "CSS1Compat" ? f.documentElement : f.body;
                            e = (new Cg(g.clientWidth, g.clientHeight)).round()
                        }
                        var h = e
                    } catch (x) {
                        h = new Cg(-12245933, -12245933)
                    }
                    b = h;
                    var k = b.height,
                        l = b.width;
                    if (l === -12245933) {
                        var m = new hi(l, l, l, l);
                        break a
                    }
                    var q = eh(dh(c.document).ac),
                        t = q.x,
                        r = q.y;
                    m = new hi(r, t + l, r + k,
                        t);
                    break a
                } catch (x) {
                    m = new hi(-12245933, -12245933, -12245933, -12245933);
                    break a
                }
                m = void 0
            }
            return {
                left: m.left,
                top: m.top,
                width: m.Md(),
                height: m.Kd()
            }
        }
        catch (x) {
            return di
        }
    };
    xn.prototype.validate = function() {
        var a = this.H.F() || wg(this);
        return this.global && this.j.ba() && a
    };
    var Ch = function(a) {
        return (a = wn(a.global)) ? Vc(a) : null
    };
    da.Object.defineProperties(xn.prototype, {
        sharedStorage: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                try {
                    return this.global.sharedStorage
                } catch (a) {}
            }
        },
        K: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return window
            }
        },
        Db: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !jh(this.global.top)
            }
        },
        Sd: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Db || this.global.top !== this.global
            }
        },
        scrollY: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.global.scrollY
            }
        },
        MutationObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.K.MutationObserver
            }
        },
        ResizeObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.K.ResizeObserver
            }
        },
        qh: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                E(!0, "Major version must be an integer");
                return Tg() >= 8
            }
        },
        Cg: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "vu" in this.global || "vv" in this.global
            }
        }
    });
    var Bn = !Zg && !Pg(),
        Cn = function(a, b) {
            if (/-[a-z]/.test(b)) return null;
            if (Bn && a.dataset) {
                if (Rg() && !(b in a.dataset)) return null;
                a = a.dataset[b];
                return a === void 0 ? null : a
            }
            return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    var Dn = {},
        En = (Dn["data-google-av-cxn"] = "_avicxn_", Dn["data-google-av-cpmav"] = "_cvu_", Dn["data-google-av-metadata"] = "_avm_", Dn["data-google-av-adk"] = "_adk_", Dn["data-google-av-btr"] = void 0, Dn["data-google-av-override"] = void 0, Dn["data-google-av-dm"] = void 0, Dn["data-google-av-immediate"] = void 0, Dn["data-google-av-aid"] = void 0, Dn["data-google-av-naid"] = void 0, Dn["data-google-av-inapp"] = void 0, Dn["data-google-av-slift"] = void 0, Dn["data-google-av-itpl"] = void 0, Dn["data-google-av-ext-cxn"] = void 0, Dn["data-google-av-rs"] =
            void 0, Dn["data-google-av-flags"] = void 0, Dn["data-google-av-turtlex"] = void 0, Dn["data-google-av-ufs-integrator-metadata"] = void 0, Dn["data-google-av-vattr"] = void 0, Dn["data-google-av-vrus"] = void 0, Dn),
        Fn = {},
        Gn = (Fn["data-google-av-adk"] = "googleAvAdk", Fn["data-google-av-btr"] = "googleAvBtr", Fn["data-google-av-cpmav"] = "googleAvCpmav", Fn["data-google-av-dm"] = "googleAvDm", Fn["data-google-av-ext-cxn"] = "googleAvExtCxn", Fn["data-google-av-immediate"] = "googleAvImmediate", Fn["data-google-av-inapp"] = "googleAvInapp",
            Fn["data-google-av-itpl"] = "googleAvItpl", Fn["data-google-av-metadata"] = "googleAvMetadata", Fn["data-google-av-naid"] = "googleAvNaid", Fn["data-google-av-override"] = "googleAvOverride", Fn["data-google-av-rs"] = "googleAvRs", Fn["data-google-av-slift"] = "googleAvSlift", Fn["data-google-av-cxn"] = "googleAvCxn", Fn["data-google-av-aid"] = void 0, Fn["data-google-av-flags"] = "googleAvFlags", Fn["data-google-av-turtlex"] = "googleAvTurtlex", Fn["data-google-av-ufs-integrator-metadata"] = "googleAvUfsIntegratorMetadata", Fn["data-google-av-vattr"] =
            "googleAvVattr", Fn["data-google-av-vrus"] = "googleAvVurs", Fn);

    function Hn(a, b) {
        if (a.i === void 0) return null;
        try {
            var c;
            var d = (c = a.i.getAttribute(b)) != null ? c : null;
            if (d !== null) return d
        } catch (g) {}
        try {
            var e = En[b];
            if (e && (d = a.i[e], d !== void 0)) return d
        } catch (g) {}
        try {
            var f = Gn[b];
            if (f) return Cn(a.i, f)
        } catch (g) {}
        return null
    }

    function In(a) {
        return N(function(b) {
            return Hn(b, a)
        })
    };
    var Jn = H(function(a) {
        return N(function(b) {
            return a.map(function(c) {
                return Hn(b, c)
            })
        })
    }(["data-google-av-cxn", "data-google-av-turtlex"]), N(function(a) {
        var b = u(a);
        a = b.next().value;
        b = b.next().value;
        if (!a) {
            if (b !== null) return [];
            throw new ge;
        }
        return a.split("|")
    }));
    var Kn = function() {
        return H(Cd(function(a) {
            return a.element.g(Jn, Ge(function() {
                return K([""])
            })).g(N(function(b) {
                return {
                    ra: b,
                    Jc: a
                }
            }))
        }), Oe(function(a) {
            return a.ra.sort().join(";")
        }), N(function(a) {
            return a.Jc
        }))
    };
    var Mn = function() {
            return Cd(function(a) {
                return Vc(Ln(a)).g(qh(a.h))
            })
        },
        Ln = function(a) {
            return a.document.querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass").map(function(b) {
                return new Eh(b)
            })
        };

    function Nn(a) {
        var b = a.Kf,
            c = a.document.Mh;
        return Ld(K({}), c, b).g(N(function() {
            return a
        }))
    };
    var Pn = N(On);

    function On(a) {
        var b = Number(Hn(a, "data-google-av-rs"));
        if (!isNaN(b) && b !== 0) return b;
        var c;
        return (a = (c = a.i) == null ? void 0 : c.id) ? a.startsWith("DfaVisibilityIdentifier") ? 6 : a.startsWith("YtKevlarVisibilityIdentifier") ? 15 : a.startsWith("YtSparklesVisibilityIdentifier") ? 17 : a.startsWith("YtKabukiVisibilityIdentifier") ? 18 : 0 : 0
    };

    function Qn() {
        return H(Q(function(a) {
            return a !== void 0
        }), N(function(a) {
            return a
        }))
    };

    function Rn() {
        return function(a) {
            var b = [];
            return a.g(Q(function(c) {
                if (c.i === void 0 || b.some(function(d) {
                        return d.i === c.i
                    })) return !1;
                b.push(c);
                return !0
            }))
        }
    };

    function Sn(a, b) {
        b = b === void 0 ? Ic : b;
        return Ld(Nn(a), b).g(Mn(), Rn(), Qn(), W(a.h, 1))
    };

    function Tn(a, b) {
        return new I(function(c) {
            var d = !1,
                e = Array(b.length);
            e.fill(void 0);
            var f = new Set,
                g = new Set,
                h = function(q, t) {
                    a.Rf ? (e[t] = q, f.add(t), d || (d = !0, Va(a, function() {
                        d = !1;
                        c.next(Nb(e))
                    }, 1))) : c.error(new he(t))
                },
                k = function(q, t) {
                    g.add(t);
                    f.add(t);
                    Va(a, function() {
                        c.error(q)
                    }, 1)
                },
                l = function(q) {
                    g.add(q);
                    Va(a, function() {
                        g.size === b.length && c.complete()
                    }, 1)
                },
                m = b.map(function(q, t) {
                    return q.subscribe(function(r) {
                        return void h(r, t)
                    }, function(r) {
                        return void k(r, t)
                    }, function() {
                        return void l(t)
                    })
                });
            return function() {
                m.forEach(function(q) {
                    return void q.unsubscribe()
                })
            }
        })
    };

    function Un(a, b, c) {
        function d() {
            if (b.Ba) {
                var A = b.Ba,
                    C = A.next;
                var O = {
                    creativeId: b.Zb.Ea(c),
                    requiredSignals: e,
                    signals: Object.assign({}, f),
                    hasPrematurelyCompleted: g,
                    errorMessage: h,
                    erroredSignalKey: k
                };
                O = {
                    specMajor: 2,
                    specMinor: 0,
                    specPatch: 0,
                    timestamp: qe(b.j.now(), new oe(0, b.j.timeline)),
                    instanceId: b.Zb.Ea(b.qb),
                    creativeState: O
                };
                C.call(A, O)
            }
        }
        for (var e = Object.keys(a), f = {}, g = !1, h = null, k = null, l = {}, m = new Set, q = [], t = [], r = u(e), x = r.next(), v = {}; !x.done; v = {
                ea: void 0
            }, x = r.next()) v.ea = x.value, x = a[v.ea], x instanceof
        Y ? (l[v.ea] = x.value, m.add(v.ea), b.Ba && (f[String(v.ea)] = se(x.value))) : (x = x.g(S(function(A, C) {
                return le(A) || le(C) ? !1 : A === C
            }), N(function(A) {
                return function(C) {
                    b.Ba && (f[String(A.ea)] = se(C), d());
                    var O = {};
                    return O[A.ea] = C, O
                }
            }(v)), Ge(function(A) {
                return function(C) {
                    if (C instanceof he) throw new je(String(A.ea));
                    throw C;
                }
            }(v)), ef(function(A) {
                return function() {
                    m.add(A.ea)
                }
            }(v), function(A) {
                return function(C) {
                    k = String(A.ea);
                    h = String(C);
                    d()
                }
            }(v), function(A) {
                return function() {
                    m.has(A.ea) || (g = !0, d())
                }
            }(v))), t.push(v.ea),
            q.push(x));
        (a = Object.keys(f).length > 0) && d();
        r = Tn(b.h, q).g(Ge(function(A) {
            if (A instanceof he) throw new ie(String(t[A.jh]));
            throw A;
        }), N(function(A) {
            return Object.freeze(Object.assign.apply(Object, [{}, l].concat(w(A))))
        }));
        return (q = q.length > 0) && a ? Ld(K(Object.freeze(l)), r) : q ? r : K(Object.freeze(l))
    };

    function Vn(a, b, c, d) {
        var e = Wn(Xn(Yn(), Zn), $n, ao);
        return a.B.Qb.bind(a.B)(733, function() {
            var f = {};
            try {
                return b.g(Ge(function(g) {
                    d(Object.assign({}, f, {
                        error: g
                    }));
                    return Ic
                }), Cd(function(g) {
                    try {
                        var h = c(a, g)
                    } catch (l) {
                        return d(Object.assign({}, f, {
                            error: l instanceof Error ? l : String(l)
                        })), Ic
                    }
                    var k = {};
                    return Un(h, a, g.qb).g(ef(function(l) {
                        k = l
                    }), Ye(1), nd()).g(e, Ge(function(l) {
                        d(Object.assign({}, k, {
                            error: l
                        }));
                        return Ic
                    }), Se(void 0), N(function() {
                        return !0
                    }))
                })).g($e(function(g) {
                    return g + 1
                }, 0), Ge(function(g) {
                    d(Object.assign({},
                        f, {
                            error: g
                        }));
                    return Ic
                }))
            } catch (g) {
                return d(Object.assign({}, f, {
                    error: g
                })), Ic
            }
        })()
    };

    function bo(a, b) {
        return H(U(function(c) {
            var d = a(c),
                e = b(c),
                f = {};
            return d && e && f ? new I(function(g) {
                e(d, f, function(h) {
                    g.next(Object.assign({}, c, {
                        ab: h
                    }));
                    g.complete()
                });
                return function() {}
            }) : Md
        }), Q(function(c) {
            return c.ab
        }))
    };
    var $n = H(Q(function(a) {
        var b = a.H;
        var c = a.Wb;
        var d = a.Rb;
        var e = a.Mb;
        var f = a.hb;
        var g = a.Ra;
        a = a.Vb;
        return g !== void 0 && a !== void 0 && b !== void 0 && c !== void 0 && d !== void 0 && (!f || e !== void 0)
    }), df(function(a) {
        return !(a.yf === !1 && a.cf !== void 0)
    }, !1), Q(function(a) {
        var b = a.yf;
        var c = a.Pd;
        var d = a.zi;
        a = a.Wb;
        return d ? !!c && a !== void 0 && (a == null ? void 0 : a.length) > 0 : !!b
    }), bo(function(a) {
        return a.Vb
    }, function(a) {
        return a.Ra
    }), N(function(a) {
        a.hb || a.Rb(a.Wb, a).forEach(function(b) {
            a.H.G(b).sendNow()
        })
    }), Me(1), Le());

    function co(a) {
        var b = new Map;
        if (typeof a !== "object" || a === null) return b;
        Object.values(a).forEach(function(c) {
            c && typeof c.da === "function" && (b.has(c.clock.timeline) || b.set(c.clock.timeline, c.clock.now()))
        });
        return b
    };

    function eo(a, b, c) {
        var d = fo,
            e = go;
        c = c === void 0 ? .01 : c;
        return function(f) {
            c > 0 && Math.random() <= c && (a.global.HTMLFencedFrameElement && a.global.fence && typeof a.global.fence.reportEvent === "function" && a.global.fence.reportEvent({
                eventType: "active-view-error",
                eventData: "",
                destination: ["buyer"]
            }), f = Object.assign({}, f, {
                errorMessage: f.error instanceof Error && f.error.message ? f.error.message : String(f.error),
                df: f.error instanceof Error && f.error.stack ? String(f.error.stack) : null,
                Ng: f.error instanceof Error && f.error.name ?
                    String(f.error.name) : null,
                Mg: String(a.B.dg)
            }), d(Object.assign({}, f, {
                ga: function() {
                    return function(g) {
                        try {
                            return e(Object.assign({}, g))
                        } catch (h) {
                            return {}
                        }
                    }
                }(),
                ra: [b]
            }), co(f)).forEach(function(g) {
                a.H.G(g).sendNow()
            }))
        }
    };
    var ao = H(N(function(a) {
        var b = a.H;
        var c = a.Ug;
        if (b === void 0 || c === void 0) return !1;
        if (a.cf !== void 0) return !0;
        if (c === null) return !1;
        for (a = 0; a < c; a++) b.G("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=" + Math.floor(Math.random() * 1E7)).sendNow();
        return !0
    }), df(function(a) {
        return !a
    }), Le());
    var go = function(a) {
        return {
            id: a.bd,
            mcvt: a.lc,
            p: a.Kc,
            asp: a.ej,
            tm: a.ui,
            tu: a.vi,
            mtos: a.nc,
            tos: a.wc,
            v: a.Bg,
            bin: a.ud,
            avms: a.If,
            bs: a.Se,
            mc: a.Gf,
            "if": a.Ig,
            vu: a.Kg,
            app: a.Va,
            mse: a.fe,
            mtop: a.ge,
            itpl: a.Ud,
            adk: a.td,
            exk: a.gj,
            rs: a.Ka,
            la: a.Bf,
            cr: a.Yd,
            uach: a.yc,
            vs: a.ld,
            r: a.ed,
            pay: a.bh,
            co: a.Dg,
            rst: a.wg,
            rpt: a.vg,
            isd: a.hh,
            lsd: a.xh,
            context: a.Mg,
            msg: a.errorMessage,
            stack: a.df,
            name: a.Ng,
            ec: a.dh,
            sfr: a.ue,
            met: a.Yb,
            wmsd: a.De,
            pv: a.Bj,
            epv: a.ij,
            pbe: a.xf,
            fle: a.fh,
            vae: a.gh,
            spb: a.ag,
            sfl: a.Zf,
            ffslot: a.ph,
            reach: a.ki,
            io2: a.jd,
            rxdbg: a.Fj,
            omida: a.qj,
            omidp: a.xj,
            omidpv: a.yj,
            omidor: a.wj,
            omidv: a.Aj,
            omids: a.zj,
            omidam: a.pj,
            omidct: a.rj,
            omidia: a.uj,
            omiddc: a.sj,
            omidlat: a.vj,
            omiddit: a.tj
        }
    };

    function Wn() {
        var a = B.apply(0, arguments);
        return function(b) {
            var c = b.g(Ye(1), nd());
            b = a.map(function(d) {
                return c.g(d, Se(!0))
            });
            return P(b).g(Me(1), Le())
        }
    };

    function Xn() {
        var a = B.apply(0, arguments);
        return function(b) {
            var c = b.g(Ye(1), nd());
            b = a.map(function(d) {
                return c.g(d, Se(!0))
            });
            return Ld.apply(null, w(b)).g(Me(1), Le())
        }
    };

    function Yn() {
        var a = ho,
            b = io;
        return function(c) {
            var d = c.g(Ye(1), nd());
            c = d.g(a, Se(!0));
            d = d.g(H(b, Ye(), nd()), Se(!0));
            c = P([c, d]);
            return Qd(c, d).g(Me(1), Le())
        }
    };
    var io = function(a) {
        var b = [];
        return a.g(N(function(c) {
            var d = c.H,
                e = c.Vg,
                f = c.wc,
                g = c.ri,
                h = c.ga,
                k = c.pi,
                l = c.bg,
                m = c.xc,
                q = c.Be,
                t = c.Pd,
                r = c.xf,
                x = c.ag,
                v = c.Zf,
                A = c.ye;
            if (!c.mf || !t || c.nc === void 0 || f === void 0 || g === void 0 || h === void 0 || k === void 0 || m === void 0 || d === void 0) return !1;
            if (c.hb) {
                if (l === void 0) return !1;
                g = c.Mb;
                if (!g) return !1;
                g({
                    eventType: "active-view-time-on-screen",
                    eventData: A != null ? A : "",
                    destination: ["buyer"]
                });
                return !0
            }
            if (!(r || v || l)) return !1;
            A = co(c);
            var C;
            q = (C = q == null ? void 0 : q.ka(A).value) != null ? C : !1;
            C = m(Object.assign({},
                c, {
                    bd: k,
                    ld: q ? 4 : 3,
                    ed: l != null ? l : "u",
                    ga: h,
                    ra: g
                }), A);
            if (r) {
                for (; b.length > g.length;) c = void 0, (c = b.shift()) == null || c.deactivate();
                C.forEach(function(X, pa) {
                    pa >= b.length ? b.push(d.G(X)) : b[pa].url = X
                });
                return x && e && l !== void 0 ? (C.forEach(function(X) {
                    e.G(X).sendNow()
                }), !0) : l !== void 0
            }
            if (x && e && l !== void 0) return C.forEach(function(X) {
                e.G(X).sendNow()
            }), !0;
            if (v && e) {
                for (; b.length > g.length;) x = void 0, (x = b.shift()) == null || x.deactivate();
                var O = m(Object.assign({}, c, {
                        bd: k,
                        ld: q ? 4 : 3,
                        ed: l != null ? l : "u",
                        ga: h,
                        ra: ["https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fetch&later&lidartos"]
                    }),
                    A)[0];
                C.forEach(function(X, pa) {
                    pa >= b.length ? b.push(d.G(O, {
                        bf: !0
                    })) : b[pa].url = O
                });
                return l !== void 0 ? (C.forEach(function(X) {
                    e.G(X).sendNow()
                }), !0) : l !== void 0
            }
            return l !== void 0 ? (C.forEach(function(X) {
                d.G(X).sendNow()
            }), !0) : !1
        }), df(function(c) {
            return !c
        }), Le())
    };

    function jo(a) {
        return function(b) {
            return b.g(N(function(c) {
                a.Rf || cb("Assertion on queued Observable output failed");
                return c
            }))
        }
    };

    function ko(a) {
        return function(b) {
            return new I(function(c) {
                var d = !1,
                    e = b.g(jo(a)).subscribe(function(f) {
                        d = !0;
                        c.next(f)
                    }, c.error.bind(c), c.complete.bind(c));
                Va(a, function() {
                    d || c.next(null)
                }, 3);
                return e
            })
        }
    };

    function lo(a, b) {
        return function(c) {
            return c.g(U(function(d) {
                return new I(function(e) {
                    function f() {
                        h.disconnect();
                        k.unsubscribe()
                    }
                    var g = a.MutationObserver;
                    if (g && d.i !== void 0) {
                        var h = new g(function(l) {
                            e.next(l)
                        });
                        h.observe(d.i, b);
                        var k = d.released.subscribe(f);
                        return f
                    }
                })
            }))
        }
    };
    var mo = {
        cj: 0,
        Gi: 1,
        Ii: 2,
        Hi: 3,
        0: "UNKNOWN",
        1: "DEFER_MEASUREMENT",
        2: "DO_NOT_DEFER_MEASUREMENT",
        3: "DEFER_MEASUREMENT_AND_PING"
    };

    function no(a, b) {
        var c = b.g(lo(a, {
            attributes: !0
        }), W(a.h, 1));
        return P([b, c.g(W(a.h, 1), ko(a.h))]).g(N(function(d) {
            return u(d).next().value
        }), In("data-google-av-dm"), N(oo))
    }

    function oo(a) {
        return a && a in mo ? Number(a) : 2
    };

    function po(a) {
        if (a.Bh === 3) return null;
        if (a.bg !== void 0) {
            var b = a.Hg === !1 ? "n" : null;
            if (b !== null) return b
        }
        return a.Oc instanceof ae ? "msf" : a.Ad instanceof be ? "c" : a.Fg === !1 ? "pv" : a.Oc || a.Ad ? "x" : null
    }
    var Zn = H(Q(function(a) {
        return a.Sc !== void 0 && a.ga !== void 0 && a.xc !== void 0 && a.Tc !== void 0 && a.H !== void 0
    }), Q(function(a) {
        return po(a) !== null
    }), bo(function(a) {
        return a.Dc
    }, function(a) {
        return a.Ra
    }), N(function(a) {
        if (a.hb) {
            var b = a.Mb;
            if (b) {
                var c;
                b({
                    eventType: "active-view-unmeasurable",
                    eventData: (c = a.ye) != null ? c : "",
                    destination: ["buyer"]
                })
            }
        } else {
            c = void 0;
            var d = po(a);
            if (d === "x") {
                var e, f = (e = a.Oc) != null ? e : a.Ad;
                f && (b = f.stack, c = f.message)
            }
            a.xc(Object.assign({}, a, {
                ra: a.Sc,
                ga: a.ga,
                bd: a.Tc,
                ld: 2,
                ed: d,
                errorMessage: c,
                df: b
            }), co(a)).forEach(function(g) {
                a.H.G(g).sendNow()
            })
        }
    }), Me(1), Le());
    var qo = function() {
            this.startTime = Math.floor(Date.now() / 1E3 - 1704067200);
            this.re = 0
        },
        ro = function(a) {
            var b = a.re.toString(10).padStart(2, "0");
            b = "" + a.startTime + b;
            a.re < 99 && a.re++;
            return b
        };

    function so(a, b) {
        return typeof a === "string" ? encodeURIComponent(a) : typeof a === "number" ? String(a) : Array.isArray(a) ? a.map(function(c) {
            return so(c, b)
        }).join(",") : a instanceof oe ? a.toString() : a && typeof a.da === "function" ? so(a.ka(b).value, b) : a === !0 ? "1" : a === !1 ? "0" : a === void 0 || a === null ? null : a instanceof qo ? ro(a) : [a.top, a.left, a.top + a.height, a.left + a.width].join()
    }

    function to(a, b) {
        a = Object.entries(a).map(function(c) {
            var d = u(c);
            c = d.next().value;
            d = d.next().value;
            d = so(d, b);
            return d === null ? "" : c + "=" + d
        }).filter(function(c) {
            return c !== ""
        });
        return a.length ? a.join("&") : ""
    };
    var uo = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g,
        mc = kc(lc(), "google3.javascript.ads.common.url_macros_substitutor", ac).yh;

    function vo(a, b) {
        return a.replace(uo, function(c, d) {
            try {
                var e = b !== null && d in b ? b[d] : void 0;
                if (e == null) return nc("No value supplied for unsupported macro: " + d), c;
                if (e.toString() == null) return nc("The toString method of value returns null for macro: " + d), c;
                e = e.toString();
                if (e == "" || !/^[\s\xa0]*$/.test(e == null ? "" : String(e))) return encodeURIComponent(e).replace(/%2C/g, ",");
                nc("Null value supplied for macro: " + d)
            } catch (f) {
                nc("Failed to set macro: " + d)
            }
            return c
        })
    };

    function wo(a, b) {
        var c = Object.assign({}, a),
            d = a.yc;
        c = (delete c.yc, c);
        c = a.ga(c);
        var e = to(c, b);
        return Kb(a.ra, function(f) {
            var g = "";
            typeof d === "string" && (g = "&" + to({
                uach: d
            }, b));
            var h = {};
            return vo(f, (h.VIEWABILITY = e, h)) + g
        })
    };

    function fo(a, b) {
        var c = a.ga(a),
            d = to(c, b);
        return d ? Kb(a.ra, function(e) {
            e = e.indexOf("?") >= 0 ? e : e + "?";
            e = "?&".indexOf(e.slice(-1)) >= 0 ? e : e + "&";
            return e + d
        }) : a.ra
    };

    function xo(a, b) {
        return Kb(a, function(c) {
            if (typeof b.yc === "string") {
                var d = "&" + to({
                    uach: b.yc
                }, new Map);
                return c.substring(c.length - 7) == "&adurl=" ? c.substring(0, c.length - 7) + d + "&adurl=" : c + d
            }
            return c
        })
    };
    var ho = H(Q(function(a) {
        return a.ga !== void 0 && a.Sc !== void 0 && a.xc !== void 0 && a.Tc !== void 0 && a.H !== void 0
    }), N(function(a) {
        return Object.assign({}, a, {
            fg: co(a)
        })
    }), Q(function(a) {
        var b = a.Be;
        var c = a.Pd;
        a = a.fg;
        var d;
        return !!c && ((d = b == null ? void 0 : b.ka(a).value) != null ? d : !1)
    }), bo(function(a) {
        return a.Ec
    }, function(a) {
        return a.Ra
    }), N(function(a) {
        var b = a.H,
            c = a.ye;
        if (a.hb) {
            var d = a.Mb;
            if (!d) return !1;
            d({
                eventType: "active-view-viewable",
                eventData: c != null ? c : "",
                destination: ["buyer"]
            });
            return !0
        }
        c = a.xc(Object.assign({},
            a, {
                ra: a.Sc,
                ga: a.ga,
                bd: a.Tc,
                ld: 4,
                ed: "v"
            }), a.fg);
        (d = a.Bd) && d.length > 0 && a.Rb && a.Rb(d, a).forEach(function(e) {
            b.G(e).sendNow()
        });
        (d = a.Ce) && d.length > 0 && a.Rb && a.Rb(d, a).forEach(function(e) {
            b.G(e).sendNow()
        });
        c.forEach(function(e) {
            b.G(e, {
                Tb: a.ce
            }).sendNow()
        });
        return !0
    }), df(function(a) {
        return !a
    }), Le());

    function yo(a) {
        var b = Math.pow(10, 2);
        return Math.round(a * b) / b
    };

    function zo(a, b, c, d) {
        var e = Object.keys(c).map(function(h) {
                return h
            }),
            f = e.filter(function(h) {
                var k = c[h];
                h = d[h];
                return k instanceof Y && h instanceof Y && k.value === h.value
            }),
            g = f.reduce(function(h, k) {
                var l = {};
                return Object.assign({}, h, (l[k] = c[k], l))
            }, {});
        return e.reduce(function(h, k) {
            if (f.indexOf(k) >= 0) return h;
            var l = {};
            return Object.assign({}, h, (l[k] = b.g(U(function(m) {
                return (m = m ? c[k] : d[k]) && (m instanceof I || G(m.kb) && G(m.subscribe)) ? m : m.P(a)
            })), l))
        }, g)
    };

    function Ao(a) {
        return H(N(function() {
            return !0
        }), T(!1), W(a, 1))
    };

    function Bo(a) {
        return a.length <= 0 ? Ic : P(a.map(function(b) {
            var c = 0;
            return b.g(N(function(d) {
                return {
                    index: c++,
                    value: d
                }
            }))
        })).g(Q(function(b) {
            return b.every(function(c) {
                return c.index === b[0].index
            })
        }), N(function(b) {
            return b.map(function(c) {
                return c.value
            })
        }))
    };

    function Co(a, b) {
        a.Aa && (a.nb = a.Aa);
        a.Aa = b;
        a.nb && a.nb.value ? (b = Math.max(0, qe(b.timestamp, a.nb.timestamp)), a.totalTime += b, a.ia += b) : a.ia = 0;
        return a
    }

    function Do() {
        return H($e(Co, {
            totalTime: 0,
            ia: 0
        }), N(function(a) {
            return a.totalTime
        }))
    }

    function Eo() {
        return H($e(Co, {
            totalTime: 0,
            ia: 0
        }), N(function(a) {
            return a.ia
        }))
    };

    function Fo(a, b) {
        return H(In("data-google-av-metadata"), N(function(c) {
            if (c === null) return b(void 0);
            c = c.split("&").map(function(d) {
                return d.split("=")
            }).filter(function(d) {
                return d[0] === a
            });
            if (c.length === 0) return b(void 0);
            c = c[0].slice(1).join("=");
            return b(c)
        }))
    };
    var Go = {
        Ci: "asmreq",
        Di: "asmres"
    };
    var Ho = function(a) {
        dn.call(this, a)
    };
    y(Ho, dn);
    Ho.prototype.Uf = function(a) {
        El(this, a)
    };
    Ho.na = "tagging.common.osd.AdSpeedMetricsRequest";
    Ho.prototype.pa = en([0, Zm]);
    var Io = function(a) {
        dn.call(this, a)
    };
    y(Io, dn);
    Io.na = "tagging.common.osd.AdSpeedMetricsResponse.Box";
    var Jo = [0, Um, -3];
    Io.prototype.pa = en(Jo);
    var Ko = function(a) {
        dn.call(this, a)
    };
    y(Ko, dn);
    Ko.prototype.Uf = function(a) {
        El(this, a)
    };
    var Lo = function(a) {
        return function(b) {
            fb(a);
            if (b == null || b == "") b = kb(new a, Jl);
            else {
                eb(b);
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("wa`" + Ja(b) + "`" + b);
                vj(b, 32);
                b = Gk(a, b)
            }
            return b
        }
    }(Ko);
    Ko.na = "tagging.common.osd.AdSpeedMetricsResponse";
    Ko.prototype.pa = en([0, Zm, Wm, Jo, Um, -1]);

    function Mo(a, b) {
        var c = c === void 0 ? yn(a) : c;
        var d = new MessageChannel;
        b = b.g(N(function(f) {
            return Number(f)
        }), Q(function(f) {
            return !isNaN(f) && f !== 0
        }), ef(function(f) {
            var g = new Ho;
            g.Uf(f);
            f = {
                type: "asmreq",
                payload: g.Xa()
            };
            c.postMessage(f, "*", [d.port2])
        }), Me(1));
        var e = zn(a, d.port1).g(Q(function(f) {
                return typeof f.data === "object"
            }), N(function(f) {
                var g = f.data,
                    h = Object.values(Go).includes(g.type);
                g = typeof g.payload === "string";
                if (!h || !g || f.data.type !== "asmres") return null;
                try {
                    return Lo(f.data.payload)
                } catch (k) {
                    return null
                }
            }),
            Q(function(f) {
                return f !== null
            }), N(function(f) {
                return f
            }));
        return b.g(U(function(f) {
            return K(f).g(Je(e))
        }), Q(function(f) {
            var g = u(f);
            f = g.next().value;
            g = g.next().value;
            if (wk(cl(g, 1)) != null) {
                var h = h === void 0 ? 0 : h;
                h = yl(wk(cl(g, 1)), h) === f
            } else h = !1;
            return h
        }), N(function(f) {
            f = u(f);
            f.next();
            return f.next().value
        }), qh(a.h))
    };

    function No(a, b, c) {
        var d = b.ic.g(Me(1), U(function() {
            return Mo(a, c)
        }), Q(function(f) {
            return zl(f, 2) && hl(f, Io, 3) && uk(cl(f, 4)) != null && uk(cl(f, 5)) != null
        }), Me(1), qh(a.h));
        b = d.g(N(function(f) {
            return {
                x: Al(vl(f, Io, 3), 2),
                y: Al(vl(f, Io, 3), 1)
            }
        }), S(function(f, g) {
            return f.x === g.x && f.y === g.y
        }), W(a.h, 1));
        var e = d.g(N(function(f) {
            return Al(f, 4)
        }), W(a.h, 1));
        d = d.g(N(function(f) {
            return Al(f, 5)
        }), W(a.h, 1));
        return {
            hh: e,
            yg: b,
            xh: d
        }
    };

    function Oo(a, b) {
        return b.ic.g(Me(1), N(function() {
            return a.j.now().round()
        }))
    };
    var Po = N(function(a) {
        return [a.value.O.width, a.value.O.height]
    });

    function Qo(a, b) {
        return function(c) {
            return Bo(b.map(function(d) {
                return c.g(a(d))
            }))
        }
    };

    function Ro() {
        var a;
        return H(ef(function(b) {
            return void(a = b.timestamp)
        }), Eo(), N(function(b) {
            return {
                timestamp: a,
                value: Math.round(b)
            }
        }))
    };
    var So = function(a, b) {
            this.Te = a;
            this.options = b;
            this.Wd = this.Vd = null
        },
        To = function(a, b) {
            b ? a.Wd || (b = Object.assign({}, a.options, {
                delay: 100,
                trackVisibility: !0
            }), a.Wd = new IntersectionObserver(a.Te, b)) : a.Vd || (a.Vd = new IntersectionObserver(a.Te, a.options))
        },
        Uo = function(a, b) {
            a = b ? a.Wd : a.Vd;
            if (!a) throw new de;
            return a
        };
    So.prototype.observe = function(a, b) {
        Uo(this, a).observe(b)
    };
    So.prototype.unobserve = function(a, b) {
        Uo(this, a).unobserve(b)
    };
    So.prototype.disconnect = function(a) {
        Uo(this, a).disconnect()
    };
    So.prototype.takeRecords = function(a) {
        return Uo(this, a).takeRecords()
    };
    var Vo = {
        W: "ns",
        X: di,
        O: di,
        V: new J,
        R: "ns",
        D: di,
        T: di,
        Z: {
            x: 0,
            y: 0
        }
    };

    function Wo(a, b) {
        return ei(a.O, b.O) && ei(a.D, b.D) && ei(a.X, b.X) && ei(a.T, b.T) && a.R === b.R && a.V === b.V && a.W === b.W && a.Z.x === b.Z.x && a.Z.y === b.Z.y
    };
    var Xo = function(a) {
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
    };

    function Yo(a, b) {
        return function(c) {
            return function(d) {
                var e = d.g(Xe(new J), nd());
                d = c.element.g(S());
                e = e.g(N(function(f) {
                    return f.value
                }));
                return P([d, e, b]).g(N(function(f) {
                    var g = u(f);
                    f = g.next().value;
                    var h = g.next().value;
                    g = g.next().value;
                    if (f.i === void 0) var k = {
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    };
                    else {
                        k = f.i.getBoundingClientRect();
                        var l = f.i,
                            m = a.global,
                            q = new Bg(0, 0);
                        var t = (t = ch(l)) ? t.defaultView : window;
                        if (Yg(t, "parent")) {
                            do {
                                if (t == m) {
                                    var r = l,
                                        x = ch(r);
                                    gb(r, "Parameter is required");
                                    var v = new Bg(0, 0);
                                    var A = (x ?
                                        ch(x) : document).documentElement;
                                    r != A && (r = Xo(r), x = eh(dh(x).ac), v.x = r.left + x.x, v.y = r.top + x.y)
                                } else v = E(l), v = Xo(v), v = new Bg(v.left, v.top);
                                q.x += v.x;
                                q.y += v.y
                            } while (t && t != m && t != t.parent && (l = t.frameElement) && (t = t.parent))
                        }
                        k = {
                            top: q.y,
                            left: q.x,
                            width: k.width,
                            height: k.height
                        }
                    }
                    k = gi(k, h.Z);
                    m = fi(k, h.X);
                    q = a.j.now();
                    t = Object;
                    l = t.assign;
                    if (g !== 2 || a.Db || m.width <= 0 || m.height <= 0) var C = !1;
                    else try {
                        var O = a.document.elementFromPoint(m.left + m.width / 2, m.top + m.height / 2);
                        C = O ? !Zo(O, f) : !1
                    } catch (X) {
                        C = !1
                    }
                    return {
                        timestamp: q,
                        value: l.call(t, {}, h, {
                            R: "geo",
                            T: C ? Vo.T : m,
                            D: k
                        })
                    }
                }), qh(a.h))
            }
        }
    }

    function Zo(a, b, c) {
        c = c === void 0 ? 0 : c;
        return a.i === void 0 || b.i === void 0 ? !1 : a.i === b.i || gh(b.i, function(d) {
            return d === a.i
        }) ? !0 : b.i.ownerDocument && b.i.ownerDocument.defaultView && b.i.ownerDocument.defaultView === b.i.ownerDocument.defaultView.top ? !1 : c < 10 && b.i.ownerDocument && b.i.ownerDocument.defaultView && b.i.ownerDocument.defaultView.frameElement ? Zo(a, new Eh(b.i.ownerDocument.defaultView.frameElement), c + 1) : !0
    };

    function $o(a) {
        return function(b) {
            return b.g(a.ResizeObserver ? ap(a) : bp(a), Ye(1), nd())
        }
    }

    function ap(a) {
        return function(b) {
            return b.g(U(function(c) {
                var d = a.ResizeObserver;
                if (!d || c.i === void 0) return K(Vo.D);
                var e = (new I(function(f) {
                    function g() {
                        c.i !== void 0 && h.unobserve(c.i);
                        h.disconnect();
                        k.unsubscribe()
                    }
                    if (c.i === void 0) return f.complete(),
                        function() {};
                    var h = new d(function(l) {
                        l.forEach(function(m) {
                            f.next(m)
                        })
                    });
                    h.observe(c.i);
                    var k = c.released.subscribe(g);
                    return g
                })).g(mg(a.B, 736), N(function(f) {
                    return f.contentRect
                }));
                return Ld(K(c.i.getBoundingClientRect()), e)
            }), S(ei))
        }
    }

    function bp(a) {
        return function(b) {
            var c = b.g(lo(a, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })),
                d = a.Nh;
            c = Ld(b.g(N(function() {
                return Dh("resize")
            })), c, d);
            return P(b, c).g(mg(a.B, 737), N(function(e) {
                e = u(e).next().value;
                return e.i === void 0 ? void 0 : e.i.getBoundingClientRect()
            }), Qn(), S(ei))
        }
    };

    function cp(a, b) {
        var c = dp(a, b).g(Ye(1), nd());
        return function(d) {
            return function(e) {
                e = e.g(U(function(f) {
                    return f.element
                }), S());
                return P([c, e]).g(U(function(f) {
                    var g = u(f);
                    f = g.next().value;
                    g = g.next().value;
                    return ep(a, f.nh, $o(a), f.Jh, d, f.Wg, g)
                }), qh(a.h))
            }
        }
    }

    function fp(a, b, c) {
        var d = cp(a, c)(b);
        return function(e) {
            var f = d(K(e));
            return function(g) {
                return P([g, f]).g(N(function(h) {
                    var k = u(h);
                    h = k.next().value;
                    k = k.next().value;
                    var l = gi(k.value.D, h.value.Z),
                        m = fi(gi(k.value.T, h.value.Z), h.value.X);
                    return {
                        timestamp: h.timestamp.maximum(k.timestamp),
                        value: Object.assign({}, h.value, {
                            R: "nio",
                            T: m,
                            D: l
                        })
                    }
                }))
            }
        }
    }

    function gp(a) {
        return N(function(b) {
            return b.value.W !== "nio" ? b : Object.assign({}, b, {
                value: Object.assign({}, b.value, {
                    X: An(a, !0),
                    O: An(a, !0)
                })
            })
        })
    }

    function hp(a, b) {
        return K(b).g(a, N(function() {
            return b
        }))
    }

    function dp(a, b) {
        return a.j.timeline !== me ? fd(new ae(2)) : a.MutationObserver ? typeof IntersectionObserver === "undefined" ? fd(new ae(0)) : (new I(function(c) {
            var d = new J,
                e = new So(d.next.bind(d), {
                    threshold: [].concat(w(b))
                });
            c.next({
                Jh: d.g(mg(a.B, 735)),
                nh: e,
                Wg: function(f) {
                    f = e.takeRecords(f);
                    f.length > 0 && d.next(f)
                }
            })
        })).g(Me(1), Ye(1), nd()) : fd(new ae(1))
    }

    function ip(a) {
        return Sc(a.sort(function(b, c) {
            return b.time - c.time
        }), Vd)
    }

    function ep(a, b, c, d, e, f, g) {
        return new I(function(h) {
            function k() {
                x || (x = !0, g.i !== void 0 && b.unobserve(e, g.i), m.unsubscribe(), r.unsubscribe(), t.unsubscribe(), v.unsubscribe())
            }
            if (g.i !== void 0) {
                To(b, e);
                b.observe(e, g.i);
                var l = new Hc({
                        timestamp: a.j.now(),
                        value: Object.assign({}, Vo, {
                            W: "nio",
                            R: "nio"
                        })
                    }),
                    m = d.g(Cd(function(A) {
                        return ip(A)
                    }), Q(function(A) {
                        return A.target === g.i
                    }), N(function(A) {
                        return {
                            timestamp: new oe(A.time, me),
                            value: {
                                W: "nio",
                                X: A.rootBounds || di,
                                O: A.rootBounds || An(a, !0),
                                V: q,
                                R: "nio",
                                T: A.intersectionRect,
                                D: A.boundingClientRect,
                                Z: {
                                    x: 0,
                                    y: 0
                                },
                                isIntersecting: A.isIntersecting,
                                Df: A.isVisible
                            }
                        }
                    }), Xe(l), nd()).subscribe(h),
                    q = new J,
                    t = q.subscribe(function() {
                        f(e);
                        h.next({
                            timestamp: a.j.now(),
                            value: l.value.value
                        });
                        g.i !== void 0 && (b.unobserve(e, g.i), b.observe(e, g.i))
                    }),
                    r = hp(c, g).subscribe(function() {
                        q.next()
                    }),
                    x = !1,
                    v = g.released.subscribe(function() {
                        return k()
                    });
                return k
            }
        })
    };

    function jp(a, b) {
        var c = a.Ld().g(N(function() {
            return "b"
        }));
        return Qd(b, c).g(Me(1), W(a.h, 1))
    };

    function kp(a) {
        return function(b) {
            var c;
            return b.g(ef(function(d) {
                return void(c = d.timestamp)
            }), N(function(d) {
                return d.value
            }), a, N(function(d) {
                return {
                    timestamp: c,
                    value: d
                }
            }))
        }
    };
    var lp = function(a) {
            return a.T.width * a.T.height / (a.D.width * a.D.height)
        },
        mp = kp(H(N(function(a) {
            var b;
            return (b = a.Nc) != null ? b : lp(a)
        }), N(function(a) {
            return isFinite(a) ? a : 0
        }))),
        np = kp(H(N(function(a) {
            var b;
            return (b = a.Nc) != null ? b : lp(a)
        }), N(function(a) {
            return isFinite(a) ? a : -1
        })));
    var op = function(a, b) {
        this.a = a;
        this.b = b;
        if (a.clock.timeline !== b.clock.timeline) throw Error();
    };
    op.prototype.ca = function(a) {
        return a instanceof op ? this.a.ca(a.a) && this.b.ca(a.b) : !1
    };
    op.prototype.ja = function(a) {
        var b = this.a.ja(a).value,
            c = this.b.ja(a).value;
        return {
            timestamp: a,
            value: [b, c]
        }
    };
    da.Object.defineProperties(op.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.active || this.b.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.clock
            }
        },
        u: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = this.a.u.timestamp.maximum(this.b.u.timestamp),
                    b = this.a.u.timestamp.equals(a) ? this.a.u.value : this.a.ja(a).value,
                    c = this.b.u.timestamp.equals(a) ? this.b.u.value : this.b.ja(a).value;
                return {
                    timestamp: a,
                    value: [b, c]
                }
            }
        }
    });
    var pp = function(a, b) {
        this.input = a;
        this.Yc = b;
        this.u = {
            timestamp: this.input.u.timestamp,
            value: this.Yc(this.input.u.value)
        }
    };
    pp.prototype.ca = function(a) {
        return a instanceof pp ? this.input.ca(a.input) && this.Yc === a.Yc : !1
    };
    pp.prototype.ja = function(a) {
        a = this.input.ja(a);
        return {
            timestamp: a.timestamp,
            value: this.Yc(a.value)
        }
    };
    da.Object.defineProperties(pp.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.clock
            }
        }
    });

    function qp(a, b, c) {
        c = c === void 0 ? function(d, e) {
            return d === e
        } : c;
        return a.timestamp.equals(b.timestamp) && c(a.value, b.value)
    };
    var rp = function(a, b, c) {
        this.clock = a;
        this.u = b;
        this.active = c
    };
    rp.prototype.ca = function(a) {
        return a instanceof rp ? this.active === a.active && this.clock.timeline === a.clock.timeline && qp(this.u, a.u) : !1
    };
    rp.prototype.ja = function(a) {
        return {
            timestamp: a,
            value: this.u.value + (this.active ? Math.max(0, qe(a, this.u.timestamp)) : 0)
        }
    };
    var sp = function() {};
    sp.prototype.da = function() {
        return this.ja(this.clock.now())
    };
    sp.prototype.ka = function(a) {
        var b = this.clock.timeline,
            c, d = (c = a.get(b)) != null ? c : this.clock.now();
        a.set(b, d);
        return this.ja(d)
    };
    sp.prototype.map = function(a) {
        return new tp(this, a)
    };
    sp.prototype.oa = function(a) {
        return new up(this, a)
    };
    var up = function() {
        op.apply(this, arguments);
        this.map = sp.prototype.map;
        this.oa = sp.prototype.oa;
        this.da = sp.prototype.da;
        this.ka = sp.prototype.ka
    };
    y(up, op);
    var vp = function() {
        rp.apply(this, arguments);
        this.map = sp.prototype.map;
        this.oa = sp.prototype.oa;
        this.da = sp.prototype.da;
        this.ka = sp.prototype.ka
    };
    y(vp, rp);
    var tp = function() {
        pp.apply(this, arguments);
        this.map = sp.prototype.map;
        this.oa = sp.prototype.oa;
        this.da = sp.prototype.da;
        this.ka = sp.prototype.ka
    };
    y(tp, pp);

    function wp(a, b) {
        a.Aa && (a.nb = a.Aa);
        a.Aa = b;
        a.nb && a.nb.value ? (b = Math.max(0, qe(b.timestamp, a.nb.timestamp)), a.totalTime += b, a.ia += b) : a.ia = 0;
        return a
    }

    function xp(a) {
        return H($e(wp, {
            totalTime: 0,
            ia: 0
        }), N(function(b) {
            return new vp(a, {
                timestamp: b.Aa.timestamp,
                value: b.totalTime
            }, b.Aa.value)
        }))
    }

    function yp(a) {
        return H($e(wp, {
            totalTime: 0,
            ia: 0
        }), N(function(b) {
            return new vp(a, {
                timestamp: b.Aa.timestamp,
                value: b.ia
            }, b.Aa.value)
        }))
    };

    function zp(a) {
        return H(yp(a), N(function(b) {
            return b.map(function(c) {
                return Math.round(c)
            })
        }))
    };
    var Ap = function(a, b) {
        this.u = b;
        this.da = sp.prototype.da;
        this.ka = sp.prototype.ka;
        this.map = sp.prototype.map;
        this.oa = sp.prototype.oa;
        this.clock = a
    };
    Ap.prototype.ca = function(a) {
        return a.active
    };
    Ap.prototype.ja = function() {
        return this.u
    };
    da.Object.defineProperties(Ap.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !1
            }
        }
    });

    function Bp(a, b) {
        return b.g(N(function(c) {
            return new Ap(a.j, {
                timestamp: a.j.now(),
                value: c
            })
        }))
    };

    function Cp(a, b) {
        return a >= 1 ? !0 : a <= 0 ? !1 : a >= b
    };

    function Dp(a) {
        return function(b) {
            return b.g(ff(a), N(function(c) {
                var d = u(c);
                c = d.next().value;
                d = d.next().value;
                return {
                    timestamp: c.timestamp,
                    value: Cp(c.value, d)
                }
            }))
        }
    };
    var Ep = N(function(a) {
        if (a.value.W === "omid") {
            if (a.value.R === "nio") return "omio";
            if (a.value.R === "geo") return "omgeo"
        }
        return a.value.R === "geo" || a.value.R === "nio" ? a.value.W : a.value.R
    });

    function Fp() {
        return H(Q(function(a, b) {
            return b > 0
        }), Gp, T(-1), S())
    }
    var Gp = H(Q(function(a) {
        return !isNaN(a)
    }), $e(function(a, b) {
        return isNaN(a) ? b : Math.min(a, b)
    }, NaN), S());
    var Hp = kp(H(N(function(a) {
        return a.T.width * a.T.height / (a.X.width * a.X.height)
    }), N(function(a) {
        return isFinite(a) ? Math.min(1, a) : 0
    })));

    function Ip(a, b, c) {
        return a ? P([b, c]).g(Q(function(d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.timestamp.equals(e.timestamp)
        }), N(function(d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.value > e.value ? d : e
        })) : b
    }

    function Jp(a) {
        return function(b) {
            var c = b.g(mp),
                d = b.g(Hp);
            return a instanceof I ? a.g(U(function(e) {
                return Ip(e, c, d)
            })) : Ip(a.value, c, d)
        }
    };
    var Kp = H(kp(N(function(a) {
        a = a.Nc ? a.Nc * a.D.width * a.D.height / (a.O.width * a.O.height) : a.T.width * a.T.height / (a.O.width * a.O.height);
        return isFinite(a) ? a : 0
    })));

    function Lp(a, b, c, d) {
        var e = d.Pc,
            f = d.Hd,
            g = d.kg,
            h = d.Pe,
            k = d.de,
            l = d.Hf,
            m = d.Rc;
        d = d.hg;
        b = Mp(a, c, b);
        c = Np(a, c);
        d = Op(b, d);
        var q = Pp(a, e, l, b),
            t = q.g(N(function(z) {
                return z.value
            }), S(), W(a, 1), $e(function(z, R) {
                return Math.max(z, R)
            }, 0)),
            r = q.g(N(function(z) {
                return z.value
            }), Fp(), W(a, 1)),
            x = b.g(np, N(function(z) {
                return z.value
            }), Me(2), S(), W(a, 1));
        g = Qp(a, b, g, h);
        var v = g.g(T(!1), S(), N(function(z) {
            return z ? k : f
        }));
        h = q.g(Dp(v), S(), W(a, 1));
        var A = P([h, b]).g(Q(function(z) {
                var R = u(z);
                z = R.next().value;
                R = R.next().value;
                return z.timestamp.equals(R.timestamp)
            }),
            N(function(z) {
                var R = u(z);
                z = R.next().value;
                R = R.next().value;
                return {
                    visible: z.value,
                    geometry: R.value.D
                }
            }), $e(function(z, R) {
                return !R.visible && z.visible ? z : R
            }, {
                visible: !1,
                geometry: di
            }), N(function(z) {
                return z.geometry
            }), T(di), W(a, 1), S(ei));
        l = l instanceof I ? l.g(S(), We()) : Md;
        v = P([l, v]).g(We());
        var C = b.g(Q(function(z) {
                return z.value.W !== "ns" && z.value.R !== "ns"
            }), $e(function(z) {
                return z + 1
            }, 0), T(0), W(a, 1)),
            O = c.g(We(!0), T(!1), W(a, 1));
        O = P([m, O]).g(N(function(z) {
            var R = u(z);
            z = R.next().value;
            R = R.next().value;
            return z &&
                !R
        }), W(a, 1));
        var X = b.g(Kp, S()),
            pa = X.g(N(function(z) {
                return z.value
            }), $e(function(z, R) {
                return Math.max(z, R)
            }, 0), S(), W(a, 1)),
            F = X.g(N(function(z) {
                return z.value
            }), Fp(), W(a, 1));
        return {
            te: l,
            uc: v,
            ua: {
                Yh: b,
                If: b.g(Ep),
                Kc: A.g(S(ei)),
                visible: h.g(S(qp)),
                we: q.g(S(qp)),
                Gf: t,
                Gh: r,
                Se: b.g(Po, S(Ob)),
                ti: X,
                zh: pa,
                Fh: F,
                Oc: c,
                V: (new Y(new J)).P(a),
                Bf: g,
                Pc: e,
                Rc: m,
                mf: O,
                wi: C,
                wh: x,
                jd: d
            }
        }
    }

    function Np(a, b) {
        return b.g(Q(function() {
            return !1
        }), N(function(c) {
            return c
        }), Ge(function(c) {
            return (new Y(c)).P(a)
        }))
    }

    function Op(a, b) {
        a = P([a, b]).g(N(function(e) {
            var f = u(e);
            e = f.next().value;
            if (f.next().value && e.value.isIntersecting) return e.value.Df
        }), S());
        var c = a.g(N(function(e) {
                return e === void 0 ? !0 : e
            }), $e(function(e, f) {
                return e || !f
            }, !1)),
            d = a.g($e(function(e, f) {
                return f === void 0 ? e : f ? !1 : e != null ? e : !0
            }, void 0), N(function(e) {
                return !!e
            }));
        return P([b, Sd(a, c, d)]).g(N(function(e) {
            var f = u(e);
            e = f.next().value;
            var g = u(f.next().value);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            var k = 0;
            if (!e) return 0;
            if (f === void 0) return 16;
            f && (k |= 1);
            f || (k |= 2);
            h && (k |= 4);
            g && (k |= 8);
            return k
        }))
    }

    function Mp(a, b, c) {
        return b.g(Pd(Md), W(a, 1)).g(S(function(d, e) {
            return qp(d, e, Wo)
        }), T({
            timestamp: c.now(),
            value: Vo
        }), W(a, 1))
    }

    function Pp(a, b, c, d) {
        c = d.g(Jp(c), kp(N(function(e) {
            return yo(e)
        })), W(a, 1));
        return b instanceof Y ? c : P([c, b]).g(N(function(e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), S(qp), W(a, 10))
    }

    function Qp(a, b, c, d) {
        b = [b.g(N(function(e) {
            return e.value.D.width * e.value.D.height >= 242500
        }))];
        c instanceof I && b.push(c.g(N(function(e) {
            return !!e
        })));
        c = P(b);
        return d ? c.g(N(function(e) {
            return e.some(function(f) {
                return f
            })
        }), T(!1), S(), W(a, 1)) : (new Y(!1)).P(a)
    };
    var Rp = function(a) {
            this.j = a;
            this.gd = null;
            this.timeout = new J
        },
        Tp = function(a, b) {
            Sp(a);
            a.gd = a.j.setTimeout(function() {
                return void a.timeout.next()
            }, b)
        },
        Sp = function(a) {
            a.gd !== null && (a.j.clearTimeout(a.gd), a.gd = null)
        };

    function Up(a, b, c, d) {
        var e = Vp.cg,
            f = new Rp(b);
        c = c.g(T(void 0), U(function() {
            Sp(f);
            return d
        })).g(N(function(g) {
            Sp(f);
            var h = g.u,
                k = g.active;
            h.value >= e || !k || (k = b.now(), k = Math.max(0, qe(k, h.timestamp)), Tp(f, Math.max(0, e - h.value - k)));
            return g.map(function(l) {
                return l >= e
            })
        }));
        return P([c, Ld(f.timeout, K(void 0))]).g(N(function(g) {
            return u(g).next().value
        }), df(function(g) {
            return !g.da().value
        }, !0), W(a, 1))
    };

    function Wp(a) {
        var b = new vp(a, {
            timestamp: a.now(),
            value: 0
        }, !1);
        return H(yp(a), $e(function(c, d) {
            return c.u.value > d.u.value ? new vp(a, c.u, !1) : d
        }, b), N(function(c) {
            return c.map(function(d) {
                return Math.round(d)
            })
        }))
    };

    function Xp(a) {
        return function(b) {
            return H(Dp(K(b)), Wp(a))
        }
    };

    function Yp(a) {
        return function(b) {
            return H(kp(N(function(c) {
                return Cp(c, b)
            })), xp(a), N(function(c) {
                return c.map(function(d) {
                    return Math.round(d)
                })
            }))
        }
    };

    function Zp(a) {
        return a.map(function(b) {
            return b.map(function(c) {
                return [c]
            })
        }).reduce(function(b, c) {
            return b.oa(c).map(function(d) {
                return d.flat()
            })
        })
    }

    function $p(a, b) {
        return a.oa(b).map(function(c) {
            var d = u(c);
            c = d.next().value;
            d = d.next().value;
            return c - d
        })
    }

    function aq(a, b, c, d, e, f) {
        var g = bq;
        if (g.length > 1)
            for (var h = 0; h < g.length - 1; h++)
                if (g[h] < g[h + 1]) throw Error();
        h = f.g(T(void 0), U(function() {
            return d.g(zp(a))
        }), S(function(k, l) {
            return k.ca(l)
        }), W(b, 1));
        f = f.g(T(void 0), U(function() {
            return d.g(Wp(a))
        }), S(function(k, l) {
            return k.ca(l)
        }), W(b, 1));
        return {
            nc: e.g(T(void 0), U(function() {
                return c.g(Qo(Xp(a), g))
            }), N(Zp), S(function(k, l) {
                return k.ca(l)
            }), W(b, 1)),
            wc: e.g(T(void 0), U(function() {
                return c.g(Qo(Yp(a), g), N(function(k) {
                    return k.map(function(l, m) {
                        return m > 0 ?
                            $p(l, k[m - 1]) : l
                    })
                }))
            }), N(Zp), S(function(k, l) {
                return k.ca(l)
            }), W(b, 1)),
            lc: f,
            cb: h.g(S(function(k, l) {
                return k.ca(l)
            }), W(b, 1))
        }
    };

    function cq(a) {
        var b;
        if (b = dq(a)) b = !eq(a, "abgcp") && !eq(a, "abgc") && !(typeof a.id === "string" && a.id === "abgb") && !(typeof a.id === "string" && a.id === "mys-abgc") && !eq(a, "cbb");
        return b
    }

    function eq(a, b) {
        return a.classList ? a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1
    }

    function dq(a) {
        try {
            var b = a.getBoundingClientRect();
            return b && b.height >= 30 && b.width >= 30
        } catch (c) {
            return !1
        }
    }

    function fq(a, b) {
        if (a.i === void 0 || !a.i.children) return a;
        for (var c = Nb(a.i.children); c.length;) {
            var d = b ? c.filter(cq) : c.filter(dq);
            if (d.length === 1) return new Eh(d[0]);
            if (d.length > 1) break;
            c = Qb(c, function(e) {
                return Nb(e.children)
            })
        }
        return a
    }

    function gq(a, b, c, d, e) {
        if (c) return {
            Jc: b,
            ob: K(null)
        };
        c = b.element.g(N(function(f) {
            a: if (f.i === void 0 || dq(f.i)) f = {
                    Zc: f,
                    ob: "mue"
                };
                else {
                    var g = fq(f, e);
                    if (g.i !== void 0 && dq(g.i)) f = {
                        Zc: g,
                        ob: "ie"
                    };
                    else {
                        if (d || a.Sd)
                            if (g = a.document.querySelector(".GoogleActiveViewInnerContainer")) {
                                f = {
                                    Zc: new Eh(g),
                                    ob: "ce"
                                };
                                break a
                            }
                        f = {
                            Zc: f,
                            ob: "mue"
                        }
                    }
                }return f
        }), bf());
        return {
            Jc: {
                qb: b.qb,
                element: c.g(N(function(f) {
                    return f.Zc
                }))
            },
            ob: c.g(N(function(f) {
                return f.ob
            }))
        }
    };

    function hq(a, b, c, d) {
        var e = d.Pc,
            f = d.Hd,
            g = d.kg,
            h = d.Pe,
            k = d.de,
            l = d.Hf,
            m = d.Rc;
        d = d.hg;
        b = iq(a, c, b);
        c = jq(a, c);
        d = kq(b, d);
        var q = lq(a, e, l, b),
            t = q.g(N(function(F) {
                return F.value
            }), S(), W(a, 1), $e(function(F, z) {
                return Math.max(F, z)
            }, 0)),
            r = q.g(N(function(F) {
                return F.value
            }), Fp(), W(a, 1)),
            x = b.g(np, N(function(F) {
                return F.value
            }), Me(2), S(), W(a, 1));
        g = mq(a, b, g, h);
        var v = g.g(T(!1), S(), N(function(F) {
            return F ? k : f
        }));
        h = q.g(Dp(v), S(), W(a, 1));
        var A = P([h, b]).g(Q(function(F) {
                var z = u(F);
                F = z.next().value;
                z = z.next().value;
                return F.timestamp.equals(z.timestamp)
            }),
            N(function(F) {
                var z = u(F);
                F = z.next().value;
                z = z.next().value;
                return {
                    visible: F.value,
                    geometry: z.value.D
                }
            }), $e(function(F, z) {
                return !z.visible && F.visible ? F : z
            }, {
                visible: !1,
                geometry: di
            }), N(function(F) {
                return F.geometry
            }), T(di), W(a, 1), S(ei));
        l = l instanceof I ? l.g(S(), We()) : Md;
        v = P([l, v]).g(We());
        var C = b.g(Q(function(F) {
                return F.value.W !== "ns" && F.value.R !== "ns"
            }), $e(function(F) {
                return F + 1
            }, 0), T(0), W(a, 1)),
            O = c.g(We(!0), T(!1), W(a, 1));
        O = P([m, O]).g(N(function(F) {
            var z = u(F);
            F = z.next().value;
            z = z.next().value;
            return F &&
                !z
        }), W(a, 1));
        var X = b.g(Kp, S()),
            pa = X.g(N(function(F) {
                return F.value
            }), $e(function(F, z) {
                return Math.max(F, z)
            }, 0), S(), W(a, 1));
        a = X.g(N(function(F) {
            return F.value
        }), Fp(), W(a, 1));
        return {
            te: l,
            uc: v,
            ua: {
                Yh: b,
                If: b.g(Ep),
                Kc: A.g(S(ei)),
                visible: h.g(S(qp)),
                we: q.g(S(qp)),
                Gf: t,
                Gh: r,
                Se: b.g(Po, S(Ob)),
                ti: X,
                zh: pa,
                Fh: a,
                Oc: c,
                V: b.g(N(function(F) {
                    return F.value.V
                })),
                Bf: g,
                Pc: e,
                Rc: m,
                mf: O,
                wi: C,
                wh: x,
                jd: d
            }
        }
    }

    function jq(a, b) {
        return b.g(Q(function() {
            return !1
        }), N(function(c) {
            return c
        }), Ge(function(c) {
            return (new Y(c)).P(a)
        }))
    }

    function iq(a, b, c) {
        return b.g(Pd(Md), W(a, 1)).g(S(function(d, e) {
            return qp(d, e, Wo)
        }), T({
            timestamp: c.now(),
            value: Vo
        }), W(a, 1))
    }

    function lq(a, b, c, d) {
        c = d.g(Jp(c), kp(N(function(e) {
            return yo(e)
        })), W(a, 1));
        return b instanceof Y ? c : P([c, b]).g(N(function(e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), S(qp), W(a, 1))
    }

    function mq(a, b, c, d) {
        b = [b.g(N(function(e) {
            return e.value.D.width * e.value.D.height >= 242500
        }))];
        c instanceof I && b.push(c.g(N(function(e) {
            return !!e
        })));
        c = P(b);
        return d ? c.g(N(function(e) {
            return e.some(function(f) {
                return f
            })
        }), T(!1), S(), W(a, 1)) : (new Y(!1)).P(a)
    }

    function kq(a, b) {
        a = P([a, b]).g(N(function(e) {
            var f = u(e);
            e = f.next().value;
            if (f.next().value && e.value.isIntersecting) return e.value.Df
        }), S());
        var c = a.g(N(function(e) {
                return e === void 0 ? !0 : e
            }), $e(function(e, f) {
                return e || !f
            }, !1)),
            d = a.g($e(function(e, f) {
                return f === void 0 ? e : f ? !1 : e != null ? e : !0
            }, void 0), N(function(e) {
                return !!e
            }));
        return P([b, Sd(a, c, d)]).g(N(function(e) {
            var f = u(e);
            e = f.next().value;
            var g = u(f.next().value);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            var k = 0;
            if (!e) return 0;
            if (f === void 0) return 16;
            f && (k |= 1);
            f || (k |= 2);
            h && (k |= 4);
            g && (k |= 8);
            return k
        }))
    };
    var nq = H(In("data-google-av-itpl"), N(function(a) {
        return Number(a)
    }), N(function(a) {
        return isNaN(a) ? 1 : a
    }));
    var oq = {
            Bi: "addEventListener",
            Li: "getMaxSize",
            Mi: "getScreenSize",
            Ni: "getState",
            Oi: "getVersion",
            Zi: "removeEventListener",
            Vi: "isViewable"
        },
        pq = function(a, b) {
            this.qa = null;
            this.lh = new J;
            b = b || this.xi;
            var c = a.Sd,
                d = !a.Db;
            if (c && d) {
                var e = a.global.top.mraid;
                if (e) {
                    this.Ic = b(e);
                    this.qa = e;
                    this.pb = 3;
                    return
                }
            }(a = a.global.mraid) ? (this.Ic = b(a), this.qa = a, this.pb = c ? d ? 2 : 1 : 0) : (this.pb = -1, this.Ic = 2)
        };
    pq.prototype.addEventListener = function(a, b) {
        return this.Nb("addEventListener", a, b)
    };
    pq.prototype.removeEventListener = function(a, b) {
        return this.Nb("removeEventListener", a, b)
    };
    pq.prototype.pf = function() {
        var a = this.Nb("getVersion");
        return typeof a === "string" ? a : ""
    };
    pq.prototype.getState = function() {
        var a = this.Nb("getState");
        return typeof a === "string" ? a : ""
    };
    var qq = function(a) {
            a = a.Nb("isViewable");
            return typeof a === "boolean" ? a : !1
        },
        rq = function(a) {
            if (a.qa) return a = a.qa.AFMA_LIDAR, typeof a === "string" ? a : void 0
        };
    pq.prototype.xi = function(a) {
        return a ? a.IS_GMA_SDK ? Object.values(oq).every(function(b) {
            return typeof a[b] === "function"
        }) ? 0 : 1 : 2 : 1
    };
    pq.prototype.Nb = function(a) {
        var b = B.apply(1, arguments);
        if (this.qa) try {
            return this.qa[a].apply(this.qa, w(b))
        } catch (c) {
            this.lh.next(a)
        }
    };
    da.Object.defineProperties(pq.prototype, {
        af: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.qa) {
                    var a = this.qa.AFMA_LIDAR_EXP_1;
                    return a === void 0 ? void 0 : !!a
                }
            },
            set: function(a) {
                this.qa && (this.qa.AFMA_LIDAR_EXP_1 = a)
            }
        }
    });

    function sq(a, b) {
        return (new pq(a)).pb !== -1 ? (new Y(!0)).P(a.h) : b.g(In("data-google-av-inapp"), N(function(c) {
            return c !== null
        }), W(a.h, 1))
    };
    var uq = function(a, b) {
            var c = this;
            this.j = a;
            this.ee = this.Xc = null;
            this.ci = b.g(S()).subscribe(function(d) {
                tq(c);
                c.ee = d
            })
        },
        vq = function(a, b) {
            tq(a);
            a.Xc = a.j.setTimeout(function() {
                var c;
                return void((c = a.ee) == null ? void 0 : c.next())
            }, b)
        },
        tq = function(a) {
            a.Xc !== null && a.j.clearTimeout(a.Xc);
            a.Xc = null
        };
    uq.prototype.dispose = function() {
        tq(this);
        this.ci.unsubscribe();
        this.ee = null
    };

    function wq(a, b, c, d, e) {
        var f = Vp.cg;
        var g = g === void 0 ? new uq(b, d) : g;
        return (new I(function(h) {
            var k = c.g(T(void 0), U(function() {
                return xq(e)
            })).g(N(function(l) {
                var m = l.value;
                l = l.timestamp;
                var q = m.visible;
                m = m.cb;
                var t = m >= f;
                t || !q ? tq(g) : (l = Math.max(0, qe(b.now(), l)), vq(g, Math.max(0, f - m - l)));
                return t
            }), $e(function(l, m) {
                return m || l
            }, !1), S()).subscribe(h);
            return function() {
                g.dispose();
                k.unsubscribe()
            }
        })).g(df(function(h) {
            return !h
        }, !0), W(a, 1))
    }

    function xq(a) {
        return Bo([a, a.g(Ro())]).g(N(function(b) {
            var c = u(b);
            b = c.next().value;
            c = c.next().value;
            return {
                timestamp: b.timestamp,
                value: {
                    visible: b.value,
                    cb: c.value
                }
            }
        }), S(function(b, c) {
            return qp(b, c, function(d, e) {
                return d.cb === e.cb && d.visible === e.visible
            })
        }))
    };

    function yq(a, b) {
        return {
            td: b.g(In("data-google-av-adk")),
            Wb: b.g(In("data-google-av-btr"), S(), N(function(c) {
                return c === null ? [] : c.split("|").filter(function(d) {
                    return d !== ""
                })
            })),
            Bd: b.g(In("data-google-av-cpmav"), S(), N(function(c) {
                return c === null ? [] : c.split("|").filter(function(d) {
                    return d !== ""
                })
            })),
            Ce: b.g(In("data-google-av-vrus"), S(), N(function(c) {
                return c === null ? [] : c.split("|").filter(function(d) {
                    return d !== ""
                })
            })),
            Jg: no(a, b),
            flags: b.g(In("data-google-av-flags"), S()),
            Va: sq(a, b),
            Yd: b.g(Fo("cr", function(c) {
                return c ===
                    "1"
            }), S()),
            rh: b.g(Fo("omid", function(c) {
                return c === "1"
            }), S()),
            Ud: b.g(nq),
            metadata: b.g(In("data-google-av-metadata")),
            Ka: b.g(Pn),
            ra: b.g(Jn),
            Ai: b.g(Fo("la", function(c) {
                return c === "1"
            }), S()),
            hb: b.g(In("data-google-av-turtlex"), N(function(c) {
                return c !== null
            }), S()),
            ce: b.g(In("data-google-av-vattr"), N(function(c) {
                return c !== null
            }), S())
        }
    };

    function zq() {
        return H(Eo(), $e(function(a, b) {
            return Math.max(a, b)
        }, 0), N(function(a) {
            return Math.round(a)
        }))
    };

    function Aq(a) {
        return H(Dp(K(a)), zq())
    };

    function Bq(a, b, c, d, e) {
        c = c.g(N(function() {
            return !1
        }));
        d = P([e, d]).g(U(function(f) {
            f = u(f).next().value;
            return Cq(b, f)
        }));
        return Ld(K(!1), c, d).g(S(), W(a.h, 1))
    }

    function Cq(a, b) {
        return a.g(N(function(c) {
            return b || c === 0 || c === 2
        }))
    };
    var Dq = [33, 32],
        Eq = H(nq, N(function(a) {
            return Dq.indexOf(a) >= 0
        }), S());

    function Fq(a, b, c, d, e, f) {
        var g = c.g(N(function(k) {
                return k === 9
            })),
            h = b.element.g(Eq);
        c = e.g(Q(function(k) {
            return k
        }), U(function() {
            return P([g, h])
        }), N(function(k) {
            var l = u(k);
            k = l.next().value;
            return !l.next().value || k
        }), S());
        f = P([c, d.g(S()), f]).g(N(function(k) {
            var l = u(k);
            k = l.next().value;
            var m = l.next().value;
            l = l.next().value;
            return gq(a, b, !k, m, l)
        }), Ye(1), nd());
        d = f.g(N(function(k) {
            return k.Jc
        }));
        f = f.g(U(function(k) {
            return k.ob
        }), T(null), S(), W(a.h, 1));
        return {
            Ha: d,
            Yb: f
        }
    };

    function Gq(a) {
        var b = b === void 0 ? !1 : b;
        return H(U(function(c) {
            return ai(a.document, c, b)
        }), W(a.h, 1))
    };
    var Hq = function(a, b, c, d, e, f) {
        this.ic = b.element.g(Gq(a), W(a.h, 1));
        this.Wf = Bq(a, c, b.element, this.ic, d);
        c = Fq(a, b, e, d, this.Wf, f);
        d = c.Yb;
        this.Ha = c.Ha;
        this.Yb = d;
        this.De = Ld((new Y(1)).P(a.h), b.element.g(Me(1), N(function() {
            return 2
        }), W(a.h, 1)), this.ic.g(Me(1), N(function() {
            return 3
        }), W(a.h, 1)), this.Wf.g(Q(Boolean), Me(1), N(function() {
            return 0
        }), W(a.h, 1))).g(df(function(g) {
            return g !== 0
        }, !0), W(a.h, 0))
    };

    function Iq(a, b) {
        return a && b === 0 ? 15 : a || b !== 1 ? null : 14
    }

    function Jq(a, b, c) {
        return b instanceof I ? b.g(U(function(d) {
            return (d = Iq(d, c)) ? fd(new ae(d)) : a
        })) : (b = Iq(b.value, c)) ? fd(new ae(b)) : a
    };

    function Kq(a) {
        var b = new ae(13);
        if (a.length < 1) return {
            chain: Ic,
            yd: Ic
        };
        var c = new J,
            d = a[0];
        return {
            chain: a.slice(1).reduce(function(e, f) {
                return e.g(Ge(function(g) {
                    c.next(g);
                    return f
                }))
            }, d).g(Ge(function(e) {
                c.next(e);
                return fd(b)
            }), Xe(new J), nd()),
            yd: c
        }
    };
    var Lq = function() {};
    var Mq = function(a, b) {
        this.context = a;
        this.ni = b
    };
    y(Mq, Lq);
    Mq.prototype.Pa = function(a, b) {
        var c = this.ni.map(function(f) {
                return f.Pa(a, b)
            }),
            d = Kq(c.map(function(f) {
                return f.Sa
            })),
            e = d.yd.g(Nq());
        return {
            Sa: d.chain.g(W(this.context.h, 1)),
            Ma: Object.assign.apply(Object, [{
                ue: e,
                Hj: d.yd
            }].concat(w(c.map(function(f) {
                return f.Ma
            }))))
        }
    };
    var Nq = function() {
        return $e(function(a, b) {
            b instanceof ae ? a.push(b.Ch) : a.push(-1);
            return a
        }, [])
    };

    function Oq(a, b) {
        var c = a.g(Xe(new J), nd());
        return U(function(d) {
            return c.g(b(d))
        })
    };

    function Pq(a, b) {
        var c = c === void 0 ? function() {
            var f = (jh(a.global) ? a.global.innerWidth : 0) || a.Md() || 0,
                g = (jh(a.global) ? a.global.innerHeight : 0) || a.Kd() || 0;
            return {
                left: 0,
                top: 0,
                width: f,
                height: g
            }
        } : c;
        var d = a.Db ? $h(a.document) ? a.qh ? null : fd(new ae(5)) : fd(new ae(4)) : fd(new ae(3));
        if (d) return d;
        var e = new J;
        return Ld(K({}), b, e).g(N(function() {
            var f = Qq(a, c);
            return {
                timestamp: a.j.now(),
                value: {
                    W: "iem",
                    X: f,
                    O: f,
                    V: e,
                    Z: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), W(a.h, 1))
    }

    function Qq(a, b) {
        b = b();
        var c = eh(document),
            d = function(t, r) {
                return !!a.document.elementFromPoint(t, r)
            },
            e = Math.floor(b.left - c.x),
            f = Math.floor(b.top - c.y),
            g = Math.floor(b.left + b.width - c.x),
            h = Math.floor(b.top + b.height - c.y);
        b = d(e, f);
        c = d(g, h);
        if (b && c) return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        };
        var k = d(g, f),
            l = d(e, h);
        if (b) h = Rq(f, h, function(t) {
            return d(e, t)
        }), g = Rq(e, g, function(t) {
            return d(t, f)
        });
        else if (k) h = Rq(f, h, function(t) {
            return d(g, t)
        }), e = Rq(g, e, function(t) {
            return d(t, f)
        });
        else if (l) f = Rq(h, f, function(t) {
            return d(e,
                t)
        }), g = Rq(e, g, function(t) {
            return d(t, h)
        });
        else if (c) f = Rq(h, f, function(t) {
            return d(g, t)
        }), e = Rq(g, e, function(t) {
            return d(t, h)
        });
        else {
            var m = Math.floor((e + g) / 2),
                q = Math.floor((f + h) / 2);
            if (!d(m, q)) return {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            f = Rq(q, f, function(t) {
                return d(m, t)
            });
            h = Rq(q, h, function(t) {
                return d(m, t)
            });
            e = Rq(m, e, function(t) {
                return d(t, q)
            });
            g = Rq(m, g, function(t) {
                return d(t, q)
            })
        }
        return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        }
    }

    function Rq(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e === a || e === b) break;
            c(e) ? a = e : b = e
        }
        return a
    };
    var Sq = function(a, b) {
        this.context = a;
        this.Ia = b
    };
    y(Sq, Lq);
    Sq.prototype.Pa = function(a, b) {
        var c = Oq(Pq(this.context, this.Ia), Yo(this.context, b.Ka));
        return {
            Sa: Jq(a.Ha.g(c), b.Va, 0),
            Ma: {}
        }
    };

    function Tq(a, b) {
        if (a.Db) return fd(new ae(6));
        var c = new J;
        return Ld(K({}), b, c).g(N(function() {
            return {
                timestamp: a.j.now(),
                value: {
                    W: "geo",
                    X: Uq(a),
                    O: An(a, !0),
                    V: c,
                    Z: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), qh(a.h))
    }

    function Uq(a) {
        var b = An(a, !1);
        if (!a.Sd || !jh(a.global.parent) || a.global.parent === a.global) return b;
        var c = new xn(a.global.parent, a.Ba);
        c.H = a.H;
        c = Uq(c);
        a = a.global.frameElement.getBoundingClientRect();
        return fi(gi(fi(c, a), {
            x: b.left - a.left,
            y: b.top - a.top
        }), b)
    };
    var Vq = function(a, b) {
        this.context = a;
        this.Ia = b
    };
    y(Vq, Lq);
    Vq.prototype.Pa = function(a, b) {
        var c = Oq(Tq(this.context, this.Ia), Yo(this.context, b.Ka));
        return {
            Sa: Jq(a.Ha.g(c), b.Va, 0),
            Ma: {}
        }
    };
    var Wq = function(a, b, c) {
        c = c === void 0 ? cp(a, b) : c;
        this.context = a;
        this.oh = c
    };
    y(Wq, Lq);
    Wq.prototype.Pa = function(a, b) {
        var c = this.oh(b.ig);
        return {
            Sa: Jq(a.Ha.g(c, gp(this.context)), b.Va, 0),
            Ma: {}
        }
    };

    function Xq(a, b, c, d, e) {
        var f = f === void 0 ? new pq(a) : f;
        var g = g === void 0 ? kf(a.j, 500) : g;
        var h = h === void 0 ? kf(a.j, 100) : h;
        e = K(f).g(Yq(c), ef(function(k) {
            d.next(k.pb)
        }), Zq(a, h), $q(a), ar(a, e), Ye(1), nd());
        f = new J;
        b = Ld(K({}), b, f);
        return e.g(br(a, f, b, g, c), W(a.h, 1))
    }

    function ar(a, b) {
        return H(function(c) {
            return P([c, b])
        }, Ne(function(c) {
            var d = u(c);
            c = d.next().value;
            return d.next().value !== 9 || qq(c) ? K(!0) : cr(a, c, "viewableChange").g(Q(function(e) {
                return u(e).next().value
            }), Me(1))
        }), N(function(c) {
            return u(c).next().value
        }))
    }

    function Yq(a) {
        return U(function(b) {
            if (b.pb === -1) return a.next("if"), fd(new ae(7));
            if (b.Ic !== 0) switch (b.Ic) {
                case 1:
                    return a.next("mm"), fd(new ae(18));
                case 2:
                    return a.next("ng"), fd(new ae(17));
                default:
                    return a.next("i"), fd(new ae(8))
            }
            return K(b)
        })
    }

    function Zq(a, b) {
        return Ne(function() {
            var c = a.Kf;
            return Yh(a.document) === "complete" ? K(!0) : c.g(Ne(function() {
                return b
            }))
        })
    }
    var $q = function(a) {
        return U(function(b) {
            return b.getState() !== "loading" ? K(b) : cr(a, b, "ready").g(N(function() {
                return b
            }))
        })
    };

    function br(a, b, c, d, e) {
        return U(function(f) {
            var g = rq(f);
            if (typeof g !== "string") return e.next("nc"), fd(new ae(9));
            f.af !== void 0 && (f.af = !0);
            g = cr(a, f, g, dr);
            var h = {
                version: f.pf(),
                pb: f.pb
            };
            g = g.g(N(function(l) {
                return er.apply(null, [a, b, f, h].concat(w(l)))
            }));
            var k = d.g(ef(function() {
                e.next("mt")
            }), U(function() {
                return fd(new ae(10))
            }));
            g = Qd(g, k);
            return P([g, c]).g(N(function(l) {
                l = u(l).next().value;
                return Object.assign({}, l, {
                    timestamp: a.j.now()
                })
            }))
        })
    }

    function dr(a, b) {
        return (b === null || typeof b === "number") && (a === null || !!a && typeof a.height === "number" && typeof a.width === "number" && typeof a.x === "number" && typeof a.y === "number")
    }

    function er(a, b, c, d, e, f) {
        e = e ? {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
        } : di;
        c = c.Nb("getMaxSize");
        var g = c != null && typeof c.width === "number" && typeof c.height === "number" ? c : {
            width: 0,
            height: 0
        };
        c = {
            left: 0,
            top: 0,
            width: -1,
            height: -1
        };
        if (g) {
            var h = Number(String(g.width));
            g = Number(String(g.height));
            c = isNaN(h) || isNaN(g) ? c : {
                left: 0,
                top: 0,
                width: h,
                height: g
            }
        }
        a = {
            value: {
                X: e,
                O: c,
                W: "mraid",
                V: b,
                Z: {
                    x: 0,
                    y: 0
                }
            },
            timestamp: a.j.now()
        };
        return Object.assign({}, a, d, {
            fj: f
        })
    }

    function cr(a, b, c, d) {
        d = d === void 0 ? function() {
            return !0
        } : d;
        return (new I(function(e) {
            var f = a.B.Qb(745, function() {
                e.next(B.apply(0, arguments))
            });
            b.addEventListener(c, f);
            return function() {
                b.removeEventListener(c, f)
            }
        })).g(Q(function(e) {
            return d.apply(null, w(e))
        }))
    };
    var fr = function(a, b) {
        this.context = a;
        this.Ia = b
    };
    y(fr, Lq);
    fr.prototype.Pa = function(a, b) {
        var c = new hd(1),
            d = new hd(1),
            e = Oq(Xq(this.context, this.Ia, c, d, b.Ka), Yo(this.context, b.Ka));
        return {
            Sa: Jq(a.Ha.g(e), b.Va, 1),
            Ma: {
                fe: c.g(W(this.context.h, 1)),
                ge: d.g(W(this.context.h, 1))
            }
        }
    };

    function gr(a) {
        return ["backgrounded", "notFound", "hidden", "noOutputDevice"].includes(a)
    };

    function hr(a, b) {
        var c = c === void 0 ? null : c;
        var d = new J,
            e = void 0,
            f = a.lf,
            g = d.g(N(function() {
                return e ? Object.assign({}, e, {
                    timestamp: a.j.now()
                }) : null
            }), Q(function(k) {
                return k !== null
            }), N(function(k) {
                return k
            }));
        b = P([Ld(f, g), b]);
        var h = c;
        return b.g(Q(function(k) {
            k = u(k).next().value;
            h === null && (h = k.value.xg);
            return k.value.xg === h
        }), ef(function(k) {
            return void(e = u(k).next().value)
        }), N(function(k) {
            var l = u(k);
            k = l.next().value;
            l = l.next().value;
            try {
                var m = k.value.data,
                    q = k.timestamp,
                    t = m.viewport,
                    r, x, v = Object.assign({},
                        t, {
                            width: (r = t == null ? void 0 : t.width) != null ? r : 0,
                            height: (x = t == null ? void 0 : t.height) != null ? x : 0,
                            x: 0,
                            y: 0,
                            Cj: t ? t.width * t.height : 0
                        }),
                    A = ir(v),
                    C = m.adView,
                    O = C.measuringElement && C.containerGeometry ? ir(C.containerGeometry) : ir(C.geometry),
                    X = ir(C.geometry),
                    pa = C.reasons.some(gr),
                    F = pa ? di : ir(C.onScreenGeometry),
                    z;
                l && (z = C.percentageInView / 100);
                l && pa && (z = 0);
                return {
                    timestamp: q,
                    value: {
                        W: "omid",
                        X: O,
                        O: A,
                        V: d,
                        R: "omid",
                        D: X,
                        Z: {
                            x: O.left,
                            y: O.top
                        },
                        T: F,
                        Nc: z
                    }
                }
            } catch (hb) {
                m = lk();
                q = [];
                hk(m, hb, q) || kk.apply(null, [void 0, void 0, "Guard " +
                    m.qf().trim() + " failed:"
                ].concat(w(q.reverse())));
                var R, mb;
                m = (mb = (R = hb) == null ? void 0 : R.message) != null ? mb : "An unknown error occurred";
                R = "Error while processing geometryChange event: " + JSON.stringify(k.value) + "; " + m;
                throw Error(R);
            }
        }), Ye(1), nd())
    }

    function ir(a) {
        var b, c, d, e;
        return {
            left: Math.floor((b = a == null ? void 0 : a.x) != null ? b : 0),
            top: Math.floor((c = a == null ? void 0 : a.y) != null ? c : 0),
            width: Math.floor((d = a == null ? void 0 : a.width) != null ? d : 0),
            height: Math.floor((e = a == null ? void 0 : a.height) != null ? e : 0)
        }
    };

    function jr(a, b, c, d) {
        c = c === void 0 ? Md : c;
        var e = a.h;
        if (b === null) return fd(new ae(20));
        if (!b.validate()) return fd(new ae(21));
        var f;
        d = kr(e, b, d).g(N(function(g) {
            var h = g.value;
            g = g.timestamp;
            var k = b.j,
                l = a.j;
            if (k.timeline !== g.timeline) throw new fe;
            g = new oe(g.value - k.now().value + l.now().value, l.timeline);
            return f = {
                value: h,
                timestamp: g
            }
        }));
        return Ld(d, c.g(N(function() {
            return f
        }))).g(Q(function(g) {
            return g !== void 0
        }), N(function(g) {
            return g
        }), W(a.h, 1))
    }

    function kr(a, b, c) {
        return hr(b, c).g(W(a, 1), N(function(d) {
            return {
                timestamp: d.timestamp,
                value: {
                    Z: {
                        x: d.value.D.left,
                        y: d.value.D.top
                    },
                    X: d.value.T,
                    O: d.value.O,
                    W: d.value.R,
                    V: d.value.V
                }
            }
        }))
    };
    var lr = function(a, b, c) {
        this.fa = a;
        this.M = b;
        this.Ia = c
    };
    y(lr, Lq);
    lr.prototype.Pa = function(a, b) {
        var c = b.Ka;
        b = jr(this.M, this.fa, this.Ia, b.Jf);
        c = Oq(b, Yo(this.M, c));
        return {
            Sa: a.Ha.g(c),
            Ma: {}
        }
    };
    var mr = function(a, b, c) {
        this.fa = a;
        this.M = b;
        this.Sg = c
    };
    y(mr, Lq);
    mr.prototype.Pa = function(a, b) {
        var c = jr(this.M, this.fa, void 0, b.Jf);
        b = fp(this.M, b.ig, this.Sg);
        c = Oq(c, b);
        return {
            Sa: a.Ha.g(c),
            Ma: {}
        }
    };
    var nr = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        or = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        };

    function pr(a) {
        return a.document.Ph.g(N(function(b) {
            return b === "visible"
        }), S(), W(a.h, 1))
    };
    var qr;
    qr = ["2024081401"].slice(-1)[0].substring(0, 8);

    function rr(a, b, c) {
        var d;
        return b.g(S(), U(function(e) {
            return c.g(N(function() {
                if (!d) {
                    d = !0;
                    try {
                        e.next()
                    } finally {
                        d = !1
                    }
                }
                return !0
            }))
        }), T(!1), W(a.h, 1))
    };

    function sr(a) {
        return H(kp(N(function(b) {
            return Cp(b, a)
        })), Do(), N(function(b) {
            return Math.round(b)
        }))
    };

    function tr(a, b, c, d, e) {
        var f = bq;
        if (f.length > 1)
            for (var g = 0; g < f.length - 1; g++)
                if (f[g] < f[g + 1]) throw Error();
        g = e.g(T(void 0), U(function() {
            return c.g(Ro())
        }), S(), W(a, 1));
        e = e.g(T(void 0), U(function() {
            return c.g(zq())
        }), S(), W(a, 1));
        return {
            ui: d.g(T(void 0), U(function() {
                return b.g(N(function(h) {
                    return {
                        timestamp: h.timestamp,
                        value: !0
                    }
                }), Do())
            }), S(), W(a, 1)),
            vi: d.g(T(void 0), U(function() {
                return b.g(N(function(h) {
                    return {
                        timestamp: h.timestamp,
                        value: h.value === 0
                    }
                }), Do())
            }), S(), W(a, 1)),
            nc: d.g(T(void 0), U(function() {
                return b.g(Qo(Aq,
                    f))
            }), S(Ob), W(a, 1)),
            wc: d.g(T(void 0), U(function() {
                return b.g(Qo(sr, f), N(function(h) {
                    return h.map(function(k, l) {
                        return l > 0 ? k - h[l - 1] : k
                    })
                }))
            }), S(Ob), W(a, 1)),
            lc: e,
            cb: g.g(S(qp), W(a, 1))
        }
    };

    function ur(a, b, c) {
        var d = c.g(N(function(e) {
            return {
                value: e,
                timestamp: a.j.now()
            }
        }), S(qp));
        return b instanceof I ? b.g(S(), U(function(e) {
            return e ? (new Y({
                value: !1,
                timestamp: a.j.now()
            })).P(a.h) : d
        })) : b.value === !1 ? d : new Y(!1)
    }

    function vr(a, b, c, d, e, f, g) {
        var h = Vp;
        b = b instanceof I ? b.g(T(!1), S()) : b;
        var k = !(hh() || ih());
        c = ur(a, c, d);
        a = g.Ha.g(Ao(a.h));
        return Object.assign({}, h, {
            Pc: c,
            kg: e,
            Pe: k,
            Hf: b,
            Rc: a,
            hg: f
        })
    };

    function wr(a) {
        a = a.global;
        if (typeof a.__google_lidar_ === "undefined") return a.__google_lidar_ = 1, !1;
        a.__google_lidar_ = Number(a.__google_lidar_) + 1;
        var b = a.__google_lidar_adblocks_count_;
        if (typeof b === "number" && b > 0 && (a = a.__google_lidar_radf_, typeof a === "function")) try {
            a()
        } catch (c) {}
        return !0
    }

    function xr(a) {
        var b = a.global;
        b.osdlfm = function() {
            return b.__google_lidar_radf_
        };
        if (b.__google_lidar_radf_ !== void 0) return Ic;
        b.__google_lidar_adblocks_count_ = 1;
        var c = new J;
        b.__google_lidar_radf_ = function() {
            return void c.next(a)
        };
        return c.g(mg(a.B, 743))
    };
    var yr = function(a) {
            var b = this;
            this.be = !1;
            this.je = [];
            this.ie = [];
            a(function(c) {
                b.be = !0;
                b.di = c;
                b.evaluate()
            }, function(c) {
                b.Zh = c;
                b.evaluate()
            })
        },
        zr = function(a) {
            return new yr(function(b, c) {
                var d = [],
                    e = 0;
                a.forEach(function(f, g) {
                    f.then(function(h) {
                        d[g] = h;
                        ++e === a.length && b(d)
                    }).catch(function(h) {
                        c(h)
                    })
                })
            })
        };
    yr.prototype.evaluate = function() {
        var a = this.di,
            b = this.Zh;
        if (b !== void 0 || this.be) this.be && this.je.forEach(function(c) {
            return void c(a)
        }), b !== void 0 && this.ie.forEach(function(c) {
            return void c(b)
        }), this.je = [], this.ie = []
    };
    yr.prototype.then = function(a) {
        this.je.push(a);
        this.evaluate();
        return this
    };
    yr.prototype.catch = function(a) {
        this.ie.push(a);
        this.evaluate();
        return this
    };
    var Ar = function(a) {
        this.children = a;
        this.Xd = !1;
        this.zd = []
    };
    Ar.prototype.complete = function() {
        var a = this;
        this.Xd = !0;
        this.zd.forEach(function(b) {
            return void b(a)
        });
        this.zd.splice(0)
    };
    Ar.prototype.onComplete = function(a) {
        this.Xd ? a(this) : this.zd.push(a)
    };
    Ar.prototype.ab = function(a) {
        var b = this.children.map(function(c) {
            return c.ab(a)
        });
        return b.find(function(c) {
            return c !== 2
        }) === void 0 ? 2 : this.za ? 0 : b.some(function(c) {
            return c === 1
        }) ? 1 : 0
    };
    da.Object.defineProperties(Ar.prototype, {
        za: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Xd
            }
        }
    });
    var Br = function() {
        var a = B.apply(0, arguments);
        Ar.call(this, a);
        var b = this;
        this.events = a;
        var c = this.events.length;
        this.events.forEach(function(d) {
            d.onComplete(function() {
                --c === 0 && b.complete()
            })
        })
    };
    y(Br, Ar);
    Br.prototype.clone = function() {
        return new(Function.prototype.bind.apply(Br, [null].concat(w(this.events.map(function(a) {
            return a.clone()
        })))))
    };
    Br.prototype.xe = function(a, b) {
        var c = this;
        if (!this.za) {
            var d = this.events.find(function(e) {
                return e.ab(a) === 1
            });
            d !== void 0 && d.xe(a, function() {
                c.za || b()
            })
        }
    };
    var Cr = function(a, b) {
        Ar.call(this, []);
        this.Gd = a;
        this.Uc = Symbol(b);
        this.Rh = a
    };
    y(Cr, Ar);
    Cr.prototype.clone = function() {
        var a = new Cr(this.Rh, this.Uc.description);
        a.Uc = this.Uc;
        return a
    };
    Cr.prototype.ab = function(a) {
        return a !== this.event ? 2 : this.za || this.Gd === 0 ? 0 : 1
    };
    Cr.prototype.xe = function(a, b) {
        this.ab(a) === 1 && (this.Gd--, b(), this.Gd === 0 && this.complete())
    };
    da.Object.defineProperties(Cr.prototype, {
        event: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Uc
            }
        }
    });
    var Dr = function(a) {
        Cr.call(this, 1, a)
    };
    y(Dr, Cr);
    var Er = function(a, b, c) {
        var d = B.apply(3, arguments);
        this.Qa = a;
        this.Pg = b;
        this.Dd = c;
        this.kc = new Set;
        this.Gb = d;
        if (this.Qa.M) this.context = this.Qa.M;
        else if (this.Qa.fa) this.context = this.Qa.fa;
        else throw Error("xa");
        var e = d.reduce(function(h, k) {
            k.subscribedEvents.forEach(function(l) {
                return void h.add(l)
            });
            return h
        }, new Set);
        e = u(e.values());
        for (var f = e.next(), g = {}; !f.done; g = {
                ef: void 0
            }, f = e.next()) {
            g.ef = f.value;
            f = d.filter(function(h) {
                return function(k) {
                    return k.controlledEvents.indexOf(h.ef) >= 0
                }
            }(g));
            if (f.length ===
                0) throw Error("ya");
            if (f.length > 1) throw Error("za");
        }
    };
    Er.prototype.start = function() {
        var a = this;
        this.Gb.forEach(function(b) {
            return void b.start(a.Qa)
        });
        this.Dd.start(this.Qa, this.Xg.bind(this), this.Ab.bind(this), function() {})
    };
    Er.prototype.dispose = function() {
        var a = this;
        this.Dd.dispose();
        this.kc.forEach(function(b) {
            return void a.Ab(b)
        });
        this.Gb.forEach(function(b) {
            return void b.dispose()
        })
    };
    var Fr = function(a, b) {
            b = {
                measuringCreativeIds: [].concat(w(a.kc.values())).map(function(c) {
                    return a.context.Zb.Ea(c)
                }),
                hasCreativeSourceCompleted: !!a.Dd.fd,
                colleagues: a.Gb.map(function(c) {
                    return {
                        name: c.name,
                        controlledEvents: c.controlledEvents.map(function(d) {
                            var e;
                            return (e = d.description) != null ? e : "n/a"
                        }),
                        subscribedEvents: c.subscribedEvents.map(function(d) {
                            var e;
                            return (e = d.description) != null ? e : "n/a"
                        })
                    }
                }),
                ephemeralCreativeStateChanges: b
            };
            b = {
                specMajor: 2,
                specMinor: 0,
                specPatch: 0,
                instanceId: a.context.Zb.Ea(a.context.qb),
                timestamp: qe(a.context.j.now(), new oe(0, a.context.j.timeline)),
                mediatorState: b
            };
            Xd(a.context, b)
        },
        Gr = function(a, b, c, d, e) {
            var f = {};
            Fr(a, (f[b] = {
                events: [{
                    timestamp: c,
                    description: d,
                    status: e
                }]
            }, f))
        };
    Er.prototype.Xg = function(a, b, c) {
        var d = this;
        if (!this.kc.has(a)) {
            var e = this.Pg.clone();
            this.kc.add(a);
            Fr(this, {});
            var f = !1,
                g = [];
            this.Gb.forEach(function(h) {
                var k = function(l, m, q) {
                    var t = d.context.Zb.Ea(a),
                        r = qe(d.context.j.now(), new oe(0, d.context.j.timeline)),
                        x, v = (x = l.description) != null ? x : "n/a";
                    if (h.controlledEvents.indexOf(l) < 0 || e.ab(l) !== 1) return q(!1), Gr(d, t, r, v, 1), new yr(function(C) {
                        return void C()
                    });
                    var A = new yr(function(C) {
                        e.xe(l, function() {
                            d.Gb.filter(function(O) {
                                return O.subscribedEvents.indexOf(l) >=
                                    0
                            }).forEach(function(O) {
                                return void O.handleEvent(a, l, m)
                            });
                            C()
                        })
                    });
                    return new yr(function(C) {
                        A.then(function() {
                            q(!0);
                            Gr(d, t, r, v, 2);
                            C()
                        })
                    })
                };
                h.Od(a, b, c, function(l, m, q) {
                    return f ? k(l, m, q) : new yr(function(t) {
                        g.push(function() {
                            k(l, m, q).then(function() {
                                t()
                            })
                        })
                    })
                })
            });
            f = !0;
            g.forEach(function(h) {
                return void h()
            })
        }
    };
    Er.prototype.Ab = function(a) {
        this.kc.delete(a);
        this.Gb.forEach(function(b) {
            b.Ab(a)
        });
        Fr(this, {})
    };
    var Hr = function(a, b) {
            this.key = a;
            this.defaultValue = b === void 0 ? !1 : b;
            this.valueType = "boolean"
        },
        Ir = function(a) {
            this.key = a;
            this.defaultValue = 0;
            this.valueType = "number"
        };
    var Jr = new Hr("100006"),
        Kr = new Ir("45362137"),
        Lr = new Hr("45377435"),
        Mr = new Hr("45618478"),
        Nr = new Hr("45642405"),
        Or = new Hr("45372163"),
        Pr = new Hr("45407241"),
        Qr = new Hr("45382077"),
        Rr = new Hr("45407239"),
        Sr = new Hr("45407240", !0),
        Tr = new Hr("45430682");
    var Ur = new Ir("45389692");
    var tl = function(a) {
        dn.call(this, a)
    };
    y(tl, dn);
    tl.prototype.Jd = function() {
        return zl(this, 4, !0)
    };
    tl.na = "ads.branding.measurement.client.serving.integrations.active_view.ActiveViewMetadata";
    var Vr = [0, Xm, -2, Wm, -1];
    tl.prototype.pa = en(Vr);
    var Wr = function(a) {
        dn.call(this, a)
    };
    y(Wr, dn);
    Wr.prototype.getType = function() {
        var a = 0;
        a = a === void 0 ? 0 : a;
        var b = tk(cl(this, 6));
        return yl(b, a)
    };
    Wr.na = "ads.geo.GeoTargetMessage";
    var Xr = function(a) {
        dn.call(this, a)
    };
    y(Xr, dn);
    Xr.prototype.Jd = function() {
        return zl(this, 3, !0)
    };
    Xr.prototype.nf = function() {
        return vl(this, Wr, 4)
    };
    Xr.na = "ads.branding.measurement.client.serving.integrations.reach.ReachMetadata";
    var Yr = [0, Zm, -4, an, Wm, Um, Rm, Zm, Rm, Zm, Um, Zm, -1, [0, Um, -3], $m, Tm, Zm, Sm, -1, Um, -1, Sm, Rm, [0, Sm, Um, -1, an, Rm, Sm], Qm, Zm];
    Wr.prototype.pa = en(Yr);
    var Zr = [0, Xm, -1, Wm, Yr, Vm, -1, bn, Um, Wm];
    Xr.prototype.pa = en(Zr);
    var $r = function(a) {
        dn.call(this, a)
    };
    y($r, dn);
    var as = function(a) {
        return vl(a, Xr, 1)
    };
    $r.na = "ads.branding.measurement.client.serving.IntegratorMetadata";
    var bs = [0, Zr, Vr];
    $r.prototype.pa = en(bs);
    var cs = function(a, b) {
        return function(c, d) {
            if (bj.length) {
                var e = bj.pop();
                $i(e, d);
                e.l.dc(c, void 0, void 0, d);
                c = e
            } else c = new aj(c, d);
            try {
                var f = new a,
                    g = f.s;
                fm(b)(g, c);
                var h = f
            } finally {
                c.hf()
            }
            return h
        }
    }($r, bs);
    var ds = function() {
            this.gf = {}
        },
        es = function(a, b) {
            a = a.gf[b.key];
            if (b.valueType === "proto") {
                try {
                    var c = JSON.parse(a);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return b.defaultValue
            }
            return typeof a === typeof b.defaultValue ? a : b.defaultValue
        };
    var fs = function() {
        this.Ze = !1;
        this.Ve = new Map
    };
    fs.prototype.start = function(a, b, c, d) {
        var e = this;
        if (this.fd === void 0 && a.M) {
            var f = a.M;
            this.Ue = d;
            c = !this.Ze && wr(f);
            d = this.Ze ? Ic : xr(f);
            d = Sn(f, d);
            this.fd = (c ? Ic : d.g(N(function(g) {
                var h = h === void 0 ? Symbol() : h;
                return Object.freeze({
                    qb: h,
                    element: (new Y(g)).P(f.h)
                })
            }), Kn())).subscribe(function(g) {
                var h = g.qb;
                e.Ve.set(h, g);
                g.element.g(Me(1)).subscribe(function(k) {
                    var l = Hn(k, "data-google-av-flags"),
                        m = new ds;
                    if (l !== null) try {
                        var q = JSON.parse(l)[0];
                        l = "";
                        for (var t = 0; t < q.length; t++) l += String.fromCharCode(q.charCodeAt(t) ^
                            "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(t % 10));
                        m.gf = JSON.parse(l)
                    } catch (Tc) {}
                    var r, x, v, A, C, O, X, pa, F, z, R, mb;
                    q = {
                        considerOmidZOrderOcclusions: (r = m == null ? void 0 : es(m, Jr)) != null ? r : !1,
                        extraPings: (x = m == null ? void 0 : es(m, Kr)) != null ? x : 0,
                        extrapolators: (v = m == null ? void 0 : es(m, Lr)) != null ? v : !1,
                        rxlidarStatefulBeacons: (A = m == null ? void 0 : es(m, Or)) != null ? A : !1,
                        shouldIgnoreAdChoicesIcon: (C = m == null ? void 0 : es(m, Qr)) != null ? C : !1,
                        dedicatedViewableAttributionPing: (O = m == null ? void 0 : es(m, Ur)) != null ?
                            O : 0,
                        useReachIntegrationPolyfill: (X = m == null ? void 0 : es(m, Rr)) != null ? X : !1,
                        useReachIntegrationSharedStorage: (pa = m == null ? void 0 : es(m, Sr)) != null ? pa : !0,
                        sendBrowserIdInsteadOfVPID: (F = m == null ? void 0 : es(m, Pr)) != null ? F : !1,
                        waitForImpressionColleague: (z = m == null ? void 0 : es(m, Tr)) != null ? z : !1,
                        fetchLaterBeacons: (R = m == null ? void 0 : es(m, Mr)) != null ? R : !1,
                        rxInNonrx: (mb = m == null ? void 0 : es(m, Nr)) != null ? mb : !1
                    };
                    k = Hn(k, "data-google-av-ufs-integrator-metadata");
                    a: {
                        if (k !== null) try {
                            var hb = cs(k);
                            break a
                        } catch (Tc) {}
                        hb = new $r
                    }
                    b(h, hb,
                        q)
                })
            });
            c && this.dispose();
            a.fa && Gf(a.fa)
        }
    };
    fs.prototype.dispose = function() {
        var a, b;
        (a = this.fd) == null || (b = a.unsubscribe) == null || b.call(a);
        this.fd = void 0;
        var c;
        (c = this.Ue) == null || c.call(this);
        this.Ue = void 0
    };
    var gs = function(a) {
        dn.call(this, a)
    };
    y(gs, dn);
    var hs = function(a, b) {
        return Fl(a, 1, b)
    };
    gs.na = "contentads.bow.rendering.client.TurtleDoveReportingData";
    gs.prototype.pa = en([0, Xm, Um, Xm, -5, an, Xm, -1]);

    function is() {
        var a = Hg();
        return a ? Lb("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return Xa(a, b)
        }) || Xa(a, "OMI/") && !Xa(a, "XiaoMi/") ? !0 : Xa(a, "Presto") && Xa(a, "Linux") && !Xa(a, "X11") && !Xa(a, "Android") && !Xa(a, "Mobi") : !1
    };
    var Vp = Object.freeze({
            cg: 1E3,
            Hd: .5,
            de: .3
        }),
        bq = Object.freeze([1, .75, Vp.Hd, Vp.de, 0]),
        js = function(a, b, c, d, e, f, g) {
            this.Xh = a;
            this.Fb = b;
            this.Cb = c;
            this.Vb = d;
            this.Dc = e;
            this.Ec = f;
            this.ud = g;
            this.name = "rxlidar";
            this.Ah = new hd;
            this.controlledEvents = [];
            this.subscribedEvents = [];
            this.Ed = new hd;
            this.Fa = new hd;
            this.controlledEvents.push(this.Vb, this.Dc, this.Ec);
            this.subscribedEvents.push(this.Cb)
        };
    n = js.prototype;
    n.start = function(a) {
        if (this.Nd === void 0 && a.M) {
            var b;
            if ((b = this.Fb) != null) var c = b;
            else {
                b = a.M;
                var d = (c = a.fa) != null ? c : null;
                c = {
                    Og: .01,
                    Dh: kf(b.j, 36E5),
                    Ia: b.j.Ga(100).g(W(b.h, 1)),
                    fa: d
                }
            }
            this.Fb = c;
            a = a.M;
            this.Nd = ks(a, this.Ed.g(W(a.h, 1)), this.Fb.Og, this.Fb.Dh, this.Fb.Ia, this.Fb.fa, this.Fa.g(T(!1), W(a.h, 1)), this.Vb, this.Dc, this.Ec, this.ud).subscribe(this.Ah)
        }
    };
    n.dispose = function() {
        this.Ed.complete();
        this.Fa.complete();
        var a;
        (a = this.Nd) == null || a.unsubscribe();
        this.Nd = void 0
    };
    n.Od = function(a, b, c, d) {
        hl(b, tl, 2) && !vl(b, tl, 2).Jd() || this.Ed.next(Object.assign({}, this.Xh.Ve.get(a), {
            metadata: b,
            experimentState: c,
            Ij: a,
            Ra: d
        }))
    };
    n.Ab = function() {};
    n.handleEvent = function(a, b) {
        b === this.Cb && (this.Fa.next(!0), this.Fa.complete())
    };

    function ks(a, b, c, d, e, f, g, h, k, l, m) {
        var q = pr(a).g(N(function(r) {
                return !r
            })),
            t = new Mq(a, [new Wq(a, bq), new Vq(a, e), new Sq(a, e), new mr(f, a, bq), new lr(f, a, e), new fr(a, e)]);
        return Vn(a, b, function(r, x) {
            var v = yq(r, x.element),
                A = v.td,
                C = v.Wb,
                O = v.Bd,
                X = v.Ce,
                pa = v.Jg,
                F = v.Va,
                z = v.rh,
                R = v.Ud,
                mb = v.Yd,
                hb = v.Ka,
                Tc = v.ra,
                Ma = v.Ai,
                Uc = v.hb;
            v = v.ce;
            var Tb, Na = (Tb = Dl(ul(x.metadata), 3)) != null ? Tb : "";
            Tb = hs(new gs, atob(Na)).Xa();
            Na = (new Y(x.experimentState)).P(r.h);
            var Yl = new Y(new mf(r, new zg(r))),
                Zl = Na.g(N(function(D) {
                        return D.fetchLaterBeacons
                    }),
                    T(!1), S(), W(r.h, 1)),
                vs = Zl.g(N(function(D) {
                    return D && (new vg(r)).F({
                        bf: !0
                    })
                }), ef(function(D) {
                    D && Yl.value.G("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fetch&later&start&control&fle=1&sfl=1").sendNow()
                })),
                Yd = Na.g(N(function(D) {
                    return D.shouldIgnoreAdChoicesIcon
                })),
                Oa = F.g(Je(z), N(function(D) {
                    var Eb = u(D);
                    D = Eb.next().value;
                    Eb = Eb.next().value;
                    (D = D || Eb) || ((D = Xa(Hg(), "CrKey") && !(Xa(Hg(), "CrKey") && Xa(Hg(), "SmartSpeaker")) || Xa(Hg(), "PlayStation") || Xa(Hg(), "Roku") || is() || Xa(Hg(), "Xbox")) ||
                        (D = Hg(), D = Xa(D, "AppleTV") || Xa(D, "Apple TV") || Xa(D, "CFNetwork") || Xa(D, "tvOS")), D || (D = Hg(), D = Xa(D, "sdk_google_atv_x86") || Xa(D, "Android TV")));
                    return D
                }));
            z = new Hq(r, x, pa, F, hb, Yd);
            Yd = Na.g(N(function(D) {
                return D.considerOmidZOrderOcclusions
            }));
            var pc, ob = (pc = Cl(ul(x.metadata))) != null ? pc : !1;
            pc = t.Pa(z, {
                Va: F,
                ig: ob,
                Ka: hb,
                Jf: Yd
            });
            var Pa = pc.Sa,
                Zd = pc.Ma;
            pc = Zd.fe;
            Yd = Zd.ge;
            Zd = Zd.ue;
            ob = (new Y(ob)).P(r.h);
            var Ub = vr(r, mb, Oa, q, Ma, ob, z);
            Ma = hq(r.h, r.j, Pa, Ub);
            Oa = tr(r.h, Ma.ua.we, Ma.ua.visible, Ma.te, Ma.uc);
            ob = wq(r.h, r.j,
                Ma.uc, Ma.ua.V, Ma.ua.visible);
            Pa = Lp(r.h, r.j, Pa, Ub);
            Ub = aq(r.j, r.h, Pa.ua.we, Pa.ua.visible, Pa.te, Pa.uc);
            var Wh = {
                    Be: Up(r.h, r.j, Pa.uc, Ub.lc)
                },
                Xh = Na.g(N(function(D) {
                    return D.extrapolators
                }), T(!1));
            Pa = zo(r.h, Xh, Object.assign({}, Pa.ua, Ub, Wh), Object.assign({}, Ma.ua, {
                Be: Bp(r, ob),
                nc: Bp(r, Oa.nc),
                wc: Bp(r, Oa.wc),
                lc: Bp(r, Oa.lc),
                cb: Oa.cb.g(N(function(D) {
                    return new Ap(r.j, D)
                }))
            }));
            Oa = jp(r, d.g(We("t")));
            ob = (f !== null && f.validate() ? f.hi : Md).g(W(r.h, 1), We("u"));
            Oa = Qd(Oa, ob);
            ob = rr(r, Pa.V, Oa.g(Q(function(D) {
                return D !== null
            })));
            Ub = ls(r, z, A);
            Wh = ms(r, Oa, x.element);
            Xh = Ub.yg.g(T({
                x: 0,
                y: 0
            }));
            var ys = Na.g(N(function(D) {
                    return D.rxlidarStatefulBeacons
                }), T(!1), S(), ef(function(D) {
                    nh = D
                }), W(r.h, 1)),
                $l = R.g(N(function(D) {
                    return D === 40 || D === 41 || D === 42
                })),
                zs = Na.g(N(function(D) {
                    return D.waitForImpressionColleague
                }), T(!1), S(), W(r.h, 1));
            return Object.assign({}, {
                    H: new Y(r.H),
                    Tc: new Y("lidar2"),
                    pi: new Y("lidartos"),
                    Bg: new Y(qr),
                    ud: new Y(m),
                    Ad: new Y(r.validate() ? null : new be),
                    Fg: new Y(Zh(r.document)),
                    ga: new Y(go),
                    cf: Oa,
                    bg: Oa,
                    Ej: ob,
                    Pd: g,
                    zi: zs,
                    Ra: new Y(x.Ra),
                    Vb: new Y(h),
                    Dc: new Y(k),
                    Ec: new Y(l),
                    Ig: new Y(r.Db ? 1 : void 0),
                    Kg: new Y(r.Cg ? 1 : void 0),
                    Va: F,
                    hb: Uc,
                    ye: new Y(Tb),
                    Mb: Uc.g(Q(function(D) {
                        return D
                    }), N(function() {
                        return r.Mb.bind(r)
                    })),
                    fe: pc.g(W(r.h, 1)),
                    ge: Yd.g(W(r.h, 1)),
                    Ug: Na.g(N(function(D) {
                        return D.extraPings
                    })),
                    xf: ys,
                    fh: Zl,
                    Zf: vs,
                    ce: v,
                    ph: $l,
                    gh: Na.g(N(function(D) {
                        return D.dedicatedViewableAttributionPing
                    })),
                    Vg: Yl,
                    ag: new Y(nh && (new mh(r)).F({
                        ha: "GET"
                    })),
                    ki: new Y(Number(x.experimentState.useReachIntegrationSharedStorage) << 0 + Number(x.experimentState.useReachIntegrationPolyfill) <<
                        1 + Number(x.experimentState.sendBrowserIdInsteadOfVPID) << 2),
                    Hg: x.element.g(N(function(D) {
                        return D !== null
                    })),
                    Sc: Tc,
                    ri: Tc,
                    Bd: O.g(T([])),
                    Ce: X.g(T([])),
                    bh: O.g(N(function(D) {
                        return D.length > 0 ? !0 : null
                    }), T(null), S()),
                    Wb: C.g(T([]), W(r.h, 1)),
                    nj: Na,
                    td: A,
                    Yb: z.Yb,
                    Ud: R.g(T(0), W(r.h, 1)),
                    Bh: pa,
                    Ka: hb.g(T(0), W(r.h, 1)),
                    xc: $l.g(N(function(D) {
                        return D ? wo : fo
                    })),
                    Rb: new Y(xo),
                    Yd: mb,
                    yf: z.ic.g(Ao(r.h)),
                    De: z.De
                }, Pa, {
                    Kc: P([Pa.Kc, Xh]).g(N(function(D) {
                        var Eb = u(D);
                        D = Eb.next().value;
                        Eb = Eb.next().value;
                        return gi(D, Eb)
                    }), S(ei))
                },
                Ub, {
                    yc: Bh(r),
                    dh: Wh,
                    ue: Zd,
                    jd: Ma.ua.jd,
                    Dg: new Y(new qo)
                })
        }, eo(a, "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=" + m + "&v=" + qr, c))
    }

    function ls(a, b, c) {
        var d = d === void 0 ? Ha : d;
        var e, f;
        d = ((e = d.performance) == null ? void 0 : (f = e.timing) == null ? void 0 : f.navigationStart) || 0;
        return Object.assign({}, {
            wg: new Y(d),
            vg: Oo(a, b)
        }, No(a, b, c))
    }

    function ms(a, b, c) {
        return b.g(Q(function(d) {
            return d !== null
        }), U(function() {
            return c
        }), N(function(d) {
            var e = Ln(a);
            return e.length > 0 && e.indexOf(d) >= 0
        }), N(function(d) {
            return !d
        }))
    };
    var ns = function(a) {
        var b = b === void 0 ? [] : b;
        var c = c === void 0 ? [a] : c;
        this.Cb = a;
        this.subscribedEvents = b;
        this.controlledEvents = c;
        this.name = "impression";
        this.Rd = new Map
    };
    n = ns.prototype;
    n.start = function(a) {
        this.Qa = a
    };
    n.dispose = function() {
        this.Rd.clear()
    };
    n.Od = function(a, b, c, d) {
        if (b = this.Qa) c = new os(b, c, this.Cb, d), this.Rd.set(a, c)
    };
    n.Ab = function(a) {
        this.Rd.delete(a)
    };
    n.handleEvent = function() {};
    var os = function(a, b, c, d) {
        var e = this;
        this.context = a;
        this.Cb = c;
        this.gg = function() {};
        this.wf = [];
        this.uf = "&avradf=1";
        this.vf = zr([]);
        this.Fa = new hd;
        c = a.fa;
        var f = c !== null && (c == null ? void 0 : c.validate()),
            g, h = (g = a.M) == null ? void 0 : g.h;
        this.Fa.g(T(!b.waitForImpressionColleague), W(h, 1));
        this.mi = f ? c == null ? void 0 : c.tf.g(Me(1), We(!0), T(!1)) : (new Y(!0)).P(h);
        this.gg = function(k, l) {
            e.Fa.next(!0);
            e.Fa.complete();
            P([e.Fa, e.mi]).subscribe(function(m) {
                var q = u(m);
                m = q.next().value;
                q = q.next().value;
                if (!q) return Md;
                m && q &&
                    d(e.Cb, k, l);
                return !0
            })
        };
        this.dc(a.M)
    };
    os.prototype.dc = function(a) {
        var b = this;
        this.qc = a.global.document;
        this.wf.push(ps(this));
        var c = {};
        this.vf = zr(this.wf);
        this.vf.then(function() {
            b.uf = "&vis=" + nr(b.qc) + "&uach=0&ms=0";
            c.paramString = b.uf;
            c.view_type = "DELAYED_IMPRESSION";
            b.gg(c, function() {})
        })
    };
    var ps = function(a) {
        return new yr(function(b) {
            var c = or(a.qc);
            if (c)
                if (nr(a.qc) === 3) {
                    var d = function() {
                        var e = a.qc;
                        e.removeEventListener && e.removeEventListener(c, d, !1);
                        b(!0)
                    };
                    Ag(a.qc, c, d)
                } else b(!0)
        })
    };

    function qs(a) {
        var b = Ch(a);
        return b ? b.g(N(function(c) {
            var d;
            c = (d = xl(c).find(function(f) {
                return Dl(f, 1) === "Google Chrome"
            })) == null ? void 0 : Dl(d, 2);
            if (!c) return !1;
            var e;
            return ((e = u(c.split(".").map(function(f) {
                return Number(f)
            })).next().value) != null ? e : 0) >= 121
        })) : sh.P(a.h)
    };
    var rs = function(a) {
        dn.call(this, a)
    };
    y(rs, dn);
    rs.prototype.nf = function() {
        return vl(this, Wr, 11)
    };
    rs.na = "ads.branding.measurement.client.frontend.integrations.reach.ReachStatusMessage";
    rs.prototype.pa = en([0, an, Xm, -1, an, -2, Xm, -1, Um, Xm, Yr, bn, Um]);
    var ss = function(a) {
            this.context = a;
            this.points = []
        },
        ts = function(a, b) {
            Ca(function(c) {
                if (c.N == 1) return c.bb = 0, c.Da = 2, sa(c, b(), 4);
                if (c.N != 2) return c.return(c.ub);
                ta(c);
                a.flush();
                return ua(c, 0)
            })
        };
    ss.prototype.flush = function() {
        if (!(this.points.length <= 0)) {
            var a = new rs;
            var b = sk(9);
            fl(a, 1, b);
            if (!Number.isFinite(3)) throw a = "Expected int32 as finite number but got " + Ja(3) + ": 3", dk(a);
            fl(a, 13, 3);
            b = this.points;
            var c = a.s,
                d = Z(c);
            Rj(Aj(a.s));
            c = kl(c, d, 12, 2, !1);
            Z(c);
            if (Array.isArray(b))
                for (d = 0; d < b.length; d++) c.push(sk(b[d]));
            else
                for (b = u(b), d = b.next(); !d.done; d = b.next()) c.push(sk(d.value));
            Yj(c);
            this.points.splice(0);
            b = this.context;
            a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=reach&proto=" +
                encodeURIComponent(yh(a.pa()));
            b.H.G(a, {
                ha: "GET"
            }).sendNow()
        }
    };
    var us = function(a) {
        var b = b === void 0 ? [] : b;
        var c = c === void 0 ? [a] : c;
        this.ke = a;
        this.subscribedEvents = b;
        this.controlledEvents = c;
        this.name = "reach";
        this.rc = new Map
    };
    n = us.prototype;
    n.start = function(a) {
        a.M && (this.context = a.M)
    };
    n.dispose = function() {
        this.rc.forEach(function(a) {
            return void a.dispose()
        });
        this.rc.clear()
    };
    n.Od = function(a, b, c, d) {
        var e = this,
            f = this.context;
        if (f) {
            var g = new ss(f);
            ts(g, function() {
                var h, k;
                return Ca(function(l) {
                    if (l.N == 1) {
                        g.points.push(1);
                        if (hl(b, Xr, 1) && !as(b).Jd()) return l.return();
                        g.points.push(2);
                        try {
                            var m = !!f.global.sharedStorage
                        } catch (q) {
                            m = q
                        }
                        return m ? sa(l, md(qs(f)), 2) : l.return()
                    }
                    h = l.ub;
                    if (!h) return l.return();
                    g.points.push(3);
                    k = new ws(f, b, e.ke, c, d, g);
                    e.rc.set(a, k);
                    return sa(l, k.run(), 0)
                })
            })
        }
    };
    n.Ab = function(a) {
        var b;
        (b = this.rc.get(a)) == null || b.dispose();
        this.rc.delete(a)
    };
    n.handleEvent = function() {};
    var ws = function(a, b, c, d, e, f) {
        this.context = a;
        this.metadata = b;
        this.ke = c;
        this.experimentState = d;
        this.Ra = e;
        this.Gg = f
    };
    ws.prototype.run = function() {
        var a = this,
            b, c;
        return Ca(function(d) {
            if (d.N == 1) return b = {}, sa(d, new Promise(function(e) {
                a.Ra(a.ke, b, e)
            }), 2);
            c = d.ub;
            if (!c) return d.return();
            a.Gg.points.push(4);
            return sa(d, xs(a), 0)
        })
    };
    var xs = function(a) {
            var b, c, d, e, f, g, h, k, l, m, q, t, r, x, v, A, C, O, X;
            return Ca(function(pa) {
                var F = a.experimentState,
                    z = (m = (b = as(a.metadata)) == null ? void 0 : Bl(b)) != null ? m : "",
                    R = (q = (c = as(a.metadata)) == null ? void 0 : ml(c, 7, tk, void 0 === Zj ? 2 : 4)) != null ? q : void 0,
                    mb = (t = (d = as(a.metadata)) == null ? void 0 : zl(d, 9)) != null ? t : void 0,
                    hb = (e = as(a.metadata)) == null ? void 0 : Dl(e, 1),
                    Tc = (r = (f = as(a.metadata)) == null ? void 0 : (g = f.nf()) == null ? void 0 : g.Xa()) != null ? r : void 0,
                    Ma = (x = (h = as(a.metadata)) == null ? void 0 : Al(h, 8)) != null ? x : void 0,
                    Uc = As;
                var Tb = (k = as(a.metadata)) == null ? void 0 : ml(k, 5, uk, Zj === Zj ? 2 : 4);
                Uc = Uc(a, (v = Tb) != null ? v : void 0);
                Tb = As;
                var Na = (l = as(a.metadata)) == null ? void 0 : ml(l, 6, uk, Zj === Zj ? 2 : 4);
                C = {
                    experimentState: F,
                    escapedQueryId: z,
                    trafficTypes: R,
                    isProductSplitVpidLogsExperiment: mb,
                    clientsideModelFilename: hb,
                    geoTargetMessage: Tc,
                    deviceType: Ma,
                    productionFilterIds: Uc,
                    testFilterIds: Tb(a, (A = Na) != null ? A : void 0)
                };
                O = btoa(JSON.stringify(C));
                X = a.context.Xf[0];
                return sa(pa, ci(a.context.document, X, O), 0)
            })
        },
        As = function(a, b) {
            if (b !== void 0) return b.map(function(c) {
                return String(BigInt(c))
            })
        };
    ws.prototype.dispose = function() {};
    var Bs = Df("m202408140101".match(/^m\d{10}$/g) !== null ? "m202408140101" : "current"),
        Cs;
    a: {
        try {
            var Ds = new gg;
            Cs = new Ff(Ds, "doubleclickbygoogle.com-omid", void 0, Bs);
            break a
        } catch (a) {}
        Cs = void 0
    }
    var Es = Cs,
        Fs = {
            M: new xn(void 0, void 0, void 0, Bs),
            fa: Es
        };
    (function(a) {
        if (a && tg(a)) {
            var b = sg(a);
            if (b) {
                a.global.fetch("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fle-fetch-start2", {
                    method: "GET",
                    cache: "no-cache",
                    keepalive: !0,
                    mode: "no-cors"
                });
                try {
                    b("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fle-fetch-later2", {
                        method: "GET",
                        cache: "no-cache",
                        mode: "no-cors",
                        activateAfter: 96E4
                    })
                } catch (c) {
                    a.global.fetch("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fle-fetch-fallback2", {
                        method: "GET",
                        cache: "no-cache",
                        keepalive: !0,
                        mode: "no-cors"
                    })
                }
                a.Lf.subscribe(function() {
                    a.global.fetch("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fle-fetch-pagehide2", {
                        method: "GET",
                        cache: "no-cache",
                        keepalive: !0,
                        mode: "no-cors"
                    })
                })
            }
        }
    })(Fs.M);
    (function(a, b, c) {
        var d = new Dr("impression"),
            e = new Dr("begin to render"),
            f = new Dr("unmeasurable"),
            g = new Dr("viewable"),
            h = new Dr("reach vpid"),
            k = new Br(d, h, e, g, f),
            l = new fs,
            m = new ns(d.event);
        b = new js(l, c, d.event, e.event, f.event, g.event, b);
        h = new us(h.event);
        var q = new Er(a, k, l, m, b, h);
        q.start();
        return {
            dispose: function() {
                return void q.dispose()
            },
            colleagues: {
                jj: m,
                Gj: b,
                Dj: h
            }
        }
    })(Fs, 7);
}).call(this);