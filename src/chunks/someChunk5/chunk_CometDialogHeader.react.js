__d(
  'CometDialogHeader.react',
  [
    'fbt',
    'ChevronLeftOutline24.svg.react',
    'ChevronRightOutline24.svg.react',
    'CometCircleButton.react',
    'CometDialogHeaderContainer.react',
    'CrossFilled24.svg.react',
    'Locale',
    'TetraText.react',
    'emptyFunction',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = {
        headerItem: {
          marginStart: 'x1d52u69',
          marginEnd: 'xktsk01',
          $$css: !0,
        },
        headerPlaceholder: { height: 'xc9qbxq', width: 'x14qfxbe', $$css: !0 },
      },
      k = c('Locale').isRTL();
    function a(a) {
      var b = a.backTestID;
      b = b === void 0 ? 'back-button' : b;
      b = a.closeTestID;
      b = b === void 0 ? 'close-button' : b;
      b = a.disabled;
      b = b === void 0 ? !1 : b;
      var d = a.withBackButton;
      d = d === void 0 ? !1 : d;
      var e = a.withCloseButton;
      e = e === void 0 ? !0 : e;
      var f = a.onClose;
      f = f === void 0 ? c('emptyFunction') : f;
      var g = a.onBack;
      g = g === void 0 ? c('emptyFunction') : g;
      var l = a.withoutDivider;
      l = l === void 0 ? !1 : l;
      var m = a.text;
      a = a.id;
      return i.jsxs(c('CometDialogHeaderContainer.react'), {
        withDivider: !l,
        children: [
          d
            ? i.jsx('div', {
                className: 'x1d52u69 xktsk01',
                children: i.jsx(c('CometCircleButton.react'), {
                  disabled: b,
                  icon: k
                    ? c('ChevronRightOutline24.svg.react')
                    : c('ChevronLeftOutline24.svg.react'),
                  label: h._('__JHASH__sqTeJmgA5ut__JHASH__'),
                  onPress: g,
                  size: 36,
                  testid: void 0,
                }),
              })
            : i.jsx('div', {
                className: c('stylex')([j.headerItem, j.headerPlaceholder]),
              }),
          m != null &&
            i.jsx(c('TetraText.react'), {
              align: 'center',
              id: a,
              isSemanticHeading: !0,
              numberOfLines: 1,
              type: 'headlineEmphasized2',
              children: m,
            }),
          e
            ? i.jsx('div', {
                className: 'x1d52u69 xktsk01',
                children: i.jsx(c('CometCircleButton.react'), {
                  disabled: b,
                  icon: c('CrossFilled24.svg.react'),
                  label: h._('__JHASH__tnRfHlva-bL__JHASH__'),
                  onPress: f,
                  size: 36,
                  testid: void 0,
                }),
              })
            : i.jsx('div', {
                className: c('stylex')([j.headerPlaceholder, j.headerItem]),
              }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
