__d(
  'CometHomeCreateJewel.react',
  [
    'fbt',
    'CometSettingsListDropdownLoadingState.react',
    'CometTooltip.react',
    'PlusFilled20IconSvg.react',
    'TetraCircleButton.react',
    'cr:1875562',
    'react',
    'requireDeferred',
    'useCreateMenuComposerDialog',
    'useMergeRefs',
    'useTopNavigationLogging',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    e = d('react');
    var j = e.useCallback,
      k = e.useState,
      l = c('requireDeferred')('CometHomeCreateMenu.react').__setRef(
        'CometHomeCreateJewel.react',
      );
    e = 'CometHomeCreateJewel';
    var m = i.forwardRef(function (a, b) {
      var e = d('useTopNavigationLogging').useCreateButtonLoggingCallbacks(),
        f = e[0];
      e = e[1];
      var g = a.isActive,
        k = a.onPress;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['isActive', 'onPress']);
      var l = j(
        function (a) {
          k && k(a), f();
        },
        [f, k],
      );
      b = c('useMergeRefs')(b, e);
      return i.jsx(c('CometTooltip.react'), {
        tooltip: h._('__JHASH__1vjUPQsaFe6__JHASH__'),
        children: i.jsx(
          c('TetraCircleButton.react'),
          babelHelpers['extends']({}, a, {
            color: g === !0 ? 'highlight' : 'primary',
            icon: c('PlusFilled20IconSvg.react'),
            label: h._('__JHASH__1vjUPQsaFe6__JHASH__'),
            onPress: l,
            ref: b,
            size: 40,
            testid: void 0,
            type: g === !0 ? 'deemphasized-overlay' : 'normal',
          }),
        ),
      });
    });
    function a() {
      var a = k(!1),
        d = a[0];
      a = a[1];
      var e = c('useCreateMenuComposerDialog')();
      e = e[0];
      return i.jsx(b('cr:1875562'), {
        align: 'start',
        fallback: i.jsx(c('CometSettingsListDropdownLoadingState.react'), {
          glimmerSize: 36,
          numberOfItems: 6,
          title: h._('__JHASH__jQFeKC58mWW__JHASH__'),
        }),
        onVisibilityChange: a,
        popoverProps: { showComposerDialog: e },
        popoverResource: l,
        position: 'below',
        children: function (a, b, c, e, f, g) {
          return i.jsx(m, {
            isActive: d,
            onHoverIn: e,
            onHoverOut: f,
            onPress: b,
            onPressIn: g,
            ref: a,
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = i.memo(a);
    g['default'] = e;
  },
  98,
);
