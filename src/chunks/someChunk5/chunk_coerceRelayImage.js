__d(
  'coerceRelayImage',
  ['coerceRelayImage_image.graphql'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    h !== void 0 ? h : (h = b('coerceRelayImage_image.graphql'));
    function a(a) {
      return {
        height: (a.height || 0) / (a.scale == null ? 1 : a.scale),
        sprited: 0,
        uri: a.uri,
        width: (a.width || 0) / (a.scale == null ? 1 : a.scale),
      };
    }
    g['default'] = a;
  },
  98,
);
