__d(
  'CometMegaMenuJewelButton.react',
  [
    'fbt',
    'CometTooltip.react',
    'Grid9CircleFilled20IconSvg.react',
    'TetraCircleButton.react',
    'react',
    'useMergeRefs',
    'useTopNavigationLogging',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useCallback;
    function a(a, b) {
      var e = a.dropdownPosition;
      e = e === void 0 ? 'below' : e;
      var f = a.isActive,
        g = a.onPress;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'dropdownPosition',
        'isActive',
        'onPress',
      ]);
      var k = d('useTopNavigationLogging').useMegaMenuLoggingCallbacks(),
        l = k[0];
      k = k[1];
      var m = j(
        function (a) {
          g == null ? void 0 : g(a), l();
        },
        [l, g],
      );
      b = c('useMergeRefs')(b, k);
      return i.jsx(c('CometTooltip.react'), {
        position: e,
        tooltip: h._('__JHASH__Ex2YVhQdciI__JHASH__'),
        children: i.jsx('span', {
          className: '' + (e === 'end' ? ' xpkgp8e xmns6w2' : ''),
          ref: b,
          children: i.jsx(
            c('TetraCircleButton.react'),
            babelHelpers['extends']({}, a, {
              color: f === !0 ? 'highlight' : 'primary',
              icon: c('Grid9CircleFilled20IconSvg.react'),
              label: h._('__JHASH__vbCO0mhQOx7__JHASH__'),
              onPress: m,
              size: 40,
              testid: void 0,
              type: f === !0 ? 'deemphasized-overlay' : 'normal',
            }),
          ),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = i.forwardRef(a);
    g['default'] = b;
  },
  98,
);
