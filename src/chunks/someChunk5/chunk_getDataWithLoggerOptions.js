__d(
  'getDataWithLoggerOptions',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      return babelHelpers['extends']({}, a, {
        __options: babelHelpers['extends']({ event_time: Date.now() / 1e3 }, b),
      });
    }
    f['default'] = a;
  },
  66,
);
