__d(
  'CometProgressIndicator.react',
  ['BaseLoadingStateElement.react', 'react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        animateDot: {
          animationDuration: 'x1c74tu6',
          animationIterationCount: 'xa4qsjk',
          animationName: 'xwp40e0',
          animationTimingFunction: 'x147wac7',
          opacity: 'xllgmg',
          transform: 'x13kylt9',
          $$css: !0,
        },
        animationDelay300: { animationDelay: 'x1x1c4bx', $$css: !0 },
        animationDelay600: { animationDelay: 'x1nrwgbl', $$css: !0 },
        root: { display: 'x78zum5', flexDirection: 'x1q0g3np', $$css: !0 },
      },
      j = {
        default: {
          borderTopStartRadius: 'x1lcm9me',
          borderTopEndRadius: 'x1yr5g0i',
          borderBottomEndRadius: 'xrt01vj',
          borderBottomStartRadius: 'x10y3i5r',
          height: 'xdk7pt',
          marginEnd: 'xfs2ol5',
          marginStart: 'x12mruv9',
          width: 'x1xc55vz',
          $$css: !0,
        },
        small: {
          borderTopStartRadius: 'xm3z3ea',
          borderTopEndRadius: 'x1x8b98j',
          borderBottomEndRadius: 'x131883w',
          borderBottomStartRadius: 'x16mih1h',
          height: 'xqu0tyb',
          marginEnd: 'xhhsvwb',
          marginStart: 'xgzva0m',
          width: 'x51ohtg',
          $$css: !0,
        },
      },
      k = {
        media: { backgroundColor: 'x14hiurz', $$css: !0 },
        primary: { backgroundColor: 'xn25soc', $$css: !0 },
      };
    function a(a) {
      var b = a.disableLoadingStateTracker,
        d = a.overrideBGColorContext;
      d = d === void 0 ? 'primary' : d;
      a = a.size;
      a = a === void 0 ? 'default' : a;
      a = [i.animateDot, j[a], k[d]];
      return h.jsxs(c('BaseLoadingStateElement.react'), {
        disableLoadingStateTracker: b,
        xstyle: i.root,
        children: [
          h.jsx('div', { className: c('stylex')(a) }),
          h.jsx('div', {
            className: c('stylex').apply(
              void 0,
              a.concat([i.animationDelay300]),
            ),
          }),
          h.jsx('div', {
            className: c('stylex').apply(
              void 0,
              a.concat([i.animationDelay600]),
            ),
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
