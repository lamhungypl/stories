__d(
  'withLive',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var c = a.metadata;
      c = c.live;
      if (c != null && typeof c === 'object') {
        c = h(a);
        a = i(a);
        c == null || a == null || g(0, 45, c, a);
        c != null || a != null || g(0, 46);
        if (c != null) {
          var d = b.poll;
          d == null || d === c || g(0, 47, d, c);
          return babelHelpers['extends']({}, b, { poll: c });
        }
        if (a != null) {
          d = b.liveConfigId;
          d == null || d === a || g(0, 48, d, a);
          return babelHelpers['extends']({}, b, { liveConfigId: a });
        }
      }
      return b;
    }
    function h(a) {
      a = a.metadata;
      a = a.live;
      if (a != null && typeof a === 'object') {
        a.polling_interval == null ||
          typeof a.polling_interval === 'number' ||
          g(0, 49);
        return a.polling_interval;
      }
      return null;
    }
    function i(a) {
      a = a.metadata;
      a = a.live;
      if (a != null && typeof a === 'object') {
        a.config_id == null || typeof a.config_id === 'string' || g(0, 50);
        return a.config_id;
      }
      return null;
    }
    e.exports = a;
  },
  null,
);
