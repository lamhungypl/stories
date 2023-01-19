__d(
  'TetraTextPairing.react',
  [
    'CometHeadlineWithAddOn.react',
    'TetraText.react',
    'getTetraTextHierarchyStyle',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        item: { marginBottom: 'xu06os2', marginTop: 'x1ok221b', $$css: !0 },
        root: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          marginBottom: 'xz62fqu',
          marginTop: 'x16ldp7u',
          $$css: !0,
        },
      },
      j = {
        1: { marginBottom: 'x11tup63', marginTop: 'x16z1lm9', $$css: !0 },
        2: { marginBottom: 'x4cne27', marginTop: 'xifccgj', $$css: !0 },
        entityHeader1: {
          marginBottom: 'x1wsgfga',
          marginTop: 'x9otpla',
          $$css: !0,
        },
        entityHeader2: {
          marginBottom: 'x1wsgfga',
          marginTop: 'x9otpla',
          $$css: !0,
        },
      },
      k = {
        1: { marginBottom: 'xwoyzhm', marginTop: 'x1rhet7l', $$css: !0 },
        2: { marginBottom: 'xzueoph', marginTop: 'x1k70j0n', $$css: !0 },
        entityHeader1: {
          marginBottom: 'x1e56ztr',
          marginTop: 'x1xmf6yo',
          $$css: !0,
        },
        entityHeader2: {
          marginBottom: 'x1e56ztr',
          marginTop: 'x1xmf6yo',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.body,
        d = a.bodyColor;
      d = d === void 0 ? 'primary' : d;
      var e = a.bodyLineLimit,
        f = a.bodyRef,
        g = a.bodyTruncationTooltip,
        l = a.dir;
      l = l === void 0 ? 'auto' : l;
      var m = a.headline,
        n = a.headlineAddOn,
        o = a.headlineColor;
      o = o === void 0 ? 'primary' : o;
      var p = a.headlineLineLimit,
        q = a.headlineRef,
        r = a.headlineTruncationTooltip,
        s = a.isPrimaryHeading,
        t = a.isSemanticHeading,
        u = a.level,
        v = a.meta,
        w = a.metaColor;
      w = w === void 0 ? 'secondary' : w;
      var x = a.metaLineLimit,
        y = a.metaLocation;
      y = y === void 0 ? 'below' : y;
      var z = a.metaRef,
        A = a.metaTruncationTooltip,
        B = a.reduceEmphasis;
      B = B === void 0 ? !1 : B;
      var C = a.testid;
      C = a.textAlign;
      a = C === void 0 ? 'start' : C;
      C = c('getTetraTextHierarchyStyle')(u, B);
      B = C.bodyType;
      var D = C.headlineType;
      C = C.metaType;
      var E = c('stylex')(i.item, k[u]);
      n =
        m != null &&
        h.jsx('div', {
          className: E,
          children:
            n != null
              ? h.jsx(c('CometHeadlineWithAddOn.react'), {
                  addOn: n,
                  color: o,
                  headlineRef: q,
                  isPrimaryHeading: s,
                  isSemanticHeading: t,
                  numberOfLines: p,
                  truncationTooltip: r,
                  type: D,
                  children: m,
                })
              : h.jsx(c('TetraText.react'), {
                  align: a,
                  color: o,
                  dir: l,
                  isPrimaryHeading: s,
                  isSemanticHeading: t,
                  numberOfLines: p,
                  ref: q,
                  truncationTooltip: r,
                  type: D,
                  children: m,
                }),
        });
      o =
        v != null &&
        h.jsx('div', {
          className: E,
          children: h.jsx(c('TetraText.react'), {
            align: a,
            color: w,
            dir: l,
            isSemanticHeading: !1,
            numberOfLines: x,
            ref: z,
            truncationTooltip: A,
            type: C,
            children: v,
          }),
        });
      return h.jsxs('div', {
        className: c('stylex')(i.root, j[u]),
        'data-testid': void 0,
        children: [
          y === 'above' && o,
          n,
          b != null &&
            h.jsx('div', {
              className: E,
              children: h.jsx(c('TetraText.react'), {
                align: a,
                color: d,
                dir: l,
                isSemanticHeading: !1,
                numberOfLines: e,
                ref: f,
                truncationTooltip: g,
                type: B,
                children: b,
              }),
            }),
          y === 'below' && o,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
