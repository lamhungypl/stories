__d(
  'CometFileSelector.react',
  ['react', 'recoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useEffect,
      k = b.useRef;
    function l(a) {
      return a
        .map(function (a) {
          if (a.indexOf('/') !== -1 || a[0] === '.') return a;
          c('recoverableViolation')(
            'Accept parameter "' +
              a +
              '" for CometFileSelector is being interpreted as a file extension since it has no slash (/), but file extensions must start with a period (.)',
            'profile_comet',
          );
          return '.' + a;
        })
        .join(',');
    }
    function a(a) {
      var b = a.accept,
        c = a.children,
        d = a.multiple;
      d = d === void 0 ? !1 : d;
      var e = a.onFilesSelected,
        f = k(null);
      j(function () {
        var a = f.current;
        if (a != null) {
          var b = function (a) {
            a.stopPropagation();
          };
          a.addEventListener('click', b);
          return function () {
            a.removeEventListener('click', b);
          };
        }
      });
      a = i(function () {
        f.current != null && f.current.click();
      }, []);
      var g = i(
        function (a) {
          e(a.currentTarget.files), (a.currentTarget.value = '');
        },
        [e],
      );
      b = h.jsxs(h.Fragment, {
        children: [
          h.jsx('input', {
            accept: b != null ? l(b) : void 0,
            className: 'x1s85apg',
            multiple: d,
            onChange: g,
            ref: f,
            type: 'file',
          }),
          c(a),
        ],
      });
      return b;
    }
    g['default'] = a;
  },
  98,
);
