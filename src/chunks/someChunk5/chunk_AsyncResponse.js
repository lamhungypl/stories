__d(
  'AsyncResponse',
  ['invariant', 'Bootloader', 'FBLogger', 'HTML'],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    a = (function () {
      function a(a, b) {
        (this.error = 0),
          (this.errorSummary = null),
          (this.errorDescription = null),
          (this.onload = null),
          (this.replay = !1),
          (this.payload = b),
          (this.request = a),
          (this.silentError = !1),
          (this.transientError = !1),
          (this.blockedAction = !1),
          (this.is_last = !0),
          (this.responseHeaders = null);
      }
      var b = a.prototype;
      b.getRequest = function () {
        return this.request;
      };
      b.getPayload = function () {
        return this.payload;
      };
      b.toError = function () {
        this.error !== 0 || h(0, 5599);
        var a = this.errorSummary || '',
          b = this.getErrorDescriptionString() || '',
          c = new Error(a.toString() + ': ' + b);
        Object.assign(c, {
          code: this.error,
          description: this.errorDescription || '',
          descriptionString: b,
          response: this,
          summary: a,
          isSilent: this.silentError,
          isTransient: this.transientError,
        });
        return c;
      };
      b.getError = function () {
        return this.error;
      };
      b.getErrorSummary = function () {
        return this.errorSummary;
      };
      b.setErrorSummary = function (a) {
        a = a === void 0 ? null : a;
        this.errorSummary = a;
        return this;
      };
      b.getErrorDescription = function () {
        return this.errorDescription;
      };
      b.getErrorDescriptionString = function () {
        var a = this.getErrorDescription();
        if (a == null) return null;
        if (c('HTML').isHTML(a)) {
          var b = new (c('HTML'))(a);
          return b.getRootNode().textContent;
        }
        return a.toString();
      };
      b.getErrorIsWarning = function () {
        return !!this.errorIsWarning;
      };
      b.isSilent = function () {
        return !!this.silentError;
      };
      b.isTransient = function () {
        return !!this.transientError;
      };
      b.isBlockedAction = function () {
        return !!this.blockedAction;
      };
      b.getResponseHeader = function (a) {
        var b = this.responseHeaders;
        if (!b) return null;
        b = b.replace(/^\n/, '');
        a = a.toLowerCase();
        b = b.split('\r\n');
        for (var c = 0; c < b.length; ++c) {
          var d = b[c],
            e = d.indexOf(': ');
          if (e <= 0) continue;
          var f = d.substring(0, e).toLowerCase();
          if (f === a) return d.substring(e + 2);
        }
        return null;
      };
      a.defaultErrorHandler = function (b) {
        try {
          !b.silentError
            ? a.verboseErrorHandler(b)
            : c('FBLogger')('async_response')
                .catching(b.toError())
                .warn('default error handler called');
        } catch (a) {
          alert(b);
        }
      };
      a.verboseErrorHandler = function (a, b) {
        c('Bootloader').loadModules(
          ['ExceptionDialog'],
          function (c) {
            return c.showAsyncError(a, b);
          },
          'AsyncResponse',
        );
      };
      return a;
    })();
    g['default'] = a;
  },
  98,
);
