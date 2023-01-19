__d(
  'CometProgressRingIndeterminate.react',
  [
    'fbt',
    'CometImageFromIXValue.react',
    'CometProgressRingUtils',
    'react',
    'stylex',
    'useCurrentDisplayMode',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = {
        animationFillModeAndTimingFn: {
          animationFillMode: 'x1u6ievf',
          animationTimingFunction: 'x1wnkzza',
          $$css: !0,
        },
        foregroundCircle: {
          animationDuration: 'x1c74tu6',
          animationFillMode: 'x1u6ievf',
          animationIterationCount: 'xa4qsjk',
          animationTimingFunction: 'xuxiujg',
          transformOrigin: 'x1bndym7',
          $$css: !0,
        },
        foregroundCircle12: { animationName: 'x1iqdq0d', $$css: !0 },
        foregroundCircle16: { animationName: 'x1koaglw', $$css: !0 },
        foregroundCircle20: { animationName: 'x16tkgvi', $$css: !0 },
        foregroundCircle24: { animationName: 'xiepp7r', $$css: !0 },
        foregroundCircle32: { animationName: 'x1pb3rhs', $$css: !0 },
        foregroundCircle48: { animationName: 'x1w90wak', $$css: !0 },
        foregroundCircle60: { animationName: 'x1jrcm85', $$css: !0 },
        foregroundCircle72: { animationName: 'xnw30k', $$css: !0 },
        root: { display: 'x78zum5', $$css: !0 },
        rotationCircle: {
          animationDuration: 'x1c74tu6',
          animationIterationCount: 'xa4qsjk',
          animationName: 'x1kfoseq',
          animationTimingFunction: 'x193epu2',
          transformOrigin: 'x1bndym7',
          $$css: !0,
        },
      },
      k = 2,
      l = 'always-enable-animations';
    function a(a) {
      var b = a.color,
        e = a.size,
        f = d('CometProgressRingUtils').getRingColor(b);
      f = f.foregroundColor;
      var g = (e - k) * Math.PI,
        m = c('useCurrentDisplayMode')();
      m = m === 'dark';
      m = d('CometProgressRingUtils').getRingGifUrl(
        b,
        e.toString(),
        m ? 'dark' : 'light',
      );
      return i.jsx('div', {
        'aria-label': h._('__JHASH__6lD-XyRyuHe__JHASH__'),
        className: c('stylex')(j.root, a.xstyle),
        role: 'progressbar',
        children:
          b === 'dark'
            ? i.jsx('svg', {
                className: [
                  l,
                  'x1c74tu6 xa4qsjk x1kfoseq x1wnkzza x1bndym7 x1u6ievf',
                ].join(' '),
                height: e,
                viewBox: '0 0 ' + e + ' ' + e,
                width: e,
                children: i.jsx('circle', {
                  className: [
                    l,
                    c('stylex')([
                      j.foregroundCircle,
                      e === 12 && j.foregroundCircle12,
                      e === 16 && j.foregroundCircle16,
                      e === 20 && j.foregroundCircle20,
                      e === 24 && j.foregroundCircle24,
                      e === 32 && j.foregroundCircle32,
                      e === 48 && j.foregroundCircle48,
                      e === 60 && j.foregroundCircle60,
                      e === 72 && j.foregroundCircle72,
                    ]),
                  ].join(' '),
                  cx: e / 2,
                  cy: e / 2,
                  fill: 'none',
                  r: (e - k) / 2,
                  stroke: f,
                  strokeDasharray: g,
                  strokeWidth: k,
                }),
              })
            : i.jsx('div', {
                style: { height: e, width: e },
                children: i.jsx(c('CometImageFromIXValue.react'), {
                  source: m,
                  testid: void 0,
                }),
              }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
