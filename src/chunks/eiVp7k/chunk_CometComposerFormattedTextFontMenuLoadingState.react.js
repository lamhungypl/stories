__d(
  'CometComposerFormattedTextFontMenuLoadingState.react',
  [
    'CometFormattedTextFontGlimmer.react',
    'CometPopover.react',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        root: {
          borderTop: 'x19lhggo',
          borderEnd: 'x144nipd',
          borderBottom: 'x1hqtkzk',
          borderStart: 'xlg2ruo',
          borderTopColor: 'x8cjs6t',
          borderEndColor: 'x1ch86jh',
          borderBottomColor: 'x80vd3b',
          borderStartColor: 'xckqwgs',
          borderTopStartRadius: 'x1lq5wgf',
          borderTopEndRadius: 'xgqcy7u',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          borderTopWidth: 'xamhcws',
          borderEndWidth: 'xol2nv',
          borderBottomWidth: 'xlxy82',
          borderStartWidth: 'x19p7ews',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          justifyContent: 'xl56j7k',
          minWidth: 'xhs4bwn',
          paddingTop: 'x1y1aw1k',
          paddingEnd: 'x1sxyh0',
          paddingBottom: 'xwib8y2',
          paddingStart: 'xurb0ha',
          width: 'xctrb1h',
          $$css: !0,
        },
      },
      j = 6;
    function a(a) {
      a = a.xstyle;
      return h.jsx(c('CometPopover.react'), {
        children: h.jsx('div', {
          className: c('stylex')(i.root, a),
          children: Array(j)
            .fill(void 0)
            .map(function (a, b) {
              return h.jsx(c('CometFormattedTextFontGlimmer.react'), {}, b);
            }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
