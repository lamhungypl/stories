__d(
  'StoriesCreateFormAddDataButton',
  ['CometPressable.react', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        button: {
          alignItems: 'x6s0dn4',
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          height: 'xnnlda6',
          justifyContent: 'x1nhvcw1',
          marginTop: 'x1xmf6yo',
          width: 'xh8yej3',
          $$css: !0,
        },
        icon: {
          alignItems: 'x6s0dn4',
          backgroundColor: 'xmjcpbm',
          borderTopStartRadius: 'xnwf7zb',
          borderTopEndRadius: 'x40j3uw',
          borderBottomEndRadius: 'x1s7lred',
          borderBottomStartRadius: 'x15gyhx8',
          display: 'x78zum5',
          height: 'x1vqgdyp',
          justifyContent: 'xl56j7k',
          marginStart: 'x1i64zmx',
          position: 'x1n2onr6',
          width: 'x100vrsf',
          $$css: !0,
        },
        label: { marginStart: 'x16n37ib', position: 'x1n2onr6', $$css: !0 },
      };
    function a(a) {
      var b = a.icon,
        d = a.label,
        e = a.onPress;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'icon',
        'label',
        'onPress',
      ]);
      return h.jsxs(
        c('CometPressable.react'),
        babelHelpers['extends']({ onPress: e, xstyle: i.button }, a, {
          children: [
            h.jsx('div', {
              className:
                'x6s0dn4 xmjcpbm xnwf7zb x40j3uw x1s7lred x15gyhx8 x78zum5 x1vqgdyp xl56j7k x1i64zmx x1n2onr6 x100vrsf',
              children: b,
            }),
            h.jsx('div', {
              className: 'x16n37ib x1n2onr6',
              children: h.jsx(c('TetraText.react'), {
                type: 'bodyLink2',
                children: d,
              }),
            }),
          ],
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
