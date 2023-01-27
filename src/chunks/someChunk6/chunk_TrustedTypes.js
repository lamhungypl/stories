__d(
  'TrustedTypes',
  ['Env', 'TrustedTypesUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      return (
        d('TrustedTypesUtils').isBrowser &&
        typeof window.trustedTypes !== 'undefined'
      );
    }
    var h = a() ? window.trustedTypes : null,
      i = new Map(),
      j = {
        createHTML: d('TrustedTypesUtils').noop,
        createScriptURL: d('TrustedTypesUtils').noop,
        createScript: d('TrustedTypesUtils').noop,
      };
    function k(a, b) {
      return function (e) {
        for (
          var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), h = 1;
          h < f;
          h++
        )
          g[h - 1] = arguments[h];
        if (c('Env').isTrustedTypesReportOnly)
          try {
            return b.apply(void 0, [e].concat(g));
          } catch (b) {
            d('TrustedTypesUtils').logError(
              'Exception in policy ' +
                a +
                ': ' +
                b.message +
                ', returning original string.',
            );
            return a === 'default' ? !1 : e;
          }
        return b.apply(void 0, [e].concat(g));
      };
    }
    function l(a, b) {
      if (h == null || !c('Env').useTrustedTypes) return j;
      var e = i.get(a);
      if (e != null) {
        d('TrustedTypesUtils').logWarning(
          'A policy with name ' +
            a +
            ' already exists, returning existing policy.',
        );
        return e;
      }
      try {
        e = h.createPolicy(a, b);
        b = {
          createHTML: k(a, e.createHTML.bind(e)),
          createScriptURL: k(a, e.createScriptURL.bind(e)),
          createScript: k(a, e.createScript.bind(e)),
        };
        i.set(a, b);
        return b;
      } catch (a) {
        d('TrustedTypesUtils').logError(
          'Error creating Trusted Types policy: ' + a,
        );
      }
      return j;
    }
    function b() {
      return i.get('default');
    }
    function e(a) {
      return (a = h == null ? void 0 : h.isHTML(a)) != null ? a : !1;
    }
    function f(a) {
      return (a = h == null ? void 0 : h.isScriptURL(a)) != null ? a : !1;
    }
    function m(a) {
      return (a = h == null ? void 0 : h.isScript(a)) != null ? a : !1;
    }
    function n(a) {
      if (h == null || !c('Env').useTrustedTypes) return;
      if (!c('Env').enableDefaultTrustedTypesPolicy) return;
      l('default', {
        createHTML: a.createHTML,
        createScriptURL: a.createScriptURL,
        createScript: a.createScript,
      });
    }
    a = {
      isSupportedNatively: a,
      isHTML: e,
      isScript: m,
      isScriptURL: f,
      createPolicy: l,
      getDefaultPolicy: b,
      createDefaultPolicy: n,
    };
    g['default'] = a;
  },
  98,
);
