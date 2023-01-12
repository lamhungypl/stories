__d(
  'StoriesCreateRootPlaceholder.react',
  [
    'fbt',
    'BaseGlimmer.react',
    'CometContentArea.react',
    'CometLeftRailAndMainContentContainer.react',
    'CometLeftRailBreadcrumbs.react',
    'CometLeftRailComponent.react',
    'CometLeftRailHeader.react',
    'CometListCellGlimmer.react',
    'StoriesCreateConstants',
    'StoriesCreateSettingButton.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = {
        pickerContainer: {
          display: 'x78zum5',
          justifyContent: 'x1qughib',
          $$css: !0,
        },
        sectionLine: {
          backgroundColor: 'x14nfmen',
          height: 'xjm9jq1',
          marginTop: 'x1sy10c2',
          $$css: !0,
        },
        tile: {
          alignItems: 'x6s0dn4',
          borderTopStartRadius: 'xhk9q7s',
          borderTopEndRadius: 'x1otrzb0',
          borderBottomEndRadius: 'x1i1ezom',
          borderBottomStartRadius: 'x1o6z2jb',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          height: 'x5yr21d',
          width: 'xh8yej3',
          $$css: !0,
        },
      };
    function a() {
      var a = d('StoriesCreateConstants').NULL_STATE_DIMENSIONS
          .SELECTION_TILE_HEIGHT,
        b = d('StoriesCreateConstants').NULL_STATE_DIMENSIONS
          .SELECTION_TILE_WIDTH,
        e = d('StoriesCreateConstants').NULL_STATE_DIMENSIONS
          .SPACE_BETWEEN_SELECTOR;
      a = { height: a, width: b };
      b = i.jsxs('div', {
        className: 'x78zum5 x1qughib',
        style: { width: 2 * b + e },
        children: [
          i.jsx('div', {
            style: a,
            children: i.jsx(c('BaseGlimmer.react'), {
              index: 0,
              theme: 'dark',
              xstyle: j.tile,
            }),
          }),
          i.jsx('div', {
            style: a,
            children: i.jsx(c('BaseGlimmer.react'), {
              index: 1,
              theme: 'dark',
              xstyle: j.tile,
            }),
          }),
        ],
      });
      e = h._('__JHASH__rLp7PFpVEKR__JHASH__');
      return i.jsx(c('CometLeftRailAndMainContentContainer.react'), {
        leftRailContent: i.jsx(c('CometLeftRailComponent.react'), {
          header: i.jsx(c('CometLeftRailHeader.react'), {
            auxiliary: i.jsx(c('StoriesCreateSettingButton.react'), {}),
            meta: i.jsx(c('CometLeftRailBreadcrumbs.react'), {
              breadcrumbs: [
                {
                  label: h._('__JHASH__3H7YDu5utR___JHASH__'),
                  onPress: void 0,
                },
              ],
            }),
            title: e,
          }),
          primaryNav: i.jsxs('div', {
            children: [
              i.jsx(c('CometListCellGlimmer.react'), {
                imageSize: 60,
                imageStyle: 'circle',
              }),
              i.jsx('div', { className: 'x14nfmen xjm9jq1 x1sy10c2' }),
            ],
          }),
        }),
        leftRailHeading: e,
        leftRailPrimary: !0,
        mainContent: i.jsx(c('CometContentArea.react'), {
          verticalAlign: 'middle',
          children: b,
        }),
        mainContentHeading: e,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
