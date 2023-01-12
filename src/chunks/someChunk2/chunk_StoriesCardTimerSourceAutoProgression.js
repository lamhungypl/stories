__d(
  'StoriesCardTimerSourceAutoProgression',
  ['cometUniqueID'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a(a) {
        (this.$1 = 0),
          (this.$2 = c('cometUniqueID')()),
          (this.$3 = 6e3),
          a != null && (this.$3 = a);
      }
      var b = a.prototype;
      b.isFrozen = function () {
        return null;
      };
      b.getDuration = function () {
        return this.$3;
      };
      b.getNewTimeElapsed = function (a) {
        var b = Date.now(),
          c = b - this.$1;
        this.$1 = b;
        return a + c;
      };
      b.getID = function () {
        return this.$2;
      };
      b.play = function () {
        this.$1 === 0 && (this.$1 = Date.now());
      };
      b.pause = function () {
        this.$1 = 0;
      };
      b.resetSourceOnStop = function () {
        return !1;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
