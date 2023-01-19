__d(
  'LexicalPlainText.prod',
  ['Lexical', 'LexicalClipboard', 'LexicalSelection', 'LexicalUtils'],
  function $module_LexicalPlainText_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    var k =
        'undefined' !== typeof window &&
        'undefined' !== typeof window.document &&
        'undefined' !== typeof window.document.createElement,
      m = k && 'documentMode' in document ? document.documentMode : null;
    k && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    k && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
    var n =
        k && 'InputEvent' in window && !m
          ? 'getTargetRanges' in new window.InputEvent('input')
          : !1,
      p = k && /Version\/[\d.]+.*Safari/.test(navigator.userAgent),
      q = k && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    k && /^(?=.*Chrome).*/i.test(navigator.userAgent);
    function r(d, b) {
      b.update(function () {
        var c = d instanceof KeyboardEvent ? null : d.clipboardData,
          e = require('Lexical').$getSelection();
        if (null !== e && null != c) {
          d.preventDefault();
          var l = require('LexicalClipboard').$getHtmlContent(b);
          null !== l && c.setData('text/html', l);
          c.setData('text/plain', e.getTextContent());
        }
      });
    }
    function t(d, b) {
      d.preventDefault();
      b.update(
        function () {
          var c = require('Lexical').$getSelection(),
            e =
              d instanceof InputEvent || d instanceof KeyboardEvent
                ? null
                : d.clipboardData;
          null != e &&
            require('Lexical').$isRangeSelection(c) &&
            require('LexicalClipboard').$insertDataTransferForPlainText(e, c);
        },
        { tag: 'paste' },
      );
    }
    function u(d, b) {
      r(d, b);
      b.update(function () {
        var c = require('Lexical').$getSelection();
        require('Lexical').$isRangeSelection(c) && c.removeText();
      });
    }
    exports.registerPlainText = function (d) {
      var Lexical;
      return require('LexicalUtils').mergeRegister(
        d.registerCommand(
          (Lexical = require('Lexical')).DELETE_CHARACTER_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            c.deleteCharacter(b);
            return !0;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.DELETE_WORD_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            c.deleteWord(b);
            return !0;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.DELETE_LINE_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            c.deleteLine(b);
            return !0;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.CONTROLLED_TEXT_INSERTION_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            if ('string' === typeof b) c.insertText(b);
            else {
              var e = b.dataTransfer;
              null != e
                ? require('LexicalClipboard').$insertDataTransferForPlainText(
                    e,
                    c,
                  )
                : (b = b.data) && c.insertText(b);
            }
            return !0;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.REMOVE_TEXT_COMMAND,
          function () {
            var b = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(b)) return !1;
            b.removeText();
            return !0;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.INSERT_LINE_BREAK_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            c.insertLineBreak(b);
            return !0;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.INSERT_PARAGRAPH_COMMAND,
          function () {
            var b = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(b)) return !1;
            b.insertLineBreak();
            return !0;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.KEY_ARROW_LEFT_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            var e = b.shiftKey;
            return require('LexicalSelection').$shouldOverrideDefaultCharacterSelection(
              c,
              !0,
            )
              ? (b.preventDefault(),
                require('LexicalSelection').$moveCharacter(c, e, !0),
                !0)
              : !1;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.KEY_ARROW_RIGHT_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            var e = b.shiftKey;
            return require('LexicalSelection').$shouldOverrideDefaultCharacterSelection(
              c,
              !1,
            )
              ? (b.preventDefault(),
                require('LexicalSelection').$moveCharacter(c, e, !1),
                !0)
              : !1;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.KEY_BACKSPACE_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            b.preventDefault();
            return d.dispatchCommand(
              require('Lexical').DELETE_CHARACTER_COMMAND,
              !0,
            );
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.KEY_DELETE_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            b.preventDefault();
            return d.dispatchCommand(
              require('Lexical').DELETE_CHARACTER_COMMAND,
              !1,
            );
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.KEY_ENTER_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            if (null !== b) {
              if ((q || p) && n) return !1;
              b.preventDefault();
            }
            return d.dispatchCommand(
              require('Lexical').INSERT_LINE_BREAK_COMMAND,
              !1,
            );
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.COPY_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            r(b, d);
            return !0;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.CUT_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            u(b, d);
            return !0;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.PASTE_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            t(b, d);
            return !0;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.DROP_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            b.preventDefault();
            return !0;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
        d.registerCommand(
          Lexical.DRAGSTART_COMMAND,
          function (b) {
            var c = require('Lexical').$getSelection();
            if (!require('Lexical').$isRangeSelection(c)) return !1;
            b.preventDefault();
            return !0;
          },
          Lexical.COMMAND_PRIORITY_EDITOR,
        ),
      );
    };
  },
  null,
);
