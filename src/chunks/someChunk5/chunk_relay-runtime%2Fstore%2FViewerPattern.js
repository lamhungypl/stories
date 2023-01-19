__d(
  'relay-runtime/store/ViewerPattern',
  ['relay-runtime/store/ClientID', 'relay-runtime/store/RelayStoreUtils'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('relay-runtime/store/ClientID').generateClientID;
    c = b('relay-runtime/store/RelayStoreUtils').ROOT_ID;
    d = a(c, 'viewer');
    f = 'Viewer';
    e.exports = { VIEWER_ID: d, VIEWER_TYPE: f };
  },
  null,
);
