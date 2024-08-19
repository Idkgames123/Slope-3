(function(sttc) {
    'use strict';
    var aa, ca = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        ha = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        ja = {},
        ka = {};

    function ma(a, b, c) {
        if (!c || a != null) {
            c = ka[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function na(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in ja ? f = ja : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ha && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? ca(ja, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (ka[d] === void 0 && (a = Math.random() * 1E9 >>> 0, ka[d] = ha ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ka[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    var pa = typeof Object.create == "function" ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ra;
    if (ha && typeof Object.setPrototypeOf == "function") ra = Object.setPrototypeOf;
    else {
        var sa;
        a: {
            var ta = {
                    a: !0
                },
                ua = {};
            try {
                ua.__proto__ = ta;
                sa = ua.a;
                break a
            } catch (a) {}
            sa = !1
        }
        ra = sa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var va = ra;

    function wa(a, b) {
        a.prototype = pa(b.prototype);
        a.prototype.constructor = a;
        if (va) va(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Tj = b.prototype
    }
    na("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    na("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    na("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        wa(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    na("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new ja.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var q = this || self;

    function ya(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = q, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    }

    function Aa(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function Ba(a) {
        var b = Aa(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }

    function Da(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function Ea(a) {
        return Object.prototype.hasOwnProperty.call(a, Fa) && a[Fa] || (a[Fa] = ++Ga)
    }
    var Fa = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        Ga = 0;

    function Ha(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ia(a, b, c) {
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

    function Ja(a, b, c) {
        Ja = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ha : Ia;
        return Ja.apply(null, arguments)
    }

    function Ka(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function La(a, b, c) {
        a = a.split(".");
        c = c || q;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ma(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Tj = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ho = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Oa(a) {
        return a
    };
    var Pa = {
        cn: 0,
        bn: 1,
        Zm: 2
    };

    function Qa(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Qa);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    Ma(Qa, Error);
    Qa.prototype.name = "CustomError";
    var Ra;

    function Sa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Qa.call(this, c + a[d])
    }
    Ma(Sa, Qa);
    Sa.prototype.name = "AssertionError";

    function Ta(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ua(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Va(a, b) {
        var c = a.length;
        const d = typeof a === "string" ? a.split("") : a;
        for (--c; c >= 0; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Wa(a, b) {
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

    function Xa(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ya(a, b, c) {
        let d = c;
        Ua(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function $a(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function ab(a, b) {
        return Ta(a, b) >= 0
    }

    function cb(a, b) {
        b = Ta(a, b);
        let c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function db(a, b) {
        let c = 0;
        Va(a, function(d, e) {
            b.call(void 0, d, e, a) && Array.prototype.splice.call(a, e, 1).length == 1 && c++
        })
    }

    function eb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function hb(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function ib(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (Ba(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function jb(a, b, c) {
        return arguments.length <= 2 ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function kb(a, b, c) {
        c = c || lb;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            h > 0 ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function mb(a, b) {
        if (!Ba(a) || !Ba(b) || a.length != b.length) return !1;
        const c = a.length,
            d = nb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function lb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function nb(a, b) {
        return a === b
    }

    function pb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = pb.apply(null, jb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function qb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; c > 0; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var rb = {
        gk: "google_adtest",
        kk: "google_ad_client",
        uk: "google_ad_intent_query",
        tk: "google_ad_intent_qetid",
        sk: "google_ad_intent_eids",
        lk: "google_ad_format",
        nk: "google_ad_height",
        Fk: "google_ad_width",
        vk: "google_ad_layout",
        wk: "google_ad_layout_key",
        xk: "google_ad_output",
        yk: "google_ad_region",
        Bk: "google_ad_slot",
        Dk: "google_ad_type",
        Ek: "google_ad_url",
        Cl: "google_gl",
        Rl: "google_enable_ose",
        bm: "google_full_width_responsive",
        fn: "google_rl_filtering",
        en: "google_rl_mode",
        gn: "google_rt",
        dn: "google_rl_dest_url",
        Im: "google_max_radlink_len",
        Nm: "google_num_radlinks",
        Om: "google_num_radlinks_per_unit",
        jk: "google_ad_channel",
        Hm: "google_max_num_ads",
        Jm: "google_max_responsive_height",
        jl: "google_color_border",
        Ql: "google_enable_content_recommendations",
        zl: "google_content_recommendation_ui_type",
        yl: "google_source_type",
        xl: "google_content_recommendation_rows_num",
        wl: "google_content_recommendation_columns_num",
        vl: "google_content_recommendation_ad_positions",
        Al: "google_content_recommendation_use_square_imgs",
        ll: "google_color_link",
        kl: "google_color_line",
        ql: "google_color_url",
        hk: "google_ad_block",
        Ak: "google_ad_section",
        ik: "google_ad_callback",
        fl: "google_captcha_token",
        ml: "google_color_text",
        Rk: "google_alternate_ad_url",
        rk: "google_ad_host_tier_id",
        gl: "google_city",
        pk: "google_ad_host",
        qk: "google_ad_host_channel",
        Sk: "google_alternate_color",
        il: "google_color_bg",
        Sl: "google_encoding",
        Zl: "google_font_face",
        dm: "google_hints",
        tm: "google_image_size",
        Km: "google_mtl",
        Ln: "google_cpm",
        ul: "google_contents",
        Lm: "google_native_settings_key",
        Bl: "google_country",
        Dn: "google_targeting",
        am: "google_font_size",
        Hl: "google_disable_video_autoplay",
        Zn: "google_video_product_type",
        Yn: "google_video_doc_id",
        Xn: "google_cust_gender",
        xn: "google_cust_lh",
        wn: "google_cust_l",
        Kn: "google_tfs",
        zm: "google_kw",
        An: "google_tag_for_child_directed_treatment",
        Bn: "google_tag_for_under_age_of_consent",
        jn: "google_region",
        El: "google_cust_criteria",
        zk: "google_safe",
        Dl: "google_ctr_threshold",
        kn: "google_resizing_allowed",
        mn: "google_resizing_width",
        ln: "google_resizing_height",
        Wn: "google_cust_age",
        Cm: "google_language",
        Am: "google_kw_type",
        Wm: "google_pucrd",
        Um: "google_page_url",
        Cn: "google_tag_partner",
        rn: "google_restrict_data_processing",
        ck: "google_adbreak_test",
        mk: "google_ad_frequency_hint",
        ek: "google_admob_interstitial_slot",
        fk: "google_admob_rewarded_slot",
        dk: "google_admob_ads_only",
        Ck: "google_ad_start_delay_hint",
        Gm: "google_max_ad_content_rating",
        Ym: "google_ad_public_floor",
        Xm: "google_ad_private_floor",
        Vn: "google_traffic_source",
        Rm: "google_overlays",
        Vm: "google_privacy_treatments",
        yn: "google_special_category_data",
        ao: "google_wrap_fullscreen_ad"
    };

    function sb(a, b) {
        this.g = a === tb && b || "";
        this.i = ub
    }
    sb.prototype.toString = function() {
        return this.g
    };

    function vb(a) {
        return a instanceof sb && a.constructor === sb && a.i === ub ? a.g : "type_error:Const"
    }
    var ub = {},
        tb = {};

    function wb() {
        return !1
    }

    function xb() {
        return !0
    }

    function yb(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function zb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ab(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Bb(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Cb(a, b) {
        let c = 0;
        return function(d) {
            q.clearTimeout(c);
            const e = arguments;
            c = q.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Db(a, b) {
        function c() {
            e = q.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var Eb = {
            passive: !0
        },
        Fb = Ab(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                q.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Gb(a) {
        return a ? a.passive && Fb() ? a : a.capture || !1 : !1
    }

    function Hb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Gb(d)), !0) : !1
    }

    function Ib(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Gb(d)), !0) : !1
    };

    function Jb(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Kb(a) {
        var b = Lb;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Mb(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Nb(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Ob = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Pb(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Ob.length; f++) c = Ob[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Qb = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };

    function Rb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Sb(a) {
        if (!Tb.test(a)) return a;
        a.indexOf("&") != -1 && (a = a.replace(Ub, "&amp;"));
        a.indexOf("<") != -1 && (a = a.replace(Vb, "&lt;"));
        a.indexOf(">") != -1 && (a = a.replace(Wb, "&gt;"));
        a.indexOf('"') != -1 && (a = a.replace(Xb, "&quot;"));
        a.indexOf("'") != -1 && (a = a.replace(Yb, "&#39;"));
        a.indexOf("\x00") != -1 && (a = a.replace(Zb, "&#0;"));
        return a
    }
    var Ub = /&/g,
        Vb = /</g,
        Wb = />/g,
        Xb = /"/g,
        Yb = /'/g,
        Zb = /\x00/g,
        Tb = /[\x00&<>"']/;

    function $b(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };
    var ac;

    function bc() {
        if (ac === void 0) {
            var a = null,
                b = q.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Oa,
                        createScript: Oa,
                        createScriptURL: Oa
                    })
                } catch (c) {
                    q.console && q.console.error(c.message)
                }
                ac = a
            } else ac = a
        }
        return ac
    };
    var cc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function dc(a) {
        return a instanceof cc && a.constructor === cc ? a.g : "type_error:TrustedResourceUrl"
    }

    function ec(a, b) {
        var c = vb(a);
        if (!fc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(gc, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof sb ? vb(d) : encodeURIComponent(String(d))
        });
        return hc(a)
    }
    var gc = /%{(\w+)}/g,
        fc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        ic = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;

    function jc(a, b) {
        a = ec(new sb(tb, "https://fundingchoicesmessages.google.com/i/%{id}"), a);
        a = ic.exec(dc(a).toString());
        const c = a[3] || "";
        return hc(a[1] + kc("?", a[2] || "", b) + kc("#", c))
    }
    var lc = {};

    function hc(a) {
        const b = bc();
        a = b ? b.createScriptURL(a) : a;
        return new cc(a, lc)
    }

    function kc(a, b, c) {
        if (c == null) return b;
        if (typeof c === "string") return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    g != null && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var mc = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        nc = new mc("about:invalid#zClosurez");

    function oc(a) {
        if (a instanceof mc) return a.g;
        throw Error("");
    };
    class pc {
        constructor(a) {
            this.gj = a
        }
    }

    function qc(a) {
        return new pc(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const rc = [qc("data"), qc("http"), qc("https"), qc("mailto"), qc("ftp"), new pc(a => /^[^:]*([/?#]|$)/.test(a))];

    function sc(a, b = rc) {
        if (a instanceof mc) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof pc && d.gj(a)) return new mc(a)
        }
    }

    function tc(a) {
        return sc(a, rc) || nc
    }
    var uc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function vc(a) {
        if (uc.test(a)) return a
    }

    function wc(a) {
        return a instanceof mc ? oc(a) : vc(a)
    };
    var xc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function yc(a) {
        if (a instanceof xc) return a.g;
        throw Error("");
    };
    var zc = new xc("");

    function Ac(a) {
        if (a instanceof mc) return 'url("' + a.toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof sb) a = vb(a);
        else {
            a = String(a);
            var b = a.replace(Bc, "$1").replace(Bc, "$1").replace(Cc, "url");
            if (Dc.test(b)) {
                if (b = !Ec.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        e == "'" && c ? b = !b : e == '"' && b && (c = !c)
                    }
                    b = b && c && Fc(a)
                }
                a = b ? Gc(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Sa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Fc(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if (e == "]") {
                if (b) return !1;
                b = !0
            } else if (e == "[") {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const Dc = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        Cc = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        Bc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        Ec = /\/\*/;

    function Gc(a) {
        return a.replace(Cc, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
                f = h;
                return k
            });
            b = tc(d).toString();
            return c + f + b + f + e
        })
    };
    const Hc = {};

    function Ic(a) {
        return a instanceof Jc && a.constructor === Jc ? a.g : "type_error:SafeStyleSheet"
    }
    class Jc {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };
    const Kc = {};

    function Lc(a) {
        return a instanceof Mc && a.constructor === Mc ? a.g : "type_error:SafeHtml"
    }

    function Nc(a) {
        const b = bc();
        a = b ? b.createHTML(a) : a;
        return new Mc(a, Kc)
    }

    function Oc(a) {
        var b = Pc;
        b = b instanceof Mc ? b : Nc(Sb(String(b)));
        const c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = e instanceof Mc ? e : Nc(Sb(String(e))), c.push(Lc(e).toString()))
            };
        a.forEach(d);
        return Nc(c.join(Lc(b).toString()))
    }

    function Qc(a) {
        return Oc(Array.prototype.slice.call(arguments))
    }
    class Mc {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    const Rc = /^[a-zA-Z0-9-]+$/,
        Sc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Tc = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var Pc = new Mc(q.trustedTypes && q.trustedTypes.emptyHTML || "", Kc);
    var Uc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g
        }
    };

    function Vc(a) {
        return new Uc(a[0].toLowerCase())
    };

    function Wc(a) {
        return new Jc(a[0], Hc)
    };

    function Xc(a) {
        var b = {};
        if (a instanceof Mc) return a;
        a = Yc(String(a));
        b.so && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.ro && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.to && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return Nc(a)
    }

    function Yc(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function Zc(a) {
        const b = Xc("");
        return Nc(a.map(c => Lc(Xc(c))).join(Lc(b).toString()))
    }
    const $c = /^[a-z][a-z\d-]*$/i,
        ad = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" ");
    var bd = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" ");
    const cd = ["action", "formaction", "href"];

    function dd(a, b) {
        if (!$c.test("body")) throw Error("");
        if (ad.indexOf("BODY") !== -1) throw Error("");
        let c = "<body";
        a && (c += ed(a));
        Array.isArray(b) || (b = b === void 0 ? [] : [b]);
        bd.indexOf("BODY") !== -1 ? c += ">" : (a = Zc(b.map(d => d instanceof Mc ? d : Xc(String(d)))), c += ">" + a.toString() + "</body>");
        return Nc(c)
    }

    function ed(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!$c.test(d)) throw Error("");
            if (e !== void 0 && e !== null) {
                if (/^on/i.test(d)) throw Error("");
                cd.indexOf(d.toLowerCase()) !== -1 && (e = e instanceof mc ? e.toString() : vc(String(e)) || "about:invalid#zClosurez");
                e = `${d}="${Xc(String(e))}"`;
                b += " " + e
            }
        }
        return b
    };

    function fd(a) {
        const b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            params: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    }

    function gd(a, ...b) {
        if (b.length === 0) return hc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return hc(c)
    }

    function hd(a, b) {
        a = fd(dc(a).toString());
        let c = a.params,
            d = c.length ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                h !== null && h !== void 0 && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return hc(a.path + c + a.hash)
    };

    function id(a, ...b) {
        let c = a[0];
        for (let d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c)) throw Error("Forbidden characters in style string: " + c);
        return new xc(c)
    };
    var jd = Ab(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Lc(Pc);
        return !b.parentElement
    });

    function kd(a, b) {
        if (jd())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Lc(b)
    }
    var ld = /^[\w+/_-]+[=]{0,2}$/;

    function md(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function nd(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function od(a) {
        return nd.apply(null, arguments) / arguments.length
    };

    function pd(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    }
    pd.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    pd.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    pd.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    pd.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };

    function qd(a, b) {
        this.width = a;
        this.height = b
    }

    function rd(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    aa = qd.prototype;
    aa.aspectRatio = function() {
        return this.width / this.height
    };
    aa.isEmpty = function() {
        return !(this.width * this.height)
    };
    aa.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    aa.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    aa.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    aa.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function sd(a) {
        var b = tc("#");
        b = wc(b);
        b !== void 0 && (a.href = b)
    };

    function td(a, b, c) {
        var d = [Vc `width`, Vc `height`];
        if (d.length === 0) throw Error("");
        d = d.map(f => {
            if (f instanceof Uc) f = f.g;
            else throw Error("");
            return f
        });
        const e = b.toLowerCase();
        if (d.every(f => e.indexOf(f) !== 0)) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    };

    function ud(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };

    function vd(a, b) {
        a.src = dc(b);
        (void 0) ? .qo || (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function wd(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };

    function xd(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : q.document.createElement("div");
        return a.replace(yd, function(e, f) {
            var g = c[e];
            if (g) return g;
            f.charAt(0) == "#" && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            if (!g) {
                g = Nc(e + " ");
                if (d.nodeType === 1 && (f = d.tagName, f === "SCRIPT" || f === "STYLE")) throw Error("");
                d.innerHTML = Lc(g);
                g = d.firstChild.nodeValue.slice(0, -1)
            }
            return c[e] = g
        })
    }
    var yd = /&([^;\s<&]+);?/g;

    function zd(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Ad(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Bd(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var Cd = ya(610401301, !1),
        Dd = ya(645172343, ya(1, !0));

    function Ed() {
        var a = q.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Fd;
    const Gd = q.navigator;
    Fd = Gd ? Gd.userAgentData || null : null;

    function Hd(a) {
        return Cd ? Fd ? Fd.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function t(a) {
        return Ed().indexOf(a) != -1
    };

    function Id() {
        return Cd ? !!Fd && Fd.brands.length > 0 : !1
    }

    function Jd() {
        return Id() ? !1 : t("Opera")
    }

    function Kd() {
        return Id() ? !1 : t("Trident") || t("MSIE")
    }

    function Ld() {
        return t("Firefox") || t("FxiOS")
    }

    function Md() {
        return t("Safari") && !(Pd() || (Id() ? 0 : t("Coast")) || Jd() || (Id() ? 0 : t("Edge")) || (Id() ? Hd("Microsoft Edge") : t("Edg/")) || (Id() ? Hd("Opera") : t("OPR")) || Ld() || t("Silk") || t("Android"))
    }

    function Pd() {
        return Id() ? Hd("Chromium") : (t("Chrome") || t("CriOS")) && !(Id() ? 0 : t("Edge")) || t("Silk")
    }

    function Qd() {
        return t("Android") && !(Pd() || Ld() || Jd() || t("Silk"))
    };

    function Rd(a) {
        Rd[" "](a);
        return a
    }
    Rd[" "] = function() {};

    function Sd(a, b) {
        try {
            return Rd(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Td = Kd(),
        Ud = t("Edge") || Td,
        Vd = t("Gecko") && !($b(Ed(), "WebKit") && !t("Edge")) && !(t("Trident") || t("MSIE")) && !t("Edge"),
        Wd = $b(Ed(), "WebKit") && !t("Edge");

    function Xd(a) {
        return a ? new Yd(Zd(a)) : Ra || (Ra = new Yd)
    }

    function $d(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new qd(a.clientWidth, a.clientHeight)
    }

    function ae(a) {
        var b = a.scrollingElement ? a.scrollingElement : Wd || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
        a = a.defaultView;
        return new pd(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function be(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function ce(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    }

    function Zd(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    }
    var de = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        ee = {
            IMG: " ",
            BR: "\n"
        };

    function fe(a) {
        var b = [];
        ge(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        a != " " && (a = a.replace(/^\s*/, ""));
        return a
    }

    function ge(a, b, c) {
        if (!(a.nodeName in de))
            if (a.nodeType == 3) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in ee) b.push(ee[a.nodeName]);
        else
            for (a = a.firstChild; a;) ge(a, b, c), a = a.nextSibling
    }

    function he(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return ie(a, function(e) {
            return (!d || e.nodeName == d) && (!c || typeof e.className === "string" && ab(e.className.split(/\s+/), c))
        })
    }

    function ie(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Yd(a) {
        this.g = a || q.document || document
    }
    aa = Yd.prototype;
    aa.Bh = function(a) {
        var b = this.g;
        return typeof a === "string" ? b.getElementById(a) : a
    };
    aa.bk = Yd.prototype.Bh;

    function je(a, b) {
        return be(a.g, b)
    }

    function ke(a, b) {
        var c = a.g;
        a = be(c, "DIV");
        kd(a, b);
        if (a.childNodes.length == 1) b = a.removeChild(a.firstChild);
        else
            for (b = c.createDocumentFragment(); a.firstChild;) b.appendChild(a.firstChild);
        return b
    }
    aa.da = function() {
        return this.g.defaultView
    };
    aa.contains = function(a, b) {
        return a && b ? a == b || a.contains(b) : !1
    };
    aa.Ki = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (c == 1) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };

    function le() {
        return Cd && Fd ? Fd.mobile : !me() && (t("iPod") || t("iPhone") || t("Android") || t("IEMobile"))
    }

    function me() {
        return Cd && Fd ? !Fd.mobile && (t("iPad") || t("Android") || t("Silk")) : t("iPad") || t("Android") && !t("Mobile") || t("Silk")
    };
    var ne = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function oe(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        c < 0 && (c = a.length);
        var d = a.indexOf("?");
        if (d < 0 || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function pe(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) pe(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    };

    function qe(a) {
        try {
            return !!a && a.location.href != null && Sd(a, "foo")
        } catch {
            return !1
        }
    }

    function re(a, b = q) {
        b = se(b);
        let c = 0;
        for (; b && c++ < 40 && !a(b);) b = se(b)
    }

    function se(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function te(a) {
        return qe(a.top) ? a.top : null
    }

    function ue(a, b) {
        const c = ve("SCRIPT", a);
        vd(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function we(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function xe() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function ye(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function ze(a) {
        const b = [];
        ye(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Ae(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var Ce = Ab(() => $a(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Be) || Math.random() < 1E-4);
    const Be = a => Ed().indexOf(a) != -1;
    var De = /^([0-9.]+)px$/,
        Ee = /^(-?[0-9.]{1,30})$/;

    function Fe(a) {
        if (!Ee.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function Ge(a) {
        return (a = De.exec(a)) ? +a[1] : null
    }
    var He = {
        Gk: "allow-forms",
        Hk: "allow-modals",
        Ik: "allow-orientation-lock",
        Jk: "allow-pointer-lock",
        Kk: "allow-popups",
        Lk: "allow-popups-to-escape-sandbox",
        Mk: "allow-presentation",
        Nk: "allow-same-origin",
        Ok: "allow-scripts",
        Pk: "allow-top-navigation",
        Qk: "allow-top-navigation-by-user-activation"
    };
    const Ie = Ab(() => ze(He));

    function Je() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = Ie();
        return a.length ? Wa(b, c => !ab(a, c)) : b
    }

    function Ke() {
        const a = ve("IFRAME"),
            b = {};
        Ua(Ie(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var Le = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        Me = (a, b) => {
            for (let c = 0; c < 50; ++c) {
                if (Le(a, b)) return a;
                if (!(a = se(a))) break
            }
            return null
        },
        Ne = Ab(() => le() ? 2 : me() ? 1 : 0),
        u = (a, b) => {
            ye(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Pe = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = Oe(a.style.cssText), ye(a, b)
        },
        Oe = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Ua((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d &&
                            e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        Qe = a => {
            const b = /!\s*important/i;
            Pe(a, (c, d) => {
                b.test(c) ? b.test(c) : a.style.setProperty(d, c, "important")
            })
        };
    const Re = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Se = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        Te = /.*domain\.test$/,
        Ue = /\.prod\.google\.com(:\d+)?$/;
    var Ve = a => Re[a] || Se.test(a) || Te.test(a) || Ue.test(a);
    let We = [];
    const Xe = () => {
        const a = We;
        We = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Ye = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        Ze = (a, b) => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Ye(),
                    configurable: !1
                })
            } catch (c) {
                b && b.ba(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || a <= 0) && b.ba(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        $e = (a, b) => {
            a.document.readyState === "complete" ? (We.push(b), We.length == 1 && (window.Promise ? Promise.resolve().then(Xe) : window.setImmediate ? setImmediate(Xe) : setTimeout(Xe, 0))) : a.addEventListener("load", b)
        },
        af = (a,
            b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function ve(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var bf = a => {
            let b = a;
            for (; a && a != a.parent;) a = a.parent, qe(a) && (b = a);
            return b
        },
        df = a => Pd() && le() ? cf(a) : 1,
        cf = a => {
            var b = te(a);
            if (!b) return 1;
            a = Ne() === 0;
            const c = !!b.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                d = b.innerWidth;
            b = b.outerWidth;
            if (d === 0) return 1;
            const e = Math.round((b / d + Number.EPSILON) * 100) / 100;
            return e === 1 ? 1 : a || c ? e : Math.round((b / d / .4 + Number.EPSILON) * 100) / 100
        };

    function ef(a) {
        q.setTimeout(() => {
            throw a;
        }, 0)
    };
    Qd();
    Pd();
    Md();
    var ff = {},
        gf = null;

    function hf(a) {
        var b = 3;
        b === void 0 && (b = 0);
        jf();
        b = ff[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function kf(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e > 255 && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return hf(b)
    }

    function lf(a) {
        var b = [];
        mf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function mf(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = gf[l];
                if (m != null) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        jf();
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

    function jf() {
        if (!gf) {
            gf = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                var d = a.concat(b[c].split(""));
                ff[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    gf[f] === void 0 && (gf[f] = e)
                }
            }
        }
    };

    function nf(a) {
        let b = "",
            c = 0;
        const d = a.length - 10240;
        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const of = /[-_.]/g, pf = {
        "-": "+",
        _: "/",
        ".": "="
    };

    function qf(a) {
        return pf[a] || ""
    }

    function rf(a) {
        return a != null && a instanceof Uint8Array
    }
    var sf = {},
        tf = typeof structuredClone != "undefined";
    let uf;

    function vf(a) {
        if (a !== sf) throw Error("illegal external caller");
    }

    function wf() {
        return uf || (uf = new xf(null, sf))
    }
    var xf = class {
        constructor(a, b) {
            vf(b);
            this.g = a;
            if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return this.g == null
        }
    };
    let yf = 0,
        zf = 0;

    function Af(a) {
        const b = a >>> 0;
        yf = b;
        zf = (a - b) / 4294967296 >>> 0
    }

    function Bf(a) {
        if (a < 0) {
            Af(-a);
            a = yf;
            var b = zf;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            yf = c >>> 0;
            zf = d >>> 0
        } else Af(a)
    }

    function Cf(a, b) {
        b >>>= 0;
        a >>>= 0;
        var c;
        b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    }

    function Df() {
        var a = yf,
            b = zf,
            c;
        b & 2147483648 ? c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : c = Cf(a, b);
        return c
    }

    function Ef(a) {
        a.length < 16 ? Bf(Number(a)) : (a = BigInt(a), yf = Number(a & BigInt(4294967295)) >>> 0, zf = Number(a >> BigInt(32) & BigInt(4294967295)))
    };

    function Ff(a) {
        return Array.prototype.slice.call(a)
    };
    var v = Symbol(),
        Gf = Symbol(),
        Hf = Symbol(),
        If = Symbol(),
        Jf = Symbol(),
        Kf = Symbol();

    function Lf(a) {
        if (4 & a) return 4096 & a ? 4096 : 8192 & a ? 8192 : 0
    }

    function Mf(a) {
        return !!((a[v] | 0) & 2)
    }

    function Nf(a) {
        a[v] |= 34;
        return a
    }

    function Of(a) {
        a[v] |= 32;
        return a
    }

    function Pf(a, b) {
        b[v] = (a | 0) & -14591
    }

    function Qf(a, b) {
        b[v] = (a | 34) & -14557
    };
    var Rf = {},
        Sf = {};

    function Tf(a) {
        return !(!a || typeof a !== "object" || a.kj !== Sf)
    }

    function Uf(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Vf(a, b, c) {
        if (a != null)
            if (typeof a === "string") a = a ? new xf(a, sf) : wf();
            else if (a.constructor !== xf)
            if (rf(a)) a = a.length ? new xf(c ? a : new Uint8Array(a), sf) : wf();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }

    function Wf(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[v] | 0) & 1 ? !0 : !1
    }
    var Xf;
    const Yf = [];
    Yf[v] = 55;
    Xf = Object.freeze(Yf);

    function Zf(a) {
        if (a & 2) throw Error();
    }
    class $f {
        constructor(a, b, c) {
            this.j = 0;
            this.g = a;
            this.i = b;
            this.l = c
        }
        next() {
            if (this.j < this.g.length) {
                const a = this.g[this.j++];
                return {
                    done: !1,
                    value: this.i ? this.i.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new $f(this.g, this.i, this.l)
        }
    }
    var ag = Object.freeze({});
    Object.freeze({});
    var gg = Object.freeze({});
    let hg, ig;

    function jg(a) {
        if (ig) throw Error("");
        ig = b => {
            q.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function kg(a) {
        if (ig) try {
            ig(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function lg() {
        const a = Error();
        wd(a, "incident");
        ig ? kg(a) : ef(a)
    }

    function mg(a) {
        a = Error(a);
        wd(a, "warning");
        kg(a);
        return a
    }

    function ng(a, b) {
        if (b != null) {
            var c;
            a == null ? c = hg ? ? (hg = {}) : c = a.constructor;
            a = c[b] || 0;
            a >= 4 || (c[b] = a + 1, lg())
        }
    };

    function og(a, b) {
        const c = pg;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function qg(a) {
        a.no = !0;
        return a
    }
    let pg = void 0;
    const rg = qg(a => a !== null && a !== void 0);
    var sg = qg(a => typeof a === "number"),
        tg = qg(a => typeof a === "string"),
        ug = qg(a => a === void 0);

    function vg() {
        var a = wg;
        return qg(b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        })
    }
    var xg = qg(a => !!a && (typeof a === "object" || typeof a === "function"));

    function yg(a) {
        a.ej = !0;
        return a
    };

    function zg(a) {
        if (tg(a)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
        } else if (sg(a) && !Number.isSafeInteger(a)) throw Error(String(a));
        return BigInt(a)
    }
    var Cg = qg(a => a >= Ag && a <= Bg);
    const Ag = BigInt(Number.MIN_SAFE_INTEGER),
        Bg = BigInt(Number.MAX_SAFE_INTEGER);

    function Dg(a) {
        if (a != null && typeof a !== "number") throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function Eg(a) {
        if (typeof a !== "boolean") throw Error(`Expected boolean but got ${Aa(a)}: ${a}`);
        return a
    }
    const Fg = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Gg(a) {
        const b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return Number.isFinite(a)
        }
        return b !== "string" ? !1 : Fg.test(a)
    }

    function Hg(a) {
        if (!Number.isFinite(a)) throw mg("enum");
        return a | 0
    }

    function Ig(a) {
        return a == null ? a : Hg(a)
    }

    function Jg(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Kg(a) {
        if (typeof a !== "number") throw mg("int32");
        if (!Number.isFinite(a)) throw mg("int32");
        return a | 0
    }

    function Lg(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Mg(a) {
        if (typeof a !== "number") throw mg("uint32");
        if (!Number.isFinite(a)) throw mg("uint32");
        return a >>> 0
    }

    function Ng(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Og(a, b = 0) {
        if (!Gg(a)) throw mg("int64");
        const c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case "string":
                        return Pg(a);
                    case "bigint":
                        return String(BigInt.asIntN(64, a));
                    default:
                        return Qg(a)
                }
            case 8192:
                switch (c) {
                    case "string":
                        return b = Math.trunc(Number(a)), Number.isSafeInteger(b) ? a = zg(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = zg(BigInt.asIntN(64, BigInt(a)))), a;
                    case "bigint":
                        return zg(BigInt.asIntN(64, a));
                    default:
                        return zg(Rg(a))
                }
            case 0:
                switch (c) {
                    case "string":
                        return Pg(a);
                    case "bigint":
                        return zg(BigInt.asIntN(64,
                            a));
                    default:
                        return Rg(a)
                }
            default:
                return ud(b, "Unknown format requested type for int64")
        }
    }

    function Sg(a) {
        return a == null ? a : Og(a, 0)
    }

    function Tg(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function Ug(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function Vg(a) {
        if (a < 0) {
            Bf(a);
            const b = Cf(yf, zf);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (Tg(String(a))) return a;
        Bf(a);
        return zf * 4294967296 + (yf >>> 0)
    }

    function Rg(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Bf(a);
            var b = yf,
                c = zf;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function Wg(a) {
        a = Math.trunc(a);
        return a >= 0 && Number.isSafeInteger(a) ? a : Vg(a)
    }

    function Qg(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Ug(b) ? a = b : (Bf(a), a = Df())
            }
        }
        return a
    }

    function Xg(a) {
        a = Math.trunc(a);
        if (a >= 0 && Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                Tg(b) ? a = b : (Bf(a), a = Cf(yf, zf))
            }
        }
        return a
    }

    function Pg(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Ug(a) || (Ef(a), a = Df());
        return a
    }

    function Yg(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b) && b >= 0) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Tg(a) || (Ef(a), a = Cf(yf, zf));
        return a
    }

    function Zg(a) {
        if (a == null) return a;
        if (typeof a === "bigint") return Cg(a) ? a = Number(a) : (a = BigInt.asIntN(64, a), a = Cg(a) ? Number(a) : String(a)), a;
        if (Gg(a)) return typeof a === "number" ? Rg(a) : Pg(a)
    }

    function $g(a, b = 0) {
        if (!Gg(a)) throw mg("uint64");
        const c = typeof a;
        switch (b) {
            case 4096:
                switch (c) {
                    case "string":
                        return Yg(a);
                    case "bigint":
                        return String(BigInt.asUintN(64, a));
                    default:
                        return Xg(a)
                }
            case 8192:
                switch (c) {
                    case "string":
                        return b = Math.trunc(Number(a)), Number.isSafeInteger(b) && b >= 0 ? a = zg(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = zg(BigInt.asUintN(64, BigInt(a)))), a;
                    case "bigint":
                        return zg(BigInt.asUintN(64, a));
                    default:
                        return zg(Wg(a))
                }
            case 0:
                switch (c) {
                    case "string":
                        return Yg(a);
                    case "bigint":
                        return zg(BigInt.asUintN(64,
                            a));
                    default:
                        return Wg(a)
                }
            default:
                return ud(b, "Unknown format requested type for int64")
        }
    }

    function ah(a) {
        return a == null ? a : $g(a, 0)
    }

    function bh(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function ch(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function dh(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function eh(a, b, c, d) {
        if (a != null && typeof a === "object" && a.Hd === Rf) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? fh(b) : new b : void 0;
        let e = c = a[v] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[v] = e);
        return new b(a)
    }

    function fh(a) {
        var b = a[Gf];
        if (b) return b;
        b = new a;
        Nf(b.U);
        return a[Gf] = b
    }

    function gh(a, b, c) {
        return b ? bh(a) : dh(a) ? ? (c ? "" : void 0)
    };
    const hh = {},
        ih = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function jh(a) {
        return a
    }

    function kh(a) {
        if (a.ac & 2) throw Error("Cannot mutate an immutable Map");
    }
    var oh = class extends ih {
        constructor(a, b, c = jh, d = jh) {
            super();
            let e = a[v] | 0;
            e |= 64;
            this.ac = a[v] = e;
            this.ee = b;
            this.zc = c;
            this.Ef = this.ee ? lh : d;
            for (let f = 0; f < a.length; f++) {
                const g = a[f],
                    h = c(g[0], !1, !0);
                let k = g[1];
                b ? k === void 0 && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e);
                super.set(h, k)
            }
        }
        Af(a = mh) {
            if (this.size !== 0) return this.zf(a)
        }
        zf(a = mh) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            kh(this);
            super.clear()
        }
        delete(a) {
            kh(this);
            return super.delete(this.zc(a, !0, !1))
        }
        entries() {
            var a = this.Fg();
            return new $f(a, nh, this)
        }
        keys() {
            return this.hj()
        }
        values() {
            var a = this.Fg();
            return new $f(a, oh.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            kh(this);
            a = this.zc(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.Ef(b, !0, !0, this.ee, !1, this.ac))
        }
        has(a) {
            return super.has(this.zc(a, !1, !1))
        }
        get(a) {
            a = this.zc(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.ee;
                return c ? (c = this.Ef(b, !1, !0, c, this.Zh,
                    this.ac), c !== b && super.set(a, c), c) : b
            }
        }
        Fg() {
            return Array.from(super.keys())
        }
        hj() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    oh.prototype.toJSON = void 0;
    oh.prototype.kj = Sf;

    function lh(a, b, c, d, e, f) {
        a = eh(a, d, c, f);
        e && (a = ph(a));
        return a
    }

    function mh(a) {
        return a
    }

    function nh(a) {
        return [a, this.get(a)]
    }
    let qh;

    function rh() {
        return qh || (qh = new oh(Nf([]), void 0, void 0, void 0, hh))
    };
    let sh;

    function th(a, b) {
        sh = b;
        a = new a(b);
        sh = void 0;
        return a
    };

    function uh(a, b) {
        return vh(b)
    }

    function vh(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Wf(a)) return
                    } else {
                        if (rf(a)) return nf(a);
                        if (a instanceof xf) {
                            const b = a.g;
                            return b == null ? "" : typeof b === "string" ? b : a.g = nf(b)
                        }
                        if (a instanceof oh) return a.Af()
                    }
        }
        return a
    };

    function wh(a, b, c) {
        a = Ff(a);
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

    function xh(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Wf(a) ? void 0 : e && (a[v] | 0) & 2 ? a : yh(a, b, c, d !== void 0, e);
            else if (Uf(a)) {
                const f = {};
                for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = xh(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function yh(a, b, c, d, e) {
        const f = d || c ? a[v] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Ff(a);
        for (let g = 0; g < a.length; g++) a[g] = xh(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function zh(a) {
        return xh(a, Ah, void 0, void 0, !1)
    }

    function Ah(a) {
        a.Hd === Rf ? a = a.toJSON() : a instanceof xf ? (a = a.g || "", a = typeof a === "string" ? a : new Uint8Array(a)) : a = rf(a) ? new Uint8Array(a) : a instanceof oh ? a.Af(zh) : a;
        return a
    }

    function Bh(a) {
        return xh(a, Ch, void 0, void 0, !1)
    }

    function Ch(a) {
        return a.Hd === Rf ? a.toJSON() : a instanceof oh ? a.Af(Bh) : vh(a)
    }
    var Dh = tf ? structuredClone : a => yh(a, Ah, void 0, void 0, !1);

    function Eh(a, b, c = Qf) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[v] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[v] = (d | 34) & -12293, a) : yh(a, Eh, d & 4 ? Qf : c, !0, !0)
            }
            a.Hd === Rf ? (c = a.U, d = c[v], a = d & 2 ? a : th(a.constructor, Fh(c, d, !0))) : a instanceof oh && !(a.ac & 2) && (c = Nf(a.zf(Eh)), a = new oh(c, a.ee, a.zc, a.Ef));
            return a
        }
    }

    function Gh(a) {
        const b = a.U;
        return th(a.constructor, Fh(b, b[v], !1))
    }

    function Fh(a, b, c) {
        const d = c || b & 2 ? Qf : Pf,
            e = !!(b & 32);
        a = wh(a, b, f => Eh(f, e, d));
        a[v] = a[v] | 32 | (c ? 2 : 0);
        return a
    }

    function ph(a) {
        const b = a.U,
            c = b[v];
        return c & 2 ? th(a.constructor, Fh(b, c, !1)) : a
    };

    function Hh(a) {
        var b = Ih ? .get(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        if (Jh === void 0)
            if (typeof Proxy !== "function") Jh = null;
            else try {
                Jh = Proxy.toString().indexOf("[native code]") !== -1 ? Proxy : null
            } catch {
                Jh = null
            }
        b = Jh;
        if (!b) return a;
        b = new b(a, {
            set(c, d, e) {
                Kh();
                c[d] = e;
                return !0
            }
        });
        Lh(a, b);
        return b
    }

    function Kh() {
        lg()
    }
    let Ih = void 0,
        Mh = void 0;

    function Lh(a, b) {
        (Ih || (Ih = new WeakMap)).set(a, b);
        (Mh || (Mh = new WeakMap)).set(b, a)
    }
    let Jh = void 0;

    function Nh(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[Jf] = (a.constructor[Jf] | 0) + 1) < 5 && lg();
        return c === 0 ? !1 : !(c & b)
    }

    function Oh(a, b) {
        a = a.U;
        return Ph(a, a[v], b)
    }

    function Qh(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Ph(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Qh(a, b, e, c) && ng(void 0, Hf), d) : Qh(a, b, e, c)
        }
    }

    function Rh(a, b, c) {
        const d = a.U;
        let e = d[v];
        Zf(e);
        Sh(d, e, b, c);
        return a
    }

    function Sh(a, b, c, d, e) {
        const f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Dd) {
            let g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[v] = g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Th(a, b, c) {
        return Uh(a, b, c, !1) !== void 0
    }

    function Vh(a, b, c, d) {
        var e = b & 2;
        let f = Ph(a, b, c, d);
        Array.isArray(f) || (f = Xf);
        const g = !!(b & 32);
        let h = f[v] | 0;
        h === 0 && g && !e ? (h |= 33, f[v] = h) : h & 1 || (h |= 1, f[v] = h);
        if (e) h & 2 || Nf(f), Object.freeze(f);
        else if (2 & h || 2048 & h) f = Ff(f), e = 1, g && (e |= 32), f[v] = e, Sh(a, b, c, f, d);
        return f
    }

    function Wh(a, b) {
        a = a.U;
        let c = a[v];
        const d = Ph(a, c, b);
        var e = d == null || typeof d === "number" ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
        e != null && e !== d && Sh(a, c, b, e);
        return e
    }

    function w(a) {
        return a === ag ? 2 : 5
    }

    function Xh(a, b, c, d, e) {
        const f = a.U;
        var g = f[v];
        const h = 2 & g ? 1 : d;
        d = Yh(f, g, b);
        var k = d[v] | 0;
        if (Nh(a, k, e, !1)) {
            if (4 & k || Object.isFrozen(d)) d = Ff(d), k = Zh(k, g), g = Sh(f, g, b, d);
            let m = a = 0;
            for (; a < d.length; a++) {
                const n = c(d[a]);
                n != null && (d[m++] = n)
            }
            m < a && (d.length = m);
            k = $h(k, g);
            k = (k | 20) & -4097;
            k &= -8193;
            e && (k |= e);
            d[v] = k;
            2 & k && Object.freeze(d)
        }
        let l;
        h === 1 || h === 4 && 32 & k ? ai(k) || (g = k, k |= 2, k !== g && (d[v] = k), Object.freeze(d)) : (e = h !== 5 ? !1 : !!(32 & k) || ai(k) || !!Ih ? .get(d), (h === 2 || e) && ai(k) && (d = Ff(d), k = Zh(k, g), k = bi(k, g, !1), d[v] = k, g = Sh(f,
            g, b, d)), ai(k) || (b = k, k = bi(k, g, !1), k !== b && (d[v] = k)), e && (l = Hh(d)));
        return l || d
    }

    function Yh(a, b, c, d) {
        a = Ph(a, b, c, d);
        return Array.isArray(a) ? a : Xf
    }

    function $h(a, b) {
        a === 0 && (a = Zh(a, b));
        return a | 1
    }

    function ai(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function ci(a) {
        var b = di,
            c = a.U;
        const d = c[v];
        var e = Ph(c, d, 14);
        a = d & 2;
        a: {
            var f = e,
                g = d & 2;e = !1;
            if (f == null) {
                if (g) {
                    c = rh();
                    break a
                }
                f = []
            } else if (f.constructor === oh) {
                if ((f.ac & 2) == 0 || g) {
                    c = f;
                    break a
                }
                f = f.zf()
            } else Array.isArray(f) ? e = Mf(f) : f = [];
            if (g) {
                if (!f.length) {
                    c = rh();
                    break a
                }
                e || (e = !0, Nf(f))
            } else if (e) {
                e = !1;
                g = Ff(f);
                for (f = 0; f < g.length; f++) {
                    const h = g[f] = Ff(g[f]);
                    Array.isArray(h[1]) && (h[1] = Nf(h[1]))
                }
                f = g
            }
            e || ((f[v] | 0) & 64 ? f[v] &= -33 : 32 & d && Of(f));e = new oh(f, b, gh, void 0);Sh(c, d, 14, e, !1);c = e
        }!a && b && (c.Zh = !0);
        return c
    }

    function ei(a, b, c, d) {
        const e = a.U;
        let f = e[v];
        Zf(f);
        if (c == null) return Sh(e, f, b), a;
        c = Mh ? .get(c) || c;
        let g = c[v] | 0,
            h = g;
        var k = !!(2 & g) || Object.isFrozen(c);
        const l = !k && (void 0 === gg || !1);
        if (Nh(a, g))
            for (g = 21, k && (c = Ff(c), h = 0, g = Zh(g, f), g = bi(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        l && (c = Ff(c), h = 0, g = Zh(g, f), g = bi(g, f, !0));
        g !== h && (c[v] = g);
        Sh(e, f, b, c);
        return a
    }

    function fi(a, b, c, d) {
        const e = a.U;
        let f = e[v];
        Zf(f);
        Sh(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function gi(a, b) {
        var c = a.U,
            d = c[v] | 0;
        Zf(a.U[v]);
        c = Vh(c, d, 3, !1);
        d = Lf(c[v] | 0) ? ? 0;
        if (Array.isArray(b))
            for (var e = 0; e < b.length; e++) c.push(Og(b[e], d));
        else
            for (e of b) c.push(Og(e, d));
        return a
    }

    function hi(a, b, c, d) {
        var e = a.U;
        const f = e[v];
        Zf(f);
        b = Vh(e, f, b);
        d = c(d, Lf(b[v] | 0) ? ? 0);
        b.push(d);
        return a
    }

    function ii(a, b, c, d) {
        const e = a.U;
        var f = e[v];
        Zf(f);
        if (d == null) {
            var g = ji(e);
            if (ki(g, e, f, c) === b) g.set(c, 0);
            else return a
        } else {
            g = ji(e);
            const h = ki(g, e, f, c);
            h !== b && (h && (f = Sh(e, f, h)), g.set(c, b))
        }
        Sh(e, f, b, d);
        return a
    }

    function li(a, b) {
        a = a.U;
        return ki(ji(a), a, a[v], b)
    }

    function ji(a) {
        return a[If] ? ? (a[If] = new Map)
    }

    function ki(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            Ph(b, c, g) != null && (e !== 0 && (c = Sh(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function Uh(a, b, c, d) {
        a = a.U;
        let e = a[v];
        const f = Ph(a, e, c, d);
        b = eh(f, b, !1, e);
        b !== f && b != null && Sh(a, e, c, b, d);
        return b
    }

    function mi(a, b) {
        return (a = Uh(a, b, 1, !1)) ? a : fh(b)
    }

    function x(a, b, c) {
        b = Uh(a, b, c, !1);
        if (b == null) return b;
        a = a.U;
        let d = a[v];
        if (!(d & 2)) {
            const e = ph(b);
            e !== b && (b = e, Sh(a, d, c, b, !1))
        }
        return b
    }

    function ni(a, b, c, d, e, f, g, h) {
        var k = !!(2 & b);
        e = k ? 1 : e;
        g = !!g;
        h && (h = !k);
        k = Yh(a, b, d, f);
        var l = k[v] | 0,
            m = !!(4 & l);
        if (!m) {
            l = $h(l, b);
            var n = k,
                p = b;
            const y = !!(2 & l);
            y && (p |= 2);
            let D = !y,
                E = !0,
                G = 0,
                H = 0;
            for (; G < n.length; G++) {
                const z = eh(n[G], c, !1, p);
                if (z instanceof c) {
                    if (!y) {
                        const I = Mf(z.U);
                        D && (D = !I);
                        E && (E = I)
                    }
                    n[H++] = z
                }
            }
            H < G && (n.length = H);
            l |= 4;
            l = E ? l | 16 : l & -17;
            l = D ? l | 8 : l & -9;
            n[v] = l;
            y && Object.freeze(n)
        }
        if (h && !(8 & l || !k.length && (e === 1 || e === 4 && 32 & l))) {
            ai(l) && (k = Ff(k), l = Zh(l, b), b = Sh(a, b, d, k, f));
            c = k;
            h = l;
            for (n = 0; n < c.length; n++) l = c[n],
                p = ph(l), l !== p && (c[n] = p);
            h |= 8;
            h = c.length ? h & -17 : h | 16;
            l = c[v] = h
        }
        let r;
        e === 1 || e === 4 && 32 & l ? ai(l) || (b = l, l |= !k.length || 16 & l && (!m || 32 & l) ? 2 : 2048, l !== b && (k[v] = l), Object.freeze(k)) : (m = e !== 5 ? !1 : !!(32 & l) || ai(l) || !!Ih ? .get(k), (e === 2 || m) && ai(l) && (k = Ff(k), l = Zh(l, b), l = bi(l, b, g), k[v] = l, b = Sh(a, b, d, k, f)), ai(l) || (a = l, l = bi(l, b, g), l !== a && (k[v] = l)), m && (r = Hh(k)));
        return r || k
    }

    function oi(a, b, c, d) {
        a = a.U;
        const e = a[v];
        return ni(a, e, b, c, d, void 0, !1, !(2 & e))
    }

    function A(a, b, c) {
        c == null && (c = void 0);
        return Rh(a, b, c)
    }

    function B(a, b, c, d) {
        d == null && (d = void 0);
        return ii(a, b, c, d)
    }

    function pi(a, b, c) {
        const d = a.U;
        let e = d[v];
        Zf(e);
        if (c == null) return Sh(d, e, b), a;
        c = Mh ? .get(c) || c;
        let f = c[v] | 0,
            g = f;
        const h = !!(2 & f) || !!(2048 & f),
            k = h || Object.isFrozen(c),
            l = !k && (void 0 === gg || !1);
        let m = !0,
            n = !0;
        for (let r = 0; r < c.length; r++) {
            var p = c[r];
            h || (p = Mf(p.U), m && (m = !p), n && (n = p))
        }
        h || (f |= 5, f = m ? f | 8 : f & -9, f = n ? f | 16 : f & -17);
        if (l || k && f !== g) c = Ff(c), g = 0, f = Zh(f, e), f = bi(f, e, !0);
        f !== g && (c[v] = f);
        Sh(d, e, b, c);
        return a
    }

    function Zh(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function bi(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function qi(a, b, c, d, e, f, g) {
        a = a.U;
        const h = a[v];
        Zf(h);
        b = ni(a, h, c, b, 2, f, !0);
        c = d != null ? d : new c;
        if (g && (typeof e !== "number" || e < 0 || e > b.length)) throw Error();
        e != void 0 ? b.splice(e, g, c) : b.push(c);
        b[v] = Mf(c.U) ? b[v] & -9 : b[v] & -17
    }

    function ri(a, b, c, d) {
        qi(a, b, c, d);
        return a
    }

    function si(a, b) {
        return a ? ? b
    }

    function ti(a, b) {
        a = Oh(a, b);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }

    function Ai(a, b) {
        return Lg(Oh(a, b))
    }

    function C(a, b) {
        return dh(Oh(a, b))
    }

    function Bi(a, b) {
        return Jg(Oh(a, b))
    }

    function J(a, b, c = !1) {
        return si(ti(a, b), c)
    }

    function Ci(a, b) {
        return si(Ai(a, b), 0)
    }

    function Di(a, b) {
        return si(Zg(Oh(a, b)), 0)
    }

    function Ei(a, b, c = 0) {
        return si(Wh(a, b), c)
    }

    function K(a, b) {
        return si(C(a, b), "")
    }

    function Fi(a, b) {
        return si(Bi(a, b), 0)
    }

    function Gi(a) {
        {
            a = Oh(a, 10);
            const b = typeof a;
            a = a == null ? a : b === "bigint" ? String(BigInt.asUintN(64, a)) : Gg(a) ? b === "string" ? Yg(a) : Xg(a) : void 0
        }
        return a ? ? "0"
    }

    function Hi(a, b, c, d) {
        c = li(a, d) === c ? c : -1;
        return x(a, b, c)
    }

    function Ii(a, b) {
        a = Ai(a, b);
        return a == null ? void 0 : a
    }

    function Ji(a) {
        a = Wh(a, 4);
        return a == null ? void 0 : a
    }

    function Ki(a, b) {
        a = Bi(a, b);
        return a == null ? void 0 : a
    }

    function Li(a, b, c) {
        return Rh(a, b, c == null ? c : Eg(c))
    }

    function L(a, b, c) {
        return fi(a, b, c == null ? c : Eg(c), !1)
    }

    function Mi(a, b, c) {
        return Rh(a, b, c == null ? c : Kg(c))
    }

    function Ni(a, b, c) {
        return fi(a, b, c == null ? c : Kg(c), 0)
    }

    function Oi(a, b, c) {
        return Rh(a, b, Sg(c))
    }

    function Pi(a, b, c) {
        return fi(a, b, Sg(c), "0")
    }

    function Qi(a, b, c) {
        return Rh(a, b, ch(c))
    }

    function Ri(a, b, c) {
        return fi(a, b, ch(c), "")
    }

    function M(a, b, c) {
        return fi(a, b, Ig(c), 0)
    };
    let Si;

    function Ti(a) {
        try {
            return Si = !0, JSON.stringify(Ui(a), uh)
        } finally {
            Si = !1
        }
    }
    var N = class {
        constructor(a) {
            a: {
                a == null && (a = sh);sh = void 0;
                if (a == null) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    b = a[v] | 0;
                    if (b & 2048) throw Error("farr");
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d && (--d, Uf(c[d]))) {
                        b |= 256;
                        c = d - (+!!(b & 512) - 1);
                        if (c >= 1024) throw Error("pvtlmt");
                        b = b & -16760833 | (c & 1023) << 14
                    }
                }
                a[v] = b
            }
            this.U = a
        }
        toJSON() {
            return Ui(this)
        }
        i() {
            const a = this.U,
                b = a[v];
            return b & 2 ? this : th(this.constructor, Fh(a, b, !0))
        }
    };
    N.prototype.Hd = Rf;

    function Ui(a) {
        a = Si ? a.U : yh(a.U, Ch, void 0, void 0, !1); {
            var b = !Si;
            let l = a.length;
            if (l) {
                var c = a[l - 1],
                    d = Uf(c);
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
                                Array.isArray(m) && (Wf(m) || Tf(m) && m.size === 0) && (m = null);
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
                    if (!(h == null || Wf(h) || Tf(h) && h.size === 0)) break;
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

    function Vi(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[v] |= 128;
        return th(a, Of(b))
    };

    function Wi(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = th(a, Of(b))
            }
            return b
        }
    };
    gd `https://www.google.com/recaptcha/api2/aframe`;

    function Xi(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            vd(f, a);
            b.document.readyState !== "complete" ? Hb(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Yi(a) {
        var b = "https://ep1.adtrafficquality.google/getconfig/sodar" + `?sv=${200}&tid=${a.g}` + `&tv=${a.i}&st=` + `${a.Wb}`;
        let c = void 0;
        try {
            c = await Zi(b)
        } catch (g) {}
        if (c) {
            b = a.yc || c.sodar_query_id;
            var d = c.rc_enable !== void 0 && a.j ? c.rc_enable : "n",
                e = c.bg_snapshot_delay_ms === void 0 ? "0" : c.bg_snapshot_delay_ms,
                f = c.is_gen_204 === void 0 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.l,
                Uh: c.bg_hash_basename,
                Th: c.bg_binary,
                ij: a.g + "_" + a.i,
                yc: b,
                Wb: a.Wb,
                wd: d,
                Zd: e,
                ud: f
            }
        }
    }
    let Zi = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (d.status >= 200 && d.status < 300 ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function $i(a) {
        var b = await Yi(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && typeof c.push === "function" || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Uh,
                _bgp_: b.Th,
                _li_: b.ij,
                _jk_: b.yc,
                _st_: b.Wb,
                _rc_: b.wd,
                _dl_: b.Zd,
                _g2_: b.ud
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = gd `https://ep2.adtrafficquality.google/sodar/${"sodar2"}.js`;
            Xi(a)
        }
    };

    function aj(a, b) {
        return Ri(a, 1, b)
    }
    var bj = class extends N {
        g() {
            return K(this, 1)
        }
    };

    function cj(a, b) {
        return A(a, 5, b)
    }

    function dj(a, b) {
        return Ri(a, 3, b)
    }

    function ej(a, b) {
        return L(a, 6, b)
    }
    var fj = class extends N {
        constructor() {
            super()
        }
    };

    function gj(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var hj = class {
            constructor(a) {
                this.g = a.i;
                this.i = a.j;
                this.l = a.l;
                this.yc = a.yc;
                this.win = a.da();
                this.Wb = a.Wb;
                this.wd = a.wd;
                this.Zd = a.Zd;
                this.ud = a.ud;
                this.j = a.g
            }
        },
        ij = class {
            constructor(a, b, c) {
                this.i = a;
                this.j = b;
                this.l = c;
                this.win = window;
                this.Wb = "env";
                this.wd = "n";
                this.Zd = "0";
                this.ud = "1";
                this.g = !0
            }
            da() {
                return this.win
            }
            build() {
                return new hj(this)
            }
        };

    function jj(a) {
        var b = new kj;
        return Qi(b, 1, a)
    }
    var kj = class extends N {
        getValue() {
            return K(this, 1)
        }
        getVersion() {
            return Fi(this, 5)
        }
    };
    var lj = class extends N {};
    var mj = class extends N {};

    function nj(a, b, c = null, d = !1, e = !1) {
        oj(a, b, c, d, e)
    }

    function oj(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = ve("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && cb(a.google_image_requests, f);
                Ib(f, "load", g);
                Ib(f, "error", g)
            };
            Hb(f, "load", g);
            Hb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var qj = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            ye(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            pj(c)
        },
        pj = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : nj(b, a, void 0, !1, !1)
        };
    let rj = null;
    var sj = window;
    var tj = class extends N {
        constructor() {
            super()
        }
    };
    var uj = class extends N {
        constructor() {
            super()
        }
        getCorrelator() {
            ng(this, Kf);
            return Di(this, 1)
        }
        setCorrelator(a) {
            return Pi(this, 1, a)
        }
    };
    var vj = class extends N {
        constructor() {
            super()
        }
    };

    function wj(a) {
        this.g = a || {
            cookie: ""
        }
    }
    aa = wj.prototype;
    aa.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        typeof c === "object" && (h = c.gh, g = c.Wd || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Cd);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h : "")
    };
    aa.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Rb(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };

    function xj(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            Cd: 0,
            path: c,
            domain: d
        })
    }
    aa.isEmpty = function() {
        return !this.g.cookie
    };
    aa.wc = function() {
        return this.g.cookie ? (this.g.cookie || "").split(";").length : 0
    };
    aa.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Rb(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) xj(this, b[a])
    };

    function yj(a, b = window) {
        if (a.g()) try {
            return b.localStorage
        } catch {}
        return null
    }

    function zj(a = window) {
        try {
            return a.localStorage
        } catch {
            return null
        }
    }
    let Aj;

    function Bj(a) {
        return Aj ? Aj : a.origin === "null" ? Aj = !1 : Aj = Cj(a)
    }

    function Cj(a) {
        if (!a.navigator.cookieEnabled) return !1;
        const b = new wj(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            Cd: 60,
            gh: a.isSecureContext ? "none" : void 0,
            Wd: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        xj(b, "TESTCOOKIESENABLED");
        return !0
    }

    function Dj(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new wj({
            cookie: b
        })).get(a) || ""
    }

    function Ej(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = { ...c,
            gh: "none",
            Wd: !0
        }), (new wj(d.document)).set(a, b, c))
    };
    let Fj = null,
        Gj = null;

    function Hj() {
        if (Fj != null) return Fj;
        Fj = !1;
        try {
            const a = te(q);
            a && a.location.hash.indexOf("google_logging") !== -1 && (Fj = !0);
            zj(q) ? .getItem("google_logging") && (Fj = !0)
        } catch (a) {}
        return Fj
    }

    function Ij() {
        if (Gj != null) return Gj;
        Gj = !1;
        try {
            const a = te(q),
                b = zj(q);
            if (a && a.location.hash.indexOf("auto_ads_logging") !== -1 || b && b.getItem("auto_ads_logging")) Gj = !0
        } catch (a) {}
        return Gj
    }
    var Jj = (a, b = []) => {
        let c = !1;
        q.google_logging_queue || (c = !0, q.google_logging_queue = []);
        q.google_logging_queue.push([a, b]);
        c && Hj() && ue(q.document, gd `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function Kj(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    aa = Kj.prototype;
    aa.getWidth = function() {
        return this.right - this.left
    };
    aa.getHeight = function() {
        return this.bottom - this.top
    };

    function Lj(a) {
        return new Kj(a.top, a.right, a.bottom, a.left)
    }
    aa.contains = function(a) {
        return this && a ? a instanceof Kj ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Mj(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    aa.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    aa.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    aa.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    aa.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function Nj(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Oj(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Nj(c, e, d - c, a - e)
        }
        return null
    }

    function Pj(a, b) {
        var c = Oj(a, b);
        if (!c || !c.height || !c.width) return [new Nj(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new Nj(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new Nj(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new Nj(a.left, d, b.left - a.left, e));
        h < f && c.push(new Nj(h, d, f - h, e));
        return c
    }
    aa = Nj.prototype;
    aa.contains = function(a) {
        return a instanceof pd ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    aa.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    aa.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    aa.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    aa.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    const Qj = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Rj(a = q) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Sj(a = Rj()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function Tj(a = Rj()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(Qj[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function Uj() {
        var a = Rj();
        return a && a.initialIntersection
    }

    function Vj() {
        const a = Uj();
        return a && Da(a.rootBounds) ? new qd(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Wj(a = Rj()) {
        return a ? qe(a.master) ? a.master : null : null
    }

    function Xj(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            cb(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = g.data === "amp-ini-load";
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || ue(a.document, g ? gd `https://cdn.ampproject.org/rtv/${g}/amp4ads-host-v0.js` : gd `https://cdn.ampproject.org/amp4ads-host-v0.js`));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, Hb(a, "message", f), d = () => {
            Ib(a, "message", f)
        });
        return e
    };

    function Yj() {
        return a => {
            a = {
                id: "unsafeurl",
                ctx: 638,
                url: a
            };
            var b = [];
            for (c in a) pe(c, a[c], b);
            var c = oe("https://pagead2.googlesyndication.com/pagead/gen_204", b.join("&"));
            navigator.sendBeacon && navigator.sendBeacon(c, "")
        }
    };

    function Zj(a, b, c) {
        if (typeof b === "string")(b = ak(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = ak(c, d);
                f && (c.style[f] = e)
            }
    }
    var bk = {};

    function ak(a, b) {
        var c = bk[b];
        if (!c) {
            var d = Ad(b);
            c = d;
            a.style[d] === void 0 && (d = (Wd ? "Webkit" : Vd ? "Moz" : Td ? "ms" : null) + Bd(d), a.style[d] !== void 0 && (c = d));
            bk[b] = c
        }
        return c
    }

    function ck(a, b) {
        var c = a.style[Ad(b)];
        return typeof c !== "undefined" ? c : a.style[ak(a, b)] || ""
    }

    function dk(a, b) {
        var c = Zd(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function ek(a, b) {
        return dk(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function fk(a) {
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

    function gk(a) {
        var b = Zd(a),
            c = new pd(0, 0);
        if (a == (b ? Zd(b) : document).documentElement) return c;
        a = fk(a);
        b = ae(Xd(b).g);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function hk(a) {
        var b = ik;
        if (ek(a, "display") != "none") return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function ik(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Wd && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = fk(a), new qd(a.right - a.left, a.bottom - a.top)) : new qd(b, c)
    };
    var jk = a => typeof a === "number" && a > 0,
        lk = (a, b) => {
            a = kk(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + (c === "?" || c === "#" ? "" : "&") + a
        },
        kk = a => Object.entries(mk(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        mk = a => {
            const b = {};
            ye(a, (c, d) => {
                if (c || c === 0 || c === !1) typeof c === "boolean" && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        nk = a => {
            a = Wj(Rj(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        ok = a => {
            a = a.google_unique_id;
            return typeof a === "number" ? a : 0
        },
        pk = a => {
            let b;
            b = a.nodeType !== 9 && a.id;
            a: {
                if (a && a.nodeName &&
                    a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        qk = a => (a = a.google_ad_format) ? a.indexOf("_0ads") > 0 : !1,
        rk = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(b > 0 && c > 0)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f =
                                e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (g > 0 && h > 0) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = b > 0 ? b : a.width;c = c > 0 ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    var sk = class {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const tk = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var uk = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        vk = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.Cg = !!c;
                this.depth = null
            }
        };
    let wk = null;

    function xk() {
        if (wk === null) {
            wk = "";
            try {
                let a = "";
                try {
                    a = q.top.location.hash
                } catch (b) {
                    a = q.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    wk = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return wk
    };

    function yk() {
        const a = q.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function zk() {
        const a = q.performance;
        return a && a.now ? a.now() : null
    };
    var Ak = class {
        constructor(a, b) {
            var c = zk() || yk();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const Bk = q.performance,
        Ck = !!(Bk && Bk.mark && Bk.measure && Bk.clearMarks),
        Dk = Ab(() => {
            var a;
            if (a = Ck) a = xk(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function Ek(a) {
        a && Bk && Dk() && (Bk.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Bk.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Fk(a) {
        a.g = !1;
        a.i != a.j.google_js_reporting_queue && (Dk() && Ua(a.i, Ek), a.i.length = 0)
    }

    function Gk(a, b) {
        if (!a.g) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Ek(c), e;
        }
        a.end(c);
        return d
    }
    class Hk {
        constructor(a) {
            this.i = [];
            this.j = a || q;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.i = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Dk() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Ak(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Bk && Dk() && Bk.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (zk() || yk()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Bk && Dk() && Bk.mark(b);
                !this.g || this.i.length >
                    2048 || this.i.push(a)
            }
        }
    };

    function Ik(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Jk(a, b, c, d, e) {
        const f = [];
        ye(a, function(g, h) {
            (g = Kk(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Kk(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Kk(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(Jk(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Lk(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Mk(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Lk(a) - b.length;
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
                let l = Jk(h[k], a.j, ",$");
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
    class Nk {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.g = []
        }
    };

    function Ok(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        a.stack && (b = Pk(a.stack, b));
        return b
    }

    function Pk(a, b) {
        try {
            a.indexOf(b) == -1 && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    var Rk = class {
        constructor(a, b, c = null) {
            this.Z = a;
            this.A = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.B = this.ba
        }
        tf(a) {
            this.g = a
        }
        l(a) {
            this.j = a
        }
        vb(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    Ek(e), b = this.B(a, new sk(f, {
                        message: Ok(f)
                    }), void 0, c)
                } catch (g) {
                    this.ba(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        Ca(a, b, c, d) {
            return (...e) => this.vb(a, () => b.apply(c, e), d)
        }
        ba(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const F = new Nk;
                var g = F;
                g.g.push(1);
                g.i[1] = Ik("context", a);
                b.error && b.meta && b.id || (b = new sk(b, {
                    message: Ok(b)
                }));
                if (b.msg) {
                    g = F;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.i[2] = Ik("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g) try {
                    this.g(b)
                } catch (fa) {}
                if (d) try {
                    d(b)
                } catch (fa) {}
                d = F;
                k = [k];
                d.g.push(3);
                d.i[3] = k;
                d = q;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (qe(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new vk(m || "", l));
                    try {
                        d = l.parent
                    } catch (fa) {
                        d = null
                    }
                } while (d && l != d);
                for (let fa = 0, la = k.length - 1; fa <= la; ++fa) k[fa].depth = la -
                    fa;
                l = q;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.Cg = !0)
                    }
                var p = k;
                let ba = new vk(q.location.href, q, !1);
                l = null;
                const bb = p.length - 1;
                for (n = bb; n >= 0; --n) {
                    var r = p[n];
                    !l && tk.test(r.url) && (l = r);
                    if (r.url && !r.Cg) {
                        ba = r;
                        break
                    }
                }
                r = null;
                const xa = p.length && p[bb].url;
                ba.depth != 0 && xa && (r = p[bb]);
                f = new uk(ba, r);
                if (f.i) {
                    p = F;
                    var y = f.i.url || "";
                    p.g.push(4);
                    p.i[4] = Ik("top", y)
                }
                var D = {
                    url: f.g.url ||
                        ""
                };
                if (f.g.url) {
                    var E = f.g.url.match(ne),
                        G = E[1],
                        H = E[3],
                        z = E[4];
                    y = "";
                    G && (y += G + ":");
                    H && (y += "//", y += H, z && (y += ":" + z));
                    var I = y
                } else I = "";
                G = F;
                D = [D, {
                    url: I
                }];
                G.g.push(5);
                G.i[5] = D;
                Qk(this.Z, e, F, this.j, c)
            } catch (F) {
                try {
                    Qk(this.Z, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ok(F),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (ba) {}
            }
            return this.A
        }
        pa(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ba(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    var Sk = class extends N {
        constructor() {
            super()
        }
    };

    function Tk(a, b) {
        try {
            const c = d => [{
                [d.Cf]: d.df
            }];
            return JSON.stringify([a.filter(d => d.yd).map(c), Ui(b), a.filter(d => !d.yd).map(c)])
        } catch (c) {
            return Uk(c, b), ""
        }
    }

    function Uk(a, b) {
        try {
            qj({
                m: Ok(a instanceof Error ? a : Error(String(a))),
                b: Fi(b, 1) || null,
                v: K(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var Vk = class {
        constructor(a, b) {
            var c = new Sk;
            a = M(c, 1, a);
            this.i = Ri(a, 2, b).i()
        }
    };
    var Wk = class extends N {},
        Xk = [1, 2, 3];
    var Yk = class extends N {
            constructor() {
                super()
            }
        },
        Zk = [2, 4];

    function $k(a) {
        var b = new al;
        return Ri(b, 1, a)
    }
    var al = class extends N {
        constructor() {
            super()
        }
    };
    var bl = class extends N {
        getValue() {
            return Fi(this, 1)
        }
    };

    function cl(a) {
        var b = new dl;
        return Rh(b, 1, Ig(a))
    }
    var dl = class extends N {
        getValue() {
            return Fi(this, 1)
        }
    };
    var el = class extends N {
        constructor() {
            super()
        }
        getValue() {
            return Fi(this, 1)
        }
    };

    function fl(a, b) {
        return Pi(a, 1, b)
    }

    function gl(a, b) {
        return Pi(a, 2, b)
    }

    function hl(a, b) {
        return Pi(a, 3, b)
    }

    function il(a, b) {
        return Pi(a, 4, b)
    }

    function jl(a, b) {
        return Pi(a, 5, b)
    }

    function kl(a, b) {
        return fi(a, 8, Dg(b), 0)
    }

    function ll(a, b) {
        return fi(a, 9, Dg(b), 0)
    }
    var ml = class extends N {
        constructor() {
            super()
        }
    };

    function nl(a, b) {
        return Pi(a, 1, b)
    }

    function ol(a, b) {
        return Pi(a, 2, b)
    }
    var pl = class extends N {};

    function ql(a, b) {
        ri(a, 1, pl, b)
    }
    var di = class extends N {
        jh(a) {
            qi(this, 1, pl, void 0, a, !1, 1);
            return this
        }
    };
    var rl = class extends N {
        constructor() {
            super()
        }
    };

    function sl(a, b) {
        return ei(a, 1, b, bh)
    }

    function tl(a, b) {
        return ei(a, 12, b, $g)
    }

    function ul() {
        var a = new vl;
        return hi(a, 2, bh, "irr")
    }

    function wl(a, b) {
        return L(a, 3, b)
    }

    function xl(a, b) {
        return L(a, 4, b)
    }

    function yl(a, b) {
        return L(a, 5, b)
    }

    function zl(a, b) {
        return L(a, 7, b)
    }

    function Al(a, b) {
        return L(a, 8, b)
    }

    function Bl(a, b) {
        return Pi(a, 9, b)
    }

    function Cl(a, b) {
        return pi(a, 10, b)
    }

    function Dl(a, b) {
        return ei(a, 11, b, Og)
    }
    var vl = class extends N {
        constructor() {
            super()
        }
    };

    function El(a) {
        var b = Fl();
        A(a, 1, b)
    }

    function Gl(a, b) {
        return Pi(a, 2, b)
    }

    function Hl(a, b) {
        return pi(a, 3, b)
    }

    function Il(a, b) {
        return pi(a, 4, b)
    }

    function Jl(a, b) {
        return ri(a, 4, dl, b)
    }

    function Kl(a, b) {
        return pi(a, 5, b)
    }

    function Ll(a, b) {
        return ei(a, 6, b, bh)
    }

    function Ml(a, b) {
        return Pi(a, 7, b)
    }

    function Nl(a, b) {
        A(a, 9, b)
    }

    function Ol(a, b) {
        return L(a, 10, b)
    }

    function Pl(a, b) {
        return L(a, 11, b)
    }

    function Ql(a, b) {
        return L(a, 12, b)
    }
    var Rl = class extends N {
        constructor() {
            super()
        }
        H(a) {
            qi(this, 3, bl, void 0, a, !1, 1);
            return this
        }
        G(a) {
            return Pi(this, 8, a)
        }
    };
    var Sl = class extends N {
        constructor() {
            super()
        }
    };
    var Tl = class extends N {};

    function Ul(a) {
        var b = new Vl;
        return M(b, 1, a)
    }
    var Vl = class extends N {
        constructor() {
            super()
        }
    };
    var Wl = class extends N {
        constructor() {
            super()
        }
    };
    var Xl = class extends N {
        constructor() {
            super()
        }
    };
    var Yl = class extends N {
        constructor() {
            super()
        }
    };
    var Zl = class extends N {
            constructor() {
                super()
            }
        },
        $l = [1, 2];
    var am = class extends N {
        constructor() {
            super()
        }
    };
    var bm = class extends N {
            constructor() {
                super()
            }
        },
        cm = [1];

    function dm(a) {
        var b = new em;
        return M(b, 1, a)
    }
    var em = class extends N {
        constructor() {
            super()
        }
    };
    var fm = class extends N {
        constructor() {
            super()
        }
    };
    var gm = class extends N {
        constructor() {
            super()
        }
    };
    var hm = class extends N {
        constructor() {
            super()
        }
    };
    var im = class extends N {
        constructor() {
            super()
        }
    };
    var jm = class extends N {
        constructor() {
            super()
        }
    };
    var km = class extends N {
        constructor() {
            super()
        }
    };
    var lm = class extends N {
        constructor() {
            super()
        }
        getContentUrl() {
            return K(this, 1)
        }
    };
    var mm = class extends N {
        constructor() {
            super()
        }
    };
    var nm = class extends N {
        constructor() {
            super()
        }
    };

    function om() {
        var a = new pm,
            b = new nm;
        return B(a, 1, qm, b)
    }
    var pm = class extends N {
            constructor() {
                super()
            }
        },
        qm = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var rm = class extends N {
        constructor() {
            super()
        }
    };
    var sm = class extends N {
        constructor() {
            super()
        }
    };
    var tm = class extends N {
        constructor() {
            super()
        }
    };
    var um = class extends N {
        constructor() {
            super()
        }
    };

    function vm(a, b) {
        return fi(a, 10, ah(b), "0")
    }

    function wm(a, b) {
        return M(a, 1, b)
    }
    var xm = class extends N {};
    var ym = class extends N {
        constructor() {
            super()
        }
    };
    var Km = class extends N {
        constructor() {
            super()
        }
    };
    var Lm = class extends N {
            constructor() {
                super()
            }
        },
        Mm = [4, 5];

    function Nm(a) {
        var b = new Om;
        return Ri(b, 4, a)
    }

    function Pm(a, b) {
        return Rh(a, 6, ah(b))
    }
    var Om = class extends N {
        constructor() {
            super()
        }
    };

    function Qm(a) {
        var b = new Rm;
        return Ni(b, 2, a)
    }
    var Rm = class extends N {
        constructor() {
            super()
        }
    };
    var Sm = class extends N {
        constructor() {
            super()
        }
    };
    var Tm = class extends N {
        constructor() {
            super()
        }
    };
    var Um = class extends N {
        constructor() {
            super()
        }
    };
    var Vm = class extends N {
        constructor() {
            super()
        }
    };
    var Wm = class extends N {
        constructor() {
            super()
        }
    };
    var Xm = class extends N {
            constructor() {
                super()
            }
        },
        Ym = [2, 3];
    var Zm = class extends N {
            constructor() {
                super()
            }
        },
        $m = [3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17];

    function an(a, b) {
        return Pi(a, 3, b)
    }
    var bn = class extends N {
            constructor() {
                super()
            }
            Ub(a) {
                return Ri(this, 2, a)
            }
        },
        cn = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14];
    var dn = class extends N {
        constructor() {
            super()
        }
    };
    var en = class extends N {
        constructor() {
            super()
        }
    };
    var fn = class extends N {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            ng(this, Kf);
            return Di(this, 1)
        }
    };
    var gn = class extends N {
            constructor() {
                super()
            }
        },
        hn = [4, 6];
    class jn {
        constructor(a) {
            this.Z = a;
            this.g = new kn(this.Z)
        }
    }
    class kn {
        constructor(a) {
            this.Z = a;
            this.g = new ln(this.Z)
        }
    }
    class ln {
        constructor(a) {
            this.Z = a;
            this.g = new mn(this.Z)
        }
    }
    class mn {
        constructor(a) {
            this.Z = a;
            this.i = new nn(this.Z);
            this.g = new on(this.Z)
        }
    }
    class nn {
        constructor(a) {
            this.Z = a
        }
    }

    function pn(a, b) {
        var c = qn;
        a = a.Z;
        var d = $k("jM4CPd");
        var e = new Wk;
        e = ii(e, 2, Xk, Sg(Math.round(b.Wj)));
        d = ri(d, 4, Wk, e);
        e = new Yk;
        b = ii(e, 4, Zk, Dg(b.Qj));
        b = A(d, 3, b);
        c(a, b)
    }
    class on {
        constructor(a) {
            this.Z = a
        }
    }
    class rn extends Vk {
        constructor() {
            super(...arguments);
            this.C = new jn(this)
        }
    }

    function qn(a, ...b) {
        a.l(...b.map(c => ({
            yd: !1,
            Cf: 1,
            df: Ui(c)
        })))
    }

    function sn(a, ...b) {
        a.l(...b.map(c => ({
            yd: !0,
            Cf: 3,
            df: Ui(c)
        })))
    }

    function tn(a, ...b) {
        a.l(...b.map(c => ({
            yd: !0,
            Cf: 7,
            df: Ui(c)
        })))
    }
    var un = class extends rn {};
    var vn = (a, b) => {
            globalThis.fetch(a, {
                method: "POST",
                body: b,
                keepalive: b.length < 65536,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            }).catch(() => {})
        },
        wn = class extends un {
            constructor(a) {
                super(2, a);
                this.g = vn
            }
            l(...a) {
                try {
                    const b = Tk(a, this.i);
                    this.g("https://pagead2.googlesyndication.com/pagead/ping?e=1", b)
                } catch (b) {
                    Uk(b, this.i)
                }
            }
        },
        xn = class extends wn {};

    function yn(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = Tk(a.g, a.i);
            a.G("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var An = class extends un {
            constructor(a, b, c, d, e) {
                super(2, a);
                this.G = vn;
                this.I = b;
                this.F = c;
                this.H = d;
                this.A = e;
                this.g = [];
                this.j = null;
                this.B = !1
            }
            l(...a) {
                try {
                    this.H && Tk(this.g.concat(a), this.i).length >= 65536 && yn(this), this.A && !this.B && (this.B = !0, zn(this.A, () => {
                        yn(this)
                    })), this.g.push(...a), this.g.length >= this.F && yn(this), this.g.length && this.j === null && (this.j = setTimeout(() => {
                        yn(this)
                    }, this.I))
                } catch (b) {
                    Uk(b, this.i)
                }
            }
        },
        Bn = class extends An {
            constructor(a, b = 1E3, c = 100, d = !1, e) {
                super(a, b, c, d && !0, e)
            }
        };
    var O = a => {
        var b = "Ve";
        if (a.Ve && a.hasOwnProperty(b)) return a.Ve;
        b = new a;
        return a.Ve = b
    };

    function Cn(a, b, c) {
        return b[a] || c
    };

    function Dn(a, b) {
        a.i = (c, d) => Cn(2, b, () => [])(c, 1, d);
        a.g = () => Cn(3, b, () => [])(1)
    }
    class En {
        i() {
            return []
        }
        g() {
            return []
        }
    }

    function Fn(a, b) {
        return O(En).i(a, b)
    };

    function Qk(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Nk ? f = c : (f = new Nk, ye(c, (h, k) => {
                var l = f;
                const m = l.l++;
                h = Ik(k, h);
                l.g.push(m);
                l.i[m] = h
            }));
            const g = Mk(f, "/pagead/gen_204?id=" + b + "&");
            g && nj(q, g)
        } catch (f) {}
    }

    function Gn(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Hn {
        constructor() {
            this.g = Math.random()
        }
    };
    let In, Jn;
    const Kn = new Hk(window);
    (a => {
        In = a ? ? new Hn;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Gn(In, window.google_srt);
        Jn = new Rk(In, !0, Kn);
        Jn.tf(() => {});
        Jn.l(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || Fk(Kn) : Kn.g && Hb(window, "load", () => {
            window.google_measure_js_timing || Fk(Kn)
        })
    })();
    let Ln = (new Date).getTime();
    var Mn = {
        om: 0,
        nm: 1,
        km: 2,
        fm: 3,
        lm: 4,
        gm: 5,
        mm: 6,
        im: 7,
        jm: 8,
        em: 9,
        hm: 10,
        pm: 11
    };
    var Nn = {
        rm: 0,
        sm: 1,
        qm: 2
    };

    function On(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Pn(a) {
        a = Xa(a, b => new Kj(b.top, b.right, b.bottom, b.left));
        a = Qn(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Qn(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Ya(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Lj(a[0]))
    };
    var Lb = {
        hn: 0,
        Tl: 1,
        Wl: 2,
        Ul: 3,
        Vl: 4,
        cm: 8,
        un: 9,
        Em: 10,
        Fm: 11,
        qn: 16,
        Gl: 17,
        Fl: 24,
        Bm: 25,
        al: 26,
        Zk: 27,
        Dh: 30,
        vm: 32,
        ym: 40,
        zn: 41,
        vn: 42
    };
    var Rn = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Sn = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };
    var Tn = 728 * 1.38;

    function Un(a, b = -1) {
        if (a !== a.top) {
            if (b < 0) a = !1;
            else {
                var c = Vn(a, !0, !0),
                    d = P(a, !0);
                a = c > 0 && d > 0 && Math.abs(1 - a.screen.width / c) <= b && Math.abs(1 - a.screen.height / d) <= b
            }
            a = a ? 0 : 512
        } else a = 0;
        return a
    }

    function Wn(a, b = 420, c = !1, d = !1) {
        return (a = Vn(a, c, d)) ? a > b ? 32768 : a < 320 ? 65536 : 0 : 16384
    }

    function Xn(a) {
        return Math.max(0, Yn(a, !0) - P(a))
    }

    function Zn(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function P(a, b = !1) {
        const c = Zn(a).clientHeight;
        return b ? c * df(a) : c
    }

    function Vn(a, b = !1, c = !1) {
        c = Zn(a).clientWidth ? ? (c ? a.innerWidth : void 0);
        return b ? c * df(a) : c
    }

    function Yn(a, b) {
        const c = Zn(a);
        return b ? (a = P(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }

    function $n(a, b) {
        return ao(b) || b === 10 || !a.adCount ? !1 : b == 1 || b == 2 ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? a >= 1 : !1
    }

    function bo(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function co(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function eo(a) {
        return a.pageXOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function fo(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key" in d && "value" in d) {
                    const e = d.value;
                    b[d.key] = e == null ? null : String(e)
                }
            }
        return b
    }

    function go(a, b, c, d) {
        Qk(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function ho(a) {
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
        Ua(Object.keys(b), c => {
            ck(a, c) || Zj(a, c, b[c])
        });
        Qe(a)
    }

    function ao(a) {
        return a === 26 || a === 27 || a === 40 || a === 41
    };

    function io(a, b) {
        jo(a).forEach(b, void 0)
    }

    function jo(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function ko(a, b) {
        return a.g[lo(b)] !== void 0
    }

    function mo(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.i[c]);
        return b
    }

    function no(a) {
        const b = [];
        for (const c in a.g) a.g[c] !== void 0 && a.g.hasOwnProperty(c) && b.push(a.g[c]);
        return b
    }
    const oo = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = lo(a);
            this.g[c] = b;
            this.i[c] = a
        }
        get(a, b) {
            a = lo(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        wc() {
            return mo(this).length
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function lo(a) {
        return a instanceof Object ? String(Ea(a)) : a + ""
    };
    const po = class {
        constructor(a) {
            this.g = new oo;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return ko(this.g, a)
        }
    };
    const qo = new po("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function ro(a, {
        eb: b,
        Xa: c,
        Db: d
    }) {
        return d && c(b) ? b : (b = b.parentElement) ? so(a, {
            eb: b,
            Xa: c,
            Db: !0
        }) : null
    }

    function so(a, {
        eb: b,
        Xa: c,
        Db: d = !1
    }) {
        const e = to({
                eb: b,
                Xa: c,
                Db: d
            }),
            f = a.g.get(e);
        if (f) return f.element;
        b = ro(a, {
            eb: b,
            Xa: c,
            Db: d
        });
        a.g.set(e, {
            element: b
        });
        return b
    }
    var uo = class {
        constructor() {
            this.g = new Map
        }
    };

    function to({
        eb: a,
        Xa: b,
        Db: c
    }) {
        a = Ea(a);
        b = Ea(b);
        return `${a}:${b}:${c}`
    };

    function vo(a) {
        Rd(a.document.body.offsetHeight)
    };

    function wo(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };

    function Q() {
        this.B = this.B;
        this.G = this.G
    }
    Q.prototype.B = !1;
    Q.prototype.dispose = function() {
        this.B || (this.B = !0, this.i())
    };
    Q.prototype[ma(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function xo(a, b) {
        yo(a, Ka(wo, b))
    }

    function yo(a, b) {
        a.B ? b() : (a.G || (a.G = []), a.G.push(b))
    }
    Q.prototype.i = function() {
        if (this.G)
            for (; this.G.length;) this.G.shift()()
    };

    function zo(a) {
        a.g.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function Ao(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.g.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.g.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var Bo = class extends Q {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.g = b
        }
        i() {
            zo(this);
            super.i()
        }
    };

    function Co(a) {
        const b = new R(a.getValue());
        a.listen(c => b.g(c));
        return b
    }

    function Do(a, b) {
        const c = new R({
            first: a.P,
            second: b.P
        });
        a.listen(() => c.g({
            first: a.P,
            second: b.P
        }));
        b.listen(() => c.g({
            first: a.P,
            second: b.P
        }));
        return c
    }

    function Eo(...a) {
        const b = [...a],
            c = () => b.every(f => f.P),
            d = new R(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Fo(d)
    }

    function Go(...a) {
        const b = [...a],
            c = () => b.findIndex(f => f.P) !== -1,
            d = new R(c()),
            e = () => {
                d.g(c())
            };
        b.forEach(f => f.listen(e));
        return Fo(d)
    }

    function Fo(a, b = Ho) {
        var c = a.P;
        const d = new R(a.P);
        a.listen(e => {
            b(e, c) || (c = e, d.g(e))
        });
        return d
    }

    function Io(a, b, c) {
        return a.i(d => {
            d === b && c()
        })
    }

    function Jo(a, b, c) {
        if (a.P === b) return c(), () => {};
        const d = {
            dc: null
        };
        d.dc = Io(a, b, () => {
            d.dc && (d.dc(), d.dc = null);
            c()
        });
        return d.dc
    }

    function Ko(a, b, c) {
        Fo(a).listen(d => {
            d === b && c()
        })
    }

    function Lo(a, b) {
        a.l && a.l();
        a.l = b.listen(c => a.g(c), !0)
    }

    function Mo(a, b, c, d) {
        const e = new R(!1);
        var f = null;
        a = a.map(d);
        Io(a, !0, () => {
            f === null && (f = b.setTimeout(() => {
                e.g(!0)
            }, c))
        });
        Io(a, !1, () => {
            e.g(!1);
            f !== null && (b.clearTimeout(f), f = null)
        });
        return Fo(e)
    }

    function No(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.P
        }
    }
    class R {
        constructor(a) {
            this.P = a;
            this.j = new Map;
            this.B = 1;
            this.l = null
        }
        listen(a, b = !1) {
            const c = this.B++;
            this.j.set(c, a);
            b && a(this.P);
            return () => {
                this.j.delete(c)
            }
        }
        i(a) {
            return this.listen(a, !0)
        }
        A() {
            return this.P
        }
        g(a) {
            this.P = a;
            this.j.forEach(b => {
                b(this.P)
            })
        }
        map(a) {
            const b = new R(a(this.P));
            this.listen(c => b.g(a(c)));
            return b
        }
    }

    function Ho(a, b) {
        return a == b
    };

    function Oo(a) {
        return new Po(a)
    }

    function Qo(a, b) {
        Ua(a.g, c => {
            c(b)
        })
    }
    var Ro = class {
        constructor() {
            this.g = []
        }
    };
    class Po {
        constructor(a) {
            this.g = a
        }
        listen(a) {
            this.g.g.push(a)
        }
        map(a) {
            const b = new Ro;
            this.listen(c => Qo(b, a(c)));
            return Oo(b)
        }
        delay(a, b) {
            const c = new Ro;
            this.listen(d => {
                a.setTimeout(() => {
                    Qo(c, d)
                }, b)
            });
            return Oo(c)
        }
    }

    function So(...a) {
        const b = new Ro;
        a.forEach(c => {
            c.listen(d => {
                Qo(b, d)
            })
        });
        return Oo(b)
    };

    function To(a) {
        return Fo(Do(a.g, a.j).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : Uo(c, b)
        }))
    }
    var Wo = class {
        constructor(a) {
            this.i = a;
            this.g = new R(null);
            this.j = new R(null);
            this.l = new Ro;
            this.C = b => {
                this.g.P == null && b.touches.length == 1 && this.g.g(b.touches[0])
            };
            this.A = b => {
                const c = this.g.P;
                c != null && (b = Vo(c, b.changedTouches), b != null && (this.g.g(null), this.j.g(null), Qo(this.l, Uo(c, b))))
            };
            this.B = b => {
                var c = this.g.P;
                c != null && (c = Vo(c, b.changedTouches), c != null && (this.j.g(c), b.preventDefault()))
            }
        }
    };

    function Uo(a, b) {
        return {
            xh: b.pageX - a.pageX,
            yh: b.pageY - a.pageY
        }
    }

    function Vo(a, b) {
        if (b == null) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function Xo(a) {
        return Fo(Do(a.g, a.i).map(b => {
            var c = b.first;
            b = b.second;
            return c == null || b == null ? null : Yo(c, b)
        }))
    }
    var Zo = class {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.g = new R(null);
            this.i = new R(null);
            this.j = new Ro;
            this.G = c => {
                this.g.g(c)
            };
            this.B = c => {
                const d = this.g.P;
                d != null && (this.g.g(null), this.i.g(null), Qo(this.j, Yo(d, c)))
            };
            this.C = c => {
                this.g.P != null && (this.i.g(c), c.preventDefault())
            }
        }
    };

    function Yo(a, b) {
        return {
            xh: b.screenX - a.screenX,
            yh: b.screenY - a.screenY
        }
    };
    var bp = (a, b, c) => {
        const d = new $o(a, b, c);
        return () => ap(d)
    };

    function ap(a) {
        if (a.g) return !1;
        if (a.i == null) return cp(a), !0;
        const b = a.i + a.A - (new Date).getTime();
        if (b < 1) return cp(a), !0;
        dp(a, b);
        return !0
    }

    function cp(a) {
        a.i = (new Date).getTime();
        a.l()
    }

    function dp(a, b) {
        a.g = !0;
        a.j.setTimeout(() => {
            a.g = !1;
            cp(a)
        }, b)
    }
    class $o {
        constructor(a, b, c) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.i = null;
            this.g = !1
        }
    };

    function ep(a) {
        return fp(Xo(a.g), To(a.i))
    }

    function gp(a) {
        return So(Oo(a.g.j), Oo(a.i.l))
    }
    var hp = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function fp(a, b) {
        return Do(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };
    var ip = class {
        constructor() {
            this.cache = new Map
        }
        getBoundingClientRect(a) {
            var b = this.cache.get(a);
            if (b) return b;
            b = a.getBoundingClientRect();
            this.cache.set(a, b);
            return b
        }
    };

    function jp(a) {
        a.A == null && (a.A = new R(a.C.getBoundingClientRect()));
        return a.A
    }
    class kp extends Q {
        constructor(a, b) {
            super();
            this.j = a;
            this.C = b;
            this.F = !1;
            this.A = null;
            this.l = () => {
                jp(this).g(this.C.getBoundingClientRect())
            }
        }
        g() {
            this.F || (this.F = !0, this.j.addEventListener("resize", this.l), this.j.addEventListener("scroll", this.l));
            return jp(this)
        }
        i() {
            this.j.removeEventListener("resize", this.l);
            this.j.removeEventListener("scroll", this.l);
            super.i()
        }
    };

    function lp(a, b) {
        return new mp(a, b)
    }

    function np(a) {
        a.win.requestAnimationFrame(() => {
            a.B || a.j.g(new qd(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function op(a) {
        a.g || (a.g = !0, a.l.observe(a.element));
        return Fo(a.j, rd)
    }
    var mp = class extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.g = !1;
            this.j = new R(new qd(this.element.offsetWidth, this.element.offsetHeight));
            this.l = new ResizeObserver(() => {
                np(this)
            })
        }
        i() {
            this.l.disconnect();
            super.i()
        }
    };

    function pp(a, b) {
        return {
            top: a.g - b,
            right: a.j + a.i,
            bottom: a.g + b,
            left: a.j
        }
    }
    class qp {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
    };

    function rp(a, b) {
        a = a.getBoundingClientRect();
        return new sp(a.top + co(b), a.bottom - a.top)
    }

    function tp(a) {
        return new sp(Math.round(a.g), Math.round(a.i))
    }
    class sp {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getHeight() {
            return this.i
        }
    };
    var vp = (a, b) => {
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new po(c);
        b = b.filter(e => !d.contains(e));
        b.length && (up(a, b), ib(c, b))
    };

    function up(a, b) {
        for (const f of b) {
            b = ve("LINK", a.document);
            b.type = "text/css";
            var c = gd `//fonts.googleapis.com/css`,
                d = Yj(),
                e = b;
            c = hd(c, new Map([
                ["family", f]
            ]));
            if (c instanceof cc) d = c;
            else a: {
                if (c instanceof mc) {
                    d = c;
                    break a
                }
                const g = tc(c);g === nc && d(c);d = g
            }
            e.rel = "stylesheet";
            if ($b("stylesheet", "stylesheet")) {
                e.href = dc(d).toString();
                a: if (d = (e.ownerDocument && e.ownerDocument.defaultView || q).document, d.querySelector) {
                    if ((d = d.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (d = d.nonce || d.getAttribute("nonce")) &&
                        ld.test(d)) break a;
                    d = ""
                } else d = "";
                d && e.setAttribute("nonce", d)
            } else d instanceof cc ? d = dc(d).toString() : (d = wc(d), d = d === void 0 ? nc.toString() : d), e.href = d;
            a.document.head.appendChild(b)
        }
    };

    function wp(a, b) {
        a.F ? b(a.l) : a.j.push(b)
    }

    function xp(a, b) {
        a.F = !0;
        a.l = b;
        a.j.forEach(c => {
            c(a.l)
        });
        a.j = []
    }
    class yp extends Q {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.F = !1;
            this.C = this.l = null;
            this.H = bp(a, 1E3, () => {
                if (this.C != null) {
                    var b = Yn(this.g, !0) - this.C;
                    b > 1E3 && xp(this, b)
                }
            });
            this.A = null
        }
        J(a, b) {
            a == null ? (this.C = a = Yn(this.g, !0), this.g.addEventListener("scroll", this.H), b != null && b(a)) : this.A = this.g.setTimeout(() => {
                this.J(void 0, b)
            }, a)
        }
        i() {
            this.A != null && this.g.clearTimeout(this.A);
            this.g.removeEventListener("scroll", this.H);
            this.j = [];
            this.l = null;
            super.i()
        }
    };
    var zp = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Ap {
        constructor(a = 1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = a * 2147483647 < 0 ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    };

    function Bp(a, b, c) {
        const d = [];
        for (const e of a.g) b(e) ? d.push(e) : c(e);
        return new Cp(d)
    }

    function Dp(a) {
        return a.g.slice(0)
    }

    function Ep(a, b = 1) {
        a = Dp(a);
        const c = new Ap(b);
        qb(a, () => c.next());
        return new Cp(a)
    }
    const Cp = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Cp(Wa(this.g, a))
        }
        apply(a) {
            return new Cp(a(Dp(this)))
        }
        sort(a) {
            return new Cp(Dp(this).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = Dp(this);
            b.push(a);
            return new Cp(b)
        }
    };
    class Fp {
        constructor(a) {
            this.g = new po(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    };

    function Gp(a) {
        return new Hp({
            value: a
        }, null)
    }

    function Ip(a) {
        return new Hp(null, Error(a))
    }

    function Jp(a) {
        try {
            return Gp(a())
        } catch (b) {
            return new Hp(null, b)
        }
    }

    function Kp(a) {
        return a.g != null ? a.getValue() : null
    }

    function Lp(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function Mp(a, b) {
        return a.g != null ? a : new Hp(null, b(a.i))
    }

    function Np(a, b) {
        return Mp(a, c => Error(`${b}${c.message}`))
    }

    function Op(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class Hp {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()), a instanceof Hp ? a : Gp(a)) : this
        }
    };
    class Pp {
        constructor() {
            this.g = new oo
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new po, this.g.set(a, c));
            c.add(b)
        }
    };

    function Qp(a) {
        return !a
    }

    function Rp(a) {
        return b => {
            for (const c of a) c(b)
        }
    };

    function Sp(a) {
        return a !== null
    };
    var Tp = class extends N {
        getId() {
            return C(this, 3)
        }
    };
    class Up {
        constructor(a, {
            Sf: b,
            Fh: c,
            Yi: d,
            eh: e
        }) {
            this.A = a;
            this.j = c;
            this.l = new Cp(b || []);
            this.i = e;
            this.g = d
        }
    };
    var Vp = a => {
            var b = a.split("~").filter(c => c.length > 0);
            a = new oo;
            for (const c of b) b = c.indexOf("."), b == -1 ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Xp = a => {
            var b = Wp(a);
            a = [];
            for (let c of b) b = String(c.ic), a.push(c.yb + "." + (b.length <= 20 ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Wp = a => {
            const b = [],
                c = a.l;
            c && c.g.length && b.push({
                yb: "a",
                ic: Yp(c)
            });
            a.j != null && b.push({
                yb: "as",
                ic: a.j
            });
            a.g != null && b.push({
                yb: "i",
                ic: String(a.g)
            });
            a.i != null && b.push({
                yb: "rp",
                ic: String(a.i)
            });
            b.sort(function(d, e) {
                return d.yb.localeCompare(e.yb)
            });
            b.unshift({
                yb: "t",
                ic: Zp(a.A)
            });
            return b
        },
        Zp = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Yp = a => {
            a = Dp(a).map($p);
            a = JSON.stringify(a);
            return Ae(a)
        },
        $p = a => {
            const b = {};
            C(a, 7) != null && (b.q = C(a, 7));
            Ai(a, 2) != null &&
                (b.o = Ai(a, 2));
            Ai(a, 5) != null && (b.p = Ai(a, 5));
            return b
        };

    function aq() {
        var a = new bq;
        return Rh(a, 2, Ig(1))
    }
    var bq = class extends N {
        setLocation(a) {
            return Rh(this, 1, Ig(a))
        }
        g() {
            return Ki(this, 1)
        }
    };

    function cq(a) {
        const b = [].slice.call(arguments).filter(zb(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.ag || []);
            d = Object.assign(d, e.xc())
        });
        return new dq(c, d)
    }

    function eq(a) {
        switch (a) {
            case 1:
                return new dq(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new dq(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new dq(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new dq(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function fq(a) {
        return a == null ? null : new dq(null, {
            google_ml_rank: a
        })
    }

    function gq(a) {
        return a == null ? null : new dq(null, {
            google_placement_id: Xp(a)
        })
    }

    function hq({
        ni: a,
        Hi: b = null
    }) {
        if (a == null) return null;
        a = {
            google_daaos_ts: a
        };
        b != null && (a.google_erank = b + 1);
        return new dq(null, a)
    }
    class dq {
        constructor(a, b) {
            this.ag = a;
            this.g = b
        }
        xc() {
            return this.g
        }
    };
    var iq = class extends N {};
    var jq = class extends N {};
    var kq = class extends N {
        B() {
            return C(this, 2)
        }
        A() {
            return C(this, 5)
        }
        g() {
            return oi(this, jq, 3, w())
        }
        j() {
            return Ai(this, 4)
        }
        l() {
            return Wh(this, 6)
        }
        C() {
            return Th(this, iq, 7)
        }
    };
    var lq = class extends N {};
    var mq = class extends N {
        l() {
            return J(this, 12, !1)
        }
        j() {
            return Zg(Oh(this, 13))
        }
        g() {
            const a = ti(this, 23);
            return a == null ? void 0 : a
        }
    };
    var nq = class extends N {
        constructor() {
            super()
        }
    };
    var oq = class extends N {
        g() {
            return Bi(this, 3)
        }
        j() {
            return ti(this, 6)
        }
    };
    var pq = class extends N {};
    var qq = class extends N {};
    var rq = class extends N {
        ja() {
            return x(this, Tp, 1)
        }
        g() {
            return Bi(this, 2)
        }
    };
    var sq = class extends N {};
    var tq = class extends N {};
    var uq = class extends N {
            getName() {
                return C(this, 4)
            }
        },
        vq = [1, 2, 3];
    var wq = class extends N {
        g() {
            return x(this, oq, 10)
        }
    };
    var xq = class extends N {
        g() {
            return ti(this, 2)
        }
        j() {
            return ti(this, 3)
        }
    };
    var yq = class extends N {
        g() {
            return Zg(Oh(this, 1))
        }
    };
    var zq = class extends N {};
    var Aq = class extends N {
        g() {
            return Di(this, 1)
        }
    };
    var Bq = class extends N {
        g() {
            return K(this, 1)
        }
        j() {
            return K(this, 2)
        }
    };
    var Cq = class extends N {};
    var Dq = class extends N {
        l() {
            return J(this, 1)
        }
        A() {
            return J(this, 3)
        }
        B() {
            return J(this, 7)
        }
        g() {
            return J(this, 4)
        }
        j() {
            return J(this, 5)
        }
    };
    var Eq = class extends N {
        j() {
            return x(this, Bq, 5)
        }
        g() {
            return x(this, Aq, 6)
        }
        A() {
            return K(this, 8)
        }
        B() {
            return J(this, 9)
        }
        C() {
            return K(this, 13)
        }
        G() {
            return J(this, 11)
        }
        l() {
            return x(this, Dq, 12)
        }
    };
    var Fq = class extends N {};
    var Gq = class extends N {
        g() {
            return x(this, Fq, 1)
        }
    };
    var Hq = class extends N {};
    var Iq = class extends N {};
    var Jq = class extends N {
        g(a) {
            return oi(this, Iq, 1, w(a))
        }
    };
    var Kq = class extends N {
        setProperty(a) {
            return Qi(this, 1, a)
        }
        getValue() {
            return C(this, 2)
        }
    };
    var Lq = class extends N {};
    var Mq = class extends N {};
    var Nq = class extends N {
        ja() {
            return x(this, Tp, 1)
        }
        g() {
            return Bi(this, 2)
        }
    };
    var Oq = class extends N {};
    var Pq = class extends N {};
    var Qq = class extends N {
        g() {
            return Xh(this, 6, dh, w())
        }
    };
    var Rq = class extends N {
        Oe() {
            return Th(this, Pq, 2)
        }
    };
    var Sq = class extends N {
        g() {
            return Di(this, 1)
        }
    };
    var Tq = class extends N {};
    var Vq = class extends N {
            g() {
                return Hi(this, Tq, 2, Uq)
            }
        },
        Uq = [1, 2];
    var Wq = class extends N {
        g() {
            return x(this, Vq, 3)
        }
    };
    var Xq = class extends N {};
    var Yq = class extends N {
        g() {
            return oi(this, Xq, 1, w())
        }
    };
    var Zq = class extends N {
        g() {
            return Xh(this, 1, dh, w())
        }
        j() {
            return x(this, Wq, 3)
        }
    };
    var $q = Wi(class extends N {
        g() {
            return x(this, mq, 15)
        }
    });
    var ar = class extends N {},
        br = Wi(ar);

    function cr(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? br(b) : null
        } catch (b) {
            return null
        }
    }

    function dr(a, b) {
        if (a.He !== void 0) {
            var c = cr(b);
            c || (c = new ar);
            a.He !== void 0 && Li(c, 2, a.He);
            a = Date.now() + 864E5;
            Number.isFinite(a) && Oi(c, 1, Math.round(a));
            c = Ti(c);
            try {
                b.localStorage.setItem("google_ama_settings", c)
            } catch (d) {}
        } else if ((c = cr(b)) && Zg(Oh(c, 1)) < Date.now()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (d) {}
    };
    var er = {
            qb: "ama_success",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        fr = {
            qb: "ama_failure",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        gr = {
            qb: "ama_coverage",
            Pa: .1,
            Ua: !0,
            rb: !0
        },
        hr = {
            qb: "ama_opt",
            Pa: .1,
            Ua: !0,
            rb: !1
        },
        ir = {
            qb: "ama_auto_rs",
            Pa: 1,
            Ua: !0,
            rb: !1
        },
        jr = {
            qb: "ama_improv",
            Pa: .1,
            Ua: !0,
            rb: !1
        },
        kr = {
            qb: "ama_constraints",
            Pa: 0,
            Ua: !0,
            rb: !0
        };

    function lr(a, b) {
        mr(a.i, ir, { ...b,
            evt: "place",
            vh: P(a.win),
            eid: a.g.g() ? .g() || 0,
            hl: a.g.j() ? .g() || ""
        })
    }

    function nr(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && Pk(c.stack, "") || "");
        lr(a, b)
    }
    var or = class {
        constructor(a, b, c) {
            this.win = a;
            this.i = b;
            this.g = c
        }
    };
    const pr = ["-webkit-text-fill-color"];

    function qr(a) {
        if (Ud) {
            {
                const c = we(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = rr(a)
                } else a = sr()
            }
        } else a = sr();
        return a
    }
    var sr = () => {
        const a = {
            all: "initial"
        };
        Ua(pr, b => {
            a[b] = "unset"
        });
        return a
    };

    function rr(a) {
        Ua(pr, b => {
            delete a[b]
        });
        return a
    };
    var tr = class {
        constructor(a) {
            this.g = a
        }
        Ja(a) {
            const b = a.document.createElement("div");
            u(b, qr(a));
            u(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.g);
            const c = a.document.createElement("div");
            u(c, qr(a));
            u(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };

    function ur(a) {
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
    }

    function vr(a) {
        return jo(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var S = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        T = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        wr = class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        },
        xr = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        },
        yr = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var zr = new S(1321, !0),
        Ar = new T(619278254, 10),
        Br = new S(1325, !0),
        Cr = new S(1310, !0),
        Dr = new S(1355, !0),
        Er = new S(1351, !0),
        Fr = new T(1130, 100),
        Gr = new S(1331, !0),
        Hr = new S(1352, !0),
        Ir = new S(1330, !0),
        Jr = new T(1339, .3),
        Kr = new T(1032, 200),
        Lr = new wr(14),
        Mr = new T(1224, .01),
        Nr = new S(654220660),
        Or = new T(1346, 6),
        Pr = new T(1347, 3),
        Qr = new S(1320, !0),
        Rr = new S(1367),
        Sr = new S(1260),
        Tr = new S(1239),
        Ur = new S(1196),
        Vr = new S(1160),
        Wr = new S(316),
        Xr = new S(1290),
        Yr = new S(334),
        Zr = new T(1263, -1),
        $r = new T(54),
        as = new T(1323, -1),
        bs =
        new T(1265, -1),
        cs = new T(1264, -1),
        ds = new S(1291),
        es = new S(1267, !0),
        fs = new S(1266),
        gs = new S(313),
        hs = new T(66, -1),
        is = new T(65, -1),
        js = new S(1256),
        ks = new S(369),
        ls = new S(1241, !0),
        ms = new S(368),
        ns = new S(1300, !0),
        os = new xr(1273, ["en", "de"]),
        ps = new S(1223, !0),
        qs = new xr(1261, ["44786015", "44786016"]),
        rs = new S(1309),
        ss = new S(1250),
        ts = new S(1151),
        us = new S(1361),
        vs = new S(1349),
        ws = new T(1072, .75),
        xs = new S(290),
        ys = new S(1222),
        zs = new S(1354),
        As = new S(1341),
        Bs = new S(1237),
        Cs = new T(1366),
        Ds = new T(1365),
        Es = new T(1364,
            300),
        Fs = new S(1350),
        Gs = new S(1356),
        Hs = new S(626390500),
        Is = new yr(627094447, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30 34".split(" ")),
        Js = new T(643258048),
        Ks = new T(643258049),
        Ls = new T(579884443, .7),
        Ms = new wr(622128249),
        Ns = new wr(622128250),
        Os = new yr(641845510, ["33"]),
        Ps = new S(566279275),
        Qs = new S(622128248, !0),
        Rs = new S(566279276),
        Ss = new wr(589752731),
        Ts = new wr(589752730),
        Us = new yr(635821288, ["30_19"]),
        Vs = new yr(631402549),
        Ws = new yr(636146137, ["30_6"]),
        Xs = new S(579884441, !0),
        Ys = new S(636570127),
        Zs = new yr(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 30 34".split(" ")),
        $s = new T(579884442, .7),
        at = new S(657249372),
        bt = new T(652486359),
        ct = new T(626062006, 670),
        dt = new T(658370512),
        et = new S(626062008),
        ft = new S(643258050),
        gt = new S(506914611),
        ht = new S(655991266, !0),
        it = new S(597181299),
        jt = new S(626062007),
        kt = new S(658722541, !0),
        lt = new S(1120),
        mt = new yr(630330362),
        nt = new T(618163195, 15E3),
        ot = new T(624950166, 15E3),
        pt = new T(623405755, 300),
        qt = new T(508040914, 100),
        rt = new T(547455356, 49),
        st = new T(650548030, 5),
        tt = new T(650548032, 300),
        ut = new T(650548031, 2),
        vt = new T(655966487),
        wt = new T(655966486),
        xt = new T(561668774, .1),
        yt = new T(469675170, 6E4),
        zt = new S(562896595),
        At = new S(644381219),
        Bt = new S(644381220),
        Ct = new S(661251189),
        Dt = new S(570863962, !0),
        Et = new wr(570879859, "control_1\\.\\d"),
        Ft = new T(570863961, 50),
        Gt = new S(570879858, !0),
        Ht = new S(570804360, !0),
        It = new T(63, 30),
        Jt = new S(1134),
        Kt = new S(562874197),
        Lt = new S(562874196),
        Mt = new S(555237685, !0),
        Nt = new S(45460956),
        Ot = new S(45414947, !0),
        Pt = new T(472785970, 500),
        Qt = new T(550718588, 250),
        Rt = new S(45545710),
        St = new T(624290870),
        Tt = new T(629793592, .8),
        Ut = new S(506738118),
        Vt = new S(77),
        Wt = new S(78),
        Xt = new S(83),
        Yt = new S(80),
        Zt = new S(76),
        $t = new S(84),
        au = new S(1973),
        bu = new S(188),
        cu = new S(485990406);
    var du = class {
        constructor() {
            const a = {};
            this.j = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.B = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.l = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.i = () => {}
        }
    };

    function U(a) {
        return O(du).j(a.g, a.defaultValue)
    }

    function V(a) {
        return O(du).A(a.g, a.defaultValue)
    }

    function eu(a) {
        return O(du).B(a.g, a.defaultValue)
    }

    function fu(a) {
        return O(du).l(a.g, a.defaultValue)
    };

    function gu(a, b) {
        a = je(new Yd(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function hu(a, b, c) {
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
        ur(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function iu(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            ur(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var ku = (a, b, c, d = 0) => {
            var e = ju(b, c, d);
            if (e.J) {
                for (c = b = e.J; c = e.pd(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Qd
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            hu(a, e.anchor, e.position)
        },
        lu = (a, b, c, d = 0) => {
            U(gs) ? ku(a, b, c, d) : hu(a, b, c)
        };

    function ju(a, b, c) {
        const d = f => {
                f = mu(f);
                return f == null ? !1 : c < f
            },
            e = f => {
                f = mu(f);
                return f == null ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    J: nu(a.previousSibling, d),
                    pd: f => nu(f.previousSibling, d),
                    Qd: 0
                };
            case 2:
                return {
                    J: nu(a.lastChild, d),
                    pd: f => nu(f.previousSibling, d),
                    Qd: 0
                };
            case 3:
                return {
                    J: nu(a.nextSibling, e),
                    pd: f => nu(f.nextSibling, e),
                    Qd: 3
                };
            case 1:
                return {
                    J: nu(a.firstChild, e),
                    pd: f => nu(f.nextSibling, e),
                    Qd: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function mu(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function nu(a, b) {
        return a && b(a) ? a : null
    };

    function ou(a, b) {
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

    function pu(a, b) {
        const c = a.google_reactive_ad_format === 40,
            d = a.google_reactive_ad_format === 16;
        return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
    }

    function qu(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function ru(a, b, c) {
        a = ou(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function su(a, b) {
        b = b.parentElement;
        return b ? (a = we(b, a)) ? a.direction : "" : ""
    }

    function tu(a, b, c) {
        if (ru(a, b, c) !== 0) {
            qu(b, c, "0px");
            var d = ru(a, b, c);
            qu(b, c, `${-1*d}px`);
            a = ru(a, b, c);
            a !== 0 && a !== d && qu(b, c, `${d/(a-d)*d}px`)
        }
    };
    const uu = RegExp("(^| )adsbygoogle($| )");

    function vu(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Ad(d.property);
            a[e] = d.value
        }
    }

    function wu(a, b, c, d, e, f) {
        a = xu(a, e);
        a.ua.setAttribute("data-ad-format", d ? d : "auto");
        yu(a, b, c, f);
        return a
    }

    function zu(a, b, c = null) {
        a = xu(a, {});
        yu(a, b, null, c);
        return a
    }

    function yu(a, b, c, d) {
        var e = [];
        if (d = d && d.ag) a.nb.className = d.join(" ");
        a = a.ua;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function xu(a, b) {
        const c = gu(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.Pd && vu(d, b.Pd);
        a = je(new Yd(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Bf && (d.marginTop = b.Bf);
        b.ue && (d.marginBottom = b.ue);
        b.Yb && vu(d, b.Yb);
        c.appendChild(a);
        return {
            nb: c,
            ua: a
        }
    }

    function Au(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.xc();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function Bu(a) {
        const b = vr(a.document);
        Ua(b, function(c) {
            const d = Cu(a, c);
            var e;
            if (e = d) {
                e = (e = ou(c, a)) ? e.y : 0;
                const f = P(a);
                e = !(e < f)
            }
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), Au(a, c))
        })
    }

    function Cu(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in rb) a[rb[c]] && (b[rb[c]] = a[rb[c]]);
        return b
    };
    var Eu = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; d < 10 && b;) {
            if (b == c) return !0;
            if (Du(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const Du = (a, b) => {
        if (b.nodeType == 3) return b.nodeType == 3 ? (b = b.data, a = b.indexOf("&") != -1 ? xd(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (b.nodeType == 1) {
            var c = a.getComputedStyle(b);
            if (c.opacity == "0" || c.display == "none" || c.visibility == "hidden") return !1;
            if ((c = b.tagName) && qo.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Du(a, b[c])) return !0
        }
        return !1
    };
    var Fu = a => {
        if (a >= 460) return a = Math.min(a, 1200), Math.ceil(a < 800 ? a / 4 : 200);
        a = Math.min(a, 600);
        return a <= 420 ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const Gu = class {
        constructor() {
            this.g = {
                clearBoth: !0
            }
        }
        i(a, b, c, d) {
            return wu(d.document, a, null, null, this.g, b)
        }
        j(a) {
            return Fu(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function Hu(a) {
        var b = [];
        io(a.getElementsByTagName("p"), function(c) {
            Iu(c) >= 100 && b.push(c)
        });
        return b
    }

    function Iu(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        io(a.childNodes, function(c) {
            b += Iu(c)
        });
        return b
    }

    function Ju(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Ku(a, b) {
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

    function Lu(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.l)
        } catch (g) {}
        if (!c.length) return [];
        b = hb(c);
        b = Ku(a, b);
        typeof a.i === "number" && (c = a.i, c < 0 && (c += b.length), b = c >= 0 && c < b.length ? [b[c]] : []);
        if (typeof a.j === "number") {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Hu(b[d]),
                    f = a.j;
                f < 0 && (f += e.length);
                f >= 0 && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const Mu = class {
        constructor(a, b, c, d) {
            this.l = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.l,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    class Nu {
        constructor() {
            var a = gd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.A = Math.random();
            this.j = this.ba;
            this.B = a
        }
        tf(a) {
            this.g = a
        }
        l(a) {
            this.i = a
        }
        ba(a, b, c = .01, d, e = "jserror") {
            if ((this.i ? this.A : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new sk(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            q.google_js_errors = q.google_js_errors || [];
            q.google_js_errors.push(b);
            q.error_rep_loaded || (ue(q.document, this.B), q.error_rep_loaded = !0);
            return !1
        }
        vb(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.j(a, d, .01, c, "jserror")) throw d;
            }
        }
        Ca(a, b, c, d) {
            return (...e) => this.vb(a, () => b.apply(c, e), d)
        }
        pa(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.ba(a, d instanceof Error ? d : Error(d), void 0, c || this.g || void 0)
            })
        }
    };
    const Ou = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var Pu = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = typeof queueMicrotask !== "undefined";
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = zk();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (m) {
                    l = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && Ou({
                        label: a.toString(),
                        value: h,
                        duration: (zk() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        Qu = (a, b, c, d = !1) => Pu(a, b, (e, f) => {
            (new Nu).ba(e, f)
        }, c, d);

    function Ru(a, b, c) {
        return Pu(a, b, void 0, c, !0).apply()
    }

    function Su(a, b) {
        return Qu(754, a, b, !0).apply()
    }

    function Tu(a) {
        if (!a) return null;
        var b = C(a, 7);
        if (C(a, 1) || a.getId() || Xh(a, 4, dh, w()).length > 0) {
            var c = C(a, 3),
                d = C(a, 1),
                e = Xh(a, 4, dh, w(ag));
            b = Ai(a, 2);
            var f = Ai(a, 5);
            a = Uu(Bi(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Ju(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Ju(e[c]);
            b = (e = g) ? new Mu(e, b, f, a) : null
        } else b = b ? new Mu(b, Ai(a, 2), Ai(a, 5), Uu(Bi(a, 6))) : null;
        return b
    }
    var Vu = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Uu(a) {
        return a == null ? a : Vu[a]
    }

    function Wu(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = C(a[c], 1),
                e = C(a[c], 2);
            if (d && e != null) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Xu(a, b) {
        var c = {};
        a && (c.Bf = C(a, 1), c.ue = C(a, 2), c.clearBoth = !!ti(a, 3));
        b && (c.Pd = Wu(oi(b, Kq, 3, w(ag))), a = oi(b, Kq, 4, w(ag)), c.Yb = Wu(a));
        return c
    }
    var Yu = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Zu = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const $u = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            return wu(d.document, a, null, null, this.g, b)
        }
        j() {
            return null
        }
    };
    class av {
        constructor(a) {
            this.i = a
        }
        g(a) {
            a = Math.floor(a.i);
            const b = Fu(a);
            return new dq(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.i,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const bv = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        i() {
            return this.l
        }
        g() {
            return this.j
        }
    };
    const cv = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            var e = oi(this.g, Lq, 9, w()).length > 0 ? oi(this.g, Lq, 9, w())[0] : null,
                f = Xu(x(this.g, Mq, 3), e);
            if (!e) return null;
            if (e = C(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = je(new Yd(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                g == "A" && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Pd && vu(c.style, f.Pd);
                d = je(new Yd(d), "INS");
                f.Yb && vu(d.style, f.Yb);
                c.appendChild(d);
                f = {
                    nb: c,
                    ua: d
                };
                f.ua.setAttribute("data-ad-type", "text");
                f.ua.setAttribute("data-native-settings-key",
                    e);
                yu(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        j() {
            var a = oi(this.g, Lq, 9, w()).length > 0 ? oi(this.g, Lq, 9, w())[0] : null;
            if (!a) return null;
            a = oi(a, Kq, 3, w());
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (C(c, 1) == "height" && parseInt(C(c, 2), 10) > 0) return parseInt(C(c, 2), 10)
            }
            return null
        }
    };
    const dv = class {
        constructor(a) {
            this.g = a
        }
        i(a, b, c, d) {
            if (!this.g) return null;
            const e = this.g.google_ad_format || null,
                f = this.g.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    k !== "width" && k !== "height" && g.push({
                        property: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    Yb: g
                }
            } else c = {};
            a = wu(d.document, a, f, e, c, b);
            a.ua.setAttribute("data-pub-vars", JSON.stringify(this.g));
            return a
        }
        j() {
            return this.g ? parseInt(this.g.google_ad_height, 10) || null : null
        }
        xc() {
            return this.g
        }
    };
    class ev {
        constructor(a) {
            this.i = a
        }
        g() {
            return new dq([], {
                google_ad_type: this.i,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const fv = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g() {
            return this.j
        }
        i(a) {
            a = Lu(this.l, a.document);
            return a.length > 0 ? a[0] : null
        }
    };

    function gv(a, b, c) {
        const d = [];
        for (let r = 0; r < a.length; r++) {
            var e = a[r];
            var f = r,
                g = b,
                h = c,
                k = e.ja();
            if (k) {
                var l = Tu(k);
                if (l) {
                    var m = Bi(e, 2);
                    m = Yu[m];
                    var n = m === void 0 ? null : m;
                    if (n === null) e = null;
                    else {
                        m = (m = x(e, Mq, 3)) ? ti(m, 3) : null;
                        l = new fv(l, n);
                        n = Xh(e, 10, Jg, w()).slice(0);
                        Ai(k, 5) != null && n.push(1);
                        var p = h ? h : {};
                        h = Ai(e, 12);
                        k = Th(e, bq, 4) ? x(e, bq, 4) : null;
                        Bi(e, 8) == 1 ? (p = p.Rh || null, e = new hv(l, new $u(Xu(x(e, Mq, 3), null)), p, m, 0, n, k, g, f, h, e)) : e = Bi(e, 8) == 2 ? new hv(l, new cv(e), p.Zi || new ev("text"), m, 1, n, k, g, f, h, e) : null
                    }
                } else e =
                    null
            } else e = null;
            e !== null && d.push(e)
        }
        return d
    }

    function iv(a) {
        return a.A
    }

    function jv(a) {
        return a.Ea
    }

    function kv(a) {
        return U(Ur) ? (a.O || (a.O = a.F.i(a.j)), a.O) : a.F.i(a.j)
    }

    function lv(a) {
        var b = a.H;
        a = a.j.document.createElement("div");
        U(Ur) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function mv(a) {
        return a.C instanceof dv ? a.C.xc() : null
    }

    function nv(a, b, c) {
        ko(a.I, b) || a.I.set(b, []);
        a.I.get(b).push(c)
    }

    function ov(a, b) {
        a.A = !0;
        U(Ur) && (a.i && iu(a.i), a.i = null);
        b != null && a.ca.push(b)
    }

    function pv(a) {
        return gu(a.j.document, a.H || !1)
    }

    function qv(a) {
        return a.C.j(a.j)
    }

    function rv(a, b = null, c = null) {
        return new hv(a.F, b || a.C, c || a.R, a.H, a.Lb, a.Ac, a.Xd, a.j, a.ta, a.G, a.l, a.B, a.ia)
    }
    class hv {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, p = null) {
            this.F = a;
            this.C = b;
            this.R = c;
            this.H = d;
            this.Lb = e;
            this.Ac = f;
            this.Xd = g ? g : new bq;
            this.j = h;
            this.ta = k;
            this.G = l;
            this.l = m;
            (a = !m) || (a = !(m.ja() && Ai(m.ja(), 5) != null));
            this.Ea = !a;
            this.B = n;
            this.ia = p;
            this.ca = [];
            this.A = !1;
            this.I = new oo;
            this.O = this.i = null
        }
        da() {
            return this.j
        }
        g() {
            return this.F.g()
        }
    };

    function sv(a, b, c, d, e, f) {
        const g = aq();
        return new hv(new bv(c, e), new Gu, new av(a), !0, 2, [], g, d, null, null, null, b, f)
    }

    function tv(a, b, c, d, e) {
        const f = aq();
        return new hv(new bv(b, d), new $u({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var uv = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        da() {
            return this.win
        }
        A(a) {
            return sv(a, this.articleStructure, this.element, this.win, 3, null)
        }
        j() {
            return tv(this.articleStructure, this.element, this.win, 3, null)
        }
    };
    const vv = {
        TABLE: {
            mc: new Fp([1, 2])
        },
        THEAD: {
            mc: new Fp([0, 3, 1, 2])
        },
        TBODY: {
            mc: new Fp([0, 3, 1, 2])
        },
        TR: {
            mc: new Fp([0, 3, 1, 2])
        },
        TD: {
            mc: new Fp([0, 3])
        }
    };

    function wv(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Ta(e, f), c < 0 || b.push(new xv(a, [f], c, f, 3, fe(f).trim(), d));
        return b
    }

    function yv(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (l.nodeType == 1 || l.nodeType == 3) {
                if (l.nodeType != 1) var m = null;
                else l.tagName == "BR" ? m = l : (m = c.getComputedStyle(l).getPropertyValue("display"), m = m == "inline" || m == "inline-block" ? null : l);
                m ? (d.length && k && e.push(new xv(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = fe(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new xv(a, d, h, b, 2, k, c));
        return e
    }

    function zv(a, b) {
        return a.g - b.g
    }
    class xv {
        constructor(a, b, c, d, e, f, g) {
            this.l = a;
            this.Zc = b.slice(0);
            this.g = c;
            this.fe = d;
            this.ge = e;
            this.B = f;
            this.i = g
        }
        da() {
            return this.i
        }
        A(a) {
            return sv(a, this.l, this.fe, this.i, this.ge, this.g)
        }
        j() {
            return tv(this.l, this.fe, this.i, this.ge, this.g)
        }
    };

    function Av(a) {
        return eb(a.B ? yv(a.i, a.g, a.j) : [], a.A ? wv(a.i, a.A, a.g, a.j) : []).filter(b => {
            var c = b.fe.tagName;
            c ? (c = vv[c.toUpperCase()], b = c != null && c.mc.contains(b.ge)) : b = !1;
            return !b
        })
    }
    class Bv {
        constructor(a, b, c) {
            this.g = a;
            this.A = b.Wc;
            this.B = b.mg;
            this.i = b.articleStructure;
            this.j = c;
            this.l = b.Rf
        }
    };

    function Cv(a, b) {
        if (!b) return !1;
        const c = Ea(b),
            d = a.g.get(c);
        if (d != null) return d;
        if (b.nodeType == 1 && (b.tagName == "UL" || b.tagName == "OL") && a.i.getComputedStyle(b).getPropertyValue("list-style-type") != "none") return a.g.set(c, !0), !0;
        b = Cv(a, b.parentNode);
        a.g.set(c, b);
        return b
    }

    function Dv(a, b) {
        return $a(b.Zc, c => Cv(a, c))
    }
    class Ev {
        constructor(a) {
            this.g = new oo;
            this.i = a
        }
    };
    class Fv {
        constructor(a, b) {
            this.l = a;
            this.g = [];
            this.i = [];
            this.j = b
        }
    };
    var Hv = (a, {
            zg: b = !1,
            uf: c = !1,
            Ig: d = c || U(Tr) ? 2 : 3,
            sf: e = null
        } = {}) => {
            a = Av(a);
            return Gv(a, {
                zg: b,
                uf: c,
                Ig: d,
                sf: e
            })
        },
        Gv = (a, {
            zg: b = !1,
            uf: c = !1,
            Ig: d = c || U(Tr) ? 2 : 3,
            sf: e = null
        } = {}) => {
            if (d < 2) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort(zv);
            a = [];
            b = new Fv(b, e);
            for (const g of f) {
                e = {
                    Rd: g,
                    rd: g.B.length < 51 ? !1 : b.j != null ? !Dv(b.j, g) : !0
                };
                if (b.l || e.rd) b.g.length ? (f = b.g[b.g.length - 1].Rd, f = Eu(f.da(), f.Zc[f.Zc.length - 1], e.Rd.Zc[0])) : f = !0, f ? (b.g.push(e), e.rd && b.i.push(e.Rd)) : (b.g = [e], b.i = e.rd ? [e.Rd] : []);
                if (b.i.length >= d) {
                    e = b;
                    f = c || U(Tr) ? 0 : 1;
                    if (f < 0 || f >= e.i.length) e = null;
                    else {
                        for (f = e.i[f]; e.g.length && !e.g[0].rd;) e.g.shift();
                        e.g.shift();
                        e.i.shift();
                        e = f
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var Jv = (a, b, c = !1) => {
            a = Iv(a, b);
            const d = new Ev(b);
            return zp(a, e => Hv(e, {
                uf: c,
                sf: d
            }))
        },
        Kv = (a, b) => {
            a = Iv(a, b);
            const c = new Ev(b);
            return zp(a, d => {
                if (d.l) {
                    var e = d.i;
                    var f = d.j;
                    d = d.g.querySelectorAll(d.l);
                    var g = [];
                    for (var h of d) g.push(new uv(e, h, f));
                    e = g
                } else e = [];
                d = e.slice(0);
                if (d.length) {
                    e = [];
                    f = d[0];
                    for (g = 1; g < d.length; g++) {
                        const m = d[g];
                        h = f;
                        b: {
                            if (h.element.hasAttributes())
                                for (l of h.element.attributes)
                                    if (l.name.toLowerCase() === "style" && l.value.toLowerCase().includes("background-image")) {
                                        var k = !0;
                                        break b
                                    }
                            k =
                            h.element.tagName;k = k === "IMG" || k === "SVG"
                        }(k || h.element.textContent.length > 1) && !Cv(c, f.element) && Eu(m.da(), f.element, m.element) && e.push(f);
                        f = m
                    }
                    var l = e
                } else l = [];
                return l
            })
        },
        Iv = (a, b) => {
            const c = new oo;
            a.forEach(d => {
                var e = Tu(x(d, Tp, 1));
                if (e) {
                    var f = e.toString();
                    ko(c, f) || c.set(f, {
                        articleStructure: d,
                        Kh: e,
                        Wc: null,
                        mg: !1,
                        Rf: null
                    });
                    e = c.get(f);
                    (f = (f = x(d, Tp, 2)) ? C(f, 7) : null) ? e.Wc = e.Wc ? e.Wc + "," + f : f: e.mg = !0;
                    d = x(d, Tp, 4);
                    e.Rf = d ? C(d, 7) : null
                }
            });
            return no(c).map(d => {
                const e = Lu(d.Kh, b.document);
                return e.length ? new Bv(e[0],
                    d, b) : null
            }).filter(d => d != null)
        };
    var Lv = a => a ? .google_ad_slot ? Gp(new Up(1, {
            Fh: a.google_ad_slot
        })) : Ip("Missing dimension when creating placement id"),
        Nv = a => {
            switch (a.Lb) {
                case 0:
                case 1:
                    var b = a.l;
                    b == null ? a = null : (a = b.ja(), a == null ? a = null : (b = Bi(b, 2), a = b == null ? null : new Up(0, {
                        Sf: [a],
                        eh: b
                    })));
                    return a != null ? Gp(a) : Ip("Missing dimension when creating placement id");
                case 2:
                    return a = Mv(a), a != null ? Gp(a) : Ip("Missing dimension when creating placement id");
                default:
                    return Ip("Invalid type: " + a.Lb)
            }
        };
    const Mv = a => {
        if (a == null || a.B == null) return null;
        const b = x(a.B, Tp, 1),
            c = x(a.B, Tp, 2);
        if (b == null || c == null) return null;
        const d = a.ia;
        if (d == null) return null;
        a = a.g();
        return a == null ? null : new Up(0, {
            Sf: [b, c],
            Yi: d,
            eh: Zu[a]
        })
    };

    function Ov(a) {
        const b = mv(a.ha);
        return (b ? Lv(b) : Nv(a.ha)).map(c => Xp(c))
    }

    function Pv(a) {
        a.g = a.g || Ov(a);
        return a.g
    }

    function Qv(a, b) {
        if (a.ha.A) throw Error("AMA:AP:AP");
        lu(b, a.ja(), a.ha.g());
        ov(a.ha, b)
    }
    const Rv = class {
        constructor(a, b, c) {
            this.ha = a;
            this.i = b;
            this.la = c;
            this.g = null
        }
        ja() {
            return this.i
        }
        fill(a, b) {
            var c = this.ha;
            (a = c.C.i(a, b, this.i, c.j)) && Qv(this, a.nb);
            return a
        }
    };

    function Sv(a, b) {
        return Su(() => {
            if (U(Ur)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = kv(f);
                    if (g) {
                        if (!f.i && !f.A) {
                            a: {
                                var h = null;
                                try {
                                    var k = kv(f);
                                    if (k) {
                                        h = lv(f);
                                        lu(h, k, f.g());
                                        var l = h;
                                        break a
                                    }
                                    l = null;
                                    break a
                                } catch (r) {
                                    throw iu(h), r;
                                }
                                l = void 0
                            }
                            f.i = l
                        }(h = f.i) && d.push({
                            Aj: f,
                            anchorElement: g,
                            Ji: h
                        })
                    }
                }
                if (d.length > 0)
                    for (l = co(b), k = eo(b), e = 0; e < d.length; e++) {
                        const {
                            Aj: r,
                            anchorElement: y,
                            Ji: D
                        } = d[e];
                        f = Tv(D, k, l);
                        c.push(new Rv(r, y, f))
                    }
                l = c
            } else {
                l = [];
                k = [];
                try {
                    const r = [];
                    for (let y = 0; y < a.length; y++) {
                        var m = a[y],
                            n = kv(m);
                        n && r.push({
                            Vg: m,
                            anchorElement: n
                        })
                    }
                    for (n = 0; n < r.length; n++) {
                        m = k;
                        g = m.push; {
                            var p = r[n];
                            const y = p.anchorElement,
                                D = p.Vg,
                                E = lv(D);
                            try {
                                lu(E, y, D.g()), h = E
                            } catch (G) {
                                throw iu(E), G;
                            }
                        }
                        g.call(m, h)
                    }
                    c = co(b);
                    d = eo(b);
                    for (g = 0; g < k.length; g++) e = Tv(k[g], d, c), f = r[g], l.push(new Rv(f.Vg, f.anchorElement, e))
                } finally {
                    for (c = 0; c < k.length; c++) iu(k[c])
                }
            }
            return l
        }, b)
    }

    function Tv(a, b, c) {
        a = a.getBoundingClientRect();
        return new qp(a.left + b, a.top + c, a.right - a.left)
    };
    const Kx = {
            1: "0.5vp",
            2: "300px"
        },
        Lx = {
            1: 700,
            2: 1200
        },
        Mx = {
            [1]: {
                mh: "3vp",
                wf: "1vp",
                lh: "0.3vp"
            },
            [2]: {
                mh: "900px",
                wf: "300px",
                lh: "90px"
            }
        };

    function Nx(a, b, c) {
        var d = Ox(a),
            e = P(a) || Lx[d],
            f = void 0;
        c && (f = (c = (c = Px(oi(c, kq, 2, w()), d)) ? x(c, iq, 7) : void 0) ? Qx(c, e) : void 0);
        c = f;
        f = Ox(a);
        a = P(a) || Lx[f];
        const g = Rx(Mx[f].wf, a);
        a = g === null ? Sx(f, a) : new Tx(g, g, Ux(g, 8), 8, .3, c);
        c = Rx(Mx[d].mh, e);
        f = Rx(Mx[d].wf, e);
        d = Rx(Mx[d].lh, e);
        e = a.j;
        c && d && f && b !== void 0 && (e = b <= .5 ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new Tx(e, e, Ux(e, a.i), a.i, a.l, a.g)
    }

    function Vx(a, b) {
        const c = Zg(Oh(a, 4));
        a = Wh(a, 5);
        return c == null || a == null ? b : new Tx(a, 0, [], c, 1)
    }

    function Wx(a, b) {
        const c = Ox(a);
        a = P(a) || Lx[c];
        if (!b) return Sx(c, a);
        if (b = Px(oi(b, kq, 2, w()), c))
            if (b = Xx(b, a)) return b;
        return Sx(c, a)
    }

    function Yx(a) {
        const b = Ox(a);
        a = P(a) || Lx[b];
        return Sx(b, a)
    }

    function Zx(a, b) {
        let c = {
            Hc: a.j,
            tb: a.B
        };
        for (let d of a.A) d.adCount <= b && (c = d.Nc);
        return c
    }

    function $x(a, b, c) {
        var d = ti(b, 2);
        b = x(b, kq, 1);
        var e = Ox(c);
        var f = P(c) || Lx[e];
        c = Rx(b ? .B(), f) ? ? a.j;
        e = Rx(b ? .A(), f) ? ? a.B;
        d = d ? [] : ay(b ? .g(), f) ? ? a.A;
        const g = b ? .j() ? ? a.i,
            h = b ? .l() ? ? a.l;
        a = (b ? .C() ? Qx(x(b, iq, 7), f) : null) ? ? a.g;
        return new Tx(c, e, d, g, h, a)
    }

    function by(a, b) {
        var c = Ox(b);
        const d = new lq,
            e = new kq;
        let f = !1;
        var g = V(Zr);
        g >= 0 && (Mi(e, 4, g), f = !0);
        g = null;
        c === 1 ? (c = V(cs), c >= 0 && (g = c + "vp")) : (c = V(bs), c >= 0 && (g = c + "px"));
        c = V(as);
        c >= 0 && (g = c + "px");
        g !== null && (Qi(e, 2, g), f = !0);
        c = U(es) ? "0px" : null;
        c !== null && (Qi(e, 5, c), f = !0);
        if (U(fs)) Li(d, 2, !0), f = !0;
        else if (c !== null || g !== null) {
            const m = [];
            for (const n of a.A) {
                var h = m,
                    k = h.push;
                var l = new jq;
                l = Mi(l, 1, n.adCount);
                l = Qi(l, 3, c ? ? n.Nc.tb + "px");
                l = Qi(l, 2, g ? ? n.Nc.Hc + "px");
                k.call(h, l)
            }
            pi(e, 3, m)
        }
        return f ? (A(d, 1, e), $x(a, d, b)) : a
    }
    class Tx {
        constructor(a, b, c, d, e, f) {
            this.j = a;
            this.B = b;
            this.A = c.sort((g, h) => g.adCount - h.adCount);
            this.i = d;
            this.l = e;
            this.g = f
        }
    }

    function Px(a, b) {
        for (let c of a)
            if (Bi(c, 1) == b) return c;
        return null
    }

    function ay(a, b) {
        if (a === void 0) return null;
        const c = [];
        for (let d of a) {
            a = Ai(d, 1);
            const e = Rx(C(d, 2), b),
                f = Rx(C(d, 3), b);
            if (typeof a !== "number" || e === null) return null;
            c.push({
                adCount: a,
                Nc: {
                    Hc: e,
                    tb: f
                }
            })
        }
        return c
    }

    function Xx(a, b) {
        const c = Rx(C(a, 2), b),
            d = Rx(C(a, 5), b);
        if (c === null) return null;
        const e = Ai(a, 4);
        if (e == null) return null;
        var f = a.g();
        f = ay(f, b);
        if (f === null) return null;
        const g = x(a, iq, 7);
        b = g ? Qx(g, b) : void 0;
        return new Tx(c, d, f, e, Wh(a, 6), b)
    }

    function Sx(a, b) {
        a = Rx(Kx[a], b);
        return U(Xr) ? new Tx(a === null ? Infinity : a, null, [], 8, .3) : new Tx(a === null ? Infinity : a, null, [], 3, null)
    }

    function Rx(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Ox(a) {
        a = Vn(a) >= 900;
        return le() && !a ? 1 : 2
    }

    function Ux(a, b) {
        if (b < 4) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Nc: {
                Hc: a * 2,
                tb: a * 2
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Nc: {
                Hc: a * 3,
                tb: a * 3
            }
        }]
    }

    function Qx(a, b) {
        const c = Rx(C(a, 2), b) || 0,
            d = Ai(a, 3) || 1;
        a = Rx(C(a, 1), b) || 0;
        return {
            Jg: c,
            Hg: d,
            ec: a
        }
    };

    function cy(a, b, c) {
        return On({
            top: a.g.top - (c + 1),
            right: a.g.right + (c + 1),
            bottom: a.g.bottom + (c + 1),
            left: a.g.left - (c + 1)
        }, b.g)
    }

    function dy(a) {
        if (!a.length) return null;
        const b = Pn(a.map(c => c.g));
        a = a.reduce((c, d) => c + d.i, 0);
        return new ey(b, a)
    }
    class ey {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };
    let fy, W;
    const gy = new Hk(q);
    ((a, b = !0) => {
        fy = a || new Hn;
        typeof q.google_srt !== "number" && (q.google_srt = Math.random());
        Gn(fy, q.google_srt);
        W = new Rk(fy, b, gy);
        W.l(!0);
        q.document.readyState == "complete" ? q.google_measure_js_timing || Fk(gy) : gy.g && Hb(q, "load", () => {
            q.google_measure_js_timing || Fk(gy)
        })
    })();
    var hy = (a, b) => W.vb(a, b),
        iy = (a, b) => W.Ca(a, b),
        jy = (a, b, c) => {
            const d = O(En).g();
            !b.eid && d.length && (b.eid = d.toString());
            Qk(fy, a, b, !0, c)
        },
        ky = (a, b, c) => {
            W.pa(a, b, c)
        };

    function ly(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var qy = (a, b) => {
        var c = hb(b.document.querySelectorAll(".google-auto-placed"));
        const d = hb(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = my(b),
            f = ny(b),
            g = oy(b),
            h = hb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = hb(b.document.querySelectorAll("div.googlepublisherpluginad")),
            l = hb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(hb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), hb(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, p] of [
                [a.qd, c],
                [a.Kb, d],
                [a.Wi, e],
                [a.Se, f],
                [a.Te, g],
                [a.Ui, h],
                [a.Vi, k],
                [a.Xi, l]
            ]) n === !1 ? b = b.concat(p) : m = m.concat(p);
        a = py(m);
        c = py(b);
        a = a.slice(0);
        for (const n of c)
            for (c = 0; c < a.length; c++)(n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
        return a
    };
    const ry = a => {
            const b = ly(a);
            return b ? Wa(Xa(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
        },
        my = a => hb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        ny = a => (ry(a) || hb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(hb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        oy = a => hb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var py = a => {
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
    var sy = W.Ca(453, qy),
        ty;
    ty = W.Ca(454, (a, b) => {
        const c = hb(b.document.querySelectorAll(".google-auto-placed")),
            d = hb(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
            e = my(b),
            f = ny(b),
            g = oy(b),
            h = hb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = hb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = hb(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return py([].concat(a.qd === !0 ? c : [], a.Kb === !0 ? d : [], a.Wi === !0 ? e : [], a.Se === !0 ? f : [], a.Te === !0 ? g : [], a.Ui === !0 ? h : [], a.Vi === !0 ? k : [], a.Xi ===
            !0 ? b : []))
    });

    function uy(a, b, c) {
        const d = vy(a);
        b = wy(d, b, c);
        return new xy(a, d, b)
    }

    function yy(a) {
        return (a.bottom - a.top) * (a.right - a.left) > 1
    }

    function zy(a) {
        return a.g.map(b => b.box)
    }

    function Ay(a) {
        return a.g.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class xy {
        constructor(a, b, c) {
            this.j = a;
            this.g = b.slice(0);
            this.l = c.slice(0);
            this.i = null
        }
    }

    function vy(a) {
        const b = sy({
                Kb: !1
            }, a),
            c = eo(a),
            d = co(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && e.className.indexOf("google-auto-placed") != -1) || yy(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                bo: e ? 1 : 0
            } : null
        }).filter(zb(e => e === null))
    }

    function wy(a, b, c) {
        return b != void 0 && a.length <= (c != void 0 ? c : 8) ? By(a, b) : Xa(a, d => new ey(d.box, 1))
    }

    function By(a, b) {
        a = Xa(a, d => new ey(d.box, 1));
        const c = [];
        for (; a.length > 0;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (cy(d, a[f], b)) {
                        d = dy([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Cy(a, b, c) {
        const d = pp(c, b);
        return !$a(a, e => On(e, d))
    }

    function Dy(a, b, c, d, e) {
        e = e.la;
        const f = pp(e, b),
            g = pp(e, c),
            h = pp(e, d);
        return !$a(a, k => On(k, g) || On(k, f) && !On(k, h))
    }

    function Ey(a, b, c, d) {
        const e = zy(a);
        if (Cy(e, b, d.la)) return !0;
        if (!Dy(e, b, c.Jg, c.ec, d)) return !1;
        const f = new ey(pp(d.la, 0), 1);
        a = Wa(a.l, g => cy(g, f, c.ec));
        b = Ya(a, (g, h) => g + h.i, 1);
        return a.length === 0 || b > c.Hg ? !1 : !0
    };
    var Fy = (a, b) => {
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

    function Gy(a, b) {
        const c = new Pp,
            d = new po;
        b.forEach(e => {
            if (Hi(e, sq, 1, vq)) {
                e = Hi(e, sq, 1, vq);
                if (x(e, rq, 1) && x(e, rq, 1).ja() && x(e, rq, 2) && x(e, rq, 2).ja()) {
                    const g = Hy(a, x(e, rq, 1).ja()),
                        h = Hy(a, x(e, rq, 2).ja());
                    if (g && h)
                        for (var f of Fy({
                                anchor: g,
                                position: Bi(x(e, rq, 1), 2)
                            }, {
                                anchor: h,
                                position: Bi(x(e, rq, 2), 2)
                            })) c.set(Ea(f.anchor), f.position)
                }
                x(e, rq, 3) && x(e, rq, 3).ja() && (f = Hy(a, x(e, rq, 3).ja())) && c.set(Ea(f), Bi(x(e, rq, 3), 2))
            } else Hi(e, tq, 2, vq) ? Iy(a, Hi(e, tq, 2, vq), c) : Hi(e, qq, 3, vq) && Jy(a, Hi(e, qq, 3, vq), d)
        });
        return new Ky(c,
            d)
    }
    class Ky {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const Iy = (a, b, c) => {
            x(b, rq, 2) ? (b = x(b, rq, 2), (a = Hy(a, b.ja())) && c.set(Ea(a), Bi(b, 2))) : x(b, Tp, 1) && (a = Ly(a, x(b, Tp, 1))) && a.forEach(d => {
                d = Ea(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Jy = (a, b, c) => {
            x(b, Tp, 1) && (a = Ly(a, x(b, Tp, 1))) && a.forEach(d => {
                c.add(Ea(d))
            })
        },
        Hy = (a, b) => (a = Ly(a, b)) && a.length > 0 ? a[0] : null,
        Ly = (a, b) => (b = Tu(b)) ? Lu(b, a) : null;
    var My = class {
        constructor() {
            this.g = Ye();
            this.i = 0
        }
    };

    function Ny(a, b, c) {
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
            if (Oy(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function Py(a) {
        a = Qy(a);
        return a.has("all") || a.has("after")
    }

    function Ry(a) {
        a = Qy(a);
        return a.has("all") || a.has("before")
    }

    function Qy(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Oy(a) {
        const b = Qy(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var Sy = class {
        constructor() {
            this.g = new Set;
            this.i = new My
        }
    };

    function Ty(a) {
        return function(b) {
            return Sv(b, a)
        }
    }

    function Uy(a) {
        const b = P(a);
        return b ? Ka(Vy, b + co(a)) : wb
    }

    function Wy(a, b, c) {
        if (a < 0) throw Error("ama::ead:nd");
        if (a === Infinity) return wb;
        const d = zy(c || uy(b));
        return e => Cy(d, a, e.la)
    }

    function Xy(a, b, c, d) {
        if (a < 0 || b.Jg < 0 || b.Hg < 0 || b.ec < 0) throw Error("ama::ead:nd");
        return a === Infinity ? wb : e => Ey(d || uy(c, b.ec), a, b, e)
    }

    function Yy(a) {
        if (!a.length) return wb;
        const b = new Fp(a);
        return c => b.contains(c.Lb)
    }

    function Zy(a) {
        return function(b) {
            for (let c of b.Ac)
                if (a.indexOf(c) > -1) return !1;
            return !0
        }
    }

    function $y(a) {
        return a.length ? function(b) {
            const c = b.Ac;
            return a.some(d => c.indexOf(d) > -1)
        } : xb
    }

    function az(a, b) {
        if (a <= 0) return xb;
        const c = Zn(b).scrollHeight - a;
        return function(d) {
            return d.la.g <= c
        }
    }

    function bz(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[Bi(c.Xd, 2) || 0]
        }
    }

    function cz(a) {
        return a.length ? b => a.includes(Bi(b.Xd, 1) || 0) : xb
    }

    function dz(a, b) {
        const c = Gy(a, b);
        return function(d) {
            var e = d.ja();
            d = Zu[d.ha.g()];
            var f = c.i,
                g = Ea(e);
            f = f.g.get(g);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.g.contains(Ea(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.g.contains(Ea(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function ez() {
        const a = new Sy;
        return function(b) {
            var c = b.ja(),
                d = Zu[b.ha.g()];
            a: switch (d) {
                case 1:
                    b = Py(c.previousElementSibling) || Ry(c);
                    break a;
                case 4:
                    b = Py(c) || Ry(c.nextElementSibling);
                    break a;
                case 2:
                    b = Ry(c.firstElementChild);
                    break a;
                case 3:
                    b = Py(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = Ny(a, c, d);
            d = a.i;
            jy("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.g,
                num: d.i++,
                dvc: Ne()
            }, .1);
            return !(b || c)
        }
    }
    const Vy = (a, b) => b.la.g >= a,
        fz = (a, b, c) => {
            c = c.la.i;
            return a <= c && c <= b
        };

    function gz(a, b, c, d, e) {
        var f = hz(iz(a, b), a);
        if (f.length === 0) {
            var g = !!x(b, Jq, 6) ? .g() ? .length;
            f = x(b, Eq, 28) ? .l() ? .j() && g ? hz(jz(a, b), a) : f
        }
        if (f.length === 0) return nr(d, "pfno"), [];
        b = f;
        a = e.hd ? kz(a, b, c) : {
            kb: b,
            kd: null
        };
        const {
            kb: h,
            kd: k
        } = a;
        f = h;
        return f.length === 0 && k ? (nr(d, k), []) : [f[e.Yj ? 0 : e.Xj ? Math.floor(f.length / 4) : Math.floor(f.length / 2)]]
    }

    function kz(a, b, c) {
        c = c ? oi(c, uq, 5, w(ag)) : [];
        const d = dz(a.document, c),
            e = ez();
        b = b.filter(f => d(f));
        if (b.length === 0) return {
            kb: [],
            kd: "pfaz"
        };
        b = b.filter(f => e(f));
        return b.length === 0 ? {
            kb: [],
            kd: "pfet"
        } : {
            kb: b,
            kd: null
        }
    }

    function lz(a, b) {
        return a.la.g - b.la.g
    }

    function iz(a, b) {
        const c = x(b, Jq, 6);
        if (!c) return [];
        b = x(b, Eq, 28) ? .l();
        return (b ? .g() ? Kv(c.g(ag), a) : Jv(c.g(ag), a, !!b ? .l())).map(d => d.j())
    }

    function jz(a, b) {
        b = oi(b, Nq, 1, w(ag)) || [];
        return gv(b, a, {}).filter(c => !c.Ac.includes(6))
    }

    function hz(a, b) {
        a = Sv(a, b);
        const c = Uy(b);
        a = a.filter(d => c(d));
        return a.sort(lz)
    };
    var mz = {},
        nz = {},
        oz = {},
        pz = {};

    function qz() {
        throw Error("Do not instantiate directly");
    }
    qz.prototype.cg = null;
    qz.prototype.Ja = function() {
        return this.content
    };
    qz.prototype.toString = function() {
        return this.content
    };

    function rz(a) {
        if (a.dg !== mz) throw Error("Sanitized content was not of kind HTML.");
        return Nc(a.toString())
    }

    function sz() {
        qz.call(this)
    }
    Ma(sz, qz);
    sz.prototype.dg = mz;

    function tz(a) {
        if (a != null) switch (a.cg) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function uz(a) {
        return vz(a, mz) ? a : a instanceof Mc ? wz(Lc(a).toString()) : wz(String(String(a)).replace(xz, yz), tz(a))
    }
    var wz = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            d !== void 0 && (c.cg = d);
            return c
        }
    }(sz);

    function zz(a) {
        return Az(String(a), () => "").replace(Bz, "&lt;")
    }
    const Cz = RegExp.prototype.hasOwnProperty("sticky"),
        Dz = new RegExp((Cz ? "" : "^") + "(?:!|/?([a-zA-Z][a-zA-Z0-9:-]*))", Cz ? "gy" : "g");

    function Az(a, b) {
        const c = [],
            d = a.length;
        let e = 0,
            f = [],
            g, h, k = 0;
        for (; k < d;) {
            switch (e) {
                case 0:
                    var l = a.indexOf("<", k);
                    if (l < 0) {
                        if (c.length === 0) return a;
                        c.push(a.substring(k));
                        k = d
                    } else c.push(a.substring(k, l)), h = l, k = l + 1, Cz ? (Dz.lastIndex = k, l = Dz.exec(a)) : (Dz.lastIndex = 0, l = Dz.exec(a.substring(k))), l ? (f = ["<", l[0]], g = l[1], e = 1, k += l[0].length) : c.push("<");
                    break;
                case 1:
                    l = a.charAt(k++);
                    switch (l) {
                        case "'":
                        case '"':
                            let m = a.indexOf(l, k);
                            m < 0 ? k = d : (f.push(l, a.substring(k, m + 1)), k = m + 1);
                            break;
                        case ">":
                            f.push(l);
                            c.push(b(f.join(""),
                                g));
                            e = 0;
                            f = [];
                            h = g = null;
                            break;
                        default:
                            f.push(l)
                    }
                    break;
                default:
                    throw Error();
            }
            e === 1 && k >= d && (k = h + 1, c.push("<"), e = 0, f = [], h = g = null)
        }
        return c.join("")
    }

    function Ez(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Fz(a) {
        return vz(a, mz) ? String(zz(a.Ja())).replace(Gz, yz) : String(a).replace(xz, yz)
    }

    function Hz(a) {
        return vz(a, mz) ? String(zz(a.Ja())).replace(Iz, yz) : String(a).replace(Jz, yz)
    }
    const Kz = /['()]/g;

    function Lz(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }

    function X(a) {
        vz(a, pz) ? a = Ez(a.Ja()) : a == null ? a = "" : a instanceof xc ? a = Ez(yc(a)) : a instanceof Jc ? a = Ez(Ic(a)) : (a = String(a), a = Mz.test(a) ? a : "zSoyz");
        return a
    }

    function vz(a, b) {
        return a != null && a.dg === b
    }
    const Nz = {
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

    function yz(a) {
        return Nz[a]
    }
    const Oz = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function Pz(a) {
        return Oz[a]
    }
    const Qz = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Rz(a) {
        return Qz[a]
    }
    const xz = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Gz = /[\x00\x22\x27\x3c\x3e]/g,
        Jz = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Iz = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Sz = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        Tz = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Mz = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))?[-\u0020\t,+.!#%_0-9a-zA-Z]+)*\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|(?:(?:\/(?![\/\*]))|(?:\*(?!\/)))|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Uz =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        Bz = /</g;
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const Vz = Math.floor;
    var Wz = /^xn--/,
        Xz = /[\x2E\u3002\uFF0E\uFF61]/g;
    const Yz = {
        Qm: "Overflow: input needs wider integers to process",
        Mm: "Illegal input >= 0x80 (not a basic code point)",
        xm: "Invalid input"
    };

    function Zz(a) {
        throw RangeError(Yz[a]);
    }

    function $z(a, b) {
        const c = a.split("@");
        let d = "";
        c.length > 1 && (d = c[0] + "@", a = c[1]);
        a = a.replace(Xz, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function aA(a) {
        return $z(a, b => {
            if (Wz.test(b) && b.length > 4) {
                b = b.slice(4).toLowerCase();
                const h = [],
                    k = b.length;
                let l = 0,
                    m = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                d < 0 && (d = 0);
                for (var e = 0; e < d; ++e) b.charCodeAt(e) >= 128 && Zz("Illegal input >= 0x80 (not a basic code point)"), h.push(b.charCodeAt(e));
                for (d = d > 0 ? d + 1 : 0; d < k;) {
                    e = l;
                    for (let n = 1, p = 36;; p += 36) {
                        d >= k && Zz("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = f - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : 36;
                        (f >= 36 || f > Vz((2147483647 - l) / n)) && Zz("Overflow: input needs wider integers to process");
                        l += f * n;
                        var g = p <= c ? 1 : p >= c + 26 ? 26 : p - c;
                        if (f < g) break;
                        f = 36 - g;
                        n > Vz(2147483647 / f) && Zz("Overflow: input needs wider integers to process");
                        n *= f
                    }
                    f = h.length + 1;
                    c = l - e;
                    g = 0;
                    c = e == 0 ? Vz(c / 700) : c >> 1;
                    for (c += Vz(c / f); c > 455; g += 36) c = Vz(c / 35);
                    c = Vz(g + 36 * c / (c + 38));
                    Vz(l / f) > 2147483647 - m && Zz("Overflow: input needs wider integers to process");
                    m += Vz(l / f);
                    l %= f;
                    h.splice(l++, 0, m)
                }
                b = String.fromCodePoint.apply(null, h)
            }
            return b
        })
    };
    const bA = new sb(tb, "558153351");

    function cA(a, b, c) {
        var d = a.Na.contentWindow;
        const e = !a.A && typeof a.g === "number";
        a.B ? (b = {
            action: "search",
            searchTerm: b,
            rsToken: c
        }, e && (b.experimentId = a.g), a.i.length > 0 && (b.adfiliateWp = a.i), d.postMessage(b, "https://www.gstatic.com")) : (d = d.google.search.cse.element.getElement(a.C), c = {
            rsToken: c,
            hostName: a.host
        }, e && (c.afsExperimentId = a.g), a.i.length > 0 && (c.adfiliateWp = a.i), d.execute(b, void 0, c))
    }
    var dA = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n = !1, p = !1, r = !1, y = "") {
            this.Na = a;
            this.l = b;
            this.C = c;
            this.j = d;
            this.O = e;
            this.host = f.host;
            this.origin = f.origin;
            this.language = g;
            this.G = h;
            this.g = k;
            this.H = n;
            this.B = l;
            this.F = m;
            this.I = p;
            this.A = r;
            this.i = y
        }
        J() {
            this.Na.setAttribute("id", "prose-iframe");
            this.Na.setAttribute("width", "100%");
            this.Na.setAttribute("height", "100%");
            var a = id `box-sizing:border-box;border:unset;`;
            this.Na.style.cssText = yc(a);
            var b = tc("https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host)),
                c = aA(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
            a = this.C;
            var d = this.j,
                e = this.O;
            const f = this.host;
            c = this.G.replace("${website}", c);
            const g = this.I;
            var h = wz,
                k = "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
                (this.H ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(e).replace(Sz, Pz) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            vz(b, nz) || vz(b, oz) ? b = String(b).replace(Tz, Rz) : b instanceof mc ? b = String(oc(b)).replace(Tz, Rz) : b instanceof cc ? b = String(dc(b).toString()).replace(Tz, Rz) : (b = String(b), b = Uz.test(b) ? b.replace(Tz, Rz) : "about:invalid#zSoyz");
            a = h(k + Fz(b) + '" alt="' + Fz(f) + ' icon"><p class="cse-header"><strong>' +
                uz(c) + '</strong></p><div class="gcse-search" data-gname="' + Fz(a) + '" data-adclient="' + Fz(d) + '" data-adchannel="' + Fz(e) + '" data-as_sitesearch="' + Fz(f) + '" data-personalizedAds="false"></div></div>' + (g ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" :
                    ""));
            a = rz(a);
            this.B ? (a = this.Na, d = ec(new sb(tb, "https://www.gstatic.com/prose/protected/%{version}/iframe.html?cx=%{cxId}&host=%{host}&hl=%{lang}&lrh=%{lrh}&client=%{client}&origin=%{origin}"), {
                version: this.F || bA,
                cxId: this.l,
                host: this.host,
                lang: this.language,
                lrh: this.G,
                client: this.j,
                origin: this.origin
            }), a.src = dc(d).toString()) : (d = new Map([
                ["cx", this.l],
                ["language", this.language]
            ]), this.A && (e = Array.isArray(this.g) ? this.g : [this.g], e.length && d.set("fexp", e.join())), e = hd(gd `https://cse.google.com/cse.js`,
                d), d = {}, e = `<script src="${Yc(dc(e).toString())}"`, d.async && (e += " async"), d.ki && (e += ` custom-element="${Yc(d.ki)}"`), d.defer && (e += " defer"), d.id && (e += ` id="${Yc(d.id)}"`), d.nonce && (e += ` nonce="${Yc(d.nonce)}"`), d.type && (e += ` type="${Yc(d.type)}"`), d.ii && (e += ` crossorigin="${Yc(d.ii)}"`), d = Nc(e + ">\x3c/script>"), a = dd({
                style: id `margin:${0};`
            }, [a, d]), this.Na.srcdoc = Lc(a))
        }
    };

    function eA(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map), a.google_reactive_ads_global_state.sideRailMutationCallbacks ==
            null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = [])) : a.google_reactive_ads_global_state = new fA;
        return a.google_reactive_ads_global_state
    }
    class fA {
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
            this.floatingAdsStacking = new gA;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.sideRailMutationCallbacks = [];
            this.g =
                null;
            this.clickTriggeredInterstitialMayBeDisplayed = !1
        }
    }
    var gA = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function hA(a, b) {
        return new iA(a, b)
    }

    function jA(a) {
        const b = kA(a);
        Ua(a.g.maxZIndexListeners, c => c(b))
    }

    function kA(a) {
        a = ze(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function lA(a, b) {
        db(a.g.maxZIndexListeners, c => c === b)
    }
    class mA {
        constructor(a) {
            this.g = eA(a).floatingAdsStacking
        }
    }

    function nA(a) {
        if (a.g == null) {
            var b = a.i,
                c = a.j;
            const d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            jA(b);
            a.g = d
        }
    }

    function oA(a) {
        if (a.g != null) {
            var b = a.i;
            delete b.g.maxZIndexRestrictions[a.g];
            jA(b);
            a.g = null
        }
    }
    class iA {
        constructor(a, b) {
            this.i = a;
            this.j = b;
            this.g = null
        }
    };

    function pA(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? pA(b) || a : a
    }

    function qA(a, b) {
        return rA(b, a.document.body).flatMap(c => sA(c))
    }

    function rA(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = ((e = c.mode && c.host ? c : null) == null ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function sA(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function tA(a) {
        a.g !== null && (a.g.Di.forEach(b => {
            b.inert = !1
        }), a.g.Cj ? .focus(), a.g = null)
    }

    function uA(a, b) {
        tA(a);
        const c = pA(a.win.document);
        b = qA(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.g = {
            Cj: c,
            Di: b
        }
    }
    var vA = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
        de() {
            tA(this)
        }
    };

    function wA(a) {
        return new xA(a, new Bo(a, a.document.body), new Bo(a, a.document.documentElement), new Bo(a, a.document.documentElement))
    }

    function yA(a) {
        Ao(a.j, "scroll-behavior", "auto");
        const b = zA(a.win);
        b.activePageScrollPreventers.add(a);
        b.previousWindowScroll === null && (b.previousWindowScroll = a.win.scrollY);
        Ao(a.g, "position", "fixed");
        Ao(a.g, "top", `${-b.previousWindowScroll}px`);
        Ao(a.g, "width", "100%");
        Ao(a.g, "overflow-x", "hidden");
        Ao(a.g, "overflow-y", "hidden");
        Ao(a.i, "overflow-x", "hidden");
        Ao(a.i, "overflow-y", "hidden")
    }

    function AA(a) {
        zo(a.g);
        zo(a.i);
        const b = zA(a.win);
        b.activePageScrollPreventers.delete(a);
        b.activePageScrollPreventers.size === 0 && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        zo(a.j)
    }
    var xA = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.g = b;
            this.i = c;
            this.j = d
        }
    };

    function zA(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    }

    function BA(a) {
        return a.googPageScrollPreventerInfo && a.googPageScrollPreventerInfo.activePageScrollPreventers.size > 0 ? !0 : !1
    };

    function CA(a, b) {
        return DA(`#${a}`, b)
    }

    function EA(a, b) {
        return DA(`.${a}`, b)
    }

    function DA(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function FA(a, b) {
        const c = a.document.createElement("div");
        u(c, qr(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            Za: c,
            shadowRoot: a
        }
    };

    function GA(a, b) {
        b = FA(a, b);
        a.document.body.appendChild(b.Za);
        return b
    }

    function HA(a, b) {
        const c = new R(b.P);
        Ko(b, !0, () => void c.g(!0));
        Ko(b, !1, () => {
            a.setTimeout(() => {
                b.P || c.g(!1)
            }, 700)
        });
        return Fo(c)
    };

    function IA(a) {
        const b = a.md;
        var c = a.pf,
            d = a.jd;
        const e = a.Yc,
            f = a.Wf,
            g = a.qe,
            h = a.Ma;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            X(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
        c = c ? h ? 20 : 16 : 0;
        a += X(c) + "px; transition: transform " + X(g) + "s ease-in-out;" + (d ? "left: 0; border-top-right-radius: " + X(c) + "px; border-bottom-right-radius: " + X(c) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + X(c) + "px; border-bottom-left-radius: " + X(c) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}#hd-control-bar {" + (h ?
                "height: 24px;" : "padding: 5px;") + "}.hd-control-button {border: none; background: none; cursor: pointer;" + (h ? "" : "padding: 5px;") + "}#hd-back-arrow-button {" + (d ? "float: right;" : "float: left;") + "}#hd-close-button {" + (d ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            Fz(f) + '">';
        d = h ? "#5F6368" : "#444746";
        a += '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + Fz(d) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + Fz(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + Fz(d) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return wz(a)
    };

    function JA(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && typeof b.pushState === "function" ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new KA(a, b);
        b.J();
        return b ? a.googNavStack = b : null
    }

    function LA(a, b) {
        return b ? b.googNavStackId === a.j ? b : null : null
    }

    function MA(a, b) {
        for (let c = b.length - 1; c >= 0; --c) {
            const d = c === 0;
            a.K.requestAnimationFrame(() => void b[c].Mj({
                isFinal: d
            }))
        }
    }

    function NA(a, b) {
        b = kb(a.stack, b, (c, d) => c - d.vg.googNavStackStateId);
        if (b >= 0) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class KA extends Q {
        constructor(a, b) {
            super();
            this.K = a;
            this.g = b;
            this.stack = [];
            this.j = Math.random() * 1E9 >>> 0;
            this.A = 0;
            this.l = c => {
                (c = LA(this, c.state)) ? MA(this, NA(this, c.googNavStackStateId + .5)): MA(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.j,
                    googNavStackStateId: this.A++
                },
                b = new Promise(c => {
                    this.stack.push({
                        Mj: c,
                        vg: a
                    })
                });
            this.g.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = NA(this, a.googNavStackStateId);
                    var d;
                    if (d = c.length > 0) {
                        d = c[0].vg;
                        const e = LA(this, this.g.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.g.go(-c.length);
                    MA(this, c)
                }
            }
        }
        J() {
            this.K.addEventListener("popstate", this.l)
        }
        i() {
            this.K.removeEventListener("popstate", this.l);
            super.i()
        }
    };

    function OA(a) {
        return (a = JA(a)) ? new PA(a) : null
    }

    function QA(a) {
        if (!a.g) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.l.pushEvent();
            a.g = c;
            b.then(() => {
                a.g && !a.B && (a.g = null, Qo(a.j))
            })
        }
    }
    var PA = class extends Q {
        constructor(a) {
            super();
            this.l = a;
            this.j = new Ro;
            this.g = null
        }
    };

    function RA(a, b, c) {
        var d = c.Fe ? null : new vA(a);
        const e = hA(new mA(a), c.zIndex - 1);
        b = SA(a, b, c);
        d = new TA(a, b, d, c.tc, wA(a), e);
        d.J();
        (c.jg || c.jg === void 0) && UA(d);
        c.oc && ((a = OA(a)) ? VA(d, a, c.gf) : c.gf ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function UA(a) {
        a.A = b => {
            b.key === "Escape" && a.g.P && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.A)
    }

    function VA(a, b, c) {
        Ko(a.g, !0, () => {
            try {
                QA(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Ko(a.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Oo(b.j).listen(() => void a.collapse());
        xo(a, b)
    }

    function WA(a) {
        if (a.B) throw Error("Accessing domItems after disposal");
        return a.C
    }

    function XA(a) {
        a.win.setTimeout(() => {
            a.g.P && WA(a).Ga.focus()
        }, 500)
    }

    function YA(a) {
        const {
            ff: b,
            bi: c
        } = WA(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function ZA(a) {
        Ko(a.j, !1, () => {
            WA(a).Ga.classList.add("hd-hidden")
        })
    }
    var TA = class extends Q {
        constructor(a, b, c, d = !0, e, f) {
            super();
            this.win = a;
            this.C = b;
            this.l = c;
            this.tc = d;
            this.g = new R(!1);
            this.j = HA(a, this.g);
            Ko(this.j, !0, () => {
                yA(e);
                nA(f)
            });
            Ko(this.j, !1, () => {
                AA(e);
                oA(f)
            })
        }
        show({
            hg: a = !1
        } = {}) {
            if (this.B) throw Error("Cannot show drawer after disposal");
            WA(this).Ga.classList.remove("hd-hidden");
            vo(this.win);
            WA(this).Ga.classList.add("hd-revealed");
            this.g.g(!0);
            this.l && (uA(this.l, WA(this).bb.Za), this.tc && XA(this));
            a && Ko(this.j, !1, () => {
                this.dispose()
            })
        }
        collapse() {
            WA(this).Ga.classList.remove("hd-revealed");
            this.g.g(!1);
            this.l ? .de()
        }
        isVisible() {
            return this.j
        }
        J() {
            YA(this);
            ZA(this)
        }
        i() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.C.bb.Za,
                b = a.parentNode;
            b && b.removeChild(a);
            this.l ? .de();
            super.i()
        }
    };

    function SA(a, b, c) {
        const d = GA(a, c.Ge),
            e = d.shadowRoot;
        e.appendChild(ke(new Yd(a.document), rz(IA({
            md: c.md,
            pf: c.pf ? ? !0,
            jd: c.jd || !1,
            Yc: c.Yc,
            Wf: c.Wf || "",
            zIndex: c.zIndex,
            qe: .5,
            Ma: c.Ma || !1
        }))));
        const f = CA("hd-drawer-container", e);
        c.Le ? .i(g => {
            f.setAttribute("aria-label", g)
        });
        c = CA("hd-content-container", e);
        c.appendChild(b);
        vo(a);
        return {
            Ga: f,
            ff: CA("hd-modal-background", e),
            Ae: c,
            bi: CA("hd-close-button", e),
            fo: CA("hd-back-arrow-button", e),
            bb: d
        }
    };

    function $A(a) {
        const b = a.wj,
            c = a.Ni;
        var d = a.qe;
        const e = a.Ma;
        a = "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + X(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            X(c) + "%; transition: transform " + X(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
        d = e ? 20 : 28;
        a += X(d) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            X(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + X((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            X(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + X(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + X(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            X(d) + "px " + X(d) + "px 0 0; background: white; display: flex; height: " + X(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (e ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            aB("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + aB("ved-fixed-handle") + "</div></div></div>";
        return wz(a)
    }

    function aB(a) {
        return wz('<div class="ved-handle" id="' + Fz(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function bB(a) {
        return ep(a.g).map(b => b ? cB(a, b) : 0)
    }

    function cB(a, b) {
        switch (a.direction) {
            case 0:
                return dB(-b.yh);
            case 1:
                return dB(-b.xh);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function eB(a) {
        return gp(a.g).map(b => cB(a, b))
    }
    var fB = class {
        constructor(a) {
            this.g = a;
            this.direction = 0
        }
    };

    function dB(a) {
        return a === 0 ? 0 : a
    };

    function Y(a) {
        if (a.B) throw Error("Accessing domItems after disposal");
        return a.C
    }

    function gB(a) {
        a.win.setTimeout(() => {
            a.g.P && Y(a).Ga.focus()
        }, 500)
    }

    function hB(a) {
        Y(a).Ga.classList.remove("ved-hidden");
        vo(a.win);
        const {
            qa: b,
            Ya: c
        } = Y(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || iB(a);
        Y(a).Ga.classList.add("ved-revealed");
        a.g.g(!0);
        a.j && (uA(a.j, Y(a).bb.Za), a.tc && gB(a))
    }

    function jB(a) {
        return HA(a.win, a.g)
    }

    function kB(a, b) {
        const c = new R(b());
        Oo(a.H).listen(() => void c.g(b()));
        return Fo(c)
    }

    function lB(a) {
        const {
            qa: b,
            Ld: c
        } = Y(a);
        return kB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function mB(a) {
        const {
            qa: b,
            Ld: c
        } = Y(a);
        return kB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function nB(a) {
        const {
            qa: b
        } = Y(a);
        return kB(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function oB(a) {
        return Go(lB(a), nB(a))
    }

    function pB(a) {
        const {
            qa: b,
            Ya: c
        } = Y(a);
        return kB(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function iB(a) {
        Y(a).Ya.classList.add("ved-snap-point-top");
        var b = qB(a, Y(a).Ya);
        Y(a).qa.scrollTop = b;
        rB(a)
    }

    function sB(a) {
        Io(lB(a), !0, () => {
            const {
                og: b,
                Mc: c
            } = Y(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        Io(lB(a), !1, () => {
            const {
                og: b,
                Mc: c
            } = Y(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function tB(a) {
        const b = lp(a.win, Y(a).Ae);
        op(b).i(() => void uB(a));
        xo(a, b)
    }

    function vB(a) {
        Io(wB(a), !0, () => {
            Y(a).Pg.classList.remove("ved-hidden")
        });
        Io(wB(a), !1, () => {
            Y(a).Pg.classList.add("ved-hidden")
        })
    }

    function xB(a) {
        const b = () => void Qo(a.F),
            {
                ff: c,
                Ya: d,
                Mi: e
            } = Y(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        Ko(yB(a), !0, b)
    }

    function zB(a) {
        Ko(jB(a), !1, () => {
            iB(a);
            Y(a).Ga.classList.add("ved-hidden")
        })
    }

    function rB(a) {
        Jo(a.l, !1, () => void Qo(a.H))
    }

    function uB(a) {
        if (!a.l.P) {
            var {
                eg: b,
                Ae: c
            } = Y(a), d = c.getBoundingClientRect().height;
            d = Math.max(AB(a), d);
            a.l.g(!0);
            var e = BB(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.l.g(!1)
                })
            })
        }
    }

    function wB(a) {
        const {
            qa: b,
            Ya: c
        } = Y(a);
        return kB(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function yB(a) {
        return Eo(a.A.map(Qp), CB(a))
    }

    function CB(a) {
        return kB(a, () => Y(a).qa.scrollTop === 0)
    }

    function qB(a, b) {
        ({
            Mc: a
        } = Y(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function DB(a, b) {
        a.A.g(!0);
        const {
            Mc: c,
            qa: d
        } = Y(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void EB(a, b)
    }

    function EB(a, b) {
        const {
            Mc: c,
            qa: d
        } = Y(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Y(a).qa.scrollTop = b;
        rB(a);
        a.A.g(!1)
    }

    function BB(a) {
        const b = Y(a).qa.scrollTop;
        DB(a, b);
        return () => void EB(a, b)
    }

    function AB(a) {
        const {
            qa: b,
            Ld: c,
            eg: d,
            Ya: e
        } = Y(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var FB = class extends Q {
        constructor(a, b, c, d, e = !0) {
            super();
            this.win = a;
            this.C = b;
            this.I = c;
            this.j = d;
            this.tc = e;
            this.F = new Ro;
            this.H = new Ro;
            this.g = new R(!1);
            this.A = new R(!1);
            this.l = new R(!1)
        }
        J() {
            iB(this);
            sB(this);
            tB(this);
            vB(this);
            xB(this);
            zB(this);
            Y(this).qa.addEventListener("scroll", () => void rB(this))
        }
        i() {
            const a = this.C.bb.Za,
                b = a.parentNode;
            b && b.removeChild(a);
            this.j ? .de();
            super.i()
        }
    };

    function GB(a, b, c) {
        const d = GA(a, c.Ge),
            e = d.shadowRoot;
        e.appendChild(ke(new Yd(a.document), rz($A({
            wj: c.Tg * 100,
            Ni: c.pg * 100,
            zIndex: c.zIndex,
            qe: .5,
            Ma: c.Ma || !1
        }))));
        const f = CA("ved-drawer-container", e);
        c.Le ? .i(g => {
            f.setAttribute("aria-label", g)
        });
        c = CA("ved-content-container", e);
        c.appendChild(b);
        vo(a);
        return {
            Ga: f,
            ff: CA("ved-modal-background", e),
            qh: CA("ved-ui-revealer", e),
            qa: CA("ved-scroller", e),
            Mc: CA("ved-scrolled-stack", e),
            Mi: CA("ved-fully-closed-anchor", e),
            Ya: CA("ved-partially-extended-anchor", e),
            eg: CA("ved-content-sizer",
                e),
            Ae: c,
            oo: CA("ved-moving-handle", e),
            Ld: CA("ved-moving-handle-holder", e),
            Li: CA("ved-fixed-handle", e),
            og: CA("ved-fixed-handle-holder", e),
            Pg: CA("ved-over-scroll-block", e),
            bb: d
        }
    };

    function HB(a, b, c) {
        var d = hA(new mA(a), c.zIndex - 1);
        b = GB(a, b, c);
        const e = c.Fe ? null : new vA(a);
        var f = b.Li;
        f = new hp(new Zo(a, f), new Wo(f));
        var g = f.g;
        g.A.addEventListener("mousedown", g.G);
        g.l.addEventListener("mouseup", g.B);
        g.l.addEventListener("mousemove", g.C, {
            passive: !1
        });
        g = f.i;
        g.i.addEventListener("touchstart", g.C);
        g.i.addEventListener("touchend", g.A);
        g.i.addEventListener("touchmove", g.B, {
            passive: !1
        });
        b = new FB(a, b, new fB(f), e, c.tc);
        b.J();
        d = new IB(a, b, wA(a), d);
        xo(d, b);
        d.J();
        c.oc && ((a = OA(a)) ? JB(d, a, c.gf) :
            c.gf ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function JB(a, b, c) {
        Ko(a.g.g, !0, () => {
            try {
                QA(b)
            } catch (d) {
                c ? .(d)
            }
        });
        Ko(a.g.g, !1, () => {
            try {
                b.g && (b.g(), b.g = null)
            } catch (d) {
                c ? .(d)
            }
        });
        Oo(b.j).listen(() => void a.collapse());
        xo(a, b)
    }

    function KB(a) {
        Ko(Eo(oB(a.g), pB(a.g)), !0, () => {
            Y(a.g).Ya.classList.remove("ved-snap-point-top")
        });
        Io(mB(a.g), !0, () => {
            Y(a.g).qa.classList.add("ved-no-snap")
        });
        Io(mB(a.g), !1, () => {
            Y(a.g).qa.classList.remove("ved-no-snap")
        });
        Ko(mB(a.g), !1, () => {
            var b = a.g;
            var c = Y(b).Ld;
            c = DB(b, qB(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function LB(a) {
        const b = a.g.I;
        bB(b).listen(c => {
            c = -c;
            if (c > 0) {
                const {
                    qh: d
                } = Y(a.g);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                qh: c
            } = Y(a.g)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        eB(b).listen(c => {
            -c > 30 && a.collapse()
        })
    }
    var IB = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.g = b;
            Ko(jB(b), !0, () => {
                yA(c);
                nA(d)
            });
            Ko(jB(b), !1, () => {
                AA(c);
                oA(d)
            })
        }
        show({
            hg: a = !1
        } = {}) {
            if (this.B) throw Error("Cannot show drawer after disposal");
            hB(this.g);
            a && Ko(jB(this.g), !1, () => {
                this.dispose()
            })
        }
        collapse() {
            var a = this.g;
            Y(a).Ga.classList.remove("ved-revealed");
            a.g.g(!1);
            a.j ? .de()
        }
        isVisible() {
            return jB(this.g)
        }
        J() {
            Oo(this.g.F).listen(() => {
                this.collapse()
            });
            KB(this);
            LB(this);
            vo(this.win)
        }
    };

    function MB(a, b) {
        return Ne() === 2 ? HB(a.win, b, {
            Tg: .95,
            pg: .95,
            zIndex: 2147483645,
            oc: !0,
            Ma: !0
        }) : RA(a.win, b, {
            md: "min(65vw, 768px)",
            Yc: "",
            jd: !1,
            zIndex: 2147483645,
            oc: !0,
            pf: !1,
            Ma: !0
        })
    }

    function NB(a) {
        ((d, e) => {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = (new Date).getTime()
        })(a.win, "_googCsa");
        const b = a.R.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.H,
                styleId: "5134551505",
                hl: a.language,
                fexp: a.C,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.Bb.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.I
            };
        a.ta && (c.adLoadedCallback = a.Ka.bind(a));
        a.j && a.A instanceof
        Array && (c.fexp = a.A.join(","));
        a.win._googCsa("relatedsearch", c, b)
    }

    function OB(a) {
        a.win.addEventListener("message", b => {
            b.origin === "https://www.gstatic.com" && b.data.action === "resize" && (a.g.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var PB = class extends Q {
        constructor(a, b, c, d, e, f, g, h, k, l = () => {}) {
            super();
            this.win = a;
            this.R = b;
            this.O = e;
            this.C = f;
            this.l = h;
            this.Ea = k;
            this.ib = l;
            this.language = d ? .g() || "en";
            this.hb = d ? .j() || "Search results from ${website}";
            this.ta = U(ls);
            this.H = c.replace("ca", "partner");
            this.ca = new Yd(a.document);
            this.g = je(this.ca, "IFRAME");
            this.I = g.i ? g.g : "9d449ff4a772956c6";
            this.A = (this.j = U(rs)) ? O(En).g().concat(this.C) : this.C;
            this.F = new dA(this.g, this.I, "auto-rs-prose", this.H, "AutoRsVariant", a.location, this.language, this.hb,
                this.A, this.l, this.Ea, this.j);
            this.ia = MB(this, this.g);
            xo(this, this.ia)
        }
        J() {
            this.R.length !== 0 && (this.ta || Ru(1075, () => {
                this.F.J()
            }, this.win), Ru(1076, () => {
                const a = je(this.ca, "SCRIPT");
                vd(a, gd `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), NB(this), lr(this.O, {
                sts: "ok"
            }), this.l && OB(this))
        }
        Ka(a, b) {
            b ? Ru(1075, () => {
                this.F.J()
            }, this.win) : (this.ib(), nr(this.O, "pfns"))
        }
        Bb(a, b) {
            cA(this.F, a, b);
            (() => {
                if (!this.l) {
                    const c = new ResizeObserver(async e => {
                            this.g.height =
                                "0";
                            await new Promise(f => {
                                this.win.requestAnimationFrame(f)
                            });
                            this.g.height = e[0].target.scrollHeight.toString()
                        }),
                        d = () => {
                            const e = this.g.contentDocument ? .documentElement;
                            e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                        };
                    d()
                }
                this.ia.show()
            })()
        }
    };
    var QB = class {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    };

    function RB(a) {
        const b = pv(a.l.ha),
            c = a.B.Ja(a.G, () => a.i());
        b.appendChild(c);
        a.A && (b.className = a.A);
        return {
            zi: b,
            hi: c
        }
    }
    class SB {
        constructor(a, b, c, d) {
            this.G = a;
            this.l = b;
            this.B = c;
            this.A = d || null;
            this.g = null;
            this.j = new R(null)
        }
        J() {
            const a = RB(this);
            this.g = a.zi;
            Qv(this.l, this.g);
            this.j.g(a.hi)
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.j.g(null)
        }
        C() {
            return this.j
        }
    };
    async function TB(a) {
        await new Promise(b => {
            setTimeout(() => {
                try {
                    UB(a)
                } catch (c) {
                    nr(a.i, "pfere", c)
                }
                b()
            })
        })
    }

    function UB(a) {
        if ((!a.hd || !VB(a.config, a.aa, a.i)) && WB(a.g ? .j(), a.i)) {
            var b = a.g ? .l();
            b = gz(a.win, a.config, a.aa, a.i, {
                Yj: !!b ? .A(),
                hd: a.hd,
                po: !!b ? .g(),
                Xj: !!b ? .B()
            });
            b = XB(b, a.win);
            var c = Object.keys(b),
                d = Object.values(b),
                e = a.g ? .g() ? .g() || 0,
                f = YB(a.g),
                g = !!a.g ? .B(),
                h = String(a.g ? .C());
            if (!x(a.config, xq, 25) ? .g()) {
                var k = () => {
                    d.forEach(l => {
                        l.i()
                    })
                };
                Ru(1074, () => {
                    (new PB(a.win, c, a.webPropertyCode, a.g ? .j(), a.i, e, f, g, h, k)).J()
                }, a.win)
            }
        }
    }
    var ZB = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.aa = e;
            this.hd = f;
            this.i = new or(a, b, x(this.config, Eq, 28) || new Eq);
            this.g = x(this.config, Eq, 28)
        }
    };

    function VB(a, b, c) {
        a = x(a, Eq, 28) ? .g() ? .g() || 0;
        const d = O(du).g(qs.g, qs.defaultValue);
        return d && d.includes(a.toString()) ? !1 : (b ? Xh(b, 2, Jg, w()) : []).length === 0 ? (nr(c, "pfeu"), !0) : !1
    }

    function WB(a, b) {
        const c = O(du).g(os.g, os.defaultValue);
        a = a ? .g() || "";
        return c && c.length !== 0 && !c.includes(a.toString()) ? (nr(b, "pflna"), !1) : !0
    }

    function XB(a, b) {
        const c = {};
        for (let e = 0; e < a.length; e++) {
            var d = a[e];
            const f = "autors-container-" + e.toString(),
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            d = new SB(b, d, new tr(g), "autors-widget");
            d.J();
            c[f] = d
        }
        return c
    }

    function YB(a) {
        const b = a ? .G() || !1;
        a = a ? .A() || "";
        return new QB(b, a)
    };
    var $B = (a, b) => {
        const c = [];
        x(a, Oq, 18) && c.push(2);
        b.aa && c.push(0);
        x(a, Eq, 28) && Fi(x(a, Eq, 28), 1) == 1 && c.push(1);
        x(a, Cq, 31) && Fi(x(a, Cq, 31), 1) == 1 && c.push(5);
        x(a, zq, 32) && c.push(6);
        x(a, Rq, 34) && J(x(a, Rq, 34), 3) && c.push(7);
        return c
    };

    function aC(a, b) {
        const c = je(Xd(a), "IMG");
        bC(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        u(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: b == null ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function cC(a, b) {
        const c = b.document.createElement("button");
        bC(b, c);
        u(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.i));
        c.addEventListener("click", d => {
            a.j();
            d.stopPropagation()
        });
        return c
    }

    function dC(a, b, c) {
        const d = je(Xd(b), "IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.l);
        bC(b, d);
        u(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function eC(a) {
        const b = a.document.createElement("ins");
        bC(a, b);
        u(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class fC {
        constructor(a, b, c) {
            this.i = a;
            this.l = b;
            this.j = c;
            this.g = new R(!1)
        }
        Ja(a, b, c, d) {
            const e = aC(a, d),
                f = aC(a),
                g = cC(this, a),
                h = dC(this, a, c);
            a = eC(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.g.listen(k => {
                u(e, {
                    display: k ? "none" : "inline"
                });
                u(f, {
                    display: k ? "inline" : "none"
                });
                k ? (u(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), u(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (u(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), u(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        qg() {
            return 40
        }
        Ng() {
            this.g.g(!1);
            return 0
        }
        Og() {
            this.g.g(!0)
        }
    }

    function bC(a, b) {
        u(b, qr(a));
        u(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };
    var gC = a => a.googlefc = a.googlefc || {},
        hC = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        },
        iC = a => {
            a = a.googlefc = a.googlefc || {};
            return a.__fcusi = a.__fcusi || {}
        },
        jC = a => {
            a = a.googlefc = a.googlefc || {};
            if (!a.getFloatingToolbarTranslatedMessages) return null;
            if (a = a.getFloatingToolbarTranslatedMessages()) {
                var b = new Fq;
                b = Qi(b, 1, a.defaultFloatingToolbarToggleExpansionText);
                b = Qi(b, 2, a.defaultFloatingToolbarTogglePrivacySettings);
                a = Qi(b, 3, a.defaultFloatingToolbarDismissPrivacySettings).i()
            } else a = null;
            return a
        };

    function kC(a, b) {
        const c = b.document.createElement("button");
        lC(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.i
        };
        a.g && (b["border-top"] = a.g, b["border-bottom"] = a.g);
        u(c, b);
        c.addEventListener("click", d => {
            a.B();
            d.stopPropagation()
        });
        return c
    }

    function mC(a, b, c, d) {
        const e = b.document.createElement("div");
        u(e, qr(b));
        u(e, {
            "align-items": "center",
            "background-color": a.i,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        u(f, qr(b));
        u(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (u(e, {
                    "flex-direction": "row"
                }), a.g && u(e, {
                    "border-top": a.g,
                    "border-bottom": a.g
                }), u(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                u(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (u(e, {
                border: "0",
                "flex-direction": "column"
            }), u(f, {
                "margin-left": "0",
                "text-align": "center"
            }), u(c, {
                "margin-right": "0",
                width: "100%"
            }), a.g && u(c, {
                "border-top": a.g,
                "border-bottom": a.g
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function lC(a, b, c) {
        u(c, qr(b));
        u(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.C,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class nC {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.A = a;
            this.B = b;
            this.G = c;
            this.i = d;
            this.C = e;
            this.l = f;
            this.g = g;
            this.j = h
        }
        Ja(a) {
            const b = a.document.createElement("div");
            lC(this, a, b);
            u(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.i
            });
            if (this.l) {
                var c = je(Xd(a), "IMG");
                c.src = this.l;
                lC(this, a, c);
                u(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            lC(this, a, c);
            u(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.A));
            b.appendChild(c);
            c = kC(this, a);
            c.appendChild(b);
            return this.j ? mC(this, a, c, this.j) : c
        }
    };

    function oC(a, b) {
        b = b.filter(c => x(c, bq, 4) ? .g() === 5 && Ki(c, 8) === 1);
        b = gv(b, a);
        a = Sv(b, a);
        a.sort((c, d) => d.la.g - c.la.g);
        return a[0] || null
    };

    function pC({
        be: a,
        ed: b,
        Nd: c,
        ce: d,
        gd: e,
        Od: f
    }) {
        const g = [];
        for (let n = 0; n < f; n++)
            for (let p = 0; p < c; p++) {
                var h = p,
                    k = c - 1,
                    l = n,
                    m = f - 1;
                g.push({
                    x: a + (k === 0 ? 0 : h / k) * (b - a),
                    y: d + (m === 0 ? 0 : l / m) * (e - d)
                })
            }
        return g
    }

    function qC(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function rC(a, b) {
        var c = pC({
            be: b.left,
            ed: b.right,
            Nd: 10,
            ce: b.top,
            gd: b.bottom,
            Od: 10
        });
        b = new Set;
        for (const d of c)(c = sC(a, d)) && b.add(c);
        return b
    }

    function tC(a, b) {
        for (const c of b)
            if (b = sC(a, c)) return b;
        return null
    }

    function uC(a, b, c) {
        if (ek(b, "position") !== "fixed") return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || hk(b).width <= 1 && hk(b).height <= 1 || a.g.Bi && !a.g.Bi(b) ? !0 : !1;
        a.g.ng && a.g.ng(b, c, d);
        return d ? null : b
    }

    function sC(a, b) {
        var c = qC(a.K.document, b);
        if (c) {
            var d;
            if (!(d = uC(a, c, b))) a: {
                d = a.K.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    const e = uC(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    }
    var vC = class {
        constructor(a, b = {}) {
            this.K = a;
            this.g = b
        }
    };

    function wC({
        K: a,
        qj: b,
        lj: c,
        ai: d,
        wo: e,
        xo: f,
        Z: g
    }) {
        let h = 0;
        try {
            h |= Un(a, f);
            const m = Math.min(a.screen.width || 0, a.screen.height || 0);
            h |= m ? m < 320 ? 8192 : 0 : 2048;
            h |= a.navigator && xC(a.navigator.userAgent) ? 1048576 : 0;
            if (b) {
                f = h;
                const n = a.innerHeight;
                var k = df(a) * n >= b;
                var l = f | (k ? 0 : 1024)
            } else l = h | (a.innerHeight >= a.innerWidth ? 0 : 8);
            h = l;
            h |= Wn(a, c, !0, e)
        } catch {
            h |= 32
        }
        switch (d) {
            case 2:
                yC(a, g) && (h |= 16777216);
                break;
            case 1:
                zC(a, g) && (h |= 16777216)
        }
        return h
    }

    function xC(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var yC = (a, b = null) => {
            const c = pC({
                be: 0,
                ed: a.innerWidth,
                Nd: 3,
                ce: 0,
                gd: Math.min(Math.round(a.innerWidth / 320 * 50), AC) + 15,
                Od: 3
            });
            return tC(BC(a, b), c) != null
        },
        zC = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), AC) + 15,
                f = pC({
                    be: 0,
                    ed: c,
                    Nd: 3,
                    ce: d - e,
                    gd: d,
                    Od: 3
                });
            e > 25 && f.push({
                x: c - 25,
                y: d - 25
            });
            return tC(BC(a, b), f) != null
        };

    function CC(a, b) {
        var c = U(Cr);
        a: {
            const e = a.innerWidth,
                f = a.innerHeight;
            let g = f;
            for (; g > b;) {
                var d = pC({
                    be: 0,
                    ed: e,
                    Nd: 9,
                    ce: g - b,
                    gd: g,
                    Od: 9
                });
                d = tC(BC(a), d);
                if (!d) {
                    a = f - g;
                    break a
                }
                g = c ? Math.min(d.getBoundingClientRect().top - 1, g - 1) : d.getBoundingClientRect().top - 1
            }
            a = null
        }
        return a
    }

    function BC(a, b = null) {
        return new vC(a, {
            ng: DC(a, b)
        })
    }

    function DC(a, b = null) {
        if (b) return (c, d, e) => {
            Qk(b, "ach_evt", {
                tn: c.tagName,
                id: c.getAttribute("id") ? ? "",
                cls: c.getAttribute("class") ? ? "",
                ign: String(e),
                pw: a.innerWidth,
                ph: a.innerHeight,
                x: d.x,
                y: d.y
            }, !0, 1)
        }
    }
    const AC = 90 * 1.38;

    function EC(a) {
        a = new FC(a);
        a.J();
        return a
    }

    function GC(a) {
        if (!BA(a.win)) {
            if (a.j.P) {
                const b = co(a.win);
                if (b > a.g + 100 || b < a.g - 100) a.j.g(!1), a.g = Xn(a.win)
            }
            a.l && a.win.clearTimeout(a.l);
            a.l = a.win.setTimeout(() => void HC(a), 200)
        }
    }

    function HC(a) {
        if (!BA(a.win)) {
            var b = Xn(a.win);
            a.g && a.g > b && (a.g = b);
            b = co(a.win);
            b >= a.g - 100 && (a.g = Math.max(a.g, b), a.j.g(!0))
        }
    }
    var FC = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = 0;
            this.l = null;
            this.A = () => void GC(this)
        }
        J() {
            this.win.addEventListener("scroll", this.A);
            this.g = Xn(this.win);
            HC(this)
        }
        i() {
            this.win.removeEventListener("scroll", this.A);
            this.j.g(!1);
            super.i()
        }
    };

    function IC(a) {
        a.g || (a.g = JC(a));
        u(a.g, {
            display: "block"
        });
        a.A.Og();
        a.j.g(a.B)
    }

    function KC(a) {
        const b = a.A.Ng();
        switch (b) {
            case 0:
                a.j.g(a.B);
                break;
            case 1:
                a.g && (u(a.g, {
                    display: "none"
                }), a.j.g(null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function JC(a) {
        var b = CC(a.l, a.A.qg() + 60);
        b = b == null ? 30 : b + 30;
        const c = a.l.document.createElement("div");
        u(c, qr(a.l));
        u(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.B = a.A.Ja(a.l, () => a.i(), () => {
            a.G.dispose();
            KC(a)
        }, () => {
            a.G.dispose();
            IC(a)
        });
        c.appendChild(a.B);
        a.F && (c.className = a.F);
        a.l.document.body.appendChild(c);
        return c
    }
    class LC {
        constructor(a, b, c) {
            this.l = a;
            this.A = b;
            this.B = null;
            this.j = new R(null);
            this.F = c || null;
            this.G = EC(a);
            this.g = null
        }
        J() {
            const a = Fo(this.G.j);
            Io(a, !0, () => void IC(this));
            Ko(a, !1, () => void KC(this))
        }
        i() {
            this.g && this.g.parentNode && this.g.parentNode.removeChild(this.g);
            this.g = null;
            this.G.dispose();
            this.j.g(null)
        }
        C() {
            return this.j
        }
    };

    function MC(a) {
        a.G.g(0);
        a.l != null && (a.l.i(), a.l = null);
        a.j != null && (a.j.i(), a.j = null)
    }

    function NC(a) {
        a.j = new LC(a.B, a.I, a.F);
        a.j.J();
        Lo(a.A, a.j.C());
        a.G.g(2)
    }
    class OC {
        constructor(a, b, c, d, e) {
            this.B = a;
            this.H = b;
            this.O = c;
            this.I = d;
            this.F = e;
            this.G = new R(0);
            this.A = new R(null);
            this.j = this.l = this.g = null
        }
        J() {
            this.H ? (this.l = new SB(this.B, this.H, this.O, this.F), this.l.J(), Lo(this.A, this.l.C()), this.G.g(1), this.g == null && (this.g = new yp(this.B), this.g.J(2E3)), wp(this.g, () => {
                MC(this);
                NC(this)
            })) : NC(this)
        }
        i() {
            MC(this);
            this.g && (this.g.dispose(), this.g = null)
        }
        C() {
            return this.A
        }
    };
    var PC = class {
        constructor(a, b, c) {
            this.position = a;
            this.Ab = b;
            this.Pe = c
        }
    };

    function QC(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };

    function RC(a, b, c) {
        var d = P(a);
        d = new PC(b.Tb.Kg(b.mb), b.Ab + 2 * b.mb, Math.min(d, b.Dd) - b.Tb.od() + 2 * b.mb);
        d = d.position.fg(a, d.Ab, d.Pe);
        var e = Vn(a),
            f = P(a);
        c = SC(a, new Kj(md(d.top, 0, f - 1), md(d.right, 0, e - 1), md(d.bottom, 0, f - 1), md(d.left, 0, e - 1)), c);
        f = TC(c);
        let g = d.top;
        e = [];
        for (let h = 0; h < f.length; h++) f[h].start > g && e.push(new QC(g, f[h].start)), g = f[h].end;
        g < d.bottom && e.push(new QC(g, d.bottom));
        a = P(a);
        d = [];
        for (f = e.length - 1; f >= 0; f--) d.push(new QC(a - e[f].end, a - e[f].start));
        a: {
            for (const h of d)
                if (a = h.start + b.mb, a > b.Tb.od() +
                    b.bf ? a = null : (d = Math.min(h.end - b.mb, b.Dd) - a, a = d < b.ef ? null : {
                        position: b.Tb.wh(a),
                        Ec: d
                    }), a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            te: b,
            eo: c
        }
    }

    function SC(a, b, c) {
        const d = rC(new vC(a), b);
        c.forEach(e => void d.delete(e));
        return d
    }

    function TC(a) {
        return Array.from(a).map(UC).sort((b, c) => b.start - c.start)
    }

    function UC(a) {
        a = a.getBoundingClientRect();
        return new QC(a.top, a.bottom)
    };

    function VC({
        ga: a,
        sa: b
    }) {
        return new WC(a, b)
    }
    var WC = class {
        constructor(a, b) {
            this.ga = a;
            this.sa = b
        }
        Kg(a) {
            return new WC(this.ga - a, this.sa - a)
        }
        fg(a, b, c) {
            a = P(a) - this.ga - c;
            return new Kj(a, this.sa + b, a + c, this.sa)
        }
        Tf(a) {
            a.bottom = `${this.ga}px`;
            a.left = `${this.sa}px`;
            a.right = ""
        }
        rg() {
            return 0
        }
        od() {
            return this.ga
        }
        wh(a) {
            return new WC(a, this.sa)
        }
    };

    function XC({
        ga: a,
        Ba: b
    }) {
        return new YC(a, b)
    }
    var YC = class {
        constructor(a, b) {
            this.ga = a;
            this.Ba = b
        }
        Kg(a) {
            return new YC(this.ga - a, this.Ba - a)
        }
        fg(a, b, c) {
            var d = Vn(a);
            a = P(a) - this.ga - c;
            d = d - this.Ba - b;
            return new Kj(a, d + b, a + c, d)
        }
        Tf(a) {
            a.bottom = `${this.ga}px`;
            a.right = `${this.Ba}px`;
            a.left = ""
        }
        rg() {
            return 1
        }
        od() {
            return this.ga
        }
        wh(a) {
            return new YC(a, this.Ba)
        }
    };

    function ZC(a) {
        const b = a.Gi,
            c = a.di,
            d = a.Wh,
            e = a.Sj,
            f = a.Xh;
        a = a.Vh;
        return wz('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' + X(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
            X(d) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + X(a) + "px; border-radius: " + X(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " + X(a) + "px; margin: 0; border-radius: " + X(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            X(d) + "px; height: " + X(d) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + X(d) + "px; margin-bottom: " + X(f) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + X(d) + "px; width: " + X(d) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            X(d - 6) + "px; width: " + X(d - 6) + "px; border-radius: " + X(d / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            X(e) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + X(d) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            X(16) + "px; max-width: calc(90vw - " + X(d * 2) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + X(d + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + X(d + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            X(d * 2) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0; text-align: start;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            Fz(b) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + Fz(c) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function $C(a) {
        const b = a.googleIconName,
            c = a.ariaLabel,
            d = a.backgroundColorCss,
            e = a.iconColorCss;
        a = a.li;
        return wz('<div class="ft-button ft-collapsible ft-collapsed ft-last-button">' + ((a instanceof qz ? a.Ja() : a) ? "<style>@scope {" + X(a) + "}</style>" : "") + '<button class="ft-styless-button" aria-label="' + Fz(c) + '" style="background-color: ' + Fz(X(d)) + '"><span class="ft-highlighter"></span><span class="google-symbols" style="color: ' + Fz(X(e)) + '" aria-hidden="true">' + uz(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const aD = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function bD(a, b) {
        a = new cD(a, b, dD(a, b));
        a.J();
        return a
    }

    function eD() {
        ({
            hc: a
        } = {
            hc: 2
        });
        var a;
        return a > 1 ? 50 : 120
    }

    function fD(a, b, c) {
        gD(a) === 0 && b.classList.remove("ft-collapsed");
        hD(b, c);
        vo(a.win);
        b.classList.remove("ft-collapsed");
        iD(a);
        return () => void jD(a, b, c)
    }

    function kD(a) {
        lD(a.g.ka.Gc).length === 0 ? (a.l.P ? .Gj(), a.l.g(null), a.g.ka.Oe.g(!1), a.g.ka.Bg.g(!1), a.g.ka.We.g(!1)) : (a.g.ka.Oe.g(!0), mD(a))
    }

    function nD(a, {
        Gh: b = 0,
        co: c = 0
    }) {
        b = Math.max(lD(a.g.Eb).length + b, 0);
        c = Math.max(lD(a.g.lb).length + c, 0);
        const d = b + c;
        let e = d * 50;
        b > 0 && c > 0 && (e += 11);
        e += Math.max(0, d - 1) * 10;
        d >= a.j.hc && (e += 60);
        d > 1 && (e += 10);
        return e
    }

    function gD(a) {
        const b = a.g.lb;
        return lD(a.g.Eb).length + lD(b).length
    }

    function iD(a) {
        const b = a.g.lb,
            c = a.g.separator;
        lD(a.g.Eb).length > 0 && lD(b).length > 0 ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        gD(a) >= a.j.hc ? a.g.Ag.g(!0) : a.g.Ag.g(!1);
        gD(a) > 1 ? a.g.ug.g(!0) : a.g.ug.g(!1);
        gD(a) > 0 ? a.g.isVisible.g(!0) : a.g.isVisible.g(!1);
        oD(a);
        pD(a)
    }

    function jD(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), iD(a), a.win.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function oD(a) {
        const b = lD(a.g.Eb).concat(lD(a.g.lb));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        gD(a) >= a.j.hc || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function pD(a) {
        const b = lD(a.g.Eb).concat(lD(a.g.lb)).filter(c => !c.classList.contains("ft-reg-button"));
        a.F.g(b.length > 0)
    }

    function qD(a) {
        io(a.g.ka.Gc.children, b => {
            const c = a.g.ka.Kc;
            jD(a, b, a.g.ka.Gc);
            const d = c.get(b);
            c.delete(b);
            d ? .isDismissed.g(!0)
        });
        kD(a)
    }

    function mD(a) {
        if (!a.l.P) {
            var b = rD(a.win, {
                googleIconName: "verified_user",
                ariaLabel: K(a.j.Oa, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.g.ka.Bg.g(!a.g.ka.isVisible.P);
                    for (const [, c] of a.g.ka.Kc) c.Eg = !0;
                    a.g.ka.We.g(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.Tc.classList.add("ft-reg-button");
            fD(a, b.Tc, a.g.lb);
            Lo(b.dj, a.g.ka.isVisible);
            a.l.g({
                jo: b,
                Gj: () => void jD(a, b.Tc, a.g.lb)
            })
        }
    }

    function sD(a) {
        var b = a.g.ka.We,
            c = b.g;
        a: {
            for ([, d] of a.g.ka.Kc)
                if (a = d, a.showUnlessUserInControl && !a.Eg) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function tD(a) {
        a.g.ka.ci.listen(() => {
            qD(a)
        })
    }
    var cD = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.j = b;
            this.g = c;
            this.l = new R(null);
            this.F = new R(!1)
        }
        addButton(a) {
            a = rD(this.win, a);
            return fD(this, a.Tc, this.g.Eb)
        }
        addRegulatoryMessage(a) {
            const b = this.g.ka.Gc,
                c = uD(this.win, a);
            hD(c.cf, b);
            this.g.ka.Kc.set(c.cf, c);
            kD(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    sD(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    sD(this)
                },
                isDismissed: No(c.isDismissed),
                removeCallback: () => {
                    var d = c.cf;
                    const e = this.g.ka.Gc;
                    d.parentNode === e && e.removeChild(d);
                    this.g.ka.Kc.delete(d);
                    kD(this)
                }
            }
        }
        H() {
            return Fo(this.l.map(a => a != null))
        }
        C() {
            return Fo(this.F)
        }
        A() {
            return [this.g.container]
        }
        i() {
            const a = this.g.bb.Za;
            a.parentNode ? .removeChild(a);
            super.i()
        }
        J() {
            vp(this.win, aD);
            Lo(this.g.ak, this.j.Fc);
            this.win.document.body.appendChild(this.g.bb.Za);
            tD(this)
        }
    };

    function dD(a, b) {
        const c = FA(a),
            d = c.shadowRoot;
        d.appendChild(ke(new Yd(a.document), rz(ZC({
            Gi: K(b.Oa, 1),
            di: K(b.Oa, 3),
            Wh: 50,
            Sj: 11,
            Xh: 10,
            Vh: 5
        }))));
        const e = EA("ft-container", d),
            f = EA("ft-expand-toggle", d),
            g = EA("ft-expand-toggle-container", d),
            h = new R(null);
        h.i(p => {
            e.style.zIndex = String(p ? ? 2147483647)
        });
        const k = new R(!0);
        Io(k, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        Io(k, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                k.g(!k.P)
            });
        const l = new R(!1);
        Io(l, !0, () => {
            g.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        Io(l, !1, () => {
            g.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            k.g(!0)
        });
        const m = new R(!1);
        Io(m, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        Io(m, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.i(p => {
            if (p) {
                p.Tf(e.style);
                p = p.rg();
                switch (p) {
                    case 0:
                        e.classList.add("ft-left-pos");
                        e.classList.remove("ft-right-pos");
                        break;
                    case 1:
                        e.classList.add("ft-right-pos");
                        e.classList.remove("ft-left-pos");
                        break;
                    default:
                        throw Error(`Unknown HorizontalAnchoring: ${p}`);
                }
                vo(a)
            }
        });
        const n = new R(!1);
        b = Eo(vD(a, d), n, b.position.map(p => p !== null));
        Io(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        Io(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = wD(a, EA("ft-reg-bubble", d));
        return {
            container: e,
            Eb: EA("ft-button-holder", d),
            lb: EA("ft-bottom-button-holder", d),
            separator: EA("ft-separator", d),
            bb: c,
            ak: h,
            mo: k,
            Ag: l,
            ug: m,
            isVisible: n,
            ka: b
        }
    }

    function wD(a, b) {
        const c = new R(!1),
            d = new R(!1),
            e = Go(c, d);
        Io(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        Io(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        const f = new R(!1);
        Io(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        Io(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        const g = EA("ft-reg-bubble-close", b),
            h = new Ro;
        g.addEventListener("click", () => {
            Qo(h)
        });
        const k = EA("ft-reg-message-holder", b);
        op(lp(a, k)).i(() => {
            b.style.height = `${k.offsetHeight}px`
        });
        return {
            Gc: k,
            Bg: c,
            We: d,
            isVisible: e,
            Oe: f,
            Kc: new Map,
            ci: Oo(h)
        }
    }

    function rD(a, b) {
        const c = ke(new Yd(a.document), rz($C({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6",
            iconColorCss: b.iconColorCss || "#3c4043",
            li: b.buttonExtension ? .styleSheet
        })));
        if (b.cornerNumber !== void 0) {
            const d = md(Math.round(b.cornerNumber), 0, 99);
            EA("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick && DA("BUTTON", c).addEventListener("click", b.onClick);
        a = new R(!1);
        Io(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        Io(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            Tc: c,
            dj: a
        }
    }

    function uD(a, b) {
        a = new Yd(a.document);
        var c = wz('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = ke(a, rz(c));
        c = EA("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText), c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = EA("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) :
            c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            cf: a,
            showUnlessUserInControl: !1,
            Eg: !1,
            isDismissed: new R(!1)
        }
    }

    function hD(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }

    function lD(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function vD(a, b) {
        const c = new R(!1),
            d = EA("ft-symbol-font-load-test", b);
        b = EA("ft-symbol-reference", d);
        const e = EA("ft-text-reference", d),
            f = lp(a, b);
        Jo(op(f).map(g => g.width > 0 && g.width < e.offsetWidth / 2), !0, () => {
            c.g(!0);
            d.parentNode ? .removeChild(d);
            f.dispose()
        });
        return c
    };

    function xD(a) {
        const b = new Ro,
            c = bp(a, 2500, () => void Qo(b));
        return new yD(a, () => void zD(a, () => void c()), Oo(b))
    }

    function AD(a) {
        const b = new MutationObserver(() => {
            a.g()
        });
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        yo(a, () => void b.disconnect())
    }

    function BD(a) {
        a.win.addEventListener("resize", a.g);
        yo(a, () => void a.win.removeEventListener("resize", a.g))
    }
    var yD = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.l = c;
            this.j = !1
        }
    };

    function zD(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function CD(a) {
        return a.g[a.g.length - 1]
    }
    var ED = class {
        constructor() {
            this.j = DD;
            this.g = [];
            this.i = new Set
        }
        add(a) {
            if (this.i.has(a)) return !1;
            const b = kb(this.g, a, this.j);
            this.g.splice(b >= 0 ? b : -b - 1, 0, a);
            this.i.add(a);
            return !0
        }
        first() {
            return this.g[0]
        }
        has(a) {
            return this.i.has(a)
        }
        delete(a) {
            db(this.g, b => b === a);
            return this.i.delete(a)
        }
        clear() {
            this.i.clear();
            return this.g.splice(0, this.g.length)
        }
        size() {
            return this.g.length
        }
    };

    function FD(a) {
        var b = a.Ec.P;
        let c;
        for (; a.j.ji() > b && (c = a.i.first());) {
            var d = a,
                e = c;
            GD(d, e);
            d.g.add(e)
        }
        for (;
            (d = CD(a.g)) && a.j.Si() <= b;) HD(a, d);
        for (;
            (d = CD(a.g)) && (c = a.i.first()) && d.priority > c.priority;) b = a, e = c, GD(b, e), b.g.add(e), HD(a, d)
    }

    function HD(a, b) {
        a.g.delete(b);
        a.i.add(b) && (b.Df = a.j.addButton(b.buttonSpec));
        b.isInToolbar.g(!0)
    }

    function GD(a, b) {
        b.Df && b.Df();
        b.Df = void 0;
        a.i.delete(b);
        b.isInToolbar.g(!1)
    }
    var ID = class {
        constructor(a, b) {
            this.Ec = a;
            this.j = b;
            this.g = new ED;
            this.i = new ED;
            this.l = 0;
            this.Ec.listen(() => void FD(this))
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                Jf: this.l++,
                isInToolbar: new R(!1)
            };
            this.g.add(b);
            FD(this);
            return {
                isInToolbar: No(Fo(b.isInToolbar)),
                removeCallback: () => {
                    GD(this, b);
                    this.g.delete(b);
                    FD(this)
                }
            }
        }
    };

    function DD(a, b) {
        return a.priority === b.priority ? b.Jf - a.Jf : a.priority - b.priority
    };

    function JD(a) {
        if (!a.g) {
            const b = EC(a.win);
            a.g = Fo(b.j);
            xo(a, b)
        }
        return a.g
    }

    function KD(a, b, c) {
        const d = a.j.addRegulatoryMessage(b.messageSpec);
        b.messageSpec.regulatoryMessage.disableFloatingToolbarAutoShow || LD(a, d, c);
        Jo(c, !0, () => {
            d.removeCallback()
        })
    }

    function LD(a, b, c) {
        a = JD(a);
        const d = Io(a, !0, () => void b.showUnlessUserInControl()),
            e = Io(a, !1, () => void b.hideUnlessUserInControl());
        Io(Co(b.isDismissed), !0, () => {
            d();
            e()
        });
        Jo(c, !0, () => {
            d();
            e()
        })
    }
    var MD = class extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.j = b;
            this.g = null
        }
        addRegulatoryMessage(a) {
            const b = new R(!1),
                c = Jo(JD(this), !0, () => {
                    KD(this, a, b)
                });
            return {
                removeCallback: () => {
                    b.g(!0);
                    c()
                }
            }
        }
    };

    function ND(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new OD(a, b));
        return a.googFloatingToolbarManager
    }

    function PD(a) {
        a.g || (a.g = QD(a.win, a.Hb, a.Fc), xo(a, a.g.Ib), xo(a, a.g.bh), RD(a), SD(a, a.g.Ib));
        return a.g
    }

    function TD(a) {
        var b = [];
        a.g ? .Ib ? .C().A() ? (b.push(() => UD(a)), b.push(() => VD(a))) : (b.push(() => VD(a)), b.push(() => UD(a)));
        a.g ? .Ib ? .H() ? .A() && b.push(() => {
            const c = P(a.win);
            return {
                position: VC({
                    ga: Math.floor(c / 3),
                    sa: 10
                }),
                Ec: 0
            }
        });
        for (const c of b)
            if (b = c()) return b;
        return null
    }

    function RD(a) {
        a.Fc.P === null && a.g ? .position.g(TD(a))
    }

    function SD(a, b) {
        const c = xD(a.win);
        c.j || (AD(c), BD(c), c.j = !0);
        c.l.listen(() => void RD(a));
        xo(a, c);
        b.H().listen(() => void RD(a));
        b.C().listen(() => void RD(a));
        a.Fc.listen(() => void RD(a))
    }

    function UD(a) {
        var b = a.win;
        const c = P(a.win);
        return RC(b, {
            Tb: XC({
                ga: 50,
                Ba: 10
            }),
            bf: Math.floor(c / 3),
            Ab: 60,
            ef: eD(),
            Dd: Math.floor(c / 2),
            mb: 20
        }, [...(a.g ? .Ib.A() ? ? []), a.win.document.body]).te
    }

    function VD(a) {
        var b = a.win;
        const c = P(a.win);
        return RC(b, {
            Tb: VC({
                ga: 50,
                sa: 10
            }),
            bf: Math.floor(c / 3),
            Ab: 60,
            ef: eD(),
            Dd: Math.floor(c / 2),
            mb: 40
        }, [...(a.g ? .Ib.A() ? ? []), a.win.document.body]).te
    }
    class OD extends Q {
        constructor(a, b) {
            super();
            this.win = a;
            this.Hb = b;
            this.g = null;
            this.Fc = WD(this.win, this)
        }
        addButton(a) {
            return PD(this).rj.addButton(a)
        }
        addRegulatoryMessage(a) {
            return PD(this).bh.addRegulatoryMessage(a)
        }
    }

    function QD(a, b, c) {
        const d = new R(null),
            e = bD(a, {
                hc: 2,
                position: d.map(f => f ? .position ? ? null),
                Oa: b,
                Fc: c
            });
        b = new ID(d.map(f => f ? .Ec || 0), {
            addButton: f => e.addButton(f),
            ji: () => nD(e, {}),
            Si: () => nD(e, {
                Gh: 1
            })
        });
        a = new MD(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            Ib: e,
            position: d,
            rj: b,
            bh: a
        }
    }

    function WD(a, b) {
        const c = new mA(a),
            d = new R(null),
            e = f => void d.g(f);
        yo(b, () => {
            lA(c, e)
        });
        c.g.maxZIndexListeners.push(e);
        d.g(kA(c));
        return d
    };
    const XD = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function YD(a, b, c, d, e) {
        a = new ZD(a, b, c, d, e);
        if (a.l) {
            vp(a.win, XD);
            var f = a.win;
            b = a.message;
            c = FA(f);
            e = c.shadowRoot;
            d = e.appendChild;
            f = new Yd(f.document);
            var g = wz('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(e,
                ke(f, rz(g)));
            d = EA("ipr-container", e);
            e = EA("ipr-button", d);
            b.actionButton ? (e.appendChild(b.actionButton.buttonText), e.addEventListener("click", b.actionButton.onClick)) : e.classList.add("ipr-display-none");
            d = EA("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.g = c.Za;
            Qv(a.l, a.g);
            a.j && a.j(dm(1));
            $D(a)
        } else aE(a);
        return a
    }

    function $D(a) {
        const b = new yp(a.win);
        b.J(2E3);
        xo(a, b);
        wp(b, () => {
            bE(a);
            aE(a);
            b.dispose()
        })
    }

    function aE(a) {
        const b = ND(a.win, a.Hb).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        yo(a, () => void b.removeCallback());
        a.j && a.j(dm(2))
    }

    function bE(a) {
        a.g && (a.g.parentNode ? .removeChild(a.g), a.g = null)
    }
    var ZD = class extends Q {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.l = b;
            this.message = c;
            this.Hb = d;
            this.j = e;
            this.g = null
        }
        i() {
            bE(this);
            super.i()
        }
    };
    var eE = (a, b, c, d, e) => U(Gr) ? cE(a, b, d, e) : dE(a, b, c, d, e);

    function dE(a, b, c, d, e) {
        const f = new OC(a, oC(a, e), new nC(b, d, "#FFF", "#4A4A4A", "normal"), new fC(b, c, d), "google-dns-link-placeholder");
        f.J();
        return () => f.i()
    }

    function cE(a, b, c, d) {
        const e = YD(a, oC(a, d), {
            actionButton: {
                buttonText: a.document.createTextNode(b),
                onClick: c
            }
        }, fE(a));
        return () => e.dispose()
    }

    function fE(a) {
        if (a = jC(a)) return a;
        W.ba(1234, Error("No messages"), void 0, void 0);
        return (new Fq).i()
    };

    function gE(a, b) {
        b && (a.i = eE(a.g, b.localizedDnsText, b.localizedDnsCollapseText, () => hE(a, b), a.l))
    }

    function iE(a) {
        var b = hC(a.g);
        if (jE(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            c != null && b != null && (a.i = eE(a.g, c, b, () => kE(a), a.l))
        }
    }

    function lE(a) {
        const b = gC(a.g);
        b.callbackQueue = b.callbackQueue || [];
        U(Qr) ? (iC(a.g).overrideDnsLink = !0, b.callbackQueue.push({
            INITIAL_US_STATES_DATA_READY: c => gE(a, c)
        })) : (hC(a.g).overrideDnsLink = !0, b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => iE(a)
        }))
    }

    function kE(a) {
        nA(a.j);
        hC(a.g).openConfirmationDialog(b => mE(a, b))
    }

    function hE(a, b) {
        nA(a.j);
        b.openConfirmationDialog(c => mE(a, c))
    }

    function mE(a, b) {
        b && a.i && (a.i(), a.i = null);
        oA(a.j)
    }
    class nE {
        constructor(a, b, c) {
            this.g = a;
            this.j = hA(b, 2147483643);
            this.l = c;
            this.i = null
        }
    }

    function jE(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function oE(a) {
        const b = a.document.createElement("ins");
        pE(a, b);
        u(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function qE(a, b, c, d) {
        const e = je(Xd(a), "IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        pE(a, e);
        u(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function rE(a, b) {
        const c = b.document.createElement("span");
        pE(b, c);
        u(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.i();
            d.stopPropagation()
        });
        return c
    }

    function sE(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.j));
        u(c, qr(b));
        u(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function tE(a) {
        const b = a.document.createElement("div");
        u(b, qr(a));
        u(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class uE {
        constructor(a, b, c, d) {
            this.l = a;
            this.A = b;
            this.j = c;
            this.i = d;
            this.g = new R(!1)
        }
        Ja(a, b, c, d) {
            c = oE(a);
            const e = qE(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = qE(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.i),
                g = rE(this, a),
                h = qE(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
            u(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = sE(this, a);
            a = tE(a);
            a.appendChild(c);
            a.appendChild(k);
            this.g.listen(l => {
                u(e, {
                    display: l ? "none" : "inline"
                });
                u(f, {
                    display: l ? "inline" : "none"
                });
                l ? (u(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), u(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), u(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (u(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), u(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), u(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        qg() {
            return 71
        }
        Ng() {
            this.g.g(!1);
            return 0
        }
        Og() {
            this.g.g(!0)
        }
    }

    function pE(a, b) {
        u(b, qr(a));
        u(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function vE(a) {
        wE(a.j, b => {
                var c = a.i,
                    d = b.Nj,
                    e = b.ei,
                    f = b.Mh;
                b = b.showRevocationMessage;
                var g = a.l;
                U(Ir) ? (e = oC(c, g), d = {
                    actionButton: {
                        buttonText: c.document.createTextNode(d),
                        onClick: b
                    },
                    informationText: c.document.createTextNode(f)
                }, f = jC(c), f || (W.ba(1233, Error("No messages"), void 0, void 0), f = (new Fq).i()), YD(c, e, d, f)) : (new OC(c, oC(c, g), new nC(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new uE(d, e, f, b), "google-revocation-link-placeholder")).J()
            },
            () => {
                oA(a.g);
                xE(a)
            })
    }

    function yE(a) {
        nA(a.g);
        vE(a)
    }

    function xE(a) {
        U(Hr) && (a.i.__tcfapi ? a.i.__tcfapi("addEventListener", 2, (b, c) => {
            c && b.eventStatus == "cmpuishown" ? nA(a.g) : oA(a.g)
        }) : W.ba(1250, Error("No TCF API function"), void 0, void 0))
    }
    class zE {
        constructor(a, b, c, d) {
            this.i = a;
            this.g = hA(b, 2147483643);
            this.l = c;
            this.j = d
        }
    };
    var AE = a => {
            if (!a || Bi(a, 1) == null) return !1;
            a = Bi(a, 1);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoConsentUiStatus: " + a);
            }
        },
        BE = a => {
            if (!a || Bi(a, 3) == null) return !1;
            a = Bi(a, 3);
            switch (a) {
                case 1:
                    return !0;
                case 2:
                    return !1;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + a);
            }
        },
        CE = a => a ? ti(a, 5) === !0 : !1,
        DE = a => a ? ti(a, 6) === !0 : !1;

    function EE() {
        return "m202408130101"
    };

    function FE(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            Ye: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && b.indexOf(a) === -1 && (c = !1, b = a);
        return {
            url: b,
            Ye: c
        }
    };

    function GE(a, b) {
        ye(a, (c, d) => {
            b[d] = c
        })
    }

    function HE(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && qe(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function IE() {
        if (JE) return JE;
        const a = Wj() || window,
            b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? JE = b : a.google_persistent_state_async = JE = new KE
    }

    function LE(a, b, c) {
        b = ME[b] || `google_ps_${b}`;
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function NE(a, b, c) {
        return LE(a, b, () => c)
    }

    function OE(a, b, c) {
        return a.S[ME[b] || `google_ps_${b}`] = c
    }

    function PE(a, b) {
        return OE(a, b, NE(a, b, 0) + 1)
    }

    function QE() {
        var a = IE();
        return NE(a, 20, {})
    }

    function RE() {
        var a = IE();
        const b = NE(a, 31, !1);
        b || OE(a, 31, !0);
        return !b
    }

    function SE() {
        var a = IE();
        const b = NE(a, 41, !1);
        b || OE(a, 41, !0);
        return !b
    }

    function TE() {
        var a = IE();
        return NE(a, 26)
    }

    function UE() {
        var a = IE();
        return NE(a, 28, [])
    }

    function VE() {
        var a = IE();
        return LE(a, 39, WE)
    }
    var KE = class {
            constructor() {
                this.S = {}
            }
        },
        JE = null;
    const ME = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function XE(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function YE(a, b) {
        a = XE(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function zn(a, b) {
        a.g.size > 0 || ZE(a);
        const c = a.g.get(0);
        c ? c.push(b) : a.g.set(0, [b])
    }

    function $E(a, b, c, d) {
        Hb(b, c, d);
        yo(a, () => Ib(b, c, d))
    }

    function aF(a, b) {
        a.j !== 1 && (a.j = 1, a.g.size > 0 && bF(a, b))
    }

    function ZE(a) {
        a.win.document.visibilityState ? $E(a, a.win.document, "visibilitychange", b => {
            a.win.document.visibilityState === "hidden" && aF(a, b);
            a.win.document.visibilityState === "visible" && (a.j = 0)
        }) : "onpagehide" in a.win ? ($E(a, a.win, "pagehide", b => {
            aF(a, b)
        }), $E(a, a.win, "pageshow", () => {
            a.j = 0
        })) : $E(a, a.win, "beforeunload", b => {
            aF(a, b)
        })
    }

    function bF(a, b) {
        for (let c = 9; c >= 0; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var cF = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = 0;
            this.g = new Map
        }
    };
    async function dF(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function eF(a) {
        const b = a.g.pc;
        return b !== null && b !== 0 ? b : a.g.pc = Ze(a.win)
    }

    function fF(a) {
        var b = a.g.wpc;
        if (b === null || b === "") b = a.g, a = a.win, a = a.google_ad_client ? String(a.google_ad_client) : XE(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client") ? ? "", b = b.wpc = a;
        return b
    }

    function gF(a, b) {
        var c = new bn;
        var d = eF(a);
        c = Pi(c, 1, d);
        c = an(c.Ub(fF(a)), a.g.sd);
        return Pi(c, 7, Math.round(b || a.win.performance.now()))
    }
    async function hF(a) {
        await dF(a.win, () => !(!eF(a) || !fF(a)))
    }

    function iF() {
        var a = O(jF);
        a.i && (a.g.tar += 1)
    }

    function kF(a) {
        var b = O(jF);
        if (b.i) {
            var c = b.l;
            a(c);
            b.g.cc = Ui(c)
        }
    }
    async function lF(a, b, c) {
        if (a.i && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await hF(a);
            var e = a.Z;
            a = gF(a, d);
            d = new Sl;
            b = M(d, 1, b);
            c = ei(b, 2, c, Kg);
            c = B(a, 9, cn, c);
            tn(e, c)
        }
    }
    async function mF(a, b) {
        await hF(a);
        var c = gF(a);
        b = B(c, 5, cn, b);
        a.i && !a.g.le.includes(2) && (a.g.le.push(2), tn(a.Z, b))
    }
    async function nF(a, b, c) {
        await hF(a);
        var d = a.Z;
        a = an(gF(a, c), 1);
        b = B(a, 6, cn, b);
        tn(d, b)
    }
    async function oF(a, b) {
        await hF(a);
        var c = a.Z;
        a = an(gF(a), 1);
        b = B(a, 13, cn, b);
        tn(c, b)
    }
    async function pF(a, b) {
        if (a.i) {
            await hF(a);
            var c = a.Z;
            a = gF(a);
            b = B(a, 11, cn, b);
            tn(c, b)
        }
    }
    var jF = class {
        constructor(a, b) {
            this.win = Wj() || window;
            this.j = b ? ? new cF(this.win);
            this.Z = a ? ? new Bn(EE(), 100, 100, !0, this.j);
            this.g = LE(IE(), 33, () => {
                const c = V(Fr),
                    d = c > 0 && xe() < 1 / c,
                    e = V(dt);
                return {
                    sd: c,
                    ssp: d,
                    sds: e,
                    ssps: e > 0 && xe() < 1 / e,
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
        get i() {
            return this.g.ssp
        }
        get bd() {
            return this.g.cu
        }
        set bd(a) {
            this.g.cu = a
        }
        get l() {
            return hy(1227, () => Vi(Tl, Dh(this.g.cc || []))) || new Tl
        }
    };

    function qF(a) {
        var b = new rF;
        return Li(b, 1, a)
    }
    var rF = class extends N {
        constructor() {
            super()
        }
    };

    function sF(a) {
        if (a.i.adsbygoogle_ama_fc_has_run !== !0) {
            var b = AE(a.g),
                c = BE(a.g),
                d = !1;
            b && (yE(new zE(a.i, a.A, a.l || oi(a.g, Nq, 4, w(ag)), a.j)), d = !0);
            c && (lE(new nE(a.i, a.A, a.l || oi(a.g, Nq, 4, w(ag)))), d = !0);
            kF(g => {
                g = L(g, 9, !0);
                g = L(g, 10, b);
                L(g, 11, c)
            });
            var e = CE(a.g),
                f = DE(a.g) || U(ts);
            e && (d = !0);
            d && (d = qF(e && f), a.j.start(U(Br), d), a.i.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class tF {
        constructor(a, b, c, d, e) {
            this.i = a;
            this.j = b;
            this.g = c;
            this.A = d;
            this.l = e || null
        }
    };

    function uF(a, b, c, d, e, f) {
        try {
            const g = a.g,
                h = ve("SCRIPT", g);
            h.async = !0;
            vd(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", () => {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", () => {
                c > 0 ? uF(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (g) {
            f()
        }
    }

    function vF(a, b, c = () => {}, d = () => {}) {
        uF(Xd(a), b, 0, !1, c, d)
    };

    function wF(a = null) {
        a = a || q;
        return a.googlefc || (a.googlefc = {})
    };
    Mb(Mn).map(a => Number(a));
    Mb(Nn).map(a => Number(a));
    const xF = q.URL;

    function yF(a) {
        const b = c => encodeURIComponent(c).replace(/[!()~']|(%20)/g, d => ({
            "!": "%21",
            "(": "%28",
            ")": "%29",
            "%20": "+",
            "'": "%27",
            "~": "%7E"
        })[d]);
        return Array.from(a, c => b(c[0]) + "=" + b(c[1])).join("&")
    };

    function zF(a) {
        var b = (new xF(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return b === "alwaysshow" ? b : a === "alwaysshow" ? a : null
    }

    function AF(a) {
        const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = (new xF(a.location.href)).searchParams.get("fctype")) && b.indexOf(a) !== -1 ? a : null
    }

    function BF(a) {
        var b = new xF(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        Object.assign(a, c);
        if (a.port && a.port[0] === ":") throw Error("port should not start with ':'");
        a.hash && a.hash[0] != "#" && (a.hash = "#" + a.hash);
        c.search ? c.search[0] != "?" && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + yF(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol +
            "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = (new xF(b)).toString();
        a.charAt(a.length - 1) === "/" && (a = a.substring(0, a.length - 1));
        return a.toString().length <= 1E3 ? a : null
    };

    function CF(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = ve("IFRAME", c);
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
    var DF = Wi(class extends N {});

    function EF(a) {
        if (a.g) return a.g;
        a.I && a.I(a.j) ? a.g = a.j : a.g = Me(a.j, a.O);
        return a.g ? ? null
    }

    function FF(a) {
        a.l || (a.l = b => {
            try {
                var c = a.H ? a.H(b) : void 0;
                if (c) {
                    var d = c.kf,
                        e = a.F.get(d);
                    e && (e.zj || a.F.delete(d), e.Pb ? .(e.ri, c.payload))
                }
            } catch (f) {}
        }, Hb(a.j, "message", a.l))
    }

    function GF(a, b, c) {
        if (EF(a))
            if (a.g === a.j)(b = a.C.get(b)) && b(a.g, c);
            else {
                var d = a.A.get(b);
                if (d && d.Cc) {
                    FF(a);
                    var e = ++a.R;
                    a.F.set(e, {
                        Pb: d.Pb,
                        ri: d.zd(c),
                        zj: b === "addEventListener"
                    });
                    a.g.postMessage(d.Cc(c, e), "*")
                }
            }
    }
    var HF = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.O = b;
            this.I = c;
            this.H = d;
            this.C = new Map;
            this.R = 0;
            this.A = new Map;
            this.F = new Map;
            this.l = void 0;
            this.j = a
        }
        i() {
            delete this.g;
            this.C.clear();
            this.A.clear();
            this.F.clear();
            this.l && (Ib(this.j, "message", this.l), delete this.l);
            delete this.j;
            delete this.H;
            super.i()
        }
    };
    const IF = (a, b) => {
            const c = {
                cb: d => {
                    d = DF(d);
                    b.Ra({
                        jc: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        JF = {
            zd: a => a.Ra,
            Cc: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            Pb: (a, b) => {
                a({
                    jc: b
                })
            }
        };

    function KF(a) {
        a = DF(a.data.__fciReturn);
        return {
            payload: a,
            kf: Di(a, 1)
        }
    }

    function LF(a, b = !1) {
        if (b) return !1;
        a.j || (a.g = !!EF(a.caller), a.j = !0);
        return a.g
    }

    function MF(a) {
        return new Promise(b => {
            LF(a) && GF(a.caller, "getDataWithCallback", {
                command: "loaded",
                Ra: c => {
                    b(c.jc)
                }
            })
        })
    }

    function NF(a, b) {
        LF(a) && GF(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: Ti(b),
            Ra: () => {}
        })
    }
    var OF = class extends Q {
        constructor(a) {
            super();
            this.g = this.j = !1;
            this.caller = new HF(a, "googlefcPresent", void 0, KF);
            this.caller.C.set("getDataWithCallback", IF);
            this.caller.A.set("getDataWithCallback", JF)
        }
        i() {
            this.caller.dispose();
            super.i()
        }
    };
    const PF = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function QF(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = PF(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (qj({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function RF(a, b = {}) {
        return QF(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !b.idpcApplies : (b.idpcApplies || a.gdprApplies !== void 0 || b.lo) && (b.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? SF(a, "1", 0) : !0 : !1
    }

    function SF(a, b, c) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var d = a.publisher.restrictions[b];
                if (d !== void 0) {
                    d = d["755"];
                    break a
                }
            }
            d = void 0
        }
        if (d === 0) return !1;
        let e = c;c === 2 ? (e = 0, d === 2 && (e = 1)) : c === 3 && (e = 1, d === 1 && (e = 0));
        if (e === 0) a = a.purpose && a.vendor ? (c = TF(a.vendor.consents, "755")) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && TF(a.purpose.consents, b) : !0;
        else {
            var f;
            e === 1 ? f = a.purpose && a.vendor ? TF(a.purpose.legitimateInterests, b) && TF(a.vendor.legitimateInterests, "755") : !0 : f = !0;
            a = f
        }
        return a
    }

    function TF(a, b) {
        return !(!a || !a[b])
    }

    function UF(a, b, c) {
        return a.gdprApplies === !1 ? !0 : b.every(d => SF(a, d, c))
    }

    function VF(a) {
        if (a.g) return a.g;
        a.g = Me(a.j, "__tcfapiLocator");
        return a.g
    }

    function WF(a) {
        return typeof a.j.__tcfapi === "function" || VF(a) != null
    }

    function XF(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if (VF(a)) {
            YF(a);
            const e = ++a.H;
            a.C[e] = c;
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

    function ZF(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = Bb(() => b(c));
        let e = 0;
        a.F !== -1 && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.F));
        XF(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = PF(c), c.internalBlockOnErrors = a.A, QF(c) ? (c.internalErrorState != 0 && (c.tcString = "tcunavailable"), XF(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
        })
    }

    function YF(a) {
        a.l || (a.l = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Hb(a.j, "message", a.l))
    }
    class $F extends Q {
        constructor(a, b = {}) {
            super();
            this.j = a;
            this.g = null;
            this.C = {};
            this.H = 0;
            this.F = b.timeoutMs ? ? 500;
            this.A = b.Sh ? ? !1;
            this.l = null
        }
        i() {
            this.C = {};
            this.l && (Ib(this.j, "message", this.l), delete this.l);
            delete this.C;
            delete this.j;
            delete this.g;
            super.i()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = Bb(() => a(b));
            let d = 0;
            this.F !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.F));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = PF(b),
                    b.internalBlockOnErrors = this.A, g && b.internalErrorState === 0 || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                XF(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && XF(this, "removeEventListener", null, a.listenerId)
        }
    };

    function wE(a, b, c) {
        const d = wF(a.win);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = wF(a.win),
                    f = new $F(a.win);
                WF(f) && ZF(f, g => {
                    g.cmpId === 300 && g.tcString && g.tcString !== "tcunavailable" && b({
                        Nj: (0, e.getDefaultConsentRevocationText)(),
                        ei: (0, e.getDefaultConsentRevocationCloseText)(),
                        Mh: (0, e.getDefaultConsentRevocationAttestationText)(),
                        showRevocationMessage: () => {
                            (0, e.showRevocationMessage)()
                        }
                    })
                });
                c()
            }
        })
    }

    function aG(a, b = !1, c) {
        const d = {};
        try {
            const f = zF(a.win),
                g = AF(a.win);
            d.fc = f;
            d.fctype = g
        } catch (f) {}
        let e;
        try {
            e = BF(a.win.location.href)
        } catch (f) {}
        b && e && (d.href = e);
        b = jc({
            id: a.g
        }, { ...d,
            ers: 2
        });
        vF(a.win, b, () => {}, () => {});
        c && NF(new OF(a.win), c)
    }
    var bG = class {
        constructor(a, b) {
            this.win = a;
            this.g = b
        }
        start(a = !1, b) {
            if (this.win === this.win.top) try {
                CF(this.win, "googlefcPresent"), aG(this, a, b)
            } catch (c) {}
        }
    };
    const cG = new Set(["ARTICLE", "SECTION"]);
    var dG = class {
        constructor(a) {
            this.g = a
        }
    };

    function eG(a, b) {
        return Array.from(b.classList).map(c => `${a}=${c}`)
    }

    function fG(a) {
        return a.classList.length > 0
    }

    function gG(a) {
        return cG.has(a.tagName)
    };
    var hG = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function iG(a) {
        return Da(a) && a.nodeType == 1 && a.tagName == "FIGURE" ? a : (a = a.parentNode) ? iG(a) : null
    };
    var jG = a => {
        var b = a.src;
        const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
        (b && b.startsWith("data:") && c ? c : b || c) ? (a.getAttribute("srcset"), b = (b = iG(a)) ? (b = b.getElementsByTagName("figcaption")[0]) ? b.textContent : null : null, a = new hG(a, b || a.getAttribute("alt") || null)) : a = null;
        return a
    };
    var kG = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        delete(a, b) {
            const c = this.map.get(a);
            return c ? (b = c.delete(b), c.size === 0 && this.map.delete(a), b) : !1
        }
        get(a) {
            return [...(this.map.get(a) ? ? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            let c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            let a = 0;
            for (const b of this.map.values()) a += b.size;
            return a
        }
        values() {
            const a = this.map;
            return function*() {
                for (const b of a.values()) yield* b
            }()
        }[Symbol.iterator]() {
            const a = this.map;
            return function*() {
                for (const [b,
                        c
                    ] of a) {
                    const d = b,
                        e = c;
                    for (const f of e) yield [d, f]
                }
            }()
        }
    };

    function lG(a) {
        return [a[0],
            [...a[1]]
        ]
    };

    function mG(a) {
        return Array.from(nG(a).map.values()).filter(b => b.size >= 3).map(b => [...b])
    }

    function oG(a, b) {
        return b.every(c => {
            var d = a.g.getBoundingClientRect(c.g);
            if (d = d.height >= 50 && d.width >= a.A) {
                var e = a.g.getBoundingClientRect(c.g);
                d = a.l;
                e = new QC(e.left, e.right);
                d = Math.max(d.start, e.start) <= Math.min(d.end, e.end)
            }
            return d && so(a.j, {
                eb: c.g,
                Xa: pG,
                Db: !0
            }) === null
        })
    }

    function qG(a) {
        return mG(a).sort(rG).find(b => oG(a, b)) || []
    }

    function nG(a) {
        return sG(Array.from(a.win.document.getElementsByTagName("IMG")).map(jG).filter(Sp), b => {
            var c = [...eG("CLASS_NAME", b.g)],
                d = b.g.parentElement;
            d = [...(d ? eG("PARENT_CLASS_NAME", d) : [])];
            var e = b.g.parentElement ? .parentElement;
            e = [...(e ? eG("GRANDPARENT_CLASS_NAME", e) : [])];
            var f = (f = so(a.i.g, {
                eb: b.g,
                Xa: fG
            })) ? eG("NEAREST_ANCESTOR_CLASS_NAME", f) : [];
            return [...c, ...d, ...e, ...f, ...(b.i ? ["HAS_CAPTION=true"] : []), ...(so(a.i.g, {
                eb: b.g,
                Xa: gG
            }) ? ["ARTICLE_LIKE_ANCESTOR=true"] : [])]
        })
    }
    var tG = class {
        constructor(a, b, c, d, e) {
            var f = new ip;
            this.win = a;
            this.l = b;
            this.A = c;
            this.g = f;
            this.j = d;
            this.i = e
        }
    };

    function sG(a, b) {
        const c = new kG;
        for (const d of a)
            for (const e of b(d)) c.add(e, d);
        return c
    }

    function pG(a) {
        return a.tagName === "A" && a.hasAttribute("href")
    }

    function rG(a, b) {
        return b.length - a.length
    };

    function uG(a) {
        const b = a.l.parentNode;
        if (!b) throw Error("Image not in the DOM");
        const c = vG(a.j),
            d = wG(a.j);
        c.appendChild(d);
        b.insertBefore(c, a.l.nextSibling);
        a.A.g().i(e => {
            var f = a.j;
            const g = d.getBoundingClientRect(),
                h = g.top - e.top,
                k = g.left - e.left,
                l = g.width - e.width;
            e = g.height - e.height;
            Math.abs(h) < 1 && Math.abs(k) < 1 && Math.abs(l) < 1 && Math.abs(e) < 1 || (f = f.getComputedStyle(d), u(d, {
                top: parseInt(f.top, 10) - h + "px",
                left: parseInt(f.left, 10) - k + "px",
                width: parseInt(f.width, 10) - l + "px",
                height: parseInt(f.height, 10) - e + "px"
            }))
        });
        return d
    }

    function xG(a) {
        a.g || (a.g = uG(a));
        return a.g
    }
    var yG = class extends Q {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.l = b;
            this.A = c;
            this.g = null
        }
        i() {
            if (this.g) {
                var a = this.g;
                const b = a.parentNode;
                b && b.removeChild(a);
                this.g = null
            }
            super.i()
        }
    };

    function wG(a) {
        const b = a.document.createElement("div");
        u(b, qr(a));
        u(b, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "0",
            height: "0",
            "pointer-events": "none"
        });
        return b
    }

    function vG(a) {
        const b = a.document.createElement("div");
        u(b, qr(a));
        u(b, {
            position: "relative",
            width: "0",
            height: "0"
        });
        return b
    };

    function zG(a) {
        const b = new R(a.dataset.adStatus || null);
        (new MutationObserver(() => {
            b.g(a.dataset.adStatus || null)
        })).observe(a, {
            attributes: !0
        });
        return Fo(b)
    };
    const AG = ["Google Material Icons", "Roboto"];

    function BG({
        win: a,
        za: b,
        Ti: c,
        webPropertyCode: d,
        Oa: e,
        M: f
    }) {
        const g = new kp(a, c);
        c = new yG(a, c, g);
        xo(c, g);
        a = new CG(a, d, e, b, c, f);
        xo(a, c);
        a.J()
    }
    var CG = class extends Q {
        constructor(a, b, c, d, e, f) {
            super();
            this.win = a;
            this.webPropertyCode = b;
            this.Oa = c;
            this.za = d;
            this.j = e;
            this.M = f;
            this.g = new R(!1)
        }
        J() {
            const a = DG(this.win, this.webPropertyCode, this.Oa);
            xG(this.j).appendChild(a.Ci);
            Au(this.win, a.ua);
            zG(a.ua).i(b => {
                if (b !== null) {
                    switch (b) {
                        case "unfilled":
                            this.dispose();
                            break;
                        case "filled":
                            this.g.g(!0);
                            break;
                        default:
                            this.M ? .reportError("Unhandled AdStatus: " + String(b)), this.dispose()
                    }
                    this.M ? .Jj(this.za, b)
                }
            });
            Jo(this.g, !0, () => void a.bj.g(!0));
            a.wi.listen(() =>
                void this.dispose());
            a.vi.listen(() => void this.M ? .Hj(this.za))
        }
    };

    function DG(a, b, c) {
        const d = new R(!1),
            e = a.document.createElement("div");
        u(e, qr(a));
        u(e, {
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "background-color": "rgba(0, 0, 0, 0.75)",
            opacity: "0",
            transition: "opacity 0.25s ease-in-out",
            "box-sizing": "border-box",
            padding: "40px 5px 5px 5px"
        });
        Io(d, !0, () => void u(e, {
            opacity: "1"
        }));
        Io(d, !1, () => void u(e, {
            opacity: "0"
        }));
        const f = a.document.createElement("div");
        u(f, qr(a));
        u(f, {
            display: "block",
            width: "100%",
            height: "100%"
        });
        e.appendChild(f);
        const {
            Eh: g,
            aj: h
        } = EG(a, b);
        f.appendChild(g);
        e.appendChild(FG(a, K(c, 1)));
        b = GG(a, K(c, 2));
        e.appendChild(b.Yh);
        b.ze.listen(() => void d.g(!1));
        return {
            bj: d,
            Ci: e,
            ua: h,
            vi: b.ze,
            wi: b.ze.delay(a, 450)
        }
    }

    function FG(a, b) {
        const c = a.document.createElement("div");
        u(c, qr(a));
        u(c, {
            position: "absolute",
            top: "10px",
            width: "100%",
            color: "white",
            "font-family": "Roboto",
            "font-size": "12px",
            "line-height": "16px",
            "text-align": "center"
        });
        c.appendChild(a.document.createTextNode(b));
        return c
    }

    function GG(a, b) {
        const c = a.document.createElement("button");
        c.setAttribute("aria-label", b);
        u(c, qr(a));
        u(c, {
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "block",
            cursor: "pointer",
            width: "24px",
            height: "24px",
            "font-size": "24px",
            "user-select": "none",
            color: "white"
        });
        b = a.document.createElement("gm-icon");
        b.className = "google-material-icons";
        b.appendChild(a.document.createTextNode("close"));
        c.appendChild(b);
        const d = new Ro;
        c.addEventListener("click", () => void Qo(d));
        return {
            Yh: c,
            ze: Oo(d)
        }
    }

    function EG(a, b) {
        a = wu(a.document, b, null, null, {});
        return {
            Eh: a.nb,
            aj: a.ua
        }
    };

    function HG({
        target: a,
        threshold: b = 0
    }) {
        const c = new IG;
        c.J(a, b);
        return c
    }
    var IG = class extends Q {
        constructor() {
            super();
            this.g = new R(!1)
        }
        J(a, b) {
            const c = new IntersectionObserver(d => {
                for (const e of d)
                    if (e.target === a) {
                        this.g.g(e.isIntersecting);
                        break
                    }
            }, {
                threshold: b
            });
            c.observe(a);
            yo(this, () => void c.disconnect())
        }
    };

    function JG(a) {
        const b = KG(a.win, Ii(a.g, 2) ? ? 250, Ii(a.g, 3) ? ? 300);
        let c = 1;
        return qG(a.l).map(d => ({
            za: c++,
            image: d,
            gb: b(d)
        }))
    }

    function LG(a, b) {
        const c = HG({
            target: b.image.g,
            threshold: Ji(a.g) ? ? .8
        });
        a.j.push(c);
        Jo(Mo(c.g, a.win, Ii(a.g, 5) ? ? 3E3, d => d), !0, () => {
            if (a.i < (Ii(a.g, 1) ? ? 1)) {
                BG({
                    win: a.win,
                    za: b.za,
                    Ti: b.image.g,
                    webPropertyCode: a.webPropertyCode,
                    Oa: a.Oa,
                    M: a.M
                });
                a.i++;
                if (!(a.i < (Ii(a.g, 1) ? ? 1)))
                    for (; a.j.length;) a.j.pop() ? .dispose();
                a.M ? .Ij(b.za)
            }
        })
    }

    function MG(a) {
        const b = JG(a);
        b.filter(NG).forEach(c => void LG(a, c));
        a.M ? .Kj(b.map(c => ({
            za: c.za,
            gb: c.gb
        })))
    }
    var OG = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.webPropertyCode = b;
            this.g = c;
            this.Oa = d;
            this.l = e;
            this.M = f;
            this.j = [];
            this.i = 0
        }
    };

    function NG(a) {
        return a.gb.rejectionReasons.length === 0
    }

    function KG(a, b, c) {
        const d = P(a);
        return e => {
            e = e.g.getBoundingClientRect();
            const f = [];
            e.width < b && f.push(1);
            e.height < c && f.push(2);
            e.top <= d && f.push(3);
            return {
                Ab: e.width,
                Pe: e.height,
                xi: e.top - d,
                rejectionReasons: f
            }
        }
    };

    function PG(a, b) {
        a.za = b;
        return a
    }
    var QG = class {
        constructor(a, b, c, d, e) {
            this.A = a;
            this.webPropertyCode = b;
            this.hostname = c;
            this.j = d;
            this.l = e;
            this.errorMessage = this.i = this.za = this.g = null
        }
    };

    function RG(a, b) {
        return new QG(b, a.webPropertyCode, a.hostname, a.i, a.l)
    }

    function SG(a, b, c) {
        var d = a.j++;
        a.g === null ? (a.g = yk(), a = 0) : a = yk() - a.g;
        var e = b.A,
            f = b.webPropertyCode,
            g = b.hostname,
            h = b.j,
            k = b.l.map(encodeURIComponent).join(",");
        if (b.g) {
            var l = {
                imcnt: b.g.length
            };
            var m = Math.min(b.g.length, 10);
            for (let n = 0; n < m; n++) {
                const p = `im${n}`;
                l[`${p}_id`] = b.g[n].za;
                l[`${p}_s_w`] = b.g[n].gb.Ab;
                l[`${p}_s_h`] = b.g[n].gb.Pe;
                l[`${p}_s_dbf`] = b.g[n].gb.xi;
                b.g[n].gb.rejectionReasons.length > 0 && (l[`${p}_s_rej`] = b.g[n].gb.rejectionReasons.join(","))
            }
        } else l = null;
        jy("abg::imovad", {
            typ: e,
            wpc: f,
            hst: g,
            pvsid: h,
            peid: k,
            rate: c,
            num: d,
            tim: a,
            ...(b.za === null ? {} : {
                imid: b.za
            }),
            ...(b.i === null ? {} : {
                astat: b.i
            }),
            ...(b.errorMessage === null ? {} : {
                errm: b.errorMessage
            }),
            ...l
        }, c)
    }
    var TG = class {
        constructor(a, b, c, d) {
            this.webPropertyCode = a;
            this.hostname = b;
            this.i = c;
            this.l = d;
            this.j = 0;
            this.g = null
        }
        Kj(a) {
            var b = RG(this, "fndi");
            b.g = a;
            SG(this, b, a.length > 0 ? 1 : .1)
        }
        Ij(a) {
            a = PG(RG(this, "adpl"), a);
            SG(this, a, 1)
        }
        Jj(a, b) {
            a = PG(RG(this, "adst"), a);
            a.i = b;
            SG(this, a, 1)
        }
        Hj(a) {
            a = PG(RG(this, "adis"), a);
            SG(this, a, 1)
        }
        reportError(a) {
            var b = RG(this, "err");
            b.errorMessage = a;
            SG(this, b, .1)
        }
    };

    function UG(a, b, c) {
        return (a = a.g()) && ti(a, 11) ? c.map(d => d.j()) : c.map(d => d.A(b))
    };
    var VG = class extends N {
        getHeight() {
            return Ci(this, 2)
        }
    };

    function WG(a, b) {
        return Mi(a, 1, b)
    }

    function XG(a, b) {
        return pi(a, 2, b)
    }
    var YG = class extends N {};
    var ZG = class extends N {
        constructor() {
            super()
        }
    };
    var $G = class extends N {
            constructor() {
                super()
            }
        },
        aH = [1, 2];
    const bH = new Set([7, 1]);
    var cH = class {
        constructor() {
            this.j = new kG;
            this.l = []
        }
        g(a, b) {
            bH.has(b) || Op(Lp(Pv(a), c => void this.j.add(c, b)), c => void this.l.push(c))
        }
        i(a, b) {
            for (const c of a) this.g(c, b)
        }
    };

    function dH(a) {
        return new dq(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class eH {
        g(a) {
            return dH(Math.floor(a.i))
        }
    };
    var fH = class extends N {
        constructor() {
            super()
        }
    };

    function gH(a, b) {
        var c = b.adClient;
        if (typeof c !== "string" || !c) return !1;
        a.he = c;
        a.j = !!b.adTest;
        c = b.pubVars;
        Da(c) && (a.D = c);
        if (Array.isArray(b.fillMessage) && b.fillMessage.length > 0) {
            a.B = {};
            for (const d of b.fillMessage) a.B[d.key] = d.value
        }
        a.l = b.adWidth;
        a.i = b.adHeight;
        jk(a.l) && jk(a.i) || jy("rctnosize", b);
        return !0
    }
    var hH = class {
        constructor() {
            this.B = this.D = this.j = this.he = null;
            this.i = this.l = 0
        }
        C() {
            return !0
        }
    };

    function iH(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (b) {
            return !1
        }
    }

    function jH(a, b = []) {
        const c = Date.now();
        return Wa(b, d => c - d < a * 1E3)
    }

    function kH(a, b, c) {
        try {
            const d = a.getItem(c);
            if (!d) return [];
            let e;
            try {
                e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || $a(e, f => !Number.isInteger(f))) return a.removeItem(c), [];
            e = jH(b, e);
            e.length || a ? .removeItem(c);
            return e
        } catch (d) {
            return null
        }
    }

    function lH(a, b, c) {
        return b <= 0 || a == null || !iH(a) ? null : kH(a, b, c)
    };
    var mH = (a, b, c) => {
        let d = 0;
        try {
            var e = d |= Un(a);
            const h = Vn(a),
                k = a.innerWidth;
            var f = h && k ? h / k : 0;
            d = e | (f ? f > 1.05 ? 262144 : f < .95 ? 524288 : 0 : 131072);
            d |= Wn(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var g;
            if (g = b) g = lH(c, 3600, "__lsv__") ? .length !== 0;
            g && (d |= 134217728)
        } catch (h) {
            d |= 32
        }
        return d
    };
    var nH = class extends hH {
        constructor() {
            super(...arguments);
            this.A = !1;
            this.g = null
        }
        C(a) {
            this.A = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = $q(a)
            } catch (c) {
                b = null
            } else b = null;
            this.g = b;
            return !0
        }
    };
    const oH = {};

    function pH(a, b, c) {
        let d = qH(a, c, b);
        if (!d) return !0;
        const e = c.C.i;
        for (; d.Rb && d.Rb.length;) {
            const f = d.Rb.shift(),
                g = qv(f.ha);
            if (g && !(g <= d.Sc)) c.B ? .g(f, 18);
            else if (rH(c, f, {
                    Bd: d.Sc
                })) {
                if (d.Qc.g.length + 1 >= e) return c.B ? .i(d.Rb, 19), !0;
                d = qH(a, c, b);
                if (!d) return !0
            }
        }
        return c.l
    }
    const qH = (a, b, c) => {
        var d = b.C.i,
            e = b.C.l,
            f = b.C;
        f = uy(b.da(), f.g ? f.g.ec : void 0, d);
        if (f.g.length >= d) return b.B ? .i(sH(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.i || (f.i = Zn(f.j).scrollHeight || null), e = !d || d < 0 ? -1 : f.i * e - Ay(f)) : e = void 0;
        const g = (d = e == null || e >= 50) ? sH(b, f, {
            types: a
        }, c) : null;
        d || b.B ? .i(sH(b, f, {
            types: a
        }, c), 18);
        return {
            Qc: f,
            Sc: e,
            Rb: g
        }
    };
    oH[2] = Ka(function(a, b) {
        a = sH(b, uy(b.da()), {
            types: a,
            Cb: Yx(b.da())
        }, 2);
        if (a.length == 0) return !0;
        for (var c = 0; c < a.length; c++)
            if (rH(b, a[c])) return !0;
        return b.l ? (b.A.push(11), !0) : !1
    }, [0]);
    oH[5] = Ka(pH, [0], 5);
    oH[10] = Ka(function(a, b) {
        a = [];
        const c = b.Ka;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !U(Vr) && a.push(1);
        return pH(a, 10, b)
    }, 10);
    oH[3] = function(a) {
        if (!a.l) return !1;
        var b = sH(a, uy(a.da()), {
            types: [0],
            Cb: Yx(a.da())
        }, 3);
        if (b.length == 0) return !0;
        for (var c = b.length - 1; c >= 0; c--)
            if (rH(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const tH = a => {
            var b;
            a.j.sh ? b = U(Xr) ? new Tx(0, null, [], 8, .3) : new Tx(0, null, [], 3, null) : b = Yx(a.da());
            return {
                types: [0],
                Cb: b
            }
        },
        vH = a => {
            const b = a.da().document.body.getBoundingClientRect().width;
            uH(a, dH(b))
        },
        xH = (a, b) => {
            var c = tH(a);
            c.Lj = [5];
            c = sH(a, uy(a.da()), c, 8);
            wH(a, c.reverse(), b)
        },
        wH = (a, b, c) => {
            for (const d of b)
                if (b = c.g(d.la), rH(a, d, {
                        ie: b
                    })) return !0;
            return !1
        };
    oH[8] = function(a) {
        var b = a.da().document;
        if (b.readyState != "complete") return b.addEventListener("readystatechange", () => oH[8](a), {
            once: !0
        }), !0;
        if (!a.l) return !1;
        if (!a.vd()) return !0;
        b = tH(a);
        b.mf = [2, 4, 5];
        b = sH(a, uy(a.da()), b, 8);
        const c = new eH;
        if (wH(a, b, c)) return !0;
        if (a.j.kg) switch (a.j.Ug || 0) {
            case 1:
                xH(a, c);
                break;
            default:
                vH(a)
        }
        return !0
    };
    oH[6] = Ka(pH, [2], 6);
    oH[7] = Ka(pH, [1], 7);
    oH[9] = function(a) {
        const b = qH([0, 2], a, 9);
        if (!b || !b.Rb) return a.A.push(17), a.l;
        for (const d of b.Rb) {
            var c = a.j.Me || null;
            c == null ? c = null : (c = rv(d.ha, new yH, new zH(c, a.da())), c = new Rv(c, d.ja(), d.la));
            if (c && !(qv(c.ha) > b.Sc) && rH(a, c, {
                    Bd: b.Sc,
                    xe: !0
                })) return a = c.ha.ca, ov(d.ha, a.length > 0 ? a[0] : null), !0
        }
        a.A.push(17);
        return a.l
    };
    class yH {
        i(a, b, c, d) {
            return zu(d.document, a, b)
        }
        j(a) {
            return P(a) || 0
        }
    };
    var AH = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.Qc = c
        }
        Aa(a) {
            return this.g ? Xy(this.i, this.g, a, this.Qc) : Wy(this.i, a, this.Qc)
        }
        ya() {
            return this.g ? 16 : 9
        }
    };
    var BH = class {
        constructor(a) {
            this.je = a
        }
        Aa(a) {
            return dz(a.document, this.je)
        }
        ya() {
            return 11
        }
    };
    var CH = class {
        constructor(a) {
            this.tb = a
        }
        Aa(a) {
            return az(this.tb, a)
        }
        ya() {
            return 13
        }
    };
    var DH = class {
        Aa(a) {
            return Uy(a)
        }
        ya() {
            return 12
        }
    };
    var EH = class {
        constructor(a) {
            this.sc = a
        }
        Aa() {
            return Zy(this.sc)
        }
        ya() {
            return 2
        }
    };
    var FH = class {
        constructor(a) {
            this.g = a
        }
        Aa() {
            return bz(this.g)
        }
        ya() {
            return 3
        }
    };
    var GH = class {
        Aa() {
            return ez()
        }
        ya() {
            return 17
        }
    };
    var HH = class {
        constructor(a) {
            this.g = a
        }
        Aa() {
            return Yy(this.g)
        }
        ya() {
            return 1
        }
    };
    var IH = class {
        Aa() {
            return zb(iv)
        }
        ya() {
            return 7
        }
    };
    var JH = class {
        constructor(a) {
            this.mf = a
        }
        Aa() {
            return $y(this.mf)
        }
        ya() {
            return 6
        }
    };
    var KH = class {
        constructor(a) {
            this.g = a
        }
        Aa() {
            return cz(this.g)
        }
        ya() {
            return 5
        }
    };
    var LH = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        Aa() {
            return Ka(fz, this.minWidth, this.maxWidth)
        }
        ya() {
            return 10
        }
    };
    var MH = class {
        constructor(a) {
            this.l = a.i.slice(0);
            this.i = a.g.slice(0);
            this.j = a.j;
            this.A = a.l;
            this.g = a.A
        }
    };

    function NH(a) {
        var b = new OH;
        b.A = a;
        b.i.push(new HH(a));
        return b
    }

    function PH(a, b) {
        a.i.push(new JH(b));
        return a
    }

    function QH(a, b) {
        a.i.push(new EH(b));
        return a
    }

    function RH(a, b) {
        a.i.push(new KH(b));
        return a
    }

    function SH(a, b) {
        a.i.push(new FH(b));
        return a
    }

    function TH(a) {
        a.i.push(new IH);
        return a
    }

    function UH(a) {
        a.g.push(new DH);
        return a
    }

    function VH(a, b = 0, c, d) {
        a.g.push(new AH(b, c, d));
        return a
    }

    function WH(a, b = 0, c = Infinity) {
        a.g.push(new LH(b, c));
        return a
    }

    function XH(a) {
        a.g.push(new GH);
        return a
    }

    function YH(a, b = 0) {
        a.g.push(new CH(b));
        return a
    }

    function ZH(a, b) {
        a.j = b;
        return a
    }
    var OH = class {
        constructor() {
            this.j = 0;
            this.l = !1;
            this.i = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new MH(this)
        }
    };
    class zH {
        constructor(a, b) {
            this.i = a;
            this.j = b
        }
        g() {
            var a = this.i,
                b = this.j;
            const c = a.D || {};
            c.google_ad_client = a.he;
            c.google_ad_height = P(b) || 0;
            c.google_ad_width = Vn(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new fH;
            b = Li(b, 1, a.A);
            a.g && A(b, 2, a.g);
            c.google_rasc = Ti(b);
            a.j && (c.google_adtest = "on");
            return new dq(["fsi_container"], c)
        }
    };
    var $H = Xp(new Up(0, {})),
        aI = Xp(new Up(1, {})),
        bI = a => a === $H || a === aI;

    function cI(a, b, c) {
        ko(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class dI {
        constructor() {
            this.g = new oo
        }
    };

    function eI(a, b) {
        for (var c = 0; c < b.length; c++) a.va(b[c]);
        return a
    }

    function fI(a, b) {
        a.j = a.j ? a.j : b;
        return a
    }
    class gI {
        constructor(a) {
            this.C = {};
            this.C.c = a;
            this.A = [];
            this.j = null;
            this.B = [];
            this.F = 0
        }
        Ub(a) {
            this.C.wpc = a;
            return this
        }
        va(a) {
            for (var b = 0; b < this.A.length; b++)
                if (this.A[b] == a) return this;
            this.A.push(a);
            return this
        }
        l(a) {
            var b = Nb(this.C);
            this.F > 0 && (b.t = this.F);
            b.err = this.A.join();
            b.warn = this.B.join();
            this.j && (b.excp_n = this.j.name, b.excp_m = this.j.message && this.j.message.substring(0, 512), b.excp_s = this.j.stack && Pk(this.j.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function hI(a, b) {
        if (b && (a.g.apv = C(b, 4), Th(b, yq, 23))) {
            var c = a.g;
            b = x(b, yq, 23);
            b = Zg(Oh(b, 1));
            c.sat = "" + b
        }
        return a
    }

    function iI(a, b) {
        a.g.afm = b.join(",");
        return a
    }
    var jI = class extends gI {
        constructor(a) {
            super(a);
            this.g = {}
        }
        H(a) {
            this.g.a = a.join(",");
            return this
        }
        G(a) {
            a != null && (this.g.allp = a);
            return this
        }
        jh(a) {
            if (a) {
                const b = [];
                for (const c of mo(a))
                    if (a.get(c).length > 0) {
                        const d = a.get(c)[0];
                        b.push("(" + [c, d.kb, d.th].join() + ")")
                    }
                this.g.fd = b.join(",")
            }
            return this
        }
        l(a) {
            try {
                this.g.su = a.location.hostname
            } catch (b) {
                this.g.su = "_ex"
            }
            a = super.l(a);
            Pb(a, this.g);
            return a
        }
    };

    function kI(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function lI(a, b, c, d = 30) {
        c.length <= d ? a[b] = mI(c) : (a[b] = mI(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function mI(a) {
        const b = a.length > 0 && typeof a[0] === "string";
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => ma(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function nI(a) {
        return a == null ? "null" : typeof a === "string" ? a : typeof a === "boolean" ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function oI(a, b) {
        a.i.op = nI(b)
    }

    function pI(a, b, c) {
        lI(a.i, "fap", b);
        a.i.fad = nI(c)
    }

    function qI(a, b, c) {
        lI(a.i, "fmp", b);
        a.i.fmd = nI(c)
    }

    function rI(a, b, c) {
        lI(a.i, "vap", b);
        a.i.vad = nI(c)
    }

    function sI(a, b, c) {
        lI(a.i, "vmp", b);
        a.i.vmd = nI(c)
    }

    function tI(a, b, c) {
        lI(a.i, "pap", b);
        a.i.pad = nI(c)
    }

    function uI(a, b, c) {
        lI(a.i, "pmp", b);
        a.i.pmd = nI(c)
    }

    function vI(a, b) {
        lI(a.i, "psq", b)
    }
    var wI = class extends jI {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.i = {};
            this.errors = []
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            this.errors.length > 0 && (a.e = mI(this.errors));
            return a
        }
    };

    function xI(a, b, c) {
        const d = b.ha;
        ko(a.g, d) || a.g.set(d, new yI(Kp(Pv(b)) ? ? ""));
        c(a.g.get(d))
    }

    function zI(a, b) {
        xI(a, b, c => {
            c.g = !0
        })
    }

    function AI(a, b) {
        xI(a, b, c => {
            c.i = !0
        })
    }

    function BI(a, b) {
        xI(a, b, c => {
            c.j = !0
        });
        a.I.push(b.ha)
    }

    function CI(a, b, c) {
        xI(a, b, d => {
            d.Mb = c
        })
    }

    function DI(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) bI(f.Mb ? ? "") ? ++e : (b = a.i.get(f.Mb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            Nb: e
        }
    }

    function EI(a, b) {
        oI(b, a.i.wc());
        var c = no(a.g).filter(f => (f.xb.startsWith($H) ? 0 : 1) === 0),
            d = no(a.g).filter(f => (f.xb.startsWith($H) ? 0 : 1) === 1),
            e = DI(a, f => f.g, c);
        pI(b, e.list, e.Nb);
        e = DI(a, f => f.g, d);
        qI(b, e.list, e.Nb);
        e = DI(a, f => f.i, c);
        rI(b, e.list, e.Nb);
        e = DI(a, f => f.i, d);
        sI(b, e.list, e.Nb);
        c = DI(a, f => f.j, c);
        tI(b, c.list, c.Nb);
        d = DI(a, f => f.j, d);
        uI(b, d.list, d.Nb);
        vI(b, a.I.map(f => a.g.get(f) ? .Mb).map(f => a.i.get(f) ? ? null))
    }

    function Fl() {
        var a = O(FI);
        if (!a.A) return ul();
        const b = Dl(Cl(Bl(Al(zl(yl(xl(wl(tl(sl(new vl, a.A ? ? []), a.H ? ? []), a.B), a.G), a.F), a.O), a.R), a.C ? ? 0), no(a.g).map(c => {
            var d = new rl;
            d = Ri(d, 1, c.xb);
            var e = a.i.get(c.Mb ? ? "", -1);
            d = Pi(d, 2, e);
            d = L(d, 3, c.g);
            return L(d, 4, c.i)
        })), a.I.map(c => a.g.get(c) ? .Mb).map(c => a.i.get(c) ? ? -1));
        a.j != null && L(b, 6, a.j);
        a.l != null && fi(b, 13, ah(a.l), "0");
        return b
    }
    var FI = class {
        constructor() {
            this.l = this.H = this.A = null;
            this.F = this.G = !1;
            this.j = null;
            this.R = this.B = this.O = !1;
            this.C = null;
            this.i = new oo;
            this.g = new oo;
            this.I = []
        }
    };
    class yI {
        constructor(a) {
            this.j = this.i = this.g = !1;
            this.Mb = null;
            this.xb = a
        }
    };
    class GI {
        constructor(a) {
            this.i = a;
            this.g = -1
        }
    };

    function HI(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function II(a, b) {
        const c = a.H.filter(d => mo(d.cd).every(e => d.cd.get(e) === b.get(e)));
        return c.length === 0 ? (a.i.push(19), null) : c.reduce((d, e) => d.cd.wc() > e.cd.wc() ? d : e, c[0])
    }

    function JI(a, b) {
        b = Pv(b);
        if (b.g == null) return a.i.push(18), null;
        b = b.getValue();
        if (ko(a.j, b)) return a.j.get(b);
        var c = Vp(b);
        c = II(a, c);
        a.j.set(b, c);
        return c
    }
    var KI = class {
        constructor(a) {
            this.g = a;
            this.j = new oo;
            this.H = (x(a, Yq, 2) ? .g() || []).map(b => {
                const c = Vp(K(b, 1)),
                    d = Di(b, 2);
                return {
                    cd: c,
                    Yg: d,
                    xb: K(b, 1)
                }
            });
            this.i = []
        }
        F() {
            const a = O(FI);
            var b = this.l();
            a.A = b;
            b = this.B();
            a.H = b;
            b = this.A();
            b != null && (a.l = b);
            b = !!this.g.j() ? .g() ? .g();
            a.F = b;
            b = new oo;
            for (const c of x(this.g, Yq, 2) ? .g() ? ? []) b.set(K(c, 1), Di(c, 2));
            a.i = b
        }
        C() {
            return [...this.i]
        }
        l() {
            return [...this.g.g()]
        }
        B() {
            return [...Xh(this.g, 4, Zg, w(), 0)]
        }
        A() {
            return x(this.g, Sq, 5) ? .g() ? ? null
        }
        G(a) {
            const b = JI(this, a);
            b ? .xb != null &&
                CI(O(FI), a, b.xb)
        }
        I(a) {
            const b = V(ws) || 0;
            if (a.length == 0 || b == 0) return !0;
            const c = (new Cp(a)).filter(d => {
                d = JI(this, d) ? .xb || "";
                return d != "" && !(d === $H || d === aI)
            });
            return b <= c.g.length / a.length
        }
    };

    function LI(a, b) {
        return b.g.length == 0 ? b : b.sort((c, d) => (JI(a.g, c) ? .Yg ? ? Number.MAX_VALUE) - (JI(a.g, d) ? .Yg ? ? Number.MAX_VALUE))
    }

    function MI(a, b) {
        var c = b.la.g,
            d = Math,
            e = d.min;
        const f = b.ja(),
            g = b.ha.g();
        c += 200 * e.call(d, 20, g == 0 || g == 3 ? HI(f.parentElement) : HI(f));
        a = a.i;
        a.g < 0 && (a.g = Zn(a.i).scrollHeight || 0);
        a = a.g - b.la.g;
        a = c + (a > 1E3 ? 0 : 2 * (1E3 - a));
        b.ja();
        return a
    }

    function NI(a, b) {
        return b.g.length == 0 ? b : b.sort((c, d) => MI(a, c) - MI(a, d))
    }

    function OI(a, b) {
        return b.sort((c, d) => {
            const e = c.ha.G,
                f = d.ha.G;
            var g;
            e == null || f == null ? g = e == null && f == null ? MI(a, c) - MI(a, d) : e == null ? 1 : -1 : g = e - f;
            return g
        })
    }
    class PI {
        constructor(a, b = null) {
            this.i = new GI(a);
            this.g = b && new KI(b)
        }
    };

    function QI(a, b, c = 0, d) {
        var e = a.i;
        for (var f of b.l) e = Bp(e, f.Aa(a.j), RI(f.ya(), c));
        f = e = e.apply(Ty(a.j));
        for (const g of b.i) f = Bp(f, g.Aa(a.j), Rp([SI(g.ya(), c), h => {
            d ? .g(h, g.ya())
        }]));
        switch (b.j) {
            case 1:
                f = NI(a.g, f);
                break;
            case 2:
                f = OI(a.g, f);
                break;
            case 3:
                const g = O(FI);
                f = LI(a.g, f);
                e.forEach(h => {
                    zI(g, h);
                    a.g.g ? .G(h)
                });
                f.forEach(h => AI(g, h))
        }
        b.A && (f = Ep(f, zd(a.j.location.href + a.j.localStorage.google_experiment_mod)));
        b.g ? .length === 1 && cI(a.l, b.g[0], {
            kb: e.g.length,
            th: f.g.length
        });
        return Dp(f)
    }
    class TI {
        constructor(a, b, c = null) {
            this.i = new Cp(a);
            this.g = new PI(b, c);
            this.j = b;
            this.l = new dI
        }
        A() {
            this.i.forEach(a => {
                a.i && iu(a.i);
                a.i = null
            })
        }
    }
    const RI = (a, b) => c => nv(c, b, a),
        SI = (a, b) => c => nv(c.ha, b, a);

    function UI(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = VI(WI(c), a);
                    break a;
                case 3:
                    a = VI(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = VI(e ? e.nodeType == 1 ? e : WI(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && b == 2 && !XI(c))) b = b == 1 || b == 2 ? c : c.parentNode,
        d = !(b && !ur(b) && b.offsetWidth <= 0);
        return d
    }

    function VI(a, b) {
        if (!a) return !1;
        a = we(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function WI(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function XI(a) {
        return !!a.nextSibling || !!a.parentNode && XI(a.parentNode)
    };
    var YI = !Td && !Md();

    function ZI(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (YI && a.dataset) {
            if (Qd() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return a === void 0 ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var $I = (a, b, c) => {
            if (!b) return null;
            const d = be(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && e.position != "static") {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if (a.getComputedStyle(g).display != "none") {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = P(a);
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && c > 0 && g > 0 && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        aJ = a => {
            const b = a.document.body;
            var c = $I(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; d.length >
                    0;) {
                    const h = d.pop(),
                        k = h.element;
                    var g = h.height;
                    h.depth > 0 && g > e && (e = g, f = k);
                    if (h.depth < 5)
                        for (g = 0; g < k.children.length; g++) {
                            const l = k.children[g],
                                m = l.getBoundingClientRect().width;
                            (m == null || c == null ? 0 : m >= c * .9 && m <= c * 1.01) && d.push({
                                element: l,
                                depth: h.depth + 1,
                                height: l.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? $I(a, c.parentNode || b, c) : null
        },
        cJ = a => {
            let b = 0;
            try {
                b |= Un(a), le() || (b |= 1048576), Math.floor(a.document.body.getBoundingClientRect().width) <= 1200 || (b |= 32768), bJ(a) && (b |= 33554432)
            } catch (c) {
                b |=
                    32
            }
            return b
        },
        bJ = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if (ZI(a[b]) == "autorelaxed") return !0;
            return !1
        };

    function dJ(a) {
        const b = Yn(a, !0),
            c = Zn(a).scrollWidth,
            d = Zn(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = co(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            p = [];
        let r = 0,
            y = 0,
            D = Infinity,
            E = Infinity,
            G = null;
        var H = qy({
            Kb: !1
        }, a);
        for (var z of H) {
            H = z.getBoundingClientRect();
            const ba = b - (H.bottom + f);
            var I = void 0,
                F = void 0;
            if (z.className && z.className.indexOf("adsbygoogle-ablated-ad-slot") != -1) {
                I = z.getAttribute("google_element_uid");
                F = a.google_sv_map;
                if (!I ||
                    !F || !F[I]) continue;
                I = (F = rk(F[I])) ? F.height : 0;
                F = F ? F.width : 0
            } else if (I = H.bottom - H.top, F = H.right - H.left, I <= 1 || F <= 1) continue;
            g.push(I);
            k.push(F);
            l.push(I * F);
            z.className && z.className.indexOf("google-auto-placed") != -1 ? (y += 1, z.className && z.className.indexOf("pedestal_container") != -1 && (G = I)) : (D = Math.min(D, ba), n.push(H), r += 1, h.push(I), m.push(I * F));
            E = Math.min(E, ba);
            p.push(H)
        }
        D = D === Infinity ? null : D;
        E = E === Infinity ? null : E;
        f = eJ(n);
        p = eJ(p);
        h = fJ(b, h);
        n = fJ(b, g);
        m = fJ(b * c, m);
        z = fJ(b * c, l);
        return new gJ(a, {
            yi: e,
            Ic: b,
            vj: c,
            uj: d,
            jj: r,
            Nh: y,
            Ph: hJ(g),
            Qh: hJ(k),
            Oh: hJ(l),
            pj: f,
            oj: p,
            nj: D,
            mj: E,
            Ee: h,
            De: n,
            Ih: m,
            Hh: z,
            xj: G
        })
    }

    function iJ(a, b, c, d) {
        const e = le() && !(Vn(a.i) >= 900);
        d = Wa(d, f => ab(a.j, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.g.yi,
            pg_h: jJ(a.g.Ic),
            pg_w: jJ(a.g.vj),
            pg_hs: jJ(a.g.uj),
            c: jJ(a.g.jj),
            aa_c: jJ(a.g.Nh),
            av_h: jJ(a.g.Ph),
            av_w: jJ(a.g.Qh),
            av_a: jJ(a.g.Oh),
            s: jJ(a.g.pj),
            all_s: jJ(a.g.oj),
            b: jJ(a.g.nj),
            all_b: jJ(a.g.mj),
            d: jJ(a.g.Ee),
            all_d: jJ(a.g.De),
            ard: jJ(a.g.Ih),
            all_ard: jJ(a.g.Hh),
            pd_h: jJ(a.g.xj),
            dt: e ? "m" : "d"
        }
    }
    class gJ {
        constructor(a, b) {
            this.i = a;
            this.g = b;
            this.j = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function hJ(a) {
        return od.apply(null, Wa(a, b => b > 0)) || null
    }

    function fJ(a, b) {
        return a <= 0 ? null : nd.apply(null, b) / a
    }

    function eJ(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                c > 0 && (b = Math.min(c, b))
            }
        return b !== Infinity ? b : null
    }

    function jJ(a) {
        return a == null ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function kJ(a) {
        var b = sy({
            Kb: !1,
            qd: !1
        }, a);
        a = (P(a) || 0) - co(a);
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d].getBoundingClientRect();
            yy(e) && e.top <= a && (c += 1)
        }
        return c > 0
    }

    function lJ(a) {
        const b = {};
        var c = sy({
            Kb: !1,
            qd: !1,
            Se: !1,
            Te: !1
        }, a).map(d => d.getBoundingClientRect()).filter(yy);
        b.Kf = c.length;
        c = ty({
            Se: !0
        }, a).map(d => d.getBoundingClientRect()).filter(yy);
        b.ig = c.length;
        c = ty({
            Te: !0
        }, a).map(d => d.getBoundingClientRect()).filter(yy);
        b.Lg = c.length;
        c = ty({
            qd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(yy);
        b.Pf = c.length;
        c = (P(a) || 0) - co(a);
        c = sy({
            Kb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(yy).filter(Ja(mJ, null, c));
        b.Lf = c.length;
        a = dJ(a);
        c = a.g.Ee != null ? a.g.Ee : null;
        c !=
            null && (b.Gg = c);
        a = a.g.De != null ? a.g.De : null;
        a != null && (b.Mf = a);
        return b
    }

    function rH(a, b, {
        Bd: c,
        ie: d,
        xe: e
    } = {}) {
        return Ru(997, () => nJ(a, b, {
            Bd: c,
            ie: d,
            xe: e
        }), a.g)
    }

    function sH(a, b, c, d) {
        var e = c.Cb ? c.Cb : a.C;
        const f = Zx(e, b.g.length);
        e = a.j.Nf ? e.g : void 0;
        const g = XH(YH(UH(WH(VH(TH(RH(SH(PH(QH(NH(c.types), a.ia), c.mf || []), a.ca), c.Lj || [])), f.Hc || void 0, e, b), c.minWidth, c.maxWidth)), f.tb || void 0));
        a.R && g.g.push(new BH(a.R));
        b = 1;
        a.j.rh ? b = 2 : a.sb() && (b = 3);
        ZH(g, b);
        a.j.kh && (g.l = !0);
        return Ru(995, () => QI(a.i, g.build(), d, a.B || void 0), a.g)
    }

    function uH(a, b) {
        const c = aJ(a.g);
        if (c) {
            const d = cq(a.I, b),
                e = wu(a.g.document, a.G, null, null, {}, d);
            e && (lu(e.nb, c, 2, 256), Ru(996, () => oJ(a, e, d), a.g))
        }
    }

    function pJ(a) {
        return a.F ? a.F : a.F = a.g.google_ama_state
    }

    function nJ(a, b, {
        Bd: c,
        ie: d,
        xe: e
    } = {}) {
        const f = b.ha;
        if (f.A) return !1;
        var g = b.ja(),
            h = f.g();
        if (!UI(a.g, h, g, a.l)) return !1;
        h = null;
        f.Ac ? .includes(6) ? (h = Math.round(g.getBoundingClientRect().height), h = new dq(null, {
            google_max_responsive_height: c == null ? h : Math.min(c, h),
            google_full_width_responsive: "false"
        })) : h = c == null ? null : new dq(null, {
            google_max_responsive_height: c
        });
        c = eq(Bi(f.Xd, 2) || 0);
        g = fq(f.G);
        const k = qJ(a, f),
            l = rJ(a),
            m = cq(a.I, f.R ? f.R.g(b.la) : null, h, d || null, c, g, k, l),
            n = b.fill(a.G, m);
        if (e && !sJ(a, n, m) || !Ru(996,
                () => oJ(a, n, m), a.g)) return !1;
        Jj(9, [f.G, f.Lb]);
        a.sb() && BI(O(FI), b);
        return !0
    }

    function qJ(a, b) {
        return Kp(Op(Nv(b).map(gq), () => {
            a.A.push(18)
        }))
    }

    function rJ(a) {
        if (!a.sb()) return null;
        var b = a.i.g.g ? .B();
        if (b == null) return null;
        b = b.join("~");
        a = a.i.g.g ? .A() ? ? null;
        return hq({
            ni: b,
            Hi: a
        })
    }

    function sJ(a, b, c) {
        if (!b) return !1;
        var d = b.ua,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.g;
        e = b.ua;
        c = c && c.xc() || {};
        var g = V(Jr);
        if (d !== d.top) g = te(d) ? 3 : 16;
        else if (Vn(d) < 488)
            if (d.innerHeight >= d.innerWidth) {
                var h = Vn(d);
                if (!h || (h - f) / h > g) g = 6;
                else {
                    if (g = c.google_full_width_responsive !== "true") b: {
                        h = e.parentElement;
                        for (g = Vn(d); h; h = h.parentElement) {
                            const k = we(h, d);
                            if (!k) continue;
                            const l = Ge(k.width);
                            if (l && !(l >= g) && k.overflow !== "visible") {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
            } else g = 5;
        else g =
            4;
        if (g !== !0) f = g;
        else {
            if (!(c = c.google_full_width_responsive === "true")) a: {
                do
                    if ((c = we(e, d)) && c.position == "fixed") {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = Vn(d), f = d - f, f = d && f >= 0 ? !0 : d ? f < -10 ? 11 : f < 0 ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.g;
            b = b.ua;
            if (d = su(a, b)) f = b.style, f.border = f.borderStyle = f.outline = f.outlineStyle = f.transition = "none", f.borderSpacing = f.padding = "0", qu(b, d, "0px"), f.width = `${Vn(a)}px`, tu(a, b, d), f.zIndex = "30";
            return !0
        }
        iu(b.nb);
        return !1
    }

    function oJ(a, b, c) {
        if (!b) return !1;
        try {
            Au(a.g, b.ua, c)
        } catch (d) {
            return iu(b.nb), a.A.push(6), !1
        }
        return !0
    }
    class tJ {
        constructor(a, b, c, d, e = {}, f = [], g = !1) {
            this.i = a;
            this.G = b;
            this.g = c;
            this.C = d.Cb;
            this.ia = d.sc || [];
            this.I = d.Ii || null;
            this.ca = d.ti || [];
            this.R = d.je || [];
            this.j = e;
            this.l = !1;
            this.O = [];
            this.A = [];
            this.H = this.F = void 0;
            this.Ka = f;
            this.B = g ? new cH : null
        }
        Ea() {
            return this.i
        }
        da() {
            return this.g
        }
        va(a) {
            this.O.push(a)
        }
        sb() {
            if ((this.i.g.g ? .l().length ? ? 0) == 0) return !1;
            if ((V(ws) || 0) == 0) return !0;
            if (this.H === void 0) {
                const a = ZH(UH(TH(NH([0, 1, 2]))), 1).build(),
                    b = Ru(995, () => QI(this.i, a), this.g);
                this.H = this.i.g.g ? .I(b) || !1
            }
            return this.H
        }
        Xe() {
            return !!this.j.fh
        }
        vd() {
            return !bJ(this.g)
        }
        ta() {
            return this.B
        }
    }
    const mJ = (a, b) => b.top <= a;

    function uJ(a, b, c, d, e, f = 0, g = 0) {
        this.La = a;
        this.Td = f;
        this.Sd = g;
        this.errors = b;
        this.zb = c;
        this.g = d;
        this.i = e
    };
    var vJ = (a, {
        vd: b = !1,
        Xe: c = !1,
        Pj: d = !1,
        sb: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !U(Vr);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !U(Vr) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function wJ(a, b, c) {
        a = vJ(a, {
            vd: b.vd(),
            Xe: b.Xe(),
            Pj: !!b.j.Me,
            sb: b.sb()
        });
        return new xJ(a, b, c)
    }

    function yJ(a, b) {
        const c = oH[b];
        return c ? Ru(998, () => c(a.g), a.A) : (a.g.va(12), !0)
    }

    function zJ(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(yJ(a, b))
            })
        })
    }

    function AJ(a) {
        a.g.l = !0;
        return Promise.all(a.i.map(b => zJ(a, b))).then(b => {
            b.includes(!1) && a.g.va(5);
            a.i.splice(0, a.i.length)
        })
    }
    class xJ {
        constructor(a, b, c) {
            this.l = a.slice(0);
            this.i = a.slice(0);
            this.j = cb(this.i, 1);
            this.g = b;
            this.A = c
        }
    };
    const BJ = class {
        constructor(a) {
            this.g = a;
            this.exception = void 0
        }
    };

    function CJ(a) {
        return AJ(a).then(() => {
            var b = a.g.i.i.filter(iv).g.length;
            var c = a.g.O.slice(0);
            var d = a.g;
            d = [...d.A, ...(d.i.g.g ? .C() || [])];
            b = new uJ(b, c, d, a.g.i.i.g.length, a.g.i.l.g, a.g.i.i.filter(iv).filter(jv).g.length, a.g.i.i.filter(jv).g.length);
            return new BJ(b)
        })
    };
    var DJ = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > b * .5
        },
        EJ = a => {
            const b = P(a) || 0;
            return c => c.getBoundingClientRect().height >= b * .75
        };
    var FJ = (a, b) => {
        b = Iv(b, a);
        const c = b.map(d => d.g);
        b = b.filter(d => {
            d = d.g.getBoundingClientRect();
            return d.width > 0 && d.height > 0
        }).filter(d => DJ(c)(d.g)).filter(d => EJ(a)(d.g));
        b.sort((d, e) => {
            e = e.g;
            return d.g.getBoundingClientRect().top - e.getBoundingClientRect().top
        });
        return b
    };

    function GJ(a) {
        return a.reduce((b, c) => b.g.getBoundingClientRect().bottom < c.g.getBoundingClientRect().bottom ? c : b)
    }

    function HJ(a, b, c, d) {
        let e = !1;
        const f = new IntersectionObserver(g => {
            for (const h of g)
                if (h.isIntersecting) e = !0;
                else {
                    if (g = e) g = a, g = b.getBoundingClientRect().bottom <= P(g.win) / 2;
                    g && (IJ(a.M, {
                        typ: "cee",
                        cet: c
                    }), e = !1)
                }
        }, {
            rootMargin: d
        });
        f.observe(b);
        yo(a, () => {
            f.disconnect()
        })
    }
    var JJ = class extends Q {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.g = b;
            this.M = c
        }
    };

    function KJ(a, b) {
        IJ(a, {
            typ: "cdr",
            af: b.se,
            ...(b.se > 0 ? {
                vh: b.W,
                ph: b.Ic,
                ah: b.Jh,
                at: b.Lh
            } : {})
        })
    }

    function IJ(a, b) {
        a = { ...b,
            wpc: a.webPropertyCode,
            cor: a.g,
            tim: Math.round(zk() ? ? -1),
            num: a.i++
        };
        jy("ama_vignette", a, 1)
    }
    var LJ = class {
        constructor(a) {
            var b = Ye();
            this.webPropertyCode = a;
            this.g = b;
            this.i = 0
        }
    };
    class MJ {
        g() {
            return new dq([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class NJ {
        g() {
            return new dq(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function OJ(a) {
        return vr(a.g.document).map(b => {
            const c = new bv(b, 3);
            b = new dv(Cu(a.g, b));
            return new hv(c, b, a.i, !1, 0, [], null, a.g, null)
        })
    }
    class PJ {
        constructor(a) {
            var b = new NJ;
            this.g = a;
            this.i = b || null
        }
    };
    const QJ = {
        Bf: "10px",
        ue: "10px"
    };

    function RJ(a) {
        return jo(a.g.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new hv(new bv(b, 1), new $u(QJ), a.i, !1, 0, [], null, a.g, null))
    }
    class SJ {
        constructor(a, b) {
            this.g = a;
            this.i = b || null
        }
    };

    function TJ(a, b) {
        const c = [];
        b.forEach((d, e) => {
            c.push(ma(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        lI(a.i, "cnstr", c, 80)
    }
    var UJ = class extends gI {
        constructor() {
            super(-1);
            this.i = {}
        }
        l(a) {
            a = super.l(a);
            Object.assign(a, this.i);
            return a
        }
    };

    function VJ(a, b) {
        return a == null ? b + "ShouldNotBeNull" : a == 0 ? b + "ShouldNotBeZero" : a < -1 ? b + "ShouldNotBeLessMinusOne" : null
    }

    function WJ(a, b, c) {
        const d = VJ(c.nd, "gapsMeasurementWindow") || VJ(c.uc, "gapsPerMeasurementWindow") || VJ(c.Dc, "maxGapsToReport");
        return d != null ? Ip(d) : c.Of || c.uc != -1 || c.Dc != -1 ? Gp(new XJ(a, b, c)) : Ip("ShouldHaveLimits")
    }

    function YJ(a) {
        return pJ(a.j) && pJ(a.j).placed || []
    }

    function ZJ(a) {
        return YJ(a).map(b => tp(rp(b.element, a.g)))
    }

    function $J(a) {
        return YJ(a).map(b => b.index)
    }

    function aK(a, b) {
        const c = b.ha;
        return !a.B && c.l && Bi(c.l, 8) != null && Bi(c.l, 8) == 1 ? [] : c.A ? (c.ca || []).map(d => tp(rp(d, a.g))) : [tp(new sp(b.la.g, 0))]
    }

    function bK(a) {
        a.sort((e, f) => e.g - f.g);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.g;
            d = d.g + d.i;
            f <= c ? c = Math.max(c, d) : (b.push(new sp(c, f - c)), c = d)
        }
        return b
    }

    function cK(a, b) {
        b = b.map(c => {
            var d = new VG;
            d = Mi(d, 1, c.g);
            c = c.getHeight();
            return Mi(d, 2, c)
        });
        return XG(WG(new YG, a), b)
    }

    function dK(a) {
        const b = oi(a, VG, 2, w()).map(c => `G${Ci(c,1)}~${c.getHeight()}`);
        return `W${Ci(a,1)}${b.join("")}`
    }

    function eK(a, b) {
        const c = [];
        let d = 0;
        for (const e of mo(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.F || f.splice(a.A, f.length);
            !a.C && d + f.length > a.i && f.splice(a.i - d, f.length);
            c.push(cK(e, f));
            d += f.length;
            if (!a.C && d >= a.i) break
        }
        return c
    }

    function fK(a) {
        const b = oi(a, YG, 5, w()).map(c => dK(c));
        return `M${Ci(a,1)}H${Ci(a,2)}C${Ci(a,3)}B${Number(!!J(a,4))}${b.join("")}`
    }

    function gK(a) {
        var b = Sv(Dp(a.j.i.i), a.g),
            c = ZJ(a),
            d = new po($J(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = aK(a, b[e]);
                c.push(...f)
            }
        c.push(new sp(0, 0));
        c.push(tp(new sp(Zn(a.g).scrollHeight, 0)));
        b = bK(c);
        c = new oo;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.g / a.l), ko(c, f) || c.set(f, []), c.get(f).push(e);
        b = eK(a, c);
        c = new ZG;
        c = Mi(c, 1, a.i);
        c = Mi(c, 2, a.l);
        c = Mi(c, 3, a.A);
        a = Li(c, 4, a.B);
        return pi(a, 5, b)
    }

    function hK(a) {
        a = gK(a);
        return fK(a)
    }
    var XJ = class {
        constructor(a, b, c) {
            this.G = c.nd == -1;
            this.l = c.nd;
            this.F = c.uc == -1;
            this.A = c.uc;
            this.C = c.Dc == -1;
            this.i = c.Dc;
            this.B = c.yg;
            this.j = b;
            this.g = a
        }
    };

    function mr(a, b, c) {
        let d = b.Pa;
        b.rb && U(js) && (d = 1, "r" in c && (c.r += "F"));
        d <= 0 || (!b.Ua || "pvc" in c || (c.pvc = Ze(a.g)), jy(b.qb, c, d))
    }

    function iK(a, b, c) {
        c = c.l(a.g);
        b.Ua && (c.pvc = Ze(a.g));
        0 <= b.Pa && (c.r = b.Pa, mr(a, b, c))
    }
    var jK = class {
        constructor(a) {
            this.g = a
        }
    };
    const kK = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function lK(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        jy("ama", b, .01)
    }

    function mK(a) {
        const b = {};
        ye(kK, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function nK(a) {
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

    function oK(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function pK(a, b) {
        a = Xh(a, 2, Jg, w());
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    }

    function qK(a, b) {
        a = oK(nK(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = Ae(a),
            d = rK(a);
        return b.find(e => {
            const f = Th(e, pq, 7) ? Ng(Oh(x(e, pq, 7), 1)) : Ng(Oh(e, 1));
            e = Th(e, pq, 7) ? Bi(x(e, pq, 7), 2) : 2;
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

    function rK(a) {
        const b = {};
        for (;;) {
            b[Ae(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function sK(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            lK(a, {
                lserr: 1
            })
        }
    };

    function tK() {
        var a = new Fq;
        a = Qi(a, 1, "Toggle toolbar expansion");
        a = Qi(a, 2, "Toggle privacy and legal settings display");
        return Qi(a, 3, "Dismiss privacy and legal settings display").i()
    };
    var vK = (a, b, c, d, e, f = null, g = null) => {
            uK(a, new jK(a), b, c, d, e, f, g)
        },
        uK = (a, b, c, d, e, f, g = null, h = null) => {
            if (c)
                if (d) {
                    var k = $B(d, e);
                    try {
                        const l = new wK(a, b, c, d, e, k, f, g, h);
                        Ru(990, () => xK(l), a)
                    } catch (l) {
                        Ij() && Jj(15, [l]), iK(b, fr, fI(iI(hI((new jI(0)).Ub(c), d), k).va(1), l)), mF(O(jF), Jl(new Rl, cl(1)))
                    }
                } else iK(b, fr, (new jI(0)).Ub(c).va(8)), mF(O(jF), Jl(new Rl, cl(8)));
            else iK(b, fr, (new jI(0)).va(9)), mF(O(jF), Jl(new Rl, cl(9)))
        };

    function xK(a) {
        a.G.forEach(b => {
            switch (b) {
                case 0:
                    Ru(991, () => yK(a), a.g);
                    break;
                case 1:
                    Ru(1073, () => {
                        const c = U(ps);
                        TB(new ZB(a.g, a.B, a.j, a.A, a.i.aa, c))
                    }, a.g);
                    break;
                case 2:
                    zK(a);
                    break;
                case 6:
                    a.runAutoGames();
                    break;
                case 7:
                    Ru(1203, () => {
                        var c = x(a.j, Rq, 34);
                        if (c) {
                            var d = a.g,
                                e = a.A,
                                f = c.i();
                            c = d.location.hostname;
                            var g = x(f, Qq, 1) ? .g() ? ? [];
                            c = new TG(e, c, Ze(q), g);
                            if (g = x(f, Qq, 1))
                                if (f = x(f, Pq, 2)) {
                                    vp(d, AG);
                                    const l = new uo;
                                    var h = d.innerWidth;
                                    var k = .375 * h;
                                    h = new QC(k, h - k);
                                    k = d.innerWidth;
                                    k = Vn(d) >= 900 ? .2 * k : .5 * k;
                                    MG(new OG(d, e,
                                        g, f, new tG(d, h, k, l, new dG(l)), c))
                                } else c.reportError("No messages");
                            else c.reportError("No settings")
                        }
                    }, a.g)
            }
        })
    }

    function yK(a) {
        var b = U(Xr) ? void 0 : a.i.Bj;
        let c = null;
        c = U(Xr) ? Yx(a.g) : Wx(a.g, b);
        if (a.i.aa && Th(a.i.aa, oq, 10)) {
            var d = Wh(a.i.aa.g(), 1);
            d !== null && d !== void 0 && (c = Nx(a.g, d, b));
            U(ns) && a.i.aa.g() ? .g() === 2 && (c = Vx(a.i.aa.g(), c))
        }
        Th(a.j, lq, 26) && (c = $x(c, x(a.j, lq, 26), a.g));
        c = by(c, a.g);
        b = a.i.aa ? Xh(a.i.aa, 6, Jg, w(ag)) : [];
        d = a.i.aa ? oi(a.i.aa, uq, 5, w(ag)) : [];
        const e = a.i.aa ? Xh(a.i.aa, 2, Jg, w(ag)) : [],
            f = Ru(993, () => {
                var g = a.j,
                    h = oi(g, Nq, 1, w(ag)),
                    k = a.i.aa && pK(a.i.aa, 1);
                k = U(ss) ? "" : k ? "text_image" : "text";
                var l = new MJ,
                    m = gv(h, a.g, {
                        Rh: l,
                        Zi: new ev(k)
                    });
                h.length != m.length && a.H.push(13);
                m = m.concat(RJ(new SJ(a.g, l)));
                h = U(ks);
                l = x(g, Zq, 24) ? .j() ? .g() ? .g() || !1;
                if (h || l) h = OJ(new PJ(a.g)), l = O(FI), m = m.concat(h), l.O = !0, l.C = h.length, a.F === "n" && (a.F = x(g, Zq, 24) ? .g() ? .length ? "o" : "p");
                h = U(ns) && a.i.aa.g() ? .g() === 2 && a.i.aa.g() ? .j();
                h = U(Sr) || h;
                a: {
                    if (l = x(g, Jq, 6))
                        for (n of l.g())
                            if (Th(n, Tp, 4)) {
                                var n = !0;
                                break a
                            }
                    n = !1
                }
                h && n ? (n = m.concat, h = a.g, (l = x(g, Jq, 6)) ? (h = Kv(l.g(ag), h), k = UG(g, k, h)) : k = [], k = n.call(m, k)) : (n = m.concat, h = a.g, (l = x(g, Jq, 6)) ? (h = Jv(l.g(ag),
                    h), k = UG(g, k, h)) : k = [], k = n.call(m, k));
                m = k;
                g = x(g, Zq, 24);
                return new TI(m, a.g, g)
            }, a.g);
        a.l = new tJ(f, a.A, a.g, {
            Cb: c,
            Ii: a.O,
            sc: a.i.sc,
            ti: b,
            je: d
        }, AK(a), e, U(js));
        pJ(a.l) ? .optimization ? .ablatingThisPageview && !a.l.sb() && (Bu(a.g), O(FI).B = !0, a.F = "f");
        a.C = wJ(e, a.l, a.g);
        Ru(992, () => CJ(a.C), a.g).then(Ru(994, () => a.ia.bind(a), a.g), a.ca.bind(a));
        BK(a)
    }

    function zK(a) {
        const b = x(a.j, Oq, 18);
        b && sF(new tF(a.g, new bG(a.g, a.A), b, new mA(a.g), oi(a.j, Nq, 1, w(ag))))
    }

    function AK(a) {
        const b = U(ms);
        if (!a.j.g()) return {
            kh: b,
            rh: !1,
            ui: !1,
            sh: !1,
            kg: !1,
            fh: !1,
            yj: 0,
            Ug: 0,
            Nf: CK(a),
            Me: a.I
        };
        const c = a.j.g();
        return {
            kh: b || J(c, 14, !1),
            rh: J(c, 2, !1),
            ui: J(c, 3, !1),
            sh: J(c, 4, !1),
            kg: J(c, 5, !1),
            fh: J(c, 6, !1),
            yj: Ei(c, 8, 0),
            Ug: Bi(c, 10),
            Nf: CK(a),
            Me: a.I
        }
    }

    function BK(a) {
        if (U(Rt)) {
            var b = new LJ(a.A);
            const e = x(a.j, Jq, 6) ? .g(ag),
                f = e ? .length > 0;
            var c = b,
                d = !!eA(a.g).reactiveTypeEnabledInAsfe[8];
            IJ(c, {
                typ: "pv",
                asp: Number(f),
                ve: Number(d)
            });
            f && (a = new JJ(a.g, e, b), b = FJ(a.win, a.g), b.length === 0 ? KJ(a.M, {
                se: 0
            }) : (c = GJ(b), d = c.g.getBoundingClientRect(), KJ(a.M, {
                se: b.length,
                W: P(a.win),
                Ic: Zn(a.win).scrollHeight,
                Jh: d.height,
                Lh: a.win.scrollY + d.top
            }), c = c.g, HJ(a, c, 0, "-50% 0px 0px 0px"), HJ(a, c, 1, "0px 0px 0px 0px")))
        }
    }

    function CK(a) {
        return U(ds) || U(ns) && a.i.aa ? .g() ? .g() === 2 ? !1 : a.i.aa && Th(a.i.aa, oq, 10) ? (Wh(a.i.aa.g(), 1) || 0) >= .5 : !0
    }

    function DK(a, b) {
        for (var c = eI(eI(new jI(b.La), b.errors), a.H), d = b.zb, e = 0; e < d.length; e++) a: {
            for (var f = c, g = d[e], h = 0; h < f.B.length; h++)
                if (f.B[h] == g) break a;f.B.push(g)
        }
        c.g.pp = b.Sd;
        c.g.ppp = b.Td;
        c.g.ppos = b.placementPositionDiffs;
        c.g.eatf = b.kc;
        c.g.eatfAbg = b.lc;
        c.g.reatf = b.Jb;
        c = iI(hI(c.H(a.C.l.slice(0)), a.j), a.G).Ub(a.A);
        if (d = b.Fa) c.g.as_count = d.Kf, c.g.d_count = d.ig, c.g.ng_count = d.Lg, c.g.am_count = d.Pf, c.g.atf_count = d.Lf, c.g.mdns = kI(d.Gg), c.g.alldns = kI(d.Mf);
        c = c.G(b.Qb).jh(b.ld);
        d = b.Ic;
        d != null && (c.g.pgh = d);
        c.g.abl = b.tg;
        c.g.rr = a.F;
        b.exception !== void 0 && fI(c, b.exception).va(1);
        return c
    }

    function EK(a, b) {
        var c = DK(a, b);
        iK(a.B, b.errors.length > 0 || a.H.length > 0 || b.exception !== void 0 ? fr : er, c);
        if (x(a.j, Zq, 24)) {
            a.l.i.g.g ? .F();
            b = pJ(a.l);
            const d = O(FI);
            d.j = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.G = !0);
            d.R = !!b ? .optimization ? .availableAbg;
            b = O(FI);
            c = new wI(c);
            b.A ? (c.i.sl = mI(b.A ? ? []), c.i.daaos = mI(b.H ? ? []), c.i.ab = nI(b.G), c.i.rr = nI(b.O), c.i.oab = nI(b.F), b.j != null && (c.i.sab = nI(b.j)), b.B && (c.i.fb = nI(b.B)), c.i.ls = nI(b.R), oI(c, b.i.wc()), b.C != null && (c.i.rp = nI(b.C)),
                b.l != null && (c.i.expl = nI(b.l)), EI(b, c)) : c.errors.push("irr");
            iK(a.B, hr, c)
        }
        c = a.l ? .ta();
        U(js) && c != null && (c = new Map([...c.j.map.entries()].map(lG)), b = new UJ, TJ(b, c), iK(a.B, kr, b))
    }

    function FK(a, b) {
        const c = O(jF);
        if (c.i) {
            var d = new Rl,
                e = b.zb.filter(g => g !== null),
                f = a.H.concat(b.errors, b.exception ? [1] : []).filter(g => g !== null);
            Nl(Ll(Ql(Pl(Ol(Ml(Gl(Il(Kl(Hl(d, a.C.l.slice(0).map(g => {
                var h = new bl;
                return Rh(h, 1, Ig(g))
            })), e.map(g => {
                var h = new el;
                return Rh(h, 1, Ig(g))
            })), f.map(g => cl(g))), x(a.j, yq, 23) ? .g()), b.La).G(b.Qb), b.Jb), b.kc), b.lc), a.G.map(g => g.toString())), ll(kl(jl(il(hl(gl(fl(new ml, b.Fa ? .Kf), b.Fa ? .ig), b.Fa ? .Lg), b.Fa ? .Pf), b.Fa ? .Lf), b.Fa ? .Gg), b.Fa ? .Mf));
            if (b.ld)
                for (let g of mo(b.ld)) {
                    e =
                        new di;
                    for (let h of b.ld.get(g)) ql(e, ol(nl(new pl, h.kb), h.th));
                    ci(d).set(g.toString(), e)
                }
            x(a.j, Zq, 24) && El(d);
            mF(c, d)
        }
    }

    function GK(a, b) {
        try {
            U(Ur) && a.l ? .Ea() ? .A()
        } catch (c) {
            iK(a.B, jr, fI(iI(hI((new jI(b)).Ub(a.A), a.j), a.G).va(14), c))
        }
    }

    function HK(a, b, c) {
        {
            var d = pJ(a.l),
                e = b.g;
            const f = e.g,
                g = e.Sd;
            let h = e.La,
                k = e.Td,
                l = e.errors.slice(),
                m = e.zb.slice(),
                n = b.exception;
            const p = XE(a.g).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.C.j && m.push(13), d.exception !== void 0 && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                La: h,
                Sd: g,
                Td: k,
                Qb: f,
                errors: e.errors.slice(),
                zb: m,
                exception: n,
                Jb: c,
                kc: !!d.eatf,
                lc: !!d.eatfAbg,
                tg: p
            }) : (m.push(12), a.C.j && m.push(13), c = {
                La: h,
                Sd: g,
                Td: k,
                Qb: f,
                errors: l,
                zb: m,
                exception: n,
                Jb: c,
                kc: !1,
                lc: !1,
                tg: p
            })
        }
        c.Fa = lJ(a.l.g);
        if (b = b.g.i) c.ld = b;
        c.Ic = Zn(a.g).scrollHeight;
        if (Ij() || x(a.j, xq, 25) ? .j()) {
            d = Dp(a.l.i.i);
            b = [];
            for (const f of d) {
                d = {};
                e = f.I;
                for (const g of mo(e)) d[g] = e.get(g);
                d = {
                    anchorElement: kv(f),
                    position: f.g(),
                    clearBoth: f.H,
                    locationType: f.Lb,
                    placed: f.A,
                    placementProto: f.l ? Ui(f.l) : null,
                    articleStructure: f.B ? Ui(f.B) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Jj(14, [{
                placementIdentifiers: b
            }, a.l.G, c.Fa])
        }
        return c
    }

    function IK(a, b) {
        var c = a.l.g;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Qb;
        c.numAutoAdsPlaced = b.La;
        c.hasAtfAd = b.Jb;
        b.exception !== void 0 && (c.exception = b.exception);
        a.l != null && (a = WJ(a.g, a.l, {
            nd: -1,
            uc: -1,
            Dc: -1,
            yg: !0,
            Of: !0
        }), a.g != null ? (c.placementPositionDiffs = hK(a.getValue()), b = gK(a.getValue()), a = new $G, a = B(a, 2, aH, b), c.placementPositionDiffsReport = Ti(a)) : (b = a.i.message, c.placementPositionDiffs = "E" + b, a = new $G, a = ii(a, 1, aH, ch(b)), c.placementPositionDiffsReport = Ti(a)))
    }

    function JK(a, b) {
        EK(a, {
            La: 0,
            Qb: void 0,
            errors: [],
            zb: [],
            exception: b,
            Jb: void 0,
            kc: void 0,
            lc: void 0,
            Fa: void 0
        });
        FK(a, {
            La: 0,
            Qb: void 0,
            errors: [],
            zb: [],
            exception: b,
            Jb: void 0,
            kc: void 0,
            lc: void 0,
            Fa: void 0
        })
    }
    class wK {
        constructor(a, b, c, d, e, f, g, h, k) {
            this.g = a;
            this.B = b;
            this.A = c;
            this.j = d;
            this.i = e;
            this.G = f;
            this.O = h || null;
            this.H = [];
            this.I = k;
            this.R = g;
            this.F = "n"
        }
        runAutoGames() {
            const a = x(this.j, zq, 32);
            a && this.R.runAutoGames({
                win: this.g,
                webPropertyCode: this.A,
                Uf: a,
                Hb: (x(this.j, Gq, 33) ? .g() ? .i() ? ? null) || tK()
            })
        }
        ia(a) {
            try {
                GK(this, a.g.La);
                const b = kJ(this.l.g) || void 0;
                dr({
                    He: b
                }, this.g);
                const c = HK(this, a, kJ(this.l.g));
                Th(this.j, xq, 25) && ti(x(this.j, xq, 25), 1) && IK(this, c);
                EK(this, c);
                FK(this, c);
                iy(753, () => {
                    if (U(Yr) && this.l !=
                        null) {
                        var d = WJ(this.g, this.l, {
                                nd: V(is),
                                uc: V(hs),
                                Dc: V($r),
                                yg: !0,
                                Of: !1
                            }),
                            e = Nb(c);
                        d.g != null ? (d = hK(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.i.message;
                        e = DK(this, e);
                        iK(this.B, gr, e)
                    }
                })()
            } catch (b) {
                JK(this, b)
            }
        }
        ca(a) {
            GK(this, 0);
            JK(this, a)
        }
    };
    var KK = class extends N {},
        LK = Wi(KK);

    function MK(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Jp(() => LK(c)) : Gp(null)
    };

    function NK(a, b) {
        return Li(a, 5, b)
    }

    function OK(a, b) {
        return Li(a, 14, b)
    }
    var PK = class extends N {
        constructor() {
            super()
        }
        l() {
            return C(this, 1) != null
        }
        j() {
            return C(this, 2) != null
        }
        A() {
            return J(this, 3)
        }
        B() {
            return ti(this, 3) != null
        }
        g() {
            return J(this, 5)
        }
    };
    var SK = ({
        win: a,
        Va: b,
        wg: c = !1,
        xg: d = !1
    }) => QK({
        win: a,
        Va: b,
        wg: c,
        xg: d
    }) ? (b = NE(IE(), 24)) ? RK(a, NK(new PK, RF(b))) : new Hp(null, Error("tcunav")) : RK(a, NK(new PK, !0));

    function QK({
        win: a,
        Va: b,
        wg: c,
        xg: d
    }) {
        if (!(d = !d && WF(new $F(a)))) {
            if (c = !c) {
                if (b) {
                    a = MK(a);
                    if (a.g != null)
                        if ((a = a.getValue()) && Bi(a, 1) != null) b: switch (a = Bi(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else W.ba(806, a.i, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function RK(a, b) {
        return (a = yj(b, a)) ? Gp(a) : new Hp(null, Error("unav"))
    };
    var TK = class extends N {};
    class UK {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.l = b;
            this.B = c;
            this.i = !1;
            this.j = d;
            this.A = e
        }
    };
    class VK {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function WK() {
        const {
            promise: a,
            resolve: b
        } = new VK;
        return {
            promise: a,
            resolve: b
        }
    };

    function XK(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = WK();
        b[a] = d;
        c();
        return d
    }

    function YK(a, b, c) {
        return XK(a, b, () => {
            ue(b.document, c)
        }).promise
    };
    var ZK = class {
        constructor(a) {
            this.jb = a
        }
        runAutoGames({
            win: a,
            webPropertyCode: b,
            Uf: c,
            Hb: d
        }) {
            ky(1116, YK(12, a, this.jb).then(e => {
                e.runAutoGames({
                    win: a,
                    webPropertyCode: b,
                    serializedAutoGamesConfig: Ti(c),
                    serializedFloatingToolbarMessages: Ti(d)
                })
            }))
        }
    };
    var $K = {
            bl: "google_ads_preview",
            Il: "google_mc_lab",
            Yl: "google_anchor_debug",
            Xl: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            um: "google_scr_debug",
            wm: "google_ia_debug_allow_onclick",
            Tm: "googleads",
            Dh: "google_pedestal_debug",
            on: "google_responsive_slot_preview",
            nn: "google_responsive_dummy_ad",
            Tk: "google_audio_sense",
            Wk: "google_auto_gallery",
            Yk: "google_auto_storify_swipeable",
            Xk: "google_auto_storify_scrollable",
            Vk: "google_games_single_game",
            Uk: "google_games_catalog"
        },
        aL = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var bL = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR"
    };

    function cL(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = dL(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function dL(a) {
        let b = "";
        ye(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function eL() {
        var a = q.location;
        let b = !1;
        ye($K, c => {
            cL(a, c) && (b = !0)
        });
        return b
    }

    function fL(a, b) {
        switch (a) {
            case 1:
                return cL(b, "google_ia_debug");
            case 2:
                return cL(b, "google_bottom_anchor_debug");
            case 3:
                return cL(b, "google_anchor_debug") || cL(b, "googleads")
        }
    };

    function gL({
        win: a,
        webPropertyCode: b,
        jb: c
    }) {
        cL(a.location, "google_games_single_game") ? hL(a, b, 1, c) : cL(a.location, "google_games_catalog") && hL(a, b, 2, c)
    }

    function hL(a, b, c, d) {
        var e = new zq;
        c = Rh(e, 1, Ig(c));
        (new ZK(d)).runAutoGames({
            win: a,
            webPropertyCode: b,
            Uf: c,
            Hb: tK()
        })
    };
    var iL = class extends N {
        constructor() {
            super()
        }
        Oi() {
            return Fi(this, 3)
        }
    };
    const jL = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var kL = class extends N {
        constructor() {
            super()
        }
        getVersion() {
            return Ci(this, 2)
        }
    };

    function lL(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    };

    function mL(a) {
        return lf(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function nL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function oL(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    }

    function pL(a, b) {
        a = mL(a);
        return a.length < b ? a.padEnd(b, "0") : a
    };

    function qL(a) {
        var b = mL(a),
            c = nL(b.slice(0, 6));
        a = nL(b.slice(6, 12));
        var d = new kL;
        c = Ni(d, 1, c);
        a = Ni(c, 2, a);
        b = b.slice(12);
        c = nL(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (e.length === 0) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = nL(e[0]) === 0;
            e = e.slice(1);
            var g = rL(e, b),
                h = d.length === 0 ? 0 : d[d.length - 1];
            h = oL(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = rL(e, b);
                g = oL(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return ei(a, 3, d, Kg)
    }

    function rL(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var sL = class extends N {
        constructor() {
            super()
        }
    };
    var tL = class extends N {
        constructor() {
            super()
        }
    };
    var uL = class extends N {
        getVersion() {
            return Ci(this, 1)
        }
    };
    var vL = class extends N {
        constructor() {
            super()
        }
    };

    function wL(a) {
        var b = new xL;
        return A(b, 1, a)
    }
    var xL = class extends N {
        constructor() {
            super()
        }
    };
    const yL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        zL = 6 + yL.reduce((a, b) => a + b);
    var AL = class extends N {
        constructor() {
            super()
        }
    };
    var BL = class extends N {
        getVersion() {
            return Ci(this, 1)
        }
    };
    var CL = class extends N {
        constructor() {
            super()
        }
    };

    function DL(a) {
        var b = new EL;
        return A(b, 1, a)
    }
    var EL = class extends N {
        constructor() {
            super()
        }
    };
    const FL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        GL = 6 + FL.reduce((a, b) => a + b);
    var HL = class extends N {
        constructor() {
            super()
        }
    };
    var IL = class extends N {
        constructor() {
            super()
        }
    };
    var JL = class extends N {
        getVersion() {
            return Ci(this, 1)
        }
    };
    var KL = class extends N {
        constructor() {
            super()
        }
    };

    function LL(a) {
        var b = new ML;
        return A(b, 1, a)
    }
    var ML = class extends N {
        constructor() {
            super()
        }
    };
    const NL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        OL = 6 + NL.reduce((a, b) => a + b);
    var PL = class extends N {
        constructor() {
            super()
        }
    };
    var QL = class extends N {
        constructor() {
            super()
        }
    };
    var RL = class extends N {
        getVersion() {
            return Ci(this, 1)
        }
    };
    var SL = class extends N {
        constructor() {
            super()
        }
    };

    function TL(a) {
        var b = new UL;
        return A(b, 1, a)
    }
    var UL = class extends N {
        constructor() {
            super()
        }
    };
    const VL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        WL = 6 + VL.reduce((a, b) => a + b);
    var XL = class extends N {
        constructor() {
            super()
        }
    };
    var YL = class extends N {
        constructor() {
            super()
        }
        getVersion() {
            return Ci(this, 1)
        }
    };
    const ZL = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        $L = 6 + ZL.reduce((a, b) => a + b);

    function aM() {
        var a = new bM;
        return Pi(a, 1, 0)
    }

    function cM(a) {
        var b = Number; {
            var c = Oh(a, 1);
            const d = typeof c;
            c = c == null ? c : d === "bigint" ? String(BigInt.asIntN(64, c)) : Gg(c) ? d === "string" ? Pg(c) : Qg(c) : void 0
        }
        b = b(c ? ? "0");
        a = Ci(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var bM = class extends N {};
    var dM = "a".charCodeAt(),
        eM = Mb(Mn),
        fM = Mb(Nn);

    function gM(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function hM(a) {
        let b = gM(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!gM(a, 1) === !0,
                e = gM(a, 16);
            if (d)
                for (d = gM(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function iM(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (gM(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function jM(a) {
        const b = gM(a, 16);
        return !!gM(a, 1) === !0 ? (a = hM(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : iM(a, b)
    }
    class kM {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var mM = a => {
        try {
            var b = lf(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new kM(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = gM(c, 12);
            b.cmpVersion = gM(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = gM(c, 6);
            b.isServiceSpecific = !!gM(c, 1);
            b.useNonStandardStacks = !!gM(c, 1);
            b.specialFeatureOptins = lM(iM(c, 12, fM), fM);
            b.purpose = {
                consents: lM(iM(c, 24, eM), eM),
                legitimateInterests: lM(iM(c, 24, eM), eM)
            };
            b.purposeOneTreatment = !!gM(c, 1);
            b.publisherCC = String.fromCharCode(dM + gM(c, 6)) + String.fromCharCode(dM +
                gM(c, 6));
            b.vendor = {
                consents: lM(jM(c), null),
                legitimateInterests: lM(jM(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const lM = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var nM = class extends N {
        g() {
            return C(this, 2) != null
        }
    };
    var oM = class extends N {
        l() {
            return C(this, 2) != null
        }
    };
    var pM = class extends N {
        j() {
            return C(this, 1) != null
        }
    };
    var qM = Wi(class extends N {});

    function rM(a) {
        a = sM(a);
        try {
            var b = a ? qM(a) : null
        } catch (c) {
            b = null
        }
        return b ? x(b, pM, 4) || null : null
    }

    function sM(a) {
        a = (new wj(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };

    function tM(a) {
        a.__tcfapiPostMessageReady || uM(new vM(a))
    }

    function uM(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.win.__tcfapi)(e.command, e.version, (f, g) => {
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
        a.win.addEventListener("message", a.g);
        a.win.__tcfapiPostMessageReady = !0
    }
    var vM = class {
        constructor(a) {
            this.win = a
        }
    };

    function wM(a) {
        a.__uspapiPostMessageReady || xM(new yM(a))
    }

    function xM(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.win.__uspapi(e.command, e.version, (f, g) => {
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
        a.win.addEventListener("message", a.g);
        a.win.__uspapiPostMessageReady = !0
    }
    var yM = class {
        constructor(a) {
            this.win = a;
            this.g = null
        }
    };
    var zM = class extends N {};
    var AM = Wi(class extends N {
        g() {
            return C(this, 1) != null
        }
    });

    function BM(a, b, c) {
        function d(n) {
            if (n.length < 10) return null;
            var p = h(n.slice(0, 4));
            p = k(p);
            n = h(n.slice(6, 10));
            n = l(n);
            return "1" + p + n + "N"
        }

        function e(n) {
            if (n.length < 10) return null;
            var p = h(n.slice(0, 6));
            p = k(p);
            n = h(n.slice(6, 10));
            n = l(n);
            return "1" + p + n + "N"
        }

        function f(n) {
            if (n.length < 12) return null;
            var p = h(n.slice(0, 6));
            p = k(p);
            n = h(n.slice(8, 12));
            n = l(n);
            return "1" + p + n + "N"
        }

        function g(n) {
            if (n.length < 18) return null;
            var p = h(n.slice(0, 8));
            p = k(p);
            n = h(n.slice(12, 18));
            n = l(n);
            return "1" + p + n + "N"
        }

        function h(n) {
            const p = [];
            let r = 0;
            for (let y = 0; y < n.length / 2; y++) p.push(nL(n.slice(r, r + 2))), r += 2;
            return p
        }

        function k(n) {
            return n.every(p => p === 1) ? "Y" : "N"
        }

        function l(n) {
            return n.some(p => p === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = mL(a[0]);
        const m = nL(a.slice(0, 6));
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

    function CM(a) {
        var b = U(Dr);
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new DM(a, b), EM(a), FM(a))
    }

    function EM(a) {
        !a.i || a.win.__uspapi || a.win.frames.__uspapiLocator || (a.win.__uspapiManager = "fc", CF(a.win, "__uspapiLocator"), La("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && d({
                version: 1,
                uspString: a.i
            }, !0)
        }, a.win), wM(a.win))
    }

    function FM(a) {
        !a.tcString || a.win.__tcfapi || a.win.frames.__tcfapiLocator || (a.win.__tcfapiManager = "fc", CF(a.win, "__tcfapiLocator"), a.win.__tcfapiEventListeners = a.win.__tcfapiEventListeners || [], La("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else switch (c = a.win.__tcfapiEventListeners, b) {
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
                        a.tcString ?
                            (e = mM(a.tcString), e.addtlConsent = a.g != null ? a.g : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
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
        }, a.win), tM(a.win))
    }

    function GM(a, b) {
        if (!b ? .g() || K(b, 1).length === 0 || oi(b, zM, 2, w()).length === 0) return null;
        const c = K(b, 1);
        let d;
        try {
            var e = qL(c.split("~")[0]);
            d = lL(c)
        } catch (f) {
            return null
        }
        b = oi(b, zM, 2, w()).reduce((f, g) => Di(HM(f), 1) > Di(HM(g), 1) ? f : g);
        e = Xh(e, 3, Lg, w()).indexOf(Ci(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: BM(d[e], Ci(b, 1), a.j),
            Ce: cM(HM(b))
        }
    }

    function IM(a) {
        a = a.find(b => b && Fi(b, 1) === 13);
        if (a ? .g()) try {
            return AM(K(a, 2))
        } catch (b) {}
        return null
    }

    function HM(a) {
        return Th(a, bM, 2) ? x(a, bM, 2) : aM()
    }
    var DM = class {
        constructor(a, b) {
            this.win = a;
            this.j = b;
            b = sM(this.win.document);
            try {
                var c = b ? qM(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = x(b, oM, 5) || null, b = oi(b, nM, 7, w()), b = IM(b ? ? []), c = {
                Zf: c,
                sg: b
            }) : c = {
                Zf: null,
                sg: null
            };
            b = c;
            c = GM(this, b.sg);
            b = b.Zf;
            if (b ? .l() && K(b, 2).length !== 0) {
                var d = Th(b, bM, 1) ? x(b, bM, 1) : aM();
                b = {
                    uspString: K(b, 2),
                    Ce: cM(d)
                }
            } else b = null;
            this.i = b && c ? c.Ce > b.Ce ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.tcString = (c = rM(a.document)) && c.j() ? K(c, 1) : null;
            this.g = (a = rM(a.document)) && C(a, 2) != null ?
                K(a, 2) : null
        }
    };

    function JM() {
        const a = Ed();
        return a ? $a("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), b => $b(a, b)) || $b(a, "OMI/") && !$b(a, "XiaoMi/") ? !0 : $b(a, "Presto") && $b(a, "Linux") && !$b(a, "X11") && !$b(a, "Android") && !$b(a, "Mobi") : !1
    };

    function KM(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return (b <= .03928 ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) * .2126 + (c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) * .7152 + (a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)) * .0722
    }
    var LM = (a, b) => {
        a = KM(a);
        b = KM(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var MM = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            Hb(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = Ib(a, "message", e));
                return g
            }
        },
        NM = (a, b, c, d = null) => {
            const e = MM(a, b, yb(c, () => e()), d);
            return e
        },
        OM = (a, b, c, d, e) => {
            if (!(e <= 0) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) e > 1 && OM(a[f], b, c, d, --e)
        };

    function PM(a, b, c, d) {
        return MM(a, "fullscreen", d.Ca(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    async function QM(a) {
        return a.A.promise
    }
    async function RM(a) {
        return a.j.promise
    }
    async function SM(a) {
        return a.l.promise
    }

    function TM(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.C.Uj;
        b.version = a.C.version;
        Qk(a.Z, "fullscreen_tag", b, !1, .25)
    }
    class UM extends Q {
        constructor(a, b, c) {
            var d = W,
                e = fy,
                f = {
                    Uj: 2,
                    version: EE()
                };
            super();
            this.slotType = a;
            this.pubWin = b;
            this.Be = c;
            this.Ia = d;
            this.Z = e;
            this.C = f;
            this.g = 1;
            this.qem = null;
            this.A = new VK;
            this.j = new VK;
            this.l = new VK
        }
        J() {
            const a = PM(this.pubWin, this.Be, b => {
                if (b.eventType === "adError") this.l.resolve(), this.g = 4;
                else if (b.eventType === "adReady" && this.g === 1) this.qem = b.qem, b.slotType !== this.slotType && (TM(this, {
                    cur_st: this.g,
                    evt: b.eventType,
                    adp_tp: b.slotType
                }), this.g = 4), this.A.resolve(), this.g = 2;
                else if (b.eventType ===
                    "adClosed" && this.g === 2) this.j.resolve(b.result), this.g = 3;
                else if (b.eventType !== "adClosed" || this.g !== 3) TM(this, {
                    cur_st: this.g,
                    evt: b.eventType
                }), this.g = 4
            }, this.Ia);
            yo(this, a)
        }
    };
    var VM = Promise;
    class WM {
        constructor(a) {
            this.j = a
        }
        i(a, b, c) {
            this.j.then(d => {
                d.i(a, b, c)
            })
        }
        g(a, b) {
            return this.j.then(c => c.g(a, b))
        }
    };
    class XM {
        constructor(a) {
            this.data = a
        }
    };

    function YM(a, b) {
        ZM(a, b);
        return new $M(a)
    }
    class $M {
        constructor(a) {
            this.j = a
        }
        i(a, b, c = []) {
            const d = new MessageChannel;
            ZM(d.port1, b);
            this.j.postMessage(a, [d.port2].concat(c))
        }
        g(a, b) {
            return new VM(c => {
                this.i(a, c, b)
            })
        }
    }

    function ZM(a, b) {
        b && (a.onmessage = c => {
            b(new XM(c.data, YM(c.ports[0])))
        })
    };
    var aN = class {
        constructor(a) {
            this.g = a
        }
    };
    const bN = a => {
        const b = Object.create(null);
        (typeof a === "string" ? [a] : a).forEach(c => {
            if (c === "null") throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
            b[c] = !0
        });
        return c => b[c] === !0
    };
    var dN = ({
        destination: a,
        Na: b,
        origin: c,
        we: d = "ZNWN1d",
        onMessage: e,
        Mg: f
    }) => cN({
        destination: a,
        Pi: () => b.contentWindow,
        sj: c instanceof aN ? c : typeof c === "function" ? new aN(c) : new aN(bN(c)),
        we: d,
        onMessage: e,
        Mg: f
    });
    const cN = ({
        destination: a,
        Pi: b,
        sj: c,
        vo: d,
        we: e,
        onMessage: f,
        Mg: g
    }) => new WM(new VM((h, k) => {
        const l = m => {
            m.source && m.source === b() && c.g(m.origin) && (m.data.n || m.data) === e && (a.removeEventListener("message", l, !1), d && m.data.t !== d ? k(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${m.data.t}.`)) : (h(YM(m.ports[0], f)), g && g(m)))
        };
        a.addEventListener("message", l, !1)
    }));

    function eN(a, b, c, d, e, f, g = null) {
        if (e) {
            if (U(Wr)) var h = null;
            else try {
                h = e.getItem("google_ama_config")
            } catch (m) {
                h = null
            }
            try {
                var k = h ? $q(h) : null
            } catch (m) {
                k = null
            }
        } else k = null;
        a: {
            if (d) try {
                var l = $q(d);
                break a
            } catch (m) {
                lK(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            l = null
        }
        if (d = l) {
            if (e) {
                l = new nq;
                A(d, 3, l);
                k = d ? .g() ? .j() || 1;
                k = Date.now() + 864E5 * k;
                Number.isFinite(k) && Oi(l, 1, Math.round(k));
                l = Gh(d);
                d.g() && (k = new mq, h = d ? .g() ? .g(), k = Li(k, 23, h), h = d ? .g() ? .l(), k = Li(k, 12, h), A(l, 15, k));
                k = oi(l, Nq, 1, w());
                for (h = 0; h < k.length; h++) Rh(k[h], 11);
                Rh(l, 22);
                if (U(Wr)) sK(a,
                    e);
                else try {
                    e.setItem("google_ama_config", Ti(l))
                } catch (m) {
                    lK(a, {
                        lserr: 1
                    })
                }
            }
            e = qK(a, oi(d, wq, 7, w()));
            l = {};
            U(Xr) || (l.Bj = x(d, Hq, 8) || new Hq);
            e && (l.aa = e);
            e && pK(e, 3) && (l.sc = [1]);
            e = l;
            if (!U(zr) && c.google_pgb_reactive === 7 && !e.aa) return !1;
            YE(a, 2) && (Jj(5, [Ui(d)]), c = mK(c), f = new ZK(f), l = (l = e.aa) && C(l, 4) || "", c.google_package = l, vK(a, b, d, e, f, new dq(["google-auto-placed"], c), g));
            return !0
        }
        k && (lK(a, {
            cfg: 1,
            cl: 1
        }), e != null && sK(a, e));
        return !1
    };

    function fN(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = $d(a.g.da() || window);
        if (c.bottom <= 0 || c.bottom > d.height || c.right <= 0 || c.left >= d.width) return null;
        var e = gN(a, b, c, a.g.g.elementsFromPoint(md(c.left + c.width / 2, c.left, c.right - 1), md(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = gN(a, b, c, a.g.g.elementsFromPoint(md(c.left + c.width / 2, c.left, c.right - 1), md(c.top + 2, c.top, c.bottom - 1)), 2, e.ob),
            g = gN(a, b, c, a.g.g.elementsFromPoint(md(c.left + 2, c.left, c.right - 1), md(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.ob, ...f.ob]);
        const h = gN(a, b, c, a.g.g.elementsFromPoint(md(c.right - 1 - 2, c.left, c.right - 1), md(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.ob, ...f.ob, ...g.ob]);
        var k = hN(a, b, c),
            l = n => ab(a.j, n.ub) && ab(a.l, n.Qg) && ab(a.i, n.Rg);
        e = Wa([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Wa(k, l);
        k = [...e, ...l];
        f = c.left < -2 || c.right > d.width + 2;
        f = k.length > 0 || f;
        g = ae(a.g.g);
        const m = new Nj(c.left, c.top, c.width, c.height);
        e = [...Xa(e, n => new Nj(n.nc.left, n.nc.top, n.nc.width, n.nc.height)), ...pb(Xa(l,
            n => Pj(m, n.nc))), ...Wa(Pj(m, new Nj(0, 0, d.width, d.height)), n => n.top >= 0 && n.top + n.height <= d.height)];
        return {
            entries: k,
            Dg: f,
            hh: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            Xb: c,
            uh: {
                width: d.width,
                height: d.height
            },
            tj: e.length < 20 ? iN(m, e) : jN(c, e)
        }
    }

    function kN(a, b) {
        const c = a.g.da(),
            d = a.g.g;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new Hk,
                                        m = Gk(l, () => fN(a, k));
                                    m && (l.i.length && (m.Fi = Math.round(Number(l.i[0].duration))), h.disconnect(), e(m))
                                }, lN);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function gN(a, b, c, d, e, f) {
        if (c.width === 0 || c.height === 0) return {
            entries: [],
            ob: []
        };
        const g = [],
            h = [];
        for (let m = 0; m < d.length; m++) {
            const n = d[m];
            if (n === b) continue;
            if (ab(f, n)) continue;
            h.push(n);
            const p = n.getBoundingClientRect();
            if (a.g.contains(n, b)) {
                g.push(mN(a, c, n, p, 1, e));
                continue
            }
            if (a.g.contains(b, n)) {
                g.push(mN(a, c, n, p, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b;
                const D = k.g.Ki(l, n);
                if (!D) {
                    k = null;
                    break a
                }
                const {
                    Da: E,
                    Fb: G
                } = nN(k, l, D, n) || {},
                {
                    Da: H,
                    Fb: z
                } = nN(k, n, D, l) || {};k = E && G && H && z ? G <= z ? {
                    Da: E,
                    ub: oN[G]
                } : {
                    Da: H,
                    ub: pN[z]
                } : E && G ? {
                    Da: E,
                    ub: oN[G]
                } : H && z ? {
                    Da: H,
                    ub: pN[z]
                } : null
            }
            const {
                Da: r,
                ub: y
            } = k || {};
            r && y ? g.push(mN(a, c, n, p, y, e, r)) : g.push(mN(a, c, n, p, 9, e))
        }
        return {
            entries: g,
            ob: h
        }
    }

    function hN(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = we(b, a.g.da());
                e && e.overflow !== "visible" && (e.overflowY !== "auto" && e.overflowY !== "scroll" && c.bottom > f.bottom + 2 ? d.push(mN(a, c, b, f, 5, 1)) : (e = e.overflowX === "auto" || e.overflowX === "scroll", !e && c.left < f.left - 2 ? d.push(mN(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(mN(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function iN(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Oj(e, b[g]), e)); g++);
            e && (c = f % 2 === 1 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function jN(a, b) {
        if (a.width === 0 || a.height === 0 || b.length === 0) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function mN(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            nc: d,
            ub: e,
            Rg: f
        };
        if (ab(a.j, e) && ab(a.i, f)) {
            b = new Kj(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = qN(a, c)) && Mj(b, a)) c = 4;
            else {
                a = rN(c, d);
                e = dk(c, "paddingLeft");
                f = dk(c, "paddingRight");
                var k = dk(c, "paddingTop"),
                    l = dk(c, "paddingBottom");
                e = new Kj(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                Mj(b, new Kj(a.top + e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = rN(c, d), c = Mj(b, c) ? 2 : 1)
            }
            h.Qg = c
        }
        g && (h.Da = g);
        return h
    }

    function nN(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.g.da();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = we(h, c);
            if (g) {
                if (g.position === "fixed") return {
                    Da: h,
                    Fb: 1
                };
                if (g.position === "sticky" && a.g.contains(h.parentElement, d)) return {
                    Da: h,
                    Fb: 2
                };
                if (g.position === "absolute") return {
                    Da: h,
                    Fb: 3
                };
                if (g.cssFloat !== "none") {
                    g = h === e[0];
                    const k = sN(a, e.slice(0, f), h);
                    if (g || k) return {
                        Da: h,
                        Fb: 4
                    }
                }
            }
        }
        return (a = sN(a, e, b)) ? {
            Da: a,
            Fb: 5
        } : null
    }

    function sN(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.g.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = we(f, a.g.da());
            if (h && d.bottom > g.bottom + 2 && h.overflowY === "visible") return f
        }
        return null
    }

    function qN(a, b) {
        var c = a.g.g;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return a.width === 0 || a.height === 0 ? null : new Kj(a.top, a.right, a.bottom, a.left)
    }

    function rN(a, b) {
        var c = dk(a, "borderLeftWidth");
        var d = dk(a, "borderRightWidth"),
            e = dk(a, "borderTopWidth");
        a = dk(a, "borderBottomWidth");
        c = new Kj(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c));
        return new Kj(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class tN {
        constructor(a) {
            var b = uN;
            this.g = Xd(a);
            this.j = [5, 8, 9];
            this.l = [3, 4];
            this.i = b
        }
    }
    const oN = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        pN = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Wa(ze({
        Ol: 1,
        Pl: 2,
        Fn: 3,
        Gn: 4,
        In: 5,
        Kl: 6,
        Ll: 7,
        Nl: 8,
        Pm: 9,
        Hn: 10,
        Ml: 11,
        En: 12,
        Jl: 13
    }), a => !ab([1, 2], a));
    ze({
        dl: 1,
        Sm: 2,
        rl: 3,
        Jn: 4
    });
    const uN = ze({
            el: 1,
            Mn: 2,
            Dm: 3,
            sn: 4
        }),
        lN = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function vN(a) {
        a.g != null || a.B || (a.g = new MutationObserver(b => {
            for (const c of b)
                for (const d of c.addedNodes) Da(d) && d.nodeType == 1 && (b = a, d.matches('A[href]:not([href=""])') && Qo(b.j, d))
        }), a.g.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0
        }))
    }
    var wN = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new Ro;
            this.g = null;
            yo(this, () => {
                this.g ? .disconnect();
                this.g = null
            })
        }
    };

    function xN(a, b) {
        b.addEventListener("click", () => {
            var c = a.g;
            var d = b.getAttribute("href");
            c = d ? d === "#" ? Gp(Ul(4)) : d.startsWith("#") ? Gp(Ul(5)) : yN(d, c) : Ip("Empty href");
            if (c.g != null) {
                d = c.getValue();
                c = a.M;
                var e = new Wl;
                d = A(e, 1, d);
                c.call(a, d)
            } else a.i(c.i)
        })
    }
    var AN = class {
        constructor(a, b, c) {
            var d = zN();
            this.win = a;
            this.g = b;
            this.M = c;
            this.i = d
        }
        J() {
            const a = new wN(this.win);
            Array.from(a.win.document.querySelectorAll('A[href]:not([href=""])')).forEach(b => {
                xN(this, b)
            });
            vN(a);
            Oo(a.j).listen(b => {
                xN(this, b)
            })
        }
    };

    function yN(a, b) {
        return BN(a, b).map(c => BN(b).map(d => {
            if (c.protocol === "http:" || c.protocol === "https:") {
                var e = Ul(2);
                e = Ri(e, 2, `${c.host}${c.pathname}`);
                d = Ri(e, 3, `${d.host}${d.pathname}`)
            } else d = c.protocol === "javascript:" ? Ul(3) : Ul(1);
            return d
        }))
    }

    function BN(a, b) {
        return Mp(Jp(() => new URL(a, b)), () => Error("Invalid URL"))
    };

    function CN(a) {
        if (a < 0 || !Number.isInteger(a)) return Ip(`Not a non-negative integer: ${a}`);
        const b = [];
        do b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a % 64)), a = Math.floor(a / 64); while (a > 0);
        return Gp(b.reverse().join(""))
    };
    class DN {
        constructor() {
            this.Ch = 5E3
        }
        gi() {
            return 5E3
        }
    }

    function EN(a, b) {
        return a.g ? Math.floor(b / 5E3) * 5E3 / a.g.Ch : b
    }

    function FN(a, b) {
        b = b.map(c => EN(a, c));
        return GN(b, a.i === void 0 ? void 0 : EN(a, a.i)).map(c => {
            a: {
                var d = HN;
                const e = [];
                for (const f of c) {
                    c = d(f);
                    if (c.g == null) {
                        d = new Hp(null, c.i);
                        break a
                    }
                    e.push(c.getValue())
                }
                d = Gp(e)
            }
            return d
        }).map(c => c.join(".")).map(c => IN(c, a.g ? .gi()))
    }
    var JN = class {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
    };

    function HN(a) {
        const b = CN(a.value);
        if (b.g == null) return b;
        const c = b.getValue();
        return a.Vd === 1 ? Gp(`${c}`) : a.Vd === 2 ? Gp(`${c}${"~"}`) : Op(CN(a.Vd - 2), d => {
            throw d;
        }).map(d => `${c}${"~"}${d}`)
    }

    function GN(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d] ? ? b;
            if (e === void 0) return Ip("Sparse but no default");
            c.length === 0 || e !== c[c.length - 1].value ? c.push({
                value: e,
                Vd: 1
            }) : c[c.length - 1].Vd++
        }
        return Gp(c)
    }

    function IN(a, b) {
        return a === "" ? Gp("") : KN(b).map(c => `${c}${a}`)
    }

    function KN(a) {
        return a === void 0 || a === 1 ? Gp("") : Np(CN(a), "ComFactor: ").map(b => `${"~"}${b}${"."}`)
    };
    var LN = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = () => {
                this.j.g(this.win.document.hasFocus())
            }
        }
        J() {
            this.win.addEventListener("focus", this.g);
            this.win.addEventListener("blur", this.g);
            yo(this, () => void this.win.removeEventListener("focus", this.g));
            yo(this, () => void this.win.removeEventListener("blur", this.g));
            this.j.g(this.win.document.hasFocus())
        }
    };

    function MN(a) {
        a.j.g(a.win.document.visibilityState === "visible")
    }
    var NN = class extends Q {
        constructor(a) {
            super();
            this.win = a;
            this.j = new R(!1);
            this.g = () => void MN(this)
        }
        J() {
            this.win.addEventListener("visibilitychange", this.g);
            yo(this, () => void this.win.removeEventListener("visibilitychange", this.g));
            MN(this)
        }
    };

    function ON(a) {
        return a.g !== null ? a.i + a.j() - a.g : a.i
    }
    var QN = class {
        constructor(a) {
            this.win = a;
            this.j = PN(this.win);
            this.i = 0;
            this.g = null
        }
        start() {
            this.g === null && (this.g = this.j())
        }
    };

    function PN(a) {
        return a.performance && a.performance.now ? () => a.performance.now() : () => Date.now()
    };

    function RN(a) {
        a = new SN(a);
        a.J();
        return a
    }

    function TN(a) {
        const b = bp(a.win, 1E3, () => void a.handleEvent());
        a.win.addEventListener("scroll", () => void b())
    }

    function UN(a) {
        const b = VN(a.win),
            c = () => {
                const d = VN(a.win),
                    e = Math.abs(d.height - b.height);
                if (Math.abs(d.width - b.width) > 20 || e > 20) a.F = !0, a.win.removeEventListener("resize", c)
            };
        a.win.addEventListener("resize", c)
    }

    function WN(a) {
        a.l = !a.g.P;
        Jo(a.g, !1, () => {
            a.win.setTimeout(() => {
                a.l = !0
            }, 100)
        })
    }

    function XN(a) {
        Io(a.g, !0, () => void a.j.start());
        Io(a.g, !1, () => {
            var b = a.j;
            b.g !== null && (b.i += b.j() - b.g);
            b.g = null
        });
        a.G.start()
    }

    function YN(a) {
        var b = a.win.scrollY;
        var c = P(a.win);
        b = {
            ae: Math.floor(b / 100),
            dd: Math.floor((b + c) / 100),
            oh: a.win.performance.now()
        };
        if (b.ae < 0 || b.dd < 0 || b.ae > 1E3 || b.dd > 1E3) a.C = !0, a.i = null;
        else {
            if (a.i) {
                c = a.i;
                var d = new QC(c.ae, c.dd),
                    e = new QC(b.ae, b.dd);
                var f = Math.max(d.start, e.start);
                d = Math.min(d.end, e.end);
                if (f = f <= d ? new QC(f, d) : null)
                    for (c = b.oh - c.oh, d = f.start; d <= f.end; d++) a.B[d] = (a.B[d] ? ? 0) + c
            }
            a.i = a.A.P ? b : null
        }
    }
    var SN = class {
        constructor(a) {
            this.win = a;
            this.B = [];
            a = this.win;
            var b = new LN(a);
            b.J();
            b = Fo(b.j);
            a = new NN(a);
            a.J();
            this.A = this.g = Eo(b, Fo(a.j));
            this.j = new QN(this.win);
            this.G = new QN(this.win);
            this.H = new JN((new JN(new DN)).g, 0);
            this.F = this.l = this.C = !1;
            this.i = null
        }
        J() {
            TN(this);
            UN(this);
            WN(this);
            XN(this);
            this.A.listen(() => void YN(this));
            q.setInterval(() => void this.handleEvent(), 5E3);
            this.handleEvent()
        }
        handleEvent() {
            this.A.P && YN(this)
        }
    };

    function VN(a) {
        return new qd(Vn(a), P(a))
    };

    function ZN(a, {
        Va: b
    }) {
        a = new $N(a, b);
        if (!a.Va && U(Fs)) {
            b = a.win;
            var c = aO(bO(a));
            (new AN(b, b.document.baseURI, c)).J()
        }
        cO(a)
    }

    function cO(a) {
        if (U(Gs)) {
            var b = RN(a.win);
            zn(new cF(a.win), dO(() => {
                var c = bO(a),
                    d = new Zl,
                    e = FN(b.H, b.B);
                if (e.g == null) throw Np(e, "PVDC: ").i;
                var f = new Yl;
                f = Ni(f, 2, 5E3);
                f = Ni(f, 1, 100);
                e = e.getValue();
                e = Ri(f, 3, e);
                f = VN(b.win);
                var g = new Xl;
                g = Ni(g, 1, f.width);
                f = Ni(g, 2, f.height);
                e = A(e, 4, f);
                f = new Xl;
                f = Ni(f, 1, Zn(b.win).scrollWidth);
                f = Ni(f, 2, Zn(b.win).scrollHeight);
                e = A(e, 5, f);
                e = L(e, 6, b.l);
                f = Math.round(ON(b.G) / 1E3);
                e = Ni(e, 8, f);
                f = Math.round(ON(b.j) / 1E3);
                e = Ni(e, 9, f);
                b.C && hi(e, 7, Hg, 1);
                b.F && hi(e, 7, Hg, 2);
                d = B(d, 2, $l, e);
                c(d)
            }))
        }
    }

    function bO(a) {
        if (!a.M) {
            const b = O(jF);
            a.M = c => {
                oF(b, c)
            }
        }
        return a.M
    }
    var $N = class {
        constructor(a, b) {
            this.win = a;
            this.Va = b;
            this.M = null
        }
    };

    function aO(a) {
        return b => {
            var c = new Zl;
            b = B(c, 1, $l, b);
            return void a(b)
        }
    }

    function zN() {
        return a => {
            W.ba(1243, a, void 0, eO("LCC"))
        }
    }

    function dO(a) {
        return () => void W.vb(1243, a, eO("PVC"))
    }

    function eO(a) {
        return b => {
            b.errSrc = a
        }
    };
    var gO = a => {
        const b = a.D;
        b.google_ad_output == null && (b.google_ad_output = "html");
        if (b.google_ad_client != null) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), c.substring(0, 3) != "ca-" && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        b.google_ad_slot != null && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!sj.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = fO(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = fO(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = fO(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = fO(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = fO(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = fO(a, b.google_color_line, c))
    };

    function fO(a, b, c) {
        a.i |= 2;
        return b[c % b.length]
    };
    const hO = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    var iO = (a, b = !1) => {
        try {
            return b ? (new qd(a.innerWidth, a.innerHeight)).round() : $d(a || window).round()
        } catch (c) {
            return new qd(-12245933, -12245933)
        }
    };

    function jO(a = q) {
        a = a.devicePixelRatio;
        return typeof a === "number" ? +a.toFixed(3) : null
    }

    function kO(a, b = q) {
        a = a.scrollingElement || (a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return new pd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function lO(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function mO(a, b) {
        var c = W,
            d;
        var e;
        d = (e = (e = Rj()) && (d = e.initialLayoutRect) && typeof d.top === "number" && typeof d.left === "number" && typeof d.width === "number" && typeof d.height === "number" ? new Nj(d.left, d.top, d.width, d.height) : null) ? new pd(e.left, e.top) : (d = Uj()) && Da(d.rootBounds) ? new pd(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new pd(0, 0),
                g = Zd(b);
            var h = g ? g.defaultView : window;
            if (Sd(h, "parent")) {
                do {
                    if (h == a) var k = gk(b);
                    else {
                        var l = fk(b);
                        k = new pd(l.left, l.top)
                    }
                    g = k;
                    f.x += g.x;
                    f.y += g.y
                } while (h && h != a && h != h.parent && (b = h.frameElement) && (h = h.parent))
            }
            return f
        } catch (m) {
            return c.ba(888, m), new pd(-12245933, -12245933)
        }
    };

    function nO(a, b) {
        return Bj(a.win) ? !!b.g() : !1
    }

    function oO(a, b, c) {
        c ? (a = a.win, b = c.g() ? Dj(b, a) : null) : b = null;
        return b
    }

    function pO(a, b, c, d) {
        if (d) {
            var e = Di(c, 2) - Date.now() / 1E3;
            e = {
                Cd: Math.max(e, 0),
                path: K(c, 3),
                domain: K(c, 4),
                Wd: !1
            };
            c = c.getValue();
            a = a.win;
            d.g() && Ej(b, c, e, a)
        }
    }

    function qO(a, b, c) {
        var d;
        (d = !c) || (d = a.win, d = !(c.g() && Dj(b, d)));
        if (!d)
            for (const f of rO(a.win.location.hostname)) {
                d = b;
                var e = a.win;
                c.g() && e.origin !== "null" && xj(new wj(e.document), d, "/", f)
            }
    }
    var sO = class {
        constructor(a) {
            this.win = a
        }
    };

    function rO(a) {
        if (a === "localhost") return ["localhost"];
        a = a.split(".");
        if (a.length < 2) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function tO(a, b, c) {
        var d = oO(a, "__gpi_opt_out", b);
        d && (d = Qi(Oi(jj(d), 2, 2147483647), 3, "/"), c = Qi(d, 4, c), pO(a, "__gpi_opt_out", c, b))
    }

    function uO(a, b, c, d) {
        const e = MM(a, "gpi-uoo", (f, g) => {
            if (g.source === c) {
                g = Qi(Oi(jj(f.userOptOut ? "1" : "0"), 2, 2147483647), 3, "/");
                g = Qi(g, 4, a.location.hostname);
                var h = new sO(a);
                pO(h, "__gpi_opt_out", g, b);
                if (f.userOptOut || f.clearAdsData) qO(h, "__gads", b), qO(h, "__gpi", b)
            }
        });
        d.push(e)
    };
    const vO = (a, b) => {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        wO = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        xO = {
            zd: a => a.listener,
            Cc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            Pb: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        yO = {
            zd: a => a.listener,
            Cc: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            Pb: (a, b) => {
                b = b.__gppReturn;
                const c = b.returnValue.data;
                a ? .(c, b.success)
            }
        };

    function zO(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            kf: b.__gppReturn.callId
        }
    }

    function AO(a, b) {
        if (!a) return !1;
        const c = qL(a.split("~")[0]),
            d = lL(a),
            e = Xh(c, 3, Lg, w());
        for (let ui = 0; ui < e.length; ++ui) {
            const Uv = e[ui];
            if (!b.includes(Uv)) continue;
            const ob = d[ui];
            switch (Uv) {
                case 7:
                    if (ob.length === 0) throw Error("Cannot decode empty USNat section string.");
                    const bg = ob.split(".");
                    if (bg.length > 2) throw Error(`Expected at most 2 segments but got ${bg.length} when decoding ${ob}.`);
                    var f = void 0,
                        g = void 0,
                        h = void 0,
                        k = void 0,
                        l = void 0,
                        m = void 0,
                        n = void 0,
                        p = void 0,
                        r = void 0,
                        y = void 0,
                        D = void 0,
                        E = void 0,
                        G = void 0,
                        H = void 0,
                        z = void 0,
                        I = void 0,
                        F = void 0,
                        ba = void 0,
                        bb = void 0,
                        xa = void 0,
                        fa = void 0,
                        la = void 0,
                        fb = void 0,
                        gb = void 0,
                        cg = void 0,
                        qa = void 0,
                        Nd = void 0,
                        Vv = void 0,
                        Wv = void 0,
                        Xv = void 0,
                        Yv = bg[0];
                    if (Yv.length === 0) throw Error("Cannot decode empty core segment string.");
                    let vi = pL(Yv, WL);
                    const zm = nL(vi.slice(0, 6));
                    vi = vi.slice(6);
                    if (zm !== 1) throw Error(`Unable to decode unsupported USNat Section specification version ${zm} - only version 1 is supported.`);
                    let Am = 0;
                    const oa = [];
                    for (let ia = 0; ia < VL.length; ia++) {
                        const Z =
                            VL[ia];
                        oa.push(nL(vi.slice(Am, Am + Z)));
                        Am += Z
                    }
                    var ZR = new RL;
                    Xv = Ni(ZR, 1, zm);
                    var $R = oa.shift();
                    Wv = M(Xv, 2, $R);
                    var aS = oa.shift();
                    Vv = M(Wv, 3, aS);
                    var bS = oa.shift();
                    Nd = M(Vv, 4, bS);
                    var cS = oa.shift();
                    qa = M(Nd, 5, cS);
                    var dS = oa.shift();
                    cg = M(qa, 6, dS);
                    var eS = oa.shift();
                    gb = M(cg, 7, eS);
                    var fS = oa.shift();
                    fb = M(gb, 8, fS);
                    var gS = oa.shift();
                    la = M(fb, 9, gS);
                    var hS = oa.shift();
                    fa = M(la, 10, hS);
                    var iS = new QL,
                        jS = oa.shift();
                    xa = M(iS, 1, jS);
                    var kS = oa.shift();
                    bb = M(xa, 2, kS);
                    var lS = oa.shift();
                    ba = M(bb, 3, lS);
                    var mS = oa.shift();
                    F = M(ba, 4, mS);
                    var nS =
                        oa.shift();
                    I = M(F, 5, nS);
                    var oS = oa.shift();
                    z = M(I, 6, oS);
                    var pS = oa.shift();
                    H = M(z, 7, pS);
                    var qS = oa.shift();
                    G = M(H, 8, qS);
                    var rS = oa.shift();
                    E = M(G, 9, rS);
                    var sS = oa.shift();
                    D = M(E, 10, sS);
                    var tS = oa.shift();
                    y = M(D, 11, tS);
                    var uS = oa.shift();
                    r = M(y, 12, uS);
                    p = A(fa, 11, r);
                    var vS = new PL,
                        wS = oa.shift();
                    n = M(vS, 1, wS);
                    var xS = oa.shift();
                    m = M(n, 2, xS);
                    l = A(p, 12, m);
                    var yS = oa.shift();
                    k = M(l, 13, yS);
                    var zS = oa.shift();
                    h = M(k, 14, zS);
                    var AS = oa.shift();
                    g = M(h, 15, AS);
                    var BS = oa.shift();
                    const Zv = f = M(g, 16, BS);
                    if (bg.length === 1) var $v = TL(Zv);
                    else {
                        var CS =
                            TL(Zv),
                            aw = void 0,
                            bw = void 0,
                            cw = void 0,
                            dw = bg[1];
                        if (dw.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ia = pL(dw, 3),
                            Z = nL(ia.slice(0, 2));
                        if (Z < 0 || Z > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Z}.`);
                        cw = Z + 1;
                        const Od = nL(ia.charAt(2));
                        var DS = new SL;
                        bw = M(DS, 2, cw);
                        aw = L(bw, 1, !!Od);
                        $v = A(CS, 2, aw)
                    }
                    const Bm = x($v, RL, 1);
                    if (Fi(Bm, 8) === 1 || Fi(Bm, 9) === 1 || Fi(Bm, 10) === 1) return !0;
                    break;
                case 8:
                    if (ob.length === 0) throw Error("Cannot decode empty USCA section string.");
                    const dg =
                        ob.split(".");
                    if (dg.length > 2) throw Error(`Expected at most 1 sub-section but got ${dg.length-1} when decoding ${ob}.`);
                    var ES = void 0,
                        ew = void 0,
                        fw = void 0,
                        gw = void 0,
                        hw = void 0,
                        iw = void 0,
                        jw = void 0,
                        kw = void 0,
                        lw = void 0,
                        mw = void 0,
                        nw = void 0,
                        ow = void 0,
                        pw = void 0,
                        qw = void 0,
                        rw = void 0,
                        sw = void 0,
                        tw = void 0,
                        uw = void 0,
                        vw = void 0,
                        ww = void 0,
                        xw = void 0,
                        yw = void 0,
                        zw = void 0,
                        Aw = dg[0];
                    if (Aw.length === 0) throw Error("Cannot decode empty core segment string.");
                    let wi = pL(Aw, zL);
                    const Cm = nL(wi.slice(0, 6));
                    wi = wi.slice(6);
                    if (Cm !==
                        1) throw Error(`Unable to decode unsupported USCA Section specification version ${Cm} - only version 1 is supported.`);
                    let Dm = 0;
                    const za = [];
                    for (let ia = 0; ia < yL.length; ia++) {
                        const Z = yL[ia];
                        za.push(nL(wi.slice(Dm, Dm + Z)));
                        Dm += Z
                    }
                    var FS = new uL;
                    zw = Ni(FS, 1, Cm);
                    var GS = za.shift();
                    yw = M(zw, 2, GS);
                    var HS = za.shift();
                    xw = M(yw, 3, HS);
                    var IS = za.shift();
                    ww = M(xw, 4, IS);
                    var JS = za.shift();
                    vw = M(ww, 5, JS);
                    var KS = za.shift();
                    uw = M(vw, 6, KS);
                    var LS = new tL,
                        MS = za.shift();
                    tw = M(LS, 1, MS);
                    var NS = za.shift();
                    sw = M(tw, 2, NS);
                    var OS = za.shift();
                    rw = M(sw, 3, OS);
                    var PS = za.shift();
                    qw = M(rw, 4, PS);
                    var QS = za.shift();
                    pw = M(qw, 5, QS);
                    var RS = za.shift();
                    ow = M(pw, 6, RS);
                    var SS = za.shift();
                    nw = M(ow, 7, SS);
                    var TS = za.shift();
                    mw = M(nw, 8, TS);
                    var US = za.shift();
                    lw = M(mw, 9, US);
                    kw = A(uw, 7, lw);
                    var VS = new sL,
                        WS = za.shift();
                    jw = M(VS, 1, WS);
                    var XS = za.shift();
                    iw = M(jw, 2, XS);
                    hw = A(kw, 8, iw);
                    var YS = za.shift();
                    gw = M(hw, 9, YS);
                    var ZS = za.shift();
                    fw = M(gw, 10, ZS);
                    var $S = za.shift();
                    ew = M(fw, 11, $S);
                    var aT = za.shift();
                    const Bw = ES = M(ew, 12, aT);
                    if (dg.length === 1) var Cw = wL(Bw);
                    else {
                        var bT = wL(Bw),
                            Dw =
                            void 0,
                            Ew = void 0,
                            Fw = void 0,
                            Gw = dg[1];
                        if (Gw.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ia = pL(Gw, 3),
                            Z = nL(ia.slice(0, 2));
                        if (Z < 0 || Z > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Z}.`);
                        Fw = Z + 1;
                        const Od = nL(ia.charAt(2));
                        var cT = new vL;
                        Ew = M(cT, 2, Fw);
                        Dw = L(Ew, 1, !!Od);
                        Cw = A(bT, 2, Dw)
                    }
                    const Hw = x(Cw, uL, 1);
                    if (Fi(Hw, 5) === 1 || Fi(Hw, 6) === 1) return !0;
                    break;
                case 9:
                    if (ob.length === 0) throw Error("Cannot decode empty USVA section string.");
                    let xi = pL(ob, $L);
                    const Em = nL(xi.slice(0,
                        6));
                    xi = xi.slice(6);
                    if (Em !== 1) throw Error(`Unable to decode unsupported USVA Section specification version ${Em} - only version 1 is supported.`);
                    let Fm = 0;
                    const Na = [];
                    for (let ia = 0; ia < ZL.length; ia++) {
                        const Z = ZL[ia];
                        Na.push(nL(xi.slice(Fm, Fm + Z)));
                        Fm += Z
                    }
                    var dT = Em,
                        eT = new YL,
                        fT = Ni(eT, 1, dT),
                        gT = Na.shift(),
                        hT = M(fT, 2, gT),
                        iT = Na.shift(),
                        jT = M(hT, 3, iT),
                        kT = Na.shift(),
                        lT = M(jT, 4, kT),
                        mT = Na.shift(),
                        nT = M(lT, 5, mT),
                        oT = Na.shift();
                    var pT = M(nT, 6, oT);
                    var qT = new XL,
                        rT = Na.shift(),
                        sT = M(qT, 1, rT),
                        tT = Na.shift(),
                        uT = M(sT, 2, tT),
                        vT =
                        Na.shift(),
                        wT = M(uT, 3, vT),
                        xT = Na.shift(),
                        yT = M(wT, 4, xT),
                        zT = Na.shift(),
                        AT = M(yT, 5, zT),
                        BT = Na.shift(),
                        CT = M(AT, 6, BT),
                        DT = Na.shift(),
                        ET = M(CT, 7, DT),
                        FT = Na.shift();
                    var GT = M(ET, 8, FT);
                    var HT = A(pT, 7, GT),
                        IT = Na.shift(),
                        JT = M(HT, 8, IT),
                        KT = Na.shift(),
                        LT = M(JT, 9, KT),
                        MT = Na.shift(),
                        NT = M(LT, 10, MT),
                        OT = Na.shift(),
                        Iw = M(NT, 11, OT);
                    if (Fi(Iw, 5) === 1 || Fi(Iw, 6) === 1) return !0;
                    break;
                case 10:
                    if (ob.length === 0) throw Error("Cannot decode empty USCO section string.");
                    const eg = ob.split(".");
                    if (eg.length > 2) throw Error(`Expected at most 2 segments but got ${eg.length} when decoding ${ob}.`);
                    var PT = void 0,
                        Jw = void 0,
                        Kw = void 0,
                        Lw = void 0,
                        Mw = void 0,
                        Nw = void 0,
                        Ow = void 0,
                        Pw = void 0,
                        Qw = void 0,
                        Rw = void 0,
                        Sw = void 0,
                        Tw = void 0,
                        Uw = void 0,
                        Vw = void 0,
                        Ww = void 0,
                        Xw = void 0,
                        Yw = void 0,
                        Zw = void 0,
                        $w = eg[0];
                    if ($w.length === 0) throw Error("Cannot decode empty core segment string.");
                    let yi = pL($w, GL);
                    const Gm = nL(yi.slice(0, 6));
                    yi = yi.slice(6);
                    if (Gm !== 1) throw Error(`Unable to decode unsupported USCO Section specification version ${Gm} - only version 1 is supported.`);
                    let Hm = 0;
                    const Za = [];
                    for (let ia = 0; ia < FL.length; ia++) {
                        const Z =
                            FL[ia];
                        Za.push(nL(yi.slice(Hm, Hm + Z)));
                        Hm += Z
                    }
                    var QT = new BL;
                    Zw = Ni(QT, 1, Gm);
                    var RT = Za.shift();
                    Yw = M(Zw, 2, RT);
                    var ST = Za.shift();
                    Xw = M(Yw, 3, ST);
                    var TT = Za.shift();
                    Ww = M(Xw, 4, TT);
                    var UT = Za.shift();
                    Vw = M(Ww, 5, UT);
                    var VT = Za.shift();
                    Uw = M(Vw, 6, VT);
                    var WT = new AL,
                        XT = Za.shift();
                    Tw = M(WT, 1, XT);
                    var YT = Za.shift();
                    Sw = M(Tw, 2, YT);
                    var ZT = Za.shift();
                    Rw = M(Sw, 3, ZT);
                    var $T = Za.shift();
                    Qw = M(Rw, 4, $T);
                    var aU = Za.shift();
                    Pw = M(Qw, 5, aU);
                    var bU = Za.shift();
                    Ow = M(Pw, 6, bU);
                    var cU = Za.shift();
                    Nw = M(Ow, 7, cU);
                    Mw = A(Uw, 7, Nw);
                    var dU = Za.shift();
                    Lw =
                        M(Mw, 8, dU);
                    var eU = Za.shift();
                    Kw = M(Lw, 9, eU);
                    var fU = Za.shift();
                    Jw = M(Kw, 10, fU);
                    var gU = Za.shift();
                    const ax = PT = M(Jw, 11, gU);
                    if (eg.length === 1) var bx = DL(ax);
                    else {
                        var hU = DL(ax),
                            cx = void 0,
                            dx = void 0,
                            ex = void 0,
                            fx = eg[1];
                        if (fx.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ia = pL(fx, 3),
                            Z = nL(ia.slice(0, 2));
                        if (Z < 0 || Z > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Z}.`);
                        ex = Z + 1;
                        const Od = nL(ia.charAt(2));
                        var iU = new CL;
                        dx = M(iU, 2, ex);
                        cx = L(dx, 1, !!Od);
                        bx = A(hU, 2, cx)
                    }
                    const gx =
                        x(bx, BL, 1);
                    if (Fi(gx, 5) === 1 || Fi(gx, 6) === 1) return !0;
                    break;
                case 12:
                    if (ob.length === 0) throw Error("Cannot decode empty usct section string.");
                    const fg = ob.split(".");
                    if (fg.length > 2) throw Error(`Expected at most 2 segments but got ${fg.length} when decoding ${ob}.`);
                    var jU = void 0,
                        hx = void 0,
                        ix = void 0,
                        jx = void 0,
                        kx = void 0,
                        lx = void 0,
                        mx = void 0,
                        nx = void 0,
                        ox = void 0,
                        px = void 0,
                        qx = void 0,
                        rx = void 0,
                        sx = void 0,
                        tx = void 0,
                        ux = void 0,
                        vx = void 0,
                        wx = void 0,
                        xx = void 0,
                        yx = void 0,
                        zx = void 0,
                        Ax = void 0,
                        Bx = void 0,
                        Cx = fg[0];
                    if (Cx.length ===
                        0) throw Error("Cannot decode empty core segment string.");
                    let zi = pL(Cx, OL);
                    const Im = nL(zi.slice(0, 6));
                    zi = zi.slice(6);
                    if (Im !== 1) throw Error(`Unable to decode unsupported USCT Section specification version ${Im} - only version 1 is supported.`);
                    let Jm = 0;
                    const Ca = [];
                    for (let ia = 0; ia < NL.length; ia++) {
                        const Z = NL[ia];
                        Ca.push(nL(zi.slice(Jm, Jm + Z)));
                        Jm += Z
                    }
                    var kU = new JL;
                    Bx = Ni(kU, 1, Im);
                    var lU = Ca.shift();
                    Ax = M(Bx, 2, lU);
                    var mU = Ca.shift();
                    zx = M(Ax, 3, mU);
                    var nU = Ca.shift();
                    yx = M(zx, 4, nU);
                    var oU = Ca.shift();
                    xx = M(yx, 5,
                        oU);
                    var pU = Ca.shift();
                    wx = M(xx, 6, pU);
                    var qU = new IL,
                        rU = Ca.shift();
                    vx = M(qU, 1, rU);
                    var sU = Ca.shift();
                    ux = M(vx, 2, sU);
                    var tU = Ca.shift();
                    tx = M(ux, 3, tU);
                    var uU = Ca.shift();
                    sx = M(tx, 4, uU);
                    var vU = Ca.shift();
                    rx = M(sx, 5, vU);
                    var wU = Ca.shift();
                    qx = M(rx, 6, wU);
                    var xU = Ca.shift();
                    px = M(qx, 7, xU);
                    var yU = Ca.shift();
                    ox = M(px, 8, yU);
                    nx = A(wx, 7, ox);
                    var zU = new HL,
                        AU = Ca.shift();
                    mx = M(zU, 1, AU);
                    var BU = Ca.shift();
                    lx = M(mx, 2, BU);
                    var CU = Ca.shift();
                    kx = M(lx, 3, CU);
                    jx = A(nx, 8, kx);
                    var DU = Ca.shift();
                    ix = M(jx, 9, DU);
                    var EU = Ca.shift();
                    hx = M(ix, 10, EU);
                    var FU = Ca.shift();
                    const Dx = jU = M(hx, 11, FU);
                    if (fg.length === 1) var Ex = LL(Dx);
                    else {
                        var GU = LL(Dx),
                            Fx = void 0,
                            Gx = void 0,
                            Hx = void 0,
                            Ix = fg[1];
                        if (Ix.length === 0) throw Error("Cannot decode empty GPC segment string.");
                        const ia = pL(Ix, 3),
                            Z = nL(ia.slice(0, 2));
                        if (Z < 0 || Z > 1) throw Error(`Attempting to decode unknown GPC segment subsection type ${Z}.`);
                        Hx = Z + 1;
                        const Od = nL(ia.charAt(2));
                        var HU = new KL;
                        Gx = M(HU, 2, Hx);
                        Fx = L(Gx, 1, !!Od);
                        Ex = A(GU, 2, Fx)
                    }
                    const Jx = x(Ex, JL, 1);
                    if (Fi(Jx, 5) === 1 || Fi(Jx, 6) === 1) return !0
            }
        }
        return !1
    }
    var EO = class extends Q {
        constructor(a) {
            ({
                timeoutMs: c,
                cmpInteractionEventReporter: b
            } = {});
            var b, c;
            super();
            this.caller = new HF(a, "__gppLocator", d => typeof d.__gpp === "function", zO);
            this.caller.C.set("addEventListener", vO);
            this.caller.A.set("addEventListener", xO);
            this.caller.C.set("removeEventListener", wO);
            this.caller.A.set("removeEventListener", yO);
            this.timeoutMs = c ? ? 500;
            this.cmpInteractionEventReporter = b
        }
        i() {
            this.caller.dispose();
            super.i()
        }
        addEventListener(a) {
            const b = Bb(() => {
                    a(BO, !0)
                }),
                c = this.timeoutMs ===
                -1 ? void 0 : setTimeout(() => {
                    b()
                }, this.timeoutMs);
            GF(this.caller, "addEventListener", {
                listener: (d, e) => {
                    clearTimeout(c);
                    try {
                        if (d.pingData ? .gppVersion === void 0 || d.pingData.gppVersion === "1" || d.pingData.gppVersion === "1.0") {
                            this.removeEventListener(d.listenerId);
                            var f = {
                                eventName: "signalStatus",
                                data: "ready",
                                pingData: {
                                    internalErrorState: 1,
                                    gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                    applicableSections: [-1]
                                }
                            }
                        } else Array.isArray(d.pingData.applicableSections) ? f = d : (this.removeEventListener(d.listenerId), f = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 2,
                                gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                                applicableSections: [-1]
                            }
                        });
                        a(f, e);
                        this.cmpInteractionEventReporter ? .g()
                    } catch {
                        if (d ? .listenerId) try {
                            this.removeEventListener(d.listenerId)
                        } catch {
                            a(CO, !0);
                            return
                        }
                        a(DO, !0)
                    }
                }
            })
        }
        removeEventListener(a) {
            GF(this.caller, "removeEventListener", {
                listener: () => {},
                listenerId: a
            })
        }
    };
    const DO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        BO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        CO = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };

    function FO(a) {
        return !a || a.length === 1 && a[0] === -1
    };

    function GO(a, b) {
        if (b.internalErrorState) Qi(a, 11, b.gppString);
        else if (FO(b.applicableSections)) {
            var c = ei(a, 10, b.applicableSections, Og);
            Li(c, 12, !1)
        } else {
            c = !1;
            try {
                c = AO(b.gppString, b.applicableSections)
            } catch (d) {
                W.ba(1182, d, void 0, void 0)
            }
            a = ei(a, 10, b.applicableSections, Og);
            b = Qi(a, 11, b.gppString);
            Li(b, 12, c)
        }
    }

    function HO(a) {
        const b = new EO(a.pubWin);
        if (!EF(b.caller)) return Promise.resolve(null);
        const c = IE(),
            d = NE(c, 35);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = NE(c, 36, []);
            g.push(f);
            OE(c, 36, g)
        });
        d || d === null || (OE(c, 35, null), b.addEventListener(f => {
            if (f.pingData.signalStatus === "ready" || FO(f.pingData.applicableSections)) {
                f = f.pingData;
                OE(c, 35, f);
                GO(a.g, f);
                for (const g of NE(c, 36, [])) g.resolve(f);
                OE(c, 36, [])
            }
        }));
        return e
    };

    function IO(a) {
        return a.length ? a.join("~") : void 0
    };

    function JO(a, b) {
        return wC({
            K: a,
            lj: 3E3,
            qj: a.innerWidth > Tn ? 650 : 0,
            Z: fy,
            ai: b
        })
    };

    function KO(a) {
        let b = 0;
        try {
            b |= Un(a)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function LO(a) {
        let b = 0;
        try {
            b |= Un(a), b |= Wn(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function MO() {
        const a = {};
        eu(Lr) && (a.bust = eu(Lr));
        var b = IE();
        b = NE(b, 38, "");
        b !== "" && (a.sbust = b);
        return a
    };

    function NO(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function OO(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function PO(a) {
        return a.hidden != null ? a.hidden : a.mozHidden != null ? a.mozHidden : a.webkitHidden != null ? a.webkitHidden : null
    }

    function QO(a, b) {
        if (NO(b) == 3) var c = !1;
        else a(), c = !0;
        if (!c) {
            const d = () => {
                Ib(b, "prerenderingchange", d);
                a()
            };
            Hb(b, "prerenderingchange", d)
        }
    };
    var RO = a => {
        let b = 0;
        try {
            b |= Un(a);
            var c;
            if (!(c = !a.navigator)) {
                var d = a.navigator;
                c = "brave" in d && "isBrave" in d.brave || !1
            }
            b |= c || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            b |= Wn(a, 2500, !0)
        } catch (e) {
            b |= 32
        }
        return b
    };
    const SO = "body div footer header html main section".split(" ");

    function TO(a, b, c = null, d = !1, e = !1, f = !1) {
        let g = Un(a);
        xC(a.navigator ? .userAgent) && (g |= 1048576);
        const h = a.innerWidth;
        h < 1200 && (g |= 65536);
        const k = a.innerHeight;
        k < 650 && (g |= 2097152);
        c && g === 0 && (c = c === 3 ? "left" : "right", (b = UO({
            K: a,
            fj: b,
            Rj: 1,
            position: c,
            T: h,
            W: k,
            Gb: new Set,
            minWidth: 120,
            minHeight: 500,
            Re: d,
            jf: e,
            hf: f
        })) ? eA(a).sideRailPlasParam.set(c, `${b.width}x${b.height}_${String(c).charAt(0)}`) : g |= 16);
        return g
    }

    function VO(a) {
        a = eA(a).sideRailPlasParam;
        return [...Array.from(a.values())].join("|")
    }

    function WO(a, b) {
        return ie(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c)) !== null
    }

    function XO(a, b) {
        return ie(a, c => c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed")
    }

    function YO(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            d.position === "fixed" && d.display !== "none" && d.visibility !== "hidden" && b.push(c)
        }
        return b
    }

    function ZO(a, b) {
        const {
            top: c,
            left: d,
            bottom: e,
            right: f
        } = b.getBoundingClientRect();
        return c >= 0 && d >= 0 && e <= a.innerHeight && f <= a.innerWidth
    }

    function $O(a) {
        return Math.round(Math.round(a / 10) * 10)
    }

    function aP(a) {
        return `${a.position}-${$O(a.T)}x${$O(a.W)}-${$O(a.scrollY+a.Sb)}Y`
    }

    function bP(a) {
        return `f-${aP({position:a.position,Sb:a.Sb,scrollY:0,T:a.T,W:a.W})}`
    }

    function cP(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return a !== Infinity ? a : 0
    }

    function dP(a, b, c) {
        const d = eA(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.W),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.T);
                for (var k = c.T * .3; f <= g; f += 10) {
                    if (e > 0 && h < k) {
                        var l = bP({
                            position: "left",
                            Sb: f,
                            T: c.T,
                            W: c.W
                        });
                        b.set(l, cP(b.get(l), h))
                    }
                    if (h < c.T && e > c.T - k) {
                        l = bP({
                            position: "right",
                            Sb: f,
                            T: c.T,
                            W: c.W
                        });
                        const m = c.T - e;
                        b.set(l, cP(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function eP(a, b) {
        const c = b.K,
            d = b.Re,
            e = b.hf;
        var f = `f-${$O(b.T)}x${$O(b.W)}`;
        a.has(f) || (a.set(f, 0), f = YO(c), d || e ? (fP(a, b, f.filter(g => ZO(c, g))), gP(c, f.filter(g => !ZO(c, g)).concat(e ? Array.from(c.document.querySelectorAll("[google-side-rail-overlap=false]")) : []))) : fP(a, b, f))
    }

    function fP(a, b, c) {
        var d = b.Gb;
        const e = b.K;
        eA(e).sideRailProcessedFixedElements.clear();
        d = new Set([...Array.from(e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...d]);
        for (const f of c) WO(f, d) || dP(f, a, b)
    }

    function hP(a) {
        if (a.T < 1200 || a.W < 650) return null;
        var b = eA(a.K).sideRailAvailableSpace;
        a.fj || eP(b, {
            K: a.K,
            T: a.T,
            W: a.W,
            Gb: a.Gb,
            Re: a.Re,
            hf: a.hf
        });
        const c = [];
        var d = a.W * .9,
            e = co(a.K),
            f = (a.W - d) / 2,
            g = f,
            h = d / 7;
        for (var k = 0; k < 8; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var p = a.position,
                    r = b,
                    y = {
                        K: a.K,
                        T: a.T,
                        W: a.W,
                        Gb: a.Gb,
                        jf: a.jf
                    };
                const H = bP({
                        position: p,
                        Sb: n,
                        T: y.T,
                        W: y.W
                    }),
                    z = aP({
                        position: p,
                        Sb: n,
                        scrollY: e,
                        T: y.T,
                        W: y.W
                    });
                if (r.has(z)) {
                    n = cP(r.get(H), r.get(z));
                    break a
                }
                const I = p === "left" ? 20 : y.T - 20;
                let F = I;p = y.T * .3 / 5 * (p === "left" ? 1 : -1);
                for (let ba = 0; ba < 6; ba++) {
                    var D = qC(y.K.document, {
                            x: Math.round(F),
                            y: Math.round(n)
                        }),
                        E = WO(D, y.Gb),
                        G = XO(D, y.K);
                    if (!E && G !== null) {
                        dP(G, r, y);
                        r.delete(z);
                        break
                    }
                    E || (E = y, D.getAttribute("google-side-rail-overlap") === "true" ? E = !0 : D.getAttribute("google-side-rail-overlap") === "false" || E.jf && !SO.includes(D.tagName.toLowerCase()) ? E = !1 : (G = D.offsetHeight >= E.W * .25, E = D.offsetWidth >= E.T * .9 && G));
                    if (E) r.set(z, Math.round(Math.abs(F - I) + 20));
                    else if (F !== I) F -= p, p /= 2;
                    else {
                        r.set(z, 0);
                        break
                    }
                    F += p
                }
                n = cP(r.get(H), r.get(z))
            }
            m.call(l,
                n);
            g += h
        }
        b = a.Rj;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = m.length === 0 ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; n >= 0; n--) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = m.length === 0 ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: e,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) *
                        d),
                    offsetY: f + h[k] * d
                }, r = n.width >= g && n.height >= a, b === 0 && r) {
                m = n;
                break
            } else b === 1 && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    }

    function gP(a, b) {
        const c = eA(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(() => {
                setTimeout(() => {
                    iP(a);
                    for (const e of c.sideRailMutationCallbacks) e()
                }, 500)
            });
            for (const e of b) d.observe(e, {
                attributes: !0
            });
            c.g = d
        }
    }

    function iP(a) {
        ({
            sideRailAvailableSpace: a
        } = eA(a));
        const b = Array.from(a.keys()).filter(c => c.startsWith("f-"));
        for (const c of b) a.delete(c)
    }

    function UO(a) {
        if (a.Ia) return a.Ia.vb(1228, () => hP(a)) || null;
        try {
            return hP(a)
        } catch {}
        return null
    };
    const jP = {
        [27]: 512,
        [26]: 128
    };
    var kP = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return JO(a, c) === 0;
                case 3:
                case 4:
                    return TO(a, !1, c, !0, U(As), U(Nr)) === 0;
                case 8:
                    return RO(a) == 0;
                case 9:
                    return b = !(b.google_adtest === "on" || cL(a.location, "google_scr_debug")), !mH(a, b, d);
                case 30:
                    return cJ(a) == 0;
                case 26:
                    return LO(a) === 0;
                case 27:
                    return KO(a) === 0;
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        lP = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return JO(a, c);
                case 3:
                case 4:
                    return TO(a, U(Bs), c, !1, U(As));
                case 8:
                    return RO(a);
                case 9:
                    return mH(a, !(b.google_adtest === "on" || cL(a.location, "google_scr_debug")), d);
                case 16:
                    return pu(b, a) ? 0 : 8388608;
                case 30:
                    return cJ(a);
                case 26:
                    return LO(a);
                case 27:
                    return KO(a);
                default:
                    return 32
            }
        },
        mP = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!Kb(d)) return !1;
            a = te(a);
            if (!a || !kP(a, b, d, c)) return !1;
            b = eA(a);
            if ($n(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        oP = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && nP(a) && b !== 16 && b !== 10 && b !== 11 && b !== 40 && b !== 41
        },
        pP = a => {
            if (!a.hash) return null;
            let b = null;
            ye($K, c => {
                !b && cL(a, c) && (b = aL[c])
            });
            return b
        },
        rP = (a, b) => {
            const c = eA(a).tagSpecificState[1] || null;
            c != null && c.debugCard == null && ye(bL, d => {
                !c.debugCardRequested && typeof d === "number" && fL(d, a.location) && (c.debugCardRequested = !0, qP(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        tP = (a, b, c) => {
            if (!b) return null;
            const d = eA(b);
            let e = 0;
            ye(Lb, f => {
                const g = jP[f];
                g && sP(a, b, f, c) === 0 && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        uP = (a, b, c) => {
            const d = [];
            ye(Lb, e => {
                const f = sP(b, a, e, c);
                f !== 0 && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        vP = a => {
            const b = [],
                c = {};
            ye(a, (d, e) => {
                if ((e = Rn[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (d === !1) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        wP = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return typeof a === "boolean" ? a ? "1" : "0" : ""
        },
        sP = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = eA(b),
                g = $n(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            ye(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) ===
                    String(l) && (h = !0)
            });
            return h && pP(b.location) !== c && (e |= 128, c == 2 || c == 1 || c == 3 || c == 4 || c == 8) ? e : e | lP(b, a, c, d)
        },
        xP = (a, b) => {
            if (a) {
                var c = eA(a),
                    d = {};
                ye(b, (e, f) => {
                    (f = Rn[f]) && (e === !1 || /^false$/i.test(e)) && (d[f] = !0)
                });
                ye(Lb, e => {
                    d[Sn[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        yP = (a, b, c) => {
            b = W.Ca(b, c);
            return YK(1, window, hd(a, new Map(Object.entries(MO())))).then(b)
        },
        qP = (a, b, c) => {
            c = W.Ca(212, c);
            YK(3, a, b).then(c)
        },
        zP = (a, b, c) => {
            a.dataset.adsbygoogleStatus = "reserved";
            a.className += " adsbygoogle-noablate";
            c.adsbygoogle ||
                (c.adsbygoogle = [], ue(c.document, gd `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
            c.adsbygoogle.push({
                element: a,
                params: b
            })
        },
        AP = a => {
            a = a.google_reactive_ad_format;
            return Kb(a) ? "" + a : null
        },
        nP = a => !!AP(a) || a.google_pgb_reactive != null,
        BP = a => {
            a = AP(a);
            return a == 26 || a == 27 || a == 30 || a == 16 || a == 40 || a == 41
        };

    function CP(a) {
        return typeof a.google_reactive_sra_index === "number"
    }

    function DP(a, b, c) {
        const d = b.K || b.pubWin,
            e = b.D;
        var f = uP(d, e, c);
        e.google_reactive_plat = f;
        (f = vP(a)) && (e.google_reactive_plaf = f);
        (f = wP(a)) && (e.google_reactive_fba = f);
        (f = VO(d)) && (e.google_plas = f);
        EP(a, e);
        f = pP(b.pubWin.location);
        FP(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        e.easpi = U(lt);
        e.asro = U(gt);
        e.aihb = U(Hs);
        e.ailel = IO(fu(Zs));
        e.aiael = IO(fu(Is));
        e.aifxl = IO(fu(Us));
        e.aiixl = IO(fu(Ws));
        U(Xs) && (e.slmct = V($s), e.samct = V(Ls));
        U(Qs) || (e.aiict = !0, e.aicel = IO(fu(Os)));
        U(et) && (e.aipaq = !0);
        U(jt) && (e.aigda = !0);
        V(Js) && (e.aiapm = V(Js));
        V(Ks) && (e.aiapmi = V(Ks));
        U(ft) && (e.aiombap = !0);
        e.fsapi = !0;
        f !== 8 && (c && iH(c) ? (f = lH(c, 86400, "__lsv__"), f ? .length && (f = Math.floor((Date.now() - Math.max(...f)) / 6E4), f >= 0 && (e.vmsli = f))) : e.vmsli = -1);
        f = lH(c, 600, "__lsa__");
        f ? .length && Math.floor((Date.now() - Math.max(...f)) / 6E4) <= V(Ar) && (e.dap = 3);
        Vj() || iO(b.pubWin.top);
        f = NM(b.pubWin, "rsrai", iy(429, (g, h) => GP(b, d, e.google_ad_client, a, g, h, c)), iy(430, (g, h) => go(b.pubWin, "431", fy, h)));
        b.j.push(f);
        eA(d).wasReactiveTagRequestSent = !0;
        HP(b, a, c)
    }

    function HP(a, b, c) {
        const d = a.D,
            e = Da(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = NM(a.pubWin, "apcnf", iy(353, (f, g) => {
            const h = hd(a.wa.jb, new Map(Object.entries(MO())));
            var k = a.pubWin,
                l = d.google_ad_client;
            return Ve(g.origin) ? eN(k, l, e, f.config, c, h, null) : !1
        }), iy(353, (f, g) => go(a.pubWin, "353", fy, g)));
        a.j.push(b)
    }

    function GP(a, b, c, d, e, f, g) {
        if (!Ve(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!YE(b, 1)) return !0;
        f && Jj(6, [f]);
        e = e.amaConfig;
        const h = [],
            k = [],
            l = eA(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            const p = f[n],
                r = p.adFormat;
            l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[r] = !0);
            if (!p.noCreative) {
                p.google_reactive_sra_index = n;
                if (r === 9 && e) {
                    p.pubVars = Object.assign(p.pubVars || {}, IP(d, p));
                    const y = new nH;
                    if (gH(y, p) && y.C(p)) {
                        m = y;
                        continue
                    }
                }
                h.push(p);
                k.push(r)
            }
        }
        h.length && yP(a.wa.Zg,
            522, n => {
                JP(h, b, n, d, g)
            });
        e && eN(b, c, d, e, g, hd(a.wa.jb, new Map(Object.entries(MO()))), m);
        return !0
    }

    function IP(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        Da(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        c === 30 && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function JP(a, b, c, d, e) {
        const f = [];
        for (let g = 0; g < a.length; g++) {
            const h = a[g],
                k = h.adFormat,
                l = h.adKey,
                m = c.configProcessorForAdFormat(k);
            k && m && l && (h.pubVars = IP(d, h), delete h.google_reactive_sra_index, f.push(k), hy(466, () => m.verifyAndProcessConfig(b, h, e)))
        }
    }

    function EP(a, b) {
        const c = [];
        let d = !1;
        ye(Rn, (e, f) => {
            let g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && c[e] !== "+" || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function FP(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if (a.google_adtest === "on" || d ? .google_adtest === "on" || b) c.google_adtest = "on"
        }
    };
    Rd("script");
    var KP = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function LP(a, b) {
        if (!pu(b, a)) return () => {};
        a = MP(b, a);
        if (!a) return () => {};
        const c = UE();
        b = Nb(b);
        const d = {
            wb: a,
            D: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => cb(c, d)
    }

    function MP(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !uu.test(a.className);) a = a.parentElement;
        return a
    }

    function NP(a, b) {
        for (let f = 0; f < a.childNodes.length; f++) {
            const g = {},
                h = a.childNodes[f];
            var c = h.style,
                d = ["width", "height"];
            for (let k = 0; k < d.length; k++) {
                const l = "google_ad_" + d[k];
                if (!g.hasOwnProperty(l)) {
                    var e = Ge(c[d[k]]);
                    e = e === null ? null : Math.round(e);
                    e != null && (g[l] = e)
                }
            }
            if (g.google_ad_width == b.google_ad_width && g.google_ad_height == b.google_ad_height) return h
        }
        return null
    }

    function OP(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function PP(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.g != c) {
            a.g = c;
            a = UE();
            for (const d of a)
                if (d.wb.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = d.wb.offsetWidth, hy(467, () => {
                    var e = d.wb,
                        f = d.D;
                    const g = NP(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? `${f.gfwroh}px` : "", e.style.width = f.gfwrow ? `${f.gfwrow}px` : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = NP(e, f);
                    !h && g && e.childNodes.length == 1 ? (OP(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", zP(e, f, b)) : h && g && h != g && (OP(g, !1), OP(h, !0))
                })
        }
    }
    var QP = class extends Q {
        constructor() {
            super(...arguments);
            this.g = null
        }
        J(a) {
            const b = IE();
            if (!NE(b, 27, !1)) {
                OE(b, 27, !0);
                this.g = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => {
                    PP(this, a)
                };
                Hb(a, "resize", c);
                yo(this, () => {
                    Ib(a, "resize", c)
                })
            }
        }
    };
    var RP = class {
        constructor(a, b) {
            this.K = a;
            this.wb = b;
            this.g = null;
            this.j = 0
        }
        i() {
            ++this.j >= 10 && q.clearInterval(this.g);
            var a = su(this.K, this.wb);
            tu(this.K, this.wb, a);
            a = ou(this.wb, this.K);
            a != null && a.x === 0 || q.clearInterval(this.g)
        }
    };

    function SP(a) {
        var b = window;
        return a.google_adtest === "on" || a.google_adbreak_test === "on" || b.location.host.endsWith("h5games.usercontent.goog") || b.location.host === "gamesnacks.com" ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && c > 0) || [] : []
    };

    function TP(a, b) {
        b && !a.g && (b = b.split(":"), a.g = b.find(c => c.indexOf("ID=") === 0) || null, a.j = b.find(c => c.indexOf("T=") === 0) ? .substring(2) || null)
    }
    var UP = class {
            constructor() {
                this.l = new Date(Date.now());
                this.j = this.g = null;
                this.i = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                this.i[3] = {
                    [71]: (...a) => {
                        var b = this.g;
                        var c = this.l,
                            d = Number(a[0]);
                        a = Number(a[1]);
                        b = b !== null ? Ae(`${"w5uHecUBa2S"}:${d}:${b}`) % a === Math.floor(c.valueOf() / 864E5) % a : void 0;
                        return b
                    }
                };
                this.i[4] = {
                    [15]: () => {
                        var a = Number(this.j || void 0);
                        isNaN(a) ? a = void 0 : (a = new Date(a * 1E3), a = a.getFullYear() * 1E4 + (a.getMonth() + 1) * 100 + a.getDate());
                        return a
                    }
                }
            }
        },
        VP;
    var WP = class extends N {
        g() {
            return J(this, 10)
        }
    };
    var XP = class extends N {
        g() {
            return Xh(this, 1, dh, w())
        }
    };
    var YP = class extends N {},
        ZP = [13, 14];
    let $P = void 0;

    function aQ() {
        og($P, rg);
        return $P
    }

    function bQ(a) {
        og($P, ug);
        $P = a
    };

    function cQ(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Jb(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function dQ(a = q) {
        return a.ggeac || (a.ggeac = {})
    };

    function eQ(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function fQ(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function gQ(a = navigator) {
        try {
            return !!a.protectedAudience ? .queryFeatureSupport ? .("deprecatedRenderURLReplacements")
        } catch (b) {
            return !1
        }
    };

    function hQ(a = xe()) {
        return b => Ae(`${b} + ${a}`) % 1E3
    };

    function iQ(a, b) {
        a.g = Cn(14, b, () => {})
    }
    class jQ {
        constructor() {
            this.g = () => {}
        }
    }

    function kQ(a) {
        O(jQ).g(a)
    };

    function lQ(a = dQ()) {
        Dn(O(En), a);
        mQ(a);
        iQ(O(jQ), a);
        O(du).i()
    }

    function mQ(a) {
        const b = O(du);
        b.j = (c, d) => Cn(5, a, () => !1)(c, d, 1);
        b.A = (c, d) => Cn(6, a, () => 0)(c, d, 1);
        b.B = (c, d) => Cn(7, a, () => "")(c, d, 1);
        b.g = (c, d) => Cn(8, a, () => [])(c, d, 1);
        b.l = (c, d) => Cn(17, a, () => [])(c, d, 1);
        b.i = () => {
            Cn(15, a, () => {})(1)
        }
    };

    function nQ(a, b, c) {
        var d = {
            [0]: hQ(Ze(b).toString())
        };
        if (c) {
            c = oO(new sO(b), "__gads", c) || "";
            VP || (VP = new UP);
            b = VP;
            TP(b, c);
            kQ(b.i);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c) ? .[1];
            d[1] = f => e ? hQ(e)(f) : void 0
        }
        d = Fn(a, d);
        Jn.pa(1085, lF(O(jF), a, d))
    }

    function oQ(a, b) {
        nQ(20, a, b);
        nQ(17, a, b)
    }

    function pQ(a) {
        const b = O(En).g();
        a = SP(a);
        return b.concat(a).join(",")
    }

    function qQ(a) {
        const b = xk();
        b && (a.debug_experiment_id = b)
    };
    var rQ = class {
        constructor(a) {
            this.i = 0;
            this.g = this.I = null;
            this.H = 0;
            this.j = [];
            this.qc = this.C = "";
            this.A = this.G = null;
            this.F = !1;
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.D = a.D;
            this.ma = a.ma;
            this.wa = a.wa;
            this.Wa = a.Wa;
            this.ea = a.ea
        }
    };

    function sQ(a, b, c) {
        c = NK(a, RF(b, {
            idpcApplies: c && !JM()
        }));
        c = Qi(c, 2, b.tcString);
        c = Qi(c, 4, b.addtlConsent || "");
        Rh(c, 7, Ig(b.internalErrorState));
        c = !UF(b, ["2", "7", "9", "10"], 3);
        Li(a, 8, c);
        c = !UF(b, ["3", "4"], 0);
        Li(a, 9, c);
        b.gdprApplies != null && Li(a, 3, b.gdprApplies)
    }

    function tQ(a) {
        const b = new $F(a.pubWin, {
            timeoutMs: -1,
            Sh: !0
        });
        if (!WF(b)) return Promise.resolve(null);
        const c = IE(),
            d = NE(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = NE(c, 25, []);
            g.push(f);
            OE(c, 25, g)
        });
        d || d === null || (OE(c, 24, null), b.addEventListener(f => {
            if (QF(f)) {
                OE(c, 24, f);
                sQ(a.g, f, J(a.ma, 6));
                for (const g of NE(c, 25, [])) g.resolve(f);
                OE(c, 25, [])
            } else OE(c, 24, null)
        }));
        return e
    };

    function uQ(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : a >= 0 ? a : "-M"
    };
    var wg = {
        Un: 0,
        Qn: 1,
        Rn: 9,
        Nn: 2,
        On: 3,
        Tn: 5,
        Sn: 7,
        Pn: 10
    };
    var vQ = class extends N {},
        wQ = Wi(vQ),
        xQ = [1, 3];
    const yQ = gd `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function zQ(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.g(h).then(({
                    data: k
                }) => k)
            }
            const e = ve("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = dc(yQ).toString();
            const f = (new URL(yQ.toString())).origin,
                g = dN({
                    destination: a,
                    Na: e,
                    origin: f,
                    we: "goog:gRpYw:doubleclick"
                });
            g.g("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                h === "goog:topics:frame:handshake:ack" &&
                    c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function AQ(a, b, c) {
        var d = W,
            e = U(Ot);
        const {
            Vc: f,
            Uc: g
        } = BQ(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e
        }).then(h => {
            let k = g;
            if (h instanceof Uint8Array) k || (k = !(f instanceof Uint8Array && mb(h, f)));
            else if (vg()(h)) k || (k = h !== f);
            else return d.ba(989, Error(JSON.stringify(h))), 7;
            if (k && c) try {
                var l = new vQ;
                var m = Oi(l, 2, yk());
                h instanceof Uint8Array ? ii(m, 1, xQ, Vf(h, !1, !1)) : ii(m, 3, xQ, Ig(h));
                c.setItem("goog:cached:topics",
                    Ti(m))
            } catch {}
            return h
        }), b.getTopicsPromise = a);
        return f && !g ? Promise.resolve(f) : b.getTopicsPromise
    }

    function BQ(a) {
        if (!a) return {
            Vc: null,
            Uc: !0
        };
        try {
            const l = a.getItem("goog:cached:topics");
            if (!l) return {
                Vc: null,
                Uc: !0
            };
            const m = wQ(l);
            let n;
            const p = li(m, xQ);
            switch (p) {
                case 0:
                    n = null;
                    break;
                case 1:
                    a = m;
                    var b = li(m, xQ) === 1 ? 1 : -1;
                    const y = a.U;
                    let D = y[v];
                    const E = Ph(y, D, b),
                        G = Vf(E, !0, !!(D & 34));
                    G != null && G !== E && Sh(y, D, b, G);
                    var c = G;
                    var d = c == null ? wf() : c;
                    b = Uint8Array;
                    vf(sf);
                    var e = d.g;
                    if (e == null || rf(e)) var f = e;
                    else {
                        if (typeof e === "string") { of .test(e) && (e = e.replace( of , qf));
                            let H;
                            H = atob(e);
                            const z = new Uint8Array(H.length);
                            for (e = 0; e < H.length; e++) z[e] = H.charCodeAt(e);
                            var g = z
                        } else g = null;
                        f = g
                    }
                    var h = f;
                    var k = h == null ? h : d.g = h;
                    n = new b(k || 0);
                    break;
                case 3:
                    n = Fi(m, li(m, xQ) === 3 ? 3 : -1);
                    break;
                default:
                    ud(p, void 0)
            }
            const r = Di(m, 2) + 6048E5 < yk();
            return {
                Vc: n,
                Uc: r
            }
        } catch {
            return {
                Vc: null,
                Uc: !0
            }
        }
    };

    function CQ(a) {
        return U(Gt) && a ? !!a.match(eu(Et)) : !1
    }

    function DQ(a, b) {
        if (!U(Mt) && b.g()) {
            b = fQ("shared-storage", a.document);
            const c = fQ("browsing-topics", a.document);
            if (b || c) try {
                return zQ(a)
            } catch (d) {
                W.ba(984, d, void 0, void 0)
            }
        }
        return null
    }
    async function EQ(a, b, c, d, e, f) {
        if (fQ("browsing-topics", b.document) && e && !U(Lt) && !CQ(f ? .label))
            if (FQ(c, d)) {
                a.A = 1;
                const g = yj(c, b);
                c = e.then(async h => {
                    await AQ(h, b, g).then(k => {
                        a.A = k
                    })
                });
                U(Nt) && (d = V(Pt), d > 0 ? await Promise.race([c, af(d)]) : await c)
            } else a.A = 5
    }

    function FQ(a, b) {
        return !b.google_restrict_data_processing && b.google_tag_for_under_age_of_consent !== 1 && b.google_tag_for_child_directed_treatment !== 1 && !!a.g() && !TE() && !J(a, 9) && !J(a, 13) && !J(a, 12) && (typeof b.google_privacy_treatments !== "string" || !b.google_privacy_treatments.split(",").includes("disablePersonalization")) && !J(a, 14)
    };
    var HQ = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => GQ(d));
        return NM(a, "adpnt", (e, f) => {
            if (bo(f, c.contentWindow)) {
                e = fo(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e), a.googletag ? ? (a.googletag = {
                        cmd: []
                    }), a.googletag.queryIds = a.googletag.queryIds ? ? [], a.googletag.queryIds.push(e), a.googletag.queryIds.length > 500 && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                e = !0
            } else e = !1;
            return e
        })
    };

    function GQ(a) {
        setTimeout(() => {
            a.dataset.adStatus !== "filled" && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function IQ(a, b, {
        Wg: c,
        Xg: d
    }) {
        return !Bj(a.g) || J(b, 8) || (c || !b.g()) && d ? !1 : !0
    }

    function JQ(a, b, {
        Wg: c,
        Xg: d
    }) {
        if (!J(b, 8) && (!c && b.g() || !d)) return Dj("__eoi", a.g) ? ? void 0
    }
    var KQ = class {
        constructor(a) {
            this.g = a
        }
    };

    function LQ(a, b, c) {
        try {
            if (!Ve(c.origin) || !bo(c, a.g.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        typeof d === "string" && (e = a.ta[d]) && a.Ia.vb(168, () => {
            e.call(a, b, c)
        })
    }
    class MQ extends Q {
        constructor(a, b) {
            var c = W,
                d = fy;
            super();
            this.j = a;
            this.g = b;
            this.Ia = c;
            this.Z = d;
            this.ta = {};
            this.Ea = this.Ia.Ca(168, (e, f) => void LQ(this, e, f));
            this.ib = this.Ia.Ca(169, (e, f) => go(this.j, "ras::xsf", this.Z, f));
            this.ca = [];
            this.R(this.ta);
            this.ca.push(MM(this.j, "sth", this.Ea, this.ib))
        }
        i() {
            for (const a of this.ca) a();
            this.ca.length = 0;
            super.i()
        }
    };
    var NQ = class extends MQ {};

    function OQ(a, b, c = null) {
        return new PQ(a, b, c)
    }
    var PQ = class extends NQ {
        constructor(a, b, c) {
            super(a, b);
            this.A = c;
            this.C = O(jF);
            this.l = () => {};
            Hb(this.g, "load", this.l)
        }
        i() {
            Ib(this.g, "load", this.l);
            super.i()
        }
        R(a) {
            a["adsense-labs"] = b => {
                if (b = fo(b).settings)
                    if (b = Vi(lj, JSON.parse(b)), C(b, 1) != null) {
                        var c = b.U;
                        if (ni(c, c[v], kj, 4, 3, !1, !0).length > 0) {
                            var d = c = oi(b, kj, 4, w(ag)),
                                e = this.C;
                            const h = new am;
                            for (var f of d) switch (f.getVersion()) {
                                case 1:
                                    Li(h, 1, !0);
                                    break;
                                case 2:
                                    Li(h, 2, !0)
                            }
                            f = new bm;
                            f = B(f, 1, cm, h);
                            pF(e, f);
                            f = this.j;
                            e = this.A;
                            if (!NE(IE(), 37, !1)) {
                                f = new sO(f);
                                for (var g of c) switch (g.getVersion()) {
                                    case 1:
                                        pO(f,
                                            "__gads", g, e);
                                        break;
                                    case 2:
                                        pO(f, "__gpi", g, e)
                                }
                                OE(IE(), 37, !0)
                            }
                            Rh(b, 4)
                        }
                        if (g = x(b, kj, 5)) c = this.j, NE(IE(), 40, !1) || (c = new KQ(c), f = Di(g, 2) - Date.now() / 1E3, f = {
                            Cd: Math.max(f, 0),
                            path: K(g, 3),
                            domain: K(g, 4),
                            Wd: !1
                        }, Ej("__eoi", g.getValue(), f, c.g), OE(IE(), 40, !0));
                        Rh(b, 5);
                        g = this.j;
                        c = K(b, 1) || "";
                        if (SK({
                                win: g,
                                Va: aQ()
                            }).g != null) {
                            f = SK({
                                win: g,
                                Va: aQ()
                            });
                            f = f.g != null ? cQ(f.getValue()) : {};
                            b !== null && (f[c] = Ui(b));
                            try {
                                g.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                            } catch (h) {}
                        }
                    }
            }
        }
    };

    function QQ(a) {
        a.A = a.C;
        a.F.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        a.g.style.transition = "height 500ms";
        RQ(a)
    }

    function SQ(a, b) {
        a.g.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function RQ(a) {
        const b = `rect(0px, ${a.g.width}px, ${a.A}px, 0px)`;
        a.g.style.clip = b;
        a.l.style.clip = b;
        a.g.setAttribute("height", a.A);
        a.g.style.height = a.A + "px";
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.F.style.height = a.A + "px"
    }

    function TQ(a, b) {
        b = Fe(b.r_nh);
        a.C = b == null ? 0 : b;
        if (a.C <= 0) return "1";
        a.I = gk(a.F).y;
        a.H = co(a.j);
        if (a.I + a.A < a.H) return "2";
        if (a.I > Yn(a.j) - a.j.innerHeight) return "3";
        b = a.H;
        a.g.setAttribute("height", a.C);
        a.g.style.height = a.C + "px";
        a.l.style.overflow = "hidden";
        a.F.style.position = "relative";
        a.F.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        a.g.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.I, a.A);
        Zj(a.l, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.g.width}px, ${b}px, 0px)`;
        Zj(a.g, {
            clip: b
        });
        Zj(a.l, {
            clip: b
        });
        return "0"
    }
    class UQ extends NQ {
        constructor(a, b) {
            super(a.K, b);
            this.l = a.ea;
            this.F = this.l.parentElement && this.l.parentElement.classList.contains("adsbygoogle") ? this.l.parentElement : this.l;
            this.A = parseInt(this.l.style.height, 10);
            this.Ka = this.hb = !1;
            this.ia = this.H = this.C = 0;
            this.Oc = this.A / 5;
            this.I = gk(this.F).y;
            this.Bb = Db(iy(651, () => {
                this.I = gk(this.F).y;
                var c = this.H;
                this.H = co(this.j);
                this.A < this.C ? (c = this.H - c, c > 0 && (this.ia += c, this.ia >= this.Oc ? (QQ(this), SQ(this, this.C)) : (this.A = Math.min(this.C, this.A + c), SQ(this, c), RQ(this)))) :
                    Ib(this.j, "scroll", this.O)
            }), this);
            this.O = () => {
                var c = this.Bb;
                sj.requestAnimationFrame ? sj.requestAnimationFrame(c) : c()
            }
        }
        R(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = fo(b);
                this.hb || (this.hb = !0, b = TQ(this, b), b === "0" && Hb(this.j, "scroll", this.O, Eb), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: b === "0",
                    googMsgType: "sth"
                }), "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Ka || (this.Ka = !0, QQ(this), Ib(this.j, "scroll", this.O))
            }
        }
        i() {
            this.O && Ib(this.j, "scroll", this.O, Eb);
            super.i()
        }
    };

    function VQ(a) {
        const b = a.I.getBoundingClientRect(),
            c = b.top + b.height < 0;
        return !(b.top > a.j.innerHeight) && !c
    }
    class WQ extends Q {
        constructor(a, b, c) {
            super();
            this.j = a;
            this.A = b;
            this.I = c;
            this.C = 0;
            this.l = VQ(this);
            this.H = Cb(this.F, this);
            this.g = iy(433, () => {
                var d = this.H;
                sj.requestAnimationFrame ? sj.requestAnimationFrame(d) : d()
            });
            Hb(this.j, "scroll", this.g, Eb)
        }
        F() {
            const a = VQ(this);
            if (a && !this.l) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (OM(c, "ig", b, "*", 2), ++this.C >= 10 && this.g && Ib(this.j, "scroll", this.g, Eb))
            }
            this.l = a
        }
    };

    function XQ(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return typeof c === "string" ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Zj(a, "transition", b.join(","))
    }
    var YQ = Ab(function() {
        var a = be(document, "DIV"),
            b = Wd ? "-webkit" : Vd ? "-moz" : Td ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        c = {
            style: c
        };
        if (!Rc.test("div")) throw Error("");
        if ("DIV" in Tc) throw Error("");
        b = void 0;
        var d = "";
        if (c)
            for (h in c)
                if (Object.prototype.hasOwnProperty.call(c, h)) {
                    if (!Rc.test(h)) throw Error("");
                    var e = c[h];
                    if (e != null) {
                        var f = h;
                        if (e instanceof sb) e = vb(e);
                        else if (f.toLowerCase() == "style") {
                            if (!Da(e)) throw Error("");
                            if (!(e instanceof xc)) {
                                let k = "";
                                for (var g in e)
                                    if (Object.prototype.hasOwnProperty.call(e, g)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(g)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${g}`);
                                        let l = e[g];
                                        l != null && (l = Array.isArray(l) ? l.map(Ac).join(" ") : Ac(l), k += `${g}:${l};`)
                                    }
                                e = k ? new xc(k) : zc
                            }
                            e = yc(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in Sc)
                                if (e instanceof cc) e = dc(e).toString();
                                else if (e instanceof mc) e = oc(e);
                            else if (typeof e === "string") e = tc(e).toString();
                            else throw Error("");
                        }
                        f = `${f}="` + Sb(String(e)) + '"';
                        d += " " + f
                    }
                }
        var h =
            "<div" + d;
        b == null ? b = [] : Array.isArray(b) || (b = [b]);
        Qb.div === !0 ? h += ">" : (g = Qc(b), h += ">" + Lc(g).toString() + "</div>");
        h = Nc(h);
        kd(a, h);
        return ck(a.firstChild, "transition") != ""
    });

    function ZQ(a, b, c) {
        a.i[b].indexOf(c) < 0 && (a.i[b] += c)
    }

    function $Q(a, b) {
        a.g.indexOf(b) >= 0 || (a.g = b + a.g)
    }

    function aR(a, b, c, d) {
        return a.errors != "" || b ? null : a.g.replace(bR, "") == "" ? c != null && a.i[0] || d != null && a.i[1] ? !1 : !0 : !1
    }

    function cR(a) {
        var b = aR(a, "", null, 0);
        if (b === null) return "XS";
        b = b ? "C" : "N";
        a = a.g;
        return a.indexOf("a") >= 0 ? b + "A" : a.indexOf("f") >= 0 ? b + "F" : b + "S"
    }
    var dR = class {
        constructor(a, b) {
            this.i = ["", ""];
            this.g = a || "";
            this.errors = b || ""
        }
        va(a) {
            this.errors.indexOf(a) < 0 && (this.errors = a + this.errors);
            return this
        }
        toString() {
            return [this.i[0], this.i[1], this.g, this.errors].join("|")
        }
    };

    function eR(a) {
        let b = a.R;
        a.G = () => {};
        fR(a, a.B, b);
        let c = a.B.parentElement;
        if (!c) return a.g;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : we(c, b)
            } catch (g) {
                a.g.va("c")
            }
            const f = gR(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.O = !0);
            if (d && !f && hR(e)) {
                $Q(a.g, "l");
                a.F = c;
                break
            }
            d = d && f;
            if (e && iR(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !qe(b)) {
                        $Q(a.g, "c");
                        break
                    }
                } catch (g) {
                    $Q(a.g,
                        "c");
                    break
                }
            }
        }
        a.C && a.A && jR(a);
        return a.g
    }

    function kR(a) {
        function b(m) {
            for (let n = 0; n < m.length; n++) Zj(k, m[n], "0px")
        }

        function c() {
            lR(d, g, h);
            !k || l || h || (b(mR), b(nR))
        }
        const d = a.B;
        d.style.overflow = a.Rc ? "visible" : "hidden";
        a.C && (a.F ? (XQ(d, oR()), XQ(a.F, oR())) : XQ(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        a.I !== null && (d.style.opacity = String(a.I));
        const e = a.width != null && a.j != null && (a.Ud || a.j > a.width) ? a.j : null,
            f = a.height != null && a.i != null && (a.Ud || a.i > a.height) ? a.i : null;
        if (a.H) {
            const m =
                a.H.length;
            for (let n = 0; n < m; n++) lR(a.H[n], e, f)
        }
        const g = a.j,
            h = a.i,
            k = a.F,
            l = a.O;
        a.C ? q.setTimeout(c, 1E3) : c()
    }

    function pR(a) {
        if (a.A && !a.ca || a.j == null && a.i == null && a.I == null && a.A) return a.g;
        var b = a.A;
        a.A = !1;
        eR(a);
        a.A = b;
        if (!b || a.check != null && !aR(a.g, a.check, a.j, a.i)) return a.g;
        a.g.g.indexOf("n") >= 0 && (a.width = null, a.height = null);
        if (a.width == null && a.j !== null || a.height == null && a.i !== null) a.C = !1;
        (a.j == 0 || a.i == 0) && a.g.g.indexOf("l") >= 0 && (a.j = 0, a.i = 0);
        b = a.g;
        b.i[0] = "";
        b.i[1] = "";
        b.g = "";
        b.errors = "";
        kR(a);
        return eR(a)
    }

    function iR(a, b) {
        let c = !1;
        b.display == "none" && ($Q(a.g, "n"), a.A && (c = !0));
        b.visibility != "hidden" && b.visibility != "collapse" || $Q(a.g, "v");
        b.overflow == "hidden" && $Q(a.g, "o");
        b.position == "absolute" ? ($Q(a.g, "a"), c = !0) : b.position == "fixed" && ($Q(a.g, "f"), c = !0);
        return c
    }

    function fR(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = qR(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && ZQ(a.g, 0, "o"), d & 4 && ZQ(a.g, 1, "o"));
        return !(d & 1)
    }

    function gR(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (D) {
            a.g.va("s")
        }
        var f = c.getAttribute("width"),
            g = Fe(f),
            h = c.getAttribute("height"),
            k = Fe(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = fR(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var p = e && e.width,
            r = e && e.height,
            y = Ge(m) == a.width && Ge(n) == a.height;
        m = y ? m : p;
        r = y ? n : r;
        p = Ge(m);
        y = Ge(r);
        g = a.width !== null && (p !== null && a.width >= p || g !== null && a.width >= g);
        y = a.height !== null && (y !== null && a.height >= y || k !== null && a.height >= k);
        k = !b && hR(d);
        y = b || y || k || !(f ||
            m || d && (!rR(String(d.minWidth)) || !sR(String(d.maxWidth))));
        l = b || g || k || l || !(h || r || d && (!rR(String(d.minHeight)) || !sR(String(d.maxHeight))));
        tR(a, 0, y, c, "width", f, a.width, a.j);
        uR(a, 0, "d", y, e, d, "width", m, a.width, a.j);
        uR(a, 0, "m", y, e, d, "minWidth", e && e.minWidth, a.width, a.j);
        uR(a, 0, "M", y, e, d, "maxWidth", e && e.maxWidth, a.width, a.j);
        a.nf ? (c = /^html|body$/i.test(c.nodeName), f = Ge(n), h = d ? d.overflowY === "auto" || d.overflowY === "scroll" : !1, h = a.i != null && d && f && Math.round(f) !== a.i && !h && d.minHeight !== "100%", a.A && !c && h && (e.setProperty("height",
            "auto", "important"), d && !rR(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !sR(String(d.maxHeight)) && a.i && Math.round(f) < a.i && e.setProperty("max-height", "none", "important"))) : (tR(a, 1, l, c, "height", h, a.height, a.i), uR(a, 1, "d", l, e, d, "height", r, a.height, a.i), uR(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.height, a.i), uR(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.height, a.i));
        return b
    }

    function jR(a) {
        function b() {
            if (c > 0) {
                var l = we(e, d) || {
                    width: 0,
                    height: 0
                };
                const m = Ge(l.width);
                l = Ge(l.height);
                m !== null && f !== null && h && h(0, f - m);
                l !== null && g !== null && h && h(1, g - l);
                --c
            } else q.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.R,
            e = a.B,
            f = a.j,
            g = a.i,
            h = a.G;
        let k;
        q.setTimeout(() => {
            k = q.setInterval(b, 16)
        }, 990)
    }

    function qR(a, b, c) {
        if (b.nodeType == 3) return /\S/.test(b.data) ? 1 : 0;
        if (b.nodeType == 1) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = we(b, c)
            } catch (e) {}
            if (d) {
                if (d.display == "none" || d.position == "fixed") return 0;
                if (d.position == "absolute") {
                    if (!a.l.boundingClientRect || d.visibility == "hidden" || d.visibility == "collapse") return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.l.boundingClientRect.left ? 2 : 0) | (c.bottom > a.l.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function tR(a, b, c, d, e, f, g, h) {
        if (h != null) {
            if (typeof f == "string") {
                if (f == "100%" || !f) return;
                f = Fe(f);
                f == null && (a.g.va("n"), ZQ(a.g, b, "d"))
            }
            if (f != null)
                if (c) {
                    if (a.A)
                        if (a.C) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.G;
                            a.G = (m, n) => {
                                m == b && td(d, e, String(k - n));
                                l && l(m, n)
                            }
                        } else td(d, e, String(h))
                } else ZQ(a.g, b, "d")
        }
    }

    function uR(a, b, c, d, e, f, g, h, k, l) {
        if (l != null) {
            f = f && f[g];
            typeof f != "string" || (c == "m" ? rR(f) : sR(f)) || (f = Ge(f), f == null ? $Q(a.g, "p") : k != null && $Q(a.g, f == k ? "E" : "e"));
            if (typeof h == "string") {
                if (c == "m" ? rR(h) : sR(h)) return;
                h = Ge(h);
                h == null && (a.g.va("p"), ZQ(a.g, b, c))
            }
            if (h != null)
                if (d && e) {
                    if (a.A)
                        if (a.C) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.G;
                            a.G = (p, r) => {
                                p == b && (e[g] = m - r + "px");
                                n && n(p, r)
                            }
                        } else e[g] = l + "px"
                } else ZQ(a.g, b, c)
        }
    }
    var zR = class {
        constructor(a, b, c, d, e, f, g) {
            this.pubWin = a;
            this.B = b;
            this.H = c;
            this.l = new vR(this.B);
            this.F = this.G = null;
            this.O = !1;
            this.R = (a = this.B.ownerDocument) && (a.defaultView || a.parentWindow);
            this.l = new vR(this.B);
            this.A = g;
            this.ca = wR(this.l, d.xf, d.height, d.Lc);
            this.width = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.right - this.l.boundingClientRect.left : null : e;
            this.height = this.A ? this.l.boundingClientRect ? this.l.boundingClientRect.bottom - this.l.boundingClientRect.top : null : f;
            this.j = xR(d.width);
            this.i = xR(d.height);
            this.I = this.A ? xR(d.opacity) : null;
            this.check = d.check;
            this.Lc = !!d.Lc;
            this.C = d.xf == "animate" && !yR(this.l, this.i, this.Lc) && YQ();
            this.Rc = !!d.Rc;
            this.g = new dR;
            yR(this.l, this.i, this.Lc) && $Q(this.g, "r");
            e = this.l;
            e.g && e.i >= e.W && $Q(this.g, "b");
            this.Ud = !!d.Ud;
            this.nf = !!d.nf
        }
    };

    function yR(a, b, c) {
        var d;
        (d = a.g) && !(d = !a.visible) && (c ? (b = a.i + Math.min(b, xR(a.getHeight())), a = a.g && b >= a.W) : a = a.g && a.i >= a.W, d = a);
        return d
    }
    var vR = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && te(c);
            this.g = !!c;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.i = e;
            c = c || q;
            this.W = (c.document.compatMode == "CSS1Compat" ? c.document.documentElement : c.document.body).clientHeight;
            b = b && NO(b);
            this.visible = !!a && !(b == 2 || b == 3) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function wR(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return yR(a, c, d)
        }
    }

    function hR(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function AR(a, b, c, d) {
        return pR(new zR(a, b, d, c, null, null, !0))
    }
    var BR = new dR("s", ""),
        bR = RegExp("[lonvafrbpEe]", "g");

    function sR(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function rR(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function lR(a, b, c) {
        b !== null && Fe(a.getAttribute("width")) !== null && a.setAttribute("width", String(b));
        c !== null && Fe(a.getAttribute("height")) !== null && a.setAttribute("height", String(c));
        b !== null && (a.style.width = b + "px");
        c !== null && (a.style.height = c + "px")
    }
    var mR = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        nR = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function oR() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = mR;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = nR;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function xR(a) {
        return typeof a === "string" ? Fe(a) : typeof a === "number" && isFinite(a) ? a : null
    };
    var CR = class extends NQ {
        constructor(a, b, c) {
            super(a, b);
            this.l = c
        }
        R(a) {
            a["resize-me"] = (b, c) => {
                b = fo(b);
                var d = b.r_chk;
                if (d == null || d === "") {
                    var e = Fe(b.r_nw),
                        f = Fe(b.r_nh),
                        g = Fe(b.r_no);
                    g != null || e !== 0 && f !== 0 || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = /^true$/.test(b.r_ao),
                            l = /^true$/.test(b.r_ifr),
                            m = /^true$/.test(b.r_cab);
                        const r = window;
                        if (r)
                            if (h === "no_rsz") b.err = "7", e = !0;
                            else {
                                var n = new vR(this.g);
                                if (n.g) {
                                    var p = n.getWidth();
                                    p != null && (b.w = p);
                                    p = n.getHeight();
                                    p != null && (b.h = p);
                                    wR(n, h, f, m) ? (n = this.l, d = AR(r, n, {
                                        width: e,
                                        height: f,
                                        opacity: g,
                                        check: d,
                                        xf: h,
                                        Rc: k,
                                        Ud: l,
                                        Lc: m
                                    }, [this.g]), b.r_cui && /^true$/.test(b.r_cui.toString()) && u(n, {
                                        height: (f === null ? 0 : f - 48) + "px",
                                        top: "24px"
                                    }), e != null && (b.nw = e), f != null && (b.nh = f), b.rsz = d.toString(), b.abl = cR(d), b.frsz = (h === "force").toString(), b.err = "0", e = !0) : (b.err = "1", e = !1)
                                } else b.err = "3", e = !1
                            }
                        else b.err = "2", e = !1
                    }
                    c.source.postMessage(JSON.stringify({
                        msg_type: "resize-result",
                        r_str: h,
                        r_status: e,
                        googMsgType: "sth"
                    }), "*");
                    this.g.dataset.googleQueryId || this.g.setAttribute("data-google-query-id",
                        b.qid)
                }
            }
        }
    };
    const DR = ["google_ad_client", "google_ad_format", "google_ad_height", "google_ad_width", "google_page_url"];

    function ER(a, b, c = null) {
        return c ? (c = yj(c, a)) ? new FR(a, b, c) : null : null
    }
    var FR = class extends NQ {
        constructor(a, b, c) {
            super(a, b);
            this.l = c
        }
        R(a) {
            a["survey-submitted"] = () => {
                const b = yk() + V(Ds) * 1E3;
                this.l.setItem("google_survey_fcap", String(b))
            }
        }
    };

    function GR(a, b) {
        return new IntersectionObserver(b, a)
    }

    function HR(a, b, c) {
        Hb(a, b, c);
        return () => Ib(a, b, c)
    }
    let IR = null;

    function JR() {
        IR = yk()
    }

    function KR(a, b) {
        return b ? IR === null ? (Hb(a, "mousemove", JR, {
            passive: !0
        }), Hb(a, "scroll", JR, {
            passive: !0
        }), JR(), !1) : yk() - IR >= b * 1E3 : !1
    }

    function LR({
        win: a,
        element: b,
        C: c,
        B: d,
        A: e = 0,
        Ra: f,
        i: g,
        g: h = {},
        l: k = !0,
        j: l = GR
    }) {
        let m, n = !1,
            p = !1;
        const r = [],
            y = l(h, (D, E) => {
                try {
                    const G = () => {
                        r.length || (d && (r.push(HR(b, "mouseenter", () => {
                            n = !0;
                            G()
                        })), r.push(HR(b, "mouseleave", () => {
                            n = !1;
                            G()
                        }))), r.push(HR(a.document, "visibilitychange", () => G())));
                        const H = KR(a, e),
                            z = PO(a.document);
                        if (p && !n && !H && !z) m = m || a.setTimeout(() => {
                            KR(a, e) ? G() : (f(), E.disconnect())
                        }, c * 1E3);
                        else if (k || n || H || z) a.clearTimeout(m), m = void 0
                    };
                    ({
                        isIntersecting: p
                    } = D[D.length - 1]);
                    G()
                } catch (G) {
                    g && g(G)
                }
            });
        y.observe(b);
        return () => {
            y.disconnect();
            for (const D of r) D();
            m != null && a.clearTimeout(m)
        }
    };

    function MR(a, b, c, d, e) {
        return new NR(a, b, c, d, e)
    }

    function OR(a, b, c) {
        const d = a.g,
            e = a.F;
        if (e != null && d != null && bo(c, d.contentWindow) && (b = b.config, typeof b === "string")) {
            try {
                var f = JSON.parse(b);
                if (!Array.isArray(f)) return;
                a.l = new mj(f)
            } catch (g) {
                return
            }
            a.dispose();
            f = Ci(a.l, 1);
            f <= 0 || (a.C = LR({
                win: a.j,
                element: e,
                C: f - .2,
                B: !le(),
                A: Ci(a.l, 3),
                Ra: () => void PR(a, e),
                i: g => Jn.ba(1223, g, void 0, void 0),
                g: {
                    threshold: Ei(a.l, 2, 1)
                },
                l: !0,
                j: void 0
            }))
        }
    }

    function PR(a, b) {
        a.H();
        setTimeout(Jn.Ca(1224, () => {
            a.A.rc = (parseInt(a.A.rc, 10) || 0) + 1;
            var c = b.parentElement || null;
            c && uu.test(c.className) || (c = be(document, "INS"), c.className = "adsbygoogle", b.parentNode && b.parentNode.insertBefore(c, b.nextSibling));
            U(us) ? (QR(a, c, b), a.A.no_resize = !0, Jo(zG(c), "filled", () => {
                ce(b)
            })) : ce(b);
            zP(c, a.A, a.j)
        }), 200)
    }

    function QR(a, b, c) {
        a.j.getComputedStyle(b).position == "static" && (b.style.position = "relative");
        c.style.position = "absolute";
        c.style.top = "0";
        c.style.left = "0";
        delete b.dataset.adsbygoogleStatus;
        delete b.dataset.adStatus;
        b.classList.remove("adsbygoogle-noablate")
    }
    var NR = class extends NQ {
        constructor(a, b, c, d, e) {
            super(a, b);
            this.F = d;
            this.A = c;
            this.H = e;
            this.l = this.C = null;
            (b = (b = b.contentWindow) && b.parent) && a != b && this.ca.push(MM(b, "sth", this.Ea, this.ib))
        }
        R(a) {
            a.av_ref = (b, c) => OR(this, b, c)
        }
        i() {
            super.i();
            this.F = null;
            this.C && this.C()
        }
    };

    function RR(a) {
        if (U(vs)) {
            var b = a.ea.parentElement || null;
            b && uu.test(b.className) && Jo(zG(b), "unfilled", () => {
                var c;
                if (c = U(vs))
                    if (c = !NE(IE(), 42, !1)) {
                        a: switch (a.D.google_reactive_ad_format) {
                            case 0:
                            case 27:
                            case 40:
                                c = !0;
                                break a;
                            default:
                                c = !1
                        }
                        if (c = c && a.D.google_ad_width >= V(Es) && (a.g ? nO(new sO(a.pubWin), a.g) : !1)) c = (c = a.g ? yj(a.g, a.pubWin) : null) ? (c.getItem("google_survey_fcap") ? Number(c.getItem("google_survey_fcap")) : 0) <= yk() : !1;
                        if (c) a: if (U(Rr) || Md() || Ld()) c = !0;
                            else {
                                if (Pd() && a.l && a.l.label) switch (a.l.label) {
                                    case "treatment_1.1":
                                    case "treatment_1.2":
                                    case "treatment_1.3":
                                    case "control_2":
                                        c = !0;
                                        break a
                                }
                                c = !1
                            }
                        c && (c = (c = P(a.pubWin)) ? b.getBoundingClientRect().top > c : !1)
                    }
                if (c) {
                    c = a.pubWin.document.createElement("ins");
                    var d = b.getAttribute("style");
                    d && c.setAttribute("style", d);
                    a.D.google_ad_height && (c.style.height = `${a.D.google_ad_height}px`);
                    (d = b.getAttribute("class")) && c.setAttribute("class", d);
                    (d = b.getAttribute("id")) && c.setAttribute("id", d);
                    b.replaceWith(c);
                    d = a.D;
                    const f = {};
                    for (var e of DR) d[e] && (f[e] = d[e]);
                    f.sso = !0;
                    zP(c, f, a.pubWin);
                    OE(IE(), 42, !0);
                    if (c = a.g ? yj(a.g, a.pubWin) : null) e = yk() + V(Cs) *
                        1E3, c.setItem("google_survey_fcap", String(e))
                }
            })
        }
    };
    const SR = /^blogger$/,
        TR = /^wordpress(.|\s|$)/i,
        UR = /^joomla!/i,
        VR = /^drupal/i,
        WR = /\/wp-content\//,
        YR = /\/wp-content\/plugins\/advanced-ads/,
        IU = /\/wp-content\/themes\/genesis/,
        JU = /\/wp-content\/plugins\/genesis/;

    function KU(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (YR.test(e)) return 5;
                if (JU.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", IU.test(e) || JU.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if (f.getAttribute("name") == "generator" && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (SR.test(f)) return 1;
                if (TR.test(f)) return 2;
                if (UR.test(f)) return 3;
                if (VR.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], d.getAttribute("rel") == "stylesheet" && d.hasAttribute("href") && (d = d.getAttribute("href") || "", WR.test(d))) return 2;
        return 0
    };
    var LU = {
        google_ad_block: "ad_block",
        google_ad_client: "client",
        google_ad_intent_query: "ait_q",
        google_ad_output: "output",
        google_ad_callback: "callback",
        google_ad_height: "h",
        google_ad_resize: "twa",
        google_ad_slot: "slotname",
        google_ad_unit_key: "adk",
        google_ad_dom_fingerprint: "adf",
        google_ad_intent_qetid: "aiqeid",
        google_placement_id: "pi",
        google_daaos_ts: "daaos",
        google_erank: "epr",
        google_ad_width: "w",
        abgtt: "abgtt",
        google_captcha_token: "captok",
        google_content_recommendation_columns_num: "cr_col",
        google_content_recommendation_rows_num: "cr_row",
        google_ctr_threshold: "ctr_t",
        google_cust_criteria: "cust_params",
        gfwrnwer: "fwrn",
        gfwrnher: "fwrnh",
        google_image_size: "image_size",
        google_last_modified_time: "lmt",
        google_loeid: "loeid",
        google_max_num_ads: "num_ads",
        google_max_radlink_len: "max_radlink_len",
        google_mtl: "mtl",
        google_native_settings_key: "nsk",
        google_enable_content_recommendations: "ecr",
        google_num_radlinks: "num_radlinks",
        google_num_radlinks_per_unit: "num_radlinks_per_unit",
        google_pucrd: "pucrd",
        google_reactive_plaf: "plaf",
        google_reactive_plat: "plat",
        google_reactive_fba: "fba",
        google_reactive_sra_channels: "plach",
        google_responsive_auto_format: "rafmt",
        armr: "armr",
        google_plas: "plas",
        google_rl_dest_url: "rl_dest_url",
        google_rl_filtering: "rl_filtering",
        google_rl_mode: "rl_mode",
        google_rt: "rt",
        google_video_play_muted: "vpmute",
        google_source_type: "src_type",
        google_restrict_data_processing: "rdp",
        google_tag_for_child_directed_treatment: "tfcd",
        google_tag_for_under_age_of_consent: "tfua",
        google_tag_origin: "to",
        google_ad_semantic_area: "sem",
        google_tfs: "tfs",
        google_package: "pwprc",
        google_tag_partner: "tp",
        fra: "fpla",
        google_ml_rank: "mlr",
        google_apsail: "psa",
        google_ad_channel: "channel",
        google_ad_type: "ad_type",
        google_ad_format: "format",
        google_color_bg: "color_bg",
        google_color_border: "color_border",
        google_color_link: "color_link",
        google_color_text: "color_text",
        google_color_url: "color_url",
        google_page_url: "url",
        google_ad_section: "region",
        google_cpm: "cpm",
        google_encoding: "oe",
        google_safe: "adsafe",
        google_font_face: "f",
        google_font_size: "fs",
        google_hints: "hints",
        google_ad_host: "host",
        google_ad_host_channel: "h_ch",
        google_ad_host_tier_id: "ht_id",
        google_kw_type: "kw_type",
        google_kw: "kw",
        google_contents: "contents",
        google_targeting: "targeting",
        google_adtest: "adtest",
        google_alternate_color: "alt_color",
        google_alternate_ad_url: "alternate_ad_url",
        google_cust_age: "cust_age",
        google_cust_gender: "cust_gender",
        google_cust_l: "cust_l",
        google_cust_lh: "cust_lh",
        google_language: "hl",
        google_city: "gcs",
        google_country: "gl",
        google_region: "gr",
        google_content_recommendation_ad_positions: "ad_pos",
        google_content_recommendation_ui_type: "crui",
        google_content_recommendation_use_square_imgs: "cr_sq_img",
        sso: "sso",
        google_color_line: "color_line",
        google_disable_video_autoplay: "disable_video_autoplay",
        google_full_width_responsive_allowed: "fwr",
        google_full_width_responsive: "fwrattr",
        efwr: "efwr",
        google_pgb_reactive: "pra",
        rc: "rc",
        google_resizing_allowed: "rs",
        google_resizing_height: "rh",
        google_resizing_width: "rw",
        rpe: "rpe",
        google_responsive_formats: "resp_fmts",
        google_safe_for_responsive_override: "sfro",
        google_video_doc_id: "video_doc_id",
        google_video_product_type: "video_product_type",
        google_webgl_support: "wgl",
        easpi: "easpi",
        aihb: "aihb",
        asro: "asro",
        ailel: "ailel",
        aiael: "aiael",
        aicel: "aicel",
        aifxl: "aifxl",
        aiixl: "aiixl",
        slmct: "aslmct",
        samct: "asamct",
        aiict: "aiict",
        aigda: "aifgd",
        aipaq: "aipaq",
        vmsli: "itsi",
        dap: "dap",
        aiapm: "aiapm",
        aiapmi: "aiapmi",
        aiombap: "aiombap"
    };

    function MU(a) {
        a.g === -1 && (a.g = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
        return a.g
    }
    var NU = class {
        constructor() {
            this.data = [];
            this.g = -1
        }
        set(a, b = !0) {
            0 <= a && a < 52 && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    };

    function OU() {
        const a = new NU;
        "SVGElement" in q && "createElementNS" in q.document && a.set(0);
        const b = Ke();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        q.crypto && q.crypto.subtle && a.set(3);
        "TextDecoder" in q && "TextEncoder" in q && a.set(4);
        return MU(a)
    };
    const PU = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        QU = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function RU(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return PU.get(b.type) ? ? null
        } catch {}
        return QU.get(a.performance ? .navigation ? .type) ? ? null
    };
    var SU = class extends N {
        constructor() {
            super()
        }
    };

    function TU(a, b) {
        if (Pd()) {
            var c = a.document.documentElement.lang;
            UU(a) ? VU(b, Ze(a), !0, "", c) : (new MutationObserver((d, e) => {
                UU(a) && (VU(b, Ze(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function UU(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function VU(a, b, c, d, e) {
        qj({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function WU(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const XU = /[+, ]/;

    function YU(a, b) {
        const c = a.D;
        var d = a.pubWin,
            e = {},
            f = d.document,
            g = bf(d),
            h = !1,
            k = "",
            l = 1;
        a: {
            l = c.google_ad_width || d.google_ad_width;
            var m = c.google_ad_height || d.google_ad_height;
            if (d && d.top === d) h = !1;
            else {
                h = d.document;
                k = h.documentElement;
                if (l && m) {
                    var n = 1;
                    let r = 1;
                    d.innerHeight ? (n = d.innerWidth, r = d.innerHeight) : k && k.clientHeight ? (n = k.clientWidth, r = k.clientHeight) : h.body && (n = h.body.clientWidth, r = h.body.clientHeight);
                    if (r > 2 * m || n > 2 * l) {
                        h = !1;
                        break a
                    }
                }
                h = !0
            }
        }
        k = h;
        l = FE(g).Ye;
        m = d.top == d ? 0 : qe(d.top) ? 1 : 2;
        n = 4;
        k || m !== 1 ? k ||
            m !== 2 ? k && m === 1 ? n = 7 : k && m === 2 && (n = 8) : n = 6 : n = 5;
        l && (n |= 16);
        k = String(n);
        l = HE(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        l !== 0 && (e.google_iframing_environment = l);
        if (!m && f.domain === "ad.yieldmanager.com") {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); k.indexOf("%") > -1;) try {
                k = decodeURIComponent(k)
            } catch (r) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && qe(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url =
            d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var p = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            p = null
        } else p = null;
        e.google_last_modified_time = p;
        d = g === g.top ? g.document.referrer : (d = Rj()) && d.referrer || "";
        e.google_referrer_url = d;
        GE(e, c);
        b.g() ? (e = c.google_page_location || c.google_page_url, "EMPTY" === e && (e = c.google_page_url), e ? (e = e.toString(), e.indexOf("http://") == 0 ? e = e.substring(7, e.length) : e.indexOf("https://") == 0 && (e = e.substring(8,
            e.length)), d = e.indexOf("/"), d === -1 && (d = e.length), e = e.substring(0, d).split("."), d = !1, e.length >= 3 && (d = e[e.length - 3] in hO), e.length >= 2 && (d = d || e[e.length - 2] in hO), e = d) : e = !1, e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net") : e = "pagead2.googlesyndication.com";
        b = ZU(a, b);
        d = a.D;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        d.google_ad_client === "ca-pub-6219811747049371" && $U.test(f) && (g = "/pagead/lopri?");
        e = `https://${e}${g}`;
        a = J(a.ma, 9) && c.google_debug_params ? c.google_debug_params : "";
        a = lk(b, e + a);
        return c.google_ad_url =
            a
    }

    function aV(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (a.nodeType === 9) a: {
            try {
                const c = a ? a.defaultView : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && qe(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function bV(a, b) {
        var c = pQ(a.pubWin);
        a.D.saaei && (c += (c === "" ? "" : ",") + a.D.saaei);
        a.D.google_ad_intent_eids && (c += `${c===""?"":","}${a.D.google_ad_intent_eids}`);
        b.eid = c;
        c = a.D.google_loeid;
        typeof c === "string" && (a.i |= 4096, b.loeid = c)
    }

    function cV(a, b) {
        a = (a = te(a.pubWin)) && a.document ? kO(a.document, a) : new pd(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function dV(a) {
        try {
            const b = q.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function eV(a, b, c) {
        const d = a.D;
        var e = a.pubWin,
            f = a.K,
            g = bf(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = Rj(e)) && Da(h.data) && typeof h.data.type === "string" ? (h = h.data.type.toLowerCase(), h = h == "doubleclick" || h == "adsense" ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = FE(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Ye || (b.usrc = 1));
        g.url != (b.loc || b.url) && (b.top = g.url);
        a.qc && (b.etu = a.qc);
        c = f ? yj(c, f) : null;
        (c = tP(d, f, c)) && (b.fc = c);
        if (!qk(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode &&
                (h = je(new Yd(c), "IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const qa = h.contentWindow.document;
                    qa.open();
                    var k = Nc("<!DOCTYPE html>");
                    qa.write(Lc(k));
                    qa.close();
                    g += qa.documentMode
                } catch (qa) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let l, m, n, p, r, y, D, E, G, H;
        try {
            l = e.screenX, m = e.screenY
        } catch (qa) {}
        try {
            n = e.outerWidth, p = e.outerHeight
        } catch (qa) {}
        try {
            r = e.innerWidth, y = e.innerHeight
        } catch (qa) {}
        try {
            D = e.screenLeft, E = e.screenTop
        } catch (qa) {}
        try {
            r =
                e.innerWidth, y = e.innerHeight
        } catch (qa) {}
        try {
            G = e.screen.availWidth, H = e.screen.availTop
        } catch (qa) {}
        b.brdim = [D, E, l, m, G, H, n, p, r, y].join();
        k = 0;
        q.postMessage === void 0 && (k |= 1);
        k > 0 && (b.osd = k);
        b.vis = NO(e.document);
        k = a.ea;
        e = nP(d) ? BR : pR(new zR(e, k, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = cR(e);
        if (!nP(d) && (e = rk(d), e != null)) {
            k = 0;
            a: {
                try {
                    {
                        var z = d.google_async_iframe_id;
                        const qa = window.document;
                        if (z) var I = qa.getElementById(z);
                        else {
                            var F = qa.getElementsByTagName("script"),
                                ba = F[F.length - 1];
                            I = ba && ba.parentNode || null
                        }
                    }
                    if (z = I) {
                        I = [];
                        F = 0;
                        for (var bb = Date.now(); ++F <= 100 && Date.now() - bb < 50 && (z = aV(z));) z.nodeType === 1 && I.push(z);
                        var xa = I;
                        b: {
                            for (bb = 0; bb < xa.length; bb++) {
                                c: {
                                    var fa = xa[bb];
                                    try {
                                        if (fa.parentNode && fa.offsetWidth > 0 && fa.offsetHeight > 0 && fa.style && fa.style.display !== "none" && fa.style.visibility !== "hidden" && (!fa.style.opacity || Number(fa.style.opacity) !== 0)) {
                                            const qa = fa.getBoundingClientRect();
                                            var la = qa.right > 0 && qa.bottom > 0;
                                            break c
                                        }
                                    } catch (qa) {}
                                    la = !1
                                }
                                if (!la) {
                                    var fb = !1;
                                    break b
                                }
                            }
                            fb = !0
                        }
                        if (fb) {
                            b: {
                                const qa = Date.now();fb = /^html|body$/i;la = /^fixed/i;
                                for (fa = 0; fa < xa.length && Date.now() - qa < 50; fa++) {
                                    const Nd = xa[fa];
                                    if (!fb.test(Nd.tagName) && la.test(Nd.style.position || ek(Nd, "position"))) {
                                        var gb = Nd;
                                        break b
                                    }
                                }
                                gb = null
                            }
                            break a
                        }
                    }
                } catch {}
                gb = null
            }
            gb && gb.offsetWidth * gb.offsetHeight <= 4 * e.width * e.height && (k = 1);
            b.pfx = k
        }
        a: {
            if (Math.random() < .05 && f) try {
                const qa = f.document.getElementsByTagName("head")[0];
                var cg = qa ? KU(qa) : 0;
                break a
            } catch (qa) {}
            cg = 0
        }
        f = cg;
        f !== 0 && (b.cms = f);
        d.google_lrv !== a.Wa && (b.alvm = d.google_lrv ||
            "none")
    }

    function fV(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : re(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function gV(a, b) {
        const c = NE(b, 8, {});
        b = NE(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function hV(a, b, c) {
        const d = a.D;
        var e = a.D;
        b.dt = Ln;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = q.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (m) {}
            g = null
        }(e = (e = g) ? uQ(e, q.Date.now() - Ln, 1E6) : null) && (b.bdt = e);
        b.idt = uQ(a.H, Ln);
        e = a.D;
        b.shv = K(a.ma, 2);
        a.Wa && (b.mjsv = a.Wa);
        e.google_loader_used == "sd" ? b.ptt = 5 : e.google_loader_used == "aa" && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = Rj(a.pubWin)) b.is_amp = 1, b.amp_v = Sj(e), (e = Tj(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new sO(a.pubWin);
        (g = oO(e, "__gads", c)) ? b.cookie = g: nO(e, c) && (b.cookie_enabled = "1");
        (g = oO(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g);
        oO(e, "__gpi_opt_out", c) === "1" && (b.pdopt = "1");
        e = new KQ(a.pubWin);
        g = {
            Wg: !1,
            Xg: !a.F
        };
        (f = JQ(e, c, g)) ? b.eo_id_str = f: IQ(e, c, g) && (b.eoidce = "1");
        c = IE();
        g = NE(c, 8, {});
        e = d.google_ad_section;
        g[e] && (b.prev_fmts = g[e]);
        g = NE(c, 9, {});
        g[e] && (b.prev_slotnames = g[e].toLowerCase());
        gV(d, c);
        e = NE(c,
            15, 0);
        e > 0 && (b.nras = String(e));
        (g = Rj(window)) ? (g ? (e = g.pageViewId, g = g.clientId, typeof g === "string" && (e += g.replace(/\D/g, "").substr(0, 6))) : e = null, e = +e) : (e = bf(window), g = e.google_global_correlator, g || (e.google_global_correlator = g = 1 + Math.floor(Math.random() * Math.pow(2, 43))), e = g);
        b.correlator = NE(c, 7, e);
        U(Xt) && (b.rume = 1);
        if (d.google_ad_channel) {
            e = NE(c, 10, {});
            g = "";
            f = d.google_ad_channel.split(XU);
            for (var h = 0; h < f.length; h++) {
                var k = f[h];
                e[k] ? g += k + "+" : e[k] = !0
            }
            b.pv_ch = g
        }
        if (d.google_ad_host_channel) {
            e = d.google_ad_host_channel;
            g = NE(c, 11, []);
            f = e.split("|");
            c = -1;
            e = [];
            for (h = 0; h < f.length; h++) {
                k = f[h].split(XU);
                g[h] || (g[h] = {});
                let m = "";
                for (let n = 0; n < k.length; n++) {
                    const p = k[n];
                    p !== "" && (g[h][p] ? m += "+" + p : g[h][p] = !0)
                }
                m = m.slice(1);
                e[h] = m;
                m !== "" && (c = h)
            }
            g = "";
            if (c > -1) {
                for (f = 0; f < c; f++) g += e[f] + "|";
                g += e[c]
            }
            b.pv_h_ch = g
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        a: {
            c = d.google_ad_client;
            try {
                const m = bf(window);
                let n = m.google_prev_clients;
                n || (n = m.google_prev_clients = {});
                if (c in n) {
                    var l = 1;
                    break a
                }
                n[c] = !0;
                l = 2;
                break a
            } catch {
                l =
                    0;
                break a
            }
            l = void 0
        }
        b.pv = l;
        a.K && U(ys) && (l = a.K, l = Pd() && UU(l) ? l.document.documentElement.lang : void 0, l && (b.tl = l));
        U(zs) && a.pubWin.location.host.endsWith("h5games.usercontent.goog") && (b.cdm = a.pubWin.location.host);
        fV(a.pubWin, b);
        (a = d.google_ad_layout) && KP[a] >= 0 && (b.rplot = KP[a])
    }

    function iV(a, b) {
        var c = a.g;
        a = a.ma;
        TE() && (b.npa = 1);
        J(a, 6) && !c ? .B() && (b.ltd_cs = 1);
        c && (c.B() && (b.gdpr = c.A() ? "1" : "0"), (a = C(c, 1)) && (b.us_privacy = a), (a = C(c, 2)) && (b.gdpr_consent = a), (a = C(c, 4)) && (b.addtl_consent = a), (a = Bi(c, 7)) && (b.tcfe = a), (a = K(c, 11)) && (b.gpp = a), (c = Xh(c, 10, Zg, w(), 0)) && c.length > 0 && (b.gpp_sid = c.join(",")))
    }

    function jV(a, b) {
        const c = a.D;
        iV(a, b);
        ye(LU, (d, e) => {
            b[d] = c[e]
        });
        nP(c) && (a = AP(c), b.fa = a);
        b.pi || c.google_ad_slot == null || (a = Lv(c), a.g != null && (a = Xp(a.getValue()), b.pi = a))
    }

    function kV(a, b) {
        var c = Vj() || iO(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = iO(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function lV(a, b) {
        var c = a.pubWin;
        c !== null && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = iO(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Ae(a.join(""))) : a = 0;
        a !== 0 && (b.ifk = a)
    }

    function mV(a, b) {
        (a = QE()[a.D.google_ad_client]) && (b.psts = a.join())
    }

    function nV(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function oV(a, b) {
        (a = a.pubWin.google_user_agent_client_hint) && (b.uach = kf(a))
    }

    function pV(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                d >= 0 && (b.wsm = d + 1)
            }
        } catch {}
    }

    function qV(a, b) {
        a.D.google_ad_public_floor >= 0 && (b.pubf = a.D.google_ad_public_floor);
        a.D.google_ad_private_floor >= 0 && (b.pvtf = a.D.google_ad_private_floor)
    }

    function rV(a, b) {
        const c = Number(a.D.google_traffic_source);
        c && Object.values(Pa).includes(c) && (b.trt = a.D.google_traffic_source)
    }

    function sV(a, b) {
        var c;
        if (c = !U(cu)) c = a.l ? .label, c = !(U(Gt) && c && c.match(eu(Et)));
        c && ("runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1), c = a.pubWin.navigator, a.pubWin.isSecureContext && "runAdAuction" in c && c.runAdAuction instanceof Function && fQ("run-ad-auction", a.pubWin.document) && (c = new NU, c.set(1, gQ(a.pubWin.navigator)), b.tdf = MU(c)))
    }

    function tV(a, b) {
        if (a.l != null && Pd()) {
            var c = new SU,
                d = Ri(c, 3, a.l.label);
            M(d, 4, a.l.status);
            b.psd = kf(Ti(c))
        }
    }

    function uV(a, b) {
        U(Ut) || fQ("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function vV(a, b) {
        if (typeof a.D.google_privacy_treatments === "string") {
            var c = new Map([
                ["disablePersonalization", 1]
            ]);
            a = a.D.google_privacy_treatments.split(",");
            var d = [];
            for (const [e, f] of c.entries()) c = f, a.includes(e) && d.push(c);
            d.length && (b.ppt = d.join("~"))
        }
    }

    function wV(a, b) {
        if (a.B) {
            a.B.cj && (b.xatf = 1);
            try {
                a.B.Qe ? .disconnect(), a.B.Qe = void 0
            } catch {}
        }
    }

    function ZU(a, b) {
        const c = {};
        jV(a, c);
        oV(a, c);
        hV(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        try {
            var d = sj.history.length
        } catch (e) {
            d = 0
        }
        c.u_his = d;
        c.u_h = sj.screen ? .height;
        c.u_w = sj.screen ? .width;
        c.u_ah = sj.screen ? .availHeight;
        c.u_aw = sj.screen ? .availWidth;
        c.u_cd = sj.screen ? .colorDepth;
        c.u_sd = jO(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        hy(889, () => {
            if (a.K == null) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = mO(a.K, a.ea);
                c.adx && c.adx != -12245933 && c.ady && c.ady != -12245933 || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                lO(a.ea) || (c.adx = -12245933, c.ady = -12245933, a.i |= 32768)
            }
        });
        kV(a, c);
        lV(a, c);
        cV(a, c);
        bV(a, c);
        c.oid = 2;
        mV(a, c);
        c.pvsid = Ze(a.pubWin, W);
        nV(a, c);
        pV(a, c);
        c.uas = WU(a.pubWin);
        (d = RU(a.pubWin)) && (c.nvt = d);
        a.C && (c.scar = a.C);
        a.A instanceof Uint8Array ? c.topics = hf(a.A) : a.A && (c.topics = a.A, c.tps = a.A);
        wV(a, c);
        eV(a, c, b);
        c.fu = a.i;
        c.bc = OU();
        J(a.ma, 9) && (qQ(c), c.creatives = dV(/\b(?:creatives)=([\d,]+)/), c.adgroups = dV(/\b(?:adgroups)=([\d,]+)/), c.adgroups || c.sso) && (c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0);
        Hj() && (c.atl = !0);
        c.bz = cf(a.pubWin);
        qV(a, c);
        rV(a, c);
        sV(a, c);
        tV(a, c);
        uV(a, c);
        vV(a, c);
        U(Ht) && String(a.D.google_special_category_data) === "true" && (c.scd = 1);
        return c
    }
    const $U = /YtLoPri/;
    var xV = class extends N {};

    function yV(a) {
        return oi(a, xV, 15, w())
    }
    var zV = class extends N {},
        AV = Wi(zV);

    function BV() {
        var a = new CV;
        var b = new Nq;
        b = Rh(b, 2, Ig(4));
        b = Rh(b, 8, Ig(1));
        var c = new Tp;
        c = Qi(c, 7, "#dpId");
        b = A(b, 1, c);
        return ri(a, 3, Nq, b)
    }
    var CV = class extends N {},
        DV = Wi(CV);
    var EV = class extends N {};
    var FV = class extends N {},
        GV = Wi(FV);
    var HV = Symbol(),
        IV = Symbol();
    var JV = class {
        constructor(a) {
            this.Ob = a.Ob ? ? [];
            this.Sg = a.Sg ? ? .1;
            this.Ie = !!a.Ie;
            this.Ke = !!a.Ke;
            this.Jd = a.Jd ? ? 0;
            this.Id = a.Id ? ? 0;
            this.Zb = a.Zb ? ? 0;
            this.me = a.me ? ? "";
            this.Qa = a.Qa ? ? "";
            this.ne = a.ne ? ? 15E3;
            this.pe = a.pe ? ? 0;
            this.Je = a.Je ? ? !0;
            this.ye = a.ye || "#0B57D0";
            this.Xc = a.Xc || "#FFFFFF";
            this.Gd = a.Gd ? ? 0;
            this.Vb = !!a.Vb;
            this.Ne = a.Ne ? ? [];
            this.Ue = !!a.Ue;
            this.Fd = a.Fd ? ? 0;
            this.lf = a.lf ? ? !0;
            this.Ze = !!a.Ze;
            this.vf = a.vf ? ? !0
        }
    };

    function KV(a, b) {
        a = Sv(gv([...b], a), a);
        if (a.length !== 0) return a.reduce((c, d) => c.la.g > d.la.g ? c : d)
    };

    function LV(a, b, c, d, e, f, g, h) {
        var k = new Lm,
            l = new lm;
        c = Ri(l, 1, c);
        d = Ri(c, 2, d);
        b = L(d, 3, b);
        k = A(k, 1, b);
        b = new mm;
        b = Ri(b, 2, a.language);
        e = Ri(b, 3, e);
        e = A(k, 2, e);
        g = Pi(e, 3, Math.round(g));
        c = yV(f);
        e = k = b = d = 0;
        for (m of c) d += MV(K(m, 6) !== "") + MV(K(m, 7) !== ""), b += MV(K(m, 6) !== "") + MV(K(m, 7) !== ""), k += MV(K(m, 6) !== ""), e += MV(K(m, 7) !== "");
        var m = new Km;
        m = Mi(m, 1, c.length);
        m = Mi(m, 2, d);
        m = Rh(m, 3, b == null ? b : Mg(b));
        m = Rh(m, 4, k == null ? k : Mg(k));
        m = Rh(m, 5, e == null ? e : Mg(e));
        m = A(g, 6, m);
        if (h.length) f = new rm, f = pi(f, 1, h), B(m, 5, Mm, f);
        else {
            a.g = a.entries.length;
            h = new ym;
            a = a.entries;
            g = h.U;
            e = g[v];
            Zf(e);
            g = ni(g, e, xm, 2, 2, !1, !0);
            k = e = 0;
            if (Array.isArray(a))
                for (var n = 0; n < a.length; n++) b = a[n], g.push(b), (b = Mf(b.U)) && !e++ && (g[v] &= -9), b || k++ || (g[v] &= -17);
            else
                for (n of a) a = n, g.push(a), (a = Mf(a.U)) && !e++ && (g[v] &= -9), a || k++ || (g[v] &= -17);
            f = yV(f).length;
            f = Pi(h, 3, f);
            B(m, 4, Mm, f)
        }
        return m
    }

    function NV(a, b) {
        const c = a.g;
        a.g = a.entries.length;
        var d = new Sm,
            e = new ym;
        a = pi(e, 2, a.entries.slice(c));
        b = yV(b).length;
        b = Pi(a, 3, b);
        return A(d, 1, b)
    }
    var OV = class {
        constructor() {
            this.entries = [];
            this.language = null;
            this.g = 0
        }
    };

    function MV(a) {
        return a ? 1 : 0
    };
    async function PV(a, b) {
        await new Promise(c => void a.win.setTimeout(c, 0));
        a.i = a.g.ra(b) + a.j
    }
    var QV = class {
        constructor(a, b) {
            var c = V(rt);
            this.win = a;
            this.g = b;
            this.j = c;
            this.i = b.ra(2) + c
        }
    };
    var RV = class {
            constructor(a) {
                this.performance = a
            }
            ra() {
                return this.performance.now()
            }
        },
        SV = class {
            ra() {
                return Date.now()
            }
        };
    const TV = [255, 255, 255];

    function UV(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), d.length > 4 ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if (a === "transparent" || a === "") return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function VV(a) {
        var b = getComputedStyle(a);
        if (b.backgroundImage !== "none") return null;
        b = UV(b.backgroundColor);
        var c = WV(b);
        if (c) return c;
        a = (a = a.parentElement) ? VV(a) : TV;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function WV(a) {
        return a[3] === 1 ? [a[0], a[1], a[2]] : null
    };

    function XV(a) {
        return a.Ed > 0 && a.i.j >= a.Ed
    }
    var ZV = class {
        constructor(a, b, c, d) {
            this.qf = b;
            this.re = c;
            this.Ed = d;
            this.g = 0;
            this.i = new YV(a)
        }
    };

    function $V(a, b) {
        b -= a.l;
        for (const c of a.g.keys()) {
            const d = a.g.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.i -= e;
            e > 0 && a.g.set(c, d.slice(e))
        }
    }

    function aW(a, b, c) {
        let d = [];
        a.g.has(b) && (d = a.g.get(b));
        d.push(c);
        a.i++;
        a.g.set(b, d)
    }
    class YV {
        constructor(a) {
            this.l = a;
            this.g = new Map;
            this.i = 0
        }
        get j() {
            return this.i
        }
    };

    function bW(a) {
        u(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function cW(a, b) {
        a = dW(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, "m784-120-252-252q-30 24-69 38t-83 14q-109 0-184.5-75.5t-75.5-184.5q0-109 75.5-184.5t184.5-75.5q109 0 184.5 75.5t75.5 184.5q0 44-14 83t-38 69l252 252-56 56zm-404-280q75 0 127.5-52.5t52.5-127.5q0-75-52.5-127.5t-127.5-52.5q-75 0-127.5 52.5t-52.5 127.5q0 75 52.5 127.5t127.5 52.5z");
        u(a, {
            color: "inherit",
            cursor: "inherit",
            fill: "currentcolor"
        });
        return a
    }

    function eW(a, b, c, d) {
        a = dW(a, "0 -960 960 960", b, b, fW[d]);
        u(a, {
            fill: c || "white",
            cursor: "inherit"
        });
        a.classList.add("google-anno-sa-intent-icon");
        return a
    }

    function gW(a, b, c) {
        a = dW(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        u(a, {
            left: "13px",
            right: "",
            "pointer-events": "initial",
            position: "absolute",
            top: "15px",
            transform: "none",
            fill: c ? "#1A73E8" : "white"
        });
        a.role = "button";
        a.ariaLabel = b;
        a.tabIndex = 0;
        return a
    }
    const fW = {
        [0]: "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z",
        [1]: "m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z",
        [2]: "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
        [3]: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm200-500 54-18 16-54q-32-48-77-82.5T574-786l-54 38v56l160 112Zm-400 0 160-112v-56l-54-38q-54 17-99 51.5T210-652l16 54 54 18Zm-42 308 46-4 30-54-58-174-56-20-40 30q0 65 18 118.5T238-272Zm242 112q26 0 51-4t49-12l28-60-26-44H378l-26 44 28 60q24 8 49 12t51 4Zm-90-200h180l56-160-146-102-144 102 54 160Zm332 88q42-50 60-103.5T800-494l-40-28-56 18-58 174 30 54 46 4Z",
        [4]: "M120-680v-160l160 80-160 80Zm600 0v-160l160 80-160 80Zm-280-40v-160l160 80-160 80Zm0 640q-76-2-141.5-12.5t-114-26.5Q136-135 108-156t-28-44v-360q0-25 31.5-46.5t85.5-38q54-16.5 127-26t156-9.5q83 0 156 9.5t127 26q54 16.5 85.5 38T880-560v360q0 23-28 44t-76.5 37q-48.5 16-114 26.5T520-80v-160h-80v160Zm40-440q97 0 167.5-11.5T760-558q0-5-76-23.5T480-600q-128 0-204 18.5T200-558q42 15 112.5 26.5T480-520ZM360-166v-154h240v154q80-8 131-23.5t69-27.5v-271q-55 22-138 35t-182 13q-99 0-182-13t-138-35v271q18 12 69 27.5T360-166Zm120-161Z",
        [5]: "M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z",
        [6]: "M80-160v-120h80v-440q0-33 23.5-56.5T240-800h600v80H240v440h240v120H80Zm520 0q-17 0-28.5-11.5T560-200v-400q0-17 11.5-28.5T600-640h240q17 0 28.5 11.5T880-600v400q0 17-11.5 28.5T840-160H600Zm40-120h160v-280H640v280Zm0 0h160-160Z",
        [7]: "M400-40v-80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200v-80h80v880h-80ZM200-240h200v-240L200-240Zm360 120v-360l200 240v-520H560v-80h200q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H560Z",
        [8]: "M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm180 180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm180 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z",
        [9]: "M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z"
    };

    function dW(a, b, c, d, e) {
        const f = a.document.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", e);
        e = a.document.createElementNS("http://www.w3.org/2000/svg", "svg");
        u(e, qr(a));
        e.setAttribute("viewBox", b);
        e.setAttribute("width", c);
        e.setAttribute("height", d);
        bW(e);
        e.appendChild(f);
        return e
    };

    function hW(a, b, c, d) {
        const e = document.createElement("DIV");
        e.classList.add("google-anno-skip", "google-anno-sc");
        d = a.getComputedStyle(d).fontSize || "16px";
        var f = e.appendChild,
            g = eW(a, d, b.L.Xc, b.g.get(c) || 0);
        u(g, {
            position: "relative",
            top: "3px"
        });
        const h = document.createElement("SPAN");
        u(h, {
            display: "inline-block",
            "padding-left": b.X() ? "" : "3px",
            "padding-right": b.X() ? "3px" : ""
        });
        h.appendChild(g);
        f.call(e, h);
        f = e.appendChild;
        g = a.document.createElement("SPAN");
        g.appendChild(a.document.createTextNode(c));
        u(g, {
            position: "relative",
            left: b.X() ? "" : "3px",
            right: b.X() ? "3px" : "",
            "padding-left": b.X() ? "6px" : "",
            "padding-right": b.X() ? "" : "6px"
        });
        f.call(e, g);
        u(e, {
            display: "inline-block",
            "border-radius": "20px",
            "padding-left": b.X() ? "7px" : "6px",
            "padding-right": b.X() ? "6px" : "7px",
            "padding-top": "3px",
            "padding-bottom": "3px",
            "border-width": "1px",
            "border-style": "solid",
            color: b.L.Xc,
            "font-family": "Roboto",
            "font-weight": "500",
            "font-size": d,
            "border-color": "#D7D7D7",
            background: b.L.ye,
            cursor: "pointer"
        });
        e.tabIndex = 0;
        e.role = "link";
        e.ariaLabel = c;
        return e
    };

    function iW(a, b) {
        return K(a, 10).replace("TERM", b)
    };
    const jW = [{
        rf: "1907259590",
        Kd: 480,
        Pc: 220
    }, {
        rf: "2837189651",
        Kd: 400,
        Pc: 180
    }, {
        rf: "9211025045",
        Kd: 360,
        Pc: 160
    }, {
        rf: "6584860439",
        Kd: -Infinity,
        Pc: 150
    }];

    function kW(a) {
        return jW.find(b => b.Kd <= a)
    };

    function lW(a, b, c, d, e, f, g, h, k) {
        const l = k(999, a.top, m => {
            m.data.action === "init" && m.data.adChannel === "ShoppingVariant" && mW(a, b, d, c, e, f, g, h)
        });
        g(() => {
            a.top.removeEventListener("message", l)
        })
    }

    function mW(a, b, c, d, e, f, g, h) {
        J(f, 13) || cA(c, d, e);
        const k = b.contentDocument.documentElement,
            l = new ResizeObserver(() => {
                b.height = `${Math.ceil(k.offsetHeight+22)}px`
            });
        l.observe(k);
        const m = h(1066, a, () => {
            const n = k.offsetHeight;
            n && (b.height = `${n+22}px`)
        }, 1E3);
        g(() => {
            l.disconnect();
            a.clearInterval(m)
        })
    }
    var nW = class {
        Xf(a) {
            const b = a.win.document.createElement("iframe"),
                c = a.V,
                d = new dA(b, K(c, 16), "anno-cse", a.Jc.replace("ca", "partner"), "ShoppingVariant", a.win.location, K(c, 7), iW(c, a.Ha), a.L.Ob.filter(e => e !== 42), !1, void 0, !0, void 0, !0, a.Jc);
            d.J();
            lW(a.win, b, a.Ha, d, a.Oj, c, a.Fj, a.Yd, a.ke);
            return b
        }
    };
    var oW = class {
        Xf(a) {
            const b = a.na ? .95 * a.win.innerHeight - 30 : a.win.innerHeight;
            var c = a.Ha;
            var d = a.Ei || "",
                e = a.Jc,
                f = a.Ai,
                g = a.X,
                h = !!J(a.V, 13),
                k = a.L.Ne.join(",");
            const l = a.L.lf;
            var m = wz;
            g = "<style>#gda-search-term {height: 24px; font-size: 18px; font-weight: 500; color: #202124; font-family: 'Google Sans Text'; padding-bottom: 6px;" + (g ? "padding-right: 16px;" : "padding-left: 16px;") + '}</style><div id="gda-search-term">' + uz(c) + "</div>";
            h ? d = "" : (d = "<script data-ad-intent-query=" + Hz(c) + " data-ad-intent-qetid=" +
                Hz(d) + " data-ad-intent-eids=" + Hz(k) + ' async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=', k = encodeURIComponent(String(e)), Kz.lastIndex = 0, k = Kz.test(k) ? k.replace(Kz, Lz) : k, d = d + k + '" crossorigin="anonymous">\x3c/script>');
            c = m(g + d + '<ins class="adsbygoogle" style="display:inline-block;width:' + Fz(X(f)) + "px;height:" + Fz(X(b - 30)) + 'px" data-ad-client="' + Fz(e) + '"></ins>' + (l ? "<script>(adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;\x3c/script>" : "") + (h ? "<script>const el = document.querySelector('ins.adsbygoogle'); el.dir = 'ltr'; el.style.backgroundColor = 'lightblue'; el.style.fontSize = '25px'; el.style.textDecoration = 'none'; el.textContent = \"Loading display ads inside this slot for query = " +
                String(c).replace(Sz, Pz) + ' and " + "property code = ' + String(e).replace(Sz, Pz) + '";\x3c/script>' : ""));
            c = dd({
                dir: a.X ? "rtl" : "ltr",
                lang: K(a.V, 7),
                style: "margin:0px;height:100%;padding-top: 0px;overflow: hidden;"
            }, rz(c));
            a = a.win.document.createElement("IFRAME");
            u(a, {
                border: "0",
                width: "100%",
                height: b + "px"
            });
            a.srcdoc = Lc(c);
            return a
        }
    };
    const pW = new class {
        constructor() {
            this.g = []
        }
    };
    let qW = !1;

    function rW(a) {
        sW(a.config, 1065, a.win, () => {
            if (!a.g) {
                var b = new Xm;
                b = Pi(b, 1, a.i);
                var c = new Wm;
                b = B(b, 2, Ym, c);
                tW(a.config.M, b)
            }
        }, 1E4)
    }
    class uW {
        constructor(a, b, c) {
            this.win = a;
            this.config = b;
            this.i = c;
            this.g = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function vW(a) {
        pW.g.push(a)
    }

    function wW(a, b, c, d, e, f, g = null) {
        const h = kW(a.document.body.clientWidth);
        d = b.na ? xW(a, b, d, e, f, g) : yW(a, b, d, h, e, f, g);
        Ko(d.isVisible(), !1, () => {
            qW = !1;
            for (const l of pW.g) l();
            pW.g.length = 0
        });
        d.show({
            hg: !0
        });
        qW = !0;
        const k = new uW(a, b, c);
        rW(k);
        pW.g.push(() => {
            var l = b.M;
            var m = new Xm;
            m = Pi(m, 1, c);
            var n = new Vm;
            m = B(m, 3, Ym, n);
            tW(l, m);
            k.g = !0
        })
    }

    function xW(a, b, c, d, e, f) {
        d = zW(a, b, c, d, e, f, a.innerWidth);
        return HB(a, d, {
            Tg: .95,
            pg: .95,
            zIndex: 2147483647,
            oc: !0,
            Ge: "adpub-drawer-root",
            Fe: !1,
            Ma: !0,
            Le: new R(iW(b.V, c))
        })
    }

    function yW(a, b, c, d, e, f, g) {
        a: {
            var h = b.L,
                k = a.document.body.clientWidth;
            if (h.Gd) d = Math.min(k, h.Gd);
            else {
                h = k * .9;
                for (k = k <= 768 ? 3 : 4; k >= 1; k--) {
                    const l = d.Pc * k + 42;
                    if (l <= h) {
                        d = l;
                        break a
                    }
                }
                d = h
            }
        }
        e = zW(a, b, c, e, f, g, d);
        return RA(a, e, {
            md: `${d}px`,
            jd: b.X(),
            Yc: K(b.V, 14),
            zIndex: 2147483647,
            oc: !0,
            jg: !0,
            Ge: "adpub-drawer-root",
            Fe: !1,
            Ma: !0,
            Le: new R(iW(b.V, c))
        })
    }

    function zW(a, b, c, d, e, f, g) {
        let h;
        e === HV ? b.L.Vb ? h = new oW : h = new nW : h = e;
        return h.Xf({
            win: a,
            Ha: c,
            Oj: d,
            L: b.L,
            na: b.na,
            Jc: b.Jc,
            X: b.X(),
            V: b.V,
            Ei: f,
            Ai: g,
            ke: b.ke.bind(b),
            Yd: b.Yd.bind(b),
            Fj: vW
        })
    };

    function AW(a, b, c, d) {
        a = wm(vm(new xm, a), 1);
        b = Ri(a, 4, b);
        c = Qi(b, 11, c);
        return Mi(c, 12, d)
    }

    function BW(a, b, c) {
        b = b.getBoundingClientRect();
        a = wm(vm(new xm, a), 3);
        c = Ri(a, 4, c);
        c = Ni(c, 6, Math.round(b.x));
        return Ni(c, 7, Math.round(b.y))
    }

    function CW(a) {
        a = UV(a);
        var b = new tm;
        b = Ni(b, 1, a[0]);
        b = Ni(b, 2, a[1]);
        b = Ni(b, 3, a[2]);
        return fi(b, 4, Dg(a[3]), 0)
    };
    const DW = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function EW(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return a === "" || DW.test(a)
        }
    };

    function FW(a, b) {
        const c = new GW(b);
        for (const d of a) K(d, 5) && Xh(d, 3, dh, w()).forEach(e => {
            HW(c, e, e)
        });
        IW(c);
        return new JW(c)
    }

    function KW(a, b) {
        b = a.match(b);
        a = new Map;
        for (const c of b)
            if (b = c.j, a.has(b)) {
                const d = a.get(b);
                c.length > d.length && a.set(b, c)
            } else a.set(b, c);
        return Array.from(a.values())
    }
    var JW = class {
        constructor(a) {
            this.g = a
        }
        isEmpty() {
            return this.g.isEmpty()
        }
        match(a) {
            return this.g.match(a)
        }
    };

    function HW(a, b, c) {
        const d = a.i.has(c) ? a.i.get(c) : a.l++;
        a.i.set(c, d);
        a.A.set(d, c);
        c = 0;
        for (let e = 0; e < b.length; e++) {
            const f = b.charCodeAt(e);
            a.g[c].contains(f) || (a.g.push(new LW), a.g[a.size].A = c, a.g[a.size].C = f, a.g[c].j.set(f, a.size), a.size++);
            c = a.g[c].j.get(f)
        }
        a.g[c].l = !0;
        a.g[c].B = d;
        a.g[c].G = a.j.length;
        a.j.push(b.length)
    }

    function IW(a) {
        const b = [];
        for (b.push(0); b.length > 0;) {
            const f = b.shift();
            var c = a,
                d = c.g[f];
            if (f === 0) d.g = 0, d.i = 0;
            else if (d.A === 0) d.g = 0, d.i = d.l ? f : c.g[c.g[f].g].i;
            else {
                d = c.g[c.g[f].A].g;
                for (var e = c.g[f].C;;) {
                    if (c.g[d].contains(e)) {
                        c.g[f].g = c.g[d].j.get(e);
                        break
                    }
                    if (d === 0) {
                        c.g[f].g = 0;
                        break
                    }
                    d = c.g[d].g
                }
                c.g[f].i = c.g[f].l ? f : c.g[c.g[f].g].i
            }
            for (const g of a.g[f].ta) b.push(g)
        }
    }
    class GW {
        constructor(a) {
            this.B = a;
            this.size = 1;
            this.g = [new LW];
            this.j = [];
            this.i = new Map;
            this.A = new Map;
            this.l = 0
        }
        isEmpty() {
            return this.l === 0
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let g = 0; g < a.length; g++) {
                for (;;) {
                    var d = a.charCodeAt(g),
                        e = this.g[b];
                    if (e.contains(d)) {
                        b = e.j.get(d);
                        break
                    }
                    if (b === 0) break;
                    b = e.g
                }
                let h = b;
                for (;;) {
                    h = this.g[h].i;
                    if (h === 0) break;
                    const k = g + 1 - this.j[this.g[h].G],
                        l = g;
                    d = a;
                    e = l;
                    var f = this.B;
                    EW(d.charAt(k - 1), f) && EW(d.charAt(e + 1), f) && c.push(new MW(k, l, this.A.get(this.g[h].B)));
                    h = this.g[h].g
                }
            }
            return c
        }
    }
    class LW {
        constructor() {
            this.j = new Map;
            this.I = !1;
            this.ia = this.H = this.F = this.ca = this.O = this.R = -1
        }
        contains(a) {
            return this.j.has(a)
        }
        set A(a) {
            this.R = a
        }
        get A() {
            return this.R
        }
        set C(a) {
            this.O = a
        }
        get C() {
            return this.O
        }
        set l(a) {
            this.I = a
        }
        get l() {
            return this.I
        }
        set B(a) {
            this.H = a
        }
        get B() {
            return this.H
        }
        set g(a) {
            this.ca = a
        }
        get g() {
            return this.ca
        }
        set i(a) {
            this.F = a
        }
        get i() {
            return this.F
        }
        set G(a) {
            this.ia = a
        }
        get G() {
            return this.ia
        }
        get ta() {
            return this.j.values()
        }
    }
    var MW = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.A = c
        }
        get j() {
            return this.i
        }
        get l() {
            return this.g
        }
        get Ha() {
            return this.A
        }
        get length() {
            return this.g - this.i
        }
    };
    async function NW(a, b, c, d, e) {
        const f = FW(yV(b.V), b.i);
        if (!f.isEmpty()) {
            var g = new Map;
            for (const h of yV(b.V).filter(k => K(k, 5))) Xh(h, 3, dh, w()).forEach(k => {
                g.set(k, K(h, 1))
            });
            await OW(a, a.document.body, b, f, g, new Set, c, d, b.L.Fd ? new ZV(0, 0, 0, b.L.Fd) : null, e)
        }
    }
    async function OW(a, b, c, d, e, f, g, h, k, l) {
        g.g.ra(9) >= g.i && await PV(g, 10);
        if (b.nodeType !== Node.ELEMENT_NODE || !b.classList ? .contains("google-anno-skip"))
            if (c.L.Ue && f.size && b.nodeType === Node.ELEMENT_NODE && PW(a, b) && b.parentElement && QW(a, f, c, h, b.parentElement, b, k), b.nodeType === Node.TEXT_NODE && b.textContent) KW(d, b.textContent).map(m => e.get(m.Ha)).filter(m => !!m).forEach(m => void f.add(m));
            else {
                for (const m of b.childNodes) await OW(a, m, c, d, e, f, g, h, k, l);
                f.size && b.nodeType === Node.ELEMENT_NODE && ["block", "table-cell"].includes(a.getComputedStyle(b).display) &&
                    QW(a, f, c, h, b, null, k)
            }
    }

    function QW(a, b, c, d, e, f, g) {
        for (const h of b) {
            if (g && XV(g)) return;
            const k = BW(c.M.Md++, f ? ? e, h);
            d.entries.push(Gh(k));
            g && aW(g.i, h, g.g);
            if (J(c.V, 17)) continue;
            const l = hW(a, c, h, e),
                m = RW(l, c, Gi(k));
            SW(c, 999, l, n => {
                try {
                    if (c.Ta === IV) return !1;
                    var p = c.M,
                        r = Pm(Nm(h), Gi(k));
                    var y = Oi(r, 7, m.i);
                    const D = TW(p, y);
                    wW(a, c, D, h, c.A.get(h) || "", c.Ta);
                    return !1
                } finally {
                    n.preventDefault()
                }
            });
            e.insertBefore(l, f)
        }
        b.clear()
    }

    function PW(a, b) {
        return ["BR", "IMG", "TABLE"].includes(b.tagName) || a.getComputedStyle(b).display === "block"
    }
    class UW {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function RW(a, b, c) {
        const d = new UW;
        VW(b, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = c;
                    e = b.M;
                    var g = new gm;
                    g = f = fi(g, 1, ah(f), "0");
                    f = e.handle;
                    var h = WW(e, 17);
                    g = B(h, 16, $m, g);
                    e = f.call(e, g);
                    d.g = e
                } else d.g && (e = b.M, f = new fm, g = f = Pi(f, 1, d.g), f = e.handle, h = WW(e, 18), g = B(h, 17, $m, g), f.call(e, g), d.g = null)
        }).observe(a);
        return d
    };

    function XW(a, b, c, d, e, f) {
        if (!a.g) {
            var g = b.document.createElement("span");
            g.appendChild(cW(b, "12px"));
            g.appendChild(b.document.createTextNode(d));
            YD(b, c || null, {
                informationText: g
            }, e, f ? h => {
                var k = f.handle,
                    l = WW(f, 20);
                h = B(l, 11, $m, h);
                k.call(f, h)
            } : f);
            a.g = !0
        }
    }
    var YW = class {
        constructor() {
            this.g = !1
        }
    };

    function ZW(a, b) {
        const c = b.na === b.X;
        var d = $W(a, b, c);
        if (!d) return null;
        d = d.position.od();
        a = aX(a, d, b, function(f) {
            f = f.getBoundingClientRect();
            return c ? b.T - f.right : f.left
        });
        if (!a || a - 16 < 200) return null;
        const e = b.T;
        return {
            sa: c ? e - a : 16,
            Ba: c ? 16 : e - a,
            ga: d
        }
    }

    function bX(a, b) {
        const c = Vn(a),
            d = P(a);
        return rC(new vC(a), new Kj(d - b.ga - 50, c - b.Ba, d - b.ga, b.sa)).size > 0
    }

    function $W(a, b, c) {
        b = Math.floor(b.W * .3);
        return b < 66 ? null : RC(a, {
            Tb: c ? XC({
                ga: 16,
                Ba: 16
            }) : VC({
                ga: 16,
                sa: 16
            }),
            bf: b - 66,
            Ab: 50,
            ef: 50,
            Dd: b,
            mb: 16
        }, [a.document.body]).te
    }

    function aX(a, b, c, d) {
        a = c.na ? cX(a, b, c) : dX(a, b, c);
        b = c.T;
        let e = c.na ? b : b * .35;
        a.forEach(f => {
            e = Math.min(e, d(f))
        });
        return e < 16 ? null : e - 16
    }

    function cX(a, b, c) {
        const d = c.W;
        return rC(new vC(a), new Kj(d - b - 50, c.T - 16, d - b, 16))
    }

    function dX(a, b, c) {
        const d = c.W,
            e = c.T;
        c = c.X;
        return rC(new vC(a), new Kj(d - b - 50, (c ? e * .35 : e) - 16, d - b, (c ? 16 : e * .65) + 16))
    }

    function eX(a, b, c) {
        const d = a.X;
        return {
            sa: d ? fX(a, b, c) : c,
            Ba: d ? c : fX(a, b, c),
            ga: 16
        }
    }

    function fX(a, b, c) {
        const d = a.T;
        return a.na ? d - b + 16 : Math.max(d - c - d * .35, d - b + 16)
    }

    function gX(a, b) {
        const c = b.X,
            d = b.T;
        a = b.na ? cX(a, 16, b) : dX(a, 16, b);
        return Array.from(a).map(e => new QC(c ? d - e.getBoundingClientRect().right : e.getBoundingClientRect().left, c ? d - e.getBoundingClientRect().left : e.getBoundingClientRect().right)).sort((e, f) => e.start - f.start)
    };

    function hX(a, b, c, d, e, f, g, h, k) {
        u(c, {
            width: "50px",
            bottom: g ? g.ga + "px" : "16px",
            left: b.X() === b.na ? "" : g ? g.sa + "px" : "16px",
            right: b.X() === b.na ? g ? g.Ba + "px" : "16px" : ""
        });
        c.role = "button";
        c.ariaLabel = K(b.V, 20);
        u(e, {
            display: "none"
        });
        u(d, {
            display: "none"
        });
        const l = eW(a, "20px", b.L.Qa || "inherit", b.g.get(k.xa) || 0);
        a = a.document.createElement("SPAN");
        u(a, {
            display: "inline-block",
            position: "absolute",
            top: "14px",
            left: "15px",
            cursor: "pointer"
        });
        u(l, {
            cursor: "pointer"
        });
        c.appendChild(a);
        a.appendChild(l);
        SW(b, 1064, c, m => {
            h ? .();
            l.remove();
            u(c, {
                bottom: g ? g.ga + "px" : "16px",
                left: g ? g.sa + "px" : b.na ? "16px" : b.X() ? "16px" : "65%",
                right: g ? g.Ba + "px" : iX(b),
                width: ""
            });
            c.role = "";
            c.ariaLabel = "";
            u(e, {
                display: ""
            });
            u(d, {
                display: "flex"
            });
            f.focus();
            m.preventDefault();
            return !1
        });
        c.focus()
    }

    function iX(a) {
        return a.X() ? a.na ? "16px" : "65%" : "16px"
    }

    function jX(a) {
        return {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (a.X(), "50px"),
            right: a.X() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: a.L.Qa || "#FFFFFF",
            cursor: "pointer",
            transition: "width 5s"
        }
    }

    function kX(a) {
        return {
            "margin-left": a ? "6px" : "4px",
            "margin-right": a ? "4px" : "6px",
            "margin-top": "12px"
        }
    }

    function lX(a, b, c) {
        a.tabIndex = 0;
        a.role = "link";
        a.ariaLive = "polite";
        a.ariaLabel = c.replace("TERM", b)
    };

    function mX(a, b, c, d, e, f, g, h, k) {
        const l = document.createElement("SPAN");
        u(l, qr(a));
        l.id = "gda";
        l.appendChild(gW(a, K(b.V, 18), b.L.Qa));
        SW(b, 1064, l, m => {
            g ? .();
            hX(a, b, c, d, l, e, f, h, k);
            m.preventDefault();
            m.stopImmediatePropagation();
            return !1
        });
        return l
    }

    function nX(a, b, c, d) {
        const e = document.createElement("SPAN");
        u(e, qr(a));
        bW(e);
        u(e, jX(b));
        b.na || u(e, {
            "justify-content": ""
        });
        const f = eW(a, "20px", b.L.Qa, b.g.get(d.xa) || 0),
            g = document.createElement("SPAN");
        u(g, {
            display: "inline-block",
            cursor: "inherit"
        });
        u(g, kX(b.X()));
        e.appendChild(g);
        g.appendChild(f);
        c.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        lX(c, d.xa, K(b.V, 19));
        u(c, {
            height: "40px",
            "align-items": "center",
            "line-height": "44px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent",
            color: b.L.Qa || "inherit"
        });
        SW(b, 999, e, h => {
            h.preventDefault();
            if (b.Ta !== IV && (d.Qf ? ? 0) + 800 <= b.ra(25)) {
                h = d.xa;
                const m = b.l.get(h) || "";
                var k = b.M;
                var l = Pm(Nm(h), d.Bc);
                l = Oi(l, 3, d.xd);
                k = TW(k, l);
                wW(a, b, k, h, m, b.Ta, b.L.Vb ? b.j.get(h) || "" : null)
            }
            return !1
        });
        e.appendChild(c);
        return e
    }

    function oX(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                c.type === "attributes" && a.document.body.style.paddingBottom === "0px" && u(a.document.body, {
                    "padding-bottom": "66px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function pX(a, b, c, d, e, f) {
        var g = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/);
        u(a.document.body, {
            "padding-bottom": (g && g.length ? Number(g[0]) : 0) + 66 + "px"
        });
        oX(a);
        g = document.createElement("div");
        u(g, qr(a));
        g.id = "google-anno-sa";
        g.dir = b.X() ? "rtl" : "ltr";
        g.tabIndex = 0;
        var h = {
            background: b.L.me || "#1A73E8",
            "border-style": "solid",
            bottom: d ? d.ga + "px" : "16px",
            "border-radius": "16px",
            height: "50px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: d ? d.sa + "px" : b.na ? "16px" : b.X() ? "16px" : "65%",
            right: d ?
                d.Ba + "px" : iX(b),
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        };
        u(g, h);
        u(g, {
            fill: "white"
        });
        const k = document.createElement("SPAN");
        u(k, qr(a));
        u(k, {
            cursor: "inherit"
        });
        h = nX(a, b, k, c);
        a = mX(a, b, g, h, k, d, e, f, c);
        g.appendChild(h);
        g.appendChild(a);
        return g
    }

    function qX(a, b, c, d, e) {
        var f = c.getElementsByClassName("google-anno-sa-qtx")[0];
        f instanceof HTMLElement && (f.innerText = a.xa);
        if ((d.g.get(e) || 0) !== (d.g.get(a.xa) || 0)) {
            b = eW(b, "20px", d.L.Qa, d.g.get(a.xa) || 0);
            for (var g of c.getElementsByClassName("google-anno-sa-intent-icon")) g.replaceWith(b)
        }
        c = a.xa;
        g = K(d.V, 19);
        f.ariaLabel = g.replace("TERM", c);
        d = d.M;
        f = new km;
        f = Rh(f, 2, ah(a.Bc));
        f = Ri(f, 4, a.xa);
        a = d.handle;
        c = WW(d, 15);
        f = B(c, 6, $m, f);
        return a.call(d, f)
    }

    function rX(a, b, c, d) {
        if (bX(b, d)) return null;
        a.Qf = c.ra(24);
        d = pX(b, c, a, d, () => {
            var f = c.M;
            var g = new hm;
            g = fi(g, 3, ah(a.Bc), "0");
            var h = Ri(g, 2, a.xa);
            g = f.handle;
            var k = WW(f, 22);
            h = B(k, 12, $m, h);
            return g.call(f, h)
        }, () => {
            var f = c.M,
                g = new im,
                h = f.handle,
                k = WW(f, 23);
            g = B(k, 13, $m, g);
            return h.call(f, g)
        });
        const e = qX(a, b, d, c, a.xa);
        b.document.body.appendChild(d);
        return e
    }

    function sX(a, b, c, d, e, f, g) {
        if (a.xa !== e || a.Bc !== d || a.g !== f) {
            if (a.xd !== null) {
                var h = a.xd,
                    k = c.M;
                var l = new jm;
                l = Pi(l, 1, h);
                h = k.handle;
                var m = WW(k, 16);
                l = B(m, 7, $m, l);
                h.call(k, l)
            }
            k = a.xa;
            a.xa = e;
            a.Bc = d;
            a.g = f;
            J(c.V, 17) || (d = b.document.getElementById("google-anno-sa"), a.xd = d ? qX(a, b, d, c, k) : rX(a, b, c, g))
        }
    }
    var tX = class {
        constructor() {
            this.xa = "";
            this.Bc = null;
            this.g = "";
            this.Qf = this.xd = null
        }
    };

    function uX(a, b) {
        a.i >= a.g.length && (a.i = 0);
        if (qW) pW.g.push(() => void uX(a, b));
        else {
            var c = a.g[a.i++];
            a.j = !1;
            sX(a.A, a.win, a.config, c.g, c.Ha, c.i, a.l);
            sW(a.config, 898, a.win, () => void uX(a, b), a.yf)
        }
    }
    var vX = class {
        constructor(a, b, c) {
            var d = new tX;
            this.win = a;
            this.config = b;
            this.A = d;
            this.l = c;
            this.g = [];
            this.j = !0;
            this.i = 0;
            this.yf = b.params.yf
        }
    };
    class wX {
        constructor(a, b, c) {
            this.g = a;
            this.Ha = b;
            this.i = c
        }
    };
    const xX = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function yX(a, b, c, d, e) {
        d.g.ra(5) >= d.i && await PV(d, 6);
        if (!c.L.Ie) {
            const f = yV(c.V);
            f.length && zX(a, b, c, e, f)
        }
        c.L.Je && !AX(a) || await c.pa(898, NW(a, c, d, e, b));
        c.L.Ke || await BX(a, c, () => new YW, d, e)
    }

    function AX(a) {
        try {
            const b = a.location ? .href ? .match(/goog_fac=1/);
            return b !== null && b !== void 0
        } catch (b) {
            return !1
        }
    }
    async function BX(a, b, c, d, e) {
        var f = yV(b.V);
        var g = new GW(b.i);
        for (const h of f) K(h, 6) !== "" && (f = K(h, 1), HW(g, f, f));
        IW(g);
        g = new JW(g);
        g.isEmpty() || await b.pa(898, CX(a, b, d, e, g, new ZV(b.params.Zj, b.params.qf, b.params.re, b.params.Ed), c()))
    }
    async function CX(a, b, c, d, e, f, g) {
        var h = a.document.body;
        if (J(b.V, 17) || x(b.V, Fq, 21))
            for (; h;) {
                c.g.ra(7) >= c.i && await PV(c, 8);
                if (h.nodeType === Node.TEXT_NODE && h.textContent !== "" && h.parentElement) {
                    var k = h.parentElement;
                    a: {
                        var l = a;
                        var m = b,
                            n = k,
                            p = h.textContent,
                            r = d,
                            y = e,
                            D = f;
                        const fb = [];b: {
                            var E = p;
                            switch (m.i) {
                                case 1:
                                    var G = Array(E.length),
                                        H = 0;
                                    for (var z = 0; z < E.length; z++) DW.test(E[z]) || H++, G[z] = H;
                                    E = G;
                                    break b;
                                default:
                                    G = Array(E.length);
                                    for (z = H = 0; z < E.length;) {
                                        for (;
                                            /\s/.test(E[z]);) G[z] = H, z++;
                                        for (var I = !1; z < E.length &&
                                            !/\s/.test(E[z]);) I = !0, G[z] = H, z++;
                                        I && (H++, G[z - 1] = H)
                                    }
                                    E = G
                            }
                        }
                        y = p.includes("\u00bb") ? [] : KW(y, p);H = -1;
                        for (const gb of y)
                            if (y = gb.j, G = gb.l, !(y < H)) {
                                z = D;
                                var F = gb.Ha;
                                $V(z.i, z.g + E[y]);
                                I = z;
                                var ba = I.i;
                                if ((ba.g.has(F) ? ba.g.get(F).length : 0) < I.qf && z.i.j < z.re) {
                                    z = l.getComputedStyle(n);
                                    I = z.fontSize.match(/\d+/);
                                    if (!(I && Number(I[0]) >= 12 && Number(I[0]) <= 22 && ab(xX, z.display))) {
                                        D.g += E[E.length - 1];
                                        l = [];
                                        break a
                                    }
                                    H += 1;
                                    H < y && fb.push(l.document.createTextNode(p.substring(H, y)));
                                    H = p.substring(y, G + 1);
                                    z = p;
                                    I = y;
                                    ba = G + 1;
                                    ba = z.substring(Math.max(I -
                                        30, 0), I) + "~~" + z.substring(ba, Math.min(ba + 30, z.length));
                                    I = l;
                                    var bb = m.M.Md++;
                                    z = n;
                                    var xa = H,
                                        fa = ba,
                                        la = gb.Ha;
                                    F = E[y];
                                    ba = z.getBoundingClientRect();
                                    bb = wm(vm(new xm, bb), 2);
                                    xa = Ri(bb, 2, xa);
                                    xa = Ri(xa, 3, fa);
                                    la = Ri(xa, 4, la);
                                    F = Ni(la, 5, F);
                                    F = Ni(F, 6, Math.round(ba.x));
                                    ba = Ni(F, 7, Math.round(ba.y));
                                    I = I.getComputedStyle(z);
                                    F = new um;
                                    F = Ri(F, 1, I.fontFamily);
                                    la = CW(I.color);
                                    F = A(F, 7, la);
                                    la = CW(I.backgroundColor);
                                    F = A(F, 8, la);
                                    la = I.fontSize.match(/^(\d+(\.\d+)?)px$/);
                                    F = Ni(F, 4, la ? Math.round(Number(la[1])) : 0);
                                    la = Math.round(Number(I.fontWeight));
                                    isNaN(la) || la === 400 || Ni(F, 5, la);
                                    I.textDecorationLine !== "none" && Ri(F, 6, I.textDecorationLine);
                                    I = A(ba, 8, F);
                                    ba = [];
                                    for (xa = z; xa && ba.length < 20;) {
                                        z = ba;
                                        F = z.push;
                                        la = xa;
                                        fa = new sm;
                                        fa = Ri(fa, 1, la.tagName);
                                        la.className !== "" && ei(fa, 2, la.className.split(" "), bh);
                                        F.call(z, fa);
                                        if (xa.tagName === "BODY") break;
                                        xa = xa.parentElement
                                    }
                                    z = ba.reverse();
                                    z = pi(I, 9, z);
                                    r.entries.push(Gh(z));
                                    fb.push(DX(l, m, Gi(z), gb.Ha, H, n));
                                    aW(D.i, gb.Ha, D.g + E[y]);
                                    H = G;
                                    if (XV(D)) break
                                }
                            }
                        m = H + 1;m !== 0 && m < p.length && fb.push(l.document.createTextNode(p.substring(m)));
                        D.g += E[E.length - 1];l = fb
                    }
                    if (l.length && !J(b.V, 17)) {
                        !b.L.Vb && XW(g, a, b.params.gg ? KV(a, b.params.gg) : void 0, K(b.V, 3), x(b.V, Fq, 21).i(), b.M);
                        for (const fb of l) k.insertBefore(fb, h), EX(fb);
                        k.removeChild(h);
                        for (h = l[l.length - 1]; h.lastChild;) h = h.lastChild;
                        if (XV(f)) break
                    }
                }
                a: {
                    k = f;l = b.i;
                    if (h.firstChild && (h.nodeType !== Node.ELEMENT_NODE ? 0 : !h.classList ? .contains("google-anno-skip") && h.offsetHeight)) {
                        b: {
                            switch (h.tagName ? .toUpperCase ? .()) {
                                case "IFRAME":
                                case "A":
                                case "AUDIO":
                                case "BUTTON":
                                case "CANVAS":
                                case "CITE":
                                case "CODE":
                                case "EMBED":
                                case "FOOTER":
                                case "FORM":
                                case "KBD":
                                case "LABEL":
                                case "OBJECT":
                                case "PRE":
                                case "SAMP":
                                case "SCRIPT":
                                case "SELECT":
                                case "STYLE":
                                case "SUB":
                                case "SUPER":
                                case "SVG":
                                case "TEXTAREA":
                                case "TIME":
                                case "VAR":
                                case "VIDEO":
                                case null:
                                    p = !1;
                                    break b
                            }
                            p = !(h.className.toUpperCase ? .() ? .includes("CRUMB") || h.id.toUpperCase ? .() ? .includes("CRUMB"))
                        }
                        if (p) {
                            h = h.firstChild;
                            break a
                        }
                        if (h.textContent ? .length) {
                            b: switch (p = h.textContent, l) {
                                case 1:
                                    l = p;
                                    p = 0;
                                    for (D = l.length - 1; D >= 0; D--) DW.test(l[D]) || p++;
                                    l = p;
                                    break b;
                                default:
                                    l = p.trim(), l = l === "" ? 0 : l.split(/\s+/).length
                            }
                            $V(k.i, k.g + l)
                        }
                    }
                    for (;;) {
                        if (h.nextSibling) {
                            h = h.nextSibling;
                            break a
                        }
                        if (!h.parentNode) {
                            h = null;
                            break a
                        }
                        h = h.parentNode
                    }
                    h = void 0
                }
            }
    }

    function FX(a, b) {
        b = {
            X: b.X(),
            na: b.na,
            T: Vn(a),
            W: P(a)
        };
        if (b.W >= 400) {
            var c;
            if ((c = ZW(a, b)) != null) var d = c;
            else a: {
                c = b.T;
                var e = gX(a, b);a = 16;
                for (d of e) {
                    e = d.start;
                    const f = d.end;
                    if (e > a) {
                        if (e - a - 16 >= 200) {
                            d = eX(b, e, a);
                            break a
                        }
                        a = f + 16
                    } else f >= a && (a = f + 16)
                }
                d = c - a - 16 >= 200 ? eX(b, c, a) : null
            }
        } else d = null;
        return d
    }

    function zX(a, b, c, d, e) {
        function f() {
            return h ? ? (h = c.Yd(898, a, () => {
                g || (a.clearInterval(h), g = !0, GX(a, b, c, d, e), HX(c.M, NV(d, c.V)))
            }, c.L.Zb))
        }
        let g = !1,
            h = void 0;
        const k = IX(c, a, () => {
            a.scrollY <= c.L.pe || g || (c.L.Zb > 0 && !FX(a, c) ? h = f() : (g = !0, a.removeEventListener("scroll", k), GX(a, b, c, d, e), HX(c.M, NV(d, c.V))))
        });
        sW(c, 898, a, () => {
            g || (c.L.Zb > 0 && !FX(a, c) ? h = f() : (g = !0, GX(a, b, c, d, e), HX(c.M, NV(d, c.V))))
        }, c.L.ne)
    }

    function GX(a, b, c, d, e) {
        if (c.L.Ze) JX(a, b, c, d, e);
        else if (e = e.filter(h => K(h, 7).length).map(h => K(h, 1)), e.length !== 0) {
            var f = FX(a, c);
            if (f) {
                var g = new vX(a, c, f);
                e.forEach(h => {
                    var k = AW(c.M.Md++, h);
                    d.entries.push(Gh(k));
                    k = Gi(k);
                    g.g.push(new wX(k, h, h));
                    g.j && uX(g, b)
                })
            }
        }
    }

    function JX(a, b, c, d, e) {
        e = e.filter(h => K(h, 7).length);
        if (e.length) {
            var f = FX(a, c);
            if (f) {
                var g = new vX(a, c, f);
                e.forEach(h => {
                    var k = c.M.Md++,
                        l = K(h, 1);
                    const m = C(h, 2);
                    k = AW(k, l, m == null ? void 0 : m, Ii(h, 4));
                    d.entries.push(Gh(k));
                    k = Gi(k);
                    l = K(h, 1);
                    h = K(h, 1);
                    g.g.push(new wX(k, l, h));
                    g.j && uX(g, b)
                })
            }
        }
    }

    function EX(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if (a.tagName === "A") {
                var b = WV(UV(getComputedStyle(a.parentElement).color)),
                    c = WV(UV(getComputedStyle(a).color));
                var d = VV(a);
                if (d = b && c && d ? LM(c, d) < Math.min(LM(b, d), 2.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = b < 16 ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    u(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) EX(a.children[b])
        }
    }
    class KX {
        constructor() {
            this.g = null
        }
        get i() {
            return this.g
        }
    }

    function DX(a, b, c, d, e, f) {
        const g = a.document.createElement("SPAN");
        g.className = "google-anno-t";
        bW(g);
        u(g, {
            "text-decoration": "underline"
        });
        u(g, {
            "text-decoration-style": "dotted"
        });
        u(g, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        u(g, {
            color: "inherit",
            "font-family": "inherit",
            "font-size": "inherit",
            "font-style": "inherit",
            "font-weight": "inherit"
        });
        g.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        bW(e);
        u(e, {
            "text-decoration": "none",
            fill: "currentColor"
        });
        sd(e);
        e.className = "google-anno";
        b.L.vf && (e.appendChild(cW(a, a.getComputedStyle(f).fontSize)), e.appendChild(a.document.createTextNode("\u00a0")));
        e.appendChild(g);
        const h = LX(b, c, e);
        SW(b, 999, e, k => {
            try {
                if (b.Ta === IV) return !1;
                var l = b.M,
                    m = Pm(Nm(d), c);
                var n = Oi(m, 2, h.i);
                const p = TW(l, n);
                wW(a, b, p, d, b.B.get(d) || "", b.Ta, b.L.Vb ? b.j.get(d) || "" : null);
                return !1
            } finally {
                k.preventDefault(), k.stopImmediatePropagation()
            }
        });
        return e
    }

    function LX(a, b, c) {
        const d = new KX;
        VW(a, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = b;
                    e = a.M;
                    var g = new Um;
                    g = f = fi(g, 2, ah(f), "0");
                    f = e.handle;
                    var h = WW(e, 13);
                    g = B(h, 4, $m, g);
                    e = f.call(e, g);
                    d.g = e
                } else d.g && (e = a.M, f = new Tm, g = f = Pi(f, 1, d.g), f = e.handle, h = WW(e, 14), g = B(h, 5, $m, g), f.call(e, g), d.g = null)
        }).observe(c);
        return d
    };

    function tW(a, b) {
        var c = a.handle,
            d = WW(a, 19);
        b = B(d, 9, $m, b);
        c.call(a, b)
    }

    function TW(a, b) {
        var c = a.handle,
            d = WW(a, 12);
        b = B(d, 8, $m, b);
        return c.call(a, b)
    }

    function HX(a, b) {
        var c = a.handle,
            d = WW(a, 11);
        b = B(d, 14, $m, b);
        c.call(a, b)
    }

    function WW(a, b) {
        var c = new Zm;
        var d = a.B++;
        c = Pi(c, 1, d);
        b = Pi(c, 2, Math.round(a.g.ra(b) - a.i));
        b = A(b, 10, a.j);
        return Li(b, 15, a.l ? !0 : void 0)
    }
    var MX = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.i = b;
            this.j = c;
            this.l = d;
            this.Md = this.B = 1;
            this.A = [...e]
        }
        handle(a) {
            for (const b of this.A) b(a);
            return Di(a, 1)
        }
    };

    function sW(a, b, c, d, e) {
        c.setTimeout(NX(a, b, d), e)
    }

    function SW(a, b, c, d) {
        c.addEventListener("click", NX(a, b, d))
    }

    function VW(a, b) {
        return new IntersectionObserver(NX(a, 1065, b), {
            threshold: .98
        })
    }

    function IX(a, b, c) {
        a = NX(a, 898, c);
        b.addEventListener("scroll", a, {
            passive: !0
        });
        return a
    }

    function NX(a, b, c) {
        return a.Ia.Ca(b, c, void 0, d => {
            d.es = a.L.Ob.join(",")
        })
    }
    var PX = class {
        constructor(a, b, c, d, e, f, g, h, k) {
            this.Jc = a;
            this.na = b;
            this.V = c;
            this.Ia = d;
            this.M = e;
            this.C = f;
            this.params = g;
            this.L = h;
            this.Ta = k;
            this.B = new Map;
            this.l = new Map;
            this.A = new Map;
            this.g = new Map;
            this.j = new Map;
            this.i = ab(OX, K(c, 7)) ? 1 : 0;
            for (const l of yV(this.V)) C(l, 6) != null && this.B.set(K(l, 1), K(l, 6)), C(l, 7) != null && this.l.set(K(l, 1), K(l, 7)), C(l, 5) != null && this.A.set(K(l, 1), K(l, 5)), Bi(l, 10) != null && this.g.set(K(l, 1), Fi(l, 10)), C(l, 11) != null && this.j.set(K(l, 1), K(l, 11))
        }
        ke(a, b, c) {
            a = NX(this, a, c);
            b.addEventListener("message",
                a);
            return a
        }
        Yd(a, b, c, d) {
            return b.setInterval(NX(this, a, c), d)
        }
        pa(a, b) {
            this.Ia.pa(a, b, c => {
                c.es = this.L.Ob.join(",")
            });
            return b
        }
        ra(a) {
            return this.C.ra(a)
        }
        X() {
            return Fi(this.V, 12) === 2
        }
    };
    const OX = ["ja", "zh_CN", "zh_TW"];

    function QX(a, b) {
        return b == null ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function RX(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function SX() {
        const a = new Set,
            b = ly();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function TX(a) {
        a = a.id;
        return a != null && (SX().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function UX(a, b, c) {
        if (!a.sources) return !1;
        switch (VX(a)) {
            case 2:
                const d = WX(a);
                if (d) return c.some(f => XX(d, f));
                break;
            case 1:
                const e = YX(a);
                if (e) return b.some(f => XX(e, f))
        }
        return !1
    }

    function VX(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function YX(a) {
        return ZX(a, b => b.currentRect)
    }

    function WX(a) {
        return ZX(a, b => b.previousRect)
    }

    function ZX(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function XX(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : 100 * c * a / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }

    function $X() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(TX),
            b = [...SX()].map(c => document.getElementById(c)).filter(c => c !== null);
        aY = window.scrollX;
        bY = window.scrollY;
        return cY = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function dY(a, b) {
        const c = aY !== window.scrollX || bY !== window.scrollY ? [] : cY,
            d = $X();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                eY(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Bb = Math.floor(b.renderTime || b.loadTime);
                a.ib = b.size;
                break;
            case "first-input":
                b = e;
                a.Ea = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ka = !0;
                a.g.some(f => f.entries.some(g => e.duration === g.duration && e.startTime === g.startTime)) || fY(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.C +=
                    b;
                a.H = Math.max(a.H, b);
                a.ca += 1;
                break;
            case "event":
                fY(a, e);
                break;
            default:
                ud(b, void 0)
        }
    }

    function gY(a) {
        a.A || (a.A = new PerformanceObserver(Qu(640, b => {
            dY(a, b)
        })));
        return a.A
    }

    function hY(a) {
        const b = Qu(641, () => {
                NO(document) === 2 && iY(a)
            }),
            c = Qu(641, () => void iY(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.ta = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            gY(a).disconnect()
        }
    }

    function iY(a) {
        if (!a.Gf) {
            a.Gf = !0;
            gY(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += RX("cls", a.G), b += RX("mls", a.I), b += QX("nls", a.R), window.LayoutShiftAttribution && (b += RX("cas", a.B), b += QX("nas", a.Ff), b += RX("was", a.Yf)), b += RX("wls", a.ia), b += RX("tls", a.Vf));
            window.LargestContentfulPaint && (b += QX("lcp", a.Bb), b += QX("lcps", a.ib));
            window.PerformanceEventTiming && a.Ka && (b += QX("fid", a.Ea));
            window.PerformanceLongTaskTiming && (b += QX("cbt", a.C),
                b += QX("mbt", a.H), b += QX("nlt", a.ca));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) TX(c) && d++;
            b += QX("nif", d);
            b += QX("ifi", ok(window));
            c = O(En).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${q===q.top?1:0}`;
            b += a.If ? `&${"qqid"}=${encodeURIComponent(a.If)}` : QX("pvsid", Ze(q));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.A ? a.hb : performance.interactionCount || 0) / 50));
            c >= 0 && (c = a.g[c].latency, c >= 0 && (b += QX("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.ta()
        }
    }

    function eY(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.G += Number(b.value);
            Number(b.value) > a.I && (a.I = Number(b.value));
            a.R += 1;
            if (c = UX(b, c, d)) a.B += b.value, a.Ff++;
            if (b.startTime - a.Oc > 5E3 || b.startTime - a.Hf > 1E3) a.Oc = b.startTime, a.i = 0, a.j = 0;
            a.Hf = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.ia && (a.ia = a.i, a.Yf = a.j, a.Vf = b.startTime + b.duration)
        }
    }

    function fY(a, b) {
        jY(a, b);
        const c = a.g[a.g.length - 1],
            d = a.F[b.interactionId];
        if (d || a.g.length < 10 || b.duration > c.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
            id: b.interactionId,
            latency: b.duration,
            entries: [b]
        }, a.F[b.id] = b, a.g.push(b)), a.g.sort((e, f) => f.latency - e.latency), a.g.splice(10).forEach(e => {
            delete a.F[e.id]
        })
    }

    function jY(a, b) {
        b.interactionId && (a.O = Math.min(a.O, b.interactionId), a.l = Math.max(a.l, b.interactionId), a.hb = a.l ? (a.l - a.O) / 7 + 1 : 0)
    }
    var kY = class {
            constructor() {
                this.j = this.i = this.R = this.I = this.G = 0;
                this.Hf = this.Oc = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.F = {};
                this.hb = 0;
                this.O = Infinity;
                this.Ea = this.ib = this.Bb = this.Ff = this.Yf = this.B = this.Vf = this.ia = this.l = 0;
                this.Ka = !1;
                this.ca = this.H = this.C = 0;
                this.A = null;
                this.Gf = !1;
                this.ta = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.If = a ? a.getAttribute("data-google-query-id") : null;
                this.mi = {
                    fi: !1
                }
            }
            observe() {
                var a = window;
                if (!a.google_plmetrics && window.PerformanceObserver) {
                    a.google_plmetrics = !0;
                    a = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                    this.mi.fi && a.push("event");
                    for (const b of a) a = {
                        type: b,
                        buffered: !0
                    }, b === "event" && (a.durationThreshold = 40), gY(this).observe(a);
                    hY(this)
                }
            }
        },
        aY, bY, cY = [];
    async function lY(a, b, c, d, e, f, g, h) {
        var k = W,
            l = ((h = oO(new sO(a), "__gads", h)) ? Ae(h + "t2Z7mVic") % 20 : null) ? ? Math.floor(xe() * 20);
        h = f.ra(0);
        const m = Vn(a) < 488,
            n = c.V;
        var p = c.L;
        l = Qm(l);
        p = gi(l, p.Ob);
        e = new MX(f, h, p, J(n, 17), e);
        k = new PX(d, m, n, k, e, f, c.params, c.L, c.Ta);
        d = new OV;
        b = await mY(a, a.document, b, k, g, d);
        c = LV(d, m, c.bd, a.location.hostname, c.Qi, n, f.ra(11) - h, b);
        a = e.handle;
        f = WW(e, 11);
        c = B(f, 3, $m, c);
        a.call(e, c)
    }
    async function mY(a, b, c, d, e, f) {
        b = b.body;
        if (!b || !nY(b)) return [om()];
        e.g.ra(3) >= e.i && await PV(e, 4);
        b = (b = K(d.V, 7)) ? (b = b.match(/^[a-z]{2,3}/i)) ? b[0].toLowerCase() : "" : "";
        f.language = b;
        b = [];
        if (a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]')) {
            var g = b.push;
            var h = new pm;
            var k = new nm;
            h = B(h, 3, qm, k);
            g.call(b, h)
        }(d.L.Jd && Vn(a) < d.L.Jd || d.L.Id && P(a) < d.L.Id) && b.push(om());
        b.length || await yX(a, c, d, e, f);
        return b
    }

    function nY(a) {
        try {
            (new ResizeObserver(() => {})).disconnect(), (new MutationObserver(() => {})).disconnect()
        } catch {
            return !1
        }
        return a.classList && a.classList.contains !== void 0 && a.attachShadow !== void 0
    }

    function oY() {
        var a = V(xt),
            b = W;
        if (Math.random() < a) try {
            (new kY).observe()
        } catch (c) {
            b.ba(1161, c instanceof Error ? c : Error("Unknown error."))
        }
    };
    async function pY(a, b, c, d, e, f, g) {
        Ld() || (oY(), d.push(async () => {
            delete window.google_plmetrics
        }));
        U(it) || (a = await qY(a, b, c, d, e, f, g), a.pb.length && rY(b, c, g, a))
    }
    async function qY(a, b, c, d, e, f, g) {
        const h = a.performance ? .now ? new RV(a.performance) : new SV;
        a = new QV(a, h);
        if (typeof e !== "string") return e = new pm, b = new nm, {
            Sa: null,
            pb: [B(e, 12, qm, b)]
        };
        const k = DV(e);
        e = mi(k, zV);
        if (!b) return b = new pm, d = new nm, b = B(b, 9, qm, d), {
            Sa: e,
            pb: [b]
        };
        const l = c.google_ad_client;
        if (typeof l !== "string") return b = new pm, d = new nm, b = B(b, 11, qm, d), {
            Sa: e,
            pb: [b]
        };
        if (Kd()) return {
            Sa: e,
            pb: [om()]
        };
        if (Ce()) return b = new pm, d = new nm, b = B(b, 13, qm, d), {
            Sa: e,
            pb: [b]
        };
        var m = O(jF);
        c = sY(c);
        var n = tY(e);
        a: {
            try {
                const y =
                    b ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
                if (!y) {
                    var p = null;
                    break a
                }
                var r = decodeURIComponent(y[1]);
                p = AV(r);
                break a
            } catch (y) {
                p = null;
                break a
            }
            p = void 0
        }
        p = p || mi(k, zV);
        r = k.U;
        r = ni(r, r[v], Nq, 3, 1);
        r = {
            Zj: V(qt),
            qf: V(ut),
            re: V(st),
            Ed: V(tt),
            gg: r,
            yf: V(yt)
        };
        g = {
            V: p,
            bd: c,
            Qi: g,
            params: r,
            L: new JV({
                Ob: n,
                Sg: V(xt),
                Ie: U(Ps),
                Ke: U(Rs),
                Jd: V(wt),
                Id: V(vt),
                Zb: V(ot),
                me: eu(Ss),
                Qa: eu(Ts),
                ne: V(nt),
                pe: V(pt),
                Je: U(Qs),
                ye: eu(Ms),
                Xc: eu(Ns),
                Gd: V(ct),
                Vb: U(jt),
                Ne: fu(Vs),
                Ue: U(Ys),
                Fd: V(bt),
                lf: U(ht),
                Ze: U(at),
                vf: U(kt)
            }),
            Ta: HV
        };
        await uY(b,
            d, m, g, l, h, a, f);
        return {
            Sa: e,
            pb: []
        }
    }

    function tY(a) {
        const b = O(En).g();
        a && b.push(...Xh(a, 24, Lg, w()));
        b.push(...fu(mt).map(Number));
        b.push(42);
        b.sort((c, d) => c - d);
        return b
    }

    function rY(a, b, c, d) {
        a = LV(new OV, !!a && Vn(a) < 488, sY(b), a ? .location ? .hostname ? ? "", c, d.Sa ? ? new zV, 0, d.pb);
        c = Math.floor(xe() * 20);
        b = new Zm;
        b = Pi(b, 1, 1);
        b = Pi(b, 2, 0);
        c = Qm(c);
        var e = tY(d.Sa);
        c = gi(c, e);
        b = A(b, 10, c);
        a = B(b, 3, $m, a);
        vY(O(jF), a, Date.now(), d.Sa)
    }
    async function uY(a, b, c, d, e, f, g, h) {
        const k = eA(a);
        k.wasReactiveAdConfigReceived[42] || (k.wasReactiveAdConfigReceived[42] = !0, await lY(a, b, d, e, [l => {
            vY(c, l, f.ra(21), d.V)
        }], f, g, h))
    }

    function vY(a, b, c, d) {
        a && W.pa(1214, nF(a, b, c), e => {
            e.es = tY(d).join(",")
        })
    }

    function sY(a) {
        a = a.google_page_url;
        return typeof a === "string" ? a : ""
    };
    const wY = (a, b) => {
        const c = ve("STYLE", a);
        c.textContent = Ic(Wc `* { pointer-events: none; }`);
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    };
    var yY = (a, b, c) => {
        if (!a.body) return null;
        const d = new xY;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            e > 0 && wY(b.document, e);
            Zj(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.j,
                position: d.l,
                top: d.A
            });
            b.scrollTo(0, d.i)
        }
    };
    class xY {
        constructor() {
            this.g = this.A = this.l = this.j = null;
            this.i = 0
        }
        apply(a, b) {
            this.j = a.body.style.overflow;
            this.l = a.body.style.position;
            this.A = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.i = co(b);
            Zj(a.body, "top", -this.i + "px")
        }
    };

    function zY(a, b) {
        var c;
        if (!a.j)
            for (a.j = [], c = a.g.parentElement; c;) {
                a.j.push(c);
                if (a.H(c)) break;
                c = c.parentNode && c.parentNode.nodeType === 1 ? c.parentNode : null
            }
        c = a.j.slice();
        let d, e;
        for (d = 0; d < c.length; ++d)(e = c[d]) && b.call(a, e, d, c)
    }
    var AY = class extends Q {
        constructor(a, b, c) {
            super();
            this.g = a;
            this.O = b;
            this.C = c;
            this.j = null;
            yo(this, () => this.j = null)
        }
        H(a) {
            return this.C === a
        }
    };

    function BY(a, b) {
        const c = a.C;
        c && (b ? (nA(a.F), u(c, {
            display: "block"
        }), a.A.body && !a.l && (a.l = yY(a.A, a.O, a.R)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.A.body.setAttribute("aria-hidden", "true")) : (oA(a.F), u(c, {
            display: "none"
        }), a.l && (a.l(), a.l = null), a.A.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
    }

    function CY(a) {
        BY(a, !1);
        const b = a.C;
        if (b) {
            var c = DY(a.I);
            zY(a, d => {
                u(d, c);
                ho(d)
            });
            a.g.setAttribute("width", "");
            a.g.setAttribute("height", "");
            Zj(a.g, c);
            Zj(a.g, EY);
            Zj(b, FY);
            Zj(b, {
                background: "transparent"
            });
            u(b, {
                display: "none",
                position: "fixed"
            });
            ho(b);
            ho(a.g);
            df(a.I) <= 1 || (Zj(b, {
                overflow: "scroll",
                "max-width": "100vw"
            }), Qe(b))
        }
    }
    class GY extends AY {
        constructor(a, b, c) {
            var d = V(Qt);
            super(a, b, c);
            this.l = null;
            this.A = b.document;
            this.R = d;
            this.F = hA(new mA(b), 2147483646);
            this.I = b
        }
    }

    function DY(a) {
        a = df(a);
        a = 100 * (a < 1 ? 1 : a);
        return {
            width: `${a}vw`,
            height: `${a}vh`
        }
    }
    var FY = {
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
        EY = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var HY = class extends GY {
        constructor(a, b, c) {
            super(b, a, c);
            CY(this)
        }
        H(a) {
            return a.classList ? a.classList.contains("adsbygoogle") : ab(a.classList ? a.classList : (typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
        }
    };
    const IY = {
        [1]: "closed",
        [2]: "granted",
        [3]: "cancelled"
    };
    async function JY(a, b, c, d) {
        a = new KY(a, b, c, d);
        await a.J();
        return a
    }

    function LY(a) {
        return setTimeout(iy(728, () => {
            MY(() => {
                a.A.reject()
            });
            a.dispose()
        }), V(It) * 1E3)
    }

    function NY(a, b) {
        var c = QM(a.g).then(() => {
            clearTimeout(b);
            a.A.resolve()
        });
        W.pa(1005, c);
        c = RM(a.g).then(d => {
            OY(a, IY[d.status])
        });
        W.pa(1006, c);
        c = SM(a.g).then(() => {
            OY(a, "error")
        });
        W.pa(1004, c)
    }

    function PY(a) {
        if (U(Jt)) {
            a.win.location.hash !== "" && jy("pub_hash", {
                o_url: a.win.location.href
            }, .1);
            a.win.location.hash = "goog_fullscreen_ad";
            var b = iy(950, c => {
                c.oldURL.endsWith("#goog_fullscreen_ad") && (a.l === 10 ? OY(a, "closed") : a.g.Be.postMessage(JSON.stringify({
                    eventType: "backButton",
                    googMsgType: "fullscreen"
                }), "*"), a.win.removeEventListener("hashchange", b))
            });
            a.win.addEventListener("hashchange", b);
            yo(a, () => {
                a.win.removeEventListener("hashchange", b);
                a.win.location.hash === "#goog_fullscreen_ad" && a.win.history.back()
            })
        }
    }

    function MY(a) {
        try {
            a()
        } catch (b) {}
    }

    function OY(a, b) {
        BY(a.F, !1);
        a.j && MY(() => {
            a.j(b)
        });
        a.dispose()
    }
    var KY = class extends Q {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.C = b;
            this.H = c;
            this.l = d;
            this.j = null;
            this.F = new HY(a, c, b);
            a = new UM(this.l === 10 ? 1 : 2, this.win, this.H.contentWindow);
            a.J();
            this.g = a;
            this.A = new VK;
            this.C.dataset["slotcar" + (this.l === 10 ? "Interstitial" : "Rewarded")] = "true"
        }
        async J() {
            const a = LY(this);
            NY(this, a);
            yo(this, () => {
                this.g.dispose();
                clearTimeout(a);
                ce(this.C)
            });
            await this.A.promise
        }
        show(a) {
            this.B || (this.j = a, BY(this.F, !0), q.IntersectionObserver || this.g.Be.postMessage(JSON.stringify({
                eventType: "visible",
                googMsgType: "fullscreen"
            }), "*"), PY(this))
        }
        disposeAd() {
            this.dispose()
        }
    };

    function QY({
        bg: a,
        ih: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function RY(a, b) {
        a.tf(c => {
            c.shv = String(b);
            c.mjsv = QY({
                bg: EE(),
                ih: b
            });
            c.eid = pQ(q)
        })
    };

    function SY() {
        var a = q.adsbygoogle;
        try {
            const b = a.pageState;
            og(b, tg);
            return GV(b)
        } catch (b) {
            return new FV
        }
    };
    var TY = typeof sttc === "undefined" ? void 0 : sttc;

    function UY(a) {
        var b = W;
        try {
            return og(a, tg), new YP(JSON.parse(a))
        } catch (c) {
            b.ba(838, c instanceof Error ? c : Error(String(c)))
        }
        return new YP
    };
    const VY = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.Ra({
                    jc: c ? ? void 0,
                    lg: d ? void 0 : 2
                })
            })
        },
        WY = {
            zd: a => a.Ra,
            Cc: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            Pb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    jc: b.returnValue ? ? void 0,
                    lg: b.success ? void 0 : 2
                })
            }
        };

    function XY(a) {
        let b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            kf: b.__uspapiReturn.callId
        }
    }

    function YY(a, b) {
        let c = {};
        if (EF(a.caller)) {
            var d = Bb(() => {
                b(c)
            });
            GF(a.caller, "getDataWithCallback", {
                Ra: e => {
                    e.lg || (c = e.jc);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var ZY = class extends Q {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new HF(a, "__uspapiLocator", b => typeof b.__uspapi === "function", XY);
            this.caller.C.set("getDataWithCallback", VY);
            this.caller.A.set("getDataWithCallback", WY)
        }
        i() {
            this.caller.dispose();
            super.i()
        }
    };

    function $Y(a, b, c, d) {
        const e = new VK;
        let f = "";
        const g = k => {
            try {
                const l = typeof k.data === "object" ? k.data : JSON.parse(k.data);
                f === l.paw_id && (Ib(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = typeof a.gmaSdk ? .getQueryInfo === "function" ? a.gmaSdk : void 0;
        if (h) return Hb(a, "message", g), f = c(h), e.promise;
        c = typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage === "function" || typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage === "function" ? a.webkit.messageHandlers :
            void 0;
        return c ? (f = String(Math.floor(xe() * 2147483647)), Hb(a, "message", g), b(c, f), e.promise) : null
    }

    function aZ(a) {
        return $Y(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    }(function(a) {
        return qg(b => {
            if (!xg(b)) return !1;
            for (const [c, d] of Object.entries(a)) {
                const e = c,
                    f = d;
                if (!(e in b)) {
                    if (f.ej === !0) continue;
                    return !1
                }
                if (!f(b[e])) return !1
            }
            return !0
        })
    })({
        vc: tg,
        pn: tg,
        eid: tg,
        vnm: function(a) {
            return yg(qg((b, c) => b === void 0 ? !0 : a(b, c)))
        }(tg),
        js: tg
    }, "RawGmaSdkStaticSignalObject");
    const bZ = (a, b) => {
        try {
            const k = J(b, 6) === void 0 ? !0 : J(b, 6);
            var c = gj(Fi(b, 2)),
                d = K(b, 3);
            a: switch (Fi(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new ij(c, d, e),
                g = x(b, bj, 5) ? .g() ? ? "";
            f.yc = g;
            f.g = k;
            f.win = a;
            var h = f.build();
            $i(h)
        } catch {}
    };

    function cZ(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), a.document.readyState === "complete" ? bZ(a, b) : Hb(a, "load", () => void bZ(a, b)))
    };

    function dZ(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function eZ(a) {
        if (a === a.top || qe(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && dZ(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new VK;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            d.data.msgType === "__goog_top_url_resp" && c.resolve({
                qc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function WE() {
        return navigator.cookieDeprecationLabel ? Promise.race([navigator.cookieDeprecationLabel.getValue().then(a => ({
            status: 1,
            label: a
        })).catch(() => ({
            status: 2
        })), af(V(Ft), {
            status: 5
        })]) : Promise.resolve({
            status: 3
        })
    }

    function fZ(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function gZ({
        ma: a,
        wa: b,
        Wa: c,
        slot: d
    }) {
        const e = d.vars,
            f = te(d.pubWin),
            g = fZ(d),
            h = new rQ({
                K: f,
                pubWin: d.pubWin,
                D: e,
                ma: a,
                wa: b,
                Wa: c,
                ea: g
            });
        h.H = Date.now();
        Jj(1, [h.D]);
        hy(1032, () => {
            if (f && U(au)) {
                var k = h.D;
                NE(IE(), 32, !1) || (OE(IE(), 32, !0), TU(f, k.google_loader_used === "sd" ? 5 : 9))
            }
        });
        try {
            await hZ(h)
        } catch (k) {
            if (!W.ba(159, k, void 0, void 0)) throw k;
        }
        hy(639, () => {
            var k;
            var l = h.D;
            (k = h.K) && l.google_responsive_auto_format === 1 && l.google_full_width_responsive_allowed === !0 ? (l = (l = k.document.getElementById(l.google_async_iframe_id)) ?
                he(l, "INS", "adsbygoogle") : null) ? (k = new RP(k, l), k.g = q.setInterval(Ja(k.i, k), 500), k.i(), k = !0) : k = !1 : k = !1;
            return k
        });
        f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) ? ky(1008, iZ(d.pubWin, f, e, h.j, Ti(BV()), h.g, K(a, 8)), k => {
            k.es = tY(null).join(",")
        }) : NM(h.pubWin, "affa", k => {
            ky(1008, iZ(d.pubWin, f, e, h.j, k.config, h.g, K(a, 8)), l => {
                l.es = tY(null).join(",")
            });
            return !0
        });
        jZ(h);
        return h
    }
    async function iZ(a, b, c, d, e, f, g) {
        await pY(a, b, c, d, e, f, g)
    }

    function hZ(a) {
        if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
        var b = a.pubWin;
        nQ(13, b);
        nQ(11, b);
        a.F = Hi(a.ma, WP, 13, ZP) ? .g() ? ? !0;
        b = IE();
        var c = NE(b, 23, !1);
        c || OE(b, 23, !0);
        if (!c) {
            b = a.D.google_ad_client;
            c = a.ma;
            b = Uh(c, WP, li(c, ZP) === 13 ? 13 : -1) !== void 0 ? x(Hi(c, WP, 13, ZP), TK, 2) : mb(Hi(c, XP, 14, ZP) ? .g() ? ? [], [b]) ? x(x(Hi(c, XP, 14, ZP), WP, 2), TK, 2) : new TK;
            c = a.pubWin;
            var d = a.D.google_ad_client,
                e = J(a.ma, 6),
                f = J(a.ma, 20);
            b = new UK(c, d, b, e, f);
            b.i = !0;
            c = x(b.B, Oq, 1);
            if (b.i && (d = b.g, b.j && !AE(c) ? (e = new KK, e = Rh(e, 1,
                    Ig(1))) : e = null, e)) {
                e = Ti(e);
                try {
                    d.localStorage.setItem("google_auto_fc_cmp_setting", e)
                } catch (g) {}
            }
            d = AE(c) && (b.j || b.A);
            c && d && sF(new tF(b.g, new bG(b.g, b.l), c, new mA(b.g)))
        }
        b = !Rj() && !Jd();
        return !b || b && !kZ(a) ? lZ(a) : Promise.resolve()
    }

    function mZ(a, b, c = !1) {
        b = mO(a.K, b);
        const d = Vj() || iO(a.pubWin.top);
        if (!b || b.y === -12245933 || d.width === -12245933 || d.height === -12245933 || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = kO(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function kZ(a) {
        return nZ(a) || oZ(a)
    }

    function nZ(a) {
        const b = a.D;
        if (!b.google_pause_ad_requests) return !1;
        const c = q.setTimeout(() => {
                jy("abg:cmppar", {
                    client: a.D.google_ad_client,
                    url: a.D.google_page_url
                })
            }, 1E4),
            d = iy(450, () => {
                b.google_pause_ad_requests = !1;
                q.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                if (!kZ(a)) {
                    const e = lZ(a);
                    W.pa(1222, e)
                }
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function oZ(a) {
        const b = a.pubWin.document,
            c = a.ea;
        if (NO(b) === 3) return QO(iy(332, () => {
            if (!pZ(a, qZ().visible, c)) {
                const g = lZ(a);
                W.pa(1222, g)
            }
        }), b), !0;
        const d = qZ();
        if (d.hidden < 0 && d.visible < 0) return !1;
        const e = OO(b);
        if (!e) return !1;
        if (!PO(b)) return pZ(a, d.visible, c);
        if (mZ(a, c) <= d.hidden) return !1;
        let f = iy(332, () => {
            if (!PO(b) && f) {
                Ib(b, e, f);
                if (!pZ(a, d.visible, c)) {
                    const g = lZ(a);
                    W.pa(1222, g)
                }
                f = null
            }
        });
        return Hb(b, e, f)
    }

    function qZ() {
        var a = V(Or);
        const b = V(Pr);
        return b === 3 && a === 6 ? (a = {
            hidden: 0,
            visible: 3
        }, q.IntersectionObserver || (a.visible = -1), le() && (a.visible *= 2), a) : {
            hidden: 0,
            visible: q.IntersectionObserver ? le() ? a : b : -1
        }
    }

    function pZ(a, b, c) {
        if (!c || b < 0) return !1;
        var d = a.D;
        if (!ao(d.google_reactive_ad_format) && (nP(d) || d.google_reactive_ads_config) || !lO(c) || mZ(a, c) <= b) return !1;
        var e = IE(),
            f = NE(e, 8, {});
        e = NE(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new q.IntersectionObserver((l, m) => {
                Ua(l, n => {
                    n.intersectionRatio <= 0 || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${b*100}%`
            });
            a.I = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        ma(Promise, "any").call(Promise, [f, e]).then(() => {
            hy(294, () => {
                const h = lZ(a);
                W.pa(1222, h)
            })
        });
        return !0
    }

    function lZ(a) {
        hy(326, () => {
            var c = a.pubWin,
                d = a.K,
                e = a.ma,
                f = a.wa;
            if (ok(a.D) === 1) {
                var g = U(bu);
                if ((g || U($t)) && c === d) {
                    var h = new uj;
                    d = new vj;
                    var k = h.setCorrelator(Ze(c));
                    var l = pQ(c);
                    k = Ri(k, 5, l);
                    M(k, 2, 1);
                    h = A(d, 1, h);
                    k = new tj;
                    k = L(k, 10, !0);
                    l = U(Vt);
                    k = L(k, 8, l);
                    l = U(Wt);
                    k = L(k, 12, l);
                    l = U(Zt);
                    k = L(k, 7, l);
                    l = U(Yt);
                    k = L(k, 13, l);
                    A(h, 2, k);
                    c.google_rum_config = Ui(d);
                    e = J(e, 9) && g ? f.Dj : f.Ej;
                    ue(c.document, e)
                } else Fk(gy)
            }
        });
        a.D.google_ad_channel = rZ(a, a.D.google_ad_channel);
        a.D.google_tag_partner = sZ(a, a.D.google_tag_partner);
        tZ(a);
        const b = a.D.google_start_time;
        typeof b === "number" && (Ln = b, a.D.google_start_time = null);
        gO(a);
        a.K && rP(a.K, hd(a.wa.oi, new Map(Object.entries(MO()))));
        RE() && gL({
            win: a.pubWin,
            webPropertyCode: a.D.google_ad_client,
            jb: hd(a.wa.jb, new Map(Object.entries(MO())))
        });
        nP(a.D) && (eL() && (a.D.google_adtest = a.D.google_adtest || "on"), a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3);
        return uZ(a)
    }

    function rZ(a, b) {
        return (b ? [b] : []).concat(XE(a.pubWin).ad_channels || []).join("+")
    }

    function sZ(a, b) {
        return (b ? [b] : []).concat(XE(a.pubWin).tag_partners || []).join("+")
    }

    function vZ(a) {
        const b = ve("IFRAME");
        ye(a, (c, d) => {
            c != null && b.setAttribute(d, c)
        });
        return b
    }

    function wZ(a, b, c) {
        return a.D.google_reactive_ad_format === 9 && he(a.ea, null, "fsi_container") ? (a.ea.appendChild(b), Promise.resolve(b)) : yP(a.wa.Zg, 525, d => {
            a.ea.appendChild(b);
            const e = yj(c, a.pubWin);
            d.createAdSlot(a.K, a.D, b, a.ea.parentElement, e);
            return b
        })
    }

    function xZ(a, b, c, d) {
        iF();
        O(jF).bd = a.D.google_page_url;
        cZ(a.pubWin, ej(dj(M(M(cj(new fj, aj(new bj, String(Ze(a.pubWin)))), 4, 1), 2, 1), K(a.ma, 2)), d.g()));
        const e = a.K;
        if (a.D.google_acr)
            if (a.D.google_wrap_fullscreen_ad) {
                const h = a.D.google_acr;
                JY(a.pubWin, a.ea.parentElement, b, a.D.google_reactive_ad_format).then(h).catch(() => {
                    h(null)
                })
            } else a.D.google_acr(b);
        Hb(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const h = e ? XE(e).enable_overlap_observer || !1 : !1;
            (a.D.ovlp || h) && e && e === a.pubWin && yZ(e, a, a.ea,
                b)
        });
        d = h => {
            h && a.j.push(() => {
                h.dispose()
            })
        };
        const f = zZ(a, b);
        uO(a.pubWin, a.g, b.contentWindow, a.j);
        !e || nP(a.D) && !BP(a.D) || (a.D.no_resize || d(new CR(e, b, a.ea)), d(new UQ(a, b)), d(e.IntersectionObserver ? null : new WQ(e, b, a.ea)), e.IntersectionObserver && d(MR(e, b, a.D, a.ea, iy(1225, () => {
            f();
            for (const h of a.j) h();
            a.j.length = 0
        }))));
        if (e) {
            d(OQ(e, b, a.g));
            if (U(vs)) {
                var g = ER(e, b, a.g);
                g && d(g)
            }
            a.j.push(LP(e, a.D));
            O(QP).J(e);
            a.j.push(HQ(e, a.ea, b))
        }
        b && b.setAttribute("data-google-container-id", c);
        c = a.D.iaaso;
        c != null && (d =
            a.ea, g = d.parentElement, (g && uu.test(g.className) ? g : d).setAttribute("data-auto-ad-size", c));
        b.setAttribute("tabindex", "0");
        b.setAttribute("title", "Advertisement");
        b.setAttribute("aria-label", "Advertisement");
        AZ(a);
        RR(a)
    }

    function zZ(a, b) {
        const c = a.pubWin,
            d = a.D.google_ad_client,
            e = QE();
        let f = null;
        const g = MM(c, "pvt", (h, k) => {
            typeof h.token === "string" && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), e[d].length > 100 && e[d].shift())
        });
        a.j.push(g);
        return () => {
            f && Array.isArray(e[d]) && (cb(e[d], f), e[d].length || delete e[d], f = null)
        }
    }

    function AZ(a) {
        const b = Rj(a.pubWin);
        if (b)
            if (b.container === "AMP-STICKY-AD") {
                const c = d => {
                    d.data === "fill_sticky" && b.renderStart && b.renderStart()
                };
                Hb(a.pubWin, "message", W.Ca(616, c));
                a.j.push(() => {
                    Ib(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function yZ(a, b, c, d) {
        kN(new tN(a), c).then(e => {
            Jj(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && uu.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", String(e.Dg));
            return e
        }).then(e => {
            const f = b.D.armr || "",
                g = e.Fi || "",
                h = b.D.iaaso == null ? "" : Number(b.D.iaaso),
                k = Number(e.Dg),
                l = Xa(e.entries, E => `${E.ub}:${E.Qg}:${E.Rg}`),
                m = Number(e.tj.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p = m * e.Xb.width * e.Xb.height,
                r = `${e.hh.scrollX},${e.hh.scrollY}`,
                y = pk(e.target),
                D = [e.Xb.left, e.Xb.top, e.Xb.right,
                    e.Xb.bottom
                ].join();
            e = `${e.uh.width}x${e.uh.height}`;
            jy("ovlp", {
                adf: b.D.google_ad_dom_fingerprint,
                armr: f,
                client: b.D.google_ad_client,
                eid: pQ(b.D),
                et: g,
                fwrattr: b.D.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.D.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.D.google_responsive_auto_format,
                roa: p,
                slot: b.D.google_ad_slot,
                sp: r,
                tgt: y,
                tr: D,
                url: b.D.google_page_url,
                vp: e,
                pvc: Ze(a)
            }, 1)
        }).catch(e => {
            Jj(8, ["Error:", e.message, c]);
            jy("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function BZ(a, b) {
        b.allow = b.allow && b.allow.length > 0 ? b.allow + ("; " + a) : a
    }

    function CZ(a, b, c) {
        var d = a.D,
            e = d.google_async_iframe_id;
        const f = d.google_ad_width,
            g = d.google_ad_height,
            h = CP(d);
        e = {
            id: e,
            name: e
        };
        var k = a.D,
            l = a.l;
        fQ("browsing-topics", a.pubWin.document) && FQ(c, k) && !U(Kt) && !CQ(l ? .label) && (e.browsingTopics = "true");
        e.style = h ? [`width:${f}px !IMPORTANT`, `height:${g}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${f}px;` + `height:${g}px;`;
        k = Ke();
        k["allow-top-navigation-by-user-activation"] && k["allow-popups-to-escape-sandbox"] && (h || (k = "=" + encodeURIComponent("1"),
            b = oe(b, "fsb" + k)), e.sandbox = Je().join(" "));
        d.google_video_play_muted === !1 && BZ("autoplay", e);
        k = b;
        k.length > 61440 && (k = k.substring(0, 61432), k = k.replace(/%\w?$/, ""), k = k.replace(/&[^=]*=?$/, ""), k += "&trunc=1");
        k !== b && (l = b.lastIndexOf("&", 61432), l === -1 && (l = b.lastIndexOf("?", 61432)), jy("trn", {
            ol: b.length,
            tr: l === -1 ? "" : b.substring(l + 1),
            url: b
        }, .01));
        b = k;
        f != null && (e.width = String(f));
        g != null && (e.height = String(g));
        e.frameborder = "0";
        e.marginwidth = "0";
        e.marginheight = "0";
        e.vspace = "0";
        e.hspace = "0";
        e.allowtransparency =
            "true";
        e.scrolling = "no";
        d.dash && (e.srcdoc = d.dash);
        eQ("attribution-reporting", a.pubWin.document) && BZ("attribution-reporting", e);
        eQ("run-ad-auction", a.pubWin.document) && BZ("run-ad-auction", e);
        U(At) && (d = a.pubWin, d.credentialless !== void 0 && (U(Bt) || d.crossOriginIsolated) && (e.credentialless = "true"));
        if (h) e.src = b, e = vZ(e), a = wZ(a, e, c);
        else {
            c = {};
            c.dtd = uQ((new Date).getTime(), Ln);
            c = lk(c, b);
            e.src = c;
            c = a.pubWin;
            c = c == c.top;
            e = vZ(e);
            c && a.j.push(Xj(a.pubWin, e));
            a.ea.style.visibility = "visible";
            for (a = a.ea; c = a.firstChild;) a.removeChild(c);
            a.appendChild(e);
            a = Promise.resolve(e)
        }
        return a
    }
    async function DZ(a) {
        var b = a.D,
            c = a.pubWin;
        const d = a.g;
        EZ(a);
        d.g() && tO(new sO(a.pubWin), a.g, a.pubWin.location.hostname);
        var e = yj(d, a.pubWin);
        if (!d.g() && !a.F) return jy("afc_noc_req", {
            client: a.D.google_ad_client,
            isGdprCountry: J(a.ma, 6).toString()
        }, V(Mr)), Promise.resolve();
        var f = FZ(a.wa, d);
        f && document.documentElement.appendChild(f);
        U(Dt) && d.g() && (a.l = await VE());
        a.G = DQ(a.pubWin, d);
        oQ(a.pubWin, d);
        if (f = a.D.google_reactive_ads_config) {
            xP(a.K, f);
            const g = yj(d);
            DP(f, a, g);
            f = f.page_level_pubvars;
            Da(f) && Pb(a.D,
                f)
        }
        f = fQ("shared-storage", a.pubWin.document);
        a.G && d.g() && f && !U(zt) && !NE(IE(), 34, !1) && (OE(IE(), 34, !0), f = a.G.then(g => {
            g({
                message: "goog:spam:client_age",
                pvsid: Ze(a.pubWin)
            })
        }), W.pa(1069, f));
        await EQ(a, a.pubWin, d, a.D, a.G, a.l);
        await a.B ? .si;
        f = "";
        CP(b) ? (f = (d.g() ? a.wa.Ah : a.wa.zh).toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index + "-") + "&" + kk({
            adk: b.google_ad_unit_key,
            client: b.google_ad_client,
            fa: b.google_reactive_ad_format
        })), gV(b, IE()), GZ(b)) : (b.google_pgb_reactive === 5 && b.google_reactive_ads_config ||
            !oP(b) || mP(c, b, e)) && GZ(b) && (f = YU(a, d));
        Jj(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || nk(c);
        e = ok(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)}`;
        c = mZ(a, a.ea, !0) > 0;
        e = {
            ifi: e,
            uci: b
        };
        c && (c = IE(), e.btvi = NE(c, 21, 1), PE(c, 21));
        f = lk(e, f);
        c = CZ(a, f, d);
        a.D.rpe && AR(a.pubWin, a.ea, {
            height: a.D.google_ad_height,
            xf: "force",
            Rc: !0,
            nf: !0,
            he: a.D.google_ad_client
        });
        c = await c;
        try {
            xZ(a, c, b, d)
        } catch (g) {
            W.ba(223, g, void 0, void 0)
        }
    }

    function HZ(a) {
        const b = new ZY(a);
        return new Promise(c => {
            YY(b, d => {
                d && typeof d.uspString === "string" ? c(d.uspString) : c(null)
            })
        })
    }

    function IZ(a) {
        var b = Le(q.top, "googlefcPresent");
        q.googlefc && !b && jy("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function JZ(a, b) {
        return LF(a, b === ".google.cn") ? MF(a) : Promise.resolve(null)
    }

    function KZ(a, b, c) {
        var d = c.Vj,
            e = c.uspString;
        c = c.Ri;
        d && sQ(a, d, b);
        e && (b = Qi(a, 1, e), e = e.toUpperCase(), e.length == 4 && (e.indexOf("-") == -1 || e.substring(1) === "---") && e[0] >= "1" && e[0] <= "9" && jL.hasOwnProperty(e[1]) && jL.hasOwnProperty(e[2]) && jL.hasOwnProperty(e[3]) ? (d = new iL, d = Ni(d, 1, parseInt(e[0], 10)), d = M(d, 2, jL[e[1]]), d = M(d, 3, jL[e[2]]), e = M(d, 4, jL[e[3]])) : e = null, e = e ? .Oi() === 2, Li(b, 13, e));
        c && GO(a, c)
    }

    function LZ(a) {
        const b = V(Kr);
        if (b <= 0) return null;
        const c = yk(),
            d = aZ(a.pubWin);
        if (!d) return null;
        a.C = "0";
        return Promise.race([d, af(b, "0")]).then(e => {
            jy("adsense_paw", {
                time: yk() - c
            });
            e ? .length > 1E4 ? W.ba(809, Error(`ML:${e.length}`), void 0, void 0) : a.C = e
        }).catch(e => {
            W.ba(809, e, void 0, void 0)
        })
    }

    function EZ(a) {
        var b = a.pubWin;
        const c = a.ea;
        var d = a.D;
        const e = a.Wa,
            f = V(St);
        d = !ao(d.google_reactive_ad_format) && (nP(d) || d.google_reactive_ads_config);
        if (!(a.B ? .Qe || f <= 0 || te(b) || !q.IntersectionObserver || d)) {
            a.B = {};
            var g = V(Tt),
                h = new xn(e),
                k = yk();
            b = new Promise(l => {
                let m = 0;
                const n = a.B,
                    p = new q.IntersectionObserver(iy(1236, r => {
                        if (r = r.find(y => y.target === c)) pn(h.C.g.g.g.g, {
                            Qj: yk() - k,
                            Wj: ++m
                        }), n.cj = r.isIntersecting && r.intersectionRatio >= g, l()
                    }), {
                        threshold: [g]
                    });
                p.observe(c);
                n.Qe = p
            });
            a.B.si = Promise.race([b, af(f,
                null)]).then(l => {
                var m = yk() - k,
                    n = l === null ? "TIMEOUT" : "OK";
                l = qn;
                var p = h.C.g.g.g.i.Z,
                    r = $k("xR0Czf"),
                    y = new Wk;
                n = ii(y, 1, Xk, ch(n));
                r = ri(r, 4, Wk, n);
                n = new Yk;
                m = ii(n, 4, Zk, Dg(m));
                m = A(r, 3, m);
                l(p, m)
            })
        }
    }

    function MZ(a) {
        const b = yk();
        return Promise.race([hy(832, () => eZ(a)), af(200)]).then(c => {
            jy("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: yk() - b,
                tms: 200
            });
            return c ? .qc
        })
    }
    async function NZ(a) {
        const b = yk(),
            c = a.ma;
        kF(g => {
            if (Fi(g, 1) === 0) {
                var h = !!J(c, 6);
                g = L(g, 2, h);
                h = !!J(c, 20);
                g = L(g, 6, h);
                M(g, 1, 1)
            }
        });
        CM(a.pubWin);
        IZ(a.D.google_ad_client);
        kF(g => {
            Fi(g, 1) === 1 && M(g, 1, 2)
        });
        var d = new OF(a.pubWin);
        await JZ(d, K(c, 8));
        kF(g => {
            Fi(g, 1) === 2 && (g = L(g, 3, !0), M(g, 1, 3))
        });
        d = J(c, 6);
        var e = J(c, 25);
        a.g = OK(NK(new PK, !(d && !JM())), e && navigator.globalPrivacyControl);
        e = [tQ(a), HZ(a.pubWin), HO(a)];
        e = await Promise.all(e);
        KZ(a.g, d, {
            Vj: e[0],
            uspString: e[1],
            Ri: e[2]
        });
        const f = yk();
        kF(g => {
            if (Fi(g, 1) === 3) {
                g =
                    L(g, 3, f - b > 500);
                var h = !!a.g ? .A();
                g = L(g, 4, h);
                h = !!a.g ? .g();
                g = L(g, 5, h);
                h = !!a.g ? .j();
                g = L(g, 7, h);
                h = !!a.g ? .l();
                g = L(g, 8, h);
                M(g, 1, 4)
            }
        })
    }
    async function OZ(a) {
        const b = LZ(a),
            c = hy(868, () => MZ(a.pubWin));
        await NZ(a);
        await b;
        a.qc = await c || "";
        await DZ(a)
    }

    function uZ(a) {
        bf(a.pubWin) !== a.pubWin && (a.i |= 4);
        NO(a.pubWin.document) === 3 && (a.i |= 32);
        var b;
        if (b = a.K) {
            b = a.K;
            const c = Vn(b);
            b = !(Zn(b).scrollWidth <= c)
        }
        b && (a.i |= 1024);
        a.pubWin.Prototype ? .Version && (a.i |= 16384);
        a.D.google_loader_features_used && (a.i |= a.D.google_loader_features_used);
        return OZ(a)
    }

    function GZ(a) {
        const b = IE(),
            c = a.google_ad_section;
        nP(a) && PE(b, 15);
        if (qk(a)) {
            if (PE(b, 5) > 100) return !1
        } else if (PE(b, 6) - NE(b, 15, 0) > 100 && c === "") return !1;
        return !0
    }

    function FZ(a, b) {
        a: {
            var c = [q.top];
            var d = [];
            let f = 0,
                g;
            for (; g = c[f++];) {
                d.push(g);
                try {
                    if (g.frames)
                        for (let h = 0; h < g.frames.length && c.length < 1024; ++h) c.push(g.frames[h])
                } catch {}
            }
            c = d;
            for (d = 0; d < c.length; d++) try {
                var e = c[d].frames.google_esf;
                if (e) {
                    rj = e;
                    break a
                }
            } catch (h) {}
            rj = null
        }
        if (rj) return null;e = ve("IFRAME");e.id = "google_esf";e.name = "google_esf";a = b.g() ? a.Ah : a.zh;e.src = dc(a).toString();e.style.display = "none";
        return e
    }

    function jZ(a) {
        U(Er) && SE() && q.setTimeout(iy(1244, () => void ZN(a.K || a.pubWin, {
            Va: J(a.ma, 6)
        })), 1E3)
    }

    function tZ(a) {
        const b = a.K;
        if (b && !XE(b).ads_density_stats_processed && !Rj(b) && (XE(b).ads_density_stats_processed = !0, U(xs) || xe() < .01)) {
            const c = () => {
                if (b) {
                    var d = iJ(dJ(b), a.D.google_ad_client, b.location.hostname, pQ(a.D).split(","));
                    jy("ama_stats", d, 1)
                }
            };
            $e(b, () => {
                q.setTimeout(c, 1E3)
            })
        }
    };
    (function(a, b, c) {
        hy(843, () => {
            if (!q.google_sa_impl) {
                var d = new Bn(b);
                try {
                    jg(k => {
                        var l = new gn;
                        var m = new fn;
                        try {
                            var n = Ze(window);
                            Pi(m, 1, n)
                        } catch (D) {}
                        try {
                            var p = O(En).g();
                            ei(m, 2, p, Kg)
                        } catch (D) {}
                        try {
                            Ri(m, 3, window.document.URL)
                        } catch (D) {}
                        l = A(l, 2, m);
                        m = new en;
                        m = M(m, 1, 1192);
                        try {
                            var r = tg(k ? .name) ? k.name : "Unknown error";
                            Ri(m, 2, r)
                        } catch (D) {}
                        try {
                            var y = tg(k ? .message) ? k.message : `Caught ${k}`;
                            Ri(m, 3, y)
                        } catch (D) {}
                        try {
                            const D = tg(k ? .stack) ? k.stack : Error().stack;
                            D && ei(m, 4, D.split(/\n\s*/), bh)
                        } catch (D) {}
                        k = A(l, 1, m);
                        r = new dn;
                        try {
                            Ri(r, 1, EE())
                        } catch {}
                        B(k, 6, hn, r);
                        Pi(k, 5, 1);
                        sn(d, k)
                    })
                } catch (k) {}
                var e = new FV;
                U(Ct) && (e = SY());
                var f = UY(a);
                RY(W, K(f, 2));
                bQ(J(f, 6));
                Jj(16, [3, Ui(f)]);
                var g = QY({
                        bg: b,
                        ih: K(f, 2)
                    }),
                    h = c(g, f, Ci(mi(e, EV), 1));
                q.google_sa_impl = k => gZ({
                    ma: f,
                    wa: h,
                    Wa: g,
                    slot: k
                });
                lQ(dQ(q));
                q.google_process_slots ? .();
                e = (q.Prototype || {}).Version;
                e != null && jy("prtpjs", {
                    version: e
                })
            }
        })
    })(TY, EE(), function(a, b, c) {
        c = U(Ct) ? c : Ci(b, 1);
        c = c > 2012 ? `_fy${c}` : "";
        const d = K(b, 3);
        b = K(b, 2);
        return {
            Ej: gd `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            Dj: gd `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Zg: gd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            oi: gd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            uo: gd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            ko: gd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            jb: gd `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/autogames${c}.js`,
            Ah: gd `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            zh: gd `https://pagead2.googlesyndication.com/pagead/html/${b}/${d}/zrt_lookup${c}.html`
        }
    });
}).call(this, "[2021,\"r20240814\",\"r20110914\"]");