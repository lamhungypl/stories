__d(
  'StoriesCreateMediaReducer',
  ['composerMediaAttachmentReducer'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      switch (b.type) {
        case 'ADD_MEDIA_ATTACHMENT_ITEMS':
        case 'REMOVE_MEDIA_ATTACHMENT_ITEM':
        case 'REMOVE_ALL_MEDIA_ATTACHMENT_ITEMS':
        case 'MEDIA_ATTACHMENT_CLIENT_PROCESSING_COMPLETED':
        case 'QUEUE_UPLOADS':
        case 'MARK_UPLOADS_CLIENT_PROCESSING':
        case 'MARK_UNKNOWN_UPLOADS_AS_PHOTO':
        case 'MEDIA_UPLOAD_STARTED':
        case 'MEDIA_UPLOAD_PROGRESS':
        case 'MEDIA_UPLOAD_SUCCESSFUL':
        case 'REORDER_MEDIA_ATTACHMENT_ITEM':
        case 'SAVE_MEDIA_EDITS':
        case 'SET_MEDIA_ATTACHMENT_CAPTION':
        case 'SET_MEDIA_ATTACHMENT_ITEM_USE_CDN_PREVIEW':
        case 'SET_MEDIA_ATTACHMENT_ITEM_CDN_DIMENSIONS':
        case 'SET_MEDIA_ATTACHMENT_ITEM_DIMENSIONS':
        case 'SET_PHOTO3D_CREATION_DATA':
          b = b;
          b = c('composerMediaAttachmentReducer')(
            {
              mediaAttachments: a.mediaAttachments,
              mediaUploadStatuses: a.mediaUploadStatuses,
            },
            b,
          );
          var d = b.mediaAttachments;
          b = b.mediaUploadStatuses;
          return babelHelpers['extends']({}, a, {
            mediaAttachments: d,
            mediaUploadStatuses: b,
          });
      }
      return a;
    }
    g['default'] = a;
  },
  98,
);
