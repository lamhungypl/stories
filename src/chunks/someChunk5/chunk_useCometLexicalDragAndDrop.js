__d(
  'useCometLexicalDragAndDrop',
  ['react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useEffect;
    function a(a, b) {
      var c = b.onDragEnter,
        d = b.onDragLeave,
        e = b.onDragOver,
        f = b.onDrop,
        g = b.onPaste;
      h(
        function () {
          if (a != null)
            return a.registerRootListener(function (a, b) {
              b != null &&
                (c && b.removeEventListener('dragenter', c),
                d && b.removeEventListener('dragleave', d),
                e && b.removeEventListener('dragover', e),
                f && b.removeEventListener('drop', f, !0),
                g && b.removeEventListener('paste', g, !0)),
                a !== null &&
                  (c && a.addEventListener('dragenter', c),
                  d && a.addEventListener('dragleave', d),
                  e && a.addEventListener('dragover', e),
                  f && a.addEventListener('drop', f, !0),
                  g && a.addEventListener('paste', g, !0));
            });
        },
        [a, c, d, e, f, g],
      );
    }
    g['default'] = a;
  },
  98,
);
