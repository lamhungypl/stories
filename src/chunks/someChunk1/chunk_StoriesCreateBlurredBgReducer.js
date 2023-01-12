__d(
  'StoriesCreateBlurredBgReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      switch (b.type) {
        case 'blurredBg_update_bg':
          return babelHelpers['extends']({}, a, {
            blurredBg: { bottomColor: b.bottomColor, topColor: b.topColor },
          });
      }
      return a;
    }
    f['default'] = a;
  },
  66,
);
