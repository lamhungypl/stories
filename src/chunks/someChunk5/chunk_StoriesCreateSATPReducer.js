__d(
  'StoriesCreateSATPReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      var c = a.satpData;
      c == null &&
        (c = {
          background: null,
          backgroundColor: null,
          backgroundGradientColor: null,
          backgroundGradientDirection: null,
          fontColor: null,
          fontID: null,
          fontName: null,
          fontUrl: null,
          inputError: !1,
          presetID: null,
          text: '',
        });
      switch (b.type) {
        case 'satp_update_text':
          return babelHelpers['extends']({}, a, {
            satpData: babelHelpers['extends']({}, c, {
              inputError: !1,
              text: b.text,
            }),
          });
        case 'satp_update_background':
          return babelHelpers['extends']({}, a, {
            satpData: babelHelpers['extends']({}, c, {
              background: b.background,
              backgroundColor: b.backgroundColor,
              backgroundGradientColor: b.backgroundGradientColor,
              backgroundGradientDirection: b.backgroundGradientDirection,
              fontColor: b.fontColor,
              presetID: b.presetID,
            }),
          });
        case 'satp_update_font':
          return babelHelpers['extends']({}, a, {
            satpData: babelHelpers['extends']({}, c, {
              fontID: b.fontID,
              fontName: b.fontName,
              fontUrl: b.fontUrl,
            }),
          });
        case 'satp_update_input_error':
          return babelHelpers['extends']({}, a, {
            satpData: babelHelpers['extends']({}, c, { inputError: !0 }),
          });
      }
      return a;
    }
    f['default'] = a;
  },
  66,
);
