__d(
  'CometNullState.react',
  [
    'CometIcon.react',
    'FlightSerializableIcon',
    'IconSource',
    'TetraTextPairing.react',
    'react',
    'useCurrentDisplayMode',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var e = a.action,
        f = a.body;
      f = f === void 0 ? null : f;
      var g = a.bodyColor;
      g = g === void 0 ? 'secondary' : g;
      var i = a.headline,
        j = a.headlineColor;
      j = j === void 0 ? 'secondary' : j;
      var k = a.icon,
        l = a.iconColor,
        m = a.small;
      m = m === void 0 ? !1 : m;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'action',
        'body',
        'bodyColor',
        'headline',
        'headlineColor',
        'icon',
        'iconColor',
        'small',
      ]);
      var n = c('useCurrentDisplayMode')();
      n = n === 'dark';
      m = m ? 4 : 2;
      k = d('FlightSerializableIcon').parseFlightIcon(k);
      l =
        k != null
          ? k instanceof c('IconSource')
            ? h.jsx(c('CometIcon.react'), { color: l, icon: k })
            : h.jsx(c('CometIcon.react'), {
                icon: n && k.dark != null ? k.dark : k['default'],
              })
          : null;
      return h.jsxs(
        'div',
        babelHelpers['extends'](
          {
            className:
              'x6s0dn4 x78zum5 xdt5ytf xl56j7k x1p5oq8j xxbr6pl xwxc41k xbbxn1n',
          },
          a,
          {
            ref: b,
            children: [
              h.jsx('div', { className: 'xieb3on', children: l }),
              h.jsx(c('TetraTextPairing.react'), {
                body: f,
                bodyColor: g,
                headline: i,
                headlineColor: j,
                level: m,
                textAlign: 'center',
              }),
              e != null
                ? h.jsx('div', { className: 'xqui205', children: e })
                : null,
            ],
          },
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
