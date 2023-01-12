__d(
  'cometComposerQPLLogger',
  ['QPLUserFlow', 'qpl'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function a(a) {
      switch (a.type) {
        case 'COMPOSER_ENTRY':
          break;
        case 'COMPOSER_FEATURE_INTENT':
          break;
        case 'COMPOSER_POST':
          break;
        case 'COMPOSER_POST_MUTATION_START':
          break;
        case 'COMPOSER_POST_SUCCESS':
          h(a.fields);
          break;
        case 'COMPOSER_POST_FAILURE':
          i(a.fields);
          break;
        case 'COMPOSER_POST_CANCEL':
          j(a.fields);
          break;
        case 'COMPOSER_POST_TERMINAL':
          break;
        case 'COMPOSER_POST_SERVER_CONTENT_RENDERED':
          break;
        case 'COMPOSER_PUBLISH_FLOW_OPTIMISTIC_PROCESS':
          break;
        default:
          break;
      }
    }
    function h(a) {
      a = (a = a.payload) == null ? void 0 : a.qplEvent;
      if (a != null)
        switch (a) {
          case c('qpl')._(37631558, '4977'):
            c('QPLUserFlow').addPoint(
              c('qpl')._(37631558, '4977'),
              'composer_post_success',
            );
            c('QPLUserFlow').endSuccess(c('qpl')._(37631558, '4977'));
            break;
          default:
            break;
        }
    }
    function i(a) {
      var b;
      b = (b = a.payload) == null ? void 0 : b.qplEvent;
      if (b != null) {
        a = a.errorDescription != null ? a.errorDescription : '';
        switch (b) {
          case c('qpl')._(37631558, '4977'):
            c('QPLUserFlow').endFailure(
              c('qpl')._(37631558, '4977'),
              'composer_post_cancel',
              { debugInfo: a },
            );
            break;
          default:
            break;
        }
      }
    }
    function j(a) {
      a = (a = a.payload) == null ? void 0 : a.qplEvent;
      if (a != null)
        switch (a) {
          case c('qpl')._(37631558, '4977'):
            c('QPLUserFlow').addPoint(
              c('qpl')._(37631558, '4977'),
              'composer_post_cancel',
            );
            c('QPLUserFlow').endCancel(c('qpl')._(37631558, '4977'));
            break;
          default:
            break;
        }
    }
    g['default'] = a;
  },
  98,
);
