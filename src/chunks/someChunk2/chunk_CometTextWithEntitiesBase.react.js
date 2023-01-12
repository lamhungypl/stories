__d(
  'CometTextWithEntitiesBase.react',
  ['UnicodeUtils', 'gkx', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = h.Fragment;
    function j(a) {
      return Array.from(a).sort(function (a, b) {
        return a.offset - b.offset || b.length - a.length;
      });
    }
    function k(a, b) {
      return b != null
        ? b.reduce(function (a, b) {
            return b(a);
          }, a)
        : a;
    }
    k.displayName = k.name + ' [from ' + f.id + ']';
    function l(a, b, c, d, e, f, g, j, k) {
      var l = a.__typename;
      j = Object.prototype.hasOwnProperty.call(j, l) ? j[l].concat(k) : k;
      return h.jsx(
        i,
        {
          children:
            j && j.length > 0
              ? j.reduce(function (d, f) {
                  return f(d, a, c, e, b);
                }, f)
              : d,
        },
        g,
      );
    }
    l.displayName = l.name + ' [from ' + f.id + ']';
    function m(a, b, c, e, f, g, j, m, n, o, p, q) {
      a = d('UnicodeUtils').substr(a, b, c - b);
      c = n.length;
      a.length > 0 &&
        m.push(h.jsx(i, { children: k(a, o) }, 'c' + b + '_' + c + '_' + q));
      o = n.pop();
      n[n.length - 1].subElements.push(
        l(e, f, g, m, a, m, b + '_' + c + '_' + q, j, p),
      );
      return o;
    }
    function a(a) {
      var b = a.ranges;
      b = b === void 0 ? [] : b;
      var e = a.renderers,
        f = a.transforms,
        g = f === void 0 ? [] : f,
        n = a.text;
      f = a.disableRangeSort;
      a = f === void 0 ? !1 : f;
      var o = (f = e) != null ? f : {},
        p = 0,
        q =
          (e = Object.prototype.hasOwnProperty.call(o, '*') ? o['*'] : []) !=
          null
            ? e
            : [];
      f = a ? b : j(b);
      var r = [
        {
          entity: { __typename: '' },
          entity_is_weak_reference: !1,
          entityType: '',
          length: n.length,
          offset: 0,
          subElements: [],
        },
      ];
      if (!c('gkx')('1779648'))
        for (e = 0; e < f.length; ++e) {
          a = f[e];
          b = a.entity;
          var s = a.entity_is_weak_reference,
            t = a.entity_type,
            u = a.length;
          a = a.offset;
          if (p >= n.length || a > n.length) break;
          var v = r[r.length - 1],
            w = v.entity,
            x = v.entity_is_weak_reference,
            y = v.entityType,
            z = v.length,
            A = v.offset;
          v = v.subElements;
          var B = A + z;
          while (B <= a && r.length > 1) {
            m(n, p, B, w, x, y, o, v, r, g, q, e);
            p = B;
            var C = r[r.length - 1];
            w = C.entity;
            x = C.entity_is_weak_reference;
            y = C.entityType;
            z = C.length;
            A = C.offset;
            v = C.subElements;
            B = A + z;
          }
          p < a &&
            (r[r.length - 1].subElements.push(
              h.jsx(
                i,
                { children: k(d('UnicodeUtils').substr(n, p, a - p), g) },
                'c' + p + '_' + r.length,
              ),
            ),
            (p = a));
          if (A <= a && B >= a + u) {
            r.push({
              entity: b,
              entity_is_weak_reference: (C = s) != null ? C : null,
              entityType: (B = t) != null ? B : null,
              length: u,
              offset: a,
              subElements: [],
            });
          } else {
            var D;
            C = d('UnicodeUtils').substr(n, a, u);
            B = k(C, g);
            r[r.length - 1].subElements.push(
              l(
                b,
                (D = s) != null ? D : null,
                (D = t) != null ? D : null,
                C,
                C,
                B,
                p + '_' + r.length,
                o,
                q,
              ),
            );
            p = a + u;
          }
        }
      else {
        var E = [];
        f.forEach(function (a) {
          E.push({ index: a.offset, range: a, type: 'start' }),
            E.push({ index: a.offset + a.length, range: a, type: 'end' });
        });
        E.sort(function (a, b) {
          if (a.index !== b.index) return a.index - b.index;
          return a.type !== b.type
            ? a.range === b.range
              ? b.type === 'start'
                ? 1
                : -1
              : b.type === 'end'
              ? 1
              : -1
            : 0;
        });
        var F = 0;
        while (F < E.length) {
          var G = E[F];
          if (p >= n.length || G.index > n.length) break;
          if (G.type === 'start') {
            if (G.index > p) {
              D = d('UnicodeUtils').substr(n, p, G.index - p);
              r[r.length - 1].subElements.push(
                h.jsx(i, { children: k(D, g) }, 'c' + p + '_' + r.length),
              );
            }
            C = G.range;
            b = C.entity;
            var s = C.entity_is_weak_reference,
              t = C.entity_type,
              u = C.length;
            a = C.offset;
            r.push({
              entity: b,
              entity_is_weak_reference: (B = s) != null ? B : null,
              entityType: (e = t) != null ? e : null,
              length: u,
              offset: a,
              subElements: [],
            });
            F++;
            p = G.index;
          } else {
            var H = new Set();
            f = E[F];
            D = function () {
              var d = E[F];
              F++;
              var e = null;
              H.forEach(function (a) {
                a.entity === d.range.entity && (e = a);
              });
              if (e != null) H['delete'](e);
              else if (r.length > 1) {
                var h = r[r.length - 1],
                  a = h.entity,
                  b = h.entity_is_weak_reference,
                  c = h.entityType;
                h = h.subElements;
                var i = m(n, p, G.index, a, b, c, o, h, r, g, q, E.length - F);
                p = G.index;
                while (r.length > 1 && i.entity !== d.range.entity) {
                  H.add(i);
                  var j = r[r.length - 1];
                  a = j.entity;
                  b = j.entity_is_weak_reference;
                  c = j.entityType;
                  h = j.subElements;
                  i = m(n, p, p, a, b, c, o, h, r, g, q, E.length - F);
                }
              }
              f = E[F];
            };
            while (f && f.index === G.index && f.type === 'end') D();
            p = G.index;
            C = Array.from(H);
            for (b = C.length - 1; b >= 0; b--) {
              s = C[b];
              r.push({
                entity: s.entity,
                entity_is_weak_reference: s.entity_is_weak_reference,
                entityType: s.entityType,
                length: s.offset + s.length - p,
                offset: p,
                subElements: [],
              });
            }
          }
        }
      }
      while (r.length > 1) {
        B = r[r.length - 1];
        var w = B.entity,
          x = B.entity_is_weak_reference,
          y = B.entityType,
          z = B.length,
          A = B.offset;
        v = B.subElements;
        t = A + z;
        m(n, p, t, w, x, y, o, v, r, g, q, r.length);
        p = t;
      }
      if (p < n.length) {
        e = r[r.length - 1].subElements;
        e.push(
          h.jsx(i, { children: k(d('UnicodeUtils').substr(n, p), g) }, 'c' + p),
        );
      }
      return r[r.length - 1].subElements;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
