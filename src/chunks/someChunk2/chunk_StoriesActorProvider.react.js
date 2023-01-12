__d(
  'StoriesActorProvider.react',
  ['StoriesActorContext', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react'),
      i = d('react').useMemo;
    function a(a) {
      var b = a.actorID,
        d = a.actorName;
      a = a.children;
      var e = i(
        function () {
          return { actorID: b, actorName: d };
        },
        [b, d],
      );
      return h.jsx(c('StoriesActorContext').Provider, {
        value: e,
        children: a,
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
