__d(
  'StyleXSheet',
  ['invariant', 'ExecutionEnvironment', 'Locale', 'gkx'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = '__fb-light-mode',
      j = '__fb-dark-mode';
    function k(a, b) {
      var c = [];
      c.push(a + ' {');
      for (a in b) {
        var d = b[a];
        c.push('  --' + a + ': ' + d + ';');
      }
      c.push('}');
      return c.join('\n');
    }
    function l() {
      var a = document.createElement('style');
      a.setAttribute('type', 'text/css');
      a.setAttribute('data-styled', 'true');
      var b = document.head || document.getElementsByTagName('head')[0];
      b || h(0, 2655);
      b.appendChild(a);
      return a;
    }
    function m() {
      return (
        window.CSS != null &&
        window.CSS.supports != null &&
        window.CSS.supports('--fake-var:0')
      );
    }
    var n = /var\(--(.*?)\)/g;
    a = (function () {
      function a(a) {
        var b;
        this.tag = null;
        this.injected = !1;
        this.ruleForPriority = new Map();
        this.rules = [];
        this.rootTheme = a.rootTheme;
        this.rootDarkTheme = a.rootDarkTheme;
        this.isSlow =
          (b = a.isSlow) != null
            ? b
            : typeof location === 'object' &&
              typeof location.search === 'string'
            ? location.search.includes('stylex-slow')
            : !1;
        this.supportsVariables = (b = a.supportsVariables) != null ? b : m();
        this.$1 = d('Locale').isRTL();
        this.externalRules = new Set();
      }
      var b = a.prototype;
      b.getVariableMatch = function () {
        return n;
      };
      b.isHeadless = function () {
        return this.tag == null || !c('ExecutionEnvironment').canUseDOM;
      };
      b.getTag = function () {
        var a = this.tag;
        a != null || h(0, 11103);
        return a;
      };
      b.getCSS = function () {
        return this.rules.join('\n');
      };
      b.getRulePosition = function (a) {
        return this.rules.indexOf(a);
      };
      b.getRuleCount = function () {
        return this.rules.length;
      };
      b.inject = function () {
        if (this.injected) return;
        this.injected = !0;
        if (!c('ExecutionEnvironment').canUseDOM) {
          this.injectTheme();
          return;
        }
        this.tag = l();
        this.injectTheme();
      };
      b.injectTheme = function () {
        if (c('gkx')('1861546')) return;
        this.rootTheme != null &&
          this.insert(k(':root, .' + i, this.rootTheme), 0);
        this.rootDarkTheme != null &&
          this.insert(k('.' + j + ':root, .' + j, this.rootDarkTheme), 0);
      };
      b.__injectCustomThemeForTesting = function (a, b) {
        b != null && this.insert(k(a, b), 0);
      };
      b['delete'] = function (a) {
        var b = this.rules.indexOf(a);
        b >= 0 || h(0, 2656, a);
        this.rules.splice(b, 1);
        if (this.isHeadless()) return;
        a = this.getTag();
        if (this.isSlow) a.removeChild(a.childNodes[b + 1]);
        else {
          a = a.sheet;
          a || h(0, 2657);
          a.deleteRule(b);
        }
      };
      b.normalizeRule = function (a) {
        var b = this.rootTheme;
        return this.supportsVariables || b == null
          ? a
          : a.replace(n, function (a, c) {
              return b[c];
            });
      };
      b.getInsertPositionForPriority = function (a) {
        var b = this.ruleForPriority.get(a);
        if (b != null) return this.rules.indexOf(b) + 1;
        b = Array.from(this.ruleForPriority.keys())
          .sort(function (a, b) {
            return b - a;
          })
          .filter(function (b) {
            return b > a ? 1 : 0;
          });
        if (b.length === 0) return this.getRuleCount();
        b = b.pop();
        return this.rules.indexOf(this.ruleForPriority.get(b));
      };
      b.insert = function (a, b, c) {
        this.injected === !1 && this.inject();
        c = this.$1 && c != null ? c : a;
        if (this.externalRules.has(c.slice(0, c.indexOf('{')).trim())) return;
        if (this.rules.includes(c)) return;
        a = this.normalizeRule(c);
        if (this.externalRules.has(a.slice(0, a.indexOf('{')).trim())) return;
        c = this.getInsertPositionForPriority(b);
        this.rules.splice(c, 0, a);
        this.ruleForPriority.set(b, a);
        if (this.isHeadless()) return;
        b = this.getTag();
        if (this.isSlow) {
          var d = document.createTextNode(a);
          b.insertBefore(d, b.childNodes[c]);
        } else {
          d = b.sheet;
          if (d != null)
            try {
              d.insertRule(a, c);
            } catch (a) {}
        }
      };
      return a;
    })();
    a.LIGHT_MODE_CLASS_NAME = i;
    a.DARK_MODE_CLASS_NAME = j;
    g['default'] = a;
  },
  98,
);
