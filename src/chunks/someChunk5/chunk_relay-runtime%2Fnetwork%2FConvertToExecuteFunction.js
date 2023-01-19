__d(
  'relay-runtime/network/ConvertToExecuteFunction',
  ['relay-runtime/network/RelayObservable'],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return function (c, d, e, f, g) {
        var h = a(c, d, e, f, g);
        return h instanceof Error
          ? b('relay-runtime/network/RelayObservable').create(function (a) {
              return a.error(h);
            })
          : b('relay-runtime/network/RelayObservable').from(h);
      };
    }
    e.exports = { convertFetch: a };
  },
  null,
);
