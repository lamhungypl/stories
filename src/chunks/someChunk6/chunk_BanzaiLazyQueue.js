__d(
  'BanzaiLazyQueue',
  ['SimpleHook'],
  function (a, b, c, d, e, f, g) {
    var h = [],
      i = new (d('SimpleHook').SimpleHook)();
    a = {
      onQueue: i,
      queuePost: function (a, b, c) {
        h.push([a, b, c]), i.call(a, b, c);
      },
      flushQueue: function () {
        var a = h;
        h = [];
        return a;
      },
    };
    f.exports = a;
  },
  34,
);
