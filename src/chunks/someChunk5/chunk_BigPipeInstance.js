__d(
  'BigPipeInstance',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = null;
    a = {
      Events: {
        init: 'BigPipe/init',
        tti: 'tti_bigpipe',
        displayed: 'all_pagelets_displayed',
        loaded: 'all_pagelets_loaded',
      },
      setCurrentInstance_DO_NOT_USE: function (a) {
        g = a;
      },
      getCurrentInstance: function () {
        return g;
      },
    };
    e.exports = a;
  },
  null,
);
