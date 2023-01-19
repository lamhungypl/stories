__d(
  'createRelayFBNetwork',
  [
    'DTSG',
    'ErrorGuard',
    'Promise',
    'cr:1110430',
    'gkx',
    'isPromise',
    'killswitch',
    'processRelayPrefetchURIsPayload',
    'processRelaySRPayload',
    'relay-runtime',
    'withLive',
    'withLiveClientPolling',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b('cr:1110430');
    var h =
      c('killswitch')('RELAY_BLOCK_NETWORK_ON_3D_STATIC_RESOURCES') === !1 &&
      !c('gkx')('708253');
    function i(a, b, e, f, g, h) {
      var i = a.extensions;
      if (!i || i.__resources_processed === !0) {
        e && e();
        return;
      }
      i.__resources_processed = !0;
      if (i.__sr_unprocessed != null)
        throw d('relay-runtime').RelayError.create(
          'GraphQLError',
          'Fatal Error: Found unprocessed static resource payload',
        );
      c('ErrorGuard').applyWithGuard(
        function () {
          var a = i.prefetch_uris_v2;
          i.prefetch_uris = null;
          i.prefetch_uris_v2 = null;
          a != null &&
            Array.isArray(a) &&
            c('processRelayPrefetchURIsPayload')(a);
        },
        null,
        [],
        { name: 'RelayFBNetwork: prefetchURIs' },
      );
      c('ErrorGuard').applyWithGuard(
        function () {
          var a = i.all_video_dash_prefetch_representations;
          (i.prefetch_dash_segments = null),
            (i.all_video_dash_prefetch_representations = null),
            (i.video_dash_prefetch_representations = null);
          a != null && Array.isArray(a) && h != null && h(a);
        },
        null,
        [],
        { name: 'RelayFBNetwork: prefetchDash' },
      );
      c('ErrorGuard').applyWithGuard(
        function () {
          var a = i.sr_payload;
          i.sr_payload = null;
          a != null && typeof a === 'object'
            ? c('processRelaySRPayload')(a, b, e, function (a) {
                g && g({ srPayloadStats: a });
              })
            : e && e();
        },
        null,
        [],
        { name: 'RelayFBNetwork: sr_payload' },
      );
      c('ErrorGuard').applyWithGuard(
        function () {
          var a = i.dtsg_token;
          a != null &&
            a !== '' &&
            typeof a === 'string' &&
            d('DTSG').setToken(a);
        },
        null,
        [],
        { name: 'RelayFBNetwork: dtsg_token' },
      );
      c('ErrorGuard').applyWithGuard(
        function () {
          var a = i.prefetch_comet_routing;
          i.prefetch_comet_routing = null;
          if (f != null && a != null && typeof a === 'object') {
            var b = a.data;
            a = a.uris;
            (b != null || a != null) && f(a, b);
          }
        },
        null,
        [],
        { name: 'RelayFBNetwork: prefetch_comet_routing' },
      );
    }
    function j(a, c, d, e, f) {
      var g;
      g = (g = a.extensions) == null ? void 0 : g.sr_payload;
      if (g != null && typeof g === 'object')
        return new (b('Promise'))(function (b) {
          i(
            a,
            c,
            function () {
              b(a);
            },
            d,
            e,
            f,
          );
        });
      i(a, c, null, d, e, f);
      return a;
    }
    function k(a, b) {
      return d('relay-runtime').Observable.create(function (c) {
        var e = !1,
          f,
          g,
          h = [];
        function i(a) {
          if (g) h.push(a);
          else
            try {
              d('relay-runtime')
                .Observable.from(b(a))
                .subscribe({
                  start: function (a) {
                    g = a;
                  },
                  next: c.next,
                  error: c.error,
                  complete: function () {
                    (g = void 0),
                      h.length !== 0 ? i(h.shift()) : e && c.complete();
                  },
                });
            } catch (a) {
              c.error(a);
            }
        }
        a.subscribe({
          start: function (a) {
            f = a;
          },
          next: i,
          error: c.error,
          complete: function () {
            (e = !0), g || c.complete();
          },
        });
        return function () {
          g && (g.unsubscribe(), (g = void 0)), f.unsubscribe(), (h.length = 0);
        };
      });
    }
    function a(a, e, f, g) {
      var l = d('relay-runtime').Network.create(a, e);
      return {
        execute: function (a, d, e, m, n) {
          e = c('withLiveClientPolling')(a, c('withLive')(a, e));
          return h
            ? k(l.execute(a, d, e, m, n), function (d) {
                if (Array.isArray(d)) {
                  var e = [],
                    h = !1;
                  d.forEach(function (b) {
                    b = j(b, a.name, f, n, g);
                    h = h || c('isPromise')(b);
                    e.push(b);
                  });
                  return h ? b('Promise').all(e) : e;
                }
                return j(d, a.name, f, n, g);
              })
            : l.execute(a, d, e, m, n)['do']({
                next: function (b) {
                  Array.isArray(b)
                    ? b.forEach(function (b) {
                        i(b, a.name, null, f, n, g);
                      })
                    : i(b, a.name, null, f, n, g);
                },
              });
        },
      };
    }
    g['default'] = a;
  },
  98,
);
