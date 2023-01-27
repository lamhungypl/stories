__d(
  'XController',
  ['XControllerURIBuilder', 'XRequest'],
  function (a, b, c, d, e, f, g) {
    a = (function () {
      function a(a, b) {
        (this.$1 = a), (this.$2 = b);
      }
      var b = a.prototype;
      b.getURIBuilder = function (a) {
        var b = this,
          d = new (c('XControllerURIBuilder'))(this.$1, this.$2);
        if (a) {
          var e = this.getRequest(a);
          Object.keys(this.$2).forEach(function (a) {
            var c = b.$2[a],
              f = '';
            !c.required &&
              !Object.prototype.hasOwnProperty.call(c, 'defaultValue') &&
              (f = 'Optional');
            f = 'get' + f + c.type;
            f = e[f](a);
            if (
              f == null ||
              (Object.prototype.hasOwnProperty.call(c, 'defaultValue') &&
                f === c.defaultValue)
            )
              return;
            c = 'set' + c.type;
            d[c](a, f);
          });
        }
        return d;
      };
      b.getRequest = function (a) {
        return new (c('XRequest'))(this.$1, this.$2, a);
      };
      a.create = function (b, c) {
        return new a(b, c);
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
