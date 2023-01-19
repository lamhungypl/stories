__d(
  'DEPRECATED_useLexicalCharacterLimit.prod',
  ['Lexical', 'LexicalOverflow', 'LexicalText', 'LexicalUtils', 'react'],
  function $module_DEPRECATED_useLexicalCharacterLimit_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    var c_react;
    var y = c_react || (c_react = require('react'));
    function z(a, d, f) {
      var e = Intl.Segmenter;
      var m = 0;
      var c = 0;
      if ('function' === typeof e) {
        a = new e().segment(a);
        for (
          var _iterator = a,
            _isArray = Array.isArray(_iterator),
            _i = 0,
            _iterator = _isArray
              ? _iterator
              : _iterator[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var _ref2;
          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref2 = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref2 = _i.value;
          }
          var _ref = _ref2;
          var g = _ref.segment;
          c += f(g);
          if (c > d) break;
          m += g.length;
        }
      } else
        for (g = Array.from(a), a = g.length, e = 0; e < a; e++) {
          var n = g[e];
          c += f(n);
          if (c > d) break;
          m += n.length;
        }
      return m;
    }
    function A(a) {
      var d = require('LexicalOverflow').$createOverflowNode();
      a.insertBefore(d);
      d.append(a);
      return d;
    }
    function C(a) {
      var d = a.getChildren(),
        f = d.length;
      for (var e = 0; e < f; e++) {
        a.insertBefore(d[e]);
      }
      a.remove();
      return 0 < f ? d[f - 1] : null;
    }
    function D(a) {
      var d = a.getPreviousSibling();
      if (require('LexicalOverflow').$isOverflowNode(d)) {
        var f = a.getFirstChild(),
          e = d.getChildren(),
          m = e.length;
        if (null === f) a.append.apply(a, e);
        else
          for (var c = 0; c < m; c++) {
            f.insertBefore(e[c]);
          }
        c = require('Lexical').$getSelection();
        if (require('Lexical').$isRangeSelection(c)) {
          f = c.anchor;
          e = f.getNode();
          c = c.focus;
          var g = f.getNode();
          e.is(d)
            ? f.set(a.getKey(), f.offset, 'element')
            : e.is(a) && f.set(a.getKey(), m + f.offset, 'element');
          g.is(d)
            ? c.set(a.getKey(), c.offset, 'element')
            : g.is(a) && c.set(a.getKey(), m + c.offset, 'element');
        }
        d.remove();
      }
    }
    exports.mergePrevious = D;
    exports.useCharacterLimit = function (a, d, f) {
      if (f === void 0) {
        f = Object.freeze({});
      }
      var _f = f,
        _f$strlen = _f.strlen,
        e =
          _f$strlen === void 0
            ? function (c) {
                return c.length;
              }
            : _f$strlen,
        _f$remainingCharacter = _f.remainingCharacters,
        m =
          _f$remainingCharacter === void 0
            ? function () {}
            : _f$remainingCharacter;
      y.useEffect(
        function () {
          if (!a.hasNodes([require('LexicalOverflow').OverflowNode]))
            throw Error(
              'Minified Lexical error #57; visit https://lexical.dev/docs/error?code=57 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.',
            );
        },
        [a],
      );
      y.useEffect(
        function () {
          var c = a
              .getEditorState()
              .read(require('LexicalText').$rootTextContent),
            g = 0;
          return require('LexicalUtils').mergeRegister(
            a.registerTextContentListener(function (n) {
              c = n;
            }),
            a.registerUpdateListener(function (_ref3) {
              var n = _ref3.dirtyLeaves;
              var r = a.isComposing();
              n = 0 < n.size;
              if (!r && n) {
                r = e(c);
                n = r > d || (null !== g && g > d);
                m(d - r);
                if (null === g || n) {
                  var p = z(c, d, e);
                  a.update(
                    function () {
                      var B = require('LexicalUtils').$dfs(),
                        E = B.length,
                        t = 0;
                      for (var v = 0; v < E; v += 1) {
                        var _b$splitText;
                        var b = B[v].node;
                        if (require('LexicalOverflow').$isOverflowNode(b)) {
                          var l = t;
                          if (t + b.getTextContentSize() <= p) {
                            var h = b.getParent();
                            l = b.getPreviousSibling();
                            var u = b.getNextSibling();
                            C(b);
                            b = require('Lexical').$getSelection();
                            !require('Lexical').$isRangeSelection(b) ||
                              (b.anchor.getNode().isAttached() &&
                                b.focus.getNode().isAttached()) ||
                              (require('Lexical').$isTextNode(l)
                                ? l.select()
                                : require('Lexical').$isTextNode(u)
                                ? u.select()
                                : null !== h && h.select());
                          } else
                            l < p &&
                              ((h = b.getFirstDescendant()),
                              (u = null !== h ? h.getTextContentSize() : 0),
                              (l += u),
                              (h =
                                require('Lexical').$isTextNode(h) &&
                                h.isSimpleText()),
                              (l = l <= p),
                              (h || l) && C(b));
                        } else
                          require('Lexical').$isLeafNode(b) &&
                            ((l = t),
                            (t += b.getTextContentSize()),
                            t > p &&
                              !require('LexicalOverflow').$isOverflowNode(
                                b.getParent(),
                              ) &&
                              ((h = require('Lexical').$getSelection()),
                              l < p &&
                              require('Lexical').$isTextNode(b) &&
                              b.isSimpleText()
                                ? (((_b$splitText = b.splitText(p - l)),
                                  (b = _b$splitText[1]),
                                  _b$splitText),
                                  (b = A(b)))
                                : (b = A(b)),
                              null !== h && require('Lexical').$setSelection(h),
                              D(b)));
                      }
                    },
                    { tag: 'history-merge' },
                  );
                }
                g = r;
              }
            }),
          );
        },
        [a, d, m, e],
      );
    };
  },
  null,
);
