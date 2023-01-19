__d(
  'CometRelayMultiActorEnvironment',
  [
    'RelayAPIConfig',
    'cometCreateMulitActorEnvironmentConfig',
    'relay-runtime/multi-actor-environment',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new Map(),
      i = new (d(
        'relay-runtime/multi-actor-environment',
      ).MultiActorEnvironment)(
        c('cometCreateMulitActorEnvironmentConfig')(
          c('RelayAPIConfig').actorID,
        ),
      );
    function a(a) {
      var b = function (b, c, d) {
        a(String(b), c, d);
      };
      for (
        var c = h.values(),
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= c.length) break;
          f = c[e++];
        } else {
          e = c.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        f.commitMultiActorUpdate(b);
      }
      i.commitMultiActorUpdate(b);
    }
    function b(a, b) {
      var e;
      b != null
        ? ((e = h.get(b)),
          e == null &&
            ((e = new (d(
              'relay-runtime/multi-actor-environment',
            ).MultiActorEnvironment)(
              c('cometCreateMulitActorEnvironmentConfig')(
                c('RelayAPIConfig').actorID,
                b,
              ),
            )),
            h.set(b, e)))
        : (e = i);
      return e.forActor(a);
    }
    g.commitMultiActorUpdate = a;
    g.forActor = b;
  },
  98,
);
