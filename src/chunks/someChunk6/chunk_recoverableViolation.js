__d(
  'recoverableViolation',
  ['FBLogger'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b, d, e) {
      d = d === void 0 ? {} : d;
      d = d.error;
      b = c('FBLogger')(b);
      d ? (b = b.catching(d)) : (b = b.blameToPreviousFrame());
      d = e == null ? void 0 : e.categoryKey;
      d != null && (b = b.addToCategoryKey(d));
      e = (d = e == null ? void 0 : e.trackOnly) != null ? d : !1;
      e ? b.debug(a) : b.mustfix(a);
      return null;
    }
    g['default'] = a;
  },
  98,
);
