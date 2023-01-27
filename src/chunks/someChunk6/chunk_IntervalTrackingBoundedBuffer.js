__d(
  'IntervalTrackingBoundedBuffer',
  ['CircularBuffer', 'ErrorPubSub'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = 5e3;
    a = (function () {
      function a(a) {
        var b = this;
        this.$6 = 0;
        if (a != null) {
          if (a <= 0)
            throw new Error('Size for a buffer must be greater than zero.');
        } else a = h;
        this.$4 = a;
        this.$1 = new (c('CircularBuffer'))(a);
        this.$1.onEvict(function () {
          b.$6++;
        });
        this.$2 = [];
        this.$3 = 1;
        this.$5 = 0;
      }
      var b = a.prototype;
      b.open = function () {
        var a = this,
          b = this.$3++,
          c = !1,
          d,
          e = this.$5,
          f = {
            id: b,
            startIdx: e,
            hasOverflown: function () {
              return f.getOverflowSize() > 0;
            },
            getOverflowSize: function () {
              return d != null ? d : Math.max(a.$6 - e, 0);
            },
            close: function () {
              if (c) return [];
              else {
                c = !0;
                d = a.$6 - e;
                return a.$7(b);
              }
            },
          };
        this.$2.push(f);
        return f;
      };
      b.pushElement = function (a) {
        this.$2.length > 0 && (this.$1.write(a), this.$5++);
        return this;
      };
      b.isActive = function () {
        return this.$2.length > 0;
      };
      b.$8 = function (a) {
        return Math.max(a - this.$6, 0);
      };
      b.$7 = function (a) {
        var b, d, e, f;
        for (var g = 0; g < this.$2.length; g++) {
          var h = this.$2[g],
            i = h.startIdx;
          h = h.id;
          h === a ? ((e = g), (f = i)) : (d == null || i < d) && (d = i);
          (b == null || i < b) && (b = i);
        }
        if (e == null || b == null || f == null) {
          c('ErrorPubSub').reportError(
            new Error('messed up state inside IntervalTrackingBoundedBuffer'),
          );
          return [];
        }
        this.$2.splice(e, 1);
        h = this.$8(f);
        i = this.$1.read().slice(h);
        g = this.$8(d == null ? this.$5 : d) - this.$8(b);
        g > 0 && (this.$1.dropFirst(g), (this.$6 += g));
        return i;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
