__d(
  'SetActiveLayerIfAttached.react',
  [
    'CometKeyCommandUtilsContext',
    'CometLayerKeyCommandWidget',
    'HiddenSubtreeContext',
    'react',
    'recoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useEffect;
    function a(a) {
      var b = h(c('HiddenSubtreeContext'));
      a = h(c('CometKeyCommandUtilsContext'));
      var d = a && a.setActiveLayer,
        e = h(c('CometLayerKeyCommandWidget').Context);
      i(
        function () {
          if (!d) {
            c('recoverableViolation')(
              'The current layer is not wrapped in a *KeyCommandListener',
              'comet_ax',
            );
            return;
          }
          if (!e) {
            c('recoverableViolation')(
              'setActiveLayer not wrapped in CometLayerKeyCommandWidget.Wrapper',
              'comet_ax',
            );
            return;
          }
          b.hiddenOrBackgrounded || d(e);
        },
        [e, b, d],
      );
      return null;
    }
    g['default'] = a;
  },
  98,
);
