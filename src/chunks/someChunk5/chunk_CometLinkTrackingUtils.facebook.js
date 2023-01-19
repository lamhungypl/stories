__d(
  'CometLinkTrackingUtils.facebook',
  ['ConstUriUtils', 'isFacebookURI'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, e) {
      if (a != null && a !== '#' && (e.length || b.length)) {
        var f = d('ConstUriUtils').getUri(a);
        if (f != null) {
          if (!c('isFacebookURI')(f)) return a;
          e.length && (f = f.addQueryParam('__cft__', e));
          b.length && f != null && (f = f.addQueryParam('__tn__', b.join('')));
          return f != null ? f.toString() : a;
        }
      }
      return a;
    }
    g.decorateHrefWithTrackingInfo = a;
  },
  98,
);
