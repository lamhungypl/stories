__d(
  'LexicalOverflow.prod',
  ['Lexical'],
  function $module_LexicalOverflow_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    var d = (function (_b$ElementNode) {
      babelHelpers.inheritsLoose(d, _b$ElementNode);
      d.getType = function getType() {
        return 'overflow';
      };
      d.clone = function clone(a) {
        return new d(a.__key);
      };
      d.importJSON = function importJSON() {
        return e();
      };
      d.importDOM = function importDOM() {
        return null;
      };
      function d(a) {
        var _this;
        _this = _b$ElementNode.call(this, a) || this;
        _this.__type = 'overflow';
        return _this;
      }
      var _proto = d.prototype;
      _proto.exportJSON = function exportJSON() {
        return babelHelpers['extends'](
          {},
          _b$ElementNode.prototype.exportJSON.call(this),
          { type: 'overflow' },
        );
      };
      _proto.createDOM = function createDOM(a) {
        var c = document.createElement('span');
        a = a.theme.characterLimit;
        'string' === typeof a && (c.className = a);
        return c;
      };
      _proto.updateDOM = function updateDOM() {
        return !1;
      };
      _proto.insertNewAfter = function insertNewAfter(a, c) {
        if (c === void 0) {
          c = !0;
        }
        return this.getParentOrThrow().insertNewAfter(a, c);
      };
      _proto.excludeFromCopy = function excludeFromCopy() {
        return !0;
      };
      return d;
    })(require('Lexical').ElementNode);
    function e() {
      return require('Lexical').$applyNodeReplacement(new d());
    }
    exports.$createOverflowNode = e;
    exports.$isOverflowNode = function (a) {
      return a instanceof d;
    };
    exports.OverflowNode = d;
  },
  null,
);
