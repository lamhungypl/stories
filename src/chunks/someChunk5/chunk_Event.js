__d(
  'Event',
  [
    '$',
    'Arbiter',
    'DOMEvent',
    'DOMEventListener',
    'DOMQuery',
    'DataStore',
    'ErrorGuard',
    'EventProfiler',
    'ExecutionEnvironment',
    'FBLogger',
    'Parent',
    'Scroll',
    'TimeSlice',
    'UserAgent',
    'dedupString',
    'fb-error',
    'getDocumentScrollElement',
    'getObjectValues',
  ],
  function (a, b, c, d, e, f) {
    var g,
      h = b('fb-error').TAAL,
      i = 'Event.listeners';
    Event.prototype || (Event.prototype = {});
    function j(a) {
      (a.type === 'click' || a.type === 'mouseover' || a.type === 'keydown') &&
        b('Arbiter').inform('Event/stop', { event: a });
    }
    var k = (function () {
      'use strict';
      function a(a, b, c) {
        (this.cancelBubble = !1),
          (this.target = a),
          (this.type = b),
          (this.data = c);
      }
      var c = a.prototype;
      c.getData = function () {
        this.data = this.data || {};
        return this.data;
      };
      c.stop = function () {
        return Event.stop(this);
      };
      c.prevent = function () {
        return Event.prevent(this);
      };
      c.isDefaultPrevented = function () {
        return Event.isDefaultPrevented(this);
      };
      c.kill = function () {
        return Event.kill(this);
      };
      c.getTarget = function () {
        return new (b('DOMEvent'))(this).target || null;
      };
      return a;
    })();
    function l(a) {
      if (a instanceof k) return a;
      a ||
        (!window.addEventListener && document.createEventObject
          ? (a = window.event ? document.createEventObject(window.event) : {})
          : (a = {}));
      if (!a._inherits_from_prototype)
        for (var b in Event.prototype)
          try {
            a[b] = Event.prototype[b];
          } catch (a) {}
      return a;
    }
    Object.assign(
      Event.prototype,
      {
        _inherits_from_prototype: !0,
        getRelatedTarget: function () {
          var a =
            this.relatedTarget ||
            (this.fromElement === this.srcElement
              ? this.toElement
              : this.fromElement);
          return a && a.nodeType ? a : null;
        },
        getModifiers: function () {
          var a = {
            control: !!this.ctrlKey,
            shift: !!this.shiftKey,
            alt: !!this.altKey,
            meta: !!this.metaKey,
          };
          a.access = b('UserAgent').isPlatform('Mac OS X') ? a.control : a.alt;
          a.any = a.control || a.shift || a.alt || a.meta;
          return a;
        },
        isRightClick: function () {
          return this.which
            ? this.which === 3
            : this.button && this.button === 2;
        },
        isMiddleClick: function () {
          return this.which
            ? this.which === 2
            : this.button && this.button === 4;
        },
        isDefaultRequested: function () {
          return (
            this.getModifiers().any ||
            this.isMiddleClick() ||
            this.isRightClick()
          );
        },
      },
      k.prototype,
    );
    c = {
      listen: function (a, c, d, e, f) {
        typeof d === 'function' &&
          (d = b('TimeSlice').guard(
            d,
            b('dedupString')('Event.js ' + c + ' handler'),
          ));
        !f || typeof f === 'boolean'
          ? (f = { passive: !1 })
          : (f = { passive: f.passive || !1 });
        if (!b('ExecutionEnvironment').canUseDOM)
          return new t(a, d, null, c, e, null, f);
        typeof a === 'string' && (a = b('$')(a));
        typeof e === 'undefined' && (e = Event.Priority.NORMAL);
        if (typeof c === 'object') {
          var g = {};
          for (var j in c) g[j] = Event.listen(a, j, c[j], e, f);
          return g;
        }
        if (c.match(/^on/i))
          throw new TypeError(
            'Bad event name `' + c + "': use `click', not `onclick'.",
          );
        if (!a) {
          j = h.blameToPreviousFrame(
            new Error('Cannot listen to an undefined element.'),
          );
          b('FBLogger')('event')
            .catching(j)
            .mustfix('Tried to listen to element of type %s', c);
          throw j;
        }
        if (a.nodeName == 'LABEL' && c == 'click') {
          g = a.getElementsByTagName('input');
          a = g.length == 1 ? g[0] : a;
        } else if (a === window && c === 'scroll') {
          j = b('getDocumentScrollElement')();
          j !== document.documentElement && j !== document.body && (a = j);
        }
        g = b('DataStore').get(a, i, {});
        j = n[c];
        j && ((c = j.base), j.wrap && (d = j.wrap(d)));
        p(a, g, c, f);
        j = g[c];
        e in j || (j[e] = []);
        var k = j[e].length;
        d = new t(a, d, g, c, e, k, f);
        j[e][k] = d;
        j.numHandlers++;
        f.passive || (j.numNonPassiveHandlers++, o(a, g[c], c));
        return d;
      },
      stop: function (a) {
        var c = new (b('DOMEvent'))(a).stopPropagation();
        j(c.event);
        return a;
      },
      prevent: function (a) {
        new (b('DOMEvent'))(a).preventDefault();
        return a;
      },
      isDefaultPrevented: function (a) {
        return new (b('DOMEvent'))(a).isDefaultPrevented(a);
      },
      kill: function (a) {
        a = new (b('DOMEvent'))(a).kill();
        j(a.event);
        return !1;
      },
      getKeyCode: function (a) {
        a = new (b('DOMEvent'))(a).event;
        if (!a) return !1;
        switch (a.keyCode) {
          case 63232:
            return 38;
          case 63233:
            return 40;
          case 63234:
            return 37;
          case 63235:
            return 39;
          case 63272:
          case 63273:
          case 63275:
            return null;
          case 63276:
            return 33;
          case 63277:
            return 34;
        }
        if (a.shiftKey)
          switch (a.keyCode) {
            case 33:
            case 34:
            case 37:
            case 38:
            case 39:
            case 40:
              return null;
          }
        return a.keyCode;
      },
      getPriorities: function () {
        if (!m) {
          var a = b('getObjectValues')(Event.Priority);
          a.sort(function (a, b) {
            return a - b;
          });
          m = a;
        }
        return m;
      },
      fire: function (a, b, c) {
        c = new k(a, b, c);
        var d;
        do {
          var e = Event.__getHandler(a, b);
          e && (d = e(c));
          a = a.parentNode;
        } while (a && d !== !1 && !c.cancelBubble);
        return d !== !1;
      },
      __fire: function (a, b, c) {
        a = Event.__getHandler(a, b);
        if (a) return a(l(c));
      },
      __getHandler: function (a, c) {
        var d = b('DataStore').get(a, i);
        return d && d[c] ? d[c].domHandler : a['on' + c];
      },
      getPosition: function (a) {
        a = new (b('DOMEvent'))(a).event;
        var c = b('getDocumentScrollElement')(),
          d = a.clientX + b('Scroll').getLeft(c);
        a = a.clientY + b('Scroll').getTop(c);
        return { x: d, y: a };
      },
    };
    Object.assign(Event, c);
    var m = null;
    d = function (a) {
      return function (c) {
        if (!b('DOMQuery').contains(this, c.getRelatedTarget()))
          return a.call(this, c);
      };
    };
    var n;
    !window.navigator.msPointerEnabled
      ? (n = {
          mouseenter: { base: 'mouseover', wrap: d },
          mouseleave: { base: 'mouseout', wrap: d },
        })
      : (n = {
          mousedown: { base: 'MSPointerDown' },
          mousemove: { base: 'MSPointerMove' },
          mouseup: { base: 'MSPointerUp' },
          mouseover: { base: 'MSPointerOver' },
          mouseout: { base: 'MSPointerOut' },
          mouseenter: { base: 'MSPointerOver', wrap: d },
          mouseleave: { base: 'MSPointerOut', wrap: d },
        });
    if (b('UserAgent').isBrowser('Firefox < 52')) {
      f = function (a, b) {
        b = l(b);
        var c = b.getTarget();
        while (c) Event.__fire(c, a, b), (c = c.parentNode);
      };
      document.documentElement.addEventListener(
        'focus',
        f.bind(null, 'focusin'),
        !0,
      );
      document.documentElement.addEventListener(
        'blur',
        f.bind(null, 'focusout'),
        !0,
      );
    }
    var o = function (a, c, d) {
        var e = c.numNonPassiveHandlers == 0;
        e != c.options.passive &&
          (c.domHandlerRemover.remove(),
          (c.options.passive = e),
          (c.domHandlerRemover = b('DOMEventListener').add(a, d, c.domHandler, {
            passive: e,
          })));
      },
      p = function (a, c, d, e) {
        if (d in c) return;
        var f = b('TimeSlice').guard(
          s.bind(a, d),
          b('dedupString')('Event listenHandler ' + d),
        );
        c[d] = {
          numHandlers: 0,
          numNonPassiveHandlers: 0,
          domHandlerRemover: b('DOMEventListener').add(a, d, f, e),
          domHandler: f,
          options: e,
        };
        c = 'on' + d;
        if (a[c]) {
          f =
            a === document.documentElement
              ? Event.Priority._BUBBLE
              : Event.Priority.TRADITIONAL;
          var g = a[c];
          a[c] = null;
          Event.listen(a, d, g, f, e);
        }
      };
    function q(a) {
      return !a.href.endsWith('#')
        ? !1
        : a.href === document.location.href ||
            a.href === document.location.href + '#';
    }
    function r(a, b) {
      return a.nodeName === 'INPUT' && a.type === b;
    }
    var s = b('EventProfiler').__wrapEventListenHandler(function (a, c) {
      c = l(c);
      if (!b('DataStore').get(this, i))
        throw new Error('Bad listenHandler context.');
      var d = b('DataStore').get(this, i)[a];
      if (!d) throw new Error('No registered handlers for `' + a + "'.");
      if (
        a == 'click' ||
        a == 'contextmenu' ||
        (a == 'mousedown' && c.which == 2)
      ) {
        a = c.getTarget();
        var e = b('Parent').byTag(a, 'a');
        e instanceof HTMLAnchorElement &&
          e.href &&
          q(e) &&
          !r(a, 'file') &&
          !r(a, 'submit') &&
          c.prevent();
      }
      e = Event.getPriorities();
      for (a = 0; a < e.length; a++) {
        var f = e[a];
        if (f in d) {
          f = d[f];
          for (var g = 0; g < f.length; g++) {
            if (!f[g]) continue;
            var h = f[g].fire(this, c);
            if (h === !1) return c.kill();
            else c.cancelBubble && c.stop();
          }
        }
      }
      return c.returnValue;
    });
    Event.Priority = { URGENT: -20, TRADITIONAL: -10, NORMAL: 0, _BUBBLE: 1e3 };
    var t = (function () {
      'use strict';
      function a(a, b, c, d, e, f, g) {
        (this.$1 = a),
          (this.$2 = b),
          (this.$3 = c),
          (this.$7 = d),
          (this.$6 = e),
          (this.$4 = f),
          (this.$5 = g);
      }
      var c = a.prototype;
      c.isRemoved = function () {
        return !this.$3;
      };
      c.remove = function () {
        if (b('ExecutionEnvironment').canUseDOM) {
          if (this.isRemoved()) {
            b('FBLogger')('Event').warn(
              'Event handler has already been removed',
            );
            return;
          }
          var a = this.$3[this.$7];
          a.numHandlers <= 1
            ? (a.domHandlerRemover.remove(), delete this.$3[this.$7])
            : (delete a[this.$6][this.$4],
              a.numHandlers--,
              this.$5.passive ||
                (a.numNonPassiveHandlers--,
                o(this.$1, this.$3[this.$7], this.$7)));
          this.$3 = null;
        }
      };
      c.fire = function (a, c) {
        return b('ExecutionEnvironment').canUseDOM
          ? (g || (g = b('ErrorGuard'))).applyWithGuard(this.$2, a, [c], {
              name:
                'eventhandler:' +
                c.type +
                ':' +
                (typeof a.name == 'string' ? a.name : a.id),
            })
          : !0;
      };
      return a;
    })();
    a.$E = Event.$E = l;
    e.exports = Event;
  },
  null,
);
