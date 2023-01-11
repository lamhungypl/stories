/*FB_PKG_DELIM*/

__d(
  'VideoBlurBackgroundContainer_video.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'VideoBlurBackgroundContainer_video',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'VideoThumbnail',
          kind: 'LinkedField',
          name: 'preferred_thumbnail',
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'Image',
              kind: 'LinkedField',
              name: 'image',
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'uri',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: 'ScalarField',
              name: 'image_preview_payload',
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Video',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometBlurryImagePreview.react',
  [
    'getComputedStyle',
    'mergeRefs',
    'react',
    'useCometAriaID',
    'useCometUniqueID',
    'useLayoutEffect_SAFE_FOR_SSR',
    'useSetAttributeRef',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useMemo,
      j = b.useRef,
      k = b.useState;
    function a(a) {
      var b = a.alt,
        d = a.blur,
        e = a.height,
        f = a.previewData,
        g = a.width,
        l = babelHelpers.objectWithoutPropertiesLoose(a, [
          'alt',
          'blur',
          'height',
          'previewData',
          'width',
        ]);
      a = (a = a.style) != null ? a : {};
      var m = a.height,
        n = a.width;
      d = (a = d) != null ? a : 1.2;
      a = c('useCometUniqueID')();
      var o = c('useSetAttributeRef')('id', a),
        p = 'url(#' + a + ')',
        q = c('useSetAttributeRef')('filter', p),
        r = c('useCometAriaID')('aria-labelledby'),
        s = r[0],
        t = s[0];
      s = s[1];
      r = r[1];
      var u = r[0],
        v = r[1],
        w = j(null);
      r = i(
        function () {
          return b != null ? c('mergeRefs')(v, w) : w;
        },
        [b, v, w],
      );
      var x = k(e !== void 0 || m !== void 0 || g !== void 0 || n !== void 0),
        y = x[0],
        z = x[1];
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          var a = w.current;
          if (!(a instanceof SVGSVGElement)) return;
          if (e !== void 0 || m !== void 0 || g !== void 0 || n !== void 0) {
            z(!0);
            return;
          }
          var b = a.style.display,
            d = c('getComputedStyle')(a);
          a.style.display = 'none';
          z(
            d != null &&
              (d.height !== f.height + 'px' || d.width !== f.width + 'px'),
          );
          a.style.display = b;
        },
        [e, f.height, f.width, m, n, g],
      );
      return h.jsxs(
        'svg',
        babelHelpers['extends']({}, l, b != null ? u : null, {
          height: (x = e) != null ? x : y ? void 0 : f.height,
          preserveAspectRatio: 'none',
          ref: r,
          role: 'img',
          viewBox: '0 0 ' + f.width + ' ' + f.height,
          width: (l = g) != null ? l : y ? void 0 : f.width,
          xmlns: 'http://www.w3.org/2000/svg',
          xmlnsXlink: 'http://www.w3.org/1999/xlink',
          children: [
            b != null &&
              h.jsx(
                'title',
                babelHelpers['extends']({}, t, { ref: s, children: b }),
              ),
            h.jsxs('filter', {
              colorInterpolationFilters: 'sRGB',
              filterUnits: 'userSpaceOnUse',
              id: a,
              ref: o,
              suppressHydrationWarning: !0,
              children: [
                h.jsx('feGaussianBlur', {
                  edgeMode: 'duplicate',
                  stdDeviation: d,
                }),
                h.jsx('feComponentTransfer', {
                  children: h.jsx('feFuncA', {
                    tableValues: '1 1',
                    type: 'discrete',
                  }),
                }),
              ],
            }),
            h.jsx('image', {
              filter: p,
              height: f.height,
              ref: q,
              suppressHydrationWarning: !0,
              width: f.width,
              x: '0',
              xlinkHref: f.dataURI,
              y: '0',
            }),
          ],
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'FriendListCometCloseFriendsGating',
  ['qex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      return c('qex')._('195') && h();
    }
    function b() {
      return c('qex')._('151') && h();
    }
    function h() {
      return c('qex')._('834');
    }
    g.isPostToStoryEnabled = a;
    g.isStoriesConsumptionEnabled = b;
  },
  98,
);
__d(
  'StoriesCTAButton.react',
  ['CometPressable.react', 'CometTrackingNodeProvider.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.link,
        d = a.onClick;
      a = a.title;
      a = h.jsx('div', {
        className:
          'x1ru42tm x4afe7t x10e4vud x6s0dn4 x1ofb795 x14ctfv x78zum5 x6prxxf x1s688f x1vqgdyp xvq8zen xlyipyv xuxw1ft',
        children: a,
      });
      return h.jsx(c('CometTrackingNodeProvider.react'), {
        trackingNode: 86,
        children: h.jsx('div', {
          className:
            'x1ru42tm x4afe7t x10e4vud x1w4261f x105w4n0 x1dgrc15 xgawykw xmigq7r x1c66dkd xng0ele xs1r7wz xzxekdx x9f619 x6ikm8r x10wlt62 x14gfdix x14ya1hp x1vjfegm',
          children:
            b != null
              ? h.jsx(c('CometPressable.react'), {
                  hideHoverOverlay: !0,
                  linkProps: { target: '_blank', url: b },
                  onPress: d,
                  children: a,
                })
              : a,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesGradientBackground.react',
  ['StoriesEnums', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useEffect;
    function a(a) {
      var b = a.direction,
        c = a.from,
        e = a.onLoad;
      a = a.to;
      i(
        function () {
          e && e();
        },
        [e],
      );
      a = a;
      c = c;
      if (!(a != null && c != null)) return null;
      a = a != null ? a : c;
      c = c != null ? c : a;
      var f = '';
      switch (b) {
        case d('StoriesEnums').GRADIENT_DIRECTION.BL_TR:
        case d('StoriesEnums').GRADIENT_DIRECTION.TR_BL:
          f = '45deg';
          break;
        case d('StoriesEnums').GRADIENT_DIRECTION.LEFT_RIGHT:
        case d('StoriesEnums').GRADIENT_DIRECTION.RIGHT_LEFT:
          f = 'to right';
          break;
        case d('StoriesEnums').GRADIENT_DIRECTION.TL_BR:
        case d('StoriesEnums').GRADIENT_DIRECTION.BR_TL:
          f = '135deg';
          break;
        case d('StoriesEnums').GRADIENT_DIRECTION.TOP_BOTTOM:
        case d('StoriesEnums').GRADIENT_DIRECTION.BOTTOM_TOP:
          f = 'to bottom';
          break;
        default:
          f = '0deg';
      }
      b = {
        backgroundImage:
          'linear-gradient(' + f + ',' + c + ' 0%,' + a + ' 100%)',
      };
      return h.jsx('div', { className: 'x5yr21d xh8yej3', style: b });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'useStoriesShowEpdBlockToast',
  ['fbt', 'cometPushToast', 'useToasterStateManager'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a() {
      var a = c('useToasterStateManager')(),
        b = h._('__JHASH__YbdNdxe72vs__JHASH__');
      return function () {
        d('cometPushToast').cometPushErrorToast({ message: b }, void 0, a);
      };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesSuspensePauseContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = { isPaused: !1, setPause: function (a, b) {} };
    c = a.createContext(b);
    g['default'] = c;
  },
  98,
);
__d(
  'useStoriesSuspensePause',
  [
    'StoriesLoggerContext',
    'StoriesPauseReasons',
    'Visibility',
    'cr:809608',
    'react',
    'storiesViewerSuspenseEmitter',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    e = d('react');
    var h = e.useCallback,
      i = e.useContext,
      j = e.useEffect,
      k = e.useRef,
      l = e.useState;
    function a() {
      var a = l(!1),
        e = a[0],
        f = a[1];
      a = i(c('StoriesLoggerContext'));
      var g = a.logger,
        m = k({}),
        n = h(
          function (a, b) {
            if (a) (m.current[b] = !0), f(a), g.pauseLog(!0, b);
            else {
              if (
                b === d('StoriesPauseReasons').CARD_CHANGE &&
                (m.current[d('StoriesPauseReasons').VIEWER_SHEET_OVERLAY] ===
                  !0 ||
                  m.current[d('StoriesPauseReasons').COMMENTS_SHEET_OVERLAY] ===
                    !0)
              ) {
                if (
                  m.current[d('StoriesPauseReasons').VIEWER_SHEET_OVERLAY] ===
                  !0
                ) {
                  m.current =
                    ((a = {}),
                    (a[d('StoriesPauseReasons').VIEWER_SHEET_OVERLAY] = !0),
                    a);
                } else if (
                  m.current[d('StoriesPauseReasons').COMMENTS_SHEET_OVERLAY] ===
                  !0
                ) {
                  m.current =
                    ((a = {}),
                    (a[d('StoriesPauseReasons').COMMENTS_SHEET_OVERLAY] = !0),
                    a);
                }
              } else
                b === d('StoriesPauseReasons').CLICK_PAUSE_ICON ||
                b === d('StoriesPauseReasons').KEYBOARD ||
                b === d('StoriesPauseReasons').BUCKET_TRANSITION ||
                b === d('StoriesPauseReasons').CARD_CHANGE ||
                b === d('StoriesPauseReasons').VIEWER_SHEET_OVERLAY ||
                b === d('StoriesPauseReasons').BUCKET_REFRESH ||
                b === d('StoriesPauseReasons').COMMENTS_SHEET_OVERLAY
                  ? (m.current = {})
                  : delete m.current[b];
              Object.keys(m.current).length === 0 && (f(!1), g.pauseLog(!1, b));
            }
          },
          [g],
        );
      j(
        function () {
          return c('storiesViewerSuspenseEmitter').listenToPauseRequest(
            function () {
              return n.apply(void 0, arguments);
            },
          );
        },
        [n],
      );
      j(
        function () {
          if (b('cr:809608') == null) return;
          return b('cr:809608')({
            onJewelHidden: function () {
              n(!1, d('StoriesPauseReasons').JEWEL);
            },
            onJewelShown: function () {
              n(!0, d('StoriesPauseReasons').JEWEL);
            },
          });
        },
        [n],
      );
      j(
        function () {
          var a = [
            c('Visibility').addListener(c('Visibility').HIDDEN, function () {
              return n(!0, d('StoriesPauseReasons').VISIBILITY_CHANGE);
            }),
            c('Visibility').addListener(c('Visibility').VISIBLE, function () {
              return n(!1, d('StoriesPauseReasons').VISIBILITY_CHANGE);
            }),
          ];
          return function () {
            a.forEach(function (a) {
              return a.remove();
            });
          };
        },
        [n],
      );
      return [e, n];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesSuspensePauseContextProvider.react',
  ['StoriesSuspensePauseContext', 'react', 'useStoriesSuspensePause'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo;
    function a(a) {
      a = a.children;
      var b = c('useStoriesSuspensePause')(),
        d = b[0],
        e = b[1];
      b = i(
        function () {
          return { isPaused: d, setPause: e };
        },
        [d, e],
      );
      return h.jsx(c('StoriesSuspensePauseContext').Provider, {
        value: b,
        children: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'getPreviewDataFromImagePreviewPayload',
  ['FBLogger', 'unrecoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'data:image/jpeg;base64,',
      i = 160,
      j = 162,
      k = 42;
    function l(a, b) {
      b === void 0 && (b = 0);
      a = atob(a);
      if (a.length <= 3)
        throw c('unrecoverableViolation')(
          'The preview payload was ' +
            a.length +
            ' byte(s) long when it should be 4 or more. The first byte is the version, the second the width, and the third the height. The 4th byte and onward is the image data.',
          'comet_infra',
        );
      var d = new Uint8Array(a.length + b);
      for (var e = 0; e < a.length; e++) d[b + e] = a.charCodeAt(e);
      return d;
    }
    var m;
    function n() {
      m == null &&
        (m = l(
          '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA==',
        ));
      return m;
    }
    function a(a) {
      var b = n();
      try {
        a = l(a, b.length - 3);
        var d = a[b.length - 1],
          e = a[b.length - 3],
          f = a[b.length - 2];
        if (d > k)
          throw c('unrecoverableViolation')(
            'Tried to decode a payload whose height was ' +
              d +
              '. The maximum ' +
              ('is ' + k + '.'),
            'comet_infra',
          );
        if (f > k)
          throw c('unrecoverableViolation')(
            'Tried to decode a payload whose width was ' +
              f +
              '. The maximum ' +
              ('is ' + k + '.'),
            'comet_infra',
          );
        a.set(b, 0);
        a[i] = d;
        a[j] = f;
        b = btoa(String.fromCharCode.apply(null, a));
        return { dataURI: '' + h + b, height: d, width: f, version: e };
      } catch (b) {
        a = c('FBLogger')('images_infra');
        b instanceof Error && a.catching(b);
        a.warn(
          'Failed to decode a preview image payload. Falling back with a blank image.',
        );
        return null;
      }
    }
    g['default'] = a;
  },
  98,
);
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
__d(
  'CometWatchAndScrollTriggerContextProvider',
  ['CometWatchAndScrollTriggerContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo,
      k = b.useState;
    function a(a) {
      a = a.children;
      var b = i(c('CometWatchAndScrollTriggerContext')),
        d = k(b.isControlShown),
        e = d[0],
        f = d[1];
      d = k(b.isTriggerDisabled);
      var g = d[0],
        l = d[1];
      b = j(
        function () {
          return {
            isControlShown: e,
            isTriggerDisabled: g,
            setIsControlShown: f,
            setIsTriggerDisabled: l,
          };
        },
        [e, g],
      );
      return h.jsx(c('CometWatchAndScrollTriggerContext').Provider, {
        value: b,
        children: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'EmojiSpan.react',
  ['cx', 'FBEmojiResource', 'UnicodeUtils', 'react'],
  function (a, b, c, d, e, f, g, h) {
    var i = d('react');
    function a(a) {
      var b = a.children;
      a.contentState;
      var e = a.decoratedText,
        f = a.dir,
        g = a.offsetKey;
      a = a.size;
      var h = 0,
        j = e.length,
        k = [];
      while (h < j) {
        var l = d('UnicodeUtils').getUTF16Length(e, h);
        k.push(e.substr(h, l));
        h += l;
      }
      l = c('FBEmojiResource').fromCodepoints(k);
      h = l != null ? l.getImageURL(a) : null;
      return h != null
        ? i.jsx('span', {
            className: '_3gl1 _5zz4',
            'data-offset-key': g,
            'data-testid': void 0,
            dir: f,
            style: {
              backgroundImage: 'url(' + h + ')',
              backgroundSize: a + 'px ' + a + 'px',
              height: a,
              width: a,
            },
            children: i.jsx('span', { className: '_ncl', children: b }),
          })
        : i.jsx('span', { 'data-offset-key': g, children: e });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'WACommon.pb',
  ['WAProtoConst'],
  function (a, b, c, d, e, f, g) {
    a = { PLACEHOLDER: 0, NO_PLACEHOLDER: 1, IGNORE: 2 };
    b = babelHelpers['extends']({}, null);
    c = babelHelpers['extends']({}, null);
    e = babelHelpers['extends']({}, null);
    b.internalSpec = {
      remoteJid: [1, d('WAProtoConst').TYPES.STRING],
      fromMe: [2, d('WAProtoConst').TYPES.BOOL],
      id: [3, d('WAProtoConst').TYPES.STRING],
      participant: [4, d('WAProtoConst').TYPES.STRING],
    };
    c.internalSpec = {
      text: [1, d('WAProtoConst').TYPES.STRING],
      mentionedJid: [
        2,
        d('WAProtoConst').FLAGS.REPEATED | d('WAProtoConst').TYPES.STRING,
      ],
    };
    e.internalSpec = {
      payload: [1, d('WAProtoConst').TYPES.BYTES],
      version: [2, d('WAProtoConst').TYPES.INT32],
    };
    g.FUTURE_PROOF_BEHAVIOR = a;
    g.MessageKeySpec = b;
    g.MessageTextSpec = c;
    g.SubProtocolSpec = e;
  },
  98,
);
__d(
  'WAArmadilloXMA.pb',
  ['WACommon.pb', 'WAProtoConst'],
  function (a, b, c, d, e, f, g) {
    a = {
      INFO: 0,
      EYE_OFF: 1,
      NEWS_OFF: 2,
      WARNING: 3,
      PRIVATE: 4,
      NONE: 5,
      MEDIA_LABEL: 6,
      POST_COVER: 7,
      POST_LABEL: 8,
      WARNING_SCREENS: 9,
    };
    b = { OPEN_NATIVE: 11 };
    c = { SINGLE: 0, PORTRAIT: 3 };
    e = {
      IG_STORY_PHOTO_MENTION: 4,
      IG_SINGLE_IMAGE_POST_SHARE: 9,
      IG_MULTIPOST_SHARE: 10,
      IG_SINGLE_VIDEO_POST_SHARE: 11,
      IG_STORY_PHOTO_SHARE: 12,
      IG_STORY_VIDEO_SHARE: 13,
      IG_CLIPS_SHARE: 14,
      IG_IGTV_SHARE: 15,
      IG_SHOP_SHARE: 16,
      IG_PROFILE_SHARE: 19,
      IG_STORY_PHOTO_HIGHLIGHT_SHARE: 20,
      IG_STORY_VIDEO_HIGHLIGHT_SHARE: 21,
      IG_STORY_REPLY: 22,
      IG_STORY_REACTION: 23,
      IG_STORY_VIDEO_MENTION: 24,
      FB_FEED_SHARE: 1e3,
      FB_STORY_REPLY: 1001,
      FB_STORY_SHARE: 1002,
      FB_STORY_MENTION: 1003,
      FB_FEED_VIDEO_SHARE: 1004,
      FB_GAMING_CUSTOM_UPDATE: 1005,
      FB_PRODUCER_STORY_REPLY: 1006,
      MSG_EXTERNAL_LINK_SHARE: 2e3,
      RTC_AUDIO_CALL: 3e3,
      RTC_VIDEO_CALL: 3001,
      RTC_MISSED_AUDIO_CALL: 3002,
      RTC_MISSED_VIDEO_CALL: 3003,
      RTC_GROUP_AUDIO_CALL: 3004,
      RTC_GROUP_VIDEO_CALL: 3005,
    };
    f = babelHelpers['extends']({}, null);
    var h = babelHelpers['extends']({}, null);
    f.internalSpec = {
      associatedMessage: [
        1,
        d('WAProtoConst').TYPES.MESSAGE,
        d('WACommon.pb').SubProtocolSpec,
      ],
      targetType: [2, d('WAProtoConst').TYPES.ENUM, e],
      targetUsername: [3, d('WAProtoConst').TYPES.STRING],
      targetId: [4, d('WAProtoConst').TYPES.STRING],
      targetExpiringAtSec: [5, d('WAProtoConst').TYPES.INT64],
      xmaLayoutType: [6, d('WAProtoConst').TYPES.ENUM, c],
      ctas: [
        7,
        d('WAProtoConst').FLAGS.REPEATED | d('WAProtoConst').TYPES.MESSAGE,
        h,
      ],
      previews: [
        8,
        d('WAProtoConst').FLAGS.REPEATED | d('WAProtoConst').TYPES.MESSAGE,
        d('WACommon.pb').SubProtocolSpec,
      ],
      titleText: [9, d('WAProtoConst').TYPES.STRING],
      subtitleText: [10, d('WAProtoConst').TYPES.STRING],
      maxTitleNumOfLines: [11, d('WAProtoConst').TYPES.UINT32],
      maxSubtitleNumOfLines: [12, d('WAProtoConst').TYPES.UINT32],
      favicon: [
        13,
        d('WAProtoConst').TYPES.MESSAGE,
        d('WACommon.pb').SubProtocolSpec,
      ],
      headerImage: [
        14,
        d('WAProtoConst').TYPES.MESSAGE,
        d('WACommon.pb').SubProtocolSpec,
      ],
      headerTitle: [15, d('WAProtoConst').TYPES.STRING],
      overlayIconGlyph: [16, d('WAProtoConst').TYPES.ENUM, a],
      overlayTitle: [17, d('WAProtoConst').TYPES.STRING],
      overlayDescription: [18, d('WAProtoConst').TYPES.STRING],
      sentWithMessageId: [19, d('WAProtoConst').TYPES.STRING],
      messageText: [20, d('WAProtoConst').TYPES.STRING],
      headerSubtitle: [21, d('WAProtoConst').TYPES.STRING],
    };
    h.internalSpec = {
      buttonType: [1, d('WAProtoConst').TYPES.ENUM, b],
      title: [2, d('WAProtoConst').TYPES.STRING],
      actionUrl: [3, d('WAProtoConst').TYPES.STRING],
      nativeUrl: [4, d('WAProtoConst').TYPES.STRING],
    };
    g.EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH = a;
    g.EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE = b;
    g.EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE = c;
    g.EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE = e;
    g.ExtendedContentMessageSpec = f;
    g.ExtendedContentMessage$CTASpec = h;
  },
  98,
);
__d(
  'ProfileCometFeaturedHighlightsEditCollectionDialogQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '8607182012656054';
  },
  null,
);
