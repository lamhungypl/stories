__d(
  'relay-runtime/store/RelayPublishQueue',
  [
    'invariant',
    'relay-runtime/mutations/RelayRecordSourceMutator',
    'relay-runtime/mutations/RelayRecordSourceProxy',
    'relay-runtime/mutations/RelayRecordSourceSelectorProxy',
    'relay-runtime/store/RelayReader',
    'relay-runtime/store/RelayRecordSource',
    'relay-runtime/util/deepFreeze',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h;
    c =
      typeof a !== 'undefined'
        ? a
        : typeof window !== 'undefined'
        ? window
        : void 0;
    var i =
      (f =
        c == null
          ? void 0
          : (d = c.ErrorUtils) == null
          ? void 0
          : d.applyWithGuard) != null
        ? f
        : function (a, b, c, d, e) {
            return a.apply(b, c);
          };
    a = (function () {
      function a(a, b, c, d) {
        (this.$5 = !1),
          (this.$2 = b || null),
          (this.$6 = !1),
          (this.$7 = new Set()),
          (this.$8 = new Set()),
          (this.$1 = a),
          (this.$9 = new Set()),
          (this.$10 = null),
          (this.$4 = c),
          (this.$3 = d);
      }
      var c = a.prototype;
      c.applyUpdate = function (a) {
        (!this.$9.has(a) && !this.$8.has(a)) || g(0, 680), this.$8.add(a);
      };
      c.revertUpdate = function (a) {
        this.$8.has(a)
          ? this.$8['delete'](a)
          : this.$9.has(a) && ((this.$6 = !0), this.$9['delete'](a));
      };
      c.revertAll = function () {
        (this.$6 = !0), this.$8.clear(), this.$9.clear();
      };
      c.commitPayload = function (a, b, c) {
        (this.$6 = !0),
          this.$7.add({
            kind: 'payload',
            operation: a,
            payload: b,
            updater: c,
          });
      };
      c.commitUpdate = function (a) {
        (this.$6 = !0), this.$7.add({ kind: 'updater', updater: a });
      };
      c.commitSource = function (a) {
        (this.$6 = !0), this.$7.add({ kind: 'source', source: a });
      };
      c.run = function (a) {
        var b = this.$9 === 0 && !!this.$10;
        b = !this.$6 && this.$8.size === 0 && !b;
        if (b) return [];
        this.$6 && this.$5 && (this.$1.restore(), (this.$5 = !1));
        b = this.$12();
        (this.$8.size || (this.$6 && this.$9.size)) &&
          (this.$5 || (this.$1.snapshot(), (this.$5 = !0)), this.$13());
        this.$6 = !1;
        this.$9.size > 0
          ? this.$10 || (this.$10 = this.$1.holdGC())
          : this.$10 && (this.$10.dispose(), (this.$10 = null));
        return this.$1.notify(a, b);
      };
      c.$14 = function (a) {
        var c = this,
          d = a.payload,
          e = a.operation;
        a = a.updater;
        var f = d.source;
        d = d.fieldPayloads;
        var h = new (b('relay-runtime/mutations/RelayRecordSourceMutator'))(
            this.$1.getSource(),
            f,
          ),
          i = new (b('relay-runtime/mutations/RelayRecordSourceProxy'))(
            h,
            this.$4,
            this.$2,
            this.$3,
          );
        d &&
          d.length &&
          d.forEach(function (a) {
            var b = c.$2 && c.$2(a.handle);
            b || g(0, 681, a.handle);
            b.update(i, a);
          });
        if (a) {
          d = e.fragment;
          d != null || g(0, 12580);
          e = new (b('relay-runtime/mutations/RelayRecordSourceSelectorProxy'))(
            h,
            i,
            d,
            this.$3,
          );
          h = j(f, d);
          a(e, h);
        }
        d = i.getIDsMarkedForInvalidation();
        this.$1.publish(f, d);
        return i.isStoreMarkedForInvalidation();
      };
      c.$12 = function () {
        var a = this;
        if (!this.$7.size) return !1;
        var c = !1;
        this.$7.forEach(function (d) {
          if (d.kind === 'payload') {
            var e = a.$14(d);
            c = c || e;
          } else if (d.kind === 'source') {
            e = d.source;
            a.$1.publish(e);
          } else {
            e = d.updater;
            d = b('relay-runtime/store/RelayRecordSource').create();
            var f = new (b('relay-runtime/mutations/RelayRecordSourceMutator'))(
              a.$1.getSource(),
              d,
            );
            f = new (b('relay-runtime/mutations/RelayRecordSourceProxy'))(
              f,
              a.$4,
              a.$2,
              a.$3,
            );
            i(e, null, [f], null, 'RelayPublishQueue:commitData');
            c = c || f.isStoreMarkedForInvalidation();
            e = f.getIDsMarkedForInvalidation();
            a.$1.publish(d, e);
          }
        });
        this.$7.clear();
        return c;
      };
      c.$13 = function () {
        var a = this,
          c = b('relay-runtime/store/RelayRecordSource').create(),
          d = new (b('relay-runtime/mutations/RelayRecordSourceMutator'))(
            this.$1.getSource(),
            c,
          ),
          e = new (b('relay-runtime/mutations/RelayRecordSourceProxy'))(
            d,
            this.$4,
            this.$2,
            this.$3,
          ),
          f = function (c) {
            if (c.storeUpdater) {
              var f = c.storeUpdater;
              i(f, null, [e], null, 'RelayPublishQueue:applyUpdates');
            } else {
              f = c.operation;
              var g = c.payload;
              c = c.updater;
              var h = g.source;
              g = g.fieldPayloads;
              h && e.publishSource(h, g);
              if (c) {
                var k;
                h && (k = j(h, f.fragment));
                g = new (b(
                  'relay-runtime/mutations/RelayRecordSourceSelectorProxy',
                ))(d, e, f.fragment, a.$3);
                i(c, null, [g, k], null, 'RelayPublishQueue:applyUpdates');
              }
            }
          };
        this.$6 && this.$9.size && this.$9.forEach(f);
        this.$8.size &&
          (this.$8.forEach(function (b) {
            f(b), a.$9.add(b);
          }),
          this.$8.clear());
        this.$1.publish(c);
      };
      return a;
    })();
    function j(a, c) {
      a = b('relay-runtime/store/RelayReader').read(a, c).data;
      return a;
    }
    e.exports = a;
  },
  null,
);
