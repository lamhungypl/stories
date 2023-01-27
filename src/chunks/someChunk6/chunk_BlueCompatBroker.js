__d(
  'BlueCompatBroker',
  [
    'Env',
    'URI',
    'isCometAltpayJsSdkIframeAllowedDomain',
    'isFacebookURI',
    'isMessengerDotComURI',
    'isWorkDotMetaDotComURI',
    'isWorkplaceDotComURI',
  ],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h,
      i,
      j = new Map(),
      k = !1,
      l = function (a) {
        a = new (g || (g = b('URI')))(a);
        return (
          b('isFacebookURI')(a) ||
          b('isWorkplaceDotComURI')(a) ||
          b('isMessengerDotComURI')(a) ||
          b('isWorkDotMetaDotComURI')(a)
        );
      },
      m = {
        dispatch: function (a) {
          var b = m.getMessageEventString(a, 'compatAction');
          if (b != null) {
            b = j.get(b);
            b && b(a);
          }
        },
        getMessageEventString: function (a, b) {
          a = a.data;
          if (typeof a === 'object') {
            a = a == null ? void 0 : a[b];
            if (typeof a === 'string') return a;
          }
          return '';
        },
        init: function (a) {
          a === void 0 && (a = '');
          if (!k) {
            document.body && (document.body.style.overflow = 'auto');
            var c = b('isCometAltpayJsSdkIframeAllowedDomain')()
                ? 'https://secure.facebook.com/'
                : document.referrer,
              d = c.indexOf('/', 8);
            c = c.substring(0, d);
            if (l(c)) {
              d = new MessageChannel();
              a = a !== '' ? a : (h || (h = b('Env'))).iframeKey;
              i = d.port1;
              i.onmessage = m.dispatch;
              window.parent.postMessage(
                { compatAction: 'CompatSetup', iframeKey: a },
                c + '/',
                [d.port2],
              );
            }
            try {
              window.__REACT_DEVTOOLS_GLOBAL_HOOK__ =
                window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            } catch (a) {}
            k = !0;
          }
        },
        register: function (a, b) {
          j.set(a, b);
        },
        clear: function (a) {
          j['delete'](a);
        },
        sendMessage: function (a) {
          k || m.init(), i && i.postMessage(babelHelpers['extends']({}, a));
        },
      };
    e.exports = m;
  },
  null,
);
