__d(
  'IntlRedundantStops',
  [],
  function (a, b, c, d, e, f) {
    e.exports = Object.freeze({
      equivalencies: {
        '.': ['\u0964', '\u104b', '\u3002'],
        '\u2026': ['\u0e2f', '\u0eaf', '\u1801'],
        '!': ['\uff01'],
        '?': ['\uff1f'],
      },
      redundancies: {
        '?': ['?', '.', '!', '\u2026'],
        '!': ['!', '?', '.'],
        '.': ['.', '!'],
        '\u2026': ['\u2026', '.', '!'],
      },
    });
  },
  null,
);