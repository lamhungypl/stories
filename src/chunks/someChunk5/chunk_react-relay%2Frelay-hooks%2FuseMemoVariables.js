__d(
  'react-relay/relay-hooks/useMemoVariables',
  ['areEqual', 'react'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g, h;
    c = g || b('react');
    var i = c.useState;
    function a(a) {
      var c = i(a),
        d = c[0];
      c = c[1];
      if ((h || (h = b('areEqual')))(a, d)) return d;
      else {
        c(a);
        return a;
      }
    }
    e.exports = a;
  },
  null,
);
