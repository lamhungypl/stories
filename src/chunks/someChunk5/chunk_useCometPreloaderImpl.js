__d(
  'useCometPreloaderImpl',
  [
    'Bootloader',
    'CometMouseActivity',
    'JSScheduler',
    'clearTimeout',
    'gkx',
    'ifRequired',
    'react',
    'setTimeout',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useEffect,
      j = b.useRef;
    function k(a) {
      return a.pointerType === 'mouse';
    }
    function l(a) {
      a && (typeof a === 'function' ? a() : a.preload());
    }
    var m = 50;
    function a(a, b, d, e) {
      var f = j(null),
        g = j(null),
        n = j(null),
        o = function (a) {
          c('ifRequired')(
            'setTimeoutCometInternals',
            function (b) {
              f.current = b.setTimeoutAtPriority_DO_NOT_USE(
                c('JSScheduler').priorities.unstable_UserBlocking,
                a,
                m,
              );
            },
            function () {
              f.current = c('setTimeout')(a, m);
            },
          );
        },
        p = h(
          function (e, f, g) {
            if (
              a === 'tooltip' ||
              ((a === 'button' || a === 'button_aggressive') && b != null)
            ) {
              e = function () {
                a === 'tooltip'
                  ? (l(d), l(b), c('Bootloader').forceFlush())
                  : (a === 'button' || a === 'button_aggressive') &&
                    (l(b), c('Bootloader').forceFlush()),
                  f && f();
              };
              o(e);
            }
            if (a === 'button_aggressive') {
              e = function () {
                l(d), g && g();
              };
              n.current != null && (n.current(), (n.current = null));
              c('gkx')('4034')
                ? (n.current =
                    c('CometMouseActivity').addOnMouseStopCallbackOnce(e))
                : (n.current =
                    c('CometMouseActivity').addOnMouseStopCallback(e));
            }
          },
          [d, b, a],
        ),
        q = h(
          function () {
            c('clearTimeout')(f.current),
              (f.current = null),
              e && e(),
              g.current != null && g.current(),
              n.current != null && n.current();
          },
          [e],
        ),
        r = h(
          function (b) {
            if (!k(b)) return;
            (a === 'button' || a === 'button_aggressive') &&
              (l(d), c('Bootloader').forceFlush());
          },
          [d, a],
        ),
        s = h(
          function (a) {
            c('JSScheduler').scheduleSpeculativeCallback(function () {
              a === !0 && (l(d), l(b), c('Bootloader').forceFlush());
            });
          },
          [d, b],
        );
      i(function () {
        return function () {
          g.current != null && g.current(),
            n.current != null && n.current(),
            c('clearTimeout')(f.current);
        };
      }, []);
      return [p, q, r, s];
    }
    g['default'] = a;
  },
  98,
);
