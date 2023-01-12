__d(
  'PersistedQueue',
  [
    'AnalyticsCoreData',
    'BaseEventEmitter',
    'ExecutionEnvironment',
    'FBJSON',
    'Run',
    'WebStorage',
    'WebStorageMutex',
    'err',
    'guid',
    'nullthrows',
    'performanceAbsoluteNow',
    'requestAnimationFrame',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 24 * 60 * 60 * 1e3,
      i = 30 * 1e3,
      j = new (c('BaseEventEmitter'))(),
      k;
    function l(a) {
      a === void 0 && (a = !1);
      if (k === void 0) {
        var b;
        if (
          ((b = c('AnalyticsCoreData').queue_activation_experiment) != null
            ? b
            : !1) &&
          a
        )
          try {
            return c('WebStorage').getLocalStorageForRead();
          } catch (a) {
            return null;
          }
        b = 'check_quota';
        try {
          a = c('WebStorage').getLocalStorage();
          a ? (a.setItem(b, b), a.removeItem(b), (k = a)) : (k = null);
        } catch (a) {
          k = null;
        }
      }
      return k;
    }
    function m(a) {
      var b = a.prev,
        c = a.next;
      c && (c.prev = b);
      b && (b.next = c);
      a.next = null;
      a.prev = null;
    }
    function n(a) {
      return { item: a, next: null, prev: null };
    }
    function o(a, b) {
      return (
        a +
        '^$' +
        ((a = b == null ? void 0 : b.queueNameSuffix) != null ? a : '')
      );
    }
    var p = {},
      q = {},
      r = {},
      s = !1;
    a = (function () {
      function a(a, b) {
        var d,
          e = this;
        this.$7 = 0;
        this.$3 = a;
        this.$5 = (d = b == null ? void 0 : b.queueNameSuffix) != null ? d : '';
        this.$4 = o(a, b);
        this.$11 = this.$4 + '^$' + c('guid')();
        this.$13 = !1;
        if (b) {
          this.$8 = (d = b.max_age_in_ms) != null ? d : h;
          this.$12 = b.migrate;
        } else this.$8 = h;
        this.$9 = [
          j.addListener('active', function () {
            (e.$10 != null || !e.$13) &&
              ((e.$13 = !0), (e.$10 = null), e.$14());
          }),
          j.addListener('inactive', function () {
            e.$10 == null && ((e.$10 = Date.now()), e.$15());
          }),
        ];
        (c('ExecutionEnvironment').canUseDOM ||
          c('ExecutionEnvironment').isInWorker) &&
          c('requestAnimationFrame')(function () {
            return e.$14();
          });
      }
      var b = a.prototype;
      b.isActive = function () {
        var a = this.$10;
        if (a == null) return !0;
        if (Date.now() - a > i) {
          this.$10 = null;
          j.emit('active', null);
          return !0;
        }
        return !1;
      };
      b.$14 = function () {
        this.$16(), this.$17();
      };
      b.$15 = function () {
        this.$18();
      };
      b.getFullName = function () {
        return this.$4;
      };
      b.getQueueNameSuffix = function () {
        return this.$5;
      };
      a.isQueueActivateExperiment = function () {
        return s;
      };
      a.setOnQueueActivateExperiment = function () {
        s = !0;
      };
      a.create = function (b, d) {
        var e = o(b, d);
        if (e in p) throw c('err')('Duplicate queue created: ' + b);
        d = new a(b, d);
        p[e] = d;
        r[b] ? r[b].push(d) : (r[b] = [d]);
        e = q[b];
        e && d.setHandler(e);
        return d;
      };
      a.setHandler = function (a, b) {
        if (r[a]) {
          var c = r[a];
          for (
            var c = c,
              d = Array.isArray(c),
              e = 0,
              c = d
                ? c
                : c[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= c.length) break;
              f = c[e++];
            } else {
              e = c.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            f.setHandler(b);
          }
        }
        q[a] = b;
      };
      b.destroy = function () {
        this.$9.forEach(function (a) {
          return a.remove();
        });
      };
      a.destroy = function (a, b) {
        a = o(a, b);
        p[a].destroy();
        delete p[a];
      };
      b.setHandler = function (a) {
        this.$6 = a;
        this.$17();
        return this;
      };
      b.$17 = function () {
        this.$7 > 0 && this.$6 && this.$6(this);
      };
      b.length = function () {
        return this.$7;
      };
      b.enumeratedLength = function () {
        return this.$19().length;
      };
      a.isPersistenceAllowed = function () {
        var a = l();
        return !a ? !1 : !0;
      };
      a.getSuffixesForKey = function (a) {
        var b = [];
        try {
          var c = l(!0);
          if (!c) return b;
          a = a + '^$';
          for (var d = 0; d < c.length; d++) {
            var e = c.key(d);
            if (typeof e === 'string' && e.startsWith(a)) {
              e = e.split('^$');
              if (e.length > 2) {
                e = e[1];
                b.push(e);
              } else b.push('');
            }
          }
        } catch (a) {}
        return b;
      };
      b.$16 = function () {
        var b = this;
        if (this.$5 === '') {
          this.$20();
          return;
        }
        var a = l(!0);
        if (!a) return;
        var e = this.$4 + '^$',
          f = new (c('WebStorageMutex'))(e),
          g = this.$12;
        f.lock(function (f) {
          var h = Date.now() - b.$8;
          try {
            for (var i = 0; i < a.length; i++) {
              var j = a.key(i);
              if (typeof j === 'string' && j.startsWith(e)) {
                var k = a.getItem(j);
                a.removeItem(j);
                if (k != null && k.startsWith('{')) {
                  j = d('FBJSON').parse(c('nullthrows')(k));
                  if (j.ts > h)
                    try {
                      for (
                        var k = j.items,
                          j = Array.isArray(k),
                          l = 0,
                          k = j
                            ? k
                            : k[
                                typeof Symbol === 'function'
                                  ? Symbol.iterator
                                  : '@@iterator'
                              ]();
                        ;

                      ) {
                        var m;
                        if (j) {
                          if (l >= k.length) break;
                          m = k[l++];
                        } else {
                          l = k.next();
                          if (l.done) break;
                          m = l.value;
                        }
                        m = m;
                        m = g != null ? g(m) : m;
                        b.$21(m);
                      }
                    } catch (a) {}
                }
              }
            }
          } catch (a) {}
          f.unlock();
        });
      };
      b.$20 = function () {
        var b = this,
          a = l(!0);
        if (!a) return;
        var e = this.$4,
          f = new (c('WebStorageMutex'))(e),
          g = this.$12;
        f.lock(function (f) {
          var h = Date.now() - b.$8;
          try {
            for (var i = 0; i < a.length; i++) {
              var j = a.key(i);
              if (typeof j === 'string' && j.startsWith(e)) {
                var k = j.split('^$');
                if (k.length <= 2 || k[1] === '') {
                  k = a.getItem(j);
                  a.removeItem(j);
                  if (k != null && k.startsWith('{')) {
                    j = d('FBJSON').parse(c('nullthrows')(k));
                    if (j.ts > h)
                      try {
                        for (
                          var k = j.items,
                            j = Array.isArray(k),
                            l = 0,
                            k = j
                              ? k
                              : k[
                                  typeof Symbol === 'function'
                                    ? Symbol.iterator
                                    : '@@iterator'
                                ]();
                          ;

                        ) {
                          var m;
                          if (j) {
                            if (l >= k.length) break;
                            m = k[l++];
                          } else {
                            l = k.next();
                            if (l.done) break;
                            m = l.value;
                          }
                          m = m;
                          m = g != null ? g(m) : m;
                          b.$21(m);
                        }
                      } catch (a) {}
                  }
                }
              }
            }
          } catch (a) {}
          f.unlock();
        });
      };
      b.$18 = function () {
        var a = l();
        if (!a) return;
        var b = this.$19();
        if (b.length === 0) {
          a.getItem(this.$11) != null && a.removeItem(this.$11);
          return;
        }
        c('WebStorage').setItemGuarded(
          a,
          this.$11,
          d('FBJSON').stringify({
            items: b.map(function (a) {
              return a;
            }),
            ts: c('performanceAbsoluteNow')(),
          }),
        );
      };
      b.$19 = function () {
        var a = this.$1,
          b = [];
        if (!a) return b;
        do b.push(a.item);
        while ((a = a.prev));
        return b.reverse();
      };
      b.markItemAsCompleted = function (a) {
        var b = a.prev;
        m(a);
        this.$1 === a && (this.$1 = b);
        this.$7--;
        this.isActive() || this.$18();
      };
      b.markItemAsFailed = function (a) {
        m(a);
        var b = this.$2;
        if (b) {
          var c = b.prev;
          c && ((c.next = a), (a.prev = c));
          a.next = b;
          b.prev = a;
        }
        this.$2 = a;
        this.isActive() && this.$17();
      };
      b.markItem = function (a, b) {
        b ? this.markItemAsCompleted(a) : this.markItemAsFailed(a);
      };
      b.$21 = function (a) {
        a = n(a);
        var b = this.$1;
        b && ((b.next = a), (a.prev = b));
        this.$1 = a;
        this.$2 || (this.$2 = a);
        this.$7++;
      };
      b.wrapAndEnqueueItem = function (a) {
        this.$21(a), this.isActive() ? this.$17() : this.$18();
      };
      b.dequeueItem = function () {
        if (this.$10 != null) return null;
        var a = this.$2;
        if (!a) return null;
        this.$2 = a.next;
        return a;
      };
      return a;
    })();
    a.eventEmitter = j;
    if (c('ExecutionEnvironment').canUseDOM) {
      var t = d('Run').maybeOnBeforeUnload(function () {
        j.emit('inactive', null), t == null ? void 0 : t.remove();
      }, !1);
      if (!t)
        var u = d('Run').onUnload(function () {
          j.emit('inactive', null), u.remove();
        });
    }
    g['default'] = a;
  },
  98,
);
