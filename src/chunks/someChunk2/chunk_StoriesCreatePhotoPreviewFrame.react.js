__d(
  'StoriesCreatePhotoPreviewFrame.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var c = a.children,
        d = a.frameWidth;
      a = a.rounded;
      a = a === void 0 ? !1 : a;
      return h.jsx('div', {
        className: 'x5yr21d x47corl x10l6tqk',
        children: h.jsx('div', {
          className: 'x5yr21d x47corl',
          style: { width: d + 'px' },
          children: h.jsx('div', {
            className:
              'x105w4n0 x1dgrc15 xgawykw xmigq7r x9f619 x5yr21d x10l6tqk' +
              (a ? ' x1lq5wgf xgqcy7u x30kzoy x9jhf4c' : ''),
            ref: b,
            style: { width: d + 'px' },
            children: c,
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
