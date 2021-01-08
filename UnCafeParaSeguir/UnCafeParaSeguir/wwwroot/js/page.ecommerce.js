!(function (t) {
    var e = {};
    function a(i) {
        if (e[i]) return e[i].exports;
        var r = (e[i] = { i: i, l: !1, exports: {} });
        return t[i].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
    }
    (a.m = t),
        (a.c = e),
        (a.d = function (t, e, i) {
            a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
        }),
        (a.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (a.t = function (t, e) {
            if ((1 & e && (t = a(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if ((a.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var r in t)
                    a.d(
                        i,
                        r,
                        function (e) {
                            return t[e];
                        }.bind(null, r)
                    );
            return i;
        }),
        (a.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return a.d(e, "a", e), e;
        }),
        (a.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (a.p = "/"),
        a((a.s = 375));
})({
    375: function (t, e, a) {
        t.exports = a(376);
    },
    376: function (t, e, a) {
        "use strict";
        a.r(e);
        a(377);
    },
    377: function (t, e) {
        !(function () {
            "use strict";
            function t(t, e) {
                return Math.floor(Math.random() * (e - t + 1)) + t;
            }
            !(function (e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "area",
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                i = Chart.helpers.merge(
                    {
                        title: { display: !0, fontSize: 12, fontColor: "rgba(54, 76, 102, 0.54)", position: "top", text: "SALES OVER TIME" },
                        scales: {
                            xAxes: [
                                {
                                    ticks: {
                                        padding: 4,
                                        callback: function (t) {
                                            return t;
                                        },
                                    },
                                    gridLines: { display: !1 },
                                    type: "time",
                                    time: { unit: "day", displayFormats: { day: "D/MM" }, stepSize: 2, maxTicksLimit: 7, autoSkip: !1 },
                                },
                            ],
                        },
                    },
                    i
                );
                var r = [],
                    n = moment().subtract(6, "days").format("YYYY-MM-DD"),
                    o = moment().format("YYYY-MM-DD"),
                    s = moment.range(n, o);
                s.by("days", function (e) {
                    r.push({ y: t(2, 40), x: e.toDate() });
                });
                r = { datasets: [{ label: "Total Sales", data: r }] };
                Charts.create(e, a, i, r);
            })("#totalSalesChart"),
                (function (e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "roundedBar",
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i = Chart.helpers.merge(
                        {
                            title: { display: !0, fontSize: 12, fontColor: "rgba(54, 76, 102, 0.54)", position: "top", text: "VISITORS OVER TIME" },
                            scales: {
                                xAxes: [
                                    {
                                        ticks: {
                                            padding: 4,
                                            callback: function (t) {
                                                return t;
                                            },
                                        },
                                        offset: !0,
                                        gridLines: { display: !1 },
                                        type: "time",
                                        time: { unit: "day", displayFormats: { day: "D/MM" }, stepSize: 2, maxTicksLimit: 7 },
                                    },
                                ],
                            },
                        },
                        i
                    );
                    var r = [],
                        n = moment().subtract(6, "days").format("YYYY-MM-DD"),
                        o = moment().format("YYYY-MM-DD"),
                        s = moment.range(n, o);
                    s.by("days", function (e) {
                        r.push({ y: t(10, 30), x: e.toDate() });
                    });
                    r = { datasets: [{ label: "Total Visitors", data: r, barThickness: 20 }] };
                    Charts.create(e, a, i, r);
                })("#totalVisitorsChart"),
                (function (e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "line",
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i = Chart.helpers.merge(
                        {
                            title: { display: !0, fontSize: 12, fontColor: "rgba(54, 76, 102, 0.54)", position: "top", text: "CUSTOMERS" },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoSkip: !1,
                                            autoSkipPadding: 0,
                                            padding: 4,
                                            maxTicksLimit: 4,
                                            callback: function (t) {
                                                return t;
                                            },
                                        },
                                    },
                                ],
                                xAxes: [
                                    {
                                        ticks: {
                                            padding: 4,
                                            callback: function (t) {
                                                return t;
                                            },
                                        },
                                        gridLines: { display: !1 },
                                        type: "time",
                                        time: { unit: "day", displayFormats: { day: "D/MM" }, stepSize: 2, maxTicksLimit: 7, autoSkip: !1 },
                                    },
                                ],
                            },
                        },
                        i
                    );
                    var r = [],
                        n = [],
                        o = moment().subtract(6, "days").format("YYYY-MM-DD"),
                        s = moment().format("YYYY-MM-DD"),
                        l = moment.range(o, s);
                    l.by("days", function (e) {
                        r.push({ y: t(0, 5), x: e.toDate() }), n.push({ y: t(5, 10), x: e.toDate() });
                    });
                    var d = {
                        datasets: [
                            { label: "First time", data: r },
                            { label: "Returning", data: n },
                        ],
                    };
                    Charts.create(e, a, i, d);
                })("#repeatCustomerRateChart"),
                (function (e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "line",
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i = Chart.helpers.merge(
                        {
                            title: { display: !0, fontSize: 12, fontColor: "rgba(54, 76, 102, 0.54)", position: "top", text: "ORDERS OVER TIME" },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            stepSize: 1,
                                            callback: function (t) {
                                                return t;
                                            },
                                        },
                                    },
                                ],
                                xAxes: [
                                    {
                                        ticks: {
                                            padding: 4,
                                            callback: function (t) {
                                                return t;
                                            },
                                        },
                                        gridLines: { display: !1 },
                                        type: "time",
                                        time: { unit: "day", displayFormats: { day: "D/MM" }, stepSize: 2, maxTicksLimit: 7, autoSkip: !1 },
                                    },
                                ],
                            },
                        },
                        i
                    );
                    var r = [],
                        n = moment().subtract(6, "days").format("YYYY-MM-DD"),
                        o = moment().format("YYYY-MM-DD"),
                        s = moment.range(n, o);
                    s.by("days", function (e) {
                        r.push({ y: t(0, 2), x: e.toDate() });
                    });
                    r = { datasets: [{ label: "Total Orders", data: r }] };
                    Charts.create(e, a, i, r);
                })("#totalOrdersChart"),
                (function (e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "line",
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    i = Chart.helpers.merge(
                        {
                            title: { display: !0, fontSize: 12, fontColor: "rgba(54, 76, 102, 0.54)", position: "top", text: "ORDER VALUE" },
                            scales: {
                                yAxes: [{ ticks: { stepSize: 10 } }],
                                xAxes: [
                                    {
                                        ticks: {
                                            padding: 4,
                                            callback: function (t) {
                                                return t;
                                            },
                                        },
                                        gridLines: { display: !1 },
                                        type: "time",
                                        time: { unit: "day", displayFormats: { day: "D/MM" }, stepSize: 2, maxTicksLimit: 7, autoSkip: !1 },
                                    },
                                ],
                            },
                        },
                        i
                    );
                    var r = [],
                        n = moment().subtract(6, "days").format("YYYY-MM-DD"),
                        o = moment().format("YYYY-MM-DD"),
                        s = moment.range(n, o);
                    s.by("days", function (e) {
                        r.push({ y: t(0, 50), x: e.toDate() });
                    });
                    r = { datasets: [{ label: "Order Value", data: r }] };
                    Charts.create(e, a, i, r);
                })("#averageOrderValueChart"),
                (function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "doughnut",
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = { labels: ["Desktop", "Mobile", "Tablet"], datasets: [{ data: [267, 184, 0] }] };
                    Charts.create(t, e, a, i);
                })("#visitsByDeviceChart"),
                (function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "line",
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    a = Chart.helpers.merge({ scales: { xAxes: [{ gridLines: { display: !1 }, type: "time", time: { unit: "day" } }] } }, a);
                    var i = [],
                        r = [],
                        n = moment().subtract(7, "days").format("YYYY-MM-DD"),
                        o = moment().format("YYYY-MM-DD"),
                        s = moment.range(n, o);
                    s.by("days", function (t) {
                        var e = Math.round(Math.floor(300 * Math.random()) + 10);
                        i.push({ y: e, x: t.toDate() }), r.push({ y: Math.round(0.1 * e), x: t.toDate() });
                    });
                    i = {
                        datasets: [
                            { label: "Conversion", data: r },
                            { label: "Views", data: i },
                        ],
                    };
                    Charts.create(t, e, a, i);
                })("#viewsChart");
        })();
    },
});