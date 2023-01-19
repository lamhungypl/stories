__d(
  'CometLexicalDelightNode',
  ['CometLexicalEntityTextNode'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      a.getType = function () {
        return 'delight';
      };
      a.clone = function (b) {
        return new a(
          b.__text,
          b.__styles,
          b.__campaignID,
          b.__delightAsset,
          b.__key,
        );
      };
      a.importJSON = function (a) {
        return i(a.text, a.styles, a.campaignID, a.delightAsset);
      };
      var c = a.prototype;
      c.exportJSON = function () {
        return babelHelpers['extends']({}, b.prototype.exportJSON.call(this), {
          campaignID: this.__campaignID,
          delightAsset: this.__delightAsset,
          styles: this.__styles,
          type: 'delight',
        });
      };
      function a(a, c, d, e, f) {
        a = b.call(this, a, f) || this;
        a.__entityType = 'TextDelightCampaign';
        a.__styles = c;
        a.__campaignID = d;
        a.__delightAsset = e;
        return a;
      }
      c.createDOM = function (a) {
        a = b.prototype.createDOM.call(this, a);
        var c = this.__delightAsset.id,
          d = this.__styles,
          e = d.color;
        d = d['font-weight'];
        c != null && a.setAttribute('data-delight-asset', c);
        a.setAttribute('data-delight', 'true');
        e != null &&
          d != null &&
          ((a.style.color = e), (a.style.fontWeight = d));
        return a;
      };
      c.getEntity = function () {
        return {
          __UFI__: !0,
          id: this.__campaignID,
          isWeak: !1,
          type: this.__entityType,
        };
      };
      c.canInsertTextBefore = function () {
        return !1;
      };
      c.canInsertTextAfter = function () {
        return !1;
      };
      return a;
    })(d('CometLexicalEntityTextNode').CometLexicalEntityTextNode);
    function i(a, b, c, d) {
      return new h(a, b, c, d);
    }
    function a(a) {
      return a instanceof h;
    }
    g.CometLexicalDelightNode = h;
    g.$createLexicalDelightNode = i;
    g.$isLexicalDelightNode = a;
  },
  98,
);
