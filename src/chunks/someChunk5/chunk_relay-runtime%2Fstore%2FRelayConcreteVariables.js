__d(
  'relay-runtime/store/RelayConcreteVariables',
  ['invariant', 'relay-runtime/store/RelayStoreUtils'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = b('relay-runtime/store/RelayStoreUtils').getArgumentValues;
    function a(a, b, c) {
      if (a.argumentDefinitions == null) return c;
      var d;
      a.argumentDefinitions.forEach(function (e) {
        if (Object.prototype.hasOwnProperty.call(c, e.name)) return;
        d = d || babelHelpers['extends']({}, c);
        switch (e.kind) {
          case 'LocalArgument':
            d[e.name] = e.defaultValue;
            break;
          case 'RootArgument':
            if (!Object.prototype.hasOwnProperty.call(b, e.name)) {
              d[e.name] = void 0;
              break;
            }
            d[e.name] = b[e.name];
            break;
          default:
            e, g(0, 3322, e.kind, a.name);
        }
      });
      return d || c;
    }
    function c(a, b, c) {
      var d = {};
      a.argumentDefinitions.forEach(function (a) {
        var b = a.defaultValue;
        c[a.name] != null && (b = c[a.name]);
        d[a.name] = b;
      });
      b != null &&
        Object.keys(b).forEach(function (a) {
          d[a] = b[a].get();
        });
      return d;
    }
    function d(a, b, c) {
      if (b == null) return a;
      var d = babelHelpers['extends']({}, a),
        e = c ? h(c, a) : {};
      b.forEach(function (a) {
        var b;
        b = (b = e[a.name]) != null ? b : a.defaultValue;
        d[a.name] = b;
      });
      return d;
    }
    e.exports = {
      getLocalVariables: d,
      getFragmentVariables: a,
      getOperationVariables: c,
    };
  },
  null,
);
