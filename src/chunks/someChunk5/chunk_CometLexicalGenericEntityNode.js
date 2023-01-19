__d(
  'CometLexicalGenericEntityNode',
  ['CometLexicalEntityTextNode'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      a.getType = function () {
        return 'actor';
      };
      a.clone = function (b) {
        var c;
        return new a(
          {
            id: b.__id,
            text: b.__text,
            type: b.__entityType,
            uri: (c = b.__uri) != null ? c : void 0,
          },
          b.__key,
        );
      };
      a.importJSON = function (a) {
        return i({
          id: a.id,
          text: a.text,
          type: a.entityType,
          uri: (a = a.uri) != null ? a : void 0,
        });
      };
      var c = a.prototype;
      c.exportJSON = function () {
        return babelHelpers['extends']({}, b.prototype.exportJSON.call(this), {
          entityType: this.__entityType,
          id: this.__id,
          type: 'actor',
          uri: this.__uri,
        });
      };
      function a(a, c) {
        var d = a.id,
          e = a.text,
          f = a.type;
        a = a.uri;
        e = b.call(this, e, c) || this;
        e.__id = d;
        e.__entityType = f;
        e.__uri = a;
        return e;
      }
      c.createDOM = function (a) {
        a = b.prototype.createDOM.call(this, a);
        a.className = 'xv78j7m xt0e3qv';
        a.spellcheck = !1;
        return a;
      };
      c.getEntity = function () {
        var a = this.__uri != null ? { uri: this.__uri } : null;
        return babelHelpers['extends'](
          { __UFI__: !0, id: this.__id, isWeak: !1, type: this.__entityType },
          a,
        );
      };
      c.getEntityType = function () {
        return this.__entityType;
      };
      c.getID = function () {
        return this.__id;
      };
      return a;
    })(d('CometLexicalEntityTextNode').CometLexicalEntityTextNode);
    function i(a) {
      return new h(a).setMode('segmented').toggleDirectionless();
    }
    function a(a) {
      return a instanceof h;
    }
    g.CometLexicalGenericEntityNode = h;
    g.$createCometLexicalGenericEntityNode = i;
    g.$isCometLexicalGenericEntityNode = a;
  },
  98,
);
