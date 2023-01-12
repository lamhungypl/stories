__d(
  'CometErrorRoot.react',
  [
    'fbt',
    'CometContentArea.react',
    'CometLink.react',
    'ConstUriUtils',
    'InteractionTracing',
    'NullState404FailedLoading',
    'NullStateGeneral',
    'NullStatePermissions',
    'TetraButton.react',
    'TetraNullState.react',
    'TetraText.react',
    'XCometHomeControllerRouteBuilder',
    'XCometProfileReactivationControllerRouteBuilder',
    'clearTimeout',
    'react',
    'setTimeout',
    'unrecoverableViolation',
    'useCometRouterDispatcher',
  ],
  function (a, b, c, d, e, f, g, h) {
    'use strict';
    var i = d('react');
    b = d('react');
    var j = b.useCallback,
      k = b.useEffect,
      l = b.useState,
      m = 8460,
      n = 6e3;
    function o() {
      var a = 0,
        b = 0;
      while (a === 0) a = Math.random();
      while (b === 0) b = Math.random();
      return Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * b);
    }
    function a(a) {
      var b,
        e,
        f,
        g = c('NullStateGeneral');
      (a == null ? void 0 : (b = a.routeProps) == null ? void 0 : b.privacy) &&
        (g = c('NullStatePermissions'));
      (a == null
        ? void 0
        : (b = a.routeProps) == null
        ? void 0
        : b.fourZerofour) && (g = c('NullState404FailedLoading'));
      b = c('XCometHomeControllerRouteBuilder').buildURL({});
      var p = c('useCometRouterDispatcher')(),
        q = j(
          function () {
            p && p.goBack && p.goBack();
          },
          [p],
        );
      c('InteractionTracing')
        .getPendingInteractions()
        .forEach(function (a) {
          a.addAnnotationInt('isError', 1);
        });
      var r = i.jsx(c('TetraButton.react'), {
        label: h._('__JHASH__nNZJp8LGg9-__JHASH__'),
        onPress: function () {
          return window.location.reload(!0);
        },
        padding: 'wide',
        size: 'large',
      });
      e =
        (e = d('ConstUriUtils').getUri('/help')) == null
          ? void 0
          : (e = e.getQualifiedUri()) == null
          ? void 0
          : e.toString();
      if (e == null)
        throw c('unrecoverableViolation')('help URL was null', 'comet_infra');
      var s;
      if (
        (a == null
          ? void 0
          : (f = a.routeProps) == null
          ? void 0
          : f.isAdminViewingDeactivatedProfile) === !0
      ) {
        f = c('XCometProfileReactivationControllerRouteBuilder').buildURL({});
        r = i.jsx(c('TetraButton.react'), {
          label: h._('__JHASH__NK6FnSISf2B__JHASH__'),
          linkProps: { url: f },
          padding: 'wide',
          size: 'large',
        });
        s = i.jsx('div', {
          className: 'x6s0dn4 x78zum5 xdt5ytf x9otpla',
          children: i.jsx('div', {
            className: 'xw7yly9',
            children: i.jsx(c('CometLink.react'), {
              href: b,
              target: '_blank',
              children: i.jsx(c('TetraText.react'), {
                color: 'blueLink',
                type: 'bodyLink2',
                children: h._('__JHASH__KRYnHqLgyWP__JHASH__'),
              }),
            }),
          }),
        });
      } else
        ((a == null
          ? void 0
          : (f = a.routeProps) == null
          ? void 0
          : f.fourZerofour) ||
          (a == null
            ? void 0
            : (f = a.routeProps) == null
            ? void 0
            : f.privacy)) &&
          ((r = i.jsx(c('TetraButton.react'), {
            label: h._('__JHASH__KRYnHqLgyWP__JHASH__'),
            linkProps: { url: b },
            padding: 'wide',
            size: 'large',
          })),
          (s = i.jsxs('div', {
            className: 'x6s0dn4 x78zum5 xdt5ytf x9otpla',
            children: [
              i.jsx(c('CometLink.react'), {
                onClick: q,
                target: '_blank',
                children: i.jsx(c('TetraText.react'), {
                  color: 'blueLink',
                  type: 'bodyLink2',
                  children: h._('__JHASH__NfCVWpfhCDL__JHASH__'),
                }),
              }),
              i.jsx('div', {
                className: 'xw7yly9',
                children: i.jsx(c('CometLink.react'), {
                  href: e,
                  target: '_blank',
                  children: i.jsx(c('TetraText.react'), {
                    color: 'blueLink',
                    type: 'bodyLink2',
                    children: h._('__JHASH__cMm5duNHgCG__JHASH__'),
                  }),
                }),
              }),
            ],
          })));
      f = l(null);
      b = f[0];
      var t = f[1],
        u = a == null ? void 0 : (q = a.routeProps) == null ? void 0 : q.isBOC;
      k(
        function () {
          if (u === !0) {
            var a = Math.abs(m + o() * n),
              b = c('setTimeout')(function () {
                t(
                  i.jsx('iframe', {
                    className:
                      'x972fbf xcfux6l x1qhh985 xm0m39n xqtp20y xnalus7',
                  }),
                );
              }, a);
            return function () {
              return c('clearTimeout')(b);
            };
          }
        },
        [u],
      );
      return i.jsx(c('CometContentArea.react'), {
        verticalAlign: 'middle',
        children: i.jsxs('div', {
          className: 'x6s0dn4 x78zum5 xdt5ytf xvue9z x1ifrov1',
          'data-testid': void 0,
          children: [
            i.jsx(c('TetraNullState.react'), {
              action: r,
              body:
                ((e = a.routeProps) == null ? void 0 : e.body) ||
                h._('__JHASH__pXUti67uBgG__JHASH__'),
              headline:
                ((f = a.routeProps) == null ? void 0 : f.title) ||
                h._('__JHASH__UZWswU1h6cz__JHASH__'),
              icon: g,
            }),
            s,
            b,
          ],
        }),
      });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
