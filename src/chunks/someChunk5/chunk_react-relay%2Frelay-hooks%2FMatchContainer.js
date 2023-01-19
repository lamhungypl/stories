__d(
  'react-relay/relay-hooks/MatchContainer',
  ['react'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = g || b('react'),
      i = h.useMemo;
    function a(a) {
      var b = a.fallback,
        c = a.loader,
        d = a.match;
      a = a.props;
      if (d != null && typeof d !== 'object')
        throw new Error(
          'MatchContainer: Expected `match` value to be an object or null/undefined.',
        );
      d = (d = d) != null ? d : {};
      var e = d.__id,
        f = d.__fragments,
        g = d.__fragmentOwner,
        j = d.__fragmentPropName;
      d = d.__module_component;
      if (
        (g != null && typeof g !== 'object') ||
        (j != null && typeof j !== 'string') ||
        (f != null && typeof f !== 'object') ||
        (e != null && typeof e !== 'string')
      )
        throw new Error(
          "MatchContainer: Invalid 'match' value, expected an object that has a '...SomeFragment' spread.",
        );
      c = d != null ? c(d) : null;
      d = i(
        function () {
          if (j != null && e != null && f != null) {
            var a = {};
            a[j] = { __id: e, __fragments: f, __fragmentOwner: g };
            return a;
          }
          return null;
        },
        [e, f, g, j],
      );
      if (c != null && d != null)
        return h.jsx(c, babelHelpers['extends']({}, a, d));
      else {
        return (c = b) != null ? c : null;
      }
    }
    a.displayName = a.name + ' [from ' + e.id + ']';
    e.exports = a;
  },
  null,
);
