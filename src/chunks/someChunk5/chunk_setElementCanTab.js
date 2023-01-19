__d(
  'setElementCanTab',
  [],
  function (a, b, c, d, e, f) {
    c = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'tabIndex');
    d = Object.getOwnPropertyDescriptor(SVGElement.prototype, 'tabIndex');
    e = function (a) {
      return a;
    };
    var g = c ? c.set : e,
      h = d ? d.set : e;
    function i(a) {
      return a instanceof SVGElement ? h : g;
    }
    function a(a, b) {
      var c = a._tabIndexState,
        d = i(a);
      if (!c) {
        var e = { value: a.tabIndex, canTab: b };
        a._tabIndexState = e;
        b || (a.tabIndex = -1);
        Object.defineProperty(a, 'tabIndex', {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return e.canTab ? e.value : -1;
          },
          set: function (a) {
            e.canTab && typeof d === 'function' && d.call(this, a),
              (e.value = a);
          },
        });
      } else
        c.canTab !== b &&
          typeof d === 'function' &&
          (d.call(a, b ? c.value : -1), (c.canTab = b));
    }
    function b(a) {
      var b = a._tabIndexState;
      if (!b) return a.tabIndex > 0;
      else return b.canTab;
    }
    f.setElementCanTab = a;
    f.canElementTab = b;
  },
  66,
);
