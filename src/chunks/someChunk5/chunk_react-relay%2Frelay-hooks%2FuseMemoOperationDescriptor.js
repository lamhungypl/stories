__d(
  'react-relay/relay-hooks/useMemoOperationDescriptor',
  ['react', 'react-relay/relay-hooks/useMemoVariables', 'relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    c = g || b('react');
    var h = b('relay-runtime').createOperationDescriptor,
      i = b('relay-runtime').getRequest,
      j = c.useMemo;
    function a(a, c, d) {
      var e = b('react-relay/relay-hooks/useMemoVariables')(c),
        f = b('react-relay/relay-hooks/useMemoVariables')(d || {});
      return j(
        function () {
          return h(i(a), e, f);
        },
        [a, e, f],
      );
    }
    e.exports = a;
  },
  null,
);
