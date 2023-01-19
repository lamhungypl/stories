__d(
  'relay-runtime/util/RelayReplaySubject',
  ['invariant', 'relay-runtime/network/RelayObservable'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = (function () {
      function a() {
        var a = this;
        this.$1 = !1;
        this.$2 = [];
        this.$3 = new Set();
        this.$5 = [];
        this.$4 = b('relay-runtime/network/RelayObservable').create(function (
          b,
        ) {
          a.$3.add(b);
          var c = a.$2;
          for (var d = 0; d < c.length; d++) {
            if (b.closed) break;
            var e = c[d];
            switch (e.kind) {
              case 'complete':
                b.complete();
                break;
              case 'error':
                b.error(e.error);
                break;
              case 'next':
                b.next(e.data);
                break;
              default:
                e.kind, g(0, 14990, e.kind);
            }
          }
          return function () {
            a.$3['delete'](b);
          };
        });
      }
      var c = a.prototype;
      c.complete = function () {
        if (this.$1 === !0) return;
        this.$1 = !0;
        this.$2.push({ kind: 'complete' });
        this.$3.forEach(function (a) {
          return a.complete();
        });
      };
      c.error = function (a) {
        if (this.$1 === !0) return;
        this.$1 = !0;
        this.$2.push({ kind: 'error', error: a });
        this.$3.forEach(function (b) {
          return b.error(a);
        });
      };
      c.next = function (a) {
        if (this.$1 === !0) return;
        this.$2.push({ kind: 'next', data: a });
        this.$3.forEach(function (b) {
          return b.next(a);
        });
      };
      c.subscribe = function (a) {
        a = this.$4.subscribe(a);
        this.$5.push(a);
        return a;
      };
      c.unsubscribe = function () {
        for (
          var a = this.$5,
            b = Array.isArray(a),
            c = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var d;
          if (b) {
            if (c >= a.length) break;
            d = a[c++];
          } else {
            c = a.next();
            if (c.done) break;
            d = c.value;
          }
          d = d;
          d.unsubscribe();
        }
        this.$5 = [];
      };
      c.getObserverCount = function () {
        return this.$3.size;
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
