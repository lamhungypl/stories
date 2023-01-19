__d(
  'relayFBGetDataID',
  ['relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('relay-runtime').VIEWER_ID,
      h = b('relay-runtime').VIEWER_TYPE;
    function a(a, b) {
      if (b === h) return g;
      return b === 'MessagingParticipant' ||
        b === 'BlockedUser' ||
        b === 'SRTUser' ||
        b === 'MessengerViewerFBGroupChat' ||
        b === 'MessengerGlobalFBGroupChat'
        ? a.id == null
          ? null
          : b + ':' + a.id
        : a.id;
    }
    e.exports = a;
  },
  null,
);
