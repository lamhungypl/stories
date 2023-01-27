__d(
  'MakeHasteTranslations',
  [
    'BootloaderConfig',
    'BootloaderRetryTracker',
    'ExecutionEnvironment',
    'FBLogger',
    'MakeHasteTranslationsMap',
    'Promise',
    'TimeSlice',
    'err',
    'fb-error',
    'getSameOriginTransport',
    'regeneratorRuntime',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = new (c('BootloaderRetryTracker'))({
      retries:
        (f = c('BootloaderConfig').translationRetries) != null
          ? f
          : c('BootloaderConfig').jsRetries,
      abortNum:
        (f = c('BootloaderConfig').translationRetryAbortNum) != null
          ? f
          : c('BootloaderConfig').jsRetryAbortNum,
      abortTime:
        (f = c('BootloaderConfig').translationRetryAbortTime) != null
          ? f
          : c('BootloaderConfig').jsRetryAbortTime,
      abortCallback: function () {
        c('FBLogger')('binary_transparency').warn('Translations retry abort');
      },
    });
    function i() {
      a.__translationFetchTracker || (a.__translationFetchTracker = {});
      return a.__translationFetchTracker;
    }
    function j(a) {
      a = JSON.parse(a);
      if (
        a != null &&
        typeof a === 'object' &&
        typeof a.translations === 'object' &&
        Array.isArray(a.virtual_modules)
      )
        return a;
      throw c('err')('Invalid response shape');
    }
    function k(a) {
      return new (b('Promise'))(function (b, d) {
        var e = c('TimeSlice').getGuardedContinuation(
            'MakeHasteTranslationsFetcher genSendRequest',
          ),
          f = c('getSameOriginTransport')();
        f.open('GET', a, !0);
        f.onreadystatechange = function (g) {
          if (f.readyState !== 4) return;
          e(function () {
            c('fb-error').ErrorXFBDebug.addFromXHR(f);
            try {
              if (f.status !== 200) throw c('err')('Received non-200 response');
              b(j(f.responseText));
            } catch (e) {
              h.maybeScheduleRetry(
                a,
                function () {
                  return b(k(a));
                },
                function () {
                  return d(
                    c('err')(
                      'Error processing response. XHR Error: %s, XHR status: %s, Response Text: %s',
                      e.toString(),
                      f.status,
                      f.responseText.length > 300
                        ? f.responseText.slice(0, 300) + '...'
                        : f.responseText,
                    ),
                  );
                },
              );
            }
          });
        };
        f.send();
      });
    }
    var l = 'data:application/json;base64';
    function m(a) {
      if (!a.includes(l)) throw c('err')('Invalid data uri mime type');
      a = a.split(',');
      a[0];
      a = a[1];
      if (a == null) throw c('err')('Data uri contains no contents');
      return j(atob(a));
    }
    function n(e, f) {
      var g, h;
      return b('regeneratorRuntime').async(
        function (j) {
          while (1)
            switch ((j.prev = j.next)) {
              case 0:
                g = i();
                if (
                  !(
                    !c('ExecutionEnvironment').canUseDOM ||
                    g[e] === 'fetching' ||
                    g[e] === 'fetched'
                  )
                ) {
                  j.next = 3;
                  break;
                }
                return j.abrupt('return');
              case 3:
                j.prev = 3;
                g[e] = 'fetching';
                if (!f.includes(l)) {
                  j.next = 9;
                  break;
                }
                j.t0 = m(f);
                j.next = 12;
                break;
              case 9:
                j.next = 11;
                return b('regeneratorRuntime').awrap(k(f));
              case 11:
                j.t0 = j.sent;
              case 12:
                h = j.t0;
                d('MakeHasteTranslationsMap').setBatch(h.translations);
                h.virtual_modules.forEach(function (b) {
                  return a.define(b, {});
                });
                g[e] = 'fetched';
                j.next = 22;
                break;
              case 18:
                (j.prev = 18),
                  (j.t1 = j['catch'](3)),
                  (g[e] = 'failed'),
                  c('FBLogger')(
                    'binary_transparency',
                    'translation_download_error',
                  )
                    .catching(j.t1)
                    .warn(
                      'Unable to download and process translation map. Url: %s',
                      f,
                    );
              case 22:
              case 'end':
                return j.stop();
            }
        },
        null,
        this,
        [[3, 18]],
      );
    }
    function e(a) {
      a = Object.entries(a);
      for (var b = 0; b < a.length; b++) {
        var c = a[b],
          d = c[0];
        c = c[1];
        n(d, c);
      }
    }
    g.genFetchAndProcessTranslations = n;
    g.fetchTranslationsForEarlyFlush = e;
  },
  98,
);
