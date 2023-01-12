__d(
  'CometFeedStoryGlimmer.react',
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
        context: {
          display: 'x78zum5',
          paddingTop: 'xz9dl7a',
          paddingEnd: 'x1pi30zi',
          paddingBottom: 'xsag5q8',
          paddingStart: 'x1swvt13',
          $$css: !0,
        },
        contextActorName: {
          borderTopStartRadius: 'x8u2fvd',
          borderTopEndRadius: 'x1ht7hnu',
          borderBottomEndRadius: 'x1quq95r',
          borderBottomStartRadius: 'x5yzy4c',
          height: 'x170jfvy',
          marginTop: 'xr1yuqi',
          width: 'x29ncy0',
          $$css: !0,
        },
        contextData: {
          display: 'x78zum5',
          flexDirection: 'xdt5ytf',
          flexGrow: 'x1iyjqo2',
          height: 'x1vqgdyp',
          $$css: !0,
        },
        contextMetadata: {
          borderTopStartRadius: 'x8u2fvd',
          borderTopEndRadius: 'x1ht7hnu',
          borderBottomEndRadius: 'x1quq95r',
          borderBottomStartRadius: 'x5yzy4c',
          height: 'x170jfvy',
          marginTop: 'xr1yuqi',
          marginEnd: 'x11i5rnm',
          marginBottom: 'x4ii5y1',
          marginStart: 'x1mh8g0r',
          width: 'x1exxlbk',
          $$css: !0,
        },
        contextProfilePhoto: {
          borderTopStartRadius: 'x14yjl9h',
          borderTopEndRadius: 'xudhj91',
          borderBottomEndRadius: 'x18nykt9',
          borderBottomStartRadius: 'xww2gxu',
          height: 'x1vqgdyp',
          marginEnd: 'x1emribx',
          width: 'x100vrsf',
          $$css: !0,
        },
        root: { marginBottom: 'x1yztbdb', width: 'xh8yej3', $$css: !0 },
        ufi: {
          display: 'x78zum5',
          justifyContent: 'x1l1ennw',
          paddingTop: 'x1ixqb2u',
          paddingEnd: 'x1pi30zi',
          paddingBottom: 'x1l90r2v',
          paddingStart: 'x1swvt13',
          $$css: !0,
        },
        ufiGlimmer: {
          borderTopStartRadius: 'x8u2fvd',
          borderTopEndRadius: 'x1ht7hnu',
          borderBottomEndRadius: 'x1quq95r',
          borderBottomStartRadius: 'x5yzy4c',
          height: 'x170jfvy',
          width: 'xge0ay3',
          $$css: !0,
        },
      };
    function a(a, b) {
      var d = a.border;
      d = d === void 0 ? 'none' : d;
      a = a.dropShadow;
      a = a === void 0 ? 1 : a;
      return h.jsx('div', {
        role: 'article',
        children: h.jsx(c('BaseLoadingStateElement.react'), {
          ref: b,
          xstyle: i.root,
          children: h.jsxs(c('CometCard.react'), {
            background: 'white',
            border: d,
            dropShadow: a,
            children: [
              h.jsxs('div', {
                className: 'x78zum5 xz9dl7a x1pi30zi xsag5q8 x1swvt13',
                children: [
                  h.jsx(c('BaseGlimmer.react'), {
                    index: 0,
                    xstyle: i.contextProfilePhoto,
                  }),
                  h.jsxs('div', {
                    className: 'x78zum5 xdt5ytf x1iyjqo2 x1vqgdyp',
                    children: [
                      h.jsx(c('BaseGlimmer.react'), {
                        index: 0,
                        xstyle: i.contextActorName,
                      }),
                      h.jsx(c('BaseGlimmer.react'), {
                        index: 0,
                        xstyle: i.contextMetadata,
                      }),
                    ],
                  }),
                ],
              }),
              h.jsxs('div', {
                className:
                  'x78zum5 x1l1ennw x1ixqb2u x1pi30zi x1l90r2v x1swvt13',
                children: [
                  h.jsx(c('BaseGlimmer.react'), {
                    index: 1,
                    xstyle: i.ufiGlimmer,
                  }),
                  h.jsx(c('BaseGlimmer.react'), {
                    index: 2,
                    xstyle: i.ufiGlimmer,
                  }),
                  h.jsx(c('BaseGlimmer.react'), {
                    index: 3,
                    xstyle: i.ufiGlimmer,
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
