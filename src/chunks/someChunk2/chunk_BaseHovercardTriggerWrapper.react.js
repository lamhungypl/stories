__d(
  'BaseHovercardTriggerWrapper.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.display;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['display']);
      return b === 'inline'
        ? h.jsx(
            'span',
            babelHelpers['extends']({}, a, { className: 'xt0psk2' }),
          )
        : h.jsx(
            'div',
            babelHelpers['extends']({}, a, {
              className: '' + (b === 'inline-block' ? ' x1rg5ohu' : ''),
            }),
          );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
