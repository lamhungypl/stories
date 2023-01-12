__d(
  'StoriesCreateSettingButton.react',
  [
    'fbt',
    'ix',
    'StoriesCometPrivacySelectorDialog.entrypoint',
    'TetraCircleButton.react',
    'fbicon',
    'react',
    'useCometEntryPointDialog',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react');
    function a() {
      var a = c('useCometEntryPointDialog')(
          c('StoriesCometPrivacySelectorDialog.entrypoint'),
          {},
        ),
        b = a[0];
      return j.jsx(c('TetraCircleButton.react'), {
        color: 'primary',
        icon: d('fbicon')._(i('497567'), 20),
        label: h._('__JHASH__v2bgOzzUhMW__JHASH__'),
        onPress: function () {
          b({ onClose: function () {} });
        },
        size: 36,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
