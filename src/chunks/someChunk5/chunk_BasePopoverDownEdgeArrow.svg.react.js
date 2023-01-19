__d(
  'BasePopoverDownEdgeArrow.svg.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      return h.jsxs(
        'svg',
        babelHelpers['extends'](
          { height: 12, viewBox: '0 0 21 12', width: 21 },
          a,
          {
            children: [
              a.title != null && h.jsx('title', { children: a.title }),
              a.children != null && h.jsx('defs', { children: a.children }),
              h.jsx('path', {
                d: 'M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z',
              }),
            ],
          },
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    a._isSVG = !0;
    g['default'] = a;
  },
  98,
);
