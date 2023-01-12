__d(
  'MediaUploadInitFailureFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1743950');
    c = b('FalcoLoggerInternal').create('media_upload_init_failure', a);
    e.exports = c;
  },
  null,
);
