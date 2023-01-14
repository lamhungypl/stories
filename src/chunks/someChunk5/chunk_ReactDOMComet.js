__d(
  'ReactDOMComet',
  ['cr:1108857', 'cr:1294159', 'gkx', 'qex'],
  function (a, b, c, d, e, f, g) {
    f = !c('gkx')('1912204');
    function a() {}
    function d(a, d) {
      return b('cr:1294159').createRoot(
        a,
        babelHelpers['extends']({}, d, {
          unstable_concurrentUpdatesByDefault: c('qex')._('723')
            ? !1
            : (a =
                d == null ? void 0 : d.unstable_concurrentUpdatesByDefault) !=
              null
            ? a
            : !1,
        }),
      );
    }
    function e(a, d, e) {
      return b('cr:1294159').hydrateRoot(
        a,
        d,
        babelHelpers['extends'](
          {
            onRecoverableError: function (a) {
              if (a != null && typeof a.message === 'string') {
                var b = a.message;
                if (
                  b.indexOf(
                    'The server could not finish this Suspense boundary',
                  ) !== -1 ||
                  b.indexOf('Minified React error #419;') !== -1 ||
                  b.indexOf('This Suspense boundary received an update') !==
                    -1 ||
                  b.indexOf('Minified React error #421;') !== -1
                )
                  return;
              }
              typeof reportError === 'function' && reportError(a);
            },
          },
          e,
          {
            unstable_concurrentUpdatesByDefault: c('qex')._('723')
              ? !1
              : (a =
                  e == null ? void 0 : e.unstable_concurrentUpdatesByDefault) !=
                null
              ? a
              : !1,
          },
        ),
      );
    }
    a = c('gkx')('1465')
      ? b('cr:1294159').flushSync
      : b('cr:1294159').unstable_flushControlled;
    g.createPortal = b('cr:1294159').createPortal;
    g.unstable_batchedUpdates = b('cr:1294159').unstable_batchedUpdates;
    g.flushSync = b('cr:1294159').flushSync;
    g.createRoot = d;
    g.hydrateRoot = e;
    g.unstable_flushControlled = a;
    g.unstable_createEventHandle = b('cr:1294159').unstable_createEventHandle;
    g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
      b('cr:1294159').__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    g.version = b('cr:1294159').version;
  },
  98,
);
