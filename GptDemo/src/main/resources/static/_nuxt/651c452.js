(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        1: function(r, o, t) {
            "use strict";
            t.d(o, "k", (function() {
                return y
            })), t.d(o, "m", (function() {
                return x
            })), t.d(o, "l", (function() {
                return k
            })), t.d(o, "e", (function() {
                return _
            })), t.d(o, "b", (function() {
                return z
            })), t.d(o, "s", (function() {
                return j
            })), t.d(o, "g", (function() {
                return C
            })), t.d(o, "h", (function() {
                return P
            })), t.d(o, "d", (function() {
                return S
            })), t.d(o, "r", (function() {
                return O
            })), t.d(o, "j", (function() {
                return T
            })), t.d(o, "t", (function() {
                return N
            })), t.d(o, "o", (function() {
                return I
            })), t.d(o, "q", (function() {
                return R
            })), t.d(o, "f", (function() {
                return L
            })), t.d(o, "c", (function() {
                return D
            })), t.d(o, "i", (function() {
                return M
            })), t.d(o, "p", (function() {
                return G
            })), t.d(o, "a", (function() {
                return K
            })), t.d(o, "v", (function() {
                return W
            })), t.d(o, "n", (function() {
                return H
            })), t.d(o, "u", (function() {
                return Q
            }));
            t(49), t(19), t(50), t(51), t(34), t(23), t(35);
            var e = t(16),
                c = t(8),
                l = t(13),
                n = t(9),
                d = (t(66), t(10), t(26), t(186), t(27), t(46), t(55), t(22), t(42), t(43), t(36), t(21), t(64), t(144), t(188), t(261), t(31), t(133), t(368), t(68), t(78), t(0)),
                w = t(62);

            function f(object, r) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(object);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(object, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }

            function m(r) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((function(o) {
                        Object(l.a)(r, o, source[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(o) {
                        Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(source, o))
                    }))
                }
                return r
            }

            function h(r, o) {
                var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                if (!t) {
                    if (Array.isArray(r) || (t = function(r, o) {
                            if (!r) return;
                            if ("string" == typeof r) return v(r, o);
                            var t = Object.prototype.toString.call(r).slice(8, -1);
                            "Object" === t && r.constructor && (t = r.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(r);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return v(r, o)
                        }(r)) || o && r && "number" == typeof r.length) {
                        t && (r = t);
                        var i = 0,
                            e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return i >= r.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: r[i++]
                                }
                            },
                            e: function(r) {
                                throw r
                            },
                            f: e
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, l = !0,
                    n = !1;
                return {
                    s: function() {
                        t = t.call(r)
                    },
                    n: function() {
                        var r = t.next();
                        return l = r.done, r
                    },
                    e: function(r) {
                        n = !0, c = r
                    },
                    f: function() {
                        try {
                            l || null == t.return || t.return()
                        } finally {
                            if (n) throw c
                        }
                    }
                }
            }

            function v(r, o) {
                (null == o || o > r.length) && (o = r.length);
                for (var i = 0, t = new Array(o); i < o; i++) t[i] = r[i];
                return t
            }

            function y(r) {
                d.default.config.errorHandler && d.default.config.errorHandler(r)
            }

            function x(r) {
                return r.then((function(r) {
                    return r.default || r
                }))
            }

            function k(r) {
                return r.$options && "function" == typeof r.$options.fetch && !r.$options.fetch.length
            }

            function _(r) {
                var o, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    e = h(r.$children || []);
                try {
                    for (e.s(); !(o = e.n()).done;) {
                        var c = o.value;
                        c.$fetch && t.push(c), c.$children && _(c, t)
                    }
                } catch (r) {
                    e.e(r)
                } finally {
                    e.f()
                }
                return t
            }

            function z(r, o) {
                if (o || !r.options.__hasNuxtData) {
                    var t = r.options._originDataFn || r.options.data || function() {
                        return {}
                    };
                    r.options._originDataFn = t, r.options.data = function() {
                        var data = t.call(this, this);
                        return this.$ssrContext && (o = this.$ssrContext.asyncData[r.cid]), m(m({}, data), o)
                    }, r.options.__hasNuxtData = !0, r._Ctor && r._Ctor.options && (r._Ctor.options.data = r.options.data)
                }
            }

            function j(r) {
                return r.options && r._Ctor === r || (r.options ? (r._Ctor = r, r.extendOptions = r.options) : (r = d.default.extend(r))._Ctor = r, !r.options.name && r.options.__file && (r.options.name = r.options.__file)), r
            }

            function C(r) {
                var o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], r.matched.map((function(r, e) {
                    return Object.keys(r[t]).map((function(c) {
                        return o && o.push(e), r[t][c]
                    }))
                })))
            }

            function P(r) {
                return C(r, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "instances")
            }

            function S(r, o) {
                return Array.prototype.concat.apply([], r.matched.map((function(r, t) {
                    return Object.keys(r.components).reduce((function(e, c) {
                        return r.components[c] ? e.push(o(r.components[c], r.instances[c], r, c, t)) : delete r.components[c], e
                    }), [])
                })))
            }

            function O(r, o) {
                return Promise.all(S(r, function() {
                    var r = Object(c.a)(regeneratorRuntime.mark((function r(t, e, c, l) {
                        var n, d;
                        return regeneratorRuntime.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if ("function" != typeof t || t.options) {
                                        r.next = 11;
                                        break
                                    }
                                    return r.prev = 1, r.next = 4, t();
                                case 4:
                                    t = r.sent, r.next = 11;
                                    break;
                                case 7:
                                    throw r.prev = 7, r.t0 = r.catch(1), r.t0 && "ChunkLoadError" === r.t0.name && "undefined" != typeof window && window.sessionStorage && (n = Date.now(), (!(d = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || d + 6e4 < n) && (window.sessionStorage.setItem("nuxt-reload", n), window.location.reload(!0))), r.t0;
                                case 11:
                                    return c.components[l] = t = j(t), r.abrupt("return", "function" == typeof o ? o(t, e, c, l) : t);
                                case 13:
                                case "end":
                                    return r.stop()
                            }
                        }), r, null, [
                            [1, 7]
                        ])
                    })));
                    return function(o, t, e, c) {
                        return r.apply(this, arguments)
                    }
                }()))
            }

            function T(r) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = Object(c.a)(regeneratorRuntime.mark((function r(o) {
                    return regeneratorRuntime.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                if (o) {
                                    r.next = 2;
                                    break
                                }
                                return r.abrupt("return");
                            case 2:
                                return r.next = 4, O(o);
                            case 4:
                                return r.abrupt("return", m(m({}, o), {}, {
                                    meta: C(o).map((function(r, t) {
                                        return m(m({}, r.options.meta), (o.matched[t] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })))).apply(this, arguments)
            }

            function N(r, o) {
                return E.apply(this, arguments)
            }

            function E() {
                return (E = Object(c.a)(regeneratorRuntime.mark((function r(o, t) {
                    var c, l, d, f;
                    return regeneratorRuntime.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return o.context || (o.context = {
                                    isStatic: !1,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: o,
                                    store: o.store,
                                    payload: t.payload,
                                    error: t.error,
                                    base: o.router.options.base,
                                    env: {}
                                }, t.req && (o.context.req = t.req), t.res && (o.context.res = t.res), t.ssrContext && (o.context.ssrContext = t.ssrContext), o.context.redirect = function(r, path, t) {
                                    if (r) {
                                        o.context._redirected = !0;
                                        var c = Object(e.a)(path);
                                        if ("number" == typeof r || "undefined" !== c && "object" !== c || (t = path || {}, path = r, c = Object(e.a)(path), r = 302), "object" === c && (path = o.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(w.d)(path, t), window.location.assign(path), new Error("ERR_REDIRECT");
                                        o.context.next({
                                            path: path,
                                            query: t,
                                            status: r
                                        })
                                    }
                                }, o.context.nuxtState = window.__NUXT__), r.next = 3, Promise.all([T(t.route), T(t.from)]);
                            case 3:
                                c = r.sent, l = Object(n.a)(c, 2), d = l[0], f = l[1], t.route && (o.context.route = d), t.from && (o.context.from = f), o.context.next = t.next, o.context._redirected = !1, o.context._errored = !1, o.context.isHMR = !1, o.context.params = o.context.route.params || {}, o.context.query = o.context.route.query || {};
                            case 15:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })))).apply(this, arguments)
            }

            function I(r, o) {
                return !r.length || o._redirected || o._errored ? Promise.resolve() : R(r[0], o).then((function() {
                    return I(r.slice(1), o)
                }))
            }

            function R(r, o) {
                var t;
                return (t = 2 === r.length ? new Promise((function(t) {
                    r(o, (function(r, data) {
                        r && o.error(r), t(data = data || {})
                    }))
                })) : r(o)) && t instanceof Promise && "function" == typeof t.then ? t : Promise.resolve(t)
            }

            function L(base, r) {
                if ("hash" === r) return window.location.hash.replace(/^#\//, "");
                base = decodeURI(base).slice(0, -1);
                var path = decodeURI(window.location.pathname);
                base && path.startsWith(base) && (path = path.slice(base.length));
                var o = (path || "/") + window.location.search + window.location.hash;
                return Object(w.c)(o)
            }

            function D(r, o) {
                return function(r, o) {
                    for (var t = new Array(r.length), i = 0; i < r.length; i++) "object" === Object(e.a)(r[i]) && (t[i] = new RegExp("^(?:" + r[i].pattern + ")$", X(o)));
                    return function(o, e) {
                        for (var path = "", data = o || {}, c = (e || {}).pretty ? F : encodeURIComponent, l = 0; l < r.length; l++) {
                            var n = r[l];
                            if ("string" != typeof n) {
                                var d = data[n.name || "pathMatch"],
                                    w = void 0;
                                if (null == d) {
                                    if (n.optional) {
                                        n.partial && (path += n.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + n.name + '" to be defined')
                                }
                                if (Array.isArray(d)) {
                                    if (!n.repeat) throw new TypeError('Expected "' + n.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                                    if (0 === d.length) {
                                        if (n.optional) continue;
                                        throw new TypeError('Expected "' + n.name + '" to not be empty')
                                    }
                                    for (var f = 0; f < d.length; f++) {
                                        if (w = c(d[f]), !t[l].test(w)) throw new TypeError('Expected all "' + n.name + '" to match "' + n.pattern + '", but received `' + JSON.stringify(w) + "`");
                                        path += (0 === f ? n.prefix : n.delimiter) + w
                                    }
                                } else {
                                    if (w = n.asterisk ? U(d) : c(d), !t[l].test(w)) throw new TypeError('Expected "' + n.name + '" to match "' + n.pattern + '", but received "' + w + '"');
                                    path += n.prefix + w
                                }
                            } else path += n
                        }
                        return path
                    }
                }(function(r, o) {
                    var t, e = [],
                        c = 0,
                        l = 0,
                        path = "",
                        n = o && o.delimiter || "/";
                    for (; null != (t = $.exec(r));) {
                        var d = t[0],
                            w = t[1],
                            f = t.index;
                        if (path += r.slice(l, f), l = f + d.length, w) path += w[1];
                        else {
                            var m = r[l],
                                h = t[2],
                                v = t[3],
                                y = t[4],
                                x = t[5],
                                k = t[6],
                                _ = t[7];
                            path && (e.push(path), path = "");
                            var z = null != h && null != m && m !== h,
                                j = "+" === k || "*" === k,
                                C = "?" === k || "*" === k,
                                P = t[2] || n,
                                pattern = y || x;
                            e.push({
                                name: v || c++,
                                prefix: h || "",
                                delimiter: P,
                                optional: C,
                                repeat: j,
                                partial: z,
                                asterisk: Boolean(_),
                                pattern: pattern ? Y(pattern) : _ ? ".*" : "[^" + B(P) + "]+?"
                            })
                        }
                    }
                    l < r.length && (path += r.substr(l));
                    path && e.push(path);
                    return e
                }(r, o), o)
            }

            function M(r, o) {
                var t = {},
                    e = m(m({}, r), o);
                for (var c in e) String(r[c]) !== String(o[c]) && (t[c] = !0);
                return t
            }

            function G(r) {
                var o;
                if (r.message || "string" == typeof r) o = r.message || r;
                else try {
                    o = JSON.stringify(r, null, 2)
                } catch (t) {
                    o = "[".concat(r.constructor.name, "]")
                }
                return m(m({}, r), {}, {
                    message: o,
                    statusCode: r.statusCode || r.status || r.response && r.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(r) {
                window.onNuxtReadyCbs.push(r)
            };
            var $ = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function F(r, o) {
                var t = o ? /[?#]/g : /[/?#]/g;
                return encodeURI(r).replace(t, (function(r) {
                    return "%" + r.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function U(r) {
                return F(r, !0)
            }

            function B(r) {
                return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function Y(r) {
                return r.replace(/([=!:$/()])/g, "\\$1")
            }

            function X(r) {
                return r && r.sensitive ? "" : "i"
            }

            function K(r, o, t) {
                r.$options[o] || (r.$options[o] = []), r.$options[o].includes(t) || r.$options[o].push(t)
            }
            var W = w.b,
                H = (w.e, w.a);

            function Q(r) {
                try {
                    window.history.scrollRestoration = r
                } catch (r) {}
            }
        },
        1e3: function(r, o, t) {
            var e = t(24)((function(i) {
                return i[1]
            }));
            e.push([r.i, ".app-main[data-v-25448815]{font-size:16px}", ""]), e.locals = {}, r.exports = e
        },
        1001: function(r, o, t) {
            "use strict";
            t.r(o), t.d(o, "state", (function() {
                return e
            })), t.d(o, "mutations", (function() {
                return c
            }));
            var e = function() {
                    return {
                        loginDialog: !1,
                        loginSuccessRedirectPath: ""
                    }
                },
                c = {
                    toggleLoginDialog: function(r, o) {
                        r.loginDialog = !!o
                    },
                    setLoginSuccessRedirectPath: function(r, path) {
                        r.loginSuccessRedirectPath = path
                    }
                }
        },
        1002: function(r, o, t) {
            "use strict";
            t.r(o), t.d(o, "state", (function() {
                return l
            })), t.d(o, "mutations", (function() {
                return n
            })), t.d(o, "actions", (function() {
                return d
            }));
            t(10);
            var e = t(74),
                c = t(40),
                l = function() {
                    return {
                        userInfo: {},
                        curKey: "",
                        freeChats: 0,
                        freeFileCount: 0,
                        maxFileSizeDesc: 2
                    }
                },
                n = {
                    setUserInfo: function(r, o) {
                        r.userInfo = o, Object(e.f)(o)
                    },
                    rmUserInfo: function(r) {
                        r.userInfo = {}, Object(e.d)()
                    },
                    setCurKey: function(r, o) {
                        r.curKey = o, Object(e.e)(o)
                    },
                    rmCurKey: function(r) {
                        r.curKey = "", Object(e.c)()
                    },
                    setFreeChats: function(r, o) {
                        r.freeChats = o
                    },
                    setFreeFileCount: function(r, o) {
                        r.freeFileCount = o
                    },
                    setMaxFileSizeDesc: function(r, o) {
                        r.maxFileSizeDesc = o
                    }
                },
                d = {
                    findFreeChats: function(r, o) {
                        var t = r.commit,
                            e = r.state;
                        return new Promise((function(r, c) {
                            o.$get("/v1/ai-chat/chat/findFreeChats", {
                                params: {
                                    userId: e.userInfo.userId
                                }
                            }).then((function(o) {
                                t("setFreeChats", o.data), r(o)
                            })).catch((function(r) {
                                c(r)
                            }))
                        }))
                    },
                    findFreeFileCount: Object(c.a)((function(r, o) {
                        var t = r.commit,
                            e = r.state;
                        return new Promise((function(r, c) {
                            o.$get("/v1/ai-chat/embeddings/findFreeFiles", {
                                params: {
                                    userId: e.userInfo.userId
                                }
                            }).then((function(o) {
                                t("setFreeFileCount", o.data), r(o)
                            })).catch((function(r) {
                                c(r)
                            }))
                        }))
                    })),
                    findMaxFileSize: Object(c.a)((function(r, o) {
                        var t = r.commit,
                            e = r.state;
                        return new Promise((function(r, c) {
                            o.$get("/v1/ai-chat/embeddings/findFileSize", {
                                params: {
                                    userId: e.userInfo.userId
                                }
                            }).then((function(o) {
                                t("setMaxFileSizeDesc", o.data), r(o)
                            })).catch((function(r) {
                                c(r)
                            }))
                        }))
                    }))
                }
        },
        120: function(r, o, t) {
            "use strict";
            o.a = {}
        },
        159: function(r, o, t) {
            "use strict";
            t(104), t(10), t(23), t(68), t(78), t(55), t(26), t(36), t(31), t(27), t(49), t(42), t(21), t(19), t(50), t(51), t(43);
            var e = t(0);

            function c(r, o) {
                var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                if (!t) {
                    if (Array.isArray(r) || (t = function(r, o) {
                            if (!r) return;
                            if ("string" == typeof r) return l(r, o);
                            var t = Object.prototype.toString.call(r).slice(8, -1);
                            "Object" === t && r.constructor && (t = r.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(r);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(r, o)
                        }(r)) || o && r && "number" == typeof r.length) {
                        t && (r = t);
                        var i = 0,
                            e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return i >= r.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: r[i++]
                                }
                            },
                            e: function(r) {
                                throw r
                            },
                            f: e
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, n = !0,
                    d = !1;
                return {
                    s: function() {
                        t = t.call(r)
                    },
                    n: function() {
                        var r = t.next();
                        return n = r.done, r
                    },
                    e: function(r) {
                        d = !0, c = r
                    },
                    f: function() {
                        try {
                            n || null == t.return || t.return()
                        } finally {
                            if (d) throw c
                        }
                    }
                }
            }

            function l(r, o) {
                (null == o || o > r.length) && (o = r.length);
                for (var i = 0, t = new Array(o); i < o; i++) t[i] = r[i];
                return t
            }
            var n = window.requestIdleCallback || function(r) {
                    var o = Date.now();
                    return setTimeout((function() {
                        r({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - o))
                            }
                        })
                    }), 1)
                },
                d = window.cancelIdleCallback || function(r) {
                    clearTimeout(r)
                },
                w = window.IntersectionObserver && new window.IntersectionObserver((function(r) {
                    r.forEach((function(r) {
                        var o = r.intersectionRatio,
                            link = r.target;
                        o <= 0 || !link.__prefetch || link.__prefetch()
                    }))
                }));
            o.a = {
                name: "NuxtLink",
                extends: e.default.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !0
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.prefetch && !this.noPrefetch && (this.handleId = n(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function() {
                    d(this.handleId), this.__observed && (w.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function() {
                        w && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), w.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function() {
                        return this.getPrefetchComponents().length > 0
                    },
                    canPrefetch: function() {
                        var r = navigator.connection;
                        return !(this.$nuxt.isOffline || r && ((r.effectiveType || "").includes("2g") || r.saveData))
                    },
                    getPrefetchComponents: function() {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(r) {
                            return r.components.default
                        })).filter((function(r) {
                            return "function" == typeof r && !r.options && !r.__prefetched
                        }))
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            w.unobserve(this.$el);
                            var r, o = c(this.getPrefetchComponents());
                            try {
                                for (o.s(); !(r = o.n()).done;) {
                                    var t = r.value,
                                        e = t();
                                    e instanceof Promise && e.catch((function() {})), t.__prefetched = !0
                                }
                            } catch (r) {
                                o.e(r)
                            } finally {
                                o.f()
                            }
                        }
                    }
                }
            }
        },
        265: function(r, o, t) {
            var content = t(382);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("0ffd3463", content, !0, {
                sourceMap: !1
            })
        },
        267: function(r, o, t) {
            var content = t(977);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("edab59d2", content, !0, {
                sourceMap: !1
            })
        },
        268: function(r, o, t) {
            var content = t(979);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("f0beb836", content, !0, {
                sourceMap: !1
            })
        },
        269: function(r, o, t) {
            var content = t(981);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("3ba77f11", content, !0, {
                sourceMap: !1
            })
        },
        270: function(r, o, t) {
            var content = t(983);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("e455638a", content, !0, {
                sourceMap: !1
            })
        },
        271: function(r, o, t) {
            var content = t(987);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("12d3bb3e", content, !0, {
                sourceMap: !1
            })
        },
        272: function(r, o, t) {
            var content = t(989);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("36a5fe4a", content, !0, {
                sourceMap: !1
            })
        },
        273: function(r, o, t) {
            var content = t(991);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("e2879210", content, !0, {
                sourceMap: !1
            })
        },
        274: function(r, o, t) {
            var content = t(994);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("7d18c0d0", content, !0, {
                sourceMap: !1
            })
        },
        275: function(r, o, t) {
            var content = t(998);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("4d24361f", content, !0, {
                sourceMap: !1
            })
        },
        276: function(r, o, t) {
            var content = t(1e3);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("2116e822", content, !0, {
                sourceMap: !1
            })
        },
        315: function(r, o, t) {
            "use strict";
            var e = t(8),
                c = (t(66), t(10), t(104), t(0)),
                l = t(1),
                n = window.__NUXT__;

            function d() {
                if (!this._hydrated) return this.$fetch()
            }

            function w() {
                if ((r = this).$vnode && r.$vnode.elm && r.$vnode.elm.dataset && r.$vnode.elm.dataset.fetchKey) {
                    var r;
                    this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                    var data = n.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var o in data) c.default.set(this.$data, o, data[o])
                }
            }

            function f() {
                var r = this;
                return this._fetchPromise || (this._fetchPromise = m.call(this).then((function() {
                    delete r._fetchPromise
                }))), this._fetchPromise
            }

            function m() {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = Object(e.a)(regeneratorRuntime.mark((function r() {
                    var o, t, e, c = this;
                    return regeneratorRuntime.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, o = null, t = Date.now(), r.prev = 6, r.next = 9, this.$options.fetch.call(this);
                            case 9:
                                r.next = 15;
                                break;
                            case 11:
                                r.prev = 11, r.t0 = r.catch(6), o = Object(l.p)(r.t0);
                            case 15:
                                if (!((e = this._fetchDelay - (Date.now() - t)) > 0)) {
                                    r.next = 19;
                                    break
                                }
                                return r.next = 19, new Promise((function(r) {
                                    return setTimeout(r, e)
                                }));
                            case 19:
                                this.$fetchState.error = o, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return c.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return r.stop()
                        }
                    }), r, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            o.a = {
                beforeCreate: function() {
                    Object(l.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, c.default.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = f.bind(this), Object(l.a)(this, "created", w), Object(l.a)(this, "beforeMount", d))
                }
            }
        },
        317: function(r, o, t) {
            r.exports = t.p + "img/chathub-chatbot-100.7531d47.png"
        },
        319: function(r, o, t) {
            r.exports = t.p + "img/dingtalk.2687370.png"
        },
        320: function(r, o, t) {
            r.exports = t.p + "img/dingding.8cf9475.png"
        },
        321: function(r, o, t) {
            r.exports = t.p + "img/lark.0c83b2e.png"
        },
        322: function(r, o, t) {
            r.exports = t.p + "img/feishu.f4251e3.png"
        },
        323: function(r, o, t) {
            r.exports = t.p + "img/telegram.d66ae94.png"
        },
        327: function(r, o, t) {
            r.exports = t(328)
        },
        328: function(r, o, t) {
            "use strict";
            t.r(o),
                function(r) {
                    t(36), t(31), t(49), t(19), t(50), t(51);
                    var o = t(16),
                        e = t(8),
                        c = (t(165), t(345), t(357), t(359), t(66), t(27), t(10), t(23), t(26), t(22), t(68), t(78), t(46), t(55), t(21), t(42), t(43), t(104), t(0)),
                        l = t(311),
                        n = t(120),
                        d = t(1),
                        w = t(63),
                        f = t(315),
                        m = t(159);

                    function h(r, o) {
                        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                        if (!t) {
                            if (Array.isArray(r) || (t = function(r, o) {
                                    if (!r) return;
                                    if ("string" == typeof r) return v(r, o);
                                    var t = Object.prototype.toString.call(r).slice(8, -1);
                                    "Object" === t && r.constructor && (t = r.constructor.name);
                                    if ("Map" === t || "Set" === t) return Array.from(r);
                                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return v(r, o)
                                }(r)) || o && r && "number" == typeof r.length) {
                                t && (r = t);
                                var i = 0,
                                    e = function() {};
                                return {
                                    s: e,
                                    n: function() {
                                        return i >= r.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: r[i++]
                                        }
                                    },
                                    e: function(r) {
                                        throw r
                                    },
                                    f: e
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var c, l = !0,
                            n = !1;
                        return {
                            s: function() {
                                t = t.call(r)
                            },
                            n: function() {
                                var r = t.next();
                                return l = r.done, r
                            },
                            e: function(r) {
                                n = !0, c = r
                            },
                            f: function() {
                                try {
                                    l || null == t.return || t.return()
                                } finally {
                                    if (n) throw c
                                }
                            }
                        }
                    }

                    function v(r, o) {
                        (null == o || o > r.length) && (o = r.length);
                        for (var i = 0, t = new Array(o); i < o; i++) t[i] = r[i];
                        return t
                    }
                    c.default.__nuxt__fetch__mixin__ || (c.default.mixin(f.a), c.default.__nuxt__fetch__mixin__ = !0), c.default.component(m.a.name, m.a), c.default.component("NLink", m.a), r.fetch || (r.fetch = l.a);
                    var y, x, k = [],
                        _ = window.__NUXT__ || {},
                        z = _.config || {};
                    z._app && (t.p = Object(d.v)(z._app.cdnURL, z._app.assetsPath)), Object.assign(c.default.config, {
                        silent: !0,
                        performance: !1
                    });
                    var j = c.default.config.errorHandler || console.error;

                    function C(r, o, t) {
                        for (var e = function(component) {
                                var r = function(component, r) {
                                    if (!component || !component.options || !component.options[r]) return {};
                                    var option = component.options[r];
                                    if ("function" == typeof option) {
                                        for (var o = arguments.length, t = new Array(o > 2 ? o - 2 : 0), e = 2; e < o; e++) t[e - 2] = arguments[e];
                                        return option.apply(void 0, t)
                                    }
                                    return option
                                }(component, "transition", o, t) || {};
                                return "string" == typeof r ? {
                                    name: r
                                } : r
                            }, c = t ? Object(d.g)(t) : [], l = Math.max(r.length, c.length), n = [], w = function() {
                                var o = Object.assign({}, e(r[i])),
                                    t = Object.assign({}, e(c[i]));
                                Object.keys(o).filter((function(r) {
                                    return void 0 !== o[r] && !r.toLowerCase().includes("leave")
                                })).forEach((function(r) {
                                    t[r] = o[r]
                                })), n.push(t)
                            }, i = 0; i < l; i++) w();
                        return n
                    }

                    function P(r, o, t) {
                        return S.apply(this, arguments)
                    }

                    function S() {
                        return (S = Object(e.a)(regeneratorRuntime.mark((function r(o, t, e) {
                            var c, l, n, w, f = this;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(y.nuxt.err) || t.name !== o.name, this._paramChanged = !this._routeChanged && t.path !== o.path, this._queryChanged = !this._paramChanged && t.fullPath !== o.fullPath, this._diffQuery = this._queryChanged ? Object(d.i)(o.query, t.query) : [], r.prev = 4, !this._queryChanged) {
                                            r.next = 10;
                                            break
                                        }
                                        return r.next = 8, Object(d.r)(o, (function(r, o) {
                                            return {
                                                Component: r,
                                                instance: o
                                            }
                                        }));
                                    case 8:
                                        c = r.sent, c.some((function(r) {
                                            var e = r.Component,
                                                c = r.instance,
                                                l = e.options.watchQuery;
                                            return !0 === l || (Array.isArray(l) ? l.some((function(r) {
                                                return f._diffQuery[r]
                                            })) : "function" == typeof l && l.apply(c, [o.query, t.query]))
                                        }));
                                    case 10:
                                        e(), r.next = 24;
                                        break;
                                    case 13:
                                        if (r.prev = 13, r.t0 = r.catch(4), l = r.t0 || {}, n = l.statusCode || l.status || l.response && l.response.status || 500, w = l.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(w)) {
                                            r.next = 21;
                                            break
                                        }
                                        return window.location.reload(!0), r.abrupt("return");
                                    case 21:
                                        this.error({
                                            statusCode: n,
                                            message: w
                                        }), this.$nuxt.$emit("routeChanged", o, t, l), e();
                                    case 24:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, this, [
                                [4, 13]
                            ])
                        })))).apply(this, arguments)
                    }

                    function O(r, o) {
                        return _.serverRendered && o && Object(d.b)(r, o), r._Ctor = r, r
                    }

                    function T(r, o, t) {
                        var e = this,
                            c = ["nuxti18n"],
                            l = !1;
                        if (void 0 !== t && (c = [], (t = Object(d.s)(t)).options.middleware && (c = c.concat(t.options.middleware)), r.forEach((function(r) {
                                r.options.middleware && (c = c.concat(r.options.middleware))
                            }))), c = c.map((function(r) {
                                return "function" == typeof r ? r : ("function" != typeof n.a[r] && (l = !0, e.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + r
                                })), n.a[r])
                            })), !l) return Object(d.o)(c, o)
                    }

                    function A(r, o, t) {
                        return N.apply(this, arguments)
                    }

                    function N() {
                        return N = Object(e.a)(regeneratorRuntime.mark((function r(o, t, c) {
                            var l, n, f, m, v, x, _, z, j, P, S, O, A, N, E, I = this;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            r.next = 2;
                                            break
                                        }
                                        return r.abrupt("return", c());
                                    case 2:
                                        return !1, o === t ? (k = [], !0) : (l = [], k = Object(d.g)(t, l).map((function(r, i) {
                                            return Object(d.c)(t.matched[l[i]].path)(t.params)
                                        }))), n = !1, f = function(path) {
                                            n || (n = !0, c(path))
                                        }, r.next = 8, Object(d.t)(y, {
                                            route: o,
                                            from: t,
                                            next: f.bind(this)
                                        });
                                    case 8:
                                        if (this._dateLastError = y.nuxt.dateErr, this._hadError = Boolean(y.nuxt.err), m = [], (v = Object(d.g)(o, m)).length) {
                                            r.next = 27;
                                            break
                                        }
                                        return r.next = 15, T.call(this, v, y.context);
                                    case 15:
                                        if (!n) {
                                            r.next = 17;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 17:
                                        return x = (w.a.options || w.a).layout, r.next = 20, this.loadLayout("function" == typeof x ? x.call(w.a, y.context) : x);
                                    case 20:
                                        return _ = r.sent, r.next = 23, T.call(this, v, y.context, _);
                                    case 23:
                                        if (!n) {
                                            r.next = 25;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 25:
                                        return y.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), r.abrupt("return", c());
                                    case 27:
                                        return v.forEach((function(r) {
                                            r._Ctor && r._Ctor.options && (r.options.asyncData = r._Ctor.options.asyncData, r.options.fetch = r._Ctor.options.fetch)
                                        })), this.setTransitions(C(v, o, t)), r.prev = 29, r.next = 32, T.call(this, v, y.context);
                                    case 32:
                                        if (!n) {
                                            r.next = 34;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 34:
                                        if (!y.context._errored) {
                                            r.next = 36;
                                            break
                                        }
                                        return r.abrupt("return", c());
                                    case 36:
                                        return "function" == typeof(z = v[0].options.layout) && (z = z(y.context)), r.next = 40, this.loadLayout(z);
                                    case 40:
                                        return z = r.sent, r.next = 43, T.call(this, v, y.context, z);
                                    case 43:
                                        if (!n) {
                                            r.next = 45;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 45:
                                        if (!y.context._errored) {
                                            r.next = 47;
                                            break
                                        }
                                        return r.abrupt("return", c());
                                    case 47:
                                        j = !0, r.prev = 48, P = h(v), r.prev = 50, P.s();
                                    case 52:
                                        if ((S = P.n()).done) {
                                            r.next = 63;
                                            break
                                        }
                                        if ("function" == typeof(O = S.value).options.validate) {
                                            r.next = 56;
                                            break
                                        }
                                        return r.abrupt("continue", 61);
                                    case 56:
                                        return r.next = 58, O.options.validate(y.context);
                                    case 58:
                                        if (j = r.sent) {
                                            r.next = 61;
                                            break
                                        }
                                        return r.abrupt("break", 63);
                                    case 61:
                                        r.next = 52;
                                        break;
                                    case 63:
                                        r.next = 68;
                                        break;
                                    case 65:
                                        r.prev = 65, r.t0 = r.catch(50), P.e(r.t0);
                                    case 68:
                                        return r.prev = 68, P.f(), r.finish(68);
                                    case 71:
                                        r.next = 77;
                                        break;
                                    case 73:
                                        return r.prev = 73, r.t1 = r.catch(48), this.error({
                                            statusCode: r.t1.statusCode || "500",
                                            message: r.t1.message
                                        }), r.abrupt("return", c());
                                    case 77:
                                        if (j) {
                                            r.next = 80;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), r.abrupt("return", c());
                                    case 80:
                                        return r.next = 82, Promise.all(v.map(function() {
                                            var r = Object(e.a)(regeneratorRuntime.mark((function r(e, i) {
                                                var c, l, n, w, f, h, v, p;
                                                return regeneratorRuntime.wrap((function(r) {
                                                    for (;;) switch (r.prev = r.next) {
                                                        case 0:
                                                            if (e._path = Object(d.c)(o.matched[m[i]].path)(o.params), e._dataRefresh = !1, c = e._path !== k[i], I._routeChanged && c ? e._dataRefresh = !0 : I._paramChanged && c ? (l = e.options.watchParam, e._dataRefresh = !1 !== l) : I._queryChanged && (!0 === (n = e.options.watchQuery) ? e._dataRefresh = !0 : Array.isArray(n) ? e._dataRefresh = n.some((function(r) {
                                                                    return I._diffQuery[r]
                                                                })) : "function" == typeof n && (A || (A = Object(d.h)(o)), e._dataRefresh = n.apply(A[i], [o.query, t.query]))), I._hadError || !I._isMounted || e._dataRefresh) {
                                                                r.next = 6;
                                                                break
                                                            }
                                                            return r.abrupt("return");
                                                        case 6:
                                                            return w = [], f = e.options.asyncData && "function" == typeof e.options.asyncData, h = Boolean(e.options.fetch) && e.options.fetch.length, f && ((v = Object(d.q)(e.options.asyncData, y.context)).then((function(r) {
                                                                Object(d.b)(e, r)
                                                            })), w.push(v)), I.$loading.manual = !1 === e.options.loading, h && ((p = e.options.fetch(y.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(r) {})), w.push(p)), r.abrupt("return", Promise.all(w));
                                                        case 13:
                                                        case "end":
                                                            return r.stop()
                                                    }
                                                }), r)
                                            })));
                                            return function(o, t) {
                                                return r.apply(this, arguments)
                                            }
                                        }()));
                                    case 82:
                                        n || c(), r.next = 99;
                                        break;
                                    case 85:
                                        if (r.prev = 85, r.t2 = r.catch(29), "ERR_REDIRECT" !== (N = r.t2 || {}).message) {
                                            r.next = 90;
                                            break
                                        }
                                        return r.abrupt("return", this.$nuxt.$emit("routeChanged", o, t, N));
                                    case 90:
                                        return k = [], Object(d.k)(N), "function" == typeof(E = (w.a.options || w.a).layout) && (E = E(y.context)), r.next = 96, this.loadLayout(E);
                                    case 96:
                                        this.error(N), this.$nuxt.$emit("routeChanged", o, t, N), c();
                                    case 99:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, this, [
                                [29, 85],
                                [48, 73],
                                [50, 65, 68, 71]
                            ])
                        }))), N.apply(this, arguments)
                    }

                    function E(r, t) {
                        Object(d.d)(r, (function(r, t, e, l) {
                            return "object" !== Object(o.a)(r) || r.options || ((r = c.default.extend(r))._Ctor = r, e.components[l] = r), r
                        }))
                    }

                    function I(r) {
                        var o = Boolean(this.$options.nuxt.err);
                        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (o = !1);
                        var t = o ? (w.a.options || w.a).layout : r.matched[0].components.default.options.layout;
                        "function" == typeof t && (t = t(y.context)), this.setLayout(t)
                    }

                    function R(r) {
                        r._hadError && r._dateLastError === r.$options.nuxt.dateErr && r.error()
                    }

                    function L(r, o) {
                        var t = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var e = Object(d.h)(r),
                                l = Object(d.g)(r),
                                n = !1;
                            c.default.nextTick((function() {
                                e.forEach((function(r, i) {
                                    if (r && !r._isDestroyed && r.constructor._dataRefresh && l[i] === r.constructor && !0 !== r.$vnode.data.keepAlive && "function" == typeof r.constructor.options.data) {
                                        var o = r.constructor.options.data.call(r);
                                        for (var t in o) c.default.set(r.$data, t, o[t]);
                                        n = !0
                                    }
                                })), n && window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), R(t)
                            }))
                        }
                    }

                    function D(r) {
                        window.onNuxtReadyCbs.forEach((function(o) {
                            "function" == typeof o && o(r)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(r), x.afterEach((function(o, t) {
                            c.default.nextTick((function() {
                                return r.$nuxt.$emit("routeChanged", o, t)
                            }))
                        }))
                    }

                    function M() {
                        return M = Object(e.a)(regeneratorRuntime.mark((function r(o) {
                            var t, l, n, w, f;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return y = o.app, x = o.router, o.store, t = new c.default(y), l = _.layout || "default", r.next = 7, t.loadLayout(l);
                                    case 7:
                                        return t.setLayout(l), n = function() {
                                            t.$mount("#__nuxt"), x.afterEach(E), x.afterEach(I.bind(t)), x.afterEach(L.bind(t)), c.default.nextTick((function() {
                                                D(t)
                                            }))
                                        }, r.next = 11, Promise.all((m = y.context.route, Object(d.d)(m, function() {
                                            var r = Object(e.a)(regeneratorRuntime.mark((function r(o, t, e, c, l) {
                                                var n;
                                                return regeneratorRuntime.wrap((function(r) {
                                                    for (;;) switch (r.prev = r.next) {
                                                        case 0:
                                                            if ("function" != typeof o || o.options) {
                                                                r.next = 4;
                                                                break
                                                            }
                                                            return r.next = 3, o();
                                                        case 3:
                                                            o = r.sent;
                                                        case 4:
                                                            return n = O(Object(d.s)(o), _.data ? _.data[l] : null), e.components[c] = n, r.abrupt("return", n);
                                                        case 7:
                                                        case "end":
                                                            return r.stop()
                                                    }
                                                }), r)
                                            })));
                                            return function(o, t, e, c, l) {
                                                return r.apply(this, arguments)
                                            }
                                        }())));
                                    case 11:
                                        if (w = r.sent, t.setTransitions = t.$options.nuxt.setTransitions.bind(t), w.length && (t.setTransitions(C(w, x.currentRoute)), k = x.currentRoute.matched.map((function(r) {
                                                return Object(d.c)(r.path)(x.currentRoute.params)
                                            }))), t.$loading = {}, _.error && t.error(_.error), x.beforeEach(P.bind(t)), x.beforeEach(A.bind(t)), !_.serverRendered || !Object(d.n)(_.routePath, t.context.route.path)) {
                                            r.next = 20;
                                            break
                                        }
                                        return r.abrupt("return", n());
                                    case 20:
                                        return f = function() {
                                            E(x.currentRoute, x.currentRoute), I.call(t, x.currentRoute), R(t), n()
                                        }, r.next = 23, new Promise((function(r) {
                                            return setTimeout(r, 0)
                                        }));
                                    case 23:
                                        A.call(t, x.currentRoute, x.currentRoute, (function(path) {
                                            if (path) {
                                                var r = x.afterEach((function(o, t) {
                                                    r(), f()
                                                }));
                                                x.push(path, void 0, (function(r) {
                                                    r && j(r)
                                                }))
                                            } else f()
                                        }));
                                    case 24:
                                    case "end":
                                        return r.stop()
                                }
                                var m
                            }), r)
                        }))), M.apply(this, arguments)
                    }
                    Object(w.b)(null, _.config).then((function(r) {
                        return M.apply(this, arguments)
                    })).catch(j)
                }.call(this, t(60))
        },
        381: function(r, o, t) {
            "use strict";
            t(265)
        },
        382: function(r, o, t) {
            var e = t(24)((function(i) {
                return i[1]
            }));
            e.push([r.i, ".__nuxt-error-page{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;align-items:center;background:#f7f8fb;bottom:0;color:#47494e;display:flex;flex-direction:column;font-family:sans-serif;font-weight:100!important;justify-content:center;left:0;padding:1rem;position:absolute;right:0;text-align:center;top:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{color:#47494e;font-size:1.5rem;margin-bottom:8px;margin-top:15px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;-webkit-text-decoration:none;text-decoration:none}.__nuxt-error-page .logo{bottom:12px;left:12px;position:fixed}", ""]), e.locals = {}, r.exports = e
        },
        40: function(r, o, t) {
            "use strict";
            t.d(o, "b", (function() {
                return c
            })), t.d(o, "h", (function() {
                return l
            })), t.d(o, "c", (function() {
                return n
            })), t.d(o, "g", (function() {
                return d
            })), t.d(o, "d", (function() {
                return w
            })), t.d(o, "f", (function() {
                return f
            })), t.d(o, "e", (function() {
                return m
            })), t.d(o, "a", (function() {
                return h
            }));
            var e = t(16);
            t(36), t(22), t(10), t(31), t(104);

            function c(r) {
                for (var o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], t = "", i = 0; i < r; i++) {
                    t += o[Math.floor(36 * Math.random())]
                }
                return t
            }

            function l(r, o) {
                var t = o;
                t = "object" === Object(e.a)(t) ? "obj-" + (t = JSON.stringify(t)) : "str-" + t, localStorage.setItem(r, t)
            }

            function n(r) {
                var o = localStorage.getItem(r);
                if (o) return 0 === o.indexOf("obj-") ? (o = o.slice(4), JSON.parse(o)) : 0 === o.indexOf("str-") ? o.slice(4) : void 0
            }

            function d(r) {
                localStorage.removeItem(r)
            }

            function w() {
                var r = function() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                };
                return r() + r() + "-" + r() + "-" + r() + "-" + r() + "-" + r() + r() + r()
            }

            function f(r) {
                var o, t = !1;
                return function() {
                    return t || (o = r.apply(null, arguments), t = !0), o
                }
            }
            var m = function(r, o) {
                return f((function() {
                    return new Promise((function(t, e) {
                        var script = document.createElement("script");
                        for (var c in script.onload = t, script.onerror = e, script.src = r, o) script.setAttribute(c, o[c]);
                        document.body.appendChild(script)
                    }))
                }))
            };

            function h(r, o) {
                var t = null;
                return function() {
                    var e = arguments,
                        c = this;
                    clearTimeout(t), t = setTimeout((function() {
                        r.apply(c, e)
                    }), o)
                }
            }
        },
        63: function(r, o, t) {
            "use strict";
            t.d(o, "b", (function() {
                return lt
            })), t.d(o, "a", (function() {
                return U
            }));
            t(22), t(19), t(26), t(34), t(23), t(35);
            var e = t(73),
                c = t(8),
                l = t(13),
                n = (t(66), t(27), t(10), t(46), t(375), t(55), t(21), t(64), t(0)),
                d = t(29),
                w = t(122),
                f = t(216),
                m = t.n(f),
                h = t(99),
                v = t.n(h),
                y = (t(42), t(43), t(217)),
                x = t(62),
                k = t(1);
            t(316);
            "scrollRestoration" in window.history && (Object(k.u)("manual"), window.addEventListener("beforeunload", (function() {
                Object(k.u)("auto")
            })), window.addEventListener("load", (function() {
                Object(k.u)("manual")
            })));

            function _(object, r) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(object);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(object, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }

            function z(r) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? _(Object(source), !0).forEach((function(o) {
                        Object(l.a)(r, o, source[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function(o) {
                        Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(source, o))
                    }))
                }
                return r
            }
            var j = function() {
                    return Object(k.m)(Promise.all([t.e(0), t.e(1), t.e(2), t.e(11)]).then(t.bind(null, 1475)))
                },
                C = function() {
                    return Object(k.m)(t.e(6).then(t.bind(null, 1477)))
                },
                P = function() {
                    return Object(k.m)(Promise.all([t.e(0), t.e(1), t.e(3), t.e(7)]).then(t.bind(null, 1476)))
                },
                S = function() {
                    return Object(k.m)(Promise.all([t.e(0), t.e(1), t.e(2), t.e(8)]).then(t.bind(null, 1478)))
                },
                O = function() {
                    return Object(k.m)(Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(9)]).then(t.bind(null, 1474)))
                },
                T = function() {
                    return Object(k.m)(t.e(10).then(t.bind(null, 1479)))
                },
                A = function() {
                    return Object(k.m)(t.e(12).then(t.bind(null, 1480)))
                },
                N = function() {
                    return Object(k.m)(t.e(13).then(t.bind(null, 1481)))
                },
                E = function() {
                    return Object(k.m)(Promise.all([t.e(0), t.e(1), t.e(2), t.e(14)]).then(t.bind(null, 1482)))
                },
                I = function() {};
            n.default.use(y.a);
            var R = {
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(r, o, t) {
                    var e = !1,
                        c = r !== o;
                    t ? e = t : c && function(r) {
                        var o = Object(k.g)(r);
                        if (1 === o.length) {
                            var t = o[0].options;
                            return !1 !== (void 0 === t ? {} : t).scrollToTop
                        }
                        return o.some((function(r) {
                            var o = r.options;
                            return o && o.scrollToTop
                        }))
                    }(r) && (e = {
                        x: 0,
                        y: 0
                    });
                    var l = window.$nuxt;
                    return (!c || r.path === o.path && r.hash !== o.hash) && l.$nextTick((function() {
                        return l.$emit("triggerScroll")
                    })), new Promise((function(o) {
                        l.$once("triggerScroll", (function() {
                            if (r.hash) {
                                var t = r.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (t = "#" + window.CSS.escape(t.substr(1)));
                                try {
                                    var c = document.querySelector(t);
                                    if (c) {
                                        var l;
                                        e = {
                                            selector: t
                                        };
                                        var n = Number(null === (l = getComputedStyle(c)["scroll-margin-top"]) || void 0 === l ? void 0 : l.replace("px", ""));
                                        n && (e.offset = {
                                            y: n
                                        })
                                    }
                                } catch (r) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            o(e)
                        }))
                    }))
                },
                routes: [{
                    path: "/de",
                    component: j,
                    meta: {
                        path: "/"
                    },
                    name: "index___de"
                }, {
                    path: "/en",
                    component: j,
                    meta: {
                        path: "/"
                    },
                    name: "index___en"
                }, {
                    path: "/es",
                    component: j,
                    meta: {
                        path: "/"
                    },
                    name: "index___es"
                }, {
                    path: "/fr",
                    component: j,
                    meta: {
                        path: "/"
                    },
                    name: "index___fr"
                }, {
                    path: "/it",
                    component: j,
                    meta: {
                        path: "/"
                    },
                    name: "index___it"
                }, {
                    path: "/ja",
                    component: j,
                    meta: {
                        path: "/"
                    },
                    name: "index___ja"
                }, {
                    path: "/ko",
                    component: j,
                    meta: {
                        path: "/"
                    },
                    name: "index___ko"
                }, {
                    path: "/pt",
                    component: j,
                    meta: {
                        path: "/"
                    },
                    name: "index___pt"
                }, {
                    path: "/ru",
                    component: j,
                    meta: {
                        path: "/"
                    },
                    name: "index___ru"
                }, {
                    path: "/zh",
                    component: j,
                    meta: {
                        path: "/"
                    },
                    name: "index___zh"
                }, {
                    path: "/zh-hk",
                    component: j,
                    meta: {
                        path: "/"
                    },
                    name: "index___zh-hk"
                }, {
                    path: "/zh-tw",
                    component: j,
                    meta: {
                        path: "/"
                    },
                    name: "index___zh-tw"
                }, {
                    path: "/de/404",
                    component: C,
                    meta: {
                        path: "/404"
                    },
                    name: "404___de"
                }, {
                    path: "/de/channels",
                    component: P,
                    meta: {
                        icon: "icon-shezhi-xianxing",
                        i18n_key: "chathub.navbar.channels",
                        path: "/channels"
                    },
                    name: "channels___de"
                }, {
                    path: "/de/chathub-iframe",
                    component: S,
                    meta: {
                        path: "/chathub-iframe"
                    },
                    name: "chathub-iframe___de"
                }, {
                    path: "/de/create-robot",
                    component: O,
                    meta: {
                        icon: "icon-jiqiren",
                        i18n_key: "chathub.navbar.steps",
                        path: "/create-robot"
                    },
                    name: "create-robot___de"
                }, {
                    path: "/de/documents",
                    component: T,
                    meta: {
                        icon: "icon-guizewendang",
                        i18n_key: "chathub.navbar.files",
                        path: "/documents"
                    },
                    name: "documents___de"
                }, {
                    path: "/de/payment",
                    component: A,
                    meta: {
                        path: "/payment"
                    },
                    name: "payment___de"
                }, {
                    path: "/de/privacy",
                    component: N,
                    meta: {
                        path: "/privacy"
                    },
                    name: "privacy___de"
                }, {
                    path: "/de/webchat",
                    component: E,
                    meta: {
                        path: "/webchat"
                    },
                    name: "webchat___de"
                }, {
                    path: "/en/404",
                    component: C,
                    meta: {
                        path: "/404"
                    },
                    name: "404___en"
                }, {
                    path: "/en/channels",
                    component: P,
                    meta: {
                        icon: "icon-shezhi-xianxing",
                        i18n_key: "chathub.navbar.channels",
                        path: "/channels"
                    },
                    name: "channels___en"
                }, {
                    path: "/en/chathub-iframe",
                    component: S,
                    meta: {
                        path: "/chathub-iframe"
                    },
                    name: "chathub-iframe___en"
                }, {
                    path: "/en/create-robot",
                    component: O,
                    meta: {
                        icon: "icon-jiqiren",
                        i18n_key: "chathub.navbar.steps",
                        path: "/create-robot"
                    },
                    name: "create-robot___en"
                }, {
                    path: "/en/documents",
                    component: T,
                    meta: {
                        icon: "icon-guizewendang",
                        i18n_key: "chathub.navbar.files",
                        path: "/documents"
                    },
                    name: "documents___en"
                }, {
                    path: "/en/payment",
                    component: A,
                    meta: {
                        path: "/payment"
                    },
                    name: "payment___en"
                }, {
                    path: "/en/privacy",
                    component: N,
                    meta: {
                        path: "/privacy"
                    },
                    name: "privacy___en"
                }, {
                    path: "/en/webchat",
                    component: E,
                    meta: {
                        path: "/webchat"
                    },
                    name: "webchat___en"
                }, {
                    path: "/es/404",
                    component: C,
                    meta: {
                        path: "/404"
                    },
                    name: "404___es"
                }, {
                    path: "/es/channels",
                    component: P,
                    meta: {
                        icon: "icon-shezhi-xianxing",
                        i18n_key: "chathub.navbar.channels",
                        path: "/channels"
                    },
                    name: "channels___es"
                }, {
                    path: "/es/chathub-iframe",
                    component: S,
                    meta: {
                        path: "/chathub-iframe"
                    },
                    name: "chathub-iframe___es"
                }, {
                    path: "/es/create-robot",
                    component: O,
                    meta: {
                        icon: "icon-jiqiren",
                        i18n_key: "chathub.navbar.steps",
                        path: "/create-robot"
                    },
                    name: "create-robot___es"
                }, {
                    path: "/es/documents",
                    component: T,
                    meta: {
                        icon: "icon-guizewendang",
                        i18n_key: "chathub.navbar.files",
                        path: "/documents"
                    },
                    name: "documents___es"
                }, {
                    path: "/es/payment",
                    component: A,
                    meta: {
                        path: "/payment"
                    },
                    name: "payment___es"
                }, {
                    path: "/es/privacy",
                    component: N,
                    meta: {
                        path: "/privacy"
                    },
                    name: "privacy___es"
                }, {
                    path: "/es/webchat",
                    component: E,
                    meta: {
                        path: "/webchat"
                    },
                    name: "webchat___es"
                }, {
                    path: "/fr/404",
                    component: C,
                    meta: {
                        path: "/404"
                    },
                    name: "404___fr"
                }, {
                    path: "/fr/channels",
                    component: P,
                    meta: {
                        icon: "icon-shezhi-xianxing",
                        i18n_key: "chathub.navbar.channels",
                        path: "/channels"
                    },
                    name: "channels___fr"
                }, {
                    path: "/fr/chathub-iframe",
                    component: S,
                    meta: {
                        path: "/chathub-iframe"
                    },
                    name: "chathub-iframe___fr"
                }, {
                    path: "/fr/create-robot",
                    component: O,
                    meta: {
                        icon: "icon-jiqiren",
                        i18n_key: "chathub.navbar.steps",
                        path: "/create-robot"
                    },
                    name: "create-robot___fr"
                }, {
                    path: "/fr/documents",
                    component: T,
                    meta: {
                        icon: "icon-guizewendang",
                        i18n_key: "chathub.navbar.files",
                        path: "/documents"
                    },
                    name: "documents___fr"
                }, {
                    path: "/fr/payment",
                    component: A,
                    meta: {
                        path: "/payment"
                    },
                    name: "payment___fr"
                }, {
                    path: "/fr/privacy",
                    component: N,
                    meta: {
                        path: "/privacy"
                    },
                    name: "privacy___fr"
                }, {
                    path: "/fr/webchat",
                    component: E,
                    meta: {
                        path: "/webchat"
                    },
                    name: "webchat___fr"
                }, {
                    path: "/it/404",
                    component: C,
                    meta: {
                        path: "/404"
                    },
                    name: "404___it"
                }, {
                    path: "/it/channels",
                    component: P,
                    meta: {
                        icon: "icon-shezhi-xianxing",
                        i18n_key: "chathub.navbar.channels",
                        path: "/channels"
                    },
                    name: "channels___it"
                }, {
                    path: "/it/chathub-iframe",
                    component: S,
                    meta: {
                        path: "/chathub-iframe"
                    },
                    name: "chathub-iframe___it"
                }, {
                    path: "/it/create-robot",
                    component: O,
                    meta: {
                        icon: "icon-jiqiren",
                        i18n_key: "chathub.navbar.steps",
                        path: "/create-robot"
                    },
                    name: "create-robot___it"
                }, {
                    path: "/it/documents",
                    component: T,
                    meta: {
                        icon: "icon-guizewendang",
                        i18n_key: "chathub.navbar.files",
                        path: "/documents"
                    },
                    name: "documents___it"
                }, {
                    path: "/it/payment",
                    component: A,
                    meta: {
                        path: "/payment"
                    },
                    name: "payment___it"
                }, {
                    path: "/it/privacy",
                    component: N,
                    meta: {
                        path: "/privacy"
                    },
                    name: "privacy___it"
                }, {
                    path: "/it/webchat",
                    component: E,
                    meta: {
                        path: "/webchat"
                    },
                    name: "webchat___it"
                }, {
                    path: "/ja/404",
                    component: C,
                    meta: {
                        path: "/404"
                    },
                    name: "404___ja"
                }, {
                    path: "/ja/channels",
                    component: P,
                    meta: {
                        icon: "icon-shezhi-xianxing",
                        i18n_key: "chathub.navbar.channels",
                        path: "/channels"
                    },
                    name: "channels___ja"
                }, {
                    path: "/ja/chathub-iframe",
                    component: S,
                    meta: {
                        path: "/chathub-iframe"
                    },
                    name: "chathub-iframe___ja"
                }, {
                    path: "/ja/create-robot",
                    component: O,
                    meta: {
                        icon: "icon-jiqiren",
                        i18n_key: "chathub.navbar.steps",
                        path: "/create-robot"
                    },
                    name: "create-robot___ja"
                }, {
                    path: "/ja/documents",
                    component: T,
                    meta: {
                        icon: "icon-guizewendang",
                        i18n_key: "chathub.navbar.files",
                        path: "/documents"
                    },
                    name: "documents___ja"
                }, {
                    path: "/ja/payment",
                    component: A,
                    meta: {
                        path: "/payment"
                    },
                    name: "payment___ja"
                }, {
                    path: "/ja/privacy",
                    component: N,
                    meta: {
                        path: "/privacy"
                    },
                    name: "privacy___ja"
                }, {
                    path: "/ja/webchat",
                    component: E,
                    meta: {
                        path: "/webchat"
                    },
                    name: "webchat___ja"
                }, {
                    path: "/ko/404",
                    component: C,
                    meta: {
                        path: "/404"
                    },
                    name: "404___ko"
                }, {
                    path: "/ko/channels",
                    component: P,
                    meta: {
                        icon: "icon-shezhi-xianxing",
                        i18n_key: "chathub.navbar.channels",
                        path: "/channels"
                    },
                    name: "channels___ko"
                }, {
                    path: "/ko/chathub-iframe",
                    component: S,
                    meta: {
                        path: "/chathub-iframe"
                    },
                    name: "chathub-iframe___ko"
                }, {
                    path: "/ko/create-robot",
                    component: O,
                    meta: {
                        icon: "icon-jiqiren",
                        i18n_key: "chathub.navbar.steps",
                        path: "/create-robot"
                    },
                    name: "create-robot___ko"
                }, {
                    path: "/ko/documents",
                    component: T,
                    meta: {
                        icon: "icon-guizewendang",
                        i18n_key: "chathub.navbar.files",
                        path: "/documents"
                    },
                    name: "documents___ko"
                }, {
                    path: "/ko/payment",
                    component: A,
                    meta: {
                        path: "/payment"
                    },
                    name: "payment___ko"
                }, {
                    path: "/ko/privacy",
                    component: N,
                    meta: {
                        path: "/privacy"
                    },
                    name: "privacy___ko"
                }, {
                    path: "/ko/webchat",
                    component: E,
                    meta: {
                        path: "/webchat"
                    },
                    name: "webchat___ko"
                }, {
                    path: "/pt/404",
                    component: C,
                    meta: {
                        path: "/404"
                    },
                    name: "404___pt"
                }, {
                    path: "/pt/channels",
                    component: P,
                    meta: {
                        icon: "icon-shezhi-xianxing",
                        i18n_key: "chathub.navbar.channels",
                        path: "/channels"
                    },
                    name: "channels___pt"
                }, {
                    path: "/pt/chathub-iframe",
                    component: S,
                    meta: {
                        path: "/chathub-iframe"
                    },
                    name: "chathub-iframe___pt"
                }, {
                    path: "/pt/create-robot",
                    component: O,
                    meta: {
                        icon: "icon-jiqiren",
                        i18n_key: "chathub.navbar.steps",
                        path: "/create-robot"
                    },
                    name: "create-robot___pt"
                }, {
                    path: "/pt/documents",
                    component: T,
                    meta: {
                        icon: "icon-guizewendang",
                        i18n_key: "chathub.navbar.files",
                        path: "/documents"
                    },
                    name: "documents___pt"
                }, {
                    path: "/pt/payment",
                    component: A,
                    meta: {
                        path: "/payment"
                    },
                    name: "payment___pt"
                }, {
                    path: "/pt/privacy",
                    component: N,
                    meta: {
                        path: "/privacy"
                    },
                    name: "privacy___pt"
                }, {
                    path: "/pt/webchat",
                    component: E,
                    meta: {
                        path: "/webchat"
                    },
                    name: "webchat___pt"
                }, {
                    path: "/ru/404",
                    component: C,
                    meta: {
                        path: "/404"
                    },
                    name: "404___ru"
                }, {
                    path: "/ru/channels",
                    component: P,
                    meta: {
                        icon: "icon-shezhi-xianxing",
                        i18n_key: "chathub.navbar.channels",
                        path: "/channels"
                    },
                    name: "channels___ru"
                }, {
                    path: "/ru/chathub-iframe",
                    component: S,
                    meta: {
                        path: "/chathub-iframe"
                    },
                    name: "chathub-iframe___ru"
                }, {
                    path: "/ru/create-robot",
                    component: O,
                    meta: {
                        icon: "icon-jiqiren",
                        i18n_key: "chathub.navbar.steps",
                        path: "/create-robot"
                    },
                    name: "create-robot___ru"
                }, {
                    path: "/ru/documents",
                    component: T,
                    meta: {
                        icon: "icon-guizewendang",
                        i18n_key: "chathub.navbar.files",
                        path: "/documents"
                    },
                    name: "documents___ru"
                }, {
                    path: "/ru/payment",
                    component: A,
                    meta: {
                        path: "/payment"
                    },
                    name: "payment___ru"
                }, {
                    path: "/ru/privacy",
                    component: N,
                    meta: {
                        path: "/privacy"
                    },
                    name: "privacy___ru"
                }, {
                    path: "/ru/webchat",
                    component: E,
                    meta: {
                        path: "/webchat"
                    },
                    name: "webchat___ru"
                }, {
                    path: "/zh-hk/404",
                    component: C,
                    meta: {
                        path: "/404"
                    },
                    name: "404___zh-hk"
                }, {
                    path: "/zh-hk/channels",
                    component: P,
                    meta: {
                        icon: "icon-shezhi-xianxing",
                        i18n_key: "chathub.navbar.channels",
                        path: "/channels"
                    },
                    name: "channels___zh-hk"
                }, {
                    path: "/zh-hk/chathub-iframe",
                    component: S,
                    meta: {
                        path: "/chathub-iframe"
                    },
                    name: "chathub-iframe___zh-hk"
                }, {
                    path: "/zh-hk/create-robot",
                    component: O,
                    meta: {
                        icon: "icon-jiqiren",
                        i18n_key: "chathub.navbar.steps",
                        path: "/create-robot"
                    },
                    name: "create-robot___zh-hk"
                }, {
                    path: "/zh-hk/documents",
                    component: T,
                    meta: {
                        icon: "icon-guizewendang",
                        i18n_key: "chathub.navbar.files",
                        path: "/documents"
                    },
                    name: "documents___zh-hk"
                }, {
                    path: "/zh-hk/payment",
                    component: A,
                    meta: {
                        path: "/payment"
                    },
                    name: "payment___zh-hk"
                }, {
                    path: "/zh-hk/privacy",
                    component: N,
                    meta: {
                        path: "/privacy"
                    },
                    name: "privacy___zh-hk"
                }, {
                    path: "/zh-hk/webchat",
                    component: E,
                    meta: {
                        path: "/webchat"
                    },
                    name: "webchat___zh-hk"
                }, {
                    path: "/zh-tw/404",
                    component: C,
                    meta: {
                        path: "/404"
                    },
                    name: "404___zh-tw"
                }, {
                    path: "/zh-tw/channels",
                    component: P,
                    meta: {
                        icon: "icon-shezhi-xianxing",
                        i18n_key: "chathub.navbar.channels",
                        path: "/channels"
                    },
                    name: "channels___zh-tw"
                }, {
                    path: "/zh-tw/chathub-iframe",
                    component: S,
                    meta: {
                        path: "/chathub-iframe"
                    },
                    name: "chathub-iframe___zh-tw"
                }, {
                    path: "/zh-tw/create-robot",
                    component: O,
                    meta: {
                        icon: "icon-jiqiren",
                        i18n_key: "chathub.navbar.steps",
                        path: "/create-robot"
                    },
                    name: "create-robot___zh-tw"
                }, {
                    path: "/zh-tw/documents",
                    component: T,
                    meta: {
                        icon: "icon-guizewendang",
                        i18n_key: "chathub.navbar.files",
                        path: "/documents"
                    },
                    name: "documents___zh-tw"
                }, {
                    path: "/zh-tw/payment",
                    component: A,
                    meta: {
                        path: "/payment"
                    },
                    name: "payment___zh-tw"
                }, {
                    path: "/zh-tw/privacy",
                    component: N,
                    meta: {
                        path: "/privacy"
                    },
                    name: "privacy___zh-tw"
                }, {
                    path: "/zh-tw/webchat",
                    component: E,
                    meta: {
                        path: "/webchat"
                    },
                    name: "webchat___zh-tw"
                }, {
                    path: "/zh/404",
                    component: C,
                    meta: {
                        path: "/404"
                    },
                    name: "404___zh"
                }, {
                    path: "/zh/channels",
                    component: P,
                    meta: {
                        icon: "icon-shezhi-xianxing",
                        i18n_key: "chathub.navbar.channels",
                        path: "/channels"
                    },
                    name: "channels___zh"
                }, {
                    path: "/zh/chathub-iframe",
                    component: S,
                    meta: {
                        path: "/chathub-iframe"
                    },
                    name: "chathub-iframe___zh"
                }, {
                    path: "/zh/create-robot",
                    component: O,
                    meta: {
                        icon: "icon-jiqiren",
                        i18n_key: "chathub.navbar.steps",
                        path: "/create-robot"
                    },
                    name: "create-robot___zh"
                }, {
                    path: "/zh/documents",
                    component: T,
                    meta: {
                        icon: "icon-guizewendang",
                        i18n_key: "chathub.navbar.files",
                        path: "/documents"
                    },
                    name: "documents___zh"
                }, {
                    path: "/zh/payment",
                    component: A,
                    meta: {
                        path: "/payment"
                    },
                    name: "payment___zh"
                }, {
                    path: "/zh/privacy",
                    component: N,
                    meta: {
                        path: "/privacy"
                    },
                    name: "privacy___zh"
                }, {
                    path: "/zh/webchat",
                    component: E,
                    meta: {
                        path: "/webchat"
                    },
                    name: "webchat___zh"
                }, {
                    path: "/de/:pathMatch(.*)*",
                    component: C,
                    name: "custom___de"
                }, {
                    path: "/en/:pathMatch(.*)*",
                    component: C,
                    name: "custom___en"
                }, {
                    path: "/es/:pathMatch(.*)*",
                    component: C,
                    name: "custom___es"
                }, {
                    path: "/fr/:pathMatch(.*)*",
                    component: C,
                    name: "custom___fr"
                }, {
                    path: "/it/:pathMatch(.*)*",
                    component: C,
                    name: "custom___it"
                }, {
                    path: "/ja/:pathMatch(.*)*",
                    component: C,
                    name: "custom___ja"
                }, {
                    path: "/ko/:pathMatch(.*)*",
                    component: C,
                    name: "custom___ko"
                }, {
                    path: "/pt/:pathMatch(.*)*",
                    component: C,
                    name: "custom___pt"
                }, {
                    path: "/ru/:pathMatch(.*)*",
                    component: C,
                    name: "custom___ru"
                }, {
                    path: "/zh-hk/:pathMatch(.*)*",
                    component: C,
                    name: "custom___zh-hk"
                }, {
                    path: "/zh-tw/:pathMatch(.*)*",
                    component: C,
                    name: "custom___zh-tw"
                }, {
                    path: "/zh/:pathMatch(.*)*",
                    component: C,
                    name: "custom___zh"
                }],
                fallback: !1
            };

            function L(r, o) {
                var base = o._app && o._app.basePath || R.base,
                    t = new y.a(z(z({}, R), {}, {
                        base: base
                    })),
                    e = t.push;
                t.push = function(r) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I,
                        t = arguments.length > 2 ? arguments[2] : void 0;
                    return e.call(this, r, o, t)
                };
                var c = t.resolve.bind(t);
                return t.resolve = function(r, o, t) {
                    return "string" == typeof r && (r = Object(x.c)(r)), c(r, o, t)
                }, t
            }
            var D = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function(r, o) {
                        var t = o.parent,
                            data = o.data,
                            e = o.props,
                            c = t.$createElement;
                        data.nuxtChild = !0;
                        for (var l = t, n = t.$nuxt.nuxt.transitions, d = t.$nuxt.nuxt.defaultTransition, w = 0; t;) t.$vnode && t.$vnode.data.nuxtChild && w++, t = t.$parent;
                        data.nuxtChildDepth = w;
                        var f = n[w] || d,
                            m = {};
                        M.forEach((function(r) {
                            void 0 !== f[r] && (m[r] = f[r])
                        }));
                        var h = {};
                        G.forEach((function(r) {
                            "function" == typeof f[r] && (h[r] = f[r].bind(l))
                        }));
                        var v = h.beforeEnter;
                        if (h.beforeEnter = function(r) {
                                if (window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), v) return v.call(l, r)
                            }, !1 === f.css) {
                            var y = h.leave;
                            (!y || y.length < 2) && (h.leave = function(r, o) {
                                y && y.call(l, r), l.$nextTick(o)
                            })
                        }
                        var x = c("routerView", data);
                        return e.keepAlive && (x = c("keep-alive", {
                            props: e.keepAliveProps
                        }, [x])), c("transition", {
                            props: m,
                            on: h
                        }, [x])
                    }
                },
                M = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                G = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                $ = {
                    name: "NuxtError",
                    props: {
                        error: {
                            type: Object,
                            default: null
                        }
                    },
                    computed: {
                        statusCode: function() {
                            return this.error && this.error.statusCode || 500
                        },
                        message: function() {
                            return this.error.message || "Error"
                        }
                    },
                    head: function() {
                        return {
                            title: this.message,
                            meta: [{
                                name: "viewport",
                                content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                            }]
                        }
                    }
                },
                F = (t(381), t(12)),
                U = Object(F.a)($, (function() {
                    var r = this,
                        o = r._self._c;
                    return o("div", {
                        staticClass: "__nuxt-error-page"
                    }, [o("div", {
                        staticClass: "error"
                    }, [o("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "90",
                            height: "90",
                            fill: "#DBE1EC",
                            viewBox: "0 0 48 48"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                        }
                    })]), r._v(" "), o("div", {
                        staticClass: "title"
                    }, [r._v(r._s(r.message))]), r._v(" "), 404 === r.statusCode ? o("p", {
                        staticClass: "description"
                    }, [void 0 === r.$route ? o("a", {
                        staticClass: "error-link",
                        attrs: {
                            href: "/"
                        }
                    }) : o("NuxtLink", {
                        staticClass: "error-link",
                        attrs: {
                            to: "/"
                        }
                    }, [r._v("Back to the home page")])], 1) : r._e(), r._v(" "), r._m(0)])])
                }), [function() {
                    var r = this._self._c;
                    return r("div", {
                        staticClass: "logo"
                    }, [r("a", {
                        attrs: {
                            href: "https://nuxtjs.org",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [this._v("Nuxt")])])
                }], !1, null, null, null).exports,
                B = t(9),
                Y = (t(31), {
                    name: "Nuxt",
                    components: {
                        NuxtChild: D,
                        NuxtError: U
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function(r) {
                        this.displayingNuxtError && (this.errorFromNuxtError = r, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(k.c)(this.$route.matched[0].path)(this.$route.params);
                            var r = Object(B.a)(this.$route.matched, 1)[0];
                            if (!r) return this.$route.path;
                            var o = r.components.default;
                            if (o && o.options) {
                                var t = o.options;
                                if (t.key) return "function" == typeof t.key ? t.key(this.$route) : t.key
                            }
                            return /\/$/.test(r.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function() {
                        n.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function(r) {
                        var o = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                            return o.errorFromNuxtError = !1
                        })), r("div", {}, [r("h2", "An error occurred while showing the error page"), r("p", "Unfortunately an error occurred and while showing the error page another error occurred"), r("p", "Error details: ".concat(this.errorFromNuxtError.toString())), r("nuxt-link", {
                            props: {
                                to: "/"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                            return o.displayingNuxtError = !1
                        })), r(U, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : r("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                }),
                X = (t(36), t(49), t(50), t(51), t(383), t(967), t(969), t(971), [function() {
                    var r = this._self._c;
                    return r("div", {
                        staticClass: "logo-container"
                    }, [r("img", {
                        attrs: {
                            src: t(975)
                        }
                    })])
                }]),
                K = (t(976), Object(F.a)({}, (function() {
                    this._self._c;
                    return this._m(0)
                }), X, !1, null, "7b55521c", null).exports),
                W = {
                    methods: {
                        toPayment: function() {
                            var r = this.$router.resolve(this.localePath("/payment")).href;
                            window.open(r, "_blank")
                        }
                    }
                },
                H = (t(978), Object(F.a)(W, (function() {
                    var r = this,
                        o = r._self._c;
                    return o("div", {
                        staticClass: "hamburger-container"
                    }, [o("div", {
                        staticClass: "item",
                        on: {
                            click: r.toPayment
                        }
                    }, [r._v("\n    " + r._s(r.$t("chathub.hamburger.update")) + "\n  ")]), r._v(" "), o("div", {
                        staticClass: "item"
                    }, [r._v("\n    " + r._s(r.$t("chathub.hamburger.document")) + "\n  ")])])
                }), [], !1, null, "4242198d", null).exports),
                Q = (t(980), {
                    components: {
                        Logo: K,
                        Hamburger: H,
                        Avatar: Object(F.a)({}, (function() {
                            var r = this._self._c;
                            return r("div", {
                                staticClass: "avatar-container"
                            }, [r("el-avatar", {
                                attrs: {
                                    src: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                }
                            })], 1)
                        }), [], !1, null, "7e2c4980", null).exports
                    }
                }),
                V = (t(982), Object(F.a)(Q, (function() {
                    var r = this,
                        o = r._self._c;
                    return o("div", {
                        staticClass: "navigation-bar"
                    }, [o("Logo", {
                        staticStyle: {
                            "margin-left": "57px"
                        }
                    }), r._v(" "), o("Avatar", {
                        staticStyle: {
                            "margin-right": "15px"
                        }
                    }), r._v(" "), o("Hamburger", {
                        staticStyle: {
                            "margin-right": "15px"
                        }
                    })], 1)
                }), [], !1, null, "53b38142", null).exports);
            t(985), t(169);

            function Z(object, r) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(object);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(object, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }
            var J = {
                    data: function() {
                        return {
                            name: "微信用户"
                        }
                    },
                    computed: function(r) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? Z(Object(source), !0).forEach((function(o) {
                                Object(l.a)(r, o, source[o])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(source)) : Z(Object(source)).forEach((function(o) {
                                Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(source, o))
                            }))
                        }
                        return r
                    }({}, Object(d.c)("user", ["userInfo", "freeChats", "freeFileCount", "maxFileSizeDesc"])),
                    mounted: function() {
                        this.findUser()
                    },
                    methods: {
                        findUser: function() {
                            var r = this;
                            this.$api.$get("/v1/ai-chat/user/findUser", {
                                params: {
                                    id: this.userInfo.userId
                                }
                            }).then((function(o) {
                                var data = o.data;
                                data.name && (r.name = data.name)
                            }))
                        },
                        toPayment: function() {
                            var r = this.$router.resolve(this.localePath("/payment")).href;
                            window.open(r, "_blank")
                        }
                    }
                },
                rr = J;
            t(986);

            function or(object, r) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(object);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(object, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }

            function er(r) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? or(Object(source), !0).forEach((function(o) {
                        Object(l.a)(r, o, source[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(source)) : or(Object(source)).forEach((function(o) {
                        Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(source, o))
                    }))
                }
                return r
            }
            var ar = {
                    components: {
                        UserCard: Object(F.a)(rr, (function() {
                            var r = this,
                                o = r._self._c;
                            return o("div", {
                                staticClass: "user-card"
                            }, [o("p", {
                                staticClass: "name"
                            }, [r._v("\n    " + r._s(r.name) + "\n  ")]), r._v(" "), o("div", {
                                staticClass: "id-wrap"
                            }, [r._v("\n    ID "), o("span", {
                                staticClass: "num"
                            }, [r._v("\n      " + r._s("P" + (87654321 - parseInt(r.userInfo.userId))) + "\n    ")])]), r._v(" "), o("div", {
                                staticClass: "tips"
                            }, [o("div", {
                                staticClass: "item text-overflow",
                                attrs: {
                                    title: r.$t("chathub.userCard.tip1", {
                                        Number: r.freeFileCount
                                    })
                                }
                            }, [o("i18n", {
                                attrs: {
                                    path: "chathub.userCard.tip1"
                                },
                                scopedSlots: r._u([{
                                    key: "Number",
                                    fn: function() {
                                        return [o("span", {
                                            staticClass: "num"
                                        }, [r._v(r._s(r.freeFileCount))])]
                                    },
                                    proxy: !0
                                }])
                            })], 1), r._v(" "), o("div", {
                                staticClass: "item text-overflow",
                                attrs: {
                                    title: r.$t("chathub.userCard.tips2", {
                                        Number: r.maxFileSizeDesc
                                    })
                                }
                            }, [o("i18n", {
                                attrs: {
                                    path: "chathub.userCard.tips2"
                                },
                                scopedSlots: r._u([{
                                    key: "Number",
                                    fn: function() {
                                        return [o("span", {
                                            staticClass: "num"
                                        }, [r._v(r._s(r.maxFileSizeDesc))])]
                                    },
                                    proxy: !0
                                }])
                            })], 1), r._v(" "), o("div", {
                                staticClass: "item text-overflow",
                                attrs: {
                                    title: r.$t("chathub.userCard.tips3", {
                                        Number: r.freeChats
                                    })
                                }
                            }, [o("i18n", {
                                attrs: {
                                    path: "chathub.userCard.tips3"
                                },
                                scopedSlots: r._u([{
                                    key: "Number",
                                    fn: function() {
                                        return [o("span", {
                                            staticClass: "num"
                                        }, [r._v(r._s(r.freeChats))])]
                                    },
                                    proxy: !0
                                }])
                            })], 1)]), r._v(" "), o("el-button", {
                                staticClass: "upgrade-btn",
                                on: {
                                    click: r.toPayment
                                }
                            }, [r._v(r._s(r.$t("chathub.userCard.update")))])], 1)
                        }), [], !1, null, "77692eeb", null).exports
                    },
                    computed: {
                        routes: function() {
                            var r = {};
                            this.$router.options.routes.forEach((function(o) {
                                o.meta && o.meta.path && o.meta.i18n_key && (r[o.meta.path] = o.meta)
                            }));
                            var o = Object.values(r),
                                t = null;
                            if (o.forEach((function(r, o) {
                                    "/create-robot" === r.path && (t = o)
                                })), "number" == typeof t) {
                                var e = o.splice(t, 1);
                                o.unshift(e[0])
                            }
                            return o
                        },
                        activeMenu: function() {
                            return this.$route.meta.path
                        }
                    },
                    methods: er(er({}, Object(d.b)("user", ["rmUserInfo", "rmCurKey"])), {}, {
                        jump: function(r) {
                            this.$router.push(this.localePath(r.path))
                        },
                        logout: function() {
                            this.rmUserInfo(), this.rmCurKey(), this.$router.push(this.localePath("/"))
                        }
                    })
                },
                ir = (t(988), {
                    components: {
                        NavigationBar: V,
                        Sidebar: Object(F.a)(ar, (function() {
                            var r = this,
                                o = r._self._c;
                            return o("div", {
                                staticClass: "sidebar"
                            }, [o("UserCard"), r._v(" "), o("div", {
                                staticClass: "scrollbar-wrapper"
                            }, r._l(r.routes, (function(t) {
                                return o("div", {
                                    key: t.path,
                                    staticClass: "menu",
                                    class: {
                                        cur: t.path === r.activeMenu
                                    },
                                    on: {
                                        click: function(o) {
                                            return r.jump(t)
                                        }
                                    }
                                }, [o("span", {
                                    staticStyle: {
                                        "z-index": "2",
                                        display: "flex",
                                        "align-items": "center"
                                    }
                                }, [o("i", {
                                    staticClass: "iconfont",
                                    class: t.icon
                                }), o("span", {
                                    staticStyle: {
                                        flex: "1"
                                    }
                                }, [r._v(r._s(r.$t(t.i18n_key)))])])])
                            })), 0), r._v(" "), o("div", {
                                staticClass: "logout-wrapper"
                            }, [o("img", {
                                staticClass: "logout",
                                attrs: {
                                    src: t(984)
                                },
                                on: {
                                    click: r.logout
                                }
                            })])], 1)
                        }), [], !1, null, "65c5c5c5", null).exports
                    },
                    mounted: function() {
                        this.$store.dispatch("user/findFreeChats", this.$api), this.$store.dispatch("user/findMaxFileSize", this.$api), this.$store.dispatch("user/findFreeFileCount", this.$api), document.getElementsByTagName("body")[0].style.fontFamily = "not specified"
                    }
                }),
                cr = (t(990), Object(F.a)(ir, (function() {
                    var r = this._self._c;
                    return r("div", {
                        staticClass: "app-main"
                    }, [r("NavigationBar"), this._v(" "), r("div", {
                        staticClass: "main-container"
                    }, [r("Sidebar"), r("div", {
                        staticClass: "app-page"
                    }, [r("nuxt")], 1)], 1)], 1)
                }), [], !1, null, "391862a5", null).exports),
                lr = [function() {
                    var r = this,
                        o = r._self._c;
                    return o("div", {
                        staticClass: "flex items-center md:gap-x-12"
                    }, [o("a", {
                        staticClass: "logo-a",
                        attrs: {
                            href: "/"
                        }
                    }, [o("img", {
                        staticClass: "logo",
                        staticStyle: {
                            "border-radius": "50%"
                        },
                        attrs: {
                            src: t(317),
                            alt: ""
                        }
                    }), r._v(" "), o("span", {
                        staticClass: "title text-slate-900"
                    }, [r._v("ChatHub")])]), r._v(" "), o("div", {
                        staticClass: "hidden md:flex md:gap-x-6"
                    }, [o("a", {
                        staticClass: "inline-block rounded-lg py-1 px-2 text-sm hover:bg-slate-100 hover:text-slate-900",
                        staticStyle: {
                            color: "rgb(51 65 85)"
                        },
                        attrs: {
                            href: "/payment",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [r._v("Pricing")])])])
                }],
                nr = (t(104), t(40));

            function dr(object, r) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(object);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(object, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }

            function gr(r) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? dr(Object(source), !0).forEach((function(o) {
                        Object(l.a)(r, o, source[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(source)) : dr(Object(source)).forEach((function(o) {
                        Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(source, o))
                    }))
                }
                return r
            }
            var pr = {
                    data: function() {
                        return {
                            qrCode: "",
                            countdown: 0,
                            checkLoginNum: 0,
                            validDateTimer: null,
                            checkLoginTimer: null,
                            showQrcodeMask: !1,
                            locale: "zh"
                        }
                    },
                    head: function() {
                        return {
                            script: [{
                                src: "https://accounts.google.com/gsi/client?hl=" + this.$i18n.locale || !1,
                                async: !0
                            }]
                        }
                    },
                    computed: gr(gr({}, Object(d.c)("user", ["userInfo", "curKey"])), Object(d.c)("header", ["loginDialog", "loginSuccessRedirectPath"])),
                    mounted: function() {
                        var r = this;
                        this.locale = this.$i18n.locale || "zh", this.isLogin().catch((function() {
                            r.clearUserInfo()
                        })), window.handleCredentialResponse = function(o) {
                            r.googleLogin(o.credential)
                        }
                    },
                    methods: gr(gr(gr({}, Object(d.b)("user", ["setUserInfo", "rmUserInfo", "setCurKey", "rmCurKey"])), Object(d.b)("header", ["toggleLoginDialog", "setLoginSuccessRedirectPath"])), {}, {
                        isLogin: function() {
                            var r = this;
                            return new Promise((function(o, t) {
                                if (r.userInfo && r.userInfo.userId && r.curKey) {
                                    var e = "";
                                    e = r.userInfo.isGoogle ? "/v1/ai-chat/email/isLogin" : "/v1/ai-chat/mp/isLogin", r.$api.$get(e, {
                                        params: {
                                            userId: r.userInfo.userId,
                                            key: r.curKey
                                        }
                                    }).then((function() {
                                        o()
                                    })).catch((function() {
                                        t()
                                    }))
                                } else console.log(r.userInfo), t()
                            }))
                        },
                        clearUserInfo: function() {
                            this.rmCurKey(), this.rmUserInfo()
                        },
                        getLoginQrCode: function() {
                            var r = this;
                            this.showQrcodeMask = !1, this.curKey || this.setCurKey(Object(nr.b)(18)), this.$api.$get("/v1/ai-chat/mp/getLoginQrCode", {
                                params: {
                                    key: this.curKey
                                }
                            }).then((function(data) {
                                r.qrCode = data.data, r.countdown = 59, clearInterval(r.validDateTimer), r.validDateTimer = setInterval((function() {
                                    0 === r.countdown ? (clearInterval(r.validDateTimer), r.showQrcodeMask = !0) : r.countdown--
                                }), 1e3), r.checkLoginNum = 0, r.checkLogin()
                            }))
                        },
                        googleLogin: function(r) {
                            var o = this;
                            return new Promise((function(t, e) {
                                if (r) {
                                    o.curKey || o.setCurKey(Object(nr.b)(18));
                                    var c = o.$message({
                                        message: o.$t("chathub.home.logining"),
                                        duration: 0
                                    });
                                    o.$api.$post("/v1/ai-chat/email/googleLogin", {
                                        credential: r,
                                        key: o.curKey,
                                        noProxy: !0
                                    }).then((function(data) {
                                        c.close(), o.$message.success(o.$t("chathub.home.loginSucceeded")), data.data.isGoogle = !0, o.loginCB(data.data), t(data.data), "1" === data.headers.user_first_register ? (gtag("event", "sign_up", {
                                            method: "googleLogin"
                                        }), gtag("event", "conversion", {
                                            send_to: "AW-11300378071/TlT5CILgkeUYENeruIwq"
                                        })) : gtag("event", "login", {
                                            method: "googleLogin"
                                        })
                                    })).catch((function() {
                                        c.close(), e()
                                    }))
                                }
                            }))
                        },
                        checkLogin: function() {
                            var r = this;
                            this.checkLoginNum++, this.$api.$get("/v1/ai-chat/mp/checkLogin", {
                                params: {
                                    key: this.curKey
                                }
                            }).then((function(data) {
                                r.$message.success(r.$t("chathub.home.loginSucceeded")), r.loginCB(data.data), "1" === data.headers.user_first_register ? gtag("event", "sign_up", {
                                    method: "checkLogin"
                                }) : gtag("event", "login", {
                                    method: "checkLogin"
                                })
                            })).catch((function(o) {
                                999 === o.code && (clearTimeout(r.checkLoginTimer), r.checkLoginTimer = setTimeout((function() {
                                    60 !== r.checkLoginNum && r.loginDialog && !r.showQrcodeMask && r.checkLogin()
                                }), 1e3))
                            }))
                        },
                        loginCB: function(r) {
                            this.setUserInfo(r), this.setCurKey(this.curKey), this.toggleLoginDialog(!1), this.$emit("loginSuccess"), this.loginSuccessRedirectPath && this.$router.push(this.loginSuccessRedirectPath)
                        },
                        closeLogin: function() {
                            this.toggleLoginDialog(!1)
                        },
                        openLoginDialog: function() {
                            this.toggleLoginDialog(!0)
                        },
                        handleGoogleClick: function() {
                            console.log("唤起谷歌登录")
                        }
                    }),
                    watch: {
                        loginDialog: function(r) {
                            clearInterval(this.validDateTimer), clearTimeout(this.checkLoginTimer);
                            var o = this.$options.data(),
                                t = o.qrCode,
                                e = o.countdown,
                                c = o.checkLoginNum,
                                l = o.showQrcodeMask;
                            this.qrCode = t, this.countdown = e, this.checkLoginNum = c, this.showQrcodeMask = l, r ? this.getLoginQrCode() : this.setLoginSuccessRedirectPath(null)
                        }
                    }
                },
                sr = (t(993), Object(F.a)(pr, (function() {
                    var r = this,
                        o = r._self._c;
                    return o("div", [o("header", {
                        staticClass: "py-10"
                    }, [o("div", {
                        staticClass: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                    }, [o("nav", {
                        staticClass: "relative z-50 flex justify-between"
                    }, [r._m(0), r._v(" "), o("div", {
                        staticClass: "flex items-center gap-x-5 md:gap-x-8"
                    }, [o("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: r.userInfo && r.userInfo.userId,
                            expression: "userInfo && userInfo.userId"
                        }],
                        staticClass: "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold"
                    }, [r._v("\n            " + r._s("P" + (87654321 - parseInt(r.userInfo.userId))) + "\n          ")]), r._v(" "), o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !(r.userInfo && r.userInfo.userId),
                            expression: "!(userInfo && userInfo.userId)"
                        }]
                    }, ["zh" === r.locale ? o("a", {
                        staticClass: "group cursor-pointer inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
                        on: {
                            click: r.openLoginDialog
                        }
                    }, [r._v("\n              " + r._s(r.$t("chathub.home.login")) + "\n            ")]) : o("div", [o("div", {
                        attrs: {
                            id: "g_id_onload",
                            "data-client_id": "50702588751-k1enkgpl3u1lijmobonbln6api9bej1i.apps.googleusercontent.com",
                            "data-callback": "handleCredentialResponse",
                            "data-auto_prompt": "false"
                        }
                    }), r._v(" "), o("div", {
                        staticClass: "g_id_signin",
                        attrs: {
                            "data-type": "standard",
                            "data-size": "large",
                            "data-theme": "filled_blue",
                            "data-text": "sign_in_with",
                            "data-shape": "rectangular",
                            "data-logo_alignment": "left"
                        },
                        on: {
                            click: r.handleGoogleClick
                        }
                    })])])])])])]), r._v(" "), o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: r.loginDialog,
                            expression: "loginDialog"
                        }],
                        staticClass: "dialog"
                    }, [o("div", {
                        staticClass: "box"
                    }, [o("div", {
                        staticClass: "content animate__animated animate__backInDown sm:login-dialog"
                    }, [o("img", {
                        staticClass: "close-btn",
                        attrs: {
                            src: t(992),
                            title: "关闭"
                        },
                        on: {
                            click: r.closeLogin
                        }
                    }), r._v(" "), o("div", {
                        staticClass: "expose"
                    }, [o("p", {
                        staticClass: "title_1"
                    }, [r._v(r._s(r.$t("chathub.home.wechat_login")))]), r._v(" "), o("p", {
                        staticClass: "title_2"
                    }, [r._v(r._s(r.$t("chathub.home.wechat_desc")))]), r._v(" "), o("div", {
                        staticClass: "qrcode-wrap"
                    }, [o("div", {
                        staticStyle: {
                            width: "176px",
                            height: "176px",
                            position: "relative"
                        }
                    }, [o("img", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: r.qrCode,
                            expression: "qrCode"
                        }],
                        staticClass: "qrcode-img",
                        attrs: {
                            src: r.qrCode
                        }
                    }), r._v(" "), o("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: r.showQrcodeMask,
                            expression: "showQrcodeMask"
                        }],
                        staticClass: "qrcode-mask",
                        on: {
                            click: r.getLoginQrCode
                        }
                    }, [o("span", {
                        staticClass: "refresh"
                    }, [r._v("\n                  " + r._s(r.$t("chathub.home.wechat_invalid")) + "\n                  "), o("br"), r._v(r._s(r.$t("chathub.home.wechat_refresh")) + "\n                ")])])]), r._v(" "), o("div", [o("span", {
                        staticClass: "anticon"
                    }, [o("svg", {
                        staticClass: "icon",
                        attrs: {
                            t: "1669863099595",
                            viewBox: "0 0 1024 1024",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "p-id": "2726",
                            width: "16",
                            height: "16"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z",
                            "p-id": "2727",
                            fill: "#00be82"
                        }
                    })])]), r._v("\n              " + r._s(r.$t("chathub.home.wechat_scan")) + "\n            ")])]), r._v(" "), "zh" === r.locale ? o("div", {
                        staticClass: "methods"
                    }, [o("div", {
                        attrs: {
                            id: "g_id_onload",
                            "data-client_id": "50702588751-k1enkgpl3u1lijmobonbln6api9bej1i.apps.googleusercontent.com",
                            "data-callback": "handleCredentialResponse",
                            "data-auto_prompt": "false"
                        }
                    }), r._v(" "), o("div", {
                        staticClass: "g_id_signin",
                        staticStyle: {
                            "margin-top": "10px"
                        },
                        attrs: {
                            "data-type": "standard",
                            "data-size": "large",
                            "data-theme": "filled_blue",
                            "data-text": "sign_in_with",
                            "data-shape": "rectangular",
                            "data-logo_alignment": "left"
                        },
                        on: {
                            click: r.handleGoogleClick
                        }
                    })]) : r._e(), r._v(" "), o("div", {
                        staticClass: "agree"
                    }, [r._v("\n            " + r._s(r.$t("chathub.home.login_title")) + "\n            "), o("a", [r._v(r._s(r.$t("chathub.home.user_agreement")))]), r._v(" "), o("a", [r._v(r._s(r.$t("chathub.home.user_privacy")))])])])])])])])
                }), lr, !1, null, "5a6a2b86", null).exports),
                wr = [function() {
                    var r = this._self._c;
                    return r("a", {
                        staticStyle: {
                            display: "inline-block"
                        },
                        attrs: {
                            href: "https://twitter.com/chathub_dev",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [r("img", {
                        staticStyle: {
                            "vertical-align": "middle",
                            width: "25px",
                            height: "25px"
                        },
                        attrs: {
                            src: t(995)
                        }
                    })])
                }, function() {
                    var r = this._self._c;
                    return r("a", {
                        staticStyle: {
                            display: "inline-block"
                        },
                        attrs: {
                            href: "https://t.me/chathub_dev",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [r("img", {
                        staticStyle: {
                            "vertical-align": "middle",
                            width: "25px",
                            height: "25px"
                        },
                        attrs: {
                            src: t(323)
                        }
                    })])
                }, function() {
                    var r = this._self._c;
                    return r("a", {
                        staticStyle: {
                            display: "inline-block"
                        },
                        attrs: {
                            href: "https://discord.gg/SgKshsnyX5",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [r("img", {
                        staticStyle: {
                            "vertical-align": "middle",
                            width: "25px",
                            height: "25px"
                        },
                        attrs: {
                            src: t(996)
                        }
                    })])
                }, function() {
                    var r = this,
                        o = r._self._c;
                    return o("p", {
                        staticClass: "mt-6 text-sm text-slate-500 sm:mt-0"
                    }, [r._v("\n        Copyright @ chathub.dev All rights reserved."), o("br"), r._v("\n        Contact:up2date.3@gmail. com\n        ")])
                }],
                fr = {
                    data: function() {
                        return {
                            locale: this.$i18n.locale || "zh"
                        }
                    }
                },
                mr = (t(997), {
                    components: {
                        Header: sr,
                        Footer: Object(F.a)(fr, (function() {
                            var r = this,
                                o = r._self._c;
                            return o("footer", {
                                staticClass: "bg-slate-50"
                            }, [o("div", {
                                staticClass: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center",
                                staticStyle: {
                                    "padding-top": "1.5rem"
                                }
                            }, [o("div", {
                                staticClass: "wrap mt-6"
                            }, [o("nuxt-link", {
                                attrs: {
                                    to: r.localePath("/privacy")
                                }
                            }, [r._v(r._s(r.$t("chathub.home.user_privacy")))])], 1)]), r._v(" "), o("div", {
                                staticClass: "mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8"
                            }, [o("div", {
                                staticClass: "flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between"
                            }, ["zh" === r.locale ? o("div", {
                                staticClass: "flex gap-x-6"
                            }, [o("span", {
                                staticStyle: {
                                    display: "inline-block"
                                }
                            }, [o("el-tooltip", {
                                attrs: {
                                    content: "Bottom center",
                                    placement: "bottom",
                                    effect: "light"
                                }
                            }, [o("div", {
                                attrs: {
                                    slot: "content"
                                },
                                slot: "content"
                            }, [o("img", {
                                staticStyle: {
                                    width: "100px",
                                    height: "100px"
                                },
                                attrs: {
                                    src: t(319)
                                }
                            })]), r._v(" "), o("img", {
                                staticStyle: {
                                    "vertical-align": "middle",
                                    width: "25px",
                                    height: "25px"
                                },
                                attrs: {
                                    src: t(320)
                                }
                            })])], 1), r._v(" "), o("span", {
                                staticStyle: {
                                    display: "inline-block"
                                }
                            }, [o("el-tooltip", {
                                attrs: {
                                    content: "Bottom center",
                                    placement: "bottom",
                                    effect: "light"
                                }
                            }, [o("div", {
                                attrs: {
                                    slot: "content"
                                },
                                slot: "content"
                            }, [o("img", {
                                staticStyle: {
                                    width: "100px",
                                    height: "100px"
                                },
                                attrs: {
                                    src: t(321)
                                }
                            })]), r._v(" "), o("img", {
                                staticStyle: {
                                    "vertical-align": "middle",
                                    width: "25px",
                                    height: "25px"
                                },
                                attrs: {
                                    src: t(322)
                                }
                            })])], 1)]) : o("div", {
                                staticClass: "flex gap-x-6"
                            }, [r._m(0), r._v(" "), r._m(1), r._v(" "), r._m(2)]), r._v(" "), r._m(3)])])])
                        }), wr, !1, null, "1804f4ef", null).exports
                    },
                    scrollToTop: !0,
                    mounted: function() {
                        document.getElementsByTagName("body")[0].style.fontFamily = '"LXGW WenKai", sans-serif'
                    }
                }),
                ur = (t(999), Object(F.a)(mr, (function() {
                    var r = this,
                        o = r._self._c;
                    return o("div", {
                        staticClass: "app-main"
                    }, [o("Header"), r._v(" "), o("nuxt"), r._v(" "), o("Footer")], 1)
                }), [], !1, null, "25448815", null).exports),
                vr = Object(F.a)({}, (function() {
                    return (0, this._self._c)("Nuxt")
                }), [], !1, null, null, null).exports;

            function yr(r, o) {
                var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                if (!t) {
                    if (Array.isArray(r) || (t = function(r, o) {
                            if (!r) return;
                            if ("string" == typeof r) return xr(r, o);
                            var t = Object.prototype.toString.call(r).slice(8, -1);
                            "Object" === t && r.constructor && (t = r.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(r);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return xr(r, o)
                        }(r)) || o && r && "number" == typeof r.length) {
                        t && (r = t);
                        var i = 0,
                            e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return i >= r.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: r[i++]
                                }
                            },
                            e: function(r) {
                                throw r
                            },
                            f: e
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, l = !0,
                    n = !1;
                return {
                    s: function() {
                        t = t.call(r)
                    },
                    n: function() {
                        var r = t.next();
                        return l = r.done, r
                    },
                    e: function(r) {
                        n = !0, c = r
                    },
                    f: function() {
                        try {
                            l || null == t.return || t.return()
                        } finally {
                            if (n) throw c
                        }
                    }
                }
            }

            function xr(r, o) {
                (null == o || o > r.length) && (o = r.length);
                for (var i = 0, t = new Array(o); i < o; i++) t[i] = r[i];
                return t
            }
            var kr = {
                    _admin: Object(k.s)(cr),
                    _traditional: Object(k.s)(ur),
                    _default: Object(k.s)(vr)
                },
                _r = {
                    render: function(r, o) {
                        var t = r(this.layout || "nuxt"),
                            e = r("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [t]),
                            c = r("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function(r) {
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [e]);
                        return r("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [c])
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function() {
                        n.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function() {
                        this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline
                        },
                        isFetching: function() {
                            return this.nbFetching > 0
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function() {
                            var r = this;
                            return Object(c.a)(regeneratorRuntime.mark((function o() {
                                var t, e;
                                return regeneratorRuntime.wrap((function(o) {
                                    for (;;) switch (o.prev = o.next) {
                                        case 0:
                                            if ((t = Object(k.h)(r.$route)).length) {
                                                o.next = 3;
                                                break
                                            }
                                            return o.abrupt("return");
                                        case 3:
                                            return e = t.map(function() {
                                                var o = Object(c.a)(regeneratorRuntime.mark((function o(t) {
                                                    var p, e, c, component;
                                                    return regeneratorRuntime.wrap((function(o) {
                                                        for (;;) switch (o.prev = o.next) {
                                                            case 0:
                                                                return p = [], t.$options.fetch && t.$options.fetch.length && p.push(Object(k.q)(t.$options.fetch, r.context)), t.$options.asyncData && p.push(Object(k.q)(t.$options.asyncData, r.context).then((function(r) {
                                                                    for (var o in r) n.default.set(t.$data, o, r[o])
                                                                }))), o.next = 5, Promise.all(p);
                                                            case 5:
                                                                p = [], t.$fetch && p.push(t.$fetch()), e = yr(Object(k.e)(t.$vnode.componentInstance));
                                                                try {
                                                                    for (e.s(); !(c = e.n()).done;) component = c.value, p.push(component.$fetch())
                                                                } catch (r) {
                                                                    e.e(r)
                                                                } finally {
                                                                    e.f()
                                                                }
                                                                return o.abrupt("return", Promise.all(p));
                                                            case 10:
                                                            case "end":
                                                                return o.stop()
                                                        }
                                                    }), o)
                                                })));
                                                return function(r) {
                                                    return o.apply(this, arguments)
                                                }
                                            }()), o.prev = 4, o.next = 7, Promise.all(e);
                                        case 7:
                                            o.next = 13;
                                            break;
                                        case 9:
                                            o.prev = 9, o.t0 = o.catch(4), Object(k.k)(o.t0), r.error(o.t0);
                                        case 13:
                                        case "end":
                                            return o.stop()
                                    }
                                }), o, null, [
                                    [4, 9]
                                ])
                            })))()
                        },
                        errorChanged: function() {
                            if (this.nuxt.err) {
                                var r = (U.options || U).layout;
                                "function" == typeof r && (r = r(this.context)), this.setLayout(r)
                            }
                        },
                        setLayout: function(r) {
                            return r && kr["_" + r] || (r = "default"), this.layoutName = r, this.layout = kr["_" + r], this.layout
                        },
                        loadLayout: function(r) {
                            return r && kr["_" + r] || (r = "default"), Promise.resolve(kr["_" + r])
                        }
                    }
                };
            t(68);
            n.default.use(d.a);
            var zr = ["state", "getters", "actions", "mutations"],
                jr = {};
            jr.modules = jr.modules || {}, Sr(t(1001), "header.js"), Sr(t(1002), "user.js");
            var Cr = jr instanceof Function ? jr : function() {
                return new d.a.Store(Object.assign({
                    strict: !1
                }, jr))
            };

            function Pr(r, o) {
                if (r.state && "function" != typeof r.state) {
                    console.warn("'state' should be a method that returns an object in ".concat(o));
                    var t = Object.assign({}, r.state);
                    r = Object.assign({}, r, {
                        state: function() {
                            return t
                        }
                    })
                }
                return r
            }

            function Sr(r, o) {
                r = r.default || r;
                var t = o.replace(/\.(js|mjs)$/, "").split("/"),
                    e = t[t.length - 1],
                    c = "store/".concat(o);
                if (r = "state" === e ? function(r, o) {
                        if ("function" != typeof r) {
                            console.warn("".concat(o, " should export a method that returns an object"));
                            var t = Object.assign({}, r);
                            return function() {
                                return t
                            }
                        }
                        return Pr(r, o)
                    }(r, c) : Pr(r, c), zr.includes(e)) {
                    var l = e;
                    Tr(Or(jr, t, {
                        isProperty: !0
                    }), r, l)
                } else {
                    "index" === e && (t.pop(), e = t[t.length - 1]);
                    for (var n = Or(jr, t), d = 0, w = zr; d < w.length; d++) {
                        var f = w[d];
                        Tr(n, r[f], f)
                    }!1 === r.namespaced && delete n.namespaced
                }
            }

            function Or(r, o) {
                var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).isProperty,
                    e = void 0 !== t && t;
                if (!o.length || e && 1 === o.length) return r;
                var c = o.shift();
                return r.modules[c] = r.modules[c] || {}, r.modules[c].namespaced = !0, r.modules[c].modules = r.modules[c].modules || {}, Or(r.modules[c], o, {
                    isProperty: e
                })
            }

            function Tr(r, o, t) {
                o && ("state" === t ? r.state = o || r.state : r[t] = Object.assign({}, r[t], o))
            }
            var Ar = t(123),
                Nr = t.n(Ar),
                Er = t(313);

            function Ir(object, r) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(object);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(object, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }

            function Rr(r) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Ir(Object(source), !0).forEach((function(o) {
                        Object(l.a)(r, o, source[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(source)) : Ir(Object(source)).forEach((function(o) {
                        Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(source, o))
                    }))
                }
                return r
            }

            function Lr(r, o) {
                var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                if (!t) {
                    if (Array.isArray(r) || (t = function(r, o) {
                            if (!r) return;
                            if ("string" == typeof r) return Dr(r, o);
                            var t = Object.prototype.toString.call(r).slice(8, -1);
                            "Object" === t && r.constructor && (t = r.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(r);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Dr(r, o)
                        }(r)) || o && r && "number" == typeof r.length) {
                        t && (r = t);
                        var i = 0,
                            e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return i >= r.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: r[i++]
                                }
                            },
                            e: function(r) {
                                throw r
                            },
                            f: e
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, l = !0,
                    n = !1;
                return {
                    s: function() {
                        t = t.call(r)
                    },
                    n: function() {
                        var r = t.next();
                        return l = r.done, r
                    },
                    e: function(r) {
                        n = !0, c = r
                    },
                    f: function() {
                        try {
                            l || null == t.return || t.return()
                        } finally {
                            if (n) throw c
                        }
                    }
                }
            }

            function Dr(r, o) {
                (null == o || o > r.length) && (o = r.length);
                for (var i = 0, t = new Array(o); i < o; i++) t[i] = r[i];
                return t
            }
            for (var Mr = {
                    setBaseURL: function(r) {
                        this.defaults.baseURL = r
                    },
                    setHeader: function(r, o) {
                        var t, e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            c = Lr(Array.isArray(e) ? e : [e]);
                        try {
                            for (c.s(); !(t = c.n()).done;) {
                                var l = t.value;
                                o ? this.defaults.headers[l][r] = o : delete this.defaults.headers[l][r]
                            }
                        } catch (r) {
                            c.e(r)
                        } finally {
                            c.f()
                        }
                    },
                    setToken: function(r, o) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            e = r ? (o ? o + " " : "") + r : null;
                        this.setHeader("Authorization", e, t)
                    },
                    onRequest: function(r) {
                        this.interceptors.request.use((function(o) {
                            return r(o) || o
                        }))
                    },
                    onResponse: function(r) {
                        this.interceptors.response.use((function(o) {
                            return r(o) || o
                        }))
                    },
                    onRequestError: function(r) {
                        this.interceptors.request.use(void 0, (function(o) {
                            return r(o) || Promise.reject(o)
                        }))
                    },
                    onResponseError: function(r) {
                        this.interceptors.response.use(void 0, (function(o) {
                            return r(o) || Promise.reject(o)
                        }))
                    },
                    onError: function(r) {
                        this.onRequestError(r), this.onResponseError(r)
                    },
                    create: function(r) {
                        return Ur(Object(Er.a)(r, this.defaults))
                    }
                }, Gr = function() {
                    var r = Fr[$r];
                    Mr["$" + r] = function() {
                        return this[r].apply(this, arguments).then((function(r) {
                            return r && r.data
                        }))
                    }
                }, $r = 0, Fr = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; $r < Fr.length; $r++) Gr();
            var Ur = function(r) {
                    var o = Nr.a.create(r);
                    return o.CancelToken = Nr.a.CancelToken, o.isCancel = Nr.a.isCancel,
                        function(r) {
                            for (var o in Mr) r[o] = Mr[o].bind(r)
                        }(o), o.onRequest((function(r) {
                            r.headers = Rr(Rr({}, o.defaults.headers.common), r.headers)
                        })), Br(o), o
                },
                Br = function(r) {
                    var o = {
                            finish: function() {},
                            start: function() {},
                            fail: function() {},
                            set: function() {}
                        },
                        t = function() {
                            var r = "undefined" != typeof window && window.$nuxt;
                            return r && r.$loading && r.$loading.set ? r.$loading : o
                        },
                        e = 0;
                    r.onRequest((function(r) {
                        r && !1 === r.progress || e++
                    })), r.onResponse((function(r) {
                        r && r.config && !1 === r.config.progress || --e <= 0 && (e = 0, t().finish())
                    })), r.onError((function(r) {
                        r && r.config && !1 === r.config.progress || (e--, Nr.a.isCancel(r) ? e <= 0 && (e = 0, t().finish()) : (t().fail(), t().finish()))
                    }));
                    var c = function(r) {
                        if (e && r.total) {
                            var progress = 100 * r.loaded / (r.total * e);
                            t().set(Math.min(100, progress))
                        }
                    };
                    r.defaults.onUploadProgress = c, r.defaults.onDownloadProgress = c
                },
                Yr = function(r, o) {
                    var t = r.$config && r.$config.axios || {},
                        e = t.browserBaseURL || t.browserBaseUrl || t.baseURL || t.baseUrl || "http://localhost:8080/";
                    var c = Ur({
                        baseURL: e,
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            delete: {},
                            get: {},
                            head: {},
                            post: {},
                            put: {},
                            patch: {}
                        }
                    });
                    r.$axios = c, o("axios", c)
                },
                qr = t(16),
                Xr = (t(191), t(186), t(78), t(71)),
                Kr = {
                    COMPONENT_OPTIONS_KEY: "nuxtI18n",
                    STRATEGIES: {
                        PREFIX: "prefix",
                        PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
                        PREFIX_AND_DEFAULT: "prefix_and_default",
                        NO_PREFIX: "no_prefix"
                    },
                    REDIRECT_ON_OPTIONS: {
                        ALL: "all",
                        ROOT: "root",
                        NO_PREFIX: "no prefix"
                    }
                },
                Wr = {
                    isUniversalMode: !0,
                    trailingSlash: void 0
                },
                Hr = {
                    vueI18n: {
                        locale: "zh",
                        fallbackLocale: "en",
                        messages: {
                            en: {
                                chathub: {
                                    home: {
                                        enter: "Enter the backend",
                                        login: "Log in",
                                        desc1: "Chat with",
                                        desc2: "Integrate your chatbot with ChatGPT",
                                        desc3: "Upload your own document to instantly create a ChatGPT-powered chatbot",
                                        desc4: "Supported chat channels",
                                        discord: "Discord",
                                        iframe: "Iframe",
                                        telegram: "Telegram",
                                        webpage: "Web",
                                        dingtalk: "DingTalk",
                                        feishu: "Feishu",
                                        wecom: "WeChat Work",
                                        wechat_login: "WeChat scan code login",
                                        wechat_desc: "Unregistered WeChat accounts will automatically create a ChatHub account",
                                        wechat_invalid: "QR code is invalid",
                                        wechat_refresh: "Please click to refresh",
                                        wechat_scan: "WeChat scan code",
                                        login_title: "Registering and logging in represents agreement to",
                                        user_agreement: "User Agreement",
                                        user_privacy: "Privacy Policy",
                                        btn: "Build Your Chatbot",
                                        pleaseLogin: "Please log in",
                                        logining: "Logging in...",
                                        loginSucceeded: "Login succeeded"
                                    },
                                    payment: {
                                        subscribe: "Subscribe Now",
                                        monthly: "Monthly",
                                        yearly: "Yearly",
                                        tip: {
                                            no1: "Upload up to {Number} documents maximum",
                                            no2: "Maximum document upload size: {Number}MB",
                                            no3: "Total of {Number} interactions with the bot",
                                            no4: "Upload up to {Number} documents per month maximum",
                                            no5: "Upload up to {Number} documents per year maximum",
                                            no6: "{Number} interactions/day with the bot"
                                        },
                                        level: {
                                            no1: "Free Member",
                                            no2: "Basic Member",
                                            no3: "Advanced Member",
                                            no4: "Premium Member"
                                        }
                                    },
                                    navbar: {
                                        files: "Document management",
                                        steps: "Create robot",
                                        channels: "Robot channel management"
                                    },
                                    hamburger: {
                                        update: "Purchase membership",
                                        document: "Documentation"
                                    },
                                    userCard: {
                                        tip1: "Today you can upload {Number} documents",
                                        tips2: "Single document supports up to {Number} MB",
                                        tips3: "{Number} interactions remaining today",
                                        update: "Upgrade membership"
                                    },
                                    openai: {
                                        channel: {
                                            name: "Robot name"
                                        },
                                        channels: {
                                            delete: "Delete",
                                            edit: "Edit",
                                            cancel: "Cancel",
                                            save: "Save",
                                            viewUrl: "View link"
                                        },
                                        chat: {
                                            hello: "Hello, I have connected to the ChatGPT 3.5 API, you can now start chatting with ChatGPT! 😊",
                                            ask: "Ask any questions...",
                                            errorMsg: "An unknown error occurred during the conversation. Please resend or refresh the page."
                                        },
                                        files: {
                                            name: "Document name",
                                            robot: "Robot name",
                                            type: "Robot type",
                                            documents: "Related documents",
                                            training: "Document training"
                                        },
                                        robot: {
                                            engine: "AI engine",
                                            system: "Platform provides chatgpt",
                                            custom: "Private chatgpt",
                                            has: "(filled in)",
                                            edit: "Modify",
                                            input: "Fill in the chatgpt key",
                                            error_file: "Please upload the file",
                                            error_key: "Please fill in the key"
                                        },
                                        steps: {
                                            step1: "Select access source",
                                            step2: "Preview chat effect",
                                            step3: "Select chat channel",
                                            step4: "Chat configuration completed",
                                            web: "Web page",
                                            web2: "Website webpage",
                                            wecom: "Enterprise WeChat",
                                            dingtalk: "DingTalk",
                                            lark: "Feishu",
                                            back: "Return to previous page",
                                            upload: "Submit",
                                            bind: "Go to bind chat channel",
                                            submit: "Submit",
                                            ok: "Okay",
                                            copysuccess: "Copy successfully",
                                            copyfail: "Copy failed",
                                            success: "Robot created successfully",
                                            share: "Use the link below to share your robot",
                                            share1: "Web Robot Link",
                                            share2: "Add robot iframe to your website's HTML code",
                                            share3: "Add chat robot button to bottom right of website",
                                            select: "Please click the channel above to configure",
                                            webTitle: "Website Title",
                                            telegramStep: {
                                                title: "Telegram Operation Process",
                                                step1: "1. First create a telegram bot using {BotFather}",
                                                step2: "2. Then enter the command /newbot to start creating and give your bot a name",
                                                step3: "3. After successful creation, copy the bot's token to the top of this page."
                                            },
                                            dingtalkStep: {
                                                name: "DingTalk Open Platform",
                                                title: "DingTalk Open Platform Operation Process",
                                                step1: "In {Name}, application development --\x3e internal enterprise development --\x3e designated robot --\x3e development management",
                                                step2: "Server IP Address",
                                                step3: "Message Receiving Address",
                                                step4: "Scan QR Code to Join Chat Group on DingTalk"
                                            },
                                            larkStep: {
                                                name: "Feishu Development Platform",
                                                title: "Feishu Development Platform Operation Process",
                                                step1: "On the {Name} page under 'Request Address Configuration', fill in the address",
                                                step2: "【Do Not】Activate Encrypt Key encryption",
                                                step3: "Scan QR Code to Join Chat Group on Feishu"
                                            },
                                            copy: "Copy",
                                            mobileTip: "Mobile Page Effect"
                                        },
                                        upload: {
                                            tips2: "Free users can upload files up to {Number}MB",
                                            tips3: "Supports files with pdf, docx, and doc extensions",
                                            tips4: "Access the native ChatGPT 3.5 API",
                                            uploaded: "Uploaded:",
                                            used: "Free upload limit exceeded",
                                            tips: "Free users can only upload up to {Number} documents",
                                            error: "Upload failed"
                                        },
                                        webchat: {
                                            hello: "How can I assist you?",
                                            error: "The shared link is incorrect.",
                                            error2: "The robot configuration is incorrect.",
                                            send: "Send",
                                            typing: "Typing...",
                                            submit: "Press Ctrl + Enter to send.",
                                            subtitle: "ChatGPT customized robot platform."
                                        }
                                    }
                                },
                                table: {
                                    actions: "Actions"
                                },
                                title: "ChatHub | ChatGPT Customer Service Robot Platform",
                                keywords: "ChatHub, ChatGPT, ChatGPT integration with customer service, ChatGPT intelligent customer service, ChatGP customer service Q&A system, ChatGPT integration with DingTalk, ChatGPT integration with Feishu, ChatGPT integration with Enterprise WeChat",
                                description: "ChatGPT customer service robot, ChatGPT customer service system, ChatGPT integration with customer service, ChatGPT integration with DingTalk, ChatGPT integration with Feishu, ChatGPT integration with Enterprise WeChat, ChatGPT web customer service"
                            },
                            zh: {
                                chathub: {
                                    home: {
                                        enter: "进入后台",
                                        login: "登录",
                                        desc1: "chat with",
                                        desc2: "接入你的chatGPT机器人",
                                        desc3: "上传一份你的专属文档，立刻获得一个拥有chatGPT能力的聊天机器人",
                                        desc4: "支持的聊天渠道",
                                        discord: "discord",
                                        iframe: "iframe",
                                        telegram: "telegram",
                                        webpage: "网页",
                                        dingtalk: "钉钉",
                                        feishu: "飞书",
                                        wecom: "企微",
                                        wechat_login: "微信扫码登录",
                                        wechat_desc: "未注册的微信号将自动创建【ChatHub】账号",
                                        wechat_invalid: "二维码失效",
                                        wechat_refresh: "请点击刷新",
                                        wechat_scan: "微信扫码",
                                        login_title: "注册登录即代表同意",
                                        user_agreement: "用户协议",
                                        user_privacy: "隐私政策",
                                        btn: "立即开始创建",
                                        pleaseLogin: "请先登录",
                                        logining: "正在登录...",
                                        loginSucceeded: "登录成功"
                                    },
                                    payment: {
                                        subscribe: "立即购买",
                                        monthly: "按月",
                                        yearly: "按年",
                                        tip: {
                                            no1: "最多上传{Number}次文档",
                                            no2: "文档最大上传{Number}M",
                                            no3: "总共{Number}次和机器人交互",
                                            no4: "每月最多上传{Number}份文档",
                                            no5: "每年最多上传{Number}份文档",
                                            no6: "{Number}次/天和机器人交互"
                                        },
                                        level: {
                                            no1: "免费会员",
                                            no2: "基础会员",
                                            no3: "高级会员",
                                            no4: "超级会员"
                                        }
                                    },
                                    navbar: {
                                        files: "文档管理",
                                        steps: "创建机器人",
                                        channels: "机器人渠道管理"
                                    },
                                    hamburger: {
                                        update: "购买会员",
                                        document: "说明文档"
                                    },
                                    userCard: {
                                        tip1: "今日可以上传{Number}次文档",
                                        tips2: "单个文档最大支持{Number}M",
                                        tips3: "今日剩余{Number}次交互",
                                        update: "升级会员"
                                    },
                                    openai: {
                                        channel: {
                                            name: "机器人名称"
                                        },
                                        channels: {
                                            delete: "删除",
                                            edit: "编辑",
                                            cancel: "取消",
                                            save: "保存",
                                            viewUrl: "查看链接"
                                        },
                                        chat: {
                                            hello: "你好，我已接入chatgpt 3.5版本接口，现在你可以开始和chatgpt对话了!😊",
                                            ask: "问任何问题...",
                                            errorMsg: "会话过程中发生未知错误，请重新发送，或者刷新页面"
                                        },
                                        files: {
                                            name: "文档名称",
                                            robot: "机器人名称",
                                            type: "机器人类型",
                                            documents: "关联文档",
                                            training: "文档训练"
                                        },
                                        robot: {
                                            engine: "AI引擎",
                                            system: "平台提供chatgpt",
                                            custom: "私有chatgpt",
                                            has: "（已填写）",
                                            edit: "修改",
                                            input: "填写chatgpt的key",
                                            error_file: "请上传文件",
                                            error_key: "请填写key"
                                        },
                                        steps: {
                                            step1: "选择接入来源",
                                            step2: "预览聊天效果",
                                            step3: "选择聊天渠道",
                                            step4: "完成聊天配置",
                                            web: "网页",
                                            web2: "网站页面",
                                            wecom: "企业微信",
                                            dingtalk: "钉钉",
                                            lark: "飞书",
                                            back: "返回上一页",
                                            upload: "提交",
                                            bind: "去绑定chat渠道",
                                            submit: "提交",
                                            ok: "好的",
                                            copysuccess: "复制成功",
                                            copyfail: "复制失败",
                                            success: "机器人创建成功",
                                            share: "使用下面这个链接来分享您的机器人",
                                            share1: "网页机器人链接",
                                            share2: "添加机器人iframe到你的网站html代码里",
                                            share3: "添加聊天机器人按钮到网站右下角",
                                            select: "请点击上面的渠道进行配置",
                                            webTitle: "网页标题",
                                            telegramStep: {
                                                title: "telegram操作",
                                                step1: "1.首先使用{BotFather}创建telegram bot",
                                                step2: "2.然后输入命令/newbot开始创建,给bot起一个名称",
                                                step3: "3.创建成功后，复制机器人的token到该页面上方"
                                            },
                                            dingtalkStep: {
                                                name: "钉钉开放平台",
                                                title: "钉钉开放平台操作",
                                                step1: "在{Name}，应用开发--\x3e企业内部开发--\x3e指定的机器人--\x3e开发管理",
                                                step2: "服务器ip地址",
                                                step3: "消息接收地址",
                                                step4: "钉钉扫码进交流群"
                                            },
                                            larkStep: {
                                                name: "飞书开发平台",
                                                title: "飞书开发平台操作",
                                                step1: "在{Name}页面“请求地址配置”，填写地址",
                                                step2: "请【不要】开通Encrypt Key加密",
                                                step3: "飞书扫码进交流群"
                                            },
                                            copy: "复制",
                                            mobileTip: "手机端页面效果"
                                        },
                                        upload: {
                                            tips2: "支持最大{Number}M文件",
                                            tips3: "支持pdf，docx，doc后缀文件",
                                            tips4: "接入原生chatgpt 3.5 api",
                                            uploaded: "已上传：",
                                            used: "上传次数已用完",
                                            tips: "最多可以上传{Number}份文档",
                                            error: "上传失败"
                                        },
                                        webchat: {
                                            hello: "有什么可以帮你的吗",
                                            error: "分享链接不对",
                                            error2: "机器人配置不对",
                                            send: "发送",
                                            typing: "正在输入...",
                                            submit: "Ctrl + Enter 发送",
                                            subtitle: "chatgpt定制机器人平台"
                                        }
                                    }
                                },
                                table: {
                                    actions: "操作"
                                },
                                title: "chatHub | chatGPT客服机器人平台",
                                keywords: "chathub，chatgpt，chatgpt接入客服，chatgpt智能客服，chatgp客服问答系统，chatgpt接入钉钉，chatgpt接入飞书，chatgpt接入企业微信",
                                description: "chatgpt客服机器人，chatgpt客服系统，chatgpt接入客服，chatgpt接入钉钉，chatgpt接入飞书，chatgpt接入企业微信，chatgpt网页客服"
                            },
                            "zh-tw": {
                                chathub: {
                                    home: {
                                        enter: "進入後台",
                                        login: "登錄",
                                        desc1: "chat with",
                                        desc2: "接入你的chatGPT機器人",
                                        desc3: "上傳一份你的專屬文檔，立刻獲得一個擁有chatGPT能力的聊天機器人",
                                        desc4: "支持的聊天渠道",
                                        discord: "discord",
                                        iframe: "iframe",
                                        telegram: "telegram",
                                        webpage: "網頁",
                                        dingtalk: "釘釘",
                                        feishu: "飛書",
                                        wecom: "企微",
                                        wechat_login: "微信掃碼登錄",
                                        wechat_desc: "未註冊的微信帳戶將自動創建【ChatHub】帳戶",
                                        wechat_invalid: "二維碼失效",
                                        wechat_refresh: "請點擊刷新",
                                        wechat_scan: "微信掃碼",
                                        login_title: "註冊登錄即代表同意",
                                        user_agreement: "用戶協議",
                                        user_privacy: "隱私政策",
                                        btn: "立即開始創建",
                                        pleaseLogin: "請先登錄",
                                        logining: "正在登入...",
                                        loginSucceeded: "登入成功"
                                    },
                                    payment: {
                                        subscribe: "立即訂閱",
                                        monthly: "按月",
                                        yearly: "按年",
                                        tip: {
                                            no1: "最多上傳{Number}次文件",
                                            no2: "文件最大上傳{Number}M",
                                            no3: "總共{Number}次和機器人交互",
                                            no4: "每月最多上傳{Number}份文件",
                                            no5: "每年最多上傳{Number}份文件",
                                            no6: "{Number}次/天和機器人交互"
                                        },
                                        level: {
                                            no1: "免費會員",
                                            no2: "基礎會員",
                                            no3: "高級會員",
                                            no4: "超級會員"
                                        }
                                    },
                                    navbar: {
                                        files: "文檔管理",
                                        steps: "創建機器人",
                                        channels: "機器人渠道管理"
                                    },
                                    hamburger: {
                                        update: "購買會員",
                                        document: "說明文件"
                                    },
                                    userCard: {
                                        tip1: "今天可以上傳{Number}次文件",
                                        tips2: "單個文件最大支援{Number}M",
                                        tips3: "今天剩餘{Number}次互動",
                                        update: "升級會員"
                                    },
                                    openai: {
                                        channel: {
                                            name: "機器人名稱"
                                        },
                                        channels: {
                                            delete: "刪除",
                                            edit: "編輯",
                                            cancel: "撤銷",
                                            save: "儲存",
                                            viewUrl: "查看連結"
                                        },
                                        chat: {
                                            hello: "你好，我已接入chatgpt 3.5版本接口，現在你可以開始和chatgpt對話了!😊",
                                            ask: "問任何問題...",
                                            errorMsg: "會話過程中發生未知錯誤，請重新發送，或者刷新頁面"
                                        },
                                        files: {
                                            name: "文檔名稱",
                                            robot: "機器人名稱",
                                            type: "機器人類型",
                                            documents: "關聯文件",
                                            training: "文件訓練"
                                        },
                                        robot: {
                                            engine: "AI引擎",
                                            system: "平臺提供chatgpt",
                                            custom: "私有chatgpt",
                                            has: "（已填寫）",
                                            edit: "修改",
                                            input: "填寫chatgpt的key",
                                            error_file: "請上傳文件",
                                            error_key: "請填寫key"
                                        },
                                        steps: {
                                            step1: "選擇接入來源",
                                            step2: "預覽聊天效果",
                                            step3: "選擇聊天渠道",
                                            step4: "完成聊天配置",
                                            web: "網頁",
                                            web2: "網站頁面",
                                            wecom: "企業微信",
                                            dingtalk: "釘釘",
                                            lark: "飛書",
                                            back: "返回上一頁",
                                            upload: "提交",
                                            bind: "去綁定chat渠道",
                                            submit: "提交",
                                            ok: "好的",
                                            copysuccess: "複製成功",
                                            copyfail: "複製失敗",
                                            success: "機器人建立成功",
                                            share: "使用下面這個連結來分享您的機器人",
                                            share1: "網頁機器人鏈接",
                                            share2: "添加機器人iframe到你的網站html代碼裏",
                                            share3: "添加聊天機器人按鈕到網站右下角",
                                            select: "請點擊上面的渠道進行配置",
                                            webTitle: "網頁標題",
                                            telegramStep: {
                                                title: "telegram操作",
                                                step1: "1.首先使用{BotFather}創建telegram bot",
                                                step2: "2.然後輸入命令/newbot開始創建,給bot起一個名稱",
                                                step3: "3.創建成功後，復製機器人的token到該頁面上方"
                                            },
                                            dingtalkStep: {
                                                name: "釘釘開放平臺",
                                                title: "釘釘開放平臺操作",
                                                step1: "在{Name}，應用開發--\x3e企業內部開發--\x3e指定的機器人--\x3e開發管理",
                                                step2: "服務器ip地址",
                                                step3: "消息接收地址",
                                                step4: "釘釘掃碼進交流群"
                                            },
                                            larkStep: {
                                                name: "飛書開發平臺",
                                                title: "飛書開發平臺操作",
                                                step1: "在{Name}頁面「請求地址配置」，填寫地址",
                                                step2: "請【不要】開通Encrypt Key加密",
                                                step3: "飛書掃碼進交流群"
                                            },
                                            copy: "復製",
                                            mobileTip: "手機端頁面效果"
                                        },
                                        upload: {
                                            tips2: "支持最大{Number}M檔案",
                                            tips3: "支援pdf，docx，doc後綴檔案",
                                            tips4: "接入原生chatgpt 3.5 api",
                                            uploaded: "已上傳：",
                                            used: "上傳次數已用完",
                                            tips: "最多可以上傳{Number}份文件",
                                            error: "上傳失敗"
                                        },
                                        webchat: {
                                            hello: "有什麼可以幫你的嗎",
                                            error: "分享連結不對",
                                            error2: "機器人配置不對",
                                            send: "發送",
                                            typing: "正在輸入...",
                                            submit: "Ctrl + Enter 發送",
                                            subtitle: "chatgpt定製機器人平台"
                                        }
                                    }
                                },
                                table: {
                                    actions: "操作"
                                },
                                title: "chatHub | chatGPT客服機器人平臺",
                                keywords: "chathub、chatgpt、chatgpt接入客服、chatgpt智慧客服、chatgpt客服問答系統、chatgpt接入釘釘、chatgpt接入飛書、chatgpt接入企業微信",
                                description: "chatgpt客服機器人、chatgpt客服系統、chatgpt接入客服、chatgpt接入釘釘、chatgpt接入飛書、chatgpt接入企業微信、chatgpt網頁客服"
                            },
                            "zh-hk": {
                                chathub: {
                                    home: {
                                        enter: "進入後台",
                                        login: "登錄",
                                        desc1: "chat with",
                                        desc2: "接入你的chatGPT機器人",
                                        desc3: "上傳一份你的專屬文檔，立刻獲得一個擁有chatGPT能力的聊天機器人",
                                        desc4: "支持的聊天渠道",
                                        discord: "discord",
                                        iframe: "iframe",
                                        telegram: "telegram",
                                        webpage: "網頁",
                                        dingtalk: "釘釘",
                                        feishu: "飛書",
                                        wecom: "企微",
                                        wechat_login: "微信掃碼登錄",
                                        wechat_desc: "未註冊的微信帳戶將自動創建【ChatHub】帳戶",
                                        wechat_invalid: "二維碼失效",
                                        wechat_refresh: "請點擊刷新",
                                        wechat_scan: "微信掃碼",
                                        login_title: "註冊登錄即代表同意",
                                        user_agreement: "用戶協議",
                                        user_privacy: "隱私政策",
                                        btn: "立即開始創建",
                                        pleaseLogin: "請先登錄",
                                        logining: "正在登入...",
                                        loginSucceeded: "登入成功"
                                    },
                                    payment: {
                                        subscribe: "立即訂閱",
                                        monthly: "按月",
                                        yearly: "按年",
                                        tip: {
                                            no1: "最多上傳{Number}次文件",
                                            no2: "文件最大上傳{Number}M",
                                            no3: "總共{Number}次和機器人交互",
                                            no4: "每月最多上傳{Number}份文件",
                                            no5: "每年最多上傳{Number}份文件",
                                            no6: "{Number}次/天和機器人交互"
                                        },
                                        level: {
                                            no1: "免費會員",
                                            no2: "基礎會員",
                                            no3: "高級會員",
                                            no4: "超級會員"
                                        }
                                    },
                                    navbar: {
                                        files: "文檔管理",
                                        steps: "創建機器人",
                                        channels: "機器人渠道管理"
                                    },
                                    hamburger: {
                                        update: "購買會員",
                                        document: "說明文件"
                                    },
                                    userCard: {
                                        tip1: "今天可以上傳{Number}次文件",
                                        tips2: "單個文件最大支援{Number}M",
                                        tips3: "今天剩餘{Number}次互動",
                                        update: "升級會員"
                                    },
                                    openai: {
                                        channel: {
                                            name: "機器人名稱"
                                        },
                                        channels: {
                                            delete: "刪除",
                                            edit: "編輯",
                                            cancel: "撤銷",
                                            save: "儲存",
                                            viewUrl: "查看連結"
                                        },
                                        chat: {
                                            hello: "你好，我已接入chatgpt 3.5版本接口，現在你可以開始和chatgpt對話了!😊",
                                            ask: "問任何問題...",
                                            errorMsg: "會話過程中發生未知錯誤，請重新發送，或者刷新頁面"
                                        },
                                        files: {
                                            name: "文檔名稱",
                                            robot: "機器人名稱",
                                            type: "機器人類型",
                                            documents: "關聯文件",
                                            training: "文件訓練"
                                        },
                                        robot: {
                                            engine: "AI引擎",
                                            system: "平臺提供chatgpt",
                                            custom: "私有chatgpt",
                                            has: "（已填寫）",
                                            edit: "修改",
                                            input: "填寫chatgpt的key",
                                            error_file: "請上傳文件",
                                            error_key: "請填寫key"
                                        },
                                        steps: {
                                            step1: "選擇接入來源",
                                            step2: "預覽聊天效果",
                                            step3: "選擇聊天渠道",
                                            step4: "完成聊天配置",
                                            web: "網頁",
                                            web2: "網站頁面",
                                            wecom: "企業微信",
                                            dingtalk: "釘釘",
                                            lark: "飛書",
                                            back: "返回上一頁",
                                            upload: "提交",
                                            bind: "去綁定chat渠道",
                                            submit: "提交",
                                            ok: "好的",
                                            copysuccess: "複製成功",
                                            copyfail: "複製失敗",
                                            success: "機器人建立成功",
                                            share: "使用下面這個連結來分享您的機器人",
                                            share1: "網頁機器人鏈接",
                                            share2: "添加機器人iframe到你的網站html代碼裏",
                                            share3: "添加聊天機器人按鈕到網站右下角",
                                            select: "請點擊上面的渠道進行配置",
                                            webTitle: "網頁標題",
                                            telegramStep: {
                                                title: "telegram操作",
                                                step1: "1.首先使用{BotFather}創建telegram bot",
                                                step2: "2.然後輸入命令/newbot開始創建,給bot起一個名稱",
                                                step3: "3.創建成功後，復製機器人的token到該頁面上方"
                                            },
                                            dingtalkStep: {
                                                name: "釘釘開放平臺",
                                                title: "釘釘開放平臺操作",
                                                step1: "在{Name}，應用開發--\x3e企業內部開發--\x3e指定的機器人--\x3e開發管理",
                                                step2: "服務器ip地址",
                                                step3: "消息接收地址",
                                                step4: "釘釘掃碼進交流群"
                                            },
                                            larkStep: {
                                                name: "飛書開發平臺",
                                                title: "飛書開發平臺操作",
                                                step1: "在{Name}頁面「請求地址配置」，填寫地址",
                                                step2: "請【不要】開通Encrypt Key加密",
                                                step3: "飛書掃碼進交流群"
                                            },
                                            copy: "復製",
                                            mobileTip: "手機端頁面效果"
                                        },
                                        upload: {
                                            tips2: "支持最大{Number}M檔案",
                                            tips3: "支援pdf，docx，doc後綴檔案",
                                            tips4: "接入原生chatgpt 3.5 api",
                                            uploaded: "已上傳：",
                                            used: "上傳次數已用完",
                                            tips: "最多可以上傳{Number}份文件",
                                            error: "上傳失敗"
                                        },
                                        webchat: {
                                            hello: "有什麼可以幫你的嗎",
                                            error: "分享連結不對",
                                            error2: "機器人配置不對",
                                            send: "發送",
                                            typing: "正在輸入...",
                                            submit: "Ctrl + Enter 發送",
                                            subtitle: "chatgpt定製機器人平台"
                                        }
                                    }
                                },
                                table: {
                                    actions: "操作"
                                },
                                title: "chatHub | chatGPT客服機器人平臺",
                                keywords: "chathub、chatgpt、chatgpt接入客服、chatgpt智慧客服、chatgpt客服問答系統、chatgpt接入釘釘、chatgpt接入飛書、chatgpt接入企業微信",
                                description: "chatgpt客服機器人、chatgpt客服系統、chatgpt接入客服、chatgpt接入釘釘、chatgpt接入飛書、chatgpt接入企業微信、chatgpt網頁客服"
                            },
                            ja: {
                                chathub: {
                                    home: {
                                        enter: "バックエンドに入る",
                                        login: "ログイン",
                                        desc1: "チャットする",
                                        desc2: "あなたのchatGPTロボットにアクセスする",
                                        desc3: "専用ドキュメントをアップロードし、直ちにchatGPT対応のチャットロボットを手に入れる",
                                        desc4: "サポートされているチャットチャンネル",
                                        discord: "discord",
                                        iframe: "iframe",
                                        telegram: "telegram",
                                        webpage: "ウェブサイト",
                                        dingtalk: "dingtalk",
                                        feishu: "Feishu",
                                        wecom: "企業微信",
                                        wechat_login: "WeChat QRコードでログイン",
                                        wechat_desc: "未登録のWeChatは自動的に【ChatHub】アカウントを作成します",
                                        wechat_invalid: "QRコードが無効になりました",
                                        wechat_refresh: "更新をクリックしてください",
                                        wechat_scan: "WeChat QRコード",
                                        login_title: "登録とログインは同意を表します",
                                        user_agreement: "《ユーザー契約》",
                                        user_privacy: "《プライバシーポリシー》",
                                        btn: "チャットボットを作成する",
                                        pleaseLogin: "ログインしてください",
                                        logining: "ログイン中...",
                                        loginSucceeded: "ログイン成功"
                                    },
                                    payment: {
                                        subscribe: "立即購読する",
                                        monthly: "毎月",
                                        yearly: "毎年",
                                        tip: {
                                            no1: "最大で{Number}回のドキュメントをアップロード",
                                            no2: "ドキュメントの最大アップロードサイズは{Number}MB",
                                            no3: "合計で{Number}回のボットとの対話",
                                            no4: "毎月最大で{Number}つのドキュメントをアップロード",
                                            no5: "毎年最大で{Number}のドキュメントをアップロード",
                                            no6: "1日に{Number}回のボットとの対話"
                                        },
                                        level: {
                                            no1: "無料会員",
                                            no2: "基本会員",
                                            no3: "上級会員",
                                            no4: "スーパー会員"
                                        }
                                    },
                                    navbar: {
                                        files: "ドキュメント管理",
                                        steps: "ロボットの作成",
                                        channels: "ロボットチャネル管理"
                                    },
                                    hamburger: {
                                        update: "会員購入",
                                        document: "ドキュメンテーション"
                                    },
                                    userCard: {
                                        tip1: "今日は{Number}回のドキュメントアップロードが可能です",
                                        tips2: "単一のドキュメントは最大{Number} MBをサポートします",
                                        tips3: "今日は残り{Number}回のインタラクションがあります",
                                        update: "会員アップグレード"
                                    },
                                    openai: {
                                        channel: {
                                            name: "ロボット名"
                                        },
                                        channels: {
                                            delete: "削除する",
                                            edit: "編集",
                                            cancel: "キャンセル",
                                            save: "保存",
                                            viewUrl: "リンクを見る"
                                        },
                                        chat: {
                                            hello: "こんにちは、ChatGPT 3.5バージョンのAPIに接続しました、今からChatGPTと会話を始めることができます！😊",
                                            ask: "どんな質問でも大丈夫です...",
                                            errorMsg: "会話中に不明なエラーが発生しました。再送信するか、ページを更新してください。"
                                        },
                                        files: {
                                            name: "ドキュメント名",
                                            robot: "ロボット名",
                                            type: "ロボット種類",
                                            documents: "関連文書",
                                            training: "ドキュメントトレーニング"
                                        },
                                        robot: {
                                            engine: "AIエンジン",
                                            system: "プラットフォーム提供chatgpt",
                                            custom: "私有chatgpt",
                                            has: "（既に入力されています）",
                                            edit: "変更",
                                            input: "chatgptのkeyを入力してください",
                                            error_file: "ファイルをアップロードしてください",
                                            error_key: "keyを入力してください"
                                        },
                                        steps: {
                                            step1: "アクセスソースを選択",
                                            step2: "チャット効果のプレビュー",
                                            step3: "チャットチャネルを選択",
                                            step4: "チャット構成完了",
                                            web: "企業WeChat",
                                            web2: "ウェブサイトのウェブページ",
                                            wecom: "DingTalk",
                                            dingtalk: "Feishu",
                                            lark: "前のページに戻る",
                                            back: "ドキュメントを提出する",
                                            upload: "提出する",
                                            bind: "提出する",
                                            submit: "提出する",
                                            ok: "オーケー",
                                            copysuccess: "コピーが成功しました",
                                            copyfail: "コピーに失敗しました",
                                            success: "ロボットの作成に成功しました",
                                            share: "以下のリンクを使用して、ロボットを共有してください",
                                            share1: "Webページロボットリンク",
                                            share2: "あなたのウェブサイトのHTMLコードにロボットiframeを追加する",
                                            share3: "ウェブサイトの右下隅にチャットボットボタンを追加する",
                                            select: "上記のチャネルをクリックして、設定を行ってください",
                                            webTitle: "ウェブページのタイトル",
                                            telegramStep: {
                                                title: "telegram操作手順",
                                                step1: "1.まずは、{BotFather}を使用してTelegramボットを作成します。",
                                                step2: "2.その後、/newbotコマンドを入力してボットを作成し、ボットに名前を付けます。",
                                                step3: "3.作成に成功したら、ボットのトークンをこのページの上部にコピーしてください。"
                                            },
                                            dingtalkStep: {
                                                name: "DingTalkオープンプラットフォーム",
                                                title: "DingTalkオープンプラットフォーム操作手順",
                                                step1: "{Name}で、アプリ開発→企業内部開発→指定されたボット→開発管理",
                                                step2: "サーバーのIPアドレス",
                                                step3: "メッセージ受信アドレス",
                                                step4: "DingTalk QRコードで交流グループに参加する"
                                            },
                                            larkStep: {
                                                name: "Feishu開発プラットフォーム",
                                                title: "Feishu開発プラットフォーム操作手順",
                                                step1: "{Name}の「リクエストアドレス設定」ページにアドレスを入力する",
                                                step2: "Encrypt Keyの使用は【しないで】ください",
                                                step3: "Feishu QRコードで交流グループに参加する"
                                            },
                                            copy: "コピー",
                                            mobileTip: "モバイル画面の効果"
                                        },
                                        upload: {
                                            tips2: "無料のユーザーは最大{Number}Mファイルをサポートします",
                                            tips3: "pdf、docx、doc拡張子のファイルをサポートします",
                                            tips4: "ネイティブChatGPT 3.5 APIへのアクセス",
                                            uploaded: "アップロード済み：",
                                            used: "無料のアップロード回数が使い切られました",
                                            tips: "{Number}つのドキュメントをアップロードできます",
                                            error: "アップロードに失敗しました"
                                        },
                                        webchat: {
                                            hello: "何かお手伝いできますか？",
                                            error: "共有リンクが正しくありません",
                                            error2: "ロボットの設定が正しくありません",
                                            send: "送信",
                                            typing: "入力中...",
                                            submit: "Ctrl + Enterで送信",
                                            subtitle: "Chatgptカスタムロボットプラットフォーム"
                                        }
                                    }
                                },
                                table: {
                                    actions: "操作"
                                },
                                title: "chatHub | chatGPTカスタマーサポートロボットプラットフォーム",
                                keywords: "chathub、chatgpt、chatgptでのカスタマーサポート、chatgptインテリジェントカスタマーサポート、chatgpカスタマーサポートQ&Aシステム、chatgptでのDingTalk接続、chatgptでのFeishu接続、企業WeChat接続",
                                description: "chatgptカスタマーサポートロボット、chatgptカスタマーサポートシステム、chatgptでのカスタマーサポート接続、chatgptでのDingTalk接続、chatgptでのFeishu接続、企業WeChat接続、chatgptウェブカスタマーサポート"
                            },
                            ko: {
                                chathub: {
                                    home: {
                                        enter: "관리자 페이지로 이동",
                                        login: "로그인",
                                        desc1: "채팅하기",
                                        desc2: "당신의 chatGPT 로봇과 대화하기",
                                        desc3: "특별 문서를 업로드하고 즉시 chatGPT를 갖춘 채팅 로봇을 얻으세요.",
                                        desc4: "지원되는 채팅 채널",
                                        discord: "디스코드",
                                        iframe: "Iframe",
                                        telegram: "텔레그램",
                                        webpage: "웹페이지",
                                        dingtalk: "딩딩",
                                        feishu: "페이스북 워크플레이스",
                                        wecom: "위챗워크",
                                        wechat_login: "WeChat으로 로그인",
                                        wechat_desc: "등록되지 않은 WeChat 계정은 자동으로 ChatHub 계정이 생성됩니다.",
                                        wechat_invalid: "QR 코드가 만료되었습니다",
                                        wechat_refresh: "새로 고침을 클릭하세요",
                                        wechat_scan: "WeChat으로 로그인",
                                        login_title: "등록 및 로그인 시 ",
                                        user_agreement: "《사용자 계약》",
                                        user_privacy: "《개인 정보 보호 정책》에 동의하는 것입니다",
                                        btn: "챗봇 만들기",
                                        pleaseLogin: "로그인하세요",
                                        logining: "로그인 중...",
                                        loginSucceeded: "로그인 성공"
                                    },
                                    payment: {
                                        subscribe: "지금 구독하기",
                                        monthly: "월별",
                                        yearly: "연간",
                                        tip: {
                                            no1: "최대 {Number}회 문서 업로드 가능",
                                            no2: "문서 최대 업로드 크기: {Number}MB",
                                            no3: "총 {Number}회 로봇과의 상호작용",
                                            no4: "월별 최대 {Number}부 문서 업로드 가능",
                                            no5: "연간 최대 {Number}부 문서 업로드 가능",
                                            no6: "일일 {Number}회 로봇과의 상호작용"
                                        },
                                        level: {
                                            no1: "무료 회원",
                                            no2: "기본 회원",
                                            no3: "고급 회원",
                                            no4: "슈퍼 회원"
                                        }
                                    },
                                    navbar: {
                                        files: "문서 관리",
                                        steps: "봇 만들기",
                                        channels: "봇 채널 관리"
                                    },
                                    hamburger: {
                                        update: "멤버십 구매",
                                        document: "문서화"
                                    },
                                    userCard: {
                                        tip1: "오늘 {Number}개의 문서를 업로드할 수 있습니다",
                                        tips2: "단일 문서는 최대 {Number}MB를 지원합니다",
                                        tips3: "오늘 {Number}개의 상호 작용이 남아 있습니다",
                                        update: "멤버십 업그레이드"
                                    },
                                    openai: {
                                        channel: {
                                            name: "봇 이름"
                                        },
                                        channels: {
                                            delete: "삭제",
                                            edit: "편집",
                                            cancel: "취소",
                                            save: "저장",
                                            viewUrl: "링크 보기"
                                        },
                                        chat: {
                                            hello: "안녕하세요, 저는 챗 GPT 3.5 버전 인터페이스에 연결되었습니다. 이제 챗 GPT와 대화를 시작할 수 있습니다!😊",
                                            ask: "어떤 질문이든 괜찮아요 ...",
                                            errorMsg: "대화 중 알 수없는 오류가 발생했습니다. 다시 보내거나 페이지를 새로 고침하십시오."
                                        },
                                        files: {
                                            name: "문서 이름",
                                            robot: "봇 이름",
                                            type: "봇 유형",
                                            documents: "관련 문서",
                                            training: "문서 훈련"
                                        },
                                        robot: {
                                            engine: "AI 엔진",
                                            system: "플랫폼은 chatgpt를 제공합니다",
                                            custom: "사용자 지정 chatgpt",
                                            has: " (기입 완료)",
                                            edit: "수정",
                                            input: "chatgpt 키 작성",
                                            error_file: "파일을 업로드해주세요.",
                                            error_key: "키를 입력해주세요."
                                        },
                                        steps: {
                                            step1: "액세스 소스 선택",
                                            step2: "채팅 효과 미리보기",
                                            step3: "채팅 채널 선택",
                                            step4: "채팅 구성 완료",
                                            web: "웹 페이지",
                                            web2: "웹 사이트 웹 페이지",
                                            wecom: "Enterprise WeChat",
                                            dingtalk: "DingTalk",
                                            lark: "Feishu",
                                            back: "이전 페이지로 돌아가기",
                                            upload: "제출",
                                            bind: "chat 채널 연결하러 가기",
                                            submit: "제출",
                                            ok: "확인",
                                            copysuccess: "복사 성공",
                                            copyfail: "복사 실패",
                                            success: "로봇 생성 완료",
                                            share: "아래 링크를 사용하여 로봇을 공유하세요",
                                            share1: "웹사이트 로봇 링크",
                                            share2: "로봇 iframe을 웹사이트 HTML 코드에 추가",
                                            share3: "웹사이트 우측 하단에 채팅 로봇 버튼 추가",
                                            select: "설정을 위해 위의 채널을 클릭하세요",
                                            webTitle: "페이지 제목",
                                            telegramStep: {
                                                title: "텔레그램 작업 절차",
                                                step1: "1. 먼저 {BotFather}를 사용하여 텔레그램 봇을 만드세요.",
                                                step2: "2. 그런 다음 /newbot 명령어를 입력하여 봇을 만들고 이름을 지정하세요.",
                                                step3: "3. 만들기가 완료되면, 생성된 봇의 토큰을 이 페이지 상단에 복사하세요."
                                            },
                                            dingtalkStep: {
                                                name: "DingTalk 개방형 플랫폼",
                                                title: "DingTalk 개방형 플랫폼 작업 절차",
                                                step1: "{Name}에서, 응용 프로그램 개발 --\x3e 기업 내부 개발 --\x3e 지정된 로봇 --\x3e 개발 관리",
                                                step2: "서버 IP 주소",
                                                step3: "메시지 수신 주소",
                                                step4: "DingTalk으로 스캔하여 대화방에 들어가기"
                                            },
                                            larkStep: {
                                                name: "Feishu 개발자 플랫폼",
                                                title: "Feishu 개발자 플랫폼 작업 절차",
                                                step1: "{Name} 페이지의 ‘요청 주소 구성’에 주소를 입력하십시오.",
                                                step2: "Encrypt Key 암호화를 【하지 마세요】",
                                                step3: "Feishu를 스캔하여 대화방에 들어가기"
                                            },
                                            copy: "복사",
                                            mobileTip: "모바일 페이지 효과"
                                        },
                                        upload: {
                                            tips2: "무료 사용자는 최대 {Number}M 파일을 지원합니다.",
                                            tips3: "pdf, docx, doc 확장자 파일을 지원합니다.",
                                            tips4: "원래의 ChatGPT 3.5 API에 접근",
                                            uploaded: "업로드됨:",
                                            used: "무료 업로드 횟수가 모두 사용되었습니다.",
                                            tips: "최대 {Number}개의 문서를 업로드할 수 있습니다.",
                                            error: "업로드 실패"
                                        },
                                        webchat: {
                                            hello: "도움이 필요하시면 말씀해주세요.",
                                            error: "링크가 잘못되었습니다.",
                                            error2: "로봇 구성이 잘못되었습니다.",
                                            send: "보내기",
                                            typing: "입력 중...",
                                            submit: "Ctrl + Enter로 보내기",
                                            subtitle: "chatgpt 맞춤형 로봇 플랫폼"
                                        }
                                    }
                                },
                                table: {
                                    actions: "동작"
                                },
                                title: "채팅 허브 | 챗 GPT 고객 서비스 로봇 플랫폼",
                                keywords: "챗허브, 챗 GPT, 챗 GPT 연동 고객 서비스, 챗 GPT 스마트 고객 서비스, 챗 GPT 고객 서비스 질문 응답 시스템, 챗 GPT 연동 딩딩, 챗 GPT 연동 페이스북, 챗 GPT 연동 기업 위챗",
                                description: "챗 GPT 고객 서비스 로봇, 챗 GPT 고객 서비스 시스템, 챗 GPT 연동 고객 서비스, 챗 GPT 연동 딩딩, 챗 GPT 연동 페이스북, 챗 GPT 연동 기업 위챗, 챗 GPT 웹 고객 서비스"
                            },
                            de: {
                                chathub: {
                                    home: {
                                        enter: "Zugang zum Backend",
                                        login: "Anmelden",
                                        desc1: "Chatten mit",
                                        desc2: "Verbinde mit deinem ChatGPT Roboter",
                                        desc3: "Lade ein persönliches Dokument hoch und erhalte sofort einen Chatbot mit ChatGPT-Fähigkeit",
                                        desc4: "Unterstützte Chat-Kanäle",
                                        discord: "Discord",
                                        iframe: "Iframe",
                                        telegram: "Telegram",
                                        webpage: "Webseite",
                                        dingtalk: "DingTalk",
                                        feishu: "Feishu",
                                        wecom: "Enterprise WeChat",
                                        wechat_login: "Einloggen mit WeChat-Scan",
                                        wechat_desc: "Ein nicht registriertes WeChat-Konto erstellt automatisch ein ChatHub-Konto",
                                        wechat_invalid: "QR-Code abgelaufen",
                                        wechat_refresh: "Bitte klicken Sie auf Aktualisieren",
                                        wechat_scan: "WeChat-Scan",
                                        login_title: "Registrieren und anmelden bedeutet Zustimmung zu den Nutzungsbedingungen und Datenschutzrichtlinien",
                                        user_agreement: "Dokumentenverwaltung",
                                        user_privacy: "Erstellen von Robotern",
                                        btn: "Erstelle deinen Chatbot",
                                        pleaseLogin: "Bitte einloggen",
                                        logining: "Anmeldung läuft...",
                                        loginSucceeded: "Anmeldung erfolgreich"
                                    },
                                    payment: {
                                        subscribe: "Abonnieren",
                                        monthly: "monatlich",
                                        yearly: "jährlich",
                                        tip: {
                                            no1: "Maximal {Number} Dokumente hochladen",
                                            no2: "Maximale Dateigröße: {Number} MB",
                                            no3: "Insgesamt {Number} Interaktionen mit dem Bot",
                                            no4: "Maximal {Number} Dokumente pro Monat hochladen",
                                            no5: "Maximal {Number} Dokumente pro Jahr hochladen",
                                            no6: "{Number} Interaktionen pro Tag mit dem Bot"
                                        },
                                        level: {
                                            no1: "Kostenloses Mitglied",
                                            no2: "Basismitglied",
                                            no3: "Premiummitglied",
                                            no4: "Supermitglied"
                                        }
                                    },
                                    navbar: {
                                        files: "Robot-Channel-Management",
                                        steps: "Robotername",
                                        channels: "Bearbeiten"
                                    },
                                    hamburger: {
                                        update: "Mitgliedschaft erwerben",
                                        document: "Dokumentation"
                                    },
                                    userCard: {
                                        tip1: "Heute können Sie {Number} Dokumente hochladen",
                                        tips2: "Einzelnes Dokument unterstützt bis zu {Number} MB",
                                        tips3: "Heute noch {Number} Interaktionen übrig",
                                        update: "Mitgliedschaft aktualisieren"
                                    },
                                    openai: {
                                        channel: {
                                            name: "Abbrechen"
                                        },
                                        channels: {
                                            delete: "Löschen",
                                            edit: "Speichern",
                                            cancel: "Sie können mir zu diesem Dokument Fragen stellen😊",
                                            save: "Speichern",
                                            viewUrl: "Link anzeigen"
                                        },
                                        chat: {
                                            hello: "Hallo, ich habe die ChatGPT 3.5 API erfolgreich verbunden. Du kannst jetzt mit ChatGPT sprechen!😊",
                                            ask: "Robotername",
                                            errorMsg: "Während des Gesprächs ist ein unbekannter Fehler aufgetreten. Bitte senden Sie die Nachricht erneut oder aktualisieren Sie die Seite."
                                        },
                                        files: {
                                            name: "Roboter-Typ",
                                            robot: "AI-Engine",
                                            type: "Plattform bietet ChatGPT",
                                            documents: "Verknüpfte Dokumente",
                                            training: "Dokumententraining"
                                        },
                                        robot: {
                                            engine: "Privates ChatGPT",
                                            system: " (ausgefüllt)",
                                            custom: "Bearbeiten",
                                            has: "Geben Sie den ChatGPT-Schlüssel ein",
                                            edit: "Bitte laden Sie die Datei hoch",
                                            input: "Bitte geben Sie den Schlüssel ein",
                                            error_file: "Dokument hochladen",
                                            error_key: "Vorschau der Chat-Effekte"
                                        },
                                        steps: {
                                            step1: "Wählen Sie die Quelle aus",
                                            step2: "Vorschau des Chat-Effekts",
                                            step3: "Wählen Sie den Chat-Kanal aus",
                                            step4: "Chat-Konfiguration abgeschlossen",
                                            web: "Website",
                                            web2: "Website-Webseite",
                                            wecom: "Wechat",
                                            dingtalk: "DingTalk",
                                            lark: "Feishu",
                                            back: "Zurück",
                                            upload: "Hochladen",
                                            bind: "Zum Binden des Chat-Kanals gehen",
                                            submit: "Einreichen",
                                            ok: "OK",
                                            copysuccess: "Kopieren erfolgreich",
                                            copyfail: "Kopieren fehlgeschlagen",
                                            success: "Roboter erfolgreich erstellt",
                                            share: "Verwenden Sie den folgenden Link, um Ihren Roboter zu teilen",
                                            share1: "Webseite Bot Link",
                                            share2: "Fügen Sie den Bot iFrame Ihrem Website-HTML-Code hinzu",
                                            share3: "Fügen Sie den Chatbot-Button in die untere rechte Ecke Ihrer Website ein",
                                            select: "Klicken Sie auf den oben stehenden Kanal, um ihn zu konfigurieren",
                                            webTitle: "Webseitentitel",
                                            telegramStep: {
                                                title: "Telegram Ablauf",
                                                step1: "1. Zuerst erstellen Sie mit {BotFather} einen Telegram-Bot.",
                                                step2: "2. Verwenden Sie den Befehl /newbot, um die Erstellung zu starten und Ihrem Bot einen Namen zu geben.",
                                                step3: "3. Nach erfolgreicher Erstellung kopieren Sie das Token des Bots oben auf diese Seite."
                                            },
                                            dingtalkStep: {
                                                name: "DingTalk-Plattform",
                                                title: "DingTalk-Plattform Ablauf",
                                                step1: "Gehe zur Anwendungsentwicklung → Unternehmensinterne Entwicklung → Spezifischer Roboter → Entwicklung verwalten auf der {Name}",
                                                step2: "IP-Adresse des Servers",
                                                step3: "Nachrichtenempfangsadresse",
                                                step4: "Scanne den QR-Code von DingTalk, um der Diskussionsgruppe beizutreten"
                                            },
                                            larkStep: {
                                                name: "Feishu-Entwicklungsplattform",
                                                title: "Feishu-Entwicklungsplattform Ablauf",
                                                step1: 'Gib in der Seite "Anforderungsadresse konfigurieren" auf der {Name} die Adresse ein',
                                                step2: "Bitte schalte KEINEN Encrypt Key zur Verschlüsselung frei",
                                                step3: "Scanne den QR-Code von Feishu, um der Diskussionsgruppe beizutreten"
                                            },
                                            copy: "Kopieren",
                                            mobileTip: "Anzeige auf der mobilen Seite"
                                        },
                                        upload: {
                                            tips2: "Kostenloser Benutzer kann bis zu {Number} MB pro Datei hochladen",
                                            tips3: "Unterstützte Dateitypen sind pdf, docx und doc",
                                            tips4: "Zugriff auf die native ChatGPT 3.5-API",
                                            uploaded: "Hochgeladen:",
                                            used: "Kostenlose Upload-Anzahl wurde aufgebraucht",
                                            tips: "Es können maximal {Number} Dokumente hochgeladen werden.",
                                            error: "Upload fehlgeschlagen"
                                        },
                                        webchat: {
                                            hello: "Kann ich dir helfen?",
                                            error: "Link zum Teilen ist falsch",
                                            error2: "Falsche Roboter-Konfiguration",
                                            send: "Senden",
                                            typing: "Tippt gerade...",
                                            submit: "Ctrl + Enter zum Senden",
                                            subtitle: "Chatgpt Custom Robot Platform"
                                        }
                                    }
                                },
                                table: {
                                    actions: "Bearbeiten"
                                },
                                title: "ChatHub | ChatGPT-Kundenservice-Plattform",
                                keywords: "ChatHub, ChatGPT, ChickengpT-Bereitstellung des Kundenservices, ChatGPT-intelligentes Kundenservice-System, ChatGP Kundenservice-Frage-Antwort-System, Integration von ChatGPT in DingTalk, Integration von ChatGPT in Feishu, Integration von ChatGPT in Enterprise WeChat",
                                description: "ChatGPT-Kundenservice-Bot, ChatGPT-Kundenservice-System, Integration von ChatGPT in Kundenservice, Integration von ChatGPT in DingTalk, Integration von ChatGPT in Feishu, Integration von ChatGPT in Enterprise WeChat, ChatGPT-webbasierter Kundenservice"
                            },
                            es: {
                                chathub: {
                                    home: {
                                        enter: "Entrar al panel de administración",
                                        login: "Iniciar sesión",
                                        desc1: "Chatea con",
                                        desc2: "Conecta tu robot de chatGPT",
                                        desc3: "Sube tu documento exclusivo y obtén un robot de chat con habilidades de chatGPT",
                                        desc4: "Canales de chat admitidos",
                                        discord: "Discord",
                                        iframe: "Iframe",
                                        telegram: "Telegram",
                                        webpage: "Página web",
                                        dingtalk: "DingTalk",
                                        feishu: "Feishu",
                                        wecom: "WeChat empresarial",
                                        wechat_login: "Iniciar sesión con escaneo de código QR de WeChat",
                                        wechat_desc: "Se creará una cuenta ChatHub automáticamente para los usuarios de WeChat no registrados",
                                        wechat_invalid: "El código QR ha expirado",
                                        wechat_refresh: "Haz clic para actualizar",
                                        wechat_scan: "Escanea el código QR de WeChat",
                                        login_title: "Al registrarse o iniciar sesión, aceptas el",
                                        user_agreement: "Acuerdo del usuario",
                                        user_privacy: "Política de privacidad",
                                        btn: "Comenzar a crear inmediatamente",
                                        pleaseLogin: "Por favor, inicie sesión",
                                        logining: "Iniciando sesión...",
                                        loginSucceeded: "Inicio de sesión exitoso"
                                    },
                                    payment: {
                                        subscribe: "Suscríbete ahora",
                                        monthly: "Mensual",
                                        yearly: "Anual",
                                        tip: {
                                            no1: "Subir un máximo de {Number} documentos",
                                            no2: "Tamaño máximo de carga de documentos: {Number} MB",
                                            no3: "Total de {Number} interacciones con el robot",
                                            no4: "Subir un máximo de {Number} documentos por mes",
                                            no5: "Subir un máximo de {Number} documentos por año",
                                            no6: "{Number} interacciones/día con el robot"
                                        },
                                        level: {
                                            no1: "Miembro gratuito",
                                            no2: "Miembro básico",
                                            no3: "Miembro avanzado",
                                            no4: "Miembro premium"
                                        }
                                    },
                                    navbar: {
                                        files: "Gestión de documentos",
                                        steps: "Crear chatbot",
                                        channels: "Gestión de canal del chatbot"
                                    },
                                    hamburger: {
                                        update: "Comprar membresía",
                                        document: "Documentación"
                                    },
                                    userCard: {
                                        tip1: "Hoy puedes subir {Number} documentos",
                                        tips2: "Un solo documento admite hasta {Number} MB",
                                        tips3: "{Number} interacciones restantes hoy",
                                        update: "Actualizar membresía"
                                    },
                                    openai: {
                                        channel: {
                                            name: "Nombre del chatbot"
                                        },
                                        channels: {
                                            delete: "Eliminar",
                                            edit: "Editar",
                                            cancel: "Cancelar",
                                            save: "Guardar",
                                            viewUrl: "Ver enlace"
                                        },
                                        chat: {
                                            hello: "¡Hola! He conectado con la versión 3.5 de la interfaz de chatgpt, ¡ahora puedes empezar a conversar con chatgpt!😊",
                                            ask: "Haz cualquier pregunta...",
                                            errorMsg: "Se produjo un error desconocido durante la conversación. Por favor, vuelva a enviar o actualice la página."
                                        },
                                        files: {
                                            name: "Nombre del documento",
                                            robot: "Nombre del chatbot",
                                            type: "Tipo de chatbot",
                                            documents: "Documentos relacionados",
                                            training: "Entrenamiento de documentos"
                                        },
                                        robot: {
                                            engine: "Motor de IA",
                                            system: "ChatGPT proporcionado por la plataforma",
                                            custom: "ChatGPT privado",
                                            has: "(Completado)",
                                            edit: "Modificar",
                                            input: "Insertar la clave del chatGPT",
                                            error_file: "Cargar archivos",
                                            error_key: "Insertar la clave"
                                        },
                                        steps: {
                                            step1: "Seleccionar fuente de acceso",
                                            step2: "Vista previa del efecto de chat",
                                            step3: "Seleccionar canal de chat",
                                            step4: "Configuración de chat completada",
                                            web: "Página web",
                                            web2: "Página web del sitio",
                                            wecom: "WeChat Work",
                                            dingtalk: "DingTalk",
                                            lark: "Feishu",
                                            back: "Volver a la página anterior",
                                            upload: "Enviar",
                                            bind: "Vayan a vincular la canal de chatGPT",
                                            submit: "Enviar",
                                            ok: "Entiendo",
                                            copysuccess: "Copiar con éxito",
                                            copyfail: "Error al copiar",
                                            success: "El chatbot ha sido creado exitosamente",
                                            share: "Usa este enlace para compartir tu chatbot",
                                            share1: "Enlace de robot web",
                                            share2: "Agrega el iframe del robot a tu código HTML de sitio web",
                                            share3: "Agrega el botón de chat de robot en la esquina inferior derecha del sitio web",
                                            select: "Haz clic en el canal correspondiente para configurar",
                                            webTitle: "Título de la página web",
                                            telegramStep: {
                                                title: "Proceso de operación de Telegram",
                                                step1: "1. En primer lugar, usa {BotFather} para crear un bot de Telegram.",
                                                step2: "2. Luego, escribe el comando /newbot para comenzar la creación y darle un nombre al bot.",
                                                step3: "3. Después de crearlo con éxito, copia el token del bot y pégalo en la parte superior de esta página."
                                            },
                                            dingtalkStep: {
                                                name: "Plataforma abierta de DingTalk",
                                                title: "Proceso de operación de la plataforma abierta de DingTalk",
                                                step1: "En {Name}, desarrollo de aplicaciones -> desarrollo interno de la empresa -> robot designado -> gestión de desarrollo",
                                                step2: "Dirección IP del servidor",
                                                step3: "Dirección de recepción de mensajes",
                                                step4: "Escanee el código para unirse al grupo de comunicación en DingTalk"
                                            },
                                            larkStep: {
                                                name: "Plataforma de desarrollo de Feishu",
                                                title: "Proceso de operación de la plataforma de desarrollo de Feishu",
                                                step1: "En la página de 'Configuración de la dirección de solicitud' de {Name}, ingrese la dirección",
                                                step2: "Por favor, 【no】active la clave de cifrado Encrypt Key",
                                                step3: "Escanee el código para unirse al grupo de comunicación en Feishu"
                                            },
                                            copy: "Copiar",
                                            mobileTip: "Efecto de página en el móvil"
                                        },
                                        upload: {
                                            tips2: "Los usuarios gratuitos pueden cargar archivos de hasta {Number}M como máximo",
                                            tips3: "Compatible con archivos de extensión .pdf, .docx, .doc",
                                            tips4: "Acceda a la API nativa de ChatGPT 3.5",
                                            uploaded: "Ya se ha subido:",
                                            used: "El número de cargas gratuitas ha agotado",
                                            tips: "Se pueden subir como máximo {Number} documentos.",
                                            error: "Error de carga"
                                        },
                                        webchat: {
                                            hello: "¿En qué puedo ayudarte?",
                                            error: "El enlace para compartir no es correcto",
                                            error2: "La configuración del chatbot no es correcta",
                                            send: "Enviar",
                                            typing: "Escribiendo...",
                                            submit: "Ctrl + Enter para enviar",
                                            subtitle: "Plataforma de creación de chatbots personalizados chatgpt"
                                        }
                                    }
                                },
                                table: {
                                    actions: "Acciones"
                                },
                                title: "ChatHub | Plataforma de chat con el robot de servicio al cliente ChatGPT",
                                keywords: "ChatHub, ChatGPT, integración del servicio al cliente ChatGPT, servicio al cliente inteligente ChatGPT, sistema de preguntas y respuestas del servicio al cliente ChatGP, integración de ChatGPT con DingTalk, integración de ChatGPT con Feishu, integración de ChatGPT con WeChat empresarial",
                                description: "Robot de servicio al cliente ChatGPT, sistema de servicio al cliente ChatGPT, integración del servicio al cliente con ChatGPT, integración de ChatGPT con DingTalk, integración de ChatGPT con Feishu, integración de ChatGPT con WeChat empresarial, servicio al cliente web de ChatGPT"
                            },
                            fr: {
                                chathub: {
                                    home: {
                                        enter: "Accéder à la console d'administration",
                                        login: "Se connecter",
                                        desc1: "Discutez avec",
                                        desc2: "Intégrez votre robot de chatGPT",
                                        desc3: "Téléchargez votre document exclusif et obtenez immédiatement un robot de chat capable de GPT",
                                        desc4: "Canaux de chat pris en charge",
                                        discord: "Discord",
                                        iframe: "Iframe",
                                        telegram: "Telegram",
                                        webpage: "Page web",
                                        dingtalk: "DingTalk",
                                        feishu: "Feishu",
                                        wecom: "WeChat entreprise",
                                        wechat_login: "Connectez-vous avec WeChat",
                                        wechat_desc: "Un compte ChatHub sera créé automatiquement si vous n'êtes pas inscrit avec votre compte WeChat",
                                        wechat_invalid: "Le code QR est expiré",
                                        wechat_refresh: "Veuillez cliquer pour rafraîchir",
                                        wechat_scan: "Connectez-vous avec WeChat",
                                        login_title: "L'enregistrement et la connexion signifient que vous acceptez les ",
                                        user_agreement: "Termes et conditions d'utilisation",
                                        user_privacy: "Politique de confidentialité",
                                        btn: "Commencez dès maintenant",
                                        pleaseLogin: "Veuillez vous connecter",
                                        logining: "Connexion en cours...",
                                        loginSucceeded: "Connexion réussie"
                                    },
                                    payment: {
                                        subscribe: "S'abonner maintenant",
                                        monthly: "Mensuel",
                                        yearly: "Annuel",
                                        tip: {
                                            no1: "Téléchargement maximal de {Number} documents",
                                            no2: "Taille maximale de téléchargement des documents : {Number} Mo",
                                            no3: "Total de {Number} interactions avec le robot",
                                            no4: "Téléchargement maximal de {Number} documents par mois",
                                            no5: "Téléchargement maximal de {Number} documents par an",
                                            no6: "{Number} interactions/jour avec le robot"
                                        },
                                        level: {
                                            no1: "Membre gratuit",
                                            no2: "Membre de base",
                                            no3: "Membre avancé",
                                            no4: "Membre premium"
                                        }
                                    },
                                    navbar: {
                                        files: "Gestion des documents",
                                        steps: "Créer un robot",
                                        channels: "Gestion du canal du robot"
                                    },
                                    hamburger: {
                                        update: "Acheter une adhésion",
                                        document: "Documentation"
                                    },
                                    userCard: {
                                        tip1: "Aujourd'hui, vous pouvez télécharger {Number} documents",
                                        tips2: "Un seul document prend en charge jusqu'à {Number} Mo",
                                        tips3: "{Number} interactions restantes aujourd'hui",
                                        update: "Mettre à niveau l'adhésion"
                                    },
                                    openai: {
                                        channel: {
                                            name: "Nom du robot"
                                        },
                                        channels: {
                                            delete: "Supprimer",
                                            edit: "Modifier",
                                            cancel: "Annuler",
                                            save: "Enregistrer",
                                            viewUrl: "Voir le lien"
                                        },
                                        chat: {
                                            hello: "Bonjour, j'ai intégré l'API chatgpt version 3.5, vous pouvez maintenant commencer une conversation avec chatgpt! 😊",
                                            ask: "Poser n'importe quelle question ...",
                                            errorMsg: "Une erreur inconnue s'est produite pendant la conversation. Veuillez renvoyer ou rafraîchir la page."
                                        },
                                        files: {
                                            name: "Nom du document",
                                            robot: "Nom du robot",
                                            type: "Type de robot",
                                            documents: "Documents associés",
                                            training: "Formation de documents"
                                        },
                                        robot: {
                                            engine: "Moteur AI",
                                            system: "Chatgpt fourni par la plateforme",
                                            custom: "Chatgpt privé",
                                            has: "(Rempli)",
                                            edit: "Modifier",
                                            input: "Saisir la clé ChatGPT",
                                            error_file: "Veuillez télécharger le fichier",
                                            error_key: "Veuillez saisir la clé"
                                        },
                                        steps: {
                                            step1: "Sélectionner la source d'accès",
                                            step2: "Aperçu de l'effet de chat",
                                            step3: "Sélectionner le canal de chat",
                                            step4: "Configuration de chat terminée",
                                            web: "Site Web",
                                            web2: "Site web de la page",
                                            wecom: "WeChat entreprise",
                                            dingtalk: "DingTalk",
                                            lark: "Feishu",
                                            back: "Retour à la page précédente",
                                            upload: "Soumettre",
                                            bind: "Aller lier le canal de chat",
                                            submit: "Soumettre",
                                            ok: "Bien",
                                            copysuccess: "Copier avec succès",
                                            copyfail: "Copie échouée",
                                            success: "Création du robot réussie",
                                            share: "Utilisez le lien ci-dessous pour partager votre robot",
                                            share1: "Lien du robot de site web",
                                            share2: "Ajoutez l'iframe du robot à votre code HTML de site web",
                                            share3: "Ajoutez le bouton de chat du robot à coin inférieur droit de votre site web",
                                            select: "Veuillez cliquer sur les canaux ci-dessus pour la configuration",
                                            webTitle: "Titre de la page Web",
                                            telegramStep: {
                                                title: "Processus d'utilisation de Telegram",
                                                step1: "1. Commencez par créer un bot telegram en utilisant {BotFather}.",
                                                step2: "2. Ensuite, entrez la commande /newbot pour commencer la création et donner un nom au bot.",
                                                step3: "3. Après la création réussie, copiez le jeton de bot sur cette page ci-dessus."
                                            },
                                            dingtalkStep: {
                                                name: "plateforme ouverte de DingTalk",
                                                title: "Processus d'utilisation de la plateforme ouverte de DingTalk",
                                                step1: "Sur la {Name}, développement d'applications -> Développement interne d'entreprise -> Robot désigné -> Gestion de développement",
                                                step2: "Adresse IP du serveur",
                                                step3: "Adresse de réception de message",
                                                step4: "Scanner le code QR de DingTalk pour entrer dans le groupe de discussion"
                                            },
                                            larkStep: {
                                                name: "plateforme de développement de Feishu",
                                                title: "Processus d'utilisation de la plateforme de développement de Feishu",
                                                step1: "Dans la page 'Configuration d'adresse de requête' de la {Name}, remplissez l'adresse",
                                                step2: "S'il vous plaît, ne pas activer Encrypt Key Encryption",
                                                step3: "Scanner le code QR de Feishu pour entrer dans le groupe de discussion"
                                            },
                                            copy: "Copier",
                                            mobileTip: "Effet de la page mobile"
                                        },
                                        upload: {
                                            tips2: "Les utilisateurs gratuits peuvent télécharger un maximum de {Number} Mo de fichiers",
                                            tips3: "Prend en charge les fichiers avec les suffixes pdf, docx et doc",
                                            tips4: "Accéder à l'API native ChatGPT 3.5",
                                            uploaded: "Déjà téléchargé :",
                                            used: "Le nombre de téléchargements gratuits est épuisé",
                                            tips: "Vous pouvez télécharger jusqu'à {Number} documents",
                                            error: "Téléchargement échoué"
                                        },
                                        webchat: {
                                            hello: "Comment puis-je vous aider?",
                                            error: "Le lien de partage est incorrect",
                                            error2: "La configuration du robot est incorrecte",
                                            send: "Envoyer",
                                            typing: "En train d'écrire...",
                                            submit: "Ctrl + Entrée pour envoyer",
                                            subtitle: "Plateforme personnalisée de robots ChatGPT"
                                        }
                                    }
                                },
                                table: {
                                    actions: "Opération"
                                },
                                title: "chatHub | piattaforma del bot del servizio clienti chatGPT",
                                keywords: "ChatHub, ChatGPT, intégration de ChatGPT au service clientèle, service clientèle intelligent ChatGPT, système de questions-réponses de service clientèle ChatGP, intégration de ChatGPT à DingTalk, intégration de ChatGPT à Feishu, intégration de ChatGPT à WeChat Entreprise",
                                description: "Robot de service à la clientèle ChatGPT, système de service à la clientèle ChatGPT, intégration de ChatGPT au service clientèle, intégration de ChatGPT à DingTalk, intégration de ChatGPT à Feishu, intégration de ChatGPT à WeChat Entreprise, service clientèle web ChatGPT"
                            },
                            it: {
                                chathub: {
                                    home: {
                                        enter: "Accedi all'area riservata",
                                        login: "Accedi",
                                        desc1: "Chat con",
                                        desc2: "Collegati al tuo robot chatGPT",
                                        desc3: "Carica un documento esclusivo e ottieni un chatbot con capacità chatGPT",
                                        desc4: "Canali di chat supportati",
                                        discord: "Discord",
                                        iframe: "Iframe",
                                        telegram: "Telegram",
                                        webpage: "Pagina Web",
                                        dingtalk: "DingTalk",
                                        feishu: "Feishu",
                                        wecom: "WeChat Enterprise",
                                        wechat_login: "Accedi con WeChat QR code",
                                        wechat_desc: "Un account 【ChatHub】 verrà creato automaticamente per i nuovi utenti WeChat non registrati.",
                                        wechat_invalid: "QR Code scaduto",
                                        wechat_refresh: "Clicca qui per aggiornare",
                                        wechat_scan: "Scansiona il WeChat QR code",
                                        login_title: "Registra e accedi per accettare ",
                                        user_agreement: "l'Accordo dell'Utente",
                                        user_privacy: "l'Informativa sulla privacy",
                                        btn: "Crea subito",
                                        pleaseLogin: "Effettua l'accesso, per favore",
                                        logining: "Accesso in corso...",
                                        loginSucceeded: "Accesso riuscito"
                                    },
                                    payment: {
                                        subscribe: "Iscriviti ora",
                                        monthly: "Mensile",
                                        yearly: "Annuale",
                                        tip: {
                                            no1: "Carica un massimo di {Number} documenti",
                                            no2: "Dimensione massima di caricamento dei documenti: {Number} MB",
                                            no3: "Totale di {Number} interazioni con il robot",
                                            no4: "Carica un massimo di {Number} documenti al mese",
                                            no5: "Carica un massimo di {Number} documenti all'anno",
                                            no6: "{Number} interazioni/giorno con il robot"
                                        },
                                        level: {
                                            no1: "Membro gratuito",
                                            no2: "Membro base",
                                            no3: "Membro avanzato",
                                            no4: "Membro premium"
                                        }
                                    },
                                    navbar: {
                                        files: "Gestisci documenti",
                                        steps: "Crea un robot",
                                        channels: "Gestisci il canale del robot"
                                    },
                                    hamburger: {
                                        update: "Acquista l'iscrizione",
                                        document: "Documentazione"
                                    },
                                    userCard: {
                                        tip1: "Oggi puoi caricare {Number} documenti",
                                        tips2: "Un singolo documento supporta fino a {Number} MB",
                                        tips3: "{Number} interazioni rimanenti oggi",
                                        update: "Aggiorna l'iscrizione"
                                    },
                                    openai: {
                                        channel: {
                                            name: "Nome del robot"
                                        },
                                        channels: {
                                            delete: "Eliminare",
                                            edit: "Modifica",
                                            cancel: "Annulla",
                                            save: "Salva",
                                            viewUrl: "Visualizza link"
                                        },
                                        chat: {
                                            hello: "Ciao, sono collegato all'interfaccia ChatGPT versione 3.5, ora puoi iniziare a conversare con ChatGPT!😊",
                                            ask: "Fai tutte le domande che vuoi...",
                                            errorMsg: "Si è verificato un errore sconosciuto durante la conversazione. Si prega di reinviare o aggiornare la pagina."
                                        },
                                        files: {
                                            name: "Nome del documento",
                                            robot: "Nome del robot",
                                            type: "Tipo di robot",
                                            documents: "Documenti correlati",
                                            training: "Formazione dei documenti"
                                        },
                                        robot: {
                                            engine: "Motore di intelligenza artificiale",
                                            system: "chatgpt fornito dalla piattaforma",
                                            custom: "chatgpt privato",
                                            has: "(Inserito)",
                                            edit: "Modifica",
                                            input: "Inserisci la chiave chatgpt",
                                            error_file: "Carica un file",
                                            error_key: "Inserisci la chiave"
                                        },
                                        steps: {
                                            step1: "Seleziona la fonte di accesso",
                                            step2: "Anteprima dell'effetto di chat",
                                            step3: "Seleziona il canale di chat",
                                            step4: "Configurazione della chat completata",
                                            web: "Sito web",
                                            web2: "Pagina web del sito",
                                            wecom: "WeChat Enterprise",
                                            dingtalk: "DingTalk",
                                            lark: "FeiShu",
                                            back: "Torna indietro",
                                            upload: "Invia",
                                            bind: "Associa il canale chat a chatGPT",
                                            submit: "Invia",
                                            ok: "Ok",
                                            copysuccess: "Copia riuscita",
                                            copyfail: "Copia non riuscita",
                                            success: "Il robot è stato creato con successo",
                                            share: "Usa questo link per condividere il tuo robot",
                                            share1: "Link del robot web",
                                            share2: "Aggiungi l'iframe del robot al codice HTML del tuo sito web",
                                            share3: "Aggiungi il pulsante del robot di chat nell'angolo in basso a destra del tuo sito web",
                                            select: "Clicca su uno dei canali sopra per la configurazione",
                                            webTitle: "Titolo della pagina",
                                            telegramStep: {
                                                step1: "1. Per prima cosa, utilizza {BotFather} per creare un bot Telegram",
                                                step2: "2. Successivamente, digita il comando /newbot per avviare la creazione e scegli un nome per il bot",
                                                step3: "3. Dopo aver creato con successo il bot, copia il token del bot e incollalo nella sezione sopra."
                                            },
                                            title: "Procedura di utilizzo di Telegram",
                                            dingtalkStep: {
                                                name: "piattaforma aperta di DingTalk",
                                                title: "Procedura di utilizzo della piattaforma aperta di DingTalk",
                                                step1: "Su {Name}, sviluppo di applicazioni -> sviluppo interno dell'azienda -> robot specifico-> gestione dello sviluppo",
                                                step2: "Indirizzo IP del server",
                                                step3: "Indirizzo di ricezione messaggi",
                                                step4: "Accedi al gruppo di comunicazione scansionando il codice QR di DingTalk"
                                            },
                                            larkStep: {
                                                name: "platform Feishu",
                                                title: "Procedura di utilizzo della piattaforma di sviluppo di Feishu",
                                                step1: "Nella pagina \"Configurazione dell'indirizzo di richiesta\" del {Name}, compilare l'indirizzo",
                                                step2: "Si prega di 【non】 attivare la chiave di crittografia Encrypt Key",
                                                step3: "Accedi al gruppo di comunicazione scansionando il codice QR di Feishu"
                                            },
                                            copy: "copia",
                                            mobileTip: "Effetti della pagina del dispositivo mobile"
                                        },
                                        upload: {
                                            tips2: "Gli utenti gratuiti possono caricare file fino a {Number} MB",
                                            tips3: "Supporto per i file con estensioni pdf, docx e doc",
                                            tips4: "Accedi alla API nativa di ChatGPT 3.5",
                                            uploaded: "File caricati:",
                                            used: "I caricamenti gratuiti sono terminati",
                                            tips: "Puoi caricare fino a {Number} documenti",
                                            error: "Caricamento fallito"
                                        },
                                        webchat: {
                                            hello: "Posso aiutarti in altro modo? ",
                                            error: "Il link di condivisione non è valido",
                                            error2: "La configurazione del robot non è corretta",
                                            send: "Invia",
                                            typing: "Sta scrivendo...",
                                            submit: "Ctrl + Invio per inviare",
                                            subtitle: "Piattaforma di personalizzazione di robot chatgpt"
                                        }
                                    }
                                },
                                table: {
                                    actions: "Operazione"
                                },
                                title: "chatHub | piattaforma del bot del servizio clienti chatGPT",
                                keywords: "chatHub, chatGPT, l'integrazione del servizio clienti chatGPT, il servizio clienti intelligente chatGPT, il sistema di domande e risposte del servizio clienti chatGP, l'integrazione di chatGPT con DingTalk, l'integrazione di chatGPT con Feishu, l'integrazione di chatGPT con WeCom",
                                description: "Il bot del servizio clienti chatGPT, il sistema di servizio clienti chatGPT, l'integrazione del servizio clienti chatGPT, l'integrazione di chatGPT con DingTalk, l'integrazione di chatGPT con Feishu, l'integrazione di chatGPT con WeCom, il servizio clienti sulla pagina web chatGPT"
                            },
                            pt: {
                                chathub: {
                                    home: {
                                        enter: "Aceder ao painel de controlo",
                                        login: "Iniciar sessão",
                                        desc1: "conversar com",
                                        desc2: "Conecte-se ao seu robô de bate-papo chatGPT",
                                        desc3: "Envie um documento exclusivo e obtenha imediatamente um robô de bate-papo com habilidades de chatGPT",
                                        desc4: "Canais de chat suportados",
                                        discord: "Discord",
                                        iframe: "Iframe",
                                        telegram: "Telegram",
                                        webpage: "Página da web",
                                        dingtalk: "DingTalk",
                                        feishu: "Feishu",
                                        wecom: "WeCom",
                                        wechat_login: "Iniciar sessão com WeChat scan",
                                        wechat_desc: "Os que não têm conta serão automaticamente registados no ChatHub",
                                        wechat_invalid: "Código QR expirado",
                                        wechat_refresh: "Clica para atualizar",
                                        wechat_scan: "WeChat scan",
                                        login_title: "Registar ou iniciar sessão implica a aceitação dos",
                                        user_agreement: "Termos de utilização",
                                        user_privacy: "Política de privacidade",
                                        btn: "Criar já",
                                        pleaseLogin: "Por favor, faça login",
                                        logining: "Fazendo login...",
                                        loginSucceeded: "Login realizado com sucesso"
                                    },
                                    payment: {
                                        subscribe: "Subscrever agora",
                                        monthly: "Mensal",
                                        yearly: "Anual",
                                        tip: {
                                            no1: "Máximo de {Number} vezes para enviar documentos",
                                            no2: "Tamanho máximo de envio de documentos: {Number}MB",
                                            no3: "Total de {Number} interações com o robô",
                                            no4: "Máximo de {Number} documentos enviados por mês",
                                            no5: "Máximo de {Number} documentos enviados por ano",
                                            no6: "{Number} interações/dia com o robô"
                                        },
                                        level: {
                                            no1: "Membro gratuito",
                                            no2: "Membro básico",
                                            no3: "Membro avançado",
                                            no4: "Membro super"
                                        }
                                    },
                                    navbar: {
                                        files: "Gestão de documentos",
                                        steps: "Criar robot",
                                        channels: "Gestão do canal do robot"
                                    },
                                    hamburger: {
                                        update: "Comprar associação",
                                        document: "Documentação"
                                    },
                                    userCard: {
                                        tip1: "Hoje você pode enviar {Number} documentos",
                                        tips2: "Um único documento suporta até {Number} MB",
                                        tips3: "{Number} interações restantes hoje",
                                        update: "Atualizar associação"
                                    },
                                    openai: {
                                        channel: {
                                            name: "Nome do robot"
                                        },
                                        channels: {
                                            delete: "Excluir",
                                            edit: "Editar",
                                            cancel: "Cancelar",
                                            save: "Guardar",
                                            viewUrl: "Visualiza o link"
                                        },
                                        chat: {
                                            hello: "Olá, eu estou conectado à interface do chatgpt versão 3.5, agora você pode começar a conversar com o chatgpt!😊",
                                            ask: "Faz qualquer pergunta...",
                                            errorMsg: "Ocorreu um erro desconhecido durante a conversa. Por favor, reenvie ou atualize a página."
                                        },
                                        files: {
                                            name: "Nome do documento",
                                            robot: "Nome do robot",
                                            type: "Tipo de robot",
                                            documents: "Documentos relacionados",
                                            training: "Treinamento de documentos"
                                        },
                                        robot: {
                                            engine: "Motor de AI",
                                            system: "Plataforma fornecida pelo chatgpt",
                                            custom: "privado chatgpt",
                                            has: "(preenchido)",
                                            edit: "Editar",
                                            input: "Preencher a chave do chatgpt",
                                            error_file: "Por favor, faz o upload do ficheiro",
                                            error_key: "Por favor, preenche a chave"
                                        },
                                        steps: {
                                            step1: "Selecione a fonte de acesso",
                                            step2: "Visualizar efeito de bate-papo",
                                            step3: "Selecione o canal de bate-papo",
                                            step4: "Configuração de bate-papo concluída",
                                            web: "Website",
                                            web2: "Página da web do site",
                                            wecom: "WeChat empresarial",
                                            dingtalk: "Dingtalk",
                                            lark: "Feishu",
                                            back: "Retornar à página anterior",
                                            upload: "Submeter",
                                            bind: "Vai ligar ao canal do chat.",
                                            submit: "Submeter",
                                            ok: "Confirmado",
                                            copysuccess: "Cópia bem sucedida",
                                            copyfail: "Falha na cópia",
                                            success: "Robot criado com sucesso",
                                            share: "Usa o link abaixo para partilhar o teu robot",
                                            share1: "Link do robô da web",
                                            share2: "Adicione o iframe do robô à seção HTML do seu site",
                                            share3: "Adicione o botão de chat do robô ao canto inferior direito do site",
                                            select: "Clica no canal em cima para configurar",
                                            webTitle: "Título do website",
                                            telegramStep: {
                                                title: "Fluxo de operações do Telegram",
                                                step1: "1. Comece por criar um bot no Telegram usando o {BotFather}",
                                                step2: "2. Enviar o comando /newbot para iniciar a criação e atribuir um nome ao bot",
                                                step3: "3. Após a criação bem sucedida, copie o token do bot para a seção acima desta página"
                                            },
                                            dingtalkStep: {
                                                name: "DingTalk Open Platform",
                                                title: "Fluxo de operação da Plataforma de Desenvolvimento Aberta do DingTalk",
                                                step1: "No {Name}, desenvolvimento de aplicativos -> desenvolvimento interno da empresa -> robôs designados -> gestão de desenvolvimento",
                                                step2: "Endereço IP do servidor",
                                                step3: "Endereço de recebimento de mensagens",
                                                step4: "Escaneie o código QR do DingTalk para entrar no grupo de discussão"
                                            },
                                            larkStep: {
                                                name: "plataforma de Desenvolvimento Aberta do Feishu",
                                                title: "Fluxo de operação da Plataforma de Desenvolvimento Aberta do Feishu",
                                                step1: "Na página da {Name}, em 'configuração do endereço de solicitação', preencha o endereço",
                                                step2: "Por favor, não ative a chave de criptografia 'Encrypt Key'",
                                                step3: "Escaneie o código QR do Feishu para entrar no grupo de discussão"
                                            },
                                            copy: "Copiar",
                                            mobileTip: "Efeito da página no celular"
                                        },
                                        upload: {
                                            tips2: "Os utilizadores gratuitos suportam um máximo de {Number}M de arquivos",
                                            tips3: "Suporta arquivos com extensão pdf, docx e doc",
                                            tips4: "Acesse a API nativa do ChatGPT 3.5",
                                            uploaded: "Já foram carregados:",
                                            used: "As cargas gratuitas já acabaram",
                                            tips: "É possível fazer upload de no máximo {Number} documentos",
                                            error: "Carregamento falhou"
                                        },
                                        webchat: {
                                            hello: "Como posso ajudar?",
                                            error: "Link de partilha incorreto",
                                            error2: "Configuração do robot incorreta",
                                            send: "Enviar",
                                            typing: "Escrevendo...",
                                            submit: "Ctrl + Enter para enviar",
                                            subtitle: "Plataforma de robot personalizada com chatgpt"
                                        }
                                    }
                                },
                                table: {
                                    actions: "Operação"
                                },
                                title: "ChatHub | Plataforma de robôs de atendimento ao cliente ChatGPT",
                                keywords: "ChatHub, ChatGPT, integração do ChatGPT com atendimento ao cliente, atendimento ao cliente inteligente do ChatGPT, sistema de perguntas e respostas no atendimento ao cliente do ChatGP, integração do ChatGPT com DingTalk, integração do ChatGPT com Feishu, integração do ChatGPT com WeChat empresarial",
                                description: "Robô de atendimento ao cliente ChatGPT, sistema de atendimento ao cliente ChatGPT, integração do ChatGPT com atendimento ao cliente, integração do ChatGPT com DingTalk, integração do ChatGPT com Feishu, integração do ChatGPT com WeChat empresarial, atendimento ao cliente do ChatGPT em páginas da web"
                            },
                            ru: {
                                chathub: {
                                    home: {
                                        enter: "Вход в админку",
                                        login: "Войти",
                                        desc1: "Общайтесь с",
                                        desc2: "Подключите своего чат-бота на основе chatGPT",
                                        desc3: "Загрузите свой специальный документ и мгновенно получите чат-бота с возможностями chatGPT",
                                        desc4: "Поддерживаемые каналы чата",
                                        discord: "discord",
                                        iframe: "iframe",
                                        telegram: "telegram",
                                        webpage: "веб-страница",
                                        dingtalk: "钉钉",
                                        feishu: "飞书",
                                        wecom: "企业微信",
                                        wechat_login: "Вход через сканер QR-кода WeChat",
                                        wechat_desc: "Незарегистрированная учетная запись WeChat будет автоматически зарегистрирована в системе ChatHub",
                                        wechat_invalid: "QR-код недействителен",
                                        wechat_refresh: "Пожалуйста, нажмите, чтобы обновить",
                                        wechat_scan: "Сканирование QR-кода WeChat",
                                        login_title: "Регистрация и вход в аккаунт означает согласие с ",
                                        user_agreement: "Условиями использования",
                                        user_privacy: "Политикой конфиденциальности",
                                        btn: "Начать создание",
                                        pleaseLogin: "Пожалуйста, войдите в систему",
                                        logining: "Вход в систему...",
                                        loginSucceeded: "Вход выполнен успешно"
                                    },
                                    payment: {
                                        subscribe: "Подписаться сейчас",
                                        monthly: "Ежемесячно",
                                        yearly: "Ежегодно",
                                        tip: {
                                            no1: "Максимум {Number} раза загрузить документ",
                                            no2: "Максимальный размер загружаемого документа - {Number} МБ",
                                            no3: "Всего {Number} раз взаимодействия с роботом",
                                            no4: "Максимум {Number} документов в месяц",
                                            no5: "Максимум {Number} документов в год",
                                            no6: "{Number} раз/день взаимодействие с роботом"
                                        },
                                        level: {
                                            no1: "Бесплатный участник",
                                            no2: "Базовый участник",
                                            no3: "Продвинутый участник",
                                            no4: "Супер участник"
                                        }
                                    },
                                    navbar: {
                                        files: "Управление документами",
                                        steps: "Создание чат-бота",
                                        channels: "Управление каналами чат-бота"
                                    },
                                    hamburger: {
                                        update: "Купить подписку",
                                        document: "Документация"
                                    },
                                    userCard: {
                                        tip1: "Сегодня можно загрузить {Number} документов",
                                        tips2: "Максимальный размер одного документа - {Number} МБ",
                                        tips3: "Осталось {Number} взаимодействий на сегодня",
                                        update: "Обновить подписку"
                                    },
                                    openai: {
                                        channel: {
                                            name: "Название чат-бота"
                                        },
                                        channels: {
                                            delete: "Удалить",
                                            edit: "Редактировать",
                                            cancel: "Отмена",
                                            save: "Сохранить",
                                            viewUrl: "Просмотр ссылки"
                                        },
                                        chat: {
                                            hello: "Привет, я подключился к интерфейсу chatgpt версии 3.5, теперь вы можете начать общаться с chatgpt!😊",
                                            ask: "Задавайте любые вопросы ...",
                                            errorMsg: "Во время разговора произошла неизвестная ошибка. Пожалуйста, отправьте сообщение еще раз или обновите страницу."
                                        },
                                        files: {
                                            name: "Название документа",
                                            robot: "Название чат-бота",
                                            type: "Тип чат-бота",
                                            documents: "Связанные документы",
                                            training: "Обучение документам"
                                        },
                                        robot: {
                                            engine: "Движок искусственного интеллекта",
                                            system: "Платформа предоставляет chatgpt ",
                                            custom: " Настроенный chatgpt ",
                                            has: " (Заполнено) ",
                                            edit: " Изменить ",
                                            input: " Заполните ключ chatgpt ",
                                            error_file: " Загрузите файл",
                                            error_key: "Введите ключ"
                                        },
                                        steps: {
                                            step1: "Выберите источник доступа",
                                            step2: "Просмотр эффекта чата",
                                            step3: "Выберите канал чата",
                                            step4: "Настройка чата завершена",
                                            web: "Веб-страница",
                                            web2: "Веб-страница сайта",
                                            wecom: "WeCom",
                                            dingtalk: "DingTalk",
                                            lark: "Feishu",
                                            back: "Вернуться на предыдущую страницу",
                                            upload: "Отправить",
                                            bind: "Перейти к привязке канала chat",
                                            submit: "Отправить",
                                            ok: "Хорошо",
                                            copysuccess: "Скопировать успешно",
                                            copyfail: "Копирование не удалось",
                                            success: "Чат-бот успешно создан",
                                            share: "Используйте следующую ссылку для совместного использования вашего чат-бота",
                                            share1: "Ссылка на бота веб-страницы",
                                            share2: "Добавьте iframe бота в html-код вашего сайта",
                                            share3: "Добавьте кнопку чат-бота в правый нижний угол сайта",
                                            select: "Пожалуйста, нажмите на каналы сверху, чтобы настроить",
                                            webTitle: "Заголовок страницы",
                                            telegramStep: {
                                                title: "Telegram процесс работы",
                                                step1: "1. Сначала создайте телеграм-бота с помощью {BotFather}",
                                                step2: "2. Затем введите команду /newbot, чтобы начать создание, и дайте боту имя",
                                                step3: "3. После успешного создания скопируйте токен бота в верхнюю часть этой страницы"
                                            },
                                            dingtalkStep: {
                                                name: "DingTalk",
                                                title: "Процесс работы с открытой платформой DingTalk",
                                                step1: "На открытой платформе {Name} перейдите на страницу приложений --\x3e внутренняя разработка для предприятий --\x3e выберите нужного бота --\x3e управление разработкой",
                                                step2: "IP-адрес сервера",
                                                step3: "Адрес для получения сообщений",
                                                step4: "Отсканируйте код для присоединения к группе общения в DingTalk"
                                            },
                                            larkStep: {
                                                name: "Открытая платформа Feishu",
                                                title: "Процесс работы с открытой платформой Feishu",
                                                step1: "На странице настройки запроса в {Name} введите адрес",
                                                step2: "Не открывайте Encrypt Key для своего приложения",
                                                step3: "Отсканируйте код для присоединения к группе общения в Feishu"
                                            },
                                            copy: "Копировать",
                                            mobileTip: "Мобильный интерфейс"
                                        },
                                        upload: {
                                            tips2: "Бесплатный пользователь может загрузить файлы максимальным размером {Number}M",
                                            tips3: "Поддерживаются файлы с расширением pdf, docx, doc",
                                            tips4: "Доступ к нативному API ChatGPT 3.5",
                                            uploaded: "Загружено:",
                                            used: "Вы использовали все доступные бесплатные загрузки документов",
                                            tips: "Вы можете загрузить максимум {Number} документов",
                                            error: "Загрузка не удалась"
                                        },
                                        webchat: {
                                            hello: "Чем я могу вам помочь?",
                                            error: "Неправильная ссылка для совместного использования",
                                            error2: "Неверная настройка чат-бота",
                                            send: "Отправить",
                                            typing: "Набор текста ...",
                                            submit: "Ctrl+Enter Отправить",
                                            subtitle: "Платформа на заказ chatgpt для создания чат-ботов"
                                        }
                                    }
                                },
                                table: {
                                    actions: "Действия"
                                },
                                title: "Чатхаб | платформа чат-ботов для обслуживания клиентов GPT",
                                keywords: "Чатхаб, чатГПТ, подключение GPT для обслуживания клиентов, интеллектуальный GPT для обслуживания клиентов, система ответов на вопросы от клиентов GPT, подключение GPT к DingTalk, WeChat for work и Feishu",
                                description: "Чат-бот система обслуживания клиентов GPT, система чат-ботов для обслуживания клиентов GPT, подключение GPT для обслуживания клиентов, подключение GPT к DingTalk, WeChat for work и Feishu, веб-чат-бот система обслуживания клиентов GPT"
                            }
                        }
                    },
                    vueI18nLoader: !0,
                    locales: [{
                        code: "en",
                        iso: "en"
                    }, {
                        code: "zh",
                        iso: "zh",
                        isCatchallLocale: !0
                    }, {
                        code: "zh-tw",
                        iso: "zh-tw"
                    }, {
                        code: "zh-hk",
                        iso: "zh-hk"
                    }, {
                        code: "ja",
                        iso: "ja"
                    }, {
                        code: "ko",
                        iso: "ko"
                    }, {
                        code: "de",
                        iso: "de"
                    }, {
                        code: "es",
                        iso: "es"
                    }, {
                        code: "fr",
                        iso: "fr"
                    }, {
                        code: "it",
                        iso: "it"
                    }, {
                        code: "pt",
                        iso: "pt"
                    }, {
                        code: "ru",
                        iso: "ru"
                    }],
                    defaultLocale: "zh",
                    defaultDirection: "ltr",
                    routesNameSeparator: "___",
                    defaultLocaleRouteNameSuffix: "default",
                    sortRoutes: !0,
                    strategy: "prefix",
                    lazy: !1,
                    langDir: null,
                    rootRedirect: null,
                    detectBrowserLanguage: {
                        alwaysRedirect: !1,
                        cookieAge: 365,
                        cookieCrossOrigin: !1,
                        cookieDomain: null,
                        cookieKey: "i18n_redirected",
                        cookieSecure: !1,
                        fallbackLocale: "zh",
                        redirectOn: "root",
                        useCookie: !0
                    },
                    differentDomains: !1,
                    baseUrl: "https://www.chathub.dev",
                    vuex: {
                        moduleName: "i18n",
                        syncRouteParams: !0
                    },
                    parsePages: !0,
                    pages: {},
                    skipSettingLocaleOnNavigate: !1,
                    onBeforeLanguageSwitch: function() {},
                    onLanguageSwitched: function() {
                        return null
                    },
                    seo: !0,
                    normalizedLocales: [{
                        code: "en",
                        iso: "en"
                    }, {
                        code: "zh",
                        iso: "zh",
                        isCatchallLocale: !0
                    }, {
                        code: "zh-tw",
                        iso: "zh-tw"
                    }, {
                        code: "zh-hk",
                        iso: "zh-hk"
                    }, {
                        code: "ja",
                        iso: "ja"
                    }, {
                        code: "ko",
                        iso: "ko"
                    }, {
                        code: "de",
                        iso: "de"
                    }, {
                        code: "es",
                        iso: "es"
                    }, {
                        code: "fr",
                        iso: "fr"
                    }, {
                        code: "it",
                        iso: "it"
                    }, {
                        code: "pt",
                        iso: "pt"
                    }, {
                        code: "ru",
                        iso: "ru"
                    }],
                    localeCodes: ["en", "zh", "zh-tw", "zh-hk", "ja", "ko", "de", "es", "fr", "it", "pt", "ru"],
                    additionalMessages: []
                },
                Qr = (t(1021), t(261), t(133), t(107), t(1022), t(218)),
                Vr = t.n(Qr);

            function Zr(object, r) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(object);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(object, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }

            function Jr(r, o) {
                var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                if (!t) {
                    if (Array.isArray(r) || (t = function(r, o) {
                            if (!r) return;
                            if ("string" == typeof r) return ro(r, o);
                            var t = Object.prototype.toString.call(r).slice(8, -1);
                            "Object" === t && r.constructor && (t = r.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(r);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ro(r, o)
                        }(r)) || o && r && "number" == typeof r.length) {
                        t && (r = t);
                        var i = 0,
                            e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return i >= r.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: r[i++]
                                }
                            },
                            e: function(r) {
                                throw r
                            },
                            f: e
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, l = !0,
                    n = !1;
                return {
                    s: function() {
                        t = t.call(r)
                    },
                    n: function() {
                        var r = t.next();
                        return l = r.done, r
                    },
                    e: function(r) {
                        n = !0, c = r
                    },
                    f: function() {
                        try {
                            l || null == t.return || t.return()
                        } finally {
                            if (n) throw c
                        }
                    }
                }
            }

            function ro(r, o) {
                (null == o || o > r.length) && (o = r.length);
                for (var i = 0, t = new Array(o); i < o; i++) t[i] = r[i];
                return t
            }

            function oo(text) {
                return "[@nuxtjs/i18n] ".concat(text)
            }

            function to(r, o) {
                var t, e = [],
                    c = [],
                    l = Jr(r);
                try {
                    for (l.s(); !(t = l.n()).done;) {
                        var n = t.value,
                            code = n.code,
                            d = n.iso || code;
                        c.push({
                            code: code,
                            iso: d
                        })
                    }
                } catch (r) {
                    l.e(r)
                } finally {
                    l.f()
                }
                var w, f = Jr(o.entries());
                try {
                    var m = function() {
                        var r = Object(B.a)(w.value, 2),
                            t = r[0],
                            l = r[1],
                            n = c.find((function(r) {
                                return r.iso.toLowerCase() === l.toLowerCase()
                            }));
                        if (n) return e.push({
                            code: n.code,
                            score: 1 - t / o.length
                        }), "break"
                    };
                    for (f.s(); !(w = f.n()).done;) {
                        if ("break" === m()) break
                    }
                } catch (r) {
                    f.e(r)
                } finally {
                    f.f()
                }
                var h, v = Jr(o.entries());
                try {
                    var y = function() {
                        var r = Object(B.a)(h.value, 2),
                            t = r[0],
                            l = r[1].split("-")[0].toLowerCase(),
                            n = c.find((function(r) {
                                return r.iso.split("-")[0].toLowerCase() === l
                            }));
                        if (n) return e.push({
                            code: n.code,
                            score: .999 - t / o.length
                        }), "break"
                    };
                    for (v.s(); !(h = v.n()).done;) {
                        if ("break" === y()) break
                    }
                } catch (r) {
                    v.e(r)
                } finally {
                    v.f()
                }
                return e.length > 1 && e.sort((function(r, o) {
                    return r.score === o.score ? o.code.length - r.code.length : o.score - r.score
                })), e.length ? e[0].code : void 0
            }

            function eo(r, o) {
                var t;
                if (t = window.location.host) {
                    var e = r.find((function(r) {
                        return r.domain === t
                    }));
                    if (e) return e.code
                }
                return ""
            }

            function ao(r) {
                return new RegExp("^/(".concat(r.join("|"), ")(?:/|$)"))
            }

            function io(r, o) {
                var t = o.routesNameSeparator,
                    e = o.defaultLocaleRouteNameSuffix,
                    c = "(".concat(r.join("|"), ")"),
                    l = "(?:".concat(t).concat(e, ")?"),
                    n = new RegExp("".concat(t).concat(c).concat(l, "$")),
                    d = ao(r);
                return function(r) {
                    if (r.name) {
                        var o = r.name.match(n);
                        if (o && o.length > 1) return o[1]
                    } else if (r.path) {
                        var t = r.path.match(d);
                        if (t && t.length > 1) return t[1]
                    }
                    return ""
                }
            }

            function co(r, o) {
                var t, e = o.useCookie,
                    c = o.cookieKey,
                    l = o.localeCodes;
                if (e && ((t = Vr.a.get(c)) && l.includes(t))) return t
            }

            function lo(r, o, t) {
                var e = t.useCookie,
                    c = t.cookieAge,
                    n = t.cookieDomain,
                    d = t.cookieKey,
                    w = t.cookieSecure,
                    f = t.cookieCrossOrigin;
                if (e) {
                    var m = function(r) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? Zr(Object(source), !0).forEach((function(o) {
                                Object(l.a)(r, o, source[o])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(source)) : Zr(Object(source)).forEach((function(o) {
                                Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(source, o))
                            }))
                        }
                        return r
                    }({
                        expires: c,
                        path: "/",
                        sameSite: f ? "none" : "lax",
                        secure: f || w
                    }, n ? {
                        domain: n
                    } : {});
                    Vr.a.set(d, r, m)
                }
            }

            function no(r, o) {
                var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                if (!t) {
                    if (Array.isArray(r) || (t = function(r, o) {
                            if (!r) return;
                            if ("string" == typeof r) return go(r, o);
                            var t = Object.prototype.toString.call(r).slice(8, -1);
                            "Object" === t && r.constructor && (t = r.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(r);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return go(r, o)
                        }(r)) || o && r && "number" == typeof r.length) {
                        t && (r = t);
                        var i = 0,
                            e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return i >= r.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: r[i++]
                                }
                            },
                            e: function(r) {
                                throw r
                            },
                            f: e
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, l = !0,
                    n = !1;
                return {
                    s: function() {
                        t = t.call(r)
                    },
                    n: function() {
                        var r = t.next();
                        return l = r.done, r
                    },
                    e: function(r) {
                        n = !0, c = r
                    },
                    f: function() {
                        try {
                            l || null == t.return || t.return()
                        } finally {
                            if (n) throw c
                        }
                    }
                }
            }

            function go(r, o) {
                (null == o || o > r.length) && (o = r.length);
                for (var i = 0, t = new Array(o); i < o; i++) t[i] = r[i];
                return t
            }

            function po(object, r) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(object);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(object, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }

            function so(r) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? po(Object(source), !0).forEach((function(o) {
                        Object(l.a)(r, o, source[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(source)) : po(Object(source)).forEach((function(o) {
                        Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(source, o))
                    }))
                }
                return r
            }

            function wo(r, o) {
                return bo.apply(this, arguments)
            }

            function bo() {
                return (bo = Object(c.a)(regeneratorRuntime.mark((function r(o, t) {
                    var e, c, l;
                    return regeneratorRuntime.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                e = o.app, (c = e.i18n).loadedLanguages || (c.loadedLanguages = []), c.loadedLanguages.includes(t) || ((l = Hr.normalizedLocales.find((function(r) {
                                    return r.code === t
                                }))) ? l.file || console.warn(oo("Could not find lang file for locale ".concat(t))) : console.warn(oo('Attempted to load messages for non-existant locale code "'.concat(t, '"'))));
                            case 4:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })))).apply(this, arguments)
            }

            function fo(r, o, t, e) {
                var c = e.differentDomains,
                    l = e.normalizedLocales;
                if ("function" == typeof r) return r(o);
                if (c && t) {
                    var n = mo(t, o.req, {
                        normalizedLocales: l
                    });
                    if (n) return n
                }
                return r
            }

            function mo(r, o, t) {
                var e, c = t.normalizedLocales.find((function(o) {
                    return o.code === r
                }));
                if (c && c.domain) return Object(Xr.hasProtocol)(c.domain) ? c.domain : (e = window.location.protocol.split(":")[0], "".concat(e, "://").concat(c.domain));
                console.warn(oo("Could not find domain name for locale ".concat(r)))
            }

            function ho(r, o, t) {
                var e = {
                    namespaced: !0,
                    state: function() {
                        return so({}, o.syncRouteParams ? {
                            routeParams: {}
                        } : {})
                    },
                    actions: so({}, o.syncRouteParams ? {
                        setRouteParams: function(r, o) {
                            (0, r.commit)("setRouteParams", o)
                        }
                    } : {}),
                    mutations: so({}, o.syncRouteParams ? {
                        setRouteParams: function(r, o) {
                            r.routeParams = o
                        }
                    } : {}),
                    getters: so({}, o.syncRouteParams ? {
                        localeRouteParams: function(r) {
                            var o = r.routeParams;
                            return function(r) {
                                return o && o[r] || {}
                            }
                        }
                    } : {})
                };
                r.registerModule(o.moduleName, e, {
                    preserveState: !!r.state[o.moduleName]
                })
            }

            function uo(r, o, t, e) {
                var c, l = e || t,
                    n = no(o);
                try {
                    for (n.s(); !(c = n.n()).done;) {
                        var d, w = c.value,
                            f = no(l);
                        try {
                            for (f.s(); !(d = f.n()).done;) {
                                var m = d.value,
                                    h = r.getLocaleMessage(m);
                                r.mergeLocaleMessage(m, w[m]), r.mergeLocaleMessage(m, h)
                            }
                        } catch (r) {
                            f.e(r)
                        } finally {
                            f.f()
                        }
                    }
                } catch (r) {
                    n.e(r)
                } finally {
                    n.f()
                }
            }
            var vo = t(310),
                yo = (t(1032), t(120)),
                xo = function() {
                    var r = Object(c.a)(regeneratorRuntime.mark((function r(o) {
                        var t, e, c, l, n, d, w;
                        return regeneratorRuntime.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if (t = o.app, !o.isHMR) {
                                        r.next = 3;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 3:
                                    return r.next = 5, t.i18n.__onNavigate(o.route);
                                case 5:
                                    e = r.sent, c = Object(B.a)(e, 3), l = c[0], n = c[1], d = c[2], l && n && (w = d ? o.route.query : void 0, o.redirect(l, n, w));
                                case 11:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(o) {
                        return r.apply(this, arguments)
                    }
                }();
            yo.a.nuxti18n = xo;
            var ko = ["params"];

            function _o(object, r) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(object);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(object, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }

            function zo(r) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? _o(Object(source), !0).forEach((function(o) {
                        Object(l.a)(r, o, source[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(source)) : _o(Object(source)).forEach((function(o) {
                        Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(source, o))
                    }))
                }
                return r
            }

            function jo(r, o) {
                var t = So.call(this, r, o);
                return t ? t.route.redirectedFrom || t.route.fullPath : ""
            }

            function Co(r, o) {
                var t = So.call(this, r, o);
                return t ? t.route : void 0
            }

            function Po(r, o) {
                var t = So.call(this, r, o);
                return t ? t.location : void 0
            }

            function So(r, o) {
                if (r) {
                    var t = this.i18n;
                    if (o = o || t.locale) {
                        "string" == typeof r && (r = "/" === r[0] ? {
                            path: r
                        } : {
                            name: r
                        });
                        var e = Object.assign({}, r);
                        if (e.path && !e.name) {
                            var c = this.router.resolve(e).route,
                                l = this.getRouteBaseName(c);
                            if (l) e = {
                                name: Ao(l, o),
                                params: c.params,
                                query: c.query,
                                hash: c.hash
                            };
                            else !(o === Hr.defaultLocale && [Kr.STRATEGIES.PREFIX_EXCEPT_DEFAULT, Kr.STRATEGIES.PREFIX_AND_DEFAULT].includes(Hr.strategy) || Hr.strategy === Kr.STRATEGIES.NO_PREFIX || t.differentDomains) && (e.path = "/".concat(o).concat(e.path)), e.path = Wr.trailingSlash ? Object(Xr.withTrailingSlash)(e.path, !0) : Object(Xr.withoutTrailingSlash)(e.path, !0)
                        } else {
                            e.name || e.path || (e.name = this.getRouteBaseName()), e.name = Ao(e.name, o);
                            var n = e.params;
                            n && void 0 === n[0] && n.pathMatch && (n[0] = n.pathMatch)
                        }
                        var d = this.router.resolve(e);
                        return d.route.name ? d : this.router.resolve(r)
                    }
                }
            }

            function Oo(r) {
                var o = this.getRouteBaseName();
                if (!o) return "";
                var t = this.i18n,
                    e = this.route,
                    c = this.store,
                    l = e.params,
                    n = Object(vo.a)(e, ko),
                    d = {};
                Hr.vuex && Hr.vuex.syncRouteParams && c && (d = c.getters["".concat(Hr.vuex.moduleName, "/localeRouteParams")](r));
                var w = Object.assign({}, n, {
                        name: o,
                        params: zo(zo(zo({}, l), d), {}, {
                            0: l.pathMatch
                        })
                    }),
                    path = this.localePath(w, r);
                if (t.differentDomains) {
                    var f = {
                            differentDomains: t.differentDomains,
                            normalizedLocales: Hr.normalizedLocales
                        },
                        m = mo(r, this.req, f);
                    m && (path = m + path)
                }
                return path
            }

            function To(r) {
                var o = void 0 !== r ? r : this.route;
                if (o && o.name) return o.name.split(Hr.routesNameSeparator)[0]
            }

            function Ao(r, o) {
                var t = r + (Hr.strategy === Kr.STRATEGIES.NO_PREFIX ? "" : Hr.routesNameSeparator + o);
                return o === Hr.defaultLocale && Hr.strategy === Kr.STRATEGIES.PREFIX_AND_DEFAULT && (t += Hr.routesNameSeparator + Hr.defaultLocaleRouteNameSuffix), t
            }
            var No = function(r) {
                    return function() {
                        var o = {
                            getRouteBaseName: this.getRouteBaseName,
                            i18n: this.$i18n,
                            localePath: this.localePath,
                            localeRoute: this.localeRoute,
                            localeLocation: this.localeLocation,
                            req: null,
                            route: this.$route,
                            router: this.$router,
                            store: this.$store
                        };
                        return r.call.apply(r, [o].concat(Array.prototype.slice.call(arguments)))
                    }
                },
                Eo = function(r, o) {
                    return function() {
                        var t = r.app,
                            e = (r.req, r.route),
                            c = r.store,
                            l = {
                                getRouteBaseName: t.getRouteBaseName,
                                i18n: t.i18n,
                                localePath: t.localePath,
                                localeLocation: t.localeLocation,
                                localeRoute: t.localeRoute,
                                req: null,
                                route: e,
                                router: t.router,
                                store: c
                            };
                        return o.call.apply(o, [l].concat(Array.prototype.slice.call(arguments)))
                    }
                },
                Io = {
                    install: function(r) {
                        r.mixin({
                            methods: {
                                localePath: No(jo),
                                localeRoute: No(Co),
                                localeLocation: No(Po),
                                switchLocalePath: No(Oo),
                                getRouteBaseName: No(To)
                            }
                        })
                    }
                },
                Ro = function(r) {
                    n.default.use(Io);
                    var o = r.app,
                        t = r.store;
                    o.localePath = r.localePath = Eo(r, jo), o.localeRoute = r.localeRoute = Eo(r, Co), o.localeLocation = r.localeLocation = Eo(r, Po), o.switchLocalePath = r.switchLocalePath = Eo(r, Oo), o.getRouteBaseName = r.getRouteBaseName = Eo(r, To), t && (t.localePath = o.localePath, t.localeRoute = o.localeRoute, t.localeLocation = o.localeLocation, t.switchLocalePath = o.switchLocalePath, t.getRouteBaseName = o.getRouteBaseName)
                },
                Lo = (t(144), t(219)),
                Do = t(100);
            t(1033), t(1040), t(1041), t(1043), t(1044), t(1045), t(1046), t(1048), t(1049), t(1050), t(1051), t(1052), t(1053), t(1054), t(189);

            function Mo(object, r) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(object);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(object, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }

            function Go(r) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? Mo(Object(source), !0).forEach((function(o) {
                        Object(l.a)(r, o, source[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(source)) : Mo(Object(source)).forEach((function(o) {
                        Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(source, o))
                    }))
                }
                return r
            }

            function $o(r, o) {
                var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                if (!t) {
                    if (Array.isArray(r) || (t = function(r, o) {
                            if (!r) return;
                            if ("string" == typeof r) return Fo(r, o);
                            var t = Object.prototype.toString.call(r).slice(8, -1);
                            "Object" === t && r.constructor && (t = r.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(r);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Fo(r, o)
                        }(r)) || o && r && "number" == typeof r.length) {
                        t && (r = t);
                        var i = 0,
                            e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return i >= r.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: r[i++]
                                }
                            },
                            e: function(r) {
                                throw r
                            },
                            f: e
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, l = !0,
                    n = !1;
                return {
                    s: function() {
                        t = t.call(r)
                    },
                    n: function() {
                        var r = t.next();
                        return l = r.done, r
                    },
                    e: function(r) {
                        n = !0, c = r
                    },
                    f: function() {
                        try {
                            l || null == t.return || t.return()
                        } finally {
                            if (n) throw c
                        }
                    }
                }
            }

            function Fo(r, o) {
                (null == o || o > r.length) && (o = r.length);
                for (var i = 0, t = new Array(o); i < o; i++) t[i] = r[i];
                return t
            }

            function Uo() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = r.addDirAttribute,
                    t = void 0 !== o && o,
                    c = r.addSeoAttributes,
                    l = void 0 !== c && c;
                if (!this.$i18n) return {};
                var n = {
                        htmlAttrs: {},
                        link: [],
                        meta: []
                    },
                    d = this.$i18n.localeProperties,
                    f = d.iso,
                    m = d.dir || Hr.defaultDirection;
                if (t && (n.htmlAttrs.dir = m), l && (w.a.hasMetaInfo ? w.a.hasMetaInfo(this) : this._hasMetaInfo) && this.$i18n.locale && this.$i18n.locales) {
                    f && (n.htmlAttrs.lang = f);
                    var h = this.$i18n.locales;
                    (function(r, o, link) {
                        if (Hr.strategy === Kr.STRATEGIES.NO_PREFIX) return;
                        var t, e = new Map,
                            c = $o(r);
                        try {
                            for (c.s(); !(t = c.n()).done;) {
                                var l = t.value,
                                    n = l.iso;
                                if (n) {
                                    var d = n.split("-"),
                                        w = Object(B.a)(d, 2),
                                        f = w[0],
                                        m = w[1];
                                    f && m && (l.isCatchallLocale || !e.has(f)) && e.set(f, l), e.set(n, l)
                                } else console.warn(oo("Locale ISO code is required to generate alternate link"))
                            }
                        } catch (r) {
                            c.e(r)
                        } finally {
                            c.f()
                        }
                        var h, v = $o(e.entries());
                        try {
                            for (v.s(); !(h = v.n()).done;) {
                                var x = Object(B.a)(h.value, 2),
                                    k = x[0],
                                    _ = x[1],
                                    z = this.switchLocalePath(_.code);
                                z && link.push({
                                    hid: "i18n-alt-".concat(k),
                                    rel: "alternate",
                                    href: y(z, o),
                                    hreflang: k
                                })
                            }
                        } catch (r) {
                            v.e(r)
                        } finally {
                            v.f()
                        }
                        if (Hr.defaultLocale) {
                            var j = this.switchLocalePath(Hr.defaultLocale);
                            j && link.push({
                                hid: "i18n-xd",
                                rel: "alternate",
                                href: y(j, o),
                                hreflang: "x-default"
                            })
                        }
                    }).bind(this)(h, this.$i18n.__baseUrl, n.link),
                        function(r, link, o) {
                            var t = this.localeRoute(Go(Go({}, this.$route), {}, {
                                name: this.getRouteBaseName()
                            }));
                            if (t) {
                                var e = y(t.path, r),
                                    c = "boolean" != typeof o && o.canonicalQueries || [];
                                if (c.length) {
                                    var l, n = t.query,
                                        d = new URLSearchParams,
                                        w = $o(c);
                                    try {
                                        var f = function() {
                                            var r = l.value;
                                            if (r in n) {
                                                var o = n[r];
                                                Array.isArray(o) ? o.forEach((function(o) {
                                                    return d.append(r, o || "")
                                                })) : d.append(r, o || "")
                                            }
                                        };
                                        for (w.s(); !(l = w.n()).done;) f()
                                    } catch (r) {
                                        w.e(r)
                                    } finally {
                                        w.f()
                                    }
                                    var m = d.toString();
                                    m && (e = "".concat(e, "?").concat(m))
                                }
                                link.push({
                                    hid: "i18n-can",
                                    rel: "canonical",
                                    href: e
                                })
                            }
                        }.bind(this)(this.$i18n.__baseUrl, n.link, l),
                        function(r, o, meta) {
                            var t = r && o;
                            if (!t) return;
                            meta.push({
                                hid: "i18n-og",
                                property: "og:locale",
                                content: v(o)
                            })
                        }.bind(this)(d, f, n.meta),
                        function(r, o, meta) {
                            var t = r.filter((function(r) {
                                var t = r.iso;
                                return t && t !== o
                            }));
                            if (t.length) {
                                var c = t.map((function(r) {
                                    return {
                                        hid: "i18n-og-alt-".concat(r.iso),
                                        property: "og:locale:alternate",
                                        content: v(r.iso)
                                    }
                                }));
                                meta.push.apply(meta, Object(e.a)(c))
                            }
                        }.bind(this)(h, f, n.meta)
                }

                function v(r) {
                    return (r || "").replace(/-/g, "_")
                }

                function y(r, o) {
                    return r.match(/^https?:\/\//) ? r : o + r
                }
                return n
            }

            function Bo(r, o) {
                var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
                if (!t) {
                    if (Array.isArray(r) || (t = function(r, o) {
                            if (!r) return;
                            if ("string" == typeof r) return Yo(r, o);
                            var t = Object.prototype.toString.call(r).slice(8, -1);
                            "Object" === t && r.constructor && (t = r.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(r);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Yo(r, o)
                        }(r)) || o && r && "number" == typeof r.length) {
                        t && (r = t);
                        var i = 0,
                            e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return i >= r.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: r[i++]
                                }
                            },
                            e: function(r) {
                                throw r
                            },
                            f: e
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var c, l = !0,
                    n = !1;
                return {
                    s: function() {
                        t = t.call(r)
                    },
                    n: function() {
                        var r = t.next();
                        return l = r.done, r
                    },
                    e: function(r) {
                        n = !0, c = r
                    },
                    f: function() {
                        try {
                            l || null == t.return || t.return()
                        } finally {
                            if (n) throw c
                        }
                    }
                }
            }

            function Yo(r, o) {
                (null == o || o > r.length) && (o = r.length);
                for (var i = 0, t = new Array(o); i < o; i++) t[i] = r[i];
                return t
            }
            n.default.use(Lo.a);
            var qo = function() {
                    var r = Object(c.a)(regeneratorRuntime.mark((function r(o) {
                        var t, e, l, d, w, f, m, h, v, y, x, k, _, z, j, C, P, S, O, T, A, N, E, I, R, L, D, M, G, $, F, U, Y, X, K, W, H, Q, V, Z;
                        return regeneratorRuntime.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    t = o.app, e = o.route, l = o.store, d = o.req, o.res, w = o.redirect, Hr.vuex && l && ho(l, Hr.vuex, Hr.localeCodes), f = Hr.lazy, f && (!0 === f || !0 !== f.skipNuxtState), r.next = 9;
                                    break;
                                case 7:
                                    m = r.sent.default, o.beforeNuxtRender((function(r) {
                                        var o = r.nuxtState,
                                            e = {},
                                            c = t.i18n,
                                            l = c.fallbackLocale,
                                            n = c.locale;
                                        if (n && n !== l) {
                                            var d = t.i18n._getMessages()[n];
                                            if (d) try {
                                                m(d), e[n] = d
                                            } catch (r) {}
                                        }
                                        o.__i18n = {
                                            langs: e
                                        }
                                    }));
                                case 9:
                                    if (h = Hr.detectBrowserLanguage, v = h.alwaysRedirect, y = h.fallbackLocale, x = h.redirectOn, k = h.useCookie, _ = h.cookieAge, z = h.cookieKey, j = h.cookieDomain, C = h.cookieSecure, P = h.cookieCrossOrigin, S = io(Hr.localeCodes, {
                                            routesNameSeparator: Hr.routesNameSeparator,
                                            defaultLocaleRouteNameSuffix: Hr.defaultLocaleRouteNameSuffix
                                        }), O = function() {
                                            var r = Object(c.a)(regeneratorRuntime.mark((function r(e) {
                                                var c, l, d, f, m, h, v, y, x, _, z, j, C, P, O, T, A, N, E = arguments;
                                                return regeneratorRuntime.wrap((function(r) {
                                                    for (;;) switch (r.prev = r.next) {
                                                        case 0:
                                                            if (c = (E.length > 1 && void 0 !== E[1] ? E[1] : {}).initialSetup, l = void 0 !== c && c, e) {
                                                                r.next = 3;
                                                                break
                                                            }
                                                            return r.abrupt("return");
                                                        case 3:
                                                            if (l || !t.i18n.differentDomains) {
                                                                r.next = 5;
                                                                break
                                                            }
                                                            return r.abrupt("return");
                                                        case 5:
                                                            if (d = t.i18n.locale, e !== d) {
                                                                r.next = 8;
                                                                break
                                                            }
                                                            return r.abrupt("return");
                                                        case 8:
                                                            if (!(f = t.i18n.onBeforeLanguageSwitch(d, e, l, o)) || !t.i18n.localeCodes.includes(f)) {
                                                                r.next = 13;
                                                                break
                                                            }
                                                            if (f !== d) {
                                                                r.next = 12;
                                                                break
                                                            }
                                                            return r.abrupt("return");
                                                        case 12:
                                                            e = f;
                                                        case 13:
                                                            if (k && t.i18n.setLocaleCookie(e), !Hr.langDir) {
                                                                r.next = 30;
                                                                break
                                                            }
                                                            if (m = t.i18n.fallbackLocale, !Hr.lazy) {
                                                                r.next = 26;
                                                                break
                                                            }
                                                            if (!m) {
                                                                r.next = 22;
                                                                break
                                                            }
                                                            return h = [], Array.isArray(m) ? h = m.map((function(r) {
                                                                return wo(o, r)
                                                            })) : "object" === Object(qr.a)(m) ? (m[e] && (h = h.concat(m[e].map((function(r) {
                                                                return wo(o, r)
                                                            })))), m.default && (h = h.concat(m.default.map((function(r) {
                                                                return wo(o, r)
                                                            }))))) : e !== m && h.push(wo(o, m)), r.next = 22, Promise.all(h);
                                                        case 22:
                                                            return r.next = 24, wo(o, e);
                                                        case 24:
                                                            r.next = 28;
                                                            break;
                                                        case 26:
                                                            return r.next = 28, Promise.all(Hr.localeCodes.map((function(r) {
                                                                return wo(o, r)
                                                            })));
                                                        case 28:
                                                            r.next = 31;
                                                            break;
                                                        case 30:
                                                            uo(t.i18n, Hr.additionalMessages, Hr.localeCodes);
                                                        case 31:
                                                            for (t.i18n.locale = e, v = Hr.normalizedLocales.find((function(r) {
                                                                    return r.code === e
                                                                })) || {
                                                                    code: e
                                                                }, y = 0, x = Object.keys(t.i18n.localeProperties); y < x.length; y++) _ = x[y], t.i18n.localeProperties[_] = void 0;
                                                            for (z = 0, j = Object.entries(v); z < j.length; z++) C = Object(B.a)(j[z], 2), P = C[0], O = C[1], n.default.set(t.i18n.localeProperties, P, Object(Do.a)(O));
                                                            T = o.route, A = "", !1, t.i18n.differentDomains || Hr.strategy === Kr.STRATEGIES.NO_PREFIX || S(T) === e && (Hr.strategy !== Kr.STRATEGIES.PREFIX_AND_DEFAULT || e !== Hr.defaultLocale) || !(N = t.switchLocalePath(e) || t.localePath(T.fullPath, e)) || Object(Xr.isEqual)(N, T.fullPath) || N.startsWith("//") || (A = N), l ? t.i18n.__redirect = A : (t.i18n.onLanguageSwitched(d, e), A && w(A));
                                                        case 40:
                                                        case "end":
                                                            return r.stop()
                                                    }
                                                }), r)
                                            })));
                                            return function(o) {
                                                return r.apply(this, arguments)
                                            }
                                        }(), T = function() {
                                            var r = Object(c.a)(regeneratorRuntime.mark((function r(e) {
                                                var c, path, l, n, d;
                                                return regeneratorRuntime.wrap((function(r) {
                                                    for (;;) switch (r.prev = r.next) {
                                                        case 0:
                                                            if ("/" !== e.path || !Hr.rootRedirect) {
                                                                r.next = 5;
                                                                break
                                                            }
                                                            return c = 302, path = Hr.rootRedirect, "string" != typeof Hr.rootRedirect && (c = Hr.rootRedirect.statusCode, path = Hr.rootRedirect.path), r.abrupt("return", [c, "/".concat(path), !0]);
                                                        case 5:
                                                            if (!(l = t.i18n.__redirect)) {
                                                                r.next = 9;
                                                                break
                                                            }
                                                            return t.i18n.__redirect = null, r.abrupt("return", [302, l]);
                                                        case 9:
                                                            if (n = {
                                                                    differentDomains: Hr.differentDomains,
                                                                    normalizedLocales: Hr.normalizedLocales
                                                                }, t.i18n.__baseUrl = fo(Hr.baseUrl, o, t.i18n.locale, n), d = Hr.detectBrowserLanguage && I(e) || !Hr.differentDomains && Hr.strategy !== Kr.STRATEGIES.NO_PREFIX && S(e) || t.i18n.locale || t.i18n.defaultLocale || "", !Hr.skipSettingLocaleOnNavigate) {
                                                                r.next = 17;
                                                                break
                                                            }
                                                            t.i18n.__pendingLocale = d, t.i18n.__pendingLocalePromise = new Promise((function(r) {
                                                                t.i18n.__resolvePendingLocalePromise = r
                                                            })), r.next = 19;
                                                            break;
                                                        case 17:
                                                            return r.next = 19, t.i18n.setLocale(d);
                                                        case 19:
                                                            return r.abrupt("return", [null, null]);
                                                        case 20:
                                                        case "end":
                                                            return r.stop()
                                                    }
                                                }), r)
                                            })));
                                            return function(o) {
                                                return r.apply(this, arguments)
                                            }
                                        }(), A = function() {
                                            var r = Object(c.a)(regeneratorRuntime.mark((function r() {
                                                return regeneratorRuntime.wrap((function(r) {
                                                    for (;;) switch (r.prev = r.next) {
                                                        case 0:
                                                            if (t.i18n.__pendingLocale) {
                                                                r.next = 2;
                                                                break
                                                            }
                                                            return r.abrupt("return");
                                                        case 2:
                                                            return r.next = 4, t.i18n.setLocale(t.i18n.__pendingLocale);
                                                        case 4:
                                                            t.i18n.__resolvePendingLocalePromise(""), t.i18n.__pendingLocale = null;
                                                        case 6:
                                                        case "end":
                                                            return r.stop()
                                                    }
                                                }), r)
                                            })));
                                            return function() {
                                                return r.apply(this, arguments)
                                            }
                                        }(), N = function() {
                                            var r = Object(c.a)(regeneratorRuntime.mark((function r() {
                                                return regeneratorRuntime.wrap((function(r) {
                                                    for (;;) switch (r.prev = r.next) {
                                                        case 0:
                                                            if (!t.i18n.__pendingLocale) {
                                                                r.next = 3;
                                                                break
                                                            }
                                                            return r.next = 3, t.i18n.__pendingLocalePromise;
                                                        case 3:
                                                        case "end":
                                                            return r.stop()
                                                    }
                                                }), r)
                                            })));
                                            return function() {
                                                return r.apply(this, arguments)
                                            }
                                        }(), E = function() {
                                            return "undefined" != typeof navigator && navigator.languages ? to(Hr.normalizedLocales, navigator.languages) : d && void 0 !== d.headers["accept-language"] ? to(Hr.normalizedLocales, d.headers["accept-language"].split(",").map((function(r) {
                                                return r.split(";")[0]
                                            }))) : void 0
                                        }, I = function(r) {
                                            if (Hr.strategy !== Kr.STRATEGIES.NO_PREFIX)
                                                if (x === Kr.REDIRECT_ON_OPTIONS.ROOT) {
                                                    if ("/" !== r.path) return ""
                                                } else if (x === Kr.REDIRECT_ON_OPTIONS.NO_PREFIX && !v && r.path.match(ao(Hr.localeCodes))) return "";
                                            var o;
                                            k && (o = t.i18n.getLocaleCookie()) || (o = E());
                                            var e = o || y;
                                            return !e || k && !v && t.i18n.getLocaleCookie() || e === t.i18n.locale ? "" : e
                                        }, R = function(r) {
                                            r.locales = Object(Do.a)(Hr.locales), r.localeCodes = Object(Do.a)(Hr.localeCodes), r.localeProperties = n.default.observable(Object(Do.a)(Hr.normalizedLocales.find((function(o) {
                                                return o.code === r.locale
                                            })) || {
                                                code: r.locale
                                            })), r.defaultLocale = Hr.defaultLocale, r.differentDomains = Hr.differentDomains, r.onBeforeLanguageSwitch = Hr.onBeforeLanguageSwitch, r.onLanguageSwitched = Hr.onLanguageSwitched, r.setLocaleCookie = function(r) {
                                                return lo(r, 0, {
                                                    useCookie: k,
                                                    cookieAge: _,
                                                    cookieDomain: j,
                                                    cookieKey: z,
                                                    cookieSecure: C,
                                                    cookieCrossOrigin: P
                                                })
                                            }, r.getLocaleCookie = function() {
                                                return co(0, {
                                                    useCookie: k,
                                                    cookieKey: z,
                                                    localeCodes: Hr.localeCodes
                                                })
                                            }, r.setLocale = function(r) {
                                                return O(r)
                                            }, r.getBrowserLocale = function() {
                                                return E()
                                            }, r.finalizePendingLocaleChange = A, r.waitForPendingLocaleChange = N, r.__baseUrl = t.i18n.__baseUrl, r.__pendingLocale = t.i18n.__pendingLocale, r.__pendingLocalePromise = t.i18n.__pendingLocalePromise, r.__resolvePendingLocalePromise = t.i18n.__resolvePendingLocalePromise
                                        }, "function" != typeof Hr.vueI18n) {
                                        r.next = 24;
                                        break
                                    }
                                    return r.next = 21, Hr.vueI18n(o);
                                case 21:
                                    r.t0 = r.sent, r.next = 25;
                                    break;
                                case 24:
                                    r.t0 = Object(Do.a)(Hr.vueI18n);
                                case 25:
                                    if ((L = r.t0).componentInstanceCreatedListener = R, t.i18n = o.i18n = new Lo.a(L), t.i18n.locale = "", t.i18n.fallbackLocale = L.fallbackLocale || "", l && (l.$i18n = t.i18n, l.state.localeDomains)) {
                                        D = Bo(Hr.normalizedLocales.entries());
                                        try {
                                            for (D.s(); !(M = D.n()).done;) G = Object(B.a)(M.value, 2), $ = G[0], F = G[1], (U = l.state.localeDomains[F.code]) && (F.domain = U, "string" != typeof(Y = Hr.locales[$]) && (Y.domain = U))
                                        } catch (r) {
                                            D.e(r)
                                        } finally {
                                            D.f()
                                        }
                                    }
                                    return R(t.i18n), X = {
                                        differentDomains: Hr.differentDomains,
                                        normalizedLocales: Hr.normalizedLocales
                                    }, t.i18n.__baseUrl = fo(Hr.baseUrl, o, "", X), t.i18n.__onNavigate = T, n.default.prototype.$nuxtI18nHead = Uo, (K = Hr.detectBrowserLanguage ? I(e) : "") || (t.i18n.differentDomains ? (W = eo(Hr.normalizedLocales), K = W) : Hr.strategy !== Kr.STRATEGIES.NO_PREFIX && (H = S(e), K = H)), !K && k && (K = t.i18n.getLocaleCookie()), K || (K = t.i18n.defaultLocale || ""), r.next = 42, O(K, {
                                        initialSetup: !0
                                    });
                                case 42:
                                    r.next = 50;
                                    break;
                                case 45:
                                    Q = r.sent, V = Object(B.a)(Q, 2), V[0], (Z = V[1]) && location.assign(Object(Xr.joinURL)(o.base, Z));
                                case 50:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(o) {
                        return r.apply(this, arguments)
                    }
                }(),
                Xo = t(72),
                Ko = t.n(Xo),
                Wo = t(314),
                Ho = t.n(Wo);
            n.default.use(Ko.a, {
                locale: Ho.a
            });
            var Qo = function(r, o) {
                    var t = r.app,
                        e = (r.route, r.$axios),
                        c = (r.store, r.redirect),
                        l = e.create({});
                    l.setBaseURL("https://api.chathub.dev"), l.onResponse((function(r) {
                        if (console.log(r), 200 === r.status) {
                            if (0 === r.data.code) {
                                var o = r;
                                try {
                                    o.data.headers = r.headers
                                } catch (r) {}
                                return o
                            }
                            return Promise.reject(r.data)
                        }
                        return Promise.reject(r)
                    })), l.onError((function(r) {
                        if ("number" == typeof r.code) return 9 === r.code ? (Xo.Message.error(t.i18n._vm.messages[t.i18n._vm.locale].chathub.home.pleaseLogin), "traditional" !== t.context.nuxtState.layout && c(t.localePath("/")), Promise.reject(r)) : (r.message && Xo.Message.error(r.message), Promise.reject(r));
                        var code = parseInt(r.response && r.response.status);
                        return Xo.Message.error("Error" + (code ? ": ".concat(code) : "")), Promise.reject(r)
                    })), o("api", l)
                },
                Vo = function(r) {
                    var o = r.app,
                        t = r.nuxtState,
                        e = r.store;
                    o.router.beforeEach((function(r, c, l) {
                        e.state.user.userInfo.userId || "/" === r.meta.path || "traditional" === t.layout || "default" === t.layout ? l() : l(o.localePath("/"))
                    }))
                },
                Zo = t(74),
                Jo = function(r) {
                    var o = r.store;
                    o.commit("user/setUserInfo", Object(Zo.b)()), o.commit("user/setCurKey", Object(Zo.a)())
                },
                ot = function(r) {
                    var o = r.app;
                    n.default.prototype.$customScrollTop = function() {
                        document.getElementById("__layout").scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    }, n.default.prototype.$doCopy = function(r) {
                        var textarea = document.createElement("textarea");
                        if (textarea.value = r, document.body.appendChild(textarea), textarea.select(), document.execCommand("copy")) {
                            document.execCommand("copy");
                            try {
                                Xo.Message.success(o.i18n._vm.messages[o.i18n._vm.locale].chathub.openai.steps.copysuccess)
                            } catch (r) {}
                        }
                        document.body.removeChild(textarea)
                    }
                };

            function tt(object, r) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(object);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(object, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }

            function et(r) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? tt(Object(source), !0).forEach((function(o) {
                        Object(l.a)(r, o, source[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(source)) : tt(Object(source)).forEach((function(o) {
                        Object.defineProperty(r, o, Object.getOwnPropertyDescriptor(source, o))
                    }))
                }
                return r
            }
            n.default.component(m.a.name, m.a), n.default.component(v.a.name, et(et({}, v.a), {}, {
                render: function(r, o) {
                    return v.a._warned || (v.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), v.a.render(r, o)
                }
            })), n.default.component(D.name, D), n.default.component("NChild", D), n.default.component(Y.name, Y), Object.defineProperty(n.default.prototype, "$nuxt", {
                get: function() {
                    var r = this.$root ? this.$root.$options.$nuxt : null;
                    return r || "undefined" == typeof window ? r : window.$nuxt
                },
                configurable: !0
            }), n.default.use(w.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var at = {
                    name: "page",
                    mode: "out-in",
                    appear: !1,
                    appearClass: "appear",
                    appearActiveClass: "appear-active",
                    appearToClass: "appear-to"
                },
                it = d.a.Store.prototype.registerModule;

            function ct(path, r) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    t = Array.isArray(path) ? !!path.reduce((function(r, path) {
                        return r && r[path]
                    }), this.state) : path in this.state;
                return it.call(this, path, r, et({
                    preserveState: t
                }, o))
            }

            function lt(r) {
                return nt.apply(this, arguments)
            }

            function nt() {
                return nt = Object(c.a)(regeneratorRuntime.mark((function r(o) {
                    var t, l, d, w, f, m, path, h, v = arguments;
                    return regeneratorRuntime.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return h = function(r, o) {
                                    if (!r) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === o) throw new Error("inject('".concat(r, "', value) has no value provided"));
                                    w[r = "$" + r] = o, w.context[r] || (w.context[r] = o), l[r] = w[r];
                                    var t = "__nuxt_" + r + "_installed__";
                                    n.default[t] || (n.default[t] = !0, n.default.use((function() {
                                        Object.prototype.hasOwnProperty.call(n.default.prototype, r) || Object.defineProperty(n.default.prototype, r, {
                                            get: function() {
                                                return this.$root.$options[r]
                                            }
                                        })
                                    })))
                                }, t = v.length > 1 && void 0 !== v[1] ? v[1] : {}, l = Cr(o), r.next = 5, L(0, t);
                            case 5:
                                return d = r.sent, l.$router = d, l.registerModule = ct, w = et({
                                    head: function() {
                                        var r = this.$nuxtI18nHead({
                                            addSeoAttributes: !0
                                        });
                                        return {
                                            title: this.$t("title"),
                                            htmlAttrs: et({}, r.htmlAttrs),
                                            meta: [{
                                                charset: "utf-8"
                                            }, {
                                                name: "viewport",
                                                content: "width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover"
                                            }, {
                                                name: "applicable-device",
                                                content: "pc"
                                            }, {
                                                name: "applicable-device",
                                                content: "mobile"
                                            }, {
                                                name: "applicable-device",
                                                content: "pc,mobile"
                                            }, {
                                                hid: "description",
                                                name: "description",
                                                content: this.$t("description")
                                            }, {
                                                hid: "keywords",
                                                name: "keywords",
                                                content: this.$t("keywords")
                                            }].concat(Object(e.a)(r.meta)),
                                            link: [{
                                                rel: "icon",
                                                type: "image/x-icon",
                                                href: "/favicon.ico"
                                            }, {
                                                rel: "alternate",
                                                hreflang: "x-default",
                                                href: "https://www.chathub.dev"
                                            }].concat(Object(e.a)(r.link)),
                                            script: [{
                                                src: "/51.la.js"
                                            }, {
                                                src: "https://www.googletagmanager.com/gtag/js?id=G-D1XNH66KRX",
                                                async: !0,
                                                body: !0
                                            }, {
                                                src: "/gtag.js",
                                                body: !0
                                            }]
                                        }
                                    },
                                    store: l,
                                    router: d,
                                    nuxt: {
                                        defaultTransition: at,
                                        transitions: [at],
                                        setTransitions: function(r) {
                                            return Array.isArray(r) || (r = [r]), r = r.map((function(r) {
                                                return r = r ? "string" == typeof r ? Object.assign({}, at, {
                                                    name: r
                                                }) : Object.assign({}, at, r) : at
                                            })), this.$options.nuxt.transitions = r, r
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function(r) {
                                            r = r || null, w.context._errored = Boolean(r), r = r ? Object(k.p)(r) : null;
                                            var t = w.nuxt;
                                            return this && (t = this.nuxt || this.$options.nuxt), t.dateErr = Date.now(), t.err = r, o && (o.nuxt.error = r), r
                                        }
                                    }
                                }, _r), l.app = w, f = o ? o.next : function(r) {
                                    return w.router.push(r)
                                }, o ? m = d.resolve(o.url).route : (path = Object(k.f)(d.options.base, d.options.mode), m = d.resolve(path).route), r.next = 14, Object(k.t)(w, {
                                    store: l,
                                    route: m,
                                    next: f,
                                    error: w.nuxt.error.bind(w),
                                    payload: o ? o.payload : void 0,
                                    req: o ? o.req : void 0,
                                    res: o ? o.res : void 0,
                                    beforeRenderFns: o ? o.beforeRenderFns : void 0,
                                    beforeSerializeFns: o ? o.beforeSerializeFns : void 0,
                                    ssrContext: o
                                });
                            case 14:
                                if (h("config", t), window.__NUXT__ && window.__NUXT__.state && l.replaceState(window.__NUXT__.state), "function" != typeof Yr) {
                                    r.next = 20;
                                    break
                                }
                                return r.next = 20, Yr(w.context, h);
                            case 20:
                                r.next = 23;
                                break;
                            case 23:
                                if ("function" != typeof Ro) {
                                    r.next = 26;
                                    break
                                }
                                return r.next = 26, Ro(w.context, h);
                            case 26:
                                if ("function" != typeof qo) {
                                    r.next = 29;
                                    break
                                }
                                return r.next = 29, qo(w.context, h);
                            case 29:
                                r.next = 32;
                                break;
                            case 32:
                                if ("function" != typeof Qo) {
                                    r.next = 35;
                                    break
                                }
                                return r.next = 35, Qo(w.context, h);
                            case 35:
                                if ("function" != typeof Vo) {
                                    r.next = 38;
                                    break
                                }
                                return r.next = 38, Vo(w.context, h);
                            case 38:
                                if ("function" != typeof Jo) {
                                    r.next = 41;
                                    break
                                }
                                return r.next = 41, Jo(w.context, h);
                            case 41:
                                if ("function" != typeof ot) {
                                    r.next = 44;
                                    break
                                }
                                return r.next = 44, ot(w.context, h);
                            case 44:
                                return r.next = 47, new Promise((function(r, o) {
                                    if (!d.resolve(w.context.route.fullPath).route.matched.length) return r();
                                    d.replace(w.context.route.fullPath, r, (function(t) {
                                        if (!t._isRouter) return o(t);
                                        if (2 !== t.type) return r();
                                        var e = d.afterEach(function() {
                                            var o = Object(c.a)(regeneratorRuntime.mark((function o(t, c) {
                                                return regeneratorRuntime.wrap((function(o) {
                                                    for (;;) switch (o.prev = o.next) {
                                                        case 0:
                                                            return o.next = 3, Object(k.j)(t);
                                                        case 3:
                                                            w.context.route = o.sent, w.context.params = t.params || {}, w.context.query = t.query || {}, e(), r();
                                                        case 8:
                                                        case "end":
                                                            return o.stop()
                                                    }
                                                }), o)
                                            })));
                                            return function(r, t) {
                                                return o.apply(this, arguments)
                                            }
                                        }())
                                    }))
                                }));
                            case 47:
                                return r.abrupt("return", {
                                    store: l,
                                    app: w,
                                    router: d
                                });
                            case 48:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                }))), nt.apply(this, arguments)
            }
        },
        74: function(r, o, t) {
            "use strict";
            t.d(o, "b", (function() {
                return l
            })), t.d(o, "a", (function() {
                return n
            })), t.d(o, "f", (function() {
                return d
            })), t.d(o, "e", (function() {
                return w
            })), t.d(o, "d", (function() {
                return f
            })), t.d(o, "c", (function() {
                return m
            }));
            var e = t(40),
                c = !0;

            function l() {
                return c && Object(e.c)("userInfo") || {}
            }

            function n() {
                return c && Object(e.c)("curKey") || ""
            }

            function d(r) {
                c && Object(e.h)("userInfo", r)
            }

            function w(r) {
                c && Object(e.h)("curKey", r)
            }

            function f() {
                c && Object(e.g)("userInfo")
            }

            function m() {
                c && Object(e.g)("curKey")
            }
        },
        969: function(r, o, t) {
            var content = t(970);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("56bdcb74", content, !0, {
                sourceMap: !1
            })
        },
        970: function(r, o, t) {
            var e = t(24)((function(i) {
                return i[1]
            }));
        },
        971: function(r, o, t) {
            var content = t(972);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [r.i, content, ""]
            ]), content.locals && (r.exports = content.locals);
            (0, t(25).default)("1de3a938", content, !0, {
                sourceMap: !1
            })
        },
        972: function(r, o, t) {
            var e = t(24),
                c = t(266),
                l = t(973),
                n = t(974),
                d = e((function(i) {
                    return i[1]
                })),
                w = c(l),
                f = c(n);
            d.push([r.i, ':root{--body-bg-color:#f6f6fa;--color-primary:#3869fe;--main-padding:22px;--header-height:calc(var(--navigationbar-height));--navigationbar-height:80px;--sidebar-width:280px;--sidebar-border-radius:var(--usercard-border-radius);--sidebar-hide-width:58px;--sidebar-menu-item-height:60px;--sidebar-menu-tip-line-bg-color:var(--el-color-primary);--sidebar-menu-bg-color:#001428;--sidebar-menu-hover-bg-color:hsla(0,0%,100%,.063);--sidebar-menu-text-color:#c0c4cc;--sidebar-menu-active-text-color:#fff;--logout-wrapper:100px;--usercard-height:250px;--usercard-width:calc(var(--sidebar-width));--usercard-border-radius:29px;--sidebarlogo-bg-color:#001428;--common-border-radius:18px}.page-enter-active,.page-leave-active{transition:all .3s}.page-enter{opacity:0;transform:translateX(-30px)}.page-leave-to{opacity:0;transform:translateX(30px)}.card-page{background-color:#fff;border-radius:18px;border-radius:var(--common-border-radius);box-shadow:0 37px 45px 0 #e8edff;height:100%;overflow:hidden;overflow-y:auto}@font-face{font-display:"auto";font-family:"element-icons";font-style:normal;font-weight:400;src:url(' + w + ') format("woff"),url(' + f + ') format("truetype")}[class*=" el-icon-"],[class^=el-icon-]{speak:none;font-feature-settings:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:"element-icons"!important;font-style:normal;font-variant:normal;font-weight:400;line-height:1;text-transform:none;vertical-align:baseline}.el-icon-ice-cream-round:before{content:""}.el-icon-ice-cream-square:before{content:""}.el-icon-lollipop:before{content:""}.el-icon-potato-strips:before{content:""}.el-icon-milk-tea:before{content:""}.el-icon-ice-drink:before{content:""}.el-icon-ice-tea:before{content:""}.el-icon-coffee:before{content:""}.el-icon-orange:before{content:""}.el-icon-pear:before{content:""}.el-icon-apple:before{content:""}.el-icon-cherry:before{content:""}.el-icon-watermelon:before{content:""}.el-icon-grape:before{content:""}.el-icon-refrigerator:before{content:""}.el-icon-goblet-square-full:before{content:""}.el-icon-goblet-square:before{content:""}.el-icon-goblet-full:before{content:""}.el-icon-goblet:before{content:""}.el-icon-cold-drink:before{content:""}.el-icon-coffee-cup:before{content:""}.el-icon-water-cup:before{content:""}.el-icon-hot-water:before{content:""}.el-icon-ice-cream:before{content:""}.el-icon-dessert:before{content:""}.el-icon-sugar:before{content:""}.el-icon-tableware:before{content:""}.el-icon-burger:before{content:""}.el-icon-knife-fork:before{content:""}.el-icon-fork-spoon:before{content:""}.el-icon-chicken:before{content:""}.el-icon-food:before{content:""}.el-icon-dish-1:before{content:""}.el-icon-dish:before{content:""}.el-icon-moon-night:before{content:""}.el-icon-moon:before{content:""}.el-icon-cloudy-and-sunny:before{content:""}.el-icon-partly-cloudy:before{content:""}.el-icon-cloudy:before{content:""}.el-icon-sunny:before{content:""}.el-icon-sunset:before{content:""}.el-icon-sunrise-1:before{content:""}.el-icon-sunrise:before{content:""}.el-icon-heavy-rain:before{content:""}.el-icon-lightning:before{content:""}.el-icon-light-rain:before{content:""}.el-icon-wind-power:before{content:""}.el-icon-baseball:before{content:""}.el-icon-soccer:before{content:""}.el-icon-football:before{content:""}.el-icon-basketball:before{content:""}.el-icon-ship:before{content:""}.el-icon-truck:before{content:""}.el-icon-bicycle:before{content:""}.el-icon-mobile-phone:before{content:""}.el-icon-service:before{content:""}.el-icon-key:before{content:""}.el-icon-unlock:before{content:""}.el-icon-lock:before{content:""}.el-icon-watch:before{content:""}.el-icon-watch-1:before{content:""}.el-icon-timer:before{content:""}.el-icon-alarm-clock:before{content:""}.el-icon-map-location:before{content:""}.el-icon-delete-location:before{content:""}.el-icon-add-location:before{content:""}.el-icon-location-information:before{content:""}.el-icon-location-outline:before{content:""}.el-icon-location:before{content:""}.el-icon-place:before{content:""}.el-icon-discover:before{content:""}.el-icon-first-aid-kit:before{content:""}.el-icon-trophy-1:before{content:""}.el-icon-trophy:before{content:""}.el-icon-medal:before{content:""}.el-icon-medal-1:before{content:""}.el-icon-stopwatch:before{content:""}.el-icon-mic:before{content:""}.el-icon-copy-document:before{content:""}.el-icon-full-screen:before{content:""}.el-icon-switch-button:before{content:""}.el-icon-aim:before{content:""}.el-icon-crop:before{content:""}.el-icon-odometer:before{content:""}.el-icon-time:before{content:""}.el-icon-bangzhu:before{content:""}.el-icon-close-notification:before{content:""}.el-icon-microphone:before{content:""}.el-icon-turn-off-microphone:before{content:""}.el-icon-position:before{content:""}.el-icon-postcard:before{content:""}.el-icon-message:before{content:""}.el-icon-chat-line-square:before{content:""}.el-icon-chat-dot-square:before{content:""}.el-icon-chat-dot-round:before{content:""}.el-icon-chat-square:before{content:""}.el-icon-chat-line-round:before{content:""}.el-icon-chat-round:before{content:""}.el-icon-set-up:before{content:""}.el-icon-turn-off:before{content:""}.el-icon-open:before{content:""}.el-icon-connection:before{content:""}.el-icon-link:before{content:""}.el-icon-cpu:before{content:""}.el-icon-thumb:before{content:""}.el-icon-female:before{content:""}.el-icon-male:before{content:""}.el-icon-guide:before{content:""}.el-icon-news:before{content:""}.el-icon-price-tag:before{content:""}.el-icon-discount:before{content:""}.el-icon-wallet:before{content:""}.el-icon-coin:before{content:""}.el-icon-money:before{content:""}.el-icon-bank-card:before{content:""}.el-icon-box:before{content:""}.el-icon-present:before{content:""}.el-icon-sell:before{content:""}.el-icon-sold-out:before{content:""}.el-icon-shopping-bag-2:before{content:""}.el-icon-shopping-bag-1:before{content:""}.el-icon-shopping-cart-2:before{content:""}.el-icon-shopping-cart-1:before{content:""}.el-icon-shopping-cart-full:before{content:""}.el-icon-smoking:before{content:""}.el-icon-no-smoking:before{content:""}.el-icon-house:before{content:""}.el-icon-table-lamp:before{content:""}.el-icon-school:before{content:""}.el-icon-office-building:before{content:""}.el-icon-toilet-paper:before{content:""}.el-icon-notebook-2:before{content:""}.el-icon-notebook-1:before{content:""}.el-icon-files:before{content:""}.el-icon-collection:before{content:""}.el-icon-receiving:before{content:""}.el-icon-suitcase-1:before{content:""}.el-icon-suitcase:before{content:""}.el-icon-film:before{content:""}.el-icon-collection-tag:before{content:""}.el-icon-data-analysis:before{content:""}.el-icon-pie-chart:before{content:""}.el-icon-data-board:before{content:""}.el-icon-data-line:before{content:""}.el-icon-reading:before{content:""}.el-icon-magic-stick:before{content:""}.el-icon-coordinate:before{content:""}.el-icon-mouse:before{content:""}.el-icon-brush:before{content:""}.el-icon-headset:before{content:""}.el-icon-umbrella:before{content:""}.el-icon-scissors:before{content:""}.el-icon-mobile:before{content:""}.el-icon-attract:before{content:""}.el-icon-monitor:before{content:""}.el-icon-search:before{content:""}.el-icon-takeaway-box:before{content:""}.el-icon-paperclip:before{content:""}.el-icon-printer:before{content:""}.el-icon-document-add:before{content:""}.el-icon-document:before{content:""}.el-icon-document-checked:before{content:""}.el-icon-document-copy:before{content:""}.el-icon-document-delete:before{content:""}.el-icon-document-remove:before{content:""}.el-icon-tickets:before{content:""}.el-icon-folder-checked:before{content:""}.el-icon-folder-delete:before{content:""}.el-icon-folder-remove:before{content:""}.el-icon-folder-add:before{content:""}.el-icon-folder-opened:before{content:""}.el-icon-folder:before{content:""}.el-icon-edit-outline:before{content:""}.el-icon-edit:before{content:""}.el-icon-date:before{content:""}.el-icon-c-scale-to-original:before{content:""}.el-icon-view:before{content:""}.el-icon-loading:before{content:""}.el-icon-rank:before{content:""}.el-icon-sort-down:before{content:""}.el-icon-sort-up:before{content:""}.el-icon-sort:before{content:""}.el-icon-finished:before{content:""}.el-icon-refresh-left:before{content:""}.el-icon-refresh-right:before{content:""}.el-icon-refresh:before{content:""}.el-icon-video-play:before{content:""}.el-icon-video-pause:before{content:""}.el-icon-d-arrow-right:before{content:""}.el-icon-d-arrow-left:before{content:""}.el-icon-arrow-up:before{content:""}.el-icon-arrow-down:before{content:""}.el-icon-arrow-right:before{content:""}.el-icon-arrow-left:before{content:""}.el-icon-top-right:before{content:""}.el-icon-top-left:before{content:""}.el-icon-top:before{content:""}.el-icon-bottom:before{content:""}.el-icon-right:before{content:""}.el-icon-back:before{content:""}.el-icon-bottom-right:before{content:""}.el-icon-bottom-left:before{content:""}.el-icon-caret-top:before{content:""}.el-icon-caret-bottom:before{content:""}.el-icon-caret-right:before{content:""}.el-icon-caret-left:before{content:""}.el-icon-d-caret:before{content:""}.el-icon-share:before{content:""}.el-icon-menu:before{content:""}.el-icon-s-grid:before{content:""}.el-icon-s-check:before{content:""}.el-icon-s-data:before{content:""}.el-icon-s-opportunity:before{content:""}.el-icon-s-custom:before{content:""}.el-icon-s-claim:before{content:""}.el-icon-s-finance:before{content:""}.el-icon-s-comment:before{content:""}.el-icon-s-flag:before{content:""}.el-icon-s-marketing:before{content:""}.el-icon-s-shop:before{content:""}.el-icon-s-open:before{content:""}.el-icon-s-management:before{content:""}.el-icon-s-ticket:before{content:""}.el-icon-s-release:before{content:""}.el-icon-s-home:before{content:""}.el-icon-s-promotion:before{content:""}.el-icon-s-operation:before{content:""}.el-icon-s-unfold:before{content:""}.el-icon-s-fold:before{content:""}.el-icon-s-platform:before{content:""}.el-icon-s-order:before{content:""}.el-icon-s-cooperation:before{content:""}.el-icon-bell:before{content:""}.el-icon-message-solid:before{content:""}.el-icon-video-camera:before{content:""}.el-icon-video-camera-solid:before{content:""}.el-icon-camera:before{content:""}.el-icon-camera-solid:before{content:""}.el-icon-download:before{content:""}.el-icon-upload2:before{content:""}.el-icon-upload:before{content:""}.el-icon-picture-outline-round:before{content:""}.el-icon-picture-outline:before{content:""}.el-icon-picture:before{content:""}.el-icon-close:before{content:""}.el-icon-check:before{content:""}.el-icon-plus:before{content:""}.el-icon-minus:before{content:""}.el-icon-help:before{content:""}.el-icon-s-help:before{content:""}.el-icon-circle-close:before{content:""}.el-icon-circle-check:before{content:""}.el-icon-circle-plus-outline:before{content:""}.el-icon-remove-outline:before{content:""}.el-icon-zoom-out:before{content:""}.el-icon-zoom-in:before{content:""}.el-icon-error:before{content:""}.el-icon-success:before{content:""}.el-icon-circle-plus:before{content:""}.el-icon-remove:before{content:""}.el-icon-info:before{content:""}.el-icon-question:before{content:""}.el-icon-warning-outline:before{content:""}.el-icon-warning:before{content:""}.el-icon-goods:before{content:""}.el-icon-s-goods:before{content:""}.el-icon-star-off:before{content:""}.el-icon-star-on:before{content:""}.el-icon-more-outline:before{content:""}.el-icon-more:before{content:""}.el-icon-phone-outline:before{content:""}.el-icon-phone:before{content:""}.el-icon-user:before{content:""}.el-icon-user-solid:before{content:""}.el-icon-setting:before{content:""}.el-icon-s-tools:before{content:""}.el-icon-delete:before{content:""}.el-icon-delete-solid:before{content:""}.el-icon-eleme:before{content:""}.el-icon-platform-eleme:before{content:""}.el-icon-loading{animation:rotating 2s linear infinite}.el-icon--right{margin-left:5px}.el-icon--left{margin-right:5px}@keyframes rotating{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.el-pagination{color:#303133;font-weight:700;padding:2px 5px;white-space:nowrap}.el-pagination:after,.el-pagination:before{content:"";display:table}.el-pagination:after{clear:both}.el-pagination button,.el-pagination span:not([class*=suffix]){box-sizing:border-box;display:inline-block;font-size:13px;height:28px;line-height:28px;min-width:35.5px;vertical-align:top}.el-pagination .el-input__inner{-moz-appearance:textfield;line-height:normal;text-align:center}.el-pagination .el-input__suffix{right:0;transform:scale(.8)}.el-pagination .el-select .el-input{margin:0 5px;width:100px}.el-pagination .el-select .el-input .el-input__inner{border-radius:3px;padding-right:25px}.el-pagination button{background:transparent;border:none;padding:0 6px}.el-pagination button:focus{outline:none}.el-pagination button:hover{color:#3869fe}.el-pagination button:disabled{background-color:#fff;color:#c0c4cc;cursor:not-allowed}.el-pagination .btn-next,.el-pagination .btn-prev{background:50% no-repeat;background-color:#fff;background-size:16px;color:#303133;cursor:pointer;margin:0}.el-pagination .btn-next .el-icon,.el-pagination .btn-prev .el-icon{display:block;font-size:12px;font-weight:700}.el-pagination .btn-prev{padding-right:12px}.el-pagination .btn-next{padding-left:12px}.el-pagination .el-pager li.disabled{color:#c0c4cc;cursor:not-allowed}.el-pagination--small .btn-next,.el-pagination--small .btn-prev,.el-pagination--small .el-pager li,.el-pagination--small .el-pager li.btn-quicknext,.el-pagination--small .el-pager li.btn-quickprev,.el-pagination--small .el-pager li:last-child{border-color:transparent;font-size:12px;height:22px;line-height:22px;min-width:22px}.el-pagination--small .arrow.disabled{visibility:hidden}.el-pagination--small .more:before,.el-pagination--small li.more:before{line-height:24px}.el-pagination--small button,.el-pagination--small span:not([class*=suffix]){height:22px;line-height:22px}.el-pagination--small .el-pagination__editor,.el-pagination--small .el-pagination__editor.el-input .el-input__inner{height:22px}.el-pagination__sizes{color:#606266;font-weight:400;margin:0 10px 0 0}.el-pagination__sizes .el-input .el-input__inner{font-size:13px;padding-left:8px}.el-pagination__sizes .el-input .el-input__inner:hover{border-color:#3869fe}.el-pagination__total{color:#606266;font-weight:400;margin-right:10px}.el-pagination__jump{color:#606266;font-weight:400;margin-left:24px}.el-pagination__jump .el-input__inner{padding:0 3px}.el-pagination__rightwrapper{float:right}.el-pagination__editor{border-radius:3px;box-sizing:border-box;height:28px;line-height:18px;margin:0 2px;padding:0 2px;text-align:center}.el-pagination__editor.el-input{width:50px}.el-pagination__editor.el-input .el-input__inner{height:28px}.el-pagination__editor .el-input__inner::-webkit-inner-spin-button,.el-pagination__editor .el-input__inner::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.el-pagination.is-background .btn-next,.el-pagination.is-background .btn-prev,.el-pagination.is-background .el-pager li{background-color:#f4f4f5;border-radius:2px;color:#606266;margin:0 5px;min-width:30px}.el-pagination.is-background .btn-next.disabled,.el-pagination.is-background .btn-prev.disabled,.el-pagination.is-background .el-pager li.disabled{color:#c0c4cc}.el-pagination.is-background .btn-next,.el-pagination.is-background .btn-prev{padding:0}.el-pagination.is-background .btn-next:disabled,.el-pagination.is-background .btn-prev:disabled{color:#c0c4cc}.el-pagination.is-background .el-pager li:not(.disabled):hover{color:#3869fe}.el-pagination.is-background .el-pager li:not(.disabled).active{background-color:#3869fe;color:#fff}.el-pagination.is-background.el-pagination--small .btn-next,.el-pagination.is-background.el-pagination--small .btn-prev,.el-pagination.is-background.el-pagination--small .el-pager li{margin:0 3px;min-width:22px}.el-pager{display:inline-block;font-size:0;list-style:none;margin:0;padding:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:top}.el-pager .more:before{line-height:30px}.el-pager li{background:#fff;box-sizing:border-box;cursor:pointer;display:inline-block;font-size:13px;height:28px;line-height:28px;margin:0;min-width:35.5px;padding:0 4px;text-align:center;vertical-align:top}.el-pager li.btn-quicknext,.el-pager li.btn-quickprev{color:#303133;line-height:28px}.el-pager li.btn-quicknext.disabled,.el-pager li.btn-quickprev.disabled{color:#c0c4cc}.el-pager li.btn-quicknext:hover,.el-pager li.btn-quickprev:hover{cursor:pointer}.el-pager li.active+li{border-left:0}.el-pager li:hover{color:#3869fe}.el-pager li.active{color:#3869fe;cursor:default}.el-dialog{background:#fff;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,.3);box-sizing:border-box;margin:0 auto 50px;position:relative;width:50%}.el-dialog.is-fullscreen{height:100%;margin-bottom:0;margin-top:0;overflow:auto;width:100%}.el-dialog__wrapper{bottom:0;left:0;margin:0;overflow:auto;position:fixed;right:0;top:0}.el-dialog__header{padding:20px 20px 10px}.el-dialog__headerbtn{background:transparent;border:none;cursor:pointer;font-size:16px;outline:none;padding:0;position:absolute;right:20px;top:20px}.el-dialog__headerbtn .el-dialog__close{color:#909399}.el-dialog__headerbtn:focus .el-dialog__close,.el-dialog__headerbtn:hover .el-dialog__close{color:#3869fe}.el-dialog__title{color:#303133;font-size:18px;line-height:24px}.el-dialog__body{color:#606266;font-size:14px;padding:30px 20px;word-break:break-all}.el-dialog__footer{box-sizing:border-box;padding:10px 20px 20px;text-align:right}.el-dialog--center{text-align:center}.el-dialog--center .el-dialog__body{padding:25px 25px 30px;text-align:left;text-align:initial}.el-dialog--center .el-dialog__footer{text-align:inherit}.dialog-fade-enter-active{animation:dialog-fade-in .3s}.dialog-fade-leave-active{animation:dialog-fade-out .3s}@keyframes dialog-fade-in{0%{opacity:0;transform:translate3d(0,-20px,0)}to{opacity:1;transform:translateZ(0)}}@keyframes dialog-fade-out{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(0,-20px,0)}}.el-autocomplete{display:inline-block;position:relative}.el-autocomplete-suggestion{background-color:#fff;border:1px solid #e4e7ed;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-sizing:border-box;margin:5px 0}.el-autocomplete-suggestion__wrap{box-sizing:border-box;max-height:280px;padding:10px 0}.el-autocomplete-suggestion__list{margin:0;padding:0}.el-autocomplete-suggestion li{color:#606266;cursor:pointer;font-size:14px;line-height:34px;list-style:none;margin:0;overflow:hidden;padding:0 20px;text-overflow:ellipsis;white-space:nowrap}.el-autocomplete-suggestion li.highlighted,.el-autocomplete-suggestion li:hover{background-color:#f5f7fa}.el-autocomplete-suggestion li.divider{border-top:1px solid #000;margin-top:6px}.el-autocomplete-suggestion li.divider:last-child{margin-bottom:-6px}.el-autocomplete-suggestion.is-loading li{color:#999;font-size:20px;height:100px;line-height:100px;text-align:center}.el-autocomplete-suggestion.is-loading li:after{content:"";display:inline-block;height:100%;vertical-align:middle}.el-autocomplete-suggestion.is-loading li:hover{background-color:#fff}.el-autocomplete-suggestion.is-loading .el-icon-loading{vertical-align:middle}.el-dropdown{color:#606266;display:inline-block;font-size:14px;position:relative}.el-dropdown .el-button-group{display:block}.el-dropdown .el-button-group .el-button{float:none}.el-dropdown .el-dropdown__caret-button{border-left:none;padding-left:5px;padding-right:5px;position:relative}.el-dropdown .el-dropdown__caret-button:before{background:hsla(0,0%,100%,.5);bottom:5px;content:"";display:block;left:0;position:absolute;top:5px;width:1px}.el-dropdown .el-dropdown__caret-button.el-button--default:before{background:rgba(220,223,230,.5)}.el-dropdown .el-dropdown__caret-button:hover:not(.is-disabled):before{bottom:0;top:0}.el-dropdown .el-dropdown__caret-button .el-dropdown__icon{padding-left:0}.el-dropdown__icon{font-size:12px;margin:0 3px}.el-dropdown .el-dropdown-selfdefine:focus:active,.el-dropdown .el-dropdown-selfdefine:focus:not(.focusing){outline-width:0}.el-dropdown [disabled]{color:#bbb;cursor:not-allowed}.el-dropdown-menu{background-color:#fff;border:1px solid #ebeef5;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);left:0;margin:5px 0;padding:10px 0;position:absolute;top:0;z-index:10}.el-dropdown-menu__item{color:#606266;cursor:pointer;font-size:14px;line-height:36px;list-style:none;margin:0;outline:none;padding:0 20px}.el-dropdown-menu__item:focus,.el-dropdown-menu__item:not(.is-disabled):hover{background-color:#ebf0ff;color:#6087fe}.el-dropdown-menu__item i{margin-right:5px}.el-dropdown-menu__item--divided{border-top:1px solid #ebeef5;margin-top:6px;position:relative}.el-dropdown-menu__item--divided:before{background-color:#fff;content:"";display:block;height:6px;margin:0 -20px}.el-dropdown-menu__item.is-disabled{color:#bbb;cursor:default;pointer-events:none}.el-dropdown-menu--medium{padding:6px 0}.el-dropdown-menu--medium .el-dropdown-menu__item{font-size:14px;line-height:30px;padding:0 17px}.el-dropdown-menu--medium .el-dropdown-menu__item.el-dropdown-menu__item--divided{margin-top:6px}.el-dropdown-menu--medium .el-dropdown-menu__item.el-dropdown-menu__item--divided:before{height:6px;margin:0 -17px}.el-dropdown-menu--small{padding:6px 0}.el-dropdown-menu--small .el-dropdown-menu__item{font-size:13px;line-height:27px;padding:0 15px}.el-dropdown-menu--small .el-dropdown-menu__item.el-dropdown-menu__item--divided{margin-top:4px}.el-dropdown-menu--small .el-dropdown-menu__item.el-dropdown-menu__item--divided:before{height:4px;margin:0 -15px}.el-dropdown-menu--mini{padding:3px 0}.el-dropdown-menu--mini .el-dropdown-menu__item{font-size:12px;line-height:24px;padding:0 10px}.el-dropdown-menu--mini .el-dropdown-menu__item.el-dropdown-menu__item--divided{margin-top:3px}.el-dropdown-menu--mini .el-dropdown-menu__item.el-dropdown-menu__item--divided:before{height:3px;margin:0 -10px}.el-menu{background-color:#fff;border-right:1px solid #e6e6e6;list-style:none;margin:0;padding-left:0;position:relative}.el-menu:after,.el-menu:before{content:"";display:table}.el-menu:after{clear:both}.el-menu.el-menu--horizontal{border-bottom:1px solid #e6e6e6}.el-menu--horizontal{border-right:none}.el-menu--horizontal>.el-menu-item{border-bottom:2px solid transparent;color:#909399;float:left;height:60px;line-height:60px;margin:0}.el-menu--horizontal>.el-menu-item a,.el-menu--horizontal>.el-menu-item a:hover{color:inherit}.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover{background-color:#fff}.el-menu--horizontal>.el-submenu{float:left}.el-menu--horizontal>.el-submenu:focus,.el-menu--horizontal>.el-submenu:hover{outline:none}.el-menu--horizontal>.el-submenu:focus .el-submenu__title,.el-menu--horizontal>.el-submenu:hover .el-submenu__title{color:#303133}.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{border-bottom:2px solid #3869fe;color:#303133}.el-menu--horizontal>.el-submenu .el-submenu__title{border-bottom:2px solid transparent;color:#909399;height:60px;line-height:60px}.el-menu--horizontal>.el-submenu .el-submenu__title:hover{background-color:#fff}.el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{margin-left:8px;margin-top:-3px;position:static;vertical-align:middle}.el-menu--horizontal .el-menu .el-menu-item,.el-menu--horizontal .el-menu .el-submenu__title{background-color:#fff;color:#909399;float:none;height:36px;line-height:36px;padding:0 10px}.el-menu--horizontal .el-menu .el-menu-item.is-active,.el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title{color:#303133}.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,.el-menu--horizontal .el-menu-item:not(.is-disabled):hover{color:#303133;outline:none}.el-menu--horizontal>.el-menu-item.is-active{border-bottom:2px solid #3869fe;color:#303133}.el-menu--collapse{width:64px}.el-menu--collapse>.el-menu-item [class^=el-icon-],.el-menu--collapse>.el-submenu>.el-submenu__title [class^=el-icon-]{margin:0;text-align:center;vertical-align:middle;width:24px}.el-menu--collapse>.el-menu-item .el-submenu__icon-arrow,.el-menu--collapse>.el-submenu>.el-submenu__title .el-submenu__icon-arrow{display:none}.el-menu--collapse>.el-menu-item span,.el-menu--collapse>.el-submenu>.el-submenu__title span{display:inline-block;height:0;overflow:hidden;visibility:hidden;width:0}.el-menu--collapse>.el-menu-item.is-active i{color:inherit}.el-menu--collapse .el-menu .el-submenu{min-width:200px}.el-menu--collapse .el-submenu{position:relative}.el-menu--collapse .el-submenu .el-menu{border:1px solid #e4e7ed;border-radius:2px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);left:100%;margin-left:5px;position:absolute;top:0;z-index:10}.el-menu--collapse .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow{transform:none}.el-menu--popup{border:none;border-radius:2px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);min-width:200px;padding:5px 0;z-index:100}.el-menu--popup-bottom-start{margin-top:5px}.el-menu--popup-right-start{margin-left:5px;margin-right:5px}.el-menu-item{box-sizing:border-box;color:#303133;cursor:pointer;font-size:14px;height:56px;line-height:56px;list-style:none;padding:0 20px;position:relative;transition:border-color .3s,background-color .3s,color .3s;white-space:nowrap}.el-menu-item *{vertical-align:middle}.el-menu-item i{color:#909399}.el-menu-item:focus,.el-menu-item:hover{background-color:#ebf0ff;outline:none}.el-menu-item.is-disabled{background:none!important;cursor:not-allowed;opacity:.25}.el-menu-item [class^=el-icon-]{font-size:18px;margin-right:5px;text-align:center;vertical-align:middle;width:24px}.el-menu-item.is-active{color:#3869fe}.el-menu-item.is-active i{color:inherit}.el-submenu{list-style:none;margin:0;padding-left:0}.el-submenu__title{box-sizing:border-box;color:#303133;cursor:pointer;font-size:14px;height:56px;line-height:56px;list-style:none;padding:0 20px;position:relative;transition:border-color .3s,background-color .3s,color .3s;white-space:nowrap}.el-submenu__title *{vertical-align:middle}.el-submenu__title i{color:#909399}.el-submenu__title:focus,.el-submenu__title:hover{background-color:#ebf0ff;outline:none}.el-submenu__title.is-disabled{background:none!important;cursor:not-allowed;opacity:.25}.el-submenu__title:hover{background-color:#ebf0ff}.el-submenu .el-menu{border:none}.el-submenu .el-menu-item{height:50px;line-height:50px;min-width:200px;padding:0 45px}.el-submenu__icon-arrow{font-size:12px;margin-top:-7px;position:absolute;right:20px;top:50%;transition:transform .3s}.el-submenu.is-active .el-submenu__title{border-bottom-color:#3869fe}.el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow{transform:rotate(180deg)}.el-submenu.is-disabled .el-menu-item,.el-submenu.is-disabled .el-submenu__title{background:none!important;cursor:not-allowed;opacity:.25}.el-submenu [class^=el-icon-]{font-size:18px;margin-right:5px;text-align:center;vertical-align:middle;width:24px}.el-menu-item-group>ul{padding:0}.el-menu-item-group__title{color:#909399;font-size:12px;line-height:normal;padding:7px 0 7px 20px}.horizontal-collapse-transition .el-submenu__title .el-submenu__icon-arrow{opacity:0;transition:.2s}.el-radio-group{display:inline-block;font-size:0;line-height:1;vertical-align:middle}.el-radio-button,.el-radio-button__inner{display:inline-block;outline:none;position:relative}.el-radio-button__inner{-webkit-appearance:none;background:#fff;border:1px solid #dcdfe6;border-left:0;border-radius:0;box-sizing:border-box;color:#606266;cursor:pointer;font-size:16px;font-weight:500;line-height:1;margin:0;padding:12px 20px;text-align:center;transition:all .3s cubic-bezier(.645,.045,.355,1);vertical-align:middle;white-space:nowrap}.el-radio-button__inner.is-round{padding:12px 20px}.el-radio-button__inner:hover{color:#3869fe}.el-radio-button__inner [class*=el-icon-]{line-height:.9}.el-radio-button__inner [class*=el-icon-]+span{margin-left:5px}.el-radio-button:first-child .el-radio-button__inner{border-left:1px solid #dcdfe6;border-radius:4px 0 0 4px;box-shadow:none!important}.el-radio-button__orig-radio{opacity:0;outline:none;position:absolute;z-index:-1}.el-radio-button__orig-radio:checked+.el-radio-button__inner{background-color:#3869fe;border-color:#3869fe;box-shadow:-1px 0 0 0 #3869fe;color:#fff}.el-radio-button__orig-radio:disabled+.el-radio-button__inner{background-color:#fff;background-image:none;border-color:#ebeef5;box-shadow:none;color:#c0c4cc;cursor:not-allowed}.el-radio-button__orig-radio:disabled:checked+.el-radio-button__inner{background-color:#f2f6fc}.el-radio-button:last-child .el-radio-button__inner{border-radius:0 4px 4px 0}.el-radio-button:first-child:last-child .el-radio-button__inner{border-radius:4px}.el-radio-button--medium .el-radio-button__inner{border-radius:0;font-size:14px;padding:10px 20px}.el-radio-button--medium .el-radio-button__inner.is-round{padding:10px 20px}.el-radio-button--small .el-radio-button__inner{border-radius:0;font-size:12px;padding:9px 15px}.el-radio-button--small .el-radio-button__inner.is-round{padding:9px 15px}.el-radio-button--mini .el-radio-button__inner{border-radius:0;font-size:12px;padding:7px 15px}.el-radio-button--mini .el-radio-button__inner.is-round{padding:7px 15px}.el-radio-button:focus:not(.is-focus):not(:active):not(.is-disabled){box-shadow:0 0 2px 2px #3869fe}.el-switch{align-items:center;display:inline-flex;font-size:14px;height:20px;line-height:20px;position:relative;vertical-align:middle}.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label{cursor:not-allowed}.el-switch__label{color:#303133;cursor:pointer;display:inline-block;font-size:14px;font-weight:500;height:20px;transition:.2s;vertical-align:middle}.el-switch__label.is-active{color:#3869fe}.el-switch__label--left{margin-right:10px}.el-switch__label--right{margin-left:10px}.el-switch__label *{display:inline-block;font-size:14px;line-height:1}.el-switch__input{height:0;margin:0;opacity:0;position:absolute;width:0}.el-switch__core{background:#dcdfe6;border:1px solid #dcdfe6;border-radius:10px;box-sizing:border-box;cursor:pointer;display:inline-block;height:20px;margin:0;outline:none;position:relative;transition:border-color .3s,background-color .3s;vertical-align:middle;width:40px}.el-switch__core:after{background-color:#fff;border-radius:100%;content:"";height:16px;left:1px;position:absolute;top:1px;transition:all .3s;width:16px}.el-switch.is-checked .el-switch__core{background-color:#3869fe;border-color:#3869fe}.el-switch.is-checked .el-switch__core:after{left:100%;margin-left:-17px}.el-switch.is-disabled{opacity:.6}.el-switch--wide .el-switch__label.el-switch__label--left span{left:10px}.el-switch--wide .el-switch__label.el-switch__label--right span{right:10px}.el-switch .label-fade-enter,.el-switch .label-fade-leave-active{opacity:0}.el-select-dropdown{background-color:#fff;border:1px solid #e4e7ed;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-sizing:border-box;margin:5px 0;position:absolute;z-index:1001}.el-select-dropdown.is-multiple .el-select-dropdown__item{padding-right:40px}.el-select-dropdown.is-multiple .el-select-dropdown__item.selected{background-color:#fff;color:#3869fe}.el-select-dropdown.is-multiple .el-select-dropdown__item.selected.hover{background-color:#f5f7fa}.el-select-dropdown.is-multiple .el-select-dropdown__item.selected:after{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;content:"";font-family:"element-icons";font-size:12px;font-weight:700;position:absolute;right:20px}.el-select-dropdown .el-scrollbar.is-empty .el-select-dropdown__list{padding:0}.el-select-dropdown__empty{color:#999;font-size:14px;margin:0;padding:10px 0;text-align:center}.el-select-dropdown__wrap{max-height:274px}.el-select-dropdown__list{box-sizing:border-box;list-style:none;margin:0;padding:6px 0}.el-select-dropdown__item{box-sizing:border-box;color:#606266;cursor:pointer;font-size:14px;height:34px;line-height:34px;overflow:hidden;padding:0 20px;position:relative;text-overflow:ellipsis;white-space:nowrap}.el-select-dropdown__item.is-disabled{color:#c0c4cc;cursor:not-allowed}.el-select-dropdown__item.is-disabled:hover{background-color:#fff}.el-select-dropdown__item.hover,.el-select-dropdown__item:hover{background-color:#f5f7fa}.el-select-dropdown__item.selected{color:#3869fe;font-weight:700}.el-select-group{margin:0;padding:0}.el-select-group__wrap{list-style:none;margin:0;padding:0;position:relative}.el-select-group__wrap:not(:last-of-type){padding-bottom:24px}.el-select-group__wrap:not(:last-of-type):after{background:#e4e7ed;bottom:12px;content:"";display:block;height:1px;left:20px;position:absolute;right:20px}.el-select-group__title{color:#909399;font-size:12px;line-height:30px;padding-left:20px}.el-select-group .el-select-dropdown__item{padding-left:20px}.el-select{display:inline-block;position:relative}.el-select .el-select__tags>span{display:contents}.el-select:hover .el-input__inner{border-color:#c0c4cc}.el-select .el-input__inner{cursor:pointer;padding-right:35px}.el-select .el-input__inner:focus{border-color:#3869fe}.el-select .el-input .el-select__caret{color:#c0c4cc;cursor:pointer;font-size:14px;transform:rotate(180deg);transition:transform .3s}.el-select .el-input .el-select__caret.is-reverse{transform:rotate(0deg)}.el-select .el-input .el-select__caret.is-show-close{border-radius:100%;color:#c0c4cc;font-size:14px;text-align:center;transform:rotate(180deg);transition:color .2s cubic-bezier(.645,.045,.355,1)}.el-select .el-input .el-select__caret.is-show-close:hover{color:#909399}.el-select .el-input.is-disabled .el-input__inner{cursor:not-allowed}.el-select .el-input.is-disabled .el-input__inner:hover{border-color:#e4e7ed}.el-select .el-input.is-focus .el-input__inner{border-color:#3869fe}.el-select>.el-input{display:block}.el-select__input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;color:#666;font-size:14px;height:28px;margin-left:15px;outline:none;padding:0}.el-select__input.is-mini{height:14px}.el-select__close{color:#c0c4cc;cursor:pointer;font-size:14px;line-height:18px;position:absolute;right:25px;top:8px;z-index:1000}.el-select__close:hover{color:#909399}.el-select__tags{align-items:center;display:flex;flex-wrap:wrap;line-height:normal;position:absolute;top:50%;transform:translateY(-50%);white-space:normal;z-index:1}.el-select__tags-text{overflow:hidden;text-overflow:ellipsis}.el-select .el-tag{align-items:center;background-color:#f0f2f5;border-color:transparent;box-sizing:border-box;display:flex;margin:2px 0 2px 6px;max-width:100%}.el-select .el-tag__close.el-icon-close{background-color:#c0c4cc;color:#fff;flex-shrink:0;top:0}.el-select .el-tag__close.el-icon-close:hover{background-color:#909399}.el-select .el-tag__close.el-icon-close:before{display:block;transform:translateY(.5px)}.el-table{background-color:#fff;box-sizing:border-box;color:#606266;flex:1;font-size:14px;max-width:100%;overflow:hidden;position:relative;width:100%}.el-table__empty-block{align-items:center;display:flex;justify-content:center;min-height:60px;text-align:center;width:100%}.el-table__empty-text{color:#909399;line-height:60px;width:50%}.el-table__expand-column .cell{padding:0;text-align:center}.el-table__expand-icon{color:#666;cursor:pointer;font-size:12px;height:20px;position:relative;transition:transform .2s ease-in-out}.el-table__expand-icon--expanded{transform:rotate(90deg)}.el-table__expand-icon>.el-icon{left:50%;margin-left:-5px;margin-top:-5px;position:absolute;top:50%}.el-table__expanded-cell{background-color:#fff}.el-table__expanded-cell[class*=cell]{padding:20px 50px}.el-table__expanded-cell:hover{background-color:transparent!important}.el-table__placeholder{display:inline-block;width:20px}.el-table__append-wrapper{overflow:hidden}.el-table--fit{border-bottom:0;border-right:0}.el-table--fit .el-table__cell.gutter{border-right-width:1px}.el-table--scrollable-x .el-table__body-wrapper{overflow-x:auto}.el-table--scrollable-y .el-table__body-wrapper{overflow-y:auto}.el-table thead{color:#909399;font-weight:500}.el-table thead.is-group th.el-table__cell{background:#f5f7fa}.el-table .el-table__cell{box-sizing:border-box;min-width:0;padding:12px 0;position:relative;text-align:left;text-overflow:ellipsis;vertical-align:middle}.el-table .el-table__cell.is-center{text-align:center}.el-table .el-table__cell.is-right{text-align:right}.el-table .el-table__cell.gutter{border-bottom-width:0;border-right-width:0;padding:0;width:15px}.el-table .el-table__cell.is-hidden>*{visibility:hidden}.el-table--medium .el-table__cell{padding:10px 0}.el-table--small{font-size:12px}.el-table--small .el-table__cell{padding:8px 0}.el-table--mini{font-size:12px}.el-table--mini .el-table__cell{padding:6px 0}.el-table tr{background-color:#fff}.el-table tr input[type=checkbox]{margin:0}.el-table td.el-table__cell,.el-table th.el-table__cell.is-leaf{border-bottom:1px solid #ebeef5}.el-table th.el-table__cell.is-sortable{cursor:pointer}.el-table th.el-table__cell{background-color:#fff;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;user-select:none}.el-table th.el-table__cell>.cell{box-sizing:border-box;display:inline-block;padding-left:10px;padding-right:10px;position:relative;vertical-align:middle;width:100%}.el-table th.el-table__cell>.cell.highlight{color:#3869fe}.el-table th.el-table__cell.required>div:before{background:#ff4d51;border-radius:50%;content:"";display:inline-block;height:8px;margin-right:5px;vertical-align:middle;width:8px}.el-table td.el-table__cell div{box-sizing:border-box}.el-table td.el-table__cell.gutter{width:0}.el-table .cell{box-sizing:border-box;line-height:23px;overflow:hidden;padding-left:10px;padding-right:10px;text-overflow:ellipsis;white-space:normal;word-break:break-all}.el-table .cell.el-tooltip{min-width:50px;white-space:nowrap}.el-table--border,.el-table--group{border:1px solid #ebeef5}.el-table--border:after,.el-table--group:after,.el-table:before{background-color:#ebeef5;content:"";position:absolute;z-index:1}.el-table--border:after,.el-table--group:after{height:100%;right:0;top:0;width:1px}.el-table:before{bottom:0;height:1px;left:0;width:100%}.el-table--border{border-bottom:none;border-right:none}.el-table--border.el-loading-parent--relative{border-color:transparent}.el-table--border .el-table__cell{border-right:1px solid #ebeef5}.el-table--border .el-table__cell:first-child .cell{padding-left:10px}.el-table--border th.el-table__cell,.el-table--border th.el-table__cell.gutter:last-of-type{border-bottom:1px solid #ebeef5}.el-table--hidden{visibility:hidden}.el-table__fixed,.el-table__fixed-right{box-shadow:0 0 10px rgba(0,0,0,.12);left:0;overflow-x:hidden;overflow-y:hidden;position:absolute;top:0}.el-table__fixed-right:before,.el-table__fixed:before{background-color:#ebeef5;bottom:0;content:"";height:1px;left:0;position:absolute;width:100%;z-index:4}.el-table__fixed-right-patch{background-color:#fff;border-bottom:1px solid #ebeef5;position:absolute;right:0;top:-1px}.el-table__fixed-right{left:auto;right:0;top:0}.el-table__fixed-right .el-table__fixed-body-wrapper,.el-table__fixed-right .el-table__fixed-footer-wrapper,.el-table__fixed-right .el-table__fixed-header-wrapper{left:auto;right:0}.el-table__fixed-header-wrapper{left:0;position:absolute;top:0;z-index:3}.el-table__fixed-footer-wrapper{bottom:0;left:0;position:absolute;z-index:3}.el-table__fixed-footer-wrapper tbody td.el-table__cell{background-color:#f5f7fa;border-top:1px solid #ebeef5;color:#606266}.el-table__fixed-body-wrapper{left:0;overflow:hidden;position:absolute;top:37px;z-index:3}.el-table__body-wrapper,.el-table__footer-wrapper,.el-table__header-wrapper{width:100%}.el-table__footer-wrapper{margin-top:-1px}.el-table__footer-wrapper td.el-table__cell{border-top:1px solid #ebeef5}.el-table__body,.el-table__footer,.el-table__header{border-collapse:separate;table-layout:fixed}.el-table__footer-wrapper,.el-table__header-wrapper{overflow:hidden}.el-table__footer-wrapper tbody td.el-table__cell,.el-table__header-wrapper tbody td.el-table__cell{background-color:#f5f7fa;color:#606266}.el-table__body-wrapper{overflow:hidden;position:relative}.el-table__body-wrapper.is-scrolling-left~.el-table__fixed,.el-table__body-wrapper.is-scrolling-none~.el-table__fixed,.el-table__body-wrapper.is-scrolling-none~.el-table__fixed-right,.el-table__body-wrapper.is-scrolling-right~.el-table__fixed-right{box-shadow:none}.el-table__body-wrapper .el-table--border.is-scrolling-right~.el-table__fixed-right{border-left:1px solid #ebeef5}.el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{border-right:1px solid #ebeef5}.el-table .caret-wrapper{align-items:center;cursor:pointer;display:inline-flex;flex-direction:column;height:34px;overflow:visible;overflow:initial;position:relative;vertical-align:middle;width:24px}.el-table .sort-caret{border:5px solid transparent;height:0;left:7px;position:absolute;width:0}.el-table .sort-caret.ascending{border-bottom-color:#c0c4cc;top:5px}.el-table .sort-caret.descending{border-top-color:#c0c4cc;bottom:7px}.el-table .ascending .sort-caret.ascending{border-bottom-color:#3869fe}.el-table .descending .sort-caret.descending{border-top-color:#3869fe}.el-table .hidden-columns{position:absolute;visibility:hidden;z-index:-1}.el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell{background:#fafafa}.el-table--striped .el-table__body tr.el-table__row--striped.current-row td.el-table__cell{background-color:#ebf0ff}.el-table__body tr.hover-row.current-row>td.el-table__cell,.el-table__body tr.hover-row.el-table__row--striped.current-row>td.el-table__cell,.el-table__body tr.hover-row.el-table__row--striped>td.el-table__cell,.el-table__body tr.hover-row>td.el-table__cell{background-color:#f5f7fa}.el-table__body tr.current-row>td.el-table__cell{background-color:#ebf0ff}.el-table__column-resize-proxy{border-left:1px solid #ebeef5;bottom:0;left:200px;position:absolute;top:0;width:0;z-index:10}.el-table__column-filter-trigger{cursor:pointer;display:inline-block;line-height:34px}.el-table__column-filter-trigger i{color:#909399;font-size:12px;transform:scale(.75)}.el-table--enable-row-transition .el-table__body td.el-table__cell{transition:background-color .25s ease}.el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell{background-color:#f5f7fa}.el-table--fluid-height .el-table__fixed,.el-table--fluid-height .el-table__fixed-right{bottom:0;overflow:hidden}.el-table [class*=el-table__row--level] .el-table__expand-icon{display:inline-block;height:20px;line-height:20px;margin-right:3px;text-align:center;width:20px}.el-table-column--selection .cell{padding-left:14px;padding-right:14px}.el-table-filter{background-color:#fff;border:1px solid #ebeef5;border-radius:2px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-sizing:border-box;margin:2px 0}.el-table-filter__list{list-style:none;margin:0;min-width:100px;padding:5px 0}.el-table-filter__list-item{cursor:pointer;font-size:14px;line-height:36px;padding:0 10px}.el-table-filter__list-item:hover{background-color:#ebf0ff;color:#6087fe}.el-table-filter__list-item.is-active{background-color:#3869fe;color:#fff}.el-table-filter__content{min-width:100px}.el-table-filter__bottom{border-top:1px solid #ebeef5;padding:8px}.el-table-filter__bottom button{background:transparent;border:none;color:#606266;cursor:pointer;font-size:13px;padding:0 3px}.el-table-filter__bottom button:hover{color:#3869fe}.el-table-filter__bottom button:focus{outline:none}.el-table-filter__bottom button.is-disabled{color:#c0c4cc;cursor:not-allowed}.el-table-filter__wrap{max-height:280px}.el-table-filter__checkbox-group{padding:10px}.el-table-filter__checkbox-group label.el-checkbox{display:block;margin-bottom:8px;margin-left:5px;margin-right:5px}.el-table-filter__checkbox-group .el-checkbox:last-child{margin-bottom:0}.el-date-table{font-size:12px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.el-date-table.is-week-mode .el-date-table__row:hover div{background-color:#f2f6fc}.el-date-table.is-week-mode .el-date-table__row:hover td.available:hover{color:#606266}.el-date-table.is-week-mode .el-date-table__row:hover td:first-child div{border-bottom-left-radius:15px;border-top-left-radius:15px;margin-left:5px}.el-date-table.is-week-mode .el-date-table__row:hover td:last-child div{border-bottom-right-radius:15px;border-top-right-radius:15px;margin-right:5px}.el-date-table.is-week-mode .el-date-table__row.current div{background-color:#f2f6fc}.el-date-table td{box-sizing:border-box;cursor:pointer;height:30px;padding:4px 0;position:relative;text-align:center;width:32px}.el-date-table td div{box-sizing:border-box;height:30px;padding:3px 0}.el-date-table td span{border-radius:50%;display:block;height:24px;left:50%;line-height:24px;margin:0 auto;position:absolute;transform:translateX(-50%);width:24px}.el-date-table td.next-month,.el-date-table td.prev-month{color:#c0c4cc}.el-date-table td.today{position:relative}.el-date-table td.today span{color:#3869fe;font-weight:700}.el-date-table td.today.end-date span,.el-date-table td.today.start-date span{color:#fff}.el-date-table td.available:hover{color:#3869fe}.el-date-table td.in-range div,.el-date-table td.in-range div:hover{background-color:#f2f6fc}.el-date-table td.current:not(.disabled) span{background-color:#3869fe;color:#fff}.el-date-table td.end-date div,.el-date-table td.start-date div{color:#fff}.el-date-table td.end-date span,.el-date-table td.start-date span{background-color:#3869fe}.el-date-table td.start-date div{border-bottom-left-radius:15px;border-top-left-radius:15px;margin-left:5px}.el-date-table td.end-date div{border-bottom-right-radius:15px;border-top-right-radius:15px;margin-right:5px}.el-date-table td.disabled div{background-color:#f5f7fa;color:#c0c4cc;cursor:not-allowed;opacity:1}.el-date-table td.selected div{background-color:#f2f6fc;border-radius:15px;margin-left:5px;margin-right:5px}.el-date-table td.selected div:hover{background-color:#f2f6fc}.el-date-table td.selected span{background-color:#3869fe;border-radius:15px;color:#fff}.el-date-table td.week{color:#606266;font-size:80%}.el-date-table th{border-bottom:1px solid #ebeef5;color:#606266;font-weight:400;padding:5px}.el-month-table{border-collapse:collapse;font-size:12px;margin:-1px}.el-month-table td{cursor:pointer;padding:8px 0;text-align:center}.el-month-table td div{box-sizing:border-box;height:48px;padding:6px 0}.el-month-table td.today .cell{color:#3869fe;font-weight:700}.el-month-table td.today.end-date .cell,.el-month-table td.today.start-date .cell{color:#fff}.el-month-table td.disabled .cell{background-color:#f5f7fa;color:#c0c4cc;cursor:not-allowed}.el-month-table td.disabled .cell:hover{color:#c0c4cc}.el-month-table td .cell{border-radius:18px;color:#606266;display:block;height:36px;line-height:36px;margin:0 auto;width:60px}.el-month-table td .cell:hover{color:#3869fe}.el-month-table td.in-range div,.el-month-table td.in-range div:hover{background-color:#f2f6fc}.el-month-table td.end-date div,.el-month-table td.start-date div{color:#fff}.el-month-table td.end-date .cell,.el-month-table td.start-date .cell{background-color:#3869fe;color:#fff}.el-month-table td.start-date div{border-bottom-left-radius:24px;border-top-left-radius:24px}.el-month-table td.end-date div{border-bottom-right-radius:24px;border-top-right-radius:24px}.el-month-table td.current:not(.disabled) .cell{color:#3869fe}.el-year-table{border-collapse:collapse;font-size:12px;margin:-1px}.el-year-table .el-icon{color:#303133}.el-year-table td{cursor:pointer;padding:20px 3px;text-align:center}.el-year-table td.today .cell{color:#3869fe;font-weight:700}.el-year-table td.disabled .cell{background-color:#f5f7fa;color:#c0c4cc;cursor:not-allowed}.el-year-table td.disabled .cell:hover{color:#c0c4cc}.el-year-table td .cell{color:#606266;display:block;height:32px;line-height:32px;margin:0 auto;width:48px}.el-year-table td .cell:hover,.el-year-table td.current:not(.disabled) .cell{color:#3869fe}.el-date-range-picker{width:646px}.el-date-range-picker.has-sidebar{width:756px}.el-date-range-picker table{table-layout:fixed;width:100%}.el-date-range-picker .el-picker-panel__body{min-width:513px}.el-date-range-picker .el-picker-panel__content{margin:0}.el-date-range-picker__header{height:28px;position:relative;text-align:center}.el-date-range-picker__header [class*=arrow-left]{float:left}.el-date-range-picker__header [class*=arrow-right]{float:right}.el-date-range-picker__header div{font-size:16px;font-weight:500;margin-right:50px}.el-date-range-picker__content{box-sizing:border-box;float:left;margin:0;padding:16px;width:50%}.el-date-range-picker__content.is-left{border-right:1px solid #e4e4e4}.el-date-range-picker__content .el-date-range-picker__header div{margin-left:50px;margin-right:50px}.el-date-range-picker__editors-wrap{box-sizing:border-box;display:table-cell}.el-date-range-picker__editors-wrap.is-right{text-align:right}.el-date-range-picker__time-header{border-bottom:1px solid #e4e4e4;box-sizing:border-box;display:table;font-size:12px;padding:8px 5px 5px;position:relative;width:100%}.el-date-range-picker__time-header>.el-icon-arrow-right{color:#303133;display:table-cell;font-size:20px;vertical-align:middle}.el-date-range-picker__time-picker-wrap{display:table-cell;padding:0 5px;position:relative}.el-date-range-picker__time-picker-wrap .el-picker-panel{background:#fff;position:absolute;right:0;top:13px;z-index:1}.el-date-picker{width:322px}.el-date-picker.has-sidebar.has-time{width:434px}.el-date-picker.has-sidebar{width:438px}.el-date-picker.has-time .el-picker-panel__body-wrapper{position:relative}.el-date-picker .el-picker-panel__content{width:292px}.el-date-picker table{table-layout:fixed;width:100%}.el-date-picker__editor-wrap{display:table-cell;padding:0 5px;position:relative}.el-date-picker__time-header{border-bottom:1px solid #e4e4e4;box-sizing:border-box;display:table;font-size:12px;padding:8px 5px 5px;position:relative;width:100%}.el-date-picker__header{margin:12px;text-align:center}.el-date-picker__header--bordered{border-bottom:1px solid #ebeef5;margin-bottom:0;padding-bottom:12px}.el-date-picker__header--bordered+.el-picker-panel__content{margin-top:0}.el-date-picker__header-label{color:#606266;cursor:pointer;font-size:16px;font-weight:500;line-height:22px;padding:0 5px;text-align:center}.el-date-picker__header-label.active,.el-date-picker__header-label:hover{color:#3869fe}.el-date-picker__prev-btn{float:left}.el-date-picker__next-btn{float:right}.el-date-picker__time-wrap{padding:10px;text-align:center}.el-date-picker__time-label{cursor:pointer;float:left;line-height:30px;margin-left:10px}.time-select{margin:5px 0;min-width:0}.time-select .el-picker-panel__content{margin:0;max-height:200px}.time-select-item{font-size:14px;line-height:20px;padding:8px 10px}.time-select-item.selected:not(.disabled){color:#3869fe;font-weight:700}.time-select-item.disabled{color:#e4e7ed;cursor:not-allowed}.time-select-item:hover{background-color:#f5f7fa;cursor:pointer;font-weight:700}.el-date-editor{display:inline-block;position:relative;text-align:left}.el-date-editor.el-input,.el-date-editor.el-input__inner{width:220px}.el-date-editor--monthrange.el-input,.el-date-editor--monthrange.el-input__inner{width:300px}.el-date-editor--daterange.el-input,.el-date-editor--daterange.el-input__inner,.el-date-editor--timerange.el-input,.el-date-editor--timerange.el-input__inner{width:350px}.el-date-editor--datetimerange.el-input,.el-date-editor--datetimerange.el-input__inner{width:400px}.el-date-editor--dates .el-input__inner{text-overflow:ellipsis;white-space:nowrap}.el-date-editor .el-icon-circle-close{cursor:pointer}.el-date-editor .el-range__icon{color:#c0c4cc;float:left;font-size:14px;line-height:32px;margin-left:-5px}.el-date-editor .el-range-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;color:#606266;display:inline-block;font-size:14px;height:100%;margin:0;outline:none;padding:0;text-align:center;width:39%}.el-date-editor .el-range-input::-moz-placeholder{color:#c0c4cc}.el-date-editor .el-range-input::placeholder{color:#c0c4cc}.el-date-editor .el-range-separator{color:#303133;display:inline-block;font-size:14px;height:100%;line-height:32px;margin:0;padding:0 5px;text-align:center;width:5%}.el-date-editor .el-range__close-icon{color:#c0c4cc;display:inline-block;float:right;font-size:14px;line-height:32px;width:25px}.el-range-editor.el-input__inner{align-items:center;display:inline-flex;padding:3px 10px}.el-range-editor .el-range-input{line-height:1}.el-range-editor.is-active,.el-range-editor.is-active:hover{border-color:#3869fe}.el-range-editor--medium.el-input__inner{height:36px}.el-range-editor--medium .el-range-separator{font-size:14px;line-height:28px}.el-range-editor--medium .el-range-input{font-size:14px}.el-range-editor--medium .el-range__close-icon,.el-range-editor--medium .el-range__icon{line-height:28px}.el-range-editor--small.el-input__inner{height:32px}.el-range-editor--small .el-range-separator{font-size:13px;line-height:24px}.el-range-editor--small .el-range-input{font-size:13px}.el-range-editor--small .el-range__close-icon,.el-range-editor--small .el-range__icon{line-height:24px}.el-range-editor--mini.el-input__inner{height:28px}.el-range-editor--mini .el-range-separator{font-size:12px;line-height:20px}.el-range-editor--mini .el-range-input{font-size:12px}.el-range-editor--mini .el-range__close-icon,.el-range-editor--mini .el-range__icon{line-height:20px}.el-range-editor.is-disabled{background-color:#f5f7fa;border-color:#e4e7ed;color:#c0c4cc;cursor:not-allowed}.el-range-editor.is-disabled:focus,.el-range-editor.is-disabled:hover{border-color:#e4e7ed}.el-range-editor.is-disabled input{background-color:#f5f7fa;color:#c0c4cc;cursor:not-allowed}.el-range-editor.is-disabled input::-moz-placeholder{color:#c0c4cc}.el-range-editor.is-disabled input::placeholder{color:#c0c4cc}.el-range-editor.is-disabled .el-range-separator{color:#c0c4cc}.el-picker-panel{background:#fff;border:1px solid #e4e7ed;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);color:#606266;line-height:30px;margin:5px 0}.el-picker-panel__body-wrapper:after,.el-picker-panel__body:after{clear:both;content:"";display:table}.el-picker-panel__content{margin:15px;position:relative}.el-picker-panel__footer{background-color:#fff;border-top:1px solid #e4e4e4;font-size:0;padding:4px;position:relative;text-align:right}.el-picker-panel__shortcut{background-color:transparent;border:0;color:#606266;cursor:pointer;display:block;font-size:14px;line-height:28px;outline:none;padding-left:12px;text-align:left;width:100%}.el-picker-panel__shortcut:hover{color:#3869fe}.el-picker-panel__shortcut.active{background-color:#e6f1fe;color:#3869fe}.el-picker-panel__btn{background-color:transparent;border:1px solid #dcdcdc;border-radius:2px;color:#333;cursor:pointer;font-size:12px;line-height:24px;outline:none;padding:0 20px}.el-picker-panel__btn[disabled]{color:#ccc;cursor:not-allowed}.el-picker-panel__icon-btn{background:transparent;border:0;color:#303133;cursor:pointer;font-size:12px;margin-top:8px;outline:none}.el-picker-panel__icon-btn:hover{color:#3869fe}.el-picker-panel__icon-btn.is-disabled{color:#bbb}.el-picker-panel__icon-btn.is-disabled:hover{cursor:not-allowed}.el-picker-panel__link-btn{vertical-align:middle}.el-picker-panel [slot=sidebar],.el-picker-panel__sidebar{background-color:#fff;border-right:1px solid #e4e4e4;bottom:0;box-sizing:border-box;overflow:auto;padding-top:6px;position:absolute;top:0;width:110px}.el-picker-panel [slot=sidebar]+.el-picker-panel__body,.el-picker-panel__sidebar+.el-picker-panel__body{margin-left:110px}.el-time-spinner.has-seconds .el-time-spinner__wrapper{width:33.3%}.el-time-spinner__wrapper{display:inline-block;max-height:190px;overflow:auto;position:relative;vertical-align:top;width:50%}.el-time-spinner__wrapper .el-scrollbar__wrap:not(.el-scrollbar__wrap--hidden-default){padding-bottom:15px}.el-time-spinner__wrapper.is-arrow{box-sizing:border-box;overflow:hidden;text-align:center}.el-time-spinner__wrapper.is-arrow .el-time-spinner__list{transform:translateY(-32px)}.el-time-spinner__wrapper.is-arrow .el-time-spinner__item:hover:not(.disabled):not(.active){background:#fff;cursor:default}.el-time-spinner__arrow{color:#909399;cursor:pointer;font-size:12px;height:30px;left:0;line-height:30px;position:absolute;text-align:center;width:100%;z-index:1}.el-time-spinner__arrow:hover{color:#3869fe}.el-time-spinner__arrow.el-icon-arrow-up{top:10px}.el-time-spinner__arrow.el-icon-arrow-down{bottom:10px}.el-time-spinner__input.el-input{width:70%}.el-time-spinner__input.el-input .el-input__inner,.el-time-spinner__list{padding:0;text-align:center}.el-time-spinner__list{list-style:none;margin:0}.el-time-spinner__list:after,.el-time-spinner__list:before{content:"";display:block;height:80px;width:100%}.el-time-spinner__item{color:#606266;font-size:12px;height:32px;line-height:32px}.el-time-spinner__item:hover:not(.disabled):not(.active){background:#f5f7fa;cursor:pointer}.el-time-spinner__item.active:not(.disabled){color:#303133;font-weight:700}.el-time-spinner__item.disabled{color:#c0c4cc;cursor:not-allowed}.el-time-panel{background-color:#fff;border:1px solid #e4e7ed;border-radius:2px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-sizing:content-box;left:0;margin:5px 0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:180px;z-index:1000}.el-time-panel__content{font-size:0;overflow:hidden;position:relative}.el-time-panel__content:after,.el-time-panel__content:before{border-bottom:1px solid #e4e7ed;border-top:1px solid #e4e7ed;box-sizing:border-box;content:"";height:32px;left:0;margin-top:-15px;padding-top:6px;position:absolute;right:0;text-align:left;top:50%;z-index:-1}.el-time-panel__content:after{left:50%;margin-left:12%;margin-right:12%}.el-time-panel__content:before{margin-left:12%;margin-right:12%;padding-left:50%}.el-time-panel__content.has-seconds:after{left:66.66667%}.el-time-panel__content.has-seconds:before{padding-left:33.33333%}.el-time-panel__footer{border-top:1px solid #e4e4e4;box-sizing:border-box;height:36px;line-height:25px;padding:4px;text-align:right}.el-time-panel__btn{background-color:transparent;border:none;color:#303133;cursor:pointer;font-size:12px;line-height:28px;margin:0 5px;outline:none;padding:0 5px}.el-time-panel__btn.confirm{color:#3869fe;font-weight:800}.el-time-range-picker{overflow:visible;width:354px}.el-time-range-picker__content{padding:10px;position:relative;text-align:center}.el-time-range-picker__cell{box-sizing:border-box;display:inline-block;margin:0;padding:4px 7px 7px;width:50%}.el-time-range-picker__header{font-size:14px;margin-bottom:5px;text-align:center}.el-time-range-picker__body{border:1px solid #e4e7ed;border-radius:2px}.el-popover{background:#fff;border:1px solid #ebeef5;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);color:#606266;font-size:14px;line-height:1.4;min-width:150px;padding:12px;position:absolute;text-align:justify;word-break:break-all;z-index:2000}.el-popover--plain{padding:18px 20px}.el-popover__title{color:#303133;font-size:16px;line-height:1;margin-bottom:12px}.el-popover:focus,.el-popover:focus:active,.el-popover__reference:focus:hover,.el-popover__reference:focus:not(.focusing){outline-width:0}.v-modal-enter{animation:v-modal-in .2s ease}.v-modal-leave{animation:v-modal-out .2s ease forwards}@keyframes v-modal-in{0%{opacity:0}}@keyframes v-modal-out{to{opacity:0}}.v-modal{background:#000;height:100%;left:0;opacity:.5;position:fixed;top:0;width:100%}.el-popup-parent--hidden{overflow:hidden}.el-message-box{backface-visibility:hidden;background-color:#fff;border:1px solid #ebeef5;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);display:inline-block;font-size:18px;overflow:hidden;padding-bottom:10px;text-align:left;vertical-align:middle;width:420px}.el-message-box__wrapper{bottom:0;left:0;position:fixed;right:0;text-align:center;top:0}.el-message-box__wrapper:after{content:"";display:inline-block;height:100%;vertical-align:middle;width:0}.el-message-box__header{padding:15px 15px 10px;position:relative}.el-message-box__title{color:#303133;font-size:18px;line-height:1;margin-bottom:0;padding-left:0}.el-message-box__headerbtn{background:transparent;border:none;cursor:pointer;font-size:16px;outline:none;padding:0;position:absolute;right:15px;top:15px}.el-message-box__headerbtn .el-message-box__close{color:#909399}.el-message-box__headerbtn:focus .el-message-box__close,.el-message-box__headerbtn:hover .el-message-box__close{color:#3869fe}.el-message-box__content{color:#606266;font-size:14px;padding:10px 15px}.el-message-box__container{position:relative}.el-message-box__input{padding-top:15px}.el-message-box__input input.invalid,.el-message-box__input input.invalid:focus{border-color:#f56c6c}.el-message-box__status{font-size:24px!important;position:absolute;top:50%;transform:translateY(-50%)}.el-message-box__status:before{padding-left:1px}.el-message-box__status+.el-message-box__message{padding-left:36px;padding-right:12px}.el-message-box__status.el-icon-success{color:#67c23a}.el-message-box__status.el-icon-info{color:#909399}.el-message-box__status.el-icon-warning{color:#e6a23c}.el-message-box__status.el-icon-error{color:#f56c6c}.el-message-box__message{margin:0}.el-message-box__message p{line-height:24px;margin:0}.el-message-box__errormsg{color:#f56c6c;font-size:12px;margin-top:2px;min-height:18px}.el-message-box__btns{padding:5px 15px 0;text-align:right}.el-message-box__btns button:nth-child(2){margin-left:10px}.el-message-box__btns-reverse{flex-direction:row-reverse}.el-message-box--center{padding-bottom:30px}.el-message-box--center .el-message-box__header{padding-top:30px}.el-message-box--center .el-message-box__title{align-items:center;display:flex;justify-content:center;position:relative}.el-message-box--center .el-message-box__status{padding-right:5px;position:relative;text-align:center;top:auto;transform:translateY(-1px)}.el-message-box--center .el-message-box__message{margin-left:0}.el-message-box--center .el-message-box__btns,.el-message-box--center .el-message-box__content{text-align:center}.el-message-box--center .el-message-box__content{padding-left:27px;padding-right:27px}.msgbox-fade-enter-active{animation:msgbox-fade-in .3s}.msgbox-fade-leave-active{animation:msgbox-fade-out .3s}@keyframes msgbox-fade-in{0%{opacity:0;transform:translate3d(0,-20px,0)}to{opacity:1;transform:translateZ(0)}}@keyframes msgbox-fade-out{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(0,-20px,0)}}.el-breadcrumb{font-size:14px;line-height:1}.el-breadcrumb:after,.el-breadcrumb:before{content:"";display:table}.el-breadcrumb:after{clear:both}.el-breadcrumb__separator{color:#c0c4cc;font-weight:700;margin:0 9px}.el-breadcrumb__separator[class*=icon]{font-weight:400;margin:0 6px}.el-breadcrumb__item{float:left}.el-breadcrumb__inner{color:#606266}.el-breadcrumb__inner a,.el-breadcrumb__inner.is-link{color:#303133;font-weight:700;-webkit-text-decoration:none;text-decoration:none;transition:color .2s cubic-bezier(.645,.045,.355,1)}.el-breadcrumb__inner a:hover,.el-breadcrumb__inner.is-link:hover{color:#3869fe;cursor:pointer}.el-breadcrumb__item:last-child .el-breadcrumb__inner,.el-breadcrumb__item:last-child .el-breadcrumb__inner a,.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{color:#606266;cursor:text;font-weight:400}.el-breadcrumb__item:last-child .el-breadcrumb__separator{display:none}.el-form--label-left .el-form-item__label{text-align:left}.el-form--label-top .el-form-item__label{display:inline-block;float:none;padding:0 0 10px;text-align:left}.el-form--inline .el-form-item{display:inline-block;margin-right:10px;vertical-align:top}.el-form--inline .el-form-item__label{display:inline-block;float:none}.el-form--inline .el-form-item__content{display:inline-block;vertical-align:top}.el-form--inline.el-form--label-top .el-form-item__content{display:block}.el-form-item{margin-bottom:22px}.el-form-item:after,.el-form-item:before{content:"";display:table}.el-form-item:after{clear:both}.el-form-item .el-form-item{margin-bottom:0}.el-form-item .el-input__validateIcon{display:none}.el-form-item--medium .el-form-item__content,.el-form-item--medium .el-form-item__label{line-height:36px}.el-form-item--small .el-form-item__content,.el-form-item--small .el-form-item__label{line-height:32px}.el-form-item--small.el-form-item{margin-bottom:18px}.el-form-item--small .el-form-item__error{padding-top:2px}.el-form-item--mini .el-form-item__content,.el-form-item--mini .el-form-item__label{line-height:28px}.el-form-item--mini.el-form-item{margin-bottom:18px}.el-form-item--mini .el-form-item__error{padding-top:1px}.el-form-item__label-wrap{float:left}.el-form-item__label-wrap .el-form-item__label{display:inline-block;float:none}.el-form-item__label{box-sizing:border-box;color:#606266;float:left;font-size:14px;line-height:40px;padding:0 12px 0 0;text-align:right;vertical-align:middle}.el-form-item__content{font-size:14px;line-height:40px;position:relative}.el-form-item__content:after,.el-form-item__content:before{content:"";display:table}.el-form-item__content:after{clear:both}.el-form-item__content .el-input-group{vertical-align:top}.el-form-item__error{color:#f56c6c;font-size:12px;left:0;line-height:1;padding-top:4px;position:absolute;top:100%}.el-form-item__error--inline{display:inline-block;left:auto;margin-left:10px;position:relative;top:auto}.el-form-item.is-required:not(.is-no-asterisk) .el-form-item__label-wrap>.el-form-item__label:before,.el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before{color:#f56c6c;content:"*";margin-right:4px}.el-form-item.is-error .el-input__inner,.el-form-item.is-error .el-input__inner:focus,.el-form-item.is-error .el-textarea__inner,.el-form-item.is-error .el-textarea__inner:focus{border-color:#f56c6c}.el-form-item.is-error .el-input-group__append .el-input__inner,.el-form-item.is-error .el-input-group__prepend .el-input__inner{border-color:transparent}.el-form-item.is-error .el-input__validateIcon{color:#f56c6c}.el-form-item--feedback .el-input__validateIcon{display:inline-block}.el-tabs__header{margin:0 0 15px;padding:0;position:relative}.el-tabs__active-bar{background-color:#3869fe;bottom:0;height:2px;left:0;list-style:none;position:absolute;transition:transform .3s cubic-bezier(.645,.045,.355,1);z-index:1}.el-tabs__new-tab{border:1px solid #d3dce6;border-radius:3px;color:#d3dce6;cursor:pointer;float:right;font-size:12px;height:18px;line-height:18px;margin:12px 0 9px 10px;text-align:center;transition:all .15s;width:18px}.el-tabs__new-tab .el-icon-plus{transform:scale(.8)}.el-tabs__new-tab:hover{color:#3869fe}.el-tabs__nav-wrap{margin-bottom:-1px;overflow:hidden;position:relative}.el-tabs__nav-wrap:after{background-color:#e4e7ed;bottom:0;content:"";height:2px;left:0;position:absolute;width:100%;z-index:1}.el-tabs__nav-wrap.is-scrollable{box-sizing:border-box;padding:0 20px}.el-tabs__nav-scroll{overflow:hidden}.el-tabs__nav-next,.el-tabs__nav-prev{color:#909399;cursor:pointer;font-size:12px;line-height:44px;position:absolute}.el-tabs__nav-next{right:0}.el-tabs__nav-prev{left:0}.el-tabs__nav{float:left;position:relative;transition:transform .3s;white-space:nowrap;z-index:2}.el-tabs__nav.is-stretch{display:flex;min-width:100%}.el-tabs__nav.is-stretch>*{flex:1;text-align:center}.el-tabs__item{box-sizing:border-box;color:#303133;display:inline-block;font-size:14px;font-weight:500;height:40px;line-height:40px;list-style:none;padding:0 20px;position:relative}.el-tabs__item:focus,.el-tabs__item:focus:active{outline:none}.el-tabs__item:focus.is-active.is-focus:not(:active){border-radius:3px;box-shadow:inset 0 0 2px 2px #3869fe}.el-tabs__item .el-icon-close{border-radius:50%;margin-left:5px;text-align:center;transition:all .3s cubic-bezier(.645,.045,.355,1)}.el-tabs__item .el-icon-close:before{display:inline-block;transform:scale(.9)}.el-tabs__item .el-icon-close:hover{background-color:#c0c4cc;color:#fff}.el-tabs__item.is-active{color:#3869fe}.el-tabs__item:hover{color:#3869fe;cursor:pointer}.el-tabs__item.is-disabled{color:#c0c4cc;cursor:default}.el-tabs__content{overflow:hidden;position:relative}.el-tabs--card>.el-tabs__header{border-bottom:1px solid #e4e7ed}.el-tabs--card>.el-tabs__header .el-tabs__nav-wrap:after{content:none}.el-tabs--card>.el-tabs__header .el-tabs__nav{border:1px solid #e4e7ed;border-bottom:none;border-radius:4px 4px 0 0;box-sizing:border-box}.el-tabs--card>.el-tabs__header .el-tabs__active-bar{display:none}.el-tabs--card>.el-tabs__header .el-tabs__item .el-icon-close{font-size:12px;height:14px;line-height:15px;overflow:hidden;position:relative;right:-2px;top:-1px;transform-origin:100% 50%;vertical-align:middle;width:0}.el-tabs--card>.el-tabs__header .el-tabs__item{border-bottom:1px solid transparent;border-left:1px solid #e4e7ed;transition:color .3s cubic-bezier(.645,.045,.355,1),padding .3s cubic-bezier(.645,.045,.355,1)}.el-tabs--card>.el-tabs__header .el-tabs__item:first-child{border-left:none}.el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover{padding-left:13px;padding-right:13px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-closable:hover .el-icon-close{width:14px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{border-bottom-color:#fff}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable{padding-left:20px;padding-right:20px}.el-tabs--card>.el-tabs__header .el-tabs__item.is-active.is-closable .el-icon-close{width:14px}.el-tabs--border-card{background:#fff;border:1px solid #dcdfe6;box-shadow:0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04)}.el-tabs--border-card>.el-tabs__content{padding:15px}.el-tabs--border-card>.el-tabs__header{background-color:#f5f7fa;border-bottom:1px solid #e4e7ed;margin:0}.el-tabs--border-card>.el-tabs__header .el-tabs__nav-wrap:after{content:none}.el-tabs--border-card>.el-tabs__header .el-tabs__item{border:1px solid transparent;color:#909399;margin-top:-1px;transition:all .3s cubic-bezier(.645,.045,.355,1)}.el-tabs--border-card>.el-tabs__header .el-tabs__item+.el-tabs__item,.el-tabs--border-card>.el-tabs__header .el-tabs__item:first-child{margin-left:-1px}.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{background-color:#fff;border-left-color:#dcdfe6;border-right-color:#dcdfe6;color:#3869fe}.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover{color:#3869fe}.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-disabled{color:#c0c4cc}.el-tabs--border-card>.el-tabs__header .is-scrollable .el-tabs__item:first-child{margin-left:0}.el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2),.el-tabs--bottom .el-tabs__item.is-top:nth-child(2),.el-tabs--top .el-tabs__item.is-bottom:nth-child(2),.el-tabs--top .el-tabs__item.is-top:nth-child(2){padding-left:0}.el-tabs--bottom .el-tabs__item.is-bottom:last-child,.el-tabs--bottom .el-tabs__item.is-top:last-child,.el-tabs--top .el-tabs__item.is-bottom:last-child,.el-tabs--top .el-tabs__item.is-top:last-child{padding-right:0}.el-tabs--bottom .el-tabs--left>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom .el-tabs--right>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top .el-tabs--left>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top .el-tabs--right>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2),.el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:nth-child(2){padding-left:20px}.el-tabs--bottom .el-tabs--left>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom .el-tabs--right>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--top .el-tabs--left>.el-tabs__header .el-tabs__item:last-child,.el-tabs--top .el-tabs--right>.el-tabs__header .el-tabs__item:last-child,.el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child,.el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:last-child{padding-right:20px}.el-tabs--bottom .el-tabs__header.is-bottom{margin-bottom:0;margin-top:10px}.el-tabs--bottom.el-tabs--border-card .el-tabs__header.is-bottom{border-bottom:0;border-top:1px solid #dcdfe6}.el-tabs--bottom.el-tabs--border-card .el-tabs__nav-wrap.is-bottom{margin-bottom:0;margin-top:-1px}.el-tabs--bottom.el-tabs--border-card .el-tabs__item.is-bottom:not(.is-active){border:1px solid transparent}.el-tabs--bottom.el-tabs--border-card .el-tabs__item.is-bottom{margin:0 -1px -1px}.el-tabs--left,.el-tabs--right{overflow:hidden}.el-tabs--left .el-tabs__header.is-left,.el-tabs--left .el-tabs__header.is-right,.el-tabs--left .el-tabs__nav-scroll,.el-tabs--left .el-tabs__nav-wrap.is-left,.el-tabs--left .el-tabs__nav-wrap.is-right,.el-tabs--right .el-tabs__header.is-left,.el-tabs--right .el-tabs__header.is-right,.el-tabs--right .el-tabs__nav-scroll,.el-tabs--right .el-tabs__nav-wrap.is-left,.el-tabs--right .el-tabs__nav-wrap.is-right{height:100%}.el-tabs--left .el-tabs__active-bar.is-left,.el-tabs--left .el-tabs__active-bar.is-right,.el-tabs--right .el-tabs__active-bar.is-left,.el-tabs--right .el-tabs__active-bar.is-right{bottom:auto;height:auto;top:0;width:2px}.el-tabs--left .el-tabs__nav-wrap.is-left,.el-tabs--left .el-tabs__nav-wrap.is-right,.el-tabs--right .el-tabs__nav-wrap.is-left,.el-tabs--right .el-tabs__nav-wrap.is-right{margin-bottom:0}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev{cursor:pointer;height:30px;line-height:30px;text-align:center;width:100%}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next i,.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev i,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next i,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev i,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next i,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev i,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next i,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev i{transform:rotate(90deg)}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-prev,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-prev{left:auto;top:0}.el-tabs--left .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--left .el-tabs__nav-wrap.is-right>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-left>.el-tabs__nav-next,.el-tabs--right .el-tabs__nav-wrap.is-right>.el-tabs__nav-next{bottom:0;right:auto}.el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable,.el-tabs--left .el-tabs__nav-wrap.is-right.is-scrollable,.el-tabs--right .el-tabs__nav-wrap.is-left.is-scrollable,.el-tabs--right .el-tabs__nav-wrap.is-right.is-scrollable{padding:30px 0}.el-tabs--left .el-tabs__nav-wrap.is-left:after,.el-tabs--left .el-tabs__nav-wrap.is-right:after,.el-tabs--right .el-tabs__nav-wrap.is-left:after,.el-tabs--right .el-tabs__nav-wrap.is-right:after{bottom:auto;height:100%;top:0;width:2px}.el-tabs--left .el-tabs__nav.is-left,.el-tabs--left .el-tabs__nav.is-right,.el-tabs--right .el-tabs__nav.is-left,.el-tabs--right .el-tabs__nav.is-right{float:none}.el-tabs--left .el-tabs__item.is-left,.el-tabs--left .el-tabs__item.is-right,.el-tabs--right .el-tabs__item.is-left,.el-tabs--right .el-tabs__item.is-right{display:block}.el-tabs--left .el-tabs__header.is-left{float:left;margin-bottom:0;margin-right:10px}.el-tabs--left .el-tabs__nav-wrap.is-left{margin-right:-1px}.el-tabs--left .el-tabs__active-bar.is-left,.el-tabs--left .el-tabs__nav-wrap.is-left:after{left:auto;right:0}.el-tabs--left .el-tabs__item.is-left{text-align:right}.el-tabs--left.el-tabs--card .el-tabs__active-bar.is-left{display:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left{border:1px solid #e4e7ed;border-bottom:none;border-left:none;text-align:left}.el-tabs--left.el-tabs--card .el-tabs__item.is-left:first-child{border-right:1px solid #e4e7ed;border-top:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active{border:none;border-right:1px solid #fff;border-top:1px solid #e4e7ed}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:first-child{border-top:none}.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:last-child{border-bottom:none}.el-tabs--left.el-tabs--card .el-tabs__nav{border-bottom:1px solid #e4e7ed;border-radius:4px 0 0 4px;border-right:none}.el-tabs--left.el-tabs--card .el-tabs__new-tab{float:none}.el-tabs--left.el-tabs--border-card .el-tabs__header.is-left{border-right:1px solid #dfe4ed}.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left{border:1px solid transparent;margin:-1px 0 -1px -1px}.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left.is-active{border-color:#d1dbe5 transparent}.el-tabs--right .el-tabs__header.is-right{float:right;margin-bottom:0;margin-left:10px}.el-tabs--right .el-tabs__nav-wrap.is-right{margin-left:-1px}.el-tabs--right .el-tabs__nav-wrap.is-right:after{left:0;right:auto}.el-tabs--right .el-tabs__active-bar.is-right{left:0}.el-tabs--right.el-tabs--card .el-tabs__active-bar.is-right{display:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right{border-bottom:none;border-top:1px solid #e4e7ed}.el-tabs--right.el-tabs--card .el-tabs__item.is-right:first-child{border-left:1px solid #e4e7ed;border-top:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active{border:none;border-left:1px solid #fff;border-top:1px solid #e4e7ed}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active:first-child{border-top:none}.el-tabs--right.el-tabs--card .el-tabs__item.is-right.is-active:last-child{border-bottom:none}.el-tabs--right.el-tabs--card .el-tabs__nav{border-bottom:1px solid #e4e7ed;border-left:none;border-radius:0 4px 4px 0}.el-tabs--right.el-tabs--border-card .el-tabs__header.is-right{border-left:1px solid #dfe4ed}.el-tabs--right.el-tabs--border-card .el-tabs__item.is-right{border:1px solid transparent;margin:-1px -1px -1px 0}.el-tabs--right.el-tabs--border-card .el-tabs__item.is-right.is-active{border-color:#d1dbe5 transparent}.slideInLeft-transition,.slideInRight-transition{display:inline-block}.slideInRight-enter{animation:slideInRight-enter .3s}.slideInRight-leave{animation:slideInRight-leave .3s;left:0;position:absolute;right:0}.slideInLeft-enter{animation:slideInLeft-enter .3s}.slideInLeft-leave{animation:slideInLeft-leave .3s;left:0;position:absolute;right:0}@keyframes slideInRight-enter{0%{opacity:0;transform:translateX(100%);transform-origin:0 0}to{opacity:1;transform:translateX(0);transform-origin:0 0}}@keyframes slideInRight-leave{0%{opacity:1;transform:translateX(0);transform-origin:0 0}to{opacity:0;transform:translateX(100%);transform-origin:0 0}}@keyframes slideInLeft-enter{0%{opacity:0;transform:translateX(-100%);transform-origin:0 0}to{opacity:1;transform:translateX(0);transform-origin:0 0}}@keyframes slideInLeft-leave{0%{opacity:1;transform:translateX(0);transform-origin:0 0}to{opacity:0;transform:translateX(-100%);transform-origin:0 0}}.el-tree{background:#fff;color:#606266;cursor:default;position:relative}.el-tree__empty-block{height:100%;min-height:60px;position:relative;text-align:center;width:100%}.el-tree__empty-text{color:#909399;font-size:14px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.el-tree__drop-indicator{background-color:#3869fe;height:1px;left:0;position:absolute;right:0}.el-tree-node{outline:none;white-space:nowrap}.el-tree-node:focus>.el-tree-node__content{background-color:#f5f7fa}.el-tree-node.is-drop-inner>.el-tree-node__content .el-tree-node__label{background-color:#3869fe;color:#fff}.el-tree-node__content{align-items:center;cursor:pointer;display:flex;height:26px}.el-tree-node__content>.el-tree-node__expand-icon{padding:6px}.el-tree-node__content>label.el-checkbox{margin-right:8px}.el-tree-node__content:hover{background-color:#f5f7fa}.el-tree.is-dragging .el-tree-node__content{cursor:move}.el-tree.is-dragging .el-tree-node__content *{pointer-events:none}.el-tree.is-dragging.is-drop-not-allow .el-tree-node__content{cursor:not-allowed}.el-tree-node__expand-icon{color:#c0c4cc;cursor:pointer;font-size:12px;transform:rotate(0deg);transition:transform .3s ease-in-out}.el-tree-node__expand-icon.expanded{transform:rotate(90deg)}.el-tree-node__expand-icon.is-leaf{color:transparent;cursor:default}.el-tree-node__label{font-size:14px}.el-tree-node__loading-icon{color:#c0c4cc;font-size:14px;margin-right:8px}.el-tree-node>.el-tree-node__children{background-color:transparent;overflow:hidden}.el-tree-node.is-expanded>.el-tree-node__children{display:block}.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content{background-color:#eff3ff}.el-alert{align-items:center;background-color:#fff;border-radius:4px;box-sizing:border-box;display:flex;margin:0;opacity:1;overflow:hidden;padding:8px 16px;position:relative;transition:opacity .2s;width:100%}.el-alert.is-light .el-alert__closebtn{color:#c0c4cc}.el-alert.is-dark .el-alert__closebtn,.el-alert.is-dark .el-alert__description{color:#fff}.el-alert.is-center{justify-content:center}.el-alert--success.is-light{background-color:#f0f9eb;color:#67c23a}.el-alert--success.is-light .el-alert__description{color:#67c23a}.el-alert--success.is-dark{background-color:#67c23a;color:#fff}.el-alert--info.is-light{background-color:#f4f4f5;color:#909399}.el-alert--info.is-dark{background-color:#909399;color:#fff}.el-alert--info .el-alert__description{color:#909399}.el-alert--warning.is-light{background-color:#fdf6ec;color:#e6a23c}.el-alert--warning.is-light .el-alert__description{color:#e6a23c}.el-alert--warning.is-dark{background-color:#e6a23c;color:#fff}.el-alert--error.is-light{background-color:#fef0f0;color:#f56c6c}.el-alert--error.is-light .el-alert__description{color:#f56c6c}.el-alert--error.is-dark{background-color:#f56c6c;color:#fff}.el-alert__content{display:table-cell;padding:0 8px}.el-alert__icon{font-size:16px;width:16px}.el-alert__icon.is-big{font-size:28px;width:28px}.el-alert__title{font-size:13px;line-height:18px}.el-alert__title.is-bold{font-weight:700}.el-alert .el-alert__description{font-size:12px;margin:5px 0 0}.el-alert__closebtn{cursor:pointer;font-size:12px;opacity:1;position:absolute;right:15px;top:12px}.el-alert__closebtn.is-customed{font-size:13px;font-style:normal;top:9px}.el-alert-fade-enter,.el-alert-fade-leave-active{opacity:0}.el-notification{background-color:#fff;border:1px solid #ebeef5;border-radius:8px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-sizing:border-box;display:flex;overflow:hidden;padding:14px 26px 14px 13px;position:fixed;transition:opacity .3s,transform .3s,left .3s,right .3s,top .4s,bottom .3s;width:330px}.el-notification.right{right:16px}.el-notification.left{left:16px}.el-notification__group{margin-left:13px;margin-right:8px}.el-notification__title{color:#303133;font-size:16px;font-weight:700;margin:0}.el-notification__content{color:#606266;font-size:14px;line-height:21px;margin:6px 0 0;text-align:justify}.el-notification__content p{margin:0}.el-notification__icon{font-size:24px;height:24px;width:24px}.el-notification__closeBtn{color:#909399;cursor:pointer;font-size:16px;position:absolute;right:15px;top:18px}.el-notification__closeBtn:hover{color:#606266}.el-notification .el-icon-success{color:#67c23a}.el-notification .el-icon-error{color:#f56c6c}.el-notification .el-icon-info{color:#909399}.el-notification .el-icon-warning{color:#e6a23c}.el-notification-fade-enter.right{right:0;transform:translateX(100%)}.el-notification-fade-enter.left{left:0;transform:translateX(-100%)}.el-notification-fade-leave-active{opacity:0}.el-input-number{display:inline-block;line-height:38px;position:relative;width:180px}.el-input-number .el-input{display:block}.el-input-number .el-input__inner{-webkit-appearance:none;padding-left:50px;padding-right:50px;text-align:center}.el-input-number__decrease,.el-input-number__increase{background:#f5f7fa;color:#606266;cursor:pointer;font-size:13px;height:auto;position:absolute;text-align:center;top:1px;width:40px;z-index:1}.el-input-number__decrease:hover,.el-input-number__increase:hover{color:#3869fe}.el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled),.el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled){border-color:#3869fe}.el-input-number__decrease.is-disabled,.el-input-number__increase.is-disabled{color:#c0c4cc;cursor:not-allowed}.el-input-number__increase{border-left:1px solid #dcdfe6;border-radius:0 4px 4px 0;right:1px}.el-input-number__decrease{border-radius:4px 0 0 4px;border-right:1px solid #dcdfe6;left:1px}.el-input-number.is-disabled .el-input-number__decrease,.el-input-number.is-disabled .el-input-number__increase{border-color:#e4e7ed;color:#e4e7ed}.el-input-number.is-disabled .el-input-number__decrease:hover,.el-input-number.is-disabled .el-input-number__increase:hover{color:#e4e7ed;cursor:not-allowed}.el-input-number--medium{line-height:34px;width:200px}.el-input-number--medium .el-input-number__decrease,.el-input-number--medium .el-input-number__increase{font-size:14px;width:36px}.el-input-number--medium .el-input__inner{padding-left:43px;padding-right:43px}.el-input-number--small{line-height:30px;width:130px}.el-input-number--small .el-input-number__decrease,.el-input-number--small .el-input-number__increase{font-size:13px;width:32px}.el-input-number--small .el-input-number__decrease [class*=el-icon],.el-input-number--small .el-input-number__increase [class*=el-icon]{transform:scale(.9)}.el-input-number--small .el-input__inner{padding-left:39px;padding-right:39px}.el-input-number--mini{line-height:26px;width:130px}.el-input-number--mini .el-input-number__decrease,.el-input-number--mini .el-input-number__increase{font-size:12px;width:28px}.el-input-number--mini .el-input-number__decrease [class*=el-icon],.el-input-number--mini .el-input-number__increase [class*=el-icon]{transform:scale(.8)}.el-input-number--mini .el-input__inner{padding-left:35px;padding-right:35px}.el-input-number.is-without-controls .el-input__inner{padding-left:15px;padding-right:15px}.el-input-number.is-controls-right .el-input__inner{padding-left:15px;padding-right:50px}.el-input-number.is-controls-right .el-input-number__decrease,.el-input-number.is-controls-right .el-input-number__increase{height:auto;line-height:19px}.el-input-number.is-controls-right .el-input-number__decrease [class*=el-icon],.el-input-number.is-controls-right .el-input-number__increase [class*=el-icon]{transform:scale(.8)}.el-input-number.is-controls-right .el-input-number__increase{border-bottom:1px solid #dcdfe6;border-radius:0 4px 0 0}.el-input-number.is-controls-right .el-input-number__decrease{border-left:1px solid #dcdfe6;border-radius:0 0 4px 0;border-right:none;bottom:1px;left:auto;right:1px;top:auto}.el-input-number.is-controls-right[class*=medium] [class*=decrease],.el-input-number.is-controls-right[class*=medium] [class*=increase]{line-height:17px}.el-input-number.is-controls-right[class*=small] [class*=decrease],.el-input-number.is-controls-right[class*=small] [class*=increase]{line-height:15px}.el-input-number.is-controls-right[class*=mini] [class*=decrease],.el-input-number.is-controls-right[class*=mini] [class*=increase]{line-height:13px}.el-tooltip:focus:hover,.el-tooltip:focus:not(.focusing){outline-width:0}.el-tooltip__popper{word-wrap:break-word;border-radius:4px;font-size:12px;line-height:1.2;min-width:10px;padding:10px;position:absolute;z-index:2000}.el-tooltip__popper .popper__arrow,.el-tooltip__popper .popper__arrow:after{border-color:transparent;border-style:solid;display:block;height:0;position:absolute;width:0}.el-tooltip__popper .popper__arrow{border-width:6px}.el-tooltip__popper .popper__arrow:after{border-width:5px;content:" "}.el-tooltip__popper[x-placement^=top]{margin-bottom:12px}.el-tooltip__popper[x-placement^=top] .popper__arrow{border-bottom-width:0;border-top-color:#303133;bottom:-6px}.el-tooltip__popper[x-placement^=top] .popper__arrow:after{border-bottom-width:0;border-top-color:#303133;bottom:1px;margin-left:-5px}.el-tooltip__popper[x-placement^=bottom]{margin-top:12px}.el-tooltip__popper[x-placement^=bottom] .popper__arrow{border-bottom-color:#303133;border-top-width:0;top:-6px}.el-tooltip__popper[x-placement^=bottom] .popper__arrow:after{border-bottom-color:#303133;border-top-width:0;margin-left:-5px;top:1px}.el-tooltip__popper[x-placement^=right]{margin-left:12px}.el-tooltip__popper[x-placement^=right] .popper__arrow{border-left-width:0;border-right-color:#303133;left:-6px}.el-tooltip__popper[x-placement^=right] .popper__arrow:after{border-left-width:0;border-right-color:#303133;bottom:-5px;left:1px}.el-tooltip__popper[x-placement^=left]{margin-right:12px}.el-tooltip__popper[x-placement^=left] .popper__arrow{border-left-color:#303133;border-right-width:0;right:-6px}.el-tooltip__popper[x-placement^=left] .popper__arrow:after{border-left-color:#303133;border-right-width:0;bottom:-5px;margin-left:-5px;right:1px}.el-tooltip__popper.is-dark{background:#303133;color:#fff}.el-tooltip__popper.is-light{background:#fff;border:1px solid #303133}.el-tooltip__popper.is-light[x-placement^=top] .popper__arrow{border-top-color:#303133}.el-tooltip__popper.is-light[x-placement^=top] .popper__arrow:after{border-top-color:#fff}.el-tooltip__popper.is-light[x-placement^=bottom] .popper__arrow{border-bottom-color:#303133}.el-tooltip__popper.is-light[x-placement^=bottom] .popper__arrow:after{border-bottom-color:#fff}.el-tooltip__popper.is-light[x-placement^=left] .popper__arrow{border-left-color:#303133}.el-tooltip__popper.is-light[x-placement^=left] .popper__arrow:after{border-left-color:#fff}.el-tooltip__popper.is-light[x-placement^=right] .popper__arrow{border-right-color:#303133}.el-tooltip__popper.is-light[x-placement^=right] .popper__arrow:after{border-right-color:#fff}.el-slider:after,.el-slider:before{content:"";display:table}.el-slider:after{clear:both}.el-slider__runway{background-color:#e4e7ed;border-radius:3px;cursor:pointer;height:6px;margin:16px 0;position:relative;vertical-align:middle;width:100%}.el-slider__runway.show-input{margin-right:160px;width:auto}.el-slider__runway.disabled{cursor:default}.el-slider__runway.disabled .el-slider__bar{background-color:#c0c4cc}.el-slider__runway.disabled .el-slider__button{border-color:#c0c4cc}.el-slider__runway.disabled .el-slider__button-wrapper.dragging,.el-slider__runway.disabled .el-slider__button-wrapper.hover,.el-slider__runway.disabled .el-slider__button-wrapper:hover{cursor:not-allowed}.el-slider__runway.disabled .el-slider__button.dragging,.el-slider__runway.disabled .el-slider__button.hover,.el-slider__runway.disabled .el-slider__button:hover{transform:scale(1)}.el-slider__runway.disabled .el-slider__button.dragging,.el-slider__runway.disabled .el-slider__button.hover,.el-slider__runway.disabled .el-slider__button:hover{cursor:not-allowed}.el-slider__input{float:right;margin-top:3px;width:130px}.el-slider__input.el-input-number--mini{margin-top:5px}.el-slider__input.el-input-number--medium{margin-top:0}.el-slider__input.el-input-number--large{margin-top:-2px}.el-slider__bar{background-color:#3869fe;border-bottom-left-radius:3px;border-top-left-radius:3px;height:6px;position:absolute}.el-slider__button-wrapper{background-color:transparent;height:36px;line-height:normal;position:absolute;text-align:center;top:-15px;transform:translateX(-50%);-webkit-user-select:none;-moz-user-select:none;user-select:none;width:36px;z-index:1001}.el-slider__button-wrapper:after{content:"";height:100%}.el-slider__button-wrapper .el-tooltip,.el-slider__button-wrapper:after{display:inline-block;vertical-align:middle}.el-slider__button-wrapper.hover,.el-slider__button-wrapper:hover{cursor:grab}.el-slider__button-wrapper.dragging{cursor:grabbing}.el-slider__button{background-color:#fff;border:2px solid #3869fe;border-radius:50%;height:16px;transition:.2s;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:16px}.el-slider__button.dragging,.el-slider__button.hover,.el-slider__button:hover{transform:scale(1.2)}.el-slider__button.hover,.el-slider__button:hover{cursor:grab}.el-slider__button.dragging{cursor:grabbing}.el-slider__stop{background-color:#fff;border-radius:100%;height:6px;position:absolute;transform:translateX(-50%);width:6px}.el-slider__marks{height:100%;left:12px;top:0;width:18px}.el-slider__marks-text{color:#909399;font-size:14px;margin-top:15px;position:absolute;transform:translateX(-50%)}.el-slider.is-vertical{position:relative}.el-slider.is-vertical .el-slider__runway{height:100%;margin:0 16px;width:6px}.el-slider.is-vertical .el-slider__bar{border-radius:0 0 3px 3px;height:auto;width:6px}.el-slider.is-vertical .el-slider__button-wrapper{left:-15px;top:auto;transform:translateY(50%)}.el-slider.is-vertical .el-slider__stop{transform:translateY(50%)}.el-slider.is-vertical.el-slider--with-input{padding-bottom:58px}.el-slider.is-vertical.el-slider--with-input .el-slider__input{bottom:22px;float:none;margin-top:15px;overflow:visible;position:absolute;width:36px}.el-slider.is-vertical.el-slider--with-input .el-slider__input .el-input__inner{padding-left:5px;padding-right:5px;text-align:center}.el-slider.is-vertical.el-slider--with-input .el-slider__input .el-input-number__decrease,.el-slider.is-vertical.el-slider--with-input .el-slider__input .el-input-number__increase{border:1px solid #dcdfe6;box-sizing:border-box;line-height:20px;margin-top:-1px;top:32px;transition:border-color .2s cubic-bezier(.645,.045,.355,1)}.el-slider.is-vertical.el-slider--with-input .el-slider__input .el-input-number__decrease{border-bottom-left-radius:10px;right:18px;width:18px}.el-slider.is-vertical.el-slider--with-input .el-slider__input .el-input-number__increase{border-bottom-right-radius:10px;width:19px}.el-slider.is-vertical.el-slider--with-input .el-slider__input .el-input-number__increase~.el-input .el-input__inner{border-bottom-left-radius:0;border-bottom-right-radius:0}.el-slider.is-vertical.el-slider--with-input .el-slider__input:hover .el-input-number__decrease,.el-slider.is-vertical.el-slider--with-input .el-slider__input:hover .el-input-number__increase{border-color:#c0c4cc}.el-slider.is-vertical.el-slider--with-input .el-slider__input:active .el-input-number__decrease,.el-slider.is-vertical.el-slider--with-input .el-slider__input:active .el-input-number__increase{border-color:#3869fe}.el-slider.is-vertical .el-slider__marks-text{left:15px;margin-top:0;transform:translateY(50%)}.el-loading-parent--relative{position:relative!important}.el-loading-parent--hidden{overflow:hidden!important}.el-loading-mask{background-color:hsla(0,0%,100%,.9);bottom:0;left:0;margin:0;position:absolute;right:0;top:0;transition:opacity .3s;z-index:2000}.el-loading-mask.is-fullscreen{position:fixed}.el-loading-mask.is-fullscreen .el-loading-spinner{margin-top:-25px}.el-loading-mask.is-fullscreen .el-loading-spinner .circular{height:50px;width:50px}.el-loading-spinner{margin-top:-21px;position:absolute;text-align:center;top:50%;width:100%}.el-loading-spinner .el-loading-text{color:#3869fe;font-size:14px;margin:3px 0}.el-loading-spinner .circular{animation:loading-rotate 2s linear infinite;height:42px;width:42px}.el-loading-spinner .path{stroke-dasharray:90,150;stroke-dashoffset:0;stroke-width:2;stroke:#3869fe;stroke-linecap:round;animation:loading-dash 1.5s ease-in-out infinite}.el-loading-spinner i{color:#3869fe}.el-loading-fade-enter,.el-loading-fade-leave-active{opacity:0}@keyframes loading-rotate{to{transform:rotate(1turn)}}@keyframes loading-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40px}to{stroke-dasharray:90,150;stroke-dashoffset:-120px}}.el-row{box-sizing:border-box;position:relative}.el-row:after,.el-row:before{content:"";display:table}.el-row:after{clear:both}.el-row--flex{display:flex}.el-row--flex:after,.el-row--flex:before{display:none}.el-row--flex.is-justify-center{justify-content:center}.el-row--flex.is-justify-end{justify-content:flex-end}.el-row--flex.is-justify-space-between{justify-content:space-between}.el-row--flex.is-justify-space-around{justify-content:space-around}.el-row--flex.is-align-top{align-items:flex-start}.el-row--flex.is-align-middle{align-items:center}.el-row--flex.is-align-bottom{align-items:flex-end}[class*=el-col-]{box-sizing:border-box;float:left}.el-col-0{display:none;width:0}.el-col-offset-0{margin-left:0}.el-col-pull-0{position:relative;right:0}.el-col-push-0{left:0;position:relative}.el-col-1{width:4.1666666667%}.el-col-offset-1{margin-left:4.1666666667%}.el-col-pull-1{position:relative;right:4.1666666667%}.el-col-push-1{left:4.1666666667%;position:relative}.el-col-2{width:8.3333333333%}.el-col-offset-2{margin-left:8.3333333333%}.el-col-pull-2{position:relative;right:8.3333333333%}.el-col-push-2{left:8.3333333333%;position:relative}.el-col-3{width:12.5%}.el-col-offset-3{margin-left:12.5%}.el-col-pull-3{position:relative;right:12.5%}.el-col-push-3{left:12.5%;position:relative}.el-col-4{width:16.6666666667%}.el-col-offset-4{margin-left:16.6666666667%}.el-col-pull-4{position:relative;right:16.6666666667%}.el-col-push-4{left:16.6666666667%;position:relative}.el-col-5{width:20.8333333333%}.el-col-offset-5{margin-left:20.8333333333%}.el-col-pull-5{position:relative;right:20.8333333333%}.el-col-push-5{left:20.8333333333%;position:relative}.el-col-6{width:25%}.el-col-offset-6{margin-left:25%}.el-col-pull-6{position:relative;right:25%}.el-col-push-6{left:25%;position:relative}.el-col-7{width:29.1666666667%}.el-col-offset-7{margin-left:29.1666666667%}.el-col-pull-7{position:relative;right:29.1666666667%}.el-col-push-7{left:29.1666666667%;position:relative}.el-col-8{width:33.3333333333%}.el-col-offset-8{margin-left:33.3333333333%}.el-col-pull-8{position:relative;right:33.3333333333%}.el-col-push-8{left:33.3333333333%;position:relative}.el-col-9{width:37.5%}.el-col-offset-9{margin-left:37.5%}.el-col-pull-9{position:relative;right:37.5%}.el-col-push-9{left:37.5%;position:relative}.el-col-10{width:41.6666666667%}.el-col-offset-10{margin-left:41.6666666667%}.el-col-pull-10{position:relative;right:41.6666666667%}.el-col-push-10{left:41.6666666667%;position:relative}.el-col-11{width:45.8333333333%}.el-col-offset-11{margin-left:45.8333333333%}.el-col-pull-11{position:relative;right:45.8333333333%}.el-col-push-11{left:45.8333333333%;position:relative}.el-col-12{width:50%}.el-col-offset-12{margin-left:50%}.el-col-pull-12{position:relative;right:50%}.el-col-push-12{left:50%;position:relative}.el-col-13{width:54.1666666667%}.el-col-offset-13{margin-left:54.1666666667%}.el-col-pull-13{position:relative;right:54.1666666667%}.el-col-push-13{left:54.1666666667%;position:relative}.el-col-14{width:58.3333333333%}.el-col-offset-14{margin-left:58.3333333333%}.el-col-pull-14{position:relative;right:58.3333333333%}.el-col-push-14{left:58.3333333333%;position:relative}.el-col-15{width:62.5%}.el-col-offset-15{margin-left:62.5%}.el-col-pull-15{position:relative;right:62.5%}.el-col-push-15{left:62.5%;position:relative}.el-col-16{width:66.6666666667%}.el-col-offset-16{margin-left:66.6666666667%}.el-col-pull-16{position:relative;right:66.6666666667%}.el-col-push-16{left:66.6666666667%;position:relative}.el-col-17{width:70.8333333333%}.el-col-offset-17{margin-left:70.8333333333%}.el-col-pull-17{position:relative;right:70.8333333333%}.el-col-push-17{left:70.8333333333%;position:relative}.el-col-18{width:75%}.el-col-offset-18{margin-left:75%}.el-col-pull-18{position:relative;right:75%}.el-col-push-18{left:75%;position:relative}.el-col-19{width:79.1666666667%}.el-col-offset-19{margin-left:79.1666666667%}.el-col-pull-19{position:relative;right:79.1666666667%}.el-col-push-19{left:79.1666666667%;position:relative}.el-col-20{width:83.3333333333%}.el-col-offset-20{margin-left:83.3333333333%}.el-col-pull-20{position:relative;right:83.3333333333%}.el-col-push-20{left:83.3333333333%;position:relative}.el-col-21{width:87.5%}.el-col-offset-21{margin-left:87.5%}.el-col-pull-21{position:relative;right:87.5%}.el-col-push-21{left:87.5%;position:relative}.el-col-22{width:91.6666666667%}.el-col-offset-22{margin-left:91.6666666667%}.el-col-pull-22{position:relative;right:91.6666666667%}.el-col-push-22{left:91.6666666667%;position:relative}.el-col-23{width:95.8333333333%}.el-col-offset-23{margin-left:95.8333333333%}.el-col-pull-23{position:relative;right:95.8333333333%}.el-col-push-23{left:95.8333333333%;position:relative}.el-col-24{width:100%}.el-col-offset-24{margin-left:100%}.el-col-pull-24{position:relative;right:100%}.el-col-push-24{left:100%;position:relative}@media only screen and (max-width:767px){.el-col-xs-0{display:none;width:0}.el-col-xs-offset-0{margin-left:0}.el-col-xs-pull-0{position:relative;right:0}.el-col-xs-push-0{left:0;position:relative}.el-col-xs-1{width:4.1666666667%}.el-col-xs-offset-1{margin-left:4.1666666667%}.el-col-xs-pull-1{position:relative;right:4.1666666667%}.el-col-xs-push-1{left:4.1666666667%;position:relative}.el-col-xs-2{width:8.3333333333%}.el-col-xs-offset-2{margin-left:8.3333333333%}.el-col-xs-pull-2{position:relative;right:8.3333333333%}.el-col-xs-push-2{left:8.3333333333%;position:relative}.el-col-xs-3{width:12.5%}.el-col-xs-offset-3{margin-left:12.5%}.el-col-xs-pull-3{position:relative;right:12.5%}.el-col-xs-push-3{left:12.5%;position:relative}.el-col-xs-4{width:16.6666666667%}.el-col-xs-offset-4{margin-left:16.6666666667%}.el-col-xs-pull-4{position:relative;right:16.6666666667%}.el-col-xs-push-4{left:16.6666666667%;position:relative}.el-col-xs-5{width:20.8333333333%}.el-col-xs-offset-5{margin-left:20.8333333333%}.el-col-xs-pull-5{position:relative;right:20.8333333333%}.el-col-xs-push-5{left:20.8333333333%;position:relative}.el-col-xs-6{width:25%}.el-col-xs-offset-6{margin-left:25%}.el-col-xs-pull-6{position:relative;right:25%}.el-col-xs-push-6{left:25%;position:relative}.el-col-xs-7{width:29.1666666667%}.el-col-xs-offset-7{margin-left:29.1666666667%}.el-col-xs-pull-7{position:relative;right:29.1666666667%}.el-col-xs-push-7{left:29.1666666667%;position:relative}.el-col-xs-8{width:33.3333333333%}.el-col-xs-offset-8{margin-left:33.3333333333%}.el-col-xs-pull-8{position:relative;right:33.3333333333%}.el-col-xs-push-8{left:33.3333333333%;position:relative}.el-col-xs-9{width:37.5%}.el-col-xs-offset-9{margin-left:37.5%}.el-col-xs-pull-9{position:relative;right:37.5%}.el-col-xs-push-9{left:37.5%;position:relative}.el-col-xs-10{width:41.6666666667%}.el-col-xs-offset-10{margin-left:41.6666666667%}.el-col-xs-pull-10{position:relative;right:41.6666666667%}.el-col-xs-push-10{left:41.6666666667%;position:relative}.el-col-xs-11{width:45.8333333333%}.el-col-xs-offset-11{margin-left:45.8333333333%}.el-col-xs-pull-11{position:relative;right:45.8333333333%}.el-col-xs-push-11{left:45.8333333333%;position:relative}.el-col-xs-12{width:50%}.el-col-xs-offset-12{margin-left:50%}.el-col-xs-pull-12{position:relative;right:50%}.el-col-xs-push-12{left:50%;position:relative}.el-col-xs-13{width:54.1666666667%}.el-col-xs-offset-13{margin-left:54.1666666667%}.el-col-xs-pull-13{position:relative;right:54.1666666667%}.el-col-xs-push-13{left:54.1666666667%;position:relative}.el-col-xs-14{width:58.3333333333%}.el-col-xs-offset-14{margin-left:58.3333333333%}.el-col-xs-pull-14{position:relative;right:58.3333333333%}.el-col-xs-push-14{left:58.3333333333%;position:relative}.el-col-xs-15{width:62.5%}.el-col-xs-offset-15{margin-left:62.5%}.el-col-xs-pull-15{position:relative;right:62.5%}.el-col-xs-push-15{left:62.5%;position:relative}.el-col-xs-16{width:66.6666666667%}.el-col-xs-offset-16{margin-left:66.6666666667%}.el-col-xs-pull-16{position:relative;right:66.6666666667%}.el-col-xs-push-16{left:66.6666666667%;position:relative}.el-col-xs-17{width:70.8333333333%}.el-col-xs-offset-17{margin-left:70.8333333333%}.el-col-xs-pull-17{position:relative;right:70.8333333333%}.el-col-xs-push-17{left:70.8333333333%;position:relative}.el-col-xs-18{width:75%}.el-col-xs-offset-18{margin-left:75%}.el-col-xs-pull-18{position:relative;right:75%}.el-col-xs-push-18{left:75%;position:relative}.el-col-xs-19{width:79.1666666667%}.el-col-xs-offset-19{margin-left:79.1666666667%}.el-col-xs-pull-19{position:relative;right:79.1666666667%}.el-col-xs-push-19{left:79.1666666667%;position:relative}.el-col-xs-20{width:83.3333333333%}.el-col-xs-offset-20{margin-left:83.3333333333%}.el-col-xs-pull-20{position:relative;right:83.3333333333%}.el-col-xs-push-20{left:83.3333333333%;position:relative}.el-col-xs-21{width:87.5%}.el-col-xs-offset-21{margin-left:87.5%}.el-col-xs-pull-21{position:relative;right:87.5%}.el-col-xs-push-21{left:87.5%;position:relative}.el-col-xs-22{width:91.6666666667%}.el-col-xs-offset-22{margin-left:91.6666666667%}.el-col-xs-pull-22{position:relative;right:91.6666666667%}.el-col-xs-push-22{left:91.6666666667%;position:relative}.el-col-xs-23{width:95.8333333333%}.el-col-xs-offset-23{margin-left:95.8333333333%}.el-col-xs-pull-23{position:relative;right:95.8333333333%}.el-col-xs-push-23{left:95.8333333333%;position:relative}.el-col-xs-24{width:100%}.el-col-xs-offset-24{margin-left:100%}.el-col-xs-pull-24{position:relative;right:100%}.el-col-xs-push-24{left:100%;position:relative}}@media only screen and (min-width:768px){.el-col-sm-0{display:none;width:0}.el-col-sm-offset-0{margin-left:0}.el-col-sm-pull-0{position:relative;right:0}.el-col-sm-push-0{left:0;position:relative}.el-col-sm-1{width:4.1666666667%}.el-col-sm-offset-1{margin-left:4.1666666667%}.el-col-sm-pull-1{position:relative;right:4.1666666667%}.el-col-sm-push-1{left:4.1666666667%;position:relative}.el-col-sm-2{width:8.3333333333%}.el-col-sm-offset-2{margin-left:8.3333333333%}.el-col-sm-pull-2{position:relative;right:8.3333333333%}.el-col-sm-push-2{left:8.3333333333%;position:relative}.el-col-sm-3{width:12.5%}.el-col-sm-offset-3{margin-left:12.5%}.el-col-sm-pull-3{position:relative;right:12.5%}.el-col-sm-push-3{left:12.5%;position:relative}.el-col-sm-4{width:16.6666666667%}.el-col-sm-offset-4{margin-left:16.6666666667%}.el-col-sm-pull-4{position:relative;right:16.6666666667%}.el-col-sm-push-4{left:16.6666666667%;position:relative}.el-col-sm-5{width:20.8333333333%}.el-col-sm-offset-5{margin-left:20.8333333333%}.el-col-sm-pull-5{position:relative;right:20.8333333333%}.el-col-sm-push-5{left:20.8333333333%;position:relative}.el-col-sm-6{width:25%}.el-col-sm-offset-6{margin-left:25%}.el-col-sm-pull-6{position:relative;right:25%}.el-col-sm-push-6{left:25%;position:relative}.el-col-sm-7{width:29.1666666667%}.el-col-sm-offset-7{margin-left:29.1666666667%}.el-col-sm-pull-7{position:relative;right:29.1666666667%}.el-col-sm-push-7{left:29.1666666667%;position:relative}.el-col-sm-8{width:33.3333333333%}.el-col-sm-offset-8{margin-left:33.3333333333%}.el-col-sm-pull-8{position:relative;right:33.3333333333%}.el-col-sm-push-8{left:33.3333333333%;position:relative}.el-col-sm-9{width:37.5%}.el-col-sm-offset-9{margin-left:37.5%}.el-col-sm-pull-9{position:relative;right:37.5%}.el-col-sm-push-9{left:37.5%;position:relative}.el-col-sm-10{width:41.6666666667%}.el-col-sm-offset-10{margin-left:41.6666666667%}.el-col-sm-pull-10{position:relative;right:41.6666666667%}.el-col-sm-push-10{left:41.6666666667%;position:relative}.el-col-sm-11{width:45.8333333333%}.el-col-sm-offset-11{margin-left:45.8333333333%}.el-col-sm-pull-11{position:relative;right:45.8333333333%}.el-col-sm-push-11{left:45.8333333333%;position:relative}.el-col-sm-12{width:50%}.el-col-sm-offset-12{margin-left:50%}.el-col-sm-pull-12{position:relative;right:50%}.el-col-sm-push-12{left:50%;position:relative}.el-col-sm-13{width:54.1666666667%}.el-col-sm-offset-13{margin-left:54.1666666667%}.el-col-sm-pull-13{position:relative;right:54.1666666667%}.el-col-sm-push-13{left:54.1666666667%;position:relative}.el-col-sm-14{width:58.3333333333%}.el-col-sm-offset-14{margin-left:58.3333333333%}.el-col-sm-pull-14{position:relative;right:58.3333333333%}.el-col-sm-push-14{left:58.3333333333%;position:relative}.el-col-sm-15{width:62.5%}.el-col-sm-offset-15{margin-left:62.5%}.el-col-sm-pull-15{position:relative;right:62.5%}.el-col-sm-push-15{left:62.5%;position:relative}.el-col-sm-16{width:66.6666666667%}.el-col-sm-offset-16{margin-left:66.6666666667%}.el-col-sm-pull-16{position:relative;right:66.6666666667%}.el-col-sm-push-16{left:66.6666666667%;position:relative}.el-col-sm-17{width:70.8333333333%}.el-col-sm-offset-17{margin-left:70.8333333333%}.el-col-sm-pull-17{position:relative;right:70.8333333333%}.el-col-sm-push-17{left:70.8333333333%;position:relative}.el-col-sm-18{width:75%}.el-col-sm-offset-18{margin-left:75%}.el-col-sm-pull-18{position:relative;right:75%}.el-col-sm-push-18{left:75%;position:relative}.el-col-sm-19{width:79.1666666667%}.el-col-sm-offset-19{margin-left:79.1666666667%}.el-col-sm-pull-19{position:relative;right:79.1666666667%}.el-col-sm-push-19{left:79.1666666667%;position:relative}.el-col-sm-20{width:83.3333333333%}.el-col-sm-offset-20{margin-left:83.3333333333%}.el-col-sm-pull-20{position:relative;right:83.3333333333%}.el-col-sm-push-20{left:83.3333333333%;position:relative}.el-col-sm-21{width:87.5%}.el-col-sm-offset-21{margin-left:87.5%}.el-col-sm-pull-21{position:relative;right:87.5%}.el-col-sm-push-21{left:87.5%;position:relative}.el-col-sm-22{width:91.6666666667%}.el-col-sm-offset-22{margin-left:91.6666666667%}.el-col-sm-pull-22{position:relative;right:91.6666666667%}.el-col-sm-push-22{left:91.6666666667%;position:relative}.el-col-sm-23{width:95.8333333333%}.el-col-sm-offset-23{margin-left:95.8333333333%}.el-col-sm-pull-23{position:relative;right:95.8333333333%}.el-col-sm-push-23{left:95.8333333333%;position:relative}.el-col-sm-24{width:100%}.el-col-sm-offset-24{margin-left:100%}.el-col-sm-pull-24{position:relative;right:100%}.el-col-sm-push-24{left:100%;position:relative}}@media only screen and (min-width:992px){.el-col-md-0{display:none;width:0}.el-col-md-offset-0{margin-left:0}.el-col-md-pull-0{position:relative;right:0}.el-col-md-push-0{left:0;position:relative}.el-col-md-1{width:4.1666666667%}.el-col-md-offset-1{margin-left:4.1666666667%}.el-col-md-pull-1{position:relative;right:4.1666666667%}.el-col-md-push-1{left:4.1666666667%;position:relative}.el-col-md-2{width:8.3333333333%}.el-col-md-offset-2{margin-left:8.3333333333%}.el-col-md-pull-2{position:relative;right:8.3333333333%}.el-col-md-push-2{left:8.3333333333%;position:relative}.el-col-md-3{width:12.5%}.el-col-md-offset-3{margin-left:12.5%}.el-col-md-pull-3{position:relative;right:12.5%}.el-col-md-push-3{left:12.5%;position:relative}.el-col-md-4{width:16.6666666667%}.el-col-md-offset-4{margin-left:16.6666666667%}.el-col-md-pull-4{position:relative;right:16.6666666667%}.el-col-md-push-4{left:16.6666666667%;position:relative}.el-col-md-5{width:20.8333333333%}.el-col-md-offset-5{margin-left:20.8333333333%}.el-col-md-pull-5{position:relative;right:20.8333333333%}.el-col-md-push-5{left:20.8333333333%;position:relative}.el-col-md-6{width:25%}.el-col-md-offset-6{margin-left:25%}.el-col-md-pull-6{position:relative;right:25%}.el-col-md-push-6{left:25%;position:relative}.el-col-md-7{width:29.1666666667%}.el-col-md-offset-7{margin-left:29.1666666667%}.el-col-md-pull-7{position:relative;right:29.1666666667%}.el-col-md-push-7{left:29.1666666667%;position:relative}.el-col-md-8{width:33.3333333333%}.el-col-md-offset-8{margin-left:33.3333333333%}.el-col-md-pull-8{position:relative;right:33.3333333333%}.el-col-md-push-8{left:33.3333333333%;position:relative}.el-col-md-9{width:37.5%}.el-col-md-offset-9{margin-left:37.5%}.el-col-md-pull-9{position:relative;right:37.5%}.el-col-md-push-9{left:37.5%;position:relative}.el-col-md-10{width:41.6666666667%}.el-col-md-offset-10{margin-left:41.6666666667%}.el-col-md-pull-10{position:relative;right:41.6666666667%}.el-col-md-push-10{left:41.6666666667%;position:relative}.el-col-md-11{width:45.8333333333%}.el-col-md-offset-11{margin-left:45.8333333333%}.el-col-md-pull-11{position:relative;right:45.8333333333%}.el-col-md-push-11{left:45.8333333333%;position:relative}.el-col-md-12{width:50%}.el-col-md-offset-12{margin-left:50%}.el-col-md-pull-12{position:relative;right:50%}.el-col-md-push-12{left:50%;position:relative}.el-col-md-13{width:54.1666666667%}.el-col-md-offset-13{margin-left:54.1666666667%}.el-col-md-pull-13{position:relative;right:54.1666666667%}.el-col-md-push-13{left:54.1666666667%;position:relative}.el-col-md-14{width:58.3333333333%}.el-col-md-offset-14{margin-left:58.3333333333%}.el-col-md-pull-14{position:relative;right:58.3333333333%}.el-col-md-push-14{left:58.3333333333%;position:relative}.el-col-md-15{width:62.5%}.el-col-md-offset-15{margin-left:62.5%}.el-col-md-pull-15{position:relative;right:62.5%}.el-col-md-push-15{left:62.5%;position:relative}.el-col-md-16{width:66.6666666667%}.el-col-md-offset-16{margin-left:66.6666666667%}.el-col-md-pull-16{position:relative;right:66.6666666667%}.el-col-md-push-16{left:66.6666666667%;position:relative}.el-col-md-17{width:70.8333333333%}.el-col-md-offset-17{margin-left:70.8333333333%}.el-col-md-pull-17{position:relative;right:70.8333333333%}.el-col-md-push-17{left:70.8333333333%;position:relative}.el-col-md-18{width:75%}.el-col-md-offset-18{margin-left:75%}.el-col-md-pull-18{position:relative;right:75%}.el-col-md-push-18{left:75%;position:relative}.el-col-md-19{width:79.1666666667%}.el-col-md-offset-19{margin-left:79.1666666667%}.el-col-md-pull-19{position:relative;right:79.1666666667%}.el-col-md-push-19{left:79.1666666667%;position:relative}.el-col-md-20{width:83.3333333333%}.el-col-md-offset-20{margin-left:83.3333333333%}.el-col-md-pull-20{position:relative;right:83.3333333333%}.el-col-md-push-20{left:83.3333333333%;position:relative}.el-col-md-21{width:87.5%}.el-col-md-offset-21{margin-left:87.5%}.el-col-md-pull-21{position:relative;right:87.5%}.el-col-md-push-21{left:87.5%;position:relative}.el-col-md-22{width:91.6666666667%}.el-col-md-offset-22{margin-left:91.6666666667%}.el-col-md-pull-22{position:relative;right:91.6666666667%}.el-col-md-push-22{left:91.6666666667%;position:relative}.el-col-md-23{width:95.8333333333%}.el-col-md-offset-23{margin-left:95.8333333333%}.el-col-md-pull-23{position:relative;right:95.8333333333%}.el-col-md-push-23{left:95.8333333333%;position:relative}.el-col-md-24{width:100%}.el-col-md-offset-24{margin-left:100%}.el-col-md-pull-24{position:relative;right:100%}.el-col-md-push-24{left:100%;position:relative}}@media only screen and (min-width:1200px){.el-col-lg-0{display:none;width:0}.el-col-lg-offset-0{margin-left:0}.el-col-lg-pull-0{position:relative;right:0}.el-col-lg-push-0{left:0;position:relative}.el-col-lg-1{width:4.1666666667%}.el-col-lg-offset-1{margin-left:4.1666666667%}.el-col-lg-pull-1{position:relative;right:4.1666666667%}.el-col-lg-push-1{left:4.1666666667%;position:relative}.el-col-lg-2{width:8.3333333333%}.el-col-lg-offset-2{margin-left:8.3333333333%}.el-col-lg-pull-2{position:relative;right:8.3333333333%}.el-col-lg-push-2{left:8.3333333333%;position:relative}.el-col-lg-3{width:12.5%}.el-col-lg-offset-3{margin-left:12.5%}.el-col-lg-pull-3{position:relative;right:12.5%}.el-col-lg-push-3{left:12.5%;position:relative}.el-col-lg-4{width:16.6666666667%}.el-col-lg-offset-4{margin-left:16.6666666667%}.el-col-lg-pull-4{position:relative;right:16.6666666667%}.el-col-lg-push-4{left:16.6666666667%;position:relative}.el-col-lg-5{width:20.8333333333%}.el-col-lg-offset-5{margin-left:20.8333333333%}.el-col-lg-pull-5{position:relative;right:20.8333333333%}.el-col-lg-push-5{left:20.8333333333%;position:relative}.el-col-lg-6{width:25%}.el-col-lg-offset-6{margin-left:25%}.el-col-lg-pull-6{position:relative;right:25%}.el-col-lg-push-6{left:25%;position:relative}.el-col-lg-7{width:29.1666666667%}.el-col-lg-offset-7{margin-left:29.1666666667%}.el-col-lg-pull-7{position:relative;right:29.1666666667%}.el-col-lg-push-7{left:29.1666666667%;position:relative}.el-col-lg-8{width:33.3333333333%}.el-col-lg-offset-8{margin-left:33.3333333333%}.el-col-lg-pull-8{position:relative;right:33.3333333333%}.el-col-lg-push-8{left:33.3333333333%;position:relative}.el-col-lg-9{width:37.5%}.el-col-lg-offset-9{margin-left:37.5%}.el-col-lg-pull-9{position:relative;right:37.5%}.el-col-lg-push-9{left:37.5%;position:relative}.el-col-lg-10{width:41.6666666667%}.el-col-lg-offset-10{margin-left:41.6666666667%}.el-col-lg-pull-10{position:relative;right:41.6666666667%}.el-col-lg-push-10{left:41.6666666667%;position:relative}.el-col-lg-11{width:45.8333333333%}.el-col-lg-offset-11{margin-left:45.8333333333%}.el-col-lg-pull-11{position:relative;right:45.8333333333%}.el-col-lg-push-11{left:45.8333333333%;position:relative}.el-col-lg-12{width:50%}.el-col-lg-offset-12{margin-left:50%}.el-col-lg-pull-12{position:relative;right:50%}.el-col-lg-push-12{left:50%;position:relative}.el-col-lg-13{width:54.1666666667%}.el-col-lg-offset-13{margin-left:54.1666666667%}.el-col-lg-pull-13{position:relative;right:54.1666666667%}.el-col-lg-push-13{left:54.1666666667%;position:relative}.el-col-lg-14{width:58.3333333333%}.el-col-lg-offset-14{margin-left:58.3333333333%}.el-col-lg-pull-14{position:relative;right:58.3333333333%}.el-col-lg-push-14{left:58.3333333333%;position:relative}.el-col-lg-15{width:62.5%}.el-col-lg-offset-15{margin-left:62.5%}.el-col-lg-pull-15{position:relative;right:62.5%}.el-col-lg-push-15{left:62.5%;position:relative}.el-col-lg-16{width:66.6666666667%}.el-col-lg-offset-16{margin-left:66.6666666667%}.el-col-lg-pull-16{position:relative;right:66.6666666667%}.el-col-lg-push-16{left:66.6666666667%;position:relative}.el-col-lg-17{width:70.8333333333%}.el-col-lg-offset-17{margin-left:70.8333333333%}.el-col-lg-pull-17{position:relative;right:70.8333333333%}.el-col-lg-push-17{left:70.8333333333%;position:relative}.el-col-lg-18{width:75%}.el-col-lg-offset-18{margin-left:75%}.el-col-lg-pull-18{position:relative;right:75%}.el-col-lg-push-18{left:75%;position:relative}.el-col-lg-19{width:79.1666666667%}.el-col-lg-offset-19{margin-left:79.1666666667%}.el-col-lg-pull-19{position:relative;right:79.1666666667%}.el-col-lg-push-19{left:79.1666666667%;position:relative}.el-col-lg-20{width:83.3333333333%}.el-col-lg-offset-20{margin-left:83.3333333333%}.el-col-lg-pull-20{position:relative;right:83.3333333333%}.el-col-lg-push-20{left:83.3333333333%;position:relative}.el-col-lg-21{width:87.5%}.el-col-lg-offset-21{margin-left:87.5%}.el-col-lg-pull-21{position:relative;right:87.5%}.el-col-lg-push-21{left:87.5%;position:relative}.el-col-lg-22{width:91.6666666667%}.el-col-lg-offset-22{margin-left:91.6666666667%}.el-col-lg-pull-22{position:relative;right:91.6666666667%}.el-col-lg-push-22{left:91.6666666667%;position:relative}.el-col-lg-23{width:95.8333333333%}.el-col-lg-offset-23{margin-left:95.8333333333%}.el-col-lg-pull-23{position:relative;right:95.8333333333%}.el-col-lg-push-23{left:95.8333333333%;position:relative}.el-col-lg-24{width:100%}.el-col-lg-offset-24{margin-left:100%}.el-col-lg-pull-24{position:relative;right:100%}.el-col-lg-push-24{left:100%;position:relative}}@media only screen and (min-width:1920px){.el-col-xl-0{display:none;width:0}.el-col-xl-offset-0{margin-left:0}.el-col-xl-pull-0{position:relative;right:0}.el-col-xl-push-0{left:0;position:relative}.el-col-xl-1{width:4.1666666667%}.el-col-xl-offset-1{margin-left:4.1666666667%}.el-col-xl-pull-1{position:relative;right:4.1666666667%}.el-col-xl-push-1{left:4.1666666667%;position:relative}.el-col-xl-2{width:8.3333333333%}.el-col-xl-offset-2{margin-left:8.3333333333%}.el-col-xl-pull-2{position:relative;right:8.3333333333%}.el-col-xl-push-2{left:8.3333333333%;position:relative}.el-col-xl-3{width:12.5%}.el-col-xl-offset-3{margin-left:12.5%}.el-col-xl-pull-3{position:relative;right:12.5%}.el-col-xl-push-3{left:12.5%;position:relative}.el-col-xl-4{width:16.6666666667%}.el-col-xl-offset-4{margin-left:16.6666666667%}.el-col-xl-pull-4{position:relative;right:16.6666666667%}.el-col-xl-push-4{left:16.6666666667%;position:relative}.el-col-xl-5{width:20.8333333333%}.el-col-xl-offset-5{margin-left:20.8333333333%}.el-col-xl-pull-5{position:relative;right:20.8333333333%}.el-col-xl-push-5{left:20.8333333333%;position:relative}.el-col-xl-6{width:25%}.el-col-xl-offset-6{margin-left:25%}.el-col-xl-pull-6{position:relative;right:25%}.el-col-xl-push-6{left:25%;position:relative}.el-col-xl-7{width:29.1666666667%}.el-col-xl-offset-7{margin-left:29.1666666667%}.el-col-xl-pull-7{position:relative;right:29.1666666667%}.el-col-xl-push-7{left:29.1666666667%;position:relative}.el-col-xl-8{width:33.3333333333%}.el-col-xl-offset-8{margin-left:33.3333333333%}.el-col-xl-pull-8{position:relative;right:33.3333333333%}.el-col-xl-push-8{left:33.3333333333%;position:relative}.el-col-xl-9{width:37.5%}.el-col-xl-offset-9{margin-left:37.5%}.el-col-xl-pull-9{position:relative;right:37.5%}.el-col-xl-push-9{left:37.5%;position:relative}.el-col-xl-10{width:41.6666666667%}.el-col-xl-offset-10{margin-left:41.6666666667%}.el-col-xl-pull-10{position:relative;right:41.6666666667%}.el-col-xl-push-10{left:41.6666666667%;position:relative}.el-col-xl-11{width:45.8333333333%}.el-col-xl-offset-11{margin-left:45.8333333333%}.el-col-xl-pull-11{position:relative;right:45.8333333333%}.el-col-xl-push-11{left:45.8333333333%;position:relative}.el-col-xl-12{width:50%}.el-col-xl-offset-12{margin-left:50%}.el-col-xl-pull-12{position:relative;right:50%}.el-col-xl-push-12{left:50%;position:relative}.el-col-xl-13{width:54.1666666667%}.el-col-xl-offset-13{margin-left:54.1666666667%}.el-col-xl-pull-13{position:relative;right:54.1666666667%}.el-col-xl-push-13{left:54.1666666667%;position:relative}.el-col-xl-14{width:58.3333333333%}.el-col-xl-offset-14{margin-left:58.3333333333%}.el-col-xl-pull-14{position:relative;right:58.3333333333%}.el-col-xl-push-14{left:58.3333333333%;position:relative}.el-col-xl-15{width:62.5%}.el-col-xl-offset-15{margin-left:62.5%}.el-col-xl-pull-15{position:relative;right:62.5%}.el-col-xl-push-15{left:62.5%;position:relative}.el-col-xl-16{width:66.6666666667%}.el-col-xl-offset-16{margin-left:66.6666666667%}.el-col-xl-pull-16{position:relative;right:66.6666666667%}.el-col-xl-push-16{left:66.6666666667%;position:relative}.el-col-xl-17{width:70.8333333333%}.el-col-xl-offset-17{margin-left:70.8333333333%}.el-col-xl-pull-17{position:relative;right:70.8333333333%}.el-col-xl-push-17{left:70.8333333333%;position:relative}.el-col-xl-18{width:75%}.el-col-xl-offset-18{margin-left:75%}.el-col-xl-pull-18{position:relative;right:75%}.el-col-xl-push-18{left:75%;position:relative}.el-col-xl-19{width:79.1666666667%}.el-col-xl-offset-19{margin-left:79.1666666667%}.el-col-xl-pull-19{position:relative;right:79.1666666667%}.el-col-xl-push-19{left:79.1666666667%;position:relative}.el-col-xl-20{width:83.3333333333%}.el-col-xl-offset-20{margin-left:83.3333333333%}.el-col-xl-pull-20{position:relative;right:83.3333333333%}.el-col-xl-push-20{left:83.3333333333%;position:relative}.el-col-xl-21{width:87.5%}.el-col-xl-offset-21{margin-left:87.5%}.el-col-xl-pull-21{position:relative;right:87.5%}.el-col-xl-push-21{left:87.5%;position:relative}.el-col-xl-22{width:91.6666666667%}.el-col-xl-offset-22{margin-left:91.6666666667%}.el-col-xl-pull-22{position:relative;right:91.6666666667%}.el-col-xl-push-22{left:91.6666666667%;position:relative}.el-col-xl-23{width:95.8333333333%}.el-col-xl-offset-23{margin-left:95.8333333333%}.el-col-xl-pull-23{position:relative;right:95.8333333333%}.el-col-xl-push-23{left:95.8333333333%;position:relative}.el-col-xl-24{width:100%}.el-col-xl-offset-24{margin-left:100%}.el-col-xl-pull-24{position:relative;right:100%}.el-col-xl-push-24{left:100%;position:relative}}.el-upload{cursor:pointer;display:inline-block;outline:none;text-align:center}.el-upload__input{display:none}.el-upload__tip{color:#606266;font-size:12px;margin-top:7px}.el-upload iframe{filter:alpha(opacity=0);left:0;opacity:0;position:absolute;top:0;z-index:-1}.el-upload--picture-card{background-color:#fbfdff;border:1px dashed #c0ccda;border-radius:6px;box-sizing:border-box;cursor:pointer;height:148px;line-height:146px;vertical-align:top;width:148px}.el-upload--picture-card i{color:#8c939d;font-size:28px}.el-upload--picture-card:hover,.el-upload:focus{border-color:#3869fe;color:#3869fe}.el-upload:focus .el-upload-dragger{border-color:#3869fe}.el-upload-dragger{background-color:#fff;border:1px dashed #d9d9d9;border-radius:6px;box-sizing:border-box;cursor:pointer;height:180px;overflow:hidden;position:relative;text-align:center;width:360px}.el-upload-dragger .el-icon-upload{color:#c0c4cc;font-size:67px;line-height:50px;margin:40px 0 16px}.el-upload-dragger+.el-upload__tip{text-align:center}.el-upload-dragger~.el-upload__files{border-top:1px solid #dcdfe6;margin-top:7px;padding-top:5px}.el-upload-dragger .el-upload__text{color:#606266;font-size:14px;text-align:center}.el-upload-dragger .el-upload__text em{color:#3869fe;font-style:normal}.el-upload-dragger:hover{border-color:#3869fe}.el-upload-dragger.is-dragover{background-color:rgba(32,159,255,.06);border:2px dashed #3869fe}.el-upload-list{list-style:none;margin:0;padding:0}.el-upload-list__item{border-radius:4px;box-sizing:border-box;color:#606266;font-size:14px;line-height:1.8;margin-top:5px;position:relative;transition:all .5s cubic-bezier(.55,0,.1,1);width:100%}.el-upload-list__item .el-progress{position:absolute;top:20px;width:100%}.el-upload-list__item .el-progress__text{position:absolute;right:0;top:-13px}.el-upload-list__item .el-progress-bar{margin-right:0;padding-right:0}.el-upload-list__item:first-child{margin-top:10px}.el-upload-list__item .el-icon-upload-success{color:#67c23a}.el-upload-list__item .el-icon-close{color:#606266;cursor:pointer;display:none;opacity:.75;position:absolute;right:5px;top:5px}.el-upload-list__item .el-icon-close:hover{opacity:1}.el-upload-list__item .el-icon-close-tip{color:#3869fe;cursor:pointer;display:none;font-size:12px;opacity:1;position:absolute;right:5px;top:5px}.el-upload-list__item:hover{background-color:#f5f7fa}.el-upload-list__item:hover .el-icon-close{display:inline-block}.el-upload-list__item:hover .el-progress__text{display:none}.el-upload-list__item.is-success .el-upload-list__item-status-label{display:block}.el-upload-list__item.is-success .el-upload-list__item-name:focus,.el-upload-list__item.is-success .el-upload-list__item-name:hover{color:#3869fe;cursor:pointer}.el-upload-list__item.is-success:focus:not(:hover) .el-icon-close-tip{display:inline-block}.el-upload-list__item.is-success:active,.el-upload-list__item.is-success:not(.focusing):focus{outline-width:0}.el-upload-list__item.is-success:active .el-icon-close-tip,.el-upload-list__item.is-success:focus .el-upload-list__item-status-label,.el-upload-list__item.is-success:hover .el-upload-list__item-status-label,.el-upload-list__item.is-success:not(.focusing):focus .el-icon-close-tip{display:none}.el-upload-list.is-disabled .el-upload-list__item:hover .el-upload-list__item-status-label{display:block}.el-upload-list__item-name{color:#606266;display:block;margin-right:40px;overflow:hidden;padding-left:4px;text-overflow:ellipsis;transition:color .3s;white-space:nowrap}.el-upload-list__item-name [class^=el-icon]{color:#909399;height:100%;line-height:inherit;margin-right:7px}.el-upload-list__item-status-label{display:none;line-height:inherit;position:absolute;right:5px;top:0}.el-upload-list__item-delete{color:#606266;display:none;font-size:12px;position:absolute;right:10px;top:0}.el-upload-list__item-delete:hover{color:#3869fe}.el-upload-list--picture-card{display:inline;margin:0;vertical-align:top}.el-upload-list--picture-card .el-upload-list__item{background-color:#fff;border:1px solid #c0ccda;border-radius:6px;box-sizing:border-box;display:inline-block;height:148px;margin:0 8px 8px 0;overflow:hidden;width:148px}.el-upload-list--picture-card .el-upload-list__item .el-icon-check,.el-upload-list--picture-card .el-upload-list__item .el-icon-circle-check{color:#fff}.el-upload-list--picture-card .el-upload-list__item .el-icon-close,.el-upload-list--picture-card .el-upload-list__item:hover .el-upload-list__item-status-label{display:none}.el-upload-list--picture-card .el-upload-list__item:hover .el-progress__text{display:block}.el-upload-list--picture-card .el-upload-list__item-name{display:none}.el-upload-list--picture-card .el-upload-list__item-thumbnail{height:100%;width:100%}.el-upload-list--picture-card .el-upload-list__item-status-label{background:#13ce66;box-shadow:0 0 1pc 1px rgba(0,0,0,.2);height:24px;position:absolute;right:-15px;text-align:center;top:-6px;transform:rotate(45deg);width:40px}.el-upload-list--picture-card .el-upload-list__item-status-label i{font-size:12px;margin-top:11px;transform:rotate(-45deg)}.el-upload-list--picture-card .el-upload-list__item-actions{background-color:rgba(0,0,0,.5);color:#fff;cursor:default;font-size:20px;height:100%;left:0;opacity:0;position:absolute;text-align:center;top:0;transition:opacity .3s;width:100%}.el-upload-list--picture-card .el-upload-list__item-actions:after{content:"";display:inline-block;height:100%;vertical-align:middle}.el-upload-list--picture-card .el-upload-list__item-actions span{cursor:pointer;display:none}.el-upload-list--picture-card .el-upload-list__item-actions span+span{margin-left:15px}.el-upload-list--picture-card .el-upload-list__item-actions .el-upload-list__item-delete{color:inherit;font-size:inherit;position:static}.el-upload-list--picture-card .el-upload-list__item-actions:hover{opacity:1}.el-upload-list--picture-card .el-upload-list__item-actions:hover span{display:inline-block}.el-upload-list--picture-card .el-progress{bottom:auto;left:50%;top:50%;transform:translate(-50%,-50%);width:126px}.el-upload-list--picture-card .el-progress .el-progress__text{top:50%}.el-upload-list--picture .el-upload-list__item{background-color:#fff;border:1px solid #c0ccda;border-radius:6px;box-sizing:border-box;height:92px;margin-top:10px;overflow:hidden;padding:10px 10px 10px 90px;z-index:0}.el-upload-list--picture .el-upload-list__item .el-icon-check,.el-upload-list--picture .el-upload-list__item .el-icon-circle-check{color:#fff}.el-upload-list--picture .el-upload-list__item:hover .el-upload-list__item-status-label{background:transparent;box-shadow:none;right:-12px;top:-2px}.el-upload-list--picture .el-upload-list__item:hover .el-progress__text{display:block}.el-upload-list--picture .el-upload-list__item.is-success .el-upload-list__item-name{line-height:70px;margin-top:0}.el-upload-list--picture .el-upload-list__item.is-success .el-upload-list__item-name i{display:none}.el-upload-list--picture .el-upload-list__item-thumbnail{background-color:#fff;display:inline-block;float:left;height:70px;margin-left:-80px;position:relative;vertical-align:middle;width:70px;z-index:1}.el-upload-list--picture .el-upload-list__item-name{display:block;margin-top:20px}.el-upload-list--picture .el-upload-list__item-name i{font-size:70px;left:9px;line-height:1;position:absolute;top:10px}.el-upload-list--picture .el-upload-list__item-status-label{background:#13ce66;box-shadow:0 1px 1px #ccc;height:26px;position:absolute;right:-17px;text-align:center;top:-7px;transform:rotate(45deg);width:46px}.el-upload-list--picture .el-upload-list__item-status-label i{font-size:12px;margin-top:12px;transform:rotate(-45deg)}.el-upload-list--picture .el-progress{position:relative;top:-7px}.el-upload-cover{cursor:default;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:10}.el-upload-cover:after{content:"";display:inline-block;height:100%;vertical-align:middle}.el-upload-cover img{display:block;height:100%;width:100%}.el-upload-cover__label{background:#13ce66;box-shadow:0 0 1pc 1px rgba(0,0,0,.2);height:24px;position:absolute;right:-15px;text-align:center;top:-6px;transform:rotate(45deg);width:40px}.el-upload-cover__label i{color:#fff;font-size:12px;margin-top:11px;transform:rotate(-45deg)}.el-upload-cover__progress{display:inline-block;position:static;vertical-align:middle;width:243px}.el-upload-cover__progress+.el-upload__inner{opacity:0}.el-upload-cover__content{height:100%;left:0;position:absolute;top:0;width:100%}.el-upload-cover__interact{background-color:rgba(0,0,0,.72);bottom:0;height:100%;left:0;position:absolute;text-align:center;width:100%}.el-upload-cover__interact .btn{color:#fff;cursor:pointer;display:inline-block;font-size:14px;margin-top:60px;transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1);vertical-align:middle}.el-upload-cover__interact .btn i{margin-top:0}.el-upload-cover__interact .btn span{opacity:0;transition:opacity .15s linear}.el-upload-cover__interact .btn:not(:first-child){margin-left:35px}.el-upload-cover__interact .btn:hover{transform:translateY(-13px)}.el-upload-cover__interact .btn:hover span{opacity:1}.el-upload-cover__interact .btn i{color:#fff;display:block;font-size:24px;line-height:inherit;margin:0 auto 5px}.el-upload-cover__title{background-color:#fff;bottom:0;color:#303133;font-size:14px;font-weight:400;height:36px;left:0;line-height:36px;margin:0;overflow:hidden;padding:0 10px;position:absolute;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%}.el-upload-cover+.el-upload__inner{opacity:0;position:relative;z-index:1}.el-progress{line-height:1;position:relative}.el-progress__text{color:#606266;display:inline-block;font-size:14px;line-height:1;margin-left:10px;vertical-align:middle}.el-progress__text i{display:block;vertical-align:middle}.el-progress--circle,.el-progress--dashboard{display:inline-block}.el-progress--circle .el-progress__text,.el-progress--dashboard .el-progress__text{left:0;margin:0;position:absolute;text-align:center;top:50%;transform:translateY(-50%);width:100%}.el-progress--circle .el-progress__text i,.el-progress--dashboard .el-progress__text i{display:inline-block;vertical-align:middle}.el-progress--without-text .el-progress__text{display:none}.el-progress--without-text .el-progress-bar{display:block;margin-right:0;padding-right:0}.el-progress--text-inside .el-progress-bar{margin-right:0;padding-right:0}.el-progress.is-success .el-progress-bar__inner{background-color:#67c23a}.el-progress.is-success .el-progress__text{color:#67c23a}.el-progress.is-warning .el-progress-bar__inner{background-color:#e6a23c}.el-progress.is-warning .el-progress__text{color:#e6a23c}.el-progress.is-exception .el-progress-bar__inner{background-color:#f56c6c}.el-progress.is-exception .el-progress__text{color:#f56c6c}.el-progress-bar{box-sizing:border-box;display:inline-block;margin-right:-55px;padding-right:50px;vertical-align:middle;width:100%}.el-progress-bar__outer{background-color:#ebeef5;border-radius:100px;height:6px;overflow:hidden;position:relative;vertical-align:middle}.el-progress-bar__inner{background-color:#3869fe;border-radius:100px;height:100%;left:0;line-height:1;position:absolute;text-align:right;top:0;transition:width .6s ease;white-space:nowrap}.el-progress-bar__inner:after{content:"";display:inline-block;height:100%;vertical-align:middle}.el-progress-bar__innerText{color:#fff;display:inline-block;font-size:12px;margin:0 5px;vertical-align:middle}@keyframes progress{0%{background-position:0 0}to{background-position:32px 0}}.el-time-spinner{white-space:nowrap;width:100%}.el-spinner{display:inline-block;vertical-align:middle}.el-spinner-inner{animation:rotate 2s linear infinite;height:50px;width:50px}.el-spinner-inner .path{stroke:#ececec;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{to{transform:rotate(1turn)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}.el-message{align-items:center;background-color:#edf2fc;border:1px solid #ebeef5;border-radius:4px;box-sizing:border-box;display:flex;left:50%;min-width:380px;overflow:hidden;padding:15px 15px 15px 20px;position:fixed;top:20px;transform:translateX(-50%);transition:opacity .3s,transform .4s,top .4s}.el-message.is-center{justify-content:center}.el-message.is-closable .el-message__content{padding-right:16px}.el-message p{margin:0}.el-message--info .el-message__content{color:#909399}.el-message--success{background-color:#f0f9eb;border-color:#e1f3d8}.el-message--success .el-message__content{color:#67c23a}.el-message--warning{background-color:#fdf6ec;border-color:#faecd8}.el-message--warning .el-message__content{color:#e6a23c}.el-message--error{background-color:#fef0f0;border-color:#fde2e2}.el-message--error .el-message__content{color:#f56c6c}.el-message__icon{margin-right:10px}.el-message__content{font-size:14px;line-height:1;padding:0}.el-message__content:focus{outline-width:0}.el-message__closeBtn{color:#c0c4cc;cursor:pointer;font-size:16px;position:absolute;right:15px;top:50%;transform:translateY(-50%)}.el-message__closeBtn:focus{outline-width:0}.el-message__closeBtn:hover{color:#909399}.el-message .el-icon-success{color:#67c23a}.el-message .el-icon-error{color:#f56c6c}.el-message .el-icon-info{color:#909399}.el-message .el-icon-warning{color:#e6a23c}.el-message-fade-enter,.el-message-fade-leave-active{opacity:0;transform:translate(-50%,-100%)}.el-badge{display:inline-block;position:relative;vertical-align:middle}.el-badge__content{background-color:#f56c6c;border:1px solid #fff;border-radius:10px;color:#fff;display:inline-block;font-size:12px;height:18px;line-height:18px;padding:0 6px;text-align:center;white-space:nowrap}.el-badge__content.is-fixed{position:absolute;right:10px;top:0;transform:translateY(-50%) translateX(100%)}.el-badge__content.is-fixed.is-dot{right:5px}.el-badge__content.is-dot{border-radius:50%;height:8px;padding:0;right:0;width:8px}.el-badge__content--primary{background-color:#3869fe}.el-badge__content--success{background-color:#67c23a}.el-badge__content--warning{background-color:#e6a23c}.el-badge__content--info{background-color:#909399}.el-badge__content--danger{background-color:#f56c6c}.el-card{background-color:#fff;border:1px solid #ebeef5;border-radius:4px;color:#303133;overflow:hidden;transition:.3s}.el-card.is-always-shadow,.el-card.is-hover-shadow:focus,.el-card.is-hover-shadow:hover{box-shadow:0 2px 12px 0 rgba(0,0,0,.1)}.el-card__header{border-bottom:1px solid #ebeef5;box-sizing:border-box;padding:18px 20px}.el-card__body{padding:20px}.el-rate{height:20px;line-height:1}.el-rate:active,.el-rate:focus{outline-width:0}.el-rate__item{font-size:0;vertical-align:middle}.el-rate__icon,.el-rate__item{display:inline-block;position:relative}.el-rate__icon{color:#c0c4cc;font-size:18px;margin-right:6px;transition:.3s}.el-rate__icon.hover{transform:scale(1.15)}.el-rate__decimal,.el-rate__icon .path2{left:0;position:absolute;top:0}.el-rate__decimal{display:inline-block;overflow:hidden}.el-rate__text{font-size:14px;vertical-align:middle}.el-steps{display:flex}.el-steps--simple{background:#f5f7fa;border-radius:4px;padding:13px 8%}.el-steps--horizontal{white-space:nowrap}.el-steps--vertical{flex-flow:column;height:100%}.el-step{flex-shrink:1;position:relative}.el-step:last-of-type .el-step__line{display:none}.el-step:last-of-type.is-flex{flex-basis:auto!important;flex-grow:0;flex-shrink:0}.el-step:last-of-type .el-step__description,.el-step:last-of-type .el-step__main{padding-right:0}.el-step__head{position:relative;width:100%}.el-step__head.is-process{border-color:#303133;color:#303133}.el-step__head.is-wait{border-color:#c0c4cc;color:#c0c4cc}.el-step__head.is-success{border-color:#67c23a;color:#67c23a}.el-step__head.is-error{border-color:#f56c6c;color:#f56c6c}.el-step__head.is-finish{border-color:#3869fe;color:#3869fe}.el-step__icon{align-items:center;background:#fff;box-sizing:border-box;display:inline-flex;font-size:14px;height:24px;justify-content:center;position:relative;transition:.15s ease-out;width:24px;z-index:1}.el-step__icon.is-text{border:2px solid;border-color:inherit;border-radius:50%}.el-step__icon.is-icon{width:40px}.el-step__icon-inner{color:inherit;display:inline-block;font-weight:700;line-height:1;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.el-step__icon-inner[class*=el-icon]:not(.is-status){font-size:25px;font-weight:400}.el-step__icon-inner.is-status{transform:translateY(1px)}.el-step__line{background-color:#c0c4cc;border-color:inherit;position:absolute}.el-step__line-inner{border:1px solid;border-color:inherit;box-sizing:border-box;display:block;height:0;transition:.15s ease-out;width:0}.el-step__main{text-align:left;white-space:normal}.el-step__title{font-size:16px;line-height:38px}.el-step__title.is-process{color:#303133;font-weight:700}.el-step__title.is-wait{color:#c0c4cc}.el-step__title.is-success{color:#67c23a}.el-step__title.is-error{color:#f56c6c}.el-step__title.is-finish{color:#3869fe}.el-step__description{font-size:12px;font-weight:400;line-height:20px;margin-top:-5px;padding-right:10%}.el-step__description.is-process{color:#303133}.el-step__description.is-wait{color:#c0c4cc}.el-step__description.is-success{color:#67c23a}.el-step__description.is-error{color:#f56c6c}.el-step__description.is-finish{color:#3869fe}.el-step.is-horizontal{display:inline-block}.el-step.is-horizontal .el-step__line{height:2px;left:0;right:0;top:11px}.el-step.is-vertical{display:flex}.el-step.is-vertical .el-step__head{flex-grow:0;width:24px}.el-step.is-vertical .el-step__main{flex-grow:1;padding-left:10px}.el-step.is-vertical .el-step__title{line-height:24px;padding-bottom:8px}.el-step.is-vertical .el-step__line{bottom:0;left:11px;top:0;width:2px}.el-step.is-vertical .el-step__icon.is-icon{width:24px}.el-step.is-center .el-step__head,.el-step.is-center .el-step__main{text-align:center}.el-step.is-center .el-step__description{padding-left:20%;padding-right:20%}.el-step.is-center .el-step__line{left:50%;right:-50%}.el-step.is-simple{align-items:center;display:flex}.el-step.is-simple .el-step__head{font-size:0;padding-right:10px;width:auto}.el-step.is-simple .el-step__icon{background:transparent;font-size:12px;height:16px;width:16px}.el-step.is-simple .el-step__icon-inner[class*=el-icon]:not(.is-status){font-size:18px}.el-step.is-simple .el-step__icon-inner.is-status{transform:scale(.8) translateY(1px)}.el-step.is-simple .el-step__main{align-items:stretch;display:flex;flex-grow:1;position:relative}.el-step.is-simple .el-step__title{font-size:16px;line-height:20px}.el-step.is-simple:not(:last-of-type) .el-step__title{max-width:50%;word-break:break-all}.el-step.is-simple .el-step__arrow{align-items:center;display:flex;flex-grow:1;justify-content:center}.el-step.is-simple .el-step__arrow:after,.el-step.is-simple .el-step__arrow:before{background:#c0c4cc;content:"";display:inline-block;height:15px;position:absolute;width:1px}.el-step.is-simple .el-step__arrow:before{transform:rotate(-45deg) translateY(-4px);transform-origin:0 0}.el-step.is-simple .el-step__arrow:after{transform:rotate(45deg) translateY(4px);transform-origin:100% 100%}.el-step.is-simple:last-of-type .el-step__arrow{display:none}.el-carousel{position:relative}.el-carousel--horizontal{overflow-x:hidden}.el-carousel--vertical{overflow-y:hidden}.el-carousel__container{height:300px;position:relative}.el-carousel__arrow{background-color:rgba(31,45,61,.11);border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:12px;height:36px;margin:0;outline:none;padding:0;position:absolute;text-align:center;top:50%;transform:translateY(-50%);transition:.3s;width:36px;z-index:10}.el-carousel__arrow--left{left:16px}.el-carousel__arrow--right{right:16px}.el-carousel__arrow:hover{background-color:rgba(31,45,61,.23)}.el-carousel__arrow i{cursor:pointer}.el-carousel__indicators{list-style:none;margin:0;padding:0;position:absolute;z-index:2}.el-carousel__indicators--horizontal{bottom:0;left:50%;transform:translateX(-50%)}.el-carousel__indicators--vertical{right:0;top:50%;transform:translateY(-50%)}.el-carousel__indicators--outside{bottom:26px;position:static;text-align:center;transform:none}.el-carousel__indicators--outside .el-carousel__indicator:hover button{opacity:.64}.el-carousel__indicators--outside button{background-color:#c0c4cc;opacity:.24}.el-carousel__indicators--labels{left:0;right:0;text-align:center;transform:none}.el-carousel__indicators--labels .el-carousel__button{font-size:12px;height:auto;padding:2px 18px;width:auto}.el-carousel__indicators--labels .el-carousel__indicator{padding:6px 4px}.el-carousel__indicator{background-color:transparent;cursor:pointer}.el-carousel__indicator:hover button{opacity:.72}.el-carousel__indicator--horizontal{display:inline-block;padding:12px 4px}.el-carousel__indicator--vertical{padding:4px 12px}.el-carousel__indicator--vertical .el-carousel__button{height:15px;width:2px}.el-carousel__indicator.is-active button{opacity:1}.el-carousel__button{background-color:#fff;border:none;cursor:pointer;display:block;height:2px;margin:0;opacity:.48;outline:none;padding:0;transition:.3s;width:30px}.carousel-arrow-left-enter,.carousel-arrow-left-leave-active{opacity:0;transform:translateY(-50%) translateX(-10px)}.carousel-arrow-right-enter,.carousel-arrow-right-leave-active{opacity:0;transform:translateY(-50%) translateX(10px)}.el-carousel__item{display:inline-block;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:0}.el-carousel__item.is-active{z-index:2}.el-carousel__item--card,.el-carousel__item.is-animating{transition:transform .4s ease-in-out}.el-carousel__item--card{width:50%}.el-carousel__item--card.is-in-stage{cursor:pointer;z-index:1}.el-carousel__item--card.is-in-stage.is-hover .el-carousel__mask,.el-carousel__item--card.is-in-stage:hover .el-carousel__mask{opacity:.12}.el-carousel__item--card.is-active{z-index:2}.el-carousel__mask{background-color:#fff;height:100%;left:0;opacity:.24;position:absolute;top:0;transition:.2s;width:100%}.fade-in-linear-enter-active,.fade-in-linear-leave-active{transition:opacity .2s linear}.fade-in-linear-enter,.fade-in-linear-leave,.fade-in-linear-leave-active{opacity:0}.el-fade-in-linear-enter-active,.el-fade-in-linear-leave-active{transition:opacity .2s linear}.el-fade-in-linear-enter,.el-fade-in-linear-leave,.el-fade-in-linear-leave-active{opacity:0}.el-fade-in-enter-active,.el-fade-in-leave-active{transition:all .3s cubic-bezier(.55,0,.1,1)}.el-fade-in-enter,.el-fade-in-leave-active{opacity:0}.el-zoom-in-center-enter-active,.el-zoom-in-center-leave-active{transition:all .3s cubic-bezier(.55,0,.1,1)}.el-zoom-in-center-enter,.el-zoom-in-center-leave-active{opacity:0;transform:scaleX(0)}.el-zoom-in-top-enter-active,.el-zoom-in-top-leave-active{opacity:1;transform:scaleY(1);transform-origin:center top;transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1)}.el-zoom-in-top-enter,.el-zoom-in-top-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-bottom-enter-active,.el-zoom-in-bottom-leave-active{opacity:1;transform:scaleY(1);transform-origin:center bottom;transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1)}.el-zoom-in-bottom-enter,.el-zoom-in-bottom-leave-active{opacity:0;transform:scaleY(0)}.el-zoom-in-left-enter-active,.el-zoom-in-left-leave-active{opacity:1;transform:scale(1);transform-origin:top left;transition:transform .3s cubic-bezier(.23,1,.32,1),opacity .3s cubic-bezier(.23,1,.32,1)}.el-zoom-in-left-enter,.el-zoom-in-left-leave-active{opacity:0;transform:scale(.45)}.collapse-transition{transition:height .3s ease-in-out,padding-top .3s ease-in-out,padding-bottom .3s ease-in-out}.horizontal-collapse-transition{transition:width .3s ease-in-out,padding-left .3s ease-in-out,padding-right .3s ease-in-out}.el-list-enter-active,.el-list-leave-active{transition:all 1s}.el-list-enter,.el-list-leave-active{opacity:0;transform:translateY(-30px)}.el-opacity-transition{transition:opacity .3s cubic-bezier(.55,0,.1,1)}.el-collapse{border-bottom:1px solid #ebeef5;border-top:1px solid #ebeef5}.el-collapse-item.is-disabled .el-collapse-item__header{color:#bbb;cursor:not-allowed}.el-collapse-item__header{align-items:center;background-color:#fff;border-bottom:1px solid #ebeef5;color:#303133;cursor:pointer;display:flex;font-size:13px;font-weight:500;height:48px;line-height:48px;outline:none;transition:border-bottom-color .3s}.el-collapse-item__arrow{font-weight:300;margin:0 8px 0 auto;transition:transform .3s}.el-collapse-item__arrow.is-active{transform:rotate(90deg)}.el-collapse-item__header.focusing:focus:not(:hover){color:#3869fe}.el-collapse-item__header.is-active{border-bottom-color:transparent}.el-collapse-item__wrap{background-color:#fff;border-bottom:1px solid #ebeef5;box-sizing:border-box;overflow:hidden;will-change:height}.el-collapse-item__content{color:#303133;font-size:13px;line-height:1.7692307692;padding-bottom:25px}.el-collapse-item:last-child{margin-bottom:-1px}.el-popper .popper__arrow,.el-popper .popper__arrow:after{border-color:transparent;border-style:solid;display:block;height:0;position:absolute;width:0}.el-popper .popper__arrow{border-width:6px;filter:drop-shadow(0 2px 12px rgba(0,0,0,.03))}.el-popper .popper__arrow:after{border-width:6px;content:" "}.el-popper[x-placement^=top]{margin-bottom:12px}.el-popper[x-placement^=top] .popper__arrow{border-bottom-width:0;border-top-color:#ebeef5;bottom:-6px;left:50%;margin-right:3px}.el-popper[x-placement^=top] .popper__arrow:after{border-bottom-width:0;border-top-color:#fff;bottom:1px;margin-left:-6px}.el-popper[x-placement^=bottom]{margin-top:12px}.el-popper[x-placement^=bottom] .popper__arrow{border-bottom-color:#ebeef5;border-top-width:0;left:50%;margin-right:3px;top:-6px}.el-popper[x-placement^=bottom] .popper__arrow:after{border-bottom-color:#fff;border-top-width:0;margin-left:-6px;top:1px}.el-popper[x-placement^=right]{margin-left:12px}.el-popper[x-placement^=right] .popper__arrow{border-left-width:0;border-right-color:#ebeef5;left:-6px;margin-bottom:3px;top:50%}.el-popper[x-placement^=right] .popper__arrow:after{border-left-width:0;border-right-color:#fff;bottom:-6px;left:1px}.el-popper[x-placement^=left]{margin-right:12px}.el-popper[x-placement^=left] .popper__arrow{border-left-color:#ebeef5;border-right-width:0;margin-bottom:3px;right:-6px;top:50%}.el-popper[x-placement^=left] .popper__arrow:after{border-left-color:#fff;border-right-width:0;bottom:-6px;margin-left:-6px;right:1px}.el-tag{background-color:#ebf0ff;border:1px solid #d7e1ff;border-radius:4px;box-sizing:border-box;color:#3869fe;display:inline-block;font-size:12px;height:32px;line-height:30px;padding:0 10px;white-space:nowrap}.el-tag.is-hit{border-color:#3869fe}.el-tag .el-tag__close{color:#3869fe}.el-tag .el-tag__close:hover{background-color:#3869fe;color:#fff}.el-tag.el-tag--info{background-color:#f4f4f5;border-color:#e9e9eb;color:#909399}.el-tag.el-tag--info.is-hit{border-color:#909399}.el-tag.el-tag--info .el-tag__close{color:#909399}.el-tag.el-tag--info .el-tag__close:hover{background-color:#909399;color:#fff}.el-tag.el-tag--success{background-color:#f0f9eb;border-color:#e1f3d8;color:#67c23a}.el-tag.el-tag--success.is-hit{border-color:#67c23a}.el-tag.el-tag--success .el-tag__close{color:#67c23a}.el-tag.el-tag--success .el-tag__close:hover{background-color:#67c23a;color:#fff}.el-tag.el-tag--warning{background-color:#fdf6ec;border-color:#faecd8;color:#e6a23c}.el-tag.el-tag--warning.is-hit{border-color:#e6a23c}.el-tag.el-tag--warning .el-tag__close{color:#e6a23c}.el-tag.el-tag--warning .el-tag__close:hover{background-color:#e6a23c;color:#fff}.el-tag.el-tag--danger{background-color:#fef0f0;border-color:#fde2e2;color:#f56c6c}.el-tag.el-tag--danger.is-hit{border-color:#f56c6c}.el-tag.el-tag--danger .el-tag__close{color:#f56c6c}.el-tag.el-tag--danger .el-tag__close:hover{background-color:#f56c6c;color:#fff}.el-tag .el-icon-close{border-radius:50%;cursor:pointer;font-size:12px;height:16px;line-height:16px;position:relative;right:-5px;text-align:center;top:-1px;vertical-align:middle;width:16px}.el-tag .el-icon-close:before{display:block}.el-tag--dark{background-color:#3869fe;color:#fff}.el-tag--dark,.el-tag--dark.is-hit{border-color:#3869fe}.el-tag--dark .el-tag__close{color:#fff}.el-tag--dark .el-tag__close:hover{background-color:#6087fe;color:#fff}.el-tag--dark.el-tag--info{background-color:#909399;border-color:#909399;color:#fff}.el-tag--dark.el-tag--info.is-hit{border-color:#909399}.el-tag--dark.el-tag--info .el-tag__close{color:#fff}.el-tag--dark.el-tag--info .el-tag__close:hover{background-color:#a6a9ad;color:#fff}.el-tag--dark.el-tag--success{background-color:#67c23a;border-color:#67c23a;color:#fff}.el-tag--dark.el-tag--success.is-hit{border-color:#67c23a}.el-tag--dark.el-tag--success .el-tag__close{color:#fff}.el-tag--dark.el-tag--success .el-tag__close:hover{background-color:#85ce61;color:#fff}.el-tag--dark.el-tag--warning{background-color:#e6a23c;border-color:#e6a23c;color:#fff}.el-tag--dark.el-tag--warning.is-hit{border-color:#e6a23c}.el-tag--dark.el-tag--warning .el-tag__close{color:#fff}.el-tag--dark.el-tag--warning .el-tag__close:hover{background-color:#ebb563;color:#fff}.el-tag--dark.el-tag--danger{background-color:#f56c6c;border-color:#f56c6c;color:#fff}.el-tag--dark.el-tag--danger.is-hit{border-color:#f56c6c}.el-tag--dark.el-tag--danger .el-tag__close{color:#fff}.el-tag--dark.el-tag--danger .el-tag__close:hover{background-color:#f78989;color:#fff}.el-tag--plain{background-color:#fff;border-color:#afc3ff;color:#3869fe}.el-tag--plain.is-hit{border-color:#3869fe}.el-tag--plain .el-tag__close{color:#3869fe}.el-tag--plain .el-tag__close:hover{background-color:#3869fe;color:#fff}.el-tag--plain.el-tag--info{background-color:#fff;border-color:#d3d4d6;color:#909399}.el-tag--plain.el-tag--info.is-hit{border-color:#909399}.el-tag--plain.el-tag--info .el-tag__close{color:#909399}.el-tag--plain.el-tag--info .el-tag__close:hover{background-color:#909399;color:#fff}.el-tag--plain.el-tag--success{background-color:#fff;border-color:#c2e7b0;color:#67c23a}.el-tag--plain.el-tag--success.is-hit{border-color:#67c23a}.el-tag--plain.el-tag--success .el-tag__close{color:#67c23a}.el-tag--plain.el-tag--success .el-tag__close:hover{background-color:#67c23a;color:#fff}.el-tag--plain.el-tag--warning{background-color:#fff;border-color:#f5dab1;color:#e6a23c}.el-tag--plain.el-tag--warning.is-hit{border-color:#e6a23c}.el-tag--plain.el-tag--warning .el-tag__close{color:#e6a23c}.el-tag--plain.el-tag--warning .el-tag__close:hover{background-color:#e6a23c;color:#fff}.el-tag--plain.el-tag--danger{background-color:#fff;border-color:#fbc4c4;color:#f56c6c}.el-tag--plain.el-tag--danger.is-hit{border-color:#f56c6c}.el-tag--plain.el-tag--danger .el-tag__close{color:#f56c6c}.el-tag--plain.el-tag--danger .el-tag__close:hover{background-color:#f56c6c;color:#fff}.el-tag--medium{height:28px;line-height:26px}.el-tag--medium .el-icon-close{transform:scale(.8)}.el-tag--small{height:24px;line-height:22px;padding:0 8px}.el-tag--small .el-icon-close{transform:scale(.8)}.el-tag--mini{height:20px;line-height:19px;padding:0 5px}.el-tag--mini .el-icon-close{margin-left:-3px;transform:scale(.7)}.el-cascader{display:inline-block;font-size:14px;line-height:40px;position:relative}.el-cascader:not(.is-disabled):hover .el-input__inner{border-color:#c0c4cc;cursor:pointer}.el-cascader .el-input{cursor:pointer}.el-cascader .el-input .el-input__inner{text-overflow:ellipsis}.el-cascader .el-input .el-input__inner:focus{border-color:#3869fe}.el-cascader .el-input .el-icon-arrow-down{font-size:14px;transition:transform .3s}.el-cascader .el-input .el-icon-arrow-down.is-reverse{transform:rotate(180deg)}.el-cascader .el-input .el-icon-circle-close:hover{color:#909399}.el-cascader .el-input.is-focus .el-input__inner{border-color:#3869fe}.el-cascader--medium{font-size:14px;line-height:36px}.el-cascader--small{font-size:13px;line-height:32px}.el-cascader--mini{font-size:12px;line-height:28px}.el-cascader.is-disabled .el-cascader__label{color:#c0c4cc;z-index:2}.el-cascader__dropdown{background:#fff;border:1px solid #e4e7ed;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);font-size:14px;margin:5px 0}.el-cascader__tags{box-sizing:border-box;display:flex;flex-wrap:wrap;left:0;line-height:normal;position:absolute;right:30px;text-align:left;top:50%;transform:translateY(-50%)}.el-cascader__tags .el-tag{align-items:center;background:#f0f2f5;display:inline-flex;margin:2px 0 2px 6px;max-width:100%;text-overflow:ellipsis}.el-cascader__tags .el-tag:not(.is-hit){border-color:transparent}.el-cascader__tags .el-tag>span{flex:1;overflow:hidden;text-overflow:ellipsis}.el-cascader__tags .el-tag .el-icon-close{background-color:#c0c4cc;color:#fff;flex:none}.el-cascader__tags .el-tag .el-icon-close:hover{background-color:#909399}.el-cascader__suggestion-panel{border-radius:4px}.el-cascader__suggestion-list{color:#606266;font-size:14px;margin:0;max-height:204px;padding:6px 0;text-align:center}.el-cascader__suggestion-item{align-items:center;cursor:pointer;display:flex;height:34px;justify-content:space-between;outline:none;padding:0 15px;text-align:left}.el-cascader__suggestion-item:focus,.el-cascader__suggestion-item:hover{background:#f5f7fa}.el-cascader__suggestion-item.is-checked{color:#3869fe;font-weight:700}.el-cascader__suggestion-item>span{margin-right:10px}.el-cascader__empty-text{color:#c0c4cc;margin:10px 0}.el-cascader__search-input{border:none;box-sizing:border-box;color:#606266;flex:1;height:24px;margin:2px 0 2px 15px;min-width:60px;outline:none;padding:0}.el-cascader__search-input::-moz-placeholder{color:#c0c4cc}.el-cascader__search-input::placeholder{color:#c0c4cc}.el-color-predefine{display:flex;font-size:12px;margin-top:8px;width:280px}.el-color-predefine__colors{display:flex;flex:1;flex-wrap:wrap}.el-color-predefine__color-selector{border-radius:4px;cursor:pointer;height:20px;margin:0 0 8px 8px;width:20px}.el-color-predefine__color-selector:nth-child(10n+1){margin-left:0}.el-color-predefine__color-selector.selected{box-shadow:0 0 3px 2px #3869fe}.el-color-predefine__color-selector>div{border-radius:3px;display:flex;height:100%}.el-color-predefine__color-selector.is-alpha{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==)}.el-color-hue-slider{background-color:red;box-sizing:border-box;height:12px;padding:0 2px;position:relative;width:280px}.el-color-hue-slider__bar{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red);height:100%;position:relative}.el-color-hue-slider__thumb{background:#fff;border:1px solid #f0f0f0;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);box-sizing:border-box;cursor:pointer;height:100%;left:0;position:absolute;top:0;width:4px;z-index:1}.el-color-hue-slider.is-vertical{height:180px;padding:2px 0;width:12px}.el-color-hue-slider.is-vertical .el-color-hue-slider__bar{background:linear-gradient(180deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.el-color-hue-slider.is-vertical .el-color-hue-slider__thumb{height:4px;left:0;top:0;width:100%}.el-color-svpanel{height:180px;position:relative;width:280px}.el-color-svpanel__black,.el-color-svpanel__white{bottom:0;left:0;position:absolute;right:0;top:0}.el-color-svpanel__white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.el-color-svpanel__black{background:linear-gradient(0deg,#000,transparent)}.el-color-svpanel__cursor{position:absolute}.el-color-svpanel__cursor>div{border-radius:50%;box-shadow:0 0 0 1.5px #fff,inset 0 0 1px 1px rgba(0,0,0,.3),0 0 1px 2px rgba(0,0,0,.4);cursor:head;height:4px;transform:translate(-2px,-2px);width:4px}.el-color-alpha-slider{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);box-sizing:border-box;height:12px;position:relative;width:280px}.el-color-alpha-slider__bar{background:linear-gradient(90deg,hsla(0,0%,100%,0) 0,#fff);height:100%;position:relative}.el-color-alpha-slider__thumb{background:#fff;border:1px solid #f0f0f0;border-radius:1px;box-shadow:0 0 2px rgba(0,0,0,.6);box-sizing:border-box;cursor:pointer;height:100%;left:0;position:absolute;top:0;width:4px;z-index:1}.el-color-alpha-slider.is-vertical{height:180px;width:20px}.el-color-alpha-slider.is-vertical .el-color-alpha-slider__bar{background:linear-gradient(180deg,hsla(0,0%,100%,0) 0,#fff)}.el-color-alpha-slider.is-vertical .el-color-alpha-slider__thumb{height:4px;left:0;top:0;width:100%}.el-color-dropdown{width:300px}.el-color-dropdown__main-wrapper{margin-bottom:6px}.el-color-dropdown__main-wrapper:after{clear:both;content:"";display:table}.el-color-dropdown__btns{margin-top:6px;text-align:right}.el-color-dropdown__value{color:#000;float:left;font-size:12px;line-height:26px;width:160px}.el-color-dropdown__btn{background-color:transparent;border:1px solid #dcdcdc;border-radius:2px;color:#333;cursor:pointer;font-size:12px;line-height:24px;outline:none;padding:0 20px}.el-color-dropdown__btn[disabled]{color:#ccc;cursor:not-allowed}.el-color-dropdown__btn:hover{border-color:#3869fe;color:#3869fe}.el-color-dropdown__link-btn{color:#3869fe;cursor:pointer;font-size:12px;padding:15px;-webkit-text-decoration:none;text-decoration:none}.el-color-dropdown__link-btn:hover{color:tint(#3869fe,20%)}.el-color-picker{display:inline-block;height:40px;line-height:normal;position:relative}.el-color-picker.is-disabled .el-color-picker__trigger{cursor:not-allowed}.el-color-picker--medium{height:36px}.el-color-picker--medium .el-color-picker__trigger{height:36px;width:36px}.el-color-picker--medium .el-color-picker__mask{height:34px;width:34px}.el-color-picker--small{height:32px}.el-color-picker--small .el-color-picker__trigger{height:32px;width:32px}.el-color-picker--small .el-color-picker__mask{height:30px;width:30px}.el-color-picker--small .el-color-picker__empty,.el-color-picker--small .el-color-picker__icon{transform:translate3d(-50%,-50%,0) scale(.8)}.el-color-picker--mini{height:28px}.el-color-picker--mini .el-color-picker__trigger{height:28px;width:28px}.el-color-picker--mini .el-color-picker__mask{height:26px;width:26px}.el-color-picker--mini .el-color-picker__empty,.el-color-picker--mini .el-color-picker__icon{transform:translate3d(-50%,-50%,0) scale(.8)}.el-color-picker__mask{background-color:hsla(0,0%,100%,.7);border-radius:4px;cursor:not-allowed;height:38px;left:1px;position:absolute;top:1px;width:38px;z-index:1}.el-color-picker__trigger{border:1px solid #e6e6e6;border-radius:4px;box-sizing:border-box;cursor:pointer;display:inline-block;font-size:0;height:40px;padding:4px;position:relative;width:40px}.el-color-picker__color{border:1px solid #999;border-radius:2px;box-sizing:border-box;display:block;height:100%;position:relative;text-align:center;width:100%}.el-color-picker__color.is-alpha{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==)}.el-color-picker__color-inner{bottom:0;left:0;position:absolute;right:0;top:0}.el-color-picker__empty{color:#999}.el-color-picker__empty,.el-color-picker__icon{font-size:12px;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0)}.el-color-picker__icon{color:#fff;display:inline-block;text-align:center;width:100%}.el-color-picker__panel{background-color:#fff;border:1px solid #ebeef5;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-sizing:content-box;padding:6px;position:absolute;z-index:10}.el-textarea{display:inline-block;font-size:14px;position:relative;vertical-align:bottom;width:100%}.el-textarea__inner{background-color:#fff;background-image:none;border:1px solid #dcdfe6;border-radius:10px;box-sizing:border-box;color:#606266;display:block;font-size:inherit;line-height:1.5;padding:5px 15px;resize:vertical;transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:100%}.el-textarea__inner::-moz-placeholder{color:#adadad}.el-textarea__inner::placeholder{color:#adadad}.el-textarea__inner:hover{border-color:#c0c4cc}.el-textarea__inner:focus{border-color:#3869fe;outline:none}.el-textarea .el-input__count{background:#fff;bottom:5px;color:#909399;font-size:12px;position:absolute;right:10px}.el-textarea.is-disabled .el-textarea__inner{background-color:#f5f7fa;border-color:#e4e7ed;color:#c0c4cc;cursor:not-allowed}.el-textarea.is-disabled .el-textarea__inner::-moz-placeholder{color:#c0c4cc}.el-textarea.is-disabled .el-textarea__inner::placeholder{color:#c0c4cc}.el-textarea.is-exceed .el-textarea__inner{border-color:#f56c6c}.el-textarea.is-exceed .el-input__count{color:#f56c6c}.el-input{display:inline-block;font-size:14px;position:relative;width:100%}.el-input::-webkit-scrollbar{width:6px;z-index:11}.el-input::-webkit-scrollbar:horizontal{height:6px}.el-input::-webkit-scrollbar-thumb{background:#b4bccc;border-radius:5px;width:6px}.el-input::-webkit-scrollbar-corner,.el-input::-webkit-scrollbar-track{background:#fff}.el-input::-webkit-scrollbar-track-piece{background:#fff;width:6px}.el-input .el-input__clear{color:#c0c4cc;cursor:pointer;font-size:14px;transition:color .2s cubic-bezier(.645,.045,.355,1)}.el-input .el-input__clear:hover{color:#909399}.el-input .el-input__count{align-items:center;color:#909399;display:inline-flex;font-size:12px;height:100%}.el-input .el-input__count .el-input__count-inner{background:#fff;display:inline-block;line-height:normal;padding:0 5px}.el-input__inner{-webkit-appearance:none;background-color:#fff;background-image:none;border:1px solid #dcdfe6;border-radius:10px;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:40px;line-height:40px;outline:none;padding:0 15px;transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:100%}.el-input__inner::-ms-reveal{display:none}.el-input__inner::-moz-placeholder{color:#adadad}.el-input__inner::placeholder{color:#adadad}.el-input__inner:hover{border-color:#c0c4cc}.el-input__inner:focus{border-color:#3869fe;outline:none}.el-input__suffix{color:#c0c4cc;height:100%;pointer-events:none;position:absolute;right:5px;text-align:center;top:0;transition:all .3s}.el-input__suffix-inner{pointer-events:all}.el-input__prefix{color:#c0c4cc;left:5px;position:absolute;top:0}.el-input__icon,.el-input__prefix{height:100%;text-align:center;transition:all .3s}.el-input__icon{line-height:40px;width:25px}.el-input__icon:after{content:"";display:inline-block;height:100%;vertical-align:middle;width:0}.el-input__validateIcon{pointer-events:none}.el-input.is-active .el-input__inner{border-color:#3869fe;outline:none}.el-input.is-disabled .el-input__inner{background-color:#f5f7fa;border-color:#e4e7ed;color:#c0c4cc;cursor:not-allowed}.el-input.is-disabled .el-input__inner::-moz-placeholder{color:#c0c4cc}.el-input.is-disabled .el-input__inner::placeholder{color:#c0c4cc}.el-input.is-disabled .el-input__icon{cursor:not-allowed}.el-input.is-exceed .el-input__inner{border-color:#f56c6c}.el-input.is-exceed .el-input__suffix .el-input__count{color:#f56c6c}.el-input--suffix .el-input__inner{padding-right:30px}.el-input--prefix .el-input__inner{padding-left:30px}.el-input--medium{font-size:14px}.el-input--medium .el-input__inner{height:36px;line-height:36px}.el-input--medium .el-input__icon{line-height:36px}.el-input--small{font-size:13px}.el-input--small .el-input__inner{height:32px;line-height:32px}.el-input--small .el-input__icon{line-height:32px}.el-input--mini{font-size:12px}.el-input--mini .el-input__inner{height:28px;line-height:28px}.el-input--mini .el-input__icon{line-height:28px}.el-input-group{border-collapse:separate;border-spacing:0;display:inline-table;line-height:normal;width:100%}.el-input-group>.el-input__inner{display:table-cell;vertical-align:middle}.el-input-group__append,.el-input-group__prepend{background-color:#f5f7fa;border:1px solid #dcdfe6;border-radius:10px;color:#909399;display:table-cell;padding:0 20px;position:relative;vertical-align:middle;white-space:nowrap;width:1px}.el-input-group__append:focus,.el-input-group__prepend:focus{outline:none}.el-input-group__append .el-button,.el-input-group__append .el-select,.el-input-group__prepend .el-button,.el-input-group__prepend .el-select{display:inline-block;margin:-10px -20px}.el-input-group__append button.el-button,.el-input-group__append div.el-select .el-input__inner,.el-input-group__append div.el-select:hover .el-input__inner,.el-input-group__prepend button.el-button,.el-input-group__prepend div.el-select .el-input__inner,.el-input-group__prepend div.el-select:hover .el-input__inner{background-color:transparent;border-color:transparent;border-bottom:0;border-top:0;color:inherit}.el-input-group__append .el-button,.el-input-group__append .el-input,.el-input-group__prepend .el-button,.el-input-group__prepend .el-input{font-size:inherit}.el-input-group__prepend{border-bottom-right-radius:0;border-right:0;border-top-right-radius:0}.el-input-group__append{border-left:0}.el-input-group--prepend .el-input__inner,.el-input-group__append{border-bottom-left-radius:0;border-top-left-radius:0}.el-input-group--prepend .el-select .el-input.is-focus .el-input__inner{border-color:transparent}.el-input-group--append .el-input__inner{border-bottom-right-radius:0;border-top-right-radius:0}.el-input-group--append .el-select .el-input.is-focus .el-input__inner{border-color:transparent}.el-input__inner::-ms-clear{display:none;height:0;width:0}.el-transfer{font-size:14px}.el-transfer__buttons{display:inline-block;padding:0 30px;vertical-align:middle}.el-transfer__button{background-color:#3869fe;border-radius:50%;color:#fff;display:block;font-size:0;margin:0 auto;padding:10px}.el-transfer__button.is-with-texts{border-radius:4px}.el-transfer__button.is-disabled,.el-transfer__button.is-disabled:hover{background-color:#f5f7fa;border:1px solid #dcdfe6;color:#c0c4cc}.el-transfer__button:first-child{margin-bottom:10px}.el-transfer__button:nth-child(2){margin:0}.el-transfer__button i,.el-transfer__button span{font-size:14px}.el-transfer__button [class*=el-icon-]+span{margin-left:0}.el-transfer-panel{background:#fff;border:1px solid #ebeef5;border-radius:4px;box-sizing:border-box;display:inline-block;max-height:100%;overflow:hidden;position:relative;vertical-align:middle;width:200px}.el-transfer-panel__body{height:246px}.el-transfer-panel__body.is-with-footer{padding-bottom:40px}.el-transfer-panel__list{box-sizing:border-box;height:246px;list-style:none;margin:0;overflow:auto;padding:6px 0}.el-transfer-panel__list.is-filterable{height:194px;padding-top:0}.el-transfer-panel__item{display:block!important;height:30px;line-height:30px;padding-left:15px}.el-transfer-panel__item+.el-transfer-panel__item{margin-left:0}.el-transfer-panel__item.el-checkbox{color:#606266}.el-transfer-panel__item:hover{color:#3869fe}.el-transfer-panel__item.el-checkbox .el-checkbox__label{box-sizing:border-box;display:block;line-height:30px;overflow:hidden;padding-left:24px;text-overflow:ellipsis;white-space:nowrap;width:100%}.el-transfer-panel__item .el-checkbox__input{position:absolute;top:8px}.el-transfer-panel__filter{box-sizing:border-box;display:block;margin:15px;text-align:center;width:auto}.el-transfer-panel__filter .el-input__inner{border-radius:16px;box-sizing:border-box;display:inline-block;font-size:12px;height:32px;padding-left:30px;padding-right:10px;width:100%}.el-transfer-panel__filter .el-input__icon{margin-left:5px}.el-transfer-panel__filter .el-icon-circle-close{cursor:pointer}.el-transfer-panel .el-transfer-panel__header{background:#f5f7fa;border-bottom:1px solid #ebeef5;box-sizing:border-box;color:#000;height:40px;line-height:40px;margin:0;padding-left:15px}.el-transfer-panel .el-transfer-panel__header .el-checkbox{display:block;line-height:40px}.el-transfer-panel .el-transfer-panel__header .el-checkbox .el-checkbox__label{color:#303133;font-size:16px;font-weight:400}.el-transfer-panel .el-transfer-panel__header .el-checkbox .el-checkbox__label span{color:#909399;font-size:12px;font-weight:400;position:absolute;right:15px}.el-transfer-panel .el-transfer-panel__footer{background:#fff;border-top:1px solid #ebeef5;bottom:0;height:40px;left:0;margin:0;padding:0;position:absolute;width:100%;z-index:1}.el-transfer-panel .el-transfer-panel__footer:after{content:"";display:inline-block;height:100%;vertical-align:middle}.el-transfer-panel .el-transfer-panel__footer .el-checkbox{color:#606266;padding-left:20px}.el-transfer-panel .el-transfer-panel__empty{color:#909399;height:30px;line-height:30px;margin:0;padding:6px 15px 0;text-align:center}.el-transfer-panel .el-checkbox__label{padding-left:8px}.el-transfer-panel .el-checkbox__inner{border-radius:3px;height:14px;width:14px}.el-transfer-panel .el-checkbox__inner:after{height:6px;left:4px;width:3px}.el-container{box-sizing:border-box;display:flex;flex:1;flex-basis:auto;flex-direction:row;min-width:0}.el-container.is-vertical{flex-direction:column}.el-header{padding:0 20px}.el-aside,.el-header{box-sizing:border-box;flex-shrink:0}.el-aside,.el-main{overflow:auto}.el-main{display:block;flex:1;flex-basis:auto;padding:20px}.el-footer,.el-main{box-sizing:border-box}.el-footer{flex-shrink:0;padding:0 20px}.el-timeline{font-size:14px;list-style:none;margin:0}.el-timeline .el-timeline-item:last-child .el-timeline-item__tail{display:none}.el-timeline-item{padding-bottom:20px;position:relative}.el-timeline-item__wrapper{padding-left:28px;position:relative;top:-3px}.el-timeline-item__tail{border-left:2px solid #e4e7ed;height:100%;left:4px;position:absolute}.el-timeline-item__icon{color:#fff;font-size:13px}.el-timeline-item__node{align-items:center;background-color:#e4e7ed;border-radius:50%;display:flex;justify-content:center;position:absolute}.el-timeline-item__node--normal{height:12px;left:-1px;width:12px}.el-timeline-item__node--large{height:14px;left:-2px;width:14px}.el-timeline-item__node--primary{background-color:#3869fe}.el-timeline-item__node--success{background-color:#67c23a}.el-timeline-item__node--warning{background-color:#e6a23c}.el-timeline-item__node--danger{background-color:#f56c6c}.el-timeline-item__node--info{background-color:#909399}.el-timeline-item__dot{align-items:center;display:flex;justify-content:center;position:absolute}.el-timeline-item__content{color:#303133}.el-timeline-item__timestamp{color:#909399;font-size:13px;line-height:1}.el-timeline-item__timestamp.is-top{margin-bottom:8px;padding-top:4px}.el-timeline-item__timestamp.is-bottom{margin-top:8px}.el-link{align-items:center;cursor:pointer;display:inline-flex;flex-direction:row;font-size:14px;font-weight:500;justify-content:center;outline:none;padding:0;position:relative;-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.el-link.is-underline:hover:after{border-bottom:1px solid #3869fe;bottom:0;content:"";height:0;left:0;position:absolute;right:0}.el-link.is-disabled{cursor:not-allowed}.el-link [class*=el-icon-]+span{margin-left:5px}.el-link.el-link--default{color:#606266}.el-link.el-link--default:hover{color:#3869fe}.el-link.el-link--default:after{border-color:#3869fe}.el-link.el-link--default.is-disabled{color:#c0c4cc}.el-link.el-link--primary{color:#3869fe}.el-link.el-link--primary:hover{color:#6087fe}.el-link.el-link--primary:after{border-color:#3869fe}.el-link.el-link--primary.is-disabled{color:#9cb4ff}.el-link.el-link--primary.is-underline:hover:after{border-color:#3869fe}.el-link.el-link--danger{color:#f56c6c}.el-link.el-link--danger:hover{color:#f78989}.el-link.el-link--danger:after{border-color:#f56c6c}.el-link.el-link--danger.is-disabled{color:#fab6b6}.el-link.el-link--danger.is-underline:hover:after{border-color:#f56c6c}.el-link.el-link--success{color:#67c23a}.el-link.el-link--success:hover{color:#85ce61}.el-link.el-link--success:after{border-color:#67c23a}.el-link.el-link--success.is-disabled{color:#b3e19d}.el-link.el-link--success.is-underline:hover:after{border-color:#67c23a}.el-link.el-link--warning{color:#e6a23c}.el-link.el-link--warning:hover{color:#ebb563}.el-link.el-link--warning:after{border-color:#e6a23c}.el-link.el-link--warning.is-disabled{color:#f3d19e}.el-link.el-link--warning.is-underline:hover:after{border-color:#e6a23c}.el-link.el-link--info{color:#909399}.el-link.el-link--info:hover{color:#a6a9ad}.el-link.el-link--info:after{border-color:#909399}.el-link.el-link--info.is-disabled{color:#c8c9cc}.el-link.el-link--info.is-underline:hover:after{border-color:#909399}.el-divider{background-color:#dcdfe6;position:relative}.el-divider--horizontal{display:block;height:1px;margin:24px 0;width:100%}.el-divider--vertical{display:inline-block;height:1em;margin:0 8px;position:relative;vertical-align:middle;width:1px}.el-divider__text{background-color:#fff;color:#303133;font-size:14px;font-weight:500;padding:0 20px;position:absolute}.el-divider__text.is-left{left:20px;transform:translateY(-50%)}.el-divider__text.is-center{left:50%;transform:translateX(-50%) translateY(-50%)}.el-divider__text.is-right{right:20px;transform:translateY(-50%)}.el-image__error,.el-image__inner,.el-image__placeholder{height:100%;width:100%}.el-image{display:inline-block;overflow:hidden;position:relative}.el-image__inner{vertical-align:top}.el-image__inner--center{display:block;left:50%;position:relative;top:50%;transform:translate(-50%,-50%)}.el-image__error,.el-image__placeholder{background:#f5f7fa}.el-image__error{align-items:center;color:#c0c4cc;display:flex;font-size:14px;justify-content:center;vertical-align:middle}.el-image__preview{cursor:pointer}.el-image-viewer__wrapper{bottom:0;left:0;position:fixed;right:0;top:0}.el-image-viewer__btn{align-items:center;border-radius:50%;box-sizing:border-box;cursor:pointer;display:flex;justify-content:center;opacity:.8;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:1}.el-image-viewer__close{background-color:#606266;color:#fff;font-size:24px;height:40px;right:40px;top:40px;width:40px}.el-image-viewer__canvas{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.el-image-viewer__actions{background-color:#606266;border-color:#fff;border-radius:22px;bottom:30px;height:44px;left:50%;padding:0 23px;transform:translateX(-50%);width:282px}.el-image-viewer__actions__inner{align-items:center;color:#fff;cursor:default;display:flex;font-size:23px;height:100%;justify-content:space-around;text-align:justify;width:100%}.el-image-viewer__prev{left:40px}.el-image-viewer__next,.el-image-viewer__prev{background-color:#606266;border-color:#fff;color:#fff;font-size:24px;height:44px;top:50%;transform:translateY(-50%);width:44px}.el-image-viewer__next{right:40px;text-indent:2px}.el-image-viewer__mask{background:#000;height:100%;left:0;opacity:.5;position:absolute;top:0;width:100%}.viewer-fade-enter-active{animation:viewer-fade-in .3s}.viewer-fade-leave-active{animation:viewer-fade-out .3s}@keyframes viewer-fade-in{0%{opacity:0;transform:translate3d(0,-20px,0)}to{opacity:1;transform:translateZ(0)}}@keyframes viewer-fade-out{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(0,-20px,0)}}.el-button{-webkit-appearance:none;background:#fff;border:1px solid #dcdfe6;border-radius:8px;box-sizing:border-box;color:#606266;cursor:pointer;display:inline-block;font-size:16px;font-weight:500;line-height:1;margin:0;outline:none;padding:12px 20px;text-align:center;transition:.1s;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;white-space:nowrap}.el-button+.el-button{margin-left:10px}.el-button.is-round{padding:12px 20px}.el-button:focus,.el-button:hover{background-color:#ebf0ff;border-color:#c3d2ff;color:#3869fe}.el-button:active{border-color:#325fe5;color:#325fe5;outline:none}.el-button::-moz-focus-inner{border:0}.el-button [class*=el-icon-]+span{margin-left:5px}.el-button.is-plain:focus,.el-button.is-plain:hover{background:#fff;border-color:#3869fe;color:#3869fe}.el-button.is-plain:active{background:#fff;outline:none}.el-button.is-active,.el-button.is-plain:active{border-color:#325fe5;color:#325fe5}.el-button.is-disabled,.el-button.is-disabled:focus,.el-button.is-disabled:hover{background-color:#fff;background-image:none;border-color:#ebeef5;color:#c0c4cc;cursor:not-allowed}.el-button.is-disabled.el-button--text{background-color:transparent}.el-button.is-disabled.is-plain,.el-button.is-disabled.is-plain:focus,.el-button.is-disabled.is-plain:hover{background-color:#fff;border-color:#ebeef5;color:#c0c4cc}.el-button.is-loading{pointer-events:none;position:relative}.el-button.is-loading:before{background-color:hsla(0,0%,100%,.35);border-radius:inherit;bottom:-1px;content:"";left:-1px;pointer-events:none;position:absolute;right:-1px;top:-1px}.el-button.is-round{border-radius:20px;padding:12px 23px}.el-button.is-circle{border-radius:50%;padding:12px}.el-button--primary{background-color:#3869fe;border-color:#3869fe;color:#fff}.el-button--primary:focus,.el-button--primary:hover{background:#6087fe;border-color:#6087fe;color:#fff}.el-button--primary:active{outline:none}.el-button--primary.is-active,.el-button--primary:active{background:#325fe5;border-color:#325fe5;color:#fff}.el-button--primary.is-disabled,.el-button--primary.is-disabled:active,.el-button--primary.is-disabled:focus,.el-button--primary.is-disabled:hover{background-color:#9cb4ff;border-color:#9cb4ff;color:#fff}.el-button--primary.is-plain{background:#ebf0ff;border-color:#afc3ff;color:#3869fe}.el-button--primary.is-plain:focus,.el-button--primary.is-plain:hover{background:#3869fe;border-color:#3869fe;color:#fff}.el-button--primary.is-plain:active{background:#325fe5;border-color:#325fe5;color:#fff;outline:none}.el-button--primary.is-plain.is-disabled,.el-button--primary.is-plain.is-disabled:active,.el-button--primary.is-plain.is-disabled:focus,.el-button--primary.is-plain.is-disabled:hover{background-color:#ebf0ff;border-color:#d7e1ff;color:#88a5fe}.el-button--success{background-color:#67c23a;border-color:#67c23a;color:#fff}.el-button--success:focus,.el-button--success:hover{background:#85ce61;border-color:#85ce61;color:#fff}.el-button--success:active{outline:none}.el-button--success.is-active,.el-button--success:active{background:#5daf34;border-color:#5daf34;color:#fff}.el-button--success.is-disabled,.el-button--success.is-disabled:active,.el-button--success.is-disabled:focus,.el-button--success.is-disabled:hover{background-color:#b3e19d;border-color:#b3e19d;color:#fff}.el-button--success.is-plain{background:#f0f9eb;border-color:#c2e7b0;color:#67c23a}.el-button--success.is-plain:focus,.el-button--success.is-plain:hover{background:#67c23a;border-color:#67c23a;color:#fff}.el-button--success.is-plain:active{background:#5daf34;border-color:#5daf34;color:#fff;outline:none}.el-button--success.is-plain.is-disabled,.el-button--success.is-plain.is-disabled:active,.el-button--success.is-plain.is-disabled:focus,.el-button--success.is-plain.is-disabled:hover{background-color:#f0f9eb;border-color:#e1f3d8;color:#a4da89}.el-button--warning{background-color:#e6a23c;border-color:#e6a23c;color:#fff}.el-button--warning:focus,.el-button--warning:hover{background:#ebb563;border-color:#ebb563;color:#fff}.el-button--warning:active{outline:none}.el-button--warning.is-active,.el-button--warning:active{background:#cf9236;border-color:#cf9236;color:#fff}.el-button--warning.is-disabled,.el-button--warning.is-disabled:active,.el-button--warning.is-disabled:focus,.el-button--warning.is-disabled:hover{background-color:#f3d19e;border-color:#f3d19e;color:#fff}.el-button--warning.is-plain{background:#fdf6ec;border-color:#f5dab1;color:#e6a23c}.el-button--warning.is-plain:focus,.el-button--warning.is-plain:hover{background:#e6a23c;border-color:#e6a23c;color:#fff}.el-button--warning.is-plain:active{background:#cf9236;border-color:#cf9236;color:#fff;outline:none}.el-button--warning.is-plain.is-disabled,.el-button--warning.is-plain.is-disabled:active,.el-button--warning.is-plain.is-disabled:focus,.el-button--warning.is-plain.is-disabled:hover{background-color:#fdf6ec;border-color:#faecd8;color:#f0c78a}.el-button--danger{background-color:#f56c6c;border-color:#f56c6c;color:#fff}.el-button--danger:focus,.el-button--danger:hover{background:#f78989;border-color:#f78989;color:#fff}.el-button--danger:active{outline:none}.el-button--danger.is-active,.el-button--danger:active{background:#dd6161;border-color:#dd6161;color:#fff}.el-button--danger.is-disabled,.el-button--danger.is-disabled:active,.el-button--danger.is-disabled:focus,.el-button--danger.is-disabled:hover{background-color:#fab6b6;border-color:#fab6b6;color:#fff}.el-button--danger.is-plain{background:#fef0f0;border-color:#fbc4c4;color:#f56c6c}.el-button--danger.is-plain:focus,.el-button--danger.is-plain:hover{background:#f56c6c;border-color:#f56c6c;color:#fff}.el-button--danger.is-plain:active{background:#dd6161;border-color:#dd6161;color:#fff;outline:none}.el-button--danger.is-plain.is-disabled,.el-button--danger.is-plain.is-disabled:active,.el-button--danger.is-plain.is-disabled:focus,.el-button--danger.is-plain.is-disabled:hover{background-color:#fef0f0;border-color:#fde2e2;color:#f9a7a7}.el-button--info{background-color:#909399;border-color:#909399;color:#fff}.el-button--info:focus,.el-button--info:hover{background:#a6a9ad;border-color:#a6a9ad;color:#fff}.el-button--info:active{outline:none}.el-button--info.is-active,.el-button--info:active{background:#82848a;border-color:#82848a;color:#fff}.el-button--info.is-disabled,.el-button--info.is-disabled:active,.el-button--info.is-disabled:focus,.el-button--info.is-disabled:hover{background-color:#c8c9cc;border-color:#c8c9cc;color:#fff}.el-button--info.is-plain{background:#f4f4f5;border-color:#d3d4d6;color:#909399}.el-button--info.is-plain:focus,.el-button--info.is-plain:hover{background:#909399;border-color:#909399;color:#fff}.el-button--info.is-plain:active{background:#82848a;border-color:#82848a;color:#fff;outline:none}.el-button--info.is-plain.is-disabled,.el-button--info.is-plain.is-disabled:active,.el-button--info.is-plain.is-disabled:focus,.el-button--info.is-plain.is-disabled:hover{background-color:#f4f4f5;border-color:#e9e9eb;color:#bcbec2}.el-button--medium{border-radius:4px;font-size:14px;padding:10px 20px}.el-button--medium.is-round{padding:10px 20px}.el-button--medium.is-circle{padding:10px}.el-button--small{border-radius:3px;font-size:12px;padding:9px 15px}.el-button--small.is-round{padding:9px 15px}.el-button--small.is-circle{padding:9px}.el-button--mini{border-radius:3px;font-size:12px;padding:7px 15px}.el-button--mini.is-round{padding:7px 15px}.el-button--mini.is-circle{padding:7px}.el-button--text{background:transparent;border-color:transparent;color:#3869fe;padding-left:0;padding-right:0}.el-button--text:focus,.el-button--text:hover{background-color:transparent;border-color:transparent;color:#6087fe}.el-button--text:active{background-color:transparent;color:#325fe5}.el-button--text.is-disabled,.el-button--text.is-disabled:focus,.el-button--text.is-disabled:hover,.el-button--text:active{border-color:transparent}.el-button-group{display:inline-block;vertical-align:middle}.el-button-group:after,.el-button-group:before{content:"";display:table}.el-button-group:after{clear:both}.el-button-group>.el-button{float:left;position:relative}.el-button-group>.el-button+.el-button{margin-left:0}.el-button-group>.el-button.is-disabled{z-index:1}.el-button-group>.el-button:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.el-button-group>.el-button:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.el-button-group>.el-button:first-child:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-top-left-radius:8px;border-top-right-radius:8px}.el-button-group>.el-button:first-child:last-child.is-round{border-radius:20px}.el-button-group>.el-button:first-child:last-child.is-circle{border-radius:50%}.el-button-group>.el-button:not(:first-child):not(:last-child){border-radius:0}.el-button-group>.el-button:not(:last-child){margin-right:-1px}.el-button-group>.el-button.is-active,.el-button-group>.el-button:not(.is-disabled):active,.el-button-group>.el-button:not(.is-disabled):focus,.el-button-group>.el-button:not(.is-disabled):hover{z-index:1}.el-button-group>.el-dropdown>.el-button{border-bottom-left-radius:0;border-left-color:hsla(0,0%,100%,.5);border-top-left-radius:0}.el-button-group .el-button--primary:first-child{border-right-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--primary:last-child{border-left-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--primary:not(:first-child):not(:last-child){border-left-color:hsla(0,0%,100%,.5);border-right-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--success:first-child{border-right-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--success:last-child{border-left-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--success:not(:first-child):not(:last-child){border-left-color:hsla(0,0%,100%,.5);border-right-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--warning:first-child{border-right-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--warning:last-child{border-left-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--warning:not(:first-child):not(:last-child){border-left-color:hsla(0,0%,100%,.5);border-right-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--danger:first-child{border-right-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--danger:last-child{border-left-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--danger:not(:first-child):not(:last-child){border-left-color:hsla(0,0%,100%,.5);border-right-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--info:first-child{border-right-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--info:last-child{border-left-color:hsla(0,0%,100%,.5)}.el-button-group .el-button--info:not(:first-child):not(:last-child){border-left-color:hsla(0,0%,100%,.5);border-right-color:hsla(0,0%,100%,.5)}.el-calendar{background-color:#fff}.el-calendar__header{border-bottom:1px solid #ebeef5;display:flex;justify-content:space-between;padding:12px 20px}.el-calendar__title{align-self:center;color:#000}.el-calendar__body{padding:12px 20px 35px}.el-calendar-table{table-layout:fixed;width:100%}.el-calendar-table thead th{color:#606266;font-weight:400;padding:12px 0}.el-calendar-table:not(.is-range) td.next,.el-calendar-table:not(.is-range) td.prev{color:#c0c4cc}.el-calendar-table td{border-bottom:1px solid #ebeef5;border-right:1px solid #ebeef5;transition:background-color .2s ease;vertical-align:top}.el-calendar-table td.is-selected{background-color:#f2f8fe}.el-calendar-table td.is-today{color:#3869fe}.el-calendar-table tr:first-child td{border-top:1px solid #ebeef5}.el-calendar-table tr td:first-child{border-left:1px solid #ebeef5}.el-calendar-table tr.el-calendar-table__row--hide-border td{border-top:none}.el-calendar-table .el-calendar-day{box-sizing:border-box;height:85px;padding:8px}.el-calendar-table .el-calendar-day:hover{background-color:#f2f8fe;cursor:pointer}.el-backtop{align-items:center;background-color:#fff;border-radius:50%;box-shadow:0 0 6px rgba(0,0,0,.12);color:#3869fe;cursor:pointer;display:flex;font-size:20px;height:40px;justify-content:center;position:fixed;width:40px;z-index:5}.el-backtop:hover{background-color:#f2f6fc}.el-page-header{display:flex;line-height:24px}.el-page-header__left{cursor:pointer;display:flex;margin-right:40px;position:relative}.el-page-header__left:after{background-color:#dcdfe6;content:"";height:16px;position:absolute;right:-20px;top:50%;transform:translateY(-50%);width:1px}.el-page-header__left .el-icon-back{align-self:center;font-size:18px;margin-right:6px}.el-page-header__title{font-size:14px;font-weight:500}.el-page-header__content{color:#303133;font-size:18px}.el-checkbox{color:#606266;cursor:pointer;display:inline-block;font-size:14px;font-weight:500;margin-right:30px;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:nowrap}.el-checkbox.is-bordered{border:1px solid #dcdfe6;border-radius:4px;box-sizing:border-box;height:40px;line-height:normal;padding:9px 20px 9px 10px}.el-checkbox.is-bordered.is-checked{border-color:#3869fe}.el-checkbox.is-bordered.is-disabled{border-color:#ebeef5;cursor:not-allowed}.el-checkbox.is-bordered+.el-checkbox.is-bordered{margin-left:10px}.el-checkbox.is-bordered.el-checkbox--medium{border-radius:4px;height:36px;padding:7px 20px 7px 10px}.el-checkbox.is-bordered.el-checkbox--medium .el-checkbox__label{font-size:14px;line-height:17px}.el-checkbox.is-bordered.el-checkbox--medium .el-checkbox__inner{height:14px;width:14px}.el-checkbox.is-bordered.el-checkbox--small{border-radius:3px;height:32px;padding:5px 15px 5px 10px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__label{font-size:12px;line-height:15px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__inner{height:12px;width:12px}.el-checkbox.is-bordered.el-checkbox--small .el-checkbox__inner:after{height:6px;width:2px}.el-checkbox.is-bordered.el-checkbox--mini{border-radius:3px;height:28px;padding:3px 15px 3px 10px}.el-checkbox.is-bordered.el-checkbox--mini .el-checkbox__label{font-size:12px;line-height:12px}.el-checkbox.is-bordered.el-checkbox--mini .el-checkbox__inner{height:12px;width:12px}.el-checkbox.is-bordered.el-checkbox--mini .el-checkbox__inner:after{height:6px;width:2px}.el-checkbox__input{cursor:pointer;display:inline-block;line-height:1;outline:none;position:relative;vertical-align:middle;white-space:nowrap}.el-checkbox__input.is-disabled .el-checkbox__inner{background-color:#edf2fc;border-color:#dcdfe6;cursor:not-allowed}.el-checkbox__input.is-disabled .el-checkbox__inner:after{border-color:#c0c4cc;cursor:not-allowed}.el-checkbox__input.is-disabled .el-checkbox__inner+.el-checkbox__label{cursor:not-allowed}.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner{background-color:#f2f6fc;border-color:#dcdfe6}.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner:after{border-color:#c0c4cc}.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner{background-color:#f2f6fc;border-color:#dcdfe6}.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner:before{background-color:#c0c4cc;border-color:#c0c4cc}.el-checkbox__input.is-disabled+span.el-checkbox__label{color:#c0c4cc;cursor:not-allowed}.el-checkbox__input.is-checked .el-checkbox__inner{background-color:#3869fe;border-color:#3869fe}.el-checkbox__input.is-checked .el-checkbox__inner:after{transform:rotate(45deg) scaleY(1)}.el-checkbox__input.is-checked+.el-checkbox__label{color:#3869fe}.el-checkbox__input.is-focus .el-checkbox__inner{border-color:#3869fe}.el-checkbox__input.is-indeterminate .el-checkbox__inner{background-color:#3869fe;border-color:#3869fe}.el-checkbox__input.is-indeterminate .el-checkbox__inner:before{background-color:#fff;content:"";display:block;height:2px;left:0;position:absolute;right:0;top:5px;transform:scale(.5)}.el-checkbox__input.is-indeterminate .el-checkbox__inner:after{display:none}.el-checkbox__inner{background-color:#fff;border:1px solid #dcdfe6;border-radius:2px;box-sizing:border-box;display:inline-block;height:14px;position:relative;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);width:14px;z-index:1}.el-checkbox__inner:hover{border-color:#3869fe}.el-checkbox__inner:after{border:1px solid #fff;border-left:0;border-top:0;box-sizing:content-box;content:"";height:7px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);transform-origin:center;transition:transform .15s ease-in .05s;width:3px}.el-checkbox__original{height:0;margin:0;opacity:0;outline:none;position:absolute;width:0;z-index:-1}.el-checkbox__label{display:inline-block;font-size:14px;line-height:19px;padding-left:10px}.el-checkbox:last-of-type{margin-right:0}.el-checkbox-button,.el-checkbox-button__inner{display:inline-block;position:relative}.el-checkbox-button__inner{-webkit-appearance:none;background:#fff;border:1px solid #dcdfe6;border-left:0;border-radius:0;box-sizing:border-box;color:#606266;cursor:pointer;font-size:16px;font-weight:500;line-height:1;margin:0;outline:none;padding:12px 20px;text-align:center;transition:all .3s cubic-bezier(.645,.045,.355,1);-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;vertical-align:middle;white-space:nowrap}.el-checkbox-button__inner.is-round{padding:12px 20px}.el-checkbox-button__inner:hover{color:#3869fe}.el-checkbox-button__inner [class*=el-icon-]{line-height:.9}.el-checkbox-button__inner [class*=el-icon-]+span{margin-left:5px}.el-checkbox-button__original{margin:0;opacity:0;outline:none;position:absolute;z-index:-1}.el-checkbox-button.is-checked .el-checkbox-button__inner{background-color:#3869fe;border-color:#3869fe;box-shadow:-1px 0 0 0 #88a5fe;color:#fff}.el-checkbox-button.is-checked:first-child .el-checkbox-button__inner{border-left-color:#3869fe}.el-checkbox-button.is-disabled .el-checkbox-button__inner{background-color:#fff;background-image:none;border-color:#ebeef5;box-shadow:none;color:#c0c4cc;cursor:not-allowed}.el-checkbox-button.is-disabled:first-child .el-checkbox-button__inner{border-left-color:#ebeef5}.el-checkbox-button:first-child .el-checkbox-button__inner{border-left:1px solid #dcdfe6;border-radius:4px 0 0 4px;box-shadow:none!important}.el-checkbox-button.is-focus .el-checkbox-button__inner{border-color:#3869fe}.el-checkbox-button:last-child .el-checkbox-button__inner{border-radius:0 4px 4px 0}.el-checkbox-button--medium .el-checkbox-button__inner{border-radius:0;font-size:14px;padding:10px 20px}.el-checkbox-button--medium .el-checkbox-button__inner.is-round{padding:10px 20px}.el-checkbox-button--small .el-checkbox-button__inner{border-radius:0;font-size:12px;padding:9px 15px}.el-checkbox-button--small .el-checkbox-button__inner.is-round{padding:9px 15px}.el-checkbox-button--mini .el-checkbox-button__inner{border-radius:0;font-size:12px;padding:7px 15px}.el-checkbox-button--mini .el-checkbox-button__inner.is-round{padding:7px 15px}.el-checkbox-group{font-size:0}.el-radio{color:#606266;cursor:pointer;display:inline-block;font-size:14px;font-weight:500;line-height:1;margin-right:30px;outline:none;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;white-space:nowrap}.el-radio.is-bordered{border:1px solid #dcdfe6;border-radius:4px;box-sizing:border-box;height:40px;padding:12px 20px 0 10px}.el-radio.is-bordered.is-checked{border-color:#3869fe}.el-radio.is-bordered.is-disabled{border-color:#ebeef5;cursor:not-allowed}.el-radio.is-bordered+.el-radio.is-bordered{margin-left:10px}.el-radio--medium.is-bordered{border-radius:4px;height:36px;padding:10px 20px 0 10px}.el-radio--medium.is-bordered .el-radio__label{font-size:14px}.el-radio--medium.is-bordered .el-radio__inner{height:14px;width:14px}.el-radio--small.is-bordered{border-radius:3px;height:32px;padding:8px 15px 0 10px}.el-radio--small.is-bordered .el-radio__label{font-size:12px}.el-radio--small.is-bordered .el-radio__inner{height:12px;width:12px}.el-radio--mini.is-bordered{border-radius:3px;height:28px;padding:6px 15px 0 10px}.el-radio--mini.is-bordered .el-radio__label{font-size:12px}.el-radio--mini.is-bordered .el-radio__inner{height:12px;width:12px}.el-radio:last-child{margin-right:0}.el-radio__input{cursor:pointer;display:inline-block;line-height:1;outline:none;position:relative;vertical-align:middle;white-space:nowrap}.el-radio__input.is-disabled .el-radio__inner{background-color:#f5f7fa;border-color:#e4e7ed;cursor:not-allowed}.el-radio__input.is-disabled .el-radio__inner:after{background-color:#f5f7fa;cursor:not-allowed}.el-radio__input.is-disabled .el-radio__inner+.el-radio__label{cursor:not-allowed}.el-radio__input.is-disabled.is-checked .el-radio__inner{background-color:#f5f7fa;border-color:#e4e7ed}.el-radio__input.is-disabled.is-checked .el-radio__inner:after{background-color:#c0c4cc}.el-radio__input.is-disabled+span.el-radio__label{color:#c0c4cc;cursor:not-allowed}.el-radio__input.is-checked .el-radio__inner{background:#3869fe;border-color:#3869fe}.el-radio__input.is-checked .el-radio__inner:after{transform:translate(-50%,-50%) scale(1)}.el-radio__input.is-checked+.el-radio__label{color:#3869fe}.el-radio__input.is-focus .el-radio__inner{border-color:#3869fe}.el-radio__inner{background-color:#fff;border:1px solid #dcdfe6;border-radius:100%;box-sizing:border-box;cursor:pointer;display:inline-block;height:14px;position:relative;width:14px}.el-radio__inner:hover{border-color:#3869fe}.el-radio__inner:after{background-color:#fff;border-radius:100%;content:"";height:4px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%) scale(0);transition:transform .15s ease-in;width:4px}.el-radio__original{bottom:0;left:0;margin:0;opacity:0;outline:none;position:absolute;right:0;top:0;z-index:-1}.el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner{box-shadow:0 0 2px 2px #3869fe}.el-radio__label{font-size:14px;padding-left:10px}.el-scrollbar{overflow:hidden;position:relative}.el-scrollbar:active>.el-scrollbar__bar,.el-scrollbar:focus>.el-scrollbar__bar,.el-scrollbar:hover>.el-scrollbar__bar{opacity:1;transition:opacity .34s ease-out}.el-scrollbar__wrap{height:100%;overflow:scroll}.el-scrollbar__wrap--hidden-default{scrollbar-width:none}.el-scrollbar__wrap--hidden-default::-webkit-scrollbar{height:0;width:0}.el-scrollbar__thumb{background-color:hsla(220,4%,58%,.3);border-radius:inherit;cursor:pointer;display:block;height:0;position:relative;transition:background-color .3s;width:0}.el-scrollbar__thumb:hover{background-color:hsla(220,4%,58%,.5)}.el-scrollbar__bar{border-radius:4px;bottom:2px;opacity:0;position:absolute;right:2px;transition:opacity .12s ease-out;z-index:1}.el-scrollbar__bar.is-vertical{top:2px;width:6px}.el-scrollbar__bar.is-vertical>div{width:100%}.el-scrollbar__bar.is-horizontal{height:6px;left:2px}.el-scrollbar__bar.is-horizontal>div{height:100%}.el-cascader-panel{border-radius:4px;display:flex;font-size:14px}.el-cascader-panel.is-bordered{border:1px solid #e4e7ed;border-radius:4px}.el-cascader-menu{border-right:1px solid #e4e7ed;box-sizing:border-box;color:#606266;min-width:180px}.el-cascader-menu:last-child{border-right:none}.el-cascader-menu:last-child .el-cascader-node{padding-right:20px}.el-cascader-menu__wrap{height:204px}.el-cascader-menu__list{box-sizing:border-box;list-style:none;margin:0;min-height:100%;padding:6px 0;position:relative}.el-cascader-menu__hover-zone{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.el-cascader-menu__empty-text{color:#c0c4cc;left:50%;position:absolute;text-align:center;top:50%;transform:translate(-50%,-50%)}.el-cascader-node{align-items:center;display:flex;height:34px;line-height:34px;outline:none;padding:0 30px 0 20px;position:relative}.el-cascader-node.is-selectable.in-active-path{color:#606266}.el-cascader-node.in-active-path,.el-cascader-node.is-active,.el-cascader-node.is-selectable.in-checked-path{color:#3869fe;font-weight:700}.el-cascader-node:not(.is-disabled){cursor:pointer}.el-cascader-node:not(.is-disabled):focus,.el-cascader-node:not(.is-disabled):hover{background:#f5f7fa}.el-cascader-node.is-disabled{color:#c0c4cc;cursor:not-allowed}.el-cascader-node__prefix{left:10px;position:absolute}.el-cascader-node__postfix{position:absolute;right:10px}.el-cascader-node__label{flex:1;overflow:hidden;padding:0 10px;text-overflow:ellipsis;white-space:nowrap}.el-cascader-node>.el-radio{margin-right:0}.el-cascader-node>.el-radio .el-radio__label{padding-left:0}.el-avatar{background:#c0c4cc;box-sizing:border-box;color:#fff;display:inline-block;font-size:14px;height:40px;line-height:40px;overflow:hidden;text-align:center;width:40px}.el-avatar>img{display:block;height:100%;vertical-align:middle}.el-avatar--circle{border-radius:50%}.el-avatar--square{border-radius:4px}.el-avatar--icon{font-size:18px}.el-avatar--large{height:40px;line-height:40px;width:40px}.el-avatar--medium{height:36px;line-height:36px;width:36px}.el-avatar--small{height:28px;line-height:28px;width:28px}@keyframes el-drawer-fade-in{0%{opacity:0}to{opacity:1}}@keyframes rtl-drawer-in{0%{transform:translate(100%)}to{transform:translate(0)}}@keyframes rtl-drawer-out{0%{transform:translate(0)}to{transform:translate(100%)}}@keyframes ltr-drawer-in{0%{transform:translate(-100%)}to{transform:translate(0)}}@keyframes ltr-drawer-out{0%{transform:translate(0)}to{transform:translate(-100%)}}@keyframes ttb-drawer-in{0%{transform:translateY(-100%)}to{transform:translate(0)}}@keyframes ttb-drawer-out{0%{transform:translate(0)}to{transform:translateY(-100%)}}@keyframes btt-drawer-in{0%{transform:translateY(100%)}to{transform:translate(0)}}@keyframes btt-drawer-out{0%{transform:translate(0)}to{transform:translateY(100%)}}.el-drawer{background-color:#fff;box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);box-sizing:border-box;display:flex;flex-direction:column;outline:0;overflow:hidden;position:absolute}.el-drawer.rtl{animation:rtl-drawer-out .3s}.el-drawer__open .el-drawer.rtl{animation:rtl-drawer-in .3s 1ms}.el-drawer.ltr{animation:ltr-drawer-out .3s}.el-drawer__open .el-drawer.ltr{animation:ltr-drawer-in .3s 1ms}.el-drawer.ttb{animation:ttb-drawer-out .3s}.el-drawer__open .el-drawer.ttb{animation:ttb-drawer-in .3s 1ms}.el-drawer.btt{animation:btt-drawer-out .3s}.el-drawer__open .el-drawer.btt{animation:btt-drawer-in .3s 1ms}.el-drawer__wrapper{bottom:0;left:0;margin:0;overflow:hidden;position:fixed;right:0;top:0}.el-drawer__header{align-items:center;color:#72767b;display:flex;margin-bottom:32px;padding:20px 20px 0}.el-drawer__header>:first-child{flex:1}.el-drawer__title{flex:1;font-size:1rem;line-height:inherit;margin:0}.el-drawer__close-btn{background-color:transparent;border:none;color:inherit;cursor:pointer;font-size:20px}.el-drawer__body{flex:1;overflow:auto}.el-drawer__body>*{box-sizing:border-box}.el-drawer.ltr,.el-drawer.rtl{bottom:0;height:100%;top:0}.el-drawer.btt,.el-drawer.ttb{left:0;right:0;width:100%}.el-drawer.ltr{left:0}.el-drawer.rtl{right:0}.el-drawer.ttb{top:0}.el-drawer.btt{bottom:0}.el-drawer__container{bottom:0;height:100%;left:0;position:relative;right:0;top:0;width:100%}.el-drawer-fade-enter-active{animation:el-drawer-fade-in .3s}.el-drawer-fade-leave-active{animation:el-drawer-fade-in .3s reverse}.el-statistic{font-feature-settings:"tnum";box-sizing:border-box;color:#000;font-variant:tabular-nums;list-style:none;margin:0;padding:0;text-align:center;width:100%}.el-statistic .head{color:#606266;font-size:13px;margin-bottom:4px}.el-statistic .con{align-items:center;color:#303133;display:flex;font-family:Sans-serif;justify-content:center}.el-statistic .con .number{font-size:20px;padding:0 4px}.el-statistic .con span{display:inline-block;line-height:100%;margin:0}.el-popconfirm__main{align-items:center;display:flex}.el-popconfirm__icon{margin-right:5px}.el-popconfirm__action{margin:0;text-align:right}@keyframes el-skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}.el-skeleton{width:100%}.el-skeleton__first-line,.el-skeleton__paragraph{background:#f2f2f2;height:16px;margin-top:16px}.el-skeleton.is-animated .el-skeleton__item{animation:el-skeleton-loading 1.4s ease infinite;background:linear-gradient(90deg,#f2f2f2 25%,#e6e6e6 37%,#f2f2f2 63%);background-size:400% 100%}.el-skeleton__item{background:#f2f2f2;border-radius:4px;display:inline-block;height:16px;width:100%}.el-skeleton__circle{border-radius:50%;height:36px;line-height:36px;width:36px}.el-skeleton__circle--lg{height:40px;line-height:40px;width:40px}.el-skeleton__circle--md{height:28px;line-height:28px;width:28px}.el-skeleton__button{border-radius:4px;height:40px;width:64px}.el-skeleton__p{width:100%}.el-skeleton__p.is-last{width:61%}.el-skeleton__p.is-first{width:33%}.el-skeleton__text{height:13px;width:100%}.el-skeleton__caption{height:12px}.el-skeleton__h1{height:20px}.el-skeleton__h3{height:18px}.el-skeleton__h5{height:16px}.el-skeleton__image{align-items:center;border-radius:0;display:flex;justify-content:center;width:auto}.el-skeleton__image svg{fill:#dcdde0;height:22%;width:22%}.el-empty{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:40px 0;text-align:center}.el-empty__image{width:160px}.el-empty__image img{height:100%;-o-object-fit:contain;object-fit:contain;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:top;width:100%}.el-empty__image svg{fill:#dcdde0;height:100%;vertical-align:top;width:100%}.el-empty__description{margin-top:20px}.el-empty__description p{color:#909399;font-size:14px;margin:0}.el-empty__bottom{margin-top:20px}.el-descriptions{box-sizing:border-box;color:#303133;font-size:14px}.el-descriptions__header{align-items:center;display:flex;justify-content:space-between;margin-bottom:20px}.el-descriptions__title{font-size:16px;font-weight:700}.el-descriptions__body{background-color:#fff;color:#606266}.el-descriptions__body .el-descriptions__table{border-collapse:collapse;table-layout:fixed;width:100%}.el-descriptions__body .el-descriptions__table .el-descriptions-item__cell{box-sizing:border-box;font-weight:400;line-height:1.5;text-align:left}.el-descriptions__body .el-descriptions__table .el-descriptions-item__cell.is-left{text-align:left}.el-descriptions__body .el-descriptions__table .el-descriptions-item__cell.is-center{text-align:center}.el-descriptions__body .el-descriptions__table .el-descriptions-item__cell.is-right{text-align:right}.el-descriptions .is-bordered{table-layout:auto}.el-descriptions .is-bordered .el-descriptions-item__cell{border:1px solid #ebeef5;padding:12px 10px}.el-descriptions :not(.is-bordered) .el-descriptions-item__cell{padding-bottom:12px}.el-descriptions--medium.is-bordered .el-descriptions-item__cell{padding:10px}.el-descriptions--medium:not(.is-bordered) .el-descriptions-item__cell{padding-bottom:10px}.el-descriptions--small{font-size:12px}.el-descriptions--small.is-bordered .el-descriptions-item__cell{padding:8px 10px}.el-descriptions--small:not(.is-bordered) .el-descriptions-item__cell{padding-bottom:8px}.el-descriptions--mini{font-size:12px}.el-descriptions--mini.is-bordered .el-descriptions-item__cell{padding:6px 10px}.el-descriptions--mini:not(.is-bordered) .el-descriptions-item__cell{padding-bottom:6px}.el-descriptions-item{vertical-align:top}.el-descriptions-item__container{display:flex}.el-descriptions-item__container .el-descriptions-item__content,.el-descriptions-item__container .el-descriptions-item__label{align-items:baseline;display:inline-flex}.el-descriptions-item__container .el-descriptions-item__content{flex:1}.el-descriptions-item__label.has-colon:after{content:":";position:relative;top:-.5px}.el-descriptions-item__label.is-bordered-label{background:#fafafa;color:#909399;font-weight:700}.el-descriptions-item__label:not(.is-bordered-label){margin-right:10px}.el-descriptions-item__content{word-wrap:break-word;word-break:break-word}.el-result{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;padding:40px 30px;text-align:center}.el-result__icon svg{height:64px;width:64px}.el-result__title{margin-top:20px}.el-result__title p{color:#303133;font-size:20px;line-height:1.3;margin:0}.el-result__subtitle{margin-top:10px}.el-result__subtitle p{color:#606266;font-size:14px;line-height:1.3;margin:0}.el-result__extra{margin-top:30px}.el-result .icon-success{fill:#67c23a}.el-result .icon-error{fill:#f56c6c}.el-result .icon-info{fill:#909399}.el-result .icon-warning{fill:#e6a23c}.el-button{border-color:transparent;padding:10px 30px}.el-popper .el-popconfirm{min-width:170px}.el-popper .el-popconfirm .el-popconfirm__main{margin:14px 0}.el-popper .el-popconfirm .el-popconfirm__action .el-button{border-radius:3px;font-size:12px;padding:7px 15px}.el-popper .el-popconfirm .el-popconfirm__action .el-button.el-button--text{padding-left:0;padding-right:0}.el-dialog{border-radius:18px;border-radius:var(--common-border-radius);box-shadow:0 37px 45px 0 rgba(0,0,0,.3)}.el-dialog.hide-header .el-dialog__header{display:none}.el-dialog .el-dialog__footer{padding-top:40px;position:absolute;text-align:center;width:100%}.el-dialog .el-dialog__footer .el-button{box-shadow:0 37px 45px 0 rgba(0,0,0,.3)}.el-loading-spinner svg{display:inline}.el-form .el-form-item__label{color:#333;font-weight:900}.el-form .el-form-item__label:before{color:#ff7272}.el-form .el-input input[type=text]{background:#f6f6fa;border-color:transparent}.el-table .el-table__cell{color:#333;padding:20px 0}.el-table .el-table__cell:first-child .cell{padding-left:50px}.el-table th.el-table__cell{background-color:#edf0fa}.el-table .action .iconfont{cursor:pointer;font-size:22px;margin-right:20px}.el-table .action .iconfont:hover{color:#3869fe;color:var(--color-primary)}.el-message{border:0;border-radius:30px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);font-weight:300;min-width:100px;padding:10px 20px}.el-message .el-message__icon{font-size:18px}.el-message .el-message__content{font-size:15px}@font-face{font-family:"iconfont";src:url(/iconfont/iconfont.woff2?t=1685878452260) format("woff2"),url(/iconfont/iconfont.woff?t=1685878452260) format("woff"),url(/iconfont/iconfont.ttf?t=1685878452260) format("truetype")}.iconfont{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:"iconfont"!important;font-size:16px;font-style:normal}.icon-fasong:before{content:""}.icon-changyonggoupiaorenshanchu:before{content:""}.icon-bianji:before{content:""}.icon-lianjie:before{content:""}.icon-shezhi-xianxing:before{content:""}.icon-guizewendang:before{content:""}.icon-jiqiren:before{content:""}body{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}a{cursor:pointer}.text-overflow{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}', ""]), d.locals = {}, r.exports = d
        },
        975: function(r, o, t) {
            r.exports = t.p + "img/logo.1b0beff.png"
        },
        976: function(r, o, t) {
            "use strict";
            t(267)
        },
        977: function(r, o, t) {
            var e = t(24)((function(i) {
                return i[1]
            }));
            e.push([r.i, ".logo-container[data-v-7b55521c]{align-items:center;display:flex;float:left;height:100%}.logo-container img[data-v-7b55521c]{height:41px;width:170px}", ""]), e.locals = {}, r.exports = e
        },
        978: function(r, o, t) {
            "use strict";
            t(268)
        },
        979: function(r, o, t) {
            var e = t(24)((function(i) {
                return i[1]
            }));
            e.push([r.i, '.hamburger-container[data-v-4242198d]{align-items:center;display:flex;float:right;height:100%}.hamburger-container .item[data-v-4242198d]{color:#8f9ecc;cursor:pointer;display:inline-block;padding:0 16px;position:relative}.hamburger-container .item[data-v-4242198d]:after{background-color:#8f9ecc;content:" ";height:13px;position:absolute;right:0;top:50%;transform:translateY(-50%);width:1px}', ""]), e.locals = {}, r.exports = e
        },
        980: function(r, o, t) {
            "use strict";
            t(269)
        },
        981: function(r, o, t) {
            var e = t(24)((function(i) {
                return i[1]
            }));
            e.push([r.i, ".avatar-container[data-v-7e2c4980]{align-items:center;display:flex;float:right;height:100%}", ""]), e.locals = {}, r.exports = e
        },
        982: function(r, o, t) {
            "use strict";
            t(270)
        },
        983: function(r, o, t) {
            var e = t(24)((function(i) {
                return i[1]
            }));
            e.push([r.i, ".navigation-bar[data-v-53b38142]{height:var(--navigationbar-height)}", ""]), e.locals = {}, r.exports = e
        },
        984: function(r, o, t) {
            r.exports = t.p + "img/logout.f970bb3.png"
        },
        986: function(r, o, t) {
            "use strict";
            t(271)
        },
        987: function(r, o, t) {
            var e = t(24)((function(i) {
                return i[1]
            }));
            e.push([r.i, ".user-card[data-v-77692eeb]{background:#fff;border-radius:var(--usercard-border-radius);box-shadow:0 37px 45px 0 #e8edff;display:inline-block;height:var(--usercard-height);padding:0 10px;text-align:center;width:var(--usercard-width)}.user-card .name[data-v-77692eeb]{color:#333;font-size:20px;font-weight:600;margin-top:25px}.user-card .id-wrap[data-v-77692eeb]{color:#949494}.user-card .id-wrap .num[data-v-77692eeb]{color:#333}.user-card .tips[data-v-77692eeb]{color:#949494;margin-top:20px}.user-card .tips .item[data-v-77692eeb]{margin-top:5px}.user-card .tips .item[data-v-77692eeb]:first-child{margin-top:0}.user-card .tips .item .num[data-v-77692eeb]{color:var(--color-primary);margin:0 5px}.user-card[data-v-77692eeb] .upgrade-btn.el-button{border-color:var(--color-primary);color:var(--color-primary);margin-top:20px;padding:7px 20px}", ""]), e.locals = {}, r.exports = e
        },
        988: function(r, o, t) {
            "use strict";
            t(272)
        },
        989: function(r, o, t) {
            var e = t(24)((function(i) {
                return i[1]
            }));
            e.push([r.i, '.sidebar[data-v-65c5c5c5]{background-color:#fff;border-radius:var(--sidebar-border-radius) var(--sidebar-border-radius) var(--sidebar-border-radius) 0;display:inline-block;height:100%;vertical-align:top;width:var(--sidebar-width)}.sidebar .scrollbar-wrapper[data-v-65c5c5c5]{height:calc(100% - var(--usercard-height) - var(--logout-wrapper) - 60px);margin-top:60px}.sidebar .scrollbar-wrapper .menu[data-v-65c5c5c5]{align-items:center;cursor:pointer;display:flex;font-size:16px;height:55px;padding-left:44px;position:relative}.sidebar .scrollbar-wrapper .menu .iconfont[data-v-65c5c5c5]{font-size:20px;margin-right:20px;vertical-align:middle;width:20px}.sidebar .scrollbar-wrapper .menu[data-v-65c5c5c5]:after{border-radius:4px;height:0;left:0;top:50%;transform:translateY(-50%);width:6px}.sidebar .scrollbar-wrapper .menu[data-v-65c5c5c5]:after,.sidebar .scrollbar-wrapper .menu[data-v-65c5c5c5]:before{background:var(--color-primary);content:" ";opacity:0;position:absolute;transition:all .3s}.sidebar .scrollbar-wrapper .menu[data-v-65c5c5c5]:before{border-radius:16px;box-shadow:0 19px 19px 0 #d2dcff;height:100%;right:0;top:0;transform:translateX(0);width:100%;z-index:1}.sidebar .scrollbar-wrapper .menu.cur[data-v-65c5c5c5]{color:#fff}.sidebar .scrollbar-wrapper .menu.cur[data-v-65c5c5c5]:after{height:52px;opacity:1}.sidebar .scrollbar-wrapper .menu.cur[data-v-65c5c5c5]:before{opacity:1;transform:translateX(var(--main-padding))}.sidebar .logout-wrapper[data-v-65c5c5c5]{height:var(--logout-wrapper);text-align:center}.sidebar .logout-wrapper .logout[data-v-65c5c5c5]{cursor:pointer;display:inline-block;height:66px;scale:1;transition:all .3s;width:66px}.sidebar .logout-wrapper .logout[data-v-65c5c5c5]:hover{scale:1.1}.sidebar .logout-wrapper .logout[data-v-65c5c5c5]:active{scale:1}', ""]), e.locals = {}, r.exports = e
        },
        990: function(r, o, t) {
            "use strict";
            t(273)
        },
        991: function(r, o, t) {
            var e = t(24)((function(i) {
                return i[1]
            }));
            e.push([r.i, ".app-main[data-v-391862a5]{background-color:var(--body-bg-color);font-size:14px;height:100vh;overflow:hidden}.app-main .main-container[data-v-391862a5]{height:calc(100vh - var(--header-height))}.app-main .main-container .app-page[data-v-391862a5]{display:inline-block;height:100%;overflow:hidden;overflow-y:auto;padding:var(--main-padding);padding-top:0;width:calc(100% - var(--sidebar-width))}", ""]), e.locals = {}, r.exports = e
        },
        992: function(r, o) {
            r.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAR5JREFUWEftltsNgzAMRW3GgQHKCmUA1gHWYQBYgQ5AxiFVqEoRshM7SA0f8E2uj183QUj8YeL4cANctwLF45lbxNpMQ3tmTvKyatHafn6NhtIhK+CCQ5b1ALawFrpYiDU4QgOAMyxLTUGQAL+DH+YYCKkGOwNSAaqsmrPeIdQIfUG0Z4JbQAi2Zho6JvMGEbahlbQuCOACSSDyslIHd9oiAAZi2w4JILfKYgAOYs1iXbVtY9gWiX3AZzzHbPf/Snp+1FZVgJv0WK9QzcCenKpCTPZRAElbQJkMMYSqu0M8Az6H07rfvp0iAEmAWC8IAkiCe+6BoCf84zLyQlzzOtaUnXNNqcY1n2Quq6SP0jOvYO3Z4BpqBbX/3wDJK/AGrHEQMHMkWGUAAAAASUVORK5CYII="
        },
        993: function(r, o, t) {
            "use strict";
            t(274)
        },
        994: function(r, o, t) {
            var e = t(24)((function(i) {
                return i[1]
            }));
            e.push([r.i, ".logo-a img.logo[data-v-5a6a2b86]{display:inline-block;height:40px;vertical-align:middle!important;width:40px}.logo-a .title[data-v-5a6a2b86]{margin-left:10px}.text-slate-900[data-v-5a6a2b86]{--tw-text-opacity:1;color:#0f172a;color:rgb(15 23 42/var(--tw-text-opacity))}.hover\\:bg-slate-100[data-v-5a6a2b86]:hover{--tw-bg-opacity:1;background-color:#f1f5f9;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.dialog[data-v-5a6a2b86]{background-color:rgba(203,213,225,.5);height:100%;left:0;position:fixed;top:0;width:100%;z-index:999}.dialog .box[data-v-5a6a2b86]{left:50%;position:absolute;top:20%;transform:translateX(-50%)}.dialog .box .content[data-v-5a6a2b86]{--animate-duration:0.5s;background:#fff;border-radius:24px;box-shadow:0 0 4px rgba(28,31,35,.04),0 4px 24px rgba(28,31,35,.04);box-sizing:border-box;min-height:489px;padding:24px;width:480px}.dialog .box .content .close-btn[data-v-5a6a2b86]{cursor:pointer;height:25px;position:absolute;right:25px;top:25px;transition:all .5s;width:25px}.dialog .box .content .close-btn[data-v-5a6a2b86]:hover{transform:rotate(90deg)}.dialog .box .content .expose[data-v-5a6a2b86]{align-items:center;box-sizing:border-box;display:flex;flex-direction:column}.dialog .box .content .expose .title_1[data-v-5a6a2b86]{color:#1e2023;font-size:20px;font-weight:600;margin:22px 0 8px}.dialog .box .content .expose .title_2[data-v-5a6a2b86]{color:rgba(30,32,35,.45);font-size:14px}.dialog .box .content .expose .qrcode-wrap[data-v-5a6a2b86]{border-radius:24px;box-shadow:0 0 1px rgba(28,31,35,.16),0 6px 32px 4px rgba(28,31,35,.08);color:#1e2023;font-size:14px;margin:16px 16px 36px;padding:8px 10px 12px;text-align:center}.dialog .box .content .expose .qrcode-wrap .qrcode-img[data-v-5a6a2b86]{height:100%;width:100%}.dialog .box .content .expose .qrcode-wrap .qrcode-mask[data-v-5a6a2b86]{background-color:rgba(0,0,0,.5);border-radius:20px;cursor:pointer;height:100%;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:100%}.dialog .box .content .expose .qrcode-wrap .qrcode-mask .refresh[data-v-5a6a2b86]{color:#fff;font-weight:900;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.dialog .box .content .expose .qrcode-wrap .anticon[data-v-5a6a2b86]{display:inline-block;font-style:normal;transform:translateY(4px)}.dialog .box .content .expose .methods[data-v-5a6a2b86]{align-items:center;display:flex}.dialog .box .content .expose .agree[data-v-5a6a2b86]{color:rgba(30,32,35,.45);display:flex;font-size:14px;justify-content:center;margin-top:24px;padding-top:12px;position:relative}", ""]), e.locals = {}, r.exports = e
        },
        995: function(r, o, t) {
            r.exports = t.p + "img/twitter.b313a76.png"
        },
        996: function(r, o, t) {
            r.exports = t.p + "img/discord.40986d1.png"
        },
        997: function(r, o, t) {
            "use strict";
            t(275)
        },
        998: function(r, o, t) {
            var e = t(24)((function(i) {
                return i[1]
            }));
            e.push([r.i, ".bg-slate-50[data-v-1804f4ef]{--tw-bg-opacity:1;background-color:#f8fafc;background-color:rgb(248 250 252/var(--tw-bg-opacity))}.text-slate-500[data-v-1804f4ef]{--tw-text-opacity:1;color:#64748b;color:rgb(100 116 139/var(--tw-text-opacity))}.text-sm[data-v-1804f4ef]{font-size:.875rem;line-height:1.5rem}", ""]), e.locals = {}, r.exports = e
        },
        999: function(r, o, t) {
            "use strict";
            t(276)
        }
    },
    [
        [327, 15, 5, 16]
    ]
]);