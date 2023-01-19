__d(
  'CometDialog.react',
  [
    'CometDialogContainer.react',
    'CometDialogPage.react',
    'react',
    'useCometUniqueID',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    function a(a, b) {
      var d = a.anchorXStyle,
        e = a.disableClosingWithMask,
        f = a.header,
        g = a.label,
        i = a.labelledBy,
        j = a.onClose,
        k = a.size,
        l = a.testid;
      l = babelHelpers.objectWithoutPropertiesLoose(a, [
        'anchorXStyle',
        'disableClosingWithMask',
        'header',
        'label',
        'labelledBy',
        'onClose',
        'size',
        'testid',
      ]);
      a = c('useCometUniqueID')();
      var m = f;
      f != null &&
        f.props.id == null &&
        (m = h.cloneElement(
          f,
          babelHelpers['extends']({}, f.props, { id: a }),
        ));
      return h.jsx(c('CometDialogContainer.react'), {
        anchorXStyle: d,
        disableClosingWithMask: e,
        label: g,
        labelledBy: (f = i) != null ? f : a,
        onClose: j,
        ref: b,
        size: k,
        testid: void 0,
        children: h.jsx(
          c('CometDialogPage.react'),
          babelHelpers['extends']({ header: m }, l),
        ),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    b = h.forwardRef(a);
    g['default'] = b;
  },
  98,
);
