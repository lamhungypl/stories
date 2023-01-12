__d(
  'useCometTypeaheadStateQueryString',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useState;
    function a(a) {
      var b = i(a),
        c = b[0],
        d = b[1];
      h(
        function () {
          return d(a);
        },
        [a],
      );
      return [c, d];
    }
    g['default'] = a;
  },
  98,
);
