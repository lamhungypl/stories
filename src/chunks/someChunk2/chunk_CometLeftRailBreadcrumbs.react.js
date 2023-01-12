__d(
  'CometLeftRailBreadcrumbs.react',
  [
    'fbt',
    'CometLeftRailBreadcrumbLink.react',
    'TetraText.react',
    'TetraTextPairing.react',
    'gkx',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.breadcrumbs;
      a = a.label;
      var d = ' \u203a ',
        e = b.map(function (a, e) {
          return i.jsxs(
            i.Fragment,
            {
              children: [
                e === 0
                  ? null
                  : i.jsx(c('TetraText.react'), {
                      color: 'tertiary',
                      type: 'meta3',
                      children: d,
                    }),
                i.jsx(c('CometLeftRailBreadcrumbLink.react'), {
                  isCurrentPage: e === b.length - 1,
                  linkInfo: a,
                }),
              ],
            },
            e,
          );
        });
      return i.jsx('div', {
        'aria-label':
          (a = a) != null ? a : h._('__JHASH__GxBiwUNXJHe__JHASH__'),
        'data-testid': void 0,
        role: 'navigation',
        suppressHydrationWarning: !c('gkx')('708253'),
        children: i.jsx(c('TetraTextPairing.react'), { body: e, level: 2 }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
