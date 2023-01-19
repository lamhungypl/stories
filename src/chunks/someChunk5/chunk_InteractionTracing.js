__d(
  'InteractionTracing',
  [
    'InteractionTracingConfigDefault',
    'InteractionTracingMetrics',
    'WebSession',
    'cr:70',
    'interaction-tracing',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a) {
      var c = a.cfg;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['cfg']);
      return babelHelpers['extends']({}, a, {
        cfg: babelHelpers['extends'](
          {},
          d('InteractionTracingConfigDefault').DEFAULT_TRACING_CONFIG,
          c,
        ),
        deps: b('cr:70'),
      });
    }
    a = babelHelpers['extends'](
      {},
      c('interaction-tracing').InteractionTracingCore,
      {
        transformStartMetadata: h,
        startInteraction: function (a, b) {
          return c(
            'interaction-tracing',
          ).InteractionTracingCore.startInteraction(h(a), b);
        },
        trace: (function (a) {
          function b(b, c, d, e, f, g, h, i, j) {
            return a.apply(this, arguments);
          }
          b.toString = function () {
            return a.toString();
          };
          return b;
        })(function (a, e, f, g, h, i, j, k, l) {
          l = c('interaction-tracing').InteractionTracingCore.trace(
            babelHelpers['extends'](
              {},
              d('InteractionTracingConfigDefault').DEFAULT_TRACING_CONFIG,
              l,
            ),
            b('cr:70'),
            a,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
          );
          a = d('WebSession').getSessionId();
          a != null &&
            c('InteractionTracingMetrics').addMetadata(l, 'websession_id', a);
          return l;
        }),
        logServerTimings: function (a, d, e, f) {
          c('interaction-tracing').logServerTimings(b('cr:70'), a, d, e, f);
        },
        navigation: c('interaction-tracing').NavigationTracing,
      },
    );
    g['default'] = a;
  },
  98,
);
