__d(
  'react-relay/relay-hooks/loadEntryPoint',
  ['react-relay/relay-hooks/loadQuery'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('react-relay/relay-hooks/loadQuery').loadQuery;
    function h(a, b, c) {
      var d = null;
      b.root.getModuleIfRequired() == null && (d = b.root.load());
      c = b.getPreloadProps(c);
      var e = c.queries,
        f = c.entryPoints;
      c = c.extraProps;
      var i = {},
        j = {};
      if (e != null) {
        var k = Object.keys(e);
        k.forEach(function (b) {
          var c = e[b],
            d = c.environmentProviderOptions,
            f = c.options,
            h = c.parameters;
          c = c.variables;
          var j = a.getEnvironment(d);
          i[b] = g(
            j,
            h,
            c,
            {
              fetchPolicy: f == null ? void 0 : f.fetchPolicy,
              networkCacheConfig: f == null ? void 0 : f.networkCacheConfig,
              __nameForWarning: 'loadEntryPoint',
            },
            d,
          );
        });
      }
      if (f != null) {
        k = Object.keys(f);
        k.forEach(function (b) {
          var c = f[b];
          if (c == null) return;
          var d = c.entryPoint;
          c = c.entryPointParams;
          j[b] = h(a, d, c);
        });
      }
      var l = !1;
      return {
        dispose: function () {
          if (l) return;
          i != null &&
            Object.values(i).forEach(function (a) {
              a = a.dispose;
              a();
            });
          j != null &&
            Object.values(j).forEach(function (a) {
              a = a.dispose;
              a();
            });
          l = !0;
        },
        entryPoints: j,
        extraProps: (k = c) != null ? k : null,
        getComponent: function () {
          var a = b.root.getModuleIfRequired();
          if (a == null) {
            var c;
            d = (c = d) != null ? c : b.root.load();
            throw d;
          }
          c = a['default'] != null ? a['default'] : a;
          return c;
        },
        get isDisposed() {
          return l;
        },
        queries: i,
        rootModuleID: b.root.getModuleId(),
      };
    }
    e.exports = h;
  },
  null,
);
