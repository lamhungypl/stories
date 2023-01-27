__d(
  'ScheduledServerJS',
  ['JSScheduler', 'ScheduledApplyEach', 'ServerJS'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, e) {
      b != null && new (c('ServerJS'))().handle(b),
        d('JSScheduler').runWithPriority(
          d('JSScheduler').priorities.unstable_Normal,
          function () {
            e != null && new (c('ServerJS'))().handle(e),
              new (c('ServerJS'))().handleWithCustomApplyEach(
                c('ScheduledApplyEach'),
                a,
              );
          },
        );
    }
    g.handle = a;
  },
  98,
);
