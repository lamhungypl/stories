__d(
  'CometTextWithBadge.react',
  ['CometTextWithIcon.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.badgeAfter,
        d = a.badgeBefore,
        e = a.badgeOverrideVerticalStyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'badgeAfter',
        'badgeBefore',
        'badgeOverrideVerticalStyle',
      ]);
      return h.jsx(
        c('CometTextWithIcon.react'),
        babelHelpers['extends']({}, a, {
          iconAfter: b,
          iconBefore: d,
          iconOverrideVerticalStyle: e,
          observeDirectionality: !0,
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
