__d(
  'useNUXLoggers',
  ['CometEdfFalcoEvent', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useMemo,
      i = b.useRef;
    function a(a, b, d) {
      d === void 0 && (d = !0);
      var e = i({ hidden: !1, visible: !1 });
      return h(
        function () {
          return {
            onDismiss: function () {
              if (a == null || !d) return;
              b(a);
              c('CometEdfFalcoEvent').logImmediately(function () {
                return { nux: a, type: 'dismiss' };
              });
            },
            onHelpful: function (b) {
              if (a == null || !d) return;
              c('CometEdfFalcoEvent').log(function () {
                return { nux: a, step_key: b, type: 'helpful' };
              });
            },
            onHidden: function () {
              if (
                a == null ||
                !d ||
                e.current.hidden ||
                e.current.visible !== !0
              )
                return;
              e.current.hidden = !0;
              c('CometEdfFalcoEvent').log(function () {
                return { nux: a, type: 'hidden' };
              });
            },
            onNotHelpful: function (b) {
              if (a == null || !d) return;
              c('CometEdfFalcoEvent').log(function () {
                return { nux: a, step_key: b, type: 'not_helpful' };
              });
            },
            onRemoved: function () {
              if (a == null) return;
              b(a);
            },
            onVisible: function () {
              if (a == null || !d || e.current.visible) return;
              e.current.visible = !0;
              c('CometEdfFalcoEvent').logCritical(function () {
                return { nux: a, type: 'visible' };
              });
            },
          };
        },
        [d, a, b],
      );
    }
    g['default'] = a;
  },
  98,
);
