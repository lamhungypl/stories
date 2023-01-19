__d(
  'react-relay/relay-hooks/preloadQuery_DEPRECATED',
  ['relay-runtime'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = (c = b('relay-runtime')).Observable,
      h = c.PreloadableQueryRegistry,
      i = c.ReplaySubject,
      j = c.createOperationDescriptor,
      k = c.getRequest,
      l = c.getRequestIdentifier,
      m = 30 * 1e3;
    d = typeof WeakMap === 'function';
    var n = 'store-or-network',
      o = d ? new WeakMap() : new Map();
    function a(a, b, c, d, e) {
      var f = o.get(a);
      f == null && ((f = new Map()), o.set(a, f));
      var h = f,
        i = p(a, h, b, c, d);
      f =
        i.kind === 'network'
          ? g.create(function (e) {
              var f;
              if (h.get(i.cacheKey) == null) {
                var g = p(a, h, b, c, d);
                g.kind === 'network' && (f = g.subject.subscribe(e));
              } else f = i.subject.subscribe(e);
              return function () {
                var b;
                (b = f) == null ? void 0 : b.unsubscribe();
                if (a.isServer()) return;
                setTimeout(function () {
                  i != null && q(h, i);
                }, m);
              };
            })
          : null;
      return {
        kind: 'PreloadedQuery_DEPRECATED',
        environment: a,
        environmentProviderOptions: e,
        fetchKey: i.fetchKey,
        fetchPolicy: i.fetchPolicy,
        networkCacheConfig: d == null ? void 0 : d.networkCacheConfig,
        id: i.id,
        name: i.name,
        source: f,
        variables: c,
        status: i.status,
      };
    }
    function p(a, b, c, d, e) {
      var f, g;
      if (c.kind === 'PreloadableConcreteRequest') {
        var o = c;
        o = o.params;
        g = o.id != null ? h.get(o.id) : null;
      } else (g = k(c)), (o = g.params);
      c = a.getNetwork();
      f = (f = e == null ? void 0 : e.fetchPolicy) != null ? f : n;
      var p = e == null ? void 0 : e.fetchKey;
      e = babelHelpers['extends'](
        { force: !0 },
        e == null ? void 0 : e.networkCacheConfig,
      );
      var r = '' + l(o, d) + (p != null ? '-' + p : ''),
        s = b.get(r),
        t =
          f === n && g != null && g != null
            ? a.check(j(g, d, e))
            : { status: 'missing' },
        u;
      if (t.status === 'available' && g != null) {
        u =
          s && s.kind === 'cache'
            ? s
            : {
                cacheKey: r,
                fetchKey: p,
                fetchPolicy: f,
                kind: 'cache',
                id: o.id,
                name: o.name,
                status: {
                  cacheConfig: e,
                  source: 'cache',
                  fetchTime:
                    (g = t == null ? void 0 : t.fetchTime) != null ? g : null,
                },
              };
        !a.isServer() &&
          s == null &&
          setTimeout(function () {
            u != null && q(b, u);
          }, m);
      } else if (s == null || s.kind !== 'network') {
        t = c.execute(o, d, e, null);
        var v = new i();
        u = {
          cacheKey: r,
          fetchKey: p,
          fetchPolicy: f,
          kind: 'network',
          id: o.id,
          name: o.name,
          status: { cacheConfig: e, source: 'network', fetchTime: null },
          subject: v,
          subscription: t['finally'](function () {
            if (a.isServer()) return;
            setTimeout(function () {
              u != null && q(b, u);
            }, m);
          }).subscribe({
            complete: function () {
              v.complete();
            },
            error: function (a) {
              v.error(a);
            },
            next: function (a) {
              v.next(a);
            },
          }),
        };
      } else u = s;
      b.set(r, u);
      return u;
    }
    function q(a, b) {
      var c = a.get(b.cacheKey);
      c != null &&
        c === b &&
        (c.kind === 'network' && c.subscription.unsubscribe(),
        a['delete'](c.cacheKey));
    }
    e.exports = a;
  },
  null,
);
