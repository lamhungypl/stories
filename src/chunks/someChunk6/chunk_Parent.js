__d(
  'Parent',
  ['CSS'],
  function (a, b, c, d, e, f, g) {
    function a(a, b) {
      b = b.toUpperCase();
      a = i(a, function (a) {
        return a.nodeName === b;
      });
      return a instanceof Element ? a : null;
    }
    function b(a, b) {
      a = i(a, function (a) {
        return a instanceof Element && d('CSS').hasClass(a, b);
      });
      return a instanceof Element ? a : null;
    }
    function c(a, b) {
      a = a;
      if (typeof a.matches === 'function') {
        while (a && a !== document && !a.matches(b)) a = a.parentNode;
        return a instanceof Element ? a : null;
      } else if (typeof a.msMatchesSelector === 'function') {
        while (a && a !== document && !a.msMatchesSelector(b)) a = a.parentNode;
        return a instanceof Element ? a : null;
      } else return h(a, b);
    }
    function h(a, b) {
      a = a;
      var c = a;
      while (c.parentNode) c = c.parentNode;
      if (!(c instanceof Element) && !(c instanceof Document)) return null;
      c = c.querySelectorAll(b);
      while (a) {
        if (Array.prototype.indexOf.call(c, a) !== -1)
          return a instanceof Element ? a : null;
        a = a.parentNode;
      }
      return a instanceof Element ? a : null;
    }
    function e(a, b) {
      a = i(a, function (a) {
        return a instanceof Element && !!a.getAttribute(b);
      });
      return a instanceof Element ? a : null;
    }
    function i(a, b) {
      a = a;
      while (a) {
        if (b(a)) return a;
        a = a.parentNode;
      }
      return null;
    }
    g.byTag = a;
    g.byClass = b;
    g.bySelector = c;
    g.bySelector_SLOW = h;
    g.byAttribute = e;
    g.find = i;
  },
  98,
);
