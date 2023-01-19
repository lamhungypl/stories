__d(
  'FBInteractionTracingDependencies',
  [
    'HeroBootloadPerfStore',
    'QuickPerformanceLogger',
    'WebLoom',
    'cr:1791018',
    'cr:1791501',
    'cr:1808490',
    'cr:683059',
    'getReactComponentStackFromDOMElement_THIS_CAN_BREAK',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getReactComponentStackFromDOMElement: c(
        'getReactComponentStackFromDOMElement_THIS_CAN_BREAK',
      ),
      HeroBootloadPerfStore: {
        addStaticResourcesStats: d('HeroBootloadPerfStore')
          .addStaticResourcesStats,
      },
      InteractionVC: b('cr:1791018'),
      QuickPerformanceLogger: c('QuickPerformanceLogger'),
      UserTimingUtils: b('cr:1808490'),
      VCTracker: b('cr:1791501'),
      VisualCompletion: b('cr:683059'),
      WebLoom: c('WebLoom'),
    };
    g['default'] = a;
  },
  98,
);
