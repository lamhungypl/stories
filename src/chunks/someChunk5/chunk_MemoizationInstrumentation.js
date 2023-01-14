__d(
  'MemoizationInstrumentation',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = null;
    function a(a) {
      i == null || h(0, 2221), (i = a);
    }
    function b(a, b) {
      return i ? i.functionCall(a, b) : null;
    }
    g.inject = a;
    g.onFunctionCall = b;
  },
  98,
);
