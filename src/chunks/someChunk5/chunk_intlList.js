__d(
  'intlList',
  ['fbt', 'invariant', 'react'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i;
    a = i || b('react');
    var j = { AND: 'AND', NONE: 'NONE', OR: 'OR' },
      k = { BULLET: 'BULLET', COMMA: 'COMMA', SEMICOLON: 'SEMICOLON' };
    c = function (a, b, c) {
      var d = a.length;
      if (d === 0) return '';
      else if (d === 1) return a[0];
      var e = a[d - 1],
        f = a[0];
      for (var h = 1; h < d - 1; ++h)
        switch (c) {
          case k.SEMICOLON:
            f = g._('__JHASH__2xRftcH2vsr__JHASH__', [
              g._param('previous items', f),
              g._param('following items', a[h]),
            ]);
            break;
          case k.BULLET:
            f = g._('__JHASH__A8Te3iyJoQY__JHASH__', [
              g._param('previous items', f),
              g._param('following items', a[h]),
            ]);
            break;
          default:
            f = g._('__JHASH__ymp6OXT1HEX__JHASH__', [
              g._param('previous items', f),
              g._param('following items', a[h]),
            ]);
        }
      return l(f, e, b || j.AND, c || k.COMMA);
    };
    function l(a, b, c, d) {
      switch (c) {
        case j.AND:
          return g._('__JHASH__qQ-J1F_2ppK__JHASH__', [
            g._param('list of items', a),
            g._param('last item', b),
          ]);
        case j.OR:
          return g._('__JHASH__pqsshngVpqN__JHASH__', [
            g._param('list of items', a),
            g._param('last item', b),
          ]);
        case j.NONE:
          switch (d) {
            case k.SEMICOLON:
              return g._('__JHASH__KtjanthXGG0__JHASH__', [
                g._param('previous items', a),
                g._param('last item', b),
              ]);
            case k.BULLET:
              return g._('__JHASH__pWqMqQJ5cvg__JHASH__', [
                g._param('list of items', a),
                g._param('last item', b),
              ]);
            default:
              return g._('__JHASH__QEekv2-b_Os__JHASH__', [
                g._param('list of items', a),
                g._param('last item', b),
              ]);
          }
        default:
          h(0, 568, c);
      }
    }
    c.DELIMITERS = k;
    c.CONJUNCTIONS = j;
    e.exports = c;
  },
  null,
);
