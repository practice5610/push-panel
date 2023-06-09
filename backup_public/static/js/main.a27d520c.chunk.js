(this["webpackJsonpbase-react"] = this["webpackJsonpbase-react"] || []).push([
  [0],
  {
    476: function (e, t, n) {},
    663: function (e, t) {},
    699: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(1),
        r = n.n(c),
        a = n(31),
        s = n.n(a),
        o = (n(476), n(794)),
        i = n(793),
        l = (n(477), "https://push.gotiking.com/api"),
        u = n(17),
        d = n.n(u),
        j = n(32),
        b = n(16),
        h = n(295);
      function p(e) {
        var t = {};
        if (
          ((t.id = localStorage.getItem("id")),
          (t.key = localStorage.getItem("key")),
          t.id && t.key)
        ) {
          var n = new Headers();
          for (var c in t) n.append(c, t[c]);
          return e || n.append("Content-Type", "application/json"), n;
        }
      }
      var f = n(5);
      function O() {
        var e = Object(c.useState)(0),
          t = Object(b.a)(e, 2),
          n = t[0],
          r = t[1],
          a = Object(c.useState)(0),
          s = Object(b.a)(a, 2),
          o = s[0],
          i = s[1],
          u = Object(c.useState)(0),
          O = Object(b.a)(u, 2),
          x = O[0],
          m = O[1],
          v = Object(c.useState)(0),
          g = Object(b.a)(v, 2),
          y = g[0],
          k = g[1],
          w = Object(c.useState)(0),
          S = Object(b.a)(w, 2),
          C = S[0],
          T = S[1],
          I = Object(c.useState)([]),
          P = Object(b.a)(I, 2),
          E = P[0],
          N = P[1],
          F = Object(c.useState)([]),
          R = Object(b.a)(F, 2),
          _ = R[0],
          A = R[1],
          U = [];
        _.forEach(function (e) {
          var t = new Date(e.createdAt);
          U.push([t.toDateString(), e.tokens, "Tokens"]);
        });
        var L = [];
        return (
          E.forEach(function (e) {
            L.push([e.tokens, e.sitename]);
          }),
          Object(c.useEffect)(
            Object(j.a)(
              d.a.mark(function e() {
                var t, n, c;
                return d.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch("".concat(l, "/admin/counttokenswithin/1"), {
                            method: "GET",
                            headers: p(),
                          })
                        );
                      case 2:
                        return (t = e.sent), (e.next = 5), t.json();
                      case 5:
                        return (
                          (n = e.sent),
                          r(n.tokens),
                          (c = n.tokens),
                          (e.next = 10),
                          fetch("".concat(l, "/admin/counttokenswithin/2"), {
                            method: "GET",
                            headers: p(),
                          })
                        );
                      case 10:
                        return (t = e.sent), (e.next = 13), t.json();
                      case 13:
                        return (
                          (n = e.sent),
                          i(n.tokens - c),
                          (e.next = 17),
                          fetch("".concat(l, "/admin/counttokenswithin/7"), {
                            method: "GET",
                            headers: p(),
                          })
                        );
                      case 17:
                        return (t = e.sent), (e.next = 20), t.json();
                      case 20:
                        return (
                          (n = e.sent),
                          m(n.tokens),
                          (e.next = 24),
                          fetch("".concat(l, "/admin/counttokenswithin/30"), {
                            method: "GET",
                            headers: p(),
                          })
                        );
                      case 24:
                        return (t = e.sent), (e.next = 27), t.json();
                      case 27:
                        return (
                          (n = e.sent),
                          k(n.tokens),
                          (e.next = 31),
                          fetch("".concat(l, "/admin/counttokenswithin/all"), {
                            method: "GET",
                            headers: p(),
                          })
                        );
                      case 31:
                        return (t = e.sent), (e.next = 34), t.json();
                      case 34:
                        return (
                          (n = e.sent),
                          T(n.tokens),
                          (e.next = 38),
                          fetch(
                            "".concat(
                              l,
                              "/admin/sites?perPage=5&page=1&sortBy=tokens&sortingOrder=DSC"
                            ),
                            { headers: p() }
                          )
                        );
                      case 38:
                        return (t = e.sent), (e.next = 41), t.json();
                      case 41:
                        return (
                          (n = e.sent),
                          N(n.data),
                          (e.next = 45),
                          fetch("".concat(l, "/admin/tokenswithin/10"), {
                            headers: p(),
                          })
                        );
                      case 45:
                        return (t = e.sent), (e.next = 48), t.json();
                      case 48:
                        (n = e.sent), console.log(n), A(n);
                      case 51:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            []
          ),
          Object(f.jsxs)("div", {
            className: "container py-5",
            children: [
              Object(f.jsxs)("div", {
                class: "row",
                children: [
                  Object(f.jsxs)("div", {
                    class:
                      "col-md-8 py-3 border-n mx-1 my-2 text-white bg-primary",
                    children: [
                      Object(f.jsxs)("div", {
                        class: "row py-2",
                        children: [
                          Object(f.jsx)("div", {
                            class: "col-md-11 text_col1",
                            children: Object(f.jsx)("h5", {
                              children: "Estimated Tokens",
                            }),
                          }),
                          Object(f.jsx)("div", {
                            class: "col-md-1 text_col2",
                            children: Object(f.jsx)("svg", {
                              width: "1.5em",
                              height: "2em",
                              viewBox: "0 0 16 16",
                              class: "bi bi-three-dots-vertical",
                              fill: "currentColor",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: Object(f.jsx)("path", {
                                "fill-rule": "evenodd",
                                d: "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z",
                              }),
                            }),
                          }),
                        ],
                      }),
                      Object(f.jsxs)("div", {
                        class: "row py-2",
                        children: [
                          Object(f.jsxs)("div", {
                            class: "col-md-3 box_col",
                            children: [
                              Object(f.jsx)("p", { children: "Today so far" }),
                              Object(f.jsxs)("h3", { children: ["TK ", n] }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            class: "col-md-3 box_col",
                            children: [
                              Object(f.jsx)("p", { children: "Yesterday" }),
                              Object(f.jsxs)("h3", { children: ["TK ", o] }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            class: "col-md-3 box_col",
                            children: [
                              Object(f.jsx)("p", { children: "Last 7 days" }),
                              Object(f.jsxs)("h3", { children: ["TK ", x] }),
                            ],
                          }),
                          Object(f.jsxs)("div", {
                            class: "col-md-3 box_col",
                            children: [
                              Object(f.jsx)("p", { children: "This month" }),
                              Object(f.jsxs)("h3", { children: ["TK ", y] }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(f.jsxs)("div", {
                    class:
                      "col-md-3 py-3 border-n mx-1 my-2 text-white bg-primary",
                    children: [
                      Object(f.jsxs)("div", {
                        class: "row py-2",
                        children: [
                          Object(f.jsx)("div", {
                            class: "col-md-10 text_col1",
                            children: Object(f.jsx)("h5", {
                              children: "Tokens",
                            }),
                          }),
                          Object(f.jsx)("div", {
                            class: "col-md-1 text_col2",
                            children: Object(f.jsx)("svg", {
                              width: "1.5em",
                              height: "2em",
                              viewBox: "0 0 16 16",
                              class: "bi bi-three-dots-vertical",
                              fill: "currentColor",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: Object(f.jsx)("path", {
                                "fill-rule": "evenodd",
                                d: "M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z",
                              }),
                            }),
                          }),
                        ],
                      }),
                      Object(f.jsx)("div", {
                        class: "row py-2",
                        children: Object(f.jsxs)("div", {
                          class: "col-md-12",
                          children: [
                            Object(f.jsx)("p", { children: "Total Tokens" }),
                            Object(f.jsxs)("h3", { children: ["TK ", C] }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(f.jsx)("div", {
                className: "row",
                children: Object(f.jsx)("div", {
                  className: "card",
                  style: { display: "block", margin: "10px auto" },
                  children: Object(f.jsxs)("div", {
                    class: "card-body",
                    children: [
                      Object(f.jsx)("h5", {
                        class: "card-title",
                        children: "Per Day Stats",
                      }),
                      Object(f.jsx)(h.a, {
                        config: {
                          x: "Day",
                          charts: [
                            {
                              type: "line",
                              y: "Tokens",
                              color: "axisName",
                              colorDomain: ["", "", ""],
                              fill: "#000",
                            },
                          ],
                          maxLength: 7,
                          legend: !0,
                        },
                        data: U,
                        metadata: {
                          names: ["Day", "Tokens", "axisName"],
                          types: ["linear", "linear", "linear"],
                        },
                        onClick: function (e) {},
                      }),
                    ],
                  }),
                }),
              }),
              Object(f.jsx)("div", {
                className: "row",
                children: Object(f.jsx)("div", {
                  className: "card",
                  style: { display: "block", margin: "10px auto" },
                  children: Object(f.jsxs)("div", {
                    class: "card-body",
                    children: [
                      Object(f.jsx)("h5", {
                        class: "card-title",
                        children: "Top 5 Websites Stats",
                      }),
                      Object(f.jsx)(h.a, {
                        config: {
                          charts: [
                            {
                              type: "arc",
                              x: "tokens",
                              color: "sitename",
                              mode: "pie",
                            },
                          ],
                          legend: !0,
                        },
                        data: L,
                        metadata: {
                          names: ["tokens", "sitename"],
                          types: ["linear", "linear"],
                        },
                        onClick: function (e) {},
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      var x = n(36),
        m = n(769),
        v = n(777),
        g = n(795),
        y = n(797),
        k = n(788),
        w = n(789);
      function S(e) {
        var t = function (e) {
          return Object(f.jsx)(
            m.a,
            Object(x.a)(
              Object(x.a)({}, e),
              {},
              { children: Object(f.jsx)(v.a, { source: "q", alwaysOn: !0 }) }
            )
          );
        };
        return Object(f.jsx)(
          g.a,
          Object(x.a)(
            Object(x.a)({}, e),
            {},
            {
              filters: Object(f.jsx)(t, {}),
              children: Object(f.jsxs)(y.a, {
                children: [
                  Object(f.jsx)(k.a, { source: "icon" }),
                  Object(f.jsx)(w.a, { source: "title" }),
                  Object(f.jsx)(w.a, { source: "body" }),
                  Object(f.jsx)(w.a, { source: "url" }),
                  Object(f.jsx)(w.a, { source: "createdAt" }),
                ],
              }),
            }
          )
        );
      }
      var C = n(30),
        T = n(707),
        I = n(782),
        P = n(790);
      function E(e) {
        var t = Object(c.useState)(""),
          n = Object(b.a)(t, 2),
          r = n[0],
          a = n[1],
          s = Object(c.useState)(1),
          o = Object(b.a)(s, 2),
          i = o[0],
          u = o[1];
        Object(c.useEffect)(
          Object(j.a)(
            d.a.mark(function e() {
              var t, n, c;
              return d.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        fetch("".concat(l, "/admin/sites"), { headers: p() })
                      );
                    case 2:
                      return (t = e.sent), (e.next = 5), t.json();
                    case 5:
                      (n = e.sent),
                        (c = 0),
                        console.log(n),
                        n.data.forEach(function (e) {
                          c += e.clusters;
                        }),
                        console.log(c),
                        u(c);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          ),
          []
        );
        var h = Object(I.a)(),
          O = function (e) {
            return Object(f.jsx)(
              m.a,
              Object(x.a)(
                Object(x.a)({}, e),
                {},
                { children: Object(f.jsx)(v.a, { source: "q", alwaysOn: !0 }) }
              )
            );
          },
          S = function (e) {
            var t = e.record;
            function n() {
              return (n = Object(j.a)(
                d.a.mark(function e(t, n) {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch(
                              "".concat(l, "/admin/templates/").concat(t[0]),
                              {
                                method: "PATCH",
                                headers: p(),
                                body: JSON.stringify({ autosend: n }),
                              }
                            )
                          );
                        case 2:
                          h();
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            return Object(f.jsx)(P.a, {
              color: "secondary",
              checked: 1 == t.autosend,
              inputProps: { "aria-label": "primary checkbox" },
              onChange: function (e) {
                return (function (e, t) {
                  return n.apply(this, arguments);
                })([t._id], e.target.checked);
              },
            });
          },
          E = function (e) {
            var t = e.record;
            return Object(f.jsx)(T.a, {
              variant: "contained",
              color: "secondary",
              onClick: Object(j.a)(
                d.a.mark(function e() {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("".concat(l, "/admin/sendnotification"), {
                              method: "POST",
                              headers: p(),
                              body: JSON.stringify({
                                title: t.title,
                                body: t.body,
                                url: t.url,
                                imgurIconUrl: t.icon,
                                imgurImageUrl: t.image,
                                clusters: i,
                                skipSites: t.skipSites,
                              }),
                            })
                          );
                        case 2:
                          e.sent, a("/Reports");
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              children: "Send",
            });
          };
        return "" !== r
          ? Object(f.jsx)(C.a, { to: r })
          : Object(f.jsx)(
              g.a,
              Object(x.a)(
                Object(x.a)({}, e),
                {},
                {
                  filters: Object(f.jsx)(O, {}),
                  children: Object(f.jsxs)(y.a, {
                    children: [
                      Object(f.jsx)(k.a, { source: "icon" }),
                      Object(f.jsx)(w.a, { source: "title" }),
                      Object(f.jsx)(w.a, { source: "body" }),
                      Object(f.jsx)(w.a, { source: "url" }),
                      Object(f.jsx)(E, {}),
                      Object(f.jsx)(S, {}),
                    ],
                  }),
                }
              )
            );
      }
      var N = n(438),
        F = n.n(N),
        R = n(442),
        _ = n.n(R),
        A = n(444),
        U = n.n(A),
        L = n(443),
        D = n.n(L),
        q = n(441),
        B = n.n(q),
        H = n(439),
        G = n.n(H),
        z = n(440),
        J = n.n(z),
        M = n(171),
        K = n(113);
      function W() {
        return (W = Object(j.a)(
          d.a.mark(function e(t, n, c) {
            var r, a, s, o, i, l;
            return d.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    for (s in (console.log(c),
                    (r = {}),
                    "id" !== c.sort.field &&
                      ((r.sortBy = c.sort.field),
                      (r.sortingOrder = c.sort.order)),
                    c.filter.q && (r.q = c.filter.q),
                    (r = Object(x.a)(Object(x.a)({}, r), c.pagination)),
                    (a = ""),
                    r))
                      a +=
                        encodeURIComponent(s) +
                        "=" +
                        encodeURIComponent(r[s]) +
                        "&";
                    return (
                      (o = "".concat(t, "/admin/notifications?").concat(a)),
                      (e.next = 10),
                      fetch(o, { method: "GET", headers: p() })
                    );
                  case 10:
                    return (i = e.sent), (e.next = 13), i.json();
                  case 13:
                    return (
                      (l = e.sent).err && console.log(l),
                      console.log(l),
                      (l.data = l.data.map(function (e) {
                        var t = Object(x.a)({}, e);
                        return (
                          (t.id = e._id),
                          (t.messageDetails = "Title: "
                            .concat(e.title, " \n \n    Body: ")
                            .concat(e.body)),
                          0 === t.clicked
                            ? (t.clicked = "".concat(t.clicked, " (0%)"))
                            : (t.clicked = ""
                                .concat(t.clicked, " (")
                                .concat(
                                  ((e.clicked / e.impressions) * 100).toFixed(
                                    2
                                  ),
                                  "%)"
                                )),
                          t
                        );
                      })),
                      e.abrupt("return", l)
                    );
                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Y = function (e, t, n) {
        return W.apply(this, arguments);
      };
      function Q() {
        return (Q = Object(j.a)(
          d.a.mark(function e(t, n, c) {
            var r, a, s, o, i, l;
            return d.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    for (s in ((r = {}),
                    "id" !== c.sort.field &&
                      ((r.sortBy = c.sort.field),
                      (r.sortingOrder = c.sort.order)),
                    c.filter.q && (r.q = c.filter.q),
                    (r = Object(x.a)(Object(x.a)({}, r), c.pagination)),
                    (a = ""),
                    r))
                      a +=
                        encodeURIComponent(s) +
                        "=" +
                        encodeURIComponent(r[s]) +
                        "&";
                    return (
                      (o = "".concat(t, "/admin/sites?").concat(a)),
                      (e.next = 9),
                      fetch(o, { method: "GET", headers: p() })
                    );
                  case 9:
                    return (i = e.sent), (e.next = 12), i.json();
                  case 12:
                    return (
                      (l = e.sent).err && console.log(l),
                      console.log(l),
                      (l.data = l.data.map(function (e) {
                        var t = Object(x.a)({}, e);
                        return (t.id = e._id), t;
                      })),
                      e.abrupt("return", l)
                    );
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var V = function (e, t, n) {
        return Q.apply(this, arguments);
      };
      function X() {
        return (X = Object(j.a)(
          d.a.mark(function e(t, n, c) {
            var r, a, s, o, i, l;
            return d.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    for (s in (console.log(c),
                    (r = {}),
                    "id" !== c.sort.field &&
                      ((r.sortBy = c.sort.field),
                      (r.sortingOrder = c.sort.order)),
                    c.filter.q && (r.q = c.filter.q),
                    (r = Object(x.a)(Object(x.a)({}, r), c.pagination)),
                    (a = ""),
                    r))
                      a +=
                        encodeURIComponent(s) +
                        "=" +
                        encodeURIComponent(r[s]) +
                        "&";
                    return (
                      (o = "".concat(t, "/admin/templates?").concat(a)),
                      (e.next = 10),
                      fetch(o, { method: "GET", headers: p() })
                    );
                  case 10:
                    return (i = e.sent), (e.next = 13), i.json();
                  case 13:
                    return (
                      (l = e.sent).err && console.log(l),
                      console.log(l),
                      (l.data = l.data.map(function (e) {
                        var t = Object(x.a)({}, e);
                        return (t.id = e._id), t;
                      })),
                      e.abrupt("return", l)
                    );
                  case 18:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Z = function (e, t, n) {
        return X.apply(this, arguments);
      };
      function $() {
        return ($ = Object(j.a)(
          d.a.mark(function e(t, n) {
            var c, r, a, s, o, i, l, u;
            return d.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    for (i in (console.log("function gets called", n),
                    (a = n.data),
                    "".concat(t, "/admin/templates"),
                    console.log(a),
                    (s = new FormData()),
                    (o = {
                      title: a.title,
                      body: a.body,
                      url: a.url,
                      icon:
                        null === a ||
                        void 0 === a ||
                        null === (c = a.icon) ||
                        void 0 === c
                          ? void 0
                          : c.rawFile,
                      image:
                        null === a ||
                        void 0 === a ||
                        null === (r = a.image) ||
                        void 0 === r
                          ? void 0
                          : r.rawFile,
                      skipSites: a.skipSites,
                    })))
                      s.append(i, o[i]);
                    return (
                      (e.next = 9),
                      fetch(t + "/admin/templates", {
                        headers: p("multipart/form-data"),
                        method: "POST",
                        body: s,
                      })
                    );
                  case 9:
                    return (l = e.sent), (e.next = 12), l.json();
                  case 12:
                    return (
                      (u = e.sent),
                      console.log(u),
                      (a.id = u._id),
                      e.abrupt("return", { data: a })
                    );
                  case 16:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var ee = function (e, t) {
        return $.apply(this, arguments);
      };
      function te() {
        return (te = Object(j.a)(
          d.a.mark(function e(t, n) {
            var c;
            return d.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      fetch("".concat(t, "/admin/templates/").concat(n.id), {
                        method: "DELETE",
                        headers: p(),
                      })
                    );
                  case 2:
                    return (c = e.sent), (e.next = 5), c.json();
                  case 5:
                    return e.abrupt("return", { data: [] });
                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var ne = function (e, t) {
          return te.apply(this, arguments);
        },
        ce = (function () {
          function e(t) {
            Object(M.a)(this, e), (this.API_URL = t);
          }
          return (
            Object(K.a)(e, [
              {
                key: "getList",
                value: function (e, t) {
                  try {
                    if ("Reports" === e) return Y(this.API_URL, e, t);
                    if ("Templates" === e) return Z(this.API_URL, e, t);
                    if ("Sites" === e) return V(this.API_URL, e, t);
                  } catch (n) {
                    console.log(n);
                  }
                },
              },
              {
                key: "getOne",
                value: (function () {
                  var e = Object(j.a)(
                    d.a.mark(function e(t, n) {
                      return d.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getMany",
                value: (function () {
                  var e = Object(j.a)(
                    d.a.mark(function e() {
                      return d.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              { key: "getManyReference", value: function () {} },
              {
                key: "create",
                value: function (e, t) {
                  return ee(this.API_URL, t);
                },
              },
              {
                key: "update",
                value: (function () {
                  var e = Object(j.a)(
                    d.a.mark(function e(t, n) {
                      return d.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              { key: "updateMany", value: function () {} },
              {
                key: "delete",
                value: function (e, t) {
                  return ne(this.API_URL, t);
                },
              },
              {
                key: "deleteMany",
                value: (function () {
                  var e = Object(j.a)(
                    d.a.mark(function e(t, n) {
                      var c = this;
                      return d.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  n.ids.forEach(
                                    (function () {
                                      var e = Object(j.a)(
                                        d.a.mark(function e(t) {
                                          return d.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return (
                                                    (e.next = 2),
                                                    ne(c.API_URL, { id: t })
                                                  );
                                                case 2:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  )
                                );
                              case 3:
                                return e.abrupt("return", { data: [] });
                              case 6:
                                (e.prev = 6),
                                  (e.t0 = e.catch(0)),
                                  console.log(e.t0);
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 6]]
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })();
      function re() {
        return (re = Object(j.a)(
          d.a.mark(function e(t, n) {
            var c, r, a, s, o;
            return d.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (c = n.username),
                      (r = n.password),
                      (a = new Request(t + "/auth/login", {
                        method: "POST",
                        body: JSON.stringify({ username: c, password: r }),
                        headers: new Headers({
                          "Content-Type": "application/json",
                        }),
                      })),
                      (e.next = 4),
                      fetch(a)
                    );
                  case 4:
                    if (!((s = e.sent).status < 200 || s.status >= 300)) {
                      e.next = 7;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      Promise.reject(Error(s.statusText))
                    );
                  case 7:
                    return (e.next = 9), s.json();
                  case 9:
                    if (
                      ((o = e.sent),
                      console.log("the server responded with:", o),
                      !o.err)
                    ) {
                      e.next = 13;
                      break;
                    }
                    return e.abrupt("return", Promise.reject());
                  case 13:
                    return (
                      localStorage.setItem("id", o.id),
                      localStorage.setItem("key", o.key),
                      localStorage.setItem("privillage", "admin"),
                      e.abrupt("return", Promise.resolve())
                    );
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var ae = function (e, t) {
          return re.apply(this, arguments);
        },
        se = (function () {
          function e(t) {
            Object(M.a)(this, e), (this.API_URL = t);
          }
          return (
            Object(K.a)(e, [
              {
                key: "login",
                value: function (e) {
                  return ae(this.API_URL, e);
                },
              },
              {
                key: "checkError",
                value: function (e) {
                  var t = e.status;
                  return 401 === t || 403 === t
                    ? (localStorage.removeItem("id"),
                      localStorage.removeItem("key"),
                      Promise.reject())
                    : Promise.resolve();
                },
              },
              {
                key: "checkAuth",
                value: function () {
                  return localStorage.getItem("id") &&
                    localStorage.getItem("key")
                    ? Promise.resolve()
                    : Promise.reject();
                },
              },
              {
                key: "logout",
                value: function () {
                  return localStorage.clear(), Promise.resolve();
                },
              },
              { key: "getIdentity", value: function () {} },
              {
                key: "getPermissions",
                value: (function () {
                  var e = Object(j.a)(
                    d.a.mark(function e() {
                      return d.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                "admin" !== localStorage.getItem("privillage")
                              ) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", Promise.resolve());
                            case 2:
                              return e.abrupt("return", Promise.reject());
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        oe = se;
      function ie(e) {
        var t = function (e) {
          return Object(f.jsx)(
            m.a,
            Object(x.a)(
              Object(x.a)({}, e),
              {},
              { children: Object(f.jsx)(v.a, { source: "q", alwaysOn: !0 }) }
            )
          );
        };
        return Object(f.jsx)(
          g.a,
          Object(x.a)(
            Object(x.a)({}, e),
            {},
            {
              filters: Object(f.jsx)(t, {}),
              children: Object(f.jsxs)(y.a, {
                children: [
                  Object(f.jsx)(w.a, { source: "sitename" }),
                  Object(f.jsx)(w.a, { source: "clusters" }),
                  Object(f.jsx)(w.a, { source: "tokens" }),
                ],
              }),
            }
          )
        );
      }
      var le = n(63),
        ue = n(805);
      function de() {
        var e = Object(c.useState)(""),
          t = Object(b.a)(e, 2),
          n = t[0],
          r = t[1],
          a = Object(c.useState)(""),
          s = Object(b.a)(a, 2),
          o = s[0],
          i = s[1],
          u = Object(c.useState)(""),
          h = Object(b.a)(u, 2),
          O = h[0],
          x = h[1],
          m = Object(c.useState)(""),
          v = Object(b.a)(m, 2),
          g = v[0],
          y = v[1],
          k = Object(c.useState)(""),
          w = Object(b.a)(k, 2),
          S = w[0],
          T = w[1],
          I = Object(c.useState)(1),
          P = Object(b.a)(I, 2),
          E = P[0],
          N = P[1],
          F = Object(c.useState)([]),
          R = Object(b.a)(F, 2),
          _ = R[0],
          A = R[1],
          U = Object(c.useState)(1),
          L = Object(b.a)(U, 2),
          D = L[0],
          q = L[1],
          B = Object(c.useState)(new Array(_.length).fill(!1)),
          H = Object(b.a)(B, 2),
          G = H[0],
          z = H[1],
          J = Object(c.useState)(!1),
          M = Object(b.a)(J, 2),
          K = M[0],
          W = M[1],
          Y = Object(c.useState)(!1),
          Q = Object(b.a)(Y, 2),
          V = Q[0],
          X = Q[1],
          Z = Object(c.useState)(!1),
          $ = Object(b.a)(Z, 2),
          ee = $[0],
          te = $[1],
          ne = Object(c.useState)(""),
          ce = Object(b.a)(ne, 2),
          re = ce[0],
          ae = ce[1],
          se = Object(c.useState)("localhost"),
          oe = Object(b.a)(se, 2),
          ie = oe[0],
          de = oe[1];
        return (
          Object(c.useEffect)(
            Object(j.a)(
              d.a.mark(function e() {
                var t, n, c;
                return d.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch("".concat(l, "/admin/sites"), { headers: p() })
                        );
                      case 2:
                        return (t = e.sent), (e.next = 5), t.json();
                      case 5:
                        (n = e.sent),
                          (c = 0),
                          console.log(n),
                          n.data.forEach(function (e) {
                            c += e.clusters;
                          }),
                          q(c),
                          N(c),
                          A(n.data),
                          z(new Array(n.data.length).fill(!1));
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            []
          ),
          "reports" === re
            ? Object(f.jsx)(C.a, { to: "/Reports" })
            : "loading" === re
            ? Object(f.jsx)("div", {
                className: "center",
                children: Object(f.jsx)(ue.a, { size: 300 }),
              })
            : Object(f.jsx)("div", {
                className: "container",
                style: { marginTop: 20 },
                children: Object(f.jsxs)("form", {
                  onSubmit: function (e) {
                    if ((e.preventDefault(), "" != n && "" !== o && "" != O)) {
                      ae("loading");
                      var t,
                        c = new FormData(),
                        r = _.reduce(function (e, t, n) {
                          var c = t.sitename;
                          return G[n] ? [].concat(Object(le.a)(e), [c]) : e;
                        }, []),
                        a = {
                          title: n,
                          body: o,
                          url: O,
                          icon: g,
                          image: S,
                          clusters: E,
                          skipSites: r,
                        };
                      for (t in (V && (a.sitename = ie), a)) c.append(t, a[t]);
                      console.log("sending...."),
                        fetch(l + "/admin/sendnotification", {
                          headers: p("multipart/form-data"),
                          method: "POST",
                          body: c,
                        }).then(function (e) {
                          console.log(e),
                            e.json().then(function (e) {
                              ae("reports"), console.log(e);
                            });
                        });
                    } else alert("Title, Body and Url must be provided");
                  },
                  children: [
                    Object(f.jsxs)("div", {
                      class: "form-group",
                      children: [
                        Object(f.jsx)("label", {
                          for: "exampleInputEmail1",
                          children: "Title:",
                        }),
                        Object(f.jsx)("input", {
                          type: "text",
                          class: "form-control",
                          id: "exampleInputEmail1",
                          "aria-describedby": "emailHelp",
                          placeholder: "Enter Title",
                          value: n,
                          onChange: function (e) {
                            r(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(f.jsxs)("div", {
                      class: "form-group",
                      children: [
                        Object(f.jsx)("label", {
                          for: "exampleInputEmail1",
                          children: "Body:",
                        }),
                        Object(f.jsx)("input", {
                          type: "text",
                          class: "form-control",
                          id: "exampleInputEmail1",
                          "aria-describedby": "emailHelp",
                          placeholder: "Enter Body",
                          value: o,
                          onChange: function (e) {
                            i(e.target.value);
                          },
                        }),
                      ],
                    }),
                    Object(f.jsxs)("div", {
                      class: "form-group",
                      children: [
                        Object(f.jsx)("label", {
                          for: "exampleInputEmail1",
                          children: "Link:",
                        }),
                        Object(f.jsx)("input", {
                          type: "text",
                          class: "form-control",
                          id: "exampleInputEmail1",
                          "aria-describedby": "emailHelp",
                          placeholder: "Enter Link",
                          value: O,
                          onChange: function (e) {
                            x(e.target.value);
                          },
                        }),
                        Object(f.jsx)("small", {
                          id: "emailHelp",
                          class: "form-text text-muted",
                          children: "Note : Use http or Https",
                        }),
                      ],
                    }),
                    Object(f.jsxs)("div", {
                      class: "form-group",
                      children: [
                        Object(f.jsx)("label", {
                          for: "exampleFormControlFile1",
                          children: "Icon:",
                        }),
                        Object(f.jsx)("input", {
                          type: "file",
                          class: "form-control-file",
                          id: "exampleFormControlFile1",
                          onChange: function (e) {
                            y(e.target.files[0]);
                          },
                        }),
                      ],
                    }),
                    Object(f.jsxs)("div", {
                      class: "form-group",
                      children: [
                        Object(f.jsx)("label", {
                          for: "exampleFormControlFile1",
                          children: "Image:",
                        }),
                        Object(f.jsx)("input", {
                          type: "file",
                          class: "form-control-file",
                          id: "exampleFormControlFile1",
                          onChange: function (e) {
                            T(e.target.files[0]);
                          },
                        }),
                      ],
                    }),
                    Object(f.jsxs)("div", {
                      class: "form-group",
                      children: [
                        Object(f.jsx)("label", {
                          children: "Target Audience Filter:",
                        }),
                        Object(f.jsx)("br", {}),
                        Object(f.jsxs)("div", {
                          class: "form-check form-check-inline",
                          children: [
                            Object(f.jsx)("input", {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "inlineCheckbox1",
                              value: "option1",
                              checked: K,
                              onChange: function (e) {
                                console.log("changed"), W(e.target.checked);
                              },
                            }),
                            Object(f.jsx)("label", {
                              class: "form-check-label",
                              for: "inlineCheckbox1",
                              children: "Limit",
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          class: "form-check form-check-inline",
                          children: [
                            Object(f.jsx)("input", {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "inlineCheckbox2",
                              value: "option2",
                              checked: V,
                              onChange: function (e) {
                                if ((X(e.target.checked), e.target.checked))
                                  q(_[0].clusters), N(_[0].clusters);
                                else {
                                  var t = 0;
                                  _.forEach(function (e) {
                                    t += e.clusters;
                                  }),
                                    q(t),
                                    N(t);
                                }
                              },
                            }),
                            Object(f.jsx)("label", {
                              class: "form-check-label",
                              for: "inlineCheckbox2",
                              children: "Site",
                            }),
                          ],
                        }),
                        Object(f.jsxs)("div", {
                          class: "form-check form-check-inline",
                          children: [
                            Object(f.jsx)("input", {
                              class: "form-check-input",
                              type: "checkbox",
                              id: "inlineCheckbox1",
                              value: "option1",
                              checked: ee,
                              onChange: function (e) {
                                console.log("changed"), te(e.target.checked);
                              },
                            }),
                            Object(f.jsx)("label", {
                              class: "form-check-label",
                              for: "inlineCheckbox1",
                              children: "Ignore Sites",
                            }),
                          ],
                        }),
                      ],
                    }),
                    K &&
                      Object(f.jsxs)("div", {
                        class: "form-group",
                        children: [
                          Object(f.jsxs)("label", {
                            children: ["Clusters: ", E],
                          }),
                          Object(f.jsx)("input", {
                            type: "range",
                            name: "test",
                            min: "0",
                            max: D,
                            value: E,
                            onChange: function (e) {
                              N(e.target.value);
                            },
                            style: {
                              width: D > 9 ? "100%" : "auto",
                              display: "block",
                            },
                            class: "slider",
                            id: "myRange",
                          }),
                        ],
                      }),
                    V &&
                      Object(f.jsxs)("div", {
                        class: "form-group",
                        children: [
                          Object(f.jsx)("label", {
                            for: "exampleFormControlSelect1",
                            children: "Site select:",
                          }),
                          Object(f.jsx)("select", {
                            class: "form-control",
                            id: "exampleFormControlSelect1",
                            onChange: function (e) {
                              var t = {};
                              _.forEach(function (n) {
                                n.sitename == e.target.value && (t = n);
                              }),
                                q(t.clusters),
                                N(1),
                                de(e.target.value);
                            },
                            children: _.map(function (e) {
                              return Object(f.jsx)("option", {
                                children: e.sitename,
                              });
                            }),
                          }),
                        ],
                      }),
                    ee &&
                      Object(f.jsxs)("div", {
                        className: "form-group",
                        children: [
                          Object(f.jsx)("label", {
                            for: "exampleFormControlSelect1",
                            children: "Ignore Sites:",
                          }),
                          _.map(function (e, t) {
                            var n = e.sitename;
                            return Object(f.jsx)("div", {
                              className: "toppings-list-item",
                              children: Object(f.jsxs)("div", {
                                className: "left-section",
                                children: [
                                  Object(f.jsx)("input", {
                                    type: "checkbox",
                                    id: "custom-checkbox-".concat(t),
                                    name: n,
                                    value: n,
                                    checked: G[t],
                                    onChange: function () {
                                      return (function (e) {
                                        var t = G.map(function (t, n) {
                                          return n === e ? !t : t;
                                        });
                                        z(t);
                                      })(t);
                                    },
                                  }),
                                  Object(f.jsx)("label", {
                                    htmlFor: "custom-checkbox-".concat(t),
                                    children: n,
                                  }),
                                ],
                              }),
                            });
                          }),
                        ],
                      }),
                    Object(f.jsx)("button", {
                      type: "submit",
                      class: "btn btn-primary",
                      children: "Send",
                    }),
                  ],
                }),
              })
        );
      }
      function je() {
        return Object(f.jsx)("div", {
          children: Object(f.jsxs)("div", {
            class: "container-fluid",
            style: { paddingTop: 40 },
            children: [
              Object(f.jsx)("h2", { children: "Instructions" }),
              Object(f.jsxs)("p", {
                children: [
                  "To have the notification feature on any website, you just need to enter these three lines of code before </body> close",
                  " ",
                ],
              }),
              Object(f.jsx)("code", {
                class: "text-primary",
                children:
                  '<script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>',
              }),
              Object(f.jsx)("br", {}),
              Object(f.jsx)("code", {
                class: "text-primary",
                children:
                  '<script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-analytics.js"></script>',
              }),
              Object(f.jsx)("br", {}),
              Object(f.jsx)("code", {
                class: "text-primary",
                children:
                  '<script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js"></script>',
              }),
              Object(f.jsx)("br", {}),
              Object(f.jsx)("code", {
                class: "text-primary",
                children:
                  '<script type="text/javascript" src="/integrate.js"></script>',
              }),
              Object(f.jsx)("br", {}),
              Object(f.jsx)("br", {}),
              Object(f.jsxs)("p", {
                children: [
                  "Download this file And Place it in root folder",
                  " ",
                  Object(f.jsx)("a", {
                    href: "/firebase-messaging-sw.js",
                    children: "Download",
                  }),
                ],
              }),
              Object(f.jsx)("p", {
                children: "Put integrate.js in the root directory",
              }),
              Object(f.jsxs)("p", {
                children: [
                  "Download the integrate.js script from ",
                  Object(f.jsx)("a", {
                    href: "/integrate.js",
                    children: "here",
                  }),
                  ".",
                ],
              }),
            ],
          }),
        });
      }
      function be() {
        var e = Object(c.useState)(""),
          t = Object(b.a)(e, 2),
          n = t[0],
          r = t[1],
          a = Object(c.useState)(""),
          s = Object(b.a)(a, 2),
          o = s[0],
          i = s[1],
          u = Object(c.useState)(!1),
          h = Object(b.a)(u, 2),
          O = h[0],
          x = h[1],
          m = Object(c.useState)(""),
          v = Object(b.a)(m, 2),
          g = v[0],
          y = v[1];
        function k() {
          return (k = Object(j.a)(
            d.a.mark(function e(t) {
              var n, c, r;
              return d.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = "".concat(l, "/auth/changepassword")),
                        (e.next = 3),
                        fetch(n, {
                          headers: p(),
                          method: "PATCH",
                          body: JSON.stringify(t),
                        })
                      );
                    case 3:
                      return (
                        (c = e.sent),
                        console.log("the header is :", c.headers),
                        (e.next = 7),
                        c.json()
                      );
                    case 7:
                      if (
                        ((r = e.sent),
                        console.log("the effing resbody is", r),
                        !r.err)
                      ) {
                        e.next = 14;
                        break;
                      }
                      y(r.err), x(!1), (e.next = 16);
                      break;
                    case 14:
                      return localStorage.clear(), e.abrupt("return");
                    case 16:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )).apply(this, arguments);
        }
        return (
          Object(c.useEffect)(
            function () {
              if (O) {
                console.log("buttonis clicked");
                var e = {};
                (e.oldPassword = n),
                  (e.newPassword = o),
                  (function (e) {
                    k.apply(this, arguments);
                  })(e);
              }
            },
            [O]
          ),
          Object(f.jsxs)("form", {
            className: "container mt-50",
            style: { marginTop: "50px" },
            children: [
              "" === g ||
                Object(f.jsxs)("div", {
                  class: "alert alert-danger",
                  children: [
                    Object(f.jsx)("strong", { children: "Error!" }),
                    " ",
                    g,
                  ],
                }),
              Object(f.jsxs)("div", {
                class: "form-group",
                children: [
                  Object(f.jsx)("label", {
                    for: "usr",
                    children: "Old Password:",
                  }),
                  Object(f.jsx)("input", {
                    type: "password",
                    class: "form-control",
                    id: "usr",
                    required: !0,
                    value: n,
                    onChange: function (e) {
                      r(e.target.value);
                    },
                  }),
                ],
              }),
              Object(f.jsxs)("div", {
                class: "form-group",
                children: [
                  Object(f.jsx)("label", {
                    for: "pwd",
                    children: "New Password:",
                  }),
                  Object(f.jsx)("input", {
                    type: "password",
                    class: "form-control",
                    id: "pwd",
                    required: !0,
                    value: o,
                    onChange: function (e) {
                      i(e.target.value);
                    },
                  }),
                ],
              }),
              Object(f.jsx)("div", {
                children: Object(f.jsx)("input", {
                  type: "submit",
                  value: "Apply",
                  class: "btn btn-primary",
                  onClick: function (e) {
                    e.preventDefault(), x(!0);
                  },
                }),
              }),
            ],
          })
        );
      }
      var he = n(798),
        pe = n(796),
        fe = n(448),
        Oe = n(800),
        xe = n(799),
        me = n(792);
      function ve(e) {
        var t = Object(c.useState)([]),
          n = Object(b.a)(t, 2),
          r = n[0],
          a = n[1];
        return (
          Object(c.useEffect)(
            Object(j.a)(
              d.a.mark(function e() {
                var t, n;
                return d.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch("".concat(l, "/admin/sites"), { headers: p() })
                        );
                      case 2:
                        return (t = e.sent), (e.next = 5), t.json();
                      case 5:
                        (n = e.sent).data.forEach(function (e, t) {
                          (n.data[t].id = e.sitename),
                            (n.data[t].name = e.sitename);
                        }),
                          a(n.data);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            []
          ),
          console.log(localStorage.getItem("currentUser")),
          Object(f.jsx)(
            he.a,
            Object(x.a)(
              Object(x.a)({}, e),
              {},
              {
                children: Object(f.jsxs)(pe.a, {
                  children: [
                    Object(f.jsx)(fe.a, { source: "title" }),
                    Object(f.jsx)(fe.a, { source: "body" }),
                    Object(f.jsx)(fe.a, { source: "url" }),
                    Object(f.jsx)(Oe.a, { source: "skipSites", choices: r }),
                    Object(f.jsx)(xe.a, {
                      source: "icon",
                      label: "Select Icon",
                      accept: "image/jpeg",
                      children: Object(f.jsx)(me.a, {
                        source: "src",
                        title: "title",
                      }),
                    }),
                    Object(f.jsx)(xe.a, {
                      source: "image",
                      label: "Select Image",
                      accept: "image/jpeg",
                      children: Object(f.jsx)(me.a, {
                        source: "src",
                        title: "title",
                      }),
                    }),
                  ],
                }),
              }
            )
          )
        );
      }
      var ge = n(88),
        ye = n(778);
      var ke = function () {
          var e = Object(c.useState)(""),
            t = Object(b.a)(e, 2),
            n = t[0],
            r = t[1],
            a = Object(c.useState)(""),
            s = Object(b.a)(a, 2),
            o = s[0],
            i = s[1],
            u = Object(c.useState)(""),
            h = Object(b.a)(u, 2),
            O = h[0],
            x = h[1],
            m = Object(c.useState)(!1),
            v = Object(b.a)(m, 2),
            g = v[0],
            y = v[1];
          return (
            Object(c.useEffect)(function () {
              function e() {
                return (e = Object(j.a)(
                  d.a.mark(function e() {
                    var t, n;
                    return d.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              fetch("".concat(l, "/admin/schedule"), {
                                headers: p(),
                              })
                            );
                          case 2:
                            return (t = e.sent), (e.next = 5), t.json();
                          case 5:
                            (n = e.sent), r(n.from), i(n.to), x(n.interval);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            }, []),
            Object(f.jsxs)(f.Fragment, {
              children: [
                Object(f.jsx)(ge.b, { title: "Schedule" }),
                Object(f.jsxs)("div", {
                  className: "container",
                  style: { marginTop: 20 },
                  children: [
                    Object(f.jsx)(ye.a, {
                      id: "standard-basic",
                      variant: "filled",
                      disabled: g,
                      label: "From (in hours)",
                      value: n,
                      onChange: function (e) {
                        return r(e.target.value);
                      },
                    }),
                    Object(f.jsx)("br", {}),
                    Object(f.jsx)("br", {}),
                    Object(f.jsx)(ye.a, {
                      id: "standard-basic",
                      variant: "filled",
                      disabled: g,
                      label: "To (in hours)",
                      value: o,
                      onChange: function (e) {
                        return i(e.target.value);
                      },
                    }),
                    Object(f.jsx)("br", {}),
                    Object(f.jsx)("br", {}),
                    Object(f.jsx)(ye.a, {
                      id: "standard-basic",
                      variant: "filled",
                      disabled: g,
                      label: "Interval (in minutes)",
                      value: O,
                      onChange: function (e) {
                        return x(e.target.value);
                      },
                    }),
                    Object(f.jsx)("br", {}),
                    Object(f.jsx)("br", {}),
                    Object(f.jsx)(T.a, {
                      variant: "contained",
                      color: "secondary",
                      disabled: g,
                      onClick: Object(j.a)(
                        d.a.mark(function e() {
                          return d.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    y(!0),
                                    (e.next = 3),
                                    fetch("".concat(l, "/admin/schedule"), {
                                      method: "PATCH",
                                      headers: p(),
                                      body: JSON.stringify({
                                        from: Number(n),
                                        to: Number(o),
                                        interval: Number(O),
                                      }),
                                    })
                                  );
                                case 3:
                                  y(!1);
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      ),
                      children: "Update",
                    }),
                  ],
                }),
              ],
            })
          );
        },
        we = new ce(l);
      console.log(we.getList());
      var Se = new oe(l);
      var Ce = function () {
          return Object(f.jsxs)(o.a, {
            dataProvider: we,
            authProvider: Se,
            dashboard: O,
            children: [
              Object(f.jsx)(i.a, { name: "Sites", list: ie, icon: F.a }),
              Object(f.jsx)(i.a, { name: "Reports", list: S, icon: G.a }),
              Object(f.jsx)(i.a, {
                name: "Templates",
                list: E,
                create: ve,
                icon: J.a,
              }),
              Object(f.jsx)(i.a, {
                name: "Send Notification",
                list: de,
                icon: B.a,
              }),
              Object(f.jsx)(i.a, { name: "Schedule", list: ke, icon: _.a }),
              Object(f.jsx)(i.a, {
                name: "How To Integrate",
                list: je,
                icon: D.a,
              }),
              Object(f.jsx)(i.a, { name: "Accounts", list: be, icon: U.a }),
            ],
          });
        },
        Te = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 806))
              .then(function (t) {
                var n = t.getCLS,
                  c = t.getFID,
                  r = t.getFCP,
                  a = t.getLCP,
                  s = t.getTTFB;
                n(e), c(e), r(e), a(e), s(e);
              });
        };
      s.a.render(
        Object(f.jsx)(r.a.StrictMode, { children: Object(f.jsx)(Ce, {}) }),
        document.getElementById("root")
      ),
        Te();
    },
  },
  [[699, 1, 2]],
]);
//# sourceMappingURL=main.a27d520c.chunk.js.map
