__d(
  'CometDelightsPluginForLexical',
  ['react', 'requireDeferred', 'useDeferredModuleOnReady'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('requireDeferred')(
        'UpgradedCometDelightsPluginForLexical',
      ).__setRef('CometDelightsPluginForLexical');
    function a(a) {
      a = a.pluginProps;
      a = a.editor;
      var b = c('useDeferredModuleOnReady')(i);
      return b != null ? h.jsx(b, { editor: a }) : null;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
