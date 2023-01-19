__d(
  'CometProfilePlusAPPageInboxMessageButtonImpl.react',
  [
    'CometErrorBoundary.react',
    'CometIconMessengerFilled.react',
    'CometPlaceholder.react',
    'CometPressable.react',
    'SVGIcon',
    'TetraCircleButton.react',
    'cr:4503',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var e = a.deferredBadgeCount,
        f = a.label,
        g = a.linkProps,
        i = a.onPress;
      a = a.setBadgeCount;
      e = e;
      var j = b('cr:4503') != null;
      return h.jsxs(c('CometPressable.react'), {
        label: f,
        linkProps: j ? void 0 : g,
        onPress: i,
        style: { borderRadius: '50%' },
        children: [
          j
            ? b('cr:4503') && h.jsx(b('cr:4503'), { label: f })
            : h.jsx(c('TetraCircleButton.react'), {
                icon: d('SVGIcon').legacySVGIcon(
                  c('CometIconMessengerFilled.react'),
                ),
                label: f,
                linkProps: g,
                onPress: i,
                size: 40,
              }),
          e != null &&
            h.jsx(c('CometErrorBoundary.react'), {
              children: h.jsx(c('CometPlaceholder.react'), {
                fallback: h.jsx('span', {}),
                children: h.jsx('span', {
                  className: 'x10l6tqk x8zc4e7 xtu2xtp x1vjfegm',
                  children: h.jsx(e, { setBadgeCount: a }),
                }),
              }),
            }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
