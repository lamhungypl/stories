__d(
  'CometUBTMidTaskRoot.react',
  [
    'CometPlaceholder.react',
    'CometUBTContext',
    'deferredLoadComponent',
    'emptyFunction',
    'react',
    'requireDeferredForDisplay',
    'setTimeout',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useContext,
      j = b.useEffect,
      k = b.useState,
      l = c('deferredLoadComponent')(
        c('requireDeferredForDisplay')('CometUBTBorder.react').__setRef(
          'CometUBTMidTaskRoot.react',
        ),
      ),
      m = c('deferredLoadComponent')(
        c('requireDeferredForDisplay')('CometUBTPulse.react').__setRef(
          'CometUBTMidTaskRoot.react',
        ),
      ),
      n = 4e3;
    function a() {
      var a = i(c('CometUBTContext')),
        b = k('start'),
        d = b[0],
        e = b[1],
        f = a == null ? void 0 : a.state,
        g = (f == null ? void 0 : f.taskState) === 'ACTIVE';
      j(
        function () {
          g &&
            (d === 'start' &&
              (e('pulse'),
              c('setTimeout')(function () {
                e('border');
              }, n)),
            d === 'border' &&
              c('setTimeout')(function () {
                e(null);
              }, n),
            (f == null ? void 0 : f.taskResult) === 'SUCCESS' &&
              d !== 'end' &&
              (e('success'),
              c('setTimeout')(function () {
                e('end');
              }, n)));
        },
        [d, e, f == null ? void 0 : f.taskResult, g],
      );
      return !g
        ? null
        : h.jsxs(c('CometPlaceholder.react'), {
            fallback: null,
            children: [
              h.jsx(l, { shouldShowTooltip: d === 'border' }),
              h.jsx(m, {
                setHideTooltip:
                  d === 'pulse'
                    ? function () {
                        return e('border');
                      }
                    : d === 'success'
                    ? function () {
                        return e('end');
                      }
                    : c('emptyFunction'),
                tooltip: d,
              }),
            ],
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
