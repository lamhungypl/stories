__d(
  'CometMegaMenuLoadingState.react',
  [
    'fbt',
    'CometColumn.react',
    'CometColumnItem.react',
    'CometGlobalPanelGating',
    'CometMegaMenuCreateMenuLoadingState.react',
    'CometMegaMenuListLoadingState.react',
    'CometRow.react',
    'CometRowItem.react',
    'CometTopNavListDropdown.react',
    'TetraText.react',
    'cr:3907',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = {
        card: { width: 'xneu97a', $$css: !0 },
        cardOffsetWithGlobalPanel: { paddingTop: 'x889kno', $$css: !0 },
        createMenu: { width: 'x1y5idc5', $$css: !0 },
        megaMenu: { width: 'xgt6qma', $$css: !0 },
      };
    function a() {
      var a = i.jsx(c('CometTopNavListDropdown.react').Card, {
        background: 'card-flat',
        useFullWidth: !0,
        useGlobalPanelStyles: d(
          'CometGlobalPanelGating',
        ).isGlobalPanelVisible(),
        useMaxHeight: !0,
        children: i.jsxs(c('CometColumn.react'), {
          xstyle: [
            d('CometGlobalPanelGating').isGlobalPanelVisible() &&
              j.cardOffsetWithGlobalPanel,
            j.card,
          ],
          children: [
            i.jsx(c('CometColumnItem.react'), {
              paddingHorizontal: 16,
              paddingTop: 16,
              children: i.jsx(c('TetraText.react'), {
                type: 'headlineEmphasized1',
                children: h._('__JHASH__jgQOR0hxBFA__JHASH__'),
              }),
            }),
            i.jsxs(c('CometRow.react'), {
              paddingHorizontal: 16,
              children: [
                i.jsx(c('CometRowItem.react'), {
                  xstyle: j.megaMenu,
                  children: i.jsx(c('CometMegaMenuListLoadingState.react'), {}),
                }),
                i.jsx(c('CometRowItem.react'), {
                  xstyle: j.createMenu,
                  children: i.jsx(
                    c('CometMegaMenuCreateMenuLoadingState.react'),
                    {},
                  ),
                }),
              ],
            }),
          ],
        }),
      });
      if (
        b('cr:3907') != null &&
        d('CometGlobalPanelGating').isGlobalPanelVisible()
      )
        return i.jsx(b('cr:3907'), { children: a });
      else
        return i.jsx(c('CometTopNavListDropdown.react'), {
          label: h._('__JHASH__jgQOR0hxBFA__JHASH__'),
          name: 'MegaMenu',
          children: a,
        });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
