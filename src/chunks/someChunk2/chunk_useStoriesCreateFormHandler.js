__d(
  'useStoriesCreateFormHandler',
  [
    'Actor',
    'CometRelay',
    'QPLUserFlow',
    'QuickPerformanceLogger',
    'StoriesCreateConstants',
    'StoriesCreateFormExitUtils',
    'StoriesCreateMediaUploaderContext',
    'StoriesCreateViewStateContext',
    'StoriesCreateViewStateDispatcherContext',
    'cloneOverlayNode',
    'qpl',
    'react',
    'requireDeferred',
    'storiesCreateFormValidationUtils',
    'useCometConfirmationDialog',
    'useMinifiedProductAttribution',
    'useNotificationsTrackingString',
    'usePrevious',
    'useStoriesCreateFormExitConfirmation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useContext,
      j = b.useEffect,
      k = c('requireDeferred')('StoriesCreateMutation').__setRef(
        'useStoriesCreateFormHandler',
      );
    function a(a, b, e, f, g, l) {
      var m = d('CometRelay').useRelayEnvironment(),
        n = i(c('StoriesCreateViewStateContext')),
        o = i(c('StoriesCreateViewStateDispatcherContext')),
        p = d('Actor').useActor(),
        q = p[0];
      p = c('usePrevious')(a);
      var r = p === !1 && a === !0 && l,
        s = c('useNotificationsTrackingString')();
      p = i(c('StoriesCreateMediaUploaderContext'));
      var t = p.uploader,
        u = c('useMinifiedProductAttribution')(),
        v = h(
          function () {
            var a,
              d = n.stickerData,
              h = n.textOverlays,
              i = (a = n.overlayRef) == null ? void 0 : a.current;
            ((h != null && h.overlays.length !== 0) ||
              (d != null &&
                (d.stickers.length !== 0 ||
                  (d == null
                    ? void 0
                    : (a = d.musicSticker) == null
                    ? void 0
                    : a.song) != null))) &&
              i != null &&
              (i = c('cloneOverlayNode')({
                overlayIds:
                  (h == null
                    ? void 0
                    : h.overlays.map(function (a) {
                        return a.id;
                      })) || [],
                overlayNode: i,
              }));
            if (t == null) return;
            var j = function () {
              f(), e();
            };
            k.onReady(function (a) {
              a.createStories(
                n,
                q,
                m,
                t,
                i,
                g,
                function (a) {
                  return b(a, v);
                },
                j,
                s,
                u,
              );
            });
          },
          [q, m, u, b, e, f, g, s, t, n],
        ),
        w = c('useCometConfirmationDialog')();
      l = d('storiesCreateFormValidationUtils').useFormSubmitDisabled({
        isUploading: a,
        viewState: n,
      });
      var x = d('StoriesCreateFormExitUtils').exitDialogInformation();
      j(
        function () {
          r &&
            (g != null &&
              (c('QuickPerformanceLogger').markerEnd(g, 4),
              c('QuickPerformanceLogger').markerStart(g)),
            v());
        },
        [v, e, g, r],
      );
      c('useStoriesCreateFormExitConfirmation')(a, x.title, x.body);
      p = function () {
        d('storiesCreateFormValidationUtils').validateForm(n, o, function () {
          o({ type: 'set_is_uploading', value: !0 });
        }),
          c('QPLUserFlow').endSuccess(c('qpl')._(13250512, '1219'));
      };
      var y = d('StoriesCreateConstants').LEAVE_TEXT.DEFAULT;
      a = function () {
        w(
          {
            body: x.body,
            cancel: y.CANCEL,
            confirm: y.CONFIRM,
            title: x.title,
          },
          function () {
            o({ type: 'restart' }),
              c('QPLUserFlow').endFailure(
                c('qpl')._(13250512, '1219'),
                'User canceled',
              );
          },
        );
      };
      return { handleDiscard: a, handleSubmit: p, submitDisabled: l };
    }
    g['default'] = a;
  },
  98,
);
