__d(
  'CometSSRReactArrMethods',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    a = function (a, b, c) {
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
    };
    b = function (a, b, c, d) {
      var e = document.getElementById(a);
      e &&
        ((a = e.previousSibling),
        (a.data = '$!'),
        (e = e.dataset),
        b && (e.dgst = b),
        c && (e.msg = c),
        d && (e.stck = d),
        a._reactRetry && a._reactRetry());
    };
    c = function (a, b) {
      a = document.getElementById(a);
      b = document.getElementById(b);
      for (a.parentNode.removeChild(a); a.firstChild; )
        b.parentNode.insertBefore(a.firstChild, b);
      b.parentNode.removeChild(b);
    };
    f.$RC = a;
    f.$RX = b;
    f.$RS = c;
  },
  66,
);
