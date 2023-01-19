__d(
  'relay-runtime/store/RelayOptimisticRecordSource',
  ['invariant', 'relay-runtime/store/RelayRecordSource'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = Object.freeze({ __UNPUBLISH_RECORD_SENTINEL: !0 }),
      i = (function () {
        function a(a) {
          (this.$1 = a),
            (this.$2 = b('relay-runtime/store/RelayRecordSource').create());
        }
        var c = a.prototype;
        c.has = function (a) {
          if (this.$2.has(a)) {
            var b = this.$2.get(a);
            return b !== h;
          } else return this.$1.has(a);
        };
        c.get = function (a) {
          if (this.$2.has(a)) {
            var b = this.$2.get(a);
            if (b === h) return void 0;
            else return b;
          } else return this.$1.get(a);
        };
        c.getStatus = function (a) {
          a = this.get(a);
          if (a === void 0) return 'UNKNOWN';
          else if (a === null) return 'NONEXISTENT';
          else return 'EXISTENT';
        };
        c.clear = function () {
          (this.$1 = b('relay-runtime/store/RelayRecordSource').create()),
            this.$2.clear();
        };
        c['delete'] = function (a) {
          this.$2['delete'](a);
        };
        c.remove = function (a) {
          this.$2.set(a, h);
        };
        c.set = function (a, b) {
          this.$2.set(a, b);
        };
        c.getRecordIDs = function () {
          return Object.keys(this.toJSON());
        };
        c.size = function () {
          return Object.keys(this.toJSON()).length;
        };
        c.toJSON = function () {
          var a = this,
            b = babelHelpers['extends']({}, this.$1.toJSON());
          this.$2.getRecordIDs().forEach(function (c) {
            var d = a.get(c);
            d === void 0 ? delete b[c] : (b[c] = d);
          });
          return b;
        };
        c.getOptimisticRecordIDs = function () {
          return new Set(this.$2.getRecordIDs());
        };
        return a;
      })();
    function a(a) {
      return new i(a);
    }
    function c(a) {
      a instanceof i || g(0, 60670);
      return a.getOptimisticRecordIDs();
    }
    e.exports = { create: a, getOptimisticRecordIDs: c };
  },
  null,
);
