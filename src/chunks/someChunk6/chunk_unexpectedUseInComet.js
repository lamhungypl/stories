__d(
  'unexpectedUseInComet',
  ['FBLogger', 'gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      if (!c('gkx')('708253')) return;
      a = a + ' called unexpectedly. This is not supported in Comet!';
      var b = c('FBLogger')('comet_infra')
        .blameToPreviousFrame()
        .blameToPreviousFrame();
      b.mustfix(a);
    }
    g['default'] = a;
  },
  98,
);
