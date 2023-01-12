__d(
  'MediaUploadFailureFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1743943');
    c = b('FalcoLoggerInternal').create('media_upload_failure', a);
    e.exports = c;
  },
  null,
);
