__d(
  'CometSettingsBadgeQuery.graphql',
  ['relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function () {
      var a = [
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
              kind: 'ScalarField',
              name: 'device_switchable_account_has_notification',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: 'Fragment',
          metadata: null,
          name: 'CometSettingsBadgeQuery',
          selections: a,
          type: 'Query',
          abstractKey: null,
        },
        kind: 'Request',
        operation: {
          argumentDefinitions: [],
          kind: 'Operation',
          name: 'CometSettingsBadgeQuery',
          selections: a,
        },
        params: {
          id: '7265153296889354',
          metadata: {},
          name: 'CometSettingsBadgeQuery',
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
