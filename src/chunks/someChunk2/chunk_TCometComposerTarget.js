__d(
  'TCometComposerTarget',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('$InternalEnum')({
      Event: 'event',
      Feed: 'feed',
      Group: 'group',
      Page: 'page',
      Profile: 'profile',
      Unknown: 'unknown',
    });
    function a(a) {
      switch (a) {
        case 'event':
          return g.Event;
        case 'feed':
          return g.Feed;
        case 'group':
          return g.Group;
        case 'page':
          return g.Page;
        case 'profile':
          return g.Profile;
      }
      return g.Unknown;
    }
    f.ComposerTargetType = g;
    f.getComposerTargetType = a;
  },
  66,
);
