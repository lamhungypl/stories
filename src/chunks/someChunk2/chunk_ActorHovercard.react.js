__d(
  'ActorHovercard.react',
  [
    'CometDangerouslySuppressInteractiveElementsContext',
    'CometEntryPointPopoverTrigger.react',
    'CometHovercardGroupContext',
    'CometHovercardQueryRenderer.entrypoint',
    'CometHovercardSettingsContext',
    'CometHovercardTrigger.react',
    'CometPopoverLoadingState.react',
    'CometPressable.react',
    'react',
    'useActorHovercardContext',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useRef,
      k = {
        displayBlock: { display: 'x1lliihq', $$css: !0 },
        displayInline: { display: 'xt0psk2', $$css: !0 },
        displayInlineBlock: { display: 'x1rg5ohu', $$css: !0 },
        fitContent: { height: 'xg7h5cd', $$css: !0 },
      };
    function a(a) {
      var b = a.actorID,
        d = a.align;
      d = d === void 0 ? 'middle' : d;
      var e = a.children,
        f = a.display,
        g = a.position;
      g = g === void 0 ? 'above' : g;
      var l = a.showHovercardOnClick;
      l = l === void 0 ? !1 : l;
      var m = babelHelpers.objectWithoutPropertiesLoose(a, [
        'actorID',
        'align',
        'children',
        'display',
        'position',
        'showHovercardOnClick',
      ]);
      a = c('useActorHovercardContext')();
      var n = i(c('CometHovercardGroupContext'));
      n = n.groupID;
      var o = i(c('CometHovercardSettingsContext'));
      o = o.hovercardInteractionPreference;
      l = l || o === 3;
      o = 'WWW_COMET_HOVERCARD';
      a === 'CIVIC_POST' && (o = 'WWW_COMET_CIVIC_PROFILE_HOVERCARD');
      var p = j(null);
      return l
        ? h.jsx(c('CometEntryPointPopoverTrigger.react'), {
            align: d,
            entryPointParams: {
              actionBarRenderLocation: o,
              context: a,
              entityID: b,
              groupID: n,
            },
            fallback: h.jsx(c('CometPopoverLoadingState.react'), {}),
            otherProps: {},
            popoverEntryPoint: c('CometHovercardQueryRenderer.entrypoint'),
            position: g,
            children: function (a, b, d, g, i, j, l, n) {
              return h.jsx(
                c('CometDangerouslySuppressInteractiveElementsContext')
                  .Provider,
                {
                  value: !1,
                  children: h.jsx(
                    c('CometPressable.react'),
                    babelHelpers['extends']({}, m, {
                      'aria-expanded': n ? n : void 0,
                      onPress: b,
                      ref: a,
                      role: 'button',
                      xstyle: [
                        k.fitContent,
                        f === 'inline'
                          ? k.displayInline
                          : f === 'inline-block'
                          ? k.displayInlineBlock
                          : k.displayBlock,
                      ],
                      children: h.jsx(
                        c('CometDangerouslySuppressInteractiveElementsContext')
                          .Provider,
                        { value: !0, children: e(p) },
                      ),
                    }),
                  ),
                },
              );
            },
          })
        : h.jsx(c('CometHovercardTrigger.react'), {
            align: d,
            display: f,
            popoverEntryPoint: c('CometHovercardQueryRenderer.entrypoint'),
            popoverProps: {
              actionBarRenderLocation: o,
              context: a,
              entityID: b,
              groupID: n,
            },
            position: g,
            children: e,
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
