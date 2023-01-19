__d(
  'TrustedTypesUnsafeFunctionScriptPolicy_DO_NOT_USE',
  ['Env', 'TrustedTypes', 'err'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d = {
      createScript: function (a) {
        for (
          var b = arguments.length, d = new Array(b > 1 ? b - 1 : 0), e = 1;
          e < b;
          e++
        )
          d[e - 1] = arguments[e];
        d.forEach(function (a) {
          if (
            typeof window !== 'undefined' &&
            typeof window.trustedTypes !== 'undefined' &&
            !window.trustedTypes.isScript(a)
          )
            throw c('err')(
              'Trusted Function requires TrustedScripts args only.',
            );
        });
        var f = d.slice(0, -1).join(','),
          g = d.pop().toString();
        return (
          '(function anonymous(\n     ' +
          f +
          '\n     ) {\n     ' +
          g +
          '\n     })'
        );
      },
    };
    var h = c('TrustedTypes').createPolicy('unsafe-function-do-not-use', d);
    function b() {
      for (var b = arguments.length, d = new Array(b), e = 0; e < b; e++)
        d[e] = arguments[e];
      if (c('TrustedTypes').isSupportedNatively() && c('Env').useTrustedTypes) {
        var f = h.createScript.apply(h, [''].concat(d));
        return a.eval(f);
      } else return babelHelpers.construct(Function, d);
    }
    g.TrustedTypesUnsafeFunctionScriptPolicy_DO_NOT_USE = h;
    g.createTrustedFunction = b;
  },
  98,
);
