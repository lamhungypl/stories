__d(
  'escapeRegex',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g, '\\$1');
    }
    e.exports = a;
  },
  null,
);
