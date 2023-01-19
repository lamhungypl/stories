__d(
  'cometWrapNetworkObservable',
  [
    'CometRelayErrorHandling',
    'cometWrapWithRetryOnError',
    'cr:1196',
    'cr:641',
    'gkx',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a() {
      if (!b('cr:641'))
        return function (a) {
          return a;
        };
      else
        return function (a) {
          return d('relay-runtime').Observable.create(function (e) {
            return h(a).subscribe({
              complete: e.complete,
              error: function (a) {
                var f,
                  g,
                  h,
                  i = e.error(a);
                if (d('CometRelayErrorHandling').shouldSkipErrorSideEffects(a))
                  return i;
                a = a == null ? void 0 : a.source;
                f =
                  (f =
                    (f = a == null ? void 0 : a.errorCode) != null
                      ? f
                      : a == null
                      ? void 0
                      : a.code) != null
                    ? f
                    : a == null
                    ? void 0
                    : a.error;
                g =
                  (g = a == null ? void 0 : a.errorDescription) != null
                    ? g
                    : a == null
                    ? void 0
                    : a.description;
                h =
                  (h = a == null ? void 0 : a.errorSummary) != null
                    ? h
                    : a == null
                    ? void 0
                    : a.summary;
                var j = null;
                if (c('gkx')('2581')) {
                  var k;
                  j =
                    (k = a == null ? void 0 : a.debug_info) != null
                      ? k
                      : a == null
                      ? void 0
                      : a.message;
                  g === j && (j = null);
                }
                f &&
                  h &&
                  g &&
                  b('cr:641')(
                    f,
                    h,
                    g,
                    a == null ? void 0 : a.redirectTo,
                    !0,
                    j,
                  );
                return i;
              },
              next: function (a) {
                if (Array.isArray(a))
                  for (
                    var b = a,
                      c = Array.isArray(b),
                      d = 0,
                      b = c
                        ? b
                        : b[
                            typeof Symbol === 'function'
                              ? Symbol.iterator
                              : '@@iterator'
                          ]();
                    ;

                  ) {
                    var f;
                    if (c) {
                      if (d >= b.length) break;
                      f = b[d++];
                    } else {
                      d = b.next();
                      if (d.done) break;
                      f = d.value;
                    }
                    f = f;
                    f = i(f);
                    if (f != null) {
                      e.error(f);
                      return;
                    }
                  }
                else {
                  f = i(a);
                  if (f != null) {
                    e.error(f);
                    return;
                  }
                }
                e.next(a);
              },
            });
          });
        };
    }
    function h(a) {
      return !b('cr:1196')
        ? a
        : c('cometWrapWithRetryOnError')(a, b('cr:1196'));
    }
    function i(a) {
      var b = a.data;
      a = Object.prototype.hasOwnProperty.call(a, 'errors') ? a.errors : void 0;
      if (Array.isArray(a))
        for (
          var a = a,
            c = Array.isArray(a),
            e = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var f;
          if (c) {
            if (e >= a.length) break;
            f = a[e++];
          } else {
            e = a.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          if (
            f != null &&
            typeof f === 'object' &&
            (f.severity === 'CRITICAL' || f.severity === 'ERROR') &&
            Array.isArray(f.path) &&
            f.path.length === 3 &&
            f.path[0] === 'viewer' &&
            f.path[1] === 'news_feed' &&
            f.path[2] === 'edges'
          ) {
            f =
              b == null
                ? void 0
                : (f = b.viewer) == null
                ? void 0
                : f.news_feed;
            var g = f == null ? void 0 : f.edges;
            if (
              f != null &&
              (g == null || (Array.isArray(g) && g.length === 0))
            )
              return d('relay-runtime').RelayError.create(
                'CometNewsFeed',
                'Error evaluating Comet News Feed, edges cannot be resolved.',
              );
          }
        }
    }
    g['default'] = a;
  },
  98,
);
