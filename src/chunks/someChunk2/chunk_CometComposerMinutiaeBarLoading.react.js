__d(
  'CometComposerMinutiaeBarLoading.react',
  ['BaseGlimmer.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        halfWidth: { width: 'x3hqpx7', $$css: !0 },
        imageGlimmer: {
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          height: 'x1vqgdyp',
          width: 'x100vrsf',
          $$css: !0,
        },
        minutiaeBar: {
          alignItems: 'x6s0dn4',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          paddingTop: 'xyamay9',
          width: 'xh8yej3',
          $$css: !0,
        },
        minutiaeGlimmer: {
          height: 'x17rw0jw',
          marginTop: 'x14vqqas',
          marginEnd: 'xq8finb',
          marginBottom: 'xod5an3',
          marginStart: 'x16n37ib',
          $$css: !0,
        },
        roundedGlimmer: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          $$css: !0,
        },
      };
    function a() {
      return h.jsxs('div', {
        className: 'x6s0dn4 x9f619 x78zum5 xyamay9 xh8yej3',
        children: [
          h.jsx(c('BaseGlimmer.react'), { index: 1, xstyle: i.imageGlimmer }),
          h.jsx('div', {
            className: 'x3hqpx7',
            children: h.jsx(c('BaseGlimmer.react'), {
              index: 1,
              xstyle: [i.minutiaeGlimmer, i.roundedGlimmer],
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
