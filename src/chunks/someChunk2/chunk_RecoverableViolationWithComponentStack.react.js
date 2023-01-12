__d(
  'RecoverableViolationWithComponentStack.react',
  ['CometErrorBoundary.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function i(a) {
      a = a.errorMessage;
      throw new Error(a);
    }
    function a(a) {
      var b = a.errorMessage,
        d = a.fallback;
      a = a.projectName;
      return h.jsx(c('CometErrorBoundary.react'), {
        context: { project: a, type: 'error' },
        fallback: function () {
          var a;
          return (a = d) != null ? a : null;
        },
        children: h.jsx(i, { errorMessage: b }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
