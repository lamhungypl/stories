__d(
  'react-relay/relay-hooks/FragmentResource',
  [
    'invariant',
    'Promise',
    'react-relay/relay-hooks/LRUCache',
    'react-relay/relay-hooks/QueryResource',
    'react-relay/relay-hooks/SuspenseResource',
    'relay-runtime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b(
        'react-relay/relay-hooks/QueryResource',
      ).getQueryResourceForEnvironment,
      i = (c = b('relay-runtime')).RelayFeatureFlags;
    d = c.__internal;
    var j = d.fetchQuery,
      k = d.getPromiseForActiveRequest,
      l = c.createOperationDescriptor,
      m = c.getFragmentIdentifier,
      n = c.getPendingOperationsForFragment,
      o = c.getSelector,
      p = c.getVariablesFromFragment,
      q = c.handlePotentialSnapshotErrors,
      r = c.isPromise,
      s = c.recycleNodesInto;
    f = typeof WeakMap === 'function';
    var t = 1e6,
      u = Object.freeze([]);
    function v(a) {
      return Array.isArray(a)
        ? a.some(function (a) {
            return a.isMissingData;
          })
        : a.isMissingData;
    }
    function w(a) {
      return Array.isArray(a)
        ? a.some(function (a) {
            return (
              ((a = (a = a.missingClientEdges) == null ? void 0 : a.length) !=
              null
                ? a
                : 0) > 0
            );
          })
        : ((a = (a = a.missingClientEdges) == null ? void 0 : a.length) != null
            ? a
            : 0) > 0;
    }
    function x(a) {
      return Array.isArray(a)
        ? a
            .map(function (a) {
              return a.missingLiveResolverFields;
            })
            .filter(Boolean)
            .flat()
        : a.missingLiveResolverFields;
    }
    function y(a, b) {
      Array.isArray(a) ? a.forEach(b) : b(a);
    }
    function z(a, b, c) {
      return Array.isArray(b)
        ? {
            cacheKey: a,
            snapshot: b,
            data: b.map(function (a) {
              return a.data;
            }),
            isMissingData: v(b),
            storeEpoch: c,
          }
        : {
            cacheKey: a,
            snapshot: b,
            data: b.data,
            isMissingData: v(b),
            storeEpoch: c,
          };
    }
    var A = (function () {
        function a(a) {
          (this.$1 = new Map()), (this.$2 = new Map()), (this.$3 = a);
        }
        var c = a.prototype;
        c.get = function (a) {
          return (a = (a = this.$1.get(a)) == null ? void 0 : a[0]) != null
            ? a
            : void 0;
        };
        c.recordQueryResults = function (a, c) {
          var d = this,
            e = this.$1.get(a);
          if (!e) {
            var f = new (b('react-relay/relay-hooks/SuspenseResource'))(
              function () {
                return d.$4(a);
              },
            );
            this.$1.set(a, [c, f]);
            f.temporaryRetain(this.$3);
          } else {
            var g = e[0];
            f = e[1];
            c.forEach(function (a) {
              g.push(a);
            });
            f.temporaryRetain(this.$3);
          }
        };
        c.$4 = function (a) {
          var b,
            c = this;
          b = ((b = this.$2.get(a)) != null ? b : 0) + 1;
          this.$2.set(a, b);
          return {
            dispose: function () {
              var b;
              b = ((b = c.$2.get(a)) != null ? b : 0) - 1;
              b > 0 ? c.$2.set(a, b) : (c.$2['delete'](a), c.$1['delete'](a));
            },
          };
        };
        return a;
      })(),
      B = (function () {
        function a(a) {
          (this.$1 = a),
            (this.$2 = b('react-relay/relay-hooks/LRUCache').create(t)),
            i.ENABLE_CLIENT_EDGES && (this.$3 = new A(a));
        }
        var c = a.prototype;
        c.read = function (a, b, c, d) {
          return this.readWithIdentifier(a, b, m(a, b), c, d);
        };
        c.readWithIdentifier = function (a, c, d, e, f) {
          var j,
            l = this,
            m,
            n = this.$1;
          if (c == null)
            return {
              cacheKey: d,
              data: null,
              isMissingData: !1,
              snapshot: null,
              storeEpoch: 0,
            };
          var p = n.getStore().getEpoch();
          if (
            (a == null
              ? void 0
              : (j = a.metadata) == null
              ? void 0
              : j.plural) === !0
          ) {
            Array.isArray(c) ||
              g(
                0,
                13793,
                f != null ? ' for key `' + f + '`' : '',
                a.name,
                typeof c,
                a.name,
              );
            if (c.length === 0)
              return {
                cacheKey: d,
                data: u,
                isMissingData: !1,
                snapshot: u,
                storeEpoch: p,
              };
          }
          j = this.$2.get(d);
          if (j != null) {
            var q;
            if (j.kind === 'pending' && r(j.promise)) {
              n.__log({
                name: 'suspense.fragment',
                data: j.result.data,
                fragment: a,
                isRelayHooks: !0,
                isMissingData: j.result.isMissingData,
                isPromiseCached: !0,
                pendingOperations: j.pendingOperations,
              });
              throw j.promise;
            }
            if (
              j.kind === 'done' &&
              j.result.snapshot &&
              !((q = x(j.result.snapshot)) == null ? void 0 : q.length)
            ) {
              this.$4(j.result.snapshot);
              j.result.isMissingData &&
                n.__log({
                  name: 'fragmentresource.missing_data',
                  data: j.result.data,
                  fragment: a,
                  isRelayHooks: !0,
                  cached: !0,
                });
              return j.result;
            }
          }
          q = o(a, c);
          q != null ||
            g(
              0,
              37286,
              a.name,
              a.name,
              e,
              a.name,
              f == null ? 'a fragment reference' : 'the `' + f + '`',
              e,
            );
          j =
            q.kind === 'PluralReaderSelector'
              ? q.selectors.map(function (a) {
                  return n.lookup(a);
                })
              : n.lookup(q);
          f = z(d, j, p);
          if (!f.isMissingData) {
            this.$4(j);
            this.$2.set(d, { kind: 'done', result: f });
            return f;
          }
          var s = null;
          if (
            i.ENABLE_CLIENT_EDGES &&
            ((e = a.metadata) == null ? void 0 : e.hasClientEdges) === !0 &&
            w(j)
          ) {
            s = [];
            var t = h(this.$1),
              v = [];
            y(j, function (b) {
              (b = b.missingClientEdges) == null
                ? void 0
                : b.forEach(function (b) {
                    var d = b.request;
                    b = b.clientEdgeDestinationID;
                    d = l.$5(t, a, c, d, b);
                    b = d.queryResult;
                    d = d.requestDescriptor;
                    v.push(b);
                    (b = s) == null ? void 0 : b.push(d);
                  });
            });
            this.$3 != null || g(0, 56147);
            this.$3.recordQueryResults(d, v);
          }
          e = [];
          i.ENABLE_CLIENT_EDGES &&
            s &&
            (e = s
              .map(function (a) {
                return k(l.$1, a);
              })
              .filter(Boolean));
          q =
            q.kind === 'PluralReaderSelector' ? q.selectors[0].owner : q.owner;
          q = this.$6(d, a, q, f);
          var A = q == null ? void 0 : q.promise;
          m =
            (m =
              (m = x(j)) == null
                ? void 0
                : m.map(function (a) {
                    a = a.liveStateID;
                    var b = n.getStore();
                    return b.getLiveResolverPromise(a);
                  })) != null
              ? m
              : [];
          if (e.length || m.length || r(A)) {
            n.__log({
              name: 'suspense.fragment',
              data: f.data,
              fragment: a,
              isRelayHooks: !0,
              isPromiseCached: !1,
              isMissingData: f.isMissingData,
              pendingOperations: [].concat(
                (q = q == null ? void 0 : q.pendingOperations) != null ? q : [],
                (q = s) != null ? q : [],
              ),
            });
            q = [];
            e.length > 0 && (q = q.concat(e));
            m.length > 0 && (q = q.concat(m));
            if (q.length > 0) {
              A && q.push(A);
              throw b('Promise').all(q);
            }
            if (A) throw A;
          }
          this.$4(j);
          n.__log({
            name: 'fragmentresource.missing_data',
            data: f.data,
            fragment: a,
            isRelayHooks: !0,
            cached: !1,
          });
          return z(d, j, p);
        };
        c.$5 = function (a, b, c, d, e) {
          b = p(b, c);
          c = babelHelpers['extends']({}, b, { id: e });
          b = l(d, c, {});
          e = j(this.$1, b);
          d = a.prepare(b, e);
          return { requestDescriptor: b.request, queryResult: d };
        };
        c.$4 = function (a) {
          var b = this;
          Array.isArray(a)
            ? a.forEach(function (a) {
                q(b.$1, a.missingRequiredFields, a.relayResolverErrors);
              })
            : q(this.$1, a.missingRequiredFields, a.relayResolverErrors);
        };
        c.readSpec = function (a, b, c) {
          var d = {};
          for (var e in a) d[e] = this.read(a[e], b[e], c, e);
          return d;
        };
        c.subscribe = function (a, b) {
          var c = this,
            d = this.$1,
            e = a.cacheKey,
            f = a.snapshot;
          if (!f) return { dispose: function () {} };
          a = this.checkMissedUpdates(a);
          var j = a[0],
            k = a[1];
          j && b();
          var l = [];
          Array.isArray(f)
            ? (Array.isArray(k) || g(0, 18208),
              k.forEach(function (a, f) {
                l.push(
                  d.subscribe(a, function (a) {
                    var g = d.getStore().getEpoch();
                    c.$7(e, k, a, f, g);
                    b();
                  }),
                );
              }))
            : ((k != null && !Array.isArray(k)) || g(0, 18209),
              l.push(
                d.subscribe(k, function (a) {
                  var f = d.getStore().getEpoch();
                  c.$2.set(e, { kind: 'done', result: z(e, a, f) });
                  b();
                }),
              ));
          if (i.ENABLE_CLIENT_EDGES) {
            f =
              (j = (a = this.$3) == null ? void 0 : a.get(e)) != null
                ? j
                : void 0;
            if (f == null ? void 0 : f.length) {
              var m = h(this.$1);
              f.forEach(function (a) {
                l.push(m.retain(a));
              });
            }
          }
          return {
            dispose: function () {
              l.forEach(function (a) {
                return a.dispose();
              }),
                c.$2['delete'](e);
            },
          };
        };
        c.subscribeSpec = function (a, b) {
          var c = this,
            d = Object.keys(a).map(function (d) {
              return c.subscribe(a[d], b);
            });
          return {
            dispose: function () {
              d.forEach(function (a) {
                a.dispose();
              });
            },
          };
        };
        c.checkMissedUpdates = function (a) {
          var b = this.$1,
            c = a.snapshot;
          if (!c) return [!1, null];
          var d = null;
          d = b.getStore().getEpoch();
          if (a.storeEpoch === d) return [!1, a.snapshot];
          a = a.cacheKey;
          if (Array.isArray(c)) {
            var e = !1,
              f = [];
            c.forEach(function (d, g) {
              var a = b.lookup(d.selector);
              d = d.data;
              var c = a.data;
              c = s(d, c);
              c !== d &&
                ((a = babelHelpers['extends']({}, a, { data: c })), (e = !0));
              f[g] = a;
            });
            e && this.$2.set(a, { kind: 'done', result: z(a, f, d) });
            return [e, f];
          }
          var g = b.lookup(c.selector);
          c = c.data;
          var h = g.data;
          h = s(c, h);
          g = {
            data: h,
            isMissingData: g.isMissingData,
            missingClientEdges: g.missingClientEdges,
            missingLiveResolverFields: g.missingLiveResolverFields,
            seenRecords: g.seenRecords,
            selector: g.selector,
            missingRequiredFields: g.missingRequiredFields,
            relayResolverErrors: g.relayResolverErrors,
          };
          h !== c && this.$2.set(a, { kind: 'done', result: z(a, g, d) });
          return [h !== c, g];
        };
        c.checkMissedUpdatesSpec = function (a) {
          var b = this;
          return Object.keys(a).some(function (c) {
            return b.checkMissedUpdates(a[c])[0];
          });
        };
        c.$6 = function (a, b, c, d) {
          var e = this;
          b = n(this.$1, b, c);
          if (b == null) return null;
          c = b.promise;
          b = b.pendingOperations;
          var f = c
            .then(function () {
              e.$2['delete'](a);
            })
            ['catch'](function (b) {
              e.$2['delete'](a);
            });
          f.displayName = c.displayName;
          this.$2.set(a, {
            kind: 'pending',
            pendingOperations: b,
            promise: f,
            result: d,
          });
          return { promise: f, pendingOperations: b };
        };
        c.$7 = function (a, b, c, d, e) {
          var f = this.$2.get(a);
          if (r(f)) {
            C(c.selector.node.name);
            return;
          }
          f = f == null ? void 0 : (f = f.result) == null ? void 0 : f.snapshot;
          if (f && !Array.isArray(f)) {
            C(c.selector.node.name);
            return;
          }
          f = f ? [].concat(f) : [].concat(b);
          f[d] = c;
          this.$2.set(a, { kind: 'done', result: z(a, f, e) });
        };
        return a;
      })();
    function C(a) {
      g(0, 20347, a);
    }
    function D(a) {
      return new B(a);
    }
    var E = f ? new WeakMap() : new Map();
    function a(a) {
      var b = E.get(a);
      if (b) return b;
      b = D(a);
      E.set(a, b);
      return b;
    }
    e.exports = {
      createFragmentResource: D,
      getFragmentResourceForEnvironment: a,
    };
  },
  null,
);
