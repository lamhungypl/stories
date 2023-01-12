__d(
  'StoriesCreateQuery.graphql',
  ['StoriesCreateQuery_facebookRelayOperation', 'relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
          { defaultValue: null, kind: 'LocalArgument', name: 'satpScale' },
          { defaultValue: null, kind: 'LocalArgument', name: 'scale' },
        ],
        c = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'comet_composer_video_uploader_config',
          storageKey: null,
        },
        d = [
          { kind: 'Literal', name: 'first', value: 1 },
          { kind: 'Literal', name: 'surface_nux_id', value: 3394 },
          {
            kind: 'Literal',
            name: 'trigger_name',
            value: 'www_fb_stories_comments_producer_interstitial',
          },
        ],
        e = [
          {
            kind: 'Literal',
            name: 'supported',
            value: [
              'CometQuickPromotionWWWFBStoriesCommentsProducerInterstitialRendererStrategy',
            ],
          },
        ],
        f = {
          kind: 'InlineFragment',
          selections: [
            {
              args: null,
              documentName: 'StoriesCreateQuery',
              fragmentName:
                'CometQuickPromotionWWWFBStoriesCommentsProducerInterstitialRendererStrategy_quickPromotion',
              fragmentPropName: 'quickPromotion',
              kind: 'ModuleImport',
            },
          ],
          type: 'CometQuickPromotionWWWFBStoriesCommentsProducerInterstitialRendererStrategy',
          abstractKey: null,
        },
        g = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        h = [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'uri',
            storageKey: null,
          },
        ],
        i = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'StoriesCreateQuery',
          selections: [
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'useStoriesCreateFormSteps',
            },
            {
              alias: null,
              args: null,
              concreteType: 'Viewer',
              kind: 'LinkedField',
              name: 'viewer',
              plural: !1,
              selections: [
                c,
                {
                  alias: null,
                  args: d,
                  concreteType: 'ViewerEligibleQuickPromotionsConnection',
                  kind: 'LinkedField',
                  name: 'eligible_promotions',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'QuickPromotion',
                      kind: 'LinkedField',
                      name: 'nodes',
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'CometQuickPromotionSections',
                          kind: 'LinkedField',
                          name: 'comet_qp_sections',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: e,
                              concreteType: null,
                              kind: 'LinkedField',
                              name: 'renderer_strategy',
                              plural: !1,
                              selections: [f],
                              storageKey:
                                'renderer_strategy(supported:["CometQuickPromotionWWWFBStoriesCommentsProducerInterstitialRendererStrategy"])',
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          args: null,
                          kind: 'FragmentSpread',
                          name: 'useQP_quickPromotion',
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'eligible_promotions(first:1,surface_nux_id:3394,trigger_name:"www_fb_stories_comments_producer_interstitial")',
                },
              ],
              storageKey: null,
            },
            {
              args: null,
              kind: 'FragmentSpread',
              name: 'StoriesCreatePreviewRoot_data',
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'StoriesCreateQuery',
          selections: [
            {
              if: null,
              kind: 'Defer',
              label:
                'useStoriesCreateFormEditorRoot$defer$StoriesCreateFormSATP',
              selections: [
                {
                  alias: null,
                  args: [
                    {
                      kind: 'Literal',
                      name: 'categories',
                      value: ['TEXT_BASE'],
                    },
                  ],
                  concreteType: 'Collection',
                  kind: 'LinkedField',
                  name: 'visual_composer_satp_collections',
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'TextFormatMetadata',
                      kind: 'LinkedField',
                      name: 'presets',
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'preset_id',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: 'InspirationsCustomFont',
                          kind: 'LinkedField',
                          name: 'inspirations_custom_font_object',
                          plural: !1,
                          selections: [
                            g,
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'font_postscript_name',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'font_url',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'font_name',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'preferred_font_size',
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: [
                            {
                              kind: 'Variable',
                              name: 'scale',
                              variableName: 'satpScale',
                            },
                          ],
                          concreteType: 'Image',
                          kind: 'LinkedField',
                          name: 'portrait_background_image',
                          plural: !1,
                          selections: h,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'background_color',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'background_gradient_color',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'background_gradient_direction',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'color',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: 'Image',
                          kind: 'LinkedField',
                          name: 'custom_thumbnail',
                          plural: !1,
                          selections: h,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'background_description',
                          storageKey: null,
                        },
                        {
                          alias: 'default_thumbnail',
                          args: [
                            { kind: 'Literal', name: 'height', value: 32 },
                            { kind: 'Literal', name: 'scale', value: 1 },
                            { kind: 'Literal', name: 'width', value: 32 },
                          ],
                          concreteType: 'Image',
                          kind: 'LinkedField',
                          name: 'background_image',
                          plural: !1,
                          selections: h,
                          storageKey:
                            'background_image(height:32,scale:1,width:32)',
                        },
                      ],
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: 'TextWithEntities',
                      kind: 'LinkedField',
                      name: 'collection_name',
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'text',
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'visual_composer_satp_collections(categories:["TEXT_BASE"])',
                },
              ],
            },
            {
              alias: null,
              args: null,
              concreteType: 'Viewer',
              kind: 'LinkedField',
              name: 'viewer',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: null,
                  kind: 'LinkedField',
                  name: 'actor',
                  plural: !1,
                  selections: [
                    i,
                    {
                      alias: null,
                      args: [
                        {
                          kind: 'Variable',
                          name: 'scale',
                          variableName: 'scale',
                        },
                        { kind: 'Literal', name: 'width', value: 60 },
                      ],
                      concreteType: 'Image',
                      kind: 'LinkedField',
                      name: 'profile_picture',
                      plural: !1,
                      selections: h,
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'name',
                      storageKey: null,
                    },
                    g,
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'StreetAddress',
                          kind: 'LinkedField',
                          name: 'address',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'single_line_full_address',
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: 'Location',
                          kind: 'LinkedField',
                          name: 'location',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'latitude',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'longitude',
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: 'Phone',
                          kind: 'LinkedField',
                          name: 'all_phones',
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: 'PhoneNumber',
                              kind: 'LinkedField',
                              name: 'phone_number',
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'universal_number',
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'websites',
                          storageKey: null,
                        },
                      ],
                      type: 'Page',
                      abstractKey: null,
                    },
                    {
                      kind: 'InlineFragment',
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'is_additional_profile_plus',
                          storageKey: null,
                        },
                      ],
                      type: 'User',
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
                c,
                {
                  alias: null,
                  args: d,
                  concreteType: 'ViewerEligibleQuickPromotionsConnection',
                  kind: 'LinkedField',
                  name: 'eligible_promotions',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'QuickPromotion',
                      kind: 'LinkedField',
                      name: 'nodes',
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'CometQuickPromotionSections',
                          kind: 'LinkedField',
                          name: 'comet_qp_sections',
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: e,
                              concreteType: null,
                              kind: 'LinkedField',
                              name: 'renderer_strategy',
                              plural: !1,
                              selections: [i, f],
                              storageKey:
                                'renderer_strategy(supported:["CometQuickPromotionWWWFBStoriesCommentsProducerInterstitialRendererStrategy"])',
                            },
                          ],
                          storageKey: null,
                        },
                        g,
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'encrypted_logging_data',
                          storageKey: null,
                        },
                        {
                          alias: 'surface_id',
                          args: null,
                          kind: 'ScalarField',
                          name: 'nux_id',
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: 'ScalarField',
                          name: 'trigger',
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'eligible_promotions(first:1,surface_nux_id:3394,trigger_name:"www_fb_stories_comments_producer_interstitial")',
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'StoriesCreateCTALinkOptions',
              kind: 'LinkedField',
              name: 'stories_create_cta_link_options',
              plural: !1,
              selections: [
                {
                  args: null,
                  documentName: 'StoriesCreateCTALinkPicker_data',
                  fragmentName: 'StoriesCreateCTALinkMainOptions_data',
                  fragmentPropName: 'data',
                  kind: 'ModuleImport',
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'StoriesCreateFormStickerButtonRender',
              kind: 'LinkedField',
              name: 'stories_create_sticker_button_render',
              plural: !1,
              selections: [
                {
                  args: null,
                  documentName: 'StoriesCreateFormPhoto_data',
                  fragmentName: 'StoriesCreateFormStickerButton_data',
                  fragmentPropName: 'data',
                  kind: 'ModuleImport',
                },
                i,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: b('StoriesCreateQuery_facebookRelayOperation'),
          metadata: {},
          name: 'StoriesCreateQuery',
          operationKind: 'query',
          text: null,
        },
      };
    })();
    b('relay-runtime').PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a;
  },
  null,
);
