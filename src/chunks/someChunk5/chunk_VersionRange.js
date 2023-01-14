__d(
  'VersionRange',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = /\./,
      j = /\|\|/,
      k = /\s+\-\s+/,
      l = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
      m = /^(\d*)(.*)/;
    function n(a, b) {
      a = a.split(j);
      if (a.length > 1)
        return a.some(function (a) {
          return E.contains(a, b);
        });
      else return o(a[0].trim(), b);
    }
    function o(a, b) {
      a = a.split(k);
      (a.length > 0 && a.length <= 2) || h(0, 11800);
      if (a.length === 1) return p(a[0], b);
      else {
        var c = a[0];
        a = a[1];
        (y(c) && y(a)) || h(0, 11801);
        return p('>=' + c, b) && p('<=' + a, b);
      }
    }
    function p(a, b) {
      a = a.trim();
      if (a === '') return !0;
      b = b.split(i);
      a = w(a);
      var c = a.modifier;
      a = a.rangeComponents;
      switch (c) {
        case '<':
          return q(b, a);
        case '<=':
          return r(b, a);
        case '>=':
          return t(b, a);
        case '>':
          return u(b, a);
        case '~':
        case '~>':
          return v(b, a);
        default:
          return s(b, a);
      }
    }
    function q(a, b) {
      return D(a, b) === -1;
    }
    function r(a, b) {
      a = D(a, b);
      return a === -1 || a === 0;
    }
    function s(a, b) {
      return D(a, b) === 0;
    }
    function t(a, b) {
      a = D(a, b);
      return a === 1 || a === 0;
    }
    function u(a, b) {
      return D(a, b) === 1;
    }
    function v(a, b) {
      var c = b.slice();
      b = b.slice();
      b.length > 1 && b.pop();
      var d = b.length - 1,
        e = parseInt(b[d], 10);
      x(e) && (b[d] = e + 1 + '');
      return t(a, c) && q(a, b);
    }
    function w(a) {
      a = a.split(i);
      var b = a[0].match(l);
      b || h(0, 3074);
      return { modifier: b[1], rangeComponents: [b[2]].concat(a.slice(1)) };
    }
    function x(a) {
      return !isNaN(a) && isFinite(a);
    }
    function y(a) {
      return !w(a).modifier;
    }
    function z(a, b) {
      for (var c = a.length; c < b; c++) a[c] = '0';
    }
    function A(a, b) {
      a = a.slice();
      b = b.slice();
      z(a, b.length);
      for (var c = 0; c < b.length; c++) {
        var d = b[c].match(/^[x*]$/i);
        if (d) {
          b[c] = a[c] = '0';
          if (d[0] === '*' && c === b.length - 1)
            for (d = c; d < a.length; d++) a[d] = '0';
        }
      }
      z(b, a.length);
      return [a, b];
    }
    function B(a, b) {
      var c = a.match(m),
        d = b.match(m);
      c = c && c[1];
      d = d && d[1];
      c = parseInt(c, 10);
      d = parseInt(d, 10);
      if (x(c) && x(d) && c !== d) return C(c, d);
      else return C(a, b);
    }
    function C(a, b) {
      typeof a === typeof b || h(0, 11802);
      if (typeof a === 'string' && typeof b === 'string')
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
      if (typeof a === 'number' && typeof b === 'number')
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
      typeof a === typeof b || h(0, 11802);
      return 0;
    }
    function D(a, b) {
      a = A(a, b);
      b = a[0];
      a = a[1];
      for (var c = 0; c < a.length; c++) {
        var d = B(b[c], a[c]);
        if (d) return d;
      }
      return 0;
    }
    var E = {
      contains: function (a, b) {
        return n(a.trim(), b.trim());
      },
    };
    a = E;
    g['default'] = a;
  },
  98,
);
