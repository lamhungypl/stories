__d(
  'MWChatVisibileRoutes',
  ['gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = c('gkx')('6749') ? ['comet.group.lightweightgroups'] : [];
    b = new Set(
      [
        'comet.stories.viewer.archive',
        'comet.stories.viewer',
        'comet.videos.tahoe',
        'comet.marketplace.item',
        'comet.mediaviewer.video',
        'comet.mediaviewer.photo',
      ].concat(a),
    );
    g.ROUTES = b;
  },
  98,
);
