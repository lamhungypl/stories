__d(
  'StoriesCreatePreviewCTA.react',
  ['StoriesCTAButton.react', 'StoriesCTAButtonLabels', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      a = a.ctaType;
      return a == null
        ? null
        : h.jsxs('div', {
            className: 'x1ey2m1c x78zum5 xl56j7k xx6bls6 x10l6tqk xh8yej3',
            children: [
              h.jsx('div', {
                className: 'xzgd2jw x1ey2m1c xds687c x10l6tqk x17qophe xcrr8yc',
              }),
              h.jsx(
                c('StoriesCTAButton.react'),
                { title: c('StoriesCTAButtonLabels')[a] },
                a,
              ),
            ],
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
