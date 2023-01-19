__d(
  'BaseImage_DEPRECATED.react',
  [
    'CometSSRBackgroundImageUtils',
    'CometVisualCompletionAttributes',
    'RecoverableViolationWithComponentStack.react',
    'coerceImageishSprited',
    'coerceImageishURL',
    'cr:2010754',
    'gkx',
    'joinClasses',
    'mergeRefs',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useEffect,
      j = e.useMemo,
      k = e.useRef,
      l = '2';
    function m(a) {
      return (
        a != null &&
        typeof a === 'string' &&
        a !== '' &&
        a !== '[object Object]'
      );
    }
    function a(a, e) {
      var f = a.alt,
        g = a.testid,
        n = babelHelpers.objectWithoutPropertiesLoose(a, ['alt', 'testid']),
        o = n.onLoad;
      g = n.src;
      var p = k(null);
      a = j(
        function () {
          return c('mergeRefs')(p, e);
        },
        [p, e],
      );
      d('CometSSRBackgroundImageUtils').processSpritedImagesForSSRPreload(g);
      var q = c('coerceImageishSprited')(g),
        r = c('coerceImageishURL')(g);
      i(
        function () {
          var a;
          o != null &&
            p.current instanceof HTMLImageElement &&
            ((a = p.current) == null ? void 0 : a.complete) &&
            o();
        },
        [o, g],
      );
      if (r != null && r.uri != null) {
        return !m(r.uri)
          ? h.jsx(c('RecoverableViolationWithComponentStack.react'), {
              errorMessage: 'Invalid src provided as imageish uri',
              projectName: 'comet_ui',
            })
          : h.jsx(
              'img',
              babelHelpers['extends']({}, n, {
                alt: (g = f) != null ? g : '',
                'data-testid': void 0,
                height: n.height != null ? n.height : r.height,
                ref: a,
                src: r.uri,
                width: n.width != null ? n.width : r.width,
              }),
            );
      } else if (q != null) {
        n.height;
        n.src;
        g = n.style;
        n.width;
        r = babelHelpers.objectWithoutPropertiesLoose(n, [
          'height',
          'src',
          'style',
          'width',
        ]);
        return h.jsx(
          'i',
          babelHelpers['extends'](
            {},
            c('CometVisualCompletionAttributes').CSS_IMG,
            r,
            {
              'aria-label': f === '' ? null : f,
              className: c('joinClasses')(
                n.className,
                q.type === 'css' ? q.className : void 0,
              ),
              'data-testid': void 0,
              ref: a,
              role: f === '' ? null : 'img',
              style:
                q.type === 'cssless'
                  ? babelHelpers['extends']({}, g, q.style)
                  : g,
            },
          ),
        );
      }
      if (!m(n.src))
        return h.jsx(c('RecoverableViolationWithComponentStack.react'), {
          errorMessage: 'Invalid src provided to image',
          projectName: 'comet_ui',
        });
      r = c('gkx')('1690028') ? l : void 0;
      function s(a, c, d, e, f, g) {
        b('cr:2010754') &&
          c === 'mount' &&
          p.current != null &&
          b('cr:2010754').trackImagePerf(
            p.current,
            g,
            typeof n.src === 'string' ? n.src : '',
            { mutationType: 'reactCommit' },
          );
      }
      g = h.jsx(
        'img',
        babelHelpers['extends']({}, n, {
          alt: (q = f) != null ? q : '',
          'data-testid': void 0,
          elementtiming: r,
          ref: a,
        }),
      );
      return c('gkx')('1690028')
        ? h.jsx(h.Profiler, { id: l, onRender: s, children: g })
        : g;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
