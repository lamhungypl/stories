__d(
  'DOMQuery',
  [
    'CSS',
    'FBLogger',
    'containsNode',
    'createArrayFromMixed',
    'createObjectFrom',
    'ge',
    'ifRequired',
    'isElementNode',
    'isNode',
  ],
  function (a, b, c, d, e, f, g) {
    var h = /^\.-?[_a-zA-Z]+[\w-]*$/;
    function i(a, b) {
      return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null;
    }
    function a(a, b) {
      a = j(a, b);
      return a[0];
    }
    function b(a, b, c) {
      b = j(a, b);
      a = j(a, c);
      b.length === 1 && a.length === 1 && b[0] === a[0]
        ? (c = b)
        : (c = b.concat(a));
      return c[0];
    }
    function j(a, b) {
      if (!a || !a.getElementsByTagName) return [];
      b = b.split(' ');
      var e = [a];
      for (var f = 0; f < b.length; f++) {
        if (e.length === 0) break;
        if (b[f] === '') continue;
        var g = b[f],
          j = b[f],
          k = [],
          l = !1;
        if (g.charAt(0) == '^')
          if (f === 0) (l = !0), (g = g.slice(1));
          else return [];
        g = g.replace(/\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g, ' $&');
        g = g.split(' ');
        var m = g[0] || '*',
          n = m == '*',
          o = g[1] && g[1].charAt(0) == '#';
        if (o) {
          o = c('ge')(g[1].slice(1), a, m);
          if (o && (n || o.tagName.toLowerCase() == m))
            for (var p = 0; p < e.length; p++)
              if (l && c('containsNode')(o, e[p])) {
                k = [o];
                break;
              } else if (
                document == e[p] ||
                (c('containsNode')(e[p], o) && e[p] !== o)
              ) {
                k = [o];
                break;
              }
        } else {
          o = [];
          p = e.length;
          var q,
            r = !l && j.indexOf('[') < 0 && document.querySelectorAll;
          for (var s = 0; s < p; s++) {
            if (l) {
              q = [];
              var t = e[s].parentNode;
              while (c('isElementNode')(t))
                (n || t.tagName.toLowerCase() == m) && q.push(t),
                  (t = t.parentNode);
            } else
              r
                ? h.test(j)
                  ? (q = e[s].getElementsByClassName(j.substring(1)))
                  : (q = e[s].querySelectorAll(j))
                : (q = e[s].getElementsByTagName(m));
            t = q.length;
            for (var u = 0; u < t; u++) o.push(q[u]);
          }
          if (!r)
            for (q = 1; q < g.length; q++) {
              t = g[q];
              u = t.charAt(0) == '.';
              n = t.substring(1);
              for (s = 0; s < o.length; s++) {
                p = o[s];
                if (!p || p.nodeType !== 1) continue;
                if (u) {
                  d('CSS').hasClass(p, n) || delete o[s];
                  continue;
                } else {
                  j = t.slice(1, t.length - 1);
                  m = j.indexOf('=');
                  if (m < 0) {
                    if (!i(p, j)) {
                      delete o[s];
                      continue;
                    }
                  } else {
                    r = j.substr(0, m);
                    j = j.substr(m + 1);
                    j = j.slice(1, j.length - 1);
                    if (p.getAttribute(r) != j) {
                      delete o[s];
                      continue;
                    }
                  }
                }
              }
            }
          for (s = 0; s < o.length; s++)
            if (o[s]) {
              k.push(o[s]);
              if (l) break;
            }
        }
        e = k;
      }
      return e;
    }
    function e() {
      var a = window.getSelection;
      if (a) return a() + '';
      else {
        a = document.selection;
        if (a) return a.createRange().text;
      }
      return null;
    }
    function f(a, b) {
      (typeof a === 'string' || typeof b === 'string') &&
        c('FBLogger')('dom_query').info(
          'Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead',
        );
      return c('containsNode')(c('ge')(a), c('ge')(b));
    }
    function k() {
      var a = c('ifRequired')('Quickling', function (a) {
        return a.isActive() ? c('ge')('content') : null;
      });
      return a || document.body;
    }
    function l(a, b) {
      b = c('createArrayFromMixed')(b).join('|').toUpperCase().split('|');
      b = c('createObjectFrom')(b);
      return c('isNode')(a) && a.nodeName in b;
    }
    function m(a) {
      return l(a, ['input', 'textarea']) || a.contentEditable === 'true';
    }
    g.find = a;
    g.findPushSafe = b;
    g.scry = j;
    g.getSelection = e;
    g.contains = f;
    g.getRootElement = k;
    g.isNodeOfType = l;
    g.isInputNode = m;
  },
  98,
);
