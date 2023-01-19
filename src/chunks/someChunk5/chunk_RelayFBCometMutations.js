__d(
  'RelayFBCometMutations',
  ['recoverableViolation', 'relay-runtime', 'warning'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 1;
    function a(a) {
      return function (b, e) {
        var f = e.variables.input || {},
          g = f.actor_id,
          i = f.client_mutation_id;
        f = babelHelpers.objectWithoutPropertiesLoose(f, [
          'actor_id',
          'client_mutation_id',
        ]);
        c('warning')(
          i == null,
          'RelayFBCometMutations: Found `client_mutation_id` in mutation input`. In the Facebook context, `client_mutation_id` and `actor_id` are added automatically.',
        );
        var j;
        b.options != null &&
        b.options.actorID != null &&
        typeof b.options.actorID === 'string'
          ? (j = b.options.actorID)
          : c('recoverableViolation')(
              'RelayFBCometMutations: Expected a non-nullable string actorID to be set on the Relay environment. https://fburl.com/wiki/m19zmtlh',
              'relay',
            );
        if (g != null && g !== j) {
          var k = d('relay-runtime').getRequest(e.mutation);
          k = k.params.name;
          c('recoverableViolation')(
            'You passed an actor_id parameter "' +
              g +
              '" to mutation "' +
              k +
              '", but the parameter was overridden by the actor_id "' +
              ((k = j) != null ? k : '') +
              '" defined in the ActorContext that wraps your React tree. Update your code to avoid passing the actor_id parameter to your mutation.',
            'relay',
          );
          j = g;
        }
        g = babelHelpers['extends']({}, e.variables, {
          input: babelHelpers['extends']({}, f, {
            actor_id: j,
            client_mutation_id: (k = i) != null ? k : '' + h++,
          }),
        });
        return a(b, {
          configs: e.configs,
          mutation: e.mutation,
          onCompleted: e.onCompleted,
          onError: e.onError,
          optimisticResponse: e.optimisticResponse,
          optimisticUpdater: e.optimisticUpdater,
          updater: e.updater,
          uploadables: e.uploadables,
          variables: g,
        });
      };
    }
    g.addFBisms = a;
  },
  98,
);
