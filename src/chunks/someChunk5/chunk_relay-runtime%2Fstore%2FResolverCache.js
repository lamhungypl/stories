__d(
  'relay-runtime/store/ResolverCache',
  [
    'invariant',
    'relay-runtime/store/ClientID',
    'relay-runtime/store/RelayModernRecord',
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/util/RelayConcreteNode',
    'relay-runtime/util/recycleNodesInto',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = b('relay-runtime/util/RelayConcreteNode').RELAY_LIVE_RESOLVER,
      j = b('relay-runtime/store/ClientID').generateClientID,
      k = (a = b('relay-runtime/store/RelayStoreUtils'))
        .RELAY_RESOLVER_ERROR_KEY,
      l = a.RELAY_RESOLVER_INVALIDATION_KEY,
      m = a.RELAY_RESOLVER_SNAPSHOT_KEY,
      n = a.RELAY_RESOLVER_VALUE_KEY,
      o = a.getStorageKey,
      p = new Set();
    c = (function () {
      function a() {}
      var b = a.prototype;
      b.readFromCacheOrEvaluate = function (a, b, c, d, e) {
        b.kind !== i || g(0, 57615);
        a = d();
        c = a.resolverResult;
        e = a.snapshot;
        b = a.error;
        return [c, void 0, b, e, void 0, void 0];
      };
      b.invalidateDataIDs = function (a) {};
      b.ensureClientRecord = function (a, b) {
        g(0, 58014);
      };
      b.notifyUpdatedSubscribers = function (a) {};
      return a;
    })();
    function q(a, b, c) {
      var d = a.get(b);
      d || ((d = new Set()), a.set(b, d));
      d.add(c);
    }
    d = (function () {
      function a(a) {
        (this.$1 = new Map()), (this.$2 = new Map()), (this.$3 = a);
      }
      var c = a.prototype;
      c.readFromCacheOrEvaluate = function (a, c, d, e, f) {
        var i = this.$3(),
          l = i.get(a);
        l != null || g(0, 64310);
        var p = o(c, d);
        l = (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).getLinkedRecordID(l, p);
        var r = l == null ? null : i.get(l);
        if (r == null || this.$4(r, f)) {
          l = (f = l) != null ? f : j(a, p);
          r = (h || (h = b('relay-runtime/store/RelayModernRecord'))).create(
            l,
            '__RELAY_RESOLVER__',
          );
          f = e();
          h.setValue(r, n, f.resolverResult);
          h.setValue(r, m, f.snapshot);
          h.setValue(r, k, f.error);
          i.set(l, r);
          e = i.get(a);
          e != null || g(0, 64256);
          e = h.clone(e);
          h.setLinkedRecordID(e, p, l);
          i.set(a, e);
          if (c.fragment != null) {
            p = o(c.fragment, d);
            i = j(a, p);
            q(this.$1, i, l);
            q(this.$2, a, i);
            c = (e = f.snapshot) == null ? void 0 : e.seenRecords;
            if (c != null)
              for (
                d = c,
                  p = Array.isArray(d),
                  a = 0,
                  d = p
                    ? d
                    : d[
                        typeof Symbol === 'function'
                          ? Symbol.iterator
                          : '@@iterator'
                      ]();
                ;

              ) {
                if (p) {
                  if (a >= d.length) break;
                  f = d[a++];
                } else {
                  a = d.next();
                  if (a.done) break;
                  f = a.value;
                }
                e = f;
                q(this.$2, e, i);
              }
          }
        }
        c = r[n];
        f = r[m];
        e = r[k];
        return [c, l, e, f, void 0, void 0];
      };
      c.invalidateDataIDs = function (a) {
        var b = this.$3(),
          c = new Set(),
          d = Array.from(a);
        while (d.length) {
          var e = d.pop();
          a.add(e);
          for (
            var e = (e = this.$2.get(e)) != null ? e : p,
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
            if (!c.has(h))
              for (
                var h = (h = this.$1.get(h)) != null ? h : p,
                  i = Array.isArray(h),
                  j = 0,
                  h = i
                    ? h
                    : h[
                        typeof Symbol === 'function'
                          ? Symbol.iterator
                          : '@@iterator'
                      ]();
                ;

              ) {
                var k;
                if (i) {
                  if (j >= h.length) break;
                  k = h[j++];
                } else {
                  j = h.next();
                  if (j.done) break;
                  k = j.value;
                }
                k = k;
                this.$5(k, b, a);
                c.has(k) || d.push(k);
              }
          }
        }
      };
      c.$5 = function (a, c, d) {
        d = c.get(a);
        if (!d) {
          b('warning')(
            !1,
            'Expected a resolver record with ID %s, but it was missing.',
            a,
          );
          return;
        }
        d = (h || (h = b('relay-runtime/store/RelayModernRecord'))).clone(d);
        h.setValue(d, l, !0);
        c.set(a, d);
      };
      c.$4 = function (a, c) {
        if (
          !(h || (h = b('relay-runtime/store/RelayModernRecord'))).getValue(
            a,
            l,
          )
        )
          return !1;
        var d = (
            h || (h = b('relay-runtime/store/RelayModernRecord'))
          ).getValue(a, m),
          e = d == null ? void 0 : d.data;
        d = d == null ? void 0 : d.selector;
        if (e == null || d == null) {
          b('warning')(
            !1,
            'Expected previous inputs and reader selector on resolver record with ID %s, but they were missing.',
            (h || (h = b('relay-runtime/store/RelayModernRecord'))).getDataID(
              a,
            ),
          );
          return !0;
        }
        a = c(d);
        c = a.data;
        d = b('relay-runtime/util/recycleNodesInto')(e, c);
        return d !== e ? !0 : !1;
      };
      c.ensureClientRecord = function (a, b) {
        g(0, 58014);
      };
      c.notifyUpdatedSubscribers = function (a) {
        g(0, 65021);
      };
      return a;
    })();
    e.exports = { NoopResolverCache: c, RecordResolverCache: d };
  },
  null,
);
