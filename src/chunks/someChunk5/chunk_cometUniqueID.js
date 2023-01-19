__d(
  'cometUniqueID',
  ['ExecutionEnvironment'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 0,
      i;
    c('ExecutionEnvironment').canUseDOM ? (i = 'c') : (i = 's');
    function a() {
      return 'jsc_' + i + '_' + (h++).toString(36);
    }
    g['default'] = a;
  },
  98,
);
