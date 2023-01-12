__d(
  'getSearchCometResultsQuery',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      var c = b.hashtag;
      if (typeof c === 'string') return '#' + c;
      c = b.q;
      if (typeof c === 'string') return c;
      b = a.decrypted_bqf_title;
      return typeof b === 'string' ? b : null;
    }
    f['default'] = a;
  },
  66,
);
