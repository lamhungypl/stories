__d(
  'relay-runtime/multi-actor-environment/ActorIdentifier',
  ['invariant'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE';
    function a(a) {
      a === h || g(0, 48286, a);
    }
    e.exports = {
      assertInternalActorIdentifier: a,
      getActorIdentifier: function (a) {
        return a;
      },
      getDefaultActorIdentifier: function () {
        throw new Error('Not Implemented');
      },
      INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE: h,
    };
  },
  null,
);
