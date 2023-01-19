__d(
  'relay-runtime/store/ClientID',
  ['relay-runtime/util/RelayFeatureFlags', 'relay-runtime/util/StringInterner'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = b('relay-runtime/util/StringInterner').intern,
      h = 'client:';
    function a(a, c, d) {
      a =
        b('relay-runtime/util/RelayFeatureFlags').STRING_INTERN_LEVEL <= 0
          ? a
          : g(a, b('relay-runtime/util/RelayFeatureFlags').MAX_DATA_ID_LENGTH);
      a = a + ':' + c;
      d != null && (a += ':' + d);
      a.indexOf(h) !== 0 && (a = h + a);
      return a;
    }
    function c(a) {
      return a.indexOf(h) === 0;
    }
    var i = 0;
    function d() {
      return h + 'local:' + i++;
    }
    function f(a, b, c) {
      a = '' + h + a + ':' + b;
      c != null && (a += ':' + c);
      return a;
    }
    e.exports = {
      generateClientID: a,
      generateClientObjectClientID: f,
      generateUniqueClientID: d,
      isClientID: c,
    };
  },
  null,
);
