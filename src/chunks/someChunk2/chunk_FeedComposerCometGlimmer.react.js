__d(
  'FeedComposerCometGlimmer.react',
  [
    'BaseGlimmer.react',
    'CometComposerMinutiaeBarLoading.react',
    'CometComposerStylingConstants',
    'gkx',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        ctaGlimmer: {
          height: 'x1s1d1n7',
          marginTop: 'x1gslohp',
          marginEnd: 'x11i5rnm',
          marginBottom: 'x1yztbdb',
          marginStart: 'x1mh8g0r',
          $$css: !0,
        },
        fullWidth: { width: 'xh8yej3', $$css: !0 },
        root: {
          boxSizing: 'x9f619',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          height: 'xboal0k',
          justifyContent: 'x1qughib',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x1pi30zi',
          paddingBottom: 'x18d9i69',
          paddingStart: 'x1swvt13',
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
    function a(a) {
      a = a.responsive;
      a = a === void 0 ? !1 : a;
      var b = c('gkx')('1224637')
        ? d('CometComposerStylingConstants').GEMINI_COMPOSER_WIDTH
        : d('CometComposerStylingConstants').COMPOSER_ORIGINAL_WIDTH;
      return h.jsxs('div', {
        className:
          'x9f619 x78zum5 xdt5ytf xboal0k x1qughib xexx8yu x1pi30zi x18d9i69 x1swvt13',
        style: { width: a === !1 && b },
        children: [
          h.jsx(c('CometComposerMinutiaeBarLoading.react'), {}),
          h.jsx('div', {
            className: 'xh8yej3',
            children: h.jsx(c('BaseGlimmer.react'), {
              index: 2,
              xstyle: [i.ctaGlimmer, i.roundedGlimmer],
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
