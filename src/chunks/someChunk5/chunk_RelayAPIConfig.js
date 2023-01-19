__d(
  'RelayAPIConfig',
  ['RelayAPIConfigDefaults', 'URI'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = babelHelpers['extends']({}, b('RelayAPIConfigDefaults'), {
        graphURI: new (g || (g = b('URI')))(
          b('RelayAPIConfigDefaults').graphURI,
        ),
        graphBatchURI: new g(b('RelayAPIConfigDefaults').graphBatchURI),
        subscriptionTopicURI:
          b('RelayAPIConfigDefaults').subscriptionTopicURI == null
            ? null
            : new (g || (g = b('URI')))(
                b('RelayAPIConfigDefaults').subscriptionTopicURI,
              ),
        DO_NOT_USE_setActorID: function (a) {
          h.actorID = a;
        },
        setCSRFToken: function (a) {
          h.graphBatchURI.setQueryData({ fb_dtsg: a }),
            h.graphURI.setQueryData({ fb_dtsg: a });
        },
        setAPIVersion: function (a) {
          h.graphBatchURI.setPath('/' + a + '/graphqlbatch'),
            h.graphURI.setPath('/' + a + '/graphql');
        },
        setSandbox: function (a) {
          a = a === 'prod' ? 'graph' : 'graph.' + a;
          h.graphBatchURI.setSubdomain(a);
          h.graphURI.setSubdomain(a);
        },
        setWithCredentials: function (a) {
          h.withCredentials = a;
        },
      });
    e.exports = h;
  },
  null,
);
