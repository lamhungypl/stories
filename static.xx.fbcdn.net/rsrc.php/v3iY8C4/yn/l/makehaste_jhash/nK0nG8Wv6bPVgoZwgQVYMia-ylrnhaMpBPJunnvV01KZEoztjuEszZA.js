/*FB_PKG_DELIM*/

__d(
  'GroupsCometSaleComposerDialogQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5322078187896411';
  },
  null,
);
__d(
  'GroupsCometSaleComposerDialogQuery$Parameters',
  ['GroupsCometSaleComposerDialogQuery_facebookRelayOperation'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b('GroupsCometSaleComposerDialogQuery_facebookRelayOperation'),
        metadata: {},
        name: 'GroupsCometSaleComposerDialogQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'MarketplaceCometCOVIDDeliveryMethodLocalEducationBannerQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '5915223341874866';
  },
  null,
);
__d(
  'MarketplaceCometCOVIDDeliveryMethodLocalEducationBannerQuery$Parameters',
  [
    'MarketplaceCometCOVIDDeliveryMethodLocalEducationBannerQuery_facebookRelayOperation',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'PreloadableConcreteRequest',
      params: {
        id: b(
          'MarketplaceCometCOVIDDeliveryMethodLocalEducationBannerQuery_facebookRelayOperation',
        ),
        metadata: {},
        name: 'MarketplaceCometCOVIDDeliveryMethodLocalEducationBannerQuery',
        operationKind: 'query',
        text: null,
      },
    };
    e.exports = a;
  },
  null,
);
__d(
  'BaseTextArea.react',
  [
    'BaseFocusRing.react',
    'BaseInput.react',
    'mergeRefs',
    'react',
    'useLayoutEffect_SAFE_FOR_SSR',
    'usePrevious',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useMemo,
      j = b.useRef,
      k = { unresizable: { resize: 'xtt52l0', $$css: !0 } };
    function a(a, b) {
      var d = a.xstyle,
        e = a.minRows,
        f = e === void 0 ? 1 : e;
      e = a.maxRows;
      var g = e === void 0 ? Infinity : e;
      e = a.suppressFocusRing;
      var l = a.unresizable,
        m = l === void 0 ? !1 : l;
      l = a.value;
      var n = babelHelpers.objectWithoutPropertiesLoose(a, [
          'xstyle',
          'minRows',
          'maxRows',
          'suppressFocusRing',
          'unresizable',
          'value',
        ]),
        o = l != null ? String(l) : l,
        p = j(null),
        q = c('usePrevious')(g),
        r = c('usePrevious')(o);
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          var a = p.current;
          if (a != null) {
            (q == null ||
              r == null ||
              o == null ||
              g < q ||
              o.length < r.length) &&
              (a.rows = Math.min(Math.max(f, 1), g));
            while (a.rows < g && a.clientHeight < a.scrollHeight) a.rows += 1;
            a.style.overflowY = a.rows < g ? 'hidden' : 'auto';
          }
        },
        [g, f, q, r, o],
      );
      var s = i(
        function () {
          return c('mergeRefs')(p, b);
        },
        [b],
      );
      return h.jsx(c('BaseFocusRing.react'), {
        suppressFocusRing: e,
        children: function (a) {
          return h.jsx(
            c('BaseInput.react'),
            babelHelpers['extends']({}, n, {
              ref: s,
              type: 'textarea',
              value: o,
              xstyle: [a, m && k.unresizable, d],
            }),
          );
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
__d(
  'CometFormComboboxMenuItem.react',
  [
    'ix',
    'CometIcon.react',
    'CometMenuItemBase.react',
    'CometMenuItemIcon.react',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useMemo;
    function a(a) {
      var b = a.auxItemType,
        e = a.icon,
        f = a.iconType,
        g = a.isSelected;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'auxItemType',
        'icon',
        'iconType',
        'isSelected',
      ]);
      var k = j(
        function () {
          var a = null;
          g &&
            (a = i.jsx(c('CometIcon.react'), {
              color: 'highlight',
              icon: d('fbicon')._(h('477820'), 20),
            }));
          if (b != null)
            switch (b) {
              case 'radio':
                a = g
                  ? i.jsx(c('CometIcon.react'), {
                      color: 'highlight',
                      icon: d('fbicon')._(h('621400'), 24),
                    })
                  : i.jsx(c('CometIcon.react'), {
                      color: 'primary',
                      icon: d('fbicon')._(h('545519'), 24),
                    });
                break;
            }
          return a;
        },
        [b, g],
      );
      return i.jsx(
        c('CometMenuItemBase.react'),
        babelHelpers['extends']({}, a, {
          'aria-selected': g,
          aux: k,
          iconNode:
            e != null
              ? i.jsx(c('CometMenuItemIcon.react'), {
                  icon: e,
                  use:
                    f === 'profile-picture'
                      ? 'contained'
                      : 'contained_small_icon',
                })
              : null,
          role: 'option',
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometFormTextArea.react',
  [
    'BaseTextArea.react',
    'CometFormInputWrapper.react',
    'react',
    'useBaseInputValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        disabled: { color: 'x1dntmbh', cursor: 'x1h6gzvc', $$css: !0 },
        hideLabel: { marginTop: 'x1anpbxc', $$css: !0 },
        textArea: {
          backgroundColor: 'xjbqb8w',
          borderTop: 'x76ihet',
          borderEnd: 'xwmqs3e',
          borderBottom: 'x112ta8',
          borderStart: 'xxxdfa6',
          boxSizing: 'x9f619',
          color: 'xzsf02u',
          display: 'x78zum5',
          fontSize: 'x1jchvi3',
          fontWeight: 'x1fcty0u',
          lineHeight: 'x132q4wb',
          marginBottom: 'xyorhqc',
          marginTop: 'xaqh0s9',
          outline: 'x1a2a7pz',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          paddingEnd: 'x1pi30zi',
          paddingStart: 'x1swvt13',
          resize: 'xtt52l0',
          width: 'xh8yej3',
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.addOnBottom,
        e = a.autoComplete,
        f = a.auxContent,
        g = a.disabled,
        j = g === void 0 ? !1 : g;
      g = a.helperText;
      var k = a.hideLabel,
        l = k === void 0 ? !1 : k;
      k = a.label;
      var m = a.maxLength,
        n = a.maxRows,
        o = a.minRows,
        p = a.onBlur,
        q = a.onFocus,
        r = a.onValueChange,
        s = a.placeholder,
        t = a.suppressFocusRing,
        u = a.testid;
      u = a.validationState;
      var v = a.validator,
        w = a.value;
      v = c('useBaseInputValidators')({
        validator: v,
        value: (a = w) != null ? a : '',
      });
      a = v.topResultReason;
      v = v.topResultType;
      var x = v !== 'CORRECT' ? v : u;
      return h.jsx(c('CometFormInputWrapper.react'), {
        addOnBottom: d,
        auxContent: f,
        cursor: 'text',
        disabled: j,
        helperText: a != null ? a : g,
        hideLabel: l,
        label: k,
        suppressFocusRing: t,
        validationState: x,
        value: w,
        withHeaderMask: !l,
        children: function (a) {
          var d = a.focused,
            f = a.helperTextID;
          a = a.id;
          return h.jsx(c('BaseTextArea.react'), {
            'aria-describedby': f,
            'aria-invalid': x === 'ERROR',
            autoComplete: e,
            disabled: j,
            id: a,
            maxLength: m,
            maxRows: n,
            minRows: o,
            onBlur: p,
            onFocus: q,
            onValueChange: r,
            placeholder: d ? s : null,
            ref: b,
            suppressFocusRing: !0,
            testid: void 0,
            value: w,
            xstyle: [i.textArea, j && i.disabled, l && i.hideLabel],
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
__d(
  'CometSelectMenuTrigger.react',
  [
    'fbt',
    'BaseContextualLayer.react',
    'CometComponentWithKeyCommands.react',
    'CometFormComboboxMenuItem.react',
    'CometKeys',
    'CometMenu.react',
    'FocusInertRegion.react',
    'FocusWithinHandler.react',
    'clearTimeout',
    'focusScopeQueries',
    'react',
    'setTimeout',
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
      n = b.useState,
      o = 1e3,
      p = { hideOutline: { outline: 'x1a2a7pz', $$css: !0 } };
    function q(a, b) {
      return a + '__' + (b != null ? b : '0');
    }
    function a(a) {
      var b = a.children,
        e = a.disabled;
      e = e === void 0 ? !1 : e;
      var f = a.header,
        g = a.onChange,
        r = a.options,
        s = a.selectedValue,
        t = a.size;
      t = t === void 0 ? 'normal' : t;
      var u = a.truncate;
      u = u === void 0 ? !0 : u;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'children',
        'disabled',
        'header',
        'onChange',
        'options',
        'selectedValue',
        'size',
        'truncate',
      ]);
      var v = n(!1),
        w = v[0],
        x = v[1],
        y = w && r.length > 0,
        z = c('useCometUniqueID')();
      v = c('useCometUniqueID')();
      w = c('useCometUniqueID')();
      var A = n(null),
        B = A[0],
        C = A[1],
        D = m(null),
        E = j(function () {
          return x(!0);
        }, []),
        F = j(function () {
          C(null), x(!1);
        }, []);
      A = j(
        function (a) {
          a || F();
        },
        [F],
      );
      var G = j(
          function () {
            if (y) B != null && g(B), F();
            else {
              var a;
              C((a = s) != null ? a : null);
              E();
            }
          },
          [B, y, g, F, E, s],
        ),
        H = r.filter(function (a) {
          return !a.disabled;
        }),
        I = l(
          function () {
            return [
              {
                command: { key: c('CometKeys').ENTER },
                description: h._('__JHASH__D7rrH0P9cXN__JHASH__'),
                handler: function () {},
                triggerOnKeyUp: !0,
              },
            ].concat(
              y
                ? [
                    {
                      command: { key: c('CometKeys').ESCAPE },
                      description: h._('__JHASH__acp59sWhd5p__JHASH__'),
                      handler: function () {
                        y && F();
                      },
                    },
                  ]
                : [],
              [
                {
                  command: { key: c('CometKeys').DOWN },
                  description: h._('__JHASH__nRXxFwHPK-w__JHASH__'),
                  handler: function () {
                    if (H.length > 0) {
                      var a = H.findIndex(function (a) {
                        return a.value === B;
                      });
                      if (B == null || a === -1) {
                        var b;
                        C((b = s) != null ? b : H[0].value);
                      } else
                        a === H.length - 1 ? C(H[0].value) : C(H[a + 1].value);
                      E();
                    }
                  },
                },
                {
                  command: { key: c('CometKeys').UP },
                  description: h._('__JHASH__lOq5ArcE24S__JHASH__'),
                  handler: function () {
                    if (H.length > 0) {
                      var a = H.findIndex(function (a) {
                        return a.value === B;
                      });
                      if (B == null || a === -1) {
                        var b;
                        C((b = s) != null ? b : H[H.length - 1].value);
                      } else
                        a === 0 ? C(H[H.length - 1].value) : C(H[a - 1].value);
                      E();
                    }
                  },
                },
                {
                  command: { alt: !0, key: c('CometKeys').DOWN },
                  description: h._('__JHASH__mRSLnvBXjaQ__JHASH__'),
                  handler: E,
                },
                {
                  command: { alt: !0, key: c('CometKeys').UP },
                  description: h._('__JHASH__JOM78hCmfWT__JHASH__'),
                  handler: F,
                },
                {
                  command: { key: c('CometKeys').HOME },
                  description: h._('__JHASH__5a8jlc__RcE__JHASH__'),
                  handler: function () {
                    y && C(H[0].value);
                  },
                },
                {
                  command: { key: c('CometKeys').END },
                  description: h._('__JHASH__S0D21bIqazs__JHASH__'),
                  handler: function () {
                    y && C(H[H.length - 1].value);
                  },
                },
              ],
            );
          },
          [E, B, F, s, y, H],
        ),
        J = m(null),
        K = m(''),
        L = j(
          function (a) {
            if (
              K.current === '' &&
              (a.code === 'Backspace' || a.code === 'Clear' || a.key === ' ')
            )
              return;
            if (
              !(
                a.key.length === 1 ||
                a.code === 'Backspace' ||
                a.code === 'Clear'
              ) ||
              a.altKey ||
              a.ctrlKey ||
              a.metaKey
            )
              return;
            a.code === 'Backspace' || a.code === 'Clear'
              ? (K.current = K.current.substring(0, K.current.length - 1))
              : (K.current += a.key.toLocaleLowerCase());
            a.preventDefault();
            J.current != null && c('clearTimeout')(J.current);
            J.current = c('setTimeout')(function () {
              (K.current = ''), (J.current = null);
            }, o);
            a = H.findIndex(function (a) {
              return a.value === B;
            });
            a = a === -1 ? 0 : a;
            for (var b = 0; b < H.length; b++) {
              var d = (b + a) % H.length;
              d = H[d];
              if (
                d.label.toString().toLocaleLowerCase().startsWith(K.current)
              ) {
                y || E();
                C(d.value);
                return;
              }
            }
          },
          [B, H, y, E],
        );
      k(
        function () {
          var a = D.current;
          if (a != null) {
            a.addEventListener('keydown', L);
            return function () {
              a.removeEventListener('keydown', L);
            };
          }
        },
        [L],
      );
      var M = r.findIndex(function (a) {
        return a.value === B;
      });
      return i.jsx(c('FocusWithinHandler.react'), {
        onFocusChange: A,
        children: i.jsxs(c('CometComponentWithKeyCommands.react'), {
          commandConfigs: I,
          children: [
            b(
              D,
              {
                'aria-activedescendant':
                  y && B != null && M !== -1 ? q(z, M) : void 0,
                'aria-controls': y ? v : void 0,
                'aria-expanded': y,
                disabled: e,
                id: w,
                onPress: G,
                role: 'combobox',
                xstyle: [B != null && p.hideOutline],
              },
              y,
            ),
            y &&
              i.jsx(
                c('BaseContextualLayer.react'),
                babelHelpers['extends']({}, a, {
                  contextRef: D,
                  children: i.jsx(c('FocusInertRegion.react'), {
                    focusQuery: d('focusScopeQueries').tabbableScopeQuery,
                    children: i.jsx(c('CometMenu.react'), {
                      header: f,
                      id: v,
                      role: 'listbox',
                      size: t,
                      truncate: u,
                      children: r.map(function (a, b) {
                        return i.jsx(
                          c('CometFormComboboxMenuItem.react'),
                          {
                            'aria-disabled': a.disabled,
                            'aria-posinset': b,
                            'aria-selected': a.value === s,
                            'aria-setsize': r.length,
                            bodyColor: a.bodyColor,
                            bodyText: a.bodyText,
                            disabled: a.disabled,
                            icon: a.icon,
                            id: q(z, b),
                            isSelected: a.value === s,
                            onClick: function () {
                              g(a.value), F();
                            },
                            preventClosingMenuOnSelect: !0,
                            primaryText: a.label,
                            role: 'option',
                            secondaryColor: a.secondaryColor,
                            secondaryText: a.secondaryText,
                            testid: void 0,
                            visuallyFocused: a.value === B,
                          },
                          a.value,
                        );
                      }),
                    }),
                  }),
                }),
              ),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometSelect.react',
  [
    'ix',
    'CometIcon.react',
    'CometPressable.react',
    'CometScreenReaderText.react',
    'CometSelectMenuTrigger.react',
    'TetraText.react',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useMemo,
      k = {
        button: {
          alignItems: 'x6s0dn4',
          appearance: 'xjyslct',
          backgroundColor: 'x1qhmfi1',
          borderTopStartRadius: 'xhk9q7s',
          borderTopEndRadius: 'x1otrzb0',
          borderBottomEndRadius: 'x1i1ezom',
          borderBottomStartRadius: 'x1o6z2jb',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          borderTopWidth: 'x972fbf',
          borderEndWidth: 'xcfux6l',
          borderBottomWidth: 'x1qhh985',
          borderStartWidth: 'xm0m39n',
          boxSizing: 'x9f619',
          cursor: 'x1ypdohk',
          justifyContent: 'x1qughib',
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'xat24cr',
          marginStart: 'x1mh8g0r',
          paddingTop: 'x889kno',
          paddingEnd: 'xn6708d',
          paddingBottom: 'x1a8lsjc',
          paddingStart: 'x1ye3gou',
          position: 'x1n2onr6',
          textAlign: 'x1yc453h',
          zIndex: 'x1ja2u2z',
          $$css: !0,
        },
        buttonDisabled: { cursor: 'x1h6gzvc', $$css: !0 },
        buttonExpanded: { minWidth: 'xgqtt45', $$css: !0 },
        icon: { lineHeight: 'x14ju556', marginStart: 'x1i64zmx', $$css: !0 },
        leftIcon: { lineHeight: 'x14ju556', marginEnd: 'x1emribx', $$css: !0 },
      };
    function a(a) {
      var b = a['aria-describedby'],
        e = a['aria-label'];
      a.aux;
      var f = a.defaultLabel,
        g = a.disabled,
        l = g === void 0 ? !1 : g;
      g = a.expanded;
      var m = g === void 0 ? !1 : g;
      g = a.focusable;
      var n = g === void 0 ? !0 : g,
        o = a.icon,
        p = a.labelLineLimit;
      g = a.testid;
      var q = babelHelpers.objectWithoutPropertiesLoose(a, [
          'aria-describedby',
          'aria-label',
          'aux',
          'defaultLabel',
          'disabled',
          'expanded',
          'focusable',
          'icon',
          'labelLineLimit',
          'testid',
        ]),
        r = j(
          function () {
            var a = q.options.find(function (a) {
              return a.value === q.selectedValue;
            });
            return a != null ? a.label : (a = f) != null ? a : '';
          },
          [f, q.options, q.selectedValue],
        );
      return i.jsx(
        c('CometSelectMenuTrigger.react'),
        babelHelpers['extends']({}, q, {
          disabled: l,
          children: function (a, f) {
            var g = f.xstyle;
            f = babelHelpers.objectWithoutPropertiesLoose(f, ['xstyle']);
            return i.jsxs(
              c('CometPressable.react'),
              babelHelpers['extends']({}, f, {
                'aria-describedby': b,
                'aria-haspopup': 'listbox',
                expanding: !0,
                focusable: n,
                ref: a,
                testid: void 0,
                xstyle: [
                  k.button,
                  m && k.buttonExpanded,
                  l && k.buttonDisabled,
                  g,
                ],
                children: [
                  o &&
                    i.jsx('div', {
                      className: 'x14ju556 x1emribx',
                      children: i.jsx(
                        c('CometIcon.react'),
                        babelHelpers['extends']({}, o, {
                          color: l ? 'disabled' : 'primary',
                        }),
                      ),
                    }),
                  e != null &&
                    i.jsx(c('CometScreenReaderText.react'), { text: e }),
                  i.jsx(c('TetraText.react'), {
                    color: l ? 'disabled' : null,
                    numberOfLines: p,
                    type: 'bodyLink3',
                    children: r,
                  }),
                  i.jsx('div', {
                    className: 'x14ju556 x1i64zmx',
                    children: i.jsx(c('CometIcon.react'), {
                      color: l ? 'disabled' : 'primary',
                      icon: d('fbicon')._(h('481882'), 16),
                    }),
                  }),
                ],
              }),
            );
          },
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'GroupsCometSaleComposerDialog.entrypoint',
  [
    'GroupsCometSaleComposerDialogQuery$Parameters',
    'JSResourceForInteraction',
    'MarketplaceCometCOVIDDeliveryMethodLocalEducationBannerQuery$Parameters',
    'WebPixelRatio',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = {
      getPreloadProps: function (a) {
        var e = a.listingId;
        a = a.originGroupId;
        return {
          queries: {
            composerQueryReference: {
              parameters: c('GroupsCometSaleComposerDialogQuery$Parameters'),
              variables: {
                delivery_types: ['IN_PERSON'],
                listingId: e,
                origin_group_id: a,
                scale: d('WebPixelRatio').get(),
              },
            },
            covidEducationBannerQueryReference: {
              parameters: b(
                'MarketplaceCometCOVIDDeliveryMethodLocalEducationBannerQuery$Parameters',
              ),
              variables: {
                input: { callsite: 'COMET_COMPOSER_SHIPPING_TAB' },
                scale: d('WebPixelRatio').get(),
              },
            },
          },
        };
      },
      root: c('JSResourceForInteraction')(
        'GroupsCometSaleComposerDialog.react',
      ).__setRef('GroupsCometSaleComposerDialog.entrypoint'),
    };
    g['default'] = a;
  },
  98,
);
__d(
  'isEmail',
  [],
  function (a, b, c, d, e, f) {
    var g =
      /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;
    function a(a) {
      return g.test(a);
    }
    f['default'] = a;
  },
  66,
);
__d(
  'CometMarketplaceComposerRootComponentQuery_facebookRelayOperation',
  [],
  function (a, b, c, d, e, f) {
    e.exports = '9256334157713730';
  },
  null,
); /*FB_PKG_DELIM*/
__d(
  'CometFormInputPasswordStateIcon.react',
  ['ix', 'CometIcon.react', 'fbicon', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      a = a.isVisible;
      return a
        ? i.jsx(c('CometIcon.react'), {
            color: 'primary',
            icon: d('fbicon')._(h('491228'), 20),
            testid: void 0,
          })
        : i.jsx(c('CometIcon.react'), {
            color: 'primary',
            icon: d('fbicon')._(h('491223'), 20),
            testid: void 0,
          });
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometFormInputValidationStateIcon',
  [
    'ix',
    'CometIcon.react',
    'CometProgressRingIndeterminate.react',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    a = d('react');
    b = {
      CORRECT: a.jsx(c('CometIcon.react'), {
        color: 'positive',
        icon: d('fbicon')._(h('498146'), 20),
        testid: void 0,
      }),
      ERROR: a.jsx(c('CometIcon.react'), {
        color: 'negative',
        icon: d('fbicon')._(h('502062'), 20),
        testid: void 0,
      }),
      LOADING: a.jsx(c('CometProgressRingIndeterminate.react'), {
        color: 'disabled',
        size: 20,
      }),
      WARN: a.jsx(c('CometIcon.react'), {
        color: 'warning',
        icon: d('fbicon')._(h('502062'), 20),
        testid: void 0,
      }),
    };
    g['default'] = b;
  },
  98,
);
__d(
  'CometFormInputWrapperHelperText.react',
  ['TetraTextPairing.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.validationState;
      a = a.value;
      return h.jsx(c('TetraTextPairing.react'), {
        level: 4,
        meta: a,
        metaColor: b === 'ERROR' ? 'negative' : 'secondary',
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometFormInputWrapper.react',
  [
    'BaseFocusRing.react',
    'CometFormInputValidationStateIcon',
    'CometFormInputWrapperHelperText.react',
    'FocusWithinHandler.react',
    'isBlueprintStylesEnabled',
    'react',
    'stylex',
    'useCometUniqueID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useRef,
      l = b.useState,
      m = {
        disabled: {
          backgroundColor: 'x443n21',
          borderTopColor: 'x8cjs6t',
          borderEndColor: 'x1ch86jh',
          borderBottomColor: 'x80vd3b',
          borderStartColor: 'xckqwgs',
          boxShadow: 'x1gnnqk1',
          cursor: 'x1h6gzvc',
          ':active_backgroundColor': 'xmyovnm',
          $$css: !0,
        },
        error: {
          borderTopColor: 'xmrkho8',
          borderEndColor: 'xa6p843',
          borderBottomColor: 'xfz9iyh',
          borderStartColor: 'xy4nld6',
          ':active_backgroundColor': 'x1kxczlb',
          $$css: !0,
        },
        errorFocused: { boxShadow: 'xrq537t', $$css: !0 },
        errorHovered: { backgroundColor: 'xpc7vr0', $$css: !0 },
        headerMask: {
          backgroundColor: 'x1jx94hy',
          end: 'x92rtbv',
          height: 'xlup9mm',
          position: 'x10l6tqk',
          start: 'x16q8cke',
          top: 'xfr5jun',
          $$css: !0,
        },
        helperText: { marginTop: 'x1xmf6yo', $$css: !0 },
        hiddenHelperText: {
          clip: 'xzpqnlu',
          clipPath: 'x1hyvwdk',
          height: 'xjm9jq1',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          position: 'x10l6tqk',
          width: 'x1i1rx1s',
          $$css: !0,
        },
        hovered: {
          borderTopColor: 'xemkom9',
          borderEndColor: 'x155i9mh',
          borderBottomColor: 'xqnlwer',
          borderStartColor: 'xa7jiu',
          $$css: !0,
        },
        input: {
          backgroundColor: 'xjbqb8w',
          flexGrow: 'x1iyjqo2',
          maxWidth: 'x193iq5w',
          minWidth: 'xeuugli',
          position: 'x1n2onr6',
          $$css: !0,
        },
        inputRow: { display: 'x78zum5', width: 'xh8yej3', $$css: !0 },
        label: {
          color: 'xi81zsa',
          cursor: 'xmper1u',
          display: 'x1lliihq',
          end: 'x1923su1',
          fontSize: 'x1jchvi3',
          fontWeight: 'x1fcty0u',
          lineHeight: 'x132q4wb',
          maxWidth: 'x193iq5w',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          pointerEvents: 'x47corl',
          position: 'x10l6tqk',
          start: 'x16q8cke',
          textOverflow: 'xlyipyv',
          top: 'xoyzfg9',
          transformOrigin: 'x1al4vs7',
          transitionDuration: 'x1k90msu',
          transitionProperty: 'x11xpdln',
          transitionTimingFunction: 'x1qfuztq',
          whiteSpace: 'xuxw1ft',
          $$css: !0,
        },
        labelDisabled: { color: 'x1dntmbh', $$css: !0 },
        labelError: { color: 'x1a1m0xk', $$css: !0 },
        labelHighlighted: { color: 'x1qq9wsj', $$css: !0 },
        labelShrunk: { end: 'x19c1rep', transform: 'x1cab348', $$css: !0 },
        root: {
          backgroundColor: 'x1jx94hy',
          borderTopColor: 'x8cjs6t',
          borderEndColor: 'x1ch86jh',
          borderBottomColor: 'x80vd3b',
          borderStartColor: 'xckqwgs',
          borderTopStartRadius: 'xhk9q7s',
          borderTopEndRadius: 'x1otrzb0',
          borderBottomEndRadius: 'x1i1ezom',
          borderBottomStartRadius: 'x1o6z2jb',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          borderTopWidth: 'x178xt8z',
          borderEndWidth: 'xm81vs4',
          borderBottomWidth: 'xso031l',
          borderStartWidth: 'xy80clv',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          position: 'x1n2onr6',
          zIndex: 'x1ja2u2z',
          ':active_backgroundColor': 'x1egnk41',
          $$css: !0,
        },
        secondary: { display: 'x78zum5', $$css: !0 },
        shake: {
          animationDuration: 'x1f7sx64',
          animationFillMode: 'x1u6ievf',
          animationName: 'xcqsoj',
          animationTimingFunction: 'x1ojsi0c',
          $$css: !0,
        },
        validationIcon: {
          paddingEnd: 'x1pi30zi',
          paddingTop: 'x109j2v6',
          $$css: !0,
        },
        validationIconHideLabel: { paddingTop: 'xz9dl7a', $$css: !0 },
        warn: {
          borderTopColor: 'x1xqsql5',
          borderEndColor: 'x1sn40xs',
          borderBottomColor: 'x1gkuw16',
          borderStartColor: 'xg1yei2',
          ':active_backgroundColor': 'xhexg4x',
          $$css: !0,
        },
        warnFocused: { boxShadow: 'x1hliol7', $$css: !0 },
        warnHovered: { backgroundColor: 'x12tslg2', $$css: !0 },
      },
      n = {
        pointer: { cursor: 'x1ypdohk', $$css: !0 },
        text: { cursor: 'x1ed109x', $$css: !0 },
      },
      o = {
        root: {
          borderTopStartRadius: 'xyi19xy',
          borderTopEndRadius: 'x1ccrb07',
          borderBottomEndRadius: 'xtf3nb5',
          borderBottomStartRadius: 'x1pc53ja',
          $$css: !0,
        },
      };
    function p(a) {
      if (Array.isArray(a)) return a.length === 0;
      else if (typeof a === 'object') {
        if (a) for (var b in a) return !1;
        return !0;
      } else return a == null || a === '';
    }
    function a(a) {
      var b = a.addOnBottom,
        d = a.addOnStart,
        e = a.alwaysShrinkLabel,
        f = e === void 0 ? !1 : e,
        g = a['aria-activedescendant'],
        q = a['aria-controls'],
        r = a['aria-expanded'],
        s = a['aria-haspopup'],
        t = a.ariaLabel,
        u = a.auxContent,
        v = a.children,
        w = a.comboboxKeyDown,
        x = a.cursor;
      e = a.disabled;
      var y = e === void 0 ? !1 : e,
        z = a.helperText;
      e = a.helperTextIsHidden;
      e = e === void 0 ? !1 : e;
      var A = a.hideLabel,
        B = A === void 0 ? !1 : A,
        C = a.label,
        D = a.labelRef;
      A = a.onFocusChange;
      var E = a.onPress,
        F = a.role,
        G = a.shrinkLabelOnFocus,
        H = G === void 0 ? !0 : G,
        I = a.suppressFocusRing,
        J = a.validationState;
      G = a.value;
      a = a.withHeaderMask;
      var K = a === void 0 ? !1 : a,
        L = c('useCometUniqueID')(),
        M = c('useCometUniqueID')();
      a = l(!1);
      var N = a[0],
        O = a[1];
      a = l(!1);
      var P = a[0],
        Q = a[1],
        R = !p(G),
        S = i(
          function () {
            P || Q(!0);
          },
          [P],
        ),
        T = i(
          function () {
            P && Q(!1);
          },
          [P],
        ),
        U = k(null),
        V = k(null);
      a = l(!1);
      var W = a[0],
        X = a[1];
      j(
        function () {
          if (w == null) return;
          var a = V && V.current;
          if (a != null) {
            a.addEventListener('keydown', w);
            return function () {
              a.removeEventListener('keydown', w);
            };
          }
        },
        [w],
      );
      return h.jsxs('div', {
        ref: V,
        children: [
          h.jsx(c('FocusWithinHandler.react'), {
            onFocusChange: A,
            children: function (a) {
              return h.jsx(c('BaseFocusRing.react'), {
                suppressFocusRing: !W || I,
                children: function (e) {
                  var i;
                  return h.jsxs('label', {
                    'aria-activedescendant': g,
                    'aria-controls': q,
                    'aria-expanded': r,
                    'aria-haspopup': s,
                    'aria-label': (i = t) != null ? i : C,
                    className: c('stylex')(
                      m.root,
                      c('isBlueprintStylesEnabled')() && o.root,
                      n[x],
                      P && m.hovered,
                      a && c('BaseFocusRing.react').focusRingXStyle,
                      J === 'WARN' && [
                        m.warn,
                        P && m.warnHovered,
                        a && m.warnFocused,
                      ],
                      J === 'ERROR' && [
                        m.error,
                        P && m.errorHovered,
                        a && m.errorFocused,
                      ],
                      y && m.disabled,
                      N && m.shake,
                      e,
                    ),
                    htmlFor: L,
                    onAnimationEnd: function () {
                      O(!1);
                    },
                    onClick: function (a) {
                      y ? O(!0) : E && E(a);
                    },
                    onMouseEnter: S,
                    onMouseLeave: T,
                    ref: U,
                    role: E != null ? (F != null ? F : 'button') : void 0,
                    suppressHydrationWarning: !0,
                    tabIndex: E != null ? 0 : void 0,
                    children: [
                      h.jsxs('div', {
                        className: 'x78zum5 xh8yej3',
                        children: [
                          d,
                          h.jsxs('div', {
                            className:
                              'xjbqb8w x1iyjqo2 x193iq5w xeuugli x1n2onr6',
                            children: [
                              K &&
                                !y &&
                                (R || a) &&
                                h.jsx('span', {
                                  className:
                                    'x92rtbv xlup9mm x10l6tqk x16q8cke xfr5jun' +
                                    (J === 'ERROR' && P
                                      ? ' xpc7vr0'
                                      : '' +
                                        (J === 'WARN' && P
                                          ? ' x12tslg2'
                                          : ' x1jx94hy')),
                                }),
                              !B &&
                                h.jsx('span', {
                                  className:
                                    'xmper1u x1lliihq x1jchvi3 x1fcty0u x132q4wb x193iq5w x6ikm8r x10wlt62 x47corl x10l6tqk x16q8cke xlyipyv xoyzfg9 x1al4vs7 x1k90msu x11xpdln x1qfuztq xuxw1ft' +
                                    ((y
                                      ? ' x1dntmbh'
                                      : '' +
                                        ((J == null && a
                                          ? ' x1qq9wsj'
                                          : '' +
                                            (J === 'ERROR'
                                              ? ' x1a1m0xk'
                                              : ' xi81zsa')) +
                                          (R || f || (a && H)
                                            ? ''
                                            : '' +
                                              (J == null && a
                                                ? ''
                                                : '' +
                                                  (J === 'ERROR'
                                                    ? ''
                                                    : ''))))) +
                                      (R || f || (a && H)
                                        ? ' x19c1rep x1cab348'
                                        : ' x1923su1')),
                                  ref: D,
                                  children: C,
                                }),
                              h.jsx(c('FocusWithinHandler.react'), {
                                onFocusChange: X,
                                children: v({
                                  filled: R,
                                  focused: a,
                                  helperTextID:
                                    z != null && J != null ? M : void 0,
                                  id: L,
                                  rootRef: U,
                                }),
                              }),
                            ],
                          }),
                          (u != null || J != null) &&
                            h.jsxs('div', {
                              className: 'x78zum5',
                              children: [
                                J != null &&
                                  h.jsx('div', {
                                    className:
                                      'x1pi30zi' +
                                      (B ? ' xz9dl7a' : ' x109j2v6'),
                                    children: c(
                                      'CometFormInputValidationStateIcon',
                                    )[J],
                                  }),
                                u,
                              ],
                            }),
                        ],
                      }),
                      b,
                    ],
                  });
                },
              });
            },
          }),
          z != null &&
            (e
              ? h.jsx('div', {
                  className:
                    'xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s',
                  id: M,
                  children: z,
                })
              : h.jsx('div', {
                  className: 'x1xmf6yo',
                  id: M,
                  children: h.jsx(c('CometFormInputWrapperHelperText.react'), {
                    validationState: J,
                    value: z,
                  }),
                })),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'CometFormTextInput.react',
  [
    'BaseTextInput.react',
    'CometFormInputPasswordStateIcon.react',
    'CometFormInputWrapper.react',
    'CometIcon.react',
    'CometPressable.react',
    'react',
    'useBaseInputValidators',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useState,
      j = {
        disabled: {
          backgroundColor: 'x443n21',
          color: 'x1dntmbh',
          cursor: 'x1h6gzvc',
          $$css: !0,
        },
        emoji: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          justifyContent: 'xl56j7k',
          paddingStart: 'x1ye3gou',
          pointerEvents: 'x47corl',
          $$css: !0,
        },
        icon: {
          paddingStart: 'x1swvt13',
          paddingTop: 'x109j2v6',
          pointerEvents: 'x47corl',
          $$css: !0,
        },
        input: {
          backgroundColor: 'xjbqb8w',
          borderTop: 'x76ihet',
          borderEnd: 'xwmqs3e',
          borderBottom: 'x112ta8',
          borderStart: 'xxxdfa6',
          boxSizing: 'x9f619',
          color: 'xzsf02u',
          fontSize: 'x1uxerd5',
          fontWeight: 'x1fcty0u',
          lineHeight: 'x132q4wb',
          paddingBottom: 'x1a8lsjc',
          paddingEnd: 'x1pi30zi',
          paddingStart: 'x1swvt13',
          paddingTop: 'x9desvi',
          width: 'xh8yej3',
          '::-ms-clear_display': 'x15h3p50',
          '::-ms-reveal_display': 'x10emqs4',
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.autoComplete,
        e = a.autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD,
        f = a.auxContent,
        g = a.disabled,
        k = g === void 0 ? !1 : g;
      g = a.emojiSkittle;
      var l = a.helperText,
        m = a.helperTextIsHidden;
      m = m === void 0 ? !1 : m;
      var n = a.icon,
        o = a.inputMode,
        p = a.label,
        q = a.labelRef,
        r = a.maxLength,
        s = a.onBlur,
        t = a.onClick,
        u = a.onFocus,
        v = a.onValueChange,
        w = a.placeholder,
        x = a.readOnly,
        y = a.suppressFocusRing,
        z = a.testid;
      z = a.type;
      z = z === void 0 ? 'text' : z;
      var A = a.validationState,
        B = a.validator,
        C = a.value,
        D = a.xstyle,
        E = babelHelpers.objectWithoutPropertiesLoose(a, [
          'autoComplete',
          'autoFocus_PLEASE_USE_FOCUS_REGION_INSTEAD',
          'auxContent',
          'disabled',
          'emojiSkittle',
          'helperText',
          'helperTextIsHidden',
          'icon',
          'inputMode',
          'label',
          'labelRef',
          'maxLength',
          'onBlur',
          'onClick',
          'onFocus',
          'onValueChange',
          'placeholder',
          'readOnly',
          'suppressFocusRing',
          'testid',
          'type',
          'validationState',
          'validator',
          'value',
          'xstyle',
        ]);
      B = c('useBaseInputValidators')({
        validator: B,
        value: (a = C) != null ? a : '',
      });
      a = B.topResultReason;
      B = B.topResultType;
      var F = z === 'password',
        G = i(!1),
        H = G[0],
        I = G[1];
      G = F && Boolean(C);
      G = G
        ? h.jsx('div', {
            className: 'x78zum5',
            children: h.jsx('div', {
              className: 'x1pi30zi x109j2v6',
              children: h.jsx(c('CometPressable.react'), {
                onPress: function () {
                  return I(!H);
                },
                overlayDisabled: !0,
                children: h.jsx(c('CometFormInputPasswordStateIcon.react'), {
                  isVisible: H,
                }),
              }),
            }),
          })
        : null;
      var J = F ? (H ? 'text' : 'password') : z,
        K = B !== 'CORRECT' ? B : A;
      return h.jsx(c('CometFormInputWrapper.react'), {
        addOnStart:
          (n != null &&
            h.jsx('div', {
              className: 'x1swvt13 x109j2v6 x47corl',
              children: h.jsx(c('CometIcon.react'), {
                color: 'secondary',
                icon: n,
              }),
            })) ||
          (g != null &&
            h.jsx('div', {
              className: 'x6s0dn4 x78zum5 xl56j7k x1ye3gou x47corl',
              children: g,
            })),
        auxContent: (F = G) != null ? F : f,
        cursor: 'text',
        disabled: k,
        helperText: a != null ? a : l,
        helperTextIsHidden: m,
        label: p,
        labelRef: q,
        suppressFocusRing: y,
        validationState: K,
        value: C,
        children: function (a) {
          var f = a.focused,
            g = a.helperTextID;
          a = a.id;
          return h.jsx(
            c('BaseTextInput.react'),
            babelHelpers['extends'](
              {
                'aria-describedby': g,
                'aria-invalid': K === 'ERROR',
                autoComplete: d,
                autoFocus: e,
                disabled: k,
                id: a,
                inputMode: o,
                maxLength: r,
                onBlur: s,
                onClick: t,
                onFocus: u,
                onValueChange: v,
                placeholder: f ? w : null,
                readOnly: x,
                ref: b,
                suppressFocusRing: !0,
                testid: void 0,
                type: J,
                value: C,
                xstyle: [
                  j.input,
                  k && j.disabled,
                  x != null && x === !0 && j.disabled,
                  D,
                ],
              },
              E,
            ),
          );
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
__d(
  'CometComposerSizeAndStyleReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      switch (b.type) {
        case 'SET_COMPOSER_DIMENSIONS':
          return g(a, b);
      }
      return a;
    }
    function g(a, b) {
      return babelHelpers['extends']({}, a, {
        composerSizeAndStyleMetadata: babelHelpers['extends'](
          {},
          a.composerSizeAndStyleMetadata,
          {
            composerDialogHeight: b.composerDialogHeight,
            composerDialogWidth: b.composerDialogWidth,
          },
        ),
      });
    }
    f['default'] = a;
  },
  66,
);
__d(
  'CometComposerDialogLayout.react',
  [
    'CometComposerSizeAndStyleReducer',
    'CometScrollableArea.react',
    'react',
    'stylex',
    'useComposerViewStateDispatcher',
    'useComposerViewStateReducer',
    'useResizeObserver',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useCallback,
      j = {
        body: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          flexGrow: 'x1iyjqo2',
          $$css: !0,
        },
        centerColumn: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          maxHeight: 'x179dxpb',
          minHeight: 'x1pl0jk3',
          position: 'x1n2onr6',
          width: 'xvue9z',
          '@media (max-width: 583px)_flexGrow': 'x8n7wzh',
          '@media (max-width: 583px)_width': 'x11pth41',
          $$css: !0,
        },
        footer: {
          paddingBottom: 'x1l90r2v',
          paddingTop: 'xyamay9',
          position: 'x1n2onr6',
          $$css: !0,
        },
        root: {
          display: 'x78zum5',
          flexDirection: 'x1q0g3np',
          maxHeight: 'xqui1pq',
          minHeight: 'x1pl0jk3',
          overflowX: 'x1plvlek',
          overflowY: 'xryxfnj',
          '@media (max-height: 428px)_maxHeight': 'x14ocpvf',
          '@media (max-height: 428px)_minHeight': 'x5oemz9',
          '@media (max-height: 428px)_overflowX': 'x1lck2f0',
          '@media (max-height: 428px)_overflowY': 'xlgs127',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.body,
        d = a.footer,
        e = a.header;
      a = a.xstyle;
      c('useComposerViewStateReducer')(c('CometComposerSizeAndStyleReducer'));
      var f = c('useComposerViewStateDispatcher')(),
        g = i(
          function (a) {
            f({
              composerDialogHeight: Math.round(a.height),
              composerDialogWidth: Math.round(a.width),
              type: 'SET_COMPOSER_DIMENSIONS',
            });
          },
          [f],
        );
      g = c('useResizeObserver')(g);
      return h.jsx('div', {
        className: c('stylex')(j.root, a),
        children: h.jsxs('div', {
          className:
            'x78zum5 xdt5ytf x179dxpb x1pl0jk3 x1n2onr6 xvue9z x8n7wzh x11pth41',
          ref: g,
          children: [
            h.jsx('div', { children: e }),
            h.jsx(c('CometScrollableArea.react'), {
              horizontal: !1,
              vertical: !0,
              xstyle: j.body,
              children: b,
            }),
            h.jsx('div', {
              className: 'x1l90r2v xyamay9 x1n2onr6',
              children: d,
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
__d(
  'CometRadioGroupListContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = a.createContext({ name: void 0, onValueChange: void 0, value: void 0 });
    g['default'] = b;
  },
  98,
);
__d(
  'BaseRadio.react',
  [
    'BaseFocusRing.react',
    'BaseInput.react',
    'BaseView.react',
    'mergeRefs',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useEffect,
      j = b.useMemo,
      k = b.useRef,
      l = {
        radio: {
          cursor: 'x1ypdohk',
          height: 'x5yr21d',
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'xat24cr',
          marginStart: 'x1mh8g0r',
          opacity: 'xg01cxk',
          outline: 'x1a2a7pz',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          width: 'xh8yej3',
          $$css: !0,
        },
        wrapper: { position: 'x1n2onr6', $$css: !0 },
      };
    function a(a, b) {
      var d = a.children,
        e = a.indeterminate,
        f = e === void 0 ? !1 : e;
      e = a.suppressFocusRing;
      var g = a.testid,
        m = a.xstyle,
        n = babelHelpers.objectWithoutPropertiesLoose(a, [
          'children',
          'indeterminate',
          'suppressFocusRing',
          'testid',
          'xstyle',
        ]),
        o = k(null);
      i(
        function () {
          o.current != null && (o.current.indeterminate = f);
        },
        [f],
      );
      var p = j(
        function () {
          return c('mergeRefs')(b, o);
        },
        [b],
      );
      return h.jsx(c('BaseFocusRing.react'), {
        suppressFocusRing: e,
        children: function (a) {
          return h.jsxs(c('BaseView.react'), {
            testid: void 0,
            xstyle: [l.wrapper, a, m],
            children: [
              d,
              h.jsx(
                c('BaseInput.react'),
                babelHelpers['extends']({}, n, {
                  'aria-checked': f
                    ? 'mixed'
                    : (a = n.checked) != null
                    ? a
                    : !1,
                  ref: p,
                  type: 'radio',
                  xstyle: l.radio,
                }),
              ),
            ],
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.memo(h.forwardRef(a));
    g['default'] = e;
  },
  98,
);
__d(
  'useCometPressableEventHandlers',
  [
    'ExecutionEnvironment',
    'emptyObject',
    'react',
    'useLayoutEffect_SAFE_FOR_SSR',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    e = b.createContext;
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useRef,
      m = b.useState,
      n = new Set();
    c('ExecutionEnvironment').canUseDOM &&
      document.addEventListener(
        'mousedown',
        function () {
          n.forEach(function (a) {
            return a();
          });
        },
        !0,
      );
    var o = function (a) {
        n.add(a);
        return function () {
          n['delete'](a);
        };
      },
      p = new Set();
    c('ExecutionEnvironment').canUseDOM &&
      document.addEventListener(
        'keydown',
        function (a) {
          switch (a.key) {
            case 'ArrowUp':
            case 'ArrowRight':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'Tab':
            case 'Enter':
            case ' ':
            case 'Escape':
              p.forEach(function (a) {
                return a();
              });
          }
        },
        !0,
      );
    var q = function (a) {
        p.add(a);
        return function () {
          p['delete'](a);
        };
      },
      r = c('ExecutionEnvironment').canUseDOM ? null : !0;
    function s() {
      r == null && (r = !window.matchMedia('(pointer: coarse)').matches);
      return r;
    }
    var t = 0,
      u = 1,
      v = e(!1);
    function a(a) {
      var b = a.clickOnSpace,
        d = b === void 0 ? !1 : b;
      b = a.disabled;
      b = b === void 0 ? !1 : b;
      var e = a.onFocusChange,
        f = a.onFocusIn,
        g = a.onFocusOut,
        n = a.onFocusVisibleChange,
        p = a.onHoverChange,
        r = a.onHoverIn,
        w = a.onHoverOut,
        x = a.onPress,
        y = a.onPressChange,
        z = a.onPressIn,
        A = a.onPressOut;
      a = a.testOnly_pressed;
      var B = a === void 0 ? !1 : a;
      a = j(v);
      var C = l(t),
        D = m(!1),
        E = D[0],
        F = D[1];
      D = m(b);
      var G = D[0];
      D = D[1];
      var H = m(B),
        I = H[0],
        J = H[1];
      H = m(!1);
      var K = H[0],
        L = H[1];
      H = m(!1);
      var M = H[0],
        N = H[1];
      H = m(!1);
      var O = H[0],
        P = H[1];
      k(function () {
        var a = o(function () {
            C.current = t;
          }),
          b = q(function () {
            C.current = u;
          });
        return function () {
          a(), b();
        };
      }, []);
      var Q = i(
          function (a) {
            J(a), y && y(a);
          },
          [y],
        ),
        R = i(
          function (a) {
            L(a),
              e && e(a),
              (C.current === u || (!a && M)) && (N(a), n && n(a));
          },
          [e, n, M],
        ),
        S = i(
          function (a) {
            P(a), p && p(a);
          },
          [p],
        );
      H = m(B);
      var T = H[0],
        U = H[1];
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          B !== T && (Q(B), U(B));
        },
        [T, Q, B],
      );
      H = l(null);
      var V = i(
          function (a) {
            R(!0), f && f(a);
          },
          [f, R],
        ),
        W = i(
          function (a) {
            K && (R(!1), g && g(a));
          },
          [K, g, R],
        ),
        X = i(
          function (a) {
            if (!s()) return;
            E && (Q(!0), !I && z && z(a));
            S(!0);
            r && r(a);
          },
          [E, r, z, I, S, Q],
        ),
        Y = i(
          function (a) {
            I && (Q(!1), A && A(a)), O && (S(!1), w && w(a));
          },
          [O, w, A, I, S, Q],
        ),
        Z = i(
          function (a) {
            F(!0), Q(!0), z && z(a);
          },
          [z, Q],
        ),
        aa = i(
          function (a) {
            F(!1), I && (Q(!1), A && A(a));
          },
          [A, I, Q],
        ),
        ba = i(
          function (a) {
            F(!1), I && (Q(!1), A && A(a));
          },
          [A, I, Q],
        ),
        $ = l(!1),
        ca = i(
          function (a) {
            ($.current = a.touches.length === 1),
              Q($.current),
              $.current && z != null && z(a);
          },
          [z, Q],
        ),
        da = i(
          function (a) {
            ($.current = !1), I && (Q(!1), A && A(a));
          },
          [A, I, Q],
        ),
        ea = i(
          function (a) {
            I && (Q(!1), $.current && a.touches.length === 1 && A && A(a));
          },
          [A, I, Q],
        );
      k(
        function () {
          if (E && !O) {
            var a = function () {
              F(!1);
            };
            document.addEventListener('mouseup', a, {
              capture: !0,
              passive: !0,
            });
            return function () {
              document.removeEventListener('mouseup', a, {
                capture: !0,
                passive: !0,
              });
            };
          }
          return function () {};
        },
        [a, E, Q, O],
      );
      var fa = i(
          function (a) {
            F(!1), x && x(a);
          },
          [x],
        ),
        ga = i(
          function (a) {
            a.key === 'Enter' && x && x(a), a.key === ' ' && d && x && x(a);
          },
          [d, x],
        );
      b !== G && (b && (Q(!1), R(!1), S(!1)), D(b));
      G = b
        ? c('emptyObject')
        : {
            onBlur: W,
            onClick: fa,
            onDragStart: ba,
            onFocus: V,
            onKeyDown: ga,
            onMouseDown: Z,
            onMouseEnter: X,
            onMouseLeave: Y,
            onMouseUp: aa,
            onTouchEnd: ea,
            onTouchMove: da,
            onTouchStart: ca,
          };
      D = i(function (a) {
        a = a.children;
        return h.jsx(v.Provider, { value: !0, children: a });
      }, []);
      return [
        H,
        a,
        { disabled: b, focused: K, focusVisible: M, hovered: O, pressed: I },
        G,
        D,
      ];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometListCellRadioAddOn.react',
  [
    'ix',
    'BaseRadio.react',
    'CometIcon.react',
    'CometListCellContext',
    'CometPressableOverlay.react',
    'CometRadioGroupListContext',
    'fbicon',
    'react',
    'useCometPressableEventHandlers',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useCallback,
      k = b.useContext,
      l = { radio: { display: 'x78zum5', $$css: !0 } };
    function a(a, b) {
      var e = a['aria-label'],
        f = a['aria-labelledby'],
        g = a.checked;
      g = g === void 0 ? !1 : g;
      var m = a.checkedIcon,
        n = a.color,
        o = a.disabled;
      o = o === void 0 ? !1 : o;
      var p = a.icon,
        q = a.name,
        r = a.onValueChange,
        s = a.testid;
      s = a.value;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'aria-label',
        'aria-labelledby',
        'checked',
        'checkedIcon',
        'color',
        'disabled',
        'icon',
        'name',
        'onValueChange',
        'testid',
        'value',
      ]);
      m = (m = m) != null ? m : d('fbicon')._(h('621399'), 20);
      p = (p = p) != null ? p : d('fbicon')._(h('545517'), 20);
      var t = k(c('CometListCellContext'));
      t = t.disabled;
      var u = k(c('CometRadioGroupListContext')),
        v = u.name,
        w = u.onValueChange;
      u = u.value;
      t = (t = t) != null ? t : o;
      o = c('useCometPressableEventHandlers')({ disabled: t });
      o[0];
      o[1];
      var x = o[2],
        y = x.focusVisible,
        z = x.hovered;
      x = x.pressed;
      o[3];
      q = (o = q) != null ? o : v;
      v = (o = s) != null ? o : u;
      var A = (s = r) != null ? s : w;
      o = j(
        function (a) {
          A && A(a.target.value);
        },
        [A],
      );
      return i.jsxs(
        c('BaseRadio.react'),
        babelHelpers['extends']({}, a, {
          'aria-label': e,
          'aria-labelledby': f,
          checked: g,
          disabled: t,
          name: q,
          onChange: o,
          ref: b,
          tabIndex: g ? 0 : -1,
          testid: void 0,
          value: v,
          xstyle: l.radio,
          children: [
            i.jsx(c('CometIcon.react'), {
              color:
                t === !0
                  ? 'disabled'
                  : g === !0
                  ? (u = n) != null
                    ? u
                    : 'highlight'
                  : 'secondary',
              disabled: t,
              icon: g ? m : p,
            }),
            i.jsx(c('CometPressableOverlay.react'), {
              focusVisible: y,
              hovered: z,
              offset: 8,
              pressed: x,
              radius: '50%',
            }),
          ],
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = i.forwardRef(a);
    g['default'] = e;
  },
  98,
);
__d(
  'BaseCheckbox.react',
  [
    'BaseFocusRing.react',
    'BaseInput.react',
    'BaseView.react',
    'mergeRefs',
    'react',
    'useLayoutEffect_SAFE_FOR_SSR',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useMemo,
      j = b.useRef,
      k = {
        checkbox: {
          cursor: 'x1ypdohk',
          height: 'x5yr21d',
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'xat24cr',
          marginStart: 'x1mh8g0r',
          opacity: 'x1w3u9th',
          outline: 'x1a2a7pz',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          width: 'xh8yej3',
          $$css: !0,
        },
        wrapper: { position: 'x1n2onr6', $$css: !0 },
      };
    function a(a, b) {
      var d = a.children,
        e = a.indeterminate,
        f = e === void 0 ? !1 : e;
      e = a.suppressFocusRing;
      var g = a.testid,
        l = a.xstyle,
        m = babelHelpers.objectWithoutPropertiesLoose(a, [
          'children',
          'indeterminate',
          'suppressFocusRing',
          'testid',
          'xstyle',
        ]),
        n = j(null);
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          n.current != null && (n.current.indeterminate = f);
        },
        [f],
      );
      var o = i(
        function () {
          return c('mergeRefs')(b, n);
        },
        [b],
      );
      return h.jsx(c('BaseFocusRing.react'), {
        suppressFocusRing: e,
        children: function (a) {
          return h.jsxs(c('BaseView.react'), {
            testid: void 0,
            xstyle: [k.wrapper, a, l],
            children: [
              d,
              h.jsx(
                c('BaseInput.react'),
                babelHelpers['extends']({}, m, {
                  'aria-checked': f
                    ? 'mixed'
                    : (a = m.checked) != null
                    ? a
                    : !1,
                  ref: o,
                  type: 'checkbox',
                  xstyle: k.checkbox,
                }),
              ),
            ],
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.memo(h.forwardRef(a));
    g['default'] = e;
  },
  98,
);
__d(
  'BaseStyledCheckbox.react',
  ['BaseCheckbox.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useCallback,
      j = { checkbox: { display: 'x78zum5', $$css: !0 } };
    function a(a, b) {
      var d = a['aria-label'],
        e = a['aria-labelledby'],
        f = a.checked,
        g = a.checkedIcon,
        k = a.children,
        l = a.disabled;
      l = l === void 0 ? !1 : l;
      var m = a.id,
        n = a.name,
        o = a.onChange,
        p = a.suppressFocusRing,
        q = a.tabIndex,
        r = a.testid;
      r = a.uncheckedIcon;
      var s = a.value;
      a = i(
        function (a, b) {
          o(s, b);
        },
        [o, s],
      );
      return h.jsxs(c('BaseCheckbox.react'), {
        'aria-label': d,
        'aria-labelledby': e,
        checked: f,
        disabled: l,
        id: m,
        name: n,
        onValueChange: a,
        ref: b,
        suppressFocusRing: p,
        tabIndex: q,
        testid: void 0,
        xstyle: j.checkbox,
        children: [f ? g : r, k],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
__d(
  'CometCheckbox.react',
  [
    'ix',
    'BaseStyledCheckbox.react',
    'CometIcon.react',
    'CometPressableOverlay.react',
    'TetraText.react',
    'fbicon',
    'react',
    'useCometPressableEventHandlers',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a, b) {
      var e = a.checked,
        f = a.disabled;
      f = f === void 0 ? !1 : f;
      var g = a.iconSize;
      g = g === void 0 ? 24 : g;
      var j = a.id,
        k = a.label,
        l = a.labelIsHidden;
      l = l === void 0 ? !1 : l;
      var m = a.name,
        n = a.onChange,
        o = a.reduceEmphasis;
      o = o === void 0 ? !1 : o;
      var p = a.smallerLabel;
      p = p === void 0 ? !1 : p;
      var q = a.tabIndex,
        r = a.testid;
      r = a.value;
      a = c('useCometPressableEventHandlers')({ disabled: f });
      var s = a[0];
      a[1];
      var t = a[2],
        u = t.focusVisible,
        v = t.hovered;
      t = t.pressed;
      a = a[3];
      return i.jsxs(
        'label',
        babelHelpers['extends'](
          {
            className:
              'x1i10hfl x6s0dn4 x78zum5 xwib8y2 x1y1aw1k x1n2onr6 xggy1nq',
          },
          a,
          {
            ref: s,
            children: [
              i.jsx(c('BaseStyledCheckbox.react'), {
                'aria-label': l ? k : void 0,
                checked: e,
                checkedIcon: i.jsx(c('CometIcon.react'), {
                  color: f ? 'disabled' : 'highlight',
                  icon:
                    g === 16
                      ? d('fbicon')._(h('492790'), 16)
                      : d('fbicon')._(h('531032'), 24),
                }),
                disabled: f,
                id: j,
                name: m,
                onChange: n,
                ref: b,
                tabIndex: q,
                testid: void 0,
                uncheckedIcon: i.jsx(c('CometIcon.react'), {
                  color: f ? 'disabled' : 'secondary',
                  icon:
                    g === 16
                      ? d('fbicon')._(h('659287'), 16)
                      : d('fbicon')._(h('659289'), 24),
                }),
                value: r,
                children: i.jsx(c('CometPressableOverlay.react'), {
                  focusVisible: u,
                  hovered: v,
                  offset: 8,
                  pressed: t,
                  radius: '50%',
                }),
              }),
              l
                ? null
                : i.jsx('div', {
                    className: 'x1r8uery x1iyjqo2 x1i64zmx xeuugli',
                    children: i.jsx(c('TetraText.react'), {
                      color: f ? 'disabled' : 'primary',
                      type: o ? (p === !0 ? 'body4' : 'body3') : 'button2',
                      children: k,
                    }),
                  }),
            ],
          },
        ),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = i.forwardRef(a);
    g['default'] = b;
  },
  98,
); /*FB_PKG_DELIM*/
__d(
  'CometRadioListCell.react',
  [
    'CometListCell.react',
    'CometListCellRadioAddOn.react',
    'react',
    'useCometUniqueID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var d = a.radioAddonComponent;
      d = d === void 0 ? c('CometListCellRadioAddOn.react') : d;
      var e = a.radioAddonProps;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'radioAddonComponent',
        'radioAddonProps',
      ]);
      var f = e['aria-label'];
      e = babelHelpers.objectWithoutPropertiesLoose(e, ['aria-label']);
      var g = c('useCometUniqueID')();
      d = h.jsx(
        d,
        babelHelpers['extends']({}, e, {
          'aria-labelledby': f != null ? void 0 : g,
        }),
      );
      return h.jsx(
        c('CometListCell.react'),
        babelHelpers['extends']({}, a, { addOnEnd: d, contentId: g, ref: b }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
__d(
  'CometGamingFollowLifecycleStrings',
  ['fbt'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    a = h._('__JHASH__kv5c1KWFUGh__JHASH__');
    b = h._('__JHASH__XPvRzkR0Bh5__JHASH__');
    c = h._('__JHASH__DBLqRJm7ZgF__JHASH__');
    d = h._('__JHASH__BhX5wL1ntg2__JHASH__');
    e = h._('__JHASH__YDU4u2z3MLx__JHASH__');
    f = h._('__JHASH__EKJiuk2txdm__JHASH__');
    var i = h._('__JHASH__ZNKc894D45Y__JHASH__'),
      j = h._('__JHASH__06xqEohcw28__JHASH__'),
      k = h._('__JHASH__UQ7n9E0X2SO__JHASH__'),
      l = h._('__JHASH__h_5MLRPvWvQ__JHASH__'),
      m = h._('__JHASH__OHfODFC-6Nd__JHASH__'),
      n = h._('__JHASH__d9ReT1LsSWH__JHASH__'),
      o = h._('__JHASH__LP3O3RE6EBG__JHASH__'),
      p = h._('__JHASH__0jvmW9UXbEi__JHASH__'),
      q = h._('__JHASH__4SrqCpPNnul__JHASH__'),
      r = h._('__JHASH__-a5FWmp2LLg__JHASH__'),
      s = h._('__JHASH__olfEPdLfkty__JHASH__'),
      t = h._('__JHASH__Olc6eD0h6ae__JHASH__');
    h = h._('__JHASH__wZXVPbhOrvX__JHASH__');
    g.NOTIF_ALL_VIDEOS = a;
    g.NOTIF_ALL_VIDEOS_TAHOE = b;
    g.NOTIF_HIGHLIGHTS = c;
    g.NOTIF_HIGHLIGHTS_TAHOE = d;
    g.NOTIF_NONE = e;
    g.NOTIF_NONE_TAHOE = f;
    g.NOTIF_ALL_VIDEOS_DESC = i;
    g.NOTIF_ALL_VIDEOS_DESC_TAHOE = j;
    g.NOTIF_HIGHLIGHTS_DESC = k;
    g.NOTIF_HIGHLIGHTS_DESC_TAHOE = l;
    g.NOTIF_NONE_DESC = m;
    g.NOTIF_NONE_DESC_TAHOE = n;
    g.NOTIF_MENU_TITLE = o;
    g.UNFOLLOW_DESC = p;
    g.UNFOLLOW_DESC_TAHOE = q;
    g.UNFOLLOW = r;
    g.FOLLOW = s;
    g.MESSENGER_NOTIFS = t;
    g.MESSENGER_NOTIFS_DESC = h;
  },
  98,
);
__d(
  'useConfiguredMutation',
  ['CometRelay', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback;
    function a(a, b) {
      a = d('CometRelay').useMutation(a);
      var c = a[0];
      a = a[1];
      var e = h(
        function (a) {
          if (a == null) return c(b);
          else if (typeof a === 'function')
            return c(babelHelpers['extends']({}, b, a(b)));
          else return c(babelHelpers['extends']({}, b, a));
        },
        [c, b],
      );
      return [e, a];
    }
    g['default'] = a;
  },
  98,
);
__d(
  'GamingVideoDestinationLoggingContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = { external_entrypoint: 'unknown', surface: 'unknown' };
    c = a.createContext(b);
    g['default'] = c;
  },
  98,
);
__d(
  'useGamingDestinationLoggedInCallback',
  ['fbt', 'useCometLoggedOutPopupCTA', 'useIsLoggedOut'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a(a) {
      var b = c('useIsLoggedOut')(),
        d = h._('__JHASH__E1INKxrXP_F__JHASH__');
      d = c('useCometLoggedOutPopupCTA')({ title: d });
      return b ? d : a;
    }
    g['default'] = a;
  },
  98,
);
__d(
  'GamingDestinationTypedLoggerLite',
  ['generateLiteTypedLogger'],
  function (a, b, c, d, e, f) {
    'use strict';
    e.exports = b('generateLiteTypedLogger')(
      'logger:GamingDestinationLoggerConfig',
    );
  },
  null,
);
__d(
  'useGamingVideoDestinationEventLogger',
  [
    'GamingDestinationTypedLoggerLite',
    'GamingVideoDestinationLoggingContext',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useContext;
    function a() {
      var a = i(c('GamingVideoDestinationLoggingContext')),
        b = h(
          function (b, d) {
            c('GamingDestinationTypedLoggerLite').log(
              babelHelpers['extends']({ event: b }, a, d),
            );
          },
          [a],
        ),
        d = h(
          function (a) {
            b('click', a);
          },
          [b],
        ),
        e = h(
          function (a) {
            b('impression', a);
          },
          [b],
        );
      return { logClick: d, logEvent: b, logImpression: e };
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometTahoeLiveStreamingReactionsContext',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    a = d('react');
    b = { streamingReactions: null };
    c = a.createContext(b);
    g['default'] = c;
  },
  98,
);
__d(
  'flattenArray',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = [];
      g(a, b);
      return b;
    }
    function g(a, b) {
      var c = a.length,
        d = 0;
      while (c--) {
        var e = a[d++];
        Array.isArray(e) ? g(e, b) : b.push(e);
      }
    }
    f['default'] = a;
  },
  66,
);
__d(
  'CommunityModerationEventFalcoEvent',
  ['FalcoLoggerInternal', 'getFalcoLogPolicy_DO_NOT_USE'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = b('getFalcoLogPolicy_DO_NOT_USE')('1743433');
    c = b('FalcoLoggerInternal').create('community_moderation_event', a);
    e.exports = c;
  },
  null,
);
__d(
  'GroupRoomType',
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      AUDIO_CHANNEL_FOR_CM_CHAT: 'audio_channel_for_cm_chat',
      CM_AUDIO_CHANNEL: 'cm_audio_channel',
      CM_THREAD_AUDIO: 'cm_thread_audio',
      GAMING_AUDIO: 'gaming_audio',
      GROUP_OWNED: 'group_owned',
      LIVE: 'live',
      LIVE_AUDIO: 'live_audio',
      OPEN: 'open',
      PRIVATE: 'private',
      SPEAKER_ONLY_AUDIO: 'speaker_only_audio',
    });
    f['default'] = a;
  },
  66,
);
__d(
  'WoodhengeClientTypedLoggerLite',
  ['generateLiteTypedLogger'],
  function (a, b, c, d, e, f) {
    'use strict';
    e.exports = b('generateLiteTypedLogger')(
      'logger:WoodhengeClientLoggerConfig',
    );
  },
  null,
);
__d(
  'ReactDOM',
  ['cr:4865', 'err'],
  function (a, b, c, d, e, f, g) {
    var h, i, j, k, l;
    function m() {
      var a = c('err')(
        'This React API is not implemented in this environment. Use ReactDOMComet instead.',
      );
      throw a;
    }
    function n() {
      var a = c('err')(
        'This React API is not implemented in this environment. Use ReactDOMLegacy_DEPRECATED instead.',
      );
      throw a;
    }
    d =
      (a = b('cr:4865').createRoot) != null
        ? a
        : function () {
            return m();
          };
    f =
      (e = b('cr:4865').hydrateRoot) != null
        ? e
        : function () {
            return m();
          };
    e =
      (a = b('cr:4865').unstable_createEventHandleInternal) != null
        ? a
        : function () {
            return m();
          };
    a =
      (a = b('cr:4865').unstable_flushControlled) != null
        ? a
        : function () {
            return m();
          };
    h =
      (h = b('cr:4865').findDOMNode) != null
        ? h
        : function () {
            return n();
          };
    i =
      (i = b('cr:4865').hydrate) != null
        ? i
        : function () {
            return n();
          };
    j =
      (j = b('cr:4865').render) != null
        ? j
        : function () {
            return n();
          };
    k =
      (k = b('cr:4865').unmountComponentAtNode) != null
        ? k
        : function () {
            return n();
          };
    l =
      (l = b('cr:4865').unstable_renderSubtreeIntoContainer) != null
        ? l
        : function () {
            return n();
          };
    g.createRoot = d;
    g.hydrateRoot = f;
    g.unstable_createEventHandle = e;
    g.unstable_flushControlled = a;
    g.findDOMNode = h;
    g.hydrate = i;
    g.render = j;
    g.unmountComponentAtNode = k;
    g.unstable_renderSubtreeIntoContainer = l;
    g.createPortal = b('cr:4865').createPortal;
    g.flushSync = b('cr:4865').flushSync;
    g.unstable_batchedUpdates = b('cr:4865').unstable_batchedUpdates;
    g.version = b('cr:4865').version;
    g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
      b('cr:4865').__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  },
  98,
);
__d(
  'ReactDOMLegacy_DEPRECATED',
  ['cr:1108857', 'cr:1294246'],
  function (a, b, c, d, e, f, g) {
    (g.createPortal = b('cr:1294246').createPortal),
      (g.findDOMNode = b('cr:1294246').findDOMNode),
      (g.flushSync = b('cr:1294246').flushSync),
      (g.hydrate = b('cr:1294246').hydrate),
      (g.render = b('cr:1294246').render),
      (g.unmountComponentAtNode = b('cr:1294246').unmountComponentAtNode),
      (g.unstable_batchedUpdates = b('cr:1294246').unstable_batchedUpdates),
      (g.unstable_renderSubtreeIntoContainer =
        b('cr:1294246').unstable_renderSubtreeIntoContainer),
      (g.version = b('cr:1294246').version),
      (g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
        b('cr:1294246').__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
  },
  98,
); /*FB_PKG_DELIM*/
__d(
  'StoriesCreateCTALinkMainOptions_data$normalization.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      kind: 'SplitOperation',
      metadata: {},
      name: 'StoriesCreateCTALinkMainOptions_data$normalization',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'page_id',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'shop_link',
          storageKey: null,
        },
      ],
    };
    e.exports = a;
  },
  null,
);
__d(
  'StoriesCreateCTALinkMainOptions_data.graphql',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'StoriesCreateCTALinkMainOptions_data',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'page_id',
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'shop_link',
          storageKey: null,
        },
      ],
      type: 'StoriesCreateCTALinkOptions',
      abstractKey: null,
    };
    e.exports = a;
  },
  null,
);
__d(
  'StoriesCTATypeEnum',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = Object.freeze({
      BOOK_NOW: 'BOOK_NOW',
      CALL_NOW: 'CALL_NOW',
      GET_DIRECTIONS: 'GET_DIRECTIONS',
      LEARN_MORE: 'LEARN_MORE',
      SEE_EVENT: 'SEE_EVENT',
      SEE_JOB: 'SEE_JOB',
      SEE_MORE: 'SEE_MORE',
      SEE_OFFER: 'SEE_OFFER',
      SHOP_NOW: 'SHOP_NOW',
      VIEW_SHOP: 'SWIPE_UP_SHOP',
    });
    f['default'] = a;
  },
  66,
);
__d(
  'StoriesCTAButtonLabels',
  ['fbt', 'StoriesCTATypeEnum'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    b = Object.freeze(
      ((a = {}),
      (a[c('StoriesCTATypeEnum').BOOK_NOW] = h._(
        '__JHASH__zTcbGBbZNun__JHASH__',
      )),
      (a[c('StoriesCTATypeEnum').CALL_NOW] = h._(
        '__JHASH___g9hqrWd-LW__JHASH__',
      )),
      (a[c('StoriesCTATypeEnum').GET_DIRECTIONS] = h._(
        '__JHASH__IlNsIMvdiDL__JHASH__',
      )),
      (a[c('StoriesCTATypeEnum').LEARN_MORE] = h._(
        '__JHASH__KvISNVpdpfN__JHASH__',
      )),
      (a[c('StoriesCTATypeEnum').SEE_EVENT] = h._(
        '__JHASH__eY_H_I3-Zsi__JHASH__',
      )),
      (a[c('StoriesCTATypeEnum').SEE_JOB] = h._(
        '__JHASH__U_b__0QbF1O__JHASH__',
      )),
      (a[c('StoriesCTATypeEnum').SEE_MORE] = h._(
        '__JHASH__Q3qinvmyiqL__JHASH__',
      )),
      (a[c('StoriesCTATypeEnum').SEE_OFFER] = h._(
        '__JHASH__-NVzmja765q__JHASH__',
      )),
      (a[c('StoriesCTATypeEnum').SHOP_NOW] = h._(
        '__JHASH__MsH9RQSH1U-__JHASH__',
      )),
      (a[c('StoriesCTATypeEnum').VIEW_SHOP] = h._(
        '__JHASH__tzUFciXYHCZ__JHASH__',
      )),
      a),
    );
    g['default'] = b;
  },
  98,
);
__d(
  'StoriesCreateCTAViewShopOptions.react',
  ['fbt', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a() {
      return i.jsx('div', {
        className: 'xu06os2 x1ok221b',
        children: i.jsx(c('TetraText.react'), {
          color: 'secondary',
          type: 'body3',
          children: h._('__JHASH__bWg1YUAns-V__JHASH__'),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreateCTAWebLinkOptions.react',
  [
    'fbt',
    'ix',
    'CometFormSelectOnlyCombobox.react',
    'CometFormTextInput.react',
    'StoriesCTAButtonLabels',
    'StoriesCTATypeEnum',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    b = d('react');
    var k = b.useEffect,
      l = b.useState,
      m = [
        c('StoriesCTATypeEnum').SEE_MORE,
        c('StoriesCTATypeEnum').LEARN_MORE,
        c('StoriesCTATypeEnum').SHOP_NOW,
        c('StoriesCTATypeEnum').BOOK_NOW,
        c('StoriesCTATypeEnum').CALL_NOW,
        c('StoriesCTATypeEnum').GET_DIRECTIONS,
      ],
      n = Object.freeze(
        ((e = {}),
        (e[c('StoriesCTATypeEnum').CALL_NOW] = h._(
          '__JHASH__2b01kMIT159__JHASH__',
        )),
        (e[c('StoriesCTATypeEnum').GET_DIRECTIONS] = h._(
          '__JHASH__f3qXOHLzizr__JHASH__',
        )),
        e),
      );
    function a(a) {
      var b = a.buttonType,
        e = a.customLink,
        f = a.linkInputError,
        g = a.onButtonTypeChange,
        o = a.onCustomLinkChange,
        p = a.pageLinks;
      a = l([]);
      var q = a[0],
        r = a[1];
      k(
        function () {
          var a = m.map(function (a) {
            var b = !1;
            switch (a) {
              case c('StoriesCTATypeEnum').CALL_NOW:
                b = p.phoneNumberLink == null;
                break;
              case c('StoriesCTATypeEnum').GET_DIRECTIONS:
                b = p.addressLink == null;
                break;
              default:
                break;
            }
            return {
              bodyColor: 'secondary',
              bodyText: b ? n[a] : void 0,
              disabled: b,
              label: c('StoriesCTAButtonLabels')[a],
              value: a,
            };
          });
          r(a);
        },
        [p],
      );
      a =
        b !== c('StoriesCTATypeEnum').CALL_NOW &&
        b !== c('StoriesCTATypeEnum').GET_DIRECTIONS;
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx('div', {
            className: 'x1yztbdb x14vqqas',
            children: j.jsx(c('CometFormSelectOnlyCombobox.react'), {
              label: h._('__JHASH__mgtI6iGxA01__JHASH__'),
              onValueChange: g,
              options: q,
              size: 'full',
              value: b,
            }),
          }),
          a &&
            j.jsx('div', {
              className: 'x1yztbdb',
              children: j.jsx(c('CometFormTextInput.react'), {
                icon: d('fbicon')._(i('481761'), 20),
                label: h._('__JHASH__V4gRoY3R2wF__JHASH__'),
                onValueChange: o,
                validationState: f ? 'ERROR' : void 0,
                value: e,
              }),
            }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
__d(
  'StoriesCreateCTALinkMainOptions.react',
  [
    'fbt',
    'CometDivider.react',
    'CometListCellText.react',
    'CometRadioListCell.react',
    'RelayHooks',
    'StoriesCTATypeEnum',
    'StoriesCreateCTALinkMainOptions_data.graphql',
    'StoriesCreateCTAViewShopOptions.react',
    'StoriesCreateCTAWebLinkOptions.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react');
    e = d('react');
    var k = e.useEffect,
      l = e.useState,
      m = {
        divider: { marginBottom: 'x12nagc', marginTop: 'x1gslohp', $$css: !0 },
        uncheckedWebRadioButton: { marginBottom: 'xod5an3', $$css: !0 },
        viewShopDetails: { marginBottom: 'x1yztbdb', $$css: !0 },
      },
      n = function (a, b, d, e) {
        switch (a) {
          case c('StoriesCTATypeEnum').BOOK_NOW:
          case c('StoriesCTATypeEnum').LEARN_MORE:
          case c('StoriesCTATypeEnum').SEE_MORE:
          case c('StoriesCTATypeEnum').SHOP_NOW:
            return b !== '' ? b : d.websiteLink;
          case c('StoriesCTATypeEnum').VIEW_SHOP:
            return e !== '' ? e : d.websiteLink;
          case c('StoriesCTATypeEnum').CALL_NOW:
            return d.phoneNumberLink;
          case c('StoriesCTATypeEnum').GET_DIRECTIONS:
            return d.addressLink;
          default:
            return null;
        }
      },
      o =
        i !== void 0
          ? i
          : (i = b('StoriesCreateCTALinkMainOptions_data.graphql')),
      p = { VIEW_SHOP: 'view shop', WEB_LINK: 'web link' };
    function a(a) {
      var b = a.data,
        e = a.linkInputError,
        f = a.onChange,
        g = a.pageLinks;
      a = d('RelayHooks').useFragment(o, b);
      var i = a == null ? void 0 : a.page_id,
        s = (b = a == null ? void 0 : a.shop_link) != null ? b : '';
      a = s !== '';
      b = c('StoriesCTATypeEnum').SEE_MORE;
      var t = a ? c('StoriesCTATypeEnum').VIEW_SHOP : b;
      b = l(b);
      var u = b[0],
        v = b[1];
      b = l(t);
      var w = b[0],
        x = b[1];
      t = l('');
      var y = t[0];
      b = t[1];
      t = l(p.VIEW_SHOP);
      var z = t[0],
        A = t[1];
      k(
        function () {
          var a;
          f({
            ctaType: w,
            link: (a = n(w, y, g, s)) != null ? a : '',
            page: i,
          });
        },
        [w, y, f, g, i, s],
      );
      return !a
        ? j.jsx(c('StoriesCreateCTAWebLinkOptions.react'), {
            buttonType: w,
            customLink: y,
            linkInputError: e,
            onButtonTypeChange: x,
            onCustomLinkChange: b,
            pageLinks: g,
          })
        : j.jsxs(j.Fragment, {
            children: [
              j.jsx(c('CometRadioListCell.react'), {
                content: j.jsx(c('CometListCellText.react'), {
                  headline: h._('__JHASH__lryHNmoCa-y__JHASH__'),
                }),
                radioAddonProps: {
                  checked: r(z),
                  onValueChange: function () {
                    x(c('StoriesCTATypeEnum').VIEW_SHOP), A(p.VIEW_SHOP);
                  },
                  value: p.VIEW_SHOP,
                },
              }),
              r(z) &&
                j.jsx('div', {
                  className: 'x1yztbdb',
                  children: j.jsx(
                    c('StoriesCreateCTAViewShopOptions.react'),
                    {},
                  ),
                }),
              j.jsx(c('CometDivider.react'), { xstyle: m.divider }),
              j.jsx('div', {
                className: '' + (q(z) ? '' : ' xod5an3'),
                children: j.jsx(c('CometRadioListCell.react'), {
                  content: j.jsx(c('CometListCellText.react'), {
                    headline: h._('__JHASH__1dAo_spbwgH__JHASH__'),
                  }),
                  radioAddonProps: {
                    checked: q(z),
                    onValueChange: function () {
                      x(u), A(p.WEB_LINK);
                    },
                    value: p.WEB_LINK,
                  },
                }),
              }),
              q(z) &&
                j.jsx(c('StoriesCreateCTAWebLinkOptions.react'), {
                  buttonType: w,
                  customLink: y,
                  linkInputError: e,
                  onButtonTypeChange: function (a) {
                    x(a), v(a);
                  },
                  onCustomLinkChange: b,
                  pageLinks: g,
                }),
            ],
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function q(a) {
      return a === p.WEB_LINK;
    }
    function r(a) {
      return a === p.VIEW_SHOP;
    }
    g['default'] = a;
  },
  98,
);
