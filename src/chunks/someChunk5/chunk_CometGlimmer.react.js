__d(
  'CometGlimmer.react',
  ['BaseLoadingStateElement.react', 'react', 'useVisibilityObserver'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useState,
      k = 200,
      l = {
        dark: { backgroundColor: 'xhzw6zf', $$css: !0 },
        paused: { animationPlayState: 'xorstpt', $$css: !0 },
        root: {
          animationDirection: 'xpz12be',
          animationDuration: 'x1q3qbx4',
          animationIterationCount: 'xa4qsjk',
          animationName: 'xeuoslp',
          animationTimingFunction: 'x193epu2',
          backgroundColor: 'x1vtvx1t',
          opacity: 'xvpkmg4',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        d = a.index,
        e = a.theme;
      e = e === void 0 ? 'light' : e;
      a = a.xstyle;
      var f = j(!0),
        g = f[0],
        m = f[1];
      f = i(function (a) {
        a = a.hiddenReason;
        a !== 'COMPONENT_UNMOUNTED' && m(!0);
      }, []);
      var n = i(function () {
        m(!1);
      }, []);
      f = c('useVisibilityObserver')({ onHidden: f, onVisible: n });
      return h.jsx(c('BaseLoadingStateElement.react'), {
        ref: f,
        style: { animationDelay: (d % 10) * k + 'ms' },
        xstyle: [l.root, g && l.paused, e === 'dark' && l.dark, a],
        children: b,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
