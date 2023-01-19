__d(
  'ConstUriUtils',
  [
    'CometLruCache',
    'FBLogger',
    'PHPQuerySerializer',
    'PHPQuerySerializerNoEncoding',
    'URIRFC3986',
    'URISchemes',
    'UriNeedRawQuerySVConfig',
    'isSameOrigin',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('CometLruCache').create(5e3),
      i = new RegExp('(^|\\.)facebook\\.com$', 'i'),
      j = new RegExp('^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)'),
      k = new RegExp(
        '[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]',
      ),
      l = c('UriNeedRawQuerySVConfig').uris.map(function (a) {
        return { domain: a, valid: r(a) };
      }),
      m = [];
    function n(a, b) {
      var d = {};
      if (a != null)
        for (
          var a = a.entries(),
            e = Array.isArray(a),
            f = 0,
            a = e
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= a.length) break;
            g = a[f++];
          } else {
            f = a.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          d[g[0]] = g[1];
        }
      else
        c('FBLogger')('ConstUriUtils').warn(
          'Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue.',
        );
      return b.serialize(d);
    }
    function o(a, b, d) {
      var e = c('PHPQuerySerializer');
      if (['http', 'https'].includes(b) && p(a)) {
        if (a.includes('doubleclick.net') && d != null && !d.startsWith('http'))
          return e;
        e = c('PHPQuerySerializerNoEncoding');
      }
      return e;
    }
    function p(a) {
      return (
        a != null &&
        l.some(function (b) {
          return b.valid && q(a, b.domain);
        })
      );
    }
    function q(a, b) {
      if (b === '' || a === '') return !1;
      if (a.endsWith(b)) {
        b = a.length - b.length - 1;
        if (b === -1 || a[b] === '.') return !0;
      }
      return !1;
    }
    function r(a) {
      return !k.test(a);
    }
    function s(a, b) {
      var c =
        b.protocol != null && b.protocol !== '' ? b.protocol : a.getProtocol();
      c = b.domain != null ? o(b.domain, c) : a.getSerializer();
      c = {
        domain: a.getDomain(),
        fragment: a.getFragment(),
        fragmentSeparator: a.hasFragmentSeparator(),
        isGeneric: a.isGeneric(),
        originalRawQuery: a.getOriginalRawQuery(),
        path: a.getPath(),
        port: a.getPort(),
        protocol: a.getProtocol(),
        queryParams: a.getQueryParams(),
        serializer: c,
        subdomain: a.getSubdomain(),
      };
      a = babelHelpers['extends']({}, c, b);
      c = b.queryParams != null && b.queryParams.size !== 0;
      return x.getUribyObject(a, c);
    }
    function t(a, b, c, d) {
      c === void 0 && (c = !1);
      var e =
          a.protocol !== '' ? a.protocol + ':' + (a.isGeneric ? '' : '//') : '',
        f = a.domain !== '' ? a.domain : '',
        g = a.port !== '' ? ':' + a.port : '',
        h =
          a.path !== ''
            ? a.path
            : (e !== '' && e !== 'mailto:') || f !== '' || g !== ''
            ? '/'
            : '';
      c = u(
        f,
        a.originalRawQuery,
        a.queryParams,
        b,
        c,
        (b = d) != null ? b : a.serializer,
      );
      d = c.length > 0 ? '?' : '';
      b = a.fragment !== '' ? '#' + a.fragment : '';
      a = a.fragment === '' && a.fragmentSeparator ? '#' : '';
      return '' + e + f + g + h + d + c + a + b;
    }
    function u(a, b, c, d, e, f) {
      e === void 0 && (e = !1);
      if (!d && (e || p(a))) {
        return (d = b) != null ? d : '';
      }
      return n(c, f);
    }
    function v(a) {
      var b = a.trim();
      b = d('URIRFC3986').parse(b) || {
        fragment: null,
        host: null,
        isGenericURI: !1,
        query: null,
        scheme: null,
        userinfo: null,
      };
      var c = b.host || '',
        e = c.split('.');
      e = e.length >= 3 ? e[0] : '';
      var f = o(c, b.scheme || '', b.query),
        g = f.deserialize(b.query || '') || {};
      g = new Map(Object.entries(g));
      g = w(
        {
          domain: c,
          fragment: b.fragment || '',
          fragmentSeparator: b.fragment === '',
          isGeneric: b.isGenericURI,
          originalRawQuery: b.query,
          path: b.path || '',
          port: b.port != null ? String(b.port) : '',
          protocol: (b.scheme || '').toLowerCase(),
          queryParams: g,
          serializer: f,
          subdomain: e,
          userInfo: (c = b == null ? void 0 : b.userinfo) != null ? c : '',
        },
        a,
      );
      return g;
    }
    function w(a, b) {
      var c = {
          components: babelHelpers['extends']({}, a),
          error: '',
          valid: !0,
        },
        e = c.components;
      if (!d('URISchemes').isAllowed(a.protocol)) {
        c.valid = !1;
        c.error =
          'The URI protocol "' + String(a.protocol) + '" is not allowed.';
        return c;
      }
      if (!r(a.domain || '')) {
        c.valid = !1;
        c.error = 'This is an unsafe domain ' + String(a.domain);
        return c;
      }
      e.port = (a.port != null && String(a.port)) || '';
      if (Boolean(a.userInfo)) {
        c.valid = !1;
        c.error =
          'Invalid URI: (userinfo is not allowed in a URI ' +
          String(a.userInfo) +
          ')';
        return c;
      }
      a = b != null && b !== '' ? b : t(e, !1);
      if (e.domain === '' && e.path.indexOf('\\') !== -1) {
        c.valid = !1;
        c.error =
          'Invalid URI: (no domain but multiple back-slashes ' + a + ')';
        return c;
      }
      if (!e.protocol && j.test(a)) {
        c.valid = !1;
        c.error = 'Invalid URI: (unsafe protocol-relative URI ' + a + ')';
        return c;
      }
      if (e.domain !== '' && e.path !== '' && !e.path.startsWith('/')) {
        c.valid = !1;
        c.error =
          'Invalid URI: (domain and pathwhere path lacks leading slash ' +
          a +
          ')';
        return c;
      }
      return c;
    }
    var x = (function () {
      function a(a) {
        (this.queryParams = new Map()),
          (this.domain = a.domain),
          (this.fragment = a.fragment),
          (this.fragmentSeparator = Boolean(a.fragmentSeparator)),
          (this.isGenericProtocol = Boolean(a.isGeneric)),
          (this.path = a.path),
          (this.originalRawQuery = a.originalRawQuery),
          (this.port = a.port),
          (this.protocol = a.protocol),
          (this.queryParams = a.queryParams),
          (this.serializer = a.serializer),
          (this.subdomain = a.subdomain);
      }
      var b = a.prototype;
      b.addQueryParam = function (a, b) {
        if (Boolean(a)) {
          var c = this.getQueryParams();
          c.set(a, b);
          return s(this, { queryParams: c });
        }
        return this;
      };
      b.addQueryParams = function (a) {
        if (a.size > 0) {
          var b = this.getQueryParams();
          a.forEach(function (a, c) {
            b.set(c, a);
          });
          return s(this, { queryParams: b });
        }
        return this;
      };
      b.addQueryParamString = function (a) {
        if (Boolean(a)) {
          a = a.startsWith('?') ? a.slice(1) : a;
          var b = this.getQueryParams();
          a.split('&').map(function (a) {
            a = a.split('=');
            var c = a[0];
            a = a[1];
            b.set(c, a);
          });
          return s(this, { queryParams: b });
        }
        return this;
      };
      b.addTrailingSlash = function () {
        var a = this.getPath();
        return a.length > 0 && a[a.length - 1] !== '/'
          ? this.setPath(a + '/')
          : this;
      };
      b.getDomain = function () {
        return this.domain;
      };
      b.getFragment = function () {
        return this.fragment;
      };
      b.getOrigin = function () {
        var a = this.getPort();
        return (
          this.getProtocol() + '://' + this.getDomain() + (a ? ':' + a : '')
        );
      };
      b.getOriginalRawQuery = function () {
        return this.originalRawQuery;
      };
      b.getPath = function () {
        return this.path;
      };
      b.getPort = function () {
        return this.port;
      };
      b.getProtocol = function () {
        return this.protocol.toLowerCase();
      };
      b.getQualifiedUri = function () {
        if (!this.getDomain()) {
          var b = String(window.location.href);
          b = b.slice(0, b.indexOf('/', b.indexOf(':') + 3));
          return a.getUri(b + this.toString());
        }
        return this;
      };
      b.getQueryParam = function (a) {
        a = this.queryParams.get(a);
        if (typeof a === 'string') return a;
        else {
          a = JSON.stringify(a);
          return a == null ? a : JSON.parse(a);
        }
      };
      b.getQueryData = function () {
        return Object.fromEntries(this.getQueryParams());
      };
      b.getQueryParams = function () {
        return new Map(
          JSON.parse(JSON.stringify(Array.from(this.queryParams))),
        );
      };
      b.getQueryString = function (a) {
        a === void 0 && (a = !1);
        return u(
          this.domain,
          this.originalRawQuery,
          this.queryParams,
          !1,
          a,
          this.serializer,
        );
      };
      b.getRegisteredDomain = function () {
        if (!this.getDomain()) return '';
        if (!this.isFacebookUri()) return null;
        var a = this.getDomain().split('.'),
          b = a.indexOf('facebook');
        b === -1 && (b = a.indexOf('workplace'));
        return a.slice(b).join('.');
      };
      b.getSerializer = function () {
        return this.serializer;
      };
      b.getSubdomain = function () {
        return this.subdomain;
      };
      b.getUnqualifiedUri = function () {
        if (this.getDomain()) {
          var b = this.toString();
          return a.getUri(b.slice(b.indexOf('/', b.indexOf(':') + 3)));
        }
        return this;
      };
      a.getUri = function (b) {
        b = b.trim();
        var d = h.get(b);
        if (d == null) {
          var e = v(b);
          if (e.valid) (d = new a(e.components)), h.set(b, d);
          else {
            c('FBLogger')('ConstUriUtils').blameToPreviousFrame().warn(e.error);
            return null;
          }
        }
        return d;
      };
      a.getUribyObject = function (b, d) {
        var e = t(b, d),
          f = h.get(e);
        if (f == null) {
          d && (b.originalRawQuery = n(b.queryParams, b.serializer));
          d = w(b);
          if (d.valid) (f = new a(d.components)), h.set(e, f);
          else {
            c('recoverableViolation')(d.error, 'ConstUri');
            return null;
          }
        }
        return f;
      };
      b.hasFragmentSeparator = function () {
        return this.fragmentSeparator;
      };
      b.isEmpty = function () {
        return !(
          this.getPath() ||
          this.getProtocol() ||
          this.getDomain() ||
          this.getPort() ||
          this.queryParams.size > 0 ||
          this.getFragment()
        );
      };
      b.isFacebookUri = function () {
        var a = this.toString();
        if (a === '') return !1;
        return !this.getDomain() && !this.getProtocol()
          ? !0
          : ['https', 'http'].indexOf(this.getProtocol()) !== -1 &&
              i.test(this.getDomain());
      };
      b.isGeneric = function () {
        return this.isGenericProtocol;
      };
      b.isSameOrigin = function (a) {
        return c('isSameOrigin')(this, a);
      };
      b.isSameOriginOrRelativePath_DEPRECATED = function (a) {
        if (this.getProtocol() && this.getProtocol() !== a.getProtocol())
          return !1;
        if (this.getDomain() && this.getDomain() !== a.getDomain()) return !1;
        if (this.getPort() && this.getPort() !== a.getPort()) return !1;
        return this.toString() === '' || a.toString() === '' ? !1 : !0;
      };
      b.isSubdomainOfDomain = function (b) {
        var c = a.getUri(b);
        return c != null && q(this.domain, b);
      };
      b.isSecure = function () {
        return this.getProtocol() === 'https';
      };
      b.removeQueryParams = function (a) {
        if (Array.isArray(a) && a.length > 0) {
          var b = this.getQueryParams();
          a.map(function (a) {
            return b['delete'](a);
          });
          return s(this, { queryParams: b });
        }
        return this;
      };
      b.removeQueryParam = function (a) {
        if (Boolean(a)) {
          var b = this.getQueryParams();
          b['delete'](a);
          return s(this, { queryParams: b });
        }
        return this;
      };
      b.replaceQueryParam = function (a, b) {
        if (Boolean(a)) {
          var c = this.getQueryParams();
          c.set(a, b);
          return s(this, { queryParams: c });
        }
        return this;
      };
      b.replaceQueryParams = function (a) {
        return s(this, { queryParams: a });
      };
      b.replaceQueryParamString = function (a) {
        if (a != null) {
          a = a.startsWith('?') ? a.slice(1) : a;
          var b = this.getQueryParams();
          a.split('&').map(function (a) {
            a = a.split('=');
            var c = a[0];
            a = a[1];
            b.set(c, a);
          });
          return s(this, { queryParams: b });
        }
        return this;
      };
      b.setDomain = function (a) {
        if (Boolean(a)) {
          var b = a.split('.');
          b = b.length >= 3 ? b[0] : '';
          return s(this, { domain: a, subdomain: b });
        }
        return this;
      };
      b.setFragment = function (a) {
        return a === '#'
          ? s(this, { fragment: '', fragmentSeparator: !0 })
          : s(this, { fragment: a, fragmentSeparator: a !== '' });
      };
      b.setPath = function (a) {
        return a != null ? s(this, { path: a }) : this;
      };
      b.setPort = function (a) {
        return Boolean(a) ? s(this, { port: a }) : this;
      };
      b.setProtocol = function (a) {
        return Boolean(a) ? s(this, { protocol: a }) : this;
      };
      b.setSecure = function (a) {
        return this.setProtocol(a ? 'https' : 'http');
      };
      b.setSubDomain = function (a) {
        if (Boolean(a)) {
          var b = this.domain.split('.');
          b.length >= 3 ? (b[0] = a) : b.unshift(a);
          return s(this, { domain: b.join('.'), subdomain: a });
        }
        return this;
      };
      b.stripTrailingSlash = function () {
        return this.setPath(this.getPath().replace(/\/$/, ''));
      };
      a.$1 = function (a) {
        a = a;
        for (var b = 0; b < m.length; b++) {
          var c = m[b];
          a = c(a);
        }
        return a;
      };
      b.$2 = function (b, c) {
        c === void 0 && (c = !1);
        return t(
          {
            domain: a.$1(this.domain),
            fragment: this.fragment,
            fragmentSeparator: this.fragmentSeparator,
            isGeneric: this.isGenericProtocol,
            originalRawQuery: this.originalRawQuery,
            path: this.path,
            port: this.port,
            protocol: this.protocol,
            queryParams: this.queryParams,
            serializer: b,
            subdomain: this.subdomain,
            userInfo: '',
          },
          !1,
          c,
        );
      };
      b.toStringRawQuery = function () {
        this.rawStringValue == null &&
          (this.rawStringValue = this.$2(c('PHPQuerySerializerNoEncoding')));
        return this.rawStringValue;
      };
      b.toString = function () {
        this.stringValue == null &&
          (this.stringValue = this.$2(this.serializer));
        return this.stringValue;
      };
      b.toStringPreserveQuery = function () {
        return this.$2(this.serializer, !0);
      };
      a.isValidUri = function (b) {
        var c = h.get(b);
        if (c != null) return !0;
        c = v(b);
        if (c.valid) {
          h.set(b, new a(c.components));
          return !0;
        }
        return !1;
      };
      return a;
    })();
    function a(a) {
      if (a instanceof x) return a;
      else return null;
    }
    function b(a) {
      m.push(a);
    }
    e = x.getUri;
    f = x.isValidUri;
    g.isSubdomainOfDomain = q;
    g.isConstUri = a;
    g.registerDomainFilter = b;
    g.getUri = e;
    g.isValidUri = f;
  },
  98,
);
