__d(
  'CometLineBreakTransform',
  ['baseTextTransformAllStrings', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    a = function (a, b) {
      var d = 0;
      return c('baseTextTransformAllStrings')(a, function (a, b) {
        return a.split('\n').reduce(function (a, c, e) {
          return e === 0
            ? [].concat(a, [c])
            : [].concat(a, [h.jsx('br', {}, b + '-' + d++), c]);
        }, []);
      });
    };
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
