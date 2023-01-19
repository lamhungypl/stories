__d(
  'CometCompositeItemFocusIndicator.react',
  [
    'ix',
    'CometCompositeStructureContext',
    'CometIcon.react',
    'fbicon',
    'gkx',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useContext,
      k = c('gkx')('1721477') || c('gkx')('1459');
    function a() {
      var a = j(c('CometCompositeStructureContext'));
      return !k || a.hideArrowSignifiers === !0
        ? null
        : i.jsxs(i.Fragment, {
            children: [
              a.horizontal === !0
                ? i.jsxs(i.Fragment, {
                    children: [
                      i.jsx('div', {
                        className:
                          'x2bj2ny xn7ya7q x1su9jv1 xt02mhb xb4krs4 x1npaq5j x1c83p5e x1enjb0b x199158v xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x9otpla x67uiyb xwa60dl',
                        children: i.jsx(c('CometIcon.react'), {
                          color: 'primary',
                          icon: d('fbicon')._(h('1739808'), 8),
                        }),
                      }),
                      i.jsx('div', {
                        className:
                          'x2bj2ny xn7ya7q x1su9jv1 xt02mhb xb4krs4 x1npaq5j x1c83p5e x1enjb0b x199158v xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x1wtad8d x9otpla xwa60dl',
                        children: i.jsx(c('CometIcon.react'), {
                          color: 'primary',
                          icon: d('fbicon')._(h('897949'), 8),
                        }),
                      }),
                    ],
                  })
                : null,
              a.vertical === !0
                ? i.jsxs(i.Fragment, {
                    children: [
                      i.jsx('div', {
                        className:
                          'x2bj2ny xn7ya7q x1su9jv1 xt02mhb xb4krs4 x1npaq5j x1c83p5e x1enjb0b x199158v xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x1orzsq4 xtzzx4i x1fur4o1',
                        children: i.jsx(c('CometIcon.react'), {
                          color: 'primary',
                          icon: d('fbicon')._(h('702721'), 8),
                        }),
                      }),
                      i.jsx('div', {
                        className:
                          'x2bj2ny xn7ya7q x1su9jv1 xt02mhb xb4krs4 x1npaq5j x1c83p5e x1enjb0b x199158v xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz xqd3l62 x1orzsq4 xtzzx4i',
                        children: i.jsx(c('CometIcon.react'), {
                          color: 'primary',
                          icon: d('fbicon')._(h('701592'), 8),
                        }),
                      }),
                    ],
                  })
                : null,
            ],
          });
    }
    g['default'] = a;
  },
  98,
);
