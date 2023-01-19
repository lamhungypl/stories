__d(
  'relay-runtime/mutations/RelayRecordProxy',
  [
    'invariant',
    'relay-runtime/store/ClientID',
    'relay-runtime/store/RelayStoreUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime/store/ClientID').generateClientID,
      i = b('relay-runtime/store/RelayStoreUtils').getStableStorageKey;
    a = (function () {
      function a(a, b, c) {
        (this.$1 = c), (this.$2 = b), (this.$3 = a);
      }
      var b = a.prototype;
      b.copyFieldsFrom = function (a) {
        this.$2.copyFields(a.getDataID(), this.$1);
      };
      b.getDataID = function () {
        return this.$1;
      };
      b.getType = function () {
        var a = this.$2.getType(this.$1);
        a != null || g(0, 4314, this.$1);
        return a;
      };
      b.getValue = function (a, b) {
        a = i(a, b);
        return this.$2.getValue(this.$1, a);
      };
      b.setValue = function (a, b, c) {
        j(a) || g(0, 4315, JSON.stringify(a));
        return this.setValue__UNSAFE(a, b, c);
      };
      b.setValue__UNSAFE = function (a, b, c) {
        b = i(b, c);
        this.$2.setValue(this.$1, b, a);
        return this;
      };
      b.getLinkedRecord = function (a, b) {
        a = i(a, b);
        b = this.$2.getLinkedRecordID(this.$1, a);
        return b != null ? this.$3.get(b) : b;
      };
      b.setLinkedRecord = function (b, c, d) {
        b instanceof a || g(0, 4316, b);
        c = i(c, d);
        d = b.getDataID();
        this.$2.setLinkedRecordID(this.$1, c, d);
        return this;
      };
      b.getOrCreateLinkedRecord = function (a, b, c) {
        var d = this.getLinkedRecord(a, c);
        if (!d) {
          var e,
            f = i(a, c);
          f = h(this.getDataID(), f);
          d = (e = this.$3.get(f)) != null ? e : this.$3.create(f, b);
          this.setLinkedRecord(d, a, c);
        }
        return d;
      };
      b.getLinkedRecords = function (a, b) {
        var c = this;
        a = i(a, b);
        b = this.$2.getLinkedRecordIDs(this.$1, a);
        return b == null
          ? b
          : b.map(function (a) {
              return a != null ? c.$3.get(a) : a;
            });
      };
      b.setLinkedRecords = function (a, b, c) {
        Array.isArray(a) || g(0, 4317, a);
        b = i(b, c);
        c = a.map(function (a) {
          return a && a.getDataID();
        });
        this.$2.setLinkedRecordIDs(this.$1, b, c);
        return this;
      };
      b.invalidateRecord = function () {
        this.$3.markIDForInvalidation(this.$1);
      };
      return a;
    })();
    function j(a) {
      return (
        a == null || typeof a !== 'object' || (Array.isArray(a) && a.every(j))
      );
    }
    e.exports = a;
  },
  null,
);
