__d(
  'SnappyCompress',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    function g() {
      return typeof process === 'object' &&
        typeof process.versions === 'object' &&
        typeof process.versions.node !== 'undefined'
        ? !0
        : !1;
    }
    function h(a) {
      return a instanceof Uint8Array && (!g() || !Buffer.isBuffer(a));
    }
    function i(a) {
      return a instanceof ArrayBuffer;
    }
    function j(a) {
      return !g() ? !1 : Buffer.isBuffer(a);
    }
    var k =
      'Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array';
    function a(a) {
      if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
      var b = !1,
        c = !1;
      h(a) ? (b = !0) : i(a) && ((c = !0), (a = new Uint8Array(a)));
      a = new A(a);
      var d = a.readUncompressedLength();
      if (d === -1) throw new Error('Invalid Snappy bitstream');
      if (b) {
        b = new Uint8Array(d);
        if (!a.uncompressToBuffer(b))
          throw new Error('Invalid Snappy bitstream');
      } else if (c) {
        b = new ArrayBuffer(d);
        c = new Uint8Array(b);
        if (!a.uncompressToBuffer(c))
          throw new Error('Invalid Snappy bitstream');
      } else {
        b = Buffer.alloc(d);
        if (!a.uncompressToBuffer(b))
          throw new Error('Invalid Snappy bitstream');
      }
      return b;
    }
    function b(a) {
      if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
      var b = !1,
        c = !1;
      h(a) ? (b = !0) : i(a) && ((c = !0), (a = new Uint8Array(a)));
      a = new x(a);
      var d = a.maxCompressedLength(),
        e,
        f,
        g;
      b
        ? ((e = new Uint8Array(d)), (g = a.compressToBuffer(e)))
        : c
        ? ((e = new ArrayBuffer(d)),
          (f = new Uint8Array(e)),
          (g = a.compressToBuffer(f)))
        : ((e = Buffer.alloc(d)), (g = a.compressToBuffer(e)));
      if (!e.slice) {
        f = new Uint8Array(Array.prototype.slice.call(e, 0, g));
        if (b) return f;
        else if (c) return f.buffer;
        else throw new Error('not implemented');
      }
      return e.slice(0, g);
    }
    c = 16;
    var l = 1 << c,
      m = 14,
      n = new Array(m + 1);
    function o(a, b) {
      return (a * 506832829) >>> b;
    }
    function p(a, b) {
      return a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24);
    }
    function q(a, b, c) {
      return (
        a[b] === a[c] &&
        a[b + 1] === a[c + 1] &&
        a[b + 2] === a[c + 2] &&
        a[b + 3] === a[c + 3]
      );
    }
    function r(a, b, c, d, e) {
      var f;
      for (f = 0; f < e; f++) c[d + f] = a[b + f];
    }
    function s(a, b, c, d, e) {
      c <= 60
        ? ((d[e] = (c - 1) << 2), (e += 1))
        : c < 256
        ? ((d[e] = 60 << 2), (d[e + 1] = c - 1), (e += 2))
        : ((d[e] = 61 << 2),
          (d[e + 1] = (c - 1) & 255),
          (d[e + 2] = (c - 1) >>> 8),
          (e += 3));
      r(a, b, d, e, c);
      return e + c;
    }
    function t(a, b, c, d) {
      if (d < 12 && c < 2048) {
        a[b] = 1 + ((d - 4) << 2) + ((c >>> 8) << 5);
        a[b + 1] = c & 255;
        return b + 2;
      } else {
        a[b] = 2 + ((d - 1) << 2);
        a[b + 1] = c & 255;
        a[b + 2] = c >>> 8;
        return b + 3;
      }
    }
    function u(a, b, c, d) {
      while (d >= 68) (b = t(a, b, c, 64)), (d -= 64);
      d > 64 && ((b = t(a, b, c, 60)), (d -= 60));
      return t(a, b, c, d);
    }
    function v(a, b, c, d, e) {
      var f = 1;
      while (1 << f <= c && f <= m) f += 1;
      f -= 1;
      var g = 32 - f;
      typeof n[f] === 'undefined' && (n[f] = new Uint16Array(1 << f));
      f = n[f];
      var h;
      for (h = 0; h < f.length; h++) f[h] = 0;
      h = b + c;
      var i = b,
        j = b,
        k,
        l,
        r,
        t,
        v,
        w = !0,
        x = 15;
      if (c >= x) {
        c = h - x;
        b += 1;
        x = o(p(a, b), g);
        while (w) {
          t = 32;
          l = b;
          do {
            b = l;
            k = x;
            v = t >>> 5;
            t += 1;
            l = b + v;
            if (b > c) {
              w = !1;
              break;
            }
            x = o(p(a, l), g);
            r = i + f[k];
            f[k] = b - i;
          } while (!q(a, b, r));
          if (!w) break;
          e = s(a, j, b - j, d, e);
          do {
            v = b;
            k = 4;
            while (b + k < h && a[b + k] === a[r + k]) k += 1;
            b += k;
            l = v - r;
            e = u(d, e, l, k);
            j = b;
            if (b >= c) {
              w = !1;
              break;
            }
            t = o(p(a, b - 1), g);
            f[t] = b - 1 - i;
            v = o(p(a, b), g);
            r = i + f[v];
            f[v] = b - i;
          } while (q(a, b, r));
          if (!w) break;
          b += 1;
          x = o(p(a, b), g);
        }
      }
      j < h && (e = s(a, j, h - j, d, e));
      return e;
    }
    function w(a, b, c) {
      do (b[c] = a & 127), (a = a >>> 7), a > 0 && (b[c] += 128), (c += 1);
      while (a > 0);
      return c;
    }
    function x(a) {
      this.array = a;
    }
    x.prototype.maxCompressedLength = function () {
      var a = this.array.length;
      return 32 + a + Math.floor(a / 6);
    };
    x.prototype.compressToBuffer = function (a) {
      var b = this.array,
        c = b.length,
        d = 0,
        e = 0,
        f;
      e = w(c, a, e);
      while (d < c) (f = Math.min(c - d, l)), (e = v(b, d, f, a, e)), (d += f);
      return e;
    };
    var y = [0, 255, 65535, 16777215, 4294967295];
    function r(a, b, c, d, e) {
      var f;
      for (f = 0; f < e; f++) c[d + f] = a[b + f];
    }
    function z(a, b, c, d) {
      var e;
      for (e = 0; e < d; e++) a[b + e] = a[b - c + e];
    }
    function A(a) {
      (this.array = a), (this.pos = 0);
    }
    A.prototype.readUncompressedLength = function () {
      var a = 0,
        b = 0,
        c,
        d;
      while (b < 32 && this.pos < this.array.length) {
        c = this.array[this.pos];
        this.pos += 1;
        d = c & 127;
        if ((d << b) >>> b !== d) return -1;
        a |= d << b;
        if (c < 128) return a;
        b += 7;
      }
      return -1;
    };
    A.prototype.uncompressToBuffer = function (a) {
      var b = this.array,
        c = b.length,
        d = this.pos,
        e = 0,
        f,
        g,
        h,
        i;
      while (d < b.length) {
        f = b[d];
        d += 1;
        if ((f & 3) === 0) {
          g = (f >>> 2) + 1;
          if (g > 60) {
            if (d + 3 >= c) return !1;
            h = g - 60;
            g = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
            g = (g & y[h]) + 1;
            d += h;
          }
          if (d + g > c) return !1;
          r(b, d, a, e, g);
          d += g;
          e += g;
        } else {
          switch (f & 3) {
            case 1:
              g = ((f >>> 2) & 7) + 4;
              i = b[d] + ((f >>> 5) << 8);
              d += 1;
              break;
            case 2:
              if (d + 1 >= c) return !1;
              g = (f >>> 2) + 1;
              i = b[d] + (b[d + 1] << 8);
              d += 2;
              break;
            case 3:
              if (d + 3 >= c) return !1;
              g = (f >>> 2) + 1;
              i = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
              d += 4;
              break;
            default:
              break;
          }
          if (i === 0 || i > e) return !1;
          z(a, e, i, g);
          e += g;
        }
      }
      return !0;
    };
    e.exports.uncompress = a;
    e.exports.compress = b;
  },
  null,
);
