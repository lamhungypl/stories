__d(
  'unrecoverableViolation',
  ['FBLogger'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, d, e) {
      d = d === void 0 ? {} : d;
      d = d.error;
      b = c('FBLogger')(b);
      d ? (b = b.catching(d)) : (b = b.blameToPreviousFrame());
      for (
        d = 0;
        d < ((f = e == null ? void 0 : e.blameToPreviousFrame) != null ? f : 0);
        ++d
      ) {
        var f;
        b = b.blameToPreviousFrame();
      }
      f = e == null ? void 0 : e.categoryKey;
      f != null && (b = b.addToCategoryKey(f));
      return b.mustfixThrow(a);
    }
    g['default'] = a;
  },
  98,
);
