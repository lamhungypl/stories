__d(
  'StoriesCreateFormSATPPlaceholder.react',
  ['BaseGlimmer.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        backgroundPicker: {
          borderTopStartRadius: 'xhk9q7s',
          borderTopEndRadius: 'x1otrzb0',
          borderBottomEndRadius: 'x1i1ezom',
          borderBottomStartRadius: 'x1o6z2jb',
          height: 'xtha0ss',
          marginTop: 'xw7yly9',
          $$css: !0,
        },
        fontPicker: {
          borderTopStartRadius: 'xhk9q7s',
          borderTopEndRadius: 'x1otrzb0',
          borderBottomEndRadius: 'x1i1ezom',
          borderBottomStartRadius: 'x1o6z2jb',
          height: 'xnnlda6',
          marginTop: 'xw7yly9',
          $$css: !0,
        },
        root: { width: 'x2ewi1q', $$css: !0 },
        textArea: {
          borderTopStartRadius: 'xhk9q7s',
          borderTopEndRadius: 'x1otrzb0',
          borderBottomEndRadius: 'x1i1ezom',
          borderBottomStartRadius: 'x1o6z2jb',
          height: 'xkq7avx',
          marginTop: 'xw7yly9',
          $$css: !0,
        },
      };
    function a() {
      return h.jsxs('div', {
        className: 'x2ewi1q',
        children: [
          h.jsx(c('BaseGlimmer.react'), {
            index: 0,
            theme: 'dark',
            xstyle: i.textArea,
          }),
          h.jsx(c('BaseGlimmer.react'), {
            index: 1,
            theme: 'dark',
            xstyle: i.fontPicker,
          }),
          h.jsx(c('BaseGlimmer.react'), {
            index: 1,
            theme: 'dark',
            xstyle: i.backgroundPicker,
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
