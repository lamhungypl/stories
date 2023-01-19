__d(
  'relay-runtime/mutations/RelayDeclarativeMutationConfig',
  ['relay-runtime/handlers/connection/ConnectionHandler', 'warning'],
  function (a, b, c, d, e, f) {
    'use strict';
    c = Object.freeze({
      RANGE_ADD: 'RANGE_ADD',
      RANGE_DELETE: 'RANGE_DELETE',
      NODE_DELETE: 'NODE_DELETE',
    });
    d = Object.freeze({ APPEND: 'append', PREPEND: 'prepend' });
    function a(a, b, c, d) {
      var e = c ? [c] : [],
        f = d ? [d] : [];
      a.forEach(function (a) {
        switch (a.type) {
          case 'NODE_DELETE':
            var c = g(a, b);
            c && (e.push(c), f.push(c));
            break;
          case 'RANGE_ADD':
            c = h(a, b);
            c && (e.push(c), f.push(c));
            break;
          case 'RANGE_DELETE':
            c = i(a, b);
            c && (e.push(c), f.push(c));
            break;
        }
      });
      return {
        optimisticUpdater: function (a, b) {
          e.forEach(function (c) {
            c(a, b);
          });
        },
        updater: function (a, b) {
          f.forEach(function (c) {
            c(a, b);
          });
        },
      };
    }
    function g(a, b) {
      var c = a.deletedIDFieldName,
        d = k(b);
      return !d
        ? null
        : function (a, b) {
            b = a.getRootField(d);
            if (!b) return;
            b = b.getValue(c);
            b = Array.isArray(b) ? b : [b];
            b.forEach(function (b) {
              b && typeof b === 'string' && a['delete'](b);
            });
          };
    }
    function h(a, c) {
      var d = a.parentID,
        e = a.connectionInfo,
        f = a.edgeName;
      if (!d) {
        b('warning')(
          !1,
          'RelayDeclarativeMutationConfig: For mutation config RANGE_ADD to work you must include a parentID',
        );
        return null;
      }
      var g = k(c);
      return !e || !g
        ? null
        : function (a, c) {
            c = a.get(d);
            if (!c) return;
            var h = a.getRootField(g);
            if (!h) return;
            h = h.getLinkedRecord(f);
            for (
              var i = e,
                j = Array.isArray(i),
                k = 0,
                i = j
                  ? i
                  : i[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var l;
              if (j) {
                if (k >= i.length) break;
                l = i[k++];
              } else {
                k = i.next();
                if (k.done) break;
                l = k.value;
              }
              l = l;
              if (!h) continue;
              var m = b(
                'relay-runtime/handlers/connection/ConnectionHandler',
              ).getConnection(c, l.key, l.filters);
              if (!m) continue;
              var n = b(
                'relay-runtime/handlers/connection/ConnectionHandler',
              ).buildConnectionEdge(a, m, h);
              if (!n) continue;
              switch (l.rangeBehavior) {
                case 'append':
                  b(
                    'relay-runtime/handlers/connection/ConnectionHandler',
                  ).insertEdgeAfter(m, n);
                  break;
                case 'prepend':
                  b(
                    'relay-runtime/handlers/connection/ConnectionHandler',
                  ).insertEdgeBefore(m, n);
                  break;
                default:
                  b('warning')(
                    !1,
                    "RelayDeclarativeMutationConfig: RANGE_ADD range behavior `%s` will not work as expected in RelayModern, supported range behaviors are 'append', 'prepend'.",
                    l.rangeBehavior,
                  );
                  break;
              }
            }
          };
    }
    function i(a, c) {
      var d = a.parentID,
        e = a.connectionKeys,
        f = a.pathToConnection,
        g = a.deletedIDFieldName;
      if (!d) {
        b('warning')(
          !1,
          'RelayDeclarativeMutationConfig: For mutation config RANGE_DELETE to work you must include a parentID',
        );
        return null;
      }
      var h = k(c);
      return !h
        ? null
        : function (a, b) {
            if (!b) return;
            var c = [];
            b = b[h];
            if (b && Array.isArray(g)) {
              for (
                var i = g,
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
                b && typeof b === 'object' && (b = b[m]);
              }
              Array.isArray(b)
                ? b.forEach(function (a) {
                    a &&
                      a.id &&
                      typeof a === 'object' &&
                      typeof a.id === 'string' &&
                      c.push(a.id);
                  })
                : b && b.id && typeof b.id === 'string' && c.push(b.id);
            } else
              b &&
                typeof g === 'string' &&
                typeof b === 'object' &&
                ((b = b[g]),
                typeof b === 'string'
                  ? c.push(b)
                  : Array.isArray(b) &&
                    b.forEach(function (a) {
                      typeof a === 'string' && c.push(a);
                    }));
            j(d, e, f, a, c);
          };
    }
    function j(a, c, d, e, f) {
      b('warning')(
        c != null,
        'RelayDeclarativeMutationConfig: RANGE_DELETE must provide a connectionKeys',
      );
      e = e.get(a);
      if (!e) return;
      if (d.length < 2) {
        b('warning')(
          !1,
          'RelayDeclarativeMutationConfig: RANGE_DELETE pathToConnection must include at least parent and connection',
        );
        return;
      }
      var g = e;
      for (e = 1; e < d.length - 1; e++) g && (g = g.getLinkedRecord(d[e]));
      if (!c || !g) {
        b('warning')(
          !1,
          'RelayDeclarativeMutationConfig: RANGE_DELETE pathToConnection is incorrect. Unable to find connection with parentID: %s and path: %s',
          a,
          d.toString(),
        );
        return;
      }
      a = function () {
        if (i) {
          if (j >= h.length) return 'break';
          e = h[j++];
        } else {
          j = h.next();
          if (j.done) return 'break';
          e = j.value;
        }
        var a = e,
          c = b(
            'relay-runtime/handlers/connection/ConnectionHandler',
          ).getConnection(g, a.key, a.filters);
        c &&
          f.forEach(function (a) {
            b('relay-runtime/handlers/connection/ConnectionHandler').deleteNode(
              c,
              a,
            );
          });
      };
      for (
        var h = c,
          i = Array.isArray(h),
          j = 0,
          h = i
            ? h
            : h[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        d = a();
        if (d === 'break') break;
      }
    }
    function k(a) {
      return a.fragment.selections &&
        a.fragment.selections.length > 0 &&
        a.fragment.selections[0].kind === 'LinkedField'
        ? a.fragment.selections[0].name
        : null;
    }
    e.exports = { MutationTypes: c, RangeOperations: d, convert: a };
  },
  null,
);
