__d(
  'BanzaiUtils',
  [
    'BanzaiConsts',
    'CurrentUser',
    'FBLogger',
    'WebSession',
    'performanceAbsoluteNow',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h,
      i = {
        canSend: function (a) {
          return (
            a[2] >=
            (g || (g = b('performanceAbsoluteNow')))() -
              (h || (h = b('BanzaiConsts'))).EXPIRY
          );
        },
        filterPost: function (a, c, d, e) {
          if (e.overlimit) return !0;
          if (
            !e.sendMinimumOnePost &&
            a[4] + e.currentSize >
              (h || (h = b('BanzaiConsts'))).BATCH_SIZE_LIMIT
          )
            return !0;
          var f = a.__meta;
          if (
            (f.status != null &&
              f.status >= (h || (h = b('BanzaiConsts'))).POST_SENT) ||
            !i.canSend(a)
          )
            return !1;
          if (
            f.status != null &&
            f.status >= (h || (h = b('BanzaiConsts'))).POST_INFLIGHT
          )
            return !0;
          var g = f.compress != null ? f.compress : !0,
            j =
              (f.webSessionId != null ? f.webSessionId : 'null') +
              (f.userID != null ? f.userID : 'null') +
              (f.appID != null ? f.appID : 'null') +
              (g ? 'compress' : ''),
            k = e.wadMap.get(j);
          k ||
            ((k = {
              app_id: f.appID,
              needs_compression: g,
              posts: [],
              user: f.userID,
              webSessionId: f.webSessionId,
            }),
            e.wadMap.set(j, k),
            c.push(k));
          f.status = (h || (h = b('BanzaiConsts'))).POST_INFLIGHT;
          Array.isArray(k.posts)
            ? k.posts.push(a)
            : b('FBLogger')('banzai').mustfix(
                'Posts were a string instead of array',
              );
          d.push(a);
          e.currentSize += a[4];
          e.currentSize >= (h || (h = b('BanzaiConsts'))).BATCH_SIZE_LIMIT &&
            (e.overlimit = !0);
          return e.keepRetryable && Boolean(f.retry);
        },
        resetPostStatus: function (a) {
          a.__meta.status = (h || (h = b('BanzaiConsts'))).POST_READY;
        },
        retryPost: function (a, c, d) {
          var e = a;
          e.__meta.status = (h || (h = b('BanzaiConsts'))).POST_READY;
          e[3] = (e[3] || 0) + 1;
          e.__meta.retry !== !0 && c >= 400 && c < 600 && d.push(a);
        },
        wrapData: function (a, c, d, e, f) {
          d = [
            a,
            c,
            d,
            0,
            (a = f) != null ? a : c ? JSON.stringify(c).length : 0,
          ];
          d.__meta = {
            appID: b('CurrentUser').getAppID(),
            retry: e === !0,
            status: (h || (h = b('BanzaiConsts'))).POST_READY,
            userID: b('CurrentUser').getPossiblyNonFacebookUserID(),
            webSessionId: b('WebSession').getId(),
          };
          return d;
        },
      };
    e.exports = i;
  },
  null,
);
