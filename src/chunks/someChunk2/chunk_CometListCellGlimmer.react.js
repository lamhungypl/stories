__d(
  'CometListCellGlimmer.react',
  [
    'BaseGlimmer.react',
    'BaseLoadingStateElement.react',
    'CometColumn.react',
    'CometColumnItem.react',
    'CometLegacyListItemBase.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo,
      j = {
        firstItem: { paddingTop: 'xexx8yu', $$css: !0 },
        imageSize20: { height: 'x1qx5ct2', width: 'xw4jnvo', $$css: !0 },
        imageSize36: { height: 'xc9qbxq', width: 'x14qfxbe', $$css: !0 },
        imageSize40: { height: 'x1vqgdyp', width: 'x100vrsf', $$css: !0 },
        imageSize48: { height: 'xsdox4t', width: 'x1useyqa', $$css: !0 },
        imageSize56: { height: 'xnnlda6', width: 'x15yg21f', $$css: !0 },
        imageSize60: { height: 'xng8ra', width: 'x1247r65', $$css: !0 },
        imageStyleCircle: {
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          $$css: !0,
        },
        imageStyleRoundedRect: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          $$css: !0,
        },
        item: { paddingTop: 'x1y1aw1k', paddingBottom: 'xwib8y2', $$css: !0 },
        textGlimmer: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          height: 'xx3o462',
          $$css: !0,
        },
        textGlimmerWidth100: { width: 'xh8yej3', $$css: !0 },
        textGlimmerWidth50: { width: 'x3hqpx7', $$css: !0 },
        textGlimmerWidth67: { width: 'xgkjt62', $$css: !0 },
        textGlimmerWidth83: { width: 'x1l3jyfm', $$css: !0 },
      };
    function a(a) {
      var b = a.imageSize,
        d = b === void 0 ? 36 : b;
      b = a.imageStyle;
      var e = b === void 0 ? 'none' : b;
      b = a.numberOfItems;
      var f = b === void 0 ? 1 : b;
      b = a.paddingHorizontal;
      b = b === void 0 ? 16 : b;
      var g = a.removeFirstItemPadding,
        k = g === void 0 ? !0 : g;
      g = a.spacing;
      a = i(
        function () {
          return Array(f)
            .fill()
            .map(function (a, b) {
              return Math.floor((Math.PI * Math.pow(10, b % 10)) % 4);
            });
        },
        [f],
      );
      return h.jsx(c('BaseLoadingStateElement.react'), {
        children: h.jsx(c('CometColumn.react'), {
          paddingHorizontal: b,
          spacing: g,
          children: a.map(function (a, b) {
            return h.jsx(
              c('CometColumnItem.react'),
              {
                children: h.jsx(c('CometLegacyListItemBase.react'), {
                  addon:
                    e !== 'none'
                      ? h.jsx(c('BaseGlimmer.react'), {
                          index: b,
                          xstyle: [
                            d === 20 && j.imageSize20,
                            d === 36 && j.imageSize36,
                            d === 40 && j.imageSize40,
                            d === 48 && j.imageSize48,
                            d === 56 && j.imageSize56,
                            d === 60 && j.imageSize60,
                            e === 'circle' && j.imageStyleCircle,
                            e === 'roundedRect' && j.imageStyleRoundedRect,
                          ],
                        })
                      : null,
                  className:
                    'xwib8y2' + (b === 0 && k ? ' xexx8yu' : ' x1y1aw1k'),
                  children: h.jsx(c('BaseGlimmer.react'), {
                    index: b,
                    xstyle: [
                      j.textGlimmer,
                      a === 0 && j.textGlimmerWidth50,
                      a === 1 && j.textGlimmerWidth67,
                      a === 2 && j.textGlimmerWidth83,
                      a === 3 && j.textGlimmerWidth100,
                    ],
                  }),
                }),
              },
              b,
            );
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
