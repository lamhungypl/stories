__d(
  'CometRouterDispatcherContextFactory.react',
  [
    'CometRouterDispatcherContext',
    'DocumentScrollViewPageOffsetsContext',
    'filterObject',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.actorID,
        d = a.children,
        e = a.from,
        f = a.tracePolicy,
        g = a.url,
        k = i(c('CometRouterDispatcherContext')),
        l = i(c('DocumentScrollViewPageOffsetsContext'));
      k = j(
        function () {
          var a,
            d = { actorID: b, from: e, pageOffsets: l, tracePolicy: f, url: g };
          d = c('filterObject')(d, function (a) {
            return a !== void 0;
          });
          return (a = k) == null ? void 0 : a.withContext(d);
        },
        [b, k, e, l, f, g],
      );
      return k == null
        ? d
        : h.jsx(c('CometRouterDispatcherContext').Provider, {
            value: k,
            children: d,
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
