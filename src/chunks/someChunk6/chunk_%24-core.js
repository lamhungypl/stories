__d(
  '$-core',
  ['fb-error-lite'],
  function (a, b, c, d, e, f, g) {
    function a(a) {
      return h(a, typeof a === 'string' ? document.getElementById(a) : a);
    }
    function b(a) {
      return h(a, typeof a === 'string' ? document.getElementById(a) : a);
    }
    function h(a, b) {
      if (!b) {
        a = c('fb-error-lite').err(
          'Tried to get element with id of "%s" but it is not present on the page',
          String(a),
        );
        a.taalOpcodes = a.taalOpcodes || [];
        a.taalOpcodes = [c('fb-error-lite').TAALOpcode.PREVIOUS_FILE];
        throw a;
      }
      return b;
    }
    a.fromIDOrElement = b;
    g['default'] = a;
  },
  98,
);
