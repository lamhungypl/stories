__d(
  'CometSettingsDropdownLoadingState.react',
  [
    'CometCard.react',
    'CometDivider.react',
    'CometListCellGlimmer.react',
    'CometPopover.react',
    'qex',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('qex')._('999'),
      j = {
        card: { width: 'x1cvmir6', $$css: !0 },
        cardLegacy: {
          paddingTop: 'x1y1aw1k',
          paddingEnd: 'x4uap5',
          paddingBottom: 'xwib8y2',
          paddingStart: 'xkhd6sd',
          width: 'x1cvmir6',
          $$css: !0,
        },
        divider: {
          marginTop: 'xdj266r',
          marginEnd: 'xktsk01',
          marginBottom: 'xat24cr',
          marginStart: 'x1d52u69',
          $$css: !0,
        },
        headerCardStyle: {
          marginTop: 'x14vqqas',
          marginEnd: 'xktsk01',
          marginBottom: 'x1yztbdb',
          marginStart: 'x1d52u69',
          $$css: !0,
        },
        headerCellPrimary: {
          marginTop: 'xw7yly9',
          marginEnd: 'xq8finb',
          marginBottom: 'x1e56ztr',
          marginStart: 'x16n37ib',
          $$css: !0,
        },
        headerCellSecondary: {
          marginTop: 'xw7yly9',
          marginEnd: 'xq8finb',
          marginBottom: 'xod5an3',
          marginStart: 'x16n37ib',
          $$css: !0,
        },
        listFooter: {
          marginTop: 'x1xmf6yo',
          marginEnd: 'x11i5rnm',
          marginBottom: 'x1e56ztr',
          marginStart: 'x1mh8g0r',
          $$css: !0,
        },
        root: { marginTop: 'x1ok221b', $$css: !0 },
      };
    function k(a) {
      var b = a.iconSize;
      b = b === void 0 ? 'large' : b;
      a = a.shouldShowSimpleDropdownHeader;
      a = a === void 0 ? !1 : a;
      return i === !0
        ? h.jsx(k.WithoutPopover, {
            iconSize: b,
            shouldShowSimpleDropdownHeader: a,
          })
        : h.jsx('div', {
            className: 'x1ok221b',
            children: h.jsx(c('CometPopover.react'), {
              children: h.jsx(k.WithoutPopover, {
                iconSize: b,
                shouldShowSimpleDropdownHeader: a,
              }),
            }),
          });
    }
    k.displayName = k.name + ' [from ' + f.id + ']';
    k.WithoutPopover = function (a) {
      var b = a.iconSize;
      a = a.shouldShowSimpleDropdownHeader;
      return a === !0
        ? h.jsxs('div', {
            className: 'x1cvmir6',
            children: [
              h.jsx('div', {
                className: 'x14vqqas xktsk01 x1yztbdb x1d52u69',
                children: h.jsxs(c('CometCard.react'), {
                  dropShadow: 2,
                  children: [
                    h.jsx('div', {
                      className: 'xw7yly9 xq8finb x1e56ztr x16n37ib',
                      children: h.jsx(c('CometListCellGlimmer.react'), {
                        imageSize: 36,
                        imageStyle: 'circle',
                        numberOfItems: 1,
                        paddingHorizontal: 0,
                      }),
                    }),
                    h.jsx(c('CometDivider.react'), { xstyle: j.divider }),
                    h.jsx('div', {
                      className: 'xw7yly9 xq8finb xod5an3 x16n37ib',
                      children: h.jsx(c('CometListCellGlimmer.react'), {
                        numberOfItems: 1,
                        paddingHorizontal: 0,
                      }),
                    }),
                  ],
                }),
              }),
              h.jsx(c('CometListCellGlimmer.react'), {
                imageSize: 36,
                imageStyle: 'circle',
                numberOfItems: 5,
                removeFirstItemPadding: !1,
              }),
              h.jsx('div', {
                className: 'x1xmf6yo x11i5rnm x1e56ztr x1mh8g0r',
                children: h.jsx(c('CometListCellGlimmer.react'), {
                  numberOfItems: 1,
                  removeFirstItemPadding: !1,
                }),
              }),
            ],
          })
        : h.jsxs('div', {
            className: 'x1y1aw1k x4uap5 xwib8y2 xkhd6sd x1cvmir6',
            children: [
              h.jsx(c('CometListCellGlimmer.react'), {
                imageSize: b === 'large' ? 60 : 36,
                imageStyle: 'circle',
                numberOfItems: b === 'large' ? 1 : 2,
              }),
              h.jsx(c('CometListCellGlimmer.react'), {
                imageSize: 36,
                imageStyle: 'circle',
                numberOfItems: 6,
              }),
            ],
          });
    };
    g['default'] = k;
  },
  98,
);
