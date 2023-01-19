__d(
  'CometTrackingNodeProvider.react',
  [
    'CometTrackingNodeAbstractViewHierarchyWrapperContext',
    'CometTrackingNodesContext',
    'encodeTrackingNode',
    'react',
    'useCometTrackingNodes',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.children,
        d = a.index,
        e = a.trackingNode,
        f = c('useCometTrackingNodes')();
      a = j(
        function () {
          if (e == null) return f;
          var a = c('encodeTrackingNode')(e, d);
          return [a].concat(f);
        },
        [f, e, d],
      );
      var g = b,
        k = i(c('CometTrackingNodeAbstractViewHierarchyWrapperContext'));
      k != null && (g = k(a, b));
      return h.jsx(c('CometTrackingNodesContext').Provider, {
        value: a,
        children: g,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
