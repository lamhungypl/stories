__d(
  'StoriesConstants',
  ['StoriesGating'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = { DEFAULT_SUSPENSE_CARD_INDEX: -1 };
    b = 9 / 16;
    c = { BANNER_HEIGHT: 42, BOTTOM_MARGIN: 25, COUNT_PER_PAGINATION_FETCH: 9 };
    e = 9;
    f = 2;
    var h = {
        MAX_RATING: 5,
        PADDING_SPACE_PORTION: 0.04,
        STAR_ICON_SIZE: 32,
        STAR_INLINE_PORTION: 0.55,
      },
      i = {
        NETWORK_ONLY: 'network-only',
        STORE_OR_NETWORK: 'store-or-network',
      };
    d = d('StoriesGating').getTileGridRowLength();
    d = { INITIAL_ROW_COUNT: 3, ITEMS_PER_ROW: d };
    var j = 3e3,
      k = 300,
      l = { COUNT_PER_PAGINATION_FETCH: 10, MAX_REACTIONS_PER_VIEWER: 5 },
      m = 6,
      n = 5,
      o = 8 / 19,
      p = {
        CREATION_END_CARD: 'creation_end_card',
        EMPTY_BUCKET_ERROR: 'empty_bucket_error',
        FRIENDS_STORY_OVERLAY: 'friends_story_overlay',
      },
      q = 200,
      r = 'fb_stories';
    g.CARD = a;
    g.DEFAULT_ASPECT_RATIO = b;
    g.NavList = c;
    g.NAV_PANE_TOTAL_COUNT = e;
    g.NUMBER_OF_BUCKETS_TO_PREFETCH = f;
    g.RATING_STICKER = h;
    g.RELAY_FETCH_POLICY = i;
    g.TILE_GRID = d;
    g.TIMEOUT_FOR_SERVER_TO_FINISH_WORK = j;
    g.TRANSITION_DURATION_MS = k;
    g.ViewerSheetViewerList = l;
    g.MAX_TILES_TO_SHOW = m;
    g.MAX_TILES_TO_SHOW_BIG = n;
    g.SKINNY_TILE_ASPECT_RATIO = o;
    g.VIEWER_V3_NULL_STATE = p;
    g.TOFU_TILE_HEIGHT = q;
    g.STORIES_RENDER_LOCATION = r;
  },
  98,
);
