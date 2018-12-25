webpackJsonp([0], [, , , , , , , , , , , , , , , , function(t, e, s) {
    "use strict";
    function i(t) {
        s(256)
    }
    var n = s(62),
        a = s(394),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, , , , , , , , , , , , , , function(t, e, s) {
    "use strict";
    function i(t) {
        s(244)
    }
    var n = s(84),
        a = s(384),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, "data-v-3b903422", null);
    e.a = c.exports
}, , , , , , , , , , , , , , , , function(t, e, s) {
    "use strict";
    function i(t) {
        s(237)
    }
    var n = s(71),
        a = s(377),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, , function(t, e, s) {
    "use strict";
    var i = s(17),
        n = s(3),
        a = s(117),
        r = s(175),
        o = s(174);
    i.a.use(n.d);
    var c = {
            setLang: function(t, e) {
                a.a.changeLanguage(e), t.lang = e
            },
            setCustomAnswerEndpoint: function(t, e) {
                t.customAnswerEndpoint = e
            }
        },
        u = new n.d.Store({
            state: {
                lang: "ru",
                customAnswerEndpoint: null
            },
            mutations: c,
            modules: {
                quiz: r.a,
                form: o.a
            }
        });
    e.a = u
}, , , , , , , function(t, e, s) {
    "use strict";
    var i = s(325),
        n = s.n(i);
    e.a = function(t, e) {
        var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = String(e);
        i.indexOf("http") < 0 && i.indexOf("tg://") < 0 && (i = "http://" + i);
        var a = new n.a(i, "", !0),
            r = a.query;
        for (var o in s) r["marquiz_" + o] = s[o];
        return a.set("query", r), t.top.location.href = a.href, i
    }
}, function(t, e, s) {
    "use strict";
    var i = s(328),
        n = s(119);
    e.a = {
        values: {
            uuid: null,
            answerId: null
        },
        init: function(t) {
            this.expires = new Date((new Date).getTime() + 12e4), this.quizId = t;
            try {
                this.set("answerId", n.get(this.getCookieName("answerId"))), this.set("uuid", n.get(this.getCookieName("uuid"))), this.values.uuid || this.set("uuid", i())
            } catch (t) {
                this.set("uuid", i())
            }
        },
        getCookieName: function(t) {
            return t + "_" + this.quizId
        },
        get: function(t) {
            return t ? this.values[t] : this.values
        },
        set: function(t, e) {
            this.values[t] = e, e ? n.set(this.getCookieName(t), e, {
                expires: this.expires
            }) : n.remove(this.getCookieName(t))
        },
        updateSessionLiveTime: function() {
            this.expires = new Date((new Date).getTime() + 12e4);
            for (var t in this.values) this.values[t] && this.set(t, this.values[t])
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(35),
        r = s.n(a),
        o = s(34),
        c = s.n(o),
        u = s(3),
        l = s(1),
        d = s.n(l),
        g = s(56),
        h = s(336),
        m = s(126),
        f = s(366),
        M = s(350),
        p = s(347);
    e.a = {
        components: {
            Layout: h.a,
            Quiz: m.a,
            Install: f.a,
            Welcome: M.a,
            StartPage: p.a
        },
        beforeMount: function() {
            var t = this;
            return c()(r.a.mark(function e() {
                return r.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if ("/agreement" !== t.$route.path) {
                                e.next = 3;
                                break
                            }
                            return t.isLoading = !1, e.abrupt("return");
                        case 3:
                            return t.showWelcomePage(), e.next = 6, t.load();
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }, e, t)
            }))()
        },
        data: function() {
            return {
                isLoading: !0,
                notFound: !1,
                loadingError: !1,
                isEditMode: !1,
                groupId: this.$route.query.group_id,
                quizId: "5c1ba519803a1300440e8957",
                request: this.$route.query,
                isModal: !!d.a.get(this.$route, "query.isModal", !0),
                isShowWelcomePage: !1
            }
        },
        computed: n()({}, s.i(u.a)("quiz", ["quizStarted", "loaded", "info", ""]), s.i(u.b)("quiz", ["colors"]), {
            isVkGroupAdmin: function() {
                return this.groupId && "4" === this.$route.query.viewer_type
            },
            styles: function() {
                return {
                    "--color": this.colors.main,
                    "--color-lighten": this.colors.lighten,
                    "--color-lighten10": this.colors.lighten10,
                    "--color-lighten2": this.colors.lighten2,
                    "--color-darken": this.colors.darken,
                    "--color-darken10": this.colors.darken10,
                    "--color-alpha": this.colors.alpha,
                    "--color-alpha2": this.colors.alpha2,
                    "--color-text": this.colors.text,
                    "--color-text2": this.colors.text2,
                    "--gradient-main": this.colors.gradientMain
                }
            }
        }),
        methods: {
            load: function() {
                var t = this;
                return c()(r.a.mark(function e() {
                    var s;
                    return r.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t.quizId || !t.groupId) {
                                    e.next = 11;
                                    break
                                }
                                return e.prev = 1, e.next = 4, t.$axios.get("v1/vkGroups/findOne", {
                                    params: {
                                        filter: {
                                            where: {
                                                groupId: t.groupId
                                            }
                                        }
                                    }
                                });
                            case 4:
                                s = e.sent, t.quizId = d.a.get(s, "data.quizId"), e.next = 11;
                                break;
                            case 8:
                                e.prev = 8, e.t0 = e.catch(1), t.isShowWelcomePage = !0;
                            case 11:
                                if (t.quizId) {
                                    e.next = 15;
                                    break
                                }
                                return t.isLoading = !1, t.notFound = !0, e.abrupt("return");
                            case 15:
                                t.initSession(t.quizId), t.$store.dispatch("quiz/get", t.quizId).then(function() {
                                    t.isLoading = !1
                                }).catch(function(e) {
                                    t.isLoading = !1, e.response && 404 === e.response.status ? t.notFound = !0 : t.loadingError = !0
                                });
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }, e, t, [
                        [1, 8]
                    ])
                }))()
            },
            initSession: function(t) {
                g.a.init(t), this.$store.commit("form/setSession", {
                    answerId: g.a.get("answerId"),
                    uuid: g.a.get("uuid")
                })
            },
            closeAndReload: function() {
                var t = this;
                return c()(r.a.mark(function e() {
                    return r.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t.isEditMode = !1, t.quizId = null, e.next = 4, t.load();
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e, t)
                }))()
            },
            showWelcomePage: function() {
                return !this.quizId && (!this.groupId && void(("/" === this.$route.path || this.$route.query.viewer_id && !this.groupId) && (this.isShowWelcomePage = !0)))
            }
        },
        watch: {
            loaded: function(t) {
                t && this.$quizFrame.postMessage({
                    id: this.quizId,
                    action: "loaded"
                })
            }
        },
        name: "app"
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(3),
        r = s(308),
        o = s.n(r),
        c = s(45),
        u = s.n(c),
        l = s(10),
        d = s.n(l),
        g = s(14),
        h = s.n(g),
        m = s(129),
        f = new u.a.Converter({
            simplifiedAutoLink: !0,
            openLinksInNewWindow: !0,
            simpleLineBreaks: !0
        });
    e.a = {
        components: {
            ArrowShow: m.a
        },
        props: {
            assistant: Object,
            text: String,
            hint: Object
        },
        data: function() {
            return {
                avatar: o.a
            }
        },
        computed: n()({}, s.i(a.a)("quiz", {
            activeQuestion: function(t) {
                return t.activeQuestion
            }
        }), s.i(a.b)("quiz", {
            question: "getQuestion",
            countQuestions: "countQuestions"
        }), {
            hasAssistant: function() {
                return !!this.assistant.name
            },
            imageUrl: function() {
                var t = this.assistant.avatar;
                if (!t) return null;
                var e = "cloudinary" === t.provider ? t.name : "https://marquiz.blob.core.windows.net/" + t.url,
                    s = {
                        cloud_name: "hgwipn3sa",
                        source: "cloudinary" === t.provider ? "upload" : "fetch",
                        secure: "https:" === window.location.protocol,
                        width: 70,
                        height: 70,
                        crop: "fill",
                        gravity: "face",
                        dpr: h()() ? "2.0" : "1.0",
                        fetch_format: "auto"
                    };
                return d()(e, s)
            },
            textHtml: function() {
                return this.hint ? f.makeHtml(this.hint.text) : f.makeHtml(this.text)
            }
        })
    }
}, function(t, e, s) {
    "use strict";
    var i = s(1),
        n = s.n(i),
        a = s(121),
        r = s(129);
    e.a = {
        extends: a.a,
        components: {
            ArrowShow: r.a
        },
        mounted: function() {
            this.setHasMore()
        },
        props: {
            assistant: Object,
            text: String,
            hint: Object
        },
        data: function() {
            return {
                hasMore: !1,
                expand: !1
            }
        },
        methods: {
            getFirstName: function(t) {
                return t.split(" ")[0]
            },
            toggleText: function() {
                if (this.hint) return void this.closeHint();
                this.hasMore && (this.expand = !this.expand)
            },
            setHasMore: function() {
                var t = this;
                setTimeout(function() {
                    t.hasMore = n.a.get(t.$refs, "text", {}).offsetHeight > n.a.get(t.$refs, "textContainer", {}).offsetHeight
                }, 350)
            },
            closeHint: function() {
                this.expand = !1, this.$store.commit("quiz/showHint")
            }
        },
        watch: {
            activeQuestion: function() {
                this.hasMore = !1, this.expand = !1, this.setHasMore()
            },
            hint: function(t) {
                t && (this.expand = !0)
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(420),
        n = s(49),
        a = s.n(n);
    e.a = {
        extends: a.a.Input,
        components: {
            MaskedInput: i.a
        },
        props: {
            mask: String
        },
        data: function() {
            return {
                rawVal: null
            }
        },
        methods: {
            onInput: function(t, e) {
                var s = this;
                if (e.match(/_/g)) this.rawVal = null;
                else if (e.match(/\d/g)) {
                    var i = t.match(/\d|\+/g);
                    this.rawVal = i ? i.join("") : ""
                } else this.rawVal = null;
                this.$nextTick(function() {
                    s.newValue = t
                })
            }
        },
        watch: {
            newValue: function(t) {
                this.$emit("input", t, this.rawVal), !this.isValid && this.checkHtml5Validity()
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(1),
        n = s.n(i),
        a = s(364),
        r = s(363),
        o = s(312),
        c = s.n(o),
        u = s(323),
        l = s.n(u),
        d = s(10),
        g = s.n(d),
        h = s(14),
        m = s.n(h);
    e.a = {
        components: {
            DownArrowIcon: r.a,
            LockIcon: a.a
        },
        props: {
            bonus: Object,
            isLocked: {
                type: Boolean,
                default: !0
            }
        },
        data: function() {
            return {
                images: {
                    catalog: c.a,
                    price: l.a
                }
            }
        },
        computed: {
            templates: function() {
                return ["catalog", "price"]
            },
            type: function() {
                var t = n.a.get(this.bonus, "image.id");
                return n.a.includes(this.templates, t) || (t = "custom"), t
            },
            text: function() {
                return this.bonus.name ? this.bonus.name : "catalog" === this.type ? this.$t("РљР°С‚Р°Р»РѕРі") : "price" === this.type ? this.$t("РџСЂР°Р№СЃ-Р»РёСЃС‚") : ""
            },
            imageUrl: function() {
                if ("custom" === this.type) {
                    var t = n.a.get(this.bonus, "image", {});
                    return g()(t.name, {
                        cloud_name: "hgwipn3sa",
                        source: "cloudinary" === t.provider ? "upload" : "fetch",
                        secure: "https:" === window.location.protocol,
                        width: 250,
                        dpr: m()() ? "2.0" : "1.0",
                        fetch_format: "auto"
                    })
                }
                return this.images[this.type]
            }
        },
        methods: {
            download: function() {
                this.isLocked || this.bonus.link && (this.bonus.link.match(/^(http|https):\/\//) ? window.open(this.bonus.link, "_blank") : window.open("//" + this.bonus.link, "_blank"))
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(3),
        r = s(333),
        o = s(1),
        c = s.n(o);
    e.a = {
        components: {
            Bonus: r.a
        },
        props: {
            direction: {
                type: String,
                default: "column"
            },
            height: {
                type: Number,
                default: 60
            }
        },
        computed: n()({}, s.i(a.a)("quiz", {
            bonuses: function(t) {
                return c.a.get(t, "info.marketing.bonuses", [])
            }
        }), s.i(a.a)("quiz", ["isResultShow"]), s.i(a.b)("quiz", ["resultsPosition"]), s.i(a.a)("form", ["isStep2", "isThanksPage"])),
        methods: {
            isLock: function(t) {
                return (!this.isResultShow || "afterForm" !== this.resultsPosition) && (!this.isThanksPage && (!this.isThanksPage && !this.isStep2 || this.isStep2 && "finish" === t.step))
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(362),
        r = s(3);
    e.a = {
        components: {
            DiscountArrow: a.a
        },
        props: {
            countQuestions: Number,
            unexpanded: Boolean,
            bubbleLeft: Boolean
        },
        data: function() {
            return {
                interval: null,
                showBubble: !1
            }
        },
        computed: n()({}, s.i(r.b)("quiz", ["formattedDiscount", "isMeltingDiscount", "getIncreasingDiscountStep", "discountCurrencySymbol", "questionNumber", "isIncreasingPercentDiscount"]), {
            getDiscountIcon: function() {
                return this.isIncreasingPercentDiscount ? "%" : this.discountCurrencySymbol
            }
        }),
        watch: {
            questionNumber: function(t, e) {
                this.showBubble = t > e
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        props: {
            value: [String, Number]
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(15),
        n = s.n(i);
    e.a = {
        props: {
            discount: Number,
            currency: String
        },
        computed: {
            formattedDiscount: function() {
                return this.discount ? n()(this.discount).format("0,0") : 0
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(3),
        r = s(45),
        o = s.n(r),
        c = s(1),
        u = s.n(c),
        l = s(337),
        d = new o.a.Converter({
            simplifiedAutoLink: !0,
            openLinksInNewWindow: !0,
            simpleLineBreaks: !0
        });
    e.a = {
        components: {
            LeadForm: l.a
        },
        mounted: function() {
            this.hasMessengers && !this.hasContacts && (this.messengersPage = !0), this.changeHeight()
        },
        computed: n()({}, s.i(a.a)("quiz", ["info", "fixedDiscount", "id"]), s.i(a.a)("form", ["isStep2", "isThanksPage", "contacts"]), s.i(a.b)("quiz", ["discountCurrencySymbol", "isIncreasingPercentDiscount"]), {
            name: function() {
                return u.a.get(this.contacts, "name")
            },
            title: function() {
                var t = this.replaceName(this.info.form.title);
                if (t) return d.makeHtml(t.replace(/^# /, ""))
            },
            title2: function() {
                var t = this.replaceName(this.info.form.title2);
                if (t) return d.makeHtml(t.replace(/^# /, ""))
            },
            text: function() {
                var t = this.replaceName(this.info.form.text);
                if (t) return d.makeHtml(t.replace(/^# /, ""))
            },
            text2: function() {
                var t = this.replaceName(this.info.form.text2);
                if (t) return d.makeHtml(t.replace(/^# /, ""))
            },
            extra: function() {
                var t = this.replaceName(this.info.form.extra);
                if (t) return d.makeHtml(t)
            },
            extra2: function() {
                var t = this.replaceName(this.info.form.extra2);
                if (t) return d.makeHtml(t)
            },
            thanksText: function() {
                var t = this.replaceName(this.info.form.thanks);
                return d.makeHtml(t)
            },
            twoColumns: function() {
                return this.info.form.text || this.fixedDiscount || this.info.form.extra
            }
        }),
        methods: {
            replaceName: function(t) {
                return t && this.name ? t.replace(/\[name\]/g, this.name) : t
            },
            changeHeight: function() {
                var t = this;
                this.$nextTick(function() {
                    t.$quizFrame.changeHeight(t.id, t.$refs.finalPage.clientHeight)
                })
            }
        },
        watch: {
            isStep2: function() {
                this.changeHeight()
            },
            isThanksPage: function() {
                this.changeHeight()
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(1),
        n = s.n(i),
        a = s(124),
        r = s(349),
        o = s(16),
        c = s(123),
        u = s(365),
        l = s(46);
    e.a = {
        extends: a.a,
        components: {
            ProgressBar: l.a,
            ThankPage: r.a,
            Bonuses: o.a,
            ShareIcon: u.a,
            FinalDiscount: c.a
        },
        computed: {
            bonuses: function() {
                return n.a.get(this.info, "marketing.bonuses", [])
            },
            title: function() {
                return this.info.form.title ? "рџ‘Џ " + this.replaceName("" + this.info.form.title) : "рџ‘Џ " + this.$t("РћС‚Р»РёС‡РЅРѕ. РћСЃС‚Р°Р»СЃСЏ РїРѕСЃР»РµРґРЅРёР№ С€Р°Рі!")
            },
            title2: function() {
                return this.info.form.title2 ? "рџ‘Џ " + this.replaceName("" + this.info.form.title2) : "рџ‘Џ " + this.$t("РћС‚Р»РёС‡РЅРѕ. РћСЃС‚Р°Р»СЃСЏ РїРѕСЃР»РµРґРЅРёР№ С€Р°Рі!")
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(182),
        n = s.n(i),
        a = s(18),
        r = s.n(a),
        o = s(2),
        c = s.n(o),
        u = s(1),
        l = s.n(u),
        d = s(3),
        g = s(348),
        h = s(338),
        m = s(56),
        f = s(55);
    e.a = {
        components: {
            StepFields: g.a,
            Messengers: h.a
        },
        beforeMount: function() {
            this.$store.commit("form/setFields", {
                fields1: l.a.get(this.info, "form.fields1", []),
                fields2: l.a.get(this.info, "form.fields2", [])
            })
        },
        mounted: function() {
            var t = this;
            !l.a.get(this.info, "form.redirect") || this.fields1.length || this.fields2.length || this.hasMessengers || this.$store.dispatch("form/saveLead", this.data).then(function() {
                t.redirect()
            }), this.fields1.length || this.$store.commit("form/showStep2"), this.hasMessengers && !this.hasContacts && (this.messengersPage = !0)
        },
        data: function() {
            return {
                messengersPage: !1,
                messengerSelected: !1,
                name: "",
                phone: "",
                maskedPhone: "",
                email: "",
                agreement: !0,
                messenger: {},
                loading: !1
            }
        },
        computed: c()({}, s.i(d.a)("quiz", ["info", "isTemplate", "settings"]), s.i(d.a)("form", ["isStep2", "contacts"]), s.i(d.b)("quiz", ["data", "resultsPosition", "result", "results", "isMultipleResults"]), s.i(d.b)("form", {
            fields1: "getEnabledFieldsOnStep1",
            fields2: "getEnabledFieldsOnStep2"
        }), {
            button: function() {
                return this.replaceName(this.info.form.button)
            },
            button2: function() {
                return this.replaceName(this.info.form.button2)
            },
            button3: function() {
                return this.replaceName(this.info.form.button3)
            },
            isStep2FieldsExist: function() {
                return !!this.fields2.length
            },
            phoneMask: function() {
                var t = l.a.get(this.info, "form.phoneMask");
                return t ? t = t.replace("+", "\\+") : null
            },
            canCreateOrder: function() {
                var t = this;
                return (!l.a.find(this.fields1, {
                    key: "name"
                }) || 1 !== this.fields1.length) && l.a.filter(this.fields1, function(e) {
                    return !1 === e.required && !t[e.key]
                }).length !== this.fields1.length
            },
            formHints: function() {
                return {
                    name: l.a.get(this.info.form, "nameHint", this.$t("Р’РІРµРґРёС‚Рµ РёРјСЏ")),
                    phone: l.a.get(this.info.form, "phoneHint", this.$t("Р’РІРµРґРёС‚Рµ С‚РµР»РµС„РѕРЅ")),
                    email: l.a.get(this.info.form, "emailHint", this.$t("Р’РІРµРґРёС‚Рµ email"))
                }
            },
            hasContacts: function() {
                var t = l.a.get(this.info, "form.showContacts", !1),
                    e = l.a.get(this.info, "form.showMessengers", !1),
                    s = !e && !t;
                return t || s
            },
            hasMessengers: function() {
                return l.a.get(this.info, "form.showMessengers", !1)
            },
            sendOnFirstStep: function() {
                return l.a.get(this.info, "form.sendOnFirstStep", !0)
            },
            messengers: function() {
                return l.a.get(this.info, "form.messengers", [])
            },
            redirectUrl: function() {
                return l.a.get(this.info, "form.redirect")
            },
            policy: function() {
                return l.a.get(this.settings, "policy", "/agreement")
            }
        }),
        methods: {
            isRequiredField: function(t) {
                return !0 === t.required || l.a.isUndefined(t.required)
            },
            setContacts: function(t) {
                if (!1 === t.email && !this.isStep2 && 1 === this.fields1.length) return void this.$store.commit("form/showStep2");
                this.name = t.name, this.phone = t.phone, this.email = String(t.email), this.$store.commit("form/setContacts", {
                    name: this.name,
                    email: this.email,
                    phone: this.phone
                })
            },
            replaceName: function(t) {
                return t && this.name ? t.replace(/\[name\]/g, this.name) : t
            },
            validateFields: function(t) {
                var e = this,
                    s = !0,
                    i = this["fields" + t];
                return !!i && (i.forEach(function(t) {
                    if (t.enabled && !e[t.key] && e.isRequiredField(t)) return s = !1, !1
                }), s)
            },
            send: function() {
                var t = this;
                return this.agreement ? !(!this.isStep2 && !this.validateFields(1) && this.hasContacts) && (!(this.isStep2 && !this.validateFields(2) && this.hasContacts) && ((this.isStep2 || this.canCreateOrder || !this.isStep2FieldsExist) && (this.isStep2 || !this.isStep2FieldsExist || l.a.get(this.info, "form.sendOnFirstStep", !0)) ? (this.loading = !0, this.$store.commit("form/setContacts", {
                    name: this.name,
                    email: this.email,
                    phone: this.phone
                }), this.isTemplate ? (r.a.resolve().then(function() {
                    t.afterSave({})
                }), !0) : (this.$store.dispatch("form/saveLead", this.data).then(function(e) {
                    t.afterSave(e.data)
                }), !0)) : (this.$store.commit("form/showStep2"), !1))) : void(this.agreement = !0)
            },
            sendMessenger: function() {
                var t = this;
                if (!this.agreement) return void(this.agreement = !0);
                if (this.messenger.value) return this.loading = !0, this.$store.commit("form/setContacts", n()({}, this.messenger.name, this.messenger.value)), this.data.extra.notify = "now", this.isTemplate ? (r.a.resolve().then(function() {
                    t.afterSave({})
                }), !0) : (this.$store.dispatch("form/saveLead", this.data).then(function(e) {
                    t.afterSave(e.data)
                }), !0)
            },
            afterSave: function(t) {
                return this.loading = !1, m.a.set("answerId", t.id), m.a.updateSessionLiveTime(), this.messengersPage || !this.isStep2FieldsExist || this.isStep2 ? (this.isStep2FieldsExist && this.$store.dispatch("quiz/analyticEvent", "marquiz-contacts2"), this.$store.dispatch("quiz/analyticEvent", "marquiz-finish"), "afterForm" === this.resultsPosition ? this.isMultipleResults ? void this.$store.dispatch("quiz/showResults") : "redirect" === this.result.type ? void this.redirect(this.result.link) : void this.$store.dispatch("quiz/showResult") : this.redirectUrl ? void this.redirect() : void this.$store.commit("form/showThankPage")) : void this.$store.commit("form/showStep2")
            },
            redirect: function(t) {
                s.i(f.a)(window, t || this.redirectUrl, this.contacts)
            }
        },
        watch: {
            isStep2: function(t) {
                t && this.$store.dispatch("quiz/analyticEvent", "marquiz-contacts1")
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(318),
        n = s.n(i),
        a = s(319),
        r = s.n(a),
        o = s(321),
        c = s.n(o),
        u = s(320),
        l = s.n(u),
        d = s(316),
        g = s.n(d),
        h = s(317),
        m = s.n(h),
        f = s(1),
        M = s.n(f);
    e.a = {
        props: {
            title: String,
            activeMessengers: Array,
            value: {
                type: Object,
                default: function() {
                    return {
                        value: null,
                        label: null,
                        name: null
                    }
                }
            }
        },
        mounted: function() {
            this.activeMessengers && 1 === this.activeMessengers.length && (this.selectedMessenger = this.activeMessengers[0], this.selectMessenger(this.currentMessenger))
        },
        data: function() {
            return {
                contact: M.a.get(this.value, "value"),
                icons: {
                    vk: l.a,
                    telegram: n.a,
                    viber: r.a,
                    whatsapp: c.a,
                    messenger: g.a,
                    skype: m.a
                },
                messengers: [{
                    name: "vk",
                    title: this.$t("Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ РёР»Рё id") + " VK",
                    label: "VKontakte",
                    placeholder: "id101101101"
                }, {
                    name: "viber",
                    title: this.$t("Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ") + " Viber",
                    label: "Viber",
                    placeholder: "+79112223344"
                }, {
                    name: "whatsapp",
                    title: this.$t("Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ") + " Whatsapp",
                    label: "WhatsApp",
                    placeholder: "+79112223344"
                }, {
                    name: "telegram",
                    title: this.$t("Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ РёР»Рё Р»РѕРіРёРЅ") + " Telegram",
                    label: "Telegram",
                    placeholder: "+79112223344"
                }, {
                    name: "messenger",
                    title: this.$t("Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ РёР»Рё id") + " Messenger",
                    label: "Messenger",
                    placeholder: "login"
                }, {
                    name: "skype",
                    title: this.$t("Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ") + " Skype",
                    label: "Skype",
                    placeholder: "login"
                }],
                selectedMessenger: ""
            }
        },
        computed: {
            computedMessengers: function() {
                var t = this;
                return M.a.map(this.activeMessengers, function(e) {
                    return M.a.find(t.messengers, function(t) {
                        return t.name === e
                    })
                })
            },
            hasMessengers: function() {
                return M.a.get(M.a.find(this.messengers, function(t) {
                    return t.value
                }), "value", !1)
            },
            currentMessenger: function() {
                var t = this;
                return M.a.find(this.computedMessengers, function(e) {
                    return e.name === t.selectedMessenger
                }) || {}
            }
        },
        methods: {
            selectMessenger: function(t) {
                var e = this;
                this.selectedMessenger = t.name, this.$nextTick(function() {
                    "vk" === e.selectedMessenger && e.$route && e.$route.query.viewer_id ? e.contact = "id" + e.$route.query.viewer_id : e.contact = null, e.$refs.login && window.innerWidth > 767 && e.$refs.login.focus()
                }), this.$emit("select")
            },
            back: function() {
                this.selectedMessenger = "", this.$emit("input", {}), this.$emit("unselect")
            }
        },
        watch: {
            contact: function(t) {
                var e = this,
                    s = M.a.find(this.messengers, function(t) {
                        return t.name === e.selectedMessenger
                    });
                this.$emit("input", {
                    name: s.name,
                    value: t,
                    label: s.label
                })
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(1),
        r = (s.n(a), s(3)),
        o = s(334);
    e.a = {
        components: {
            DiscountLabel: o.a
        },
        props: {
            result: Object
        },
        computed: n()({}, s.i(r.a)("quiz", {
            discount: function(t) {
                return t.fixedDiscount
            }
        }), s.i(r.b)("quiz", ["currencySymbol", "discountCurrencySymbol", "isIncreasingPercentDiscount"]), {
            oldPrice: function() {
                return this.discount ? this.result.cost : null
            },
            totalPrice: function() {
                var t = this.result.cost;
                return this.discount ? this.isIncreasingPercentDiscount ? t - t * this.discount / 100 : t - this.discount : t
            }
        }),
        methods: {
            priceLabel: function(t) {
                if (!t) return "";
                var e = s.i(a.get)(this.result, "costType", "exact"),
                    i = {
                        cost: this.$format.number(t),
                        currency: this.currencySymbol
                    };
                return "exact" === e ? this.$t("{cost} {currency}", i) : "up" === e ? this.$t("РґРѕ {cost} {currency}", i) : "from" === e ? this.$t("РѕС‚ {cost} {currency}", i) : void 0
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        name: "ProgressBar",
        props: {
            percent: Number,
            finish: Boolean,
            mobile: Boolean
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(358),
        n = s(353),
        a = s(355),
        r = s(354),
        o = s(356),
        c = s(351),
        u = s(357);
    e.a = {
        components: {
            Variants: i.a,
            Images: n.a,
            InputAnswer: r.a,
            OneImage: a.a,
            SelectAnswer: o.a,
            DateAnswer: c.a,
            SliderAnswer: u.a
        },
        props: {
            question: Object
        },
        computed: {
            hasImages: function() {
                var t = !1;
                return this.question.answers.forEach(function(e) {
                    e.image && (t = !0)
                }), t
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(121),
        r = s(331),
        o = s(16),
        c = s(3),
        u = s(339),
        l = s(335),
        d = s(124),
        g = s(122),
        h = s(46),
        m = s(30),
        f = s(344),
        M = s(341),
        p = s(345),
        v = s(346),
        w = s(1),
        _ = (s.n(w), s(340)),
        L = s(130),
        C = s(361);
    e.a = {
        components: {
            ResultLoader: f.a,
            CheckRounded: L.a,
            CheckForm: C.a,
            FinalPage: d.a,
            FinalPageV2: l.a,
            QuizButtons: _.a,
            Assistant: a.a,
            AssistantMobile: r.a,
            Discount: g.a,
            Question: u.a,
            Bonuses: o.a,
            ProgressBar: h.a,
            WhiteLabel: m.a,
            SidebarMobile: v.a,
            Results: p.a,
            Result: M.a
        },
        mounted: function() {
            this.$refs.quiz && this.changeHeight()
        },
        data: function() {
            return {
                animationType: "forward",
                frameHeight: null,
                heightAfterShowAssistant: null,
                heightBeforeShowAssistant: null,
                slideDuration: .4
            }
        },
        computed: n()({}, s.i(c.a)("quiz", ["questions", "activeQuestion", "info", "leadForm", "id", "isResultsShow", "isResultShow", "isResultLoaderShow", "hint"]), s.i(c.b)("quiz", ["countAllQuestions", "getPassedPercent", "getAnswerValue", "getIsFilled", "getLastStep", "getQuestion", "isLastStep", "isWhiteLabelActive", "result"]), {
            discount: function() {
                return s.i(w.get)(this.info, "marketing.discount.value") || s.i(w.get)(this.info, "marketing.discount.percent")
            },
            showRightSidebar: function() {
                return this.discount || this.getQuestion && this.getQuestion.text || this.bonuses.length
            },
            bonuses: function() {
                return s.i(w.get)(this.info, "marketing.bonuses", [])
            },
            getNotRequired: function() {
                return s.i(w.get)(this.getQuestion, "notRequired", !1)
            },
            getCanMany: function() {
                var t = ["variants", "images", "select"];
                return "many" === s.i(w.get)(this.getQuestion, "select") && s.i(w.includes)(t, s.i(w.get)(this.getQuestion, "type"))
            },
            questionType: function() {
                return s.i(w.get)(this.getQuestion, "type")
            }
        }),
        methods: n()({
            get: w.get,
            isEmpty: w.isEmpty
        }, s.i(c.c)("quiz", ["prevQuestion", "nextQuestion", "showLeadForm"]), {
            beforeLeave: function(t) {
                t.style.opacity = 1
            },
            leave: function(t) {
                t.style.transition = "all " + this.slideDuration / 2 + "s ease", t.style.transform = "back" === this.animationType ? "translateX(10%)" : "translateX(-10%)", t.style.opacity = 0
            },
            beforeEnter: function(t) {
                t.style.transform = "translateX(0)"
            },
            enter: function(t) {
                var e = this;
                this.$nextTick(function() {
                    t.style.transform = "back" === e.animationType ? "translateX(-10%)" : "translateX(10%)", t.style.opacity = 0
                })
            },
            afterEnter: function(t) {
                t.style.transition = "all " + this.slideDuration / 2 + "s ease", t.style.transform = "translateX(0)", t.style.opacity = 1
            },
            changeHeight: function() {
                var t = this;
                this.$nextTick(function() {
                    var e = void 0,
                        i = t.$refs.quiz.clientHeight;
                    if ("images" === t.questionType) {
                        var n = s.i(w.get)(t.$refs, "question.0.$el");
                        if (!n) return;
                        e = i - n.clientHeight + n.scrollHeight + 15, e > 650 && (e = 650), e < i && (e = i), console.log("height", i, e), e && t.$quizFrame.changeHeight(t.id, e)
                    }
                })
            }
        }),
        watch: {
            activeQuestion: function(t, e) {
                this.animationType = t < e ? "back" : "forward", this.changeHeight()
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(46),
        n = s(359),
        a = s(130),
        r = s(360);
    e.a = {
        name: "QuizButtons",
        props: {
            passedPercent: Number,
            activeQuestion: Number,
            isLast: Boolean,
            filled: Boolean,
            notRequired: Boolean
        },
        components: {
            CheckDone: r.a,
            CheckRounded: a.a,
            ProgressBar: i.a,
            Arrow: n.a
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(1),
        r = (s.n(a), s(3)),
        o = s(55),
        c = s(125),
        u = s(16),
        l = s(30);
    e.a = {
        components: {
            PriceLabel: c.a,
            Bonuses: u.a,
            WhiteLabel: l.a
        },
        computed: n()({}, s.i(r.a)("quiz", ["results", "selectedResult"]), s.i(r.a)("form", ["contacts"]), s.i(r.a)("quiz", {
            bonuses: function(t) {
                return s.i(a.get)(t, "info.marketing.bonuses", [])
            }
        }), s.i(r.b)("quiz", ["result"]), {
            bgUrl: function() {
                return this.result.image ? this.$image.url(this.result.image, {
                    width: 750
                }) : null
            },
            hasButton: function() {
                return "beforeForm" === this.results.view || ("afterForm" === this.results.view ? this.result.link : void 0)
            },
            hasImage: function() {
                return !s.i(a.isEmpty)(this.result.image)
            },
            buttonText: function() {
                return this.result.buttonText ? this.result.buttonText : this.$t("РЈР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅРµРµ")
            }
        }),
        methods: {
            action: function() {
                "beforeForm" === this.results.view && this.$store.dispatch("quiz/showLeadForm"), "afterForm" === this.results.view && this.redirect()
            },
            redirect: function() {
                this.result.link && s.i(o.a)(window, this.result.link, this.contacts)
            },
            back: function() {
                this.$store.commit("quiz/selectResult", null), this.$store.commit("quiz/showResults")
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        props: {
            results: {
                type: Object,
                default: {}
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(1),
        n = (s.n(i), s(125));
    e.a = {
        components: {
            PriceLabel: n.a
        },
        props: {
            result: {
                type: Object,
                default: {}
            },
            buttonText: String
        },
        computed: {
            bgUrl: function() {
                return this.result.image ? this.$image.url(this.result.image, {
                    width: 750
                }) : null
            },
            hasImage: function() {
                return !s.i(i.isEmpty)(this.result.image)
            }
        },
        methods: {
            selectResult: function() {
                this.$store.commit("quiz/selectResult", this.result), this.$store.dispatch("quiz/showResult")
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(35),
        n = s.n(i),
        a = s(34),
        r = s.n(a),
        o = s(324),
        c = s.n(o);
    e.a = {
        mounted: function() {
            var t = this;
            return r()(n.a.mark(function e() {
                var s;
                return n.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            s = setInterval(function() {
                                t.percent < 100 ? t.percent += 1 : clearInterval(s)
                            }, 20);
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }, e, t)
            }))()
        },
        data: function() {
            return {
                resultLoader: c.a,
                percent: 0
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(3),
        r = s(343),
        o = s(342),
        c = s(30);
    e.a = {
        components: {
            ResultCard: r.a,
            ResultActionCard: o.a,
            WhiteLabel: c.a
        },
        computed: n()({}, s.i(a.a)("quiz", ["results"]), s.i(a.b)("quiz", ["suitableResults"]), {
            swiperOption: function() {
                var t = 3,
                    e = this.suitableResults.length;
                return (this.results.skip || this.results.retry) && (e += 1), e < 3 && (t = 2), {
                    navigation: {
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    },
                    keyboard: !0,
                    mousewheel: !0,
                    slidesPerView: t,
                    slidesPerGroup: t,
                    grabCursor: !0,
                    centredSlides: !0,
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        hide: !1
                    },
                    updateOnImagesReady: !1,
                    preloadImages: !1,
                    spaceBetween: 30
                }
            }
        })
    }
}, function(t, e, s) {
    "use strict";
    var i = s(122),
        n = s(16);
    e.a = {
        name: "MobileSidebar",
        components: {
            Bonuses: n.a,
            Discount: i.a
        },
        props: {
            bonuses: Array,
            countQuestions: Number,
            discount: [Number, String],
            autoshow: {
                type: Boolean,
                default: !0
            }
        },
        data: function() {
            return {
                expandedDiscount: !1,
                expandedBonuses: !1
            }
        },
        computed: {
            isExpandedDiscount: function() {
                return {
                    "is-expanded": this.expandedDiscount
                }
            },
            isExpandedBonuses: function() {
                return {
                    "is-expanded": this.expandedBonuses
                }
            }
        },
        mounted: function() {
            var t = this;
            this.autoshow && (this.expandedDiscount = !0, this.expandedBonuses = !0, setTimeout(function() {
                t.expandedDiscount = !1
            }, 2e3), setTimeout(function() {
                t.expandedBonuses = !1
            }, 3500))
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(3),
        r = s(1),
        o = s.n(r),
        c = s(10),
        u = s.n(c),
        l = s(14),
        d = s.n(l),
        g = s(30),
        h = s(16),
        m = s(315),
        f = s.n(m);
    e.a = {
        components: {
            WhiteLabel: g.a,
            Bonuses: h.a
        },
        data: function() {
            return {
                icons: {
                    check: f.a
                },
                closing: !1
            }
        },
        computed: n()({}, s.i(a.a)("quiz", {
            bonuses: function(t) {
                return o.a.get(t, "info.marketing.bonuses", [])
            },
            title: function(t) {
                return o.a.get(t, "info.startPage.title")
            },
            subtitle: function(t) {
                return o.a.get(t, "info.startPage.subtitle")
            },
            buttonText: function(t) {
                return o.a.get(t, "info.startPage.buttonText")
            },
            bg: function(t) {
                return o.a.get(t, "info.startPage.bg", {})
            }
        }), s.i(a.b)("quiz", ["isWhiteLabelActive"]), {
            bgUrl: function() {
                if (!this.bg.url) return null;
                var t = {
                    cloud_name: "hgwipn3sa",
                    secure: "https:" === window.location.protocol,
                    dpr: d()() ? "2.0" : "1.0",
                    fetch_format: "auto",
                    source: "upload"
                };
                return window.innerHeight <= 650 && window.innerWidth >= 768 && (t.height = 650), window.innerWidth < 768 && (t.width = 767), u()(this.bg.name, t)
            }
        }),
        methods: {
            close: function() {
                var t = this;
                this.closing = !0, setTimeout(function() {
                    t.$store.commit("quiz/startQuiz")
                }, 1e3)
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(1),
        n = s.n(i),
        a = s(332);
    e.a = {
        components: {
            BMaskedInput: a.a
        },
        mounted: function() {
            this.focusInput()
        },
        props: {
            fields: Array,
            hints: Object,
            phoneMask: String
        },
        data: function() {
            return {
                email: null,
                phone: null,
                name: null,
                maskedPhone: null
            }
        },
        computed: {
            maskPlaceholder: function() {
                return this.phoneMask ? this.phoneMask.replace("\\", "") : null
            },
            emittedValue: function() {
                return {
                    email: this.email || "",
                    phone: this.phone || "",
                    name: this.name || ""
                }
            }
        },
        methods: {
            isRequiredField: function(t) {
                return !0 === t.required || n.a.isUndefined(t.required)
            },
            focusInput: function() {
                var t = this;
                window.innerWidth < 768 || this.$nextTick(function() {
                    if (t.$refs.fields && t.$refs.fields.length) {
                        var e = t.$refs.fields[0].$refs.input;
                        e.$refs && (e = e.$refs.input), e.checkValidity || (e.checkValidity = function() {}), e.focus()
                    }
                })
            }
        },
        watch: {
            fields: function() {
                this.focusInput()
            },
            emittedValue: function(t) {
                this.$emit("input", t)
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(16),
        n = s(123);
    e.a = {
        components: {
            Bonuses: i.a,
            FinalDiscount: n.a
        },
        props: {
            discount: [Number, String],
            currency: String,
            bonuses: Array,
            thanksText: String
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(3);
    e.a = {
        name: "WhiteLabel",
        computed: n()({}, s.i(a.b)("quiz", ["isWhiteLabelActive"]))
    }
}, function(t, e, s) {
    "use strict";
    var i = s(128);
    e.a = {
        components: {
            Hint: i.a
        },
        props: {
            answer: {
                type: Object
            },
            checked: {
                type: Boolean
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(3),
        r = s(1),
        o = s.n(r);
    e.a = {
        props: {
            question: Object
        },
        data: function() {
            return {
                timeFrom: o.a.get(this.$store.getters["quiz/getAnswerValue"], "timeFrom", new Date((new Date).setHours(9, 0))),
                timeTo: o.a.get(this.$store.getters["quiz/getAnswerValue"], "timeTo", new Date((new Date).setHours(18, 0))),
                date: o.a.get(this.$store.getters["quiz/getAnswerValue"], "date", this.$store.getters["quiz/getAnswerValue"]),
                from: o.a.get(this.$store.getters["quiz/getAnswerValue"], "from", null),
                to: o.a.get(this.$store.getters["quiz/getAnswerValue"], "to", null),
                time: o.a.get(this.$store.getters["quiz/getAnswerValue"], "time", new Date((new Date).setHours(9, 0))),
                dayNames: [this.$t("Р’СЃ"), this.$t("РџРЅ"), this.$t("Р’С‚"), this.$t("РЎСЂ"), this.$t("Р§С‚"), this.$t("РџС‚"), this.$t("РЎР±")],
                monthNames: [this.$t("РЇРЅРІР°СЂСЊ"), this.$t("Р¤РµРІСЂР°Р»СЊ"), this.$t("РњР°СЂС‚"), this.$t("РђРїСЂРµР»СЊ"), this.$t("РњР°Р№"), this.$t("РСЋРЅСЊ"), this.$t("РСЋР»СЊ"), this.$t("РђРІРіСѓСЃС‚"), this.$t("РЎРµРЅС‚СЏР±СЂСЊ"), this.$t("РћРєС‚СЏР±СЂСЊ"), this.$t("РќРѕСЏР±СЂСЊ"), this.$t("Р”РµРєР°Р±СЂСЊ")]
            }
        },
        computed: {
            isRange: function() {
                return this.question.options.isRange
            },
            hasTime: function() {
                return this.question.options.hasTime
            },
            dateObject: function() {
                return this.isRange ? {
                    from: this.from,
                    to: this.to,
                    timeFrom: this.timeFrom,
                    timeTo: this.timeTo
                } : this.hasTime ? {
                    date: this.date,
                    time: this.time
                } : this.date
            }
        },
        methods: n()({}, s.i(a.c)("quiz", ["nextQuestion"]), {
            getFormattedTime: function(t) {
                if (t) {
                    return ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2)
                }
                return null
            }
        }),
        watch: {
            from: function() {
                this.$store.dispatch("quiz/setAnswer", this.dateObject)
            },
            to: function() {
                this.$store.dispatch("quiz/setAnswer", this.dateObject)
            },
            timeFrom: function() {
                this.$store.dispatch("quiz/setAnswer", this.dateObject)
            },
            timeTo: function() {
                this.$store.dispatch("quiz/setAnswer", this.dateObject)
            },
            time: function() {
                this.$store.dispatch("quiz/setAnswer", this.dateObject)
            },
            date: function() {
                this.$store.dispatch("quiz/setAnswer", this.dateObject)
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        props: {
            answer: Object
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(33),
        n = s.n(i),
        a = s(1),
        r = s.n(a),
        o = s(10),
        c = s.n(o),
        u = s(14),
        l = s.n(u),
        d = s(128),
        g = {
            vertical: {
                width: 180,
                height: 240,
                quality: 100,
                crop: "fill",
                fetch_format: "auto"
            },
            square: {
                width: 240,
                height: 240,
                quality: 100,
                crop: "fill",
                fetch_format: "auto"
            },
            horizontal: {
                width: 380,
                height: 240,
                quality: 100,
                crop: "fill",
                fetch_format: "auto"
            }
        };
    e.a = {
        components: {
            Hint: d.a
        },
        mounted: function() {
            var t = this;
            this.$refs.img && (this.$refs.img.onload = function() {
                t.imgLoaded = !0
            })
        },
        props: {
            answer: {
                type: Object
            },
            checked: {
                type: Boolean
            },
            type: String
        },
        data: function() {
            return {
                imgLoaded: !1
            }
        },
        computed: {
            imageUrl: function() {
                if (!this.answer.image) return null;
                var t = {
                    cloud_name: "hgwipn3sa",
                    secure: "https:" === window.location.protocol,
                    dpr: l()() ? "2.0" : "1.0",
                    fetch_format: "auto"
                };
                return "cloudinary" === this.answer.image.provider ? c()(this.answer.image.name, n()(t, {
                    source: "upload"
                }, r.a.get(g, this.type, g.vertical))) : c()("https://marquiz.blob.core.windows.net/" + this.answer.image.url, n()(t, {
                    source: "fetch"
                }, r.a.get(g, this.type, g.vertical)))
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(1),
        r = (s.n(a), s(352)),
        o = s(3),
        c = s(172);
    e.a = {
        components: {
            AnswerImage: r.a
        },
        props: {
            answers: Array,
            select: String,
            type: String
        },
        data: function() {
            return {
                val: this.$store.getters["quiz/getAnswerValue"],
                swiperOption: {
                    navigation: {
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next"
                    },
                    keyboard: !0,
                    mousewheel: !0,
                    slidesPerView: "auto",
                    grabCursor: !0,
                    spaceBetween: 30,
                    centredSlides: !1,
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        hide: !1
                    },
                    updateOnImagesReady: !1,
                    preloadImages: !1,
                    breakpoints: s.i(c.a)(this.type)
                }
            }
        },
        methods: n()({}, s.i(o.c)("quiz", ["nextQuestion"]), {
            isChecked: function(t) {
                var e = !1;
                return this.val && (e = "one" === this.select ? this.val === t : s.i(a.indexOf)(this.val, t) >= 0), e
            },
            getIsWider: function() {
                var t = 0;
                return this.$refs.answer.forEach(function(e) {
                    t += e.clientWidth
                }), this.$refs.answers.clientWidth <= t
            }
        }),
        watch: {
            val: function(t) {
                t && this.other && "one" === this.select && t !== this.other && (this.other = null), this.$store.dispatch("quiz/setAnswer", t)
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(3);
    e.a = {
        props: {
            options: Object
        },
        mounted: function() {
            "inline" === this.mode && 0 === this.activeQuestion || this.$refs.input.focus()
        },
        data: function() {
            return {
                val: this.$store.getters["quiz/getAnswerValue"]
            }
        },
        computed: n()({}, s.i(a.a)("quiz", ["mode", "activeQuestion"])),
        methods: n()({}, s.i(a.c)("quiz", ["nextQuestion"])),
        watch: {
            val: function(t) {
                this.$store.dispatch("quiz/setAnswer", t)
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(127),
        r = s(1),
        o = (s.n(r), s(3)),
        c = s(10),
        u = s.n(c),
        l = s(14),
        d = s.n(l);
    e.a = {
        components: {
            Answer: a.a
        },
        data: function() {
            var t = this.$store.getters["quiz/getAnswerValue"];
            return s.i(r.isArray)(t) && (t = null), {
                val: t,
                other: this.getOtherValue(t),
                imgLoaded: !1
            }
        },
        props: {
            answers: Array,
            hasOther: Boolean,
            startText: String
        },
        computed: {
            otherIndex: function() {
                return this.getOtherIndex(this.val)
            },
            otherValue: function() {
                return this.getOtherValue(this.val)
            },
            activeImage: function() {
                if (!this.val) return null;
                var t = s.i(r.find)(this.answers, {
                    title: this.val
                });
                return t ? t.image : null
            },
            imageUrl: function() {
                if (!this.activeImage) return null;
                var t = "cloudinary" === this.activeImage.provider ? this.activeImage.name : "https://marquiz.blob.core.windows.net/" + this.activeImage.url,
                    e = {
                        cloud_name: "hgwipn3sa",
                        source: "cloudinary" === this.activeImage.provider ? "upload" : "fetch",
                        secure: "https:" === window.location.protocol,
                        width: 380,
                        height: 307,
                        crop: "fill",
                        dpr: d()() ? "2.0" : "1.0",
                        fetch_format: "auto"
                    };
                return u()(t, e)
            },
            dummyText: function() {
                return !this.val && this.startText ? this.startText : !this.val && document.body.clientWidth <= 767 ? this.$t("Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃРЅРёР·Сѓ") : this.val ? this.otherValue ? this.val : this.imageUrl ? void 0 : this.val : this.$t("Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃР»РµРІР°")
            }
        },
        methods: n()({}, s.i(o.c)("quiz", ["nextQuestion"]), {
            getOtherIndex: function(t) {
                var e = s.i(r.difference)(t, s.i(r.map)(this.answers, "title"));
                return e.length ? s.i(r.indexOf)(t, e[0]) : null
            },
            getOtherValue: function(t) {
                return s.i(r.includes)(s.i(r.map)(this.answers, "title"), t) ? null : t
            },
            setOtherVal: function(t) {
                this.val = t
            },
            isChecked: function(t) {
                return this.val === t
            },
            getIsWider: function() {
                var t = 0;
                return this.$refs.answer.forEach(function(e) {
                    t += e.clientWidth
                }), this.$refs.answers.clientWidth <= t
            },
            isOther: function(t) {
                return s.i(r.indexOf)(s.i(r.map)(this.answers, "title"), t) >= 0
            },
            checkOtherValue: function(t) {
                t || (this.other = "")
            }
        }),
        watch: {
            other: function(t) {
                null !== t && this.setOtherVal(t)
            },
            val: function(t) {
                t && this.other && t !== this.other && (this.other = null), this.$store.dispatch("quiz/setAnswer", t)
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(3);
    e.a = {
        props: {
            question: Object
        },
        data: function() {
            return {
                val: this.$store.getters["quiz/getAnswerValue"]
            }
        },
        methods: n()({}, s.i(a.c)("quiz", ["nextQuestion"])),
        watch: {
            val: function(t) {
                this.$store.dispatch("quiz/setAnswer", t)
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(3),
        r = s(422),
        o = s.n(r),
        c = s(15),
        u = s.n(c);
    e.a = {
        components: {
            VueSlider: o.a
        },
        props: {
            question: Object
        },
        data: function() {
            return {
                val: this.$store.getters["quiz/getAnswerValue"],
                bgStyle: {
                    backgroundColor: "var(--color-lighten)"
                },
                processStyle: {
                    backgroundColor: "var(--color)"
                },
                tooltipStyle: {
                    backgroundColor: "var(--color)",
                    borderColor: "var(--color)"
                }
            }
        },
        computed: {
            computedMin: function() {
                return this.question.options.range ? Number(this.question.options.range.min) || 0 : null
            },
            computedMax: function() {
                return this.question.options.range ? Number(this.question.options.range.max) || 100 : null
            },
            computedMinFormatted: function() {
                return u()(this.computedMin).format("0,0")
            },
            computedMaxFormatted: function() {
                return u()(this.computedMax).format("0,0")
            },
            isRange: function() {
                return this.question.options.isRange
            },
            formattedValue: function() {
                return this.isRange ? {
                    from: this.val[0],
                    to: this.val[1]
                } : this.val
            }
        },
        methods: n()({}, s.i(a.c)("quiz", ["nextQuestion"]), {
            formatValue: function(t) {
                return u()(t).format("0,0")
            }
        }),
        watch: {
            val: function(t) {
                this.$store.dispatch("quiz/setAnswer", this.isRange ? this.formattedValue : t)
            }
        },
        created: function() {
            if (this.val && 0 !== this.val.length) this.val = this.isRange ? [this.val.from, this.val.to] : this.val;
            else {
                var t = this.question.options.range.min || 0,
                    e = this.question.options.range.max || 100,
                    s = [Math.floor(t + .25 * (e - t)), Math.floor(t + .75 * (e - t))];
                this.val = this.isRange ? s : Math.floor((t + e) / 2)
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(2),
        n = s.n(i),
        a = s(127),
        r = s(1),
        o = (s.n(r), s(3));
    e.a = {
        components: {
            Answer: a.a
        },
        data: function() {
            var t = this.$store.getters["quiz/getAnswerValue"];
            return {
                val: t,
                other: this.getOtherValue(t)
            }
        },
        props: {
            answers: Array,
            select: String,
            hasOther: Boolean
        },
        computed: {
            otherIndex: function() {
                return this.getOtherIndex(this.val)
            },
            otherValue: function() {
                return this.getOtherValue(this.val)
            }
        },
        methods: n()({}, s.i(o.c)("quiz", ["nextQuestion"]), {
            getOtherIndex: function(t) {
                var e = s.i(r.difference)(t, s.i(r.map)(this.answers, "title"));
                return e.length ? s.i(r.indexOf)(t, e[0]) : null
            },
            getOtherValue: function(t) {
                if ("one" === this.select) return s.i(r.includes)(s.i(r.map)(this.answers, "title"), t) ? null : t;
                if (!t) return null;
                var e = this.getOtherIndex(t);
                return t && e >= 0 ? t[e] : null
            },
            setOtherVal: function(t) {
                "one" === this.select ? this.val = t : null !== this.otherIndex ? t ? this.val[this.otherIndex] = t : this.val.splice(this.otherIndex, 1) : this.val.push(t)
            },
            isChecked: function(t) {
                var e = !1;
                return this.val && (e = "one" === this.select ? this.val === t : s.i(r.indexOf)(this.val, t) >= 0), e
            },
            getIsWider: function() {
                var t = 0;
                return this.$refs.answer.forEach(function(e) {
                    t += e.clientWidth
                }), this.$refs.answers.clientWidth <= t
            },
            isOther: function(t) {
                var e = !0;
                return e = "one" === this.select ? s.i(r.indexOf)(s.i(r.map)(this.answers, "title"), t) >= 0 : s.i(r.difference)(this.val, s.i(r.map)(this.answers, "title")), e
            },
            checkOtherValue: function(t) {
                t || (this.other = "")
            }
        }),
        watch: {
            other: function(t) {
                null !== t && this.setOtherVal(t)
            },
            val: function(t) {
                t && this.other && "one" === this.select && t !== this.other && (this.other = null), this.$store.dispatch("quiz/setAnswer", t)
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        name: "Arrow",
        props: {
            back: Boolean
        }
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        name: "ArrowPoint"
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        name: "CheckDone"
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        name: "CheckRounded"
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        name: "CheckRounded"
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        props: ["down"]
    }
}, function(t, e, s) {
    "use strict";
    var i = s(1),
        n = s.n(i);
    e.a = {
        mounted: function() {
            this.$refs.quizId && n.a.get(this.$refs, "quizId.$refs.input") && this.$refs.quizId.$refs.input.focus()
        },
        props: {
            quizId: String,
            request: Object,
            quizTitle: String
        },
        data: function() {
            return {
                id: null,
                edit: !1
            }
        },
        methods: {
            setGroup: function() {
                var t = this;
                this.$axios.post("v1/vkGroups/setGroup", {
                    request: this.request,
                    quizId: this.id
                }).then(function() {
                    t.$emit("changed")
                }).catch(function(e) {
                    t.$toast.open({
                        message: e.message,
                        type: "is-danger"
                    })
                })
            }
        },
        watch: {
            edit: function(t) {
                var e = this;
                t && (this.id = this.quizId, this.$nextTick(function() {
                    e.$refs.quizId.$refs.input.focus()
                }))
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        methods: {
            close: function() {
                window.close()
            }
        }
    }
}, , , , , , , , , , , , , , , , , , , function(t, e, s) {
    "use strict";
    function i(t) {
        s(273)
    }
    var n = s(58),
        a = s(412),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(242)
    }
    var n = s(63),
        a = s(382),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(250)
    }
    var n = s(65),
        a = s(390),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(271)
    }
    var n = s(66),
        a = s(410),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(239)
    }
    var n = s(70),
        a = s(379),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(258)
    }
    var n = s(73),
        a = s(396),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(269)
    }
    var n = s(85),
        a = s(408),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(235)
    }
    var n = s(87),
        a = s(375),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(233)
    }
    var n = s(96),
        a = s(373),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, "data-v-14468613", null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(275)
    }
    var n = s(99),
        a = s(414),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, "data-v-f03b31e2", null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    var i = s(18),
        n = s.n(i),
        a = s(180),
        r = s.n(a),
        o = s(181),
        c = s.n(o),
        u = s(330),
        l = s.n(u),
        d = s(329),
        g = s.n(d),
        h = s(178),
        m = function() {
            function t(e) {
                r()(this, t), this.vue = e, this.yaCounters = [], this.gaCounter = null, this.isProd = !0
            }
            return c()(t, [{
                key: "event",
                value: function(t) {
                    var e = this;
                    if (this.yaCounters.forEach(function(s) {
                            e.isProd ? window[s] && window[s].reachGoal(t) : console.info("Metrika event: " + t, s)
                        }), this.gaCounter) {
                        var s = "/" + t.replace("-", "/");
                        this.isProd ? this.vue.$ga.page(s) : console.info("GA pageview: " + s, this.gaCounter)
                    }
                    if (this.fb) {
                        var i = "ViewContent";
                        "marquiz-finish" !== t && "marquiz-contacts1" !== t && "marquiz-contacts2" !== t || (i = "Lead"), this.isProd ? this.fb.event(i, {
                            content_name: t
                        }) : console.log("FB pixel event", i, t)
                    }
                }
            }, {
                key: "hit",
                value: function(t) {
                    var e = this;
                    this.yaCounters.forEach(function(s) {
                        e.isProd ? window[s] && window[s].hit(t) : console.info("Metrika page hit: " + t, s)
                    })
                }
            }, {
                key: "init",
                value: function(t) {
                    var e = t.yaCounterId,
                        s = t.gaIds,
                        i = t.fb,
                        a = [];
                    return e && a.push(this.initMetrika(e)), s && a.push(this.initGA(s)), i && a.push(this.initFB(i)), n.a.all(a)
                }
            }, {
                key: "initMetrika",
                value: function(t) {
                    var e = this;
                    return new n.a(function(s) {
                        var i = e,
                            n = "yaCounter" + t;
                        if (!e.isProd) return i.yaCounters.push(n), console.info("Fake Metrika inited", t), void s();
                        ! function(e, a, r) {
                            (a[r] = a[r] || []).push(function() {
                                try {
                                    a[n] = new a.Ya.Metrika2({
                                        id: t,
                                        clickmap: !0,
                                        trackLinks: !0,
                                        accurateTrackBounce: !0,
                                        webvisor: !0,
                                        trackHash: !0
                                    }), i.yaCounters.push(n), s()
                                } catch (t) {
                                    console.log(t)
                                }
                            });
                            var o = e.getElementsByTagName("script")[0],
                                c = e.createElement("script"),
                                u = function() {
                                    o.parentNode.insertBefore(c, o)
                                };
                            c.type = "text/javascript", c.async = !0, c.src = "https://mc.yandex.ru/metrika/tag.js", "[object Opera]" === a.opera ? e.addEventListener("DOMContentLoaded", u, !1) : u()
                        }(document, window, "yandex_metrika_callbacks2")
                    })
                }
            }, {
                key: "initGA",
                value: function(t) {
                    var e = this;
                    return this.gaCounter = t, this.isProd ? new n.a(function(s) {
                        e.vue.use(l.a, {
                            id: t,
                            ready: function() {
                                s()
                            }
                        })
                    }) : (console.info("Fake ga inited", t), n.a.resolve())
                }
            }, {
                key: "initFB",
                value: function(t) {
                    var e = this;
                    return new n.a(function(i) {
                        if (!e.isProd) return console.info("Fake FB pixel inited", t), e.fb = !0, i();
                        s.i(h.a)(), e.vue.use(g.a, {
                            debug: !e.isProd
                        }), e.vue.analytics.fbq.init(t), e.fb = e.vue.analytics.fbq, e.fb.event("PageView"), i()
                    })
                }
            }]), t
        }();
    e.a = {
        install: function(t) {
            t.prototype.$analytic = new m(t), t.analytic = t.prototype.$analytic
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(154),
        n = s.n(i);
    e.a = {
        install: function(t) {
            t.axios = t.prototype.$axios = n.a.create({
                baseURL: "https://17e62d972419277d-eu-west-1.getstatica.com"
            })
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(15),
        n = s.n(i),
        a = s(45),
        r = s.n(a),
        o = s(1),
        c = (s.n(o), new r.a.Converter({
            simplifiedAutoLink: !0,
            openLinksInNewWindow: !0,
            simpleLineBreaks: !0,
            headerLevelStart: 3
        })),
        u = {
            number: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0,0";
                return n()(t).format(e)
            },
            markdown: function(t) {
                return c.makeHtml(t)
            },
            currency: function(t) {
                var e = {
                    USD: "$",
                    RUR: "в‚Ѕ",
                    EUR: "в‚¬",
                    UAH: "в‚ґ",
                    BYB: "Br",
                    KZT: "в‚ё",
                    CNY: "ВҐ"
                };
                return s.i(o.get)(e, t, "")
            },
            price: function(t, e) {
                return e ? this.number(t) + " " + this.currency(e) : this.number(t, "0,0 $")
            }
        };
    e.a = {
        install: function(t) {
            t.prototype.$format = u
        }
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        install: function(t) {
            t.directive("horizontal-scroll", {
                inserted: function(t) {
                    t.onwheel = function(e) {
                        t.scrollLeft += 3 * e.deltaY, e.preventDefault()
                    }
                }
            })
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(117),
        n = s(15),
        a = s.n(n),
        r = s(293),
        o = (s.n(r), s(48));
    a.a.locale("ru");
    var c = function(t) {
        var e = t.translations,
            s = t.lang;
        i.a.init({
            resources: e,
            preload: ["ru", "en"],
            lng: s,
            nsSeparator: !1,
            keySeparator: !1,
            interpolation: {
                prefix: "{",
                suffix: "}",
                format: function(t, e, s) {
                    if (e.split("|").length >= 2) {
                        return e.split(" | ").forEach(function(e, n) {
                            var a = e.trim();
                            t = i.a.options.interpolation.format(t, a, s)
                        }), t
                    }
                    if ("bold" === e) return "<b>" + t + "</b>";
                    if ("rub" === e) return t + "в‚Ѕ";
                    if ("number" == typeof t || "number" === e.split(" ")[0]) {
                        var n = e.split(" ")[1];
                        return "number" !== e || n || (n = "0,0"), a()(t).format(n)
                    }
                }
            },
            debug: !1
        }), i.a.on("languageChanged", function(t) {})
    };
    e.a = {
        install: function(t, e) {
            var s = e.lang,
                n = e.translations;
            c({
                translations: n,
                lang: s
            }), i.a.changeLanguage(s), t.prototype.$t = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e.lng = o.a.state.lang, i.a.t(t, e)
            }, t.filter("translate", function(t) {
                return i.a.t(t)
            })
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(33),
        n = s.n(i),
        a = s(10),
        r = s.n(a),
        o = s(14),
        c = s.n(o);
    e.a = {
        install: function(t) {
            var e = {
                url: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        s = n()({
                            cloud_name: "hgwipn3sa",
                            secure: "https:" === window.location.protocol,
                            dpr: c()() ? "2.0" : "1.0",
                            fetch_format: "auto",
                            source: "upload"
                        }, e);
                    return t.provider ? r()(t.name, s) : r()("https://marquiz.blob.core.windows.net/" + t.url, n()(s, {
                        source: "fetch"
                    }))
                }
            };
            t.prototype.$image = e
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(179),
        n = s.n(i);
    e.a = {
        install: function(t) {
            t.quizFrame = t.prototype.$quizFrame = {
                postMessage: function(t) {
                    window.parent.postMessage(n()(t), "*")
                },
                changeHeight: function(t, e) {
                    this.postMessage({
                        action: "setHeight",
                        id: t,
                        height: e
                    })
                }
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(17),
        n = s(421),
        a = s(126),
        r = s(367);
    i.a.use(n.a), e.a = new n.a({
        mode: "history",
        routes: [{
            path: "/default/:id",
            name: "Default",
            component: a.a
        }, {
            path: "/agreement",
            name: "Agreement",
            component: r.a
        }, {
            path: "/:id",
            name: "ID",
            component: a.a
        }]
    })
}, function(t, e, s) {
    "use strict";
    var i = s(119),
        n = s.n(i),
        a = s(31),
        r = s.n(a),
        o = s(1),
        c = s.n(o);
    e.a = function() {
        var t = r.a.parse(window.location.search),
            e = t.cookies ? JSON.parse(t.cookies) : {},
            s = c.a.get(e, "_ga");
        s && n.a.set("_ga", s)
    }
}, function(t, e) {
    t.exports = {
        be: {
            translation: {
                "Р’Р°С€Р° СЃРєРёРґРєР°": "Р’Р°С€Р° Р·РЅС–Р¶РєР°",
                "РћС‚Р»РёС‡РЅРѕ. РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "Р’С‹РґР°С‚РЅР°. РђРїРѕС€РЅС– РєСЂРѕРє!",
                "РС‚РѕРіРѕРІР°СЏ СЃРєРёРґРєР°": "Р’С‹РЅС–РєРѕРІР°СЏ Р·РЅС–Р¶РєР°",
                "Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ": "Р”Р°РґР°С‚РєРѕРІР°",
                "РџРѕР»СѓС‡РёС‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹": "РђС‚СЂС‹РјР°С†СЊ РІС‹РЅС–РєС–",
                "РЎРїР°СЃРёР±Рѕ": "Р”Р·СЏРєСѓР№",
                "Р“РѕС‚РѕРІРѕ": "Р—СЂРѕР±Р»РµРЅР°",
                "РќР°Р·Р°Рґ": "РќР°Р·Р°Рґ",
                "Р”Р°Р»РµРµ": "Р”Р°Р»РµР№",
                "РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі": "РђРїРѕС€РЅС– РєСЂРѕРє",
                "РЎРґРµР»Р°РЅРѕ СЃ РїРѕРјРѕС‰СЊСЋ": "Р—СЂРѕР±Р»РµРЅР° Р· РґР°РїР°РјРѕРіР°Р№",
                Email: "Email",
                "РРјСЏ": "Р†РјСЏ",
                "РўРµР»РµС„РѕРЅ": "РўСЌР»РµС„РѕРЅ",
                "Р—Р° РєР°Р¶РґС‹Р№ РѕС‚РІРµС‚": "Р—Р° РєРѕР¶РЅС‹ Р°РґРєР°Р·",
                "РЎРєРёРґРєР°": "Р—РЅС–Р¶РєР°",
                "Р”СЂСѓРіРѕРµ": "Р†РЅС€Р°Рµ",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃР»РµРІР°": "Р’С‹Р±РµСЂС‹С†Рµ РІР°СЂС‹СЏРЅС‚ Р°РґРєР°Р·Сѓ Р·Р»РµРІР°",
                "РџСЂРµРґРѕСЃС‚Р°РІР»СЏСЏ РІР°С€Рё РєРѕРЅС‚Р°РєС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ, РІС‹ СЃРѕРіР»Р°С€Р°РµС‚РµСЃСЊ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРё РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ": "РџР°РґР°СЋС‡С‹ РІР°С€С‹ РєР°РЅС‚Р°РєС‚РЅС‹СЏ РґР°РґР·РµРЅС‹СЏ, РІС‹ Р·РіР°РґР¶Р°РµС†РµСЃСЏ РЅР° Р°РїСЂР°С†РѕСћРєСѓ РїРµСЂСЃР°РЅР°Р»СЊРЅР°Р№ С–РЅС„Р°СЂРјР°С†С‹С– Сћ Р°РґРїР°РІРµРґРЅР°СЃС†С– Р·",
                "РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёРј СЃРѕРіР»Р°С€РµРЅРёРµРј": "РєР°СЂС‹СЃС‚Р°С†РєР°Р№ РґР°РјРѕРІР°Р№",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃРЅРёР·Сѓ": "Р’С‹Р±РµСЂС‹С†Рµ РІР°СЂС‹СЏРЅС‚ Р°РґРєР°Р·Сѓ Р·РЅС–Р·Сѓ",
                "РћС‚": "РђРґ",
                "Р”Рѕ": "Р”Р°",
                "РџРЅ": "РџРЅ",
                "Р’С‚": "Р’С‚",
                "РЎСЂ": "РЎСЂ",
                "Р§С‚": "Р§С‚",
                "РџС‚": "РџС‚",
                "РЎР±": "РЎР±",
                "Р’СЃ": "Р’СЃ",
                "РЇРЅРІР°СЂСЊ": "РЎС‚СѓРґР·РµРЅСЊ",
                "Р¤РµРІСЂР°Р»СЊ": "Р›СЋС‚Р°РіР°",
                "РњР°СЂС‚": "РЎР°РєР°РІС–Рє",
                "РђРїСЂРµР»СЊ": "РљСЂР°СЃР°РІС–Рє",
                "РњР°Р№": "РњР°Р№",
                "РСЋРЅСЊ": "Р§СЌСЂРІРµРЅСЊ",
                "РСЋР»СЊ": "Р›С–РїРµРЅСЏ",
                "РђРІРіСѓСЃС‚": "Р–РЅС–РІРµРЅСЊ",
                "РЎРµРЅС‚СЏР±СЂСЊ": "Р’РµСЂР°СЃРµРЅСЊ",
                "РћРєС‚СЏР±СЂСЊ": "РљР°СЃС‚СЂС‹С‡РЅС–РєР°",
                "РќРѕСЏР±СЂСЊ": "Р›С–СЃС‚Р°РїР°РґР°",
                "Р”РµРєР°Р±СЂСЊ": "РЎРЅРµР¶РЅС–",
                "РЈ РјРµРЅСЏ РЅРµС‚ email": "РЈ РјСЏРЅРµ РЅСЏРјР° email",
                "Р’РІРµРґРёС‚Рµ РёРјСЏ": "РљР°Р»С– Р»Р°СЃРєР°, СѓРІСЏРґР·С–С†Рµ С–РјСЏ",
                "Р’РІРµРґРёС‚Рµ С‚РµР»РµС„РѕРЅ": "СѓРІСЏРґР·С–С†Рµ С‚СЌР»РµС„РѕРЅ",
                "Р’РІРµРґРёС‚Рµ email": "РљР°Р»С– Р»Р°СЃРєР°, СѓРІСЏРґР·С–С†Рµ email",
                "mail@mail.ru": "mail@mail.by",
                "РРіРѕСЂСЊ": "Р†РіР°СЂ",
                "+7 (900) 000-00-00": "+375 (11) 111-11-11",
                "РЎРµР№С‡Р°СЃ": "Р—Р°СЂР°Р·",
                "РЎР±СЂРѕСЃ": "РЎРєС–Рґ",
                "Р”РµР№СЃС‚РІСѓРµС‚ РµС‰Рµ": "Р”Р·РµР№РЅС–С‡Р°Рµ СЏС€С‡СЌ",
                "РљР°С‚Р°Р»РѕРі РІ РїРѕРґР°СЂРѕРє": "РљР°С‚Р°Р»РѕРі Сѓ РїР°РґР°СЂСѓРЅР°Рє",
                "РџСЂР°Р№СЃ-Р»РёСЃС‚": "РџСЂР°Р№СЃ Р»С–СЃС‚",
                "РћС‚Р»РёС‡РЅРѕ. РћСЃС‚Р°Р»СЃСЏ РїРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "Р’С‹РґР°С‚РЅР°. Р—Р°СЃС‚Р°СћСЃСЏ Р°РїРѕС€РЅС– РєСЂРѕРє!",
                "РЎ": "Р—",
                "РїРѕР»РёС‚РёРєРѕР№ РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё": "РїР°Р»С–С‚С‹РєР°Р№ РїСЂС‹РІР°С‚РЅР°СЃС†С–",
                "РѕР·РЅР°РєРѕРјР»РµРЅ": "Р°Р·РЅР°С‘РјР»РµРЅС‹",
                'Рљ СЌС‚РѕР№ РіСЂСѓРїРїРµ РїСЂРёРІСЏР·Р°РЅ РєРІРёР· "{title}"': 'Р”Р° РіСЌС‚Р°Р№ РіСЂСѓРїС‹ РїСЂС‹РІСЏР·Р°РЅС‹ РєРІС–Р· "{title}"',
                "Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ РєРІРёР·": "Р СЌРґР°РіР°РІР°С†СЊ РєРІС–Р·",
                "РџСЂРёРІСЏР·Р°С‚СЊ РґСЂСѓРіРѕР№ РєРІРёР·": "РџСЂС‹РІСЏР·Р°С†СЊ С–РЅС€С‹ РєРІС–Р·",
                'Р§С‚РѕР±С‹ РїСЂРёРІСЏР·Р°С‚СЊ РєРІРёР· Рє РіСЂСѓРїРїРµ vk, РІРІРµРґРёС‚Рµ РµРіРѕ id Рё РЅР°Р¶РјРёС‚Рµ "РџСЂРёРІСЏР·Р°С‚СЊ"': 'РљР°Р± РїСЂС‹РІСЏР·Р°С†СЊ РєРІС–Р· РґР° РіСЂСѓРїС‹ vk, СѓРІСЏРґР·iС†Рµ СЏРіРѕ id С– РЅР°С†С–СЃРЅС–С†Рµ "РџСЂС‹РІСЏР·Р°С†СЊ"',
                "Р’РІРµРґРёС‚Рµ id РєРІРёР·Р°": "РЈРІСЏРґР·С–С†Рµ id РєРІС–Р·",
                "РџСЂРёРІСЏР·Р°С‚СЊ": "РџСЂС‹РІСЏР·Р°С†СЊ",
                "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РјРµСЃСЃРµРЅРґР¶РµСЂ": "Р’С‹РєР°СЂС‹СЃС‚РѕСћРІР°С†СЊ РјРµСЃСЃРµРЅРґР¶РµСЂ",
                "РљСѓРґР° РїСЂРёСЃС‹Р»Р°С‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹?": "РљСѓРґС‹ РґР°СЃС‹Р»Р°С†СЊ РІС‹РЅС–РєС–?",
                "Р’РµСЂРЅСѓС‚СЊСЃСЏ Рє РІРІРѕРґСѓ РєРѕРЅС‚Р°РєС‚РѕРІ": "Р’СЏСЂРЅСѓС†С†Р° РґР° СћРІРѕРґСѓ РєР°РЅС‚Р°РєС‚Р°Сћ",
                "Р’С‹Р±СЂР°С‚СЊ РґСЂСѓРіРѕР№ РјРµСЃСЃРµРЅРґР¶РµСЂ": "Р’С‹Р±СЂР°С†СЊ С–РЅС€С‹ РјРµСЃСЃРµРЅРґР¶РµСЂ",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ": "РЈРІСЏРґР·С–С†Рµ Р»Р°РіС–РЅ",
                "Р’Р°С€Рё Р±РѕРЅСѓСЃС‹": "Р’Р°С€С‹СЏ Р±РѕРЅСѓСЃС‹",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ РёР»Рё id": "РљР°Р»С– Р»Р°СЃРєР°, СѓРІСЏРґР·С–С†Рµ РЅСѓРјР°СЂ С†С– Р»Р°РіС–РЅ",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ": "РљР°Р»С– Р»Р°СЃРєР°, СѓРІСЏРґР·С–С†Рµ РЅСѓРјР°СЂ",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ РёР»Рё Р»РѕРіРёРЅ": "РљР°Р»С– Р»Р°СЃРєР°, СѓРІСЏРґР·С–С†Рµ РЅСѓРјР°СЂ С†С– Р»Р°РіС–РЅ",
                "РљР°С‚Р°Р»РѕРі": "РљР°С‚Р°Р»РѕРі",
                "РЎРґРµР»Р°РЅРѕ РІ": "Р—СЂРѕР±Р»РµРЅР° Сћ",
                "РЎРєР°С‡Р°С‚СЊ": "РЎРїР°РјРїР°РІР°С†СЊ",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚": "РџСЂР°Р№СЃС†С– С‚СЌСЃС‚",
                "Р‘РѕРЅСѓСЃС‹ РїРѕСЃР»Рµ РїСЂРѕС…РѕР¶РґРµРЅРёСЏ С‚РµСЃС‚Р°": "Р‘РѕРЅСѓСЃС‹ РїР°СЃР»СЏ РїСЂР°С…РѕРґР¶Р°РЅРЅСЏ С‚СЌСЃС‚Сѓ",
                "С‚Р°РєРѕР№ РєРІРёР· РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚": "С‚Р°РєРѕР№ РєРІС–Р· РЅРµ С–СЃРЅСѓРµ",
                "РЅРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ С‚РµСЃС‚": "РЅРµ СћРґР°Р»РѕСЃСЏ Р·Р°РіСЂСѓР·С–С†СЊ С‚СЌСЃС‚",
                "РІС‹Р±РµСЂРёС‚Рµ РѕРґРёРЅ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ": "Р°Р±СЏСЂС‹С†Рµ Р°РґР·С–РЅ Р°Р±Рѕ РЅРµРєР°Р»СЊРєС–",
                "РјРѕР¶РЅРѕ РїСЂРѕРїСѓСЃС‚РёС‚СЊ": "РјРѕР¶РЅР° РїСЂР°РїСѓСЃС†С–С†СЊ",
                "РњС‹ РЅРµ СЃРјРѕРіР»Рё СЂР°СЃСЃС‡РёС‚Р°С‚СЊ РґР»СЏ РІР°СЃ СЂРµР·СѓР»СЊС‚Р°С‚": "РњС‹ РЅРµ Р·РјР°РіР»С– СЂР°Р·Р»С–С‡С‹С†СЊ РґР»СЏ РІР°СЃ РІС‹РЅС–Рє",
                "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ РµС‰С‘ СЂР°Р·": "РџР°СЃРїСЂР°Р±Р°РІР°С†СЊ СЏС€С‡СЌ СЂР°Р·",
                "РџРѕР»СѓС‡РёС‚Рµ РІР°С€Рё Р±РѕРЅСѓСЃС‹ РґР°Р»РµРµ": "РђС‚СЂС‹РјР°РµС†Рµ РІР°С€С‹СЏ Р±РѕРЅСѓСЃС‹ РґР°Р»РµР№",
                "РЈР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅРµРµ": "Р”Р°РІРµРґР°С†С†Р° Р±РѕР»СЊС€ РїР°РґСЂР°Р±СЏР·РЅР°",
                "РџРѕРґСЃС‡С‘С‚ СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ": "РџР°РґР»С–Рє РІС‹РЅС–РєР°Сћ",
                "{cost} {currency}": "{cost} {currency}",
                "РґРѕ {cost} {currency}": "РґР° {cost} {currency}",
                "РѕС‚ {cost} {currency}": "Р°Рґ {cost} {currency}",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚ Р·Р°РЅРѕРІРѕ": "РџСЂР°Р№СЃС†С– С‚СЌСЃС‚ Р·РЅРѕСћРєСѓ",
                "РќРµ Р·РЅР°СЋ, С‡С‚Рѕ РІС‹Р±СЂР°С‚СЊ": "РќРµ РІРµРґР°СЋ, С€С‚Рѕ РІС‹Р±СЂР°С†СЊ",
                "РёР»Рё": "Р°Р±Рѕ",
                "Р’Р°С€Рё СЂРµР·СѓР»СЊС‚Р°С‚С‹": "Р’Р°С€С‹ РІС‹РЅС–РєС–",
                "Р’С‹Р±РµСЂРёС‚Рµ РёРЅС‚РµСЂРµСЃСѓСЋС‰РёР№ РІР°СЃ РІР°СЂРёР°РЅС‚": "Р’С‹Р±РµСЂС‹С†Рµ С†С–РєР°РІС–С†СЊ РІР°СЃ РІР°СЂС‹СЏРЅС‚"
            }
        },
        en: {
            translation: {
                "Р’Р°С€Р° СЃРєРёРґРєР°": "Your discount",
                "РћС‚Р»РёС‡РЅРѕ. РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "Excellent. Last step!",
                "РС‚РѕРіРѕРІР°СЏ СЃРєРёРґРєР°": "Final discount",
                "Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ": "Additionally",
                "РџРѕР»СѓС‡РёС‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹": "Get results",
                "РЎРїР°СЃРёР±Рѕ": "Thank you",
                "Р“РѕС‚РѕРІРѕ": "Done",
                "РќР°Р·Р°Рґ": "Back",
                "Р”Р°Р»РµРµ": "Next",
                "РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі": "Last step",
                "РЎРґРµР»Р°РЅРѕ СЃ РїРѕРјРѕС‰СЊСЋ": "Powered by",
                Email: "Email",
                "РРјСЏ": "Name",
                "РўРµР»РµС„РѕРЅ": "Phone",
                "Р—Р° РєР°Р¶РґС‹Р№ РѕС‚РІРµС‚": "For each answer",
                "РЎРєРёРґРєР°": "Discount",
                "Р”СЂСѓРіРѕРµ": "Other",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃР»РµРІР°": "Select answer option on the left",
                "РџСЂРµРґРѕСЃС‚Р°РІР»СЏСЏ РІР°С€Рё РєРѕРЅС‚Р°РєС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ, РІС‹ СЃРѕРіР»Р°С€Р°РµС‚РµСЃСЊ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРё РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ": "By providing your contact information, you agree to the processing of personal information in accordance with the",
                "РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёРј СЃРѕРіР»Р°С€РµРЅРёРµРј": "user agreement",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃРЅРёР·Сѓ": "Choose the answer from below",
                "РћС‚": "From",
                "Р”Рѕ": "To",
                "РџРЅ": "M",
                "Р’С‚": "Tu",
                "РЎСЂ": "W",
                "Р§С‚": "Th",
                "РџС‚": "F",
                "РЎР±": "S",
                "Р’СЃ": "Su",
                "РЇРЅРІР°СЂСЊ": "January",
                "Р¤РµРІСЂР°Р»СЊ": "February",
                "РњР°СЂС‚": "March",
                "РђРїСЂРµР»СЊ": "April",
                "РњР°Р№": "May",
                "РСЋРЅСЊ": "June",
                "РСЋР»СЊ": "July",
                "РђРІРіСѓСЃС‚": "August",
                "РЎРµРЅС‚СЏР±СЂСЊ": "September",
                "РћРєС‚СЏР±СЂСЊ": "October",
                "РќРѕСЏР±СЂСЊ": "November",
                "Р”РµРєР°Р±СЂСЊ": "December",
                "РЈ РјРµРЅСЏ РЅРµС‚ email": "I don't have email",
                "Р’РІРµРґРёС‚Рµ РёРјСЏ": "Enter your name",
                "Р’РІРµРґРёС‚Рµ С‚РµР»РµС„РѕРЅ": "Enter your phone",
                "Р’РІРµРґРёС‚Рµ email": "Enter your email",
                "mail@mail.ru": "mail@google.com",
                "РРіРѕСЂСЊ": "Benny",
                "+7 (900) 000-00-00": "+1-202-555-0105",
                "РЎРµР№С‡Р°СЃ": "Now",
                "РЎР±СЂРѕСЃ": "Reset",
                "Р”РµР№СЃС‚РІСѓРµС‚ РµС‰Рµ": "Expires in",
                "РљР°С‚Р°Р»РѕРі РІ РїРѕРґР°СЂРѕРє": "Gift catalog",
                "РџСЂР°Р№СЃ-Р»РёСЃС‚": "Price list",
                "РћС‚Р»РёС‡РЅРѕ. РћСЃС‚Р°Р»СЃСЏ РїРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "Excellent. The last step is left!",
                "РЎ": "I agree to the",
                "РїРѕР»РёС‚РёРєРѕР№ РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё": "Privacy policy",
                "РѕР·РЅР°РєРѕРјР»РµРЅ": "",
                'Рљ СЌС‚РѕР№ РіСЂСѓРїРїРµ РїСЂРёРІСЏР·Р°РЅ РєРІРёР· "{title}"': 'This group was attached to quiz "{title}"',
                "Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ РєРІРёР·": "Edit quiz",
                "РџСЂРёРІСЏР·Р°С‚СЊ РґСЂСѓРіРѕР№ РєРІРёР·": "Attach another quiz",
                'Р§С‚РѕР±С‹ РїСЂРёРІСЏР·Р°С‚СЊ РєРІРёР· Рє РіСЂСѓРїРїРµ vk, РІРІРµРґРёС‚Рµ РµРіРѕ id Рё РЅР°Р¶РјРёС‚Рµ "РџСЂРёРІСЏР·Р°С‚СЊ"': 'Enter quiz id and click "Attach" to attach quiz to vk group',
                "Р’РІРµРґРёС‚Рµ id РєРІРёР·Р°": "Enter quiz id",
                "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РјРµСЃСЃРµРЅРґР¶РµСЂ": "Use instant messenger",
                "РљСѓРґР° РїСЂРёСЃС‹Р»Р°С‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹?": "РљСѓРґР° РїСЂРёСЃС‹Р»Р°С‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹?",
                "Р’РµСЂРЅСѓС‚СЊСЃСЏ Рє РІРІРѕРґСѓ РєРѕРЅС‚Р°РєС‚РѕРІ": "Where to send the results?",
                "Р’С‹Р±СЂР°С‚СЊ РґСЂСѓРіРѕР№ РјРµСЃСЃРµРЅРґР¶РµСЂ": "Select another messenger",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ": "Enter your login",
                "РџСЂРёРІСЏР·Р°С‚СЊ": "Attach",
                "Р’Р°С€Рё Р±РѕРЅСѓСЃС‹": "Your bonuses",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ РёР»Рё id": "Enter your login or id",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ": "Enter your number",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ РёР»Рё Р»РѕРіРёРЅ": "Enter your number or login",
                "РљР°С‚Р°Р»РѕРі": "Catalog",
                "РЎРґРµР»Р°РЅРѕ РІ": "Made in",
                "РЎРєР°С‡Р°С‚СЊ": "Download",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚": "Take the test",
                "Р‘РѕРЅСѓСЃС‹ РїРѕСЃР»Рµ РїСЂРѕС…РѕР¶РґРµРЅРёСЏ С‚РµСЃС‚Р°": "Bonus after passing the test",
                "С‚Р°РєРѕР№ РєРІРёР· РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚": "this quiz does not exists",
                "РЅРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ С‚РµСЃС‚": "failed to load test",
                "РІС‹Р±РµСЂРёС‚Рµ РѕРґРёРЅ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ": "select one or more",
                "РјРѕР¶РЅРѕ РїСЂРѕРїСѓСЃС‚РёС‚СЊ": "can skip",
                "РњС‹ РЅРµ СЃРјРѕРіР»Рё СЂР°СЃСЃС‡РёС‚Р°С‚СЊ РґР»СЏ РІР°СЃ СЂРµР·СѓР»СЊС‚Р°С‚": "We could not calculate the result for you",
                "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ РµС‰С‘ СЂР°Р·": "Try again",
                "РџРѕР»СѓС‡РёС‚Рµ РІР°С€Рё Р±РѕРЅСѓСЃС‹ РґР°Р»РµРµ": "Get your bonuses next step",
                "РЈР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅРµРµ": "More",
                "РџРѕРґСЃС‡С‘С‚ СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ": "Results calculation running",
                "{cost} {currency}": "{currency} {cost}",
                "РґРѕ {cost} {currency}": "up to {currency} {cost}",
                "РѕС‚ {cost} {currency}": "from {currency} {cost}",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚ Р·Р°РЅРѕРІРѕ": "Take the quiz again",
                "РќРµ Р·РЅР°СЋ, С‡С‚Рѕ РІС‹Р±СЂР°С‚СЊ": "I do not know what to choose",
                "РёР»Рё": "or",
                "Р’Р°С€Рё СЂРµР·СѓР»СЊС‚Р°С‚С‹": "Your results",
                "Р’С‹Р±РµСЂРёС‚Рµ РёРЅС‚РµСЂРµСЃСѓСЋС‰РёР№ РІР°СЃ РІР°СЂРёР°РЅС‚": "Choose the option you are interested in"
            }
        },
        hy: {
            translation: {
                "Р’Р°С€Р° СЃРєРёРґРєР°": "ХЃХҐЦЂ Х¦ХҐХІХ№ХЁ",
                "РћС‚Р»РёС‡РЅРѕ. РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "ХЂХ«ХЎХ¶ХЎХ¬Х« Х§. ХЋХҐЦЂХ»Х«Х¶ Ц„ХЎХµХ¬!",
                "РС‚РѕРіРѕРІР°СЏ СЃРєРёРґРєР°": "ХЋХҐЦЂХ»Х¶ХЎХЇХЎХ¶ Х¦ХҐХІХ№",
                "Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ": "Ф±ХѕХҐХ¬Х«Х¶",
                "РџРѕР»СѓС‡РёС‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹": "ХЌХїХЎХ¶ХЎХ¬ ХЎЦЂХ¤ХµХёЦ‚Х¶Ц„Х¶ХҐЦЂХЁ",
                "РЎРїР°СЃРёР±Рѕ": "Х‡Х¶ХёЦЂХ°ХЎХЇХЎХ¬ХёЦ‚Х©ХµХёЦ‚Х¶",
                "Р“РѕС‚РѕРІРѕ": "ХЉХЎХїЦЂХЎХЅХї Х§",
                "РќР°Р·Р°Рґ": "ХЂХҐХї",
                "Р”Р°Р»РµРµ": "ХЂХЎХ»ХёЦЂХ¤ХЁ",
                "РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі": "ХЋХҐЦЂХ»Х«Х¶ Ц„ХЎХµХ¬",
                "РЎРґРµР»Р°РЅРѕ СЃ РїРѕРјРѕС‰СЊСЋ": "Powered by",
                Email: "Email",
                "РРјСЏ": "Ф±Х¶ХёЦ‚Х¶",
                "РўРµР»РµС„РѕРЅ": "ХЂХҐХјХЎХ­ХёХЅХЎХ°ХЎХґЦЂ",
                "Р—Р° РєР°Р¶РґС‹Р№ РѕС‚РІРµС‚": "Ф±ХґХҐХ¶ ХєХЎХїХЎХЅХ­ХЎХ¶Х« Х°ХЎХґХЎЦЂ",
                "РЎРєРёРґРєР°": "Ф¶ХҐХІХ№",
                "Р”СЂСѓРіРѕРµ": "Ф±ХµХ¬",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃР»РµРІР°": "ФёХ¶ХїЦЂХҐЦ„ ХєХЎХїХЎХЅХ­ХЎХ¶Х« ХїХЎЦЂХўХҐЦЂХЎХЇХЁ Х±ХЎХ­ ХЇХёХІХґХёЦ‚Хґ",
                "РџСЂРµРґРѕСЃС‚Р°РІР»СЏСЏ РІР°С€Рё РєРѕРЅС‚Р°РєС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ, РІС‹ СЃРѕРіР»Р°С€Р°РµС‚РµСЃСЊ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРё РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ": " ХЃХҐЦЂ ХЇХёХ¶ХїХЎХЇХїХЎХµХ«Х¶ ХїХѕХµХЎХ¬Х¶ХҐЦЂХЁ ХїЦЂХЎХґХЎХ¤ЦЂХҐХ¬ХёХѕ, Х¤ХёЦ‚Ц„ Х°ХЎХґХЎХ±ХЎХµХ¶ХѕХёЦ‚Хґ ХҐЦ„ ХЎХ¶Х±Х¶ХЎХЇХЎХ¶ ХїХѕХµХЎХ¬Х¶ХҐЦЂХ« ХѕХҐЦЂХЎХґХ·ХЎХЇХґХЎХ¶ХЁ ",
                "РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёРј СЃРѕРіР»Р°С€РµРЅРёРµРј": "Х•ХЈХїХЎХїХ«ЦЂХёХ» Х°ХЎХґХЎХ±ХЎХµХ¶ХёЦ‚Х©ХµХЎХґХў",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃРЅРёР·Сѓ": "ФёХ¶ХїЦЂХҐЦ„ ХєХЎХїХЎХЅХ­ХЎХ¶Х« ХїХЎЦЂХўХҐЦЂХЎХЇХЁ Х¶ХҐЦЂЦ„Ц‡ХёЦ‚Хґ",
                "РћС‚": "From",
                "Р”Рѕ": "To",
                "РџРЅ": "Фµ",
                "Р’С‚": "Фµ",
                "РЎСЂ": "Х‰",
                "Р§С‚": "ХЂ",
                "РџС‚": "Х€Х’",
                "РЎР±": "Х‡",
                "Р’СЃ": "Фї",
                "РЇРЅРІР°СЂСЊ": "ХЂХёЦ‚Х¶ХѕХЎЦЂ",
                "Р¤РµРІСЂР°Р»СЊ": "Х“ХҐХїЦЂХѕХЎЦЂ",
                "РњР°СЂС‚": "Х„ХЎЦЂХї",
                "РђРїСЂРµР»СЊ": "Ф±ХєЦЂХ«Х¬",
                "РњР°Р№": "Х„ХЎХµХ«ХЅ",
                "РСЋРЅСЊ": "ХЂХёЦ‚Х¶Х«ХЅ",
                "РСЋР»СЊ": "ХЂХёЦ‚Х¬Х«ХЅ",
                "РђРІРіСѓСЃС‚": "Х•ХЈХёХЅХїХёХЅ",
                "РЎРµРЅС‚СЏР±СЂСЊ": "ХЌХҐХєХїХҐХґХўХҐЦЂ",
                "РћРєС‚СЏР±СЂСЊ": "ХЂХёХЇХїХҐХґХўХҐЦЂ",
                "РќРѕСЏР±СЂСЊ": "Х†ХёХµХҐХґХўХҐЦЂ",
                "Р”РµРєР°Р±СЂСЊ": "ФґХҐХЇХїХҐХґХўХҐЦЂ",
                "РЈ РјРµРЅСЏ РЅРµС‚ email": "Ф·Х¬ЦѓХёХЅХї Х№ХёЦ‚Х¶ХҐХґ",
                "Р’РІРµРґРёС‚Рµ РёРјСЏ": "Х„ХёЦ‚ХїЦ„ХЎХЈЦЂХҐЦ„ ХЎХ¶ХёЦ‚Х¶",
                "Р’РІРµРґРёС‚Рµ С‚РµР»РµС„РѕРЅ": "Х„ХёЦ‚ХїЦ„ХЎХЈЦЂХҐЦ„ Х°ХҐХјХЎХ­ХёХЅХЁ",
                "Р’РІРµРґРёС‚Рµ email": "Х„ХёЦ‚ХїЦ„ХЎХЈЦЂХҐЦ„ Х§Х¬ЦѓХёХЅХїХЁ",
                "mail@mail.ru": "mail@mail.am",
                "РРіРѕСЂСЊ": "Ф»ХЈХёЦЂ",
                "+7 (900) 000-00-00": "(+374 95) 111 111",
                "РЎРµР№С‡Р°СЃ": "Ф±ХµХЄХґ",
                "РЎР±СЂРѕСЃ": "ХЋХҐЦЂХЎХЈХёЦЂХ®ХЎЦЂХЇХҐЦ„",
                "Р”РµР№СЃС‚РІСѓРµС‚ РµС‰Рµ": "Ф±ХѕХҐХ¬Х«Х¶ ХЇХЎХ¶",
                "РљР°С‚Р°Р»РѕРі РІ РїРѕРґР°СЂРѕРє": "Х†ХѕХҐЦЂХ¶ХҐЦЂХ« ХЇХЎХїХЎХ¬ХёХЈ",
                "РџСЂР°Р№СЃ-Р»РёСЃС‚": "ФіХ¶ХЎЦЃХёЦ‚ЦЃХЎХЇ",
                "РћС‚Р»РёС‡РЅРѕ. РћСЃС‚Р°Р»СЃСЏ РїРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "Х„ХҐХ®ХЁ: ХЋХҐЦЂХ»Х«Х¶ Ц„ХЎХµХ¬Х¶ Х§ ХґХ¶ХЎЦЃХҐХ¬:",
                "РЎ": "ХЈ",
                "РѕР·РЅР°РєРѕРјР»РµРЅ": "Х®ХЎХ¶ХёХ©ХЎЦЃХ¶ХёЦ‚Хґ Х§",
                "РїРѕР»РёС‚РёРєРѕР№ РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё": "ФіХЎХІХїХ¶Х«ХёЦ‚Х©ХµХЎХ¶ Ц„ХЎХІХЎЦ„ХЎХЇХЎХ¶ХёЦ‚Х©ХµХёЦ‚Х¶",
                'Рљ СЌС‚РѕР№ РіСЂСѓРїРїРµ РїСЂРёРІСЏР·Р°РЅ РєРІРёР· "{title}"': "Ф±ХµХЅ Х­ХґХўХ«Х¶ ХЇЦЃХѕХЎХ® Х§ В«{title}В» ХѕХ«ХЇХїХёЦЂХ«Х¶ХЎХ¶",
                "Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ РєРІРёР·": "ФЅХґХўХЎХЈЦЂХҐХ¬ ХѕХ«ХЇХїХёЦЂХ«Х¶ХЎХ¶",
                "РџСЂРёРІСЏР·Р°С‚СЊ РґСЂСѓРіРѕР№ РєРІРёР·": "ХЂХІХёЦ‚Хґ ХЎХµХ¬ ХѕХ«ХЇХїХёЦЂХ«Х¶ХЎХµХ«Х¶",
                'Р§С‚РѕР±С‹ РїСЂРёРІСЏР·Р°С‚СЊ РєРІРёР· Рє РіСЂСѓРїРїРµ vk, РІРІРµРґРёС‚Рµ РµРіРѕ id Рё РЅР°Р¶РјРёС‚Рµ "РџСЂРёРІСЏР·Р°С‚СЊ"': 'ХЏХёХґХЅХЁ vk Х­ХґХўХ« Х°ХҐХї ХЇХЎХєХҐХ¬ХёЦ‚ Х°ХЎХґХЎЦЂ ХґХёЦ‚ХїЦ„ХЎХЈЦЂХҐЦ„ Х«ЦЂ id ХҐЦ‚ ХЅХҐХІХґХҐЦ„ "Snap":',
                "Р’РІРµРґРёС‚Рµ id РєРІРёР·Р°": "Х„ХёЦ‚ХїЦ„ХЎХЈЦЂХҐЦ„ Quiz ID- Х¶",
                "РџСЂРёРІСЏР·Р°С‚СЊ": "ХіХЎЦ„ХҐХ¬",
                "Р’Р°С€Рё Р±РѕРЅСѓСЃС‹": "Х±ХҐЦЂ ХўХёХ¶ХёЦ‚ХЅХ¶ХҐЦЂХЁ",
                "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РјРµСЃСЃРµРЅРґР¶РµСЂ": "Ц…ХЈХїХЎХЈХёЦЂХ®ХҐХ¬ ЦѓХҐХµХ»ХҐЦЂХЁ",
                "РљСѓРґР° РїСЂРёСЃС‹Р»Р°С‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹?": "Х€ЦЂХїХҐХІ ХёЦ‚ХІХЎЦЂХЇХҐХ¬ ХЎЦЂХ¤ХµХёЦ‚Х¶Ц„Х¶ХҐЦЂХЁ.",
                "Р’РµСЂРЅСѓС‚СЊСЃСЏ Рє РІРІРѕРґСѓ РєРѕРЅС‚Р°РєС‚РѕРІ": "ХЋХҐЦЂХЎХ¤ХЎХјХ¶ХЎХ¬ Х·ЦѓХёЦ‚ХґХ¶ХҐЦЂХ« ХЈЦЂХЎХјХёЦ‚ХґХ¶ХҐЦЂХ«",
                "Р’С‹Р±СЂР°С‚СЊ РґСЂСѓРіРѕР№ РјРµСЃСЃРµРЅРґР¶РµСЂ": "ФёХ¶ХїЦЂХҐХ¬ ХЎХµХ¬ ХєХЎХїХЈХЎХґХЎХўХҐЦЂХ«Х¶",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ": "ХґХёЦ‚ХїЦ„ХЎХЈЦЂХҐЦ„ Х±ХҐЦЂ Ц…ХЈХїХЎХ¶ХёЦ‚Х¶ХЁ",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ РёР»Рё id": "Х„ХёЦ‚ХїЦ„ХЎХЈЦЂХҐЦ„ ХґХёЦ‚ХїЦ„Х« ХЇХЎХґ id",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ": "Х„ХёЦ‚ХїЦ„ХЎХЈЦЂХҐЦ„ Х°ХЎХґХЎЦЂХЁ",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ РёР»Рё Р»РѕРіРёРЅ": "Х„ХёЦ‚ХїЦ„ХЎХЈЦЂХҐЦ„ Х°ХЎХґХЎЦЂХЁ ХЇХЎХґ ХґХёЦ‚ХїЦ„ХЎХЈЦЂХҐЦ„",
                "РљР°С‚Р°Р»РѕРі": "ФїХЎХїХЎХ¬ХёХЈ",
                "РЎРґРµР»Р°РЅРѕ РІ": "ХЉХЎХїЦЂХЎХЅХїХѕХЎХ® Х§",
                "РЎРєР°С‡Р°С‚СЊ": "ФІХҐХјХ¶ХҐХ¬",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚": "ХЋХҐЦЂЦЃЦЂХҐЦ„ Ц„Х¶Х¶ХёЦ‚Х©ХµХёЦ‚Х¶ХЁ",
                "Р‘РѕРЅСѓСЃС‹ РїРѕСЃР»Рµ РїСЂРѕС…РѕР¶РґРµРЅРёСЏ С‚РµСЃС‚Р°": "ФІХёХ¶ХёЦ‚ХЅ `ЦѓХёЦЂХ±ХЎЦЂХЇХёЦ‚ХґХ«ЦЃ Х°ХҐХїХё",
                "С‚Р°РєРѕР№ РєРІРёР· РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚": "Х¶ХґХЎХ¶ ХѕХ«ХЇХїХёЦЂХ«Х¶ХЎ ХЈХёХµХёЦ‚Х©ХµХёЦ‚Х¶ Х№ХёЦ‚Х¶Х«",
                "РЅРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ С‚РµСЃС‚": "Х№Х°ХЎХ»ХёХІХѕХҐЦЃ ХўХҐХјХ¶ХҐХ¬ ЦѓХёЦЂХ±ХЎЦЂХЇХёЦ‚Хґ",
                "РІС‹Р±РµСЂРёС‚Рµ РѕРґРёРЅ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ": "ХЁХ¶ХїЦЂХҐЦ„ ХґХҐХЇ ХЇХЎХґ ХЎХѕХҐХ¬Х«",
                "РјРѕР¶РЅРѕ РїСЂРѕРїСѓСЃС‚РёС‚СЊ": "ХЇХЎЦЂХёХІ ХҐЦ„ ХўХЎЦЃ Х©ХёХІХ¶ХҐХ¬",
                "РњС‹ РЅРµ СЃРјРѕРіР»Рё СЂР°СЃСЃС‡РёС‚Р°С‚СЊ РґР»СЏ РІР°СЃ СЂРµР·СѓР»СЊС‚Р°С‚": "Х„ХҐХ¶Ц„ Х№ХЇХЎЦЂХёХІХЎЦЃХЎХ¶Ц„ Х°ХЎХ·ХѕХЎЦЂХЇХҐХ¬ ХЎХµХ¤ ХЎЦЂХ¤ХµХёЦ‚Х¶Ц„ХЁ",
                "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ РµС‰С‘ СЂР°Р·": "ФїЦЂХЇХ«Х¶ ЦѓХёЦЂХ±ХҐЦ„",
                "РџРѕР»СѓС‡РёС‚Рµ РІР°С€Рё Р±РѕРЅСѓСЃС‹ РґР°Р»РµРµ": "ХЌХїХЎЦЃХҐЦ„ Х±ХҐЦЂ ХўХёХ¶ХёЦ‚ХЅХ¶ХҐЦЂХЁ",
                "РЈР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅРµРµ": "Ф»ХґХЎЦЃХҐЦ„ ХЎХѕХҐХ¬Х«Х¶",
                "РџРѕРґСЃС‡С‘С‚ СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ": "ХЂХЎХ·ХѕХЎЦЂХЇХґХЎХ¶ ХЎЦЂХ¤ХµХёЦ‚Х¶Ц„Х¶ХҐЦЂ",
                "{cost} {currency}": "{cost} {currency}",
                "РґРѕ {cost} {currency}": "ХґХ«Х¶Х№ХҐЦ‚ {cost} {currency}",
                "РѕС‚ {cost} {currency}": "ХЅХЇХЅХЎХ® {cost} {currency}",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚ Р·Р°РЅРѕРІРѕ": "ХЋХҐЦЂЦЃЦЂХҐЦ„ ХЇЦЂХЇХ«Х¶ ЦѓХёЦЂХ±ХёЦ‚Х©ХµХёЦ‚Х¶ХЁ",
                "РќРµ Р·РЅР°СЋ, С‡С‚Рѕ РІС‹Р±СЂР°С‚СЊ": "ФµХЅ Х№ХЈХ«ХїХҐХґ, Х©ХҐ Х«Х¶Х№ ХєХҐХїЦ„ Х§ ХЁХ¶ХїЦЂХ«",
                "РёР»Рё": "ХЇХЎХґ",
                "Р’Р°С€Рё СЂРµР·СѓР»СЊС‚Р°С‚С‹": "ХЃХҐЦЂ ХЎЦЂХ¤ХµХёЦ‚Х¶Ц„Х¶ХҐЦЂХЁ",
                "Р’С‹Р±РµСЂРёС‚Рµ РёРЅС‚РµСЂРµСЃСѓСЋС‰РёР№ РІР°СЃ РІР°СЂРёР°РЅС‚": "ФёХ¶ХїЦЂХҐЦ„ ХЎХµХ¶ ХїХЎЦЂХўХҐЦЂХЎХЇХЁ, ХёЦЂХЁ Х°ХҐХїХЎЦ„ЦЂЦ„ЦЂХёЦ‚Хґ Х§ Х±ХҐХ¦"
            }
        },
        kk: {
            translation: {
                "Р’Р°С€Р° СЃРєРёРґРєР°": "РЎС–Р·РґС–ТЈ Р¶РµТЈС–Р»РґС–РіС–ТЈС–Р·",
                "РћС‚Р»РёС‡РЅРѕ. РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "РўР°РјР°С€Р°. РЎРѕТЈТ“С‹ Т›Р°РґР°Рј!",
                "РС‚РѕРіРѕРІР°СЏ СЃРєРёРґРєР°": "ТљРѕСЂС‹С‚С‹РЅРґС‹ Р¶РµТЈС–Р»РґС–Рє",
                "Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ": "ТљРѕСЃС‹РјС€Р°",
                "РџРѕР»СѓС‡РёС‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹": "РќУ™С‚РёР¶РµСЃС–РЅ Р°Р»Сѓ",
                "РЎРїР°СЃРёР±Рѕ": "Р Р°С…РјРµС‚",
                "Р“РѕС‚РѕРІРѕ": "Р”Р°Р№С‹РЅ",
                "РќР°Р·Р°Рґ": "РђСЂС‚Т›Р°",
                "Р”Р°Р»РµРµ": "РђР»Т“Р°",
                "РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі": "РЎРѕТЈТ“С‹ Т›Р°РґР°Рј",
                "РЎРґРµР»Р°РЅРѕ СЃ РїРѕРјРѕС‰СЊСЋ": "РљУ©РјРµРіС–РјРµРЅ Р¶Р°СЃР°Р»Т“Р°РЅ",
                Email: "Email",
                "РРјСЏ": "РђС‚С‹-Р¶У©РЅС–",
                "РўРµР»РµС„РѕРЅ": "РўРµР»РµС„РѕРЅ",
                "Р—Р° РєР°Р¶РґС‹Р№ РѕС‚РІРµС‚": "УСЂР±С–СЂ Р¶Р°СѓР°Р±С‹ Р±Р°СЂ",
                "РЎРєРёРґРєР°": "Р–РµТЈС–Р»РґС–РєРїРµРЅ",
                "Р”СЂСѓРіРѕРµ": "Р‘Р°СЃТ›Р°",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃР»РµРІР°": "РЎРѕР» Р¶Р°Т›С‚Р°Т“С‹ Р¶Р°СѓР°Рї РѕРїС†РёСЏСЃС‹РЅ С‚Р°ТЈРґР°ТЈС‹Р·",
                "РџСЂРµРґРѕСЃС‚Р°РІР»СЏСЏ РІР°С€Рё РєРѕРЅС‚Р°РєС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ, РІС‹ СЃРѕРіР»Р°С€Р°РµС‚РµСЃСЊ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРё РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ": "РЎС–Р·РґС–ТЈ Р±Р°Р№Р»Р°РЅС‹СЃ Р°Т›РїР°СЂР°С‚С‹РЅ Р±РµСЂСѓ Р°СЂТ›С‹Р»С‹ СЃС–Р· Р¶РµРєРµ Р°Т›РїР°СЂР°С‚С‚С‹ У©ТЈРґРµСѓ С‚СѓСЂР°Р»С‹ РєРµР»С–СЃС–РјРіРµ",
                "РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёРј СЃРѕРіР»Р°С€РµРЅРёРµРј": "СЃУ™Р№РєРµСЃ РєРµР»С–СЃРµСЃС–Р·",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃРЅРёР·Сѓ": "РўУ©РјРµРЅРґРµ Р±РµСЂС–Р»РіРµРЅ Р¶Р°СѓР°РїС‚С‹ С‚Р°ТЈРґР°ТЈС‹Р·",
                "РћС‚": "ТљР°Р№РґР°РЅ",
                "Р”Рѕ": "Р‘Т±Т“Р°РЅ РґРµР№С–РЅ",
                "РџРЅ": "РџРЅ",
                "Р’С‚": "Р’С‚",
                "РЎСЂ": "РЎСЂ",
                "Р§С‚": "Р§С‚",
                "РџС‚": "РџС‚",
                "РЎР±": "РЎР±",
                "Р’СЃ": "Р’СЃ",
                "РЇРЅРІР°СЂСЊ": "ТљР°ТЈС‚Р°СЂ",
                "Р¤РµРІСЂР°Р»СЊ": "РђТ›РїР°РЅ",
                "РњР°СЂС‚": "РќР°СѓСЂС‹Р·",
                "РђРїСЂРµР»СЊ": "РЎУ™СѓС–СЂ",
                "РњР°Р№": "РњР°РјС‹СЂ",
                "РСЋРЅСЊ": "РњР°СѓСЃС‹Рј",
                "РСЋР»СЊ": "РЁС–Р»РґРµ",
                "РђРІРіСѓСЃС‚": "РўР°РјС‹Р·",
                "РЎРµРЅС‚СЏР±СЂСЊ": "ТљС‹СЂРєТЇР№РµРє",
                "РћРєС‚СЏР±СЂСЊ": "ТљР°Р·Р°РЅ",
                "РќРѕСЏР±СЂСЊ": "ТљР°СЂР°С€Р°",
                "Р”РµРєР°Р±СЂСЊ": "Р–РµР»С‚РѕТ›СЃР°РЅ",
                "РЈ РјРµРЅСЏ РЅРµС‚ email": "РњРµРЅРґРµ СЌР»РµРєС‚СЂРѕРЅРґС‹Т› РїРѕС€С‚Р° Р¶РѕТ›",
                "Р’РІРµРґРёС‚Рµ РёРјСЏ": "РђС‚С‹РЅ РµРЅРіС–Р·С–ТЈС–Р·",
                "Р’РІРµРґРёС‚Рµ С‚РµР»РµС„РѕРЅ": "РўРµР»РµС„РѕРЅТ“Р° РєС–СЂС–ТЈС–Р·",
                "Р’РІРµРґРёС‚Рµ email": "Р­Р»РµРєС‚СЂРѕРЅРґС‹Т› РїРѕС€С‚Р°РЅС‹ РµРЅРіС–Р·С–ТЈС–Р·",
                "mail@mail.ru": "mail@mail.kz",
                "РРіРѕСЂСЊ": "РРіРѕСЂСЊ",
                "+7 (900) 000-00-00": "+7 (701) 111-11-11",
                "РЎРµР№С‡Р°СЃ": "ТљР°Р·С–СЂ",
                "РЎР±СЂРѕСЃ": "ТљР°Р»РїС‹РЅР° РєРµР»С‚С–СЂСѓ",
                "Р”РµР№СЃС‚РІСѓРµС‚ РµС‰Рµ": "РљУ©Рї РЅУ™СЂСЃРµ Р±Р°СЂ",
                "РљР°С‚Р°Р»РѕРі РІ РїРѕРґР°СЂРѕРє": "РЎС‹Р№Р»С‹Т› РєР°С‚Р°Р»РѕРіС‹",
                "РџСЂР°Р№СЃ-Р»РёСЃС‚": "Р‘Р°Т“Р°Р»Р°СЂ С‚С–Р·С–РјС–",
                "РћС‚Р»РёС‡РЅРѕ. РћСЃС‚Р°Р»СЃСЏ РїРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "РўР°РјР°С€Р°. РЎРѕТЈТ“С‹ Т›Р°РґР°Рј Т›Р°Р»РґС‹СЂС‹Р»РґС‹!",
                "РЎ": "",
                "РѕР·РЅР°РєРѕРјР»РµРЅ": "С‚Р°РЅС‹СЃС‚С‹СЂС‹Р»Т“Р°РЅ",
                "РїРѕР»РёС‚РёРєРѕР№ РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё": "ТљТ±РїРёСЏР»С‹Р»С‹Т› СЃР°СЏСЃР°С‚С‹",
                'Рљ СЌС‚РѕР№ РіСЂСѓРїРїРµ РїСЂРёРІСЏР·Р°РЅ РєРІРёР· "{title}"': 'РћСЃС‹ С‚РѕРїТ›Р° "{title}" Р°С‚С‚С‹ РІРёРєС‚РѕСЂРёРЅР° Т›РѕСЃС‹Р»РґС‹',
                "Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ РєРІРёР·": "Р’РёРєС‚РѕСЂРёРЅР°РЅС‹ У©ТЈРґРµСѓ",
                "РџСЂРёРІСЏР·Р°С‚СЊ РґСЂСѓРіРѕР№ РєРІРёР·": "Р‘Р°СЃТ›Р° РІРёРєС‚РѕСЂРёРЅР° Р±Р°Р№Р»Р°РЅС‹СЃС‚С‹СЂС‹ТЈС‹Р·",
                'Р§С‚РѕР±С‹ РїСЂРёРІСЏР·Р°С‚СЊ РєРІРёР· Рє РіСЂСѓРїРїРµ vk, РІРІРµРґРёС‚Рµ РµРіРѕ id Рё РЅР°Р¶РјРёС‚Рµ "РџСЂРёРІСЏР·Р°С‚СЊ"': 'Vk С‚РѕР±С‹РЅР° Р±РёР»РµС‚С‚С– Р±Р°Р№Р»Р°СЃС‚С‹СЂСѓ ТЇС€С–РЅ РѕРЅС‹ТЈ РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂС‹РЅ РµРЅРіС–Р·С–ТЈС–Р· Р¶У™РЅРµ "Р±Р°Р№Р»Р°РЅС‹СЃС‚С‹СЂСѓ" С‚ТЇР№РјРµСЃС–РЅ Р±Р°СЃС‹ТЈС‹Р·',
                "Р’РІРµРґРёС‚Рµ id РєРІРёР·Р°": "Р’РёРєС‚РѕСЂРёРЅР° РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂС‹РЅ РµРЅРіС–Р·С–ТЈС–Р·",
                "РџСЂРёРІСЏР·Р°С‚СЊ": "РЎРѕТ›Т›С‹",
                "Р’Р°С€Рё Р±РѕРЅСѓСЃС‹": "РЎС–Р·РґС–ТЈ Т±СЃС‹РЅС‹СЃС‚Р°СЂС‹ТЈС‹Р·",
                "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РјРµСЃСЃРµРЅРґР¶РµСЂ": "Р–РµРґРµР» С…Р°Р±Р°СЂ Р°Р»РјР°СЃСѓРґС‹ Т›РѕР»РґР°РЅС‹ТЈС‹Р·",
                "РљСѓРґР° РїСЂРёСЃС‹Р»Р°С‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹?": "РљСѓРґР° РїСЂРёСЃС‹Р»Р°С‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹?",
                "Р’РµСЂРЅСѓС‚СЊСЃСЏ Рє РІРІРѕРґСѓ РєРѕРЅС‚Р°РєС‚РѕРІ": "РќУ™С‚РёР¶РµР»РµСЂРґС– Т›Р°Р№РґР° Р¶С–Р±РµСЂРµРјС–РЅ?",
                "Р’С‹Р±СЂР°С‚СЊ РґСЂСѓРіРѕР№ РјРµСЃСЃРµРЅРґР¶РµСЂ": "Р‘Р°СЃТ›Р° С…Р°Р±Р°СЂС€С‹РЅС‹ С‚Р°ТЈРґР°ТЈС‹Р·",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ": "РљС–СЂСѓРґС– РµРЅРіС–Р·С–ТЈС–Р·",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ РёР»Рё id": "РљС–СЂСѓ РЅРµРјРµСЃРµ РёРґРµРЅС‚РёС„РёРєР°С‚РѕСЂРґС‹ РµРЅРіС–Р·С–ТЈС–Р·",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ": "РќУ©РјС–СЂРґС– РµРЅРіС–Р·С–ТЈС–Р·",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ РёР»Рё Р»РѕРіРёРЅ": "РќУ©РјС–СЂРґС– РЅРµРјРµСЃРµ Р»РѕРіРёРЅРґС– РµРЅРіС–Р·С–ТЈС–Р·",
                "РљР°С‚Р°Р»РѕРі": "РљР°С‚Р°Р»РѕРіС‹",
                "РЎРґРµР»Р°РЅРѕ РІ": "Р–Р°СЃР°Р»РґС‹",
                "РЎРєР°С‡Р°С‚СЊ": "Р–ТЇРєС‚РµСѓ",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚": "РЎС‹РЅР°Т›С‚С‹ Р°Р»С‹ТЈС‹Р·",
                "Р‘РѕРЅСѓСЃС‹ РїРѕСЃР»Рµ РїСЂРѕС…РѕР¶РґРµРЅРёСЏ С‚РµСЃС‚Р°": "РЎС‹РЅР°Т›С‚Р°РЅ У©С‚РєРµРЅРЅРµРЅ РєРµР№С–РЅРіС– Р±РѕРЅСѓСЃ",
                "С‚Р°РєРѕР№ РєРІРёР· РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚": "РјТ±РЅРґР°Р№ РІРёРєС‚РѕСЂРёРЅР° Р¶РѕТ›",
                "РЅРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ С‚РµСЃС‚": "СЃС‹РЅР°Т›С‚С‹ Р¶ТЇРєС‚РµР№ Р°Р»РјР°РґС‹",
                "РІС‹Р±РµСЂРёС‚Рµ РѕРґРёРЅ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ": "Р±С–СЂРµСѓС–РЅ РЅРµРјРµСЃРµ Р±С–СЂРЅРµС€РµСѓС–РЅ С‚Р°ТЈРґР°ТЈС‹Р·",
                "РјРѕР¶РЅРѕ РїСЂРѕРїСѓСЃС‚РёС‚СЊ": "СЃС–Р· У©С‚РєС–Р·С–Рї Р¶С–Р±РµСЂРµ Р°Р»Р°СЃС‹Р·",
                "РњС‹ РЅРµ СЃРјРѕРіР»Рё СЂР°СЃСЃС‡РёС‚Р°С‚СЊ РґР»СЏ РІР°СЃ СЂРµР·СѓР»СЊС‚Р°С‚": "Р‘С–Р· СЃС–Р· ТЇС€С–РЅ РЅУ™С‚РёР¶РµРЅС– РµСЃРµРїС‚РµР№ Р°Р»РјР°РґС‹Т›",
                "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ РµС‰С‘ СЂР°Р·": "УСЂРµРєРµС‚С‚С– Т›Р°Р№С‚Р°Р»Р°ТЈС‹Р·",
                "РџРѕР»СѓС‡РёС‚Рµ РІР°С€Рё Р±РѕРЅСѓСЃС‹ РґР°Р»РµРµ": "Р‘РѕРЅСѓСЃС‚Р°СЂС‹ТЈС‹Р·РґС‹ РѕРґР°РЅ У™СЂС– Р°Р»С‹ТЈС‹Р·",
                "РЈР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅРµРµ": "РљУ©Р±С–СЂРµРє Р±С–Р»С–ТЈС–Р·",
                "РџРѕРґСЃС‡С‘С‚ СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ": "РќУ™С‚РёР¶РµР»РµСЂРґС– РµСЃРµРїС‚РµСѓ",
                "{cost} {currency}": "{cost} {currency}",
                "РґРѕ {cost} {currency}": "{cost} {currency} РґРµР№С–РЅ",
                "РѕС‚ {cost} {currency}": "{cost} {currency} Р±Р°СЃС‚Р°Рї",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚ Р·Р°РЅРѕРІРѕ": "РЎС‹РЅР°Т›С‚С‹ Т›Р°Р№С‚Р°РґР°РЅ Р°Р»С‹ТЈС‹Р·",
                "РќРµ Р·РЅР°СЋ, С‡С‚Рѕ РІС‹Р±СЂР°С‚СЊ": "РњРµРЅ РЅРµРЅС– С‚Р°ТЈРґР°Сѓ РєРµСЂРµРєС‚С–РіС–РЅ Р±С–Р»РјРµР№РјС–РЅ",
                "РёР»Рё": "РЅРµРјРµСЃРµ",
                "Р’Р°С€Рё СЂРµР·СѓР»СЊС‚Р°С‚С‹": "РЎС–Р·РґС–ТЈ РЅУ™С‚РёР¶РµР»РµСЂС–ТЈС–Р·",
                "Р’С‹Р±РµСЂРёС‚Рµ РёРЅС‚РµСЂРµСЃСѓСЋС‰РёР№ РІР°СЃ РІР°СЂРёР°РЅС‚": "ТљС‹Р·С‹Т“СѓС€С‹Р»С‹Т› С‚Р°РЅС‹С‚Т›Р°РЅ РїР°СЂР°РјРµС‚СЂРґС– С‚Р°ТЈРґР°ТЈС‹Р·"
            }
        },
        ru: {
            translation: {
                "Р’Р°С€Р° СЃРєРёРґРєР°": "Р’Р°С€Р° СЃРєРёРґРєР°",
                "РћС‚Р»РёС‡РЅРѕ. РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "РћС‚Р»РёС‡РЅРѕ. РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі!",
                "РС‚РѕРіРѕРІР°СЏ СЃРєРёРґРєР°": "РС‚РѕРіРѕРІР°СЏ СЃРєРёРґРєР°",
                "Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ": "Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ",
                "РџРѕР»СѓС‡РёС‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹": "РџРѕР»СѓС‡РёС‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹",
                "РЎРїР°СЃРёР±Рѕ": "РЎРїР°СЃРёР±Рѕ",
                "Р“РѕС‚РѕРІРѕ": "Р“РѕС‚РѕРІРѕ",
                "РќР°Р·Р°Рґ": "РќР°Р·Р°Рґ",
                "Р”Р°Р»РµРµ": "Р”Р°Р»РµРµ",
                "РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі": "РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі",
                "РЎРґРµР»Р°РЅРѕ СЃ РїРѕРјРѕС‰СЊСЋ": "РЎРґРµР»Р°РЅРѕ СЃ РїРѕРјРѕС‰СЊСЋ",
                Email: "Email",
                "РРјСЏ": "РРјСЏ",
                "РўРµР»РµС„РѕРЅ": "РўРµР»РµС„РѕРЅ",
                "Р—Р° РєР°Р¶РґС‹Р№ РѕС‚РІРµС‚": "Р—Р° РєР°Р¶РґС‹Р№ РѕС‚РІРµС‚",
                "РЎРєРёРґРєР°": "РЎРєРёРґРєР°",
                "Р”СЂСѓРіРѕРµ": "Р”СЂСѓРіРѕРµ",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃР»РµРІР°": "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃР»РµРІР°",
                "РџСЂРµРґРѕСЃС‚Р°РІР»СЏСЏ РІР°С€Рё РєРѕРЅС‚Р°РєС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ, РІС‹ СЃРѕРіР»Р°С€Р°РµС‚РµСЃСЊ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРё РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ": "РџСЂРµРґРѕСЃС‚Р°РІР»СЏСЏ РІР°С€Рё РєРѕРЅС‚Р°РєС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ, РІС‹ СЃРѕРіР»Р°С€Р°РµС‚РµСЃСЊ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРё РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ",
                "РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёРј СЃРѕРіР»Р°С€РµРЅРёРµРј": "РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёРј СЃРѕРіР»Р°С€РµРЅРёРµРј",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃРЅРёР·Сѓ": "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃРЅРёР·Сѓ",
                "РћС‚": "РћС‚",
                "Р”Рѕ": "Р”Рѕ",
                "РџРЅ": "РџРЅ",
                "Р’С‚": "Р’С‚",
                "РЎСЂ": "РЎСЂ",
                "Р§С‚": "Р§С‚",
                "РџС‚": "РџС‚",
                "РЎР±": "РЎР±",
                "Р’СЃ": "Р’СЃ",
                "РЇРЅРІР°СЂСЊ": "РЇРЅРІР°СЂСЊ",
                "Р¤РµРІСЂР°Р»СЊ": "Р¤РµРІСЂР°Р»СЊ",
                "РњР°СЂС‚": "РњР°СЂС‚",
                "РђРїСЂРµР»СЊ": "РђРїСЂРµР»СЊ",
                "РњР°Р№": "РњР°Р№",
                "РСЋРЅСЊ": "РСЋРЅСЊ",
                "РСЋР»СЊ": "РСЋР»СЊ",
                "РђРІРіСѓСЃС‚": "РђРІРіСѓСЃС‚",
                "РЎРµРЅС‚СЏР±СЂСЊ": "РЎРµРЅС‚СЏР±СЂСЊ",
                "РћРєС‚СЏР±СЂСЊ": "РћРєС‚СЏР±СЂСЊ",
                "РќРѕСЏР±СЂСЊ": "РќРѕСЏР±СЂСЊ",
                "Р”РµРєР°Р±СЂСЊ": "Р”РµРєР°Р±СЂСЊ",
                "РЈ РјРµРЅСЏ РЅРµС‚ email": "РЈ РјРµРЅСЏ РЅРµС‚ email",
                "Р’РІРµРґРёС‚Рµ РёРјСЏ": "Р’РІРµРґРёС‚Рµ РёРјСЏ",
                "Р’РІРµРґРёС‚Рµ С‚РµР»РµС„РѕРЅ": "Р’РІРµРґРёС‚Рµ С‚РµР»РµС„РѕРЅ",
                "Р’РІРµРґРёС‚Рµ email": "Р’РІРµРґРёС‚Рµ email",
                "mail@mail.ru": "mail@mail.ru",
                "РРіРѕСЂСЊ": "РРіРѕСЂСЊ",
                "+7 (900) 000-00-00": "+7 (900) 000-00-00",
                "РЎРµР№С‡Р°СЃ": "РЎРµР№С‡Р°СЃ",
                "РЎР±СЂРѕСЃ": "РЎР±СЂРѕСЃ",
                "Р”РµР№СЃС‚РІСѓРµС‚ РµС‰Рµ": "Р”РµР№СЃС‚РІСѓРµС‚ РµС‰Рµ",
                "РљР°С‚Р°Р»РѕРі РІ РїРѕРґР°СЂРѕРє": "РљР°С‚Р°Р»РѕРі РІ РїРѕРґР°СЂРѕРє",
                "РџСЂР°Р№СЃ-Р»РёСЃС‚": "РџСЂР°Р№СЃ-Р»РёСЃС‚",
                "РћС‚Р»РёС‡РЅРѕ. РћСЃС‚Р°Р»СЃСЏ РїРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "РћС‚Р»РёС‡РЅРѕ. РћСЃС‚Р°Р»СЃСЏ РїРѕСЃР»РµРґРЅРёР№ С€Р°Рі!",
                "РЎ": "РЎ",
                "РѕР·РЅР°РєРѕРјР»РµРЅ": "РѕР·РЅР°РєРѕРјР»РµРЅ",
                "РїРѕР»РёС‚РёРєРѕР№ РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё": "РїРѕР»РёС‚РёРєРѕР№ РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё",
                'Рљ СЌС‚РѕР№ РіСЂСѓРїРїРµ РїСЂРёРІСЏР·Р°РЅ РєРІРёР· "{title}"': 'Рљ СЌС‚РѕР№ РіСЂСѓРїРїРµ РїСЂРёРІСЏР·Р°РЅ РєРІРёР· "{title}"',
                "Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ РєРІРёР·": "Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ РєРІРёР·",
                "РџСЂРёРІСЏР·Р°С‚СЊ РґСЂСѓРіРѕР№ РєРІРёР·": "РџСЂРёРІСЏР·Р°С‚СЊ РґСЂСѓРіРѕР№ РєРІРёР·",
                'Р§С‚РѕР±С‹ РїСЂРёРІСЏР·Р°С‚СЊ РєРІРёР· Рє РіСЂСѓРїРїРµ vk, РІРІРµРґРёС‚Рµ РµРіРѕ id Рё РЅР°Р¶РјРёС‚Рµ "РџСЂРёРІСЏР·Р°С‚СЊ"': 'Р§С‚РѕР±С‹ РїСЂРёРІСЏР·Р°С‚СЊ РєРІРёР· Рє РіСЂСѓРїРїРµ vk, РІРІРµРґРёС‚Рµ РµРіРѕ id Рё РЅР°Р¶РјРёС‚Рµ "РџСЂРёРІСЏР·Р°С‚СЊ"',
                "Р’РІРµРґРёС‚Рµ id РєРІРёР·Р°": "Р’РІРµРґРёС‚Рµ id РєРІРёР·Р°",
                "РџСЂРёРІСЏР·Р°С‚СЊ": "РџСЂРёРІСЏР·Р°С‚СЊ",
                "Р’Р°С€Рё Р±РѕРЅСѓСЃС‹": "Р’Р°С€Рё Р±РѕРЅСѓСЃС‹",
                "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РјРµСЃСЃРµРЅРґР¶РµСЂ": "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РјРµСЃСЃРµРЅРґР¶РµСЂ",
                "РљСѓРґР° РїСЂРёСЃС‹Р»Р°С‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹?": "РљСѓРґР° РїСЂРёСЃС‹Р»Р°С‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹?",
                "Р’РµСЂРЅСѓС‚СЊСЃСЏ Рє РІРІРѕРґСѓ РєРѕРЅС‚Р°РєС‚РѕРІ": "Р’РµСЂРЅСѓС‚СЊСЃСЏ Рє РІРІРѕРґСѓ РєРѕРЅС‚Р°РєС‚РѕРІ",
                "Р’С‹Р±СЂР°С‚СЊ РґСЂСѓРіРѕР№ РјРµСЃСЃРµРЅРґР¶РµСЂ": "Р’С‹Р±СЂР°С‚СЊ РґСЂСѓРіРѕР№ РјРµСЃСЃРµРЅРґР¶РµСЂ",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ": "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ РёР»Рё id": "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ РёР»Рё id",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ": "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ РёР»Рё Р»РѕРіРёРЅ": "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ РёР»Рё Р»РѕРіРёРЅ",
                "РљР°С‚Р°Р»РѕРі": "РљР°С‚Р°Р»РѕРі",
                "РЎРґРµР»Р°РЅРѕ РІ": "РЎРґРµР»Р°РЅРѕ РІ",
                "РЎРєР°С‡Р°С‚СЊ": "РЎРєР°С‡Р°С‚СЊ",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚": "РџСЂРѕР№С‚Рё С‚РµСЃС‚",
                "Р‘РѕРЅСѓСЃС‹ РїРѕСЃР»Рµ РїСЂРѕС…РѕР¶РґРµРЅРёСЏ С‚РµСЃС‚Р°": "Р‘РѕРЅСѓСЃС‹ РїРѕСЃР»Рµ РїСЂРѕС…РѕР¶РґРµРЅРёСЏ С‚РµСЃС‚Р°",
                "С‚Р°РєРѕР№ РєРІРёР· РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚": "С‚Р°РєРѕР№ РєРІРёР· РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚",
                "РЅРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ С‚РµСЃС‚": "РЅРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ С‚РµСЃС‚",
                "Р’С‹Р±РµСЂРёС‚Рµ РѕРґРёРЅ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ": "Р’С‹Р±РµСЂРёС‚Рµ РѕРґРёРЅ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ",
                "РІС‹Р±РµСЂРёС‚Рµ РѕРґРёРЅ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ": "РІС‹Р±РµСЂРёС‚Рµ РѕРґРёРЅ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ",
                "РјРѕР¶РЅРѕ РїСЂРѕРїСѓСЃС‚РёС‚СЊ": "РјРѕР¶РЅРѕ РїСЂРѕРїСѓСЃС‚РёС‚СЊ",
                "РњС‹ РЅРµ СЃРјРѕРіР»Рё СЂР°СЃСЃС‡РёС‚Р°С‚СЊ РґР»СЏ РІР°СЃ СЂРµР·СѓР»СЊС‚Р°С‚": "РњС‹ РЅРµ СЃРјРѕРіР»Рё СЂР°СЃСЃС‡РёС‚Р°С‚СЊ РґР»СЏ РІР°СЃ СЂРµР·СѓР»СЊС‚Р°С‚",
                "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ РµС‰С‘ СЂР°Р·": "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ РµС‰С‘ СЂР°Р·",
                "РџРѕР»СѓС‡РёС‚Рµ РІР°С€Рё Р±РѕРЅСѓСЃС‹ РґР°Р»РµРµ": "РџРѕР»СѓС‡РёС‚Рµ РІР°С€Рё Р±РѕРЅСѓСЃС‹ РґР°Р»РµРµ",
                "РЈР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅРµРµ": "РЈР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅРµРµ",
                "РџРѕРґСЃС‡С‘С‚ СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ": "РџРѕРґСЃС‡С‘С‚ СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ",
                "{cost} {currency}": "{cost} {currency}",
                "РґРѕ {cost} {currency}": "РґРѕ {cost} {currency}",
                "РѕС‚ {cost} {currency}": "РѕС‚ {cost} {currency}",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚ Р·Р°РЅРѕРІРѕ": "РџСЂРѕР№С‚Рё С‚РµСЃС‚ Р·Р°РЅРѕРІРѕ",
                "РќРµ Р·РЅР°СЋ, С‡С‚Рѕ РІС‹Р±СЂР°С‚СЊ": "РќРµ Р·РЅР°СЋ, С‡С‚Рѕ РІС‹Р±СЂР°С‚СЊ",
                "РёР»Рё": "РёР»Рё",
                "Р’Р°С€Рё СЂРµР·СѓР»СЊС‚Р°С‚С‹": "Р’Р°С€Рё СЂРµР·СѓР»СЊС‚Р°С‚С‹",
                "Р’С‹Р±РµСЂРёС‚Рµ РёРЅС‚РµСЂРµСЃСѓСЋС‰РёР№ РІР°СЃ РІР°СЂРёР°РЅС‚": "Р’С‹Р±РµСЂРёС‚Рµ РёРЅС‚РµСЂРµСЃСѓСЋС‰РёР№ РІР°СЃ РІР°СЂРёР°РЅС‚"
            }
        },
        uk: {
            translation: {
                "Р’Р°С€Р° СЃРєРёРґРєР°": "Р’Р°С€Р° Р·РЅРёР¶РєР°",
                "РћС‚Р»РёС‡РЅРѕ. РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "Р”РѕР±СЂРµ, РѕСЃС‚Р°РЅРЅС–Р№ РєСЂРѕРє!",
                "РС‚РѕРіРѕРІР°СЏ СЃРєРёРґРєР°": "РџС–РґСЃСѓРјРєРѕРІР° Р·РЅРёР¶РєР°",
                "Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ": "Р”РѕРґР°С‚РєРѕРІРѕ",
                "РџРѕР»СѓС‡РёС‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹": "РћС‚СЂРёРјР°С‚Рё СЂРµР·СѓР»СЊС‚Р°С‚Рё",
                "РЎРїР°СЃРёР±Рѕ": "Р”СЏРєСѓС”РјРѕ",
                "Р“РѕС‚РѕРІРѕ": "Р“РѕС‚РѕРІРѕ",
                "РќР°Р·Р°Рґ": "РќР°Р·Р°Рґ",
                "Р”Р°Р»РµРµ": "Р”Р°Р»С–",
                "РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі": "РћСЃС‚Р°РЅРЅС–Р№ РєСЂРѕРє",
                "РЎРґРµР»Р°РЅРѕ СЃ РїРѕРјРѕС‰СЊСЋ": "Р—СЂРѕР±Р»РµРЅРѕ Р·Р°РґРѕРїРѕРјРѕРіРѕСЋ",
                Email: "Email",
                "РРјСЏ": "Р†РјвЂСЏ",
                "РўРµР»РµС„РѕРЅ": "РўРµР»РµС„РѕРЅ",
                "Р—Р° РєР°Р¶РґС‹Р№ РѕС‚РІРµС‚": "Р—Р° РєРѕР¶РµРЅ РІС–РґРїРѕРІС–РґСЊ",
                "РЎРєРёРґРєР°": "Р—РЅРёР¶РєР°",
                "Р”СЂСѓРіРѕРµ": "Р†РЅС€Рµ",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃР»РµРІР°": "Р’РёР±РµСЂС–С‚СЊ РІР°СЂС–Р°РЅС‚ РІС–РґРїРѕРІС–РґС– Р·Р»С–РІР°",
                "РџСЂРµРґРѕСЃС‚Р°РІР»СЏСЏ РІР°С€Рё РєРѕРЅС‚Р°РєС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ, РІС‹ СЃРѕРіР»Р°С€Р°РµС‚РµСЃСЊ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРё РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ": "РќР°РґР°СЋС‡Рё РІР°С€С– РєРѕРЅС‚Р°РєС‚РЅС– РґР°РЅС–, РІРё РїРѕРіРѕРґР¶СѓС”С‚РµСЃСЏ РЅР° РѕР±СЂРѕР±РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅРёС… РґР°РЅРёС… РІС–РґРїРѕРІС–РґРЅРѕ РґРѕ РїСЂРёР·РЅР°С‡РµРЅРёРј РґР»СЏ",
                "РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёРј СЃРѕРіР»Р°С€РµРЅРёРµРј": "РєРѕСЂРёСЃС‚СѓРІР°С‡Р° СѓРіРѕРґРѕСЋ",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃРЅРёР·Сѓ": "Р’РёР±РµСЂС–С‚СЊ РІР°СЂС–Р°РЅС‚ РІС–РґРїРѕРІС–РґС– Р·РЅРёР·Сѓ",
                "РћС‚": "Р’С–Рґ",
                "Р”Рѕ": "Р”Рѕ",
                "РџРЅ": "РџРЅ",
                "Р’С‚": "Р’С‚",
                "РЎСЂ": "РЎСЂ",
                "Р§С‚": "Р§С‚",
                "РџС‚": "РџС‚",
                "РЎР±": "РЎР±",
                "Р’СЃ": "РќРґ",
                "РЇРЅРІР°СЂСЊ": "РЎС–С‡РµРЅСЊ",
                "Р¤РµРІСЂР°Р»СЊ": "Р›СЋС‚РёР№",
                "РњР°СЂС‚": "Р‘РµСЂРµР·РµРЅСЊ",
                "РђРїСЂРµР»СЊ": "РљРІС–С‚РµРЅСЊ",
                "РњР°Р№": "РўСЂР°РІРµРЅСЊ",
                "РСЋРЅСЊ": "Р§РµСЂРІРµРЅСЊ",
                "РСЋР»СЊ": "Р›РёРїРµРЅСЊ",
                "РђРІРіСѓСЃС‚": "РЎРµСЂРїРµРЅСЊ",
                "РЎРµРЅС‚СЏР±СЂСЊ": "Р’РµСЂРµСЃРµРЅСЊ",
                "РћРєС‚СЏР±СЂСЊ": "Р–РѕРІС‚РµРЅСЊ",
                "РќРѕСЏР±СЂСЊ": "Р›РёСЃС‚РѕРїР°Рґ",
                "Р”РµРєР°Р±СЂСЊ": "Р“СЂСѓРґРµРЅСЊ",
                "РЈ РјРµРЅСЏ РЅРµС‚ email": "РЈ РјРµРЅРµ РЅРµРјР°С” email",
                "Р’РІРµРґРёС‚Рµ РёРјСЏ": "Р’РІРµРґС–С‚СЊ С–Рј'СЏ",
                "Р’РІРµРґРёС‚Рµ С‚РµР»РµС„РѕРЅ": "Р’РІРµРґС–С‚СЊ С‚РµР»РµС„РѕРЅ",
                "Р’РІРµРґРёС‚Рµ email": "Р’РІРµРґС–С‚СЊ email",
                "mail@mail.ru": "mail@mail.ua",
                "РРіРѕСЂСЊ": "Р†РіРѕСЂ",
                "+7 (900) 000-00-00": "+38 (000) 00 00 00",
                "РЎРµР№С‡Р°СЃ": "Р—Р°СЂР°Р·",
                "РЎР±СЂРѕСЃ": "РЎРєРёРґР°РЅРЅСЏ",
                "Р”РµР№СЃС‚РІСѓРµС‚ РµС‰Рµ": "Р”С–С” С‰Рµ",
                "РљР°С‚Р°Р»РѕРі РІ РїРѕРґР°СЂРѕРє": "РљР°С‚Р°Р»РѕРі РІ РїРѕРґР°СЂСѓРЅРѕРє",
                "РџСЂР°Р№СЃ-Р»РёСЃС‚": "РџСЂР°Р№СЃ-Р»РёСЃС‚",
                "РћС‚Р»РёС‡РЅРѕ. РћСЃС‚Р°Р»СЃСЏ РїРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "Р’С–РґРјС–РЅРЅРѕ. Р—Р°Р»РёС€РёРІСЃСЏ РѕСЃС‚Р°РЅРЅС–Р№ РєСЂРѕРє!",
                "РЎ": "РЎ",
                "РїРѕР»РёС‚РёРєРѕР№ РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё": "РїРѕР»С–С‚РёРєРѕСЋ РєРѕРЅС„С–РґРµРЅС†С–Р№РЅРѕСЃС‚С–",
                "РѕР·РЅР°РєРѕРјР»РµРЅ": "РѕР·РЅР°Р№РѕРјР»РµРЅРёР№",
                'Рљ СЌС‚РѕР№ РіСЂСѓРїРїРµ РїСЂРёРІСЏР·Р°РЅ РєРІРёР· "{title}"': 'Р”Рѕ С†С–С”С— РіСЂСѓРїРё РїСЂРёРІ\'СЏР·Р°РЅРёР№ РєРІС–Р· "{title}"',
                "Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ РєРІРёР·": "Р РµРґР°РіСѓРІР°С‚Рё РєРІС–Р·",
                "РџСЂРёРІСЏР·Р°С‚СЊ РґСЂСѓРіРѕР№ РєРІРёР·": "РџСЂРёРІ'СЏР·Р°С‚Рё С–РЅС€РёР№ РєРІС–Р·",
                'Р§С‚РѕР±С‹ РїСЂРёРІСЏР·Р°С‚СЊ РєРІРёР· Рє РіСЂСѓРїРїРµ vk, РІРІРµРґРёС‚Рµ РµРіРѕ id Рё РЅР°Р¶РјРёС‚Рµ "РџСЂРёРІСЏР·Р°С‚СЊ"': "Р©РѕР± РїСЂРёРІ'СЏР·Р°С‚Рё РєРІС–Р· РґРѕ РіСЂСѓРїРё vk, РІРІРµРґС–С‚СЊ Р№РѕРіРѕ id С– РЅР°С‚РёСЃРЅС–С‚СЊ \"РџСЂРёРІ'СЏР·Р°С‚Рё\"",
                "Р’РІРµРґРёС‚Рµ id РєРІРёР·Р°": "Р’РІРµРґС–С‚СЊ id РєРІС–Р·Р°",
                "РџСЂРёРІСЏР·Р°С‚СЊ": "РџСЂРёРІ'СЏР·Р°С‚Рё",
                "Р’Р°С€Рё Р±РѕРЅСѓСЃС‹": "Р’Р°С€С– Р±РѕРЅСѓСЃРё",
                "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РјРµСЃСЃРµРЅРґР¶РµСЂ": "Р’РёРєРѕСЂРёСЃС‚РѕРІСѓРІР°С‚Рё РјРµСЃРµРЅРґР¶РµСЂ",
                "РљСѓРґР° РїСЂРёСЃС‹Р»Р°С‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹?": "РљСѓРґРё РЅР°РґСЃРёР»Р°С‚Рё СЂРµР·СѓР»СЊС‚Р°С‚Рё?",
                "Р’РµСЂРЅСѓС‚СЊСЃСЏ Рє РІРІРѕРґСѓ РєРѕРЅС‚Р°РєС‚РѕРІ": "РџРѕРІРµСЂРЅСѓС‚РёСЃСЏ РґРѕ РІРІРµРґРµРЅРЅСЏ РєРѕРЅС‚Р°РєС‚С–РІ",
                "Р’С‹Р±СЂР°С‚СЊ РґСЂСѓРіРѕР№ РјРµСЃСЃРµРЅРґР¶РµСЂ": "Р’РёР±СЂР°С‚Рё С–РЅС€Рµ РјРµСЃРµРЅРґР¶РµСЂ",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ": "Р’РІРµРґС–С‚СЊ Р»РѕРіС–РЅ",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ РёР»Рё id": "Р’РІРµРґС–С‚СЊ Р»РѕРіС–РЅ Р°Р±Рѕ id",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ": "Р’РІРµРґС–С‚СЊ РЅРѕРјРµСЂ",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ РёР»Рё Р»РѕРіРёРЅ": "Р’РІРµРґС–С‚СЊ РЅРѕРјРµСЂ Р°Р±Рѕ Р»РѕРіС–РЅ",
                "РљР°С‚Р°Р»РѕРі": "РљР°С‚Р°Р»РѕРі",
                "РЎРґРµР»Р°РЅРѕ РІ": "Р—СЂРѕР±Р»РµРЅРѕ РІ",
                "РЎРєР°С‡Р°С‚СЊ": "Р—Р°РІР°РЅС‚Р°Р¶РёС‚Рё",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚": "РџСЂРѕР№С‚Рё С‚РµСЃС‚",
                "Р‘РѕРЅСѓСЃС‹ РїРѕСЃР»Рµ РїСЂРѕС…РѕР¶РґРµРЅРёСЏ С‚РµСЃС‚Р°": "Р‘РѕРЅСѓСЃРё РїС–СЃР»СЏ РїСЂРѕС…РѕРґР¶РµРЅРЅСЏ С‚РµСЃС‚Сѓ",
                "С‚Р°РєРѕР№ РєРІРёР· РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚": "С‚Р°РєРёР№ РєРІС–Р· РЅРµ С–СЃРЅСѓС”",
                "РЅРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ С‚РµСЃС‚": "РЅРµ РІРґР°Р»РѕСЃСЏ Р·Р°РІР°РЅС‚Р°Р¶РёС‚Рё С‚РµСЃС‚",
                "РІС‹Р±РµСЂРёС‚Рµ РѕРґРёРЅ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ": "РІРёР±РµСЂС–С‚СЊ РѕРґРёРЅ Р°Р±Рѕ РґРµРєС–Р»СЊРєР°",
                "РјРѕР¶РЅРѕ РїСЂРѕРїСѓСЃС‚РёС‚СЊ": "РјРѕР¶РЅР° РїСЂРѕРїСѓСЃС‚РёС‚Рё",
                "РњС‹ РЅРµ СЃРјРѕРіР»Рё СЂР°СЃСЃС‡РёС‚Р°С‚СЊ РґР»СЏ РІР°СЃ СЂРµР·СѓР»СЊС‚Р°С‚": "РњРё РЅРµ Р·РјРѕРіР»Рё СЂРѕР·СЂР°С…СѓРІР°С‚Рё РґР»СЏ РІР°СЃ СЂРµР·СѓР»СЊС‚Р°С‚",
                "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ РµС‰С‘ СЂР°Р·": "РЎРїСЂРѕР±СѓРІР°С‚Рё С‰Рµ СЂР°Р·",
                "РџРѕР»СѓС‡РёС‚Рµ РІР°С€Рё Р±РѕРЅСѓСЃС‹ РґР°Р»РµРµ": "РћС‚СЂРёРјР°Р№С‚Рµ РІР°С€С– Р±РѕРЅСѓСЃРё РґР°Р»С–",
                "РЈР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅРµРµ": "Р”С–Р·РЅР°С‚РёСЃСЊ РґРµС‚Р°Р»СЊРЅС–С€Рµ",
                "РџРѕРґСЃС‡С‘С‚ СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ": "РџС–РґСЂР°С…СѓРЅРѕРє СЂРµР·СѓР»СЊС‚Р°С‚С–РІ",
                "{cost} {currency}": "{cost} {currency}",
                "РґРѕ {cost} {currency}": "РґРѕ {cost} {currency}",
                "РѕС‚ {cost} {currency}": "РІС–Рґ {cost} {currency}",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚ Р·Р°РЅРѕРІРѕ": "РџСЂРѕР№С‚Рё С‚РµСЃС‚ Р·Р°РЅРѕРІРѕ",
                "РќРµ Р·РЅР°СЋ, С‡С‚Рѕ РІС‹Р±СЂР°С‚СЊ": "РќРµ Р·РЅР°СЋ, С‰Рѕ РІРёР±СЂР°С‚Рё",
                "РёР»Рё": "Р°Р±Рѕ",
                "Р’Р°С€Рё СЂРµР·СѓР»СЊС‚Р°С‚С‹": "Р’Р°С€С– СЂРµР·СѓР»СЊС‚Р°С‚Рё",
                "Р’С‹Р±РµСЂРёС‚Рµ РёРЅС‚РµСЂРµСЃСѓСЋС‰РёР№ РІР°СЃ РІР°СЂРёР°РЅС‚": "Р’РёР±РµСЂС–С‚СЊ С†С–РєР°РІРёР№ РґР»СЏ РІР°СЃ РІР°СЂС–Р°РЅС‚"
            }
        },
        zh: {
            translation: {
                "Р’Р°С€Р° СЃРєРёРґРєР°": "жЉж‰Јдјжѓ ",
                "РћС‚Р»РёС‡РЅРѕ. РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "еҐЅзљ„пјЊжњЂеђЋдёЂж­Ґ",
                "РС‚РѕРіРѕРІР°СЏ СЃРєРёРґРєР°": "жњЂз»€жЉж‰Ј",
                "Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ": "й™„еЉ ",
                "РџРѕР»СѓС‡РёС‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹": "з»“жћњ",
                "РЎРїР°СЃРёР±Рѕ": "и°ўи°ў",
                "Р“РѕС‚РѕРІРѕ": "е®Њж€ђ",
                "РќР°Р·Р°Рґ": "иї”е›ћ",
                "Р”Р°Р»РµРµ": "дё‹дёЂж­Ґ",
                "РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі": "жњЂеђЋдёЂж­Ґ",
                "РЎРґРµР»Р°РЅРѕ СЃ РїРѕРјРѕС‰СЊСЋ": "еЌЏеЉ©и®ѕи®Ў",
                Email: "з”µе­ђй‚®д»¶",
                "РРјСЏ": "еђЌе­—",
                "РўРµР»РµС„РѕРЅ": "з”µиЇќ",
                "Р—Р° РєР°Р¶РґС‹Р№ РѕС‚РІРµС‚": "жЇЏдёЂдёЄз­”жЎ€",
                "РЎРєРёРґРєР°": "жЉж‰Јдјжѓ ",
                "Р”СЂСѓРіРѕРµ": "е…¶д»–",
                "РќР°С‡РЅРёС‚Рµ РѕС‚РІРµС‡Р°С‚СЊ РґР»СЏ РїРѕРґР±РѕСЂР° РІР°СЂРёР°РЅС‚РѕРІ": "ејЂе§‹е›ћз­”е¤љй‡ЌйЂ‰ж‹©",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃР»РµРІР°": "йЂ‰ж‹©е·¦дѕ§зљ„з­”жЎ€йЂ‰йЎ№",
                "РџСЂРµРґРѕСЃС‚Р°РІР»СЏСЏ РІР°С€Рё РєРѕРЅС‚Р°РєС‚РЅС‹Рµ РґР°РЅРЅС‹Рµ, РІС‹ СЃРѕРіР»Р°С€Р°РµС‚РµСЃСЊ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅРѕР№ РёРЅС„РѕСЂРјР°С†РёРё РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ": "йЂљиї‡жЏђдѕ›ж‚Ёзљ„иЃ”зі»дїЎжЃЇпјЊж‚ЁеђЊж„ЏжЊ‰з…§д»Ґдё‹ж–№ејЏе¤„зђ†дёЄдєєдїЎжЃЇ",
                "РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёРј СЃРѕРіР»Р°С€РµРЅРёРµРј": "з”Ёж€·еЌЏи®®",
                "Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РѕС‚РІРµС‚Р° СЃРЅРёР·Сѓ": "д»Ћдё‹йќўйЂ‰ж‹©з­”жЎ€",
                "РћС‚": "д»Ћ",
                "Р”Рѕ": "и‡і",
                "РџРЅ": "е‘ЁдёЂ",
                "Р’С‚": "е‘ЁдєЊ",
                "РЎСЂ": "е‘Ёдё‰",
                "Р§С‚": "е‘Ёе››",
                "РџС‚": "е‘Ёдє”",
                "РЎР±": "е‘Ёе…­",
                "Р’СЃ": "е‘Ёдёѓ",
                "РЇРЅРІР°СЂСЊ": "дёЂжњ€",
                "Р¤РµРІСЂР°Р»СЊ": "дєЊжњ€",
                "РњР°СЂС‚": "дё‰жњ€",
                "РђРїСЂРµР»СЊ": "е››жњ€",
                "РњР°Р№": "дє”жњ€",
                "РСЋРЅСЊ": "е…­жњ€",
                "РСЋР»СЊ": "дёѓжњ€",
                "РђРІРіСѓСЃС‚": "е…«жњ€",
                "РЎРµРЅС‚СЏР±СЂСЊ": "д№ќжњ€",
                "РћРєС‚СЏР±СЂСЊ": "еЌЃжњ€",
                "РќРѕСЏР±СЂСЊ": "еЌЃдёЂжњ€",
                "Р”РµРєР°Р±СЂСЊ": "еЌЃдєЊжњ€",
                "РЈ РјРµРЅСЏ РЅРµС‚ email": "ж€‘жІЎжњ‰з”µе­ђй‚®д»¶",
                "Р’РІРµРґРёС‚Рµ РёРјСЏ": "иѕ“е…ҐеђЌз§°",
                "Р’РІРµРґРёС‚Рµ С‚РµР»РµС„РѕРЅ": "иѕ“е…Ґз”µиЇќ",
                "Р’РІРµРґРёС‚Рµ email": "иѕ“е…Ґй‚®з®±",
                "mail@mail.ru": "mail@mail.com",
                "РРіРѕСЂСЊ": "дјЉж€€е°”",
                "+7 (900) 000-00-00": "021 00000000",
                "РЎРµР№С‡Р°СЃ": "зЋ°ењЁ",
                "РЎР±СЂРѕСЃ": "й‡ЌзЅ®",
                "Р”РµР№СЃС‚РІСѓРµС‚ РµС‰Рµ": "иїжњ‰ж›ґе¤љ",
                "РљР°С‚Р°Р»РѕРі РІ РїРѕРґР°СЂРѕРє": "з¤је“Ѓз›®еЅ•",
                "РџСЂР°Р№СЃ-Р»РёСЃС‚": "д»·з›®иЎЁ",
                "РћС‚Р»РёС‡РЅРѕ. РћСЃС‚Р°Р»СЃСЏ РїРѕСЃР»РµРґРЅРёР№ С€Р°Рі!": "дјз§Ђзљ„гЂ‚жњЂеђЋдёЂж­Ґдє†пјЃ",
                "РЎ": "",
                "РїРѕР»РёС‚РёРєРѕР№ РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё": "ж€‘е·Ій…иЇ»йљђз§Ѓ",
                "РѕР·РЅР°РєРѕРјР»РµРЅ": "ж”їз­–",
                'Рљ СЌС‚РѕР№ РіСЂСѓРїРїРµ РїСЂРёРІСЏР·Р°РЅ РєРІРёР· "{title}"': 'еЇ№иї™дёЄе°Џз»„й™„дёЉдє†жµ‹йЄЊ"{title}"',
                "Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ РєРІРёР·": "зј–иѕ‘жµ‹йЄЊ",
                "РџСЂРёРІСЏР·Р°С‚СЊ РґСЂСѓРіРѕР№ РєРІРёР·": "й“ѕжЋҐеЏ¦дёЂдёЄжµ‹йЄЊ",
                'Р§С‚РѕР±С‹ РїСЂРёРІСЏР·Р°С‚СЊ РєРІРёР· Рє РіСЂСѓРїРїРµ vk, РІРІРµРґРёС‚Рµ РµРіРѕ id Рё РЅР°Р¶РјРёС‚Рµ "РџСЂРёРІСЏР·Р°С‚СЊ"': "и¦Ѓе°†жµ‹йЄЊй“ѕжЋҐе€°vkз»„пјЊиЇ·иѕ“е…Ґе…¶IDе№¶еЌ•е‡»вЂњз»‘е®љвЂќ",
                "Р’РІРµРґРёС‚Рµ id РєРІРёР·Р°": "иѕ“е…Ґжµ‹йЄЊID",
                "РџСЂРёРІСЏР·Р°С‚СЊ": "еї«з…§",
                "Р’Р°С€Рё Р±РѕРЅСѓСЃС‹": "дЅ зљ„еҐ–й‡‘",
                "РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РјРµСЃСЃРµРЅРґР¶РµСЂ": "дЅїз”ЁеЌіж—¶йЂљи®Їе·Ґе…·",
                "РљСѓРґР° РїСЂРёСЃС‹Р»Р°С‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹?": "ж€‘ењЁе“Єй‡ЊеЏ‘йЂЃз»“жћњпјџ",
                "Р’РµСЂРЅСѓС‚СЊСЃСЏ Рє РІРІРѕРґСѓ РєРѕРЅС‚Р°РєС‚РѕРІ": "иї”е›ћиї›е…ҐиЃ”зі»дєє",
                "Р’С‹Р±СЂР°С‚СЊ РґСЂСѓРіРѕР№ РјРµСЃСЃРµРЅРґР¶РµСЂ": "йЂ‰ж‹©еЏ¦дёЂдёЄдїЎдЅї",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ": "иѕ“е…Ґз™»еЅ•еђЌ",
                "Р’РІРµРґРёС‚Рµ Р»РѕРіРёРЅ РёР»Рё id": "иѕ“е…Ґз™»еЅ•еђЌж€–ID",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ": "иѕ“е…Ґж•°е­—",
                "Р’РІРµРґРёС‚Рµ РЅРѕРјРµСЂ РёР»Рё Р»РѕРіРёРЅ": "иѕ“е…ҐеЏ·з Ѓж€–з™»еЅ•",
                "РљР°С‚Р°Р»РѕРі": "з›®еЅ•",
                "РЎРґРµР»Р°РЅРѕ РІ": "е€¶йЂ ",
                "РЎРєР°С‡Р°С‚СЊ": "дё‹иЅЅ",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚": "еЏ‚еЉ иЂѓиЇ•",
                "Р‘РѕРЅСѓСЃС‹ РїРѕСЃР»Рµ РїСЂРѕС…РѕР¶РґРµРЅРёСЏ С‚РµСЃС‚Р°": "йЂљиї‡жµ‹иЇ•еђЋзљ„еҐ–й‡‘",
                "С‚Р°РєРѕР№ РєРІРёР· РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚": "иї™ж ·зљ„жµ‹йЄЊдёЌе­ењЁ",
                "РЅРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ С‚РµСЃС‚": "жњЄиѓЅеЉ иЅЅжµ‹иЇ•",
                "РІС‹Р±РµСЂРёС‚Рµ РѕРґРёРЅ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ": "йЂ‰ж‹©дёЂдёЄж€–е¤љдёЄ",
                "РјРѕР¶РЅРѕ РїСЂРѕРїСѓСЃС‚РёС‚СЊ": "дЅ еЏЇд»Ґи·іиї‡",
                "РњС‹ РЅРµ СЃРјРѕРіР»Рё СЂР°СЃСЃС‡РёС‚Р°С‚СЊ РґР»СЏ РІР°СЃ СЂРµР·СѓР»СЊС‚Р°С‚": "ж€‘д»¬ж— жі•дёєж‚Ёи®Ўз®—з»“жћњгЂ‚",
                "РџРѕРїСЂРѕР±РѕРІР°С‚СЊ РµС‰С‘ СЂР°Р·": "е†ЌиЇ•дёЂж¬Ў",
                "РџРѕР»СѓС‡РёС‚Рµ РІР°С€Рё Р±РѕРЅСѓСЃС‹ РґР°Р»РµРµ": "иї›дёЂж­ҐиЋ·еѕ—еҐ–й‡‘",
                "РЈР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅРµРµ": "дє†и§Јж›ґе¤љ",
                "РџРѕРґСЃС‡С‘С‚ СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ": "и®Ўз®—з»“жћњ",
                "{cost} {currency}": "{cost}{currency}",
                "РґРѕ {cost} {currency}": "й«иѕѕ{cost}{currency}",
                "РѕС‚ {cost} {currency}": "д»Ћ{cost}{currency}",
                "РџСЂРѕР№С‚Рё С‚РµСЃС‚ Р·Р°РЅРѕРІРѕ": "е†Ќж¬ЎеЏ‚еЉ иЂѓиЇ•",
                "РќРµ Р·РЅР°СЋ, С‡С‚Рѕ РІС‹Р±СЂР°С‚СЊ": "ж€‘дёЌзџҐйЃ“иЇҐйЂ‰ж‹©д»Ђд№€",
                "РёР»Рё": "ж€–",
                "Р’Р°С€Рё СЂРµР·СѓР»СЊС‚Р°С‚С‹": "дЅ зљ„з»“жћњ",
                "Р’С‹Р±РµСЂРёС‚Рµ РёРЅС‚РµСЂРµСЃСѓСЋС‰РёР№ РІР°СЃ РІР°СЂРёР°РЅС‚": "йЂ‰ж‹©ж‚Ёж„џе…ґи¶Јзљ„йЂ‰йЎ№гЂ‚"
            }
        }
    }
}, , function(t, e) {}, function(t, e) {}, , , , , , function(t, e, s) {
    "use strict";
    function i(t) {
        s(253), s(255), s(254)
    }
    var n = s(57),
        a = s(393),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, , , , , , , , , , , , , , , , , , , , , , , function(t, e, s) {
    "use strict";
    e.a = function(t) {
        var e = {
            2560: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1440: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10
            }
        };
        switch (t) {
            case "vertical":
                break;
            case "horizontal":
                e = {
                    2560: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    1440: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    1024: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 10
                    }
                };
                break;
            case "square":
                e = {
                    2560: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    1440: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 10
                    }
                }
        }
        return e
    }
}, function(t, e, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = s(141),
        n = (s.n(i), s(17)),
        a = s(49),
        r = s.n(a),
        o = s(142),
        c = (s.n(o), s(48)),
        u = s(31),
        l = s.n(u),
        d = s(132),
        g = s(134),
        h = s(131),
        m = s(137),
        f = s(135),
        M = s(136),
        p = s(133),
        v = s(140),
        w = s.n(v),
        _ = s(145),
        L = s.n(_),
        C = s(144),
        y = s.n(C),
        b = s(146),
        D = s(139),
        A = s(147),
        I = s.n(A),
        j = s(148),
        N = s.n(j),
        x = s(149),
        T = s(138);
    s.i(D.a)(), n.a.use(r.a), n.a.use(d.a), n.a.use(N.a), n.a.use(g.a), n.a.use(m.a), n.a.use(M.a), n.a.use(p.a), n.a.use(b.a), n.a.use(h.a, {}), n.a.use(f.a, {
        translations: w.a,
        lang: c.a.state.lang
    }), n.a.use(I.a), n.a.config.productionTip = !1, s(143), l.a.parse(window.location.search).debug || L.a.config("https://05d355e71d8f43d196781729691f9e5b@sentry.io/305073").addPlugin(y.a, n.a).install(), new n.a({
        el: "#app",
        store: c.a,
        router: T.a,
        template: "<App/>",
        components: {
            App: x.a
        }
    })
}, function(t, e, s) {
    "use strict";
    var i = s(18),
        n = s.n(i),
        a = s(17);
    e.a = {
        namespaced: !0,
        state: {
            isStep2: !1,
            isThanksPage: !1,
            contacts: {},
            fields1: null,
            fields2: null,
            answerId: null,
            uuid: null
        },
        mutations: {
            showStep2: function(t) {
                t.isStep2 = !0
            },
            setContacts: function(t, e) {
                t.contacts = e
            },
            showThankPage: function(t) {
                t.isThanksPage = !0
            },
            setAnswerId: function(t, e) {
                t.answerId = e
            },
            setFields: function(t, e) {
                var s = e.fields1,
                    i = e.fields2;
                t.fields1 = s, t.fields2 = i
            },
            setSession: function(t, e) {
                var s = e.answerId,
                    i = e.uuid;
                t.answerId = s, t.uuid = i
            }
        },
        getters: {
            getEnabledFieldsOnStep1: function(t) {
                return t.fields1 ? t.fields1.filter(function(t) {
                    return t.enabled
                }) : [{
                    key: "email",
                    name: "Email",
                    enabled: !0
                }]
            },
            getEnabledFieldsOnStep2: function(t, e) {
                return 3 === e.getEnabledFieldsOnStep1.length ? [] : t.fields2 ? t.fields2.filter(function(t) {
                    return t.enabled
                }) : [{
                    key: "name",
                    name: "РРјСЏ",
                    enabled: !0
                }, {
                    key: "phone",
                    name: "РўРµР»РµС„РѕРЅ",
                    enabled: !0
                }]
            }
        },
        actions: {
            saveLead: function(t, e) {
                var s = t.state,
                    i = t.commit,
                    r = t.getters,
                    o = t.rootState;
                e.contacts = s.contacts, e.clientId = s.uuid, r.getEnabledFieldsOnStep2.length || (e.extra.notify = "now");
                var c = "/v1/answers";
                o.customAnswerEndpoint && (c = o.customAnswerEndpoint);
                var u = new n.a(function() {});
                return u = s.answerId ? a.a.axios.patch(c + "/" + s.answerId, e) : a.a.axios.post(c, e), u.then(function(t) {
                    i("setAnswerId", t.data.id)
                }), u
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(35),
        n = s.n(i),
        a = s(18),
        r = s.n(a),
        o = s(34),
        c = s.n(o),
        u = s(2),
        l = s.n(u),
        d = s(17),
        g = s(177),
        h = s(183),
        m = s.n(h),
        f = s(1),
        M = s.n(f),
        p = s(31),
        v = s.n(p),
        w = s(15),
        _ = s.n(w),
        L = s(176),
        C = {
            discountInterval: null
        },
        y = v.a.parse(window.location.search),
        b = function() {
            var t = {
                href: y.href
            };
            try {
                var e = y.utm ? JSON.parse(y.utm) : null;
                if (!e) {
                    e = s(153)(window.location.search)
                }
                e && (t.utm = e)
            } catch (t) {
                console.error(t)
            }
            try {
                var i = y.cookies ? JSON.parse(y.cookies) : null;
                i && (t.cookies = i)
            } catch (t) {
                console.error(t)
            }
            return t
        },
        D = {
            USD: "$",
            RUR: "в‚Ѕ",
            EUR: "в‚¬",
            UAH: "в‚ґ",
            BYB: "Br",
            KZT: "в‚ё",
            CNY: "ВҐ"
        };
    e.a = {
        namespaced: !0,
        state: {
            loaded: !1,
            id: null,
            isTemplate: !1,
            questions: [],
            activeQuestion: 0,
            leadForm: !1,
            results: {},
            isResultsShow: !1,
            isResultShow: !1,
            isResultLoaderShow: !1,
            mode: y.mode || "modal",
            info: {
                title: "",
                name: "",
                assistant: {
                    name: "",
                    title: "",
                    avatar: ""
                },
                form: {
                    text: "",
                    fields: ["name", "phone", "email"],
                    thanks: "",
                    extra: ""
                },
                marketing: {
                    discount: {}
                },
                design: {
                    colors: {
                        main: "#ca2f94",
                        buttonTextColor: "#fff"
                    }
                }
            },
            settings: {},
            whiteLabelDate: null,
            discount: 0,
            fixedDiscount: 0,
            answers: [],
            answersId: [],
            analyticUnique: !1,
            quizStarted: !1,
            hint: null,
            selectedResult: null
        },
        getters: {
            getQuestion: function(t) {
                return t.questions[t.activeQuestion]
            },
            countQuestions: function(t, e) {
                return e.activeQuestions.length
            },
            countAllQuestions: function(t) {
                return t.questions.length
            },
            questionNumber: function(t, e) {
                return e.getQuestion ? M.a.findIndex(e.activeQuestions, {
                    id: e.getQuestion.id
                }) + 1 : null
            },
            isIncreasingDiscount: function(t) {
                var e = M.a.get(t, "info.marketing.discount");
                return e && "increasing" === e.type
            },
            isMeltingDiscount: function(t) {
                var e = M.a.get(t, "info.marketing.discount");
                return e && "melting" === e.type
            },
            isIncreasingPercentDiscount: function(t) {
                var e = M.a.get(t, "info.marketing.discount");
                return e && "increasingPercent" === e.type
            },
            formattedDiscount: function(t) {
                return _()(t.discount).format("0,0")
            },
            getIncreasingDiscountStep: function(t, e) {
                var s = M.a.get(t, "info.marketing.discount");
                return M.a.get(s, "value") ? _()(Math.round(M.a.get(s, "value") / e.countQuestions)).format("0,0") : M.a.get(s, "percent") ? _()(Math.round(M.a.get(s, "percent") / e.countQuestions)).format("0,0") : void 0
            },
            getIncreasingPercentDiscountStep: function(t, e) {
                var s = M.a.get(t, "info.marketing.discount");
                return _()(Math.floor(M.a.get(s, "percent") / e.countQuestions * 100) / 100).format("0,0")
            },
            currencySymbol: function(t) {
                return D[t.currency] || D.RUR
            },
            discountCurrencySymbol: function(t) {
                return M.a.get(t, "info.marketing.discount.percent") ? "%" : D[t.currency] || D.RUR
            },
            getLastStep: function(t, e) {
                return e.countAllQuestions - 1
            },
            isVariantsQuestion: function(t, e) {
                return !M.a.get(e.getQuestion, "type") || M.a.indexOf(["answers", "variants", "images", "select", "one-image"], e.getQuestion.type) >= 0
            },
            isLastStep: function(t, e) {
                return t.activeQuestion === e.getLastStep
            },
            getAnswerValue: function(t, e) {
                var s = e.getQuestion;
                if (!s) return null;
                var i = e.isVariantsQuestion && "many" === s.select,
                    n = t.answers[t.activeQuestion];
                return n && n.a && 0 !== n.a.length ? n.a : i ? [] : null
            },
            getPassedPercent: function(t) {
                return t.activeQuestion / t.questions.length * 100
            },
            getIsFilled: function(t, e) {
                if (!e.getQuestion) return !1;
                if (M.a.indexOf(["date", "slider"], e.getQuestion.type) >= 0) {
                    var s = e.getAnswerValue,
                        i = M.a.get(e, "getQuestion.options.isRange"),
                        n = M.a.get(e, "getQuestion.options.hasTime");
                    return s && i ? n ? !!(s.from && s.to && s.timeFrom && s.timeTo) : n ? !!(s.from && s.to && s.timeFrom && s.timeTo) : !!s.from && !!s.to : !(!s || i) && (n ? !!s && !!s.time && !!s.date : !!s)
                }
                return "many" === e.getQuestion.select && e.isVariantsQuestion ? !!e.getAnswerValue.length : !!e.getAnswerValue
            },
            colors: function(t) {
                var e = M.a.get(t, "info.design.colors.main", "#ca2f94") || "#ca2f94";
                M.a.indexOf(e, "#") < 0 && (e = "#" + e);
                var s = void 0;
                try {
                    s = m()(e)
                } catch (t) {
                    s = null
                }
                s || (console.log("РќРµРїСЂР°РІРёР»СЊРЅС‹Р№ С†РІРµС‚: " + e), e = "#ca2f94", s = m()(e));
                var i = M.a.cloneDeep(s).darken(7).dark(),
                    n = M.a.get(t, "info.design.colors.buttonTextColor", i ? "#ffffff" : "#000000");
                return M.a.indexOf(n, "#") < 0 && (n = "#" + n), {
                    main: e,
                    lighten: m()(e).lighten(20).hex(),
                    lighten10: m()(e).lighten(10).hex(),
                    lighten2: m()(e).lighten(35).hex(),
                    darken: m()(e).darken(20).hex(),
                    darken10: m()(e).darken(10).hex(),
                    alpha: m()(e).alpha(.5).rgbString(),
                    alpha2: m()(e).alpha(.2).rgbString(),
                    gradientMain: "331deg, " + m()(e).darken(20).rgbString() + ", " + m()(e).lighten(20).rgbString(),
                    text: n,
                    text2: i ? e : "#000000"
                }
            },
            autoNextQuestion: function(t) {
                var e = !0;
                return t.questions.forEach(function(t) {
                    "many" === t.select && (e = !1), t.other && (e = !1), M.a.get(t.options, "hasTime") && (e = !1)
                }), e
            },
            activeQuestions: function(t) {
                if (!t.answersId.length) return t.questions;
                var e = M.a.map(t.questions, function(e, i) {
                    return 0 === i ? e : M.a.get(e, "display.conditions", []).length ? !!s.i(L.a)(e.display, t.questions, t.answersId) && e : e
                });
                return M.a.compact(e)
            },
            activeAnswers: function(t, e) {
                return M.a.filter(t.answers, function(t) {
                    return !!t && M.a.find(e.activeQuestions, {
                        title: t.q
                    })
                })
            },
            isWhiteLabelActive: function(t) {
                return t.whiteLabelDate > new Date
            },
            data: function(t, e) {
                var s = b();
                t.fixedDiscount && (s.discount = t.fixedDiscount), s.notify = M.a.get(t, "info.form.sendOnFirstStep", !0) ? "in 2 minutes" : "now";
                var i = M.a.cloneDeep(e.activeAnswers),
                    n = i.map(function(t, s) {
                        var i = e.activeQuestions[s].type,
                            n = e.activeQuestions[s].options;
                        return "date" === i && t.a && (t.a = g.a.getFormattedDate(n, t.a)), "slider" === i && (n.isRange ? t.a = t.a.from + " - " + t.a.to : t.a = String(t.a)), t
                    }),
                    a = {};
                return M.a.isEmpty(e.result) || ("content" === e.result.type ? a = {
                    id: e.result.id,
                    title: e.result.title,
                    cost: e.result.cost
                } : "redirect" === e.result.type && (a = {
                    id: e.result.id,
                    link: e.result.link
                })), {
                    quizId: t.id,
                    raw: t.answersId,
                    answers2: n,
                    extra: s,
                    result: a
                }
            },
            resultsPosition: function(t) {
                return !(!t.results || !M.a.get(t.results, "items", []).length) && M.a.get(t.results, "view", "afterForm")
            },
            isMultipleResults: function(t) {
                return M.a.get(t.results, "multiple", !1)
            },
            result: function(t, e) {
                if (t.selectedResult) return t.selectedResult;
                var s = e.suitableResults;
                return M.a.get(s, 0, {})
            },
            suitableResults: function(t) {
                var e = M.a.get(t.results, "items", []),
                    i = [];
                return M.a.each(e, function(e) {
                    var n = M.a.get(e, "display.conditions", []);
                    n.length ? s.i(L.a)(e.display, t.questions, t.answersId) && i.push(l()({}, e, {
                        _count: n.length
                    })) : i.push(l()({}, e, {
                        _count: 0
                    }))
                }), i = M.a.orderBy(i, ["_count"], ["desc"])
            }
        },
        mutations: {
            startQuiz: function(t) {
                t.quizStarted = !0, t.activeQuestion = 0, t.isResultShow = !1, t.isResultsShow = !1, t.selectedResult = null, t.leadForm = !1, t.answers = [], t.answersId = []
            },
            setQuestions: function(t, e) {
                t.questions = e
            },
            setActiveQuestion: function(t, e) {
                var s = e;
                s < 0 && (s = 0), s > t.questions.length && (s = t.questions.length), t.activeQuestion = s
            },
            setInfo: function(t, e) {
                t.info = l()({}, t.info, e), M.a.get(e, "form.fields", []).length || d.a.set(t.info.form, "fields", ["name", "phone", "email"])
            },
            setIsTemplate: function(t) {
                t.isTemplate = !0
            },
            setId: function(t, e) {
                t.id = e
            },
            setWhiteLabelDate: function(t, e) {
                t.whiteLabelDate = e ? new Date(e) : null
            },
            setAnswerValue: function(t, e) {
                var s = t.questions[t.activeQuestion],
                    i = {
                        q: s.title,
                        a: e
                    };
                d.a.set(t.answers, t.activeQuestion, i);
                var n = void 0;
                n = M.a.isArray(e) ? M.a.map(e, function(t) {
                    var e = M.a.find(s.answers, {
                        title: t
                    });
                    return e ? e.id : t
                }) : M.a.get(M.a.find(s.answers, {
                    title: e
                }), "id");
                var a = {
                    q: s.id,
                    a: n || e
                };
                d.a.set(t.answersId, t.activeQuestion, a)
            },
            loaded: function(t) {
                t.loaded = !0
            },
            setDiscount: function(t, e) {
                t.discount = e
            },
            setCurrency: function(t, e) {
                t.currency = e
            },
            fixDiscount: function(t) {
                t.fixedDiscount = t.discount
            },
            showLeadForm: function(t) {
                t.leadForm = !0, t.isResultLoaderShow = !1, t.isResultShow = !1, t.isResultsShow = !1
            },
            showResults: function(t) {
                t.isResultLoaderShow = !1, t.leadForm = !1, t.isResultShow = !1, t.isResultsShow = !0
            },
            showResult: function(t, e) {
                t.isResultLoaderShow = !1, t.leadForm = !1, t.isResultsShow = !1, t.isResultShow = !0, e && (t.selectedResult = e)
            },
            setResults: function(t, e) {
                t.results = e
            },
            setUniqueAnalytic: function(t, e) {
                t.analyticUnique = e
            },
            showResultLoader: function(t) {
                t.isResultLoaderShow = !0
            },
            setSettings: function(t, e) {
                t.settings = e
            },
            showHint: function(t, e) {
                t.hint = e
            },
            selectResult: function(t, e) {
                t.selectedResult = e
            }
        },
        actions: {
            get: function(t, e) {
                var s = this,
                    i = t.commit,
                    a = (t.state, t.getters, t.dispatch);
                return c()(n.a.mark(function t() {
                    var o, c, u, l, g, h, m, f, p, v;
                    return n.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, d.a.axios.get("v1/Quizzes/" + e);
                            case 2:
                                o = t.sent, c = o.data, i("loaded"), u = new r.a(function(t) {
                                    window.onmousemove = function() {
                                        t(), window.isActive = !0
                                    }
                                }), i("setQuestions", c.questions), i("setInfo", c.info), i("setId", c.id), i("setResults", c.results), !0 === c.isActive && i("setIsTemplate"), M.a.get(c, "settings.customAnswerEndpoint") && i("setCustomAnswerEndpoint", c.settings.customAnswerEndpoint, {
                                    root: !0
                                }), M.a.get(c, "readOnly.whiteLabelExpireAt") && i("setWhiteLabelDate", c.readOnly.whiteLabelExpireAt), M.a.get(c, "info.startPage.enabled", !1) || i("startQuiz"), M.a.get(c, "settings") && i("setSettings", c.settings), l = M.a.get(c, "settings.lng"), l || (l = M.a.get(c, "info.design.lng")), l && i("setLang", l, {
                                    root: !0
                                }), g = M.a.get(c, "settings.currency"), g || (g = M.a.get(c, "info.marketing.discount.currency")), g && i("setCurrency", g), h = [u], i("setUniqueAnalytic", M.a.get(c, "info.analytic.unique", !1)), m = M.a.get(c, "info.analytic.metrika.id"), m && h.push(d.a.analytic.init({
                                    yaCounterId: m
                                })), f = ["UA-113524925-1"], p = M.a.get(c, "info.analytic.ga.id"), p && f.push(p), f.length && h.push(d.a.analytic.init({
                                    gaIds: f
                                })), v = M.a.get(c, "info.analytic.fb.id"), v && h.push(d.a.analytic.init({
                                    fb: v
                                })), r.a.all(h).then(function() {
                                    a("analyticEvent", "marquiz-start")
                                }), c.info.marketing && a("setInitialDiscount", c.info.marketing);
                            case 33:
                            case "end":
                                return t.stop()
                        }
                    }, t, s)
                }))()
            },
            setInitialDiscount: function(t, e) {
                var s = t.state,
                    i = t.getters,
                    n = t.commit;
                if (e.discount && "melting" === e.discount.type) {
                    var a = 1e3,
                        r = Math.round(e.discount.value / 60 / i.countQuestions * 1.5);
                    0 === r && (r = 1, a = 1500);
                    var o = e.discount.value;
                    n("setDiscount", o), window.onblur = function() {
                        window.isActive = !1
                    }, C.discountInterval = setInterval(function() {
                        window.isActive && (o = s.discount - r > 0 ? s.discount - r : 0, n("setDiscount", o), (0 === o || i.isLastStep) && clearInterval(C.discountInterval))
                    }, a)
                }
                e.discount && "increasing" === e.discount.type && n("setDiscount", 0), e.discount && "increasingPercent" === e.discount.type && n("setDiscount", 0)
            },
            nextQuestion: function(t) {
                var e = t.state,
                    s = t.commit,
                    i = t.getters,
                    n = t.dispatch;
                if (i.getIsFilled || i.getQuestion.notRequired) {
                    !i.getIsFilled && i.getQuestion.notRequired && s("setAnswerValue", "");
                    var a = M.a.findIndex(i.activeQuestions, {
                            id: i.getQuestion.id
                        }),
                        r = i.activeQuestions[a + 1],
                        o = void 0;
                    r ? (o = M.a.findIndex(e.questions, {
                        id: r.id
                    }), n("analyticEvent", "marquiz-step" + o), s("setActiveQuestion", o), n("calculateDiscount")) : (n("analyticEvent", "marquiz-step" + e.questions.length), "beforeForm" === i.resultsPosition ? (s("showResultLoader"), setTimeout(function() {
                        n(i.isMultipleResults ? "showResults" : "showResult")
                    }, 2100)) : "afterForm" === i.resultsPosition ? (s("showResultLoader"), setTimeout(function() {
                        n("showLeadForm")
                    }, 2100)) : n("showLeadForm"))
                }
            },
            prevQuestion: function(t) {
                var e = t.state,
                    s = t.commit,
                    i = t.getters,
                    n = t.dispatch,
                    a = M.a.findIndex(i.activeQuestions, {
                        id: i.getQuestion.id
                    }),
                    r = i.activeQuestions[a - 1];
                s("setActiveQuestion", M.a.findIndex(e.questions, {
                    id: r.id
                })), n("calculateDiscount")
            },
            showLeadForm: function(t) {
                var e = t.commit,
                    s = t.dispatch;
                e("showLeadForm"), s("calculateDiscount", !0), s("analyticEvent", "marquiz-form")
            },
            showResults: function(t) {
                var e = t.commit,
                    s = t.dispatch;
                if (t.getters.suitableResults.length < 2) return void s("showResult");
                e("showResults"), s("calculateDiscount", !0), s("analyticEvent", "marquiz-results")
            },
            showResult: function(t) {
                var e = t.getters,
                    s = t.commit,
                    i = t.dispatch;
                s("showResult"), i("calculateDiscount", !0), i("analyticEvent", "marquiz-answer"), i("analyticEvent", "marquiz-result"), "afterForm" === e.resultsPosition && i("analyticEvent", "marquiz-finish")
            },
            calculateDiscount: function(t) {
                var e = t.state,
                    s = t.getters,
                    i = t.commit,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = M.a.get(e, "info.marketing.discount"),
                    r = s.activeQuestions.length,
                    o = e.leadForm || e.isResultShow || e.isResultsShow,
                    c = void 0;
                if (s.isIncreasingDiscount) c = o ? a.value : Math.round(a.value / r * (s.questionNumber - 1)), i("setDiscount", c);
                else if (s.isIncreasingPercentDiscount) {
                    if (o) c = a.percent;
                    else {
                        var u = a.percent / r;
                        c = Math.floor(u * (s.questionNumber - 1) * 100) / 100
                    }
                    i("setDiscount", c)
                }
                n && (C.discountInterval && clearInterval(C.discountInterval), i("fixDiscount"))
            },
            setAnswer: function(t, e) {
                var s = t.commit,
                    i = t.dispatch,
                    n = t.getters,
                    a = n.getQuestion;
                s("setAnswerValue", e), (n.isVariantsQuestion && "one" === a.select && M.a.find(a.answers, function(t) {
                    return t.title === e
                }) && "one-image" !== a.type || "images" === a.type && "one" === a.select || "date" === a.type && !a.options.hasTime && n.getIsFilled) && setTimeout(function() {
                    i("nextQuestion")
                }, 400)
            },
            analyticEvent: function(t, e) {
                var s = t.state;
                s.analyticUnique && d.a.analytic.event(e + "_" + s.id), d.a.analytic.event(e)
            }
        }
    }
}, function(t, e, s) {
    "use strict";
    var i = s(1);
    s.n(i);
    e.a = function(t, e, n) {
        var a = s.i(i.get)(t, "conditions", []),
            r = s.i(i.get)(t, "union", "or");
        if (!s.i(i.isEmpty)(a)) {
            var o = [];
            return a.forEach(function(t, a) {
                var r = s.i(i.find)(n, {
                        q: t.question
                    }),
                    c = s.i(i.find)(e, {
                        id: t.question
                    });
                if (r)
                    if ("many" === c.select) {
                        var u = s.i(i.intersection)(t.answer, r.a).length;
                        t.union || (t.union = "or"), s.i(i.isUndefined)(t.unionExtra) && "only" === t.union ? (t.union = "and", t.unionExtra = !1) : s.i(i.isUndefined)(t.unionExtra) && (t.unionExtra = !0), !0 === t.unionExtra ? "or" === t.union && u ? o.push(a) : "and" === t.union && u >= t.answer.length && o.push(a) : !1 === t.unionExtra && ("or" === t.union && u && r.a.length === u ? o.push(a) : "and" === t.union && u === t.answer.length && u === r.a.length && o.push(a))
                    } else 1 === s.i(i.intersection)(t.answer, [r.a]).length && o.push(a)
            }), "and" === r && o.length === a.length || !("or" !== r || !o.length)
        }
    }
}, function(t, e, s) {
    "use strict";
    e.a = {
        getFormattedDate: function(t, e) {
            return t.isRange ? t.hasTime ? this.getRangeDateWithTime(e) : this.getRangeDate(e) : t.hasTime ? this.getDateWithTime(e) : e.toLocaleDateString()
        },
        getRangeDateWithTime: function(t) {
            var e = t.from ? t.from.toLocaleDateString() : "",
                s = t.to ? t.to.toLocaleDateString() : "";
            return e + " " + this.getTimeFrom(t) + " - " + s + " " + this.getTimeTo(t)
        },
        getRangeDate: function(t) {
            return (t.from ? t.from.toLocaleDateString() : "") + " - " + (t.to ? t.to.toLocaleDateString() : "")
        },
        getTimeFrom: function(t) {
            return ("0" + t.timeFrom.getHours()).slice(-2) + ":" + ("0" + t.timeFrom.getMinutes()).slice(-2)
        },
        getTimeTo: function(t) {
            return ("0" + t.timeTo.getHours()).slice(-2) + ":" + ("0" + t.timeTo.getMinutes()).slice(-2)
        },
        getDateWithTime: function(t) {
            var e = ("0" + t.time.getHours()).slice(-2),
                s = ("0" + t.time.getMinutes()).slice(-2),
                i = e + ":" + s;
            return t.date.toLocaleDateString() + " " + i
        }
    }
}, function(t, e, s) {
    "use strict";
    e.a = function() {
        ! function(t, e, s, i, n, a, r) {
            t.fbq || (n = t.fbq = function() {
                n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            }, t._fbq || (t._fbq = n), n.push = n, n.loaded = !0, n.version = "2.0", n.queue = [], a = e.createElement(s), a.async = !0, a.src = "https://connect.facebook.net/en_US/fbevents.js", r = e.getElementsByTagName(s)[0], r.parentNode.insertBefore(a, r))
        }(window, document, "script")
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, s) {
    t.exports = s.p + "static/img/artem.520a341.jpg"
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAADwCAYAAAAD4t/dAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gMdFhMnrsXOgAAAAq5JREFUeNrt1DEBADAIxMBS/3Z/Bh9wJyFDKkk/ANb7EgAYPgCGD4DhA2D4ABg+AIYPgOEDYPgAGD6A4QNg+AAYPgCGD4DhA2D4ABg+AIYPgOEDYPgAhg+A4QNg+AAYPgCGD4DhA2D4ABg+AIYPYPgAGD4Ahg+A4QNg+AAYPgCGD4DhA2D4ABg+gOEDYPgAGD4Ahg+A4QNg+AAYPgCGD4DhAxg+AIYPgOEDYPgAGD4Ahg+A4QNg+AAYPgCGD2D4ABg+AIYPgOEDYPgAGD4Ahg+A4QNg+ACGD4DhA2D4ABg+AIYPgOEDYPgAGD4Ahg+A4QMYPgCGD4DhA2D4ABg+AIYPgOEDYPgAGD6A4UsAYPgAGD4Ahg+A4QNg+AAYPgCGD4DhA2D4AIYPgOEDYPgAGD4Ahg+A4QNg+AAYPgCGD4DhAxg+AIYPgOEDYPgAGD4Ahg+A4QNg+AAYPoDhA2D4ABg+AIYPgOEDYPgAGD4Ahg+A4QNg+ACGD4DhA2D4ABg+AIYPgOEDYPgAGD4Ahg9g+AAYPgCGD4DhA2D4ABg+AIYPgOEDYPgAGD6A4QNg+AAYPgCGD4DhA2D4ABg+AIYPgOEDGD4Ahg+A4QNg+AAYPgCGD4DhA2D4ABg+AIYPYPgAGD4Ahg+A4QNg+AAYPgCGD4DhA2D4AIYvAYDhA2D4ABg+AIYPgOEDYPgAGD4Ahg+A4QMYPgCGD4DhA2D4ABg+AIYPgOEDYPgAGD4Ahg9g+AAYPgCGD4DhA2D4ABg+AIYPgOEDYPgAhg+A4QNg+AAYPgCGD4DhA2D4ABg+AIYPgOEDGD4Ahg+A4QNg+AAYPgCGD4DhA2D4ABg+gOEDYPgAGD4Ahg+A4QNg+AAYPgCGD4DhA2D4AIYPgOEDYPgAGD4Ahg+A4QNg+AAYPgCGD3DbAEksBb7XPUyQAAAAAElFTkSuQmCC"
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gMdFgksiTrt0wAAAg5JREFUeNrt07ENADAIBLGQ/df9GnagQ7JHOOkqST/gpC8BGBgwMGBgMDBgYMDAgIHBwICBAQODgQEDAwYGDAwGBgwMGBgwMBgYMDBgYDAwYGDAwICBwcCAgQEDAwYGAwMGBgwMBgYMDBgYMDAYGDAwYGAwMGBgwMCAgcHAgIEBAwMGBgMDBgYMDAYGDAwYGDAwGBgwMGBgwMBgYMDAgIHBwICBAQMDBgYDAwYGDAwYGAwMGBgwMBgYMDBgYMDAYGDAwICBwcCAgQEDAwYGAwMGBgwMGBgMDBgYMDAYGDAwYGDAwGBgwMCAgQEDg4EBAwMGBgMDBgYMDBgYDAwYGDAwYGAwMGBgwMBgYMDAgIEBA4OBAQMDBgYDAwYGDAwYGAwMGBgwMGBgMDBgYMDAYGDAwICBAQODgQEDAwYGDAwGBgwMGBgMDBgYMDBgYDAwYGDAwGBgwMCAgQEDg4EBAwMGBgwMBgYMDBgYDAwYGDAwYGAwMGBgwMCAgcHAgIEBA4OBAQMDBgYMDAYGDAwYGDAwGBgwMGBgMDBgYMDAgIHBwICBAQODgQEDAwYGDAwGBgwMGBgwMBgYMDBgYDAwYGDAwICBwcCAgQEDAwYGAwMGBgwMBgYMDBgYMDAYGDAwYGDAwGBgwMCAgcHAgIEBAwMGBgMDBgYMDAYGDAwYGDAwGBgwMGBgwMBgYMDAwN4AMjkFvq3y4mwAAAAASUVORK5CYII="
}, function(t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAADwCAYAAACpBE5IAAAB1klEQVR42u3SMREAAAgDsfr32xl8QIYY+Pu0HbgiImBoMDQYGgyNocHQYGgwNBgaQ4OhwdBgaDA0hgZDg6HB0GBoDA2GBkODocHQGBoMDYYGQ4OhMTQYGgwNhgZDY2gwNBgaDI2hhcDQYGgwNBgaQ4OhwdBgaDA0hgZDg6HB0GBoDA2GBkODocHQGBoMDYYGQ4OhMTQYGgwNhgZDY2gwNBgaDA2GxtBgaDA0GBpDg6HB0GBoMDSGBkODocHQYGgMDYYGQ4OhwdAYGgwNhgZDg6ExNBgaDA2GBkNjaDA0GBoMDYbG0GBoMDQYGkOLgKHB0GBoMDSGBkODocHQYGgMDYYGQ4OhwdAYGgwNhgZDg6ExNBgaDA2GBkNjaDA0GBoMDYbG0GBoMDQYGgyNocHQYGgwNIYGQ4OhwdBgaAwNhgZDg6HB0BgaDA2GBkODoTE0GBoMDYYGQ2NoMDQYGgwNhsbQYGgwNBgaDI2hwdBgaDA0hhYBQ4OhwdBgaAwNhgZDg6HB0BgaDA2GBkODoTE0GBoMDYYGQ2NoMDQYGgwNhsbQYGgwNBgaDI2hwdBgaDA0GBpDg6HB0GBoDA2GBkODocHQGBoMDYYGQ4OhMTQYGgwNhgZD88UCHFm8tWgvNHUAAAAASUVORK5CYII="
}, function(t, e, s) {
    t.exports = s.p + "static/img/catalog.150ec5d.png"
}, function(t, e, s) {
    t.exports = s.p + "static/img/emoji-hm.5bd00cf.png"
}, function(t, e, s) {
    t.exports = s.p + "static/img/icon-marquiz.44d101c.png"
}, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDY4LjkwNywyMTQuNjA0Yy0xMS40MjMsMC0yMC42ODIsOS4yNi0yMC42ODIsMjAuNjgydjIwLjgzMWMtMC4wMzEsNTQuMzM4LTIxLjIyMSwxMDUuNDEyLTU5LjY2NiwxNDMuODEyCgkJCWMtMzguNDE3LDM4LjM3Mi04OS40NjcsNTkuNS0xNDMuNzYxLDU5LjVjLTAuMDQsMC0wLjA4LDAtMC4xMiwwQzEzMi41MDYsNDU5LjM2NSw0MS4zLDM2OC4wNTYsNDEuMzY0LDI1NS44ODMKCQkJYzAuMDMxLTU0LjMzNywyMS4yMjEtMTA1LjQxMSw1OS42NjctMTQzLjgxM2MzOC40MTctMzguMzcyLDg5LjQ2OC01OS41LDE0My43NjEtNTkuNWMwLjA0LDAsMC4wOCwwLDAuMTIsMAoJCQljMjguNjcyLDAuMDE2LDU2LjQ5LDUuOTQyLDgyLjY4LDE3LjYxMWMxMC40MzYsNC42NSwyMi42NTktMC4wNDEsMjcuMzA5LTEwLjQ3NGM0LjY0OC0xMC40MzMtMC4wNC0yMi42NTktMTAuNDc0LTI3LjMwOQoJCQljLTMxLjUxNi0xNC4wNDMtNjQuOTg5LTIxLjE3My05OS40OTItMjEuMTkyYy0wLjA1MiwwLTAuMDkyLDAtMC4xNDQsMGMtNjUuMzI5LDAtMTI2Ljc2NywyNS40MjgtMTcyLjk5Myw3MS42CgkJCUMyNS41MzYsMTI5LjAxNCwwLjAzOCwxOTAuNDczLDAsMjU1Ljg2MWMtMC4wMzcsNjUuMzg2LDI1LjM4OSwxMjYuODc0LDcxLjU5OSwxNzMuMTM2YzQ2LjIxLDQ2LjI2MiwxMDcuNjY4LDcxLjc2LDE3My4wNTUsNzEuNzk4CgkJCWMwLjA1MSwwLDAuMDkyLDAsMC4xNDQsMGM2NS4zMjksMCwxMjYuNzY3LTI1LjQyNywxNzIuOTkzLTcxLjZjNDYuMjYyLTQ2LjIwOSw3MS43Ni0xMDcuNjY4LDcxLjc5OC0xNzMuMDY2di0yMC44NDIKCQkJQzQ4OS41ODksMjIzLjg2NCw0ODAuMzMsMjE0LjYwNCw0NjguOTA3LDIxNC42MDR6IiBzdHlsZT0iZmlsbDogI2NhMmY5NCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNS45NDIsMzkuODAzYy04LjA3Ny04LjA3Ni0yMS4xNzItOC4wNzYtMjkuMjQ5LDBMMjQ0Ljc5NCwyNzEuNzAxbC01Mi42MDktNTIuNjA5Yy04LjA3Ni04LjA3Ny0yMS4xNzItOC4wNzctMjkuMjQ4LDAKCQkJYy04LjA3Nyw4LjA3Ny04LjA3NywyMS4xNzIsMCwyOS4yNDlsNjcuMjM0LDY3LjIzNGM0LjAzOCw0LjAzOSw5LjMzMiw2LjA1OCwxNC42MjUsNi4wNThjNS4yOTMsMCwxMC41ODYtMi4wMTksMTQuNjI1LTYuMDU4CgkJCUw1MDUuOTQyLDY5LjA1MkM1MTQuMDE5LDYwLjk3NSw1MTQuMDE5LDQ3Ljg4LDUwNS45NDIsMzkuODAzeiIgc3R5bGU9ImZpbGw6ICNjYTJmOTQiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
}, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNTEyLjA1IDUxMi4wNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjA1IDUxMi4wNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBzdHlsZT0iZmlsbDojMjE5NkYzOyIgZD0iTTI1Ni4wMjUsMC4wNUMxMTcuNjctMi42NzgsMy4xODQsMTA3LjAzOCwwLjAyNSwyNDUuMzgzYzAuMzYxLDcwLjQyMywzMS41NDQsMTM3LjE1Nyw4NS4zMzMsMTgyLjYxMwoJdjczLjM4N2MwLDUuODkxLDQuNzc2LDEwLjY2NywxMC42NjcsMTAuNjY3YzEuOTk5LDAsMy45NTgtMC41NjIsNS42NTMtMS42MjFsNTkuNDU2LTM3LjE0MQoJYzMwLjI5MiwxMS41ODYsNjIuNDU5LDE3LjQ5NCw5NC44OTEsMTcuNDI5YzEzOC4zNTUsMi43MjgsMjUyLjg0MS0xMDYuOTg4LDI1Ni0yNDUuMzMzQzUwOC44NjYsMTA3LjAzOCwzOTQuMzgtMi42NzgsMjU2LjAyNSwwLjA1egoJIi8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBkPSJNNDI0LjU1OCwxNzQuOTgzYy0zLjE3NC00LjI1NC04Ljk5My01LjUyNy0xMy42NTMtMi45ODdsLTExMC45MzMsNjAuNDhsLTY5LjAxMy01OS4xNzkKCWMtNC4yMzItMy42MjgtMTAuNTQ0LTMuMzg3LTE0LjQ4NSwwLjU1NWwtMTI4LDEyOGMtNC4xNTMsNC4xNzgtNC4xMzMsMTAuOTMyLDAuMDQ2LDE1LjA4NWMzLjM0MSwzLjMyMSw4LjQ2NCw0LjA1NywxMi42MDUsMS44MTEKCWwxMTAuOTMzLTYwLjQ4bDY5LjA3Nyw1OS4yYzQuMjMyLDMuNjI4LDEwLjU0NCwzLjM4NywxNC40ODUtMC41NTVsMTI4LTEyOEM0MjcuMzUsMTg1LjE0OCw0MjcuNzUsMTc5LjIxNSw0MjQuNTU4LDE3NC45ODN6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
}, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI5MS4zNjQgMjkxLjM2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkxLjM2NCAyOTEuMzY0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzAwQUZGMDsiIGQ9Ik0yODIuOTY2LDE3Ni42MTJjMi4wOTQtOS40OTUsMy4yMDQtMTkuMzA5LDMuMjA0LTI5LjQwNWMwLTc1LjY2MS02Mi4xOTctMTM3LjAxMS0xMzguOTQxLTEzNy4wMTEKCQljLTguMDkzLDAtMTYuMDMyLDAuNjkyLTIzLjc1MiwyLjAwM0MxMTEuMDYxLDQuNDc5LDk2LjM2NywwLDgwLjYxOCwwQzM2LjEwMSwwLDAuMDMyLDM1LjU3NywwLjAzMiw3OS40NzUKCQljMCwxNC42NTcsNC4wNTEsMjguMzg1LDExLjA3LDQwLjE5M2MtMS44NDgsOC44OTQtMi44MTMsMTguMTA3LTIuODEzLDI3LjUzOWMwLDc1LjY4OCw2Mi4xOTcsMTM0Ljc1MywxMzguOTMyLDEzNC43NTMKCQljOC42OTQsMCwxNy4xOTctMC43OTIsMjUuNDM2LTIuMjk0YzExLjM1Miw2LjAwOCwyNC4zMTYsMTEuNjk4LDM4LjA5OSwxMS42OThjNDQuNTA4LDAsODAuNTc3LTM1LjU2OCw4MC41NzctNzkuNDY2CgkJQzI5MS4zMzMsMTk5LjIzNSwyODguMzE5LDE4Ny4yNDUsMjgyLjk2NiwxNzYuNjEyeiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yMTAuNiwyMDMuMTMxYy01LjM2Miw3LjYyLTEzLjIxLDEzLjYxLTIzLjU0MiwxNy45MTZjLTEwLjMzMyw0LjM0Mi0yMi41NjgsNi40OTEtMzYuNzI0LDYuNDkxCgkJYy0xNi45NzgsMC0zMC45OC0yLjk1LTQyLjAyMy04Ljg1OGMtNy44MTEtNC4yNDItMTQuMTc0LTkuOTIzLTE5LjA3Mi0xNy4wMDZjLTQuODgtNy4wODMtNy4zMjgtMTMuOTgzLTcuMzI4LTIwLjY5MwoJCWMwLTMuODc4LDEuNDY2LTcuMjEsNC4zOTctOS45NjljMi45MzEtMi43OTUsNi42NzMtNC4xNjksMTEuMTk4LTQuMTY5YzMuNjc4LDAsNi44LDEuMDY1LDkuMzMxLDMuMjQxCgkJYzIuNTQ5LDIuMTU4LDQuNzI1LDUuMzUzLDYuNTA5LDkuNjA0YzIuMTk0LDUuMDUzLDQuNTUyLDkuMjY4LDcuMTEsMTIuNjQ1YzIuNTMxLDMuMzc3LDYuMTE4LDYuMTgxLDEwLjcyNCw4LjM3NQoJCWM0LjYyNSwyLjE3NiwxMC42OTcsMy4yODYsMTguMTk4LDMuMjg2YzEwLjMyNCwwLDE4LjcxNy0yLjIwMywyNS4xODEtNi42MzdjNi40NDUtNC40MTUsOS42ODYtOS45NTksOS42ODYtMTYuNTc4CgkJYzAtNS4yNDQtMS43NDgtOS41MzItNS4yMjYtMTIuNzgyYy0zLjQ4Ny0zLjI3Ny03Ljk4NC01Ljc4MS0xMy41MDEtNy41MDFjLTUuNTA4LTEuNzM5LTEyLjg4Mi0zLjU3OC0yMi4xMzEtNS41MTcKCQljLTEyLjM1NC0yLjY0OS0yMi43MDUtNS43ODEtMzEuMDI1LTkuMzMxYy04LjMzLTMuNTc4LTE0Ljk1Ny04LjQzLTE5LjgzNy0xNC41NzVjLTQuODk4LTYuMTcyLTcuMzM4LTEzLjgxOS03LjMzOC0yMi45NQoJCWMwLTguNzIxLDIuNTc2LTE2LjQ1LDcuNzQ3LTIzLjIxNGM1LjE2Mi02Ljc3MywxMi42MTgtMTEuOTcxLDIyLjQxMy0xNS42MTNjOS43NzctMy42NDEsMjEuMjg1LTUuNDUzLDM0LjQ5NC01LjQ1MwoJCWMxMC41NiwwLDE5LjcsMS4yMTEsMjcuNDExLDMuNjA1YzcuNzExLDIuNDIyLDE0LjA5Myw1LjYyNiwxOS4xNzIsOS42MjNjNS4wODksMy45OTcsOC44MTIsOC4xODQsMTEuMTUyLDEyLjU4MQoJCWMyLjM0OSw0LjM3LDMuNTIzLDguNjg1LDMuNTIzLDEyLjgzNmMwLDMuODE0LTEuNDU3LDcuMjc0LTQuMzg4LDEwLjMyNGMtMi45MzEsMy4wNTktNi41OTEsNC41OTctMTAuOTcsNC41OTcKCQljLTMuOTk3LDAtNy4wMjgtMC45MjktOS4xMDQtMi43NThjLTIuMDc2LTEuODM5LTQuMzI0LTQuODQzLTYuNzM3LTkuMDIyYy0zLjE0MS01Ljk3Mi02Ljg4Mi0xMC42MzMtMTEuMjctMTMuOTc0CgkJYy00LjM4OC0zLjM1LTExLjQxNi01LjAyNS0yMS4xMjEtNS4wMjVjLTguOTg1LDAtMTYuMjUsMS44MDMtMjEuNzY3LDUuNDUzYy01LjUxNywzLjYyMy04LjI4NCw4LjAxMS04LjI4NCwxMy4xMTgKCQljMCwzLjE1LDAuOTU2LDUuODk5LDIuODIyLDguMjAyYzEuODY2LDIuMzIxLDQuNDUyLDQuMjc5LDcuNzU2LDUuOTI3YzMuMjY4LDEuNjU3LDYuNiwyLjk1LDkuOTU5LDMuOTA1CgkJYzMuMzU5LDAuOTM4LDguOTIyLDIuMjk0LDE2LjY3OCw0LjA5N2M5LjY4NiwyLjA4NSwxOC40NzEsNC4zOTcsMjYuMzM3LDYuOTFjNy44NTcsMi41MjIsMTQuNTU3LDUuNTksMjAuMDc0LDkuMTY3CgkJYzUuNTA4LDMuNjA1LDkuODIzLDguMTc1LDEyLjkwOSwxMy42OTJjMy4wODYsNS40OTksNC42NDMsMTIuMjQ0LDQuNjQzLDIwLjIzOEMyMTguNjM5LDE4Ni44OTksMjE1Ljk0NSwxOTUuNTAyLDIxMC42LDIwMy4xMzF6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
}, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjE0NDUuNiAyMTEwLjYgNzY4LjQgNzY4LjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTQ0NS42IDIxMTAuNiA3NjguNCA3NjguNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9IjE4MjkuOCIgY3k9IjI0OTQuOCIgcj0iMzU1LjEiLz4KPGc+Cgk8cGF0aCBmaWxsPSIjMDBBMUU2IiBkPSJNMTk1OC4zLDIzOTQuOWwtMjMzLDE0Ny4xbDM5LjMsMTIwLjVsNy43LTgyLjlsMTk5LjYtMTgwLjFDMTk4MC42LDIzOTEuNywxOTcwLDIzODcuOSwxOTU4LjMsMjM5NC45eiIvPgoJPHBhdGggZmlsbD0iIzAwQTFFNiIgZD0iTTE4MjkuOCwyMTEwLjZjLTIxMi4yLDAtMzg0LjIsMTcyLTM4NC4yLDM4NC4yczE3MiwzODQuMiwzODQuMiwzODQuMnMzODQuMi0xNzIsMzg0LjItMzg0LjIKCQlTMjA0MiwyMTEwLjYsMTgyOS44LDIxMTAuNnogTTIwNTUuNCwyMzU2LjZsLTcwLjYsMzMyLjdjLTQuOSwyMy42LTE5LjMsMjkuMy0zOS4xLDE4LjNsLTEwNy42LTc5LjVjLTI1LjMsMjQuNS00OCw0Ni42LTUxLjcsNTAuMgoJCWMtNiw1LjktMTAuOCwxMC44LTIxLjUsMTAuOGMtMTQsMC0xMS41LTUuMy0xNi40LTE4LjVsLTM5LjYtMTIxLjJsLTEwMy41LTMyLjNjLTIzLTctMjMuMi0yMi44LDUuMS0zNC4ybDQxNC42LTE1OS45CgkJQzIwNDQuNCwyMzE0LjUsMjA2Mi42LDIzMjcuNywyMDU1LjQsMjM1Ni42eiIvPgo8L2c+Cjwvc3ZnPgo="
}, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9Ii01ODggMjEwOS42IDc2OC40IDc2OC40IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IC01ODggMjEwOS42IDc2OC40IDc2OC40IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeD0iLTIwMy43IiBjeT0iMjQ5NCIgcj0iMzU0LjQiLz4KPHBhdGggZmlsbD0iIzgwNEFBMSIgZD0iTS0yMDMuNywyMTA5LjZjLTIxMi4yLDAtMzg0LjIsMTcyLTM4NC4yLDM4NC4yUy00MTYsMjg3OC0yMDMuNywyODc4czM4NC4yLTE3MS44LDM4NC4yLTM4NAoJQzE4MC41LDIyODEuOCw4LjUsMjEwOS42LTIwMy43LDIxMDkuNnogTS0xOTAuNSwyMjg0LjhjMTA1LjMsMy42LDE5Niw5OS45LDE5NC42LDIwMy45Yy0wLjIsMTAuMiwzLjYsMjUuMy0xMS43LDI1LjEKCWMtMTQuNS0wLjItMTAuOC0xNS43LTEyLjEtMjUuOWMtMTQtMTEwLjQtNjQuNi0xNjIuNi0xNzQuMS0xNzkuNGMtOS4xLTEuMy0yMi44LDAuNi0yMi4zLTExLjUKCUMtMjE1LjEsMjI3OS4zLTE5OC43LDIyODUuOS0xOTAuNSwyMjg0Ljh6IE0tNTguOSwyNDkyLjdjLTE2LjYsMi41LTEzLjQtMTIuNi0xNS4xLTIyLjVjLTExLjEtNjcuMi0zNC43LTkxLjgtMTAyLjMtMTA2LjkKCWMtMTAtMi4zLTI1LjUtMC44LTIyLjgtMTZjMi41LTE0LjUsMTYuNC05LjYsMjctOC4zYzY3LjYsOC4xLDEyMi45LDY2LjgsMTIyLjMsMTMxLjJDLTUxLDI0NzcuOC00Ni43LDI0OTAuOC01OC45LDI0OTIuN3oKCSBNLTExMi4yLDI0NzYuNmMtNy4yLDAuOS0xMi4xLTUuMy0xMi44LTEyLjhjLTIuOC0yNy44LTE3LjQtNDQtNDUuMS00OC41Yy04LjMtMS4zLTE2LjQtNC0xMi42LTE1LjNjMi42LTcuNiw5LjQtOC4zLDE2LjYtOC41CgljMzAtMC44LDY1LjEsMzUuMSw2NC42LDY2LjNDLTEwMS4yLDI0NjYuNC0xMDIuMiwyNDc1LjMtMTEyLjIsMjQ3Ni42eiBNNS4yLDI2NjguMWMtMTEuNSwzMi43LTUxLjUsNjUuNS04NS43LDY1LjEKCWMtNC43LTEuMy0xNC4zLTIuOC0yMi44LTYuNGMtMTQ5LjktNjQuNi0yNTguOC0xNzAuMy0zMjAuNi0zMjIuMWMtMjAuOC01MSwwLjktOTMuOCw1My4yLTExMS42YzkuNC0zLjIsMTguNS0zLjQsMjcuOCwwCgljMjIuMyw4LjEsNzguNyw4NS45LDgwLDEwOS4xYzAuOSwxNy43LTExLjEsMjcuNi0yMy4yLDM1LjdjLTIyLjcsMTUuNS0yMi44LDM0LjktMTMuMiw1Ni44YzIxLjksNDkuMyw1OS41LDgzLjMsMTA4LDEwNS4yCgljMTcuNiw3LjksMzQuNCw3LjIsNDYuNC0xMWMyMS4zLTMyLjUsNDcuNi0zMC44LDc2LjMtMTAuOGMxNC4zLDEwLDI5LjEsMjAsNDIuNywzMUMtNy4yLDI2MjQuMSwxNi40LDI2MzYuNSw1LjIsMjY2OC4xeiIvPgo8L3N2Zz4K"
}, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTEyLjE5NiAxMTIuMTk2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTIuMTk2IDExMi4xOTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8Y2lyY2xlIGlkPSJYTUxJRF8xMV8iIHN0eWxlPSJmaWxsOiM0RDc2QTE7IiBjeD0iNTYuMDk4IiBjeT0iNTYuMDk4IiByPSI1Ni4wOTgiLz4KCTwvZz4KCTxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7IiBkPSJNNTMuOTc5LDgwLjcwMmg0LjQwM2MwLDAsMS4zMy0wLjE0NiwyLjAwOS0wLjg3OAoJCWMwLjYyNS0wLjY3MiwwLjYwNS0xLjkzNCwwLjYwNS0xLjkzNHMtMC4wODYtNS45MDgsMi42NTYtNi43NzhjMi43MDMtMC44NTcsNi4xNzQsNS43MSw5Ljg1Myw4LjIzNQoJCWMyLjc4MiwxLjkxMSw0Ljg5NiwxLjQ5Miw0Ljg5NiwxLjQ5Mmw5LjgzNy0wLjEzN2MwLDAsNS4xNDYtMC4zMTcsMi43MDYtNC4zNjNjLTAuMi0wLjMzMS0xLjQyMS0yLjk5My03LjMxNC04LjQ2MwoJCWMtNi4xNjgtNS43MjUtNS4zNDItNC43OTksMi4wODgtMTQuNzAyYzQuNTI1LTYuMDMxLDYuMzM0LTkuNzEzLDUuNzY5LTExLjI5Yy0wLjUzOS0xLjUwMi0zLjg2Ny0xLjEwNS0zLjg2Ny0xLjEwNWwtMTEuMDc2LDAuMDY5CgkJYzAsMC0wLjgyMS0wLjExMi0xLjQzLDAuMjUyYy0wLjU5NSwwLjM1Ny0wLjk3OCwxLjE4OS0wLjk3OCwxLjE4OXMtMS43NTMsNC42NjctNC4wOTEsOC42MzZjLTQuOTMyLDguMzc1LTYuOTA0LDguODE3LTcuNzEsOC4yOTcKCQljLTEuODc1LTEuMjEyLTEuNDA3LTQuODY5LTEuNDA3LTcuNDY3YzAtOC4xMTYsMS4yMzEtMTEuNS0yLjM5Ny0xMi4zNzZjLTEuMjA0LTAuMjkxLTIuMDktMC40ODMtNS4xNjktMC41MTQKCQljLTMuOTUyLTAuMDQxLTcuMjk3LDAuMDEyLTkuMTkxLDAuOTRjLTEuMjYsMC42MTctMi4yMzIsMS45OTItMS42NCwyLjA3MWMwLjczMiwwLjA5OCwyLjM5LDAuNDQ3LDMuMjY5LDEuNjQ0CgkJYzEuMTM1LDEuNTQ0LDEuMDk1LDUuMDEyLDEuMDk1LDUuMDEyczAuNjUyLDkuNTU0LTEuNTIzLDEwLjc0MWMtMS40OTMsMC44MTQtMy41NDEtMC44NDgtNy45MzgtOC40NDYKCQljLTIuMjUzLTMuODkyLTMuOTU0LTguMTk0LTMuOTU0LTguMTk0cy0wLjMyOC0wLjgwNC0wLjkxMy0xLjIzNGMtMC43MS0wLjUyMS0xLjcwMi0wLjY4Ny0xLjcwMi0wLjY4N2wtMTAuNTI1LDAuMDY5CgkJYzAsMC0xLjU4LDAuMDQ0LTIuMTYsMC43MzFjLTAuNTE2LDAuNjExLTAuMDQxLDEuODc1LTAuMDQxLDEuODc1czguMjQsMTkuMjc4LDE3LjU3LDI4Ljk5MwoJCUM0NC4yNjQsODEuMjg3LDUzLjk3OSw4MC43MDIsNTMuOTc5LDgwLjcwMkw1My45NzksODAuNzAyeiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
}, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE3LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjM0NzkuOSAyMTEwLjYgNzY4LjQgNzY4LjQiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMzQ3OS45IDIxMTAuNiA3NjguNCA3NjguNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxjaXJjbGUgZmlsbD0iI0ZGRkZGRiIgY3g9IjM4NjQuMSIgY3k9IjI0OTQuOCIgcj0iMzQ1LjMiLz4KPGc+Cgk8cGF0aCBmaWxsPSIjMDVDQTQ3IiBkPSJNMzk5NiwyNTQ4LjljLTE0LjktNy43LTMwLjYtMTQuMi00NS43LTIxLjNjLTcuNy0zLjYtMTQuMi0xLjUtMTkuMyw0LjVjLTYuNiw3LjctMTIuOCwxNS43LTE5LjEsMjMuOAoJCWMtNC45LDYuNC0xMC40LDcuOS0xOC4xLDQuM2MtMzkuMy0xNy43LTY5LjctNDUuMy05My4zLTgxLjJjLTMuNC01LjEtMy4yLTkuMywwLjgtMTMuOGM1LjMtNi4yLDEwLjgtMTIuNiwxNS43LTE5LjMKCQljNC41LTUuOSw2LjQtMTIuMywzLjItMTkuNGMtNy45LTE4LjktMTUuNy0zNy45LTI0LjItNTYuNmMtMS43LTMuNi02LjItNy42LTkuOC04LjFjLTcuMi0xLjEtMTUuMS0wLjktMjIuMywwLjQKCQljLTE0LjcsMi42LTIzLDEzLjYtMzAsMjUuOWMtMTYuNCwyOS4xLTEzLDU4LjEsMC45LDg2LjhjMjguMSw1Ny42LDcyLjksOTkuMSwxMjgsMTMwLjNjMjQuOSwxNCw1MS40LDIzLjYsNzMuNCwyNC40CgkJYzIzLjYsMCwzOS41LTQuOSw1Mi43LTE0LjdjMTAuNi03LjcsMTguOS0xNy40LDIxLjktMzAuNkM0MDE0LjcsMjU2OC40LDQwMTAuNCwyNTU2LjMsMzk5NiwyNTQ4Ljl6Ii8+Cgk8cGF0aCBmaWxsPSIjMDVDQTQ3IiBkPSJNMzg2NC4xLDIxMTAuNmMtMjEyLjIsMC0zODQuMiwxNzItMzg0LjIsMzg0LjJzMTcyLDM4NC4yLDM4NC4yLDM4NC4yczM4NC4yLTE3MiwzODQuMi0zODQuMgoJCVM0MDc2LjMsMjExMC42LDM4NjQuMSwyMTEwLjZ6IE0zOTEyLjgsMjcyMi42Yy01My4xLDExLjUtMTA0LjIsNC43LTE1Mi45LTE4LjljLTYtMy0xMS0zLjQtMTcuMi0wLjhjLTIzLDEwLjItNDYuMywxOS44LTY5LjUsMjkuNQoJCWMtMi41LDAuOS00LjksMS45LTkuMywzLjRjNS43LTIxLjksOS44LTQyLjUsMTYuMi02Mi4xYzUuNy0xNy4yLDMuOC0zMC4yLTcuOS00NS41Yy0zMi4zLTQyLjctNDQuOS05MS44LTQzLjQtMTQ1LjQKCQljMy0xMDMuOCw3OC41LTE5OC42LDE4Ny4xLTIyMS4xYzEyNi43LTI2LjEsMjUwLjIsNTQuNiwyNzcsMTc5LjlDNDEyMS4yLDI1NzQuOCw0MDM2LjIsMjY5NS44LDM5MTIuOCwyNzIyLjZ6Ii8+CjwvZz4KPC9zdmc+Cg=="
}, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMC4yMTMgMTAuMjEzIj4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xe2ZpbGw6IzJlMmU1NH0KICAgICAgICA8L3N0eWxlPgogICAgPC9kZWZzPgogICAgPHBhdGggaWQ9ImluZm8iIGQ9Ik01LjEwNiAwYTUuMTA2IDUuMTA2IDAgMSAwIDUuMTA2IDUuMTA2QTUuMTA2IDUuMTA2IDAgMCAwIDUuMTA2IDB6bTEuMDYzIDcuOTE0cS0uMzk0LjE1Ni0uNjI5LjIzN2ExLjY1OSAxLjY1OSAwIDAgMS0uNTQ2LjA4MkExLjA4NyAxLjA4NyAwIDAgMSA0LjI1MiA4YS43NTIuNzUyIDAgMCAxLS4yNjQtLjU5MSAyLjE0NiAyLjE0NiAwIDAgMSAuMDE5LS4yODVjLjAxMy0uMS4wMzUtLjIwNi4wNjQtLjMyOEw0LjQgNS42MzNjLjAyOS0uMTEyLjA1NC0uMjE3LjA3NC0uMzE2YTEuNCAxLjQgMCAwIDAgLjAyNi0uMjczLjQyMS40MjEgMCAwIDAtLjA5Mi0uMzEuNTIxLjUyMSAwIDAgMC0uMzUxLS4wODcuOTIyLjkyMiAwIDAgMC0uMjYyLjAzOSAzLjYxIDMuNjEgMCAwIDAtLjIyOS4wNzZsLjA5MS0uMzYycS4zMjMtLjEzMi42MTgtLjIyNWExLjgyNiAxLjgyNiAwIDAgMSAuNTU4LS4wOTQgMS4wNjcgMS4wNjcgMCAwIDEgLjczMS4yMjkuNzYxLjc2MSAwIDAgMSAuMjU3LjU5NXEwIC4wNzYtLjAxOC4yNjdhMS43ODUgMS43ODUgMCAwIDEtLjA2Ni4zNTFMNS40MSA2LjY4NGEzLjExIDMuMTEgMCAwIDAtLjA3Mi4zMTggMS42ODIgMS42ODIgMCAwIDAtLjAzMi4yNzEuMzg5LjM4OSAwIDAgMCAuMS4zMTUuNTc4LjU3OCAwIDAgMCAuMzU3LjA4NCAxLjAzNyAxLjAzNyAwIDAgMCAuMjcxLS4wNDIgMS41MzkgMS41MzkgMCAwIDAgLjIxOS0uMDczem0tLjA1OC00LjdhLjc4MS43ODEgMCAwIDEtLjU1MS4yMTMuNzg5Ljc4OSAwIDAgMS0uNTUzLS4yMTMuNjc5LjY3OSAwIDAgMS0uMjMtLjUxNi42ODYuNjg2IDAgMCAxIC4yMy0uNTE3Ljc4My43ODMgMCAwIDEgLjU1My0uMjE1Ljc3NS43NzUgMCAwIDEgLjU1MS4yMTUuNy43IDAgMCAxIDAgMS4wMzN6IiBjbGFzcz0iY2xzLTEiLz4KPC9zdmc+Cg=="
}, function(t, e, s) {
    t.exports = s.p + "static/img/price.f1900f4.png"
}, function(t, e) {
    t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjEyLjQ3NyAxODkuMjk1IiBoZWlnaHQ9IjE3MCIgd2lkdGg9IjE3MCI+CgogIDxzdHlsZT4KICAgIHN2ZywKCiAgICAuY2lyY2xlIHsKICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTAwMDsKICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7CiAgICAgIGFuaW1hdGlvbjogc3Ryb2tlIDNzIGVhc2Utb3V0IGZvcndhcmRzOwogICAgICB6LWluZGV4OiAxMDsKICAgIH0KCiAgICBAa2V5ZnJhbWVzIHN0cm9rZSB7CiAgICAgIGZyb20gewogICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwOwogICAgICB9CiAgICAgIDEwJSB7CiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDk1MDsKICAgICAgfQogICAgICA1MCUgewogICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA3MDA7CiAgICAgIH0KICAgICAgdG8gewogICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwOwogICAgICB9CiAgICB9CgogICAgQGtleWZyYW1lcyBmYWRlSW4gewogICAgICB0byB7CiAgICAgICAgb3BhY2l0eTogMTsKICAgICAgfQogICAgfQoKICA8L3N0eWxlPgoKICA8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMC41IiB4Mj0iMC41IiB5Mj0iMSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNDdkZGE5Ii8+CiAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyYmE3N2MiLz4KICA8L2xpbmVhckdyYWRpZW50PgoKICA8ZmlsdGVyIGlkPSJpbm5lcnNoYWRvdyIgeDA9Ii01MCUiIHkwPSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIj4KICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMyIgcmVzdWx0PSJibHVyIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgPGZlT2Zmc2V0IGR5PSIyIiBkeD0iMyI+PC9mZU9mZnNldD4KICAgIDxmZUNvbXBvc2l0ZSBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIgcmVzdWx0PSJzaGFkb3dEaWZmIj48L2ZlQ29tcG9zaXRlPgoKICAgIDxmZUZsb29kIGZsb29kLWNvbG9yPSIjNDQ0NDQ0IiBmbG9vZC1vcGFjaXR5PSIwLjE1Ij48L2ZlRmxvb2Q+CiAgICA8ZmVDb21wb3NpdGUgaW4yPSJzaGFkb3dEaWZmIiBvcGVyYXRvcj0iaW4iPjwvZmVDb21wb3NpdGU+CiAgICA8ZmVDb21wb3NpdGUgaW4yPSJTb3VyY2VHcmFwaGljIiBvcGVyYXRvcj0ib3ZlciIgcmVzdWx0PSJmaXJzdGZpbHRlciI+PC9mZUNvbXBvc2l0ZT4KCgogICAgPGZlR2F1c3NpYW5CbHVyIGluPSJmaXJzdGZpbHRlciIgc3RkRGV2aWF0aW9uPSIzIiByZXN1bHQ9ImJsdXIyIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgPGZlT2Zmc2V0IGR5PSItMiIgZHg9Ii0zIj48L2ZlT2Zmc2V0PgogICAgPGZlQ29tcG9zaXRlIGluMj0iZmlyc3RmaWx0ZXIiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIiByZXN1bHQ9InNoYWRvd0RpZmYiPjwvZmVDb21wb3NpdGU+CgogICAgPGZlRmxvb2QgZmxvb2QtY29sb3I9IiM0NDQ0NDQiIGZsb29kLW9wYWNpdHk9IjAuMTUiPjwvZmVGbG9vZD4KICAgIDxmZUNvbXBvc2l0ZSBpbjI9InNoYWRvd0RpZmYiIG9wZXJhdG9yPSJpbiI+PC9mZUNvbXBvc2l0ZT4KICAgIDxmZUNvbXBvc2l0ZSBpbjI9ImZpcnN0ZmlsdGVyIiBvcGVyYXRvcj0ib3ZlciI+PC9mZUNvbXBvc2l0ZT4KICA8L2ZpbHRlcj4KCiAgPGNpcmNsZSBjbGFzcz0iY2lyY2xlIiBjeD0iMTAwIiBjeT0iMTAwIiByPSI5MCIgc3Ryb2tlPSJ1cmwoI2dyYWRpZW50KSIgZmlsdGVyPSJ1cmwoI2lubmVyc2hhZG93KSIgc3Ryb2tlLXdpZHRoPSIxNyIgZmlsbC1vcGFjaXR5PSIwIiB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgMTAwIDEwMCknLz4KICA8ZGl2IGNsYXNzPSJzdWJjaXJjbGUiPjwvZGl2Pgo8L3N2Zz4K"
}, , , , , , , function(t, e, s) {
    "use strict";
    function i(t) {
        s(274)
    }
    var n = s(59),
        a = s(413),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    var i = s(60),
        n = s(368),
        a = s(0),
        r = a(i.a, n.a, !1, null, null, null);
    e.a = r.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(231)
    }
    var n = s(61),
        a = s(371),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(247)
    }
    var n = s(64),
        a = s(387),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(263)
    }
    var n = s(67),
        a = s(402),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(251)
    }
    var n = s(391),
        a = s(0),
        r = i,
        o = a(null, n.a, !1, r, null, null);
    e.a = o.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(260)
    }
    var n = s(68),
        a = s(399),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(261)
    }
    var n = s(69),
        a = s(400),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(266)
    }
    var n = s(72),
        a = s(405),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(267)
    }
    var n = s(74),
        a = s(406),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(238)
    }
    var n = s(75),
        a = s(378),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(257)
    }
    var n = s(76),
        a = s(395),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(249)
    }
    var n = s(77),
        a = s(389),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(232)
    }
    var n = s(78),
        a = s(372),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(252)
    }
    var n = s(79),
        a = s(392),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(277)
    }
    var n = s(80),
        a = s(416),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, "data-v-f4fdf4be", null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(240)
    }
    var n = s(81),
        a = s(380),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(279)
    }
    var n = s(82),
        a = s(418),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(248)
    }
    var n = s(83),
        a = s(388),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(278)
    }
    var n = s(417),
        a = s(0),
        r = i,
        o = a(null, n.a, !1, r, null, null);
    e.a = o.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(236)
    }
    var n = s(86),
        a = s(376),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(229)
    }
    var n = s(88),
        a = s(369),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(276)
    }
    var n = s(89),
        a = s(415),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    var i = s(90),
        n = s(397),
        a = s(0),
        r = a(i.a, n.a, !1, null, null, null);
    e.a = r.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(262)
    }
    var n = s(91),
        a = s(401),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(265)
    }
    var n = s(92),
        a = s(404),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(230)
    }
    var n = s(93),
        a = s(370),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(234)
    }
    var n = s(94),
        a = s(374),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(270)
    }
    var n = s(95),
        a = s(409),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, "data-v-d80b7794", null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(272)
    }
    var n = s(97),
        a = s(411),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, "data-v-e31301d4", null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(243)
    }
    var n = s(98),
        a = s(383),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, "data-v-34d1be05", null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(264)
    }
    var n = s(100),
        a = s(403),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(268)
    }
    var n = s(407),
        a = s(0),
        r = i,
        o = a(null, n.a, !1, r, "data-v-b9f29472", null);
    e.a = o.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(259)
    }
    var n = s(398),
        a = s(0),
        r = i,
        o = a(null, n.a, !1, r, "data-v-6d74ce7d", null);
    e.a = o.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(241)
    }
    var n = s(381),
        a = s(0),
        r = i,
        o = a(null, n.a, !1, r, "data-v-2be8f1c4", null);
    e.a = o.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(245)
    }
    var n = s(101),
        a = s(385),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    function i(t) {
        s(246)
    }
    var n = s(102),
        a = s(386),
        r = s(0),
        o = i,
        c = r(n.a, a.a, !1, o, null, null);
    e.a = c.exports
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "control",
                class: [t.iconPosition, {
                    "is-expanded": t.expanded,
                    "is-loading": t.loading,
                    "is-clearfix": !t.hasMessage
                }]
            }, [s("masked-input", t._b({
                ref: "input",
                staticClass: "input",
                class: [t.statusType, t.size],
                attrs: {
                    mask: t.mask,
                    type: t.newType,
                    autocomplete: t.newAutocomplete,
                    maxlength: t.maxlength,
                    value: t.newValue
                },
                on: {
                    input: t.onInput,
                    blur: function(e) {
                        t.$emit("blur", e) && t.checkHtml5Validity()
                    },
                    focus: function(e) {
                        t.$emit("focus", e)
                    }
                }
            }, "masked-input", t.$attrs, !1)), t._v(" "), t.icon ? s("b-icon", {
                staticClass: "is-left",
                attrs: {
                    icon: t.icon,
                    pack: t.iconPack,
                    size: t.size
                }
            }) : t._e(), t._v(" "), t.loading || !t.passwordReveal && !t.statusType ? t._e() : s("b-icon", {
                staticClass: "is-right",
                class: {
                    "is-clickable": t.passwordReveal
                },
                attrs: {
                    icon: t.passwordReveal ? t.passwordVisibleIcon : t.statusTypeIcon,
                    size: t.size,
                    type: t.passwordReveal ? "is-primary" : t.statusType,
                    both: ""
                },
                nativeOn: {
                    click: function(e) {
                        t.togglePasswordVisibility(e)
                    }
                }
            }), t._v(" "), t.maxlength && t.hasCounter ? s("small", {
                staticClass: "help counter"
            }, [t._v(t._s(t.valueLength) + " / " + t._s(t.maxlength))]) : t._e()], 1)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "answer-image",
                class: ["answer-image_type_" + t.type, {
                    "answer-image_checked": t.checked,
                    "has-hint": !!t.answer.hint
                }]
            }, [i("div", {
                staticClass: "answer-image__img-container"
            }, [i("img", {
                ref: "img",
                staticClass: "answer-image__img",
                class: {
                    "answer-image__img_loading": !t.imgLoaded
                },
                attrs: {
                    src: t.imageUrl
                }
            }), t.imgLoaded || t.type && "vertical" !== t.type ? t._e() : i("img", {
                staticClass: "answer-image__backdrop-img",
                attrs: {
                    src: s(311)
                }
            }), t.imgLoaded || "square" !== t.type ? t._e() : i("img", {
                staticClass: "answer-image__backdrop-img",
                attrs: {
                    src: s(310)
                }
            }), t.imgLoaded || "horizontal" !== t.type ? t._e() : i("img", {
                staticClass: "answer-image__backdrop-img",
                attrs: {
                    src: s(309)
                }
            }), i("Hint", {
                staticClass: "answer-image__hint",
                attrs: {
                    answer: t.answer
                }
            })], 1), i("div", {
                staticClass: "answer-image__title"
            }, [t._v(t._s(t.answer.title))])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "answer-slider"
            }, [s("b-field", [s("div", {
                staticClass: "answer-slider--container"
            }, [s("div", {
                staticClass: "answer-slider--limit"
            }, [t._v(t._s(t.computedMinFormatted))]), s("vue-slider", {
                attrs: {
                    height: "10",
                    min: t.computedMin,
                    max: t.computedMax,
                    "bg-style": t.bgStyle,
                    formatter: t.formatValue,
                    "process-style": t.processStyle,
                    "tooltip-style": t.tooltipStyle
                },
                model: {
                    value: t.val,
                    callback: function(e) {
                        t.val = e
                    },
                    expression: "val"
                }
            }), s("div", {
                staticClass: "answer-slider--limit"
            }, [t._v(t._s(t.computedMaxFormatted))])], 1)])], 1)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "bonus",
                class: ["bonus_type_" + t.type, {
                    bonus_locked: t.isLocked,
                    bonus_unlocked: !t.isLocked
                }]
            }, [s("div", {
                staticClass: "bonus__wrapper",
                style: {
                    backgroundImage: "url(" + t.imageUrl + ")"
                },
                on: {
                    click: t.download
                }
            }, [s("div", {
                staticClass: "bonus__layer"
            }), s("span", {
                staticClass: "bonus__text"
            }, [t._v(t._s(t.text))]), t.isLocked ? t._e() : s("div", {
                staticClass: "bonus__unlock",
                attrs: {
                    title: t.$t("РЎРєР°С‡Р°С‚СЊ")
                }
            }, [s("DownArrowIcon")], 1)]), t.isLocked ? [s("LockIcon", {
                staticClass: "bonus__lock-icon"
            }), s("div", {
                staticClass: "bonus__lock"
            })] : t._e()], 2)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "result-loader"
            }, [s("div", {
                staticClass: "result-loader__loader"
            }, [s("object", {
                attrs: {
                    type: "image/svg+xml",
                    data: t.resultLoader
                }
            }), s("div", {
                staticClass: "result-loader__percent"
            }, [t._v(t._s(t.percent) + "%")])]), s("div", {
                staticClass: "result-loader__text"
            }, [t._v("рџ‘Њ " + t._s(t.$t("РџРѕРґСЃС‡С‘С‚ СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ")) + "...")])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 14.257 8.127"
                }
            }, [s("defs"), t._v(" "), s("g", {
                staticClass: "cls-1",
                attrs: {
                    id: "arrow-point-to-right_1_",
                    "data-name": "arrow-point",
                    transform: "rotate(-90 52.633 52.633)"
                }
            }, [s("path", {
                attrs: {
                    id: "Path_4",
                    d: "M104.973 7.834l-6.13 6.13a1 1 0 0 1-1.412-1.412l5.424-5.424L97.431 1.7A1 1 0 0 1 98.843.292l6.13 6.13a1 1 0 0 1 0 1.412z",
                    "data-name": "Path 4"
                }
            })])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                ref: "answers",
                staticClass: "answer-variants"
            }, [s("div", {
                staticClass: "answer-variants__group",
                model: {
                    value: t.val,
                    callback: function(e) {
                        t.val = e
                    },
                    expression: "val"
                }
            }, [t._l(t.answers, function(e) {
                return s("div", {
                    key: e.id,
                    ref: "answer",
                    refInFor: !0,
                    staticClass: "answer-variants__textVariant",
                    class: {
                        "answer-variants__textVariant_selected": t.isChecked(e.title), "has-hint": !!e.hint
                    }
                }, ["one" === t.select ? s("b-radio", {
                    attrs: {
                        "native-value": e.title
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, [s("Answer", {
                    attrs: {
                        answer: e,
                        checked: t.isChecked(e.title)
                    }
                })], 1) : t._e(), "many" === t.select ? s("b-checkbox", {
                    attrs: {
                        "native-value": e.title
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, [s("Answer", {
                    attrs: {
                        answer: e,
                        checked: t.isChecked(e.title)
                    }
                })], 1) : t._e()], 1)
            }), t.hasOther ? s("div", {
                staticClass: "answer-variants__textVariant answer-variants__other"
            }, ["one" === t.select ? s("b-radio", {
                attrs: {
                    value: !!t.other,
                    "native-value": !0
                },
                on: {
                    input: t.checkOtherValue
                }
            }) : t._e(), "many" === t.select ? s("b-checkbox", {
                attrs: {
                    value: !!t.other
                },
                on: {
                    input: t.checkOtherValue
                }
            }) : t._e(), s("b-field", [s("b-input", {
                attrs: {
                    placeholder: t.$t("Р”СЂСѓРіРѕРµ") + "..."
                },
                nativeOn: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key)) return null;
                        t.nextQuestion(e)
                    }
                },
                model: {
                    value: t.other,
                    callback: function(e) {
                        t.other = e
                    },
                    expression: "other"
                }
            })], 1)], 1) : t._e()], 2)])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "answer-hint"
            }, [t.answer.hint ? i("v-popover", {
                attrs: {
                    trigger: "hover focus click"
                }
            }, [i("button", {
                staticClass: "answer-hint__button"
            }, [i("div", {
                staticClass: "answer-hint__help"
            }, [i("img", {
                attrs: {
                    src: s(322)
                }
            })])]), i("div", {
                attrs: {
                    slot: "popover"
                },
                domProps: {
                    innerHTML: t._s(t.$format.markdown(t.answer.hint))
                },
                slot: "popover"
            })]) : t._e()], 1)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "date-question"
            }, [t.isRange ? t._e() : s("b-field", {
                staticClass: "date-question--field",
                class: {
                    "has-time": t.hasTime
                }
            }, [s("b-datepicker", {
                staticClass: "is-not-range",
                attrs: {
                    inline: "inline",
                    "day-names": t.dayNames,
                    "month-names": t.monthNames,
                    placeholder: t.question.options.placeholder,
                    readonly: !1,
                    "first-day-of-week": 1,
                    size: "is-small"
                },
                model: {
                    value: t.date,
                    callback: function(e) {
                        t.date = e
                    },
                    expression: "date"
                }
            }), t.hasTime ? s("b-timepicker", {
                staticClass: "date-question--timepicker is-not-range",
                attrs: {
                    icon: "clock"
                },
                model: {
                    value: t.time,
                    callback: function(e) {
                        t.time = e
                    },
                    expression: "time"
                }
            }, [s("button", {
                staticClass: "button is-primary",
                on: {
                    click: function(e) {
                        t.time = new Date
                    }
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "clock"
                }
            }), s("span", [t._v(t._s(t.$t("РЎРµР№С‡Р°СЃ")))])], 1), s("button", {
                staticClass: "button is-danger",
                on: {
                    click: function(e) {
                        t.time = null
                    }
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "close"
                }
            }), s("span", [t._v(t._s(t.$t("РЎР±СЂРѕСЃ")))])], 1)]) : t._e()], 1), t.isRange ? s("b-field", [s("div", {
                staticClass: "date-question--container"
            }, [s("div", {
                staticClass: "date-question--range"
            }, [s("div", {
                staticClass: "date-question--date"
            }, [s("b-datepicker", {
                ref: "from",
                attrs: {
                    "day-names": t.dayNames,
                    "month-names": t.monthNames,
                    placeholder: t.$t("РћС‚"),
                    icon: "calendar-today",
                    readonly: !1,
                    "mobile-native": !1,
                    "first-day-of-week": 1
                },
                model: {
                    value: t.from,
                    callback: function(e) {
                        t.from = e
                    },
                    expression: "from"
                }
            }), t.hasTime ? s("b-timepicker", {
                staticClass: "date-question--timepicker",
                attrs: {
                    icon: "clock"
                },
                model: {
                    value: t.timeFrom,
                    callback: function(e) {
                        t.timeFrom = e
                    },
                    expression: "timeFrom"
                }
            }, [s("button", {
                staticClass: "button is-primary",
                on: {
                    click: function(e) {
                        t.timeFrom = new Date
                    }
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "clock"
                }
            }), s("span", [t._v(t._s(t.$t("РЎРµР№С‡Р°СЃ")))])], 1), s("button", {
                staticClass: "button is-danger",
                on: {
                    click: function(e) {
                        t.timeFrom = null
                    }
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "close"
                }
            }), s("span", [t._v(t._s(t.$t("РЎР±СЂРѕСЃ")))])], 1)]) : t._e()], 1), s("span", {
                staticStyle: {
                    "margin-top": "10px"
                }
            }, [t._v("В -В ")]), s("div", {
                staticClass: "date-question--date"
            }, [s("b-datepicker", {
                ref: "to",
                attrs: {
                    "day-names": t.dayNames,
                    "month-names": t.monthNames,
                    placeholder: t.$t("Р”Рѕ"),
                    "min-date": t.from,
                    icon: "calendar-today",
                    readonly: !1,
                    "mobile-native": !1,
                    "first-day-of-week": 1
                },
                model: {
                    value: t.to,
                    callback: function(e) {
                        t.to = e
                    },
                    expression: "to"
                }
            }), t.hasTime ? s("b-timepicker", {
                staticClass: "date-question--timepicker",
                attrs: {
                    position: "is-bottom-left",
                    icon: "clock"
                },
                model: {
                    value: t.timeTo,
                    callback: function(e) {
                        t.timeTo = e
                    },
                    expression: "timeTo"
                }
            }, [s("button", {
                staticClass: "button is-primary",
                on: {
                    click: function(e) {
                        t.timeTo = new Date
                    }
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "clock"
                }
            }), s("span", [t._v(t._s(t.$t("РЎРµР№С‡Р°СЃ")))])], 1), s("button", {
                staticClass: "button is-danger",
                on: {
                    click: function(e) {
                        t.timeTo = null
                    }
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "close"
                }
            }), s("span", [t._v(t._s(t.$t("РЎР±СЂРѕСЃ")))])], 1)]) : t._e()], 1)])])]) : t._e()], 1)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "progress-bar",
                class: {
                    "progress-bar_mobile": t.mobile
                }
            }, [t.finish ? t._e() : s("div", {
                staticClass: "progress-bar__label",
                class: {
                    "is-finish": t.finish
                }
            }, [t._v(t._s(t.$t("Р“РѕС‚РѕРІРѕ")) + ":"), s("span", [t._v(t._s(t.percent) + "%")])]), s("div", {
                staticClass: "progress-bar__field"
            }, [s("span", {
                style: "width: " + t.percent + "%"
            }), t.finish ? s("div", {
                staticClass: "progress-bar__field-mark"
            }) : t._e(), t.finish ? s("p", {
                staticClass: "progress-bar__field-label"
            }, [t._v("95%")]) : t._e()])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "result",
                class: {
                    result_has_image: t.hasImage
                }
            }, [t.result ? s("div", {
                staticClass: "result__container"
            }, [t.hasImage ? s("div", {
                staticClass: "result__image",
                style: {
                    backgroundImage: "url(" + t.bgUrl + ")"
                }
            }, [t.result.cost ? s("PriceLabel", {
                staticClass: "result__cost result__cost_in-bg",
                attrs: {
                    result: t.result
                }
            }) : t._e(), s("div", {
                staticClass: "result__bg"
            })], 1) : t._e(), s("div", {
                staticClass: "result__content"
            }, [t.result.title ? s("h2", {
                staticClass: "result__title"
            }, [t._v(t._s(t.result.title))]) : t._e(), t.result.cost && !t.hasImage ? s("PriceLabel", {
                staticClass: "result__cost result__cost_in-text",
                attrs: {
                    result: t.result
                }
            }) : t._e(), t.result.text ? s("p", {
                staticClass: "result__text",
                domProps: {
                    innerHTML: t._s(t.$format.markdown(t.result.text))
                }
            }) : t._e(), t.bonuses.length ? s("div", {
                staticClass: "result__bonuses"
            }, ["afterForm" === t.results.view ? s("div", {
                staticClass: "result__bonuses-title"
            }, [t._v(t._s(t.$t("Р’Р°С€Рё Р±РѕРЅСѓСЃС‹")))]) : t._e(), "beforeForm" === t.results.view ? s("div", {
                staticClass: "result__bonuses-title"
            }, [t._v(t._s(t.$t("РџРѕР»СѓС‡РёС‚Рµ РІР°С€Рё Р±РѕРЅСѓСЃС‹ РґР°Р»РµРµ")))]) : t._e(), s("Bonuses", {
                attrs: {
                    direction: "row"
                }
            })], 1) : t._e(), t.results.retry && "beforeForm" === t.results.view ? s("button", {
                staticClass: "button result__retry",
                on: {
                    click: function(e) {
                        t.$store.commit("quiz/startQuiz")
                    }
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "reload"
                }
            }), t._v(t._s(t.$t("РџСЂРѕР№С‚Рё С‚РµСЃС‚ Р·Р°РЅРѕРІРѕ")))], 1) : t._e()], 1), s("div", {
                staticClass: "result__navpad-place"
            }, [s("div", {
                staticClass: "result__whitelabel"
            }, [s("WhiteLabel")], 1)]), t.hasButton || t.selectedResult ? s("div", {
                staticClass: "result__navpad",
                class: {
                    result__navpad_align_left: t.selectedResult && !t.hasButton
                }
            }, [t.selectedResult ? s("button", {
                staticClass: "button is-outlined result__back-button",
                on: {
                    click: t.back
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "arrow-left"
                }
            })], 1) : t._e(), t.hasButton ? s("button", {
                staticClass: "button is-primary has-shadow result__button",
                on: {
                    click: t.action
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "checkbox-marked-circle-outline"
                }
            }), t._v("В \n" + t._s(t.buttonText))], 1) : t._e(), s("div", {
                staticClass: "result__whitelabel"
            }, [s("WhiteLabel")], 1)]) : t._e()]) : t._e()])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "price-label"
            }, [t.oldPrice ? s("div", {
                staticClass: "price-label__old"
            }, [t._v(t._s(t.priceLabel(t.oldPrice)))]) : t._e(), s("div", {
                staticClass: "price-label__container"
            }, [s("div", {
                staticClass: "price-label__number"
            }, [t._v(t._s(t.priceLabel(t.totalPrice)))]), t.oldPrice ? s("DiscountLabel", {
                staticClass: "price-label__discount"
            }, [t._v("-" + t._s(t.$format.number(t.discount)) + " " + t._s(t.discountCurrencySymbol))]) : t._e()], 1)])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "start-page columns is-desktop-modal",
                class: {
                    "start-page_closing": t.closing, "start-page_has_bg": !!t.bgUrl
                }
            }, [t.bgUrl ? s("div", {
                staticClass: "start-page__bg column is-7",
                style: {
                    backgroundImage: "url(" + t.bgUrl + ")"
                }
            }, [t._v("В ")]) : t._e(), s("div", {
                staticClass: "start-page__content column",
                class: {
                    "is-5": !!t.bgUrl
                }
            }, [s("div", {
                staticClass: "start-page__body"
            }, [s("div", {
                staticClass: "start-page__line"
            }), s("h1", {
                staticClass: "start-page__header"
            }, [t._v(t._s(t.title))]), s("h2", {
                staticClass: "start-page__subheader"
            }, [t._v(t._s(t.subtitle))]), s("button", {
                staticClass: "start-page__button button is-primary is-blicked has-shadow",
                on: {
                    click: t.close
                }
            }, [s(), t._v(t._s(t.buttonText || t.$t("Пройти тест")))], 1), t.bonuses.length ? s("div", {
                staticClass: "start-page__bonuses"
            }, [s("div", {
                staticClass: "start-page__bonuses-title"
            }, [t._v(t._s(t.$t("Р‘РѕРЅСѓСЃС‹ РїРѕСЃР»Рµ РїСЂРѕС…РѕР¶РґРµРЅРёСЏ С‚РµСЃС‚Р°")))]), s("Bonuses", {
                attrs: {
                    direction: "row",
                    height: 63
                }
            })], 1) : t._e()]), s("div", {
                staticClass: "start-page__footer"
            }, [t.isWhiteLabelActive ? t._e() : s("WhiteLabel", {
                staticClass: "start-page__white-label"
            })], 1)]), s("div", {
                staticClass: "start-page__layer"
            })])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("svg", {
                attrs: {
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64",
                    "enable-background": "new 0 0 64 64"
                }
            }, [s("g", [s("path", {
                attrs: {
                    d: "m63.386,16.193l.002-.002c0.002-0.003 0.004-0.006 0.006-0.01 0.172-0.195 0.298-0.43 0.399-0.678 0.032-0.076 0.053-0.148 0.076-0.225 0.058-0.191 0.094-0.389 0.106-0.596 0.006-0.076 0.018-0.148 0.016-0.226 0-0.04 0.01-0.076 0.008-0.115-0.014-0.239-0.062-0.47-0.136-0.687-0.006-0.023-0.022-0.041-0.03-0.064-0.088-0.239-0.214-0.451-0.363-0.645-0.021-0.027-0.028-0.063-0.05-0.09l-10.311-12.146c-0.789-0.93-2.084-0.948-2.894-0.037-0.808,0.91-0.823,2.402-0.032,3.334l5.558,6.549c-8.121-1.076-16.104,0.633-16.481,0.717-24.646,4.467-42.087,27.227-38.88,50.736 0.159,1.164 1.028,1.992 2.019,1.992 0.106,0 0.212-0.009 0.32-0.027 1.116-0.203 1.878-1.409 1.704-2.696-2.857-20.94 13.056-41.282 35.537-45.358 0.103-0.024 8.351-1.794 16.117-0.574l-8.577,5.093c-1.005,0.598-1.398,2.02-0.881,3.177 0.516,1.159 1.748,1.608 2.756,1.017l13.52-8.028c0.183-0.111 0.347-0.25 0.491-0.411z"
                }
            })])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "discount",
                class: {
                    "is-unexpanded": t.unexpanded
                }
            }, [t._l(t.countQuestions, function(e) {
                return t.showBubble && t.questionNumber === e + 1 && !t.isMeltingDiscount ? s("div", {
                    staticClass: "discount__bubble discount__bubble_mobile",
                    class: {
                        "is-unexpanded": t.unexpanded
                    }
                }, [t._v(t._s("+ " + t.getIncreasingDiscountStep))]) : t._e()
            }), s("div", {
                staticClass: "discount__label"
            }, [s("div", {
                staticClass: "discount__icon"
            }, [t._v(t._s(t.getDiscountIcon))]), s("div", {
                staticClass: "discount__label-text"
            }, [t._v(t._s(t.$t("Р’Р°С€Р° СЃРєРёРґРєР°")) + ":В ")])]), s("div", {
                staticClass: "discount__price"
            }, [s("div", {
                staticClass: "discount__value"
            }, [t._v(t._s(t.formattedDiscount)), t._l(t.countQuestions, function(e) {
                return t.showBubble && t.questionNumber === e + 1 && !t.isMeltingDiscount ? s("div", {
                    staticClass: "discount__bubble discount__bubble_desktop"
                }, [t._v(t._s("+" + t.getIncreasingDiscountStep))]) : t._e()
            })], 2), s("div", {
                staticClass: "discount__symbol"
            }, [t._v(t._s(t.discountCurrencySymbol))]), s("DiscountArrow", {
                staticClass: "discount__arrows",
                class: {
                    "is-unexpanded": t.unexpanded
                },
                attrs: {
                    down: t.isMeltingDiscount
                }
            })], 1)], 2)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16.141 16.597"
                }
            }, [s("g", {
                attrs: {
                    id: "check-form_1_",
                    "data-name": "check-form (1)",
                    transform: "translate(-5.963)"
                }
            }, [s("path", {
                staticClass: "cls-1",
                attrs: {
                    id: "Path_12",
                    d: "M18.438 8.8V1.337H7.3V15.26h5.124a.668.668 0 0 1 0 1.337H6.631a.67.67 0 0 1-.668-.668V.668A.67.67 0 0 1 6.631 0h12.476a.67.67 0 0 1 .668.668V8.8a.668.668 0 1 1-1.337 0zm3.442 1.626a.67.67 0 0 0-.947.056l-3.665 4.077-1.838-1.771a.67.67 0 0 0-.925.969l2.339 2.25a.657.657 0 0 0 .468.189h.022a.668.668 0 0 0 .468-.223l4.121-4.589a.672.672 0 0 0-.043-.958zM15.988 3.9H9.973a.668.668 0 1 0 0 1.337h6.015a.668.668 0 1 0 0-1.337zm.668 4.344a.67.67 0 0 0-.668-.668H9.973a.668.668 0 0 0 0 1.337h6.015a.67.67 0 0 0 .668-.67zm-6.683 2.9a.668.668 0 0 0 0 1.337h1.782a.668.668 0 0 0 0-1.337z",
                    "data-name": "Path 12"
                }
            })])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i;
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "install"
            }, [t.quizId && !t.edit ? s("div", {
                staticClass: "install__edit"
            }, [s("div", [t._v(t._s(t.$t('Рљ СЌС‚РѕР№ РіСЂСѓРїРїРµ РїСЂРёРІСЏР·Р°РЅ РєРІРёР· "{title}"', {
                title: t.quizTitle
            })))]), s("div", [s("a", {
                staticClass: "button is-text",
                attrs: {
                    href: "https://panel.marquiz.ru/quizzes/edit/" + t.quizId,
                    target: "_blank"
                }
            }, [s("i", {
                staticClass: "icon-pencil"
            }), t._v(t._s(t.$t("Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ РєРІРёР·")))]), s("button", {
                staticClass: "button is-text",
                on: {
                    click: function(e) {
                        t.edit = !0
                    }
                }
            }, [s("i", {
                staticClass: "icon-pencil"
            }), t._v(t._s(t.$t("РџСЂРёРІСЏР·Р°С‚СЊ РґСЂСѓРіРѕР№ РєРІРёР·")))])])]) : t._e(), !t.quizId || t.edit ? [s("p", [t._v(t._s(t.$t('Р§С‚РѕР±С‹ РїСЂРёРІСЏР·Р°С‚СЊ РєРІРёР· Рє РіСЂСѓРїРїРµ vk, РІРІРµРґРёС‚Рµ РµРіРѕ id Рё РЅР°Р¶РјРёС‚Рµ "РџСЂРёРІСЏР·Р°С‚СЊ"')))]), s("form", {
                on: {
                    submit: function(e) {
                        e.preventDefault(), t.setGroup(e)
                    }
                }
            }, [s("section", {
                staticClass: "mb-1"
            }, [s("b-field", {
                attrs: {
                    label: t.$t("Р’РІРµРґРёС‚Рµ id РєРІРёР·Р°")
                }
            }), s("b-input", {
                ref: "quizId",
                attrs: {
                    placeholder: "5aa7c2bb23fc0f00e7b75a49"
                },
                model: {
                    value: t.id,
                    callback: function(e) {
                        t.id = "string" == typeof e ? e.trim() : e
                    },
                    expression: "id"
                }
            })], 1), s("button", {
                staticClass: "install__attach-btn button is-danger",
                attrs: {
                    type: "submit",
                    disabled: !t.id
                }
            }, [t._v(t._s(t.$t("РџСЂРёРІСЏР·Р°С‚СЊ")))])])] : t._e()], 2)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "agreement"
            }, [s("div", {
                staticClass: "agreement__close",
                on: {
                    click: t.close
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "close"
                }
            })], 1), s("div", {
                staticClass: "agreement__title"
            }, [t._v(t._s(t.$t("РџРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРѕРµ СЃРѕРіР»Р°С€РµРЅРёРµ")))]), s("div", {
                staticClass: "agreement__text"
            }, [s("p", [t._v(t._s(t.$t("РЇ, СЃСѓР±СЉРµРєС‚ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РґР°РЅРЅС‹С…, РІ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРё СЃ Р¤РµРґРµСЂР°Р»СЊРЅС‹Рј Р·Р°РєРѕРЅРѕРј РѕС‚ 27 РёСЋР»СЏ 2006 РіРѕРґР° в„– 152 В«Рћ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РґР°РЅРЅС‹С…В» РїСЂРµРґРѕСЃС‚Р°РІР»СЏСЋ СЃРѕРіР»Р°СЃРёРµ РЅР° РѕР±СЂР°Р±РѕС‚РєСѓ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РґР°РЅРЅС‹С…, СѓРєР°Р·Р°РЅРЅС‹С… РјРЅРѕР№ РІ С„РѕСЂРјРµ РЅР° СЃР°Р№С‚Рµ РІ СЃРµС‚Рё В«РРЅС‚РµСЂРЅРµС‚В», РІР»Р°РґРµР»СЊС†РµРј РєРѕС‚РѕСЂРѕРіРѕ СЏРІР»СЏРµС‚СЃСЏ РћРїРµСЂР°С‚РѕСЂ.")))]), s("p", [t._v(t._s(t.$t("РџРѕРґ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹РјРё РґР°РЅРЅС‹РјРё СЃСѓР±СЉРµРєС‚Р° РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РґР°РЅРЅС‹С… РїРѕРЅРёРјР°РµС‚СЃСЏ РЅРёР¶РµСѓРєР°Р·Р°РЅРЅР°СЏ РѕР±С‰Р°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ: Р¤РРћ, Р°РґСЂРµСЃ СЌР»РµРєС‚СЂРѕРЅРЅРѕР№ РїРѕС‡С‚С‹ Рё РЅРѕРјРµСЂ С‚РµР»РµС„РѕРЅР°, РєРѕРЅС‚Р°РєС‚ СЃРѕС†РёР°Р»СЊРЅРѕР№ СЃРµС‚Рё РёР»Рё РјРµСЃСЃРµРЅРґР¶РµСЂР°.")))]), s("p", [t._v(t._s(t.$t("РџСЂРёРЅРёРјР°СЏ РЅР°СЃС‚РѕСЏС‰РµРµ РЎРѕРіР»Р°С€РµРЅРёРµ, СЏ РІС‹СЂР°Р¶Р°СЋ СЃРІРѕСЋ Р·Р°РёРЅС‚РµСЂРµСЃРѕРІР°РЅРЅРѕСЃС‚СЊ Рё РїРѕР»РЅРѕРµ СЃРѕРіР»Р°СЃРёРµ, С‡С‚Рѕ РѕР±СЂР°Р±РѕС‚РєР° РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РґР°РЅРЅС‹С… РјРѕР¶РµС‚ РІРєР»СЋС‡Р°С‚СЊ РІ СЃРµР±СЏ СЃР»РµРґСѓСЋС‰РёРµ РґРµР№СЃС‚РІРёСЏ: СЃР±РѕСЂ, СЃРёСЃС‚РµРјР°С‚РёР·Р°С†РёСЋ, РЅР°РєРѕРїР»РµРЅРёРµ, С…СЂР°РЅРµРЅРёРµ, СѓС‚РѕС‡РЅРµРЅРёРµ (РѕР±РЅРѕРІР»РµРЅРёРµ, РёР·РјРµРЅРµРЅРёРµ), РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµ, РїРµСЂРµРґР°С‡Сѓ (РїСЂРµРґРѕСЃС‚Р°РІР»РµРЅРёРµ, РґРѕСЃС‚СѓРї), Р±Р»РѕРєРёСЂРѕРІР°РЅРёРµ, СѓРґР°Р»РµРЅРёРµ, СѓРЅРёС‡С‚РѕР¶РµРЅРёРµ, РѕСЃСѓС‰РµСЃС‚РІР»СЏРµРјС‹С… РєР°Рє СЃ РёСЃРїРѕР»СЊР·РѕРІР°РЅРёРµРј СЃСЂРµРґСЃС‚РІ Р°РІС‚РѕРјР°С‚РёР·Р°С†РёРё (Р°РІС‚РѕРјР°С‚РёР·РёСЂРѕРІР°РЅРЅР°СЏ РѕР±СЂР°Р±РѕС‚РєР°), С‚Р°Рє Рё Р±РµР· РёСЃРїРѕР»СЊР·РѕРІР°РЅРёСЏ С‚Р°РєРёС… СЃСЂРµРґСЃС‚РІ (РЅРµР°РІС‚РѕРјР°С‚РёР·РёСЂРѕРІР°РЅРЅР°СЏ РѕР±СЂР°Р±РѕС‚РєР°).")))]), s("p", [t._v(t._s(t.$t("РЇ РїРѕРЅРёРјР°СЋ Рё СЃРѕРіР»Р°С€Р°СЋСЃСЊ СЃ С‚РµРј, С‡С‚Рѕ РїСЂРµРґРѕСЃС‚Р°РІР»РµРЅРЅР°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ, СЏРІР»СЏРµС‚СЃСЏ РїРѕР»РЅРѕР№, С‚РѕС‡РЅРѕР№ Рё РґРѕСЃС‚РѕРІРµСЂРЅРѕР№; РїСЂРё РїСЂРµРґРѕСЃС‚Р°РІР»РµРЅРёРё РёРЅС„РѕСЂРјР°С†РёРё РЅРµ РЅР°СЂСѓС€Р°РµС‚СЃСЏ РґРµР№СЃС‚РІСѓСЋС‰РµРµ Р·Р°РєРѕРЅРѕРґР°С‚РµР»СЊСЃС‚РІРѕ Р РѕСЃСЃРёР№СЃРєРѕР№ Р¤РµРґРµСЂР°С†РёРё, Р·Р°РєРѕРЅРЅС‹Рµ РїСЂР°РІР° Рё РёРЅС‚РµСЂРµСЃС‹ С‚СЂРµС‚СЊРёС… Р»РёС†; РІСЃСЏ РїСЂРµРґРѕСЃС‚Р°РІР»РµРЅРЅР°СЏ РёРЅС„РѕСЂРјР°С†РёСЏ Р·Р°РїРѕР»РЅРµРЅР° РјРЅРѕСЋ РІ РѕС‚РЅРѕС€РµРЅРёРё СЃРµР±СЏ Р»РёС‡РЅРѕ; РёРЅС„РѕСЂРјР°С†РёСЏ РЅРµ РѕС‚РЅРѕСЃРёС‚СЃСЏ Рє РіРѕСЃСѓРґР°СЂСЃС‚РІРµРЅРЅРѕР№, Р±Р°РЅРєРѕРІСЃРєРѕР№ Рё/РёР»Рё РєРѕРјРјРµСЂС‡РµСЃРєРѕР№ С‚Р°Р№РЅРµ, РёРЅС„РѕСЂРјР°С†РёСЏ РЅРµ РѕС‚РЅРѕСЃРёС‚СЃСЏ Рє РёРЅС„РѕСЂРјР°С†РёРё Рѕ СЂР°СЃРѕРІРѕР№ Рё/РёР»Рё РЅР°С†РёРѕРЅР°Р»СЊРЅРѕР№ РїСЂРёРЅР°РґР»РµР¶РЅРѕСЃС‚Рё, РїРѕР»РёС‚РёС‡РµСЃРєРёС… РІР·РіР»СЏРґР°С…, СЂРµР»РёРіРёРѕР·РЅС‹С… РёР»Рё С„РёР»РѕСЃРѕС„СЃРєРёС… СѓР±РµР¶РґРµРЅРёСЏС…, РЅРµ РѕС‚РЅРѕСЃРёС‚СЃСЏ Рє РёРЅС„РѕСЂРјР°С†РёРё Рѕ СЃРѕСЃС‚РѕСЏРЅРёРё Р·РґРѕСЂРѕРІСЊСЏ Рё РёРЅС‚РёРјРЅРѕР№ Р¶РёР·РЅРё.")))]), s("p", [t._v(t._s(t.$t("РЇ РїРѕРЅРёРјР°СЋ Рё СЃРѕРіР»Р°С€Р°СЋСЃСЊ СЃ С‚РµРј, С‡С‚Рѕ РћРїРµСЂР°С‚РѕСЂ РЅРµ РїСЂРѕРІРµСЂСЏРµС‚ РґРѕСЃС‚РѕРІРµСЂРЅРѕСЃС‚СЊ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹С… РґР°РЅРЅС‹С…, РїСЂРµРґРѕСЃС‚Р°РІР»СЏРµРјС‹С… РјРЅРѕР№, Рё РЅРµ РёРјРµРµС‚ РІРѕР·РјРѕР¶РЅРѕСЃС‚Рё РѕС†РµРЅРёРІР°С‚СЊ РјРѕСЋ РґРµРµСЃРїРѕСЃРѕР±РЅРѕСЃС‚СЊ Рё РёСЃС…РѕРґРёС‚ РёР· С‚РѕРіРѕ, С‡С‚Рѕ СЏ РїСЂРµРґРѕСЃС‚Р°РІР»СЏСЋ РґРѕСЃС‚РѕРІРµСЂРЅС‹Рµ РїРµСЂСЃРѕРЅР°Р»СЊРЅС‹Рµ РґР°РЅРЅС‹Рµ Рё РїРѕРґРґРµСЂР¶РёРІР°СЋ С‚Р°РєРёРµ РґР°РЅРЅС‹Рµ РІ Р°РєС‚СѓР°Р»СЊРЅРѕРј СЃРѕСЃС‚РѕСЏРЅРёРё.")))]), s("p", [t._v(t._s(t.$t("РЇ РїРѕРґС‚РІРµСЂР¶РґР°СЋ, С‡С‚Рѕ РЅРµ СЏРІР»СЏСЋСЃСЊ СЂРµР·РёРґРµРЅС‚РѕРј СЃС‚СЂР°РЅ Р•РЎ.")))]), s("p", [t._v(t._s(t.$t("РЎРѕРіР»Р°СЃРёРµ РґРµР№СЃС‚РІСѓРµС‚ РїРѕ РґРѕСЃС‚РёР¶РµРЅРёРё С†РµР»РµР№ РѕР±СЂР°Р±РѕС‚РєРё РёР»Рё РІ СЃР»СѓС‡Р°Рµ СѓС‚СЂР°С‚С‹ РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚Рё РІ РґРѕСЃС‚РёР¶РµРЅРёРё СЌС‚РёС… С†РµР»РµР№, РµСЃР»Рё РёРЅРѕРµ РЅРµ РїСЂРµРґСѓСЃРјРѕС‚СЂРµРЅРѕ С„РµРґРµСЂР°Р»СЊРЅС‹Рј Р·Р°РєРѕРЅРѕРј.")))]), s("p", [t._v(t._s(t.$t("РЎРѕРіР»Р°СЃРёРµ РјРѕР¶РµС‚ Р±С‹С‚СЊ РѕС‚РѕР·РІР°РЅРѕ РјРЅРѕСЋ РІ Р»СЋР±РѕРµ РІСЂРµРјСЏ РЅР° РѕСЃРЅРѕРІР°РЅРёРё РјРѕРµРіРѕ РїРёСЃСЊРјРµРЅРЅРѕРіРѕ Р·Р°СЏРІР»РµРЅРёСЏ.")))])]), s("button", {
                staticClass: "agreement__button button button_color_theme is-medium button_rounded",
                attrs: {
                    type: "submit"
                },
                on: {
                    click: t.close
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "checkbox-marked-circle-outline"
                }
            }), s("span", [t._v(t._s(t.$t("Р—Р°РєСЂС‹С‚СЊ")))])], 1)])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "discount-label"
            }, [s("span", [t._t("default", [t._v(t._s(t.value))])], 2)])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("article", {
                staticClass: "thank-page"
            }, [s("p", {
                staticClass: "title thank-page__title"
            }, [t._v(t._s(t.$t("РЎРїР°СЃРёР±Рѕ")) + "! рџ‘Џ")]), s("p", {
                staticClass: "subtitle thank-page__subtitle",
                domProps: {
                    innerHTML: t._s(t.thanksText)
                }
            }), t.bonuses.length ? [s("div", {
                staticClass: "thank-page__bonuses-title"
            }, [t._v(t._s(t.$t("Р’Р°С€Рё Р±РѕРЅСѓСЃС‹")) + ":")]), t.discount ? s("FinalDiscount", {
                staticClass: "thank-page__discount",
                attrs: {
                    discount: t.discount,
                    currency: t.currency
                }
            }) : t._e(), s("Bonuses", {
                staticClass: "thank-page__bonuses",
                attrs: {
                    height: 80,
                    discount: t.discount,
                    currency: t.currency,
                    isThanksPage: !0
                }
            })] : t._e()], 2)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "result-card"
            }, [t.hasImage ? s("div", {
                staticClass: "result-card__image",
                style: {
                    backgroundImage: "url(" + t.bgUrl + ")"
                }
            }, [t.result.cost ? s("PriceLabel", {
                staticClass: "result-card__cost result-card__cost_in-bg",
                attrs: {
                    result: t.result
                }
            }) : t._e(), s("div", {
                staticClass: "result-card__bg"
            })], 1) : t._e(), s("div", {
                staticClass: "result-card__container"
            }, [s("div", {
                staticClass: "result-card__content"
            }, [s("h3", {
                staticClass: "result-card__title"
            }, [t._v(t._s(t.result.title))]), t.result.cost && !t.hasImage ? s("PriceLabel", {
                staticClass: "result-card__cost result-card__cost_in-text",
                attrs: {
                    result: t.result
                }
            }) : t._e(), s("div", {
                staticClass: "result-card__text"
            }, [t._v(t._s(t.result.text))])], 1), s("button", {
                staticClass: "button result-card__button",
                on: {
                    click: t.selectResult
                }
            }, [t._v(t._s(t.buttonText || t.result.buttonText || t.$t("РЈР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅРµРµ")) + " >")])])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "final-discount"
            }, [s("div", {
                staticClass: "final-discount__bg"
            }), s("div", {
                staticClass: "final-discount__text"
            }, [t._v(t._s(t.$t("Р’Р°С€Р° СЃРєРёРґРєР°")) + ":")]), s("div", {
                staticClass: "final-discount__discount"
            }, [t._v(t._s(t.formattedDiscount) + " " + t._s(t.currency))])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "layout"
            }, [s("section", [s("div", {}, [t._t("default")], 2)])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "results"
            }, [s("div", {
                staticClass: "results__container"
            }, [s("div", [s("h2", {
                staticClass: "results__title"
            }, [t._v(t._s(t.results.multipleTitle || t.$t("Р’Р°С€Рё СЂРµР·СѓР»СЊС‚Р°С‚С‹")))]), s("div", {
                staticClass: "results__text"
            }, [t._v(t._s(t.results.multipleText || t.$t("Р’С‹Р±РµСЂРёС‚Рµ РёРЅС‚РµСЂРµСЃСѓСЋС‰РёР№ РІР°СЃ РІР°СЂРёР°РЅС‚")))])]), s("swiper", {
                staticClass: "results__items results__items_view_slider",
                attrs: {
                    options: t.swiperOption
                }
            }, [t._l(t.suitableResults, function(e) {
                return s("swiper-slide", {
                    key: e.id
                }, [s("ResultCard", {
                    staticClass: "results__item",
                    attrs: {
                        result: e,
                        buttonText: t.results.multipleButton
                    }
                })], 1)
            }), "beforeForm" === t.results.view && (t.results.retry || t.results.skip) ? s("swiper-slide", [s("ResultActionCard", {
                staticClass: "results__item results__action-item",
                attrs: {
                    results: t.results
                }
            })], 1) : t._e(), s("div", {
                staticClass: "swiper-button-prev",
                attrs: {
                    slot: "button-prev"
                },
                slot: "button-prev"
            }, [s("b-icon", {
                attrs: {
                    icon: "chevron-left"
                }
            })], 1), s("div", {
                staticClass: "swiper-button-next",
                attrs: {
                    slot: "button-next"
                },
                slot: "button-next"
            }, [s("b-icon", {
                attrs: {
                    icon: "chevron-right"
                }
            })], 1), t.suitableResults.length > 2 ? s("div", {
                staticClass: "swiper-scrollbar",
                attrs: {
                    slot: "scrollbar"
                },
                slot: "scrollbar"
            }) : t._e()], 2), s("div", {
                staticClass: "results__items results__items_view_list"
            }, [t._l(t.suitableResults, function(t) {
                return s("ResultCard", {
                    key: t.id,
                    staticClass: "results__item",
                    attrs: {
                        result: t
                    }
                })
            }), "beforeForm" === t.results.view && (t.results.retry || t.results.skip) ? s("ResultActionCard", {
                staticClass: "results__item results__action-item",
                attrs: {
                    results: t.results
                }
            }) : t._e()], 2), s("WhiteLabel", {
                staticClass: "results__white-label"
            })], 1)])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "app",
                style: t.styles,
                attrs: {
                    id: "app"
                }
            }, [t.loaded ? s("Layout", [t.quizStarted ? t._e() : s("div", {
                staticClass: "app__start-page"
            }, [s("StartPage")], 1), t.quizStarted ? s("Quiz") : t._e()], 1) : t._e(), t.isShowWelcomePage ? t._e() : [t.isLoading ? s("div", {
                staticClass: "app__loading"
            }) : t._e(), t.notFound ? s("div", {
                staticClass: "app__not-found"
            }, [s("div", {
                staticClass: "app__emoji"
            }, [t._v("4пёЏвѓЈ 0пёЏвѓЈ 4пёЏвѓЈ")]), t._v(t._s(t.$t("С‚Р°РєРѕР№ РєРІРёР· РЅРµ СЃСѓС‰РµСЃС‚РІСѓРµС‚")) + " рџ™„")]) : t._e(), t.loadingError ? s("div", {
                staticClass: "app__loading-error"
            }, [s("p", [t._v(t._s(t.$t("РЅРµ СѓРґР°Р»РѕСЃСЊ Р·Р°РіСЂСѓР·РёС‚СЊ С‚РµСЃС‚")) + "..")]), s("div", {
                staticClass: "app__emoji"
            }, [t._v("рџ¤’")])]) : t._e(), "/agreement" === t.$route.path ? s("router-view") : t._e()], t.isShowWelcomePage ? s("Welcome") : t._e(), t.isVkGroupAdmin ? s("button", {
                staticClass: "app__edit button is-small",
                on: {
                    click: function(e) {
                        t.isEditMode = !0
                    }
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "pencil"
                }
            })], 1) : t._e(), s("b-modal", {
                attrs: {
                    active: t.isEditMode
                },
                on: {
                    "update:active": function(e) {
                        t.isEditMode = e
                    }
                }
            }, [s("div", {
                staticClass: "card"
            }, [s("div", {
                staticClass: "card-content"
            }, [s("Install", {
                attrs: {
                    quizId: t.quizId,
                    request: t.request,
                    quizTitle: t.info.name || t.info.title
                },
                on: {
                    changed: t.closeAndReload
                }
            })], 1)])])], 2)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "bonuses",
                class: ["bonuses_direction_" + t.direction, "bonuses_count_" + t.bonuses.length],
                style: {
                    "--bonus-height": t.height + "px"
                }
            }, t._l(t.bonuses, function(e, i) {
                return s("Bonus", {
                    key: "bonus_" + i,
                    staticClass: "bonuses__bonus",
                    attrs: {
                        bonus: e,
                        isLocked: t.isLock(e)
                    }
                })
            }))
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "result-card result-action-card",
                class: {
                    "result-action-card_dashed": t.results.retry && !t.results.skip
                }
            }, [t.results.retry && !t.results.skip ? s("div", {
                staticClass: "result-action-card__retry",
                on: {
                    click: function(e) {
                        t.$store.commit("quiz/startQuiz")
                    }
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "reload"
                }
            }), s("div", [t._v(t._s(t.$t("РџСЂРѕР№С‚Рё С‚РµСЃС‚ Р·Р°РЅРѕРІРѕ")))])], 1) : s("div", {
                staticClass: "result-card__container"
            }, [s("div", {
                staticClass: "result-card__content result-card__content_centered"
            }, [t._m(0, !1, !1), s("div", {
                staticClass: "result-card__title"
            }, [t._v(t._s(t.$t("РќРµ Р·РЅР°СЋ, С‡С‚Рѕ РІС‹Р±СЂР°С‚СЊ")) + "...")])]), t.results.skip ? s("button", {
                staticClass: "button result-card__button",
                on: {
                    click: function(e) {
                        t.$store.dispatch("quiz/showLeadForm")
                    }
                }
            }, [t._v(t._s(t.$t("Р”Р°Р»РµРµ")) + " >")]) : t._e(), t.results.retry && t.results.skip ? s("div", {
                staticClass: "result-card__or"
            }, [t._v(t._s(t.$t("РёР»Рё")))]) : t._e(), t.results.retry ? s("button", {
                staticClass: "button result-card__retry",
                on: {
                    click: function(e) {
                        t.$store.commit("quiz/startQuiz")
                    }
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "reload"
                }
            }), t._v(t._s(t.$t("РџСЂРѕР№С‚Рё С‚РµСЃС‚ Р·Р°РЅРѕРІРѕ")))], 1) : t._e()])])
        },
        n = [function() {
            var t = this,
                e = t.$createElement,
                i = t._self._c || e;
            return i("div", {
                staticClass: "result-action-card__emoji"
            }, [i("img", {
                attrs: {
                    src: s(313)
                }
            })])
        }],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                ref: "quiz"
            }, [t.leadForm || t.isResultsShow || t.isResultShow || t.isResultLoaderShow ? t._e() : s("div", {
                staticClass: "quiz",
                class: {
                    quiz_sidebar_on: t.showRightSidebar
                }
            }, [s("div", {
                staticClass: "quiz__questions"
            }, [s("div", {
                staticClass: "quiz__questions-header"
            }, [s("h3", {
                staticClass: "quiz__title"
            }, [s("CheckForm", {
                staticClass: "quiz__title-icon"
            }), t._v(t._s(t.info.title))], 1), s("hr", {
                staticClass: "quiz__title-separator"
            }), t.bonuses.length || t.discount ? s("div", {
                staticClass: "quiz__sidebar-mobile"
            }, [s("SidebarMobile", {
                attrs: {
                    bonuses: t.bonuses,
                    countQuestions: t.questions.length,
                    discount: t.discount,
                    autoshow: !t.get(t.info, "startPage.enabled", !1)
                }
            })], 1) : t._e(), t.getQuestion ? [s("div", {
                staticClass: "title quiz__question-title"
            }, [t._v(t._s(t.getQuestion.title)), s("br"), s("div", {
                staticClass: "quiz__tags"
            }, [t.getCanMany ? s("b-tag", {
                staticClass: "quiz__tag quiz__tag_many",
                on: {
                    close: function(e) {
                        t.isTag1Active = !1
                    }
                }
            }, [s("div", {
                staticClass: "quiz__tag-icon"
            }, [s("CheckRounded")], 1), t._v(t._s(t.$t("РІС‹Р±РµСЂРёС‚Рµ РѕРґРёРЅ РёР»Рё РЅРµСЃРєРѕР»СЊРєРѕ")))]) : t._e(), t.getNotRequired ? s("b-tag", {
                staticClass: "quiz__tag quiz__tag_skip",
                on: {
                    close: function(e) {
                        t.isTag1Active = !1
                    }
                }
            }, [t._v(t._s(t.$t("РјРѕР¶РЅРѕ РїСЂРѕРїСѓСЃС‚РёС‚СЊ")))]) : t._e()], 1)]), s("ProgressBar", {
                staticClass: "quiz__progress",
                attrs: {
                    percent: Math.round(t.getPassedPercent)
                }
            }), t.showRightSidebar ? s("div", {
                staticClass: "quiz__sidebar-inner"
            }, [t.discount ? s("Discount", {
                staticClass: "quiz__discount",
                attrs: {
                    countQuestions: t.questions.length
                }
            }) : t._e(), t.getQuestion.text ? s("AssistantMobile", {
                staticClass: "quiz__assistant",
                attrs: {
                    text: t.getQuestion.text,
                    hint: t.hint,
                    assistant: t.info.assistant
                }
            }) : t._e()], 1) : t._e()] : t._e()], 2), s("transition", {
                attrs: {
                    mode: "out-in"
                },
                on: {
                    leave: t.leave,
                    beforeEnter: t.beforeEnter,
                    enter: t.enter,
                    afterEnter: t.afterEnter
                }
            }, [s("keep-alive", t._l(t.questions, function(e, i) {
                return i === t.activeQuestion ? s("Question", {
                    key: e.id,
                    ref: "question",
                    refInFor: !0,
                    staticClass: "quiz__question",
                    attrs: {
                        question: e,
                        id: e.id
                    }
                }) : t._e()
            }))], 1), t.isWhiteLabelActive ? t._e() : s("div", {
                staticClass: "quiz__whitelabel quiz__whitelabel_mobile"
            }, [s("WhiteLabel")], 1), s("div", {
                staticClass: "quiz__buttons"
            }, [s("QuizButtons", {
                attrs: {
                    "passed-percent": t.getPassedPercent,
                    "active-question": t.activeQuestion,
                    "not-required": t.getNotRequired,
                    "is-last": t.isLastStep,
                    filled: t.getIsFilled
                },
                on: {
                    previous: t.prevQuestion,
                    next: t.nextQuestion,
                    "show-lead": t.nextQuestion
                }
            })], 1)], 1), t.showRightSidebar ? s("div", {
                staticClass: "quiz__sidebar"
            }, [t.discount ? s("Discount", {
                staticClass: "quiz__discount",
                attrs: {
                    countQuestions: t.questions.length
                }
            }) : t._e(), t.getQuestion.text ? s("Assistant", {
                staticClass: "quiz__assistant",
                attrs: {
                    text: t.getQuestion.text,
                    hint: t.hint,
                    assistant: t.info.assistant
                }
            }) : t._e(), t.bonuses.length ? s("Bonuses", {
                staticClass: "quiz__bonuses",
                attrs: {
                    height: 80
                }
            }) : t._e(), t.isWhiteLabelActive ? t._e() : s("div", {
                staticClass: "quiz__whitelabel"
            }, [s("WhiteLabel")], 1)], 1) : t._e(), t.showRightSidebar || t.isWhiteLabelActive ? t._e() : s("WhiteLabel", {
                staticClass: "quiz__whitelabel_fixed-bottom"
            })], 1), t.isResultLoaderShow ? s("div", {
                staticClass: "quiz__result-loader"
            }, [s("ResultLoader")], 1) : t._e(), t.isResultsShow ? s("div", {
                staticClass: "quiz__results"
            }, [s("Results")], 1) : t._e(), t.isResultShow ? s("div", {
                staticClass: "quiz__result"
            }, [t.isEmpty(t.result) ? s("div", {
                staticClass: "quiz__empty-result"
            }, [t._v(t._s(t.$t("РњС‹ РЅРµ СЃРјРѕРіР»Рё СЂР°СЃСЃС‡РёС‚Р°С‚СЊ РґР»СЏ РІР°СЃ СЂРµР·СѓР»СЊС‚Р°С‚")) + " рџў"), s("button", {
                staticClass: "button is-primary",
                on: {
                    click: function(e) {
                        t.$store.commit("quiz/startQuiz")
                    }
                }
            }, [t._v(t._s(t.$t("РџРѕРїСЂРѕР±РѕРІР°С‚СЊ РµС‰С‘ СЂР°Р·")))])]) : t._e(), t.isEmpty(t.result) ? t._e() : s("Result")], 1) : t._e(), t.leadForm ? s("div", {
                staticClass: "quiz__lead-form"
            }, [s("div", {
                staticClass: "container"
            }, [s(t.bonuses.length ? "FinalPageV2" : "FinalPage")], 1)]) : t._e()])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "input-question"
            }, [s("b-field", [s("b-input", {
                ref: "input",
                attrs: {
                    placeholder: t.options ? t.options.placeholder : null,
                    size: "is-large"
                },
                nativeOn: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key)) return null;
                        t.nextQuestion(e)
                    }
                },
                model: {
                    value: t.val,
                    callback: function(e) {
                        t.val = e
                    },
                    expression: "val"
                }
            })], 1)], 1)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("svg", {
                staticStyle: {
                    "enable-background": "new 0 0 299.995 299.995"
                },
                attrs: {
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 299.995 299.995",
                    "xml:space": "preserve"
                }
            }, [s("g", [s("g", [s("g", [s("path", {
                attrs: {
                    d: "M149.997,161.485c-8.613,0-15.598,6.982-15.598,15.598c0,5.776,3.149,10.807,7.817,13.505v17.341h15.562v-17.341\n          c4.668-2.697,7.817-7.729,7.817-13.505C165.595,168.467,158.611,161.485,149.997,161.485z"
                }
            }), t._v(" "), s("path", {
                attrs: {
                    d: "M150.003,85.849c-13.111,0-23.775,10.665-23.775,23.775v25.319h47.548v-25.319\n          C173.775,96.516,163.111,85.849,150.003,85.849z"
                }
            }), t._v(" "), s("path", {
                attrs: {
                    d: "M149.995,0.001C67.156,0.001,0,67.159,0,149.998c0,82.837,67.156,149.997,149.995,149.997s150-67.161,150-149.997\n          C299.995,67.159,232.834,0.001,149.995,0.001z M196.085,227.118h-92.173c-9.734,0-17.626-7.892-17.626-17.629v-56.919\n          c0-8.491,6.007-15.582,14.003-17.25v-25.697c0-27.409,22.3-49.711,49.711-49.711c27.409,0,49.709,22.3,49.709,49.711v25.697\n          c7.993,1.673,14,8.759,14,17.25v56.919h0.002C213.711,219.225,205.819,227.118,196.085,227.118z"
                }
            })])])])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("form", {
                staticClass: "lead-form",
                attrs: {
                    name: "contacts"
                },
                on: {
                    submit: function(e) {
                        e.preventDefault(), t.send(e)
                    }
                }
            }, [s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.hasContacts && !t.messengersPage,
                    expression: "hasContacts && !messengersPage"
                }],
                staticClass: "lead-form__fields"
            }, [t.isStep2 ? t._e() : s("StepFields", {
                attrs: {
                    fields: t.fields1,
                    phoneMask: t.phoneMask,
                    hints: t.formHints
                },
                on: {
                    input: t.setContacts
                }
            }), t.isStep2 || 1 !== t.fields1.length || "email" !== t.fields1[0].key || t.isRequiredField(t.fields1[0]) ? t._e() : s("div", {
                staticClass: "lead-form__no-email"
            }, [s("b-checkbox", {
                on: {
                    input: function(e) {
                        t.$store.commit("form/showStep2")
                    }
                }
            }, [t._v(t._s(t.$t("РЈ РјРµРЅСЏ РЅРµС‚ email")))])], 1), t.isStep2 ? s("StepFields", {
                attrs: {
                    fields: t.fields2,
                    phoneMask: t.phoneMask,
                    hints: t.formHints
                },
                on: {
                    input: t.setContacts
                }
            }) : t._e()], 1), s("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.hasMessengers && t.messengersPage,
                    expression: "hasMessengers && messengersPage"
                }],
                staticClass: "lead-form__fields"
            }, [s("Messengers", {
                attrs: {
                    title: t.info.form.title3,
                    activeMessengers: t.messengers,
                    loading: t.loading
                },
                on: {
                    select: function(e) {
                        t.messengerSelected = !0
                    },
                    unselect: function(e) {
                        t.messengerSelected = !1
                    },
                    back: function(e) {
                        t.messengersPage = !1
                    },
                    submit: t.sendMessenger
                },
                model: {
                    value: t.messenger,
                    callback: function(e) {
                        t.messenger = e
                    },
                    expression: "messenger"
                }
            })], 1), t.hasMessengers && !t.messengersPage ? s("a", {
                staticClass: "lead-form__messengers-link",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(), e.stopPropagation(), t.messengersPage = !0
                    }
                }
            }, [s("div", {
                staticClass: "lead-form__messengers-icons"
            }), t._v(t._s(t.$t("РСЃРїРѕР»СЊР·РѕРІР°С‚СЊ РјРµСЃСЃРµРЅРґР¶РµСЂ")))]) : t._e(), t.hasContacts && t.messengersPage && !t.messengerSelected || t.hasContacts && t.messengersPage && 1 === t.messengers.length ? s("a", {
                staticClass: "lead-form__contacts-link",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(), e.stopPropagation(), t.messengersPage = !1
                    }
                }
            }, [t._v(t._s(t.$t("Р’РµСЂРЅСѓС‚СЊСЃСЏ Рє РІРІРѕРґСѓ РєРѕРЅС‚Р°РєС‚РѕРІ")))]) : t._e(), t.messengersPage && t.messengerSelected ? s("button", {
                staticClass: "lead-form__button button button_color_theme is-medium lead-form__button-messengers",
                class: {
                    "is-loading": t.loading
                },
                attrs: {
                    disabled: !t.messenger.value,
                    type: "button"
                },
                on: {
                    click: t.sendMessenger
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "checkbox-marked-circle-outline"
                }
            }), s("span", [t._v(t._s(t.button3 || t.$t("Р“РѕС‚РѕРІРѕ")))])], 1) : t._e(), t.messengersPage ? t._e() : s("button", {
                staticClass: "lead-form__button button button_color_theme is-medium",
                class: {
                    "is-loading": t.loading
                },
                attrs: {
                    type: "submit"
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "checkbox-marked-circle-outline"
                }
            }), t.button2 && t.isStep2 ? t._e() : s("span", [t._v(t._s(t.button || t.$t("РџРѕР»СѓС‡РёС‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹")))]), t.button2 && t.isStep2 ? s("span", [t._v(t._s(t.button2))]) : t._e()], 1), s("div", {
                staticClass: "lead-form__agreement"
            }, [s("b-checkbox", {
                model: {
                    value: t.agreement,
                    callback: function(e) {
                        t.agreement = e
                    },
                    expression: "agreement"
                }
            }, [t._v(t._s(t.$t("РЎ")) + "В "), s("a", {
                attrs: {
                    href: t.policy,
                    target: "_blank"
                }
            }, [t._v(t._s(t.$t("РїРѕР»РёС‚РёРєРѕР№ РєРѕРЅС„РёРґРµРЅС†РёР°Р»СЊРЅРѕСЃС‚Рё")))]), t._v("В " + t._s(t.$t("РѕР·РЅР°РєРѕРјР»РµРЅ")))])], 1)])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "messengers"
            }, [t.selectedMessenger ? t._e() : s("div", {
                staticClass: "messengers__main"
            }, [s("div", {
                staticClass: "messengers__title"
            }, [t._v(t._s(t.title || t.$t("РљСѓРґР° РїСЂРёСЃС‹Р»Р°С‚СЊ СЂРµР·СѓР»СЊС‚Р°С‚С‹?")))]), s("div", {
                staticClass: "messengers__list",
                class: {
                    "is-one": 1 === t.computedMessengers.length
                }
            }, t._l(t.computedMessengers, function(e) {
                return s("div", {
                    staticClass: "messengers__item",
                    class: {
                        "is-selected": e.name === t.selectedMessenger
                    },
                    on: {
                        click: function(s) {
                            t.selectMessenger(e)
                        }
                    }
                }, [s("img", {
                    staticClass: "messengers__icon",
                    class: {
                        "messengers__icon-small": t.selectedMessenger === e
                    },
                    attrs: {
                        src: t.icons[e.name]
                    }
                }), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.selectedMessenger !== e,
                        expression: "selectedMessenger !== messenger"
                    }],
                    staticClass: "messengers__name"
                }, [t._v(t._s(e.value || e.label))])])
            }))]), t.selectedMessenger ? s("div", {
                staticClass: "messengers__modal"
            }, [s("div", {
                staticClass: "messengers__modal-window"
            }, [s("div", {
                staticClass: "messengers__modal-title"
            }, [s("img", {
                staticClass: "messengers__icon-big",
                attrs: {
                    src: t.icons[t.selectedMessenger]
                }
            })]), s("div", {
                staticClass: "messengers__modal-body"
            }, [s("div", {
                staticClass: "messengers__label"
            }, [t._v(t._s(t.currentMessenger.title))]), s("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.contact,
                    expression: "contact"
                }],
                ref: "login",
                staticClass: "messengers__input column",
                attrs: {
                    placeholder: t.currentMessenger.placeholder
                },
                domProps: {
                    value: t.contact
                },
                on: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key)) return null;
                        t.$emit("submit")
                    },
                    input: function(e) {
                        e.target.composing || (t.contact = e.target.value)
                    }
                }
            })]), this.activeMessengers.length > 1 ? s("div", {
                staticClass: "messengers__modal-footer"
            }, [s("a", {
                staticClass: "messengers__link",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function(e) {
                        e.preventDefault(), t.back(e)
                    }
                }
            }, [t._v(t._s(t.$t("Р’С‹Р±СЂР°С‚СЊ РґСЂСѓРіРѕР№ РјРµСЃСЃРµРЅРґР¶РµСЂ")))])]) : t._e()])]) : t._e()])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", [s("div", {
                ref: "answers",
                staticClass: "answer-one-image"
            }, [s("div", {
                staticClass: "answer-one-image__group",
                model: {
                    value: t.val,
                    callback: function(e) {
                        t.val = e
                    },
                    expression: "val"
                }
            }, [t._l(t.answers, function(e) {
                return s("div", {
                    key: e.id,
                    ref: "answer",
                    refInFor: !0,
                    staticClass: "answer-one-image__textVariant",
                    class: {
                        "answer-variants__textVariant_selected": t.isChecked(e.title), "has-hint": !!e.hint
                    }
                }, [s("b-radio", {
                    attrs: {
                        "native-value": e.title
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, [s("Answer", {
                    attrs: {
                        answer: e,
                        checked: t.isChecked(e.title)
                    }
                })], 1)], 1)
            }), t.hasOther ? s("div", {
                staticClass: "answer-one-image__textVariant answer-one-image__other"
            }, [s("b-radio", {
                attrs: {
                    value: !!t.other,
                    "native-value": !0
                },
                on: {
                    input: t.checkOtherValue
                }
            }), s("b-field", [s("b-input", {
                attrs: {
                    placeholder: t.$t("Р”СЂСѓРіРѕРµ") + "..."
                },
                nativeOn: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key)) return null;
                        t.nextQuestion(e)
                    }
                },
                model: {
                    value: t.other,
                    callback: function(e) {
                        t.other = e
                    },
                    expression: "other"
                }
            })], 1)], 1) : t._e()], 2), s("div", {
                staticClass: "answer-one-image__image"
            }, [t.imageUrl ? s("img", {
                ref: "img",
                staticClass: "answer-image__img",
                attrs: {
                    src: t.imageUrl
                }
            }) : t._e(), t.imageUrl ? t._e() : s("div", {
                staticClass: "answer-one-image__dummy"
            }, [t._v(t._s(t.dummyText))])])])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                ref: "finalPage",
                staticClass: "final-page final-page_v2"
            }, [t.isThanksPage ? t._e() : [s("div", {
                staticClass: "final-page_v2__container"
            }, [s("div", {
                staticClass: "final-page_v2__header"
            }, [t.info.form.title2 && t.isStep2 ? t._e() : s("p", {
                staticClass: "title final-page_v2__title",
                domProps: {
                    innerHTML: t._s(t.title)
                }
            }), t.info.form.title2 && t.isStep2 ? s("p", {
                staticClass: "title final-page_v2__title",
                domProps: {
                    innerHTML: t._s(t.title2)
                }
            }) : t._e(), s("div", {
                staticClass: "final-page_v2__progress"
            }, [s("ProgressBar", {
                attrs: {
                    percent: 95,
                    finish: "finish"
                }
            })], 1), !t.info.form.text || t.info.form.text2 && t.isStep2 ? t._e() : s("div", {
                staticClass: "final-page_v2__text",
                domProps: {
                    innerHTML: t._s(t.text)
                }
            }), t.info.form.text2 && t.isStep2 ? s("div", {
                staticClass: "final-page_v2__text",
                domProps: {
                    innerHTML: t._s(t.text2)
                }
            }) : t._e(), !t.info.form.extra || t.info.form.extra2 && t.isStep2 ? t._e() : s("div", {
                staticClass: "final-page_v2__extra",
                domProps: {
                    innerHTML: t._s(t.extra)
                }
            }), t.info.form.extra2 && t.info.form.extra2 && t.isStep2 ? s("div", {
                staticClass: "final-page_v2__extra",
                domProps: {
                    innerHTML: t._s(t.extra2)
                }
            }) : t._e()]), s("div", [s("div", {
                staticClass: "final-page_v2__content",
                class: {
                    "is-empty": !t.fixedDiscount && !t.bonuses.length
                }
            }, [s("div", {
                staticClass: "final-page_v2__bonuses"
            }, [s("div", {
                staticClass: "final-page_v2__bonuses-sidebar"
            }, [t.bonuses.length ? [s("div", {
                staticClass: "final-page_v2__bonuses-title"
            }, [t._v(t._s(t.$t("Р’Р°С€Рё Р±РѕРЅСѓСЃС‹")))]), t.fixedDiscount ? s("FinalDiscount", {
                staticClass: "final-page_v2__discount",
                attrs: {
                    discount: t.fixedDiscount,
                    currency: t.discountCurrencySymbol
                }
            }) : t._e(), s("Bonuses", {
                attrs: {
                    height: 60,
                    direction: "row-mobile"
                }
            })] : t._e(), s("div", {
                staticClass: "final-page_v2__share"
            }, [s("ShareIcon")], 1)], 2)]), s("div", {
                staticClass: "final-page_v2__form"
            }, [s("LeadForm")], 1)])])])], t.isThanksPage ? s("ThankPage", {
                attrs: {
                    thanksText: t.thanksText,
                    bonuses: t.bonuses,
                    discount: t.fixedDiscount,
                    currency: t.discountCurrencySymbol
                }
            }) : t._e()], 2)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement;
            return (t._self._c || e)("div", {
                staticClass: "Arrows Arrows--simple",
                class: {
                    "is-down": t.down
                }
            }, [t._m(0, !1, !1), t._m(1, !1, !1)])
        },
        n = [function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "Arrows-parts"
            }, [s("div", {
                staticClass: "Arrow Arrow--left"
            }), s("div", {
                staticClass: "Arrow Arrow--right"
            })])
        }, function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "Arrows-parts"
            }, [s("div", {
                staticClass: "Arrow Arrow--left"
            }), s("div", {
                staticClass: "Arrow Arrow--right"
            })])
        }],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "answer-select"
            }, [s("b-field", [s("b-select", {
                attrs: {
                    placeholder: t.question.options.placeholder,
                    size: "is-large",
                    multiple: "many" === t.question.select
                },
                model: {
                    value: t.val,
                    callback: function(e) {
                        t.val = e
                    },
                    expression: "val"
                }
            }, t._l(t.question.answers, function(e) {
                return s("option", {
                    key: e.id,
                    domProps: {
                        value: e.title
                    }
                }, [t._v(t._s(e.title))])
            }))], 1)], 1)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "question",
                class: ["question_" + t.question.type]
            }, [!t.question.type || "answers" === t.question.type && !t.hasImages || "variants" === t.question.type ? s("Variants", {
                attrs: {
                    answers: t.question.answers,
                    select: t.question.select,
                    hasOther: !!t.question.other
                }
            }) : t._e(), "one-image" === t.question.type ? s("OneImage", {
                attrs: {
                    answers: t.question.answers,
                    hasOther: !!t.question.other,
                    startText: t.question.options.startText
                }
            }) : t._e(), "images" === t.question.type || "answers" === t.question.type && t.hasImages ? s("Images", {
                attrs: {
                    answers: t.question.answers,
                    select: t.question.select,
                    type: t.question.options.imageType
                }
            }) : t._e(), "input" === t.question.type ? s("InputAnswer", {
                attrs: {
                    options: t.question.options
                }
            }) : t._e(), "select" === t.question.type ? s("SelectAnswer", {
                attrs: {
                    question: t.question
                }
            }) : t._e(), "date" === t.question.type ? s("DateAnswer", {
                attrs: {
                    question: t.question
                }
            }) : t._e(), "slider" === t.question.type ? s("SliderAnswer", {
                attrs: {
                    question: t.question
                }
            }) : t._e()], 1)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "quiz-buttons"
            }, [s("ProgressBar", {
                attrs: {
                    percent: Math.round(t.passedPercent),
                    mobile: "mobile"
                }
            }), s("button", {
                staticClass: "button is-pulled-left is-link quiz-buttons__button quiz-buttons__button_prev",
                attrs: {
                    disabled: 0 === t.activeQuestion
                },
                on: {
                    click: function(e) {
                        t.$emit("previous")
                    }
                }
            }, [s("div", {
                staticClass: "quiz-buttons__arrow"
            }, [s("Arrow", {
                attrs: {
                    back: "back"
                }
            })], 1), s("span", {
                staticClass: "quiz-buttons__button_prev_text"
            }, [t._v(t._s(t.$t("РќР°Р·Р°Рґ")))])]), t.isLast ? t._e() : s("button", {
                staticClass: "button is-pulled-right quiz-buttons__button quiz-buttons__button_next",
                class: {
                    "is-blicked": t.filled
                },
                attrs: {
                    disabled: !t.filled && !t.notRequired
                },
                on: {
                    click: function(e) {
                        t.$emit("next")
                    }
                }
            }, [s("div", {
                staticClass: "quiz-buttons__icon"
            }, [s("CheckDone")], 1), s("span", [t._v(t._s(t.$t("Р”Р°Р»РµРµ")))])]), t.isLast ? s("button", {
                staticClass: "button button_color_theme is-pulled-right quiz-buttons__button quiz-buttons__button_next",
                class: {
                    "is-blicked": t.filled
                },
                attrs: {
                    disabled: !t.filled && !t.notRequired
                },
                on: {
                    click: function(e) {
                        t.$emit("show-lead")
                    }
                }
            }, [s("span", {
                staticClass: "is-hidden-mobile"
            }, [t._v(t._s(t.$t("РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі")))]), s("span", {
                staticClass: "is-hidden-tablet"
            }, [s("b-icon", {
                attrs: {
                    icon: "checkbox-marked-circle-outline"
                }
            }), s("span", [t._v(t._s(t.$t("Р”Р°Р»РµРµ")))])], 1)]) : t._e()], 1)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("svg", {
                staticStyle: {
                    "enable-background": "new 0 0 512.171 512.171"
                },
                attrs: {
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 512.171 512.171",
                    "xml:space": "preserve"
                }
            }, [s("g", [s("g", [s("path", {
                attrs: {
                    d: "M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971\n\t\t\tc-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627\n\t\t\tl212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504\n\t\t\tC479.793,292.501,480.71,287.915,479.046,283.925z"
                }
            })])])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "answer",
                class: {
                    answer_checked: t.checked
                }
            }, [s("div", {
                staticClass: "answer__title"
            }, [t._v(t._s(t.answer.title) + "В "), t.answer.hint ? s("Hint", {
                staticClass: "answer__hint",
                attrs: {
                    answer: t.answer
                }
            }) : t._e()], 1)])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("svg", {
                class: {
                    "is-back": t.back
                },
                staticStyle: {
                    "enable-background": "new 0 0 31.49 31.49"
                },
                attrs: {
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 31.49 31.49",
                    "xml:space": "preserve"
                }
            }, [s("path", {
                attrs: {
                    d: "M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
                }
            })])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                ref: "finalPage",
                staticClass: "final-page"
            }, [t.isThanksPage ? t._e() : s("div", {
                staticClass: "final-page__contacts"
            }, [s("div", {
                staticClass: "final-page__header"
            }, [s("b-icon", {
                staticClass: "final-page__icon",
                attrs: {
                    icon: "check-circle-outline"
                }
            }), t.info.form.title2 && t.isStep2 ? t._e() : s("p", {
                staticClass: "title final-page__title",
                domProps: {
                    innerHTML: t._s(t.title || t.$t("РћС‚Р»РёС‡РЅРѕ. РџРѕСЃР»РµРґРЅРёР№ С€Р°Рі!"))
                }
            }), t.info.form.title2 && t.isStep2 ? s("p", {
                staticClass: "title final-page__title",
                domProps: {
                    innerHTML: t._s(t.title2)
                }
            }) : t._e()], 1), s("div", [s("div", {
                staticClass: "columns"
            }, [t.twoColumns ? s("div", {
                staticClass: "column",
                class: {
                    "is-7": t.twoColumns
                }
            }, [!t.info.form.text || t.info.form.text2 && t.isStep2 ? t._e() : s("div", {
                staticClass: "final-page__text content old",
                domProps: {
                    innerHTML: t._s(t.text)
                }
            }), t.info.form.text2 && t.isStep2 ? s("div", {
                staticClass: "final-page__text content",
                domProps: {
                    innerHTML: t._s(t.text2)
                }
            }) : t._e(), t.fixedDiscount ? s("div", {
                staticClass: "final-page__discount"
            }, [s("span", [t._v(t._s(t.$t("РС‚РѕРіРѕРІР°СЏ СЃРєРёРґРєР°")) + ":")]), s("div", {
                staticClass: "final-page__discount-sep"
            }, [t._v("|")]), t.isIncreasingPercentDiscount ? s("div", {
                staticClass: "final-page__discount-value"
            }, [t._v(t._s(t.fixedDiscount) + " %")]) : s("div", {
                staticClass: "final-page__discount-value"
            }, [t._v(t._s(t.fixedDiscount) + " " + t._s(t.discountCurrencySymbol))])]) : t._e(), !t.info.form.extra || t.info.form.extra2 && t.isStep2 ? t._e() : s("div", {
                staticClass: "final-page__extra mb-2"
            }, [s("div", {
                staticClass: "final-page__icon-container"
            }, [s("b-icon", {
                attrs: {
                    icon: "gift"
                }
            })], 1), s("div", {
                domProps: {
                    innerHTML: t._s(t.extra)
                }
            })]), t.info.form.extra2 && t.isStep2 ? s("div", {
                staticClass: "final-page__extra mb-2"
            }, [s("div", {
                staticClass: "final-page__icon-container"
            }, [s("b-icon", {
                attrs: {
                    icon: "gift"
                }
            })], 1), s("div", {
                domProps: {
                    innerHTML: t._s(t.extra2)
                }
            })]) : t._e()]) : t._e(), s("div", {
                staticClass: "column is-5",
                class: {
                    "is-offset-3": !t.twoColumns, "is-6": !t.twoColumns
                }
            }, [s("LeadForm")], 1)])])]), t.isThanksPage ? s("article", {
                staticClass: "final-page__thank"
            }, [s("b-icon", {
                staticClass: "final-page__icon",
                attrs: {
                    icon: "checkbox-multiple-marked-circle"
                }
            }), s("p", {
                staticClass: "title final-page__thank-title"
            }, [t._v(t._s(t.$t("РЎРїР°СЃРёР±Рѕ")) + "!")]), s("p", {
                staticClass: "subtitle final-page__thank-subtitle",
                domProps: {
                    innerHTML: t._s(t.thanksText)
                }
            })], 1) : t._e()])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("svg", {
                staticStyle: {
                    "enable-background": "new 0 0 512 512"
                },
                attrs: {
                    version: "1.1",
                    id: "Layer_1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 512 512",
                    "xml:space": "preserve"
                }
            }, [s("g", [s("path", {
                attrs: {
                    d: "M468.907,214.604c-11.423,0-20.682,9.26-20.682,20.682v20.831c-0.031,54.338-21.221,105.412-59.666,143.812c-38.417,38.372-89.467,59.5-143.761,59.5c-0.04,0-0.08,0-0.12,0C132.506,459.365,41.3,368.056,41.364,255.883c0.031-54.337,21.221-105.411,59.667-143.813c38.417-38.372,89.468-59.5,143.761-59.5c0.04,0,0.08,0,0.12,0c28.672,0.016,56.49,5.942,82.68,17.611c10.436,4.65,22.659-0.041,27.309-10.474c4.648-10.433-0.04-22.659-10.474-27.309c-31.516-14.043-64.989-21.173-99.492-21.192c-0.052,0-0.092,0-0.144,0c-65.329,0-126.767,25.428-172.993,71.6C25.536,129.014,0.038,190.473,0,255.861c-0.037,65.386,25.389,126.874,71.599,173.136c46.21,46.262,107.668,71.76,173.055,71.798c0.051,0,0.092,0,0.144,0c65.329,0,126.767-25.427,172.993-71.6c46.262-46.209,71.76-107.668,71.798-173.066v-20.842C489.589,223.864,480.33,214.604,468.907,214.604z"
                }
            })]), s("g", [s("path", {
                attrs: {
                    d: "M505.942,39.803c-8.077-8.076-21.172-8.076-29.249,0L244.794,271.701l-52.609-52.609c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.077-8.077,21.172,0,29.249l67.234,67.234c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.586-2.019,14.625-6.058L505.942,69.052C514.019,60.975,514.019,47.88,505.942,39.803z"
                }
            })])])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "assistant",
                class: {
                    "has-text": t.text, "no-assistant": !t.hasAssistant, "has-hint": !!t.hint
                }
            }, [t.hasAssistant ? s("div", {
                staticClass: "assistant__person"
            }, [s("div", {
                staticClass: "assistant__avatar"
            }, [t.imageUrl ? s("img", {
                attrs: {
                    src: t.imageUrl
                }
            }) : t._e(), t.imageUrl ? t._e() : s("img", {
                attrs: {
                    src: t.avatar
                }
            }), s("div", {
                staticClass: "assistant__avatar-badge"
            })]), s("div", {
                staticClass: "assistant__name"
            }, [s("p", {
                staticClass: "assistant__title"
            }, [t._v(t._s(t.assistant.name))]), t.assistant.title ? s("p", {
                staticClass: "assistant__subtitle"
            }, [s("span", [t._v(t._s(t.assistant.title))])]) : t._e()])]) : t._e(), t.hint && t.hint.title ? s("div", {
                staticClass: "assistant__text-title"
            }, [t._v(t._s(t.hint.title))]) : t._e(), s("transition", {
                attrs: {
                    name: t.hint ? "animation-hint" : "animation-comment",
                    mode: "out-in",
                    appear: "appear"
                }
            }, [t.text || t.hint ? s("div", {
                key: t.textHtml,
                staticClass: "assistant__block"
            }, [t.hasAssistant ? s("div", {
                staticClass: "assistant__text-arrow"
            }) : t._e(), s("div", {
                staticClass: "assistant__text",
                domProps: {
                    innerHTML: t._s(t.textHtml)
                }
            })]) : t._e()])], 1)
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "assistant-mobile",
                class: {
                    "has-text": t.text, "no-assistant": !t.hasAssistant, "has-hint": !!t.hint
                }
            }, [t.text ? s("div", {
                staticClass: "assistant-mobile__block",
                class: {
                    "is-expand": t.expand
                },
                on: {
                    click: t.toggleText
                }
            }, [t.hasAssistant ? s("div", {
                staticClass: "assistant-mobile__person"
            }, [s("div", {
                staticClass: "assistant-mobile__avatar"
            }, [t.imageUrl ? s("img", {
                attrs: {
                    src: t.imageUrl
                }
            }) : t._e(), t.imageUrl ? t._e() : s("img", {
                attrs: {
                    src: t.avatar
                }
            })])]) : t._e(), s("div", {
                ref: "textContainer",
                staticClass: "assistant-mobile__text-container",
                class: {
                    "is-expand": t.expand
                }
            }, [s("div", {
                ref: "text",
                staticClass: "assistant-mobile__text"
            }, [t.hint ? t._e() : s("div", {
                staticClass: "assistant-mobile__name"
            }, [s("p", {
                staticClass: "assistant-mobile__title"
            }, [t._v(t._s(t.getFirstName(t.assistant.name)))]), t.assistant.title ? s("p", {
                staticClass: "assistant-mobile__subtitle"
            }, [s("span", {
                staticClass: "assistant-mobile__status"
            }), s("span", [t._v(t._s(t.assistant.title))])]) : t._e(), t.hasMore ? s("ArrowShow", {
                staticClass: "assistant-mobile__arrow",
                class: {
                    "is-expand": t.expand
                }
            }) : t._e()], 1), t.hint ? s("div", {
                staticClass: "assistant-mobile__header"
            }, [t._v(t._s(t.hint.title)), s("b-icon", {
                staticClass: "assistant-mobile__arrow",
                attrs: {
                    icon: "close"
                }
            })], 1) : t._e(), s("transition", {
                attrs: {
                    name: "slide-fade",
                    mode: "out-in"
                }
            }, [s("div", {
                key: t.activeQuestion,
                ref: "assistantText",
                staticClass: "assistant-mobile__text-html",
                class: {
                    "is-expand": t.expand, "is-elipsis": t.hasMore && !t.expand
                },
                domProps: {
                    innerHTML: t._s(t.textHtml)
                }
            })])], 1)])]) : t._e()])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 13.56 13.56"
                }
            }, [s("path", {
                staticClass: "cls-1",
                attrs: {
                    id: "checked_3_",
                    d: "M6.78 0a6.78 6.78 0 1 0 6.78 6.78A6.76 6.76 0 0 0 6.78 0zm3.914 4.653L5.763 9.769a.28.28 0 0 1-.216.092.24.24 0 0 1-.216-.092l-2.4-2.589-.062-.062a.3.3 0 0 1 0-.431l.431-.431a.3.3 0 0 1 .431 0l.031.031 1.693 1.818a.149.149 0 0 0 .216 0L9.8 3.821h.031a.3.3 0 0 1 .431 0l.431.431a.263.263 0 0 1 0 .4z",
                    "data-name": "checked (3)"
                }
            })])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                ref: "answers",
                staticClass: "answer-images"
            }, [s("div", {
                staticClass: "answer-images__group"
            }, [s("swiper", {
                attrs: {
                    options: t.swiperOption
                }
            }, [t._l(t.answers, function(e) {
                return s("swiper-slide", {
                    key: e.id,
                    ref: "answer",
                    refInFor: !0
                }, [s("div", {
                    staticClass: "answer-images__answerContainer field"
                }, ["many" === t.select ? s("b-checkbox", {
                    attrs: {
                        "native-value": e.title
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, [s("AnswerImage", {
                    attrs: {
                        answer: e,
                        checked: t.isChecked(e.title),
                        type: t.type
                    }
                })], 1) : t._e(), "one" === t.select ? s("b-radio", {
                    attrs: {
                        nativeValue: e.title
                    },
                    model: {
                        value: t.val,
                        callback: function(e) {
                            t.val = e
                        },
                        expression: "val"
                    }
                }, [s("AnswerImage", {
                    attrs: {
                        answer: e,
                        checked: t.isChecked(e.title),
                        type: t.type
                    }
                })], 1) : t._e()], 1)])
            }), s("div", {
                staticClass: "swiper-button-prev",
                attrs: {
                    slot: "button-prev"
                },
                slot: "button-prev"
            }, [s("b-icon", {
                attrs: {
                    icon: "chevron-left"
                }
            })], 1), s("div", {
                staticClass: "swiper-button-next",
                attrs: {
                    slot: "button-next"
                },
                slot: "button-next"
            }, [s("b-icon", {
                attrs: {
                    icon: "chevron-right"
                }
            })], 1), s("div", {
                staticClass: "swiper-scrollbar",
                attrs: {
                    slot: "scrollbar"
                },
                slot: "scrollbar"
            })], 2)], 1)])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "sidebar-mobile",
                class: {
                    "is-expanded": t.expandedDiscount || t.expandedBonuses
                }
            }, [t.discount ? s("div", {
                staticClass: "sidebar-mobile__discount",
                class: t.isExpandedDiscount,
                on: {
                    click: function(e) {
                        t.expandedDiscount = !0
                    }
                }
            }, [s("div", {
                staticClass: "sidebar-mobile__discount-close",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.expandedDiscount = !1
                    }
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "close-circle"
                }
            })], 1), s("Discount", {
                staticClass: "sidebar-mobile__discount-component",
                attrs: {
                    unexpanded: !t.expandedDiscount,
                    countQuestions: t.countQuestions
                }
            })], 1) : t._e(), t.bonuses.length ? s("div", {
                staticClass: "sidebar-mobile__bonuses",
                class: t.isExpandedBonuses
            }, [s("div", {
                staticClass: "sidebar-mobile__bonuses-close",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.expandedBonuses = !1
                    }
                }
            }, [s("b-icon", {
                attrs: {
                    icon: "close-circle"
                }
            })], 1), s("div", {
                staticClass: "sidebar-mobile__bonuses-block",
                on: {
                    click: function(e) {
                        t.expandedBonuses = !0
                    }
                }
            }, [s("div", {
                staticClass: "sidebar-mobile__bonuses-title",
                class: t.isExpandedBonuses
            }, [s("b-icon", {
                staticClass: "sidebar-mobile__bonuses-icon",
                class: t.isExpandedBonuses,
                attrs: {
                    icon: "gift",
                    "custom-size": "mdi-18px"
                }
            }), s("div", {
                staticClass: "sidebar-mobile__bonuses-text"
            }, [t._v(t._s(t.$t("Р’Р°С€Рё Р±РѕРЅСѓСЃС‹")) + ":")])], 1), t.expandedBonuses ? s("div", {
                staticClass: "sidebar-mobile__bonuses-list",
                class: t.isExpandedBonuses
            }, [s("Bonuses", {
                attrs: {
                    direction: "column",
                    height: 63
                }
            })], 1) : t._e()])]) : t._e()])
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement;
            t._self._c;
            return t._m(0, !1, !1)
        },
        n = [function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "welcome"
            }, [s("div", {
                staticClass: "hero is-fullheight"
            }, [s("div", {
                staticClass: "hero-body"
            }, [s("div", {
                staticClass: "columns"
            }, [s("div", {
                staticClass: "welcome__info column is-6"
            }, [s("div", [s("h1", {
                staticClass: "title"
            }, [t._v("Marquiz - РєРѕРЅСЃС‚СЂСѓРєС‚РѕСЂ РјР°СЂРєРµС‚РёРЅРіРѕРІС‹С… РєРІРёР·РѕРІ")]), s("h2", {
                staticClass: "subtitle"
            }, [t._v("РџРѕР»СѓС‡Р°Р№С‚Рµ РІ СЂР°Р·С‹ Р±РѕР»СЊС€Рµ Р·Р°СЏРІРѕРє")]), s("div", {
                staticClass: "welcome__text"
            }, [s("p", [t._v("РљРІРёР· - СЌС‚Рѕ РІРёРґР¶РµС‚ РѕРїСЂРѕСЃР°, РєРѕС‚РѕСЂС‹Р№ Р·Р°РґР°С‘С‚ РІРѕРїСЂРѕСЃС‹ РїРѕСЃРµС‚РёС‚РµР»СЋ, Р° РІ РєРѕРЅС†Рµ РїСЂРµРґР»Р°РіР°РµС‚ РѕСЃС‚Р°РІРёС‚СЊ РєРѕРЅС‚Р°РєС‚С‹.")]), s("p", [t._v("Р—Р°РґР°РІР°СЏ РЅСѓР¶РЅС‹Рµ РІРѕРїСЂРѕСЃС‹, РѕРЅ РїРѕРјРѕРіР°РµС‚ РѕРїСЂРµРґРµР»РёС‚СЊСЃСЏ СЃ РІС‹Р±РѕСЂРѕРј С‡РµР»РѕРІРµРєСѓ. РџРѕСЌС‚РѕРјСѓ РєРІРёР· СЂР°Р±РѕС‚Р°РµС‚ РЅР° Р±РѕР»РµРµ С…РѕР»РѕРґРЅСѓСЋ Р°СѓРґРёС‚РѕСЂРёСЋ, Р·Р° СЃС‡С‘С‚ С‡РµРіРѕ РІС‹ РїРѕР»СѓС‡Р°РµС‚Рµ РІ СЂР°Р·С‹ Р±РѕР»СЊС€Рµ Р·Р°СЏРІРѕРє")])]), s("div", {
                staticClass: "welcome__buttons"
            }, [s("a", {
                staticClass: "button is-primary",
                attrs: {
                    href: "https://panel.marquiz.ru/signup",
                    target: "_blank"
                }
            }, [t._v("РЎРѕР·РґР°С‚СЊ РєРІРёР·")]), s("a", {
                staticClass: "button",
                attrs: {
                    href: "https://www.marquiz.ru/#section-steps",
                    target: "_blank"
                }
            }, [t._v("РџРѕРґСЂРѕР±РЅРµРµ")])])])]), s("div", {
                staticClass: "welcome__image column"
            }, [s("img", {
                attrs: {
                    src: "/static/perspective.png"
                }
            })])])])])])
        }],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, function(t, e, s) {
    "use strict";
    var i = function() {
            var t = this,
                e = t.$createElement,
                s = t._self._c || e;
            return s("div", {
                staticClass: "step-fields"
            }, t._l(t.fields, function(e) {
                return s("b-field", {
                    key: e.key,
                    attrs: {
                        label: t.hints[e.key]
                    }
                }, ["email" === e.key ? s("b-input", {
                    ref: "fields",
                    refInFor: !0,
                    attrs: {
                        placeholder: t.$t("mail@mail.ru"),
                        type: "email",
                        size: "is-large",
                        required: t.isRequiredField(e),
                        icon: "email",
                        id: e.key
                    },
                    model: {
                        value: t.email,
                        callback: function(e) {
                            t.email = "string" == typeof e ? e.trim() : e
                        },
                        expression: "email"
                    }
                }) : t._e(), "name" === e.key ? s("b-input", {
                    ref: "fields",
                    refInFor: !0,
                    attrs: {
                        placeholder: t.$t("РРјСЏ"),
                        type: "text",
                        size: "is-large",
                        required: t.isRequiredField(e),
                        icon: "account",
                        id: e.key
                    },
                    model: {
                        value: t.name,
                        callback: function(e) {
                            t.name = "string" == typeof e ? e.trim() : e
                        },
                        expression: "name"
                    }
                }) : t._e(), t.phoneMask || "phone" !== e.key ? t._e() : s("b-input", {
                    ref: "fields",
                    refInFor: !0,
                    attrs: {
                        placeholder: t.$t("+7 (900) 000-00-00"),
                        type: "tel",
                        size: "is-large",
                        required: t.isRequiredField(e),
                        icon: "phone",
                        id: e.key
                    },
                    model: {
                        value: t.phone,
                        callback: function(e) {
                            t.phone = "string" == typeof e ? e.trim() : e
                        },
                        expression: "phone"
                    }
                }), t.phoneMask && "phone" === e.key ? s("BMaskedInput", {
                    ref: "fields",
                    refInFor: !0,
                    attrs: {
                        placeholder: t.maskPlaceholder,
                        type: "tel",
                        size: "is-large",
                        required: t.isRequiredField(e),
                        icon: "phone",
                        id: e.key,
                        mask: t.phoneMask,
                        value: t.maskedPhone
                    },
                    on: {
                        input: function(e) {
                            t.maskedPhone = arguments[0], t.phone = arguments[1]
                        }
                    }
                }) : t._e()], 1)
            }))
        },
        n = [],
        a = {
            render: i,
            staticRenderFns: n
        };
    e.a = a
}, , , , , , , function(t, e) {}], [173]);
