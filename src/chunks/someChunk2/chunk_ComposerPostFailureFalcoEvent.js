__d(
  'ComposerPostFailureFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1743455');
    c = b('FalcoLoggerInternal').create('composer_post_failure', a);
    e.exports = c;
  },
  null,
);
