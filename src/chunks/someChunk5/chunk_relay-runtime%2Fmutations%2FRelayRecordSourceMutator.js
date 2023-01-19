__d(
  'relay-runtime/mutations/RelayRecordSourceMutator',
  [
    'invariant',
    'relay-runtime/store/RelayModernRecord',
    'relay-runtime/store/RelayRecordState',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = b('relay-runtime/store/RelayRecordState').EXISTENT;
    a = (function () {
      function a(a, b) {
        (this.__sources = [b, a]), (this.$1 = a), (this.$2 = b);
      }
      var c = a.prototype;
      c.unstable_getRawRecordWithChanges = function (a) {
        var c = this.$1.get(a);
        a = this.$2.get(a);
        if (a === void 0) {
          if (c == null) return c;
          var d = (h || (h = b('relay-runtime/store/RelayModernRecord'))).clone(
            c,
          );
          return d;
        } else if (a === null) return null;
        else if (c != null) {
          d = (h || (h = b('relay-runtime/store/RelayModernRecord'))).update(
            c,
            a,
          );
          return d;
        } else {
          c = (h || (h = b('relay-runtime/store/RelayModernRecord'))).clone(a);
          return c;
        }
      };
      c.$3 = function (a) {
        var c = this.$2.get(a);
        if (!c) {
          var d = this.$1.get(a);
          d || g(0, 977, a);
          c = (h || (h = b('relay-runtime/store/RelayModernRecord'))).create(
            a,
            h.getType(d),
          );
          this.$2.set(a, c);
        }
        return c;
      };
      c.copyFields = function (a, c) {
        var d = this.$2.get(a),
          e = this.$1.get(a);
        d || e || g(0, 978, a);
        a = this.$3(c);
        e &&
          (h || (h = b('relay-runtime/store/RelayModernRecord'))).copyFields(
            e,
            a,
          );
        d &&
          (h || (h = b('relay-runtime/store/RelayModernRecord'))).copyFields(
            d,
            a,
          );
      };
      c.copyFieldsFromRecord = function (a, c) {
        c = this.$3(c);
        (h || (h = b('relay-runtime/store/RelayModernRecord'))).copyFields(
          a,
          c,
        );
      };
      c.create = function (a, c) {
        (this.$1.getStatus(a) !== i && this.$2.getStatus(a) !== i) ||
          g(0, 979, a);
        c = (h || (h = b('relay-runtime/store/RelayModernRecord'))).create(
          a,
          c,
        );
        this.$2.set(a, c);
      };
      c['delete'] = function (a) {
        this.$2['delete'](a);
      };
      c.getStatus = function (a) {
        return this.$2.has(a) ? this.$2.getStatus(a) : this.$1.getStatus(a);
      };
      c.getType = function (a) {
        for (var c = 0; c < this.__sources.length; c++) {
          var d = this.__sources[c].get(a);
          if (d)
            return (
              h || (h = b('relay-runtime/store/RelayModernRecord'))
            ).getType(d);
          else if (d === null) return null;
        }
      };
      c.getValue = function (a, c) {
        for (var d = 0; d < this.__sources.length; d++) {
          var e = this.__sources[d].get(a);
          if (e) {
            var f = (
              h || (h = b('relay-runtime/store/RelayModernRecord'))
            ).getValue(e, c);
            if (f !== void 0) return f;
          } else if (e === null) return null;
        }
      };
      c.setValue = function (a, c, d) {
        a = this.$3(a);
        (h || (h = b('relay-runtime/store/RelayModernRecord'))).setValue(
          a,
          c,
          d,
        );
      };
      c.getLinkedRecordID = function (a, c) {
        for (var d = 0; d < this.__sources.length; d++) {
          var e = this.__sources[d].get(a);
          if (e) {
            var f = (
              h || (h = b('relay-runtime/store/RelayModernRecord'))
            ).getLinkedRecordID(e, c);
            if (f !== void 0) return f;
          } else if (e === null) return null;
        }
      };
      c.setLinkedRecordID = function (a, c, d) {
        a = this.$3(a);
        (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).setLinkedRecordID(a, c, d);
      };
      c.getLinkedRecordIDs = function (a, c) {
        for (var d = 0; d < this.__sources.length; d++) {
          var e = this.__sources[d].get(a);
          if (e) {
            var f = (
              h || (h = b('relay-runtime/store/RelayModernRecord'))
            ).getLinkedRecordIDs(e, c);
            if (f !== void 0) return f;
          } else if (e === null) return null;
        }
      };
      c.setLinkedRecordIDs = function (a, c, d) {
        a = this.$3(a);
        (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).setLinkedRecordIDs(a, c, d);
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
