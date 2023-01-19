__d(
  'StoriesCreatePhotoFooterControls.react',
  [
    'fbt',
    'ix',
    'CometPressable.react',
    'CometSlider.react',
    'StoriesCreatePhotoRotateButton.react',
    'StoriesCreateViewStateDispatcherContext',
    'TetraIcon.react',
    'fbicon',
    'react',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    let j = d('react');
    b = d('react');
    let useContext = b.useContext,
      useRef = b.useRef;

    function Component(a) {
      let b = a.frameWidth;
      let e = a.maxScale;
      let f = a.minScale;
      let g = a.scale;
      let storiesCreateViewStateDispatcher = useContext(
        c('StoriesCreateViewStateDispatcherContext'),
      );
      let a = d('fbicon')._(i('531490'), 16);
      let n = d('fbicon')._(i('483768'), 16);
      let b = Math.floor(0.8 * b);

      let o = useRef(null);
      let handlePhotoUpdateScale = function (a) {
        storiesCreateViewStateDispatcher({
          type: 'photo_update_scale',
          value: a,
        });
      };

      let q = function (a) {
        handlePhotoUpdateScale(Math.min(Math.max(a, f), e));
      };

      let r = function (a) {
        window.clearInterval(o.current);
        let b = g + a;
        o.current = window.setInterval(function () {
          (b += a), q(b);
        }, 150);
      };

      let s = function (a) {
        window.clearInterval(o.current);
        a = g + a;
        q(a);
      };

      return j.jsxs('div', {
        className: 'x6s0dn4 x78zum5',
        children: [
          j.jsx('div', {
            className: 'x1y1aw1k x1sxyh0 xwib8y2 xurb0ha',
            children: j.jsx(c('CometPressable.react'), {
              'aria-label': h._('__JHASH__c7IJNMItXRb__JHASH__'),
              disabled: g === f,
              onPress: function () {
                s(-0.1);
              },
              onPressIn: function () {
                r(-0.1);
              },
              onPressOut: function () {
                window.clearInterval(o.current);
              },
              children: j.jsx(c('TetraIcon.react'), {
                color: 'white',
                icon: a,
              }),
            }),
          }),
          j.jsx('div', {
            className: 'xh8yej3',
            style: { width: b + 'px' },
            children: j.jsx(c('CometSlider.react'), {
              label: h._('__JHASH__JskfVjZ1UK1__JHASH__'),
              max: e,
              min: f,
              onChange: function (a) {
                handlePhotoUpdateScale(a);
              },
              step: 0.01,
              value: g,
            }),
          }),
          j.jsx('div', {
            className: 'x1y1aw1k x1sxyh0 xwib8y2 xurb0ha',
            children: j.jsx(c('CometPressable.react'), {
              'aria-label': h._('__JHASH__859S0VDpLu___JHASH__'),
              disabled: g === e,
              onPress: function () {
                s(0.1);
              },
              onPressIn: function () {
                r(0.1);
              },
              onPressOut: function () {
                window.clearInterval(o.current);
              },
              children: j.jsx(c('TetraIcon.react'), {
                color: 'white',
                icon: n,
              }),
            }),
          }),
          j.jsx(c('StoriesCreatePhotoRotateButton.react'), {}),
        ],
      });
    }
    Component.displayName = Component.name + ' [from ' + f.id + ']';
    e = c('withStoriesCreateViewStatePart')(a, function (a) {
      return {
        scale:
          (a = (a = a.photoData) == null ? void 0 : a.scale) != null ? a : 1,
      };
    });
    g['default'] = e;
  },
  98,
);
