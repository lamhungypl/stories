__d(
  'CometDialogContainer.react',
  [
    'BaseDialog.react',
    'BaseMultiPageView.react',
    'CometDialogLoadingStateContext',
    'CometDialogPageLoadingState.react',
    'emptyFunction',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo,
      k = {
        anchor: {
          alignItems: 'x1qjc9v5',
          maxHeight: 'x1bwycvy',
          paddingStart: 'x1e558r4',
          paddingEnd: 'x150jy0e',
          paddingTop: 'x1x97wu9',
          paddingBottom: 'xbr3nou',
          '@supports (padding: env(safe-area-inset-bottom, 0))_paddingBottom':
            'xqit15g',
          '@supports (padding: env(safe-area-inset-bottom, 0))_paddingTop':
            'x1bi8yb4',
          $$css: !0,
        },
        card: {
          backgroundColor: 'x1jx94hy',
          borderTopStartRadius: 'x1qpq9i9',
          borderTopEndRadius: 'xdney7k',
          borderBottomEndRadius: 'xu5ydu1',
          borderBottomStartRadius: 'xt3gfkd',
          boxShadow: 'x104qc98',
          clipPath: 'x1gj8qfm',
          flexGrow: 'x1iyjqo2',
          overflowX: 'x6ikm8r',
          overflowY: 'x10wlt62',
          '@media (max-width: 679px)_boxShadow': 'x1likypf',
          '@media (max-width: 679px)_clipPath': 'x7b354b',
          '@media (max-width: 679px)_overflowX': 'x1e9k66k',
          '@media (max-width: 679px)_overflowY': 'x12l8kdc',
          $$css: !0,
        },
        dialog: {
          alignItems: 'x1qjc9v5',
          borderTopStartRadius: 'x1qpq9i9',
          borderTopEndRadius: 'xdney7k',
          borderBottomEndRadius: 'xu5ydu1',
          borderBottomStartRadius: 'xt3gfkd',
          display: 'x78zum5',
          overflowX: 'x1plvlek',
          overflowY: 'xryxfnj',
          '@media (max-width: 679px)_boxShadow': 'xcatxm7',
          $$css: !0,
        },
        root: {
          '@media (max-width: 679px)_justifyContent': 'xshlqvt',
          $$css: !0,
        },
      },
      l = {
        medium: { maxWidth: 'xrgej4m', width: 'xh8yej3', $$css: !0 },
        small: { maxWidth: 'x1n7qst7', width: 'xh8yej3', $$css: !0 },
      };
    function a(a, b) {
      var d = a.anchorXStyle,
        e = a.children,
        f = a.disableClosingWithMask;
      f = f === void 0 ? !1 : f;
      var g = a.label,
        m = a.labelledBy,
        n = a.onClose,
        o = a.size;
      o = o === void 0 ? 'small' : o;
      a = a.testid;
      a = j(
        function () {
          var a;
          return h.jsx(c('CometDialogPageLoadingState.react'), {
            onClose: (a = n) != null ? a : c('emptyFunction'),
          });
        },
        [n],
      );
      var p = i(c('CometDialogLoadingStateContext'));
      return h.jsx(c('BaseDialog.react'), {
        anchorXStyle: [k.anchor, d],
        'aria-label': g,
        'aria-labelledby': m,
        disableClosingWithMask: f,
        onClose: (d = n) != null ? d : c('emptyFunction'),
        ref: b,
        rootXStyle: k.root,
        testid: void 0,
        xstyle: [k.dialog, l[o]],
        children: h.jsx(c('BaseMultiPageView.react'), {
          disableAutoRestoreFocus: p,
          fallback: a,
          xstyle: k.card,
          children: e,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = h.forwardRef(a);
    g['default'] = e;
  },
  98,
);
