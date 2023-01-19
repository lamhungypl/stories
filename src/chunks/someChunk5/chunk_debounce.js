__d(
  'debounce',
  ['clearTimeout', 'debounceCore', 'setTimeout'],
  function (a, b, c, d, e, f, g) {
    function a(a, b, d, e, f) {
      b === void 0 && (b = 100);
      var g = function (a, b, d) {
        return c('setTimeout')(a, b, d, !e);
      };
      return c('debounceCore')(a, b, d, g, c('clearTimeout'), f);
    }
    g['default'] = a;
  },
  98,
);
