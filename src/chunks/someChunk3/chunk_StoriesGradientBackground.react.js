__d(
  'StoriesGradientBackground.react',
  ['StoriesEnums', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      useEffect = d('react').useEffect;
    function Component(a) {
      let b = a.direction;
      let c = a.from;
      let e = a.onLoad;
      let a = a.to;
      useEffect(
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
      let gradientDirection = '';
      switch (b) {
        case d('StoriesEnums').GRADIENT_DIRECTION.BL_TR:
        case d('StoriesEnums').GRADIENT_DIRECTION.TR_BL:
          gradientDirection = '45deg';
          break;
        case d('StoriesEnums').GRADIENT_DIRECTION.LEFT_RIGHT:
        case d('StoriesEnums').GRADIENT_DIRECTION.RIGHT_LEFT:
          gradientDirection = 'to right';
          break;
        case d('StoriesEnums').GRADIENT_DIRECTION.TL_BR:
        case d('StoriesEnums').GRADIENT_DIRECTION.BR_TL:
          gradientDirection = '135deg';
          break;
        case d('StoriesEnums').GRADIENT_DIRECTION.TOP_BOTTOM:
        case d('StoriesEnums').GRADIENT_DIRECTION.BOTTOM_TOP:
          gradientDirection = 'to bottom';
          break;
        default:
          gradientDirection = '0deg';
      }
      let style = {
        backgroundImage:
          'linear-gradient(' +
          gradientDirection +
          ',' +
          c +
          ' 0%,' +
          a +
          ' 100%)',
      };
      return h.jsx('div', { className: 'x5yr21d xh8yej3', style: style });
    }
    Component.displayName = Component.name + ' [from ' + f.id + ']';
    g['default'] = Component;
  },
  98,
);
