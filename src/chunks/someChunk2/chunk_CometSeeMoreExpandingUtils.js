__d(
  'CometSeeMoreExpandingUtils',
  ['gkx'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    function h(a, b) {
      var c = b;
      while (c >= 0) {
        if (a.charAt(c) === ' ' || a.charAt(c) === '\n') break;
        c -= 1;
      }
      a.charAt(b) !== '\n' ? (c += 1) : (c = b + 1);
      b = a.substring(c);
      a = /\s/;
      b = b.search(a) + c - 1;
      return { truncatedEntityEndIndex: b, truncatedEntityOffset: c };
    }
    function i(a, b, c) {
      var d = [];
      b = h(b, c);
      c = b.truncatedEntityEndIndex;
      b = b.truncatedEntityOffset;
      b = b;
      var e = !1;
      for (
        var a = a,
          f = Array.isArray(a),
          g = 0,
          a = f
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var i;
        if (f) {
          if (g >= a.length) break;
          i = a[g++];
        } else {
          g = a.next();
          if (g.done) break;
          i = g.value;
        }
        i = i;
        var j = i.entity,
          k = i.entity_type,
          l = i.length;
        i = i.offset;
        i != null &&
          l != null &&
          j != null &&
          j.__typename != null &&
          (d.push({ entity: j, entity_type: k, length: l, offset: i }),
          !e && i + l >= c && b >= i && ((b = i), (e = !0)));
      }
      e ||
        d.push({
          entity: { __typename: 'SeeMoreTruncation' },
          entity_type: 'SEE_MORE_ANCHOR',
          length: 0,
          offset: b,
        });
      return { newEntityRanges: d, newTruncatedEntityOffset: b };
    }
    function j(a, b) {
      var c = [],
        d = [];
      if (b != null)
        for (
          var a = a,
            e = Array.isArray(a),
            f = 0,
            a = e
              ? a
              : a[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var g;
          if (e) {
            if (f >= a.length) break;
            g = a[f++];
          } else {
            f = a.next();
            if (f.done) break;
            g = f.value;
          }
          g = g;
          var h = g.entity,
            i = g.entity_type,
            j = g.length;
          g = g.offset;
          g != null &&
            j != null &&
            h != null &&
            h.__typename != null &&
            (g < b
              ? c.push({ entity: h, entity_type: i, length: j, offset: g })
              : d.push({
                  entity: h,
                  entity_type: i,
                  length: j,
                  offset: g - b,
                }));
        }
      return {
        entitiesBeforeTruncatedOffset: c,
        entitiesFromTruncatedOffset: d,
      };
    }
    function k(a, b, c) {
      a = i(a, b, c);
      b = a.newEntityRanges;
      c = a.newTruncatedEntityOffset;
      a = j(b, c);
      b = a.entitiesBeforeTruncatedOffset;
      a = a.entitiesFromTruncatedOffset;
      return {
        entitiesBeforeTruncatedOffset: b,
        entitiesFromTruncatedOffset: a,
        newTruncatedEntityOffset: c,
      };
    }
    function a(a, b, d) {
      var e = [],
        f = [],
        g = -1,
        h = -1,
        i = -1;
      if (!a || !c('gkx')('3236'))
        return {
          filteredEntitiesBeforeTruncatedPosition: e,
          filteredEntitiesFromTruncatedPosition: f,
          hiddenContentOffset: g,
          truncatedLineIndex: h,
          truncatedParagraphIndex: i,
        };
      a = 0;
      var j;
      for (var l = 0; l < b.length; l++) {
        var m = b[l];
        if (Array.isArray(m) && d != null && d.current != null) {
          var n = d.current;
          for (var o = 0; o < m.length; o++) {
            var p = m[o].ranges,
              q = m[o].text,
              r = q.length;
            j = n - a;
            a += r;
            if (i < 0 && j >= 0 && a >= n) {
              i = l;
              h = o;
              j = k(p, q, n - a + r);
              p = j.entitiesBeforeTruncatedOffset;
              q = j.entitiesFromTruncatedOffset;
              r = j.newTruncatedEntityOffset;
              e = p;
              f = q;
              g = r;
              break;
            }
          }
        }
        if (i >= 0 && h >= 0) break;
      }
      return {
        filteredEntitiesBeforeTruncatedPosition: e,
        filteredEntitiesFromTruncatedPosition: f,
        hiddenContentOffset: g,
        truncatedLineIndex: h,
        truncatedParagraphIndex: i,
      };
    }
    function b(a, b, c, d) {
      var e = [],
        f = !1,
        g = 0,
        h = -1,
        j = 0;
      for (var k = 0; k < a.length; k++) {
        var l = b - g,
          m = a[k],
          n = m.text;
        if (typeof n === 'string') {
          var o = n.length,
            p = c && k === d,
            q =
              h === -1 &&
              (l <= 0 || (l > 0 && o > l && n.trim().length > l) || p);
          if (q) {
            q = p || l <= 0 ? 0 : l;
            p = i(m.entity_ranges, n, q);
            l = p.newEntityRanges;
            q = p.newTruncatedEntityOffset;
            e.push(
              babelHelpers['extends']({}, m, { entity_ranges: l, text: n }),
            );
            h = k;
            j = q;
            g += o;
            continue;
          }
          g += o;
        }
        e.push(m);
      }
      return {
        composedText: e,
        hiddenContentOffset: j,
        splitWithinBlock: f,
        truncatedBlockIndex: h,
      };
    }
    g.getTruncatedEntityRangesAfterExpandingSeeMore = i;
    g.splitEntityRangesIntoRegularAndHiddenParts = j;
    g.getEntityRangesWithTruncatedEntityAndSplitIntoTwoParts = k;
    g.filterParagraphsGetTruncatedLinesEntityRangesAndIndex = a;
    g.getBlockComposedTextWithWrapper = b;
  },
  98,
);
