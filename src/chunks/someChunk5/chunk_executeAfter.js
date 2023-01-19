__d(
  'executeAfter',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b, c) {
      return function () {
        a.apply(c || this, arguments), b.apply(c || this, arguments);
      };
    }
    e.exports = a;
  },
  null,
);
