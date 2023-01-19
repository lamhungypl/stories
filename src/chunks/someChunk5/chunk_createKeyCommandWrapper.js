__d(
  'createKeyCommandWrapper',
  [
    'CometKeyCommandContext',
    'CometKeyCommandSettingsContext',
    'CometKeyCommandUtilsContext',
    'CometKeyCommandsTypedLoggerLite',
    'areKeyCombinationsEqual',
    'createKeyCommand',
    'gkx',
    'isSingleCharKey',
    'react',
    'recoverableViolation',
    'stylex',
    'useStable',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useContext,
      k = b.useMemo,
      l = b.useRef,
      m = { wrapperFocusable: { ':focus_outline': 'x1uvtmcs', $$css: !0 } };
    function n(a) {
      if (a instanceof HTMLInputElement)
        return a.type !== 'hidden' && a.type !== 'file' && !a.disabled;
      return a instanceof HTMLSelectElement || a instanceof HTMLTextAreaElement
        ? !a.disabled
        : a instanceof HTMLElement && a.isContentEditable;
    }
    function o(a) {
      return a instanceof HTMLElement && a.getAttribute('role') === 'listbox'
        ? !a.getAttribute('aria-disabled')
        : !1;
    }
    function p(a, b, c) {
      for (
        var d = a,
          e = Array.isArray(d),
          f = 0,
          d = e
            ? d
            : d[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= d.length) break;
          g = d[f++];
        } else {
          f = d.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        var h = g[0];
        g = g[1];
        if (g.groupID === b && g.commandID === c) return a.get(h);
      }
    }
    function q(a, b) {
      return (
        c('gkx')('3598') &&
        b.triggerFromInputs === !0 &&
        n(a) &&
        ((a = b.command) == null ? void 0 : a.alt) === !0
      );
    }
    var r = function (a, b) {
        c('recoverableViolation')(
          'Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set',
          'comet_ax',
        );
      },
      s = function (a, b) {
        c('recoverableViolation')(
          'Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set',
          'comet_ax',
        );
      };
    function a(a, b) {
      return function (d) {
        var e = j(c('CometKeyCommandContext')),
          f = j(c('CometKeyCommandUtilsContext')),
          g = j(c('CometKeyCommandSettingsContext')),
          t = f && f.setActiveWrapper,
          u = l(r),
          v = l(s),
          w = c('useStable')(function () {
            return new Map();
          }),
          x = i(
            function (a) {
              var b,
                d = w.get(a);
              if (
                ((b = d) == null ? void 0 : b.groupID) != null &&
                ((b = d) == null ? void 0 : b.commandID) != null
              ) {
                b = g.getCustomKeyCombination(d.groupID, d.commandID);
                if (
                  b == null ||
                  c('areKeyCombinationsEqual')(
                    b,
                    (b = d) == null ? void 0 : b.command,
                  )
                )
                  return d;
                else d = null;
              }
              b = g.getCustomCommandsMap().get(a);
              if (b != null && b.groupID != null && b.commandID != null) {
                a = p(w, b.groupID, b.commandID);
                a != null && (d = a);
              }
              return d;
            },
            [g, w],
          ),
          y = k(
            function () {
              return {
                addCommands: function (a) {
                  a.forEach(function (a) {
                    var b = a.command;
                    if (b != null) {
                      b = c('createKeyCommand')(b);
                      w.set(b, a);
                      f && f.notifyCommandUpdate();
                    }
                  });
                  return function () {
                    a.forEach(function (a) {
                      var b = a.command;
                      b = c('createKeyCommand')(b);
                      var d = w.get(b);
                      d === a && w['delete'](b);
                    }),
                      f && f.notifyCommandUpdate();
                  };
                },
                applyCommand: function (a, b) {
                  var e,
                    f = x(a);
                  if (f == null) return !1;
                  var h = /^[a-z0-9]$/;
                  if (
                    c('gkx')('3598') &&
                    ((e = f.command) == null ? void 0 : e.alt) === !0 &&
                    g.getModifiedKeyboardShortcutsPreference() === 1
                  )
                    return !0;
                  if (
                    (!f.triggerFromInputs && n(b.target)) ||
                    (o(b.target) && h.test(a))
                  )
                    return !1;
                  if (
                    b.type === 'keyup' &&
                    f.triggerOnKeyUp !== !0 &&
                    f.triggerOnKeyUpAndKeyDown !== !0
                  )
                    return !1;
                  if (b.type === 'keydown' && f.triggerOnKeyUp === !0)
                    return !1;
                  if (f.shouldPreventDefault !== !1) {
                    if (
                      q(b.target, f) &&
                      g.getModifiedKeyboardShortcutsPreference() === 3
                    )
                      return !0;
                    b.preventDefault();
                  }
                  if (f.triggerOnRepeats === !1 && b.repeat === !0) return !1;
                  e = f.handler;
                  if (e != null) {
                    if (
                      f.command != null &&
                      q(b.target, f) &&
                      g.getModifiedKeyboardShortcutsPreference() === 4
                    ) {
                      v.current(f.command, f.singleCharDescription);
                      return !0;
                    }
                    h = g && g.getAreSingleKeysDisabled();
                    b = c('isSingleCharKey')(a);
                    if (h === !0 && b) return !0;
                    if (h === null && b) {
                      u.current(a, f.singleCharDescription);
                      return !0;
                    }
                    e();
                    h = f.description;
                    c('CometKeyCommandsTypedLoggerLite').log({
                      key_combo: a,
                      key_context: d.debugName,
                      key_description: h,
                    });
                    return f.shouldStopPropagation !== !1;
                  }
                  return !1;
                },
                debugName: d.debugName,
                getCommandMap: function () {
                  return w;
                },
                getParent: function () {
                  return e;
                },
                removeCommand: function (a) {
                  w['delete'](a), f && f.notifyCommandUpdate();
                },
                setShowModifiedKeyCommandWrapperDialogRef: function (a) {
                  v.current = a;
                  return function () {
                    v.current = s;
                  };
                },
                setShowSingleCharacterKeyCommandWrapperDialogRef: function (a) {
                  u.current = a;
                  return function () {
                    u.current = r;
                  };
                },
              };
            },
            [g, f, w, e, d.debugName, v, u, x],
          ),
          z = i(
            function () {
              if (!t) {
                c('recoverableViolation')(
                  'setActiveWrapper is undefined in ' +
                    (d.debugName != null ? d.debugName : 'unknown'),
                  'comet_ax',
                );
                return;
              }
              t(y);
            },
            [t, y, d.debugName],
          );
        if (a || d.elementType !== void 0) {
          var A;
          A = (A = d.elementType) != null ? A : 'div';
          A = h.jsx(A, {
            className: c('stylex')(
              d.isWrapperFocusable ? m.wrapperFocusable : void 0,
              d.xstyle,
            ),
            'data-testid': void 0,
            onFocusCapture: a ? z : void 0,
            tabIndex: d.isWrapperFocusable ? -1 : void 0,
            children: d.children,
          });
        } else A = d.children;
        b && (A = h.jsx(b.Provider, { value: y, children: A }));
        return h.jsx(c('CometKeyCommandContext').Provider, {
          value: y,
          children: A,
        });
      };
    }
    g['default'] = a;
  },
  98,
);
