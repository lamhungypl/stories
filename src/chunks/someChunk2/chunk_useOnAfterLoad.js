__d(
  'useOnAfterLoad',
  ['RunComet', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useEffect;
    function a(a) {
      h(
        function () {
          var b = d('RunComet').onAfterLoad(a);
          return b.remove;
        },
        [a],
      );
    }
    g['default'] = a;
  },
  98,
);
