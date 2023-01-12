__d(
  'BaseButtonOrLink_DEPRECATED.react',
  ['CometPressable.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var d = a.fbclid,
        e = a.href,
        f = a.lynxMode,
        g = a.onClick,
        i = a.passthroughProps,
        j = a.preventLocalNavigation,
        k = a.rel,
        l = a.replace,
        m = a.routeTarget,
        n = a.target,
        o = a.to;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        'fbclid',
        'href',
        'lynxMode',
        'onClick',
        'passthroughProps',
        'preventLocalNavigation',
        'rel',
        'replace',
        'routeTarget',
        'target',
        'to',
      ]);
      e = (e = e) != null ? e : o == null ? void 0 : o.url;
      o =
        e != null
          ? {
              fbclid: d,
              lynxMode: f,
              passthroughProps: i,
              preventLocalNavigation: j,
              rel: k,
              replace: l,
              routeTarget: m,
              target: n,
              url: e,
            }
          : void 0;
      return h.jsx(
        c('CometPressable.react'),
        babelHelpers['extends']({}, a, {
          display: 'inline',
          linkProps: o,
          onPress: g,
          overlayDisabled: !0,
          ref: b,
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
