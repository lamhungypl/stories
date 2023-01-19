__d(
  'CometLexicalContentEditable.react',
  [
    'CometLexicalContentEditableCommands',
    'Lexical',
    'mlcEditableSubscription',
    'react',
    'stylex',
    'useCometLexicalSubscription',
    'useLayoutEffect_SAFE_FOR_SSR',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useEffect,
      j = b.useMemo,
      k = b.useState,
      l = {
        editor: {
          color: 'xzsf02u',
          outline: 'x1a2a7pz',
          position: 'x1n2onr6',
          textAlign: 'x14wi4xw',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.ariaAutoComplete,
        e = a.ariaDescribedBy,
        f = a.ariaExpanded,
        g = a.ariaLabel,
        m = a.ariaLabelledBy,
        n = a.ariaMultiline,
        o = a.ariaOwneeID,
        p = a.ariaRequired,
        q = a.autoCapitalize,
        r = a.autoComplete,
        s = a.autoCorrect,
        t = a.contentEditableRef,
        u = a.editor,
        v = a.isInitiallyFocused,
        w = v === void 0 ? !1 : v;
      v = a.role;
      v = v === void 0 ? 'textbox' : v;
      var x = a.spellCheck;
      x = x === void 0 ? !1 : x;
      var y = a.tabIndex,
        z = a.webDriverTestID;
      z = a.xstyle;
      a = k(void 0);
      var A = a[0],
        B = a[1];
      a = k(void 0);
      var C = a[0],
        D = a[1];
      a = c('useCometLexicalSubscription')(
        j(
          function () {
            return c('mlcEditableSubscription')(u);
          },
          [u],
        ),
      );
      c('useLayoutEffect_SAFE_FOR_SSR')(
        function () {
          return u.registerCommand(
            d('CometLexicalContentEditableCommands').COMET_LEXICAL_ARIA_COMMAND,
            function (a) {
              Object.prototype.hasOwnProperty.call(a, 'activeDescendantID') &&
                B(a.activeDescendantID);
              Object.prototype.hasOwnProperty.call(a, 'controlsID') &&
                D(a.controlsID);
              return !1;
            },
            d('Lexical').COMMAND_PRIORITY_EDITOR,
          );
        },
        [u],
      );
      i(
        function () {
          w &&
            u.focus(function () {
              var a = document.activeElement,
                b = u.getRootElement();
              (!(b == null ? void 0 : b.contains(a)) ||
                b != null ||
                a == null) &&
                (b == null ? void 0 : b.focus({ preventScroll: !0 }));
            });
        },
        [u, w],
      );
      return h.jsx('div', {
        'aria-activedescendant': a ? A : null,
        'aria-autocomplete': a ? b : null,
        'aria-controls': a ? C : null,
        'aria-describedby': e,
        'aria-expanded': a ? (v === 'combobox' ? !!f : null) : null,
        'aria-label': g,
        'aria-labelledby': m,
        'aria-multiline': n,
        'aria-owns': a ? o : null,
        'aria-required': p,
        autoCapitalize: q,
        autoComplete: r,
        autoCorrect: s,
        className: c('stylex')(l.editor, z) + ' ' + (a ? 'notranslate' : ''),
        contentEditable: a,
        'data-testid': void 0,
        ref: t,
        role: a ? v : null,
        spellCheck: x,
        suppressContentEditableWarning: !0,
        tabIndex: y,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
