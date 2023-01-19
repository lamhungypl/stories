__d(
  'BaseLink.react',
  [
    'BaseLinkDefaultTargetContext',
    'BaseLinkEndpointModifierContext',
    'BaseLinkNestedPressableContext',
    'BaseNestedPressableHack_DO_NOT_USE.react',
    'CometLinkShimUtils',
    'CometLinkTrackingUtils',
    'CometProductAttributionContext',
    'CometTrackingCodeContext',
    'CometTrackingNodesContext',
    'Pressable.react',
    'PressableText.react',
    'RecoverableViolationWithComponentStack.react',
    'appendPersistQueryParamsToUrl',
    'gkx',
    'isCometRouterUrl',
    'justknobx',
    'mergeRefs',
    'react',
    'recoverableViolation',
    'useCometErrorProject',
    'useCometRouterDispatcher',
    'useCometRouterLinkEventHandlers',
    'useCometRouterLinkShimEventHandlers',
    'useCurrentRoute',
    'useFeedPressEventHandler',
    'useTransformRelativeUri',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext,
      k = b.useMemo,
      aa = b.useRef;
    function ba(a, b) {
      return b == null
        ? null
        : a.reduce(function (a, b) {
            b = b(a);
            if (!c('isCometRouterUrl')(b)) {
              c('recoverableViolation')(
                'Endpoint modifier returned a non-router URL, ignoring.',
                'comet_infra',
              );
              return a;
            }
            return b;
          }, b);
    }
    function l(a) {
      a = a.children;
      return h.jsx(c('BaseLinkNestedPressableContext').Provider, {
        value: !0,
        children: a,
      });
    }
    l.displayName = l.name + ' [from ' + f.id + ']';
    function a(a, b) {
      var e = a['aria-activedescendant'],
        f = a['aria-checked'],
        g = a['aria-controls'],
        ca = a['aria-current'],
        da = a['aria-describedby'],
        ea = a['aria-expanded'],
        fa = a['aria-haspopup'],
        ga = a['aria-hidden'],
        ha = a['aria-invalid'],
        n = a['aria-label'],
        ia = a['aria-labelledby'],
        ja = a['aria-owns'],
        ka = a['aria-selected'],
        o = a.children,
        la = a.className_DEPRECATED,
        p = a.disabled,
        q =
          a.disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
        r =
          a.disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
        s = a.display;
      s = s === void 0 ? 'inline' : s;
      var t = a.download,
        u = a.fbclid,
        v = a.focusable,
        w = a.href,
        ma = a.id,
        x = a.label,
        y = a.lynxMode,
        na = a.onBlur,
        z = a.onClick,
        A = a.onContextMenu,
        oa = a.onFocus,
        pa = a.onFocusChange,
        qa = a.onFocusVisibleChange,
        ra = a.onHoverChange,
        B = a.onHoverEnd,
        C = a.onHoverStart,
        D = a.onNavigate,
        sa = a.onPressChange,
        ta = a.onPressEnd,
        E = a.onPressStart,
        F = a.passthroughProps,
        G = a.prefetchQueriesOnHover,
        H = a.preloadCodeOnMount,
        I = a.preserveQueryInShim,
        ua = a.preventContextMenu,
        J = a.preventLocalNavigation,
        va = a.productAttribution,
        K = a.rel,
        wa = a.replace,
        L = a.role,
        M = a.routeTarget,
        xa = a.style,
        ya = a.suppressFocusRing,
        za = a.suppressHydrationWarning,
        N = a.target,
        Aa = a.testid,
        O = a.testOnly_pressed;
      O = O === void 0 ? !1 : O;
      var Ba = a.traceParams;
      a = a.xstyle;
      var Ca = c('useCometRouterDispatcher')(),
        P = aa(null),
        Da = j(c('BaseLinkEndpointModifierContext')),
        Q = j(c('BaseLinkDefaultTargetContext')),
        R = j(c('CometTrackingNodesContext')),
        S = j(c('CometTrackingCodeContext')),
        Ea = S.click_tracking_linkshim_cb,
        Fa = S.encrypted_click_tracking,
        Ga = j(c('CometProductAttributionContext')),
        T = i(
          function (a) {
            return d('CometLinkTrackingUtils').decorateHrefWithTrackingInfo(
              a,
              R,
              Fa,
            );
          },
          [Fa, R],
        ),
        Ha = i(
          function (a) {
            return ba(Da, a);
          },
          [Da],
        ),
        Ia = t === !0 || typeof t === 'string';
      S = k(
        function () {
          var a,
            b =
              w != null && c('justknobx')._('144')
                ? c('appendPersistQueryParamsToUrl')(w)
                : w;
          if (Ia || q === !0)
            return {
              clickIDAppended: !1,
              ghlEncrypted: !1,
              href: b,
              isRouterLink: !1,
              shimmed: !1,
              unshimmedHref: null,
            };
          if (b != null && c('isCometRouterUrl')(b)) {
            var e = T(Ha(b));
            return {
              clickIDAppended: !1,
              ghlEncrypted: !1,
              href: e,
              isRouterLink: !0,
              shimmed: !1,
              unshimmedHref: null,
            };
          }
          e = d('CometLinkShimUtils').getLinkShimInfo(b, Ea, R, u, r, I);
          b = e.shimmed ? e.href : T(e.href);
          return {
            clickIDAppended: e.clickIDAppended,
            ghlEncrypted: (a = e.ghlEncrypted) != null ? a : !1,
            href: b,
            isRouterLink: !1,
            shimmed: e.shimmed,
            unshimmedHref: e.shimmed ? e.unshimmedHref : null,
          };
        },
        [Ea, r, q, u, Ia, w, I, R, T, Ha],
      );
      var Ja = S.clickIDAppended,
        U = S.ghlEncrypted,
        V = S.href,
        W = S.isRouterLink,
        X = S.shimmed;
      S = S.unshimmedHref;
      var Y = !1,
        Z = !1;
      N = N;
      if (Q) {
        var $;
        N = ($ = N) != null ? $ : Q;
      }
      if (X || (c('gkx')('7670') && U)) {
        Y = !0;
        N = ($ = N) != null ? $ : '_blank';
        Z = !!d('CometLinkShimUtils').use_rel_no_opener && N === '_blank';
      }
      Q = Array.isArray(K) ? K.join(' ') : K;
      Y &&
        (Q == null || Q.indexOf('nofollow') < 0) &&
        (Q = Q != null ? Q + ' nofollow' : 'nofollow');
      Z &&
        (Q == null || Q.indexOf('noopener') < 0) &&
        (Q = Q != null ? Q + ' noopener' : 'noopener');
      U = j(c('BaseLinkNestedPressableContext'));
      $ = L === 'presentation' ? 'none' : L;
      K = x != null && $ !== 'none' ? x : n;
      var Ka = b;
      Y = z;
      Z = E;
      L = A;
      Y = c('useFeedPressEventHandler')(z, V);
      Z = c('useFeedPressEventHandler')(E, V);
      L = c('useFeedPressEventHandler')(A, V);
      x = k(
        function () {
          return c('mergeRefs')(Ka, P);
        },
        [Ka, P],
      );
      n = c('useCometRouterLinkShimEventHandlers')({
        href: V,
        lynxMode: y,
        onContextMenu: L,
        onHoverStart: C,
        onPress: Y,
        shimmed: X,
        unshimmedHref: S,
      });
      b = n.onContextMenu;
      z = n.onHoverStart;
      E = n.onPress;
      A = n.useOrigHref;
      y = k(
        function () {
          return {
            linkRef: P,
            onNavigate: D,
            passthroughProps: F,
            productAttributionUpdateProps: {
              fromLink: va,
              linkContext: Ga,
              trackingNodes: R,
            },
            replace: wa,
            target: M,
            traceParams: Ba,
          };
        },
        [P, va, Ga, R, D, wa, M, Ba, F],
      );
      L = c('useCometRouterLinkEventHandlers')({
        dispatcherExtras: y,
        href: V,
        isRouterLink: W,
        onHoverEnd: B,
        onHoverStart: z,
        onPress: E,
        onPressStart: Z,
        prefetchQueriesOnHover: G,
        preloadCodeOnMount: H,
        preventLocalNavigation: J,
        rel: Q,
        target: N,
      });
      C = L.onHoverEnd;
      Y = L.onHoverStart;
      n = L.onPress;
      y = L.onPressStart;
      B = A && X ? S : V;
      z =
        (W && N !== '_blank' && Ca != null) ||
        B == null ||
        B === '#' ||
        J === !0;
      Z = (E = c('useTransformRelativeUri')(A && X ? S : V)) != null ? E : '#';
      G = {
        accessibilityLabel: K,
        accessibilityRelationship: {
          activedescendant: e,
          controls: g,
          current: ca,
          describedby: da,
          haspopup: fa,
          labelledby: ia,
          owns: ja,
        },
        accessibilityState: {
          checked: f,
          disabled: p,
          expanded: ea,
          hidden: ga,
          invalid: ha,
          selected: ka,
        },
        className_DEPRECATED: la,
        disabled: p,
        forwardedRef: x,
        link: { download: t, rel: Q, target: N, url: Z },
        nativeID: ma,
        onBlur: na,
        onContextMenu: b,
        onFocus: oa,
        onFocusChange: pa,
        onFocusVisibleChange: qa,
        onHoverChange: ra,
        onHoverEnd: C,
        onHoverStart: Y,
        onPress: n,
        onPressChange: sa,
        onPressEnd: ta,
        onPressStart: y,
        preventContextMenu: ua,
        preventDefault: z,
        style: xa,
        suppressHydrationWarning: za === !0 || Ja === !0 ? !0 : void 0,
        testID: Aa,
        testOnly_state: {
          disabled: !1,
          focused: !1,
          focusVisible: !1,
          hovered: !1,
          pressed: O,
        },
        xstyle: a,
      };
      if (s === 'block') {
        H =
          $ === 'button' ||
          $ === 'menuitem' ||
          $ === 'none' ||
          $ === 'switch' ||
          $ === 'checkbox' ||
          $ === 'article' ||
          $ === 'radio' ||
          $ === 'tab'
            ? $
            : 'link';
        L = h.jsx(
          c('Pressable.react'),
          babelHelpers['extends']({}, G, {
            accessibilityRole: H,
            suppressFocusRing: ya,
            tabbable: v,
            children: h.jsx(l, { children: o }),
          }),
        );
      } else {
        W =
          $ === 'button' ||
          $ === 'menuitem' ||
          $ === 'menuitemradio' ||
          $ === 'none' ||
          $ === 'tab'
            ? $
            : 'link';
        L = h.jsx(
          c('PressableText.react'),
          babelHelpers['extends']({}, G, {
            accessibilityRole: W,
            direction: 'none',
            focusable: v,
            suppressFocusRing: ya,
            children: h.jsx(l, { children: o }),
          }),
        );
      }
      return h.jsxs(h.Fragment, {
        children: [
          M === 'content' && h.jsx(m, {}),
          U
            ? h.jsx(c('BaseNestedPressableHack_DO_NOT_USE.react'), {
                children: L,
              })
            : L,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function m() {
      var a = c('useCurrentRoute')(),
        b = c('useCometErrorProject')();
      return (
        a != null &&
        a.isCometRootContainer !== !0 &&
        h.jsx(c('RecoverableViolationWithComponentStack.react'), {
          errorMessage:
            'A link with target=content was rendered in a non-tab-container',
          projectName: (a = b) != null ? a : 'comet_infra',
        })
      );
    }
    m.displayName = m.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
