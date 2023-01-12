__d(
  'CometUnstyledButton_DEPRECATED.react',
  ['BaseButtonOrLink_DEPRECATED.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        expanded: { display: 'x1lliihq', width: 'xh8yej3', $$css: !0 },
        root: {
          backgroundColor: 'xjbqb8w',
          borderTop: 'x6umtig',
          borderEnd: 'x1b1mbwd',
          borderBottom: 'xaqea5y',
          borderStart: 'xav7gou',
          color: 'x1heor9g',
          cursor: 'x1ypdohk',
          display: 'x1rg5ohu',
          fontFamily: 'xjb2p0i',
          fontSize: 'x1qlqyl8',
          lineHeight: 'x15bjb6t',
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'xat24cr',
          marginStart: 'x1mh8g0r',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          textAlign: 'x16tdsg8',
          textDecoration: 'x1r8a4m5',
          ':active_transform': 'xk4oym4',
          ':active_transition': 'xsj2dmf',
          ':hover_color': 'x144v4sp',
          ':hover_textDecoration': 'x1edh9d7',
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.expanded;
      d = d === void 0 ? !1 : d;
      var e = a.xstyle;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['expanded', 'xstyle']);
      return h.jsx(
        c('BaseButtonOrLink_DEPRECATED.react'),
        babelHelpers['extends']({}, a, {
          ref: b,
          xstyle: [i.root, d && i.expanded, e],
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
