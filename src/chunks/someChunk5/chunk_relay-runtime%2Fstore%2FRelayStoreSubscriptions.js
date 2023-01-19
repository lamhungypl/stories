__d(
  'relay-runtime/store/RelayStoreSubscriptions',
  [
    'relay-runtime/store/RelayReader',
    'relay-runtime/store/hasOverlappingIDs',
    'relay-runtime/util/RelayFeatureFlags',
    'relay-runtime/util/deepFreeze',
    'relay-runtime/util/recycleNodesInto',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g, h;
    a = (function () {
      function a(a, b) {
        (this.$1 = new Set()), (this.__log = a), (this.$2 = b);
      }
      var c = a.prototype;
      c.subscribe = function (a, b) {
        var c = this,
          d = { backup: null, callback: b, snapshot: a, stale: !1 };
        b = function () {
          c.$1['delete'](d);
        };
        this.$1.add(d);
        return { dispose: b };
      };
      c.snapshotSubscriptions = function (a) {
        var c = this;
        this.$1.forEach(function (d) {
          if (!d.stale) {
            d.backup = d.snapshot;
            return;
          }
          var e = d.snapshot,
            f = b('relay-runtime/store/RelayReader').read(a, e.selector, c.$2);
          e = b('relay-runtime/util/recycleNodesInto')(e.data, f.data);
          f.data = e;
          d.backup = f;
        });
      };
      c.restoreSubscriptions = function () {
        this.$1.forEach(function (a) {
          var b = a.backup;
          a.backup = null;
          b
            ? (b.data !== a.snapshot.data && (a.stale = !0),
              (a.snapshot = {
                data: a.snapshot.data,
                isMissingData: b.isMissingData,
                missingClientEdges: b.missingClientEdges,
                missingLiveResolverFields: b.missingLiveResolverFields,
                seenRecords: b.seenRecords,
                selector: b.selector,
                missingRequiredFields: b.missingRequiredFields,
                relayResolverErrors: b.relayResolverErrors,
              }))
            : (a.stale = !0);
        });
      };
      c.updateSubscriptions = function (a, b, c, d) {
        var e = this,
          f = b.size !== 0;
        this.$1.forEach(function (g) {
          g = e.$3(a, g, b, f, d);
          g != null && c.push(g);
        });
      };
      c.$3 = function (a, c, d, e, f) {
        var h = c.backup,
          i = c.callback,
          j = c.snapshot,
          k = c.stale;
        e =
          e &&
          (g || (g = b('relay-runtime/store/hasOverlappingIDs')))(
            j.seenRecords,
            d,
          );
        if (!k && !e) return;
        d =
          e || !h
            ? b('relay-runtime/store/RelayReader').read(a, j.selector, this.$2)
            : h;
        k = b('relay-runtime/util/recycleNodesInto')(j.data, d.data);
        d = {
          data: k,
          isMissingData: d.isMissingData,
          missingClientEdges: d.missingClientEdges,
          missingLiveResolverFields: d.missingLiveResolverFields,
          seenRecords: d.seenRecords,
          selector: d.selector,
          missingRequiredFields: d.missingRequiredFields,
          relayResolverErrors: d.relayResolverErrors,
        };
        c.snapshot = d;
        c.stale = !1;
        if (d.data !== j.data) {
          this.__log &&
            b('relay-runtime/util/RelayFeatureFlags')
              .ENABLE_NOTIFY_SUBSCRIPTION &&
            this.__log({
              name: 'store.notify.subscription',
              sourceOperation: f,
              snapshot: j,
              nextSnapshot: d,
            });
          i(d);
          return j.selector.owner;
        }
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
