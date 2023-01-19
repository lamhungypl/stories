__d(
  'scrollIntoView',
  ['debounce', 'emptyFunction', 'recoverableViolation', 'scrollTo'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {
      center: 'center',
      top: 'start',
      bottom: 'end',
      closest: 'nearest',
    };
    function a(a, b) {
      b === void 0 && (b = Object.freeze({}));
      var d = b,
        e = d.behavior;
      e = e === void 0 ? 'auto' : e;
      var f = d.onScrollComplete,
        g = f === void 0 ? c('emptyFunction') : f;
      f = d.onScrollStart;
      f = f === void 0 ? c('emptyFunction') : f;
      d = d.force;
      d = d === void 0 ? !1 : d;
      var i = a.getBoundingClientRect(),
        j = document.documentElement;
      if (j == null) {
        c('recoverableViolation')(
          "There is no documentElement accessible on document, something is seriously wrong and I couldn't imagine the situation you have found yourself in",
          'comet_ui',
        );
        return { dispose: c('emptyFunction') };
      }
      var k = j.clientHeight,
        l = i.top <= k && i.bottom >= 0;
      f();
      if (!d && l) {
        g != null && g();
        return { dispose: c('emptyFunction') };
      }
      d = (f = b.verticalAlign) != null ? f : 'closest';
      try {
        l = 'scrollBehavior' in j.style;
        if (l) {
          a.scrollIntoView({ behavior: e, block: d != null ? h[d] : void 0 });
          var m,
            n = !1;
          g != null &&
            ((m = c('debounce')(function () {
              (n = !0),
                window.removeEventListener('scroll', m, { capture: !0 }),
                g();
            }, 200)),
            window.addEventListener('scroll', m, { passive: !0, capture: !0 }),
            window.dispatchEvent(new Event('scroll')));
          return {
            dispose: function () {
              if (n) return;
              m && m.reset();
              window.removeEventListener('scroll', m, { capture: !0 });
              window.scrollTo(window.pageYOffset, window.pageXOffset);
            },
          };
        }
      } catch (a) {}
      d === 'closest' && (i.top >= k ? (d = 'bottom') : (d = 'top'));
      var o;
      switch (d) {
        case 'top':
          o = window.pageYOffset + i.top;
          break;
        case 'bottom':
          o = window.pageYOffset + i.bottom - k;
          break;
        case 'center':
          o = window.pageYOffset + i.bottom - k + (k - i.height) / 2;
          break;
      }
      return c('scrollTo')({ behavior: e, top: o, onScrollComplete: g });
    }
    g['default'] = a;
  },
  98,
);
