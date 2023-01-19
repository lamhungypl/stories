__d(
  'relay-runtime/store/RelayReferenceMarker',
  [
    'invariant',
    'relay-runtime/store/RelayConcreteVariables',
    'relay-runtime/store/RelayModernRecord',
    'relay-runtime/store/RelayStoreReactFlightUtils',
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/store/TypeID',
    'relay-runtime/store/cloneRelayHandleSourceField',
    'relay-runtime/store/experimental-live-resolvers/getOutputTypeRecordIDs',
    'relay-runtime/util/RelayConcreteNode',
    'relay-runtime/util/RelayFeatureFlags',
    'relay-runtime/util/getOperation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = b('relay-runtime/store/RelayConcreteVariables').getLocalVariables,
      j = b('relay-runtime/store/TypeID').generateTypeID,
      k = (c = b('relay-runtime/util/RelayConcreteNode')).ACTOR_CHANGE,
      l = c.CONDITION,
      m = c.CLIENT_COMPONENT,
      n = c.CLIENT_EXTENSION,
      o = c.DEFER,
      p = c.FLIGHT_FIELD,
      q = c.FRAGMENT_SPREAD,
      r = c.INLINE_FRAGMENT,
      s = c.LINKED_FIELD,
      t = c.MODULE_IMPORT,
      u = c.LINKED_HANDLE,
      v = c.SCALAR_FIELD,
      w = c.SCALAR_HANDLE,
      x = c.STREAM,
      y = c.TYPE_DISCRIMINATOR,
      z = c.RELAY_RESOLVER,
      A = b('relay-runtime/store/RelayStoreUtils').ROOT_ID,
      B = b('relay-runtime/store/RelayStoreUtils').getStorageKey,
      C = b('relay-runtime/store/RelayStoreUtils').getModuleOperationKey;
    function a(a, b, c, d, e) {
      var f = b.dataID,
        g = b.node;
      b = b.variables;
      a = new D(a, b, c, d, e);
      a.mark(g, f);
    }
    var D = (function () {
      function a(a, b, c, d, e) {
        this.$1 = (d = d) != null ? d : null;
        this.$2 = null;
        this.$3 = a;
        this.$4 = c;
        this.$5 = b;
        this.$6 = e;
      }
      var c = a.prototype;
      c.mark = function (a, b) {
        (a.kind === 'Operation' || a.kind === 'SplitOperation') &&
          (this.$2 = a.name),
          this.$7(a, b);
      };
      c.$7 = function (a, b) {
        this.$4.add(b);
        b = this.$3.get(b);
        if (b == null) return;
        this.$8(a.selections, b);
      };
      c.$9 = function (a) {
        Object.prototype.hasOwnProperty.call(this.$5, a) || g(0, 5170, a);
        return this.$5[a];
      };
      c.$8 = function (a, c) {
        var d = this;
        a.forEach(function (e) {
          switch (e.kind) {
            case k:
              d.$10(e.linkedField, c);
              break;
            case s:
              e.plural ? d.$11(e, c) : d.$10(e, c);
              break;
            case l:
              var f = Boolean(d.$9(e.condition));
              f === e.passingValue && d.$8(e.selections, c);
              break;
            case r:
              if (e.abstractKey == null) {
                f = (
                  h || (h = b('relay-runtime/store/RelayModernRecord'))
                ).getType(c);
                ((f != null && f === e.type) ||
                  f === b('relay-runtime/store/RelayStoreUtils').ROOT_TYPE) &&
                  d.$8(e.selections, c);
              } else {
                f = (
                  h || (h = b('relay-runtime/store/RelayModernRecord'))
                ).getType(c);
                f = j(f);
                d.$4.add(f);
                d.$8(e.selections, c);
              }
              break;
            case q:
              f = d.$5;
              d.$5 = i(d.$5, e.fragment.argumentDefinitions, e.args);
              d.$8(e.fragment.selections, c);
              d.$5 = f;
              break;
            case u:
              f = b('relay-runtime/store/cloneRelayHandleSourceField')(
                e,
                a,
                d.$5,
              );
              f.plural ? d.$11(f, c) : d.$10(f, c);
              break;
            case o:
            case x:
              d.$8(e.selections, c);
              break;
            case v:
            case w:
              break;
            case y:
              f = (
                h || (h = b('relay-runtime/store/RelayModernRecord'))
              ).getType(c);
              f = j(f);
              d.$4.add(f);
              break;
            case t:
              d.$12(e, c);
              break;
            case n:
              d.$8(e.selections, c);
              break;
            case p:
              if (
                b('relay-runtime/util/RelayFeatureFlags')
                  .ENABLE_REACT_FLIGHT_COMPONENT_FIELD
              )
                d.$13(e, c);
              else throw new Error('Flight fields are not yet supported.');
              break;
            case m:
              if (d.$6 === !1) break;
              d.$8(e.fragment.selections, c);
              break;
            case z:
              d.$14(e, c);
              break;
            default:
              e, g(0, 5172, e);
          }
        });
      };
      c.$14 = function (a, c) {
        var d = B(a, this.$5);
        d = (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).getLinkedRecordID(c, d);
        if (d != null) {
          this.$4.add(d);
          d = this.$3.get(d);
          if (d != null) {
            d = b(
              'relay-runtime/store/experimental-live-resolvers/getOutputTypeRecordIDs',
            )(d);
            if (d != null)
              for (
                var d = d,
                  e = Array.isArray(d),
                  f = 0,
                  d = e
                    ? d
                    : d[
                        typeof Symbol === 'function'
                          ? Symbol.iterator
                          : '@@iterator'
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
                this.$4.add(g);
              }
          }
        }
        g = a.fragment;
        g != null && this.$8([g], c);
      };
      c.$12 = function (a, c) {
        var d,
          e = this.$1;
        e !== null ||
          g(0, 23904, a.fragmentName, (d = this.$2) != null ? d : '(unknown)');
        d = C(a.documentName);
        d = (h || (h = b('relay-runtime/store/RelayModernRecord'))).getValue(
          c,
          d,
        );
        if (d == null) return;
        e = e.get(d);
        if (e != null) {
          d = b('relay-runtime/util/getOperation')(e);
          e = this.$5;
          this.$5 = i(this.$5, d.argumentDefinitions, a.args);
          this.$8(d.selections, c);
          this.$5 = e;
        }
      };
      c.$10 = function (a, c) {
        var d = B(a, this.$5);
        c = (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).getLinkedRecordID(c, d);
        if (c == null) return;
        this.$7(a, c);
      };
      c.$11 = function (a, c) {
        var d = this,
          e = B(a, this.$5);
        c = (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).getLinkedRecordIDs(c, e);
        if (c == null) return;
        c.forEach(function (b) {
          b != null && d.$7(a, b);
        });
      };
      c.$13 = function (a, c) {
        a = B(a, this.$5);
        c = (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).getLinkedRecordID(c, a);
        if (c == null) return;
        this.$4.add(c);
        a = this.$3.get(c);
        if (a == null) return;
        c = h.getValue(
          a,
          b('relay-runtime/store/RelayStoreReactFlightUtils')
            .REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY,
        );
        if (!Array.isArray(c)) return;
        a = this.$1;
        a !== null || g(0, 23917);
        var d = this.$5;
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
          var i;
          if (e) {
            if (f >= c.length) break;
            i = c[f++];
          } else {
            f = c.next();
            if (f.done) break;
            i = f.value;
          }
          i = i;
          this.$5 = i.variables;
          i = i.module;
          i = a.get(i);
          if (i != null) {
            i = b('relay-runtime/util/getOperation')(i);
            this.$7(i, A);
          }
        }
        this.$5 = d;
      };
      return a;
    })();
    e.exports = { mark: a };
  },
  null,
);
