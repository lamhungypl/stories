__d(
  'StoriesCreatePreviewUpdater',
  [
    'StoriesCreatePreviewUtils',
    'StoriesCreateSATPPreviewQuery.graphql',
    'WebPixelRatio',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      return d('relay-runtime').createOperationDescriptor(
        c('StoriesCreateSATPPreviewQuery.graphql'),
        { cardID: a, scale: d('WebPixelRatio').get() },
      );
    }
    function i(a) {
      var b,
        c = '32FFFFFF';
      if (
        (a == null ? void 0 : (b = a.satpData) == null ? void 0 : b.text) !=
          null &&
        (a == null
          ? void 0
          : (b = a.satpData) == null
          ? void 0
          : b.text.length) > 0
      ) {
        c =
          (b = a == null ? void 0 : a.satpData.fontColor) != null
            ? b
            : 'FFFFFFFF';
      }
      return {
        card: {
          __typename: 'Story',
          activity_description: null,
          explicit_place: null,
          id: 'add_later',
          inline_activities: { nodes: [] },
          message: {
            aggregated_ranges: [],
            color_ranges: [],
            delight_ranges: [],
            image_ranges: [],
            inline_style_ranges: [],
            ranges: [],
            text:
              (a == null
                ? void 0
                : (b = a.satpData) == null
                ? void 0
                : b.text) || '',
          },
          story_default_background: {
            color: 'FF2B2D34',
            gradient: {
              css: 'linear-gradient(135deg,rgba(43,45,52,1.00) 0%,rgba(19,19,19,1.00) 100%)',
            },
            portrait_image: null,
          },
          text_format_metadata: {
            background_color:
              (a == null
                ? void 0
                : (b = a.satpData) == null
                ? void 0
                : b.backgroundColor) || null,
            background_gradient_color:
              (a == null
                ? void 0
                : (b = a.satpData) == null
                ? void 0
                : b.backgroundGradientColor) || null,
            background_gradient_direction:
              (a == null
                ? void 0
                : (b = a.satpData) == null
                ? void 0
                : b.backgroundGradientDirection) || null,
            color: c,
            font_style: 'NORMAL',
            font_weight: 'BOLD',
            inspirations_custom_font_object: {
              font_postscript_name:
                (a == null
                  ? void 0
                  : (b = a.satpData) == null
                  ? void 0
                  : b.fontName) || null,
              font_url:
                (a == null
                  ? void 0
                  : (c = a.satpData) == null
                  ? void 0
                  : c.fontUrl) || null,
              id:
                (a == null
                  ? void 0
                  : (b = a.satpData) == null
                  ? void 0
                  : b.fontID) || null,
            },
            portrait_background_image: {
              uri:
                (a == null
                  ? void 0
                  : (c = a.satpData) == null
                  ? void 0
                  : c.background) || null,
            },
            text_align: 'CENTER',
          },
          with_tags: { count: 0 },
        },
      };
    }
    function a(a) {
      var b = a.storyID;
      b = h(b);
      a = i(a);
      d(
        'StoriesCreatePreviewUtils',
      ).storiesCreatePreviewEnvironment.commitPayload(
        b,
        babelHelpers['extends']({}, a),
      );
    }
    g.updateStoriesPreview = a;
  },
  98,
);
