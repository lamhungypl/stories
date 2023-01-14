__d(
  'EventEmitterWithValidation',
  ['BaseEventEmitter'],
  function (a, b, c, d, e, f) {
    'use strict';
    a = (function (a) {
      babelHelpers.inheritsLoose(b, a);
      function b(b, c) {
        var d;
        d = a.call(this) || this;
        d.$EventEmitterWithValidation1 = Object.keys(b);
        d.$EventEmitterWithValidation2 = Boolean(c);
        return d;
      }
      var c = b.prototype;
      c.emit = function (b) {
        if (this.$EventEmitterWithValidation1.indexOf(b) === -1) {
          if (this.$EventEmitterWithValidation2) return;
          throw new TypeError(g(b, this.$EventEmitterWithValidation1));
        }
        return a.prototype.emit.apply(this, arguments);
      };
      return b;
    })(b('BaseEventEmitter'));
    function g(a, b) {
      a = 'Unknown event type "' + a + '". ';
      a += 'Known event types: ' + b.join(', ') + '.';
      return a;
    }
    e.exports = a;
  },
  null,
);
