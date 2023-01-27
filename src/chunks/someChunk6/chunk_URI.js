__d(
  'URI',
  [
    'Env',
    'FBLogger',
    'PHPQuerySerializer',
    'PHPQuerySerializerNoEncoding',
    'ReloadPage',
    'URIBase',
    'UriNeedRawQuerySVChecker',
    'ifRequired',
    'isFacebookURI',
    'isSameOriginOrRelativePath_DEPRECATED',
    'memoize',
    'memoizeStringOnly',
    'unexpectedUseInComet',
    'unqualifyURI',
  ],
  function (a, b, c, d, e, f, g) {
    var h = c('memoize')(function () {
      return new j(window.location.href);
    });
    function i() {
      return c('ifRequired')('PageTransitions', function (a) {
        if (a.isInitialized()) return a;
      });
    }
    var j = (function (e) {
      babelHelpers.inheritsLoose(b, e);
      function b(a) {
        var b;
        d('UriNeedRawQuerySVChecker').isUriNeedRawQuery(a)
          ? (b = e.call(this, a, c('PHPQuerySerializerNoEncoding')) || this)
          : (b = e.call(this, a || '', d('PHPQuerySerializer')) || this);
        return babelHelpers.assertThisInitialized(b);
      }
      var f = b.prototype;
      f.setPath = function (a) {
        this.path = a;
        return e.prototype.setPath.call(this, a);
      };
      f.getPath = function () {
        var a = e.prototype.getPath.call(this);
        return a ? a.replace(/^\/+/, '/') : a;
      };
      f.setProtocol = function (a) {
        this.protocol = a;
        return e.prototype.setProtocol.call(this, a);
      };
      f.setDomain = function (a) {
        this.domain = a;
        return e.prototype.setDomain.call(this, a);
      };
      f.setPort = function (a) {
        this.port = a;
        return e.prototype.setPort.call(this, a);
      };
      f.setFragment = function (a) {
        this.fragment = a;
        return e.prototype.setFragment.call(this, a);
      };
      f.stripTrailingSlash = function () {
        this.setPath(this.getPath().replace(/\/$/, ''));
        return this;
      };
      f.addTrailingSlash = function () {
        var a = this.getPath();
        a.length > 0 && a[a.length - 1] !== '/' && this.setPath(a + '/');
        return this;
      };
      f.valueOf = function () {
        return this.toString();
      };
      f.getRegisteredDomain = function () {
        if (!this.getDomain()) return '';
        if (!c('isFacebookURI')(this)) return null;
        var a = this.getDomain().split('.'),
          b = a.indexOf('facebook');
        b === -1 && (b = a.indexOf('workplace'));
        return a.slice(b).join('.');
      };
      f.getUnqualifiedURI = function () {
        return c('unqualifyURI')(new b(this));
      };
      f.getQualifiedURI = function () {
        return new b(this).qualify();
      };
      f.isSameOrigin = function (a) {
        a = a;
        a == null ? (a = h()) : a instanceof b || (a = new b(a.toString()));
        return c('isSameOriginOrRelativePath_DEPRECATED')(this, a);
      };
      b.goURIOnNewWindow = function (a) {
        b.goURIOnWindow(a, window.open('', '_blank'), !0);
      };
      b.goURIOnWindow = function (a, c, d, e) {
        d === void 0 && (d = !1),
          e === void 0 && (e = !1),
          b.goURIOnWindowWithReference(a, c, d, e);
      };
      b.goURIOnWindowWithReference = function (e, f, g, h) {
        g === void 0 && (g = !1);
        h === void 0 && (h = !1);
        e = new b(e);
        g = g;
        var i = !f || f === window;
        if (c('Env').isCQuick && c('isFacebookURI')(e) && i) {
          i = {
            cquick: c('Env').iframeKey,
            ctarget: c('Env').iframeTarget,
            cquick_token: c('Env').iframeToken,
          };
          e.addQueryData(i);
          g = !1;
        }
        i = e.toString();
        e = f ? f : window;
        f = window.location.href === i && e === window;
        !g && a.PageTransitions
          ? a.PageTransitions.go(i, h)
          : f
          ? d('ReloadPage').now()
          : h
          ? e.location.replace(i)
          : (e.location.href = i);
        return e;
      };
      f.go = function (a, d) {
        c('unexpectedUseInComet')('uri.go'), b.go(this, a, d);
      };
      b.tryParseURI = function (a) {
        a = c('URIBase').tryParse(a, d('PHPQuerySerializer'));
        return a ? new b(a) : null;
      };
      b.isValidURI = function (a) {
        return c('URIBase').isValid(a, d('PHPQuerySerializer'));
      };
      b.getRequestURI = function (a, c) {
        a === void 0 && (a = !0);
        c === void 0 && (c = !1);
        if (a) {
          a = i();
          if (a) return a.getCurrentURI(!!c).getQualifiedURI();
        }
        return new b(window.location.href);
      };
      b.getMostRecentURI = function () {
        var a = i();
        return a
          ? a.getMostRecentURI().getQualifiedURI()
          : new b(window.location.href);
      };
      b.getNextURI = function () {
        var a = i();
        return a
          ? a.getNextURI().getQualifiedURI()
          : new b(window.location.href);
      };
      b.encodeComponent = function (a) {
        return encodeURIComponent(a).replace(/%5D/g, ']').replace(/%5B/g, '[');
      };
      b.decodeComponent = function (a) {
        return decodeURIComponent(a.replace(/\+/g, ' '));
      };
      b.normalize = function (a) {
        return a != null && typeof a === 'string'
          ? this.normalizeString(a)
          : new b(a).toString();
      };
      return b;
    })(c('URIBase'));
    j.go = function (a, b, d) {
      c('unexpectedUseInComet')('URI.go'), j.goURIOnWindow(a, window, b, d);
    };
    j.normalizeString = c('memoizeStringOnly')(function (a) {
      return new j(a).toString();
    });
    j.expression =
      /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/;
    j.arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=?(.*)/;
    g['default'] = j;
  },
  98,
);
