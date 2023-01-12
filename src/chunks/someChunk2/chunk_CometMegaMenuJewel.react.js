__d(
  'CometMegaMenuJewel.react',
  [
    'CometHomeMegaMenuRoot.entrypoint',
    'CometMegaMenuJewelButton.react',
    'CometMegaMenuLoadingState.react',
    'cr:1875563',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useState;
    function a(a) {
      a = a.dropdownPosition;
      var d = a === void 0 ? 'below' : a;
      a = i();
      var e = a[0];
      a = a[1];
      return h.jsx(b('cr:1875563'), {
        align: 'start',
        entryPointParams: {},
        fallback: h.jsx(c('CometMegaMenuLoadingState.react'), {}),
        onVisibilityChange: a,
        otherProps: {},
        popoverEntryPoint: c('CometHomeMegaMenuRoot.entrypoint'),
        position: d,
        preloadTrigger: 'button_aggressive',
        tracePolicy: 'comet.jewel.megamenu',
        children: function (a, b, f, g, i, j) {
          return h.jsx(c('CometMegaMenuJewelButton.react'), {
            dropdownPosition: d,
            isActive: e,
            onHoverIn: g,
            onHoverOut: i,
            onPress: b,
            onPressIn: j,
            ref: a,
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
