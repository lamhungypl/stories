__d(
  'ctaValidator',
  ['StoriesCreateMediaTypeEnum'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      var d;
      if (
        ((d = a.formData) == null ? void 0 : d.mediaType) ===
          c('StoriesCreateMediaTypeEnum').SATP &&
        (((d = a.satpData) == null ? void 0 : d.text) == null ||
          a.satpData.text.trim().length === 0)
      ) {
        b({ type: 'satp_update_input_error' });
        return !1;
      }
      return !0;
    }
    g['default'] = a;
  },
  98,
);
