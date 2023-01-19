__d(
  'RelayAsyncStreamPool',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = 0,
      j = 1,
      k = 2;
    a = (function () {
      function a() {
        (this.$1 = 0), (this.$2 = new Map());
      }
      var b = a.prototype;
      b.forceComplete = function (a) {
        a = this.$3(a);
        if (a.status !== i) return;
        var b = a.observers;
        a.status = k;
        a.events.push({ kind: 'complete', sequenceNumber: a.events.length });
        a.observers = new Map();
        b.forEach(function (a) {
          return a.complete();
        });
      };
      b.forceError = function (a, b) {
        a = this.$3(a);
        if (a.status !== i) return;
        var c = a.observers;
        a.status = k;
        a.events.push({
          kind: 'error',
          error: b,
          sequenceNumber: a.events.length,
        });
        a.observers = new Map();
        c.forEach(function (a) {
          return a.error(b);
        });
      };
      b.complete = function (a, b) {
        (Number.isInteger(b) && b >= 0) || h(0, 14878, b);
        var c = this.$3(a);
        if (c.status !== i) return;
        var d = c.events.length;
        if (b === d) {
          var e = c.observers;
          c.status = k;
          c.events.push({ kind: 'complete', sequenceNumber: b });
          c.observers = new Map();
          e.forEach(function (a) {
            return a.complete();
          });
        } else
          (b > d &&
            !Object.prototype.hasOwnProperty.call(c.pendingEvents, b)) ||
            h(0, 14879, b, a),
            (c.status = j),
            (c.pendingEvents[b] = { kind: 'complete', sequenceNumber: b });
      };
      b.error = function (a, b, c) {
        (Number.isInteger(c) && c >= 0) || h(0, 14878, c);
        var d = this.$3(a);
        if (d.status !== i) return;
        var e = d.events.length;
        if (c === e) {
          var f = d.observers;
          d.status = k;
          d.events.push({ kind: 'error', error: b, sequenceNumber: c });
          d.observers = new Map();
          f.forEach(function (a) {
            return a.error(b);
          });
        } else
          (c > e &&
            !Object.prototype.hasOwnProperty.call(d.pendingEvents, c)) ||
            h(0, 14879, c, a),
            (d.status = j),
            (d.pendingEvents[c] = {
              kind: 'error',
              error: b,
              sequenceNumber: c,
            });
      };
      b.next = function (a, b, c) {
        (Number.isInteger(c) && c >= 0) || h(0, 14878, c);
        var d = this.$3(a);
        if (d.status === k) return;
        var e = d.events.length;
        if (c === e) {
          var f = d.observers;
          d.events.push({ kind: 'next', data: b, sequenceNumber: c });
          f.forEach(function (a) {
            return a.next(b);
          });
          var g = d.pendingEvents,
            i = function (b) {
              var c = g[b];
              if (c == null) return 'break';
              d.events.push(c);
              switch (c.kind) {
                case 'complete':
                  d.status = k;
                  d.observers = new Map();
                  f.forEach(function (a) {
                    return a.complete();
                  });
                  return { v: void 0 };
                case 'error':
                  d.status = k;
                  d.observers = new Map();
                  f.forEach(function (a) {
                    return a.error(c.error);
                  });
                  return { v: void 0 };
                case 'next':
                  f.forEach(function (a) {
                    return a.next(c.data);
                  });
                  break;
                default:
                  c.kind, h(0, 14593, c.kind, a);
              }
            };
          _loop: for (var j = e + 1; j < g.length; j++) {
            var l = i(j);
            switch (l) {
              case 'break':
                break _loop;
              default:
                if (typeof l === 'object') return l.v;
            }
          }
        } else
          (c > e &&
            !Object.prototype.hasOwnProperty.call(d.pendingEvents, c)) ||
            h(0, 14879, c, a),
            (d.pendingEvents[c] = { kind: 'next', data: b, sequenceNumber: c });
      };
      b.clear = function (a) {
        this.$2['delete'](a);
      };
      b.has = function (a) {
        return this.$2.has(a);
      };
      b.subscribe = function (a, b) {
        var c = this.$3(a),
          d = this.$1++,
          e = c.events;
        e.length !== 0 &&
          e.forEach(function (c) {
            switch (c.kind) {
              case 'complete':
                b.complete();
                break;
              case 'error':
                b.error(c.error);
                break;
              case 'next':
                b.next(c.data);
                break;
              default:
                c.kind, h(0, 14593, c.kind, a);
            }
          });
        var f = c.observers;
        f.set(d, b);
        e = {
          unsubscribe: function () {
            f['delete'](d);
          },
        };
        b.start(e);
        return e;
      };
      b.$3 = function (a) {
        var b = this.$2.get(a);
        b == null &&
          ((b = {
            status: i,
            events: [],
            observers: new Map(),
            pendingEvents: [],
          }),
          this.$2.set(a, b));
        return b;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
