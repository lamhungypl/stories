__d(
  'storiesCreateFontInjector',
  ['CometRelay', 'storiesCreateFontInjector_data.graphql'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = h !== void 0 ? h : (h = b('storiesCreateFontInjector_data.graphql')),
      j = {},
      k = null;
    function a(a) {
      a = d('CometRelay').readInlineData(i, a);
      var b = a == null ? void 0 : a.font_name;
      a = a == null ? void 0 : a.font_url;
      if (b == null || a == null) return;
      if (j[b]) return;
      k ||
        ((k = document.createElement('style')),
        (k.type = 'text/css'),
        document.head && document.head.appendChild(k));
      k.appendChild(
        document.createTextNode(
          "\n    @font-face {\n      font-family: '" +
            b +
            "';\n      src: url(" +
            a +
            ');\n    }\n  ',
        ),
      );
      j[b] = a;
    }
    g['default'] = a;
  },
  98,
);
