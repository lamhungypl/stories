__d(
  'Arbiter',
  [
    'invariant',
    'ArbiterToken',
    'CallbackDependencyManager',
    'ErrorGuard',
    'EventEmitter',
    'EventEmitterWithHolding',
    'EventHolder',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function i(a) {
      return Array.isArray(a) ? a : [a];
    }
    function j(a) {
      return a instanceof k || a === k ? a : k;
    }
    var k = (function () {
        function a() {
          var a = new (c('EventEmitter'))();
          this.$3 = new l();
          this.$2 = new (c('EventEmitterWithHolding'))(a, this.$3);
          this.$1 = new (c('CallbackDependencyManager'))();
          this.$4 = [];
        }
        var b = a.prototype;
        b.subscribe = function (a, b, d) {
          var e = this;
          a = i(a);
          a.forEach(function (a) {
            (a && typeof a === 'string') || h(0, 1966, a);
          });
          typeof b === 'function' || h(0, 1967, b);
          d = d || 'all';
          d === 'new' || d === 'all' || h(0, 1968, d);
          a = a.map(function (a) {
            var c = function (c) {
              return e.$5(b, a, c);
            };
            c.__SMmeta = b.__SMmeta;
            if (d === 'new') return e.$2.addListener(a, c);
            e.$4.push({});
            c = e.$2.addRetroactiveListener(a, c);
            e.$4.pop();
            return c;
          });
          return new (c('ArbiterToken'))(this, a);
        };
        b.$5 = function (a, b, d) {
          var e = this.$4[this.$4.length - 1];
          if (e[b] === !1) return;
          a = c('ErrorGuard').applyWithGuard(a, null, [b, d]);
          a === !1 && this.$2.releaseCurrentEvent();
          e[b] = a;
        };
        b.unsubscribeCurrentSubscription = function () {
          this.$2.removeCurrentListener();
        };
        b.releaseCurrentPersistentEvent = function () {
          this.$2.releaseCurrentEvent();
        };
        b.subscribeOnce = function (a, b, c) {
          var d = this;
          a = this.subscribe(
            a,
            function (a, c) {
              d.unsubscribeCurrentSubscription();
              return b(a, c);
            },
            c,
          );
          return a;
        };
        b.unsubscribe = function (a) {
          a.isForArbiterInstance(this) || h(0, 1969), a.unsubscribe();
        };
        b.inform = function (a, b, c) {
          var d = Array.isArray(a);
          a = i(a);
          c = c || 'event';
          var e = c === 'state' || c === 'persistent';
          this.$4.push({});
          for (var f = 0; f < a.length; f++) {
            var g = a[f];
            g || h(0, 1970, g);
            this.$3.setHoldingBehavior(g, c);
            this.$2.emitAndHold(g, b);
            this.$6(g, b, e);
          }
          g = this.$4.pop();
          return d ? g : g[a[0]];
        };
        b.query = function (a) {
          var b = this.$3.getHoldingBehavior(a);
          !b || b === 'state' || h(0, 1971, a);
          b = null;
          this.$3.emitToListener(a, function (a) {
            b = a;
          });
          return b;
        };
        b.registerCallback = function (a, b) {
          if (typeof a === 'function') return this.$1.registerCallback(a, b);
          else return this.$1.addDependenciesToExistingCallback(a, b);
        };
        b.$6 = function (a, b, c) {
          if (b === null) return;
          c
            ? this.$1.satisfyPersistentDependency(a)
            : this.$1.satisfyNonPersistentDependency(a);
        };
        a.subscribe = function (b, c, d) {
          return a.prototype.subscribe.apply(j(this), arguments);
        };
        a.unsubscribeCurrentSubscription = function () {
          return a.prototype.unsubscribeCurrentSubscription.apply(j(this));
        };
        a.releaseCurrentPersistentEvent = function () {
          return a.prototype.releaseCurrentPersistentEvent.apply(j(this));
        };
        a.subscribeOnce = function (b, c, d) {
          return a.prototype.subscribeOnce.apply(j(this), arguments);
        };
        a.unsubscribe = function (b) {
          return a.prototype.unsubscribe.apply(j(this), arguments);
        };
        a.inform = function (b, c, d) {
          return a.prototype.inform.apply(j(this), arguments);
        };
        a.informSingle = function (b, c, d) {
          return a.prototype.inform.apply(j(this), arguments);
        };
        a.query = function (b) {
          return a.prototype.query.apply(j(this), arguments);
        };
        a.registerCallback = function (b, c) {
          return a.prototype.registerCallback.apply(j(this), arguments);
        };
        a.$6 = function (b, c, d) {
          return a.prototype.$6.apply(j(this), arguments);
        };
        a.$5 = function (b, c, d) {
          return a.prototype.$5.apply(j(this), arguments);
        };
        return a;
      })(),
      l = (function (b) {
        babelHelpers.inheritsLoose(a, b);
        function a() {
          var a;
          a = b.call(this) || this;
          a.$ArbiterEventHolder1 = {};
          return a;
        }
        var c = a.prototype;
        c.setHoldingBehavior = function (a, b) {
          this.$ArbiterEventHolder1[a] = b;
        };
        c.getHoldingBehavior = function (a) {
          return this.$ArbiterEventHolder1[a];
        };
        c.holdEvent = function (a) {
          var c = this.$ArbiterEventHolder1[a];
          c !== 'persistent' && this.$ArbiterEventHolder2(a);
          if (c !== 'event') {
            var d;
            for (
              var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1;
              g < e;
              g++
            )
              f[g - 1] = arguments[g];
            return (d = b.prototype.holdEvent).call.apply(
              d,
              [this, a].concat(f),
            );
          }
          return void 0;
        };
        c.$ArbiterEventHolder2 = function (a) {
          this.emitToListener(a, this.releaseCurrentEvent, this);
        };
        c.releaseEvent = function (a) {
          a && b.prototype.releaseEvent.call(this, a);
        };
        return a;
      })(c('EventHolder'));
    k.call(k);
    a = k;
    g['default'] = a;
  },
  98,
);
