__d(
  'getFalcoLogPolicy_DO_NOT_USE',
  ['recoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = { r: 1 },
      i = {};
    function a(a) {
      var b = i[a];
      if (b == null) {
        c('recoverableViolation')(
          "Failed to find a Haste-supplied log policy for the Falco event ' +\n        'identified by token `" +
            a +
            '`. Failing open (ie. with a sampling rate of 1.0).',
          'staticresources',
        );
        return h;
      }
      return b;
    }
    a.add = function (a, b) {
      Object.keys(a).forEach(function (c) {
        b && b.entry++, i[c] == null ? (i[c] = a[c]) : b && b.dup_entry++;
      });
    };
    g['default'] = a;
  },
  98,
);
