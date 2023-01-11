/*FB_PKG_DELIM*/

__d(
  'CometFocusGroupFirstLetterNavigation',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    var h = a.useEffect,
      i = a.useState,
      j = function (a) {
        return a.slice(0, 1).toLowerCase();
      };
    b = function (a) {
      var b = i(void 0),
        c = b[0],
        d = b[1];
      h(
        function () {
          var b;
          b =
            a == null ? void 0 : (b = a.current) == null ? void 0 : b.innerText;
          b != null && b !== '' && d(j(b));
        },
        [a],
      );
      return c;
    };
    c = function (a) {
      if (a.type === 'PRINT_CHAR') {
        a.event.stopPropagation();
        var b = a.event.key.toLowerCase();
        b = a.getItemByTag(b);
        b != null && a.focusItem(b);
      }
    };
    g.getFirstLetterNavigationTag = j;
    g.useFirstLetterNavigationTag = b;
    g.handleFirstLetterNavigation = c;
  },
  98,
);
__d(
  'CometMenuFocusGroup',
  [
    'fbt',
    'CometComponentWithKeyCommands.react',
    'CometKeys',
    'FocusGroup.react',
    'focusScopeQueries',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('FocusGroup.react').createFocusGroup(
      d('focusScopeQueries').tabbableScopeQuery,
    );
    var j = b[0];
    e = b[1];
    function a(a) {
      var b = [
        {
          command: { key: c('CometKeys').UP },
          description: h._('__JHASH__1VqMgLPpraa__JHASH__'),
          handler: function () {},
        },
        {
          command: { key: c('CometKeys').DOWN },
          description: h._('__JHASH__7zajSsSIBFZ__JHASH__'),
          handler: function () {},
        },
      ];
      return i.jsx(c('CometComponentWithKeyCommands.react'), {
        commandConfigs: b,
        children: i.jsx(j, babelHelpers['extends']({}, a)),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    d = { FocusGroup: a, FocusItem: e };
    g['default'] = d;
  },
  98,
);
__d(
  'CometMenuItemBaseRoleContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext(null);
    g['default'] = b;
  },
  98,
);
__d(
  'CometSeparatorMenuItem.react',
  ['CometMenuItemBaseRoleContext', 'react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = {
        separator: {
          borderTop: 'x1n2xptk',
          marginTop: 'x1gslohp',
          marginEnd: 'xktsk01',
          marginBottom: 'x12nagc',
          marginStart: 'x1d52u69',
          $$css: !0,
        },
      };
    function a(a, b) {
      a = a.xstyle;
      var d = i(c('CometMenuItemBaseRoleContext'));
      return h.jsx('div', {
        className: c('stylex')([j.separator, a]),
        ref: b,
        role: d === 'menuitem' ? 'separator' : 'presentation',
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
__d(
  'CometMenuBase.react',
  [
    'fbt',
    'ix',
    'BaseScrollableArea.react',
    'CometErrorBoundary.react',
    'CometFocusGroupFirstLetterNavigation',
    'CometListCellStrict.react',
    'CometMenuFocusGroup',
    'CometMenuItemBaseRoleContext',
    'CometSeparatorMenuItem.react',
    'FocusRegion.react',
    'TetraTextPairing.react',
    'fbicon',
    'focusScopeQueries',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = 145,
      l = {
        listItem: {
          borderTopStartRadius: 'x1lcm9me',
          borderTopEndRadius: 'x1yr5g0i',
          borderBottomEndRadius: 'xrt01vj',
          borderBottomStartRadius: 'x10y3i5r',
          display: 'x78zum5',
          flexDirection: 'x1q0g3np',
          marginTop: 'xdj266r',
          marginEnd: 'x1emribx',
          marginBottom: 'xat24cr',
          marginStart: 'x1i64zmx',
          paddingTop: 'xz9dl7a',
          paddingEnd: 'x1sxyh0',
          paddingBottom: 'xsag5q8',
          paddingStart: 'xurb0ha',
          $$css: !0,
        },
        root: {
          alignItems: 'x1qjc9v5',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          paddingStart: 'xkhd6sd',
          paddingEnd: 'x4uap5',
          paddingTop: 'x1ten1a2',
          paddingBottom: 'xz7cn9q',
          $$css: !0,
        },
        sizeFull: { marginEnd: 'xzy4u6w', width: 'xh8yej3', $$css: !0 },
        sizeNormal: { width: 'x168biu4', $$css: !0 },
        sizeSmall: { width: 'xi55695', $$css: !0 },
      },
      m = 'menu',
      n = { listbox: 'option', menu: 'menuitem' };
    function a(a) {
      var b = a.children,
        e = a.footer,
        f = a.header,
        g = a.maxHeight,
        o = a.role;
      o = o === void 0 ? m : o;
      a = a.size;
      a = a === void 0 ? 'normal' : a;
      var p = 0,
        q = j.Children.toArray(b).map(function (a) {
          if (a == null) return null;
          var b = p++;
          return a.type === c('CometSeparatorMenuItem.react')
            ? a
            : j.jsx(c('CometErrorBoundary.react'), { children: a }, b);
        });
      o = n[o];
      return j.Children.count(b) > 0
        ? j.jsx(c('BaseScrollableArea.react'), {
            horizontal: !1,
            style: g != null ? { maxHeight: Math.max(g, k) } : void 0,
            vertical: !0,
            xstyle: [
              l.root,
              a === 'full' && l.sizeFull,
              a === 'normal' && l.sizeNormal,
              a === 'small' && l.sizeSmall,
            ],
            children: j.jsxs(c('CometMenuItemBaseRoleContext').Provider, {
              value: o,
              children: [
                f != null
                  ? j.jsxs(j.Fragment, {
                      children: [
                        f.onPressBack != null
                          ? j.jsx(c('CometListCellStrict.react'), {
                              addOnStart: {
                                'aria-label': h._(
                                  '__JHASH__v6nfNn2Wv-y__JHASH__',
                                ),
                                icon: d('fbicon')._(i('512665'), 24),
                                onPress: f.onPressBack,
                                type: 'icon',
                              },
                              addOnStartVerticalAlign: 'center',
                              emphasized: !1,
                              headline: f.title,
                              level: 3,
                              meta: f.meta,
                              paddingHorizontal: 8,
                            })
                          : j.jsx('div', {
                              className: c('stylex')([l.listItem]),
                              children: j.jsx(c('TetraTextPairing.react'), {
                                body: f.body,
                                headline: f.title,
                                level: 3,
                                meta: f.meta,
                                reduceEmphasis: !0,
                              }),
                            }),
                        j.jsx(c('CometSeparatorMenuItem.react'), {}),
                      ],
                    })
                  : null,
                j.jsx(d('FocusRegion.react').FocusRegion, {
                  autoFocusQuery: (f == null ? void 0 : f.onPressBack)
                    ? d('focusScopeQueries').tabbableScopeQuery
                    : null,
                  children: j.jsx(c('CometMenuFocusGroup').FocusGroup, {
                    onNavigate: d('CometFocusGroupFirstLetterNavigation')
                      .handleFirstLetterNavigation,
                    orientation: 'vertical',
                    preventScrollOnFocus: !1,
                    tabScopeQuery: d('focusScopeQueries').tabbableScopeQuery,
                    wrap: !0,
                    children: q,
                  }),
                }),
                e != null
                  ? j.jsxs(j.Fragment, {
                      children: [
                        j.jsx(c('CometSeparatorMenuItem.react'), {}),
                        j.jsx('div', {
                          className:
                            'x1lcm9me x1yr5g0i xrt01vj x10y3i5r x78zum5 x1q0g3np xdj266r x1emribx xat24cr x1i64zmx xz9dl7a x1sxyh0 xsag5q8 xurb0ha',
                          children: j.jsx(c('TetraTextPairing.react'), {
                            level: 3,
                            meta: e.text,
                          }),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometMenuBaseWithPopover.react',
  [
    'BaseContextualLayerAvailableHeightContext',
    'BaseMultiPageView.react',
    'CometMenuBase.react',
    'CometPopover.react',
    'CometPopoverLoadingStateContent.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = 15,
      k = 'menu';
    function a(a, b) {
      var d = a.children,
        e = a.fallback,
        f = a.id,
        g = a.label,
        l = a.role;
      l = l === void 0 ? k : l;
      var m = a.arrowAlignment,
        n = a.withArrow;
      n = n === void 0 ? !1 : n;
      var o = a.testid;
      o = o === void 0 ? 'comet-menu' : o;
      o = a.truncate;
      o = o === void 0 ? !1 : o;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'fallback',
        'id',
        'label',
        'role',
        'arrowAlignment',
        'withArrow',
        'testid',
        'truncate',
      ]);
      var p = i(c('BaseContextualLayerAvailableHeightContext'));
      n && p != null && (p -= j);
      return h.Children.count(d) > 0
        ? h.jsx(c('CometPopover.react'), {
            arrowAlignment: m,
            id: f,
            label: g,
            ref: b,
            role: l,
            testid: void 0,
            withArrow: n,
            children: h.jsx(c('BaseMultiPageView.react'), {
              disableAutoFocus: !0,
              disableFocusContainment: !0,
              fallback:
                (m = e) != null
                  ? m
                  : h.jsx(c('CometPopoverLoadingStateContent.react'), {}),
              children: h.jsx(
                c('CometMenuBase.react'),
                babelHelpers['extends']({}, a, {
                  children: d,
                  maxHeight: o ? ((f = p) != null ? f : 0) : void 0,
                  role: l,
                }),
              ),
            }),
          })
        : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.memo(h.forwardRef(a));
    g['default'] = b;
  },
  98,
);
__d(
  'CometMenu.react',
  ['CometMenuBaseWithPopover.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      return h.jsx(
        c('CometMenuBaseWithPopover.react'),
        babelHelpers['extends']({}, a, { ref: b }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
__d(
  'CometMenuItemHighlightContext',
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
  'CometMenuItemBase.react',
  [
    'BaseFocusRing.react',
    'CometFocusGroupFirstLetterNavigation',
    'CometMenuContext',
    'CometMenuFocusGroup',
    'CometMenuItemBaseRoleContext',
    'CometMenuItemHighlightContext',
    'CometNonBreakingSpace.react',
    'CometPressable.react',
    'CometPressableOverlay.react',
    'CometTextWithIcon.react',
    'TetraText.react',
    'TetraTextPairing.react',
    'gkx',
    'mergeRefs',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useMemo,
      m = b.useRef,
      n = {
        aux: { marginStart: 'x16n37ib', $$css: !0 },
        content: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          flexDirection: 'x1q0g3np',
          flexGrow: 'x1iyjqo2',
          justifyContent: 'x1qughib',
          minWidth: 'xeuugli',
          $$css: !0,
        },
        disabled: { cursor: 'x1h6gzvc', $$css: !0 },
        extraHorizontalPadding: {
          paddingStart: 'xurb0ha',
          paddingEnd: 'x1sxyh0',
          $$css: !0,
        },
        listItem: {
          alignItems: 'x6s0dn4',
          appearance: 'xjyslct',
          boxSizing: 'x9f619',
          cursor: 'x1ypdohk',
          display: 'x78zum5',
          flexDirection: 'x1q0g3np',
          flexShrink: 'x2lah0s',
          marginStart: 'x13mpval',
          marginEnd: 'x1w4qvff',
          marginTop: 'xdj266r',
          marginBottom: 'xat24cr',
          paddingTop: 'xz9dl7a',
          paddingEnd: 'x1sxyh0',
          paddingBottom: 'xsag5q8',
          paddingStart: 'xurb0ha',
          position: 'x1n2onr6',
          textAlign: 'x16tdsg8',
          zIndex: 'x1ja2u2z',
          $$css: !0,
        },
        listItemAlignedCenter: { alignItems: 'x6s0dn4', $$css: !0 },
        listItemWithIcon: {
          paddingTop: 'x1y1aw1k',
          paddingEnd: 'x1sxyh0',
          paddingBottom: 'xwib8y2',
          paddingStart: 'xurb0ha',
          $$css: !0,
        },
      },
      o = c('gkx')('1721477') || c('gkx')('1459');
    function a(a, b) {
      var e = a.alignCenter;
      e = e === void 0 ? !1 : e;
      var f = a.aux,
        g = a.badge,
        p = a.bodyColor,
        q = a.bodyText,
        r = a.disabled,
        s = r === void 0 ? !1 : r;
      r = a.download;
      var t = a.href,
        u = a.iconNode,
        v = a.id,
        w = a.isIconAnImage,
        x = a.onClick,
        y = a.onFocusIn,
        z = a.onFocusOut,
        A = a.onHoverIn,
        B = a.onHoverOut,
        C = a.onPressIn,
        D = a.overlayRadius,
        E = D === void 0 ? 4 : D;
      D = a.passthroughProps;
      var F = a.prefetchQueriesOnHover,
        G = a.preventClosingMenuOnSelect;
      G = G === void 0 ? !1 : G;
      var H = a.preventLocalNavigation,
        I = a.primaryColor,
        J = a.primaryText,
        K = a.role,
        L = a.routeTarget,
        M = a.secondaryColor,
        N = a.secondaryText,
        O = a.target,
        P = a.testid;
      P = a.traceParams;
      var Q = a.visuallyFocused,
        R = Q === void 0 ? !1 : Q;
      Q = babelHelpers.objectWithoutPropertiesLoose(a, [
        'alignCenter',
        'aux',
        'badge',
        'bodyColor',
        'bodyText',
        'disabled',
        'download',
        'href',
        'iconNode',
        'id',
        'isIconAnImage',
        'onClick',
        'onFocusIn',
        'onFocusOut',
        'onHoverIn',
        'onHoverOut',
        'onPressIn',
        'overlayRadius',
        'passthroughProps',
        'prefetchQueriesOnHover',
        'preventClosingMenuOnSelect',
        'preventLocalNavigation',
        'primaryColor',
        'primaryText',
        'role',
        'routeTarget',
        'secondaryColor',
        'secondaryText',
        'target',
        'testid',
        'traceParams',
        'visuallyFocused',
      ]);
      var S = m(null);
      a = j(c('CometMenuContext'));
      var T = G !== !0 && a ? a.onClose : null;
      G =
        t != null || L != null || O != null
          ? {
              download: r,
              passthroughProps: D,
              prefetchQueriesOnHover: F,
              preventLocalNavigation: H,
              routeTarget: L,
              target: O,
              traceParams: P,
              url: t,
            }
          : void 0;
      a = i(
        function (a) {
          T != null && T(), x && x(a);
        },
        [x, T],
      );
      r = j(c('CometMenuItemBaseRoleContext'));
      H = (F = (D = K) != null ? D : r) != null ? F : void 0;
      var U = m(R);
      k(
        function () {
          var a = S.current;
          !U.current &&
            R &&
            a != null &&
            a.scrollIntoView({ block: 'nearest' });
        },
        [R],
      );
      var V = m(null);
      L = d('CometFocusGroupFirstLetterNavigation').useFirstLetterNavigationTag(
        V,
      );
      O = l(
        function () {
          return c('mergeRefs')(b, S);
        },
        [b],
      );
      var W =
        g != null
          ? typeof g === 'number'
            ? h.jsxs(h.Fragment, {
                children: [
                  J,
                  h.jsx(c('CometNonBreakingSpace.react'), { size: 0.5 }),
                  h.jsx(c('TetraText.react'), {
                    color: s ? 'disabled' : I,
                    type: 'body4',
                    children: g,
                  }),
                ],
              })
            : h.jsx(c('CometTextWithIcon.react'), { iconAfter: g, children: J })
          : J;
      return h.jsx(c('CometMenuFocusGroup').FocusItem, {
        disabled: s,
        tag: L,
        children: h.jsx(
          c('CometPressable.react'),
          babelHelpers['extends']({}, Q, {
            disabled: s,
            display: 'inline',
            id: v,
            linkProps: G,
            onFocusIn: y,
            onFocusOut: z,
            onHoverIn: A,
            onHoverOut: B,
            onPress: a,
            onPressIn: C,
            overlayDisabled: !0,
            ref: O,
            role: H,
            suppressFocusRing: !0,
            testid: void 0,
            xstyle: [
              n.listItem,
              e && n.listItemAlignedCenter,
              u != null && n.listItemWithIcon,
              s && n.disabled,
              !o && R && c('BaseFocusRing.react').focusRingXStyle,
            ],
            children: function (a) {
              var b = a.focused,
                d = a.focusVisible,
                e = a.hovered;
              a = a.pressed;
              return h.jsxs(c('CometMenuItemHighlightContext').Provider, {
                value: (b && d) || e,
                children: [
                  u,
                  h.jsxs('div', {
                    className:
                      'x6s0dn4 x78zum5 x1q0g3np x1iyjqo2 x1qughib xeuugli' +
                      (((b = w) != null ? b : !1) ? ' xurb0ha x1sxyh0' : ''),
                    children: [
                      h.jsx(c('TetraTextPairing.react'), {
                        body: q,
                        bodyColor: s ? 'disabled' : p,
                        headline: W,
                        headlineColor: s ? 'disabled' : I,
                        headlineRef: V,
                        level: 4,
                        meta: N,
                        metaColor: s ? 'disabled' : M,
                        reduceEmphasis: !0,
                      }),
                      f != null &&
                        h.jsx('div', { className: 'x16n37ib', children: f }),
                    ],
                  }),
                  h.jsx(c('CometPressableOverlay.react'), {
                    focusVisible: d || R,
                    hovered: e,
                    pressed: a,
                    radius: E,
                    showFocusRing: !0,
                  }),
                ],
              });
            },
          }),
        ),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
__d(
  'CometMenuItemIcon.react',
  [
    'CometEmoji.react',
    'CometIcon.react',
    'CometImage.react',
    'IconSource',
    'ImageIconSource',
    'SVGIcon',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo,
      j = {
        circle: {
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          $$css: !0,
        },
        contained: {
          backgroundColor: 'x1qhmfi1',
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          height: 'xvnh2x',
          minWidth: 'x1g0q3yh',
          $$css: !0,
        },
        iconRelativeContainer: { position: 'x1n2onr6', $$css: !0 },
        inset: {
          boxShadow: 'xlg9a9y',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          $$css: !0,
        },
        root: {
          alignItems: 'x6s0dn4',
          alignSelf: 'xoi2r2e',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          marginEnd: 'xq8finb',
          $$css: !0,
        },
        roundedRect: {
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.disabled,
        e = a.emojiSize,
        f = e === void 0 ? 20 : e,
        g = a.icon,
        k = a.iconColor;
      e = a.iconCssSelectorId;
      var l = a.iconSize,
        m = l === void 0 ? 20 : l;
      l = a.use;
      var n = l === void 0 ? 'normal' : l;
      a = i(
        function () {
          if (g instanceof c('IconSource')) {
            var a;
            return h.jsx(c('CometIcon.react'), {
              color: (a = k) != null ? a : 'primary',
              disabled: b,
              icon: g,
            });
          }
          if (g instanceof c('ImageIconSource'))
            return h.jsx(c('CometIcon.react'), { disabled: b, icon: g });
          if (g instanceof d('SVGIcon').SVGIcon) {
            return h.jsx(c('CometIcon.react'), {
              color: (a = k) != null ? a : 'primary',
              disabled: b,
              icon: g,
              size: m,
            });
          }
          if (g instanceof d('SVGIcon').LegacySVGIcon) {
            return h.jsx(c('CometIcon.react'), {
              color: (a = k) != null ? a : 'primary',
              disabled: b,
              icon: g,
              size: m,
            });
          }
          if (g instanceof d('SVGIcon').EmojiIcon)
            return h.jsx(c('CometEmoji.react'), {
              emoji: g.codepoints,
              size: f,
            });
          if (
            typeof g === 'object' &&
            typeof g !== 'function' &&
            !g._isSVG &&
            g.src !== null
          ) {
            a = n === 'contained' ? 36 : 20;
            return h.jsxs('div', {
              className: 'x1n2onr6',
              children: [
                h.jsx(c('CometImage.react'), {
                  height: a,
                  src: g.src,
                  width: a,
                  xstyle: [
                    g.style === 'circle' && j.circle,
                    g.style === 'roundedRect' && j.roundedRect,
                  ],
                }),
                g.style !== 'square'
                  ? h.jsx('div', {
                      className:
                        'xlg9a9y x10l6tqk x17qophe x13vifvy' +
                        (g.style === 'roundedRect'
                          ? ' x1lq5wgf xgqcy7u x30kzoy x9jhf4c'
                          : '' +
                            (g.style === 'circle'
                              ? ' x14yjl9h xudhj91 x18nykt9 xww2gxu'
                              : '')),
                      style: { height: a, width: a },
                    })
                  : null,
              ],
            });
          }
          return h.jsx(c('CometIcon.react'), {
            color: (a = k) != null ? a : 'secondary',
            disabled: b,
            icon: g,
          });
        },
        [b, f, g, k, m, n],
      );
      return h.jsx('div', {
        className: c('stylex')([
          j.root,
          (n === 'contained' || n === 'contained_small_icon') && j.contained,
        ]),
        id: e,
        children: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.memo(a);
    g['default'] = b;
  },
  98,
);
__d(
  'CometMenuItem.react',
  [
    'CometBadge.react',
    'CometIcon.react',
    'CometMenuItemBase.react',
    'CometMenuItemIcon.react',
    'CometProfilePhoto.react',
    'TetraTextPairing.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var d = a.auxItem,
        e = a.emojiSize,
        f = a.icon,
        g = a.iconColor,
        i = a.iconCssSelectorId,
        j = a.iconSize,
        k = a.iconStyle;
      k = k === void 0 ? 'normal' : k;
      var l = a.image,
        m = a.overlayRadius;
      m = m === void 0 ? 4 : m;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'auxItem',
        'emojiSize',
        'icon',
        'iconColor',
        'iconCssSelectorId',
        'iconSize',
        'iconStyle',
        'image',
        'overlayRadius',
      ]);
      var n = null;
      if (d != null)
        switch (d.type) {
          case 'text':
            n = h.jsx(c('TetraTextPairing.react'), {
              level: 3,
              meta: d.auxText,
            });
            break;
          case 'badge':
            n = h.jsx(c('CometBadge.react'), { color: d.color });
            break;
          case 'icon':
            n = h.jsx(c('CometIcon.react'), { color: d.color, icon: d.icon });
            break;
          case 'numberedBadge':
            n = d.badge;
            break;
        }
      return h.jsx(
        c('CometMenuItemBase.react'),
        babelHelpers['extends']({}, a, {
          alignCenter: !0,
          aux: n,
          iconNode:
            f != null
              ? h.jsx(c('CometMenuItemIcon.react'), {
                  disabled: a.disabled,
                  emojiSize: e,
                  icon: f,
                  iconColor: g,
                  iconCssSelectorId: i,
                  iconSize: j,
                  use: k,
                })
              : l != null
              ? h.jsx(c('CometProfilePhoto.react'), {
                  addOn: l.addOn,
                  size: l.size,
                  source: l.source,
                })
              : null,
          isIconAnImage: f == null && l != null,
          overlayRadius: m,
          ref: b,
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
//# sourceURL=https://static.xx.fbcdn.net/rsrc.php/v3ieKI4/yi/l/makehaste_jhash/nfuAgzCUJuK.js?_nc_x=7tWlUfRI-Ve
