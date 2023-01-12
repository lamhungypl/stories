__d(
  'CometEmojiTransform',
  [
    'CometEmojiWithContextualSize.react',
    'EmojiRenderer',
    'baseTextTransformAllStrings',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      a = a === void 0 ? {} : a;
      var b = a.size;
      return function (a) {
        var e = 0;
        return c('baseTextTransformAllStrings')(a, function (a, f) {
          return d('EmojiRenderer').render(a, function (a) {
            return h.jsx(
              c('CometEmojiWithContextualSize.react'),
              { emoji: a, size: b },
              f + '-' + e++,
            );
          });
        });
      };
    }
    g['default'] = a;
  },
  98,
);
