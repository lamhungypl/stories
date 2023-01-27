__d(
  'RequireDeferredReference',
  [
    'invariant',
    'CallbackDependencyManager',
    'Promise',
    'RequireDeferredFactoryEvent',
    'ifRequireable',
    'ifRequired',
    'performanceNow',
    'promiseDone',
    'requireWeak',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    a = 1;
    d = 2;
    e = 16;
    var i = a | d | e,
      j = null;
    function k() {
      j == null && (j = new (c('CallbackDependencyManager'))());
      return j;
    }
    function l(a, b) {
      return a + ':' + b;
    }
    var m = new Set();
    f = (function () {
      function a(a) {
        this.$1 = a;
      }
      var d = a.prototype;
      d.getModuleId = function () {
        var a = this.$1;
        return a;
      };
      d.getModuleIdAsRef = function () {
        return this.$1;
      };
      d.preload = function () {};
      d.getModuleIfRequired = function () {
        return c('ifRequired').call(null, this.$1, function (a) {
          return a;
        });
      };
      d.getModuleIfRequireable = function () {
        return c('ifRequireable').call(null, this.$1, function (a) {
          return a;
        });
      };
      d.$2 = function (a) {
        var b = this,
          d = c('ifRequireable')('InteractionTracingMetrics', function (a) {
            return a
              .currentInteractionLogger()
              .addRequireDeferred(b.getModuleId(), c('performanceNow')());
          }),
          e = !1,
          f = function (b, f) {
            d == null ? void 0 : d(c('performanceNow')(), f), e || a(b);
          };
        c('ifRequireable').call(
          null,
          this.$1,
          function (a) {
            return f(a, !0);
          },
          function () {
            c('requireWeak').call(null, b.$1, function (a) {
              return f(a, !1);
            });
          },
        );
        return {
          remove: function () {
            e = !0;
          },
        };
      };
      d.load = function () {
        var a = this;
        return new (b('Promise'))(function (b) {
          return a.$2(b);
        });
      };
      d.__setRef = function (a) {
        return this;
      };
      d.onReadyImmediately = function (a) {
        return this.$2(a);
      };
      d.onReady = function (a) {
        var d = function () {
            return h(
              !1,
              'Unreachable because Promise constructor is synchronous',
            );
          },
          e = new (b('Promise'))(function (a) {
            return (d = a);
          }),
          f = this.$2(d);
        c('promiseDone')(e, a);
        return f;
      };
      d.loadImmediately = function (a) {
        return this.$2(a);
      };
      a.getRDModuleName_DO_NOT_USE = function (a) {
        return 'rd:' + a;
      };
      a.unblock = function (d, e) {
        var f = k(),
          g = function () {
            var g = d[h];
            m.has(g) ||
              (m.add(g),
              f.registerCallback(
                function () {
                  define(
                    a.getRDModuleName_DO_NOT_USE(g),
                    [g],
                    function () {
                      b.call(null, g);
                    },
                    i,
                  );
                },
                Array.from(
                  c('RequireDeferredFactoryEvent').members(),
                  function (a) {
                    return l(g, a);
                  },
                ),
              ));
            f.satisfyPersistentDependency(l(g, e));
          };
        for (var h = 0; h < d.length; h++) g();
      };
      return a;
    })();
    g['default'] = f;
  },
  98,
);
