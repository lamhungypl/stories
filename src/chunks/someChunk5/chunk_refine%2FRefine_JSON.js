__d(
  'refine/Refine_JSON',
  ['refine/Refine_API'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('refine/Refine_API').assertion;
    function h(a, b) {
      if (a == null) return null;
      try {
        return JSON.parse(a, b);
      } catch (a) {
        return null;
      }
    }
    function a(a, b) {
      var c = g(a, (a = b) != null ? a : 'value is invalid');
      return function (a) {
        return c(h((a = a) != null ? a : ''));
      };
    }
    function c(a) {
      return function (b) {
        b = a(h(b));
        return b.type === 'success' ? b.value : null;
      };
    }
    e.exports = { jsonParserEnforced: a, jsonParser: c };
  },
  null,
);
