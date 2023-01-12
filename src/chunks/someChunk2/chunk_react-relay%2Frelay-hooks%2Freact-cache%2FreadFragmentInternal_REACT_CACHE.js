__d(
  'react-relay/relay-hooks/react-cache/readFragmentInternal_REACT_CACHE',
  [
    'invariant',
    'react-relay/relay-hooks/QueryResource',
    'relay-runtime',
    'warning',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b(
        'react-relay/relay-hooks/QueryResource',
      ).getQueryResourceForEnvironment,
      i = (c = b('relay-runtime')).__internal.fetchQuery,
      j = c.createOperationDescriptor,
      k = c.getPendingOperationsForFragment,
      l = c.getSelector,
      m = c.getVariablesFromFragment,
      n = c.handlePotentialSnapshotErrors;
    function o(a) {
      if (a.kind === 'bailout') return !1;
      else if (a.kind === 'singular') return a.snapshot.isMissingData;
      else
        return a.snapshots.some(function (a) {
          return a.isMissingData;
        });
    }
    function p(a) {
      if (a.kind === 'bailout') return null;
      else if (a.kind === 'singular') {
        var b;
        return (b = a.snapshot.missingClientEdges) != null ? b : null;
      } else {
        b = null;
        for (
          var a = a.snapshots,
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
          if (e.missingClientEdges) {
            var f;
            b = (f = b) != null ? f : [];
            for (
              var f = e.missingClientEdges,
                e = Array.isArray(f),
                g = 0,
                f = e
                  ? f
                  : f[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var h;
              if (e) {
                if (g >= f.length) break;
                h = f[g++];
              } else {
                g = f.next();
                if (g.done) break;
                h = g.value;
              }
              h = h;
              b.push(h);
            }
          }
        }
        return b;
      }
    }
    function q(a, b) {
      if (b.kind === 'singular')
        n(a, b.snapshot.missingRequiredFields, b.snapshot.relayResolverErrors);
      else if (b.kind === 'plural')
        for (
          var b = b.snapshots,
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
          n(a, e.missingRequiredFields, e.relayResolverErrors);
        }
    }
    function r(a, b, c, d, e) {
      b = m(b, c);
      c = babelHelpers['extends']({}, b, { id: d.clientEdgeDestinationID });
      b = j(d.request, c, e == null ? void 0 : e.networkCacheConfig);
      d = h(a);
      return d.prepare(b, i(a, b), e == null ? void 0 : e.fetchPolicy);
    }
    function s(a, b) {
      if (b == null) return { kind: 'bailout' };
      else if (b.kind === 'PluralReaderSelector')
        if (b.selectors.length === 0) return { kind: 'bailout' };
        else
          return {
            kind: 'plural',
            snapshots: b.selectors.map(function (b) {
              return a.lookup(b);
            }),
            epoch: a.getStore().getEpoch(),
          };
      else
        return {
          kind: 'singular',
          snapshot: a.lookup(b),
          epoch: a.getStore().getEpoch(),
        };
    }
    function a(a, b, c, d, e, f) {
      var h,
        i,
        j = l(b, c);
      h =
        (b == null ? void 0 : (h = b.metadata) == null ? void 0 : h.plural) ===
        !0;
      h
        ? c == null ||
          Array.isArray(c) ||
          g(
            0,
            13793,
            f != null ? ' for key `' + f + '`' : '',
            b.name,
            typeof c,
            b.name,
          )
        : Array.isArray(c) &&
          g(
            0,
            57387,
            f != null ? ' for key `' + f + '`' : '',
            b.name,
            typeof c,
            b.name,
          );
      c == null ||
        (h && Array.isArray(c) && c.length === 0) ||
        j != null ||
        g(
          0,
          37286,
          b.name,
          b.name,
          d,
          b.name,
          f == null ? 'a fragment reference' : 'the `' + f + '`',
          d,
        );
      f = s(a, j);
      d = null;
      if (((i = b.metadata) == null ? void 0 : i.hasClientEdges) === !0) {
        i = p(f);
        if (i == null ? void 0 : i.length) {
          d = [];
          for (
            var i = i,
              m = Array.isArray(i),
              n = 0,
              i = m
                ? i
                : i[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var t;
            if (m) {
              if (n >= i.length) break;
              t = i[n++];
            } else {
              n = i.next();
              if (n.done) break;
              t = n.value;
            }
            t = t;
            d.push(r(a, b, c, t, e));
          }
        }
      }
      if (o(f)) {
        j != null || g(0, 57388);
        t = j.kind === 'PluralReaderSelector' ? j.selectors[0].owner : j.owner;
        n = k(a, b, t);
        if (n) throw n.promise;
        q(a, f);
      }
      f.kind === 'bailout'
        ? (m = h ? [] : null)
        : f.kind === 'singular'
        ? (m = f.snapshot.data)
        : (m = f.snapshots.map(function (a) {
            return a.data;
          }));
      return { data: m, clientEdgeQueries: d };
    }
    e.exports = a;
  },
  null,
);
