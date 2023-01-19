__d(
  'makeGraphQLLiveQueryRequest',
  ['RealtimeGraphQLRequest'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 'FBLQ';
    function a(a) {
      var b = a.doc_id,
        d = a.config_id,
        e = a.live_query_request_id,
        f = a.actor_id,
        g = a.variables,
        i = a.is_intern,
        j = a.access_token,
        k = a.graphiql_impersonation,
        l = a.logging_context,
        m = a.last_response_digest,
        n = a.priming_token;
      a = a.enable_canonical_naming;
      var o = h + ':' + d;
      b = {
        method: o,
        doc_id: b,
        body: { variables: (o = g) != null ? o : {} },
      };
      i != null && (b = babelHelpers['extends']({}, b, { is_intern: i }));
      g = { config_id: d, live_query_request_id: e };
      m != null &&
        (g = babelHelpers['extends']({}, g, { last_response_digest: m }));
      f != null && (g = babelHelpers['extends']({}, g, { actor_id: f }));
      n != null && (g = babelHelpers['extends']({}, g, { priming_token: n }));
      l != null && (g = babelHelpers['extends']({}, g, { logging_context: l }));
      j != null && (g = babelHelpers['extends']({}, g, { access_token: j }));
      k != null &&
        (g = babelHelpers['extends']({}, g, { graphiql_impersonation: k }));
      a === !0 &&
        (g = babelHelpers['extends']({}, g, { enable_canonical_naming: !0 }));
      b = babelHelpers['extends']({}, b, { extra_headers: g });
      return new (c('RealtimeGraphQLRequest'))(b);
    }
    f.exports = a;
  },
  34,
);
