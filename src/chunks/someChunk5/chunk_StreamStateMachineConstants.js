__d(
  'StreamStateMachineConstants',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      GQLS_STATE_CREATED: 'created',
      GQLS_STATE_ACTIVE: 'active',
      GQLS_STATE_PAUSED: 'paused',
      GQLS_STATE_TERMINATED: 'terminated',
    };
    b = {
      GQLS_STATE_TRANSIT_ON_CREATE: 'onCreated',
      GQLS_STATE_TRANSIT_ON_ACTIVE: 'onActive',
      GQLS_STATE_TRANSIT_ON_PAUSE: 'onPause',
      GQLS_STATE_TRANSIT_ON_RESUME: 'onResume',
      GQLS_STATE_TRANSIT_ON_TERMINATE: 'onTerminate',
    };
    f.states = a;
    f.events = b;
  },
  66,
);
