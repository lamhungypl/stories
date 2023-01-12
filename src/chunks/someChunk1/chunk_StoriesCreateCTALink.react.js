__d(
  'StoriesCreateCTALink.react',
  [
    'fbt',
    'ix',
    'CometRelay',
    'StoriesCreateCTALink.graphql',
    'StoriesCreateCTALinkPicker.react',
    'StoriesCreateCTALinkReducer',
    'StoriesCreateCTAUtils',
    'StoriesCreateFormAddDataButton',
    'StoriesCreateViewStateDispatcherContext',
    'TetraIcon.react',
    'fbicon',
    'react',
    'useCometConfirmationDialog',
    'useStoriesCreateReducer',
    'withStoriesCreateViewStatePart',
  ],
  function (a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j,
      k = d('react');
    e = d('react');
    var l = e.useCallback,
      m = e.useContext,
      n = e.useEffect,
      o = e.useState,
      p = j !== void 0 ? j : (j = b('StoriesCreateCTALink.graphql'));
    function a(a) {
      var b = a.ctaData;
      a = a.dataRef;
      var e = o(!1),
        f = e[0],
        g = e[1];
      e = o({ addressLink: null, phoneNumberLink: null, websiteLink: null });
      var j = e[0],
        q = e[1],
        r = c('useCometConfirmationDialog')();
      c('useStoriesCreateReducer')(c('StoriesCreateCTALinkReducer'));
      var s = m(c('StoriesCreateViewStateDispatcherContext'));
      e = d('CometRelay').useFragment(p, a);
      var t = e == null ? void 0 : (a = e.viewer) == null ? void 0 : a.actor;
      a =
        ((t == null ? void 0 : t.__typename) === 'User' &&
          (t == null ? void 0 : t.is_additional_profile_plus)) ||
        !1;
      n(
        function () {
          if ((t == null ? void 0 : t.__typename) === 'Page') {
            var a;
            q({
              addressLink: d('StoriesCreateCTAUtils').getURLFromAddress(t),
              phoneNumberLink: d('StoriesCreateCTAUtils').getURLFromPhoneNumber(
                t,
              ),
              websiteLink:
                (a = t == null ? void 0 : t.websites[0]) != null ? a : null,
            });
          }
        },
        [t],
      );
      var u = l(
        function (a) {
          s({
            data: {
              ctaType: a.ctaType,
              link: a.link,
              linkInputError: !1,
              page: a.page,
            },
            type: 'CTA_LINK_UPDATE',
          });
        },
        [s],
      );
      if ((t == null ? void 0 : t.__typename) !== 'Page' && !a) return null;
      a = function () {
        r(
          {
            body: h._('__JHASH__H3k-ZpwqHTg__JHASH__'),
            confirm: h._('__JHASH__-LI-SR4DHHv__JHASH__'),
            title: h._('__JHASH__30mJ1KR1WqS__JHASH__'),
          },
          function () {
            s({ type: 'CTA_LINK_DELETE' }), g(!1);
          },
        );
      };
      return f
        ? k.jsx(c('StoriesCreateCTALinkPicker.react'), {
            dataRef: e,
            linkInputError: b.linkInputError,
            onChange: u,
            onDelete: a,
            pageLinks: j,
          })
        : k.jsx(c('StoriesCreateFormAddDataButton'), {
            icon: k.jsx(c('TetraIcon.react'), {
              color: 'primary',
              icon: d('fbicon')._(i('481759'), 16),
            }),
            label: h._('__JHASH___U61gJj3biR__JHASH__'),
            onPress: function () {
              g(!0);
            },
          });
    }
    a.displayName = a.name + ' [from ' + f.id + ']';
    e = c('withStoriesCreateViewStatePart')(a, function (a) {
      return { ctaData: a.ctaLinkData };
    });
    g['default'] = e;
  },
  98,
);
