__d(
  'OutsideExceptionKeyCommandListener.react',
  [
    'BaseKeyCommandListener.react',
    'CometLayerKeyCommandWrapper.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      return h.jsx(c('BaseKeyCommandListener.react'), {
        observersEnabled: !1,
        children: h.jsx(c('CometLayerKeyCommandWrapper.react'), {
          debugName: 'outside exception layer',
          children: a.children,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
