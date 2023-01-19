__d(
  'CometVisualCompletion',
  ['CometVCTracker', 'JSScheduler', 'QPLEvent', 'gkx', 'performanceNow'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {
        defer_expensive_calculation: function (a) {
          d('JSScheduler').scheduleLoggingPriCallback(a);
        },
        observeTextMutation: !1,
        retain_element_reference:
          c('gkx')('950768') || c('gkx')('1293035') || c('gkx')('1537962'),
        use_image_download_tracker: c('gkx')('6017'),
        vc_deep_cleanup: c('gkx')('2654'),
      },
      i = null,
      j = new Map(),
      k = 4,
      l;
    a = {
      addAnnotation: function (a, b) {
        i != null && i.addAnnotation(a, b);
      },
      addAnnotationDouble: function (a, b) {
        i != null && i.addAnnotationDouble(a, b);
      },
      addAnnotationInt: function (a, b) {
        i != null && i.addAnnotationInt(a, b);
      },
      addFirstMarkerPoint: function (a, b, d) {
        b === void 0 && (b = c('performanceNow')()),
          d === void 0 && (d = {}),
          i != null && b != null && b > 0 && i.addFirstMarkerPoint(a, b, d);
      },
      addMarkerPoint: function (a, b, d) {
        b === void 0 && (b = c('performanceNow')()),
          d === void 0 && (d = {}),
          i != null && b != null && b > 0 && i.addMarkerPoint(a, b, d);
      },
      addTag: function (a, b) {
        i != null && i.addTag(a, b);
      },
      addTracedInteraction: function (a, b, e) {
        var f = 1,
          g = null;
        j.get(a) && (f = j.get(a) + 1);
        j.set(a, f);
        if (i != null) {
          if (f >= k) return function () {};
          g = i.traceID;
          i.addMarkerPoint(a + '_' + f + '_start', c('performanceNow')(), {
            interactionId: b,
            qplEvent: d('QPLEvent').getMarkerId(e),
          });
        }
        return function () {
          i != null &&
            i.traceID === g &&
            i.addMarkerPoint(a + '_' + f + '_end', c('performanceNow')());
        };
      },
      addVisualElement: function (a, b, d) {
        d === void 0 && (d = c('performanceNow')()),
          i != null &&
            a != null &&
            (i.mutationSeq++, i.addVisualElement(i.mutationSeq, a, b, d));
      },
      dumpLocks: function () {
        if (i != null) return i.dumpLocks();
      },
      excludeElement: function (a) {
        i != null && l == null && i.excludeElement(a);
      },
      getCurrentNavigationTrace: function () {
        return i;
      },
      getReport: function () {
        return l;
      },
      holdTrigger: function (a) {
        if (i != null) return i.lock(a);
        else return function () {};
      },
      resumeTrigger: function (a) {
        i != null && i.unlock(a);
      },
      setInitialScrollY: function (a) {
        i != null && i.setInitialScrollY(a);
      },
      setRoute: function (a) {
        i != null && a != null && i.setTracePolicy(a);
      },
      setupNavigationMutationRoot: function (a) {
        i != null &&
          (i.observeMutation(a), i.registerNavigationMutationRoot(a));
      },
      traceNavigation: function (a, b, d, e) {
        i = new (c('CometVCTracker').VisualCompletionTraceForNavigation)(
          b,
          e,
          a,
          d,
          h,
        );
        i.onComplete(function (a) {
          l = a;
        });
        l = null;
        j.clear();
        return i;
      },
      trackLoadingState: function (a) {
        if (i != null) return i.waitLoadingState(a);
        else return function () {};
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
