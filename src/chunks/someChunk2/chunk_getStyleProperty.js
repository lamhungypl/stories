__d(
  'getStyleProperty',
  ['camelize', 'hyphenate'],
  function (a, b, c, d, e, f, g) {
    function h(a) {
      return a == null ? '' : String(a);
    }
    function a(a, b) {
      var d;
      if (window.getComputedStyle) {
        d = window.getComputedStyle(a, null);
        if (d) return h(d.getPropertyValue(c('hyphenate')(b)));
      }
      if (document.defaultView && document.defaultView.getComputedStyle) {
        d = document.defaultView.getComputedStyle(a, null);
        if (d) return h(d.getPropertyValue(c('hyphenate')(b)));
        if (b === 'display') return 'none';
      }
      return a.currentStyle
        ? b === 'float'
          ? h(a.currentStyle.cssFloat || a.currentStyle.styleFloat)
          : h(a.currentStyle[c('camelize')(b)])
        : h(a.style && a.style[c('camelize')(b)]);
    }
    g['default'] = a;
  },
  98,
);
