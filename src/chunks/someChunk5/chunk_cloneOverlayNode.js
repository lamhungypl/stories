__d(
  'cloneOverlayNode',
  ['FBStoriesCometProductionSitevarConfig', 'convertUuidToDomId', 'uuid'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = a.overlayIds;
      a = a.overlayNode;
      var e = a.cloneNode(!0);
      a = a.getBoundingClientRect();
      e.style.width = a.width + 'px';
      e.style.height = a.height + 'px';
      e.style.position = 'absolute';
      e.style.top = '-16000px';
      e.style.zIndex = '-10000';
      var f = d('FBStoriesCometProductionSitevarConfig').fontOffsets;
      a = b
        .map(function (a) {
          return e.querySelector('#' + c('convertUuidToDomId')(a));
        })
        .filter(Boolean);
      a.forEach(function (a) {
        a.id = c('convertUuidToDomId')(c('uuid')());
        var b = a.style.fontFamily.replace(/\"/g, '');
        b = f[b];
        if (b == null) return;
        var d = a.style.transform,
          e = /translateX\(calc\(([^\)]+)\)\) /;
        e = d.match(e);
        var g = /translateY\(calc\(([^\)]+)\)\) /;
        g = d.match(g);
        var h = /rotate\((.+)deg\)/;
        h = d.match(h);
        h = 90 + (h != null && h.length >= 2 ? parseFloat(h[1]) : 0);
        d = d;
        if (e != null && e.length >= 2) {
          e = e[1];
          var i = b * Math.cos((h * Math.PI) / 180);
          d = d.replace(e, e + ' + ' + i + 'em');
        }
        if (g != null && g.length >= 2) {
          e = g[1];
          i = b * Math.sin((h * Math.PI) / 180);
          d = d.replace(e, e + ' + ' + i + 'em');
        }
        a.style.transform = d;
      });
      return e;
    }
    g['default'] = a;
  },
  98,
);
