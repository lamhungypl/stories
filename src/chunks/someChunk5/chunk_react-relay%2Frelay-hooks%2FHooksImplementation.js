__d(
  'react-relay/relay-hooks/HooksImplementation',
  ['warning'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = null;
    function a(a) {
      b('warning')(g !== null, 'Relay HooksImplementation was injected twice.'),
        (g = a);
    }
    function c() {
      return g;
    }
    e.exports = { inject: a, get: c };
  },
  null,
);
