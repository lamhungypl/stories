__d(
  'CometSettingsBadgedDropdownTrigger.react',
  [
    'CometSettingsBadgeWrapper.react',
    'CometSettingsJewelButton.react',
    'CometSettingsListDropdownLoadingState.react',
    'CometTooltip.react',
    'MWJewelPopoverDialogContext.react',
    'cr:1875562',
    'cr:1875563',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = { badgeOffset: { start: 'x8zc4e7', top: 'xtu2xtp', $$css: !0 } },
      k = Object.freeze({});
    function a(a) {
      var d,
        e = a.dropdownPosition,
        f = e === void 0 ? 'below' : e;
      e = a.fallback;
      var g = a.forceActive,
        l = g === void 0 ? !1 : g,
        m = a.tracePolicy;
      g = i(c('MWJewelPopoverDialogContext.react'));
      var n = g.setIsOpenForDialog,
        o = function (b, d, e, g, i, k, o, p) {
          return h.jsx(c('CometTooltip.react'), {
            position: f,
            tooltip: a.tooltipLabel,
            children: h.jsx('span', {
              ref: b,
              children: h.jsx(c('CometSettingsBadgeWrapper.react'), {
                badgeXStyle: j.badgeOffset,
                deferredBadgeCount: a.deferredBadgeCount,
                label: a.label,
                onBadgeCount: a.onBadgeCount,
                onHighIntentPrerenderer: o,
                onHoverIn: function (b) {
                  g && g(b),
                    a.onHoverInPrerenderer && a.onHoverInPrerenderer(b);
                },
                onHoverOut: i,
                onPress: function (b) {
                  !l && !(b.ctrlKey || b.metaKey) && d && d(b),
                    a.onPress && a.onPress(b);
                },
                onPressIn: function (b) {
                  k && k(b),
                    a.onPressInPrerenderer && a.onPressInPrerenderer(b);
                },
                tracePolicy: m,
                children: h.jsx(c('CometSettingsJewelButton.react'), {
                  disabled: a.disabled,
                  icon: a.icon,
                  isSelected: p || l,
                  label: a.label,
                  linkProps: a.linkProps,
                  loggingRef: a.loggingRef,
                  onHoverIn: function (b) {
                    g && g(b),
                      a.onHoverInPrerenderer && a.onHoverInPrerenderer(b);
                  },
                  onHoverOut: i,
                  onPress: function (b) {
                    !l && !(b.ctrlKey || b.metaKey) && d && d(b),
                      a.onPress && a.onPress(b),
                      n(!1);
                  },
                  onPressIn: function (b) {
                    k && k(b),
                      a.onPressInPrerenderer && a.onPressInPrerenderer(b);
                  },
                  testid: void 0,
                }),
              }),
            }),
          });
        };
      g = a.dropdownEntryPoint;
      g = g === void 0 ? null : g;
      var p = a.dropdownResource;
      p = p === void 0 ? null : p;
      e = {
        align: 'start',
        doNotCloseOnOutsideClick:
          (d = a == null ? void 0 : a.doNotCloseOnOutsideClick) != null
            ? d
            : !1,
        fallback:
          (d = e) != null
            ? d
            : h.jsx(c('CometSettingsListDropdownLoadingState.react'), {
                title: a.label,
              }),
        position: f,
        tracePolicy: m,
      };
      if (g != null) {
        return h.jsx(
          b('cr:1875563'),
          babelHelpers['extends']({}, e, {
            entryPointParams: k,
            otherProps: k,
            popoverEntryPoint: g,
            preloadTrigger: (d = a.preloadTrigger) != null ? d : 'button',
            children: function () {
              return o.apply(void 0, arguments);
            },
          }),
        );
      } else if (p != null) {
        return h.jsx(
          b('cr:1875562'),
          babelHelpers['extends']({}, e, {
            popoverProps: k,
            popoverResource: p,
            preloadTrigger: (g = a.preloadTrigger) != null ? g : 'button',
            children: function () {
              return o.apply(void 0, arguments);
            },
          }),
        );
      }
      return null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
