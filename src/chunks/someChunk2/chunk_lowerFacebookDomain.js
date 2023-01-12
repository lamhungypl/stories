__d(
  'lowerFacebookDomain',
  ['LowerDomainRegex'],
  function (a, b, c, d, e, f, g) {
    b = window.location.hostname.match(d('LowerDomainRegex').hostnameRegex);
    var h = b ? b[1] : 'facebook.com';
    a.setDomain = function (a) {
      h = a;
    };
    a.isValidDocumentDomain = function () {
      return document.domain == h;
    };
    function a() {
      document.domain = h;
    }
    c = a;
    g['default'] = c;
  },
  98,
); /*FB_PKG_DELIM*/
