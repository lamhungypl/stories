__d(
  'useStoriesCreateFormExitConfirmation',
  ['StoriesCreateConstants', 'useOnBeforeUnload'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, e) {
      c('useOnBeforeUnload')(function () {
        if (a) return;
        var c = d('StoriesCreateConstants').LEAVE_TEXT.DEFAULT;
        return {
          primaryButtonLabel: c.CONFIRM,
          secondaryButtonLabel: c.CANCEL,
          title: b,
          warnMessage: e,
        };
      });
    }
    g['default'] = a;
  },
  98,
);
