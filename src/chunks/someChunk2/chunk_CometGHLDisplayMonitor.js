__d(
  'CometGHLDisplayMonitor',
  [
    'DebugOwl',
    'clearTimeout',
    'cometGHLContentDisplayCheck',
    'gkx',
    'recoverableViolation',
    'setTimeoutCometLoggingPri',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Map(),
      i = 1e3,
      j = null;
    a = function (a, b) {
      h.has(a) || h.set(a, new Set());
      var d = h.get(a);
      if (d == null) {
        c('recoverableViolation')(
          'Expected Set to be declared for container',
          'GHL',
        );
        return { dispose: function () {} };
      }
      d.add(b);
      j === null && k();
      return {
        dispose: function () {
          d['delete'](b),
            d.size === 0 &&
              (h['delete'](a),
              h.size === 0 && (c('clearTimeout')(j), (j = null)));
        },
      };
    };
    var k = function a() {
        h.forEach(function (a, b) {
          b = b.current;
          if (b == null || l(b) || !c('cometGHLContentDisplayCheck')(b)) return;
          a.forEach(function (a, b) {
            a = b.onLogBlockCallback;
            var d = b.startTime;
            b = b.targetRef;
            b = b.current;
            c('DebugOwl').hoot(b);
            if (b == null) return;
            var e = l(b) != null;
            c('DebugOwl').flap(b, { hiddenByFB: e });
            if (e) return;
            e = c('cometGHLContentDisplayCheck')(b);
            if (!e) {
              b = Date.now() - d;
              a(b);
            }
          });
        }),
          (j = c('setTimeoutCometLoggingPri')(a, i));
      },
      l = function (a) {
        return a.closest == null || a.closest(m);
      },
      m = (function () {
        return (
          '.' +
          'x1s85apg'.split(' ').pop() +
          (c('gkx')('3989') ? ',.' + 'xdps06'.split(' ').pop() : '')
        );
      })();
    g.m = a;
  },
  98,
);
