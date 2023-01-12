__d(
  'useOnRefreshScrollToTop',
  ['CometOnRefresh.react', 'react', 'scrollTo'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback;
    function a(a) {
      var b = h(
        function () {
          c('scrollTo')({ behavior: 'smooth', onScrollComplete: a, top: 0 });
        },
        [a],
      );
      d('CometOnRefresh.react').useOnRefresh(b);
    }
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
