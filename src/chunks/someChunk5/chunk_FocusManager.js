__d(
  'FocusManager',
  ['getTabbableNodes'],
  function (a, b, c, d, e, f, g) {
    var h = !1,
      i = !1,
      j = !1,
      k = 500;
    function l() {
      try {
        var a = document.createElement('div');
        a.addEventListener(
          'focus',
          function (a) {
            a.preventDefault(), a.stopPropagation();
          },
          !0,
        );
        a.focus(
          Object.defineProperty({}, 'preventScroll', {
            get: function () {
              i = !0;
            },
          }),
        );
      } catch (a) {}
    }
    function m(a) {
      a = a.parentElement;
      var b = [],
        c = document.scrollingElement || document.documentElement;
      while (a && a !== c) {
        var d = a,
          e = d.offsetHeight;
        d = d.offsetWidth;
        (e < a.scrollHeight || d < a.scrollWidth) &&
          b.push([a, a.scrollTop, a.scrollLeft]);
        a = a.parentElement;
      }
      c && b.push([c, c.scrollTop, c.scrollLeft]);
      return b;
    }
    function n(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b],
          d = c[0],
          e = c[1];
        c = c[2];
        d.scrollTop = e;
        d.scrollLeft = c;
      }
    }
    function a(a, b) {
      a = Array.isArray(a) ? a : [a];
      for (var c = 0; c < a.length; c++) {
        var d = b.DO_NOT_USE_queryAllNodes(a[c]);
        if (d) return d;
      }
      return null;
    }
    function o(a, b) {
      a = Array.isArray(a) ? a : [a];
      for (var c = 0; c < a.length; c++) {
        var d = b.DO_NOT_USE_queryFirstNode(a[c]);
        if (d) return d;
      }
      return null;
    }
    function b(a, b, c) {
      c = c || {};
      var d = c.preventScroll,
        e = c.focusWithoutUserIntent;
      c = c.focusWithAutoFocus;
      a = o(a, b);
      a != null &&
        p(a, {
          preventScroll: d,
          focusWithoutUserIntent: e,
          focusWithAutoFocus: c,
        });
    }
    function d() {
      return h;
    }
    function e(a) {
      return a._focusWithAutoFocus === !0;
    }
    function p(a, b) {
      b = b || {};
      var c = b.preventScroll,
        d = b.focusWithoutUserIntent;
      b = b.focusWithAutoFocus;
      if (a !== null) {
        j || ((j = !0), l());
        var e = a._tabIndexState;
        if (e && e.canTab === !1) return;
        e = e ? e.value : a.tabIndex;
        a.tabIndex = -1;
        var f = h;
        c = c || !1;
        b === !0 &&
          ((a._focusWithAutoFocus = !0),
          window.setTimeout(function () {
            a._focusWithAutoFocus = !1;
          }, k));
        try {
          h = d || !1;
          b = a.__lexicalEditor;
          if (b !== void 0) b.focus();
          else if (!c) t(a);
          else if (i) t(a, { preventScroll: !0 });
          else {
            d = m(a);
            t(a);
            n(d);
          }
        } catch (a) {
        } finally {
          h = f;
        }
        a.tabIndex = e;
      }
    }
    function f(a, b, d) {
      a = c('getTabbableNodes')(a, b);
      b = a[0];
      var e = a[2],
        f = a[3];
      a = a[4];
      a !== null && a !== e && b && p(b[f + 1], { preventScroll: d });
    }
    function q(a, b, d) {
      a = c('getTabbableNodes')(a, b);
      b = a[0];
      var e = a[1],
        f = a[3];
      a = a[4];
      a !== null && a !== e && b && p(b[f - 1], { preventScroll: d });
    }
    function r(a, b, d, e, f) {
      a = c('getTabbableNodes')(a, b);
      b = a[0];
      var g = a[1],
        h = a[2],
        i = a[3];
      a = a[4];
      if (a === null || b === null) return;
      a === h
        ? f != null
          ? f()
          : e === !0 && (p(g), d.preventDefault(), d.stopPropagation())
        : (p(b[i + 1]), d.preventDefault(), d.stopPropagation());
    }
    function s(a, b, d, e, f) {
      a = c('getTabbableNodes')(a, b);
      b = a[0];
      var g = a[1],
        h = a[2],
        i = a[3];
      a = a[4];
      if (a === null || b === null) return;
      a === g
        ? f != null
          ? f()
          : e === !0 && (p(h), d.preventDefault(), d.stopPropagation())
        : (p(b[i - 1]), d.preventDefault(), d.stopPropagation());
    }
    var t = function (a, b) {
      (a.focus || HTMLElement.prototype.focus).call(a, b);
    };
    g.getAllNodesFromOneOrManyQueries = a;
    g.getFirstNodeFromOneOrManyQueries = o;
    g.focusFirst = b;
    g.isFocusingWithoutUserIntent = d;
    g.wasElementAutoFocused = e;
    g.focusElement = p;
    g.focusNext = f;
    g.focusPrevious = q;
    g.focusNextContained = r;
    g.focusPreviousContained = s;
  },
  98,
);
