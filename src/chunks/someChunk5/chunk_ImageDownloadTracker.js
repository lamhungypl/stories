__d(
  'ImageDownloadTracker',
  ['NetworkStatus', 'Promise', 'setTimeout'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 2,
      i = 250;
    function a(a, d) {
      var e = 0,
        f;
      return new (b('Promise'))(function (b, g) {
        function j() {
          var f = new Image();
          f.onload = function () {
            c('NetworkStatus').reportSuccess(), b();
          };
          f.onerror = function () {
            var a = e <= h;
            a ? c('setTimeout')(j, i) : (c('NetworkStatus').reportError(), g());
          };
          e++;
          d();
          f.src = a;
        }
        c('NetworkStatus').isOnline()
          ? j()
          : (f = c('NetworkStatus').onChange(function (a) {
              a = a.online;
              a && (j(), f.remove());
            }));
      });
    }
    g['default'] = a;
  },
  98,
);
