__d(
  'getCometBadgeColorStyle',
  ['unrecoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {
      blue: { backgroundColor: 'xwnonoy', $$css: !0 },
      darkGray: { backgroundColor: 'xhazfnh', $$css: !0 },
      gray: { backgroundColor: 'x1d2osyd', $$css: !0 },
      green: { backgroundColor: 'xv9rvxn', $$css: !0 },
      lightBlue: { backgroundColor: 'xfmpgtx', $$css: !0 },
      red: { backgroundColor: 'x1cdvf7c', $$css: !0 },
      yellow: { backgroundColor: 'xacajkf', $$css: !0 },
    };
    function a(a) {
      switch (a) {
        case 'blue':
          return h.blue;
        case 'gray':
          return h.gray;
        case 'darkGray':
          return h.darkGray;
        case 'green':
          return h.green;
        case 'lightBlue':
          return h.lightBlue;
        case 'red':
          return h.red;
        case 'yellow':
          return h.yellow;
        default:
          a;
          throw c('unrecoverableViolation')(
            ' Invalid color in getCometBadgeColorStyle',
            'comet_ui',
          );
      }
    }
    g['default'] = a;
  },
  98,
);
