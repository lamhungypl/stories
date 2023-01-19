__d(
  'createNodesFromMarkup',
  [
    'invariant',
    'ExecutionEnvironment',
    'TrustedTypesNoOpPolicy_DO_NOT_USE',
    'getMarkupWrap',
  ],
  function (a, b, c, d, e, f, g, h) {
    var i = c('ExecutionEnvironment').canUseDOM
        ? document.createElement('div')
        : null,
      j = /^\s*<(\w+)/;
    function k(a) {
      a = a.match(j);
      return a && a[1].toLowerCase();
    }
    function a(a, b) {
      var d = i;
      !i && h(0, 5001);
      var e = k(a);
      e = e && c('getMarkupWrap')(e);
      if (e) {
        d.innerHTML = e[1] + a + e[2];
        e = e[0];
        while (e--) d = d.lastChild;
      } else d.innerHTML = c('TrustedTypesNoOpPolicy_DO_NOT_USE').createHTML(a);
      e = d.getElementsByTagName('script');
      e.length && (b || h(0, 5002), Array.from(e).forEach(b));
      a = Array.from(d.childNodes);
      while (d.lastChild) d.removeChild(d.lastChild);
      return a;
    }
    g['default'] = a;
  },
  98,
);
