__d(
  'TimingAnnotations',
  [],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a() {}
      var b = a.prototype;
      b.addStringAnnotation = function (a, b) {
        return this;
      };
      b.addSetAnnotation = function (a, b) {
        return this;
      };
      b.addSetElement = function (a, b) {
        return this;
      };
      b.registerOnBeforeSend = function (a) {
        return this;
      };
      b.addVectorAnnotation = function (a, b) {
        return this;
      };
      b.addVectorElement = function (a, b) {
        return this;
      };
      return a;
    })();
    b = (function () {
      function a() {
        (this.$1 = null), (this.$2 = null), (this.$3 = null), (this.$4 = []);
      }
      var b = a.prototype;
      b.addStringAnnotation = function (a, b) {
        this.$2 = this.$2 || new Map();
        this.$2.set(a, b);
        return this;
      };
      b.addSetAnnotation = function (a, b) {
        var c = this.$1 || new Map(),
          d = c.get(a) || new Set();
        b.forEach(function (a) {
          return d.add(a);
        });
        c.set(a, d);
        this.$1 = c;
        return this;
      };
      b.addSetElement = function (a, b) {
        var c = this.$1 || new Map(),
          d = c.get(a) || new Set();
        d.add(b);
        c.set(a, d);
        this.$1 = c;
        return this;
      };
      b.addVectorAnnotation = function (a, b) {
        this.$3 = this.$3 || new Map();
        this.$3.set(a, b);
        return this;
      };
      b.addVectorElement = function (a, b) {
        var c = (this.$3 = this.$3 || new Map()),
          d = this.$3.get(a) || [];
        d.push(b);
        c.set(a, d);
        return this;
      };
      b.registerOnBeforeSend = function (a) {
        this.$4.push(a);
        return this;
      };
      b.prepareToSend = function () {
        var a = this;
        this.$4.forEach(function (b) {
          return b(a);
        });
        this.$4 = [];
        var b = {};
        if (this.$1 != null)
          for (
            var c = this.$1,
              d = Array.isArray(c),
              e = 0,
              c = d
                ? c
                : c[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            var f;
            if (d) {
              if (e >= c.length) break;
              f = c[e++];
            } else {
              e = c.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            var g = f[0];
            f = f[1];
            b[g] = Array.from(f.values());
          }
        g = {};
        if (this.$2 != null)
          for (
            f = this.$2,
              e = Array.isArray(f),
              d = 0,
              f = e
                ? f
                : f[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            if (e) {
              if (d >= f.length) break;
              c = f[d++];
            } else {
              d = f.next();
              if (d.done) break;
              c = d.value;
            }
            c = c;
            var h = c[0];
            c = c[1];
            g[h] = c;
          }
        h = {};
        if (this.$3 != null)
          for (
            c = this.$3,
              d = Array.isArray(c),
              e = 0,
              c = d
                ? c
                : c[
                    typeof Symbol === 'function'
                      ? Symbol.iterator
                      : '@@iterator'
                  ]();
            ;

          ) {
            if (d) {
              if (e >= c.length) break;
              f = c[e++];
            } else {
              e = c.next();
              if (e.done) break;
              f = e.value;
            }
            f = f;
            var i = f[0];
            f = f[1];
            h[i] = f;
          }
        return { setProps: b, stringProps: g, vectorProps: h };
      };
      a.combine = function (a, b) {
        var c;
        a != null && b != null
          ? ((a.stringProps = babelHelpers['extends'](
              {},
              b.stringProps,
              a.stringProps,
            )),
            (a.setProps = babelHelpers['extends']({}, b.setProps, a.setProps)),
            (c = a))
          : a != null
          ? (c = a)
          : b != null && (c = b);
        return c;
      };
      return a;
    })();
    b.EmptyTimingAnnotations = a;
    b.EmptyTraceTimingAnnotations = a;
    b.TraceTimingAnnotations = b;
    f['default'] = b;
  },
  66,
);
