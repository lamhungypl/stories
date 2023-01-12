__d(
  'CometUnit.react',
  ['CometColumn.react', 'CometColumnItem.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        0: { paddingBottom: 'x18d9i69', $$css: !0 },
        8: { paddingBottom: 'xwib8y2', $$css: !0 },
        12: { paddingBottom: 'xsag5q8', $$css: !0 },
        16: { paddingBottom: 'x1l90r2v', $$css: !0 },
        20: { paddingBottom: 'xx6bls6', $$css: !0 },
      },
      j = {
        primary: { backgroundColor: 'x1jx94hy', $$css: !0 },
        transparent: { backgroundColor: 'xjbqb8w', $$css: !0 },
      };
    function a(a, b) {
      var d = a.children,
        e = a.header,
        f = a.paddingBottom;
      f = f === void 0 ? 20 : f;
      var g = a.spacing;
      g = g === void 0 ? 8 : g;
      var k = a.type;
      k = k === void 0 ? 'primary' : k;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'header',
        'paddingBottom',
        'spacing',
        'type',
      ]);
      return h.jsxs(
        c('CometColumn.react'),
        babelHelpers['extends']({}, a, {
          ref: b,
          spacing: g,
          xstyle: [i[f], j[k]],
          children: [
            h.jsx(c('CometColumnItem.react'), { children: e }),
            h.jsx(c('CometColumnItem.react'), { children: d }),
          ],
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
