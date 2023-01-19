__d(
  'CometExceptionDialog.react',
  [
    'fbt',
    'BaseModal.react',
    'CometColumn.react',
    'CometColumnItem.react',
    'CometDialog.react',
    'CometDialogConfirmationFooter.react',
    'CometDialogFooter.react',
    'CometDialogHeader.react',
    'TetraText.react',
    'react',
    'useToggle',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.closeButtonText,
        d = a.debugInfo,
        e = a.errorDescription,
        f = a.errorSummary,
        g = a.onClose;
      a = a.testid;
      a = c('useToggle')(!1);
      var j = a[0],
        k = a[1];
      b = {
        label: (a = b) != null ? a : h._('__JHASH__IRLcUviYZ-b__JHASH__'),
        onPress: g,
        testid: 'comet-exception-dialog-ok-button',
      };
      a = {
        label: '[META ONLY] ' + (j ? 'Hide' : 'Show') + ' error details',
        onPress: function () {
          return k();
        },
        reduceEmphasis: !1,
      };
      a =
        d != null
          ? i.jsx(c('CometDialogConfirmationFooter.react'), {
              primary: b,
              secondary: a,
            })
          : i.jsx(c('CometDialogFooter.react'), {
              expanding: !1,
              primary: babelHelpers['extends']({}, b, { padding: 'wide' }),
            });
      return i.jsx(c('BaseModal.react'), {
        stackingBehavior: 'above-everything',
        children: i.jsx(c('CometDialog.react'), {
          footer: a,
          header: i.jsx(c('CometDialogHeader.react'), { onClose: g, text: f }),
          onClose: g,
          testid: void 0,
          children: i.jsx(c('CometColumn.react'), {
            paddingHorizontal: 16,
            paddingTop: 20,
            spacing: 8,
            children: i.jsx(c('CometColumnItem.react'), {
              children: i.jsxs(c('TetraText.react'), {
                color: 'secondary',
                type: 'body3',
                children: [
                  e,
                  d != null &&
                    i.jsx('div', {
                      children:
                        j &&
                        i.jsx('pre', {
                          className:
                            'x443n21 xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb x1a1m0xk x1yrsyyn x1iji9kk x10b6aqq x1sln4lm xeaf4i8',
                          children: d,
                        }),
                    }),
                ],
              }),
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
