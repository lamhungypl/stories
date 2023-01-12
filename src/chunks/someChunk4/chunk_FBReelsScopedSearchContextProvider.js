__d(
  'FBReelsScopedSearchContextProvider',
  ['FBReelsScopedSearchContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo;
    function a(a) {
      var b = a.children;
      a = a.hideScopedSearchButton;
      var d = a === void 0 ? !1 : a;
      a = i(
        function () {
          return { hideScopedSearchButton: d };
        },
        [d],
      );
      return h.jsx(c('FBReelsScopedSearchContext').Provider, {
        value: a,
        children: b,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
