__d(
  'CometTimeSpentUtils',
  ['forEachObject'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a, b, d) {
      a = (a = a.timeSpentConfig) == null ? void 0 : a.session_ids;
      if (d == null || a == null) return b;
      c('forEachObject')(a, function (a, c) {
        a = a.extradata_key;
        if (a != null) {
          b[a] = (a = d[c]) != null ? a : void 0;
        }
      });
      return b;
    };
    a = function (a, b, c) {
      if (c == null) return b;
      c = c || Object.freeze({});
      var d = c.session_ids;
      c = babelHelpers.objectWithoutPropertiesLoose(c, ['session_ids']);
      return h(a, babelHelpers['extends']({}, b, c), d);
    };
    g.addSessionIDsInfo = h;
    g.addTimeSpentMetaData = a;
  },
  98,
);
