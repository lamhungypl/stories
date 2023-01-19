__d(
  'ReactFeatureFlags',
  ['gkx', 'qex'],
  function (a, b, c, d, e, f) {
    'use strict';
    c = {
      enableSyncDefaultUpdates: !0,
      enableFilterEmptyStringAttributesDOM: (a = b('gkx'))('1399218'),
      disableInputAttributeSyncing: !1,
      disableSchedulerTimeoutBasedOnReactExpirationTime: a('1291023'),
      warnAboutSpreadingKeyToJSX: !1,
      enableLegacyFBSupport: a('1401060'),
      skipUnmountedBoundaries: a('1722014'),
      disableSchedulerTimeoutInWorkLoop: !1,
      enableUseRefAccessWarning: a('1778302'),
      disableNativeComponentFrames: a('1848749'),
      enableUnifiedSyncLane: a('2257'),
      enableSchedulingProfiler: a('1596063'),
      enableProfilerNestedUpdateScheduledHook: a('1840809'),
      enableTransitionTracing: a('6862'),
      enableLazyContextPropagation: b('qex')._('644') === !0,
      enableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay:
        b('qex')._('647') === !0,
    };
    e.exports = c;
  },
  null,
);
