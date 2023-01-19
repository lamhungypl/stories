__d(
  'LexicalLink.prod',
  ['Lexical', 'LexicalUtils'],
  function $module_LexicalLink_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    var n = (function (_m$ElementNode) {
      babelHelpers.inheritsLoose(n, _m$ElementNode);
      n.getType = function getType() {
        return 'link';
      };
      n.clone = function clone(a) {
        return new n(a.__url, { rel: a.__rel, target: a.__target }, a.__key);
      };
      function n(a, b, c) {
        var _this;
        if (b === void 0) {
          b = {};
        }
        _this = _m$ElementNode.call(this, c) || this;
        var _b = b,
          _b$target = _b.target,
          h = _b$target === void 0 ? null : _b$target,
          _b$rel = _b.rel,
          e = _b$rel === void 0 ? null : _b$rel;
        _this.__url = a;
        _this.__target = h;
        _this.__rel = e;
        return _this;
      }
      var _proto = n.prototype;
      _proto.createDOM = function createDOM(a) {
        var b = document.createElement('a');
        b.href = this.__url;
        null !== this.__target && (b.target = this.__target);
        null !== this.__rel && (b.rel = this.__rel);
        require('LexicalUtils').addClassNamesToElement(b, a.theme.link);
        return b;
      };
      _proto.updateDOM = function updateDOM(a, b) {
        var c = this.__url,
          h = this.__target,
          e = this.__rel;
        c !== a.__url && (b.href = c);
        h !== a.__target && (h ? (b.target = h) : b.removeAttribute('target'));
        e !== a.__rel && (e ? (b.rel = e) : b.removeAttribute('rel'));
        return !1;
      };
      n.importDOM = function importDOM() {
        return {
          a: function a() {
            return { conversion: p, priority: 1 };
          },
        };
      };
      n.importJSON = function importJSON(a) {
        var b = q(a.url, { rel: a.rel, target: a.target });
        b.setFormat(a.format);
        b.setIndent(a.indent);
        b.setDirection(a.direction);
        return b;
      };
      _proto.exportJSON = function exportJSON() {
        return babelHelpers['extends'](
          {},
          _m$ElementNode.prototype.exportJSON.call(this),
          {
            rel: this.getRel(),
            target: this.getTarget(),
            type: 'link',
            url: this.getURL(),
            version: 1,
          },
        );
      };
      _proto.getURL = function getURL() {
        return this.getLatest().__url;
      };
      _proto.setURL = function setURL(a) {
        this.getWritable().__url = a;
      };
      _proto.getTarget = function getTarget() {
        return this.getLatest().__target;
      };
      _proto.setTarget = function setTarget(a) {
        this.getWritable().__target = a;
      };
      _proto.getRel = function getRel() {
        return this.getLatest().__rel;
      };
      _proto.setRel = function setRel(a) {
        this.getWritable().__rel = a;
      };
      _proto.insertNewAfter = function insertNewAfter(a, b) {
        if (b === void 0) {
          b = !0;
        }
        a = this.getParentOrThrow().insertNewAfter(a, b);
        return require('Lexical').$isElementNode(a)
          ? ((b = q(this.__url, { rel: this.__rel, target: this.__target })),
            a.append(b),
            b)
          : null;
      };
      _proto.canInsertTextBefore = function canInsertTextBefore() {
        return !1;
      };
      _proto.canInsertTextAfter = function canInsertTextAfter() {
        return !1;
      };
      _proto.canBeEmpty = function canBeEmpty() {
        return !1;
      };
      _proto.isInline = function isInline() {
        return !0;
      };
      _proto.extractWithChild = function extractWithChild(a, b) {
        if (!require('Lexical').$isRangeSelection(b)) return !1;
        a = b.anchor.getNode();
        var c = b.focus.getNode();
        return (
          this.isParentOf(a) &&
          this.isParentOf(c) &&
          0 < b.getTextContent().length
        );
      };
      return n;
    })(require('Lexical').ElementNode);
    function p(a) {
      var b = null;
      if (a instanceof HTMLAnchorElement) {
        var c = a.textContent;
        null !== c &&
          '' !== c &&
          (b = q(a.getAttribute('href') || '', {
            rel: a.getAttribute('rel'),
            target: a.getAttribute('target'),
          }));
      }
      return { node: b };
    }
    function q(a, b) {
      return require('Lexical').$applyNodeReplacement(new n(a, b));
    }
    function r(a) {
      return a instanceof n;
    }
    var u = (function (_n) {
      babelHelpers.inheritsLoose(u, _n);
      function u() {
        return _n.apply(this, arguments) || this;
      }
      u.getType = function getType() {
        return 'autolink';
      };
      u.clone = function clone(a) {
        return new u(a.__url, { rel: a.__rel, target: a.__target }, a.__key);
      };
      u.importJSON = function importJSON(a) {
        var b = v(a.url, { rel: a.rel, target: a.target });
        b.setFormat(a.format);
        b.setIndent(a.indent);
        b.setDirection(a.direction);
        return b;
      };
      u.importDOM = function importDOM() {
        return null;
      };
      var _proto2 = u.prototype;
      _proto2.exportJSON = function exportJSON() {
        return babelHelpers['extends']({}, _n.prototype.exportJSON.call(this), {
          type: 'autolink',
          version: 1,
        });
      };
      _proto2.insertNewAfter = function insertNewAfter(a, b) {
        if (b === void 0) {
          b = !0;
        }
        a = this.getParentOrThrow().insertNewAfter(a, b);
        return require('Lexical').$isElementNode(a)
          ? ((b = v(this.__url, { rel: this._rel, target: this.__target })),
            a.append(b),
            b)
          : null;
      };
      return u;
    })(n);
    function v(a, b) {
      return require('Lexical').$applyNodeReplacement(new u(a, b));
    }
    var w = require('Lexical').createCommand('TOGGLE_LINK_COMMAND');
    function x(a) {
      return y(a, function (b) {
        return r(b);
      });
    }
    function y(a, b) {
      for (; null !== a && null !== (a = a.getParent()) && !b(a); ) {}
      return a;
    }
    exports.$createAutoLinkNode = v;
    exports.$createLinkNode = q;
    exports.$isAutoLinkNode = function (a) {
      return a instanceof u;
    };
    exports.$isLinkNode = r;
    exports.AutoLinkNode = u;
    exports.LinkNode = n;
    exports.TOGGLE_LINK_COMMAND = w;
    exports.toggleLink = function (a, b) {
      if (b === void 0) {
        b = {};
      }
      var _b2 = b,
        c = _b2.target,
        h = void 0 === b.rel ? 'noopener' : b.rel;
      b = require('Lexical').$getSelection();
      if (require('Lexical').$isRangeSelection(b))
        if (((b = b.extract()), null === a))
          b.forEach(function (l) {
            l = l.getParent();
            if (r(l)) {
              var d = l.getChildren();
              for (var f = 0; f < d.length; f++) {
                l.insertBefore(d[f]);
              }
              l.remove();
            }
          });
        else {
          if (1 === b.length) {
            var e = b[0];
            e = r(e) ? e : x(e);
            if (null !== e) {
              e.setURL(a);
              void 0 !== c && e.setTarget(c);
              null !== h && e.setRel(h);
              return;
            }
          }
          var l = null,
            d = null;
          b.forEach(function (f) {
            var g = f.getParent();
            if (
              g !== d &&
              null !== g &&
              (!require('Lexical').$isElementNode(f) || f.isInline())
            )
              if (r(g))
                (d = g),
                  g.setURL(a),
                  void 0 !== c && g.setTarget(c),
                  null !== h && d.setRel(h);
              else if (
                (g.is(l) ||
                  ((l = g),
                  (d = q(a, { rel: h, target: c })),
                  r(g)
                    ? null === f.getPreviousSibling()
                      ? g.insertBefore(d)
                      : g.insertAfter(d)
                    : f.insertBefore(d)),
                r(f))
              ) {
                if (!f.is(d)) {
                  if (null !== d) {
                    g = f.getChildren();
                    for (var t = 0; t < g.length; t++) {
                      d.append(g[t]);
                    }
                  }
                  f.remove();
                }
              } else null !== d && d.append(f);
          });
        }
    };
  },
  null,
);
