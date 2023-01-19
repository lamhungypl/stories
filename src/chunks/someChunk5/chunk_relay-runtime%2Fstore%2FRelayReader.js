__d(
  'relay-runtime/store/RelayReader',
  [
    'invariant',
    'relay-runtime/store/RelayConcreteVariables',
    'relay-runtime/store/RelayModernRecord',
    'relay-runtime/store/RelayStoreReactFlightUtils',
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/store/ResolverCache',
    'relay-runtime/store/ResolverFragments',
    'relay-runtime/store/TypeID',
    'relay-runtime/store/experimental-live-resolvers/LiveResolverSuspenseSentinel',
    'relay-runtime/util/RelayConcreteNode',
    'relay-runtime/util/RelayFeatureFlags',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = (a = b('relay-runtime/util/RelayConcreteNode')).ACTOR_CHANGE,
      j = a.ALIASED_FRAGMENT_SPREAD,
      k = a.ALIASED_INLINE_FRAGMENT_SPREAD,
      l = a.CLIENT_EDGE_TO_CLIENT_OBJECT,
      m = a.CLIENT_EDGE_TO_SERVER_OBJECT,
      n = a.CLIENT_EXTENSION,
      o = a.CONDITION,
      p = a.DEFER,
      q = a.FLIGHT_FIELD,
      r = a.FRAGMENT_SPREAD,
      s = a.INLINE_DATA_FRAGMENT_SPREAD,
      t = a.INLINE_FRAGMENT,
      u = a.LINKED_FIELD,
      v = a.MODULE_IMPORT,
      w = a.RELAY_LIVE_RESOLVER,
      x = a.RELAY_RESOLVER,
      y = a.REQUIRED_FIELD,
      z = a.SCALAR_FIELD,
      A = a.STREAM,
      B = b(
        'relay-runtime/store/experimental-live-resolvers/LiveResolverSuspenseSentinel',
      ).isSuspenseSentinel,
      C = b(
        'relay-runtime/store/RelayStoreReactFlightUtils',
      ).getReactFlightClientResponse,
      D = (c = b('relay-runtime/store/RelayStoreUtils'))
        .CLIENT_EDGE_TRAVERSAL_PATH,
      E = c.FRAGMENT_OWNER_KEY,
      F = c.FRAGMENT_PROP_NAME_KEY,
      G = c.FRAGMENTS_KEY,
      H = c.ID_KEY,
      I = c.IS_WITHIN_UNMATCHED_TYPE_REFINEMENT,
      J = c.MODULE_COMPONENT_KEY,
      K = c.ROOT_ID,
      L = c.getArgumentValues,
      M = c.getModuleComponentKey,
      N = c.getStorageKey,
      O = b('relay-runtime/store/ResolverCache').NoopResolverCache,
      P = b(
        'relay-runtime/store/ResolverFragments',
      ).RESOLVER_FRAGMENT_MISSING_DATA_SENTINEL,
      Q = b('relay-runtime/store/ResolverFragments').withResolverContext,
      R = b('relay-runtime/store/TypeID').generateTypeID;
    function S(a, b, c) {
      b = new T(a, b, (a = c) != null ? a : new O());
      return b.read();
    }
    var T = (function () {
      function a(a, c, d) {
        var e;
        this.$1 =
          b('relay-runtime/util/RelayFeatureFlags').ENABLE_CLIENT_EDGES &&
          ((e = c.clientEdgeTraversalPath) == null ? void 0 : e.length)
            ? [].concat(c.clientEdgeTraversalPath)
            : [];
        this.$3 = [];
        this.$4 = [];
        this.$2 = !1;
        this.$5 = !1;
        this.$6 = null;
        this.$7 = c.owner;
        this.$8 = a;
        this.$9 = new Set();
        this.$11 = c;
        this.$12 = c.variables;
        this.$13 = d;
        this.$14 = [];
        this.$15 = c.node.name;
        this.$10 = new Set();
      }
      var c = a.prototype;
      c.read = function () {
        var a = this.$11,
          c = a.node,
          d = a.dataID;
        a = a.isWithinUnmatchedTypeRefinement;
        var e = c.abstractKey,
          f = this.$8.get(d);
        a = !a;
        if (a && e == null && f != null) {
          var g = (
            h || (h = b('relay-runtime/store/RelayModernRecord'))
          ).getType(f);
          g !== c.type && d !== K && (a = !1);
        }
        if (a && e != null && f != null) {
          g = this.$16(f, e);
          g === !1 ? (a = !1) : g == null && (this.$2 = !0);
        }
        this.$5 = !a;
        f = this.$17(c, d, null);
        this.$10.size > 0 &&
          (this.$13.notifyUpdatedSubscribers(this.$10), this.$10.clear());
        return {
          data: f,
          isMissingData: this.$2 && a,
          missingClientEdges:
            b('relay-runtime/util/RelayFeatureFlags').ENABLE_CLIENT_EDGES &&
            this.$3.length
              ? this.$3
              : null,
          missingLiveResolverFields: this.$4,
          seenRecords: this.$9,
          selector: this.$11,
          missingRequiredFields: this.$6,
          relayResolverErrors: this.$14,
        };
      };
      c.$18 = function () {
        this.$2 = !0;
        if (
          b('relay-runtime/util/RelayFeatureFlags').ENABLE_CLIENT_EDGES &&
          this.$1.length
        ) {
          var a = this.$1[this.$1.length - 1];
          a !== null &&
            this.$3.push({
              request: a.readerClientEdge.operation,
              clientEdgeDestinationID: a.clientEdgeDestinationID,
            });
        }
      };
      c.$17 = function (a, b, c) {
        var d = this.$8.get(b);
        this.$9.add(b);
        if (d == null) {
          d === void 0 && this.$18();
          return d;
        }
        b = c || {};
        c = this.$19(a.selections, d, b);
        return c ? b : null;
      };
      c.$20 = function (a) {
        Object.prototype.hasOwnProperty.call(this.$12, a) || g(0, 1306, a);
        return this.$12[a];
      };
      c.$21 = function (a, b, c) {
        if (((c = this.$6) == null ? void 0 : c.action) === 'THROW') return;
        c = this.$15;
        switch (b) {
          case 'THROW':
            this.$6 = { action: b, field: { path: a, owner: c } };
            return;
          case 'LOG':
            this.$6 == null
              ? (this.$6 = { action: b, fields: [{ path: a, owner: c }] })
              : (this.$6 = {
                  action: b,
                  fields: [].concat(this.$6.fields, [{ path: a, owner: c }]),
                });
            return;
          default:
            b;
        }
      };
      c.$19 = function (a, c, d) {
        for (var e = 0; e < a.length; e++) {
          var f = a[e];
          switch (f.kind) {
            case y:
              var h = this.$22(f, c, d);
              if (h == null) {
                h = f.action;
                h !== 'NONE' && this.$21(f.path, h, c);
                return !1;
              }
              break;
            case z:
              this.$23(f, c, d);
              break;
            case u:
              f.plural ? this.$24(f, c, d) : this.$25(f, c, d);
              break;
            case o:
              h = Boolean(this.$20(f.condition));
              if (h === f.passingValue) {
                h = this.$19(f.selections, c, d);
                if (!h) return !1;
              }
              break;
            case t:
              if (this.$26(f, c, d) === !1) return !1;
              break;
            case w:
            case x:
              if (
                !b('relay-runtime/util/RelayFeatureFlags')
                  .ENABLE_RELAY_RESOLVERS
              )
                throw new Error('Relay Resolver fields are not yet supported.');
              this.$27(f, c, d);
              break;
            case r:
              this.$28(f, c, d);
              break;
            case j:
              d[f.name] = this.$29(f, c);
              break;
            case k:
              h = this.$26(f.fragment, c, {});
              h === !1 && (h = null);
              d[f.name] = h;
              break;
            case v:
              this.$30(f, c, d);
              break;
            case s:
              this.$31(f, c, d);
              break;
            case p:
            case n:
              h = this.$2;
              var B = this.$3.length;
              b('relay-runtime/util/RelayFeatureFlags').ENABLE_CLIENT_EDGES &&
                this.$1.push(null);
              var C = this.$19(f.selections, c, d);
              this.$2 = h || this.$3.length > B || this.$4.length > 0;
              b('relay-runtime/util/RelayFeatureFlags').ENABLE_CLIENT_EDGES &&
                this.$1.pop();
              if (!C) return !1;
              break;
            case A:
              h = this.$19(f.selections, c, d);
              if (!h) return !1;
              break;
            case q:
              if (
                b('relay-runtime/util/RelayFeatureFlags')
                  .ENABLE_REACT_FLIGHT_COMPONENT_FIELD
              )
                this.$32(f, c, d);
              else throw new Error('Flight fields are not yet supported.');
              break;
            case i:
              this.$33(f, c, d);
              break;
            case l:
            case m:
              if (b('relay-runtime/util/RelayFeatureFlags').ENABLE_CLIENT_EDGES)
                this.$34(f, c, d);
              else throw new Error('Client edges are not yet supported.');
              break;
            default:
              f, g(0, 1307, f.kind);
          }
        }
        return !0;
      };
      c.$22 = function (a, c, d) {
        switch (a.field.kind) {
          case z:
            return this.$23(a.field, c, d);
          case u:
            if (a.field.plural) return this.$24(a.field, c, d);
            else return this.$25(a.field, c, d);
          case x:
            if (
              !b('relay-runtime/util/RelayFeatureFlags').ENABLE_RELAY_RESOLVERS
            )
              throw new Error('Relay Resolver fields are not yet supported.');
            return this.$27(a.field, c, d);
          case w:
            if (
              !b('relay-runtime/util/RelayFeatureFlags').ENABLE_RELAY_RESOLVERS
            )
              throw new Error('Relay Resolver fields are not yet supported.');
            return this.$27(a.field, c, d);
          case l:
          case m:
            if (
              !b('relay-runtime/util/RelayFeatureFlags').ENABLE_RELAY_RESOLVERS
            )
              throw new Error('Relay Resolver fields are not yet supported.');
            return this.$34(a.field, c, d);
          default:
            a.field.kind, g(0, 1307, a.kind);
        }
      };
      c.$27 = function (a, c, d) {
        var e = this,
          f = a.fragment,
          g = (h || (h = b('relay-runtime/store/RelayModernRecord'))).getDataID(
            c,
          ),
          i,
          j = function (a) {
            if (i != null)
              return { data: i.data, isMissingData: i.isMissingData };
            i = S(e.$8, a, e.$13);
            return { data: i.data, isMissingData: i.isMissingData };
          };
        c = function () {
          if (f != null) {
            var b,
              c = {
                __id: g,
                __fragmentOwner: e.$7,
                __fragments:
                  ((b = {}), (b[f.name] = f.args ? L(f.args, e.$12) : {}), b),
              };
            b = { getDataForResolverFragment: j };
            return Q(b, function () {
              var d = U(a, e.$12, c, e.$15),
                b = d[0];
              d = d[1];
              return { resolverResult: b, snapshot: i, error: d };
            });
          } else {
            b = U(a, e.$12, null, e.$15);
            var d = b[0];
            b = b[1];
            return { resolverResult: d, snapshot: void 0, error: b };
          }
        };
        c = this.$13.readFromCacheOrEvaluate(g, a, this.$12, c, j);
        var k = c[0],
          l = c[1],
          m = c[2],
          n = c[3],
          o = c[4];
        c = c[5];
        if (n != null) {
          n.missingRequiredFields != null && this.$35(n.missingRequiredFields);
          if (n.missingClientEdges != null)
            for (
              var p = n.missingClientEdges,
                q = Array.isArray(p),
                r = 0,
                p = q
                  ? p
                  : p[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var s;
              if (q) {
                if (r >= p.length) break;
                s = p[r++];
              } else {
                r = p.next();
                if (r.done) break;
                s = r.value;
              }
              s = s;
              this.$3.push(s);
            }
          if (n.missingLiveResolverFields != null) {
            this.$2 = this.$2 || n.missingLiveResolverFields.length > 0;
            for (
              s = n.missingLiveResolverFields,
                r = Array.isArray(s),
                q = 0,
                s = r
                  ? s
                  : s[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              if (r) {
                if (q >= s.length) break;
                p = s[q++];
              } else {
                q = s.next();
                if (q.done) break;
                p = q.value;
              }
              p = p;
              this.$4.push(p);
            }
          }
          for (
            p = n.relayResolverErrors,
              q = Array.isArray(p),
              r = 0,
              p = q
                ? p
                : p[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            if (q) {
              if (r >= p.length) break;
              s = p[r++];
            } else {
              r = p.next();
              if (r.done) break;
              s = r.value;
            }
            s = s;
            this.$14.push(s);
          }
          this.$2 = this.$2 || n.isMissingData;
        }
        m && this.$14.push(m);
        l != null && this.$9.add(l);
        o != null &&
          ((this.$2 = !0),
          this.$4.push({ path: this.$15 + '.' + a.path, liveStateID: o }));
        if (c != null)
          for (
            s = c,
              r = Array.isArray(s),
              q = 0,
              s = r
                ? s
                : s[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            if (r) {
              if (q >= s.length) break;
              p = s[q++];
            } else {
              q = s.next();
              if (q.done) break;
              p = q.value;
            }
            n = p;
            this.$10.add(n);
          }
        l = (m = a.alias) != null ? m : a.name;
        d[l] = k;
        return k;
      };
      c.$34 = function (a, c, d) {
        var e,
          f = this,
          i = a.backingField;
        i.kind !== 'ClientExtension' || g(0, 56148);
        e = (e = i.alias) != null ? e : i.name;
        var j = {};
        this.$19([i], c, j);
        j = j[e];
        if (j == null || B(j)) {
          d[e] = j;
          return;
        }
        a.linkedField.plural
          ? Array.isArray(j) || g(0, 60676)
          : typeof j === 'string' || g(0, 60674);
        if (a.kind === l) {
          if (i.normalizationInfo == null) {
            var k = a.concreteType;
            k != null || g(0, 66882);
            a.linkedField.plural
              ? (j = j.map(function (a) {
                  return f.$13.ensureClientRecord(a, k);
                }))
              : (j = this.$13.ensureClientRecord(j, k));
          }
          this.$1.push(null);
        } else
          a.linkedField.plural && g(0, 60675),
            this.$1.push({ readerClientEdge: a, clientEdgeDestinationID: j });
        if (a.linkedField.plural) d[e] = this.$36(a.linkedField, j, c, d);
        else {
          i = d[e];
          i == null ||
            typeof i === 'object' ||
            g(
              0,
              1308,
              e,
              (h || (h = b('relay-runtime/store/RelayModernRecord'))).getDataID(
                c,
              ),
              i,
            );
          d[e] = this.$17(a.linkedField, j, i);
        }
        this.$1.pop();
      };
      c.$32 = function (a, c, d) {
        var e;
        e = (e = a.alias) != null ? e : a.name;
        a = N(a, this.$12);
        c = (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).getLinkedRecordID(c, a);
        if (c == null) {
          d[e] = c;
          c === void 0 && this.$18();
          return c;
        }
        a = this.$8.get(c);
        this.$9.add(c);
        if (a == null) {
          d[e] = a;
          a === void 0 && this.$18();
          return a;
        }
        c = C(a);
        d[e] = c;
        return c;
      };
      c.$23 = function (a, c, d) {
        var e;
        e = (e = a.alias) != null ? e : a.name;
        a = N(a, this.$12);
        c = (h || (h = b('relay-runtime/store/RelayModernRecord'))).getValue(
          c,
          a,
        );
        c === void 0 && this.$18();
        d[e] = c;
        return c;
      };
      c.$25 = function (a, c, d) {
        var e;
        e = (e = a.alias) != null ? e : a.name;
        var f = N(a, this.$12);
        f = (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).getLinkedRecordID(c, f);
        if (f == null) {
          d[e] = f;
          f === void 0 && this.$18();
          return f;
        }
        var i = d[e];
        i == null ||
          typeof i === 'object' ||
          g(
            0,
            1308,
            e,
            (h || (h = b('relay-runtime/store/RelayModernRecord'))).getDataID(
              c,
            ),
            i,
          );
        c = this.$17(a, f, i);
        d[e] = c;
        return c;
      };
      c.$33 = function (a, c, d) {
        var e;
        e = (e = a.alias) != null ? e : a.name;
        var f = N(a, this.$12);
        c = (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).getActorLinkedRecordID(c, f);
        if (c == null) {
          d[e] = c;
          c === void 0 && this.$18();
          return d[e];
        }
        f = c[0];
        c = c[1];
        var g = {};
        this.$28(a.fragmentSpread, { __id: c }, g);
        d[e] = { __fragmentRef: g, __viewer: f };
        return d[e];
      };
      c.$24 = function (a, c, d) {
        var e = N(a, this.$12);
        e = (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).getLinkedRecordIDs(c, e);
        return this.$36(a, e, c, d);
      };
      c.$36 = function (a, c, d, e) {
        var f,
          i = this,
          j = (f = a.alias) != null ? f : a.name;
        if (c == null) {
          e[j] = c;
          c === void 0 && this.$18();
          return c;
        }
        f = e[j];
        f == null ||
          Array.isArray(f) ||
          g(
            0,
            1309,
            j,
            (h || (h = b('relay-runtime/store/RelayModernRecord'))).getDataID(
              d,
            ),
            f,
          );
        var k = f || [];
        c.forEach(function (c, e) {
          if (c == null) {
            c === void 0 && i.$18();
            k[e] = c;
            return;
          }
          var f = k[e];
          f == null ||
            typeof f === 'object' ||
            g(
              0,
              1308,
              j,
              (h || (h = b('relay-runtime/store/RelayModernRecord'))).getDataID(
                d,
              ),
              f,
            );
          k[e] = i.$17(a, c, f);
        });
        e[j] = k;
        return k;
      };
      c.$30 = function (a, c, d) {
        var e = M(a.documentName);
        e = (h || (h = b('relay-runtime/store/RelayModernRecord'))).getValue(
          c,
          e,
        );
        if (e == null) {
          e === void 0 && this.$18();
          return;
        }
        this.$28(
          { kind: 'FragmentSpread', name: a.fragmentName, args: a.args },
          c,
          d,
        );
        d[F] = a.fragmentPropName;
        d[J] = e;
      };
      c.$29 = function (a, c) {
        var d = a.abstractKey;
        if (d == null) {
          var e = (
            h || (h = b('relay-runtime/store/RelayModernRecord'))
          ).getType(c);
          if (e == null || e !== a.type) return null;
        } else {
          e = this.$16(c, d);
          if (e === !1) return null;
          else if (e == null) {
            this.$18();
            return void 0;
          }
        }
        d = {};
        this.$28(a.fragment, c, d);
        return d;
      };
      c.$26 = function (a, c, d) {
        var e = a.abstractKey;
        if (e == null) {
          var f = (
            h || (h = b('relay-runtime/store/RelayModernRecord'))
          ).getType(c);
          if (f == null || f !== a.type) return null;
          else {
            f = this.$19(a.selections, c, d);
            if (!f) return !1;
          }
        } else {
          f = this.$16(c, e);
          e = this.$2;
          var g = this.$5;
          this.$5 = g || f === !1;
          this.$19(a.selections, c, d);
          this.$5 = g;
          if (f === !1) {
            this.$2 = e;
            return void 0;
          } else if (f == null) {
            this.$18();
            return null;
          }
        }
        return d;
      };
      c.$28 = function (a, c, d) {
        var e = d[G];
        e == null && (e = d[G] = {});
        (typeof e === 'object' && e != null) || g(0, 1310, e);
        d[H] == null &&
          (d[H] = (
            h || (h = b('relay-runtime/store/RelayModernRecord'))
          ).getDataID(c));
        e[a.name] = a.args ? L(a.args, this.$12) : {};
        d[E] = this.$7;
        d[I] = this.$5;
        b('relay-runtime/util/RelayFeatureFlags').ENABLE_CLIENT_EDGES &&
          this.$1.length > 0 &&
          this.$1[this.$1.length - 1] !== null &&
          (d[D] = [].concat(this.$1));
      };
      c.$31 = function (a, c, d) {
        var e = d[G];
        e == null && (e = d[G] = {});
        (typeof e === 'object' && e != null) || g(0, 1310, e);
        d[H] == null &&
          (d[H] = (
            h || (h = b('relay-runtime/store/RelayModernRecord'))
          ).getDataID(c));
        d = {};
        var f = this.$15;
        this.$15 = a.name;
        var i = this.$12,
          j = a.args ? L(a.args, this.$12) : {};
        this.$12 = b(
          'relay-runtime/store/RelayConcreteVariables',
        ).getFragmentVariables(a, this.$7.variables, j);
        this.$19(a.selections, c, d);
        this.$12 = i;
        this.$15 = f;
        e[a.name] = d;
      };
      c.$35 = function (a) {
        if (this.$6 == null) {
          this.$6 = a;
          return;
        }
        if (this.$6.action === 'THROW') return;
        if (a.action === 'THROW') {
          this.$6 = a;
          return;
        }
        this.$6 = {
          action: 'LOG',
          fields: [].concat(this.$6.fields, a.fields),
        };
      };
      c.$16 = function (a, c) {
        a = (h || (h = b('relay-runtime/store/RelayModernRecord'))).getType(a);
        a = this.$8.get(R(a));
        a =
          a != null
            ? (h || (h = b('relay-runtime/store/RelayModernRecord'))).getValue(
                a,
                c,
              )
            : null;
        return a;
      };
      return a;
    })();
    function U(a, b, c, d) {
      var e =
          typeof a.resolverModule === 'function'
            ? a.resolverModule
            : a.resolverModule['default'],
        f = null,
        g = null;
      try {
        var h = [];
        a.fragment != null && h.push(c);
        c = a.args ? L(a.args, b) : void 0;
        h.push(c);
        f = e.apply(null, h);
      } catch (e) {
        if (e === P) f = void 0;
        else {
          c = (b = a.path) != null ? b : '[UNKNOWN]';
          g = { field: { path: c, owner: d }, error: e };
        }
      }
      return [f, g];
    }
    e.exports = { read: S };
  },
  null,
);
