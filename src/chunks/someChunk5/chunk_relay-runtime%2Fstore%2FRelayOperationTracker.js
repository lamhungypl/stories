__d(
  'relay-runtime/store/RelayOperationTracker',
  ['invariant', 'Promise'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        (this.$1 = new Map()), (this.$2 = new Map()), (this.$3 = new Map());
      }
      var c = a.prototype;
      c.update = function (a, b) {
        if (b.size === 0) return;
        var c = a.identifier,
          d = new Set();
        for (
          var b = b,
            e = Array.isArray(b),
            f = 0,
            b = e
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= b.length) break;
            g = b[f++];
          } else {
            f = b.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          g = g.identifier;
          var h = this.$1.get(g);
          h != null
            ? h.has(c) || (h.set(c, a), d.add(g))
            : (this.$1.set(g, new Map([[c, a]])), d.add(g));
        }
        if (d.size === 0) return;
        h = this.$2.get(c) || new Set();
        for (
          g = d,
            f = Array.isArray(g),
            e = 0,
            g = f
              ? g
              : g[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (f) {
            if (e >= g.length) break;
            b = g[e++];
          } else {
            e = g.next();
            if (e.done) break;
            b = e.value;
          }
          a = b;
          this.$4(a);
          h.add(a);
        }
        this.$2.set(c, h);
      };
      c.complete = function (a) {
        a = a.identifier;
        var b = this.$2.get(a);
        if (b == null) return;
        var c = new Set(),
          d = new Set();
        for (
          var b = b,
            e = Array.isArray(b),
            f = 0,
            b = e
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= b.length) break;
            g = b[f++];
          } else {
            f = b.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          var h = this.$1.get(g);
          if (!h) continue;
          h['delete'](a);
          h.size > 0 ? d.add(g) : c.add(g);
        }
        for (
          h = c,
            g = Array.isArray(h),
            f = 0,
            h = g
              ? h
              : h[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (g) {
            if (f >= h.length) break;
            e = h[f++];
          } else {
            f = h.next();
            if (f.done) break;
            e = f.value;
          }
          b = e;
          this.$4(b);
          this.$1['delete'](b);
        }
        for (
          c = d,
            e = Array.isArray(c),
            b = 0,
            c = e
              ? c
              : c[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (e) {
            if (b >= c.length) break;
            f = c[b++];
          } else {
            b = c.next();
            if (b.done) break;
            f = b.value;
          }
          g = f;
          this.$4(g);
        }
        this.$2['delete'](a);
      };
      c.$4 = function (a) {
        var b = this.$3.get(a);
        b != null && b.resolve();
        this.$3['delete'](a);
      };
      c.getPendingOperationsAffectingOwner = function (a) {
        a = a.identifier;
        var c = this.$1.get(a);
        if (c == null || c.size === 0) return null;
        var d = this.$3.get(a);
        if (d != null)
          return { promise: d.promise, pendingOperations: d.pendingOperations };
        var e;
        d = new (b('Promise'))(function (a) {
          e = a;
        });
        e != null || g(0, 16524);
        c = Array.from(c.values());
        this.$3.set(a, { promise: d, resolve: e, pendingOperations: c });
        return { promise: d, pendingOperations: c };
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
