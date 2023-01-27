__d(
  'setImmediateAcrossTransitions',
  ['TimeSlice', 'setImmediatePolyfill'],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      var b = c('TimeSlice').guard(a, 'setImmediate', {
        propagationType: c('TimeSlice').PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      for (
        var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
        f < d;
        f++
      )
        e[f - 1] = arguments[f];
      return c('setImmediatePolyfill').apply(void 0, [b].concat(e));
    }
    g['default'] = a;
  },
  98,
);
