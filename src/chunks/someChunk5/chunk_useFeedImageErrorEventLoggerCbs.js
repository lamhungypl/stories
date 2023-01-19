__d(
  'useFeedImageErrorEventLoggerCbs',
  ['Banzai', 'CometInteractionSourceContext', 'Random', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useContext,
      j = b.useRef,
      k = 1e3,
      l = function (a) {
        var b = a.result,
          e = a.src;
        a = a.surface;
        d('Random').coinflip(k) &&
          c('Banzai').post('logger:WWWImageLoadSrcEventLoggerConfig', {
            result: b,
            src: e,
            surface: a,
          });
      };
    function a(a) {
      var b = a.onError,
        d = a.onLoad,
        e = a.src,
        f = j(null);
      a = i(c('CometInteractionSourceContext'));
      var g = a === 3 ? 'profile' : a === 0 ? 'feed' : null;
      a = h(
        function (a) {
          d != null && d(a);
          if (f.current === e) return;
          typeof e === 'string' &&
            (l({ result: 'success', src: e, surface: g }), (f.current = e));
        },
        [d, e, g],
      );
      var k = h(
        function (a) {
          b != null && b(a);
          if (f.current === e) return;
          typeof e === 'string' &&
            (l({ result: 'error', src: e, surface: g }), (f.current = e));
        },
        [b, e, g],
      );
      return g == null || typeof e !== 'string'
        ? { _onError: b, _onLoad: d }
        : { _onError: k, _onLoad: a };
    }
    g['default'] = a;
  },
  98,
);
