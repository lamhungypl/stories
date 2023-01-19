__d(
  'getCometEntityKey',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a) {
      var b = a.entityKeyConfig;
      return b == null ? null : g(b, a);
    }
    function g(a, b) {
      var c = {};
      for (var d in a) c[d] = i(a[d], b);
      return c;
    }
    function h(a, b) {
      return a == null || a[b] == null ? null : String(a[b]);
    }
    function i(a, b) {
      switch (a.source) {
        case 'prop':
          return h(b.rootView.props, a.value);
        case 'param':
          return h(b.params, a.value);
        case 'constant':
          return a.value;
      }
      return null;
    }
    f['default'] = a;
  },
  66,
);
