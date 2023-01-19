__d(
  'IntersectionObserverFallback',
  [
    'FBLogger',
    'TimeSlice',
    'containsNode',
    'getElementRect',
    'performanceNow',
    'setInterval',
    'throttle',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = document.documentElement,
      i = [];
    function j(a, b) {
      var c = Math.max(a.top, b.top),
        d = Math.min(a.bottom, b.bottom),
        e = Math.max(a.left, b.left);
      a = Math.min(a.right, b.right);
      b = a - e;
      var f = d - c;
      return b >= 0 && f >= 0
        ? { top: c, bottom: d, left: e, right: a, width: b, height: f }
        : void 0;
    }
    function k() {
      return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
    }
    var l = function (a) {
      this.time = a.time;
      this.target = a.target;
      this.rootBounds = a.rootBounds;
      this.boundingClientRect = a.boundingClientRect;
      this.intersectionRect = a.intersectionRect || k();
      this.isIntersecting = !!a.intersectionRect;
      a = this.boundingClientRect;
      a = a.width * a.height;
      var b = this.intersectionRect.width * this.intersectionRect.height;
      a
        ? (this.intersectionRatio = Number((b / a).toFixed(4)))
        : (this.intersectionRatio = this.isIntersecting ? 1 : 0);
    };
    a = (function () {
      function a(a, c) {
        var d = this;
        this.THROTTLE_TIMEOUT = 100;
        this.POLL_INTERVAL = null;
        this.$12 = b('TimeSlice').guard(
          b('throttle')(function () {
            var a = d.$14(),
              c = a ? d.$15() : k();
            d.$6.forEach(function (e) {
              var f = e.element,
                h = b('getElementRect')(f),
                i = d.$16(f),
                j = e.entry,
                k = a && i && !d.$2 && d.$17(f, c);
              e.entry = new l({
                intersectionRect: k,
                target: f,
                time: (g || (g = b('performanceNow')))(),
                boundingClientRect: h,
                rootBounds: c,
              });
              k = e.entry;
              !j
                ? d.$7.push(k)
                : a && i
                ? d.$18(j, k) && d.$7.push(k)
                : j && j.isIntersecting && d.$7.push(k);
            });
            d.$7.length && d.$1(d.takeRecords(), d);
          }, this.THROTTLE_TIMEOUT),
          'IntersectionObserverFallback: checkForIntersections',
        );
        this.$2 = !1;
        try {
        } catch (a) {
          this.$2 = !0;
        }
        c = (c = c) != null ? c : {};
        this.$1 = a;
        this.$4 = !1;
        this.$6 = [];
        this.$7 = [];
        this.$8 = this.$9(c.rootMargin);
        this.thresholds = this.$10(c.threshold);
        this.root = (a = c.root) != null ? a : null;
        this.rootMargin = this.$8
          .map(function (a) {
            return a.value + a.unit;
          })
          .join(' ');
      }
      var c = a.prototype;
      c.$10 = function (a) {
        a = (a = a) != null ? a : [0];
        Array.isArray(a) || (a = [a]);
        return a.sort().filter(function (a, b, c) {
          return a !== c[b - 1];
        });
      };
      c.$9 = function (a) {
        a = a || '0px';
        a = a.split(/\s+/).map(function (a) {
          a = /^(-?\d*\.?\d+)(px|%)$/.exec(a);
          return { value: parseFloat(a[1]), unit: a[2] };
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a;
      };
      c.$11 = function () {
        this.$4 ||
          ((this.$4 = !0),
          this.$12(),
          this.POLL_INTERVAL
            ? (this.$5 = b('setInterval')(this.$12, this.POLL_INTERVAL))
            : (window.addEventListener('resize', this.$12, !0),
              document.addEventListener('scroll', this.$12, !0),
              'MutationObserver' in window &&
                ((this.$3 = new MutationObserver(this.$12)),
                this.$3.observe(document, {
                  attributes: !0,
                  childList: !0,
                  characterData: !0,
                  subtree: !0,
                }))));
      };
      c.$13 = function () {
        this.$4 &&
          ((this.$4 = !1),
          this.$5 && (clearInterval(this.$5), (this.$5 = void 0)),
          window.removeEventListener('resize', this.$12, !0),
          document.removeEventListener('scroll', this.$12, !0),
          this.$3 && (this.$3.disconnect(), (this.$3 = void 0)));
      };
      c.$17 = function (a, c) {
        var d = window.getComputedStyle(a);
        if (!d || d.display == 'none') return void 0;
        d = b('getElementRect')(a);
        d = d;
        a = a.parentElement;
        var e = !1;
        while (!e) {
          var f,
            g = null;
          f =
            ((f = a) == null ? void 0 : f.nodeType) == 1
              ? window.getComputedStyle(a)
              : {};
          if (f.display == 'none') return void 0;
          a == this.root || a == document
            ? ((e = !0), (g = c))
            : a != document.body &&
              a != document.documentElement &&
              f.overflow != 'visible' &&
              (g = b('getElementRect')(a));
          if (g) {
            d = j(g, d);
            if (!d) break;
          }
          a = a && a.parentElement;
        }
        return d;
      };
      c.$15 = function () {
        var a;
        if (this.root) a = b('getElementRect')(this.root);
        else {
          var c = document.documentElement,
            d = document.body,
            e =
              (c == null ? void 0 : c.clientWidth) ||
              (d == null ? void 0 : d.clientWidth);
          c =
            (c == null ? void 0 : c.clientHeight) ||
            (d == null ? void 0 : d.clientHeight);
          a = { top: 0, left: 0, right: e, width: e, bottom: c, height: c };
        }
        return this.$19(a);
      };
      c.$19 = function (a) {
        var b = this.$8.map(function (b, c) {
          return b.unit == 'px'
            ? b.value
            : (b.value * (c % 2 ? a.width : a.height)) / 100;
        });
        b = {
          top: a.top - b[0],
          right: a.right + b[1],
          bottom: a.bottom + b[2],
          left: a.left - b[3],
          width: 0,
          height: 0,
        };
        b.width = b.right - b.left;
        b.height = b.bottom - b.top;
        return b;
      };
      c.$18 = function (a, b) {
        a = a && a.isIntersecting ? a.intersectionRatio || 0 : -1;
        b = b.isIntersecting ? b.intersectionRatio || 0 : -1;
        if (a === b) return !1;
        for (var c = 0; c < this.thresholds.length; c++) {
          var d = this.thresholds[c];
          if (d == a || d == b || d < a !== d < b) return !0;
        }
        return !1;
      };
      c.$14 = function () {
        return !this.root || b('containsNode')(h, this.root);
      };
      c.$16 = function (a) {
        var c = this.root || h;
        return b('containsNode')(c, a);
      };
      c.$20 = function () {
        i.indexOf(this) < 0 && i.push(this);
      };
      c.$21 = function () {
        var a = i.indexOf(this);
        a != -1 && i.splice(a, 1);
      };
      c.observe = function (a) {
        if (!a) {
          b('FBLogger')('io').warn(
            'IntersectionObserverFallback target does not exist',
          );
          return;
        }
        if (
          this.$6.some(function (b) {
            return b.element == a;
          })
        )
          return;
        this.$20();
        this.$6.push({ element: a, entry: null });
        this.$11();
        this.$12();
      };
      c.unobserve = function (a) {
        (this.$6 = this.$6.filter(function (b) {
          return b.element != a;
        })),
          this.$6.length || (this.$13(), this.$21());
      };
      c.disconnect = function () {
        (this.$6 = []), this.$13(), this.$21();
      };
      c.takeRecords = function () {
        var a = this.$7.slice();
        this.$7 = [];
        return a;
      };
      return a;
    })();
    e.exports = a;
  },
  null,
);
