__d(
  'satpValidator',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      a = a.ctaLinkData;
      var c = a.ctaType;
      a = a.link;
      if (c != null && (a === '' || a == null)) {
        b({ error: !0, type: 'CTA_UPDATE_LINK_INPUT_ERROR' });
        return !1;
      }
      return !0;
    }
    f['default'] = a;
  },
  66,
);
