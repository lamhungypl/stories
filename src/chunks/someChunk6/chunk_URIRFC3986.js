__d(
  'URIRFC3986',
  [],
  function (a, b, c, d, e, f) {
    var g = new RegExp(
      '^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?',
    );
    function a(a) {
      if (a.trim() === '') return null;
      a = a.match(g);
      if (a == null) return null;
      var b = a[2] ? a[2].substr(2) : null,
        c = a[1] ? a[1].substr(0, a[1].length - 1) : null;
      a = {
        uri: a[0] ? a[0] : null,
        scheme: c,
        authority: b,
        userinfo: a[3] ? a[3].substr(0, a[3].length - 1) : null,
        host: a[2] ? a[4] : null,
        port: a[5]
          ? a[5].substr(1)
            ? parseInt(a[5].substr(1), 10)
            : null
          : null,
        path: a[6] ? a[6] : null,
        query: a[7] ? a[7].substr(1) : null,
        fragment: a[8] ? a[8].substr(1) : null,
        isGenericURI: b === null && !!c,
      };
      return a;
    }
    f.parse = a;
  },
  66,
);
