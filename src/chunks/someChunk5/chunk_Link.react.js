__d(
  'Link.react',
  [
    'AbstractLink.react',
    'ClickIDParameterUtils',
    'LinkshimHandlerConfig',
    'Random',
    'URI',
    'isLinkshimURI',
    'isTrustedDestination',
    'killswitch',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function i(a) {
      return a.getDomain().endsWith('.onion');
    }
    var j = /^(#|\/\w)/;
    function k(a) {
      if (j.test(a.toString())) return !1;
      var b = a.getProtocol();
      return b !== 'http' && b !== 'https' ? !1 : !c('isTrustedDestination')(a);
    }
    function l(a) {
      var b = '#',
        d = null;
      a instanceof c('URI')
        ? (b = a.toString())
        : typeof a === 'string' && a !== '' && a !== '#'
        ? (b = a)
        : typeof a === 'object' && a !== null
        ? ((b = a.url.toString()), (d = a.shimhash ? a.shimhash.toString() : d))
        : ((b = '#'), (d = null));
      return c('URI').isValidURI(b) ? [new (c('URI'))(b), d] : [null, d];
    }
    var m = new RegExp('^(l|lm|h)\\..*$', 'i');
    function n(a) {
      if (c('killswitch')('LINK_UPGRADE_UNSHIMMED_JS')) return null;
      if (a.getProtocol() !== 'http') return null;
      if (!c('isTrustedDestination')(a)) return null;
      return m.test(a.getDomain()) ? null : a.setProtocol('https');
    }
    function o(a) {
      return a.getProtocol() === '' ||
        (a.getDomain() === '' && a.getPort() === '')
        ? !1
        : !0;
    }
    function p(a) {
      if (!o(a)) return !1;
      var b = c('LinkshimHandlerConfig').current_domain;
      if (b === '') {
        b = '.' + b;
        return a.getDomain().endsWith(b);
      }
      return !0;
    }
    function q(a, b) {
      var d = null,
        e = !1;
      a = a !== null && a instanceof c('URI') ? a : new (c('URI'))('#');
      var f = p(a),
        g = f === !0;
      b = b || (f === !0 ? '_blank' : null);
      var h = c('LinkshimHandlerConfig').use_rel_no_opener && b === '_blank';
      return [a, g, h, b, d, e, f];
    }
    function r(a, b, e, f) {
      if (a !== null && a instanceof c('URI')) {
        if (
          !c('killswitch')('LINK_PARSES_SHIMHASH_FROM_LINKSHIM') &&
          c('isLinkshimURI')(a)
        ) {
          var g =
              a.getQueryData()[c('LinkshimHandlerConfig').linkshim_url_param],
            h = a.getQueryData()[c('LinkshimHandlerConfig').linkshim_enc_param];
          c('URI').isValidURI(g) &&
            ((a = new (c('URI'))(g)), b == null && (b = h));
        }
        g = c('LinkshimHandlerConfig').click_ids;
        if (
          !c('killswitch')('LINKSHIM_ADD_CLICK_ID_PARAM') &&
          g != null &&
          g.length > 0
        ) {
          h = Math.floor(c('Random').random() * g.length);
          g = g[h];
          a = d('ClickIDParameterUtils').appendClickIDQueryParam(a, g);
        }
      } else a = new (c('URI'))('#');
      b == null &&
        k(a) &&
        (b = c('LinkshimHandlerConfig').link_react_default_hash);
      h = n(a);
      h != null && (a = h);
      g = b != null;
      h = e || (b !== null ? '_blank' : null);
      e = !!f;
      c('LinkshimHandlerConfig').onion_always_shim && i(a) && (e = !1);
      f =
        c('LinkshimHandlerConfig').use_rel_no_opener &&
        b !== null &&
        h === '_blank';
      var j = p(a);
      return [a, g, f, h, b, e, j];
    }
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b() {
        return a.apply(this, arguments) || this;
      }
      var d = b.prototype;
      d.render = function () {
        var a = this.props;
        a.allowunsafehref;
        var b = a.s,
          d = a.href,
          e = a.linkRef,
          f = a.target;
        a = babelHelpers.objectWithoutPropertiesLoose(a, [
          'allowunsafehref',
          's',
          'href',
          'linkRef',
          'target',
        ]);
        d = l(d);
        var g = d[0];
        d = d[1];
        d = c('LinkshimHandlerConfig').is_linkshim_supported
          ? r(g, d, f, b)
          : q(g, f);
        b = d[0];
        g = d[1];
        f = d[2];
        var i = d[3],
          j = d[4],
          k = d[5];
        d = d[6];
        var m = null;
        !c('LinkshimHandlerConfig').is_linkshim_supported &&
          d &&
          (m = c('LinkshimHandlerConfig').non_linkshim_lnfb_mode);
        return h.jsx(
          c('AbstractLink.react'),
          babelHelpers['extends']({}, a, {
            href: b,
            linkRef: e,
            nofollow: g,
            noopener: f,
            shimhash: j,
            target: i,
            isSafeToSkipShim: k,
            dataLnfbMode: m,
            isLinkshimSupported: c('LinkshimHandlerConfig')
              .is_linkshim_supported,
          }),
        );
      };
      return b;
    })(h.Component);
    g['default'] = a;
  },
  98,
);
