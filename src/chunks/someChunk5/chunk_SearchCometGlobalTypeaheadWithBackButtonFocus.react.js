__d(
  'SearchCometGlobalTypeaheadWithBackButtonFocus.react',
  [
    'CometPlaceholder.react',
    'CometTypeaheadBackButton.react',
    'Locale',
    'SearchCometGlobalTypeaheadGlimmer.react',
    'deferredLoadComponent',
    'react',
    'requireDeferred',
    'requireDeferredForDisplay',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict';
    var h = d('react');
    b = d('react');
    var i = b.useCallback,
      j = b.useState,
      k = c('deferredLoadComponent')(
        c('requireDeferredForDisplay')(
          'SearchCometGlobalTypeahead.react',
        ).__setRef('SearchCometGlobalTypeaheadWithBackButtonFocus.react'),
      ),
      l = c('deferredLoadComponent')(
        c('requireDeferred')(
          'SearchCometGlobalTypeaheadDataSourceLoader.react',
        ).__setRef('SearchCometGlobalTypeaheadWithBackButtonFocus.react'),
      ),
      m = d('Locale').isRTL();
    function a(a) {
      var b = a.children,
        d = a.inputInClosedAndBlurredTypeaheadXStyle,
        e = a.onBlur,
        f = a.onClose,
        g = a.onFocus,
        n = a.onOpen;
      a = a.queryString;
      var o = j(!1),
        p = o[0],
        q = o[1];
      o = j(!1);
      var r = o[0],
        s = o[1];
      o = i(
        function () {
          s(!1), e && e();
        },
        [e],
      );
      var t = i(
          function () {
            q(!1), f && f();
          },
          [f],
        ),
        u = i(
          function () {
            s(!0), g && g();
          },
          [g],
        ),
        v = i(
          function () {
            q(!0), n && n();
          },
          [n],
        );
      return b(
        r,
        h.jsxs(c('CometPlaceholder.react'), {
          fallback: h.jsx(c('SearchCometGlobalTypeaheadGlimmer.react'), {
            inputStartContent: h.jsx('div', { className: 'x1useyqa' }),
          }),
          children: [
            h.jsx(l, {}),
            h.jsx(k, {
              inputStartContent: h.jsxs(h.Fragment, {
                children: [
                  h.jsx('div', {
                    className: 'x6s0dn4 x78zum5 x2lah0s x14qfxbe',
                    children: h.jsx('div', {
                      className:
                        'xhb22t3 x6o7n8i xcj1dhv' +
                        ((p && m
                          ? ' xcd74o5'
                          : '' +
                            (p && !m
                              ? ' xcd74o5'
                              : '' +
                                (m
                                  ? ' xl8ke66'
                                  : '' +
                                    (m
                                      ? '' + (p ? '' : '' + (p ? '' : ''))
                                      : ' xm1jes4')))) +
                          ((p ? ' x1hc1fzr' : '' + (p ? '' : ' xg01cxk')) +
                            (p ? '' : ' x47corl'))),
                      children: h.jsx(c('CometTypeaheadBackButton.react'), {}),
                    }),
                  }),
                  h.jsx('div', {
                    className:
                      'x78zum5 x2lah0s x1s65kcs x13w7htt' +
                      (p ? ' xnalus7 xhb22t3 xxrbq2n xcj1dhv' : ' xsmyaan'),
                    children: '\xa0',
                  }),
                ],
              }),
              inputXStyle: !p && !r && d,
              onBlur: o,
              onClose: t,
              onFocus: u,
              onOpen: v,
              queryString: a,
            }),
          ],
        }),
      );
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    g['default'] = a;
  },
  98,
);
