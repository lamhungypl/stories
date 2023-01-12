__d(
  'CometWatchAndScrollTriggerContextProvider',
  ['CometWatchAndScrollTriggerContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useMemo,
      k = b.useState;
    function a(a) {
      a = a.children;
      var b = i(c('CometWatchAndScrollTriggerContext')),
        d = k(b.isControlShown),
        e = d[0],
        f = d[1];
      d = k(b.isTriggerDisabled);
      var g = d[0],
        l = d[1];
      b = j(
        function () {
          return {
            isControlShown: e,
            isTriggerDisabled: g,
            setIsControlShown: f,
            setIsTriggerDisabled: l,
          };
        },
        [e, g],
      );
      return h.jsx(c('CometWatchAndScrollTriggerContext').Provider, {
        value: b,
        children: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
