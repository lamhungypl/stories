__d(
  'useCometTooltipQP_quickPromotion.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useCometTooltipQP_quickPromotion',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: 'LinkedField',
          name: 'promotion_creatives',
          plural: !0,
          selections: [
            {
              kind: 'RequiredField',
              field: {
                alias: null,
                args: null,
                kind: 'ScalarField',
                name: 'title_text',
                storageKey: null,
              },
              action: 'LOG',
              path: 'promotion_creatives.title_text',
            },
          ],
          storageKey: null,
        },
        { args: null, kind: 'FragmentSpread', name: 'useQP_quickPromotion' },
      ],
      type: 'QuickPromotion',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
