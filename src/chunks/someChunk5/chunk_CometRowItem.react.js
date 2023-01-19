__d(
  'CometRowItem.react',
  [
    'BaseRowItem.react',
    'CometErrorBoundary.react',
    'CometPlaceholder.react',
    'CometRowContext',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useContext,
      j = {
        4: { paddingEnd: 'xg83lxy', paddingStart: 'x1h0ha7o', $$css: !0 },
        8: { paddingEnd: 'x150jy0e', paddingStart: 'x1e558r4', $$css: !0 },
        12: { paddingEnd: 'xsyo7zv', paddingStart: 'x16hj40l', $$css: !0 },
        16: { paddingEnd: 'x1sxyh0', paddingStart: 'xurb0ha', $$css: !0 },
        24: { paddingEnd: 'xn6708d', paddingStart: 'x1ye3gou', $$css: !0 },
        32: { paddingEnd: 'x1pi30zi', paddingStart: 'x1swvt13', $$css: !0 },
      },
      k = {
        4: { paddingBottom: 'x1120s5i', paddingTop: 'x1nn3v0j', $$css: !0 },
        8: { paddingBottom: 'xjkvuk6', paddingTop: 'x1iorvi4', $$css: !0 },
        12: { paddingBottom: 'x10b6aqq', paddingTop: 'x1yrsyyn', $$css: !0 },
        16: { paddingBottom: 'xwib8y2', paddingTop: 'x1y1aw1k', $$css: !0 },
        24: { paddingBottom: 'xsag5q8', paddingTop: 'xz9dl7a', $$css: !0 },
        32: { paddingBottom: 'x1l90r2v', paddingTop: 'xyamay9', $$css: !0 },
      };
    function a(a, b) {
      var d;
      d = (d = i(c('CometRowContext'))) != null ? d : {};
      var e = d.spacingHorizontal;
      d = d.spacingVertical;
      var f = a.fallback,
        g = a.placeholder,
        m = babelHelpers.objectWithoutPropertiesLoose(a, [
          'fallback',
          'placeholder',
        ]);
      if (g !== void 0) {
        a.placeholder;
        var n = babelHelpers.objectWithoutPropertiesLoose(a, ['placeholder']);
        return h.jsx(c('CometPlaceholder.react'), {
          fallback:
            g != null
              ? h.jsx(
                  l,
                  babelHelpers['extends']({}, n, { ref: b, children: g }),
                )
              : null,
          children: h.jsx(l, babelHelpers['extends']({}, n, { ref: b })),
        });
      }
      if (f !== void 0) {
        a.fallback;
        var o = babelHelpers.objectWithoutPropertiesLoose(a, ['fallback']);
        return f === null
          ? h.jsx(c('CometErrorBoundary.react'), {
              children: h.jsx(l, babelHelpers['extends']({}, o, { ref: b })),
            })
          : h.jsx(c('CometErrorBoundary.react'), {
              fallback: function (a, c) {
                return h.jsx(
                  l,
                  babelHelpers['extends']({}, o, {
                    ref: b,
                    children: typeof f === 'function' ? f(a, c) : f,
                  }),
                );
              },
              children: h.jsx(l, babelHelpers['extends']({}, o, { ref: b })),
            });
      }
      return h.jsx(
        c('BaseRowItem.react'),
        babelHelpers['extends']({}, m, {
          ref: b,
          useDeprecatedStyles: m.useDeprecatedStyles,
          xstyle: [j[e], k[d], m.xstyle],
          children: h.jsx(c('CometRowContext').Provider, {
            value: null,
            children: m.children,
          }),
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    var l = h.forwardRef(a);
    b = l;
    g['default'] = b;
  },
  98,
);
