__d(
  'useScrollLeftRailToTopOnChange',
  ['BaseScrollableAreaContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect;
    function a(a) {
      var b = h(c('BaseScrollableAreaContext')),
        d = b[b.length - 1];
      i(
        function () {
          var a = d.getDOMNode();
          a != null && (a.scrollTop = 0);
        },
        [d, a],
      );
    }
    g['default'] = a;
  },
  98,
);
