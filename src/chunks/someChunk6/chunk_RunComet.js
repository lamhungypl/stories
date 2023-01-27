__d(
  'RunComet',
  [
    'ExecutionEnvironment',
    'FBLogger',
    'createCancelableFunction',
    'emptyFunction',
    'recoverableViolation',
    'setTimeout',
    'unexpectedUseInComet',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {},
      i = !1,
      j = !1,
      k = { remove: c('emptyFunction') };
    function l(a, b) {
      h.unload == null &&
        ((h.unload = []),
        (h.afterunload = []),
        c('ExecutionEnvironment').canUseEventListeners &&
          window.addEventListener('unload', function () {
            o('unload'), o('afterunload');
          })),
        h[a] == null
          ? (c('recoverableViolation')(
              'EVENT_LISTENERS.' +
                a +
                " wasn't initialized but should have been!",
              'comet_infra',
            ),
            (h[a] = [b]))
          : h[a].push(b);
    }
    function m(a) {
      a ||
        c('recoverableViolation')(
          'Undefined event listener handler is not allowed',
          'comet_infra',
        );
      return c('createCancelableFunction')(
        (a = a) != null ? a : c('emptyFunction'),
      );
    }
    function n(a) {
      return {
        remove: function () {
          a.cancel();
        },
      };
    }
    function o(a) {
      var b = h[a] || [];
      for (var d = 0; d < b.length; d++) {
        var e = b[d];
        try {
          e();
        } catch (b) {
          c('FBLogger')('comet_infra')
            .catching(b)
            .mustfix(
              "Hit an error while executing '" + a + "' event listeners.",
            );
        }
      }
      h[a] = [];
    }
    function p(a) {
      if (i) {
        a();
        return n(m(c('emptyFunction')));
      }
      a = m(a);
      h.domcontentloaded == null
        ? ((h.domcontentloaded = [a]),
          c('ExecutionEnvironment').canUseEventListeners &&
            window.addEventListener(
              'DOMContentLoaded',
              function () {
                o('domcontentloaded');
              },
              !0,
            ))
        : h.domcontentloaded.push(a);
      return n(a);
    }
    function a(a) {
      a = m(a);
      l('afterunload', a);
      return n(a);
    }
    function b(a) {
      a = m(a);
      h.load == null
        ? ((h.load = [a]),
          c('ExecutionEnvironment').canUseEventListeners &&
            window.addEventListener('load', function () {
              o('domcontentloaded'), o('load');
            }))
        : h.load.push(a);
      j &&
        c('setTimeout')(function () {
          o('domcontentloaded'), o('load');
        }, 0);
      return n(a);
    }
    function d(a) {
      a = m(a);
      l('unload', a);
      return n(a);
    }
    function e(a, b) {
      if (b !== !1) {
        b =
          'Run.onBeforeUnload was called with include_quickling_events as true or undefined, but this is not valid in Comet.';
        c('FBLogger')('comet_infra').blameToPreviousFrame().mustfix(b);
      }
      b = m(a);
      h.beforeunload == null &&
        ((h.beforeunload = []),
        c('ExecutionEnvironment').canUseEventListeners &&
          window.addEventListener('beforeunload', function (a) {
            var b = h.beforeunload || [];
            for (
              var b = b,
                d = Array.isArray(b),
                e = 0,
                b = d
                  ? b
                  : b[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var f;
              if (d) {
                if (e >= b.length) break;
                f = b[e++];
              } else {
                e = b.next();
                if (e.done) break;
                f = e.value;
              }
              f = f;
              var g = void 0;
              try {
                g = f();
              } catch (a) {
                c('FBLogger')('comet_infra')
                  .catching(a)
                  .mustfix(
                    'Hit an error while executing onBeforeUnload event listeners.',
                  );
              }
              if (g !== void 0) {
                g != null && g.body != null && (g = g.body);
                a.preventDefault();
                a.returnValue = g;
                return g;
              }
            }
          }));
      h.beforeunload.push(b);
      return n(b);
    }
    var q = e;
    function f(a) {
      c('unexpectedUseInComet')('Run.onLeave');
      return k;
    }
    function r(a, b) {
      c('unexpectedUseInComet')('Run.onCleanupOrLeave');
      return k;
    }
    function s(a) {
      c('unexpectedUseInComet')('Run.removeHook');
    }
    function t() {
      document.readyState === 'loading'
        ? p(function () {
            i = !0;
          })
        : (i = !0);
      if (document.readyState === 'complete') j = !0;
      else {
        var a = window.onload;
        window.onload = function () {
          a && a(), (j = !0);
        };
      }
    }
    c('ExecutionEnvironment').canUseDOM && t();
    t = null;
    var u = null;
    g.onLoad = p;
    g.onAfterUnload = a;
    g.onAfterLoad = b;
    g.onUnload = d;
    g.onBeforeUnload = e;
    g.maybeOnBeforeUnload = q;
    g.onLeave = f;
    g.onCleanupOrLeave = r;
    g.__removeHook = s;
    g.__domContentCallback = t;
    g.__onloadCallback = u;
  },
  98,
);
