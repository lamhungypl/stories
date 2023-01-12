__d(
  'CometAppNavigationEndSectionItem.react',
  ['react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        displayNone: { display: 'x1s85apg', $$css: !0 },
        layoutEndButton: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          height: 'x5yr21d',
          justifyContent: 'xl56j7k',
          marginEnd: 'x1emribx',
          $$css: !0,
        },
        widePivotLink: {
          '@media (max-width: 1260px)_display': 'xfff67h',
          '@media (max-width: 1379px)_maxWidth': 'xu1161g',
          '@media (min-width: 1380px) and (max-height: 789px)_maxWidth':
            'x12ca73t',
          '@media (min-width: 1380px) and (min-height: 790px)_maxWidth':
            'x5vlmd',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        d = a.displayNone;
      d = d === void 0 ? !1 : d;
      var e = a.noWrapper;
      e = e === void 0 ? !1 : e;
      a = a.widePivotLink;
      a = a === void 0 ? !1 : a;
      return e
        ? b
        : h.jsx('div', {
            className: c('stylex')([
              i.layoutEndButton,
              a && i.widePivotLink,
              d && i.displayNone,
            ]),
            children: b,
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
