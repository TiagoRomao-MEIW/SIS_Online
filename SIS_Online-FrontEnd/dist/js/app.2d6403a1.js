(function (e) {
    function t(t) {
        for (var r, a, c = t[0], s = t[1], i = t[2], f = 0, d = []; f < c.length; f++) a = c[f], Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]), o[a] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        h && h(t);
        while (d.length) d.shift()();
        return u.push.apply(u, i || []), n()
    }

    function n() {
        for (var e, t = 0; t < u.length; t++) {
            for (var n = u[t], r = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== o[c] && (r = !1)
            }
            r && (u.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var r = {},
        a = {
            app: 0
        },
        o = {
            app: 0
        },
        u = [];

    function c(e) {
        return s.p + "js/" + ({} [e] || e) + "." + {
            "chunk-10f8a4c7": "5b8c6de3",
            "chunk-17c8fae2": "1aa19a4d",
            "chunk-1b2c2e6a": "57e30528",
            "chunk-216fca42": "b84701f6",
            "chunk-227ad4ac": "2c302076",
            "chunk-252e48f1": "99249611",
            "chunk-297218f1": "cfdf643e",
            "chunk-2d20f5a4": "7583e8fe",
            "chunk-3682fd08": "4307abf9",
            "chunk-3db275cb": "1f51986d",
            "chunk-4012798f": "b35ffe1a",
            "chunk-523c1f76": "85fdb1ac",
            "chunk-5e8dfba4": "986585cb",
            "chunk-657a3125": "b78b3889",
            "chunk-7e1f2d2c": "a910ac6d",
            "chunk-994b696e": "6cb59cda",
            "chunk-a6d0eba2": "b5fad5a0",
            "chunk-c093522c": "32bb61e0"
        } [e] + ".js"
    }

    function s(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function (e) {
        var t = [],
            n = {
                "chunk-17c8fae2": 1,
                "chunk-1b2c2e6a": 1,
                "chunk-216fca42": 1,
                "chunk-227ad4ac": 1,
                "chunk-252e48f1": 1,
                "chunk-297218f1": 1,
                "chunk-3682fd08": 1,
                "chunk-3db275cb": 1,
                "chunk-4012798f": 1,
                "chunk-523c1f76": 1,
                "chunk-5e8dfba4": 1,
                "chunk-657a3125": 1,
                "chunk-7e1f2d2c": 1,
                "chunk-994b696e": 1,
                "chunk-a6d0eba2": 1,
                "chunk-c093522c": 1
            };
        a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = new Promise((function (t, n) {
            for (var r = "css/" + ({} [e] || e) + "." + {
                    "chunk-10f8a4c7": "31d6cfe0",
                    "chunk-17c8fae2": "acd41a27",
                    "chunk-1b2c2e6a": "acd41a27",
                    "chunk-216fca42": "acd41a27",
                    "chunk-227ad4ac": "acd41a27",
                    "chunk-252e48f1": "acd41a27",
                    "chunk-297218f1": "acd41a27",
                    "chunk-2d20f5a4": "31d6cfe0",
                    "chunk-3682fd08": "acd41a27",
                    "chunk-3db275cb": "acd41a27",
                    "chunk-4012798f": "acd41a27",
                    "chunk-523c1f76": "2e342068",
                    "chunk-5e8dfba4": "acd41a27",
                    "chunk-657a3125": "acd41a27",
                    "chunk-7e1f2d2c": "acd41a27",
                    "chunk-994b696e": "acd41a27",
                    "chunk-a6d0eba2": "acd41a27",
                    "chunk-c093522c": "acd41a27"
                } [e] + ".css", o = s.p + r, u = document.getElementsByTagName("link"), c = 0; c < u.length; c++) {
                var i = u[c],
                    f = i.getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (f === r || f === o)) return t()
            }
            var d = document.getElementsByTagName("style");
            for (c = 0; c < d.length; c++) {
                i = d[c], f = i.getAttribute("data-href");
                if (f === r || f === o) return t()
            }
            var h = document.createElement("link");
            h.rel = "stylesheet", h.type = "text/css", h.onload = t, h.onerror = function (t) {
                var r = t && t.target && t.target.src || o,
                    u = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                u.code = "CSS_CHUNK_LOAD_FAILED", u.request = r, delete a[e], h.parentNode.removeChild(h), n(u)
            }, h.href = o;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(h)
        })).then((function () {
            a[e] = 0
        })));
        var r = o[e];
        if (0 !== r)
            if (r) t.push(r[2]);
            else {
                var u = new Promise((function (t, n) {
                    r = o[e] = [t, n]
                }));
                t.push(r[2] = u);
                var i, f = document.createElement("script");
                f.charset = "utf-8", f.timeout = 120, s.nc && f.setAttribute("nonce", s.nc), f.src = c(e);
                var d = new Error;
                i = function (t) {
                    f.onerror = f.onload = null, clearTimeout(h);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")", d.name = "ChunkLoadError", d.type = r, d.request = a, n[1](d)
                        }
                        o[e] = void 0
                    }
                };
                var h = setTimeout((function () {
                    i({
                        type: "timeout",
                        target: f
                    })
                }), 12e4);
                f.onerror = f.onload = i, document.head.appendChild(f)
            } return Promise.all(t)
    }, s.m = e, s.c = r, s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) s.d(n, r, function (t) {
                return e[t]
            }.bind(null, r));
        return n
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s.oe = function (e) {
        throw console.error(e), e
    };
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        f = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var d = 0; d < i.length; d++) t(i[d]);
    var h = f;
    u.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    },
    "17d5": function (e, t, n) {
        "use strict";
        n.d(t, "g", (function () {
            return r
        })), n.d(t, "b", (function () {
            return a
        })), n.d(t, "e", (function () {
            return o
        })), n.d(t, "a", (function () {
            return u
        })), n.d(t, "c", (function () {
            return c
        })), n.d(t, "d", (function () {
            return s
        })), n.d(t, "f", (function () {
            return i
        })), n.d(t, "h", (function () {
            return f
        }));
        var r = "auth",
            a = "authLogin",
            o = "authRegister",
            u = "authInfo",
            c = "authLoginSuccess",
            s = "authLogoutSuccess",
            i = "authRegisterSuccess",
            f = "setMessage"
    },
    "33de": function (e, t) {},
    "4e2e": function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return r
        })), n.d(t, "a", (function () {
            return a
        })), n.d(t, "b", (function () {
            return o
        })), n.d(t, "d", (function () {
            return u
        })), n.d(t, "e", (function () {
            return c
        })), n.d(t, "f", (function () {
            return s
        }));
        var r = "fetchCourses",
            a = "addCourse",
            o = "editCourse",
            u = "removeCourse",
            c = "setCourses",
            s = "setMessage"
    },
    "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var r = n("2b0e"),
            a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("b-container", {
                    attrs: {
                        fluid: ""
                    }
                }, [n("NavBar"), n("router-view")], 1)
            },
            o = [],
            u = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", [n("b-navbar", {
                    attrs: {
                        toggleable: "lg",
                        type: "dark",
                        variant: "dark",
                        fluid: ""
                    }
                }, [n("b-navbar-brand", {
                    staticClass: "ml-5"
                }, [n("b-button", {
                    staticClass: "p-2 mr-2",
                    staticStyle: {
                        position: "relative",
                        right: "5%"
                    },
                    attrs: {
                        variant: "outline-light",
                        href: "#rules",
                        to: {
                            name: "home"
                        }
                    }
                }, [n("i", {
                    staticClass: "fas fa-home mr-2"
                }), e._v("INICIO ")])], 1), n("b-navbar-toggle", {
                    attrs: {
                        target: "nav-collapse"
                    }
                }), n("b-collapse", {
                    attrs: {
                        id: "nav-collapse",
                        "is-nav": ""
                    }
                }, [n("b-navbar-nav", {
                    staticClass: "ml-auto mr-5"
                }, [n("b-button", {
                    staticStyle: {
                        float: "right"
                    },
                    attrs: {
                        variant: "outline-danger",
                        hidden: !e.isUserLoggedIn
                    },
                    on: {
                        click: function (t) {
                            return e.logout()
                        }
                    }
                }, [n("i", {
                    staticClass: "fas fa-sign-out-alt"
                }), e._v(" LOGOUT ")])], 1)], 1)], 1)], 1)
            },
            c = [],
            s = (n("a4d3"), n("4de4"), n("4160"), n("0d03"), n("e439"), n("dbb4"), n("b64b"), n("159b"), n("2fa7")),
            i = n("2f62"),
            f = n("a18c"),
            d = n("17d5");

        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(n, !0).forEach((function (t) {
                    Object(s["a"])(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(n).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var m = {
                computed: p({}, Object(i["b"])(["getUserLevelByPoints"]), {}, Object(i["b"])("auth", ["isUserLoggedIn", "getProfileName", "getUserType", "getProfile"])),
                methods: {
                    logout: function () {
                        var e = this;
                        this.$confirm("", "Sair do SIS Online?", "warning", {
                            confirmButtonText: "Sim",
                            cancelButtonText: "Não"
                        }).then((function () {
                            e.$store.commit("auth/".concat(d["d"])), f["a"].push({
                                name: "home"
                            })
                        }))
                    },
                    setCurrentDateTime: function (e) {
                        var t = new Date(e);
                        return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDay()
                    }
                }
            },
            l = m,
            b = n("2877"),
            g = Object(b["a"])(l, u, c, !1, null, null, null),
            k = g.exports,
            v = {
                name: "app",
                components: {
                    NavBar: k
                }
            },
            w = v,
            y = Object(b["a"])(w, a, o, !1, null, null, null),
            O = y.exports,
            j = n("33de"),
            x = n.n(j),
            S = (n("b0c0"), n("d3b7"), n("96cf"), n("89ba")),
            P = "http://localhost:8080",//"https://api-sisonline.herokuapp.com",
            T = P,
            C = {
                login: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t) {
                        var n, r, a, o;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/auth"), {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json;charset=utf-8"
                                        },
                                        body: JSON.stringify(t)
                                    });
                                case 2:
                                    if (n = e.sent, !n.ok) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 6, n.json();
                                case 6:
                                    return r = e.sent, a = n.headers.get("Authorization"), o = r.body, e.abrupt("return", {
                                        token: a,
                                        profile: o
                                    });
                                case 12:
                                    throw Error(R(n.status));
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                register: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/users"), {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json;charset=utf-8"
                                        },
                                        body: JSON.stringify(t)
                                    });
                                case 2:
                                    if (n = e.sent, !n.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, n.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(R(n.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getInfo: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/auth"), {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        }
                                    });
                                case 2:
                                    return n = e.sent, e.next = 5, n.json();
                                case 5:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            };

        function R(e) {
            var t = "";
            switch (e) {
                case 401:
                    t = "Não está autorizado a executar esta ação!";
                    break;
                case 403:
                    t = "Dados das credenciais errados!";
                    break;
                case 406:
                    t = "Dados do utilizador já existentes!";
                    break;
                default:
                    t = "Mensagem desconhecida";
                    break
            }
            return t
        }
        var E, I, U = "user_token",
            N = "user_profile",
            z = {
                message: "",
                token: localStorage.getItem(U) || sessionStorage.getItem(U) || "",
                profile: JSON.parse(localStorage.getItem(N) || sessionStorage.getItem(N) || "{}")
            },
            _ = {
                isUserLoggedIn: function (e) {
                    return "" != e.token
                },
                getProfileName: function (e) {
                    return e.profile.name
                },
                getUserType: function (e) {
                    return e.profile.type
                },
                getProfile: function (e) {
                    return e.profile
                },
                getMessage: function (e) {
                    return e.message
                }
            },
            A = (E = {}, Object(s["a"])(E, d["b"], function () {
                var e = Object(S["a"])(regeneratorRuntime.mark((function e(t, n) {
                    var r;
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return r = t.commit, e.abrupt("return", new Promise((function (e, t) {
                                    C.login(n).then((function (t) {
                                        r(d["c"], {
                                            token: t.token,
                                            profile: t.profile
                                        }), r(d["h"], "Bem-vindo, ".concat(t.profile.name, "!")), e(t)
                                    })).catch((function (e) {
                                        return t(e)
                                    }))
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }()), Object(s["a"])(E, d["e"], function () {
                var e = Object(S["a"])(regeneratorRuntime.mark((function e(t, n) {
                    var r;
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return r = t.commit, e.abrupt("return", new Promise((function (e, t) {
                                    C.register(n).then((function (t) {
                                        r(d["h"], "O utilizador ".concat(t.body.name, " foi adicionado com sucesso!")), e(t)
                                    })).catch((function (e) {
                                        return t(e)
                                    }))
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            }()), Object(s["a"])(E, d["a"], function () {
                var e = Object(S["a"])(regeneratorRuntime.mark((function e(t) {
                    var n;
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return n = t.commit, e.t0 = n, e.t1 = d["h"], e.next = 5, C.getInfo("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwayI6Ijljazdha2RqbTZ3NWRlMjllMTgwZDlmZWMwMDA0NDk5NTkxIiwiaWF0IjoxNTc1MTUxMTc4LCJleHAiOjE1NzUxNjYxNzgsImlzcyI6IkZDQSJ9.XSltMWtgSkrpg9JcU18ZJA5S4ZHLvFOCjGOQIo9O5Q4");
                            case 5:
                                e.t2 = e.sent, (0, e.t0)(e.t1, e.t2);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()), E),
            M = (I = {}, Object(s["a"])(I, d["c"], (function (e, t) {
                e.token = t.token, localStorage.STORAGE_ACCESS_TOKEN = t.token, e.profile = t.profile, localStorage.STORAGE_USER_PROFILE = JSON.stringify(t.profile)
            })), Object(s["a"])(I, d["d"], (function (e) {
                e.token = "", e.profile = {}, localStorage.removeItem(U), localStorage.removeItem(N)
            })), Object(s["a"])(I, d["f"], (function (e, t) {
                e.register = t
            })), Object(s["a"])(I, d["h"], (function (e, t) {
                e.message = t
            })), I),
            J = {
                namespaced: !0,
                state: z,
                getters: _,
                actions: A,
                mutations: M
            },
            D = (n("7db0"), n("99af"), {
                getUsers: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/users"), {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        }
                                    });
                                case 2:
                                    if (n = e.sent, !n.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, n.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(L(n.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                addUser: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t, n) {
                        var r;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/users"), {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        },
                                        body: JSON.stringify(n)
                                    });
                                case 2:
                                    if (r = e.sent, !r.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, r.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(L(r.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                editUser: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t, n) {
                        var r;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/users/").concat(n._id), {
                                        method: "PUT",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        },
                                        body: JSON.stringify(n)
                                    });
                                case 2:
                                    if (r = e.sent, !r.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, r.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(L(r.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                removeUser: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t, n) {
                        var r;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/users/").concat(n), {
                                        method: "DELETE",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        }
                                    });
                                case 2:
                                    if (r = e.sent, !r.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, r.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(L(r.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            });

        function L(e) {
            var t = "";
            switch (e) {
                case 401:
                    t = "Não está autorizado a executar esta ação!";
                    break;
                case 406:
                    t = "Ação não aceitável. Verifique se preencheu bem todos os campos!";
                    break;
                case 409:
                    t = "Já existe um utilizador com este username!";
                    break;
                default:
                    t = "Mensagem desconhecida";
                    break
            }
            return t
        }
        var B, G, Z = D,
            F = n("e680"),
            $ = {
                users: [],
                message: ""
            },
            q = {
                getUsers: function (e) {
                    return e.users
                },
                getUsersById: function (e) {
                    return function (t) {
                        return e.users.find((function (e) {
                            return e._id === t
                        }))
                    }
                },
                getNameById: function (e) {
                    return function (t) {
                        var n = e.users.find((function (e) {
                            return e._id === t
                        }));
                        return n.name
                    }
                },
                getMessage: function (e) {
                    return e.message
                },
                getUserType: function (e) {
                    return e.type
                },
                getUserProgramID: function (e) {
                    return function (t) {
                        var n = e.users.find((function (e) {
                            return e._id === t
                        }));
                        return n.name
                    }
                }
            },
            W = (B = {}, Object(s["a"])(B, F["c"], function () {
                var e = Object(S["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return n = t.commit, r = t.rootState, e.abrupt("return", new Promise((function (e, t) {
                                    Z.getUsers(r.auth.token).then((function (t) {
                                        n(F["f"], t.body), e(t)
                                    }), (function (e) {
                                        n(F["e"], e.message), t(e)
                                    }))
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()), Object(s["a"])(B, F["a"], (function (e, t) {
                var n = e.commit,
                    r = e.rootState;
                return new Promise((function (e, a) {
                    Z.addUser(r.auth.token, t).then((function (t) {
                        n(F["e"], "O utilizador ".concat(t.body.name, " foi adicionado com sucesso!")), e(t)
                    }), (function (e) {
                        return a(e)
                    }))
                }))
            })), Object(s["a"])(B, F["b"], (function (e, t) {
                var n = e.commit,
                    r = e.rootState;
                return new Promise((function (e, a) {
                    Z.editUser(r.auth.token, t).then((function (t) {
                        n(F["e"], "O utilizador ".concat(t.body.name, " foi atualizado com sucesso!")), e(t)
                    }), (function (e) {
                        n(F["e"], e.message), a(e)
                    }))
                }))
            })), Object(s["a"])(B, F["d"], (function (e, t) {
                var n = e.commit,
                    r = e.rootState;
                return new Promise((function (e, a) {
                    Z.removeUser(r.auth.token, t).then((function (t) {
                        n(F["e"], "O utilizador foi removido com sucesso!"), e(t)
                    }), (function (e) {
                        return a(e)
                    }))
                }))
            })), B),
            H = (G = {}, Object(s["a"])(G, F["f"], (function (e, t) {
                e.users = t
            })), Object(s["a"])(G, F["e"], (function (e, t) {
                e.message = t
            })), G),
            Q = {
                namespaced: !0,
                state: $,
                getters: q,
                actions: W,
                mutations: H
            },
            K = {
                getPrograms: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/programs"), {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        }
                                    });
                                case 2:
                                    if (n = e.sent, !n.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, n.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(V(n.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                addProgram: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t, n) {
                        var r;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/programs"), {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        },
                                        body: JSON.stringify(n)
                                    });
                                case 2:
                                    if (r = e.sent, !r.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, r.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(V(r.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                editProgram: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t, n) {
                        var r;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/programs/").concat(n._id), {
                                        method: "PUT",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        },
                                        body: JSON.stringify(n)
                                    });
                                case 2:
                                    if (r = e.sent, !r.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, r.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(V(r.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                removeProgram: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t, n) {
                        var r;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/programs/").concat(n), {
                                        method: "DELETE",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        }
                                    });
                                case 2:
                                    if (r = e.sent, !r.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, r.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(V(r.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            };

        function V(e) {
            var t = "";
            switch (e) {
                case 401:
                    t = "Não está autorizado a executar esta ação!";
                    break;
                default:
                    t = "Mensagem desconhecida";
                    break
            }
            return t
        }
        var X, Y, ee = K,
            te = n("d525"),
            ne = {
                programs: [],
                message: ""
            },
            re = {
                getPrograms: function (e) {
                    return e.programs
                },
                getProgramById: function (e) {
                    return function (t) {
                        return e.programs.find((function (e) {
                            return e._id === t
                        }))
                    }
                },
                getMessage: function (e) {
                    return e.message
                }
            },
            ae = (X = {}, Object(s["a"])(X, te["c"], function () {
                var e = Object(S["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return n = t.commit, r = t.rootState, e.abrupt("return", new Promise((function (e, t) {
                                    ee.getPrograms(r.auth.token).then((function (t) {
                                        n(te["f"], t.body), e(t)
                                    }), (function (e) {
                                        n(te["e"], e.message), t(e)
                                    }))
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()), Object(s["a"])(X, te["a"], (function (e, t) {
                var n = e.commit,
                    r = e.rootState;
                return new Promise((function (e, a) {
                    ee.addProgram(r.auth.token, t).then((function (t) {
                        n(te["e"], "sucesso!"), e(t.body)
                    }), (function (e) {
                        n(te["e"], e.message), a(e)
                    }))
                }))
            })), Object(s["a"])(X, te["b"], (function (e, t) {
                var n = e.rootState;
                return new Promise((function (e, r) {
                    ee.editProgram(n.auth.token, t).then((function (t) {
                        return e(t)
                    }), (function (e) {
                        return r(e)
                    }))
                }))
            })), Object(s["a"])(X, te["d"], (function (e, t) {
                var n = e.commit,
                    r = e.rootState;
                return new Promise((function (e, a) {
                    ee.removeProgram(r.auth.token, t).then((function (t) {
                        n(te["e"], "sucesso!"), e(t)
                    }), (function (e) {
                        return a(e)
                    }))
                }))
            })), X),
            oe = (Y = {}, Object(s["a"])(Y, te["f"], (function (e, t) {
                e.programs = t
            })), Object(s["a"])(Y, te["e"], (function (e, t) {
                e.message = t
            })), Y),
            ue = {
                namespaced: !0,
                state: ne,
                getters: re,
                actions: ae,
                mutations: oe
            },
            ce = {
                getCourses: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t) {
                        var n;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/courses"), {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        }
                                    });
                                case 2:
                                    if (n = e.sent, !n.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, n.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(se(n.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                addCourse: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t, n) {
                        var r;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/courses"), {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        },
                                        body: JSON.stringify(n)
                                    });
                                case 2:
                                    if (r = e.sent, !r.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, r.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(se(r.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                editCourse: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t, n) {
                        var r;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/courses/").concat(n._id), {
                                        method: "PUT",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        },
                                        body: JSON.stringify(n)
                                    });
                                case 2:
                                    if (r = e.sent, !r.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, r.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(se(r.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                removeCourse: function () {
                    var e = Object(S["a"])(regeneratorRuntime.mark((function e(t, n) {
                        var r;
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch("".concat(T, "/courses/").concat(n), {
                                        method: "DELETE",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Authorization: t
                                        }
                                    });
                                case 2:
                                    if (r = e.sent, !r.ok) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.next = 6, r.json();
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 9:
                                    throw Error(se(r.status));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));

                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            };

        function se(e) {
            var t = "";
            switch (e) {
                case 401:
                    t = "Não está autorizado a executar esta ação!";
                    break;
                default:
                    t = "Mensagem desconhecida";
                    break
            }
            return t
        }
        var ie, fe, de = ce,
            he = n("4e2e"),
            pe = {
                courses: [],
                message: ""
            },
            me = {
                getCourses: function (e) {
                    return e.courses
                },
                getCourseById: function (e) {
                    return function (t) {
                        return e.courses.find((function (e) {
                            return e._id === t
                        }))
                    }
                },
                getMessage: function (e) {
                    return e.message
                }
            },
            le = (ie = {}, Object(s["a"])(ie, he["c"], function () {
                var e = Object(S["a"])(regeneratorRuntime.mark((function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap((function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return n = t.commit, r = t.rootState, e.abrupt("return", new Promise((function (e, t) {
                                    de.getCourses(r.auth.token).then((function (t) {
                                        n(he["e"], t.body), e(t)
                                    }), (function (e) {
                                        n(he["f"], e.message), t(e)
                                    }))
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function (t) {
                    return e.apply(this, arguments)
                }
            }()), Object(s["a"])(ie, he["a"], (function (e, t) {
                var n = e.commit,
                    r = e.rootState;
                return new Promise((function (e, a) {
                    de.addCourse(r.auth.token, t).then((function (t) {
                        n(he["f"], "sucesso!"), e(t.body)
                    }), (function (e) {
                        n(he["f"], e.message), a(e)
                    }))
                }))
            })), Object(s["a"])(ie, he["b"], (function (e, t) {
                var n = e.rootState;
                return new Promise((function (e, r) {
                    de.editCourse(n.auth.token, t).then((function (t) {
                        return e(t)
                    }), (function (e) {
                        return r(e)
                    }))
                }))
            })), Object(s["a"])(ie, he["d"], (function (e, t) {
                var n = e.commit,
                    r = e.rootState;
                return new Promise((function (e, a) {
                    de.removeCourse(r.auth.token, t).then((function (t) {
                        n(he["f"], "sucesso!"), e(t)
                    }), (function (e) {
                        return a(e)
                    }))
                }))
            })), ie),
            be = (fe = {}, Object(s["a"])(fe, he["e"], (function (e, t) {
                e.courses = t
            })), Object(s["a"])(fe, he["f"], (function (e, t) {
                e.message = t
            })), fe),
            ge = {
                namespaced: !0,
                state: pe,
                getters: me,
                actions: le,
                mutations: be
            };
        r["default"].use(i["a"]);
        var ke = new i["a"].Store({
                getters: x.a.getters,
                mutations: x.a.mutations,
                state: x.a.state,
                actions: x.a.actions,
                modules: {
                    auth: J,
                    user: Q,
                    program: ue,
                    course: ge
                }
            }),
            ve = n("683f"),
            we = n("5f5b");
        n("2dd8");
        r["default"].use(we["a"]), r["default"].use(ve["a"]), r["default"].config.productionTip = !1, new r["default"]({
            router: f["a"],
            store: ke,
            render: function (e) {
                return e(O)
            }
        }).$mount("#app")
    },
    a18c: function (e, t, n) {
        "use strict";
        n("d3b7");
        var r = n("2b0e"),
            a = n("8c4f");
        r["default"].use(a["a"]);
        var o = [{
                path: "/",
                name: "home",
                component: function () {
                    return n.e("chunk-10f8a4c7").then(n.bind(null, "bb51"))
                }
            }, {
                path: "/login",
                name: "login",
                component: function () {
                    return n.e("chunk-a6d0eba2").then(n.bind(null, "a55b"))
                }
            }, {
                path: "/register",
                name: "register",
                component: function () {
                    return n.e("chunk-252e48f1").then(n.bind(null, "73cf"))
                }
            }, {
                path: "/admin",
                name: "admin",
                component: function () {
                    return n.e("chunk-297218f1").then(n.bind(null, "3530"))
                }
            }, {
                path: "/admin/programs",
                name: "listPrograms",
                component: function () {
                    return n.e("chunk-523c1f76").then(n.bind(null, "0820"))
                }
            }, {
                path: "/admin/programs/add",
                name: "addProgram",
                component: function () {
                    return n.e("chunk-657a3125").then(n.bind(null, "4437"))
                }
            }, {
                path: "/admin/programs/:programId",
                name: "editProgram",
                component: function () {
                    return n.e("chunk-3682fd08").then(n.bind(null, "221e"))
                }
            }, {
                path: "/admin/courses",
                name: "listCourses",
                component: function () {
                    return n.e("chunk-227ad4ac").then(n.bind(null, "0057"))
                }
            }, {
                path: "/admin/courses/add",
                name: "addCourse",
                component: function () {
                    return n.e("chunk-994b696e").then(n.bind(null, "629e"))
                }
            }, {
                path: "/admin/courses/:courseId",
                name: "editCourse",
                component: function () {
                    return n.e("chunk-5e8dfba4").then(n.bind(null, "e9a9"))
                }
            }, {
                path: "/admin/users",
                name: "listUsers",
                component: function () {
                    return n.e("chunk-1b2c2e6a").then(n.bind(null, "1ae6"))
                }
            }, {
                path: "/admin/users",
                name: "listStudent",
                component: function () {
                    return n.e("chunk-3db275cb").then(n.bind(null, "86be"))
                }
            }, {
                path: "/admin/users",
                name: "listTeacher",
                component: function () {
                    return n.e("chunk-7e1f2d2c").then(n.bind(null, "6655"))
                }
            }, {
                path: "/admin/users/add",
                name: "addUser",
                component: function () {
                    return n.e("chunk-216fca42").then(n.bind(null, "ff1b"))
                }
            }, {
                path: "/admin/users/:userId",
                name: "editUser",
                component: function () {
                    return n.e("chunk-17c8fae2").then(n.bind(null, "8a05"))
                }
            }, {
                path: "/admin/users/:userId",
                name: "enrollUser",
                component: function () {
                    return n.e("chunk-c093522c").then(n.bind(null, "95f3"))
                }
            }, {
                path: "/profile",
                name: "profile",
                component: function () {
                    return n.e("chunk-4012798f").then(n.bind(null, "c66d"))
                },
                meta: {
                    rule: "user"
                }
            }, {
                path: "*",
                component: function () {
                    return n.e("chunk-2d20f5a4").then(n.bind(null, "b2ec"))
                }
            }],
            u = new a["a"]({
                mode: "history",
                base: "/",
                routes: o
            });
        t["a"] = u
    },
    d525: function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return r
        })), n.d(t, "a", (function () {
            return a
        })), n.d(t, "b", (function () {
            return o
        })), n.d(t, "d", (function () {
            return u
        })), n.d(t, "f", (function () {
            return c
        })), n.d(t, "e", (function () {
            return s
        }));
        var r = "fetchPrograms",
            a = "addProgram",
            o = "editProgram",
            u = "removeProgram",
            c = "setPrograms",
            s = "setMessage"
    },
    e680: function (e, t, n) {
        "use strict";
        n.d(t, "c", (function () {
            return r
        })), n.d(t, "a", (function () {
            return a
        })), n.d(t, "b", (function () {
            return o
        })), n.d(t, "d", (function () {
            return u
        })), n.d(t, "f", (function () {
            return c
        })), n.d(t, "e", (function () {
            return s
        }));
        var r = "fetchUsers",
            a = "addUser",
            o = "editUser",
            u = "removeUser",
            c = "setUsers",
            s = "setMessage"
    }
});
//# sourceMappingURL=app.2d6403a1.js.map