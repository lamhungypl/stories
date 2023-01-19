__d(
  'relay-runtime/store/RelayModernSelector',
  [
    'invariant',
    'areEqual',
    'relay-runtime/store/RelayConcreteVariables',
    'relay-runtime/store/RelayStoreUtils',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j = b('relay-runtime/store/RelayConcreteVariables').getFragmentVariables,
      k = (i = b('relay-runtime/store/RelayStoreUtils'))
        .CLIENT_EDGE_TRAVERSAL_PATH,
      l = i.FRAGMENT_OWNER_KEY,
      m = i.FRAGMENTS_KEY,
      n = i.ID_KEY,
      o = i.IS_WITHIN_UNMATCHED_TYPE_REFINEMENT;
    function p(a, b) {
      (typeof b === 'object' && b !== null && !Array.isArray(b)) ||
        g(0, 4618, a.name, JSON.stringify(b));
      var c = b[n],
        d = b[m],
        e = b[l],
        f = b[o] === !0;
      b = b[k];
      if (
        typeof c === 'string' &&
        typeof d === 'object' &&
        d !== null &&
        typeof d[a.name] === 'object' &&
        d[a.name] !== null &&
        typeof e === 'object' &&
        e !== null &&
        (b == null || Array.isArray(b))
      ) {
        e = e;
        b = b;
        d = d[a.name];
        d = j(a, e.variables, d);
        return z(a, c, d, e, f, b);
      }
      return null;
    }
    function q(a, b) {
      var c = null;
      b.forEach(function (b, d) {
        d = b != null ? p(a, b) : null;
        d != null && ((c = c || []), c.push(d));
      });
      if (c == null) return null;
      else return { kind: 'PluralReaderSelector', selectors: c };
    }
    function r(a, b) {
      if (b == null) return b;
      else if (a.metadata && a.metadata.plural === !0) {
        Array.isArray(b) || g(0, 13882, a.name, JSON.stringify(b), a.name);
        return q(a, b);
      } else {
        Array.isArray(b) && g(0, 13879, a.name, JSON.stringify(b), a.name);
        return p(a, b);
      }
    }
    function a(a, b) {
      var c = {};
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          var e = a[d],
            f = b[d];
          c[d] = r(e, f);
        }
      return c;
    }
    function c(a, b) {
      var c = {};
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          var e = a[d],
            f = b[d];
          c[d] = s(e, f);
        }
      return c;
    }
    function s(a, b) {
      if (b == null) return b;
      else if (a.metadata && a.metadata.plural === !0) {
        Array.isArray(b) || g(0, 13882, a.name, JSON.stringify(b), a.name);
        return t(a, b);
      } else {
        Array.isArray(b) && g(0, 13881, a.name, JSON.stringify(b), a.name);
        return u(a, b);
      }
    }
    function t(a, b) {
      var c = null;
      b.forEach(function (b) {
        b = b != null ? u(a, b) : null;
        b != null && ((c = c || []), c.push(b));
      });
      return c;
    }
    function u(a, c) {
      (typeof c === 'object' && c !== null && !Array.isArray(c)) ||
        g(0, 4618, a.name, JSON.stringify(c));
      var d = c[n];
      if (typeof d === 'string') return d;
      b('warning')(
        !1,
        "RelayModernSelector: Expected object to contain data for fragment `%s`, got `%s`. Make sure that the parent operation/fragment included fragment `...%s` without `@relay(mask: false)`, or `null` is passed as the fragment reference for `%s` if it's conditonally included and the condition isn't met.",
        a.name,
        JSON.stringify(c),
        a.name,
        a.name,
      );
      return null;
    }
    function d(a, b) {
      var c = {};
      for (var d in a)
        if (Object.prototype.hasOwnProperty.call(a, d)) {
          var e = a[d],
            f = b[d];
          e = v(e, f);
          Object.assign(c, e);
        }
      return c;
    }
    function v(a, b) {
      var c;
      if (b == null) return {};
      else if (((c = a.metadata) == null ? void 0 : c.plural) === !0) {
        Array.isArray(b) || g(0, 13882, a.name, JSON.stringify(b), a.name);
        return x(a, b);
      } else {
        Array.isArray(b) && g(0, 13881, a.name, JSON.stringify(b), a.name);
        return w(a, b) || {};
      }
    }
    function w(a, b) {
      a = p(a, b);
      return !a ? null : a.variables;
    }
    function x(a, b) {
      var c = {};
      b.forEach(function (b, d) {
        if (b != null) {
          d = w(a, b);
          d != null && Object.assign(c, d);
        }
      });
      return c;
    }
    function y(a, c) {
      return (
        a.owner === c.owner &&
        a.dataID === c.dataID &&
        a.node === c.node &&
        (h || (h = b('areEqual')))(a.variables, c.variables)
      );
    }
    function f(a, b) {
      if (a === b) return !0;
      else if (a == null) return b == null;
      else if (b == null) return a == null;
      else if (
        a.kind === 'SingularReaderSelector' &&
        b.kind === 'SingularReaderSelector'
      )
        return y(a, b);
      else if (
        a.kind === 'PluralReaderSelector' &&
        b.kind === 'PluralReaderSelector'
      )
        return (
          a.selectors.length === b.selectors.length &&
          a.selectors.every(function (a, c) {
            return y(a, b.selectors[c]);
          })
        );
      else return !1;
    }
    function z(a, b, c, d, e, f) {
      e === void 0 && (e = !1);
      return {
        kind: 'SingularReaderSelector',
        dataID: b,
        isWithinUnmatchedTypeRefinement: e,
        clientEdgeTraversalPath: (b = f) != null ? b : null,
        node: a,
        variables: c,
        owner: d,
      };
    }
    function A(a, b, c) {
      return { dataID: b, node: a, variables: c };
    }
    e.exports = {
      areEqualSelectors: f,
      createReaderSelector: z,
      createNormalizationSelector: A,
      getDataIDsFromFragment: s,
      getDataIDsFromObject: c,
      getSingularSelector: p,
      getPluralSelector: q,
      getSelector: r,
      getSelectorsFromObject: a,
      getVariablesFromSingularFragment: w,
      getVariablesFromPluralFragment: x,
      getVariablesFromFragment: v,
      getVariablesFromObject: d,
    };
  },
  null,
);
