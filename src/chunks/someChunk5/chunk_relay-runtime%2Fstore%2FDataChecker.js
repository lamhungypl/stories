__d(
  'relay-runtime/store/DataChecker',
  [
    'invariant',
    'relay-runtime/mutations/RelayRecordSourceMutator',
    'relay-runtime/mutations/RelayRecordSourceProxy',
    'relay-runtime/store/ClientID',
    'relay-runtime/store/RelayConcreteVariables',
    'relay-runtime/store/RelayModernRecord',
    'relay-runtime/store/RelayRecordState',
    'relay-runtime/store/RelayStoreReactFlightUtils',
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/store/TypeID',
    'relay-runtime/store/cloneRelayHandleSourceField',
    'relay-runtime/store/cloneRelayScalarHandleSourceField',
    'relay-runtime/util/RelayConcreteNode',
    'relay-runtime/util/RelayFeatureFlags',
    'relay-runtime/util/getOperation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = b('relay-runtime/store/ClientID').isClientID,
      j = b('relay-runtime/store/RelayConcreteVariables').getLocalVariables,
      k = b('relay-runtime/store/RelayRecordState').EXISTENT,
      l = b('relay-runtime/store/RelayRecordState').UNKNOWN,
      m = b('relay-runtime/store/TypeID').generateTypeID,
      n = b('relay-runtime/store/TypeID').TYPE_SCHEMA_TYPE,
      o = (c = b('relay-runtime/util/RelayConcreteNode')).ACTOR_CHANGE,
      p = c.CONDITION,
      q = c.CLIENT_COMPONENT,
      r = c.CLIENT_EXTENSION,
      s = c.DEFER,
      t = c.FLIGHT_FIELD,
      u = c.FRAGMENT_SPREAD,
      v = c.INLINE_FRAGMENT,
      w = c.LINKED_FIELD,
      x = c.LINKED_HANDLE,
      y = c.MODULE_IMPORT,
      z = c.RELAY_RESOLVER,
      A = c.SCALAR_FIELD,
      B = c.SCALAR_HANDLE,
      C = c.STREAM,
      D = c.TYPE_DISCRIMINATOR,
      E = (d = b('relay-runtime/store/RelayStoreUtils')).ROOT_ID,
      F = d.getModuleOperationKey,
      G = d.getStorageKey,
      H = d.getArgumentValues;
    function a(a, b, c, d, e, f, g, h) {
      var i = d.dataID,
        j = d.node;
      d = d.variables;
      a = new I(a, b, c, d, e, f, g, h);
      return a.check(j, i);
    }
    var I = (function () {
      function a(a, b, c, d, e, f, g, h) {
        this.$11 = a;
        this.$12 = b;
        this.$13 = g;
        this.$8 = a(c);
        this.$14 = new Map();
        b = this.$15(c);
        g = b[0];
        a = b[1];
        this.$2 = null;
        this.$1 = e;
        this.$3 = g;
        this.$4 = (c = f) != null ? c : null;
        this.$6 = a;
        this.$7 = !1;
        this.$9 = d;
        this.$10 = h;
      }
      var c = a.prototype;
      c.$15 = function (a) {
        var c = this.$14.get(a);
        if (c == null) {
          var d = this.$12(a);
          d = new (b('relay-runtime/mutations/RelayRecordSourceMutator'))(
            this.$11(a),
            d,
          );
          var e = new (b('relay-runtime/mutations/RelayRecordSourceProxy'))(
            d,
            this.$13,
            void 0,
            this.$1,
          );
          c = [d, e];
          this.$14.set(a, c);
        }
        return c;
      };
      c.check = function (a, b) {
        this.$16(a);
        this.$17(a, b);
        return this.$7 === !0
          ? { status: 'missing', mostRecentlyInvalidatedAt: this.$2 }
          : { status: 'available', mostRecentlyInvalidatedAt: this.$2 };
      };
      c.$18 = function (a) {
        Object.prototype.hasOwnProperty.call(this.$9, a) || g(0, 2044, a);
        return this.$9[a];
      };
      c.$19 = function () {
        this.$7 = !0;
      };
      c.$20 = function (a, b) {
        if (a.name === 'id' && a.alias == null && i(b)) return void 0;
        var c = a.args != void 0 ? H(a.args, this.$9) : {};
        for (
          var d = this.$1,
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          if (g.kind === 'scalar') {
            g = g.handle(a, this.$6.get(b), c, this.$6);
            if (g !== void 0) return g;
          }
        }
        this.$19();
      };
      c.$21 = function (a, b) {
        var c = a.args != void 0 ? H(a.args, this.$9) : {};
        for (
          var d = this.$1,
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          if (g.kind === 'linked') {
            g = g.handle(a, this.$6.get(b), c, this.$6);
            if (g !== void 0 && (g === null || this.$3.getStatus(g) === k))
              return g;
          }
        }
        this.$19();
      };
      c.$22 = function (a, b) {
        var c = this,
          d = a.args != void 0 ? H(a.args, this.$9) : {};
        for (
          var e = this.$1,
            f = Array.isArray(e),
            g = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var h;
          if (f) {
            if (g >= e.length) break;
            h = e[g++];
          } else {
            g = e.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          if (h.kind === 'pluralLinked') {
            h = h.handle(a, this.$6.get(b), d, this.$6);
            if (h != null) {
              var i = h.every(function (a) {
                return a != null && c.$3.getStatus(a) === k;
              });
              if (i) return h;
            } else if (h === null) return null;
          }
        }
        this.$19();
      };
      c.$17 = function (a, c) {
        var d = this.$3.getStatus(c);
        d === l && this.$19();
        if (d === k) {
          d = this.$8.get(c);
          d = (
            h || (h = b('relay-runtime/store/RelayModernRecord'))
          ).getInvalidationEpoch(d);
          d != null && (this.$2 = this.$2 != null ? Math.max(this.$2, d) : d);
          this.$23(a.selections, c);
        }
      };
      c.$23 = function (a, c) {
        var d = this;
        a.forEach(function (e) {
          switch (e.kind) {
            case A:
              d.$24(e, c);
              break;
            case w:
              e.plural ? d.$25(e, c) : d.$26(e, c);
              break;
            case o:
              d.$27(e.linkedField, c);
              break;
            case p:
              var f = Boolean(d.$18(e.condition));
              f === e.passingValue && d.$23(e.selections, c);
              break;
            case v:
              f = e.abstractKey;
              if (f == null) {
                var h = d.$3.getType(c);
                h === e.type && d.$23(e.selections, c);
              } else {
                h = d.$3.getType(c);
                h != null || g(0, 22686, c);
                h = m(h);
                h = d.$3.getValue(h, f);
                h === !0 ? d.$23(e.selections, c) : h == null && d.$19();
              }
              break;
            case x:
              f = b('relay-runtime/store/cloneRelayHandleSourceField')(
                e,
                a,
                d.$9,
              );
              f.plural ? d.$25(f, c) : d.$26(f, c);
              break;
            case B:
              h = b('relay-runtime/store/cloneRelayScalarHandleSourceField')(
                e,
                a,
                d.$9,
              );
              d.$24(h, c);
              break;
            case y:
              d.$28(e, c);
              break;
            case s:
            case C:
              d.$23(e.selections, c);
              break;
            case u:
              f = d.$9;
              d.$9 = j(d.$9, e.fragment.argumentDefinitions, e.args);
              d.$23(e.fragment.selections, c);
              d.$9 = f;
              break;
            case r:
              h = d.$7;
              d.$23(e.selections, c);
              d.$7 = h;
              break;
            case D:
              f = e.abstractKey;
              h = d.$3.getType(c);
              h != null || g(0, 22686, c);
              h = m(h);
              h = d.$3.getValue(h, f);
              h == null && d.$19();
              break;
            case t:
              if (
                b('relay-runtime/util/RelayFeatureFlags')
                  .ENABLE_REACT_FLIGHT_COMPONENT_FIELD
              )
                d.$29(e, c);
              else throw new Error('Flight fields are not yet supported.');
              break;
            case q:
              if (d.$10 === !1) break;
              d.$23(e.fragment.selections, c);
              break;
            case z:
              e.fragment && d.$23([e.fragment], c);
              break;
            default:
              e, g(0, 2045, e.kind);
          }
        });
      };
      c.$28 = function (a, c) {
        var d = this.$4;
        d !== null || g(0, 13642);
        var e = F(a.documentName);
        e = this.$3.getValue(c, e);
        if (e == null) {
          e === void 0 && this.$19();
          return;
        }
        d = d.get(e);
        if (d != null) {
          e = b('relay-runtime/util/getOperation')(d);
          d = this.$9;
          this.$9 = j(this.$9, e.argumentDefinitions, a.args);
          this.$17(e, c);
          this.$9 = d;
        } else this.$19();
      };
      c.$24 = function (a, b) {
        var c = G(a, this.$9),
          d = this.$3.getValue(b, c);
        d === void 0 &&
          ((d = this.$20(a, b)), d !== void 0 && this.$3.setValue(b, c, d));
      };
      c.$26 = function (a, b) {
        var c = G(a, this.$9),
          d = this.$3.getLinkedRecordID(b, c);
        d === void 0 &&
          ((d = this.$21(a, b)),
          d != null
            ? this.$3.setLinkedRecordID(b, c, d)
            : d === null && this.$3.setValue(b, c, null));
        d != null && this.$17(a, d);
      };
      c.$25 = function (a, b) {
        var c = this,
          d = G(a, this.$9),
          e = this.$3.getLinkedRecordIDs(b, d);
        e === void 0 &&
          ((e = this.$22(a, b)),
          e != null
            ? this.$3.setLinkedRecordIDs(b, d, e)
            : e === null && this.$3.setValue(b, d, null));
        e &&
          e.forEach(function (b) {
            b != null && c.$17(a, b);
          });
      };
      c.$27 = function (a, c) {
        var d = G(a, this.$9);
        c = this.$8.get(c);
        d =
          c != null
            ? (
                h || (h = b('relay-runtime/store/RelayModernRecord'))
              ).getActorLinkedRecordID(c, d)
            : c;
        if (d == null) d === void 0 && this.$19();
        else {
          c = d[0];
          d = d[1];
          var e = this.$8,
            f = this.$3,
            g = this.$6,
            i = this.$15(c),
            j = i[0];
          i = i[1];
          this.$8 = this.$11(c);
          this.$3 = j;
          this.$6 = i;
          this.$16(a);
          this.$17(a, d);
          this.$8 = e;
          this.$3 = f;
          this.$6 = g;
        }
      };
      c.$29 = function (a, c) {
        a = G(a, this.$9);
        c = this.$3.getLinkedRecordID(c, a);
        if (c == null) {
          if (c === void 0) {
            this.$19();
            return;
          }
          return;
        }
        a = this.$3.getValue(
          c,
          b('relay-runtime/store/RelayStoreReactFlightUtils')
            .REACT_FLIGHT_TREE_STORAGE_KEY,
        );
        c = this.$3.getValue(
          c,
          b('relay-runtime/store/RelayStoreReactFlightUtils')
            .REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY,
        );
        if (a == null || !Array.isArray(c)) {
          this.$19();
          return;
        }
        a = this.$4;
        a !== null || g(0, 23899);
        var d = this.$9;
        for (
          var c = c,
            e = Array.isArray(c),
            f = 0,
            c = e
              ? c
              : c[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var h;
          if (e) {
            if (f >= c.length) break;
            h = c[f++];
          } else {
            f = c.next();
            if (f.done) break;
            h = f.value;
          }
          h = h;
          this.$9 = h.variables;
          h = a.get(h.module);
          if (h != null) {
            h = b('relay-runtime/util/getOperation')(h);
            this.$23(h.selections, E);
          } else this.$19();
        }
        this.$9 = d;
      };
      c.$16 = function (a) {
        a = a.clientAbstractTypes;
        if (a != null) {
          var b = Object.keys(a);
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            for (
              var e = a[d],
                f = Array.isArray(e),
                g = 0,
                e = f
                  ? e
                  : e[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var h;
              if (f) {
                if (g >= e.length) break;
                h = e[g++];
              } else {
                g = e.next();
                if (g.done) break;
                h = g.value;
              }
              h = h;
              h = m(h);
              this.$8.get(h) == null && this.$3.create(h, n);
              this.$3.getValue(h, d) == null && this.$3.setValue(h, d, !0);
            }
          }
        }
      };
      return a;
    })();
    e.exports = { check: a };
  },
  null,
);
