__d(
  'react-relay/relay-hooks/useUnsafeRef_DEPRECATED',
  ['react'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    c = g || b('react');
    var h = c.useMemo;
    function a(a) {
      return h(function () {
        return { current: a };
      }, []);
    }
    e.exports = a;
  },
  null,
);
