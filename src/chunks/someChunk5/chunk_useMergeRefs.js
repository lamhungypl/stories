__d(
  'useMergeRefs',
  ['mergeRefs', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useMemo;
    function a() {
      for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++)
        b[d] = arguments[d];
      return h(function () {
        return c('mergeRefs').apply(void 0, b);
      }, [].concat(b));
    }
    g['default'] = a;
  },
  98,
);
