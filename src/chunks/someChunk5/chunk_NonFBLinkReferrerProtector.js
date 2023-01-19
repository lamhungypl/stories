__d(
  'NonFBLinkReferrerProtector',
  ['$', 'Event', 'LinkshimHandlerConfig', 'Parent', 'URI', 'setTimeout'],
  function (a, b, c, d, e, f) {
    'use strict';
    var g,
      h = (g || (g = b('URI'))).goURIOnWindow,
      i = {
        alreadySetup: !1,
        originReferrerPolicyClickWithoutLog: function (a) {
          var c = b('$')('meta_referrer');
          c.content = b('LinkshimHandlerConfig').switched_meta_referrer_policy;
          b('setTimeout')(function () {
            c.content = b('LinkshimHandlerConfig').default_meta_referrer_policy;
          }, 100);
        },
        setupDelegation: function (a) {
          a === void 0 && (a = !1);
          if (document.body == null) {
            if (a) return;
            b('setTimeout')(function () {
              i.setupDelegation(!0);
            }, 100);
            return;
          }
          if (i.alreadySetup) return;
          i.alreadySetup = !0;
          a = function (a) {
            var c = i.getMaybeNonFBLinkReferrerJSMode(a.target);
            if (!c) return;
            var d = c[0];
            c = c[1];
            switch (d) {
              case 'origin':
                i.originReferrerPolicyClickWithoutLog(c);
                break;
              case 'ie':
                d = new (g || (g = b('URI')))(c.href);
                a.preventDefault();
                h(d, window.open('', c.target), !0);
                break;
            }
          };
          b('Event').listen(document.body, 'click', a);
        },
        getMaybeNonFBLinkReferrerJSMode: function (a) {
          a = b('Parent').byAttribute(a, 'data-lnfb-mode');
          if (a instanceof HTMLAnchorElement) {
            var c = a.getAttribute('data-lnfb-mode');
            switch (c) {
              case 'ie':
              case 'origin':
                return [c, a];
              default:
                return null;
            }
          }
          return null;
        },
      };
    e.exports = i;
  },
  null,
);
