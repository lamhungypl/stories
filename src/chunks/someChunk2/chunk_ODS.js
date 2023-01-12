__d(
  'ODS',
  [
    'ExecutionEnvironment',
    'OdsWebBatchFalcoEvent',
    'Random',
    'Run',
    'clearTimeout',
    'gkx',
    'setTimeout',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i =
        c('ExecutionEnvironment').canUseDOM ||
        c('ExecutionEnvironment').isInWorker,
      j = {};
    function k(a, b, c, d, e) {
      var f;
      d === void 0 && (d = 1);
      e === void 0 && (e = 1);
      var g = (f = j[b]) != null ? f : null;
      if (g != null && g <= 0) return;
      h = h || {};
      var i = h[a] || (h[a] = {}),
        k = i[b] || (i[b] = {}),
        l = k[c] || (k[c] = [0, null]),
        n = Number(d),
        o = Number(e);
      g > 0 && ((n /= g), (o /= g));
      if (!isFinite(n) || !isFinite(o)) return;
      l[0] += n;
      if (arguments.length >= 5) {
        var p = l[1];
        p == null && (p = 0);
        l[1] = p + o;
      }
      m();
    }
    var l;
    function m() {
      if (l != null) return;
      l = c('setTimeout')(
        function () {
          n();
        },
        c('gkx')('708253') ? 13e3 / 2 : 5e3,
      );
    }
    function a(a, b) {
      if (!i) return;
      j[a] = d('Random').random() < b ? b : 0;
    }
    function b(a, b, c, d) {
      d === void 0 && (d = 1);
      if (!i) return;
      k(a, b, c, d);
    }
    function e(a, b, c, d, e) {
      d === void 0 && (d = 1);
      e === void 0 && (e = 1);
      if (!i) return;
      k(a, b, c, d, e);
    }
    function n(a) {
      a === void 0 && (a = 'normal');
      if (!i) return;
      c('clearTimeout')(l);
      l = null;
      if (h == null) return;
      var b = h;
      h = null;
      function d() {
        return { batch: b };
      }
      a === 'critical'
        ? c('OdsWebBatchFalcoEvent').logCritical(d)
        : c('OdsWebBatchFalcoEvent').log(d);
    }
    i &&
      d('Run').onUnload(function () {
        n('critical');
      });
    g.setEntitySample = a;
    g.bumpEntityKey = b;
    g.bumpFraction = e;
    g.flush = n;
  },
  98,
);
