_d(
  'CometImage.react',
  [
    'BaseImage.react',
    'CometImageFromIXValue.react',
    'cr:2010754',
    'gkx',
    'mergeRefs',
    'react',
    'useFeedImageErrorEventLoggerCbs',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var useMemo = e.useMemo,
      useRef = e.useRef,
      k = '1';

    function Component(a, d) {
      var e = useRef(null),
        f = useMemo(
          function () {
            return c('mergeRefs')(e, d);
          },
          [e, d],
        );
      let g = a.alt;
      let l = a.objectFit;
      let m = a.onError;
      let n = a.onLoad;
      let o = a.src;
      let p = a.testid;
      p = a.xstyle;
      let a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'alt',
        'objectFit',
        'onError',
        'onLoad',
        'src',
        'testid',
        'xstyle',
      ]);
      let m = c('useFeedImageErrorEventLoggerCbs')({
        onError: m,
        onLoad: n,
        src: o,
      });
      let n = m._onError;
      let m = m._onLoad;
      var q = c('gkx')('1690028') ? k : void 0;

      function r(a, c, d, f, g, h) {
        b('cr:2010754') &&
          c === 'mount' &&
          e.current != null &&
          typeof o === 'string' &&
          b('cr:2010754').trackImagePerf(e.current, h, o, {
            mutationType: 'reactCommit',
          });
      }

      if (typeof o === 'string') {
        a = h.jsx(
          c('BaseImage.react'),
          babelHelpers['extends']({}, a, {
            alt: g,
            elementtiming: q,
            objectFit: l,
            onError: n,
            onLoad: m,
            ref: f,
            src: o,
            testid: void 0,
            xstyle: p,
          }),
        );
        return c('gkx')('1690028')
          ? h.jsx(h.Profiler, { id: k, onRender: r, children: a })
          : a;
      }

      return h.jsx(c('CometImageFromIXValue.react'), {
        alt: g,
        objectFit: l,
        ref: f,
        source: o,
        testid: void 0,
        xstyle: p,
      });
    }
    Component.displayName = Component.name + ' [from ' + f.id + ']';
    d = h.forwardRef(a);
    g['default'] = d;
  },
  98,
);
