__d(
  'CometProfilePhotoForActor.react',
  [
    'ActorHovercard.react',
    'CometProfilePhoto.react',
    'CometProfilePhotoForActor_actor.graphql',
    'CometRelay',
    'PagesCometLinkContext',
    'ProfileCometContextualProfileGating',
    'ProfileCometLinkContext',
    'RecoverableViolation.react',
    'WebPixelRatio',
    'XCometContextualProfileControllerRouteBuilder',
    'XCometStoriesControllerRouteBuilder',
    'XCometVideoHomePlaylistControllerRouteBuilder',
    'react',
    'useActorStoryStatus',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react');
    e = d('react');
    var j = e.useContext,
      k = e.useMemo;
    function a(a) {
      var e = a.actor,
        f = a.addOn,
        g = a.enableStoryStatus,
        l = g === void 0 ? !0 : g;
      a.entrypoint;
      var m = a.linkProps;
      g = a.noHovercard;
      g = g === void 0 ? !1 : g;
      var n = a.noLink,
        o = n === void 0 ? !1 : n,
        p = a.onPress;
      n = a.showHovercardOnClick;
      n = n === void 0 ? !1 : n;
      var q = a.size,
        r = babelHelpers.objectWithoutPropertiesLoose(a, [
          'actor',
          'addOn',
          'enableStoryStatus',
          'entrypoint',
          'linkProps',
          'noHovercard',
          'noLink',
          'onPress',
          'showHovercardOnClick',
          'size',
        ]);
      a = d('CometRelay').useFragment(
        h !== void 0 ? h : (h = b('CometProfilePhotoForActor_actor.graphql')),
        e,
      );
      e = (e = a.profile_picture) != null ? e : {};
      var s = a.profile_video != null ? a.profile_video : void 0,
        t = e.height,
        u = e.scale,
        v = e.uri,
        w = e.width,
        x = a.availability;
      e = a.id;
      var y = a.name,
        z = j(c('ProfileCometLinkContext'));
      z = z.groupID;
      var A = j(c('PagesCometLinkContext'));
      A = A.shouldHostInWatch;
      var B = a.url,
        C,
        D = c('useActorStoryStatus')(a),
        E = !1;
      l && D.status !== 'none'
        ? ((B = c('XCometStoriesControllerRouteBuilder').buildURL({
            bucket_id: D.firstBucketId,
            card_id: D.firstCardId,
            view_single: !0,
          })),
          (E = D.shouldShowCloseFriendsBadge),
          (C = { target: m == null ? void 0 : m.target, url: B }))
        : z != null &&
          d(
            'ProfileCometContextualProfileGating',
          ).canViewCometContextualProfile() &&
          e != null &&
          a.__typename !== 'Group'
        ? ((B = c('XCometContextualProfileControllerRouteBuilder').buildURL({
            group_idorvanity: z,
            member_id: e,
          })),
          (C = { target: m == null ? void 0 : m.target, url: B }))
        : A === !0 &&
          ((B = c('XCometVideoHomePlaylistControllerRouteBuilder').buildURL({
            idorvanity: e,
            tab: 'home',
          })),
          (C = { target: m == null ? void 0 : m.target, url: B }));
      var F = k(
        function () {
          var a;
          return {
            addOn:
              (a = f) != null
                ? a
                : x === 'ACTIVE'
                ? { type: 'availabilityBadge' }
                : void 0,
            'aria-label': (a = y) != null ? a : '',
            linkProps:
              m != null && m.url != null
                ? m
                : o
                ? void 0
                : (a = C) != null
                ? a
                : { target: m == null ? void 0 : m.target, url: B },
            onPress: p,
            profileVideo: s,
            shouldShowCloseFriendsBadge: E,
            size: q,
            source: {
              height: (a = t) != null ? a : q,
              scale: (a = u) != null ? a : d('WebPixelRatio').get(),
              uri: (a = v) != null ? a : '',
              width: (a = w) != null ? a : q,
            },
            storyStatus: l ? D.status : 'none',
          };
        },
        [f, x, y, m, o, C, B, p, s, q, t, u, E, v, w, D.status, l],
      );
      if (v == null || e == null || y == null || F.source.uri === '') {
        return i.jsx(c('RecoverableViolation.react'), {
          errorMessage:
            'Missing fields for CometProfilePhotoForActor, id: ' +
            ((a = e) != null ? a : 'null'),
          projectName: 'comet_ui',
        });
      }
      return g
        ? i.jsx(c('CometProfilePhoto.react'), babelHelpers['extends']({}, r, F))
        : i.jsx(c('ActorHovercard.react'), {
            actorID: e,
            'aria-hidden': r['aria-hidden'],
            showHovercardOnClick: n,
            children: function (a) {
              return i.jsx(
                c('CometProfilePhoto.react'),
                babelHelpers['extends']({ ref: a }, r, F),
              );
            },
          });
    }
    g['default'] = a;
  },
  98,
);
