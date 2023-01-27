__d(
  'BootloaderEndpoint',
  [
    'Bootloader',
    'BootloaderEndpointConfig',
    'CSRFGuard',
    'FBLogger',
    'HasteResponse',
    'TimeSlice',
    'clearImmediate',
    'fb-error',
    'getAsyncParams',
    'getSameOriginTransport',
    'performanceAbsoluteNow',
    'setImmediateAcrossTransitions',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = b('fb-error').ErrorXFBDebug,
      i = b('BootloaderEndpointConfig').endpointURI,
      j = 0,
      k = null,
      l = null,
      m = new Map(),
      n = new Map();
    function o(a) {
      return Array.from(a.keys()).join(',');
    }
    function p(a, c) {
      var d = {};
      a.size && (d.modules = o(a));
      c.size && (d.nb_modules = o(c));
      a = Object.entries(
        babelHelpers['extends']({}, d, b('getAsyncParams')('GET')),
      )
        .map(function (a) {
          var b = a[0];
          a = a[1];
          return encodeURIComponent(b) + '=' + encodeURIComponent(String(a));
        })
        .join('&');
      return i + (i.includes('?') ? '&' : '?') + a;
    }
    function q(a, c) {
      if (a.size === 0 && c.size === 0) return;
      var d = p(a, c),
        e = b('getSameOriginTransport')(),
        f = j++,
        i = (g || (g = b('performanceAbsoluteNow')))();
      e.open('GET', d, !0);
      var k = b('TimeSlice').getGuardedContinuation(
        'Bootloader _requestHastePayload',
      );
      e.onreadystatechange = function () {
        if (e.readyState !== 4) return;
        k(function () {
          h.addFromXHR(e);
          var g =
            e.status === 200
              ? JSON.parse(b('CSRFGuard').clean(e.responseText))
              : null;
          if (g == null) {
            b('FBLogger')('bootloader').warn(
              'Invalid bootloader response %d, blocking mods: %s; non-blocking mods: %s; "%s"',
              e.status,
              o(a),
              o(c),
              e.responseText.substr(0, 256),
            );
            return;
          }
          if (g.error)
            b('FBLogger')('bootloader').warn(
              'Non-fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s',
              o(a),
              o(c),
            );
          else if (g.__error) {
            b('FBLogger')('bootloader').warn(
              'Fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s',
              o(a),
              o(c),
            );
            return;
          }
          b('TimeSlice').guard(
            function () {
              return r(d, g, a, c, f, i);
            },
            'Bootloader receiveEndpointData',
            { propagationType: b('TimeSlice').PropagationType.CONTINUATION },
          )();
        });
      };
      e.send();
    }
    function r(a, c, d, e, f, h) {
      var i = (g || (g = b('performanceAbsoluteNow')))(),
        j = c.serverGenTime,
        k = c.hrp;
      if (k == null) {
        c = c;
        b('FBLogger')('be_null_hrp').mustfix(
          'Found null hrp, blocking mods: %s; non-blocking mods: %s; response error: %s',
          o(d),
          o(e),
          c.error +
            ', summary: ' +
            c.errorSummary +
            ', description: ' +
            c.errorDescription,
        );
        k = c;
      }
      b('HasteResponse').handle(k, {
        source: 'bootloader_endpoint',
        sourceDetail: JSON.stringify({
          b: Array.from(d.keys()),
          n: Array.from(e.keys()),
        }),
        onBlocking: function () {
          var a = [d, e];
          for (var c = 0; c < a.length; c++) {
            var f = a[c];
            for (
              var f = f.values(),
                g = Array.isArray(f),
                h = 0,
                f = g
                  ? f
                  : f[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var i;
              if (g) {
                if (h >= f.length) break;
                i = f[h++];
              } else {
                h = f.next();
                if (h.done) break;
                i = h.value;
              }
              i = i;
              b('Bootloader').done(i);
            }
          }
        },
        onLog: function (c) {
          var g = [d, e];
          for (var k = 0; k < g.length; k++) {
            var l = g[k];
            for (
              var l = l.keys(),
                m = Array.isArray(l),
                n = 0,
                l = m
                  ? l
                  : l[
                      typeof Symbol === 'function'
                        ? Symbol.iterator
                        : '@@iterator'
                    ]();
              ;

            ) {
              var o;
              if (m) {
                if (n >= l.length) break;
                o = l[n++];
              } else {
                n = l.next();
                if (n.done) break;
                o = n.value;
              }
              o = o;
              b('Bootloader').beDone(
                o,
                f,
                babelHelpers['extends'](
                  {
                    requestStart: h,
                    responseStart: i,
                    serverGenTime: j,
                    uri: a,
                  },
                  c,
                ),
              );
            }
          }
        },
      });
    }
    function s() {
      var a = m,
        c = n;
      b('clearImmediate')(l);
      l = null;
      k = null;
      m = new Map();
      n = new Map();
      q(a, c);
    }
    a = {
      load: function (a, c, d) {
        (c ? m : n).set(a, d);
        if (b('BootloaderEndpointConfig').debugNoBatching) {
          s();
          return;
        }
        if (l != null) return;
        k = b('TimeSlice').getGuardedContinuation(
          'Schedule async batch request: Bootloader._loadResources',
        );
        l = b('setImmediateAcrossTransitions')(function () {
          k &&
            k(function () {
              return s();
            });
        });
      },
      forceFlush: function () {
        k &&
          k(function () {
            return s();
          });
      },
    };
    e.exports = a;
  },
  null,
);
