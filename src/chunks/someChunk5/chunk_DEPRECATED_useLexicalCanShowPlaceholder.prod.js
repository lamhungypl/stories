__d(
  'DEPRECATED_useLexicalCanShowPlaceholder.prod',
  ['LexicalText', 'LexicalUtils', 'react'],
  function $module_DEPRECATED_useLexicalCanShowPlaceholder_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    var c_react;
    var e = c_react || (c_react = require('react')),
      f =
        'undefined' !== typeof window &&
        'undefined' !== typeof window.document &&
        'undefined' !== typeof window.document.createElement
          ? e.useLayoutEffect
          : e.useEffect;
    function g(a) {
      return a
        .getEditorState()
        .read(require('LexicalText').$canShowPlaceholderCurry(a.isComposing()));
    }
    function h(a) {
      var _e$useState = e.useState(function () {
          return g(a);
        }),
        k = _e$useState[0],
        l = _e$useState[1];
      f(
        function () {
          function c() {
            var m = g(a);
            l(m);
          }
          c();
          return require('LexicalUtils').mergeRegister(
            a.registerUpdateListener(function () {
              c();
            }),
            a.registerEditableListener(function () {
              c();
            }),
          );
        },
        [a],
      );
      return k;
    }
    exports.useLexicalCanShowPlaceholder = function (a) {
      return h(a);
    };
  },
  null,
);
