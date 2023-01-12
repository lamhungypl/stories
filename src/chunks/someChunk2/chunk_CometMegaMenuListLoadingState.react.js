__d(
  'CometMegaMenuListLoadingState.react',
  [
    'CometCard.react',
    'CometColumn.react',
    'CometColumnItem.react',
    'CometMegaMenuListSectionsLoadingState.react',
    'CometTypeaheadRoundedInputGlimmer.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = { input: { height: 'xc9qbxq', $$css: !0 } };
    function a() {
      return h.jsx(c('CometCard.react'), {
        background: 'white',
        dropShadow: 1,
        children: h.jsxs(c('CometColumn.react'), {
          paddingHorizontal: 4,
          children: [
            h.jsx(c('CometColumnItem.react'), {
              paddingHorizontal: 16,
              paddingVertical: 16,
              children: h.jsx(c('CometTypeaheadRoundedInputGlimmer.react'), {
                xStyle: i.input,
              }),
            }),
            h.jsx(c('CometColumnItem.react'), {
              children: h.jsx(
                c('CometMegaMenuListSectionsLoadingState.react'),
                {},
              ),
            }),
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
