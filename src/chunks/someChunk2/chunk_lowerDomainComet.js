__d(
  'lowerDomainComet',
  ['ErrorGuard', 'FBLogger', 'LowerDomainRegex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = c('ErrorGuard').guard(function () {
      var a;
      if (window.self !== window.top) return;
      if (
        ((a = document.domain) != null ? a : '')
          .toLowerCase()
          .match(d('LowerDomainRegex').domainRegex)
      ) {
        a = window.location.hostname.match(d('LowerDomainRegex').hostnameRegex);
        a = a ? a[1] : 'facebook.com';
        try {
          document.domain = a;
        } catch (a) {
          c('FBLogger')('lowerDomainComet')
            .catching(a)
            .warn('Error trying to lower the domain');
        }
      }
    });
    b = a;
    g['default'] = b;
  },
  98,
);
