__d(
  'useCometLoadingStateTracker',
  ['CometVisualCompletionAttributes', 'cr:1791018', 'cr:683059', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    e = d('react');
    var h = e.useEffect,
      i = e.useRef;
    function a() {
      var a = i(null);
      h(function () {
        var c = a.current,
          d = [];
        b('cr:1791018') &&
          c != null &&
          d.concat(b('cr:1791018').trackLoadingState(c));
        b('cr:683059') &&
          c != null &&
          d.push(b('cr:683059').trackLoadingState(c));
        return function () {
          d.forEach(function (a) {
            a();
          });
        };
      }, []);
      return [c('CometVisualCompletionAttributes').LOADING_STATE, a];
    }
    g['default'] = a;
  },
  98,
);
