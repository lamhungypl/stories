__d(
  'ContextualComponent',
  ['Parent'],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      a.forNode = function (b) {
        return a.$1.get(b) || null;
      };
      a.closestToNode = function (b) {
        b = d('Parent').find(b, function (b) {
          return !!a.forNode(b);
        });
        return b ? a.forNode(b) : null;
      };
      a.register = function (b) {
        return new a(b);
      };
      function a(a) {
        var b = a.element,
          c = a.isRoot;
        a = a.parent;
        this.$2 = c;
        this.$3 = b;
        this.$4 = a;
        this.$5 = new Set();
        this.$6 = [];
        this.$7 = [];
        this.$8();
      }
      var b = a.prototype;
      b.onCleanup = function (a) {
        this.$6.push(a);
      };
      b.onUnmount = function (a) {
        this.$7.push(a);
      };
      b.cleanup = function () {
        this.$5.forEach(function (a) {
          return a.cleanup();
        }),
          this.$6.forEach(function (a) {
            return a();
          }),
          (this.$6 = []);
      };
      b.unmount = function () {
        this.cleanup();
        this.$5.forEach(function (a) {
          return a.unmount();
        });
        this.$7.forEach(function (a) {
          return a();
        });
        this.$7 = [];
        var b = this.$4;
        b && (a.$1['delete'](this.$3), b.$9(this));
      };
      b.reinitialize = function () {
        var b = this.$4;
        b && (b.$9(this), (this.$4 = void 0));
        a.$1['delete'](this.$3);
        this.$8();
      };
      b.$8 = function () {
        if (!this.$2 && !this.$4) {
          var b = a.closestToNode(this.$3);
          b && (this.$4 = b);
        }
        this.$4 && this.$4.$10(this);
        a.$1.set(this.$3, this);
      };
      b.$10 = function (a) {
        this.$5.add(a);
      };
      b.$9 = function (a) {
        this.$5['delete'](a);
      };
      return a;
    })();
    a.$1 = new Map();
    g['default'] = a;
  },
  98,
);
