__d(
  'createRelayFBNetworkFetch',
  [
    'invariant',
    'DTSGParser',
    'RelayAPIConfig',
    'RelayAPIRequest',
    'RelayDiskCacheConfig',
    'RelayGraphQLRequestUtils',
    'RelayPrefetchedResponseProvider',
    'RelayRuntime',
    'RelayWWWInitialRolloutResolver',
    'getAnalyticsTags',
    'getAsyncParams',
    'getCrossOriginTransport',
    'getSameOriginTransport',
    'nullthrows',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('RelayDiskCacheConfig').getDiskCacheConfig,
      i = (d = b('RelayRuntime')).Observable,
      j = d.RelayError,
      k = d.RelayFeatureFlags,
      l = d.RelayProfiler;
    function m(a) {
      return a.operationKind === 'mutation';
    }
    function n(a) {
      return a.operationKind === 'query';
    }
    function o(b, c) {
      a.FormData != null || g(0, 19002);
      var d = new FormData();
      for (var e in b)
        Object.prototype.hasOwnProperty.call(b, e) && d.append(e, b[e]);
      for (e in c)
        Object.prototype.hasOwnProperty.call(c, e) && d.append(e, c[e]);
      return d;
    }
    function p(a) {
      a = a.cacheID ? a.cacheID : a.id;
      a != null || g(0, 22754);
      return a;
    }
    function q(a) {
      a = a == null ? void 0 : a.performanceLogger;
      if (
        a != null &&
        typeof a === 'object' &&
        typeof a.startTimespan === 'function'
      ) {
        a = a;
        return a;
      }
    }
    function c(a) {
      var c = a.graphURI,
        d = a.transportBuilder,
        e = a.getAdditionalData,
        f = a.getAdditionalHeaders,
        g = a.queryResponseCache,
        i = a.liveQueryFetchWithWWWInitialFn,
        j = a.liveQueryFetchFn,
        l = a.wrapObservableFn,
        m = a.accessToken,
        n = a.actorID,
        o = a.customHeaders,
        p = a.fetchTimeout,
        z = a.getAnalyticsTags,
        A = z === void 0 ? b('getAnalyticsTags') : z,
        B = a.retryDelays,
        C = a.userAgent,
        D = a.xhrEncoding,
        E = a.useXController,
        F = a.tokenProxy,
        G = a.batchResponseChunks;
      return function (a, z, H, I, J) {
        var K, L, M, N, O, P, Q;
        K = (K = c) != null ? K : b('RelayAPIConfig').graphURI;
        var R = g;
        L = (L = n) != null ? L : b('RelayAPIConfig').actorID;
        M = (M = m) != null ? M : b('RelayAPIConfig').accessToken;
        N = (N = E) != null ? N : b('RelayAPIConfig').useXController;
        O =
          typeof ((O = H.metadata) == null ? void 0 : O.privacyContext) ===
          'string'
            ? H.metadata.privacyContext
            : null;
        k.ENABLE_FRIENDLY_QUERY_NAME_GQL_URL &&
          K.addQueryData({ __query: a.name });
        P =
          (P = d) != null
            ? P
            : N
            ? b('getSameOriginTransport')
            : b('RelayAPIConfig').withCredentials
            ? b('getCrossOriginTransport').withCredentials
            : b('getCrossOriginTransport');
        N = e ? e() : N ? { av: L } : { access_token: M };
        Q = f
          ? f()
          : b('RelayGraphQLRequestUtils').getRelayAPIConfigHeaders(
              (Q = o) != null ? Q : b('RelayAPIConfig').customHeaders,
              (Q = D) != null ? Q : b('RelayAPIConfig').xhrEncoding,
              (Q = C) != null ? Q : b('RelayAPIConfig').userAgent,
            );
        O != null && (Q.privacy_context = O);
        O = {
          queryName: a.name,
          usedCache: !1,
          usedDiskCache: !1,
          usedPrefetcher: !1,
          serverTimestamp: null,
          transactionId: H.transactionId,
        };
        var S = q(H == null ? void 0 : H.metadata);
        Q = y(
          K,
          P,
          Q,
          a,
          z,
          I,
          N,
          A,
          (K = B) != null ? K : b('RelayAPIConfig').retryDelays,
          (P = p) != null ? P : b('RelayAPIConfig').fetchTimeout,
          F,
          S,
          G,
        );
        I = h(H);
        I && (Q = I.cache.withDiskCacheSave(Q, a, z, L, I));
        R && (Q = x(Q, a, z, R));
        N = u(a, z, L, O, R, J, I, S);
        K = t(a, z, O, R, H, L, J, S);
        I && (K = I.cache.withDiskCacheSave(K, a, z, L, I));
        P = v(a, z, L, M, H, j, i);
        S = N.concat(K).concat(P);
        if (R) {
          I = w(a, z, O, H, R, J);
          S = S.ifEmpty(I);
        }
        N = r(S, Q, H);
        k.ENABLE_DO_NOT_WRAP_LIVE_QUERY && (N = l != null ? l(N) : N);
        H.liveConfigId != null &&
          !b('RelayWWWInitialRolloutResolver').disableWWWInitial(
            H.liveConfigId,
          ) &&
          i != null &&
          (N = i(
            a,
            z,
            { actor_id: L, access_token: M, config_id: H.liveConfigId },
            N,
          ));
        k.ENABLE_DO_NOT_WRAP_LIVE_QUERY || (N = l != null ? l(N) : N);
        return s(O, N);
      };
    }
    function r(a, b, c) {
      var d;
      d = (d = c.metadata) == null ? void 0 : d.freshTTLSeconds;
      d = typeof d === 'number' ? d : null;
      c = (c = c.metadata) == null ? void 0 : c.cacheTTLSeconds;
      c = typeof c === 'number' ? c : null;
      if (d == null && c == null) return a.ifEmpty(b);
      var e = (c = c) != null ? c : Infinity,
        f = (c = d) != null ? c : e;
      f > e;
      return i.create(function (c) {
        var d = !0,
          g = a.subscribe({
            next: function (a) {
              a = Array.isArray(a) ? a : [a];
              for (
                var a = a,
                  b = Array.isArray(a),
                  g = 0,
                  a = b
                    ? a
                    : a[
                        typeof Symbol === 'function'
                          ? Symbol.iterator
                          : '@@iterator'
                      ]();
                ;

              ) {
                var h, i;
                if (b) {
                  if (g >= a.length) break;
                  i = a[g++];
                } else {
                  g = a.next();
                  if (g.done) break;
                  i = g.value;
                }
                i = i;
                h =
                  typeof ((h = i.extensions) == null
                    ? void 0
                    : h.cacheTimestamp) === 'number'
                    ? (h = i.extensions) == null
                      ? void 0
                      : h.cacheTimestamp
                    : null;
                h = h == null ? 0 : (Date.now() - h) / 1e3;
                var j = h <= e;
                h = h <= f && j;
                h && (d = !1);
                j && c.next(i);
              }
            },
            error: c.error,
            complete: function () {
              d ? (g = b.subscribe(c)) : c.complete();
            },
          });
        return function () {
          g.unsubscribe();
        };
      });
    }
    function s(a, b) {
      var c;
      return b['do']({
        start: function () {
          c = l.profile('fetchRelayQuery', a);
        },
        next: function (b) {
          var d;
          if (
            !Array.isArray(b) &&
            ((d = b.extensions) == null ? void 0 : d.server_metadata) != null &&
            ((d = b.extensions.server_metadata) == null
              ? void 0
              : d.request_start_time_ms) != null &&
            ((d = b.extensions.server_metadata) == null
              ? void 0
              : d.time_at_flush_ms) != null
          ) {
            d = b.extensions.server_metadata;
            b = d.request_start_time_ms;
            d = d.time_at_flush_ms;
            a.serverTimestamp = { startTime: Number(b), endTime: Number(d) };
          }
          c.stop();
        },
        error: function (a) {
          c.stop(a);
        },
      });
    }
    function t(a, c, d, e, f, h, j, k) {
      if (!n(a))
        return i.create(function (a) {
          return a.complete();
        });
      var l = p(a);
      f =
        (f != null &&
          f.metadata != null &&
          f.metadata.prefetchedResponseProvider) ||
        void 0;
      f != null && (typeof f.get === 'function' || g(0, 2666), (f = f));
      f = (f = f) != null ? f : b('RelayPrefetchedResponseProvider');
      f = f.get(h, l, c, a.name, k);
      return f.map(function (a) {
        j != null && j({ prefetched: !0 });
        d.usedPrefetcher = !0;
        e && e.set(l, c, a);
        return a;
      });
    }
    function u(a, b, c, d, e, f, g, h) {
      if (g == null)
        return i.create(function (a) {
          return a.complete();
        });
      c = g.cache.getResponse(a, b, c, g, h);
      return c.map(function (c) {
        f != null && f({ cachedOnDisk: !0 });
        d.usedDiskCache = !0;
        e && e.set(p(a), b, c);
        return c;
      });
    }
    function v(a, c, d, e, f, h, j) {
      if (
        f.liveConfigId != null &&
        (b('RelayWWWInitialRolloutResolver').disableWWWInitial(
          f.liveConfigId,
        ) ||
          j == null)
      ) {
        h != null || g(0, 37288, f.liveConfigId);
        return h(a, c, {
          actor_id: d,
          access_token: e,
          config_id: f.liveConfigId,
        });
      }
      return i.create(function (a) {
        return a.complete();
      });
    }
    function w(a, b, c, d, e, f) {
      return i.create(function (g) {
        if (n(a) && !d.force) {
          var h = e.get(p(a), b);
          h && (f != null && f({ cached: !0 }), (c.usedCache = !0), g.next(h));
        }
        g.complete();
      });
    }
    function x(a, b, c, d) {
      return a['do']({
        next: function (a) {
          m(b) ? d.clear() : d.set(p(b), c, a);
        },
      });
    }
    function y(a, c, d, e, f, g, h, k, l, n, p, q, r) {
      p === void 0 && (p = !1);
      r === void 0 && (r = !1);
      return i.create(function (s) {
        (!m(e) || k == null) &&
          (k = function () {
            return i.from(null);
          }),
          k().subscribe({
            next: function (i) {
              var k = new (b('RelayAPIRequest'))(a, l, n)
                .setMethod('POST')
                .setSkipRetry(m(e))
                .setTrackingName('RelayFBNetwork_' + e.name)
                .setTransportBuilder(c)
                .setErrorHandler(function (a) {
                  var c;
                  s.error(
                    b('RelayGraphQLRequestUtils').createErrorFromXHR(
                      a,
                      'Network request encountered error ' +
                        (((c = a.errorType) != null ? c : '') + ' ') +
                        (((c = a.errorCode) != null ? c : '') +
                          ': ' +
                          ((c = a.errorMsg) != null ? c : '')),
                    ),
                  );
                })
                .setTimeoutHandler(function () {
                  s.error(
                    j.createWarning(
                      'NetworkTimeoutError',
                      'Network request timed out. %s(%s)',
                      e.name,
                      e.id || '',
                    ),
                  );
                });
              q && k.setPerformanceLogger(q);
              r
                ? k.setResponseBatchChunkHandler(function (a) {
                    var c = [],
                      d;
                    for (
                      var a = a,
                        f = Array.isArray(a),
                        g = 0,
                        a = f
                          ? a
                          : a[
                              typeof Symbol === 'function'
                                ? Symbol.iterator
                                : '@@iterator'
                            ]();
                      ;

                    ) {
                      var h;
                      if (f) {
                        if (g >= a.length) break;
                        h = a[g++];
                      } else {
                        g = a.next();
                        if (g.done) break;
                        h = g.value;
                      }
                      h = h;
                      var i = h.responseText;
                      h = h.isComplete;
                      d = d || h;
                      h = void 0;
                      try {
                        b('DTSGParser').updateFromAsyncResponse(i),
                          (h = b('RelayGraphQLRequestUtils').parsePayload(i));
                      } catch (a) {
                        c.length > 0 && s.next(c);
                        return s.error(a);
                      }
                      if (h == null) {
                        c.length > 0 && s.next(c);
                        return s.error(
                          j.createWarning(
                            'EmptyResponseError',
                            'Parsed network response is empty. %s(%s)',
                            e.name,
                            e.id || '',
                          ),
                        );
                      }
                      if (h.errors)
                        for (
                          var i = h.errors,
                            k = Array.isArray(i),
                            l = 0,
                            i = k
                              ? i
                              : i[
                                  typeof Symbol === 'function'
                                    ? Symbol.iterator
                                    : '@@iterator'
                                ]();
                          ;

                        ) {
                          var m;
                          if (k) {
                            if (l >= i.length) break;
                            m = i[l++];
                          } else {
                            l = i.next();
                            if (l.done) break;
                            m = l.value;
                          }
                          m = m;
                          if (m.severity === 'CRITICAL') {
                            c.length > 0 && s.next(c);
                            return s.error(
                              b(
                                'RelayGraphQLRequestUtils',
                              ).createErrorFromPayload(m),
                            );
                          }
                        }
                      Array.isArray(h) ? c.push.apply(c, h) : c.push(h);
                    }
                    c.length > 0 && s.next(c);
                    d && s.complete();
                  })
                : k.setResponseChunkHandler(function (a, c, d) {
                    var f;
                    try {
                      b('DTSGParser').updateFromAsyncResponse(a),
                        (f = b('RelayGraphQLRequestUtils').parsePayload(a));
                    } catch (a) {
                      return s.error(a);
                    }
                    if (!f)
                      return s.error(
                        j.createWarning(
                          'EmptyResponseError',
                          'Parsed network response is empty. %s(%s)',
                          e.name,
                          e.id || '',
                        ),
                      );
                    if (f.errors)
                      for (
                        var c = f.errors,
                          a = Array.isArray(c),
                          g = 0,
                          c = a
                            ? c
                            : c[
                                typeof Symbol === 'function'
                                  ? Symbol.iterator
                                  : '@@iterator'
                              ]();
                        ;

                      ) {
                        var h;
                        if (a) {
                          if (g >= c.length) break;
                          h = c[g++];
                        } else {
                          g = c.next();
                          if (g.done) break;
                          h = g.value;
                        }
                        h = h;
                        if (h.severity === 'CRITICAL')
                          return s.error(
                            b(
                              'RelayGraphQLRequestUtils',
                            ).createErrorFromPayload(h),
                          );
                      }
                    s.next(f);
                    d && s.complete();
                  });
              var t = babelHelpers['extends'](
                {},
                h,
                b('getAsyncParams')('POST'),
                {
                  fb_api_caller_class: 'RelayModern',
                  fb_api_req_friendly_name: e.name,
                  variables: JSON.stringify(f),
                  server_timestamps: !0,
                },
              );
              p && delete t.__csr;
              e.id
                ? (t.doc_id = e.id)
                : (t.doc = b('nullthrows')(
                    e.text,
                    'RelayFBNetwork: A query should have either an id or text, found neither.',
                  ));
              i != null &&
                i.length > 0 &&
                (t.fb_api_analytics_tags = JSON.stringify(i));
              g != null
                ? k.setRawData(o(g, t))
                : k.setData(t).setRequestHeaders(
                    babelHelpers['extends'](
                      {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'X-FB-Friendly-Name': e.name,
                      },
                      d,
                    ),
                  );
              return k.send().abort;
            },
          });
      });
    }
    e.exports = c;
  },
  null,
);
