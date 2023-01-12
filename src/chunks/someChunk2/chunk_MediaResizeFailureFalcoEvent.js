__d(
  'MediaResizeFailureFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1110');
    c = b('FalcoLoggerInternal').create('media_resize_failure', a);
    e.exports = c;
  },
  null,
);
