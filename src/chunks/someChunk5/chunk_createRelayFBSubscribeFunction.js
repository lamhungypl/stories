__d(
  'createRelayFBSubscribeFunction',
  ['RelayFBSubscribeFunction'],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var c = a.queryResponseCache,
        d = a.actorID;
      return function (a, e, f) {
        f = f == null ? void 0 : f.onSubscribe;
        return b('RelayFBSubscribeFunction')(a, e, c, d, f);
      };
    }
    e.exports = a;
  },
  null,
);
