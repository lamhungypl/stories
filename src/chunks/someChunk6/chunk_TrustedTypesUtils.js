__d(
  'TrustedTypesUtils',
  ['FBLogger'],
  function (a, b, c, d, e, f, g) {
    var h = typeof window !== 'undefined';
    e = function (a) {
      return a;
    };
    function a(a) {
      c('FBLogger')('saf_web').info(
        '[Trusted-Types][%s]: %s',
        h && typeof window.origin !== 'undefined' ? window.origin : 'undefined',
        a,
      );
    }
    function i(a) {
      c('FBLogger')('saf_web').warn(
        '[Trusted-Types][%s]: %s',
        h && typeof window.origin !== 'undefined' ? window.origin : 'undefined',
        a,
      );
    }
    function b(a) {
      c('FBLogger')('saf_web').mustfix(
        '[Trusted-Types][%s]: %s',
        h && typeof window.origin !== 'undefined' ? window.origin : 'undefined',
        a,
      );
    }
    function d(a, b) {
      i(
        "String '" +
          a.toString().slice(0, 15) +
          "' is flowing to DOM XSS sink. Default Trusted Type policy was executed and removed dangerous elements. " +
          ("Returned string is: '" +
            b.toString().slice(0, 15) +
            "' If this is breaking your feature, post in ") +
          'Security Infra group.',
      );
    }
    g.isBrowser = h;
    g.noop = e;
    g.logInfo = a;
    g.logWarning = i;
    g.logError = b;
    g.logDefaultPolicySanitization = d;
  },
  98,
);
