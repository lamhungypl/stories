__d(
  'FlowMigrationUtilsForLegacyFiles',
  ['FBLogger'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'flow_typing_for_legacy_code';
    function a(a) {
      c('FBLogger')(h)
        .blameToPreviousFile()
        .event(h + '.bad_call')
        .mustfix(a);
      return new Error('[' + h + '] ' + a);
    }
    g.invariantViolation = a;
  },
  98,
);
