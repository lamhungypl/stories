__d(
  'relay-runtime/util/getOperation',
  ['relay-runtime/util/RelayConcreteNode'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('relay-runtime/util/RelayConcreteNode').REQUEST,
      h = b('relay-runtime/util/RelayConcreteNode').SPLIT_OPERATION;
    function a(a) {
      switch (a.kind) {
        case g:
          return a.operation;
        case h:
        default:
          return a;
      }
    }
    e.exports = a;
  },
  null,
);
