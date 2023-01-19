__d(
  'react-relay/relay-hooks/QueryResource',
  [
    'invariant',
    'Promise',
    'react-relay/relay-hooks/LRUCache',
    'react-relay/relay-hooks/SuspenseResource',
    'relay-runtime',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime').isPromise,
      i = 1e3,
      j = 'store-or-network',
      k = 'store-and-network';
    c = typeof WeakMap === 'function';
    function l(a) {
      return a.request.node.params.metadata.live !== void 0;
    }
    function m(a, b, c, d, e) {
      c = (c = c) != null ? c : l(b) ? k : j;
      d = (d = d) != null ? d : a.UNSTABLE_getDefaultRenderPolicy();
      a = c + '-' + d + '-' + b.request.identifier;
      return e != null ? a + '-' + e : a;
    }
    function n(a, b) {
      var c;
      c = {
        __id: a.fragment.dataID,
        __fragments:
          ((c = {}), (c[a.fragment.node.name] = a.request.variables), c),
        __fragmentOwner: a.request,
      };
      return {
        cacheIdentifier: b,
        fragmentNode: a.request.node.fragment,
        fragmentRef: c,
        operation: a,
      };
    }
    var o = 2e5;
    function p(a, c, d, e, f, g) {
      var h = l(c),
        i = e,
        j = f,
        k = new (b('react-relay/relay-hooks/SuspenseResource'))(function (a) {
          var b = a.retain(c);
          return {
            dispose: function () {
              h && j != null && j.unsubscribe(), b.dispose(), g(m);
            },
          };
        }),
        m = {
          cacheIdentifier: a,
          id: o++,
          processedPayloadsCount: 0,
          operationAvailability: d,
          getValue: function () {
            return i;
          },
          setValue: function (a) {
            i = a;
          },
          setNetworkSubscription: function (a) {
            h && j != null && j.unsubscribe(), (j = a);
          },
          temporaryRetain: function (a) {
            return k.temporaryRetain(a);
          },
          permanentRetain: function (a) {
            return k.permanentRetain(a);
          },
          releaseTemporaryRetain: function () {
            k.releaseTemporaryRetain();
          },
        };
      return m;
    }
    var q = (function () {
      function a(a) {
        var c = this;
        this.$5 = function (a) {
          c.$2['delete'](a.cacheIdentifier);
        };
        this.$1 = a;
        this.$2 = b('react-relay/relay-hooks/LRUCache').create(i);
      }
      var c = a.prototype;
      c.prepare = function (a, b, c, d, e, f, g) {
        f = m(this.$1, a, c, d, f);
        return this.prepareWithIdentifier(f, a, b, c, d, e, g);
      };
      c.prepareWithIdentifier = function (a, b, c, d, e, f, g) {
        var i = this.$1;
        d = (d = d) != null ? d : l(b) ? k : j;
        e = (e = e) != null ? e : i.UNSTABLE_getDefaultRenderPolicy();
        var m = this.$2.get(a),
          n = null,
          o = m != null;
        m == null &&
          (m = this.$3(
            a,
            b,
            c,
            d,
            e,
            g,
            babelHelpers['extends']({}, f, {
              unsubscribe: function (a) {
                n != null && n.dispose();
                var b = f == null ? void 0 : f.unsubscribe;
                b && b(a);
              },
            }),
          ));
        n = m.temporaryRetain(i);
        a = m.getValue();
        if (h(a)) {
          i.__log({
            name: 'suspense.query',
            fetchPolicy: d,
            isPromiseCached: o,
            operation: b,
            queryAvailability: m.operationAvailability,
            renderPolicy: e,
          });
          throw a;
        }
        if (a instanceof Error) throw a;
        return a;
      };
      c.retain = function (a, b) {
        var c = this.$1,
          d = a.cacheIdentifier,
          e = a.operation;
        d = this.$4(d, e, null, a, null);
        var f = d.permanentRetain(c);
        c.__log({
          name: 'queryresource.retain',
          profilerContext: b,
          resourceID: d.id,
        });
        return {
          dispose: function () {
            f.dispose();
          },
        };
      };
      c.releaseTemporaryRetain = function (a) {
        a = this.$2.get(a.cacheIdentifier);
        a != null && a.releaseTemporaryRetain();
      };
      c.TESTS_ONLY__getCacheEntry = function (a, b, c, d) {
        var e = this.$1;
        e = m(e, a, b, c, d);
        return this.$2.get(e);
      };
      c.$4 = function (a, b, c, d, e) {
        var f = this.$2.get(a);
        f == null && ((f = p(a, b, c, d, e, this.$5)), this.$2.set(a, f));
        return f;
      };
      c.$3 = function (a, c, d, e, f, h, i) {
        var j = this,
          k = this.$1,
          m = k.check(c),
          o = m.status,
          q = o === 'available';
        o = q || (f === 'partial' && o !== 'stale');
        var r,
          s,
          t = function () {};
        switch (e) {
          case 'store-only':
            r = !1;
            s = !0;
            break;
          case 'store-or-network':
            r = !q;
            s = o;
            break;
          case 'store-and-network':
            r = !0;
            s = o;
            break;
          case 'network-only':
          default:
            r = !0;
            s = !1;
            break;
        }
        if (s) {
          q = n(c, a);
          o = p(a, c, m, q, null, this.$5);
          this.$2.set(a, o);
        }
        if (r) {
          var u = n(c, a),
            v;
          d.subscribe({
            start: function (b) {
              v = b;
              var d = j.$2.get(a);
              d && d.setNetworkSubscription(v);
              d = i == null ? void 0 : i.start;
              if (d) {
                var e = babelHelpers['extends']({}, b, {
                  unsubscribe: function () {
                    l(c) && b.unsubscribe();
                  },
                });
                d(e);
              }
            },
            next: function () {
              var b = j.$4(a, c, m, u, v);
              b.processedPayloadsCount += 1;
              b.setValue(u);
              t();
              b = i == null ? void 0 : i.next;
              if (b != null) {
                var d = k.lookup(c.fragment);
                b(d);
              }
            },
            error: function (d) {
              var e = j.$4(a, c, m, d, v);
              e.processedPayloadsCount === 0
                ? e.setValue(d)
                : b('warning')(
                    !1,
                    'QueryResource: An incremental payload for query `%s` returned an error: `%s`.',
                    c.fragment.node.name,
                    String(d.message),
                  );
              t();
              v = null;
              e.setNetworkSubscription(null);
              e = i == null ? void 0 : i.error;
              e && e(d);
            },
            complete: function () {
              t();
              v = null;
              var b = j.$2.get(a);
              b && b.setNetworkSubscription(null);
              b = i == null ? void 0 : i.complete;
              b && b();
            },
            unsubscribe: i == null ? void 0 : i.unsubscribe,
          });
          q = this.$2.get(a);
          if (!q) {
            o = new (b('Promise'))(function (a) {
              t = a;
            });
            o.displayName = 'Relay(' + c.fragment.node.name + ')';
            q = p(a, c, m, o, v, this.$5);
            this.$2.set(a, q);
          }
        } else {
          d = i == null ? void 0 : i.complete;
          d && d();
        }
        o = this.$2.get(a);
        o != null || g(0, 13816);
        k.__log({
          name: 'queryresource.fetch',
          resourceID: o.id,
          operation: c,
          profilerContext: h,
          fetchPolicy: e,
          renderPolicy: f,
          queryAvailability: m,
          shouldFetch: r,
        });
        return o;
      };
      return a;
    })();
    function r(a) {
      return new q(a);
    }
    var s = c ? new WeakMap() : new Map();
    function a(a) {
      var b = s.get(a);
      if (b) return b;
      b = r(a);
      s.set(a, b);
      return b;
    }
    e.exports = {
      createQueryResource: r,
      getQueryResourceForEnvironment: a,
      getQueryCacheIdentifier: m,
    };
  },
  null,
);
