/*FB_PKG_DELIM*/

__d(
  'useCometFeedStoryMatchDebugger_iCometStorySection.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'useCometFeedStoryMatchDebugger_iCometStorySection',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: '__typename',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'is_prod_eligible',
          storageKey: null,
        },
      ],
      type: 'ICometStorySection',
      abstractKey: '__isICometStorySection',
    };
    e.exports = a;
  },
  null,
);
__d(
  'CometStickerPickerFlyoutTagSelectorRootQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '6992742624133199';
  },
  null,
);
__d(
  'CometStickerPickerFlyoutTagSelectorRootQuery$Parameters',
  ['CometStickerPickerFlyoutTagSelectorRootQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'CometStickerPickerFlyoutTagSelectorRootQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'CometStickerPickerFlyoutTagSelectorRootQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'fbs',
  ['fbt', 'invariant', 'FbtHooks', 'FbtPureStringResult'],
  function (a, b, c, d, e, f, g, h) {
    var i;
    a = babelHelpers['extends']({}, g, {
      _param: function (a, c, d) {
        typeof c === 'string' ||
          c instanceof b('FbtPureStringResult') ||
          h(0, 11709, c, typeof c);
        return g._param(a, c, d);
      },
      _plural: function (a, c, d) {
        d == null ||
          typeof d === 'string' ||
          d instanceof b('FbtPureStringResult') ||
          h(0, 47119, d, typeof d);
        return g._plural(a, c, d);
      },
      _wrapContent: function (a, c, d, e) {
        a = typeof a === 'string' ? [a] : a;
        var f = (i || (i = b('FbtHooks'))).getErrorListener({
          hash: d,
          translation: c,
        });
        return i.getFbsResult({
          contents: a,
          errorListener: f,
          extraOptions: e,
          patternHash: d,
          patternString: c,
        });
      },
    });
    e.exports = a;
  },
  null,
);
__d(
  'formatNumber',
  ['fbs', 'intlNumUtils'],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, c) {
      return b('intlNumUtils').formatNumber(a, c);
    }
    function g(a, c) {
      return b('fbs')._('__JHASH__oBPxAL9lb2h__JHASH__', [
        b('fbs')._param(
          'number',
          b('intlNumUtils').formatNumberWithThousandDelimiters(a, c),
          [0, a],
        ),
      ]);
    }
    function h(a, c) {
      return b('fbs')._('__JHASH__Xc6CViRxW4H__JHASH__', [
        b('fbs')._param(
          'number',
          b('intlNumUtils').formatNumberWithThousandDelimiters(a, c),
          [0, a],
        ),
      ]);
    }
    function c(a, c, d) {
      return a > c
        ? g(c, d)
        : b('intlNumUtils').formatNumberWithThousandDelimiters(a, d);
    }
    function d(a, c, d) {
      return a < c
        ? h(c, d)
        : b('intlNumUtils').formatNumberWithThousandDelimiters(a, d);
    }
    a.withThousandDelimiters =
      b('intlNumUtils').formatNumberWithThousandDelimiters;
    a.withMaxLimit = c;
    a.withMinLimit = d;
    e.exports = a;
  },
  null,
);
__d(
  'CometNumber.react',
  ['formatNumber', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    function a(a) {
      var b = a.decimals;
      a = a.number;
      return c('formatNumber').withThousandDelimiters(a, b);
    }
    e = b.memo(a);
    g['default'] = e;
  },
  98,
);
__d(
  'CometFeedStoryElementRefContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({ current: null });
    g['default'] = b;
  },
  98,
);
__d(
  'CometFeedStoryMatchDebuggerDispatcherContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = {};
    c = { add: function (a) {}, remove: function (a) {} };
    e = a.createContext(c);
    g['default'] = e;
  },
  98,
);
__d(
  'CometFeedUnitIsFocusedStoryViewContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext(!1);
    g['default'] = b;
  },
  98,
);
__d(
  'useCometFeedStoryMatchDebugger',
  [
    'CometFeedStoryMatchDebuggerDispatcherContext',
    'CometRelay',
    'react',
    'useCometFeedStoryMatchDebugger_iCometStorySection.graphql',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    e = d('react');
    var i = e.useContext,
      j = e.useEffect;
    function a(a) {
      a = d('CometRelay').useFragment(
        h !== void 0
          ? h
          : (h = b(
              'useCometFeedStoryMatchDebugger_iCometStorySection.graphql',
            )),
        a,
      );
      var e = a.__typename,
        f = a.is_prod_eligible,
        g = i(c('CometFeedStoryMatchDebuggerDispatcherContext'));
      j(
        function () {
          if (e != null && f === !1) {
            g.add(e);
            return function () {
              g.remove(e);
            };
          }
        },
        [g, f, e],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometFeedStoryRenderLocationContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({ storyRenderLocation: null });
    g['default'] = b;
  },
  98,
);
__d(
  'useThrottledComet',
  ['CometThrottle', 'react', 'useLayoutEffect_SAFE_FOR_SSR', 'useStable'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useEffect,
      i = b.useRef;
    function a(a, b) {
      b === void 0 && (b = 100);
      var d = i(a);
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          d.current = a;
        },
        [a],
      );
      var e = c('useStable')(function () {
        return c('CometThrottle')(function () {
          var a = arguments;
          return d.current == null ? void 0 : d.current.apply(d, a);
        }, b);
      });
      h(function () {
        return function () {
          e.cancel();
        };
      }, []);
      return e;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometStickerPickerFlyoutTagSelectorRoot.entrypoint',
  [
    'CometStickerPickerFlyoutTagSelectorRootQuery$Parameters',
    'JSResourceForInteraction',
    'WebPixelRatio',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        var b = a.count;
        a = a.cursor;
        return {
          queries: {
            flyoutTagsQueryReference: {
              parameters: c(
                'CometStickerPickerFlyoutTagSelectorRootQuery$Parameters',
              ),
              variables: {
                count: b,
                cursor: a,
                scale: d('WebPixelRatio').get(),
              },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'CometStickerPickerFlyoutTagSelectorRoot.react',
      ).__setRef('CometStickerPickerFlyoutTagSelectorRoot.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'CometGroupFeedOptimizeStructureContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext(!1);
    g['default'] = b;
  },
  98,
);
__d(
  'CometLoggedOutVideoUnitSEOContext.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useMemo,
      j = b.useState,
      k = h.createContext({
        cometLoggedOutVideoUnitSEOContext: { enableFeedVideoAnchorText: !1 },
        setCometLoggedOutVideoUnitSEOContext: function () {},
      });
    function a(a) {
      a = a.children;
      var b = j({ enableFeedVideoAnchorText: !1 }),
        c = b[0],
        d = b[1];
      b = i(
        function () {
          return {
            cometLoggedOutVideoUnitSEOContext: c,
            setCometLoggedOutVideoUnitSEOContext: d,
          };
        },
        [c, d],
      );
      return h.jsx(k.Provider, { value: b, children: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g.CometLoggedOutVideoUnitSEOContext = k;
    g.CometLoggedOutVideoUnitSEOContextProvider = a;
  },
  98,
);
__d(
  'CometWhiteTextColorEntityRenderer',
  ['CometLink.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    a = function (a) {
      return h.jsx(c('CometLink.react'), { color: 'white', children: a });
    };
    g['default'] = a;
  },
  98,
);
__d(
  'CometUFIAutoMentionReplyConfigContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({ autoMentionReplyConfig: null });
    g['default'] = b;
  },
  98,
);
__d(
  'CometUFICommentListComposerContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({
      focusedComposerID: null,
      setFocusedComposerID: null,
    });
    g['default'] = b;
  },
  98,
);
__d(
  'CometUFICommentScrollOptionsContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = { behavior: 'smooth', verticalAlign: 'center' };
    c = a.createContext({
      scrollAnchorOptions: babelHelpers['extends']({}, b),
      scrollIntoViewOptions: babelHelpers['extends']({}, b),
    });
    g['default'] = c;
  },
  98,
);
__d(
  'CometUFIConversationGuideContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({
      addGiphyStickerToComposer: function () {},
      addStickerToComposer: function () {},
      getIsComposerEmpty: function () {
        return !1;
      },
      onComposerEmptyStateChange: function () {},
      setAddGiphyStickerToComposer: function () {},
      setAddStickerToComposer: function () {},
      setGetIsComposerEmpty: function () {},
      setOnComposerEmptyStateChange: function () {},
      setWriteToComposer: function () {},
      unsetAddGiphyStickerToComposer: function () {},
      unsetAddStickerToComposer: function () {},
      unsetOnComposerEmptyStateChange: function () {},
      unsetWriteToComposer: function () {},
      writeToComposer: function () {},
    });
    g['default'] = b;
  },
  98,
);
__d(
  'CometUFISummaryBarLabel.react',
  ['cr:4140', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var c = a.color;
      c = c === void 0 ? 'secondary' : c;
      var d = a.count,
        e = a.icon,
        f = a.label,
        g = a.reducedCount;
      a = a.textType;
      a = a === void 0 ? 'body3' : a;
      return h.jsx(b('cr:4140'), {
        color: c,
        count: d,
        icon: e,
        label: f,
        reducedCount: g,
        textType: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometUFICommentAPIContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({ hasScenario: !1 });
    g.CometUFICommentAPIContext = b;
  },
  98,
);
__d(
  'CometUFIComposerPreviewArea.react',
  [
    'ix',
    'TetraCircleButton.react',
    'fbicon',
    'react',
    'useTriggerAccessibilityAlert',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useCallback;
    function a(a) {
      var b = a.children,
        e = a.isDisabled,
        f = a.label,
        g = a.onRemove,
        k = a.removeAnnouncement,
        l = a.testid;
      l = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'isDisabled',
        'label',
        'onRemove',
        'removeAnnouncement',
        'testid',
      ]);
      var m = c('useTriggerAccessibilityAlert')();
      a = j(
        function () {
          g(), k != null && m(k);
        },
        [g, k, m],
      );
      return i.jsxs(
        'div',
        babelHelpers['extends']({}, l, {
          className:
            'x1qjc9v5 x2bj2ny x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1q0g3np x1iyjqo2 xs83m0k x1qughib xat24cr x11i5rnm x1mh8g0r x1xmf6yo x16suv20 xeuugli x4uap5 xkhd6sd x1y1aw1k xwib8y2 x1n2onr6 x1ja2u2z',
          'data-testid': void 0,
          children: [
            i.jsx('div', {
              className: 'x1iyjqo2 xurb0ha x1sxyh0 xh8yej3',
              children: b,
            }),
            i.jsx('div', {
              className: 'x1sxyh0',
              children: i.jsx(c('TetraCircleButton.react'), {
                disabled: e,
                icon: d('fbicon')._(h('478231'), 12),
                label: f,
                onPress: a,
                size: 24,
                testid: void 0,
              }),
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
  'CometUFIReparentedCommentIDsContext.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    c = b.createContext;
    var i = b.useCallback,
      j = b.useMemo,
      k = b.useState,
      l = c({
        addReparentedCommentIds: function () {},
        reparentedToDeletedCommentsMap: new Map(),
      });
    function a(a) {
      a = a.children;
      var b = k(new Map()),
        c = b[0],
        d = b[1],
        e = i(function (a) {
          d(function (b) {
            a.forEach(function (a, c) {
              b.set(c, a);
            });
            return b;
          });
        }, []);
      b = j(
        function () {
          return {
            addReparentedCommentIds: e,
            reparentedToDeletedCommentsMap: c,
          };
        },
        [c, e],
      );
      return h.jsx(l.Provider, { value: b, children: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g.CometUFIReparentedCommentIDsContext = l;
    g.CometUFIReparentedCommentIDsContextProvider = a;
  },
  98,
);
__d(
  'CometFeedStoryContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = d('react').useContext,
      i = b.createContext(Object.freeze({}));
    function a() {
      return h(i);
    }
    g.CometFeedStoryContext = i;
    g.useCometFeedStoryContext = a;
  },
  98,
);
__d(
  'CometUFISharePopoverContext.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react').createContext;
    b = a({ ufiSharePopoverRef: { current: null } });
    g['default'] = b;
  },
  98,
);
__d(
  'NumberFormat',
  ['NumberFormatConfig', 'intlNumUtils'],
  function (a, b, c, d, e, f, g) {
    var h = /(\d{3})(?=\d)/g;
    function i(a) {
      return ('' + a).split('').reverse().join('');
    }
    function a(a, b) {
      if (
        Math.abs(a).toString().length <
        c('NumberFormatConfig').minDigitsForThousandsSeparator
      )
        return a.toString();
      a = i('' + a);
      return i(a.replace(h, '$1' + b));
    }
    function b(a) {
      return d('intlNumUtils').formatNumberWithThousandDelimiters(a);
    }
    g.formatIntegerWithDelimiter = a;
    g.formatInteger = b;
  },
  98,
);
__d(
  'useThrottledImpl',
  ['cr:1708227'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    g['default'] = b('cr:1708227');
  },
  98,
);
__d(
  'useThrottled',
  ['useThrottledImpl'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    f.exports = c('useThrottledImpl');
  },
  34,
);
__d(
  'filterMap',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      var c = new Map();
      for (
        var a = a,
          d = Array.isArray(a),
          e = 0,
          a = d
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var f;
        if (d) {
          if (e >= a.length) break;
          f = a[e++];
        } else {
          e = a.next();
          if (e.done) break;
          f = e.value;
        }
        f = f;
        var g = f[0];
        f = f[1];
        b(f, g) && c.set(g, f);
      }
      return c;
    }
    f['default'] = a;
  },
  66,
);
__d(
  'PageGreenDotImpressionFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('166');
    c = b('FalcoLoggerInternal').create('page_green_dot_impression', a);
    e.exports = c;
  },
  null,
);
__d(
  'CometProfileSwitcherDialogEntrypointWrapperQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5698796540233613';
  },
  null,
); /*FB_PKG_DELIM*/
__d(
  'StoriesRatioBox.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.children,
        c = a.height;
      a = a.width;
      c = (c / a) * 100;
      return h.jsx('div', {
        className:
          'x1lq5wgf xgqcy7u x30kzoy x9jhf4c xqtp20y x6ikm8r x10wlt62 x1n2onr6 xh8yej3',
        style: { paddingTop: c + '%' },
        children: h.jsx('div', {
          className: 'x1ey2m1c xds687c x10l6tqk x17qophe x13vifvy',
          children: b,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesEnums',
  ['$InternalEnum'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      CUSTOM: 'CUSTOM',
      FRIENDS: 'FRIENDS',
      PUBLIC: 'PUBLIC',
      UNSET: 'UNSET',
    };
    c = { BLACK: 'black', DEFAULT: 'default' };
    d = {
      FRIEND_BUCKET: 'FRIEND_BUCKET',
      SELF_BUCKET: 'SELF_BUCKET',
      UNSELECTED: 'UNSELECTED',
    };
    e = {
      BL_TR: 'BL_TR',
      BOTTOM_TOP: 'BOTTOM_TOP',
      BR_TL: 'BR_TL',
      LEFT_RIGHT: 'LEFT_RIGHT',
      RIGHT_LEFT: 'RIGHT_LEFT',
      TL_BR: 'TL_BR',
      TOP_BOTTOM: 'TOP_BOTTOM',
      TR_BL: 'TR_BL',
    };
    var g = {
        ANGER: '\ud83d\ude21',
        HAHA: '\ud83d\ude06',
        LIKE: '\ud83d\udc4d',
        LOVE: '\u2764\ufe0f',
        SORRY: '\ud83d\ude22',
        SUPPORT: '\ud83e\udd17',
        WOW: '\ud83d\ude2e',
      },
      h = {
        NEXT_BUCKET: 'next-bucket',
        NEXT_CARD: 'next-card',
        PREV_BUCKET: 'prev-bucket',
        PREV_CARD: 'prev-card',
        STAY_HERE: 'stay_here',
      },
      i = {
        AVAILABLE_WIDTH_RATIO: (240 - 2 * 12) / 240,
        BACKGROUND_COLOR_BLUE: '#79A6FF',
        BACOGROUND_COLOR_SLATE: '#EAEFF2',
        CHILD_PADDING_RATIO: 0.05,
        DEFAULT_OPTION_WIDTH_RATIO: 0.5,
        FIVE_OPTION_STAR_RATING: 'FIVE_OPTION_STAR_RATING',
        IG_LEFT_TEXT_COLOR: '#13bda6',
        IG_RIGHT_TEXT_COLOR: '#F36B7F',
        IG_TWO_OPTION_COMBINED: 'IG_TWO_OPTION_COMBINED',
        MINIMUM_LABEL_WIDTH_RATIO: 0.31,
        OVERFLOW_CHILD_PADDING_RATIO: 20 / 240,
        TEXT_BIG_HEIGHT_RATIO: 40 / 72,
        TEXT_BIG_MAX_FONT_SIZE_RATIO: 30 / 240,
        TEXT_BIG_MIN_FONT_SIZE_RATIO: 20 / 240,
        TEXT_BIG_RATIO: 40 / 240,
        TEXT_COLOR_GREY: '#5F6673',
        TEXT_ONLY_FONT_SIZE_RATIO: 20 / 240,
        TEXT_SMALL_HEIGHT_RATIO: 25 / 72,
        TEXT_SMALL_MAX_FONT_SIZE_RATIO: 20 / 240,
        TEXT_SMALL_MIN_FONT_SIZE_RATIO: 12 / 240,
        TEXT_SMALL_RATIO: 25 / 240,
        TEXT_WITH_PERCENT_FONT_SIZE_RATIO: 12 / 240,
        TWO_OPTION_COMBINED: 'TWO_OPTION_COMBINED',
        VOTE_COUNT_FONT_SIZE_RATIO: 32 / 240,
        VOTE_OPTION_MAX_WIDTH_RATIO: 0.75,
      },
      j = { THREE_COLUMN: 'THREE_COLUMN', TWO_COLUMN: 'TWO_COLUMN' },
      k = { OTHER: 'OTHER', OWNED_SELF: 'OWNED_SELF' },
      l = {
        DELETE: 'DELETE',
        DELETE_STORY_AND_BLOCK_MEMBER: 'DELETE_STORY_AND_BLOCK_MEMBER',
        MUTE_CARD_OWNER: 'MUTE_CARD_OWNER',
        REPORT_TO_GROUP_ADMINS: 'REPORT_TO_GROUP_ADMINS',
        TOGGLE_COMMENT: 'TOGGLE_COMMENT',
        UNFOLLOW_PAGE: 'UNFOLLOW_PAGE',
      },
      m = {
        ADMINED_ADDITIONAL_PROFILE_STORY: 'ADMINED_ADDITIONAL_PROFILE_STORY',
        ARCHIVED_STORY: 'ARCHIVED_STORY',
        BIRTHDAY_STORY: 'BIRTHDAY_STORY',
        CREW_STORY: 'CREW_STORY',
        EVENT_STORY: 'EVENT_STORY',
        GOODWILL_GENERATED_STORY: 'GOODWILL_GENERATED_STORY',
        GOODWILL_STORY: 'GOODWILL_STORY',
        GROUP_STORY: 'GROUP_STORY',
        HIGHLIGHTED_STORY: 'HIGHLIGHTED_STORY',
        LIVE_STORY: 'LIVE_STORY',
        M_GROUP_STORY: 'M_GROUP_STORY',
        NULL_STATE_STORY: 'NULL_STATE_STORY',
        PAGE_STORY: 'PAGE_STORY',
        PROFILE_PLUS_STORY: 'PROFILE_PLUS_STORY',
        PROMOTION_STORY: 'PROMOTION_STORY',
        SHARED_PAGE_STORY: 'SHARED_PAGE_STORY',
        STORY: 'STORY',
        TOPIC_STORY: 'TOPIC_STORY',
        UNKNOWN: 'UNKNOWN',
        WAS_LIVE: 'WAS_LIVE',
      },
      n = { PHOTO: 'Photo', VIDEO: 'Video' },
      o = {
        EXTERNAL_SONG: 'StoryOverlayExternalSong',
        INTERACTIVE_STICKER: 'StoryOverlayReactionSticker',
        LINK_STICKER: 'StoryOverlayLinkSticker',
        LIVE_VIDEO: 'StoryOverlayLiveVideo',
        POLL_STICKER: 'StoryOverlayPollSticker',
        PRODUCT_STICKER: 'StoryOverlayProductSticker',
        RESHARED_CONTENT: 'StoryOverlayResharedContent',
        RESHARED_POST: 'StoryOverlayResharedPost',
        TAG_STICKER: 'StoryOverlayTagSticker',
      },
      p = { ANIMATIONS_INTERVAL_THROTTLE: 300, HOLD_DELAY: 1e3 },
      q = {
        LOCATION: 'LOCATION',
        PAGE: 'PAGE',
        PEOPLE: 'PEOPLE',
        PRODUCT: 'PRODUCT',
      },
      r = {
        DARK_MODE: 'dark_mode',
        DARK15: 'dark_15',
        DARK30: 'dark_30',
        DEFAULT: 'default',
      },
      s = { DEFAULT: 'default', SLIDE_UP: 'slide_up' },
      t = {
        PAGE_TRANSITION: 'PAGE_TRANSITION',
        USER: 'USER',
        USER_TRANSITION: 'USER_TRANSITION',
      },
      u = { JUST_VOTED: 'JUST_VOTED', RESULTS: 'RESULTS', VOTING: 'VOTING' };
    b = b('$InternalEnum').Mirrored(['ARCHIVE', 'MUTED', 'PRIVACY']);
    f.AUDIENCE_TYPES = a;
    f.BACKGROUND_STYLE = c;
    f.EMPTY_BUCKET_TYPES = d;
    f.GRADIENT_DIRECTION = e;
    f.LIGHTWEIGHT_REACTION_UNICODES = g;
    f.NAV_DIRECTIONS = h;
    f.POLL_STICKER = i;
    f.RECTANGULAR_TILE_TYPES = j;
    f.STORIES_BUCKETS_INDEXER_TYPES = k;
    f.STORIES_OPTION_TYPES = l;
    f.STORY_CARD_TYPES = m;
    f.STORY_MEDIA_TYPES = n;
    f.STORY_OVERLAY_TYPES = o;
    f.STORY_REACTION_STICKERS_CONSTANTS = p;
    f.TAG_STICKER_TYPES = q;
    f.VIEWER_THEME = r;
    f.VIEWERSHEET_ANIMATION = s;
    f.VIEWERSHEET_STYLE = t;
    f.VOTING_PHASES = u;
    f.StoriesSettingsTabs = b;
  },
  66,
);
__d(
  'StoriesLoggingConstants',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      ACTION_SOURCE: {
        ARCHIVE: 'archive',
        FACEBOOK_CHAT_TAB: 'facebook_chat_tab',
        MESSENGER_DOT_COM: 'messenger_dot_com',
        NOTIFICATION: 'notification',
        PAGE_PROFILE: 'page_profile',
        POST_HEADER: 'post_header_actor_photo',
        STORIES_HOME: 'stories_home',
        THINGS_YOU_SHOULD_DO: 'things_you_should_do',
        TODAY_IN: 'today_in',
        TRAY: 'story_tray',
        UNKNOWN: 'unknown',
        VIEWER: 'viewer',
      },
      ACTION_TYPE: {
        CLICK_EMOJI_REPLY_BUTTON: 'click_emoji_reply_button',
        CLICK_GIF_REPLY_BUTTON: 'click_gif_reply_button',
        CLICK_STICKER_REPLY_BUTTON: 'click_sticker_reply_button',
        CLOSE_STORY: 'close_story',
        COMMENT_ADD_ATTEMPTED: 'comment_add_attempted',
        COMMENT_BUTTON_IMPRESSION: 'comment_button_impression',
        COMMENT_CARD_IMPRESSION: 'comment_card_impression',
        DELETE_MEDIA: 'delete_media_attempted',
        OPEN_LINK: 'open_link',
        OPEN_MEDIA: 'open_media',
        OPEN_SEEN_SUMMARY: 'open_seen_summary',
        OPEN_STORY: 'open_story',
        PAUSE_STORY: 'pause_story',
        REACTION_STICKER_INTERACTED: 'reaction_sticker_interacted',
        REPLY_ATTEMPT_COMPLETED: 'reply_attempt_completed',
        REPLY_SENT_WHEN_SMART_REPLY_SHOWN: 'reply_sent_when_smart_reply_shown',
        SEND_REPLY_ATTEMPT: 'attempt_to_send_reply',
        SEND_STORY_FAILED: 'send_story_failed',
        SEND_STORY_SUCCEEDED: 'send_story_succeed',
        SMART_REPLY_IMPRESSION: 'smart_reply_impression',
        SMART_REPLY_TAP: 'smart_reply_tap',
        STORY_MEDIA_VIEW: 'story_media_view',
        STORY_NAVIGATION: 'story_navigation',
        TRAY_LOAD: 'story_tray_load',
        UNPAUSE_STORY: 'unpause_story',
        VISIT_PAGE: 'fb_stories_visit_page',
      },
      CLOSE_STORY_GESTURE: {
        AUTO_EXIT: 'auto_exit',
        BACK_BUTTON_EXIT: 'back_button_exit',
        BLUR_BACKGROUND: 'blur_background',
        CLOSE_BUTTON_EXIT: 'close_button_exit',
        KEYBOARD_EXIT: 'keyboard_exit',
      },
      COMMENT_TRIGGER_SOURCE: {
        NOTIFICATION_STORY_UFI: 'notification_story_ufi',
        STORY_UFI_BUTTON: 'story_ufi_button',
        STORY_UFI_COMMENT_PREVIEW: 'story_ufi_comment_preview',
      },
      FB_STORIES_IMPRESSION: 75,
      FB_STORIES_TIMESPENT: 76,
      IMPRESSION_DEDUPLICATION_TIME: 6e4,
      LIVE_IN_STORIES_EVENTS: {
        STORY_LIVE_PAGE_CTA_IMPRESSION: 'story_live_page_cta_impression',
        STORY_LIVE_PAGE_CTA_TAP: 'story_live_page_cta_tap',
        STORY_LIVE_PROFILE_CTA_IMPRESSION: 'story_live_profile_cta_impression',
        STORY_LIVE_PROFILE_CTA_TAP: 'story_live_profile_cta_tap',
        STORY_LIVE_STICKER_IMPRESSION: 'story_live_sticker_impression',
        STORY_LIVE_STICKER_TAP: 'story_live_sticker_tap',
        STORY_LIVE_TRAY_DROPDOWN_CLICK: 'story_live_tray_dropdown_click',
        STORY_LIVE_TRAY_DROPDOWN_IMPRESSION:
          'story_live_tray_dropdown_impression',
        STORY_LIVE_VIEWER_DROPDOWN_CLICK: 'story_live_viewer_dropdown_click',
        STORY_LIVE_VIEWER_DROPDOWN_IMPRESSION:
          'story_live_viewer_dropdown_impression',
      },
      NAVIGATION_GESTURE: {
        AUTO_JUMP: 'auto_jump',
        NAVIGATE_AWAY: 'navigate_away',
        SWIPE_LEFT: 'swipe_left',
        SWIPE_RIGHT: 'swipe_right',
        TAP_BACKWARD: 'tap_backward',
        TAP_FORWARD: 'tap_forward',
        VIEWER_SHEET: 'viewer_sheet',
      },
      STORY_REPLY_TYPE: {
        STICKER: 'Sticker',
        TEXT_SUGGESTION: 'TextSuggestion',
      },
      STORY_TYPE: {
        EVENT_STORY: 'event',
        FOLLOWEE_STORY: 'followee',
        FRIEND_STORY: 'friend',
        GROUP_STORY: 'group',
        MISSING_STORY_DATA: 'missingStoryData',
        PAGE_STORY: 'page',
        SELF_STORY: 'self',
        STORY_PROMOTION: 'promotion',
      },
      TIMESPENT_MINIMUM_TIME: 500,
    };
    b = a;
    f['default'] = b;
  },
  66,
);
__d(
  'TopOfFeedLoggingContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({
      refreshTofuSessionID: function (a) {},
      tofuSessionID: null,
    });
    g['default'] = b;
  },
  98,
);
