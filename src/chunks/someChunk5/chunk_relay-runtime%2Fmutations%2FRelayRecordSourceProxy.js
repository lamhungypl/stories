__d(
  'relay-runtime/mutations/RelayRecordSourceProxy',
  [
    'invariant',
    'relay-runtime/mutations/RelayRecordProxy',
    'relay-runtime/mutations/readUpdatableFragment',
    'relay-runtime/mutations/readUpdatableQuery',
    'relay-runtime/store/RelayModernRecord',
    'relay-runtime/store/RelayRecordState',
    'relay-runtime/store/RelayStoreUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = b('relay-runtime/store/RelayRecordState').EXISTENT,
      j = b('relay-runtime/store/RelayRecordState').NONEXISTENT,
      k = b('relay-runtime/store/RelayStoreUtils').ROOT_ID,
      l = b('relay-runtime/store/RelayStoreUtils').ROOT_TYPE,
      m = b(
        'relay-runtime/mutations/readUpdatableFragment',
      ).readUpdatableFragment,
      n = b('relay-runtime/mutations/readUpdatableQuery').readUpdatableQuery;
    a = (function () {
      function a(a, b, c, d) {
        (this.__mutator = a),
          (this.$1 = c || null),
          (this.$2 = {}),
          (this.$3 = b),
          (this.$4 = !1),
          (this.$5 = new Set()),
          (this.$6 = d);
      }
      var c = a.prototype;
      c.publishSource = function (a, c) {
        var d = this,
          e = a.getRecordIDs();
        e.forEach(function (c) {
          var e = a.getStatus(c);
          if (e === i) {
            var f = a.get(c);
            f &&
              (d.__mutator.getStatus(c) !== i &&
                d.create(
                  c,
                  (
                    h || (h = b('relay-runtime/store/RelayModernRecord'))
                  ).getType(f),
                ),
              d.__mutator.copyFieldsFromRecord(f, c));
          } else e === j && d['delete'](c);
        });
        c &&
          c.length &&
          c.forEach(function (a) {
            var b = d.$1 && d.$1(a.handle);
            b || g(0, 681, a.handle);
            b.update(d, a);
          });
      };
      c.create = function (a, b) {
        this.__mutator.create(a, b);
        delete this.$2[a];
        b = this.get(a);
        b || g(0, 2120);
        return b;
      };
      c['delete'] = function (a) {
        a !== k || g(0, 2121), delete this.$2[a], this.__mutator['delete'](a);
      };
      c.get = function (a) {
        if (!Object.prototype.hasOwnProperty.call(this.$2, a)) {
          var c = this.__mutator.getStatus(a);
          c === i
            ? (this.$2[a] = new (b('relay-runtime/mutations/RelayRecordProxy'))(
                this,
                this.__mutator,
                a,
              ))
            : (this.$2[a] = c === j ? null : void 0);
        }
        return this.$2[a];
      };
      c.getRoot = function () {
        var a = this.get(k);
        a || (a = this.create(k, l));
        (a && a.getType() === l) ||
          g(
            0,
            21125,
            a == null
              ? 'no root record found'
              : 'found a root record of type `' + a.getType() + '`',
          );
        return a;
      };
      c.invalidateStore = function () {
        this.$4 = !0;
      };
      c.isStoreMarkedForInvalidation = function () {
        return this.$4;
      };
      c.markIDForInvalidation = function (a) {
        this.$5.add(a);
      };
      c.getIDsMarkedForInvalidation = function () {
        return this.$5;
      };
      c.readUpdatableQuery = function (a, b) {
        return n(a, b, this, this.$6);
      };
      c.readUpdatableFragment = function (a, b) {
        return m(a, b, this, this.$6);
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
