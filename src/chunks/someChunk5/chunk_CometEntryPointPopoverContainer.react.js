__d(
  'CometEntryPointPopoverContainer.react',
  ['CometRelay', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useLayoutEffect,
      j = b.useMemo;
    function a(a) {
      a.entryPointParams;
      var b = a.entryPointReference,
        c = a.load,
        e = a.otherProps,
        f = babelHelpers.objectWithoutPropertiesLoose(a, [
          'entryPointParams',
          'entryPointReference',
          'load',
          'otherProps',
        ]);
      a = j(
        function () {
          return babelHelpers['extends']({}, e, f);
        },
        [e, f],
      );
      i(
        function () {
          b == null && c();
        },
        [b, c],
      );
      return b == null
        ? null
        : h.jsx(d('CometRelay').EntryPointContainer, {
            entryPointReference: b,
            props: a,
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
