__d(
  'queueRemovableDOMElements',
  ['ifRequired'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = [];
    function a() {
      return h;
    }
    function b() {
      h = [];
    }
    function d(a) {
      c('ifRequired')(
        'maybeRemoveElement',
        function (b) {
          b.maybeRemoveServerJSScriptElement(a);
        },
        function () {
          h.push(a);
        },
      );
    }
    g.getCurrentQueue = a;
    g.clearQueue = b;
    g.queueRemovableServerJSPayload = d;
  },
  98,
);
