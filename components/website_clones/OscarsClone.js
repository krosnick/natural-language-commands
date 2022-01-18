function createHTML() {
    return { __html: `<html class="js js flexbox canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths"
    dir="ltr" prefix="og: http://ogp.me/ns#" style="" lang="en">
<!--<![endif]-->

<head>
    <script type="text/javascript" src="https://bam-cell.nr-data.net/1/e156b2cbb6?a=70689900&amp;v=1212.e95d35c&amp;to=YlNUYUVZWRFRWhAICVsZd1ZDUVgMH08NBBFGaUZUUF0%3D&amp;rst=2671&amp;ck=1&amp;ref=https://www.oscars.org/oscars/ceremonies/2021&amp;ap=1086&amp;be=665&amp;fe=2252&amp;dc=1130&amp;perf=%7B%22timing%22:%7B%22of%22:1642479501304,%22n%22:0,%22u%22:613,%22ue%22:616,%22f%22:3,%22dn%22:88,%22dne%22:407,%22c%22:407,%22s%22:439,%22ce%22:493,%22rq%22:494,%22rp%22:541,%22rpe%22:571,%22dl%22:612,%22di%22:1066,%22ds%22:1129,%22de%22:1228,%22dc%22:2248,%22l%22:2248,%22le%22:2252%7D,%22navigation%22:%7B%7D%7D&amp;fcp=1117&amp;at=ThRXFw1DSh8%3D&amp;jsonp=NREUM.setToken"></script>
    <script src="https://js-agent.newrelic.com/nr-1212.min.js"></script>
    <script type="text/javascript" charset="UTF-8" async="" src="https://consentcdn.cookiebot.com/consentconfig/ddfc85dd-9751-4c1f-866f-ebb32688ad41/state.js"></script>
    <script type="text/javascript" async="" src="https://www.google-analytics.com/plugins/ua/linkid.js"></script>
    <script async="" src="//connect.facebook.net/en_US/fbevents.js"></script>
    <script async="" src="https://www.google-analytics.com/analytics.js"></script>
    <meta charset="utf-8">
    <script type="text/javascript" src="https://www.googletagmanager.com/gtm.js?id=GTM-W3KXNCL" async=""></script>
    <script type="text/javascript">
        (window.NREUM || (NREUM = {})).init = {
            ajax: {
                deny_list: ["bam-cell.nr-data.net"]
            }
        };
        (window.NREUM || (NREUM = {})).loader_config = {
            licenseKey: "e156b2cbb6",
            applicationID: "70689900"
        };
        window.NREUM || (NREUM = {}), __nr_require = function(t, e, n) {
            function r(n) {
                if (!e[n]) {
                    var i = e[n] = {
                        exports: {}
                    };
                    t[n][0].call(i.exports, function(e) {
                        var i = t[n][1][e];
                        return r(i || e)
                    }, i, i.exports)
                }
                return e[n].exports
            }
            if ("function" == typeof __nr_require) return __nr_require;
            for (var i = 0; i < n.length; i++) r(n[i]);
            return r
        }({
            1: [function(t, e, n) {
                function r() {}

                function i(t, e, n, r) {
                    return function() {
                        return s.recordSupportability("API/" + e + "/called"), o(t + e, [u.now()].concat(c(arguments)), n ? null : this, r), n ? void 0 : this
                    }
                }
                var o = t("handle"),
                    a = t(10),
                    c = t(11),
                    f = t("ee").get("tracer"),
                    u = t("loader"),
                    s = t(4),
                    d = NREUM;
                "undefined" == typeof window.newrelic && (newrelic = d);
                var p = ["setPageViewName", "setCustomAttribute", "setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease"],
                    l = "api-",
                    v = l + "ixn-";
                a(p, function(t, e) {
                    d[e] = i(l, e, !0, "api")
                }), d.addPageAction = i(l, "addPageAction", !0), d.setCurrentRouteName = i(l, "routeName", !0), e.exports = newrelic, d.interaction = function() {
                    return (new r).get()
                };
                var m = r.prototype = {
                    createTracer: function(t, e) {
                        var n = {},
                            r = this,
                            i = "function" == typeof e;
                        return o(v + "tracer", [u.now(), t, n], r),
                            function() {
                                if (f.emit((i ? "" : "no-") + "fn-start", [u.now(), r, i], n), i) try {
                                    return e.apply(this, arguments)
                                } catch (t) {
                                    throw f.emit("fn-err", [arguments, this, t], n), t
                                } finally {
                                    f.emit("fn-end", [u.now()], n)
                                }
                            }
                    }
                };
                a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","), function(t, e) {
                    m[e] = i(v, e)
                }), newrelic.noticeError = function(t, e) {
                    "string" == typeof t && (t = new Error(t)), s.recordSupportability("API/noticeError/called"), o("err", [t, u.now(), !1, e])
                }
            }, {}],
            2: [function(t, e, n) {
                function r(t) {
                    if (NREUM.init) {
                        for (var e = NREUM.init, n = t.split("."), r = 0; r < n.length - 1; r++)
                            if (e = e[n[r]], "object" != typeof e) return;
                        return e = e[n[n.length - 1]]
                    }
                }
                e.exports = {
                    getConfiguration: r
                }
            }, {}],
            3: [function(t, e, n) {
                var r = !1;
                try {
                    var i = Object.defineProperty({}, "passive", {
                        get: function() {
                            r = !0
                        }
                    });
                    window.addEventListener("testPassive", null, i), window.removeEventListener("testPassive", null, i)
                } catch (o) {}
                e.exports = function(t) {
                    return r ? {
                        passive: !0,
                        capture: !!t
                    } : !!t
                }
            }, {}],
            4: [function(t, e, n) {
                function r(t, e) {
                    var n = [a, t, {
                        name: t
                    }, e];
                    return o("storeMetric", n, null, "api"), n
                }

                function i(t, e) {
                    var n = [c, t, {
                        name: t
                    }, e];
                    return o("storeEventMetrics", n, null, "api"), n
                }
                var o = t("handle"),
                    a = "sm",
                    c = "cm";
                e.exports = {
                    constants: {
                        SUPPORTABILITY_METRIC: a,
                        CUSTOM_METRIC: c
                    },
                    recordSupportability: r,
                    recordCustom: i
                }
            }, {}],
            5: [function(t, e, n) {
                function r() {
                    return c.exists && performance.now ? Math.round(performance.now()) : (o = Math.max((new Date).getTime(), o)) - a
                }

                function i() {
                    return o
                }
                var o = (new Date).getTime(),
                    a = o,
                    c = t(12);
                e.exports = r, e.exports.offset = a, e.exports.getLastTimestamp = i
            }, {}],
            6: [function(t, e, n) {
                function r(t) {
                    return !(!t || !t.protocol || "file:" === t.protocol)
                }
                e.exports = r
            }, {}],
            7: [function(t, e, n) {
                function r(t, e) {
                    var n = t.getEntries();
                    n.forEach(function(t) {
                        "first-paint" === t.name ? p("timing", ["fp", Math.floor(t.startTime)]) : "first-contentful-paint" === t.name && p("timing", ["fcp", Math.floor(t.startTime)])
                    })
                }

                function i(t, e) {
                    var n = t.getEntries();
                    if (n.length > 0) {
                        var r = n[n.length - 1];
                        if (f && f < r.startTime) return;
                        p("lcp", [r])
                    }
                }

                function o(t) {
                    t.getEntries().forEach(function(t) {
                        t.hadRecentInput || p("cls", [t])
                    })
                }

                function a(t) {
                    if (t instanceof g && !y) {
                        var e = Math.round(t.timeStamp),
                            n = {
                                type: t.type
                            };
                        e <= l.now() ? n.fid = l.now() - e : e > l.offset && e <= Date.now() ? (e -= l.offset, n.fid = l.now() - e) : e = l.now(), y = !0, p("timing", ["fi", e, n])
                    }
                }

                function c(t) {
                    "hidden" === t && (f = l.now(), p("pageHide", [f]))
                }
                if (!("init" in NREUM && "page_view_timing" in NREUM.init && "enabled" in NREUM.init.page_view_timing && NREUM.init.page_view_timing.enabled === !1)) {
                    var f, u, s, d, p = t("handle"),
                        l = t("loader"),
                        v = t(9),
                        m = t(3),
                        g = NREUM.o.EV;
                    if ("PerformanceObserver" in window && "function" == typeof window.PerformanceObserver) {
                        u = new PerformanceObserver(r);
                        try {
                            u.observe({
                                entryTypes: ["paint"]
                            })
                        } catch (h) {}
                        s = new PerformanceObserver(i);
                        try {
                            s.observe({
                                entryTypes: ["largest-contentful-paint"]
                            })
                        } catch (h) {}
                        d = new PerformanceObserver(o);
                        try {
                            d.observe({
                                type: "layout-shift",
                                buffered: !0
                            })
                        } catch (h) {}
                    }
                    if ("addEventListener" in document) {
                        var y = !1,
                            w = ["click", "keydown", "mousedown", "pointerdown", "touchstart"];
                        w.forEach(function(t) {
                            document.addEventListener(t, a, m(!1))
                        })
                    }
                    v(c)
                }
            }, {}],
            8: [function(t, e, n) {
                function r(t, e) {
                    if (!i) return !1;
                    if (t !== i) return !1;
                    if (!e) return !0;
                    if (!o) return !1;
                    for (var n = o.split("."), r = e.split("."), a = 0; a < r.length; a++)
                        if (r[a] !== n[a]) return !1;
                    return !0
                }
                var i = null,
                    o = null,
                    a = /Version\/(\S+)\s+Safari/;
                if (navigator.userAgent) {
                    var c = navigator.userAgent,
                        f = c.match(a);
                    f && c.indexOf("Chrome") === -1 && c.indexOf("Chromium") === -1 && (i = "Safari", o = f[1])
                }
                e.exports = {
                    agent: i,
                    version: o,
                    match: r
                }
            }, {}],
            9: [function(t, e, n) {
                function r(t) {
                    function e() {
                        t(c && document[c] ? document[c] : document[o] ? "hidden" : "visible")
                    }
                    "addEventListener" in document && a && document.addEventListener(a, e, i(!1))
                }
                var i = t(3);
                e.exports = r;
                var o, a, c;
                "undefined" != typeof document.hidden ? (o = "hidden", a = "visibilitychange", c = "visibilityState") : "undefined" != typeof document.msHidden ? (o = "msHidden", a = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (o = "webkitHidden", a = "webkitvisibilitychange", c = "webkitVisibilityState")
            }, {}],
            10: [function(t, e, n) {
                function r(t, e) {
                    var n = [],
                        r = "",
                        o = 0;
                    for (r in t) i.call(t, r) && (n[o] = e(r, t[r]), o += 1);
                    return n
                }
                var i = Object.prototype.hasOwnProperty;
                e.exports = r
            }, {}],
            11: [function(t, e, n) {
                function r(t, e, n) {
                    e || (e = 0), "undefined" == typeof n && (n = t ? t.length : 0);
                    for (var r = -1, i = n - e || 0, o = Array(i < 0 ? 0 : i); ++r < i;) o[r] = t[e + r];
                    return o
                }
                e.exports = r
            }, {}],
            12: [function(t, e, n) {
                e.exports = {
                    exists: "undefined" != typeof window.performance && window.performance.timing && "undefined" != typeof window.performance.timing.navigationStart
                }
            }, {}],
            ee: [function(t, e, n) {
                function r() {}

                function i(t) {
                    function e(t) {
                        return t && t instanceof r ? t : t ? u(t, f, a) : a()
                    }

                    function n(n, r, i, o, a) {
                        if (a !== !1 && (a = !0), !l.aborted || o) {
                            t && a && t(n, r, i);
                            for (var c = e(i), f = m(n), u = f.length, s = 0; s < u; s++) f[s].apply(c, r);
                            var p = d[w[n]];
                            return p && p.push([b, n, r, c]), c
                        }
                    }

                    function o(t, e) {
                        y[t] = m(t).concat(e)
                    }

                    function v(t, e) {
                        var n = y[t];
                        if (n)
                            for (var r = 0; r < n.length; r++) n[r] === e && n.splice(r, 1)
                    }

                    function m(t) {
                        return y[t] || []
                    }

                    function g(t) {
                        return p[t] = p[t] || i(n)
                    }

                    function h(t, e) {
                        l.aborted || s(t, function(t, n) {
                            e = e || "feature", w[n] = e, e in d || (d[e] = [])
                        })
                    }
                    var y = {},
                        w = {},
                        b = {
                            on: o,
                            addEventListener: o,
                            removeEventListener: v,
                            emit: n,
                            get: g,
                            listeners: m,
                            context: e,
                            buffer: h,
                            abort: c,
                            aborted: !1
                        };
                    return b
                }

                function o(t) {
                    return u(t, f, a)
                }

                function a() {
                    return new r
                }

                function c() {
                    (d.api || d.feature) && (l.aborted = !0, d = l.backlog = {})
                }
                var f = "nr@context",
                    u = t("gos"),
                    s = t(10),
                    d = {},
                    p = {},
                    l = e.exports = i();
                e.exports.getOrSetContext = o, l.backlog = d
            }, {}],
            gos: [function(t, e, n) {
                function r(t, e, n) {
                    if (i.call(t, e)) return t[e];
                    var r = n();
                    if (Object.defineProperty && Object.keys) try {
                        return Object.defineProperty(t, e, {
                            value: r,
                            writable: !0,
                            enumerable: !1
                        }), r
                    } catch (o) {}
                    return t[e] = r, r
                }
                var i = Object.prototype.hasOwnProperty;
                e.exports = r
            }, {}],
            handle: [function(t, e, n) {
                function r(t, e, n, r) {
                    i.buffer([t], r), i.emit(t, e, n)
                }
                var i = t("ee").get("handle");
                e.exports = r, r.ee = i
            }, {}],
            id: [function(t, e, n) {
                function r(t) {
                    var e = typeof t;
                    return !t || "object" !== e && "function" !== e ? -1 : t === window ? 0 : a(t, o, function() {
                        return i++
                    })
                }
                var i = 1,
                    o = "nr@id",
                    a = t("gos");
                e.exports = r
            }, {}],
            loader: [function(t, e, n) {
                function r() {
                    if (!T++) {
                        var t = P.info = NREUM.info,
                            e = g.getElementsByTagName("script")[0];
                        if (setTimeout(u.abort, 3e4), !(t && t.licenseKey && t.applicationID && e)) return u.abort();
                        f(O, function(e, n) {
                            t[e] || (t[e] = n)
                        });
                        var n = a();
                        c("mark", ["onload", n + P.offset], null, "api"), c("timing", ["load", n]);
                        var r = g.createElement("script");
                        0 === t.agent.indexOf("http://") || 0 === t.agent.indexOf("https://") ? r.src = t.agent : r.src = v + "://" + t.agent, e.parentNode.insertBefore(r, e)
                    }
                }

                function i() {
                    "complete" === g.readyState && o()
                }

                function o() {
                    c("mark", ["domContent", a() + P.offset], null, "api")
                }
                var a = t(5),
                    c = t("handle"),
                    f = t(10),
                    u = t("ee"),
                    s = t(8),
                    d = t(6),
                    p = t(2),
                    l = t(3),
                    v = p.getConfiguration("ssl") === !1 ? "http" : "https",
                    m = window,
                    g = m.document,
                    h = "addEventListener",
                    y = "attachEvent",
                    w = m.XMLHttpRequest,
                    b = w && w.prototype,
                    E = !d(m.location);
                NREUM.o = {
                    ST: setTimeout,
                    SI: m.setImmediate,
                    CT: clearTimeout,
                    XHR: w,
                    REQ: m.Request,
                    EV: m.Event,
                    PR: m.Promise,
                    MO: m.MutationObserver
                };
                var x = "" + location,
                    O = {
                        beacon: "bam.nr-data.net",
                        errorBeacon: "bam.nr-data.net",
                        agent: "js-agent.newrelic.com/nr-1212.min.js"
                    },
                    M = w && b && b[h] && !/CriOS/.test(navigator.userAgent),
                    P = e.exports = {
                        offset: a.getLastTimestamp(),
                        now: a,
                        origin: x,
                        features: {},
                        xhrWrappable: M,
                        userAgent: s,
                        disabled: E
                    };
                if (!E) {
                    t(1), t(7), g[h] ? (g[h]("DOMContentLoaded", o, l(!1)), m[h]("load", r, l(!1))) : (g[y]("onreadystatechange", i), m[y]("onload", r)), c("mark", ["firstbyte", a.getLastTimestamp()], null, "api");
                    var T = 0
                }
            }, {}],
            "wrap-function": [function(t, e, n) {
                function r(t, e) {
                    function n(e, n, r, f, u) {
                        function nrWrapper() {
                            var o, a, s, p;
                            try {
                                a = this, o = d(arguments), s = "function" == typeof r ? r(o, a) : r || {}
                            } catch (l) {
                                i([l, "", [o, a, f], s], t)
                            }
                            c(n + "start", [o, a, f], s, u);
                            try {
                                return p = e.apply(a, o)
                            } catch (v) {
                                throw c(n + "err", [o, a, v], s, u), v
                            } finally {
                                c(n + "end", [o, a, p], s, u)
                            }
                        }
                        return a(e) ? e : (n || (n = ""), nrWrapper[p] = e, o(e, nrWrapper, t), nrWrapper)
                    }

                    function r(t, e, r, i, o) {
                        r || (r = "");
                        var c, f, u, s = "-" === r.charAt(0);
                        for (u = 0; u < e.length; u++) f = e[u], c = t[f], a(c) || (t[f] = n(c, s ? f + r : r, i, f, o))
                    }

                    function c(n, r, o, a) {
                        if (!v || e) {
                            var c = v;
                            v = !0;
                            try {
                                t.emit(n, r, o, e, a)
                            } catch (f) {
                                i([f, n, r, o], t)
                            }
                            v = c
                        }
                    }
                    return t || (t = s), n.inPlace = r, n.flag = p, n
                }

                function i(t, e) {
                    e || (e = s);
                    try {
                        e.emit("internal-error", t)
                    } catch (n) {}
                }

                function o(t, e, n) {
                    if (Object.defineProperty && Object.keys) try {
                        var r = Object.keys(t);
                        return r.forEach(function(n) {
                            Object.defineProperty(e, n, {
                                get: function() {
                                    return t[n]
                                },
                                set: function(e) {
                                    return t[n] = e, e
                                }
                            })
                        }), e
                    } catch (o) {
                        i([o], n)
                    }
                    for (var a in t) l.call(t, a) && (e[a] = t[a]);
                    return e
                }

                function a(t) {
                    return !(t && t instanceof Function && t.apply && !t[p])
                }

                function c(t, e) {
                    var n = e(t);
                    return n[p] = t, o(t, n, s), n
                }

                function f(t, e, n) {
                    var r = t[e];
                    t[e] = c(r, n)
                }

                function u() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; ++n) e[n] = arguments[n];
                    return e
                }
                var s = t("ee"),
                    d = t(11),
                    p = "nr@original",
                    l = Object.prototype.hasOwnProperty,
                    v = !1;
                e.exports = r, e.exports.wrapFunction = c, e.exports.wrapInPlace = f, e.exports.argsToArray = u
            }, {}]
        }, {}, ["loader"]);
    </script>
    <meta http-equiv="cleartype" content="on">
    <link rel="apple-touch-icon-precomposed" href="https://www.oscars.org/sites/all/themes/guide/apple-touch-icon-precomposed-114x114.png" sizes="114x114">
    <link rel="apple-touch-icon-precomposed" href="https://www.oscars.org/sites/all/themes/guide/apple-touch-icon-precomposed-144x144.png" sizes="144x144">
    <link rel="apple-touch-icon-precomposed" href="https://www.oscars.org/sites/all/themes/guide/apple-touch-icon-precomposed-72x72.png" sizes="72x72">
    <link rel="apple-touch-icon-precomposed" href="https://www.oscars.org/sites/all/themes/guide/apple-touch-icon-precomposed.png">
    <link rel="profile" href="http://www.w3.org/1999/xhtml/vocab">
    <meta name="generator" content="Drupal 7 (http://drupal.org)">
    <link rel="canonical" href="https://www.oscars.org/oscars/ceremonies/2021">
    <link rel="shortlink" href="https://www.oscars.org/oscars/ceremonies/2021">
    <meta property="og:description" content="for his performance in &quot;Judas and the Black Messiah&quot;">
    <meta property="og:image" content="https://www.oscars.org/sites/oscars/files/159379_screen_shot_2021-04-25_at_5.33.53_pm_2.jpg">
    <meta property="og:site_name" content="Oscars.org | Academy of Motion Picture Arts and Sciences">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://www.oscars.org/oscars/ceremonies/2021">
    <meta property="og:title" content="The 93rd Academy Awards | 2021">
    <meta name="twitter:description" content="for his performance in &quot;Judas and the Black Messiah&quot;">
    <meta name="twitter:image" content="https://www.oscars.org/sites/oscars/files/159379_screen_shot_2021-04-25_at_5.33.53_pm_2.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://www.oscars.org/oscars/ceremonies/2021">
    <meta name="twitter:title" content="The 93rd Academy Awards | 2021">
    <title>2021 | Oscars.org | Academy of Motion Picture Arts and Sciences</title>
    <link type="text/css" rel="stylesheet" href="/website_clones/oscars/sites/oscars/files/css/css_H5mJXUyXoCAq-Sf8lN1tH3XwrpeikRdb9vdFXkiXXSw.css" media="all">
    <link type="text/css" rel="stylesheet" href="/website_clones/oscars/sites/oscars/files/css/css_Cp_qe2BhJbEY0A2pznFL35433XpeKS3Y0s28-7Jm1bc.css" media="all">
    <link type="text/css" rel="stylesheet" href="/website_clones/oscars/sites/oscars/files/css/css_W3VjxiD8fss0WIdcv17AILSgIyZZUyC-9N-xmcB6TZ8.css" media="all">
    <link type="text/css" rel="stylesheet" href="/website_clones/oscars/sites/oscars/files/css/css_IY68SGQ3nBUOWgWRc517tsDpJiKsaar4dcYc9cB7exM.css" media="print">

    <!--[if lte IE 8]>
<link type="text/css" rel="stylesheet" href="/website_clones/oscars/sites/oscars/files/css/css__QCcitl61mBVyywqsCfU_z20nEodNuJyi5TSYS2hgik.css" media="all" />
<![endif]-->
    <link type="text/css" rel="stylesheet" href="https://www.oscars.org/sites/oscars/files/css/css_47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU.css" media="all">

    <!--[if lte IE 8]>
<link type="text/css" rel="stylesheet" href="https://www.oscars.org/sites/oscars/files/css/css_47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU.css" media="all" />
<![endif]-->
    <script src="https://www.oscars.org/sites/oscars/files/js/js_aBoHqw3osaBJ3cNY9Skord7cW2BmXQdZbTkLB_TRJZg.js"></script>
    <script src="https://www.oscars.org/sites/oscars/files/js/js_kPTgsHRiF8DXUOW0QYwc172AS5HCpoPIlvsepJYL4rQ.js"></script>
    <script src="https://www.oscars.org/sites/oscars/files/js/js_THcwq4G882w3Eb1HklHrvzGAKa_-1g_0QbuBqjMhaV4.js"></script>
    <script src="https://www.oscars.org/sites/all/libraries/mediaelement/build/mediaelement-and-player.min.js?v=4"></script>
    <script src="https://www.oscars.org/sites/oscars/files/js/js_eveQl-dRUFFD5Mw-pstv55LBQHFNt2cd4TUokEv-iqw.js"></script>
    <script src="https://www.oscars.org/sites/oscars/files/js/js_pfjSTlgF0vRfGNMYv7zjlztNSCBBcJSh1L0Csdh1qXQ.js"></script>
    <script src="https://www.oscars.org/sites/oscars/files/js/js_-AeH-NcPeqgLU2-SgwICz3pBdW814A3o5axtpR2rrYM.js"></script>
    <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="ddfc85dd-9751-4c1f-866f-ebb32688ad41" type="text/javascript" async=""></script>
    <script src="https://www.oscars.org/sites/oscars/files/js/js_iH6sQvTpsfQCI-LXJbblkOvbmppd_o34090BHTYQrgc.js"></script>
    <script>
        (function(i, s, o, g, r, a, m) {
            i["GoogleAnalyticsObject"] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o), m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
        ga("create", "UA-33598486-1", {
            "cookieDomain": "auto"
        });
        ga("require", "linkid", "linkid.js");
        ga("set", "anonymizeIp", true);
        ga("set", "page", location.pathname + location.search + location.hash);
        ga("send", "pageview");
    </script>
    <script src="https://www.oscars.org/sites/oscars/files/js/js_BeUOzCxKh7KSy-MLyXAJ9uHar-eLXpuU0cugmSW3GWY.js"></script>
    <script src="https://www.oscars.org/sites/oscars/files/js/js_EvqEQi1sEAC88XSfmvdmCsVxhnDyE_q-YBhjrGOXIHw.js"></script>
    <script>
        jQuery.extend(Drupal.settings, {
            "basePath": "\/",
            "pathPrefix": "",
            "ajaxPageState": {
                "theme": "oscar",
                "theme_token": "7iRi68CAyQSDQeuzuPnCYwpeMiS8GbDvZcXgB7dL4AY",
                "jquery_version": "1.9",
                "js": {
                    "sites\/oscars\/modules\/features\/ampas_ceremonies\/js\/ceremonies.js": 1,
                    "public:\/\/google_tag\/google_tag.script.js": 1,
                    "sites\/all\/modules\/contrib\/jquery_update\/replace\/jquery\/1.9\/jquery.min.js": 1,
                    "misc\/jquery-extend-3.4.0.js": 1,
                    "misc\/jquery-html-prefilter-3.5.0-backport.js": 1,
                    "misc\/jquery.once.js": 1,
                    "misc\/drupal.js": 1,
                    "sites\/all\/themes\/contrib\/omega\/omega\/js\/no-js.js": 1,
                    "sites\/oscars\/modules\/contrib\/equalheights\/jquery.equalheights.js": 1,
                    "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.core.min.js": 1,
                    "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.widget.min.js": 1,
                    "sites\/all\/libraries\/mediaelement\/build\/mediaelement-and-player.min.js": 1,
                    "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/external\/jquery.cookie.js": 1,
                    "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.tabs.min.js": 1,
                    "sites\/all\/modules\/contrib\/jquery_update\/replace\/jquery.form\/4\/jquery.form.min.js": 1,
                    "sites\/all\/modules\/contrib\/jquery_update\/replace\/ui\/ui\/minified\/jquery.ui.accordion.min.js": 1,
                    "misc\/ajax.js": 1,
                    "sites\/all\/modules\/contrib\/jquery_update\/js\/jquery_update.js": 1,
                    "sites\/oscars\/modules\/contrib\/equalheights\/equalheights.js": 1,
                    "sites\/oscars\/modules\/contrib\/media_colorbox\/media_colorbox.js": 1,
                    "misc\/progress.js": 1,
                    "sites\/all\/libraries\/colorbox\/jquery.colorbox-min.js": 1,
                    "sites\/all\/modules\/contrib\/colorbox\/js\/colorbox.js": 1,
                    "sites\/all\/modules\/contrib\/colorbox\/js\/colorbox_load.js": 1,
                    "sites\/all\/modules\/contrib\/colorbox\/js\/colorbox_inline.js": 1,
                    "sites\/all\/modules\/contrib\/mediaelement\/mediaelement.js": 1,
                    "sites\/oscars\/modules\/contrib\/custom_search\/js\/custom_search.js": 1,
                    "sites\/all\/modules\/contrib\/views\/js\/base.js": 1,
                    "sites\/all\/modules\/contrib\/ctools\/js\/auto-submit.js": 1,
                    "sites\/oscars\/modules\/contrib\/views_ajax_get\/views_ajax_get.js": 1,
                    "sites\/all\/modules\/contrib\/views\/js\/ajax_view.js": 1,
                    "sites\/all\/libraries\/imagesloaded\/jquery.imagesloaded.min.js": 1,
                    "sites\/all\/libraries\/jquery.localScroll\/jquery.localScroll.min.js": 1,
                    "sites\/all\/libraries\/jquery.scrollTo\/jquery.scrollTo.min.js": 1,
                    "sites\/oscars\/modules\/custom\/social_drawer\/js\/social_drawer.js": 1,
                    "0": 1,
                    "sites\/all\/modules\/contrib\/cookiebot\/js\/cookiebot.js": 1,
                    "sites\/all\/modules\/contrib\/google_analytics\/googleanalytics.js": 1,
                    "1": 1,
                    "sites\/oscars\/modules\/contrib\/topbar_msg\/topbar_msg.js": 1,
                    "sites\/oscars\/modules\/contrib\/quicktabs\/js\/quicktabs.js": 1,
                    "sites\/oscars\/modules\/contrib\/jquery_localscroll\/jquery_localscroll.js": 1,
                    "sites\/oscars\/modules\/custom\/ajax_error_suppress\/js\/ajax.js": 1,
                    "sites\/oscars\/modules\/contrib\/colorbox_node\/colorbox_node.js": 1,
                    "sites\/all\/themes\/guide\/js\/libs\/jquery-easing\/jquery.easing.min.js": 1,
                    "sites\/all\/themes\/guide\/js\/libs\/jquery-swiper\/dist\/js\/swiper.jquery.min.js": 1,
                    "sites\/all\/themes\/guide\/js\/libs\/jquery-lazyload\/jquery.lazyload.min.js": 1,
                    "sites\/all\/themes\/guide\/js\/libs\/history.js\/scripts\/bundled\/html4+html5\/jquery.history.js": 1,
                    "sites\/all\/themes\/guide\/js\/guide.facebook-pixel.js": 1,
                    "sites\/all\/themes\/guide\/js\/guide.scripts.js": 1,
                    "sites\/all\/themes\/oscarbase\/js\/libs\/modernizr\/modernizr.custom.min.js": 1,
                    "sites\/all\/themes\/oscarbase\/js\/libs\/jquery-dotdotdot\/src\/js\/jquery.dotdotdot.min.js": 1,
                    "sites\/all\/themes\/oscarbase\/js\/libs\/jquery-waypoints\/lib\/jquery.waypoints.min.js": 1,
                    "sites\/all\/themes\/oscarbase\/js\/libs\/jquery-waypoints\/lib\/shortcuts\/sticky.min.js": 1,
                    "sites\/all\/themes\/oscarbase\/js\/libs\/jquery-hoverIntent\/jquery.hoverIntent.js": 1,
                    "sites\/all\/themes\/oscarbase\/js\/oscarbase.facebook-pixel.js": 1,
                    "sites\/all\/themes\/oscarbase\/js\/oscarbase.colorbox.js": 1,
                    "sites\/all\/themes\/oscarbase\/js\/oscarbase.scripts.js": 1,
                    "sites\/all\/themes\/oscar\/js\/oscar.scripts.js": 1
                },
                "css": {
                    "sites\/all\/themes\/contrib\/omega\/omega\/css\/modules\/system\/system.base.css": 1,
                    "sites\/all\/themes\/contrib\/omega\/omega\/css\/modules\/system\/system.menus.theme.css": 1,
                    "sites\/all\/themes\/contrib\/omega\/omega\/css\/modules\/system\/system.messages.theme.css": 1,
                    "sites\/all\/themes\/contrib\/omega\/omega\/css\/modules\/system\/system.theme.css": 1,
                    "sites\/oscars\/modules\/features\/ampas_wysiwyg\/css\/ampas_wysiwyg.css": 1,
                    "sites\/oscars\/modules\/contrib\/calendar\/css\/calendar_multiday.css": 1,
                    "sites\/oscars\/modules\/contrib\/colorbox_node\/colorbox_node.css": 1,
                    "modules\/node\/node.css": 1,
                    "sites\/all\/themes\/contrib\/omega\/omega\/css\/modules\/field\/field.theme.css": 1,
                    "sites\/all\/modules\/contrib\/views\/css\/views.css": 1,
                    "sites\/all\/themes\/contrib\/omega\/omega\/css\/modules\/search\/search.theme.css": 1,
                    "sites\/all\/themes\/contrib\/omega\/omega\/css\/modules\/user\/user.base.css": 1,
                    "sites\/all\/themes\/contrib\/omega\/omega\/css\/modules\/user\/user.theme.css": 1,
                    "sites\/all\/libraries\/mediaelement\/build\/mediaelementplayer.min.css": 1,
                    "misc\/ui\/jquery.ui.core.css": 1,
                    "misc\/ui\/jquery.ui.theme.css": 1,
                    "misc\/ui\/jquery.ui.tabs.css": 1,
                    "misc\/ui\/jquery.ui.accordion.css": 1,
                    "sites\/all\/modules\/contrib\/ctools\/css\/ctools.css": 1,
                    "sites\/oscars\/modules\/contrib\/social-share\/icons\/social-share-icons-16.css": 1,
                    "sites\/oscars\/modules\/contrib\/custom_search\/custom_search.css": 1,
                    "sites\/oscars\/modules\/contrib\/topbar_msg\/topbar_msg.css": 1,
                    "sites\/oscars\/modules\/contrib\/quicktabs\/css\/quicktabs.css": 1,
                    "sites\/all\/themes\/guide\/css\/guide.normalize.css": 1,
                    "sites\/all\/themes\/guide\/js\/libs\/jquery-swiper\/dist\/css\/swiper.min.css": 1,
                    "sites\/all\/themes\/guide\/css\/guide.hacks.css": 1,
                    "sites\/all\/themes\/guide\/css\/guide.styles.css": 1,
                    "sites\/all\/themes\/oscarbase\/css\/oscarbase.hacks.css": 1,
                    "sites\/all\/themes\/oscarbase\/css\/oscarbase.styles.css": 1,
                    "sites\/all\/themes\/oscar\/css\/oscar.hacks.css": 1,
                    "sites\/all\/themes\/oscar\/css\/oscar.styles.css": 1,
                    "sites\/all\/themes\/guide\/css\/guide.print.css": 1,
                    "sites\/all\/themes\/guide\/css\/guide.no-query.css": 1,
                    "sites\/all\/themes\/oscarbase\/css\/oscarbase.no-query.css": 1,
                    "sites\/all\/themes\/oscar\/css\/oscar.no-query.css": 1,
                    "all:0": 1,
                    "sites\/all\/themes\/oscar\/..\/oscarbase\/css\/layouts\/generic\/oscar-generic.layout.css": 1,
                    "all:1": 1
                }
            },
            "colorbox": {
                "transition": "elastic",
                "speed": "350",
                "opacity": "0.85",
                "slideshow": false,
                "slideshowAuto": true,
                "slideshowSpeed": "2500",
                "slideshowStart": "start slideshow",
                "slideshowStop": "stop slideshow",
                "current": "{current} of {total}",
                "previous": "\u00ab Prev",
                "next": "Next \u00bb",
                "close": "Close",
                "overlayClose": true,
                "returnFocus": true,
                "maxWidth": "100%",
                "maxHeight": "100%",
                "initialWidth": "100%",
                "initialHeight": "100%",
                "fixed": true,
                "scrolling": true,
                "mobiledetect": false,
                "mobiledevicewidth": "480px",
                "specificPagesDefaultValue": "admin*\nimagebrowser*\nimg_assist*\nimce*\nnode\/add\/*\nnode\/*\/edit\nprint\/*\nprintpdf\/*\nsystem\/ajax\nsystem\/ajax\/*"
            },
            "mediaelementAll": true,
            "custom_search": {
                "form_target": "_self",
                "solr": 1
            },
            "ampas_ceremonies": {
                "min_year": "2021",
                "current_year": "2022",
                "selected_year": "2021"
            },
            "better_exposed_filters": {
                "views": {
                    "awards_ceremonies": {
                        "displays": {
                            "oscars": {
                                "filters": []
                            }
                        }
                    },
                    "awards": {
                        "displays": {
                            "osc_honoree_by_cat": {
                                "filters": {
                                    "field_award_category_tid": {
                                        "required": false
                                    }
                                }
                            },
                            "osc_honoree_by_film": {
                                "filters": []
                            }
                        }
                    }
                }
            },
            "urlIsAjaxTrusted": {
                "\/": true,
                "\/views\/ajax": true,
                "\/oscars\/ceremonies\/2021": true
            },
            "viewsAjaxGet": ["awards", "awards"],
            "views": {
                "ajax_path": "\/views\/ajax",
                "ajaxViews": {
                    "views_dom_id:7767166267043651f5a3ed4845e66438": {
                        "view_name": "awards",
                        "view_display_id": "osc_honoree_by_cat",
                        "view_args": "2021",
                        "view_path": "oscars\/ceremonies\/2021",
                        "view_base_path": null,
                        "view_dom_id": "7767166267043651f5a3ed4845e66438",
                        "pager_element": 0
                    },
                    "views_dom_id:2d0f03702454c9847356db9bab007633": {
                        "view_name": "awards",
                        "view_display_id": "osc_honoree_by_film",
                        "view_args": "2021\/all",
                        "view_path": "oscars\/ceremonies\/2021",
                        "view_base_path": null,
                        "view_dom_id": "2d0f03702454c9847356db9bab007633",
                        "pager_element": 0
                    }
                }
            },
            "equalHeightsModule": {
                "classes": [{
                    "selector": ".theme-oscar .view-collection.view-display-id-playlist .view-grouping, .theme-oscartablet .view-collection.view-display-id-playlist .view-grouping",
                    "mediaquery": "",
                    "minheight": "",
                    "maxheight": "",
                    "overflow": "auto"
                }],
                "imagesloaded_ie8": 1
            },
            "jquery_localscroll": {
                "global": 0,
                "ids": {
                    "academy-story-scrollto": "academy-story-scrollto",
                    "mth_events": "mth_events"
                },
                "hash": 0,
                "duration": "500",
                "offset": "0"
            },
            "googleanalytics": {
                "trackOutbound": 1,
                "trackMailto": 1,
                "trackDownload": 1,
                "trackDownloadExtensions": "7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip",
                "trackColorbox": 1,
                "trackUrlFragments": 1
            },
            "TopBarMsg": {
                "message": "COVID-19 UPDATE",
                "link_text": "",
                "link": "\/node\/146986",
                "color_bg": "#C79F27",
                "color_text": "#FFFFFF",
                "color_link": "#FFFFFF",
                "autohide": 0,
                "autohide_seconds": "5",
                "link_target": ""
            },
            "quicktabs": {
                "qt_honorees": {
                    "name": "honorees",
                    "tabs": [{
                        "vid": "awards",
                        "display": "osc_honoree_by_cat",
                        "args": "%2",
                        "view_path": "oscars%2Fceremonies%2F2021",
                        "view_dom_id": 1,
                        "ajax_args": "2021",
                        "actual_args": ["2021"]
                    }, {
                        "vid": "awards",
                        "display": "osc_honoree_by_film",
                        "args": "%2",
                        "view_path": "oscars%2Fceremonies%2F2021",
                        "view_dom_id": 2,
                        "ajax_args": "2021",
                        "actual_args": ["2021"]
                    }],
                    "ajaxPageState": {
                        "jquery_version": "1.9"
                    }
                }
            },
            "colorbox_node": {
                "width": "600px",
                "height": "600px"
            }
        });
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=814559158582616&ev=PageView&noscript=1" /></noscript>
    <style type="text/css" id="CookieConsentStateDisplayStyles">
        .cookieconsent-optin,
        .cookieconsent-optin-preferences,
        .cookieconsent-optin-statistics,
        .cookieconsent-optin-marketing {
            display: block;
            display: initial;
        }
        
        .cookieconsent-optout-preferences,
        .cookieconsent-optout-statistics,
        .cookieconsent-optout-marketing,
        .cookieconsent-optout {
            display: none;
        }
    </style>
</head>

<body class="html not-front not-logged-in page-oscars page-oscars-ceremonies page-oscars-ceremonies- page-oscars-ceremonies-2021 section-oscars theme-oscar group-oscars section-ceremonies page-2021 social_drawer-processed topbarmsg-processed topbarmsg-open facebook-pixel-processed guideScripts-processed oscarbase-facebook-pixel-processed oscarBaseColorbox-processed oscarbaseScripts-processed oscarScripts-processed">
    <a id="topbarmsg-open" style="background-color: rgb(199, 159, 39); display: none;">Open</a>
    <a href="#main-content" class="element-invisible element-focusable">Skip to main content</a>
    <noscript aria-hidden="true"><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W3KXNCL" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <div class="layout-generic l-page">
        <header class="l-header" role="banner">
            <div id="mobile-menu">
                <a id="mobile-menu-btn" href="#">
                    <span>Menu</span>
                </a>
            </div>

            <div id="site-logo">
                <a href="/" title="Home" rel="home" class="site-logo">
                    <img src="https://www.oscars.org/sites/all/themes/oscar/logo.png" alt="Home">
                </a>
            </div>

            <div id="site-search">
                <div class="l-region l-region--search">
                    <div id="block-search-form" role="search" class="block block--search block--search-form ">
                        <div class="block__content">
                            <form class="search-form search-block-form" role="search" action="/oscars/ceremonies/2021" method="post" id="search-block-form" accept-charset="UTF-8" target="_self">
                                <div>
                                    <div class="container-inline">
                                        <h2 class="element-invisible">Search form</h2>
                                        <div class="form-item form-type-textfield form-item-search-block-form">
                                            <label class="element-invisible" for="edit-search-block-form--2">Search this site </label>
                                            <input title="" class="custom-search-box form-text" placeholder="" type="text" id="edit-search-block-form--2" name="search_block_form" value="" size="10" maxlength="128">
                                        </div>
                                        <div class="form-actions form-wrapper" id="edit-actions"><input alt="Search" class="custom-search-button form-submit" type="image" id="edit-submit" name="op" src="https://www.oscars.org/sites/all/themes/guide/images/icon.search.png"></div><input type="hidden" name="form_build_id" value="form-pY0PaLPZlarsNoP8lXYvdH6R0QFnP9V8KKV-RxGJT9U">
                                        <input type="hidden" name="form_id" value="search_block_form">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id="site-login">
                <div class="l-region l-region--members">
                    <div id="block-block-16" class="block block--block block--block-16 members-login">
                        <div class="block__content">
                            <p><a href="https://members.oscars.org/" target="_blank">Members Login</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <a id="mobile-search-btn" href="#">
                <span>Search</span>
            </a>

            <div class="l-region l-region--navigation">
                <nav id="block-system-main-menu" role="navigation" class="block block--system block--menu block--system-main-menu ">

                    <ul class="menu hover-intent">
                        <li class="first leaf level-1 menu-home only-phone only-tablet"><span class="menu-item-span"><a href="/" class="only-phone only-tablet">Home</a></span></li>
                        <li class="expanded active-trail level-1 menu-awards has-sub-menu"><span class="menu-item-span"><span class="active-trail nolink" tabindex="0">Awards</span></span>
                            <ul class="menu">
                                <li class="first leaf active-trail level-2 menu-oscars"><span class="menu-item-span"><a href="/oscars" class="active-trail">Oscars</a></span></li>
                                <li class="leaf level-2 menu-governors-awards"><span class="menu-item-span"><a href="/governors">Governors Awards</a></span></li>
                                <li class="leaf level-2 menu-scientific-and-technical-awards"><span class="menu-item-span"><a href="/sci-tech">Scientific and Technical Awards</a></span></li>
                                <li class="last leaf level-2 menu-shop"><span class="menu-item-span"><a href="https://shop.oscars.org">Shop</a></span></li>
                            </ul>
                        </li>
                        <li class="expanded level-1 menu-museum has-sub-menu"><span class="menu-item-span"><span class="nolink" tabindex="0">Museum</span></span>
                            <ul class="menu">
                                <li class="first last leaf level-2 menu-about-the-museum"><span class="menu-item-span"><a href="/museum">About the Museum</a></span></li>
                            </ul>
                        </li>
                        <li class="expanded level-1 menu-explore has-sub-menu"><span class="menu-item-span"><span class="nolink" tabindex="0">Explore</span></span>
                            <ul class="menu">
                                <li class="first leaf level-2 menu-aframe"><span class="menu-item-span"><a href="https://aframe.oscars.org?dr=https%3A%2F%2Foscars.org">A.frame</a></span></li>
                                <li class="leaf level-2 menu-events-calendar"><span class="menu-item-span"><a href="/events">Events Calendar</a></span></li>
                                <li class="leaf level-2 menu-collection-highlights"><span class="menu-item-span"><a href="/collection-highlights">Collection Highlights</a></span></li>
                                <li class="leaf level-2 menu-academy-originals"><span class="menu-item-span"><a href="/videos-photos/academy-originals">Academy Originals</a></span></li>
                                <li class="leaf level-2 menu-our-story"><span class="menu-item-span"><a href="/academy-story">Our Story</a></span></li>
                                <li class="leaf level-2 menu-news"><span class="menu-item-span"><a href="/news">News</a></span></li>
                                <li class="last leaf level-2 menu-videos--photos"><span class="menu-item-span"><a href="/videos-photos">Videos &amp; Photos</a></span></li>
                            </ul>
                        </li>
                        <li class="expanded level-1 menu-learn has-sub-menu"><span class="menu-item-span"><span class="nolink" tabindex="0">Learn</span></span>
                            <ul class="menu">
                                <li class="first leaf level-2 menu-about-membership"><span class="menu-item-span"><a href="/about/become-new-member">About Membership</a></span></li>
                                <li class="leaf level-2 menu-academy-film-archive"><span class="menu-item-span"><a href="/film-archive">Academy Film Archive</a></span></li>
                                <li class="leaf level-2 menu-margaret-herrick-library"><span class="menu-item-span"><a href="/library">Margaret Herrick Library</a></span></li>
                                <li class="leaf level-2 menu-oral-history"><span class="menu-item-span"><a href="/oral-history">Oral History</a></span></li>
                                <li class="last leaf level-2 menu-science-and-technology-council"><span class="menu-item-span"><a href="/learn/science-technology">SCIENCE AND TECHNOLOGY COUNCIL</a></span></li>
                            </ul>
                        </li>
                        <li class="expanded level-1 menu-academy-gold has-sub-menu"><span class="menu-item-span"><span class="nolink" tabindex="0">Academy Gold</span></span>
                            <ul class="menu">
                                <li class="first leaf level-2 menu-about-gold"><span class="menu-item-span"><a href="/academy-gold/about-gold">About Gold</a></span></li>
                                <li class="leaf level-2 menu-gold-rising"><span class="menu-item-span"><a href="/gold-rising">Gold Rising</a></span></li>
                                <li class="leaf level-2 menu-nicholl-fellowships"><span class="menu-item-span"><a href="/nicholl">Nicholl Fellowships</a></span></li>
                                <li class="leaf level-2 menu-student-academy-awards"><span class="menu-item-span"><a href="/saa">Student Academy Awards</a></span></li>
                                <li class="leaf level-2 menu-fellowship-for-women"><span class="menu-item-span"><a href="/academy-gold/fellowship-for-women">Fellowship for Women</a></span></li>
                                <li class="leaf level-2 menu-alumni-program"><span class="menu-item-span"><a href="/academy-gold/alumni-program">Alumni Program</a></span></li>
                                <li class="leaf level-2 menu-careers-in-film"><span class="menu-item-span"><a href="/academy-gold/careers-film-summit">Careers in Film</a></span></li>
                                <li class="last leaf level-2 menu-grants"><span class="menu-item-span"><a href="/education-grants/grants">Grants</a></span></li>
                            </ul>
                        </li>
                        <li class="last leaf level-1 menu-member-login only-phone"><span class="menu-item-span"><a href="https://members.oscars.org" class="only-phone" target="_blank">Member Login</a></span></li>
                    </ul>
                </nav>
            </div>
        </header>


        <div class="l-main">
            <div class="l-content" role="main">
                <div class="l-region l-region--content">
                    <div class="breadcrumb">
                        <h2 class="element-invisible">You are here</h2><a href="/">Home</a> / <a href="/oscars">Oscars</a> / <a href="/oscars/ceremonies">Oscars® Ceremonies</a> / 2021</div>
                    <a id="main-content"></a>


                    <h1 id="page-title" class="title">2021</h1>



                    <div class="view view-awards-ceremonies view-id-awards_ceremonies view-display-id-oscars view-dom-id-afb4fe16e4c58e71d49cd6eeda095b8a">


                        <div class="attachment attachment-before">
                            <h1 class="title ceremony-title">Oscars<sup>®</sup> Ceremonies</h1><br>
                            <h1 class="subtitle">Experience over nine decades of the Oscars from 1927 to 2021</h1><br>
                            <div id="ceremonies-decade-scroller" class="decade-scroller">
                                <div class="decades">
                                    <ul class="links">
                                        <li class="decade-1920 first"><a href="/oscars/ceremonies/1920" class="decade">1920s</a></li>
                                        <li class="decade-1930"><a href="/oscars/ceremonies/1930" class="decade">1930s</a></li>
                                        <li class="decade-1940"><a href="/oscars/ceremonies/1940" class="decade">1940s</a></li>
                                        <li class="decade-1950"><a href="/oscars/ceremonies/1950" class="decade">1950s</a></li>
                                        <li class="decade-1960"><a href="/oscars/ceremonies/1960" class="decade">1960s</a></li>
                                        <li class="decade-1970"><a href="/oscars/ceremonies/1970" class="decade">1970s</a></li>
                                        <li class="decade-1980"><a href="/oscars/ceremonies/1980" class="decade">1980s</a></li>
                                        <li class="decade-1990"><a href="/oscars/ceremonies/1990" class="decade">1990s</a></li>
                                        <li class="decade-2000"><a href="/oscars/ceremonies/2000" class="decade">2000s</a></li>
                                        <li class="decade-2010"><a href="/oscars/ceremonies/2010" class="decade">2010s</a></li>
                                        <li class="decade-2020 last active"><a href="/oscars/ceremonies/2020" class="decade active">2020s</a></li>
                                    </ul>
                                    <div class="decades-nav decade-scroller-nav" style="display: block;">
                                        <a href="/oscars/ceremonies/1929" class="prev end">previous</a> <a href="/oscars/ceremonies/2021" class="next active end">next</a> </div>
                                </div>
                                <div class="years">
                                    <ul class="links">
                                        <li class="year-1929 decade-1920 first"><a href="/oscars/ceremonies/1929" class="year">1929</a></li>
                                        <li class="year-1930 decade-1930"><a href="/oscars/ceremonies/1930" class="year">1930</a></li>
                                        <li class="year-1931 decade-1930"><a href="/oscars/ceremonies/1931" class="year">1931</a></li>
                                        <li class="year-1932 decade-1930"><a href="/oscars/ceremonies/1932" class="year">1932</a></li>
                                        <li class="year-1933 decade-1930"><a href="/oscars/ceremonies/1933" class="year">1933</a></li>
                                        <li class="year-1934 decade-1930"><a href="/oscars/ceremonies/1934" class="year">1934</a></li>
                                        <li class="year-1935 decade-1930"><a href="/oscars/ceremonies/1935" class="year">1935</a></li>
                                        <li class="year-1936 decade-1930"><a href="/oscars/ceremonies/1936" class="year">1936</a></li>
                                        <li class="year-1937 decade-1930"><a href="/oscars/ceremonies/1937" class="year">1937</a></li>
                                        <li class="year-1938 decade-1930"><a href="/oscars/ceremonies/1938" class="year">1938</a></li>
                                        <li class="year-1939 decade-1930"><a href="/oscars/ceremonies/1939" class="year">1939</a></li>
                                        <li class="year-1940 decade-1940"><a href="/oscars/ceremonies/1940" class="year">1940</a></li>
                                        <li class="year-1941 decade-1940"><a href="/oscars/ceremonies/1941" class="year">1941</a></li>
                                        <li class="year-1942 decade-1940"><a href="/oscars/ceremonies/1942" class="year">1942</a></li>
                                        <li class="year-1943 decade-1940"><a href="/oscars/ceremonies/1943" class="year">1943</a></li>
                                        <li class="year-1944 decade-1940"><a href="/oscars/ceremonies/1944" class="year">1944</a></li>
                                        <li class="year-1945 decade-1940"><a href="/oscars/ceremonies/1945" class="year">1945</a></li>
                                        <li class="year-1946 decade-1940"><a href="/oscars/ceremonies/1946" class="year">1946</a></li>
                                        <li class="year-1947 decade-1940"><a href="/oscars/ceremonies/1947" class="year">1947</a></li>
                                        <li class="year-1948 decade-1940"><a href="/oscars/ceremonies/1948" class="year">1948</a></li>
                                        <li class="year-1949 decade-1940"><a href="/oscars/ceremonies/1949" class="year">1949</a></li>
                                        <li class="year-1950 decade-1950"><a href="/oscars/ceremonies/1950" class="year">1950</a></li>
                                        <li class="year-1951 decade-1950"><a href="/oscars/ceremonies/1951" class="year">1951</a></li>
                                        <li class="year-1952 decade-1950"><a href="/oscars/ceremonies/1952" class="year">1952</a></li>
                                        <li class="year-1953 decade-1950"><a href="/oscars/ceremonies/1953" class="year">1953</a></li>
                                        <li class="year-1954 decade-1950"><a href="/oscars/ceremonies/1954" class="year">1954</a></li>
                                        <li class="year-1955 decade-1950"><a href="/oscars/ceremonies/1955" class="year">1955</a></li>
                                        <li class="year-1956 decade-1950"><a href="/oscars/ceremonies/1956" class="year">1956</a></li>
                                        <li class="year-1957 decade-1950"><a href="/oscars/ceremonies/1957" class="year">1957</a></li>
                                        <li class="year-1958 decade-1950"><a href="/oscars/ceremonies/1958" class="year">1958</a></li>
                                        <li class="year-1959 decade-1950"><a href="/oscars/ceremonies/1959" class="year">1959</a></li>
                                        <li class="year-1960 decade-1960"><a href="/oscars/ceremonies/1960" class="year">1960</a></li>
                                        <li class="year-1961 decade-1960"><a href="/oscars/ceremonies/1961" class="year">1961</a></li>
                                        <li class="year-1962 decade-1960"><a href="/oscars/ceremonies/1962" class="year">1962</a></li>
                                        <li class="year-1963 decade-1960"><a href="/oscars/ceremonies/1963" class="year">1963</a></li>
                                        <li class="year-1964 decade-1960"><a href="/oscars/ceremonies/1964" class="year">1964</a></li>
                                        <li class="year-1965 decade-1960"><a href="/oscars/ceremonies/1965" class="year">1965</a></li>
                                        <li class="year-1966 decade-1960"><a href="/oscars/ceremonies/1966" class="year">1966</a></li>
                                        <li class="year-1967 decade-1960"><a href="/oscars/ceremonies/1967" class="year">1967</a></li>
                                        <li class="year-1968 decade-1960"><a href="/oscars/ceremonies/1968" class="year">1968</a></li>
                                        <li class="year-1969 decade-1960"><a href="/oscars/ceremonies/1969" class="year">1969</a></li>
                                        <li class="year-1970 decade-1970"><a href="/oscars/ceremonies/1970" class="year">1970</a></li>
                                        <li class="year-1971 decade-1970"><a href="/oscars/ceremonies/1971" class="year">1971</a></li>
                                        <li class="year-1972 decade-1970"><a href="/oscars/ceremonies/1972" class="year">1972</a></li>
                                        <li class="year-1973 decade-1970"><a href="/oscars/ceremonies/1973" class="year">1973</a></li>
                                        <li class="year-1974 decade-1970"><a href="/oscars/ceremonies/1974" class="year">1974</a></li>
                                        <li class="year-1975 decade-1970"><a href="/oscars/ceremonies/1975" class="year">1975</a></li>
                                        <li class="year-1976 decade-1970"><a href="/oscars/ceremonies/1976" class="year">1976</a></li>
                                        <li class="year-1977 decade-1970"><a href="/oscars/ceremonies/1977" class="year">1977</a></li>
                                        <li class="year-1978 decade-1970"><a href="/oscars/ceremonies/1978" class="year">1978</a></li>
                                        <li class="year-1979 decade-1970"><a href="/oscars/ceremonies/1979" class="year">1979</a></li>
                                        <li class="year-1980 decade-1980"><a href="/oscars/ceremonies/1980" class="year">1980</a></li>
                                        <li class="year-1981 decade-1980"><a href="/oscars/ceremonies/1981" class="year">1981</a></li>
                                        <li class="year-1982 decade-1980"><a href="/oscars/ceremonies/1982" class="year">1982</a></li>
                                        <li class="year-1983 decade-1980"><a href="/oscars/ceremonies/1983" class="year">1983</a></li>
                                        <li class="year-1984 decade-1980"><a href="/oscars/ceremonies/1984" class="year">1984</a></li>
                                        <li class="year-1985 decade-1980"><a href="/oscars/ceremonies/1985" class="year">1985</a></li>
                                        <li class="year-1986 decade-1980"><a href="/oscars/ceremonies/1986" class="year">1986</a></li>
                                        <li class="year-1987 decade-1980"><a href="/oscars/ceremonies/1987" class="year">1987</a></li>
                                        <li class="year-1988 decade-1980"><a href="/oscars/ceremonies/1988" class="year">1988</a></li>
                                        <li class="year-1989 decade-1980"><a href="/oscars/ceremonies/1989" class="year">1989</a></li>
                                        <li class="year-1990 decade-1990"><a href="/oscars/ceremonies/1990" class="year">1990</a></li>
                                        <li class="year-1991 decade-1990"><a href="/oscars/ceremonies/1991" class="year">1991</a></li>
                                        <li class="year-1992 decade-1990"><a href="/oscars/ceremonies/1992" class="year">1992</a></li>
                                        <li class="year-1993 decade-1990"><a href="/oscars/ceremonies/1993" class="year">1993</a></li>
                                        <li class="year-1994 decade-1990"><a href="/oscars/ceremonies/1994" class="year">1994</a></li>
                                        <li class="year-1995 decade-1990"><a href="/oscars/ceremonies/1995" class="year">1995</a></li>
                                        <li class="year-1996 decade-1990"><a href="/oscars/ceremonies/1996" class="year">1996</a></li>
                                        <li class="year-1997 decade-1990"><a href="/oscars/ceremonies/1997" class="year">1997</a></li>
                                        <li class="year-1998 decade-1990"><a href="/oscars/ceremonies/1998" class="year">1998</a></li>
                                        <li class="year-1999 decade-1990"><a href="/oscars/ceremonies/1999" class="year">1999</a></li>
                                        <li class="year-2000 decade-2000"><a href="/oscars/ceremonies/2000" class="year">2000</a></li>
                                        <li class="year-2001 decade-2000"><a href="/oscars/ceremonies/2001" class="year">2001</a></li>
                                        <li class="year-2002 decade-2000"><a href="/oscars/ceremonies/2002" class="year">2002</a></li>
                                        <li class="year-2003 decade-2000"><a href="/oscars/ceremonies/2003" class="year">2003</a></li>
                                        <li class="year-2004 decade-2000"><a href="/oscars/ceremonies/2004" class="year">2004</a></li>
                                        <li class="year-2005 decade-2000"><a href="/oscars/ceremonies/2005" class="year">2005</a></li>
                                        <li class="year-2006 decade-2000"><a href="/oscars/ceremonies/2006" class="year">2006</a></li>
                                        <li class="year-2007 decade-2000"><a href="/oscars/ceremonies/2007" class="year">2007</a></li>
                                        <li class="year-2008 decade-2000"><a href="/oscars/ceremonies/2008" class="year">2008</a></li>
                                        <li class="year-2009 decade-2000"><a href="/oscars/ceremonies/2009" class="year">2009</a></li>
                                        <li class="year-2010 decade-2010"><a href="/oscars/ceremonies/2010" class="year">2010</a></li>
                                        <li class="year-2011 decade-2010"><a href="/oscars/ceremonies/2011" class="year">2011</a></li>
                                        <li class="year-2012 decade-2010"><a href="/oscars/ceremonies/2012" class="year">2012</a></li>
                                        <li class="year-2013 decade-2010"><a href="/oscars/ceremonies/2013" class="year">2013</a></li>
                                        <li class="year-2014 decade-2010"><a href="/oscars/ceremonies/2014" class="year">2014</a></li>
                                        <li class="year-2015 decade-2010"><a href="/oscars/ceremonies/2015" class="year">2015</a></li>
                                        <li class="year-2016 decade-2010"><a href="/oscars/ceremonies/2016" class="year">2016</a></li>
                                        <li class="year-2017 decade-2010"><a href="/oscars/ceremonies/2017" class="year">2017</a></li>
                                        <li class="year-2018 decade-2010"><a href="/oscars/ceremonies/2018" class="year">2018</a></li>
                                        <li class="year-2019 decade-2010"><a href="/oscars/ceremonies/2019" class="year">2019</a></li>
                                        <li class="year-2020 decade-2020"><a href="/oscars/ceremonies/2020" class="year">2020</a></li>
                                        <li class="year-2021 decade-2020 last active"><a href="/oscars/ceremonies/2021" class="year active">2021</a></li>
                                    </ul>
                                    <div class="years-nav decade-scroller-nav" style="display: block;">
                                        <a href="/oscars/ceremonies/1929" class="prev">previous</a> <a href="/oscars/ceremonies/2021" class="next active end">next</a> </div>
                                </div>
                            </div>
                        </div>

                        <div class="view-content">
                            <div class="views-row views-row-1 views-row-odd views-row-first views-row-last clearfix">

                                <div class="views-field views-field-title"> <span class="field-content">The 93rd Academy Awards | <span class="date-display-single">2021</span></span>
                                </div>
                                <div class="views-field views-field-field-location-name">
                                    <div class="field-content">Union Station Los Angeles and the Dolby Theatre at the Hollywood &amp; Highland Center</div>
                                </div>
                                <div class="views-field views-field-field-date">
                                    <div class="field-content"><span class="date-display-single">Sunday, April 25, 2021</span></div>
                                </div>
                                <div class="views-field views-field-field-honoring-line">
                                    <div class="field-content">Honoring movies released in 2020</div>
                                </div>
                                <div class="views-field views-field-social-share"> <span class="field-content"><div class="social-share clearfix"><span class="share-label">Share </span><a href="https://twitter.com/share?url=https%3A%2F%2Fwww.oscars.org%2Foscars%2Fceremonies%2F2021&amp;via=TheAcademy"
                                        class="social-share-twitter" title="Twitter" target="_blank">Twitter</a><a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.oscars.org%2Foscars%2Fceremonies%2F2021" class="social-share-facebook" title="Facebook"
                                        target="_blank">Facebook</a></div>
                                </span>
                            </div>
                            <div class="views-field views-field-field-highlights"> <span class="views-label views-label-field-highlights">Highlights</span>
                                <div class="field-content">
                                    <ul>
                                        <li>
                                            <div class="field-collection-view clearfix view-mode-full">
                                                <div class="entity entity-field-collection-item field-collection-item-field-highlights">
                                                    <div class="content">
                                                        <div class="field field--name-field-caption field--type-text field--label-hidden">
                                                            <div class="field-items">
                                                                <div class="field-item even">In Memoriam</div>
                                                            </div>
                                                        </div>
                                                        <div class="field field--name-field-ceremonies-media field--type-image field--label-hidden media-thumbnail-image video">
                                                            <div class="field-items">
                                                                <div class="field-item even"><a href="https://www.oscars.org/vef/load/0fc24b4a8465cf4688f095a793bd3d32?width=640&amp;height=365&amp;iframe=true" class="colorbox-load init-colorbox-load-processed cboxElement" title=""
                                                                        data-youtube="https://www.youtube.com/watch?v=OEvpqke0qPo" data-title="" data-description="" data-type="youtube" data-facebook-url="https://www.facebook.com/sharer.php?u=https://www.oscars.org/file/93rd-oscars-memoriam"
                                                                        data-twitter-url="https://twitter.com/share?url=https://www.oscars.org/file/93rd-oscars-memoriam&amp;via=TheAcademy" rel="highlights-gallery"><noscript><style>.lazy-load{display:none;}</style><img width="305" height="229" alt="93rd Oscars In Memoriam" data-original="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_high_default/public/media-youtube/OEvpqke0qPo.jpg?itok=Sqz4cTZr" class="lazy-load" /></noscript><img alt="93rd Oscars In Memoriam" data-original="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_high_default/public/media-youtube/OEvpqke0qPo.jpg?itok=Sqz4cTZr" class="lazy-load lazy-load-init lazy-load-loaded" src="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_high_default/public/media-youtube/OEvpqke0qPo.jpg?itok=Sqz4cTZr" style="display: inline;" width="305" height="229"></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="field-collection-view clearfix view-mode-full">
                                                <div class="entity entity-field-collection-item field-collection-item-field-highlights">
                                                    <div class="content">
                                                        <div class="field field--name-field-caption field--type-text field--label-hidden">
                                                            <div class="field-items">
                                                                <div class="field-item even">"Fight For You" Performance</div>
                                                            </div>
                                                        </div>
                                                        <div class="field field--name-field-ceremonies-media field--type-image field--label-hidden media-thumbnail-image video">
                                                            <div class="field-items">
                                                                <div class="field-item even"><a href="https://www.oscars.org/vef/load/5b9ab5d0ad309bd7bd25577076ea2d0e?width=640&amp;height=365&amp;iframe=true" class="colorbox-load init-colorbox-load-processed cboxElement" title=""
                                                                        data-youtube="https://www.youtube.com/watch?v=chjhy64T8cY" data-title="" data-description="" data-type="youtube" data-facebook-url="https://www.facebook.com/sharer.php?u=https://www.oscars.org/file/oscars-performance-her-fight-you-judas-and-black-messiah"
                                                                        data-twitter-url="https://twitter.com/share?url=https://www.oscars.org/file/oscars-performance-her-fight-you-judas-and-black-messiah&amp;via=TheAcademy" rel="highlights-gallery"><noscript><style>.lazy-load{display:none;}</style><img width="305" height="229" alt="Oscars Performance | H.E.R. - &quot;Fight For You&quot; from JUDAS AND THE BLACK MESSIAH" data-original="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_high_default/public/media-youtube/chjhy64T8cY.jpg?itok=RnFXXhYm" class="lazy-load" /></noscript><img alt="Oscars Performance | H.E.R. - &quot;Fight For You&quot; from JUDAS AND THE BLACK MESSIAH" data-original="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_high_default/public/media-youtube/chjhy64T8cY.jpg?itok=RnFXXhYm" class="lazy-load lazy-load-init lazy-load-loaded" src="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_high_default/public/media-youtube/chjhy64T8cY.jpg?itok=RnFXXhYm" style="display: inline;" width="305" height="229"></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="field-collection-view clearfix view-mode-full field-collection-view-final">
                                                <div class="entity entity-field-collection-item field-collection-item-field-highlights">
                                                    <div class="content">
                                                        <div class="field field--name-field-caption field--type-text field--label-hidden">
                                                            <div class="field-items">
                                                                <div class="field-item even">Oscars Nominees Reactions</div>
                                                            </div>
                                                        </div>
                                                        <div class="field field--name-field-ceremonies-media field--type-image field--label-hidden media-thumbnail-image video">
                                                            <div class="field-items">
                                                                <div class="field-item even"><a href="https://www.oscars.org/vef/load/11927f8934f1ede50d90f287ccbd6a19?width=640&amp;height=365&amp;iframe=true" class="colorbox-load init-colorbox-load-processed cboxElement" title=""
                                                                        data-youtube="https://www.youtube.com/watch?v=-Z-f9CL5ies" data-title="" data-description="" data-type="youtube" data-facebook-url="https://www.facebook.com/sharer.php?u=https://www.oscars.org/file/93rd-oscars-nominee-reactions"
                                                                        data-twitter-url="https://twitter.com/share?url=https://www.oscars.org/file/93rd-oscars-nominee-reactions&amp;via=TheAcademy" rel="highlights-gallery"><noscript><style>.lazy-load{display:none;}</style><img width="305" height="229" alt="93rd Oscars Nominee Reactions" data-original="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_high_default/public/media-youtube/-Z-f9CL5ies.jpg?itok=veyXbeHl" class="lazy-load" /></noscript><img alt="93rd Oscars Nominee Reactions" data-original="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_high_default/public/media-youtube/-Z-f9CL5ies.jpg?itok=veyXbeHl" class="lazy-load lazy-load-init lazy-load-loaded" src="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_high_default/public/media-youtube/-Z-f9CL5ies.jpg?itok=veyXbeHl" style="display: inline;" width="305" height="229"></a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="views-field views-field-field-memorable-moments"> <span class="views-label views-label-field-memorable-moments">Memorable Moments</span>
                                <div class="field-content">
                                    <ul style="height: 554px;">
                                        <li>
                                            <div class="field-collection-view clearfix view-mode-full">
                                                <div class="entity entity-field-collection-item field-collection-item-field-memorable-moments">
                                                    <div class="content">
                                                        <div class="field field--name-field-ceremonies-media field--type-image field--label-hidden media-thumbnail-image photo">
                                                            <div class="field-items">
                                                                <div class="field-item even"><a href="https://www.oscars.org/sites/oscars/files/159379_screen_shot_2021-04-25_at_5.33.53_pm_2.jpg" alt="Daniel Kaluuya" title="Daniel Kaluuya wins Best Supporting Actor" class="colorbox init-colorbox-processed cboxElement"
                                                                        rel="memorable-gallery" data-type="image" data-title="Daniel Kaluuya wins Best Supporting Actor" data-description="for his performance in &amp;quot;Judas and the Black Messiah&amp;quot;"
                                                                        data-colorbox-fid="84561" data-facebook-url="https://www.facebook.com/sharer.php?u=https://www.oscars.org/oscars/ceremonies/2021?fid=84561" data-twitter-url="https://twitter.com/share?url=https://www.oscars.org/oscars/ceremonies/2021?fid=84561&amp;via=TheAcademy"
                                                                        data-poster-date="" data-poster-nicholl="" data-poster-credit=""><noscript><style>.lazy-load{display:none;}</style><img width="620" height="465" alt="Daniel Kaluuya" title="Best Supporting Actor" data-original="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_std_default/public/159379_screen_shot_2021-04-25_at_5.33.53_pm_2.jpg?itok=BOTVR8Vr" class="lazy-load" /></noscript><img alt="Daniel Kaluuya" title="Best Supporting Actor" data-original="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_std_default/public/159379_screen_shot_2021-04-25_at_5.33.53_pm_2.jpg?itok=BOTVR8Vr" class="lazy-load lazy-load-init lazy-load-loaded" src="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_std_default/public/159379_screen_shot_2021-04-25_at_5.33.53_pm_2.jpg?itok=BOTVR8Vr" style="display: inline;" width="620" height="465"></a></div>
                                                            </div>
                                                        </div>
                                                        <div class="field field--name-field-caption field--type-text field--label-hidden">
                                                            <div class="field-items">
                                                                <div class="field-item even">Daniel Kaluuya wins Best Supporting Actor</div>
                                                            </div>
                                                        </div>
                                                        <div class="field field--name-field-film-desc field--type-text-long field--label-hidden ellipsis" style="overflow-wrap: break-word;">
                                                            <div class="field-items">
                                                                <div class="field-item even">for his performance in "Judas and the Black Messiah"</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="field-collection-view clearfix view-mode-full">
                                                <div class="entity entity-field-collection-item field-collection-item-field-memorable-moments">
                                                    <div class="content">
                                                        <div class="field field--name-field-ceremonies-media field--type-image field--label-hidden media-thumbnail-image photo">
                                                            <div class="field-items">
                                                                <div class="field-item even"><a href="https://www.oscars.org/sites/oscars/files/159379_screen_shot_2021-04-25_at_5.59.49_pm.jpg" alt="Chloé Zhao" title="Chloé Zhao wins Best Director" class="colorbox init-colorbox-processed cboxElement"
                                                                        rel="memorable-gallery" data-type="image" data-title="Chloé Zhao wins Best Director" data-description="for &amp;quot;Nomadland&amp;quot;" data-colorbox-fid="84566" data-facebook-url="https://www.facebook.com/sharer.php?u=https://www.oscars.org/oscars/ceremonies/2021?fid=84566"
                                                                        data-twitter-url="https://twitter.com/share?url=https://www.oscars.org/oscars/ceremonies/2021?fid=84566&amp;via=TheAcademy" data-poster-date="" data-poster-nicholl="" data-poster-credit=""><noscript><style>.lazy-load{display:none;}</style><img width="620" height="465" alt="Chloé Zhao" title="Best Director" data-original="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_std_default/public/159379_screen_shot_2021-04-25_at_5.59.49_pm.jpg?itok=DQXMWQAJ" class="lazy-load" /></noscript><img alt="Chloé Zhao" title="Best Director" data-original="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_std_default/public/159379_screen_shot_2021-04-25_at_5.59.49_pm.jpg?itok=DQXMWQAJ" class="lazy-load lazy-load-init lazy-load-loaded" src="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_std_default/public/159379_screen_shot_2021-04-25_at_5.59.49_pm.jpg?itok=DQXMWQAJ" style="display: inline;" width="620" height="465"></a></div>
                                                            </div>
                                                        </div>
                                                        <div class="field field--name-field-caption field--type-text field--label-hidden">
                                                            <div class="field-items">
                                                                <div class="field-item even">Chloé Zhao wins Best Director</div>
                                                            </div>
                                                        </div>
                                                        <div class="field field--name-field-film-desc field--type-text-long field--label-hidden ellipsis" style="overflow-wrap: break-word;">
                                                            <div class="field-items">
                                                                <div class="field-item even">for "Nomadland"</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="field-collection-view clearfix view-mode-full field-collection-view-final">
                                                <div class="entity entity-field-collection-item field-collection-item-field-memorable-moments">
                                                    <div class="content">
                                                        <div class="field field--name-field-ceremonies-media field--type-image field--label-hidden media-thumbnail-image photo">
                                                            <div class="field-items">
                                                                <div class="field-item even"><a href="https://www.oscars.org/sites/oscars/files/159379_screen_shot_2021-04-25_at_6.54.57_pm.jpg" alt="Yuh-jung Youn" title="Yuh-Jung Youn wins Best Supporting Actress" class="colorbox init-colorbox-processed cboxElement"
                                                                        rel="memorable-gallery" data-type="image" data-title="Yuh-Jung Youn wins Best Supporting Actress" data-description="for her performance in &amp;quot;Minari&amp;quot;" data-colorbox-fid="84571"
                                                                        data-facebook-url="https://www.facebook.com/sharer.php?u=https://www.oscars.org/oscars/ceremonies/2021?fid=84571" data-twitter-url="https://twitter.com/share?url=https://www.oscars.org/oscars/ceremonies/2021?fid=84571&amp;via=TheAcademy"
                                                                        data-poster-date="" data-poster-nicholl="" data-poster-credit=""><noscript><style>.lazy-load{display:none;}</style><img width="620" height="465" alt="Yuh-jung Youn" title="Best Supporting Actress" data-original="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_std_default/public/159379_screen_shot_2021-04-25_at_6.54.57_pm.jpg?itok=lnIoNsPm" class="lazy-load" /></noscript><img alt="Yuh-jung Youn" title="Best Supporting Actress" data-original="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_std_default/public/159379_screen_shot_2021-04-25_at_6.54.57_pm.jpg?itok=lnIoNsPm" class="lazy-load lazy-load-init lazy-load-loaded" src="https://www.oscars.org/sites/oscars/files/styles/ceremonies_media_std_default/public/159379_screen_shot_2021-04-25_at_6.54.57_pm.jpg?itok=lnIoNsPm" style="display: inline;" width="620" height="465"></a></div>
                                                            </div>
                                                        </div>
                                                        <div class="field field--name-field-caption field--type-text field--label-hidden">
                                                            <div class="field-items">
                                                                <div class="field-item even">Yuh-Jung Youn wins Best Supporting Actress</div>
                                                            </div>
                                                        </div>
                                                        <div class="field field--name-field-film-desc field--type-text-long field--label-hidden ellipsis" style="overflow-wrap: break-word;">
                                                            <div class="field-items">
                                                                <div class="field-item even">for her performance in "Minari"</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="views-field views-field-field-more-memorable-moments">
                                <div class="field-content"><a href="https://www.oscars.org/oscars/ceremonies/93rd-oscars-winner-portraits" class="btn-link">View More Memorable Moments</a></div>
                            </div>
                        </div>
                    </div>






                </div>
                <div id="block-quicktabs-honorees" class="block block--quicktabs block--quicktabs-honorees ">
                    <h2 class="block__title block-title">Winners &amp; Nominees</h2>
                    <div class="block__content">
                        <div id="quicktabs-honorees" class="quicktabs-wrapper quicktabs-style-nostyle jquery-once-3-processed">
                            <ul class="quicktabs-tabs quicktabs-style-nostyle">
                                <li class="active"><a href="/oscars/ceremonies/2021?qt-honorees=0#qt-honorees" id="quicktabs-tab-honorees-0" class="quicktabs-tab quicktabs-tab-view quicktabs-tab-view-awards-osc-honoree-by-cat active quicktabs-loaded jquery-once-4-processed">View by Category<span id="active-quicktabs-tab" class="element-invisible">(active tab)</span></a></li>
                                <li><a href="/oscars/ceremonies/2021?qt-honorees=1#qt-honorees" id="quicktabs-tab-honorees-1" class="quicktabs-tab quicktabs-tab-view quicktabs-tab-view-awards-osc-honoree-by-film active jquery-once-4-processed">View by Film</a></li>
                            </ul>
                            <div id="quicktabs-container-honorees" class="quicktabs_main quicktabs-style-nostyle">
                                <div id="quicktabs-tabpage-honorees-0" class="quicktabs-tabpage ">
                                    <div class="view view-awards view-id-awards view-display-id-osc_honoree_by_cat view-dom-id-7767166267043651f5a3ed4845e66438 jquery-once-1-processed refresh-processed">
                                        <div class="view-header">
                                            <style>
                                                <!--
                                                /*--><![CDATA[/* ><!--*/
                                                
                                                body.page-oscars-ceremonies:not(.page-oscars-ceremonies-) #quicktabs-honorees li:last-child {
                                                    display: none;
                                                }
                                                /*--><!]]>*/
                                            </style>
                                        </div>

                                        <div class="view-filters">
                                            <form class="ctools-auto-submit-full-form views-exposed-form-awards-osc-honoree-by-cat ctools-auto-submit-processed jquery-once-1-processed" action="/" method="get" id="views-exposed-form-awards-osc-honoree-by-cat" accept-charset="UTF-8">
                                                <div>
                                                    <div class="views-exposed-form">
                                                        <div class="views-exposed-widgets clearfix">
                                                            <div id="edit-field-award-category-tid-wrapper" class="views-exposed-widget views-widget-filter-field_award_category_tid">
                                                                <div class="views-widget">
                                                                    <div class="form-item form-type-select form-item-field-award-category-tid">
                                                                        <select id="edit-field-award-category-tid" name="field_award_category_tid" class="form-select"><option value="All" selected="selected">Select a Category</option><option value="1731">Actor in a Leading Role</option><option value="1736">Actor in a Supporting Role</option><option value="1741">Actress in a Leading Role</option><option value="1746">Actress in a Supporting Role</option><option value="1751">Animated Feature Film</option><option value="1761">Cinematography</option><option value="1766">Costume Design</option><option value="1771">Directing</option><option value="2336">Documentary (Feature)</option><option value="2301">Documentary (Short Subject)</option><option value="1786">Film Editing</option><option value="18621">International Feature Film</option><option value="1796">Makeup and Hairstyling</option><option value="2266">Music (Original Score)</option><option value="2511">Music (Original Song)</option><option value="1756">Best Picture</option><option value="1811">Production Design</option><option value="2496">Short Film (Animated)</option><option value="2501">Short Film (Live Action)</option><option value="2411">Sound</option><option value="1836">Visual Effects</option><option value="2596">Writing (Adapted Screenplay)</option><option value="2296">Writing (Original Screenplay)</option></select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="views-exposed-widget views-submit-button">
                                                                <input class="ctools-use-ajax ctools-auto-submit-click js-hide form-submit" type="submit" id="edit-submit-awards" value="Apply"> </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>


                                        <div class="view-content">
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Actor in a Leading Role</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Anthony Hopkins</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">The Father
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Riz Ahmed</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Sound of Metal
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Chadwick Boseman</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Ma Rainey's Black Bottom
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Gary Oldman</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Mank
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Steven Yeun</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Minari
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Actor in a Supporting Role</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Daniel Kaluuya</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Judas and the Black Messiah
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Sacha Baron Cohen</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">The Trial of the Chicago 7
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Leslie Odom, Jr.</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">One Night in Miami...
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Paul Raci</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Sound of Metal
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Lakeith Stanfield</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Judas and the Black Messiah
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Actress in a Leading Role</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Frances McDormand</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Nomadland
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Viola Davis</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Ma Rainey's Black Bottom
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Andra Day</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">The United States vs. Billie Holiday
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Vanessa Kirby</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Pieces of a Woman
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Carey Mulligan</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Promising Young Woman
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Actress in a Supporting Role</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Yuh-Jung Youn</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Minari
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Maria Bakalova</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Borat Subsequent Moviefilm: Delivery of Prodigious Bribe to American Regime for Make Benefit Once Glorious Nation of Kazakhstan
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Glenn Close</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Hillbilly Elegy
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Olivia Colman</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">The Father
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Amanda Seyfried</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Mank
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Animated Feature Film</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Soul</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Pete Docter and Dana Murray
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Onward</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Dan Scanlon and Kori Rae
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Over the Moon</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Glen Keane, Gennie Rim and Peilin Chou
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">A Shaun the Sheep Movie: Farmageddon</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Richard Phelan, Will Becher and Paul Kewley
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Wolfwalkers</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Tomm Moore, Ross Stewart, Paul Young and Stéphan Roelants
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Cinematography</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Mank</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Erik Messerschmidt
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Judas and the Black Messiah</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Sean Bobbitt
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">News of the World</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Dariusz Wolski
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Nomadland</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Joshua James Richards
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Trial of the Chicago 7</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Phedon Papamichael
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Costume Design</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Ma Rainey's Black Bottom</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Ann Roth
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Emma</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Alexandra Byrne
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Mank</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Trish Summerville
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Mulan</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Bina Daigeler
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Pinocchio</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Massimo Cantini Parrini
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Directing</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Nomadland</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Chloé Zhao
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Another Round</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Thomas Vinterberg
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Mank</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">David Fincher
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Minari</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Lee Isaac Chung
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Promising Young Woman</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Emerald Fennell
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Documentary (Feature)</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">My Octopus Teacher</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Pippa Ehrlich, James Reed and Craig Foster
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Collective</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Alexander Nanau and Bianca Oana
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Crip Camp</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Nicole Newnham, Jim LeBrecht and Sara Bolder
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Mole Agent</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Maite Alberdi and Marcela Santibáñez
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Time</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Garrett Bradley, Lauren Domino and Kellen Quinn
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Documentary (Short Subject)</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Colette</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Anthony Giacchino and Alice Doyard
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">A Concerto Is a Conversation</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Ben Proudfoot and Kris Bowers
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Do Not Split</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Anders Hammer and Charlotte Cook
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Hunger Ward</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Skye Fitzgerald and Michael Scheuerman
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">A Love Song for Latasha</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Sophia Nahli Allison and Janice Duncan
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Film Editing</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Sound of Metal</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Mikkel E. G. Nielsen
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Father</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Yorgos Lamprinos
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Nomadland</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Chloé Zhao
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Promising Young Woman</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Frédéric Thoraval
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Trial of the Chicago 7</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Alan Baumgarten
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>International Feature Film</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Another Round</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Denmark
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Better Days</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Hong Kong
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Collective</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Romania
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Man Who Sold His Skin</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Tunisia
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Quo Vadis, Aida?</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Bosnia and Herzegovina
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Makeup and Hairstyling</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Ma Rainey's Black Bottom</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Sergio Lopez-Rivera, Mia Neal and Jamika Wilson
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Emma</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Marese Langan, Laura Allen and Claudia Stolze
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Hillbilly Elegy</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Eryn Krueger Mekash, Matthew Mungle and Patricia Dehaney
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Mank</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Gigi Williams, Kimberley Spiteri and Colleen LaBaff
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Pinocchio</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Mark Coulier, Dalia Colli and Francesco Pegoretti
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Music (Original Score)</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Soul</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Trent Reznor, Atticus Ross and Jon Batiste
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Da 5 Bloods</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Terence Blanchard
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Mank</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Trent Reznor and Atticus Ross
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Minari</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Emile Mosseri
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">News of the World</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">James Newton Howard
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Music (Original Song)</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Fight For You</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">from Judas and the Black Messiah; Music by H.E.R. and Dernst Emile II; Lyric by H.E.R. and Tiara Thomas
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Hear My Voice</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">from The Trial of the Chicago 7; Music by Daniel Pemberton; Lyric by Daniel Pemberton and Celeste Waite
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Husavik</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">from Eurovision Song Contest: The Story of Fire Saga; Music and Lyric by Savan Kotecha, Fat Max Gsus and Rickard Göransson
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Io Sì (Seen)</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">from The Life Ahead (La Vita Davanti a Se); Music by Diane Warren; Lyric by Diane Warren and Laura Pausini
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Speak Now</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">from One Night in Miami...; Music and Lyric by Leslie Odom, Jr. and Sam Ashworth
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Best Picture</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Nomadland</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Frances McDormand, Peter Spears, Mollye Asher, Dan Janvey and Chloé Zhao, Producers
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Father</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">David Parfitt, Jean-Louis Livi and Philippe Carcassonne, Producers
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Judas and the Black Messiah</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Shaka King, Charles D. King and Ryan Coogler, Producers
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Mank</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Ceán Chaffin, Eric Roth and Douglas Urbanski, Producers
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Minari</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Christina Oh, Producer
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-5 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Promising Young Woman</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Ben Browning, Ashley Fox, Emerald Fennell and Josey McNamara, Producers
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-6 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Sound of Metal</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Bert Hamelinck and Sacha Ben Harroche, Producers
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-7 views-row-odd views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Trial of the Chicago 7</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Marc Platt and Stuart Besser, Producers
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Production Design</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Mank</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Production Design: Donald Graham Burt; Set Decoration: Jan Pascale
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Father</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Production Design: Peter Francis; Set Decoration: Cathy Featherstone
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Ma Rainey's Black Bottom</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Production Design: Mark Ricker; Set Decoration: Karen O'Hara and Diana Stoughton
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">News of the World</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Production Design: David Crank; Set Decoration: Elizabeth Keenan
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Tenet</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Production Design: Nathan Crowley; Set Decoration: Kathy Lucas
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Short Film (Animated)</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">If Anything Happens I Love You</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Will McCormack and Michael Govier
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Burrow</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Madeline Sharafian and Michael Capbarat
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Genius Loci</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Adrien Mérigeau and Amaury Ovise
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Opera</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Erick Oh
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Yes-People</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Gísli Darri Halldórsson and Arnar Gunnarsson
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Short Film (Live Action)</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Two Distant Strangers</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Travon Free and Martin Desmond Roe
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Feeling Through</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Doug Roland and Susan Ruzenski
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Letter Room</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Elvira Lind and Sofia Sondervan
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Present</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Farah Nabulsi and Ossama Bawardi
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">White Eye</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Tomer Shushan and Shira Hochman
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Sound</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Sound of Metal</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Nicolas Becker, Jaime Baksht, Michellee Couttolenc, Carlos Cortés and Phillip Bladh
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Greyhound</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Warren Shaw, Michael Minkler, Beau Borders and David Wyman
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Mank</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Ren Klyce, Jeremy Molod, David Parker, Nathan Nance and Drew Kunin
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">News of the World</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Oliver Tarney, Mike Prestwood Smith, William Miller and John Pritchett
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Soul</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Ren Klyce, Coya Elliott and David Parker
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Visual Effects</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Tenet</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Andrew Jackson, David Lee, Andrew Lockley and Scott Fisher
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Love and Monsters</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Matt Sloan, Genevieve Camilleri, Matt Everitt and Brian Cox
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Midnight Sky</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Matthew Kasmir, Christopher Lawrence, Max Solomon and David Watkins
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Mulan</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Sean Faden, Anders Langlands, Seth Maury and Steve Ingram
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The One and Only Ivan</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Nick Davis, Greg Fisher, Ben Jones and Santiago Colomo Martinez
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Writing (Adapted Screenplay)</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Father</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Screenplay by Christopher Hampton and Florian Zeller
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Borat Subsequent Moviefilm: Delivery of Prodigious Bribe to American Regime for Make Benefit Once Glorious Nation of Kazakhstan</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Screenplay by Sacha Baron Cohen &amp; Anthony Hines &amp; Dan Swimer &amp; Peter Baynham &amp; Erica Rivinoja &amp; Dan Mazer &amp; Jena Friedman &amp; Lee Kern; Story by Sacha Baron Cohen &amp; Anthony Hines &amp; Dan Swimer &amp; Nina Pedrad
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Nomadland</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Written for the screen by Chloé Zhao
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">One Night in Miami...</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Screenplay by Kemp Powers
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The White Tiger</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Written for the screen by Ramin Bahrani
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">
                                                    <h2>Writing (Original Screenplay)</h2>
                                                </div>
                                                <div class="view-grouping-content">
                                                    <h3><span class="golden-text">Winner</span></h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Promising Young Woman</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Written by Emerald Fennell
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <h3>Nominees</h3>
                                                    <div class="views-row views-row-1 views-row-odd views-row-first">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Judas and the Black Messiah</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Screenplay by Will Berson &amp; Shaka King; Story by Will Berson &amp; Shaka King and Kenny Lucas &amp; Keith Lucas
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-2 views-row-even">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Minari</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Written by Lee Isaac Chung
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-3 views-row-odd">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">Sound of Metal</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Screenplay by Darius Marder &amp; Abraham Marder; Story by Darius Marder &amp; Derek Cianfrance
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                    <div class="views-row views-row-4 views-row-even views-row-last">

                                                        <div class="views-field views-field-field-actor-name">
                                                            <h4 class="field-content">The Trial of the Chicago 7</h4>
                                                        </div>
                                                        <div class="views-field views-field-title"> <span class="field-content">Written by Aaron Sorkin
</span> </div>
                                                        <div class="views-field views-field-edit-node"> <span class="field-content"></span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>






                                    </div>
                                </div>
                                <div id="quicktabs-tabpage-honorees-1" class="quicktabs-tabpage quicktabs-hide">
                                    <div class="view view-awards view-id-awards view-display-id-osc_honoree_by_film view-dom-id-2d0f03702454c9847356db9bab007633 jquery-once-1-processed refresh-processed">
                                        <div class="view-header">
                                            <style>
                                                <!--
                                                /*--><![CDATA[/* ><!--*/
                                                
                                                body.page-oscars-ceremonies-2017 #quicktabs-honorees li:last-child,
                                                body.page-oscars-ceremonies-2018 #quicktabs-honorees li:last-child,
                                                body.page-oscars-ceremonies-2019 #quicktabs-honorees li:last-child,
                                                body.page-oscars-ceremonies-2020 #quicktabs-honorees li:last-child,
                                                body.page-oscars-ceremonies-2021 #quicktabs-honorees li:last-child {
                                                    display: none;
                                                }
                                                /*--><!]]>*/
                                            </style>
                                        </div>


                                        <div class="attachment attachment-before">
                                            <div class="film-glossary-filter">
                                                <div class="glossary">
                                                    <a href="/oscars/ceremonies/2021?qt-honorees=1#block-quicktabs-honorees" class="active">ALL</a><span class="no-link">0-9</span>
                                                    <a href="/oscars/ceremonies/2021/A?qt-honorees=1#block-quicktabs-honorees">A</a><a href="/oscars/ceremonies/2021/B?qt-honorees=1#block-quicktabs-honorees">B</a><a href="/oscars/ceremonies/2021/C?qt-honorees=1#block-quicktabs-honorees">C</a>
                                                    <a
                                                        href="/oscars/ceremonies/2021/D?qt-honorees=1#block-quicktabs-honorees">D</a><a href="/oscars/ceremonies/2021/E?qt-honorees=1#block-quicktabs-honorees">E</a><a href="/oscars/ceremonies/2021/F?qt-honorees=1#block-quicktabs-honorees">F</a><a href="/oscars/ceremonies/2021/G?qt-honorees=1#block-quicktabs-honorees">G</a>
                                                        <a
                                                            href="/oscars/ceremonies/2021/H?qt-honorees=1#block-quicktabs-honorees">H</a><a href="/oscars/ceremonies/2021/I?qt-honorees=1#block-quicktabs-honorees">I</a><a href="/oscars/ceremonies/2021/J?qt-honorees=1#block-quicktabs-honorees">J</a><span class="no-link">K</span>
                                                            <a href="/oscars/ceremonies/2021/L?qt-honorees=1#block-quicktabs-honorees">L</a><a href="/oscars/ceremonies/2021/M?qt-honorees=1#block-quicktabs-honorees">M</a><a href="/oscars/ceremonies/2021/N?qt-honorees=1#block-quicktabs-honorees">N</a>
                                                            <a
                                                                href="/oscars/ceremonies/2021/O?qt-honorees=1#block-quicktabs-honorees">O</a><a href="/oscars/ceremonies/2021/P?qt-honorees=1#block-quicktabs-honorees">P</a><span class="no-link">Q</span>
                                                                <a href="/oscars/ceremonies/2021/R?qt-honorees=1#block-quicktabs-honorees">R</a><a href="/oscars/ceremonies/2021/S?qt-honorees=1#block-quicktabs-honorees">S</a><a href="/oscars/ceremonies/2021/T?qt-honorees=1#block-quicktabs-honorees">T</a>
                                                                <a
                                                                    href="/oscars/ceremonies/2021/U?qt-honorees=1#block-quicktabs-honorees">U</a><span class="no-link">V</span>
                                                                    <a href="/oscars/ceremonies/2021/W?qt-honorees=1#block-quicktabs-honorees">W</a><span class="no-link">X</span>
                                                                    <a href="/oscars/ceremonies/2021/Y?qt-honorees=1#block-quicktabs-honorees">Y</a><span class="no-link">Z</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="view-content">
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">A</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Another Round</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Directing - Thomas Vinterberg</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">B</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Borat Subsequent Moviefilm: Delivery of Prodigious Bribe to American Regime for Make Benefit Once Glorious Nation of Kazakhstan</div><span class="label">2 Nominations</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actress in a Supporting Role - Maria Bakalova</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Writing (Adapted Screenplay) - Screenplay by Sacha Baron Cohen &amp; Anthony Hines &amp; Dan Swimer &amp; Peter Baynham &amp; Erica Rivinoja &amp; Dan Mazer &amp; Jena Friedman &amp;
                                                                        Lee Kern; Story by Sacha Baron Cohen &amp; Anthony Hines &amp; Dan Swimer &amp; Nina Pedrad</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Bosnia and Herzegovina</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Burrow</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Short Film (Animated) - Madeline Sharafian and Michael Capbarat</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">C</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Colette</div><span class="label"><span class="golden-text">1 Win</span>, 1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Documentary (Short Subject) - Anthony Giacchino and Alice Doyard</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Collective</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Documentary (Feature) - Alexander Nanau and Bianca Oana</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">A Concerto Is a Conversation</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Documentary (Short Subject) - Ben Proudfoot and Kris Bowers</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Crip Camp</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Documentary (Feature) - Nicole Newnham, Jim LeBrecht and Sara Bolder</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">D</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Da 5 Bloods</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Music (Original Score) - Terence Blanchard</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Denmark</div><span class="label"><span class="golden-text">1 Win</span>, 1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> International Feature Film - Another Round</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Do Not Split</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Documentary (Short Subject) - Anders Hammer and Charlotte Cook</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">E</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Emma</div><span class="label">2 Nominations</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Costume Design - Alexandra Byrne</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Makeup and Hairstyling - Marese Langan, Laura Allen and Claudia Stolze</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">F</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">The Father</div><span class="label">6 Nominations, <span class="golden-text">2 Wins</span></span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Actor in a Leading Role - Anthony Hopkins</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Writing (Adapted Screenplay) - Screenplay by Christopher Hampton and Florian Zeller</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Best Picture - David Parfitt, Jean-Louis Livi and Philippe Carcassonne, Producers</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actress in a Supporting Role - Olivia Colman</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Production Design - Production Design: Peter Francis; Set Decoration: Cathy Featherstone</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Film Editing - Yorgos Lamprinos</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Feeling Through</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Short Film (Live Action) - Doug Roland and Susan Ruzenski</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Fight For You</div><span class="label"><span class="golden-text">1 Win</span>, 1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Music (Original Song) - from Judas and the Black Messiah; Music by H.E.R. and Dernst Emile II; Lyric by H.E.R. and Tiara Thomas</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">G</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Genius Loci</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Short Film (Animated) - Adrien Mérigeau and Amaury Ovise</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Greyhound</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Sound - Warren Shaw, Michael Minkler, Beau Borders and David Wyman</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">H</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Hear My Voice</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Music (Original Song) - from The Trial of the Chicago 7; Music by Daniel Pemberton; Lyric by Daniel Pemberton and Celeste Waite</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Hillbilly Elegy</div><span class="label">2 Nominations</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Makeup and Hairstyling - Eryn Krueger Mekash, Matthew Mungle and Patricia Dehaney</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actress in a Supporting Role - Glenn Close</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Hong Kong</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Hunger Ward</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Documentary (Short Subject) - Skye Fitzgerald and Michael Scheuerman</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Husavik</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Music (Original Song) - from Eurovision Song Contest: The Story of Fire Saga; Music and Lyric by Savan Kotecha, Fat Max Gsus and Rickard Göransson</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">I</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">If Anything Happens I Love You</div><span class="label"><span class="golden-text">1 Win</span>, 1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Short Film (Animated) - Will McCormack and Michael Govier</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Io Sì (Seen)</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Music (Original Song) - from The Life Ahead (La Vita Davanti a Se); Music by Diane Warren; Lyric by Diane Warren and Laura Pausini</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">J</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Judas and the Black Messiah</div><span class="label">5 Nominations, <span class="golden-text">1 Win</span></span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Actor in a Supporting Role - Daniel Kaluuya</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actor in a Supporting Role - Lakeith Stanfield</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Writing (Original Screenplay) - Screenplay by Will Berson &amp; Shaka King; Story by Will Berson &amp; Shaka King and Kenny Lucas &amp; Keith Lucas</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Cinematography - Sean Bobbitt</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Best Picture - Shaka King, Charles D. King and Ryan Coogler, Producers</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">L</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">The Letter Room</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Short Film (Live Action) - Elvira Lind and Sofia Sondervan</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Love and Monsters</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Visual Effects - Matt Sloan, Genevieve Camilleri, Matt Everitt and Brian Cox</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">A Love Song for Latasha</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Documentary (Short Subject) - Sophia Nahli Allison and Janice Duncan</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">M</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Ma Rainey's Black Bottom</div><span class="label">5 Nominations, <span class="golden-text">2 Wins</span></span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Costume Design - Ann Roth</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Makeup and Hairstyling - Sergio Lopez-Rivera, Mia Neal and Jamika Wilson</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actor in a Leading Role - Chadwick Boseman</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Production Design - Production Design: Mark Ricker; Set Decoration: Karen O'Hara and Diana Stoughton</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actress in a Leading Role - Viola Davis</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Mank</div><span class="label">10 Nominations, <span class="golden-text">2 Wins</span></span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actress in a Supporting Role - Amanda Seyfried</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Best Picture - Ceán Chaffin, Eric Roth and Douglas Urbanski, Producers</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Directing - David Fincher</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actor in a Leading Role - Gary Oldman</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Makeup and Hairstyling - Gigi Williams, Kimberley Spiteri and Colleen LaBaff</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Sound - Ren Klyce, Jeremy Molod, David Parker, Nathan Nance and Drew Kunin</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Music (Original Score) - Trent Reznor and Atticus Ross</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Costume Design - Trish Summerville</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Cinematography - Erik Messerschmidt</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Production Design - Production Design: Donald Graham Burt; Set Decoration: Jan Pascale</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">The Midnight Sky</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Visual Effects - Matthew Kasmir, Christopher Lawrence, Max Solomon and David Watkins</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Minari</div><span class="label">6 Nominations, <span class="golden-text">1 Win</span></span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Best Picture - Christina Oh, Producer</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Music (Original Score) - Emile Mosseri</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Directing - Lee Isaac Chung</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actor in a Leading Role - Steven Yeun</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Writing (Original Screenplay) - Written by Lee Isaac Chung</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Actress in a Supporting Role - Yuh-Jung Youn</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">The Mole Agent</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Documentary (Feature) - Maite Alberdi and Marcela Santibáñez</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Mulan</div><span class="label">2 Nominations</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Costume Design - Bina Daigeler</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Visual Effects - Sean Faden, Anders Langlands, Seth Maury and Steve Ingram</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">My Octopus Teacher</div><span class="label"><span class="golden-text">1 Win</span>, 1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Documentary (Feature) - Pippa Ehrlich, James Reed and Craig Foster</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">N</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">News of the World</div><span class="label">4 Nominations</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Cinematography - Dariusz Wolski</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Music (Original Score) - James Newton Howard</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Sound - Oliver Tarney, Mike Prestwood Smith, William Miller and John Pritchett</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Production Design - Production Design: David Crank; Set Decoration: Elizabeth Keenan</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Nomadland</div><span class="label">6 Nominations, <span class="golden-text">3 Wins</span></span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Directing - Chloé Zhao</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Actress in a Leading Role - Frances McDormand</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Best Picture - Frances McDormand, Peter Spears, Mollye Asher, Dan Janvey and Chloé Zhao, Producers</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Film Editing - Chloé Zhao</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Cinematography - Joshua James Richards</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Writing (Adapted Screenplay) - Written for the screen by Chloé Zhao</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">O</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">The One and Only Ivan</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Visual Effects - Nick Davis, Greg Fisher, Ben Jones and Santiago Colomo Martinez</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">One Night in Miami...</div><span class="label">2 Nominations</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actor in a Supporting Role - Leslie Odom and Jr.</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Writing (Adapted Screenplay) - Screenplay by Kemp Powers</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Onward</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Animated Feature Film - Dan Scanlon and Kori Rae</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Opera</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Short Film (Animated) - Erick Oh</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Over the Moon</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Animated Feature Film - Glen Keane, Gennie Rim and Peilin Chou</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">P</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Pieces of a Woman</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actress in a Leading Role - Vanessa Kirby</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Pinocchio</div><span class="label">2 Nominations</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Makeup and Hairstyling - Mark Coulier, Dalia Colli and Francesco Pegoretti</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Costume Design - Massimo Cantini Parrini</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">The Present</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Short Film (Live Action) - Farah Nabulsi and Ossama Bawardi</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Promising Young Woman</div><span class="label">5 Nominations, <span class="golden-text">1 Win</span></span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Best Picture - Ben Browning, Ashley Fox, Emerald Fennell and Josey McNamara, Producers</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actress in a Leading Role - Carey Mulligan</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Directing - Emerald Fennell</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Film Editing - Frédéric Thoraval</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Writing (Original Screenplay) - Written by Emerald Fennell</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">R</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Romania</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">S</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">A Shaun the Sheep Movie: Farmageddon</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Animated Feature Film - Richard Phelan, Will Becher and Paul Kewley</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Soul</div><span class="label">3 Nominations, <span class="golden-text">2 Wins</span></span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Animated Feature Film - Pete Docter and Dana Murray</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Music (Original Score) - Trent Reznor, Atticus Ross and Jon Batiste</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Sound - Ren Klyce, Coya Elliott and David Parker</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Sound of Metal</div><span class="label">6 Nominations, <span class="golden-text">2 Wins</span></span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Best Picture - Bert Hamelinck and Sacha Ben Harroche, Producers</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actor in a Supporting Role - Paul Raci</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actor in a Leading Role - Riz Ahmed</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Writing (Original Screenplay) - Screenplay by Darius Marder &amp; Abraham Marder; Story by Darius Marder &amp; Derek Cianfrance</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Film Editing - Mikkel E. G. Nielsen</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Sound - Nicolas Becker, Jaime Baksht, Michellee Couttolenc, Carlos Cortés and Phillip Bladh</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Speak Now</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Music (Original Song) - from One Night in Miami...; Music and Lyric by Leslie Odom, Jr. and Sam Ashworth</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">T</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Tenet</div><span class="label">2 Nominations, <span class="golden-text">1 Win</span></span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Visual Effects - Andrew Jackson, David Lee, Andrew Lockley and Scott Fisher</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Production Design - Production Design: Nathan Crowley; Set Decoration: Kathy Lucas</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Time</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Documentary (Feature) - Garrett Bradley, Lauren Domino and Kellen Quinn</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">The Trial of the Chicago 7</div><span class="label">5 Nominations</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Film Editing - Alan Baumgarten</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Best Picture - Marc Platt and Stuart Besser, Producers</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Cinematography - Phedon Papamichael</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actor in a Supporting Role - Sacha Baron Cohen</div>
                                                                </div>
                                                            </div>
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Writing (Original Screenplay) - Written by Aaron Sorkin</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Tunisia</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Two Distant Strangers</div><span class="label"><span class="golden-text">1 Win</span>, 1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content"><span class="golden-text">*</span> Short Film (Live Action) - Travon Free and Martin Desmond Roe</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">U</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">The United States vs. Billie Holiday</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Actress in a Leading Role - Andra Day</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">W</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">White Eye</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Short Film (Live Action) - Tomer Shushan and Shira Hochman</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">The White Tiger</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Writing (Adapted Screenplay) - Written for the screen by Ramin Bahrani</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Wolfwalkers</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Animated Feature Film - Tomm Moore, Ross Stewart, Paul Young and Stéphan Roelants</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="view-grouping">
                                                <div class="view-grouping-header">Y</div>
                                                <div class="view-grouping-content">
                                                    <div class="view-grouping">
                                                        <div class="view-grouping-header">Yes-People</div><span class="label">1 Nomination</span>
                                                        <div class="view-grouping-content">
                                                            <div>

                                                                <div class="views-field views-field-title-field">
                                                                    <div class="field-content">Short Film (Animated) - Gísli Darri Halldórsson and Arnar Gunnarsson</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>






                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <footer class="l-footer" role="contentinfo">
        <div class="l-region l-region--footer">
            <nav id="block-menu-menu-footer-menu" role="navigation" class="block block--menu block--menu-menu-footer-menu ">

                <ul class="menu">
                    <li class="first leaf level-1 menu-about"><span class="menu-item-span"><a href="/about">About</a></span></li>
                    <li class="leaf level-1 menu-contact"><span class="menu-item-span"><a href="/contact">Contact</a></span></li>
                    <li class="leaf level-1 menu-legal"><span class="menu-item-span"><a href="/footer/legal">Legal</a></span></li>
                    <li class="leaf level-1 menu-privacy"><span class="menu-item-span"><a href="/privacy">Privacy</a></span></li>
                    <li class="leaf level-1 menu-site-map"><span class="menu-item-span"><a href="/site-map">Site Map</a></span></li>
                    <li class="leaf level-1 menu-careers"><span class="menu-item-span"><a href="/footer/careers">Careers</a></span></li>
                    <li class="last leaf level-1 menu-press"><span class="menu-item-span"><a href="/press">Press</a></span></li>
                </ul>
            </nav>
            <div id="block-block-6" class="block block--block block--block-6 footer-copyright">
                <div class="block__content">
                    <p>© 2021 Academy of Motion Picture Arts and Sciences</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
    <div id="fb-root"></div>
    <script src="https://www.oscars.org/sites/oscars/files/js/js_YSGstXW1gbXbhRHr1vQVqnilmPq_VP6gtylpwKGa2js.js"></script>
    <script type="text/javascript">
        window.NREUM || (NREUM = {});
        NREUM.info = {
            "beacon": "bam-cell.nr-data.net",
            "licenseKey": "e156b2cbb6",
            "applicationID": "70689900",
            "transactionName": "YlNUYUVZWRFRWhAICVsZd1ZDUVgMH08NBBFGaUZUUF0=",
            "queueTime": 0,
            "applicationTime": 1086,
            "atts": "ThRXFw1DSh8=",
            "errorBeacon": "bam-cell.nr-data.net",
            "agent": ""
        }
    </script>

    <div id="cboxOverlay" style="display: none;"></div>
    <div id="colorbox" class="" role="dialog" tabindex="-1" style="display: none;">
        <div id="cboxWrapper">
            <div>
                <div id="cboxTopLeft" style="float: left;"></div>
                <div id="cboxTopCenter" style="float: left;"></div>
                <div id="cboxTopRight" style="float: left;"></div>
            </div>
            <div style="clear: left;">
                <div id="cboxMiddleLeft" style="float: left;"></div>
                <div id="cboxContent" style="float: left;">
                    <div id="cboxTitle" style="float: left;"></div>
                    <div id="cboxCurrent" style="float: left;"></div><button type="button" id="cboxPrevious"></button><button type="button" id="cboxNext"></button><button type="button" id="cboxSlideshow"></button>
                    <div id="cboxLoadingOverlay" style="float: left;"></div>
                    <div id="cboxLoadingGraphic" style="float: left;"></div>
                </div>
                <div id="cboxMiddleRight" style="float: left;"></div>
            </div>
            <div style="clear: left;">
                <div id="cboxBottomLeft" style="float: left;"></div>
                <div id="cboxBottomCenter" style="float: left;"></div>
                <div id="cboxBottomRight" style="float: left;"></div>
            </div>
        </div>
        <div style="position: absolute; width: 9999px; visibility: hidden; display: none; max-width: none;"></div>
    </div><iframe style="display: none; position: absolute; width: 1px; height: 1px; top: -9999px;" name="__uspapiLocator" tabindex="-1" role="presentation" aria-hidden="true" title="Blank"></iframe><iframe style="position: absolute; width: 1px; height: 1px; top: -9999px;"
        tabindex="-1" role="presentation" aria-hidden="true" title="Blank" src="https://consentcdn.cookiebot.com/sdk/bc-v3.min.html"></iframe>
    <script type="text/javascript" id="" src="https://110005633.collect.igodigital.com/collect.js"></script>
    <script type="text/javascript" id="">
        _etmc.push(["setOrgId", "110005633"]);
        _etmc.push(["trackPageView"]);
    </script>
    <div style="display: none;"><img src="https://nova.collect.igodigital.com/c2/110005633/track_page_view?payload=%7B%22title%22%3A%222021%20%7C%20Oscars.org%20%7C%20Academy%20of%20Motion%20Picture%20Arts%20and%20Sciences%22%2C%22url%22%3A%22https%3A%2F%2Fwww.oscars.org%2Foscars%2Fceremonies%2F2021%22%2C%22referrer%22%3A%22%22%7D"
            style="display: none;" title="blank image" alt="" aria-hidden="true" width="0" height="0"></div>
</body>

</html>` };
}


export default function OscarsClone() {
    return <div clone = ""
    dangerouslySetInnerHTML = { createHTML() }
    />;
}