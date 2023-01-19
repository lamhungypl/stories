__d(
  'bind',
  [],
  function (a, b, c, d, e, f) {
    function a(a, b) {
      var c = Array.prototype.slice.call(arguments, 2);
      if (typeof b !== 'string')
        return Function.prototype.bind.apply(b, [a].concat(c));
      function d() {
        var d = c.concat(Array.prototype.slice.call(arguments));
        if (a[b]) return a[b].apply(a, d);
      }
      d.toString = function () {
        return 'bound lazily: ' + a[b];
      };
      return d;
    }
    e.exports = a;
  },
  null,
);
