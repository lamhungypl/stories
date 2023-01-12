__d(
  'CometFocusGroup.react',
  [
    'CometCompositeFocusIndicator.react',
    'CometFocusGroupContext',
    'FocusGroup.react',
    'focusScopeQueries',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo;
    b = d('FocusGroup.react').createFocusGroup(
      d('focusScopeQueries').tabbableScopeQuery,
    );
    var j = b[0],
      k = b[1];
    function a(a) {
      var b = a.children,
        d = a.hideArrowSignifiers,
        e = a.role,
        f = babelHelpers.objectWithoutPropertiesLoose(a, [
          'children',
          'hideArrowSignifiers',
          'role',
        ]),
        g = i(function () {
          return { FocusContainer: j, FocusItem: k };
        }, []),
        l = i(
          function () {
            return {
              hideArrowSignifiers: d === !0,
              horizontal: a.orientation !== 'vertical',
              role: e,
              vertical: a.orientation !== 'horizontal',
            };
          },
          [d, a.orientation, e],
        );
      return h.jsx(c('CometCompositeFocusIndicator.react'), {
        compositeInfo: l,
        children: function (a) {
          return h.jsx(c('CometFocusGroupContext').Provider, {
            value: g,
            children: h.jsx(
              j,
              babelHelpers['extends']({}, f, { children: b(a) }),
            ),
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
