__d(
  'nativeRequestAnimationFrame',
  [],
  function (a, b, c, d, e, f) {
    b =
      a.__fbNativeRequestAnimationFrame ||
      a.requestAnimationFrame ||
      a.webkitRequestAnimationFrame ||
      a.mozRequestAnimationFrame ||
      a.oRequestAnimationFrame ||
      a.msRequestAnimationFrame;
    c = b;
    f['default'] = c;
  },
  66,
);
