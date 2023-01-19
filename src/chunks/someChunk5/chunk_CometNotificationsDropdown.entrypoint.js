__d(
  'CometNotificationsDropdown.entrypoint',
  [
    'CometNotificationsDropdownQuery$Parameters',
    'JSResourceForInteraction',
    'WebPixelRatio',
    'gkx',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        a = {
          count: 15,
          environment: 'MAIN_SURFACE',
          menuUseEntryPoint: c('gkx')('146'),
          scale: d('WebPixelRatio').get(),
        };
        return {
          queries: {
            notificationsDropdownQueryReference: {
              parameters: b('CometNotificationsDropdownQuery$Parameters'),
              variables: a,
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometNotificationsDropdown.react',
      ).__setRef('CometNotificationsDropdown.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
