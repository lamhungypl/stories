__d(
  'LexicalSelection.prod',
  ['Lexical'],
  function $module_LexicalSelection_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    var u = new Map();
    function v(a) {
      for (; null != a; ) {
        if (a.nodeType === Node.TEXT_NODE) return a;
        a = a.firstChild;
      }
      return null;
    }
    function x(a) {
      var b = a.parentNode;
      if (null == b) throw Error('Should never happen');
      return [b, Array.from(b.childNodes).indexOf(a)];
    }
    function y(a) {
      var b = {};
      a = a.split(';');
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
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }
        var c = _ref;
        if ('' !== c) {
          var _c$split = c.split(/:([^]+)/),
            f = _c$split[0],
            d = _c$split[1];
          b[f.trim()] = d.trim();
        }
      }
      return b;
    }
    function z(a) {
      var b = u.get(a);
      void 0 === b && ((b = y(a)), u.set(a, b));
      return b;
    }
    function A(a) {
      var b = '';
      for (var c in a) {
        c && (b += c + ': ' + a[c] + ';');
      }
      return b;
    }
    function B(a, b) {
      var c = z(a.getStyle());
      b = Object.entries(b).reduce(function (f, _ref2) {
        var d = _ref2[0],
          e = _ref2[1];
        null === e ? delete f[d] : (f[d] = e);
        return f;
      }, babelHelpers['extends']({}, c));
      c = A(b);
      a.setStyle(c);
      u.set(c, b);
    }
    function C(a) {
      for (; null !== a && !require('Lexical').$isRootOrShadowRoot(a); ) {
        var b = a.getLatest(),
          c = a.getParent();
        0 === b.getChildrenSize() && a.remove(!0);
        a = c;
      }
    }
    function D(a, b, c, f, d) {
      if (d === void 0) {
        d = null;
      }
      if (0 !== b.length) {
        var e = b[0],
          k = new Map(),
          g = [];
        e = require('Lexical').$isElementNode(e) ? e : e.getParentOrThrow();
        e.isInline() && (e = e.getParentOrThrow());
        for (var h = !1; null !== e; ) {
          var p = e.getPreviousSibling();
          if (null !== p) {
            e = p;
            h = !0;
            break;
          }
          e = e.getParentOrThrow();
          if (require('Lexical').$isRootOrShadowRoot(e)) break;
        }
        p = new Set();
        for (var q = 0; q < c; q++) {
          var m = b[q];
          require('Lexical').$isElementNode(m) &&
            0 === m.getChildrenSize() &&
            p.add(m.getKey());
        }
        var n = new Set();
        for (q = 0; q < c; q++) {
          m = b[q];
          var r = m.getParent();
          null !== r && r.isInline() && (r = r.getParent());
          if (
            null !== r &&
            require('Lexical').$isLeafNode(m) &&
            !n.has(m.getKey())
          ) {
            if (((m = r.getKey()), void 0 === k.get(m))) {
              (function () {
                var t = f();
                t.setFormat(r.getFormatType());
                t.setIndent(r.getIndent());
                g.push(t);
                k.set(m, t);
                r.getChildren().forEach(function (w) {
                  t.append(w);
                  n.add(w.getKey());
                  require('Lexical').$isElementNode(w) &&
                    w.getChildrenKeys().forEach(function (G) {
                      return n.add(G);
                    });
                });
                C(r);
              })();
            }
          } else
            p.has(m.getKey()) &&
              ((r = f()),
              r.setFormat(m.getFormatType()),
              r.setIndent(m.getIndent()),
              g.push(r),
              m.remove(!0));
        }
        if (null !== d)
          for (b = 0; b < g.length; b++) {
            d.append(g[b]);
          }
        b = null;
        if (require('Lexical').$isRootOrShadowRoot(e)) {
          if (h) {
            if (null !== d) e.insertAfter(d);
            else
              for (d = g.length - 1; 0 <= d; d--) {
                e.insertAfter(g[d]);
              }
          } else if (
            ((h = e.getFirstChild()),
            require('Lexical').$isElementNode(h) && (e = h),
            null === h)
          ) {
            if (d) e.append(d);
            else
              for (d = 0; d < g.length; d++) {
                (h = g[d]), e.append(h), (b = h);
              }
          } else if (null !== d) h.insertBefore(d);
          else
            for (e = 0; e < g.length; e++) {
              (d = g[e]), h.insertBefore(d), (b = d);
            }
        } else if (d) e.insertAfter(d);
        else
          for (d = g.length - 1; 0 <= d; d--) {
            (h = g[d]), e.insertAfter(h), (b = h);
          }
        g = require('Lexical').$getPreviousSelection();
        require('Lexical').$isRangeSelection(g) &&
        g.anchor.getNode().isAttached() &&
        g.focus.getNode().isAttached()
          ? require('Lexical').$setSelection(g.clone())
          : null !== b
          ? b.selectEnd()
          : (a.dirty = !0);
      }
    }
    function E(a, b, c, f) {
      a.modify(b ? 'extend' : 'move', c, f);
    }
    function F(a) {
      a = a.anchor.getNode();
      return (
        'rtl' ===
        (require('Lexical').$isRootNode(a)
          ? a
          : a.getParentOrThrow()
        ).getDirection()
      );
    }
    exports.$addNodeStyle = function (a) {
      a = a.getStyle();
      var b = y(a);
      u.set(a, b);
    };
    exports.$cloneWithProperties = function (a) {
      a = a.getLatest();
      var b = a.constructor.clone(a);
      b.__parent = a.__parent;
      b.__next = a.__next;
      b.__prev = a.__prev;
      if (
        require('Lexical').$isElementNode(a) &&
        require('Lexical').$isElementNode(b)
      )
        return (
          (b.__first = a.__first),
          (b.__last = a.__last),
          (b.__size = a.__size),
          (b.__format = a.__format),
          (b.__indent = a.__indent),
          (b.__dir = a.__dir),
          b
        );
      require('Lexical').$isTextNode(a) &&
        require('Lexical').$isTextNode(b) &&
        ((b.__format = a.__format),
        (b.__style = a.__style),
        (b.__mode = a.__mode),
        (b.__detail = a.__detail));
      return b;
    };
    exports.$getSelectionStyleValueForProperty = function (a, b, c) {
      if (c === void 0) {
        c = '';
      }
      var f = null,
        d = a.getNodes();
      var e = a.anchor,
        k = a.focus,
        g = a.isBackward();
      a = g ? k.offset : e.offset;
      e = g ? k.getNode() : e.getNode();
      for (k = 0; k < d.length; k++) {
        var h = d[k];
        if (
          (0 === k || 0 !== a || !h.is(e)) &&
          require('Lexical').$isTextNode(h)
        ) {
          g = b;
          var p = c;
          h = h.getStyle();
          h = z(h);
          g = null !== h ? h[g] || p : p;
          if (null === f) f = g;
          else if (f !== g) {
            f = '';
            break;
          }
        }
      }
      return null === f ? c : f;
    };
    exports.$isAtNodeEnd = function (a) {
      return 'text' === a.type
        ? a.offset === a.getNode().getTextContentSize()
        : a.offset === a.getNode().getChildrenSize();
    };
    exports.$isParentElementRTL = F;
    exports.$moveCaretSelection = E;
    exports.$moveCharacter = function (a, b, c) {
      var f = F(a);
      E(a, b, c ? !f : f, 'character');
    };
    exports.$patchStyleText = function (a, b) {
      var c = a.getNodes();
      var f = c.length - 1,
        d = c[0],
        e = c[f];
      if (!a.isCollapsed()) {
        var k = a.anchor,
          g = a.focus,
          h = d.getTextContent().length,
          p = g.offset,
          q = k.offset,
          m = k.isBefore(g),
          n = m ? q : p;
        a = m ? p : q;
        var r = m ? k.type : g.type,
          t = m ? g.type : k.type;
        k = m ? g.key : k.key;
        require('Lexical').$isTextNode(d) &&
          n === h &&
          ((g = d.getNextSibling()),
          require('Lexical').$isTextNode(g) && ((n = q = 0), (d = g)));
        if (d.is(e))
          require('Lexical').$isTextNode(d) &&
            ((n = 'element' === r ? 0 : q > p ? p : q),
            (a = 'element' === t ? h : q > p ? q : p),
            n !== a &&
              (0 === n && a === h
                ? (B(d, b), d.select(n, a))
                : ((c = d.splitText(n, a)),
                  (c = 0 === n ? c[0] : c[1]),
                  B(c, b),
                  c.select(0, a - n))));
        else
          for (
            require('Lexical').$isTextNode(d) &&
              n < d.getTextContentSize() &&
              (0 !== n && (d = d.splitText(n)[1]), B(d, b)),
              require('Lexical').$isTextNode(e) &&
                ((n = e.getTextContent().length),
                e.__key !== k && 0 !== a && (a = n),
                a !== n &&
                  ((_e$splitText = e.splitText(a)),
                  (e = _e$splitText[0]),
                  _e$splitText),
                0 !== a && B(e, b)),
              a = 1;
            a < f;
            a++
          ) {
            var _e$splitText;
            (n = c[a]),
              (h = n.getKey()),
              require('Lexical').$isTextNode(n) &&
                h !== d.getKey() &&
                h !== e.getKey() &&
                !n.isToken() &&
                B(n, b);
          }
      }
    };
    exports.$selectAll = function (a) {
      var b = a.anchor;
      a = a.focus;
      var c = b.getNode().getTopLevelElementOrThrow().getParentOrThrow();
      var f = c.getFirstDescendant();
      c = c.getLastDescendant();
      var d = 'element',
        e = 'element',
        k = 0;
      require('Lexical').$isTextNode(f)
        ? (d = 'text')
        : require('Lexical').$isElementNode(f) ||
          null === f ||
          (f = f.getParentOrThrow());
      require('Lexical').$isTextNode(c)
        ? ((e = 'text'), (k = c.getTextContentSize()))
        : require('Lexical').$isElementNode(c) ||
          null === c ||
          (c = c.getParentOrThrow());
      f && c && (b.set(f.getKey(), 0, d), a.set(c.getKey(), k, e));
    };
    exports.$setBlocksType_experimental = function (a, b) {
      if ('root' === a.anchor.key) {
        b = b();
        var c = require('Lexical').$getRoot();
        (a = c.getFirstChild()) ? a.replace(b, !0) : c.append(b);
      } else
        for (
          c = a.getNodes(),
            'text' === a.anchor.type &&
              ((a = a.anchor.getNode().getParent()),
              (a = a.isInline() ? a.getParent() : a),
              -1 === c.indexOf(a) && c.push(a)),
            a = 0;
          a < c.length;
          a++
        ) {
          var d = c[a];
          var f = d;
          !require('Lexical').$isElementNode(f) ||
            require('Lexical').$isRootOrShadowRoot(f) ||
            f.isInline() ||
            ((f = b()),
            f.setFormat(d.getFormatType()),
            f.setIndent(d.getIndent()),
            d.replace(f, !0));
        }
    };
    exports.$shouldOverrideDefaultCharacterSelection = function (a, b) {
      a = require('Lexical').$getAdjacentNode(a.focus, b);
      return (
        (require('Lexical').$isDecoratorNode(a) && !a.isIsolated()) ||
        (require('Lexical').$isElementNode(a) &&
          !a.isInline() &&
          !a.canBeEmpty())
      );
    };
    exports.$sliceSelectedTextNodeContent = function (a, b) {
      if (
        b.isSelected() &&
        !b.isSegmented() &&
        !b.isToken() &&
        (require('Lexical').$isRangeSelection(a) ||
          require('Lexical').DEPRECATED_$isGridSelection(a))
      ) {
        var c = a.anchor.getNode(),
          f = a.focus.getNode(),
          d = b.is(c),
          e = b.is(f);
        if (d || e) {
          d = a.isBackward();
          var _a$getCharacterOffset = a.getCharacterOffsets(),
            k = _a$getCharacterOffset[0],
            g = _a$getCharacterOffset[1];
          a = c.is(f);
          e = b.is(d ? f : c);
          f = b.is(d ? c : f);
          c = 0;
          var h = void 0;
          a
            ? ((c = k > g ? g : k), (h = k > g ? k : g))
            : e
            ? ((c = d ? g : k), (h = void 0))
            : f && ((d = d ? k : g), (c = 0), (h = d));
          b.__text = b.__text.slice(c, h);
        }
      }
      return b;
    };
    exports.$wrapNodes = function (a, b, c) {
      if (c === void 0) {
        c = null;
      }
      var f = a.getNodes();
      var d = f.length;
      var e = a.anchor;
      if (
        0 === d ||
        (1 === d && 'element' === e.type && 0 === e.getNode().getChildrenSize())
      ) {
        a = 'text' === e.type ? e.getNode().getParentOrThrow() : e.getNode();
        f = a.getChildren();
        var g = b();
        g.setFormat(a.getFormatType());
        g.setIndent(a.getIndent());
        f.forEach(function (h) {
          return g.append(h);
        });
        c && (g = c.append(g));
        a.replace(g);
      } else {
        e = null;
        var k = [];
        for (var _g = 0; _g < d; _g++) {
          var h = f[_g];
          require('Lexical').$isRootOrShadowRoot(h)
            ? (D(a, k, k.length, b, c), (k = []), (e = h))
            : null === e ||
              (null !== e && require('Lexical').$hasAncestor(h, e))
            ? k.push(h)
            : (D(a, k, k.length, b, c), (k = [h]));
        }
        D(a, k, k.length, b, c);
      }
    };
    exports.createDOMRange = function (a, b, c, f, d) {
      var _x, _x2;
      var e = b.getKey(),
        k = f.getKey(),
        g = document.createRange(),
        h = a.getElementByKey(e);
      a = a.getElementByKey(k);
      require('Lexical').$isTextNode(b) && (h = v(h));
      require('Lexical').$isTextNode(f) && (a = v(a));
      if (void 0 === b || void 0 === f || null === h || null === a) return null;
      'BR' === h.nodeName && ((_x = x(h)), (h = _x[0]), (c = _x[1]), _x);
      'BR' === a.nodeName && ((_x2 = x(a)), (a = _x2[0]), (d = _x2[1]), _x2);
      b = h.firstChild;
      h === a &&
        null != b &&
        'BR' === b.nodeName &&
        0 === c &&
        0 === d &&
        (d = 1);
      try {
        g.setStart(h, c), g.setEnd(a, d);
      } catch (p) {
        return null;
      }
      !g.collapsed ||
        (c === d && e === k) ||
        (g.setStart(a, d), g.setEnd(h, c));
      return g;
    };
    exports.createRectsFromDOMRange = function (a, b) {
      var c = a.getRootElement();
      if (null === c) return [];
      a = c.getBoundingClientRect();
      c = getComputedStyle(c);
      c = parseFloat(c.paddingLeft) + parseFloat(c.paddingRight);
      b = Array.from(b.getClientRects());
      var f = b.length,
        d;
      for (var e = 0; e < f; e++) {
        var k = b[e],
          g = k.width + c === a.width;
        (d &&
          d.top === k.top &&
          d.left === k.left &&
          d.width === k.width &&
          d.height === k.height) ||
        g
          ? (b.splice(e--, 1), f--)
          : (d = k);
      }
      return b;
    };
    exports.getStyleObjectFromCSS = z;
    exports.trimTextContentFromAnchor = function (a, b, c) {
      var f = b.getNode();
      if (require('Lexical').$isElementNode(f)) {
        var d = f.getDescendantByIndex(b.offset);
        null !== d && (f = d);
      }
      for (; 0 < c && null !== f; ) {
        var e = f.getPreviousSibling(),
          k = 0;
        if (null === e) {
          d = f.getParentOrThrow();
          for (var g = d.getPreviousSibling(); null === g; ) {
            d = d.getParent();
            if (null === d) {
              e = null;
              break;
            }
            g = d.getPreviousSibling();
          }
          null !== d &&
            ((k = d.isInline() ? 0 : 2),
            (e = require('Lexical').$isElementNode(g)
              ? g.getLastDescendant()
              : g));
        }
        var h = f.getTextContent();
        '' === h &&
          require('Lexical').$isElementNode(f) &&
          !f.isInline() &&
          (h = '\n\n');
        d = h.length;
        g = d - c;
        var p = h.slice(0, g);
        if (!require('Lexical').$isTextNode(f) || c >= d)
          (g = f.getParent()),
            f.remove(),
            null != g && 0 === g.getChildrenSize() && g.remove(),
            (c -= d + k),
            (f = e);
        else {
          (function () {
            var _f$splitText, _f$splitText2;
            var q = f.getKey();
            e = a.getEditorState().read(function () {
              var m = require('Lexical').$getNodeByKey(q);
              return require('Lexical').$isTextNode(m) && m.isSimpleText()
                ? m.getTextContent()
                : null;
            });
            null !== e && e !== h
              ? ((c = require('Lexical').$getPreviousSelection()),
                (d = f),
                f.isSimpleText()
                  ? f.setTextContent(e)
                  : ((d = require('Lexical').$createTextNode(e)), f.replace(d)),
                require('Lexical').$isRangeSelection(c) &&
                  c.isCollapsed() &&
                  ((c = c.anchor.offset), d.select(c, c)))
              : f.isSimpleText()
              ? ((e = b.key === q),
                (k = b.offset),
                k < c && (k = d),
                (c = e ? k - c : 0),
                (d = e ? k : g),
                e && 0 === c
                  ? (((_f$splitText = f.splitText(c, d)),
                    (c = _f$splitText[0]),
                    _f$splitText),
                    c.remove())
                  : (((_f$splitText2 = f.splitText(c, d)),
                    (c = _f$splitText2[1]),
                    _f$splitText2),
                    c.remove()))
              : ((c = require('Lexical').$createTextNode(p)), f.replace(c));
            c = 0;
          })();
        }
      }
    };
  },
  null,
);
