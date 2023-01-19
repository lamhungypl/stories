__d(
  'AbstractLink.react',
  [
    'AbstractLinkLynxMode',
    'LynxGeneration',
    'NonFBLinkReferrerProtector',
    'isTruthy',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var e = b.prototype;
      e.componentDidMount = function () {
        this.props.dataLnfbMode !== null
          ? d('NonFBLinkReferrerProtector').setupDelegation()
          : this.props.isLinkshimSupported &&
            d('AbstractLinkLynxMode').setupDelegation();
      };
      e.render = function () {
        var a = this.props,
          b = a.href,
          e = a.linkRef,
          f = a.shimhash,
          g = a.nofollow,
          i = a.noopener,
          j = a.rel,
          k = a.isSafeToSkipShim,
          l = a.dataLnfbMode;
        a.isLinkshimSupported;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          'href',
          'linkRef',
          'shimhash',
          'nofollow',
          'noopener',
          'rel',
          'isSafeToSkipShim',
          'dataLnfbMode',
          'isLinkshimSupported',
        ]);
        var m = b;
        j = j;
        var n = null,
          o = null,
          p = null;
        if (f !== null) {
          m = c('LynxGeneration').getShimmedHref(b, f || '');
          b = d('AbstractLinkLynxMode').getMode(k);
          o = b[0];
          n = b[1];
        }
        g && (j = c('isTruthy')(j) ? j + ' nofollow' : 'nofollow');
        i && (j = c('isTruthy')(j) ? j + ' noopener' : 'noopener');
        c('isTruthy')(l) && (p = l);
        return h.jsx(
          'a',
          babelHelpers['extends']({}, a, {
            href: m.toString() || null,
            rel: j,
            ref: e,
            'data-sigil': n,
            'data-lynx-mode': o,
            'data-lnfb-mode': p,
          }),
        );
      };
      return b;
    })(h.Component);
    g['default'] = a;
  },
  98,
);
