__d(
  'JSResourceReferenceImpl',
  [
    'JSResourceEvents',
    'Promise',
    'PromiseAnnotate',
    'ifRequireable',
    'ifRequired',
  ],
  function (a, b, c, d, e, f, g) {
    var h = function (a) {
        return a;
      },
      i = [],
      j = null;
    function k(a) {
      j ? a(j) : i.push(a);
    }
    var l = 'JSResource: unknown caller';
    a = (function () {
      a.setBootloader = function (a) {
        j = a;
        for (a = 0; a < i.length; a++) {
          var b = i[a];
          b(j);
        }
        i = [];
      };
      function a(a) {
        this.$1 = a;
      }
      var e = a.prototype;
      e.getModuleId = function () {
        var a = this.$1;
        return a;
      };
      e.getModuleIdAsRef = function () {
        return this.$1;
      };
      e.load = function () {
        var a = this;
        d('JSResourceEvents').notify(this.$1, this.$2, 'LOADED');
        var c = new (b('Promise'))(function (b) {
          k(function (c) {
            return c.loadModules(
              [a.getModuleIdAsRef()],
              b,
              (c = a.$2) != null ? c : l,
            );
          });
        });
        d('PromiseAnnotate').setDisplayName(
          c,
          'Bootload(' + this.getModuleId() + ')',
        );
        return c;
      };
      e.preload = function () {
        var a,
          b = this,
          c = (a = this.$2) != null ? a : l;
        k(function (a) {
          return a.loadModules(
            [b.getModuleIdAsRef()],
            function () {},
            'preload: ' + c,
          );
        });
      };
      e.equals = function (a) {
        return this === a || this.$1 == a.$1;
      };
      e.getModuleIfRequireable = function () {
        d('JSResourceEvents').notify(this.$1, this.$2, 'ACCESSED');
        return c('ifRequireable').call(null, this.$1, h);
      };
      e.getModuleIfRequired = function () {
        d('JSResourceEvents').notify(this.$1, this.$2, 'ACCESSED');
        return c('ifRequired').call(null, this.$1, h);
      };
      e.__setRef = function (a) {
        this.$2 = a;
        d('JSResourceEvents').notify(this.$1, this.$2, 'CREATED');
        return this;
      };
      a.loadAll = function (a, b) {
        var c = {},
          e = !1;
        for (
          var f = a,
            g = Array.isArray(f),
            h = 0,
            f = g
              ? f
              : f[
                  typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
                ]();
          ;

        ) {
          var i;
          if (g) {
            if (h >= f.length) break;
            i = f[h++];
          } else {
            h = f.next();
            if (h.done) break;
            i = h.value;
          }
          i = i;
          var j = i.$2;
          j && ((e = !0), (c[j] = !0));
          d('JSResourceEvents').notify(i.$1, j, 'LOADED');
        }
        k(function (d) {
          return d.loadModules(
            a.map(function (a) {
              return a.getModuleId();
            }),
            b,
            e ? Object.keys(c).join(':') : 'JSResource: unknown caller',
          );
        });
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
