__d(
  'SearchCometGlobalTypeaheadGlimmer.react',
  [
    'CometTypeaheadRoundedInputGlimmer.react',
    'react',
    'stylex',
    'useSearchCometGlobalTypeaheadStyles',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        inputGlimmer: { flexGrow: 'x1iyjqo2', height: 'x1vqgdyp', $$css: !0 },
        inputStyle: { paddingEnd: 'x1sxyh0', $$css: !0 },
      };
    function a(a) {
      a = a.inputStartContent;
      var b = c('useSearchCometGlobalTypeaheadStyles')();
      b = b.inputXStyle;
      return h.jsxs('div', {
        className: c('stylex')(b, i.inputStyle),
        children: [
          a,
          h.jsx(c('CometTypeaheadRoundedInputGlimmer.react'), {
            xStyle: i.inputGlimmer,
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
