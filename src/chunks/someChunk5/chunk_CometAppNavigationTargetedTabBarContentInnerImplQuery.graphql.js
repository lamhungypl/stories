__d(
  'CometAppNavigationTargetedTabBarContentInnerImplQuery.graphql',
  ['relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
          {
            defaultValue: null,
            kind: 'LocalArgument',
            name: 'enableFeedsTabNux',
          },
        ],
        b = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        },
        c = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'name',
          storageKey: null,
        },
        d = [
          { kind: 'Literal', name: 'environment', value: 'COMET' },
          { kind: 'Literal', name: 'folder_id', value: 'PRODUCT' },
        ],
        e = {
          alias: null,
          args: [
            {
              kind: 'Literal',
              name: 'bookmark_render_location',
              value: 'COMET_TOP_TAB',
            },
          ],
          kind: 'ScalarField',
          name: 'unread_count',
          storageKey: 'unread_count(bookmark_render_location:"COMET_TOP_TAB")',
        },
        f = [b],
        g = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'last_used_timestamp',
          storageKey: null,
        },
        h = [
          { kind: 'Literal', name: 'first', value: 1 },
          { kind: 'Literal', name: 'surface_nux_id', value: 10707 },
          { kind: 'Literal', name: 'trigger', value: 'MOST_RECENT_TAB_ICON' },
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
          name: 'CometAppNavigationTargetedTabBarContentInnerImplQuery',
          selections: [
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
                  selections: [b, c],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: d,
                  concreteType: 'TabBookmarksConnection',
                  kind: 'LinkedField',
                  name: 'tab_bookmarks',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'TabBookmarksEdge',
                      kind: 'LinkedField',
                      name: 'edges',
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'Bookmark',
                          kind: 'LinkedField',
                          name: 'node',
                          plural: !1,
                          selections: [
                            e,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: 'LinkedField',
                              name: 'bookmarked_node',
                              plural: !1,
                              selections: f,
                              storageKey: null,
                            },
                            g,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'tab_bookmarks(environment:"COMET",folder_id:"PRODUCT")',
                },
                {
                  condition: 'enableFeedsTabNux',
                  kind: 'Condition',
                  passingValue: !0,
                  selections: [
                    {
                      alias: 'feeds_tab_tooltip',
                      args: h,
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
                              args: null,
                              kind: 'FragmentSpread',
                              name: 'useCometTooltipQP_quickPromotion',
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey:
                        'eligible_promotions(first:1,surface_nux_id:10707,trigger:"MOST_RECENT_TAB_ICON")',
                    },
                  ],
                },
              ],
              storageKey: null,
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: a,
          kind: 'Operation',
          name: 'CometAppNavigationTargetedTabBarContentInnerImplQuery',
          selections: [
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
                  selections: [i, b, c],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: d,
                  concreteType: 'TabBookmarksConnection',
                  kind: 'LinkedField',
                  name: 'tab_bookmarks',
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: 'TabBookmarksEdge',
                      kind: 'LinkedField',
                      name: 'edges',
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: 'Bookmark',
                          kind: 'LinkedField',
                          name: 'node',
                          plural: !1,
                          selections: [
                            e,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: 'LinkedField',
                              name: 'bookmarked_node',
                              plural: !1,
                              selections: [i, b],
                              storageKey: null,
                            },
                            g,
                            b,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey:
                    'tab_bookmarks(environment:"COMET",folder_id:"PRODUCT")',
                },
                {
                  condition: 'enableFeedsTabNux',
                  kind: 'Condition',
                  passingValue: !0,
                  selections: [
                    {
                      alias: 'feeds_tab_tooltip',
                      args: h,
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
                              concreteType: null,
                              kind: 'LinkedField',
                              name: 'promotion_creatives',
                              plural: !0,
                              selections: [
                                i,
                                {
                                  alias: null,
                                  args: null,
                                  kind: 'ScalarField',
                                  name: 'title_text',
                                  storageKey: null,
                                },
                                {
                                  kind: 'InlineFragment',
                                  selections: f,
                                  type: 'Node',
                                  abstractKey: '__isNode',
                                },
                              ],
                              storageKey: null,
                            },
                            b,
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
                        'eligible_promotions(first:1,surface_nux_id:10707,trigger:"MOST_RECENT_TAB_ICON")',
                    },
                  ],
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: '5670226509695420',
          metadata: {},
          name: 'CometAppNavigationTargetedTabBarContentInnerImplQuery',
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