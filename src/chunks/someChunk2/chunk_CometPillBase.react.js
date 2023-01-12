__d(
  'CometPillBase.react',
  [
    'fbt',
    'CometBadge.react',
    'CometIcon.react',
    'CometProfilePhoto.react',
    'CometScreenReaderText.react',
    'TetraText.react',
    'react',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    function a(a) {
      var b = a.color,
        d = a.disabled;
      d = d === void 0 ? !1 : d;
      var e = a.hasNewContentBadge;
      e = e === void 0 ? !1 : e;
      var f = a.image,
        g = a.imagePlacement;
      g = g === void 0 ? 'left' : g;
      var j = a.label,
        k = a.labelIsHidden;
      k = k === void 0 ? !1 : k;
      var l = a.newContentBadgeSize;
      l = l === void 0 ? 6 : l;
      a = a.selected;
      a = a === void 0 ? !1 : a;
      var m = null;
      if (e) {
        e = h._('__JHASH__ZEV9psumY7i__JHASH__');
        m = i.jsx('div', {
          className:
            'x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 x1qhkwwh x6ikm8r x10wlt62 x10l6tqk x13vifvy',
          children: i.jsx(c('CometBadge.react'), {
            border: 'white',
            color: d ? 'gray' : 'blue',
            isProfileBadge: !0,
            label: e,
            size: l,
          }),
        });
      }
      e = b ? b : d ? 'disabled' : a === !0 ? 'highlight' : 'primary';
      l = null;
      f != null &&
        (f.type === 'icon'
          ? (l = i.jsx('div', {
              className:
                'x78zum5 xlup9mm' +
                ((!k && g === 'right'
                  ? ' x1mnrxsn'
                  : '' + (!k && g === 'left' ? '' : '')) +
                  (!k && g === 'left' ? ' x1w0mnb' : '')),
              children: i.jsx(c('CometIcon.react'), {
                color: e,
                icon: f.icon,
                size: 16,
              }),
            }))
          : f.type === 'profile-photo' &&
            f.source != null &&
            (l = i.jsx('div', {
              className: 'x78zum5 x1w0mnb xp7jhwk' + (d ? ' xuzhngd' : ''),
              children: i.jsx(c('CometProfilePhoto.react'), {
                shape: 'circle',
                size: 28,
                source: f.source,
              }),
            })));
      b = g === 'left' ? l : null;
      a = g === 'right' ? l : null;
      k
        ? (d = i.jsx(c('CometScreenReaderText.react'), { text: j }))
        : (d = i.jsx(c('TetraText.react'), {
            color: e,
            numberOfLines: 1,
            type: 'button2',
            children: j,
          }));
      return i.jsxs(i.Fragment, { children: [b, d, a, m] });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g.CometPillBase = a;
  },
  98,
);
