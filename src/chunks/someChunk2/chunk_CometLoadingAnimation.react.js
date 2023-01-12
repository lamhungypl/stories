__d(
  'CometLoadingAnimation.react',
  ['cssVar', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = 38,
      k = 62,
      l = 42,
      m = 2,
      n = 3,
      o = 4,
      p = j / 2,
      q = k / 2,
      r = l / 2,
      s = p - 2,
      t = q - 2,
      u = r - 2;
    function a(a) {
      var b = a.animationPaused;
      b = b === void 0 ? !1 : b;
      a = a.size;
      var c, d, e;
      switch (a) {
        case 36:
          c = j;
          d = p;
          e = s;
          break;
        case 40:
          c = l;
          d = r;
          e = u;
          break;
        case 60:
        default:
          c = k;
          d = q;
          e = t;
          break;
      }
      return i.jsx('svg', {
        className:
          'x10l6tqk' +
          (a === 40
            ? ' x1150agl x1e0gzzx'
            : '' +
              (a === 60
                ? ' x1150agl x1e0gzzx'
                : '' + (a === 36 ? ' x1150agl x1e0gzzx' : ''))),
        height: c,
        width: c,
        children: i.jsx('g', {
          className:
            'xeaay5l xa4qsjk xnjvcao x1esw782 x1bndym7' + (b ? ' xorstpt' : ''),
          children: i.jsx('circle', {
            className:
              'x1bndym7' +
              ((a === 60
                ? ' xeo85xg xeaay5l xa4qsjk x1esw782 xm4p48w x17ld789'
                : '' +
                  (a === 40
                    ? ' xeo85xg xeaay5l xa4qsjk x1esw782 x62hu5v xqjr0vm'
                    : '' +
                      (a === 36
                        ? ' xeo85xg xeaay5l xa4qsjk x1esw782 xq0anyh xvlca1e'
                        : ' xeo85xg x7s8090 xa4qsjk x1esw782'))) +
                (b
                  ? ' xorstpt'
                  : '' +
                    (a === 60
                      ? ''
                      : '' + (a === 40 ? '' : '' + (a === 36 ? '' : ''))))),
            cx: d,
            cy: d,
            fill: 'none',
            r: e,
            stroke: '#1877F2',
            strokeWidth: a === 36 ? m : a === 40 ? n : o,
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
