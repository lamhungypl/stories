__d(
  'StoriesCreateFormBodyWrapper_data.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [{ kind: 'RootArgument', name: 'scale' }],
      kind: 'Fragment',
      metadata: null,
      name: 'StoriesCreateFormBodyWrapper_data',
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
                  args: [
                    { kind: 'Variable', name: 'scale', variableName: 'scale' },
                    { kind: 'Literal', name: 'width', value: 60 },
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
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'name',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
