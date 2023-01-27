__d(
  'CSS',
  ['$', 'CSSCore'],
  function (a, b, c, d, e, f, g) {
    var h = typeof window != 'undefined' ? window.CSS : null,
      i = 'hidden_elem';
    h = h && h.supports.bind(h);
    function a(a, b) {
      c('$').fromIDOrElement(a).className = b || '';
      return a;
    }
    function j(a, b) {
      return a instanceof Document || a instanceof Text
        ? !1
        : d('CSSCore').hasClass(c('$').fromIDOrElement(a), b);
    }
    function b(a, b) {
      return a instanceof Document || a instanceof Text
        ? !1
        : d('CSSCore').matchesSelector(c('$').fromIDOrElement(a), b);
    }
    function k(a, b) {
      return d('CSSCore').addClass(c('$').fromIDOrElement(a), b);
    }
    function l(a, b) {
      return d('CSSCore').removeClass(c('$').fromIDOrElement(a), b);
    }
    function m(a, b, e) {
      return d('CSSCore').conditionClass(c('$').fromIDOrElement(a), b, !!e);
    }
    function n(a, b) {
      return m(a, b, !j(a, b));
    }
    function e(a) {
      return !j(a, i);
    }
    function f(a) {
      return k(a, i);
    }
    function o(a) {
      return l(a, i);
    }
    function p(a) {
      return n(a, i);
    }
    function q(a, b) {
      return m(a, i, !b);
    }
    g.supports = h;
    g.setClass = a;
    g.hasClass = j;
    g.matchesSelector = b;
    g.addClass = k;
    g.removeClass = l;
    g.conditionClass = m;
    g.toggleClass = n;
    g.shown = e;
    g.hide = f;
    g.show = o;
    g.toggle = p;
    g.conditionShow = q;
  },
  98,
);
