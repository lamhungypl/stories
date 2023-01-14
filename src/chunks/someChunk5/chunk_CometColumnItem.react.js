__d(
  'CometColumnItem.react',
  [
    'BaseView.react',
    'CometColumnContext',
    'CometErrorBoundary.react',
    'CometPlaceholder.react',
    'UserAgent',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = {
        divider: {
          borderTopColor: 'x8cjs6t',
          borderTopStyle: 'x13fuv20',
          borderTopWidth: 'x178xt8z',
          ':first-child_display': 'xh99ass',
          $$css: !0,
        },
        dividerMargin: {
          ':first-child:empty + *_marginTop': 'xb939ph',
          $$css: !0,
        },
        expanding: {
          flexBasis: 'x1l7klhg',
          flexGrow: 'x1iyjqo2',
          flexShrink: 'xs83m0k',
          minHeight: 'x2lwn1j',
          $$css: !0,
        },
        expandingIE11: { flexBasis: 'xdl72j9', $$css: !0 },
        marginFirstChild: { ':first-child_marginTop': 'x14l7nz5', $$css: !0 },
        marginLastChild: { ':last-child_marginBottom': 'xzboxd6', $$css: !0 },
        root: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          flexShrink: 'x2lah0s',
          maxWidth: 'x193iq5w',
          $$css: !0,
        },
      },
      k = {
        center: { alignItems: 'x6s0dn4', $$css: !0 },
        end: { alignItems: 'xuk3077', $$css: !0 },
        start: { alignItems: 'x1cy8zhl', $$css: !0 },
      },
      l = {
        4: { paddingStart: 'x1e558r4', paddingEnd: 'x150jy0e', $$css: !0 },
        8: { paddingStart: 'xurb0ha', paddingEnd: 'x1sxyh0', $$css: !0 },
        12: { paddingStart: 'x1ye3gou', paddingEnd: 'xn6708d', $$css: !0 },
        16: { paddingStart: 'x1swvt13', paddingEnd: 'x1pi30zi', $$css: !0 },
        20: { paddingStart: 'x5ib6vp', paddingEnd: 'xc73u3c', $$css: !0 },
      },
      m = {
        0: { paddingTop: 'xexx8yu', $$css: !0 },
        4: { paddingTop: 'x1iorvi4', $$css: !0 },
        8: { paddingTop: 'x1y1aw1k', $$css: !0 },
        12: { paddingTop: 'xz9dl7a', $$css: !0 },
        16: { paddingTop: 'xyamay9', $$css: !0 },
        20: { paddingTop: 'x1cnzs8', $$css: !0 },
        40: { paddingTop: 'x13zrc24', $$css: !0 },
      },
      n = {
        4: { paddingTop: 'x1iorvi4', paddingBottom: 'xjkvuk6', $$css: !0 },
        8: { paddingTop: 'x1y1aw1k', paddingBottom: 'xwib8y2', $$css: !0 },
        12: { paddingTop: 'xz9dl7a', paddingBottom: 'xsag5q8', $$css: !0 },
        16: { paddingTop: 'xyamay9', paddingBottom: 'x1l90r2v', $$css: !0 },
        20: { paddingTop: 'x1cnzs8', paddingBottom: 'xx6bls6', $$css: !0 },
        40: { paddingTop: 'x13zrc24', paddingBottom: 'x1t1ogtf', $$css: !0 },
      },
      o = {
        4: { marginTop: 'xr9ek0c', marginBottom: 'xjpr12u', $$css: !0 },
        8: { marginTop: 'x1gslohp', marginBottom: 'x12nagc', $$css: !0 },
        12: { marginTop: 'x1k70j0n', marginBottom: 'xzueoph', $$css: !0 },
        16: { marginTop: 'x1xmf6yo', marginBottom: 'x1e56ztr', $$css: !0 },
        20: { marginTop: 'x1anpbxc', marginBottom: 'xyorhqc', $$css: !0 },
        24: { marginTop: 'x14vqqas', marginBottom: 'xod5an3', $$css: !0 },
        32: { marginTop: 'xw7yly9', marginBottom: 'x1yztbdb', $$css: !0 },
        40: { marginTop: 'x1sy10c2', marginBottom: 'xieb3on', $$css: !0 },
      },
      p = {
        bottom: { justifyContent: 'x13a6bvl', $$css: !0 },
        center: { justifyContent: 'xl56j7k', $$css: !0 },
        'space-between': { justifyContent: 'x1qughib', $$css: !0 },
      },
      q = {
        4: { marginStart: 'xsgj6o6', marginEnd: 'xw3qccf', $$css: !0 },
        8: { marginStart: 'x1i64zmx', marginEnd: 'x1emribx', $$css: !0 },
        12: { marginStart: 'x16n37ib', marginEnd: 'xq8finb', $$css: !0 },
        16: { marginStart: 'x1d52u69', marginEnd: 'xktsk01', $$css: !0 },
        20: { marginStart: 'xmn8rco', marginEnd: 'x1h5jrl4', $$css: !0 },
      },
      r = c('UserAgent').isBrowser('IE >= 11');
    function a(a, b) {
      var d, e, f, g;
      d = (d = i(c('CometColumnContext'))) != null ? d : {};
      var t = a.align;
      e = t === void 0 ? ((e = d.align) != null ? e : 'stretch') : t;
      t = a.children;
      var u = a.expanding;
      u = u === void 0 ? !1 : u;
      var v = a.fallback,
        w = a.paddingHorizontal;
      f = w === void 0 ? ((f = d.paddingHorizontal) != null ? f : 0) : w;
      w = a.paddingTop;
      var x = a.paddingVertical;
      x = x === void 0 ? 0 : x;
      var y = a.placeholder,
        z = a.verticalAlign;
      z = z === void 0 ? 'top' : z;
      var A = babelHelpers.objectWithoutPropertiesLoose(a, [
          'align',
          'children',
          'expanding',
          'fallback',
          'paddingHorizontal',
          'paddingTop',
          'paddingVertical',
          'placeholder',
          'verticalAlign',
        ]),
        B = c('stylex').compose(a.xstyle);
      g = h.jsxs(h.Fragment, {
        children: [
          d.hasDividers === !0 &&
            h.jsx(c('BaseView.react'), {
              role: 'separator',
              xstyle: [
                j.divider,
                q[(g = d.paddingHorizontal) != null ? g : 0],
                d.spacing != null && j.dividerMargin,
              ],
            }),
          h.jsx(
            c('BaseView.react'),
            babelHelpers['extends']({}, A, {
              ref: b,
              xstyle: [
                j.root,
                u && [j.expanding, r && j.expandingIE11],
                e !== 'stretch' && k[e],
                z !== 'top' && p[z],
                l[f],
                n[x],
                w != null && m[w],
                d.spacing != null && [
                  o[d.spacing],
                  B.marginBottom == null && j.marginLastChild,
                  B.marginTop == null && j.marginFirstChild,
                ],
                a.xstyle,
              ],
              children: h.jsx(c('CometColumnContext').Provider, {
                value: null,
                children: t,
              }),
            }),
          ),
        ],
      });
      if (v !== void 0) {
        a.fallback;
        var C = babelHelpers.objectWithoutPropertiesLoose(a, ['fallback']);
        v === null
          ? (g = h.jsx(c('CometErrorBoundary.react'), { children: g }))
          : (g = h.jsx(c('CometErrorBoundary.react'), {
              fallback: function (a, c) {
                return h.jsx(
                  s,
                  babelHelpers['extends']({}, C, {
                    ref: b,
                    children: typeof v === 'function' ? v(a, c) : v,
                  }),
                );
              },
              children: g,
            }));
      }
      if (y !== void 0) {
        a.placeholder;
        A = babelHelpers.objectWithoutPropertiesLoose(a, ['placeholder']);
        g = h.jsx(c('CometPlaceholder.react'), {
          fallback:
            y != null
              ? h.jsx(
                  s,
                  babelHelpers['extends']({}, A, { ref: b, children: y }),
                )
              : null,
          children: g,
        });
      }
      return g;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    var s = h.forwardRef(a);
    b = s;
    g['default'] = b;
  },
  98,
);
