__d(
  'URIBase',
  [
    'PHPQuerySerializerNoEncoding',
    'URIAbstractBase',
    'UriNeedRawQuerySVChecker',
    'err',
  ],
  function (a, b, c, d, e, f) {
    function g(a, c, d, e) {
      try {
        a = b('URIAbstractBase').parse(a, c, d, e);
        return a;
      } catch (a) {
        throw new Error(b('err')(a.message));
      }
    }
    a = (function (a) {
      'use strict';
      babelHelpers.inheritsLoose(c, a);
      c.tryParse = function (a, b) {
        var d = new c(null, b);
        return g(d, a, !1, b) ? d : null;
      };
      c.isValid = function (a, b) {
        return !!c.tryParse(a, b);
      };
      function c(b, c) {
        var d;
        d = a.call(this, b, c) || this;
        d.$URIBase1 = c;
        g(babelHelpers.assertThisInitialized(d), b, !0, c);
        return d;
      }
      var d = c.prototype;
      d.setDomain = function (c) {
        try {
          a.prototype.setDomain.call(this, c);
        } catch (a) {
          throw new Error(b('err')(a.message));
        }
        return this;
      };
      d.getQualifiedURIBase = function () {
        return new c(this, this.$URIBase1).qualify();
      };
      d.qualify = function () {
        if (!this.getDomain()) {
          var a = new c(window.location.href, this.$URIBase1);
          this.setProtocol(a.getProtocol())
            .setDomain(a.getDomain())
            .setPort(a.getPort());
        }
        return this;
      };
      d.isSubdomainOfDomain = function (a) {
        var b = this.getDomain();
        return c.isDomainSubdomainOfDomain(b, a, this.$URIBase1);
      };
      c.isDomainSubdomainOfDomain = function (a, b, d) {
        if (b === '' || a === '') return !1;
        if (a.endsWith(b)) {
          var e = a.length,
            f = b.length,
            g = e - f - 1;
          if (e === f || a[g] === '.') {
            e = new c(null, d);
            e.setDomain(b);
            return c.isValid(e, d);
          }
        }
        return !1;
      };
      d.toString = function () {
        return a.prototype.toString.call(
          this,
          b('UriNeedRawQuerySVChecker').isDomainNeedRawQuery,
          b('PHPQuerySerializerNoEncoding'),
        );
      };
      d.toStringRawQuery = function () {
        return a.prototype.toStringRawQuery.call(
          this,
          b('UriNeedRawQuerySVChecker').isDomainNeedRawQuery,
          b('PHPQuerySerializerNoEncoding'),
        );
      };
      d.toStringPreserveQuery = function () {
        return a.prototype.toStringPreserveQuery.call(
          this,
          b('UriNeedRawQuerySVChecker').isDomainNeedRawQuery,
          b('PHPQuerySerializerNoEncoding'),
        );
      };
      d.toStringStrictQueryEncoding = function () {
        return a.prototype.toStringStrictQueryEncoding.call(
          this,
          b('UriNeedRawQuerySVChecker').isDomainNeedRawQuery,
        );
      };
      d.getQueryString = function (c) {
        c === void 0 && (c = !1);
        return a.prototype.getQueryString.call(
          this,
          c,
          b('UriNeedRawQuerySVChecker').isDomainNeedRawQuery,
          b('PHPQuerySerializerNoEncoding'),
        );
      };
      return c;
    })(b('URIAbstractBase'));
    e.exports = a;
  },
  null,
);
