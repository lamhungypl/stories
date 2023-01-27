__d(
  'relay-runtime/network/RelayObservable',
  ['Promise', 'relay-runtime/util/isPromise'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = a,
      h = (function () {
        a.create = function (b) {
          return new a(b);
        };
        function a(a) {
          this.$1 = a;
        }
        a.onUnhandledError = function (a) {
          g = a;
        };
        a.from = function (a) {
          return i(a)
            ? j(a)
            : b('relay-runtime/util/isPromise')(a)
            ? k(a)
            : l(a);
        };
        var c = a.prototype;
        c['catch'] = function (b) {
          var c = this;
          return a.create(function (a) {
            var d;
            c.subscribe({
              start: function (a) {
                d = a;
              },
              next: a.next,
              complete: a.complete,
              error: function (c) {
                try {
                  b(c).subscribe({
                    start: function (a) {
                      d = a;
                    },
                    next: a.next,
                    complete: a.complete,
                    error: a.error,
                  });
                } catch (b) {
                  a.error(b, !0);
                }
              },
            });
            return function () {
              return d.unsubscribe();
            };
          });
        };
        c.concat = function (b) {
          var c = this;
          return a.create(function (a) {
            var d;
            c.subscribe({
              start: function (a) {
                d = a;
              },
              next: a.next,
              error: a.error,
              complete: function () {
                d = b.subscribe(a);
              },
            });
            return function () {
              d && d.unsubscribe();
            };
          });
        };
        c['do'] = function (b) {
          var c = this;
          return a.create(function (a) {
            var d = function (c) {
              return function () {
                try {
                  b[c] && b[c].apply(b, arguments);
                } catch (a) {
                  g(a, !0);
                }
                a[c] && a[c].apply(a, arguments);
              };
            };
            return c.subscribe({
              start: d('start'),
              next: d('next'),
              error: d('error'),
              complete: d('complete'),
              unsubscribe: d('unsubscribe'),
            });
          });
        };
        c['finally'] = function (b) {
          var c = this;
          return a.create(function (a) {
            var d = c.subscribe(a);
            return function () {
              d.unsubscribe(), b();
            };
          });
        };
        c.ifEmpty = function (b) {
          var c = this;
          return a.create(function (a) {
            var d = !1,
              e = c.subscribe({
                next: function (b) {
                  (d = !0), a.next(b);
                },
                error: a.error,
                complete: function () {
                  d ? a.complete() : (e = b.subscribe(a));
                },
              });
            return function () {
              e.unsubscribe();
            };
          });
        };
        c.subscribe = function (a) {
          return m(this.$1, a);
        };
        c.map = function (b) {
          var c = this;
          return a.create(function (a) {
            var d = c.subscribe({
              complete: a.complete,
              error: a.error,
              next: function (c) {
                try {
                  c = b(c);
                  a.next(c);
                } catch (b) {
                  a.error(b, !0);
                }
              },
            });
            return function () {
              d.unsubscribe();
            };
          });
        };
        c.mergeMap = function (b) {
          var c = this;
          return a.create(function (d) {
            var e = [];
            function f(a) {
              (this.$2 = a), e.push(a);
            }
            function g() {
              e.splice(e.indexOf(this.$2), 1), e.length === 0 && d.complete();
            }
            c.subscribe({
              start: f,
              next: function (c) {
                try {
                  d.closed ||
                    a.from(b(c)).subscribe({
                      start: f,
                      next: d.next,
                      error: d.error,
                      complete: g,
                    });
                } catch (a) {
                  d.error(a, !0);
                }
              },
              error: d.error,
              complete: g,
            });
            return function () {
              e.forEach(function (a) {
                return a.unsubscribe();
              }),
                (e.length = 0);
            };
          });
        };
        c.poll = function (b) {
          var c = this;
          return a.create(function (a) {
            var d,
              e,
              f = function f() {
                d = c.subscribe({
                  next: a.next,
                  error: a.error,
                  complete: function () {
                    e = setTimeout(f, b);
                  },
                });
              };
            f();
            return function () {
              clearTimeout(e), d.unsubscribe();
            };
          });
        };
        c.toPromise = function () {
          var a = this;
          return new (b('Promise'))(function (b, c) {
            var d = !1;
            a.subscribe({
              next: function (a) {
                d || ((d = !0), b(a));
              },
              error: c,
              complete: b,
            });
          });
        };
        return a;
      })();
    function i(a) {
      return (
        typeof a === 'object' && a !== null && typeof a.subscribe === 'function'
      );
    }
    function j(a) {
      return a instanceof h
        ? a
        : h.create(function (b) {
            return a.subscribe(b);
          });
    }
    function k(a) {
      return h.create(function (b) {
        a.then(function (a) {
          b.next(a), b.complete();
        }, b.error);
      });
    }
    function l(a) {
      return h.create(function (b) {
        b.next(a), b.complete();
      });
    }
    function m(a, b) {
      var c = !1,
        d,
        e = function (a) {
          return Object.defineProperty(a, 'closed', {
            get: function () {
              return c;
            },
          });
        };
      function f() {
        if (d) {
          if (d.unsubscribe) d.unsubscribe();
          else
            try {
              d();
            } catch (a) {
              g(a, !0);
            }
          d = void 0;
        }
      }
      var h = e({
        unsubscribe: function () {
          if (!c) {
            c = !0;
            try {
              b.unsubscribe && b.unsubscribe(h);
            } catch (a) {
              g(a, !0);
            } finally {
              f();
            }
          }
        },
      });
      try {
        b.start && b.start(h);
      } catch (a) {
        g(a, !0);
      }
      if (c) return h;
      e = e({
        next: function (a) {
          if (!c && b.next)
            try {
              b.next(a);
            } catch (a) {
              g(a, !0);
            }
        },
        error: function (a, d) {
          if (c || !b.error) (c = !0), g(a, d || !1), f();
          else {
            c = !0;
            try {
              b.error(a);
            } catch (a) {
              g(a, !0);
            } finally {
              f();
            }
          }
        },
        complete: function () {
          if (!c) {
            c = !0;
            try {
              b.complete && b.complete();
            } catch (a) {
              g(a, !0);
            } finally {
              f();
            }
          }
        },
      });
      try {
        d = a(e);
      } catch (a) {
        e.error(a, !0);
      }
      c && f();
      return h;
    }
    function a(a, b) {}
    e.exports = h;
  },
  null,
);
