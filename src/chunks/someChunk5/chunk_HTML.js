__d(
  'HTML',
  [
    'invariant',
    'Bootloader',
    'createNodesFromMarkup',
    'emptyFunction',
    'evalGlobal',
  ],
  function (a, b, c, d, e, f, g) {
    var h = /(<(\w+)[^>]*?)\/>/g,
      i = {
        abbr: !0,
        area: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        link: !0,
        meta: !0,
        param: !0,
      };
    a = (function () {
      'use strict';
      function a(c) {
        c && typeof c.__html === 'string' && (c = c.__html);
        if (!(this instanceof a)) return c instanceof a ? c : new a(c);
        if (c) {
          var d = typeof c;
          d === 'string' || g(0, 277, d);
        }
        this._markup = c || '';
        this._defer = !1;
        this._nodes = null;
        this._inlineJS = b('emptyFunction');
        this._rootNode = null;
      }
      var c = a.prototype;
      c.toString = function () {
        return this._markup;
      };
      c.getContent = function () {
        return this._markup;
      };
      c.getNodes = function () {
        this._fillCache();
        return this._nodes;
      };
      c.getRootNode = function () {
        this._rootNode && g(0, 278);
        var a = this.getNodes();
        if (a.length === 1) this._rootNode = a[0];
        else {
          var b = document.createDocumentFragment();
          for (var c = 0; c < a.length; c++) b.appendChild(a[c]);
          this._rootNode = b;
        }
        return this._rootNode;
      };
      c.getAction = function () {
        var a = this;
        this._fillCache();
        var b = function () {
          a._inlineJS();
        };
        return this._defer
          ? function () {
              setTimeout(b, 0);
            }
          : b;
      };
      c._fillCache = function () {
        if (this._nodes !== null) return;
        if (!this._markup) {
          this._nodes = [];
          return;
        }
        var a = this._markup.replace(h, function (a, b, c) {
            return i[c.toLowerCase()] ? a : b + '></' + c + '>';
          }),
          c = null;
        a = b('createNodesFromMarkup')(a, function (a) {
          (c = c || []),
            c.push(
              a.src
                ? b(
                    'Bootloader',
                  ).requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(
                    b('Bootloader'),
                    a.src,
                  )
                : b('evalGlobal').bind(null, a.innerHTML),
            ),
            a.parentNode.removeChild(a);
        });
        c &&
          (this._inlineJS = function () {
            for (var a = 0; a < c.length; a++) c[a]();
          });
        this._nodes = a;
      };
      c.setDeferred = function (a) {
        this._defer = !!a;
        return this;
      };
      a.isHTML = function (b) {
        return !!b && (b instanceof a || b.__html !== void 0);
      };
      a.replaceJSONWrapper = function (b) {
        return b && b.__html !== void 0 ? new a(b.__html) : b;
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
