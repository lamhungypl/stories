__d(
  'CometProgressStepper.react',
  ['fbt', 'react', 'testID'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.color,
        d = b === void 0 ? 'primary' : b;
      b = a.label;
      var e = a.roundCorners,
        f = e === void 0 ? !0 : e,
        g = a.step;
      e = a.testid;
      var j = a.totalSteps;
      a = a.type;
      var k = a === void 0 ? 'default' : a;
      b != null
        ? (a = h._('__JHASH__qUj1_MOMmvT__JHASH__', [
            h._param('name of the progress stepper', b),
            h._param('current step', g),
            h._param('total number of steps', j),
          ]))
        : (a = h._('__JHASH__-5fm9CgU_fQ__JHASH__', [
            h._param('current step', g),
            h._param('total number of steps', j),
          ]));
      return i.jsx(
        'div',
        babelHelpers['extends']({}, c('testID')(e), {
          'aria-label': a,
          className:
            'x1qjc9v5 x13fuv20 x26u7qi xu3j5b3 x1q0q8m5 x972fbf xm0m39n xcfux6l x1qhh985 x9f619 x78zum5 x1iyjqo2 xs83m0k xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1ja2u2z x1q0g3np xozqiw3 x1szn6h9 xh8yej3',
          role: 'img',
          children: Array(j)
            .fill()
            .map(function (a, b) {
              a = b < g;
              return i.jsx(
                'div',
                {
                  className:
                    'x9f619' +
                    ((k === 'spaced-out' && b === j - 1
                      ? ' x4uap5'
                      : '' +
                        ((k === 'spaced-out' && b === 0
                          ? ''
                          : '' + (k === 'spaced-out' ? '' : '')) +
                          (k === 'spaced-out' ? ' xg83lxy' : ''))) +
                      (k === 'spaced-out' && b === 0
                        ? ' xkhd6sd'
                        : '' + (k === 'spaced-out' ? ' x1h0ha7o' : ''))),
                  style: { width: 'calc(100% / ' + j + ')' },
                  children: i.jsx('div', {
                    className:
                      'xdk7pt' +
                      ((a && d === 'secondary'
                        ? ' x1qhmfi1'
                        : '' +
                          (a && d === 'primary'
                            ? ' xtvsq51'
                            : ' xmjcpbm' +
                              (k === 'spaced-out' && f
                                ? ''
                                : '' +
                                  (b === j - 1 && f
                                    ? ''
                                    : '' + (b === 0 && f ? '' : ''))))) +
                        (k === 'spaced-out' && f
                          ? ' x10y3i5r x1lcm9me xrt01vj x1yr5g0i'
                          : '' +
                            ((b === 0 && f ? ' x10y3i5r x1lcm9me' : '') +
                              (b === j - 1 && f ? ' xrt01vj x1yr5g0i' : '')))),
                  }),
                },
                b,
              );
            }),
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
