__d(
  'BootloaderEvents',
  ['Arbiter', 'objectValues'],
  function (a, b, c, d, e, f, g) {
    var h = 'bootloader/bootload',
      i = 'hasteResponse/handle',
      j = 'bootloader/defer_timeout',
      k = 'bootloader/resource_in_longtail_bt_manifest',
      l = new (c('Arbiter'))(),
      m = new Set(),
      n = new Set();
    function o(a, b) {
      return (
        'haste_response_ef:' + a + ':' + ((a = b) != null ? a : '<unknown>')
      );
    }
    function a(a) {
      var b = new Map();
      for (
        var a = c('objectValues')(a),
          d = Array.isArray(a),
          e = 0,
          a = d
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= a.length) break;
          f = a[e++];
        } else {
          e = a.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        for (
          var f = f,
            g = Array.isArray(f),
            h = 0,
            f = g
              ? f
              : f[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var i;
          if (g) {
            if (h >= f.length) break;
            i = f[h++];
          } else {
            h = f.next();
            if (h.done) break;
            i = h.value;
          }
          i = i;
          var j = i[0];
          i = i[1];
          b.set(j, i);
        }
      }
      return b;
    }
    function b() {
      return {
        blocking: new Map(),
        nonblocking: new Map(),
        default: new Map(),
      };
    }
    function d(a) {
      m.add(a);
    }
    function e(a) {
      m['delete'](a), l.inform(h, a, 'persistent');
    }
    function f(a, b) {
      n.add(o(a, b));
    }
    function p(a, b, c) {
      l.inform(o(a, b), c, 'persistent');
    }
    function q(a) {
      l.inform(j, a, 'persistent');
    }
    function r(a) {
      return l.subscribe(h, function (b, c) {
        return a(c);
      });
    }
    function s(a) {
      return l.subscribe(j, function (b, c) {
        return a(c);
      });
    }
    function t() {
      return new Set(m);
    }
    function u(a) {
      l.inform(i, a, 'persistent');
    }
    function v(a) {
      return l.subscribe(i, function (b, c) {
        b = o(c.source, c.sourceDetail);
        if (n.has(b)) {
          l.subscribe(b, function (b, d) {
            return a(babelHelpers['extends']({}, c, { efData: d }));
          });
          return;
        }
        a(c);
      });
    }
    function w(a) {
      return l.subscribe(k, a);
    }
    var x = !1;
    function y() {
      if (x) return;
      x = !0;
      l.inform(k, null, 'persistent');
    }
    g.flattenResourceMapSet = a;
    g.newResourceMapSet = b;
    g.notifyBootloadStart = d;
    g.notifyBootload = e;
    g.notifyHasteResponseEFStart = f;
    g.notifyHasteResponseEF = p;
    g.notifyDeferTimeout = q;
    g.onBootload = r;
    g.onDeferTimeout = s;
    g.getActiveBootloads = t;
    g.notifyHasteResponse = u;
    g.onHasteResponse = v;
    g.onResourceInLongTailBTManifest = w;
    g.notifyResourceInLongTailBTManifest = y;
  },
  98,
);
