__d(
  'LexicalClipboard.prod',
  [
    'Lexical',
    'LexicalHtml',
    'LexicalList',
    'LexicalSelection',
    'LexicalUtils',
    'Promise',
    'regeneratorRuntime',
  ],
  function $module_LexicalClipboard_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    function A(a) {
      throw Error(
        'Minified Lexical error #' +
          a +
          '; visit https://lexical.dev/docs/error?code=' +
          a +
          ' for the full message or ' +
          'use the non-minified dev environment for full errors and additional helpful warnings.',
      );
    }
    function B(a) {
      var b = require('Lexical').$getSelection();
      if (null == b) throw Error('Expected valid LexicalSelection');
      return (require('Lexical').$isRangeSelection(b) && b.isCollapsed()) ||
        0 === b.getNodes().length
        ? ''
        : require('LexicalHtml').$generateHtmlFromNodes(a, b);
    }
    function C(a) {
      var b = require('Lexical').$getSelection();
      if (null == b) throw Error('Expected valid LexicalSelection');
      return (require('Lexical').$isRangeSelection(b) && b.isCollapsed()) ||
        0 === b.getNodes().length
        ? null
        : JSON.stringify(D(a, b));
    }
    function E(a, b, c) {
      (require('Lexical').DEPRECATED_$isGridSelection(c) ||
        (null !==
          require('LexicalUtils').$findMatchingParent(
            c.anchor.getNode(),
            function (g) {
              return require('Lexical').DEPRECATED_$isGridCellNode(g);
            },
          ) &&
          null !==
            require('LexicalUtils').$findMatchingParent(
              c.focus.getNode(),
              function (g) {
                return require('Lexical').DEPRECATED_$isGridCellNode(g);
              },
            ))) &&
      1 === b.length &&
      require('Lexical').DEPRECATED_$isGridNode(b[0])
        ? F(b, c, !1, a)
        : I(b, c);
    }
    function I(a, b) {
      var _a;
      var c = [],
        g = null,
        e = null;
      for (var k = 0; k < a.length; k++) {
        var f = a[k];
        if (require('LexicalList').$isListItemNode(f)) {
          null == e &&
            ((e = require('LexicalList').$createListNode('bullet')), c.push(e));
          e.append(f);
          continue;
        } else null != e && (e = null);
        var h = require('Lexical').$isLineBreakNode(f);
        if (
          h ||
          (require('Lexical').$isDecoratorNode(f) && f.isInline()) ||
          (require('Lexical').$isElementNode(f) && f.isInline()) ||
          require('Lexical').$isTextNode(f)
        ) {
          if (
            null === g &&
            ((g = require('Lexical').$createParagraphNode()), c.push(g), h)
          )
            continue;
          null !== g && g.append(f);
        } else c.push(f), (g = null);
      }
      require('Lexical').$isRangeSelection(b)
        ? b.insertNodes(c)
        : require('Lexical').DEPRECATED_$isGridSelection(b) &&
          ((a = b.anchor.getNode()),
          require('Lexical').DEPRECATED_$isGridCellNode(a) || A(41),
          (_a = a).append.apply(_a, c));
    }
    function F(a, b, c, g) {
      (1 === a.length && require('Lexical').DEPRECATED_$isGridNode(a[0])) ||
        A(42);
      var e = a[0];
      a = e.getChildren();
      c = e.getFirstChildOrThrow().getChildrenSize();
      var k = e.getChildrenSize(),
        f = require('LexicalUtils').$findMatchingParent(
          b.anchor.getNode(),
          function (l) {
            return require('Lexical').DEPRECATED_$isGridCellNode(l);
          },
        );
      b =
        (e =
          f &&
          require('LexicalUtils').$findMatchingParent(f, function (l) {
            return require('Lexical').DEPRECATED_$isGridRowNode(l);
          })) &&
        require('LexicalUtils').$findMatchingParent(e, function (l) {
          return require('Lexical').DEPRECATED_$isGridNode(l);
        });
      (require('Lexical').DEPRECATED_$isGridCellNode(f) &&
        require('Lexical').DEPRECATED_$isGridRowNode(e) &&
        require('Lexical').DEPRECATED_$isGridNode(b)) ||
        A(43);
      var h = e.getIndexWithinParent(),
        p = Math.min(b.getChildrenSize() - 1, h + k - 1);
      k = f.getIndexWithinParent();
      f = Math.min(e.getChildrenSize() - 1, k + c - 1);
      c = Math.min(k, f);
      e = Math.min(h, p);
      k = Math.max(k, f);
      h = Math.max(h, p);
      p = b.getChildren();
      f = 0;
      var m, q;
      for (var l = e; l <= h; l++) {
        var x = p[l];
        require('Lexical').DEPRECATED_$isGridRowNode(x) || A(24);
        var y = a[f];
        require('Lexical').DEPRECATED_$isGridRowNode(y) || A(24);
        x = x.getChildren();
        y = y.getChildren();
        var G = 0;
        var _loop = function _loop(u) {
          var v = x[u];
          require('Lexical').DEPRECATED_$isGridCellNode(v) || A(25);
          var H = y[G];
          require('Lexical').DEPRECATED_$isGridCellNode(H) || A(25);
          l === e && u === c
            ? (m = v.getKey())
            : l === h && u === k && (q = v.getKey());
          var N = v.getChildren();
          H.getChildren().forEach(function (w) {
            require('Lexical').$isTextNode(w) &&
              require('Lexical').$createParagraphNode().append(w);
            v.append(w);
          });
          N.forEach(function (w) {
            return w.remove();
          });
          G++;
        };
        for (var u = c; u <= k; u++) {
          _loop(u);
        }
        f++;
      }
      m &&
        q &&
        ((a = require('Lexical').DEPRECATED_$createGridSelection()),
        a.set(b.getKey(), m, q),
        require('Lexical').$setSelection(a),
        g.dispatchCommand(require('Lexical').SELECTION_CHANGE_COMMAND, void 0));
    }
    function J(a, b, c, g) {
      if (g === void 0) {
        g = [];
      }
      var e = null != b ? c.isSelected() : !0,
        k = require('Lexical').$isElementNode(c) && c.excludeFromCopy('html');
      var f = c;
      if (null !== b) {
        var h = require('LexicalSelection').$cloneWithProperties(c);
        f = h =
          require('Lexical').$isTextNode(h) && null != b
            ? require('LexicalSelection').$sliceSelectedTextNodeContent(b, h)
            : h;
      }
      var p = require('Lexical').$isElementNode(f) ? f.getChildren() : [];
      var m = f;
      h = m.exportJSON();
      h.type !== m.constructor.getType() && A(58);
      var q = h.children;
      require('Lexical').$isElementNode(m) && (Array.isArray(q) || A(59));
      require('Lexical').$isTextNode(f) && (h.text = f.__text);
      for (f = 0; f < p.length; f++) {
        (m = p[f]),
          (q = J(a, b, m, h.children)),
          !e &&
            require('Lexical').$isElementNode(c) &&
            q &&
            c.extractWithChild(m, b, 'clone') &&
            (e = !0);
      }
      if (e && !k) g.push(h);
      else if (Array.isArray(h.children))
        for (a = 0; a < h.children.length; a++) {
          g.push(h.children[a]);
        }
      return e;
    }
    function D(a, b) {
      var c = [],
        g = require('Lexical').$getRoot().getChildren();
      for (var e = 0; e < g.length; e++) {
        J(a, b, g[e], c);
      }
      return { namespace: a._config.namespace, nodes: c };
    }
    function K(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var g = require('Lexical').$parseSerializedNode(a[c]);
        require('Lexical').$isTextNode(g) &&
          require('LexicalSelection').$addNodeStyle(g);
        b.push(g);
      }
      return b;
    }
    var L = null;
    function M(a, b) {
      b.preventDefault();
      b = b.clipboardData;
      if (null === b) return !1;
      var c = require('Lexical').$getSelection(),
        g = B(a);
      a = C(a);
      var e = '';
      null !== c && (e = c.getTextContent());
      null !== g && b.setData('text/html', g);
      null !== a && b.setData('application/x-lexical-editor', a);
      b.setData('text/plain', e);
      return !0;
    }
    exports.$generateJSONFromSelectedNodes = D;
    exports.$generateNodesFromSerializedNodes = K;
    exports.$getHtmlContent = B;
    exports.$getLexicalContent = C;
    exports.$insertDataTransferForPlainText = function (a, b) {
      a = a.getData('text/plain');
      null != a && b.insertRawText(a);
    };
    exports.$insertDataTransferForRichText = function (a, b, c) {
      var g = a.getData('application/x-lexical-editor');
      if (g)
        try {
          var k = JSON.parse(g);
          if (k.namespace === c._config.namespace && Array.isArray(k.nodes)) {
            var f = K(k.nodes);
            return E(c, f, b);
          }
        } catch (_unused) {}
      if ((g = a.getData('text/html')))
        try {
          var e = new DOMParser().parseFromString(g, 'text/html');
          var _k = require('LexicalHtml').$generateNodesFromDOM(c, e);
          return E(c, _k, b);
        } catch (_unused2) {}
      a = a.getData('text/plain');
      if (null != a)
        if (require('Lexical').$isRangeSelection(b))
          for (a = a.split(/\r?\n/), c = a.length, e = 0; e < c; e++) {
            b.insertText(a[e]), e < c - 1 && b.insertParagraph();
          }
        else b.insertRawText(a);
    };
    exports.$insertGeneratedNodes = E;
    exports.copyToClipboard__EXPERIMENTAL = function _callee(a, b) {
      var c, g, e;
      return require('regeneratorRuntime').async(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                if (!(null !== L)) {
                  _context.next = 2;
                  break;
                }
                return _context.abrupt('return', !1);
              case 2:
                if (!(null !== b)) {
                  _context.next = 4;
                  break;
                }
                return _context.abrupt(
                  'return',
                  new (require('Promise'))(function (k) {
                    a.update(function () {
                      k(M(a, b));
                    });
                  }),
                );
              case 4:
                c = a.getRootElement();
                g = document.getSelection();
                if (!(null === c || null === g)) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt('return', !1);
              case 8:
                e = document.createElement('span');
                e.style.cssText = 'position: fixed; top: -1000px;';
                e.append(document.createTextNode('#'));
                c.append(e);
                c = new Range();
                c.setStart(e, 0);
                c.setEnd(e, 1);
                g.removeAllRanges();
                g.addRange(c);
                return _context.abrupt(
                  'return',
                  new (require('Promise'))(function (k) {
                    var f = a.registerCommand(
                      require('Lexical').COPY_COMMAND,
                      function (h) {
                        h instanceof ClipboardEvent &&
                          (f(),
                          null !== L && (window.clearTimeout(L), (L = null)),
                          k(M(a, h)));
                        return !0;
                      },
                      require('Lexical').COMMAND_PRIORITY_CRITICAL,
                    );
                    L = window.setTimeout(function () {
                      f();
                      L = null;
                      k(!1);
                    }, 50);
                    document.execCommand('copy');
                    e.remove();
                  }),
                );
              case 18:
              case 'end':
                return _context.stop();
            }
          }
        },
        null,
        this,
      );
    };
  },
  null,
);
