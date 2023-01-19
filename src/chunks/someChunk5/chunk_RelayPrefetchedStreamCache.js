__d(
  'RelayPrefetchedStreamCache',
  [
    'ExecutionEnvironment',
    'FBLogger',
    'RelayAsyncStreamPool',
    'clearImmediate',
    'setImmediateAcrossTransitions',
    'stableStringifyPrefetchedRelayVariablesWithActor',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new (c('RelayAsyncStreamPool'))(),
      i = {},
      j = {},
      k = {};
    function l(a, b) {
      return Object.prototype.hasOwnProperty.call(k, a) ? k[a][b] : null;
    }
    function m(a, b, c) {
      Object.prototype.hasOwnProperty.call(k, a)
        ? (k[a][b] = c)
        : ((k[a] = {}), (k[a][b] = c));
    }
    function n(a, b) {
      if (Object.prototype.hasOwnProperty.call(i, a)) {
        if (Object.prototype.hasOwnProperty.call(i[a], b)) {
          var c = i[a][b].id;
          c != null && h.clear(c);
          delete i[a][b];
        }
        Object.keys(i[a]).length === 0 && delete i[a];
      }
      Object.prototype.hasOwnProperty.call(j, a) &&
        (delete j[a][b], Object.keys(j[a]).length === 0 && delete j[a]);
      Object.prototype.hasOwnProperty.call(k, a) &&
        (delete k[a][b], Object.keys(k[a]).length === 0 && delete k[a]);
    }
    function o(a, b) {
      var d = l(a, b);
      d && (c('clearImmediate')(d), n(a, b));
    }
    function p(a, b) {
      l(a, b) ||
        m(
          a,
          b,
          c('setImmediateAcrossTransitions')(function () {
            n(a, b);
          }),
        );
    }
    function q(a, b) {
      return (b =
        (a = i[a]) == null ? void 0 : (a = a[b]) == null ? void 0 : a.id) !=
        null
        ? b
        : null;
    }
    function r(a, b, c, d, e) {
      Object.prototype.hasOwnProperty.call(i, a) || (i[a] = {}),
        Object.prototype.hasOwnProperty.call(j, a) || (j[a] = {}),
        (j[a][b] = !1),
        (i[a][b] = { id: c, variables: e, actorID: d });
    }
    function a(a, b, d) {
      a = c('stableStringifyPrefetchedRelayVariablesWithActor')(a, d);
      p(b, a);
    }
    function b(a, b, d, e, f, g) {
      g === void 0 && (g = !1);
      var k = c('stableStringifyPrefetchedRelayVariablesWithActor')(a, d),
        l = q(b, k);
      if (l != null) {
        g || (j[b][k] = !0);
        return h.subscribe(l, e);
      }
      if (
        i[b] &&
        Object.values(j[b]).filter(function (a) {
          return !a;
        }).length > 0
      ) {
        g = Object.keys(i[b]);
        l = i[b][g[0]];
        l = s(l, a, d);
        c('FBLogger')('RelayQueryPreloader')
          .addMetadata('RELAY_PRELOADER', 'QUERY_ID', b)
          .addMetadata(
            'RELAY_PRELOADER',
            'QUERY_NAME',
            (a = f) != null ? a : 'unknown',
          )
          .addMetadata('RELAY_PRELOADER', 'MISMATCH', l)
          .addToCategoryKey((d = f) != null ? d : b)
          .warn(
            'RelayPrefetchedStreamCache.subscribe(): Could not find preloader for query with actor ID and variables: `%s`\n\nbut had data for that query with actorID/variables:\n `%s`\n',
            k,
            g.join('||'),
          );
      }
      if (!c('ExecutionEnvironment').canUseDOM) {
        c('FBLogger')('RelayQueryPreloader')
          .addMetadata('RELAY_PRELOADER', 'QUERY_ID', b)
          .addMetadata(
            'RELAY_PRELOADER',
            'QUERY_NAME',
            (a = f) != null ? a : 'unknown',
          )
          .addToCategoryKey((l = f) != null ? l : b)
          .mustfix(
            'RelayPrefetchedStreamCache:.get: Missing relay query preloader for query: %s with actorID and variables %s. Make sure your relay preloaders are configured. https://fburl.com/comet_preloading',
            f != null ? f : b,
            k,
          );
      }
      d = !1;
      g = {
        unsubscribe: function () {
          d = !0;
        },
      };
      e.start(g);
      d || e.complete();
      return g;
    }
    function d(a, b) {
      var d = null,
        e = 0,
        f = null;
      if (b != null) {
        var g;
        d = b.result;
        e = (g = b.sequence_number) != null ? g : 0;
        f = b.complete;
        typeof f !== 'boolean' &&
          c('FBLogger')('RelayQueryPreloader').mustfix(
            'RelayPrefetchedStreamCache:.next: Expected GraphQL preloader `complete` field to be a boolean, got `%s` for preloader `%s`.',
            String(f),
            a,
          );
      }
      d != null && h.next(a, d, e);
      g = d == null || f !== !1;
      g && h.complete(a, e + 1);
    }
    function e(a, b, c) {
      c === void 0 && (c = 0), c === 0 ? h.forceError(a, b) : h.error(a, b, c);
    }
    function f(a, b, d, e) {
      var f = c('stableStringifyPrefetchedRelayVariablesWithActor')(e, d);
      o(b, f);
      var g = q(b, f);
      g != null &&
        (c('FBLogger')('RelayQueryPreloader')
          .addMetadata('RELAY_PRELOADER', 'QUERY_ID', b)
          .warn(
            'RelayPrefetchedStreamCache::registerPreloader(): You must not register more than one preloader for the query with ID `%s` and actorID/variables `%s`. This could result in stale data.',
            b,
            c('stableStringifyPrefetchedRelayVariablesWithActor')(e, d),
          ),
        h.forceComplete(g),
        n(b, f));
      r(b, f, a, e, d);
    }
    function s(a, b, c) {
      if (a == null) return '';
      var d = a.actorID;
      a = a.variables;
      var e = [];
      d != b && e.push('actorID');
      d = Object.keys(a);
      for (b = 0; b < d.length; b++) {
        var f = d[b],
          g = a[f] != null ? a[f].toString() : '',
          h = c[f] != null ? c[f].toString() : '';
        g != h && e.push(f);
      }
      g = Object.keys(c);
      for (h = 0; h < g.length; h++) {
        f = g[h];
        b = a[f];
        b == null && c[f] != null && e.push(f);
      }
      return e.toString();
    }
    g.clear = a;
    g.subscribe = b;
    g.next = d;
    g.error = e;
    g.registerPreloader = f;
  },
  98,
);
