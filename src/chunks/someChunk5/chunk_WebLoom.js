__d(
  'WebLoom',
  [
    'CurrentUser',
    'Env',
    'PerfXSharedFields',
    'QuickPerformanceLogger',
    'Random',
    'SiteData',
    'SnappyCompressUtil',
    'URI',
    'UserAgent',
    'WebLoomBanzaiTransport',
    'WebLoomConfig',
    'cr:1094133',
    'cr:955714',
    'gkx',
    'performanceNavigationStart',
    'web-loom',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      QuickPerformanceLogger: c('QuickPerformanceLogger'),
      Random: c('Random'),
      Transport: c('WebLoomBanzaiTransport'),
      URI: c('URI'),
      isBrowser: c('UserAgent').isBrowser,
      compressStringToSnappy: c('SnappyCompressUtil').compressStringToSnappy,
    };
    e = {
      appStart: c('gkx')('6196') ? 0 : c('performanceNavigationStart')(),
      appId: c('CurrentUser').getAppID(),
      sanitizeURIs: c('gkx')('1787898'),
      samplingConfig: c('WebLoomConfig'),
      clientRev: c('SiteData').client_revision,
      serverRev: c('SiteData').server_revision,
      spinMode: c('SiteData').spin,
      useLiteTracing: c('gkx')('4240'),
      perfXData: d('PerfXSharedFields').getCommonData(),
    };
    f = new (d('web-loom').WebLoomCore)(e, a);
    b('cr:1094133') && f.addProvider(b('cr:1094133'));
    b('cr:955714') &&
      c('Env').jssp_header_sent &&
      f.addProvider(b('cr:955714'));
    d = f;
    g['default'] = d;
  },
  98,
);
