__d(
  'StoriesCreateConstants',
  ['fbt'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    a = {
      DEFAULT: {
        BODY: 'Bạn có chắc chắn muốn bỏ tin này không? Hệ thống sẽ không lưu tin của bạn.',
        CANCEL: 'Tiếp tục chỉnh sửa',
        CONFIRM: 'Bỏ',
        TITLE: 'Bỏ tin?',
      },
    };
    b = {
      SELECTION_TILE_HEIGHT: 330,
      SELECTION_TILE_WIDTH: 220,
      SPACE_BETWEEN_SELECTOR: 20,
    };
    c = { FOOTER_HEIGHT: 52, HEADER_HEIGHT: 16 };
    d = {
      COMET_PUSH_VIEW_HEIGHT: 28,
      CONTAINER_HORIZONTAL_PADDING: 24 * 2,
      CONTAINER_MAX_WIDTH: 940,
      CONTAINER_VERTICAL_PADDING: 32 * 2,
      CONTENT_HEADER_HEIGHT: 36,
      CONTENT_HORIZONTAL_PADDING: 16 * 2,
      CONTENT_VERTICAL_PADDING: 16 * 2,
      MAX_OVERLAY_WIDTH: 472.5,
      SIDE_PANE_WIDTH: 360,
    };
    e = 'Bắt đầu nhập';
    f = { FOOTER_HEIGHT: 12, HEADER_HEIGHT: 12 };
    h = { EDITING: 'editing', NONE: 'none' };
    var i = { EMOJI: 'emoji', LOCATION: 'location', POLL: 'poll', TAG: 'tag' },
      j = { EDITING: 'editing', NONE: 'none' },
      k = { HORIZONTAL: 'horizontal', NONE: 'none' },
      l = 26,
      m = 3,
      n = 4,
      o = { FOOTER_HEIGHT: 92 },
      p = Object.freeze({
        BLACK: 'rgb(0, 0, 0)',
        BLUE: 'rgb(41, 134, 174)',
        BROWN: 'rgb(112, 41, 41)',
        CORAL: 'rgb(247, 114, 74)',
        CYAN: 'rgb(94, 213, 255)',
        GOLD: 'rgb(241, 196, 58)',
        GRAY: 'rgb(142, 147, 156)',
        GREEN: 'rgb(136, 191, 75)',
        LIGHT_BLUE: 'rgb(202, 237, 248)',
        LIGHT_GRAY: 'rgb(206, 208, 212)',
        LIGHT_PURPLE: 'rgb(220, 211, 239)',
        MAGENTA: 'rgb(251, 62, 160)',
        MINT: 'rgb(185, 252, 203)',
        NAVY: 'rgb(43, 69, 124)',
        ORANGE: 'rgb(244, 146, 58)',
        PINK: 'rgb(249, 203, 209)',
        PURPLE: 'rgb(148, 31, 177)',
        RED: 'rgb(248, 61, 61)',
        VIOLET: 'rgb(88, 59, 154)',
        WHITE: 'rgb(255, 255, 255)',
        YELLOW: 'rgb(248, 226, 76)',
      }),
      q = { x: 0.5, y: 0.5 };
    g.LEAVE_TEXT = a;
    g.NULL_STATE_DIMENSIONS = b;
    g.PHOTO_PREVIEW_DIMENSIONS = c;
    g.PREVIEW_DIMENSIONS = d;
    g.SATP_PLACEHOLDER = e;
    g.SATP_PREVIEW_DIMENSIONS = f;
    g.STICKER_EDITING_MODE = h;
    g.STICKER_TYPE = i;
    g.TEXT_OVERLAY_MODE = j;
    g.OVERLAY_ALIGNMENT_TYPE = k;
    g.VIDEO_MAX_DURATION = l;
    g.VIDEO_MIN_DURATION = m;
    g.VIDEO_MIN_DURATION_FOR_TRIM = n;
    g.VIDEO_PREVIEW_DIMENSIONS = o;
    g.COLOR_NAME_TO_RGB = p;
    g.ORIGIN = q;
  },
  98,
);
