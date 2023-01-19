__d(
  'relay-runtime/store/experimental-live-resolvers/LiveResolverSuspenseSentinel',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = Object.freeze({ __LIVE_RESOLVER_SUSPENSE_SENTINEL: !0 });
    function a() {
      return g;
    }
    function b(a) {
      return a === g;
    }
    e.exports = { isSuspenseSentinel: b, suspenseSentinel: a };
  },
  null,
);
