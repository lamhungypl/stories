__d(
  'CometLink.react',
  [
    'BaseLink.react',
    'CometDangerouslySuppressInteractiveElementsContext',
    'CometTextContext',
    'CometTextTypography',
    'isCometRouterUrl',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = {
        disabled: {
          color: 'x1dntmbh',
          ':hover_textDecoration': 'x1lku1pv',
          $$css: !0,
        },
        root: {
          color: 'x1heor9g',
          ':hover_textDecoration': 'xt0b8zv',
          $$css: !0,
        },
      },
      k = {
        blueLink: { color: 'x1fey0fg', $$css: !0 },
        disabled: { color: 'x1dntmbh', $$css: !0 },
        highlight: { color: 'x1qq9wsj', $$css: !0 },
        negative: { color: 'x1a1m0xk', $$css: !0 },
        positive: { color: 'x6u5lvz', $$css: !0 },
        primary: { color: 'xzsf02u', $$css: !0 },
        secondary: { color: 'xi81zsa', $$css: !0 },
        tertiary: { color: 'x12scifz', $$css: !0 },
        white: { color: 'x14ctfv', $$css: !0 },
      },
      l = {
        bold: { fontWeight: 'x1xlr1w8', $$css: !0 },
        medium: { fontWeight: 'xk50ysn', $$css: !0 },
        normal: { fontWeight: 'xo1l8bm', $$css: !0 },
        semibold: { fontWeight: 'x1s688f', $$css: !0 },
      },
      m = {
        block: { display: 'x1lliihq', $$css: !0 },
        'inline-block': { display: 'x1rg5ohu', $$css: !0 },
      };
    function a(a, b) {
      var d = a.color,
        e = a.disabled;
      e = e === void 0 ? !1 : e;
      var f = a.display;
      f = f === void 0 ? 'inline' : f;
      var g = a.fbclid,
        p = a.href,
        q = a.lynxMode,
        r = a.role,
        s = a.target,
        t = a.weight,
        u = a.xstyle,
        v = babelHelpers.objectWithoutPropertiesLoose(a, [
          'color',
          'disabled',
          'display',
          'fbclid',
          'href',
          'lynxMode',
          'role',
          'target',
          'weight',
          'xstyle',
        ]),
        w = i(c('CometTextContext')),
        x = i(c('CometDangerouslySuppressInteractiveElementsContext')),
        y =
          s === '_blank' ||
          (s == null && p != null && p !== '#' && !c('isCometRouterUrl')(p));
      d = (d = d) != null ? d : w != null ? n(w.type, y) : 'inherit';
      t = (t = t) != null ? t : w != null ? o(w.type, y) : 'inherit';
      w = r == null && (p == null || p === '#') ? 'button' : r;
      return x
        ? h.jsx('span', {
            className: c('stylex')([
              d !== 'inherit' && k[d],
              t !== 'inherit' && l[t],
              e && j.disabled,
              f !== 'inline' && m[f],
            ]),
            ref: b,
            children: a.children,
          })
        : h.jsx(
            c('BaseLink.react'),
            babelHelpers['extends']({}, v, {
              disabled: e,
              display: 'inline',
              fbclid: g,
              href: p,
              lynxMode: q,
              ref: b,
              role: w,
              target: y ? '_blank' : s,
              xstyle: [
                j.root,
                d !== 'inherit' && k[d],
                t !== 'inherit' && l[t],
                e && j.disabled,
                f !== 'inline' && m[f],
                u,
              ],
            }),
          );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function n(a, b) {
      switch (a) {
        case 'headline3':
        case 'headline4':
        case 'body1':
        case 'body2':
        case 'body3':
        case 'body4':
          return b ? 'blueLink' : 'primary';
        case 'meta1':
        case 'meta2':
        case 'meta3':
        case 'meta4':
          return b ? 'blueLink' : 'inherit';
        default:
          return 'inherit';
      }
    }
    function o(a, b) {
      if (!b) {
        b = p(a);
        return c('CometTextTypography')[b].fontWeight;
      }
      return 'inherit';
    }
    function p(a) {
      switch (a) {
        case 'headline3':
          return 'headlineEmphasized3';
        case 'headline4':
          return 'headlineEmphasized4';
        case 'body1':
          return 'bodyLink1';
        case 'body2':
          return 'bodyLink2';
        case 'body3':
          return 'bodyLink3';
        case 'body4':
          return 'bodyLink4';
        default:
          return a;
      }
    }
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
