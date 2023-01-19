__d(
  'RelayRTIGraphQLSubscriber',
  [
    'invariant',
    'CurrentUser',
    'GQLSManager',
    'Promise',
    'RTISubscriptionManagerConfig',
    'Random',
    'RelayRTIUtils',
    'RelayRuntime',
    'StreamStateMachineConstants',
    'cr:5128',
    'err',
    'gkx',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = 'no_logging',
      j = 'custom_logging',
      k = 'workplace_logging',
      l = 'gqls_workplace_logging_relay',
      m = 'default_logging',
      n = 'gqls_default_logging_relay',
      o = 1e3,
      p = 100,
      q = 100;
    new Set();
    function a(a, b, c, d, e) {
      return r(a, b, d, e)['do']({
        next: function () {
          c && c.clear();
        },
      });
    }
    function r(a, e, f, g) {
      var l,
        n = (l = a.metadata) == null ? void 0 : l.subscriptionName;
      typeof n === 'string' || h(0, 13280, a.name);
      l = e.input['%options'];
      l = (l == null ? void 0 : l.client_logged_context) == null ? i : j;
      l === i && c('gkx')('1383502') && c('Random').coinflip(p) && (l = k);
      l === i &&
        (c('gkx')('1388683') ||
          (c('gkx')('1382775') && c('Random').coinflip(o))) &&
        (l = m);
      n === 'work_availability_status_fanout_subscribe' &&
        l === i &&
        c('gkx')('1809663') &&
        c('Random').coinflip(q) &&
        (l = m);
      var r = w(l, e);
      b('cr:5128') && b('cr:5128')(n);
      return x(a, e, l, f, g)['do']({
        start: function () {
          d('RelayRTIUtils').logSubscriptionEvent(
            'client_subscribe',
            n,
            e,
            r,
            a.id,
          );
        },
        next: function () {
          d('RelayRTIUtils').logSubscriptionEvent(
            'receivepayload',
            n,
            e,
            r,
            a.id,
          );
        },
        unsubscribe: function () {
          d('RelayRTIUtils').logSubscriptionEvent(
            'client_unsubscribe',
            n,
            e,
            r,
            a.id,
          );
        },
      });
    }
    function s(a, b, c, e) {
      if (a != null) {
        b = d('RelayRTIUtils').computeRoutingHint(a, c.input);
        b != null && (e.routing_hint = b);
      }
      b = d('RelayRTIUtils').experimentPegasusResumptionGroup(a);
      b !== '' && (e.resumption_group_name = b);
      c.input.client_subscription_id != null &&
        (e.requestId = c.input.client_subscription_id);
    }
    function t(a, b) {
      return a == null ? null : { requestId: b, forceLogContext: a };
    }
    function u(a, e, f, g, h) {
      g === void 0 && (g = null);
      return d('RelayRuntime').Observable.create(function (i) {
        var j,
          k,
          l = a.id;
        if (typeof l !== 'string')
          throw c('err')(
            'Found illegal docID in subscribeWithMobileStyleTopicTransform',
          );
        l = { doc_id: l };
        ((j = c('RTISubscriptionManagerConfig').is_intern) != null ? j : !1) &&
          (l.www_tier = 'intern');
        g != null && g !== c('CurrentUser').getID() && (l.page_id = g);
        j = a.metadata.subscriptionName;
        if (typeof j !== 'string')
          throw c('err')(
            'Found null useCase in subscribeWithMobileStyleTopicTransform',
          );
        s(j, a.name, e, l);
        k = (k = e['%options']) != null ? k : {};
        k.useOSSResponseFormat = !0;
        f != null && (k.client_logged_context = f);
        k.client_has_ods_usecase_counters = !0;
        k = babelHelpers['extends'](
          {
            context: babelHelpers['extends']({}, e, { '%options': k }),
            gqlsLifecycleHandler: function (a) {
              a ===
                d('StreamStateMachineConstants').events
                  .GQLS_STATE_TRANSIT_ON_ACTIVE &&
                h &&
                h();
              return new (b('Promise'))(function (a) {
                return a();
              });
            },
          },
          l ? { headers: l } : {},
        );
        l = t(f, e.input.client_subscription_id);
        l != null &&
          (k = babelHelpers['extends']({}, k, { instrumentationData: l }));
        var m = c(
          'GQLSManager',
        ).subscribeViaRequestStreamWithMobileStyleTopicTransform(
          j,
          function (a) {
            try {
              a = y(a);
              i.next(a);
            } catch (a) {
              i.error(a);
            }
          },
          k,
        );
        return function () {
          return m && m.unsubscribe();
        };
      });
    }
    function v(a) {
      var b = a.input;
      a = babelHelpers.objectWithoutPropertiesLoose(a, ['input']);
      b['%options'];
      b = babelHelpers.objectWithoutPropertiesLoose(b, ['%options']);
      return babelHelpers['extends']({}, a, { input: b });
    }
    function w(a, b) {
      var c = null;
      a === k
        ? (c = l)
        : a === m
        ? (c = n)
        : a === j && (c = b.input['%options'].client_logged_context);
      return c;
    }
    function x(a, b, c, d, e) {
      var f = v(b);
      c = w(c, b);
      return u(a, f, c, d, e);
    }
    function y(a) {
      if (typeof a === 'string') return JSON.parse(a);
      else if (
        typeof a === 'object' &&
        (a == null ? void 0 : a.hasOwnProperty('payload')) &&
        typeof (a == null ? void 0 : a.payload) === 'string' &&
        (a == null ? void 0 : a.hasOwnProperty('topic')) &&
        typeof (a == null ? void 0 : a.topic) === 'string'
      )
        return JSON.parse(a.payload);
      else throw c('err')('Relay client received an invalid GQLS payload');
    }
    g.subscribeWithLoggingWithCacheInvalidation = a;
    g.subscribeWithMobileStyleTopicTransform = u;
  },
  98,
);
