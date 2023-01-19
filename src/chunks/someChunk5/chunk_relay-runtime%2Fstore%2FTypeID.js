__d(
  'relay-runtime/store/TypeID',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 'client:__type:';
    c = '__TypeSchema';
    function a(a) {
      return g + a;
    }
    function b(a) {
      return a.indexOf(g) === 0;
    }
    e.exports = { generateTypeID: a, isTypeID: b, TYPE_SCHEMA_TYPE: c };
  },
  null,
);
