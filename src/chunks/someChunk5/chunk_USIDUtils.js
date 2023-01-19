__d(
  'USIDUtils',
  ['Cookie', 'Random', 'WebStorage'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 4294967295,
      i = 36,
      j = 'usidt',
      k = 'usida',
      l = 1,
      m = 6;
    function a() {
      var a = [];
      c('WebStorage').isLocalStorageQuotaExceeded() && a.push('LSF');
      c('WebStorage').isSessionStorageQuotaExceeded() && a.push('SSF');
      return a;
    }
    function n(a) {
      var b = Math.floor(Date.now() / 1e3),
        c = Math.floor(d('Random').random() * h);
      a = a + Number(b & h).toString(i) + c.toString(i);
      return a;
    }
    function o(a, b, c) {
      if (a == null) return { ver: l, id: n(c) };
      a = a.getItem(b);
      if (a == null) return { ver: l, id: n(c) };
      b = JSON.parse(a);
      return b.ver !== l ? { ver: l, id: n(c) } : b;
    }
    function p(a, b, d) {
      if (a == null) return;
      c('WebStorage').setItemGuarded(a, b, JSON.stringify(d));
    }
    function q(a, b) {
      if (c('Cookie') == null) return { ver: l, id: n(b) };
      a = c('Cookie').get(a);
      if (a == null || a == '') return { ver: l, id: n(b) };
      var d;
      try {
        d = JSON.parse(a);
      } catch (b) {
        d = JSON.parse(atob(a));
      }
      return d.ver !== l ? { ver: l, id: n(b) } : d;
    }
    function r(a, b) {
      if (c('Cookie') == null) return;
      c('Cookie').set(a, btoa(JSON.stringify(b)));
    }
    function b() {
      var a = o(c('WebStorage').getSessionStorageForRead(), j, 'T');
      return a.id;
    }
    function e(a) {
      p(c('WebStorage').getSessionStorage(), j, { ver: l, id: a });
    }
    function s() {
      var a,
        b = q(k, 'A');
      return {
        id: b.id,
        time: (a = b.time) != null ? a : 0,
        startTime: (a = b.startTime) != null ? a : 0,
      };
    }
    function f(a) {
      r(k, { ver: l, id: a.id, time: a.time });
      var b = s();
      return b.id === a.id && b.time === a.time;
    }
    g.VERSION = m;
    g.getFlags = a;
    g.generateId = n;
    g.getExistingTabId = b;
    g.writeTabId = e;
    g.getExistingActivityInfo = s;
    g.writeActivityInfo = f;
  },
  98,
);
