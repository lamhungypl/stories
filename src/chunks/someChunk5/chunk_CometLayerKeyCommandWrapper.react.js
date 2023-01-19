__d(
  'CometLayerKeyCommandWrapper.react',
  ['CometLayerKeyCommandWidget', 'SetActiveLayerIfAttached.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.children;
      a = a.debugName;
      return h.jsxs(c('CometLayerKeyCommandWidget').Wrapper, {
        debugName: a,
        children: [
          h.jsx(c('SetActiveLayerIfAttached.react'), { debugName: a }),
          b,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
