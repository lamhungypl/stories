__d(
  'cometNormalizeTextEntityRanges',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function a(a, b) {
      return a == null
        ? []
        : a.map(function (a) {
            var c = a.length,
              d = a.offset;
            a = babelHelpers.objectWithoutPropertiesLoose(a, [
              'length',
              'offset',
            ]);
            return {
              entity: babelHelpers['extends']({}, a, { __typename: b }),
              length: c,
              offset: d,
            };
          });
    }
    f['default'] = a;
  },
  66,
);
