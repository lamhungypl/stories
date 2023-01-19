__d(
  'MWCMJewelContextProvider.react',
  ['LsSystemFolderInterop.bs', 'MWCMJewelContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useMemo,
      j = b.useState;
    function a(a) {
      a = a.children;
      var b = j(function () {
          return d('LsSystemFolderInterop.bs').inbox;
        }),
        e = b[0],
        f = b[1];
      b = i(
        function () {
          return { selectedFolderTab: e, setSelectedFolderTab: f };
        },
        [e],
      );
      return h.jsx(c('MWCMJewelContext').Provider, { value: b, children: a });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
