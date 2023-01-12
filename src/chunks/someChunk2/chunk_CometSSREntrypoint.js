__d(
  'CometSSREntrypoint',
  ['objectValues', 'relay-runtime'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      var b,
        c = d('relay-runtime').__internal.withProvidedVariables(
          a.variables,
          a.parameters.params.providedVariables,
        );
      return {
        actor_id:
          (b =
            (b = a.environmentProviderOptions) == null ? void 0 : b.actorID) !=
          null
            ? b
            : null,
        id: a.parameters.params.id,
        name: a.parameters.params.name,
        ssr_boundary:
          (a =
            (b = a.environmentProviderOptions) == null
              ? void 0
              : b.ssrBoundary) != null
            ? a
            : null,
        variables: c,
      };
    }
    function i(a, b) {
      b = a.getPreloadProps(b);
      var d = b.entryPoints;
      b = b.queries;
      b = (b = b) != null ? b : {};
      var e = c('objectValues')(b).filter(function (a) {
          return a != null;
        }),
        f = [a.root.getModuleId()];
      if (d != null) {
        b = Object.keys(d);
        b.forEach(function (a) {
          a = d[a];
          if (a == null) return;
          var b = a.entryPoint;
          a = a.entryPointParams;
          b = i(b, a);
          e = e.concat(b.queries);
          f = f.concat(b.roots);
        });
      }
      return { queries: e, roots: f };
    }
    function a(a, b) {
      a = i(a, b);
      b = a.queries;
      return b.map(h);
    }
    function b(a) {
      a = a.map(function (a) {
        return i(a.entryPoint, a.entryPointParams);
      });
      return a.map(function (a) {
        var b = a.queries;
        a = a.roots;
        return { quries: b.map(h), roots: a };
      });
    }
    function e(a, b) {
      a = i(a, b);
      b = a.queries;
      a = a.roots;
      return { queries: b.map(h), roots: a };
    }
    function f() {
      throw new Error(
        'This function should not be called. It exists solely for the type-generation',
      );
    }
    function j(a, b) {
      var d;
      a = a.map(function (a) {
        return i(a.entryPoint, a.entryPointParams);
      });
      a = a.map(function (a) {
        var b = a.queries;
        a = a.roots;
        return { queries: b.map(h), roots: a };
      });
      d = c('objectValues')(
        (d = b == null ? void 0 : b.getDisplayQueries()) != null ? d : {},
      )
        .filter(function (a) {
          return a != null;
        })
        .map(h);
      b = c('objectValues')(
        (b = b == null ? void 0 : b.getDeferredQueries()) != null ? b : {},
      )
        .filter(function (a) {
          return a != null;
        })
        .map(h);
      return { appshellQueries: { deferred: b, display: d }, routeObjects: a };
    }
    g.processRootEntryPoint = a;
    g.processRootEntryPoints = b;
    g.processRootEntryPointData = e;
    g.preloadQuery = f;
    g.processServerEntryPoints = j;
  },
  98,
);
