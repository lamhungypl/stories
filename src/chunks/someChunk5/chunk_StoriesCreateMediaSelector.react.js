__d(
  'StoriesCreateMediaSelector.react',
  [
    'fbt',
    'ix',
    'CometAspectRatioContainer.react',
    'CometFileSelector.react',
    'CometImage.react',
    'CometPressable.react',
    'StoriesCreateConstants',
    'StoriesCreateMediaReducer',
    'StoriesCreateUtils',
    'StoriesCreateViewStateDispatcherContext',
    'StoriesGating',
    'TetraIcon.react',
    'fbicon',
    'fileInputAcceptValues',
    'react',
    'useFileDragEvents',
    'useStoriesCreateReducer',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    b = d('react');
    var k = b.useCallback,
      l = b.useContext,
      m = 2,
      n = {
        absolutePosition: {
          bottom: 'x1ey2m1c',
          end: 'xds687c',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          $$css: !0,
        },
        cardWidth: { width: 'x1bhdf0j', $$css: !0 },
        icon: {
          alignItems: 'x6s0dn4',
          alignSelf: 'xamitd3',
          backgroundColor: 'x1jx94hy',
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          boxShadow: 'x123plnn',
          display: 'x78zum5',
          height: 'xn3w4p2',
          justifyContent: 'xl56j7k',
          marginBottom: 'x1e56ztr',
          position: 'x1n2onr6',
          width: 'x187nhsf',
          $$css: !0,
        },
        root: {
          alignItems: 'x6s0dn4',
          bottom: 'x1ey2m1c',
          display: 'x78zum5',
          end: 'xds687c',
          flexDirection: 'xdt5ytf',
          justifyContent: 'xl56j7k',
          overflowWrap: 'x1mzt3pk',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          $$css: !0,
        },
        rounded: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          $$css: !0,
        },
        text: {
          boxSizing: 'x9f619',
          color: 'x14ctfv',
          display: 'x78zum5',
          fontSize: 'x67ct29',
          fontWeight: 'x117nqv4',
          justifyContent: 'xl56j7k',
          paddingStart: 'x5ib6vp',
          paddingEnd: 'xc73u3c',
          position: 'x1n2onr6',
          textAlign: 'x2b8uid',
          width: 'xh8yej3',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.onFilesSelect;
      c('useStoriesCreateReducer')(c('StoriesCreateMediaReducer'));
      var e = l(c('StoriesCreateViewStateDispatcherContext'));
      a = k(
        function (a) {
          d('StoriesCreateUtils').IsFileSupported(a);
          a = Array.from(a);
          e({ files: a, type: 'ADD_MEDIA_ATTACHMENT_ITEMS' });
          b(
            a.map(function (a) {
              return a.type;
            }),
          );
        },
        [e, b],
      );
      c('useFileDragEvents')(a);
      var f = d('fileInputAcceptValues').PHOTO,
        g = h._('__JHASH__atxTWwD-aI0__JHASH__');
      d('StoriesGating').isCometStoriesVideoProductionEnabled() &&
        ((f = f.concat(d('fileInputAcceptValues').VIDEO)),
        (g = h._('__JHASH__y3d3GyAVmqP__JHASH__')));
      var o = d('StoriesCreateConstants').NULL_STATE_DIMENSIONS
          .SELECTION_TILE_HEIGHT,
        p = d('StoriesCreateConstants').NULL_STATE_DIMENSIONS
          .SELECTION_TILE_WIDTH;
      return j.jsx(c('CometFileSelector.react'), {
        accept: f,
        onFilesSelected: a,
        children: function (a) {
          return j.jsx(c('CometPressable.react'), {
            display: 'inline',
            label: h._('__JHASH__Nx5XgQUGmoD__JHASH__'),
            onPress: function () {
              e({ type: 'CLEAR_ERROR' }), a();
            },
            overlayRadius: 8,
            testid: void 0,
            xstyle: n.cardWidth,
            children: j.jsx(c('CometAspectRatioContainer.react'), {
              aspectRatio: (p - m) / o,
              children: j.jsxs('div', {
                className:
                  'x6s0dn4 x1ey2m1c x78zum5 xds687c xdt5ytf xl56j7k x1mzt3pk x10l6tqk x17qophe x13vifvy',
                children: [
                  j.jsx(c('CometAspectRatioContainer.react'), {
                    aspectRatio: p / o,
                    xstyle: [n.absolutePosition, n.rounded],
                    children: j.jsx(c('CometImage.react'), {
                      objectFit: 'cover',
                      src: i('1394933'),
                      xstyle: n.absolutePosition,
                    }),
                  }),
                  j.jsx('div', {
                    className:
                      'x6s0dn4 xamitd3 x1jx94hy x14yjl9h xudhj91 x18nykt9 xww2gxu x123plnn x78zum5 xn3w4p2 xl56j7k x1e56ztr x1n2onr6 x187nhsf',
                    children: j.jsx(c('TetraIcon.react'), {
                      color: 'primary',
                      icon: d('fbicon')._(i('481799'), 20),
                      size: 20,
                    }),
                  }),
                  j.jsx('div', {
                    className:
                      'x9f619 x14ctfv x78zum5 x67ct29 x117nqv4 xl56j7k x5ib6vp xc73u3c x1n2onr6 x2b8uid xh8yej3',
                    children: g,
                  }),
                ],
              }),
            }),
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g.StoriesCreateMediaSelector = a;
  },
  98,
);