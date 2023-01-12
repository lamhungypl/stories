__d(
  'LSCreateOfflineThreadingID',
  [],
  function (a, b, c, d, e, f) {
    function a() {
      var a = arguments,
        b = a[a.length - 1];
      b.n;
      var c = [],
        d = [];
      return (
        (c[0] = b.i64.random()),
        (d[0] = b.i64.and_(
          b.i64.or_(
            b.i64.lsl_(a[0], b.i64.to_int32([0, 22])),
            b.i64.and_(c[0], [0, 4194303]),
          ),
          [2147483647, 4294967295],
        )),
        b.resolve(d)
      );
    }
    e.exports = a;
  },
  null,
);
