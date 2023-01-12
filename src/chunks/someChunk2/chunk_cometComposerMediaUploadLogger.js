__d(
  'cometComposerMediaUploadLogger',
  [
    'MediaResizeFailureFalcoEvent',
    'MediaResizeStartFalcoEvent',
    'MediaResizeSuccessFalcoEvent',
    'MediaUploadCancelFalcoEvent',
    'MediaUploadFailureFalcoEvent',
    'MediaUploadFlowFatalFalcoEvent',
    'MediaUploadFlowGiveupFalcoEvent',
    'MediaUploadFlowStartFalcoEvent',
    'MediaUploadFlowSuccessFalcoEvent',
    'MediaUploadInitFailureFalcoEvent',
    'MediaUploadInitStartFalcoEvent',
    'MediaUploadInitSuccessFalcoEvent',
    'MediaUploadProcessFailureFalcoEvent',
    'MediaUploadProcessSkippedFalcoEvent',
    'MediaUploadProcessStartFalcoEvent',
    'MediaUploadProcessSuccessFalcoEvent',
    'MediaUploadStartFalcoEvent',
    'MediaUploadSuccessFalcoEvent',
    'MediaUploadTransferCancelFalcoEvent',
    'MediaUploadTransferFailureFalcoEvent',
    'MediaUploadTransferStartFalcoEvent',
    'MediaUploadTransferSuccessFalcoEvent',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a, b) {
      switch (a.type) {
        case 'MEDIA_RESIZE_START':
          h(a.fields, b);
          break;
        case 'MEDIA_RESIZE_SUCCESS':
          i(a.fields, b);
          break;
        case 'MEDIA_RESIZE_FAILURE':
          j(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_START':
          k(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_SUCCESS':
          l(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_FAILURE':
          m(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_CANCEL':
          n(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_PROCESS_START':
          o(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_PROCESS_FAILURE':
          p(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_PROCESS_CANCEL':
          q(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_PROCESS_SKIPPED':
          r(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_PROCESS_SUCCESS':
          s(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_TRANSFER_START':
          t(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_TRANSFER_FAILURE':
          u(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_TRANSFER_CANCEL':
          v(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_TRANSFER_SUCCESS':
          w(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_FLOW_START':
          x(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_FLOW_SUCCESS':
          y(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_FLOW_FATAL':
          z(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_FLOW_GIVEUP':
          A(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_INIT_START':
          B(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_INIT_SUCCESS':
          C(a.fields, b);
          break;
        case 'MEDIA_UPLOAD_INIT_FAILURE':
          D(a.fields, b);
          break;
        default:
          break;
      }
    }
    function h(a, b) {
      var d = {
        creation_session_id: b,
        media_id: a == null ? void 0 : a.media_id,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height_int:
          a == null
            ? void 0
            : (b = a.source_height_int) == null
            ? void 0
            : b.toString(),
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width_int:
          a == null
            ? void 0
            : (b = a.source_width_int) == null
            ? void 0
            : b.toString(),
      };
      c('MediaResizeStartFalcoEvent').log(function () {
        return d;
      });
    }
    function i(a, b) {
      var d = {
        creation_session_id: b,
        media_id: a == null ? void 0 : a.media_id,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height_int:
          a == null
            ? void 0
            : (b = a.source_height_int) == null
            ? void 0
            : b.toString(),
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width_int:
          a == null
            ? void 0
            : (b = a.source_width_int) == null
            ? void 0
            : b.toString(),
        upload_height_int:
          a == null
            ? void 0
            : (b = a.upload_height_int) == null
            ? void 0
            : b.toString(),
        upload_width_int:
          a == null
            ? void 0
            : (b = a.upload_width_int) == null
            ? void 0
            : b.toString(),
      };
      c('MediaResizeSuccessFalcoEvent').log(function () {
        return d;
      });
    }
    function j(a, b) {
      var d = {
        creation_session_id: b,
        error_description: a == null ? void 0 : a.error_description,
        media_id: a == null ? void 0 : a.media_id,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
      };
      c('MediaResizeFailureFalcoEvent').log(function () {
        return d;
      });
    }
    function k(a, b) {
      c('MediaUploadStartFalcoEvent').log(function () {
        return E(a, b);
      });
    }
    function l(a, b) {
      c('MediaUploadSuccessFalcoEvent').log(function () {
        return E(a, b);
      });
    }
    function m(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        error_code: a == null ? void 0 : a.error_code,
        error_description: a == null ? void 0 : a.error_description,
        error_summary: a == null ? void 0 : a.error_summary,
        is_hd_on: a == null ? void 0 : a.is_hd_on,
        is_optimistic_upload: a == null ? void 0 : a.is_optimistic_upload,
        media_data_size:
          a == null
            ? void 0
            : (b = a.media_data_size) == null
            ? void 0
            : b.toString(),
        media_id: a == null ? void 0 : a.media_id,
        media_item_fbid: a == null ? void 0 : a.media_item_fbid,
        media_session_id: a == null ? void 0 : a.media_session_id,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        share_type: a == null ? void 0 : a.share_type,
        source: a == null ? void 0 : a.source,
        source_bit_rate: a == null ? void 0 : a.source_bit_rate,
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height: a == null ? void 0 : a.source_height,
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width: a == null ? void 0 : a.source_width,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
        video_edits_applied: a == null ? void 0 : a.video_edits_applied,
      };
      c('MediaUploadFailureFalcoEvent').log(function () {
        return d;
      });
    }
    function n(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        is_hd_on: a == null ? void 0 : a.is_hd_on,
        is_optimistic_upload: a == null ? void 0 : a.is_optimistic_upload,
        media_data_size:
          a == null
            ? void 0
            : (b = a.media_data_size) == null
            ? void 0
            : b.toString(),
        media_item_fbid: a == null ? void 0 : a.media_item_fbid,
        media_session_id: a == null ? void 0 : a.media_session_id,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        share_type: a == null ? void 0 : a.share_type,
        source: a == null ? void 0 : a.source,
        source_bit_rate: a == null ? void 0 : a.source_bit_rate,
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height: a == null ? void 0 : a.source_height,
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width: a == null ? void 0 : a.source_width,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
        video_edits_applied: a == null ? void 0 : a.video_edits_applied,
      };
      c('MediaUploadCancelFalcoEvent').log(function () {
        return d;
      });
    }
    function o(a, b) {
      c('MediaUploadProcessStartFalcoEvent').log(function () {
        return E(a, b);
      });
    }
    function p(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        is_hd_on: a == null ? void 0 : a.is_hd_on,
        is_optimistic_upload: a == null ? void 0 : a.is_optimistic_upload,
        media_data_size:
          a == null
            ? void 0
            : (b = a.media_data_size) == null
            ? void 0
            : b.toString(),
        media_item_fbid: a == null ? void 0 : a.media_item_fbid,
        media_session_id: a == null ? void 0 : a.media_session_id,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        share_type: a == null ? void 0 : a.share_type,
        source: a == null ? void 0 : a.source,
        source_bit_rate: a == null ? void 0 : a.source_bit_rate,
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height: a == null ? void 0 : a.source_height,
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width: a == null ? void 0 : a.source_width,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
        video_edits_applied: a == null ? void 0 : a.video_edits_applied,
      };
      c('MediaUploadProcessFailureFalcoEvent').log(function () {
        return d;
      });
    }
    function q(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        is_hd_on: a == null ? void 0 : a.is_hd_on,
        is_optimistic_upload: a == null ? void 0 : a.is_optimistic_upload,
        media_data_size:
          a == null
            ? void 0
            : (b = a.media_data_size) == null
            ? void 0
            : b.toString(),
        media_item_fbid: a == null ? void 0 : a.media_item_fbid,
        media_session_id: a == null ? void 0 : a.media_session_id,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        share_type: a == null ? void 0 : a.share_type,
        source: a == null ? void 0 : a.source,
        source_bit_rate: a == null ? void 0 : a.source_bit_rate,
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height: a == null ? void 0 : a.source_height,
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width: a == null ? void 0 : a.source_width,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
        video_edits_applied: a == null ? void 0 : a.video_edits_applied,
      };
      c('MediaUploadProcessFailureFalcoEvent').log(function () {
        return d;
      });
    }
    function r(a, b) {
      var d = {
        creation_session_id: b,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        source: a == null ? void 0 : a.source,
        source_bit_rate:
          a == null
            ? void 0
            : (b = a.source_bit_rate) == null
            ? void 0
            : b.toString(),
        source_height:
          a == null
            ? void 0
            : (b = a.source_height) == null
            ? void 0
            : b.toString(),
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width:
          a == null
            ? void 0
            : (b = a.source_width) == null
            ? void 0
            : b.toString(),
      };
      c('MediaUploadProcessSkippedFalcoEvent').log(function () {
        return d;
      });
    }
    function s(a, b) {
      c('MediaUploadProcessSuccessFalcoEvent').log(function () {
        return E(a, b);
      });
    }
    function t(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        is_hd_on: a == null ? void 0 : a.is_hd_on,
        media_data_size:
          a == null
            ? void 0
            : (b = a.media_data_size) == null
            ? void 0
            : b.toString(),
        media_id: a == null ? void 0 : a.media_id,
        media_item_fbid: a == null ? void 0 : a.media_item_fbid,
        media_session_id: a == null ? void 0 : a.media_session_id,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        share_type: a == null ? void 0 : a.share_type,
        source: a == null ? void 0 : a.source,
        source_bit_rate: a == null ? void 0 : a.source_bit_rate,
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height:
          a == null
            ? void 0
            : (b = a.source_height) == null
            ? void 0
            : b.toString(),
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width: a == null ? void 0 : a.source_width,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
      };
      c('MediaUploadTransferStartFalcoEvent').log(function () {
        return d;
      });
    }
    function u(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        is_hd_on: a == null ? void 0 : a.is_hd_on,
        media_data_size:
          a == null
            ? void 0
            : (b = a.media_data_size) == null
            ? void 0
            : b.toString(),
        media_item_fbid: a == null ? void 0 : a.media_item_fbid,
        media_session_id: a == null ? void 0 : a.media_session_id,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        share_type: a == null ? void 0 : a.share_type,
        source: a == null ? void 0 : a.source,
        source_bit_rate: a == null ? void 0 : a.source_bit_rate,
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height:
          a == null
            ? void 0
            : (b = a.source_height) == null
            ? void 0
            : b.toString(),
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width: a == null ? void 0 : a.source_width,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
      };
      c('MediaUploadTransferFailureFalcoEvent').log(function () {
        return d;
      });
    }
    function v(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        is_hd_on: a == null ? void 0 : a.is_hd_on,
        media_data_size:
          a == null
            ? void 0
            : (b = a.media_data_size) == null
            ? void 0
            : b.toString(),
        media_item_fbid: a == null ? void 0 : a.media_item_fbid,
        media_session_id: a == null ? void 0 : a.media_session_id,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        share_type: a == null ? void 0 : a.share_type,
        source: a == null ? void 0 : a.source,
        source_bit_rate: a == null ? void 0 : a.source_bit_rate,
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height: a == null ? void 0 : a.source_height,
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width: a == null ? void 0 : a.source_width,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
      };
      c('MediaUploadTransferCancelFalcoEvent').log(function () {
        return d;
      });
    }
    function w(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        is_hd_on: a == null ? void 0 : a.is_hd_on,
        media_data_size:
          a == null
            ? void 0
            : (b = a.media_data_size) == null
            ? void 0
            : b.toString(),
        media_id: a == null ? void 0 : a.media_id,
        media_item_fbid: a == null ? void 0 : a.media_item_fbid,
        media_session_id: a == null ? void 0 : a.media_session_id,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        share_type: a == null ? void 0 : a.share_type,
        source: a == null ? void 0 : a.source,
        source_bit_rate: a == null ? void 0 : a.source_bit_rate,
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height:
          a == null
            ? void 0
            : (b = a.source_height) == null
            ? void 0
            : b.toString(),
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width: a == null ? void 0 : a.source_width,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
      };
      c('MediaUploadTransferSuccessFalcoEvent').log(function () {
        return d;
      });
    }
    function x(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        media_id: a == null ? void 0 : a.media_id,
        media_type: a == null ? void 0 : a.media_type,
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        source: a == null ? void 0 : a.source,
        source_type: a == null ? void 0 : a.source_type,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
      };
      c('MediaUploadFlowStartFalcoEvent').log(function () {
        return d;
      });
    }
    function y(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        media_data_size:
          a == null
            ? void 0
            : (b = a.media_data_size) == null
            ? void 0
            : b.toString(),
        media_id: a == null ? void 0 : a.media_id,
        media_item_fbid: a == null ? void 0 : a.media_item_fbid,
        media_type: a == null ? void 0 : a.media_type,
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        source: a == null ? void 0 : a.source,
        source_bit_rate:
          a == null
            ? void 0
            : (b = a.source_bit_rate) == null
            ? void 0
            : b.toString(),
        source_height:
          a == null
            ? void 0
            : (b = a.source_height) == null
            ? void 0
            : b.toString(),
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width:
          a == null
            ? void 0
            : (b = a.source_width) == null
            ? void 0
            : b.toString(),
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
      };
      c('MediaUploadFlowSuccessFalcoEvent').log(function () {
        return d;
      });
    }
    function z(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        media_type: a == null ? void 0 : a.media_type,
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        source: a == null ? void 0 : a.source,
        source_bit_rate:
          a == null
            ? void 0
            : (b = a.source_bit_rate) == null
            ? void 0
            : b.toString(),
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height:
          a == null
            ? void 0
            : (b = a.source_height) == null
            ? void 0
            : b.toString(),
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width:
          a == null
            ? void 0
            : (b = a.source_width) == null
            ? void 0
            : b.toString(),
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
      };
      c('MediaUploadFlowFatalFalcoEvent').log(function () {
        return d;
      });
    }
    function A(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        media_type: a == null ? void 0 : a.media_type,
        source: a == null ? void 0 : a.source,
        source_type: a == null ? void 0 : a.source_type,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
      };
      c('MediaUploadFlowGiveupFalcoEvent').log(function () {
        return d;
      });
    }
    function B(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        is_hd_on: a == null ? void 0 : a.is_hd_on,
        media_data_size:
          a == null
            ? void 0
            : (b = a.media_data_size) == null
            ? void 0
            : b.toString(),
        media_item_fbid: a == null ? void 0 : a.media_item_fbid,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        share_type: a == null ? void 0 : a.share_type,
        source: a == null ? void 0 : a.source,
        source_bit_rate: a == null ? void 0 : a.source_bit_rate,
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height: a == null ? void 0 : a.source_height,
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width: a == null ? void 0 : a.source_width,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
      };
      c('MediaUploadInitStartFalcoEvent').log(function () {
        return d;
      });
    }
    function C(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        is_hd_on: a == null ? void 0 : a.is_hd_on,
        media_data_size:
          a == null
            ? void 0
            : (b = a.media_data_size) == null
            ? void 0
            : b.toString(),
        media_item_fbid: a == null ? void 0 : a.media_item_fbid,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        share_type: a == null ? void 0 : a.share_type,
        source: a == null ? void 0 : a.source,
        source_bit_rate: a == null ? void 0 : a.source_bit_rate,
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height:
          a == null
            ? void 0
            : (b = a.source_height) == null
            ? void 0
            : b.toString(),
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width: a == null ? void 0 : a.source_width,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
      };
      c('MediaUploadInitSuccessFalcoEvent').log(function () {
        return d;
      });
    }
    function D(a, b) {
      var d = {
        author_is_page: a == null ? void 0 : a.author_is_page,
        creation_session_id: b,
        is_hd_on: a == null ? void 0 : a.is_hd_on,
        media_data_size:
          a == null
            ? void 0
            : (b = a.media_data_size) == null
            ? void 0
            : b.toString(),
        media_item_fbid: a == null ? void 0 : a.media_item_fbid,
        media_type: (b = a == null ? void 0 : a.media_type) != null ? b : '',
        original_file_size:
          a == null
            ? void 0
            : (b = a.original_file_size) == null
            ? void 0
            : b.toString(),
        share_type: a == null ? void 0 : a.share_type,
        source: a == null ? void 0 : a.source,
        source_bit_rate: a == null ? void 0 : a.source_bit_rate,
        source_file_size:
          a == null
            ? void 0
            : (b = a.source_file_size) == null
            ? void 0
            : b.toString(),
        source_height: a == null ? void 0 : a.source_height,
        source_type:
          a == null
            ? void 0
            : (b = a.source_type) == null
            ? void 0
            : b.toString(),
        source_width: a == null ? void 0 : a.source_width,
        use_fb_image_picker: a == null ? void 0 : a.use_fb_image_picker,
      };
      c('MediaUploadInitFailureFalcoEvent').log(function () {
        return d;
      });
    }
    function E(a, b) {
      b = { creation_session_id: b };
      return babelHelpers['extends']({}, a, b);
    }
    g['default'] = a;
  },
  98,
);
