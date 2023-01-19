__d(
  'relay-runtime/store/OperationExecutor',
  [
    'invariant',
    'Promise',
    'relay-runtime/network/RelayObservable',
    'relay-runtime/store/ClientID',
    'relay-runtime/store/RelayConcreteVariables',
    'relay-runtime/store/RelayModernRecord',
    'relay-runtime/store/RelayModernSelector',
    'relay-runtime/store/RelayRecordSource',
    'relay-runtime/store/RelayResponseNormalizer',
    'relay-runtime/store/RelayStoreUtils',
    'relay-runtime/util/RelayError',
    'relay-runtime/util/RelayFeatureFlags',
    'relay-runtime/util/generateID',
    'relay-runtime/util/getOperation',
    'relay-runtime/util/stableCopy',
    'relay-runtime/util/withDuration',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j = b('relay-runtime/store/ClientID').generateClientID,
      k = b('relay-runtime/store/ClientID').generateUniqueClientID,
      l = b('relay-runtime/store/RelayConcreteVariables').getLocalVariables,
      m = b(
        'relay-runtime/store/RelayModernSelector',
      ).createNormalizationSelector,
      n = b('relay-runtime/store/RelayModernSelector').createReaderSelector,
      o = b('relay-runtime/store/RelayStoreUtils').ROOT_TYPE,
      p = b('relay-runtime/store/RelayStoreUtils').TYPENAME_KEY,
      q = b('relay-runtime/store/RelayStoreUtils').getStorageKey;
    function a(a) {
      return new r(a);
    }
    var r = (function () {
      function a(a) {
        var c = this,
          d = a.actorIdentifier,
          e = a.getDataID,
          f = a.getPublishQueue,
          h = a.getStore,
          i = a.isClientPayload,
          j = a.operation,
          k = a.operationExecutions,
          l = a.operationLoader,
          m = a.operationTracker,
          n = a.optimisticConfig,
          o = a.reactFlightPayloadDeserializer,
          p = a.reactFlightServerErrorHandler,
          q = a.scheduler,
          r = a.shouldProcessClientComponents,
          s = a.sink,
          t = a.source,
          u = a.treatMissingFieldsAsNull,
          v = a.updater;
        a = a.log;
        this.$42 = function (a) {
          var d = c.$17;
          typeof d === 'function' || g(0, 45571);
          var e = b('relay-runtime/util/withDuration')(function () {
              return d(a);
            }),
            f = e[0];
          e = e[1];
          c.$6({
            name: 'execute.flight.payload_deserialize',
            executeId: c.$7,
            operationName: c.$9.request.node.params.name,
            duration: f,
          });
          return e;
        };
        this.$1 = d;
        this.$2 = e;
        this.$3 = u;
        this.$4 = !1;
        this.$5 = new Map();
        this.$6 = a;
        this.$7 = b('relay-runtime/util/generateID')();
        this.$8 = 0;
        this.$9 = j;
        this.$10 = k;
        this.$11 = l;
        this.$12 = m;
        this.$13 = new Map();
        this.$14 = null;
        this.$15 = 0;
        this.$16 = f;
        this.$20 = q;
        this.$21 = s;
        this.$22 = new Map();
        this.$23 = 'started';
        this.$24 = h;
        this.$25 = new Map();
        this.$26 = v;
        this.$30 = i === !0;
        this.$17 = o;
        this.$18 = p;
        this.$31 = this.$9.request.node.params.operationKind === 'subscription';
        this.$19 = r;
        this.$29 = new Map();
        this.$32 = new Set();
        this.$28 = [];
        var w = this.$8++;
        t.subscribe({
          complete: function () {
            return c.$33(w);
          },
          error: function (a) {
            return c.$34(a);
          },
          next: function (a) {
            try {
              c.$35(w, a);
            } catch (a) {
              s.error(a);
            }
          },
          start: function (a) {
            c.$36(w, a);
            c.$6({
              name: 'execute.start',
              executeId: c.$7,
              params: c.$9.request.node.params,
              variables: c.$9.request.variables,
              cacheConfig: (a = c.$9.request.cacheConfig) != null ? a : {},
            });
          },
        });
        n != null &&
          this.$37(
            n.response != null ? { data: n.response } : null,
            n.updater,
            !1,
          );
      }
      var c = a.prototype;
      c.cancel = function () {
        var a = this;
        if (this.$23 === 'completed') return;
        this.$23 = 'completed';
        this.$10['delete'](this.$9.request.identifier);
        this.$25.size !== 0 &&
          (this.$25.forEach(function (a) {
            return a.unsubscribe();
          }),
          this.$25.clear());
        var b = this.$14;
        b !== null &&
          ((this.$14 = null),
          b.forEach(function (b) {
            return a.$38().revertUpdate(b);
          }),
          this.$39());
        this.$5.clear();
        this.$27 != null && (this.$27.dispose(), (this.$27 = null));
        this.$28 = [];
        this.$40();
        this.$41();
      };
      c.$43 = function () {
        var a;
        switch (this.$23) {
          case 'started':
            a = 'active';
            break;
          case 'loading_incremental':
            a = 'active';
            break;
          case 'completed':
            a = 'inactive';
            break;
          case 'loading_final':
            a = this.$15 > 0 ? 'active' : 'inactive';
            break;
          default:
            this.$23, g(0, 42915);
        }
        this.$10.set(this.$9.request.identifier, a);
      };
      c.$44 = function (a) {
        var c = this,
          d = this.$20;
        if (d != null) {
          var e = this.$8++;
          b('relay-runtime/network/RelayObservable')
            .create(function (b) {
              var c = d.schedule(function () {
                try {
                  a(), b.complete();
                } catch (a) {
                  b.error(a);
                }
              });
              return function () {
                return d.cancel(c);
              };
            })
            .subscribe({
              complete: function () {
                return c.$33(e);
              },
              error: function (a) {
                return c.$34(a);
              },
              start: function (a) {
                return c.$36(e, a);
              },
            });
        } else a();
      };
      c.$33 = function (a) {
        this.$25['delete'](a),
          this.$25.size === 0 &&
            (this.cancel(),
            this.$21.complete(),
            this.$6({ name: 'execute.complete', executeId: this.$7 }));
      };
      c.$34 = function (a) {
        this.cancel(),
          this.$21.error(a),
          this.$6({ name: 'execute.error', executeId: this.$7, error: a });
      };
      c.$36 = function (a, b) {
        this.$25.set(a, b), this.$43();
      };
      c.$35 = function (a, c) {
        var d = this;
        this.$44(function () {
          var a = b('relay-runtime/util/withDuration')(function () {
            d.$45(c), d.$46();
          });
          a = a[0];
          d.$6({
            name: 'execute.next',
            executeId: d.$7,
            response: c,
            duration: a,
          });
        });
      };
      c.$47 = function (a) {
        var c = this,
          d = [];
        a.forEach(function (a) {
          if (
            a.data === null &&
            a.extensions != null &&
            !Object.prototype.hasOwnProperty.call(a, 'errors')
          )
            return;
          else if (a.data == null) {
            var e =
                Object.prototype.hasOwnProperty.call(a, 'errors') &&
                a.errors != null
                  ? a.errors
                  : null,
              f = e
                ? e
                    .map(function (a) {
                      a = a.message;
                      return a;
                    })
                    .join('\n')
                : '(No errors)';
            f = b('relay-runtime/util/RelayError').create(
              'RelayNetwork',
              'No data returned for operation `' +
                c.$9.request.node.params.name +
                '`, got error(s):\n' +
                f +
                '\n\nSee the error `source` property for more information.',
            );
            f.source = {
              errors: e,
              operation: c.$9.request.node,
              variables: c.$9.request.variables,
            };
            f.stack;
            throw f;
          } else {
            e = a;
            d.push(e);
          }
        });
        return d;
      };
      c.$48 = function (a) {
        var b;
        if (a.length > 1) {
          a.some(function (a) {
            return (
              ((a = a.extensions) == null ? void 0 : a.isOptimistic) === !0
            );
          }) && g(0, 49718);
          return !1;
        }
        a = a[0];
        b = ((b = a.extensions) == null ? void 0 : b.isOptimistic) === !0;
        b && this.$23 !== 'started' && g(0, 42916);
        if (b) {
          this.$37(a, null, this.$3);
          this.$21.next(a);
          return !0;
        }
        return !1;
      };
      c.$45 = function (a) {
        if (this.$23 === 'completed') return;
        this.$32.clear();
        var b = Array.isArray(a) ? a : [a],
          c = this.$47(b);
        if (c.length === 0) {
          b = b.some(function (a) {
            return ((a = a.extensions) == null ? void 0 : a.is_final) === !0;
          });
          b && ((this.$23 = 'loading_final'), this.$43(), (this.$4 = !1));
          this.$21.next(a);
          return;
        }
        b = this.$48(c);
        if (b) return;
        b = s(c);
        var d = b[0];
        b = b[1];
        var e = d.length > 0;
        if (e) {
          if (this.$31) {
            var f = k();
            this.$9 = {
              request: this.$9.request,
              fragment: n(
                this.$9.fragment.node,
                f,
                this.$9.fragment.variables,
                this.$9.fragment.owner,
              ),
              root: m(this.$9.root.node, f, this.$9.root.variables),
            };
          }
          f = this.$49(d);
          this.$50(f);
        }
        if (b.length > 0) {
          d = this.$51(b);
          this.$50(d);
        }
        this.$31 &&
          (c[0].extensions == null
            ? (c[0].extensions = {
                __relay_subscription_root_id: this.$9.fragment.dataID,
              })
            : (c[0].extensions.__relay_subscription_root_id =
                this.$9.fragment.dataID));
        f = this.$39(e ? this.$9 : void 0);
        e && this.$4 && this.$52();
        this.$53(f);
        this.$21.next(a);
      };
      c.$37 = function (a, c, d) {
        var e = this;
        this.$14 === null || g(0, 49719);
        if (a == null && c == null) return;
        var f = [];
        if (a) {
          a = t(a, this.$9.root, o, {
            actorIdentifier: this.$1,
            getDataID: this.$2,
            path: [],
            reactFlightPayloadDeserializer: this.$17 != null ? this.$42 : null,
            reactFlightServerErrorHandler: this.$18,
            shouldProcessClientComponents: this.$19,
            treatMissingFieldsAsNull: d,
          });
          v(a);
          f.push({ operation: this.$9, payload: a, updater: c });
          this.$54(a, f);
        } else
          c &&
            f.push({
              operation: this.$9,
              payload: {
                errors: null,
                fieldPayloads: null,
                incrementalPlaceholders: null,
                followupPayloads: null,
                source: b('relay-runtime/store/RelayRecordSource').create(),
                isFinal: !1,
              },
              updater: c,
            });
        this.$14 = f;
        f.forEach(function (a) {
          return e.$38().applyUpdate(a);
        });
        this.$39();
      };
      c.$54 = function (a, c) {
        if (a.followupPayloads && a.followupPayloads.length) {
          a = a.followupPayloads;
          for (
            var a = a,
              d = Array.isArray(a),
              e = 0,
              a = d
                ? a
                : a[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
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
            switch (f.kind) {
              case 'ModuleImportPayload':
                var h = this.$55();
                h = h.get(f.operationReference);
                if (h == null) this.$56(f);
                else {
                  h = this.$57(h, f);
                  c.push.apply(c, h);
                }
                break;
              case 'ActorPayload':
                b('warning')(
                  !1,
                  'OperationExecutor: Unexpected optimistic ActorPayload. These updates are not supported.',
                );
                break;
              default:
                f, g(0, 49799, f.kind);
            }
          }
        }
      };
      c.$58 = function (a, b) {
        var c;
        b.kind === 'SplitOperation' && a.kind === 'ModuleImportPayload'
          ? (c = l(a.variables, b.argumentDefinitions, a.args))
          : (c = a.variables);
        b = m(b, a.dataID, c);
        return t({ data: a.data }, b, a.typeName, {
          actorIdentifier: this.$1,
          getDataID: this.$2,
          path: a.path,
          reactFlightPayloadDeserializer: this.$17 != null ? this.$42 : null,
          reactFlightServerErrorHandler: this.$18,
          treatMissingFieldsAsNull: this.$3,
          shouldProcessClientComponents: this.$19,
        });
      };
      c.$57 = function (a, c) {
        a = b('relay-runtime/util/getOperation')(a);
        var d = [];
        c = this.$58(c, a);
        v(c);
        d.push({ operation: this.$9, payload: c, updater: null });
        this.$54(c, d);
        return d;
      };
      c.$56 = function (a) {
        var c = this;
        this.$55()
          .load(a.operationReference)
          .then(function (d) {
            if (d == null || c.$23 !== 'started') return;
            d = c.$57(d, a);
            d.forEach(function (a) {
              return c.$38().applyUpdate(a);
            });
            if (c.$14 == null)
              b('warning')(
                !1,
                'OperationExecutor: Unexpected ModuleImport optimistic update in operation %s.' +
                  c.$9.request.node.params.name,
              );
            else {
              var e;
              (e = c.$14).push.apply(e, d);
              c.$39();
            }
          });
      };
      c.$49 = function (a) {
        var b = this;
        this.$14 !== null &&
          (this.$14.forEach(function (a) {
            b.$38().revertUpdate(a);
          }),
          (this.$14 = null));
        this.$4 = !1;
        this.$5.clear();
        this.$22.clear();
        return a.map(function (a) {
          a = t(a, b.$9.root, o, {
            actorIdentifier: b.$1,
            getDataID: b.$2,
            path: [],
            reactFlightPayloadDeserializer: b.$17 != null ? b.$42 : null,
            reactFlightServerErrorHandler: b.$18,
            treatMissingFieldsAsNull: b.$3,
            shouldProcessClientComponents: b.$19,
          });
          b.$38().commitPayload(b.$9, a, b.$26);
          return a;
        });
      };
      c.$50 = function (a) {
        var c = this;
        if (this.$23 === 'completed') return;
        a.forEach(function (a) {
          var d = a.incrementalPlaceholders,
            e = a.followupPayloads,
            f = a.isFinal;
          c.$23 = f ? 'loading_final' : 'loading_incremental';
          c.$43();
          f && (c.$4 = !1);
          e &&
            e.length !== 0 &&
            e.forEach(function (a) {
              var b,
                d = c.$1;
              c.$1 = (b = a.actorIdentifier) != null ? b : c.$1;
              c.$59(a);
              c.$1 = d;
            });
          if (d && d.length !== 0) {
            c.$4 = c.$23 !== 'loading_final';
            d.forEach(function (b) {
              var d,
                e = c.$1;
              c.$1 = (d = b.actorIdentifier) != null ? d : c.$1;
              c.$60(a, b);
              c.$1 = e;
            });
            if (c.$30 || c.$23 === 'loading_final') {
              b('warning')(
                c.$30,
                'RelayModernEnvironment: Operation `%s` contains @defer/@stream directives but was executed in non-streaming mode. See https://fburl.com/relay-incremental-delivery-non-streaming-warning.',
                c.$9.request.node.params.name,
              );
              var g = [];
              d.forEach(function (a) {
                a.kind === 'defer' &&
                  g.push(c.$61(a.label, a.path, a, { data: a.data }));
              });
              g.length > 0 && c.$50(g);
            }
          }
        });
      };
      c.$46 = function () {
        if (!this.$31) return;
        this.$15 === 0 && this.$4 === !1 && this.$40();
      };
      c.$59 = function (a) {
        var c = this;
        switch (a.kind) {
          case 'ModuleImportPayload':
            var d = this.$55(),
              e = d.get(a.operationReference);
            if (e != null) this.$62(a, b('relay-runtime/util/getOperation')(e));
            else {
              var f = this.$8++;
              this.$15++;
              var h = function () {
                  c.$15--, c.$46();
                },
                i = b('relay-runtime/network/RelayObservable').from(
                  new (b('Promise'))(function (b, c) {
                    d.load(a.operationReference).then(b, c);
                  }),
                );
              b('relay-runtime/network/RelayObservable')
                .create(function (d) {
                  var e,
                    f = i.subscribe({
                      next: function (f) {
                        if (f != null) {
                          var g = function () {
                              try {
                                var e = b('relay-runtime/util/getOperation')(f),
                                  g = b(
                                    'relay-runtime/util/RelayFeatureFlags',
                                  ).BATCH_ASYNC_MODULE_UPDATES_FN,
                                  h = g != null && c.$15 > 1,
                                  i = b('relay-runtime/util/withDuration')(
                                    function () {
                                      c.$63(a, e);
                                      if (h) c.$64(g, d.complete);
                                      else {
                                        var b = c.$39();
                                        c.$53(b);
                                      }
                                    },
                                  );
                                i = i[0];
                                c.$6({
                                  name: 'execute.async.module',
                                  executeId: c.$7,
                                  operationName: e.name,
                                  duration: i,
                                });
                                h || d.complete();
                              } catch (a) {
                                d.error(a);
                              }
                            },
                            h = c.$20;
                          h == null ? g() : (e = h.schedule(g));
                        } else d.complete();
                      },
                      error: d.error,
                    });
                  return function () {
                    f.unsubscribe(),
                      c.$20 != null && e != null && c.$20.cancel(e);
                  };
                })
                .subscribe({
                  complete: function () {
                    c.$33(f), h();
                  },
                  error: function (a) {
                    c.$34(a), h();
                  },
                  start: function (a) {
                    return c.$36(f, a);
                  },
                });
            }
            break;
          case 'ActorPayload':
            this.$62(a, a.node);
            break;
          default:
            a, g(0, 49721, a.kind);
        }
      };
      c.$62 = function (a, b) {
        this.$63(a, b), this.$46();
      };
      c.$63 = function (a, b) {
        a = this.$58(a, b);
        this.$38().commitPayload(this.$9, a);
        this.$50([a]);
      };
      c.$60 = function (a, c) {
        var d = c.label,
          e = c.path;
        e = e.map(String).join('.');
        var f = this.$5.get(d);
        f == null && ((f = new Map()), this.$5.set(d, f));
        d = f.get(e);
        d = d != null && d.kind === 'response' ? d.responses : null;
        f.set(e, { kind: 'placeholder', placeholder: c });
        var i;
        c.kind === 'stream'
          ? (i = c.parentID)
          : c.kind === 'defer'
          ? (i = c.selector.dataID)
          : (c, g(0, 49722, c.kind));
        f = a.source.get(i);
        c = ((e = a.fieldPayloads) != null ? e : []).filter(function (a) {
          var b = j(a.dataID, a.fieldKey);
          return a.dataID === i || b === i;
        });
        f != null || g(0, 49723, i);
        a = this.$22.get(i);
        if (a != null) {
          e = (h || (h = b('relay-runtime/store/RelayModernRecord'))).update(
            a.record,
            f,
          );
          var k = new Map(),
            l = function (a) {
              var b = u(a);
              k.set(b, a);
            };
          a.fieldPayloads.forEach(l);
          c.forEach(l);
          a = Array.from(k.values());
        } else (e = f), (a = c);
        this.$22.set(i, { record: e, fieldPayloads: a });
        if (d != null) {
          l = this.$51(d);
          this.$50(l);
        }
      };
      c.$51 = function (a) {
        var b = this,
          c = [];
        a.forEach(function (a) {
          var d = a.label,
            e = a.path,
            f = a.response,
            h = b.$5.get(d);
          h == null && ((h = new Map()), b.$5.set(d, h));
          if (d.indexOf('$defer$') !== -1) {
            var i = e.map(String).join('.'),
              j = h.get(i);
            if (j == null) {
              j = { kind: 'response', responses: [a] };
              h.set(i, j);
              return;
            } else if (j.kind === 'response') {
              j.responses.push(a);
              return;
            }
            j = j.placeholder;
            j.kind === 'defer' || g(0, 49724, i, d, j.kind);
            c.push(b.$61(d, e, j, f));
          } else {
            i = e.slice(0, -2).map(String).join('.');
            j = h.get(i);
            if (j == null) {
              j = { kind: 'response', responses: [a] };
              h.set(i, j);
              return;
            } else if (j.kind === 'response') {
              j.responses.push(a);
              return;
            }
            h = j.placeholder;
            h.kind === 'stream' || g(0, 49725, i, d, h.kind);
            c.push(b.$65(d, e, h, f));
          }
        });
        return c;
      };
      c.$61 = function (a, c, d, e) {
        var f;
        a = d.selector.dataID;
        c = this.$1;
        this.$1 = (f = d.actorIdentifier) != null ? f : this.$1;
        f = t(e, d.selector, d.typeName, {
          actorIdentifier: this.$1,
          getDataID: this.$2,
          path: d.path,
          reactFlightPayloadDeserializer: this.$17 != null ? this.$42 : null,
          reactFlightServerErrorHandler: this.$18,
          treatMissingFieldsAsNull: this.$3,
          shouldProcessClientComponents: this.$19,
        });
        this.$38().commitPayload(this.$9, f);
        d = this.$22.get(a);
        d != null || g(0, 49726, a);
        a = d.fieldPayloads;
        if (a.length !== 0) {
          a = {
            errors: null,
            fieldPayloads: a,
            incrementalPlaceholders: null,
            followupPayloads: null,
            source: b('relay-runtime/store/RelayRecordSource').create(),
            isFinal: ((d = e.extensions) == null ? void 0 : d.is_final) === !0,
          };
          this.$38().commitPayload(this.$9, a);
        }
        this.$1 = c;
        return f;
      };
      c.$65 = function (a, c, d, e) {
        var f = d.parentID;
        a = d.node;
        var h = d.variables,
          i = d.actorIdentifier,
          j = this.$1;
        this.$1 = (i = i) != null ? i : this.$1;
        i = a.selections[0];
        (i != null && i.kind === 'LinkedField' && i.plural === !0) ||
          g(0, 49727);
        a = this.$66(e, f, i, h, c, d.path);
        e = a.fieldPayloads;
        var k = a.itemID,
          l = a.itemIndex,
          m = a.prevIDs;
        i = a.relayPayload;
        var n = a.storageKey;
        this.$38().commitPayload(this.$9, i, function (a) {
          var b = a.get(f);
          if (b == null) return;
          var c = b.getLinkedRecords(n);
          if (c == null) return;
          if (
            c.length !== m.length ||
            c.some(function (a, b) {
              return m[b] !== (a && a.getDataID());
            })
          )
            return;
          c = [].concat(c);
          c[l] = a.get(k);
          b.setLinkedRecords(c, n);
        });
        if (e.length !== 0) {
          h = {
            errors: null,
            fieldPayloads: e,
            incrementalPlaceholders: null,
            followupPayloads: null,
            source: b('relay-runtime/store/RelayRecordSource').create(),
            isFinal: !1,
          };
          this.$38().commitPayload(this.$9, h);
        }
        this.$1 = j;
        return i;
      };
      c.$66 = function (a, c, d, e, f, i) {
        var k,
          l = a.data;
        typeof l === 'object' || g(0, 49728);
        k = (k = d.alias) != null ? k : d.name;
        var n = q(d, e),
          o = this.$22.get(c);
        o != null || g(0, 49729, c);
        var r = o.record;
        o = o.fieldPayloads;
        var s = (
          h || (h = b('relay-runtime/store/RelayModernRecord'))
        ).getLinkedRecordIDs(r, n);
        s != null || g(0, 49730, c, d.name);
        f = f[f.length - 1];
        var u = parseInt(f, 10);
        (u === f && u >= 0) || g(0, 49731, f);
        f = (f = d.concreteType) != null ? f : l[p];
        typeof f === 'string' || g(0, 49720, d.name);
        l =
          (l = (l = this.$2(l, f)) != null ? l : s == null ? void 0 : s[u]) !=
          null
            ? l
            : j(c, n, u);
        typeof l === 'string' || g(0, 49716, n);
        d = m(d, l, e);
        e = h.clone(r);
        r = [].concat(s);
        r[u] = l;
        h.setLinkedRecordIDs(e, n, r);
        this.$22.set(c, { record: e, fieldPayloads: o });
        r = t(a, d, f, {
          actorIdentifier: this.$1,
          getDataID: this.$2,
          path: [].concat(i, [k, String(u)]),
          reactFlightPayloadDeserializer: this.$17 != null ? this.$42 : null,
          reactFlightServerErrorHandler: this.$18,
          treatMissingFieldsAsNull: this.$3,
          shouldProcessClientComponents: this.$19,
        });
        return {
          fieldPayloads: o,
          itemID: l,
          itemIndex: u,
          prevIDs: s,
          relayPayload: r,
          storageKey: n,
        };
      };
      c.$64 = function (a, b) {
        var c = this;
        this.$28.push(b);
        if (this.$27 != null) return;
        this.$27 = a(function () {
          c.$27 = null;
          var a = c.$39();
          c.$53(a);
          for (
            var a = c.$28,
              b = Array.isArray(a),
              d = 0,
              a = b
                ? a
                : a[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var e;
            if (b) {
              if (d >= a.length) break;
              e = a[d++];
            } else {
              d = a.next();
              if (d.done) break;
              e = d.value;
            }
            e = e;
            e();
          }
          c.$28 = [];
        });
      };
      c.$53 = function (a) {
        a != null &&
          a.length > 0 &&
          this.$12.update(this.$9.request, new Set(a));
      };
      c.$40 = function () {
        this.$12.complete(this.$9.request);
      };
      c.$38 = function () {
        this.$32.add(this.$1);
        return this.$16(this.$1);
      };
      c.$67 = function () {
        if (this.$32.size === 0) return new Set([this.$1]);
        else return this.$32;
      };
      c.$39 = function (a) {
        var b = new Set();
        for (
          var c = this.$67(),
            d = Array.isArray(c),
            e = 0,
            c = d
              ? c
              : c[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var f;
          if (d) {
            if (e >= c.length) break;
            f = c[e++];
          } else {
            e = c.next();
            if (e.done) break;
            f = e.value;
          }
          f = f;
          f = this.$16(f).run(a);
          f.forEach(function (a) {
            return b.add(a);
          });
        }
        return Array.from(b);
      };
      c.$52 = function () {
        for (
          var a = this.$67(),
            b = Array.isArray(a),
            c = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var d;
          if (b) {
            if (c >= a.length) break;
            d = a[c++];
          } else {
            c = a.next();
            if (c.done) break;
            d = c.value;
          }
          d = d;
          this.$29.has(d) || this.$29.set(d, this.$24(d).retain(this.$9));
        }
      };
      c.$41 = function () {
        for (
          var a = this.$29.values(),
            b = Array.isArray(a),
            c = 0,
            a = b
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var d;
          if (b) {
            if (c >= a.length) break;
            d = a[c++];
          } else {
            c = a.next();
            if (c.done) break;
            d = c.value;
          }
          d = d;
          d.dispose();
        }
        this.$29.clear();
      };
      c.$55 = function () {
        var a = this.$11;
        a || g(0, 49717);
        return a;
      };
      return a;
    })();
    function s(a) {
      var b = [],
        c = [];
      a.forEach(function (a) {
        if (a.path != null || a.label != null) {
          var d = a.label,
            e = a.path;
          (d == null || e == null) && g(0, 42913);
          c.push({ label: d, path: e, response: a });
        } else b.push(a);
      });
      return [b, c];
    }
    function t(a, c, d, e) {
      var f = a.data,
        g = a.errors,
        i = b('relay-runtime/store/RelayRecordSource').create();
      d = (h || (h = b('relay-runtime/store/RelayModernRecord'))).create(
        c.dataID,
        d,
      );
      i.set(c.dataID, d);
      d = b('relay-runtime/store/RelayResponseNormalizer').normalize(
        i,
        c,
        f,
        e,
      );
      return babelHelpers['extends']({}, d, {
        errors: g,
        isFinal: ((i = a.extensions) == null ? void 0 : i.is_final) === !0,
      });
    }
    function u(a) {
      return (a = JSON.stringify(
        (i || (i = b('relay-runtime/util/stableCopy')))(a),
      )) != null
        ? a
        : '';
    }
    function v(a) {
      a = a.incrementalPlaceholders;
      a != null && a.length !== 0 && g(0, 42914);
    }
    e.exports = { execute: a };
  },
  null,
);
