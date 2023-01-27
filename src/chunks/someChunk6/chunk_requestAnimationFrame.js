__d(
  'requestAnimationFrame',
  ['TimeSlice', 'TimerStorage', 'requestAnimationFrameAcrossTransitions'],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      function b(b) {
        c('TimerStorage').unset(c('TimerStorage').ANIMATION_FRAME, d), a(b);
      }
      c('TimeSlice').copyGuardForWrapper(a, b);
      b.__originalCallback = a;
      var d = c('requestAnimationFrameAcrossTransitions')(b);
      c('TimerStorage').set(c('TimerStorage').ANIMATION_FRAME, d);
      return d;
    }
    g['default'] = a;
  },
  98,
);
