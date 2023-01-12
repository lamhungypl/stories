__d(
  'CometEmojiWithContextualSize.react',
  ['CometTextContext', 'CometTextTypography', 'cr:244', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = new Map([
        [16, 16],
        [20, 16],
        [24, 20],
        [28, 24],
        [32, 30],
        [38, 32],
      ]);
    function k() {
      var a = i(c('CometTextContext'));
      a = (a = a == null ? void 0 : a.type) != null ? a : 'body4';
      var b = 16;
      a != null &&
        a in c('CometTextTypography') &&
        (b = c('CometTextTypography')[a].lineHeight);
      return (a = j.get(b)) != null ? a : 16;
    }
    function a(a) {
      var c = k();
      c = a.size != null ? a.size : c;
      return a.renderCustomEmoji
        ? a.renderCustomEmoji(c)
        : h.jsx(b('cr:244'), babelHelpers['extends']({}, a, { size: c }));
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
