__d(
  'BaseHeading.react',
  ['BaseHeadingContext', 'BaseTextContext', 'react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo,
      k = {
        root: {
          color: 'x1heor9g',
          fontSize: 'x1qlqyl8',
          fontWeight: 'x1pd3egz',
          outline: 'x1a2a7pz',
          $$css: !0,
        },
      };
    function a(a, b) {
      var e = a.children,
        f = a.isPrimaryHeading,
        g = f === void 0 ? !1 : f;
      f = a.testid;
      f = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'isPrimaryHeading',
        'testid',
        'xstyle',
      ]);
      var l = i(c('BaseHeadingContext')),
        m = j(
          function () {
            return g ? 'h1' : 'h' + Math.max(Math.min(l, 6), 2);
          },
          [g, l],
        ),
        n = d('BaseTextContext').useBaseTextContext();
      n = (n == null ? void 0 : n.nested) === !0;
      return h.jsx(
        m,
        babelHelpers['extends']({}, a, {
          className: c('stylex')(k.root, f),
          'data-testid': void 0,
          dir: n ? void 0 : 'auto',
          ref: b,
          children: e,
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
