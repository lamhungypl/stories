__d(
  'refine/Refine_UtilityCheckers',
  ['refine/Refine_Checkers'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = (b = b('refine/Refine_Checkers')).Path,
      h = b.compose,
      i = b.failure,
      j = b.success;
    function a(a, b) {
      return h(a, function (a) {
        var c = a.value;
        a = a.warnings;
        return j(b(c), a);
      });
    }
    function k(a, b, c) {
      return i(
        a +
          ': ' +
          c
            .map(function (a) {
              return a.message;
            })
            .join(', '),
        b,
      );
    }
    function c(a, b) {
      return function (c, d) {
        d === void 0 && (d = new g());
        var e = a(c, d);
        if (e.type === 'success') return j(e.value, e.warnings);
        c = b(c, d);
        return c.type === 'success'
          ? j(c.value, c.warnings)
          : k('value did not match any types in or()', d, [e, c]);
      };
    }
    function l() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      return function (a, c) {
        c === void 0 && (c = new g());
        var d = [];
        for (var e = 0; e < b.length; e++) {
          var f = b[e];
          f = f(a, c);
          if (f.type === 'success') return j(f.value, f.warnings);
          d.push(f);
        }
        return k('value did not match any types in union', c, d);
      };
    }
    function d() {
      return l.apply(void 0, arguments);
    }
    function f(a, b) {
      b = (b = b) != null ? b : {};
      b = b.nullWithWarningWhenInvalid;
      var c = b === void 0 ? !1 : b;
      return function (b, d) {
        d === void 0 && (d = new g());
        if (b == null) return j(b, []);
        b = a(b, d);
        if (b.type === 'success') return j(b.value, b.warnings);
        if (c) return j(null, [b]);
        d = b.message;
        b = b.path;
        return i(d, b);
      };
    }
    function m(a, b) {
      b = (b = b) != null ? b : {};
      b = b.undefinedWithWarningWhenInvalid;
      var c = b === void 0 ? !1 : b;
      return function (b, d) {
        d === void 0 && (d = new g());
        if (b === void 0) return j(void 0, []);
        b = a(b, d);
        if (b.type === 'success') return j(b.value, b.warnings);
        if (c) return j(void 0, [b]);
        d = b.message;
        b = b.path;
        return i(d, b);
      };
    }
    function n(a, b) {
      return function (c, d) {
        d === void 0 && (d = new g());
        if (c == null) return j(b, []);
        c = a(c, d);
        return c.type === 'failure' || c.value != null ? c : j(b, []);
      };
    }
    function o(a, b) {
      return h(a, function (a, c) {
        var d = a.value;
        a = a.warnings;
        var e = b(d);
        e = typeof e === 'boolean' ? [e, 'value failed constraint check'] : e;
        var f = e[0];
        e = e[1];
        return f ? j(d, a) : i(e, c);
      });
    }
    function p(a) {
      return function (b, c) {
        c === void 0 && (c = new g());
        var d = a();
        return d(b, c);
      };
    }
    function q(a, b) {
      b === void 0 && (b = 'failed to return non-null from custom checker.');
      return function (c, d) {
        d === void 0 && (d = new g());
        try {
          c = a(c);
          return c != null ? j(c, []) : i(b, d);
        } catch (a) {
          return i(a.message, d);
        }
      };
    }
    e.exports = {
      or: c,
      union: l,
      match: d,
      nullable: f,
      voidable: m,
      withDefault: n,
      constraint: o,
      asType: a,
      lazy: p,
      custom: q,
    };
  },
  null,
);
