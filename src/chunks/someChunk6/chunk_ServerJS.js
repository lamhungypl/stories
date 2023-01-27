__d(
  'ServerJS',
  [
    'ContextualComponent',
    'ErrorGuard',
    'ServerJSDefine',
    '__debug',
    'err',
    'ge',
    'replaceTransportMarkers',
  ],
  function (a, b, c, d, e, f) {
    var g,
      h = 1,
      i = 2,
      j = 16,
      k = 0;
    a = (function () {
      'use strict';
      function a() {
        (this.$2 = {}), (this.$1 = null), (this.$4 = {}), (this.$3 = void 0);
      }
      var c = a.prototype;
      c.handle = function (a, b) {
        return this.$5(a, b, m);
      };
      c.handleWithCustomApplyEach = function (a, b, c) {
        this.$5(b, c, a);
      };
      c.$5 = function (a, c, d) {
        this.$3 = c;
        if (a.__guard != null)
          throw b('err')(
            'ServerJS.handle called on data that has already been handled',
          );
        a.__guard = !0;
        d(a.define || [], this.$6, this);
        d(a.markup || [], this.$7, this);
        d(a.elements || [], this.$8, this);
        this.$9(a.contexts || []);
        d(a.instances || [], this.$10, this);
        var e = d(a.pre_display_requires || [], this.$11, this);
        e = e.concat(d(a.require || [], this.$11, this));
        return {
          cancel: function () {
            e.forEach(function (a) {
              a && a.cancel();
            });
          },
        };
      };
      c.handlePartial = function (a, b) {
        var c = this;
        (a.instances || []).forEach(function (a) {
          p(c.$2, a);
        });
        (a.markup || []).forEach(function (a) {
          o(c.$2, a);
        });
        (a.elements || []).forEach(function (a) {
          o(c.$2, a);
        });
        return this.handle(a, b);
      };
      c.setRelativeTo = function (a) {
        this.$1 = a;
        return this;
      };
      c.cleanup = function (a) {
        var c = Object.keys(this.$2);
        a
          ? d.call(
              null,
              c,
              a.guard(function () {}, 'SeverJS Cleanup requireLazy', {
                propagationType: a.PropagationType.ORPHAN,
              }),
            )
          : d.call(null, c, function () {});
        this.$2 = {};
        function f(c) {
          var d = this.$4[c],
            a = d[0],
            f = d[1];
          d = d[2];
          delete this.$4[c];
          f = f
            ? 'JS::call("' + a + '", "' + f + '", ...)'
            : 'JS::requireModule("' + a + '")';
          a = b('__debug').debugUnresolvedDependencies([a, c]);
          throw l(
            b('err')(
              '%s did not fire because it has missing dependencies.\n%s',
              f,
              a,
            ),
            d,
          );
        }
        for (a in this.$4)
          (g || (g = b('ErrorGuard'))).applyWithGuard(f, this, [a], {
            name: 'ServerJS:cleanup id: ' + a,
            project: 'ServerJSCleanup',
          });
      };
      c.$6 = function (a, c, d, e) {
        return (g || (g = b('ErrorGuard'))).applyWithGuard(
          b('ServerJSDefine').handleDefine,
          b('ServerJSDefine'),
          [a, c, d, e, this.$1],
          { name: 'JS::define' },
        );
      };
      c.$11 = function (a, c, d, e) {
        return (g || (g = b('ErrorGuard'))).applyWithGuard(
          this.$12,
          this,
          [a, c, d, e],
          { name: c != null ? 'JS::call' : 'JS::requireModule' },
        );
      };
      c.$12 = function (a, c, d, e) {
        var f = this;
        a = b('ServerJSDefine').getModuleNameAndHash(a);
        var m = a.name,
          n = a.hash,
          o;
        typeof c === 'object' ? (a = c) : ((a = d), (o = c));
        d = [m].concat(a || []);
        var p;
        o != null
          ? (p = '__call__' + m + '.' + o)
          : e != null
          ? (p = '__call__' + m)
          : (p = '__requireModule__' + m);
        p += '__' + k++;
        this.$4[p] = [m, o, n];
        var q = this.$3 && this.$3.bigPipeContext,
          r = (g || (g = b('ErrorGuard'))).guard(
            function (a) {
              a = b.call(null, m);
              delete f.$4[p];
              e &&
                b('replaceTransportMarkers')(
                  { relativeTo: f.$1, bigPipeContext: q },
                  e,
                );
              if (o != null) {
                if (!a[o])
                  throw l(b('err')('Module %s has no method "%s"', m, o), n);
              } else if (e != null && typeof a !== 'function')
                throw l(
                  b('err')(
                    'Module %s is not a function but was called with args',
                    m,
                  ),
                  n,
                );
              var c =
                o != null
                  ? a[o]
                  : e != null && typeof a === 'function'
                  ? a
                  : null;
              c != null &&
                (c.apply(a, e || []),
                (r.__SMmeta = c.__SMmeta || {}),
                (r.__SMmeta.module = r.__SMmeta.module || m),
                (r.__SMmeta.name = r.__SMmeta.name || o));
            },
            {
              name:
                o != null
                  ? "JS::call('" + m + "', '" + o + "', ...)"
                  : e != null
                  ? "JS::call('" + m + "', ...)"
                  : "JS::requireModule('" + m + "')",
            },
          );
        c = define(p, d, r, h | j | i, this, 1, this.$3);
        return c;
      };
      c.$10 = function (a, c, d, e) {
        (g || (g = b('ErrorGuard'))).applyWithGuard(
          this.$13,
          this,
          [a, c, d, e],
          { name: 'JS::instance' },
        );
      };
      c.$13 = function (a, c, d, e) {
        var f = this,
          g = null;
        a = b('ServerJSDefine').getModuleNameAndHash(a);
        var h = a.name;
        a = a.hash;
        if (c) {
          var k = this.$3 && this.$3.bigPipeContext;
          g = function () {
            var a = b.call(null, c[0]);
            b('replaceTransportMarkers')(
              { relativeTo: f.$1, bigPipeContext: k },
              d,
            );
            var e = Object.create(a.prototype);
            a.apply(e, d);
            return e;
          };
        }
        define(h, c, g, i | j, null, e);
      };
      c.$7 = function (a, c, d) {
        (g || (g = b('ErrorGuard'))).applyWithGuard(this.$14, this, [a, c, d], {
          name: 'JS::markup',
        });
      };
      c.$14 = function (a, c, d) {
        a = b('ServerJSDefine').getModuleNameAndHash(a);
        var e = a.name,
          f = a.hash;
        define(
          e,
          ['HTML'],
          function (a) {
            try {
              return a.replaceJSONWrapper(c).getRootNode();
            } catch (a) {
              throw l(a, f);
            }
          },
          j,
          null,
          d,
        );
      };
      c.$8 = function (a, c, d, e) {
        (g || (g = b('ErrorGuard'))).applyWithGuard(
          this.$15,
          this,
          [a, c, d, e],
          { name: 'JS::element' },
        );
      };
      c.$15 = function (a, c, d, e) {
        a = b('ServerJSDefine').getModuleNameAndHash(a);
        var f = a.name,
          g = a.hash;
        if (c === null && d != null) {
          define(f, null, null, j, null, d);
          return;
        }
        a = [];
        var i = j;
        d = d || 0;
        e != null && (a.push(e), (i |= h), d++);
        define(
          f,
          a,
          function (a) {
            a = b('ge')(c, a);
            if (!a) {
              var d = '';
              throw l(b('err')('Could not find element "%s"%s', c, d), g);
            }
            return a;
          },
          i,
          null,
          d,
        );
      };
      c.$9 = function (a) {
        (g || (g = b('ErrorGuard'))).applyWithGuard(this.$16, this, [a], {
          name: 'ContextualComponents',
        });
      };
      c.$16 = function (a) {
        var c = this,
          d = this.$3 && this.$3.bigPipeContext;
        a.map(function (a) {
          b('replaceTransportMarkers')(
            { relativeTo: c.$1, bigPipeContext: d },
            a,
          );
          var e = a[0];
          return [a, n(e)];
        })
          .sort(function (a, b) {
            return a[1] - b[1];
          })
          .forEach(function (a) {
            a = a[0];
            var c = a[0];
            a = a[1];
            b('ContextualComponent').register({ element: c, isRoot: a });
          });
      };
      return a;
    })();
    function l(a, b) {
      a.serverHash = b;
      return a;
    }
    function m(a, b, c) {
      return a.map(function (a) {
        return b.apply(c, a);
      });
    }
    function n(a) {
      var b = 0;
      a = a;
      while (a) (a = a.parentElement), b++;
      return b;
    }
    function o(c, a) {
      var d = b('ServerJSDefine').getModuleNameAndHash(a[0]);
      d = d.name;
      d in c || (a[2] = (a[2] || 0) + 1);
      c[d] = !0;
    }
    function p(c, a) {
      var d = b('ServerJSDefine').getModuleNameAndHash(a[0]);
      d = d.name;
      d in c || (a[3] = (a[3] || 0) + 1);
      c[d] = !0;
    }
    e.exports = a;
  },
  null,
);
