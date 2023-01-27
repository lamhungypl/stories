__d(
  'ix',
  ['invariant', 'nullthrows'],
  function (a, b, c, d, e, f, g, h) {
    var i = {},
      j = new Set();
    function b(b) {
      var d = i[b];
      !d && h(0, 11798, b);
      a.__flight_execution_mode_DO_NOT_USE === 'flight' &&
        d.sprited === 1 &&
        j.add(
          c('nullthrows')(
            d.origPath,
            'origPath should be defined on the server in react flight',
          ),
        );
      return d;
    }
    b.add = function (a, b) {
      var c = !1;
      for (c in a)
        b && b.entry++,
          !(c in i)
            ? ((a[c].loggingID = c), (i[c] = a[c]))
            : b && b.dup_entry++;
    };
    b.getUsedPaths_ONLY_FOR_REACT_FLIGHT = function () {
      a.__flight_execution_mode_DO_NOT_USE === 'flight' || h(0, 34547);
      return Array.from(j);
    };
    g['default'] = b;
  },
  98,
);
