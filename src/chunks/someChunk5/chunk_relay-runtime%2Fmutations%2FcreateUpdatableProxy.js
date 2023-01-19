__d(
  'relay-runtime/mutations/createUpdatableProxy',
  [
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/util/RelayConcreteNode',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('relay-runtime/store/RelayStoreUtils').getArgumentValues,
      h = (c = b('relay-runtime/util/RelayConcreteNode')).ACTOR_CHANGE,
      i = c.ALIASED_FRAGMENT_SPREAD,
      j = c.ALIASED_INLINE_FRAGMENT_SPREAD,
      k = c.CLIENT_EDGE_TO_CLIENT_OBJECT,
      l = c.CLIENT_EDGE_TO_SERVER_OBJECT,
      m = c.CLIENT_EXTENSION,
      n = c.CONDITION,
      o = c.DEFER,
      p = c.FLIGHT_FIELD,
      q = c.FRAGMENT_SPREAD,
      r = c.INLINE_DATA_FRAGMENT_SPREAD,
      s = c.INLINE_FRAGMENT,
      t = c.LINKED_FIELD,
      u = c.MODULE_IMPORT,
      v = c.RELAY_LIVE_RESOLVER,
      w = c.RELAY_RESOLVER,
      x = c.REQUIRED_FIELD,
      y = c.SCALAR_FIELD,
      z = c.STREAM,
      A = ['id', '__id', '__typename', 'js'];
    function a(a, b, c, d, e) {
      var f = {};
      B(f, a, b, c, d, e);
      return f;
    }
    function B(a, b, c, d, e, f) {
      var G = function () {
        if (J) {
          if (K >= H.length) return 'break';
          L = H[K++];
        } else {
          K = H.next();
          if (K.done) return 'break';
          L = K.value;
        }
        var d = L;
        switch (d.kind) {
          case t:
            if (d.plural) {
              var G;
              Object.defineProperty(a, (G = d.alias) != null ? G : d.name, {
                get: E(d, c, b, e, f),
                set: C(d, c, b, e),
              });
            } else {
              Object.defineProperty(a, (G = d.alias) != null ? G : d.name, {
                get: F(d, c, b, e, f),
                set: D(d, c, b, e),
              });
            }
            break;
          case y:
            G = (G = d.alias) != null ? G : d.name;
            Object.defineProperty(a, G, {
              get: function () {
                var a;
                a = g((a = d.args) != null ? a : [], c);
                var h = b.getValue(d.name, a);
                h == null && (h = I(d, a, b, e, f));
                return h;
              },
              set: A.includes(d.name)
                ? void 0
                : function (a) {
                    var e;
                    e = g((e = d.args) != null ? e : [], c);
                    b.setValue__UNSAFE(a, d.name, e);
                  },
            });
            break;
          case s:
            b.getType() === d.type && B(a, b, c, d.selections, e, f);
            break;
          case m:
            B(a, b, c, d.selections, e, f);
            break;
          case q:
            break;
          case n:
          case h:
          case i:
          case r:
          case j:
          case k:
          case l:
          case o:
          case p:
          case u:
          case v:
          case x:
          case z:
          case w:
            throw new Error(
              'Encountered an unexpected ReaderSelection variant in RelayRecordSourceProxy. This indicates a bug in Relay.',
            );
          default:
            d.kind;
            throw new Error(
              'Encountered an unexpected ReaderSelection variant in RelayRecordSourceProxy. This indicates a bug in Relay.',
            );
        }
      };
      for (
        var H = d,
          J = Array.isArray(H),
          K = 0,
          H = J
            ? H
            : H[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var L;
        d = G();
        if (d === 'break') break;
      }
    }
    function C(a, b, c, d) {
      return function (e) {
        var f;
        f = g((f = a.args) != null ? f : [], b);
        if (e == null)
          throw new Error(
            'Do not assign null to plural linked fields; assign an empty array instead.',
          );
        else {
          e = e.map(function (a) {
            if (a == null)
              throw new Error(
                'When assigning an array of items, none of the items should be null or undefined.',
              );
            a = a.__id;
            if (a == null)
              throw new Error(
                'The __id field must be present on each item passed to the setter. This indicates a bug in Relay.',
              );
            var b = d.get(a);
            if (b == null)
              throw new Error(
                'Did not find item with data id ' + a + ' in the store.',
              );
            return b;
          });
          c.setLinkedRecords(e, a.name, f);
        }
      };
    }
    function D(a, b, c, d) {
      return function (e) {
        var f;
        f = g((f = a.args) != null ? f : [], b);
        if (e == null) c.setValue(e, a.name, f);
        else {
          e = e.__id;
          if (e == null)
            throw new Error(
              'The __id field must be present on the argument. This indicates a bug in Relay.',
            );
          var h = d.get(e);
          if (h == null)
            throw new Error(
              'Did not find item with data id ' + e + ' in the store.',
            );
          c.setLinkedRecord(h, a.name, f);
        }
      };
    }
    function E(a, b, c, d, e) {
      return function () {
        var f;
        f = g((f = a.args) != null ? f : [], b);
        var h = c.getLinkedRecords(a.name, f);
        h === void 0 && (h = H(a, f, c, d, e));
        if (h != null)
          return h.map(function (c) {
            if (c != null) {
              var f = {};
              B(f, c, b, a.selections, d, e);
              return f;
            } else return c;
          });
        else return h;
      };
    }
    function F(a, b, c, d, e) {
      return function () {
        var f;
        f = g((f = a.args) != null ? f : [], b);
        var h = c.getLinkedRecord(a.name, f);
        h === void 0 && (h = G(a, f, c, d, e));
        if (h != null) {
          f = {};
          B(f, h, b, a.selections, d, e);
          return f;
        } else return h;
      };
    }
    function G(a, b, c, d, e) {
      for (
        var e = e,
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
        if (h.kind === 'linked') {
          h = h.handle(a, c, b, d);
          if (h != null) return d.get(h);
        }
      }
    }
    function H(a, b, c, d, e) {
      for (
        var e = e,
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
          h = h.handle(a, c, b, d);
          if (h != null)
            return h.map(function (a) {
              if (a != null) return d.get(a);
            });
        }
      }
    }
    function I(a, b, c, d, e) {
      for (
        var e = e,
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
        if (h.kind === 'scalar') {
          h = h.handle(a, c, b, d);
          if (h !== void 0) return h;
        }
      }
    }
    e.exports = { createUpdatableProxy: a };
  },
  null,
);
