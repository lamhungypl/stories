__d(
  'CometTransientDialogProvider.react',
  [
    'fbt',
    'BaseModal.react',
    'CometDialogContext',
    'CometErrorBoundary.react',
    'CometHeroLogging',
    'CometInteractionTracingQPLConfigContext',
    'FBLogger',
    'cometPushToast',
    'cr:945',
    'react',
    'useCometInteractionTracing',
    'useIsCalledDuringRender',
    'useIsMountedRef',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    e = d('react');
    var j = e.useCallback,
      k = e.useEffect,
      l = e.useRef,
      m = e.useState;
    function n(a) {
      var b = a.dialogConfig,
        e = a.dialogConfigsRef,
        f = a.displayBaseModal_DO_NOT_USE,
        g = a.removeDialogConfig,
        n = l(null);
      k(function () {
        return function () {
          n.current != null && window.cancelAnimationFrame(n.current);
        };
      }, []);
      a = b.dialog;
      var o = b.dialogProps,
        p = m(!1),
        q = p[0];
      p = p[1];
      var r = j(
          function () {
            for (var a = arguments.length, d = new Array(a), f = 0; f < a; f++)
              d[f] = arguments[f];
            n.current != null && window.cancelAnimationFrame(n.current);
            var h = e.current.indexOf(b);
            h < 0 &&
              c('FBLogger')('comet_ui')
                .blameToPreviousFrame()
                .mustfix(
                  'Attempting to close a dialog that does not exist anymore.',
                );
            n.current = window.requestAnimationFrame(function () {
              g(b, d), (n.current = null);
            });
          },
          [b, e, g],
        ),
        s = j(
          function () {
            r(),
              d('cometPushToast').cometPushErrorToast({
                message: h._('__JHASH__0TvIFRfN8w3__JHASH__'),
                truncateText: !1,
              });
          },
          [r],
        );
      a = i.jsx(a, babelHelpers['extends']({}, o, { onClose: r, onHide: p }));
      return i.jsx(c('CometErrorBoundary.react'), {
        onError: s,
        children:
          f === !0
            ? i.jsx(c('BaseModal.react'), {
                hidden: q,
                interactionDesc: b.interactionDesc,
                interactionUUID: b.interactionUUID,
                stackingBehavior: 'above-nav',
                children: a,
              })
            : a,
      });
    }
    n.displayName = n.name + ' [from ' + f.id + ']';
    function a(a) {
      var e = a.displayBaseModal_DO_NOT_USE,
        f = e === void 0 ? !0 : e;
      e = babelHelpers.objectWithoutPropertiesLoose(a, [
        'displayBaseModal_DO_NOT_USE',
      ]);
      a = m([]);
      var g = a[0],
        h = a[1];
      a = d('CometInteractionTracingQPLConfigContext').useDialogTraceQPLEvent();
      var o = c('useCometInteractionTracing')(a, 'fluid', 'INTERACTION');
      a = c('useIsCalledDuringRender')();
      a = j(
        function (a, d, e, f) {
          var g = e.loadType,
            i = e.preloadTrigger,
            j = e.tracePolicy;
          o(
            function (e) {
              var k = c('CometHeroLogging').genHeroInteractionUUIDAndMarkStart(
                e.getTraceId(),
              );
              e.addMetadata('interaction_type', 'dialog');
              e.addMetadata('load_type', g);
              i != null && e.addMetadata('preload_trigger', i);
              var l = 'Dialog';
              h(function (b) {
                return b.concat({
                  dialog: a,
                  dialogProps: d,
                  interactionDesc: l,
                  interactionUUID: k,
                  onClose: f,
                  tracePolicy: j,
                });
              });
              b('cr:945') && b('cr:945').logOpen(j, k);
            },
            void 0,
            void 0,
            j,
          );
        },
        [a, o],
      );
      var p = l(g);
      k(
        function () {
          p.current = g;
        },
        [g],
      );
      var q = c('useIsMountedRef')(),
        r = j(
          function (a, c) {
            if (!q.current) return;
            h(function (b) {
              var c = b.indexOf(a);
              return c < 0 ? b : b.slice(0, c);
            });
            a.onClose && a.onClose.apply(a, c);
            b('cr:945') &&
              b('cr:945').logClose(a.tracePolicy, a.interactionUUID);
          },
          [q],
        );
      return i.jsxs(c('CometDialogContext').Provider, {
        value: a,
        children: [
          e.children,
          g.map(function (a, b) {
            return i.jsx(
              n,
              {
                dialogConfig: a,
                dialogConfigsRef: p,
                displayBaseModal_DO_NOT_USE: f,
                removeDialogConfig: r,
              },
              b,
            );
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
