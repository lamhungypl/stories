__d(
  'URIAbstractBase',
  [
    'invariant',
    'FBLogger',
    'PHPStrictQuerySerializer',
    'URIRFC3986',
    'URISchemes',
    'isSameOrigin',
    'setHostSubdomain',
  ],
  function (a, b, c, d, e, f, g) {
    var h,
      i,
      j = new RegExp(
        '[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]',
      ),
      k = new RegExp('^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)'),
      l = [];
    a = (function () {
      'use strict';
      a.parse = function (c, d, e, f) {
        if (!d) return !0;
        if (d instanceof a) {
          c.setProtocol(d.getProtocol());
          c.setDomain(d.getDomain());
          c.setPort(d.getPort());
          c.setPath(d.getPath());
          c.setQueryData(f.deserialize(f.serialize(d.getQueryData())));
          c.setFragment(d.getFragment());
          c.setIsGeneric(d.getIsGeneric());
          c.setForceFragmentSeparator(d.getForceFragmentSeparator());
          c.setOriginalRawQuery(d.getOriginalRawQuery());
          c.setQueryParamModified(!1);
          return !0;
        }
        d = d.toString().trim();
        var g = (h || (h = b('URIRFC3986'))).parse(d) || {
          fragment: null,
          scheme: null,
          query: null,
        };
        if (!e && !(i || (i = b('URISchemes'))).isAllowed(g.scheme)) return !1;
        c.setProtocol(g.scheme || '');
        if (!e && j.test(g.host || '')) return !1;
        c.setDomain(g.host || '');
        c.setPort(g.port || '');
        c.setPath(g.path || '');
        if (e) c.setQueryData(f.deserialize(g.query || '') || {});
        else
          try {
            c.setQueryData(f.deserialize(g.query || '') || {});
          } catch (a) {
            return !1;
          }
        c.setFragment(g.fragment || '');
        g.fragment === '' && c.setForceFragmentSeparator(!0);
        c.setIsGeneric(g.isGenericURI || !1);
        c.setOriginalRawQuery(g.query);
        c.setQueryParamModified(!1);
        if (g.userinfo !== null) {
          if (e)
            throw new Error(
              'URI.parse: invalid URI (userinfo is not allowed in a URI): ' + d,
            );
          return !1;
        }
        if (!c.getDomain() && c.getPath().indexOf('\\') !== -1) {
          if (e)
            throw new Error(
              'URI.parse: invalid URI (no domain but multiple back-slashes): ' +
                d,
            );
          return !1;
        }
        if (!c.getProtocol() && k.test(d)) {
          if (e)
            throw new Error(
              'URI.parse: invalid URI (unsafe protocol-relative URLs): ' +
                d +
                "'",
            );
          return !1;
        }
        if (c.getDomain() && c.getPath() && !c.getPath().startsWith('/')) {
          if (e)
            throw new Error(
              'URI.parse: invalid URI (domain and path where path lacks leading slash): ' +
                d,
            );
          return !1;
        }
        c.getProtocol() &&
          !c.getIsGeneric() &&
          !c.getDomain() &&
          c.getPath() !== '' &&
          b('FBLogger')('uri').warn(
            'URI.parse: invalid URI (protocol "' +
              c.getProtocol() +
              '" with no domain)',
          );
        return !0;
      };
      a.tryParse = function (b, c) {
        var d = new a(null, c);
        return a.parse(d, b, !1, c) ? d : null;
      };
      a.isValid = function (b, c) {
        return !!a.tryParse(b, c);
      };
      function a(b, c) {
        c || g(0, 2966),
          (this.$9 = c),
          (this.$7 = ''),
          (this.$1 = ''),
          (this.$6 = ''),
          (this.$5 = ''),
          (this.$3 = ''),
          (this.$4 = !1),
          (this.$8 = {}),
          (this.$2 = !1),
          a.parse(this, b, !0, c),
          (this.$11 = !1);
      }
      var c = a.prototype;
      c.setProtocol = function (a) {
        (i || (i = b('URISchemes'))).isAllowed(a) || g(0, 11793, a);
        this.$7 = a;
        return this;
      };
      c.getProtocol = function () {
        return (this.$7 || '').toLowerCase();
      };
      c.setSecure = function (a) {
        return this.setProtocol(a ? 'https' : 'http');
      };
      c.isSecure = function () {
        return this.getProtocol() === 'https';
      };
      c.setDomain = function (a) {
        if (j.test(a))
          throw new Error(
            'URI.setDomain: unsafe domain specified: ' +
              a +
              ' for url ' +
              this.toString(),
          );
        this.$1 = a;
        return this;
      };
      c.getDomain = function () {
        return this.$1;
      };
      c.setPort = function (a) {
        this.$6 = a;
        return this;
      };
      c.getPort = function () {
        return this.$6;
      };
      c.setPath = function (a) {
        this.$5 = a;
        return this;
      };
      c.getPath = function () {
        return this.$5;
      };
      c.addQueryData = function (a, b) {
        Object.prototype.toString.call(a) === '[object Object]'
          ? Object.assign(this.$8, a)
          : (this.$8[a] = b);
        this.$11 = !0;
        return this;
      };
      c.setQueryData = function (a) {
        this.$8 = a;
        this.$11 = !0;
        return this;
      };
      c.getQueryData = function () {
        return this.$8;
      };
      c.setQueryString = function (a) {
        return this.setQueryData(this.$9.deserialize(a));
      };
      c.getQueryString = function (a, b, c) {
        a === void 0 && (a = !1);
        b === void 0 &&
          (b = function () {
            return !1;
          });
        c === void 0 && (c = null);
        return this.$12(!1, a, b, c);
      };
      c.$12 = function (a, b, c, d) {
        a === void 0 && (a = !1);
        b === void 0 && (b = !1);
        c === void 0 &&
          (c = function () {
            return !1;
          });
        d === void 0 && (d = null);
        if (!this.$11 && (b || c(this.getDomain()))) {
          return (b = this.$10) != null ? b : '';
        }
        return (a && d ? d : this.$9).serialize(this.getQueryData());
      };
      c.removeQueryData = function (a) {
        Array.isArray(a) || (a = [a]);
        for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
        this.$11 = !0;
        return this;
      };
      c.setFragment = function (a) {
        this.$3 = a;
        this.setForceFragmentSeparator(!1);
        return this;
      };
      c.getFragment = function () {
        return this.$3;
      };
      c.setForceFragmentSeparator = function (a) {
        this.$2 = a;
        return this;
      };
      c.getForceFragmentSeparator = function () {
        return this.$2;
      };
      c.setIsGeneric = function (a) {
        this.$4 = a;
        return this;
      };
      c.getIsGeneric = function () {
        return this.$4;
      };
      c.getOriginalRawQuery = function () {
        return this.$10;
      };
      c.setOriginalRawQuery = function (a) {
        this.$10 = a;
        return this;
      };
      c.setQueryParamModified = function (a) {
        this.$11 = a;
        return this;
      };
      c.isEmpty = function () {
        return !(
          this.getPath() ||
          this.getProtocol() ||
          this.getDomain() ||
          this.getPort() ||
          Object.keys(this.getQueryData()).length > 0 ||
          this.getFragment()
        );
      };
      c.toString = function (a, b) {
        a === void 0 &&
          (a = function () {
            return !1;
          });
        b === void 0 && (b = null);
        return this.$13(!1, !1, a, b);
      };
      c.toStringRawQuery = function (a, b) {
        a === void 0 &&
          (a = function () {
            return !1;
          });
        b === void 0 && (b = null);
        return this.$13(!0, !1, a, b);
      };
      c.toStringPreserveQuery = function (a, b) {
        a === void 0 &&
          (a = function () {
            return !1;
          });
        b === void 0 && (b = null);
        return this.$13(!1, !0, a, b);
      };
      c.toStringStrictQueryEncoding = function (a) {
        a === void 0 &&
          (a = function () {
            return !1;
          });
        return this.$13(!0, !1, a, b('PHPStrictQuerySerializer'));
      };
      c.$13 = function (a, b, c, d) {
        a === void 0 && (a = !1);
        b === void 0 && (b = !1);
        c === void 0 &&
          (c = function () {
            return !1;
          });
        d === void 0 && (d = null);
        var e = this;
        for (var f = 0; f < l.length; f++) e = l[f](e);
        return e.$14(a, b, c, d);
      };
      c.$14 = function (a, b, c, d) {
        a === void 0 && (a = !1);
        b === void 0 && (b = !1);
        c === void 0 &&
          (c = function () {
            return !1;
          });
        d === void 0 && (d = null);
        var e = '',
          f = this.getProtocol();
        f && (e += f + ':' + (this.getIsGeneric() ? '' : '//'));
        f = this.getDomain();
        f && (e += f);
        f = this.getPort();
        f && (e += ':' + f);
        f = this.getPath();
        f ? (e += f) : e && (e += '/');
        f = this.$12(a, b, c, d);
        f && (e += '?' + f);
        a = this.getFragment();
        a ? (e += '#' + a) : this.getForceFragmentSeparator() && (e += '#');
        return e;
      };
      a.registerFilter = function (a) {
        l.push(a);
      };
      c.getOrigin = function () {
        var a = this.getPort();
        return (
          this.getProtocol() + '://' + this.getDomain() + (a ? ':' + a : '')
        );
      };
      c.isSameOrigin = function (a) {
        return b('isSameOrigin')(this, a);
      };
      c.getQualifiedURIBase = function () {
        return new a(this, this.$9).qualify();
      };
      c.qualify = function () {
        if (!this.getDomain()) {
          var b = new a(window.location.href, this.$9);
          this.setProtocol(b.getProtocol())
            .setDomain(b.getDomain())
            .setPort(b.getPort());
        }
        return this;
      };
      c.setSubdomain = function (a) {
        var c = this.qualify();
        c = c.getDomain();
        return this.setDomain(b('setHostSubdomain')(c, a));
      };
      c.getSubdomain = function () {
        if (!this.getDomain()) return '';
        var a = this.getDomain().split('.');
        if (a.length <= 2) return '';
        else return a[0];
      };
      c.isSubdomainOfDomain = function (b) {
        var c = this.getDomain();
        return a.isDomainSubdomainOfDomain(c, b, this.$9);
      };
      a.isDomainSubdomainOfDomain = function (b, c, d) {
        if (c === '' || b === '') return !1;
        if (b.endsWith(c)) {
          var e = b.length,
            f = c.length,
            g = e - f - 1;
          if (e === f || b[g] === '.') {
            e = new a(null, d);
            e.setDomain(c);
            return a.isValid(e, d);
          }
        }
        return !1;
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
