__d(
  'BanzaiLogger',
  ['Banzai'],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      return {
        log: function (b, d) {
          c('Banzai').post('logger:' + b, d, a);
        },
        create: h,
      };
    }
    a = h();
    b = a;
    g['default'] = b;
  },
  98,
);
