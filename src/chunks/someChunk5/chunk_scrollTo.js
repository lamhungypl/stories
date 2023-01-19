__d(
  'scrollTo',
  ['debounce', 'emptyFunction'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b,
        d = a.onScrollComplete,
        e = a.onScrollStart,
        f = babelHelpers.objectWithoutPropertiesLoose(a, [
          'onScrollComplete',
          'onScrollStart',
        ]);
      b = (b = a.top) != null ? b : window.pageYOffset;
      a = (a = a.left) != null ? a : window.pageXOffset;
      e && e();
      if (window.pageYOffset === b && window.pageXOffset === a) {
        d && d();
        return { dispose: c('emptyFunction') };
      }
      e = !1;
      try {
        var g = document.documentElement;
        if (g == null) {
          d && d();
          return { dispose: c('emptyFunction') };
        }
        g = 'scrollBehavior' in g.style;
        g ? window.scrollTo(f) : (e = !0);
      } catch (a) {
        e = !0;
      }
      if (e) {
        window.scrollTo(a, b);
        d && d();
        return { dispose: c('emptyFunction') };
      }
      var h,
        i = !1;
      d != null &&
        ((h = c('debounce')(function () {
          (i = !0), window.removeEventListener('scroll', h), d && d();
        }, 200)),
        window.addEventListener('scroll', h, { passive: !0 }),
        window.dispatchEvent(new Event('scroll')));
      return {
        dispose: function () {
          if (i) return;
          h && h.reset();
          window.removeEventListener('scroll', h);
          window.scrollTo(window.pageYOffset, window.pageXOffset);
        },
      };
    }
    g['default'] = a;
  },
  98,
);
