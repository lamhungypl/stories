__d(
  'CometEmoticonTransform',
  [
    'CometEmojiWithContextualSize.react',
    'EmoticonRenderer',
    'FBEmojiResource',
    'FBEmojiUtils',
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
          return d('EmoticonRenderer').render(
            a,
            function (a) {
              return h.jsx(
                c('CometEmojiWithContextualSize.react'),
                {
                  emoji: [
                    d('FBEmojiUtils').codepointsToString(
                      a.split('_').map(function (a) {
                        return Number('0x' + a);
                      }),
                    ),
                  ],
                  resource: new (c('FBEmojiResource'))(a),
                  size: b,
                },
                f + '-' + e++,
              );
            },
            function (a, d) {
              return h.jsx(
                c('CometEmojiWithContextualSize.react'),
                { emoji: d, resource: new (c('FBEmojiResource'))(a), size: b },
                f + '-' + e++,
              );
            },
          );
        });
      };
    }
    g['default'] = a;
  },
  98,
);
