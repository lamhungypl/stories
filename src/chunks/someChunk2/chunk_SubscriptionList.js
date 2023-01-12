__d(
  'SubscriptionList',
  ['recoverableViolation'],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a, b) {
        (this.$1 = []), (this.$2 = a), (this.$3 = b);
      }
      var b = a.prototype;
      b.add = function (a) {
        var b = this,
          d = { callback: a };
        this.$1.push(d);
        this.$2 && this.$1.length === 1 && this.$2();
        return {
          remove: function () {
            var a = b.$1.indexOf(d);
            if (a === -1) {
              c('recoverableViolation')(
                'SubscriptionList: Callback already removed.',
                'SubscriptionList',
              );
              return;
            }
            b.$1.splice(a, 1);
            b.$3 && b.$1.length === 0 && b.$3();
          },
        };
      };
      b.getCallbacks = function () {
        return this.$1.map(function (a) {
          return a.callback;
        });
      };
      b.fireCallbacks = function (a) {
        this.getCallbacks().forEach(function (b) {
          b(a);
        });
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
