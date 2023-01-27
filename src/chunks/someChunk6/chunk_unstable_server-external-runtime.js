__d(
  'unstable_server-external-runtime',
  ['Promise'],
  function (a, b, c, d, e, f) {
    (function () {
      function a(a, b, c) {
        b = document.getElementById(b);
        b.parentNode.removeChild(b);
        var d = document.getElementById(a);
        if (d) {
          a = d.previousSibling;
          if (c) (a.data = '$!'), d.setAttribute('data-dgst', c);
          else {
            c = a.parentNode;
            d = a.nextSibling;
            var e = 0;
            do {
              if (d && 8 === d.nodeType) {
                var f = d.data;
                if ('/$' === f)
                  if (0 === e) break;
                  else e--;
                else ('$' !== f && '$?' !== f && '$!' !== f) || e++;
              }
              f = d.nextSibling;
              c.removeChild(d);
              d = f;
            } while (d);
            for (; b.firstChild; ) c.insertBefore(b.firstChild, d);
            a.data = '$';
          }
          a._reactRetry && a._reactRetry();
        }
      }
      function c(c, d, e) {
        function f(a) {
          this.s = a;
        }
        for (
          var h = new Map(),
            i = document,
            j,
            k,
            l = i.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            m = 0;
          (k = l[m++]);

        )
          h.set(k.dataset.precedence, (j = k));
        k = 0;
        l = [];
        for (var n, o, p, q; (n = e[k++]); ) {
          var r = 0;
          o = n[r++];
          if ((p = g.get(o))) 'l' !== p.s && l.push(p);
          else {
            q = i.createElement('link');
            q.href = o;
            q.rel = 'stylesheet';
            for (q.dataset.precedence = m = n[r++]; (p = n[r++]); )
              q.setAttribute(p, n[r++]);
            p = q._p = new (b('Promise'))(function (a, b) {
              (q.onload = a), (q.onerror = b);
            });
            p.then(f.bind(p, 'l'), f.bind(p, 'e'));
            g.set(o, p);
            l.push(p);
            n = h.get(m) || j;
            n === j && (j = q);
            h.set(m, q);
            n
              ? n.parentNode.insertBefore(q, n.nextSibling)
              : ((m = i.head), m.insertBefore(q, m.firstChild));
          }
        }
        b('Promise')
          .all(l)
          .then(
            a.bind(null, c, d, ''),
            a.bind(null, c, d, 'Resource failed to load'),
          );
      }
      function d() {
        for (
          var a = document.getElementsByTagName('template'), b = 0;
          b < a.length;
          b++
        )
          f(a[b]);
      }
      function e(a) {
        var b = new MutationObserver(function (b) {
          for (var c = 0; c < b.length; c++)
            for (var a = b[c].addedNodes, d = 0; d < a.length; d++)
              a.item(d).parentNode && f(a.item(d));
        });
        b.observe(a, { childList: !0 });
        window.addEventListener('DOMContentLoaded', function () {
          b.disconnect();
        });
      }
      function f(b) {
        if (1 === b.nodeType && b.dataset) {
          var d = b.dataset;
          if (null != d.rxi) {
            var e = d.dgst,
              f = d.msg,
              g = d.stck,
              h = document.getElementById(d.bid);
            h &&
              ((d = h.previousSibling),
              (d.data = '$!'),
              (h = h.dataset),
              e && (h.dgst = e),
              f && (h.msg = f),
              g && (h.stck = g),
              d._reactRetry && d._reactRetry());
            b.remove();
          } else if (null != d.rri)
            c(d.bid, d.sid, JSON.parse(d.sty)), b.remove();
          else if (null != d.rci) a(d.bid, d.sid), b.remove();
          else if (null != d.rsi) {
            e = d.pid;
            f = document.getElementById(d.sid);
            e = document.getElementById(e);
            for (f.parentNode.removeChild(f); f.firstChild; )
              e.parentNode.insertBefore(f.firstChild, e);
            e.parentNode.removeChild(e);
            b.remove();
          }
        }
      }
      var g = new Map();
      window.$RC || ((window.$RC = a), (window.$RM = new Map()));
      if ('loading' === document.readyState)
        if (null != document.body) e(document.body);
        else {
          var h = new MutationObserver(function () {
            document.body &&
              ('loading' === document.readyState && e(document.body),
              d(),
              h.disconnect());
          });
          h.observe(document.documentElement, { childList: !0 });
        }
      d();
    })();
  },
  null,
);
