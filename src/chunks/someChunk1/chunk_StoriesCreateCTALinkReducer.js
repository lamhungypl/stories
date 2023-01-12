__d(
  'StoriesCreateCTALinkReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = { ctaType: null, link: null, linkInputError: !1, page: null };
    function a(a, b) {
      var c = a.ctaLinkData;
      c == null && (c = babelHelpers['extends']({}, g));
      switch (b.type) {
        case 'CTA_LINK_UPDATE':
          return babelHelpers['extends']({}, a, {
            ctaLinkData: babelHelpers['extends']({}, c, b.data),
          });
        case 'CTA_LINK_DELETE':
          return babelHelpers['extends']({}, a, {
            ctaLinkData: babelHelpers['extends']({}, g),
          });
        case 'CTA_UPDATE_LINK_INPUT_ERROR':
          return babelHelpers['extends']({}, a, {
            ctaLinkData: babelHelpers['extends']({}, c, {
              linkInputError: b.error,
            }),
          });
      }
      return a;
    }
    f['default'] = a;
  },
  66,
);
