__d(
  'useLexicalInitializeEditor__DEPRECATED',
  ['Lexical', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react').useLayoutEffect;
    function a(a) {
      h(
        function () {
          a.update(function () {
            var b = d('Lexical').$getRoot();
            if (b.isEmpty()) {
              var c = d('Lexical').$createParagraphNode();
              b.append(c);
              b = document.activeElement;
              (d('Lexical').$getSelection() !== null ||
                (b !== null && b === a.getRootElement())) &&
                c.select();
            }
          });
        },
        [a],
      );
    }
    g['default'] = a;
  },
  98,
);
