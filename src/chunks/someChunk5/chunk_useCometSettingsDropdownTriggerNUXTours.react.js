__d(
  'useCometSettingsDropdownTriggerNUXTours.react',
  ['fbt', 'TetraText.react', 'mergeRefs', 'react', 'useCometNUXTourTarget'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useMemo;
    function a(a) {
      a = a.profileName;
      var b = c('useCometNUXTourTarget')({
          contextualLayerOptions: { align: 'end' },
          description: h._('__JHASH__adpchqSElpB__JHASH__', [
            h._implicitParam(
              '=m2',
              i.jsx('span', {
                className: 'x117nqv4',
                children: h._('__JHASH__6nU8PJIgIXh__JHASH__', [
                  h._param('profile_name', a),
                ]),
              }),
            ),
          ]),
          targetKey: 'PROFILE_SWITCHER',
          title: h._('__JHASH__BcWMVR1zakO__JHASH__'),
        }),
        d = c('useCometNUXTourTarget')({
          contextualLayerOptions: { align: 'end' },
          description: h._('__JHASH__GprgjOkuiY7__JHASH__', [
            h._implicitParam(
              '=m2',
              i.jsx('span', {
                className: 'x117nqv4',
                children: h._('__JHASH__Oscpx2DKdIX__JHASH__', [
                  h._param('profile_name', a),
                ]),
              }),
            ),
          ]),
          targetKey: 'COMMUNITY_SWITCHER',
          title: h._('__JHASH__YVhv4CcDo-Y__JHASH__'),
        }),
        e = c('useCometNUXTourTarget')({
          contextualLayerOptions: { align: 'end' },
          description: h._('__JHASH__ykxvK5izgOf__JHASH__', [
            h._param(
              'page_name',
              i.jsx(c('TetraText.react'), { type: 'bodyLink2', children: a }),
            ),
          ]),
          targetKey: 'PROFILE_SWITCH_SETTINGS_STEP',
          title: h._('__JHASH__7ePPSYXQEXI__JHASH__'),
        });
      return j(
        function () {
          return c('mergeRefs')(b, d, e);
        },
        [b, d, e],
      );
    }
    g['default'] = a;
  },
  98,
);
