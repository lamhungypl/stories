__d(
  'LexicalHtml.prod',
  ['Lexical', 'LexicalSelection'],
  function $module_LexicalHtml_prod(
    global,
    require,
    requireDynamic,
    requireLazy,
    module,
    exports,
  ) {
    'use strict';
    function r(c, d, h, b) {
      if (b === void 0) {
        b = null;
      }
      var e = null != b ? d.isSelected() : !0,
        l = require('Lexical').$isElementNode(d) && d.excludeFromCopy('html');
      var a = d;
      null !== b &&
        ((a = require('LexicalSelection').$cloneWithProperties(d)),
        (a =
          require('Lexical').$isTextNode(a) && null != b
            ? require('LexicalSelection').$sliceSelectedTextNodeContent(b, a)
            : a));
      var f = require('Lexical').$isElementNode(a) ? a.getChildren() : [],
        _a$exportDOM = a.exportDOM(c),
        k = _a$exportDOM.element,
        g = _a$exportDOM.after;
      if (!k) return !1;
      var m = new DocumentFragment();
      for (var p = 0; p < f.length; p++) {
        var t = f[p],
          w = r(c, t, m, b);
        !e &&
          require('Lexical').$isElementNode(d) &&
          w &&
          d.extractWithChild(t, b, 'html') &&
          (e = !0);
      }
      e && !l
        ? (k.append(m),
          h.append(k),
          g && (c = g.call(a, k)) && k.replaceWith(c))
        : h.append(m);
      return e;
    }
    var u = new Set(['STYLE']);
    function v(c, d, h, b, e) {
      var _a;
      if (h === void 0) {
        h = new Map();
      }
      if (e === void 0) {
        e = !1;
      }
      var l = [];
      if (u.has(c.nodeName)) return l;
      var a = null;
      var _c = c,
        f = _c.nodeName,
        k = d._htmlConversions.get(f.toLowerCase());
      f = null;
      if (void 0 !== k) {
        for (
          var _iterator = k,
            _isArray = Array.isArray(_iterator),
            _i = 0,
            _iterator = _isArray
              ? _iterator
              : _iterator[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          if (_isArray) {
            if (_i >= _iterator.length) break;
            g = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            g = _i.value;
          }
          (k = g(c)),
            null !== k && (null === f || f.priority < k.priority) && (f = k);
        }
      }
      var g = (g = null !== f ? f.conversion : null) ? g(c, void 0, e) : null;
      f = null;
      if (null !== g) {
        f = g.after;
        a = g.node;
        if (null !== a) {
          for (
            var _iterator2 = h,
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
            var _ref = _ref2;
            var m = _ref[1];
            if (((a = m(a, b)), !a)) break;
          }
          a && l.push(a);
        }
        null != g.forChild && h.set(c.nodeName, g.forChild);
      }
      c = c.childNodes;
      b = [];
      for (m = 0; m < c.length; m++) {
        var _b;
        (_b = b).push.apply(
          _b,
          v(c[m], d, new Map(h), a, e || !0 === (g && g.preformatted)),
        );
      }
      null != f && (b = f(b));
      null == a
        ? (l = l.concat(b))
        : require('Lexical').$isElementNode(a) && (_a = a).append.apply(_a, b);
      return l;
    }
    exports.$generateHtmlFromNodes = function (c, d) {
      if ('undefined' === typeof document || 'undefined' === typeof window)
        throw Error(
          'To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.',
        );
      var h = document.createElement('div'),
        b = require('Lexical').$getRoot().getChildren();
      for (var e = 0; e < b.length; e++) {
        r(c, b[e], h, d);
      }
      return h.innerHTML;
    };
    exports.$generateNodesFromDOM = function (c, d) {
      var h = [];
      d = d.body ? Array.from(d.body.childNodes) : [];
      var b = d.length;
      for (var l = 0; l < b; l++) {
        var e = d[l];
        u.has(e.nodeName) || ((e = v(e, c)), null !== e && (h = h.concat(e)));
      }
      return h;
    };
  },
  null,
);
