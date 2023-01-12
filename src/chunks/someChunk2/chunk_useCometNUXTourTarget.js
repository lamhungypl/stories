__d(
  'useCometNUXTourTarget',
  [
    'BaseContextualLayerAnchorRootContext',
    'CometNUXTourConsumerContext',
    'react',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = a.contextualLayerOptions,
        d = b === void 0 ? null : b,
        e = a.description,
        f = a.image;
      b = a.isTargetFixed;
      var g = b === void 0 ? !1 : b,
        k = a.targetKey,
        l = a.title;
      b = a.withArrow;
      var m = b === void 0 ? !0 : b,
        n = j(null),
        o = h(c('CometNUXTourConsumerContext')),
        p = h(c('BaseContextualLayerAnchorRootContext')),
        q = j({ hasAnsweredSurvey: !1 });
      i(
        function () {
          if (o == null) return;
          var a = o.registerTarget,
            b = o.unregisterTarget;
          a(k, {
            anchorRootRef: p,
            contextRef: n,
            contextualLayerOptions: (a = d) != null ? a : {},
            description: e,
            image: f,
            isTargetFixed: g,
            key: k,
            storageRef: q,
            title: l,
            withArrow: m,
          });
          return function () {
            b(k);
          };
        },
        [p, o, d, e, f, k, l],
      );
      o == null &&
        c('recoverableViolation')(
          'Unable to register nux tour targets',
          'comet_ui',
        );
      return n;
    }
    g['default'] = a;
  },
  98,
);
