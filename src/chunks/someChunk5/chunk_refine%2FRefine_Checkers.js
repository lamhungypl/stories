__d(
  'refine/Refine_Checkers',
  [],
  function (a, b, c, d, e, f) {
    'use strict';
    var g = (function () {
      function a(a, b) {
        a === void 0 && (a = null),
          b === void 0 && (b = '<root>'),
          (this.parent = a),
          (this.field = b);
      }
      var b = a.prototype;
      b.extend = function (b) {
        return new a(this, b);
      };
      b.toString = function () {
        var a = [],
          b = this;
        while (b != null) {
          var c = b,
            d = c.field;
          c = c.parent;
          a.push(d);
          b = c;
        }
        return a.reverse().join('');
      };
      return a;
    })();
    function a(a, b) {
      return { type: 'success', value: a, warnings: b };
    }
    function b(a, b) {
      return { type: 'failure', message: a, path: b };
    }
    function c(a, b) {
      return function (c, d) {
        d === void 0 && (d = new g());
        c = a(c, d);
        return c.type === 'failure' ? c : b(c, d);
      };
    }
    e.exports = { Path: g, success: a, failure: b, compose: c };
  },
  null,
);
