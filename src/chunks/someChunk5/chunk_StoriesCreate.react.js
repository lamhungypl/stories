__d(
  'StoriesCreate.react',
  [
    'fbt',
    'Actor',
    'CometCreationLayout.react',
    'CometRelay',
    'FBLogger',
    'StoriesComposerCometHeadlessMediaUploader.react',
    'StoriesCreateMediaReducer',
    'StoriesCreateMediaUploaderContext',
    'StoriesCreateNullStateView.react',
    'StoriesCreatePreviewRoot.react',
    'StoriesCreateQuery.graphql',
    'StoriesCreateStoryReducer',
    'StoriesCreateViewStateDispatcherContext',
    'XCometStoriesCreateControllerRouteBuilder',
    'cometComposerLogger',
    'getComposerMediaFileUploader',
    'react',
    'useQP',
    'useRoutePassthroughProps',
    'useStoriesCreateFormSteps',
    'useStoriesCreateReducer',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react');
    e = d('react');
    var k = e.useContext,
      l = e.useEffect,
      m = e.useMemo,
      n = e.useState,
      o = i !== void 0 ? i : (i = b('StoriesCreateQuery.graphql'));
    function a(a) {
      var b,
        e = a.composerSessionID,
        f = a.queryReference;
      a = a.step;
      var g = d('Actor').useActor(),
        i = g[0];
      g = n({ uploader: null });
      var p = g[0],
        q = g[1];
      g = d('CometRelay').usePreloadedQuery(o, f);
      c('useStoriesCreateReducer')(c('StoriesCreateMediaReducer'));
      c('useStoriesCreateReducer')(c('StoriesCreateStoryReducer'));
      var r = c('useRoutePassthroughProps')();
      l(function () {
        var a =
          r && r.entryPoint != null && r.sourceSurface != null
            ? {
                composerEntryPointName: String(r.entryPoint),
                composerSourceSurface: String(r.sourceSurface),
                composerType: 'stories',
              }
            : {
                composerEntryPointName: 'add_to_story_stories_surface',
                composerSourceSurface: 'newsfeed',
                composerType: 'stories',
              };
        c('cometComposerLogger')({ fields: a, type: 'COMPOSER_ENTRY' }, e);
      }, []);
      f =
        (f = g.viewer) == null
          ? void 0
          : (f = f.eligible_promotions) == null
          ? void 0
          : (f = f.nodes) == null
          ? void 0
          : f[0];
      var s =
        f == null
          ? void 0
          : (b = f.comet_qp_sections) == null
          ? void 0
          : b.renderer_strategy;
      b = c('useQP')(f);
      var t = b[0],
        u = b[1];
      f = m(
        function () {
          if (s != null && t) {
            u.onVisible();
            return j.jsx(d('CometRelay').MatchContainer, {
              match: s,
              props: {
                canRender: t,
                onClose: function () {
                  u.onDismiss();
                },
              },
            });
          }
        },
        [t, s, u],
      );
      var v =
          g == null
            ? void 0
            : (b = g.viewer) == null
            ? void 0
            : b.comet_composer_video_uploader_config,
        w = m(
          function () {
            if (v == null) return {};
            try {
              return JSON.parse(v);
            } catch (a) {
              c('FBLogger')('fbstories').info(
                'Failed to parse JSON in video uploader config',
              );
              return {};
            }
          },
          [v],
        );
      l(
        function () {
          var a = c('getComposerMediaFileUploader')(i, w, e, !1);
          a.photoUploader.setOption('handleErrorAfterUnload', !0);
          a.photoUploader.setUploadData(
            babelHelpers['extends']({}, a.photoUploader.getUploadData(), {
              waterfallxapp: 'comet_stories',
            }),
          );
          q({ uploader: a });
        },
        [i, e, w],
      );
      b = c('useStoriesCreateFormSteps')(g);
      var x = k(c('StoriesCreateViewStateDispatcherContext'));
      b = {
        breadcrumbsOverride: [],
        creationCategoryName: h._('__JHASH__3H7YDu5utR___JHASH__'),
        creationCategoryURL: c(
          'XCometStoriesCreateControllerRouteBuilder',
        ).buildURL({}),
        currentFormStep: a,
        formAreaTitle: h._('__JHASH__a7E6YPj9ESz__JHASH__'),
        formSteps: b,
        previewAreaTitle: h._('__JHASH__cBSx-Hj6W6v__JHASH__'),
        previewContainerProps: { allowFocus: !0, hasResponsiveToggle: !1 },
      };
      if (a === 0) {
        b = babelHelpers['extends']({}, b, {
          previewNullState: j.jsx(c('StoriesCreateNullStateView.react'), {}),
        });
        return j.jsx(
          c('CometCreationLayout.react'),
          babelHelpers['extends']({ isLeftRailSecondary: !0 }, b),
        );
      } else
        b = babelHelpers['extends']({}, b, {
          preview: j.jsx(c('StoriesCreatePreviewRoot.react'), { dataRef: g }),
          previewErrorFallback: function () {
            x({
              errorMessage: h._('__JHASH__sWqcIwg0eXV__JHASH__'),
              type: 'RESET_VIEWSTATE_SET_ERROR',
            });
            return null;
          },
        });
      return j.jsxs(c('StoriesCreateMediaUploaderContext').Provider, {
        value: p,
        children: [
          j.jsx(c('StoriesComposerCometHeadlessMediaUploader.react'), {}),
          j.jsx(
            c('CometCreationLayout.react'),
            babelHelpers['extends']({ isLeftRailSecondary: !0 }, b),
          ),
          f,
        ],
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = c('withStoriesCreateViewStatePart')(a, function (a) {
      return {
        composerSessionID: a.composerSessionID,
        step: ((a = a.formData) == null ? void 0 : a.step) || 0,
      };
    });
    g['default'] = e;
  },
  98,
);
