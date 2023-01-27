__d(
  'setImmediatePolyfill',
  ['invariant', 'ImmediateImplementation', 'PromiseUsePolyfillSetImmediateGK'],
  function (a, b, c, d, e, f, g) {
    var h = a.setImmediate;
    if (
      b('PromiseUsePolyfillSetImmediateGK')
        .www_always_use_polyfill_setimmediate ||
      !h
    ) {
      d = b('ImmediateImplementation');
      h = d.setImmediate;
    }
    function c(a) {
      typeof a === 'function' || g(0, 5912);
      for (
        var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1;
        d < b;
        d++
      )
        c[d - 1] = arguments[d];
      return h.apply(void 0, [a].concat(c));
    }
    e.exports = c;
  },
  null,
);
