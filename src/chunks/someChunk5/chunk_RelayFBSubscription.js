__d(
  'RelayFBSubscription',
  ['ClientIDs', 'warning'],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      return function (c, d) {
        var e = d.variables.input,
          f = 'client_subscription_id' in e;
        b('warning')(
          !f,
          'RelayFBSubscription: found `client_subscription_id` in `input`. In the Facebook context, `client_subscription_id` are added automatically.',
        );
        f = babelHelpers['extends']({}, d.variables, {
          input: babelHelpers['extends']({}, e, {
            client_subscription_id: b('ClientIDs').getNewClientID(),
          }),
        });
        return a(c, {
          variables: f,
          subscription: d.subscription,
          onCompleted: d.onCompleted,
          onError: d.onError,
          onNext: d.onNext,
          updater: d.updater,
          configs: d.configs,
          cacheConfig: d.cacheConfig,
        });
      };
    }
    e.exports = { addFBisms: a };
  },
  null,
);
