__d(
  'CometFeedWidthStyles',
  ['gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {
        composerAndFeedWrapper: {
          width: 'xvue9z',
          '@media (min-height: 700px) and (max-height: 789px)_width': 'xq1tmr',
          '@media (min-height: 790px)_width': 'x1ceravr',
          $$css: !0,
        },
        feedContainer: {
          width: 'xvue9z',
          '@media (min-height: 700px) and (max-height: 789px)_width': 'xq1tmr',
          '@media (min-height: 790px)_width': 'x1ceravr',
          $$css: !0,
        },
        megaphone: {
          maxWidth: 'x65f84u',
          '@media (min-height: 700px) and (max-height: 789px)_maxWidth':
            'xbp6ddl',
          '@media (min-height: 790px)_maxWidth': 'x18vph2k',
          $$css: !0,
        },
        storiesTray: {
          width: 'xgmub6v',
          '@media (min-height: 790px)_width': 'x1ceravr',
          $$css: !0,
        },
      },
      i = {
        container: { maxWidth: 'xqdwrps', $$css: !0 },
        coverMediaContainer: { maxWidth: 'x1uyial6', $$css: !0 },
      },
      j = {
        container: {
          maxWidth: 'xqdwrps',
          '@media (min-height: 700px) and (max-height: 789px)_maxWidth':
            'x16i7wwg',
          '@media (min-height: 790px)_maxWidth': 'x1y5dvz6',
          $$css: !0,
        },
        coverMediaContainer: {
          maxWidth: 'x1uyial6',
          '@media (min-height: 700px) and (max-height: 789px)_maxWidth':
            'x1rr25im',
          '@media (min-height: 790px)_maxWidth': 'x1xh8ygx',
          $$css: !0,
        },
      },
      k = {
        FEED: { flexBasis: 'x19h7ccj', maxWidth: 'x65f84u', $$css: !0 },
        FULL: { flexBasis: 'xqf41ho', maxWidth: 'x1srbbgq', $$css: !0 },
        SECONDARY: {
          flexBasis: 'xnp8db0',
          maxWidth: 'x65f84u',
          overflowAnchor: 'x1xzczws',
          $$css: !0,
        },
        container: { width: 'x1talbiv', $$css: !0 },
        containerNoPadding: { width: 'x1aody8q', $$css: !0 },
      },
      l = {
        FEED: {
          flexBasis: 'x19h7ccj',
          flexGrow: 'xu9j1y6',
          maxWidth: 'x7ep2pv',
          $$css: !0,
        },
        FULL: { flexBasis: 'x1l7klhg', maxWidth: 'x193iq5w', $$css: !0 },
        SECONDARY: {
          flexBasis: 'xnp8db0',
          flexGrow: 'x1d1medc',
          maxWidth: 'x7ep2pv',
          overflowAnchor: 'x1xzczws',
          $$css: !0,
        },
        container: {
          width: 'x1talbiv',
          '@media (min-height: 700px) and (max-height: 789px)_width':
            'x1sltb1f',
          '@media (min-height: 790px)_width': 'x3fxtfs',
          $$css: !0,
        },
        containerNoPadding: {
          width: 'x1aody8q',
          '@media (min-height: 700px) and (max-height: 789px)_width': 'xcaxvl9',
          '@media (min-height: 790px)_width': 'x12tpw83',
          $$css: !0,
        },
      };
    function a() {
      return c('gkx')('1296384') && c('gkx')('708253') ? j : i;
    }
    function b() {
      return c('gkx')('1296384') && c('gkx')('708253') ? l : k;
    }
    function d() {
      return h;
    }
    e = ['PaginatedPeopleYouMayKnowFeedUnit'];
    g.homeStyles680 = h;
    g.entityHeader500 = i;
    g.entityHeader680 = j;
    g.columns500 = k;
    g.columns680 = l;
    g.getEntityHeaderWidthStyles = a;
    g.getResponsiveColumnWidthStyles = b;
    g.getFeedWidthStyles = d;
    g.FEED_UNITS_TO_BREAK_GRID = e;
  },
  98,
);
