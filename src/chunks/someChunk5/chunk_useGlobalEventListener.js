__d(
  'useGlobalEventListener',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useEffect,
      i = {
        fullscreenchange: [
          'webkitfullscreenchange',
          'mozfullscreenchange',
          'MSFullscreenChange',
          'fullscreenchange',
        ],
      };
    a = function (a, b, c) {
      h(
        function () {
          if (b != null) {
            var d,
              e = (d = i[a]) != null ? d : a;
            window.addEventListener(e, b, c);
            return function () {
              window.removeEventListener(e, b, c);
            };
          }
        },
        [b, a, c],
      );
    };
    g['default'] = a;
  },
  98,
);
