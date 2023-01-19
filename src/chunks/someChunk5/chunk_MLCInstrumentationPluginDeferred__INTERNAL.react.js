__d(
  'MLCInstrumentationPluginDeferred__INTERNAL.react',
  ['react', 'requireDeferred', 'useDeferredModuleOnReady'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = c('requireDeferred')(
        'MLCInstrumentationPlugin__INTERNAL.react',
      ).__setRef('MLCInstrumentationPluginDeferred__INTERNAL.react');
    function a(a) {
      var b = c('useDeferredModuleOnReady')(i);
      return b == null ? null : h.jsx(b, babelHelpers['extends']({}, a));
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
