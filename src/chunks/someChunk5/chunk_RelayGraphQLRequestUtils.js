__d(
  'RelayGraphQLRequestUtils',
  ['CSRFGuard', 'RelayFBJsonParser', 'RelayRuntime', 'XHRHttpError'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('RelayRuntime').RelayError;
    a = {
      createErrorFromPayload: function (a) {
        if (typeof a === 'object')
          if (a.code || a.description) {
            var b, c;
            b = (b = a.debug_info) != null ? b : '';
            c = (c = a.exception) == null ? void 0 : c.message;
            c != null && (b = c + '\n\n' + b);
            c = g.create(
              'GraphQLError',
              'GraphQL server responded with error %s: %s\n%s',
              a.code,
              a.description,
              b,
            );
          } else
            c = g.create(
              'GraphQLError',
              'GraphQL server responded with error: %s',
              JSON.stringify(a),
            );
        else
          c = g.create(
            'GraphQLError',
            'GraphQL server responded with an error: %s',
            a,
          );
        b = c;
        b.source = a;
        typeof a === 'object' &&
          ((b.code = a.code),
          (b.description = a.description),
          (b.summary = a.summary),
          (b.debug_info = a.debug_info));
        return b;
      },
      createErrorFromXHR: function (a, c) {
        var d;
        a.errorCode === b('XHRHttpError').HTTP_TRANSPORT_ERROR
          ? (d = g.createWarning('NetworkTransportError', c))
          : a.errorCode === b('XHRHttpError').HTTP_CLIENT_ERROR &&
            a.errorMsg &&
            a.errorMsg.match(/OAuthException/)
          ? (d = g.create('NetworkOAuthError', c))
          : (d = g.create('NetworkRequestError', c));
        d.source = a;
        return d;
      },
      getRelayAPIConfigHeaders: function (a, b, c) {
        a = babelHelpers['extends']({}, a);
        b && (a['Content-Encoding'] = b);
        c && (a['User-Agent'] = c);
        return a;
      },
      parsePayload: function (a) {
        if (b('CSRFGuard').exists(a)) {
          var c = h(b('CSRFGuard').clean(a));
          if (
            Object.prototype.hasOwnProperty.call(c, 'data') ||
            !Object.prototype.hasOwnProperty.call(c, 'error')
          )
            return c;
          var d = g.createWarning(
            'GraphQLXControllerError',
            'GraphQL server responded with error %s: %s\n%s',
            c.error,
            c.errorSummary,
            c.errorDescription,
          );
          d = d;
          d.source = c;
          d.code = c.error;
          d.description = c.errorDescription;
          d.summary = c.errorSummary;
          throw d;
        }
        return h(a);
      },
    };
    function h(a) {
      try {
        return b('RelayFBJsonParser').parse(a);
      } catch (b) {
        throw g.create(
          'JSONParseError',
          'Response contained invalid JSON.\nReason: %s\n%s',
          b.message,
          a,
        );
      }
    }
    e.exports = a;
  },
  null,
);
