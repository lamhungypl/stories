__d(
  'CometHideLayerOnEscape.react',
  ['fbt', 'CometComponentWithKeyCommands.react', 'CometKeys', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useMemo;
    function a(a) {
      var b = a.children,
        d = a.debugName;
      d = d === void 0 ? 'ModalLayer' : d;
      var e = a.onHide;
      a = j(
        function () {
          return [
            {
              command: { key: c('CometKeys').ESCAPE },
              description: h._('__JHASH__coz4yRiHZKL__JHASH__'),
              handler: e,
              triggerFromInputs: !0,
              triggerOnRepeats: !1,
            },
          ];
        },
        [e],
      );
      return i.jsx(c('CometComponentWithKeyCommands.react'), {
        commandConfigs: a,
        debugName: d,
        isWrapperFocusable: !0,
        children: b,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
