__d(
  'TransportSelectingClientCCResolver',
  [
    'Promise',
    'TransportSelectingClientContextualConfig',
    'nullthrows',
    'regeneratorRuntime',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a() {
        this.$1 = null;
      }
      var d = a.prototype;
      d.getCCGroupName = function (a) {
        var d, e;
        return b('regeneratorRuntime').async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  this.$2();
                  f.next = 3;
                  return b('regeneratorRuntime').awrap(
                    c('nullthrows')(this.$1),
                  );
                case 3:
                  d = f.sent;
                  e = new d(
                    JSON.parse(
                      c('TransportSelectingClientContextualConfig').rawConfig,
                    ),
                  ).resolve({ method: a });
                  return f.abrupt('return', e.get('group', 'default_group'));
                case 6:
                case 'end':
                  return f.stop();
              }
          },
          null,
          this,
        );
      };
      d.getCCDGWUpsampleMultiplier = function (a) {
        var d, e;
        return b('regeneratorRuntime').async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  this.$2();
                  f.next = 3;
                  return b('regeneratorRuntime').awrap(
                    c('nullthrows')(this.$1),
                  );
                case 3:
                  d = f.sent;
                  e = new d(
                    JSON.parse(
                      c('TransportSelectingClientContextualConfig').rawConfig,
                    ),
                  ).resolve({ method: a });
                  return f.abrupt('return', e.get('dgwUpsampleMultiplier', 1));
                case 6:
                case 'end':
                  return f.stop();
              }
          },
          null,
          this,
        );
      };
      d.$2 = function () {
        this.$1 == null &&
          (this.$1 = new (b('Promise'))(function (a) {
            c('requireDeferred')('ContextualConfig')
              .__setRef('TransportSelectingClientCCResolver')
              .onReady(function (b) {
                a(b);
              });
          }));
      };
      return a;
    })();
    d = new a();
    g['default'] = d;
  },
  98,
);
