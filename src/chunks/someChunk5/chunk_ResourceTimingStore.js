__d(
  'ResourceTimingStore',
  ['performance'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 4e3,
      i = 3e3,
      j = new Map(),
      k = !1;
    function l() {
      var a = Array.from(j.entries());
      j = new Map(a.slice(-i));
    }
    function m(a) {
      var b = a.indexOf('#');
      return b === -1 ? a : a.slice(0, b);
    }
    function n(a) {
      for (
        var a = a,
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
        if (!(d instanceof PerformanceResourceTiming)) continue;
        var e = '';
        try {
          e = new URL(d.name).pathname;
        } catch (a) {}
        if (!/\.(css|js)$/.test(e)) continue;
        e = d;
        if (
          !(
            e != null &&
            typeof e === 'object' &&
            typeof e.encodedBodySize === 'number' &&
            typeof e.decodedBodySize === 'number' &&
            typeof e.transferSize === 'number'
          )
        )
          continue;
        j.set(m(d.name), e);
      }
      j.size > h && l();
    }
    function o(a) {
      n(a.getEntries());
    }
    function p() {
      if (k) return;
      k = !0;
      var a;
      if (typeof PerformanceObserver !== 'undefined') {
        a = new PerformanceObserver(o);
        try {
          a.observe({ buffered: !0, type: 'resource' });
        } catch (a) {}
      }
      typeof c('performance').getEntriesByType === 'function' &&
        n(c('performance').getEntriesByType('resource'));
    }
    function a(a) {
      p();
      return j.get(m(a));
    }
    g.init = p;
    g.getEntryForURL = a;
  },
  98,
);
