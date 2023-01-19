__d(
  'RelayFlight.hybrid',
  [
    'RelayFlightClientImpl.client',
    'err',
    'relay-runtime/query/GraphQLTag',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = null;
    function i() {
      return a.__flight_execution_mode_DO_NOT_USE === 'flight';
    }
    function j() {
      if (!i() && h == null) {
        var a = b('RelayFlightClientImpl.client');
        h = a;
      }
      if (h == null)
        throw c('err')(
          'Expected RelayFlight::initialize_INTERNAL_DO_NOT_USE() to be called before using other APIs.',
        );
      return h;
    }
    function e(a) {
      if (h != null) {
        c('warning')(
          h === a,
          'RelayFlight::initialize_INTERNAL_DO_NOT_USE(): Already initialized, this module may not be initialized again.',
        );
        return;
      }
      h = a;
    }
    var k = function () {
        var a = j();
        return a.readInlineData.apply(a, arguments);
      },
      l = function () {
        var a = j();
        return a.useFragment.apply(a, arguments);
      };
    function f(a, b, c) {
      var d = j();
      return d.useReadQuery(a, b, c);
    }
    function m(a) {
      var b = j();
      return b.loadFragmentForClient(a);
    }
    function n(a, b) {
      var c = j();
      return c.loadQueryForClient(a, b);
    }
    g.isServer_INTERNAL_DO_NOT_USE = i;
    g.initialize_INTERNAL_DO_NOT_USE = e;
    g.readInlineData = k;
    g.useFragment = l;
    g.useReadQuery = f;
    g.loadFragmentForClient = m;
    g.loadQueryForClient = n;
    g.graphql = d('relay-runtime/query/GraphQLTag').graphql;
  },
  98,
);
