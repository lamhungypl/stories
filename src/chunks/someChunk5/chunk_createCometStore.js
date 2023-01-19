__d(
  'createCometStore',
  [
    'CometRelayConfig',
    'RelayFBGCScheduler',
    'RelayFBOperationLoader',
    'cr:2928',
    'gkx',
    'relayFBGetDataID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('gkx')('1151941');
    function a(a) {
      var e = new (b('cr:2928').RecordSource)();
      e = new (b('cr:2928').Store)(e, {
        gcReleaseBufferSize: d('CometRelayConfig').gc_release_buffer_size,
        gcScheduler: c('RelayFBGCScheduler'),
        getDataID: c('relayFBGetDataID'),
        log: a,
        operationLoader: c('RelayFBOperationLoader'),
        queryCacheExpirationTime: void 0,
      });
      h || e.holdGC();
      return e;
    }
    g['default'] = a;
  },
  98,
);
