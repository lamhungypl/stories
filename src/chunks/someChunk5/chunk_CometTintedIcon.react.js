__d(
  'CometTintedIcon.react',
  ['BaseImage_DEPRECATED.react', 'TintableIconSource', 'react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = { image: { verticalAlign: 'x1b0d499', $$css: !0 } },
      j = {
        accent: { filter: 'xi3auck', $$css: !0 },
        blueLink: { filter: 'x1vv9jnp', $$css: !0 },
        disabled: { filter: 'xmgbrsx', $$css: !0 },
        negative: { filter: 'x1d2xfc3', $$css: !0 },
        placeholder: { filter: 'xuo83w3', $$css: !0 },
        positive: { filter: 'x1hq76kk', $$css: !0 },
        primary: { filter: 'xep6ejk', $$css: !0 },
        secondary: { filter: 'x1d69dk1', $$css: !0 },
        warning: { filter: 'xgzi2j0', $$css: !0 },
        white: { filter: 'xaj1gnb', $$css: !0 },
      };
    function a(a, b) {
      var d = a.alt;
      d = d === void 0 ? '' : d;
      var e = a.color;
      e = e === void 0 ? 'black' : e;
      var f = a.draggable,
        g = a.icon,
        k = a.testid;
      k = a.xstyle;
      a = g instanceof c('TintableIconSource');
      return h.jsx(c('BaseImage_DEPRECATED.react'), {
        alt: d,
        className: c('stylex')(i.image, a && e !== 'black' && j[e], k),
        draggable: f,
        ref: b,
        src: g.src,
        testid: void 0,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    b.name = 'CometTintedIcon';
    e = b;
    g['default'] = e;
  },
  98,
);
