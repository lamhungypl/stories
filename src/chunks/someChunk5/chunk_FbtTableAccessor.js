__d(
  'FbtTableAccessor',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      getEnumResult: function (a) {
        return [[a], null];
      },
      getGenderResult: function (a, b, c) {
        return [a, b];
      },
      getNumberResult: function (a, b, c) {
        return [a, b];
      },
      getSubstitution: function (a) {
        return [null, a];
      },
      getPronounResult: function (a) {
        return [[a, '*'], null];
      },
    };
    e.exports = a;
  },
  null,
);
