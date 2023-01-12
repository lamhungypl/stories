__d(
  'useActorStoryStatus',
  ['CometRelay', 'useActorStoryStatus_actor.graphql'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = { status: 'none' };
    function a(a) {
      var c, e, f;
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('useActorStoryStatus_actor.graphql')),
        a,
      );
      if (a == null) return i;
      var g;
      switch (a.__typename) {
        case 'Page':
          g = a.pages_story_bucket_v2;
          break;
        case 'User':
          a = (a = a.story_bucket) == null ? void 0 : a.nodes;
          g = a ? a[0] : null;
          break;
        default:
          return i;
      }
      if (g == null) return i;
      a = g.id;
      c = (c = g.first_story_to_show) == null ? void 0 : c.id;
      if (a == null || c == null) return i;
      e =
        (e = g.first_story_to_show) == null
          ? void 0
          : (e = e.story_card_seen_state) == null
          ? void 0
          : e.is_seen_by_viewer;
      f = (f = g.should_show_close_friend_badge) != null ? f : !1;
      if (e === !1)
        return {
          firstBucketId: a,
          firstCardId: c,
          shouldShowCloseFriendsBadge: f,
          status: 'unseen',
        };
      else if (e === !0)
        return {
          firstBucketId: a,
          firstCardId: c,
          shouldShowCloseFriendsBadge: f,
          status: 'seen',
        };
      else return i;
    }
    g['default'] = a;
  },
  98,
);
