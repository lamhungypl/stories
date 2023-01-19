__d(
  'fbt',
  [
    'invariant',
    'FbtEnv',
    'FbtHooks',
    'FbtQTOverrides',
    'FbtResultBase',
    'FbtTable',
    'FbtTableAccessor',
    'GenderConst',
    'IntlVariationResolver',
    'intlNumUtils',
    'substituteTokens',
  ],
  function (a, b, c, d, e, f, g) {
    var h;
    b('FbtEnv').setupOnce();
    var i = b('FbtQTOverrides').overrides,
      j = b('IntlVariationResolver').getGenderVariations,
      k = b('IntlVariationResolver').getNumberVariations,
      l = Object.prototype.hasOwnProperty,
      m = !1,
      n = b('FbtTable').ARG,
      o = { number: 0, gender: 1 },
      p = { object: 0, possessive: 1, reflexive: 2, subject: 3 },
      q = {};
    function a(a, c, d) {
      if (((d == null ? void 0 : d.hk) || (d == null ? void 0 : d.ehk)) && m)
        return { text: a, fbt: !0, hashKey: d.hk };
      a = (h || (h = b('FbtHooks'))).getTranslatedInput({
        table: a,
        args: c,
        options: d,
      });
      c = a.args;
      a = a.table;
      var e = {};
      if (a.__vcg != null) {
        c = c || [];
        var f = (h || (h = b('FbtHooks'))).getViewerContext();
        f = f.GENDER;
        var k = j(f);
        c.unshift(b('FbtTableAccessor').getGenderResult(k, null, f));
      }
      c &&
        (typeof a !== 'string' && (a = b('FbtTable').access(a, c, 0)),
        (e = r(c)),
        a !== null || g(0, 479));
      var l;
      if (Array.isArray(a)) {
        k = a[0];
        l = a[1];
        f = '1_' + l;
        i[f] != null &&
          i[f] !== '' &&
          ((k = i[f]), (h || (h = b('FbtHooks'))).onTranslationOverride(l));
        (h || (h = b('FbtHooks'))).logImpression(l);
      } else if (typeof a === 'string') k = a;
      else
        throw new Error(
          'Table access did not result in string: ' +
            (a === void 0 ? 'undefined' : JSON.stringify(a)) +
            ', Type: ' +
            typeof a,
        );
      c = q[k];
      f = s(e);
      if (c && !f) return c;
      else {
        a = b('substituteTokens')(k, e);
        c = this._wrapContent(a, k, l, d == null ? void 0 : d.eo);
        f || (q[k] = c);
        return c;
      }
    }
    function r(a) {
      var b = {};
      a.forEach(function (a) {
        a = a[n.SUBSTITUTION];
        if (!a) return;
        for (var c in a)
          l.call(a, c) && (b[c] == null || g(0, 56656, c), (b[c] = a[c]));
      });
      return b;
    }
    function s(a) {
      for (a in a) return !0;
      return !1;
    }
    function c(a, c) {
      return b('FbtTableAccessor').getEnumResult(a);
    }
    function d(a) {
      return b('FbtTableAccessor').getGenderResult(j(a), null, a);
    }
    function f(a, c, d) {
      var e;
      e = ((e = {}), (e[a] = c), e);
      if (d)
        if (d[0] === o.number) {
          var f = d.length > 1 ? d[1] : c;
          typeof f === 'number' || g(0, 484);
          var h = k(f);
          typeof c === 'number' &&
            (e[a] = b('intlNumUtils').formatNumberWithThousandDelimiters(c));
          return b('FbtTableAccessor').getNumberResult(h, e, f);
        } else if (d[0] === o.gender) {
          a = d[1];
          a != null || g(0, 485);
          return b('FbtTableAccessor').getGenderResult(j(a), e, a);
        } else g(0, 486);
      else return b('FbtTableAccessor').getSubstitution(e);
    }
    function t(a, b, c) {
      return this._param(a, b, c);
    }
    function u(a, c, d) {
      var e = k(a),
        f = {};
      c &&
        (typeof d === 'number'
          ? (f[c] = b('intlNumUtils').formatNumberWithThousandDelimiters(d))
          : (f[c] =
              d || b('intlNumUtils').formatNumberWithThousandDelimiters(a)));
      return b('FbtTableAccessor').getNumberResult(e, f, a);
    }
    function v(a, c, d) {
      c !== b('GenderConst').NOT_A_PERSON || !d || !d.human || g(0, 11835);
      d = w(a, c);
      return b('FbtTableAccessor').getPronounResult(d);
    }
    function w(a, c) {
      switch (c) {
        case b('GenderConst').NOT_A_PERSON:
          return a === p.object || a === p.reflexive
            ? b('GenderConst').NOT_A_PERSON
            : b('GenderConst').UNKNOWN_PLURAL;
        case b('GenderConst').FEMALE_SINGULAR:
        case b('GenderConst').FEMALE_SINGULAR_GUESS:
          return b('GenderConst').FEMALE_SINGULAR;
        case b('GenderConst').MALE_SINGULAR:
        case b('GenderConst').MALE_SINGULAR_GUESS:
          return b('GenderConst').MALE_SINGULAR;
        case b('GenderConst').MIXED_UNKNOWN:
        case b('GenderConst').FEMALE_PLURAL:
        case b('GenderConst').MALE_PLURAL:
        case b('GenderConst').NEUTER_PLURAL:
        case b('GenderConst').UNKNOWN_PLURAL:
          return b('GenderConst').UNKNOWN_PLURAL;
        case b('GenderConst').NEUTER_SINGULAR:
        case b('GenderConst').UNKNOWN_SINGULAR:
          return a === p.reflexive
            ? b('GenderConst').NOT_A_PERSON
            : b('GenderConst').UNKNOWN_PLURAL;
      }
      return b('GenderConst').NOT_A_PERSON;
    }
    function x(a, c, d) {
      var e = j(d),
        f = {};
      f[a] = c;
      return b('FbtTableAccessor').getGenderResult(e, f, d);
    }
    function y(a, c, d, e) {
      a = typeof a === 'string' ? [a] : a;
      var f = (h || (h = b('FbtHooks'))).getErrorListener({
        translation: c,
        hash: d,
      });
      a = h.getFbtResult({
        contents: a,
        errorListener: f,
        extraOptions: e,
        patternHash: d,
        patternString: c,
      });
      return a;
    }
    function z() {
      m = !0;
    }
    function A() {
      m = !1;
    }
    function B(a) {
      return a instanceof b('FbtResultBase');
    }
    var C = function () {};
    C._ = a;
    C._enum = c;
    C._implicitParam = t;
    C._name = x;
    C._param = f;
    C._plural = u;
    C._pronoun = v;
    C._subject = d;
    C._wrapContent = y;
    C.disableJsonExportMode = A;
    C.enableJsonExportMode = z;
    C.isFbtInstance = B;
    C._getCachedFbt = void 0;
    e.exports = C;
  },
  null,
);
