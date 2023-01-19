__d(
  'CometLinkShimUtils',
  [
    'CometClickIDParameterUtils',
    'CometLynxGeneration',
    'ConstUriUtils',
    'LinkshimHandlerConfig',
    'Random',
    'gkx',
    'isLinkshimURI',
    'isRelativeURL',
    'isTrustedDestination',
    'killswitch',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      if (c('isRelativeURL')(a.toString())) return !1;
      var b = a.getProtocol();
      return b !== 'http' && b !== 'https' ? !1 : !c('isTrustedDestination')(a);
    }
    var i = new RegExp('^(l|lm|h)\\..*$', 'i');
    function j(a) {
      if (c('killswitch')('LINK_UPGRADE_UNSHIMMED_JS')) return null;
      if (a.getProtocol() !== 'http') return null;
      if (!c('isTrustedDestination')(a)) return null;
      return i.test(a.getDomain()) ? null : a.setProtocol('https');
    }
    function k(a) {
      a = a.getQueryParams();
      a = a.get('enc');
      return String(a) !== '1' ? !1 : c('gkx')('5945');
    }
    var l = { href: '#', shimmed: !1 };
    function a(a, b, e, f, g, i) {
      if (a == null || a === '#') return l;
      var m = d('ConstUriUtils').getUri(a);
      if (m == null) return l;
      a = k(m);
      var n = c('LinkshimHandlerConfig').link_react_default_hash;
      if (c('isLinkshimURI')(m) && !a) {
        var o = m.getQueryParams(),
          p = o.get('u');
        o = o.get('h');
        p = d('ConstUriUtils').getUri(String(p));
        p != null && ((m = p), (n = String(o)));
      }
      if (a) {
        p = m.removeQueryParam('enc');
        p != null && (m = p);
      }
      o = c('LinkshimHandlerConfig').click_ids;
      p = !1;
      if (
        !c('killswitch')('LINKSHIM_ADD_CLICK_ID_PARAM') &&
        o != null &&
        o.length > 0
      ) {
        var q = null;
        if (c('gkx')('1616314') && f != null) q = f;
        else {
          f = Math.floor(c('Random').random() * o.length);
          q = o[f];
        }
        m = d('CometClickIDParameterUtils').appendClickIDQueryParam(m, q);
        p = !0;
      }
      o = j(m);
      o != null && (m = o);
      if (h(m) && g !== !0 && !a) {
        f = d('CometLynxGeneration').getShimmedHref(
          m,
          n,
          { callbacks: b, trackingNodes: e },
          i,
        );
        q = c('LinkshimHandlerConfig').blocklisted_domains.some(function (a) {
          var b;
          return (b = m) == null ? void 0 : b.toString().includes(a);
        });
        return q
          ? {
              clickIDAppended: p,
              href: f.toString(),
              shimmed: !0,
              unshimmedHref: f.toString(),
            }
          : {
              clickIDAppended: p,
              ghlEncrypted: a,
              href: f.toString(),
              shimmed: !0,
              unshimmedHref:
                i === !0 ? m.toStringPreserveQuery() : m.toString(),
            };
      } else
        return {
          clickIDAppended: p,
          ghlEncrypted: a,
          href: i === !0 ? m.toStringPreserveQuery() : m.toString(),
          shimmed: !1,
        };
    }
    g.getLinkShimInfo = a;
    g.use_rel_no_opener = c('LinkshimHandlerConfig').use_rel_no_opener;
  },
  98,
);
