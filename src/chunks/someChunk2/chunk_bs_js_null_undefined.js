__d(
  'bs_js_null_undefined',
  ['bs_caml_option'],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      if (a == null) return a;
      else return b(a);
    }
    function c(a, b) {
      if (!(a == null)) return b(a);
    }
    function d(a) {
      if (a !== void 0) return b('bs_caml_option').valFromOption(a);
    }
    e = d;
    f.bind = a;
    f.iter = c;
    f.fromOption = d;
    f.from_opt = e;
  },
  null,
); /*FB_PKG_DELIM*/
