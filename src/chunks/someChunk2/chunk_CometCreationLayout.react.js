__d(
  'CometCreationLayout.react',
  [
    'CometContentArea.react',
    'CometCreationContext',
    'CometCreationPreviewContainer.react',
    'CometErrorBoundary.react',
    'CometLeftRailAndMainContentContainer.react',
    'CometLeftRailBreadcrumbs.react',
    'CometLeftRailComponent.react',
    'CometLeftRailHeader.react',
    'emptyFunction',
    'getCometCreationLayoutBreadcrumbs',
    'react',
    'useScrollLeftRailToTopOnChange',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = { isDraft: !0 };
    function a(a) {
      var b = a.actorSelector,
        d = a.breadcrumbsOverride,
        e = a.creationCategoryName,
        f = a.creationCategoryURL,
        g = a.currentFormStep;
      g = g === void 0 ? 0 : g;
      var k = a.cometLeftRailHeaderMetaOverride,
        l = a.customPreview,
        m = a.disableProportionalHeader;
      m = m === void 0 ? !1 : m;
      var n = a.formAreaTitle,
        o = a.formSteps,
        p = a.isCometLeftRailInDialog;
      p = p === void 0 ? !1 : p;
      var q = a.isLeftRailSecondary;
      q = q === void 0 ? !1 : q;
      var r = a.onBreadcrumbPress;
      r = r === void 0 ? c('emptyFunction') : r;
      var s = a.previewAreaTitle,
        t = a.preview,
        u = a.previewContainerProps,
        v = a.previewErrorFallback;
      a = a.previewNullState;
      var w = o[g];
      d =
        (d = d) != null
          ? d
          : c('getCometCreationLayoutBreadcrumbs')(e, f, g, o, r);
      f =
        v != null
          ? function (a) {
              return h.jsx(c('CometContentArea.react'), {
                verticalAlign: 'middle',
                children: v(a),
              });
            }
          : function () {
              return null;
            };
      o =
        b != null
          ? h.jsx('div', { className: 'x1sxyh0 xurb0ha', children: b })
          : null;
      return h.jsx(c('CometLeftRailAndMainContentContainer.react'), {
        isLeftRailResponsive: !0,
        leftRailContent: h.jsx(c('CometLeftRailComponent.react'), {
          footer: w.footer,
          header: h.jsx(c('CometLeftRailHeader.react'), {
            auxiliary: w.titleAddOn,
            disableProportional: m,
            meta:
              (r = k) != null
                ? r
                : h.jsx(c('CometLeftRailBreadcrumbs.react'), {
                    breadcrumbs: d,
                  }),
            subTitle: w.subTitle,
            subTitleType: (b = w.subTitleType) != null ? b : 'body1',
            title: w.title,
          }),
          isCometLeftRailInDialog: p,
          primaryNav: h.jsxs(j, {
            currentFormStep: g,
            label: e,
            children: [o, w.body],
          }),
          primaryNavExpanding: !0,
        }),
        leftRailHeading: n,
        leftRailPrimary: !q,
        leftRailRole: q ? void 0 : 'main',
        mainContent:
          t != null
            ? h.jsx(c('CometContentArea.react'), {
                hasNoRole: !0,
                children: h.jsx(c('CometCreationContext').Provider, {
                  value: i,
                  children: h.jsxs(c('CometErrorBoundary.react'), {
                    fallback: f,
                    children: [
                      l,
                      h.jsx(
                        c('CometCreationPreviewContainer.react'),
                        babelHelpers['extends']({}, u, { children: t }),
                      ),
                    ],
                  }),
                }),
              })
            : h.jsx(c('CometContentArea.react'), {
                verticalAlign: 'middle',
                children: a,
              }),
        mainContentHeading: s,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    function j(a) {
      var b = a.children,
        d = a.currentFormStep;
      a = a.label;
      c('useScrollLeftRailToTopOnChange')(d);
      return h.jsx('div', {
        'aria-label': a,
        className: 'x78zum5 xdt5ytf x1iyjqo2',
        role: 'form',
        children: b,
      });
    }
    j.displayName = j.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
