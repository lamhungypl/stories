__d(
  'CometNotificationsInteractionLogger',
  ['QuickPerformanceLogger', 'killswitch', 'once', 'qpl'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = c('qpl')._(3473465, '8253'),
      i = c('qpl')._(3473464, '8113'),
      j = c('qpl')._(3473463, '3914'),
      k = 'MAIN_SURFACE';
    function l(a) {
      c('QuickPerformanceLogger').markerAnnotate(h, {
        string: { status: 'error' },
      }),
        c('QuickPerformanceLogger').markerAnnotate(h, {
          string: {
            error_localized_description: a == null ? void 0 : a.message,
          },
        }),
        c('QuickPerformanceLogger').markerAnnotate(h, {
          string: { error_domain: a == null ? void 0 : a.name },
        }),
        c('QuickPerformanceLogger').markerAnnotate(h, {
          int: { notifications_count: 0 },
        }),
        c('QuickPerformanceLogger').markerEnd(h, 87),
        c('QuickPerformanceLogger').markEvent(i, 'notifs_rendered_error', 7, {
          annotations: { string: { status: 'error' } },
        }),
        c('QuickPerformanceLogger').markEvent(
          j,
          'received_notifs_response_failed',
          7,
          {
            annotations: {
              int: { load_type: 0, notifications_count: 0 },
              string: {
                environment: k,
                error_domain: a == null ? void 0 : a.name,
                error_localized_description: a == null ? void 0 : a.message,
                status: 'failed',
              },
            },
          },
        );
    }
    function m() {
      c('QuickPerformanceLogger').markerEnd(h, 4),
        c('QuickPerformanceLogger').markEvent(
          i,
          'notifs_rendering_cancelled',
          7,
          { annotations: { string: { status: 'cancel' } } },
        );
    }
    function n(a) {
      a === void 0 && (a = 0),
        c('QuickPerformanceLogger').markerAnnotate(h, {
          string: { status: 'success' },
        }),
        c('QuickPerformanceLogger').markerAnnotate(h, {
          int: { notifications_count: a },
        }),
        c('QuickPerformanceLogger').markerEnd(h, 2),
        c('QuickPerformanceLogger').markEvent(
          i,
          'notifs_rendered_succeeded',
          7,
          { annotations: { string: { status: 'success' } } },
        ),
        c('QuickPerformanceLogger').markEvent(
          j,
          'received_notifs_response_success',
          7,
          {
            annotations: {
              int: { load_type: 0, notifications_count: a },
              string: { environment: k, status: 'success' },
            },
          },
        );
    }
    function o() {
      c('QuickPerformanceLogger').markEvent(
        i,
        'notifs_rendering_timed_out',
        7,
        { annotations: { string: { status: 'timeout' } } },
      );
    }
    var p = c('once')(function (a) {
      c('QuickPerformanceLogger').markerStart(h),
        c('QuickPerformanceLogger').markerAnnotate(h, {
          int: { load_type: 0 },
        }),
        c('QuickPerformanceLogger').markerAnnotate(h, {
          string: { environment: 'MAIN_SURFACE' },
        }),
        c('QuickPerformanceLogger').markerAnnotate(h, {
          string: { entry_point: a },
        });
    });
    function a() {
      if (c('killswitch')('COMET_NOTIFICATIONS_NNL_QPL_LOGGING_DISABLED'))
        return;
      m();
    }
    function b(a) {
      if (c('killswitch')('COMET_NOTIFICATIONS_NNL_QPL_LOGGING_DISABLED'))
        return;
      l(a);
    }
    function d(a) {
      if (c('killswitch')('COMET_NOTIFICATIONS_NNL_QPL_LOGGING_DISABLED'))
        return;
      p(a);
    }
    function e(a) {
      if (c('killswitch')('COMET_NOTIFICATIONS_NNL_QPL_LOGGING_DISABLED'))
        return;
      n(a);
    }
    function f() {
      if (c('killswitch')('COMET_NOTIFICATIONS_NNL_QPL_LOGGING_DISABLED'))
        return;
      o();
    }
    g.cancel = a;
    g.error = b;
    g.start = d;
    g.success = e;
    g.timeout = f;
  },
  98,
);
