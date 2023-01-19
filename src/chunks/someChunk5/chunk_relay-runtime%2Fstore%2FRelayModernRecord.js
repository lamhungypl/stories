__d(
  'relay-runtime/store/RelayModernRecord',
  [
    'invariant',
    'areEqual',
    'relay-runtime/store/ClientID',
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/util/deepFreeze',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j = b('relay-runtime/store/ClientID').isClientID,
      k = (j = b('relay-runtime/store/RelayStoreUtils')).ACTOR_IDENTIFIER_KEY,
      l = j.ID_KEY,
      m = j.INVALIDATED_AT_KEY,
      n = j.REF_KEY,
      o = j.REFS_KEY,
      p = j.ROOT_ID,
      q = j.TYPENAME_KEY;
    function a(a) {
      return babelHelpers['extends']({}, a);
    }
    function c(a, b) {
      for (var c in a)
        Object.prototype.hasOwnProperty.call(a, c) &&
          c !== l &&
          c !== q &&
          (b[c] = a[c]);
    }
    function d(a, b) {
      var c = {};
      c[l] = a;
      c[q] = b;
      return c;
    }
    function f(a) {
      return a[l];
    }
    function r(a) {
      return a[q];
    }
    function s(a, b) {
      var c = a[b];
      c &&
        typeof c === 'object' &&
        ((!Object.prototype.hasOwnProperty.call(c, n) &&
          !Object.prototype.hasOwnProperty.call(c, o)) ||
          g(
            0,
            696,
            a[l],
            b,
            Object.prototype.hasOwnProperty.call(c, n)
              ? 'a linked record'
              : 'plural linked records',
          ));
      return c;
    }
    function t(a, b) {
      var c = a[b];
      if (c == null) return c;
      c = c;
      (typeof c === 'object' && c && typeof c[n] === 'string') ||
        g(
          0,
          53158,
          a[l],
          b,
          JSON.stringify(c),
          typeof c === 'object' && c[o] !== void 0
            ? ' It appears to be a plural linked record: did you mean to call getLinkedRecords() instead of getLinkedRecord()?'
            : '',
        );
      return c[n];
    }
    function u(a, b) {
      var c = a[b];
      if (c == null) return c;
      (typeof c === 'object' && Array.isArray(c[o])) ||
        g(
          0,
          53159,
          a[l],
          b,
          JSON.stringify(c),
          typeof c === 'object' && c[n] !== void 0
            ? ' It appears to be a singular linked record: did you mean to call getLinkedRecord() instead of getLinkedRecords()?'
            : '',
        );
      return c[o];
    }
    function v(a) {
      if (a == null) return null;
      a = a[m];
      return typeof a !== 'number' ? null : a;
    }
    function w(a, c) {
      var d = null,
        e = Object.keys(c);
      for (var f = 0; f < e.length; f++) {
        var g = e[f];
        (d || !(h || (h = b('areEqual')))(a[g], c[g])) &&
          ((d = d !== null ? d : babelHelpers['extends']({}, a)),
          (d[g] = c[g]));
      }
      return d !== null ? d : a;
    }
    function x(a, b) {
      return babelHelpers['extends']({}, a, b);
    }
    function y(a) {
      (i || (i = b('relay-runtime/util/deepFreeze')))(a);
    }
    function z(a, b, c) {
      a[b] = c;
    }
    function A(a, b, c) {
      var d = {};
      d[n] = c;
      a[b] = d;
    }
    function B(a, b, c) {
      var d = {};
      d[o] = c;
      a[b] = d;
    }
    function C(a, b, c, d) {
      var e = {};
      e[n] = d;
      e[k] = c;
      a[b] = e;
    }
    function D(a, b) {
      var c = a[b];
      if (c == null) return c;
      (typeof c === 'object' && typeof c[n] === 'string' && c[k] != null) ||
        g(0, 45087, a[l], b, JSON.stringify(c));
      return [c[k], c[n]];
    }
    e.exports = {
      clone: a,
      copyFields: c,
      create: d,
      freeze: y,
      getDataID: f,
      getInvalidationEpoch: v,
      getLinkedRecordID: t,
      getLinkedRecordIDs: u,
      getType: r,
      getValue: s,
      merge: x,
      setValue: z,
      setLinkedRecordID: A,
      setLinkedRecordIDs: B,
      update: w,
      getActorLinkedRecordID: D,
      setActorLinkedRecordID: C,
    };
  },
  null,
);
