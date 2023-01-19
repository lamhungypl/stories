__d(
  'evalGlobal',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      if (typeof a !== 'string')
        throw new TypeError(
          'JS sent to evalGlobal is not a string. Only strings are permitted.',
        );
      if (!a) return;
      var b = document.createElement('script');
      try {
        b.appendChild(document.createTextNode(a));
      } catch (c) {
        b.text = a;
      }
      a = document.getElementsByTagName('head')[0] || document.documentElement;
      a.appendChild(b);
      a.removeChild(b);
    }
    f['default'] = a;
  },
  66,
);
