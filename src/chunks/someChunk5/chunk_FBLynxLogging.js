__d(
  'FBLynxLogging',
  ['AsyncRequest', 'ODS', 'XLynxAsyncCallbackControllerRouteBuilder'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      var b = c('XLynxAsyncCallbackControllerRouteBuilder').buildURL({});
      new (c('AsyncRequest'))(b)
        .setData({ lynx_uri: a })
        .setErrorHandler(function (a) {
          a = a.getError();
          d('ODS').bumpEntityKey(3861, 'linkshim', 'click_log.post.fail.' + a);
        })
        .setTransportErrorHandler(function (a) {
          a = a.getError();
          d('ODS').bumpEntityKey(
            3861,
            'linkshim',
            'click_log.post.transport_fail.' + a,
          );
        })
        .send();
    }
    g.log = a;
  },
  98,
);
