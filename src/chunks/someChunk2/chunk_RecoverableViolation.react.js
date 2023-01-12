__d(
  'RecoverableViolation.react',
  ['react', 'recoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useRef;
    function a(a) {
      var b = a.errorMessage,
        d = a.errorObject,
        e = a.projectName,
        f = i(!1);
      h(function () {
        f.current || (c('recoverableViolation')(b, e, d), (f.current = !0));
      });
      return null;
    }
    g['default'] = a;
  },
  98,
);
