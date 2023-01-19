__d(
  'CometDialogLoadingStateHeader.react',
  [
    'fbt',
    'BaseDivider.react',
    'CometCircleButton.react',
    'CrossFilled24.svg.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      return i.jsxs(i.Fragment, {
        children: [
          i.jsx('div', {
            className:
              'x6s0dn4 x78zum5 x2lah0s x13a6bvl x1d52u69 xktsk01 x879a55 x1n2onr6',
            id: a.id,
            children: i.jsx(c('CometCircleButton.react'), {
              icon: c('CrossFilled24.svg.react'),
              label: h._('__JHASH__tnRfHlva-bL__JHASH__'),
              onPress: a.onClose,
              size: 36,
              testid: void 0,
            }),
          }),
          i.jsx(c('BaseDivider.react'), {}),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
