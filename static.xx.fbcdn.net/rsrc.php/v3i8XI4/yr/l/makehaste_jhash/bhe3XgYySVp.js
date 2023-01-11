/*FB_PKG_DELIM*/

__d(
  'CometFormNumberStepper.react',
  [
    'fbt',
    'ix',
    'BaseTextInput.react',
    'CometFormInputWrapper.react',
    'CometPressable.react',
    'CometPressableChildrenWithOverlay.react',
    'CometTintedIcon.react',
    'fbicon',
    'react',
    'recoverableViolation',
    'useBaseInputValidators',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = {
        button: {
          alignSelf: 'xamitd3',
          appearance: 'xjyslct',
          backgroundColor: 'xjbqb8w',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          borderTopWidth: 'x972fbf',
          borderEndWidth: 'xcfux6l',
          borderBottomWidth: 'x1qhh985',
          borderStartWidth: 'xm0m39n',
          boxSizing: 'x9f619',
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
          zIndex: 'x1ja2u2z',
          $$css: !0,
        },
        buttonChild: {
          height: 'x1qx5ct2',
          paddingTop: 'xz9dl7a',
          paddingEnd: 'xn6708d',
          paddingBottom: 'xsag5q8',
          paddingStart: 'x1ye3gou',
          width: 'xw4jnvo',
          $$css: !0,
        },
        buttonDisabled: { cursor: 'x1h6gzvc', $$css: !0 },
        input: {
          appearance: 'xtilpmw',
          backgroundColor: 'xjbqb8w',
          borderTop: 'x76ihet',
          borderEnd: 'xwmqs3e',
          borderBottom: 'x112ta8',
          borderStart: 'xxxdfa6',
          boxSizing: 'x9f619',
          color: 'xzsf02u',
          fontSize: 'x1jchvi3',
          fontWeight: 'x1fcty0u',
          lineHeight: 'x132q4wb',
          outline: 'x1a2a7pz',
          paddingBottom: 'x1a8lsjc',
          paddingEnd: 'x1pi30zi',
          paddingStart: 'x1swvt13',
          paddingTop: 'x9desvi',
          width: 'xh8yej3',
          '::-webkit-inner-spin-button_appearance': 'x3pxiar',
          '::-webkit-inner-spin-button_marginTop': 'x1usv16b',
          '::-webkit-inner-spin-button_marginEnd': 'x1w2f3u4',
          '::-webkit-inner-spin-button_marginBottom': 'xqn9uap',
          '::-webkit-inner-spin-button_marginStart': 'x5qmtx',
          '::-webkit-outer-spin-button_appearance': 'x7uq1h6',
          '::-webkit-outer-spin-button_marginTop': 'x1d51z3f',
          '::-webkit-outer-spin-button_marginEnd': 'x1enq0fi',
          '::-webkit-outer-spin-button_marginBottom': 'xcwdoar',
          '::-webkit-outer-spin-button_marginStart': 'xrp7k0k',
          $$css: !0,
        },
      };
    function l(a) {
      var b = a.disabled,
        d = a.icon,
        e = a.label;
      a = a.onPress;
      return j.jsx(c('CometPressable.react'), {
        'aria-label': e,
        disabled: b,
        display: 'inline',
        onPress: a,
        overlayOffset: 10,
        overlayRadius: 12,
        xstyle: k.button,
        children: function (a) {
          a = a.overlay;
          return j.jsx('div', {
            className:
              'x1qx5ct2 xz9dl7a xn6708d xsag5q8 x1ye3gou xw4jnvo' +
              (b ? ' x1h6gzvc' : ''),
            children: j.jsx(c('CometPressableChildrenWithOverlay.react'), {
              overlay: a,
              children: j.jsx(c('CometTintedIcon.react'), {
                color: b ? 'disabled' : 'primary',
                icon: d,
              }),
            }),
          });
        },
      });
    }
    l.displayName = l.name + ' [from ' + f.id + ']';
    function a(a, b) {
      var e = a.disabled,
        f = e === void 0 ? !1 : e;
      e = a.helperText;
      var g = a.hideStepperButtons;
      g = g === void 0 ? !1 : g;
      var m = a.label,
        n = a.max,
        o = a.min,
        p = o === void 0 ? 0 : o,
        q = a.onBlur,
        r = a.onValueChange,
        s = a.placeholder;
      o = a.step;
      var t = o === void 0 ? 1 : o;
      o = a.testid;
      o = a.validationState;
      var u = a.validator,
        v = a.value;
      u = c('useBaseInputValidators')({
        validator: u,
        value: (a = v) != null ? a : 0,
      });
      a = u.topResultReason;
      u = u.topResultType;
      var w = u !== 'CORRECT' ? u : o,
        x = f || v == null || v <= p,
        y = f || (v != null && n != null && v >= n);
      u = function () {
        if (x) return;
        if (v != null) r(Math.max(v - t, p));
        else {
          var a;
          r((a = n) != null ? a : p);
        }
      };
      o = function () {
        if (y) return;
        if (v != null) {
          var a;
          r(Math.min(v + t, (a = n) != null ? a : Number.MAX_SAFE_INTEGER));
        } else r(p);
      };
      if (p < 0) {
        c('recoverableViolation')(
          'Minimum value cannot be less than 0, given: ' + p,
          'comet_ui',
        );
        return null;
      } else if (n != null && n > Number.MAX_SAFE_INTEGER) {
        c('recoverableViolation')(
          'Maximum value cannot be more than than Number.MAX_SAFE_INTEGER, given: ' +
            n,
          'comet_ui',
        );
        return null;
      }
      return j.jsx(c('CometFormInputWrapper.react'), {
        auxContent: g
          ? null
          : j.jsxs(j.Fragment, {
              children: [
                j.jsx(l, {
                  disabled: x,
                  icon: d('fbicon')._(i('518013'), 20),
                  label: h._('__JHASH__f1VTGnjvdmr__JHASH__'),
                  onPress: u,
                }),
                j.jsx(l, {
                  disabled: y,
                  icon: d('fbicon')._(i('487090'), 20),
                  label: h._('__JHASH__9JnVMhyYclf__JHASH__'),
                  onPress: o,
                }),
              ],
            }),
        cursor: 'text',
        disabled: f,
        helperText: a != null ? a : e,
        label: m,
        validationState: w,
        value: v,
        children: function (a) {
          var d = a.focused,
            e = a.helperTextID;
          a = a.id;
          return j.jsx(c('BaseTextInput.react'), {
            'aria-describedby': e,
            'aria-invalid': w === 'ERROR',
            autoComplete: 'off',
            disabled: f,
            id: a,
            max: n,
            min: p,
            onBlur: q,
            onChange: function (a) {
              a = ((a = a.target.value) != null ? a : '')
                .split('')
                .filter(function (a) {
                  return /^[0-9]$/.test(a);
                })
                .join('');
              r(a !== '' ? Number(a) : null);
            },
            onKeyDown: function (a) {
              if (a.ctrlKey || a.metaKey || a.altKey) return;
              switch (a.key) {
                case 'e':
                case 'E':
                case '-':
                case '.':
                case ',':
                  a.preventDefault();
                  a.stopPropagation();
                  return;
              }
            },
            pattern: '[0-9]*',
            placeholder: d ? s : null,
            ref: b,
            step: t,
            suppressFocusRing: !0,
            testid: void 0,
            type: 'number',
            value: (e = v) != null ? e : '',
            xstyle: k.input,
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = j.forwardRef(a);
    g['default'] = b;
  },
  98,
);
__d(
  'useCometFormSelectMenuTriggerKeyDownHandler',
  ['clearTimeout', 'react', 'setTimeout'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useRef,
      j = 500;
    function a(a, b, d, e, f) {
      var g = i(null),
        k = i(''),
        l = i(''),
        m = i(-1);
      return h(
        function (h) {
          if (
            k.current === '' &&
            (h.code === 'Backspace' || h.code === 'Clear' || h.key === ' ')
          )
            return;
          if (
            !(
              h.key.length === 1 ||
              h.code === 'Backspace' ||
              h.code === 'Clear'
            ) ||
            h.altKey ||
            h.ctrlKey ||
            h.metaKey
          )
            return;
          h.code === 'Backspace' || h.code === 'Clear'
            ? (k.current = k.current.substring(0, k.current.length - 1))
            : (k.current += h.key.toLocaleLowerCase());
          h.preventDefault();
          g.current != null && c('clearTimeout')(g.current);
          g.current = c('setTimeout')(function () {
            (k.current = ''), (g.current = null);
          }, j);
          h = d.findIndex(function (a) {
            return a.value === b;
          });
          h = h === -1 ? 0 : h;
          for (var i = 0; i < d.length; i++) {
            var n = (i + h) % d.length,
              o = d[n];
            if (o.label.toString().toLocaleLowerCase().startsWith(k.current)) {
              if (!e) {
                f();
                a(o.value);
                l.current = k.current.toLocaleLowerCase().substring(0, 1);
                m.current = n;
                return;
              }
              if (
                l.current === k.current.toLocaleLowerCase().substring(0, 1) &&
                m.current === n
              )
                continue;
              l.current = k.current.toLocaleLowerCase().substring(0, 1);
              m.current = n;
              a(o.value);
              return;
            }
          }
        },
        [b, d, e, f, a],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'useCometFormSelectOnlyComboboxKeyConfigs',
  ['fbt', 'CometKeys', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    b = d('react');
    var i = b.useCallback,
      j = b.useMemo;
    function a(a) {
      var b = a.activeValue,
        d = a.filteredOptions,
        e = a.isMenuVisible,
        f = a.onHide,
        g = a.onPress,
        k = a.onShow,
        l = a.setActiveValue,
        m = a.value,
        n = i(
          function () {
            if (d.length === 0) return;
            if (!e) {
              var a;
              l((a = m) != null ? a : d[0].value);
              k();
              return;
            }
            a = d.findIndex(function (a) {
              return a.value === b;
            });
            a > 0 && l(d[a - 1].value);
            k();
          },
          [d, e, k, l, m, b],
        ),
        o = i(
          function () {
            if (d.length === 0) return;
            if (!e) {
              var a;
              k();
              l((a = m) != null ? a : d[0].value);
              return;
            }
            a = d.findIndex(function (a) {
              return a.value === b;
            });
            a < d.length - 1 && l(d[a + 1].value);
            k();
          },
          [d, e, k, l, m, b],
        );
      return j(
        function () {
          return [
            {
              command: { key: c('CometKeys').ENTER },
              description: h._('__JHASH__H9r-54XFgGX__JHASH__'),
              handler: g,
            },
            {
              command: { key: c('CometKeys').SPACE },
              description: h._('__JHASH__H9r-54XFgGX__JHASH__'),
              handler: g,
            },
            {
              command: { alt: !0, key: c('CometKeys').UP },
              description: h._('__JHASH__H9r-54XFgGX__JHASH__'),
              handler: g,
            },
            {
              command: { key: c('CometKeys').ESCAPE },
              description: h._('__JHASH__gx0C5Qpg34W__JHASH__'),
              handler: function () {
                e && f();
              },
            },
            {
              command: { key: c('CometKeys').TAB },
              description: h._('__JHASH__H9r-54XFgGX__JHASH__'),
              handler: g,
              shouldPreventDefault: !1,
            },
            {
              command: { key: c('CometKeys').DOWN },
              description: h._('__JHASH__cxFOlaY4tQA__JHASH__'),
              handler: o,
            },
            {
              command: { key: c('CometKeys').UP },
              description: h._('__JHASH__JvfQjzZTBTU__JHASH__'),
              handler: n,
            },
            {
              command: { key: c('CometKeys').HOME },
              description: h._('__JHASH__YCFt2LFLOyX__JHASH__'),
              handler: function () {
                e || k(), l(d[0].value);
              },
            },
            {
              command: { key: c('CometKeys').END },
              description: h._('__JHASH__8RbNJUNJiJ5__JHASH__'),
              handler: function () {
                e || k(), l(d[d.length - 1].value);
              },
            },
            {
              command: { key: c('CometKeys').PAGE_UP },
              description: h._('__JHASH__P9EEfGTJGkw__JHASH__'),
              handler: function () {
                var a = d.findIndex(function (a) {
                  return a.value === b;
                });
                e &&
                  (d.length <= 11 || a <= 11
                    ? l(d[0].value)
                    : l(d[d.length - 10].value));
              },
            },
            {
              command: { key: c('CometKeys').PAGE_DOWN },
              description: h._('__JHASH__c0Qyjhx5Cbn__JHASH__'),
              handler: function () {
                var a = d.findIndex(function (a) {
                  return a.value === b;
                });
                e &&
                  (d.length <= 11 || d.length - a <= 11
                    ? l(d[d.length - 1].value)
                    : l(d[d.length + 10].value));
              },
            },
          ];
        },
        [g, e, o, n, f, l, d, k, b],
      );
    }
    g['default'] = a;
  },
  98,
);
__d(
  'CometFormSelectOnlyCombobox.react',
  [
    'ix',
    'BaseContextualLayer.react',
    'CometComponentWithKeyCommands.react',
    'CometFormComboboxMenuItem.react',
    'CometFormInputWrapper.react',
    'CometIcon.react',
    'CometMenu.react',
    'CometProfilePhoto.react',
    'FocusInertRegion.react',
    'FocusWithinHandler.react',
    'emptyFunction',
    'fbicon',
    'focusScopeQueries',
    'react',
    'useCometFormSelectMenuTriggerKeyDownHandler',
    'useCometFormSelectOnlyComboboxKeyConfigs',
    'useCometUniqueID',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useCallback,
      k = b.useRef,
      l = b.useState;
    function a(a) {
      var b = a.align,
        e = a.ariaLabel,
        f = a.auxItemType,
        g = a.defaultIcon,
        m = a.disabled,
        n = m === void 0 ? !1 : m;
      m = a.footer;
      var o = a.header,
        p = a.helperText,
        q = a.helperTextIsHidden;
      q = q === void 0 ? !1 : q;
      var r = a.iconType,
        s = r === void 0 ? 'icon' : r;
      r = a.label;
      var t = a.labelRef,
        u = a.onNullValue,
        v = a.onValueChange,
        w = a.onVisibilityChange,
        x = w === void 0 ? c('emptyFunction') : w,
        y = a.options;
      a.position;
      w = a.size;
      var z = a.testid;
      z = a.truncate;
      var A = z === void 0 ? !0 : z;
      z = a.validationState;
      var B = a.value;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'align',
        'ariaLabel',
        'auxItemType',
        'defaultIcon',
        'disabled',
        'footer',
        'header',
        'helperText',
        'helperTextIsHidden',
        'iconType',
        'label',
        'labelRef',
        'onNullValue',
        'onValueChange',
        'onVisibilityChange',
        'options',
        'position',
        'size',
        'testid',
        'truncate',
        'validationState',
        'value',
      ]);
      var C = c('useCometUniqueID')(),
        D = c('useCometUniqueID')(),
        E = l(!1),
        F = E[0],
        G = E[1];
      E = l(null);
      var H = E[0],
        I = E[1],
        J = F && y.length > 0,
        K = k(null);
      E = y.filter(function (a) {
        return !a.disabled;
      });
      F = y.findIndex(function (a) {
        return a.value === H;
      });
      g = g == null ? void 0 : { iconProps: g, type: s };
      var L = null,
        M = null,
        N = y.find(function (a) {
          return a.value === B;
        });
      if (B != null && N != null) {
        L = N.icon;
        M = N.label;
        if (s === 'profile-picture' && L != null) {
          L.shape = (N = L.shape) != null ? N : L.style;
          L.source = (N = L.source) != null ? N : { uri: L.src };
        }
      }
      N = L == null ? void 0 : { iconProps: L, type: s };
      var O = (L = N) != null ? L : g,
        P = j(
          function () {
            G(!0), x(!0);
          },
          [x],
        ),
        Q = j(
          function () {
            I(null), G(!1), x(!1);
          },
          [x],
        );
      N = j(
        function (a) {
          a || Q();
        },
        [Q],
      );
      function R(a, b) {
        return a + '__' + (b != null ? b : '0');
      }
      L = j(
        function () {
          if (J) H != null ? v(H) : H == null && u && u(null), Q();
          else {
            var a;
            I((a = B) != null ? a : null);
            P();
          }
        },
        [H, J, v, Q, P, B],
      );
      g = c('useCometFormSelectOnlyComboboxKeyConfigs')({
        activeValue: H,
        filteredOptions: E,
        isMenuVisible: J,
        onHide: Q,
        onPress: L,
        onShow: P,
        setActiveValue: I,
        value: B,
      });
      L = c('useCometFormSelectMenuTriggerKeyDownHandler')(I, H, E, J, P);
      return i.jsx(c('FocusWithinHandler.react'), {
        onFocusChange: N,
        children: i.jsxs(c('CometComponentWithKeyCommands.react'), {
          commandConfigs: n ? [] : g,
          children: [
            i.jsx(c('CometFormInputWrapper.react'), {
              addOnStart:
                O != null &&
                (O.type === 'icon'
                  ? i.jsx('div', {
                      className: 'x1swvt13 x109j2v6',
                      children: i.jsx(c('CometIcon.react'), {
                        color: 'secondary',
                        icon: O.iconProps,
                      }),
                    })
                  : O.type === 'profile-picture'
                  ? i.jsx('div', {
                      className: 'x1swvt13 xz9dl7a',
                      children: i.jsx(
                        c('CometProfilePhoto.react'),
                        babelHelpers['extends']({}, O.iconProps, { size: 32 }),
                      ),
                    })
                  : null),
              'aria-activedescendant':
                J && H != null && F !== -1 ? R(C, F) : void 0,
              'aria-controls': J ? D : void 0,
              'aria-expanded': J,
              'aria-haspopup': 'listbox',
              ariaLabel: e,
              auxContent: i.jsx('div', {
                className: 'xamitd3 x1pi30zi',
                children: i.jsx(c('CometIcon.react'), {
                  color: 'primary',
                  icon: d('fbicon')._(h('481882'), 16),
                }),
              }),
              comboboxKeyDown: L,
              cursor: 'pointer',
              disabled: n,
              helperText: p,
              helperTextIsHidden: q,
              label: r,
              labelRef: t,
              onPress: function (a) {
                if (a.target === K.current) return;
                P();
              },
              role: 'combobox',
              shrinkLabelOnFocus: !1,
              validationState: z,
              value: B,
              children: function (a) {
                a = a.id;
                return i.jsx('div', {
                  className: O != null ? 'x4mskuk' : 'xh8yej3',
                  id: a,
                  ref: function (a) {
                    K.current = a;
                  },
                  suppressHydrationWarning: !0,
                  children: i.jsx('div', {
                    className:
                      'xjyslct xjbqb8w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 x1jchvi3 x1fcty0u x132q4wb xdj266r x11i5rnm xat24cr x1mh8g0r x1a2a7pz x9desvi x1pi30zi x1a8lsjc x1n2onr6 x16tdsg8 xh8yej3 x1ja2u2z' +
                      ((n ? ' x1dntmbh x1h6gzvc x47corl' : ' xzsf02u') +
                        (O != null ? ' xr9oo41' : ' x1swvt13' + (n ? '' : ''))),
                    'data-testid': void 0,
                    children: i.jsx('span', {
                      className:
                        '' + (A ? ' x6ikm8r x10wlt62 xlyipyv xuxw1ft' : ''),
                      children: (a = M) != null ? a : '\xa0',
                    }),
                  }),
                });
              },
            }),
            J &&
              i.jsx(
                c('BaseContextualLayer.react'),
                babelHelpers['extends'](
                  { align: w === 'full' ? 'stretch' : b },
                  a,
                  {
                    contextRef: K,
                    children: i.jsx(c('FocusInertRegion.react'), {
                      focusQuery: d('focusScopeQueries').tabbableScopeQuery,
                      children: i.jsx(c('CometMenu.react'), {
                        footer: m != null ? { text: m } : void 0,
                        header: o,
                        id: D,
                        role: 'listbox',
                        size: w,
                        truncate: A,
                        children: y.map(function (a, b) {
                          var d = a.value === B;
                          return i.jsx(
                            c('CometFormComboboxMenuItem.react'),
                            {
                              'aria-disabled': a.disabled,
                              'aria-setsize': y.length,
                              auxItemType: f,
                              bodyColor: a.bodyColor,
                              bodyText: a.bodyText,
                              disabled: a.disabled,
                              icon: a.icon,
                              iconType: s,
                              id: R(C, b),
                              isSelected: d,
                              onClick: function () {
                                v(a.value), Q();
                              },
                              primaryText: a.label,
                              secondaryColor: a.secondaryColor,
                              secondaryText: a.secondaryText,
                              testid: void 0,
                              visuallyFocused: a.value === H,
                            },
                            a.value,
                          );
                        }),
                      }),
                    }),
                  },
                ),
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
  'EventCometPressableText.react',
  ['CometPressable.react', 'TetraIcon.react', 'TetraText.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        button: {
          backgroundColor: 'xjbqb8w',
          borderTop: 'x76ihet',
          borderEnd: 'xwmqs3e',
          borderBottom: 'x112ta8',
          borderStart: 'xxxdfa6',
          $$css: !0,
        },
        buttonContent: { alignItems: 'x6s0dn4', display: 'x78zum5', $$css: !0 },
        buttonText: { paddingStart: 'x16hj40l', $$css: !0 },
      };
    function a(a) {
      var b = a['data-testid'];
      b = a.disabled;
      var d = a.icon,
        e = a.iconColor;
      e = e === void 0 ? 'primary' : e;
      var f = a.onPress,
        g = a.text;
      a = a.textColor;
      a = a === void 0 ? 'primary' : a;
      a = h.jsx(c('TetraText.react'), { color: a, type: 'body4', children: g });
      return h.jsx(c('CometPressable.react'), {
        disabled: b,
        display: 'inline',
        onPress: f,
        overlayDisabled: !0,
        testid: void 0,
        xstyle: i.button,
        children:
          d != null
            ? h.jsxs('div', {
                className: 'x6s0dn4 x78zum5',
                children: [
                  h.jsx(c('TetraIcon.react'), { color: e, icon: d }),
                  h.jsx('div', { className: 'x16hj40l', children: a }),
                ],
              })
            : a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.memo(a);
    g['default'] = b;
  },
  98,
);
__d(
  'GamingCometArenaCreationUtils',
  ['fbt'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function i(a) {
      return {
        age_minimum_restriction: a.ageMinimumRestriction,
        arena_id: a.arenaID,
        ask_chat_name: a.askChatName,
        ask_skill_level: a.askSkillLevel,
        brackets: a.brackets.map(function (a) {
          var b = a.advancing_per_pool,
            c = a.bracket;
          a = a.pools;
          return { bracket: c, num_advancing_per_pool: b, num_pools: a };
        }),
        checkin_duration: a.checkinDuration,
        exclude_participant_videos: a.excludeParticipantVideos,
        game_id: a.gameID,
        is_check_in_required: a.isCheckInRequired,
        name: a.name,
        num_stations: a.numStations,
        registration_regions: a.registrationRegions,
        registration_restriction: a.registrationRestriction,
        rules: a.rules,
        show_seeding: a.showSeeding,
        start_time: a.startTime,
        team_cap: a.teamCap,
        team_size: a.teamSize,
        third_place_match: a.hasThirdPlaceMatch,
      };
    }
    function a(a) {
      return a ? a.map(i) : null;
    }
    function b(a) {
      var b = a.brackets;
      a = b.findIndex(function (a, c) {
        var d = b[c + 1];
        a = a.advancing_per_pool * a.pools;
        d = d == null ? 1 : d.pools * d.advancing_per_pool;
        c + 1 === b.length - 1 && (d = Math.max(d, 2));
        return a < d;
      });
      if (a >= 0)
        return h._('__JHASH__7KIj7SO2Drc__JHASH__', [
          h._param('stageNumber', a + 1),
        ]);
    }
    function c() {
      return {
        ageMinimumRestriction: 0,
        arenaID: null,
        askChatName: !1,
        askSkillLevel: !1,
        brackets: [
          { advancing_per_pool: 1, bracket: 'SINGLE_ELIMINATION', pools: 1 },
        ],
        canEditRules: !0,
        checkinDuration: 0,
        excludeParticipantVideos: !1,
        gameID: null,
        gameName: null,
        hasThirdPlaceMatch: !1,
        isCheckInRequired: !1,
        name: '',
        numStations: 0,
        registrationRegions: [],
        registrationRestriction: 'OPEN',
        rules: '',
        showSeeding: !1,
        startTime: null,
        status: 'NOT_STARTED',
        teamCap: 64,
        teamSize: null,
      };
    }
    g.getArenaCreationData = i;
    g.getArenasCreationData = a;
    g.getTournamentBracketError = b;
    g.defaultArenaState = c;
  },
  98,
);
//# sourceURL=https://static.xx.fbcdn.net/rsrc.php/v3i8XI4/yr/l/makehaste_jhash/bhe3XgYySVp.js?_nc_x=7tWlUfRI-Ve
