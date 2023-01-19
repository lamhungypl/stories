__d(
  'TetraText.react',
  [
    'BaseHeading.react',
    'BaseTextContext',
    'CometDensityModeContext',
    'CometLineClamp.react',
    'CometTextContext',
    'CometTextLangContext',
    'CometTextTypography',
    'cr:2099',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useContext,
      j = e.useMemo;
    b =
      (e = b('cr:2099')) != null
        ? e
        : { useTranslationKeyForTextParent: function () {} };
    var k = b.useTranslationKeyForTextParent,
      l = {
        base: {
          maxWidth: 'x193iq5w',
          minWidth: 'xeuugli',
          wordBreak: 'x13faqbe',
          wordWrap: 'x1vvkbs',
          $$css: !0,
        },
        block: {
          display: 'x1lliihq',
          '::after_content': 'x1s928wv',
          '::after_display': 'xhkezso',
          '::after_height': 'x1gmr53x',
          '::before_content': 'x1cpjm7i',
          '::before_display': 'x1fgarty',
          '::before_height': 'x1943h6x',
          $$css: !0,
        },
        heading: { maxWidth: 'x193iq5w', minWidth: 'xeuugli', $$css: !0 },
        preserveNewLines: { whiteSpace: 'x1fj9vlw', $$css: !0 },
      },
      m = {
        center: { textAlign: 'x2b8uid', $$css: !0 },
        end: { textAlign: 'xp4054r', $$css: !0 },
        start: { textAlign: 'x1yc453h', $$css: !0 },
      },
      n = {
        blueLink: { color: 'x1fey0fg', $$css: !0 },
        disabled: { color: 'x1dntmbh', $$css: !0 },
        disabledButton: { color: 'x1x80s81', $$css: !0 },
        highlight: { color: 'x1qq9wsj', $$css: !0 },
        negative: { color: 'x1a1m0xk', $$css: !0 },
        placeholder: { color: 'x12scifz', $$css: !0 },
        positive: { color: 'x6u5lvz', $$css: !0 },
        primary: { color: 'xzsf02u', $$css: !0 },
        primaryButton: { color: 'xtk6v10', $$css: !0 },
        primaryDeemphasizedButton: { color: 'x1mvi0mv', $$css: !0 },
        primaryOnMedia: { color: 'x17z8epw', $$css: !0 },
        secondary: { color: 'xi81zsa', $$css: !0 },
        secondaryButton: { color: 'x1dem4cn', $$css: !0 },
        secondaryOnMedia: { color: 'xkxfvhb', $$css: !0 },
        tertiary: { color: 'x12scifz', $$css: !0 },
        white: { color: 'x14ctfv', $$css: !0 },
      },
      o = {
        12: { fontSize: 'x1pg5gke', lineHeight: 'xvq8zen', $$css: !0 },
        13: { fontSize: 'x1nxh6w3', lineHeight: 'x1sibtaa', $$css: !0 },
        14: { fontSize: 'x1f6kntn', lineHeight: 'x1ruc54x', $$css: !0 },
        15: { fontSize: 'x6prxxf', lineHeight: 'xvq8zen', $$css: !0 },
        16: { fontSize: 'x1jchvi3', lineHeight: 'x132q4wb', $$css: !0 },
        17: { fontSize: 'x1lkfr7t', lineHeight: 'x1lbecb7', $$css: !0 },
        20: { fontSize: 'x1603h9y', lineHeight: 'x1u7k74', $$css: !0 },
        24: { fontSize: 'xngnso2', lineHeight: 'x1qb5hxa', $$css: !0 },
        28: { fontSize: 'x1q74xe4', lineHeight: 'xyesn5m', $$css: !0 },
        32: { fontSize: 'x579bpy', lineHeight: 'xjkpybl', $$css: !0 },
      },
      p = {
        12: { fontSize: 'x1pg5gke', lineHeight: 'xvq8zen', $$css: !0 },
        13: { fontSize: 'x1pg5gke', lineHeight: 'x1sibtaa', $$css: !0 },
        15: { fontSize: 'x1f6kntn', lineHeight: 'xvq8zen', $$css: !0 },
        17: { fontSize: 'x1jchvi3', lineHeight: 'x1lbecb7', $$css: !0 },
        20: { fontSize: 'x1603h9y', lineHeight: 'x1u7k74', $$css: !0 },
        24: { fontSize: 'xngnso2', lineHeight: 'x1qb5hxa', $$css: !0 },
        28: { fontSize: 'x1q74xe4', lineHeight: 'xyesn5m', $$css: !0 },
        32: { fontSize: 'x579bpy', lineHeight: 'xjkpybl', $$css: !0 },
      },
      q = {
        bold: { fontWeight: 'x1xlr1w8', $$css: !0 },
        medium: { fontWeight: 'xk50ysn', $$css: !0 },
        normal: { fontWeight: 'xo1l8bm', $$css: !0 },
        semibold: { fontWeight: 'x1s688f', $$css: !0 },
      },
      r = {
        1: { '::before_marginTop': 'x1ckan80', $$css: !0 },
        2: { '::before_marginTop': 'x1s3etm8', $$css: !0 },
        3: { '::before_marginTop': 'x1tu3fi', $$css: !0 },
        4: { '::before_marginTop': 'x4zkp8e', $$css: !0 },
        5: { '::before_marginTop': 'xudqn12', $$css: !0 },
        6: { '::before_marginTop': 'xtoi2st', $$css: !0 },
        7: { '::before_marginTop': 'x14z4hjw', $$css: !0 },
        8: { '::before_marginTop': 'x1ill7wo', $$css: !0 },
        9: { '::before_marginTop': 'xhau9xz', $$css: !0 },
        10: { '::before_marginTop': 'x14qwyeo', $$css: !0 },
      },
      s = {
        1: { '::after_marginBottom': 'xo8pqpo', $$css: !0 },
        2: { '::after_marginBottom': 'xlf94lp', $$css: !0 },
        3: { '::after_marginBottom': 'x676frb', $$css: !0 },
        4: { '::after_marginBottom': 'x3x7a5m', $$css: !0 },
        5: { '::after_marginBottom': 'x41vudc', $$css: !0 },
        6: { '::after_marginBottom': 'xw06pyt', $$css: !0 },
        7: { '::after_marginBottom': 'x1g2y4wz', $$css: !0 },
        8: { '::after_marginBottom': 'x1x48ksl', $$css: !0 },
        9: { '::after_marginBottom': 'x1guzi96', $$css: !0 },
        10: { '::after_marginBottom': 'x1y9wsrc', $$css: !0 },
      },
      t = {
        1: { paddingBottom: 'x1j85h84', $$css: !0 },
        2: { paddingBottom: 'x1120s5i', $$css: !0 },
        3: { paddingBottom: 'xg8j3zb', $$css: !0 },
      },
      u = {
        disabled: 'disabledButton',
        highlight: 'primaryDeemphasizedButton',
        secondary: 'secondaryButton',
        white: 'primaryButton',
      };
    function v(a, b) {
      return b ? ((b = u[a]) != null ? b : a) : a;
    }
    function a(a, b) {
      var e = a.align;
      e = e === void 0 ? 'auto' : e;
      var f = a.children,
        g = a.color,
        u = a.dir;
      u = u === void 0 ? 'auto' : u;
      var w = a.id,
        x = a.isPrimaryHeading;
      x = x === void 0 ? !1 : x;
      var y = a.isSemanticHeading;
      y = y === void 0 ? !1 : y;
      var z = a.numberOfLines,
        A = a.preserveNewLines;
      A = A === void 0 ? !1 : A;
      var B = a.suppressHydrationWarning,
        C = a.testid;
      C = a.truncationTooltip;
      var D = a.type;
      a = i(c('CometDensityModeContext'));
      a = a[0];
      var E = i(c('CometTextLangContext')),
        F = c('CometTextTypography')[D],
        G = F.defaultColor;
      G = G === void 0 ? 'primary' : G;
      var H = F.fontFamily,
        I = F.fontSize,
        J = F.fontWeight;
      J = J === void 0 ? 'normal' : J;
      F = F.offsets;
      F = F === void 0 ? [0, 0] : F;
      var K = F.length === 3 ? F[2] : 0,
        L = v((g = g) != null ? g : G, D === 'button1' || D === 'button2');
      g = j(
        function () {
          return { color: L, type: D };
        },
        [L, D],
      );
      G = d('BaseTextContext').useBaseTextContext();
      G = (G == null ? void 0 : G.nested) === !0;
      var M = k();
      g = h.jsx(d('BaseTextContext').BaseTextContextProvider, {
        nested: !0,
        children: h.jsx(c('CometTextContext').Provider, {
          value: g,
          children: h.jsx(
            'span',
            {
              className: c('stylex')(
                l.base,
                H,
                !G && l.block,
                !G && r[F[0]],
                !G && s[z != null ? F[1] + K : F[1]],
                a ? p[I] : o[I],
                q[J],
                n[L],
                e !== 'auto' && m[e],
                A && l.preserveNewLines,
              ),
              'data-testid': void 0,
              dir: G ? void 0 : u,
              id: w,
              lang: E,
              ref: b,
              suppressHydrationWarning: B,
              children:
                z != null
                  ? h.jsx(c('CometLineClamp.react'), {
                      lines: z,
                      truncationTooltip: C,
                      xstyle: K !== 0 && t[K],
                      children: f,
                    })
                  : f,
            },
            M,
          ),
        }),
      });
      return y
        ? h.jsx(c('BaseHeading.react'), {
            isPrimaryHeading: x,
            xstyle: l.heading,
            children: g,
          })
        : g;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    e.displayName = 'TetraText';
    b = e;
    g['default'] = b;
  },
  98,
);
