__d(
  'CometSSRFizzContentInjector',
  ['FBLogger', 'qplTimingsServerJS'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = null,
      i = function () {},
      j = { total: 0 },
      k = !1,
      l = null,
      m = !1,
      n = [],
      o = [],
      p = null;
    function q(a) {
      if (r()) return;
      k = !0;
      D.emitOnce('FIRSTPAYLOADINJECTED', !1);
      C(a, 'ERROR');
    }
    function r() {
      return (!!l && l.status === 'ERROR') || k;
    }
    function s() {
      if (h == null)
        return c('FBLogger')('comet_ssr').mustfix('Fizz init did NOT run');
      q(h.disabled_status);
    }
    function a() {
      return o;
    }
    function t(a) {
      if (h == null)
        return c('FBLogger')('comet_ssr').mustfix('Fizz init did NOT run');
      c('qplTimingsServerJS')(h.cavalry_get_lid, a);
    }
    function u(a) {
      v(a) || q('Checks for useMatchViewport failed');
    }
    function v(a) {
      return !window.matchMedia
        ? !1
        : a.every(function (a) {
            var b = a.dimension,
              c = a.numPixels,
              d = a.operation;
            a = a.result;
            d = w(d, b, c);
            return window.matchMedia(d).matches === a;
          });
    }
    function w(a, b, c) {
      return '(' + a + '-' + b + ': ' + c + 'px)';
    }
    function x(a, b) {
      if (r()) return;
      var d = a[0];
      if (!d) {
        q('Empty SSR payload received');
        return;
      }
      o.push({ boundaryPayloads: a, debug: b });
      if (h == null)
        return c('FBLogger')('comet_ssr').mustfix('Fizz init did NOT run');
      n.push.apply(n, a);
      y(a);
      b = d.fizzRootId;
      a = d.payloadType;
      var e = d.status;
      if (b === null || !a || e !== h.success_status) {
        if (
          e === h.disabled_status ||
          e === h.bad_preloaders_status ||
          e === h.unknown_boundaries_status
        ) {
          s();
          return;
        }
        q('Error processing SSR payload ' + (d.id || 'Global') + ': ' + e);
        return;
      }
      a === 'FIRST'
        ? (z(b || ''), (m = !0))
        : a === 'LAST' &&
          (m || z(b || ''),
          t('ssr_injected'),
          t('ssr_inline_injector_ready'),
          C('', 'INJECTED'));
    }
    function y(a) {
      a.forEach(function (a) {
        t('ssr_received_' + (a.id || 'global_failure'));
      });
    }
    function z(a) {
      if (h == null || p == null)
        return c('FBLogger')('comet_ssr').mustfix('Fizz init did NOT run');
      while ((b = p) == null ? void 0 : b.firstChild) {
        var b;
        ((b = p) == null ? void 0 : b.lastChild) &&
          p.removeChild((b = p) == null ? void 0 : b.lastChild);
      }
      b = document.getElementById(a);
      if (p && b) {
        a = b.childNodes;
        while (a.length) {
          if (h == null || p == null)
            return c('FBLogger')('comet_ssr').mustfix('Fizz init did NOT run');
          else if (document.body == null)
            return c('FBLogger')('comet_ssr').mustfix(
              'expected document.body to be present',
            );
          var d = a[0],
            e = d.nodeType === Node.ELEMENT_NODE ? d.dataset : null;
          if (
            e != null &&
            (e.rxi != null ||
              e.rri != null ||
              e.rci != null ||
              e.rsi != null) &&
            d.nodeName.toLowerCase() === 'template'
          ) {
            (e = document.body) == null ? void 0 : e.appendChild(d);
          } else {
            (e = p) == null ? void 0 : e.appendChild(d);
          }
        }
        b.remove();
      }
      if (h == null || p == null)
        return c('FBLogger')('comet_ssr').mustfix('Fizz init did NOT run');
      h.gks.comet_ssr_wait_for_dev || A();
    }
    function A() {
      D.emitOnce('FIRSTPAYLOADINJECTED', !0);
    }
    function B(a) {
      a.style.display = 'none';
    }
    function C(a, b) {
      var c;
      window.__onSSRPayload = i;
      window.__onSSRViewportGuessValidation = i;
      ((c = h) == null ? void 0 : c.gks.comet_ssr_wait_for_dev) || A();
      l = {
        clickEvents: j,
        msg: a,
        processedPayloads: n,
        status: b,
        unbindListeners: i,
      };
      D.emitOnce('ALLPAYLOADSINJECTED', l);
    }
    function b(a) {
      h = a;
      p = document.getElementById(a.eid);
      var b = ['success_status', 'ROOT', 'eid'].filter(function (b) {
        return !a[b];
      });
      b.length > 0 &&
        q('Error receiving SSRData: missing keys ' + b.toString());
      p
        ? a.gks.mwp_ssr_enabled
          ? B(p)
          : s()
        : q('Error locating root element: ' + a.eid);
      window.__isReactFizzContext = !0;
      window.__onSSRPayload = x;
      window.__SSREventEmitter = D;
      window.__invalidateSSR = q;
      window.__logSSRQPL = t;
      window.__onSSRViewportGuessValidation = u;
      window.__shouldIgnoreSSRStaticId = a.should_ignore_static_id;
      a.gks.comet_ssr_wait_for_dev &&
        (window.__comet_ssr_continue = function () {
          A();
        });
      typeof window.requireLazy === 'function' &&
        window.requireLazy(['ReactDOMComet'], function (a) {
          t('ssr_reactdom_ready');
        });
    }
    var D = {
      emit: function (a, b) {
        D.events[a] &&
          D.events[a].map(function (a) {
            return a && typeof a === 'function' && a(b);
          }),
          (D.eventsEmitted[a] = { args: b });
      },
      emitOnce: function (a, b) {
        a in D.eventsEmitted || D.emit(a, b);
      },
      events: {},
      eventsEmitted: {},
      on: function (a, b) {
        var c = D.eventsEmitted[a];
        if (c) {
          b && typeof b === 'function' && b(c.args);
          return;
        }
        !D.events[a] ? (D.events[a] = [b]) : D.events[a].push(b);
      },
    };
    function d(a) {
      window.__onSSRError && window.__onSSRError(a);
    }
    function e(a) {
      window.__SSRFailJestOnError && window.__SSRFailJestOnError(a);
    }
    function f() {
      (window.__receivedSSRErrors = window.__receivedSSRErrors || []),
        (window.__onSSRError =
          window.__onSSRError ||
          function (a) {
            window.__receivedSSRErrors.push(a);
          });
    }
    g.getSSRBoundaryPayloadsDebugInfo = a;
    g.logQPLPoint = t;
    g.onViewportGuessValidation = u;
    g.onPayloadReceived = x;
    g.ssrInit = b;
    g.onSSRError = d;
    g.onSSRFailJestOnError = e;
    g.injectOnSSRErrorHandlerDefaultOnWindow = f;
  },
  98,
);
