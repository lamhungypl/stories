__d(
  'cometComposerLogger',
  [
    'ComposerCancelFalcoEvent',
    'ComposerEntryFalcoEvent',
    'ComposerFeatureIntentFalcoEvent',
    'ComposerPostCancelFalcoEvent',
    'ComposerPostFailureFalcoEvent',
    'ComposerPostFalcoEvent',
    'ComposerPostMutationStartFalcoEvent',
    'ComposerPostServerContentRenderedFalcoEvent',
    'ComposerPostSuccessFalcoEvent',
    'ComposerPostTerminalFalcoEvent',
    'ComposerPublishFlowFalcoEvent',
    'requireDeferred',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('requireDeferred')('cometComposerQPLLogger').__setRef(
      'cometComposerLogger',
    );
    function a(a, b, c) {
      t(a);
      switch (a.type) {
        case 'COMPOSER_ENTRY':
          i(a.fields, b, c);
          break;
        case 'COMPOSER_FEATURE_INTENT':
          j(a.fields, b, c);
          break;
        case 'COMPOSER_CANCEL':
          k(a.fields, b, c);
          break;
        case 'COMPOSER_POST':
          l(a.fields, b);
          break;
        case 'COMPOSER_POST_MUTATION_START':
          m(a.fields, b);
          break;
        case 'COMPOSER_POST_SUCCESS':
          n(a.fields, b);
          break;
        case 'COMPOSER_POST_FAILURE':
          o(a.fields, b);
          break;
        case 'COMPOSER_POST_CANCEL':
          p(a.fields, b);
          break;
        case 'COMPOSER_POST_TERMINAL':
          q(a.fields, b);
          break;
        case 'COMPOSER_POST_SERVER_CONTENT_RENDERED':
          r(a.fields, b);
          break;
        case 'COMPOSER_PUBLISH_FLOW_OPTIMISTIC_PROCESS':
          s(a.fields, b);
          break;
        default:
          break;
      }
    }
    function i(a, b, d) {
      c('ComposerEntryFalcoEvent').log(function () {
        var c;
        return {
          composer_entry_picker: a == null ? void 0 : a.composerEntryPicker,
          composer_entry_point_name:
            a == null ? void 0 : a.composerEntryPointName,
          composer_source_surface: a == null ? void 0 : a.composerSourceSurface,
          composer_type: a == null ? void 0 : a.composerType,
          creation_session_id: b,
          feature_type: a == null ? void 0 : a.featureType,
          is_edit_composer: a == null ? void 0 : a.isEditComposer,
          target_id:
            d == null ? void 0 : (c = d.target) == null ? void 0 : c.id,
          target_type: (
            d == null ? void 0 : (c = d.target) == null ? void 0 : c.type
          )
            ? d == null
              ? void 0
              : d.target.type
            : null,
        };
      });
    }
    function j(a, b, d) {
      c('ComposerFeatureIntentFalcoEvent').log(function () {
        var c;
        return {
          composer_entry_picker: a == null ? void 0 : a.composerEntryPicker,
          composer_entry_point_name:
            a == null ? void 0 : a.composerEntryPointName,
          composer_source_surface: a == null ? void 0 : a.composerSourceSurface,
          composer_type: a == null ? void 0 : a.composerType,
          creation_session_id: b,
          feature_type: a == null ? void 0 : a.featureType,
          is_edit_composer: a == null ? void 0 : a.isEditComposer,
          source: a == null ? void 0 : a.source,
          target_type: (
            d == null ? void 0 : (c = d.target) == null ? void 0 : c.type
          )
            ? d == null
              ? void 0
              : d.target.type
            : null,
        };
      });
    }
    function k(a, b, d) {
      c('ComposerCancelFalcoEvent').log(function () {
        var c;
        return {
          composer_entry_picker: a == null ? void 0 : a.composerEntryPicker,
          composer_entry_point_name:
            a == null ? void 0 : a.composerEntryPointName,
          composer_source_surface: a == null ? void 0 : a.composerSourceSurface,
          composer_type: a == null ? void 0 : a.composerType,
          creation_session_id: b,
          is_edit_composer: a == null ? void 0 : a.isEditComposer,
          target_id:
            d == null ? void 0 : (c = d.target) == null ? void 0 : c.id,
          target_type: (
            d == null ? void 0 : (c = d.target) == null ? void 0 : c.type
          )
            ? d == null
              ? void 0
              : d.target.type
            : null,
        };
      });
    }
    function l(a, b) {
      c('ComposerPostFalcoEvent').log(function () {
        return {
          composer_entry_picker: a == null ? void 0 : a.composerEntryPicker,
          composer_entry_point_name:
            a == null ? void 0 : a.composerEntryPointName,
          composer_source_surface: a == null ? void 0 : a.composerSourceSurface,
          composer_type: a == null ? void 0 : a.composerType,
          creation_session_id: b,
          is_edit_composer: a == null ? void 0 : a.isEditComposer,
          is_my_story_selected: a == null ? void 0 : a.isMyStorySelected,
          is_news_feed_selected: a == null ? void 0 : a.isNewsFeedSelected,
          payload: a == null ? void 0 : a.payload,
          unpublished_content_type:
            a == null ? void 0 : a.unpublishedContentType,
        };
      });
    }
    function m(a, b) {
      c('ComposerPostMutationStartFalcoEvent').log(function () {
        return {
          composer_entry_picker: a == null ? void 0 : a.composerEntryPicker,
          composer_entry_point_name:
            a == null ? void 0 : a.composerEntryPointName,
          composer_source_surface: a == null ? void 0 : a.composerSourceSurface,
          composer_type: a == null ? void 0 : a.composerType,
          creation_session_id: b,
          destination: a == null ? void 0 : a.destination,
          is_edit_composer: a == null ? void 0 : a.isEditComposer,
        };
      });
    }
    function n(a, b) {
      c('ComposerPostSuccessFalcoEvent').log(function () {
        var c;
        return {
          composer_entry_picker: a == null ? void 0 : a.composerEntryPicker,
          composer_entry_point_name:
            a == null ? void 0 : a.composerEntryPointName,
          composer_source_surface: a == null ? void 0 : a.composerSourceSurface,
          composer_type: a == null ? void 0 : a.composerType,
          creation_session_id: b,
          is_edit_composer: a == null ? void 0 : a.isEditComposer,
          logging_ids: a == null ? void 0 : a.loggingIds,
          payload: a == null ? void 0 : a.payload,
          retry_count:
            (c = a == null ? void 0 : a.retryCount) != null ? c : '0',
          unpublished_content_type:
            a == null ? void 0 : a.unpublishedContentType,
        };
      });
    }
    function o(a, b) {
      c('ComposerPostFailureFalcoEvent').log(function () {
        var c;
        return {
          composer_entry_picker: a == null ? void 0 : a.composerEntryPicker,
          composer_entry_point_name:
            a == null ? void 0 : a.composerEntryPointName,
          composer_source_surface: a == null ? void 0 : a.composerSourceSurface,
          composer_type: a == null ? void 0 : a.composerType,
          creation_session_id: b,
          error_details: a == null ? void 0 : a.errorDescription,
          error_info: a == null ? void 0 : a.errorInfo,
          is_edit_composer: a == null ? void 0 : a.isEditComposer,
          payload: a == null ? void 0 : a.payload,
          retry_count:
            (c = a == null ? void 0 : a.retryCount) != null ? c : '0',
          unpublished_content_type:
            a == null ? void 0 : a.unpublishedContentType,
        };
      });
    }
    function p(a, b) {
      c('ComposerPostCancelFalcoEvent').log(function () {
        return {
          cancel_source: a == null ? void 0 : a.cancelSource,
          creation_session_id: b,
        };
      });
    }
    function q(a, b) {
      c('ComposerPostTerminalFalcoEvent').log(function () {
        var c;
        return {
          creation_session_id: b,
          terminal_reason:
            (c = a == null ? void 0 : a.terminalReason) != null ? c : '',
        };
      });
    }
    function r(a, b) {
      c('ComposerPostServerContentRenderedFalcoEvent').log(function () {
        var c;
        return {
          composer_entry_picker: a == null ? void 0 : a.composerEntryPicker,
          composer_entry_point_name:
            a == null ? void 0 : a.composerEntryPointName,
          composer_source_surface: a == null ? void 0 : a.composerSourceSurface,
          composer_type: a == null ? void 0 : a.composerType,
          creation_session_id: b,
          destination:
            (c = a == null ? void 0 : a.destination) != null ? c : '',
          is_edit_composer: a == null ? void 0 : a.isEditComposer,
        };
      });
    }
    function s(a, b) {
      var d = a == null ? void 0 : a.publishFlowOptimisticStep;
      if (d == null) return;
      var e = { creation_session_id: b, publish_flow: d };
      (d === 'CREATE_OPTIMISTIC_RESPONSE' || d === 'INSERT_OPTIMISTIC_POST') &&
        (e = babelHelpers['extends']({}, e, {
          debug_info: JSON.stringify({
            type_of_optimistic_post:
              a == null ? void 0 : a.typeOfOptimisticPost,
          }),
        }));
      c('ComposerPublishFlowFalcoEvent').log(function () {
        return e;
      });
    }
    function t(a) {
      if (a.fields && a.fields.payload != null) {
        var b = a.fields.payload.qplEvent;
        b != null &&
          h.onReady(function (b) {
            return b(a);
          });
      }
    }
    g['default'] = a;
  },
  98,
);
