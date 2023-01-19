__d(
  'relay-runtime/store/defaultGetDataID',
  ['relay-runtime/store/ViewerPattern'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('relay-runtime/store/ViewerPattern').VIEWER_ID,
      h = b('relay-runtime/store/ViewerPattern').VIEWER_TYPE;
    function a(a, b) {
      return b === h ? (a.id == null ? g : a.id) : a.id;
    }
    e.exports = a;
  },
  null,
);
