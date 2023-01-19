__d(
  'USID',
  ['USIDCore', 'USIDMetadata', 'USIDUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = null,
      i = function (a) {
        if (h != null) return h;
        var b = d('USIDUtils').getExistingTabId(),
          e = c('USIDMetadata').page_id,
          f = c('USIDMetadata').transition_id,
          g = c('USIDMetadata').version,
          i = d('USIDUtils').getFlags();
        h = new (c('USIDCore'))(b, e, f, g, i, a);
        return h;
      };
    a = function () {
      return i({ activityTrigger: 'request' });
    };
    b = { init: i, get: a };
    g['default'] = b;
  },
  98,
);
