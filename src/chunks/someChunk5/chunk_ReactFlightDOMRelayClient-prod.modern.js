__d(
  'ReactFlightDOMRelayClient-prod.modern',
  ['ReactFlightDOMRelayClientIntegration'],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a) {
      for (
        var b = 'https://reactjs.org/docs/error-decoder.html?invariant=' + a,
          c = 1;
        c < arguments.length;
        c++
      )
        b += '&args[]=' + encodeURIComponent(arguments[c]);
      return (
        'Minified React error #' +
        a +
        '; visit ' +
        b +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      );
    }
    var h = Array.isArray;
    function i(a, b, c, d) {
      if ('string' === typeof d) return B(a, b, c, d);
      if ('object' === typeof d && null !== d) {
        if (h(d)) {
          c = [];
          for (b = 0; b < d.length; b++) c[b] = i(a, d, '' + b, d[b]);
          a =
            c[0] === k
              ? {
                  $$typeof: k,
                  type: c[1],
                  key: c[2],
                  ref: null,
                  props: c[3],
                  _owner: null,
                }
              : c;
          return a;
        }
        b = {};
        for (c in d) b[c] = i(a, d, c, d[c]);
        return b;
      }
      return d;
    }
    var j = {},
      k = Symbol['for']('react.element'),
      l = Symbol['for']('react.lazy');
    function m(a, b, c, d) {
      (this.status = a),
        (this.value = b),
        (this.reason = c),
        (this._response = d);
    }
    m.prototype = Object.create(Promise.prototype);
    m.prototype.then = function (a, b) {
      switch (this.status) {
        case 'resolved_model':
          v(this);
          break;
        case 'resolved_module':
          w(this);
      }
      switch (this.status) {
        case 'fulfilled':
          a(this.value);
          break;
        case 'pending':
        case 'blocked':
          a && (null === this.value && (this.value = []), this.value.push(a));
          b &&
            (null === this.reason && (this.reason = []), this.reason.push(b));
          break;
        default:
          b(this.reason);
      }
    };
    function n(a) {
      switch (a.status) {
        case 'resolved_model':
          v(a);
          break;
        case 'resolved_module':
          w(a);
      }
      switch (a.status) {
        case 'fulfilled':
          return a.value;
        case 'pending':
        case 'blocked':
          throw a;
        default:
          throw a.reason;
      }
    }
    function o(a, b) {
      return new m('fulfilled', b, null, a);
    }
    function p(a, b) {
      for (var c = 0; c < a.length; c++) a[c](b);
    }
    function q(a, b, c) {
      switch (a.status) {
        case 'fulfilled':
          p(b, a.value);
          break;
        case 'pending':
        case 'blocked':
          a.value = b;
          a.reason = c;
          break;
        case 'rejected':
          c && p(c, a.reason);
      }
    }
    function r(a, b) {
      if ('pending' === a.status || 'blocked' === a.status) {
        var c = a.reason;
        a.status = 'rejected';
        a.reason = b;
        null !== c && p(c, b);
      }
    }
    function s(a, b) {
      if ('pending' === a.status || 'blocked' === a.status) {
        var c = a.value,
          d = a.reason;
        a.status = 'resolved_module';
        a.value = b;
        null !== c && (w(a), q(a, c, d));
      }
    }
    var t = null,
      u = null;
    function v(a) {
      var b = t,
        c = u;
      t = a;
      u = null;
      try {
        var d = i(a._response, j, '', a.value);
        null !== u && 0 < u.deps
          ? ((u.value = d),
            (a.status = 'blocked'),
            (a.value = null),
            (a.reason = null))
          : ((a.status = 'fulfilled'), (a.value = d));
      } catch (b) {
        (a.status = 'rejected'), (a.reason = b);
      } finally {
        (t = b), (u = c);
      }
    }
    function w(a) {
      try {
        var c = b('ReactFlightDOMRelayClientIntegration').requireModule(
          a.value,
        );
        a.status = 'fulfilled';
        a.value = c;
      } catch (b) {
        (a.status = 'rejected'), (a.reason = b);
      }
    }
    function x(a, b) {
      a._chunks.forEach(function (a) {
        'pending' === a.status && r(a, b);
      });
    }
    function y(a, b) {
      var c = a._chunks,
        d = c.get(b);
      d || ((d = new m('pending', null, null, a)), c.set(b, d));
      return d;
    }
    function z(a, b, c) {
      if (u) {
        var d = u;
        d.deps++;
      } else d = u = { deps: 1, value: null };
      return function (e) {
        (b[c] = e),
          d.deps--,
          0 === d.deps &&
            'blocked' === a.status &&
            ((e = a.value),
            (a.status = 'fulfilled'),
            (a.value = d.value),
            null !== e && p(e, d.value));
      };
    }
    function A(a) {
      return function (b) {
        return r(a, b);
      };
    }
    function B(a, b, c, d) {
      switch (d[0]) {
        case '$':
          if ('$' === d) return k;
          if ('$' === d[1] || '@' === d[1]) return d.substring(1);
          d = parseInt(d.substring(1), 16);
          a = y(a, d);
          switch (a.status) {
            case 'resolved_model':
              v(a);
              break;
            case 'resolved_module':
              w(a);
          }
          switch (a.status) {
            case 'fulfilled':
              return a.value;
            case 'pending':
            case 'blocked':
              return (d = t), a.then(z(d, b, c), A(d)), null;
            default:
              throw a.reason;
          }
        case '@':
          return (
            (b = parseInt(d.substring(1), 16)),
            (b = y(a, b)),
            { $$typeof: l, _payload: b, _init: n }
          );
      }
      return d;
    }
    function C(a, c, d) {
      var e = a._chunks,
        f = e.get(c);
      d = i(a, j, '', d);
      var g = b('ReactFlightDOMRelayClientIntegration').resolveModuleReference(
        d,
      );
      if ((d = b('ReactFlightDOMRelayClientIntegration').preloadModule(g))) {
        if (f) {
          var h = f;
          h.status = 'blocked';
        } else (h = new m('blocked', null, null, a)), e.set(c, h);
        d.then(
          function () {
            return s(h, g);
          },
          function (a) {
            return r(h, a);
          },
        );
      } else f ? s(f, g) : e.set(c, new m('resolved_module', g, null, a));
    }
    f.close = function (a) {
      x(a, Error(g(412)));
    };
    f.createResponse = function (a) {
      var b = new Map();
      return { _bundlerConfig: a, _chunks: b };
    };
    f.getRoot = function (a) {
      return y(a, 0);
    };
    f.resolveRow = function (a, b) {
      if ('J' === b[0]) {
        var c = b[1],
          d = b[2],
          e = a._chunks;
        (b = e.get(c))
          ? 'pending' === b.status &&
            ((a = b.value),
            (c = b.reason),
            (b.status = 'resolved_model'),
            (b.value = d),
            null !== a && (v(b), q(b, a, c)))
          : e.set(c, new m('resolved_model', d, null, a));
      } else
        'M' === b[0]
          ? C(a, b[1], b[2])
          : 'S' === b[0]
          ? a._chunks.set(b[1], o(a, Symbol['for'](b[2])))
          : ((d = b[1]),
            (c = b[2].digest),
            (b = Error(g(441))),
            (b.stack = 'Error: ' + b.message),
            (b.digest = c),
            (c = a._chunks),
            (e = c.get(d)) ? r(e, b) : c.set(d, new m('rejected', null, b, a)));
    };
  },
  null,
);
