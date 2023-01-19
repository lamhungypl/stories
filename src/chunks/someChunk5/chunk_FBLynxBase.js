__d(
  'FBLynxBase',
  ['$', 'FBLynxLogging', 'LinkshimHandlerConfig', 'URI', 'isLinkshimURI'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g;
    function h(a) {
      if (!b('isLinkshimURI')(a)) return null;
      a = a.getQueryData().u;
      return !a ? null : a;
    }
    var i = {
      logAsyncClick: function (a) {
        i.swapLinkWithUnshimmedLink(a);
        a = a.getAttribute('data-lynx-uri');
        if (!a) return;
        b('FBLynxLogging').log(a);
      },
      originReferrerPolicyClick: function (a) {
        var c = b('$')('meta_referrer');
        c.content = b('LinkshimHandlerConfig').switched_meta_referrer_policy;
        i.logAsyncClick(a);
        setTimeout(function () {
          c.content = b('LinkshimHandlerConfig').default_meta_referrer_policy;
        }, 100);
      },
      swapLinkWithUnshimmedLink: function (a) {
        var c = a.href,
          d = h(new (g || (g = b('URI')))(c));
        if (!d) return;
        a.setAttribute('data-lynx-uri', c);
        a.href = d;
      },
      revertSwapIfLynxURIPresent: function (a) {
        var b = a.getAttribute('data-lynx-uri');
        if (!b) return;
        a.removeAttribute('data-lynx-uri');
        a.href = b;
      },
    };
    e.exports = i;
  },
  null,
);
