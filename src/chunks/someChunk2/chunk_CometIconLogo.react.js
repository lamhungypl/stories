__d(
  'CometIconLogo.react',
  ['CometIconAppFacebookCircleFilled.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.color;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['color']);
      return h.jsx(
        c('CometIconAppFacebookCircleFilled.react'),
        babelHelpers['extends']({}, a, {
          color:
            (a = b) != null
              ? a
              : h.jsxs('linearGradient', {
                  x1: '50%',
                  x2: '50%',
                  y1: '97.0782153%',
                  y2: '0%',
                  children: [
                    h.jsx('stop', { offset: '0%', stopColor: '#0062E0' }),
                    h.jsx('stop', { offset: '100%', stopColor: '#19AFFF' }),
                  ],
                }),
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
