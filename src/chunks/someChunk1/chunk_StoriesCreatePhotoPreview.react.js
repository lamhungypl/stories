__d(
  'StoriesCreatePhotoPreview.react',
  [
    'fbt',
    'CometComponentWithKeyCommands.react',
    'CometPlaceholder.react',
    'CometPressable.react',
    'JSResourceForInteraction',
    'Locale',
    'QPLUserFlow',
    'RelayHooks',
    'StoriesCreateBackground.react',
    'StoriesCreateConstants',
    'StoriesCreateDominantColorBg.react',
    'StoriesCreatePhotoFooterControls.react',
    'StoriesCreatePhotoFooterInstructions.react',
    'StoriesCreatePhotoPreviewFrame.react',
    'StoriesCreatePhotoPreviewFrameContext',
    'StoriesCreatePhotoPreviewItem.react',
    'StoriesCreatePhotoPreview_data.graphql',
    'StoriesCreatePreviewCTA.react',
    'StoriesCreateTextOverlayEntrypointContainer.react',
    'StoriesCreateViewStateDispatcherContext',
    'lazyLoadComponent',
    'qpl',
    'react',
    'useMergeRefs',
    'useResizeObserver',
    'useStoriesCreateObjectMove',
    'useStoriesCreatePhotoFrame',
    'useStoriesCreatePhotoPreviewBounds',
    'useStoriesCreatePhotoPreviewInput',
    'useThrottled',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g, aa) {
    'use strict';
    var h,
      i = d('react');
    e = d('react');
    var j = e.useCallback,
      ba = e.useContext,
      k = e.useEffect,
      ca = e.useMemo,
      l = e.useRef,
      m = e.useState,
      n = {
        border: {
          height: 'x5yr21d',
          paddingTop: 'x1snv3wq',
          paddingEnd: 'xf8nmdv',
          paddingBottom: 'x18ooxip',
          paddingStart: 'xyme5hm',
          pointerEvents: 'x47corl',
          position: 'x10l6tqk',
          start: 'xtzzx4i',
          transform: 'xuuh30',
          width: 'xh8yej3',
          $$css: !0,
        },
        borderRTL: { transform: 'xitnhlw', $$css: !0 },
        footer: {
          backgroundColor: 'x15cqagf',
          bottom: 'x1ey2m1c',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          position: 'x10l6tqk',
          width: 'xh8yej3',
          zIndex: 'x18ivbjn',
          $$css: !0,
        },
        image: {
          height: 'x5yr21d',
          position: 'x10l6tqk',
          start: 'xtzzx4i',
          transform: 'xuuh30',
          $$css: !0,
        },
        imageContainer: {
          height: 'x5yr21d',
          position: 'x10l6tqk',
          start: 'xtzzx4i',
          top: 'xwa60dl',
          $$css: !0,
        },
        imageRTL: {
          height: 'x5yr21d',
          position: 'x10l6tqk',
          start: 'xtzzx4i',
          transform: 'xitnhlw',
          $$css: !0,
        },
        mediaContainer: {
          alignItems: 'x6s0dn4',
          borderTopStartRadius: 'x168nmei',
          borderTopEndRadius: 'x13lgxp2',
          borderBottomEndRadius: 'x5pf9jr',
          borderBottomStartRadius: 'xo71vjh',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          position: 'x10l6tqk',
          width: 'xh8yej3',
          $$css: !0,
        },
        mediaContainerClipped: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          $$css: !0,
        },
        mediaContainerOverlays: { position: 'x10l6tqk', $$css: !0 },
        mediaContainerOverlaysIgnoreTouch: {
          pointerEvents: 'x47corl',
          $$css: !0,
        },
        overlay: {
          height: 'x5yr21d',
          position: 'x10l6tqk',
          width: 'xh8yej3',
          $$css: !0,
        },
        pressable: { height: 'x5yr21d', position: 'x10l6tqk', $$css: !0 },
        pressableContainer: {
          height: 'x5yr21d',
          position: 'x10l6tqk',
          $$css: !0,
        },
        root: {
          alignItems: 'x6s0dn4',
          backgroundColor: 'x15cqagf',
          bottom: 'x1ey2m1c',
          display: 'x78zum5',
          end: 'xds687c',
          justifyContent: 'xl56j7k',
          pointerEvents: 'x71s49j',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          $$css: !0,
        },
        rotationCursor: { cursor: 'x1ed109x', $$css: !0 },
        textOverlayEditingMode: {
          backgroundColor: 'x18l40ae',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          $$css: !0,
        },
      },
      da = 150,
      ea = h !== void 0 ? h : (h = b('StoriesCreatePhotoPreview_data.graphql'));
    function a(a) {
      var b = a.composerSessionID,
        e = a.ctaLinkData,
        f = a.dataRef,
        g = a.displayedURI,
        h = a.isObjectRotating,
        o = a.mediaAttachment,
        p = a.overlayRef,
        q = a.rotation,
        r = a.scale,
        s = a.stickerData;
      a = a.textOverlays;
      var t = m(!1),
        u = t[0],
        v = t[1],
        w = l(null),
        x = l(null);
      t = m(null);
      var y = t[0],
        z = t[1];
      t = m(null);
      var A = t[0],
        B = t[1],
        C = l([]),
        D = l(null);
      t = l(null);
      var E = l(null),
        F = l(2),
        G = l(null),
        H = l(0.2),
        I = null;
      f = d('RelayHooks').useFragment(ea, f);
      f = Boolean(f == null ? void 0 : f.stories_create_sticker_button_render);
      var J =
          Boolean(s == null ? void 0 : s.shouldShowProductTypeahead) ||
          Boolean(s == null ? void 0 : s.productSticker),
        K = Boolean(s == null ? void 0 : s.musicSticker);
      (K ||
        (f &&
          (((K = s == null ? void 0 : s.stickers.length) != null ? K : 0) > 0 ||
            J))) &&
        (I = c('lazyLoadComponent')(
          c('JSResourceForInteraction')(
            'StoriesCreateStickersRoot.react',
          ).__setRef('StoriesCreatePhotoPreview.react'),
        ));
      f = j(function (a, b) {
        z(b.getBoundingClientRect());
      }, []);
      s = c('useResizeObserver')(f);
      K = c('useMergeRefs')(w, s);
      J = j(function (a, b) {
        B(b.getBoundingClientRect());
      }, []);
      f = ca(
        function () {
          return { overlayRect: A };
        },
        [A],
      );
      s = c('useResizeObserver')(J);
      J = c('useMergeRefs')(x, s);
      s = g != null;
      var L = ba(c('StoriesCreateViewStateDispatcherContext')),
        M = (a == null ? void 0 : a.editingID) != null,
        N = d('StoriesCreateConstants').PHOTO_PREVIEW_DIMENSIONS.FOOTER_HEIGHT,
        O = d('StoriesCreateConstants').PHOTO_PREVIEW_DIMENSIONS.HEADER_HEIGHT,
        P = c('useStoriesCreatePhotoFrame')(),
        Q = P.border,
        R = P.frameWidth;
      P = j(
        function () {
          if (p == null || (p == null ? void 0 : p.current) == null) return;
          var a = p == null ? void 0 : p.current;
          a instanceof HTMLElement && B(a.getBoundingClientRect());
        },
        [p],
      );
      var S = c('useThrottled')(P, 100);
      k(
        function () {
          window.addEventListener('resize', S);
          return function () {
            window.removeEventListener('resize', S);
          };
        },
        [S],
      );
      k(
        function () {
          c('QPLUserFlow').addPoint(
            c('qpl')._(13250512, '1219'),
            'Image story preview',
          );
        },
        [b],
      );
      c('useStoriesCreatePhotoPreviewInput')(u, v, t, E);
      P = c('useStoriesCreateObjectMove')({
        autoAdjust: !0,
        buffer: { bottom: 10, left: 10, right: 10, top: 10 },
        overlayRect: A,
        targetRect: y,
      });
      var T = P.dx,
        U = P.dy;
      b = P.keyCommands;
      var fa = P.onBlur,
        ga = P.onPressDown;
      k(
        function () {
          L({ dx: T, dy: U, type: 'photo_update_offset' });
        },
        [L, T, U],
      );
      var V = j(
        function (a) {
          L({ type: 'photo_update_scale', value: a });
        },
        [L],
      );
      k(
        function () {
          var a;
          z((a = w.current) == null ? void 0 : a.getBoundingClientRect());
          B((a = x.current) == null ? void 0 : a.getBoundingClientRect());
        },
        [T, U, q, r],
      );
      c('useStoriesCreatePhotoPreviewBounds')(q, y, A);
      var W = d('Locale').isRTL();
      k(
        function () {
          var a = G.current;
          a != null && (W || (a.scrollLeft = 0), (a.scrollTop = 0));
        },
        [u, W],
      );
      P = j(
        function (a) {
          L({ type: 'photo_update_uri', value: null }),
            (D.current = null),
            C.current.push(a);
        },
        [L],
      );
      y = j(
        function (a) {
          if (C.current.includes(a)) return;
          L({ type: 'photo_update_uri', value: a });
        },
        [L],
      );
      k(
        function () {
          var a = w.current;
          if (
            g == null ||
            C.current.includes(g) ||
            a == null ||
            D.current != null ||
            R === 0
          )
            return;
          a = a.getBoundingClientRect();
          a.width > a.height && V(R / a.width);
          R / a.width < 0.2 &&
            ((H.current = (R / a.width) * 0.8),
            (F.current = (R / a.width) * 4));
          D.current = !0;
        },
        [g, R, V],
      );
      if (o == null || o.fileType !== 'PHOTO') return null;
      var ha = W ? '50%' : '-50%',
        X = !u,
        Y = X ? 'solid rgba(24,25,26, 1.0)' : 'solid rgba(24,25,26, 0.5)',
        Z = { height: 'calc(100% - ' + (N + O) + 'px', top: O + 'px' },
        $ = null;
      u
        ? ($ = i.jsx(c('StoriesCreatePhotoFooterControls.react'), {
            frameWidth: R,
            maxScale: F.current,
            minScale: H.current,
          }))
        : g != null &&
          !M &&
          ($ = i.jsx(c('StoriesCreatePhotoFooterInstructions.react'), {}));
      return i.jsx('div', {
        className:
          'x6s0dn4 x15cqagf x1ey2m1c x78zum5 xds687c xl56j7k x71s49j x10l6tqk x17qophe x13vifvy',
        children: i.jsxs(c('StoriesCreatePhotoPreviewFrameContext').Provider, {
          value: f,
          children: [
            i.jsxs('div', {
              className:
                'x6s0dn4 x78zum5 xl56j7k x10l6tqk xh8yej3' +
                (X
                  ? ' x1lq5wgf xgqcy7u x30kzoy x9jhf4c x6ikm8r x10wlt62'
                  : ' x168nmei x13lgxp2 x5pf9jr xo71vjh'),
              ref: G,
              style: babelHelpers['extends']({}, Z, {
                width: X ? R + 'px' : void 0,
              }),
              children: [
                i.jsx(c('StoriesCreateBackground.react'), {}),
                i.jsx(c('StoriesCreateDominantColorBg.react'), {
                  frameWidth: R,
                  rounded: X,
                }),
                i.jsx(c('CometComponentWithKeyCommands.react'), {
                  commandConfigs: b,
                  xstyle: n.imageContainer,
                  children: i.jsx('div', {
                    className: 'x5yr21d x10l6tqk',
                    onFocus: function (a) {
                      a.preventDefault(), a.target.focus({ preventScroll: !0 });
                    },
                    onMouseDown: function (a) {
                      a.preventDefault();
                    },
                    onWheel: function (a) {
                      u &&
                        V(
                          Math.min(
                            Math.max(r - a.deltaY / da, H.current),
                            F.current,
                          ),
                        );
                    },
                    style: {
                      transform:
                        'translate(calc(' +
                        ha +
                        ' + ' +
                        T +
                        'px), calc(-50% + ' +
                        U +
                        'px)) rotate(' +
                        q +
                        'deg) scale(' +
                        r +
                        ')',
                    },
                    children: i.jsx(c('CometPressable.react'), {
                      'aria-label': aa._('__JHASH__T6Lkg0pTrbK__JHASH__'),
                      disabled: !s,
                      onFocusIn: function (a) {
                        a.target.focus({ preventScroll: !0 }), v(!0);
                      },
                      onFocusOut: function () {
                        fa();
                      },
                      onPressIn: function (a) {
                        v(!0), ga(a);
                      },
                      overlayDisabled: !0,
                      ref: E,
                      xstyle: [n.pressable, h ? n.rotationCursor : {}],
                      children: i.jsx(
                        c('StoriesCreatePhotoPreviewItem.react'),
                        {
                          attachment: o,
                          frameWidth: R,
                          onError: P,
                          onLoad: y,
                          ref: K,
                          xstyle: W ? n.imageRTL : n.image,
                        },
                      ),
                    }),
                  }),
                }),
                i.jsx(c('StoriesCreatePhotoPreviewFrame.react'), {
                  frameWidth: R,
                  ref: J,
                  rounded: X,
                }),
                i.jsx(c('StoriesCreatePreviewCTA.react'), {
                  ctaType: e.ctaType,
                }),
              ],
            }),
            i.jsx('div', {
              className:
                'x15cqagf x1ey2m1c x78zum5 xl56j7k x10l6tqk xh8yej3 x18ivbjn',
              ref: t,
              style: { height: N + 'px' },
              children: $,
            }),
            i.jsxs('div', {
              className:
                'x10l6tqk' +
                ((M ? ' x18l40ae x6ikm8r x10wlt62' : '' + (M ? '' : '')) +
                  (M ? '' : ' x47corl')),
              onMouseDown: function (a) {
                if (!M) return;
                a.preventDefault();
                a.stopPropagation();
              },
              style: babelHelpers['extends']({}, Z, { width: R + 'px' }),
              children: [
                p != null &&
                  i.jsxs('div', {
                    className: 'x5yr21d x10l6tqk xh8yej3',
                    ref: p,
                    children: [
                      i.jsx(
                        c('StoriesCreateTextOverlayEntrypointContainer.react'),
                        { textOverlays: a },
                      ),
                      I != null &&
                        i.jsx(c('CometPlaceholder.react'), {
                          fallback: null,
                          children: i.jsx(I, {}),
                        }),
                    ],
                  }),
                i.jsx('div', {
                  className:
                    'x5yr21d x1snv3wq xf8nmdv x18ooxip xyme5hm x47corl x10l6tqk xtzzx4i xh8yej3' +
                    (W ? ' xitnhlw' : ' xuuh30'),
                  style: {
                    borderLeft: Q + 'px ' + Y,
                    borderRight: Q + 'px ' + Y,
                    borderTop: O + 'px ' + Y,
                    top: '-' + O + 'px',
                  },
                }),
              ],
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = c('withStoriesCreateViewStatePart')(a, function (a) {
      var b;
      return {
        composerSessionID: a.composerSessionID,
        ctaLinkData: a.ctaLinkData,
        displayedURI: (b = a.photoData) == null ? void 0 : b.displayedURI,
        isObjectRotating: a.isObjectRotating,
        mediaAttachment: (b = a.mediaAttachments) == null ? void 0 : b[0],
        overlayRef: a == null ? void 0 : a.overlayRef,
        rotation:
          (b = (b = a.photoData) == null ? void 0 : b.rotation) != null ? b : 0,
        scale:
          (b = (b = a.photoData) == null ? void 0 : b.scale) != null ? b : 1,
        stickerData: a.stickerData,
        textOverlays: a.textOverlays,
      };
    });
    g['default'] = e;
  },
  98,
);
