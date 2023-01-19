__d(
  'expectationViolation',
  [
    'ErrorNormalizeUtils',
    'ExecutionEnvironment',
    'FBLogger',
    'cr:840411',
    'emptyFunction',
    'sprintf',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d = c('emptyFunction');
    function a(a) {
      var b;
      for (
        var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1;
        f < d;
        f++
      )
        e[f - 1] = arguments[f];
      (b = c('FBLogger')(
        'expectation_violation',
      ).blameToPreviousFrame()).warn.apply(b, [a].concat(e));
    }
    a.setHandler = b;
    function b(a) {
      d = a;
    }
    g['default'] = a;
  },
  98,
);
