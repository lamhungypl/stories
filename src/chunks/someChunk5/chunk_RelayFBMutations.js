__d(
  'RelayFBMutations',
  ['RelayAPIConfig', 'warning'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 1;
    function a(a) {
      return function (c, d) {
        var e = d.variables.input || {};
        b('warning')(
          !('client_mutation_id' in e),
          'RelayFBMutations: Found `client_mutation_id` in mutation input`. In the Facebook context, `client_mutation_id` and `actor_id` are added automatically.',
        );
        var f;
        c.options != null && c.options.actorID != null
          ? (f = c.options.actorID)
          : ((f = b('RelayAPIConfig').actorID),
            b('warning')(
              !1,
              'RelayFBMutations: Expected ActorID to be set on the Relay environment. Please use `createEnvironment` from `RelayModern` to create an environment with actorID.',
            ));
        f = babelHelpers['extends']({}, d.variables, {
          input: babelHelpers['extends'](
            { client_mutation_id: '' + g++, actor_id: f },
            e,
          ),
        });
        return a(c, {
          configs: d.configs,
          mutation: d.mutation,
          variables: f,
          onCompleted: d.onCompleted,
          onError: d.onError,
          optimisticUpdater: d.optimisticUpdater,
          optimisticResponse: d.optimisticResponse,
          updater: d.updater,
          uploadables: d.uploadables,
        });
      };
    }
    e.exports = { addFBisms: a };
  },
  null,
);
