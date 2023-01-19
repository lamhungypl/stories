__d(
  'CometThrottle',
  ['clearTimeout', 'setTimeout', 'unrecoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, d) {
      d = d === void 0 ? {} : d;
      var e = d.leading,
        f = d.trailing,
        g,
        h,
        i,
        j = null,
        k = 0,
        l = function () {
          var b = g;
          g = null;
          var d = h;
          h = null;
          if (b == null)
            throw c('unrecoverableViolation')(
              'It should be impossible for `cachedArgs` to be `null` at the moment we invoke the throttled function. Investigate why this is the case.',
              'comet_infra',
            );
          else return a.apply(d, b);
        },
        m = function () {
          (k = e === !1 ? 0 : new Date()), (j = null), (i = l());
        };
      d = function () {
        (g = h = null), j != null && (c('clearTimeout')(j), (j = null));
      };
      function n() {
        var a = new Date();
        !k && e === !1 && (k = a);
        var d = b - (a - k);
        d <= 0
          ? (c('clearTimeout')(j),
            (j = null),
            (k = a),
            (g = arguments),
            (h = this),
            (i = l()))
          : !j &&
            f !== !1 &&
            ((g = arguments), (h = this), (j = c('setTimeout')(m, d)));
        return i;
      }
      n.cancel = d;
      return n;
    }
    g['default'] = a;
  },
  98,
);
