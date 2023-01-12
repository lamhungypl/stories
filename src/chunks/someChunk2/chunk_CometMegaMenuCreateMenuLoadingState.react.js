__d(
  'CometMegaMenuCreateMenuLoadingState.react',
  [
    'BaseGlimmer.react',
    'CometCard.react',
    'CometColumn.react',
    'CometColumnItem.react',
    'CometListCellGlimmer.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        textGlimmer: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          height: 'xx3o462',
          $$css: !0,
        },
        textGlimmerWidth35: { width: 'x19h4ct', $$css: !0 },
      };
    function a() {
      return h.jsx(c('CometCard.react'), {
        background: 'white',
        dropShadow: 1,
        children: h.jsxs(c('CometColumn.react'), {
          paddingHorizontal: 12,
          paddingTop: 16,
          paddingVertical: 8,
          spacing: 24,
          children: [
            h.jsx(c('CometColumnItem.react'), {
              children: h.jsx(c('BaseGlimmer.react'), {
                index: 0,
                xstyle: [i.textGlimmer, i.textGlimmerWidth35],
              }),
            }),
            h.jsx(c('CometColumn.react'), {
              paddingTop: 4,
              children: h.jsx(c('CometColumnItem.react'), {
                children: h.jsx(c('CometListCellGlimmer.react'), {
                  imageSize: 36,
                  imageStyle: 'circle',
                  numberOfItems: 3,
                  paddingHorizontal: 4,
                }),
              }),
            }),
            h.jsx(c('CometColumn.react'), {
              paddingTop: 4,
              children: h.jsx(c('CometColumnItem.react'), {
                children: h.jsx(c('CometListCellGlimmer.react'), {
                  imageSize: 36,
                  imageStyle: 'circle',
                  numberOfItems: 6,
                  paddingHorizontal: 4,
                }),
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
