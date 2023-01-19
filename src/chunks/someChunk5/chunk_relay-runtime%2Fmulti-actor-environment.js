__d(
  'relay-runtime/multi-actor-environment',
  [
    'relay-runtime/multi-actor-environment/ActorIdentifier',
    'relay-runtime/multi-actor-environment/MultiActorEnvironment',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b(
      'relay-runtime/multi-actor-environment/ActorIdentifier',
    ).getActorIdentifier;
    e.exports = {
      MultiActorEnvironment: b(
        'relay-runtime/multi-actor-environment/MultiActorEnvironment',
      ),
      getActorIdentifier: a,
    };
  },
  null,
);
