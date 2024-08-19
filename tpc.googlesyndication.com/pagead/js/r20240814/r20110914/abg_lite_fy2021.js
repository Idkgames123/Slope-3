(function() {
    'use strict';
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var m = this || self;

    function aa(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = m, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function ba(a) {
        return a
    };

    function ca(a) {
        m.setTimeout(() => {
            throw a;
        }, 0)
    };
    var ea = aa(610401301, !1),
        fa = aa(645172343, aa(1, !0));
    var n;
    const ha = m.navigator;
    n = ha ? ha.userAgentData || null : null;

    function ia(a) {
        return ea ? n ? n.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function q(a) {
        var b;
        a: {
            if (b = m.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function r() {
        return ea ? !!n && n.brands.length > 0 : !1
    }

    function ja() {
        return r() ? ia("Chromium") : (q("Chrome") || q("CriOS")) && !(r() ? 0 : q("Edge")) || q("Silk")
    };

    function ka(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };

    function la(a) {
        la[" "](a);
        return a
    }
    la[" "] = function() {};
    !q("Android") || ja();
    ja();
    q("Safari") && (ja() || (r() ? 0 : q("Coast")) || (r() ? 0 : q("Opera")) || (r() ? 0 : q("Edge")) || (r() ? ia("Microsoft Edge") : q("Edg/")) || r() && ia("Opera"));
    let ma;
    var t = Symbol(),
        na = Symbol();

    function oa(a, b) {
        b[t] = (a | 0) & -14591
    }

    function pa(a, b) {
        b[t] = (a | 34) & -14557
    };
    var u = {},
        qa = {};

    function ra(a) {
        return !(!a || typeof a !== "object" || a.g !== qa)
    }

    function sa(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function v(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[t] | 0) & 1 ? !0 : !1
    };

    function w(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    };
    let x;

    function y(a, b) {
        x = b;
        a = new a(b);
        x = void 0;
        return a
    };

    function ta(a, b) {
        return ua(b)
    }

    function ua(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (v(a)) return
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

    function va(a, b, c) {
        a = Array.prototype.slice.call(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) b[f] = c(e[f])
        }
        return a
    }

    function wa(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = v(a) ? void 0 : e && (a[t] | 0) & 2 ? a : xa(a, b, c, d !== void 0, e);
            else if (sa(a)) {
                const f = {};
                for (let g in a) f[g] = wa(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function xa(a, b, c, d, e) {
        const f = d || c ? a[t] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = wa(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function ya(a) {
        return a.v === u ? a.toJSON() : ua(a)
    };

    function za(a, b, c = pa) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[t] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[t] = (d | 34) & -12293, a) : xa(a, za, d & 4 ? pa : c, !0, !0)
            }
            a.v === u && (c = a.l, d = c[t], a = d & 2 ? a : y(a.constructor, Aa(c, d, !0)));
            return a
        }
    }

    function Aa(a, b, c) {
        const d = c || b & 2 ? pa : oa,
            e = !!(b & 32);
        a = va(a, b, f => za(f, e, d));
        a[t] = a[t] | 32 | (c ? 2 : 0);
        return a
    };

    function D(a, b) {
        a = a.l;
        return Ba(a, a[t], b)
    }

    function Ga(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Ba(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Ga(a, b, e, c) && na != null && (a = ma ? ? (ma = {}), b = a[na] || 0, b >= 4 || (a[na] = b + 1, a = Error(), a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {}), a.__closure__error__context__984382.severity = "incident", ca(a))), d) : Ga(a, b, e, c)
        }
    }

    function Ha(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !fa) {
            let g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[t] = g)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function Ia(a) {
        var b = Ja;
        a = a.l;
        let c = a[t];
        const d = Ba(a, c, 1, !1);
        if (d != null && typeof d === "object" && d.v === u) b = d;
        else if (Array.isArray(d)) {
            const e = d[t] | 0;
            let f = e;
            f === 0 && (f |= c & 32);
            f |= c & 2;
            f !== e && (d[t] = f);
            b = new b(d)
        } else b = void 0;
        b !== d && b != null && Ha(a, c, 1, b, !1);
        return b
    }

    function Ka(a) {
        let b = Ia(a);
        if (b == null) return b;
        a = a.l;
        let c = a[t];
        if (!(c & 2)) {
            var d = b;
            const e = d.l,
                f = e[t];
            d = f & 2 ? y(d.constructor, Aa(e, f, !1)) : d;
            d !== b && (b = d, Ha(a, c, 1, b, !1))
        }
        return b
    }

    function E(a, b) {
        a = D(a, b);
        return a == null || typeof a === "string" ? a : void 0
    }

    function I(a, b) {
        a = D(a, b);
        return (a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0) ? ? !1
    }

    function J(a, b, c) {
        if (c != null && typeof c !== "string") throw Error();
        a = a.l;
        let d = a[t];
        if (d & 2) throw Error();
        Ha(a, d, b, c)
    };
    let K;
    var L = class {
        constructor(a) {
            a: {
                a == null && (a = x);x = void 0;
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
                    if (d && (--d, sa(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[t] = b
            }
            this.l = a
        }
        toJSON() {
            return La(this)
        }
    };
    L.prototype.v = u;

    function La(a) {
        a = K ? a.l : xa(a.l, ya, void 0, void 0, !1); {
            var b = !K;
            let h = a.length;
            if (h) {
                var c = a[h - 1],
                    d = sa(c);
                d ? h-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var f = c;
                        var g = {};d = !1;
                        if (f)
                            for (var k in f) {
                                if (isNaN(+k)) {
                                    g[k] = f[k];
                                    continue
                                }
                                let p = f[k];
                                Array.isArray(p) && (v(p) || ra(p) && p.size === 0) && (p = null);
                                p == null && (d = !0);
                                p != null && (g[k] = p)
                            }
                        if (d) {
                            for (let p in g) break b;
                            g = null
                        } else g = f
                    }
                    f = g == null ? c != null : g !== c
                }
                for (; h > 0; h--) {
                    k = e[h - 1];
                    if (!(k == null || v(k) || ra(k) && k.size === 0)) break;
                    var l = !0
                }
                if (e !== a || f || l) {
                    if (!b) e = Array.prototype.slice.call(e,
                        0, h);
                    else if (l || f || g) e.length = h;
                    g && e.push(g)
                }
                l = e
            } else l = a
        }
        return l
    };
    var Ja = class extends L {};
    var Ma = function(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b[t] |= 32;
                b = y(a, b)
            }
            return b
        }
    }(class extends L {});
    var Na = class extends L {
        constructor() {
            super()
        }
    };

    function Oa(a = window) {
        return a
    };

    function Pa(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Qa = {
            passive: !0
        },
        Ra = Pa(function() {
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

    function Sa(a) {
        return a ? a.passive && Ra() ? a : a.capture || !1 : !1
    }

    function M(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Sa(d))
    };
    var Ta;
    var Ua = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g + ""
            }
        },
        Va = {};

    function N(a) {
        var b = document;
        return typeof a === "string" ? b.getElementById(a) : a
    }

    function Wa(a) {
        var b = document;
        b.getElementsByClassName ? a = b.getElementsByClassName(a)[0] : (b = document, a = b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : Xa(b, a)[0] || null);
        return a || null
    }

    function Xa(a, b) {
        var c, d;
        if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
        if (b && a.getElementsByClassName) {
            var e = a.getElementsByClassName(b);
            return e
        }
        e = a.getElementsByTagName("*");
        if (b) {
            var f = {};
            for (c = d = 0; a = e[c]; c++) {
                var g = a.className,
                    k;
                if (k = typeof g.split == "function") k = ka(g.split(/\s+/), b) >= 0;
                k && (f[d++] = a)
            }
            f.length = d;
            return f
        }
        return e
    }

    function Ya(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    var Za = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        $a = /#|$/;

    function ab(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function bb(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function cb(a, b, c = null, d = !1) {
        db(a, b, c, d)
    }

    function db(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = bb("IMG", a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const k = ka(g, e);
                    k >= 0 && Array.prototype.splice.call(g, k, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, Sa());
                e.removeEventListener && e.removeEventListener("error", f, Sa())
            };
            M(e, "load", f);
            M(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    let eb = 0;

    function fb(a) {
        return (a = gb(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function gb(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function hb() {
        if (!(Math.random() > .01)) {
            var a = gb(60, document.currentScript);
            a = `https://${a&&a.getAttribute("data-jc-rcd")==="true"?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${fb(60)}&sample=${.01}`;
            var b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : cb(b, a, void 0, !1)
        }
    };
    var ib = document,
        O = window;

    function nb(a) {
        return typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function ob(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : nb(a).match(/\S+/g) || [], b = ka(a, b) >= 0);
        return b
    }

    function P(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!ob(a, b)) {
            var c = nb(a);
            b = c + (c.length > 0 ? " " + b : b);
            typeof a.className == "string" ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        }
    };
    var pb = class {
        constructor(a) {
            var b = La(a);
            this.serializedAttributionData = b;
            b = a.l;
            this.g = y(a.constructor, Aa(b, b[t], !1));
            this.isMutableImpression = Ia(this.g) !== void 0 && !!I(Ka(this.g), 33);
            E(this.g, 30);
            this.W = !!I(this.g, 11);
            this.hasUserFeedbackData = !!this.g && Ia(this.g) !== void 0;
            this.P = !!I(this.g, 4);
            this.T = !!I(this.g, 6);
            this.O = !!I(this.g, 13);
            w(D(this.g, 8));
            this.creativeIndexSuffix = (w(D(this.g, 8)) ? ? 0) > 1 ? (w(D(this.g, 7)) ? ? 0).toString() : "";
            E(this.g, 34) != null && (this.creativeIndexSuffix = (E(this.g, 34) ? ? "") + "_" +
                this.creativeIndexSuffix);
            this.X = !!I(this.g, 17);
            this.V = !!I(this.g, 18);
            this.N = !!I(this.g, 14);
            this.F = !!I(this.g, 15);
            this.Y = !!I(this.g, 31);
            this.U = I(this.g, 9) == 1;
            this.openAttributionInline = I(this.g, 10) == 1;
            this.isMobileDevice = !!I(this.g, 12);
            this.u = null;
            this.S = (a = ib.querySelector("[data-slide]")) ? a.getAttribute("data-slide") === "true" : !1;
            (this.H = (w(D(this.g, 8)) ? ? 0) > 1) && O.goog_multislot_cache === void 0 && (O.goog_multislot_cache = {});
            if (this.H && !this.S) {
                if (a = O.goog_multislot_cache.hd, a === void 0) {
                    a = !1;
                    if (b = ib.querySelector("[data-dim]"))
                        if (b =
                            b.getBoundingClientRect(), b.right - b.left >= 150 && b.bottom - b.top >= 150) a = !1;
                        else {
                            var c = document.body.getBoundingClientRect();
                            (Math.abs(c.left - b.left) <= 1 && Math.abs(c.right - b.right) <= 1 ? b.bottom - b.top : b.right - b.left) < 150 && (a = !0)
                        }
                    else a = !1;
                    window.goog_multislot_cache.hd = a
                }
            } else a = !1;
            this.G = a;
            this.B = N("abgcp" + this.creativeIndexSuffix);
            this.A = N("abgc" + this.creativeIndexSuffix);
            this.h = N("abgs" + this.creativeIndexSuffix);
            N("abgl" + this.creativeIndexSuffix);
            this.s = N("abgb" + this.creativeIndexSuffix);
            this.D = N("abgac" +
                this.creativeIndexSuffix);
            N("mute_panel" + this.creativeIndexSuffix);
            this.C = Wa("goog_delegate_attribution" + this.creativeIndexSuffix);
            this.isDelegateAttributionActive = !!this.C && !!this.N && !Wa("goog_delegate_disabled") && !this.F;
            if (this.h) a: for (a = this.h, b = a.childNodes, c = 0; c < b.length; c++) {
                const d = b.item(c);
                if (typeof d.tagName != "undefined" && d.tagName.toUpperCase() == "A") {
                    a = d;
                    break a
                }
            } else a = null;
            this.m = a;
            this.j = this.isDelegateAttributionActive ? this.C : N("cbb" + this.creativeIndexSuffix);
            this.R = this.G ? this.creativeIndexSuffix ===
                "0" : !0;
            this.enableDelegateDismissableMenu = !!this.j && ob(this.j, "goog_dismissable_menu");
            this.o = null;
            this.I = 0;
            this.i = this.isDelegateAttributionActive ? this.C : this.T && this.B ? this.B : this.A;
            this.autoExpandOnLoad = !!I(this.g, 19);
            this.adbadgeEnabled = !!I(this.g, 24);
            this.enableNativeJakeUi = !!I(this.g, 27);
            E(this.g, 33)
        }
    };
    var qb = class {
        constructor(a, b, c) {
            if (!a) throw Error("bad conv util ctor args");
            this.g = a;
            this.h = c
        }
    };
    var Q = (a, b) => {
        a && ab(b, (c, d) => {
            a.style[d] = c
        })
    };
    var rb = class {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const sb = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var tb = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        ub = class {
            constructor(a, b) {
                this.url = a;
                this.L = !!b;
                this.depth = null
            }
        };
    let vb = null;

    function wb() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function xb() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    var yb = class {
        constructor(a, b) {
            var c = xb() || wb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const S = m.performance,
        zb = !!(S && S.mark && S.measure && S.clearMarks),
        T = Pa(() => {
            var a;
            if (a = zb) {
                var b;
                if (vb === null) {
                    vb = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (vb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = vb;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function Ab(a) {
        a && S && T() && (S.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), S.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Bb {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = T() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new yb(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            S && T() && S.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (xb() || wb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                S && T() && S.mark(b);
                !this.g || this.h.length >
                    2048 || this.h.push(a)
            }
        }
    };

    function Cb(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Db(a, b, c, d, e) {
        const f = [];
        ab(a, function(g, k) {
            (g = Eb(g, b, c, d, e)) && f.push(k + "=" + g)
        });
        return f.join(b)
    }

    function Eb(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Eb(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(Db(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Fb(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Gb(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Fb(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                k = a.h[g];
            for (let l = 0; l < k.length; l++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let h = Db(k[l], a.i, ",$");
                if (h) {
                    h = e + h;
                    if (d >= h.length) {
                        d -= h.length;
                        c += h;
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
    class Hb {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function Ib(a) {
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

    function Jb(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                Ab(e), c = a.m(b, new rb(f, {
                    message: Ib(f)
                }), void 0, void 0)
            } catch (g) {
                a.j(217, g)
            }
            if (c) window.console ? .error ? .(f);
            else throw f;
        }
        return d
    }

    function Kb(a, b) {
        var c = U;
        return (...d) => Jb(c, a, () => b.apply(void 0, d))
    }
    var Nb = class {
        constructor(a = null) {
            this.pinger = Lb;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.j
        }
        j(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const z = new Hb;
                var g = z;
                g.g.push(1);
                g.h[1] = Cb("context", a);
                b.error && b.meta && b.id || (b = new rb(b, {
                    message: Ib(b)
                }));
                if (b.msg) {
                    g = z;
                    var k = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = Cb("msg", k)
                }
                var l = b.meta || {};
                b = l;
                if (this.h) try {
                    this.h(b)
                } catch (A) {}
                if (d) try {
                    d(b)
                } catch (A) {}
                d = z;
                l = [l];
                d.g.push(3);
                d.h[3] = l;
                d = m;
                l = [];
                let da;
                b = null;
                do {
                    var h = d;
                    try {
                        var p;
                        if (p = !!h && h.location.href != null) b: {
                            try {
                                la(h.foo);
                                p = !0;
                                break b
                            } catch (A) {}
                            p = !1
                        }
                        var F = p
                    } catch {
                        F = !1
                    }
                    F ? (da = h.location.href, b = h.document && h.document.referrer || null) : (da = b, b = null);
                    l.push(new ub(da || ""));
                    try {
                        d = h.parent
                    } catch (A) {
                        d = null
                    }
                } while (d && h != d);
                for (let A = 0, jb = l.length - 1; A <= jb; ++A) l[A].depth = jb - A;
                h = m;
                if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == l.length - 1)
                    for (F = 1; F < l.length; ++F) {
                        var G = l[F];
                        G.url || (G.url = h.location.ancestorOrigins[F - 1] || "", G.L = !0)
                    }
                var B = l;
                let Ca = new ub(m.location.href, !1);
                h = null;
                const Da = B.length - 1;
                for (G = Da; G >= 0; --G) {
                    var C = B[G];
                    !h && sb.test(C.url) && (h = C);
                    if (C.url && !C.L) {
                        Ca = C;
                        break
                    }
                }
                C = null;
                const Wb = B.length && B[Da].url;
                Ca.depth != 0 && Wb && (C = B[Da]);
                f = new tb(Ca, C);
                if (f.h) {
                    B = z;
                    var H = f.h.url || "";
                    B.g.push(4);
                    B.h[4] = Cb("top", H)
                }
                var Ea = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var Fa = f.g.url.match(Za),
                        R = Fa[1],
                        kb = Fa[3],
                        lb = Fa[4];
                    H = "";
                    R && (H += R + ":");
                    kb && (H += "//", H += kb, lb && (H += ":" + lb));
                    var mb = H
                } else mb = "";
                R = z;
                Ea = [Ea, {
                    url: mb
                }];
                R.g.push(5);
                R.h[5] = Ea;
                Mb(this.pinger, e, z, this.i, c)
            } catch (z) {
                try {
                    Mb(this.pinger, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ib(z),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (da) {}
            }
            return !0
        }
    };

    function Mb(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Hb ? f = c : (f = new Hb, ab(c, (k, l) => {
                var h = f;
                const p = h.j++;
                k = Cb(l, k);
                h.g.push(p);
                h.h[p] = k
            }));
            const g = Gb(f, "/pagead/gen_204?id=" + b + "&");
            g && cb(m, g)
        } catch (f) {}
    }

    function Ob() {
        var a = Lb,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Pb {
        constructor() {
            this.g = Math.random()
        }
    };
    let Lb, U;
    const V = new Bb;
    var Qb = () => {
        window.google_measure_js_timing || (V.g = !1, V.h != V.i.google_js_reporting_queue && (T() && Array.prototype.forEach.call(V.h, Ab, void 0), V.h.length = 0))
    };
    (a => {
        Lb = a ? ? new Pb;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Ob();
        U = new Nb(V);
        U.h = b => {
            const c = eb;
            c !== 0 && (b.jc = String(c), b.shv = fb(c))
        };
        U.i = !0;
        window.document.readyState == "complete" ? Qb() : V.g && M(window, "load", () => {
            Qb()
        })
    })();
    var W = (a, b) => Kb(a, b);

    function Rb(a) {
        if (a.g.m && a.g.V) {
            const b = Ka(a.g.g);
            b && E(b, 5) != null && E(b, 6) != null && (a.i = new qb(E(b, 5) ? ? "", E(b, 6) ? ? "", E(b, 19) ? ? ""));
            M(a.g.m, "click", W(452, () => {
                if (!a.j && (a.j = !0, a.i)) {
                    var c = a.i;
                    var d = c.g;
                    var e = d.search($a),
                        f;
                    b: {
                        for (f = 0;
                            (f = d.indexOf("ad_signals", f)) >= 0 && f < e;) {
                            var g = d.charCodeAt(f - 1);
                            if (g == 38 || g == 63)
                                if (g = d.charCodeAt(f + 10), !g || g == 61 || g == 38 || g == 35) break b;
                            f += 11
                        }
                        f = -1
                    }
                    if (f < 0) d = null;
                    else {
                        g = d.indexOf("&", f);
                        if (g < 0 || g > e) g = e;
                        d = decodeURIComponent(d.slice(f + 11, g !== -1 ? g : 0).replace(/\+/g, " "))
                    }
                    if (d) {
                        if (d = {
                                J: d,
                                label: "closebutton_whythisad_click",
                                M: "1",
                                K: ""
                            }, c = new Na, d != null && (d.J != null && J(c, 1, d.J), d.aa != null && J(c, 3, d.aa), d.label != null && J(c, 6, d.label), d.M != null && J(c, 7, d.M), d.K != null && J(c, 8, d.K), d.Z != null && J(c, 11, d.Z)), (d = Oa(m).fence) != null) {
                            e = d.reportEvent;
                            try {
                                K = !0;
                                var k = JSON.stringify(La(c), ta)
                            } finally {
                                K = !1
                            }
                            e.call(d, {
                                eventType: "interaction",
                                eventData: k,
                                destination: ["buyer"]
                            })
                        }
                    } else k = c.g + "&label=closebutton_whythisad_click", k += "&label_instance=1", c.h && (k += "&cid=" + c.h), cb(window, k)
                }
            }))
        }
    }

    function Sb(a) {
        if (a.g.W) M(a.g.i, "click", W(365, b => {
            const c = O.goog_interstitial_display;
            c && (c(b), b && (b.stopPropagation(), b.preventDefault()))
        }));
        else if (a.g.isMutableImpression && a.g.isMobileDevice) M(a.g.i, "click", () => a.h());
        else if (a.g.isMutableImpression && !a.g.isMobileDevice && (a.g.j && (M(a.g.j, "click", () => a.h()), M(a.g.j, "keydown", b => {
                b.code !== "Enter" && b.code !== "Space" || a.h()
            })), a.g.Y && a.g.h && M(a.g.h, "click", () => a.h())), a.g.P) Tb(a);
        else {
            M(a.g.i, "mouseover", W(367, () => Tb(a)));
            M(a.g.i, "mouseout", W(369,
                () => Ub(a, 500)));
            M(a.g.i, "touchstart", W(368, () => Tb(a)), Qa);
            const b = W(370, () => Ub(a, 4E3));
            M(a.g.i, "mouseup", b);
            M(a.g.i, "touchend", b);
            M(a.g.i, "touchcancel", b);
            a.g.m && M(a.g.m, "click", W(371, c => a.preventDefault(c)))
        }
    }

    function Tb(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.h && a.g.h.style.display == "block" || (a.g.I = Date.now(), a.g.s && a.g.h && (a.g.s.style.display = "none", a.g.h.style.display = "block"))
    }

    function Ub(a, b) {
        window.clearTimeout(a.g.o);
        a.g.o = window.setTimeout(() => Vb(a), b)
    }

    function Xb(a) {
        const b = a.g.D;
        b !== void 0 && (b.style.display = "block", a.g.enableNativeJakeUi && window.requestAnimationFrame(() => {
            P(b, "abgacfo")
        }))
    }

    function Vb(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.s && a.g.h && (a.g.s.style.display = "block", a.g.h.style.display = "none")
    }
    class Yb {
        constructor(a, b) {
            this.g = a;
            this.h = b;
            this.g.X || (this.j = !1, this.i = null, !this.g.G || this.g.adbadgeEnabled || this.g.R ? Rb(this) : (a = {
                display: "none"
            }, b = {
                width: "15px",
                height: "15px"
            }, this.g.isMobileDevice ? (Q(this.g.s, a), Q(this.g.h, a), Q(this.g.B, b), Q(this.g.A, b)) : Q(this.g.A, a)), Sb(this), this.g.enableNativeJakeUi && P(this.g.D, "abgnac"), this.g.isDelegateAttributionActive ? (P(document.body, "goog_delegate_active"), P(document.body, "jaa")) : (!this.g.isMutableImpression && this.g.j && Ya(this.g.j), setTimeout(() => {
                P(document.body,
                    "jar")
            }, this.g.O ? 750 : 100)), this.g.F && P(document.body, "goog_delegate_disabled"), this.g.autoExpandOnLoad && O.addEventListener("load", () => this.h()))
        }
        preventDefault(a) {
            if (this.g.h && this.g.h.style.display == "block" && Date.now() - this.g.I < 500) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            else if (this.g.openAttributionInline) {
                var b = this.g.m.getAttribute("href");
                window.adSlot ? window.adSlot.openAttribution(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openAttribution && (window.openAttribution(b),
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            } else this.g.U && (b = this.g.m.getAttribute("href"), window.adSlot ? window.adSlot.openSystemBrowser(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openSystemBrowser && (window.openSystemBrowser(b), a.preventDefault ? a.preventDefault() : a.returnValue = !1))
        }
    };

    function Zb(a) {
        if (!a.g && (a.g = !0, O.goog_delegate_deferred_token = void 0, a.h)) {
            var b = a.i;
            a = Ma(JSON.stringify(a.h));
            if (!a) throw Error("bad attrdata");
            a = new pb(a);
            new b(a)
        }
    }
    class $b {
        constructor(a) {
            var b = ac;
            if (!b) throw Error("bad ctor");
            this.i = b;
            this.h = a;
            this.g = !1;
            Wa("goog_delegate_deferred") ? O.goog_delegate_deferred_token !== void 0 ? Zb(this) : (a = () => {
                Zb(this)
            }, O.goog_delegate_deferred_token = a, setTimeout(a, 5E3)) : Zb(this)
        }
    };
    var bc = (a = []) => {
        m.google_logging_queue || (m.google_logging_queue = []);
        m.google_logging_queue.push([11, a])
    };
    class cc {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function dc() {
        const {
            promise: a,
            resolve: b
        } = new cc;
        return {
            promise: a,
            resolve: b
        }
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function ec(a, b = () => {}) {
        a.google_llp || (a.google_llp = {});
        a = a.google_llp;
        let c = a[5];
        if (c) return c;
        c = dc();
        a[5] = c;
        b();
        return c
    }

    function fc(a, b) {
        return ec(a, () => {
            var c = a.document;
            const d = bb("SCRIPT", c);
            d.src = b instanceof Ua && b.constructor === Ua ? b.g : "type_error:TrustedResourceUrl";
            if (!(void 0) ? .ba) {
                var e;
                (e = (e = (d.ownerDocument && d.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? e.nonce || e.getAttribute("nonce") || "" : "") && d.setAttribute("nonce", e)
            }(c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
        }).promise
    };

    function gc(a) {
        a = a === null ? "null" : a === void 0 ? "undefined" : a;
        if (Ta === void 0) {
            var b = null;
            var c = m.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ba,
                        createScript: ba,
                        createScriptURL: ba
                    })
                } catch (d) {
                    m.console && m.console.error(d.message)
                }
                Ta = b
            } else Ta = b
        }
        a = (b = Ta) ? b.createScriptURL(a) : a;
        return new Ua(a, Va)
    };

    function hc(a) {
        bc([a]);
        new $b(a)
    }

    function ic(a) {
        a.g.u ? a.g.u.expandAttributionCard() : (Jb(U, 373, () => {
            Vb(a.h);
            Xb(a.h)
        }), fc(window, gc(`https://${"pagead2.googlesyndication.com"}${"/pagead/js/"+(E(a.g.g,33)??"")+"/abg_survey.js"}`)).then(b => {
            b.createAttributionCard(a.g);
            a.g.u = b;
            b.expandAttributionCard()
        }), hb())
    }
    var ac = class {
        constructor(a) {
            this.g = a;
            this.h = new Yb(this.g, W(359, () => ic(this)))
        }
    };
    eb = 60;
    const jc = gb(60, document.currentScript);
    if (jc == null) throw Error("JSC not found 60");
    const kc = {},
        lc = jc.attributes;
    for (let a = lc.length - 1; a >= 0; a--) {
        const b = lc[a].name;
        b.indexOf("data-jcp-") === 0 && (kc[b.substring(9)] = lc[a].value)
    }
    if (kc["attribution-data"]) hc(JSON.parse(kc["attribution-data"]));
    else {
        var X = ["buildAttribution"],
            Y = m;
        X[0] in Y || typeof Y.execScript == "undefined" || Y.execScript("var " + X[0]);
        for (var Z; X.length && (Z = X.shift());) X.length || hc === void 0 ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = hc
    };
}).call(this);