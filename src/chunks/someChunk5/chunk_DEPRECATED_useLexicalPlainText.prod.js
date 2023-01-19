__d(
  'DEPRECATED_useLexicalPlainText.prod',
  [
    'LexicalDragon',
    'LexicalHistory',
    'LexicalPlainText',
    'LexicalUtils',
    'react',
  ],
  function $module_DEPRECATED_useLexicalPlainText_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    var c_react;
    var e = c_react || (c_react = require('react'));
    function l(a, b, d) {
      if (d === void 0) {
        d = 1000;
      }
      var f = e.useMemo(
        function () {
          return b || require('LexicalHistory').createEmptyHistoryState();
        },
        [b],
      );
      e.useEffect(
        function () {
          return require('LexicalHistory').registerHistory(a, f, d);
        },
        [d, a, f],
      );
    }
    function m(a, b, d) {
      if (d === void 0) {
        d = 1000;
      }
      return l(a, b, d);
    }
    var n =
      'undefined' !== typeof window &&
      'undefined' !== typeof window.document &&
      'undefined' !== typeof window.document.createElement
        ? e.useLayoutEffect
        : e.useEffect;
    function p(a) {
      n(
        function () {
          return require('LexicalUtils').mergeRegister(
            require('LexicalPlainText').registerPlainText(a),
            require('LexicalDragon').registerDragonSupport(a),
          );
        },
        [a],
      );
    }
    exports.useLexicalPlainText = function (a, b) {
      p(a);
      m(a, b);
    };
  },
  null,
);
