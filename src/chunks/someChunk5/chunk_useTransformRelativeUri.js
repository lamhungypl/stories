__d(
  'useTransformRelativeUri',
  ['BaseLinkUriBaseContext', 'ConstUriUtils', 'isRelativeURL', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useMemo;
    function j(a, b) {
      if (c('isRelativeURL')(b)) {
        var e = d('ConstUriUtils').getUri(b);
        if (e != null) {
          e =
            (a = a.addQueryParams(e.getQueryParams())) == null
              ? void 0
              : (a = a.setPath(e.getPath())) == null
              ? void 0
              : (a = a.setFragment(e.getFragment())) == null
              ? void 0
              : a.toString();
          if (e != null) return e;
        }
      }
      return b;
    }
    function a(a) {
      var b = h(c('BaseLinkUriBaseContext'));
      return i(
        function () {
          return b == null || a == null ? a : j(b, a);
        },
        [b, a],
      );
    }
    g['default'] = a;
  },
  98,
);
