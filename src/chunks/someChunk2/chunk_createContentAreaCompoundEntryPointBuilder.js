__d(
  'createContentAreaCompoundEntryPointBuilder',
  ['createGenericCompoundEntryPointBuilder'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var d = c('createGenericCompoundEntryPointBuilder')(a, b);
      return function (a, b) {
        var c = { getPreloadProps: b, root: a };
        return d(function (a) {
          return { contentEntryPoint: { entryPoint: c, entryPointParams: a } };
        });
      };
    }
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
