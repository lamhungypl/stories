__d(
  'BaseSvgImage.react',
  ['react', 'useFeedImageErrorEventLoggerCbs'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = a.onError,
        d = a.src,
        e = a.testid;
      e = babelHelpers.objectWithoutPropertiesLoose(a, [
        'onError',
        'src',
        'testid',
      ]);
      a = c('useFeedImageErrorEventLoggerCbs')({ onError: b, src: d });
      b = a._onError;
      a = a._onLoad;
      var f = j(null),
        g = j(d);
      i(
        function () {
          f.current &&
            f.current.getAttribute('xlink:href') !== g.current &&
            f.current.setAttribute('xlink:href', g.current);
        },
        [f, g],
      );
      return h.jsx(
        'image',
        babelHelpers['extends']({}, e, {
          'data-testid': void 0,
          height: '100%',
          onError: b,
          onLoad: a,
          preserveAspectRatio: 'xMidYMid slice',
          ref: f,
          width: '100%',
          xlinkHref: d,
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
