__d(
  'useDeferredModuleOnReady',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useState;
    function a(b) {
      var c = i(function () {
          return b.getModuleIfRequireable();
        }),
        a = c[0],
        d = c[1];
      h(
        function () {
          if (a != null) return;
          var c = b.onReady(function (a) {
            d(function () {
              return a;
            });
          });
          return function () {
            c.remove();
          };
        },
        [b, a],
      );
      return a;
    }
    g['default'] = a;
  },
  98,
);
