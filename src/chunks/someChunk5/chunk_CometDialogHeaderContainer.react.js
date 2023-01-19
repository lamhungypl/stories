__d(
  'CometDialogHeaderContainer.react',
  ['CometDivider.react', 'react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        container: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          flexShrink: 'x2lah0s',
          justifyContent: 'x1qughib',
          minHeight: 'x879a55',
          position: 'x1n2onr6',
          $$css: !0,
        },
      };
    function a(a) {
      var b = a.children,
        d = a.id,
        e = a.withDivider;
      e = e === void 0 ? !1 : e;
      a = a.xstyle;
      return h.jsxs('div', {
        children: [
          h.jsx('div', {
            className: c('stylex')([i.container, a]),
            id: d,
            children: b,
          }),
          e && h.jsx(c('CometDivider.react'), {}),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
