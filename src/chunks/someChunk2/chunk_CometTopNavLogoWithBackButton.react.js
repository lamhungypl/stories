__d(
  'CometTopNavLogoWithBackButton.react',
  [
    'fbt',
    'ix',
    'CometCircleButton.react',
    'CometLoggedInFacebookLogo.react',
    'CometTooltip.react',
    'Locale',
    'fbicon',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('Locale').isRTL(),
      l = 40,
      m = {
        backButton: {
          opacity: 'x1hc1fzr',
          position: 'x10l6tqk',
          start: 'x10ja8i0',
          transform: 'xcd74o5',
          transitionDuration: 'x1k90msu',
          transitionProperty: 'x6o7n8i',
          transitionTimingFunction: 'xbxq160',
          $$css: !0,
        },
        backButtonHidden: {
          opacity: 'xg01cxk',
          pointerEvents: 'x47corl',
          $$css: !0,
        },
        backButtonVisibleLTR: { transform: 'xtzu7as', $$css: !0 },
        backButtonVisibleRTL: { transform: 'x61iya9', $$css: !0 },
        logo: {
          opacity: 'x1hc1fzr',
          transitionDuration: 'x1k90msu',
          transitionProperty: 'x6o7n8i',
          transitionTimingFunction: 'xbxq160',
          $$css: !0,
        },
        logoHidden: { opacity: 'xg01cxk', pointerEvents: 'x47corl', $$css: !0 },
        logoWithBackButtonLTR: { transform: 'xtzu7as', $$css: !0 },
        logoWithBackButtonRTL: { transform: 'x61iya9', $$css: !0 },
      };
    function n(a) {
      a = a.children;
      return j.jsx(c('CometTooltip.react'), {
        position: 'below',
        tooltip: h._('__JHASH__mq0TtI3_EPy__JHASH__'),
        children: a,
      });
    }
    n.displayName = n.name + ' [from ' + f.id + ']';
    function o(a) {
      a = a.children;
      return a;
    }
    function a(a) {
      var b = a.logoHidden;
      b = b === void 0 ? !1 : b;
      var e = a.logoWithShadow;
      e = e === void 0 ? !1 : e;
      var f = a.onPressBackButton,
        g = a.shouldUseCloseButton;
      g = g === void 0 ? !1 : g;
      a = a.showBackButton;
      a = a === void 0 ? !1 : a;
      var p = g ? n : o;
      return j.jsxs(j.Fragment, {
        children: [
          j.jsx('div', {
            className: c('stylex')([
              m.backButton,
              a
                ? k
                  ? m.backButtonVisibleRTL
                  : m.backButtonVisibleLTR
                : m.backButtonHidden,
            ]),
            children: j.jsx(p, {
              children: j.jsx(c('CometCircleButton.react'), {
                'aria-hidden': !a,
                color: g ? 'white' : 'primary',
                disabled: !a,
                icon: g
                  ? d('fbicon')._(i('478233'), 20)
                  : k
                  ? d('fbicon')._(i('514454'), 20)
                  : d('fbicon')._(i('512647'), 20),
                label: g
                  ? h._('__JHASH__a_qj__uOTBG__JHASH__')
                  : h._('__JHASH__PS-q9pFoZzf__JHASH__'),
                onPress: f,
                size: l,
                testid: void 0,
                type: g ? 'dark-overlay' : void 0,
              }),
            }),
          }),
          j.jsx(c('CometLoggedInFacebookLogo.react'), {
            'aria-hidden': b,
            withShadow: e,
            xstyle: [
              m.logo,
              b && m.logoHidden,
              a && (k ? m.logoWithBackButtonRTL : m.logoWithBackButtonLTR),
            ],
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
