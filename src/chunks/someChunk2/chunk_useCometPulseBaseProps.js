__d(
  'useCometPulseBaseProps',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useState;
    function a(a) {
      var b = a.calloutProps,
        c = a.pulseProps;
      a = h(!1);
      var d = a[0],
        e = a[1];
      a = h(!0);
      var f = a[0],
        g = a[1];
      a = babelHelpers['extends']({}, b, {
        onClose: function () {
          for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++)
            c[d] = arguments[d];
          b == null
            ? void 0
            : b.onClose == null
            ? void 0
            : b.onClose.apply(b, c);
          e(!1);
          g(!1);
        },
      });
      var i = babelHelpers['extends']({}, c, {
        onPress: function () {
          for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++)
            b[d] = arguments[d];
          c == null
            ? void 0
            : c.onPress == null
            ? void 0
            : c.onPress.apply(c, b);
          e(!0);
          g(!1);
        },
      });
      return [f, i, [a, d]];
    }
    g['default'] = a;
  },
  98,
);
