__d(
  'relay-runtime/store/RelayModernStore',
  [
    'invariant',
    'regeneratorRuntime',
    'relay-runtime/multi-actor-environment/ActorIdentifier',
    'relay-runtime/store/DataChecker',
    'relay-runtime/store/RelayModernRecord',
    'relay-runtime/store/RelayOptimisticRecordSource',
    'relay-runtime/store/RelayReader',
    'relay-runtime/store/RelayReferenceMarker',
    'relay-runtime/store/RelayStoreReactFlightUtils',
    'relay-runtime/store/RelayStoreSubscriptions',
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/store/ResolverCache',
    'relay-runtime/store/defaultGetDataID',
    'relay-runtime/util/RelayFeatureFlags',
    'relay-runtime/util/deepFreeze',
    'relay-runtime/util/resolveImmediate',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j = b(
        'relay-runtime/multi-actor-environment/ActorIdentifier',
      ).INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
      k = b(
        'relay-runtime/multi-actor-environment/ActorIdentifier',
      ).assertInternalActorIdentifier,
      l = b('relay-runtime/store/RelayStoreUtils').ROOT_ID,
      m = b('relay-runtime/store/RelayStoreUtils').ROOT_TYPE,
      n = b('relay-runtime/store/ResolverCache').RecordResolverCache,
      o = 10;
    a = (function () {
      function a(a, c) {
        var d = this,
          e;
        this.$24 = function () {
          d.$4 && (d.$4.next().done ? (d.$4 = null) : d.$5(d.$24));
        };
        this.$1 = 0;
        this.$2 = 0;
        this.$3 =
          (e = c == null ? void 0 : c.gcReleaseBufferSize) != null ? e : o;
        this.$4 = null;
        this.$5 =
          (e = c == null ? void 0 : c.gcScheduler) != null
            ? e
            : b('relay-runtime/util/resolveImmediate');
        this.$6 =
          (e = c == null ? void 0 : c.getDataID) != null
            ? e
            : b('relay-runtime/store/defaultGetDataID');
        this.$7 = null;
        this.$8 = new Set();
        this.$9 = new Set();
        this.__log = (e = c == null ? void 0 : c.log) != null ? e : null;
        this.$10 = c == null ? void 0 : c.queryCacheExpirationTime;
        this.$11 =
          (e = c == null ? void 0 : c.operationLoader) != null ? e : null;
        this.$12 = null;
        this.$13 = a;
        this.$15 = [];
        this.$16 = new Map();
        this.$17 = !1;
        this.$14 = new n(function () {
          return d.$21();
        });
        this.$18 = new (b('relay-runtime/store/RelayStoreSubscriptions'))(
          c == null ? void 0 : c.log,
          this.$14,
        );
        this.$19 = new Set();
        this.$20 = c == null ? void 0 : c.shouldProcessClientComponents;
        p(this.$13);
      }
      var c = a.prototype;
      c.getSource = function () {
        var a;
        return (a = this.$12) != null ? a : this.$13;
      };
      c.$21 = function () {
        var a;
        return (a = this.$12) != null ? a : this.$13;
      };
      c.check = function (a, c) {
        var d,
          e,
          f = a.root,
          g = this.$21(),
          h = this.$7;
        a = this.$16.get(a.request.identifier);
        var i = a != null ? a.epoch : null;
        if (h != null && (i == null || i <= h)) return { status: 'stale' };
        h = (h = c == null ? void 0 : c.handlers) != null ? h : [];
        d =
          (d = c == null ? void 0 : c.getSourceForActor) != null
            ? d
            : function (a) {
                k(a);
                return g;
              };
        e =
          (e = c == null ? void 0 : c.getTargetForActor) != null
            ? e
            : function (a) {
                k(a);
                return g;
              };
        e = b('relay-runtime/store/DataChecker').check(
          d,
          e,
          (d = c == null ? void 0 : c.defaultActorIdentifier) != null ? d : j,
          f,
          h,
          this.$11,
          this.$6,
          this.$20,
        );
        return r(e, i, a == null ? void 0 : a.fetchTime, this.$10);
      };
      c.retain = function (a) {
        var b = this,
          c = a.request.identifier,
          d = !1,
          e = function () {
            if (d) return;
            d = !0;
            var a = b.$16.get(c);
            if (a == null) return;
            a.refCount--;
            if (a.refCount === 0) {
              var e = b.$10;
              a =
                a.fetchTime != null &&
                e != null &&
                a.fetchTime <= Date.now() - e;
              if (a) b.$16['delete'](c), b.scheduleGC();
              else {
                b.$15.push(c);
                if (b.$15.length > b.$3) {
                  e = b.$15.shift();
                  b.$16['delete'](e);
                  b.scheduleGC();
                }
              }
            }
          },
          f = this.$16.get(c);
        f != null
          ? (f.refCount === 0 &&
              (this.$15 = this.$15.filter(function (a) {
                return a !== c;
              })),
            (f.refCount += 1))
          : this.$16.set(c, {
              operation: a,
              refCount: 1,
              epoch: null,
              fetchTime: null,
            });
        return { dispose: e };
      };
      c.lookup = function (a) {
        var c = this.getSource();
        c = b('relay-runtime/store/RelayReader').read(c, a, this.$14);
        return c;
      };
      c.notify = function (a, c) {
        var d = this,
          e = this.__log;
        e != null && e({ name: 'store.notify.start', sourceOperation: a });
        this.$1++;
        c === !0 && (this.$7 = this.$1);
        b('relay-runtime/util/RelayFeatureFlags').ENABLE_RELAY_RESOLVERS &&
          this.$14.invalidateDataIDs(this.$19);
        var f = this.getSource(),
          g = [];
        this.$18.updateSubscriptions(f, this.$19, g, a);
        this.$8.forEach(function (a) {
          d.$22(a, c === !0);
        });
        e != null &&
          e({
            name: 'store.notify.complete',
            sourceOperation: a,
            updatedRecordIDs: this.$19,
            invalidatedRecordIDs: this.$9,
          });
        this.$19.clear();
        this.$9.clear();
        if (a != null) {
          f = a.request.identifier;
          e = this.$16.get(f);
          if (e != null) (e.epoch = this.$1), (e.fetchTime = Date.now());
          else if (
            a.request.node.params.operationKind === 'query' &&
            this.$3 > 0 &&
            this.$15.length < this.$3
          ) {
            e = {
              operation: a,
              refCount: 0,
              epoch: this.$1,
              fetchTime: Date.now(),
            };
            this.$15.push(f);
            this.$16.set(f, e);
          }
        }
        return g;
      };
      c.publish = function (a, b) {
        var c = this.$21();
        q(c, a, this.$1 + 1, b, this.$19, this.$9);
        b = this.__log;
        b != null &&
          b({ name: 'store.publish', source: a, optimistic: c === this.$12 });
      };
      c.subscribe = function (a, b) {
        return this.$18.subscribe(a, b);
      };
      c.holdGC = function () {
        var a = this;
        this.$4 && ((this.$4 = null), (this.$17 = !0));
        this.$2++;
        var b = function () {
          a.$2 > 0 &&
            (a.$2--, a.$2 === 0 && a.$17 && (a.scheduleGC(), (a.$17 = !1)));
        };
        return { dispose: b };
      };
      c.toJSON = function () {
        return 'RelayModernStore()';
      };
      c.getEpoch = function () {
        return this.$1;
      };
      c.__getUpdatedRecordIDs = function () {
        return this.$19;
      };
      c.lookupInvalidationState = function (a) {
        var c = this,
          d = new Map();
        a.forEach(function (a) {
          var e = c.getSource().get(a);
          d.set(
            a,
            (a = (
              h || (h = b('relay-runtime/store/RelayModernRecord'))
            ).getInvalidationEpoch(e)) != null
              ? a
              : null,
          );
        });
        d.set('global', this.$7);
        return { dataIDs: a, invalidations: d };
      };
      c.checkInvalidationState = function (a) {
        var b = this.lookupInvalidationState(a.dataIDs);
        b = b.invalidations;
        var c = a.invalidations;
        if (b.get('global') !== c.get('global')) return !0;
        for (
          var a = a.dataIDs,
            d = Array.isArray(a),
            e = 0,
            a = d
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= a.length) break;
            f = a[e++];
          } else {
            e = a.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          if (b.get(f) !== c.get(f)) return !0;
        }
        return !1;
      };
      c.subscribeToInvalidationState = function (a, b) {
        var c = this,
          d = { callback: b, invalidationState: a };
        b = function () {
          c.$8['delete'](d);
        };
        this.$8.add(d);
        return { dispose: b };
      };
      c.$22 = function (a, b) {
        var c = this,
          d = a.callback;
        a = a.invalidationState;
        a = a.dataIDs;
        b =
          b ||
          a.some(function (a) {
            return c.$9.has(a);
          });
        if (!b) return;
        d();
      };
      c.snapshot = function () {
        this.$12 == null || g(0, 19004);
        var a = this.__log;
        a != null && a({ name: 'store.snapshot' });
        this.$18.snapshotSubscriptions(this.getSource());
        this.$4 && ((this.$4 = null), (this.$17 = !0));
        this.$12 = b('relay-runtime/store/RelayOptimisticRecordSource').create(
          this.getSource(),
        );
      };
      c.restore = function () {
        this.$12 != null || g(0, 19005);
        var a = this.__log;
        a != null && a({ name: 'store.restore' });
        this.$12 = null;
        this.$17 && this.scheduleGC();
        this.$18.restoreSubscriptions();
      };
      c.scheduleGC = function () {
        if (this.$2 > 0) {
          this.$17 = !0;
          return;
        }
        if (this.$4) return;
        this.$4 = this.$23();
        this.$5(this.$24);
      };
      c.__gc = function () {
        if (this.$12 != null) return;
        var a = this.$23();
        while (!a.next().done);
      };
      c.$23 = b('regeneratorRuntime').mark(function a() {
        var c, d, e, f, g, h, i, j, k, l, m, n, o;
        return b('regeneratorRuntime').wrap(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  (c = this.$1),
                    (d = new Set()),
                    ((e = this.$16.values()),
                    (f = Array.isArray(e)),
                    (g = 0),
                    (e = f
                      ? e
                      : e[
                          typeof Symbol === 'function'
                            ? Symbol.iterator
                            : '@@iterator'
                        ]()));
                case 4:
                  if (!f) {
                    a.next = 10;
                    break;
                  }
                  if (!(g >= e.length)) {
                    a.next = 7;
                    break;
                  }
                  return a.abrupt('break', 24);
                case 7:
                  h = e[g++];
                  a.next = 14;
                  break;
                case 10:
                  g = e.next();
                  if (!g.done) {
                    a.next = 13;
                    break;
                  }
                  return a.abrupt('break', 24);
                case 13:
                  h = g.value;
                case 14:
                  i = h;
                  j = i.operation;
                  k = j.root;
                  b('relay-runtime/store/RelayReferenceMarker').mark(
                    this.$13,
                    k,
                    d,
                    this.$11,
                    this.$20,
                  );
                  a.next = 20;
                  return;
                case 20:
                  if (!(c !== this.$1)) {
                    a.next = 22;
                    break;
                  }
                  return a.abrupt('continue', 0);
                case 22:
                  a.next = 4;
                  break;
                case 24:
                  l = this.__log;
                  l != null && l({ name: 'store.gc', references: d });
                  if (d.size === 0) this.$13.clear();
                  else {
                    m = this.$13.getRecordIDs();
                    for (n = 0; n < m.length; n++)
                      (o = m[n]), d.has(o) || this.$13.remove(o);
                  }
                  return a.abrupt('return');
                case 30:
                case 'end':
                  return a.stop();
              }
          },
          a,
          this,
        );
      });
      return a;
    })();
    function p(a) {
      if (!a.has(l)) {
        var c = (h || (h = b('relay-runtime/store/RelayModernRecord'))).create(
          l,
          m,
        );
        a.set(l, c);
      }
    }
    function q(a, c, d, e, f, g) {
      e &&
        e.forEach(function (e) {
          var i = a.get(e),
            f = c.get(e);
          if (f === null) return;
          i != null
            ? (i = (
                h || (h = b('relay-runtime/store/RelayModernRecord'))
              ).clone(i))
            : (i =
                f != null
                  ? (
                      h || (h = b('relay-runtime/store/RelayModernRecord'))
                    ).clone(f)
                  : null);
          if (!i) return;
          (h || (h = b('relay-runtime/store/RelayModernRecord'))).setValue(
            i,
            b('relay-runtime/store/RelayStoreUtils').INVALIDATED_AT_KEY,
            d,
          );
          g.add(e);
          a.set(e, i);
        });
      e = c.getRecordIDs();
      for (var i = 0; i < e.length; i++) {
        var j = e[i],
          k = c.get(j),
          l = a.get(j);
        if (k && l) {
          var m =
            (h || (h = b('relay-runtime/store/RelayModernRecord'))).getType(
              l,
            ) ===
            b('relay-runtime/store/RelayStoreReactFlightUtils')
              .REACT_FLIGHT_TYPE_NAME
              ? k
              : (h || (h = b('relay-runtime/store/RelayModernRecord'))).update(
                  l,
                  k,
                );
          m !== l && (f.add(j), a.set(j, m));
        } else
          k === null
            ? (a['delete'](j), l !== null && f.add(j))
            : k && (a.set(j, k), f.add(j));
      }
    }
    function r(a, b, c, d) {
      var e = a.mostRecentlyInvalidatedAt;
      a = a.status;
      if (typeof e === 'number' && (b == null || e > b))
        return { status: 'stale' };
      if (a === 'missing') return { status: 'missing' };
      if (c != null && d != null) {
        e = c <= Date.now() - d;
        if (e) return { status: 'stale' };
      }
      return { status: 'available', fetchTime: (b = c) != null ? b : null };
    }
    e.exports = a;
  },
  null,
);
