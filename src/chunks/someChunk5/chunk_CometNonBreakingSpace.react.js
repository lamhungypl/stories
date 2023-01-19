__d(
  'CometNonBreakingSpace.react',
  ['react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        1: { marginEnd: 'x1xxsv49', $$css: !0 },
        0.25: { marginEnd: 'x1yi58nm', $$css: !0 },
        0.5: { marginEnd: 'xgnuv6c', $$css: !0 },
        0.75: { marginEnd: 'x1jnq1ez', $$css: !0 },
      };
    function a(a) {
      a = a.size;
      if (a != null)
        return h.jsx('span', {
          className: c('stylex')(i[a]),
          children: '\ufeff',
        });
      else return h.jsx(h.Fragment, { children: '\xa0' });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
