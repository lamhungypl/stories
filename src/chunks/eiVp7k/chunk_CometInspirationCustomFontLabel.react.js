__d(
  'CometInspirationCustomFontLabel.react',
  ['fbt', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.name;
      a = a.selected;
      b = b != null ? b.toLowerCase() : h._('__JHASH__vtxyJRoDMWA__JHASH__');
      a = i.jsx('div', {
        className:
          'x6s0dn4 xl56j7k x1yrsyyn xsyo7zv x10b6aqq x16hj40l xn80e1m' +
          (a === !0 ? ' x1s85apg' : ' x78zum5'),
        children: b,
      });
      return i.jsx(c('TetraText.react'), { type: 'body2', children: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
