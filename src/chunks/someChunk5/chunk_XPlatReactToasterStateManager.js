__d(
  'XPlatReactToasterStateManager',
  ['clearTimeout', 'removeFromArray', 'setTimeout', 'unrecoverableViolation'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = {};
    function i(a) {
      var b = !1;
      return function () {
        b || (a(), (b = !0));
      };
    }
    a = (function () {
      function a(a) {
        var b = a.callbackScheduler;
        a = a.maxQueuedToasts;
        this.$1 = 0;
        this.$2 = new Map();
        this.$3 = [];
        this.$4 = [];
        this.$5 = null;
        this.$7 = b;
        this.$6 = a;
      }
      var b = a.prototype;
      b.push = function (a, b) {
        var c = 'toast-' + this.$1++;
        b = {
          duration: b,
          expired: !1,
          id: c,
          shown: !1,
          timer: null,
          value: a,
        };
        this.$8({ node: b, type: 'PUSH' });
        return c;
      };
      b.replace = function (a, b) {
        this.$8({ id: a, type: 'REPLACE', value: b });
      };
      b.shown = function (a) {
        this.$8({ id: a, type: 'SHOWN' });
      };
      b['delete'] = function (a) {
        this.$8({ id: a, type: 'DELETE' });
      };
      b.expire = function (a) {
        this.$8({ id: a, type: 'EXPIRE' });
      };
      b.hidden = function (a) {
        this.$8({ id: a, type: 'HIDDEN' });
      };
      b.stopTimer = function (a) {
        this.$8({ id: a, type: 'STOP_TIMER' });
      };
      b.resetTimer = function (a) {
        this.$8({ id: a, type: 'RESET_TIMER' });
      };
      b.getState = function () {
        return Object.fromEntries(this.$2);
      };
      b.getEmptyState = function () {
        return h;
      };
      b.addListener = function (a) {
        var b = this;
        this.$3.push(a);
        return {
          remove: i(function () {
            c('removeFromArray')(b.$3, a);
          }),
        };
      };
      b.$9 = function (a) {
        (this.$5 == null || a.priority > this.$5.priority) && (this.$5 = a);
      };
      b.registerView = function (a, b) {
        var d = this;
        b === void 0 && (b = 1);
        var e = { handler: a, priority: b };
        this.$4.push(e);
        this.$9(e);
        this.$10();
        return {
          remove: i(function () {
            c('removeFromArray')(d.$4, e),
              d.$5 === e &&
                ((d.$5 = null),
                d.$4.forEach(function (a) {
                  return d.$9(a);
                }));
          }),
        };
      };
      b.$8 = function (a) {
        var b = this.$2;
        switch (a.type) {
          case 'PUSH':
            var c = a.node;
            this.$2 = new Map([].concat(Array.from(this.$2), [[c.id, c]]));
            if (this.$6 !== 0) {
              c = Array.from(this.$2.values()).filter(function (a) {
                return !a.shown && !a.expired;
              });
              if (c.length > this.$6) {
                c = c[0];
                this['delete'](c.id);
              }
            }
            break;
          case 'SHOWN':
            if (this.$2.has(a.id) && !this.$11(a.id).shown) {
              c = babelHelpers['extends']({}, this.$11(a.id), { shown: !0 });
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [[a.id, this.$12(c)]]),
              );
            }
            break;
          case 'EXPIRE':
            if (this.$2.has(a.id)) {
              c = babelHelpers['extends']({}, this.$11(a.id), { expired: !0 });
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [[a.id, this.$13(c)]]),
              );
              this.$14(c);
            }
            break;
          case 'HIDDEN':
            if (this.$2.has(a.id)) {
              c = this.$11(a.id);
              (c.shown || c.expired) &&
                ((this.$2 = new Map(this.$2)),
                this.$2['delete'](a.id),
                this.$13(c));
            }
            break;
          case 'DELETE':
            if (this.$2.has(a.id)) {
              c = this.$11(a.id);
              this.$2 = new Map(this.$2);
              this.$2['delete'](a.id);
              this.$13(c);
            }
            break;
          case 'REPLACE':
            if (this.$2.has(a.id)) {
              c = this.$11(a.id);
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [
                  [a.id, babelHelpers['extends']({}, c, { value: a.value })],
                ]),
              );
            }
            break;
          case 'STOP_TIMER':
            if (this.$2.has(a.id) && this.$15(this.$11(a.id))) {
              c = babelHelpers['extends']({}, this.$11(a.id));
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [[a.id, this.$13(c)]]),
              );
            }
            break;
          case 'RESET_TIMER':
            if (this.$2.has(a.id) && !this.$15(this.$11(a.id))) {
              c = babelHelpers['extends']({}, this.$11(a.id));
              this.$2 = new Map(
                [].concat(Array.from(this.$2), [[a.id, this.$12(c)]]),
              );
            }
            break;
          default:
            a.type;
        }
        b !== this.$2 && this.$10();
      };
      b.$10 = function () {
        var a = this;
        this.$3.forEach(function (b) {
          return a.$7(function () {
            b();
          });
        });
        this.$4.forEach(function (b) {
          return a.$7(function () {
            b.handler(b === a.$5 ? a.getState() : a.getEmptyState());
          });
        });
      };
      b.$12 = function (a) {
        var b = this;
        a.duration !== null &&
          a.timer == null &&
          (a.timer = c('setTimeout')(function () {
            b.expire(a.id);
          }, a.duration));
        return a;
      };
      b.$13 = function (a) {
        a.timer != null && (c('clearTimeout')(a.timer), (a.timer = null));
        return a;
      };
      b.$14 = function (a) {
        var b = this;
        this.$13(a);
        var d = a.id;
        c('setTimeout')(function () {
          b['delete'](d);
        }, 1e3);
      };
      b.$15 = function (a) {
        return a.timer != null;
      };
      b.$11 = function (a) {
        a = this.$2.get(a);
        if (a == null)
          throw c('unrecoverableViolation')(
            'Toast with given identifier was not found',
            'comet_ui',
          );
        return a;
      };
      a.getInstance = function (b) {
        a.$16 == null && (a.$16 = new a(b));
        return a.$16;
      };
      a.resetInstance_DO_NOT_USE = function () {
        a.$16 = null;
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
