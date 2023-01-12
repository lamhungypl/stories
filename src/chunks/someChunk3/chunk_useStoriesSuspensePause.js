__d(
  'useStoriesSuspensePause',
  [
    'StoriesLoggerContext',
    'StoriesPauseReasons',
    'Visibility',
    'cr:809608',
    'react',
    'storiesViewerSuspenseEmitter',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    e = d('react');
    var h = e.useCallback,
      i = e.useContext,
      j = e.useEffect,
      k = e.useRef,
      l = e.useState;
    function a() {
      var a = l(!1),
        e = a[0],
        f = a[1];
      a = i(c('StoriesLoggerContext'));
      var g = a.logger,
        m = k({}),
        n = h(
          function (a, b) {
            if (a) (m.current[b] = !0), f(a), g.pauseLog(!0, b);
            else {
              if (
                b === d('StoriesPauseReasons').CARD_CHANGE &&
                (m.current[d('StoriesPauseReasons').VIEWER_SHEET_OVERLAY] ===
                  !0 ||
                  m.current[d('StoriesPauseReasons').COMMENTS_SHEET_OVERLAY] ===
                    !0)
              ) {
                if (
                  m.current[d('StoriesPauseReasons').VIEWER_SHEET_OVERLAY] ===
                  !0
                ) {
                  m.current =
                    ((a = {}),
                    (a[d('StoriesPauseReasons').VIEWER_SHEET_OVERLAY] = !0),
                    a);
                } else if (
                  m.current[d('StoriesPauseReasons').COMMENTS_SHEET_OVERLAY] ===
                  !0
                ) {
                  m.current =
                    ((a = {}),
                    (a[d('StoriesPauseReasons').COMMENTS_SHEET_OVERLAY] = !0),
                    a);
                }
              } else
                b === d('StoriesPauseReasons').CLICK_PAUSE_ICON ||
                b === d('StoriesPauseReasons').KEYBOARD ||
                b === d('StoriesPauseReasons').BUCKET_TRANSITION ||
                b === d('StoriesPauseReasons').CARD_CHANGE ||
                b === d('StoriesPauseReasons').VIEWER_SHEET_OVERLAY ||
                b === d('StoriesPauseReasons').BUCKET_REFRESH ||
                b === d('StoriesPauseReasons').COMMENTS_SHEET_OVERLAY
                  ? (m.current = {})
                  : delete m.current[b];
              Object.keys(m.current).length === 0 && (f(!1), g.pauseLog(!1, b));
            }
          },
          [g],
        );
      j(
        function () {
          return c('storiesViewerSuspenseEmitter').listenToPauseRequest(
            function () {
              return n.apply(void 0, arguments);
            },
          );
        },
        [n],
      );
      j(
        function () {
          if (b('cr:809608') == null) return;
          return b('cr:809608')({
            onJewelHidden: function () {
              n(!1, d('StoriesPauseReasons').JEWEL);
            },
            onJewelShown: function () {
              n(!0, d('StoriesPauseReasons').JEWEL);
            },
          });
        },
        [n],
      );
      j(
        function () {
          var a = [
            c('Visibility').addListener(c('Visibility').HIDDEN, function () {
              return n(!0, d('StoriesPauseReasons').VISIBILITY_CHANGE);
            }),
            c('Visibility').addListener(c('Visibility').VISIBLE, function () {
              return n(!1, d('StoriesPauseReasons').VISIBILITY_CHANGE);
            }),
          ];
          return function () {
            a.forEach(function (a) {
              return a.remove();
            });
          };
        },
        [n],
      );
      return [e, n];
    }
    g['default'] = a;
  },
  98,
);
