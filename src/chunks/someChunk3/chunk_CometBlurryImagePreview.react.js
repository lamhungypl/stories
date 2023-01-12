__d(
  'CometBlurryImagePreview.react',
  [
    'getComputedStyle',
    'mergeRefs',
    'react',
    'useCometAriaID',
    'useCometUniqueID',
    'useLayoutEffect_SAFE_FOR_SSR',
    'useSetAttributeRef',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useMemo,
      j = b.useRef,
      k = b.useState;
    function a(a) {
      var b = a.alt,
        d = a.blur,
        e = a.height,
        f = a.previewData,
        g = a.width,
        l = babelHelpers.objectWithoutPropertiesLoose(a, [
          'alt',
          'blur',
          'height',
          'previewData',
          'width',
        ]);
      a = (a = a.style) != null ? a : {};
      var m = a.height,
        n = a.width;
      d = (a = d) != null ? a : 1.2;
      a = c('useCometUniqueID')();
      var o = c('useSetAttributeRef')('id', a),
        p = 'url(#' + a + ')',
        q = c('useSetAttributeRef')('filter', p),
        r = c('useCometAriaID')('aria-labelledby'),
        s = r[0],
        t = s[0];
      s = s[1];
      r = r[1];
      var u = r[0],
        v = r[1],
        w = j(null);
      r = i(
        function () {
          return b != null ? c('mergeRefs')(v, w) : w;
        },
        [b, v, w],
      );
      var x = k(e !== void 0 || m !== void 0 || g !== void 0 || n !== void 0),
        y = x[0],
        z = x[1];
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          var a = w.current;
          if (!(a instanceof SVGSVGElement)) return;
          if (e !== void 0 || m !== void 0 || g !== void 0 || n !== void 0) {
            z(!0);
            return;
          }
          var b = a.style.display,
            d = c('getComputedStyle')(a);
          a.style.display = 'none';
          z(
            d != null &&
              (d.height !== f.height + 'px' || d.width !== f.width + 'px'),
          );
          a.style.display = b;
        },
        [e, f.height, f.width, m, n, g],
      );
      return h.jsxs(
        'svg',
        babelHelpers['extends']({}, l, b != null ? u : null, {
          height: (x = e) != null ? x : y ? void 0 : f.height,
          preserveAspectRatio: 'none',
          ref: r,
          role: 'img',
          viewBox: '0 0 ' + f.width + ' ' + f.height,
          width: (l = g) != null ? l : y ? void 0 : f.width,
          xmlns: 'http://www.w3.org/2000/svg',
          xmlnsXlink: 'http://www.w3.org/1999/xlink',
          children: [
            b != null &&
              h.jsx(
                'title',
                babelHelpers['extends']({}, t, { ref: s, children: b }),
              ),
            h.jsxs('filter', {
              colorInterpolationFilters: 'sRGB',
              filterUnits: 'userSpaceOnUse',
              id: a,
              ref: o,
              suppressHydrationWarning: !0,
              children: [
                h.jsx('feGaussianBlur', {
                  edgeMode: 'duplicate',
                  stdDeviation: d,
                }),
                h.jsx('feComponentTransfer', {
                  children: h.jsx('feFuncA', {
                    tableValues: '1 1',
                    type: 'discrete',
                  }),
                }),
              ],
            }),
            h.jsx('image', {
              filter: p,
              height: f.height,
              ref: q,
              suppressHydrationWarning: !0,
              width: f.width,
              x: '0',
              xlinkHref: f.dataURI,
              y: '0',
            }),
          ],
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
