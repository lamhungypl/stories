__d(
  'useStoriesCreateFormEditorRoot',
  [
    'fbt',
    'CometPlaceholder.react',
    'CometRelay',
    'JSResourceForInteraction',
    'StoriesCreateFormBodyWrapper.react',
    'StoriesCreateFormPhotoPlaceholder.react',
    'StoriesCreateFormSATPPlaceholder.react',
    'StoriesCreateMediaTypeEnum',
    'StoriesCreateSATPReducer',
    'StoriesCreateSettingButton.react',
    'StoriesCreateViewStateContext',
    'cr:1448152',
    'lazyLoadComponent',
    'react',
    'useStoriesCreateFormEditorRoot.graphql',
    'useStoriesCreateReducer',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i,
      j = d('react'),
      k = d('react').useContext,
      l = c('lazyLoadComponent')(
        c('JSResourceForInteraction')('StoriesCreateFormSATP.react').__setRef(
          'useStoriesCreateFormEditorRoot',
        ),
      ),
      m = c('lazyLoadComponent')(
        c('JSResourceForInteraction')('StoriesCreateFormPhoto.react').__setRef(
          'useStoriesCreateFormEditorRoot',
        ),
      ),
      n = c('lazyLoadComponent')(
        c('JSResourceForInteraction')('StoriesCreateFormVideo.react').__setRef(
          'useStoriesCreateFormEditorRoot',
        ),
      ),
      o = i !== void 0 ? i : (i = b('useStoriesCreateFormEditorRoot.graphql'));
    function a(a) {
      var e = k(c('StoriesCreateViewStateContext'));
      a = d('CometRelay').useFragment(o, a);
      c('useStoriesCreateReducer')(c('StoriesCreateSATPReducer'));
      e = e.formData;
      var f = j.jsx('div', { children: h._('__JHASH__9OGz8ZnAGKc__JHASH__') });
      if ((e == null ? void 0 : e.mediaType) != null)
        switch (e == null ? void 0 : e.mediaType) {
          case c('StoriesCreateMediaTypeEnum').SATP:
            f = j.jsx(c('StoriesCreateFormBodyWrapper.react'), {
              dataRef: a,
              children: j.jsx(c('CometPlaceholder.react'), {
                fallback: j.jsx(
                  c('StoriesCreateFormSATPPlaceholder.react'),
                  {},
                ),
                children: j.jsx(l, { satp: a }),
              }),
            });
            break;
          case c('StoriesCreateMediaTypeEnum').PHOTO:
            f = j.jsx(c('StoriesCreateFormBodyWrapper.react'), {
              dataRef: a,
              children: j.jsx(c('CometPlaceholder.react'), {
                fallback: j.jsx(
                  c('StoriesCreateFormPhotoPlaceholder.react'),
                  {},
                ),
                children: j.jsx(m, { dataRef: a }),
              }),
            });
            break;
          case c('StoriesCreateMediaTypeEnum').VIDEO:
            f = j.jsx(c('StoriesCreateFormBodyWrapper.react'), {
              dataRef: a,
              children: j.jsx(n, {}),
            });
        }
      return {
        body: f,
        footer: j.jsx(b('cr:1448152'), {}),
        hideBreadcrumb: !0,
        title: h._('__JHASH__rLp7PFpVEKR__JHASH__'),
        titleAddOn: j.jsx(c('StoriesCreateSettingButton.react'), {}),
      };
    }
    g['default'] = a;
  },
  98,
);
