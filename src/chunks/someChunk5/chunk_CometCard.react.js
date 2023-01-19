__d(
  'CometCard.react',
  ['BaseView.react', 'isBlueprintStylesEnabled', 'react', 'testID'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        'base-wash': { backgroundColor: 'x1vtvx1t', $$css: !0 },
        'card-flat': { backgroundColor: 'xlhe6ec', $$css: !0 },
        'dark-wash': { backgroundColor: 'xatbrnm', $$css: !0 },
        error: { backgroundColor: 'x1ciooss', $$css: !0 },
        highlight: { backgroundColor: 'xwnonoy', $$css: !0 },
        'light-wash': { backgroundColor: 'x443n21', $$css: !0 },
        transparent: { backgroundColor: 'xjbqb8w', $$css: !0 },
        white: { backgroundColor: 'x2bj2ny', $$css: !0 },
      },
      j = {
        borderHighlightAnimation: {
          animationDuration: 'x1q3qbx4',
          animationFillMode: 'x1u6ievf',
          animationName: 'x1raiwjw',
          animationTimingFunction: 'x11wifem',
          $$css: !0,
        },
        borderHighlightOverlay: {
          borderTop: 'x1nqgybo',
          borderEnd: 'x12eorn',
          borderBottom: 'xsclsaf',
          borderStart: 'x768y1r',
          borderTopStartRadius: 'x1a2cdl4',
          borderTopEndRadius: 'xnhgr82',
          borderBottomEndRadius: 'x1qt0ttw',
          borderBottomStartRadius: 'xgk8upj',
          bottom: 'x1t1qrwb',
          end: 'x15jmxi0',
          pointerEvents: 'x47corl',
          position: 'x10l6tqk',
          start: 'x1uvgrom',
          top: 'x1qiirwl',
          zIndex: 'x1vjfegm',
          $$css: !0,
        },
        borderInset: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          bottom: 'x1ey2m1c',
          boxShadow: 'xlg9a9y',
          boxSizing: 'x9f619',
          end: 'xds687c',
          pointerEvents: 'x47corl',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          $$css: !0,
        },
        borderOnWash: {
          borderTopColor: 'x8cjs6t',
          borderEndColor: 'x1ch86jh',
          borderBottomColor: 'x80vd3b',
          borderStartColor: 'xckqwgs',
          $$css: !0,
        },
        borderOnWhite: {
          borderTopColor: 'x8cjs6t',
          borderEndColor: 'x1ch86jh',
          borderBottomColor: 'x80vd3b',
          borderStartColor: 'xckqwgs',
          $$css: !0,
        },
        borderSolid: {
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          borderTopWidth: 'x178xt8z',
          borderEndWidth: 'xm81vs4',
          borderBottomWidth: 'xso031l',
          borderStartWidth: 'xy80clv',
          $$css: !0,
        },
        container: {
          display: 'x78zum5',
          position: 'x1n2onr6',
          width: 'xh8yej3',
          $$css: !0,
        },
        expanding: { flexGrow: 'x1iyjqo2', $$css: !0 },
        overflowHidden: {
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          $$css: !0,
        },
        root: {
          borderTopStartRadius: 'x1qpq9i9',
          borderTopEndRadius: 'xdney7k',
          borderBottomEndRadius: 'xu5ydu1',
          borderBottomStartRadius: 'xt3gfkd',
          width: 'xh8yej3',
          $$css: !0,
        },
      },
      k = {
        1: { boxShadow: 'xquyuld', $$css: !0 },
        2: { boxShadow: 'x10h3on', $$css: !0 },
      };
    function a(a, b) {
      var d = a.allowOverflow;
      d = d === void 0 ? !1 : d;
      var e = a.background;
      e = e === void 0 ? 'transparent' : e;
      var f = a.border;
      f = f === void 0 ? 'none' : f;
      var g = a.borderHighlight,
        l = a.children,
        m = a.dropShadow;
      m = m === void 0 ? 0 : m;
      var n = a.expanding;
      n = n === void 0 ? !1 : n;
      var o = a.testid;
      a = a.xstyle;
      m = k[m];
      return h.jsxs(
        'div',
        babelHelpers['extends'](
          { className: 'x78zum5 x1n2onr6 xh8yej3' + (n ? ' x1iyjqo2' : '') },
          c('testID')(o),
          {
            children: [
              h.jsx(c('BaseView.react'), {
                ref: b,
                style: {
                  borderRadius: c('isBlueprintStylesEnabled')()
                    ? 'max(0px, min(12px, calc((100vw - 4px - 100%) * 9999))) / 12px'
                    : 'max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px',
                },
                xstyle: [
                  i[e],
                  f === 'solid' && e !== 'white' && j.borderOnWash,
                  f === 'solid' && e === 'white' && j.borderOnWhite,
                  f === 'solid' && j.borderSolid,
                  j.root,
                  !d && j.overflowHidden,
                  m,
                  a,
                ],
                children: l,
              }),
              f === 'inset'
                ? h.jsx('div', {
                    className:
                      'x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1ey2m1c xlg9a9y x9f619 xds687c x47corl x10l6tqk x17qophe x13vifvy',
                  })
                : null,
              g != null
                ? h.jsx('div', {
                    className:
                      'x1nqgybo x12eorn xsclsaf x768y1r x1a2cdl4 xnhgr82 x1qt0ttw xgk8upj x1t1qrwb x15jmxi0 x47corl x10l6tqk x1uvgrom x1qiirwl x1vjfegm' +
                      (g === 'animated'
                        ? ' x1q3qbx4 x1u6ievf x1raiwjw x11wifem'
                        : ''),
                  })
                : null,
            ],
          },
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
