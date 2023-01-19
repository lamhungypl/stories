__d(
  'getLoadingStateAriaProps',
  ['fbt'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a(a, b) {
      var c;
      b =
        a == null
          ? { 'aria-label': h._('__JHASH__6lD-XyRyuHe__JHASH__') }
          : {
              'aria-valuemax':
                (c = b == null ? void 0 : b.max) != null ? c : 100,
              'aria-valuemin': (c = b == null ? void 0 : b.min) != null ? c : 0,
              'aria-valuenow': a,
            };
      return babelHelpers['extends']({ role: 'progressbar' }, b);
    }
    g['default'] = a;
  },
  98,
);
