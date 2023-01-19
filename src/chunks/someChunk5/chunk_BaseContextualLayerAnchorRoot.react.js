__d(
  'BaseContextualLayerAnchorRoot.react',
  [
    'BaseContextualLayerAnchorRootContext',
    'BaseDOMContainer.react',
    'ExecutionEnvironment',
    'react',
    'useStable',
    'useUnsafeRef_DEPRECATED',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      a = a.children;
      var b = c('useStable')(function () {
          return c('ExecutionEnvironment').canUseDOM
            ? document.createElement('div')
            : null;
        }),
        d = c('useUnsafeRef_DEPRECATED')(b);
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c('BaseContextualLayerAnchorRootContext').Provider, {
            value: d,
            children: a,
          }),
          h.jsx(c('BaseDOMContainer.react'), { node: b }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
