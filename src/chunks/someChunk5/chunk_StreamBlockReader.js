__d(
  'StreamBlockReader',
  ['Promise', 'regeneratorRuntime'],
  function (a, b, c, d, e, f) {
    a = (function () {
      function a(a) {
        var c = this;
        if (!a.getReader)
          throw new Error('No getReader method found on given object');
        this.$3 = a.getReader();
        this.$1 = '';
        this.$2 = null;
        this.$4 = !1;
        this.$5 = 'utf-8';
        this.$6 = '';
        this.$9 = !1;
        this.$8 = function () {
          return b('Promise').reject(
            'Sorry, you are somehow using this too early.',
          );
        };
        this.$7 = new (b('Promise'))(function (a, b) {
          c.$8 = a;
        });
      }
      var c = a.prototype;
      c.changeEncoding = function (a) {
        if (this.$2)
          throw new Error('Decoder already in use, encoding cannot be changed');
        this.$5 = a;
      };
      c.$10 = function () {
        if (!self.TextDecoder)
          throw new Error('TextDecoder is not supported here');
        this.$2 || (this.$2 = new self.TextDecoder(this.$5));
        return this.$2;
      };
      c.$11 = function () {
        if (this.$9)
          throw new Error('Something else is already reading from this reader');
        this.$9 = !0;
      };
      c.$12 = function () {
        this.$9 = !1;
      };
      c.isDone = function () {
        return this.$4;
      };
      c.$13 = function () {
        var a, c, d, e;
        return b('regeneratorRuntime').async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  if (!(this.$6 !== '')) {
                    f.next = 4;
                    break;
                  }
                  a = this.$6;
                  this.$6 = '';
                  return f.abrupt('return', a);
                case 4:
                  if (!this.isDone()) {
                    f.next = 6;
                    break;
                  }
                  throw new Error('You cannot read from a stream that is done');
                case 6:
                  f.next = 8;
                  return b('regeneratorRuntime').awrap(this.$3.read());
                case 8:
                  c = f.sent;
                  d = c.done;
                  e = c.value;
                  this.$4 = d;
                  d && this.$8();
                  return f.abrupt(
                    'return',
                    e ? this.$10().decode(e, { stream: !d }) : '',
                  );
                case 14:
                case 'end':
                  return f.stop();
              }
          },
          null,
          this,
        );
      };
      c.readNextBlock = function () {
        var a;
        return b('regeneratorRuntime').async(
          function (b) {
            while (1)
              switch ((b.prev = b.next)) {
                case 0:
                  this.$11();
                  a = this.$13();
                  this.$12();
                  return b.abrupt('return', a);
                case 4:
                case 'end':
                  return b.stop();
              }
          },
          null,
          this,
        );
      };
      c.readUntilStringOrEnd = function (a) {
        return b('regeneratorRuntime').async(
          function (c) {
            while (1)
              switch ((c.prev = c.next)) {
                case 0:
                  c.next = 2;
                  return b('regeneratorRuntime').awrap(
                    this.readUntilOneOfStringOrEnd_DO_NOT_USE([a]),
                  );
                case 2:
                  return c.abrupt('return', c.sent);
                case 3:
                case 'end':
                  return c.stop();
              }
          },
          null,
          this,
        );
      };
      c.readUntilStringOrThrow = function (a) {
        var c, d, e;
        return b('regeneratorRuntime').async(
          function (f) {
            while (1)
              switch ((f.prev = f.next)) {
                case 0:
                  if (a) {
                    f.next = 2;
                    break;
                  }
                  throw new Error('cannot read empty string');
                case 2:
                  this.$11(), (c = ''), (d = 0);
                case 5:
                  if (this.isDone()) {
                    f.next = 23;
                    break;
                  }
                  f.t0 = c;
                  f.next = 9;
                  return b('regeneratorRuntime').awrap(this.$13());
                case 9:
                  c = f.t0 += f.sent;
                  if (!(c.length < a.length)) {
                    f.next = 12;
                    break;
                  }
                  return f.abrupt('continue', 5);
                case 12:
                  e = c.substring(d).indexOf(a);
                  if (!(e !== -1)) {
                    f.next = 20;
                    break;
                  }
                  e += d;
                  this.$6 = c.substring(e + a.length);
                  this.$12();
                  return f.abrupt('return', c.substring(0, e));
                case 20:
                  d = c.length - a.length + 1;
                case 21:
                  f.next = 5;
                  break;
                case 23:
                  this.$6 = c;
                  this.$12();
                  throw new Error('Breakpoint not found');
                case 26:
                case 'end':
                  return f.stop();
              }
          },
          null,
          this,
        );
      };
      c.readUntilOneOfStringOrEnd_DO_NOT_USE = function (a) {
        var c, d, e, f;
        return b('regeneratorRuntime').async(
          function (g) {
            while (1)
              switch ((g.prev = g.next)) {
                case 0:
                  this.$11(), (c = '');
                case 2:
                  if (this.isDone()) {
                    g.next = 20;
                    break;
                  }
                  g.t0 = c;
                  g.next = 6;
                  return b('regeneratorRuntime').awrap(this.$13());
                case 6:
                  (c = g.t0 += g.sent), (d = 0);
                case 8:
                  if (!(d < a.length)) {
                    g.next = 18;
                    break;
                  }
                  e = a[d];
                  f = c.indexOf(e);
                  if (!(f !== -1)) {
                    g.next = 15;
                    break;
                  }
                  this.$6 = c.substring(f + e.length);
                  this.$12();
                  return g.abrupt('return', c.substring(0, f));
                case 15:
                  d++;
                  g.next = 8;
                  break;
                case 18:
                  g.next = 2;
                  break;
                case 20:
                  this.$12();
                  return g.abrupt('return', c);
                case 22:
                case 'end':
                  return g.stop();
              }
          },
          null,
          this,
        );
      };
      c.waitUntilDone = function () {
        return b('regeneratorRuntime').async(
          function (a) {
            while (1)
              switch ((a.prev = a.next)) {
                case 0:
                  return a.abrupt('return', this.$7);
                case 1:
                case 'end':
                  return a.stop();
              }
          },
          null,
          this,
        );
      };
      return a;
    })();
    f['default'] = a;
  },
  66,
);
