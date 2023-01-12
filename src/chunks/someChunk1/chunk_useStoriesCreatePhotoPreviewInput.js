__d(
  'useStoriesCreatePhotoPreviewInput',
  ['react', 'useGlobalEventListener'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useCallback;
    function i(a, b, c, d, e) {
      if (!b) return;
      b = a.target;
      b instanceof Node &&
        d instanceof Node &&
        c instanceof Node &&
        !d.contains(b) &&
        !c.contains(b) &&
        e(!1);
    }
    function a(a, b, d, e) {
      var f = h(
          function (c) {
            i(c, a, e.current, d.current, b), c.preventDefault();
          },
          [d, e, a, b],
        ),
        g = h(
          function (c) {
            i(c, a, e.current, d.current, b), c.preventDefault();
          },
          [d, e, a, b],
        );
      c('useGlobalEventListener')('focus', f, { capture: !0 });
      c('useGlobalEventListener')('click', g, { capture: !0 });
    }
    g['default'] = a;
  },
  98,
);
