__d(
  'useFeedPressEventHandler',
  [
    'FBLogger',
    'cr:11054',
    'emptyFunction',
    'react',
    'useStoryClickEventLogger',
    'uuid',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback,
      i =
        (e = b('cr:11054')) != null
          ? e
          : function () {
              return c('emptyFunction');
            };
    function a(a, b) {
      var d = c('useStoryClickEventLogger')(),
        e = i();
      return h(
        function (f) {
          try {
            e(f);
          } catch (a) {
            c('FBLogger')('voyage')
              .catching(a)
              .mustfix('Voyage press logger threw');
          }
          a && a(f);
          var g = f.buttons,
            h = f.timeStamp;
          f = f.type;
          if (
            f === 'click' ||
            f === 'press' ||
            f === 'contextmenu' ||
            (f === 'pressstart' && g === 4)
          ) {
            f = f === 'contextmenu' ? 2 : g === 4 ? 1 : 0;
            g = c('uuid')();
            d(h, f, b, g);
          }
        },
        [a, d, b, e],
      );
    }
    g['default'] = a;
  },
  98,
);
