__d(
  'getRouteInfoForCometProductAttributionDispatch',
  ['recoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      if (b != null)
        switch (b) {
          case 'rootView':
            return a.main;
          case 'hostedView':
            b = a.hosted;
            if (b) return b;
            c('recoverableViolation')(
              'Navigation was dispatched from hostedView, but no hosted route in previous state',
              'comet_infra',
            );
            break;
          case 'pushView':
            b = a.pushViewStack;
            if (b && b.length > 0) {
              b = b[b.length - 1];
              b.depth;
              b.key;
              b = babelHelpers.objectWithoutPropertiesLoose(b, [
                'depth',
                'key',
              ]);
              return b;
            }
            c('recoverableViolation')(
              'Navigation was dispatched from pushView, but no push view route in previous state',
              'comet_infra',
            );
            break;
        }
      return a.main;
    }
    g['default'] = a;
  },
  98,
);
