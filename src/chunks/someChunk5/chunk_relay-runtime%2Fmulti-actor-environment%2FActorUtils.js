__d(
  'relay-runtime/multi-actor-environment/ActorUtils',
  ['relay-runtime/multi-actor-environment/ActorIdentifier'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = 'actor_key',
      h = b(
        'relay-runtime/multi-actor-environment/ActorIdentifier',
      ).getActorIdentifier;
    function a(a) {
      if (a != null && typeof a === 'object' && typeof a[g] === 'string')
        return h(a[g]);
    }
    e.exports = {
      ACTOR_IDENTIFIER_FIELD_NAME: g,
      getActorIdentifierFromPayload: a,
    };
  },
  null,
);
