__d(
  'StoriesGradientBackground.react',
  ['StoriesEnums', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useEffect;
    function a(a) {
      var b = a.direction,
        c = a.from,
        e = a.onLoad;
      a = a.to;
      i(
        function () {
          e && e();
        },
        [e],
      );
      a = a;
      c = c;
      if (!(a != null && c != null)) return null;
      a = a != null ? a : c;
      c = c != null ? c : a;
      var f = '';
      switch (b) {
        case d('StoriesEnums').GRADIENT_DIRECTION.BL_TR:
        case d('StoriesEnums').GRADIENT_DIRECTION.TR_BL:
          f = '45deg';
          break;
        case d('StoriesEnums').GRADIENT_DIRECTION.LEFT_RIGHT:
        case d('StoriesEnums').GRADIENT_DIRECTION.RIGHT_LEFT:
          f = 'to right';
          break;
        case d('StoriesEnums').GRADIENT_DIRECTION.TL_BR:
        case d('StoriesEnums').GRADIENT_DIRECTION.BR_TL:
          f = '135deg';
          break;
        case d('StoriesEnums').GRADIENT_DIRECTION.TOP_BOTTOM:
        case d('StoriesEnums').GRADIENT_DIRECTION.BOTTOM_TOP:
          f = 'to bottom';
          break;
        default:
          f = '0deg';
      }
      b = {
        backgroundImage:
          'linear-gradient(' + f + ',' + c + ' 0%,' + a + ' 100%)',
      };
      return h.jsx('div', { className: 'x5yr21d xh8yej3', style: b });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);