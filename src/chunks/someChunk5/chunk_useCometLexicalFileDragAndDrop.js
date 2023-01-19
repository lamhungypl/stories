__d(
  'useCometLexicalFileDragAndDrop',
  ['react', 'useCometLexicalDragAndDrop'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    b = d('react');
    var h = b.useCallback,
      i = b.useRef;
    function a(a) {
      var b = a.editor,
        d = a.isMimeTypeAcceptable,
        e = a.onHover,
        f = e === void 0 ? function () {} : e;
      e = a.onSubmit;
      var g = e === void 0 ? function () {} : e,
        j = i(0),
        k = h(
          function (a) {
            return Array.from(a).filter(d);
          },
          [d],
        );
      a = h(
        function (a) {
          j.current++;
          var b = a.dataTransfer;
          if (b == null) return f([], !0);
          b = k(b.items);
          b.length > 0 && a.preventDefault();
          return f(b, !0);
        },
        [k, f],
      );
      e = h(
        function (a) {
          j.current--;
          if (j.current === 0) return f([], !1);
        },
        [f],
      );
      var l = h(
          function (a) {
            var b = a.dataTransfer;
            if (b == null) return f([], !0);
            b = k(b.items);
            b.length > 0 && a.preventDefault();
            return f(b, !0);
          },
          [k, f],
        ),
        m = h(
          function (a, b) {
            b = k(b.items);
            b = b
              .map(function (a) {
                return a.getAsFile();
              })
              .filter(Boolean);
            if (b.length > 0) {
              a.stopPropagation();
              a.preventDefault();
              return g(b);
            } else return g([]);
          },
          [k, g],
        ),
        n = h(
          function (a) {
            var b = a.dataTransfer;
            j.current = 0;
            f([], !1);
            if (b != null) return m(a, b);
            else return g([]);
          },
          [m, f, g],
        ),
        o = h(
          function (a) {
            var b = a.clipboardData;
            if (b == null) return g([]);
            var c = b.types;
            c =
              (c.includes('text/plain') && c.includes('text/html')) ||
              c.includes('text/rtf');
            return c ? g([]) : m(a, b);
          },
          [m, g],
        );
      c('useCometLexicalDragAndDrop')(b, {
        onDragEnter: a,
        onDragLeave: e,
        onDragOver: l,
        onDrop: n,
        onPaste: o,
      });
    }
    g['default'] = a;
  },
  98,
);
