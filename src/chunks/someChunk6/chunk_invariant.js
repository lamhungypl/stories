__d(
  'invariant',
  ['Env', 'fb-error-lite', 'sprintf'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      if (!a) {
        var d = b;
        for (
          var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2;
          g < e;
          g++
        )
          f[g - 2] = arguments[g];
        if (typeof d === 'number') {
          var i = h(d, f),
            j = i.message,
            k = i.decoderLink;
          d = j;
          f.unshift(k);
        } else if (d === void 0) {
          d = 'Invariant: ';
          for (var l = 0; l < f.length; l++) d += '%s,';
        }
        var m = d,
          n = new Error(m);
        n.name = 'Invariant Violation';
        n.messageFormat = d;
        n.messageParams = f.map(function (a) {
          return String(a);
        });
        n.taalOpcodes = [c('fb-error-lite').TAALOpcode.PREVIOUS_FRAME];
        n.stack;
        throw n;
      }
    }
    function h(a, b) {
      var d = 'Minified invariant #' + a + '; %s';
      b.length > 0 &&
        (d +=
          ' Params: ' +
          b
            .map(function (a) {
              return '%s';
            })
            .join(', '));
      a =
        c('Env').show_invariant_decoder === !0
          ? 'visit ' + i(a, b) + ' to see the full message.'
          : '';
      return { message: d, decoderLink: a };
    }
    function i(a, b) {
      a = 'https://www.internalfb.com/intern/invariant/' + a + '/';
      b.length > 0 &&
        (a +=
          '?' +
          b
            .map(function (a, b) {
              return 'args[' + b + ']=' + encodeURIComponent(String(a));
            })
            .join('&'));
      return a;
    }
    g['default'] = a;
  },
  98,
);
