__d(
  'DOMEvent',
  ['invariant'],
  function (a, b, c, d, e, f, g, h) {
    a = (function () {
      function a(a) {
        (this.event = a || window.event),
          typeof this.event.srcElement !== 'unknown' || h(0, 5798),
          (this.target = this.event.target || this.event.srcElement);
      }
      var b = a.prototype;
      b.preventDefault = function () {
        var a = this.event;
        a.preventDefault
          ? (a.preventDefault(),
            'defaultPrevented' in a || (a.defaultPrevented = !0))
          : (a.returnValue = !1);
        return this;
      };
      b.isDefaultPrevented = function () {
        var a = this.event;
        return 'defaultPrevented' in a
          ? a.defaultPrevented
          : a.returnValue === !1;
      };
      b.stopPropagation = function () {
        var a = this.event;
        a.stopPropagation ? a.stopPropagation() : (a.cancelBubble = !0);
        return this;
      };
      b.kill = function () {
        this.stopPropagation().preventDefault();
        return this;
      };
      a.killThenCall = function (b) {
        return function (c) {
          new a(c).kill();
          return b();
        };
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
