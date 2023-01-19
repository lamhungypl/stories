__d(
  'JSONPTransport',
  ['ArbiterMixin', 'DOM', 'HTML', 'TimeSlice', 'URI', 'mixin'],
  function (a, b, c, d, e, f) {
    var g,
      h = {},
      i = 2,
      j = 'jsonp',
      k = 'iframe';
    function l(a) {
      delete h[a];
    }
    a = (function (a) {
      'use strict';
      babelHelpers.inheritsLoose(c, a);
      function c(b, c) {
        var d;
        d = a.call(this) || this;
        d._type = b;
        d._uri = c;
        d._hasResponse = !1;
        h[d.getID()] = babelHelpers.assertThisInitialized(d);
        return d;
      }
      var d = c.prototype;
      d.getID = function () {
        return this._id || (this._id = i++);
      };
      d.hasFinished = function () {
        return !(this.getID() in h);
      };
      d.getRequestURI = function () {
        return new (g || (g = b('URI')))(this._uri).addQueryData({
          __a: 1,
          __adt: this.getID(),
          __req: 'jsonp_' + this.getID(),
        });
      };
      d.getTransportFrame = function () {
        if (this._iframe) return this._iframe;
        var a = 'transport_frame_' + this.getID();
        a = b('HTML')(
          '<iframe class="hidden_elem" name="' +
            a +
            '" src="javascript:void(0)" />',
        );
        return (this._iframe = b('DOM').appendContent(document.body, a)[0]);
      };
      d.send = function () {
        var a = this;
        this._type === j
          ? setTimeout(function () {
              b('DOM').appendContent(
                document.body,
                b('DOM').create('script', {
                  src: a.getRequestURI().toString(),
                  type: 'text/javascript',
                }),
              );
            }, 0)
          : ((this.getTransportFrame().onload =
              this._checkForErrors.bind(this)),
            (this.getTransportFrame().src = this.getRequestURI().toString()));
        this._continuation = b('TimeSlice').getGuardedContinuation(
          'JSONPTransport: waiting for first response',
        );
      };
      d.createContinuationForFileForm_DO_NOT_USE = function () {
        this._continuation = b('TimeSlice').getGuardedContinuation(
          'JSONPTransport: waiting for first response',
        );
      };
      d.handleResponse = function (a) {
        var c = this;
        this._continuation(function () {
          c.inform('response', a),
            c.hasFinished()
              ? setTimeout(c._cleanup.bind(c), 0)
              : (c._continuation = b('TimeSlice').getGuardedContinuation(
                  'JSONPTransport: waiting for next response',
                ));
        });
      };
      d.abort = function () {
        if (this._aborted) return;
        this._aborted = !0;
        this._cleanup();
        l(this.getID());
        this.inform('abort');
      };
      d._checkForErrors = function () {
        this._hasResponse || this.abort();
      };
      d._cleanup = function () {
        this._iframe && (b('DOM').remove(this._iframe), (this._iframe = null));
      };
      c.respond = function (a, b, c) {
        var d = h[a];
        d &&
          ((d._hasResponse = !0),
          c || l(a),
          d._type == k &&
            (typeof b === 'string'
              ? (b = JSON.parse(b))
              : (b = JSON.parse(JSON.stringify(b)))),
          d.handleResponse(b));
      };
      return c;
    })(b('mixin')(b('ArbiterMixin')));
    a.respond = b('TimeSlice').guard(a.respond, 'JSONPTransport.respond', {
      root: !0,
    });
    e.exports = a;
  },
  null,
);
