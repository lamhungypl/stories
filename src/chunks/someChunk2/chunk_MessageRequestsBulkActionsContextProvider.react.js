__d(
  'MessageRequestsBulkActionsContextProvider.react',
  ['MessageRequestsBulkActionsContext.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useEffect,
      j = b.useMemo,
      k = b.useState;
    function a(a) {
      a = a.children;
      var b = k(!1),
        d = b[0],
        e = b[1];
      b = k(new Set());
      var f = b[0],
        g = b[1];
      b = k(new Set());
      var l = b[0],
        m = b[1];
      i(
        function () {
          g(function () {
            return new Set();
          }),
            m(function () {
              return new Set();
            });
        },
        [d, g, m],
      );
      b = j(
        function () {
          return {
            bulkActionsSelectedThreads: f,
            bulkActionsUnreadSelectedThreads: l,
            isBulkActionsEditMode: d,
            setBulkActionsSelectedThreads: g,
            setBulkActionsUnreadSelectedThreads: m,
            setIsBulkActionsEditMode: e,
          };
        },
        [f, d, l],
      );
      return h.jsx(c('MessageRequestsBulkActionsContext.react').Provider, {
        value: b,
        children: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
