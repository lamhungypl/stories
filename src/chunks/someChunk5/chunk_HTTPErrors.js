__d(
  'HTTPErrors',
  ['emptyFunction'],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return { summary: 'HTTP Error', description: 'Unknown HTTP error #' + a };
    }
    b = { get: a, getAll: c('emptyFunction').thatReturns(new Map()) };
    d = b;
    g['default'] = d;
  },
  98,
);
