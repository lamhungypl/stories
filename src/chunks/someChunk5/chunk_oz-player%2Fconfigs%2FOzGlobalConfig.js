__d(
  'oz-player/configs/OzGlobalConfig',
  ['oz-player/shims/getOzGlobalConfigSource'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('oz-player/shims/getOzGlobalConfigSource')();
    a = {
      getBool: function (a, b) {
        return h ? h.getBool(a, b) : b;
      },
      getNumber: function (a, b) {
        return h ? h.getNumber(a, b) : b;
      },
      getString: function (a, b) {
        return h ? h.getString(a, b) : b;
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
