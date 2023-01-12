__d(
  'WAArmadilloXMA.pb',
  ['WACommon.pb', 'WAProtoConst'],
  function (a, b, c, d, e, f, g) {
    a = {
      INFO: 0,
      EYE_OFF: 1,
      NEWS_OFF: 2,
      WARNING: 3,
      PRIVATE: 4,
      NONE: 5,
      MEDIA_LABEL: 6,
      POST_COVER: 7,
      POST_LABEL: 8,
      WARNING_SCREENS: 9,
    };
    b = { OPEN_NATIVE: 11 };
    c = { SINGLE: 0, PORTRAIT: 3 };
    e = {
      IG_STORY_PHOTO_MENTION: 4,
      IG_SINGLE_IMAGE_POST_SHARE: 9,
      IG_MULTIPOST_SHARE: 10,
      IG_SINGLE_VIDEO_POST_SHARE: 11,
      IG_STORY_PHOTO_SHARE: 12,
      IG_STORY_VIDEO_SHARE: 13,
      IG_CLIPS_SHARE: 14,
      IG_IGTV_SHARE: 15,
      IG_SHOP_SHARE: 16,
      IG_PROFILE_SHARE: 19,
      IG_STORY_PHOTO_HIGHLIGHT_SHARE: 20,
      IG_STORY_VIDEO_HIGHLIGHT_SHARE: 21,
      IG_STORY_REPLY: 22,
      IG_STORY_REACTION: 23,
      IG_STORY_VIDEO_MENTION: 24,
      FB_FEED_SHARE: 1e3,
      FB_STORY_REPLY: 1001,
      FB_STORY_SHARE: 1002,
      FB_STORY_MENTION: 1003,
      FB_FEED_VIDEO_SHARE: 1004,
      FB_GAMING_CUSTOM_UPDATE: 1005,
      FB_PRODUCER_STORY_REPLY: 1006,
      MSG_EXTERNAL_LINK_SHARE: 2e3,
      RTC_AUDIO_CALL: 3e3,
      RTC_VIDEO_CALL: 3001,
      RTC_MISSED_AUDIO_CALL: 3002,
      RTC_MISSED_VIDEO_CALL: 3003,
      RTC_GROUP_AUDIO_CALL: 3004,
      RTC_GROUP_VIDEO_CALL: 3005,
    };
    f = babelHelpers['extends']({}, null);
    var h = babelHelpers['extends']({}, null);
    f.internalSpec = {
      associatedMessage: [
        1,
        d('WAProtoConst').TYPES.MESSAGE,
        d('WACommon.pb').SubProtocolSpec,
      ],
      targetType: [2, d('WAProtoConst').TYPES.ENUM, e],
      targetUsername: [3, d('WAProtoConst').TYPES.STRING],
      targetId: [4, d('WAProtoConst').TYPES.STRING],
      targetExpiringAtSec: [5, d('WAProtoConst').TYPES.INT64],
      xmaLayoutType: [6, d('WAProtoConst').TYPES.ENUM, c],
      ctas: [
        7,
        d('WAProtoConst').FLAGS.REPEATED | d('WAProtoConst').TYPES.MESSAGE,
        h,
      ],
      previews: [
        8,
        d('WAProtoConst').FLAGS.REPEATED | d('WAProtoConst').TYPES.MESSAGE,
        d('WACommon.pb').SubProtocolSpec,
      ],
      titleText: [9, d('WAProtoConst').TYPES.STRING],
      subtitleText: [10, d('WAProtoConst').TYPES.STRING],
      maxTitleNumOfLines: [11, d('WAProtoConst').TYPES.UINT32],
      maxSubtitleNumOfLines: [12, d('WAProtoConst').TYPES.UINT32],
      favicon: [
        13,
        d('WAProtoConst').TYPES.MESSAGE,
        d('WACommon.pb').SubProtocolSpec,
      ],
      headerImage: [
        14,
        d('WAProtoConst').TYPES.MESSAGE,
        d('WACommon.pb').SubProtocolSpec,
      ],
      headerTitle: [15, d('WAProtoConst').TYPES.STRING],
      overlayIconGlyph: [16, d('WAProtoConst').TYPES.ENUM, a],
      overlayTitle: [17, d('WAProtoConst').TYPES.STRING],
      overlayDescription: [18, d('WAProtoConst').TYPES.STRING],
      sentWithMessageId: [19, d('WAProtoConst').TYPES.STRING],
      messageText: [20, d('WAProtoConst').TYPES.STRING],
      headerSubtitle: [21, d('WAProtoConst').TYPES.STRING],
    };
    h.internalSpec = {
      buttonType: [1, d('WAProtoConst').TYPES.ENUM, b],
      title: [2, d('WAProtoConst').TYPES.STRING],
      actionUrl: [3, d('WAProtoConst').TYPES.STRING],
      nativeUrl: [4, d('WAProtoConst').TYPES.STRING],
    };
    g.EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH = a;
    g.EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE = b;
    g.EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE = c;
    g.EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE = e;
    g.ExtendedContentMessageSpec = f;
    g.ExtendedContentMessage$CTASpec = h;
  },
  98,
);
