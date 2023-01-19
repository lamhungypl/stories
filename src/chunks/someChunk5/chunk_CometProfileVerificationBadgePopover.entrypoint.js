__d(
  'CometProfileVerificationBadgePopover.entrypoint',
  [
    'CometProfileVerificationBadgePopoverQuery$Parameters',
    'JSResourceForInteraction',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        a = a.profileID;
        return {
          queries: {
            queryReference: {
              parameters: b(
                'CometProfileVerificationBadgePopoverQuery$Parameters',
              ),
              variables: { profileID: a },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometProfileVerificationBadgePopover.react',
      ).__setRef('CometProfileVerificationBadgePopover.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
