__d(
  'ScheduledServerJSWithCSS',
  ['Bootloader', 'ScheduledServerJS'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, e, f) {
      f.length > 0 &&
        c('Bootloader').loadResources(f, {
          onAll: function () {
            d('ScheduledServerJS').handle(a, b, e);
          },
        });
    }
    g.handle = a;
  },
  98,
);
