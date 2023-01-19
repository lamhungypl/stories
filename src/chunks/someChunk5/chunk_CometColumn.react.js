__d(
  'CometColumn.react',
  [
    'BaseView.react',
    'CometColumnContext',
    'CometColumnItem.react',
    'UserAgent',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo,
      k = {
        expanding: {
          flexBasis: 'x1l7klhg',
          flexGrow: 'x1iyjqo2',
          flexShrink: 'xs83m0k',
          minHeight: 'x2lwn1j',
          $$css: !0,
        },
        expandingIE11: { flexBasis: 'xdl72j9', $$css: !0 },
        inner: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          flexGrow: 'x1iyjqo2',
          minHeight: 'x2lwn1j',
          $$css: !0,
        },
        root: {
          boxSizing: 'x9f619',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          flexShrink: 'x2lah0s',
          maxWidth: 'x193iq5w',
          $$css: !0,
        },
      },
      l = {
        0: { paddingTop: 'xexx8yu', $$css: !0 },
        4: { paddingTop: 'x1iorvi4', $$css: !0 },
        8: { paddingTop: 'x1y1aw1k', $$css: !0 },
        12: { paddingTop: 'xz9dl7a', $$css: !0 },
        16: { paddingTop: 'xyamay9', $$css: !0 },
        20: { paddingTop: 'x1cnzs8', $$css: !0 },
      },
      m = {
        4: { paddingTop: 'x1iorvi4', paddingBottom: 'xjkvuk6', $$css: !0 },
        8: { paddingTop: 'x1y1aw1k', paddingBottom: 'xwib8y2', $$css: !0 },
        12: { paddingTop: 'xz9dl7a', paddingBottom: 'xsag5q8', $$css: !0 },
        16: { paddingTop: 'xyamay9', paddingBottom: 'x1l90r2v', $$css: !0 },
        20: { paddingTop: 'x1cnzs8', paddingBottom: 'xx6bls6', $$css: !0 },
      },
      n = {
        bottom: { justifyContent: 'x13a6bvl', $$css: !0 },
        center: { justifyContent: 'xl56j7k', $$css: !0 },
        'space-between': { justifyContent: 'x1qughib', $$css: !0 },
      },
      o = c('UserAgent').isBrowser('IE >= 11');
    function a(a, b) {
      var d = a.align,
        e = d === void 0 ? null : d;
      d = a.children;
      var f = a.expanding;
      f = f === void 0 ? !1 : f;
      var g = a.hasDividers,
        p = g === void 0 ? !1 : g;
      g = a.paddingHorizontal;
      var q = g === void 0 ? null : g;
      g = a.paddingTop;
      var r = a.paddingVertical;
      r = r === void 0 ? 0 : r;
      var s = a.spacing,
        t = s === void 0 ? null : s;
      s = a.verticalAlign;
      s = s === void 0 ? 'top' : s;
      var u = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'align',
        'children',
        'expanding',
        'hasDividers',
        'paddingHorizontal',
        'paddingTop',
        'paddingVertical',
        'spacing',
        'verticalAlign',
        'xstyle',
      ]);
      var v = i(c('CometColumnContext')),
        w = j(
          function () {
            return {
              align: e,
              hasDividers: p,
              paddingHorizontal: q,
              spacing: t,
            };
          },
          [e, p, q, t],
        );
      a = h.jsx(
        c('BaseView.react'),
        babelHelpers['extends']({}, a, {
          ref: b,
          xstyle: [
            k.root,
            f === !0 && [k.expanding, o && k.expandingIE11],
            m[r],
            g != null && l[g],
            u,
          ],
          children: h.jsx(c('BaseView.react'), {
            xstyle: [k.inner, s !== 'top' && n[s]],
            children: h.jsx(c('CometColumnContext').Provider, {
              value: w,
              children: d,
            }),
          }),
        }),
      );
      if (v != null) {
        return h.jsx(c('CometColumnItem.react'), {
          expanding: (b = f) != null ? b : void 0,
          children: a,
        });
      }
      return a;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    d = e;
    g['default'] = d;
  },
  98,
);
