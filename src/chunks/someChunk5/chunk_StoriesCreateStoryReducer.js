__d(
  'StoriesCreateStoryReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      switch (b.type) {
        case 'set_is_uploading':
          return babelHelpers['extends']({}, a, { isUploading: b.value });
      }
      return a;
    }
    f['default'] = a;
  },
  66,
);
