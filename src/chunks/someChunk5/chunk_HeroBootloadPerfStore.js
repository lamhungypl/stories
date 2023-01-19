__d(
  'HeroBootloadPerfStore',
  [
    'BootloaderEvents',
    'InteractionTracingMetrics',
    'ResourceTimingStore',
    'gkx',
    'performanceNavigationStart',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = ['encodedBodySize', 'transferSize', 'totalCount', 'cacheCount'],
      i = ['t1', 't2', 't3'],
      j = ['untiered'],
      k = ['js', 'css'],
      l = new Map();
    d('BootloaderEvents').onBootload(function (a) {
      a.components.forEach(function (b) {
        l.set(b, a);
      });
    });
    function m(a) {
      try {
        return new URL(a).pathname;
      } catch (a) {
        return '[invalid url]';
      }
    }
    function n(a, b) {
      if (b == null) {
        a.missingData++;
        return;
      }
      a.urls && a.urls.add(b.name);
      a.encodedBodySize += b.encodedBodySize;
      a.decodedBodySize += b.decodedBodySize;
      a.transferSize += b.transferSize;
      a.totalCount += 1;
      b.transferSize === 0 && (a.cacheCount += 1);
    }
    function o(a) {
      return a.src.indexOf('data') === 0;
    }
    function p(a, b, e) {
      var f = new Map();
      function g(a) {
        var b;
        b =
          (b = f.get(a)) != null
            ? b
            : {
                cacheCount: 0,
                decodedBodySize: 0,
                encodedBodySize: 0,
                missingData: 0,
                totalCount: 0,
                transferSize: 0,
                urls: c('gkx')('1924645') ? new Set() : null,
              };
        f.set(a, b);
        return b;
      }
      function h(a, c) {
        var f = d('ResourceTimingStore').getEntryForURL(c.src);
        n(g('used_' + c.type), f);
        n(g('used_' + a), f);
        n(g('used_' + a + '_' + c.type), f);
        f != null &&
          f.responseEnd >= b &&
          f.responseEnd <= e &&
          (n(g('downloaded_' + a), f),
          n(g('downloaded_' + c.type), f),
          n(g('downloaded_' + a + '_' + c.type), f));
      }
      function i(a, b) {
        (a.decodedBodySize += b.length), (a.totalCount += 1);
      }
      function j(a, b) {
        i(g('inline_' + a), b.src),
          i(g('inline_' + b.type), b.src),
          i(g('inline_' + a + '_' + b.type), b.src);
      }
      var k = function () {
        if (m) {
          if (p >= l.length) return 'break';
          q = l[p++];
        } else {
          p = l.next();
          if (p.done) return 'break';
          q = p.value;
        }
        var a = q,
          b = a[0];
        a = a[1];
        a.forEach(function (a, c) {
          if (!(a.type === 'css' || a.type === 'js')) return;
          o(a) ? j(b, a) : h(b, a);
        });
      };
      for (
        var l = a,
          m = Array.isArray(l),
          p = 0,
          l = m
            ? l
            : l[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var q;
        a = k();
        if (a === 'break') break;
      }
      return f;
    }
    function q(a, b, c) {
      var d;
      d = (d = a.get(b)) != null ? d : new Map();
      a.set(b, d);
      for (
        a = c,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var e;
        if (b) {
          if (c >= a.length) break;
          e = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          e = c.value;
        }
        e = e;
        (e.type === 'css' || e.type === 'js') && d.set(e.src, e);
      }
    }
    function r(a, b, d, e) {
      d = p(d, a, b);
      a = {};
      for (
        var b = e,
          e = Array.isArray(b),
          f = 0,
          b = e
            ? b
            : b[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= b.length) break;
          g = b[f++];
        } else {
          f = b.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        for (
          var i = k,
            j = Array.isArray(i),
            l = 0,
            i = j
              ? i
              : i[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var n;
          if (j) {
            if (l >= i.length) break;
            n = i[l++];
          } else {
            l = i.next();
            if (l.done) break;
            n = l.value;
          }
          n = n;
          var o = 'downloaded_' + g + '_' + n;
          for (var q = 0; q < h.length; q++) {
            var r,
              s = h[q];
            a[o + '_' + s] =
              (r = (r = d.get(o)) == null ? void 0 : r[s]) != null ? r : 0;
          }
          if (c('gkx')('1924645')) {
            a[o + '_urls'] = Array.from(
              (r = (s = d.get(o)) == null ? void 0 : s.urls) != null ? r : [],
            ).map(m);
          }
          q = 'inline_' + g + '_' + n;
          a[q + '_decodedBodySize'] =
            (s = (o = d.get(q)) == null ? void 0 : o.decodedBodySize) != null
              ? s
              : 0;
        }
      }
      return a;
    }
    function s(a, b, d, e) {
      var f = p(b, a.start, (b = a.completed) != null ? b : a.start);
      [].concat(k, e).forEach(function (b) {
        var e = f.get('downloaded_' + b);
        for (var g = 0; g < h.length; g++) {
          var i = h[g];
          c('InteractionTracingMetrics').addMetadata(
            a.traceId,
            d + '_downloaded_' + b + '_' + i,
            (i = e == null ? void 0 : e[i]) != null ? i : 0,
          );
        }
        i = f.get('inline_' + b);
        c('InteractionTracingMetrics').addMetadata(
          a.traceId,
          d + '_inline_' + b + '_decodedBodySize',
          (g = i == null ? void 0 : i.decodedBodySize) != null ? g : 0,
        );
      });
    }
    function t(a) {
      var b = new Map();
      a.heroRelay.forEach(function (e) {
        var f = e.pageletStack;
        e = e.queries;
        for (
          var e = e,
            g = Array.isArray(e),
            h = 0,
            e = g
              ? e
              : e[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var i;
          if (g) {
            if (h >= e.length) break;
            i = e[h++];
          } else {
            h = e.next();
            if (h.done) break;
            i = h.value;
          }
          i = i;
          var k = i.hasteResponseLogEvents;
          for (
            var k = k,
              l = Array.isArray(k),
              m = 0,
              k = l
                ? k
                : k[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var n, o;
            if (l) {
              if (m >= k.length) break;
              o = k[m++];
            } else {
              m = k.next();
              if (m.done) break;
              o = m.value;
            }
            o = o;
            var p = o.startTime - c('performanceNavigationStart')(),
              s = o.logTime - c('performanceNavigationStart')();
            if (s < a.start || p > ((n = a.completed) != null ? n : Infinity))
              return;
            n = d('BootloaderEvents').flattenResourceMapSet(o.rsrcs);
            o = new Map();
            q(b, 'untiered', n.values());
            q(o, 'untiered', n.values());
            n = r(p, s, o, j);
            c('InteractionTracingMetrics').addSubspan(
              a.traceId,
              'Relay3D: ' + i.name,
              'HeroTracing',
              Math.max(a.start, p),
              Math.min((o = a.completed) != null ? o : Infinity, s),
              babelHelpers['extends'](
                {},
                {
                  pagelet: f[f.length - 1],
                  pageletStack: f,
                  spanType: 'Relay3D',
                },
                n,
              ),
            );
          }
        }
      });
      s(a, b, 'relay3d', j);
    }
    function u(a) {
      var b;
      b = Array.from(
        new Set(
          (b = []).concat.apply(
            b,
            a.heroBootloads.map(function (a) {
              return a.moduleIDs;
            }),
          ),
        ),
      );
      var e = new Map(),
        f = new Map();
      b.forEach(function (a) {
        var b = l.get(a);
        b && f.set(a, b);
      });
      for (
        var b = f.values(),
          g = Array.isArray(b),
          h = 0,
          b = g
            ? b
            : b[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var j;
        if (g) {
          if (h >= b.length) break;
          j = b[h++];
        } else {
          h = b.next();
          if (h.done) break;
          j = h.value;
        }
        j = j;
        q(
          e,
          't1',
          d('BootloaderEvents').flattenResourceMapSet(j.tierOne).values(),
        );
        q(
          e,
          't2',
          d('BootloaderEvents').flattenResourceMapSet(j.tierTwo).values(),
        );
        q(
          e,
          't3',
          d('BootloaderEvents').flattenResourceMapSet(j.tierThree).values(),
        );
      }
      s(a, e, 'bootload', i);
      a.heroBootloads.forEach(function (b) {
        var e = b.moduleIDs,
          f = b.pageletStack;
        b = new Set(
          e
            .map(function (a) {
              return l.get(a);
            })
            .filter(Boolean),
        );
        b.forEach(function (b) {
          var e;
          if (b.callbackEnd - c('performanceNavigationStart')() < a.start)
            return;
          var g = new Map();
          q(
            g,
            't1',
            d('BootloaderEvents').flattenResourceMapSet(b.tierOne).values(),
          );
          q(
            g,
            't2',
            d('BootloaderEvents').flattenResourceMapSet(b.tierTwo).values(),
          );
          q(
            g,
            't3',
            d('BootloaderEvents').flattenResourceMapSet(b.tierThree).values(),
          );
          g = r(
            b.startTime - c('performanceNavigationStart')(),
            b.callbackEnd - c('performanceNavigationStart')(),
            g,
            i,
          );
          c('InteractionTracingMetrics').addSubspan(
            a.traceId,
            'Bootload: ' + b.components.join(),
            'HeroTracing',
            Math.max(a.start, b.startTime - c('performanceNavigationStart')()),
            Math.min(
              (e = a.completed) != null ? e : Infinity,
              b.callbackStart - c('performanceNavigationStart')(),
            ),
            babelHelpers['extends'](
              {},
              {
                bootloadComponents: b.components,
                bootloadRef: b.ref,
                pagelet: f[f.length - 1],
                pageletStack: f,
                spanType: 'Bootload',
              },
              g,
            ),
          );
        });
      });
    }
    function a(a) {
      d('ResourceTimingStore').init(), u(a), t(a);
    }
    g.addStaticResourcesStats = a;
  },
  98,
);
