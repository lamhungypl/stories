__d(
  'RelayMutationQueue',
  ['relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('relay-runtime').commitMutation,
      h = b('relay-runtime').createOperationDescriptor,
      i = b('relay-runtime').getRequest;
    a = (function () {
      function a(a) {
        (this.$2 = null), (this.$3 = new Set()), (this.$1 = a);
      }
      var b = a.prototype;
      b.getQueuedMutations = function () {
        return this.$3;
      };
      b.push = function (a) {
        var b = this,
          c;
        (a.optimisticResponse || a.optimisticUpdater) &&
          (c = this.$1.applyMutation(this.$4(a)));
        var d = function (a) {
            a === void 0 && (a = function () {}),
              (b.$2 = null),
              c && c.dispose(),
              a(),
              b.$5();
          },
          e = {
            configs: a.configs,
            mutation: a.mutation,
            uploadables: a.uploadables,
            updater: a.updater,
            variables: a.variables,
            onCompleted: function (b) {
              d(function () {
                a.onCompleted && a.onCompleted(b);
              });
            },
            onError: function (b) {
              d(function () {
                a.onError && a.onError(b);
              });
            },
          };
        this.$3.add(e);
        this.$5();
        return {
          dispose: function () {
            if (b.$2 && b.$2.config === e) {
              b.$2.disposable.dispose();
              d();
              return;
            }
            var a = b.$3.has(e);
            a && (b.$3['delete'](e), c && c.dispose());
          },
        };
      };
      b.$5 = function () {
        if (this.$2) return;
        var a = j(this.$3);
        if (a === void 0) return;
        this.$2 = { config: a, disposable: this.$6(a) };
      };
      b.$6 = function (a) {
        return g(this.$1, a);
      };
      b.$7 = function (a) {
        var b = i(a.mutation);
        if (b.params.operationKind !== 'mutation')
          throw TypeError('enqueueMutation: Expected a mutation');
        if (b.kind !== 'Request')
          throw TypeError(
            'enqueueMutation: Expected mutation to be of type request',
          );
        return h(b, a.variables);
      };
      b.$4 = function (a) {
        return {
          operation: this.$7(a),
          response: a.optimisticResponse,
          updater: a.optimisticUpdater,
        };
      };
      return a;
    })();
    function j(a) {
      var b = a.values();
      b = b.next();
      if (b.done) return;
      a['delete'](b.value);
      return b.value;
    }
    e.exports = a;
  },
  null,
);
