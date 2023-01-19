__d(
  'useStoriesCreateFormUpload',
  [
    'fbt',
    'ix',
    'CometRouteRenderType',
    'StoriesCreateMediaTypeEnum',
    'TetraIcon.react',
    'XCometStoriesControllerRouteBuilder',
    'cometPushToast',
    'fbicon',
    'qpl',
    'react',
    'requireDeferred',
    'useCometRouterDispatcher',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = c('requireDeferred')('SilenceableErrorMessageUtils').__setRef(
        'useStoriesCreateFormUpload',
      );
    function a(a, b) {
      var e = c('useCometRouterDispatcher')(),
        f = d('CometRouteRenderType').useIsPushView(),
        g = function () {
          if (e == null) return;
          if (f && e.popPushView) {
            e.popPushView();
            return;
          }
          var b = { composerSessionID: a },
            d = c('XCometStoriesControllerRouteBuilder').buildURL({});
          e.go(d, { passthroughProps: b, target: 'self' });
        },
        l = function (a, b) {
          k.onReady(function (e) {
            var f = e.getMetadataFromError;
            e = e.shouldHideErrorMessage;
            if (e(f(a))) return;
            d('cometPushToast').cometPushToast(
              {
                action: {
                  label: h._('__JHASH__Ld5TVFw7v5x__JHASH__'),
                  onPress: b,
                },
                icon: j.jsx(c('TetraIcon.react'), {
                  color: 'negative',
                  icon: d('fbicon')._(i('681772'), 24),
                }),
                message: h._('__JHASH__16HF7KbBh9j__JHASH__'),
              },
              1e4,
            );
          });
        };
      b =
        b === c('StoriesCreateMediaTypeEnum').PHOTO
          ? c('qpl')._(13238398, '6208')
          : b === c('StoriesCreateMediaTypeEnum').SATP
          ? c('qpl')._(13238399, '1040')
          : void 0;
      var m = function () {};
      return { onError: l, onNavigate: g, onSuccess: m, qplEvent: b };
    }
    g['default'] = a;
  },
  98,
);
