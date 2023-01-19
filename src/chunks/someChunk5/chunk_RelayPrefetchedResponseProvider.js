__d(
  'RelayPrefetchedResponseProvider',
  ['RelayGraphQLRequestUtils', 'RelayPrefetchedStreamCache', 'RelayRuntime'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('RelayRuntime').Observable;
    a = {
      get: function (a, c, d, e, f) {
        return g.create(function (f) {
          var g = function (a) {
              if (!a) {
                f.complete();
                return;
              }
              if (a.errors)
                for (
                  var c = a.errors,
                    d = Array.isArray(c),
                    e = 0,
                    c = d
                      ? c
                      : c[
                          typeof Symbol === 'function'
                            ? Symbol.iterator
                            : '@@iterator'
                        ]();
                  ;

                ) {
                  var g;
                  if (d) {
                    if (e >= c.length) break;
                    g = c[e++];
                  } else {
                    e = c.next();
                    if (e.done) break;
                    g = e.value;
                  }
                  g = g;
                  if (g.severity === 'CRITICAL') {
                    f.error(
                      b('RelayGraphQLRequestUtils').createErrorFromPayload(g),
                    );
                    return;
                  }
                }
              f.next(a);
            },
            h = b('RelayPrefetchedStreamCache').subscribe(
              a,
              c,
              d,
              {
                complete: f.complete,
                error: function (a) {
                  return f.complete();
                },
                next: g,
                start: function () {},
              },
              e,
            );
          return function () {
            h != null && (h.unsubscribe(), (h = null)),
              b('RelayPrefetchedStreamCache').clear(a, c, d);
          };
        });
      },
    };
    e.exports = a;
  },
  null,
);
