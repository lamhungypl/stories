__d(
  'BaseDivider.react',
  ['react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        divider: {
          backgroundColor: 'x14nfmen',
          boxSizing: 'x9f619',
          height: 'xjm9jq1',
          $$css: !0,
        },
        reset: {
          backgroundColor: 'xjbqb8w',
          borderTopWidth: 'x972fbf',
          borderEndWidth: 'xcfux6l',
          borderBottomWidth: 'x1qhh985',
          borderStartWidth: 'xm0m39n',
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'xat24cr',
          marginStart: 'x1mh8g0r',
          $$css: !0,
        },
      };
    function a(a) {
      return h.jsx('hr', {
        'aria-hidden': a.ariaHidden,
        className: c('stylex')(i.reset, i.divider, a.xstyle),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
