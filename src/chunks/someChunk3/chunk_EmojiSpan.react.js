__d(
  'EmojiSpan.react',
  ['cx', 'FBEmojiResource', 'UnicodeUtils', 'react'],
  function (a, b, c, d, e, f, g, h) {
    var i = d('react');
    function a(a) {
      var b = a.children;
      a.contentState;
      var e = a.decoratedText,
        f = a.dir,
        g = a.offsetKey;
      a = a.size;
      var h = 0,
        j = e.length,
        k = [];
      while (h < j) {
        var l = d('UnicodeUtils').getUTF16Length(e, h);
        k.push(e.substr(h, l));
        h += l;
      }
      l = c('FBEmojiResource').fromCodepoints(k);
      h = l != null ? l.getImageURL(a) : null;
      return h != null
        ? i.jsx('span', {
            className: '_3gl1 _5zz4',
            'data-offset-key': g,
            'data-testid': void 0,
            dir: f,
            style: {
              backgroundImage: 'url(' + h + ')',
              backgroundSize: a + 'px ' + a + 'px',
              height: a,
              width: a,
            },
            children: i.jsx('span', { className: '_ncl', children: b }),
          })
        : i.jsx('span', { 'data-offset-key': g, children: e });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
