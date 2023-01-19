__d(
  'CometSettingsDropdownTrigger.react',
  [
    'fbt',
    'ActorTypes$FbtEnum',
    'ActorTypesKeys',
    'BaseToasterStateManager',
    'ChevronDownFilled16IconSvg.react',
    'CometCircleButton.react',
    'CometContextualLayerAnchorRoot.react',
    'CometGlobalPanelLayoutContext',
    'CometIcon.react',
    'CometProfilePhoto.react',
    'CometProfilePlusAdminEducationStrings',
    'CometRelay',
    'CometRouteParams',
    'CometSettingsDropdownTriggerQuery.graphql',
    'TetraProfilePhoto.react',
    'TetraText.react',
    'TriangleDownFilled20IconSvg.react',
    'UserCategoryWithAdminsOrLimitedAccessRoles',
    'WebStorage',
    'cometPushToast',
    'cr:3923',
    'getJSEnumSafe',
    'gkx',
    'mergeRefs',
    'previousProfileIdForToastSessionStorage',
    'promiseDone',
    'qex',
    'react',
    'useCometCallout',
    'useCometCalloutNUX',
    'useCometEntityKey',
    'useCometProfileChangeCallout',
    'useCometPromptProfileSwitcherEducation',
    'useCometPulseNUX',
    'useCometSettingsDropdownTriggerNUXTours.react',
    'useEndCometNUXTour',
    'useFXSwitcherSwitchedSuccessLogger',
    'useProfileCometSOAPWelcomeDialog',
    'useTopNavigationLogging',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react');
    e = d('react');
    var k = e.useCallback,
      l = e.useContext,
      m = e.useEffect,
      n = e.useMemo,
      o = e.useState,
      p = c('gkx')('2576'),
      q = {
        personalProfilePageAdminSwitcherTooltip: {
          maxWidth: 'xw5ewwj',
          $$css: !0,
        },
        profileName: { fontWeight: 'x117nqv4', $$css: !0 },
        tooltip: { maxWidth: 'x256u9z', $$css: !0 },
      },
      r = {
        align: 'end',
        arrowStyle: 'edge',
        position: 'below',
        type: 'accent',
        xstyle: q.tooltip,
      },
      s = h._('__JHASH__h1XR_i3Axas__JHASH__'),
      t = '8150',
      u = '8191',
      v = '8189',
      w = '9348',
      aa =
        i !== void 0 ? i : (i = b('CometSettingsDropdownTriggerQuery.graphql')),
      ba = h._('__JHASH__jN3j1k2S9o6__JHASH__'),
      ca = h._('__JHASH__fHYmTaH3nh-__JHASH__'),
      da = h._('__JHASH__ye5j_4B7uia__JHASH__');
    function a(a, e) {
      var f = a.onHoverIn,
        g = a.onHoverOut,
        i = a.onPress,
        x = a.onPressIn,
        y = a.profilePictureUri,
        z = a.size,
        A = a.testid;
      A = a.type;
      var B = d('CometRelay').useRelayEnvironment();
      a = o('');
      var C = a[0],
        ea = a[1];
      a = o(c('ActorTypesKeys').PROFILE);
      var D = a[0],
        fa = a[1];
      a = o(!1);
      var E = a[0],
        F = a[1];
      a = o(!1);
      var G = a[0],
        H = a[1];
      a = o(!1);
      var I = a[0],
        J = a[1];
      a = o(!1);
      var K = a[0],
        L = a[1];
      a = o(!1);
      var M = a[0],
        N = a[1];
      a = o(!1);
      var O = a[0],
        P = a[1];
      a = o(!1);
      var ga = a[0],
        Q = a[1];
      a = o(!1);
      var R = a[0],
        ha = a[1];
      m(
        function () {
          if (!p || R) return;
          var a = function () {
            R || Q(!0);
          };
          window.addEventListener(
            d('CometProfilePlusAdminEducationStrings')
              .PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME,
            a,
          );
          return function () {
            window.removeEventListener(
              d('CometProfilePlusAdminEducationStrings')
                .PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME,
              a,
            );
          };
        },
        [R],
      );
      if (!p)
        try {
          window.addEventListener(
            d('CometProfilePlusAdminEducationStrings')
              .PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME,
            function (a) {
              Q(!0);
            },
            !1,
          );
        } catch (a) {}
      a = c('useCometEntityKey')();
      var S =
        (a == null ? void 0 : a.entity_type) === 'profile' &&
        (a == null ? void 0 : a.section) === 'timeline';
      a =
        (a == null ? void 0 : a.entity_type) === 'pages' &&
        ((a == null ? void 0 : a.section) === 'your_pages' ||
          (a == null ? void 0 : a.section) === 'your_pages_original');
      var T = d('CometRouteParams').useRouteParams();
      T =
        (T == null ? void 0 : T.show_switched_tooltip) != null &&
        ((T == null ? void 0 : T.show_switched_tooltip) === 1 ||
          (T == null ? void 0 : T.show_switched_tooltip) === '1' ||
          (T == null ? void 0 : T.show_switched_tooltip) === !0 ||
          (T == null ? void 0 : T.show_switched_tooltip) === 'true');
      m(
        function () {
          c('promiseDone')(
            d('CometRelay')
              .fetchQuery(B, aa, {
                coreAppAdminProfileSwitcherNuxId: +v,
                pageManagementNuxId: +u,
                profileSwitcherAdminEducationNuxId: +w,
                profileSwitcherNuxId: +t,
                showNewToast: c('gkx')('6804'),
              })
              .toPromise()
              .then(function (a) {
                var b, d, e, f, g, h;
                b =
                  (a == null
                    ? void 0
                    : (b = a.viewer) == null
                    ? void 0
                    : (b = b.actor) == null
                    ? void 0
                    : (b = b.profile_switcher_eligible_profiles) == null
                    ? void 0
                    : b.count) || 0;
                d =
                  (a == null
                    ? void 0
                    : (d = a.page_management_nux) == null
                    ? void 0
                    : d.should_show) === !0 && b > 0;
                e =
                  (a == null
                    ? void 0
                    : (e = a.profile_switcher_nux) == null
                    ? void 0
                    : e.should_show) === !0 && b > 0;
                f = c('getJSEnumSafe')(
                  c('UserCategoryWithAdminsOrLimitedAccessRoles'),
                  a == null
                    ? void 0
                    : (f = a.viewer) == null
                    ? void 0
                    : (f = f.actor) == null
                    ? void 0
                    : f.user_category_with_admins_or_limited_access_roles,
                );
                g =
                  (a == null
                    ? void 0
                    : (g = a.core_app_admin_profile_switcher_nux) == null
                    ? void 0
                    : g.should_show) === !0 &&
                  f === 'can_have_admin_and_limited_access_roles';
                f =
                  (a == null
                    ? void 0
                    : (f = a.profile_switcher_admin_education_nux) == null
                    ? void 0
                    : f.should_show) === !0 && b > 0;
                b =
                  (a == null
                    ? void 0
                    : (b = a.viewer) == null
                    ? void 0
                    : (b = b.actor) == null
                    ? void 0
                    : b.should_show_soap_onboarding_dialog) === !0;
                ea(
                  (h =
                    a == null
                      ? void 0
                      : (h = a.viewer) == null
                      ? void 0
                      : (h = h.actor) == null
                      ? void 0
                      : h.name) != null
                    ? h
                    : '',
                );
                fa(
                  (a == null
                    ? void 0
                    : (h = a.viewer) == null
                    ? void 0
                    : (h = h.actor) == null
                    ? void 0
                    : h.is_additional_profile_plus) === !0
                    ? c('ActorTypesKeys').PAGE
                    : c('ActorTypesKeys').PROFILE,
                );
                F(e);
                H(d);
                J(g);
                L(f);
                N(b);
                ia(a);
              }),
          );
        },
        [S, B, T],
      );
      var U = c('useProfileCometSOAPWelcomeDialog')();
      m(
        function () {
          M &&
            U(function () {
              P(!0), N(!1);
            });
        },
        [C, M, U],
      );
      var V = c('useCometCallout')(
          n(function () {
            return babelHelpers['extends']({}, r, { label: da });
          }, []),
          O,
        ),
        W = c('useCometCalloutNUX')(
          t,
          n(function () {
            return babelHelpers['extends']({}, r, { label: ba });
          }, []),
          E,
        ),
        X = c('useCometCalloutNUX')(
          u,
          n(function () {
            return babelHelpers['extends']({}, r, { label: ca });
          }, []),
          a && G,
        ),
        Y = c('useFXSwitcherSwitchedSuccessLogger')(),
        ia = k(
          function (a) {
            var e, f;
            e =
              a == null
                ? void 0
                : (e = a.viewer) == null
                ? void 0
                : (e = e.actor) == null
                ? void 0
                : e.name;
            f =
              a == null
                ? void 0
                : (f = a.viewer) == null
                ? void 0
                : (f = f.actor) == null
                ? void 0
                : (f = f.profile_picture) == null
                ? void 0
                : f.uri;
            var g = c('WebStorage').getSessionStorage(),
              i = c('previousProfileIdForToastSessionStorage').get();
            if (e != null && i != null) {
              (g == null
                ? void 0
                : g.getItem('did_profile_switch_come_from_switcher')) === '1' &&
                Y({ switch_type: 'intra_app' });
              if (b('cr:3923') && a)
                var k = c('BaseToasterStateManager').getInstance(),
                  l = k.push(
                    j.jsx(b('cr:3923'), {
                      onDismiss: function () {
                        k.expire(l);
                      },
                      previousProfileID: i,
                      query: a,
                    }),
                    5e3,
                  );
              else {
                i =
                  f != null
                    ? j.jsx(c('TetraProfilePhoto.react'), {
                        shape: 'circle',
                        size: 32,
                        source: { uri: f },
                      })
                    : null;
                d('cometPushToast').cometPushToast(
                  {
                    icon: i,
                    message: h._('__JHASH__pj7jBTJLgFB__JHASH__', [
                      h._param(
                        'profile name',
                        j.jsx(c('TetraText.react'), {
                          type: 'headlineEmphasized4',
                          children: e,
                        }),
                      ),
                    ]),
                  },
                  5e3,
                );
              }
              c('previousProfileIdForToastSessionStorage').remove();
              g == null
                ? void 0
                : g.removeItem('did_profile_switch_come_from_switcher');
            }
          },
          [Y],
        ),
        Z = c('useCometCalloutNUX')(
          v,
          n(
            function () {
              return babelHelpers['extends']({}, r, {
                label:
                  ((S = h._enum(D, c('ActorTypes$FbtEnum'))),
                  h._('__JHASH__XrvIqubxcIN__JHASH__', [
                    S,
                    h._implicitParam(
                      '=m1',
                      j.jsx('span', {
                        className: 'x117nqv4',
                        children: h._('__JHASH__B_CQfx-9oXJ__JHASH__', [
                          S,
                          h._param('profile_name', C),
                        ]),
                      }),
                    ),
                  ])),
              });
            },
            [C, D],
          ),
          I,
        ),
        $ = n(function () {
          return h._('__JHASH__uB5D_0F1hU9__JHASH__');
        }, []);
      T = c('useCometPulseNUX')(
        w,
        n(
          function () {
            return {
              calloutProps: {
                align: 'middle',
                arrowStyle: 'inset',
                hasCloseButton: !0,
                label: $,
                position: 'below',
                type: 'accent',
              },
              contextualLayerProps: { align: 'middle', position: 'below' },
              pulseProps: { label: 'pulse for switcher education' },
            };
          },
          [$],
        ),
        Boolean(c('qex')._('988')) && K,
      );
      var ja = T.targetRef;
      O = T.view;
      var ka = c('useCometCalloutNUX')(
        d('CometProfilePlusAdminEducationStrings')
          .PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_NUX_ID,
        n(function () {
          return babelHelpers['extends']({}, r, {
            disableOutsideClick: !0,
            label: h._('__JHASH__z6AakHEMB8t__JHASH__'),
            onClose: function () {
              p
                ? ha(!0)
                : window.removeEventListener(
                    d('CometProfilePlusAdminEducationStrings')
                      .PROFILE_PLUS_EDUCATION_CLOSED_PROFILE_SWITCHER_EVENT_NAME,
                  );
            },
            xstyle: q.personalProfilePageAdminSwitcherTooltip,
          });
        }, []),
        ga,
      );
      E = d('useTopNavigationLogging').useSettingsButtonLoggingCallbacks();
      var la = E[0],
        ma = E[1];
      a = c('useCometPromptProfileSwitcherEducation')();
      var na = a.hideCallout,
        oa = c('useEndCometNUXTour')();
      G = k(
        function (a) {
          i && i(a), F(!1), H(!1), J(!1), L(!1), P(!1), la(), na(), oa();
        },
        [i, la, na, oa],
      );
      var pa = c('useCometProfileChangeCallout')(),
        qa = c('useCometSettingsDropdownTriggerNUXTours.react')({
          profileName: C,
        });
      I = n(
        function () {
          return c('mergeRefs')(V, Z, X, W, ka, e, ma, ja, pa, qa);
        },
        [V, Z, X, W, ka, e, ma, ja, pa, qa],
      );
      K = l(c('CometGlobalPanelLayoutContext'));
      if (y != null)
        return j.jsx(c('CometContextualLayerAnchorRoot.react'), {
          children: j.jsx(c('CometProfilePhoto.react'), {
            addOn: K
              ? {
                  backgroundColor: 'var(--secondary-button-background)',
                  icon: j.jsx(c('CometIcon.react'), {
                    color: 'primary',
                    icon: c('ChevronDownFilled16IconSvg.react'),
                    size: 12,
                  }),
                  size: 28,
                  type: 'activityBadge',
                }
              : void 0,
            alt: s,
            onHoverIn: f,
            onHoverOut: g,
            onPress: G,
            onPressIn: x,
            ref: I,
            size: z,
            source: { uri: y },
            testid: void 0,
            children: O,
          }),
        });
      else
        return j.jsxs(c('CometContextualLayerAnchorRoot.react'), {
          children: [
            j.jsx(c('CometCircleButton.react'), {
              icon: c('TriangleDownFilled20IconSvg.react'),
              label: s,
              onHoverIn: f,
              onHoverOut: g,
              onPress: G,
              onPressIn: x,
              ref: I,
              size: z,
              testid: void 0,
              type: A,
            }),
            O,
          ],
        });
    }
    f = j.forwardRef(a);
    g['default'] = f;
  },
  98,
);
