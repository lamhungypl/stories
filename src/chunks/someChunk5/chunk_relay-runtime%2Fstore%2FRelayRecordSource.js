__d(
  'relay-runtime/store/RelayRecordSource',
  ['relay-runtime/store/RelayRecordState'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('relay-runtime/store/RelayRecordState').EXISTENT,
      h = b('relay-runtime/store/RelayRecordState').NONEXISTENT,
      i = b('relay-runtime/store/RelayRecordState').UNKNOWN;
    a = (function () {
      function a(a) {
        var b = this;
        this.$1 = new Map();
        a != null &&
          Object.keys(a).forEach(function (c) {
            b.$1.set(c, a[c]);
          });
      }
      a.create = function (b) {
        return new a(b);
      };
      var b = a.prototype;
      b.clear = function () {
        this.$1 = new Map();
      };
      b['delete'] = function (a) {
        this.$1.set(a, null);
      };
      b.get = function (a) {
        return this.$1.get(a);
      };
      b.getRecordIDs = function () {
        return Array.from(this.$1.keys());
      };
      b.getStatus = function (a) {
        return !this.$1.has(a) ? i : this.$1.get(a) == null ? h : g;
      };
      b.has = function (a) {
        return this.$1.has(a);
      };
      b.remove = function (a) {
        this.$1['delete'](a);
      };
      b.set = function (a, b) {
        this.$1.set(a, b);
      };
      b.size = function () {
        return this.$1.size;
      };
      b.toJSON = function () {
        var a = {};
        for (
          var b = this.$1,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          a[f] = e;
        }
        return a;
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
