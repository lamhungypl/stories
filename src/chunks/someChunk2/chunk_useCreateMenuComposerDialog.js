__d(
  'useCreateMenuComposerDialog',
  [
    'fbt',
    'react',
    'useFeedComposerCometDialog',
    'useResumableComposerViewState',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react').useCallback;
    function a(a) {
      a = a === void 0 ? {} : a;
      var b = a.composerEntryPointName;
      b = b === void 0 ? 'navbar_create_menu' : b;
      var d = a.composerSourceSurface;
      d = d === void 0 ? 'newsfeed' : d;
      a = a.composerType;
      a = a === void 0 ? 'feed' : a;
      var e = c('useResumableComposerViewState')(),
        f = e.clearResumableViewState,
        g = e.getResumableViewState,
        j = e.saveResumableViewState;
      e = i(
        function () {
          f();
        },
        [f],
      );
      var k = i(
        function (a) {
          j(a);
        },
        [j],
      );
      b = c('useFeedComposerCometDialog')({
        composerEntryPointName: b,
        composerSourceSurface: d,
        composerType: a,
        onBeforeClose: k,
        onSave: e,
        title: h._('__JHASH__J5sDia9lY4j__JHASH__'),
        tracePolicy: 'comet.composer.feed.navbar_create_menu',
      });
      var l = b[0];
      d = i(
        function () {
          var a = g();
          l({ beginningViewState: a });
        },
        [g, l],
      );
      return [d];
    }
    g['default'] = a;
  },
  98,
);
