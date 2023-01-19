__d(
  'handleCometReauthenticationSideEffects',
  [
    'errorCode',
    'CometErrorOverlay',
    'CometRelayEnvironmentProvider',
    'CometRouteURL',
    'CometTransientDialogProvider.react',
    'JSResourceForInteraction',
    'OutsideExceptionKeyCommandListener.react',
    'SecuredActionChallengePasswordDialog.entrypoint',
    'SecuredActionChallengeSSODialog.entrypoint',
    'SecuredActionUtils',
    'cr:4840',
    'err',
    'react',
    'useCometEntryPointDialog',
    'useCometLazyDialog',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react'),
      j = d('react').useEffect,
      k = new Set(),
      l = new Set(),
      m = c('JSResourceForInteraction')('WorkSSOReauthDialog.react').__setRef(
        'handleCometReauthenticationSideEffects',
      );
    function a(a, b, c) {
      var d;
      a = a == null ? void 0 : a.source;
      d =
        (d =
          (d = a == null ? void 0 : a.errorCode) != null
            ? d
            : a == null
            ? void 0
            : a.code) != null
          ? d
          : a == null
          ? void 0
          : a.error;
      if (d === 3490037) {
        k.has(d) || (k.add(d), n(d));
        return !0;
      }
      if (d === 2136001) {
        l.add({ onError: c, onSuccess: b });
        !k.has(d) &&
        (a == null ? void 0 : a.description) === 'mwa_email_verification'
          ? (k.add(d), r(d))
          : k.has(d) || (k.add(d), o(d, a == null ? void 0 : a.description));
        return !0;
      }
      return !1;
    }
    function n(a) {
      d('CometErrorOverlay').injectComponent(function (b) {
        function d() {
          var d = c('useCometLazyDialog')(m),
            e = d[0],
            f = function () {
              k['delete'](a), b();
            };
          j(
            function () {
              e({
                onSuccess: function () {
                  f();
                },
              });
            },
            [e],
          );
          return null;
        }
        return i.jsx(c('CometRelayEnvironmentProvider'), {
          children: i.jsx(c('OutsideExceptionKeyCommandListener.react'), {
            children: i.jsx(c('CometTransientDialogProvider.react'), {
              children: i.jsx(d, {}),
            }),
          }),
        });
      });
    }
    function o(a, b) {
      d('CometErrorOverlay').injectComponent(function (e) {
        function f() {
          var f = null;
          switch (b) {
            case 'work_sso':
              f = c('SecuredActionChallengeSSODialog.entrypoint');
              break;
            case 'password':
            default:
              f = c('SecuredActionChallengePasswordDialog.entrypoint');
              break;
          }
          var g = d('CometRouteURL').useRouteURL();
          f = c('useCometEntryPointDialog')(f, { return_uri: g });
          var h = f[0],
            i = function () {
              k['delete'](a), l.clear(), e();
            };
          j(function () {
            h({
              onExit: function () {
                p(), i();
              },
              onSuccess: function () {
                q(), i();
              },
            });
          }, []);
          return null;
        }
        return i.jsx(c('CometRelayEnvironmentProvider'), {
          children: i.jsx(c('OutsideExceptionKeyCommandListener.react'), {
            children: i.jsx(c('CometTransientDialogProvider.react'), {
              children: i.jsx(f, {}),
            }),
          }),
        });
      });
    }
    function p() {
      var a = c('err')(
        d('SecuredActionUtils').SECURED_ACTION_REAUTH_CANCELED_ERROR,
      );
      a.type = 'info';
      for (
        var b = l,
          e = Array.isArray(b),
          f = 0,
          b = e
            ? b
            : b[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var g;
        if (e) {
          if (f >= b.length) break;
          g = b[f++];
        } else {
          f = b.next();
          if (f.done) break;
          g = f.value;
        }
        g = g;
        g = g.onError;
        g(a);
      }
    }
    function q() {
      for (
        var a = l,
          b = Array.isArray(a),
          c = 0,
          a = b
            ? a
            : a[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var d;
        if (b) {
          if (c >= a.length) break;
          d = a[c++];
        } else {
          c = a.next();
          if (c.done) break;
          d = c.value;
        }
        d = d;
        d = d.onSuccess;
        d();
      }
    }
    function r(a) {
      b('cr:4840') == null
        ? void 0
        : b('cr:4840')({
            cleanUp: function (b) {
              k['delete'](a), l.clear(), b();
            },
            executeSuccessCallbacks: q,
          });
    }
    g['default'] = a;
  },
  98,
);
