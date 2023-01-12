__d(
  'getCentralImpressionScrollSpeed',
  ['Event'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 0,
      h = Date.now(),
      i = null,
      j = null;
    function a(a) {
      b('Event').listen(
        window,
        'scroll',
        function () {
          j && clearTimeout(j),
            (j = setTimeout(function () {
              return a();
            }, 100));
        },
        b('Event').Priority.NORMAL,
        { passive: !0 },
      );
    }
    function k() {
      var a = window.scrollY,
        b = Date.now();
      if (i != null && b !== h) {
        var c = a - i;
        g = (c / (b - h)) * 1e3;
      }
      i = a;
      h = b;
    }
    a(function () {
      (g = 0), (i = null);
    });
    b('Event').listen(
      window,
      'scroll',
      function () {
        return k();
      },
      b('Event').Priority.NORMAL,
      { passive: !0 },
    );
    e.exports = function () {
      return g;
    };
  },
  null,
);
