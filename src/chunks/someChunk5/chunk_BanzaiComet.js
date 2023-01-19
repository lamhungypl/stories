__d(
  'BanzaiComet',
  [
    'BanzaiAdapterComet',
    'BanzaiCompressionUtils',
    'BanzaiConsts',
    'BanzaiLazyQueue',
    'BanzaiUtils',
    'CurrentUser',
    'ErrorGuard',
    'ExecutionEnvironment',
    'FBLogger',
    'Promise',
    'Run',
    'Visibility',
    'WebSession',
    'clearTimeout',
    'performanceAbsoluteNow',
    'recoverableViolation',
    'setTimeout',
    'setTimeoutCometLoggingPriWithFallback',
    'setTimeoutCometSpeculativeWithFallback',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = { basic: [], vital: [] },
      i = [],
      j = { basic: null, vital: null },
      k = { basic: null, vital: null },
      l = new Map(),
      m,
      n = null,
      o = {
        _expiredBatchMap: function () {
          var a = c('performanceAbsoluteNow')();
          for (
            var b = l.entries(),
              d = Array.isArray(b),
              e = 0,
              b = d
                ? b
                : b[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= b.length) break;
              f = b[e++];
            } else {
              e = b.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            var g = f[1];
            if (g.expiryTime <= a) {
              var h = g.posts[0];
              h = (h = h.__meta.priority) != null ? h : c('BanzaiConsts').BASIC;
              (h = o._getPostBuffer(h)).push.apply(h, g.posts);
              l['delete'](f[0]);
            }
          }
          l.size > 0 &&
            (m = c('setTimeout')(
              o._expiredBatchMap,
              c('BanzaiConsts').BATCH_TIMEOUT,
            ));
        },
        _flushBatchMap: function () {
          c('clearTimeout')(m);
          m = null;
          for (
            var a = l.values(),
              b = Array.isArray(a),
              d = 0,
              a = b
                ? a
                : a[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var e;
            if (b) {
              if (d >= a.length) break;
              e = a[d++];
            } else {
              d = a.next();
              if (d.done) break;
              e = d.value;
            }
            e = e;
            var f = e.posts[0];
            f = (f = f.__meta.priority) != null ? f : c('BanzaiConsts').BASIC;
            (f = o._getPostBuffer(f)).push.apply(f, e.posts);
          }
          l.clear();
        },
        _flushLazyQueue: function () {
          c('BanzaiLazyQueue')
            .flushQueue()
            .forEach(function (a) {
              return o.post.apply(o, a);
            });
        },
        _gatherWadsAndPostsFromBuffer: function (a, b, d, e, f, g) {
          var h = {
            currentSize: 0,
            keepRetryable: d,
            overlimit: !1,
            sendMinimumOnePost: g,
            wadMap: new Map(),
          };
          d = f[e].filter(function (d) {
            return c('BanzaiUtils').filterPost(d, a, b, h);
          });
          !h.overlimit &&
            e === 'vital' &&
            (f.basic = f.basic.filter(function (d) {
              return c('BanzaiUtils').filterPost(d, a, b, h);
            }));
          return d;
        },
        _getPostBuffer: function (a) {
          return a == null ? h.basic : h[a] || [];
        },
        _handleBatchPost: function (a, b, d) {
          if (d == null) return !1;
          var e = a[2],
            f = a[0],
            g = l.get(f);
          if (g != null && g.expiryTime <= e) {
            (b = o._getPostBuffer(b)).push.apply(b, g.posts);
            l['delete'](f);
            return !1;
          }
          if (g != null && g.expiryTime > e) {
            g.posts.push(a);
            return !0;
          }
          b = { expiryTime: e + d, posts: [a] };
          l.set(f, b);
          m ||
            (m = c('setTimeout')(
              o._expiredBatchMap,
              c('BanzaiConsts').BATCH_TIMEOUT,
            ));
          return !0;
        },
        _handlePostPreflightChecks: function (a, b, d) {
          if (o.adapter.config.disabled === !0) return !0;
          if (!c('ExecutionEnvironment').canUseDOM) return !0;
          var e = c('BanzaiAdapterComet').getTopLevel();
          if (e) {
            var f;
            try {
              f = e.require('Banzai');
            } catch (a) {
              f = null;
            }
            if (f) {
              f.post.apply(f, arguments);
              return !0;
            }
          }
          if (c('BanzaiAdapterComet').config.disabled === !0) return !0;
          var g = c('BanzaiAdapterComet').config.blacklist;
          return g != null &&
            typeof g.indexOf === 'function' &&
            g.indexOf(a) !== -1
            ? !0
            : !1;
        },
        _handleSignalPost: function (a, b, e) {
          if (!e) return !1;
          var f = a;
          f.__meta.status = c('BanzaiConsts').POST_INFLIGHT;
          e = [
            {
              app_id: c('CurrentUser').getAppID(),
              posts: [a],
              trigger: a[0],
              user: c('CurrentUser').getPossiblyNonFacebookUserID(),
              webSessionId: d('WebSession').getId(),
            },
          ];
          c('BanzaiAdapterComet').send(
            o._prepForTransit(e),
            function () {
              (f.__meta.status = c('BanzaiConsts').POST_SENT),
                f.__meta.callback != null && f.__meta.callback();
            },
            function (d) {
              c('BanzaiUtils').retryPost(a, d, h[b]);
            },
            !0,
          );
          return !f.__meta.retry;
        },
        _initialize: function () {
          var a = [c('BanzaiConsts').VITAL, c('BanzaiConsts').BASIC];
          c('ExecutionEnvironment').canUseDOM &&
            (c('Visibility').isSupported()
              ? (c('Visibility').addListener(
                  c('Visibility').HIDDEN,
                  function () {
                    o._flushLazyQueue(),
                      a.forEach(function (a) {
                        o._getPostBuffer(a).length > 0 &&
                          o._tryToSendViaBeacon(a);
                      }),
                      o._store();
                  },
                ),
                c('Visibility').addListener(
                  c('Visibility').VISIBLE,
                  function () {
                    o._flushLazyQueue(),
                      a.forEach(function (a) {
                        o._tryToSendViaBeacon(a);
                      }),
                      o._restore();
                  },
                ))
              : o.adapter.setHooks(o),
            d('Run').onBeforeUnload(function () {
              o._flushLazyQueue(),
                o._flushBatchMap(),
                o._sendBeacon(c('BanzaiConsts').VITAL),
                o._sendBeacon(c('BanzaiConsts').BASIC);
            }, !1),
            o.adapter.setUnloadHook(o),
            d('Run').onAfterLoad(function () {
              o._restore();
            }));
        },
        _isShutdown: !1,
        _prepForTransit: function (a) {
          var b = new FormData();
          b.append('ts', String(Date.now()));
          var d = c('BanzaiCompressionUtils').outOfBandsPosts(a);
          Object.keys(d).forEach(function (a) {
            b.append(a, d[a]);
          });
          b.append('q', JSON.stringify(a));
          return b;
        },
        _prepWadForTransit: function (a) {
          c('BanzaiCompressionUtils').compressWad(
            a,
            c('BanzaiAdapterComet').preferredCompressionMethod(),
          );
        },
        _prepWadForTransitAsync: function (a) {
          return c('BanzaiCompressionUtils').compressWadAsync(
            a,
            c('BanzaiAdapterComet').preferredCompressionMethod(),
          );
        },
        _restore: function () {
          var a = function (a) {
              var b = a.__meta;
              b =
                b.priority === c('BanzaiConsts').VITAL
                  ? c('BanzaiConsts').VITAL
                  : c('BanzaiConsts').BASIC;
              o._getPostBuffer(b).push(a);
            },
            b = c('BanzaiAdapterComet').getStorage();
          c('ErrorGuard').applyWithGuard(b.restore, b, [a]);
          o._schedule(c('BanzaiConsts').VITAL_WAIT, c('BanzaiConsts').VITAL);
        },
        _schedule: function (a, b) {
          if (b == null) return !1;
          var d = function () {
              (k[b] = null), (j[b] = null), o._sendWithCallbacks(b, null, null);
            },
            e = c('performanceAbsoluteNow')() + a;
          if (j[b] == null || e < j[b]) {
            j[b] = e;
            k[b] !== null && c('clearTimeout')(k[b]);
            b === c('BanzaiConsts').VITAL
              ? (k.vital = c('setTimeoutCometLoggingPriWithFallback')(d, a))
              : (k.basic = c('setTimeoutCometSpeculativeWithFallback')(d, a));
            return !0;
          }
          return !1;
        },
        _sendBeacon: function (a) {
          o._getPostBuffer(a).length > 0 && o._tryToSendViaBeacon(a);
        },
        _sendWithCallbacks: function (a, d, e) {
          h[a].length > 0 &&
            o._schedule(
              a === 'vital'
                ? c('BanzaiConsts').VITAL_WAIT
                : c('BanzaiConsts').BASIC_WAIT_COMET,
              a,
            );
          if (!c('BanzaiAdapterComet').readyToSend()) {
            e && e();
            return;
          }
          var f = c('BanzaiAdapterComet').getStorage();
          c('ErrorGuard').applyWithGuard(f.flush, f, [o._restore]);
          c('BanzaiAdapterComet').inform(c('BanzaiConsts').SEND);
          var g = [],
            j = [];
          h[a] = o._gatherWadsAndPostsFromBuffer(g, j, !0, a, h, !0);
          if (g.length <= 0) {
            c('BanzaiAdapterComet').inform(c('BanzaiConsts').OK);
            d && d();
            return;
          }
          g[0].trigger = n;
          n = null;
          g.forEach(function (a) {
            return (a.send_method = 'ajax');
          });
          i.push.apply(i, j);
          b('Promise')
            .all(g.map(o._prepWadForTransitAsync))
            ['finally'](function () {
              if (o._isShutdown) return;
              j.forEach(function (a) {
                a = i.indexOf(a);
                if (a === -1) {
                  c('recoverableViolation')(
                    'inflight post not found in inPreparationPosts',
                    'comet_infra',
                  );
                  return;
                }
                i.splice(a, 1);
              });
              c('BanzaiAdapterComet').send(
                o._prepForTransit(g),
                function () {
                  j.forEach(function (a) {
                    a = a;
                    a.__meta.status = c('BanzaiConsts').POST_SENT;
                    typeof a.__meta.callback === 'function' &&
                      a.__meta.callback();
                  }),
                    d && d();
                },
                function (b) {
                  j.forEach(function (d) {
                    c('BanzaiUtils').retryPost(d, b, h[a]);
                  }),
                    o._store(),
                    e && e();
                },
              );
            });
        },
        _store: function () {
          var a = c('BanzaiAdapterComet').getStorage();
          c('ErrorGuard').applyWithGuard(a.store, a, [
            h[c('BanzaiConsts').VITAL],
          ]);
          c('ErrorGuard').applyWithGuard(a.store, a, [
            h[c('BanzaiConsts').BASIC],
          ]);
        },
        _testState: function () {
          return { postBuffer: h.basic, triggerRoute: n };
        },
        _tryToSendViaBeacon: function (b) {
          if (!(navigator && navigator.sendBeacon)) return !1;
          var d = !0,
            e = [],
            f = [];
          h[b] = o._gatherWadsAndPostsFromBuffer(e, f, !1, b, h, !1);
          if (e.length <= 0) return !1;
          e.forEach(function (a) {
            return (a.send_method = 'beacon');
          });
          e.map(o._prepWadForTransit);
          e = o._prepForTransit(e);
          var g = o.adapter.getEndPointUrl(!0);
          g = a.navigator.sendBeacon(g, e);
          g ||
            ((d = !1),
            f.forEach(function (a) {
              c('BanzaiUtils').resetPostStatus(a), o._getPostBuffer(b).push(a);
            }));
          return d;
        },
        _unload: function () {
          o._flushLazyQueue(),
            o._flushBatchMap(),
            c('BanzaiAdapterComet').cleanup(),
            c('BanzaiAdapterComet').inform(c('BanzaiConsts').SHUTDOWN),
            (o._isShutdown = !0),
            i.forEach(function (a) {
              var b = a;
              b = b.__meta.priority;
              c('BanzaiUtils').retryPost(
                a,
                444,
                o._getPostBuffer((a = b) != null ? a : c('BanzaiConsts').VITAL),
              );
            }),
            o._sendBeacon(c('BanzaiConsts').VITAL),
            o._sendBeacon(c('BanzaiConsts').BASIC),
            o._store();
        },
        _validateRouteAndSize: function (a, b) {
          a ||
            c('FBLogger')('banzai')
              .blameToPreviousFrame()
              .blameToPreviousFrame()
              .mustfix('BanzaiComet.post called without specifying a route');
          return ((a = JSON.stringify(b)) != null ? a : '').length;
        },
        BASIC: { delay: c('BanzaiConsts').BASIC_WAIT },
        BASIC_WAIT: c('BanzaiConsts').BASIC_WAIT,
        ERROR: c('BanzaiConsts').ERROR,
        EXPIRY: void 0,
        OK: c('BanzaiConsts').OK,
        SEND: c('BanzaiConsts').SEND,
        SHUTDOWN: c('BanzaiConsts').SHUTDOWN,
        VITAL: { delay: c('BanzaiConsts').VITAL_WAIT },
        VITAL_WAIT: c('BanzaiConsts').VITAL_WAIT,
        adapter: c('BanzaiAdapterComet'),
        canUseNavigatorBeacon: function () {
          return !!(
            navigator &&
            navigator.sendBeacon &&
            c('BanzaiAdapterComet').isOkToSendViaBeacon()
          );
        },
        flush: function (a, b) {
          o.flushHelper(c('BanzaiConsts').VITAL, a, b),
            o.flushHelper(c('BanzaiConsts').BASIC, a, b);
        },
        flushHelper: function (a, b, d) {
          (j[a] = null),
            k[a] !== null && (c('clearTimeout')(k[a]), (k[a] = null)),
            o._sendWithCallbacks(a, b, d);
        },
        isEnabled: function (a) {
          return !!(
            c('BanzaiAdapterComet').config.gks &&
            c('BanzaiAdapterComet').config.gks[a]
          );
        },
        post: function (a, b, d) {
          var e;
          o._flushLazyQueue();
          if (o._handlePostPreflightChecks(a, b, d)) return;
          var f = a.split(':');
          if (
            (c('BanzaiAdapterComet').config.known_routes || []).indexOf(
              f[0],
            ) === -1
          ) {
            c('BanzaiAdapterComet').config.should_log_unknown_routes === !0 &&
              c('FBLogger')('banzai')
                .blameToPreviousFrame()
                .mustfix(
                  "Attempted to post to invalid Banzai route '" +
                    a +
                    "'. This call site should be cleaned up.",
                );
            if (
              c('BanzaiAdapterComet').config.should_drop_unknown_routes === !0
            )
              return;
          }
          f = o._validateRouteAndSize(a, b);
          d = d || {};
          b = c('BanzaiUtils').wrapData(
            a,
            b,
            c('performanceAbsoluteNow')(),
            d.retry,
            f,
          );
          f = b;
          d.callback && (f.__meta.callback = d.callback);
          d.compress != null && (f.__meta.compress = d.compress);
          e = (e = d.delay) != null ? e : c('BanzaiConsts').BASIC_WAIT_COMET;
          var g =
            e > c('BanzaiConsts').VITAL_WAIT
              ? c('BanzaiConsts').BASIC
              : c('BanzaiConsts').VITAL;
          f.__meta.priority = g;
          if (o._handleSignalPost(b, g, (f = d.signal) != null ? f : !1))
            return;
          if (o._handleBatchPost(b, g, d.batch)) return;
          o._getPostBuffer(g).push(b);
          (o._schedule(e, g) || n == null) && (n = a);
        },
        postsCount: new Map(),
        subscribe: c('BanzaiAdapterComet').subscribe,
      };
    o._initialize();
    e = o;
    g['default'] = e;
  },
  98,
);
