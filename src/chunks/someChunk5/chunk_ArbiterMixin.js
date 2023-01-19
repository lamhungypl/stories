__d(
  'ArbiterMixin',
  ['Arbiter', 'guid'],
  function (a, b, c, d, e, f, g) {
    var h = 'arbiter$' + c('guid')(),
      i = Object.prototype.hasOwnProperty;
    a = {
      _getArbiterInstance: function () {
        return i.call(this, h) ? this[h] : (this[h] = new (c('Arbiter'))());
      },
      inform: function (a, b, c) {
        return this._getArbiterInstance().inform(a, b, c);
      },
      subscribe: function (a, b, c) {
        return this._getArbiterInstance().subscribe(a, b, c);
      },
      subscribeOnce: function (a, b, c) {
        return this._getArbiterInstance().subscribeOnce(a, b, c);
      },
      unsubscribe: function (a) {
        this._getArbiterInstance().unsubscribe(a);
      },
      unsubscribeCurrentSubscription: function () {
        this._getArbiterInstance().unsubscribeCurrentSubscription();
      },
      releaseCurrentPersistentEvent: function () {
        this._getArbiterInstance().releaseCurrentPersistentEvent();
      },
      registerCallback: function (a, b) {
        return this._getArbiterInstance().registerCallback(a, b);
      },
      query: function (a) {
        return this._getArbiterInstance().query(a);
      },
    };
    b = a;
    g['default'] = b;
  },
  98,
);
