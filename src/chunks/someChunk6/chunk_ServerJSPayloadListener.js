__d(
  'ServerJSPayloadListener',
  ['FBLogger', 'ServerJS', 'err', 'queueRemovableDOMElements'],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = [],
      i = 5e3;
    function j(a) {
      h.push(a);
    }
    function k() {
      return h.shift();
    }
    function l(a) {
      h.unshift(a), window.setTimeout(m, 20);
    }
    function m() {
      var a;
      while ((a = k()) != null)
        if (a.dataset instanceof window.DOMStringMap) {
          var b = 'sjs' in a.dataset;
          if (b) {
            b = a.dataset.contentLen;
            if (a.textContent.length.toString() !== b) {
              if (i >= 1) {
                i -= 1;
                l(a);
                return;
              }
              c('FBLogger')('serverjs_listener')
                .addMetadata(
                  'COMET_INFRA',
                  'SIZE',
                  a.textContent.length.toString(),
                )
                .mustfix(
                  'ServerJS based data-sjs payload content length mismatch',
                );
            }
            b = null;
            try {
              b = JSON.parse(a.textContent);
              if (b == null)
                throw c('err')(
                  'ServerJS payload marked with data-sjs was parsed as null',
                );
              new (c('ServerJS'))().handle(b);
              d('queueRemovableDOMElements').queueRemovableServerJSPayload(a);
            } catch (a) {
              c('FBLogger')('serverjs_listener')
                .catching(a)
                .mustfix(
                  'ServerJS based data-sjs payload failed to parse and execute.',
                );
            }
          }
          i = 5e3;
        }
    }
    function n(a) {
      try {
        if (
          a.nodeType !== Node.ELEMENT_NODE ||
          a.nodeName !== 'SCRIPT' ||
          a.ownerDocument !== document ||
          !(a.dataset instanceof window.DOMStringMap)
        )
          return;
      } catch (a) {
        return;
      }
      var b = 'sjs' in a.dataset;
      b && (j(a), m());
    }
    function b() {
      if (a.document == null) return;
      Array.from(document.getElementsByTagName('script')).forEach(function (a) {
        return n(a);
      });
      var b = new MutationObserver(function (a, b) {
        a.forEach(function (a) {
          a.type === 'childList' &&
            Array.from(a.addedNodes).forEach(function (a) {
              n(a);
            });
        });
      });
      b.observe(document.getElementsByTagName('html')[0], {
        attributes: !1,
        childList: !0,
        subtree: !0,
      });
    }
    b();
  },
  35,
);
