__d(
  'CometCreationResponsiveToggle.react',
  ['fbt', 'ix', 'CometIcon.react', 'fbicon', 'react'],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    function a(a) {
      var b = a.layout,
        e = a.onChangeLayout;
      return j.jsxs('div', {
        className: 'x78zum5 xl56j7k xktsk01 x1d52u69 xw7yly9',
        children: [
          j.jsx('div', {
            className: 'xktsk01',
            children: j.jsx(c('CometIcon.react'), {
              'aria-label': h._('__JHASH__P13xWotuRdu__JHASH__'),
              'aria-pressed': b === 'desktop',
              color: b === 'desktop' ? 'highlight' : 'secondary',
              icon: d('fbicon')._(i('607956'), 20),
              onPress: function () {
                return e('desktop');
              },
              size: 48,
            }),
          }),
          j.jsx(c('CometIcon.react'), {
            'aria-label': h._('__JHASH__233YOORHnDe__JHASH__'),
            'aria-pressed': b === 'mobile',
            color: b === 'mobile' ? 'highlight' : 'secondary',
            icon: d('fbicon')._(i('514772'), 20),
            onPress: function () {
              return e('mobile');
            },
            size: 48,
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
