/*FB_PKG_DELIM*/

__d(
  'CometFormattedTextFontLabel_data.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'CometFormattedTextFontLabel_data',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'TextWithEntities',
          kind: 'LinkedField',
          name: 'collection_name',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'text',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Collection',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'storiesCreateFontInjector_data.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = { kind: 'InlineDataFragment', name: 'storiesCreateFontInjector_data' };
    e.exports = a;
  },
  null,
);
__d(
  'CometFormattedTextFontGlimmer.react',
  ['BaseGlimmer.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        container: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          paddingTop: 'xzi3mdb',
          paddingEnd: 'x4uap5',
          paddingBottom: 'xxbrewl',
          paddingStart: 'xkhd6sd',
          $$css: !0,
        },
        imageGlimmer: {
          borderTopStartRadius: 'xqunzp0',
          borderTopEndRadius: 'xppdmm8',
          borderBottomEndRadius: 'x1xdassh',
          borderBottomStartRadius: 'xqs3da0',
          height: 'x1ycjhwn',
          width: 'x1dmp6jm',
          $$css: !0,
        },
      };
    function a(a) {
      return h.jsx('div', {
        className: 'x6s0dn4 x78zum5 xl56j7k xzi3mdb x4uap5 xxbrewl xkhd6sd',
        children: h.jsx(c('BaseGlimmer.react'), {
          index: 1,
          xstyle: i.imageGlimmer,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometComposerFormattedTextFontMenuLoadingState.react',
  [
    'CometFormattedTextFontGlimmer.react',
    'CometPopover.react',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        root: {
          borderTop: 'x19lhggo',
          borderEnd: 'x144nipd',
          borderBottom: 'x1hqtkzk',
          borderStart: 'xlg2ruo',
          borderTopColor: 'x8cjs6t',
          borderEndColor: 'x1ch86jh',
          borderBottomColor: 'x80vd3b',
          borderStartColor: 'xckqwgs',
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          borderTopWidth: 'xamhcws',
          borderEndWidth: 'xol2nv',
          borderBottomWidth: 'xlxy82',
          borderStartWidth: 'x19p7ews',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          justifyContent: 'xl56j7k',
          minWidth: 'xhs4bwn',
          paddingTop: 'x1y1aw1k',
          paddingEnd: 'x1sxyh0',
          paddingBottom: 'xwib8y2',
          paddingStart: 'xurb0ha',
          width: 'xctrb1h',
          $$css: !0,
        },
      },
      j = 6;
    function a(a) {
      a = a.xstyle;
      return h.jsx(c('CometPopover.react'), {
        children: h.jsx('div', {
          className: c('stylex')(i.root, a),
          children: Array(j)
            .fill(void 0)
            .map(function (a, b) {
              return h.jsx(c('CometFormattedTextFontGlimmer.react'), {}, b);
            }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometInspirationCustomFontLabel.react',
  ['fbt', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.name;
      a = a.selected;
      b = b != null ? b.toLowerCase() : h._('__JHASH__vtxyJRoDMWA__JHASH__');
      a = i.jsx('div', {
        className:
          'x6s0dn4 xl56j7k x1yrsyyn xsyo7zv x10b6aqq x16hj40l xn80e1m' +
          (a === !0 ? ' x1s85apg' : ' x78zum5'),
        children: b,
      });
      return i.jsx(c('TetraText.react'), { type: 'body2', children: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometFormattedTextFontLabel.react',
  [
    'CometFormattedTextFontLabel_data.graphql',
    'CometInspirationCustomFontLabel.react',
    'CometRelay',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    function a(a) {
      a = a.data;
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('CometFormattedTextFontLabel_data.graphql')),
        a,
      );
      a =
        a == null ? void 0 : (a = a.collection_name) == null ? void 0 : a.text;
      return i.jsx(c('CometInspirationCustomFontLabel.react'), { name: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreateFontMenuButton.react',
  ['ix', 'CometPressable.react', 'TetraIcon.react', 'fbicon', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = {
        button: {
          alignItems: 'x6s0dn4',
          borderTopColor: 'x8cjs6t',
          borderEndColor: 'x1ch86jh',
          borderBottomColor: 'x80vd3b',
          borderStartColor: 'xckqwgs',
          borderTopStartRadius: 'xhk9q7s',
          borderTopEndRadius: 'x1otrzb0',
          borderBottomEndRadius: 'x1i1ezom',
          borderBottomStartRadius: 'x1o6z2jb',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          borderTopWidth: 'x178xt8z',
          borderEndWidth: 'xm81vs4',
          borderBottomWidth: 'xso031l',
          borderStartWidth: 'xy80clv',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          height: 'xnnlda6',
          justifyContent: 'x1nhvcw1',
          marginTop: 'x14vqqas',
          marginBottom: 'xod5an3',
          $$css: !0,
        },
        selectedFont: { position: 'x10l6tqk', start: 'x1x4e7r2', $$css: !0 },
        textIcon: { position: 'x10l6tqk', start: 'x16q8cke', $$css: !0 },
        triangleDownIcon: { end: 'x4p3wbt', position: 'x10l6tqk', $$css: !0 },
      };
    function a(a, b) {
      var e = a.label,
        f = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['label', 'xstyle']);
      return i.jsx(
        c('CometPressable.react'),
        babelHelpers['extends']({ hideFocusOverlay: !0 }, a, {
          ref: b,
          xstyle: [j.button, f],
          children: function () {
            return i.jsxs(i.Fragment, {
              children: [
                i.jsx('div', {
                  className: 'x10l6tqk x16q8cke',
                  children: i.jsx(c('TetraIcon.react'), {
                    color: 'secondary',
                    icon: d('fbicon')._(h('486061'), 16),
                  }),
                }),
                i.jsx('div', {
                  'aria-controls': 'StoriesCreateSATPFontMenu',
                  className: 'x10l6tqk x1x4e7r2',
                  children: e,
                }),
                i.jsx('div', {
                  className: 'x4p3wbt x10l6tqk',
                  children: i.jsx(c('TetraIcon.react'), {
                    color: 'primary',
                    icon: d('fbicon')._(h('481882'), 16),
                  }),
                }),
              ],
            });
          },
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = i.forwardRef(a);
    g['default'] = b;
  },
  98,
);
__d(
  'storiesCreateFontInjector',
  ['CometRelay', 'storiesCreateFontInjector_data.graphql'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = h !== void 0 ? h : (h = b('storiesCreateFontInjector_data.graphql')),
      j = {},
      k = null;
    function a(a) {
      a = d('CometRelay').readInlineData(i, a);
      var b = a == null ? void 0 : a.font_name;
      a = a == null ? void 0 : a.font_url;
      if (b == null || a == null) return;
      if (j[b]) return;
      k ||
        ((k = document.createElement('style')),
        (k.type = 'text/css'),
        document.head && document.head.appendChild(k));
      k.appendChild(
        document.createTextNode(
          "\n    @font-face {\n      font-family: '" +
            b +
            "';\n      src: url(" +
            a +
            ');\n    }\n  ',
        ),
      );
      j[b] = a;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreateBackground.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a() {
      return h.jsx('div', {
        className: 'x15cqagf x5yr21d x10l6tqk x17qophe x13vifvy xh8yej3',
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreatePhotoPreviewFrameContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = { overlayRect: null };
    c = a.createContext(b);
    g['default'] = c;
  },
  98,
);
__d(
  'useStoriesCreateObjectAlign',
  ['StoriesCreateConstants', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useMemo,
      k = b.useRef,
      l = b.useState;
    function m(a) {
      var b, c, d;
      b = (b = a == null ? void 0 : a.width) != null ? b : 0;
      c = (c = a == null ? void 0 : a.height) != null ? c : 0;
      d = (d = a == null ? void 0 : a.left) != null ? d : 0;
      a = (a = a == null ? void 0 : a.top) != null ? a : 0;
      return { x: d + b / 2, y: a + c / 2 };
    }
    var n = 0,
      o = 0;
    function a(a, b, c, e) {
      var f = l(d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.NONE),
        g = f[0],
        p = f[1];
      f = l(d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.NONE);
      var q = f[0],
        r = f[1];
      f = l(0);
      var s = f[0],
        t = f[1];
      f = m(a);
      a = m(b);
      var u = k(q),
        v = k(g),
        w = f.x - a.x,
        x = h(
          function () {
            var a;
            Math.abs(w) <=
            ((a = c == null ? void 0 : c.alignmentZone) != null ? a : o)
              ? (p(
                  d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.HORIZONTAL,
                ),
                r(
                  d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.HORIZONTAL,
                ))
              : p(d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.NONE);
          },
          [c == null ? void 0 : c.alignmentZone, w],
        );
      i(
        function () {
          e ? x() : p(d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.NONE);
        },
        [e, x],
      );
      i(function () {
        g !== v.current &&
          (c == null ? void 0 : c.onOverlayAlign(g), (v.current = g));
      });
      return j(
        function () {
          return function (a, b, e, f) {
            switch (q) {
              case d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.NONE:
                return { alignDx: e, alignDy: f };
              case d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE
                .HORIZONTAL:
                if (q !== u.current) t(a - w), (u.current = q);
                else if (
                  Math.abs(a - s) >
                  ((b = c == null ? void 0 : c.alignmentZone) != null ? b : o)
                ) {
                  r(d('StoriesCreateConstants').OVERLAY_ALIGNMENT_TYPE.NONE);
                  u.current = d(
                    'StoriesCreateConstants',
                  ).OVERLAY_ALIGNMENT_TYPE.NONE;
                  return { alignDx: e, alignDy: f };
                }
                return { alignDx: n, alignDy: f };
              default:
                return { alignDx: e, alignDy: f };
            }
          };
        },
        [c == null ? void 0 : c.alignmentZone, q, s, w],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useStoriesCreateObjectMoveKeyboard',
  ['fbt', 'CometKeys', 'Locale', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    b = d('react');
    var i = b.useCallback,
      j = b.useMemo,
      k = 20;
    function a(a) {
      var b = a.isKeyboard,
        e = a.isMoving,
        f = a.onMove,
        g = a.scaledDx,
        l = a.scaledDy,
        m = a.setKeyboard,
        n = a.setMoving,
        o = a.updateMoveOrigin,
        p = i(
          function (a, c) {
            e || n(!0), (!e || !b) && m(!0), o(), f(null, g + a, l + c);
          },
          [b, e, f, g, l, m, n, o],
        );
      return j(
        function () {
          var a = d('Locale').isRTL(),
            b = h._('__JHASH__g2X9izB-zkI__JHASH__'),
            e = h._('__JHASH__NqTQSEjSrT___JHASH__'),
            f = function () {
              p(-k, 0);
            },
            g = function () {
              p(k, 0);
            };
          return [
            {
              command: { key: c('CometKeys').LEFT },
              description: a ? e : b,
              handler: a ? g : f,
            },
            {
              command: { key: c('CometKeys').RIGHT },
              description: a ? b : e,
              handler: a ? f : g,
            },
            {
              command: { key: c('CometKeys').UP },
              description: h._('__JHASH__T2ct9_ZRFgQ__JHASH__'),
              handler: function () {
                p(0, -k);
              },
            },
            {
              command: { key: c('CometKeys').DOWN },
              description: h._('__JHASH__2x6GVmh9xAY__JHASH__'),
              handler: function () {
                p(0, k);
              },
            },
          ];
        },
        [p],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useStoriesCreateObjectMoveMouse',
  ['react', 'useGlobalEventListener'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback;
    function a(a) {
      var b = a.isKeyboard,
        d = a.isMoving,
        e = a.onMove,
        f = a.setKeyboard,
        g = a.setMoving;
      a = h(
        function (a) {
          if (b) {
            f(!1);
            g(!1);
            return;
          }
          e(a, a.clientX, a.clientY);
        },
        [b, e, f, g],
      );
      var i = h(
        function (a) {
          d && g(!1), a.preventDefault();
        },
        [d, g],
      );
      c('useGlobalEventListener')('mousemove', d ? a : null, { capture: !0 });
      c('useGlobalEventListener')('mouseup', i, { capture: !0 });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useStoriesCreateObjectMove',
  [
    'react',
    'useStoriesCreateObjectAlign',
    'useStoriesCreateObjectMoveKeyboard',
    'useStoriesCreateObjectMoveMouse',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useMemo,
      k = b.useRef,
      l = b.useState;
    function m(a, b, c, d, e) {
      if (
        a == null ||
        b == null ||
        a.width === 0 ||
        a.height === 0 ||
        b.width === 0 ||
        b.height === 0
      )
        return null;
      c = c * b.width;
      d = d * b.height;
      return {
        maxX: (c + Math.max(b.right - a.left, 0) - e.right) / b.width,
        maxY: (d + Math.max(b.bottom - a.top, 0) - e.bottom) / b.height,
        minX: (c - Math.max(a.right - b.left, 0) + e.left) / b.width,
        minY: (d - Math.max(a.bottom - b.top, 0) + e.top) / b.height,
      };
    }
    function a(a) {
      var b = a.alignableProps,
        d = a.autoAdjust,
        e = a.buffer,
        f = a.canMoveOutsideFrame,
        g = f === void 0 ? !1 : f,
        n = a.overlayRect,
        o = a.targetRect,
        p = k({
          initialBounds: { maxX: 0, maxY: 0, minX: 0, minY: 0 },
          initialDx: 0,
          initialDy: 0,
          x: 0,
          y: 0,
        });
      f = l(0);
      var q = f[0],
        r = f[1];
      a = l(0);
      var s = a[0],
        t = a[1];
      f = l(!1);
      var u = f[0],
        v = f[1];
      a = l(!1);
      f = a[0];
      var w = a[1],
        x = c('useStoriesCreateObjectAlign')(o, n, b, u),
        y = (a = n == null ? void 0 : n.width) != null ? a : 0,
        z = (a = n == null ? void 0 : n.height) != null ? a : 0,
        A = (a = n == null ? void 0 : n.right) != null ? a : 0,
        B = (a = n == null ? void 0 : n.left) != null ? a : 0,
        C = (a = n == null ? void 0 : n.top) != null ? a : 0,
        D = (a = n == null ? void 0 : n.bottom) != null ? a : 0,
        E = q * y,
        F = s * z,
        G = j(
          function () {
            return m(o, n, q, s, e);
          },
          [e, q, s, n, o],
        );
      i(
        function () {
          if (g || u || G == null || !d) return;
          var a = G.maxX,
            b = G.maxY,
            c = G.minX,
            e = G.minY;
          r(Math.max(Math.min(q, a), c));
          t(Math.max(Math.min(s, b), e));
        },
        [d, G, g, q, s, u],
      );
      var H = h(
        function (a, b) {
          p.current = {
            initialBounds: m(o, n, q, s, e),
            initialDx: E,
            initialDy: F,
            x: (a = a) != null ? a : E,
            y: (a = b) != null ? a : F,
          };
        },
        [e, q, s, n, E, F, o],
      );
      a = h(
        function (a, c, d) {
          var e,
            f = p.current,
            h = f.initialDx,
            i = f.initialDy,
            j = f.x;
          f = f.y;
          e = (e = G) != null ? e : { maxX: 0, maxY: 0, minX: 0, minY: 0 };
          var k = e.maxX,
            l = e.maxY,
            m = e.minX;
          e = e.minY;
          var n = q,
            o = s,
            u = !0,
            v = !0;
          g && a != null && ((u = c < A && c > B), (v = d > C && d < D));
          u && (n = Math.max(Math.min((c - j + h) / y, k), m));
          v && (o = Math.max(Math.min((d - f + i) / z, l), e));
          if (b != null) {
            u = x(c, d, n, o);
            j = u.alignDx;
            h = u.alignDy;
            r(j);
            t(h);
          } else r(n), t(o);
          a != null && a.preventDefault();
        },
        [G, q, s, g, b, A, B, C, D, y, z, x],
      );
      var I = function (a) {
          if (u) return;
          v(!0);
          H(a == null ? void 0 : a.x, a == null ? void 0 : a.y);
        },
        J = h(function () {
          v(!1), w(!1);
        }, []);
      c('useStoriesCreateObjectMoveMouse')({
        isKeyboard: f,
        isMoving: u,
        onMove: a,
        setKeyboard: w,
        setMoving: v,
      });
      f = c('useStoriesCreateObjectMoveKeyboard')({
        isKeyboard: f,
        isMoving: u,
        onMove: a,
        scaledDx: E,
        scaledDy: F,
        setKeyboard: w,
        setMoving: v,
        updateMoveOrigin: H,
      });
      return {
        dx: E,
        dy: F,
        isMoving: u,
        keyCommands: f,
        onBlur: J,
        onPressDown: I,
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreateTextOverlaysRootQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '7102643213111296';
  },
  null,
);
