__d(
  'containsNode',
  ['isTextNode'],
  function (a, b, c, d, e, f, g) {
    function h(a, b) {
      if (!a || !b) return !1;
      else if (a === b) return !0;
      else if (c('isTextNode')(a)) return !1;
      else if (c('isTextNode')(b)) return h(a, b.parentNode);
      else if ('contains' in a) return a.contains(b);
      else if (a.compareDocumentPosition)
        return !!(a.compareDocumentPosition(b) & 16);
      else return !1;
    }
    g['default'] = h;
  },
  98,
);
