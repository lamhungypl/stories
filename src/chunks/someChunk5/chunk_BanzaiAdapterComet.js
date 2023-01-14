__d(
  'BanzaiAdapterComet',
  [
    'BanzaiConfig',
    'BanzaiConsts',
    'BanzaiStorage',
    'BaseEventEmitter',
    'FBLogger',
    'JSScheduler',
    'NetworkStatus',
    'QueryString',
    'ReactDOMComet',
    'Run',
    'SiteData',
    'StaticSiteData',
    'URI',
    'UserAgent',
    'ZeroRewrites',
    'getAsyncParams',
    'gkx',
    'isInIframe',
    'justknobx',
    'lowerFacebookDomain',
    'once',
    'unrecoverableViolation',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = [],
      i = new (c('BaseEventEmitter'))(),
      j = c('isInIframe')(),
      k = '/ajax/bz',
      l = 'POST',
      m = {
        cleanup: function () {
          var a = h;
          h = [];
          a.forEach(function (a) {
            a.readyState < 4 && a.abort();
          });
        },
        config: c('BanzaiConfig'),
        getEndPointUrl: function (a) {
          a = c('getAsyncParams')(l);
          delete a[c('StaticSiteData').csr_key];
          delete a[c('StaticSiteData').jsmod_key];
          a.ph = c('SiteData').push_phase;
          var b =
            c('justknobx')._('55') && c('gkx')('517')
              ? '/a/bz'
              : c('gkx')('1703425')
              ? '/ajax/bnzai'
              : k;
          b = c('QueryString').appendToUrl(b, a);
          if (b.length > 2e3)
            throw c('unrecoverableViolation')(
              'url is too long: ${url}',
              'comet_infra',
            );
          return b;
        },
        getStorage: function () {
          return c('BanzaiStorage');
        },
        getTopLevel: function () {
          return j && c('lowerFacebookDomain').isValidDocumentDomain()
            ? window.top
            : null;
        },
        inform: function (a) {
          Array.isArray(a)
            ? a.forEach(function (a) {
                return i.emit(a);
              })
            : i.emit(a);
        },
        isOkToSendViaBeacon: function () {
          return !1;
        },
        onUnload: function (a) {
          d('Run').onAfterUnload(a);
        },
        preferredCompressionMethod: c('once')(function () {
          return 'deflate';
        }),
        readyToSend: function () {
          return c('UserAgent').isBrowser('IE <= 8') || navigator.onLine;
        },
        send: function (a, b, e, f) {
          var g,
            i = m.getEndPointUrl(!1);
          i = c('ZeroRewrites').rewriteURI(new (c('URI'))(i));
          var j = c('ZeroRewrites').getTransportBuilderForURI(i)();
          j.open(l, i.toString(), !0);
          f === !0
            ? (j.onreadystatechange = function () {
                d('ReactDOMComet').flushSync(function () {
                  if (j.readyState >= 4) {
                    var a = h.indexOf(j);
                    a >= 0 && h.splice(a, 1);
                    try {
                      a = j.status;
                    } catch (b) {
                      a = 0;
                    }
                    a === 200
                      ? (b && b(), c('NetworkStatus').reportSuccess())
                      : (e && e(a), c('NetworkStatus').reportError());
                  }
                });
              })
            : (j.onreadystatechange = function () {
                c('JSScheduler').scheduleNormalPriCallback(function () {
                  if (j.readyState >= 4) {
                    var a = h.indexOf(j);
                    a >= 0 && h.splice(a, 1);
                    try {
                      a = j.status;
                    } catch (b) {
                      a = 0;
                    }
                    a === 200
                      ? (b && b(),
                        c('NetworkStatus').reportSuccess(),
                        m.inform(c('BanzaiConsts').OK))
                      : (e && e(a),
                        c('NetworkStatus').reportError(),
                        m.inform(c('BanzaiConsts').ERROR));
                  }
                });
              });
          h.push(j);
          c('NetworkStatus').isOnline()
            ? j.send(a)
            : (g = c('NetworkStatus').onChange(function (b) {
                b = b.online;
                b && (j.send(a), g.remove());
              }));
        },
        setHooks: function () {},
        setUnloadHook: function (a) {
          d('Run').onAfterUnload(a._unload);
        },
        subscribe: function (a, b) {
          if (Array.isArray(a)) {
            var c = [];
            a.forEach(function (a) {
              return c.push(i.addListener(a, b));
            });
            return {
              remove: function () {
                c.forEach(function (a) {
                  return a.remove();
                });
              },
            };
          } else return i.addListener(a, b);
        },
        useBeacon: !1,
        wrapInTimeSlice: function (a, b) {
          c('FBLogger')('banzai').mustfix('wrapInTimeSlice is not implemented');
          return function () {};
        },
      };
    a = m;
    g['default'] = a;
  },
  98,
);
