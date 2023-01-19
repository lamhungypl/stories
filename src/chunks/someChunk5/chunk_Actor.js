__d(
  'Actor',
  [
    'CometRelay',
    'CometRelayEnvironmentFactory',
    'CometRelayMultiActorEnvironment',
    'CometRouterDispatcherContextFactory.react',
    'CometTransientDialogProvider.react',
    'react',
    'recoverableViolation',
    'unrecoverableViolation',
    'usePrevious',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react'),
      j = i.useContext,
      k = i.useMemo,
      l = i.useState;
    function a(a) {
      return function () {
        throw c('unrecoverableViolation')(
          'You are ' +
            a +
            ' the Actor from a React component that is not a descendent of ActorProvider.',
          'groups_comet',
        );
      };
    }
    var m = h.createContext({ get: a('reading'), set: a('setting') });
    function b(a) {
      var b =
          a.actorEnvironmentKey_DO_NOT_USE_UNLESS_YOU_KNOW_WHAT_YOU_ARE_DOING,
        e = a.children,
        f = a.initialActorID,
        g = a.readonly,
        i = g === void 0 ? !1 : g;
      g = a.scope;
      a = g === void 0 ? null : g;
      g = l(f);
      var j = g[0],
        n = g[1];
      g = c('usePrevious')(a);
      var o = c('usePrevious')(f);
      b = d('CometRelayEnvironmentFactory').getForActorID(j, b);
      o = o != null && o !== f;
      g = g != null && g !== a;
      (o || g) && j !== f && n(f);
      a = k(
        function () {
          return {
            get: function () {
              return j;
            },
            set: function (a) {
              if (i) {
                c('recoverableViolation')(
                  'You tried to update the Actor ID, but the <ActorProvider /> closest to your useActor() call has a read-only Actor ID. To fix this, wrap the React tree that you want to set an Actor ID for with your own <ActorProvider />.',
                  'groups_comet',
                );
                return;
              }
              n(a);
            },
          };
        },
        [j, i],
      );
      return h.jsx(m.Provider, {
        value: a,
        children: h.jsx(d('CometRelay').RelayEnvironmentProvider, {
          environment: b,
          getEnvironmentForActor: d('CometRelayMultiActorEnvironment').forActor,
          children: h.jsx(c('CometRouterDispatcherContextFactory.react'), {
            actorID: j,
            children: h.jsx(c('CometTransientDialogProvider.react'), {
              children: e,
            }),
          }),
        }),
      });
    }
    b.displayName = b.name + ' [from ' + f.id + ']';
    function e() {
      var a = j(m);
      return [a.get(), a.set];
    }
    g.ActorProvider = b;
    g.useActor = e;
  },
  98,
);
