__d(
  'StoriesCreatePhotoReducer',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      var c = a.photoData;
      c == null &&
        (c = {
          bounds: { height: 0, width: 0, x: 0, y: 0 },
          displayedURI: null,
          offset: { dx: 0, dy: 0 },
          rotation: 0,
          scale: 0,
          uploadingInfo: null,
        });
      switch (b.type) {
        case 'photo_update_bounds':
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, { bounds: b.bounds }),
          });
        case 'photo_update_offset':
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, {
              offset: { dx: b.dx, dy: b.dy },
            }),
          });
        case 'photo_update_rotation':
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, { rotation: b.value }),
          });
        case 'photo_update_scale':
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, { scale: b.value }),
          });
        case 'photo_update_uri':
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, {
              displayedURI: b.value,
            }),
          });
        case 'photo_update_upload_id':
          var d = b.photoDescriptorID,
            e = b.uploadID;
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, {
              uploadingInfo: { photoDescriptorID: d, uploadID: e },
            }),
          });
        case 'photo_update_ent_id':
          d = c.uploadingInfo == null ? null : c.uploadingInfo;
          if (d != null)
            return babelHelpers['extends']({}, a, {
              photoData: babelHelpers['extends']({}, c, {
                uploadingInfo: babelHelpers['extends']({}, d, {
                  entID: b.entID,
                }),
              }),
            });
          break;
        case 'photo_clear_uploading':
          return babelHelpers['extends']({}, a, {
            photoData: babelHelpers['extends']({}, c, { uploadingInfo: null }),
          });
      }
      return a;
    }
    f['default'] = a;
  },
  66,
);
