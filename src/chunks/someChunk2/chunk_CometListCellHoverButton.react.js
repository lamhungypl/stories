__d(
  'CometListCellHoverButton.react',
  [
    'fbt',
    'ix',
    'CometCircleButton.react',
    'CometDeferredPopoverTrigger.react',
    'CometEntryPointPopoverTrigger.react',
    'CometLazyPopoverTrigger.react',
    'FocusWithinHandler.react',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useCallback;
    function a(a) {
      var b = a.hidden,
        e = a.label,
        f = a.onFocusChange,
        g = a.onHoverChange,
        l = a.onMenuStateChange,
        m = a.onPress,
        n = a.showNear,
        o = a.size,
        p = a.testid,
        q = k(
          function (a) {
            l != null && l(a);
          },
          [l],
        ),
        r = k(
          function (a, k, l, p, q) {
            return j.jsx('div', {
              className:
                'x67bb7w x10l6tqk xwa60dl x1cb1t30' +
                ((b
                  ? ' xqvhz8l x1qvwoe0 xd0x92v xjm9jq1 x6ikm8r x10wlt62 x1i1rx1s'
                  : '' + (n === !0 ? '' : '')) +
                  (n === !0 ? ' x1923su1' : ' x84fkku')),
              ref: a,
              children: j.jsx(c('FocusWithinHandler.react'), {
                onFocusChange: f,
                children: function (a) {
                  return j.jsx('div', {
                    className:
                      '' +
                      (a ? '' : ' x14yjl9h xudhj91 x18nykt9 xww2gxu x10xjkym'),
                    children: j.jsx(c('CometCircleButton.react'), {
                      color: 'secondary',
                      icon: d('fbicon')._(i('484387'), 20),
                      label:
                        e != null ? e : h._('__JHASH__oYmrdmuxyrt__JHASH__'),
                      onHoverIn: function (a) {
                        l && l(a), g && g(!0);
                      },
                      onHoverOut: function () {
                        p && p(), g && g(!1);
                      },
                      onPress: function () {
                        m && m(), k();
                      },
                      onPressIn: q,
                      size: (a = o) != null ? a : 36,
                      testid: void 0,
                      type: 'overlay',
                    }),
                  });
                },
              }),
            });
          },
          [b, f, e, g, m, p, n, o],
        );
      p = {
        align: 'middle',
        onVisibilityChange: q,
        popoverProps: a.popoverProps,
        position: 'below',
      };
      if (a.popoverTriggerType === 'lazy')
        return j.jsx(
          c('CometLazyPopoverTrigger.react'),
          babelHelpers['extends']({}, p, {
            popoverResource: a.popoverResource,
            children: function (a, b) {
              return r(a, b);
            },
          }),
        );
      else if (a.popoverTriggerType === 'entryPoint') {
        q = p.popoverProps;
        var s = babelHelpers.objectWithoutPropertiesLoose(p, ['popoverProps']);
        return j.jsx(
          c('CometEntryPointPopoverTrigger.react'),
          babelHelpers['extends']({}, s, {
            entryPointParams: a.entryPointParams,
            otherProps: q,
            popoverEntryPoint: a.popoverEntryPoint,
            preloadTrigger: 'button_aggressive',
            children: function (a, b, c, d, e, f) {
              return r(a, b, d, e, f);
            },
          }),
        );
      } else
        return j.jsx(
          c('CometDeferredPopoverTrigger.react'),
          babelHelpers['extends']({}, p, {
            popoverResource: a.popoverResource,
            children: function (a, b) {
              return r(a, b);
            },
          }),
        );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
