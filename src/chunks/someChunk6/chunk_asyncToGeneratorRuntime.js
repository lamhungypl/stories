__d(
  'asyncToGeneratorRuntime',
  ['Promise'],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a, c, d, e, f, g, h) {
      try {
        var i = a[g](h),
          j = i.value;
      } catch (a) {
        d(a);
        return;
      }
      i.done ? c(j) : b('Promise').resolve(j).then(e, f);
    }
    function a(a) {
      return function () {
        var c = this,
          d = arguments;
        return new (b('Promise'))(function (b, e) {
          var f = a.apply(c, d);
          function h(a) {
            g(f, b, e, h, i, 'next', a);
          }
          function i(a) {
            g(f, b, e, h, i, 'throw', a);
          }
          h(void 0);
        });
      };
    }
    f.asyncToGenerator = a;
  },
  66,
);
