__d(
  'CometFormattedTextFontLabel.react',
  [
    'CometFormattedTextFontLabel_data.graphql',
    'CometInspirationCustomFontLabel.react',
    'CometRelay',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    function a(a) {
      a = a.data;
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('CometFormattedTextFontLabel_data.graphql')),
        a,
      );
      a =
        a == null ? void 0 : (a = a.collection_name) == null ? void 0 : a.text;
      return i.jsx(c('CometInspirationCustomFontLabel.react'), { name: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
