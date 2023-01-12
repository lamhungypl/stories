__d(
  'StoriesCreatePreviewPlaceholder.react',
  [
    'BaseGlimmer.react',
    'StoriesCreateConstants',
    'react',
    'useStoriesCreateMediaFrame',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        container: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          height: 'x5yr21d',
          marginBottom: 'xod5an3',
          marginTop: 'x14vqqas',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          position: 'x1n2onr6',
          $$css: !0,
        },
        glimmer: { height: 'x5yr21d', width: 'xh8yej3', $$css: !0 },
        root: {
          alignItems: 'x6s0dn4',
          backgroundColor: 'xal61yo',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          height: 'x5yr21d',
          justifyContent: 'xl56j7k',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          width: 'xh8yej3',
          $$css: !0,
        },
      };
    function a() {
      var a = d('StoriesCreateConstants').SATP_PREVIEW_DIMENSIONS.FOOTER_HEIGHT,
        b = d('StoriesCreateConstants').SATP_PREVIEW_DIMENSIONS.HEADER_HEIGHT;
      a = c('useStoriesCreateMediaFrame')({ footerHeight: a, headerHeight: b });
      b = a.frameWidth;
      return h.jsx('div', {
        className:
          'x6s0dn4 xal61yo x78zum5 xdt5ytf x5yr21d xl56j7k x10l6tqk x17qophe x13vifvy xh8yej3',
        children: h.jsx('div', {
          className:
            'x1lq5wgf xgqcy7u x30kzoy x9jhf4c x5yr21d xod5an3 x14vqqas x6ikm8r x10wlt62 x1n2onr6',
          style: { width: b + 'px' },
          children: h.jsx(c('BaseGlimmer.react'), {
            index: 0,
            xstyle: i.glimmer,
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
