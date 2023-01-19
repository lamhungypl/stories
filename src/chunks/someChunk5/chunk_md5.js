__d(
  'md5',
  ['str2rstr'],
  function (a, b, c, d, e, f, g) {
    function h(a, b) {
      var c = a[0],
        d = a[1],
        e = a[2],
        f = a[3];
      c = j(c, d, e, f, b[0], 7, -680876936);
      f = j(f, c, d, e, b[1], 12, -389564586);
      e = j(e, f, c, d, b[2], 17, 606105819);
      d = j(d, e, f, c, b[3], 22, -1044525330);
      c = j(c, d, e, f, b[4], 7, -176418897);
      f = j(f, c, d, e, b[5], 12, 1200080426);
      e = j(e, f, c, d, b[6], 17, -1473231341);
      d = j(d, e, f, c, b[7], 22, -45705983);
      c = j(c, d, e, f, b[8], 7, 1770035416);
      f = j(f, c, d, e, b[9], 12, -1958414417);
      e = j(e, f, c, d, b[10], 17, -42063);
      d = j(d, e, f, c, b[11], 22, -1990404162);
      c = j(c, d, e, f, b[12], 7, 1804603682);
      f = j(f, c, d, e, b[13], 12, -40341101);
      e = j(e, f, c, d, b[14], 17, -1502002290);
      d = j(d, e, f, c, b[15], 22, 1236535329);
      c = k(c, d, e, f, b[1], 5, -165796510);
      f = k(f, c, d, e, b[6], 9, -1069501632);
      e = k(e, f, c, d, b[11], 14, 643717713);
      d = k(d, e, f, c, b[0], 20, -373897302);
      c = k(c, d, e, f, b[5], 5, -701558691);
      f = k(f, c, d, e, b[10], 9, 38016083);
      e = k(e, f, c, d, b[15], 14, -660478335);
      d = k(d, e, f, c, b[4], 20, -405537848);
      c = k(c, d, e, f, b[9], 5, 568446438);
      f = k(f, c, d, e, b[14], 9, -1019803690);
      e = k(e, f, c, d, b[3], 14, -187363961);
      d = k(d, e, f, c, b[8], 20, 1163531501);
      c = k(c, d, e, f, b[13], 5, -1444681467);
      f = k(f, c, d, e, b[2], 9, -51403784);
      e = k(e, f, c, d, b[7], 14, 1735328473);
      d = k(d, e, f, c, b[12], 20, -1926607734);
      c = l(c, d, e, f, b[5], 4, -378558);
      f = l(f, c, d, e, b[8], 11, -2022574463);
      e = l(e, f, c, d, b[11], 16, 1839030562);
      d = l(d, e, f, c, b[14], 23, -35309556);
      c = l(c, d, e, f, b[1], 4, -1530992060);
      f = l(f, c, d, e, b[4], 11, 1272893353);
      e = l(e, f, c, d, b[7], 16, -155497632);
      d = l(d, e, f, c, b[10], 23, -1094730640);
      c = l(c, d, e, f, b[13], 4, 681279174);
      f = l(f, c, d, e, b[0], 11, -358537222);
      e = l(e, f, c, d, b[3], 16, -722521979);
      d = l(d, e, f, c, b[6], 23, 76029189);
      c = l(c, d, e, f, b[9], 4, -640364487);
      f = l(f, c, d, e, b[12], 11, -421815835);
      e = l(e, f, c, d, b[15], 16, 530742520);
      d = l(d, e, f, c, b[2], 23, -995338651);
      c = m(c, d, e, f, b[0], 6, -198630844);
      f = m(f, c, d, e, b[7], 10, 1126891415);
      e = m(e, f, c, d, b[14], 15, -1416354905);
      d = m(d, e, f, c, b[5], 21, -57434055);
      c = m(c, d, e, f, b[12], 6, 1700485571);
      f = m(f, c, d, e, b[3], 10, -1894986606);
      e = m(e, f, c, d, b[10], 15, -1051523);
      d = m(d, e, f, c, b[1], 21, -2054922799);
      c = m(c, d, e, f, b[8], 6, 1873313359);
      f = m(f, c, d, e, b[15], 10, -30611744);
      e = m(e, f, c, d, b[6], 15, -1560198380);
      d = m(d, e, f, c, b[13], 21, 1309151649);
      c = m(c, d, e, f, b[4], 6, -145523070);
      f = m(f, c, d, e, b[11], 10, -1120210379);
      e = m(e, f, c, d, b[2], 15, 718787259);
      d = m(d, e, f, c, b[9], 21, -343485551);
      a[0] = s(c, a[0]);
      a[1] = s(d, a[1]);
      a[2] = s(e, a[2]);
      a[3] = s(f, a[3]);
    }
    function i(a, b, c, d, e, f) {
      b = s(s(b, a), s(d, f));
      return s((b << e) | (b >>> (32 - e)), c);
    }
    function j(a, b, c, d, e, f, g) {
      return i((b & c) | (~b & d), a, b, e, f, g);
    }
    function k(a, b, c, d, e, f, g) {
      return i((b & d) | (c & ~d), a, b, e, f, g);
    }
    function l(a, b, c, d, e, f, g) {
      return i(b ^ c ^ d, a, b, e, f, g);
    }
    function m(a, b, c, d, e, f, g) {
      return i(c ^ (b | ~d), a, b, e, f, g);
    }
    function n(a) {
      var b = a.length,
        c = [1732584193, -271733879, -1732584194, 271733878],
        d;
      for (d = 64; d <= a.length; d += 64) h(c, o(a.substring(d - 64, d)));
      a = a.substring(d - 64);
      var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (d = 0; d < a.length; d++)
        e[d >> 2] |= a.charCodeAt(d) << ((d & 3) << 3);
      e[d >> 2] |= 128 << ((d & 3) << 3);
      if (d > 55) {
        h(c, e);
        for (d = 0; d < 16; d++) e[d] = 0;
      }
      e[14] = b * 8;
      h(c, e);
      return c;
    }
    function o(a) {
      var b = [],
        c = 0;
      while (c < 64)
        b[c >> 2] =
          a.charCodeAt(c++) |
          (a.charCodeAt(c++) << 8) |
          (a.charCodeAt(c++) << 16) |
          (a.charCodeAt(c++) << 24);
      return b;
    }
    var p = '0123456789abcdef'.split('');
    function q(a) {
      var b = '',
        c = 0;
      for (; c < 4; c++)
        b += p[(a >> ((c << 3) + 4)) & 15] + p[(a >> (c << 3)) & 15];
      return b;
    }
    function r(a) {
      var b = [];
      for (var c = 0; c < a.length; c++) b[c] = q(a[c]);
      return b.join('');
    }
    var s = function (a, b) {
      return (a + b) & 4294967295;
    };
    function a(a) {
      if (a == null) return null;
      a = a;
      for (var b = 0; b < a.length; b++)
        if (a[b] > '\x7f') {
          a = c('str2rstr')(a);
          break;
        }
      return r(n(a));
    }
    a('hello') != '5d41402abc4b2a76b9719d911017c592' &&
      (s = function (a, b) {
        var c = (a & 65535) + (b & 65535);
        a = (a >> 16) + (b >> 16) + (c >> 16);
        return (a << 16) | (c & 65535);
      });
    g['default'] = a;
  },
  98,
);
