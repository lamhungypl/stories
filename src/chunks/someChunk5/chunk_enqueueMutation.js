__d(
  'enqueueMutation',
  ['RelayMutationQueue'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = a();
    function a() {
      if (typeof WeakMap === 'function') return new WeakMap();
      if (typeof Map === 'function') return new Map();
      throw ReferenceError(
        'Cannot use enqueueMutation in this environment. Either WeakMap or Map must be defined to use enqueueMutation.',
      );
    }
    function c(a, c) {
      var d = g.get(a);
      d || ((d = new (b('RelayMutationQueue'))(a)), g.set(a, d));
      return d.push(c);
    }
    function d(a) {
      return g.get(a);
    }
    e.exports = { enqueueMutation: c, __internal: { getMutationQueue: d } };
  },
  null,
);
