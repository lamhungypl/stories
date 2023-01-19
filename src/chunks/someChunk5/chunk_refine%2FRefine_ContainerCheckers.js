__d(
  'refine/Refine_ContainerCheckers',
  ['refine/Refine_Checkers'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = (b = b('refine/Refine_Checkers')).Path,
      h = b.compose,
      i = b.failure,
      j = b.success;
    function k(a) {
      if (Object.prototype.toString.call(a) !== '[object Object]') return !1;
      a = Object.getPrototypeOf(a);
      return a === null || a === Object.prototype;
    }
    function l(a) {
      return function (b, c) {
        c === void 0 && (c = new g());
        if (!Array.isArray(b)) return i('value is not an array', c);
        var d = b.length,
          e = new Array(d),
          f = [];
        for (var h = 0; h < d; h++) {
          var k = b[h];
          k = a(k, c.extend('[' + h + ']'));
          if (k.type === 'failure') return i(k.message, k.path);
          e[h] = k.value;
          k.warnings.length !== 0 && f.push.apply(f, k.warnings);
        }
        return j(e, f);
      };
    }
    function a() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      return function (a, c) {
        c === void 0 && (c = new g());
        if (!Array.isArray(a)) return i('value is not an array', c);
        var d = new Array(b.length),
          e = [];
        for (
          var f = b.entries(),
            h = Array.isArray(f),
            k = 0,
            f = h
              ? f
              : f[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var l;
          if (h) {
            if (k >= f.length) break;
            l = f[k++];
          } else {
            k = f.next();
            if (k.done) break;
            l = k.value;
          }
          l = l;
          var m = l[0];
          l = l[1];
          l = l(a[m], c.extend('[' + m + ']'));
          if (l.type === 'failure') return i(l.message, l.path);
          d[m] = l.value;
          l.warnings.length !== 0 && e.push.apply(e, l.warnings);
        }
        return j(d, e);
      };
    }
    function m(a) {
      return function (b, c) {
        c === void 0 && (c = new g());
        if (typeof b !== 'object' || b === null || !k(b))
          return i('value is not an object', c);
        var d = {},
          e = [];
        b = Object.entries(b);
        for (var f = 0; f < b.length; f++) {
          var h = b[f],
            l = h[0];
          h = h[1];
          h = a(h, c.extend('.' + l));
          if (h.type === 'failure') return i(h.message, h.path);
          d[l] = h.value;
          h.warnings.length !== 0 && e.push.apply(e, h.warnings);
        }
        return j(d, e);
      };
    }
    var n = function (a) {
      this.checker = a;
    };
    function c(a) {
      return new n(function (b, c) {
        c === void 0 && (c = new g());
        b = a(b, c);
        if (b.type === 'failure')
          return babelHelpers['extends']({}, b, {
            message: '(optional property) ' + b.message,
          });
        else return b;
      });
    }
    function o(a) {
      var b = Object.keys(a);
      return function (c, d) {
        d === void 0 && (d = new g());
        if (typeof c !== 'object' || c === null || !k(c))
          return i('value is not an object', d);
        var e = {},
          f = [];
        for (
          var h = b,
            l = Array.isArray(h),
            m = 0,
            h = l
              ? h
              : h[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var o;
          if (l) {
            if (m >= h.length) break;
            o = h[m++];
          } else {
            m = h.next();
            if (m.done) break;
            o = m.value;
          }
          o = o;
          var p = a[o],
            q = void 0,
            r;
          if (p instanceof n) {
            q = p.checker;
            if (!Object.prototype.hasOwnProperty.call(c, o)) continue;
            r = c[o];
          } else
            (q = p),
              (r = Object.prototype.hasOwnProperty.call(c, o) ? c[o] : void 0);
          p = q(r, d.extend('.' + o));
          if (p.type === 'failure') return i(p.message, p.path);
          e[o] = p.value;
          p.warnings.length !== 0 && f.push.apply(f, p.warnings);
        }
        return j(e, f);
      };
    }
    function d(a) {
      return function (b, c) {
        c === void 0 && (c = new g());
        if (!(b instanceof Set)) return i('value is not a Set', c);
        var d = new Set(),
          e = [];
        for (
          var b = b,
            f = Array.isArray(b),
            h = 0,
            b = f
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var k;
          if (f) {
            if (h >= b.length) break;
            k = b[h++];
          } else {
            h = b.next();
            if (h.done) break;
            k = h.value;
          }
          k = k;
          k = a(k, c.extend('[]'));
          if (k.type === 'failure') return i(k.message, k.path);
          d.add(k.value);
          k.warnings.length && e.push.apply(e, k.warnings);
        }
        return j(d, e);
      };
    }
    function f(a, b) {
      return function (c, d) {
        d === void 0 && (d = new g());
        if (!(c instanceof Map)) return i('value is not a Map', d);
        var e = new Map(),
          f = [];
        for (
          var c = c.entries(),
            h = Array.isArray(c),
            k = 0,
            c = h
              ? c
              : c[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var l;
          if (h) {
            if (k >= c.length) break;
            l = c[k++];
          } else {
            k = c.next();
            if (k.done) break;
            l = k.value;
          }
          l = l;
          var m = l[0];
          l = l[1];
          var n = a(m, d.extend('[' + m + '] key'));
          if (n.type === 'failure') return i(n.message, n.path);
          var o = b(l, d.extend('[' + m + ']'));
          if (o.type === 'failure') return i(o.message, o.path);
          e.set(m, l);
          f.push.apply(f, n.warnings.concat(o.warnings));
        }
        return j(e, f);
      };
    }
    function p(a) {
      return h(l(a), function (a) {
        var b = a.value;
        a = a.warnings;
        return j([].concat(b), a);
      });
    }
    function q(a) {
      return h(m(a), function (a) {
        var b = a.value;
        a = a.warnings;
        return j(babelHelpers['extends']({}, b), a);
      });
    }
    function r(a) {
      return h(o(a), function (a) {
        var b = a.value;
        a = a.warnings;
        return j(babelHelpers['extends']({}, b), a);
      });
    }
    e.exports = {
      array: l,
      tuple: a,
      object: o,
      optional: c,
      dict: m,
      set: d,
      map: f,
      writableArray: p,
      writableDict: q,
      writableObject: r,
    };
  },
  null,
);
