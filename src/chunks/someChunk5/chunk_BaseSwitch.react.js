__d(
  'BaseSwitch.react',
  ['BaseFocusRing.react', 'BaseInput.react', 'BaseView.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        switch: {
          cursor: 'x1ypdohk',
          height: 'x5yr21d',
          marginTop: 'xdj266r',
          marginEnd: 'x11i5rnm',
          marginBottom: 'xat24cr',
          marginStart: 'x1mh8g0r',
          opacity: 'x1w3u9th',
          outline: 'x1a2a7pz',
          paddingTop: 'xexx8yu',
          paddingEnd: 'x4uap5',
          paddingBottom: 'x18d9i69',
          paddingStart: 'xkhd6sd',
          position: 'x10l6tqk',
          start: 'x17qophe',
          top: 'x13vifvy',
          width: 'xh8yej3',
          $$css: !0,
        },
        wrapper: { position: 'x1n2onr6', $$css: !0 },
      };
    function a(a, b) {
      var d = a.children,
        e = a.suppressFocusRing,
        f = a.testid,
        g = a.xstyle,
        j = babelHelpers.objectWithoutPropertiesLoose(a, [
          'children',
          'suppressFocusRing',
          'testid',
          'xstyle',
        ]);
      return h.jsx(c('BaseFocusRing.react'), {
        suppressFocusRing: e,
        children: function (a) {
          return h.jsxs(c('BaseView.react'), {
            testid: void 0,
            xstyle: [i.wrapper, a, g],
            children: [
              d,
              h.jsx(
                c('BaseInput.react'),
                babelHelpers['extends']({}, j, {
                  'aria-checked': (a = j.checked) != null ? a : !1,
                  ref: b,
                  role: 'switch',
                  type: 'checkbox',
                  xstyle: i['switch'],
                }),
              ),
            ],
          });
        },
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.memo(h.forwardRef(a));
    g['default'] = b;
  },
  98,
);
