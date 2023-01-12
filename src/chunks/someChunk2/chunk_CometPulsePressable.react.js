__d(
  'CometPulsePressable.react',
  ['CometPressable.react', 'react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        positive: { backgroundColor: 'xv9rvxn', $$css: !0 },
        primary: { backgroundColor: 'xtvsq51', $$css: !0 },
      },
      j = {
        pulse: {
          animationIterationCount: 'xa4qsjk',
          animationName: 'x1uydz15',
          animationTimingFunction: 'x1esw782',
          backgroundColor: 'xtvsq51',
          borderTopStartRadius: 'xlid4zk',
          borderTopEndRadius: 'x13tp074',
          borderBottomEndRadius: 'x1qns1p2',
          borderBottomStartRadius: 'xipx5yg',
          height: 'xdk7pt',
          position: 'x10l6tqk',
          transform: 'x3oybdh',
          transitionDuration: 'x1k90msu',
          transitionProperty: 'x11xpdln',
          transitionTimingFunction: 'xz4gly6',
          width: 'x1xc55vz',
          $$css: !0,
        },
        pulseOne: { animationDuration: 'x7t6ubo', $$css: !0 },
        pulseTwo: {
          animationDelay: 'xeai4wr',
          animationDuration: 'x7t6ubo',
          $$css: !0,
        },
        pulseZeroHovered: { transform: 'x1gz8ohu', $$css: !0 },
        wrapper: {
          display: 'x78zum5',
          height: 'xqtp20y',
          transform: 'x1d3vzwk',
          width: 'xnalus7',
          $$css: !0,
        },
      };
    a = h.forwardRef(function (a, b) {
      var d = a.pulseColor,
        e = d === void 0 ? 'primary' : d;
      d = babelHelpers.objectWithoutPropertiesLoose(a, ['pulseColor']);
      return h.jsx('span', {
        className: 'x78zum5 xqtp20y x1d3vzwk xnalus7',
        children: h.jsx(
          c('CometPressable.react'),
          babelHelpers['extends']({ ref: b }, d, {
            xstyle: d.xstyle,
            children: function (a) {
              a = a.hovered;
              return h.jsxs(h.Fragment, {
                children: [
                  h.jsx('span', {
                    className: c('stylex')(
                      j.pulse,
                      a && j.pulseZeroHovered,
                      i[e],
                    ),
                  }),
                  h.jsx('span', {
                    className: c('stylex')(j.pulse, j.pulseOne, i[e]),
                  }),
                  h.jsx('span', {
                    className: c('stylex')(j.pulse, j.pulseTwo, i[e]),
                  }),
                ],
              });
            },
          }),
        ),
      });
    });
    g['default'] = a;
  },
  98,
);
