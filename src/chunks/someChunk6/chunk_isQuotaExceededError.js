__d(
  'isQuotaExceededError',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(b) {
      return Boolean(
        b instanceof a.DOMException &&
          (b.code === 22 ||
            b.code === 1014 ||
            b.name === 'QuotaExceededError' ||
            b.name === 'NS_ERROR_DOM_QUOTA_REACHED'),
      );
    }
    function b(a, b) {
      return Boolean(g(b) && a && a.length !== 0);
    }
    f.isQuotaExceededError = g;
    f.isStorageQuotaExceededError = b;
  },
  66,
);
