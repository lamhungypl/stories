__d(
  'CometPopoverLoadingStateContent.react',
  ['CometProgressRingIndeterminate.react', 'react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        root: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          height: 'xnnlda6',
          justifyContent: 'xl56j7k',
          minWidth: 'x53cq04',
          width: 'xh8yej3',
          $$css: !0,
        },
      };
    function a(a) {
      a = a.xstyle;
      return h.jsx('div', {
        className: c('stylex')(i.root, a),
        children: h.jsx(c('CometProgressRingIndeterminate.react'), {
          color: 'disabled',
          size: 24,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
