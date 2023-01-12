__d(
  'UnicodeUtils',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = 55296,
      j = 56319,
      k = 56320,
      l = 57343,
      m = /[\uD800-\uDFFF]/;
    function n(a) {
      return i <= a && a <= l;
    }
    function a(a, b) {
      (0 <= b && b < a.length) || h(0, 1346, b, a.length);
      if (b + 1 === a.length) return !1;
      var c = a.charCodeAt(b);
      a = a.charCodeAt(b + 1);
      return i <= c && c <= j && k <= a && a <= l;
    }
    function o(a) {
      return m.test(a);
    }
    function p(a, b) {
      return 1 + n(a.charCodeAt(b));
    }
    function b(a) {
      if (!o(a)) return a.length;
      var b = 0;
      for (var c = 0; c < a.length; c += p(a, c)) b++;
      return b;
    }
    function c(a, b) {
      return r(a, b, b + 1);
    }
    function q(a, b, c) {
      var d = b || 0;
      c = c === void 0 ? Infinity : c || 0;
      if (!o(a)) return a.substr(d, c);
      var e = a.length;
      if (e <= 0 || d > e || c <= 0) return '';
      var f = 0;
      if (d > 0) {
        for (; d > 0 && f < e; d--) f += p(a, f);
        if (f >= e) return '';
      } else if (b < 0) {
        for (f = e; d < 0 && 0 < f; d++) f -= p(a, f - 1);
        f < 0 && (f = 0);
      }
      b = e;
      if (c < e) for (b = f; c > 0 && b < e; c--) b += p(a, b);
      return a.substring(f, b);
    }
    function r(a, b, c) {
      b = b || 0;
      c = c === void 0 ? Infinity : c || 0;
      b < 0 && (b = 0);
      c < 0 && (c = 0);
      var d = Math.abs(c - b);
      b = b < c ? b : c;
      return q(a, b, d);
    }
    function d(a) {
      var b = [];
      for (var c = 0; c < a.length; c += p(a, c)) b.push(a.codePointAt(c));
      return b;
    }
    g.isCodeUnitInSurrogateRange = n;
    g.isSurrogatePair = a;
    g.hasSurrogateUnit = o;
    g.getUTF16Length = p;
    g.strlen = b;
    g.charAt = c;
    g.substr = q;
    g.substring = r;
    g.getCodePoints = d;
  },
  98,
);