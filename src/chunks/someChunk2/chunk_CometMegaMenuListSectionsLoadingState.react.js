__d(
  'CometMegaMenuListSectionsLoadingState.react',
  [
    'BaseGlimmer.react',
    'BaseLoadingStateElement.react',
    'CometColumn.react',
    'CometColumnItem.react',
    'CometListCellGlimmerWithTitleAndBody.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = 38,
      j = {
        textGlimmer: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          height: 'xx3o462',
          $$css: !0,
        },
        textGlimmerWidth20: { width: 'x8yj6t5', $$css: !0 },
      };
    function a() {
      var a = Math.max(Math.ceil(window.innerHeight / i), 1);
      return h.jsx(c('BaseLoadingStateElement.react'), {
        children: h.jsxs(c('CometColumn.react'), {
          paddingHorizontal: 12,
          paddingVertical: 8,
          spacing: 24,
          children: [
            h.jsx(c('CometColumnItem.react'), {
              children: h.jsx(c('BaseGlimmer.react'), {
                index: 0,
                xstyle: [j.textGlimmer, j.textGlimmerWidth20],
              }),
            }),
            h.jsx(c('CometColumnItem.react'), {
              children: h.jsx(c('CometListCellGlimmerWithTitleAndBody.react'), {
                imageSize: 36,
                imageStyle: 'circle',
                numberOfItems: a,
                paddingHorizontal: 0,
                spacing: 16,
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
