__d(
  'refine/Refine_PrimitiveCheckers',
  ['refine/Refine_Checkers'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = (b = b('refine/Refine_Checkers')).Path,
      h = b.compose,
      i = b.failure,
      j = b.success;
    function a() {
      return k;
    }
    var k = function (a) {
      return j(a, []);
    };
    function c(a) {
      var b = function (a) {
        return JSON.stringify(a);
      };
      return function (c, d) {
        d === void 0 && (d = new g());
        return c === a
          ? j(a, [])
          : i('value is not literal ' + ((c = b(a)) != null ? c : 'void'), d);
      };
    }
    function d() {
      return function (a, b) {
        b === void 0 && (b = new g());
        return typeof a === 'boolean'
          ? j(a, [])
          : i('value is not a boolean', b);
      };
    }
    function f() {
      return function (a, b) {
        b === void 0 && (b = new g());
        return typeof a === 'number' ? j(a, []) : i('value is not a number', b);
      };
    }
    function l(a) {
      return function (b, c) {
        c === void 0 && (c = new g());
        if (typeof b !== 'string') return i('value is not a string', c);
        return a != null && !a.test(b)
          ? i('value does not match regex: ' + a.toString(), c)
          : j(b, []);
      };
    }
    function m(a) {
      return function (b, c) {
        c === void 0 && (c = new g());
        if (typeof b !== 'string') return i('value must be a string', c);
        b = a[b];
        return b == null
          ? i('value is not one of ' + Object.keys(a).join(', '), c)
          : j(b, []);
      };
    }
    function n(a) {
      var b = Object.keys(a).reduce(function (b, c) {
          return Object.assign(b, ((b = {}), (b[a[c]] = a[c]), b));
        }, {}),
        c = m(b);
      return function (a, b) {
        b === void 0 && (b = new g());
        var d = typeof a === 'number' ? a.toString() : a;
        d = c(d, b);
        return d.type === 'success' && typeof d.value !== typeof a
          ? i('input must be the same type as the enum values', b)
          : d;
      };
    }
    function o() {
      return function (a, b) {
        b === void 0 && (b = new g());
        if (!(a instanceof Date)) return i('value is not a date', b);
        return isNaN(a) ? i('invalid date', b) : j(a, []);
      };
    }
    function p() {
      return h(l(), function (a, b) {
        var c = a.value;
        a = a.warnings;
        c = new Date(c);
        return Number.isNaN(c)
          ? i('value is not valid date string', b)
          : j(c, a);
      });
    }
    e.exports = {
      mixed: a,
      literal: c,
      bool: d,
      number: f,
      string: l,
      stringLiterals: m,
      date: o,
      jsonDate: p,
      enumObject: n,
    };
  },
  null,
);
