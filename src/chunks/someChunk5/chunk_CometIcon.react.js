__d(
  'CometIcon.react',
  [
    'BaseImage_DEPRECATED.react',
    'CometPressable.react',
    'CometSVGIcon.react',
    'CometTintedIcon.react',
    'FlightSerializableIcon',
    'IconSource',
    'ImageIconSource',
    'SVGIcon',
    'TintableIconSource',
    'react',
    'stylex',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        button: {
          appearance: 'xjyslct',
          backgroundColor: 'xjbqb8w',
          borderTopStyle: 'x13fuv20',
          borderEndStyle: 'xu3j5b3',
          borderBottomStyle: 'x1q0q8m5',
          borderStartStyle: 'x26u7qi',
          borderTopWidth: 'x972fbf',
          borderEndWidth: 'xcfux6l',
          borderBottomWidth: 'x1qhh985',
          borderStartWidth: 'xm0m39n',
          display: 'x3nfvp2',
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'xat24cr',
          marginStart: 'x1mh8g0r',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          position: 'x1n2onr6',
          verticalAlign: 'x3ajldb',
          '::after_borderTopStartRadius': 'x194ut8o',
          '::after_borderTopEndRadius': 'x1vzenxt',
          '::after_borderBottomEndRadius': 'xd7ygy7',
          '::after_borderBottomStartRadius': 'xt298gk',
          '::after_bottom': 'x1xhcax0',
          '::after_content': 'x1s928wv',
          '::after_end': 'x10pfhc2',
          '::after_position': 'x1j6awrg',
          '::after_start': 'x1v53gu8',
          '::after_top': 'x1tfg27r',
          '::after_zIndex': 'xitxdhh',
          $$css: !0,
        },
        image: { verticalAlign: 'x1b0d499', $$css: !0 },
        imageContain: { objectFit: 'xz74otr', $$css: !0 },
        imageCover: { objectFit: 'xl1xv1r', $$css: !0 },
        pressed: { transform: 'x1n5d1j9', $$css: !0 },
      };
    function a(a, b) {
      var e = a.alt;
      e = e === void 0 ? '' : e;
      var f = a.color;
      f = f === void 0 ? 'primary' : f;
      var g = a.disabled;
      g = g === void 0 ? !1 : g;
      var k = a.disableOverlay_DEPRECATED;
      k = k === void 0 ? !1 : k;
      a.draggable;
      var l = a.focusable,
        m = a.hideHoverOverlay;
      m = m === void 0 ? !1 : m;
      var n = a.icon,
        o = a.linkProps,
        p = a.onHoverIn,
        q = a.onHoverOut,
        r = a.onPress,
        s = a.onPressIn,
        t = a.onPressOut,
        u = a.size;
      u = u === void 0 ? 8 : u;
      var v = a.testid,
        w = a.testOnly_pressed;
      w = w === void 0 ? !1 : w;
      var x = a.xstyle,
        y = babelHelpers.objectWithoutPropertiesLoose(a, [
          'alt',
          'color',
          'disabled',
          'disableOverlay_DEPRECATED',
          'draggable',
          'focusable',
          'hideHoverOverlay',
          'icon',
          'linkProps',
          'onHoverIn',
          'onHoverOut',
          'onPress',
          'onPressIn',
          'onPressOut',
          'size',
          'testid',
          'testOnly_pressed',
          'xstyle',
        ]);
      n = d('FlightSerializableIcon').parseFlightIcon(n);
      v = r == null ? v : void 0;
      f = a.disabled === !0 ? 'disabled' : f;
      var z = r != null || o != null;
      e = (!z && y['aria-label']) || e;
      var A = z ? void 0 : b;
      x =
        n instanceof c('TintableIconSource')
          ? h.jsx(c('CometTintedIcon.react'), {
              alt: e,
              color: j(f),
              draggable: a.draggable,
              icon: n,
              ref: A,
              testid: void 0,
              xstyle: x,
            })
          : n instanceof c('ImageIconSource')
          ? h.jsx(c('BaseImage_DEPRECATED.react'), {
              alt: e,
              className: c('stylex')(
                i.image,
                n.resizeStrategy === 'contain' && i.imageContain,
                n.resizeStrategy === 'cover' && i.imageCover,
                x,
              ),
              draggable: a.draggable,
              ref: A,
              src: n.src,
              style: { height: n.height, width: n.width },
              testid: void 0,
            })
          : n instanceof c('IconSource')
          ? h.jsx(c('BaseImage_DEPRECATED.react'), {
              alt: e,
              className: c('stylex')(i.image, x),
              draggable: a.draggable,
              height: n.size,
              ref: A,
              src: n.src,
              width: n.size,
            })
          : n instanceof d('SVGIcon').LegacySVGIcon
          ? h.createElement(n.component, {
              alt: e,
              color: f,
              'data-testid': v,
              size: u,
            })
          : n instanceof d('SVGIcon').SVGIcon
          ? h.jsx(c('CometSVGIcon.react'), {
              alt: e,
              color: f,
              component: n.component,
              'data-testid': void 0,
              size: u,
            })
          : h.jsx(c('CometSVGIcon.react'), {
              alt: e,
              color: f,
              component: n,
              'data-testid': void 0,
              size: u,
            });
      return z
        ? h.jsx(
            c('CometPressable.react'),
            babelHelpers['extends']({}, y, {
              disabled: g,
              focusable: l,
              hideHoverOverlay: m,
              linkProps: o,
              onHoverIn: p,
              onHoverOut: q,
              onPress: r,
              onPressIn: s,
              onPressOut: t,
              overlayDisabled: k,
              overlayOffset: 8,
              overlayRadius: '50%',
              ref: b,
              testOnly_pressed: w,
              testid: void 0,
              xstyle: function (a) {
                a = a.pressed;
                return [i.button, a && i.pressed];
              },
              children: x,
            }),
          )
        : x;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function j(a) {
      switch (a) {
        case 'positive':
          return 'positive';
        case 'negative':
          return 'negative';
        case 'disabled':
          return 'disabled';
        case 'highlight':
          return 'accent';
        case 'secondary':
          return 'secondary';
        case 'tertiary':
          return 'placeholder';
        case 'white':
          return 'white';
        case 'primary':
          return 'primary';
        case 'warning':
          return 'warning';
        case 'blueLink':
          return 'blueLink';
        default:
          return 'black';
      }
    }
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
