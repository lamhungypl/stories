__d(
  'LexicalHashtag.prod',
  ['Lexical', 'LexicalUtils'],
  function $module_LexicalHashtag_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    var e = (function (_d$TextNode) {
      babelHelpers.inheritsLoose(e, _d$TextNode);
      e.getType = function getType() {
        return 'hashtag';
      };
      e.clone = function clone(a) {
        return new e(a.__text, a.__key);
      };
      function e(a, b) {
        return _d$TextNode.call(this, a, b) || this;
      }
      var _proto = e.prototype;
      _proto.createDOM = function createDOM(a) {
        var b = _d$TextNode.prototype.createDOM.call(this, a);
        require('LexicalUtils').addClassNamesToElement(b, a.theme.hashtag);
        return b;
      };
      e.importJSON = function importJSON(a) {
        var b = f(a.text);
        b.setFormat(a.format);
        b.setDetail(a.detail);
        b.setMode(a.mode);
        b.setStyle(a.style);
        return b;
      };
      _proto.exportJSON = function exportJSON() {
        return babelHelpers['extends'](
          {},
          _d$TextNode.prototype.exportJSON.call(this),
          { type: 'hashtag' },
        );
      };
      _proto.canInsertTextBefore = function canInsertTextBefore() {
        return !1;
      };
      _proto.isTextEntity = function isTextEntity() {
        return !0;
      };
      return e;
    })(require('Lexical').TextNode);
    function f(a) {
      if (a === void 0) {
        a = '';
      }
      return require('Lexical').$applyNodeReplacement(new e(a));
    }
    exports.$createHashtagNode = f;
    exports.$isHashtagNode = function (a) {
      return a instanceof e;
    };
    exports.HashtagNode = e;
  },
  null,
);
