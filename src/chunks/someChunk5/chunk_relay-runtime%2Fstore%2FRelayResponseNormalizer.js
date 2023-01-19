__d(
  'relay-runtime/store/RelayResponseNormalizer',
  [
    'invariant',
    'areEqual',
    'relay-runtime/multi-actor-environment/ActorUtils',
    'relay-runtime/store/ClientID',
    'relay-runtime/store/RelayConcreteVariables',
    'relay-runtime/store/RelayModernRecord',
    'relay-runtime/store/RelayModernSelector',
    'relay-runtime/store/RelayStoreReactFlightUtils',
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/store/TypeID',
    'relay-runtime/util/RelayConcreteNode',
    'relay-runtime/util/RelayFeatureFlags',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h, i;
    c = b(
      'relay-runtime/multi-actor-environment/ActorUtils',
    ).ACTOR_IDENTIFIER_FIELD_NAME;
    var j = b(
        'relay-runtime/multi-actor-environment/ActorUtils',
      ).getActorIdentifierFromPayload,
      k = (d = b('relay-runtime/util/RelayConcreteNode')).ACTOR_CHANGE,
      l = d.CLIENT_COMPONENT,
      m = d.CLIENT_EXTENSION,
      n = d.CONDITION,
      o = d.DEFER,
      p = d.FLIGHT_FIELD,
      q = d.FRAGMENT_SPREAD,
      r = d.INLINE_FRAGMENT,
      s = d.LINKED_FIELD,
      t = d.LINKED_HANDLE,
      u = d.MODULE_IMPORT,
      v = d.RELAY_RESOLVER,
      w = d.SCALAR_FIELD,
      x = d.SCALAR_HANDLE,
      y = d.STREAM,
      z = d.TYPE_DISCRIMINATOR,
      A = b('relay-runtime/store/ClientID').generateClientID,
      B = b('relay-runtime/store/ClientID').isClientID,
      C = b('relay-runtime/store/RelayConcreteVariables').getLocalVariables,
      D = b(
        'relay-runtime/store/RelayModernSelector',
      ).createNormalizationSelector,
      E = (f = b('relay-runtime/store/RelayStoreReactFlightUtils'))
        .REACT_FLIGHT_EXECUTABLE_DEFINITIONS_STORAGE_KEY,
      F = f.REACT_FLIGHT_TREE_STORAGE_KEY,
      G = f.REACT_FLIGHT_TYPE_NAME,
      H = f.refineToReactFlightPayloadData,
      I = (c = b('relay-runtime/store/RelayStoreUtils')).ROOT_ID,
      J = c.ROOT_TYPE,
      K = c.TYPENAME_KEY,
      L = c.getArgumentValues,
      M = c.getHandleStorageKey,
      N = c.getModuleComponentKey,
      O = c.getModuleOperationKey,
      P = c.getStorageKey,
      Q = b('relay-runtime/store/TypeID').TYPE_SCHEMA_TYPE,
      R = b('relay-runtime/store/TypeID').generateTypeID;
    function a(a, b, c, d) {
      var e = b.dataID,
        f = b.node;
      b = b.variables;
      a = new S(a, b, d);
      return a.normalizeResponse(f, e, c);
    }
    var S = (function () {
      function a(a, b, c) {
        (this.$1 = c.actorIdentifier),
          (this.$2 = c.getDataID),
          (this.$3 = []),
          (this.$4 = c.treatMissingFieldsAsNull),
          (this.$5 = []),
          (this.$6 = !1),
          (this.$7 = !1),
          (this.$8 = []),
          (this.$9 = c.path ? [].concat(c.path) : []),
          (this.$10 = a),
          (this.$11 = b),
          (this.$12 = c.reactFlightPayloadDeserializer),
          (this.$13 = c.reactFlightServerErrorHandler),
          (this.$14 = c.shouldProcessClientComponents);
      }
      var c = a.prototype;
      c.normalizeResponse = function (a, b, c) {
        var d = this.$10.get(b);
        d || g(0, 3565, b);
        this.$15(a);
        this.$16(a, d, c);
        return {
          errors: null,
          fieldPayloads: this.$3,
          incrementalPlaceholders: this.$5,
          followupPayloads: this.$8,
          source: this.$10,
          isFinal: !1,
        };
      };
      c.$15 = function (a) {
        a = a.clientAbstractTypes;
        if (a != null) {
          var c = Object.keys(a);
          for (var d = 0; d < c.length; d++) {
            var e = c[d];
            for (
              var f = a[e],
                g = Array.isArray(f),
                i = 0,
                f = g
                  ? f
                  : f[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var j;
              if (g) {
                if (i >= f.length) break;
                j = f[i++];
              } else {
                i = f.next();
                if (i.done) break;
                j = i.value;
              }
              j = j;
              j = R(j);
              var k = this.$10.get(j);
              k == null &&
                ((k = (
                  h || (h = b('relay-runtime/store/RelayModernRecord'))
                ).create(j, Q)),
                this.$10.set(j, k));
              (h || (h = b('relay-runtime/store/RelayModernRecord'))).setValue(
                k,
                e,
                !0,
              );
            }
          }
        }
      };
      c.$17 = function (a) {
        Object.prototype.hasOwnProperty.call(this.$11, a) || g(0, 3566, a);
        return this.$11[a];
      };
      c.$18 = function (a) {
        var b = a[K];
        b != null || g(0, 3567, JSON.stringify(a, null, 2));
        return b;
      };
      c.$16 = function (a, c, d) {
        for (var e = 0; e < a.selections.length; e++) {
          var f = a.selections[e];
          switch (f.kind) {
            case w:
            case s:
              this.$19(a, f, c, d);
              break;
            case n:
              var i = Boolean(this.$17(f.condition));
              i === f.passingValue && this.$16(f, c, d);
              break;
            case q:
              i = this.$11;
              this.$11 = C(this.$11, f.fragment.argumentDefinitions, f.args);
              this.$16(f.fragment, c, d);
              this.$11 = i;
              break;
            case r:
              i = f.abstractKey;
              if (i == null) {
                var j = (
                  h || (h = b('relay-runtime/store/RelayModernRecord'))
                ).getType(c);
                j === f.type && this.$16(f, c, d);
              } else {
                j = Object.prototype.hasOwnProperty.call(d, i);
                var A = (
                  h || (h = b('relay-runtime/store/RelayModernRecord'))
                ).getType(c);
                A = R(A);
                var B = this.$10.get(A);
                B == null &&
                  ((B = (
                    h || (h = b('relay-runtime/store/RelayModernRecord'))
                  ).create(A, Q)),
                  this.$10.set(A, B));
                h.setValue(B, i, j);
                j && this.$16(f, c, d);
              }
              break;
            case z:
              A = f.abstractKey;
              B = Object.prototype.hasOwnProperty.call(d, A);
              i = (
                h || (h = b('relay-runtime/store/RelayModernRecord'))
              ).getType(c);
              j = R(i);
              i = this.$10.get(j);
              i == null &&
                ((i = (
                  h || (h = b('relay-runtime/store/RelayModernRecord'))
                ).create(j, Q)),
                this.$10.set(j, i));
              h.setValue(i, A, B);
              break;
            case t:
            case x:
              j = f.args ? L(f.args, this.$11) : {};
              i = P(f, this.$11);
              A = M(f, this.$11);
              this.$3.push({
                args: j,
                dataID: (
                  h || (h = b('relay-runtime/store/RelayModernRecord'))
                ).getDataID(c),
                fieldKey: i,
                handle: f.handle,
                handleKey: A,
                handleArgs: f.handleArgs ? L(f.handleArgs, this.$11) : {},
              });
              break;
            case u:
              this.$20(a, f, c, d);
              break;
            case o:
              this.$21(f, c, d);
              break;
            case y:
              this.$22(f, c, d);
              break;
            case m:
              B = this.$6;
              this.$6 = !0;
              this.$16(f, c, d);
              this.$6 = B;
              break;
            case l:
              if (this.$14 === !1) break;
              this.$16(f.fragment, c, d);
              break;
            case p:
              if (
                b('relay-runtime/util/RelayFeatureFlags')
                  .ENABLE_REACT_FLIGHT_COMPONENT_FIELD
              )
                this.$23(a, f, c, d);
              else throw new Error('Flight fields are not yet supported.');
              break;
            case k:
              this.$24(a, f, c, d);
              break;
            case v:
              f.fragment != null && this.$16(f.fragment, c, d);
              break;
            default:
              f, g(0, 3569, f.kind);
          }
        }
      };
      c.$21 = function (a, c, d) {
        var e = a['if'] === null || this.$17(a['if']);
        e === !1
          ? this.$16(a, c, d)
          : this.$5.push({
              kind: 'defer',
              data: d,
              label: a.label,
              path: [].concat(this.$9),
              selector: D(
                a,
                (
                  h || (h = b('relay-runtime/store/RelayModernRecord'))
                ).getDataID(c),
                this.$11,
              ),
              typeName: h.getType(c),
              actorIdentifier: this.$1,
            });
      };
      c.$22 = function (a, c, d) {
        this.$16(a, c, d);
        d = a['if'] === null || this.$17(a['if']);
        d === !0 &&
          this.$5.push({
            kind: 'stream',
            label: a.label,
            path: [].concat(this.$9),
            parentID: (
              h || (h = b('relay-runtime/store/RelayModernRecord'))
            ).getDataID(c),
            node: a,
            variables: this.$11,
            actorIdentifier: this.$1,
          });
      };
      c.$20 = function (a, c, d, e) {
        (typeof e === 'object' && e) || g(0, 13641);
        a = (h || (h = b('relay-runtime/store/RelayModernRecord'))).getType(d);
        var f = N(c.documentName),
          i = c.componentModuleProvider || e[f];
        h.setValue(d, f, (f = i) != null ? f : null);
        i = O(c.documentName);
        f = c.operationModuleProvider || e[i];
        h.setValue(d, i, (i = f) != null ? i : null);
        f != null &&
          this.$8.push({
            kind: 'ModuleImportPayload',
            args: c.args,
            data: e,
            dataID: (
              h || (h = b('relay-runtime/store/RelayModernRecord'))
            ).getDataID(d),
            operationReference: f,
            path: [].concat(this.$9),
            typeName: a,
            variables: this.$11,
            actorIdentifier: this.$1,
          });
      };
      c.$19 = function (a, c, d, e) {
        (typeof e === 'object' && e) || g(0, 3570, c.name);
        a = c.alias || c.name;
        var f = P(c, this.$11);
        e = e[a];
        if (e == null) {
          if (e === void 0) {
            var i = this.$6 || this.$7;
            if (i) return;
            else if (!this.$4) return;
          }
          (h || (h = b('relay-runtime/store/RelayModernRecord'))).setValue(
            d,
            f,
            null,
          );
          return;
        }
        c.kind === w
          ? (h || (h = b('relay-runtime/store/RelayModernRecord'))).setValue(
              d,
              f,
              e,
            )
          : c.kind === s
          ? (this.$9.push(a),
            c.plural ? this.$26(c, d, f, e) : this.$27(c, d, f, e),
            this.$9.pop())
          : (c, g(0, 11863, c.kind));
      };
      c.$24 = function (a, c, d, e) {
        var f;
        a = c.linkedField;
        (typeof e === 'object' && e) || g(0, 45628, a.name);
        c = a.alias || a.name;
        var i = P(a, this.$11);
        e = e[c];
        if (e == null) {
          if (e === void 0) {
            var k = this.$6 || this.$7;
            if (k) return;
            else if (!this.$4) return;
          }
          (h || (h = b('relay-runtime/store/RelayModernRecord'))).setValue(
            d,
            i,
            null,
          );
          return;
        }
        k = j(e);
        if (k == null) {
          (h || (h = b('relay-runtime/store/RelayModernRecord'))).setValue(
            d,
            i,
            null,
          );
          return;
        }
        f = (f = a.concreteType) != null ? f : this.$18(e);
        var l =
          this.$2(e, f) ||
          (
            h || (h = b('relay-runtime/store/RelayModernRecord'))
          ).getLinkedRecordID(d, i) ||
          A(
            (h || (h = b('relay-runtime/store/RelayModernRecord'))).getDataID(
              d,
            ),
            i,
          );
        typeof l === 'string' || g(0, 3572, i);
        (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).setActorLinkedRecordID(d, i, k, l);
        this.$8.push({
          kind: 'ActorPayload',
          data: e,
          dataID: l,
          path: [].concat(this.$9, [c]),
          typeName: f,
          variables: this.$11,
          node: a,
          actorIdentifier: k,
        });
      };
      c.$23 = function (a, c, d, e) {
        a = c.alias || c.name;
        var f = P(c, this.$11);
        e = e[a];
        if (e == null) {
          if (e === void 0)
            if (this.$7) return;
            else this.$4 || g(0, 45690, a, f);
          (h || (h = b('relay-runtime/store/RelayModernRecord'))).setValue(
            d,
            f,
            null,
          );
          return;
        }
        var i = H(e),
          j = this.$12;
        i != null || g(0, 34129, e);
        typeof j === 'function' || g(0, 23734, j);
        i.errors.length > 0 &&
          (typeof this.$13 === 'function'
            ? this.$13(i.status, i.errors)
            : b('warning')(
                !1,
                'RelayResponseNormalizer: Received server errors for field `%s`.\n\n%s\n%s',
                a,
                i.errors[0].message,
                i.errors[0].stack,
              ));
        e = A(
          (h || (h = b('relay-runtime/store/RelayModernRecord'))).getDataID(d),
          P(c, this.$11),
        );
        a = this.$10.get(e);
        a == null &&
          ((a = (h || (h = b('relay-runtime/store/RelayModernRecord'))).create(
            e,
            G,
          )),
          this.$10.set(e, a));
        if (i.tree == null) {
          b('warning')(
            !1,
            'RelayResponseNormalizer: Expected `tree` not to be null. This typically indicates that a fatal server error prevented any Server Component rows from being written.',
          );
          (h || (h = b('relay-runtime/store/RelayModernRecord'))).setValue(
            a,
            F,
            null,
          );
          h.setValue(a, E, []);
          h.setLinkedRecordID(d, f, e);
          return;
        }
        c = j(i.tree);
        h.setValue(a, F, c);
        j = [];
        for (
          var c = i.queries,
            k = Array.isArray(c),
            l = 0,
            c = k
              ? c
              : c[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var m;
          if (k) {
            if (l >= c.length) break;
            m = c[l++];
          } else {
            l = c.next();
            if (l.done) break;
            m = l.value;
          }
          m = m;
          m.response.data != null &&
            this.$8.push({
              kind: 'ModuleImportPayload',
              args: null,
              data: m.response.data,
              dataID: I,
              operationReference: m.module,
              path: [],
              typeName: J,
              variables: m.variables,
              actorIdentifier: this.$1,
            });
          j.push({ module: m.module, variables: m.variables });
        }
        for (
          m = i.fragments,
            l = Array.isArray(m),
            k = 0,
            m = l
              ? m
              : m[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (l) {
            if (k >= m.length) break;
            c = m[k++];
          } else {
            k = m.next();
            if (k.done) break;
            c = k.value;
          }
          i = c;
          i.response.data != null &&
            this.$8.push({
              kind: 'ModuleImportPayload',
              args: null,
              data: i.response.data,
              dataID: i.__id,
              operationReference: i.module,
              path: [],
              typeName: i.__typename,
              variables: i.variables,
              actorIdentifier: this.$1,
            });
          j.push({ module: i.module, variables: i.variables });
        }
        h.setValue(a, E, j);
        h.setLinkedRecordID(d, f, e);
      };
      c.$27 = function (a, c, d, e) {
        var f;
        (typeof e === 'object' && e) || g(0, 3571, d);
        f =
          this.$2(e, (f = a.concreteType) != null ? f : this.$18(e)) ||
          (
            h || (h = b('relay-runtime/store/RelayModernRecord'))
          ).getLinkedRecordID(c, d) ||
          A(
            (h || (h = b('relay-runtime/store/RelayModernRecord'))).getDataID(
              c,
            ),
            d,
          );
        typeof f === 'string' || g(0, 3572, d);
        (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).setLinkedRecordID(c, d, f);
        c = this.$10.get(f);
        if (!c) {
          d = a.concreteType || this.$18(e);
          c = (h || (h = b('relay-runtime/store/RelayModernRecord'))).create(
            f,
            d,
          );
          this.$10.set(f, c);
        }
        this.$16(a, c, e);
      };
      c.$26 = function (a, c, d, e) {
        var f = this;
        Array.isArray(e) || g(0, 3573, d);
        var i = (
            h || (h = b('relay-runtime/store/RelayModernRecord'))
          ).getLinkedRecordIDs(c, d),
          j = [];
        e.forEach(function (e, k) {
          var l;
          if (e == null) {
            j.push(e);
            return;
          }
          f.$9.push(String(k));
          typeof e === 'object' || g(0, 3574, d);
          l =
            f.$2(e, (l = a.concreteType) != null ? l : f.$18(e)) ||
            (i && i[k]) ||
            A(
              (h || (h = b('relay-runtime/store/RelayModernRecord'))).getDataID(
                c,
              ),
              d,
              k,
            );
          typeof l === 'string' || g(0, 3575, d);
          j.push(l);
          k = f.$10.get(l);
          if (!k) {
            var m = a.concreteType || f.$18(e);
            k = (h || (h = b('relay-runtime/store/RelayModernRecord'))).create(
              l,
              m,
            );
            f.$10.set(l, k);
          }
          f.$16(a, k, e);
          f.$9.pop();
        });
        h.setLinkedRecordIDs(c, d, j);
      };
      c.$29 = function (a, c, d) {
        c = (c = c.concreteType) != null ? c : this.$18(d);
        d = (h || (h = b('relay-runtime/store/RelayModernRecord'))).getDataID(
          a,
        );
        b('warning')(
          (B(d) && d !== I) ||
            (h || (h = b('relay-runtime/store/RelayModernRecord'))).getType(
              a,
            ) === c,
          'RelayResponseNormalizer: Invalid record `%s`. Expected %s to be consistent, but the record was assigned conflicting types `%s` and `%s`. The GraphQL server likely violated the globally unique id requirement by returning the same id for different objects.',
          d,
          K,
          h.getType(a),
          c,
        );
      };
      c.$25 = function (a, b, c) {};
      c.$28 = function (a, b, c, d) {};
      return a;
    })();
    e.exports = { normalize: a };
  },
  null,
);
