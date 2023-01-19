__d(
  'CometPrerenderer.react',
  ['HiddenSubtreeContextProvider.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.children;
      a = a.prerenderingProps;
      a = a === void 0 ? {} : a;
      var d = a.isVisible;
      d = d === void 0 ? !0 : d;
      a = a.shouldPrerender;
      a = a === void 0 ? !1 : a;
      return d || a
        ? h.jsx(c('HiddenSubtreeContextProvider.react'), {
            isHidden: !d && a,
            children: b({ hidden: !d && a }),
          })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
