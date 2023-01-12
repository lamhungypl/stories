__d(
  'CometAppNavigationTabBarContainer.react',
  ['CometBase.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        content: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          justifyContent: 'x13a6bvl',
          $$css: !0,
        },
        root: {
          backgroundColor: 'x1ve1bff',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          height: 'x1s65kcs',
          $$css: !0,
        },
        shadow: {
          backgroundImage: 'xnzfen',
          backgroundRepeat: 'x1w3jsh0',
          backgroundSize: 'x1wbvgsv',
          bottom: 'xsugpx9',
          end: 'xds687c',
          height: 'x1hagigm',
          pointerEvents: 'x47corl',
          position: 'x10l6tqk',
          start: 'x17qophe',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        d = a.isShadowExcluded;
      d = d === void 0 ? !1 : d;
      var e = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'isShadowExcluded',
        'xstyle',
      ]);
      return h.jsxs(
        c('CometBase.react'),
        babelHelpers['extends']({}, a, {
          testid: void 0,
          xstyle: [i.root, e],
          children: [
            h.jsx(c('CometBase.react'), { xstyle: i.content, children: b }),
            !d && h.jsx(c('CometBase.react'), { xstyle: i.shadow }),
          ],
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
