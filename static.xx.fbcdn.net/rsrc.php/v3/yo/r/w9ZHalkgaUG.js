/*FB_PKG_DELIM*/

__d(
  'LSUpsertGradientColor',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [];
      return b.seq([
        function (c) {
          return b.db
            .table(117)
            .put({
              themeFbid: a[0],
              gradientIndex: a[1],
              color: a[2],
              type_: [0, 0],
            });
        },
        function (a) {
          return b.resolve(c);
        },
      ]);
    }
    e.exports = a;
  },
  null,
);
__d(
  'LSUpsertTheme',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [],
        d = [],
        e;
      return b.seq([
        function (d) {
          return (
            b.i64.neq(e, e) ? (c[0] = e) : (c[0] = a[0]),
            b.db
              .table(116)
              .put({
                fbid: a[0],
                themeIdx: a[1],
                fallbackColor: a[2],
                reverseGradiantsForRadial: a[3],
                accessibilityLabel: a[4],
                isDeprecated: a[10],
              })
          );
        },
        function (a) {
          return b.resolve(d);
        },
      ]);
    }
    e.exports = a;
  },
  null,
);
