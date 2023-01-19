__d(
  'LexicalList.prod',
  ['Lexical', 'LexicalUtils'],
  function $module_LexicalList_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    var Lexical;
    function m(a) {
      throw Error(
        'Minified Lexical error #' +
          a +
          '; visit https://lexical.dev/docs/error?code=' +
          a +
          ' for the full message or ' +
          'use the non-minified dev environment for full errors and additional helpful warnings.',
      );
    }
    function n(a) {
      var b = 1;
      for (a = a.getParent(); null != a; ) {
        if (p(a)) {
          a = a.getParent();
          if (q(a)) {
            b++;
            a = a.getParent();
            continue;
          }
          m(40);
        }
        break;
      }
      return b;
    }
    function r(a) {
      a = a.getParent();
      q(a) || m(40);
      var b = a;
      for (; null !== b; ) {
        (b = b.getParent()), q(b) && (a = b);
      }
      return a;
    }
    function t(a) {
      var b = [];
      a = a.getChildren().filter(p);
      for (var c = 0; c < a.length; c++) {
        var d = a[c],
          e = d.getFirstChild();
        q(e) ? (b = b.concat(t(e))) : b.push(d);
      }
      return b;
    }
    function u(a) {
      return p(a) && q(a.getFirstChild());
    }
    function v(a) {
      for (; null == a.getNextSibling() && null == a.getPreviousSibling(); ) {
        var b = a.getParent();
        if (null == b || (!p(a) && !q(a))) break;
        a = b;
      }
      a.remove();
    }
    function w(a) {
      return z().append(a);
    }
    function A(a, b) {
      return (
        p(a) &&
        (0 === b.length ||
          (1 === b.length && a.is(b[0]) && 0 === a.getChildrenSize()))
      );
    }
    function C(a, b) {
      a.splice(a.getChildrenSize(), 0, b);
    }
    function D(a, b) {
      if (q(a)) return a;
      var c = a.getPreviousSibling(),
        d = a.getNextSibling(),
        e = z();
      e.setFormat(a.getFormatType());
      e.setIndent(a.getIndent());
      C(e, a.getChildren());
      if (q(c) && b === c.getListType())
        return (
          c.append(e),
          a.remove(),
          q(d) && b === d.getListType() && (C(c, d.getChildren()), d.remove()),
          c
        );
      if (q(d) && b === d.getListType())
        return d.getFirstChildOrThrow().insertBefore(e), a.remove(), d;
      b = E(b);
      b.append(e);
      a.replace(b);
      F(b);
      return b;
    }
    function F(a, b) {
      a = b || a.getChildren();
      if (void 0 !== a)
        for (b = 0; b < a.length; b++) {
          var f = a[b];
          if (p(f)) {
            var g = f.getValue();
            var c = f,
              d = c.getParent(),
              e = 1;
            null != d && (q(d) ? (e = d.getStart()) : m(44));
            c = c.getPreviousSiblings();
            for (d = 0; d < c.length; d++) {
              var l = c[d];
              p(l) && !q(l.getFirstChild()) && e++;
            }
            g !== e && f.setValue(e);
          }
        }
    }
    function G(a) {
      var b = new Set();
      a.forEach(function (c) {
        if (!u(c) && !b.has(c.getKey())) {
          var d = c.getParent(),
            e = c.getNextSibling(),
            f = c.getPreviousSibling();
          if (u(e) && u(f))
            (f = f.getFirstChild()),
              q(f) &&
                (f.append(c),
                (c = e.getFirstChild()),
                q(c) &&
                  ((c = c.getChildren()),
                  C(f, c),
                  e.remove(),
                  b.add(e.getKey())),
                F(f));
          else if (u(e))
            (e = e.getFirstChild()),
              q(e) &&
                ((f = e.getFirstChild()),
                null !== f && f.insertBefore(c),
                F(e));
          else if (u(f)) (e = f.getFirstChild()), q(e) && (e.append(c), F(e));
          else if (q(d)) {
            var g = z(),
              l = E(d.getListType());
            g.append(l);
            l.append(c);
            f ? f.insertAfter(g) : e ? e.insertBefore(g) : d.append(g);
          }
          q(d) && F(d);
        }
      });
    }
    function H(a) {
      a.forEach(function (b) {
        if (!u(b)) {
          var c = b.getParent(),
            d = c ? c.getParent() : void 0,
            e = d ? d.getParent() : void 0;
          if (q(e) && p(d) && q(c)) {
            var f = c ? c.getFirstChild() : void 0,
              g = c ? c.getLastChild() : void 0;
            if (b.is(f)) d.insertBefore(b), c.isEmpty() && d.remove();
            else if (b.is(g)) d.insertAfter(b), c.isEmpty() && d.remove();
            else {
              var l = c.getListType();
              f = z();
              var x = E(l);
              f.append(x);
              b.getPreviousSiblings().forEach(function (y) {
                return x.append(y);
              });
              g = z();
              l = E(l);
              g.append(l);
              C(l, b.getNextSiblings());
              d.insertBefore(f);
              d.insertAfter(g);
              d.replace(b);
            }
            F(c);
            F(e);
          }
        }
      });
    }
    function I(a) {
      var b = require('Lexical').$getSelection();
      if (require('Lexical').$isRangeSelection(b)) {
        var c = b.getNodes(),
          d = [];
        0 === c.length && c.push(b.anchor.getNode());
        if (1 === c.length) {
          a: {
            for (c = c[0]; null !== c; ) {
              if (p(c)) break a;
              c = c.getParent();
            }
            c = null;
          }
          null !== c && (d = [c]);
        } else {
          d = new Set();
          for (b = 0; b < c.length; b++) {
            var e = c[b];
            p(e) && d.add(e);
          }
          d = Array.from(d);
        }
        0 < d.length && ('indent' === a ? G(d) : H(d));
      }
    }
    var J = (function (_h$ElementNode) {
      babelHelpers.inheritsLoose(J, _h$ElementNode);
      J.getType = function getType() {
        return 'listitem';
      };
      J.clone = function clone(a) {
        return new J(a.__value, a.__checked, a.__key);
      };
      function J(a, b, c) {
        var _this;
        _this = _h$ElementNode.call(this, c) || this;
        _this.__value = void 0 === a ? 1 : a;
        _this.__checked = b;
        return _this;
      }
      var _proto = J.prototype;
      _proto.createDOM = function createDOM(a) {
        var b = document.createElement('li'),
          c = this.getParent();
        q(c) && (F(c), K(b, this, null, c));
        b.value = this.__value;
        L(b, a.theme, this);
        return b;
      };
      _proto.updateDOM = function updateDOM(a, b, c) {
        var d = this.getParent();
        q(d) && (F(d), K(b, this, a, d));
        b.value = this.__value;
        L(b, c.theme, this);
        return !1;
      };
      J.importDOM = function importDOM() {
        return {
          li: function li() {
            return { conversion: M, priority: 0 };
          },
        };
      };
      J.importJSON = function importJSON(a) {
        var b = new J(a.value, a.checked);
        b.setFormat(a.format);
        b.setIndent(a.indent);
        b.setDirection(a.direction);
        return b;
      };
      _proto.exportJSON = function exportJSON() {
        return babelHelpers['extends'](
          {},
          _h$ElementNode.prototype.exportJSON.call(this),
          {
            checked: this.getChecked(),
            type: 'listitem',
            value: this.getValue(),
            version: 1,
          },
        );
      };
      _proto.append = function append() {
        for (var b = 0; b < arguments.length; b++) {
          var c = b < 0 || arguments.length <= b ? undefined : arguments[b];
          if (require('Lexical').$isElementNode(c) && this.canMergeWith(c)) {
            var d = c.getChildren();
            this.append.apply(this, d);
            c.remove();
          } else _h$ElementNode.prototype.append.call(this, c);
        }
        return this;
      };
      _proto.replace = function replace(a, b) {
        if (p(a)) return _h$ElementNode.prototype.replace.call(this, a);
        var c = this.getParentOrThrow();
        if (q(c)) {
          var d = c.getChildrenKeys();
          var f = d.length;
          var e = d.indexOf(this.__key);
          if (0 === e) c.insertBefore(a);
          else if (e === f - 1) c.insertAfter(a);
          else {
            d = E(c.getListType());
            var g = c.getChildren();
            for (e += 1; e < f; e++) {
              d.append(g[e]);
            }
            c.insertAfter(a);
            a.insertAfter(d);
          }
          b &&
            this.getChildren().forEach(function (g) {
              a.append(g);
            });
          this.remove();
          1 === f && c.remove();
        }
        return a;
      };
      _proto.insertAfter = function insertAfter(a, b) {
        if (b === void 0) {
          b = !0;
        }
        var c = this.getParentOrThrow();
        q(c) || m(39);
        var d = this.getNextSiblings();
        if (p(a))
          return (
            (b = _h$ElementNode.prototype.insertAfter.call(this, a, b)),
            (a = a.getParentOrThrow()),
            q(a) && F(a),
            b
          );
        if (q(a) && a.getListType() === c.getListType()) {
          c = a;
          a = a.getChildren();
          for (d = a.length - 1; 0 <= d; d--) {
            (c = a[d]), this.insertAfter(c, b);
          }
          return c;
        }
        c.insertAfter(a, b);
        if (0 !== d.length) {
          var e = E(c.getListType());
          d.forEach(function (f) {
            return e.append(f);
          });
          a.insertAfter(e, b);
        }
        return a;
      };
      _proto.remove = function remove(a) {
        var b = this.getNextSibling();
        _h$ElementNode.prototype.remove.call(this, a);
        null !== b && ((a = b.getParent()), q(a) && F(a));
      };
      _proto.insertNewAfter = function insertNewAfter(a, b) {
        if (b === void 0) {
          b = !0;
        }
        a = z(null == this.__checked ? void 0 : !1);
        this.insertAfter(a, b);
        return a;
      };
      _proto.collapseAtStart = function collapseAtStart(a) {
        var b = require('Lexical').$createParagraphNode();
        this.getChildren().forEach(function (f) {
          return b.append(f);
        });
        var c = this.getParentOrThrow(),
          d = c.getParentOrThrow();
        var e = p(d);
        1 === c.getChildrenSize()
          ? e
            ? (c.remove(), d.select())
            : (c.insertBefore(b),
              c.remove(),
              (c = a.anchor),
              (a = a.focus),
              (d = b.getKey()),
              'element' === c.type &&
                c.getNode().is(this) &&
                c.set(d, c.offset, 'element'),
              'element' === a.type &&
                a.getNode().is(this) &&
                a.set(d, a.offset, 'element'))
          : (c.insertBefore(b), this.remove());
        return !0;
      };
      _proto.getValue = function getValue() {
        return this.getLatest().__value;
      };
      _proto.setValue = function setValue(a) {
        this.getWritable().__value = a;
      };
      _proto.getChecked = function getChecked() {
        return this.getLatest().__checked;
      };
      _proto.setChecked = function setChecked(a) {
        this.getWritable().__checked = a;
      };
      _proto.toggleChecked = function toggleChecked() {
        this.setChecked(!this.__checked);
      };
      _proto.getIndent = function getIndent() {
        var a = this.getParent();
        if (null === a) return this.getLatest().__indent;
        a = a.getParentOrThrow();
        var b = 0;
        for (; p(a); ) {
          (a = a.getParentOrThrow().getParentOrThrow()), b++;
        }
        return b;
      };
      _proto.setIndent = function setIndent(a) {
        var b = this.getIndent();
        for (; b !== a; ) {
          b < a ? (G([this]), b++) : (H([this]), b--);
        }
        return this;
      };
      _proto.canIndent = function canIndent() {
        return !1;
      };
      _proto.insertBefore = function insertBefore(a) {
        if (p(a)) {
          var b = this.getParentOrThrow();
          if (q(b)) {
            var c = this.getNextSiblings();
            F(b, c);
          }
        }
        return _h$ElementNode.prototype.insertBefore.call(this, a);
      };
      _proto.canInsertAfter = function canInsertAfter(a) {
        return p(a);
      };
      _proto.canReplaceWith = function canReplaceWith(a) {
        return p(a);
      };
      _proto.canMergeWith = function canMergeWith(a) {
        return require('Lexical').$isParagraphNode(a) || p(a);
      };
      _proto.extractWithChild = function extractWithChild(a, b) {
        if (!require('Lexical').$isRangeSelection(b)) return !1;
        a = b.anchor.getNode();
        var c = b.focus.getNode();
        return (
          this.isParentOf(a) &&
          this.isParentOf(c) &&
          this.getTextContent().length === b.getTextContent().length
        );
      };
      return J;
    })((Lexical = require('Lexical')).ElementNode);
    function L(a, b, c) {
      var d = [],
        e = [];
      var f = (b = b.list) ? b.listitem : void 0;
      if (b && b.nested) var g = b.nested.listitem;
      void 0 !== f && ((f = f.split(' ')), d.push.apply(d, f));
      if (b) {
        f = c.getParent();
        f = q(f) && 'check' === f.getListType();
        var l = c.getChecked();
        (f && !l) || e.push(b.listitemUnchecked);
        (f && l) || e.push(b.listitemChecked);
        f && d.push(l ? b.listitemChecked : b.listitemUnchecked);
      }
      void 0 !== g &&
        ((g = g.split(' ')),
        c.getChildren().some(function (l) {
          return q(l);
        })
          ? d.push.apply(d, g)
          : e.push.apply(e, g));
      0 < e.length &&
        require('LexicalUtils').removeClassNamesFromElement.apply(
          require('LexicalUtils'),
          [a].concat(e),
        );
      0 < d.length &&
        require('LexicalUtils').addClassNamesToElement.apply(
          require('LexicalUtils'),
          [a].concat(d),
        );
    }
    function K(a, b, c, d) {
      'check' === d.getListType()
        ? q(b.getFirstChild())
          ? (a.removeAttribute('role'),
            a.removeAttribute('tabIndex'),
            a.removeAttribute('aria-checked'))
          : (a.setAttribute('role', 'checkbox'),
            a.setAttribute('tabIndex', '-1'),
            (c && b.__checked === c.__checked) ||
              a.setAttribute('aria-checked', b.getChecked() ? 'true' : 'false'))
        : null != b.getChecked() && b.setChecked(void 0);
    }
    function M(a) {
      a = a instanceof HTMLElement && 'true' === a.getAttribute('aria-checked');
      return { node: z(a) };
    }
    function z(a) {
      return require('Lexical').$applyNodeReplacement(new J(void 0, a));
    }
    function p(a) {
      return a instanceof J;
    }
    var N = (function (_h$ElementNode2) {
      babelHelpers.inheritsLoose(N, _h$ElementNode2);
      N.getType = function getType() {
        return 'list';
      };
      N.clone = function clone(a) {
        return new N(a.__listType || O[a.__tag], a.__start, a.__key);
      };
      function N(a, b, c) {
        var _this2;
        _this2 = _h$ElementNode2.call(this, c) || this;
        _this2.__listType = a = O[a] || a;
        _this2.__tag = 'number' === a ? 'ol' : 'ul';
        _this2.__start = b;
        return _this2;
      }
      var _proto2 = N.prototype;
      _proto2.getTag = function getTag() {
        return this.__tag;
      };
      _proto2.getListType = function getListType() {
        return this.__listType;
      };
      _proto2.getStart = function getStart() {
        return this.__start;
      };
      _proto2.createDOM = function createDOM(a) {
        var b = document.createElement(this.__tag);
        1 !== this.__start && b.setAttribute('start', String(this.__start));
        b.__lexicalListType = this.__listType;
        P(b, a.theme, this);
        return b;
      };
      _proto2.updateDOM = function updateDOM(a, b, c) {
        if (a.__tag !== this.__tag) return !0;
        P(b, c.theme, this);
        return !1;
      };
      N.importDOM = function importDOM() {
        return {
          ol: function ol() {
            return { conversion: Q, priority: 0 };
          },
          ul: function ul() {
            return { conversion: Q, priority: 0 };
          },
        };
      };
      N.importJSON = function importJSON(a) {
        var b = E(a.listType, a.start);
        b.setFormat(a.format);
        b.setIndent(a.indent);
        b.setDirection(a.direction);
        return b;
      };
      _proto2.exportDOM = function exportDOM() {
        var a = document.createElement(this.__tag);
        1 !== this.__start && a.setAttribute('start', String(this.__start));
        'check' === this.__listType &&
          a.setAttribute('__lexicalListType', 'check');
        return { element: a };
      };
      _proto2.exportJSON = function exportJSON() {
        return babelHelpers['extends'](
          {},
          _h$ElementNode2.prototype.exportJSON.call(this),
          {
            listType: this.getListType(),
            start: this.getStart(),
            tag: this.getTag(),
            type: 'list',
            version: 1,
          },
        );
      };
      _proto2.canBeEmpty = function canBeEmpty() {
        return !1;
      };
      _proto2.canIndent = function canIndent() {
        return !1;
      };
      _proto2.append = function append() {
        for (var c = 0; c < arguments.length; c++) {
          var b = c < 0 || arguments.length <= c ? undefined : arguments[c];
          if (p(b)) _h$ElementNode2.prototype.append.call(this, b);
          else {
            var d = z();
            q(b)
              ? d.append(b)
              : require('Lexical').$isElementNode(b)
              ? ((b = require('Lexical').$createTextNode(b.getTextContent())),
                d.append(b))
              : d.append(b);
            _h$ElementNode2.prototype.append.call(this, d);
          }
        }
        return this;
      };
      _proto2.extractWithChild = function extractWithChild(a) {
        return p(a);
      };
      return N;
    })(Lexical.ElementNode);
    function P(a, b, c) {
      var d = [],
        e = [];
      var f = b.list;
      if (void 0 !== f) {
        var l = f[c.__tag + 'Depth'] || [];
        b = n(c) - 1;
        var x = b % l.length;
        var g = l[x];
        var y = f[c.__tag],
          B;
        f = f.nested;
        void 0 !== f && f.list && (B = f.list);
        void 0 !== y && d.push(y);
        if (void 0 !== g)
          for (g = g.split(' '), d.push.apply(d, g), g = 0; g < l.length; g++) {
            g !== x && e.push(c.__tag + g);
          }
        void 0 !== B &&
          ((c = B.split(' ')), 1 < b ? d.push.apply(d, c) : e.push.apply(e, c));
      }
      0 < e.length &&
        require('LexicalUtils').removeClassNamesFromElement.apply(
          require('LexicalUtils'),
          [a].concat(e),
        );
      0 < d.length &&
        require('LexicalUtils').addClassNamesToElement.apply(
          require('LexicalUtils'),
          [a].concat(d),
        );
    }
    function R(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        p(d)
          ? (b.push(d),
            d.getChildren().forEach(function (e) {
              q(e) && b.push(w(e));
            }))
          : b.push(w(d));
      }
      return b;
    }
    function Q(a) {
      var b = a.nodeName.toLowerCase(),
        c = null;
      'ol' === b
        ? (c = E('number'))
        : 'ul' === b &&
          (c =
            a instanceof HTMLElement &&
            'check' === a.getAttribute('__lexicallisttype')
              ? E('check')
              : E('bullet'));
      return { after: R, node: c };
    }
    var O = { ol: 'number', ul: 'bullet' };
    function E(a, b) {
      if (b === void 0) {
        b = 1;
      }
      return require('Lexical').$applyNodeReplacement(new N(a, b));
    }
    function q(a) {
      return a instanceof N;
    }
    var S = Lexical.createCommand('INSERT_UNORDERED_LIST_COMMAND'),
      T = Lexical.createCommand('INSERT_ORDERED_LIST_COMMAND'),
      U = Lexical.createCommand('INSERT_CHECK_LIST_COMMAND'),
      V = Lexical.createCommand('REMOVE_LIST_COMMAND');
    exports.$createListItemNode = z;
    exports.$createListNode = E;
    exports.$getListDepth = n;
    exports.$handleListInsertParagraph = function () {
      var a = require('Lexical').$getSelection();
      if (!require('Lexical').$isRangeSelection(a) || !a.isCollapsed())
        return !1;
      a = a.anchor.getNode();
      if (!p(a) || '' !== a.getTextContent()) return !1;
      var b = r(a),
        c = a.getParent();
      q(c) || m(40);
      var d = c.getParent(),
        e;
      if (require('Lexical').$isRootOrShadowRoot(d))
        (e = require('Lexical').$createParagraphNode()), b.insertAfter(e);
      else if (p(d)) (e = z()), d.insertAfter(e);
      else return !1;
      e.select();
      b = a.getNextSiblings();
      if (0 < b.length) {
        var f = E(c.getListType());
        require('Lexical').$isParagraphNode(e)
          ? e.insertAfter(f)
          : ((c = z()), c.append(f), e.insertAfter(c));
        b.forEach(function (g) {
          g.remove();
          f.append(g);
        });
      }
      v(a);
      return !0;
    };
    exports.$isListItemNode = p;
    exports.$isListNode = q;
    exports.INSERT_CHECK_LIST_COMMAND = U;
    exports.INSERT_ORDERED_LIST_COMMAND = T;
    exports.INSERT_UNORDERED_LIST_COMMAND = S;
    exports.ListItemNode = J;
    exports.ListNode = N;
    exports.REMOVE_LIST_COMMAND = V;
    exports.indentList = function () {
      I('indent');
    };
    exports.insertList = function (a, b) {
      a.update(function () {
        var c = require('Lexical').$getSelection();
        if (
          require('Lexical').$isRangeSelection(c) ||
          require('Lexical').DEPRECATED_$isGridSelection(c)
        ) {
          var d = c.getNodes();
          c = c.anchor.getNode();
          var e = c.getParent();
          if (A(c, d))
            (d = E(b)),
              require('Lexical').$isRootOrShadowRoot(e)
                ? (c.replace(d),
                  (e = z()),
                  require('Lexical').$isElementNode(c) &&
                    (e.setFormat(c.getFormatType()),
                    e.setIndent(c.getIndent())),
                  d.append(e))
                : p(c) &&
                  ((c = c.getParentOrThrow()),
                  C(d, c.getChildren()),
                  c.replace(d));
          else
            for (c = new Set(), e = 0; e < d.length; e++) {
              var f = d[e];
              if (
                require('Lexical').$isElementNode(f) &&
                f.isEmpty() &&
                !c.has(f.getKey())
              )
                D(f, b);
              else if (require('Lexical').$isLeafNode(f))
                for (f = f.getParent(); null != f; ) {
                  var l = f.getKey();
                  if (q(f)) {
                    if (!c.has(l)) {
                      var g = E(b);
                      C(g, f.getChildren());
                      f.replace(g);
                      F(g);
                      c.add(l);
                    }
                    break;
                  } else {
                    g = f.getParent();
                    if (
                      require('Lexical').$isRootOrShadowRoot(g) &&
                      !c.has(l)
                    ) {
                      c.add(l);
                      D(f, b);
                      break;
                    }
                    f = g;
                  }
                }
            }
        }
      });
    };
    exports.outdentList = function () {
      I('outdent');
    };
    exports.removeList = function (a) {
      a.update(function () {
        var b = require('Lexical').$getSelection();
        if (require('Lexical').$isRangeSelection(b)) {
          var c = new Set(),
            d = b.getNodes(),
            e = b.anchor.getNode();
          if (A(e, d)) c.add(r(e));
          else
            for (e = 0; e < d.length; e++) {
              var f = d[e];
              require('Lexical').$isLeafNode(f) &&
                ((f = require('LexicalUtils').$getNearestNodeOfType(f, J)),
                null != f && c.add(r(f)));
            }
          for (
            var _iterator = c,
              _isArray = Array.isArray(_iterator),
              _i = 0,
              _iterator = _isArray
                ? _iterator
                : _iterator[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
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
            var g = _ref;
            c = g;
            d = t(g);
            for (
              var _iterator2 = d,
                _isArray2 = Array.isArray(_iterator2),
                _i2 = 0,
                _iterator2 = _isArray2
                  ? _iterator2
                  : _iterator2[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var _ref2;
              if (_isArray2) {
                if (_i2 >= _iterator2.length) break;
                _ref2 = _iterator2[_i2++];
              } else {
                _i2 = _iterator2.next();
                if (_i2.done) break;
                _ref2 = _i2.value;
              }
              var l = _ref2;
              (d = require('Lexical').$createParagraphNode()),
                C(d, l.getChildren()),
                c.insertAfter(d),
                (c = d),
                l.__key === b.anchor.key &&
                  b.anchor.set(d.getKey(), 0, 'element'),
                l.__key === b.focus.key &&
                  b.focus.set(d.getKey(), 0, 'element'),
                l.remove();
            }
            g.remove();
          }
        }
      });
    };
  },
  null,
);
