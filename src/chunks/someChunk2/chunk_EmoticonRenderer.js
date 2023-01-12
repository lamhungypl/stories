__d(
  'EmoticonRenderer',
  ['EmoticonsList'],
  function (a, b, c, d, e, f, g) {
    var h = ['LIKE', 'PACMAN', 'FACE_WITH_COLON_THREE'];
    function i(a) {
      var b = [],
        c = new RegExp(d('EmoticonsList').regexp),
        e = 0,
        f = a.match(c);
      while (f !== null) {
        var g = f[1],
          i = f[2].split(''),
          j = d('EmoticonsList').emotes[f[2]];
        j = d('EmoticonsList').emoji[j];
        b.push({
          chars: i,
          key: j,
          isCustom: h.includes(j),
          offset: e + f.index + g.length,
        });
        e += f.index + f[0].length;
        f = a.slice(e).match(c);
      }
      return b;
    }
    function a(a, b, c) {
      var d = i(a),
        e = [],
        f = 0;
      d.forEach(function (d) {
        var g = d.offset;
        g > f && e.push(a.substr(f, g - f));
        d.isCustom ? e.push(c(d.key, d.chars)) : e.push(b(d.key));
        f = g + d.chars.length;
      });
      e.push(a.substr(f, a.length - f));
      return e;
    }
    g.parse = i;
    g.render = a;
  },
  98,
);
