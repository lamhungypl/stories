__d(
  'relay-runtime/network/wrapNetworkWithLogObserver',
  ['relay-runtime/util/generateID'],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, c) {
      return {
        execute: function (d, e, f, g) {
          var h = b('relay-runtime/util/generateID')(),
            i = {
              start: function (b) {
                a.__log({
                  name: 'network.start',
                  networkRequestId: h,
                  params: d,
                  variables: e,
                  cacheConfig: f,
                });
              },
              next: function (b) {
                a.__log({
                  name: 'network.next',
                  networkRequestId: h,
                  response: b,
                });
              },
              error: function (b) {
                a.__log({
                  name: 'network.error',
                  networkRequestId: h,
                  error: b,
                });
              },
              complete: function () {
                a.__log({ name: 'network.complete', networkRequestId: h });
              },
              unsubscribe: function () {
                a.__log({ name: 'network.unsubscribe', networkRequestId: h });
              },
            },
            j = function (b) {
              a.__log({ name: 'network.info', networkRequestId: h, info: b });
            };
          return c.execute(d, e, f, g, j)['do'](i);
        },
      };
    }
    e.exports = a;
  },
  null,
);
