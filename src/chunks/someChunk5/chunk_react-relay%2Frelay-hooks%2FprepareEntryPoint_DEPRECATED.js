__d(
  'react-relay/relay-hooks/prepareEntryPoint_DEPRECATED',
  ['react-relay/relay-hooks/preloadQuery_DEPRECATED'],
  function (a, b, c, d, e, f) {
    'use strict';
    function g(a, c, d) {
      c.root.getModuleIfRequired() == null && c.root.load();
      c = c.getPreloadProps(d);
      var e = c.queries,
        f = c.entryPoints,
        h = {},
        i = {};
      if (e != null) {
        d = Object.keys(e);
        d.forEach(function (c) {
          var d = e[c],
            f = d.environmentProviderOptions,
            g = d.options,
            i = d.parameters;
          d = d.variables;
          var j = a.getEnvironment(f);
          h[c] = b('react-relay/relay-hooks/preloadQuery_DEPRECATED')(
            j,
            i,
            d,
            g,
            f,
          );
        });
      }
      if (f != null) {
        c = Object.keys(f);
        c.forEach(function (b) {
          var c = f[b];
          if (c == null) return;
          var d = c.entryPoint;
          c = c.entryPointParams;
          i[b] = g(a, d, c);
        });
      }
    }
    e.exports = g;
  },
  null,
);
