__d(
  'processRelaySRPayload',
  ['HasteResponse', 'ifRequireable'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, e, f) {
      var g = a.ddd;
      if (!g) {
        e && e();
        return;
      }
      var h = function () {
        return d('HasteResponse').handle(g, {
          source: 'relay_3d',
          sourceDetail: b,
          onBlocking: e,
          onLog: f,
        });
      };
      c('ifRequireable')(
        'ReactDOMComet',
        function (a) {
          return a.flushSync(h);
        },
        h,
      );
    }
    g['default'] = a;
  },
  98,
);
