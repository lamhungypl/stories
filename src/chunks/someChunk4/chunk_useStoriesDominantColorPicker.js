__d(
  'useStoriesDominantColorPicker',
  ['react', 'recoverableViolation', 'storiesDominantColorPicker'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useState,
      j = 100;
    function a(a) {
      var b = a.defaultBottomColor,
        d = a.defaultTopColor,
        e = a.imageURL;
      a = i({ bottomColor: b ? k(b) : '', topColor: d ? k(d) : '' });
      b = a[0];
      var f = a[1];
      h(
        function () {
          if (e == null) return;
          var a = new Image();
          a.crossOrigin = 'Anonymous';
          a.onload = function () {
            var b = document.createElement('canvas'),
              d = a.width,
              e = a.height,
              g = d / e,
              h = Math.min(Math.max(d, e), j);
            (d > h || e > h) &&
              (d > e ? ((d = h), (e = d / g)) : ((e = h), (d = e * g)));
            b.width = d;
            b.height = e;
            h = b.getContext('2d');
            h.drawImage(a, 0, 0, d, e);
            try {
              g = h.getImageData(0, 0, d, Math.max(1, e * 0.05));
              b = h.getImageData(0, e - e * 0.05, d, Math.max(1, e * 0.05));
              h = c('storiesDominantColorPicker')(g.data);
              d = c('storiesDominantColorPicker')(b.data);
              f({ bottomColor: k(d[0]), topColor: k(h[0]) });
            } catch (a) {
              c('recoverableViolation')(
                'Stories Create Dominant Color Bg throws exception',
                'fb_stories_web',
                a,
              );
            }
          };
          a.src = e;
          return function () {
            a.onload = null;
          };
        },
        [e],
      );
      return b;
    }
    function k(a) {
      return (
        'rgb(\n    ' +
        Math.round(a.red) +
        ',\n    ' +
        Math.round(a.green) +
        ',\n    ' +
        Math.round(a.blue) +
        ')'
      );
    }
    g['default'] = a;
  },
  98,
);
