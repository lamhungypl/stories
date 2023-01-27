__d(
  'Bootloader',
  [
    'invariant',
    'BootloaderConfig',
    'BootloaderEndpoint',
    'BootloaderEvents',
    'BootloaderEventsManager',
    'BootloaderRetryTracker',
    'CSRBitMap',
    'CSRIndexUtil',
    'CSSLoader',
    'ClientConsistency',
    'ErrorPubSub',
    'FBLogger',
    'JSResourceReferenceImpl',
    'MakeHasteTranslations',
    'NetworkStatus',
    'RequireDeferredReference',
    'ResourceHasher',
    'ResourceTimingsStore',
    'SiteData',
    'TimeSlice',
    'TrustedTypesBootloaderDataURIScriptURLPolicy',
    'TrustedTypesFacebookURIScriptURLPolicy',
    'cr:696703',
    'err',
    'fb-error',
    'ifRequireable',
    'nullthrows',
    'performanceAbsoluteNow',
    'performanceNow',
    'setTimeoutAcrossTransitions',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h,
      i,
      j,
      k = b('fb-error').TAAL,
      l = b('CSRIndexUtil').UNKNOWN_RESOURCE_INDEX,
      m = b('CSRIndexUtil').parseCSRIndexes,
      n = function () {},
      o = new Set(),
      p = !!b('BootloaderConfig').deferBootloads;
    p &&
      !a.__comet_ssr_is_server_env_DO_NOT_USE &&
      b('setTimeoutAcrossTransitions')(function () {
        $.undeferBootloads(!0);
      }, 15e3);
    var q = [],
      r = new Map(),
      s = new Map(),
      t = new Map(),
      u = new Map(),
      v = new Map(),
      w = null,
      x = new Map(),
      y = new Map(),
      z = new Map(),
      A = new Map(),
      B = new Set(),
      C = !1,
      D = new Set(),
      E = !1,
      F = new (b('BootloaderEventsManager'))(),
      G = new (b('BootloaderRetryTracker'))({
        retries: b('BootloaderConfig').jsRetries,
        abortNum: b('BootloaderConfig').jsRetryAbortNum,
        abortTime: b('BootloaderConfig').jsRetryAbortTime,
        abortCallback: function () {
          b('FBLogger')('bootloader', 'js_retry_abort').info('JS retry abort');
        },
      });
    (h || (h = b('ErrorPubSub'))).unshiftListener(function (a) {
      var b = [];
      for (
        var c = s,
          d = Array.isArray(c),
          e = 0,
          c = d
            ? c
            : c[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
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
        var g = f[0];
        f[1];
        if (t.has(g)) continue;
        f = K(g);
        if (f.type === 'csr' || f.type === 'async') continue;
        b.push(f.src);
      }
      a.loadingUrls = b;
    });
    function H(a) {
      if (p || !E) return !1;
      for (var b = 0; b < a.length; b++) {
        var c,
          d = a[b];
        d = v.get(d);
        if (!d) return !1;
        d = [
          d.r,
          ((c = d.rdfds) == null ? void 0 : c.r) || [],
          ((c = d.rds) == null ? void 0 : c.r) || [],
        ];
        for (c = 0; c < d.length; c++) {
          var e = d[c];
          for (
            var e = e,
              f = Array.isArray(e),
              g = 0,
              e = f
                ? e
                : e[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var h;
            if (f) {
              if (g >= e.length) break;
              h = e[g++];
            } else {
              g = e.next();
              if (g.done) break;
              h = g.value;
            }
            h = h;
            if (!x.has(h)) return !1;
          }
        }
      }
      return !0;
    }
    function I(a) {
      var c = v.get(a);
      if (!c)
        throw k.blameToPreviousFile(
          b('err')('Bootloader: %s is not in the component map', a),
        );
      return c;
    }
    function J(a) {
      var c = I(a);
      c.be && (delete c.be, $.done(b('ResourceHasher').getAsyncHash(a)));
    }
    function K(a) {
      var c = x.get(a);
      if (!c)
        throw k.blameToPreviousFile(
          b('err')('No resource entry for hash: %s', a),
        );
      return c;
    }
    function L(a, c) {
      var d = b('ResourceHasher').getAsyncHash(a);
      if (!x.has(d)) x.set(d, { type: 'async', module: a, blocking: !!c });
      else {
        a = K(d);
        a.type === 'async' || g(0, 21557);
        a.blocking && !c && (a.blocking = !1);
      }
      return d;
    }
    function M() {
      w ||
        (w =
          document.head ||
          document.getElementsByTagName('head')[0] ||
          document.body);
      return w;
    }
    function N(a) {
      var b = document.createDocumentFragment();
      a(b);
      M().appendChild(b);
    }
    function O(a, b, c) {
      a = void 0;
      switch (b.type) {
        case 'async':
          return;
        case 'css':
          a = 'style';
          break;
        case 'js':
          a = 'script';
          break;
        default:
          (a = b.type), g(0, 3721);
      }
      if (b.d === 1) return;
      var d = document.createElement('link');
      d.href = b.src;
      d.rel = 'preload';
      d.as = a;
      b.nc || (d.crossOrigin = 'anonymous');
      c.appendChild(d);
    }
    function P(a, c, d, e) {
      var f = document.createElement('script');
      c.d
        ? (f.src = b(
            'TrustedTypesBootloaderDataURIScriptURLPolicy',
          ).createScriptURL(c.src))
        : (f.src = b('TrustedTypesFacebookURIScriptURLPolicy').createScriptURL(
            c.src,
          ));
      f.async = !0;
      c.nc || (f.crossOrigin = 'anonymous');
      c.m != null && (f.dataset.btmanifest = c.m);
      c.tsrc != null && (f.dataset.tsrc = c.tsrc);
      f.dataset.bootloaderHashClient = a;
      Q(f, a, c, d);
      e.appendChild(f);
      return f;
    }
    function Q(a, c, d, e) {
      var f = a.src,
        g = (i || (i = b('performanceAbsoluteNow')))(),
        h = b('TimeSlice').getGuardedContinuation(
          'Bootloader script.onresponse',
        ),
        j = b('ResourceTimingsStore').getUID('js', f);
      b('ResourceTimingsStore')
        .annotate('js', j)
        .addStringAnnotation('name', c)
        .addStringAnnotation('source', f);
      b('ifRequireable')('TimeSliceInteraction', function (a) {
        a.informGlobally('bootloader._loadJS')
          .addStringAnnotation('source', f)
          .addStringAnnotation('name', c);
      });
      b('ResourceTimingsStore').measureRequestSent('js', j);
      a.onload = h.bind(void 0, function () {
        var a = G.getNumRetriesForSource(f);
        a > 0 &&
          b('FBLogger')('bootloader').info(
            'JS retry success [%s] at %s | time: %s | retries: %s',
            c,
            f,
            (i || (i = b('performanceAbsoluteNow')))() - g,
            a,
          );
        b('ResourceTimingsStore').measureResponseReceived('js', j);
        e();
      });
      a.onreadystatechange = function () {
        ['loaded', 'complete'].includes(this.readyState) &&
          (b('ResourceTimingsStore').measureResponseReceived('js', j),
          h.bind(void 0, e)());
      };
      a.onerror = h.bind(void 0, function () {
        b('ResourceTimingsStore').measureResponseReceived('js', j);
        var h = (i || (i = b('performanceAbsoluteNow')))();
        G.maybeScheduleRetry(
          f,
          function () {
            var b = a.parentNode;
            b && (b.removeChild(a), P(c, d, e, b));
          },
          function () {
            u.set(c, h),
              b('FBLogger')('bootloader').warn(
                'JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s',
                c,
                f,
                h - g,
                G.getNumRetriesForSource(f),
                s.size - t.size,
              ),
              b('NetworkStatus').reportError(),
              e();
          },
        );
      });
    }
    function R(a, c, d) {
      return function () {
        b('FBLogger')('bootloader').warn(
          'CSS timeout [%s] at %s | concurrency: %s',
          a,
          c.src,
          s.size - t.size,
        ),
          u.set(a, (i || (i = b('performanceAbsoluteNow')))()),
          b('NetworkStatus').reportError(),
          d();
      };
    }
    function S(a, b) {
      var c = a.replace(/\/y[a-zA-Z0-9_-]\//, '/');
      if (
        c.includes('/intern/rsrc.php') ||
        c.includes('/intern/rsrc-translations.php')
      )
        return c.replace(
          /(!)(.+)(\.(?:css|js)(?:$|\?))/,
          function (a, c, d, e) {
            return (
              c +
              d
                .split(',')
                .filter(function (a, c) {
                  return !b.has(c);
                })
                .join(',') +
              e
            );
          },
        );
      else if (c.includes('/rsrc.php') || c.includes('/rsrc-translations.php'))
        return c.replace(/(.*\/)([^.]+)(\.)/, function (a, c, d, e) {
          return (
            c +
            d
              .match(/.{1,11}/g)
              .filter(function (a, c) {
                return !b.has(c);
              })
              .join('') +
            e
          );
        });
      else return a;
    }
    function T(a, c, d, e) {
      if (s.has(a)) return;
      s.set(a, (i || (i = b('performanceAbsoluteNow')))());
      if (
        (c.type === 'js' || c.type === 'css') &&
        c.p != null &&
        c.d !== 1 &&
        b('BootloaderConfig').hypStep4
      ) {
        e = m(c.p);
        var f = new Set(),
          h = 0;
        e.forEach(function (b, c) {
          b !== l && y.get(b) !== a && f.add(c), b > h && (h = b);
        });
        h > b('BootloaderConfig').btCutoffIndex &&
          b('BootloaderEvents').notifyResourceInLongTailBTManifest();
        if (f.size === e.length) return;
        else
          f.size > 0 &&
            ((c.src = S(c.src, f)),
            c.type === 'js' &&
              c.tsrc != null &&
              c.tsrc.trim() !== '' &&
              (c.tsrc = S(c.tsrc, f)));
      }
      c.type === 'js' &&
        c.tsrc != null &&
        c.tsrc.trim() !== '' &&
        b('MakeHasteTranslations').genFetchAndProcessTranslations(a, c.tsrc);
      O(a, c, d);
      switch (c.type) {
        case 'js':
          P(
            a,
            c,
            function () {
              return $.done(a);
            },
            d,
          );
          break;
        case 'css':
          e = function () {
            return $.done(a);
          };
          b('CSSLoader').loadStyleSheet(a, c.src, d, !c.nc, e, R(a, c, e));
          break;
        case 'async':
          b('BootloaderEndpoint').load(c.module, c.blocking, a);
          break;
        default:
          c.type, g(0, 3721);
      }
    }
    function U(a, c, d, e, f) {
      var h = new Map(),
        i = (f = f) != null ? f : b('BootloaderEvents').newResourceMapSet();
      f = [];
      var j = [],
        k = [];
      for (
        var a = W(a),
          l = Array.isArray(a),
          m = 0,
          a = l
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var n;
        if (l) {
          if (m >= a.length) break;
          n = a[m++];
        } else {
          m = a.next();
          if (m.done) break;
          n = m.value;
        }
        n = n;
        var o = n[0];
        n = n[1];
        var p = void 0;
        switch (n.type) {
          case 'css':
            p = n.nonblocking ? 'nonblocking' : 'blocking';
            break;
          case 'js':
            p = 'default';
            break;
          case 'async':
            p = n.blocking ? 'blocking' : 'nonblocking';
            break;
          default:
            n.type, g(0, 3721);
        }
        i[p].set(o, n);
        var q = F.rsrcDone(o);
        k.push(q);
        p !== 'nonblocking' && (j.push(q), p === 'blocking' && f.push(q));
        s.has(o) || h.set(o, n);
      }
      var r, t;
      !b('cr:696703')
        ? (r = t =
            function (a) {
              return a();
            })
        : ((t = b('cr:696703').scheduleLoggingPriCallback),
          (r =
            b(
              'cr:696703',
            ).getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE()));
      var u = c.onBlocking,
        v = c.onAll,
        w = c.onLog;
      u &&
        F.registerCallback(function () {
          r(u);
        }, f);
      v &&
        F.registerCallback(function () {
          r(v);
        }, j);
      w &&
        F.registerCallback(function () {
          t(function () {
            return w(i);
          });
        }, k);
      for (
        p = h,
          q = Array.isArray(p),
          o = 0,
          p = q
            ? p
            : p[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        if (q) {
          if (o >= p.length) break;
          n = p[o++];
        } else {
          o = p.next();
          if (o.done) break;
          n = o.value;
        }
        m = n;
        l = m[0];
        a = m[1];
        T(l, a, d, e);
      }
    }
    function V(a, c, d) {
      x.set(a, c);
      if (c.type === 'async' || c.type === 'csr') return;
      var e = c.p;
      if (e)
        for (
          var e = m(e),
            f = Array.isArray(e),
            g = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var h;
          if (f) {
            if (g >= e.length) break;
            h = e[g++];
          } else {
            g = e.next();
            if (g.done) break;
            h = g.value;
          }
          h = h;
          if (h === l) continue;
          (!y.has(h) || d) && y.set(h, a);
          (b('BootloaderConfig').phdOn ? c.c == 2 : c.c) &&
            b('CSRBitMap').add(h);
        }
    }
    function aa(a, c) {
      var d = F.bootload(c);
      if (B.has(d)) return [d, null];
      B.add(d);
      var e = (i || (i = b('performanceAbsoluteNow')))();
      c = {
        ref: a,
        components: c,
        timesliceContext: b('TimeSlice').getContext(),
        startTime: (a = r.get(d)) != null ? a : e,
        fetchStartTime: e,
        callbackStart: 0,
        callbackEnd: 0,
        tierOne: b('BootloaderEvents').newResourceMapSet(),
        tierTwo: b('BootloaderEvents').newResourceMapSet(),
        tierThree: b('BootloaderEvents').newResourceMapSet(),
        beRequests: new Map(),
      };
      b('BootloaderEvents').notifyBootloadStart(c);
      return [d, c];
    }
    function ba(a) {
      return b('ifRequireable').call(
        null,
        a,
        function () {
          return !0;
        },
        function () {
          return !1;
        },
      );
    }
    function ca(a, c, e, f) {
      A.has(a) ||
        A.set(a, {
          firstBootloadStart: (i || (i = b('performanceAbsoluteNow')))(),
          logData: new Set(),
        });
      f && b('nullthrows')(A.get(a)).logData.add(f);
      var g = I(a),
        h = g.r,
        j = g.rdfds,
        k = g.rds;
      g = g.be;
      g = ba(a) ? null : L(a, g);
      g == null && F.notify(F.beDone(a));
      U(
        g != null ? [g].concat(h) : h,
        {
          onAll: function () {
            return F.notify(F.tierOne(a));
          },
          onLog: function () {
            return F.notify(F.tierOneLog(a));
          },
        },
        e,
        f == null ? void 0 : f.ref,
        f == null ? void 0 : f.tierOne,
      );
      var l = (j == null ? void 0 : j.m) || [];
      U(
        (j == null ? void 0 : j.r) || [],
        {
          onBlocking: function () {
            return b('RequireDeferredReference').unblock(l, 'css');
          },
          onAll: function () {
            return F.registerCallback(
              function () {
                F.notify(F.tierTwoStart(a)),
                  d.call(
                    null,
                    l.map(
                      b('RequireDeferredReference').getRDModuleName_DO_NOT_USE,
                    ),
                    function () {
                      return F.notify(F.tierTwo(a));
                    },
                  );
              },
              [F.tierOne(a), c],
            );
          },
          onLog: function () {
            return F.notify(F.tierTwoLog(a));
          },
        },
        e,
        f == null ? void 0 : f.ref,
        f == null ? void 0 : f.tierTwo,
      );
      var m = (k == null ? void 0 : k.m) || [];
      U(
        (k == null ? void 0 : k.r) || [],
        {
          onBlocking: function () {
            return b('RequireDeferredReference').unblock(m, 'css');
          },
          onAll: function () {
            return F.registerCallback(
              function () {
                F.notify(F.tierThreeStart(a)),
                  d.call(
                    null,
                    m.map(
                      b('RequireDeferredReference').getRDModuleName_DO_NOT_USE,
                    ),
                    function () {
                      return F.notify(F.tierThree(a));
                    },
                  );
              },
              [F.tierTwo(a)],
            );
          },
          onLog: function () {
            return F.notify(F.tierThreeLog(a));
          },
        },
        e,
        f == null ? void 0 : f.ref,
        f == null ? void 0 : f.tierThree,
      );
    }
    function W(a) {
      var c = new Map();
      for (var d = 0; d < a.length; d++) {
        var e = a[d],
          f = x.get(e);
        if (!f) {
          b('FBLogger')('bootloader').mustfix(
            'Unable to resolve resource %s.',
            e,
          );
          continue;
        }
        var h = void 0;
        if (f.type === 'csr') h = m(f.src);
        else if (f.p)
          (h = m(f.p)),
            h.includes(l) && c.set(e, f),
            (h = h.filter(function (a) {
              return a !== l;
            }));
        else {
          c.set(e, f);
          continue;
        }
        for (
          e = h,
            f = Array.isArray(e),
            h = 0,
            e = f
              ? e
              : e[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var i;
          if (f) {
            if (h >= e.length) break;
            i = e[h++];
          } else {
            h = e.next();
            if (h.done) break;
            i = h.value;
          }
          i = i;
          var j = y.get(i);
          if (j == null) {
            var k = JSON.stringify(
              a.map(function (a) {
                var b = K(a),
                  c;
                b.type === 'js' || b.type === 'css'
                  ? (c = b.d ? '' : b.src.split('?')[0])
                  : (c = b.src);
                return JSON.stringify(
                  babelHelpers['extends']({ hash: a, rev: z.get(a) }, b, {
                    src: c,
                    tsrc: null,
                  }),
                );
              }),
            );
            throw b('FBLogger')('bootloader', 'missing-index-map').mustfixThrow(
              'No hash for rsrcIndex ' +
                i +
                ' (rev: ' +
                b('SiteData').client_revision +
                ', cohort: ' +
                b('SiteData').pkg_cohort +
                '). ' +
                k,
            );
          }
          i = K(j);
          i.type !== 'csr' || g(0, 20056, j);
          c.set(j, i);
        }
      }
      return c.entries();
    }
    function X(a) {
      var c,
        d = a.getAttribute('data-bootloader-hash');
      if (d == null) return;
      var e = b('ResourceHasher').getValidResourceHash(d);
      if (a.id) {
        if (D.has(a.id)) return;
        D.add(a.id);
      }
      d =
        a.tagName == 'SCRIPT'
          ? { src: a.src, type: 'js' }
          : { src: a.href, type: 'css' };
      a.crossOrigin == null && (d.nc = 1);
      d.type === 'js' &&
        a.dataset.tsrc != null &&
        a.dataset.tsrc.trim() !== '' &&
        ((d.tsrc = a.dataset.tsrc),
        b('MakeHasteTranslations').genFetchAndProcessTranslations(e, d.tsrc));
      d.type === 'css' &&
        a.getAttribute('data-nonblocking') &&
        (d.nonblocking = 1);
      var f = a.getAttribute('data-c');
      f == '1' ? (d.c = 1) : f == '2' && (d.c = 2);
      d.p = a.getAttribute('data-p');
      f = a.getAttribute('data-btmanifest');
      f != null && (d.m = f);
      x.has(e) &&
        !b('BootloaderConfig').silentDups &&
        b('FBLogger')('bootloader').warn(
          'Duplicate resource [%s]: %s',
          e,
          d.src,
        );
      V(e, d, !0);
      s.set(e, (i || (i = b('performanceAbsoluteNow')))());
      f = function () {
        return $.done(e);
      };
      c =
        d.type === 'js'
          ? !a.getAttribute('async')
          : ((c = a.parentNode) == null ? void 0 : c.tagName) === 'HEAD';
      c || (window._btldr && window._btldr[e])
        ? f()
        : d.type === 'js'
        ? Q(a, e, d, f)
        : b('CSSLoader').setupEventListeners(e, d.src, M(), f, R(e, d, f), a);
    }
    function Y() {
      if (C) return;
      C = !0;
      Array.from(document.getElementsByTagName('link')).forEach(function (a) {
        return X(a);
      });
      Array.from(document.getElementsByTagName('script')).forEach(function (a) {
        return X(a);
      });
    }
    function Z() {
      E = !0;
      var a = q;
      q = [];
      a.forEach(function (a) {
        var b = a[0],
          c = a[1],
          d = a[2];
        a = a[3];
        a(function () {
          $.loadModules.apply($, [b, c, d]);
        });
      });
    }
    var $ = {
      loadModules: function (a, c, e) {
        c === void 0 && (c = n);
        e === void 0 && (e = 'loadModules: unknown caller');
        var f = a,
          g = !1,
          h = function () {
            g || c.apply(void 0, arguments);
          };
        a = {
          remove: function () {
            g = !0;
          },
        };
        if (!H(f)) {
          var j = 'Deferred: Bootloader.loadModules';
          j = b('TimeSlice').getGuardedContinuation(j);
          q.push([f, h, e, j]);
          j = F.bootload(f);
          r.set(
            j,
            (j = r.get(j)) != null
              ? j
              : (i || (i = b('performanceAbsoluteNow')))(),
          );
          return a;
        }
        j = aa(e, f);
        var k = j[0],
          l = j[1];
        F.registerCallback(
          d.bind(null, f, function () {
            l && (l.callbackStart = (i || (i = b('performanceAbsoluteNow')))()),
              h.apply(void 0, arguments),
              l && (l.callbackEnd = (i || (i = b('performanceAbsoluteNow')))()),
              F.notify(k);
          }),
          f.map(function (a) {
            return F.tierOne(a);
          }),
        );
        N(function (b) {
          for (var c = 0; c < f.length; c++) {
            var a = f[c];
            ca(a, k, b, l);
          }
        });
        if (l) {
          j = new Set([k]);
          for (var m = 0; m < f.length; m++) {
            var o = f[m];
            j.add(F.beDone(o));
            j.add(F.tierThree(o));
            j.add(F.tierOneLog(o));
            j.add(F.tierTwoLog(o));
            j.add(F.tierThreeLog(o));
          }
          F.registerCallback(function () {
            return b('BootloaderEvents').notifyBootload(l);
          }, Array.from(j));
          b('ifRequireable')('TimeSliceInteraction', function (a) {
            a.informGlobally('Bootloader.loadResources')
              .addSetAnnotation(
                'requested_hashes',
                Array.from(
                  b('BootloaderEvents').flattenResourceMapSet(l.tierOne).keys(),
                ),
              )
              .addSetAnnotation(
                'rdfd_requested_hashes',
                Array.from(
                  b('BootloaderEvents').flattenResourceMapSet(l.tierTwo).keys(),
                ),
              )
              .addSetAnnotation(
                'rd_requested_hashes',
                Array.from(
                  b('BootloaderEvents')
                    .flattenResourceMapSet(l.tierThree)
                    .keys(),
                ),
              )
              .addStringAnnotation('bootloader_reference', e)
              .addSetAnnotation('requested_components', f);
          });
        }
        return a;
      },
      loadResources: function (a, c, d) {
        d === void 0 && (d = 'loadResources: unknown caller'),
          Y(),
          N(function (e) {
            var f;
            return U(
              a.map(function (a) {
                return b('ResourceHasher').getValidResourceHash(a);
              }),
              (f = c) != null ? f : Object.freeze({}),
              e,
              d,
            );
          });
      },
      requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function (a) {
        var c = b('ResourceHasher').createExternalJSHash();
        V(c, { type: 'js', src: a, nc: 1 }, !1);
        $.loadResources([c]);
      },
      done: function (a) {
        t.set(a, (i || (i = b('performanceAbsoluteNow')))()),
          F.notify(F.rsrcDone(a));
      },
      beDone: function (a, b, c) {
        for (
          var d =
              (d = (d = A.get(a)) == null ? void 0 : d.logData) != null
                ? d
                : [],
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var d, g;
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          g.beRequests.set(b, c);
        }
        F.notify(F.beDone(a));
      },
      handlePayload: function (a, c) {
        for (
          var d = (d = a.rsrcTags) != null ? d : [],
            e = Array.isArray(d),
            f = 0,
            d = e
              ? d
              : d[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var d, g;
          if (e) {
            if (f >= d.length) break;
            g = d[f++];
          } else {
            f = d.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          X(document.getElementById(g));
        }
        $.setResourceMap(
          (g = a.rsrcMap) != null ? g : {},
          a.sotUpgrades,
          a.consistency.rev,
          c,
        );
        f = a.csrUpgrade != null ? m(a.csrUpgrade) : [];
        e = f.find(function (a) {
          return !y.has(a);
        });
        f.length && a.consistency.rev !== b('SiteData').client_revision
          ? b('FBLogger')('bootloader', 'csr-mismatch').mustfix(
              'CSR upgrades included on mismatched rev ' +
                a.consistency.rev +
                ' (client rev: ' +
                b('SiteData').client_revision +
                ', cohort: ' +
                b('SiteData').pkg_cohort +
                ').',
            )
          : e != null && C
          ? b('FBLogger')('bootloader', 'missing-csr-upgrade').mustfix(
              'CSR upgrades included unknown rsrcIndex ' +
                e +
                ' (client rev: ' +
                b('SiteData').client_revision +
                ', cohort: ' +
                b('SiteData').pkg_cohort +
                ').',
            )
          : f.forEach(b('CSRBitMap').add);
        a.compMap && $.enableBootload(a.compMap, c);
      },
      enableBootload: function (a, b) {
        for (var c in a)
          b && b.comp++,
            !v.has(c)
              ? (v.set(c, a[c]), o.has(c) && (o['delete'](c), J(c)))
              : b && b.dup_comp++;
        Y();
        p || Z();
      },
      undeferBootloads: function (a) {
        a === void 0 && (a = !1);
        if (window.location.search.indexOf('&__deferBootloads=') !== -1) return;
        a &&
          p &&
          b('BootloaderEvents').notifyDeferTimeout({
            componentMapSize: v.size,
            pending: q.map(function (a) {
              var b = a[0];
              a[1];
              var c = a[2];
              a[3];
              return { components: b, ref: c };
            }),
            time: (j || (j = b('performanceNow')))(),
          });
        p = !1;
        v.size && Z();
      },
      markComponentsAsImmediate: function (a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          v.has(c) ? J(c) : o.add(c);
        }
      },
      setResourceMap: function (a, c, d, e) {
        var f = !1;
        for (var g in a) {
          e && e.rsrc++;
          g = b('ResourceHasher').getValidResourceHash(g);
          d != null && z.set(g, d);
          var h = a[g],
            i = x.get(g);
          !i
            ? (h.type === 'js' && (f = !0), V(g, h, !1))
            : (e && e.dup_rsrc++,
              ((i.type === 'js' && h.type === 'js') ||
                (i.type === 'css' && h.type === 'css')) &&
                h.d &&
                !i.d &&
                (h.type === 'js' && (f = !0), (i.src = h.src), (i.d = 1)));
        }
        f && d != null && b('ClientConsistency').addAdditionalRevision(d);
        if (c)
          for (
            h = c,
              i = Array.isArray(h),
              g = 0,
              h = i
                ? h
                : h[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            if (i) {
              if (g >= h.length) break;
              a = h[g++];
            } else {
              g = h.next();
              if (g.done) break;
              a = g.value;
            }
            e = a;
            f = x.get(e);
            f && V(e, f, !0);
          }
      },
      getURLToHashMap: function () {
        var a = new Map();
        for (
          var b = x,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          if (e.type === 'async' || e.type === 'csr') continue;
          a.set(e.src, f);
        }
        return a;
      },
      loadPredictedResourceMap: function (a, b, c) {
        $.setResourceMap(a, null, c), $.loadResources(Object.keys(a), b);
      },
      getCSSResources: function (a) {
        var b = [];
        for (
          var a = W(a),
            c = Array.isArray(a),
            d = 0,
            a = c
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= a.length) break;
            e = a[d++];
          } else {
            d = a.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          e.type === 'css' && b.push(f);
        }
        return b;
      },
      getBootloadedComponents: function () {
        var a = new Map();
        for (
          var b = A,
            c = Array.isArray(b),
            d = 0,
            b = c
              ? b
              : b[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var e;
          if (c) {
            if (d >= b.length) break;
            e = b[d++];
          } else {
            d = b.next();
            if (d.done) break;
            e = d.value;
          }
          e = e;
          var f = e[0];
          e = e[1];
          a.set(f, e.firstBootloadStart);
        }
        return a;
      },
      getResourceState: function (a) {
        return { loadStart: s.get(a), loadEnd: t.get(a), loadError: u.get(a) };
      },
      getComponentTiming: function (a) {
        var b;
        return {
          tierTwoStart: (b = F.getEventTime(F.tierTwoStart(a))) != null ? b : 0,
          tierTwoEnd: (b = F.getEventTime(F.tierTwo(a))) != null ? b : 0,
          tierThreeStart:
            (b = F.getEventTime(F.tierThreeStart(a))) != null ? b : 0,
          tierThreeEnd: (b = F.getEventTime(F.tierThree(a))) != null ? b : 0,
        };
      },
      getLoadedResourceCount: function () {
        return t.size;
      },
      getErrorCount: function () {
        return u.size;
      },
      forceFlush: function () {
        b('BootloaderEndpoint').forceFlush();
      },
      __debug: {
        componentMap: v,
        requested: s,
        resources: x,
        riMap: y,
        retries: G.getAllRetryAttempts_FOR_DEBUG_ONLY(),
        errors: u,
        loaded: t,
        bootloaded: A,
        queuedToMarkAsImmediate: o,
        _resolveCSRs: W,
        revMap: z,
        _getQueuedLoadModules: function () {
          return q;
        },
        _dequeueLoadModules: function (a) {
          a = q.splice(a, 1);
          if (!a.length) return;
          a = a[0];
          var b = a[0],
            c = a[1],
            d = a[2];
          a = a[3];
          var e = p,
            f = E;
          p = !1;
          E = !0;
          a(function () {
            $.loadModules.apply($, [b, c, d]);
          });
          p = e;
          E = f;
        },
      },
    };
    b('JSResourceReferenceImpl').setBootloader($);
    e.exports = $;
  },
  null,
);
