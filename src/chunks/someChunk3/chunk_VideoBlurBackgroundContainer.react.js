__d(
  'VideoBlurBackgroundContainer.react',
  [
    'CometBlurryImagePreview.react',
    'CometImage.react',
    'CometRelay',
    'VideoBlurBackgroundContainer_video.graphql',
    'getPreviewDataFromImagePreviewPayload',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = {
        blurryImage: { filter: 'x1hedwgd', transform: 'x4zgh4k', $$css: !0 },
        image: {
          bottom: 'x1ey2m1c',
          boxSizing: 'x9f619',
          end: 'xds687c',
          height: 'x5yr21d',
          opacity: 'xti2d7y',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          width: 'xh8yej3',
          zIndex: 'x1ja2u2z',
          $$css: !0,
        },
        lightBackgroundInLightMode: { backgroundColor: 'x2bj2ny', $$css: !0 },
        root: {
          backgroundColor: 'xal61yo',
          height: 'x5yr21d',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          position: 'x1n2onr6',
          width: 'xh8yej3',
          $$css: !0,
        },
      };
    function a(a, e) {
      var f,
        g = a.children,
        k = a.lightBackgroundInLightMode,
        l = a.video;
      a = a.xstyle;
      l = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b('VideoBlurBackgroundContainer_video.graphql')),
        l,
      );
      f =
        (f = l.preferred_thumbnail) == null ? void 0 : f.image_preview_payload;
      var m;
      if (f != null) {
        f = c('getPreviewDataFromImagePreviewPayload')(f);
        f != null &&
          (m = i.jsx(c('CometBlurryImagePreview.react'), {
            className:
              'x1ey2m1c x9f619 xds687c x5yr21d xti2d7y x10l6tqk x17qophe x13vifvy xh8yej3 x1ja2u2z',
            previewData: f,
          }));
      }
      f =
        (f = l.preferred_thumbnail) == null
          ? void 0
          : (l = f.image) == null
          ? void 0
          : l.uri;
      m == null &&
        f != null &&
        (m = i.jsx(c('CometImage.react'), {
          src: f,
          xstyle: [j.blurryImage, j.image],
        }));
      return i.jsxs('div', {
        className: c('stylex')(
          j.root,
          a,
          k === !0 && j.lightBackgroundInLightMode,
        ),
        ref: e,
        children: [m, g],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = i.forwardRef(a);
    g['default'] = e;
  },
  98,
);
