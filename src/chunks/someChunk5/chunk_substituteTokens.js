__d(
  'substituteTokens',
  ['invariant', 'IntlPunctuation'],
  function (a, b, c, d, e, f, g, h) {
    b = Object.prototype.hasOwnProperty;
    var i = new RegExp(
      '\\{([^}]+)\\}(' + d('IntlPunctuation').PUNCT_CHAR_CLASS + '*)',
      'g',
    );
    function j(a) {
      return a;
    }
    function a(a, b) {
      if (b == null) return a;
      typeof b === 'object' || h(0, 6041, a);
      var c = [],
        e = [];
      a = a
        .replace(i, function (a, f, g) {
          a = b[f];
          if (a != null && typeof a === 'object') {
            c.push(a);
            e.push(f);
            return '\x17' + g;
          } else if (a === null) return '';
          return String(a) + d('IntlPunctuation').dedupeStops(String(a), g);
        })
        .split('\x17')
        .map(d('IntlPunctuation').applyPhonologicalRules);
      if (a.length === 1) return a[0];
      var f = a[0] !== '' ? [a[0]] : [];
      for (var g = 0; g < c.length; g++)
        f.push(j(c[g])), a[g + 1] !== '' && f.push(a[g + 1]);
      return f;
    }
    f.exports = a;
  },
  34,
);
