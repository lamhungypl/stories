__d(
  'CometTextWithEntitiesRelay_entity.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
        alias: null,
        args: null,
        concreteType: 'WorkForeignEntityInfo',
        kind: 'LinkedField',
        name: 'work_foreign_entity_info',
        plural: !1,
        selections: [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'type',
            storageKey: null,
          },
        ],
        storageKey: null,
      };
      return {
        argumentDefinitions: [{ kind: 'RootArgument', name: 'scale' }],
        kind: 'Fragment',
        metadata: { mask: !1 },
        name: 'CometTextWithEntitiesRelay_entity',
        selections: [
          {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: '__typename',
            storageKey: null,
          },
          {
            alias: null,
            args: [{ kind: 'Literal', name: 'site', value: 'comet' }],
            kind: 'ScalarField',
            name: 'url',
            storageKey: 'url(site:"comet")',
          },
          {
            alias: 'mobileUrl',
            args: [{ kind: 'Literal', name: 'site', value: 'mobile' }],
            kind: 'ScalarField',
            name: 'url',
            storageKey: 'url(site:"mobile")',
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'id',
                storageKey: null,
              },
            ],
            type: 'Actor',
            abstractKey: '__isActor',
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                args: null,
                documentName: 'CometTextWithEntitiesRelay_entity',
                fragmentName:
                  'GroupsCometHashtagsStoryMessageHashtagLink_hashtag',
                fragmentPropName: 'hashtag',
                kind: 'ModuleImport',
              },
            ],
            type: 'GroupHashtag',
            abstractKey: null,
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                args: null,
                documentName: 'CometTextWithEntitiesRelay_entity',
                fragmentName: 'PagesCometPageLink_page',
                fragmentPropName: 'page',
                kind: 'ModuleImport',
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'category_type',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'verification_status',
                storageKey: null,
              },
              {
                args: null,
                kind: 'FragmentSpread',
                name: 'CometPageVerificationBadge_page',
              },
            ],
            type: 'Page',
            abstractKey: null,
          },
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'ProfileCometProfileLink_actor',
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                args: null,
                documentName: 'CometTextWithEntitiesRelay_entity',
                fragmentName: 'ProfileGeminiWeakReferenceLink_user',
                fragmentPropName: 'user',
                kind: 'ModuleImport',
              },
              a,
              {
                alias: null,
                args: null,
                concreteType: 'WorkUserInfo',
                kind: 'LinkedField',
                name: 'work_info',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'is_active_account',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'User',
            abstractKey: null,
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                args: null,
                documentName: 'CometTextWithEntitiesRelay_entity',
                fragmentName: 'GroupsCometCustomCommandsLink_groupSlashCommand',
                fragmentPropName: 'groupSlashCommand',
                kind: 'ModuleImport',
              },
            ],
            type: 'GroupCustomSlashCommand',
            abstractKey: null,
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'external_url',
                storageKey: null,
              },
            ],
            type: 'ExternalUrl',
            abstractKey: null,
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'time_index',
                storageKey: null,
              },
            ],
            type: 'VideoTimeIndex',
            abstractKey: null,
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                alias: null,
                args: null,
                concreteType: null,
                kind: 'LinkedField',
                name: 'web_link',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'url',
                    storageKey: null,
                  },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'fbclid',
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'lynx_mode',
                        storageKey: null,
                      },
                    ],
                    type: 'ExternalWebLink',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'WebLinkable',
            abstractKey: '__isWebLinkable',
          },
          {
            kind: 'InlineFragment',
            selections: [
              a,
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'is_multi_company_group',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'work_official_status',
                storageKey: null,
              },
            ],
            type: 'Group',
            abstractKey: null,
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                alias: 'imageScaledForFeed',
                args: [
                  { kind: 'Variable', name: 'scale', variableName: 'scale' },
                  { kind: 'Literal', name: 'width', value: 680 },
                ],
                concreteType: 'Image',
                kind: 'LinkedField',
                name: 'image',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'height',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'uri',
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: 'ScalarField',
                    name: 'width',
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'accessibility_caption',
                storageKey: null,
              },
            ],
            type: 'Photo',
            abstractKey: null,
          },
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'CometTitleSentenceGroupJoinButtonRenderer_entity',
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'deep_link_number',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: 'Page',
                kind: 'LinkedField',
                name: 'page',
                plural: !1,
                selections: [
                  {
                    alias: 'use_whatsapp_deeplinks_plugin',
                    args: [
                      {
                        kind: 'Literal',
                        name: 'gk_name',
                        value: 'bmxm_ctwa_perf_page_launch_h22022',
                      },
                    ],
                    concreteType: 'EntGKCheck',
                    kind: 'LinkedField',
                    name: 'gk_check',
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: 'ScalarField',
                        name: 'passes_gk',
                        storageKey: null,
                      },
                    ],
                    storageKey:
                      'gk_check(gk_name:"bmxm_ctwa_perf_page_launch_h22022")',
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'PageWhatsAppNumber',
            abstractKey: null,
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'name',
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'ticker_symbol',
                storageKey: null,
              },
            ],
            type: 'KGTickerNode',
            abstractKey: null,
          },
          {
            kind: 'InlineFragment',
            selections: [
              {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'snapshot_url',
                storageKey: null,
              },
              {
                args: null,
                kind: 'FragmentSpread',
                name: 'truncateComposedTextWithUnidash_entity',
              },
            ],
            type: 'XFBProdQuartzVizirSnapshot',
            abstractKey: null,
          },
        ],
        type: 'Entity',
        abstractKey: '__isEntity',
      };
    })();
    e.exports = a;
  },
  null,
);
