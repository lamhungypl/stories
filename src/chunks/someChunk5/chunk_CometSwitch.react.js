__d(
  'CometSwitch.react',
  ['BaseStyledSwitch.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        toggle: {
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'x4vbgl9',
          marginStart: 'x1mh8g0r',
          $$css: !0,
        },
      };
    function a(a, b) {
      var d,
        e = a.children,
        f = a.disabled;
      f = f === void 0 ? !1 : f;
      var g = a.size;
      g = g === void 0 ? 'medium' : g;
      var j = a.testid;
      j = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'disabled',
        'size',
        'testid',
        'xstyle',
      ]);
      return h.jsx(
        c('BaseStyledSwitch.react'),
        babelHelpers['extends']({}, a, {
          'aria-label': e,
          disabled: f,
          ref: b,
          size: g,
          testid: void 0,
          xstyle: [i.toggle, j],
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
