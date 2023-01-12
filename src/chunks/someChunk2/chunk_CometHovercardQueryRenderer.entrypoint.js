__d(
  'CometHovercardQueryRenderer.entrypoint',
  [
    'CometHovercardQueryRendererQuery$Parameters',
    'JSResourceForInteraction',
    'WebPixelRatio',
    'gkx',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        var e = a.actionBarRenderLocation,
          f = a.context,
          g = a.entityID;
        a = a.groupID;
        return {
          queries: {
            hovercardQueryReference: {
              parameters: b('CometHovercardQueryRendererQuery$Parameters'),
              variables: {
                actionBarRenderLocation: e,
                context: f,
                entityID: g,
                groupID: a,
                includeTdaInfo: c('gkx')('4427'),
                scale: d('WebPixelRatio').get(),
              },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometHovercardQueryRenderer.react',
      ).__setRef('CometHovercardQueryRenderer.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
