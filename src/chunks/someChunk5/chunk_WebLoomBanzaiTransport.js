__d(
  'WebLoomBanzaiTransport',
  ['Banzai'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      post: function (a, b) {
        c('Banzai').post('loom_trace', a, {
          callback: b.onComplete,
          delay: b.isHighPri ? c('Banzai').VITAL_WAIT : c('Banzai').BASIC_WAIT,
        });
      },
      flush: function (a, b) {
        c('Banzai').flush(a, b);
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
