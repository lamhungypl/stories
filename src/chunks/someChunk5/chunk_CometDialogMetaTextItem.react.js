__d(
  'CometDialogMetaTextItem.react',
  ['CometColumnItem.react', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.meta;
      a = a.metaPosition;
      a = a === void 0 ? 'above' : a;
      var d = b != null && a === 'above';
      a = b != null && a === 'below';
      return h.jsx(c('CometColumnItem.react'), {
        align: 'start',
        paddingTop: a ? 0 : 12,
        paddingVertical: a ? 16 : 0,
        children: h.jsx(c('TetraText.react'), {
          align: d ? 'start' : 'center',
          color: 'secondary',
          type: 'body3',
          children: b,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
