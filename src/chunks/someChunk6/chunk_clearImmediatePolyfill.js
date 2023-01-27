__d(
  'clearImmediatePolyfill',
  ['ImmediateImplementation'],
  function (a, b, c, d, e, f) {
    c = a.clearImmediate || b('ImmediateImplementation').clearImmediate;
    f['default'] = c;
  },
  66,
);
