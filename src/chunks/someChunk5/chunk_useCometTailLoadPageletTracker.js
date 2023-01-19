__d(
  'useCometTailLoadPageletTracker',
  [
    'IntersectionObserver',
    'cr:1703077',
    'intersectionObserverEntryIsIntersecting',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    e = d('react');
    var h = e.useCallback,
      i = e.useEffect,
      j = e.useRef;
    function a(a, d, e) {
      var f = j(null),
        g = j(!1),
        k = j(null);
      i(
        function () {
          return function () {
            k.current && k.current(), (k.current = null);
          };
        },
        [a, d],
      );
      return h(
        function (h) {
          if (
            b('cr:1703077') &&
            e === !0 &&
            a != null &&
            d != null &&
            h &&
            f.current !== h
          ) {
            f.current = h;
            k.current && (k.current(), (k.current = null));
            var i = function (e) {
                Array.prototype.forEach.call(e, function (e) {
                  c('intersectionObserverEntryIsIntersecting')(e) &&
                    !g.current &&
                    ((g.current = !0),
                    b('cr:1703077') &&
                      b('cr:1703077').logPageletConsumed(a, d, e.time));
                });
              },
              j = new (c('IntersectionObserver'))(i);
            j.observe(h);
            k.current = function () {
              j.disconnect();
            };
          }
        },
        [a, d, e],
      );
    }
    g['default'] = a;
  },
  98,
);
