__d(
  'MWJewelPopoverDialogContextProvider.react',
  ['MWJewelPopoverDialogContext.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useMemo,
      j = b.useState;
    function a(a) {
      a = a.children;
      var b = j(!1),
        d = b[0],
        e = b[1];
      b = i(
        function () {
          return { isOpenForDialog: d, setIsOpenForDialog: e };
        },
        [d],
      );
      return h.jsx(c('MWJewelPopoverDialogContext.react').Provider, {
        value: b,
        children: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
