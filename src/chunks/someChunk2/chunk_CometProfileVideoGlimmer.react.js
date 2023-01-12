__d(
  'CometProfileVideoGlimmer.react',
  ['CometGlimmer.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        container: { position: 'x1n2onr6', $$css: !0 },
        glimmer: {
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          height: 'x5yr21d',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          width: 'xh8yej3',
          $$css: !0,
        },
      };
    function a(a) {
      a = a.size;
      return h.jsx('div', {
        className: 'x1n2onr6',
        style: { height: a, width: a },
        children: h.jsx(c('CometGlimmer.react'), {
          index: 0,
          xstyle: i.glimmer,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
