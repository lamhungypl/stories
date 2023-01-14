__d(
  'UserAgent',
  ['UserAgentData', 'VersionRange', 'memoizeStringOnly'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b, d, e) {
      if (a === d) return !0;
      if (!d.startsWith(a)) return !1;
      d = d.slice(a.length);
      if (b != null) {
        d = e ? e(d) : d;
        return c('VersionRange').contains(d, b);
      }
      return !1;
    }
    function i(a) {
      return c('UserAgentData').platformName === 'Windows'
        ? a.replace(/^\s*NT/, '')
        : a;
    }
    a = {
      isBrowser: c('memoizeStringOnly')(function (a) {
        return h(
          c('UserAgentData').browserName,
          c('UserAgentData').browserFullVersion,
          a,
        );
      }),
      isBrowserArchitecture: c('memoizeStringOnly')(function (a) {
        return h(c('UserAgentData').browserArchitecture, null, a);
      }),
      isDevice: c('memoizeStringOnly')(function (a) {
        return h(c('UserAgentData').deviceName, null, a);
      }),
      isEngine: c('memoizeStringOnly')(function (a) {
        return h(
          c('UserAgentData').engineName,
          c('UserAgentData').engineVersion,
          a,
        );
      }),
      isPlatform: c('memoizeStringOnly')(function (a) {
        return h(
          c('UserAgentData').platformName,
          c('UserAgentData').platformFullVersion,
          a,
          i,
        );
      }),
      isPlatformArchitecture: c('memoizeStringOnly')(function (a) {
        return h(c('UserAgentData').platformArchitecture, null, a);
      }),
    };
    b = a;
    g['default'] = b;
  },
  98,
);
