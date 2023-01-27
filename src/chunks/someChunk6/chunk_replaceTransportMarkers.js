__d(
  'replaceTransportMarkers',
  ['BanzaiLazyQueue', 'ge', 'memoize'],
  function (a, b, c, d, e, f, g) {
    var h = new Set();
    function i(a, e, f) {
      var g = f !== void 0 ? e[f] : e,
        j;
      if (Array.isArray(g)) for (j = 0; j < g.length; j++) i(a, g, j);
      else if (g && typeof g === 'object')
        if (g.__m)
          g.__lazy
            ? (e[f] = c('memoize')(b.bind(null, g.__m)))
            : (e[f] = b.call(null, g.__m));
        else if (g.__jsr)
          e[f] = new (b.call(null, 'JSResourceReferenceImpl'))(
            g.__jsr,
          ).__setRef('replaceTransportMarkers');
        else if (g.__dr)
          e[f] = new (b.call(null, 'RequireDeferredReference'))(
            g.__dr,
          ).__setRef('replaceTransportMarkers');
        else if (g.__rc)
          g.__rc[0] === null ? (e[f] = null) : (e[f] = b.call(null, g.__rc[0])),
            g.__rc[1] &&
              (h.has(g.__rc[1]) ||
                (h.add(g.__rc[1]),
                d('BanzaiLazyQueue').queuePost(
                  'require_cond_exposure_logging',
                  { identifier: g.__rc[1] },
                )));
        else if (g.__e) e[f] = c('ge')(g.__e);
        else if (g.__rel) e[f] = a.relativeTo;
        else if (g.__bigPipeContext) e[f] = a.bigPipeContext;
        else if (g.__bbox) e[f] = g.__bbox;
        else {
          for (j in g) i(a, g, j);
          if (g.__map) e[f] = new Map(g.__map);
          else if (g.__set) e[f] = new Set(g.__set);
          else if (g.__imm) {
            j = g.__imm;
            a = j.method;
            g = j.value;
            e[f] = b.call(null, 'immutable')[a](g);
          }
        }
    }
    g['default'] = i;
  },
  98,
);
