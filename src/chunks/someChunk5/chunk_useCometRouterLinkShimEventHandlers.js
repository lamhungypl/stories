__d(
  'useCometRouterLinkShimEventHandlers',
  [
    'CometGHLRenderingContext',
    'ReactDOMComet',
    'gkx',
    'react',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useState,
      j = c('requireDeferred')('LynxAsyncCallbackFalcoEvent').__setRef(
        'useCometRouterLinkShimEventHandlers',
      );
    function a(a) {
      var b = a.href,
        e = a.lynxMode,
        f = a.onContextMenu,
        g = a.onHoverStart,
        k = a.onPress,
        l = a.shimmed,
        m = a.unshimmedHref;
      a = h(c('CometGHLRenderingContext'));
      a = i(a);
      var n = a[0],
        o = a[1];
      function p(a) {
        f && f(a),
          n &&
            d('ReactDOMComet').flushSync(function () {
              o(!1);
            });
      }
      function q(a) {
        k && k(a),
          l === !0 &&
          e === 'ASYNCLAZY' &&
          b != null &&
          m != null &&
          c('gkx')('1642984')
            ? (n ||
                d('ReactDOMComet').flushSync(function () {
                  o(!0);
                }),
              j.onReadyImmediately(function (a) {
                a.log(function () {
                  return { lynx_uri: b, next_uri: m };
                });
              }))
            : n &&
              d('ReactDOMComet').flushSync(function () {
                o(!1);
              });
      }
      function r(a) {
        g && g(a), l === !0 && o(!0);
      }
      return { onContextMenu: p, onHoverStart: r, onPress: q, useOrigHref: n };
    }
    g['default'] = a;
  },
  98,
);
