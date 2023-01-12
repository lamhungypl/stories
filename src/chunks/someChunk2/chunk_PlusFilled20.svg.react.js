__d(
  'PlusFilled20.svg.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      return h.jsxs(
        'svg',
        babelHelpers['extends'](
          {
            fill: 'currentColor',
            viewBox: '0 0 20 20',
            width: '1em',
            height: '1em',
          },
          a,
          {
            children: [
              a.title != null && h.jsx('title', { children: a.title }),
              a.children != null && h.jsx('defs', { children: a.children }),
              h.jsx('g', {
                fillRule: 'evenodd',
                transform: 'translate(-446 -350)',
                children: h.jsxs('g', {
                  fillRule: 'nonzero',
                  children: [
                    h.jsx('path', {
                      d: 'M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z',
                      transform: 'translate(354.5 159.5)',
                    }),
                    h.jsx('path', {
                      d: 'M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z',
                      transform: 'translate(354.5 159.5)',
                    }),
                  ],
                }),
              }),
            ],
          },
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    a._isSVG = !0;
    b = a;
    g['default'] = b;
  },
  98,
);
