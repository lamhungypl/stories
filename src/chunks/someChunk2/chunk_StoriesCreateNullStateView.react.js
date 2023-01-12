__d(
  'StoriesCreateNullStateView.react',
  [
    'fbt',
    'ix',
    'CometAspectRatioContainer.react',
    'CometImage.react',
    'CometPressable.react',
    'QPLUserFlow',
    'QuickPerformanceLogger',
    'StoriesCreateConstants',
    'StoriesCreateMediaSelector.react',
    'StoriesCreateMediaTypeEnum',
    'StoriesCreateViewStateDispatcherContext',
    'StoriesGating',
    'TetraIcon.react',
    'cometIsMimeTypeForMedia',
    'fbicon',
    'qpl',
    'react',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    b = d('react');
    var k = b.useContext,
      l = b.useEffect,
      m = {
        cardWidth: { width: 'x1bhdf0j', $$css: !0 },
        pickerContainer: {
          display: 'x78zum5',
          justifyContent: 'x1qughib',
          width: 'xh8yej3',
          $$css: !0,
        },
        satpContainer: {
          alignItems: 'x6s0dn4',
          bottom: 'x1ey2m1c',
          display: 'x78zum5',
          end: 'xds687c',
          flexDirection: 'xdt5ytf',
          justifyContent: 'xl56j7k',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          $$css: !0,
        },
        satpIcon: {
          alignItems: 'x6s0dn4',
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
        satpImage: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          height: 'x5yr21d',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          position: 'x10l6tqk',
          width: 'xh8yej3',
          $$css: !0,
        },
        textWrapper: {
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
      a = a.composerSessionID;
      var b = k(c('StoriesCreateViewStateDispatcherContext')),
        e = d('StoriesCreateConstants').NULL_STATE_DIMENSIONS
          .SELECTION_TILE_WIDTH,
        f = d('StoriesCreateConstants').NULL_STATE_DIMENSIONS
          .SPACE_BETWEEN_SELECTOR;
      l(function () {
        c('QuickPerformanceLogger').markerEnd(c('qpl')._(13238400, '7688'), 2);
      }, []);
      l(
        function () {
          c('QPLUserFlow').start(c('qpl')._(13250512, '1219'));
        },
        [a],
      );
      return j.jsxs('div', {
        className: 'x78zum5 x1qughib xh8yej3',
        style: { maxWidth: 2 * e + f },
        children: [
          j.jsx(
            d('StoriesCreateMediaSelector.react').StoriesCreateMediaSelector,
            {
              onFilesSelect: function (a) {
                var e = c('StoriesCreateMediaTypeEnum').PHOTO;
                d('StoriesGating').isCometStoriesVideoProductionEnabled() &&
                  d('cometIsMimeTypeForMedia').isMimeTypeForVideo(a[0]) &&
                  (e = c('StoriesCreateMediaTypeEnum').VIDEO);
                b({ formData: { mediaType: e, step: 1 }, type: 'step' });
              },
            },
          ),
          j.jsx(c('CometPressable.react'), {
            onPress: function () {
              b({
                formData: {
                  mediaType: c('StoriesCreateMediaTypeEnum').SATP,
                  step: 1,
                },
                type: 'step',
              }),
                b({ type: 'CLEAR_ERROR' });
            },
            overlayRadius: 8,
            testid: void 0,
            xstyle: m.cardWidth,
            children: j.jsx(c('CometAspectRatioContainer.react'), {
              aspectRatio: 218 / 330,
              children: j.jsxs('div', {
                className:
                  'x6s0dn4 x1ey2m1c x78zum5 xds687c xdt5ytf xl56j7k x10l6tqk x17qophe x13vifvy',
                children: [
                  j.jsx('div', {
                    className:
                      'x1lq5wgf xgqcy7u x30kzoy x9jhf4c x5yr21d x6ikm8r x10wlt62 x10l6tqk xh8yej3',
                    children: j.jsx(c('CometAspectRatioContainer.react'), {
                      aspectRatio: 218 / 330,
                      children: j.jsx(c('CometImage.react'), {
                        src: i('1394934'),
                      }),
                    }),
                  }),
                  j.jsx('div', {
                    className:
                      'x6s0dn4 x1jx94hy x14yjl9h xudhj91 x18nykt9 xww2gxu x123plnn x78zum5 xn3w4p2 xl56j7k x1e56ztr x1n2onr6 x187nhsf',
                    children: j.jsx(c('TetraIcon.react'), {
                      color: 'primary',
                      icon: d('fbicon')._(i('486064'), 20),
                      size: 20,
                    }),
                  }),
                  j.jsx('div', {
                    className:
                      'x9f619 x14ctfv x78zum5 x67ct29 x117nqv4 xl56j7k x5ib6vp xc73u3c x1n2onr6 x2b8uid xh8yej3',
                    children: h._('__JHASH__e7R1rkJ7xXL__JHASH__'),
                  }),
                ],
              }),
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = c('withStoriesCreateViewStatePart')(a, function (a) {
      return { composerSessionID: a.composerSessionID };
    });
    g['default'] = e;
  },
  98,
);
