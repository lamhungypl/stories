__d(
  'str2rstr',
  [],
  function (a, b, c, d, e, f) {
    function a(a) {
      var b = '',
        c,
        d;
      for (var e = 0; e < a.length; e++)
        (c = a.charCodeAt(e)),
          (d = e + 1 < a.length ? a.charCodeAt(e + 1) : 0),
          55296 <= c &&
            c <= 56319 &&
            56320 <= d &&
            d <= 57343 &&
            ((c = 65536 + ((c & 1023) << 10) + (d & 1023)), e++),
          c <= 127
            ? (b += String.fromCharCode(c))
            : c <= 2047
            ? (b += String.fromCharCode(192 | ((c >>> 6) & 31), 128 | (c & 63)))
            : c <= 65535
            ? (b += String.fromCharCode(
                224 | ((c >>> 12) & 15),
                128 | ((c >>> 6) & 63),
                128 | (c & 63),
              ))
            : c <= 2097151 &&
              (b += String.fromCharCode(
                240 | ((c >>> 18) & 7),
                128 | ((c >>> 12) & 63),
                128 | ((c >>> 6) & 63),
                128 | (c & 63),
              ));
      return b;
    }
    f['default'] = a;
  },
  66,
);
