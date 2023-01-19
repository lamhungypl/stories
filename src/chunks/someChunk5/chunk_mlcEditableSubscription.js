__d(
  'mlcEditableSubscription',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return {
        initialValueFn: function () {
          return a.isEditable();
        },
        subscribe: function (b) {
          return a.registerEditableListener(b);
        },
      };
    }
    f['default'] = a;
  },
  66,
);
