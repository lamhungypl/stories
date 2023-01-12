__d(
  'StoriesCreateCTALink.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'StoriesCreateCTALink',
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
                {
                  kind: 'InlineFragment',
                  selections: [
                    {
                      kind: 'InlineDataFragmentSpread',
                      name: 'StoriesCreateCTAUtils_pageAddressAndLocation',
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
                      ],
                      args: null,
                      argumentDefinitions: [],
                    },
                    {
                      kind: 'InlineDataFragmentSpread',
                      name: 'StoriesCreateCTAUtils_pagePhoneNumber',
                      selections: [
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
                      ],
                      args: null,
                      argumentDefinitions: [],
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
          ],
          storageKey: null,
        },
        {
          args: null,
          kind: 'FragmentSpread',
          name: 'StoriesCreateCTALinkPicker_data',
        },
      ],
      type: 'Query',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
