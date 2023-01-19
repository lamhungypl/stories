__d(
  'useShowHovercardsOnClick',
  ['CometHovercardSettingsContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useContext;
    function a() {
      var a = h(c('CometHovercardSettingsContext'));
      a = a.hovercardInteractionPreference;
      return a === 3;
    }
    g['default'] = a;
  },
  98,
);
