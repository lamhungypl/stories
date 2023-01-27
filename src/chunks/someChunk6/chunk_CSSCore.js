__d(
  'CSSCore',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    function i(a, b) {
      var c = a;
      while (c.parentNode) c = c.parentNode;
      if (c instanceof Element) {
        c = c.querySelectorAll(b);
        return Array.prototype.indexOf.call(c, a) !== -1;
      }
      return !1;
    }
    function j(a, b) {
      /\s/.test(b) && h(0, 11794, b);
      b &&
        (a.classList
          ? a.classList.add(b)
          : l(a, b) || (a.className = a.className + ' ' + b));
      return a;
    }
    function k(a, b) {
      /\s/.test(b) && h(0, 11795, b);
      b &&
        (a.classList
          ? a.classList.remove(b)
          : l(a, b) &&
            (a.className = a.className
              .replace(new RegExp('(^|\\s)' + b + '(?:\\s|$)', 'g'), '$1')
              .replace(/\s+/g, ' ')
              .replace(/^\s*|\s*$/g, '')));
      return a;
    }
    function a(a, b, c) {
      return (c ? j : k)(a, b);
    }
    function l(a, b) {
      /\s/.test(b) && h(0, 442);
      return a.classList
        ? !!b && a.classList.contains(b)
        : (' ' + a.className + ' ').indexOf(' ' + b + ' ') > -1;
    }
    function b(a, b) {
      var c =
        a.matches ||
        a.webkitMatchesSelector ||
        a.mozMatchesSelector ||
        a.msMatchesSelector ||
        function (b) {
          return i(a, b);
        };
      return c.call(a, b);
    }
    g.addClass = j;
    g.removeClass = k;
    g.conditionClass = a;
    g.hasClass = l;
    g.matchesSelector = b;
  },
  98,
);
