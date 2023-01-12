__d(
  'CometProductAttributionContextProvider.react',
  ['CometProductAttributionContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo;
    function a(a) {
      var b = a.children,
        d = a.value,
        e = i(c('CometProductAttributionContext'));
      a = j(
        function () {
          return e != null && e.length > 0 ? [].concat(e, [d]) : [d];
        },
        [d, e],
      );
      return h.jsx(c('CometProductAttributionContext').Provider, {
        value: a,
        children: b,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
