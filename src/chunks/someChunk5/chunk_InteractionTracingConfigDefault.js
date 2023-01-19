__d(
  'InteractionTracingConfigDefault',
  ['OneTraceQPLLogger', 'SiteData', 'gkx', 'performanceNavigationStart'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = 6e4;
    b = {
      appStart: c('gkx')('6196') ? 0 : c('performanceNavigationStart')(),
      defaultTracePolicy: 'default',
      enableMemoryLogging: c('gkx')('1475'),
      logLateMutationReactStack: c('gkx')('1914427'),
      logVCReactStack: c('gkx')('1778371'),
      heroLatePlaceholderDetection: c('gkx')('4638'),
      heroDebugTracing: c('gkx')('4639'),
      pkgCohort: c('SiteData').pkg_cohort,
      timeout: a,
      qplActionMap: d('OneTraceQPLLogger').qplActionMap,
      useDocumentBodyForVCRoot: !0,
      navigationCancelsInteractions: !1,
      heroNestedRootsFix: c('gkx')('8428'),
    };
    g.DEFAULT_TRACING_CONFIG = b;
  },
  98,
);
