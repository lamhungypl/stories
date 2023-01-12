__d(
  'FalcoLoggerInternal',
  [
    'AnalyticsCoreData',
    'BaseEventEmitter',
    'FBLogger',
    'ODS',
    'PersistedQueue',
    'Random',
    'ServerTime',
    'isPromise',
    'nullthrows',
    'performanceAbsoluteNow',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 500 * 1024 * 0.6,
      i = 'ods_web_batch',
      j = new Map();
    function k(a) {
      'rate' in a && (a.policy = { r: a.rate });
      var b = a.extra;
      typeof b !== 'string' && (a.extra = JSON.stringify(b));
      return a;
    }
    function a() {
      var a = c('AnalyticsCoreData').identity;
      if (a) {
        var b = a.fbIdentity,
          d = a.appScopedIdentity;
        a = a.claim;
        var e = '';
        if (b) {
          var f = b.accountId;
          b = b.actorId;
          e = f + '^#' + b + '^#';
        } else d && (e = '^#^#' + d.appUid);
        return e + '^#' + a;
      }
      return '';
    }
    function e(a, b) {
      var d;
      d = (d = c('PersistedQueue').getSuffixesForKey(a)) != null ? d : [];
      d.push(b);
      for (
        var d = d,
          e = Array.isArray(d),
          f = 0,
          d = e
            ? d
            : d[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= d.length) break;
          g = d[f++];
        } else {
          f = d.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        var h = a + '^$' + g;
        if (j.has(h)) continue;
        g = c('PersistedQueue').create(a, { migrate: k, queueNameSuffix: g });
        j.set(h, g);
      }
      return c('nullthrows')(j.get(a + '^$' + b));
    }
    a = a();
    var l = e('falco_queue_log', a),
      m = e('falco_queue_immediately', a),
      n = e('falco_queue_critical', a);
    ((e = c('AnalyticsCoreData').queue_activation_experiment) != null
      ? e
      : !1) && c('PersistedQueue').setOnQueueActivateExperiment();
    var o = new (c('BaseEventEmitter'))();
    function p(a, b) {
      d('ODS').bumpEntityKey(
        1344,
        'falco.fabric.www.' + c('AnalyticsCoreData').push_phase,
        a,
        b,
      );
    }
    function q(a, b, c, e) {
      if (a === i) return;
      d('ODS').bumpEntityKey(1344, 'falco.event.' + a, b, c);
      e && p(b, c);
    }
    function r(a, e, f, g, i) {
      var j, k, l, m, n, p, r, t, u, v;
      return b('regeneratorRuntime').async(
        function (w) {
          while (1)
            switch ((w.prev = w.next)) {
              case 0:
                j = c('Random').coinflip(e.r);
                if (!(j || c('AnalyticsCoreData').enable_observer)) {
                  w.next = 30;
                  break;
                }
                k =
                  c('performanceAbsoluteNow')() -
                  d('ServerTime').getOffsetMillis();
                if (!j) {
                  w.next = 29;
                  break;
                }
                l = g();
                if (!c('isPromise')(l)) {
                  w.next = 11;
                  break;
                }
                w.next = 8;
                return b('regeneratorRuntime').awrap(l);
              case 8:
                p = w.sent;
                w.next = 12;
                break;
              case 11:
                p = l;
              case 12:
                ((n = c('AnalyticsCoreData').impression_experiment_flag) != null
                  ? n
                  : 0) > 0 && s(a, p);
                if (!f) {
                  w.next = 22;
                  break;
                }
                r = f();
                if (!c('isPromise')(r)) {
                  w.next = 21;
                  break;
                }
                w.next = 18;
                return b('regeneratorRuntime').awrap(r);
              case 18:
                m = w.sent;
                w.next = 22;
                break;
              case 21:
                m = r;
              case 22:
                t = JSON.stringify(p);
                if (!(t.length > h)) {
                  w.next = 27;
                  break;
                }
                q(a, 'js.drop.oversized_message', 1, !0);
                c('FBLogger')('falco', 'oversized_message:' + a).warn(
                  'Dropping event "%s" due to exceeding the max size %s at %s',
                  a,
                  h,
                  t.length,
                );
                return w.abrupt('return');
              case 27:
                i.wrapAndEnqueueItem({
                  name: a,
                  policy: e,
                  time: k,
                  extra: t,
                  privacyContext: m,
                }),
                  q(a, 'js.event.write_to_queue', 1, !0);
              case 29:
                c('AnalyticsCoreData').enable_observer &&
                  ((u = function () {
                    var a;
                    return (a = l) != null ? a : g();
                  }),
                  (v = { name: a, time: k, sampled: j, getData: u, policy: e }),
                  f &&
                    (v.getPrivacyContext = function () {
                      var a;
                      return (a = m) != null ? a : f();
                    }),
                  o.emit('event', v));
              case 30:
              case 'end':
                return w.stop();
            }
        },
        null,
        this,
      );
    }
    function s(a, b) {
      if (a === 'comet_metrics_viewable_impression') {
        var d;
        d =
          'exp.' +
          String(
            (d = c('AnalyticsCoreData').impression_experiment_flag) != null
              ? d
              : 0,
          );
        Object.prototype.hasOwnProperty.call(b, 'me') && (d = d + '.' + b.me);
        q(a, d, 1, !1);
      }
    }
    function f(a, b) {
      return {
        log: function (c, d) {
          r(a, b, d, c, l);
        },
        logAsync: function (c, d) {
          r(a, b, d, c, l);
        },
        logImmediately: function (c, d) {
          r(a, b, d, c, m);
        },
        logCritical: function (c, d) {
          r(a, b, d, c, n);
        },
        logRealtimeEvent: function (c, d) {
          r(a, b, d, c, n);
        },
      };
    }
    g.observable = o;
    g.create = f;
  },
  98,
);
