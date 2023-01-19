__d(
  'DOMEventListener',
  [
    'invariant',
    'dedupString',
    'emptyFunction',
    'passiveEventListenerUtil',
    'wrapFunction',
  ],
  function (a, b, c, d, e, f, g) {
    var h = b('passiveEventListenerUtil').isPassiveEventListenerSupported,
      i,
      j;
    window.addEventListener
      ? ((i = function (a, c, d, e) {
          e === void 0 && (e = !1),
            (d.wrapper = b('wrapFunction')(
              d,
              'entry',
              b('dedupString')('DOMEventListener.add ' + c),
            )),
            a.addEventListener(c, d.wrapper, h ? e : !1);
        }),
        (j = function (a, b, c, d) {
          d === void 0 && (d = !1),
            a.removeEventListener(b, c.wrapper, h ? d : !1);
        }))
      : window.attachEvent
      ? ((i = function (a, c, d, e) {
          e === void 0,
            (d.wrapper = b('wrapFunction')(
              d,
              'entry',
              'DOMEventListener.add ' + c,
            )),
            a.attachEvent || g(0, 2798),
            a.attachEvent('on' + c, d.wrapper);
        }),
        (j = function (a, b, c, d) {
          d === void 0,
            a.detachEvent || g(0, 2799),
            a.detachEvent('on' + b, c.wrapper);
        }))
      : (j = i = b('emptyFunction'));
    a = {
      add: function (a, b, c, d) {
        d === void 0 && (d = !1);
        i(a, b, c, d);
        return {
          remove: function () {
            j(a, b, c, d);
          },
        };
      },
      remove: j,
    };
    e.exports = a;
  },
  null,
);
