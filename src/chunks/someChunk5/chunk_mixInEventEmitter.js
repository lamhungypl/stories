__d(
  'mixInEventEmitter',
  [
    'invariant',
    'EventEmitterWithHolding',
    'EventEmitterWithValidation',
    'EventHolder',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    function a(a, b, c) {
      b || h(0, 3159);
      var d = a.prototype || a;
      d.__eventEmitter && h(0, 3160);
      a = a.constructor;
      a && (a === Object || a === Function || h(0, 3161));
      d.__types = babelHelpers['extends']({}, d.__types, b);
      d.__ignoreUnknownEvents = Boolean(c);
      Object.assign(d, i);
    }
    var i = {
      emit: function (a, b, c, d, e, f, g) {
        return this.__getEventEmitter().emit(a, b, c, d, e, f, g);
      },
      emitAndHold: function (a, b, c, d, e, f, g) {
        return this.__getEventEmitter().emitAndHold(a, b, c, d, e, f, g);
      },
      addListener: function (a, b, c) {
        return this.__getEventEmitter().addListener(a, b, c);
      },
      once: function (a, b, c) {
        return this.__getEventEmitter().once(a, b, c);
      },
      addRetroactiveListener: function (a, b, c) {
        return this.__getEventEmitter().addRetroactiveListener(a, b, c);
      },
      listeners: function (a) {
        return this.__getEventEmitter().listeners(a);
      },
      removeAllListeners: function () {
        this.__getEventEmitter().removeAllListeners();
      },
      removeCurrentListener: function () {
        this.__getEventEmitter().removeCurrentListener();
      },
      releaseHeldEventType: function (a) {
        this.__getEventEmitter().releaseHeldEventType(a);
      },
      __getEventEmitter: function () {
        if (!this.__eventEmitter) {
          var a = new (c('EventEmitterWithValidation'))(
              this.__types,
              this.__ignoreUnknownEvents,
            ),
            b = new (c('EventHolder'))();
          this.__eventEmitter = new (c('EventEmitterWithHolding'))(a, b);
        }
        return this.__eventEmitter;
      },
    };
    g['default'] = a;
  },
  98,
);
