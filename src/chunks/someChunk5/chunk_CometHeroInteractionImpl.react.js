__d(
  'CometHeroInteractionImpl.react',
  ['hero-tracing', 'react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var e = a.htmlAttributes,
        f = a.pageletAriaProps,
        g = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'htmlAttributes',
        'pageletAriaProps',
        'xstyle',
      ]);
      return h.jsx(
        d('hero-tracing').HeroInteraction,
        babelHelpers['extends'](
          {
            htmlAttributes: babelHelpers['extends']({}, f, {
              className: c('stylex')(g),
              onMouseLeave: e == null ? void 0 : e.onMouseLeave,
              style: e == null ? void 0 : e.style,
            }),
            ref: b,
          },
          a,
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    a.displayName = 'CometHeroInteraction';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
