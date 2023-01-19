__d(
  'getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      switch (a.__type) {
        case 'plain-text':
          return a.text;
        case 'editor-state-based':
          return a.draftEditorState.getCurrentContent().getPlainText();
        default:
          return a;
      }
    }
    f['default'] = a;
  },
  66,
);
