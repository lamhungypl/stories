__d(
  'FeedInlineComposerGlimmer.react',
  [
    'BaseGlimmer.react',
    'BaseLoadingStateElement.react',
    'CometCard.react',
    'react',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = {
        composerContent: {
          alignItems: 'x6s0dn4',
          boxSizing: 'x9f619',
          display: 'x78zum5',
          flexWrap: 'x1a02dak',
          paddingTop: 'xz9dl7a',
          paddingEnd: 'x1pi30zi',
          paddingBottom: 'x1a8lsjc',
          paddingStart: 'x1swvt13',
          width: 'xh8yej3',
          $$css: !0,
        },
        imageGlimmer: {
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          height: 'x1vqgdyp',
          width: 'x100vrsf',
          $$css: !0,
        },
        inlineSprouts: {
          display: 'x78zum5',
          marginTop: 'x1tfhste',
          width: 'xh8yej3',
          $$css: !0,
        },
        input: { flexGrow: 'x1iyjqo2', $$css: !0 },
        inputGlimmer: {
          borderTopStartRadius: 'x107yiy2',
          borderTopEndRadius: 'xv8uw2v',
          borderBottomEndRadius: 'x1tfwpuw',
          borderBottomStartRadius: 'x2g32xy',
          height: 'x1vqgdyp',
          width: 'xh8yej3',
          $$css: !0,
        },
        profileImage: { marginEnd: 'x1emribx', $$css: !0 },
        root: { height: 'xni0hvr', $$css: !0 },
        sprout: {
          borderTopStartRadius: 'x8u2fvd',
          borderTopEndRadius: 'x1ht7hnu',
          borderBottomEndRadius: 'x1quq95r',
          borderBottomStartRadius: 'x5yzy4c',
          flexGrow: 'x1iyjqo2',
          height: 'x170jfvy',
          marginEnd: 'x1gja9t',
          marginStart: 'x8vdgqj',
          $$css: !0,
        },
      };
    function a(a) {
      a = a.isFocusTarget;
      return h.jsx(c('BaseLoadingStateElement.react'), {
        isFocusTarget: a,
        xstyle: i.root,
        children: h.jsx(c('CometCard.react'), {
          background: 'white',
          dropShadow: 1,
          children: h.jsx('div', {
            className: 'xni0hvr',
            children: h.jsxs('div', {
              className:
                'x6s0dn4 x9f619 x78zum5 x1a02dak xz9dl7a x1pi30zi x1a8lsjc x1swvt13 xh8yej3',
              children: [
                h.jsx('div', {
                  className: 'x1emribx',
                  children: h.jsx(c('BaseGlimmer.react'), {
                    index: 0,
                    xstyle: i.imageGlimmer,
                  }),
                }),
                h.jsx('div', {
                  className: 'x1iyjqo2',
                  children: h.jsx(c('BaseGlimmer.react'), {
                    index: 0,
                    xstyle: i.inputGlimmer,
                  }),
                }),
                h.jsxs('div', {
                  className: 'x78zum5 x1tfhste xh8yej3',
                  children: [
                    h.jsx(c('BaseGlimmer.react'), {
                      index: 0,
                      xstyle: i.sprout,
                    }),
                    h.jsx(c('BaseGlimmer.react'), {
                      index: 0,
                      xstyle: i.sprout,
                    }),
                    h.jsx(c('BaseGlimmer.react'), {
                      index: 0,
                      xstyle: i.sprout,
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
