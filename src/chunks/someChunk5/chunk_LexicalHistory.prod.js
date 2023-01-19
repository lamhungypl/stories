__d(
  'LexicalHistory.prod',
  ['Lexical', 'LexicalUtils'],
  function $module_LexicalHistory_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    function v(b, a, m, k, p) {
      if (null === b || (0 === m.size && 0 === k.size && !p)) return 0;
      var f = a._selection,
        c = b._selection;
      if (p) return 1;
      if (
        !(
          require('Lexical').$isRangeSelection(f) &&
          require('Lexical').$isRangeSelection(c) &&
          c.isCollapsed() &&
          f.isCollapsed()
        )
      )
        return 0;
      p = a._nodeMap;
      var e = [];
      for (
        var _iterator = m,
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
        var g = _ref;
        (m = p.get(g)), void 0 !== m && e.push(m);
      }
      for (
        var _iterator2 = k,
          _isArray2 = Array.isArray(_iterator2),
          _i2 = 0,
          _iterator2 = _isArray2
            ? _iterator2
            : _iterator2[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var _ref3;
        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref3 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref3 = _i2.value;
        }
        var _ref4 = _ref3;
        var _g = _ref4[0];
        var n = _ref4[1];
        n &&
          ((k = p.get(_g)),
          void 0 === k || require('Lexical').$isRootNode(k) || e.push(k));
      }
      if (0 === e.length) return 0;
      if (1 < e.length)
        return (
          (k = a._nodeMap),
          (a = k.get(f.anchor.key)),
          (c = k.get(c.anchor.key)),
          a &&
          c &&
          !b._nodeMap.has(a.__key) &&
          require('Lexical').$isTextNode(a) &&
          1 === a.__text.length &&
          1 === f.anchor.offset
            ? 2
            : 0
        );
      a = e[0];
      b = b._nodeMap.get(a.__key);
      if (
        !require('Lexical').$isTextNode(b) ||
        !require('Lexical').$isTextNode(a) ||
        b.__mode !== a.__mode
      )
        return 0;
      b = b.__text;
      a = a.__text;
      if (b === a) return 0;
      f = f.anchor;
      c = c.anchor;
      if (f.key !== c.key || 'text' !== f.type) return 0;
      f = f.offset;
      c = c.offset;
      b = a.length - b.length;
      return 1 === b && c === f - 1
        ? 2
        : -1 === b && c === f + 1
        ? 3
        : -1 === b && c === f
        ? 4
        : 0;
    }
    function w(b, a) {
      var m = Date.now(),
        k = 0;
      return function (p, f, c, e, g, n) {
        var r = Date.now();
        if (n.has('historic')) return (k = 0), (m = r), 2;
        var q = v(p, f, e, g, b.isComposing()),
          t = (function () {
            var l = null === c || c.editor === b,
              h = n.has('history-push');
            if (!h && l && n.has('history-merge')) return 0;
            if (null === p) return 1;
            var x = f._selection,
              y = p._selection;
            return 0 < e.size || 0 < g.size
              ? (!1 === h && 0 !== q && q === k && r < m + a && l) ||
                (1 === e.size &&
                  ((h = Array.from(e)[0]),
                  (l = p._nodeMap.get(h)),
                  (h = f._nodeMap.get(h)),
                  (l =
                    require('Lexical').$isTextNode(l) &&
                    require('Lexical').$isTextNode(h)
                      ? l.__type === h.__type &&
                        l.__text === h.__text &&
                        l.__mode === h.__mode &&
                        l.__detail === h.__detail &&
                        l.__style === h.__style &&
                        l.__format === h.__format &&
                        l.__parent === h.__parent
                      : !1),
                  l))
                ? 0
                : 1
              : null === y && null !== x
              ? 0
              : 2;
          })();
        m = r;
        k = q;
        return t;
      };
    }
    exports.createEmptyHistoryState = function () {
      return { current: null, redoStack: [], undoStack: [] };
    };
    exports.registerHistory = function (b, a, m) {
      var Lexical;
      var k = w(b, m);
      m = function m(_ref5) {
        var c = _ref5.editorState,
          e = _ref5.prevEditorState,
          g = _ref5.dirtyLeaves,
          n = _ref5.dirtyElements,
          r = _ref5.tags;
        var q = a.current,
          t = a.redoStack,
          l = a.undoStack,
          h = null === q ? null : q.editorState;
        if (null === q || c !== h) {
          g = k(e, c, q, g, n, r);
          if (1 === g)
            0 !== t.length && (a.redoStack = []),
              null !== q &&
                (l.push(
                  babelHelpers['extends']({}, q, {
                    undoSelection: e.read(require('Lexical').$getSelection),
                  }),
                ),
                b.dispatchCommand(require('Lexical').CAN_UNDO_COMMAND, !0));
          else if (2 === g) return;
          a.current = { editor: b, editorState: c };
        }
      };
      var p = require('LexicalUtils').mergeRegister(
          b.registerCommand(
            (Lexical = require('Lexical')).UNDO_COMMAND,
            function () {
              var c = a.redoStack,
                e = a.undoStack;
              if (0 !== e.length) {
                var g = a.current,
                  n = e.pop();
                null !== g &&
                  (c.push(g),
                  b.dispatchCommand(require('Lexical').CAN_REDO_COMMAND, !0));
                0 === e.length &&
                  b.dispatchCommand(require('Lexical').CAN_UNDO_COMMAND, !1);
                a.current = n || null;
                n &&
                  n.editor.setEditorState(
                    n.editorState.clone(n.undoSelection),
                    { tag: 'historic' },
                  );
              }
              return !0;
            },
            Lexical.COMMAND_PRIORITY_EDITOR,
          ),
          b.registerCommand(
            Lexical.REDO_COMMAND,
            function () {
              var c = a.redoStack;
              var e = a.undoStack;
              if (0 !== c.length) {
                var g = a.current;
                null !== g &&
                  (e.push(g),
                  b.dispatchCommand(require('Lexical').CAN_UNDO_COMMAND, !0));
                e = c.pop();
                0 === c.length &&
                  b.dispatchCommand(require('Lexical').CAN_REDO_COMMAND, !1);
                a.current = e || null;
                e &&
                  e.editor.setEditorState(e.editorState, { tag: 'historic' });
              }
              return !0;
            },
            Lexical.COMMAND_PRIORITY_EDITOR,
          ),
          b.registerCommand(
            Lexical.CLEAR_EDITOR_COMMAND,
            function () {
              a.undoStack = [];
              a.redoStack = [];
              a.current = null;
              return !1;
            },
            Lexical.COMMAND_PRIORITY_EDITOR,
          ),
          b.registerCommand(
            Lexical.CLEAR_HISTORY_COMMAND,
            function () {
              a.undoStack = [];
              a.redoStack = [];
              a.current = null;
              b.dispatchCommand(require('Lexical').CAN_REDO_COMMAND, !1);
              b.dispatchCommand(require('Lexical').CAN_UNDO_COMMAND, !1);
              return !0;
            },
            Lexical.COMMAND_PRIORITY_EDITOR,
          ),
          b.registerUpdateListener(m),
        ),
        f = b.registerUpdateListener(m);
      return function () {
        p();
        f();
      };
    };
  },
  null,
);
