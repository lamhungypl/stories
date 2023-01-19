__d(
  'CometLexicalEmojiNode',
  ['Lexical'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 9;
    b = 16;
    c = 20;
    e = 16;
    var i = (function (b) {
      babelHelpers.inheritsLoose(a, b);
      a.getType = function () {
        return 'emoji';
      };
      a.clone = function (b) {
        return new a(b.__text, b.__rawText, b.__src, b.__size, b.__key);
      };
      a.importJSON = function (a) {
        a = j(a.text, a.rawText, a.src, a.size);
        return a;
      };
      var c = a.prototype;
      c.exportJSON = function () {
        return babelHelpers['extends']({}, b.prototype.exportJSON.call(this), {
          rawText: this.__rawText,
          size: this.__size,
          src: this.__src,
          type: 'emoji',
        });
      };
      function a(a, c, d, e, f) {
        a = b.call(this, a, f) || this;
        a.__src = d;
        a.__rawText = c;
        a.__size = e;
        return a;
      }
      c.getRawText = function () {
        var a = this.getLatest();
        return a.__rawText;
      };
      c.createDOM = function () {
        var a = this.__text,
          b = this.__size,
          c = this.__src,
          d = document.createElement('span'),
          e = document.createElement('span'),
          f = d.style;
        f.cursor = 'default';
        d.className =
          'x1xsqp64 xiy17q3 x1o6pynw x19co3pv xdj266r xcwd3tp xat24cr x39eecv x2b8uid';
        d.setAttribute('data-testid', 'emoji');
        c != null &&
          ((f.backgroundImage = 'url(' + c + ')'),
          (f.backgroundSize = b + 'px ' + b + 'px'));
        a !== this.__rawText &&
          ((d.style.width = 'calc(' + b + 'px + 0.3em)'),
          (d.style.height = b + 'px'),
          (d.className =
            'x1xsqp64 xiy17q3 x1o6pynw x19co3pv xdj266r xcwd3tp xat24cr x39eecv x2b8uid x1rg5ohu x6ikm8r x10wlt62 xmziwt1 xuxw1ft'),
          d.setAttribute('spellcheck', 'false'),
          (e.style.fontFamily =
            'Courier, "Courier New", Menlo, Monaco, monospace'),
          (e.style.fontSize = '15px'),
          (e.style.letterSpacing = b / (h * a.length) - 1 + 'ch'));
        e.textContent = a;
        e.className = 'xexx8yu xn5pp95 x18d9i69 x2fxd7x x1yqt14a x1bhl96m';
        d.appendChild(e);
        return d;
      };
      c.updateDOM = function (a, b) {
        a = b.firstChild;
        if (a == null) return !0;
        var c = this.__text;
        a.textContent !== c && (a.textContent = c);
        b.style.backgroundSize = this.__size + 'px ' + this.__size + 'px';
        return !1;
      };
      c.setSize = function (a) {
        var b = this.getWritable();
        b.__size = a;
      };
      c.selectionTransform = function (a, b) {
        var c = this.__text;
        if (
          c === this.__rawText ||
          !d('Lexical').$isRangeSelection(a) ||
          a.is(b)
        )
          return;
        a = a.focus;
        var e = b.focus,
          f = c.length,
          g = b.isCollapsed();
        if (e.offset === 0 || e.offset === c.length || a.is(e)) return;
        a.isBefore(e) ? e.set(e.key, f, 'text') : e.set(e.key, 0, 'text');
        g && b.anchor.set(e.key, e.offset, 'text');
      };
      return a;
    })(d('Lexical').TextNode);
    function a(a) {
      return a instanceof i;
    }
    function j(a, b, c, d) {
      return new i(a, b, c, d).setMode('token');
    }
    g.UFI_EMOJI_SIZE = b;
    g.COMPOSER_EMOJI_SIZE_LARGE = c;
    g.COMPOSER_EMOJI_SIZE_SMALL = e;
    g.EmojiNode = i;
    g.$isEmojiNode = a;
    g.$createEmojiNode = j;
  },
  98,
);
