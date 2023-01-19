__d(
  'ChannelClientID',
  ['MqttWebDeviceID', 'gkx', 'uuid'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('gkx')('3400')
      ? c('uuid')()
      : (a =
          c('MqttWebDeviceID') == null
            ? void 0
            : c('MqttWebDeviceID').clientID) != null
      ? a
      : c('uuid')();
    b = {
      getID: function () {
        return h;
      },
    };
    f.exports = b;
  },
  34,
);
