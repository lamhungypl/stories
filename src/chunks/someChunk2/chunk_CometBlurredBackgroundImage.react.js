__d(
  'CometBlurredBackgroundImage.react',
  ['CometBackgroundImage.react', 'gkx', 'react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        blur: { filter: 'xtea3wc', $$css: !0 },
        fallback: {
          backgroundColor: 'x2bj2ny',
          height: 'x5yr21d',
          width: 'xh8yej3',
          $$css: !0,
        },
        imageContainer: {
          height: 'xu1mrb',
          transform: 'x1yyh9jt',
          width: 'x1jx8tsq',
          $$css: !0,
        },
        root: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          height: 'x5yr21d',
          justifyContent: 'xl56j7k',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          width: 'xh8yej3',
          $$css: !0,
        },
      },
      j = !c('gkx')('1299319');
    function a(a) {
      var b = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['xstyle']);
      a = j
        ? h.jsx('div', {
            className: 'xu1mrb x1yyh9jt x1jx8tsq',
            children: h.jsx('span', {
              className: 'xtea3wc',
              children: h.jsx(
                c('CometBackgroundImage.react'),
                babelHelpers['extends']({}, a),
              ),
            }),
          })
        : h.jsx('div', { className: 'x2bj2ny x5yr21d xh8yej3' });
      return h.jsx('div', { className: c('stylex')(i.root, b), children: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
