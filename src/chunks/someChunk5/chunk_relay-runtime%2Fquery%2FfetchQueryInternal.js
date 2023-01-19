__d(
  'relay-runtime/query/fetchQueryInternal',
  [
    'invariant',
    'Promise',
    'relay-runtime/network/RelayObservable',
    'relay-runtime/util/RelayFeatureFlags',
    'relay-runtime/util/RelayReplaySubject',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    f = typeof WeakMap === 'function';
    var h = f ? new WeakMap() : new Map();
    function a(a, b) {
      return i(a, b.request.identifier, function () {
        return a.execute({ operation: b });
      });
    }
    function i(a, c, d) {
      return b('relay-runtime/network/RelayObservable').create(function (e) {
        var f = l(a),
          h = f.get(c);
        h ||
          d()
            ['finally'](function () {
              return f['delete'](c);
            })
            .subscribe({
              start: function (a) {
                (h = {
                  identifier: c,
                  subject: new (b('relay-runtime/util/RelayReplaySubject'))(),
                  subjectForInFlightStatus: new (b(
                    'relay-runtime/util/RelayReplaySubject',
                  ))(),
                  subscription: a,
                  promise: null,
                }),
                  f.set(c, h);
              },
              next: function (a) {
                var b = m(f, c);
                b.subject.next(a);
                b.subjectForInFlightStatus.next(a);
              },
              error: function (a) {
                var b = m(f, c);
                b.subject.error(a);
                b.subjectForInFlightStatus.error(a);
              },
              complete: function () {
                var a = m(f, c);
                a.subject.complete();
                a.subjectForInFlightStatus.complete();
              },
              unsubscribe: function (a) {
                a = m(f, c);
                a.subject.unsubscribe();
                a.subjectForInFlightStatus.unsubscribe();
              },
            });
        h != null || g(0, 15078);
        return j(f, h).subscribe(e);
      });
    }
    function j(a, c) {
      return b('relay-runtime/network/RelayObservable').create(function (b) {
        var d = c.subject.subscribe(b);
        return function () {
          d.unsubscribe();
          var b = a.get(c.identifier);
          if (b) {
            var e = b.subscription;
            e != null &&
              b.subject.getObserverCount() === 0 &&
              (e.unsubscribe(), a['delete'](c.identifier));
          }
        };
      });
    }
    function k(a, c, d) {
      return b('relay-runtime/network/RelayObservable').create(function (b) {
        var c = d.subjectForInFlightStatus.subscribe({
          error: b.error,
          next: function (c) {
            if (!a.isRequestActive(d.identifier)) {
              b.complete();
              return;
            }
            b.next();
          },
          complete: b.complete,
          unsubscribe: b.complete,
        });
        return function () {
          c.unsubscribe();
        };
      });
    }
    function c(a, c) {
      var d = l(a),
        e = d.get(c.identifier);
      if (!e) return null;
      if (!a.isRequestActive(e.identifier)) return null;
      if (b('relay-runtime/util/RelayFeatureFlags').USE_REACT_CACHE) {
        c = e.promise;
        if (c) return c;
      }
      c = new (b('Promise'))(function (b, c) {
        var f = !1;
        k(a, d, e).subscribe({
          complete: b,
          error: c,
          next: function (a) {
            f && b(a);
          },
        });
        f = !0;
      });
      if (b('relay-runtime/util/RelayFeatureFlags').USE_REACT_CACHE) {
        e.promise = c;
        var f = function () {
          e.promise = null;
        };
        c.then(f, f);
      }
      return c;
    }
    function d(a, b) {
      var c = l(a);
      b = c.get(b.identifier);
      if (!b) return null;
      return !a.isRequestActive(b.identifier) ? null : k(a, c, b);
    }
    function l(a) {
      var b = h.get(a);
      if (b != null) return b;
      b = new Map();
      h.set(a, b);
      return b;
    }
    function m(a, b) {
      a = a.get(b);
      a != null || g(0, 15079);
      return a;
    }
    e.exports = {
      fetchQuery: a,
      fetchQueryDeduped: i,
      getPromiseForActiveRequest: c,
      getObservableForActiveRequest: d,
    };
  },
  null,
);
