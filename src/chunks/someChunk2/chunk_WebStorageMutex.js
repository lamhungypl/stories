__d(
  'WebStorageMutex',
  ['WebStorage', 'clearTimeout', 'pageID', 'setTimeout'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = null,
      i = !1,
      j = c('pageID');
    function k() {
      i || ((i = !0), (h = c('WebStorage').getLocalStorage()));
      return h;
    }
    a = (function () {
      function a(a) {
        this.name = a;
      }
      a.testSetPageID = function (a) {
        j = a;
      };
      var b = a.prototype;
      b.$2 = function () {
        var a,
          b = k();
        if (!b) return j;
        b = b.getItem('mutex_' + this.name);
        b = ((a = b) != null ? a : '').split(':');
        return b && parseInt(b[1], 10) >= Date.now() ? b[0] : null;
      };
      b.$3 = function (a) {
        var b = k();
        if (!b) return;
        a = a == null ? 1e3 : a;
        a = Date.now() + a;
        c('WebStorage').setItemGuarded(b, 'mutex_' + this.name, j + ':' + a);
      };
      b.hasLock = function () {
        return this.$2() === j;
      };
      b.lock = function (a, b, d) {
        var e = this;
        this.$1 && c('clearTimeout')(this.$1);
        j === (this.$2() || j) && this.$3(d);
        this.$1 = c('setTimeout')(function () {
          e.$1 = null;
          var c = e.hasLock() ? a : b;
          c && c(e);
        }, 0);
      };
      b.unlock = function () {
        this.$1 && c('clearTimeout')(this.$1);
        var a = k();
        a && this.hasLock() && a.removeItem('mutex_' + this.name);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
