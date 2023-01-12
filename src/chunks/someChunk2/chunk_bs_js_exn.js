__d(
  'bs_js_exn',
  ['bs_caml_js_exceptions'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('bs_caml_js_exceptions').internalToOCamlException;
    function a(a) {
      throw new Error(a);
    }
    function c(a) {
      throw new EvalError(a);
    }
    function d(a) {
      throw new RangeError(a);
    }
    function e(a) {
      throw new ReferenceError(a);
    }
    function h(a) {
      throw new SyntaxError(a);
    }
    function i(a) {
      throw new TypeError(a);
    }
    function j(a) {
      throw new URIError(a);
    }
    b = b('bs_caml_js_exceptions').$$Error;
    f.$$Error = b;
    f.anyToExnInternal = g;
    f.raiseError = a;
    f.raiseEvalError = c;
    f.raiseRangeError = d;
    f.raiseReferenceError = e;
    f.raiseSyntaxError = h;
    f.raiseTypeError = i;
    f.raiseUriError = j;
  },
  null,
);
