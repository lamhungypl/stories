__d(
  'react-relay/relay-hooks/ProfilerContext',
  ['react'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    a = g || b('react');
    c = a.createContext({
      wrapPrepareQueryResource: function (a) {
        return a();
      },
    });
    e.exports = c;
  },
  null,
);
