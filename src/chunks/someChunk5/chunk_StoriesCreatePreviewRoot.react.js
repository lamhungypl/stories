__d(
  'StoriesCreatePreviewRoot.react',
  [
    'CometPlaceholder.react',
    'CometRelay',
    'CometUFIVideoPlayerUtils',
    'JSResourceForInteraction',
    'RelayHooks',
    'StoriesCreateMediaTypeEnum',
    'StoriesCreatePhotoPreviewPlaceholder.react',
    'StoriesCreatePreviewPlaceholder.react',
    'StoriesCreatePreviewRoot_data.graphql',
    'StoriesCreatePreviewUtils',
    'lazyLoadComponent',
    'react',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i = d('react'),
      j = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'StoriesCreatePhotoPreview.react',
        ).__setRef('StoriesCreatePreviewRoot.react'),
      ),
      k = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'StoriesCreateSATPPreview.react',
        ).__setRef('StoriesCreatePreviewRoot.react'),
      ),
      l = c('lazyLoadComponent')(
        c('JSResourceForInteraction')(
          'StoriesCreateVideoPreview.react',
        ).__setRef('StoriesCreatePreviewRoot.react'),
      ),
      m = h !== void 0 ? h : (h = b('StoriesCreatePreviewRoot_data.graphql'));
    function a(a) {
      var b = a.dataRef;
      a = a.mediaType;
      b = d('RelayHooks').useFragment(m, b);
      if (a === c('StoriesCreateMediaTypeEnum').PHOTO)
        return i.jsx(c('CometPlaceholder.react'), {
          fallback: i.jsx(c('StoriesCreatePhotoPreviewPlaceholder.react'), {}),
          children: i.jsx(j, { dataRef: b }),
        });
      else if (a === c('StoriesCreateMediaTypeEnum').VIDEO)
        return i.jsx(c('CometPlaceholder.react'), {
          fallback: null,
          children: i.jsx(
            d('CometUFIVideoPlayerUtils')
              .CometUFIVideoPlayerStateAndControllerContextProvider,
            { children: i.jsx(l, {}) },
          ),
        });
      else
        return i.jsx(d('CometRelay').RelayEnvironmentProvider, {
          environment: d('StoriesCreatePreviewUtils')
            .storiesCreatePreviewEnvironment,
          children: i.jsx(c('CometPlaceholder.react'), {
            fallback: i.jsx(c('StoriesCreatePreviewPlaceholder.react'), {}),
            children: i.jsx(k, {}),
          }),
        });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = c('withStoriesCreateViewStatePart')(a, function (a) {
      return { mediaType: (a = a.formData) == null ? void 0 : a.mediaType };
    });
    g['default'] = e;
  },
  98,
);
