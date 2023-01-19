__d(
  'LexicalUtils.prod',
  ['Lexical', 'Promise'],
  function $module_LexicalUtils_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    function p(a) {
      throw Error(
        'Minified Lexical error #' +
          a +
          '; visit https://lexical.dev/docs/error?code=' +
          a +
          ' for the full message or ' +
          'use the non-minified dev environment for full errors and additional helpful warnings.',
      );
    }
    function q(a, b) {
      for (
        var _iterator = b,
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
        if (a.type.startsWith(c)) return !0;
      }
      return !1;
    }
    function r(a, b) {
      for (; a !== require('Lexical').$getRoot() && null != a; ) {
        if (b(a)) return a;
        a = a.getParent();
      }
      return null;
    }
    function t(a, b) {
      var c = a.getChildAtIndex(b);
      null == c && (c = a);
      require('Lexical').$isRootOrShadowRoot(a) && p(102);
      var e = function e(f) {
          var m = f.getParentOrThrow(),
            l = require('Lexical').$isRootOrShadowRoot(m),
            k = f !== c || l ? require('Lexical').$copyNode(f) : f;
          if (l) return f.insertAfter(k), [f, k, k];
          var _e2 = e(m),
            n = _e2[0],
            u = _e2[1],
            v = _e2[2];
          f = f.getNextSiblings();
          v.append.apply(v, [k].concat(f));
          return [n, u, k];
        },
        _e = e(c),
        d = _e[0],
        g = _e[1];
      return [d, g];
    }
    exports.$dfs = function (a, b) {
      var c = [];
      a = (a || require('Lexical').$getRoot()).getLatest();
      b =
        b || (require('Lexical').$isElementNode(a) ? a.getLastDescendant() : a);
      for (var e = a, d = 0; null !== (e = e.getParent()); ) {
        d++;
      }
      for (e = d; null !== a && !a.is(b); ) {
        if (
          (c.push({ depth: e, node: a }),
          require('Lexical').$isElementNode(a) && 0 < a.getChildrenSize())
        )
          (a = a.getFirstChild()), e++;
        else
          for (d = null; null === d && null !== a; ) {
            (d = a.getNextSibling()),
              null === d ? ((a = a.getParent()), e--) : (a = d);
          }
      }
      null !== a && a.is(b) && c.push({ depth: e, node: a });
      return c;
    };
    exports.$findMatchingParent = r;
    exports.$getNearestBlockElementAncestorOrThrow = function (a) {
      a = r(a, function (b) {
        return require('Lexical').$isElementNode(b) && !b.isInline();
      });
      require('Lexical').$isElementNode(a) || p(4);
      return a;
    };
    exports.$getNearestNodeOfType = function (a, b) {
      for (; null != a; ) {
        if (a instanceof b) return a;
        a = a.getParent();
      }
      return null;
    };
    exports.$insertNodeToNearestRoot = function (a) {
      var b = require('Lexical').$getSelection();
      if (require('Lexical').$isRangeSelection(b)) {
        var _b = b,
          c = _b.focus;
        b = c.getNode();
        c = c.offset;
        if (require('Lexical').$isRootOrShadowRoot(b))
          (c = b.getChildAtIndex(c)),
            null == c ? b.append(a) : c.insertBefore(a),
            a.selectNext();
        else {
          var e, d;
          require('Lexical').$isTextNode(b)
            ? ((e = b.getParentOrThrow()),
              (d = b.getIndexWithinParent()),
              0 < c && ((d += 1), b.splitText(c)))
            : ((e = b), (d = c));
          var _t = t(e, d);
          b = _t[1];
          b.insertBefore(a);
          b.selectStart();
        }
      } else
        require('Lexical').$isNodeSelection(b) ||
        require('Lexical').DEPRECATED_$isGridSelection(b)
          ? ((b = b.getNodes()),
            b[b.length - 1].getTopLevelElementOrThrow().insertAfter(a))
          : require('Lexical').$getRoot().append(a),
          (b = require('Lexical').$createParagraphNode()),
          a.insertAfter(b),
          b.select();
      return a.getLatest();
    };
    exports.$restoreEditorState = function (a, b) {
      var c = new Map(b._nodeMap),
        e = a._pendingEditorState;
      e && (e._nodeMap = c);
      a._dirtyType = 2;
      a = b._selection;
      require('Lexical').$setSelection(null === a ? null : a.clone());
    };
    exports.$splitNode = t;
    exports.$wrapNodeInElement = function (a, b) {
      b = b();
      a.replace(b);
      b.append(a);
      return b;
    };
    exports.addClassNamesToElement = function (a) {
      for (
        var _len = arguments.length,
          b = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        b[_key - 1] = arguments[_key];
      }
      b.forEach(function (c) {
        var _a$classList;
        'string' === typeof c &&
          ((c = c.split(' ').filter(function (e) {
            return '' !== e;
          })),
          (_a$classList = a.classList).add.apply(_a$classList, c));
      });
    };
    exports.isMimeType = q;
    exports.mediaFileReader = function (a, b) {
      var c =
        a[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
      return new (require('Promise'))(function (e, d) {
        var g = [],
          f = function f() {
            var _c$next = c.next(),
              m = _c$next.done,
              l = _c$next.value;
            if (m) return e(g);
            var k = new FileReader();
            k.addEventListener('error', d);
            k.addEventListener('load', function () {
              var n = k.result;
              'string' === typeof n && g.push({ file: l, result: n });
              f();
            });
            q(l, b) ? k.readAsDataURL(l) : f();
          };
        f();
      });
    };
    exports.mergeRegister = function () {
      for (
        var _len2 = arguments.length, a = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        a[_key2] = arguments[_key2];
      }
      return function () {
        a.forEach(function (b) {
          return b();
        });
      };
    };
    exports.registerNestedElementResolver = function (a, b, c, e) {
      return a.registerNodeTransform(b, function (d) {
        a: {
          var g = d.getChildren();
          for (var f = 0; f < g.length; f++) {
            if (g[f] instanceof b) {
              g = null;
              break a;
            }
          }
          for (g = d; null !== g; ) {
            if (((f = g), (g = g.getParent()), g instanceof b)) {
              g = { child: f, parent: g };
              break a;
            }
          }
          g = null;
        }
        if (null !== g) {
          var _g = g,
            m = _g.child,
            l = _g.parent;
          if (m.is(d)) {
            e(l, d);
            d = m.getNextSiblings();
            g = d.length;
            l.insertAfter(m);
            if (0 !== g) {
              f = c(l);
              m.insertAfter(f);
              for (var k = 0; k < g; k++) {
                f.append(d[k]);
              }
            }
            l.canBeEmpty() || 0 !== l.getChildrenSize() || l.remove();
          }
        }
      });
    };
    exports.removeClassNamesFromElement = function (a) {
      for (
        var _len3 = arguments.length,
          b = new Array(_len3 > 1 ? _len3 - 1 : 0),
          _key3 = 1;
        _key3 < _len3;
        _key3++
      ) {
        b[_key3 - 1] = arguments[_key3];
      }
      b.forEach(function (c) {
        var _a$classList2;
        'string' === typeof c &&
          (_a$classList2 = a.classList).remove.apply(
            _a$classList2,
            c.split(' '),
          );
      });
    };
  },
  null,
);
