__d(
  'replaceNativeTimer',
  [
    'cancelAnimationFrame',
    'clearInterval',
    'clearTimeout',
    'requestAnimationFrame',
    'setInterval',
    'setTimeout',
  ],
  function (a, b, c, d, e, f) {
    a.__fbNativeSetTimeout = a.setTimeout;
    a.__fbNativeClearTimeout = a.clearTimeout;
    a.__fbNativeSetInterval = a.setInterval;
    a.__fbNativeClearInterval = a.clearInterval;
    a.__fbNativeRequestAnimationFrame = a.requestAnimationFrame;
    a.__fbNativeCancelAnimationFrame = a.cancelAnimationFrame;
    b('setTimeout').nativeBackup = a.setTimeout;
    b('clearTimeout').nativeBackup = a.clearTimeout;
    b('setInterval').nativeBackup = a.setInterval;
    b('clearInterval').nativeBackup = a.clearInterval;
    b('requestAnimationFrame').nativeBackup = a.requestAnimationFrame;
    b('cancelAnimationFrame').nativeBackup = a.cancelAnimationFrame;
    a.setTimeout = b('setTimeout');
    a.clearTimeout = b('clearTimeout');
    a.setInterval = b('setInterval');
    a.clearInterval = b('clearInterval');
    a.requestAnimationFrame = b('requestAnimationFrame');
    a.cancelAnimationFrame = b('cancelAnimationFrame');
    function c() {}
    e.exports = c;
  },
  null,
);