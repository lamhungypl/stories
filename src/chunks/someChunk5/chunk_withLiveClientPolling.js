__d(
  'withLiveClientPolling',
  ['invariant', 'LiveQueryWebClientPollingSwitchList'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = 'switch_all_use_cases_careful_to_use';
    function a(a, b) {
      var c = a.metadata;
      c = c.live;
      if (c != null && typeof c === 'object') {
        c = j(a);
        if (c != null) {
          a = b.liveConfigId;
          a == null || a === c || h(0, 48, a, c);
          a = d(
            'LiveQueryWebClientPollingSwitchList',
          ).liveQueryWebClientPollingSwitchList;
          if (a != null) {
            if (typeof a[c] === 'number')
              return babelHelpers['extends']({}, b, { poll: a[c] });
            if (typeof a[i] === 'number' && a[i] > 5e3)
              return babelHelpers['extends']({}, b, { poll: a[i] });
          }
        }
      }
      return b;
    }
    function j(a) {
      a = a.metadata;
      a = a.live;
      if (a != null && typeof a === 'object') {
        a.config_id == null || typeof a.config_id === 'string' || h(0, 50);
        return a.config_id;
      }
      return null;
    }
    g['default'] = a;
  },
  98,
);
