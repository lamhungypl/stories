__d(
  'CometAppLoggedInNavigationSearchSection.react',
  [
    'LegacyHidden',
    'SearchCometGlobalTypeaheadWithBackButtonFocus.react',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        layoutStartSearch: {
          boxSizing: 'x9f619',
          height: 'x1s65kcs',
          maxWidth: 'x16xn7b0',
          position: 'xixxii4',
          start: 'x17qophe',
          top: 'x13vifvy',
          width: 'xj35x94',
          zIndex: 'xhtitgo',
          $$css: !0,
        },
        layoutStartSearchFocused: {
          width: 'x1m258z3',
          zIndex: 'xoegz02',
          $$css: !0,
        },
        layoutStartSearchFocusedOnNotHome: { width: 'x1cvmir6', $$css: !0 },
        layoutStartSearchInputInCollapsedClosedAndBlurredTypeahead: {
          cursor: 'x1ypdohk',
          paddingStart: 'xbbxn1n',
          $$css: !0,
        },
        layoutStartSearchInputInExpandedClosedAndBlurredTypeahead: {
          '@media (max-width: 1259px)_cursor': 'x1xtgk1k',
          '@media (max-width: 1259px)_paddingStart': 'x17hph69',
          $$css: !0,
        },
        layoutStartSearchOnHome: {
          '@media (min-width: 1260px)_width': 'xmy5rp',
          $$css: !0,
        },
        layoutStartSearchOnHomeAndMatchLeftRail: {
          '@media (min-width: 1260px)_width': 'xkreb8t',
          $$css: !0,
        },
        layoutStartSearchOnSearch: {
          '@media (min-width: 1260px)_width': 'xkreb8t',
          $$css: !0,
        },
        layoutStartSearchOpened: { backgroundColor: 'x1jx94hy', $$css: !0 },
      };
    function a(a) {
      var b = a.handleCloseSearch,
        d = a.handleOpenSearch,
        e = a.initialGlobalSearchQuery,
        f = a.isHome,
        g = a.isSearchOpened,
        j = a.shouldHideGlobalTypeahead,
        k = a.showGlobalTypeaheadExpandedOutsideHome;
      a = f || k || (e == null ? void 0 : e.length) > 0;
      return h.jsx(c('SearchCometGlobalTypeaheadWithBackButtonFocus.react'), {
        inputInClosedAndBlurredTypeaheadXStyle: a
          ? i.layoutStartSearchInputInExpandedClosedAndBlurredTypeahead
          : i.layoutStartSearchInputInCollapsedClosedAndBlurredTypeahead,
        onClose: b,
        onOpen: d,
        queryString: e,
        children: function (a, b) {
          return h.jsx(c('LegacyHidden'), {
            htmlAttributes: {
              'aria-hidden': j,
              className: c('stylex')(
                i.layoutStartSearch,
                (a || g) && i.layoutStartSearchFocused,
                (a || g) && !f && i.layoutStartSearchFocusedOnNotHome,
                f && i.layoutStartSearchOnHome,
                !1,
                (!!e || k) && i.layoutStartSearchOnSearch,
                g && i.layoutStartSearchOpened,
              ),
            },
            mode: j ? 'hidden' : 'visible',
            children: b,
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
