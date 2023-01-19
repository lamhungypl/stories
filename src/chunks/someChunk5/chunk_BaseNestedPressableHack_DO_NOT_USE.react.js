__d(
  'BaseNestedPressableHack_DO_NOT_USE.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useEffect,
      j = b.useState;
    function a(a) {
      a = a.children;
      var b = j(!1),
        c = b[0],
        d = b[1];
      i(function () {
        return d(!0);
      }, []);
      b = c ? null : { height: 0, width: 0 };
      return h.jsx(
        'object',
        babelHelpers['extends']({}, b, {
          type: 'nested/pressable',
          children: a,
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
