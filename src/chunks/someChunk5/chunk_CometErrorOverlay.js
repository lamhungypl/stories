__d(
  'CometErrorOverlay',
  ['ReactDOMComet', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    function h() {
      var a = document.body;
      if (a == null) return null;
      var b = document.createElement('div');
      a.appendChild(b);
      return b;
    }
    function a(a) {
      var b = h();
      if (b != null) {
        var c = function () {
            window.setTimeout(function () {
              e.unmount(), b.remove();
            }, 0);
          },
          e = d('ReactDOMComet').createRoot(b, {
            unstable_concurrentUpdatesByDefault: !0,
            unstable_strictMode: !0,
          });
        a = a(c);
        e.render(a);
        return c;
      }
    }
    g.injectComponent = a;
  },
  98,
);
