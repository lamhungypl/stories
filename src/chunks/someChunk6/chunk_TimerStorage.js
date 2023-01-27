__d(
  'TimerStorage',
  [],
  function (a, b, c, d, e, f) {
    a = {
      ANIMATION_FRAME: 'ANIMATION_FRAME',
      IDLE_CALLBACK: 'IDLE_CALLBACK',
      IMMEDIATE: 'IMMEDIATE',
      INTERVAL: 'INTERVAL',
      TIMEOUT: 'TIMEOUT',
    };
    var g = {};
    Object.keys(a).forEach(function (a) {
      return (g[a] = {});
    });
    b = babelHelpers['extends']({}, a, {
      set: function (a, b) {
        g[a][b] = !0;
      },
      unset: function (a, b) {
        delete g[a][b];
      },
      clearAll: function (a, b) {
        Object.keys(g[a]).forEach(b), (g[a] = {});
      },
      getStorages: function () {
        return {};
      },
    });
    c = b;
    f['default'] = c;
  },
  66,
);
