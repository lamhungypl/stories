__d(
  'getTranslatedInput',
  ['Env', 'ExecutionEnvironment', 'FBLogger', 'MakeHasteTranslationsMap'],
  function (a, b, c, d, e, f, g) {
    b = 'JHASH';
    var h = new RegExp('__' + b + '__(.+?)__' + b + '__'),
      i = !!c('Env').use_fbt_virtual_modules;
    function a(a) {
      var b = a.table;
      if (i && c('ExecutionEnvironment').canUseDOM) {
        if (typeof b === 'string') {
          var e = b.match(h);
          if (e != null)
            return babelHelpers['extends']({}, a, {
              table: d('MakeHasteTranslationsMap').get(e[1]),
            });
        }
        c('FBLogger')('binary_transparency', 'inlined_translations').warn(
          'Found inlined translated contents in client_fetch_translations experiment! Input: %s',
          JSON.stringify(b),
        );
      }
      return a;
    }
    g['default'] = a;
  },
  98,
);
