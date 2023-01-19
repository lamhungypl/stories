__d(
  'CometSuspendedDialogImpl.react',
  ['CometPlaceholder.react', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a) {
      var b = a.dialog,
        d = a.dialogProps,
        e = a.fallback,
        f = a.onClose;
      a = a.onHide;
      return h.jsx(c('CometPlaceholder.react'), {
        fallback: e(f),
        children: h.jsx(
          b,
          babelHelpers['extends']({}, d, { onClose: f, onHide: a }),
        ),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
