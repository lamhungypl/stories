__d(
  'useQP_quickPromotion.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useQP_quickPromotion',
      selections: [
        {
          kind: 'RequiredField',
          field: {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'id',
            storageKey: null,
          },
          action: 'THROW',
          path: 'id',
        },
        {
          kind: 'RequiredField',
          field: {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'encrypted_logging_data',
            storageKey: null,
          },
          action: 'THROW',
          path: 'encrypted_logging_data',
        },
        {
          kind: 'RequiredField',
          field: {
            alias: 'surface_id',
            args: null,
            kind: 'ScalarField',
            name: 'nux_id',
            storageKey: null,
          },
          action: 'THROW',
          path: 'surface_id',
        },
        {
          kind: 'RequiredField',
          field: {
            alias: null,
            args: null,
            kind: 'ScalarField',
            name: 'trigger',
            storageKey: null,
          },
          action: 'THROW',
          path: 'trigger',
        },
      ],
      type: 'QuickPromotion',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
