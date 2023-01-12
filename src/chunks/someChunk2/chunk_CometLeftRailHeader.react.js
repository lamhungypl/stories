__d(
  'CometLeftRailHeader.react',
  [
    'fbt',
    'ix',
    'BaseHeading.react',
    'BaseRow.react',
    'BaseRowItem.react',
    'CometBase.react',
    'CometGlobalPanelLayoutContext',
    'TetraIcon.react',
    'TetraText.react',
    'TetraTextPairing.react',
    'fbicon',
    'react',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = d('react'),
      k = d('react').useContext,
      l = {
        auxiliary: {
          alignItems: 'xuk3077',
          display: 'x78zum5',
          flexBasis: 'x1upgvki',
          flexGrow: 'x1c4vz4f',
          flexShrink: 'x2lah0s',
          justifyContent: 'xl56j7k',
          maxHeight: 'x1b12d3d',
          $$css: !0,
        },
        auxiliaryFlexBasisAuto: { flexBasis: 'xdl72j9', $$css: !0 },
        auxiliaryInner: {
          display: 'x78zum5',
          flexShrink: 'x2lah0s',
          $$css: !0,
        },
        backButton: { marginEnd: 'x1h5jrl4', $$css: !0 },
        headingRows: {
          marginTop: 'x1sy10c2',
          marginEnd: 'xktsk01',
          marginBottom: 'xod5an3',
          marginStart: 'x1d52u69',
          $$css: !0,
        },
        headingRowWithGlobalPanel: { marginTop: 'xaqh0s9', $$css: !0 },
        meta: { marginBottom: 'xu06os2', $$css: !0 },
        titleBlock: { flexBasis: 'x1f0eagk', flexGrow: 'x1iyjqo2', $$css: !0 },
        titleBlockFlexBasisAuto: { flexBasis: 'xdl72j9', $$css: !0 },
      };
    function a(a) {
      var b = a.auxiliary,
        e = a.backActionAddOn,
        f = a.disableProportional;
      f = f === void 0 ? !1 : f;
      var g = a.isPrimaryHeading;
      g = g === void 0 ? !0 : g;
      var m = a.meta,
        n = a.subTitle,
        o = a.subTitleType,
        p = a.title;
      a = a.xstyle;
      var q = k(c('CometGlobalPanelLayoutContext'));
      return j.jsxs(c('BaseRow.react'), {
        verticalAlign: 'center',
        xstyle: [l.headingRows, q && l.headingRowWithGlobalPanel, a],
        children: [
          e != null &&
            j.jsx(c('BaseRowItem.react'), {
              xstyle: l.backButton,
              children: j.jsx(
                c('TetraIcon.react'),
                babelHelpers['extends']({}, e, {
                  'aria-label': h._('__JHASH__NdA_cK5EiDA__JHASH__'),
                  color: 'secondary',
                  icon: d('fbicon')._(i('512647'), 20),
                }),
              ),
            }),
          j.jsx(c('BaseRowItem.react'), {
            expanding: !0,
            children: j.jsxs(c('BaseRow.react'), {
              verticalAlign: 'center',
              children: [
                j.jsxs(c('BaseRowItem.react'), {
                  expanding: !0,
                  useDeprecatedStyles: !0,
                  xstyle: [l.titleBlock, f && l.titleBlockFlexBasisAuto],
                  children: [
                    m != null &&
                      j.jsx(c('CometBase.react'), {
                        xstyle: l.meta,
                        children: m,
                      }),
                    j.jsx(c('TetraTextPairing.react'), {
                      headline: j.jsx(c('BaseHeading.react'), {
                        isPrimaryHeading: g,
                        children: p,
                      }),
                      level: 1,
                      meta:
                        n != null
                          ? j.jsx(c('TetraText.react'), {
                              color: 'secondary',
                              type: o != null ? o : 'body3',
                              children: n,
                            })
                          : void 0,
                    }),
                  ],
                }),
                b != null &&
                  j.jsx(c('BaseRowItem.react'), {
                    xstyle: [l.auxiliary, f && l.auxiliaryFlexBasisAuto],
                    children: j.jsx('div', {
                      className: 'x78zum5 x2lah0s',
                      children: b,
                    }),
                  }),
              ],
            }),
          }),
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
