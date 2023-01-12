__d(
  'feedStoryLiveInsertUpdater',
  ['CometNewsFeedConnectionHandler', 'CometRelay', 'cometUniqueID'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var e = a.getRootField('story_create');
      e = e && e.getLinkedRecord('feed_story_edge');
      var f = a.get(d('CometRelay').VIEWER_ID);
      if (!f) return;
      f = d('CometNewsFeedConnectionHandler').getConnection(
        f,
        'CometNewsFeed_viewer_news_feed',
        { feed_style: 'DEFAULT', orderby: ['TOP_STORIES'] },
      );
      if (!f) return;
      var g = f.getLinkedRecords('edges');
      if (g)
        for (
          var g = g,
            h = Array.isArray(g),
            i = 0,
            g = h
              ? g
              : g[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var j;
          if (h) {
            if (i >= g.length) break;
            j = g[i++];
          } else {
            i = g.next();
            if (i.done) break;
            j = i.value;
          }
          j = j;
          if (j && j.getValue('deduplication_key') === b) return;
        }
      j = d('CometNewsFeedConnectionHandler').buildConnectionEdge(
        a,
        f,
        e,
        c('cometUniqueID')(),
      );
      j &&
        (j.setValue(b, 'deduplication_key'),
        j.setValue('ORGANIC', 'category'),
        d('CometNewsFeedConnectionHandler').insertEdgeBefore(f, j));
    }
    g['default'] = a;
  },
  98,
);
