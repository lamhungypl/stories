__d(
  'CometFileSelector.react',

  ['react', 'recoverableViolation'],

  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var useCallback = b.useCallback,
      useEffect = b.useEffect,
      useRef = b.useRef;

    function filesAcceptors(files) {
      return files
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

    function Component(a) {
      var b = a.accept;
      let c = a.children;
      let multiple = a.multiple;
      multiple = multiple === void 0 ? !1 : multiple;
      var e = a.onFilesSelected,
        f = useRef(null);

      useEffect(function () {
        var a = f.current;
        if (a != null) {
          let clickEventHandler = function (event) {
            event.stopPropagation();
          };
          a.addEventListener('click', clickEventHandler);

          return function () {
            a.removeEventListener('click', clickEventHandler);
          };
        }
      });

      let a = useCallback(function () {
        f.current != null && f.current.click();
      }, []);

      let onChange = useCallback(
        function (a) {
          e(a.currentTarget.files), (a.currentTarget.value = '');
        },
        [e],
      );

      let b = h.jsxs(h.Fragment, {
        children: [
          h.jsx('input', {
            accept: b != null ? filesAcceptors(b) : void 0,
            className: 'x1s85apg',
            multiple: multiple,
            onChange: onChange,
            ref: f,
            type: 'file',
          }),
          c(a),
        ],
      });
      return b;
    }
    g['default'] = Component;
  },
  98,
);
