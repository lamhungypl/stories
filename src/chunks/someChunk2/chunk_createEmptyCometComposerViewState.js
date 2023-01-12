__d(
  'createEmptyCometComposerViewState',
  ['uuid'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      return a != null
        ? a
        : {
            audience: {},
            creationSessionID: c('uuid')(),
            editorState: babelHelpers['extends'](
              {
                __type: 'plain-text',
                hasFocus: !1,
                isComposing: !1,
                isPendingSelection: !1,
                selectionOffsets: null,
                text: '',
              },
              b,
            ),
          };
    }
    g['default'] = a;
  },
  98,
);
