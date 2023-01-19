__d(
  'CometMessagingJewelDropdown.entrypoint',
  [
    'CometMessagingJewelCommunitiesQPBannerContainerQuery$Parameters',
    'CometMessagingJewelDropdownQPBannerContainerQuery$Parameters',
    'JSResourceForInteraction',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function () {
        return {
          queries: {
            qpBannerCommunitiesContainerQueryRef: {
              parameters: c(
                'CometMessagingJewelCommunitiesQPBannerContainerQuery$Parameters',
              ),
              variables: {},
            },
            qpBannerContainerQueryRef: {
              parameters: c(
                'CometMessagingJewelDropdownQPBannerContainerQuery$Parameters',
              ),
              variables: {},
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometMessagingJewelDropdown.react',
      ).__setRef('CometMessagingJewelDropdown.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
