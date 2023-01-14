__d(
  'FbtErrorListenerWWW',
  ['FBLogger', 'killswitch'],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a) {
        (this.$1 = a.hash), (this.$2 = a.translation);
      }
      var b = a.prototype;
      b.onStringSerializationError = function (a) {
        var b = 'Context not logged.';
        if (!c('killswitch')('JS_RELIABILITY_FBT_LOGGING'))
          try {
            var d = JSON.stringify(a);
            d != null && (b = d.substr(0, 250));
          } catch (a) {
            b = a.message;
          }
        d =
          (a == null
            ? void 0
            : (d = a.constructor) == null
            ? void 0
            : d.name) || '';
        c('FBLogger')('fbt')
          .blameToPreviousDirectory()
          .blameToPreviousDirectory()
          .mustfix(
            'Converting to a string will drop content data. Hash="%s" Translation="%s" Content="%s" (type=%s,%s)',
            this.$1,
            this.$2,
            b,
            typeof a,
            d,
          );
      };
      b.onStringMethodUsed = function (a) {
        c('FBLogger')('fbt')
          .blameToPreviousDirectory()
          .blameToPreviousDirectory()
          .mustfix(
            'Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.',
            a,
          );
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
