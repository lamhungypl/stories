__d(
  'BanzaiConsts',
  [],
  function (a, b, c, d, e, f) {
    a = {
      SEND: 'Banzai:SEND',
      OK: 'Banzai:OK',
      ERROR: 'Banzai:ERROR',
      SHUTDOWN: 'Banzai:SHUTDOWN',
      BASIC: 'basic',
      VITAL: 'vital',
      BASIC_WAIT: 6e4,
      BASIC_WAIT_COMET: 2e3,
      VITAL_WAIT: 1e3,
      BATCH_SIZE_LIMIT: 64e3,
      EXPIRY: 864e5,
      BATCH_TIMEOUT: 1e4,
      LAST_STORAGE_FLUSH: 'banzai:last_storage_flush',
      STORAGE_FLUSH_INTERVAL: 12 * 60 * 6e4,
      POST_READY: 0,
      POST_INFLIGHT: 1,
      POST_SENT: 2,
    };
    b = a;
    f['default'] = b;
  },
  66,
);
