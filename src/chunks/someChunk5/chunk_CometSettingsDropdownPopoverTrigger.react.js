__d(
  'CometSettingsDropdownPopoverTrigger.react',
  [
    'CometSetProfileSwitcherEducationContext',
    'CometSettingsDropdownLoadingState.react',
    'CometSettingsDropdownPopoverTrigger.entrypoint',
    'CometSwitcherGating',
    'cr:1875563',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext;
    function a(a) {
      var e = a.children,
        f = a.dropdownPosition;
      f = f === void 0 ? 'below' : f;
      var g = a.iconSize,
        j = a.onVisibilityChange;
      a = a.tracePolicy;
      var k = i(c('CometSetProfileSwitcherEducationContext')),
        l = k.resetSwitcherEducationState;
      return h.jsx(b('cr:1875563'), {
        align: 'end',
        entryPointParams: {},
        fallback: h.jsx(c('CometSettingsDropdownLoadingState.react'), {
          iconSize: g,
          shouldShowSimpleDropdownHeader: d(
            'CometSwitcherGating',
          ).shouldShowSimpleDropdownHeader(),
        }),
        onVisibilityChange: function (a) {
          a || l(), j == null ? void 0 : j(a);
        },
        otherProps: {},
        popoverEntryPoint: c('CometSettingsDropdownPopoverTrigger.entrypoint'),
        position: f,
        preloadTrigger: 'button',
        tracePolicy: a,
        children: e,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
