__d(
  'BaseImage.react',
  [
    'CometSSRPreloadImageCollection',
    'ExecutionEnvironment',
    'RecoverableViolationWithComponentStack.react',
    'mergeRefs',
    'react',
    'stylex',
    'testID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useEffect,
      j = b.useMemo,
      k = b.useRef,
      l = {
        contain: { objectFit: 'x19kjcj4', $$css: !0 },
        cover: { objectFit: 'xl1xv1r', $$css: !0 },
        fill: { objectFit: 'xz74otr', $$css: !0 },
      };
    function a(a, b) {
      var e = a.alt;
      e = e === void 0 ? '' : e;
      var f = a['aria-labelledby'],
        g = a.elementtiming,
        m = a.objectFit;
      m = m === void 0 ? 'none' : m;
      var n = a.onLoad,
        o = a.referrerPolicy;
      o = o === void 0 ? 'origin-when-cross-origin' : o;
      var p = a.src,
        q = a.testid,
        r = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'alt',
        'aria-labelledby',
        'elementtiming',
        'objectFit',
        'onLoad',
        'referrerPolicy',
        'src',
        'testid',
        'xstyle',
      ]);
      var s = k(null),
        t = j(
          function () {
            return c('mergeRefs')(s, b);
          },
          [s, b],
        );
      !c('ExecutionEnvironment').canUseDOM &&
        p &&
        d('CometSSRPreloadImageCollection').addImage(p);
      i(
        function () {
          var a = s.current;
          n != null && a != null && a.complete && n();
        },
        [n],
      );
      return p === ''
        ? h.jsx(c('RecoverableViolationWithComponentStack.react'), {
            errorMessage: 'Invalid src provided to image',
            projectName: 'comet_ui',
          })
        : h.jsx(
            'img',
            babelHelpers['extends']({}, a, c('testID')(q), {
              alt: e,
              'aria-labelledby': f,
              className:
                m === 'none' && r == null
                  ? void 0
                  : c('stylex')(m !== 'none' && l[m], r),
              elementtiming: g,
              onLoad: n,
              ref: t,
              referrerPolicy: o,
              src: p,
            }),
          );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
