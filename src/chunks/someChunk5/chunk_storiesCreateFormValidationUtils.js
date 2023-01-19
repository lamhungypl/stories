__d(
  'storiesCreateFormValidationUtils',
  ['ctaValidator', 'satpValidator'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = function (a) {
      return a.some(function (a) {
        return (a = a) != null ? a : !1;
      });
    };
    a = function (a, b, d) {
      var e = c('ctaValidator')(a, b);
      a = c('satpValidator')(a, b);
      e && a && d();
    };
    b = function (a) {
      var b,
        c = a.isUploading;
      a = a.viewState;
      b = h([
        a.ctaLinkData.linkInputError,
        ((b = a.mediaAttachments) == null
          ? void 0
          : (b = b[0]) == null
          ? void 0
          : b.fileType) === 'PHOTO' &&
          ((b = a.photoData) == null ? void 0 : b.displayedURI) == null,
        (b = a.satpData) == null ? void 0 : b.inputError,
      ]);
      a =
        (a = (a = a.videoData) == null ? void 0 : a.isTrimming) != null
          ? a
          : !1;
      return b || c || a;
    };
    g.useFormHasErrors = h;
    g.validateForm = a;
    g.useFormSubmitDisabled = b;
  },
  98,
);
