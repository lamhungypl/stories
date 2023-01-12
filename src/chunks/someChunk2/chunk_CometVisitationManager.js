__d(
  'CometVisitationManager',
  ['FBLogger', 'isSearchCometGlobalResultPageTracePolicy', 'pageID'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {
        'comet.marketplace.category': 'comet.marketplace.home',
        'comet.marketplace.home.hoisted_pdp': 'comet.marketplace.home',
      },
      i = {},
      j = null,
      k = null,
      l = !1;
    function m(a) {
      return (
        a.tracePolicy +
        ':' +
        a.instanceId +
        ':' +
        a.subsessionCount +
        ':' +
        a.timeStampMs / 1e3
      );
    }
    function n(a) {
      if (a == null) return;
      a = h[a] ? h[a] : a;
      if (j === a) return;
      var b = i[a];
      b
        ? (b.subsessionCount++, (b.timeStampMs = Date.now()))
        : (i[a] = {
            instanceId: c('pageID'),
            subsessionCount: 1,
            timeStampMs: Date.now(),
            tracePolicy: a,
          });
      k = j;
      j = a;
    }
    function a() {
      if (!l) {
        c('FBLogger')('CometVisitationManager').mustfix(
          'Attempting to get the current visitation id without initialization.',
        );
        return null;
      }
      if (!l || j == null || !i[j]) return null;
      var a = m(i[j]);
      if (
        c('isSearchCometGlobalResultPageTracePolicy')(j) &&
        k != null &&
        i[k]
      ) {
        var b = m(i[k]);
        return a + '|' + b;
      }
      return a;
    }
    function b(a) {
      if (l) return;
      n(a);
      l = !0;
    }
    function o(a) {
      if (!l) {
        c('FBLogger')('CometVisitationManager').mustfix(
          'Updating the visitation manager without initialization',
        );
        return;
      }
      n(a);
    }
    function d(a) {
      o(a.main.route.tracePolicy);
    }
    g.getCurrentVisitationId = a;
    g.init = b;
    g.update = o;
    g.updateFromRouterState = d;
  },
  98,
);
