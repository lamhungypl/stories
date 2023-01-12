__d(
  'useSearchCometGlobalTypeaheadStyles',
  ['CometGlobalPanelLayoutContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useContext,
      i = b.useMemo,
      j = {
        inputXStyle: {
          alignItems: 'x6s0dn4',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          height: 'x1s65kcs',
          marginBottom: 'x1wsgfga',
          paddingEnd: 'x1pi30zi',
          paddingStart: 'x1swvt13',
          $$css: !0,
        },
        inputXStyleWithGlobalPanelTopNav: {
          alignItems: 'x6s0dn4',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          height: 'xnnlda6',
          $$css: !0,
        },
      },
      k = {
        typeaheadLayout: {
          display: 'x1lliihq',
          position: 'x1n2onr6',
          '::before_bottom': 'xhq5o37',
          '::before_boxShadow': 'x1qxoq08',
          '::before_content': 'x1cpjm7i',
          '::before_end': 'x1ryaae9',
          '::before_opacity': 'x124lp2h',
          '::before_position': 'x1hmns74',
          '::before_start': 'x1mhyesy',
          '::before_top': 'x1y3wzot',
          $$css: !0,
        },
        typeaheadLayoutOpened: {
          borderBottom: 'xaqea5y',
          borderBottomEndRadius: 'x30kzoy',
          borderBottomStartRadius: 'x9jhf4c',
          borderEnd: 'x1b1mbwd',
          borderStart: 'xav7gou',
          borderTop: 'x6umtig',
          '::before_borderBottomEndRadius': 'x9lpf2z',
          '::before_borderBottomStartRadius': 'x1eqyvvh',
          '::before_opacity': 'xfbg1o9',
          '::before_transitionDuration': 'x1kphnah',
          '::before_transitionProperty': 'x1de4urk',
          '::before_transitionTimingFunction': 'xyt8op7',
          $$css: !0,
        },
      };
    function a() {
      var a = h(c('CometGlobalPanelLayoutContext'));
      return i(
        function () {
          return {
            inputXStyle: a ? j.inputXStyleWithGlobalPanelTopNav : j.inputXStyle,
            layoutOpenedXStyle: a ? null : k.typeaheadLayoutOpened,
            layoutXStyle: a ? null : k.typeaheadLayout,
          };
        },
        [a],
      );
    }
    g['default'] = a;
  },
  98,
); /*FB_PKG_DELIM*/
