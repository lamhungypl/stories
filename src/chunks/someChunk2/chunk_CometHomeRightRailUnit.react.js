__d(
  'CometHomeRightRailUnit.react',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var c = a.children,
        d = a.hasBottomDivider;
      d = d === void 0 ? !0 : d;
      var e = a.header,
        f = a.showActionOnHover;
      f = f === void 0 ? !1 : f;
      a = a.testid;
      return h.jsxs('div', {
        className: 'x1n2onr6' + (f ? ' x1loll9g' : ''),
        'data-testid': void 0,
        ref: b,
        children: [
          e,
          h.jsx('div', { className: 'xwib8y2 x1y1aw1k', children: c }),
          d
            ? h.jsx('div', {
                className: 'x14nfmen xqmqy1e x92rtbv xjm9jq1 x10l6tqk x16q8cke',
              })
            : null,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
