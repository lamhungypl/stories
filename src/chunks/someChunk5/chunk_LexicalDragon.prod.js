__d(
  'LexicalDragon.prod',
  ['Lexical'],
  function $module_LexicalDragon_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    exports.registerDragonSupport = function (m) {
      var t = window.location.origin,
        r = function r(l) {
          if (l.origin === t) {
            var h = m.getRootElement();
            if (
              document.activeElement === h &&
              ((h = l.data), 'string' === typeof h)
            ) {
              try {
                var a = JSON.parse(h);
              } catch (k) {
                return;
              }
              if (
                a &&
                'nuanria_messaging' === a.protocol &&
                'request' === a.type &&
                (a = a.payload) &&
                'makeChanges' === a.functionId &&
                (a = a.args)
              ) {
                var _a = a,
                  k = _a[0],
                  n = _a[1],
                  p = _a[2],
                  q = _a[3],
                  u = _a[4];
                m.update(function () {
                  var f = require('Lexical').$getSelection();
                  if (require('Lexical').$isRangeSelection(f)) {
                    var e = f.anchor;
                    var b = e.getNode(),
                      c = 0,
                      d = 0;
                    require('Lexical').$isTextNode(b) &&
                      0 <= k &&
                      0 <= n &&
                      ((c = k), (d = k + n), f.setTextNodeRange(b, c, b, d));
                    if (c !== d || '' !== p)
                      f.insertRawText(p), (b = e.getNode());
                    require('Lexical').$isTextNode(b) &&
                      ((c = q),
                      (d = q + u),
                      (e = b.getTextContentSize()),
                      (c = c > e ? e : c),
                      (d = d > e ? e : d),
                      f.setTextNodeRange(b, c, b, d));
                    l.stopImmediatePropagation();
                  }
                });
              }
            }
          }
        };
      window.addEventListener('message', r, !0);
      return function () {
        window.removeEventListener('message', r, !0);
      };
    };
  },
  null,
);
