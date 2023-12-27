(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        1118: function(t, o, e) {
            "use strict";
            e.d(o, "b", (function() {
                return n
            })), e.d(o, "a", (function() {
                return l
            })), e.d(o, "c", (function() {
                return d
            }));
            e(1155), e(10), e(1160), e(1163), e(1164), e(1165), e(1166), e(1167), e(1168), e(1169), e(1170), e(1171), e(1172), e(1173), e(1174), e(1175), e(1176), e(1178), e(1179), e(1180), e(1181), e(1182), e(1183), e(1184), e(1185), e(1186), e(22);
            var r = e(1187);

            function n(t) {
                return "https://www.chathub.dev/webchat?a=" + l(t)
            }

            function l(t) {
                var o = {
                    c: t
                };
                return encodeURIComponent(function(t) {
                    for (var o = "", e = t.byteLength, i = 0; i < e; i++) o += String.fromCharCode(t[i]);
                    return window.btoa(o)
                }(r.deflate(JSON.stringify(o))))
            }

            function d(data) {
                try {
                    return data = function(t) {
                        for (var o = window.atob(t), e = o.length, r = new Uint8Array(e), i = 0; i < e; i++) r[i] = o.charCodeAt(i);
                        return r
                    }(data), {
                        channelId: JSON.parse(r.inflate(data, {
                            to: "string"
                        })).c
                    }
                } catch (t) {
                    return !1
                }
            }
        },
        1121: function(t, o, e) {
            "use strict";
            e(19), e(26), e(34), e(23), e(35);
            var r = e(13),
                n = e(8),
                l = (e(66), e(10), e(42), e(43), e(36), e(21), e(64), e(169), e(22), e(104), e(262)),
                d = e(263),
                c = function() {
                    function t(o) {
                        Object(l.a)(this, t), this.url = o, this.ws = null, this.listeners = {}
                    }
                    return Object(d.a)(t, [{
                        key: "connect",
                        value: function() {
                            var t = this;
                            this.ws || (this.ws = new WebSocket(this.url), this.ws.onopen = function() {
                                console.info("[ws connected]"), t.emit("open")
                            }, this.ws.onmessage = function(o) {
                                t.emit("message", o)
                            }, this.ws.onclose = function(o) {
                                console.info("[ws closed]"), t.emit("close", o), t.ws = null
                            }, this.ws.onerror = function(o) {
                                console.error("[ws error]", o), t.emit("error", o)
                            })
                        }
                    }, {
                        key: "close",
                        value: function() {
                            this.ws && this.ws.close()
                        }
                    }, {
                        key: "reconnect",
                        value: function() {
                            this.close(), this.connect()
                        }
                    }, {
                        key: "chat",
                        value: function(t) {
                            this.ws && this.ws.readyState === WebSocket.OPEN && this.ws.send(JSON.stringify(t))
                        }
                    }, {
                        key: "on",
                        value: function(t, o) {
                            this.listeners[t] = o
                        }
                    }, {
                        key: "off",
                        value: function(t) {
                            this.listeners[t] && delete this.listeners[t]
                        }
                    }, {
                        key: "emit",
                        value: function(t) {
                            var o;
                            if (this.listeners[t]) {
                                for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                                (o = this.listeners)[t].apply(o, r)
                            }
                        }
                    }]), t
                }(),
                h = e(40);

            function m(object, t) {
                var o = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var e = Object.getOwnPropertySymbols(object);
                    t && (e = e.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), o.push.apply(o, e)
                }
                return o
            }

            function y(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? m(Object(source), !0).forEach((function(o) {
                        Object(r.a)(t, o, source[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(o) {
                        Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(source, o))
                    }))
                }
                return t
            }
            var w = null;
            w = Object(h.f)((function() {
                return Promise.all([e.e(17), e.e(18)]).then(e.bind(null, 1473))
            }));
            var f = {
                    props: {
                        setMobile: {
                            type: Boolean,
                            default: function() {
                                return !1
                            }
                        },
                        disabled: {
                            type: Boolean,
                            default: function() {
                                return !1
                            }
                        },
                        showCopyright: {
                            type: Boolean,
                            default: function() {
                                return !1
                            }
                        }
                    },
                    data: function() {
                        return {
                            title: "",
                            question: "",
                            keyworks: "",
                            messages: [],
                            tips: [],
                            waiting: !1,
                            chatws: null,
                            marked: null,
                            reconnectTimer: null,
                            loopCount: 0,
                            maximum: 10,
                            retryDuration: 2e3
                        }
                    },
                    watch: {
                        messages: {
                            deep: !0,
                            handler: function(t) {
                                this.$emit("message", t)
                            }
                        },
                        waiting: function(t) {
                            this.$emit("waiting", t)
                        }
                    },
                    destroyed: function() {
                        this.chatws && this.chatws.close(), clearTimeout(this.reconnectTimer)
                    },
                    mounted: function() {
                        this.messages = [{
                            content: this.$t("chathub.openai.chat.hello")
                        }]
                    },
                    methods: {
                        init: function(t) {
                            var o = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                var r, n, l;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o.options = t, e.next = 3, w();
                                        case 3:
                                            r = e.sent, n = r.default, l = parseInt(Object(h.d)().replace("-", "").slice(0, 6), 16), o.chatws = new c("wss://chat-wss.savev.cc/chat/".concat(l)), o.chatws.connect(), o.bindMessage(), o.marked = n;
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        clearBtn: function() {
                            this.disabled || this.messages.length > 1 && this.messages.splice(1, this.messages.length - 1)
                        },
                        bindMessage: function() {
                            var t = this;
                            this.chatws.off("message"), this.chatws.off("error"), this.chatws.off("close"), this.chatws.on("message", (function(o) {
                                var e = t.messages[t.messages.length - 1];
                                if ("[DONE]" === o.data) t.waiting = !1, t.$api.$get("/v1/ai-chat/chat/useFreeChats", {
                                    params: t.options.chatParams
                                }), t.chatws.off("message");
                                else if ("[FAIL]" === o.data) t.msgErrorCb(" [FAIL]");
                                else try {
                                    var r = JSON.parse(o.data);
                                    r.content && (e.rawContent += r.content, e.content = t.marked.parse(e.rawContent), t.autoScrollBottom())
                                } catch (o) {
                                    console.error("[ws json error]", o), t.waiting = !1
                                }
                            })), this.chatws.on("error", (function() {
                                t.msgErrorCb(" [ERROR]")
                            })), this.chatws.on("close", (function() {
                                t.msgErrorCb(" [CLOSE]")
                            }))
                        },
                        msgErrorCb: function(t) {
                            var o = this.messages[this.messages.length - 1];
                            this.waiting = !1, o.content || (o.error = this.$t("chathub.openai.chat.errorMsg") + t), this.chatws.off("message")
                        },
                        getChannelInfo: function(t) {
                            var o = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                var r, n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, o.waiting = !0, e.next = 4, o.$api.$get("/v1/ai-chat/manager/findChatChannel", {
                                                params: {
                                                    channelId: t
                                                }
                                            });
                                        case 4:
                                            if (r = e.sent, (n = r.data) && n.webConfig) {
                                                e.next = 9;
                                                break
                                            }
                                            return o.$message.error(o.$t("chathub.openai.webchat.error2")), e.abrupt("return", Promise.reject());
                                        case 9:
                                            return o.title = n.webConfig.title, o.tips = n.tips, o.waiting = !1, e.abrupt("return", n.fileId);
                                        case 15:
                                            return e.prev = 15, e.t0 = e.catch(0), o.$message.error("findChatChannel失败"), o.waiting = !1, e.abrupt("return", null);
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 15]
                                ])
                            })))()
                        },
                        clickTag: function(t) {
                            this.question = t, this.submitBtn()
                        },
                        submitBtn: function() {
                            this.waiting || this.question && (this.keyworks = this.question, this.question = "", this.waiting = !0, this.messages.push({
                                rawContent: this.keyworks,
                                content: this.marked.parse(this.keyworks),
                                isQuestion: !0
                            }), this.messages.push({
                                rawContent: "",
                                content: "",
                                error: !1
                            }), this.loopCount = 0, this.submitHandler())
                        },
                        submitHandler: function() {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function o() {
                                var e, r, data, n;
                                return regeneratorRuntime.wrap((function(o) {
                                    for (;;) switch (o.prev = o.next) {
                                        case 0:
                                            if (!(t.loopCount > t.maximum)) {
                                                o.next = 3;
                                                break
                                            }
                                            return t.msgErrorCb(" [TIME_OUT]"), o.abrupt("return");
                                        case 3:
                                            if (t.loopCount++, t.autoScrollBottom(), !t.chatws.ws) {
                                                o.next = 28;
                                                break
                                            }
                                            if (t.chatws.ws.readyState !== WebSocket.OPEN) {
                                                o.next = 25;
                                                break
                                            }
                                            return e = {}, o.prev = 8, t.waiting = !0, o.next = 12, t.$api.$post("/v1/ai-chat/chat/chatApiSettings", y({
                                                msg: t.keyworks
                                            }, t.options.chatParams));
                                        case 12:
                                            r = o.sent, data = r.data, e = data, t.waiting = !1, o.next = 22;
                                            break;
                                        case 18:
                                            return o.prev = 18, o.t0 = o.catch(8), t.msgErrorCb(" [XHR_ERROR:getChatSettings]"), o.abrupt("return");
                                        case 22:
                                            t.chatws.ws && t.chatws.ws.readyState === WebSocket.OPEN ? (t.waiting = !0, t.bindMessage(), (n = t.getDialogs()).length && (e.dialogs = n), t.chatws.chat(e)) : (clearTimeout(t.reconnectTimer), t.reconnectTimer = setTimeout((function() {
                                                t.submitHandler()
                                            }), t.retryDuration)), o.next = 26;
                                            break;
                                        case 25:
                                            t.chatws.ws.readyState === WebSocket.CONNECTING || t.chatws.ws.readyState === WebSocket.CLOSING ? (clearTimeout(t.reconnectTimer), t.reconnectTimer = setTimeout((function() {
                                                t.submitHandler()
                                            }), t.retryDuration)) : t.chatws.ws.readyState === WebSocket.CLOSING && (clearTimeout(t.reconnectTimer), t.reconnectTimer = setTimeout((function() {
                                                t.chatws.reconnect(), t.bindMessage(), t.submitHandler()
                                            }), t.retryDuration));
                                        case 26:
                                            o.next = 30;
                                            break;
                                        case 28:
                                            clearTimeout(t.reconnectTimer), t.reconnectTimer = setTimeout((function() {
                                                t.chatws.reconnect(), t.bindMessage(), t.submitHandler()
                                            }), t.retryDuration);
                                        case 30:
                                        case "end":
                                            return o.stop()
                                    }
                                }), o, null, [
                                    [8, 18]
                                ])
                            })))()
                        },
                        getDialogs: function() {
                            for (var t = [], o = null, i = this.messages.length - 3; i > 0 && !(t.length >= 6); i--) o !== i ? !this.messages[i].error || this.messages[i].rawContent ? t.unshift({
                                role: this.messages[i].isQuestion ? "user" : "assistant",
                                content: this.messages[i].rawContent
                            }) : o = i - 1 : o = null;
                            return t
                        },
                        autoScrollBottom: function() {
                            var t = this;
                            this.$nextTick((function() {
                                t.$refs.box.scrollTop = t.$refs.box.scrollHeight
                            }))
                        },
                        onInput: function(text) {
                            this.question = text
                        },
                        onInputKeyDown: function(t) {
                            (function(t) {
                                return "Enter" === t.key && (("Enter" !== t.key || !t.isComposing) && t.ctrlKey)
                            })(t) && (this.submitBtn(), t.preventDefault())
                        }
                    }
                },
                _ = (e(1209), e(1211), e(12)),
                component = Object(_.a)(f, (function() {
                    var t = this,
                        o = t._self._c;
                    return o("div", {
                        class: {
                            html: !0, "set-mobile": t.setMobile
                        }
                    }, [o("div", {
                        staticClass: "body light"
                    }, [o("div", {
                        staticClass: "home_container__Myqoy",
                        style: {
                            height: t.showCopyright ? "calc(100% - 31px)" : "100%"
                        }
                    }, [o("div", {
                        staticClass: "home_sidebar__4L4yT"
                    }, [o("div", {
                        staticClass: "home_sidebar-header__b5asC"
                    }, [o("div", {
                        staticClass: "home_sidebar-title__d8_c_"
                    }, [t._v("chathub.dev")]), t._v(" "), o("div", {
                        staticClass: "home_sidebar-sub-title__IS2Or"
                    }, [t._v("\n            " + t._s(t.$t("chathub.openai.webchat.subtitle")) + "\n          ")]), t._v(" "), o("div", {
                        staticClass: "home_sidebar-logo__FFdBS"
                    }, [o("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            width: "43",
                            height: "44",
                            fill: "none"
                        }
                    }, [o("defs", [o("path", {
                        attrs: {
                            id: "chatgpt_svg__a",
                            d: "M0 0h43v43.58H0z"
                        }
                    })]), t._v(" "), o("g", [o("mask", {
                        attrs: {
                            id: "chatgpt_svg__b",
                            fill: "#fff"
                        }
                    }, [o("use", {
                        attrs: {
                            "xlink:href": "#chatgpt_svg__a"
                        }
                    })]), t._v(" "), o("g", {
                        attrs: {
                            mask: "url(#chatgpt_svg__b)"
                        }
                    }, [o("path", {
                        staticStyle: {
                            fill: "rgb(139, 202, 224)"
                        },
                        attrs: {
                            "fill-rule": "evenodd",
                            opacity: "0.27",
                            d: "M40.17 17.84c.36-1.11.55-2.27.55-3.43 0-1.93-.51-3.83-1.49-5.49a10.98 10.98 0 0 0-9.52-5.51c-.77 0-1.55.08-2.3.24A10.868 10.868 0 0 0 19.29 0h-.1c-4.76 0-8.98 3.07-10.45 7.6-3.06.63-5.71 2.55-7.26 5.27a10.993 10.993 0 0 0 1.35 12.87c-.36 1.11-.55 2.27-.55 3.43 0 1.93.51 3.83 1.49 5.49a10.97 10.97 0 0 0 11.82 5.27c2.06 2.32 5.02 3.65 8.12 3.65h.1c4.76 0 8.99-3.07 10.45-7.61a10.82 10.82 0 0 0 7.26-5.26 10.995 10.995 0 0 0-1.35-12.87ZM18.817 38.695c-.09.05-.17.1-.26.15a8.145 8.145 0 0 0 5.22 1.89h.01c4.5-.01 8.15-3.67 8.16-8.17v-10.13a.153.153 0 0 0-.07-.1l-3.67-2.12v12.24c0 .51-.27.98-.72 1.23l-8.67 5.01Zm-1.424-2.472 8.77-5.06c.04-.03.06-.07.06-.11h-.01v-4.24l-10.59 6.12c-.44.25-.98.25-1.42 0l-8.68-5.01c-.08-.05-.2-.12-.26-.16a8.19 8.19 0 0 0 .97 5.47 8.18 8.18 0 0 0 7.08 4.08c1.43 0 2.84-.37 4.08-1.09Zm-9.187-25.21v-.3c-1.79.66-3.3 1.93-4.25 3.58a8.226 8.226 0 0 0-1.09 4.08c0 2.92 1.55 5.61 4.08 7.07l8.77 5.07c.04.02.09.02.12-.01l3.67-2.12-10.59-6.11c-.44-.25-.71-.72-.71-1.23v-10.03Zm27.849 7.117-8.77-5.07a.126.126 0 0 0-.12.01l-3.67 2.12 10.59 6.12c.44.25.71.71.71 1.22v10.33a8.168 8.168 0 0 0 5.35-7.66 8.16 8.16 0 0 0-4.09-7.07Zm-19.22-5.718a.16.16 0 0 0-.05.11v4.24l10.59-6.12c.22-.12.47-.19.72-.19s.49.07.71.19l8.68 5.02c.08.05.17.1.25.15.08-.46.12-.92.12-1.38 0-4.51-3.66-8.17-8.17-8.17-1.43 0-2.83.38-4.08 1.09l-8.77 5.06ZM19.22 2.85c-4.51 0-8.17 3.65-8.17 8.16v10.13c.01.05.03.08.07.1l3.67 2.12.01-12.23v-.01c0-.5.27-.97.71-1.22l8.68-5.01c.07-.05.19-.11.25-.15a8.145 8.145 0 0 0-5.22-1.89ZM16.783 24.51l4.72 2.73 4.72-2.73v-5.45l-4.72-2.72-4.72 2.73v5.44Z"
                        }
                    })])])])])]), t._v(" "), o("div", {
                        staticClass: "home_sidebar-body__zSPJN"
                    }), t._v(" "), o("div", {
                        staticClass: "home_sidebar-drag__hOnXd"
                    }), t._v(" "), o("img", {
                        staticClass: "chat-logo",
                        attrs: {
                            src: e(1208)
                        }
                    })]), t._v(" "), o("div", {
                        staticClass: "home_window-content__RRVow"
                    }, [o("div", {
                        staticClass: "home_chat__7Bh_I"
                    }, [o("div", {
                        staticClass: "home_window-header__248BE"
                    }, [o("div", {
                        staticClass: "home_window-header-title__bJCkO clearfix"
                    }, [o("div", {
                        staticClass: "home_window-header-main-title__Y16Es home_chat-body-title__5S8w4 fl"
                    }, [t._v("\n                " + t._s(t.title) + "\n              ")]), t._v(" "), o("span", {
                        staticClass: "fr",
                        staticStyle: {
                            cursor: "pointer"
                        },
                        attrs: {
                            title: "清空会话"
                        },
                        on: {
                            click: t.clearBtn
                        }
                    }, [o("svg", {
                        staticClass: "icon",
                        attrs: {
                            t: "1682651327393",
                            viewBox: "0 0 1024 1024",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "p-id": "2667",
                            width: "20",
                            height: "20"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M274.688 811.52c-8.32 10.688-20.48 24-36.48 39.936a44.736 44.736 0 0 1-43.136 11.52l-78.08-20.864-23.104-8.704c-29.632-25.536-44.608-61.44-39.36-95.552 5.76-37.12 32.32-67.648 82.112-88.704 34.368-14.656 67.584-74.176 89.664-157.44l3.84-14.464-2.24-4.032-14.272-4.48c-17.856-5.504-30.08-16.96-34.432-31.808-4.352-14.912-0.064-30.72 12.096-43.904l123.776-135.488c9.92-10.752 24.832-19.392 41.856-23.936 16.64-4.416 33.984-4.672 48.64-0.768l123.584 33.024 4.096-2.368 55.36-205.824c8.704-32.448 43.968-51.456 78.72-42.24l83.2 22.272c34.752 9.28 55.808 43.392 47.104 75.84l-55.36 205.824 2.368 4.096 118.528 31.68c14.592 3.84 29.568 12.8 41.728 24.96 12.416 12.352 21.12 27.2 24.192 41.472l39.36 179.072c3.84 17.536-0.384 33.28-11.648 44.032a43.776 43.776 0 0 1-25.92 11.712l-12.928 1.408-2.944 3.072-1.024 12.864c-2.56 34.048-6.4 62.976-17.92 139.52l-6.528 43.648c-3.84 26.048-6.528 46.976-8.768 66.304-4.224 36.544-23.488 65.28-54.656 81.6-15.424 8.128-32 12.672-45.824 13.44l-4.032 0.192-90.432-24.32a18.88 18.88 0 0 1-12.16-26.688l35.392-71.552-20.352 26.24a515.328 515.328 0 0 1-47.36 50.56 19.008 19.008 0 0 1-18.112 4.672l-75.456-20.16a18.88 18.88 0 0 1-12.16-26.624l35.456-71.552-20.352 26.24a510.336 510.336 0 0 1-47.36 50.56 18.944 18.944 0 0 1-18.112 4.672l-88.448-23.68a18.944 18.944 0 0 1-12.096-26.56l35.392-71.552-20.352 26.24a515.84 515.84 0 0 1-47.36 50.56 18.944 18.944 0 0 1-18.112 4.672l-62.528-16.704a18.944 18.944 0 0 1-12.096-26.688l35.392-71.488-20.352 26.24z m577.024-413.824l-142.784-38.208a22.272 22.272 0 0 1-15.808-27.264l61.056-227.072a22.272 22.272 0 0 0-15.808-27.264L657.728 56.32a22.4 22.4 0 0 0-27.328 15.744l-60.992 227.136a22.336 22.336 0 0 1-27.392 15.744l-147.84-39.552c-14.848-3.968-37.248 1.728-46.464 11.84l-113.92 124.544a11.072 11.072 0 0 0 5.376 18.24l669.184 178.816a11.136 11.136 0 0 0 13.824-13.12l-36.16-164.608-34.304-33.408zM317.44 709.76a22.4 22.4 0 0 1 27.328-6.848l3.392 1.6h0.128a21.888 21.888 0 0 1 10.432 29.248c-15.616 32.896-27.136 56.32-34.432 70.4-3.584 6.912-7.232 13.696-10.88 20.48l-11.648 21.12 34.176 9.152 2.944-0.64 6.208-4.928c29.504-23.68 61.888-59.136 97.088-106.176a22.4 22.4 0 0 1 27.264-6.848l3.52 1.6 0.128 0.064c10.944 5.12 15.616 18.24 10.432 29.12-15.616 32.896-27.136 56.32-34.432 70.4-3.904 7.552-7.552 14.336-10.88 20.48l-11.712 21.12 54.592 14.592 2.944-0.64 6.208-4.928c29.44-23.68 61.76-58.88 96.896-105.92 6.4-8.512 17.984-11.328 27.584-6.72l3.2 1.536a22.208 22.208 0 0 1 10.432 29.504c-15.36 32.384-26.752 55.68-34.112 69.76a854.4 854.4 0 0 1-10.88 20.48l-11.712 21.12 55.04 14.72 2.944-0.64 6.208-4.928c29.44-23.68 61.76-58.944 96.96-105.984 6.4-8.512 17.92-11.328 27.52-6.784l3.2 1.536h0.064a22.016 22.016 0 0 1 10.432 29.44c-21.44 44.608-36.48 74.752-45.12 90.304l-11.712 21.248 63.104 16.832 5.248-0.768c8.064-1.664 15.552-4.48 22.4-8.448 17.024-9.792 26.432-24.96 28.928-46.336 1.856-16.128 31.552-223.616 33.6-255.552l0.832-12.736-2.432-3.456-592.512-158.272-4.096 2.368-4.096 14.976a572.608 572.608 0 0 1-27.584 80c-24.192 55.04-53.568 90.112-86.784 104.192-32.64 13.824-52.224 32.64-55.68 54.848-2.56 16.256 4.096 33.92 17.792 48.64l3.072 3.328 92.16 25.152 3.008-0.64 6.144-4.928 97.152-106.24z",
                            fill: "#2d3949",
                            "p-id": "2668"
                        }
                    })])])])]), t._v(" "), o("div", {
                        ref: "box",
                        staticClass: "home_chat-body__mbaM8"
                    }, t._l(t.messages, (function(r, i) {
                        return o("div", {
                            key: i,
                            class: [r.isQuestion ? "home_chat-message-user__WsuiB" : "home_chat-message__rdH_g"]
                        }, [o("div", {
                            staticClass: "home_chat-message-container__plj_e"
                        }, [o("div", {
                            staticClass: "home_chat-message-avatar__611lI",
                            staticStyle: {
                                display: "none"
                            }
                        }, [r.isQuestion ? o("div", {
                            staticClass: "no-dark"
                        }, [o("svg", {
                            staticClass: "home_user-avtar__3QksJ",
                            attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                width: "30",
                                height: "30",
                                fill: "none"
                            }
                        }, [o("defs", [o("path", {
                            attrs: {
                                id: "bot_svg__a",
                                d: "M0 0h30v30H0z"
                            }
                        }), t._v(" "), o("path", {
                            attrs: {
                                id: "bot_svg__c",
                                d: "M0 0h20.455v20.455H0z"
                            }
                        })]), t._v(" "), o("g", [o("rect", {
                            attrs: {
                                fill: "#E7F8FF",
                                width: "30",
                                height: "30",
                                rx: "10"
                            }
                        }), t._v(" "), o("mask", {
                            attrs: {
                                id: "bot_svg__b",
                                fill: "#fff"
                            }
                        }, [o("use", {
                            attrs: {
                                "xlink:href": "#bot_svg__a"
                            }
                        })]), t._v(" "), o("g", {
                            attrs: {
                                mask: "url(#bot_svg__b)"
                            }
                        }, [o("g", {
                            attrs: {
                                transform: "translate(4.773 4.773)"
                            }
                        }, [o("mask", {
                            attrs: {
                                id: "bot_svg__d",
                                fill: "#fff"
                            }
                        }, [o("use", {
                            attrs: {
                                "xlink:href": "#bot_svg__c"
                            }
                        })]), t._v(" "), o("g", {
                            attrs: {
                                mask: "url(#bot_svg__d)"
                            }
                        }, [o("path", {
                            staticStyle: {
                                fill: "rgb(31, 148, 140)"
                            },
                            attrs: {
                                "fill-rule": "evenodd",
                                d: "M19.11 8.37c.17-.52.26-1.06.26-1.61 0-.9-.24-1.79-.71-2.57a5.24 5.24 0 0 0-4.53-2.59c-.37 0-.73.04-1.09.11A5.201 5.201 0 0 0 9.17 0h-.04C6.86 0 4.86 1.44 4.16 3.57A5.11 5.11 0 0 0 .71 6.04C.24 6.83 0 7.72 0 8.63c0 1.27.48 2.51 1.35 3.45-.18.52-.27 1.07-.27 1.61 0 .91.25 1.8.71 2.58 1.13 1.94 3.41 2.94 5.63 2.47a5.18 5.18 0 0 0 3.86 1.71h.05c2.26 0 4.27-1.44 4.97-3.57a5.132 5.132 0 0 0 3.45-2.47c.46-.78.7-1.67.7-2.58 0-1.28-.48-2.51-1.34-3.46ZM8.947 18.158c-.04.03-.08.05-.12.07.7.58 1.57.89 2.48.89h.01c2.14 0 3.88-1.72 3.88-3.83v-4.76c0-.02-.02-.04-.04-.05l-1.74-.99v5.75c0 .23-.13.45-.34.57l-4.13 2.35Zm-.67-1.153 4.17-2.38c.02-.01.03-.03.03-.05v-1.99l-5.04 2.87c-.21.12-.47.12-.68 0l-4.13-2.35c-.04-.02-.09-.06-.12-.07-.04.21-.06.43-.06.65 0 .67.18 1.33.52 1.92v-.01c.7 1.19 1.98 1.92 3.37 1.92.68 0 1.35-.18 1.94-.51ZM3.903 5.168v-.14c-.85.31-1.57.9-2.02 1.68a3.78 3.78 0 0 0-.52 1.91c0 1.37.74 2.64 1.94 3.33l4.17 2.37c.02.01.04.01.06 0l1.75-1-5.04-2.87a.64.64 0 0 1-.34-.57v-4.71Zm13.253 3.337-4.18-2.38c-.02 0-.04 0-.06.01l-1.74.99 5.04 2.87c.21.12.34.34.34.58v4.85c1.52-.56 2.54-1.99 2.54-3.6 0-1.37-.74-2.63-1.94-3.32ZM8.014 5.83c-.02.01-.03.03-.03.05v1.99L13.024 5a.692.692 0 0 1 .68 0l4.13 2.35c.04.02.08.05.12.07.03-.21.05-.43.05-.65 0-2.11-1.74-3.83-3.88-3.83-.68 0-1.35.18-1.94.51l-4.17 2.38Zm1.133-4.492c-2.15 0-3.89 1.72-3.89 3.83v4.76c0 .02.02.03.03.04l1.75 1v-5.75c0-.23.13-.45.34-.57l4.13-2.35c.04-.03.09-.06.12-.07-.7-.58-1.58-.89-2.48-.89ZM7.983 11.51l2.24 1.27 2.25-1.27V8.95l-2.25-1.28-2.24 1.28v2.56Z"
                            }
                        })])])])])])]) : o("img", {
                            staticStyle: {
                                display: "inline-block",
                                width: "30px",
                                height: "30px",
                                "border-radius": "6px"
                            },
                            attrs: {
                                src: e(317),
                                alt: ""
                            }
                        })]), t._v(" "), i === t.messages.length - 1 && t.waiting && r.content ? o("div", {
                            staticClass: "home_chat-message-status__EsVNi"
                        }, [t._v("\n                  " + t._s(t.$t("chathub.openai.webchat.typing")) + "\n                ")]) : t._e(), t._v(" "), o("div", {
                            staticClass: "home_chat-message-item__hDEOq"
                        }, [r.error ? o("span", {
                            staticStyle: {
                                color: "#c03639"
                            }
                        }, [o("i", {
                            staticClass: "el-icon-warning"
                        }), t._v("\n                    " + t._s(r.error))]) : r.content ? t._e() : o("i", {
                            staticClass: "el-icon-loading"
                        }), t._v(" "), o("span", {
                            staticClass: "markdown-body",
                            staticStyle: {
                                "font-size": "13px"
                            },
                            domProps: {
                                innerHTML: t._s(r.content)
                            }
                        })])])])
                    })), 0), t._v(" "), o("div", {
                        staticClass: "home_chat-input-panel__kmhBn"
                    }, [t.tips.length ? o("div", {
                        staticClass: "tab-list"
                    }, t._l(t.tips, (function(e, r) {
                        return o("div", {
                            key: r,
                            staticClass: "item",
                            on: {
                                click: function(o) {
                                    return t.clickTag(e)
                                }
                            }
                        }, [t._v("\n                " + t._s(e) + "\n              ")])
                    })), 0) : t._e(), t._v(" "), o("div", {
                        staticClass: "home_chat-input-panel-inner__8J59p"
                    }, [o("el-input", {
                        attrs: {
                            disabled: t.disabled,
                            autosize: {
                                minRows: 1,
                                maxRows: 6
                            },
                            type: "textarea",
                            placeholder: t.$t("chathub.openai.webchat.submit")
                        },
                        nativeOn: {
                            keydown: function(o) {
                                return t.onInputKeyDown.apply(null, arguments)
                            }
                        },
                        model: {
                            value: t.question,
                            callback: function(o) {
                                t.question = o
                            },
                            expression: "question"
                        }
                    }), o("button", {
                        staticClass: "button_icon-button__BC_Ca undefined undefined home_chat-input-send__rsJfH clickable",
                        attrs: {
                            disabled: t.waiting,
                            role: "button"
                        },
                        on: {
                            click: t.submitBtn
                        }
                    }, [t._m(0), t._v(" "), o("div", {
                        staticClass: "button_icon-button-text__k3vob"
                    }, [t._v("\n                  " + t._s(t.$t("chathub.openai.webchat.send"))), t.waiting ? o("span", [t._v("...")]) : t._e()])])], 1)])])])]), t._v(" "), t.showCopyright ? o("div", {
                        staticStyle: {
                            height: "31px",
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center",
                            "font-size": "14px",
                            color: "rgb(100, 116, 139)",
                            "background-color": "#f9f9f9"
                        }
                    }, [t._m(1)]) : t._e()])])
                }), [function() {
                    var t = this._self._c;
                    return t("div", {
                        staticClass: "button_icon-button-icon__qlUH3 no-dark"
                    }, [t("i", {
                        staticClass: "iconfont icon-fasong"
                    })])
                }, function() {
                    var t = this,
                        o = t._self._c;
                    return o("a", {
                        attrs: {
                            href: "https://www.chathub.dev/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [t._v("Powered by "), o("b", {
                        staticStyle: {
                            color: "#333",
                            "text-decoration": "underline"
                        }
                    }, [t._v("chathub.dev")])])
                }], !1, null, "660e3848", null);
            o.a = component.exports
        },
        1153: function(t, o, e) {
            var content = e(1210);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, e(25).default)("5935d835", content, !0, {
                sourceMap: !1
            })
        },
        1154: function(t, o, e) {
            var content = e(1212);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, e(25).default)("c894d4fe", content, !0, {
                sourceMap: !1
            })
        },
        1208: function(t, o, e) {
            t.exports = e.p + "img/chat-logo.35b579b.png"
        },
        1209: function(t, o, e) {
            "use strict";
            e(1153)
        },
        1210: function(t, o, e) {
            var r = e(24)((function(i) {
                return i[1]
            }));
            r.push([t.i, '.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}.fl{float:left}.fr{float:right}.light{--theme:light;--white:#fff;--black:#303030;--gray:#fafafa;--primary:var(--color-primary);--second:#aec9ff;--hover-color:#f3f3f3;--bar-color:rgba(0,0,0,.1);--theme-color:var(--gray);--shadow:50px 50px 100px 10px rgba(0,0,0,.1);--card-shadow:0px 2px 4px 0px rgba(0,0,0,.05);--border-in-light:1px solid #dedede}.dark{--theme:dark;--white:#1e1e1e;--black:#bbb;--gray:#151515;--primary:#1d93ab;--second:#1b262a;--hover-color:#323232;--bar-color:hsla(0,0%,100%,.1);--border-in-light:1px solid hsla(0,0%,100%,.192);--theme-color:var(--gray)}.dark div:not(.no-dark)>svg{filter:invert(.5)}.mask{filter:invert(.8)}.html{--theme:light;--white:#fff;--black:#303030;--gray:#fafafa;--primary:#1d93ab;--second:#aec9ff;--hover-color:#f3f3f3;--bar-color:rgba(0,0,0,.1);--theme-color:var(--gray);--shadow:50px 50px 100px 10px rgba(0,0,0,.1);--card-shadow:0px 2px 4px 0px rgba(0,0,0,.05);--border-in-light:1px solid #dedede;--window-width:90vw;--window-height:90vh;--sidebar-width:260px;--window-content-width:calc(100% - var(--sidebar-width));--message-max-width:80%;--full-height:100%}.set-mobile.html{--window-width:100vw;--window-height:var(--full-height);--sidebar-width:100vw;--window-content-width:var(--window-width);--message-max-width:100%}@media only screen and (max-width:600px){.html{--window-width:100vw;--window-height:var(--full-height);--sidebar-width:100vw;--window-content-width:var(--window-width);--message-max-width:100%}.no-mobile{display:none}}@media(prefers-color-scheme:dark){.html{--theme:dark;--white:#1e1e1e;--black:#bbb;--gray:#151515;--primary:#1d93ab;--second:#1b262a;--hover-color:#323232;--bar-color:hsla(0,0%,100%,.1);--border-in-light:1px solid hsla(0,0%,100%,.192);--theme-color:var(--gray)}.html div:not(.no-dark)>svg{filter:invert(.5)}}.body,.html{height:var(--full-height)}.body{background-color:var(--gray);color:var(--black);font-family:"Noto Sans SC","SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;margin:0;padding:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}@media only screen and (max-width:600px){.body{background-color:var(--second)}}.html ::-webkit-scrollbar{--bar-width:5px;height:5px;height:var(--bar-width);width:5px;width:var(--bar-width)}.html ::-webkit-scrollbar-track{background-color:transparent}.html ::-webkit-scrollbar-thumb{background-clip:content-box;background-color:var(--bar-color);border:1px solid transparent;border-radius:20px}.html select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--white);border:var(--border-in-light);border-radius:10px;color:var(--black);padding:10px;text-align:center}.html label,.html select{cursor:pointer}.html input{text-align:center}.html input[type=checkbox]{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--white);border:var(--border-in-light);border-radius:5px;color:var(--black);cursor:pointer;display:inline-flex;height:16px;justify-content:center;width:16px}.html input[type=checkbox]:checked:after{background-color:var(--primary);border-radius:2px;content:" ";display:inline-block;height:8px;width:8px}.html input[type=range]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--white);color:var(--black)}.html input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background-color:var(--primary);border:none;border-radius:10px;cursor:pointer;height:8px;margin-left:5px;-webkit-transition:all .3s ease;transition:all .3s ease;width:20px}.html input[type=range]::-moz-range-thumb{-moz-appearance:none;appearance:none;background-color:var(--primary);border:none;border-radius:10px;cursor:pointer;height:8px;margin-left:5px;-moz-transition:all .3s ease;transition:all .3s ease;width:20px}.html input[type=range]::-ms-thumb{appearance:none;background-color:var(--primary);border:none;border-radius:10px;cursor:pointer;height:8px;margin-left:5px;-ms-transition:all .3s ease;transition:all .3s ease;width:20px}.html input[type=range]::-webkit-slider-thumb:hover{transform:scaleY(1.2);width:24px}.html input[type=range]::-moz-range-thumb:hover{transform:scaleY(1.2);width:24px}.html input[type=range]::-ms-thumb:hover{transform:scaleY(1.2);width:24px}.html input[type=number],.html input[type=password],.html input[type=text]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--white);border:var(--border-in-light);border-radius:10px;box-sizing:border-box;color:var(--black);max-width:50%;min-height:36px;padding:0 10px}.html div.math{overflow-x:auto}.html .modal-mask{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:var(--full-height);justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:9999}.html .link{color:var(--primary);font-size:12px;-webkit-text-decoration:none;text-decoration:none}.html .link:hover{-webkit-text-decoration:underline;text-decoration:underline}.html pre{position:relative}.html pre:hover .copy-code-button{opacity:.5;pointer-events:all;transform:translateX(0)}.html pre .copy-code-button{background-color:var(--black);border:var(--border-in-light);border-radius:10px;color:var(--white);cursor:pointer;opacity:0;padding:0 5px;pointer-events:none;position:absolute;right:10px;top:1em;transform:translateX(10px);transition:all .3s ease}.html pre .copy-code-button:after{content:"copy"}.html pre .copy-code-button:hover{opacity:1}.html .clickable{cursor:pointer}.html .clickable:hover{filter:brightness(.9)}.html .error{background-color:var(--white);border:var(--border-in-light);border-radius:20px;box-shadow:var(--card-shadow);color:var(--black);padding:20px;width:80%}.html .error,.html .error pre{overflow:auto}/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\\\n  !*** css ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[14].use[3]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[14].use[4]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[14].use[5]!./app/styles/markdown.scss ***!\n  \\********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/.markdown-body{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;word-wrap:break-word;background-color:var(--color-canvas-default);color:var(--color-fg-default);font-size:14px;line-height:1.5;margin:0}.light{--color-prettylights-syntax-comment:#6e7781;--color-prettylights-syntax-constant:#0550ae;--color-prettylights-syntax-entity:#8250df;--color-prettylights-syntax-storage-modifier-import:#24292f;--color-prettylights-syntax-entity-tag:#116329;--color-prettylights-syntax-keyword:#cf222e;--color-prettylights-syntax-string:#0a3069;--color-prettylights-syntax-variable:#953800;--color-prettylights-syntax-brackethighlighter-unmatched:#82071e;--color-prettylights-syntax-invalid-illegal-text:#f6f8fa;--color-prettylights-syntax-invalid-illegal-bg:#82071e;--color-prettylights-syntax-carriage-return-text:#f6f8fa;--color-prettylights-syntax-carriage-return-bg:#cf222e;--color-prettylights-syntax-string-regexp:#116329;--color-prettylights-syntax-markup-list:#3b2300;--color-prettylights-syntax-markup-heading:#0550ae;--color-prettylights-syntax-markup-italic:#24292f;--color-prettylights-syntax-markup-bold:#24292f;--color-prettylights-syntax-markup-deleted-text:#82071e;--color-prettylights-syntax-markup-deleted-bg:#ffebe9;--color-prettylights-syntax-markup-inserted-text:#116329;--color-prettylights-syntax-markup-inserted-bg:#dafbe1;--color-prettylights-syntax-markup-changed-text:#953800;--color-prettylights-syntax-markup-changed-bg:#ffd8b5;--color-prettylights-syntax-markup-ignored-text:#eaeef2;--color-prettylights-syntax-markup-ignored-bg:#0550ae;--color-prettylights-syntax-meta-diff-range:#8250df;--color-prettylights-syntax-brackethighlighter-angle:#57606a;--color-prettylights-syntax-sublimelinter-gutter-mark:#8c959f;--color-prettylights-syntax-constant-other-reference-link:#0a3069;--color-fg-default:#333;--color-fg-muted:#57606a;--color-fg-subtle:#6e7781;--color-canvas-default:transparent;--color-canvas-subtle:#f6f8fa;--color-border-default:#d0d7de;--color-border-muted:#d8dee4;--color-neutral-muted:rgba(175,184,193,.2);--color-accent-fg:#0969da;--color-accent-emphasis:#0969da;--color-attention-subtle:#fff8c5;--color-danger-fg:#cf222e;color-scheme:light}.dark{--color-prettylights-syntax-comment:#8b949e;--color-prettylights-syntax-constant:#79c0ff;--color-prettylights-syntax-entity:#d2a8ff;--color-prettylights-syntax-storage-modifier-import:#c9d1d9;--color-prettylights-syntax-entity-tag:#7ee787;--color-prettylights-syntax-keyword:#ff7b72;--color-prettylights-syntax-string:#a5d6ff;--color-prettylights-syntax-variable:#ffa657;--color-prettylights-syntax-brackethighlighter-unmatched:#f85149;--color-prettylights-syntax-invalid-illegal-text:#f0f6fc;--color-prettylights-syntax-invalid-illegal-bg:#8e1519;--color-prettylights-syntax-carriage-return-text:#f0f6fc;--color-prettylights-syntax-carriage-return-bg:#b62324;--color-prettylights-syntax-string-regexp:#7ee787;--color-prettylights-syntax-markup-list:#f2cc60;--color-prettylights-syntax-markup-heading:#1f6feb;--color-prettylights-syntax-markup-italic:#c9d1d9;--color-prettylights-syntax-markup-bold:#c9d1d9;--color-prettylights-syntax-markup-deleted-text:#ffdcd7;--color-prettylights-syntax-markup-deleted-bg:#67060c;--color-prettylights-syntax-markup-inserted-text:#aff5b4;--color-prettylights-syntax-markup-inserted-bg:#033a16;--color-prettylights-syntax-markup-changed-text:#ffdfb6;--color-prettylights-syntax-markup-changed-bg:#5a1e02;--color-prettylights-syntax-markup-ignored-text:#c9d1d9;--color-prettylights-syntax-markup-ignored-bg:#1158c7;--color-prettylights-syntax-meta-diff-range:#d2a8ff;--color-prettylights-syntax-brackethighlighter-angle:#8b949e;--color-prettylights-syntax-sublimelinter-gutter-mark:#484f58;--color-prettylights-syntax-constant-other-reference-link:#a5d6ff;--color-fg-default:#c9d1d9;--color-fg-muted:#8b949e;--color-fg-subtle:#6e7681;--color-canvas-default:transparent;--color-canvas-subtle:#161b22;--color-border-default:#30363d;--color-border-muted:#21262d;--color-neutral-muted:hsla(215,8%,47%,.4);--color-accent-fg:#58a6ff;--color-accent-emphasis:#1f6feb;--color-attention-subtle:rgba(187,128,9,.15);--color-danger-fg:#f85149;color-scheme:dark}.html{--color-prettylights-syntax-comment:#6e7781;--color-prettylights-syntax-constant:#0550ae;--color-prettylights-syntax-entity:#8250df;--color-prettylights-syntax-storage-modifier-import:#24292f;--color-prettylights-syntax-entity-tag:#116329;--color-prettylights-syntax-keyword:#cf222e;--color-prettylights-syntax-string:#0a3069;--color-prettylights-syntax-variable:#953800;--color-prettylights-syntax-brackethighlighter-unmatched:#82071e;--color-prettylights-syntax-invalid-illegal-text:#f6f8fa;--color-prettylights-syntax-invalid-illegal-bg:#82071e;--color-prettylights-syntax-carriage-return-text:#f6f8fa;--color-prettylights-syntax-carriage-return-bg:#cf222e;--color-prettylights-syntax-string-regexp:#116329;--color-prettylights-syntax-markup-list:#3b2300;--color-prettylights-syntax-markup-heading:#0550ae;--color-prettylights-syntax-markup-italic:#24292f;--color-prettylights-syntax-markup-bold:#24292f;--color-prettylights-syntax-markup-deleted-text:#82071e;--color-prettylights-syntax-markup-deleted-bg:#ffebe9;--color-prettylights-syntax-markup-inserted-text:#116329;--color-prettylights-syntax-markup-inserted-bg:#dafbe1;--color-prettylights-syntax-markup-changed-text:#953800;--color-prettylights-syntax-markup-changed-bg:#ffd8b5;--color-prettylights-syntax-markup-ignored-text:#eaeef2;--color-prettylights-syntax-markup-ignored-bg:#0550ae;--color-prettylights-syntax-meta-diff-range:#8250df;--color-prettylights-syntax-brackethighlighter-angle:#57606a;--color-prettylights-syntax-sublimelinter-gutter-mark:#8c959f;--color-prettylights-syntax-constant-other-reference-link:#0a3069;--color-fg-default:#24292f;--color-fg-muted:#57606a;--color-fg-subtle:#6e7781;--color-canvas-default:transparent;--color-canvas-subtle:#f6f8fa;--color-border-default:#d0d7de;--color-border-muted:#d8dee4;--color-neutral-muted:rgba(175,184,193,.2);--color-accent-fg:#0969da;--color-accent-emphasis:#0969da;--color-attention-subtle:#fff8c5;--color-danger-fg:#cf222e;color-scheme:light}@media(prefers-color-scheme:dark){.html{--color-prettylights-syntax-comment:#8b949e;--color-prettylights-syntax-constant:#79c0ff;--color-prettylights-syntax-entity:#d2a8ff;--color-prettylights-syntax-storage-modifier-import:#c9d1d9;--color-prettylights-syntax-entity-tag:#7ee787;--color-prettylights-syntax-keyword:#ff7b72;--color-prettylights-syntax-string:#a5d6ff;--color-prettylights-syntax-variable:#ffa657;--color-prettylights-syntax-brackethighlighter-unmatched:#f85149;--color-prettylights-syntax-invalid-illegal-text:#f0f6fc;--color-prettylights-syntax-invalid-illegal-bg:#8e1519;--color-prettylights-syntax-carriage-return-text:#f0f6fc;--color-prettylights-syntax-carriage-return-bg:#b62324;--color-prettylights-syntax-string-regexp:#7ee787;--color-prettylights-syntax-markup-list:#f2cc60;--color-prettylights-syntax-markup-heading:#1f6feb;--color-prettylights-syntax-markup-italic:#c9d1d9;--color-prettylights-syntax-markup-bold:#c9d1d9;--color-prettylights-syntax-markup-deleted-text:#ffdcd7;--color-prettylights-syntax-markup-deleted-bg:#67060c;--color-prettylights-syntax-markup-inserted-text:#aff5b4;--color-prettylights-syntax-markup-inserted-bg:#033a16;--color-prettylights-syntax-markup-changed-text:#ffdfb6;--color-prettylights-syntax-markup-changed-bg:#5a1e02;--color-prettylights-syntax-markup-ignored-text:#c9d1d9;--color-prettylights-syntax-markup-ignored-bg:#1158c7;--color-prettylights-syntax-meta-diff-range:#d2a8ff;--color-prettylights-syntax-brackethighlighter-angle:#8b949e;--color-prettylights-syntax-sublimelinter-gutter-mark:#484f58;--color-prettylights-syntax-constant-other-reference-link:#a5d6ff;--color-fg-default:#c9d1d9;--color-fg-muted:#8b949e;--color-fg-subtle:#6e7681;--color-canvas-default:transparent;--color-canvas-subtle:#161b22;--color-border-default:#30363d;--color-border-muted:#21262d;--color-neutral-muted:hsla(215,8%,47%,.4);--color-accent-fg:#58a6ff;--color-accent-emphasis:#1f6feb;--color-attention-subtle:rgba(187,128,9,.15);--color-danger-fg:#f85149;color-scheme:dark}}.markdown-body h1:hover .anchor .octicon-link:before,.markdown-body h2:hover .anchor .octicon-link:before,.markdown-body h3:hover .anchor .octicon-link:before,.markdown-body h4:hover .anchor .octicon-link:before,.markdown-body h5:hover .anchor .octicon-link:before,.markdown-body h6:hover .anchor .octicon-link:before{background-color:currentColor;content:" ";display:inline-block;height:16px;-webkit-mask-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0z"/></svg>\');mask-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 0 1 0-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83 0z"/></svg>\');width:16px}.markdown-body details,.markdown-body figcaption,.markdown-body figure{display:block}.markdown-body summary{display:list-item}.markdown-body [hidden]{display:none!important}.markdown-body a{background-color:transparent;color:var(--color-accent-fg);-webkit-text-decoration:none;text-decoration:none}.markdown-body abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline;text-decoration:underline dotted}.markdown-body b,.markdown-body strong{font-weight:600;font-weight:var(--base-text-weight-semibold,600)}.markdown-body dfn{font-style:italic}.markdown-body h1{border-bottom:1px solid var(--color-border-muted);font-size:2em;font-weight:600;font-weight:var(--base-text-weight-semibold,600);margin:.67em 0;padding-bottom:.3em}.markdown-body mark{background-color:var(--color-attention-subtle);color:var(--color-fg-default)}.markdown-body small{font-size:90%}.markdown-body sub,.markdown-body sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.markdown-body sub{bottom:-.25em}.markdown-body sup{top:-.5em}.markdown-body img{background-color:var(--color-canvas-default);border-style:none;box-sizing:content-box;max-width:100%}.markdown-body code,.markdown-body kbd,.markdown-body pre,.markdown-body samp{font-family:monospace;font-size:1em}.markdown-body figure{margin:1em 40px}.markdown-body hr{background:transparent;background-color:var(--color-border-default);border:0;box-sizing:content-box;height:.25em;margin:24px 0;overflow:hidden;padding:0}.markdown-body input{font:inherit;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible}.markdown-body [type=button],.markdown-body [type=reset],.markdown-body [type=submit]{-webkit-appearance:button}.markdown-body [type=checkbox],.markdown-body [type=radio]{box-sizing:border-box;padding:0}.markdown-body [type=number]::-webkit-inner-spin-button,.markdown-body [type=number]::-webkit-outer-spin-button{height:auto}.markdown-body [type=search]::-webkit-search-cancel-button,.markdown-body [type=search]::-webkit-search-decoration{-webkit-appearance:none}.markdown-body ::-webkit-input-placeholder{color:inherit;opacity:.54}.markdown-body ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.markdown-body a:hover{-webkit-text-decoration:underline;text-decoration:underline}.markdown-body ::-moz-placeholder{color:var(--color-fg-subtle);opacity:1}.markdown-body ::placeholder{color:var(--color-fg-subtle);opacity:1}.markdown-body hr:after,.markdown-body hr:before{content:"";display:table}.markdown-body hr:after{clear:both}.markdown-body table{border-collapse:collapse;border-spacing:0;display:block;max-width:100%;overflow:auto;width:-moz-max-content;width:max-content}.markdown-body td,.markdown-body th{padding:0}.markdown-body details summary{cursor:pointer}.markdown-body details:not([open])>:not(summary){display:none!important}.markdown-body [role=button]:focus,.markdown-body a:focus,.markdown-body input[type=checkbox]:focus,.markdown-body input[type=radio]:focus{box-shadow:none;outline:2px solid var(--color-accent-fg);outline-offset:-2px}.markdown-body [role=button]:focus:not(:focus-visible),.markdown-body a:focus:not(:focus-visible),.markdown-body input[type=checkbox]:focus:not(:focus-visible),.markdown-body input[type=radio]:focus:not(:focus-visible){outline:1px solid transparent}.markdown-body [role=button]:focus-visible,.markdown-body a:focus-visible,.markdown-body input[type=checkbox]:focus-visible,.markdown-body input[type=radio]:focus-visible{box-shadow:none;outline:2px solid var(--color-accent-fg);outline-offset:-2px}.markdown-body a:not([class]):focus,.markdown-body a:not([class]):focus-visible,.markdown-body input[type=checkbox]:focus,.markdown-body input[type=checkbox]:focus-visible,.markdown-body input[type=radio]:focus,.markdown-body input[type=radio]:focus-visible{outline-offset:0}.markdown-body kbd{background-color:var(--color-canvas-subtle);border-bottom-color:var(--color-neutral-muted);border:1px solid var(--color-neutral-muted);border-radius:6px;box-shadow:inset 0 -1px 0 var(--color-neutral-muted);color:var(--color-fg-default);display:inline-block;font:11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;line-height:10px;padding:3px 5px;vertical-align:middle}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{font-weight:600;font-weight:var(--base-text-weight-semibold,600);line-height:1.25;margin-bottom:16px;margin-top:24px}.markdown-body h2{border-bottom:1px solid var(--color-border-muted);font-size:1.5em;padding-bottom:.3em}.markdown-body h2,.markdown-body h3{font-weight:600;font-weight:var(--base-text-weight-semibold,600)}.markdown-body h3{font-size:1.25em}.markdown-body h4{font-size:1em}.markdown-body h4,.markdown-body h5{font-weight:600;font-weight:var(--base-text-weight-semibold,600)}.markdown-body h5{font-size:.875em}.markdown-body h6{color:var(--color-fg-muted);font-size:.85em;font-weight:600;font-weight:var(--base-text-weight-semibold,600)}.markdown-body p{margin-bottom:10px;margin-top:0}.markdown-body blockquote{border-left:.25em solid var(--color-border-default);color:var(--color-fg-muted);margin:0;padding:0 1em}.markdown-body ol,.markdown-body ul{margin-bottom:0;margin-top:0;padding-left:2em}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body code,.markdown-body pre,.markdown-body samp,.markdown-body tt{font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:12px}.markdown-body pre{word-wrap:normal;margin-bottom:0;margin-top:0}.markdown-body .octicon{fill:currentColor;display:inline-block;overflow:visible!important;vertical-align:text-bottom}.markdown-body input::-webkit-inner-spin-button,.markdown-body input::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}.markdown-body:after,.markdown-body:before{content:"";display:table}.markdown-body:after{clear:both}.markdown-body>:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.markdown-body a:not([href]){color:inherit;-webkit-text-decoration:none;text-decoration:none}.markdown-body .absent{color:var(--color-danger-fg)}.markdown-body .anchor{float:left;line-height:1;margin-left:-20px;padding-right:4px}.markdown-body .anchor:focus{outline:none}.markdown-body blockquote,.markdown-body details,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-bottom:16px;margin-top:0}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{color:var(--color-fg-default);vertical-align:middle;visibility:hidden}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{-webkit-text-decoration:none;text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{visibility:visible}.markdown-body h1 code,.markdown-body h1 tt,.markdown-body h2 code,.markdown-body h2 tt,.markdown-body h3 code,.markdown-body h3 tt,.markdown-body h4 code,.markdown-body h4 tt,.markdown-body h5 code,.markdown-body h5 tt,.markdown-body h6 code,.markdown-body h6 tt{font-size:inherit;padding:0 .2em}.markdown-body summary h1,.markdown-body summary h2,.markdown-body summary h3,.markdown-body summary h4,.markdown-body summary h5,.markdown-body summary h6{display:inline-block}.markdown-body summary h1 .anchor,.markdown-body summary h2 .anchor,.markdown-body summary h3 .anchor,.markdown-body summary h4 .anchor,.markdown-body summary h5 .anchor,.markdown-body summary h6 .anchor{margin-left:-40px}.markdown-body summary h1,.markdown-body summary h2{border-bottom:0;padding-bottom:0}.markdown-body ol.no-list,.markdown-body ul.no-list{list-style-type:none;padding:0}.markdown-body ol[type=a]{list-style-type:lower-alpha}.markdown-body ol[type=A]{list-style-type:upper-alpha}.markdown-body ol[type=i]{list-style-type:lower-roman}.markdown-body ol[type=I]{list-style-type:upper-roman}.markdown-body div>ol:not([type]),.markdown-body ol[type="1"]{list-style-type:decimal}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-bottom:0;margin-top:0}.markdown-body li>p{margin-top:16px}.markdown-body li+li{margin-top:.25em}.markdown-body dl{padding:0}.markdown-body dl dt{font-size:1em;font-style:italic;font-weight:600;font-weight:var(--base-text-weight-semibold,600);margin-top:16px;padding:0}.markdown-body dl dd{margin-bottom:16px;padding:0 16px}.markdown-body table th{font-weight:600;font-weight:var(--base-text-weight-semibold,600)}.markdown-body table td,.markdown-body table th{border:1px solid var(--color-border-default);padding:6px 13px}.markdown-body table tr{background-color:var(--color-canvas-default);border-top:1px solid var(--color-border-muted)}.markdown-body table tr:nth-child(2n){background-color:var(--color-canvas-subtle)}.markdown-body table img{background-color:transparent}.markdown-body img[align=right]{padding-left:20px}.markdown-body img[align=left]{padding-right:20px}.markdown-body .emoji{background-color:transparent;max-width:none;vertical-align:text-top}.markdown-body span.frame{display:block;overflow:hidden}.markdown-body span.frame>span{border:1px solid var(--color-border-default);display:block;float:left;margin:13px 0 0;overflow:hidden;padding:7px;width:auto}.markdown-body span.frame span img{display:block;float:left}.markdown-body span.frame span span{clear:both;color:var(--color-fg-default);display:block;padding:5px 0 0}.markdown-body span.align-center{clear:both;display:block;overflow:hidden}.markdown-body span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}.markdown-body span.align-center span img{margin:0 auto;text-align:center}.markdown-body span.align-right{clear:both;display:block;overflow:hidden}.markdown-body span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}.markdown-body span.align-right span img{margin:0;text-align:right}.markdown-body span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}.markdown-body span.float-left span{margin:13px 0 0}.markdown-body span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}.markdown-body span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}.markdown-body code,.markdown-body tt{background-color:var(--color-neutral-muted);border-radius:6px;font-size:85%;margin:0;padding:.2em .4em;white-space:break-spaces}.markdown-body code br,.markdown-body tt br{display:none}.markdown-body del code{text-decoration:inherit}.markdown-body samp{font-size:85%}.markdown-body pre code{font-size:100%}.markdown-body pre>code{background:transparent;border:0;margin:0;padding:0;white-space:pre;word-break:normal}.markdown-body .highlight{margin-bottom:16px}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body .highlight pre,.markdown-body pre{border-radius:6px;font-size:85%;line-height:1.45;overflow:auto;padding:16px 16px 8px}.markdown-body pre code,.markdown-body pre tt{word-wrap:normal;background-color:transparent;border:0;display:inline-block;line-height:inherit;margin:0;max-width:100%;overflow-x:scroll;padding:0}.markdown-body .csv-data td,.markdown-body .csv-data th{font-size:12px;line-height:1;overflow:hidden;padding:5px;text-align:left;white-space:nowrap}.markdown-body .csv-data .blob-num{background:var(--color-canvas-default);border:0;padding:10px 8px 9px;text-align:right}.markdown-body .csv-data tr{border-top:0}.markdown-body .csv-data th{background:var(--color-canvas-subtle);border-top:0;font-weight:600;font-weight:var(--base-text-weight-semibold,600)}.markdown-body [data-footnote-ref]:before{content:"["}.markdown-body [data-footnote-ref]:after{content:"]"}.markdown-body .footnotes{border-top:1px solid var(--color-border-default);color:var(--color-fg-muted);font-size:12px}.markdown-body .footnotes ol{padding-left:16px}.markdown-body .footnotes ol ul{display:inline-block;margin-top:16px;padding-left:16px}.markdown-body .footnotes li{position:relative}.markdown-body .footnotes li:target:before{border:2px solid var(--color-accent-emphasis);border-radius:6px;bottom:-8px;content:"";left:-24px;pointer-events:none;position:absolute;right:-8px;top:-8px}.markdown-body .footnotes li:target{color:var(--color-fg-default)}.markdown-body .footnotes .data-footnote-backref g-emoji{font-family:monospace}.markdown-body .pl-c{color:var(--color-prettylights-syntax-comment)}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:var(--color-prettylights-syntax-constant)}.markdown-body .pl-e,.markdown-body .pl-en{color:var(--color-prettylights-syntax-entity)}.markdown-body .pl-s .pl-s1,.markdown-body .pl-smi{color:var(--color-prettylights-syntax-storage-modifier-import)}.markdown-body .pl-ent{color:var(--color-prettylights-syntax-entity-tag)}.markdown-body .pl-k{color:var(--color-prettylights-syntax-keyword)}.markdown-body .pl-pds,.markdown-body .pl-s,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sra,.markdown-body .pl-sr .pl-sre{color:var(--color-prettylights-syntax-string)}.markdown-body .pl-smw,.markdown-body .pl-v{color:var(--color-prettylights-syntax-variable)}.markdown-body .pl-bu{color:var(--color-prettylights-syntax-brackethighlighter-unmatched)}.markdown-body .pl-ii{background-color:var(--color-prettylights-syntax-invalid-illegal-bg);color:var(--color-prettylights-syntax-invalid-illegal-text)}.markdown-body .pl-c2{background-color:var(--color-prettylights-syntax-carriage-return-bg);color:var(--color-prettylights-syntax-carriage-return-text)}.markdown-body .pl-sr .pl-cce{color:var(--color-prettylights-syntax-string-regexp);font-weight:700}.markdown-body .pl-ml{color:var(--color-prettylights-syntax-markup-list)}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{color:var(--color-prettylights-syntax-markup-heading);font-weight:700}.markdown-body .pl-mi{color:var(--color-prettylights-syntax-markup-italic);font-style:italic}.markdown-body .pl-mb{color:var(--color-prettylights-syntax-markup-bold);font-weight:700}.markdown-body .pl-md{background-color:var(--color-prettylights-syntax-markup-deleted-bg);color:var(--color-prettylights-syntax-markup-deleted-text)}.markdown-body .pl-mi1{background-color:var(--color-prettylights-syntax-markup-inserted-bg);color:var(--color-prettylights-syntax-markup-inserted-text)}.markdown-body .pl-mc{background-color:var(--color-prettylights-syntax-markup-changed-bg);color:var(--color-prettylights-syntax-markup-changed-text)}.markdown-body .pl-mi2{background-color:var(--color-prettylights-syntax-markup-ignored-bg);color:var(--color-prettylights-syntax-markup-ignored-text)}.markdown-body .pl-mdr{color:var(--color-prettylights-syntax-meta-diff-range);font-weight:700}.markdown-body .pl-ba{color:var(--color-prettylights-syntax-brackethighlighter-angle)}.markdown-body .pl-sg{color:var(--color-prettylights-syntax-sublimelinter-gutter-mark)}.markdown-body .pl-corl{color:var(--color-prettylights-syntax-constant-other-reference-link);-webkit-text-decoration:underline;text-decoration:underline}.markdown-body g-emoji{display:inline-block;font-family:"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:1em;font-style:normal!important;font-weight:400;font-weight:var(--base-text-weight-normal,400);line-height:1;min-width:1ch;vertical-align:-.075em}.markdown-body g-emoji img{height:1em;width:1em}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item label{font-weight:400;font-weight:var(--base-text-weight-normal,400)}.markdown-body .task-list-item.enabled label{cursor:pointer}.markdown-body .task-list-item+.task-list-item{margin-top:4px}.markdown-body .task-list-item .handle{display:none}.markdown-body .task-list-item-checkbox{margin:0 .2em .25em -1.4em;vertical-align:middle}[dir=rtl] .markdown-body .contains-task-list .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.markdown-body .contains-task-list{position:relative}.markdown-body .contains-task-list:focus-within .task-list-item-convert-container,.markdown-body .contains-task-list:hover .task-list-item-convert-container{clip:auto;display:block;height:24px;overflow:visible;width:auto}.markdown-body ::-webkit-calendar-picker-indicator{filter:invert(50%)}/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\\\n  !*** css ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[14].use[2]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[14].use[3]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[14].use[4]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[14].use[5]!./app/styles/highlight.scss ***!\n  \\*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/.markdown-body{/*!\n  Theme: Tokyo-night-Dark\n  origin: https://github.com/enkia/tokyo-night-vscode-theme\n  Description: Original highlight.js style\n  Author: (c) Henri Vandersleyen <hvandersleyen@gmail.com>\n  License: see project LICENSE\n  Touched: 2022\n*/}.markdown-body pre{padding:0}.markdown-body code,.markdown-body pre{font-family:Consolas,Monaco,"Andale Mono","Ubuntu Mono",monospace}.markdown-body pre code{display:block;overflow-x:auto;padding:1em}.markdown-body code{padding:3px 5px}.markdown-body .hljs,.markdown-body pre{background:#1a1b26;color:#cbd2ea}.markdown-body .hljs-comment,.markdown-body .hljs-meta{color:#565f89}.markdown-body .hljs-deletion,.markdown-body .hljs-doctag,.markdown-body .hljs-regexp,.markdown-body .hljs-selector-attr,.markdown-body .hljs-selector-class,.markdown-body .hljs-selector-id,.markdown-body .hljs-selector-pseudo,.markdown-body .hljs-tag,.markdown-body .hljs-template-tag,.markdown-body .hljs-variable.language_{color:#f7768e}.markdown-body .hljs-link,.markdown-body .hljs-literal,.markdown-body .hljs-number,.markdown-body .hljs-params,.markdown-body .hljs-template-variable,.markdown-body .hljs-type,.markdown-body .hljs-variable{color:#ff9e64}.markdown-body .hljs-attribute,.markdown-body .hljs-built_in{color:#e0af68}.markdown-body .hljs-keyword,.markdown-body .hljs-property,.markdown-body .hljs-subst,.markdown-body .hljs-title,.markdown-body .hljs-title.class_,.markdown-body .hljs-title.class_.inherited__,.markdown-body .hljs-title.function_{color:#7dcfff}.markdown-body .hljs-selector-tag{color:#73daca}.markdown-body .hljs-addition,.markdown-body .hljs-bullet,.markdown-body .hljs-quote,.markdown-body .hljs-string,.markdown-body .hljs-symbol{color:#9ece6a}.markdown-body .hljs-code,.markdown-body .hljs-formula,.markdown-body .hljs-section{color:#7aa2f7}.markdown-body .hljs-attr,.markdown-body .hljs-char.escape_,.markdown-body .hljs-keyword,.markdown-body .hljs-name,.markdown-body .hljs-operator{color:#bb9af7}.markdown-body .hljs-punctuation{color:#c0caf5}.markdown-body .hljs-emphasis{font-style:italic}.markdown-body .hljs-strong{font-weight:700}', ""]), r.locals = {}, t.exports = r
        },
        1211: function(t, o, e) {
            "use strict";
            e(1154)
        },
        1212: function(t, o, e) {
            var r = e(24)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".button_icon-button__BC_Ca[data-v-660e3848]{align-items:center;background-color:var(--white);border:none;border-radius:10px;color:var(--black);cursor:pointer;display:flex;font-size:14px;justify-content:center;outline:none;overflow:hidden;padding:8px 20px;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.button_icon-button__BC_Ca[disabled][data-v-660e3848]{cursor:not-allowed;opacity:.5}.button_shadow__Ap98F[data-v-660e3848]{box-shadow:var(--card-shadow)}.button_border__nGPHl[data-v-660e3848]{border:var(--border-in-light)}.button_icon-button__BC_Ca[data-v-660e3848]:hover{border-color:var(--primary)}.button_icon-button-icon__qlUH3[data-v-660e3848]{align-items:center;display:flex;height:16px;justify-content:center;width:16px}@media only screen and (max-width:600px){.button_icon-button__BC_Ca[data-v-660e3848]{padding:8px 10px}}.set-mobile.html .button_icon-button__BC_Ca[data-v-660e3848]{padding:8px 10px}.button_icon-button-text__k3vob[data-v-660e3848]{font-size:12px;margin-left:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\\\n    !*** css ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[10].use[3]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[10].use[4]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[10].use[5]!./app/components/ui-lib.module.scss ***!\n    \\*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/@keyframes ui-lib_slide-in__iob7i-660e3848{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes ui-lib_slide-in-from-top__Qfsdu-660e3848{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.ui-lib_card__umMjN[data-v-660e3848]{background-color:var(--white);border-radius:10px;box-shadow:var(--card-shadow);padding:10px}.ui-lib_popover__5cywD[data-v-660e3848]{position:relative;z-index:2}.ui-lib_popover-content__gZ0he[data-v-660e3848]{animation:ui-lib_slide-in__iob7i-660e3848 .3s ease;position:absolute;right:0;top:calc(100% + 10px)}.ui-lib_popover-mask__iViG8[data-v-660e3848]{height:100vh;left:0;position:fixed;top:0;width:100vw}.ui-lib_list-item__MN4sf[data-v-660e3848]{align-items:center;animation:ui-lib_slide-in__iob7i-660e3848 .6s ease;border-bottom:var(--border-in-light);display:flex;justify-content:space-between;min-height:40px;padding:10px 20px}.ui-lib_list__uHeWh[data-v-660e3848]{animation:ui-lib_slide-in__iob7i-660e3848 .3s ease;border:var(--border-in-light);border-radius:10px;box-shadow:var(--card-shadow);margin-bottom:20px}.ui-lib_list__uHeWh .ui-lib_list-item__MN4sf[data-v-660e3848]:last-child{border:0}.ui-lib_modal-container__Ra9HB[data-v-660e3848]{--modal-padding:20px;animation:ui-lib_slide-in__iob7i-660e3848 .3s ease;background-color:var(--white);border-radius:12px;box-shadow:var(--card-shadow);width:50vw}.ui-lib_modal-container__Ra9HB .ui-lib_modal-header__S9ma8[data-v-660e3848]{align-items:center;border-bottom:var(--border-in-light);display:flex;justify-content:space-between;padding:var(--modal-padding)}.ui-lib_modal-container__Ra9HB .ui-lib_modal-header__S9ma8 .ui-lib_modal-title__i_dpP[data-v-660e3848]{font-size:16px;font-weight:bolder}.ui-lib_modal-container__Ra9HB .ui-lib_modal-header__S9ma8 .ui-lib_modal-close-btn__mIjOX[data-v-660e3848]{cursor:pointer}.ui-lib_modal-container__Ra9HB .ui-lib_modal-header__S9ma8 .ui-lib_modal-close-btn__mIjOX[data-v-660e3848]:hover{filter:brightness(1.2)}.ui-lib_modal-container__Ra9HB .ui-lib_modal-content__nFcGO[data-v-660e3848]{max-height:40vh;overflow:auto;padding:var(--modal-padding)}.ui-lib_modal-container__Ra9HB .ui-lib_modal-footer__J_cgq[data-v-660e3848]{display:flex;justify-content:flex-end;padding:var(--modal-padding)}.ui-lib_modal-container__Ra9HB .ui-lib_modal-footer__J_cgq .ui-lib_modal-actions__0VvYa[data-v-660e3848]{align-items:center;display:flex}.ui-lib_modal-container__Ra9HB .ui-lib_modal-footer__J_cgq .ui-lib_modal-actions__0VvYa .ui-lib_modal-action__12xLt[data-v-660e3848]:not(:last-child){margin-right:20px}.ui-lib_show__3Gd4p[data-v-660e3848]{animation:ui-lib_slide-in__iob7i-660e3848 .6s ease;bottom:0;left:0;opacity:1;position:fixed;transform:translateY(0);transition:all .3s ease;z-index:99999}.ui-lib_hide__GF1sp[data-v-660e3848]{opacity:0;transform:translateY(20px);transition:all .3s ease}.ui-lib_toast-container__7epyd[data-v-660e3848]{bottom:0;display:flex;justify-content:center;left:0;pointer-events:none;position:fixed;width:100vw}.ui-lib_toast-container__7epyd .ui-lib_toast-content__XpHSf[data-v-660e3848]{align-items:center;background-color:var(--white);border:var(--border-in-light);border-radius:50px;box-shadow:var(--card-shadow);color:var(--black);display:flex;font-size:14px;margin-bottom:20px;max-width:80vw;padding:10px 20px;pointer-events:all;word-break:break-all}.ui-lib_toast-container__7epyd .ui-lib_toast-content__XpHSf .ui-lib_toast-action__wO4Lv[data-v-660e3848]{background:none;border:0;color:var(--primary);cursor:pointer;font-family:inherit;opacity:.8;padding-left:20px}.ui-lib_toast-container__7epyd .ui-lib_toast-content__XpHSf .ui-lib_toast-action__wO4Lv[data-v-660e3848]:hover{opacity:1}.ui-lib_input__v_cwR[data-v-660e3848]{background-color:var(--white);border:var(--border-in-light);border-radius:10px;color:var(--black);font-family:inherit;min-width:50px;padding:10px;resize:none}@media only screen and (max-width:600px){.ui-lib_modal-container__Ra9HB[data-v-660e3848]{width:90vw}.ui-lib_modal-container__Ra9HB .ui-lib_modal-content__nFcGO[data-v-660e3848]{max-height:50vh}}.set-mobile.html .ui-lib_modal-container__Ra9HB[data-v-660e3848]{width:90vw}.set-mobile.html .ui-lib_modal-container__Ra9HB .ui-lib_modal-content__nFcGO[data-v-660e3848]{max-height:50vh}/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\\\n    !*** css ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[10].use[3]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[10].use[4]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[10].use[5]!./app/components/home.module.scss ***!\n    \\***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/.home_window-header__248BE[data-v-660e3848]{align-items:center;box-shadow:0 5px 10px 0 rgba(99,130,245,.1);display:flex;justify-content:space-between;padding:14px 20px;position:relative}.home_window-header-title__bJCkO[data-v-660e3848]{overflow:hidden;width:100%}.home_window-header-title__bJCkO .home_window-header-main-title__Y16Es[data-v-660e3848]{display:block;font-size:20px;font-weight:bolder;max-width:50vw;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home_window-header-title__bJCkO .home_window-header-sub-title__9rZM1[data-v-660e3848]{font-size:14px;margin-top:5px}.home_window-actions__k4f3s[data-v-660e3848]{display:inline-flex}.home_window-action-button__Is6GK[data-v-660e3848]{margin-left:10px}@keyframes home_slide-in__gYZA0-660e3848{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes home_slide-in-from-top__DysOS-660e3848{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.home_container__Myqoy[data-v-660e3848]{background-color:var(--white);box-sizing:border-box;color:var(--black);display:flex;overflow:hidden;width:100%}@media only screen and (min-width:600px){.home_tight-container__sz6zy[data-v-660e3848]{--window-width:100vw;--window-height:var(--full-height);--window-content-width:calc(100% - var(--sidebar-width));background-color:var(--white);border:0;border-radius:20px;border-radius:0;box-shadow:var(--shadow);box-sizing:border-box;color:var(--black);display:flex;height:var(--full-height);height:var(--window-height);max-height:var(--full-height);max-width:1200px;max-width:100vw;min-height:480px;min-width:600px;overflow:hidden;width:100vw;width:var(--window-width)}}.set-mobile.html .home_tight-container__sz6zy[data-v-660e3848]{--window-width:100vw;--window-height:var(--full-height);--window-content-width:calc(100% - var(--sidebar-width));background-color:var(--white);border:0;border-radius:20px;border-radius:0;box-shadow:var(--shadow);box-sizing:border-box;color:var(--black);display:flex;height:var(--full-height);height:var(--window-height);max-height:var(--full-height);max-width:1200px;max-width:100vw;min-height:480px;min-width:600px;overflow:hidden;width:100vw;width:var(--window-width)}.home_sidebar__4L4yT[data-v-660e3848]{background-color:var(--second);box-shadow:inset -2px 0 2px 0 rgba(0,0,0,.05);box-sizing:border-box;display:flex;flex-direction:column;padding:20px;position:relative;top:0;transition:width .1s ease;width:var(--sidebar-width)}.home_sidebar__4L4yT .chat-logo[data-v-660e3848]{bottom:0;position:absolute;right:0}.home_sidebar-drag__hOnXd[data-v-660e3848]{background-color:var(--black);cursor:ew-resize;height:100%;opacity:0;position:absolute;right:0;top:0;transition:all .3s ease;width:10px}.home_sidebar-drag__hOnXd[data-v-660e3848]:active,.home_sidebar-drag__hOnXd[data-v-660e3848]:hover{opacity:.2}.home_window-content__RRVow[data-v-660e3848]{display:flex;flex-direction:column;height:100%;width:var(--window-content-width)}.home_mobile__ako7k[data-v-660e3848]{display:none}@media only screen and (max-width:600px){.home_container__Myqoy[data-v-660e3848]{border:0;border-radius:0;max-height:none;min-height:0;min-height:auto;min-width:0;min-width:auto}.home_sidebar__4L4yT[data-v-660e3848]{box-shadow:none;height:var(--full-height);left:-100%;position:absolute;transition:all .3s ease;z-index:1000}.home_sidebar-show__I77cg[data-v-660e3848]{left:0}.home_mobile__ako7k[data-v-660e3848]{display:block}}.set-mobile.html .home_container__Myqoy[data-v-660e3848]{border:0;border-radius:0;max-height:none;min-height:0;min-height:auto;min-width:0;min-width:auto}.set-mobile.html .home_sidebar__4L4yT[data-v-660e3848]{display:none}.set-mobile.html .home_sidebar-show__I77cg[data-v-660e3848]{left:0}.set-mobile.html .home_mobile__ako7k[data-v-660e3848]{display:block}.home_sidebar-header__b5asC[data-v-660e3848]{padding-bottom:20px;padding-top:20px;position:relative}.home_sidebar-logo__FFdBS[data-v-660e3848]{bottom:18px;position:absolute;right:0}.home_sidebar-title__d8_c_[data-v-660e3848]{color:#fff;font-size:20px;font-weight:700}.home_sidebar-sub-title__IS2Or[data-v-660e3848]{color:#fff;font-size:12px;font-weight:400px}.home_sidebar-body__zSPJN[data-v-660e3848]{flex:1 1;overflow:auto}.home_chat-item__7LfQR[data-v-660e3848]{background-color:var(--white);border:2px solid transparent;border-radius:10px;box-shadow:var(--card-shadow);cursor:pointer;margin-bottom:10px;overflow:hidden;padding:10px 14px;position:relative;transition:background-color .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.home_chat-item__7LfQR[data-v-660e3848]:hover{background-color:var(--hover-color)}.home_chat-item-selected__6TyNm[data-v-660e3848]{border-color:var(--primary)}.home_chat-item-title__LZXA_[data-v-660e3848]{display:block;font-size:14px;font-weight:bolder;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:200px}.home_chat-item-delete__xQ_8e[data-v-660e3848]{cursor:pointer;opacity:0;position:absolute;right:-20px;top:10px;transition:all .3s ease}.home_chat-item__7LfQR:hover>.home_chat-item-delete__xQ_8e[data-v-660e3848]{opacity:.5;right:10px}.home_chat-item__7LfQR:hover>.home_chat-item-delete__xQ_8e[data-v-660e3848]:hover{opacity:1}.home_chat-item-info__UAzOv[data-v-660e3848]{color:#a6a6a6;display:flex;font-size:12px;justify-content:space-between;margin-top:8px}.home_chat-item-count__pilKg[data-v-660e3848],.home_chat-item-date__0scNw[data-v-660e3848]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home_sidebar-tail__R8VX2[data-v-660e3848]{display:flex;justify-content:space-between;padding-top:20px}.home_sidebar-actions__zyNfR[data-v-660e3848]{display:inline-flex}.home_sidebar-action__JhMu0[data-v-660e3848]:not(:last-child){margin-right:15px}.home_chat__7Bh_I[data-v-660e3848]{display:flex;flex-direction:column;height:100%;position:relative}.home_chat-body__mbaM8[data-v-660e3848]{flex:1 1;overflow:auto;padding:20px 20px 40px;position:relative}.home_chat-body-title__5S8w4[data-v-660e3848]{cursor:pointer}.home_chat-body-title__5S8w4[data-v-660e3848]:hover{-webkit-text-decoration:underline;text-decoration:underline}.home_chat-message__rdH_g[data-v-660e3848]{display:flex;flex-direction:row}.home_chat-message-user__WsuiB[data-v-660e3848]{display:flex;flex-direction:row-reverse}.home_chat-message-container__plj_e[data-v-660e3848]{align-items:flex-start;animation:home_slide-in__gYZA0-660e3848 .3s ease;display:flex;flex-direction:column;max-width:var(--message-max-width)}.home_chat-message-container__plj_e:hover .home_chat-message-top-actions__PfOzb[data-v-660e3848]{opacity:1;pointer-events:all;right:10px}.home_chat-message-user__WsuiB>.home_chat-message-container__plj_e[data-v-660e3848]{align-items:flex-end}.home_chat-message-avatar__611lI[data-v-660e3848]{margin-top:20px}.home_chat-message-status__EsVNi[data-v-660e3848]{color:#aaa;font-size:12px;line-height:1.5;margin-top:5px}.home_user-avtar__3QksJ[data-v-660e3848]{align-items:center;border:var(--border-in-light);border-radius:10px;box-shadow:var(--card-shadow);display:flex;height:30px;justify-content:center;width:30px}.home_chat-message-item__hDEOq[data-v-660e3848]{background:#f6f6fa;border-radius:15px;box-sizing:border-box;font-size:13px;margin-top:10px;max-width:100%;padding:10px;position:relative;-webkit-user-select:text;-moz-user-select:text;user-select:text;word-break:break-word}.home_chat-message-top-actions__PfOzb[data-v-660e3848]{display:flex;flex-direction:row-reverse;font-size:12px;left:100px;opacity:0;pointer-events:none;position:absolute;right:20px;top:-26px;transition:all .3s ease}.home_chat-message-top-actions__PfOzb .home_chat-message-top-action__wXKmA[data-v-660e3848]{color:var(--black);cursor:pointer;opacity:.5;white-space:nowrap}.home_chat-message-top-actions__PfOzb .home_chat-message-top-action__wXKmA[data-v-660e3848]:hover{opacity:1}.home_chat-message-top-actions__PfOzb .home_chat-message-top-action__wXKmA[data-v-660e3848]:not(:first-child){margin-right:10px}.home_chat-message-user__WsuiB>.home_chat-message-container__plj_e>.home_chat-message-item__hDEOq[data-v-660e3848]{background-color:#91b1ff}.home_chat-message-user__WsuiB>.home_chat-message-container__plj_e>.home_chat-message-item__hDEOq .markdown-body[data-v-660e3848]{color:#fff}.home_chat-message-actions__nrHd1[data-v-660e3848]{box-sizing:border-box;display:flex;flex-direction:row-reverse;font-size:12px;padding-top:5px;width:100%}.home_chat-message-action-date__6ToUp[data-v-660e3848]{color:#aaa}.home_chat-input-panel__kmhBn[data-v-660e3848]{background-color:#f6f6fa;border:0;box-sizing:border-box;flex-direction:column;padding:10px 20px 20px;position:relative;width:100%}.home_chat-input-panel__kmhBn .tab-list[data-v-660e3848]{font-size:14px}.home_chat-input-panel__kmhBn .tab-list .item[data-v-660e3848]{border:1px solid var(--primary);border-radius:9999px;color:var(--primary);cursor:pointer;display:inline-block;margin-bottom:10px;margin-right:10px;padding:.125rem .5rem;transition-duration:.15s}.home_chat-input-panel__kmhBn .tab-list .item[data-v-660e3848]:hover{background-color:var(--primary);color:#fff}.home_prompt-hints__Nv0JN[data-v-660e3848]{background-color:var(--white);border:var(--border-in-light);border-radius:10px;box-shadow:var(--shadow);display:flex;flex-direction:column-reverse;margin-bottom:10px;max-height:50vh;min-height:20px;overflow:auto;width:100%}.home_prompt-hints__Nv0JN .home_prompt-hint__7bycW[data-v-660e3848]{animation:home_slide-in__gYZA0-660e3848 .3s ease;border:1px solid transparent;border-radius:8px;color:var(--black);cursor:pointer;margin:4px;padding:6px 10px;transition:all .3s ease}.home_prompt-hints__Nv0JN .home_prompt-hint__7bycW[data-v-660e3848]:not(:last-child){margin-top:0}.home_prompt-hints__Nv0JN .home_prompt-hint__7bycW .home_hint-title__V1gw6[data-v-660e3848]{font-size:12px;font-weight:bolder;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home_prompt-hints__Nv0JN .home_prompt-hint__7bycW .home_hint-content__GHRmC[data-v-660e3848]{font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.home_prompt-hints__Nv0JN .home_prompt-hint-selected__LI_5l[data-v-660e3848],.home_prompt-hints__Nv0JN .home_prompt-hint__7bycW[data-v-660e3848]:hover{border-color:var(--primary)}.home_chat-input-panel-inner__8J59p[data-v-660e3848]{display:flex;flex:1 1}[data-v-660e3848] .el-textarea .el-textarea__inner{background-color:var(--white);border:0;border-radius:15px;color:var(--black);font-family:inherit;outline:none;padding:10px 90px 10px 14px;resize:none}[data-v-660e3848] .el-textarea.is-disabled .el-textarea__inner{background-color:#fff}.home_chat-input__qM_hd[data-v-660e3848]{background-color:var(--white);border:var(--border-in-light);border-radius:10px;box-shadow:0 -2px 5px rgba(0,0,0,.03);color:var(--black);font-family:inherit;height:100%;outline:none;padding:10px 90px 10px 14px;resize:none;width:100%}.home_chat-input__qM_hd[data-v-660e3848]:focus{border:1px solid var(--primary)}.home_chat-input-send__rsJfH[data-v-660e3848]{background-color:var(--primary);bottom:23px;box-shadow:0 5px 11px 0 #bbcaff;color:#fff;position:absolute;right:30px}@media only screen and (max-width:600px){.home_chat-input__qM_hd[data-v-660e3848]{font-size:16px}[data-v-660e3848] .el-textarea__inner{font-size:16px}.home_chat-input-send__rsJfH[data-v-660e3848]{bottom:24px}}.set-mobile.html .home_chat-input__qM_hd[data-v-660e3848]{font-size:16px}.set-mobile.html[data-v-660e3848] .el-textarea__inner{font-size:16px}.set-mobile.html .home_chat-input-send__rsJfH[data-v-660e3848]{bottom:24px}.home_export-content__ZTj0v[data-v-660e3848]{padding:10px!important;white-space:break-spaces}.home_loading-content__tru2c[data-v-660e3848]{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\\\n    !*** css ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[10].use[3]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[10].use[4]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[10].use[5]!./app/components/chat.module.scss ***!\n    \\***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/@keyframes chat_slide-in__jGTU7-660e3848{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes chat_slide-in-from-top__QIZOS-660e3848{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}.chat_chat-input-actions__fJw2y[data-v-660e3848]{display:flex;flex-wrap:wrap}.chat_chat-input-actions__fJw2y .chat_chat-input-action__dB24v[data-v-660e3848]{align-items:center;animation:chat_slide-in__jGTU7-660e3848 .3s ease;background-color:var(--white);border:var(--border-in-light);border-radius:20px;box-shadow:var(--card-shadow);color:var(--black);display:inline-flex;font-size:12px;margin-bottom:10px;padding:4px 10px;transition:all .3s ease}.chat_chat-input-actions__fJw2y .chat_chat-input-action__dB24v[data-v-660e3848]:not(:last-child){margin-right:5px}.chat_prompt-toast__v0Ha5[data-v-660e3848]{bottom:-50px;display:flex;justify-content:center;position:absolute;width:calc(100% - 40px);z-index:999}.chat_prompt-toast__v0Ha5 .chat_prompt-toast-inner__qUzGo[data-v-660e3848]{align-items:center;animation:chat_slide-in-from-top__QIZOS-660e3848 .3s ease;background-color:var(--white);border:var(--border-in-light);border-radius:100px;box-shadow:var(--card-shadow);color:var(--black);display:flex;font-size:12px;justify-content:center;padding:10px 20px}.chat_prompt-toast__v0Ha5 .chat_prompt-toast-inner__qUzGo .chat_prompt-toast-content__tDz2h[data-v-660e3848]{margin-left:10px}.chat_context-prompt__a3Xrj .chat_context-prompt-row__D24xk[data-v-660e3848]{display:flex;justify-content:center;margin-bottom:10px;width:100%}.chat_context-prompt__a3Xrj .chat_context-prompt-row__D24xk .chat_context-role___RwCJ[data-v-660e3848]{margin-right:10px}.chat_context-prompt__a3Xrj .chat_context-prompt-row__D24xk .chat_context-content__3iEuJ[data-v-660e3848]{flex:1 1;max-width:100%;text-align:left}.chat_context-prompt__a3Xrj .chat_context-prompt-row__D24xk .chat_context-delete-button__rSrlO[data-v-660e3848]{margin-left:10px}.chat_context-prompt__a3Xrj .chat_context-prompt-button__MmudR[data-v-660e3848]{flex:1 1}.chat_memory-prompt__HLWNg[data-v-660e3848]{margin-top:20px}.chat_memory-prompt__HLWNg .chat_memory-prompt-title__eZIzp[data-v-660e3848]{align-items:center;display:flex;font-size:12px;font-weight:700;justify-content:space-between;margin-bottom:10px}.chat_memory-prompt__HLWNg .chat_memory-prompt-title__eZIzp .chat_memory-prompt-action__eyGdY[data-v-660e3848]{align-items:center;display:flex}.chat_memory-prompt__HLWNg .chat_memory-prompt-content__Zgo_G[data-v-660e3848]{background-color:var(--gray);border-radius:6px;font-size:12px;padding:10px;-webkit-user-select:text;-moz-user-select:text;user-select:text}[data-v-660e3848] .nuxt-progress{display:none!important;width:0!important}", ""]), r.locals = {}, t.exports = r
        }
    }
]);