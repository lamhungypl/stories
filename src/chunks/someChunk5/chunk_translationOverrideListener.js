__d(
  'translationOverrideListener',
  ['requireDeferred'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('requireDeferred')('IntlQtEventFalcoEvent').__setRef(
      'translationOverrideListener',
    );
    function a(a) {
      h.onReady(function (b) {
        return b.log(function () {
          return { hash: a };
        });
      });
    }
    g['default'] = a;
  },
  98,
);
