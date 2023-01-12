__d(
  'CometNumberedBadge.react',
  ['getCometBadgeColorStyle', 'react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        badgeCount: {
          alignItems: 'x6s0dn4',
          color: 'xtk6v10',
          display: 'x3nfvp2',
          height: 'x5yr21d',
          justifyContent: 'xl56j7k',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x1mpkggp',
          paddingBottom: 'x18d9i69',
          paddingStart: 'x1t2a60a',
          width: 'xh8yej3',
          $$css: !0,
        },
        badgeCountLightBlue: { color: 'x1qq9wsj', $$css: !0 },
        rectangle: {
          borderTopStartRadius: 'xdxvlk3',
          borderTopEndRadius: 'x1fglp',
          borderBottomEndRadius: 'x1rp6h8o',
          borderBottomStartRadius: 'xg6i1s1',
          $$css: !0,
        },
        root: {
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          display: 'x3nfvp2',
          fontSize: 'x1nxh6w3',
          fontWeight: 'xk50ysn',
          height: 'xhvdbge',
          lineHeight: 'xo5v014',
          minWidth: 'xnyloks',
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.color;
      d = d === void 0 ? 'red' : d;
      var e = a.overflow;
      e = e === void 0 ? 20 : e;
      var f = a.testid;
      f = a.value;
      return h.jsx('span', {
        className: c('stylex')(
          i.root,
          c('getCometBadgeColorStyle')(d),
          f >= 10 && i.rectangle,
        ),
        'data-testid': void 0,
        ref: b,
        children: h.jsx('span', {
          className:
            'x6s0dn4 x3nfvp2 x5yr21d xl56j7k xexx8yu x1mpkggp x18d9i69 x1t2a60a xh8yej3' +
            (d === 'lightBlue' ? ' x1qq9wsj' : ' xtk6v10'),
          children: f > e ? e + '+' : f,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
