__d(
  'CometDialogLoadingStateImpl.react',
  ['CometGlimmer.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        firstLine: {
          height: 'x1kpxq89',
          marginBottom: 'xyorhqc',
          maxWidth: 'xq2pcee',
          $$css: !0,
        },
        glimmer: {
          alignSelf: 'xqcrz7y',
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          boxSizing: 'x9f619',
          marginStart: 'x1d52u69',
          marginEnd: 'xktsk01',
          width: 'x19sv2k2',
          $$css: !0,
        },
        heading: {
          height: 'x1qx5ct2',
          marginTop: 'x1sy10c2',
          marginBottom: 'xieb3on',
          maxWidth: 'xws0hc0',
          $$css: !0,
        },
        secondLine: {
          height: 'x1kpxq89',
          marginBottom: 'xieb3on',
          maxWidth: 'xg16ivm',
          $$css: !0,
        },
      };
    function a(a) {
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c('CometGlimmer.react'), {
            index: 0,
            xstyle: [i.glimmer, i.heading],
          }),
          h.jsx(c('CometGlimmer.react'), {
            index: 1,
            xstyle: [i.glimmer, i.firstLine],
          }),
          h.jsx(c('CometGlimmer.react'), {
            index: 2,
            xstyle: [i.glimmer, i.secondLine],
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
