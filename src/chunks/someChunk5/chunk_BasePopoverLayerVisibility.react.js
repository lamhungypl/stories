__d(
  'BasePopoverLayerVisibility.react',
  ['HiddenSubtreePassiveContext', 'emptyFunction', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    d('react');
    b = d('react');
    var h = b.useContext,
      i = b.useEffect,
      j = b.useRef;
    function a(a) {
      var b = a.children;
      a = a.onLayerDetached;
      var d = a === void 0 ? c('emptyFunction') : a;
      a = h(c('HiddenSubtreePassiveContext'));
      var e = a.getCurrentState,
        f = a.subscribeToChanges,
        g = j(!e().hiddenOrBackgrounded);
      i(
        function () {
          var a = f(function (a) {
            a = a.hiddenOrBackgrounded;
            a = !a;
            g.current !== a && !a && d();
            g.current = a;
          });
          return function () {
            a.remove();
          };
        },
        [d, f],
      );
      var k = j(d);
      i(
        function () {
          k.current = d;
        },
        [d],
      );
      var l = j(null);
      i(function () {
        l.current != null &&
          (window.clearTimeout(l.current), (l.current = null));
        return function () {
          var a = k.current;
          l.current = window.setTimeout(a, 1);
        };
      }, []);
      return b;
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
