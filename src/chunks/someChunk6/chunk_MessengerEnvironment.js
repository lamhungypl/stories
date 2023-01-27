__d(
  'MessengerEnvironment',
  ['CurrentEnvironment'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = babelHelpers['extends']({}, c('CurrentEnvironment'), {
      messengerui: !1,
      roomschatui: !1,
      setMessengerUI: function (a) {
        h.messengerui = a;
      },
      setRoomsChatUI: function (a) {
        h.roomschatui = a;
      },
    });
    a = h;
    g['default'] = a;
  },
  98,
);
