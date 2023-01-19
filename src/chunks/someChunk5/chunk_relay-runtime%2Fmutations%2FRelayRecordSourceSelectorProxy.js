__d(
  'relay-runtime/mutations/RelayRecordSourceSelectorProxy',
  [
    'invariant',
    'relay-runtime/mutations/readUpdatableFragment',
    'relay-runtime/mutations/readUpdatableQuery',
    'relay-runtime/store/RelayStoreUtils',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime/store/RelayStoreUtils').ROOT_TYPE,
      i = b('relay-runtime/store/RelayStoreUtils').getStorageKey,
      j = b(
        'relay-runtime/mutations/readUpdatableFragment',
      ).readUpdatableFragment,
      k = b('relay-runtime/mutations/readUpdatableQuery').readUpdatableQuery;
    a = (function () {
      function a(a, b, c, d) {
        (this.__mutator = a),
          (this.__recordSource = b),
          (this.$1 = c),
          (this.$2 = d);
      }
      var b = a.prototype;
      b.create = function (a, b) {
        return this.__recordSource.create(a, b);
      };
      b['delete'] = function (a) {
        this.__recordSource['delete'](a);
      };
      b.get = function (a) {
        return this.__recordSource.get(a);
      };
      b.getRoot = function () {
        return this.__recordSource.getRoot();
      };
      b.getOperationRoot = function () {
        var a = this.__recordSource.get(this.$1.dataID);
        a || (a = this.__recordSource.create(this.$1.dataID, h));
        return a;
      };
      b.$3 = function (a, b, c) {
        var d = a.node.selections.find(function (a) {
          return (
            (a.kind === 'LinkedField' && a.name === b) ||
            (a.kind === 'RequiredField' && a.field.name === b)
          );
        });
        d && d.kind === 'RequiredField' && (d = d.field);
        (d && d.kind === 'LinkedField') || g(0, 1951, b, a.node.name);
        d.plural === c || g(0, 1952, b, c ? 'plural' : 'singular');
        return d;
      };
      b.getRootField = function (a) {
        a = this.$3(this.$1, a, !1);
        a = i(a, this.$1.variables);
        return this.getOperationRoot().getLinkedRecord(a);
      };
      b.getPluralRootField = function (a) {
        a = this.$3(this.$1, a, !0);
        a = i(a, this.$1.variables);
        return this.getOperationRoot().getLinkedRecords(a);
      };
      b.invalidateStore = function () {
        this.__recordSource.invalidateStore();
      };
      b.readUpdatableQuery = function (a, b) {
        return k(a, b, this, this.$2);
      };
      b.readUpdatableFragment = function (a, b) {
        return j(a, b, this, this.$2);
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
