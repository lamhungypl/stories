__d(
  'CometSettingsListDropdownLoadingState.react',
  [
    'CometListCellGlimmer.react',
    'CometPopover.react',
    'TetraText.react',
    'qex',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('qex')._('999'),
      j = {
        actions: { height: 'x17rw0jw', width: 'xvy4d1p', $$css: !0 },
        card: { width: 'x1cvmir6', $$css: !0 },
        cardFullHeight: { height: 'x20eyyc', maxWidth: 'xvv7f4i', $$css: !0 },
        heading: {
          alignItems: 'x6s0dn4',
          display: 'x78zum5',
          flexShrink: 'x2lah0s',
          justifyContent: 'x1qughib',
          minHeight: 'x21xpn4',
          paddingTop: 'xz9dl7a',
          paddingEnd: 'x1pi30zi',
          paddingBottom: 'xjkvuk6',
          paddingStart: 'x1swvt13',
          $$css: !0,
        },
        root: { marginEnd: 'x1emribx', marginTop: 'x1ok221b', $$css: !0 },
      };
    function k(a) {
      var b = a.glimmerSize;
      b = b === void 0 ? 56 : b;
      var d = a.hasActions;
      d = d === void 0 ? !1 : d;
      var e = a.numberOfItems;
      a = a.title;
      return i === !0
        ? h.jsx(k.WithoutPopover, {
            glimmerSize: b,
            hasActions: d,
            numberOfItems: e,
            title: a,
          })
        : h.jsx('div', {
            className: 'x1emribx x1ok221b',
            children: h.jsx(c('CometPopover.react'), {
              children: h.jsx(k.WithoutPopover, {
                glimmerSize: b,
                hasActions: d,
                numberOfItems: e,
                title: a,
              }),
            }),
          });
    }
    k.displayName = k.name + ' [from ' + f.id + ']';
    var l = 76;
    k.InnerGlimmer = function (a) {
      var b = a.numberOfItems;
      a = a.size;
      a = a === void 0 ? 56 : a;
      return h.jsx(c('CometListCellGlimmer.react'), {
        imageSize: a,
        imageStyle: 'circle',
        numberOfItems:
          b != null
            ? b
            : Math.max(Math.ceil((window.innerHeight - 72 - 45) / l), 1),
      });
    };
    k.WithoutPopover = function (a) {
      var b = a.glimmerSize;
      b = b === void 0 ? 56 : b;
      var d = a.hasActions;
      d = d === void 0 ? !1 : d;
      var e = a.numberOfItems;
      a = a.title;
      return h.jsxs('div', {
        className: 'x1cvmir6' + (e == null ? ' x20eyyc xvv7f4i' : ''),
        children: [
          h.jsxs('div', {
            className: c('stylex')([j.heading]),
            children: [
              h.jsx(c('TetraText.react'), {
                isSemanticHeading: !0,
                type: 'headlineEmphasized1',
                children: a,
              }),
              d && h.jsx('div', { className: 'x17rw0jw xvy4d1p' }),
            ],
          }),
          h.jsx(k.InnerGlimmer, { numberOfItems: e, size: b }),
        ],
      });
    };
    g['default'] = k;
  },
  98,
);
