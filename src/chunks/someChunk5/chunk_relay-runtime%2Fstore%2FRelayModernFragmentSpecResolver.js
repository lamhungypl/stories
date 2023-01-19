__d(
  'relay-runtime/store/RelayModernFragmentSpecResolver',
  [
    'invariant',
    'areEqual',
    'relay-runtime/store/RelayModernOperationDescriptor',
    'relay-runtime/store/RelayModernSelector',
    'relay-runtime/util/RelayFeatureFlags',
    'relay-runtime/util/getPendingOperationsForFragment',
    'relay-runtime/util/handlePotentialSnapshotErrors',
    'relay-runtime/util/isScalarAndEqual',
    'relay-runtime/util/recycleNodesInto',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = b(
        'relay-runtime/store/RelayModernOperationDescriptor',
      ).createRequestDescriptor,
      j = b('relay-runtime/store/RelayModernSelector').areEqualSelectors,
      k = b('relay-runtime/store/RelayModernSelector').createReaderSelector,
      l = b('relay-runtime/store/RelayModernSelector').getSelectorsFromObject;
    a = (function () {
      function a(a, b, c, d, e) {
        var f = this;
        this.$9 = function () {
          (f.$8 = !0), typeof f.$1 === 'function' && f.$1();
        };
        this.$1 = d;
        this.$2 = a;
        this.$4 = {};
        this.$5 = b;
        this.$6 = {};
        this.$7 = {};
        this.$8 = !1;
        this.$3 = e;
        this.setProps(c);
      }
      var c = a.prototype;
      c.dispose = function () {
        for (var a in this.$7)
          Object.prototype.hasOwnProperty.call(this.$7, a) && o(this.$7[a]);
      };
      c.resolve = function () {
        if (this.$8) {
          var a = this.$4,
            c;
          for (var d in this.$7)
            if (Object.prototype.hasOwnProperty.call(this.$7, d)) {
              var e = this.$7[d],
                f = a[d];
              if (e) {
                e = e.resolve();
                (c || e !== f) &&
                  ((c = c || babelHelpers['extends']({}, a)), (c[d] = e));
              } else {
                e = this.$6[d];
                e = e !== void 0 ? e : null;
                (c || !b('relay-runtime/util/isScalarAndEqual')(e, f)) &&
                  ((c = c || babelHelpers['extends']({}, a)), (c[d] = e));
              }
            }
          this.$4 = c || a;
          this.$8 = !1;
        }
        return this.$4;
      };
      c.setCallback = function (a, c) {
        (this.$1 = c),
          b('relay-runtime/util/RelayFeatureFlags')
            .ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === !0 && this.setProps(a);
      };
      c.setProps = function (a) {
        this.$6 = {};
        var b = l(this.$5, a);
        for (var c in b)
          if (Object.prototype.hasOwnProperty.call(b, c)) {
            var d = b[c],
              e = this.$7[c];
            d == null
              ? (e != null && e.dispose(), (e = null))
              : d.kind === 'PluralReaderSelector'
              ? e == null
                ? (e = new n(
                    this.$2.environment,
                    this.$3,
                    d,
                    this.$1 != null,
                    this.$9,
                  ))
                : (e instanceof n || g(0, 4761, c), e.setSelector(d))
              : e == null
              ? (e = new m(
                  this.$2.environment,
                  this.$3,
                  d,
                  this.$1 != null,
                  this.$9,
                ))
              : (e instanceof m || g(0, 4762, c), e.setSelector(d));
            this.$6[c] = a[c];
            this.$7[c] = e;
          }
        this.$8 = !0;
      };
      c.setVariables = function (a, b) {
        for (var c in this.$7)
          if (Object.prototype.hasOwnProperty.call(this.$7, c)) {
            var d = this.$7[c];
            d && d.setVariables(a, b);
          }
        this.$8 = !0;
      };
      return a;
    })();
    var m = (function () {
        function a(a, c, d, e, f) {
          var g = this;
          this.$10 = function (a) {
            (g.$2 = a.data),
              (g.$4 = a.isMissingData),
              (g.$5 = a.missingRequiredFields),
              (g.$6 = a.relayResolverErrors),
              g.$1();
          };
          var h = a.lookup(d);
          this.$1 = f;
          this.$2 = h.data;
          this.$4 = h.isMissingData;
          this.$5 = h.missingRequiredFields;
          this.$6 = h.relayResolverErrors;
          this.$3 = a;
          this.$7 = c;
          this.$8 = d;
          b('relay-runtime/util/RelayFeatureFlags')
            .ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT === !0
            ? e && (this.$9 = a.subscribe(h, this.$10))
            : (this.$9 = a.subscribe(h, this.$10));
        }
        var c = a.prototype;
        c.dispose = function () {
          this.$9 && (this.$9.dispose(), (this.$9 = null));
        };
        c.resolve = function () {
          if (this.$4 === !0) {
            var a = b('relay-runtime/util/getPendingOperationsForFragment')(
                this.$3,
                this.$8.node,
                this.$8.owner,
              ),
              c = a == null ? void 0 : a.promise;
            if (c != null)
              if (this.$7)
                b('warning')(
                  !1,
                  'Relay: Relay Container for fragment `%s` has missing data and would suspend. When using features such as @defer or @module, use `useFragment` instead of a Relay Container.',
                  this.$8.node.name,
                );
              else {
                a =
                  (a = a == null ? void 0 : a.pendingOperations) != null
                    ? a
                    : [];
                b('warning')(
                  !1,
                  'Relay: Relay Container for fragment `%s` suspended. When using features such as @defer or @module, use `useFragment` instead of a Relay Container.',
                  this.$8.node.name,
                );
                this.$3.__log({
                  name: 'suspense.fragment',
                  data: this.$2,
                  fragment: this.$8.node,
                  isRelayHooks: !1,
                  isMissingData: this.$4,
                  isPromiseCached: !1,
                  pendingOperations: a,
                });
                throw c;
              }
          }
          b('relay-runtime/util/handlePotentialSnapshotErrors')(
            this.$3,
            this.$5,
            this.$6,
          );
          return this.$2;
        };
        c.setSelector = function (a) {
          if (this.$9 != null && j(a, this.$8)) return;
          this.dispose();
          var c = this.$3.lookup(a);
          this.$2 = b('relay-runtime/util/recycleNodesInto')(this.$2, c.data);
          this.$4 = c.isMissingData;
          this.$5 = c.missingRequiredFields;
          this.$6 = c.relayResolverErrors;
          this.$8 = a;
          this.$9 = this.$3.subscribe(c, this.$10);
        };
        c.setVariables = function (a, c) {
          if ((h || (h = b('areEqual')))(a, this.$8.variables)) return;
          c = i(c, a);
          a = k(this.$8.node, this.$8.dataID, a, c);
          this.setSelector(a);
        };
        return a;
      })(),
      n = (function () {
        function a(a, b, c, d, e) {
          var f = this;
          this.$8 = function (a) {
            (f.$6 = !0), f.$1();
          };
          this.$1 = e;
          this.$2 = [];
          this.$3 = a;
          this.$4 = [];
          this.$6 = !0;
          this.$5 = b;
          this.$7 = d;
          this.setSelector(c);
        }
        var b = a.prototype;
        b.dispose = function () {
          this.$4.forEach(o);
        };
        b.resolve = function () {
          if (this.$6) {
            var a = this.$2,
              b;
            for (var c = 0; c < this.$4.length; c++) {
              var d = a[c],
                e = this.$4[c].resolve();
              (b || e !== d) && ((b = b || a.slice(0, c)), b.push(e));
            }
            !b &&
              this.$4.length !== a.length &&
              (b = a.slice(0, this.$4.length));
            this.$2 = b || a;
            this.$6 = !1;
          }
          return this.$2;
        };
        b.setSelector = function (a) {
          a = a.selectors;
          while (this.$4.length > a.length) {
            var b = this.$4.pop();
            b.dispose();
          }
          for (b = 0; b < a.length; b++)
            b < this.$4.length
              ? this.$4[b].setSelector(a[b])
              : (this.$4[b] = new m(this.$3, this.$5, a[b], this.$7, this.$8));
          this.$6 = !0;
        };
        b.setVariables = function (a, b) {
          this.$4.forEach(function (c) {
            return c.setVariables(a, b);
          }),
            (this.$6 = !0);
        };
        return a;
      })();
    function o(a) {
      a && a.dispose();
    }
    e.exports = a;
  },
  null,
);
