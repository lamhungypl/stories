__d(
  'CometAppNavigationProfileSwitcherConfigQuery.graphql',
  ['relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [{ defaultValue: null, kind: 'LocalArgument', name: 'scale' }],
        b = {
          kind: 'InlineFragment',
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'UserProfileSwitcherEligibleProfilesConnection',
              kind: 'LinkedField',
              name: 'profile_switcher_eligible_profiles',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'count',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: [
                { kind: 'Literal', name: 'height', value: 40 },
                { kind: 'Variable', name: 'scale', variableName: 'scale' },
                { kind: 'Literal', name: 'width', value: 40 },
              ],
              concreteType: 'Image',
              kind: 'LinkedField',
              name: 'profile_picture',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'uri',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: 'User',
          abstractKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: a,
          kind: 'Fragment',
          metadata: null,
          name: 'CometAppNavigationProfileSwitcherConfigQuery',
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
                  selections: [b],
                  storageKey: null,
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
          name: 'CometAppNavigationProfileSwitcherConfigQuery',
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
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: '__typename',
                      storageKey: null,
                    },
                    b,
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'id',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: '8024360247634329',
          metadata: {},
          name: 'CometAppNavigationProfileSwitcherConfigQuery',
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
