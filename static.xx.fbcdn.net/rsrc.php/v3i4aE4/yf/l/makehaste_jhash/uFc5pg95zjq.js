/*FB_PKG_DELIM*/

__d(
  'BaseSlider.react',
  [
    'fbt',
    'CometComponentWithKeyCommands.react',
    'CometKeys',
    'Locale',
    'Pressable.react',
    'react',
    'recoverableViolation',
    'stylex',
    'useCometUniqueID',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useMemo,
      m = b.useRef,
      n = {
        disabled: { cursor: 'x1h6gzvc', opacity: 'xti2d7y', $$css: !0 },
        rail: {
          backgroundColor: 'x14nfmen',
          borderTopStartRadius: 'xm3z3ea',
          borderTopEndRadius: 'x1x8b98j',
          borderBottomEndRadius: 'x131883w',
          borderBottomStartRadius: 'x16mih1h',
          display: 'x1lliihq',
          height: 'xqu0tyb',
          position: 'x10l6tqk',
          width: 'xh8yej3',
          $$css: !0,
        },
        root: {
          boxSizing: 'x1afcbsf',
          cursor: 'x1ypdohk',
          display: 'x1rg5ohu',
          height: 'xqu0tyb',
          paddingBottom: 'xwib8y2',
          paddingTop: 'x1y1aw1k',
          position: 'x1n2onr6',
          touchAction: 'x5ve5x3',
          width: 'xh8yej3',
          $$css: !0,
        },
        thumb: {
          backgroundColor: 'x14hiurz',
          borderTopColor: 'x8cjs6t',
          borderEndColor: 'x1ch86jh',
          borderBottomColor: 'x80vd3b',
          borderStartColor: 'xckqwgs',
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          borderTopWidth: 'x178xt8z',
          borderEndWidth: 'xm81vs4',
          borderBottomWidth: 'xso031l',
          borderStartWidth: 'xy80clv',
          bottom: 'x1ey2m1c',
          boxShadow: 'x1ljrcwk',
          boxSizing: 'x9f619',
          height: 'x1qx5ct2',
          marginStart: 'x1hk0nng',
          outline: 'x1a2a7pz',
          position: 'x10l6tqk',
          top: 'x13vifvy',
          width: 'xw4jnvo',
          $$css: !0,
        },
        thumbFocusVisible: {
          borderTopColor: 'x1tz4bnf',
          borderEndColor: 'xmds5ef',
          borderBottomColor: 'x25epmt',
          borderStartColor: 'x11y6y4w',
          boxShadow: 'x16frnri',
          $$css: !0,
        },
        thumbWrapper: {
          marginEnd: 'xmo9yow',
          marginStart: 'x17adc0v',
          marginTop: 'x9otpla',
          position: 'x1n2onr6',
          $$css: !0,
        },
        track: {
          backgroundColor: 'xwnonoy',
          borderTopStartRadius: 'xm3z3ea',
          borderTopEndRadius: 'x1x8b98j',
          borderBottomEndRadius: 'x131883w',
          borderBottomStartRadius: 'x16mih1h',
          display: 'x1lliihq',
          height: 'xqu0tyb',
          position: 'x10l6tqk',
          $$css: !0,
        },
      };
    function o(a, b) {
      a = a.reduce(function (a, c, d) {
        c = Math.abs(b - c);
        return a == null || c < a.distance || c === a.distance
          ? { distance: c, index: d }
          : a;
      }, null);
      return (a = a == null ? void 0 : a.index) != null ? a : 0;
    }
    function p(a, b, c) {
      return ((a - b) * 100) / (c - b);
    }
    function q(a, b, c) {
      return Math.min(Math.max(a, b), c);
    }
    function r(a) {
      return a.toString();
    }
    function s(a, b) {
      return a + b;
    }
    function t(a) {
      var b = m(a);
      k(function () {
        b.current = a;
      });
      return j(function (a) {
        return b.current.call(null, a);
      }, []);
    }
    function u(a, b) {
      a = a.changedTouches;
      if (b == null || !a) return null;
      for (var c = 0; c < a.length; ++c) {
        var d = a[c];
        if (d.identifier === b) return d.pageX;
      }
      return null;
    }
    function a(a, b) {
      var e,
        f = a.ariaLabel,
        g = a.ariaLabelledBy,
        v = a.ariaValueText,
        w = v === void 0 ? r : v;
      v = a.disabled;
      var x = v === void 0 ? !1 : v;
      v = a.max;
      var y = v === void 0 ? 100 : v;
      v = a.min;
      var z = v === void 0 ? 0 : v,
        A = a.onChange,
        B = a.onChangeSettled,
        C = a.onDragEnd,
        D = a.onDragStart;
      v = a.step;
      var E = v === void 0 ? 1 : v,
        F = a.values,
        G = a.thumbRefs;
      v = a.xstyleRail;
      var H = a.xstyleRoot,
        I = a.xstyleThumb;
      a = a.xstyleTrack;
      var J = c('useCometUniqueID')(),
        K = m(null),
        L = m(0),
        M = m(null),
        N = m(null),
        O = l(
          function () {
            var a = typeof F === 'number' ? [F] : [].concat(F);
            a.sort(function (a, b) {
              return a - b;
            });
            return a;
          },
          [F],
        ),
        P = p(O.length > 1 ? O[0] : z, z, y),
        Q = p(O[O.length - 1], z, y) - P;
      P =
        ((e = {}),
        (e[d('Locale').isRTL() ? 'right' : 'left'] = P + '%'),
        (e.width = Q + '%'),
        e);
      var R = j(
          function () {
            if (L.current != null && K.current) {
              var a = K.current.querySelector('#' + s(J, L.current));
              a != null && a.focus();
            }
          },
          [J],
        ),
        S = j(
          function (a) {
            var b,
              e = a.eventX;
            a = a.isMove;
            a = a === void 0 ? !1 : a;
            var f = K.current;
            if (f == null) {
              c('recoverableViolation')(
                'Slider Ref should have been set',
                'comet_ui',
              );
              return null;
            }
            if (x) return null;
            b = (b = f.ownerDocument.defaultView) != null ? b : window;
            f = f.getBoundingClientRect();
            var g = f.left;
            f = f.width;
            e = (e - g - b.pageXOffset) / f;
            d('Locale').isRTL() && (e = 1 - e);
            g = q(Math.round(((y - z) * e + z) / E) * E, z, y);
            b = a ? L.current : o(O, g);
            f = O;
            if (O[b] !== g) {
              e = [].concat(O);
              e[b] = g;
              e.sort(function (a, b) {
                return a - b;
              });
              f = e;
            }
            L.current = f.indexOf(g);
            return f;
          },
          [x, y, z, E, O],
        ),
        T = t(function (a) {
          a = S({ eventX: a.pageX, isMove: !0 });
          a != null && A && A(a);
          R();
        }),
        U = t(function (a) {
          a = S({ eventX: a.pageX });
          a != null && B && B(a);
          C == null ? void 0 : C();
          window.removeEventListener('mousemove', T, !0);
          window.removeEventListener('mouseup', U, !0);
        });
      Q = t(function (a) {
        if (x) return;
        var b = window.navigator.userAgent.indexOf('MSIE') >= 0;
        b || a.preventDefault();
        b = S({ eventX: a.pageX });
        b != null && A && A(b);
        R();
        D == null ? void 0 : D();
        window.addEventListener('mousemove', T, !0);
        window.addEventListener('mouseup', U, !0);
      });
      var V = t(function (a) {
          a = u(a, M.current);
          if (a == null) return;
          a = S({ eventX: a, isMove: !0 });
          a != null && A && A(a);
          R();
        }),
        W = t(function (a) {
          a = u(a, M.current);
          if (a == null) return;
          a = S({ eventX: a });
          a != null && B && B(a);
          C == null ? void 0 : C();
          window.removeEventListener('touchmove', V, !0);
          window.removeEventListener('touchend', W, !0);
        });
      e = t(function (a) {
        if (x) return;
        a.preventDefault();
        var b = a.changedTouches[0];
        b != null && (M.current = b.identifier);
        b = u(a, M.current);
        if (b == null) return;
        a = S({ eventX: b });
        a != null && A && A(a);
        R();
        D == null ? void 0 : D();
        window.addEventListener('touchmove', V, !0);
        window.addEventListener('touchend', W, !0);
      });
      k(
        function () {
          if (x) return;
          return function () {
            window.removeEventListener('mousemove', T, !0),
              window.removeEventListener('mouseup', U, !0),
              window.removeEventListener('touchmove', V, !0),
              window.removeEventListener('touchend', W, !0);
          };
        },
        [x, T, U, W, V, e],
      );
      var X = j(
          function (a) {
            var b = N.current;
            if (b != null) {
              a = q(Math.round(a / E) * E, z, y);
              if (O[b] !== a) {
                var c = [].concat(O);
                c[b] = a;
                c.sort(function (a, b) {
                  return a - b;
                });
                A && A(c);
                B && B(c);
              }
            }
          },
          [y, z, A, B, E, O],
        ),
        Y = (y - z) / 10,
        Z = l(
          function () {
            return [
              {
                command: { key: c('CometKeys').HOME },
                description: h._('__JHASH__eMV6jyHnlcd__JHASH__'),
                handler: function () {
                  N.current != null && X(z);
                },
              },
              {
                command: { key: c('CometKeys').END },
                description: h._('__JHASH__KpMPvdSTUNE__JHASH__'),
                handler: function () {
                  N.current != null && X(y);
                },
              },
              {
                command: { key: c('CometKeys').PAGE_DOWN },
                description: h._('__JHASH__a557Ek7cpwP__JHASH__'),
                handler: function () {
                  N.current != null && X(O[N.current] - Y);
                },
              },
              {
                command: { key: c('CometKeys').PAGE_UP },
                description: h._('__JHASH__cZV6Gu23eBt__JHASH__'),
                handler: function () {
                  N.current != null && X(O[N.current] + Y);
                },
              },
              {
                command: { key: c('CometKeys').LEFT },
                description: h._('__JHASH__SECfWzmS4jY__JHASH__'),
                handler: function () {
                  N.current != null && X(O[N.current] - E);
                },
              },
              {
                command: { key: c('CometKeys').DOWN },
                description: h._('__JHASH__jIpEkljm7J3__JHASH__'),
                handler: function () {
                  N.current != null && X(O[N.current] - E);
                },
              },
              {
                command: { key: c('CometKeys').RIGHT },
                description: h._('__JHASH__Apm6QxUGFmY__JHASH__'),
                handler: function () {
                  N.current != null && X(O[N.current] + E);
                },
              },
              {
                command: { key: c('CometKeys').UP },
                description: h._('__JHASH__ooB3b_ktI3-__JHASH__'),
                handler: function () {
                  N.current != null && X(O[N.current] + E);
                },
              },
            ];
          },
          [y, z, X, E, Y, O],
        );
      return i.jsx(c('CometComponentWithKeyCommands.react'), {
        commandConfigs: Z,
        children: i.jsxs('div', {
          className: c('stylex')([n.root, x && n.disabled, H]),
          onMouseDown: Q,
          onTouchStart: e,
          ref: K,
          role: 'none',
          children: [
            i.jsx('div', { className: c('stylex')([n.rail, v]), ref: b }),
            i.jsx('div', { className: c('stylex')([n.track, a]), style: P }),
            i.jsx('div', {
              className: 'xmo9yow x17adc0v x9otpla x1n2onr6',
              children: O.map(function (a, b) {
                var e = p(a, z, y),
                  j = f;
                f != null &&
                  O.length > 1 &&
                  (b === 0
                    ? (j = h._('__JHASH__wnRZhAgfq5K__JHASH__', [
                        h._param('slider label', f),
                      ]))
                    : b === O.length - 1 &&
                      (j = h._('__JHASH__oEbLXEirX2D__JHASH__', [
                        h._param('slider label', f),
                      ])));
                return i.jsx(
                  c('Pressable.react'),
                  {
                    accessibilityLabel: j,
                    accessibilityRelationship: { labelledby: g },
                    accessibilityRole: 'slider',
                    accessibilityState: {
                      disabled: x,
                      orientation: 'horizontal',
                    },
                    accessibilityValue: { max: y, min: z, now: a, text: w(a) },
                    disabled: x,
                    forwardedRef: G == null ? void 0 : G[b],
                    nativeID: s(J, b),
                    onBlur: function () {
                      N.current = null;
                    },
                    onFocus: function () {
                      N.current = b;
                    },
                    style:
                      ((j = {}),
                      (j[d('Locale').isRTL() ? 'right' : 'left'] = e + '%'),
                      j),
                    xstyle: function (a) {
                      return [
                        n.thumb,
                        a.focusVisible && n.thumbFocusVisible,
                        typeof I === 'function' ? I(a) : I,
                      ];
                    },
                  },
                  b,
                );
              }),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = i.forwardRef(a);
    g['default'] = e;
  },
  98,
);
__d(
  'CometSlider.react',
  ['BaseSlider.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.disabled,
        d = a.getRangeLabel,
        e = a.label,
        f = a.max,
        g = a.min,
        i = a.onChange,
        j = a.onChangeSettled,
        k = a.step;
      a = a.value;
      return h.jsx(c('BaseSlider.react'), {
        ariaLabel: e,
        ariaValueText: d,
        disabled: b,
        max: f,
        min: g,
        onChange: function (a) {
          i(a[0]);
        },
        onChangeSettled: function (a) {
          j && j(a[0]);
        },
        step: k,
        values: [a],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'LWICometWhatsAppPageExperiments',
  ['$InternalEnum', 'gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      return c('gkx')('716286');
    }
    d = b('$InternalEnum')({
      Control: 'control',
      Var1: 'var1',
      Var2: 'var2',
      Var3: 'var3',
    });
    g.canUseWhatsAppCTAMessagesObjectiveLWI = a;
    g.CTWALWIUpsellType = d;
  },
  98,
);
__d(
  'LWICometDropdownMenuGlimmer.react',
  ['BaseGlimmer.react', 'CometRowItem.react', 'LWICometRow.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        button: {
          appearance: 'xjyslct',
          backgroundColor: 'xjbqb8w',
          borderTop: 'x1n2xptk',
          borderEnd: 'xkbpzyx',
          borderBottom: 'xdppsyt',
          borderStart: 'x1rr5fae',
          borderTopStartRadius: 'xhk9q7s',
          borderTopEndRadius: 'x1otrzb0',
          borderBottomEndRadius: 'x1i1ezom',
          borderBottomStartRadius: 'x1o6z2jb',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          boxSizing: 'x9f619',
          height: 'xnnlda6',
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'xat24cr',
          marginStart: 'x1mh8g0r',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          position: 'x1n2onr6',
          textAlign: 'x16tdsg8',
          width: 'xh8yej3',
          zIndex: 'x1ja2u2z',
          $$css: !0,
        },
      };
    function a(a) {
      return h.jsx(c('LWICometRow.react'), {
        paddingTop: a.paddingTop,
        children: h.jsx(c('CometRowItem.react'), {
          children: h.jsx(c('BaseGlimmer.react'), {
            index: 0,
            xstyle: i.button,
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'LWICometMessagingAppsSectionConstants',
  [
    'fbt',
    'LWICometUnifiedCreationEligibilityChecker',
    'LWICometWhatsAppPageExperiments',
    'justknobx',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = ['MESSAGE_PAGE', 'INSTAGRAM_MESSAGE', 'WHATSAPP_MESSAGE'],
      j = 'www.instagram.com',
      k = 'https://fb.com/messenger_doc/',
      l = 'https://api.whatsapp.com/send';
    function m(a) {
      return i.includes(a);
    }
    var n = {
        type: 'MESSAGE_PAGE',
        value: { app_destination: 'MESSENGER', link: k },
      },
      o = {
        type: 'WHATSAPP_MESSAGE',
        value: { app_destination: 'WHATSAPP', link: l },
      },
      p = {
        app_destination: 'INSTAGRAM_DIRECT',
        link: 'https://www.instagram.com',
      };
    function q(a) {
      if (a == null) return null;
      var b = new URL('instagram://direct');
      b.searchParams.append('userid', a);
      return b.href;
    }
    function a(a) {
      a = q(a);
      return a != null
        ? {
            type: 'INSTAGRAM_MESSAGE',
            value: babelHelpers['extends']({}, p, { app_link: a, link: j }),
          }
        : null;
    }
    function b(a) {
      return a === (1).toString() || a === (3).toString();
    }
    function e(a) {
      return a === (2).toString();
    }
    var r = ['FACEBOOK', 'INSTAGRAM', 'MESSENGER'];
    function f(a, b) {
      var c =
          d(
            'LWICometUnifiedCreationEligibilityChecker',
          ).assetFeedSpecHasMessagingAppDestination('INSTAGRAM_MESSAGE', b) ||
          a === 'INSTAGRAM_MESSAGE',
        e =
          a === 'MESSAGE_PAGE' ||
          d(
            'LWICometUnifiedCreationEligibilityChecker',
          ).assetFeedSpecHasMessagingAppDestination('MESSAGE_PAGE', b);
      b =
        d(
          'LWICometUnifiedCreationEligibilityChecker',
        ).assetFeedSpecHasMessagingAppDestination('WHATSAPP_MESSAGE', b) ||
        a === 'WHATSAPP_MESSAGE';
      a = r;
      if (c && !e && !b)
        return a.filter(function (a) {
          return a === 'INSTAGRAM';
        });
      else if (!e)
        return a.filter(function (a) {
          return a !== 'MESSENGER';
        });
      else return a;
    }
    function s(a) {
      return (
        a.filter(function (a) {
          return m(a.type);
        }).length > 1
      );
    }
    function t(a, b, e, f, g) {
      return (
        c('justknobx')._('620') &&
        d(
          'LWICometWhatsAppPageExperiments',
        ).canUseWhatsAppCTAMessagesObjectiveLWI() &&
        a === 'AUTOMATIC' &&
        g &&
        (f === 'POST_ENGAGEMENT' || f === 'LINK_CLICKS') &&
        (e || b === 'WHATSAPP_MESSAGE')
      );
    }
    function u(a, b) {
      var c;
      a === 'INSTAGRAM_MESSAGE'
        ? (c = { app_destination: 'INSTAGRAM_DIRECT', app_link: q(b), link: j })
        : a === 'MESSAGE_PAGE'
        ? (c = { app_destination: 'MESSENGER', link: k })
        : a === 'WHATSAPP_MESSAGE' &&
          (c = { app_destination: 'WHATSAPP', link: l });
      return { type: a, value: c };
    }
    h = h._('__JHASH__U6iFpFPCh7l__JHASH__');
    var v = [
        'CLICK_TO_WHATSAPP_BUSINESS_NUMBER_REQUIRED_TENURED_ADVERTISERS_V2',
        'CLICK_TO_WHATSAPP_BUSINESS_NUMBER_WARNING_V2',
      ],
      w = [
        'MESSAGE_OBJECTIVE_REQUIRES_WHATSAPP_BUSINESS_NUMBER',
        'CLICK_TO_WHATSAPP_BUSINESS_NUMBER_REQUIRED_TENURED_ADVERTISERS',
        'CLICK_TO_WHATSAPP_BUSINESS_NUMBER_WARNING',
        'CLICK_TO_WHATSAPP_BUSINESS_NUMBER_REQUIRED',
      ].concat(v);
    g.INSTAGRAM_LINK = j;
    g.MESSENGER_LINK = k;
    g.WHATSAPP_LINK = l;
    g.isMessagingAppCTAType = m;
    g.ASSET_FEED_SPEC_MESSENGER_CTA = n;
    g.ASSET_FEED_SPEC_WHATSAPP_CTA = o;
    g.getAppLinkInstagram = q;
    g.getAssetFeedSpecInstagram = a;
    g.isWhatsAppNumberBusiness = b;
    g.isWhatsAppConsumerNumber = e;
    g.EFFECTIVE_PUBLISHER_PLATFORMS_DEFAULT_FOR_MESSAGES = r;
    g.getClientSideEffectivePublisherPlatformsForMessagesFromSpec = f;
    g.ctaOptionsArrayHasMultipleMessagingDestinations = s;
    g.showUnifiedCreationForPPE = t;
    g.getCallToActionFromType = u;
    g.automatedAdsWASMBUpsellBody = h;
    g.WhatsAppSMB2023ErrorCodes = v;
    g.WhatsappSMBErrorCodes = w;
  },
  98,
);
__d(
  'useLWICometImpressionLogger',
  ['LWICometProductUtils', 'react', 'requireDeferred', 'useLWILoggerContext'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback,
      i = c('requireDeferred')('LWICometFalcoEvent').__setRef(
        'useLWICometImpressionLogger',
      );
    function a(a) {
      var b = c('useLWILoggerContext')(),
        e = b.entryPoint,
        f = b.flow,
        g = b.flowID,
        j = b.pageID,
        k = b.product,
        l = b.targetID;
      return h(
        function () {
          i.onReady(function (b) {
            b.log({
              entry_point: e,
              event: a,
              flow: f,
              flow_id: g,
              page_id: j,
              post_id: l,
              product: d(
                'LWICometProductUtils',
              ).productFromGraphQLEnumToJSEnumStrict(k),
              side: 'client_side',
            });
          });
        },
        [e, a, f, g, j, k, l],
      );
    }
    g['default'] = a;
  },
  98,
);
