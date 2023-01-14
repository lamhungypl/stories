__d(
  'requestIdleCallbackAcrossTransitions',
  ['IdleCallbackImplementation', 'TimeSlice'],
  function (a, b, c, d, e, f, g) {
    var h =
      a.requestIdleCallback ||
      d('IdleCallbackImplementation').requestIdleCallback;
    function b(b, d) {
      b = c('TimeSlice').guard(b, 'requestIdleCallback', {
        propagationType: c('TimeSlice').PropagationType.CONTINUATION,
        registerCallStack: !0,
      });
      return h.call(a, b, d);
    }
    g['default'] = b;
  },
  98,
);
