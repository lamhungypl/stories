__d(
  'relay-runtime/util/getFragmentIdentifier',
  [
    'relay-runtime/store/RelayModernSelector',
    'relay-runtime/util/RelayFeatureFlags',
    'relay-runtime/util/StringInterner',
    'relay-runtime/util/isEmptyObject',
    'relay-runtime/util/stableCopy',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = b('relay-runtime/store/RelayModernSelector').getDataIDsFromFragment,
      i = b('relay-runtime/store/RelayModernSelector').getSelector,
      j = b('relay-runtime/store/RelayModernSelector').getVariablesFromFragment,
      k = b('relay-runtime/util/StringInterner').intern;
    function a(a, c) {
      var d = i(a, c);
      d =
        d == null
          ? 'null'
          : d.kind === 'SingularReaderSelector'
          ? d.owner.identifier
          : '[' +
            d.selectors
              .map(function (a) {
                return a.owner.identifier;
              })
              .join(',') +
            ']';
      var e = j(a, c);
      c = h(a, c);
      if (
        b('relay-runtime/util/RelayFeatureFlags')
          .ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION
      ) {
        var f =
          typeof c === 'undefined'
            ? 'missing'
            : c == null
            ? 'null'
            : Array.isArray(c)
            ? '[' + c.join(',') + ']'
            : c;
        f =
          b('relay-runtime/util/RelayFeatureFlags').STRING_INTERN_LEVEL <= 1
            ? f
            : k(
                f,
                b('relay-runtime/util/RelayFeatureFlags').MAX_DATA_ID_LENGTH,
              );
        return (
          d +
          '/' +
          a.name +
          '/' +
          (e == null || b('relay-runtime/util/isEmptyObject')(e)
            ? '{}'
            : JSON.stringify(
                (g || (g = b('relay-runtime/util/stableCopy')))(e),
              )) +
          '/' +
          f
        );
      } else {
        c = (f = JSON.stringify(c)) != null ? f : 'missing';
        c =
          b('relay-runtime/util/RelayFeatureFlags').STRING_INTERN_LEVEL <= 1
            ? c
            : k(
                c,
                b('relay-runtime/util/RelayFeatureFlags').MAX_DATA_ID_LENGTH,
              );
        return (
          d +
          '/' +
          a.name +
          '/' +
          JSON.stringify((g || (g = b('relay-runtime/util/stableCopy')))(e)) +
          '/' +
          c
        );
      }
    }
    e.exports = a;
  },
  null,
);
