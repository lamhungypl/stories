__d(
  'useCometEntryPointPrerendererWithQueryTimeout',
  ['FBLogger', 'react', 'useCometEntryPointPrerendererWithQueryTimeoutPrivate'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback;
    function a(a, b, d, e) {
      a = c('useCometEntryPointPrerendererWithQueryTimeoutPrivate')(a, b, d, e);
      var f = a[0];
      b = a[1];
      d = b.onHighIntent;
      e = b.onHoverIn;
      a = b.onHoverOut;
      b = b.onPressIn;
      var g = h(
        function (a, b) {
          var d = f();
          if (d == null) {
            c('FBLogger')('comet_ui')
              .blameToPreviousFrame()
              .mustfix(
                'Unable to present comet page EntryPoint component, preloadParams not set',
              );
            return;
          }
          var e = function () {
            b && b.apply(void 0, arguments);
            var a = d == null ? void 0 : d.dispose;
            a && a();
          };
          a(d, e);
        },
        [f],
      );
      return [g, e, a, b, d];
    }
    g['default'] = a;
  },
  98,
);
