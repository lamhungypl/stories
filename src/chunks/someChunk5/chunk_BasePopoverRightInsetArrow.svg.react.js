__d(
  'BasePopoverRightInsetArrow.svg.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      return h.jsxs(
        'svg',
        babelHelpers['extends'](
          { height: 25, viewBox: '0 0 12 25', width: 12 },
          a,
          {
            children: [
              a.title != null && h.jsx('title', { children: a.title }),
              a.children != null && h.jsx('defs', { children: a.children }),
              h.jsx('path', {
                d: 'M24.553.103c-2.791.32-5.922 1.53-7.78 3.455l-9.62 7.023c-2.45 2.54-5.78 1.645-5.78-2.487V2.085C1.373 1.19.846.422.1.102z',
                transform: 'rotate(-90 12.5 12.48)',
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
