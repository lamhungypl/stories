__d(
  'CometUBTManager.react',
  [
    'CometUBTContext',
    'CometUsabilityTaskReducer',
    'QPLEvent',
    'QPLUserFlow',
    'QuickPerformanceLogger',
    'cr:12284',
    'qpl',
    'react',
    'requireDeferred',
    'useCometRouterState',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    e = d('react');
    var i = e.useEffect,
      j = e.useMemo,
      k = e.useReducer,
      l = c('requireDeferred')('CometUBTLogger').__setRef(
        'CometUBTManager.react',
      ),
      m = c('requireDeferred')('handleCometUBTCheckSuccessMarker').__setRef(
        'CometUBTManager.react',
      ),
      n = c('qpl')._(42795009, '8382'),
      o = {
        navigationSteps: 0,
        successMarkerHasExtraData: !1,
        successMarkers: null,
        taskInfo: null,
        taskResult: 'NOT_STARTED',
        taskState: 'INACTIVE',
        timer: null,
        userResult: 'NOT_STARTED',
      };
    function p(a) {
      var b = a == null ? void 0 : a.pushViewStack;
      b = b == null ? void 0 : (b = b[b.length - 1]) == null ? void 0 : b.route;
      a = a == null ? void 0 : (a = a.main) == null ? void 0 : a.route;
      return (b = b) != null ? b : a;
    }
    function a(a) {
      a = a.children;
      var e = k(d('CometUsabilityTaskReducer').reducer, o),
        f = e[0],
        g = e[1],
        q = c('useCometRouterState')(),
        r = j(
          function () {
            return { dispatch: g, state: f };
          },
          [g, f],
        ),
        s = b('cr:12284')();
      e = f.navigationSteps === 0;
      i(
        function () {
          if (r.state.taskState !== 'ACTIVE') return;
          var a = p(q),
            b = String(a == null ? void 0 : a.tracePolicy);
          l.onReadyImmediately(function (a) {
            return a.addNavigationPoint(b, f.navigationSteps);
          });
          g({
            type: 'LOG_NAVIGATION_STEP',
            value: String(a == null ? void 0 : a.tracePolicy),
          });
        },
        [r.state.taskState, g, e, q],
      );
      i(
        function () {
          if (r.state.taskState !== 'ACTIVE') return;
          var a = function (a, b) {
            m.onReadyImmediately(function (e) {
              return e(
                g,
                {
                  event: '' + d('QPLEvent').getMarkerId(b),
                  extraData: [{ key: 'qplEventName', requiredValue: a }],
                  module: 'qpl:',
                },
                r.state.successMarkers,
                r.state.taskResult,
                function (a) {
                  c('QPLUserFlow').addPoint(
                    n,
                    'QPL.' + d('QPLEvent').getMarkerId(b),
                  ),
                    s && s.validateSuccessMarker(a);
                },
              );
            });
          };
          c('QuickPerformanceLogger').addListener({
            onMarkerEnd: function (b, c, d, e) {
              return a('end', c);
            },
            onMarkerPoint: function (b, c, d, e, f) {
              return a(d, b);
            },
            onMarkerStart: function (b, c, d) {
              return a('start', b);
            },
          });
        },
        [r.state.successMarkers, r.state.taskState, r.state.taskResult, g, s],
      );
      i(
        function () {
          if (r.state.taskState !== 'ACTIVE') return;
          var a = p(q);
          m.onReadyImmediately(function (b) {
            return b(
              g,
              {
                event: String(a == null ? void 0 : a.tracePolicy),
                extraData:
                  (a == null ? void 0 : a.params) != null &&
                  r.state.successMarkerHasExtraData
                    ? Object.entries(a.params).map(function (a) {
                        return {
                          key: String(a[0]),
                          requiredValue: String(a[1]),
                        };
                      })
                    : null,
                module: 'navigation:navigate_to',
              },
              r.state.successMarkers,
              r.state.taskResult,
              function (a) {
                s && s.validateSuccessMarker(a);
              },
            );
          });
        },
        [
          r.state.taskResult,
          r.state.successMarkerHasExtraData,
          r.state.taskState,
          g,
          q,
          r.state.successMarkers,
          s,
        ],
      );
      return h.jsx(c('CometUBTContext').Provider, { value: r, children: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
