__d(
  'createGenericCompoundEntryPointBuilder',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      return function (c) {
        return {
          getPreloadProps: function (a) {
            return { entryPoints: c(a), extraProps: null, queries: b(a) };
          },
          root: a,
        };
      };
    }
    f['default'] = a;
  },
  66,
);
