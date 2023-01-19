__d(
  'RelayFBOperationLoader',
  ['Promise', 'RelayFBModuleLoader'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      get: function (a) {
        return a == null || typeof a !== 'object'
          ? null
          : d('RelayFBModuleLoader').get(a);
      },
      load: function (a) {
        return a == null || typeof a !== 'object'
          ? b('Promise').resolve(null)
          : d('RelayFBModuleLoader').load(a);
      },
    };
    c = a;
    g['default'] = c;
  },
  98,
);
