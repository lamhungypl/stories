__d(
  'CometInitialPresenceData',
  [
    'AvailableListInitialData',
    'CometRelayEnvironment',
    'PresencePrivacyInitialData',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      if (c('PresencePrivacyInitialData').visibility !== 1) return;
      c('CometRelayEnvironment').commitUpdate(function (a) {
        var b = c('AvailableListInitialData').activeList;
        b != null &&
          b.forEach(function (b) {
            var d = a.get(b);
            d == null && (d = a.create(b, 'User'));
            d != null && d.setValue('ACTIVE', 'availability');
            b = a.getRoot();
            d = b.getOrCreateLinkedRecord('viewer', 'Viewer');
            d.setValue(
              c('PresencePrivacyInitialData').visibility === 1,
              'chat_visibility',
            );
          });
        var d = c('AvailableListInitialData').lastActiveTimes;
        d &&
          Object.keys(d).forEach(function (b) {
            var c = a.get(b);
            c == null && (c = a.create(b, 'User'));
            c != null &&
              d[b] != null &&
              d[b] !== 0 &&
              c.setValue(d[b], 'last_active_time');
          });
      });
    }
    g.initPresenceData = a;
  },
  98,
);
