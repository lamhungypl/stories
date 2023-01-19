__d(
  'CometSettingsDropdownTriggerQuery.graphql',
  ['relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'coreAppAdminProfileSwitcherNuxId',
        },
        b = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'pageManagementNuxId',
        },
        c = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'profileSwitcherAdminEducationNuxId',
        },
        d = {
          defaultValue: null,
          kind: 'LocalArgument',
          name: 'profileSwitcherNuxId',
        },
        e = { defaultValue: null, kind: 'LocalArgument', name: 'showNewToast' },
        f = [
          {
            kind: 'Variable',
            name: 'nux_id',
            variableName: 'pageManagementNuxId',
          },
        ],
        g = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'should_show',
          storageKey: null,
        },
        h = [g],
        i = [
          {
            kind: 'Variable',
            name: 'nux_id',
            variableName: 'profileSwitcherNuxId',
          },
        ],
        j = [
          {
            kind: 'Variable',
            name: 'nux_id',
            variableName: 'coreAppAdminProfileSwitcherNuxId',
          },
        ],
        k = [
          {
            kind: 'Variable',
            name: 'nux_id',
            variableName: 'profileSwitcherAdminEducationNuxId',
          },
        ],
        l = {
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
              args: [
                { kind: 'Literal', name: 'height', value: 32 },
                { kind: 'Literal', name: 'width', value: 32 },
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
              storageKey: 'profile_picture(height:32,width:32)',
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'user_category_with_admins_or_limited_access_roles',
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'should_show_soap_onboarding_dialog',
              storageKey: null,
            },
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
              args: null,
              kind: 'ScalarField',
              name: 'is_additional_profile_plus',
              storageKey: null,
            },
          ],
          type: 'User',
          abstractKey: null,
        },
        m = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        },
        n = {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'id',
          storageKey: null,
        };
      g = [m, g, n];
      return {
        fragment: {
          argumentDefinitions: [a, b, c, d, e],
          kind: 'Fragment',
          metadata: null,
          name: 'CometSettingsDropdownTriggerQuery',
          selections: [
            {
              alias: 'page_management_nux',
              args: f,
              concreteType: null,
              kind: 'LinkedField',
              name: 'nux',
              plural: !1,
              selections: h,
              storageKey: null,
            },
            {
              alias: 'profile_switcher_nux',
              args: i,
              concreteType: null,
              kind: 'LinkedField',
              name: 'nux',
              plural: !1,
              selections: h,
              storageKey: null,
            },
            {
              alias: 'core_app_admin_profile_switcher_nux',
              args: j,
              concreteType: null,
              kind: 'LinkedField',
              name: 'nux',
              plural: !1,
              selections: h,
              storageKey: null,
            },
            {
              alias: 'profile_switcher_admin_education_nux',
              args: k,
              concreteType: null,
              kind: 'LinkedField',
              name: 'nux',
              plural: !1,
              selections: h,
              storageKey: null,
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
                  selections: [l],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              condition: 'showNewToast',
              kind: 'Condition',
              passingValue: !0,
              selections: [
                {
                  args: null,
                  kind: 'FragmentSpread',
                  name: 'CometProfileSwitchedToastDeferred_query',
                },
              ],
            },
          ],
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [b, d, a, c, e],
          kind: 'Operation',
          name: 'CometSettingsDropdownTriggerQuery',
          selections: [
            {
              alias: 'page_management_nux',
              args: f,
              concreteType: null,
              kind: 'LinkedField',
              name: 'nux',
              plural: !1,
              selections: g,
              storageKey: null,
            },
            {
              alias: 'profile_switcher_nux',
              args: i,
              concreteType: null,
              kind: 'LinkedField',
              name: 'nux',
              plural: !1,
              selections: g,
              storageKey: null,
            },
            {
              alias: 'core_app_admin_profile_switcher_nux',
              args: j,
              concreteType: null,
              kind: 'LinkedField',
              name: 'nux',
              plural: !1,
              selections: g,
              storageKey: null,
            },
            {
              alias: 'profile_switcher_admin_education_nux',
              args: k,
              concreteType: null,
              kind: 'LinkedField',
              name: 'nux',
              plural: !1,
              selections: g,
              storageKey: null,
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
                  selections: [m, l, n],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              condition: 'showNewToast',
              kind: 'Condition',
              passingValue: !0,
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
                          kind: 'InlineFragment',
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'username',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: 'ScalarField',
                              name: 'profile_type_name_for_content',
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                'UserProfileSwitcherEligibleProfilesConnection',
                              kind: 'LinkedField',
                              name: 'profile_switcher_eligible_profiles',
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    'ProfileSwitcherEligibleProfile',
                                  kind: 'LinkedField',
                                  name: 'nodes',
                                  plural: !0,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      concreteType: 'User',
                                      kind: 'LinkedField',
                                      name: 'profile',
                                      plural: !1,
                                      selections: [n],
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                              ],
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
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'logout_whitelist',
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: '5406719386074742',
          metadata: {},
          name: 'CometSettingsDropdownTriggerQuery',
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
