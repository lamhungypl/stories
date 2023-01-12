__d(
  'CometContentArea.react',
  ['CometSection.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.applyFullHeight;
      b = b === void 0 ? !1 : b;
      var d = a.children,
        e = a.hasNoRole;
      e = e === void 0 ? !1 : e;
      a = a.verticalAlign;
      a = a === void 0 ? 'top' : a;
      return h.jsx('div', {
        className:
          'x1qjc9v5 x78zum5 xl56j7k x193iq5w x1t2pt76' + (b ? ' x5yr21d' : ''),
        children: h.jsx(c('CometSection.react'), {
          className:
            'x6s0dn4 x78zum5 xdt5ytf x193iq5w x1t2pt76 xh8yej3' +
            (a === 'middle' ? ' xl56j7k' : ''),
          role: e ? void 0 : 'main',
          children: d,
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
